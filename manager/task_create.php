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
					<strong style="font-size: 26px;">Create New Task</strong>
				</p>
				<br>
				
				<div class="widget-container margin-top-10">
					<div class="widget-content">
							<form role="form" id="create_task" method="post" class="form-horizontal">
								<input type="hidden" name="mag_id" value="<?php echo $_SESSION['manager']['id'] ?>" />
								<div class="form-group">
									<label class="col-md-2 control-label">Task Title</label>
									<div class="col-md-3">
										<input type="text" placeholder="Task Title" class="form-control" name="name" required/>
									</div>
								</div>

								<div class="form-group">
									<label class="col-md-2 control-label">Description</label>
									<div class="col-md-9">
										<textarea class="form-control" id="description" rows="10" cols="80"></textarea>
										<script>CKEDITOR.replace('description');</script>
										<input type="hidden" id="description_main" name="description" value="">
									</div>
								</div>

								<?php
								$res1 = check_table('developers',"status = '1' ORDER BY name");
								?>
								<div class="form-group">
									<label class="col-md-2 control-label">Assign To</label>
									<div class="col-md-3">
										<select class="form-control" name="dev_id" required>
											<?php while($row1 = mysqli_fetch_assoc($res1)){ ?>
											<option value="<?php echo $row1['id'] ?>" ><?php echo $row1['name'] ?></option>
											<?php } ?>
										</select>
									</div>
								</div>

								<?php
								$res2 = check_table('priority',"id != '' ORDER BY id");
								?>
								<div class="form-group">
									<label class="col-md-2 control-label">Priority Level</label>
									<div class="col-md-3">
										<select class="form-control" name="priority_level" required>
											<?php while($row2 = mysqli_fetch_assoc($res2)){ ?>
											<option value="<?php echo $row2['value'] ?>" ><?php echo $row2['level'] ?></option>
											<?php } ?>
										</select>
									</div>
								</div>
								
								<div class="form-group">
									<label class="col-md-2 control-label">Task Files</label>
									<div class="col-md-9">
										<input type="file" name="file[]" multiple />
									</div>
								</div>
								
								<div class="form-group">
									<div class="col-md-offset-2 error">
									</div>
								</div>
								
								<div class="form-group">
									<button type="submit" class="col-md-offset-2 btn btn-primary submit_btn">Create</button>
								</div>
							</form>
							<br><br>
					</div>
				</div>                
            </div>
        </div>
    </div>
</section>

<?php require_once 'inc/footer.php'; ?>