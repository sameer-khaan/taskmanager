var rulesForInputArrays = function() {
		
		$('.comparisonRadio').each(function() {
				
				$(this).rules('add', {
					required: true,
					messages: {
						required: "Please choose one option."
					}
				})
			});
	};

var FormWizard = function () {


    return {
		init: function () {
			
			 
            if (!jQuery().bootstrapWizard) {
                return;
            }

            
            var form = $('#introductoryProcessForm');
            var error = $('.alert-danger', form);
            var success = $('.alert-success', form);

            form.validate({
                doNotHideMessage: true, //this option enables to show the error/success messages on tab switch.
                errorElement: 'span', //default input error message container
                errorClass: 'help-block text-danger', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                rules: {
                    
                },

                messages: { // custom messages for radio buttons and checkboxes
                    
                },

                errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.attr("class") == "comparisonRadio") { // for uniform radio buttons, insert the after the given container
                        error.insertAfter("."+element.attr("name"));
                    } else if (element.attr("name") == "gender") { // for uniform radio buttons, insert the after the given container
                        error.insertAfter("#form_gender_error");
                    } else if (element.attr("name") == "payment[]") { // for uniform radio buttons, insert the after the given container
                        error.insertAfter("#form_payment_error");
                    } else {
                        error.insertAfter(element); // for other inputs, just perform default behavior
                    }
                },

                invalidHandler: function (event, validator) { //display error alert on form submit   
                    success.hide();
                    error.show();
                  //  App.scrollTo(error, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.form-group').removeClass('has-success').addClass('has-error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                },

                success: function (label) {
                    if (label.attr("for") == "gender" || label.attr("for") == "payment[]") { // for checkboxes and radio buttons, no need to show OK icon
                        label
                            .closest('.form-group').removeClass('has-error').addClass('has-success');
                        label.remove(); // remove error label here
                    } else { // display success icon for other inputs
                        label
                            .addClass('valid') // mark the current input as valid and display OK icon
                        .closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                    }
                },

                submitHandler: function (form) {
                    success.show();
                    error.hide();
                    //add here some ajax code to submit your form or just call form.submit() if you want to submit the form without ajax
                }

            });
			//rulesForInputArrays();
           
			jQuery('li', $('#form_wizard_1')).removeClass("active");
			jQuery('.tab-pane', $('#form_wizard_1')).removeClass("active");
			jQuery('li.incomplete:first', $('#form_wizard_1')).addClass("active");
			jQuery('div.incomplete:first', $('#form_wizard_1')).addClass("active");
			
            // default form wizard
            $('#form_wizard_1').bootstrapWizard({
                'nextSelector': '.button-next',
                'previousSelector': '.button-previous',
                onTabClick: function (tab, navigation, index) {
                   // alert('on tab click disabled');
					// jQuery('li', $('#form_wizard_1')).removeClass("active");
                    return false;
				  //return true;
                },
                onNext: function (tab, navigation, index) {
                    success.hide();
                    error.hide();

                    if (form.valid() == false) {
                        return false;
                    }

					activeLI	=	jQuery('li.active:first', $('#form_wizard_1')).attr("id");
                    var total	= 	navigation.find('li.countable').length;
					var current =  parseInt(activeLI.replace('comparisonLI_','',activeLI));
					current 	=  parseInt(current)+1;
					
					
                  
                    if (current == 1) {
                        $('#form_wizard_1').find('.button-previous').hide();
                    } else {
                        $('#form_wizard_1').find('.button-previous').show();
                    }

                    if (current >= total) {
                        $('#form_wizard_1').find('.button-next').hide();
                        $('#form_wizard_1').find('.button-submit').show();
                        //displayConfirm();
                    } else {
                        $('#form_wizard_1').find('.button-next').show();
                        $('#form_wizard_1').find('.button-submit').hide();
                    }
                   // App.scrollTo($('.page-title'));
                },
                onPrevious: function (tab, navigation, index) {
                    success.hide();
                    error.hide();

                    if (form.valid() == false) {
                        return false;
                    }

					$('#form_wizard_1').find('.button-next').show();
					$('#form_wizard_1').find('.button-previous').show();
					$('#form_wizard_1').find('.button-submit').hide();
					
					/*activeLI	=	jQuery('li.active:first', $('#form_wizard_1')).attr("id");
                    var total	= 	navigation.find('li.countable').length;
					var current =  parseInt(activeLI.replace('comparisonLI_','',activeLI));
					current 	=  parseInt(current)+1;
					
					
                    if (current == 1) {
                        $('#form_wizard_1').find('.button-previous').hide();
                    } else {
                        $('#form_wizard_1').find('.button-previous').show();
                    }

                    if (current >= total) {
                        $('#form_wizard_1').find('.button-next').hide();
                        $('#form_wizard_1').find('.button-submit').show();
                        //displayConfirm();
                    } else {
                        $('#form_wizard_1').find('.button-next').show();
                        $('#form_wizard_1').find('.button-submit').hide();
                    }*/
                },
                onTabShow: function (tab, navigation, index) {
					
					
                }
            });
			

			
			var total		= 	$('.comparisonNav').find('li.countable').length;
			var activeLI	=	jQuery('.comparisonNav li.active:first', $('#form_wizard_1')).attr("id");
			var current		= 	parseInt(activeLI.replace('comparisonLI_','',activeLI));
			current 		= 	parseInt(current);
			
			if(current >= total)
			{
				$('#form_wizard_1 .button-submit').click(function () {
					checkIf360TenxChoosen();
				}).show();
				
				$('#form_wizard_1').find('.button-next').hide();
				$('#form_wizard_1').find('.button-previous').show();
				$('#form_wizard_1').find('.button-submit').show();
			}
			else
			{
				$('#form_wizard_1 .button-submit').click(function () {
					checkIf360TenxChoosen();
				}).hide();
				
				$('#form_wizard_1').find('.button-next').show();
				$('#form_wizard_1').find('.button-previous').show();
				$('#form_wizard_1').find('.button-submit').hide();
			}
        }

    };

}();


