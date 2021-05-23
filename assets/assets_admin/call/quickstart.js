$(function () {
  //log('Requesting Capability Token...');
  _callStartTime	=	'';
  _callEndTime		=	'';
  _customerNumber	=	'';
  _twilioNumber		=	'';
  _callSourcePage	=	'';
  connection		=	'';
  
  if($("#dialedCallSource").length)  
  {
	_callSourcePage	=	$("#dialedCallSource").val();
  }
  
  $.getJSON(base_url+'agentteam/config/token.php')
    .done(function (data) {
      //log('Got a token.');
      //console.log('Token: ' + data.token);

      // Setup Twilio.Device
      Twilio.Device.setup(data.token);

      Twilio.Device.ready(function (device) {
        log('Twilio.Device Ready!');
       // document.getElementById('call-controls').style.display = 'block';
      });

      Twilio.Device.error(function (error) {
        log('Twilio.Device Error: ' + error.message);
      });

      Twilio.Device.connect(function (conn) {
        log('Successfully established call!');
        document.getElementById('button-call').style.display = 'none';
        document.getElementById('button-hangup').style.display = '';
		
		var dt = new Date();
		var DateTime =  (dt.getMonth()+1)+ "/"
						+  dt.getDate()  + "/" 
						+ dt.getFullYear() + "  "  
						+ dt.getHours() + ":"  
						+ dt.getMinutes() + ":" 
						+ dt.getSeconds();
						
		 _callStartTime	=	DateTime;
		 
		 connection	=	conn;
		 
      });

      Twilio.Device.disconnect(function (conn) {
        log('Call ended.');
		if($('#button-call').length)
		{
			document.getElementById('button-call').style.display = '';
			document.getElementById('button-hangup').style.display = 'none';
            console.log(conn.status);
		}
		
		var dt = new Date();
		var DateTime =  (dt.getMonth()+1) + "/"
						+ dt.getDate()  + "/" 
						+ dt.getFullYear() + "  "  
						+ dt.getHours() + ":"  
						+ dt.getMinutes() + ":" 
						+ dt.getSeconds();
						
		 _callEndTime	=	DateTime;
		 
		 makeNotes(_customerNumber, _twilioNumber, _callStartTime, _callEndTime, _callSourcePage);
		 
		$("#openDialerLi").show();
		$("#closeDialerLi").hide();
		$("#disconnectCallLi").hide();
      });

      Twilio.Device.incoming(function (conn) {
		   connection	=	conn;
		   
        log('Incoming connection from ' + conn.parameters.From);
        var archEnemyPhoneNumber = '+12099517118';

        if (conn.parameters.From === archEnemyPhoneNumber) {
          conn.reject();
          log('It\'s your nemesis. Rejected call.');
        } else {
          // accept the incoming connection and start two-way audio
          conn.accept();
        }
      });

      setClientNameUI(data.identity);
    })
    .fail(function () {
      log('Could not get a token from server!');
    });

  // Bind button to make call
  
  $('body').on('click','#button-call',function () {
	  
	  customerNumber	=	$("#toCustNumber").val();
	  twilioNumber		=	$("#fromTwilioNumber").val();
	  
	  _customerNumber	=	customerNumber;
	  _twilioNumber		=	twilioNumber;
	  
		if(twilioNumber == '')
		{
			alert("Call From number Id");
			return false;
		}
		else if(customerNumber == '')
		{
			alert("Call To number missing");
			return false;
		}
		else
		{
            if(confirm("Call is being recorded for quality control and training purpose")){
				
				//------mohit-13-jan-2018-start----------//
				tenxLoggedInPersonId	=	0;
				
				if($(".tenxLoggedInPersonId").length > 0)
				{
					tenxLoggedInPersonId	=	$(".tenxLoggedInPersonId").val();	
				}
				//------mohit-13-jan-2018-end---------//
				
                // get the phone number to connect the call to
                var params = {
                                To: customerNumber,
                                From: twilioNumber,
								tenxUserId: tenxLoggedInPersonId
                            };

                console.log('Calling ' + params.To + '...');

                Twilio.Device.connect(params);

                $("#openDialerLi").hide();
                $("#closeDialerLi").hide();
                $("#disconnectCallLi").show();
            }
		}
  });
  
  $('body').on('click','#button-hangup, #disconnectCallLi',function () {
	log('Hanging up...');
    Twilio.Device.disconnectAll();
	
	$("#openDialerLi").show();
	$("#closeDialerLi").hide();
	$("#disconnectCallLi").hide();
	
	//location.reload();
  });
  
   $('body').on('click','.DTMFdigit',function () 
   {
	   digit	=	$(this).attr('digit');
	   
		 if (connection != null && connection != '')
          connection.sendDigits(digit);
   });
});


function log(message) {
  console.log(message)
}


function setClientNameUI(clientName) {

}

function makeNotes(_customerNumber, _twilioNumber, _callStartTime, _callEndTime, _callSourcePage)
{
	var dataString = {action:'dialerNotes', customerNumber: _customerNumber, twilioNumber : _twilioNumber, callStartTime: _callStartTime, callEndTime: _callEndTime, callSourcePage: _callSourcePage};
	console.log(dataString);
    
	$.ajax({
        type: "POST",
        url: base_url+"/agentteam/ajax.php",
        data: dataString,
        //contentType: "application/json; charset=utf-8",
        //dataType: "json",
        success: function(response) {
            console.log('Success');
            if(_callSourcePage == 'userdata_page'){
                load_notes();
                console.log('Notes loaded with Ajax');
            }
			else if(_callSourcePage == 'nofasttrack_page'){
				_customerNumber = _customerNumber.replace(" ", "");
				_customerNumber = _customerNumber.replace("+", "");
				_customerNumber = _customerNumber.replace("(", "");
				_customerNumber = _customerNumber.replace(")", "");
				_customerNumber = _customerNumber.replace("-", "");
                load_notes_nofasttrack(_customerNumber);
                console.log('Notes loaded with Ajax');
            }
            else{
                window.location.reload();
            }
        },
        error: function(e) {
            console.log('Error');
        }
    });
}