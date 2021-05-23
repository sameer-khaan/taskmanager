var FormEditable = function () {

    $.mockjaxSettings.responseTime = 500;
	
	var log = function (settings, response) 
	{
		pdf_user_id	=	$("#pdf_user_id").val();
		verificationId	=	$("#verificationId").val();
		
		//-----------to input address------------------------------//
		if(settings.data.name	==	'employer_address' || settings.data.name	==	'landlord_street_address')
		{
			settings.data.value	=	settings.data.value.address+'||,'+settings.data.value.city+'||,'+settings.data.value.state+'||,'+settings.data.value.zip;
		}
		//-----------to input address------------------------------//
		
		postData	=	settings.data.name+"="+settings.data.value+"&pdf_user_id="+pdf_user_id+"&verificationId="+verificationId;
		
		$('.landlord_condition1').each(function() {
			 if($(this).parent().attr('class') == 'checked')
			 {
				 __attrName		=	$(this).attr('name');
				 __attrValue	=	$(this).val();
				 postData	+=	"&"+__attrName+"="+__attrValue;
			 }
				
		});
		
		$('.landlord_condition2').each(function() {
			 if($(this).parent().attr('class') == 'checked')
			 {
				 __attrName		=	$(this).attr('name');
				 __attrValue	=	$(this).val();
				 postData	+=	"&"+__attrName+"="+__attrValue;
			 }
				
		});
		
		
		$.ajax({
					url: "post_landlord.php",
					data: postData,
					type: 'post',
					error: function() 
					{
						alert('error');
					},
					success: function(response) 
					{
						//alert(response+'hh');
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
		
		//----------------Landlord-page---------//
		
		$('#landlord_date').editable({
            inputclass: 'form-control',
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
        });
		
		$('#landlord_renter_name').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'landlord_renter_name',
            title: 'Enter Name',
            validate: function (value) {
				if ($.trim(value) == '') return 'Renter/Tenant name is required';
            },
        });
		
		$('#landlord_monthly_rent_cost').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'landlord_monthly_rent_cost',
            title: 'Enter rent',
            validate: function (value) {
				if ($.trim(value) == '') return 'Monthly Rent Cost is required';
            },
        });
		
		$('#landlord_move_in_date').editable({
            inputclass: 'form-control',
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
            validate: function (value) {
				if ($.trim(value) == '') return 'Move-in Date is required';
            },
        });
		
		$('#landlord_move_out_date').editable({
            inputclass: 'form-control',
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
            validate: function (value) {
				if ($.trim(value) == '') return 'Move-out Date is required';
            },
        });
		
		$('#number_of_badrooms').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'number_of_badrooms',
            title: 'Enter Bedrooms'
        });
		
		$('#utilities').editable({
            url: '/post',
            type: 'textarea',
            pk: 1,
            name: 'utilities',
            title: 'Enter Utilities'
        });
		
		$('#landlord_street_address').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'landlord_street_address',
            title: 'Enter address',
			value: 
			{
                address: $('#hidden_landlord_street_address_address').val(),
                city: $('#hidden_landlord_street_address_city').val(),
				state: $('#hidden_landlord_street_address_state').val(),
                zip: $('#hidden_landlord_street_address_zip').val(),
				
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
		
		$('#landlord_city_state_zip').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'landlord_city_state_zip',
            title: 'Enter address'
        });
		
		 $('#landlord_condition1').editable({
            pk: 1,
            limit: 3,
            source: [{
                    value: 1,
                    text: 'Pays on time'
                }, {
                    value: 2,
                    text: 'Needs a reminder to pay'
                }, {
                    value: 3,
                    text: 'Being evicted for non-payment'
                }
            ]
        });

        $('#landlord_condition1').on('shown', function(e, reason) {
            App.initUniform();
        });
		
		$('#landlord_condition2').editable({
            pk: 1,
            limit: 3,
            source: [{
                    value: 1,
                    text: "Tenant's unit shows  normal wear or cost of repair will not exceed the security deposit"
                }, {
                    value: 2,
                    text: ' I would rent to the applicant again.'
                }, {
                    value: 3,
                    text: 'I would not rent to the applicant again. because of the following reason(s):'
					
                }
            ]
        });

        $('#landlord_condition2').on('shown', function(e, reason) {
            App.initUniform();
        });
		
		
		$('#landlord_condition2_reason').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'landlord_condition2_reason',
            title: 'Enter Reason',
            validate: function (value) {								
				if($.trim(value).length > 400) 
				{
					return 'Reason can be upto 400 Characters.';
				}
            },
        });
		
		$('#landlord_name').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'landlord_name',
            title: 'Enter Name'
        });
		
		$('#landlord_sign').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'landlord_sign',
            title: 'Enter Name'
        });
		
		$('#landlord_title').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'landlord_title',
            title: 'Enter Title'
        });
		
		$('#landlord_phone').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'landlord_phone',
            title: 'Enter Title'
        });
		//----------------Landlord-page---------//
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