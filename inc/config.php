<?php
session_start();
//set the max upload file size
ini_set('post_max_size', '200M');
ini_set('upload_max_filesize', '200M');

if ($_SERVER["SERVER_NAME"] == "localhost") {
	
    error_reporting(E_ALL);
	
	$GLOBALS['documentRoot'] = '/localhost/projects/taskmanagement/';
	$base_url = 'http://localhost/projects/taskmanagement/';
	$dashboard_url = 'http://localhost/projects/taskmanagement/task.php';
	$conn = new mysqli('localhost', 'root', '' , 'task_management');
}
else {
	
	error_reporting(0);
	
	$GLOBALS['documentRoot'] = $_SERVER['DOCUMENT_ROOT'].'/taskmanagement/';
	$base_url = 'https://projects.weblancia.com/taskmanagement/';
	$dashboard_url = 'https://projects.weblancia.com/taskmanagement/task.php';
	$conn = new mysqli('localhost', 'foodnkrd_weblancia', 'fjo03310345' , 'foodnkrd_taskmanagement');
	
	//sql mode turned off
	$conn->query("SET GLOBAL sql_mode = 'NO_ENGINE_SUBSTITUTION';");
}

if(mysqli_connect_errno()) 
{
    printf("Connection failed: %s\n", mysqli_connect_error());
    exit();
}
else
{
	$user_id = isset($_SESSION['developer']['id']) ? $_SESSION['developer']['id'] : '0';
	$sql = "SELECT * FROM tbl_timezone WHERE user_id = '$user_id' AND user_type = 'developer'";
	$res = $conn->query($sql);
	$row = mysqli_fetch_assoc($res);
	
	if(mysqli_num_rows($res) == 0){
		$sql = "SELECT * FROM tbl_timezone WHERE user_id = '1' AND user_type = 'manager'";
		$res = $conn->query($sql);
		$row = mysqli_fetch_assoc($res);
	}
	
	if(!empty($row['timezone'])){
		date_default_timezone_set($row['timezone']);
	}
	
	if($row['dst_status'] == 'on'){
		$gmt = $row['gmt_value'] + $row['dst_value'];
		$gmt = $row['gmt_sign'].$gmt.':00';
	}
	else{
		$gmt = $row['gmt_sign'].$row['gmt_value'].':00';
	}
	
	$conn->query("SET time_zone = '".$gmt."'");
	
	include('functions.php');
}
?>