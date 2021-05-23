$(document).ready(function() {   
	
	$(document.body).on('click','.deleteUnitAssets',function(e){
		 
		_unitId	=	$(this).attr('unit-id');

		if(confirm("Are you sure to delete this file?"))

		{

			deleteUnitAssets(base_url,_unitId);

		}

	});

	$("body").on("mouseover", '.landlordNotesBox', function () {
		 $(this).removeClass("icon-star-empty");
		  $(this).addClass("icon-star");
	}).on("mouseout", '.landlordNotesBox', function () {
		$(this).removeClass("icon-star");
		$(this).addClass("icon-star-empty");

	});

	//-----------------worker-dashboard-zip-chagne-------------//
	$("#neighborhood").change(function(e)
	{
		neighborhoodCode	=	$(this).val();
		
		if (this.value)
		{
			window.location.href	=	'customer_request.php?action=zip_records&zip='+neighborhoodCode+'&record=first&currentId=';
		}
		else
		{
			window.location.href	=	'customer_request.php?action=zip_records&zip='+neighborhoodCode+'&record=&currentId=';
		}
	}); 
	
	$('body').on('keypress','.whenContactAvailClass',function(e)
	{
		var tval = $(this).val(),
		tlength = tval.length,
		set = 140,
		remain = parseInt(set - tlength);
		
		var charCount = $(this).attr('charCount');
		$('#charCount'+charCount).text(remain);
		if (remain <= 0 && e.which !== 0 && e.charCode !== 0) 
		{
			$(this).val((tval).substring(0, tlength - 1))
		}
	});
	
	//-----------------edit-field-----------------------------//
	$('body').on('click','.editField',function(e)
	{
		editField	=	$(this).attr("edit-field");
		hideField	=	$(this).attr("hide-field");
		
		$('.'+hideField).css('display','none');
		$('.'+editField).css('display','block');
		
		$('.'+editField).find('input').focus();
		$('.'+editField).find('select').focus();
	});

    
	//my use (when clicked on delete landlord)
	$('body').on('click','.deleteLandlord',function(e){
		_landlordId	= $(this).attr('landlord-id');
		if(confirm("Are you sure to delete this Landlord?"))
		{
			deleteLandlord(base_url,_landlordId);
		}
	});
    
    //my use (when clicked on add property)
	$('body').on('click','#addProperty',function(e){
		landlord_id	= $("#landlordId").val();
		if(landlord_id != '')
		{
			window.location.href = 'customer_request.php?action=add_property&landlord_id='+landlord_id;
		}
		else
		{
			alert('Error : Add Property');
		}
	});
    
    //my use (when clicked on delete property)
	$('body').on('click','.deleteProperty',function(e){
		_propertyId	= $(this).attr('property-id');
		
		if(confirm("Are you sure to delete this property?"))
		{
			deleteProperty(base_url,_propertyId);
		}
	});
	
	$('body').on('click','.invite_landlord_main',function(e){
		  
		landlord_id	= $(this).attr('data-landlord');
		 
		if(landlord_id != '')
		{
			var url	   = base_url+'view/customer_request.php?action=landlord_invitation';
			landlordData = 'landlord_id='+landlord_id;
	$.ajax({
            url:url,	
            type:'POST',
            data:landlordData,
            success: function(response) 
            { 
                jsonData = $.parseJSON( response );
                if(jsonData[0] == 1)
                {
                    alert("Your invitation link has been sent to the landlord by Email and SMS"); 
                }
				if(jsonData[0] == 4)
                {
                    alert("This Landlord has opted for no notifications"); 
                }
            }
      });
		}
		else
		{
			alert('Error : NO data found');
		}
	});
	
	$('body').on('click','.accept',function(e){
		  
		record_id	= $(this).attr('row-id'); 
		if(record_id != '')
		{
		 
			var url	   = base_url+'view/customer_request.php?action=accept_renter_property';
			landlordData = 'record_id='+record_id;
	$.ajax({
            url:url,	
            type:'POST',
            data:{record_id:record_id,status:1},
            success: function(response) 
            { 
			
                jsonData = $.parseJSON( response );
                if(jsonData[0] == 1)
                {
                       $("#updated"+record_id).text('Accepted');
                }
                
                
            }
      });
		}
		else
		{
			alert('Error : NO data found');
		}
	});
		$('body').on('click','.reject',function(e){
		  
		record_id	= $(this).attr('row-idz'); 
		if(record_id != '')
		{
		 
			var url	   = base_url+'view/customer_request.php?action=reject_renter_property';
			// landlordData = 'record_id='+record_id;
	$.ajax({
            url:url,	
            type:'POST',
            data:{record_id:record_id},
            success: function(response) 
            {  
                jsonData = $.parseJSON( response );
                if(jsonData[0] == 1)
                {
                       $("#updated"+record_id).text('Rejected');
                }
                
                
            }
      });
		}
		else
		{
			alert('Error : NO data found');
		}
	});
    //my use (when clicked on invite property)
	$('body').on('click','.invite_landlord',function(e){
		 landlord_id	= $("#landlordId").val();
		property_id	= $(this).attr('property-id');
		// alert(property_id); return false;
		if((landlord_id != '') && (property_id != ''))
		{
			var url	   = base_url+'view/customer_request.php?action=landlord_apply';
			// landlordData = 'landlord_id='+landlord_id;
			// window.location.href	=	'customer_request.php?action=landlord_apply&landlord_id='+landlord_id+'&property_id='+property_id;
	$.ajax({
            url:url,	
            type:'POST',
            data:{ landlord_id:landlord_id,property_id:property_id},
            success: function(response) 
            { 
			
                jsonData = $.parseJSON( response );
                // if(jsonData[0] == 2)
                // {
                       // window.location.href = base_url+'view/customer_request.php?action=newinvite&landlord_id='+landlord_id;
                // }
                if(jsonData[0] == 1)
                {
                    alert("Request has been sent to Landlord"); 
                }
				if(jsonData[0] == 2)
                {
                    alert("Some error occurred.Please try after some time"); 
                }
                if(jsonData[0] == 3)
                {
                    console.log('Error: No landlord found');
                }
            }
      });
		}
		else
		{
			alert('Error : NO data found');
		}
	});
    //my use (when clicked on view unit)
	$('body').on('click','.viewUnits',function(e){
		propertyId = $(this).attr('property-id');
        viewUnits(propertyId,base_url);
	});
    
	//my use (when clicked on add unit)
	$('body').on('click','.addUnit',function(e){
		landlord_id	= $("#landlordId").val();
		property_id	= $(this).attr('property-id');
	
		if((landlord_id != '') && (property_id != ''))
		{
			window.location.href	=	'customer_request.php?action=add_unit&landlord_id='+landlord_id+'&property_id='+property_id;
		}
		else
		{
			alert('Error : Add Property');
		}
	});
	
	
	$(document).on('click','#invitation_submit',function(){
		 var landlord_id = $('#').val();
	});
    
    //my use (when clicked on delete unit)
	$('body').on('click','.deleteUnit',function(e){
		_propId	= $(this).attr('prop-id');
        _unitId	= $(this).attr('unit-id');
		if(confirm("Are you sure to delete this unit?"))
		{
			deleteUnit(base_url,_propId,_unitId);
		}
	});
    
    //------------------add-phone------------------------//
	$('body').on('click','#addPhone',function(e){
		var phoneRowCount	=	$('#phoneTable tr').length;
		tr	=	'<tr>\
						<th><a class="removePhone" href="javascript:void(0)"><i class="icon-remove"></i></a> Phone</th>\
						<td>\
							<span  class="_phoneLabel'+phoneRowCount+'">\
								<label class="phone_number_LabelText'+phoneRowCount+'"></label>\
								<a href="javascript:void(0)" class="editField pull-right" edit-field="_phoneValue'+phoneRowCount+'" hide-field="_phoneLabel'+phoneRowCount+'">Edit\
								</a>\
							</span>\
							<span class="_phoneValue'+phoneRowCount+'" style="display:none">\
								<input type="text" class="form-control" name="phone_number[]" value="" onblur=updateLandlordField("phone_number","'+base_url+'",this) edit-field="_phoneLabel'+phoneRowCount+'" hide-field="_phoneValue'+phoneRowCount+'" label-to-change="phone_number_LabelText'+phoneRowCount+'">\
							</span>\
						</td>\
					</tr>';
		$('#phoneTable tr:last').after(tr);
	});
	
	//------------------add-email------------------------//
	$('body').on('click','#addEmail',function(e){
		var emailRowCount	=	$('#emailTable tr').length;
		tr	=	'<tr>\
					<th><a class="removeEmail" href="javascript:void(0)"><i class="icon-remove"></i></a> Email</th>\
					<td>\
						<span  class="_emailLabel'+emailRowCount+'">\
							<label class="email_LabelText'+emailRowCount+'"></label>\
							<a href="javascript:void(0)" class="editField pull-right" edit-field="_emailValue'+emailRowCount+'" hide-field="_emailLabel'+emailRowCount+'">Edit\
							</a>\
						</span>\
						<span class="_emailValue'+emailRowCount+'" style="display:none">\
							<input type="text" class="form-control" name="email[]" value="" onblur=updateLandlordField("email",base_url,this) edit-field="_emailLabel'+emailRowCount+'" hide-field="_emailValue'+emailRowCount+'" label-to-change="email_LabelText'+emailRowCount+'">\
						</span>\
					</td>\
				</tr>';
		$('#emailTable tr:last').after(tr);
	});	
	
	//------------------remove-phone------------------------//
	$('body').on('click','.removePhone',function(e){
		$(this).closest('tr').remove();
		updateLandlordField('phone_number',base_url);
	});
	
	//------------------remove-email------------------------//
	$('body').on('click','.removeEmail',function(e){
		$(this).closest('tr').remove();
		updateLandlordField('email',base_url);
	});
	
	$('body').on('click','#next_record,#prev_record',function(e)
	{
		neighborhoodCode		=	$('#neighborhood').val();
		whichRecord				=	$(this).attr('value');
		currentId				=	$('#landlordId').val();
		nextPrevDeciderValue	=	parseInt($('#next_prev_decider').val());
		countRecordForZip		=	parseInt($('#count_record_for_zip').val());
		
		if(whichRecord == 'prev')
		{
			var url		=	base_url+'customer_request.php?action=next_prev_check&zip='+neighborhoodCode+'&record=prev&currentId='+currentId;
			$.ajax({
			   url : url,
			   method: "POST",
			   success:function(data)
			   {
					jsonData = $.parseJSON( data );
					if(jsonData.length == 0)
					{
						alert('No More Previous Record');
						return;
					}
					else
					{
						$('#record_area').css('display','none');
						$('#recordProcessingImg').css('display','block');
						window.location.href	=	'customer_request.php?action=prev_record&zip='+neighborhoodCode+'&record=prev&currentId='+currentId;
					}
			   }
			});
		}
		else if(whichRecord == 'next')
		{
			var url		=	base_url+'customer_request.php?action=next_prev_check&zip='+neighborhoodCode+'&record=next&currentId='+currentId;
			$.ajax({
			   url : url,
			   method: "POST",
			   success:function(data)
			   {
					jsonData = $.parseJSON( data );
					if(jsonData.length == 0)
					{
						alert('No More Next Record');
						return;
					}
					else
					{
						$('#record_area').css('display','none');
						$('#recordProcessingImg').css('display','block');
						window.location.href	=	'customer_request.php?action=next_record&zip='+neighborhoodCode+'&record=next&currentId='+currentId;
					}
			   }
			});
		}
		else
		{
			$('#record_area').css('display','none');
			$('#recordProcessingImg').css('display','block');
			window.location.href	=	'customer_request.php?action=current_records&zip='+neighborhoodCode+'&record=current&currentId='+currentId;
		}
	});
	
	$('body').on('click','.expandLandlordNotes',function(e){
		$( "#expandLandlordNotesIcon" ).trigger( "click" );
	});
	
	$('body').on('click','.expandPropertyNotes',function(e){
		property_id	=	$(this).attr('property-id');
		$( "#expandPropertyNotesIcon"+property_id ).trigger( "click" );
	});
	
	$('body').on('click','.expandUnitNotes',function(e){
		unit_id	=	$(this).attr('unit-id');
		$( "#expandUnitNotesIcon"+unit_id ).trigger( "click" );
	});
	
	$('body').on('click','#toggle_search',function(e){
		$( "#search_area").toggle( "slow");
	});
	$("body").on("click", "#clearSearchform", function(e){
		$( "#searchform" ).find("input[type=text], textarea").val("");
		window.location.href	=	'customer_request.php?action=search_request&searchBy=&searchId=&searchKeyword=no_search';
		
	});
	
	$("body").on("blur", "#zipValueLabel", function(e)
	{
		zip	=	$(this).val();
		$( "#address_zip" ).val(zip);
		
		$.ajax({
		   url : "http://maps.googleapis.com/maps/api/geocode/json?components=postal_code:"+zip+"&sensor=false",
		   method: "POST",
		   success:function(data){
			   latitude = data.results[0].geometry.location.lat;
			   longitude= data.results[0].geometry.location.lng;
			   $( "#address_latitude" ).val(latitude);
			   $( "#address_longitude" ).val(longitude);
		   }
		});
		
	});
	$("body").on("blur", "#ADDRESS", function(e)
	{
		address	=	$(this).val();
		
		if(address != '') 
		{
			$('#zipValueLabel').attr("readonly","readonly");
		}
		else
		{
			$('#zipValueLabel').removeAttr("readonly");
		}
	});
});

