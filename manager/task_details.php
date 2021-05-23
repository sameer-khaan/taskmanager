<?php
require_once 'inc/config.php';
require_once 'inc/header.php';

if(isset($_REQUEST['task_id'])){
	$sql = "SELECT a.*, b.name as dev_name, c.level as level FROM tasks a, developers b, priority c WHERE a.dev_id = b.id AND a.priority_level = c.value AND a.id = '".$_REQUEST["task_id"]."'";
	$res = $conn->query($sql);
	$row = mysqli_fetch_assoc($res);
	if(mysqli_num_rows($res) == 0)
	{
		echo "<script>window.location.href='task.php'</script>";
		exit();
	}
	else
	{
		//reset all notification for this task
		update('notifications',array('is_read' => '1'),"task_id = '".$_REQUEST['task_id']."' AND mag_id = '".$_SESSION["manager"]["id"]."'");
	}
}
else{
	echo "<script>window.location.href='task.php'</script>";
	exit();
}
?>

<style>
	.mytable > thead > tr > th{
		font-weight: bold;
		text-align: center;
	}
	.mytable > tbody > tr > td{
		text-align: center;
	}
	.border-none > tbody > tr > td{
		border: none;
	}
	.desc_div{
		height: 142px;
    	overflow: auto;
    	padding: 10px 20px 0px;
    	border: 1px solid #d0d0d0b0;
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
	.fa-external-link-alt{
		color:#000000ba;
		font-size:16px;
	}
</style>

<section class="main-container">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
				<br>
				<p class="text-center mb-lg">
					<strong style="font-size: 26px;"><?php echo $row['name'] ?></strong>
				</p>
                <?php
				if($row['is_archived'] == 0){
				?>
                <center><a href="task.php?edit=<?php echo $row["id"] ?>" class="btn btn-sm btn-primary margin-bottom-10">update</a></center>
                <?php
                }
                ?>
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
				if($row['is_archived'] == 0 && $row['status'] == 4){
				?>
				<center><h4>Work Completed By Developer <button class="btn btn-sm btn-danger margin-bottom-10" onclick="task_archive(<?php echo $row["id"] ?>)">Move to Archives</button></h4></center>
				<?php
				}
				if($row['is_archived'] == 1){
				?>
				<center><h4 style="color:red">Task Archived</h4></center>
				<?php
				}
				?>
				<br>
				
				<div class="widget-container margin-top-10">
					<div class="widget-content">
						<div class="col-sm-6">
							<div class="col-sm-12">
								<p class="text-center mb-lg" style="font-size:20px;margin:0px;"><strong>Personal Task Notes</strong></p>
								<form role="form" id="add_notes" method="POST" class="form-horizontal">
									<input type="hidden" name="task_id" value="<?php echo $row['id'] ?>" />
									<input type="hidden" name="mag_id" value="<?php echo $_SESSION['manager']['id'] ?>" />
									<textarea class="form-control" rows="1" name="text" maxlength="400" style="width:82%;float:left;"></textarea>
									<button type="submit" class="btn btn-sm btn-primary" style="width:16%;height:38px;float:right;">Add Note</button>
								</form>
							</div>
							<div class="col-sm-12" id="notes" style="height:200px">
								<?php Get_Notes($row['id'],$row['mag_id']); ?>
							</div>
						</div>
						
						<div class="col-sm-6">
							<div class="panel panel-primary">
								<div class="panel-heading" id="accordion" style="font-size:16px">
									<i class="fas fa-comment"></i>
									<?php
										echo get_developer_name($row['dev_id']);
									?>
								</div>
								<div class="panel-collapse" style="border:1px solid #d0d0d0">
									<div class="panel-body" id="chat">
										<?php Get_Chat($row['id'],$row['mag_id'],$row['dev_id']); ?>
									</div>
									<div class="row panel-footer" style="margin:0px">
										<form id="task_chat" method="POST" class="form-horizontal">
											<input type="hidden" name="task_id" value="<?php echo $row['id'] ?>" />
											<input type="hidden" name="mag_id" value="<?php echo $_SESSION['manager']['id'] ?>" />
											<input type="hidden" name="dev_id" value="<?php echo $row['dev_id'] ?>" />
											<textarea class="form-control" rows="1" name="text" maxlength="400" style="width:78%;float:left;"></textarea>
											<button type="submit" class="btn btn-sm btn-primary" style="width:20%;height:38px;float:right;">Send Message</button>
										</form>
									</div>
								</div>
							</div>
						</div>
						
						<div class="clearfix"><br><br></div>
						
						<div class="col-sm-6" style="margin-bottom:20px">
							<div class="col-sm-12">
								<table class="table table-bordered mytable">
									<thead>
										<tr>
											<th>Assign To</th>
											<th>Assign Date</th>
											<th>Priority Level</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><?php echo $row['dev_name']; ?></td>
											<td><?php echo date_format(date_create($row['assigned_date']),'m/d/Y'); ?></td>
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
										</tr>
									</tbody>
								</table>
							</div>
							
							<div class="clearfix"><br></div>
							
							<div class="col-sm-12">
								<table class="table table-bordered mytable">
									<thead>
										<tr>
											<th>Work Status</th>
											<th>Work Stage</th>
											<th>Work Progress</th>
											<th>Completion Time</th>
										</tr>
									</thead>
									<tbody>
										<tr>
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

												echo "<span style='color:$s_color'>".get_status($row['status'],'tasks')."</span>";
                                                
                                                if($row['is_archived'] == 0 && $row['status'] == 4){
                                                ?>
                                                <center><button class="btn btn-sm btn-danger margin-bottom-10" onclick="task_incomplete(<?php echo $row["id"] ?>)">Incomplete</button></center>
                                                <?php
                                                }
												?>
											</td>
											<td><?php echo $row['stage']; ?></td>
											<td><?php echo $row['progress'].'%'; ?></td>
											<td><?php echo $row['completion_date']; ?></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						
						<div class="col-sm-6">
							<table class="table table-bordered mytable">
								<thead>
									<tr>
										<th><strong style="font-size:20px">Description</strong></th>
									</tr>
								</thead>
							</table>
							<div class="desc_div">
								<?php echo $row['description']; ?>
							</div>
						</div>
						
						<div class="clearfix"><br><br></div>
						
						<div class="col-sm-12 table-responsive">
							<table class="table table-bordered">
								<thead>
									<tr>
										<th style="font-weight:bold;text-align:center;font-size:18px">Manager Files</th>
										<th style="font-weight:bold;text-align:center;font-size:18px">Developer Files</th>
									</tr>
									<tr>
										<td style="padding:0px 8px;width:55%">
											<table class="table border-none">
												<tr>
													<td style="width:10%">Id</td>
													<td style="width:20%">File Type</td>
													<td style="width:15%">Upload at</td>
													<?php
													if($row['status'] != 4){
													?>
														<td style="width:10%">Delete</td>
													<?php
													}
													?>
													<td style="width:15%">Preview</td>
												</tr>
											</table>
										</td>
										<td style="padding:0px 8px;width:45%">
											<table class="table border-none">
												<tr>
													<td style="width:12%">Id</td>
													<td style="width:18%">File Type</td>
													<td style="width:15%">Upload at</td>
													<td style="width:10%">Preview</td>
												</tr>
											</table>
										</td>
									</tr>
								</thead>
								<tbody>
									<?php
									$res_mag = check_table('tasks_files_manager',"task_id = '".$_REQUEST["task_id"]."' ORDER BY id");
									while($row_mag = mysqli_fetch_assoc($res_mag)) {
									?>
									<tr>
										<td style="width:55%">
											<table class="table border-none">
												<tr>
													<?php if($row_mag['name'] != 'TASK_EMPTY'){ ?>
													<td style="width:10%">
													<?php
													echo '#'.$row_mag['id'];
													// $file_name = str_replace('assets/task_files/'.$_REQUEST["task_id"].'/','',$row_mag['path']);
													// $file_name = str_replace($_REQUEST["task_id"].'_','',$file_name);
													// echo $file_name;
													?>
													</td>
													
													<td style="width:20%">
													<?php
													$view_url = '';
													$path = $row_mag['path'];
													if($path != ''){
														$view_url = $base_url.$path;
														$ext = explode('.',$path);
														$pdf_type = array("pdf","PDF");
														$zip_type = array("zip","rar");
														$doc_type = array("doc","docx");
														$xcl_type = array("csv","xls","xlsx");
														$img_type = array("png","PNG","jpg","JPG","jpeg","JPEG");
														$vid_type = array("mp4","MP4","mov",".MOV","avi","AVI","flv","FLV","webm","WebM");
														
														if(in_array($ext[1], $pdf_type)){ ?>
														<h4 style="margin:5px">
														<a href="<?php echo $view_url ?>" target="_blank">
															<i class="fa fa-file-pdf"></i>
														</a>
														</h4>
														<?php } elseif(in_array($ext[1], $zip_type)){ ?>
														<h4 style="margin:5px">
														<a href="<?php echo $view_url ?>" target="_blank">
															<i class="fa fa-file-archive"></i>
														</a>
														</h4>
														<?php } elseif(in_array($ext[1], $img_type)){ ?>
														<h4 style="margin:5px">
														<a href="<?php echo $view_url ?>" target="_blank">
															<i class="fa fa-file-image"></i>
														</a>
														</h4>
														<?php } elseif(in_array($ext[1], $vid_type)){ ?>
														<h4 style="margin:5px">
														<a href="<?php echo $view_url ?>" target="_blank">
															<i class="fa fa-file-video"></i>
														</a>
														</h4>
														<?php } elseif(in_array($ext[1], $doc_type)){ ?>
														<h4 style="margin:5px">
														<a href="<?php echo $view_url ?>" target="_blank">
															<i class="fa fa-file-word"></i>
														</a>
														</h4>
														<?php } elseif(in_array($ext[1], $xcl_type)){ ?>
														<h4 style="margin:5px">
														<a href="<?php echo $view_url ?>" target="_blank">
															<i class="fa fa-file-excel"></i>
														</a>
														</h4>
														<?php } else{ ?>
														<h4 style="margin:5px">
														<a href="<?php echo $view_url ?>" target="_blank">
															<i class="fa fa-file-alt"></i>
														</a>
														</h4>
														<?php }
														echo "<span style='font-size:smaller'>".$row_mag['name']."</span>";
													}
													?>
													</td>
													
													<td style="width:15%"><?php echo date_format(date_create($row_mag['upload_date']),'m/d/Y'); ?></td>
													
													<?php
													if($row['status'] != 4){
													?>
													<td style="width:10%"><a href="javascript://" style="color:red"><i class="fas fa-trash-alt" onclick="del_file('<?php echo $row_mag['id'] ?>','<?php echo $path ?>')"></i></a></td>
													<?php
													}
                                                    
                                                    if(file_exists('../'.$path)){
                                                    ?>
                                                    <td style="width:15%"><a href="<?php echo $view_url ?>" target="_blank"><button class="btn btn-sm btn-primary">view</button></a></td>
                                                    <?php
                                                    }
                                                    else{
                                                    ?>
                                                    <td style="width:15%;color:red">Upload Failed</td>
                                                    <?php
													}
													}
                                                    ?>
												</tr>
											</table>
										</td>
										<td style="width:45%">
											<table class="table">
											<?php
											$res_dev = check_table('tasks_files_developer',"task_file_id = '".$row_mag["id"]."' ORDER BY id");
											while($row_dev = mysqli_fetch_assoc($res_dev)) {
											?>
											<tr>
												<td style="padding:0px;border-top:none">
													<table class="table border-none">
													<tr>
														<td style="width:10%">
														<?php
														echo '#'.$row_mag['id'].'_'.$row_dev['id'];
														// $file_name = str_replace('assets/task_files/'.$_REQUEST["task_id"].'/','',$row_dev['path']);
														// $file_name = str_replace($_REQUEST["task_id"].'_','',$file_name);
														// echo $file_name;
														?>
														</td>

														<td style="width:20%">
														<?php
														$view_url = '';
														$path = $row_dev['path'];
														if($path != ''){
															$view_url = $base_url.$path;
															$ext = explode('.',$path);
															$pdf_type = array("pdf","PDF");
															$zip_type = array("zip","rar");
															$doc_type = array("doc","docx");
															$xcl_type = array("csv","xls","xlsx");
															$img_type = array("png","PNG","jpg","JPG","jpeg","JPEG");
															$vid_type = array("mp4","MP4","mov",".MOV","avi","AVI","flv","FLV","webm","WebM");

															if(in_array($ext[1], $pdf_type)){ ?>
															<h4 style="margin:5px">
															<a href="<?php echo $view_url ?>" target="_blank">
																<i class="fa fa-file-pdf"></i>
															</a>
															</h4>
															<?php } elseif(in_array($ext[1], $zip_type)){ ?>
															<h4 style="margin:5px">
															<a href="<?php echo $view_url ?>" target="_blank">
																<i class="fa fa-file-archive"></i>
															</a>
															</h4>
															<?php } elseif(in_array($ext[1], $img_type)){ ?>
															<h4 style="margin:5px">
															<a href="<?php echo $view_url ?>" target="_blank">
																<i class="fa fa-file-image"></i>
															</a>
															</h4>
															<?php } elseif(in_array($ext[1], $vid_type)){ ?>
															<h4 style="margin:5px">
															<a href="<?php echo $view_url ?>" target="_blank">
																<i class="fa fa-file-video"></i>
															</a>
															</h4>
															<?php } elseif(in_array($ext[1], $doc_type)){ ?>
															<h4 style="margin:5px">
															<a href="<?php echo $view_url ?>" target="_blank">
																<i class="fa fa-file-word"></i>
															</a>
															</h4>
															<?php } elseif(in_array($ext[1], $xcl_type)){ ?>
															<h4 style="margin:5px">
															<a href="<?php echo $view_url ?>" target="_blank">
																<i class="fa fa-file-excel"></i>
															</a>
															</h4>
															<?php } else{ ?>
															<h4 style="margin:5px">
															<a href="<?php echo $view_url ?>" target="_blank">
																<i class="fa fa-file-alt"></i>
															</a>
															</h4>
															<?php }
															echo "<span style='font-size:smaller'>".$row_dev['name']."</span>";
														}
														$link = $row_dev['link'];
														if($link != ''){
														$view_url = $link;
														?>
														<h4 style="margin:5px">
														<a href="<?php echo $view_url ?>" target="_blank">
															<i class="fas fa-external-link-alt"></i>
														</a>
														</h4>
														<?php
														}
														?>
														</td>
                                                        
														<td style="width:15%"><?php echo date_format(date_create($row_dev['upload_date']),'m/d/Y'); ?></td>
                                                        
                                                        <?php
                                                        if(file_exists('../'.$path)){
                                                        ?>
                                                        <td style="width:10%"><a href="<?php echo $view_url ?>" target="_blank"><button class="btn btn-sm btn-primary">view</button></a></td>
                                                        <?php
                                                        }
                                                        else{
                                                        ?>
                                                        <td style="width:10%;color:red">Upload Failed</td>
                                                        <?php
                                                        }
                                                        ?>
													</tr>
												</table>
												</td>
											</tr>
											<?php
											}
											?>
											</table>
										</td>
									</tr>
									<?php
									}
									?>
                                    <?php
                                    if($row['is_archived'] == 0){
                                    ?>
                                    <tr>
                                        <td>
                                            <form role="form" id="upload_files" method="post" class="form-horizontal" enctype="multipart/form-data">
                                                <input type="hidden" name="id" value="<?php echo $row['id'] ?>" />
                                                <input type="hidden" name="dev_id" value="<?php echo $row['dev_id'] ?>" />
                                                <input type="file" name="file[]" multiple required style="float:left" />
                                                <button type="submit" class="btn btn-sm btn-primary submit_btn" style="float:left">Upload</button>
                                                <div class="error" style="clear:both"></div>
                                            </form>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <?php
                                    }
                                    ?>
								</tbody>
							</table>
						</div>
						
						<div class="clearfix"><br><br><br></div>
					</div>
				</div>                
            </div>
        </div>
    </div>
</section>

<?php require_once 'inc/footer.php'; ?>