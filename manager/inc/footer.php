<script src="js/lib/bootstrap.js"></script>
<script src="js/lib/jquery.ui.js"></script>
<script src="js/lib/jRespond.js"></script>
<script src="js/lib/nav.accordion.js"></script>
<script src="js/lib/hover.intent.js"></script>
<script src="js/lib/hammerjs.js"></script>
<script src="js/lib/jquery.hammer.js"></script>
<script src="js/lib/jquery.fitvids.js"></script>
<script src="js/lib/scrollup.js"></script>
<script src="js/lib/jquery.slimscroll.js"></script>
<script src="js/lib/jquery.syntaxhighlighter.js"></script>
<script src="js/lib/velocity.js"></script>
<script src="js/lib/smart-resize.js"></script>
<script src="js/lib/jquery.maskedinput.js"></script>
<script src="js/lib/jquery.form.js"></script>
<script src="js/lib/j-forms.js"></script>
<script src="js/lib/jquery.loadmask.js"></script>
<script src="js/lib/theme-switcher.js"></script>
<script src="js/apps.js"></script>

<script>
$(document).ready(function(){
	
loadGallery(true, 'a.thumb');

//This function disables buttons when needed
function disableButtons(unit_id, counter_max, counter_current) {
	$('.show-previous-image'+unit_id).show();
	$('.show-next-image'+unit_id).show();

	if(counter_max == counter_current){
		$('.show-next-image'+unit_id).hide();
	}
	if (counter_current == 1){
		$('.show-previous-image'+unit_id).hide();
	}
	if (counter_max == 1){
		$('.show-previous-image'+unit_id).hide();
		$('.show-next-image'+unit_id).hide();
	}
}

function loadGallery(setIDs, setClickAttr) {
	var current_image,
		selector,
		counter = 0;

	$('#show-next-image, #show-previous-image').click(function(){
		if($(this).attr('id') == 'show-previous-image'){
			current_image--;
		} else {
			current_image++;
		}

		selector = $('[data-id="' + current_image + '"]');
		updateGallery(selector);
	});

	function updateGallery(selector) {
		var $sel = selector;
		unit_id = $sel.data('unit-id');
		current_image = $sel.data('id');
		$('#image-gallery-image'+unit_id).attr('src', $sel.data('image'));
		disableButtons($sel.data('unit-id'), $sel.data('total'), $sel.data('image-id'));
	}

	if(setIDs == true){
		$('[data-id]').each(function(){
			counter++;
			$(this).attr('data-id',counter);
		});
	}

	$(setClickAttr).on('click',function(){
		updateGallery($(this));
	});
}

$('#login').submit(function(e){
	var datastring = $(this).serialize();
	$.ajax({
	   type : "post",
	   url :  "ajax.php?login="+datastring,
	   data: datastring,
	   cache : false,
	   success : function(responseData,textStatus,jqXHR){
			if(responseData == "1") {
				window.location.href = dashboard_url;
			}
			else{
				$('#login .error').html(responseData);
			}
	   },
	   error: function(jqXHR, textStatus, errorThrown) {
			alert(errorThrown);
	   }
	});
	e.preventDefault();
});

$('#logout').click(function(e){
	$.ajax({
	   type : "post",
	   url :  "ajax.php?logout=1",
	   success : function(responseData,textStatus,jqXHR){
			window.location.href = admin_url;
	   },
	   error: function(jqXHR, textStatus, errorThrown) {
			alert(errorThrown);
	   }
	});
	e.preventDefault();
});

$('#forget_password').submit(function(e){
	var datastring = $(this).serialize();
	$.ajax({
	   type : "post",
	   url :  "ajax.php?forget_password="+datastring,
	   data: datastring,
	   cache : false,
	   success : function(responseData,textStatus,jqXHR){
		   $('#forget_password .error').html(responseData);
	   },
	   error: function(jqXHR, textStatus, errorThrown) {
			alert(errorThrown);
	   }
	});
	e.preventDefault();
});

$('#new_password').submit(function(e){
	var datastring = $(this).serialize();
	$.ajax({
	   type : "post",
	   url :  "ajax.php?new_password="+datastring,
	   data: datastring,
	   cache : false,
	   success : function(responseData,textStatus,jqXHR){
		   if(responseData == "1") {
			   	$('#new_password .error').html("Updated Succesfully");
				window.location.href = admin_url;
			}
			else{
				$('#new_password .error').html(responseData);
			}
	   },
	   error: function(jqXHR, textStatus, errorThrown) {
			alert(errorThrown);
	   }
	});
	e.preventDefault();
});

$('#update_info').submit(function(e){
	var datastring = $(this).serialize();
	$.ajax({
		type : "post",
		url :  "ajax.php?update_info="+datastring,
		data: datastring,
		cache : false,
		success : function(responseData,textStatus,jqXHR)
		{
			if(responseData == "1") {
				window.location.reload();
			}
			else{
				$('#update_info .error').html(responseData);
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert(errorThrown);
		}
	});
	e.preventDefault();
});

$('#update_pass').submit(function(e){
	var datastring = $(this).serialize();
	$.ajax({
		type : "post",
		url :  "ajax.php?update_pass="+datastring,
		data: datastring,
		cache : false,
		success : function(responseData,textStatus,jqXHR)
		{
			if(responseData == "1") {
				window.location.reload();
			}
			else{
				$('#update_pass .error').html(responseData);
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert(errorThrown);
		}
	});
	e.preventDefault();
});

$('#update_timezone').submit(function(e){
	var datastring = $(this).serialize();
	$.ajax({
		type : "post",
		url :  "ajax.php?update_timezone="+datastring,
		data: datastring,
		cache : false,
		success : function(responseData,textStatus,jqXHR)
		{
			if(responseData == "1") {
				window.location.reload();
			}
			else{
				$('#update_timezone .error').html(responseData);
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert(errorThrown);
		}
	});
	e.preventDefault();
});

$('#add_developer').submit(function(e){
	var datastring = $(this).serialize();
	$.ajax({
		type : "post",
		url :  "ajax.php?add_developer="+datastring,
		data: datastring,
		cache : false,
		success : function(responseData,textStatus,jqXHR)
		{
			if(responseData == "1") {
				window.location.href = "team_update.php";
			}
			else{
				$('#add_developer .error').html(responseData);
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert(errorThrown);
		}
	});
	e.preventDefault();
});

$('#update_developer').submit(function(e){
	var datastring = $(this).serialize();
	$.ajax({
		type : "post",
		url :  "ajax.php?update_developer="+datastring,
		data: datastring,
		cache : false,
		success : function(responseData,textStatus,jqXHR)
		{
			if(responseData == "1") {
				window.location.reload();
			}
			else{
				$('#update_developer .error').html(responseData);
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert(errorThrown);
		}
	});
	e.preventDefault();
});

$('#create_task').submit(function(e){
	$("#create_task .submit_btn").html("Processing... <img src='"+base_url+"assets/img/processing.gif' width='20px' height='20px'>");
	$("#create_task .submit_btn").attr('disabled','disabled');
	
	$('#description_main').val(CKEDITOR.instances['description'].getData());
	var formData = new FormData(this);
	var datastring = $(this).serialize();
	
	$.ajax({
		type : "post",
		url :  "ajax.php?create_task="+datastring,
		data: formData,
		contentType: false,
		cache: false,
		processData:false,
		success : function(responseData,textStatus,jqXHR)
		{
			if(responseData == "1") {
				window.location.href = "task.php";
			}
			else{
				$('#create_task .error').html(responseData);
				$("#create_task .submit_btn").html("Create");
				$("#create_task .submit_btn").removeAttr('disabled');
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert(errorThrown);
			$("#create_task .submit_btn").html("Create");
			$("#create_task .submit_btn").removeAttr('disabled');
		}
	});
	e.preventDefault();
});

$('#update_task').submit(function(e){
	$("#update_task .submit_btn").html("Processing... <img src='"+base_url+"assets/img/processing.gif' width='20px' height='20px'>");
	$("#update_task .submit_btn").attr('disabled','disabled');
	
	$('#description_main').val(CKEDITOR.instances['description'].getData());
	var formData = new FormData(this);
	var datastring = $(this).serialize();
	
	$.ajax({
		type : "post",
		url :  "ajax.php?update_task="+datastring,
		data: formData,
		contentType: false,
		cache: false,
		processData:false,
		success : function(responseData,textStatus,jqXHR)
		{
			if(responseData == "1") {
				window.location.href = "task.php";
			}
			else{
				$('#update_task .error').html(responseData);
				$("#update_task .submit_btn").html("Update");
				$("#update_task .submit_btn").removeAttr('disabled');
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert(errorThrown);
			$("#update_task .submit_btn").html("Update");
			$("#update_task .submit_btn").removeAttr('disabled');
		}
	});
	e.preventDefault();
});

$('#upload_files').submit(function(e){
	$("#upload_files .submit_btn").html("Processing... <img src='"+base_url+"assets/img/processing.gif' width='20px' height='20px'>");
	$("#upload_files .submit_btn").attr('disabled','disabled');
	
	var formData = new FormData(this);
	var datastring = $(this).serialize();
	
	$.ajax({
		type : "post",
		url :  "ajax.php?upload_files="+datastring,
		data: formData,
		contentType: false,
		cache: false,
		processData:false,
		success : function(responseData,textStatus,jqXHR)
		{
			if(responseData == "1") {
				window.location.reload();
			}
			else{
				$('#upload_files .error').html(responseData);
				$("#upload_files .submit_btn").html("Upload");
				$("#upload_files .submit_btn").removeAttr('disabled');
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert(errorThrown);
			$("#upload_files .submit_btn").html("Upload");
			$("#upload_files .submit_btn").removeAttr('disabled');
		}
	});
	e.preventDefault();
});

$('#add_notes').submit(function(e){
	var datastring = $(this).serialize();
	$.ajax({
		type : "post",
		url :  "ajax.php?add_notes="+datastring,
		data: datastring,
		cache : false,
		success : function(responseData,textStatus,jqXHR)
		{
			$('#notes').html(responseData);
			$('#add_notes')[0].reset();
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert(errorThrown);
		}
	});
	e.preventDefault();
});

$('#task_chat').submit(function(e){
	var datastring = $(this).serialize();
	$.ajax({
		type : "post",
		url :  "ajax.php?task_chat="+datastring,
		data: datastring,
		cache : false,
		success : function(responseData,textStatus,jqXHR)
		{
			$('#chat').html(responseData);
			$('#task_chat')[0].reset();
		},
		error: function(jqXHR, textStatus, errorThrown) {
			alert(errorThrown);
		}
	});
	e.preventDefault();
});

});

function createRequestObject()
{
    var tmpXmlHttpObject;
    if (window.XMLHttpRequest)
    {
        tmpXmlHttpObject = new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {
        tmpXmlHttpObject = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return tmpXmlHttpObject;
}

function task_delete(id)
{
	if(confirm("Click ok to DELETE this task to permanently")){
		$.ajax({
		   type : "post",
		   url :  "ajax.php?task_delete="+id,
		   success : function(responseData,textStatus,jqXHR){
				window.location.reload();
		   },
		   error: function(jqXHR, textStatus, errorThrown) {
				alert(errorThrown);
		   }
		});
	}
}

function task_archive(id)
{
	if(confirm("Click ok to move this task to archives")){
		$.ajax({
		   type : "post",
		   url :  "ajax.php?task_archive="+id,
		   success : function(responseData,textStatus,jqXHR){
				window.location.reload();
		   },
		   error: function(jqXHR, textStatus, errorThrown) {
				alert(errorThrown);
		   }
		});
	}
}

function task_incomplete(id)
{
	if(confirm("Click ok to mark this task incomplete")){
		$.ajax({
		   type : "post",
		   url :  "ajax.php?task_incomplete="+id,
		   success : function(responseData,textStatus,jqXHR){
				window.location.reload();
		   },
		   error: function(jqXHR, textStatus, errorThrown) {
				alert(errorThrown);
		   }
		});
	}
}

function del_file(id,path)
{
	if(confirm("Click ok to delete this file")){
		$.ajax({
		   type : "post",
		   url :  "ajax.php?del_file="+id+"&path="+path,
		   success : function(responseData,textStatus,jqXHR){
			   window.location.reload();
		   },
		   error: function(jqXHR, textStatus, errorThrown) {
				alert(errorThrown);
		   }
		});
	}
}

function notification_click(id,task_id)
{
	$.ajax({
	   type : "post",
	   url :  "ajax.php?notification_click="+id+"&task_id="+task_id,
	   success : function(responseData,textStatus,jqXHR){
		   if(responseData == "1"){
			   window.location.href = 'task_details.php?task_id='+task_id;
		   }
	   },
	   error: function(jqXHR, textStatus, errorThrown) {
	   }
	});
}

function showDiv(select)
{
   if(select.value == 'on'){
	document.getElementById('hidden_div').style.display = "block";
   } else{
	document.getElementById('hidden_div').style.display = "none";
   }
}

function setGMT(select)
{
	val = select.value;
	$.ajax({
		type: "post",
		url: "ajax.php?setGMT="+val,
		success: function(responseData, textStatus, jqXHR) {
			sign = responseData.split(responseData.match(/[0-9]+/g));
			$("#gmt").val(responseData);
			$("#gmt_sign").val(sign[0]);
			$("#gmt_value").val(responseData.match(/[0-9]+/g));
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
}
</script>

</body>
</html>