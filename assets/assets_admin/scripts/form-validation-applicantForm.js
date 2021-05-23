var applicantForm = function () 
{

	
	 
    var pdfApplicantForm = function() {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation

            var form1 = $('#pdfApplicantForm');
            var error1 = $('.alert-danger', form1);
            var success1 = $('.alert-success', form1);

            form1.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'text-danger help-block', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
                    username: {
                        required: true
                    },
					dob1: {
                        required: true
                    },
					dob1_month: {
                        required: true
                    },
					dob1_date: {
						required: true
                    },
					dob1_year: {
						required: true
                    },
					ssn1: {
                        required: true,
                    },
                    
					add1: {
                        required: true
                    },
					rent1: {
                        //required: true
						 digits: true
                    },
					landlord1: {
                        required: function (element)
									{
										if($("#rent1").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					
					phone1: {
                         required: function (element)
									{
										if($("#rent1").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					from1: {
                         required: function (element)
									{
										if($("#rent1").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					to1: {
                        required: function (element)
									{
										if($("#rent1").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					
					add2: {
                         required: function (element)
									{
										if($("#rent2").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					rent2: {
                         required: function (element)
									{
										if($("#rent2").val() > 0){ return true; }
										else{ return false; }  
									},
						 digits: true
                    },
					landlord2: {
                         required: function (element)
									{
										if($("#rent2").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					
					phone2: {
                         required: function (element)
									{
										if($("#rent2").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					from2: {
                         required: function (element)
									{
										if($("#rent2").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					to2: {
                         required: function (element)
									{
										if($("#rent2").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					
					employer1: {
                         required: function (element)
									{
										if($("#netincome1").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					from3: {
                       required: function (element)
									{
										if($("#netincome1").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					to3: {
                        required: function (element)
									{
										if($("#netincome1").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					
					add3: {
                        required: function (element)
									{
										if($("#netincome1").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					phone3: {
                        required: function (element)
									{
										if($("#netincome1").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					position1: {
                        required: function (element)
									{
										if($("#netincome1").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					
					netincome1: {
                        //required: true,
						 digits: true
                    },
					current_previous_employer_current:{
                        /*required: function (element)
									{
										if($("#current_previous_employer_previous").is(':checked')){ return false; }
										else if($.trim($("#company1").val()) != ''){ return true; }
										else if($.trim($("#from4").val()) != ''){ return true; }
										else if($.trim($("#to4").val()) != ''){ return true; }
										else if($.trim($("#add4").val()) != ''){ return true; }
										else if($.trim($("#phone4").val()) != ''){ return true; }
										else if($.trim($("#position2").val()) != ''){ return true; }
										else if($.trim($("#netincome2").val()) != ''){ return true; }
										else{ return false; }  
									}*/
                    },
					current_previous_employer_previous:{
                        /*required: function (element)
									{
										if($("#current_previous_employer_current").is(':checked')){ return false; }
										else if($.trim($("#company1").val()) != ''){ return true; }
										else if($.trim($("#from4").val()) != ''){ return true; }
										else if($.trim($("#to4").val()) != ''){ return true; }
										else if($.trim($("#add4").val()) != ''){ return true; }
										else if($.trim($("#phone4").val()) != ''){ return true; }
										else if($.trim($("#position2").val()) != ''){ return true; }
										else if($.trim($("#netincome2").val()) != ''){ return true; }
										else{ return false; }  
									}*/
                    },
					company1: {
                       /* required: function (element)
									{
										if($("#current_previous_employer_current").is(':checked'))
										{
											return true;                          
										}
										else if($("#current_previous_employer_previous").is(':checked'))
										{
											return true;                          
										}
										else
										{
											return false;
										}  
									}*/
						required: function (element)
									{
										if($("#netincome2").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					from4: {
                        /*required: function (element)
									{
										if($("#current_previous_employer_current").is(':checked'))
										{
											return true;                          
										}
										else if($("#current_previous_employer_previous").is(':checked'))
										{
											return true;                          
										}
										else
										{
											return false;
										}  
									}*/
						required: function (element)
									{
										if($("#netincome2").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					to4: {
                        /*required: function (element)
									{
										if($("#current_previous_employer_current").is(':checked'))
										{
											return true;                          
										}
										else if($("#current_previous_employer_previous").is(':checked'))
										{
											return true;                          
										}
										else
										{
											return false;
										}  
									}*/
						required: function (element)
									{
										if($("#netincome2").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					add4: {
                        /*required: function (element)
									{
										if($("#current_previous_employer_current").is(':checked'))
										{
											return true;                          
										}
										else if($("#current_previous_employer_previous").is(':checked'))
										{
											return true;                          
										}
										else
										{
											return false;
										}  
									}*/
						required: function (element)
									{
										if($("#netincome2").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					phone4: {
                        /*required: function (element)
									{
										if($("#current_previous_employer_current").is(':checked'))
										{
											return true;                          
										}
										else if($("#current_previous_employer_previous").is(':checked'))
										{
											return true;                          
										}
										else
										{
											return false;
										}  
									}*/
						required: function (element)
									{
										if($("#netincome2").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					position2: {
                       /* required: function (element)
									{
										if($("#current_previous_employer_current").is(':checked'))
										{
											return true;                          
										}
										else if($("#current_previous_employer_previous").is(':checked'))
										{
											return true;                          
										}
										else
										{
											return false;
										}  
									}*/
						required: function (element)
									{
										if($("#netincome2").val() > 0){ return true; }
										else{ return false; }  
									}
                    },
					netincome2: {
                      /*  required: function (element)
									{
										if($("#current_previous_employer_current").is(':checked'))
										{
											return true;                          
										}
										else if($("#current_previous_employer_previous").is(':checked'))
										{
											return true;                          
										}
										else
										{
											return false;
										}  
									}*/
						 digits: true
                    },
					co_applicant_signer_applicant:{
                        required: function (element)
									{
										if($("#co_applicant_signer_signer").is(':checked')){ return false; }
										else if($.trim($("#username2").val()) != ''){ return true; }
										else if($.trim($("#dob2").val()) != ''){ return true; }
										else if($.trim($("#ssn2").val()) != ''){ return true; }
										else if($.trim($("#add5").val()) != ''){ return true; }
										else{ return false; }  
									}
                    },
					co_applicant_signer_signer:{
                        required: function (element)
									{
										if($("#co_applicant_signer_applicant").is(':checked')){ return false; }
										else if($.trim($("#username2").val()) != ''){ return true; }
										else if($.trim($("#dob2").val()) != ''){ return true; }
										else if($.trim($("#ssn2").val()) != ''){ return true; }
										else if($.trim($("#add5").val()) != ''){ return true; }
										else{ return false; }  
									}
                    },
					username2: {
                        required: function (element)
									{
										if($("#co_applicant_signer_applicant").is(':checked'))
										{
											return true;                          
										}
										else if($("#co_applicant_signer_signer").is(':checked'))
										{
											return true;                          
										}
										else
										{
											return false;
										}  
									}
                    },
					dob2: {
                        required: function (element)
									{
										if($("#co_applicant_signer_applicant").is(':checked'))
										{
											return true;                          
										}
										else if($("#co_applicant_signer_signer").is(':checked'))
										{
											return true;                          
										}
										else
										{
											return false;
										}  
									}
                    },
					ssn2: {
                        required: function (element)
									{
										if($("#co_applicant_signer_applicant").is(':checked'))
										{
											return true;                          
										}
										else if($("#co_applicant_signer_signer").is(':checked'))
										{
											return true;                          
										}
										else
										{
											return false;
										}  
									}
                    },
					add5: {
                        required: function (element)
									{
										if($("#co_applicant_signer_applicant").is(':checked'))
										{
											return true;                          
										}
										else if($("#co_applicant_signer_signer").is(':checked'))
										{
											return true;                          
										}
										else
										{
											return false;
										}  
									}
                    },
					rent3: {
                        //required: true
                    },
					landlord3: {
                        //required: true
                    },
					phone5: {
                       // required: true
                    },
					from5: {
                       // required: true
                    },
					to5: {
                        //required: true
                    },
					add6: {
                       // required: true
                    },
					rent4: {
                       // required: true
                    },
					landlord4: {
                        //required: true
                    },
					phone6: {
                        //required: true
                    },
					from6: {
                        //required: true
                    },
					to6: {
                        //required: true
                    },
					employer2: {
                        //required: true
                    },
					from7: {
                       // required: true
                    },
					to7: {
                        //required: true
                    },
					add7: {
                        //required: true
                    },
					phone7: {
                        //required: true
                    },
					position3: {
                        //required: true
                    },
					netincome3: {
                        //required: true
                    },
					current_previous_employer2_current:{
                       /* required: function (element)
									{
										if($("#current_previous_employer2_previous").is(':checked')){ return false; }
										else if($.trim($("#company2").val()) != ''){ return true; }
										else if($.trim($("#from8").val()) != ''){ return true; }
										else if($.trim($("#to8").val()) != ''){ return true; }
										else if($.trim($("#add8").val()) != ''){ return true; }
										else if($.trim($("#phone8").val()) != ''){ return true; }
										else if($.trim($("#position4").val()) != ''){ return true; }
										else if($.trim($("#netincome4").val()) != ''){ return true; }
										else{ return false; }  
									}*/
                    },
					current_previous_employer2_previous:{
                       /* required: function (element)
									{
										if($("#current_previous_employer2_current").is(':checked')){ return false; }
										else if($.trim($("#company2").val()) != ''){ return true; }
										else if($.trim($("#from8").val()) != ''){ return true; }
										else if($.trim($("#to8").val()) != ''){ return true; }
										else if($.trim($("#add8").val()) != ''){ return true; }
										else if($.trim($("#phone8").val()) != ''){ return true; }
										else if($.trim($("#position4").val()) != ''){ return true; }
										else if($.trim($("#netincome4").val()) != ''){ return true; }
										else{ return false; }  
									}*/
                    },
					company2: {
                       /* required: function (element)
									{
										if($("#current_previous_employer2_current").is(':checked'))
										{
											return true;                          
										}
										else if($("#current_previous_employer2_previous").is(':checked'))
										{
											return true;                          
										}
										else
										{
											return false;
										}  
									}*/
                    },
					from8: {
                        /*required: function (element)
									{
										if($("#current_previous_employer2_current").is(':checked'))
										{
											return true;                          
										}
										else if($("#current_previous_employer2_previous").is(':checked'))
										{
											return true;                          
										}
										else
										{
											return false;
										}  
									}*/
                    },
					to8: {
                        /*required: function (element)
									{
										if($("#current_previous_employer2_current").is(':checked'))
										{
											return true;                          
										}
										else if($("#current_previous_employer2_previous").is(':checked'))
										{
											return true;                          
										}
										else
										{
											return false;
										}  
									}*/
                    },
					add8: {
                        /*required: function (element)
									{
										if($("#current_previous_employer2_current").is(':checked'))
										{
											return true;                          
										}
										else if($("#current_previous_employer2_previous").is(':checked'))
										{
											return true;                          
										}
										else
										{
											return false;
										}  
									}*/
                    },
					phone8: {
                        /*required: function (element)
									{
										if($("#current_previous_employer2_current").is(':checked'))
										{
											return true;                          
										}
										else if($("#current_previous_employer2_previous").is(':checked'))
										{
											return true;                          
										}
										else
										{
											return false;
										}  
									}*/
                    },
					position4: {
                        /*required: function (element)
									{
										if($("#current_previous_employer2_current").is(':checked'))
										{
											return true;                          
										}
										else if($("#current_previous_employer2_previous").is(':checked'))
										{
											return true;                          
										}
										else
										{
											return false;
										}  
									}*/
                    },
					netincome4: {
                        /*required: function (element)
									{
										if($("#current_previous_employer2_current").is(':checked'))
										{
											return true;                          
										}
										else if($("#current_previous_employer2_previous").is(':checked'))
										{
											return true;                          
										}
										else
										{
											return false;
										}  
									}*/
                    },
					refName1: {
                        required: true
                    },
					refName1Phone: {
                        required: true
                    },
					refName1Relationship: {
                        required: true
                    },
					refName2: {
                        required: true
                    },
					refName2Phone: {
                        required: true
                    },
					refName2Relationship: {
                        required: true
                    },
					applicantSign1: {
                        required: true
                    },
					condition1_new: {
						required: true
					},
					condition1: {
						required: true
					},
					condition2: {
						required: true
					},
					condition3: {
						required: true
					},
					condition4_2: {
						required: true
					},
					condition6: {
						required: true
					},
					approval_weeks: {
						required: true
					},
					r_bedrooms: {
						required: true
					},
					condition_bathroom: {
						required: true
					},
					r_people: {
						required: true
					},
					r_cat: {
						required: true
					},
					r_dog: {
						required: true
					}, 
					r_rent: {
						required: true
					}, 
					r_zips: {
						required: true
					}, 
					how_long_looking: {
						required: true
					}, 
					why_to_move: {
						required: true
					},
					r_text1: {
						required: true
					},
					condition8_new: {
						required: true
					},
					condition4_1: {
						required: true
					},
					condition4_1_new: {
						required: true
					},
					condition8: {
						required: true
					},
					condition10_init: {
						required: true
					},
					condition5_1: {
						required: true
					},
					condition5_2: {
						required: true
					},
					condition5: {
						required: true
					},
					condition6_3: {
						required: true
					},
					condition7: {
						required: true
					},
					condition6_2: {
						required: true
					},
					condition6_4: {
						required: true
					},
					condition16_new: {
						required: true
					},
					condition17_new: {
						required: true
					},
					condition18_new: {
						required: true
					},
					condition19_new: {
						required: true
					},
					condition4_3: {
						required: true
					},
					condition20_new: {
						required: true
					},
					applicantSign2: {
						required: true
					},
					coapplicantsign2: {
						required: function (element)
									{
										if($("#co_applicant_signer_applicant").is(':checked'))
										{
											return true;                          
										}
										else if($("#co_applicant_signer_signer").is(':checked'))
										{
											return true;                          
										}
										else
										{
											return false;
										}  
									}
					},
					applicantsign2:{
						required: true
					}
                },

                invalidHandler: function (event, validator) { //display error alert on form submit              
                    success1.hide();
                    error1.show();
                    App.scrollTo(error1, -200);
                },

                highlight: function (element) { // hightlight error inputs
                  //  $(element)
                  //      .closest('.form-group').addClass('has-error'); // set error class to the control group
					  $(element).parent().removeClass('has-success').addClass('has-error');
				 $(element).closest('#form-group-checkboxCurrentOrPreviousEmp').addClass('has-error');
				 $(element).closest('#form-group-checkbox2ndRenterOrCoSigner').addClass('has-error');
				 $(element).closest('#form-group-checkboxCurrentOrPreviousEmp2').addClass('has-error');
					
                },

                unhighlight: function (element) { // revert the change done by hightlight
                   // $(element)
                   //     .closest('.form-group').removeClass('has-error'); // set error class to the control group
						$(element).parent().removeClass('has-error');
						
						  $(element).closest('#form-group-checkboxCurrentOrPreviousEmp').removeClass('has-error');
						 $(element).closest('#form-group-checkbox2ndRenterOrCoSigner').removeClass('has-error');
						 $(element).closest('#form-group-checkboxCurrentOrPreviousEmp2').removeClass('has-error');
						  $(element).siblings('.input-group-addon').addClass( "customBackground" );	
                },

                success: function (label) {
                    label
                        .closest('.form-group').removeClass('has-error'); // set success class to the control group
                },
				
				messages:{
					
                    username: {
                        required: "Name is required"
                    },
					dob1: {
                        required: "Date of birth is required"
                    },
					dob1_month: {
                        required: "Month of birth is required"
                    },
					dob1_date: {
                        required: "Date of birth is required"
                    },
					dob1_year: {
                        required: "Year of birth is required"
                    },
					ssn1: {
                        required: "SSN is required",
                    },
                    
					add1: {
                        required: "Address is required"
                    },
					rent1: {
                        required: "Rent is required"
                    },
					landlord1: {
                        required: "Landlord Name is required"
                    },
					
					phone1: {
                       required: "Phone is required"
                    },
					from1: {
                        required:  "From is required"
                    },
					to1: {
                        required:  "To is required"
                    },
					
					add2: {
                        required: "Address is required"
                    },
					rent2: {
                        required: "Rent is required"
                    },
					landlord2: {
                        required: "Landlord Name is required"
                    },
					
					phone2: {
                       required: "Phone is required"
                    },
					from2: {
                       required:  "From is required"
                    },
					to2: {
                        required:  "To is required"
                    },
					
					employer1: {
                       required:  "Current employer name is required"
                    },
					from3: {
                        required:  "From is required"
                    },
					to3: {
                         required:  "To is required"
                    },
					
					add3: {
                       required: "Address is required"
                    },
					phone3: {
                        required: "Phone is required"
                    },
					position1: {
                         required: "Position is required"
                    },
					
					netincome1: {
                        required: "Net income is required"
                    },
					current_previous_employer_current: {
                        required: "Please select checkbox"
                    },
					current_previous_employer_previous: {
                        required: "Please select checkbox"
                    },
					co_applicant_signer_applicant:{
                        required: "Please select checkbox"
                    },
					co_applicant_signer_signer:{
                        required: "Please select checkbox"
                    },
					company1: {
                         required: "Company name is required"
                    },
					from4: {
                        required:  "From is required"
                    },
					to4: {
                        required:  "To is required"
                    },
					add4: {
                        required: "Address is required"
                    },
					phone4: {
                        required: "Phone is required"
                    },
					position2: {
                       required: "Position is required"
                    },
					netincome2: {
                        required: "Net income is required"
                    },
					username2: {
                        required: "Name is required"
                    },
					dob2: {
                       required: "Date of birth is required"
                    },
					ssn2: {
                        required: "SSN is required"
                    },
					add5: {
                        required: "Address is required"
                    },
					rent3: {
                        required: "Rent is required"
                    },
					landlord3: {
                       required: "Name is required"
                    },
					phone5: {
                      required: "Phone is required"
                    },
					from5: {
                       required: "From is required"
                    },
					to5: {
                        required: "To is required"
                    },
					add6: {
                       required: "Address is required"
                    },
					rent4: {
                       required: "Rent is required"
                    },
					landlord4: {
                       required: "Name is required"
                    },
					phone6: {
                        required: "Phone is required"
                    },
					from6: {
                        required: "From is required"
                    },
					to6: {
                        required: "To is required"
                    },
					employer2: {
                       required: "Employer name is required"
                    },
					from7: {
                       required: "From is required"
                    },
					to7: {
                        required: "To is required"
                    },
					add7: {
                        required: "Address is required"
                    },
					phone7: {
                        required: "Phone is required"
                    },
					position3: {
                        required: "Position is required"
                    },
					netincome3: {
                        required: "Net income is required"
                    },
					current_previous_employer2_current: {
                        required: "Please select checkbox"
                    },
					current_previous_employer2_previous: {
                        required: "Please select checkbox"
                    },
					company2: {
                        required: "Company name is required"
                    },
					from8: {
                        required: "From is required"
                    },
					to8: {
                        required: "To is required"
                    },
					add8: {
                        required: "Address is required"
                    },
					phone8: {
                       required: "Phone is required"
                    },
					position4: {
                        required: "Position is required"
                    },
					netincome4: {
                        required: "Net income is required"
                    },
					refName1: {
                        required: "Name is required"
                    },
					refName1Phone: {
                        required: "Phone is required"
                    },
					refName1Relationship: {
                        required: "Relationship is required"
                    },
					refName2: {
                        required: "Name is required"
                    },
					refName2Phone: {
                         required: "Phone is required"
                    },
					refName2Relationship: {
                        required: "Relationship is required"
                    },
					applicantSign1: {
                        required: "Renter signature is required"
                    },
					condition1_new: {
						required: "Initial required"
					},
					condition1: {
						required: "Initial required"
					},
					condition2: {
						required: "Initial required"
					},
					condition3: {
						required: "Initial required"
					},
					condition4_2: {
						required: "Initial required"
					},
					condition6: {
						required: "Initial required"
					},
					approval_weeks: {
						required: "Weeks required"
					},
					r_bedrooms: {
						required: "Bedroom required"
					},
					condition_bathroom: {
						required: "Bathroom required"
					},
					r_people: {
						required: "Occupants required"
					},
					r_cat: {
						required: "Cats required"
					},
					r_dog: {
						required: "Dogs required"
					},
					r_rent: {
						required: "Rent required"
					},
					r_zips: {
						required: "Zips required"
					},
					how_long_looking: {
						required: "Weeks required"
					},
					why_to_move: {
						required: "Reason required"
					},
					r_text1: {
						//required:  "Describe any difficulty"
					},
					condition8_new: {
						required: "Initial required"
					},
					condition4_1: {
						required: "Initial required"
					},
					condition4_1_new: {
						required: "Initial required"
					},
					condition8: {
						required: "Initial required"
					},
					condition10_init: {
						required: "Initial required"
					},
					condition5_1: {
						required: "Initial required"
					},
					condition5_2: {
						required: "Dollar required"
					},
					condition5: {
						required: "Initial required"
					},
					condition6_3: {
						required: "Initial required"
					},
					condition7: {
						required: "Initial required"
					},
					condition6_2: {
						required: "Initial required"
					},
					condition6_4: {
						required: "Initial required"
					},
					condition16_new: {
						required: "Initial required"
					},
					condition17_new: {
						required: "Initial required"
					},
					condition18_new: {
						required: "Initial required"
					},
					condition19_new: {
						required: "Initial required"
					},
					condition4_3: {
						required: "Initial required"
					},
					condition20_new: {
						required: "Initial required"
					},
					applicantSign2: {
						required: "Renter signature required"
					},
					coapplicantsign2: {
						required: "Co-Renter signature required"
					},
					applicantsign2:{
						required: "Renter signature required"
					}
				},
				 errorPlacement: function (error, element) { // render error placement for each input type
                   
				    if (element.attr("name") == "r_bedrooms" ||
					element.attr("name") == "condition_bathroom" ||
					element.attr("name") == "r_people" ||
					element.attr("name") == "r_cat" ||
					element.attr("name") == "r_dog" ) 
					{
                        error.insertAfter("#spanSC1");
                    }
					
					else if (element.attr("name") == "r_rent") 
					{
                        error.insertAfter("#spanSC2");
                    }
					
					else if (element.attr("name") == "r_zips") 
					{
                        error.insertAfter("#spanSC3");
                    }
					
					else if (element.attr("name") == "how_long_looking" ||
					element.attr("name") == "approval_weeks" ) 
					{
                        error.insertAfter("#spanSC4");
                    }
					
					else if (element.attr("name") == "r_text1") 
					{
                        error.insertAfter("#spanSC5");
                    }
					
					else if (element.attr("name") == "condition4_1" ||
					element.attr("name") == "condition4_1_new" ) 
					{
                        error.insertAfter("#condition8error");
                    }
					
					else if (element.attr("name") == "current_previous_employer_current" ||
					element.attr("name") == "current_previous_employer_previous" ) 
					{
                        error.insertAfter("#checkboxCurrentOrPreviousEmp");
                    }
					
					else if (element.attr("name") == "co_applicant_signer_applicant" ||
					element.attr("name") == "co_applicant_signer_signer" ) 
					{
                        error.insertAfter("#checkbox2ndRenterOrCoSigner");
                    }
					
					else if (element.attr("name") == "current_previous_employer2_current" ||
					element.attr("name") == "current_previous_employer2_previous" ) 
					{
                        error.insertAfter("#checkboxCurrentOrPreviousEmp2");
                    }
					else if (element.attr("name") == "condition6" ) 
					{
                        error.insertAfter("#spanC6");
                    }
					
					else if (element.attr("name") == "condition5_1" ||
					element.attr("name") == "condition5_2" ) 
					{
                        error.insertAfter("#spanC9");
                    }
					
					else
					{
						error.insertAfter(element.parent());
					}
					 $(element).siblings('.input-group-addon').removeClass( "customBackground" );	
                       
                   $(element).siblings('.input-group-addon').css( "background-color", "#f2dede" );
                },

                submitHandler: function (form) {
				//	$('#pdfApplicantForm').submit();
					
                    success1.show();
                    error1.hide();
					$(':focus').blur();
					
					$('input[type=text], textarea, select').blur();
					
					
					$('#pdfApplicantForm')[0].submit();
                }
            });


    }

	var rulesForInputArrays = function() {
		
		$('[name*="rent2_more["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					digits: true
				})
			});
			
		$('[name*="add2_more["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='rent2_more["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Address is required"
					}
				})
			});
			
		$('[name*="landlord2_more["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='rent2_more["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Landlord name is required"
					}
				})
			});
			
		$('[name*="phone2_more["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='rent2_more["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Phone is required"
					}
				})
			});
			
		$('[name*="from2_more["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='rent2_more["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "From is required"
					}
				})
			});
			
		$('[name*="to2_more["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='rent2_more["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "To is required"
					}
				})
			});
			
		
		$('[name*="netincome1_more["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					digits: true,
				})
			});
			
		$('[name*="cosigner_rent["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					digits: true,
				})
			});
			
		$('[name*="previous_landlord_rent["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					digits: true,
				})
			});
			
		$('[name*="current_employer_netincome["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					digits: true,
				})
			});
			
		$('[name*="cosigner_signature["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: true,
					messages: {
						required: "Signature is required"
					}
				})
			});
		
		$('[name*="cosigner_signature_date["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: true,
					messages: {
						required: "Date is required"
					}
				})
			});
			
		$('[name*="previous_employer_netincome["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					digits: true,
				})
			});
			
		$('[name*="employer1_more["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='netincome1_more["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Employer name is required"
					}
				})
			});
			
		$('[name*="from3_more["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='netincome1_more["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "From is required"
					}
				})
			});
			
		$('[name*="to3_more["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='netincome1_more["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "To is required"
					}
				})
			});
		
		$('[name*="add3_more["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='netincome1_more["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Address is required"
					}
				})
			});
			
		$('[name*="phone3_more["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='netincome1_more["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Phone is required"
					}
				})
			});
			
		$('[name*="position1_more["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='netincome1_more["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Position is required"
					}
				})
			});
			
		$('[name*="company1_more["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='netincome2_more["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Company name is required"
					}
				})
			});
			
		$('[name*="from4_more["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='netincome2_more["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "From is required"
					}
				})
			});
			
		$('[name*="to4_more["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='netincome2_more["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "To is required"
					}
				})
			});
			
		$('[name*="add4_more["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='netincome2_more["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Address is required"
					}
				})
			});
			
			
		$('[name*="phone4_more["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='netincome2_more["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Phone is required"
					}
				})
			});
			
		$('[name*="position2_more["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='netincome2_more["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Position is required"
					}
				})
			});
			
		$('[name*="cosigner_username["]').each(function() {
				$(this).rules('add', {
					required: true,
					messages: {
						required: "Name is required"
					}
				})
			});
			
			
			$('[name*="cosigner_dob_month["]').each(function() {
				$(this).rules('add', {
					required: true,
					messages: {
						required: "Month of birth is required"
					}
				})
			});
			
			$('[name*="cosigner_dob_date["]').each(function() {
				$(this).rules('add', {
					required: true,
					messages: {
						required: "Date of birth is required"
					}
				})
			});
			
			$('[name*="cosigner_dob_year["]').each(function() {
				$(this).rules('add', {
					required: true,
					messages: {
						required: "Year of birth is required"
					}
				})
			});
			
			$('[name*="cosigner_ssn["]').each(function() {
				$(this).rules('add', {
					required: true,
					messages: {
						required: "SSN is required"
					}
				})
			});
			
			$('[name*="cosigner_add["]').each(function() {
				$(this).rules('add', {
					required: true,
					messages: {
						required: "Address is required"
					}
				})
			});
			
			$('[name*="cosigner_landlord["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='cosigner_rent["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Landlord Name is required"
					}
				})
			});
			
			$('[name*="cosigner_landlord_phone["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='cosigner_rent["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Phone is required"
					}
				})
			});
			
			$('[name*="cosigner_landlord_from["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='cosigner_rent["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "From is required"
					}
				})
			});
			
			$('[name*="cosigner_landlord_to["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='cosigner_rent["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "To is required"
					}
				})
			});
			
			$('[name*="previous_landlord_add["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='previous_landlord_rent["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Address is required"
					}
				})
			});
			
			$('[name*="previous_landlord_name["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='previous_landlord_rent["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Landlord name is required"
					}
				})
			});
			
			$('[name*="previous_landlord_phone["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='previous_landlord_rent["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Phone is required"
					}
				})
			});
			
			$('[name*="previous_landlord_from["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='previous_landlord_rent["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "From is required"
					}
				})
			});
			
			$('[name*="previous_landlord_to["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='previous_landlord_rent["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "To is required"
					}
				})
			});
			
			$('[name*="current_employer["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='current_employer_netincome["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Employer Name is required"
					}
				})
			});
			
			$('[name*="current_employer_from["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='current_employer_netincome["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "From is required"
					}
				})
			});
			
			$('[name*="current_employer_to["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='current_employer_netincome["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "To is required"
					}
				})
			});

			$('[name*="current_employer_add["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='current_employer_netincome["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Address is required"
					}
				})
			});
			
			$('[name*="current_employer_phone["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='current_employer_netincome["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Phone is required"
					}
				})
			});
			
			$('[name*="current_employer_position["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='current_employer_netincome["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Position is required"
					},
					
				})
			});
			
			$('[name*="previous_employer["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='previous_employer_netincome["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Company Name is required"
					}
				})
			});
			
			$('[name*="previous_employer_from["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='previous_employer_netincome["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "From is required"
					}
				})
			});
			
			$('[name*="previous_employer_to["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='previous_employer_netincome["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "To is required"
					}
				})
			});
			
			$('[name*="previous_employer_add["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='previous_employer_netincome["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Address is required"
					}
				})
			});
			
			$('[name*="previous_employer_phone["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='previous_employer_netincome["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Phone is required"
					}
				})
			});
			
			$('[name*="previous_employer_position["]').each(function() {
				_thisUniqueNum	=	$(this).attr('uniqueNum');
				
				$(this).rules('add', {
					required: ($("[name='previous_employer_netincome["+_thisUniqueNum+"]']").val() > 0),
					messages: {
						required: "Position is required"
					}
				})
			});
	};
	
    return {
        //main function to initiate the module
        init: function () {

           // handleWysihtml5();
            pdfApplicantForm();
           // handleValidation2();

		    rulesForInputArrays();
        }

    };

}();



