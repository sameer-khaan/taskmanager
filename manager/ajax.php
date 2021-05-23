<?php
require_once 'inc/config.php';

if(isset($_REQUEST["login"]))
{
    $email = mysqli_real_escape_string($conn,$_REQUEST["email"]);
    $pass  = mysqli_real_escape_string($conn,$_REQUEST["password"]);
    
	$res = check_table('manager',"email = '".$email."' AND password = '".md5($pass)."'");
	$row = mysqli_fetch_assoc($res);
    if(mysqli_num_rows($res) == 1)
	{
       $_SESSION['manager'] = $row;
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
    unset($_SESSION["manager"]);
	session_destroy();
    return true;
	exit();
}

if(isset($_REQUEST["forget_password"]))
{
    $email = mysqli_real_escape_string($conn,$_REQUEST["email"]);
	
	$res = check_table('manager',"email = '".$email."'");
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
		update('manager',$post,"md5(id) = '".$key['0']."'");
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
	update('manager',$post,"id = '".$_REQUEST["id"]."'");
	
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
	update('manager',$post,"id = '".$_REQUEST["id"]."'");
	
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

if(isset($_REQUEST['add_developer']))
{
	$result = check_table('developers',"email = '".$_REQUEST["email"]."'");
    if(mysqli_num_rows($result) == 1)
	{
		echo "Email Already Exist";
		return true;
		exit();
	}
	
	$post = array(
		'mag_id'   			=> $_REQUEST["mag_id"],
		'name'   			=> $_REQUEST["name"],
		'email' 			=> $_REQUEST["email"],
		'phone' 			=> $_REQUEST["phone"],
		'password' 			=> md5($_REQUEST["password"]),
		'retype_password'	=> $_REQUEST["password"]
	);
	$result = insert('developers',$post);
	if($result){
		
		$dev_id = mysqli_insert_id($conn);
		
		$sql = "SELECT * FROM tbl_timezone WHERE user_id = '1' AND user_type = 'manager'";
		$row = mysqli_fetch_assoc($conn->query($sql));
		
		$sql = "INSERT into tbl_timezone(user_id, user_type, timezone, gmt_sign, gmt_value, dst_status, dst_value) values('".$dev_id."','developer','".$row['timezone']."','".$row['gmt_sign']."','".$row['gmt_value']."','".$row['dst_status']."','".$row['dst_value']."')";
		$conn->query($sql);
		
		mail_for_developer($_REQUEST["email"],$_REQUEST["password"]);
		echo "1";
	}
	else{
		echo mysqli_error($conn);
	}
	
	return true;
	exit();
}

if(isset($_REQUEST['update_developer']))
{
	$result = check_table('developers',"email = '".$_REQUEST["email"]."' AND id != '".$_REQUEST["id"]."'");
    if(mysqli_num_rows($result) == 1)
	{
		echo "Email Already Exist";
		return true;
		exit();
	}
	
	//set archived date
	if($_REQUEST["status"] == '4'){
		$archived_date = date('Y-m-d H:i:s');
	}
	else {
		$archived_date = '';
	}
	
	$post = array(
		'name'   			=> $_REQUEST["name"],
		'email' 			=> $_REQUEST["email"],
		'phone' 			=> $_REQUEST["phone"],
		'password' 			=> md5($_REQUEST["password"]),
		'retype_password'	=> $_REQUEST["password"],
		'status'			=> $_REQUEST["status"],
		'archived_date'		=> $archived_date
	);
	
	update('developers',$post,"id = '".$_REQUEST["id"]."'");
	echo "1";
	return true;
	exit();
}

if(isset($_REQUEST['create_task']))
{
	$result = check_table('tasks',"name = '".mysqli_real_escape_string($conn,$_REQUEST["name"])."' AND dev_id = '".$_REQUEST["dev_id"]."'");
    if(mysqli_num_rows($result) == 1)
	{
		echo "Task Already Exist";
		return true;
		exit();
	}
	
	$post = array(
		'mag_id'  		  => $_REQUEST["mag_id"],
		'dev_id'  		  => $_REQUEST["dev_id"],
		'name'   		  => mysqli_real_escape_string($conn,$_REQUEST["name"]),
		'description' 	  => mysqli_real_escape_string($conn,$_REQUEST["description"]),
		'priority_level'  => $_REQUEST["priority_level"],
		'status' 		  => '0',
		'progress' 		  => '0',
		'assigned_date'   => date('Y-m-d H:i:s')
	);
	$result = insert('tasks',$post);
	
	if($result == 1)
	{
		$task_id = mysqli_insert_id($conn);
		$dir  = "../assets/task_files/" . $task_id . "/";
		$file = count($_FILES['file']['name']);
		
		if(!is_dir($dir))
		{
			mkdir("../assets/task_files/" . $task_id);
		}
		
		for($i=0; $i<$file; $i++)
		{
			if($_FILES["file"]["name"][$i] != '')
			{
				$temp = explode(".", $_FILES["file"]["name"][$i]);
				$newfilename = $task_id . "_" . round(microtime(true)) . "$i." . end($temp);
				$sourcePath = $_FILES["file"]['tmp_name'][$i];
				$targetPath = "../assets/task_files/" . $task_id . "/" . $newfilename;
				$Path = "assets/task_files/" . $task_id . "/" . $newfilename;
				move_uploaded_file($sourcePath,$targetPath);
				insert('tasks_files_manager',array('task_id' => $task_id,'name' => mysqli_real_escape_string($conn,$temp[0]),'path' => $Path));
			}
		}
		
		$sql = "SELECT * FROM developers WHERE id = '".$_REQUEST["dev_id"]."'";
		$row = mysqli_fetch_assoc($conn->query($sql));
		
		send_notification($task_id,$_REQUEST["dev_id"],'New Task have been assigned to you');
		mail_for_task_assigned($_REQUEST["name"],$row["email"]);
		echo "1";
	}
	else
	{
		echo mysqli_error($conn);
	}
	
	return true;
	exit();
}

if(isset($_REQUEST['update_task']))
{
	$task_id = $_REQUEST["id"];
	$result  = check_table('tasks',"name = '".mysqli_real_escape_string($conn,$_REQUEST["name"])."' AND id != '$task_id'");
    if(mysqli_num_rows($result) == 1)
	{
		echo "Name Already Exist";
		return true;
		exit();
	}
	
	if(isset($_REQUEST['re_assign'])){
		if($_REQUEST['re_assign'] == $_REQUEST['dev_id']){
			$dev_id = $_REQUEST['dev_id'];
			$post = array(
				'dev_id'  		  => $dev_id,
				'name'   		  => mysqli_real_escape_string($conn,$_REQUEST["name"]),
				'description' 	  => mysqli_real_escape_string($conn,$_REQUEST["description"]),
				'priority_level'  => $_REQUEST["priority_level"]
			);
		}
		else{
			delete('notifications',"task_id = '$task_id' AND dev_id = '".$_REQUEST['dev_id']."'");

			$dev_id = $_REQUEST['re_assign'];
			send_notification($task_id,$dev_id,'New Task have been assigned to you');

			$sql = "SELECT * FROM developers WHERE id = '$dev_id'";
			$row = mysqli_fetch_assoc($conn->query($sql));
			mail_for_task_assigned($_REQUEST["name"],$row["email"]);

			$post = array(
				'dev_id'  		  => $dev_id,
				'name'   		  => mysqli_real_escape_string($conn,$_REQUEST["name"]),
				'description' 	  => mysqli_real_escape_string($conn,$_REQUEST["description"]),
				'priority_level'  => $_REQUEST["priority_level"],
				'status' 		  => '0',
				'progress' 		  => '0',
				'stage'			  => '',
				'completion_date' => '',
				'assigned_date'   => date('Y-m-d H:i:s')
			);
		}
	}
	else{
		$dev_id = $_REQUEST['dev_id'];
		$post = array(
			'dev_id'  		  => $dev_id,
			'name'   		  => mysqli_real_escape_string($conn,$_REQUEST["name"]),
			'description' 	  => mysqli_real_escape_string($conn,$_REQUEST["description"]),
			'priority_level'  => $_REQUEST["priority_level"]
		);
	}
	update('tasks',$post,"id = '$task_id'");
	
	$dir  = "../assets/task_files/" . $task_id . "/";
	$file = count($_FILES['file']['name']);

	if(!is_dir($dir))
	{
		mkdir("../assets/task_files/" . $task_id);
	}

	for($i=0; $i<$file; $i++)
	{
		if($_FILES["file"]["name"][$i] != '')
		{
			$temp = explode(".", $_FILES["file"]["name"][$i]);
			$newfilename = $task_id . "_" . round(microtime(true)) . "$i." . end($temp);
			$sourcePath = $_FILES["file"]['tmp_name'][$i];
			$targetPath = "../assets/task_files/" . $task_id . "/" . $newfilename;
			$Path = "assets/task_files/" . $task_id . "/" . $newfilename;
			move_uploaded_file($sourcePath,$targetPath);
			insert('tasks_files_manager',array('task_id' => $task_id,'name' => mysqli_real_escape_string($conn,$temp[0]),'path' => $Path));
			send_notification($task_id,$dev_id,'new file uploaded');
		}
	}
	
	echo "1";
	return true;
	exit();
}

if(isset($_REQUEST['upload_files']))
{
	$task_id = $_REQUEST["id"];
    $dev_id  = $_REQUEST['dev_id'];
	$dir  = "../assets/task_files/" . $task_id . "/";
	$file = count($_FILES['file']['name']);

	if(!is_dir($dir))
	{
		mkdir("../assets/task_files/" . $task_id);
	}

	for($i=0; $i<$file; $i++)
	{
		if($_FILES["file"]["name"][$i] != '')
		{
			$temp = explode(".", $_FILES["file"]["name"][$i]);
			$newfilename = $task_id . "_" . round(microtime(true)) . "$i." . end($temp);
			$sourcePath = $_FILES["file"]['tmp_name'][$i];
			$targetPath = "../assets/task_files/" . $task_id . "/" . $newfilename;
			$Path = "assets/task_files/" . $task_id . "/" . $newfilename;
			move_uploaded_file($sourcePath,$targetPath);
			insert('tasks_files_manager',array('task_id' => $task_id,'name' => mysqli_real_escape_string($conn,$temp[0]),'path' => $Path));
			send_notification($task_id,$dev_id,'new file uploaded');
		}
	}
	
	echo "1";
	return true;
	exit();
}

if(isset($_REQUEST['task_delete']))
{
	$task_id = $_REQUEST['task_delete'];
	delete('tasks',"id = '$task_id'");
	delete('notifications',"task_id = '$task_id'");
	return true;
	exit();
}

if(isset($_REQUEST['task_archive']))
{
	$task_id = $_REQUEST['task_archive'];
	$post = array(
		'is_archived'	=> '1',
		'archived_date' => date('Y-m-d H:i:s')
	);
	update('tasks',$post,"id = '$task_id'");
	
	$res = check_table('tasks',"id = '$task_id'");
	$row = mysqli_fetch_assoc($res);
	send_notification($task_id,$row["dev_id"],'moved to archives');
	
	return true;
	exit();
}

if(isset($_REQUEST['task_incomplete']))
{
	$task_id = $_REQUEST['task_incomplete'];
	$post = array(
		'status' => '5'
	);
	update('tasks',$post,"id = '$task_id'");
	
	$res = check_table('tasks',"id = '$task_id'");
	$row = mysqli_fetch_assoc($res);
	send_notification($task_id,$row["dev_id"],'mark incomplete');
	
	return true;
	exit();
}

if(isset($_REQUEST['del_file']))
{
	$res = check_table('tasks_files_developer',"task_file_id = '".$_REQUEST["del_file"]."'");
    if(mysqli_num_rows($res) == 0)
	{
		unlink($GLOBALS['documentRoot'].$_REQUEST['path']);
		delete('tasks_files_manager',"id = '".$_REQUEST['del_file']."'");
		echo "1";
	}
	else{
		echo "Cannot Delete! Developer File Exist";
	}
	
	return true;
	exit();
}

if(isset($_REQUEST['add_notes']))
{
	if(!empty($_REQUEST["text"])){
		$post = array(
			'task_id' => $_REQUEST["task_id"],
			'mag_id'  => $_REQUEST["mag_id"],
			'dev_id'  => '',
			'text'	  => mysqli_real_escape_string($conn,$_REQUEST["text"])
		);
		insert('tasks_notes',$post);
	}
	
	echo Get_Notes($_REQUEST["task_id"],$_REQUEST["mag_id"]);
	return true;
	exit();
}

if(isset($_REQUEST['task_chat']))
{
    $mssg = mysqli_real_escape_string($conn,$_REQUEST["text"]);
	if(!empty($mssg)){
        $sql1 = "SELECT * FROM tasks_chat WHERE sender = 'manager' ORDER BY id DESC LIMIT 0,1";
		$res1 = $conn->query($sql1);
		$row1 = mysqli_fetch_assoc($res1);
		
		$sql2 = "SELECT * FROM tasks_chat WHERE sender = 'manager' AND text = '$mssg' ORDER BY id DESC LIMIT 0,1";
		$res2 = $conn->query($sql2);
		$row2 = mysqli_fetch_assoc($res2);
		
		if(mysqli_num_rows($res1) == 0 || $row1['id'] != $row2['id']){
            $post = array(
                'task_id' => $_REQUEST["task_id"],
                'mag_id'  => $_REQUEST["mag_id"],
                'dev_id'  => $_REQUEST["dev_id"],
                'sender'  => 'manager',
                'text'	  => $mssg
            );
            insert('tasks_chat',$post);

            $res = check_table('tasks',"id = '".$_REQUEST["task_id"]."'");
            $row = mysqli_fetch_assoc($res);
            send_notification($_REQUEST["task_id"],$_REQUEST["dev_id"],'new message recieved');
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