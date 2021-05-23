 jQuery(document).ready(function() {
	
	$("#to1").click(function()
	{
		$("#to1").parent().find('.popover').find('.editableform').find('.editable-buttons').append('  <button data-id="to1" data-field="to1_current" data-value="current" type="submit" class="btn blue current_date_dyn"> Currnet </button>');
	});
	
	$("#to2").click(function()
	{
		$("#to2").parent().find('.popover').find('.editableform').find('.editable-buttons').append('  <button data-id="to2" data-field="to2_current" data-value="current" type="submit" class="btn blue current_date_dyn"> Currnet </button>');
	});
	
	$("#to3").click(function()
	{
		$("#to3").parent().find('.popover').find('.editableform').find('.editable-buttons').append('  <button data-id="to3" data-field="to3_current" data-value="current" type="submit" class="btn blue current_date_dyn"> Currnet </button>');
	});
	
	$("#to4").click(function()
	{
		if($( ".current_previous_employer" ).parents('.checked').length != 0)
		{
			$("#to4").parent().find('.popover').find('.editableform').find('.editable-buttons').append('  <button data-id="to4" data-field="to4_current" data-value="current" type="submit" class="btn blue current_date_dyn"> Currnet </button>');
		}
	});
	
	$("#to5").click(function()
	{
		if($( ".co_applicant_signer" ).parents('.checked').length != 0)
		{
			$("#to5").parent().find('.popover').find('.editableform').find('.editable-buttons').append('  <button data-id="to5" data-field="to5_current" data-value="current" type="submit" class="btn blue current_date_dyn"> Currnet </button>');
		}
	});
	
	$("#to6").click(function()
	{
		$("#to6").parent().find('.popover').find('.editableform').find('.editable-buttons').append('  <button data-id="to6" data-field="to6_current" data-value="current" type="submit" class="btn blue current_date_dyn"> Currnet </button>');
	});

	$("#to7").click(function()
	{
		$("#to7").parent().find('.popover').find('.editableform').find('.editable-buttons').append('  <button data-id="to7" data-field="to7_current" data-value="current" type="submit" class="btn blue current_date_dyn"> Currnet </button>');
	});
	
	$("#to8").click(function()
	{
		if($( ".current_previous_employer2" ).parents('.checked').length != 0)
		{
			$("#to8").parent().find('.popover').find('.editableform').find('.editable-buttons').append('  <button data-id="to8" data-field="to8_current" data-value="current" type="submit" class="btn blue current_date_dyn"> Currnet </button>');
		}
	});
	
	$(document).on('click', '.current_date_dyn', function()
	{
		pdf_user_id			=	$("#pdf_user_id").val();
		data_id				=	$(this).attr('data-id');
		field				=	$(this).attr('data-field');
		fieldValue			=	$(this).attr('data-value');
		
		var currentYear = (new Date).getFullYear();
		var currentMonth = (new Date).getMonth() + 1;
		var currentDay = (new Date).getDate();
        var current_date = currentYear+"-"+currentMonth+"-"+currentDay;

		//alert(currentYear+"-"+currentMonth+"-"+currentDay);
		
		$('#'+data_id).editable('setValue',currentYear+"-"+currentMonth+"-"+currentDay,true);
		$('#'+data_id).find('.editable-submit').trigger('click');
		$('#'+data_id).text("Current");
        
		//postData	=	"pdf_user_id="+pdf_user_id+"&"+field+"="+current_date+"&"+data_id+"=0000-00-00";
		postData	=	"pdf_user_id="+pdf_user_id+"&"+field+"=current&"+data_id+"=NULL";
		
        console.log(postData);
        
		$.ajax({
					url: "post.php",
					data: postData,
					type: 'post',
					error: function(xhr, status, error) {
                        var err = eval("(" + xhr.responseText + ")");
                        console.log(err.Message);
					},
					success: function(response) 
					{
						$('#'+data_id).css("color","#6564B0");
						console.log(response);
					}
				});
	});
})