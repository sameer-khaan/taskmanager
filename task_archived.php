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
</style>

<section class="main-container">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
				<br>
				<p class="text-center mb-lg">
					<strong style="font-size: 26px;">Archived Tasks</strong>
					<br>
					<span>Note: List of tasks which you have completed and manager archived it</span>
				</p>
				<br>
				
				<div class="widget-container margin-top-10">
					<div class="widget-content table-responsive">
						<table class="table table-bordered bootstrap-datatable datatable dataTable" id="myTable">
							<thead>
								<tr>
									<th style="font-weight:bold;">Task Name</th>
									<th style="font-weight:bold;">Assign Date</th>
									<th style="font-weight:bold;">Priority Level</th>
									<th style="font-weight:bold;">Work Status</th>
									<th style="font-weight:bold;">Completed Date</th>
									<th style="font-weight:bold;">Archived Date</th>
									<th style="font-weight:bold;text-align:center;">Action</th>
								</tr>
							</thead>
							<tbody>
								<?php
								$sql = "SELECT a.*, b.name as dev_name, c.level as level FROM tasks a, developers b, priority c WHERE a.dev_id = b.id AND a.priority_level = c.value AND a.is_archived = '1' AND b.id = '".$_SESSION['developer']['id']."' ORDER BY a.archived_date DESC";
								$res = $conn->query($sql);
								while($row = mysqli_fetch_assoc($res)) {
								?>
								<tr>
									<td><?php echo $row['name']; ?></td>
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
										?>
									</td>
                                    <td><?php echo date_format(date_create($row['completed_date']),'m/d/Y'); ?></td>
                                    <td><?php echo date_format(date_create($row['archived_date']),'m/d/Y'); ?></td>
									<td>
										<center><a href="task_details.php?task_id=<?php echo $row["id"] ?>" class="btn btn-sm btn-primary">view details</a></center>
									</td>
								</tr>
								<?php
								}
								?>
							</tbody>
						</table>
						<br><br>
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