$(document).ready(function(){
	$("#when_available_unit").change(function(event)
	{
		pastDate(event);
	});
	
	$("#addUnitFormSubmit").click(function(event)
	{
		pastDate(event);
	});
});

function pastDate(_event)
{
	var expireDateStr = $("#when_available_unit").val();
	var expireDate = expireDateStr.split("/");
	expireYear = expireDate[2], // cast Strings as Numbers
	expireMo = expireDate[0],
	expireDay = expireDate[1];



	var now = new Date(),
	nowYear = now.getFullYear(),
	nowMo = now.getMonth() + 1, // for getMonth(), January is 0
	nowDay = now.getDate();

	
	// don't expire until day after expiry date
	if (nowYear > expireYear ||
	nowYear == expireYear && nowMo > expireMo ||
	nowYear == expireYear && nowMo == expireMo && nowDay > expireDay) 
	{
		$("#when_available_unit_error").text('Past date not allowed');
		$("#when_available_unit_error").css('color','#B94A48');
		
		
		$("#when_available_unit").css('border','1px solid #B94A48');
		
		_event.preventDefault();
		return false;
	}
	else
	{
		$("#when_available_unit").css('border','1px solid #e5e5e5');
		$("#when_available_unit_error").text('');
		return true;
	}
}

var FormValidation = function () {

    var handleValidation1 = function() {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation
            var form1 = $('#addPropertyForm');
            var error1 = $('.alert-danger', form1);
            var success1 = $('.alert-success', form1);

            form1.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
                    property_type: {
                        //minlength: 2,
                        required: true
                    },
                    address: {
                       // required: true
                    },
                    zip: {
                        required: true
                    },
                    lat: {
                     //   required: true
                    },
                    long: {
                     //   required: true
                    },
					laundry_in_property: {
                        required: true
                    },
					when_available_property: {
                        required: true,
                    },
                    when_available_contact: {
                        //required: true
                    },
                    property_contact: {
                      // required: true
                    },
                    property_contact_phone: {
                      //  required: true,
						//digits: true,
					//	minlength: 10,
                    },
					comment_about_property: {
						//required: true 
					}
                },
				messages: 
				{
					property_type: {
						required: "Property type required."
						},
					address: {
						required: "Address required."
					},
					zip: {
						required: "Zip not found."
					},
					lat: {
						required: "Latitude not found."
					},
					long: {
						required: "Longitude not found."
					},
					laundry_in_property: {
						required: "Answer required."
					},
					when_available_property: {
                        required: 'When available property required',
                    },
					when_available_contact: {
						required: "When available required."
					},
					property_contact: {
						required: "Property contact required."
					},
					property_contact_phone: {
						required: "Property contact phone required."
					},
					comment_about_property: {
						required: "Property comment required"
					}
				},
				 errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.attr("name") == "laundry_in_property") { // for uniform radio buttons, insert the after the given container
                        error.insertAfter("#laundry_in_property_error");
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
	
	var handleValidation2 = function() {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation
            var form1 = $('#addUnitForm');
            var error1 = $('.alert-danger', form1);
            var success1 = $('.alert-success', form1);

            form1.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
					unit_reference: {
                        //minlength: 2,
						//-----------20-june-2016------------>
                        //required: true
						//-----------20-june-2016------------>
                    },
                    unit_type: {
                        //minlength: 2,
                        required: true
                    },
                    floor: {
						//-----------20-june-2016------------>
                       // required: true
					   //-----------20-june-2016------------>
                    },
                    bedrooms: {
                        required: true
                    },
                    bathrooms: {
                        required: true
                    },
                    "utilities[]": {
                        required: true
                    },
					parking: {
                        required: true
                    },
                    laundry_in_unit: {
                        required: true
                    },
                    bathroom_storage_laundry: {
                       //required: true
                    },
                    pets: {
                        required: true,
                    },
					pet_notes: {
						required: "#pet_dog:checked" 
					},
					if_dog: {
						required: true 
					},
					rent: {
						required: true 
					},
					security_deposit: {
						required: true 
					},
					sd_mif_amount: {
						required: true 
					},
					flex_credit: {
						required: true 
					},
					box_code: {
						//-----------20-june-2016------------>
						//required: true 
						//-----------20-june-2016------------>
					},
					when_available_unit:
					{
						required: true 
					},
					comment_about_unit: {
						//required: true 
					},
					notes: {
						//required: true 
					},
                },
				messages: 
				{
					unit_reference: {
                        //minlength: 2,
                        required: 'Unit # required',
                    },
					 unit_type: {
                        //minlength: 2,
                        required: 'Unit type required',
                    },
                    floor: {
                        required: 'Floor required'
                    },
                    bedrooms: {
                        required: 'Bedrooms required'
                    },
                    bathrooms: {
                        required: 'Bathrooms required'
                    },
                     "utilities[]": {
                        required: 'Utilities required'
                    },
					parking: {
                        required: 'Parking required'
                    },
                    laundry_in_unit: {
                        required: 'Laundry in unit required'
                    },
                    bathroom_storage_laundry: {
                       required: 'Bathroom Storage Laundry required'
                    },
                    pets: {
                        required: 'Pets required',
                    },
					pet_notes: {
						required: 'Pet Notes required',
					},
					if_dog: {
						required:  'If dog required', 
					},
					rent: {
						required:  'Price required', 
					},
					security_deposit: {
						required:  'Answer required', 
					},
					sd_mif_amount: {
						required:  'SD and/or MIF Amount required', 
					},
					flex_credit: {
						required: 'Answer required',  
					},
					box_code: {
						required: 'Box Code required',  
					},
					when_available_unit:{
						required: 'When vacant required',  
					},
					comment_about_unit: {
						required: 'Comment About Unit required',  
					},
					notes: {
						required: 'Notes required',   
					},
				},
				 errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.attr("name") == "floor") { 
                        error.insertAfter("#floor_error");
                    }
					else if (element.attr("name") == "bedrooms") { 
                        error.insertAfter("#bedrooms_error");
                    }
					else if (element.attr("name") == "bathrooms") { 
                        error.insertAfter("#bathrooms_error");
                    }
					else if (element.attr("name") == "utilities[]") { 
                        error.insertAfter("#utilities_error");
                    }
					else if (element.attr("name") == "laundry_in_unit") { 
                        error.insertAfter("#laundry_in_unit_error");
                    }
					else if (element.attr("name") == "pets") { 
                        error.insertAfter("#pets_error");
                    }
					else if (element.attr("name") == "security_deposit") { 
                        error.insertAfter("#security_deposit_error");
                    }
					else if (element.attr("name") == "flex_credit") { 
                        error.insertAfter("#flex_credit_error");
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
	
	 var handleValidationForSeachForm = function() {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation
            var searchform = $('#searchform');
            var error1 = $('.alert-danger', searchform);
            var success1 = $('.alert-success', searchform);

            searchform.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
					searchBy: {
                         required: function(element) {
							keywordValue	=	$.trim($("#landlordSearchKeyword").val());
							idValue			=	$.trim($("#landlordSearchId").val());
							if(keywordValue != '')
							{
								return true;
							}
							else if(keywordValue == '' && idValue == '')
							{
								return true;
							}
							else
							{
								return false;
							}
						  },
						 //require_from_group: [1, '.searchDataField']
                    },
                    searchId: {
                     	//require_from_group: [1, '.searchDataField']
                    },
                    searchKeyword: {
						required: ".searchByField:checked",
                      	//require_from_group: [1, '.searchByField']
                    }
					
                },
				messages: 
				{
					searchId: {
						//require_from_group: "Please fill at least 1 field."
						},
					searchKeyword: {
						require_from_group: "Please select 1 radio."
					},
					searchBy: {
						required: "How you want to search ?",
						require_from_group: "Please fill search keyword."
					}
				},
				 errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.attr("name") == "searchBy") { // for uniform radio buttons, insert the after the given container
                        error.insertAfter("#searchBy_error").css('color','red');
                    } else {
                        error.insertAfter(element).css('color','red'); // for other inputs, just perform default behavior
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

    var handleValidation3 = function() {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

            var form2 = $('#form_sample_2');
            var error2 = $('.alert-error', form2);
            var success2 = $('.alert-success', form2);

            //IMPORTANT: update CKEDITOR textarea with actual content before submit
            form2.on('submit', function() {
                for(var instanceName in CKEDITOR.instances) {
                    CKEDITOR.instances[instanceName].updateElement();
                }
            })

            form2.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
                    name: {
                        minlength: 2,
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    category: {
                        required: true
                    },
                    options1: {
                        required: true
                    },
                    options2: {
                        required: true
                    },
                    occupation: {
                        minlength: 5,
                    },
                    membership: {
                        required: true
                    },
                    service: {
                        required: true,
                        minlength: 2
                    },
                    editor1: {
                        required: true
                    },
                    editor2: {
                        required: true
                    }
                },

                messages: { // custom messages for radio buttons and checkboxes
                    membership: {
                        required: "Please select a Membership type"
                    },
                    service: {
                        required: "Please select  at least 2 types of Service",
                        minlength: jQuery.format("Please select  at least {0} types of Service")
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
                }

            });

            $('#form_2_select2').select2({
                placeholder: "Select an Option",
                allowClear: true
            });

            //apply validation on wysiwyg editors change, this only needed for chosen dropdown integration.
            $('.wysihtml5, .ckeditor', form2).change(function () {
                alert(1);
                form2.validate().element($(this)); //revalidate the wysiwyg editors and show error or success message for the input
            });

             //apply validation on select2 dropdown value change, this only needed for chosen dropdown integration.
            $('.select2', form2).change(function () {
                form2.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
            });
    }

    var handleWysihtml5 = function() {
        if (!jQuery().wysihtml5) {
            
            return;
        }

        if ($('.wysihtml5').size() > 0) {
            $('.wysihtml5').wysihtml5({
                "stylesheets": ["assets/plugins/bootstrap-wysihtml5/wysiwyg-color.css"]
            });
        }
    }

    return {
        //main function to initiate the module
        init: function () {

            handleWysihtml5();
            handleValidation1();
            handleValidation2();
			handleValidationForSeachForm();
        }

    };

}();