$('document').ready(function()
{
	$("body").on('keyup',".phone", "#phone1, #phone2, #phone3, #phone4, #phone5, #phone6, #phone7, #phone8, #refName1Phone, #refName2Phone, [id^=phone2_], [id^=phone3_], [id^=phone4_], [id^=phone6_], [id^=phone7_], [id^=phone8_]",function() 
	{
		//$(this).val($(this).val().replace(/(\d{3})(\d{3})(\d{4})\-?/g,'($1) $2-$3'));
		
		var val = this.value.replace(/\D/g, '');
		var newVal = '';
		
		if(val.length > 4)
		{
			this.value = val;
		}
		
		if((val.length > 3))
		{
			newVal += '(' + val.substr(0, 3) + ') ';
			val = val.substr(3);
		}
		
		if((val.length > 3))
		{
			newVal +=  val.substr(0, 3) + '-';
			val = val.substr(3);
		}
		
		newVal += val;
		this.value = newVal.substring(0, 14);
	});
	
	$("body").on('keyup',".SSN", "#ssn1, #ssn2",function(event) 
	{
		if($(this).val().length == $(this).attr('maxlength')) {
			$(this).next().focus();
		}
		/*var val = this.value.replace(/\D/g, '');
		var newVal = '';
		if(val.length > 4)
		{
			this.value = val;
		}
		
		if((val.length > 3) && (val.length < 6))
		{
			newVal += val.substr(0, 3) + '-';
			val = val.substr(3);
		}
		
		if (val.length > 5)
		{
			newVal += val.substr(0, 3) + '-';
			newVal += val.substr(3, 2) + '-';
			val = val.substr(5);
		}
		
		newVal += val;
		this.value = newVal.substring(0, 11);

			//$(this).val($(this).val().replace(/(\d{3})(\d{2})(\d{4})\-?/g,'$1-$2-$3'));*/
		
	});
	
	$("body").on('change',"#r_rent",function(event) 
	{
		$("#condition4-1-new").val($("#r_rent").val());
	});
	
	
	$("body").on('change',"input, textarea, select",function(event) 
	{
		var postData			=	{};
		pdf_user_id				=	$("#pdf_user_id").val();
		postData['pdf_user_id']	=	pdf_user_id;
		fieldName				=	$(this).attr('name');
		postData[fieldName]		=	$(this).val();
		/*postData['r_bedrooms']	=	$('#r_bedrooms').val();
		postData['condition_bathroom']		=	$('#condition_bathroom').val();
		//postData['r_people']	=	$('#r_people').val();
		postData['r_people']	=	$('#adults').val()+'a, '+$('#kids').val()+'c';
		postData['r_cat']		=	$('#r_cat').val();
		postData['r_dog']		=	$('#r_dog').val();
		postData['r_rent']		=	$('#r_rent').val();
		postData['condition4_1_new']		=	$('#condition4-1-new').val();*/
		
		
		
		var uniqueNum 			=	$(this).attr('uniqueNum');
		var coSignerUniqueNum	=	$(this).attr('coSignerUniqueNum');

		
		if (typeof uniqueNum !== typeof undefined && uniqueNum !== false)
		{
			delete postData[fieldName]; 
			 
			fieldName	=	fieldName.substring(0,fieldName.indexOf("["));
			
			postData[fieldName]			=	$(this).val();
			postData['uniqueNum']		=	uniqueNum;
			postData['postToTable']		=	$(this).attr('postToTable');
			
			if (typeof coSignerUniqueNum !== typeof undefined && coSignerUniqueNum !== false)
			{
				postData['cosigner_uniqueNum']		=	coSignerUniqueNum;
			}
			
			
			if($(this).hasClass('date-picker'))
			{
				dte			=	$(this).val();
				dteSplit	=	dte.split("/");
				yr			=	dteSplit[2];
				month		=	dteSplit[0];
				day			=	dteSplit[1];
				
				postData[fieldName] = yr + '-' + month + '-' + day;
			}
			
			if(fieldName == 'cosigner_dob_month' || fieldName == 'cosigner_dob_date' || fieldName == 'cosigner_dob_year' )
			{
				delete postData[fieldName]; 
				fieldName	=	'cosigner_dob';
				
				_dob1Year	=	$('#cosigner_dob_year_'+uniqueNum).val();
				_dob1Month	=	$('#cosigner_dob_month_'+uniqueNum).val();
				_dob1Date	=	$('#cosigner_dob_date_'+uniqueNum).val();

				
				if(_dob1Year == '' || _dob1Month == '' || _dob1Date == '')
				{
					postData[fieldName]	=	'NULL';
				}
				else
				{
					postData[fieldName]	=	_dob1Year + '-' + _dob1Month + '-'+ _dob1Date;
				}
			}
			
			if(fieldName == 'cosigner_signature')
			{
				uniqueNumber			=	$(this).attr('uniqueNum');
				coSignerSignatureField	=	$(this).attr('name');
				coSignerSignatureValue	=	$(this).val();
				$('input[name="'+coSignerSignatureField+'"]').val(coSignerSignatureValue);
				$('input[name="cosigner_signature['+uniqueNumber+']"]').val(coSignerSignatureValue);
				$('input[name="cosigner_signature['+uniqueNumber+uniqueNumber+']"]').val(coSignerSignatureValue);
			}
			
			if(fieldName == 'renter_type')
			{
				uniqueNumber			=	$(this).attr('uniqueNum');
				coSignerSignatureField	=	$(this).attr('name');
				rtype					=	$(this).val();
				
				if(rtype == 'renter')
					$('.signatureLabel'+uniqueNumber).text('Signature of Co-Renter');
				else
					$('.signatureLabel'+uniqueNumber).text('Signature of Co-Signer');
			}
			
			//--------cosigner-checks--------------------------//
			
			if(fieldName.indexOf("cosigner_ssn") === 0)
			{
				
				delete postData[fieldName]; 
				fieldName			=	'cosigner_ssn';
				part1				=	$('#cosigner_ssn_'+uniqueNum).val();
				part2				=	$('#cosigner_ssn_'+uniqueNum+'_part2').val();
				part3				=	$('#cosigner_ssn_'+uniqueNum+'_part3').val();
				
				postData[fieldName]	=	(part1+'-'+part2+'-'+part3);
			}
			//--------cosigner-checks--------------------------//
			
			$.ajax
			({
				type: "post",
				url: "post_multipleData.php",
				data: postData,
				beforeSend: function() {
					$('#applicant_form_submit').text('Please wait while the values are being saved');
					$('#applicant_form_submit').attr('disabled','true');
				},
				error: function(response) {
				  alert("This field input didn't save. Please reload your browser and try again");
				},
				success: function(response) 
				{
					console.log(postData);
					console.log(response);
					applicantForm.init();
					
					$('#applicant_form_submit').text('Send Pdf Document');
					$('#applicant_form_submit').removeAttr('disabled');
				}
			});
		}
		else
		{
			postData['username']	=	$('#username').val();
			postData['r_bedrooms']	=	$('#r_bedrooms').val();
			postData['condition_bathroom']		=	$('#condition_bathroom').val();
			//postData['r_people']	=	$('#r_people').val();
			postData['r_people']	=	$('#adults').val()+'a, '+$('#kids').val()+'c';
			postData['r_cat']		=	$('#r_cat').val();
			postData['r_dog']		=	$('#r_dog').val();
			postData['r_rent']		=	$('#r_rent').val();
			postData['cat_dog_under_45']				=	$('#cat_dog_under_45').val();
			postData['cat_dog_under_45_points']			=	$('#cat_dog_under_45').attr('multiplyWith');
			postData['dog_over_45']						=	$('#dog_over_45').val();
			postData['dog_over_45_points']				=	$('#dog_over_45').attr('multiplyWith');
			postData['low_credit']						=	$('#low_credit').val();
			postData['low_credit_points']				=	$('#low_credit').attr('multiplyWith');
			postData['bankruptcy']						=	$('#bankruptcy').val();
			postData['bankruptcy_points']				=	$('#bankruptcy').attr('multiplyWith');
			postData['criminal_within_5_years']			=	$('#criminal_within_5_years').val();
			postData['criminal_within_5_years_points']	=	$('#criminal_within_5_years').attr('multiplyWith');
			postData['criminal_after_5_years']			=	$('#criminal_after_5_years').val();
			postData['criminal_after_5_years_points']	=	$('#criminal_after_5_years').attr('multiplyWith');
			postData['no_rental_history']				=	$('#no_rental_history').val();
			postData['no_rental_history_points']		=	$('#no_rental_history').attr('multiplyWith');
			postData['unstable_work_history']			=	$('#unstable_work_history').val();
			postData['unstable_work_history_points']	=	$('#unstable_work_history').attr('multiplyWith');
			postData['special_service']					=	$('#special_service').val();
			postData['special_service_points']			=	$('#special_service_points').val();
			
			if($(this).hasClass('date-picker'))
			{
				dte			=	$(this).val();
				dteSplit	=	dte.split("/");
				yr			=	dteSplit[2];
				month		=	dteSplit[0];
				day			=	dteSplit[1];
				
				postData[fieldName] = yr + '-' + month + '-' + day;
			}
			
			//-------------checkbox-change----------------------//
			if(fieldName == 'current_previous_employer_current')
			{
				delete postData[fieldName]; 
				fieldName	=	'current_previous_employer';
				
				if($("#current_previous_employer_current").is(':checked')){	postData[fieldName]	=	$(this).val(); }
				else
				{
					if($("#current_previous_employer_previous").is(':checked')){ postData[fieldName]	=	$("#current_previous_employer_previous").val(); }
					else{ postData[fieldName]		=	'';	}
				}
			}
			if(fieldName == 'current_previous_employer_previous')
			{
				delete postData[fieldName]; 
				fieldName	=	'current_previous_employer';
				
				if($("#current_previous_employer_previous").is(':checked')){ postData[fieldName]	=	$(this).val(); }
				else
				{
					if($("#current_previous_employer_current").is(':checked')){ postData[fieldName]	=	$("#current_previous_employer_current").val(); }
					else{ postData[fieldName]		=	'';	}
				}
			}
			
			if(fieldName == 'co_applicant_signer_applicant')
			{
				delete postData[fieldName]; 
				fieldName	=	'co_applicant_signer';
				
				if($("#co_applicant_signer_applicant").is(':checked')){	postData[fieldName]	=	$(this).val(); }
				else
				{	
					if($("#co_applicant_signer_signer").is(':checked')){ postData[fieldName]	=	$("#co_applicant_signer_signer").val(); }
					else{ postData[fieldName]		=	'';	}
				}
			}
			if(fieldName == 'co_applicant_signer_signer')
			{
				delete postData[fieldName]; 
				fieldName	=	'co_applicant_signer';
				
				if($("#co_applicant_signer_signer").is(':checked')){ postData[fieldName]	=	$(this).val(); }
				else
				{	
					if($("#co_applicant_signer_applicant").is(':checked')){ postData[fieldName]	=	$("#co_applicant_signer_applicant").val(); }
					else{ postData[fieldName]		=	'';	}
				}
			}
			
			if(fieldName == 'current_previous_employer2_current')
			{
				delete postData[fieldName]; 
				fieldName	=	'current_previous_employer2';
				
				if($("#current_previous_employer2_current").is(':checked')){	postData[fieldName]	=	$(this).val(); }
				else
				{	
					if($("#current_previous_employer2_previous").is(':checked')){ postData[fieldName]	=	$("#current_previous_employer2_previous").val(); }
					else{ postData[fieldName]		=	'';	}
				}
			}
			if(fieldName == 'current_previous_employer2_previous')
			{
				delete postData[fieldName]; 
				fieldName	=	'current_previous_employer2';
				
				if($("#current_previous_employer2_previous").is(':checked')){ postData[fieldName]	=	$(this).val(); }
				else
				{	
					if($("#current_previous_employer2_current").is(':checked')){ postData[fieldName]	=	$("#current_previous_employer2_current").val(); }
					else{ postData[fieldName]		=	'';	}
				}
			}
			//-------------checkbox-change----------------------//
			
			
			
			//--------fieldName-checks--------------------------//
			if(fieldName == 'adults' || fieldName == 'kids' )
			{
				delete postData[fieldName]; 
				fieldName	=	'r_people';
				
				postData[fieldName]	=	$('#adults').val()+'a, '+$('#kids').val()+'c';
			}
			
			if(fieldName == 'dob1_month' || fieldName == 'dob1_date' || fieldName == 'dob1_year' )
			{
				delete postData[fieldName]; 
				fieldName	=	'dob1';
				
				_dob1Year	=	$('#dob1-year').val();
				_dob1Month	=	$('#dob1-month').val();
				_dob1Date	=	$('#dob1-date').val();
				
				if(_dob1Year == '' || _dob1Month == '' || _dob1Date == '')
				{
					postData[fieldName]	=	'NULL';
				}
				else
				{
					postData[fieldName]	=	_dob1Year + '-' + _dob1Month + '-'+ _dob1Date;
				}
			}
			//--------fieldName-checks--------------------------//
			
			//--------ssn-checks--------------------------//
			
			if(fieldName == 'ssn1' || fieldName == 'ssn1_part2' || fieldName == 'ssn1_part3' )
			{
				delete postData[fieldName]; 
				fieldName			=	'ssn1';
				postData[fieldName]	=	($('#ssn1').val()+'-'+$('#ssn1_part2').val()+'-'+$('#ssn1_part3').val());
			}
			//--------ssn-checks--------------------------//
			
			$.ajax
			({
				type: "post",
				url: "post.php",
				data: postData,
				beforeSend: function() {
					$('#applicant_form_submit').text('Please wait while the values are being saved');
					$('#applicant_form_submit').attr('disabled','true');
				},
				error: function(response) {
				  alert("This field input didn't save. Please reload your browser and try again");
				},
				success: function(response) 
				{
					console.log(response);
					applicantForm.init();
					
					$('#applicant_form_submit').text('Send Pdf Document');
					$('#applicant_form_submit').removeAttr('disabled');
				}
			});
		}
		
		
	});
})