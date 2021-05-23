<?php
require_once 'inc/config.php';
require_once 'inc/header.php';
?>

<style>
	.mytable > tbody > tr > td{
		padding: 2px 8px!important;
	}
	.mytable > tbody > tr:nth-child(1) > td{
		border-top: none;
	}
	.fa-file-pdf{
		color:#ff0000c4;
	}
	.fa-file-archive{
		color:#dcdc0e;
	}
	.fa-file-image{
		color:#5caaec;
	}
	.fa-file-video{
		color:#f55c5c;
	}
	.fa-file-word{
		color:#0000ffa8;
	}
	.fa-file-excel{
		color:#008000c7;
	}
</style>

<section class="main-container">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
				<div class="widget-container margin-top-10">
					<div class="widget-content">
						<?php
						if(isset($_REQUEST['edit'])){
							?>
							<br>
							<p class="text-center mb-lg">
								<strong style="font-size: 26px;">Update Task</strong>
							</p>
							<br>
							<?php
							$res = check_table('tasks',"id = '".$_REQUEST["edit"]."' AND is_archived = '0'");
							$row = mysqli_fetch_assoc($res);
							if(mysqli_num_rows($res) == 0)
							{
								echo "<script>window.location.href='task.php'</script>";
								exit();
							}
						?>
						<form role="form" id="update_task" method="post" class="form-horizontal" enctype="multipart/form-data">
							<input type="hidden" name="id" value="<?php echo $row['id'] ?>" />
							<input type="hidden" name="dev_id" value="<?php echo $row['dev_id'] ?>" />
							
							<div class="form-group">
								<label class="col-md-2 control-label">Task Title</label>
								<div class="col-md-3">
									<input type="text" placeholder="Task Title" class="form-control" name="name" value="<?php echo $row['name'] ?>" required/>
								</div>
							</div>

							<div class="form-group">
								<label class="col-md-2 control-label">Description</label>
								<div class="col-md-9">
									<textarea class="form-control" id="description" rows="10" cols="80"><?php echo $row['description'] ?></textarea>
									<script>CKEDITOR.replace('description');</script>
									<input type="hidden" id="description_main" name="description" value="">
								</div>
							</div>

							<?php
							if($row['status'] != 4){
							$res1 = check_table('developers',"status = '1' ORDER BY name");
							?>
							<div class="form-group">
								<label class="col-md-2 control-label">Re-Assign To</label>
								<div class="col-md-3">
									<select class="form-control" name="re_assign" required>
										<?php while($row1 = mysqli_fetch_assoc($res1)){ ?>										
										<option value="<?php echo $row1['id'] ?>" <?php if($row['dev_id'] == $row1['id']){ echo 'selected'; }?> ><?php echo $row1['name'] ?></option>
										<?php } ?>
									</select>
								</div>
							</div>
							<?php
							}
							?>

							<?php
							$res2 = check_table('priority',"id != '' ORDER BY id DESC");
							?>
							<div class="form-group">
								<label class="col-md-2 control-label">Priority Level</label>
								<div class="col-md-3">
									<select class="form-control" name="priority_level" required>
										<?php while($row2 = mysqli_fetch_assoc($res2)){ ?>
										<option value="<?php echo $row2['value'] ?>" <?php if($row['priority_level'] == $row2['value']){ echo 'selected'; }?> ><?php echo $row2['level'] ?></option>
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
								<button type="submit" class="col-md-offset-2 btn btn-primary submit_btn">Update</button>
								<a href="task.php"><button type="button" class="btn btn-danger">Back</button></a>
							</div>
						</form>
						<br><br>
						<?php
						}
						else{
						?>
						<br>
						<p class="text-center mb-lg">
							<strong style="font-size: 26px;">All Task List</strong>
						</p>
						<br>
						
						<div class="table-responsive">
							<table class="table table-bordered bootstrap-datatable datatable dataTable" id="myTable">
								<thead>
                                    <tr>
                                        <th style="width:20%;"></th>
                                        <th style="width:40%;font-weight:bold;text-align:center;" colspan="3">
                                            Manager Setting
                                        </th>
                                        <th style="width:35%;font-weight:bold;text-align:center;" colspan="3">
                                            Developer Setting
                                        </th>
                                        <th style="width:10%;"></th>
                                    </tr>
									<tr>
										<th style="width:20%;font-weight:bold;">Task Name</th>
                                        <th style="font-weight:bold;text-align:center;">Recent Activity</th>
										<th style="font-weight:bold;text-align:center;">Assign</th>
										<th style="width:12%;font-weight:bold;text-align:center;">Priority</th>
										<th style="font-weight:bold;text-align:center;">Recent Activity</th>
										<th style="font-weight:bold;text-align:center;">Task</th>
										<th style="width:10%;font-weight:bold;text-align:center;">Estimated Date</th>
										<th style="width:10%;font-weight:bold;text-align:center;">Action</th>
									</tr>
								</thead>
								<tbody>
									<?php
									$sql = "SELECT a.*, b.name as dev_name, c.level as level FROM tasks a, developers b, priority c WHERE a.dev_id = b.id AND a.priority_level = c.value AND a.is_archived = '0' AND a.status != '4' ORDER BY a.updated_date DESC";
									$res = $conn->query($sql);
									while($row = mysqli_fetch_assoc($res)) {
									?>
									<tr>
										<td>
											<?php
											echo $row['name'].'<br>';
											$res_mag = check_table('tasks_files_manager',"task_id = '".$row["id"]."' ORDER BY id");
											while($row_mag = mysqli_fetch_assoc($res_mag)) {
												$path = $row_mag['path'];
												if($path != ''){
													$ext = explode('.',$path);
													$pdf_type = array("pdf","PDF");
													$zip_type = array("zip","rar");
													$doc_type = array("doc","docx");
													$xcl_type = array("csv","xls","xlsx");
													$img_type = array("png","PNG","jpg","JPG","jpeg","JPEG");
													$vid_type = array("mp4","MP4","mov",".MOV","avi","AVI","flv","FLV","webm","WebM");

													if(in_array($ext[1], $pdf_type)){ ?>
													<h4 style="font-size:20px;margin:5px">
													<a href="<?php echo $base_url.$path ?>" target="_blank">
														<i class="fa fa-file-pdf"></i>
														<?php if($row_mag['name'] != 'TASK_EMPTY'){echo "<span style='font-size:10px'>".$row_mag['name']."</span>";} ?>
													</a>
													</h4>
													<?php } elseif(in_array($ext[1], $zip_type)){ ?>
													<h4 style="font-size:20px;margin:5px">
													<a href="<?php echo $base_url.$path ?>" target="_blank">
														<i class="fa fa-file-archive"></i>
														<?php if($row_mag['name'] != 'TASK_EMPTY'){echo "<span style='font-size:10px'>".$row_mag['name']."</span>";} ?>
													</a>
													</h4>
													<?php } elseif(in_array($ext[1], $img_type)){ ?>
													<h4 style="font-size:20px;margin:5px">
													<a href="<?php echo $base_url.$path ?>" target="_blank">
														<i class="fa fa-file-image"></i>
														<?php if($row_mag['name'] != 'TASK_EMPTY'){echo "<span style='font-size:10px'>".$row_mag['name']."</span>";} ?>
													</a>
													</h4>
													<?php } elseif(in_array($ext[1], $vid_type)){ ?>
													<h4 style="font-size:20px;margin:5px">
													<a href="<?php echo $base_url.$path ?>" target="_blank">
														<i class="fa fa-file-video"></i>
														<?php if($row_mag['name'] != 'TASK_EMPTY'){echo "<span style='font-size:10px'>".$row_mag['name']."</span>";} ?>
													</a>
													</h4>
													<?php } elseif(in_array($ext[1], $doc_type)){ ?>
													<h4 style="font-size:20px;margin:5px">
													<a href="<?php echo $base_url.$path ?>" target="_blank">
														<i class="fa fa-file-word"></i>
														<?php if($row_mag['name'] != 'TASK_EMPTY'){echo "<span style='font-size:10px'>".$row_mag['name']."</span>";} ?>
													</a>
													</h4>
													<?php } elseif(in_array($ext[1], $xcl_type)){ ?>
													<h4 style="font-size:20px;margin:5px">
													<a href="<?php echo $base_url.$path ?>" target="_blank">
														<i class="fa fa-file-excel"></i>
														<?php if($row_mag['name'] != 'TASK_EMPTY'){echo "<span style='font-size:10px'>".$row_mag['name']."</span>";} ?>
													</a>
													</h4>
													<?php } else{ ?>
													<h4 style="font-size:20px;margin:5px">
													<a href="<?php echo $base_url.$path ?>" target="_blank">
														<i class="fa fa-file-alt"></i>
														<?php if($row_mag['name'] != 'TASK_EMPTY'){echo "<span style='font-size:10px'>".$row_mag['name']."</span>";} ?>
													</a>
													</h4>
													<?php }
												}
											}
											?>
										</td>
                                        <td align="center" style="padding: 8px 0px;"><?php echo get_task_activity($row['id'],$row['dev_id']); ?></td>
										<td>
                                            <table>
                                                <tr>
                                                    <th style="font-weight:bold;padding:0px;">To:</th>
                                                    <td><?php echo $row['dev_name']; ?></td>
                                                </tr>
                                                <tr>
                                                    <th style="font-weight:bold;padding:0px;">Date:</th>
                                                    <td><?php echo date_format(date_create($row['assigned_date']),'m/d/Y'); ?></td>
                                                </tr>
                                            </table>
										</td>
                                        <td>
                                            <?php
                                            $p_color = 'black';
                                            if($row['priority_level'] == 1){
                                                $p_color = 'red';
                                            }
                                            elseif($row['priority_level'] == 2){
                                                $p_color = 'orange';
                                            }

                                            echo "<span style='color:$p_color'>".$row['level']."</span>";
                                            ?>
										</td>
                                        <td align="center" style="padding: 8px 0px;"><?php echo get_task_notification($row['id']); ?></td>
										<td>
                                            <?php
                                            $s_color = 'black';
                                            //working
                                            if($row['status'] == 1){
                                                $s_color = 'green';
                                            }
                                            //hold
                                            elseif($row['status'] == 2){
                                                $s_color = 'orange';
                                            }
                                            //left
                                            elseif($row['status'] == 3){
                                                $s_color = 'red';
                                            }
                                            //completed
                                            elseif($row['status'] == 4){
                                                $s_color = 'blue';
                                            }
                                            //incompleted
                                            elseif($row['status'] == 5){
                                                $s_color = 'orange';
                                            }
                                            ?>
                                            
                                            <table>
                                                <tr>
                                                    <th style="font-weight:bold;padding:0px;">Status:</th>
                                                    <td><?php echo "<span style='color:$s_color'>".get_status($row['status'],'tasks')."</span>"; ?></td>
                                                </tr>
                                                <tr>
                                                    <th style="font-weight:bold;padding:0px;">Progress:</th>
                                                    <td><?php echo $row['progress'].'%'; ?></td>
                                                </tr>
                                            </table>
										</td>
                                        <td>
											<?php echo $row['completion_date']; ?>
										</td>
										<td>
											<center><a href="task_details.php?task_id=<?php echo $row["id"] ?>" class="btn btn-sm btn-primary margin-bottom-10">view details</a></center>
                                            
                                            <center><a href="task.php?edit=<?php echo $row["id"] ?>" class="btn btn-sm btn-primary margin-bottom-10">update</a></center>

											<!--if pending, hold or left-->
											<?php
											if($row['status'] == 0 || $row['status'] == 2 || $row['status'] == 3){
											?>
											<center><button class="btn btn-sm btn-danger margin-bottom-10" class="btn btn-sm btn-primary margin-bottom-10" onclick="task_delete(<?php echo $row["id"] ?>)">delete</button></center>
											<?php
											}
											?>

											<!--if completed move to archives-->
											<?php
											if($row['status'] == 4){
											?>
											<center><button class="btn btn-sm btn-danger margin-bottom-10" onclick="task_archive(<?php echo $row["id"] ?>)">Move to Archives</button></center>
											<?php
											}
											?>
										</td>
									</tr>
									<?php
									}
									?>
								</tbody>
							</table>
						</div>
						<br>
						<?php
						}
						?>
					</div>
				</div>                
            </div>
        </div>
    </div>
</section>

<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
<script src='//cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js'></script>
<script type="text/javascript">
	$(function(){
        $('#myTable').DataTable({
			"aaSorting" : []
		});
	});
</script>
<?php require_once 'inc/footer.php'; ?>