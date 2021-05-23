var StatisticsValidation = function () {

    var daterange = function() {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation
            var form1 = $('#statisticsDateRange');
            var error1 = $('.alert-danger', form1);
            var success1 = $('.alert-success', form1);

            form1.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
                    fromDate: {
                        required: true
                    },
					toDate: {
                        required: true
                    }
                },
				messages: 
				{
					fromDate: {
						required: "Date From required."
						},
					toDate: {
						required: "Date To required."
					}
				},
				 errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.attr("name") == "fromDate") { // for uniform radio buttons, insert the after the given container
                        error.insertAfter("#fromDate_error");
						
						
                    }
					else if (element.attr("name") == "toDate") { // for uniform radio buttons, insert the after the given container
                        error.insertAfter("#toDate_error");
						
                    }
					else {
                        error.insertAfter(element); // for other inputs, just perform default behavior
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

                submitHandler: function (form) {					form.submit();
                    success1.show();
                    error1.hide();
                }
            });


    }

    return {
        //main function to initiate the module
        init: function () {
            daterange();
        }

    };
}();

$(document).ready(function() 
{ 
	$('#include_deleted_stats_checkbox').click(function(){
		$( "#include_deleted_stats" ).submit();
	});
});