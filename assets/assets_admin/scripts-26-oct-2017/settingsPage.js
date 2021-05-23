jQuery.validator.addMethod("mobileInitial", function(value, element) {
  if(value[0] != 1)
  {
	  return true;
  }
}, "Initial 1 is not allowed");


var settingsValidation = function (e) {

    var personalInfoForm = function(e) {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation

            var form1 = $('#personalInfoForm');
            var error1 = $('.alert-danger', form1);
            var success1 = $('.alert-success', form1);

            form1.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    mobile: {
                        required: true,
                        digits: true,
						minlength: 10,
						maxlength: 10,
						mobileInitial: true
                    }
                },

                invalidHandler: function (event, validator) { //display error alert on form submit              
                    success1.hide();
                    error1.show();
                    App.scrollTo(error1, -200);
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
                    label
                        .closest('.form-group').removeClass('has-error'); // set success class to the control group
                },

                submitHandler: function (form, event) {
                    success1.show();
                    error1.hide();
					
					event.preventDefault();
					
					personalInfoFormUpdate();
					return false;
                }
            });


    } 
	
	var newPasswordForm = function(e) {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation

            var form2 = $('#newPasswordForm');
            var error1 = $('.alert-danger', form2);
            var success1 = $('.alert-success', form2);

            form2.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
                    r_password: {
                        required: true
                    }
                },

                invalidHandler: function (event, validator) { //display error alert on form submit              
                    success1.hide();
                    error1.show();
                    App.scrollTo(error1, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.form-group').addClass('has-error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                },
				
				 errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.attr("name") == "r_password") { // for uniform radio buttons, insert the after the given container
                        error.insertAfter("#inputGroupChangePassword");
                    } 
                },

                success: function (label) {
                    label
                        .closest('.form-group').removeClass('has-error'); // set success class to the control group
                },

                submitHandler: function (form, event) {
                    success1.show();
                    error1.hide();
					
					event.preventDefault();
					
					newPasswordFormUpdate();
					return false;
                }
            });


    } 
	
	
	var shareAccessForm = function(e) {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation

            var form3 = $('#shareAccessForm');
            var error1 = $('.alert-danger', form3);
            var success1 = $('.alert-success', form3);

            form3.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
                    emailAddresses: {
                        required: true,
						email: true
                    }
                },

                invalidHandler: function (event, validator) { //display error alert on form submit              
                    success1.hide();
                    error1.show();
                    App.scrollTo(error1, -200);
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
                    label
                        .closest('.form-group').removeClass('has-error'); // set success class to the control group
                },

                submitHandler: function (form, event) {
                    success1.show();
                    error1.hide();
					
					event.preventDefault();
					
					shareAccessFormUpdate();
					return false;
                }
            });


    }

    return {
        //main function to initiate the module
        init: function () {
            personalInfoForm();
			newPasswordForm();
			shareAccessForm();
        }

    };

}();

function personalInfoFormUpdate()
{
	email			=	$.trim($("#personalInfoForm input[name=email]").val());
	mobile			=	$.trim($("#personalInfoForm input[name=mobile]").val());
	renterId		=	$.trim($("#personalInfoForm input[name=renterId]").val());
	
	
	
	var postData					=	{};	
	postData['email'] 				=	email;
	postData['mobile'] 				=	mobile;
	postData['renterId'] 			=	renterId;
	
	$.ajax({
				url: "settingsPost.php?action=personalInfoChange",
				data: postData,
				type: 'post',
				beforeSend: function(){
					$("#processingImagePersonalInfo").html("<img src='./assets/assets_admin/img/processing.gif' width='30px' height='30px'> Please wait...");
				},
				error: function() 
				{
					_message 	=	'Error: Personal Info cannot be update at this time. Please try again later';
					$("#showErrorMessage").html(_message);
					
				},
				success: function(response) 
				{
					$("#processingImagePersonalInfo").html("");
					
					response		=	$.parseJSON(response);

					//----------------------------------------------------------//
					var _status 				=	response.status;
					var _message				=	response.message;
					//----------------------------------------------------------//
					
					if($("#showErrorMessage").length)
					{
						$("#showErrorMessage").html(_message);
					}
				}
			});
			
			$("html, body").animate({ scrollTop: 0 }, "slow");
			setTimeout(function(){  $('#showErrorMessage').html('');}, 10000);
			
}


function newPasswordFormUpdate()
{
	r_password		=	$.trim($("#newPasswordForm input[name=r_password]").val());
	renterId		=	$.trim($("#newPasswordForm input[name=renterId]").val());
	
	
	
	var postData					=	{};	
	postData['r_password'] 			=	r_password;
	postData['renterId'] 			=	renterId;
	
	$.ajax({
				url: "settingsPost.php?action=loginInfoChange",
				data: postData,
				type: 'post',
				beforeSend: function(){
					$("#processingImageChangePassword").html("<img src='./assets/assets_admin/img/processing.gif' width='30px' height='30px'> Please wait...");
				},
				error: function() 
				{
					_message 	=	'Error: Password cannot be changed at this time. Please try again later';
					$("#showErrorMessage").html(_message);
					
				},
				success: function(response) 
				{
					$("#newPasswordForm input[name=r_password]").val('');
					$("#processingImageChangePassword").html("");
					
					response		=	$.parseJSON(response);

					//----------------------------------------------------------//
					var _status 				=	response.status;
					var _message				=	response.message;
					//----------------------------------------------------------//
					
					if($("#showErrorMessage").length)
					{
						$("#showErrorMessage").html(_message);
					}
				}
			});
			
			$("html, body").animate({ scrollTop: 0 }, "slow");
			setTimeout(function(){  $('#showErrorMessage').html('');}, 10000);
}

