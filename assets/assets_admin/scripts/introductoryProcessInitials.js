var rulesForInitialFields = function() {
		
		$('[name^="renter_name["]', "#introductoryProcessInitialsForm").each(function() {
				$(this).rules('add', {
					required: true,
					messages: {
						required: "Name is required"
					}
				})
			});
			
		$('[name^="renter_number["]', "#introductoryProcessInitialsForm").each(function() {
				
				
				$(this).rules('add', {
					required: true,
					messages: {
						required: "Phone is required"
					}
				})
			});
			
		$('[name^="renter_email["]', "#introductoryProcessInitialsForm").each(function() {
				
				
				$(this).rules('add', {
					required: true,
					email: true,
					messages: {
						required: "Email is required"
					}
				})
			});
			
		/*$('[name^="initialSatement["]', "#introductoryProcessInitialsForm").each(function() {
				
				
				$(this).rules('add', {
					required: true,
					maxlength: 4,
					messages: {
						required: "Initial required"
					}
				})
			});	*/
	};

var FormWizardInitials = function () {


    return {
        //main function to initiate the module
        init: function () {
            if (!jQuery().bootstrapWizard) {
                return;
            }

            function format(state) {
                if (!state.id) return state.text; // optgroup
                return "<img class='flag' src='assets/img/flags/" + state.id.toLowerCase() + ".png'/>&nbsp;&nbsp;" + state.text;
            }

            $("#country_list").select2({
                placeholder: "Select",
                allowClear: true,
                formatResult: format,
                formatSelection: format,
                escapeMarkup: function (m) {
                    return m;
                }
            });

            var form = $('#introductoryProcessInitialsForm');
            var error = $('.alert-danger', form);
            var success = $('.alert-success', form);

            form.validate({
                doNotHideMessage: true, //this option enables to show the error/success messages on tab switch.
                errorElement: 'span', //default input error message container
                errorClass: 'help-block', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                rules: {
                   
                },

                messages: { // custom messages for radio buttons and checkboxes
                    'payment[]': {
                        required: "Please select at least one option",
                        minlength: jQuery.format("Please select at least one option")
                    }
                },

                errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.attr("name") == "gender") { // for uniform radio buttons, insert the after the given container
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
			
			rulesForInitialFields();
			
            var displayConfirm = function() {
                $('#tab4 .form-control-static', form).each(function(){
                    var input = $('[name="'+$(this).attr("data-display")+'"]', form);
                    if (input.is(":text") || input.is("textarea")) {
                        $(this).html(input.val());
                    } else if (input.is("select")) {
                        $(this).html(input.find('option:selected').text());
                    } else if (input.is(":radio") && input.is(":checked")) {
                        $(this).html(input.attr("data-title"));
                    } else if ($(this).attr("data-display") == 'payment') {
                        var payment = [];
                        $('[name="payment[]"]').each(function(){
                            payment.push($(this).attr('data-title'));
                        });
                        $(this).html(payment.join("<br>"));
                    }
                });
            }

			jQuery('li', $('#form_wizard_2')).removeClass("active");
			jQuery('.tab-pane', $('#form_wizard_2')).removeClass("active");
			jQuery('li.incomplete:first', $('#form_wizard_2')).addClass("active");
			jQuery('div.incomplete:first', $('#form_wizard_2')).addClass("active");
			
            // default form wizard
            $('#form_wizard_2').bootstrapWizard({
                'nextSelector': '.button-next',
                'previousSelector': '.button-previous',
                onTabClick: function (tab, navigation, index) {
                   // alert('on tab click disabled');
                    return false;
                },
                onNext: function (tab, navigation, index) {
                    success.hide();
                    error.hide();

                    if (form.valid() == false) {
                        return false;
                    }

					activeLI	=	jQuery('li.active:first', $('#form_wizard_2')).attr("id");
                    var total	= 	navigation.find('li.countable').length;
					var current =  activeLI.replace('initialsLI_','',activeLI);
					
                 
					if(isNaN(current))
					{
						$('#form_wizard_2').find('.button-next').show();
					}
					else
					{
						current 	=  parseInt(current)+1;
						
						 if (current == 1){
							$('#form_wizard_2').find('.button-previous').hide();
						} else {
							$('#form_wizard_2').find('.button-previous').show();
						}

						if (current >= total) {
							$('#form_wizard_2').find('.button-next').hide();
							$('#form_wizard_2').find('.button-submit').show();
							//displayConfirm();
						} else {
							$('#form_wizard_2').find('.button-next').show();
							$('#form_wizard_2').find('.button-submit').hide();
						}
					   // App.scrollTo($('.page-title'));
					}
                },
                onPrevious: function (tab, navigation, index) {
                    success.hide();
                    error.hide();

                    if (form.valid() == false) {
                        return false;
                    }

					$('#form_wizard_2').find('.button-next').show();
					$('#form_wizard_2').find('.button-previous').show();
					$('#form_wizard_2').find('.button-submit').hide();
					
					/*activeLI	=	jQuery('li.active:first', $('#form_wizard_2')).attr("id");
                    var total	= 	navigation.find('li.countable').length;
					var current =  activeLI.replace('initialsLI_','',activeLI);
					
                 
					if(isNaN(current))
					{
						$('#form_wizard_2').find('.button-next').show();
					}
					else
					{
						current 	=  parseInt(current)+1;
						
						 if (current == 1){
							$('#form_wizard_2').find('.button-previous').hide();
						} else {
							$('#form_wizard_2').find('.button-previous').show();
						}

						if (current >= total) {
							$('#form_wizard_2').find('.button-next').hide();
							$('#form_wizard_2').find('.button-submit').show();
							//displayConfirm();
						} else {
							$('#form_wizard_2').find('.button-next').show();
							$('#form_wizard_2').find('.button-submit').hide();
						}
					   // App.scrollTo($('.page-title'));
					}*/
                },
                onTabShow: function (tab, navigation, index) {
                 
                }
            });

			var total		= 	$('.initialsNav').find('li.countable').length;
			var activeLI	=	jQuery('.initialsNav li.active:first', $('#form_wizard_2')).attr("id");
			var current		= 	parseInt(activeLI.replace('initialsLI_','',activeLI));
			current 		= 	parseInt(current);
			console.log(current+'-'+total)
			if(current >= total)
			{
				 $('#form_wizard_2 .button-submit').click(function () {
					$('#jqueryInitialsMessages').html('<img src="./assets/img/processing.gif" width="20px" height="20px" /> Please wait...');
					
					setTimeout(function() {
									$('#rowInitialsToggler').removeClass('collapse');
									$('#rowInitialsToggler').addClass('expand');
									$('#rowInitialsBody').css('display','none');
									
									$('#rowFAQ').css('display','block');
									$('#rowFAQToggler').removeClass('expand');
									$('#rowFAQToggler').addClass('collapse');
									$('#rowFAQBody').css('display','block');
									
									$('#jqueryInitialsMessages').html('');
								}, 1000);

				}).show();
				
				$('#form_wizard_2').find('.button-next').hide();
				$('#form_wizard_2').find('.button-previous').show();
				$('#form_wizard_2').find('.button-submit').show();
			}
			else
			{
				 $('#form_wizard_2 .button-submit').click(function () {
					$('#jqueryInitialsMessages').html('<img src="./assets/img/processing.gif" width="20px" height="20px" /> Please wait...');
					
					setTimeout(function() {
									$('#rowInitialsToggler').removeClass('collapse');
									$('#rowInitialsToggler').addClass('expand');
									$('#rowInitialsBody').css('display','none');
									
									$('#rowFAQ').css('display','block');
									$('#rowFAQToggler').removeClass('expand');
									$('#rowFAQToggler').addClass('collapse');
									$('#rowFAQBody').css('display','block');
									
									$('#jqueryInitialsMessages').html('');
								}, 1000);

				}).hide();
				
				$('#form_wizard_2').find('.button-next').show();
				$('#form_wizard_2').find('.button-previous').show();
				$('#form_wizard_2').find('.button-submit').hide();
			}
        }

    };

}();


$(document).ready(function(){
	$('body').on('change','.initials_renter_data', function()
	{
		_field				=	$(this).attr('field');
		_value				=	$(this).val();
		_renterID			=	$('#renterID').val();
		_renterAdultSrNo	=	$(this).attr('renter-adult-srNo');
	
		
		postData	=	{action:'initials_renter_data', renterID: _renterID, value: _value, field:_field, renterAdultSrNo: _renterAdultSrNo};
		
		$.ajax({
					type: "post",
					url: "introductoryProcessAjax.php",
					data: postData,
					beforeSend: function() {
						$('#form_wizard_2').find('.button-previous').attr('disabled','true');
						$('#form_wizard_2').find('.button-next').attr('disabled','true');
						$('#jqueryInitialsMessages').html('<img src="./assets/img/processing.gif" width="20px" height="20px" /> Please wait...');
					},
					success: function(responseData, textStatus, jqXHR) 
					{
						console.log(responseData);
						$('#jqueryInitialsMessages').html('');
						//$('#form_wizard_2').find('.button-previous').show();
						//$('#form_wizard_2').find('.button-next').show();
						

						//$('#initialsLI_RenterDetail').find('.number').css('background-color', '#35aa47');
						//$('#initialsLI_RenterDetail').find('.number').css('color', '#fff');
						
						//$('#initialsLI_RenterDetail').removeClass('incomplete').addClass('complete');
						//$('#tabInitRenterDetail').removeClass('incomplete').addClass('complete');
						//console.log('#initialsLI_RenterDetail');
						
						//$('[name^="'+_field+'["]').val(_value);
						
						colorFlag	=	1;
						$('#tabInitRenterDetail .initials_renter_data').each(function( index )
						{
							if($.trim($(this).val()) == '')
							{
								colorFlag	=	0;
							}
						});
						
						if(colorFlag == 1)
						{
							$('#initialsLI_RenterDetail').find('.number').css('background-color', '#35aa47');
							$('#initialsLI_RenterDetail').find('.number').css('color', '#fff');
							
							$('#initialsLI_RenterDetail').removeClass('incomplete').addClass('complete');
							$('#tabInitRenterDetail').removeClass('incomplete').addClass('complete');
							
							
							$('#initialsLI_Content').find('.number').css('background-color', '#35aa47');
							$('#initialsLI_Content').find('.number').css('color', '#fff');
							
							$('#initialsLI_Content').removeClass('incomplete').addClass('complete');
							$('#initialsLI_Content').removeClass('incomplete').addClass('complete');
						}

						
						initialsPercentCalculation();
						
						return false;
					},
					error: function(jqXHR, textStatus, errorThrown)
					{
						console.log(errorThrown);
					}
				});
	});
	
	$('.initialStatementData').keydown(function (e)
	{
		if (e.shiftKey || e.ctrlKey || e.altKey) 
		{
			e.preventDefault();
		}
		else
		{
			var key = e.keyCode;
			if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) 
			{
				e.preventDefault();
			}
		}
	});
	  
	$('body').on('change','.initialStatementData', function()
	{
		_field				=	$(this).attr('field');
		_statementID		=	$(this).attr('statement-id');
		_value				=	$(this).val();
		_tabId				=	$(this).attr('tab-id');
		_liId				=	$(this).attr('li-id');
		_renterID			=	$('#renterID').val();
	
		
		postData	=	{action:'initialStatementData', renterID: _renterID, value: _value, field:_field, statementID: _statementID};
		
		$.ajax({
					type: "post",
					url: "introductoryProcessAjax.php",
					data: postData,
					beforeSend: function() {
						$('#form_wizard_2').find('.button-previous').attr('disabled','true');
						$('#form_wizard_2').find('.button-next').attr('disabled','true');
						$('#jqueryInitialsMessages').html('<img src="./assets/img/processing.gif" width="20px" height="20px" /> Please wait...');
					},
					success: function(responseData, textStatus, jqXHR) 
					{
						console.log(responseData);
						
						colorFlag	=	1;
						$('#'+_tabId+' .initialStatementData').each(function( index )
						{
							if($.trim($(this).val()) == '')
							{
								colorFlag	=	0;
							}
						});
						
						if(colorFlag == 1)
						{
							$('#'+_liId).find('.number').css('background-color', '#35aa47');
							$('#'+_liId).find('.number').css('color', '#fff');
							
							$('#'+_liId).removeClass('incomplete').addClass('complete');
							$('#'+_tabId).removeClass('incomplete').addClass('complete');
						}

						/*$('#jqueryInitialsMessages').html('');
						$('#form_wizard_2').find('.button-previous').show();
						$('#form_wizard_2').find('.button-next').show();*/
						
						initialsPercentCalculation();
						return false;
					},
					error: function(jqXHR, textStatus, errorThrown)
					{
						console.log(errorThrown);
					}
				});
	});
});

function initialsPercentCalculation()
{
	_renterID			=	$('#renterID').val();
	
	postData	=	{action:'initialsPercentCalculation', renterID: _renterID};
	
	$.ajax({
				type: "post",
				url: "introductoryProcessAjax.php",
				data: postData,
				beforeSend: function() {
					//$('#form_wizard_2').find('.button-previous').hide();
					//$('#form_wizard_2').find('.button-next').hide();
					$('#jqueryInitialsMessages').html('<img src="./assets/img/processing.gif" width="20px" height="20px" /> Calculating Percentage...');
				},
				success: function(responseData, textStatus, jqXHR) 
				{
					console.log(responseData);
					
					$('#jqueryInitialsMessages').html('');
					$('#form_wizard_2').find('.button-previous').removeAttr('disabled');
					$('#form_wizard_2').find('.button-next').removeAttr('disabled');
					
					jsonData	=	$.parseJSON(responseData);
					
					$('.initialsPercentBar div').css('width',jsonData['percentage']+'%');
					
					if(jsonData['percentage'] > 10)
					{
						$('.initialsPercentBar div').text('Completed: '+jsonData['percentage']+'%');
					}
					else
					{
						$('.initialsPercentBar div').text(jsonData['percentage']+'%');
					}
					
					if(jsonData['percentage'] >= 100)
					{
						$('.initialsBox').removeClass('blue');
						$('.initialsBox').removeClass('yellow');
						$('.initialsBox').removeClass('grey');
						$('.initialsBox').addClass('green');
					}
					return false;
				},
				error: function(jqXHR, textStatus, errorThrown)
				{
					console.log(errorThrown);
				}
			});
}
