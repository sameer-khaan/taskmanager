<?php

function time_elapsed_string($datetime, $full = false) {
    $now = new DateTime;
    $ago = new DateTime($datetime);
    $diff = $now->diff($ago);

    $diff->w = floor($diff->d / 7);
    $diff->d -= $diff->w * 7;

    $string = array(
        'y' => 'year',
        'm' => 'month',
        'w' => 'week',
        'd' => 'day',
        'h' => 'hour',
        'i' => 'minute',
        's' => 'second',
    );
    foreach ($string as $k => &$v) {
        if ($diff->$k) {
            $v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? 's' : '');
        } else {
            unset($string[$k]);
        }
    }

    if (!$full) $string = array_slice($string, 0, 1);
    return $string ? implode(', ', $string) . ' ago' : 'just now';
}

function check_table($table,$where)
{
	global $conn;
	$sql = "SELECT * FROM $table WHERE $where";
	$res = $conn->query($sql);
	if($res){
		return $res;
	}
	else{
		return 0;
	}
}

function insert($table,$post)
{
	global $conn;
	
	$insert_keys	= '';
	$insert_values	= '';

	foreach($post as $key => $value)
	{
			$insert_keys	.=	"`".$key."`,";
			$insert_values	.=	"'".$value."',";
	}

	$insert_keys	=	rtrim($insert_keys,",");
	$insert_values	=	rtrim($insert_values,",");

	$sql = "INSERT INTO $table(".$insert_keys.") VALUES(".$insert_values.")";
	$res = $conn->query($sql);
	
	if($res){
		return 1;
	}
	else{
		return 0;
	}
}

function update($table,$post,$where)
{
	global $conn;
	
	$insert	= '';

	foreach($post as $key => $value)
	{
			$insert	.=	"`".$key."`='".$value."',";
	}

	$insert	= rtrim($insert,",");

	$sql = "UPDATE $table SET ".$insert." WHERE $where";
	$res = $conn->query($sql);
	
	if($res){
		return 1;
	}
	else{
		return 0;
	}
}

function delete($table,$where)
{
	global $conn;
	$sql = "DELETE FROM $table WHERE $where";
	$res = $conn->query($sql);
	if($res){
		return $res;
	}
	else{
		return 0;
	}
}

function get_status($id,$type)
{
	global $conn;
	
	$sql = "SELECT * FROM status WHERE value = '$id' AND type = '$type'";
	$res = $conn->query($sql);
	$row = mysqli_fetch_assoc($res);
	return $row['name'];
}

function unread_notification()
{
	global $conn;
	$count = 0;
	$sql = "SELECT * FROM notifications WHERE mag_id = '".$_SESSION["manager"]["id"]."' ORDER BY id DESC LIMIT 0,15";
	$res = $conn->query($sql);
	while($row = mysqli_fetch_assoc($res)){
		if($row['is_read'] == '0'){
			$count = $count + 1;
		}
	}
	if($count > 0){
		echo '('.$count.')';
	}
}

function insert_notes($task_id,$mag_id,$text)
{
	global $conn;
	
	$post = array(
		'task_id' => $task_id,
		'mag_id'  => $mag_id,
		'text' 	  => mysqli_real_escape_string($conn,$text)
	);
	insert('tasks_notes',$post);
}

function send_notification($task_id,$dev_id,$text)
{
	global $conn;
	
	$post = array(
		'task_id' => $task_id,
		'dev_id'  => $dev_id,
		'text' 	  => mysqli_real_escape_string($conn,$text)
	);
	insert('notifications',$post);
}

function get_developer_name($dev_id)
{
	global $conn;
	
	$sql = "SELECT * FROM developers WHERE id = '$dev_id'";
	$res = $conn->query($sql);
	$row = mysqli_fetch_assoc($res);
	return $row['name'];
}

function get_task_name($task_id)
{
	global $conn;
	
	$sql = "SELECT * FROM tasks WHERE id = '$task_id'";
	$res = $conn->query($sql);
	$row = mysqli_fetch_assoc($res);
	return $row['name'];
}

function Get_Notes($task_id,$mag_id)
{
	global $conn;
	
	$sql = "SELECT * FROM tasks_notes WHERE task_id = '$task_id' AND mag_id = '$mag_id' AND dev_id = '' ORDER BY id DESC";
	$res = $conn->query($sql);
	if(mysqli_num_rows($res) > 0){
	?>
		<table class="table table-condensed table-bordered">
			<thead>
				<tr>
					<th style="font-weight: bold;">Notes</th>
					<th style="font-weight: bold; width:100px; ">Time</th>
				</tr>
			</thead>
			<tbody>
			<?php
			while($row = mysqli_fetch_assoc($res)){
				$time = date_format(date_create($row['time']),'m/d/Y').'<br>'.date_format(date_create($row['time']),'H:i A');
				?>
				<tr>
					<td><?php echo $row['text']; ?></td>
					<td><?php echo $time; ?></td>
				</tr>
				<?php
			}
			?>
			</tbody>
		</table>
	<?php
	}
	else{
	?>
		<table class="table table-condensed table-bordered">
			<thead>
				<tr>
					<th style="font-weight: bold;">Notes</th>
					<th style="font-weight: bold; width:100px; ">Time</th>
				</tr>
			</thead>
			<tbody>
			<tr>
				<td colspan="2"><center><h4>Start saving notes for personal use</h4></center></td>
			</tr>
			</tbody>
		</table>
	<?php
	}
}

