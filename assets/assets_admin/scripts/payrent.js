$(document).on("click",'ul#property_search_list li',function(e){
	var property = $(this).attr('data-value');
	var propertyarr = property.split('-');	
	$('#propertysearchid').val(propertyarr[0]);
	$('#property_search').val(propertyarr[1]);	
	$('ul#property_search_list').hide();
});

$(function() {
    if ( document.location.href.indexOf('#payrent') > -1 ) {
        $('#Search').removeClass("active");
        $("#rentcol").tabs({ active:1 });
        $('#payrent').addClass("active");
    }
});

$('#landlord_email').click(function(ev) 
{	 
	$('#property_search').val('');
});

$('#property_search').click(function(ev) 
{	 
	 $('#landlord_email').val('');
});

$(document).mouseup(function(e) 
{
    var container = $("ul#property_search_list");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});

$(document).on("click",'#altemailsub',function(e){
	var url = base_url + 'ajax_landlord.php';
	var altmail = $('#alternate_email').val();
	var lid = $('#landlord_id').val();
	$.ajax({
			type: 'post',
			url: url,
			data: {'action':'addaltemail','altemail':altmail,'lid':lid}, 
			success: function(reply) {
					$('#alternate_email').val(''); 
					$('.sucalt').show(); 
					setTimeout(function(){ $('.sucalt').hide(); $('#addemail').modal('hide')}, 5000);
			}
	});
	
});

$(document).on("click",'#searchbtn',function(e){
	var propertysearchid  =  $('#propertysearchid').val();
	var property_search  =  $('#property_search').val();
	$("#landlord_mobile").mask("999-999-9999");
	var landlord_mobile = $('#landlord_mobile').cleanVal();
	if(landlord_mobile==''){
		$('#landlord_mobile').parent().addClass("has-error");
		return false;
	}else{
		$('#landlord_mobile').parent().removeClass("has-error");
	}
	var re = /(\w+)\@(\w+)\.[a-zA-Z]/g;
	var landlord_email = $("#landlord_email").val();
	
	var testEmail = re.test(landlord_email);
	if(landlord_email!=''){
		if(!testEmail){
			$('#landlord_email').parent().addClass("has-error");
			return false;
		} else {
			$('#landlord_email').parent().removeClass("has-error");
		}		
	}
	
	if(landlord_email=='' && propertysearchid==''){
		$('#landlord_email').parent().addClass("has-error");
		$('#property_search').parent().addClass("has-error");
		return false;
	}else{
		$('#landlord_email').parent().removeClass("has-error");
		$('#property_search').parent().removeClass("has-error");
	}	
	var url = base_url + 'ajax_landlord.php';
		$.ajax({
			type: 'post',
			url: url,
			data: {'action':'getlandlord','landlord_mobile':landlord_mobile,'landlord_email':landlord_email,'propertysearchid':propertysearchid}, 
			success: function(reply) { 
				if(reply==2){
					if(confirm("No Landlord record found. Want to create new landlord?"))
					{
						window.location = base_url+'view/landlord.php';
					}
					return false;
				}else{
					var arr_reply = reply.split('--');
					if(arr_reply[0]==3){
						if(confirm("No properties exist, Want to add property for landlord?"))
						{
						window.location = base_url+'view/customer_request.php?action=add_property&landlord_id='+arr_reply[1];
						}
						return false;
					}else if(arr_reply[0]==0 && arr_reply[1]==0){
						alert('The phone number doesn\'t match with landlord records. Try another phone number.');
						return false;
					}else if(arr_reply[0]==0 && arr_reply[1]>0){
						$("#landlord_id").val(arr_reply[1]);
						$('#alternate_email').val(landlord_email); 
						$('#addemail').modal('show'); 
						return false;
					}					
					
					$("#landlord_name").val(arr_reply[2]);
					$("#landlord_id").val(arr_reply[1]);
					$('#propertyid').val(arr_reply[3]);
					$('#property_name').val(arr_reply[4]);
					$('#step3').show();
					var url = base_url + 'ajax_landlord.php'
					$.ajax({
						type: 'post', url: url,	data: {'action':'getunits','propertyid': arr_reply[3]}, 
						success: function(reply) { 		
							$("#unit_name").html(reply);
							$("#propery_unit_div").removeClass("hide");
						  
						}
					});			 
				}
			}
		}); 	
});
$(document).on("click",'ul#property_list li',function(e){
	var property = $(this).attr('data-value');
	var propertyarr = property.split('-');
	
	$('#propertyid').val(propertyarr[0]);
	$('#property_name').val(propertyarr[1]);
	$('#propertyzip').val(propertyarr[2]);

	$('ul#property_list').hide();
		var url = base_url + 'ajax_landlord.php'
		$.ajax({
			type: 'post',
			url: url,
			data: {'action':'getunits','propertyid':propertyarr[0]}, 
			success: function(reply) { 		
				$("#unit_name").html(reply);
				$("#propery_unit_div").removeClass("hide");
			  
			}
		}); 
}); 

