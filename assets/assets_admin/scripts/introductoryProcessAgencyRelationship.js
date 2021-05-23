var rulesForAgencyFields = function() {

		$('[name^="renter_signature["]', "#introductoryProcessAgencyRelationshipForm").each(function() {
				$(this).rules('add', {
					required: true,
					messages: {
						required: "Name is required"
					}
				})
			});
			
		
	};
	
var FormWizardAgencyRelation = function () {


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

            var form = $('#introductoryProcessAgencyRelationshipForm');
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
			
			rulesForAgencyFields();
			
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

			
			jQuery('li', $('#form_wizard_4')).removeClass("active");
			jQuery('.tab-pane', $('#form_wizard_4')).removeClass("active");
			jQuery('li.incomplete:first', $('#form_wizard_4')).addClass("active");
			jQuery('div.incomplete:first', $('#form_wizard_4')).addClass("active");
			
            // default form wizard
            $('#form_wizard_4').bootstrapWizard({
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

					activeLI	=	jQuery('li.active:first', $('#form_wizard_4')).attr("id");
                    var total	= 	navigation.find('li.countable').length;
					var current =  parseInt(activeLI.replace('agencyRelationLI_','',activeLI));
					current 	=  parseInt(current)+1;
					
					
                 

                    if (current == 1) {
                        $('#form_wizard_4').find('.button-previous').hide();
                    } else {
                        $('#form_wizard_4').find('.button-previous').show();
                    }

                    if (current >= total) {
                        $('#form_wizard_4').find('.button-next').hide();
                        $('#form_wizard_4').find('.button-submit').show();
                        //displayConfirm();
                    } else {
                        $('#form_wizard_4').find('.button-next').show();
                        $('#form_wizard_4').find('.button-submit').hide();
                    }
                   // App.scrollTo($('.page-title'));
                },
                onPrevious: function (tab, navigation, index) {
                    success.hide();
                    error.hide();

                    if (form.valid() == false) {
                        return false;
                    }

					$('#form_wizard_4').find('.button-next').show();
					$('#form_wizard_4').find('.button-previous').show();
					$('#form_wizard_4').find('.button-submit').hide();
					
					/*activeLI	=	jQuery('li.active:first', $('#form_wizard_4')).attr("id");
                    var total	= 	navigation.find('li.countable').length;
					var current =  parseInt(activeLI.replace('agencyRelationLI_','',activeLI));
					current 	=  parseInt(current)+1;
					
					
                 

                    if (current == 1) {
                        $('#form_wizard_4').find('.button-previous').hide();
                    } else {
                        $('#form_wizard_4').find('.button-previous').show();
                    }

                    if (current >= total) {
                        $('#form_wizard_4').find('.button-next').hide();
                        $('#form_wizard_4').find('.button-submit').show();
                        //displayConfirm();
                    } else {
                        $('#form_wizard_4').find('.button-next').show();
                        $('#form_wizard_4').find('.button-submit').hide();
                    }*/

                   // App.scrollTo($('.page-title'));
                },
                onTabShow: function (tab, navigation, index) {
                   /* var total = navigation.find('li').length;
                    var current = index + 1;
                    var $percent = (current / total) * 100;
                    $('#form_wizard_4').find('.progress-bar').css({
                        width: $percent + '%'
                    });*/
                }
            });

           var total		= 	$('.agencyRelationNav').find('li.countable').length;
			var activeLI	=	jQuery('.agencyRelationNav li.active:first', $('#form_wizard_4')).attr("id");
			var current		= 	parseInt(activeLI.replace('agencyRelationLI_','',activeLI));
			current 		= 	parseInt(current);
			console.log(current + ' ' + total)
			if(current >= total)
			{
				$('#form_wizard_4 .button-submit').click(function () {
					checkIfAllFormSubmitted();
				}).show();
				
				$('#form_wizard_4').find('.button-next').hide();
				$('#form_wizard_4').find('.button-previous').show();
				$('#form_wizard_4').find('.button-submit').show();
			}
			else
			{
				$('#form_wizard_4').find('.button-previous').hide();
				$('#form_wizard_4 .button-submit').click(function () {
					checkIfAllFormSubmitted();
				}).hide();
				
				$('#form_wizard_4').find('.button-next').show();
				$('#form_wizard_4').find('.button-previous').show();
				$('#form_wizard_4').find('.button-submit').hide();
			} 
        }

    };

}();



