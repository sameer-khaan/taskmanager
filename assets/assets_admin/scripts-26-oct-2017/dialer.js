var dialerForm = function () 
{
	var handleDialerForm = function() 
	{
            var kEf = $('#dialerForm');
            var error2 = $('.alert-error', kEf);
            var success2 = $('.alert-success', kEf);

            //IMPORTANT: update CKEDITOR textarea with actual content before submit
            kEf.on('submit', function() {
                for(var instanceName in CKEDITOR.instances) {
                    CKEDITOR.instances[instanceName].updateElement();
                }
            })

            kEf.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
					country: {
                        required: true,
                    },
					callToNumber: {
                        required: true,
						//digits: true,
						minlength: 10,
						//maxlength: 13,
                    },
                    callFromNumber: {
                        required: true
                    }
                },

                messages: { // custom messages for radio buttons and checkboxes
                    country: {
                        required: "Please select a country"
                    },
					callToNumber: {
                         required: "Please enter number",
                    },
                    callFromNumber: {
                        required: "Please enter caller Id",
                    }
                },

                errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.attr("name") == "membership") { // for uniform radio buttons, insert the after the given container
                        error.insertAfter("#form_2_membership_error");
                    } else if (element.attr("name") == "editor1" || element.attr("name") == "editor2") { // for wysiwyg editors
                        error.insertAfter($(element.attr('data-error-container'))); 
                    } else if (element.attr("name") == "service") { // for uniform checkboxes, insert the after the given container
                        error.insertAfter("#form_2_service_error");
                    } else {
                        error.insertAfter(element); // for other inputs, just perform default behavior
                    }
                },

                invalidHandler: function (event, validator) { //display error alert on form submit   
                    success2.hide();
                    error2.show();
                    App.scrollTo(error2, -200);
                },

                highlight: function (element) { // hightlight error inputs
                   $(element)
                        .closest('.form-group').addClass('has-error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                },

                success: function (label) {
                    if (label.attr("for") == "service" || label.attr("for") == "membership") { // for checkboxes and radio buttons, no need to show OK icon
                        label
                            .closest('.form-group').removeClass('has-error');
                        label.remove(); // remove error label here
                    } else { // display success icon for other inputs
                        label
                            .addClass('valid').addClass('help-block') // mark the current input as valid and display OK icon
                            .closest('.form-group').removeClass('has-error'); // set success class to the control group
                    }
                },

                submitHandler: function (form) {
                    success2.show();
                    error2.hide();
					 if ($(form).valid()) 
						   form.submit(); 
					   return false; // prevent normal form posting
                }

            });

            $('#country').select2({
                placeholder: "Select an Country",
                allowClear: true
            });
			
			 $('#fromTwilioNumber').select2({
                placeholder: "Select an Number",
                allowClear: true
            });
		
             //apply validation on select2 dropdown value change, this only needed for chosen dropdown integration.
            $('.select2', kEf).change(function () {
                kEf.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
            });
    }
 return {
        //main function to initiate the module
        init: function () {

            handleDialerForm();
        }

    };

}();

jQuery(document).ready(function() 
{	
	$("body").on("click","#makeACallButton",function()
	{
		$("#toCustNumber").focus();
		populateDialer();
	});
	
	$("body").on("change","#fromTwilioNumber",function()
	{
		twilioNumber	=	$(this).val();
		
		if(twilioNumber != '')
		{
			populateDialer();
		}
	});
	
	/*$( "li.outgoinListLi" ).hover(function()
									{
										$(this).css('background','lightblue');
										$(this).css('cursor','pointer');
									},
								function()
								{
									$(this).css('background','white');
									$(this).css('cursor','');
								}
	);*/
	
	$("body").on("click",".outgoinListLi",function()
	{
		callRecordId		=	$(this).attr('call-record-id');
		
		$(".outgoinListLi").css('background','');
		$(this).css('background','palegreen');
		
		populateOutgoingDetailTable(callRecordId);
	});	
	
	$("body").on("keyup","#toCustNumber",function(e)
	{
		toNumber	=	$.trim($(this).val());
		
		if(toNumber.length < 14)
		{
			$("#toCustNumber").val(toNumber.replace(/^(\d{3})(\d{3})(\d)+$/, "($1) $2-$3"));
		}
		else
		{
			$("#toCustNumber").val(toNumber.substring(0, 14));
			 e.preventDefault();
		}
	});	
});