$(document).ready(function(){
	$('body').on('change','.comparisonRadio', function()
	{
		_comparisonID		=	$(this).attr('comparison-id');
		_comparisonAnswer	=	$(this).val();
		_renterID			=	$('#renterID').val();
		_name				=	$(this).attr('name');
		_listItem			=	_name.replace('comparison_','',_name);
		
		postData	=	{action:'comparisonRadio', comparisonID: _comparisonID, comparisonAnswer: _comparisonAnswer, renterID: _renterID};
		
		$.ajax({
					type: "post",
					url: "introductoryProcessAjax.php",
					data: postData,
					beforeSend: function() {
						$('#form_wizard_1').find('.button-previous').attr('disabled','true');
						$('#form_wizard_1').find('.button-next').attr('disabled','true');
						$('#jqueryComparisonMessages').html('<img src="./assets/img/processing.gif" width="20px" height="20px" /> Please wait...');
					},
					success: function(responseData, textStatus, jqXHR) 
					{
						console.log(responseData);
						
						jsonData	=	$.parseJSON(responseData);
						
						$('#comparisonLI_'+_listItem).find('.number').css('background-color', '#35aa47');
						$('#comparisonLI_'+_listItem).find('.number').css('color', '#fff');
						
						$('#comparisonLI_'+_listItem).removeClass('incomplete').addClass('complete');
						$('#tab'+_listItem).removeClass('incomplete').addClass('complete');
						
						console.log('#comparisonLI_'+_listItem);
						/*$('#jqueryComparisonMessages').html('');
						$('#form_wizard_1').find('.button-previous').show();
						$('#form_wizard_1').find('.button-next').show();*/
						
						comparisonPercentCalculation();
						
						return false;
					},
					error: function(jqXHR, textStatus, errorThrown)
					{
						console.log(errorThrown);
					}
				});
	});
	
	$("body").on('keyup',".phone",function() 
	{
		var val = this.value.replace(/\D/g, '');
		var newVal = '';
		
		if (val.startsWith('1'))
		{
			val =	val.substring(1, val.length)
		}
		
		if(val.length > 4)
		{
			this.value = val;
		}
		
		if((val.length > 3))
		{
			newVal += '(' + val.substr(0, 3) + ') ';
			val = val.substr(3);
		}
		
		if((val.length > 3))
		{
			newVal +=  val.substr(0, 3) + '-';
			val = val.substr(3);
		}
		
		newVal += val;
		this.value = newVal.substring(0, 14);
	});
});


