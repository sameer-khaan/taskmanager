jQuery(function($) {
	//start();
	
	$("body").on("click","#openHelp",function(e)
	{
		$(".helpTextBlock").toggle();
	});	
	
	$("body").on("click","#openPermissions",function(e)
	{
		start();
	});
	
	$(document).on("keyup","#toCustNumber",function(e)
	{
		var key = e.charCode || e.keyCode || 0;
		var phone = $(this);
		//alert(key)
		if (phone.val().length == 0) 
		{
			phone.val('(' +phone.val() );
		}
	
		// Auto-format- do not expose the mask as the user begins to type
		if (key !== 8 && key !== 9)
		{
			if (phone.val().length === 4)
			{
				phone.val(phone.val() + ')');
			}
			
			if (phone.val().length === 5)
			{
				phone.val(phone.val() + ' ');
			}
			
			
			
			if (phone.val().length === 9)
			{
				phone.val(phone.val() + '-');
			}
			if (phone.val().length > 14)
			{
				phone.val(phone.val().slice(0, 14));
			}
		}
		
		

		// Allow numeric (and tab, backspace, delete) keys only
		return (key == 8 ||
		key == 9 ||
		key == 46 ||
		(key >= 48 && key <= 57) ||
		(key >= 96 && key <= 105));
	});
	$("body").on("focus","#toCustNumber",function(e){
			phone = $(this);

			if (phone.val().length === 0) {
			phone.val('(');
			} else {
			var val = phone.val();
			phone.val('').val(val); // Ensure cursor remains at the end
			}
		});
	$("body").on("blur","#toCustNumber",function(e){
			$phone = $(this);

			if ($phone.val() === '(') {
			$phone.val('');
			}
		});


	/*$("body").on("keyup","#toCustNumber",function(e)
	{
		toNumber	=	$.trim($(this).val());
		
		if(toNumber.length < 14)
		{
			$("#toCustNumber").val(toNumber.replace(/^(\d{3})(\d{3})(\d)+$/, "($1) $2-$3"));
		}
		else
		{
			$("#toCustNumber").val(toNumber.substring(0, 14));
			 e.preventDefault();
		}
	});	*/
	
	$("body").click(function(e) {
        if ($(e.target).closest("#mySidenav, #openDialerLi, header").length)
		{
        
        }
		else
		{
           removeDialerFromDialerSlider();
        }
    });
	
	/*$("body").click(function(event) {
			// only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
			 if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible") ) {
				$('.navbar-collapse').collapse('toggle');
			}
	  });*/
	  
	$("#openDialerLi, #closeDialerLi, #disconnectCallLi").click(function() {
       $(".nav li").removeClass('active');
       $("#openDialerLi, #closeDialerLi, #disconnectCallLi").addClass('active');
    });
	
	$("body").on('click','.loadCallNowModal',function() 
	{
		removeDialerFromDialerSlider();
		
		customerNumberToCall	=	$(this).attr('customerNumber');
		
		customerNumberToCall	= customerNumberToCall.replace(/[^0-9]/gi, ''); // Replace everything that is not a number with nothing
		customerNumberToCall 	= customerNumberToCall.substring(customerNumberToCall.length - 10);
		customerNumberToCall	=	customerNumberToCall.replace(/(\d{3})\-?(\d{3})\-?(\d{4})/,'($1) $2-$3');;
		
		
		populateDialerModal(customerNumberToCall);
	});
	
	$("body").on('click','#populateDialer',function() 
	{
		populateDialer();
		
		$('#populateDialer').hide();
		$('#hideDialer').show();
	});
	
	$("body").on('click','#hideDialer',function() 
	{
		customerNumberToCall	=	$("#clone_toCustNumber").val();
		//customerNumberToCall = customerNumberToCall.replace(/[^0-9]/gi, ''); // Replace everything that is not a number with nothing
		//customerNumberToCall = customerNumberToCall.substring(customerNumberToCall.length - 10);
		//customerNumberToCall	=	customerNumberToCall.replace(/(\d{3})\-?(\d{3})\-?(\d{4})/,'($1) $2-$3');;
		
		
		$("#toCustNumber").val(customerNumberToCall);
		$("#clone_toCustNumber").val(customerNumberToCall);
		
		populateDialerDefaultButtons();
		
		$('#hideDialer').hide();
		$('#populateDialer').show();
	});
}); 

