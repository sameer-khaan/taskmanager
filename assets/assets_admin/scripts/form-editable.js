var FormEditable = function () {

    $.mockjaxSettings.responseTime = 500;
	
	var log = function (settings, response) 
	{
		pdf_user_id	=	$("#pdf_user_id").val();
		
		//-----------to input address------------------------------//
		if(settings.data.name	==	'add1' || settings.data.name	==	'add2' || settings.data.name	==	'add3' || settings.data.name	==	'add4' || settings.data.name	==	'add5' || settings.data.name	==	'add6' ||	settings.data.name	==	'add7' || settings.data.name	==	'add8' || settings.data.name	==	'employer_address' || settings.data.name	==	'landlord_street_address')
		{
			settings.data.value	=	settings.data.value.address+'||,'+settings.data.value.city+'||,'+settings.data.value.state+'||,'+settings.data.value.zip;
		}
		//-----------to input address------------------------------//
		
		
		//-----------to make field required------------------------------//
		if((settings.data.name	==	'company1' || settings.data.name	==	'from4' || settings.data.name	==	'to4' || settings.data.name	==	'add4' || settings.data.name	==	'phone4' || settings.data.name	==	'position2' || settings.data.name	==	'netincome2') && $.trim(settings.data.value) != '')
		{
			flagCo1	=	0; 
			
			$(".current_previous_employer").each(function() 
			{
				if($( this ).parent().hasClass('checked'))
				{
					flagCo1 = 1;
				}
			});
			
			if(!flagCo1)
			{
				$(".current_previous_employerRadios").next('.requiredError').remove();
				$(".current_previous_employerRadios").after( "  <span class='requiredError' style='color:red'>This field is required</span>" );
			}
			
			$("#company1").addClass('requiredField');
			$("#from4").addClass('requiredField');
			$("#to4").addClass('requiredField');
			$("#add4").addClass('requiredField');
			$("#phone4").addClass('requiredField');
			$("#position2").addClass('requiredField');
			$("#netincome2").addClass('requiredField');
		}
		//-----------to make field required------------------------------//
		
		
		
		//-----------to make field required------------------------------//
		if((settings.data.name	==	'company2' || settings.data.name	==	'from8' || settings.data.name	==	'to8' || settings.data.name	==	'add8' || settings.data.name	==	'phone8' || settings.data.name	==	'position4' || settings.data.name	==	'netincome4') && $.trim(settings.data.value) != '')
		{
			flagCo1	=	0; 
			
			$(".current_previous_employer").each(function() 
			{
				if($( this ).parent().hasClass('checked'))
				{
					flagCo1 = 1;
				}
			});
			
			if(!flagCo1)
			{
				$(".current_previous_employerRadios").next('.requiredError').remove();
				$(".current_previous_employerRadios").after( "  <span class='requiredError' style='color:red'>This field is required</span>" );
			}
			
			$("#company2").addClass('requiredField');
			$("#from8").addClass('requiredField');
			$("#to8").addClass('requiredField');
			$("#add8").addClass('requiredField');
			$("#phone8").addClass('requiredField');
			$("#position4").addClass('requiredField');
			$("#netincome4").addClass('requiredField');
		}
		//-----------to make field required------------------------------//
		
		//-----------to make to date required rohail(20-dec)------------------------------//
		if(settings.data.name	==	'from1' && $.trim(settings.data.value) != '')
		{
			$("#to1").addClass('requiredField');
		}
		else
		{
			$("#to1").removeClass('requiredField');
		}
        if(settings.data.name	==	'from2' && $.trim(settings.data.value) != '')
		{
			$("#to2").addClass('requiredField');
		}
		else
		{
			$("#to2").removeClass('requiredField');
		}
        if(settings.data.name	==	'from5' && $.trim(settings.data.value) != '')
		{
			$("#to5").addClass('requiredField');
		}
		else
		{
			$("#to5").removeClass('requiredField');
		}
        if(settings.data.name	==	'from6' && $.trim(settings.data.value) != '')
		{
			$("#to6").addClass('requiredField');
		}
		else
		{
			$("#to6").removeClass('requiredField');
		}
		//-----------to make to date required rohail(20-dec)------------------------------//
		
		//-----------to make field required------------------------------//
		if(settings.data.name	==	'employer1' && $.trim(settings.data.value) != '')
		{
			$("#from3").addClass('requiredField');
			$("#to3").addClass('requiredField');
			$("#add3").addClass('requiredField');
			$("#phone3").addClass('requiredField');
			$("#position1").addClass('requiredField');
			$("#netincome1").addClass('requiredField');
		}
		else
		{
			/*$("#from3").removeClass('requiredField');
			$("#to3").removeClass('requiredField');
			$("#add3").removeClass('requiredField');
			$("#phone3").removeClass('requiredField');
			$("#position1").removeClass('requiredField');
			$("#netincome1").removeClass('requiredField');*/
		}
		//-----------to make field required------------------------------//
		
		//-----------to make field required------------------------------//
		if(settings.data.name	==	'employer2' && $.trim(settings.data.value) != '')
		{
			$("#from7").addClass('requiredField');
			$("#to7").addClass('requiredField');
			$("#add7").addClass('requiredField');
			$("#phone7").addClass('requiredField');
			$("#position3").addClass('requiredField');
			$("#netincome3").addClass('requiredField');
		}
		else
		{
			/*$("#from7").removeClass('requiredField');
			$("#to7").removeClass('requiredField');
			$("#add7").removeClass('requiredField');
			$("#phone7").removeClass('requiredField');
			$("#position3").removeClass('requiredField');
			$("#netincome3").removeClass('requiredField');*/
		}
		//-----------to make field required------------------------------//
		
		//-----------to make field required------------------------------//
		if((settings.data.name	==	'username2' || settings.data.name	==	'dob2' || settings.data.name	==	'ssn2' || settings.data.name	==	'add5') && $.trim(settings.data.value) != '')
		{
			flagCo	=	0; 
			
			$(".co_applicant_signer").each(function() 
			{
				if($( this ).parent().hasClass('checked'))
				{
					flagCo = 1;
				}
			});
			
			if(!flagCo)
			{
				$(".co_applicant_signerRadios").next('.requiredError').remove();
				$(".co_applicant_signerRadios").after( "  <span class='requiredError' style='color:red'>This field is required</span>" );
			}
			
			$("#username2").addClass('requiredField');
			$("#dob2").addClass('requiredField');
			$("#ssn2").addClass('requiredField');
			$("#add5").addClass('requiredField');
			$("#coApplicantSign1").addClass('requiredField');
			$("#coApplicantSign2").addClass('requiredField');
			$("#coApplicantSign3").addClass('requiredField');
			$("#coApplicantSign4").addClass('requiredField');
			$("#coApplicantSign5").addClass('requiredField');
			$("#coApplicantSign6").addClass('requiredField');
			$("#coApplicantSign7").addClass('requiredField');

		}
		//-----------to make field required------------------------------//
		
		
		//-----------to show/hide if dog field------------------------------//
		if((settings.data.name	==	'r_dog' && (settings.data.value == '1' || settings.data.value =='2' || settings.data.value =='3' || settings.data.value =='4 or more')) || (settings.data.name	==	'r_if_dog'))
		{
			$('#if_dog_tr').removeAttr('style');
		}
		if(settings.data.name	==	'r_dog' && settings.data.value == '')
		{
			$('#if_dog_tr').css('display','none');
		}
		//-----------to show/hide if dog field------------------------------//
		
		//-----------landlord verification page------------------------------//
		/*if(settings.data.name	==	'landlord_condition2' && settings.data.value.indexOf("3") >= 0)
		{
			$("#landlord_condition2_reason_div").css('display','block');
		}*/
		//-----------landlord verification page------------------------------//
		
		//------------------mohit-20-may-2017-fixing-querystring to object--------------------//
		//postData	=	settings.data.name+"="+settings.data.value+"&pdf_user_id="+pdf_user_id;

		var postData = {};	
		fieldName	=	settings.data.name;
		
		postData[fieldName] = settings.data.value;
		postData['pdf_user_id'] = pdf_user_id;
		//------------------mohit-20-may-2017-fixing-querystring to object--------------------//
		
		
		//-----------populate applicant/coapplicant------------------------------//
		if(settings.data.name	==	'username')
		{
			//postData	=	settings.data.name+"="+settings.data.value+"&applicantSign1="+settings.data.value+"&applicantSign2="+settings.data.value+"&applicantSign3="+settings.data.value+"&applicantSign4="+settings.data.value+"&applicantSign5="+settings.data.value+"&applicantSign6="+settings.data.value+"&username3="+settings.data.value+"&applicantSign7="+settings.data.value+"&pdf_user_id="+pdf_user_id;
			/*r_bedrooms	=	$('#r_bedrooms').text();
			r_people	=	$('#r_people').text();
			r_rent		=	$('#r_rent').text();
			r_chicago	=	$('#r_chicago').text();
			r_suburbs	=	$('#r_suburbs').text();
			r_bedrooms	=	$('#r_cat').text();
			r_dog		=	$('#r_dog').text();
			r_if_dog	=	$('#r_if_dog').text();
			r_text1		=	$('#r_text1').text();
			*/
			
			//------------------mohit-20-may-2017-fixing-querystring to object--------------------//
			//postData	=	settings.data.name+"="+settings.data.value+"&applicantSign3="+settings.data.value+"&applicantSign5="+settings.data.value+"&username3="+settings.data.value+"&pdf_user_id="+pdf_user_id;//mohit-20-may-2017
			
			var postData = {};	
			fieldName	=	settings.data.name;
			postData[fieldName] = settings.data.value;
			postData['applicantSign3'] = settings.data.value;
			postData['applicantSign5'] = settings.data.value;
			postData['username3'] = settings.data.value;
			postData['pdf_user_id'] = pdf_user_id;
			//------------------mohit-20-may-2017-fixing-querystring to object--------------------//
			
			
			$("#username").next('.requiredError').remove();
			//$('#applicantSign1').text(settings.data.value);
			//$('#applicantSign1').css('color','#0D638F');
			//$("#applicantSign1").next('.requiredError').remove();
			
			//$('#applicantSign2').text(settings.data.value);
			//$('#applicantSign2').css('color','#0D638F');
			//$("#applicantSign2").next('.requiredError').remove();
			
			$('#applicantSign3').text(settings.data.value);
			$('#applicantSign3').css('color','#0D638F');
			$("#applicantSign3").next('.requiredError').remove();
			
			//$('#applicantSign4').text(settings.data.value);
			//$('#applicantSign4').css('color','#0D638F');
			//$("#applicantSign4").next('.requiredError').remove();
			
			$('#applicantSign5').text(settings.data.value);
			$('#applicantSign5').css('color','#0D638F');
			$("#applicantSign5").next('.requiredError').remove();
			
			//$('#applicantSign6').text(settings.data.value);
			//$('#applicantSign6').css('color','#0D638F');
			//$("#applicantSign6").next('.requiredError').remove();
			
			$('#username3').text(settings.data.value);
			$('#username3').css('color','#0D638F');
			$("#username3").next('.requiredError').remove();
			
			//$('#applicantSign7').text(settings.data.value);
			//$('#applicantSign7').css('color','#0D638F');
			//$("#applicantSign7").next('.requiredError').remove();
		}
		
		if(settings.data.name	==	'username2')
		{
			
			
			//postData	=	settings.data.name+"="+settings.data.value+"&coApplicantSign1="+settings.data.value+"&coApplicantSign2="+settings.data.value+"&coApplicantSign3="+settings.data.value+"&coApplicantSign4="+settings.data.value+"&coApplicantSign5="+settings.data.value+"&coApplicantSign6="+settings.data.value+"&coApplicantSign7="+settings.data.value+"&pdf_user_id="+pdf_user_id;
			
				//------------------mohit-20-may-2017-fixing-querystring to object--------------------//
			//postData	=	settings.data.name+"="+settings.data.value+"&coApplicantSign3="+settings.data.value+"&coApplicantSign5="+settings.data.value+"&pdf_user_id="+pdf_user_id;//mohit-20-may-2017
			
			var postData = {};	
			fieldName	=	settings.data.name;
			postData[fieldName] = settings.data.value;
			postData['coApplicantSign3'] = settings.data.value;
			postData['coApplicantSign5'] = settings.data.value;
			postData['pdf_user_id'] = pdf_user_id;
				//------------------mohit-20-may-2017-fixing-querystring to object--------------------//
			

			$("#username2").next('.requiredError').remove();
			//$('#coApplicantSign1').text(settings.data.value);
			//$('#coApplicantSign1').css('color','#0D638F');
			//$("#coApplicantSign1").next('.requiredError').remove();
			
			//$('#coApplicantSign2').text(settings.data.value);
			//$('#coApplicantSign2').css('color','#0D638F');
			//$("#coApplicantSign2").next('.requiredError').remove();
			
			$('#coApplicantSign3').text(settings.data.value);
			$('#coApplicantSign3').css('color','#0D638F');
			$("#coApplicantSign3").next('.requiredError').remove();
			
			//$('#coApplicantSign4').text(settings.data.value);
			//$('#coApplicantSign4').css('color','#0D638F');
			//$("#coApplicantSign4").next('.requiredError').remove();
			
			$('#coApplicantSign5').text(settings.data.value);
			$('#coApplicantSign5').css('color','#0D638F');
			$("#coApplicantSign5").next('.requiredError').remove();
			
			//$('#coApplicantSign6').text(settings.data.value);
			//$('#coApplicantSign6').css('color','#0D638F');
			//$("#coApplicantSign6").next('.requiredError').remove();
			
			//$('#coApplicantSign7').text(settings.data.value);
			//$('#coApplicantSign7').css('color','#0D638F');
			//$("#coApplicantSign7").next('.requiredError').remove();
		}
		//-----------populate applicant/coapplicant------------------------------//
		
		console.log(settings.data.name);
		if(settings.data.name	==	'r_rent')
		{
			
			rRent	=	$.trim(settings.data.value);
			console.log(rRent);
			$("#condition4-1-new").text(rRent);
		}
		
		$.ajax({
					url: "post.php",
					data: postData,
					type: 'post',
					error: function() 
					{
						alert("This field input didn't save. Please reload your browser and try again");
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

        //editables element samples 
		//----------------block-1-------------------//
        $('#username').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'username',
            title: 'Enter username',
            validate: function (value) {
				if ($.trim(value) == '') return 'Name is required!';
            },
        });
		
		var dteNow = new Date();
		

		 $('#dob1').editable({
            inputclass: 'form-control',
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear()-18,
			},
            validate: function (value) {
				if ($.trim(value) == '') return 'Date of birth is required!';
            },
        });

		 $('#ssn1').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'ssn1',
            title: 'Enter SSN',
			tpl: '<input type="text" id ="ssn1Input" maxlength="11">',
            validate: function (value) {
				//var intRegex = /^\d+$/;
				
				if ($.trim(value) == '') return 'SSN is required!';
				
				//if(!intRegex.test($.trim(value))) 
				//{
				//	return 'Enter 9 Digits Only.';
				//}
				
				if($.trim(value).length < 9) 
				{
					return 'Enter 9 Digits Only';
				}
            },
        });
		
		 $('#add1').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'add1',
            title: 'Enter Address',
			value: 
			{
                address: $('#hidden_add1_address').val(),
                city: $('#hidden_add1_city').val(),
				state: $('#hidden_add1_state').val(),
                zip: $('#hidden_add1_zip').val(),
				
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
		
		$('#rent1').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'rent1',
            title: 'Enter Rent'
        });
		
		$('#landlord1').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'landlord1',
            title: 'Enter Landlord Name'
        });
		
		$('#phone1').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'phone1',
            title: 'Enter Phone Number',
			tpl: '<input type="text" id ="phone1Input" maxlength="14">',
			 validate: function (value) {
				//var intRegex = /^\d+$/;

				var re = /^[ 0-9() -]*$/
				if (!re.test(value)) 
				{
					return "Enter only digits";
				}
            },
        });
		
		
		

		 $('#from1').editable({
            rtl : App.isRTL() ,
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
        });
		 $('#to1').editable({
            rtl : App.isRTL() ,
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
        });
		//----------------block-1-------------------//
		
		//----------------block-2-------------------//
		 $('#add2').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'add2',
            title: 'Enter Address',
			value: 
			{
                address: $('#hidden_add2_address').val(),
                city: $('#hidden_add2_city').val(),
				state: $('#hidden_add2_state').val(),
                zip: $('#hidden_add2_zip').val(),
				
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
		
		$('#rent2').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'rent2',
            title: 'Enter Rent'
        });
		
		$('#landlord2').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'landlord2',
            title: 'Enter Landlord Name'
        });
		
		$('#phone2').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'phone2',
            title: 'Enter Phone Number',
			tpl: '<input type="text" id ="phone2Input" maxlength="14">',
			 validate: function (value) {
				//var intRegex = /^\d+$/;

				var re = /^[ 0-9() -]*$/
				if (!re.test(value)) 
				{
					return "Enter only digits";
				}
            },
        });
		
		 $('#from2').editable({
            rtl : App.isRTL() ,
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
        });
		
		 $('#to2').editable({
            rtl : App.isRTL() ,
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
        });
		//----------------block-2-------------------//
		
		//----------------block-3-------------------//
		$('#employer1').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'employer1',
            title: 'Enter Employer'
        });
		$('#from3').editable({
            rtl : App.isRTL() ,
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
        });
		
		 $('#to3').editable({
            rtl : App.isRTL() ,
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
        });
		
		 $('#add3').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'add3',
            title: 'Enter Address',
			value: 
			{
                address: $('#hidden_add3_address').val(),
                city: $('#hidden_add3_city').val(),
				state: $('#hidden_add3_state').val(),
                zip: $('#hidden_add3_zip').val(),
				
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
		
		$('#phone3').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'phone3',
            title: 'Enter Phone Number',
			tpl: '<input type="text" id ="phone3Input" maxlength="14">',
			 validate: function (value) {
				//var intRegex = /^\d+$/;

				var re = /^[ 0-9() -]*$/
				if (!re.test(value)) 
				{
					return "Enter only digits";
				}
            },
        });
		
		$('#position1').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'position1',
            title: 'Enter Position'
        });
		
		$('#netincome1').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'netincome1',
            title: 'Enter Net Income'
        });
		//----------------block-3-------------------//
		
		
		//----------------block-4-------------------//
		$('#company1').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'company1',
            title: 'Enter Company',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".current_previous_employer" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
            }
        });
		$('#from4').editable({
            rtl : App.isRTL() ,
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".current_previous_employer" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
            }
        });
		
		 $('#to4').editable({
            rtl : App.isRTL() ,
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".current_previous_employer" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
            }
        });
		
		 $('#add4').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'add4',
            title: 'Enter Address',
			value: 
			{
                address: $('#hidden_add4_address').val(),
                city: $('#hidden_add4_city').val(),
			    state: $('#hidden_add4_state').val(),
                zip: $('#hidden_add4_zip').val(),
				
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
		
		$('#phone4').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'phone4',
            title: 'Enter Phone Number',
			tpl: '<input type="text" id ="phone4Input" maxlength="14">',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".current_previous_employer" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
				
				var re = /^[ 0-9() -]*$/
				if (!re.test(value)) 
				{
					return "Enter only digits";
				}
            }
        });
		
		$('#position2').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'position2',
            title: 'Enter Position',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".current_previous_employer" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
            }
        });
		
		$('#netincome2').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'netincome2',
            title: 'Enter Net Income',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".current_previous_employer" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
            }
        });
		//----------------block-4-------------------//
		
		
		//----------------block-5-------------------//
        $('#username2').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'username2',
            title: 'Enter username',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".co_applicant_signer" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
            }
        });
		
		 $('#dob2').editable({
            inputclass: 'form-control',
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear()-18,
			},
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".co_applicant_signer" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
            }
        });

		 $('#ssn2').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'ssn2',
            title: 'Enter SSN',
			tpl: '<input type="text" id ="ssn2Input" maxlength="11">',
            validate: function (value) {
				if ($.trim(value) == '') return 'SSN is required!';
				if($( ".co_applicant_signer" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'};
				
				//var intRegex = /^\d+$/;
				
				//if(!intRegex.test($.trim(value))) 
				//{
				//	return 'Enter 9 Digits Only.';
				//}
				
				if($.trim(value).length < 9) 
				{
					return 'Enter 9 Digits Only';
				}
            }
			
        });
		
		 $('#add5').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'add5',
            title: 'Enter Address',
			value: 
			{
                address: $('#hidden_add5_address').val(),
                city: $('#hidden_add5_city').val(),
				state: $('#hidden_add5_state').val(),
                zip: $('#hidden_add5_zip').val(),
				
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
		
		$('#rent3').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'rent3',
            title: 'Enter Rent'
        });
		
		$('#landlord3').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'landlord3',
            title: 'Enter Landlord Name'
        });
		
		$('#phone5').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'phone5',
            title: 'Enter Phone Number',
			tpl: '<input type="text" id ="phone5Input" maxlength="14">',
			 validate: function (value) {
				//var intRegex = /^\d+$/;

				var re = /^[ 0-9() -]*$/
				if (!re.test(value)) 
				{
					return "Enter only digits";
				}
            },
        });
		
		 $('#from5').editable({
            rtl : App.isRTL() ,
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
        });
		 $('#to5').editable({
            rtl : App.isRTL() ,
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
        });
		//----------------block-5-------------------//
		
		//----------------block-6-------------------//
		 $('#add6').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'add6',
            title: 'Enter Address',
			value: 
			{
                address: $('#hidden_add6_address').val(),
                city: $('#hidden_add6_city').val(),
				state: $('#hidden_add6_state').val(),
                zip: $('#hidden_add6_zip').val(),
				
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
		
		$('#rent4').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'rent4',
            title: 'Enter Rent'
        });
		
		$('#landlord4').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'landlord4',
            title: 'Enter Landlord Name'
        });
		
		$('#phone6').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'phone6',
            title: 'Enter Phone Number',
			tpl: '<input type="text" id ="phone6Input" maxlength="14">',
			 validate: function (value) {
				//var intRegex = /^\d+$/;

				var re = /^[ 0-9() -]*$/
				if (!re.test(value)) 
				{
					return "Enter only digits";
				}
            },
        });
		
		 $('#from6').editable({
            rtl : App.isRTL() ,
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
        });
		
		 $('#to6').editable({
            rtl : App.isRTL() ,
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
        });
		//----------------block-6-------------------//
		
		
		
		//----------------block-7-------------------//
		$('#employer2').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'employer2',
            title: 'Enter Employer'
        });
		$('#from7').editable({
            rtl : App.isRTL() ,
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
        });
		
		 $('#to7').editable({
            rtl : App.isRTL() ,
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
        });
		
		 $('#add7').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'add7',
            title: 'Enter Address',
			value: 
			{
                address: $('#hidden_add7_address').val(),
                city: $('#hidden_add7_city').val(),
				state: $('#hidden_add7_state').val(),
                zip: $('#hidden_add7_zip').val(),
				
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
		
		$('#phone7').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'phone7',
            title: 'Enter Phone Number',
			tpl: '<input type="text" id ="phone7Input" maxlength="14">',
			 validate: function (value) {
				//var intRegex = /^\d+$/;

				var re = /^[ 0-9() -]*$/
				if (!re.test(value)) 
				{
					return "Enter only digits";
				}
            },
        });
		
		$('#position3').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'position3',
            title: 'Enter Position'
        });
		
		$('#netincome3').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'netincome3',
            title: 'Enter Net Income'
        });
		//----------------block-7-------------------//
		
		//----------------block-8-------------------//
		$('#company2').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'company2',
            title: 'Enter Company',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".current_previous_employer2" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
            }
        });
		$('#from8').editable({
            rtl : App.isRTL() ,
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".current_previous_employer2" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
            }
        });
		
		 $('#to8').editable({
            rtl : App.isRTL() ,
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".current_previous_employer2" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
            }
        });
		
		 $('#add8').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'add8',
            title: 'Enter Address',
			value: 
			{
                address: $('#hidden_add8_address').val(),
                city: $('#hidden_add8_city').val(),
				state: $('#hidden_add8_state').val(),
                zip: $('#hidden_add8_zip').val(),
				
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
		
		$('#phone8').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'phone8',
            title: 'Enter Phone Number',
			tpl: '<input type="text" id ="phone8Input" maxlength="14">',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".current_previous_employer2" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'};
				var re = /^[ 0-9() -]*$/
				if (!re.test(value)) 
				{
					return "Enter only digits";
				}
            }
        });
		
		$('#position4').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'position4',
            title: 'Enter Position',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".current_previous_employer2" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
            }
        });
		
		$('#netincome4').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'netincome4',
            title: 'Enter Net Income',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".current_previous_employer2" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
            }
        });
		//----------------block-8-------------------//
		
		//---------------Mohit-14-march-2017-start------------------//
		//----------------block-8-a------------------//
		$('#r_zips').editable({
            url: '/post',
            type: 'textarea',
			rows: 2,
            pk: 1,
            name: 'r_zips',
            title: 'Enter Zip',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
            }
        });
		$('#refName1').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'refName1',
            title: 'Enter Reference Name',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
            }
        });
		$('#refName1Phone').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'refName1Phone',
            title: 'Enter Phone',
			tpl: '<input type="text" id ="refName1Phone" maxlength="14">',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				
				
				var re = /^[ 0-9() -]*$/
				if (!re.test(value)) 
				{
					return "Enter only digits";
				}
            }
        });
		$('#refName1Relationship').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'refName1Relationship',
            title: 'Enter Relationship',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
            }
        });
		$('#refName2').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'refName2',
            title: 'Enter Reference Name',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
            }
        });
		$('#refName2Phone').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'refName2Phone',
            title: 'Enter Phone',
			tpl: '<input type="text" id ="refName2Phone" maxlength="14">',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				
				var re = /^[ 0-9() -]*$/
				if (!re.test(value)) 
				{
					return "Enter only digits";
				}
            }
        });
		$('#refName2Relationship').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'refName2Relationship',
            title: 'Enter Relationship',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
            }
        });
		$('#condition8_new').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition8_new',
            title: 'Enter Answer',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
            }
        });
		$('#condition4-1-new').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition4_1_new',
            title: 'Enter Answer',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
            }
        });
		$('#condition16_new').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition16_new',
            title: 'Enter Answer',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
            }
        });
		$('#condition17_new').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition17_new',
            title: 'Enter Answer',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
            }
        });
		$('#condition18_new').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition18_new',
            title: 'Enter Answer',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
            }
        });
		$('#condition19_new').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition19_new',
            title: 'Enter Answer',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
            }
        });
		$('#condition20_new').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition20_new',
            title: 'Enter Answer',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
            }
        });
		$('#condition1_new').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition1_new',
            title: 'Enter Answer',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
            }
        });
		$('#condition_bathroom').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition_bathroom',
            title: 'Enter Answer',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
            }
        });
		//----------------block-8-a------------------//
		//---------------Mohit-14-march-2017-end------------------//
		
		//----------------block-9-------------------//
		$('#applicantSign1').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'applicantsign1',
            title: 'Enter Net Income',
            validate: function (value) {
				if ($.trim(value) == '') return 'Signature is required!';
            },
        });
		 $('#date1').editable({
            inputclass: 'form-control',
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
        });
		$('#coApplicantSign1').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'coapplicantsign1',
            title: 'Enter Net Income',
			validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".co_applicant_signer" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
            }
        });
		$('#date2').editable({
            inputclass: 'form-control',
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
        });
		//----------------block-9-------------------//
		
		//----------------block-10-Page-2-----------------//
		$('#date3').editable({
            inputclass: 'form-control',
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
            validate: function (value) {
				if ($.trim(value) == '') return 'Date is required!';
            },
        });
		$('#condition1').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition1',
			emptytext: 'Initials',
            title: 'Enter Point 1',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		$('#condition2').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition2',
			emptytext: 'Initials',
            title: 'Enter Point 2',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		$('#condition3').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition3',
            title: 'Enter Point 3',
			emptytext: 'Initials',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		$('#condition3-1').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition3_1',
            title: 'Enter Point 3.1',
			emptytext: 'Initials',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		$('#condition3-2').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition3_2',
            title: 'Enter Point 3.2',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		$('#condition4').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition4',
            title: 'Enter Point 4',
			emptytext: 'Initials',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		$('#condition4-1').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition4_1',
            title: 'Enter Point 4.1',
			emptytext: 'Initials',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		$('#condition4-2').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition4_2',
            title: 'Enter Point 4.2',
			emptytext: 'Initials',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		$('#condition4-3').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition4_3',
            title: 'Enter Point 4.3',
			emptytext: 'Initials',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		$('#condition5').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition5',
            title: 'Enter Point 5.0',
			emptytext: 'Initials',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		$('#condition5-1').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition5_1',
            title: 'Enter Point 5.1',
			emptytext: 'Initials',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		$('#condition5-2').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition5_2',
            title: 'Enter Point 5.1',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		
		$('#condition6').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition6',
            title: 'Enter Point 6.0',
			emptytext: 'Initials',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		
		$('#condition6-1').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition6_1',
            title: 'Enter Point 6.1',
			emptytext: 'Initials',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		
		$('#condition6-2').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition6_2',
            title: 'Enter Point 6.2',
			emptytext: 'Initials',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		
		$('#condition6-3').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition6_3',
            title: 'Enter Point 6.3',
			emptytext: 'Initials',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });

		$('#condition6-4').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition6_4',
            title: 'Enter Point 6.4',
			emptytext: 'Initials',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		//----------------block-10-Page-2------------------//
		
		
		//----------------Page-3-----------------//
		$('#applicantSign2').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'applicantsign2',
            title: 'Enter Sign',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		
		$('#coApplicantSign2').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'coapplicantsign2',
            title: 'Enter Sign',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".co_applicant_signer" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
            }
        });
		
		$('#onbehalfofcompany1').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'onbehalfofcompany1',
            title: 'Enter Sign'
        });
		//----------------Page-3-----------------//
		
		//----------------Page-4-----------------//
		$('#applicantSign3').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'applicantsign3',
            title: 'Enter Sign',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		
		$('#coApplicantSign3').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'coapplicantsign3',
            title: 'Enter Sign',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".co_applicant_signer" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
            }
        });
		
		$('#condition7').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition7',
            title: 'Enter Point 7',
			emptytext: 'Initials',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		
		$('#condition8').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition8',
            title: 'Enter Point 8',
			emptytext: 'Initials',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		
		$('#condition9').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition9',
            title: 'Enter Point 9',
			emptytext: 'Initials',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		
		$('#condition10_init').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition10_init',
            title: 'Enter Point 10',
			emptytext: 'Initials',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		
		$('#condition11').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition11',
            title: 'Enter Point 11',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		
		$('#condition12').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition12',
            title: 'Enter Point 12',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		
		$('#applicantSign4').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'applicantsign4',
            title: 'Enter Sign',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		
		$('#coApplicantSign4').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'coapplicantsign4',
            title: 'Enter Sign',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".co_applicant_signer" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
            }
        });
		
		$('#date4').editable({
            inputclass: 'form-control',
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });

		//----------------Page-4-----------------//
		
		//----------------Page-5-----------------//
		$('#applicantSign5').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'applicantsign5',
            title: 'Enter Sign',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		
		$('#coApplicantSign5').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'coapplicantsign5',
            title: 'Enter Sign',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".co_applicant_signer" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
            }
        });
		
		$('#applicantSign6').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'applicantsign6',
            title: 'Enter Sign',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		
		$('#coApplicantSign6').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'coapplicantsign6',
            title: 'Enter Sign',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".co_applicant_signer" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
            }
        });
		
		$('#date5').editable({
            inputclass: 'form-control',
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		//----------------Page-5-----------------//
		
		//----------------Page-6----------------//
		$('#date6').editable({
            inputclass: 'form-control',
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		
		$('#username3').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'username3',
            title: 'Enter username',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		$('#r_bedrooms').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'r_bedrooms',
            title: 'Number of bedrooms'
        });
		$('#r_people').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'r_people',
            title: 'Number of people'
        });
		$('#r_rent').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'r_rent',
            title: 'Rent'
        });
		$('#r_cat').editable({
            prepend: "not selected",
            inputclass: 'form-control',
            source: [{
                    value: 'None',
                    text: 'None'
                }, {
                    value: '1',
                    text: '1'
                }, {
                    value: '2',
                    text: '2'
                }, {
                    value: '3',
                    text: '3'
                }, {
                    value: '4 or more',
                    text: '4 or more'
                }
            ],
            display: function (value, sourceData) {
                var colors = {
                    "": "red",
                    'None': "blue",
                    '1': "blue",
					'2': "blue",
                    '3': "blue",
					'4 or more': "blue"
                },
                    elem = $.grep(sourceData, function (o) {
                        return o.value == value;
                    });

                if (elem.length) {
                    $(this).text(elem[0].text).css("color", colors[value]);
                } else {
                    $(this).empty();
                }
            }
        });
		
		
		$('#r_dog').editable({
            prepend: "not selected",
            inputclass: 'form-control',
            source: [{
                    value: 'None',
                    text: 'None'
                }, {
                    value: '1',
                    text: '1'
                }, {
                    value: '2',
                    text: '2'
                }, {
                    value: '3',
                    text: '3'
                }, {
                    value: '4 or more',
                    text: '4 or more'
                }
            ],
            display: function (value, sourceData) {
                var colors = {
                    "": "red",
                    'None': "blue",
                    '1': "blue",
					'2': "blue",
                    '3': "blue",
					'4 or more': "blue"
                },
                    elem = $.grep(sourceData, function (o) {
                        return o.value == value;
                    });

                if (elem.length) {
                    $(this).text(elem[0].text).css("color", colors[value]);
                } else {
                    $(this).empty();
                }
            }
        });
		
		$('#r_if_dog').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'r_if_dog',
            title: 'r_dog'
        });
		
		 $('#approval_weeks').editable({
			 url: '/post',
            prepend: "Select",
			 name: 'approval_weeks',
            inputclass: 'form-control',
            source: [{
                    value: 1,
                    text: '1'
                }, {
                    value: 2,
                    text: '2'
                }, {
                    value: 3,
                    text: '3'
                }, {
                    value: 4,
                    text: '4'
                }, {
                    value: 5,
                    text: '5'
                }, {
                    value: 6,
                    text: '6'
                }, {
                    value: 7,
                    text: '7'
                }, {
                    value: 8,
                    text: '8'
                }
            ],
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
            }
        });
		
		/*$('#approval_weeks').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'approval_weeks',
            title: 'Enter Approval Weeks',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
            }
        });*/
		
		/*$('#how_long_looking').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'how_long_looking',
            title: 'Enter How Long Looking',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
            }
        });*/
		
		$('#how_long_looking').editable({
            url: '/post',
            prepend: "Select",
			 name: 'how_long_looking',
            inputclass: 'form-control',
            source: [
					{value: 1,text: '1'},{value: 2,text: '2'},{value: 3,text: '3'},	{value: 4,text: '4'},{value: 5,text: '5'},
					{value: 6,text: '6'},{value: 7,text: '7'},{value: 8,text: '8'},	{value: 9,text: '9'},{value: 10,text: '10'},
					{value: 11,text: '11'},	{value: 12,text: '12'},	{value: 13,text: '13'},	{value: 14,text: '14'},{value: 15,text: '15'},
					{value: 16,text: '16'},	{value: 17,text: '17'},	{value: 18,text: '18'},	{value: 19,text: '19'},{value: 20,text: '20'},
					{value: 21,text: '21'},	{value: 22,text: '22'},	{value: 23,text: '23'},	{value: 24,text: '24'},{value: 25,text: '25'},
					{value: 26,text: '26'},	{value: 27,text: '27'},	{value: 28,text: '28'},	{value: 29,text: '29'},{value: 30,text: '30'},
					{value: 31,text: '31'},	{value: 32,text: '32'},	{value: 33,text: '33'},	{value: 34,text: '34'},{value: 35,text: '35'},
					{value: 36,text: '36'},	{value: 37,text: '37'},	{value: 38,text: '38'},	{value: 39,text: '39'},{value: 40,text: '40'},
					{value: 41,text: '41'},	{value: 42,text: '42'},	{value: 43,text: '43'},	{value: 44,text: '44'},{value: 45,text: '45'},
					{value: 46,text: '46'},	{value: 47,text: '47'},	{value: 48,text: '48'},	{value: 49,text: '49'},{value: 50,text: '50'},
					{value: 51,text: '51'},{value: 52,text: '52'}
					],
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
            }
        });
		
		$('#why_to_move').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'why_to_move',
            title: 'Enter Why To Move',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
            }
        });
		
		$('#r_text1').editable({
            url: '/post',
            type: 'textarea',
			rows: 2,
            pk: 1,
            name: 'r_text1',
            title: 'r_text'
        });
		
		$('#r_text2').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'r_text2',
            title: 'r_text'
        });
		
		$('#r_chicago').editable({
            prepend: "not selected",
            inputclass: 'form-control',
            source: [{
                    value: 'North',
                    text: 'North'
                }, {
                    value: 'Northwest',
                    text: 'Northwest'
                }, {
                    value: 'West',
                    text: 'West'
                }, {
                    value: 'Southwest',
                    text: 'Southwest'
                }, {
                    value: 'South',
                    text: 'South'
                }
            ],
            display: function (value, sourceData) {
                var colors = {
                    "": "red",
                    'North': "blue",
                    'Northwest': "blue",
					'West': "blue",
                    'Southwest': "blue",
					'South': "blue"
                },
                    elem = $.grep(sourceData, function (o) {
                        return o.value == value;
                    });

                if (elem.length) {
                    $(this).text(elem[0].text).css("color", colors[value]);
                } else {
                    $(this).empty();
                }
            }
        });
		
		$('#r_suburbs').editable({
            prepend: "not selected",
            inputclass: 'form-control',
            source: [{
                    value: 'North',
                    text: 'North'
                }, {
                    value: 'Northwest',
                    text: 'Northwest'
                }, {
                    value: 'West',
                    text: 'West'
                }, {
                    value: 'Southwest',
                    text: 'Southwest'
                }, {
                    value: 'South',
                    text: 'South'
                }
            ],
            display: function (value, sourceData) {
                var colors = {
                    "": "red",
                    'North': "blue",
                    'Northwest': "blue",
					'West': "blue",
                    'Southwest': "blue",
					'South': "blue"
                },
                    elem = $.grep(sourceData, function (o) {
                        return o.value == value;
                    });

                if (elem.length) {
                    $(this).text(elem[0].text).css("color", colors[value]);
                } else {
                    $(this).empty();
                }
            }
        });
		/*$('#condition13').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition13',
            title: 'Enter Point 13'
        });
		$('#condition14').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition14',
            title: 'Enter Point 14'
        });
		$('#condition15').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition15',
            title: 'Enter Point 15'
        });
		$('#condition16').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition16',
            title: 'Enter Point 16'
        });
		$('#condition17').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition17',
            title: 'Enter Point 17'
        });
		$('#condition18').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'condition18',
            title: 'Enter Point 18'
        });*/
		$('#applicantSign7').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'applicantsign7',
            title: 'Enter Sign',
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		
		$('#coApplicantSign7').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'coapplicantsign7',
            title: 'Enter Sign',
            validate: function (value) {
				if ($.trim(value) == ''){ return 'Blank is not allowed'};
				if($( ".co_applicant_signer" ).parents('.checked').length == 0){ return 'Please check one checkbox first.'}
            }
        });
		
		$('#date7').editable({
            inputclass: 'form-control',
			combodate: {
			minYear: 1900,
			maxYear: dteNow.getFullYear(),
			},
            validate: function (value) {
				if ($.trim(value) == '') return 'This field is required!';
            },
        });
		//----------------Page-6----------------//
		
		//----------------Employer-page---------//
		/*$('#employer_date').editable({
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
        });*/
		//----------------Employer-page---------//
		
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
		
		
				 $('#sex').editable({
            prepend: "not selected",
            inputclass: 'form-control',
            source: [{
                    value: 1,
                    text: 'Male'
                }, {
                    value: 2,
                    text: 'Female'
                }
            ],
            display: function (value, sourceData) {
                var colors = {
                    "": "gray",
                    1: "green",
                    2: "blue"
                },
                    elem = $.grep(sourceData, function (o) {
                        return o.value == value;
                    });

                if (elem.length) {
                    $(this).text(elem[0].text).css("color", colors[value]);
                } else {
                    $(this).empty();
                }
            }
        });
        $('#firstname').editable({
            validate: function (value) {
                if ($.trim(value) == '') return 'This field is required';
            }
        });

       

        $('#status').editable();

        $('#group').editable({
            showbuttons: false
        });

       

       
        $('#event').editable({
            placement: (App.isRTL() ? 'left' : 'right'),
            combodate: {
                firstItem: 'name'
            }
        });

        $('#meeting_start').editable({
            format: 'yyyy-mm-dd hh:ii',
            viewformat: 'dd/mm/yyyy hh:ii',
            validate: function (v) {
                if (v && v.getDate() == 10) return 'Day cant be 10!';
            },
            datetimepicker: {
                rtl : App.isRTL(),
                todayBtn: 'linked',
                weekStart: 1
            }
        });

        $('#comments').editable({
            showbuttons: 'bottom'
        });

        $('#note').editable({
            showbuttons : (App.isRTL() ? 'left' : 'right')
        });

        $('#pencil').click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            $('#note').editable('toggle');
        });

        $('#state').editable({
            source: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
        });

        $('#fruits').editable({
            pk: 1,
            limit: 3,
            source: [{
                    value: 1,
                    text: 'banana'
                }, {
                    value: 2,
                    text: 'peach'
                }, {
                    value: 3,
                    text: 'apple'
                }, {
                    value: 4,
                    text: 'watermelon'
                }, {
                    value: 5,
                    text: 'orange'
                }
            ]
        });

        $('#fruits').on('shown', function(e, reason) {
            App.initUniform();
        });

        $('#tags').editable({
            inputclass: 'form-control input-medium',
            select2: {
                tags: ['html', 'javascript', 'css', 'ajax'],
                tokenSeparators: [",", " "]
            }
        });

        var countries = [];
        $.each({
            "BD": "Bangladesh",
            "BE": "Belgium",
            "BF": "Burkina Faso",
            "BG": "Bulgaria",
            "BA": "Bosnia and Herzegovina",
            "BB": "Barbados",
            "WF": "Wallis and Futuna",
            "BL": "Saint Bartelemey",
            "BM": "Bermuda",
            "BN": "Brunei Darussalam",
            "BO": "Bolivia",
            "BH": "Bahrain",
            "BI": "Burundi",
            "BJ": "Benin",
            "BT": "Bhutan",
            "JM": "Jamaica",
            "BV": "Bouvet Island",
            "BW": "Botswana",
            "WS": "Samoa",
            "BR": "Brazil",
            "BS": "Bahamas",
            "JE": "Jersey",
            "BY": "Belarus",
            "O1": "Other Country",
            "LV": "Latvia",
            "RW": "Rwanda",
            "RS": "Serbia",
            "TL": "Timor-Leste",
            "RE": "Reunion",
            "LU": "Luxembourg",
            "TJ": "Tajikistan",
            "RO": "Romania",
            "PG": "Papua New Guinea",
            "GW": "Guinea-Bissau",
            "GU": "Guam",
            "GT": "Guatemala",
            "GS": "South Georgia and the South Sandwich Islands",
            "GR": "Greece",
            "GQ": "Equatorial Guinea",
            "GP": "Guadeloupe",
            "JP": "Japan",
            "GY": "Guyana",
            "GG": "Guernsey",
            "GF": "French Guiana",
            "GE": "Georgia",
            "GD": "Grenada",
            "GB": "United Kingdom",
            "GA": "Gabon",
            "SV": "El Salvador",
            "GN": "Guinea",
            "GM": "Gambia",
            "GL": "Greenland",
            "GI": "Gibraltar",
            "GH": "Ghana",
            "OM": "Oman",
            "TN": "Tunisia",
            "JO": "Jordan",
            "HR": "Croatia",
            "HT": "Haiti",
            "HU": "Hungary",
            "HK": "Hong Kong",
            "HN": "Honduras",
            "HM": "Heard Island and McDonald Islands",
            "VE": "Venezuela",
            "PR": "Puerto Rico",
            "PS": "Palestinian Territory",
            "PW": "Palau",
            "PT": "Portugal",
            "SJ": "Svalbard and Jan Mayen",
            "PY": "Paraguay",
            "IQ": "Iraq",
            "PA": "Panama",
            "PF": "French Polynesia",
            "BZ": "Belize",
            "PE": "Peru",
            "PK": "Pakistan",
            "PH": "Philippines",
            "PN": "Pitcairn",
            "TM": "Turkmenistan",
            "PL": "Poland",
            "PM": "Saint Pierre and Miquelon",
            "ZM": "Zambia",
            "EH": "Western Sahara",
            "RU": "Russian Federation",
            "EE": "Estonia",
            "EG": "Egypt",
            "TK": "Tokelau",
            "ZA": "South Africa",
            "EC": "Ecuador",
            "IT": "Italy",
            "VN": "Vietnam",
            "SB": "Solomon Islands",
            "EU": "Europe",
            "ET": "Ethiopia",
            "SO": "Somalia",
            "ZW": "Zimbabwe",
            "SA": "Saudi Arabia",
            "ES": "Spain",
            "ER": "Eritrea",
            "ME": "Montenegro",
            "MD": "Moldova, Republic of",
            "MG": "Madagascar",
            "MF": "Saint Martin",
            "MA": "Morocco",
            "MC": "Monaco",
            "UZ": "Uzbekistan",
            "MM": "Myanmar",
            "ML": "Mali",
            "MO": "Macao",
            "MN": "Mongolia",
            "MH": "Marshall Islands",
            "MK": "Macedonia",
            "MU": "Mauritius",
            "MT": "Malta",
            "MW": "Malawi",
            "MV": "Maldives",
            "MQ": "Martinique",
            "MP": "Northern Mariana Islands",
            "MS": "Montserrat",
            "MR": "Mauritania",
            "IM": "Isle of Man",
            "UG": "Uganda",
            "TZ": "Tanzania, United Republic of",
            "MY": "Malaysia",
            "MX": "Mexico",
            "IL": "Israel",
            "FR": "France",
            "IO": "British Indian Ocean Territory",
            "FX": "France, Metropolitan",
            "SH": "Saint Helena",
            "FI": "Finland",
            "FJ": "Fiji",
            "FK": "Falkland Islands (Malvinas)",
            "FM": "Micronesia, Federated States of",
            "FO": "Faroe Islands",
            "NI": "Nicaragua",
            "NL": "Netherlands",
            "NO": "Norway",
            "NA": "Namibia",
            "VU": "Vanuatu",
            "NC": "New Caledonia",
            "NE": "Niger",
            "NF": "Norfolk Island",
            "NG": "Nigeria",
            "NZ": "New Zealand",
            "NP": "Nepal",
            "NR": "Nauru",
            "NU": "Niue",
            "CK": "Cook Islands",
            "CI": "Cote d'Ivoire",
            "CH": "Switzerland",
            "CO": "Colombia",
            "CN": "China",
            "CM": "Cameroon",
            "CL": "Chile",
            "CC": "Cocos (Keeling) Islands",
            "CA": "Canada",
            "CG": "Congo",
            "CF": "Central African Republic",
            "CD": "Congo, The Democratic Republic of the",
            "CZ": "Czech Republic",
            "CY": "Cyprus",
            "CX": "Christmas Island",
            "CR": "Costa Rica",
            "CV": "Cape Verde",
            "CU": "Cuba",
            "SZ": "Swaziland",
            "SY": "Syrian Arab Republic",
            "KG": "Kyrgyzstan",
            "KE": "Kenya",
            "SR": "Suriname",
            "KI": "Kiribati",
            "KH": "Cambodia",
            "KN": "Saint Kitts and Nevis",
            "KM": "Comoros",
            "ST": "Sao Tome and Principe",
            "SK": "Slovakia",
            "KR": "Korea, Republic of",
            "SI": "Slovenia",
            "KP": "Korea, Democratic People's Republic of",
            "KW": "Kuwait",
            "SN": "Senegal",
            "SM": "San Marino",
            "SL": "Sierra Leone",
            "SC": "Seychelles",
            "KZ": "Kazakhstan",
            "KY": "Cayman Islands",
            "SG": "Singapore",
            "SE": "Sweden",
            "SD": "Sudan",
            "DO": "Dominican Republic",
            "DM": "Dominica",
            "DJ": "Djibouti",
            "DK": "Denmark",
            "VG": "Virgin Islands, British",
            "DE": "Germany",
            "YE": "Yemen",
            "DZ": "Algeria",
            "US": "United States",
            "UY": "Uruguay",
            "YT": "Mayotte",
            "UM": "United States Minor Outlying Islands",
            "LB": "Lebanon",
            "LC": "Saint Lucia",
            "LA": "Lao People's Democratic Republic",
            "TV": "Tuvalu",
            "TW": "Taiwan",
            "TT": "Trinidad and Tobago",
            "TR": "Turkey",
            "LK": "Sri Lanka",
            "LI": "Liechtenstein",
            "A1": "Anonymous Proxy",
            "TO": "Tonga",
            "LT": "Lithuania",
            "A2": "Satellite Provider",
            "LR": "Liberia",
            "LS": "Lesotho",
            "TH": "Thailand",
            "TF": "French Southern Territories",
            "TG": "Togo",
            "TD": "Chad",
            "TC": "Turks and Caicos Islands",
            "LY": "Libyan Arab Jamahiriya",
            "VA": "Holy See (Vatican City State)",
            "VC": "Saint Vincent and the Grenadines",
            "AE": "United Arab Emirates",
            "AD": "Andorra",
            "AG": "Antigua and Barbuda",
            "AF": "Afghanistan",
            "AI": "Anguilla",
            "VI": "Virgin Islands, U.S.",
            "IS": "Iceland",
            "IR": "Iran, Islamic Republic of",
            "AM": "Armenia",
            "AL": "Albania",
            "AO": "Angola",
            "AN": "Netherlands Antilles",
            "AQ": "Antarctica",
            "AP": "Asia/Pacific Region",
            "AS": "American Samoa",
            "AR": "Argentina",
            "AU": "Australia",
            "AT": "Austria",
            "AW": "Aruba",
            "IN": "India",
            "AX": "Aland Islands",
            "AZ": "Azerbaijan",
            "IE": "Ireland",
            "ID": "Indonesia",
            "UA": "Ukraine",
            "QA": "Qatar",
            "MZ": "Mozambique"
        }, function (k, v) {
            countries.push({
                id: k,
                text: v
            });
        });

        $('#country').editable({
            inputclass: 'form-control input-medium',
            source: countries
        });

        /*$('#address').editable({
            url: '/post',
            value: {
                address: "San Francisco",
                city: "Valencia",
                zip: "#24",
				
            },
            validate: function (value) {
                if (value.city == '') return 'city is required!';
            },
            display: function (value) {
                if (!value) {
                    $(this).empty();
                    return;
                }
                var html = '<b>' + $('<div>').text(value.city).html() + '  ' + $('<div>').text(value.street).html()  + $('<div>').text(value.building).html();
                $(this).html(html);
            }
        });*/
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

$('document').ready(function()
{
	$("body").on('keyup',"#phone1Input, #phone2Input, #phone3Input, #phone4Input, #phone5Input, #phone6Input, #phone7Input, #phone8Input, #refName1Phone, #refName2Phone",function() 
	{
		//$(this).val($(this).val().replace(/^(\d{3})(\d{3})(\d)+$/, "($1)$2-$3"));
		//$(this).val($(this).val().replace(/(\d{3}(?!\d?$))\-?/g, '$1-'));
		$(this).val($(this).val().replace(/(\d{3})(\d{3})(\d{4})\-?/g,'($1) $2-$3'));
	});
	
	$("body").on('keyup',"#ssn1Input, #ssn2Input",function() 
	{
		$(this).val($(this).val().replace(/(\d{3})(\d{2})(\d{4})\-?/g,'$1-$2-$3'));
	});
})