//------------------------LANDLORD Functions-----------------------------//

//my use (refresh landlord details)
function viewLandlord(base_url)
{
    postData	=	'action=view_landlord';
    postUrl		=	base_url+'view/customer_request.php'

    $.ajax({
            url: postUrl,
            data: postData,
            type: 'post',
            beforeSend: function() {
                $('#record_area').html('<center><img src="../assets/assets_admin/img/processing.gif" height=400 width=400></center>');
            },
            error: function(xhr, status, error) {
                console.log('Error - worker.js viewLandlord method');
            },
            success: function(response)
            {
                $('#record_area').html(response);
                $('#record_area').css('display','block');
            }
    });
}

//my use (update landlord fields in viewLandlordBody.php)
function updateLandlordField(updateField,base_url,_this)
{
	if(updateField != '')
	{
		var fieldData			=	'';
		var currentLandlordId	=	$('#landlordId').val();

		if(updateField == 'billing_address')
		{
			_address	=	$("[name=billing_address_fAdd]").val();
			
			if(_address != '')
			{
				fieldData	=	_address;
			}
			
			if(fieldData == '')
			{
				console.log("Billing address can not be empty");
				return false;
			}
		}
		else if(updateField == 'phone_number')
		{
			var phoneField = new Array();
			$('[name^="phone_number"]').each(function() 
			{
				phoneField.push($(this).val());
			});
			fieldData	=	phoneField;
		}
		else if(updateField == 'call_time')
		{
			var callTimeField = new Array();
			$('[name^="call_time"]').each(function() 
			{
				callTimeField.push($(this).val());
			});
			fieldData	=	callTimeField;
		}
		else if(updateField == 'phone_and_calltime')
		{
			var phoneField = new Array();
			$('[name^="phone_number"]').each(function() 
			{
				phoneField.push($(this).val());
			});
			
			var callTimeField = new Array();
			$('[name^="call_time"]').each(function() 
			{
			
                callTimeField.push($(this).val());
			});
			fieldData	=	phoneField+'|'+callTimeField;
		}
		else if(updateField == 'email')
		{
			var emailField = new Array();
			$('[name^="email"]').each(function() 
			{
				emailField.push($(this).val());
			});
			fieldData	=	emailField;
		}
		else if(updateField == 'comment_about_landlord')
		{
			fieldData	=	$("[name="+updateField+"]").val();
		}
		else if (updateField == 'no_commission')
		{
			if (!$("#noCommission").is(":checked"))
			{
				fieldData	=	'no';
			}
			if ($("#noCommission").is(":checked"))
			{
				fieldData	=	'yes';
			}
		}
		else
		{
			fieldData	=	$("[name="+updateField+"]").val();
		}
		
		console.log(fieldData);

		if (fieldData.indexOf("&") >= 0)
		{
			fieldData	=	fieldData.replace("&","and");
		}
		
		postData	=	'action=update_landlord&landlordId='+currentLandlordId+"&"+updateField+'='+fieldData;
		postUrl		=	base_url+'view/customer_request.php'
			
		$.ajax({
					url: postUrl,
					data: postData,
					type: 'post',
					beforeSend: function() {
					},
					error: function(xhr, status, error) {
					  console.log('Error - worker.js updateLandlordInfo method')
					},
					success: function(response) 
					{	
                        viewLandlord(base_url);
						console.log(response);
                        
						var fieldValue		=	$(_this).val();
						var editField		=	$(_this).attr('edit-field');
						var hideField		=	$(_this).attr('hide-field');
						var labeldToChange	=	$(_this).attr('label-to-change');
						
						$('.'+labeldToChange).text(fieldValue);
						$('.'+hideField).css('display','none');
						$('.'+editField).css('display','block');
						
						jsonData 	=	'';
						jsonData = $.parseJSON( response );
						
						if(jsonData[0] == 0)
						{
							$("#messengerLandlordInfo").html('<div class="alert alert-danger text-center">Landlord Info Not Updated.</div>');
							$("#messengerLandlordInfo").fadeIn('fast').delay(10000).fadeOut("slow");
                        }
					}
			});
	}
	else
	{
		alert("Some error in field Update");
	}
}