function populateDialerModal(customerNumberToCall)
{
	var dataString = {action:'getPvalineAdminNumbers'};
	
	$.ajax
		({
			type: "POST",
			url: base_url+"/agentteam/ajax.php",
			data: dataString,
			success: function(response) {
											response		=	$.parseJSON(response);
											options			=	'';
											
											if(response.length > 0)
											{
												$.each(response, function(key, value) {
													
													valueF	=	value.replace(/[^0-9]/gi, '');
													valueF 	=	valueF.substring(valueF.length - 10);
													valueF	=	valueF.replace(/(\d{3})\-?(\d{3})\-?(\d{4})/,'($1) $2-$3');;

													selected	=	'';
													if(value == "+12243608369")
													{
														selected	=	"selected='selected'";
													}
													
													options	+=	"<option value="+value+" "+selected+">"+valueF+"</option>";
													//options	+=	"<option value="+value+">"+valueF+"</option>";
												});
												
												
											}
											
											//-------mohit-24-july-2017-starts---------------//
											populateDialerModalHTML(options, customerNumberToCall);
											//-------mohit-24-july-2017-ends---------------//
										},
			error: function(e)
			{
				console.log('Error : Dialer For slider');
			}
		});
}

function populateDialerModalHTML(optionsCallFrom, customerNumberToCall)
{
	
	
	HTML	=	'<div class="modalss-dialog">\
					<div class="modalss-content">\
						<div class="modalss-body">\
							<div class="scroller" data-always-visible="1" data-rail-visible1="1">\
								<div class="row">\
									<div class="col-md-12">\
										<form class="" role="form" action="javascript:void(0)">\
											<div class="form-body">\
												<div class="form-group" >\
													<div class="row">\
														<div class="col-md-12">\
															<a href="javascript:void(0)" id="openPermissions" class="btn btn-default">\
																Microphone Permission\
															</a>\
															<a href="javascript:void(0)" id="openHelp" class="btn btn-default pull-right">\
																Help\
															</a>\
														</div>\
													</div>\
												</div>\
												<div class="form-group helpTextBlock" style="display:none; margin-bottom:0px !important;">\
													<div class="row">\
														<div class="col-md-12">\
															<span class="help-block" style="padding:5px">\
																<b>Notes:</b>\
																If you clicked the "Call" button and the call will not initiate, you may\
																need to change browser settings to allow '+base_url+' to access your computer`s microphone.\
															</span>\
														</div>\
													</div>\
												</div>\
												<div class="form-group">\
													<label style="text-align:center">Select a call from #</label>\
													<!--<div class="input-group">-->\
														<select class="form-control" id="fromTwilioNumber" >'
														+
														optionsCallFrom	
														+
														'\
														</select>\
														<!--<span class="input-group-addon">\
															<i class="fa fa-phone" aria-hidden="true" style="width:35px"></i>\
														</span>\
													</div>-->\
												</div>\
												<div class="form-group">\
													<label style="text-align:center">Call to #</label>\
													<div class="input-group">\
														<input type="text" id="toCustNumber" class="form-control" value="'+customerNumberToCall+'" >\
														<input type="hidden" id="clone_toCustNumber" value="'+customerNumberToCall+'">\
														<span class="input-group-addon">\
															<button type="button" onclick="eraseNumber()">\
																<img src="'+base_url+'/assets/assets_admin/img/backspace.png" width=18px>\
															</button>\
														</span>\
													</div>\
												</div>\
											</div>\
										</form>\
									</div>\
								</div>\
							</div>\
						</div>\
						<div class="modalss-footer">\
							<div class="form-group">\
								<div class="row">\
									<div class="col-md-12">\
										<div class="col-md-8">\
											<div id="showOutgoingCallTable" style="display:none">\
											</div>\
											<div id="defaultCallButtons">\
												<button type="button" class="btn btn-success btn-block " style=" border-radius: 100px !important; margin-right: 0;" id="button-call">\
													<i class="icon-phone"></i> Call\
												</button>\
												\
												<button type="button" class="btn btn-danger btn-block" style="display:none;border-radius: 100px !important; margin-right: 0;" id="button-hangup">\
													<i class="icon-remove"></i> Hangup\
												</button>\
											</div>\
										</div>\
										<div class="col-md-4" style="text-align:center">\
											<a class="btn btn-default" href="javascript:void(0)" id="populateDialer">\
												<img src="'+base_url+'/assets/assets_admin/img/dialer.png" width="20px" height="20px">\
												<br/>Dialer\
											</a>\
											<a class="btn btn-default" href="javascript:void(0)" id="hideDialer" style="display:none;">\
												<img src="'+base_url+'/assets/assets_admin/img/dialer.png" width="20px" height="20px">\
												<br/>Dialer\
											</a>\
										</div>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>\
				';
				
	
	
	
	$('#dialerSliderDiv').html('');
	
	$("#responsiveDialerPopup").html(HTML);
	$("#toCustNumber").focus();
}