function comparisonPercentCalculation()
{
	_renterID			=	$('#renterID').val();
	
	postData	=	{action:'comparisonPercentCalculation', renterID: _renterID};
	
	$.ajax({
				type: "post",
				url: "introductoryProcessAjax.php",
				data: postData,
				beforeSend: function() {
					//$('#form_wizard_1').find('.button-previous').attr('disabled','true');
					//$('#form_wizard_1').find('.button-next').attr('disabled','true');
					$('#jqueryComparisonMessages').html('<img src="./assets/img/processing.gif" width="20px" height="20px" /> Calculating Percentage...');
				},
				success: function(responseData, textStatus, jqXHR) 
				{
					console.log(responseData);
					
					$('#jqueryComparisonMessages').html('');
					$('#form_wizard_1').find('.button-previous').removeAttr('disabled');
					$('#form_wizard_1').find('.button-next').removeAttr('disabled');
					
					jsonData	=	$.parseJSON(responseData);
					
					$('.comparisonPercentBar div').css('width',jsonData['percentage']+'%');
					
					if(jsonData['percentage'] > 10)
					{
						$('.comparisonPercentBar div').text('Completed: '+jsonData['percentage']+'%');
					}
					else
					{
						$('.comparisonPercentBar div').text(jsonData['percentage']+'%');
					}
					
					
					if(jsonData['percentage'] >= 100)
					{
						$('.comparisonBox').removeClass('blue');
						$('.comparisonBox').removeClass('yellow');
						$('.comparisonBox').removeClass('grey');
						$('.comparisonBox').addClass('green');
					}
					return false;
				},
				error: function(jqXHR, textStatus, errorThrown)
				{
					console.log(errorThrown);
				}
			});
}

function checkIf360TenxChoosen()
{
		
		_renterID	=	$('#renterID').val();
		
		postData	=	{action:'checkIf360TenxChoosen', renterID: _renterID};
		
		$.ajax({
				type: "post",
				url: "introductoryProcessAjax.php",
				data: postData,
				beforeSend: function() {
					$('#jqueryComparisonMessages').html('<img src="./assets/img/processing.gif" width="20px" height="20px" /> Please wait...');
				},
				success: function(responseData, textStatus, jqXHR) 
				{
					console.log(responseData);
					$('#jqueryComparisonMessages').html('');
					jsonData	=	$.parseJSON(responseData);
					
					if(jsonData['status'] == '1')
					{
						if(jsonData['data']['comparison_answerByRenter'] == '360TenX')
						{
							
							$('#rowComparisonToggler').removeClass('collapse');
							$('#rowComparisonToggler').addClass('expand');
							$('#rowComparisonBody').css('display','none');
							
							$('#rowInitials').css('display','block');
							$('#rowInitialsToggler').removeClass('expand');
							$('#rowInitialsToggler').addClass('collapse');
							$('#rowInitialsBody').css('display','block');
							
							_html	=	'<h4 class="text-success">Congratulations for choosing 360TenX over a Traditional process.</h4>';
							_html	+=	"</p>Now we'll help you become familiar with our process.</p>";
							
							$('#introductoryProcessModalBody').html(_html);
							$("#introductoryProcessModal").modal('show');
							
							$(".modalButtonForTraditional").hide();
							$(".modalButtonFor360").show();
						}
						else if(jsonData['data']['comparison_answerByRenter'] == 'traditional')
						{
							$('#rowInitialsToggler').removeClass('collapse');
							$('#rowInitialsToggler').addClass('expand');
							$('#rowInitialsBody').css('display','none');
							$('#rowInitials').css('display','none');
							
							$('#rowFAQToggler').removeClass('collapse');
							$('#rowFAQToggler').addClass('expand');
							$('#rowFAQBody').css('display','none');
							$('#rowFAQ').css('display','none');
							
							$('#rowAgencyRelationshipToggler').removeClass('collapse');
							$('#rowAgencyRelationshipToggler').addClass('expand');
							$('#rowAgencyRelationshipBody').css('display','none');
							$('#rowAgencyRelationship').css('display','none');
							
							
							_html	=	"<h4 class='text-danger'>You've chosen the Traditional process.</h4>";
							_html	+=	'</p>You may now exit the system or if you chose the Traditional process by mistake, you may change your answer to continue.</p>';
							
							$('#introductoryProcessModalBody').html(_html);
							$("#introductoryProcessModal").modal('show');
							
							$(".modalButtonForTraditional").show();
							$(".modalButtonFor360").hide();
						}
					}
					else
					{
						_html	=	'<h4 class="text-danger">'+jsonData['message']+'</h4>';
							
						$('#introductoryProcessModalBody').html(_html);
						$("#introductoryProcessModal").modal('show');
						$(".modalButtonFor360").hide();
					}
					
					return false;
				},
				error: function(jqXHR, textStatus, errorThrown)
				{
					console.log(errorThrown);
				}
			});
}