//my use (when delete landlord)
function deleteLandlord(base_url,_landlordId)
{
	deleteData = 'landlord_id='+_landlordId;
	var url	   = base_url+'view/customer_request.php?action=delete_landlord';
	$.ajax({
            url:url,	
            type:'POST',
            data:deleteData,
            success: function(response) 
            {
                jsonData = $.parseJSON( response );
                if(jsonData[0] == 2)
                {
                    alert("You have already requested for deletion");
                    location.reload();
                }
                if(jsonData[0] == 1)
                {
                    alert("Delete request has been received");
                    location.reload();
                }
                if(jsonData[0] == 0)
                {
                    console.log('Error: Landlord can not be deleted');
                }
            }
      });
}

//------------------------PROPERTY Functions-----------------------------//

//my use (refresh property details)
function viewProperty(base_url)
{
    postData	=	'action=view_property';
    postUrl		=	base_url+'view/customer_request.php'

    $.ajax({
            url: postUrl,
            data: postData,
            type: 'post',
            beforeSend: function() {
                $('#propertyDiv').html('<center><img src="../assets/assets_admin/img/processing.gif" height=400 width=400></center>');
            },
            error: function(xhr, status, error) {
                console.log('Error - worker.js viewProperty method');
            },
            success: function(response)
            {
                $('#propertyDiv').html(response);
                $('#propertyDiv').css('display','block');
            }
    });
}