$(document).ready(function(){
	
	$('body').on('change','.signatures', function()
	{
		_office					=	$('#officeAddress').val();
		_licensee				=	$('#licensee').val();
		_field					=	$(this).attr('field');
		_liID					=	$(this).attr('li-id');
		_value					=	$(this).val();
		_renterID				=	$('#renterID').val();
		_renterAdultSrNo		=	$(this).attr('renter-adult-srNo');
	
		
		postData	=	{
							action:'noAgencyRelationData', 
							renterID: _renterID, 
							field: _field, 
							value: _value, 
							office: _office, 
							licensee: _licensee, 
							renterAdultSrNo: _renterAdultSrNo
						};
		
		$.ajax({
					type: "post",
					url: "introductoryProcessAjax.php",
					data: postData,
					beforeSend: function() {
						$('#form_wizard_4').find('.button-previous').attr('disabled','true');
						$('#form_wizard_4').find('.button-next').attr('disabled','true');
						$('#jqueryMessageAgencyRelationship').html('<img src="./assets/img/processing.gif" width="20px" height="20px" /> Please wait while checking...');
					},
					success: function(responseData, textStatus, jqXHR) 
					{
						console.log(responseData);
						
						
						
						
						
						colorFlag	=	1;
						$('#agencyRelationLI_1 .signatures').each(function( index )
						{
							if($.trim($(this).val()) == '')
							{
								colorFlag	=	0;
							}
						});
						
						if(colorFlag == 1)
						{
							$('#agencyRelationLI_1').find('.number').css('background-color', '#35aa47');
							$('#agencyRelationLI_1').find('.number').css('color', '#fff');
							$('#agencyRelationLI_2').find('.number').css('background-color', '#35aa47');
							$('#agencyRelationLI_2').find('.number').css('color', '#fff');
							
							$('#agencyRelationLI_1').removeClass('incomplete').addClass('complete');
							$('#agencyRelationLI_2').removeClass('incomplete').addClass('complete');
							$('#tabAgencyRelationship').removeClass('incomplete').addClass('complete');
							$('#DateCopyFurnished').removeClass('incomplete').addClass('complete');
						}

						
						/*$('#jqueryMessageAgencyRelationship').html('');
						$('#form_wizard_4').find('.button-previous').show();
						$('#form_wizard_4').find('.button-next').show();*/
						agencyRelationshipPercentCalculation();
					},
					error: function(jqXHR, textStatus, errorThrown)
					{
						console.log(errorThrown);
					}
				});
	});
	
	
	/*$('body').on('change','.furnishedDate', function()
	{
		_office					=	$('#officeAddress').val();
		_licensee				=	$('#licensee').val();
		_field					=	$(this).attr('field');
		_month					=	$('#furnishedDateMM').val();
		_date					=	$('#furnishedDateDD').val();
		_year					=	$('#furnishedDateYY').val();
		_value					=	_year+'-'+_month+'-'+_date;
		_renterID				=	$('#renterID').val();
		
	
		
		postData	=	{
							action:'noAgencyRelationData', 
							renterID: _renterID, 
							field: _field, 
							value: _value, 
							office: _office, 
							licensee: _licensee, 
						};
		
		$.ajax({
					type: "post",
					url: "introductoryProcessAjax.php",
					data: postData,
					beforeSend: function() {
					
					},
					success: function(responseData, textStatus, jqXHR) 
					{
						console.log(responseData);

					},
					error: function(jqXHR, textStatus, errorThrown)
					{
						console.log(errorThrown);
					}
				});
	});*/
	
	$('body').on('click','#finalConfirmationSubmit', function()
	{
		_renterID				=	$('#renterID').val();
		
	
		
		postData	=	{
							action:'finalConfirmationSubmit', 
							renterID: _renterID
						};
		
		$.ajax({
					type: "post",
					url: "introductoryProcessAjax.php",
					data: postData,
					beforeSend: function() {
						$('#finalConfirmationMessage').html('<img src="./assets/img/processing.gif" width="20px" height="20px" /> Please wait...');
					},
					success: function(responseData, textStatus, jqXHR) 
					{
						console.log(responseData);
						$('#finalConfirmationMessage').html('');
						
						jsonData	=	$.parseJSON(responseData);
					
						if(jsonData['status'] == '1')
						{
							_html	=	'<h4 class="text-success">'+jsonData['message']+'</h4>';
							_html	+=	'<p class="text-success">Please wait for page refresh.</h4>';
								
							$('#finalConfirmationMessage').html(_html);
							
							
							setTimeout(function() {
								$('#finalConfirmationModal').modal('hide');
								  window.location.href	=	'customer.php#PDF';
							}, 3000);
						}
						else
						{
							_html	=	'<h4 class="text-danger">'+jsonData['message']+'</h4>';
								
							$('#finalConfirmationMessage').html(_html);
						}
					},
					error: function(jqXHR, textStatus, errorThrown)
					{
						console.log(errorThrown);
					}
				});
	});
});