function populateDialer()
{
	HTML	=	'<div class="row">\
					<div class="col-md-12 text-center">\
						<button type="button" class="btn-defaults dialer-button DTMFdigit" onclick="addNumber(1)"  digit="1">\
							1\
							<p style="font-size: 10px; ">\
							&nbsp\
							</p>\
						</button>\
						<button type="button" class="btn-defaults dialer-button DTMFdigit"  onclick="addNumber(2)"  digit="2">\
							2\
							<p style="font-size: 10px; ">\
							ABC\
							</p>\
						</button> \
						<button type="button" class="btn-defaults dialer-button DTMFdigit" onclick="addNumber(3)"  digit="3">\
							3\
							<p style="font-size: 10px; ">\
							DEF\
							</p>\
						</button> \
					</div>\
				</div>\
				<div class="row">\
					<div class="col-md-12 text-center">\
						<button type="button" class="btn-defaults dialer-button DTMFdigit" onclick="addNumber(4)"  digit="4">\
							4\
							<p style="font-size: 10px; ">\
							GHI\
							</p>\
						</button> \
						<button type="button" class="btn-defaults dialer-button DTMFdigit" onclick="addNumber(5)"  digit="5">\
							5\
							<p style="font-size: 10px; ">\
							JKL\
							</p>\
						</button> \
						\
						<button type="button" class="btn-defaults dialer-button DTMFdigit" onclick="addNumber(6)"  digit="6">\
							6\
							<p style="font-size: 10px; ">\
							MNO\
							</p>\
						</button>\
					</div>\
				</div>\
				<div class="row">\
					<div class="col-md-12 text-center">\
						<button type="button" class="btn-defaults dialer-button DTMFdigit" onclick="addNumber(7)"  digit="7">\
							7\
							<p style="font-size: 10px; ">\
							PQRS\
							</p>\
						</button>\
						<button type="button" class="btn-defaults dialer-button DTMFdigit" onclick="addNumber(8)"  digit="8">\
							8\
							<p style="font-size: 10px; ">\
							TUV\
							</p>\
						</button>\
						<button type="button" class="btn-defaults dialer-button DTMFdigit" onclick="addNumber(9)"  digit="9">\
							9\
							<p style="font-size: 10px; ">\
							WXYZ\
							</p>\
							</button>\
					</div>\
				</div>\
				<div class="row">\
					<div class="col-md-12 text-center">\
						<button type="button" class="btn-defaults dialer-button DTMFdigit"  digit="*">\
							<p style="" class="blackText">\
							*\
							</p>\
						</button>\
						<button type="button" class="btn-defaults dialer-button DTMFdigit" onclick="addNumber(0)"  digit="0">\
							0\
							<p style="font-size: 10px; ">\
							+\
							</p>\
						</button>\
						<button type="button" class="btn-defaults dialer-button DTMFdigit"  digit="#">\
							<p style="margin-top:0px" class="blackText">\
							#\
							</p>\
						</button>\
					</div>\
				</div>\
				<br/>\
				<div class="row" style="">\
					<div class="col-md-12 ">\
							<button type="button" class="btn btn-success btn-block " style=" border-radius: 100px !important; margin-right: 0; " id="button-call">\
								<i class="icon-phone"></i> Call\
							</button>\
							<button type="button" class="btn btn-danger btn-block" style="display:none;border-radius: 100px !important; margin-right: 0; " id="button-hangup">\
								<i class="icon-remove"></i> Hangup\
							</button>\
						</div>\
					</div>\
				</div>';
		
		//$(".outgoinListLi").css('background','');
		$("#toCustNumber").val('');
		
		
		
		
		$('#defaultCallButtons').html('');
		$('#showOutgoingCallTable').html(HTML);
		
		$('#showOutgoingCallTable').show();
		$('#defaultCallButtons').hide();
		$("#toCustNumber").focus();
}

