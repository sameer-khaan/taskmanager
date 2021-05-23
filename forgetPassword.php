<?php
require_once 'inc/config.php';

if(isset($_SESSION['developer']))
{
	echo "<script>window.location.href='".$dashboard_url."'</script>";
	exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<!-- BEGIN HEAD -->
<head>
   <meta charset="utf-8" />
   <title>Task Manager</title>
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta content="width=device-width, initial-scale=1.0" name="viewport" />
   <meta content="" name="description" />
   <meta content="" name="author" />
   <meta name="MobileOptimized" content="320">
	<link rel="shortcut icon" href="<?php echo $base_url; ?>assets/img/favicon.png">
   <!-- BEGIN GLOBAL MANDATORY STYLES -->          
   <link href="<?php echo $base_url; ?>assets/assets_admin/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
   <link href="<?php echo $base_url; ?>assets/assets_admin/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
   <link href="<?php echo $base_url; ?>assets/assets_admin/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css"/>
   <!-- END GLOBAL MANDATORY STYLES -->
   <!-- BEGIN THEME STYLES -->
   <link href="<?php echo $base_url; ?>assets/assets_admin/plugins/select2/select2_metro.css" rel="stylesheet" type="text/css"/>
   <link href="<?php echo $base_url; ?>assets/assets_admin/css/style-metronic.css" rel="stylesheet" type="text/css"/>
   <link href="<?php echo $base_url; ?>assets/assets_admin/css/style.css" rel="stylesheet" type="text/css"/>
   <link href="<?php echo $base_url; ?>assets/assets_admin/css/style-responsive.css" rel="stylesheet" type="text/css"/>
   <link href="<?php echo $base_url; ?>assets/assets_admin/css/plugins.css" rel="stylesheet" type="text/css"/>
   <link href="<?php echo $base_url; ?>assets/assets_admin/css/themes/default.css" rel="stylesheet" type="text/css" id="style_color"/>
   <link href="<?php echo $base_url; ?>assets/assets_admin/css/pages/login.css" rel="stylesheet" type="text/css"/>
   <!-- END THEME STYLES -->
	
	<script>base_url = "<?php echo $base_url; ?>"; </script>
	<script>dashboard_url = "<?php echo $dashboard_url; ?>"; </script>
	
	<style>
		.error {
			color: red;
		}
		.btn-round{
			border-radius: 5px !important;
		}
		input:-webkit-autofill,
		input:-webkit-autofill:hover,
		input:-webkit-autofill:focus,
		input:-webkit-autofill:active {
			/* background-color: red !important; */
			-webkit-box-shadow: 0 0 0 1000px white inset !important;
		}
		textarea, input {
			background-clip: content-box;
		}
	</style>
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class="login">
   <!-- BEGIN LOGO -->
   <div class="logo" style="margin-left:20px;">
      <!--<a href="<?php echo $base_url; ?>"><img src="<?php echo $base_url; ?>images/logo.jpg" width="100px" /></a>-->
   </div>
   <br/>
   <!-- END LOGO -->
   <!-- BEGIN LOGIN -->
   <div class="content">
      <!-- BEGIN LOGIN FORM -->
      <form id="forget_password" class="login-form" method="post">
          <h1 class="form-title text-center" style="color:gray">Forgot Password?</h1>
		  <p>Enter your e-mail address below and we'll send you an email to help you reset your password.</p>
         <div class="form-group">
            <label class="control-label visible-ie8 visible-ie9">Email</label>
			 <div class="input-icons">
				<input class="form-control placeholder-no-fix customTextBox" type="text" placeholder="Email" name="email" />
			</div>
         </div>
		  
		  <div class="form-group">
			 <div class="error text-center">
			  </div>
         </div>
		  
         <div class="form-actions text-center">
            <button id="backhome" type="button" class="btn-round btn-primary" >
			Back
			</button>
			
            <button type="submit" class="btn-round btn-danger">
			Submit
			</button>          
         </div>
      </form>
      <!-- END LOGIN FORM -->
   </div>
   <!-- END LOGIN -->
	
   <!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
   <!-- BEGIN CORE PLUGINS -->   
   <!--[if lt IE 9]>
   <script src="<?php echo $base_url; ?>assets/assets_admin/plugins/respond.min.js"></script>
   <script src="<?php echo $base_url; ?>assets/assets_admin/plugins/excanvas.min.js"></script> 
   <![endif]-->   
   <script src="<?php echo $base_url; ?>assets/assets_admin/plugins/jquery-1.10.2.min.js" type="text/javascript"></script>
   <script src="<?php echo $base_url; ?>assets/assets_admin/plugins/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>
   <script src="<?php echo $base_url; ?>assets/assets_admin/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
   <script src="<?php echo $base_url; ?>assets/assets_admin/plugins/bootstrap-hover-dropdown/twitter-bootstrap-hover-dropdown.min.js" type="text/javascript" ></script>
   <script src="<?php echo $base_url; ?>assets/assets_admin/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
   <script src="<?php echo $base_url; ?>assets/assets_admin/plugins/jquery.blockui.min.js" type="text/javascript"></script>  
   <script src="<?php echo $base_url; ?>assets/assets_admin/plugins/jquery.cookie.min.js" type="text/javascript"></script>
   <script src="<?php echo $base_url; ?>assets/assets_admin/plugins/uniform/jquery.uniform.min.js" type="text/javascript" ></script>
   <!-- END CORE PLUGINS -->
   <!-- BEGIN PAGE LEVEL PLUGINS -->
   <script src="<?php echo $base_url; ?>assets/assets_admin/plugins/backstretch/jquery.backstretch.min.js" type="text/javascript"></script>
   <script type="text/javascript" src="<?php echo $base_url; ?>assets/assets_admin/plugins/select2/select2.min.js"></script>
   <!-- END PAGE LEVEL PLUGINS -->
   <!-- BEGIN PAGE LEVEL SCRIPTS -->
   <script src="<?php echo $base_url; ?>assets/assets_admin/scripts/app.js" type="text/javascript"></script>
   <!-- END PAGE LEVEL SCRIPTS --> 
	<script>
	jQuery(document).ready(function(){
         jQuery("#backhome").click(function(){
            location.href = base_url;
         })
	});
	</script>
   <!-- END JAVASCRIPTS -->

<?php require_once 'inc/footer.php'; ?>