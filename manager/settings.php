<?php
require_once 'inc/config.php';
require_once 'inc/header.php';

$loggedInPersonId =	$_SESSION['manager']['id'];
$res = check_table("manager","id = '$loggedInPersonId'");
$loggedInPersonDetail = mysqli_fetch_assoc($res);

$res = check_table("tbl_timezone","user_id = '$loggedInPersonId' AND user_type = 'manager'");
$timezoneDetail = mysqli_fetch_assoc($res);

if(empty($loggedInPersonDetail))
{
	$loggedInPersonName		=	'';
	$loggedInPersonEmail	=	'';
	$loggedInPersonNumber	=	'';
}
else
{
	$loggedInPersonName		=	$loggedInPersonDetail['name'];
	$loggedInPersonEmail	=	$loggedInPersonDetail['email'];
	$loggedInPersonNumber	=	$loggedInPersonDetail['phone'];
}
?>
<section class="main-container">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
				<br>
				<p class="text-center mb-lg">
					<strong style="font-size: 26px;">Settings</strong>
				</p>
				<br>
				
				<div class="widget-container margin-top-10">
					<div class="widget-content">
						<div class="row profile">
							<div class="col-md-12">
								<div class="tabbable tabbable-custom tabbable-full-width">
									<ul class="nav nav-tabs">
										<?php
											$tab_1_1 = '';
											$tab_1_2 = '';
											$tab_1_3 = '';
											
											if(isset($_SESSION['pagetab']) && ($_SESSION['pagetab'] == 'personalinfo'))
											{
												$tab_1_1 = 'active';
											}
											else if(isset($_SESSION['pagetab']) && ($_SESSION['pagetab'] == 'credentialinfo'))
											{
												$tab_1_2 = 'active';
											}
											else if(isset($_SESSION['pagetab']) && ($_SESSION['pagetab'] == 'timezonedst'))
											{
												$tab_1_3 = 'active';
											}
											else
											{
												$tab_1_1 = 'active';
											}
										?>
										<li class="<?php echo $tab_1_1 ?>"><a href="#tab_1_1" data-toggle="tab">Personal Info</a></li>
										<li class="<?php echo $tab_1_2 ?>"><a href="#tab_1_2" data-toggle="tab">Credentials</a></li>
										<li class="<?php echo $tab_1_3 ?>"><a href="#tab_1_3" data-toggle="tab">Timezone DST (<?php echo $timezoneDetail['dst_status'] ?>)</a></li>
									</ul>
									<div class="tab-content"><br/>
										<div class="tab-pane <?php echo $tab_1_1 ?>" id="tab_1_1">
											<div class="row">
												<div class="col-md-7">
													<form role="form" id="update_info" method="post" class="form-horizontal">
														<div class="form-group">
															<label class="col-md-3 control-label">Full Name</label>
															<div class="col-md-6">
																<input type="text" placeholder="Full Name" class="form-control" name="name" value="<?php echo $loggedInPersonName ?>" required/>
															</div>
														</div>
														
														<div class="form-group">
															<label class="col-md-3 control-label">Email</label>
															<div class="col-md-6">
																<input type="text" placeholder="Email" class="form-control" name="email"  value="<?php echo $loggedInPersonEmail ?>" required/>
															</div>
														</div>
														
														<div class="form-group">
															<label class="col-md-3 control-label">Mobile Number</label>
															<div class="col-md-6">
																<input type="text" placeholder="Mobile Number" class="form-control" name="phone"  value="<?php echo $loggedInPersonNumber ?>" required/>
															</div>
														</div>
														
														<div class="form-group error">
														</div>
														
														<div class="margiv-top-10">
															<input type="hidden" name="id" value="<?php echo $loggedInPersonId ?>" />
															<button type="submit" class="col-md-offset-2 btn btn-primary">Save Changes</button>
															<button type="reset" class="btn btn-default">Cancel</button>
														</div>
													</form>
												</div>
											</div>
										</div>
										
										<div class="tab-pane <?php echo $tab_1_2 ?>" id="tab_1_2">
											<div class="row">
												<div class="col-md-12">
													<form role="form" id="update_pass" method="post" class="form-horizontal">
														<div class="form-group">
															<label class="col-md-2 control-label">Password</label>
															<div class="col-md-3">
																<input type="password" class="form-control" placeholder="New Password" name="password" required>
															</div>
														</div>
														<div class="form-group error">
														</div>
														<input type="hidden" name="id" value="<?php echo $loggedInPersonId ?>" />
														<button type="submit" class="col-md-offset-2 btn btn-primary">Confirm</button>
													</form>
												</div>
											</div>
										</div>
										
										<div class="tab-pane <?php echo $tab_1_3 ?>" id="tab_1_3">
											<div class="row">
												<div class="col-md-12">
													<form role="form" id="update_timezone" method="post" class="form-horizontal">
														<input type="hidden" name="id" value="<?php echo $timezoneDetail['id'] ?>" />
														<div class="form-group">
															<label class="col-md-2 control-label">Timezone</label>
															<div class="col-md-3">
																<?php
																$tzlist = DateTimeZone::listIdentifiers(DateTimeZone::ALL);
																?>
																<select class="form-control" name="timezone" onchange="setGMT(this)">
																	<?php
																	if(in_array($timezoneDetail['timezone'],$tzlist)){
																		?>
																		<option value="<?php echo $timezoneDetail['timezone'] ?>" selected><?php echo $timezoneDetail['timezone'] ?></option>
																		<?php
																	}
																	foreach($tzlist as $value){
																	?>
																	<option value="<?php echo $value ?>"><?php echo $value ?></option>
																	<?php
																	}
																	?>
																</select>
															</div>
														</div>
														<div class="form-group">
															<label class="col-md-2 control-label">GMT</label>
															<div class="col-md-3">
																<input type="hidden" class="form-control" name="gmt_sign" id="gmt_sign" value="<?php echo $timezoneDetail['gmt_sign'] ?>">
																<input type="hidden" class="form-control" name="gmt_value" id="gmt_value" value="<?php echo $timezoneDetail['gmt_value'] ?>">
																
																<input type="text" class="form-control" id="gmt" value="<?php echo $timezoneDetail['gmt_sign'].$timezoneDetail['gmt_value'] ?>" readonly>
															</div>
														</div>
														<div class="form-group">
															<label class="col-md-2 control-label">DST is <?php echo $timezoneDetail['dst_status'] ?></label>
															<div class="col-md-1">
																<select class="form-control" name="dst_status" onchange="showDiv(this)">
																	<?php
																	if($timezoneDetail['dst_status'] == 'on'){
																		$show_status = "display:block";
																		?>
																		<option value="on" selected>On</option>
																		<option value="off">Off</option>
																		<?php
																	}
																	else{
																		$show_status = "display:none";
																		?>
																		<option value="off" selected>Off</option>
																		<option value="on">On</option>
																		<?php
																	}
																	?>
																</select>
															</div>
															<div class="col-md-1" id="hidden_div" style="<?php echo $show_status ?>">
																<select class="form-control" name="dst_value">
																	<?php
																	if($timezoneDetail['dst_value'] == '2'){
																		?>
																		<option value="1">+1</option>
																		<option value="2" selected>+2</option>
																		<?php
																	}
																	else{
																		?>
																		<option value="1" selected>+1</option>
																		<option value="2">+2</option>
																		<?php
																	}
																	?>
																</select>
															</div>
														</div>
														<div class="form-group error">
														</div>
														<button type="submit" class="col-md-offset-2 btn btn-primary">Save Changes</button>
														<button type="reset" class="btn btn-default">Cancel</button>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>                
            </div>
        </div>
    </div>