function agencyRelationshipPercentCalculation()
{
	_renterID			=	$('#renterID').val();
	
	postData	=	{action:'agencyRelationshipPercentCalculation', renterID: _renterID};
	
	$.ajax({
				type: "post",
				url: "introductoryProcessAjax.php",
				data: postData,
				beforeSend: function() {
					//$('#form_wizard_4').find('.button-previous').hide();
					//$('#form_wizard_4').find('.button-next').hide();
					$('#jqueryMessageAgencyRelationship').html('<img src="./assets/img/processing.gif" width="20px" height="20px" /> Calculating Percentage...');
				},
				success: function(responseData, textStatus, jqXHR) 
				{
					console.log(responseData);
					
					$('#jqueryMessageAgencyRelationship').html('');
					$('#form_wizard_4').find('.button-previous').removeAttr('disabled');
					$('#form_wizard_4').find('.button-next').removeAttr('disabled');
					
					jsonData	=	$.parseJSON(responseData);
					
					$('.agencyRelationshipPercentBar div').css('width',jsonData['percentage']+'%');
					
					if(jsonData['percentage'] > 10)
					{
						$('.agencyRelationshipPercentBar div').text('Completed: '+jsonData['percentage']+'%');
					}
					else
					{
						$('.agencyRelationshipPercentBar div').text(jsonData['percentage']+'%');
					}
					
					
					if(jsonData['percentage'] >= 100)
					{
						$('.agencyRelationshipBox').removeClass('blue');
						$('.agencyRelationshipBox').addClass('green');
					}
					return false;
				},
				error: function(jqXHR, textStatus, errorThrown)
				{
					console.log(errorThrown);
				}
			});
}

function checkIfAllFormSubmitted()
{
	_renterID			=	$('#renterID').val();
	
	postData	=	{action:'checkIfAllFormSubmitted', renterID: _renterID};
	
	$.ajax({
				type: "post",
				url: "introductoryProcessAjax.php",
				data: postData,
				beforeSend: function() {
					$('#jqueryMessageAgencyRelationship').html('<img src="./assets/img/processing.gif" width="20px" height="20px" /> Please wait...');
				},
				success: function(responseData, textStatus, jqXHR) 
				{
					console.log(responseData);
					$('#jqueryMessageAgencyRelationship').html('');
					
					jsonData	=	$.parseJSON(responseData);
					
					if(jsonData['status']  == 1)
					{
						$('#finalConfirmationModalFailure').hide();
						$('#finalConfirmationModalSuccess').show();
						$('#finalConfirmationModal').modal('show');
					}
					else
					{
						$('#finalConfirmationModalFailure').show();
						$('#finalConfirmationModalSuccess').hide();
						$('#finalConfirmationModal').modal('show');
					}
					
					return false;
				},
				error: function(jqXHR, textStatus, errorThrown)
				{
					console.log(errorThrown);
				}
			});
}