function Get_Chat($task_id,$mag_id,$dev_id)
{
	global $conn;
	
	$sql1  = "SELECT * FROM manager WHERE id = '$dev_id'";
	$row1  = mysqli_fetch_assoc($conn->query($sql1));
	
	$sql  = "SELECT * FROM tasks_chat WHERE task_id = '$task_id' AND mag_id = '$mag_id' AND dev_id = '$dev_id' ORDER BY id DESC";
	$res  = $conn->query($sql);
	while($row = mysqli_fetch_assoc($res))
	{
		if($row['sender'] == 'developer'){
		?>
			<div class="chat_left_round"><?php echo substr(trim(get_developer_name($dev_id)), 0, 1); ?></div>
			<div class="chat_left">
				<div class="head">
					<?php echo $row['text'] ?>
				</div>
				<div class="bottom">
					<?php echo trim(get_developer_name($dev_id)).', '.date_format(date_create($row['time']),'m/d/Y, H:i A') ?>
				</div>
			</div>
			<div style="clear:both"></div>
		<?php
		}
		else{
		?>
			<div class="chat_right_round"><?php echo substr(trim($row1['name']), 0, 1); ?></div>
			<div class="chat_right">
				<div class="head">
					<?php echo $row['text'] ?>
				</div>
				<div class="bottom">
					<?php echo trim($row1['name']).', '.date_format(date_create($row['time']),'m/d/Y, H:i A') ?>
				</div>
			</div>
			<div style="clear:both"></div>
		<?php
		}
	}
}

function Get_Notification()
{
	global $conn;
	
	$sql  = "SELECT * FROM notifications WHERE mag_id = '".$_SESSION["manager"]["id"]."' ORDER BY id DESC LIMIT 0,15";
	$res  = $conn->query($sql);
	if(mysqli_num_rows($res) > 0){
		while($row = mysqli_fetch_assoc($res)){
            
            $sql1 = "SELECT * FROM tasks WHERE id = '".$row['task_id']."'";
	        $res1 = $conn->query($sql1);
            $row1 = mysqli_fetch_assoc($res1);
            $dev_name  = get_developer_name($row1['dev_id']);
            $task_name = get_task_name($row['task_id']);
            
			if($row['is_read'] == '1'){
				$color = "background:#ffffff;";
			}
			else{
				$color = "background:#efefef;";
			}
			?>
            <tr onclick="notification_click('<?php echo $row["id"] ?>','<?php echo $row["task_id"] ?>')" style="<?php echo $color ?>">
                <td style="width:38%">
                    <?php echo $task_name ?>
                    <br>
                    <?php echo '<span class="time">'.time_elapsed_string($row['time']).'</span>'; ?>
                </td>
                <td style="width:24%">
                    <?php echo $dev_name ?>
                </td>
                <td style="width:38%">
                    <?php
                    if(strpos($row['text'], "Left by developer") == true){
                        echo "Left the task";
                    }
                    elseif(strpos($row['text'], "file uploaded") == true){
                        echo "New File Uploaded";
                    }
                    elseif(strpos($row['text'], "message recieved") == true){
                        echo "New Message Received";
                    }
                    elseif(strpos($row['text'], "Completed") == true){
                        echo "Task Completed";
                    }
                    ?>
                </td>
            </tr>
			<?php
		}
	}
	else{
		?>
		<li><center>No Notification Yet</center></li>
		<?php
	}
}

//last notification for developer from manager
function get_task_activity($task_id,$dev_id)
{
	global $conn;
	
	$sql  = "SELECT * FROM notifications WHERE dev_id = '$dev_id' AND task_id = '$task_id' ORDER BY id DESC LIMIT 0,1";
	$res = $conn->query($sql);
    $row = mysqli_fetch_assoc($res);
	if(mysqli_num_rows($res) > 0){
        if(strpos($row['text'], "file uploaded") == true){
            ?><i class="fas fa-file" style="font-size:18px;margin-top:4px;"></i><br>File Uploaded<br><?php
            echo date_format(date_create($row['time']),'m/d, H:i A');
        }
        elseif(strpos($row['text'], "message recieved") == true){
            ?><img src="../images/sent%20icon.png" style="width:20px;"/><br>Message Sent<br><?php
            echo date_format(date_create($row['time']),'m/d, H:i A');
        }
        elseif(strpos($row['text'], "incomplete") == true){
            ?><i class="fas fa-times-circle" style="font-size:18px;margin-top:4px;"></i><br>Task Incomplete<br><?php
            echo date_format(date_create($row['time']),'m/d, H:i A');
        }
	}
}