function populateDialerDefaultButtons()
{
	HTML	=	'<button type="button" class="btn btn-success btn-block " style=" border-radius: 100px !important; margin-right: 0;" id="button-call">\
					<i class="icon-phone"></i> Call\
				</button>\
				<button type="button" class="btn btn-danger btn-block" style="display:none;border-radius: 100px !important; margin-right: 0;" id="button-hangup">\
					<i class="icon-remove"></i> Hangup\
				</button>';
				
	$('#showOutgoingCallTable').html('');
	$('#defaultCallButtons').html(HTML);
	
	$('#defaultCallButtons').show();
	$('#showOutgoingCallTable').hide();
}




function openDialerSlider() 
{
	$("#closeDialerLi").show();
	$("#openDialerLi").hide();
	$("#disconnectCallLi").hide();
	
	removeDialerFromDefaultPage();
	
	var dataString = {action:'getPvalineAdminNumbers'};
	
	$.ajax
		({
			type: "POST",
			url: base_url+"/agentteam/ajax.php",
			data: dataString,
			success: function(response) {
											response		=	$.parseJSON(response);
											options			=	'';
											
											if(response.length > 0)
											{
												$.each(response, function(key, value) {
													
													valueF	=	value.replace(/[^0-9]/gi, '');
													valueF 	=	valueF.substring(valueF.length - 10);
													valueF	=	valueF.replace(/(\d{3})\-?(\d{3})\-?(\d{4})/,'($1) $2-$3');;

													selected	=	'';
													if(value == "+12243608369")
													{
														selected	=	"selected='selected'";
													}
													
													options	+=	"<option value="+value+" "+selected+">"+valueF+"</option>";
												});
											}
											//-------mohit-24-july-2017-starts---------------//
											populateDialerInDialerSlider(options);
											
											if($("#mySidenav").length)
											{											
												document.getElementById("mySidenav").style.width = "250px";
												document.getElementById("contentDivPush").style.marginRight = "250px";
											}
											//-------mohit-24-july-2017-ends---------------//
										},
			error: function(e)
			{
				console.log('Error : Dialer For slider');
			}
		});
}