var Login = function () {
$('.editpay').click(function(ev) 
{		
	var row_id = $(this).attr('data-id');
	 $("#labelpayrent"+row_id).hide();
	 $("#label_paydate"+row_id).hide();
	  $("#edit"+row_id).hide();
	 $("#landlord_amount_edit"+row_id).show();
	 $("#landlord_pay_date_edit"+row_id).show();
	 $("#cancel"+row_id).show();
	 $("#update_edit"+row_id).show();
});

$('.cancel_edit').click(function(ev) 
{	 
	var row_id = $(this).attr('dataid'); 
	 $("#labelpayrent"+row_id).show();
	 $("#label_paydate"+row_id).show();
	  $("#edit"+row_id).show();
	 $("#landlord_amount_edit"+row_id).hide();
	 $("#landlord_pay_date_edit"+row_id).hide();
	 $("#cancel"+row_id).hide(); 
	 $("#update_edit"+row_id).hide(); 
});
$('#defaultset').click(function(e){ 
	if ($(this).is(':checked')==false) {
		var url = base_url + 'ajax_landlord.php'; 
		var renter_id = $("#renter_id").val();
	   $.ajax({
			type: "POST",
			url : url, 
			data:  {"action": "removedefault","renter_id":renter_id} ,
			success: function(reply){  
				if(reply == "1"){
					location.reload();
				}
			}
	   });		
	}
});
$('.edit_renter').click(function(ev) 
{	 
	var row_id = $(this).attr('data-rec'); 
	var record_id = $("#record_id"+row_id).val(); 
	  var url = base_url + 'ajax_landlord.php'; 
	   $.ajax({
			type: "POST",
			url : url, 
			data:  {"record_updation": record_id} ,
			success: function(reply){  
				if(reply == "1"){
					location.reload();
				}else{
					alert('Please try again.');
					
				}
			}
	   });
});
// $('#landlord_mobile').on('input', function() {
  // $(this).val($(this).val().replace(/[^0-9]/gi, ''));
// });
$('#landlord_mobile').keyup(function(ev){
	
	$("#landlord_mobile").mask("999-999-9999");
	var landlord_mobile = $('#landlord_mobile').cleanVal();
	
	if(parseInt(landlord_mobile.length) == 10){
		$('#step2').removeClass('hide');
	}
});
$('#property_search').keyup(function(ev) 
{
	$("#landlord_mobile").mask("999-999-9999");
	var landlord_mobile = $('#landlord_mobile').cleanVal();	
	var property = $("#property_search").val();
	if(property.length>2)
	{
		var url = base_url + 'ajax_landlord.php'; 
		$.ajax({
			type: "POST",
			url : url, 
			data:  {"action": "getproperty","key_value": property,"lno":landlord_mobile} ,
			success: function(reply){ 
				if(reply!=0){
					$("#property_search_list").html(reply);
					$("#property_search_list").show();					
				}
			}
		});
	}
});
$('#property_name').keyup(function(ev) 
{
	var property = $("#property_name").val();
	var landlord_id = $("#landlord_id").val();
	$("#landlord_mobile").mask("999-999-9999");
	var landlord_mobile = $('#landlord_mobile').cleanVal();		
	if(landlord_id==0){
		alert("Please choose or add landlord first");
		$("#property_name").val('');
		return false;
	}
	if(property.length>2)
	{
		var url = base_url + 'ajax_landlord.php'; 
		$.ajax({
			type: "POST",
			url : url, 
			data:  {"action": "getproperty","key_value": property,"landlord_id": landlord_id,"lno":landlord_mobile} ,
			success: function(reply){ 
				if(reply!=0){
					$("#property_list").html(reply);
					$("#property_list").show();					
				}

			}
		});
	}
});
$('#renter_name').keyup(function(ev) 
{
	  var key_value = $("#renter_name").val();
	  $("#renter_id").val(0);
	  if($.isNumeric(key_value)){
		  var tlen = 9;
	  }else{
		  var tlen = 2;
	  }
	  if(key_value.length==0){
		  $("#names_renter").hide();
	  }
	  if(key_value.length>tlen){
	  var url = base_url + 'ajax_landlord.php'; 
	   $.ajax({
			type: "POST",
			url : url, 
			data:  {"renter_Search": key_value} ,
			success: function(reply){ 
				$("#names_renter").html(reply);
				$("#names_renter").show();
			}
	   });
	  }
});
var handleRegister = function () {   
         $('.customer-rent-form').validate({ 
	            errorElement: 'span', //default input error message container
	            errorClass: 'help-block', // default input error message class
	            focusInvalid: false, // do not focus the last invalid input
	            ignore: "",
	            rules: {
					landlord_mobile: {
							required: function(element){ return $('#landlord_id').val()<= 1 },
								},
					property_name:{
						 required: function(element){ return $('#landlord_id').val()<= 1 },
					},
					unit_name:{
						 required: function(element){ return $('#landlord_id').val()<= 1 },
					},					
					
					daterange:{
									required: true,
								  },
					renter_payment_date:{
									required: true,
								  },
					payment_mode:{
									required: true 
								  },
	                rent_amount: {
	                    required: true, 
						number:true
	                },
	                names_property: {
	                    required: true
	                },
					rent_proof: {
	                    required: function(element){ return $("#rent_proof_hidden").val().length <= 0; } 
	                },
					 
	            },

	            messages: { // custom messages for radio buttons and checkboxes
					landlord_mobile: {
	                    required: "Please enter phone number",
	                },
					property_name: {
	                    required: "Please enter property address",
	                },
					unit_name: {
	                    required: "Please choose unit",
	                },					
					daterange:{
						required: "Please choose date" 
							},
					 payment_mode: {
						required: "Please choose one payment mode", 
	                },
					renter_payment_date: {
						required: "Please choose date", 
	                },
	                rent_amount: {
	                    required: "Rent amount is required.",
	                },
					rent_proof: {
						required: "Proof upload is required." 
									},
					names_property: {
						required: "Please choose property." 
									}, 
	            },

	            invalidHandler: function (event, validator) { //display error alert on form submit   

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
	                if (element.attr("name") == "tnc") { // insert checkbox errors after the container                  
	                    error.insertAfter($('#register_tnc_error'));
	                } else if (element.closest('.input-icons').size() === 1) {
	                    error.insertAfter(element.closest('.input-icons'));
	                } else {
	                	error.insertAfter(element);
	                }
	            },

	            submitHandler: function (form) {
	                form.submit();
	            }
	        }); 
	} 
	var handleRentLandlord = function () {   
         $('.landlord-rent-form').validate({ 
	            errorElement: 'span', //default input error message container
	            errorClass: 'help-block', // default input error message class
	            focusInvalid: false, // do not focus the last invalid input
	            ignore: "",
	            rules: {
					 renter_id: {
	                    required: true,
						min: 1
	                },
					 
					daterange_form:{
									required: true,
								  },
					landlordpayment_date:{
									required: true,
								  },
					payment_mode:{
									required: true 
								  },
	                rent_amount: {
	                    required: true, 
						number:true
	                },
	                names_property: {
	                    required: true
	                }
	            },

	            messages: { // custom messages for radio buttons and checkboxes
					renter_id: {
	                    required: "Please choose name from list",
	                    min: "Please choose name from list"
	                },
					daterange_form:{
									required: "Please choose date" 
								  },
					 payment_mode: {
						required: "Please choose one payment mode", 
	                },
					landlordpayment_date: {
						required: "Please choose date", 
	                },
	                rent_amount: {
	                    required: "Rent amount is required.",
	                },
					
					names_property: {
						required: "Please choose property." 
									}, 
	            },

	            invalidHandler: function (event, validator) { //display error alert on form submit   

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
	                if (element.attr("name") == "tnc") { // insert checkbox errors after the container                  
	                    error.insertAfter($('#register_tnc_error'));
	                } else if (element.closest('.input-icons').size() === 1) {
	                    error.insertAfter(element.closest('.input-icons'));
	                } else {
	                	error.insertAfter(element);
	                }
	            },

	            submitHandler: function (form) {
	                form.submit();
	            }
	        }); 
	} 
	
	
return {
        //main function to initiate the module
        init: function () {
			handleRentLandlord();
            handleRegister();        
        }

    };
	}();