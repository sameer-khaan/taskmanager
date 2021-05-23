<!doctype html>
<html>
<head>
    <title>Developer Panel</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="shortcut icon" href="<?php echo $base_url; ?>assets/img/favicon.png">
    <link type="text/css" rel="stylesheet" href="css/bootstrap.css">
    <link type="text/css" rel="stylesheet" href="css/animate.css">
    <link type="text/css" rel="stylesheet" href="css/layout.css">
    <link type="text/css" rel="stylesheet" href="css/components.css">
    <link type="text/css" rel="stylesheet" href="css/widgets.css">
    <link type="text/css" rel="stylesheet" href="css/plugins.css">
    <link type="text/css" rel="stylesheet" href="css/pages.css">
    <link type="text/css" rel="stylesheet" href="css/bootstrap-extend.css">
    <link type="text/css" rel="stylesheet" href="css/common.css">
    <link type="text/css" rel="stylesheet" href="css/responsive.css">
    <link type="text/css" rel="stylesheet" href="css/myCustom.css">
    <link type="text/css" rel="stylesheet" href="css/style.css">
    <link type="text/css" rel="stylesheet" href="css/checkbox.css">
    <link type="text/css" rel="stylesheet" href="css/bootstrap-datetimepicker.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.6.4/css/bootstrap-datepicker.css" />
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">
	<script type="text/javascript" src="//cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
    <script src="js/lib/jquery.js"></script>
    <script src="js/bootstrap-datetimepicker.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.6.4/js/bootstrap-datepicker.js"></script>
	
	<script>base_url = "<?php echo $base_url; ?>"; </script>
	<script>dashboard_url = "<?php echo $dashboard_url; ?>"; </script>
	
	<style>
		.error {
			color: red;
		}
		.ss-form-container {
			width: 80%;
			padding: 10px 0px 20px;
		}

		@media screen and (max-width: 768px) {
			.ss-form-container {
				width: 100%;
			}
		}
	</style>
</head>
<!--<body class="leftbar-view">-->
<body class="leftbar-view"  id="contentDivPush" style="padding-top: 0px; !important">

<?php
//unset($_SESSION['manager']);
if(!isset($_SESSION['developer']))
{
    echo "<script>window.location.href='".$base_url."'</script>";
    exit();
}

?>
<header class="topbars clearfix" style="height:initial;">
	<nav class="navbar navbar-default" style="margin-bottom:0px;background-color:transparent;">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a  target="_self" class="navbar-brand" href="#" style="font-size:20px;">
					<?php
						echo $_SESSION["developer"]["name"];
					?>
				</a>
			</div>
			
			<div id="navbar" class="navbar-collapse collapse">
				<ul class="nav navbar-nav">
					<li>
						<a href="task.php"><i class="fas fa-edit"></i> My Tasks</a>
					</li>
					
					<li>
						<a href="task_archived.php"><i class="fas fa-tasks"></i> Archived Tasks</a>
					</li>
					
					<li>
						<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-bell"></i> Notifications <?php unread_notification(); ?></a>
						<ul class="dropdown-menu notify">
                            <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th><h4 style="margin:5px 0px">Task</h4></th>
                                    <th><h4 style="margin:5px 0px">Notification</h4></th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php Get_Notification(); ?>
                            </tbody>
                            </table>
						</ul>
					</li>
					
					<li>
						<a href="settings.php"><i class="fa fa-cog"></i> Settings</a>
					</li>
					
					<li>
						<a href="javascript://" id="logout"><i class="fas fa-sign-out-alt"></i> Logout</a>
					</li>
				</ul>
			</div>
        </div>
    </nav>
</header>