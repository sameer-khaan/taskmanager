$(document).ready(function() {
    //landlord Rental Form start
    $(".landlord_condition1").change(function(e){
		pdf_user_id     =  $("#pdf_user_id").val();
		verificationId	=  $("#verificationId").val();
		
		if($(this).parent().attr('class') == 'checked')
		{
			fieldname   =  $(this).attr('name');
			fieldvalue  =  $(this).val();
		}
		else
		{
			fieldname   =  $(this).attr('name');
			fieldvalue  =  ''			
		}
		
		postData	=	"pdf_user_id="+pdf_user_id+"&"+fieldname+"="+fieldvalue+"&verificationId="+verificationId;
        console.log(postData);
		
		$.ajax({
            url: "post_landlord.php",
            data: postData,
            type: 'post',
            error: function(xhr, status, error) {
              var err = eval("(" + xhr.responseText + ")");
              //alert(err.Message);
            },
            success: function(response) 
            {
                console.log(response);
            }
        });
   });
   
   if($.trim($('#landlord_condition1_c1_hidden').val()) != ''){
		$("#landlord_condition1_c1_check").parent().attr('class','checked'); 
   } 
   if($.trim($('#landlord_condition1_c2_hidden').val()) != ''){
	   $("#landlord_condition1_c2_check").parent().attr('class','checked'); 
   }
   if($.trim($('#landlord_condition1_c3_hidden').val()) != ''){
	 $("#landlord_condition1_c3_check").parent().attr('class','checked'); 
   }

	$(".landlord_condition2").change(function(e){
		pdf_user_id     =  $("#pdf_user_id").val();
		verificationId	=  $("#verificationId").val();

		if($(this).parent().attr('class') == 'checked')
		{
			fieldname   =  $(this).attr('name');
			fieldvalue  =  $(this).val();
		}
		else
		{
			fieldname   =  $(this).attr('name');
			fieldvalue  =  '';
		}
		
		postData	=	"pdf_user_id="+pdf_user_id+"&"+fieldname+"="+fieldvalue+"&verificationId="+verificationId;
		console.log(postData);
        
		$.ajax({
            url: "post_landlord.php",
            data: postData,
            type: 'post',
            error: function(xhr, status, error) {
              var err = eval("(" + xhr.responseText + ")");
              //alert(err.Message);
            },
            success: function(response) 
            {
                console.log(response);
            }
        });
   });
		   
   if($.trim($('#landlord_condition2_c1_hidden').val()) != ''){
		$("#landlord_condition2_c1_check").parent().attr('class','checked'); 
   }
   if($.trim($('#landlord_condition2_c2_hidden').val()) != ''){
	   $("#landlord_condition2_c2_check").parent().attr('class','checked'); 
   }
   if($.trim($('#landlord_condition2_c3_hidden').val()) != ''){
	 $("#landlord_condition2_c3_check").parent().attr('class','checked'); 
   }

    $('#landlord_form_submit').click(function(){
        pdf_user_id     =  $("#pdf_user_id").val();
		verificationId	=  $("#verificationId").val();
		flag			=	'1';
        
        postData	=	"check_data=&pdf_user_id="+pdf_user_id+"&verificationId="+verificationId;
        console.log(postData);
		
		$.ajax({
            url: "post_landlord.php",
            data: postData,
            type: 'post',
            error: function(xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                console.log(err.Message);
            },
            success: function(response) 
            {
                console.log(response);
                if(response == '0'){
					
					$(".requiredField").each(function(){
						
						if($(this).text() == 'Empty' || $(this).text() == 'empty' )
						{
							flag = '0';
							$(this).next().next('.requiredError').remove();
							$(this).next().remove();
							$(this).after( "  <span class='requiredError' style='color:red'>This field is required</span>" );
						}
						else
						{
							$(this).next().next('.requiredError').remove();
							$(this).next().remove();
						}
					});
					
					if($(".landlord_condition1").parent().hasClass('checked'))
					{
						$('.landlord_condition1Radios').next().next('.requiredError').remove();
						$('.landlord_condition1Radios').next().remove();
					}
					else
					{
						flag = '0';
						$('.landlord_condition1Radios').next().next('.requiredError').remove();
						$('.landlord_condition1Radios').next().remove();
						$('.landlord_condition1Radios').after( "  <span class='requiredError' style='color:red'>Please check at least one.</span>" );
					}
					
					if($(".landlord_condition2").parent().hasClass('checked'))
					{
						$('.landlord_condition2Radios').next().next('.requiredError').remove();
						$('.landlord_condition2Radios').next().remove();
					}
					else
					{
						flag = '0';
						$('.landlord_condition2Radios').next().next('.requiredError').remove();
						$('.landlord_condition2Radios').next().remove();
						$('.landlord_condition2Radios').after( "  <span class='requiredError' style='color:red'>Please check at least one.</span>" );
					}
					
					
					if(flag == 1)
					{
						$('#form-error-alert').css('display','none');
						//$(this).parents('form:first').submit();
						document.forms[0].submit()
					}
					else
					{
						$('#form-error-alert').css('display','block');
					}
                }
                else{
                    flag = '1';
					
					$(".requiredField").each(function(){
						
						if($(this).text() == 'Empty' || $(this).text() == 'empty')
						{
							flag = '0';
							$(this).next().next('.requiredError').remove();
							$(this).next().remove();
							$(this).after( "  <span class='requiredError' style='color:red'>This field is required</span>" );
						}
						else
						{
							$(this).next().next('.requiredError').remove();
							$(this).next().remove();
						}
					});
					
					if($(".landlord_condition1").parent().hasClass('checked'))
					{
						$('.landlord_condition1Radios').next().next('.requiredError').remove();
						$('.landlord_condition1Radios').next().remove();
					}
					else
					{
						flag = '0';
						$('.landlord_condition1Radios').next().next('.requiredError').remove();
						$('.landlord_condition1Radios').next().remove();
						$('.landlord_condition1Radios').after( "  <span class='requiredError' style='color:red'>Please check at least one.</span>" );
					}
					
					if($(".landlord_condition2").parent().hasClass('checked'))
					{
						$('.landlord_condition2Radios').next().next('.requiredError').remove();
						$('.landlord_condition2Radios').next().remove();
					}
					else
					{
						flag = '0';
						$('.landlord_condition2Radios').next().next('.requiredError').remove();
						$('.landlord_condition2Radios').next().remove();
						$('.landlord_condition2Radios').after( "  <span class='requiredError' style='color:red'>Please check at least one.</span>" );
					}
					
					
					if(flag == 1)
					{
						$('#form-error-alert').css('display','none');
						//$(this).parents('form:first').submit();
						document.forms[0].submit()
					}
					else
					{
						$('#form-error-alert').css('display','block');
					}
                }
            }
        });
        
        
        
       
	});
//landlord Rental Form end

		$('#entry_559721990').keyup(function(ev) 
		{
			var key = ev.which;
            console.log(key);

			if(this.value.substring(0, 1) == '1')
			{
				$('#entry_559721990').css('border','2px solid red');
				$('#559721990_error').html('Initial can not be 1');
				$('#phoneError').html('Initial can not be 1');
				$('#phoneError').css('display','block');
				this.value = '';
			}
			else if ((this.value.length == 1) && (key == 49 || key == 97) )
			{
				this.value = '';
			}
			else if(this.value.length > 12)
			{
				$('#entry_559721990').css('border','2px solid red');
				$('#559721990_error').html('Only 10 digits are allowed');
				$('#phoneError').html('Only 10 digits are allowed');
				$('#phoneError').css('display','block');
				this.value = this.value.replace(/^(\d{3})(\d)/, '$1-$2').replace(/^(\d{3}-\d{3})(\d)/, '$1-$2');
				this.value = this.value.replace(/[^\d-\.]/g, '');
			}
			else
			{
				if((key > 47 && key < 58) || (key > 95 && key < 106))
				{
					this.value = this.value.replace(/^(\d{3})(\d)/, '$1-$2').replace(/^(\d{3}-\d{3})(\d)/, '$1-$2');
				}
				else
				{
					if(key == 37 || key == 39){
						
					}
					else{
						this.value = this.value.replace(/^(\d{3})(\d)/, '$1-$2').replace(/^(\d{3}-\d{3})(\d)/, '$1-$2');
						this.value = this.value.replace(/[^\d-\.]/g, '');
					}
				}
			}
		});
        
        $('#entry_1911965995').keyup(function(ev) 
		{
			var key = ev.which;
            console.log(key);
            this.value = this.value.replace(/[^\d\.]/g, '');
		});
        
        $('#entry_1911965996').keyup(function(ev) 
		{
			var key = ev.which;
            console.log(key);
            this.value = this.value.replace(/[^\d\.]/g, '');
		});
        
        $('#entry_1911965997').keyup(function(ev) 
		{
			var key = ev.which;
            console.log(key);
            this.value = this.value.replace(/[^\d\.]/g, '');
		});
        
        //Agent
        $("body").on("click", "#1813711793_errorMessage", function(e){
            $(this).css('border','');
            $('#1813711793_error').html('');
		});
        //Name
        $("body").on("blur", "#entry_1479665104", function(e){
			VAL = $.trim($(this).val());
			if(VAL != ''){
				$(this).css('border','');
				$('#1479665104_error').html('');
			}
		});
        //Phone
        $("body").on("blur", "#entry_559721990", function(e){
			VAL = $.trim($(this).val());
			if(VAL != ''){
				$(this).css('border','');
				$('#559721990_error').html('');
			}
		});
        //Email
        $("body").on("blur", "#entry_748538924", function(e){
			VAL = $.trim($(this).val());
			if(VAL != ''){
				$(this).css('border','');
				$('#748538924_error').html('');
			}
		});
        //Address
		$("body").on("blur", "#entry_429103297", function(e)
		{
			address	= $(this).val();
			if(address != ''){
                $(this).css('border','');
				$('#429103297_error').html('');
				$('#entry_1813785563').attr("readonly","readonly");
                $('#entry_429103297').removeAttr("readonly");
			}
			else{
                $('#entry_1813785563').removeAttr("readonly");
                $('#entry_1813785563').val('');
                $("#formatted_address").val('');
                $("#address_latitude").val('');
                $("#address_longitude").val('');
                $("#address_zip").val('');
			}
		});
        //Zip Code
        $("body").on("blur", "#entry_1813785563", function(e)
		{
			zip     = $(this).val();
            add_zip = $('#address_zip').val();
            if(zip != ''){
                $(this).css('border','');
				$('#1813785563_error').html('');
            }
			if(zip != '' && zip != add_zip){
                $.ajax({
                   url : "https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:"+zip+"&sensor=false",
                   method: "POST",
                   success:function(data){
                       address   = data.results[0].formatted_address;
                       latitude  = data.results[0].geometry.location.lat;
                       longitude = data.results[0].geometry.location.lng;
                       $("#formatted_address").val(address);
                       $("#address_latitude").val(latitude);
                       $("#address_longitude").val(longitude);
                       $("#address_zip").val(zip);
                       $('#entry_429103297').val(address);
                       //$('#entry_429103297').attr("readonly","readonly");
                       $('#entry_1813785563').removeAttr("readonly");
                   }
                });
            }
		});
        //Unit No
        $("body").on("blur", "#entry_748538925", function(e){
			VAL = $.trim($(this).val());
			if(VAL != ''){
				$(this).css('border','');
				$('#748538925_error').html('');
			}
		});
        //Bedrooms
        $("body").on("click", "#688086806_errorMessage", function(e){
            $(this).css('border','');
            $('#688086806_error').html('');
		});
        //Bathrooms
        $("body").on("click", "#6880868061_errorMessage", function(e){
            $(this).css('border','');
            $('#6880868061_error').html('');
		});
        //Floor
        $("body").on("click", "#98283592_errorMessage", function(e){
            $(this).css('border','');
            $('#98283592_error').html('');
		});
        //Utility
        $("body").on("blur", "#1379501930_errorMessage", function(e){
			$(this).css('border','');
            $('#1379501930_error').html('');
		});
        //Rent Amount
        $("body").on("blur", "#entry_1911965995", function(e){
			VAL = $.trim($(this).val());
			if(VAL != ''){
				$(this).css('border','');
				$('#1911965995_error').html('');
			}
		});
        //Security Amount
        $("body").on("blur", "#entry_1911965996", function(e){
			VAL = $.trim($(this).val());
			if(VAL != ''){
				$(this).css('border','');
				$('#1911965996_error').html('');
			}
		});
        //Movein Amount
        $("body").on("blur", "#entry_1911965997", function(e){
			VAL = $.trim($(this).val());
			if(VAL != ''){
				$(this).css('border','');
				$('#1911965997_error').html('');
			}
		});
        //Flex Credit
        $("body").on("blur", "#entry_748538923", function(e){
			VAL = $.trim($(this).val());
			if(VAL != ''){
				$(this).css('border','');
				$('#748538923_error').html('');
			}
		});
        //Available
        $("body").on("blur", "#when_available_unit", function(e){
			VAL = $.trim($(this).val());
			if(VAL != ''){
				$(this).css('border','');
				$('#when_available_unit_error').html('');
			}
		});
        //Unit Selling
        $("body").on("blur", "#entry_140706325", function(e){
			VAL = $.trim($(this).val());
			if(VAL != ''){
				$(this).css('border','');
				$('#140706325_error').html('');
			}
		});
        //Pet
        $("body").on("blur", "#7589725_errorMessage", function(e){
            $(this).css('border','');
            $('#7589725_error').html('');
		});
        //Initials
        $("body").on("blur", "#initials", function(e){
			VAL = $.trim($(this).val());
			if(VAL != ''){
				$(this).css('border','');
				$('#initials_error').html('');
			}
		});
        
         //used in view/landlord_form.php
         $('#ss-form-landlord').submit(function(e){
            var formData   = new FormData(this);
            var datastring = $(this).serialize();
            $.ajax({
                    url: base_url+'view/customer_request.php?unit_images='+datastring,
                    data: formData,
                    type: 'post',
                    contentType: false,
                    cache: false,
                    processData:false,
                    error: function(xhr, status, error)
                    {
                        console.log('status: '+status);
                        console.log('error: '+error);
                        $("#ss-submit-landlord").prop('value', 'Submit');
                        _html =	"<div class='alert alert-danger'><button aria-hidden='true' data-dismiss='alert' class='close' type='button'></button>Error in Saving Images</div>";
                        $('#result_message').html(_html);
                        $('html, body').animate({ scrollTop: $("#result_message").offset().top }, 500);
                    },
                    success: function(response)
                    {
                        console.log('unit_images: '+response);
                        jsonData = $.parseJSON(response);
                        
                        if(jsonData[1] == 'success'){
                            $("#ss-submit-landlord").prop('value', 'Submitted');
                            _html =	"<div class='alert alert-success'><button aria-hidden='true' data-dismiss='alert' class='close' type='button'></button>"+jsonData[0]+"</div>";
                            $('#result_message').html(_html);
                            $('html, body').animate({ scrollTop: $("#result_message").offset().top }, 500);
                            window.setTimeout('location.reload()', 5000);
                        }
                        else{
                            $("#ss-submit-landlord").prop('value', 'Submit');
                            _html =	"<div class='alert alert-danger'><button aria-hidden='true' data-dismiss='alert' class='close' type='button'></button>"+jsonData[0]+"</div>";
                            $('#result_message').html(_html);
                            $('html, body').animate({ scrollTop: $("#result_message").offset().top }, 500);
                        }
                    }
            });
            e.preventDefault();
         });
         
         //used in view/landlord_form.php
         $("#ss-submit-landlord").click(function(e)
		 {
            WORKER            = $.trim($('#workerId').val());
            MARKETER          = $.trim($('#marketerId').val());
            NAME              = $.trim($('#entry_1479665104').val());
            PHONE             = $.trim($('#entry_559721990').val());
            tempPhone         = PHONE.replace(/[^0-9\s]/gi, '').replace(/[_\s]/g, '-');
            EMAIL             = $.trim($('#entry_748538924').val());
            ADDRESS	          = $.trim($('#formatted_address').val());
			LAT		          = $.trim($('#address_latitude').val());
			LON		          = $.trim($('#address_longitude').val());
            ZIP		          = $.trim($('#address_zip').val());
			AGENT_OR_LANDLORD = $("input[type='radio'][name='entry.1813711793']:checked");
            BEDROOMS          = $("input[type='radio'][name='entry.688086806']:checked");
            BATHROOMS         = $("input[type='radio'][name='entry.6880868061']:checked");
			FLOOR             = $("input[type='radio'][name='entry.98283592']:checked");
            PETS              = $("input[type='radio'][name='entry.7589725']:checked");
            AVAILABLE         = $("#when_available_unit").val();
            PET_NOTES         = $.trim($('#entry_748538922').val());
            FLEX_CREDIT       = $.trim($('#entry_748538923').val());
            UNIT_NO           = $.trim($('#entry_748538925').val());
            RENT_COST         = $.trim($('#entry_1911965995').val());
            SECURITY_COST     = $.trim($('#entry_1911965996').val());
            MOVEIN_COST       = $.trim($('#entry_1911965997').val());
			UNIT_SELLING      = $.trim($('#entry_140706325').val());
            INITIALS          = $.trim($('#initials').val());
            FILES             = $('#files').val();
            DOG_WEIGHT        = '';
            DOG_NUMBER        = '';
            CAT_NUMBER        = '';
            
            if(AGENT_OR_LANDLORD.length > 0){
                AGENT_OR_LANDLORD = AGENT_OR_LANDLORD.val();
                $('#1813711793_errorMessage').css('border','');
				$('#1813711793_error').html('');
            }
            else{
                $('#1813711793_errorMessage').css('border','2px solid red');
				$('#1813711793_error').html('Required Field');
				$('html, body').animate({ scrollTop: $("#1813711793_errorMessage").offset().top }, 1000);
                return;
            }
            
            if(NAME == ''){
				$('#entry_1479665104').css('border','2px solid red');
				$('#1479665104_error').html('Required Field');
				$('html, body').animate({ scrollTop: $("#entry_1479665104").offset().top }, 1000);
                return;
			}
			else{
				$('#entry_1479665104').css('border','');
				$('#1479665104_error').html('');
			}
            
            if(WORKER == 'none'){
                if(tempPhone.length < 10 || tempPhone.length > 10){
                    $('#entry_559721990').css('border','2px solid red');
                    $('#559721990_error').html('Phone should have 10 digits');
                    $('html, body').animate({ scrollTop: $("#entry_559721990").offset().top }, 1000);
                    return;
                }
                else{
                    $('#entry_559721990').css('border','');
                    $('#559721990_error').html('');
                }
            }
            
            if(EMAIL == ''){
				$('#entry_748538924').css('border','2px solid red');
				$('#748538924_error').html('Required Field');
				$('html, body').animate({ scrollTop: $("#entry_748538924").offset().top }, 1000);
                return;
			}
			else{
				$('#entry_748538924').css('border','');
				$('#748538924_error').html('');
			}
            
            if(ADDRESS == ''){
				$('#entry_429103297').css('border','2px solid red');
				$('#429103297_error').html('Required Field');
				$('html, body').animate({ scrollTop: $("#entry_429103297").offset().top }, 1000);
                return;
			}
			else{
				$('#entry_429103297').css('border','');
				$('#429103297_error').html('');
			}
            
            if(ZIP == ''){
				$('#entry_1813785563').css('border','2px solid red');
				$('#1813785563_error').html('Required Field');
				$('html, body').animate({ scrollTop: $("#entry_1813785563").offset().top }, 1000);
                return;
			}
			else{
				$('#entry_1813785563').css('border','');
				$('#1813785563_error').html('');
			}
            
            if(UNIT_NO == ''){
				$('#entry_748538925').css('border','2px solid red');
				$('#748538925_error').html('Required Field');
				$('html, body').animate({ scrollTop: $("#entry_748538925").offset().top }, 1000);
                return;
			}
			else{
				$('#entry_748538925').css('border','');
				$('#748538925_error').html('');
			}
            
            if(BEDROOMS.length > 0){
                BEDROOMS = BEDROOMS.val();
                $('#688086806_errorMessage').css('border','');
				$('#688086806_error').html('');
            }
            else{
                $('#688086806_errorMessage').css('border','2px solid red');
				$('#688086806_error').html('Required Field');
				$('html, body').animate({ scrollTop: $("#688086806_errorMessage").offset().top }, 1000);
                return;
            }
            
            if(BATHROOMS.length > 0){
                BATHROOMS = BATHROOMS.val();
                $('#6880868061_errorMessage').css('border','');
				$('#6880868061_error').html('');
            }
            else{
                $('#6880868061_errorMessage').css('border','2px solid red');
				$('#6880868061_error').html('Required Field');
				$('html, body').animate({ scrollTop: $("#6880868061_errorMessage").offset().top }, 1000);
                return;
            }
            
            if(FLOOR.length > 0){
                FLOOR = FLOOR.val();
                $('#98283592_errorMessage').css('border','');
				$('#98283592_error').html('');
            }
            else{
                $('#98283592_errorMessage').css('border','2px solid red');
				$('#98283592_error').html('Required Field');
				$('html, body').animate({ scrollTop: $("#98283592_errorMessage").offset().top }, 1000);
                return;
            }
            
            var UTILITIES =	'';
			$("input:checkbox[name='entry.1379501930']:checked").each(function(){
				UTILITIES	+=	$(this).val()+','
			});
			UTILITIES = UTILITIES.substring(0,(UTILITIES.length-1));
            
            if(UTILITIES == ''){
                $('#1379501930_errorMessage').css('border','2px solid red');
                $('#1379501930_error').html('Required Field');
				$('html, body').animate({ scrollTop: $("#1379501930_errorMessage").offset().top }, 1000);
                return;
			}
			else{
                $('#1379501930_errorMessage').css('border','');
				$('#1379501930_error').html('');
			}
            
            if(FLEX_CREDIT == ''){
				$('#entry_748538923').css('border','2px solid red');
				$('#748538923_error').html('Required Field');
				$('html, body').animate({ scrollTop: $("#entry_748538923").offset().top }, 1000);
                return;
			}
			else{
				$('#entry_748538923').css('border','');
				$('#748538923_error').html('');
			}
            
            if(AVAILABLE == ''){
				$('#when_available_unit').css('border','2px solid red');
				$('#when_available_unit_error').html('Required Field');
				$('html, body').animate({ scrollTop: $("#when_available_unit").offset().top }, 1000);
                return;
			}
			else{
                var expireDate = AVAILABLE.split("/");
                expireYear = expireDate[2],
                expireMo   = expireDate[0],
                expireDay  = expireDate[1];

                var now = new Date(),
                nowYear = now.getFullYear(),
                nowMo   = now.getMonth() + 1,
                nowDay  = now.getDate();

                if(nowYear > expireYear || nowYear == expireYear && nowMo > expireMo || 
                   nowYear == expireYear && nowMo == expireMo && nowDay > expireDay) {
                    $("#when_available_unit_error").html('Past date not allowed');
                    $('#when_available_unit').css('border','2px solid red');
                    $('html, body').animate({ scrollTop: $("#when_available_unit").offset().top }, 1000);
                    return;
                }
                else {
                    $("#when_available_unit").css('border','');
                    $("#when_available_unit_error").html('');
                }
			}
            
            if(UNIT_SELLING == ''){
				$('#entry_140706325').css('border','2px solid red');
				$('#140706325_error').html('Required Field');
				$('html, body').animate({ scrollTop: $("#entry_140706325").offset().top }, 1000);
                return;
			}
			else{
				$('#entry_140706325').css('border','');
				$('#140706325_error').html('');
			}
            
            if(RENT_COST == ''){
				$('#entry_1911965995').css('border','2px solid red');
				$('#1911965995_error').html('Required Field');
				$('html, body').animate({ scrollTop: $("#entry_1911965995").offset().top }, 1000);
                return;
			}
			else{
				$('#entry_1911965995').css('border','');
				$('#1911965995_error').html('');
			}
            
            if(SECURITY_COST == ''){
				$('#entry_1911965996').css('border','2px solid red');
				$('#1911965996_error').html('Required Field');
				$('html, body').animate({ scrollTop: $("#entry_1911965996").offset().top }, 1000);
                return;
			}
			else{
				$('#entry_1911965996').css('border','');
				$('#1911965996_error').html('');
			}
            
            if(MOVEIN_COST == ''){
				$('#entry_1911965997').css('border','2px solid red');
				$('#1911965997_error').html('Required Field');
				$('html, body').animate({ scrollTop: $("#entry_1911965997").offset().top }, 1000);
                return;
			}
			else{
				$('#entry_1911965997').css('border','');
				$('#1911965997_error').html('');
			}
            
            if(PETS.length > 0){
                PETS = PETS.val();
                $('#7589725_errorMessage').css('border','');
				$('#7589725_error').html('');
            }
            else{
                $('#7589725_errorMessage').css('border','');
				$('#7589725_error').html('Required Field');
				$('html, body').animate({ scrollTop: $("#7589725_errorMessage").offset().top }, 1000);
                return;
            }

            if(PETS == 'Dog'){
                DOG_WEIGHT = $.trim($('#dog_weight').val()) + ' lbs';
                DOG_NUMBER = $.trim($('#total_dogs').val());
                
                if($('#dog_weight').val() == ''){
                    $('#dog_weight').css('border','');
                    $('#dog_weight_error').html('Required Field');
                    $('html, body').animate({ scrollTop: $("#dog_weight_error").offset().top }, 1000);
                    return;
                }
                else{
                    $('#dog_weight').css('border','');
                    $('#dog_weight_error').html('');
                }
            }
            if(PETS == 'Cats'){
                CAT_NUMBER = $.trim($('#total_cats').val());
            }
            if(PETS == 'Cats & Dogs'){
                DOG_WEIGHT = $.trim($('#dog_weight').val()) + ' lbs';
                DOG_NUMBER = $.trim($('#total_dogs').val());
                CAT_NUMBER = $.trim($('#total_cats').val());
//                if($.trim($('#total_dogs').val()) == 1){
//                    PET1 = $.trim($('#total_dogs').val()) + ' Dog';
//                }
//                else{
//                    PET1 = $.trim($('#total_dogs').val()) + ' Dogs';
//                }
//                if($.trim($('#total_cats').val()) == 1){
//                    PET2 = $.trim($('#total_cats').val()) + ' Cat';
//                }
//                else{
//                    PET2 = $.trim($('#total_cats').val()) + ' Cats';
//                }
                if($('#dog_weight').val() == ''){
                    $('#dog_weight').css('border','');
                    $('#dog_weight_error').html('Required Field');
                    $('html, body').animate({ scrollTop: $("#dog_weight_error").offset().top }, 1000);
                    return;
                }
                else{
                    $('#dog_weight').css('border','');
                    $('#dog_weight_error').html('');
                }
            }
            if(PETS == 'None allowed'){
                PET_NOTES  = '';
            }
            
            if(INITIALS == ''){
				$('#initials').css('border','2px solid red');
				$('#initials_error').html('Required Field');
				$('html, body').animate({ scrollTop: $("#initials").offset().top }, 1000);
                return;
			}
			else{
				$('#initials').css('border','');
				$('#initials_error').html('');
			}
            
			if(AGENT_OR_LANDLORD && NAME && PHONE && EMAIL && ADDRESS && LAT && LON && ZIP && BEDROOMS && 
               BATHROOMS && RENT_COST && SECURITY_COST && MOVEIN_COST && UTILITIES && FLOOR && UNIT_SELLING && 
               PETS && FLEX_CREDIT && UNIT_NO && AVAILABLE && INITIALS) {
                
                $("#ss-submit-landlord").prop('value', 'Submiting...');
                
				postData	 =	'';
                postData    +=  'inserted_new_record=1';
                
                if(WORKER != 'none'){
                    postData    +=  '&worker_id='+WORKER;
                }
                if(MARKETER != 'none'){
                    postData    +=  '&marketer_id='+MARKETER;
                }
                if(FILES != ''){
                    postData    +=  '&files='+FILES;
                }
                
                postData	+=	'&agent_or_landlord_type='+AGENT_OR_LANDLORD;
				postData	+=	'&landlord_name='+NAME;
				postData	+=	'&landlord_phone='+PHONE;
                postData	+=	'&landlord_email='+EMAIL;
				postData	+=	'&address='+ADDRESS;
				postData	+=	'&lat='+LAT;
				postData	+=	'&long='+LON;
				postData	+=	'&zip='+ZIP;
                postData	+=	'&unit_reference='+UNIT_NO;
				postData	+=	'&bedrooms='+BEDROOMS;
                postData	+=	'&bathrooms='+BATHROOMS;
				postData	+=	'&utilities='+UTILITIES;
				postData	+=	'&floor='+FLOOR;
                postData	+=	'&rent='+RENT_COST;
				postData	+=	'&movein_amount='+MOVEIN_COST;
                postData	+=	'&security_amount='+SECURITY_COST;
				postData	+=	'&bathroom_storage_laundry='+UNIT_SELLING;
				postData	+=	'&pets='+encodeURIComponent(PETS);
                postData	+=	'&pet_notes='+PET_NOTES;
                postData    +=  '&if_dog='+DOG_WEIGHT;
                postData    +=  '&dog_numbers='+DOG_NUMBER;
                postData    +=  '&cat_numbers='+CAT_NUMBER;
				postData	+=	'&flex_credit='+FLEX_CREDIT;
                postData	+=	'&when_available_unit='+AVAILABLE;
                postData	+=	'&initials='+INITIALS;
                if(WORKER != 'none'){
                    postData	+=	'&action=updatenewrecord';
                }
                else{
                    postData	+=	'&action=newrecord';
                }
                
                $.ajax({
                        url: base_url+'view/customer_request.php',
                        data: postData,
                        type: 'post',
                        error: function(xhr, status, error)
                        {
                            console.log('status: '+status);
                            console.log('error: '+error);
                            $("#ss-submit-landlord").prop('value', 'Submit');
                            _html =	"<div class='alert alert-danger'><button aria-hidden='true' data-dismiss='alert' class='close' type='button'></button>Error in Saving Data</div>";
                            $('#result_message').html(_html);
                            $('html, body').animate({ scrollTop: $("#result_message").offset().top }, 500);
                        },
                        success: function(response)
                        {
                            console.log('submit_data: '+response);
                            jsonData = $.parseJSON(response);
                            
                            if(jsonData[1] == 'success'){
                                //save images with email
                                if(FILES != ''){
                                    $('#ss-form-landlord').submit();
                                }
                                else{
                                    $("#ss-submit-landlord").prop('value', 'Submitted');
                                    _html =	"<div class='alert alert-success'><button aria-hidden='true' data-dismiss='alert' class='close' type='button'></button>"+jsonData[0]+"</div>";
                                    $('#result_message').html(_html);
                                    $('html, body').animate({ scrollTop: $("#result_message").offset().top }, 500);
                                    window.setTimeout('location.reload()', 5000);
                                }
                            }
                            else{
                                $("#ss-submit-landlord").prop('value', 'Submit');
                                _html =	"<div class='alert alert-danger'><button aria-hidden='true' data-dismiss='alert' class='close' type='button'></button>"+jsonData[0]+"</div>";
                                $('#result_message').html(_html);
                                $('html, body').animate({ scrollTop: $("#result_message").offset().top }, 500);
                            }
                        }
                });
			}
			else{
				alert("Some Information Missing.");
			}
            e.preventDefault();
		});
    
         //used in view/landlord.php
		 $("#ss-submit").click(function(e)
		 {
			CALLER           =	$.trim($('#callerId').val());
            NOTES            =	$.trim($('#entry_1145705666').val());
            APPLICANT_NAME   =	$.trim($('#entry_1796155459').val());
            ADDRESS	         =  $.trim($('#formatted_address').val());
			LAT		         =  $.trim($('#address_latitude').val());
			LON		         =  $.trim($('#address_longitude').val());
            ZIP		         =  $.trim($('#address_zip').val());
            NAME	         =  $.trim($('#entry_1479665104').val());
			PHONE	         =  $.trim($('#entry_559721990').val());
			RENT_COST        =  $.trim($('#entry_1911965995').val());
            SECURITY_COST    = $.trim($('#entry_1911965996').val());
            MOVEIN_COST      = $.trim($('#entry_1911965997').val());
            EMAIL	         =  $.trim($('#entry_748538924').val());
			UNIT_SELLING     =  $.trim($('#entry_140706325').val());
			
			var AGENT_OR_LANDLORD = "";
			var AGENT_OR_LANDLORD = $("input[type='radio'][name='entry.1813711793']:checked");
			if (AGENT_OR_LANDLORD.length > 0) {
				AGENT_OR_LANDLORD = AGENT_OR_LANDLORD.val();
			}
             			
			var BEDROOMS = "";
			var BEDROOMS = $("input[type='radio'][name='entry.688086806']:checked");
			if (BEDROOMS.length > 0) {
				BEDROOMS = BEDROOMS.val();
			}
			
            var FLEX_CREDIT  =  "";
            var FLEX_CREDIT  =  $("input[type='radio'][name='entry.883071900']:checked");
            if (FLEX_CREDIT.length > 0) {
                FLEX_CREDIT = FLEX_CREDIT.val();
            }

            var PETS = "";
            var PETS = $("input[type='radio'][name='entry.7589725']:checked");
            if (PETS.length > 0) {
                PETS = PETS.val();
            }
            
			var UTILITIES =	'';
			$("input:checkbox[name='entry.1379501930']:checked").each(function(){
				UTILITIES	+=	$(this).val()+','
			});
			UTILITIES = UTILITIES.substring(0,(UTILITIES.length-1));
			
			var FLOOR = "";
			var FLOOR = $("input[type='radio'][name='entry.98283592']:checked");
			if (FLOOR.length > 0) {
				FLOOR = FLOOR.val();
			}
			
			tempPhone	=	PHONE.replace(/[^0-9\s]/gi, '').replace(/[_\s]/g, '-');
			
			if(tempPhone.length < 10 || tempPhone.length > 10)
			{
				$('#entry_559721990').css('border','2px solid red');
				$('#phoneError').html('Phone should have 10 digits');
				$('#phoneError').css('display','block');
				$('html, body').animate({
					scrollTop: $("#entry_559721990").offset().top
				}, 1000);
				return;
			}
			else
			{
				$('#entry_559721990').css('border','');
				$('#phoneError').html('');
				$('#phoneError').css('display','none');
			}
            
			if(CALLER && AGENT_OR_LANDLORD && NAME && PHONE && ADDRESS && LAT && LON && ZIP && BEDROOMS && RENT_COST && 
               SECURITY_COST && MOVEIN_COST && UTILITIES && FLOOR && PETS && FLEX_CREDIT) {
                
                $("#ss-submit").prop('value', 'Submiting...');
                
				postData	=	'';
                postData	+=	'applicant_name='+APPLICANT_NAME;
                postData	+=	'&comment_about_landlord='+NOTES;
                postData	+=	'&renter_id_who_inserted='+CALLER;
                postData	+=	'&agent_or_landlord_type='+AGENT_OR_LANDLORD;
				postData	+=	'&landlord_name='+NAME;
				postData	+=	'&landlord_phone='+PHONE;
				postData	+=	'&address='+ADDRESS;
				postData	+=	'&lat='+LAT;
				postData	+=	'&long='+LON;
				postData	+=	'&zip='+ZIP;
				postData	+=	'&bedrooms='+BEDROOMS;
				postData	+=	'&rent='+RENT_COST;
				postData	+=	'&utilities='+UTILITIES;
				postData	+=	'&floor='+FLOOR;
				postData	+=	'&movein_amount='+MOVEIN_COST;
                postData	+=	'&security_amount='+SECURITY_COST;
				postData	+=	'&bathroom_storage_laundry='+UNIT_SELLING;
				postData	+=	'&pets='+PETS;
				postData	+=	'&flex_credit='+FLEX_CREDIT;
				postData	+=	'&landlord_email='+EMAIL;
				postData	+=	'&action=newrecord';
				
				$.ajax({
                        url: base_url+'view/customer_request.php',
                        data: postData,
                        type: 'post',
                        error: function(xhr, status, error)
                        {
                            console.log('status: '+status);
                            console.log('error: '+error);
                            $("#ss-submit").prop('value', 'Submit');
                            _html =	"<div class='alert alert-danger'><button aria-hidden='true' data-dismiss='alert' class='close' type='button'></button>Error in Saving Data</div>";
                            $('#result_message').html(_html);
                            window.scrollTo(0,0);
                        },
                        success: function(response)
                        {
                            console.log('response: '+response);
                            jsonData = $.parseJSON(response);
                            
                            if(jsonData[1] == 'success'){
                                $("#ss-submit").prop('value', 'Submitted');
                                _html =	"<div class='alert alert-success'><button aria-hidden='true' data-dismiss='alert' class='close' type='button'></button>"+jsonData[0]+"</div>";
                                $('#result_message').html(_html);
                                window.scrollTo(0,0);
                                window.setTimeout('location.reload()', 5000);
                            }
                            else{
                                $("#ss-submit").prop('value', 'Submit');
                                _html =	"<div class='alert alert-danger'><button aria-hidden='true' data-dismiss='alert' class='close' type='button'></button>"+jsonData[0]+"</div>";
                                $('#result_message').html(_html);
                                window.scrollTo(0,0);
                            }
                        }
                });
			}
			else{
				alert("Some Information Missing.");
			}
            e.preventDefault();
		});
});