</section>

<div id="responsive1" class="modal fade" tabindex="-1" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
				<h4 class="modal-title">Current Image</h4>
			</div>
			
			<div class="modal-body">
				<div class="scroller" style="height:300px" data-always-visible="1" data-rail-visible1="1">
					<div class="row">
						<div class="col-md-12" id="uploadLogoPreview1">
							
						</div>
					</div>
				</div>
			</div>
			
			<div class="modal-footer">
				<button type="button" data-dismiss="modal" class="btn default">Close</button>				
			</div>
		</div>
	</div>
</div>

<div id="responsive" class="modal fade" tabindex="-1" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
				<h4 class="modal-title">Selected Image</h4>
			</div>
			
			<div class="modal-body">
				<div class="scroller" style="height:300px" data-always-visible="1" data-rail-visible1="1">
					<div class="row">
						<div class="col-md-12" id="uploadLogoPreview">
							
						</div>
					</div>
				</div>
			</div>
			
			<div class="modal-footer">
				<button type="button" data-dismiss="modal" class="btn default">Close</button>
			</div>
		</div>
	</div>
</div>

<script>
	//---------mohit-28-dec-2017-start------------//
	$('input[name="phone"]').keyup(function(e){
		$nameVal	=	$(this).val().replace(/[^0-9]/g,'');
		$(this).val($nameVal);
	});
	//---------mohit-28-dec-2017-end--------------//
	
	$('input[name="logo_width"], input[name="logo_height"]').keyup(function ()
	{  
		this.value = this.value.replace(/[^0-9\.]/g,''); 
	});

	$('body').on('click','#previewCurrentLogo, #previewPreviousLogo',function()
	{
		logoWidth	=	$(this).attr('imgWidth');
		logoHeight	=	$(this).attr('imgHeight');
		logoPath	=	$(this).attr('imgUrl');
		$("#uploadLogoPreview1").html("<img src='"+logoPath+"' width='"+logoWidth+"'  height='"+logoHeight+"'>");
		$("#uploadLogoPreviewButton1").trigger('click');
	});

	$('body').on('click','#uploadLogoPreviewButton',function()
	{
		logoWidth	=	$("input[name='logo_width']").val();
		logoHeight	=	$("input[name='logo_height']").val();
		$("#uploadLogoPreview > img").attr('width', logoWidth);
		$("#uploadLogoPreview > img").attr('height', logoHeight);
	});
	
	function readURL(input)
	{
		if (input.files && input.files[0])
		{
			var reader = new FileReader();
			reader.onload = function (e){
				$('#test').attr('src', e.target.result);
				$("#uploadLogoPreview").html("<img src='"+e.target.result+"'>");
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
</script>

<?php require_once 'inc/footer.php'; ?>