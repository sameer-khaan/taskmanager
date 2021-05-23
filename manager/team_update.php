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
					<strong style="font-size: 26px;">Update Developer</strong>
				</p>
				<br>
				
				<div class="widget-container margin-top-10">
					<div class="widget-content">
						<?php
						if(isset($_REQUEST['edit'])){
							$res = check_table('developers',"id = '".$_REQUEST["edit"]."'");
							$row = mysqli_fetch_assoc($res);
							if(mysqli_num_rows($res) == 0)
							{
								echo "<script>window.location.href='team_update.php'</script>";
								exit();
							}
						?>
						<div class="col-md-offset-2 col-md-8">
							<form role="form" id="update_developer" method="post" class="form-horizontal">
								<input type="hidden" name="id" value="<?php echo $row['id'] ?>" />
								<div class="form-group">
									<label class="col-md-3 control-label">Full Name</label>
									<div class="col-md-6">
										<input type="text" placeholder="Full Name" class="form-control" name="name" value="<?php echo $row['name'] ?>" required/>
									</div>
								</div>

								<div class="form-group">
									<label class="col-md-3 control-label">Email</label>
									<div class="col-md-6">
										<input type="text" placeholder="Email" class="form-control" name="email" value="<?php echo $row['email'] ?>" required/>
									</div>
								</div>

								<div class="form-group">
									<label class="col-md-3 control-label">Mobile Number</label>
									<div class="col-md-6">
										<input type="text" placeholder="Mobile Number" class="form-control" name="phone" value="<?php echo $row['phone'] ?>" required/>
									</div>
								</div>

								<div class="form-group">
									<label class="col-md-3 control-label">Password</label>
									<div class="col-md-6">
										<input type="text" placeholder="Password" class="form-control" name="password" value="<?php echo $row['retype_password'] ?>" required/>
									</div>
								</div>

								<?php
								$res1 = check_table('status',"type = 'developer' ORDER BY id DESC");
								?>

								<div class="form-group">
									<label class="col-md-3 control-label">Status</label>
									<div class="col-md-6">
										<select class="form-control" name="status" required>
											<?php while($row1 = mysqli_fetch_assoc($res1)){ ?>
											<option value="<?php echo $row1['value'] ?>" <?php if($row['status'] == $row1['value']){ echo 'selected'; }?> ><?php echo $row1['name'] ?></option>
											<?php } ?>
										</select>
									</div>
								</div>

								<div class="form-group">
									<div class="col-md-offset-3 error">
									</div>
								</div>

								<div class="form-group">
									<button type="submit" class="col-md-offset-3 btn btn-primary">Update</button>
									<a href="team_update.php"><button type="button" class="btn btn-danger">Back</button></a>
								</div>
							</form>
						</div>
						<?php
						}
						else{
						?>
						<ul class="nav nav-tabs">
							<li class="active"><a href="#tab_1_1" data-toggle="tab">Recent</a></li>
							<li><a href="#tab_1_2" data-toggle="tab">Archived</a></li>
						</ul>
						<div class="tab-content"><br/>
						<div class="tab-pane active" id="tab_1_1">
							<table class="table table-bordered">
								<thead>
									<tr>
										<th>Name</th>
										<th>Email</th>
										<th>Phone</th>
										<th>Password</th>
										<th>Status</th>
										<th>Last Updated</th>
										<th>Added Date</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<?php
									$res = check_table('developers',"status != '4' ORDER BY name");
									while($row = mysqli_fetch_assoc($res)) {
									?>
									<tr>
										<td>
											<?php echo $row['name']; ?>
										</td>
										<td>
											<?php echo $row['email']; ?>
										</td>
										<td>
											<?php echo $row['phone']; ?>
										</td>
										<td>
											<?php echo $row['retype_password']; ?>
										</td>
										<td>
											<?php echo get_status($row['status'],'developer'); ?>
										</td>
										<td>
											<?php echo date_format(date_create($row['updated_date']),'m/d/Y, H:i a'); ?>
										</td>
										<td>
											<?php echo date_format(date_create($row['created_date']),'m/d/Y'); ?>
										</td>
										<td>
											<center><a href="team_update.php?edit=<?php echo $row["id"] ?>" class="btn btn-sm btn-primary">update</a></center>
										</td>
									</tr>
									<?php
									}
									?>
								</tbody>
							</table>
						</div>
						
						<div class="tab-pane" id="tab_1_2">
							<table class="table table-bordered">
								<thead>
									<tr>
										<th>Name</th>
										<th>Email</th>
										<th>Phone</th>
										<th>Password</th>
										<th>Status</th>
										<th>Last Updated</th>
										<th>Archived Date</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<?php
									$res = check_table('developers',"status = '4' ORDER BY name");
									while($row = mysqli_fetch_assoc($res)) {
									?>
									<tr>
										<td>
											<?php echo $row['name']; ?>
										</td>
										<td>
											<?php echo $row['email']; ?>
										</td>
										<td>
											<?php echo $row['phone']; ?>
										</td>
										<td>
											<?php echo $row['retype_password']; ?>
										</td>
										<td>
											<?php echo get_status($row['status'],'developer'); ?>
										</td>
										<td>
											<?php echo date_format(date_create($row['updated_date']),'m/d/Y, H:i a'); ?>
										</td>
										<td>
											<?php echo date_format(date_create($row['archived_date']),'m/d/Y'); ?>
										</td>
										<td>
											<center><a href="team_update.php?edit=<?php echo $row["id"] ?>" class="btn btn-sm btn-primary">update</a></center>
										</td>
									</tr>
									<?php
									}
									?>
								</tbody>
							</table>
						</div>
						</div>
						<?php
						}
						?>
					</div>
				</div>                
            </div>
        </div>
    </div>
</section>

<?php require_once 'inc/footer.php'; ?>