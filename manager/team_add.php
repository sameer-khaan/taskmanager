<?php
require_once 'inc/config.php';
require_once 'inc/header.php';
?>
<section class="main-container">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
				<br>
				<p class="text-center mb-lg">
					<strong style="font-size: 26px;">Add New Developer</strong>
				</p>
				<br>
				
				<div class="widget-container margin-top-10">
					<div class="widget-content">
						<div class="col-md-offset-2 col-md-8">
							<form role="form" id="add_developer" method="post" class="form-horizontal">
								<input type="hidden" name="mag_id" value="<?php echo $_SESSION['manager']['id'] ?>" />
								<div class="form-group">
									<label class="col-md-3 control-label">Full Name</label>
									<div class="col-md-6">
										<input type="text" placeholder="Full Name" class="form-control" name="name" required/>
									</div>
								</div>

								<div class="form-group">
									<label class="col-md-3 control-label">Email</label>
									<div class="col-md-6">
										<input type="text" placeholder="Email" class="form-control" name="email" required/>
									</div>
								</div>

								<div class="form-group">
									<label class="col-md-3 control-label">Mobile Number</label>
									<div class="col-md-6">
										<input type="text" placeholder="Mobile Number" class="form-control" name="phone" required/>
									</div>
								</div>
								
								<div class="form-group">
									<label class="col-md-3 control-label">Password</label>
									<div class="col-md-6">
										<input type="text" placeholder="Password" class="form-control" name="password" required/>
									</div>
								</div>

								<div class="form-group">
									<div class="col-md-offset-3 error">
									</div>
								</div>

								<div class="form-group">
									<button type="submit" class="col-md-offset-3 btn btn-primary">Add</button>
								</div>
							</form>
						</div>
					</div>
				</div>                
            </div>
        </div>
    </div>
</section>

<?php require_once 'inc/footer.php'; ?>