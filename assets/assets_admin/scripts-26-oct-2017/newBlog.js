var NewBlog = function () {

	var handlenewBlog = function() {//alert('here');
		$('.newBlog').validate({
	            errorElement: 'span', //default input error message container
	            errorClass: 'help-block', // default input error message class
	            focusInvalid: false, // do not focus the last invalid input
	            rules: {
	                blog_title: {
	                    required: true
	                },
	                blog_short_desc: {
	                    required: true
	                },
	                blog_long_desc: {
	                    required: true
	                },
					/*upload: {
	                    required: true
	                },*/
	            },

	            messages: {
	                blog_title: {
	                    required: "Title is required."
	                },
	                blog_short_desc: {
	                    required: "Short Description is required."
	                },
	                blog_long_desc: {
	                    required: "Long Description is required."
	                },
	                /*upload: {
	                    required: "Image is required."
	                }*/
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
	                error.insertAfter(element.closest('.belowError'));
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
            handlenewBlog();
        }

    };

}();