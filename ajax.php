<?php
require_once 'inc/config.php';

if(isset($_REQUEST["run_process"]))
{
	$res = check_table('tasks',"status = '4'");
	while($row = mysqli_fetch_assoc($res)){
        $res1 = check_table('notifications',"task_id = '".$row['id']."' AND mag_id = '1' AND text like '%mark Completed%'");
        $row1 = mysqli_fetch_assoc($res1);
		update('tasks',array('completed_date' => $row1['time']),"id = '".$row['id']."'");
    }
	exit();
}

if(isset($_REQUEST["login"]))
{
    $email = mysqli_real_escape_string($conn,$_REQUEST["email"]);
    $pass  = mysqli_real_escape_string($conn,$_REQUEST["password"]);
    
	$res = check_table('developers',"email = '".$email."' AND password = '".md5($pass)."'");
	$row = mysqli_fetch_assoc($res);
    if(mysqli_num_rows($res) == 1)
	{
       $_SESSION['developer'] = $row;
       echo "1";
    }
    else
    {
       echo "Wrong email or password";
    }
	
	return true;
	exit();
}

if(isset($_REQUEST["logout"]))
{
    unset($_SESSION["developer"]);
	session_destroy();
    return true;
	exit();
}

if(isset($_REQUEST["forget_password"]))
{
    $email = mysqli_real_escape_string($conn,$_REQUEST["email"]);
	
	$res = check_table('developers',"email = '".$email."'");
	$row = mysqli_fetch_assoc($res);
    if(mysqli_num_rows($res) > 0)
	{
		$result = mail_for_change_password($row['id'],$row['email']);
		echo $result;
    }
    else
    {
       echo "Email Not Found!";
    }
	
	return true;
	exit();
}

if(isset($_REQUEST["new_password"]))
{
	if($_REQUEST["password"] == $_REQUEST["retype_password"])
	{
		$key = explode(' ',$_REQUEST['key']);
		$post = array(
			'password' 		   =>  md5($_REQUEST["password"]),
			'retype_password'  =>  $_REQUEST["password"]
		);
		update('developers',$post,"md5(id) = '".$key['0']."'");
		echo "1";
	}
	else
	{
		echo "Password Mismatch!";
	}
	
	return true;
	exit();
}

if(isset($_REQUEST['update_info']))
{
	$_SESSION['pagetab'] = 'personalinfo';
	$post = array(
		'name' 	=> $_REQUEST["name"],
		'email' => $_REQUEST["email"],
		'phone' => $_REQUEST["phone"]
	);
	update('developers',$post,"id = '".$_REQUEST["id"]."'");
	
	echo "1";
	return true;
	exit();
}

if(isset($_REQUEST['update_pass']))
{
	$_SESSION['pagetab'] = 'credentialinfo';
	$post = array(
		'password' 		   =>  md5($_REQUEST["password"]),
		'retype_password'  =>  $_REQUEST["password"]
	);
	update('developers',$post,"id = '".$_REQUEST["id"]."'");
	
	echo "1";
	return true;
	exit();
}

if(isset($_REQUEST['setGMT']))
{
	$dtz  = new DateTimeZone($_REQUEST['setGMT']);
	$time = new DateTime('now', $dtz);
	$offset = $dtz->getOffset( $time ) / 3600;
	echo ($offset < 0 ? $offset : "+".$offset);
	exit();
}

if(isset($_REQUEST['update_timezone']))
{
	$_SESSION['pagetab'] = 'timezonedst';
	
	if($_REQUEST["dst_status"] == 'on'){
		$dst_value = $_REQUEST['dst_value'];
	}
	else{
		$dst_value = '';
	}
	
	$post = array(
		'timezone'   =>  $_REQUEST["timezone"],
		'gmt_sign'   =>  $_REQUEST["gmt_sign"],
		'gmt_value'  =>  $_REQUEST["gmt_value"],
		'dst_status' =>  $_REQUEST["dst_status"],
		'dst_value'  =>  $dst_value
	);
	update('tbl_timezone',$post,"id = '".$_REQUEST["id"]."'");
	
	echo "1";
	return true;
	exit();
}

if(isset($_REQUEST['update_task']))
{
	if($_REQUEST['status'] == '4'){
        $post = array(
            'status'  		  => $_REQUEST['status'],
            'progress'   	  => $_REQUEST["progress"],
            'stage'   		  => $_REQUEST["stage"],
            'completion_date' => $_REQUEST["completion_date"],
            'completed_date'  => date('Y-m-d H:i:s')
        );
        update('tasks',$post,"id = '".$_REQUEST["id"]."'");
		send_notification($_REQUEST["id"],$_REQUEST["mag_id"],'mark Completed');
	}
	elseif($_REQUEST['status'] == '3'){
        $post = array(
            'status'  		  => $_REQUEST['status'],
            'progress'   	  => '0',
            'stage'   		  => '',
            'completion_date' => '',
            'completed_date'  => ''
        );
        update('tasks',$post,"id = '".$_REQUEST["id"]."'");
		send_notification($_REQUEST["id"],$_REQUEST["mag_id"],'Left by developer');
	}
    else{
        $post = array(
            'status'  		  => $_REQUEST['status'],
            'progress'   	  => $_REQUEST["progress"],
            'stage'   		  => $_REQUEST["stage"],
            'completion_date' => $_REQUEST["completion_date"],
            'completed_date'  => ''
        );
        update('tasks',$post,"id = '".$_REQUEST["id"]."'");
    }
	
	return true;
	exit();
}

