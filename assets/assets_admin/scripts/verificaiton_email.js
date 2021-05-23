var VerificaitonEmail = function () {
	$.validator.addMethod
		(
			"formatDate",
			function (value, element) {
			// put your own logic here, this is just a (crappy) example 
			//return value.match(/^\d{4}-((0\d)|(1[012]))-(([012]\d)|3[01])$/);
			return value.match(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/);
			
			},
			"Please enter a date in the format MM/DD/YYYY"
		);
		
	var handleLogin = function() {
		$('.login-form').validate({
	            errorElement: 'span', //default input error message container
	            errorClass: 'help-block', // default input error message class
	            focusInvalid: false, // do not focus the last invalid input
	            rules: {
	                landlord_verification_email: {
	                    required: true,
						email: true
	                },
	                employer_verification_email: {
	                    required: true,
						email: true
	                }
	            },

	            messages: {
	                landlord_verification_email: {
	                    required: "Email address is required."
	                },
	                employer_verification_email: {
	                    required: "Email address is required."
	                }
	            },

	            invalidHandler: function (event, validator) { //display error alert on form submit   
	                $('.alert-error', $('.login-form')).show();
	            },

	            highlight: function (element) { // hightlight error inputs
	                $(element)
	                    .closest('.form-group').addClass('has-error'); // set error class to the control group
	            },

	            success: function (label) {
	                label.closest('.form-group').removeClass('has-error');
	                label.remove();
	            },

	            errorPlacement: function (error, element) {
	                error.insertAfter(element.closest('.input-icons'));
	            },

	            submitHandler: function (form) {
	                form.submit();
	            }
	        });

	        $('.login-form input').keypress(function (e) {
	            if (e.which == 13) {
	                if ($('.login-form').validate().form()) {
	                    $('.login-form').submit();
	                }
	                return false;
	            }
	        });
	}
    
    return {
        //main function to initiate the module
        init: function () {
            handleLogin();
        }

    };

}();