var FormEditable = function () {

    $.mockjaxSettings.responseTime = 500;
	
	var log = function (settings, response) 
	{
		pdf_user_id		=	$("#pdf_user_id").val();
		verificationId	=	$("#verificationId").val();
		
		//-----------to input address------------------------------//
		if(settings.data.name	==	'employer_address' || settings.data.name	==	'landlord_street_address')
		{
			settings.data.value	=	settings.data.value.address+'||,'+settings.data.value.city+'||,'+settings.data.value.state+'||,'+settings.data.value.zip;
		}
		//-----------to input address------------------------------//

		postData	=	settings.data.name+"="+settings.data.value+"&pdf_user_id="+pdf_user_id+"&verificationId="+verificationId;
		
		$.ajax({
					url: "post_employer.php",
					data: postData,
					type: 'post',
					error: function() 
					{
						alert('error');
					},
					success: function(response) 
					{
						console.log(response);
					}
				});
    }
	

    var initAjaxMock = function () {
        //ajax mocks

        $.mockjax({
            url: '/post',
            response: function (settings) {
                log(settings, this);
            }
        });

        $.mockjax({
            url: '/error',
            status: 400,
            statusText: 'Bad Request',
            response: function (settings) {
                this.responseText = 'Please input correct value';
                log(settings, this);
            }
        });

        $.mockjax({
            url: '/status',
            status: 500,
            response: function (settings) {
                this.responseText = 'Internal Server Error';
                log(settings, this);
            }
        });

        $.mockjax({
            url: '/groups',
            response: function (settings) {
                this.responseText = [{
                        value: 0,
                        text: 'Guest'
                    }, {
                        value: 1,
                        text: 'Service'
                    }, {
                        value: 2,
                        text: 'Customer'
                    }, {
                        value: 3,
                        text: 'Operator'
                    }, {
                        value: 4,
                        text: 'Support'
                    }, {
                        value: 5,
                        text: 'Admin'
                    }
                ];
                log(settings, this);
            }
        });

    }

    var initEditables = function () {

        //set editable mode based on URL parameter
        if (App.getURLParameter('mode') == 'inline') {
            $.fn.editable.defaults.mode = 'inline';
            $('#inline').attr("checked", true);
            jQuery.uniform.update('#inline');
        } else {
            $('#inline').attr("checked", false);
            jQuery.uniform.update('#inline');
        }

        //global settings 
        $.fn.editable.defaults.inputclass = 'form-control';
        $.fn.editable.defaults.url = '/post';
		var dteNow = new Date();
		//----------------Employer-page---------//
		$('#employer_date').editable({
            inputclass: 'form-control',
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
        });
		
		$('#employer_company_name').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'employer_company_name',
            title: 'Enter employer company name',
            validate: function (value) {
				if ($.trim(value) == '') return 'Employer Company Name is required';
            },
        });
		
		 $('#employer_address').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'employer_address',
            title: 'Enter employer address',
			value: 
			{
                address: $('#hidden_employer_address_address').val(),
                city: $('#hidden_employer_address_city').val(),
				state: $('#hidden_employer_address_state').val(),
                zip: $('#hidden_employer_address_zip').val(),
				
            },
            validate: function (value) {
				if (value.address == '') return 'address is required!';
				if (value.city == '') return 'city is required!';
				if (value.state == '') return 'state is required!';
                if (value.zip == '') return 'zip is required!';
            },
            display: function (value) {
                if (!value) {
                    $(this).empty();
                    return;
                }
                
				if(value.address && value.city && value.state && value.zip)
				{
					var html = '<b>' + $('<div>').text(value.address).html() + ',  ' + $('<div>').text(value.city).html() + ',  ' + $('<div>').text(value.state).html()+ ',  ' + $('<div>').text(value.zip).html();
					$(this).html(html);
				}
            }
        });
		
		$('#employer_phone').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'employer_phone',
            title: 'Enter employer phone',
            validate: function (value) {
				if ($.trim(value) == '') return 'Employer Phone is required';
            },
        });
		
		$('#employer_fax').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'employer_fax',
            title: 'Enter employer fax',
            validate: function (value) {
				if ($.trim(value) == '') return 'Employer Fax is required';
            },
        });
		
		$('#employer_emp_name').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'employer_emp_name',
            title: 'Enter employer emp name',
            validate: function (value) {
				if ($.trim(value) == '') return 'Some name is required';
            },
        });
		
		$('#employer_emp_date').editable({
            inputclass: 'form-control',
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
            validate: function (value) {
				if ($.trim(value) == '') return 'Date is required';
            },
        });
		
		$('#employer_emp_job_title').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'employer_emp_job_title',
            title: 'Enter employer emp job title',
            validate: function (value) {
				if ($.trim(value) == '') return 'Job title is required';
            },
        });
		
		$('#employer_emp_earning').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'employer_emp_earning',
            title: 'Enter employer emp earning',
            validate: function (value) {
				if ($.trim(value) == '') return 'Some value is required';
            },
        });
		
		$('#employer_sign').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'employer_sign',
            title: 'Enter sign',
            validate: function (value) {
				if ($.trim(value) == '') return 'Signature  is required';
            },
        });
		
		$('#employer_printed_name').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'employer_printed_name',
            title: 'Enter printed name',
            validate: function (value) {
				if ($.trim(value) == '') return 'Printed name  is required';
            },
        });
		
		$('#employer_title').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'employer_title',
            title: 'Enter title',
            validate: function (value) {
				if ($.trim(value) == '') return 'Title is required';
            },
        });
		//----------------Employer-page---------//
    }

    return {
        //main function to initiate the module
        init: function () {

            // inii ajax simulation
            initAjaxMock();

            // init editable elements
            initEditables();
            
            // init editable toggler
            $('#enable').click(function () {
                $('#user .editable').editable('toggleDisabled');
            });

            // init 
            $('#inline').on('change', function (e) {
                if ($(this).is(':checked')) {
                    window.location.href = 'form_editable.html?mode=inline';
                } else {
                    window.location.href = 'form_editable.html';
                }
            });

            // handle editable elements on hidden event fired
            $('#user .editable').on('hidden', function (e, reason) {
                if (reason === 'save' || reason === 'nochange') {
                    var $next = $(this).closest('tr').next().find('.editable');
                    if ($('#autoopen').is(':checked')) {
                        setTimeout(function () {
                            $next.editable('show');
                        }, 300);
                    } else {
                        $next.focus();
                    }
                }
            });


        }

    };

}();