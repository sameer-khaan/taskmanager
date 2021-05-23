$(document).ready(function()
{
	 
	calculatePoints();
	
	$('body').on('change','.pointSystem',function(){
		_fieldName		=	$(this).attr('name');
		_fieldValue		=	$(this).val();
		_multiplyWith	=	$(this).attr('multiplyWith');
		

		_multiplyResult	=	parseInt(_fieldValue) * parseInt(_multiplyWith);
		$('#total_'+_fieldName).text(_multiplyResult);
		
		
		calculatePoints();
	});
	
	$('body').on('keyup','#special_service_points',function()
	{
		$(this).val($(this).val().replace(/[^\d]/ig, ''));
		
		if($.isNumeric($(this).val().replace(/[^\d]/ig, '')))
		{
			_fieldName		=	'special_service';
			_fieldValue		=	$('#special_service').val();
			_multiplyWith	=	$(this).val().replace(/[^\d]/ig, '');
								$('#special_service').attr('multiplyWith', $(this).val().replace(/[^\d]/ig, ''));

			_multiplyResult	=	parseInt(_fieldValue) * parseInt(_multiplyWith);
			$('#total_'+_fieldName).text(_multiplyResult);
			
			calculatePoints();
		}
	})
})

function calculatePoints()
{
	var sum = 0;
		 
	$(".multiplyResultText").each(function() {
		sum 		+=	parseFloat($(this).text());
	});

	$('#total_points_text').text(sum);
	$('#total_points').val(sum);
	
	
	var sum = 0;
	$(".pointSystem").each(function() {
		sum 		+=	parseFloat($(this).val() || 0);
	});

	$('#total_dropdown_text').text(sum);
}


function countChar(_this)
{
	var text_max = 70;
	
	var text_length = _this.value.length;
	var text_remaining = text_max - text_length;

	$('#charNum').html(text_remaining + ' characters remaining');
};