function populateDialerInDialerSlider(optionsCallFrom)
{
	HTML	=	'<div class="row">\
					<div class="col-md-12">\
						<form class="" role="form" action="javascript:void(0)">\
							<div class="form-body">\
								<div class="form-group" >\
									<div class="row">\
										<div class="col-md-12">\
											<a href="javascript:void(0)" id="openPermissions" class="btn btn-default pull-left">\
												Microphone Permission\
											</a>\
											<a href="javascript:void(0)" id="openHelp" class="btn btn-default pull-right">\
												Help\
											</a>\
										</div>\
									</div>\
								</div>\
								<div class="form-group helpTextBlock" style="display:none; margin-bottom:0px !important;">\
									<div class="row">\
										<div class="col-md-12">\
											<span class="help-block" style="padding:5px">\
												<b>Notes:</b>\
												If you clicked the "Call" button and the call will not initiate, you may\
												need to change browser settings to allow '+base_url+' to access your computer`s microphone.\
											</span>\
										</div>\
									</div>\
								</div>\
								<div class="form-group">\
									<label style="text-align:center">Select a call from #</label>\
									<!--<div class="input-group">-->\
										<select class="form-control" id="fromTwilioNumber" >'
										+
										optionsCallFrom	
										+
										'\
										</select>\
										<!--<span class="input-group-addon">\
											<i class="fa fa-phone" aria-hidden="true" style="width:35px"></i>\
										</span>\
									</div>-->\
								</div>\
								<div class="form-group">\
									<label style="text-align:center">Call to #</label>\
									<div class="input-group">\
										<input type="text" id="toCustNumber" class="form-control" value="" >\
										<input type="hidden" id="clone_toCustNumber" value="">\
										<span class="input-group-addon">\
											<button type="button" onclick="eraseNumber()">\
												<img src="'+base_url+'/assets/assets_admin/img/backspace.png" width=18px>\
											</button>\
										</span>\
									</div>\
								</div>\
							</div>\
						</form>\
						<!--<form class="" role="form" action="javascript:void(0)">\
							<div class="form-body">\
								<div class="form-group">\
									<div class="row">\
										<div class="col-md-12">\
											<div class="col-md-10">\
												<label style="text-align:center">Select a call from #</label>\
												<select class="form-control" id="fromTwilioNumber" >'
												+optionsCallFrom+
												'\
												</select>\
											</div>\
										</div>\
									</div>\
								</div>\
								\
								<div class="form-group">\
									<div class="row">\
										<div class="col-md-12">\
											<div class="col-md-10">\
												<label style="text-align:center">Call to #</label>\
												<input type="text" class="form-control" id="toCustNumber" >\
												<input type="hidden" id="clone_toCustNumber" value="">\
											</div>\
											<div class="col-md-2">\
												<label style="text-align:center">&nbsp;&nbsp;</label>\
												<button type="button" onclick="eraseNumber()" style="margin-top:2px">\
												<img src="'+base_url+'/assets/assets_admin/img/backspace.png" width=20px>\
												</button>\
											</div>\
										</div>\
									</div>\
								</div>\
							</div>\
						</form>-->\
					</div>\
				</div>\
				<div class="row">\
					<div class="col-md-12 text-center">\
						<button type="button" class=" btn-defaults dialer-button DTMFdigit" onclick="addNumber(1)"  digit="1">\
							1\
							<p style="font-size: 10px; ">\
							&nbsp\
							</p>\
						</button>\
						<button type="button" class=" btn-defaults dialer-button DTMFdigit"  onclick="addNumber(2)"  digit="2">\
							2\
							<p style="font-size: 10px; ">\
							ABC\
							</p>\
						</button> \
						<button type="button" class=" btn-defaults dialer-button DTMFdigit" onclick="addNumber(3)"  digit="3">\
							3\
							<p style="font-size: 10px; ">\
							DEF\
							</p>\
						</button> \
					</div>\
				</div>\
				<div class="row">\
					<div class="col-md-12 text-center">\
						<button type="button" class=" btn-defaults dialer-button DTMFdigit" onclick="addNumber(4)"  digit="4">\
							4\
							<p style="font-size: 10px; ">\
							GHI\
							</p>\
						</button> \
						<button type="button" class=" btn-defaults dialer-button DTMFdigit" onclick="addNumber(5)"  digit="5">\
							5\
							<p style="font-size: 10px; ">\
							JKL\
							</p>\
						</button> \
						\
						<button type="button" class=" btn-defaults dialer-button DTMFdigit" onclick="addNumber(6)"  digit="6">\
							6\
							<p style="font-size: 10px; ">\
							MNO\
							</p>\
						</button>\
					</div>\
				</div>\
				<div class="row">\
					<div class="col-md-12 text-center">\
						<button type="button" class=" btn-defaults dialer-button DTMFdigit" onclick="addNumber(7)"  digit="7">\
							7\
							<p style="font-size: 10px; ">\
							PQRS\
							</p>\
						</button>\
						<button type="button" class=" btn-defaults dialer-button DTMFdigit" onclick="addNumber(8)"  digit="8">\
							8\
							<p style="font-size: 10px; ">\
							TUV\
							</p>\
						</button>\
						<button type="button" class=" btn-defaults dialer-button DTMFdigit" onclick="addNumber(9)"  digit="9">\
							9\
							<p style="font-size: 10px; ">\
							WXYZ\
							</p>\
							</button>\
					</div>\
				</div>\
				<div class="row">\
					<div class="col-md-12 text-center">\
						<button type="button" class=" btn-defaults dialer-button  DTMFdigit"  digit="*">\
							<p class="blackText">\
							*\
							</p>\
						</button>\
						<button type="button" class=" btn-defaults dialer-button DTMFdigit" onclick="addNumber(0)"  digit="0">\
							0\
							<p style="font-size: 10px; ">\
							+\
							</p>\
						</button>\
						<button type="button" class=" btn-defaults dialer-button DTMFdigit" digit="#">\
							<p style="margin-top:0px" class="blackText">\
							#\
							</p>\
						</button>\
					</div>\
				</div>\
				<br/>\
				<div class="row" style=" padding: 0px 0 0px 0px;">\
					<div class="col-md-12 text-centers">\
							<button type="button" class="btn btn-success btn-lg btn-block" style=" border-radius: 100px !important; margin-right: 0; " id="button-call">\
								<i class="icon-phone"></i> Call\
							</button>\
							<button type="button" class="btn btn-danger btn-block" style="display:none;border-radius: 100px !important; margin-right: 0; " id="button-hangup">\
								<i class="icon-remove"></i> Hangup\
							</button>\
							<!--<button type="button" onclick="eraseNumber()">\
							<img src="'+base_url+'/assets/assets_admin/img/backspace.png" width=20px>\
							</button>-->\
						</div>\
					</div>\
				</div>\
				';
		
			
			$("#toCustNumber").val('');
			
			
			$('#dialerSliderDiv').html(HTML);
			$("#toCustNumber").focus();
}