function init() 
{
	var input = document.getElementById('entry_429103297');
	var options = {
		componentRestrictions: {'country':'us'},
		types: ['(regions)'] // (cities)
	  };

	var autocomplete = new google.maps.places.Autocomplete(input);
	autocomplete.setTypes([]);
	
	autocomplete.addListener
	(
		'place_changed', 
		function() 
		{
			var place = autocomplete.getPlace();
			if (!place.geometry) 
			{
				window.alert("Autocomplete's returned place contains no geometry");
				return;
			}

			if (place.geometry.viewport) 
			{
				console.log("place.geometry.viewport="+place.geometry.viewport);
			} 
			else 
			{
				console.log(place.geometry.location);
			}

			var address = '';
			var Zip	= '';
			if (place.address_components) 
			{
				address = 
				[
					(place.address_components[0] && place.address_components[0].short_name || ''),
					(place.address_components[1] && place.address_components[1].short_name || ''),
					(place.address_components[2] && place.address_components[2].short_name || '')
				].join(' ');
				console.log(place);
								
				var PlaceComp = place.address_components;
				for(i = 0;i< PlaceComp.length;i++)
				{
					if(PlaceComp[i].types)
					{
						var PlaceTypes = PlaceComp[i].types;
						for(j = 0;j< PlaceTypes.length;j++)
						{
							var PlaceType = PlaceTypes[j];
							if(PlaceType == 'postal_code')
							{
								Zip = PlaceComp[i].long_name;	//https://developers.google.com/maps/documentation/geocoding/intro
							}

							else if(PlaceType == 'neighborhood')
							{
								console.log('long_name = '+PlaceComp[i].long_name);
								console.log('short_name = '+PlaceComp[i].short_name);
							}
						}
					}
				}
				var Loc_Lat	= 0;
				var Loc_Lon	= 0;
				if (place.geometry) 
				{
					Loc_Lat = place.geometry.location.lat();
					Loc_Lon = place.geometry.location.lng();
				}
				
				document.getElementById("formatted_address").value = place.formatted_address;
				document.getElementById("address_latitude").value = Loc_Lat;
				document.getElementById("address_longitude").value = Loc_Lon;
				document.getElementById("address_zip").value = Zip;
				document.getElementById("entry_1813785563").value = Zip;
			}
		}
	);
}

window.onload = function(){
        
    //Check File API support
    if(window.File && window.FileList && window.FileReader)
    {
        var filesInput = document.getElementById("files");
        
		if(filesInput)
		{
			 filesInput.addEventListener("change", function(event){
            
				var files = event.target.files;
				var output = document.getElementById("result");
				output.innerHTML = "";
				
				for(var i = 0; i< files.length; i++)
				{
					var file = files[i];
					
					if(!file.type.match('image'))
					continue;
					
					var picReader = new FileReader();
					
					picReader.addEventListener("load",function(event){
						
						var picFile = event.target;
						
						var div = document.createElement("div");
						
						div.innerHTML = "<img class='thumbnail' src='" + picFile.result + "'" +
								"title='" + picFile.name + "'/>";
						
						output.insertBefore(div,null);            
					
					});
					
					picReader.readAsDataURL(file);
				}
			   
			});
		}
       
    }
    else
    {
        console.log("Your browser does not support File API");
    }
}