function addNumber(digit)
{
	toNumber	=	$.trim($("#toCustNumber").val());
	
	if(toNumber.length < 14)
	{
		$("#toCustNumber").val(toNumber+digit);
		$("#toCustNumber").val($("#toCustNumber").val().replace(/^(\d{3})(\d{3})(\d)+$/, "($1) $2-$3"));
	}
	else
	{
		$("#toCustNumber").val(toNumber.substring(0, 14));
	}
	 
	//
	//alert(digit);
}

function eraseNumber()
{
	toNumber	=	$.trim($("#toCustNumber").val());
	
	$("#toCustNumber").val(toNumber.slice(0,-1));
	
}

function populateDialer()
{
	HTML	=	'<div class="row">\
					<div class="col-md-3">\
						<label class="control-label"></label>\
					</div>\
					<div class="col-md-6">\
						<div class="row">\
							<div class="col-md-12 text-center">\
								<button type="button" class="btn btn-default dialer-button" onclick="addNumber(1)">\
									1\
									<p style="font-size: 12px; color: skyblue;">\
									&nbsp\
									</p>\
								</button>\
								<button type="button" class="btn btn-default dialer-button"  onclick="addNumber(2)">\
									2\
									<p style="font-size: 12px; color: skyblue;">\
									ABC\
									</p>\
								</button> \
								<button type="button" class="btn btn-default dialer-button" onclick="addNumber(3)">\
									3\
									<p style="font-size: 12px; color: skyblue;">\
									DEF\
									</p>\
								</button> \
							</div>\
						</div>\
						<div class="row">\
							<div class="col-md-12 text-center">\
								<button type="button" class="btn btn-default dialer-button" onclick="addNumber(4)">\
									4\
									<p style="font-size: 12px; color: skyblue;">\
									GHI\
									</p>\
								</button> \
								<button type="button" class="btn btn-default dialer-button" onclick="addNumber(5)">\
									5\
									<p style="font-size: 12px; color: skyblue;">\
									JKL\
									</p>\
								</button> \
								\
								<button type="button" class="btn btn-default dialer-button" onclick="addNumber(6)">\
									6\
									<p style="font-size: 12px; color: skyblue;">\
									MNO\
									</p>\
								</button>\
							</div>\
						</div>\
						<div class="row">\
							<div class="col-md-12 text-center">\
								<button type="button" class="btn btn-default dialer-button" onclick="addNumber(7)">\
									7\
									<p style="font-size: 12px; color: skyblue;">\
									PQRS\
									</p>\
								</button>\
								<button type="button" class="btn btn-default dialer-button" onclick="addNumber(8)">\
									8\
									<p style="font-size: 12px; color: skyblue;">\
									TUV\
									</p>\
								</button>\
								<button type="button" class="btn btn-default dialer-button" onclick="addNumber(9)">\
									9\
									<p style="font-size: 12px; color: skyblue;">\
									WXYZ\
									</p>\
									</button>\
							</div>\
						</div>\
						<div class="row">\
							<div class="col-md-12 text-center">\
								<button type="button" class="btn btn-default dialer-button">\
									<p style="margin-top:7px">\
									*\
									</p>\
								</button>\
								<button type="button" class="btn btn-default dialer-button" onclick="addNumber(0)">\
									0\
									<p style="font-size: 12px; color: skyblue;">\
									+\
									</p>\
								</button>\
								<button type="button" class="btn btn-default dialer-button">\
									<p style="margin-top:0px">\
									#\
									</p>\
								</button>\
							</div>\
						</div>\
						<br/>\
						<div class="row" style=" padding: 0px 0 0px 35px;">\
							<div class="col-md-12 text-center">\
									<button type="button" class="btn green btn-lg " style=" border-radius: 100px !important; margin-right: 0; width: 40%;" id="button-call">\
										<i class="icon-phone"></i> Call\
									</button>\
									<button type="button" class="btn btn-danger btn-blocks" style="display:none;border-radius: 100px !important;" id="button-hangup">\
										<i class="icon-remove"></i> Hangup\
									</button>\
									<button type="button" onclick="eraseNumber()">\
									<img src="'+base_url+'/assets/assets-admin/img/backspace.png" width=20px>\
									</button>\
								</div>\
							</div>\
						</div>\
					</div>\
					</div>';
		
		$(".outgoinListLi").css('background','');
		$("#toCustNumber").val('');
		$("#toCustNumber").focus();
		$('#showOutgoingCallTable').html('');
		
		$('#showOutgoingCallTable').html(HTML);
}
function populateOutgoingDetailTable(callRecordId)
{

	$.ajax
	({
		type: "post",
		url: base_url+"dialer/ajaxGetCallDetail",
		data: 
		{
			callId: callRecordId
		},
		beforeSend: function() {
			$("#fromTwilioNumber").val('').change();
			$("#toCustNumber").val('');
			$('#showOutgoingCallTable').html('');
			$('#showOutgoingCallTable').html("<center><img src='"+base_url+"/assets/assets-admin/img/loader-black-red.gif'> Please wait...</center>");
		},
		error: function(response) {
		  console.log('Error - dialer.js populateOutgoingDetailTable ajax')
		},
		success: function(response) 
		{
			
			response	=	$.parseJSON(response);
			
			if(response.length)
			{
				response	=	response[0];
				
				callFromNumber	=	response['call_from'];
				callToNumber	=	response['call_to'];
				callStatus		=	response['call_status'];
				callDuration	=	response['call_duration'];
				callDirection	=	response['call_direction'];
				callDirection	=	callDirection.toLowerCase();
				callDate		=	response['call_date'];
				callDate		=	callDate.split(' ')[0];
				
				tableHTML		=	'';
				
				
				
				if(callDirection == 'inbound')
				{
				 tableHTML	+=	'	<div class="row">\
										<div class="col-md-12">\
											<center>\
												<img class="avatar img-responsive" alt="" src="'+base_url+'assets/assets-admin/img/user.png" width="50px" height="50px">\
												'+callFromNumber+'\
											</center>\
										</div>\
									</div>';
				}
				else if(callDirection == 'outbound-dial' || callDirection == 'outbound')
				{
					 tableHTML	+=	'	<div class="row">\
										<div class="col-md-12">\
											<center>\
												<img class="avatar img-responsive" alt="" src="'+base_url+'assets/assets-admin/img/user.png" width="50px" height="50px">\
												'+callToNumber+'\
											</center>\
										</div>\
									</div>';
				}
				
				
				 tableHTML	+=	'</br></br>\
									\
									<div class="row">\
										<div class="col-md-12">\
											<div class="table-responsive" style="padding:10px">\
												<table class="table table-striped table-bordered table-hover outgoingCallTable_0">\
												   <thead>\
													  <tr>\
														 <th>Call To</th>\
														 <th>Call From</th>\
														 <th>Call Duration</th>\
														 <th>Call Direction</th>\
														 <th>Call Date</th>\
														 <th>Call Status</th>\
														 <th>Action</th>\
													  </tr>\
												   </thead>\
												   <tbody>\
													  <tr>\
														 <td>'+callToNumber+'</td>\
														 <td>'+callFromNumber+'</td>\
														 <td>'+callDuration+'</td>\
														 <td>'+callDirection+'</td>\
														 <td>'+callDate+'</td>\
														 <td>'+callStatus+'</td>\
														 <td>\
															<button type="button" class="btn green" style="" id="button-call">\
																<i class="icon-phone"></i> Call\
															</button>\
															<button type="button" class="btn red" style="display:none" id="button-hangup">\
																<i class="icon-remove"></i> Hangup\
															</button>\
														</td>\
													  </tr>\
												   </tbody>\
												</table>\
											 </div>\
										</div>\
									</div>';
					
					
					if(callDirection == 'inbound')
					{
						$("#fromTwilioNumber").val(callToNumber).change();
						$("#toCustNumber").val(callFromNumber);
					}
					else if(callDirection == 'outbound-dial' || callDirection == 'outbound')
					{
						$("#fromTwilioNumber").val(callFromNumber).change();
						$("#toCustNumber").val(callToNumber);
					}
					
					
					$("#toCustNumber").focus();
					
					
					
					$('#showOutgoingCallTable').html(tableHTML);
			}
			else
			{
				$('#autoreply_message').val('');
			}
		}
	});
}