//last notification for manager from developer
function get_task_notification($task_id)
{
	global $conn;
	
	$sql  = "SELECT * FROM notifications WHERE mag_id = '".$_SESSION["manager"]["id"]."' AND task_id = '$task_id' ORDER BY id DESC LIMIT 0,1";
	$res = $conn->query($sql);
    $row = mysqli_fetch_assoc($res);
	if(mysqli_num_rows($res) > 0){
        if(strpos($row['text'], "Left by developer") == true){
            ?><i class="fas fa-chevron-circle-left" style="font-size:18px;margin-top:4px;"></i><br>Task Left<br><?php
            echo date_format(date_create($row['time']),'m/d, H:i A');
        }
        elseif(strpos($row['text'], "file uploaded") == true){
            ?><i class="fas fa-file" style="font-size:18px;margin-top:4px;"></i><br>New File<br><?php
            echo date_format(date_create($row['time']),'m/d, H:i A');
        }
        elseif(strpos($row['text'], "message recieved") == true){
            ?><i class="fas fa-envelope" style="font-size:18px;margin-top:4px;"></i><br>New Message<br><?php
            echo date_format(date_create($row['time']),'m/d, H:i A');
        }
        elseif(strpos($row['text'], "Completed") == true){
            ?><i class="fas fa-check-circle" style="font-size:18px;margin-top:4px;"></i><br>Task Completed<br><?php
            echo date_format(date_create($row['time']),'m/d, H:i A');
        }
	}
}

function mail_for_developer($user_email,$user_pass)
{
	global $base_url;
	
	$subject  =	 "Invitaion to task management system";
	$from	  =	 "tenxservice@gmail.com";
	
	// To send HTML mail, the Content-type header must be set
	$headers   =  'MIME-Version: 1.0' . "\r\n";
	$headers  .=  'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	
	// Create email headers
	$headers .= 'From: '.$from."\r\n".
	'Reply-To: '.$from."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	
	// Compose a simple HTML email message
	$message   =  '<html><body>';
	$message  .=  "<p>Your developer account has been created, please login with following credentials.</p>";
	$message  .=  "<p>Email: $user_email<br>Pass: $user_pass</p>";
	$message  .=  "<a href=$base_url><h3>Click To Login!</h3></a>";
	$message  .=  '</body></html>';
	
	// Sending email
	mail($user_email, $subject, $message, $headers);
}

function mail_for_task_assigned($task,$user_email)
{
	global $base_url;
	
	$subject  =	 "New Task Assigned | Task Manager";
	$from	  =	 "tenxservice@gmail.com";
	
	// To send HTML mail, the Content-type header must be set
	$headers   =  'MIME-Version: 1.0' . "\r\n";
	$headers  .=  'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	
	// Create email headers
	$headers .= 'From: '.$from."\r\n".
	'Reply-To: '.$from."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	
	// Compose a simple HTML email message
	$message   =  '<html><body>';
	$message  .=  "<p>New task <b>$task</b> have been assigned to you, please login and review the details.</p>";
	$message  .=  "<a href=$base_url><h3>Click To Login!</h3></a>";
	$message  .=  '</body></html>';
	
	// Sending email
	mail($user_email, $subject, $message, $headers);
}

function mail_for_change_password($user_id,$user_email)
{
	global $admin_url;
	
	$to 			=	$user_email;
	$subject		=	'Password Recovery For Manager Login';
	$from 			=	"tenxservice@gmail.com";
	$user_id		=	md5($user_id);
	$user_email		=	md5($user_email);
	$url	  	 	=	$admin_url.'newPassword.php?key='.$user_id.'+'.$user_email;
	
	// To send HTML mail, the Content-type header must be set
	$headers   =  'MIME-Version: 1.0' . "\r\n";
	$headers  .=  'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	
	// Create email headers
	$headers .= 'From: '.$from."\r\n".
	'Reply-To: '.$from."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	
	// Compose a simple HTML email message
	$message   =  '<html><body>';
	$message  .=  "<p>You can now change your password for Developer Login by clicking the link below.</p>";
	$message  .=  "<a href=$url><h3>Click To Change Your Password!</h3></a>";
	$message  .=  '</body></html>';
	
	// Sending email
	if(mail($to, $subject, $message, $headers))
	{
		return  "E-mail is sent to ".$to;
	}
	else
	{
		return 'Email Failed! Try Again!';
	}
}

function deletedir($dir)
{
	if (!file_exists($dir)) { return true; }
	if (!is_dir($dir) || is_link($dir)) {
		return unlink($dir);
	}
	foreach (scandir($dir) as $item) { 
		if ($item == '.' || $item == '..') { continue; }
		if (!deletedir($dir . "/" . $item, false)) { 
			chmod($dir . "/" . $item, 0777); 
			if (!deletedir($dir . "/" . $item, false)) return false; 
		}; 
	} 
	return rmdir($dir); 
}

function redirect($url) 
{
	echo '<script>window.location.href="'.$url.'"</script>';
}

?>