//my use (update property fields in viewPropertyBody.php)
function updatePropertyField(updateField,propertyID,base_url,_this)
{
	if(updateField != '' && propertyID != '')
	{
		var fieldData			=	'';
		var currentLandlordId	=	$('#landlordId').val();
		var updateFieldTemp		=	updateField;
		
		fieldData		=	$("[name="+updateField+"]").val();
		updateField		=	updateField.replace(/\d+/g, '');

		if(updateField == 'address')
		{
			updateFieldIndex	=	updateFieldTemp.replace(/[^0-9]/g, '');
			_address	=	$("[name=fAdd"+updateFieldIndex+"]").val();
			_zip		=	$("[name=zip"+updateFieldIndex+"]").val();
			_lat		=	$("[name=lat"+updateFieldIndex+"]").val();
			_long		=	$("[name=long"+updateFieldIndex+"]").val();
			
			if(_address != '')
			{
				fieldData	=	_address;
			}
			
			if(_zip == '')
			{
				console.log('Zip code is not found.');
				return;
			}
			
			if(fieldData == '')
			{
				console.log("Billing address can not be empty");
				return false;
			}
			postData	=	'action=update_property&landlordId='+currentLandlordId+"&property_id="+propertyID+"&"+updateField+'='+fieldData+'&zip='+_zip+'&lat='+_lat+'&long='+_long;
		}
		else
		{
			postData	=	'action=update_property&landlordId='+currentLandlordId+"&property_id="+propertyID+"&"+updateField+'='+fieldData;
		}
		
		postUrl		=	base_url+'view/customer_request.php'
				
		$.ajax({
                url: postUrl,
                data: postData,
                type: 'post',
                beforeSend: function() {
                },
                error: function(xhr, status, error) {
                  console.log('Error - worker.js updateLandlordInfo method')
                },
                success: function(response) 
                {
                    viewProperty(base_url);
                    console.log(response);
                    
                    var fieldValue		=	$(_this).val();
                    var editField		=	$(_this).attr('edit-field');
                    var hideField		=	$(_this).attr('hide-field');
                    var labeldToChange	=	$(_this).attr('label-to-change');

                    $('.'+labeldToChange).text(fieldValue);
                    $('.'+hideField).css('display','none');
                    $('.'+editField).css('display','block');

                    jsonData = '';
                    jsonData = $.parseJSON( response );

                    if(jsonData[0] == 0)
                    {
                        $("#messengerLandlordInfo").html('<div class="alert alert-danger text-center">Landlord Info Not Updated.</div>');
                        $("#messengerLandlordInfo").fadeIn('fast').delay(10000).fadeOut("slow");
                    }
                }
			});
	}
	else
	{
		alert("Some error in field Update");
	}
}