function shareAccessFormUpdate()
{
	emailAddresses		=	$.trim($("#shareAccessForm input[name=emailAddresses]").val());
	renterId			=	$.trim($("#shareAccessForm input[name=renterId]").val());
	
	
	
	var postData					=	{};	
	postData['emailAddresses']		=	emailAddresses;
	postData['renterId'] 			=	renterId;
	
	$.ajax({
				url: "settingsPost.php?action=shareAccess",
				data: postData,
				type: 'post',
				beforeSend: function(){
					$("#processingImageShareAccess").html("<img src='./assets/assets_admin/img/processing.gif' width='30px' height='30px'> Please wait...");
				},
				error: function() 
				{
					_message 	=	'Error: Email cannot be shared at this time. Please try again later';
					$("#showErrorMessage").html(_message);
					
				},
				success: function(response) 
				{
					$("#shareAccessForm input[name=emailAddresses]").val('');
					$("#processingImageShareAccess").html("");
					
					response		=	$.parseJSON(response);

					//----------------------------------------------------------//
					var _status 				=	response.status;
					var _message				=	response.message;
					var _row					=	'';
					
					if(_status == 1)
					{
						_row				=	response.row;
						$("#myCoapplicantsTable tbody").append(_row);
					}
					//----------------------------------------------------------//
					
					if($("#showErrorMessage").length)
					{
						$("#showErrorMessage").html(_message);
					}
					
					$("html, body").animate({ scrollTop: 0 }, "slow");
					setTimeout(function(){  $('#showErrorMessage').html('');}, 10000);
			
					
				}
			});
			
			$("html, body").animate({ scrollTop: 0 }, "slow");
			setTimeout(function(){  $('#showErrorMessage').html('');}, 10000);
			
			
}

function deleteSharedAccount(sharedCoapplicantId)
{
	var postData					=	{};	
	postData['sharedCoapplicantId'] =	sharedCoapplicantId;
	
	if(confirm("You want to delete account ?"))
	{
		$.ajax({
					url: "settingsPost.php?action=deleteSharedAccount",
					data: postData,
					type: 'post',
					error: function() 
					{
						alert('Error: Account cannot be delete at this time. Please try again later');
					},
					success: function(response) 
					{
						response		=	$.parseJSON(response);
					
						//if(response.length > 0)
						//{
								
							//----------------------------------------------------------//
							var _status 				=	response.status;
							var _message				=	response.message;
							//----------------------------------------------------------//
							//alert(_status);
							if(_status == 1)
							{
								$("#tr_"+sharedCoapplicantId).remove();
							}
							
							
							if($("#showErrorMessage").length)
							{
								$("#showErrorMessage").html(_message);
								$("html, body").animate({ scrollTop: 0 }, "slow");
								setTimeout(function(){  $('#showErrorMessage').html('');}, 10000);
							}
							
						//}
					}
				});
	}
}

function editSharedAccount(sharedCoapplicantId)
{
	var postData					=	{};	
	postData['sharedCoapplicantId'] =	sharedCoapplicantId;
	
	$.ajax({
				url: "settingsPost.php?action=editSharedAccount",
				data: postData,
				type: 'post',
				error: function() 
				{
					alert('Error: Account cannot be edit at this time. Please try again later');
				},
				success: function(response) 
				{
					
					response		=	$.parseJSON(response);
				
					//if(response.length > 0)
					//{
							
						//----------------------------------------------------------//
						var _status 				=	response.status;
						var _message				=	response.message;
						//----------------------------------------------------------//
						
						if(_status == 0)
						{
							if($("#showErrorMessage").length)
							{
								$("#showErrorMessage").html(_message);
								$("html, body").animate({ scrollTop: 0 }, "slow");
								setTimeout(function(){  $('#showErrorMessage').html('');}, 10000);
							}
						}
						
						if(_status == 1)
						{
							$modal = $('#coapplicantModal');
							$modal.modal('show');
							
							$('#coapplicantModalBody').html(_message);
						}

					//}
				}
			});
}

function updateSharedAccountStatus(sharedCoapplicantId, statusFlag)
{
	var postData					=	{};	
	postData['sharedCoapplicantId'] =	sharedCoapplicantId;
	postData['statusFlag'] 			=	statusFlag;
	
	$.ajax({
				url: "settingsPost.php?action=updateSharedAccountStatus",
				data: postData,
				type: 'post',
				error: function() 
				{
					alert('Error: Account cannot be updated at this time. Please try again later');
				},
				success: function(response) 
				{
					
					response		=	$.parseJSON(response);
				
					//----------------------------------------------------------//
					var _status 				=	response.status;
					var _message				=	response.message;
					//----------------------------------------------------------//
					
					if($("#showErrorMessage").length)
					{
						$("#showErrorMessage").html(_message);
						$("html, body").animate({ scrollTop: 0 }, "slow");
						setTimeout(function(){  $('#showErrorMessage').html('');}, 10000);
						
						location.reload();
					}
				}
			});
}