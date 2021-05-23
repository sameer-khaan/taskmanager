 jQuery(document).ready(function() {
   
    $('#employer_form_submit').click(function(){
		  var flag	= '1';
		 
		  $( ".requiredField" ).each(function() 
			{
				
				if($( this ).text() == 'Empty' || $( this ).text() == 'empty')
				{
					console.log($( this ).attr('id'));
					flag	= '0';
					$(this).next().next('.requiredError').remove();
					$(this).next().remove();
					$(this).after( "  <span class='requiredError' style='color:red'>This field is required</span>" );
				}
				else
				{
					//$(this).next().next('.requiredError').remove();
					//$(this).next().remove();
				}
			});
			
		
		
			if($(".employer_emp_cont").parent().hasClass('checked'))
			{
				$('#employer_emp_cont_errorMessage').html( "" );
			}
			else
			{
				console.log($( this ).attr('id'));
				flag	= '0';
				$('#employer_emp_cont_errorMessage').html( "" );
				$('#employer_emp_cont_errorMessage').html( "  <span class='requiredError' style='color:red'>Please check at least one.</span>" );
			}
			
			if($(".employer_full_part_time").parent().hasClass('checked'))
			{
				$('#employer_full_part_time_errorMessage').html( "" );
			}
			else
			{
				console.log($( this ).attr('id'));
				flag	= '0';
				$('#employer_full_part_time_errorMessage').html( "" );
				$('#employer_full_part_time_errorMessage').html( "  <span class='requiredError' style='color:red'>Please check at least one.</span>" );
			}

			
			if(flag == 1)
			{
				$('#form-error-alert').css('display','none');
				$(this).parents('form:first').submit();
			}
			else
			{
				$('#form-error-alert').css('display','block');
			}
	});
 }); 