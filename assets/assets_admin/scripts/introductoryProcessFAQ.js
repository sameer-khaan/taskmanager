var rulesForFAQFields = function() {

		$('[name^="renter_name["]', "#introductoryProcessFAQForm").each(function() {
				$(this).rules('add', {
					required: true,
					messages: {
						required: "Name is required"
					}
				})
			});
			
		/*$('[name^="ansForQues_"]', "#introductoryProcessFAQForm").each(function() {
				$(this).rules('add', {
					required: true,
					messages: {
						required: "Please choose one answer"
					}
				})
			});*/
	};

	
var FormWizardFAQ = function () {


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

            var form = $('#introductoryProcessFAQForm');
            var error = $('.alert-danger', form);
            var success = $('.alert-success', form);

            form.validate({
                doNotHideMessage: true, //this option enables to show the error/success messages on tab switch.
                errorElement: 'div', //default input error message container
                errorClass: 'text-center customError text-danger col-md-12', // default input error message class
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
                    if((element.attr("name").indexOf('ansForQues_') != -1))
					{
						$(".customError").remove();
						afterId	=	'#radioError_'+element.attr("question-id");
						error.insertAfter(afterId);
					}
					else if (element.attr("name") == "gender") { // for uniform radio buttons, insert the after the given container
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

			rulesForFAQFields();
			
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
			
			
			jQuery('li', $('#form_wizard_3')).removeClass("active");
			jQuery('.tab-pane', $('#form_wizard_3')).removeClass("active");
			jQuery('li.incomplete:first', $('#form_wizard_3')).addClass("active");
			jQuery('div.incomplete:first', $('#form_wizard_3')).addClass("active");

            // default form wizard
            $('#form_wizard_3').bootstrapWizard({
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

					activeLI	=	jQuery('li.active:first', $('#form_wizard_3')).attr("id");
                    var total	= 	navigation.find('li.countable').length;
					var current =  activeLI.replace('faqLI_','',activeLI);
					
                 
					if(isNaN(current))
					{
						$('#form_wizard_3').find('.button-next').show();
					}
					else
					{
						current 	=  parseInt(current)+1;
						
						 if (current == 1){
							$('#form_wizard_3').find('.button-previous').hide();
						} else {
							$('#form_wizard_3').find('.button-previous').show();
						}

						if (current >= total) {
							$('#form_wizard_3').find('.button-next').hide();
							$('#form_wizard_3').find('.button-submit').show();
							//displayConfirm();
						} else {
							$('#form_wizard_3').find('.button-next').show();
							$('#form_wizard_3').find('.button-submit').hide();
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

					$('#form_wizard_3').find('.button-next').show();
					$('#form_wizard_3').find('.button-previous').show();
					$('#form_wizard_3').find('.button-submit').hide();
					/*activeLI	=	jQuery('li.active:first', $('#form_wizard_3')).attr("id");
                    var total	= 	navigation.find('li.countable').length;
					var current =  activeLI.replace('faqLI_','',activeLI);
					
                 
					if(isNaN(current))
					{
						$('#form_wizard_3').find('.button-next').show();
					}
					else
					{
						current 	=  parseInt(current)+1;
						
						 if (current == 1){
							$('#form_wizard_3').find('.button-previous').hide();
						} else {
							$('#form_wizard_3').find('.button-previous').show();
						}

						if (current >= total) {
							$('#form_wizard_3').find('.button-next').hide();
							$('#form_wizard_3').find('.button-submit').show();
							//displayConfirm();
						} else {
							$('#form_wizard_3').find('.button-next').show();
							$('#form_wizard_3').find('.button-submit').hide();
						}
					   // App.scrollTo($('.page-title'));
					}*/
                },
                onTabShow: function (tab, navigation, index) {
                    /*var total = navigation.find('li').length;
                    var current = index + 1;
                    var $percent = (current / total) * 100;
                    $('#form_wizard_3').find('.progress-bar').css({
                        width: $percent + '%'
                    });*/
                }
            });

			var total		= 	$('.faqNav').find('li.countable').length;
			var activeLI	=	jQuery('.faqNav li.active:first', $('#form_wizard_3')).attr("id");
			var current		= 	parseInt(activeLI.replace('faqLI_','',activeLI));
			current 		= 	parseInt(current);
			console.log(current+'='+total)
			if(current >= total)
			{
				 $('#form_wizard_3 .button-submit').click(function () {
				  $('#jqueryMessageFAQ').html('<img src="./assets/img/processing.gif" width="20px" height="20px" /> Please wait...');
					
					setTimeout(function() {
										$('#rowFAQToggler').removeClass('collapse');
										$('#rowFAQToggler').addClass('expand');
										$('#rowFAQBody').css('display','none');
										
										$('#rowAgencyRelationship').css('display','block');
										$('#rowAgencyRelationshipToggler').removeClass('expand');
										$('#rowAgencyRelationshipToggler').addClass('collapse');
										$('#rowAgencyRelationshipBody').css('display','block');
									
										$('#jqueryMessageFAQ').html('');
								}, 500);
				}).show();
				
				$('#form_wizard_3').find('.button-next').hide();
				$('#form_wizard_3').find('.button-previous').show();
				$('#form_wizard_3').find('.button-submit').show();
			}
			else
			{
				 $('#form_wizard_3 .button-submit').click(function () {
				  $('#jqueryMessageFAQ').html('<img src="./assets/img/processing.gif" width="20px" height="20px" /> Please wait...');
					
					setTimeout(function() {
											$('#rowFAQToggler').removeClass('collapse');
											$('#rowFAQToggler').addClass('expand');
											$('#rowFAQBody').css('display','none');
											
											$('#rowAgencyRelationship').css('display','block');
											$('#rowAgencyRelationshipToggler').removeClass('expand');
											$('#rowAgencyRelationshipToggler').addClass('collapse');
											$('#rowAgencyRelationshipBody').css('display','block');
										
											$('#jqueryMessageFAQ').html('');
									}, 500);
					}).hide();
					
					$('#form_wizard_3').find('.button-next').show();
					$('#form_wizard_3').find('.button-previous').show();
					$('#form_wizard_3').find('.button-submit').hide();
			}
			
           
           
        }

    };

}();

$(document).ready(function()
{
	$('body').on('change','.faqAnswerRadio', function()
	{
		_questoinID				=	$(this).attr('question-id');
		_answerID				=	$(this).attr('answer-id');
		_isCorrect				=	$(this).attr('is-corr');
		_renterID				=	$('#renterID').val();
		
		
		$('#ansRes_'+_answerID).html('');
		$('.ansRes').html('');
		//$('#form_wizard_3').find('.button-previous').hide();
		//$('#form_wizard_3').find('.button-next').hide();
		$('#jqueryMessageFAQ').html('<img src="./assets/img/processing.gif" width="20px" height="20px" /> Please wait while checking...');
		
		
		setTimeout(function() 
		{
			if(_isCorrect == 1)
			{
				postData	=	{action:'FAQquestionAnswer', renterID: _renterID, questionID: _questoinID, answerID: _answerID};
			
				$.ajax({
							type: "post",
							url: "introductoryProcessAjax.php",
							data: postData,
							beforeSend: function() {
								$('#ansRes_'+_answerID).html('');
								$('.ansRes').html('');
								$('.whyBlockInCorrect').css('display','none');
								$('#form_wizard_3').find('.button-previous').attr('disabled','true');
								$('#form_wizard_3').find('.button-next').attr('disabled','true');
								$('#jqueryMessageFAQ').html('<img src="./assets/img/processing.gif" width="20px" height="20px" /> Please wait while checking...');
							},
							success: function(responseData, textStatus, jqXHR) 
							{
								console.log(responseData);
								
								
								$('#faqLI_'+_questoinID).find('.number').css('background-color', '#35aa47');
								$('#faqLI_'+_questoinID).find('.number').css('color', '#fff');
								
								$('#faqLI_'+_questoinID).removeClass('incomplete').addClass('complete');
								$('#tabQuestoin_'+_questoinID).removeClass('incomplete').addClass('complete');
								
								/*$('#jqueryMessageFAQ').html('');
								$('#form_wizard_3').find('.button-previous').show();
								$('#form_wizard_3').find('.button-next').show();*/
								
								FAQPercentCalculation();
								
								
								if(_isCorrect == 1)
								{
								
									
									//$('#form_wizard_3').find('.button-previous').show();
									//$('#form_wizard_3').find('.button-next').show();
									
									
									_html	=	'<a href="javascript:void(0)" class="text-success">\
													<i class="icon-ok-circle"></i> Correct\
												</a>';
									$('#ansRes_'+_answerID).html(_html);
									$('#correctBlock_'+_answerID).show();
									$('#inCorrectBlock_'+_answerID).hide();
									
									/*if($('li.incomplete').length > 0)
									{
										jQuery('li', $('#form_wizard_3')).removeClass("active");
										jQuery('.tab-pane', $('#form_wizard_3')).removeClass("active");
										jQuery('li.incomplete:first', $('#form_wizard_3')).addClass("active");
										jQuery('div.incomplete:first', $('#form_wizard_3')).addClass("active");
									}*/
								}
								else
								{
									//$('#form_wizard_3').find('.button-previous').hide();
									//$('#form_wizard_3').find('.button-next').hide();
									$('#jqueryMessageFAQ').html('<p class="text-danger">Please choose the right answer to go to next question.</p>');
									
									_html	=	'<a href="javascript:void(0)" class="text-danger">\
													<i class="icon-remove-sign"></i> Incorrect\
												</a>' ;
									$('#ansRes_'+_answerID).html(_html);
									$('#correctBlock_'+_answerID).hide();
									$('#inCorrectBlock_'+_answerID).show();
								}
								
								
							},
							error: function(jqXHR, textStatus, errorThrown)
							{
								console.log(errorThrown);
							}
						});
			}
			else
			{
				$('#form_wizard_3').find('.button-previous').attr('disabled','true');
				$('#form_wizard_3').find('.button-next').attr('disabled','true');
				$('#jqueryMessageFAQ').html('<p class="text-danger">Please choose the right answer to go to next question.</p>');
				//$('#inCorrectBlock_'+_answerID).css('display','block');
				_html	=	'<a href="javascript:void(0)" class="text-danger">\
								<i class="icon-remove-sign"></i> Incorrect\
							</a>' ;
				$('#ansRes_'+_answerID).html(_html);
				
				$('.whyBlock').css('display','none');
				$('#correctBlock_'+_answerID).hide();
				$('#inCorrectBlock_'+_answerID).show();
			}
		}, 500);
	});
	
	
	
});


function FAQPercentCalculation()
{
	_renterID			=	$('#renterID').val();
	
	postData	=	{action:'FAQPercentCalculation', renterID: _renterID};
	
	$.ajax({
				type: "post",
				url: "introductoryProcessAjax.php",
				data: postData,
				beforeSend: function() {
					//$('#form_wizard_3').find('.button-previous').hide();
					//$('#form_wizard_3').find('.button-next').hide();
					$('#jqueryMessageFAQ').html('<img src="./assets/img/processing.gif" width="20px" height="20px" /> Calculating Percentage...');
				},
				success: function(responseData, textStatus, jqXHR) 
				{
					console.log(responseData);
					
					$('#jqueryMessageFAQ').html('');
					$('#form_wizard_3').find('.button-previous').removeAttr('disabled');
					$('#form_wizard_3').find('.button-next').removeAttr('disabled');
					
					jsonData	=	$.parseJSON(responseData);
					
					$('.FAQPercentBar div').css('width',jsonData['percentage']+'%');
					
					if(jsonData['percentage'] > 10)
					{
						$('.FAQPercentBar div').text('Completed: '+jsonData['percentage']+'%');
					}
					else
					{
						$('.FAQPercentBar div').text(jsonData['percentage']+'%');
					}
					
					
					if(jsonData['percentage'] >= 100)
					{
						$('.FAQBox').removeClass('blue');
						$('.FAQBox').removeClass('yellow');
						$('.FAQBox').removeClass('grey');
						$('.FAQBox').addClass('green');
					}
					return false;
				},
				error: function(jqXHR, textStatus, errorThrown)
				{
					console.log(errorThrown);
				}
			});
}