function closeDialerSlider() 
{
	//if(confirm("Exit dialer will disconnect active call, do you wish to continue?"))
	//{
		$("#button-hangup").trigger('click');
		removeDialerFromDefaultPage();		
		removeDialerFromDialerSlider();
		
		$("#openDialerLi").show();
		$("#closeDialerLi").hide();
		$("#disconnectCallLi").hide();
	//}
}

function removeDialerFromDialerSlider()
{
	if($("#mySidenav").length)
	{
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("contentDivPush").style.marginRight = "0px";
			
		$('#dialerSliderDiv').html('');
		
		if($('#disconnectCallLi').is(":visible"))
		{
			
		}
		else
		{
			$("#openDialerLi").show();
			$("#closeDialerLi").hide();
			$("#disconnectCallLi").hide();
		}
	}
}

function removeDialerFromDefaultPage()
{
	$("#responsiveDialerPopup").html('');
}





function addNumber(digit)
{
	phone		=	$("#toCustNumber");
	
	toNumber	=	phone.val();
	
	phone		=	phone.val(toNumber+digit);
	
	
	if (phone.val().length == 1) 
	{
		phone.val('(' +phone.val() );
	}

	// Auto-format- do not expose the mask as the user begins to type
	
		if (phone.val().length === 4)
		{
			phone.val(phone.val() + ') ');
		}
		
		
		if (phone.val().length === 9)
		{
			phone.val(phone.val() + '-');
		}
		if (phone.val().length > 14)
		{
			phone.val(phone.val().slice(0, 14));
		}
}

function eraseNumber()
{
	toNumber	=	$.trim($("#toCustNumber").val());
	
	//$("#toCustNumber").val(toNumber.slice(0,-1));
	
	 if (window.getSelection)
	 {
        try
		{
			
            var ta = $("#toCustNumber").get(0);
            s	=  ta.value.substring(ta.selectionStart, ta.selectionEnd);
		  
			if(s)
			{
				s	=	toNumber.substring(0, ta.selectionStart) + "" + toNumber.substring(ta.selectionEnd);
				
				index	=	ta.selectionStart+1;
			}
			else
			{
				var index = document.getElementById('toCustNumber').selectionStart;
				s = toNumber.substr(0, index-1) + '' + toNumber.substr(index);
				
			}
        }
		catch (e)
		{
            console.log('Cant get selection text')
        }
    } 
	else
	{
		var index = document.getElementById('toCustNumber').selectionStart;
		s = toNumber.substr(0, index-1) + '' + toNumber.substr(index);
		
		
	}
	
	 $("#toCustNumber").val(s);
	 
	$("#toCustNumber").focus();
	$("#toCustNumber")[0].setSelectionRange(s.length, index-1);
}











function start()
{
	navigator.mediaDevices.getUserMedia
	({
		audio: true,
		// video: true
	}).then(gotStream).catch(logError);
    // startBtn.disabled = true;
}

function gotStream(stream)
{
	stream.getTracks().forEach(function (track) 
	{
		track.onended = function ()
		{
			//    startBtn.disabled = stream.active;
		};
	});
 }

 function logError(error) {
     log(error.name + ": " + error.message);
 }