if(isset($_REQUEST['upload_files']))
{
	$task_id = $_REQUEST["task_id"];
	$task_file_id = $_REQUEST["task_file_id"];
	$link = mysqli_real_escape_string($conn,$_REQUEST["link"]);
	$dir  = "/assets/task_files/" . $task_id . "/";
	$file = count($_FILES['file']['name']);
	
	if(!is_dir($dir))
	{
		mkdir("assets/task_files/" . $task_id);
	}
	
	for($i=0; $i<$file; $i++)
	{
		if($_FILES["file"]["name"][$i] != '')
		{
			$temp = explode(".", $_FILES["file"]["name"][$i]);
			$newfilename = $task_id . "_" . round(microtime(true)) . "$i." . end($temp);
			$sourcePath = $_FILES["file"]['tmp_name'][$i];
			$targetPath = "assets/task_files/" . $task_id . "/" . $newfilename;
			$Path = "assets/task_files/" . $task_id . "/" . $newfilename;
			move_uploaded_file($sourcePath,$targetPath);
			insert('tasks_files_developer',array('task_file_id' => $task_file_id,'name' => mysqli_real_escape_string($conn,$temp[0]),'path' => $Path,'link' => ''));
			send_notification($task_id,$_REQUEST["mag_id"],'new file uploaded');
		}
	}
	
	if(!empty($link)){
		insert('tasks_files_developer',array('task_file_id' => $task_file_id,'path' => '','link' => $link));
	}
	
	echo "<script>window.location.href='task_details.php?task_id=".$task_id."'</script>";
	exit();
}

if(isset($_REQUEST['del_file']))
{
	if(!empty($_REQUEST['path'])){
		unlink($GLOBALS['documentRoot'].$_REQUEST['path']);
	}
	delete('tasks_files_developer',"id = '".$_REQUEST['del_file']."'");
	
	return true;
	exit();
}

if(isset($_REQUEST['add_notes']))
{
	if(!empty($_REQUEST["text"])){
		$post = array(
			'task_id' => $_REQUEST["task_id"],
			'dev_id'  => $_REQUEST["dev_id"],
			'mag_id'  => '',
			'text'	  => mysqli_real_escape_string($conn,$_REQUEST["text"])
		);
		insert('tasks_notes',$post);
	}
	
	echo Get_Notes($_REQUEST["task_id"],$_REQUEST["dev_id"]);
	return true;
	exit();
}

if(isset($_REQUEST['task_chat']))
{
    $mssg = mysqli_real_escape_string($conn,$_REQUEST["text"]);
	if(!empty($mssg)){
        $sql1 = "SELECT * FROM tasks_chat WHERE sender = 'developer' ORDER BY id DESC LIMIT 0,1";
		$res1 = $conn->query($sql1);
		$row1 = mysqli_fetch_assoc($res1);
		
		$sql2 = "SELECT * FROM tasks_chat WHERE sender = 'developer' AND text = '$mssg' ORDER BY id DESC LIMIT 0,1";
		$res2 = $conn->query($sql2);
		$row2 = mysqli_fetch_assoc($res2);
		
		if(mysqli_num_rows($res1) == 0 || $row1['id'] != $row2['id']){
            $post = array(
                'task_id' => $_REQUEST["task_id"],
                'mag_id'  => $_REQUEST["mag_id"],
                'dev_id'  => $_REQUEST["dev_id"],
                'sender'  => 'developer',
                'text'	  => $mssg
            );
            insert('tasks_chat',$post);
            
            $res = check_table('tasks',"id = '".$_REQUEST["task_id"]."'");
            $row = mysqli_fetch_assoc($res);
            send_notification($_REQUEST["task_id"],$_REQUEST["mag_id"],'new message recieved');
        }
	}
	
	echo Get_Chat($_REQUEST["task_id"],$_REQUEST["mag_id"],$_REQUEST["dev_id"]);
	return true;
	exit();
}

if(isset($_REQUEST['notification_click']))
{
	update('notifications',array('is_read' => '1'),"id = '".$_REQUEST['notification_click']."'");
	
	if(!empty($_REQUEST["task_id"])){
		echo '1';
	}
	else{
		echo '0';
	}
	
	return true;
	exit();
}
?>