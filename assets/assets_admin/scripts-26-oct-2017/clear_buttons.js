jQuery(document).ready(function()
{
	$("a").click(function()
	{
		_ID		=	$(this).attr('id');
		
		$("#"+_ID).parent().find('.popover').find('.editableform').find('.editable-buttons').append('  <button data-id="'+_ID+'" data-field="'+_ID+'" data-value="NULL" type="button" class="btn red eraseData"> Clear</button>');
	});
	
	
	
	$(document).on('click', '.eraseData', function(e)
	{
		pdf_user_id			=	$("#pdf_user_id").val();
		data_id				=	$(this).attr('data-id');
		field				=	$(this).attr('data-field');
		fieldValue			=	$(this).attr('data-value');
		
		//-----------to make field not required------------------------------//
			if($( '#'+data_id ).hasClass('requiredField'))
			{
				$('#'+data_id).removeClass('requiredField');
			}
			
			if($( '#'+data_id ).next().hasClass('requiredError'))
			{
				$('#'+data_id).next().remove();
			}
			
			
			
			if(field	==	'from1')
			{
				$("#to1").removeClass('requiredField');	
				if($( "#to1" ).next().hasClass('requiredError'))
				{
					$("#to1").next().remove();
				}
			}
			else if(field	==	'from2')
			{
				$("#to2").removeClass('requiredField');	
				if($( "#to2" ).next().hasClass('requiredError'))
				{
					$("#to2").next().remove();
				}
			}
			else if(field	==	'from3')
			{
				$("#to3").removeClass('requiredField');	
				if($( "#to3" ).next().hasClass('requiredError'))
				{
					$("#to3").next().remove();
				}
			}
			else if(field	==	'from4')
			{
				$("#to4").removeClass('requiredField');	
				if($( "#to4" ).next().hasClass('requiredError'))
				{
					$("#to4").next().remove();
				}
			}
			else if(field	==	'from5')
			{	
				$("#to5").removeClass('requiredField');	
				if($( "#to5" ).next().hasClass('requiredError'))
				{
					$("#to5").next().remove();
				}
			}
			else if(field	==	'from6')
			{
				$("#to6").removeClass('requiredField');	
				if($( "#to6" ).next().hasClass('requiredError'))
				{
					$("#to6").next().remove();
				}
			}
			else if(field	==	'from7')
			{
				$("#to7").removeClass('requiredField');	
				if($( "#to7" ).next().hasClass('requiredError'))
				{
					$("#to7").next().remove();
				}
			}
			else if(field	==	'from8')
			{
				$("#to8").removeClass('requiredField');	
				if($( "#to8" ).next().hasClass('requiredError'))
				{
					$("#to8").next().remove();
				}
			}
			else if(field	==	'employer1')
			{
				$("#from3").removeClass('requiredField');
				$("#to3").removeClass('requiredField');
				$("#add3").removeClass('requiredField');
				$("#phone3").removeClass('requiredField');
				$("#position1").removeClass('requiredField');
				$("#netincome1").removeClass('requiredField');
				
				if($( "#from3" ).next().hasClass('requiredError'))
				{
					$("#from3").next().remove();
				}
				if($( "#to3" ).next().hasClass('requiredError'))
				{
					$("#to3").next().remove();
				}
				if($( "#add3" ).next().hasClass('requiredError'))
				{
					$("#add3").next().remove();
				}
				if($( "#phone3" ).next().hasClass('requiredError'))
				{
					$("#phone3").next().remove();
				}
				if($( "#position1" ).next().hasClass('requiredError'))
				{
					$("#position1").next().remove();
				}
				if($( "#netincome1" ).next().hasClass('requiredError'))
				{
					$("#netincome1").next().remove();
				}
			}
			else if(field	==	'employer2')
			{
				$("#from7").removeClass('requiredField');
				$("#to7").removeClass('requiredField');
				$("#add7").removeClass('requiredField');
				$("#phone7").removeClass('requiredField');
				$("#position3").removeClass('requiredField');
				$("#netincome3").removeClass('requiredField');
				
				if($( "#from7" ).next().hasClass('requiredError'))
				{
					$("#from7").next().remove();
				}
				if($( "#to7" ).next().hasClass('requiredError'))
				{
					$("#to7").next().remove();
				}
				if($( "#add7" ).next().hasClass('requiredError'))
				{
					$("#add7").next().remove();
				}
				if($( "#phone7" ).next().hasClass('requiredError'))
				{
					$("#phone7").next().remove();
				}
				if($( "#position3" ).next().hasClass('requiredError'))
				{
					$("#position3").next().remove();
				}
				if($( "#netincome3" ).next().hasClass('requiredError'))
				{
					$("#netincome3").next().remove();
				}
			}
		//-----------to make field  not required------------------------------//
		
		$('#'+data_id).editable('setValue','',true);
		$('.editable-cancel').trigger('click');
		
		
		if(	data_id == 'to1' || 
			data_id == 'to2' || 
			data_id == 'to3' || 
			data_id == 'to4' || 
			data_id == 'to5' || 
			data_id == 'to6' || 
			data_id == 'to7' || 
			data_id == 'to8'
			)
		{
			postData	=	"pdf_user_id="+pdf_user_id+"&"+field+"="+fieldValue+"&"+data_id+"_current=NULL";
		}
		else
		{
			postData	=	"pdf_user_id="+pdf_user_id+"&"+field+"="+fieldValue;
		}
		
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
						$('#'+data_id).text('Empty');
						console.log(response);
						e.preventDefault();
					}
				});
	});
});