//my use (when delete property)
function deleteProperty(base_url,_propertyId)
{
	deleteData = 'property_id='+_propertyId;
	var url	   = base_url+'view/customer_request.php?action=delete_property';
	$.ajax({
            url:url,	
            type:'POST',
            data:deleteData,
            success: function(response) 
            { 
                jsonData = $.parseJSON( response );
                if(jsonData[0] == 2)
                {
                    alert("You have already requested for deletion");
                    viewProperty(base_url);
                    viewUnits(_propertyId,base_url);
                }
                if(jsonData[0] == 1)
                {
                    alert("Delete request has been received");
                    viewProperty(base_url);
                    viewUnits(_propertyId,base_url);
                }
                if(jsonData[0] == 0)
                {
                    console.log('Error: Property can not be deleted');
                }
            }
      });
}

//------------------------UNIT Functions-----------------------------//

//my use (when clicked on view unit)
function viewUnits(propId,base_url)
{
	if(propId != '')
	{
		postData	=	'action=view_units&propertyId='+propId;
		postUrl		=	base_url+'view/customer_request.php'
			
		$.ajax({
            url: postUrl,
            data: postData,
            type: 'post',
            beforeSend: function() {
                $('#unitDiv').html('<center><img src="../assets/assets_admin/img/processing.gif" height=400 width=400></center>');
            },
            error: function(xhr, status, error) {
              console.log('Error - worker.js viewUnits method');
            },
            success: function(response) 
            {
                $('#unitDiv').html(response);
                $('#unitDiv').css('display','block');
				$('html, body').animate({ scrollTop: $("#unitDiv").offset().top }, 1500);
            }
        });
	}
	else
	{
		console.log('Error! viewUnits Method');
	}
}

//my use (update unit fields in viewUnitBody.php)
function updateUnitField(updateField,unitID,propertyId,base_url,_this)
{
	if(updateField != '' && unitID != '')
	{
		var fieldData			=	'';
		var currentLandlordId	=	$('#landlordId').val();
		var updateFieldTemp		=	updateField;
		
		fieldData		=	$("[name="+updateField+"]").val();
		fieldData		=	fieldData.replace("&","and")
		updateField		=	updateField.replace(/\d+/g, '');
		
		postData	=	'action=update_unit&landlordId='+currentLandlordId+"&unit_id="+unitID+"&"+updateField+'='+fieldData;
		postUrl		=	base_url+'view/customer_request.php'
				
		$.ajax({
                url: postUrl,
                data: postData,
                type: 'post',
                beforeSend: function() {
                },
                error: function(xhr, status, error) {
                  console.log('Error - worker.js updateLandlordInfo method')
                },
                success: function(response)
                {
                    viewUnits(propertyId,base_url);
                    console.log(response);
                    
                    var fieldValue		=	$(_this).val();
                    var editField		=	$(_this).attr('edit-field');
                    var hideField		=	$(_this).attr('hide-field');
                    var labeldToChange	=	$(_this).attr('label-to-change');

                    $('.'+labeldToChange).text(fieldValue);
                    $('.'+hideField).css('display','none');
                    $('.'+editField).css('display','block');

                    jsonData = '';
                    jsonData = $.parseJSON( response );
                    
                    if(jsonData[0] == 0)
                    {
                        $("#messengerLandlordInfo").html('<div class="alert alert-danger text-center">Unit Info Not Updated.</div>');
                        $("#messengerLandlordInfo").fadeIn('fast').delay(10000).fadeOut("slow");
                    }

                }
			});
	}
	else
	{
		alert("Some error in field Update");
	}
}
function deleteUnitAssets(base_url,_unitId)

{

	

	deleteData = 'doc_id='+_unitId;

	

	var url		=	base_url+'view/customer_request.php?action=delete_unit_asset';

				//	$('.btn-primary').show();

	$.ajax({

				url:url,	

				type:'POST',

				data:deleteData,

				success: function(response) 

				{ 					

					if(response == 1)

					{

						var uid = $('#uid').val();

							linkfiles(uid);

							$('.output').html('');

							var _propertyId = $("[name=property_id]").val();

							viewUnits(_propertyId,base_url);

							//$('.btn-primary').hide();

							$('#filebtn').hide();

							

					}

					if(response == 0)

					{

						console.log('Error: Unit Doc can not be deleted');

					}

				}

		  });

}

//my use (when delete unit)
function deleteUnit(base_url,propertyId,_unitId)
{
	deleteData = 'unit_id='+_unitId;
	var url	   = base_url+'view/customer_request.php?action=delete_unit';
	$.ajax({
            url:url,	
            type:'POST',
            data:deleteData,
            success: function(response) 
            { 
                jsonData = $.parseJSON( response );
                if(jsonData[0] == 2)
                {
                    alert("You have already requested for deletion");
                    viewUnits(propertyId,base_url);
                }
                if(jsonData[0] == 1)
                {
                    alert("Delete request has been received");
                    viewUnits(propertyId,base_url);
                }
                if(jsonData[0] == 0)
                {
                    console.log('Error: Unit can not be deleted');
                }
            }
      });
}

function initd(_this) 
{
	var input = _this;//document.getElementById('ADDRESS');
	var autocomplete = new google.maps.places.Autocomplete(input);
	autocomplete.setTypes([]);
	
	autocomplete.addListener
	(
		'place_changed', 
		function() 
		{
			var place = autocomplete.getPlace();
			//alert(place);
			if (!place.geometry) 
			{
				window.alert("Autocomplete's returned place contains no geometry");
				return;
			}

			// If the place has a geometry, then present it on a map.
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
				
				//document.getElementById("Out").innerHTML = JSON.stringify(place);
				
				var PlaceComp = place.address_components;
				for(i = 0;i< PlaceComp.length;i++)
				{
					//console.log("PlaceComp.types="+PlaceComp[i].types);
					if(PlaceComp[i].types)
					{
						var PlaceTypes = PlaceComp[i].types;
						//console.log("PlaceTypes="+PlaceTypes);						
						
						for(j = 0;j< PlaceTypes.length;j++)
						{
							var PlaceType = PlaceTypes[j];
							if(PlaceType == 'postal_code')
							{
								Zip = PlaceComp[i].long_name;	//https://developers.google.com/maps/documentation/geocoding/intro
							}

							if(PlaceType == 'neighborhood')
							{
								//alert("Neighborhood="+PlaceComp[i].long_name)	//https://developers.google.com/maps/documentation/geocoding/intro
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
				
				dataClass	=	$(_this).attr('data-element');
				//alert(dataClass+"_fAdd");
				document.getElementById(dataClass+"_fAdd").value 			= 	place.formatted_address;
				
				document.getElementById(dataClass+"_zipValue").value  		= 	Zip;
				if(document.contains(document.getElementById(dataClass+"_zipLabel"))) 
				{
					document.getElementById(dataClass+"_zipLabel").innerHTML  	= 	Zip;
				}
				

				document.getElementById(dataClass+"_latValue").value		= 	Loc_Lat;
				if(document.contains(document.getElementById(dataClass+"_latLabel"))) 
				{
					document.getElementById(dataClass+"_latLabel").innerHTML	= 	Loc_Lat;
				}
				
				
				document.getElementById(dataClass+"_longValue").value	 	= 	Loc_Lon;
				if(document.contains(document.getElementById(dataClass+"_longLabel"))) 
				{
					document.getElementById(dataClass+"_longLabel").innerHTML 	= 	Loc_Lon;
				}
				input.focus();
			}
		}
	);
}


function init() 
{
	var input = document.getElementById('ADDRESS');
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

			// If the place has a geometry, then present it on a map.
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
				
				//document.getElementById("Out").innerHTML = JSON.stringify(place);
				
				var PlaceComp = place.address_components;
				for(i = 0;i< PlaceComp.length;i++)
				{
					//console.log("PlaceComp.types="+PlaceComp[i].types);
					if(PlaceComp[i].types)
					{
						var PlaceTypes = PlaceComp[i].types;
						//console.log("PlaceTypes="+PlaceTypes);						
						
						for(j = 0;j< PlaceTypes.length;j++)
						{
							var PlaceType = PlaceTypes[j];
							if(PlaceType == 'postal_code')
							{
								Zip = PlaceComp[i].long_name;	//https://developers.google.com/maps/documentation/geocoding/intro
							}

							if(PlaceType == 'neighborhood')
							{
								//alert("Neighborhood="+PlaceComp[i].long_name)	//https://developers.google.com/maps/documentation/geocoding/intro
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
				
				
				document.getElementById("address_zip").value = Zip;
				if(document.contains(document.getElementById("zipValueLabel"))) 
				{
					document.getElementById('zipValueLabel').value = Zip;
				}
				
				if(Zip != '') 
				{
					document.getElementById('zipValueLabel').readonly = true;
				}
				else
				{
					document.getElementById('zipValueLabel').readonly = false;
				}
				
				document.getElementById("address_latitude").value = Loc_Lat;
				if(document.contains(document.getElementById("latValueLabel"))) 
				{
					document.getElementById('latValueLabel').value = Loc_Lat;
				}
				
				document.getElementById("address_longitude").value = Loc_Lon;
				if(document.contains(document.getElementById("longValueLabel"))) 
				{
					document.getElementById('longValueLabel').value = Loc_Lon;
				}
				
				input.focus();
			}
		}
	);
}

function advance_search(base_url)
{
	var searchBy		=	$.trim($('#radioValue').val());
	var searchKeyword	=	$.trim($('#landlordSearchKeyword').val());
		
		if(searchKeyword == '' || searchBy == '')
		{
			searchData = 'searchBy=&searchKeyword=no_search';
		} 
		else
		{
			searchData = 'searchBy='+searchBy+'&searchKeyword='+searchKeyword;
		}
		
		var url		=	base_url+'customer_request.php?action=search_request';
		$.ajax({
                url:url,	
                type:'POST',
                data:searchData,
                success: function(response) { 
                        alert(response);
                      }
          });
}

//my use (when user give rating to landlord)
function rating_click(base_url,rootUrl,rat_val)
{
	rate = rat_val.split("-");
	rate_id = $('#rate_id').val(rate[0]);
	rate1 = rate[0];
	landlord_id = rate[1];
	
	textNote 	=	$("#landlordNoteTextArea").val();
	textNote	=	textNote.replace(/&/g, "and");
	textNote	=	textNote.replace(/'/g , "`");
	
	  $.post(base_url+'view/landlordRating.php',{rate:rat_val,note:textNote}, function(d)
	  {
            viewLandlord(base_url);
      });
}

//my use (when user give rating to property)
function property_rating_click(base_url,rootUrl,rat_val)
{
	rate = rat_val.split("-");
	rate_id = $('#rate_id').val(rate[0]);
	rate1 = rate[0];
	landlord_id = rate[1];
	propertyID	= rate[2];
	
	textNote 	=	$("#propertyNoteTextArea_"+propertyID).val();
	textNote	=	textNote.replace(/&/g, "and");
	textNote	=	textNote.replace(/'/g , "`");
	
      $.post(base_url+'view/propertyRating.php',{rate:rat_val,note:textNote}, function(d)
      {
            viewProperty(base_url);
      });
}

//my use (when user give ratings to unit)
function unit_rating_click(base_url,rootUrl,rat_val)
{
	rate = rat_val.split("-");
	rate_id = $('#rate_id').val(rate[0]);
	rate1 = rate[0];
	landlord_id = rate[1];
	propertyID	= rate[2];
	unitID		= rate[3];
	
	textNote 	=	$("#unitNoteTextArea_"+unitID).val();
	textNote	=	textNote.replace(/&/g, "and");
	textNote	=	textNote.replace(/'/g , "`");
	
	  $.post(base_url+'view/unitRating.php',{rate:rat_val,note:textNote}, function(d)
	  {
            viewUnits(propertyID,rootUrl);
      });
}

function populateMessage(id)
{
	if(id != '')
	{
		postData	=	'action=filltemplate&tid='+id;
		postUrl		=	base_url+'messages.php'
				
		$.ajax({
                url: postUrl,
                data: postData,
                type: 'post',
                success: function(response)
                {
					alert(response);
                    jsonData = $.parseJSON( response );
					
					if(jsonData[0] == 1)
					{

					}
                }
			});
	}
	else
	{
		alert("Some error in field Update");
	}
}

function unit_apply(rootUrl,rat_val)
{
	rate = rat_val.split("-");
	userID = rate[0];
	landlordID = rate[1];
	propertyID = rate[2];
	unitID	   = rate[3];
	
	postData	=	'unit_apply=1&userID='+userID+'&landlordID='+landlordID+'&propertyID='+propertyID+'&unitID='+unitID;
	postUrl		=	rootUrl+'view/ajax.php'
	
	$.ajax({
		url: postUrl,
		data: postData,
		type: 'post',
		success: function(response)
		{
			viewUnits(propertyID,rootUrl);
		}
	});
}
