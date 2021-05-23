$('document').ready(function()
{ 

	$('body').on('click', '.currentDateSet', function()
	{
		_this									=	$(this);
		var postData							=	{};
		var pdf_user_id							=	$("#pdf_user_id").val();
		postData['pdf_user_id']					=	pdf_user_id;
		
		var uniqueNum 			=	$(this).attr('uniqueNum');
		
		if (typeof uniqueNum !== typeof undefined && uniqueNum !== false)
		{
			_changeFieldTemp	=	_changeField				=	_this.attr('changeField');
			_changeField										=	_changeField.substring(0,_changeField.indexOf("["));
			postData[_changeField]								=	'current';
			postData['postToTable']								=	_this.attr('postToTable');
			postData['uniqueNum']								=	_this.attr('uniqueNum');
			
			
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
					$('[name="'+_changeFieldTemp+'"]').val('current');
					$('[name="'+_changeFieldTemp+'"]').attr('disabled','true');
					
					_this.removeClass('currentDateSet');
					_this.addClass('currentDateRemove');
					_this.text('Remove Current');
					console.log(response);
					
					$('#applicant_form_submit').text('Send Pdf Document');
					$('#applicant_form_submit').removeAttr('disabled');
				}
			});
		}
		else
		{
			_changeField							=	_this.attr('changeField');
			postData[_changeField]					=	'NULL';
			postData[_changeField+'_current']		=	'current';
			
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
					$('#'+_changeField).val('current');
					$('#'+_changeField).attr('disabled','true');
					
					_this.removeClass('currentDateSet');
					_this.addClass('currentDateRemove');
					_this.text('Remove Current');
					console.log(response);
					
					$('#applicant_form_submit').text('Send Pdf Document');
					$('#applicant_form_submit').removeAttr('disabled');
				}
			});
		}
	});
	
	$('body').on('click', '.currentDateRemove', function()
	{
		_this									=	$(this);
		var postData							=	{};
		var pdf_user_id							=	$("#pdf_user_id").val();
		postData['pdf_user_id']					=	pdf_user_id;
		
		var uniqueNum 			=	$(this).attr('uniqueNum');
		
		if (typeof uniqueNum !== typeof undefined && uniqueNum !== false)
		{
			_changeFieldTemp	=	_changeField				=	_this.attr('changeField');
			_changeField										=	_changeField.substring(0,_changeField.indexOf("["));
			postData[_changeField]								=	'NULL';
			postData['postToTable']								=	_this.attr('postToTable');
			postData['uniqueNum']								=	_this.attr('uniqueNum');
			
			
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
					$('[name="'+_changeFieldTemp+'"]').val('');
					$('[name="'+_changeFieldTemp+'"]').removeAttr('disabled');
					
					_this.removeClass('currentDateRemove');
					_this.addClass('currentDateSet');
					_this.text('Set Current');
					//$('[name="'+_changeFieldTemp+'"]').datepicker("setDate", new Date());
					$('[name="'+_changeFieldTemp+'"]').focus();
					
					console.log(postData);
					
					$('#applicant_form_submit').text('Send Pdf Document');
					$('#applicant_form_submit').removeAttr('disabled');
				}
			});
		}
		else
		{	 
			_changeField							=	_this.attr('changeField');
			postData[_changeField]					=	'NULL';
			postData[_changeField+'_current']		=	'NULL';
			postData['pdf_user_id']					=	pdf_user_id;
			
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
					$('#'+_changeField).val('');
					$('#'+_changeField).removeAttr('disabled');
					
					_this.removeClass('currentDateRemove');
					_this.addClass('currentDateSet');
					_this.text('Set Current');
					//$('[name="'+_changeFieldTemp+'"]').datepicker("setDate", new Date());
					$('[name="'+_changeFieldTemp+'"]').focus();
					
					console.log(response);
					
					$('#applicant_form_submit').text('Send Pdf Document');
					$('#applicant_form_submit').removeAttr('disabled');
				}
			});
		}
	});
});

//-------------------Renter-related-function------------------------------//

function renterMorePreviousLandlord(appendInDiv='', table1)
{
	var randNumber = $.now();
	
	html	=	'';
	table	=	table1;
	
	_prevLandlord1Add	=	$.trim($('#add2'+appendInDiv).val());
	_prevLandlord1Name	=	$.trim($('#landlord2'+appendInDiv).val());
	_prevLandlord1Rent	=	$.trim($('#rent2'+appendInDiv).val());
	_prevLandlord1Phone	=	$.trim($('#phone2'+appendInDiv).val());
	
	if(_prevLandlord1Name == '' && _prevLandlord1Phone == '')
	{
		alert('Before adding more, please enter details first for previous landlord');
		return false;
	}
	
	html	+=	'<div class="row row_'+randNumber+'" style="padding:10px">\
					<hr  style="margin: 0px 5px 0px 5px !important;"/>\
					<div class="col-md-12 text-right" style="padding: 0px 15px 10px 0;">\
						<i class="icon-remove" onclick="removeRow('+randNumber+' , table)" style="cursor:pointer;"> </i>\
					</div>\
					<div class="form-group col-md-8">\
						<div class="input-group">\
							<span class="input-group-addon customBackground">Previous Address, State, Zip:</span>\
							<textarea postToTable="'+table+'" uniqueNum="'+randNumber+'" data-required="1" class="form-control" id="add2_'+randNumber+'" name="add2_more['+randNumber+']"></textarea>\
						</div>\
					</div>\
				   <div class="form-group col-md-4">\
						<div class="input-group">\
							<span class="input-group-addon customBackground">Rent Cost: $</span>\
							<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control" id="rent2_'+randNumber+'" name="rent2_more['+randNumber+']" value=""/>\
						</div>\
					</div>\
				</div>';
				
	html	+=	'<div class="row row_'+randNumber+'" style="padding:10px">\
					   <div class="form-group col-md-4" >\
							<div class="input-group" >\
								<span class="input-group-addon customBackground">Landlord`s name:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control" id="landlord2_'+randNumber+'" name="landlord2_more['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Landlord`s #</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control phone" id="phone2_'+randNumber+'" name="phone2_more['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group date-picker input-daterange" data-date="10/11/2012" data-date-format="mm/dd/yyyy">\
								<span class="input-group-addon customBackground">From</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control form-control-inline date-picker"  id="from2_'+randNumber+'" name="from2_more['+randNumber+']" value="">\
								<span class="input-group-addon customBackground">To</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control form-control-inline date-picker"  id="to2_'+randNumber+'" name="to2_more['+randNumber+']"  value="">\
							</div>\
							<span class="help-block text-right">\
								<a href="javascript:void(0)" postToTable="'+table+'" uniqueNum="'+randNumber+'" class="currentDateSet" changeField="to2_more['+randNumber+']">Set Current</a>\
							</span>\
						</div>\
					</div>';

	
	$('#renterMorePreviousLandlord'+appendInDiv).append(html);
	
	$('.date-picker').datepicker();
	$('.timepicker-default').timepicker();
	
	applicantForm.init();
}

function renterMoreCurrentEmployment(appendInDiv='', table1)
{
	var randNumber = $.now();
	
	html	=	'';
	table	=	table1;
	
	_currentEmployerName	=	$.trim($('#employer1'+appendInDiv).val());
	_currentEmployerAdd		=	$.trim($('#add3'+appendInDiv).val());
	_currentEmployerPhone	=	$.trim($('#phone3'+appendInDiv).val());
	
	if(_currentEmployerName == '' && _currentEmployerPhone == '')
	{
		alert('Before adding more, please enter details first for current employer');
		return false;
	}
	
	html	+=	'<div class="row row_'+randNumber+'" style="padding:10px">\
						<hr  style="margin: 0px 5px 0px 5px !important;"/>\
						<div class="col-md-12 text-right" style="padding: 0px 15px 10px 0;">\
							<i class="icon-remove" onclick="removeRow('+randNumber+',table)" style="cursor:pointer;"> </i>\
						</div>\
					   <div class="form-group col-md-8">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Current Employer:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control" id="employer1_'+randNumber+'" name="employer1_more['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
						<div class="form-group col-md-4">\
							<div class="input-group date-picker input-daterange" data-date="10/11/2012" data-date-format="mm/dd/yyyy">\
								<span class="input-group-addon customBackground">From</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'"  type="text" class="form-control form-control-inline date-picker"  id="from3_'+randNumber+'" name="from3_more['+randNumber+']" value="">\
								<span class="input-group-addon customBackground">To</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'"  type="text" class="form-control form-control-inline date-picker"  id="to3_'+randNumber+'" name="to3_more['+randNumber+']" value="">\
							</div>\
							<span class="help-block text-right">\
								<a href="javascript:void(0)" postToTable="'+table+'" uniqueNum="'+randNumber+'" class="currentDateSet" changeField="to3_more['+randNumber+']">Set Current</a>\
							</span>\
						</div>\
					</div>';
	
	
	
	html	+=	'<div class="row row_'+randNumber+'" style="padding:10px">\
					   <div class="form-group col-md-12">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Current Address, State, Zip:</span>\
								<textarea postToTable="'+table+'" uniqueNum="'+randNumber+'" data-required="1" class="form-control" id="add3_'+randNumber+'" name="add3_more['+randNumber+']"></textarea>\
							</div>\
						</div>\
					</div>';
	
	html	+=	'<div class="row row_'+randNumber+'" style="padding:10px">\
					   <div class="form-group col-md-4" >\
							<div class="input-group" >\
								<span class="input-group-addon customBackground">Phone #</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control phone" id="phone3_'+randNumber+'" name="phone3_more['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Position:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control" id="position1_'+randNumber+'" name="position1_more['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">NET income/mo:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control" id="netincome1_'+randNumber+'" name="netincome1_more['+randNumber+']" value=""/>\
							</div>\
						</div>\
					</div>';
					
	$('#renterMoreCurrentEmployment'+appendInDiv).append(html);
	
	$('.date-picker').datepicker();
	$('.timepicker-default').timepicker();
	
	applicantForm.init();
}


function renterMoreCurrentPreviousEmployment(appendInDiv='', table1)
{
	var randNumber = $.now();
	
	html	=	'';
	table	=	table1;
	
	_previousEmployerName	=	$.trim($('#company1'+appendInDiv).val());
	_previousEmployerAdd	=	$.trim($('#add4'+appendInDiv).val());
	_previousEmployerPhone	=	$.trim($('#phone4'+appendInDiv).val());
	
	if(_previousEmployerName == '' && _previousEmployerPhone == '')
	{
		alert('Before adding more, please enter details first for previous employer');
		return false;
	}	
	
	html	+=	'<div class="row row_'+randNumber+'" style="padding:10px">\
						<hr  style="margin: 0px 5px 0px 5px !important;"/>\
						<div class="col-md-12 text-right" style="padding: 0px 15px 10px 0;">\
							<i class="icon-remove" onclick="removeRow('+randNumber+', table)" style="cursor:pointer;"> </i>\
						</div>\
					   <div class="form-group col-md-8">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Company Name:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control" id="company1_'+randNumber+'" name="company1_more['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
						<div class="form-group col-md-4">\
							<div class="input-group date-picker input-daterange" data-date="10/11/2012" data-date-format="mm/dd/yyyy">\
								<span class="input-group-addon customBackground">From</span>\
								<input  postToTable="'+table+'"  uniqueNum="'+randNumber+'" type="text" class="form-control form-control-inline date-picker"  id="from4_'+randNumber+'" name="from4_more['+randNumber+']" value="">\
								<span class="input-group-addon customBackground">To</span>\
								<input  postToTable="'+table+'"  uniqueNum="'+randNumber+'" type="text" class="form-control form-control-inline date-picker"  id="to4_'+randNumber+'" name="to4_more['+randNumber+']" value="">\
							</div>\
							<span class="help-block text-right">\
								<a href="javascript:void(0)" postToTable="'+table+'" uniqueNum="'+randNumber+'" class="currentDateSet" changeField="to4_more['+randNumber+']">Set Current</a>\
							</span>\
						</div>\
					</div>';
					
					
	html	+=	'<div class="row row_'+randNumber+'" style="padding:10px">\
					   <div class="form-group col-md-12">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Address, State, Zip:</span>\
								<textarea postToTable="'+table+'"  uniqueNum="'+randNumber+'" data-required="1" class="form-control" id="add4_'+randNumber+'" name="add4_more['+randNumber+']"></textarea>\
							</div>\
						</div>\
					</div>';
					
	html	+=	'<div class="row row_'+randNumber+'" style="padding:10px">\
					   <div class="form-group col-md-4" >\
							<div class="input-group" >\
								<span class="input-group-addon customBackground">Phone #</span>\
								<input postToTable="'+table+'"  uniqueNum="'+randNumber+'" type="text" class="form-control phone" id="phone4_'+randNumber+'" name="phone4_more['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Position:</span>\
								<input postToTable="'+table+'"  uniqueNum="'+randNumber+'" type="text" class="form-control" id="position2_'+randNumber+'" name="position2_more['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">NET income/mo:</span>\
								<input postToTable="'+table+'"  uniqueNum="'+randNumber+'" type="text" class="form-control" id="netincome2_'+randNumber+'" name="netincome2_more['+randNumber+']" value=""/>\
							</div>\
						</div>\
					</div>';
	
	$('#renterMoreCurrentPreviousEmployment'+appendInDiv).append(html);
	
	$('.date-picker').datepicker();
	$('.timepicker-default').timepicker();
	
	applicantForm.init();
}


//-------------------Renter-related-function------------------------------//




//-------------------Co-Renter-related-function------------------------------//
function coRenterMorePreviousLandlord(appendInDiv='', table1)
{
	var randNumber = $.now();
	
	html	=	'';
	table	=	table1;
	
	_prevLandlord1Add	=	$.trim($('#previous_landlord_add_'+appendInDiv).val());
	_prevLandlord1Name	=	$.trim($('#previous_landlord_name_'+appendInDiv).val());
	_prevLandlord1Rent	=	$.trim($('#previous_landlord_rent_'+appendInDiv).val());
	_prevLandlord1Phone	=	$.trim($('#previous_landlord_phone_'+appendInDiv).val());
	
	if(_prevLandlord1Name == '' && _prevLandlord1Phone == '')
	{
		alert('Before adding more, please enter details first for previous landlord');
		return false;
	}
	
	
	
	html	+=	'<div class="row row_'+randNumber+'" style="padding:10px">\
						<hr  style="margin: 0px 5px 0px 5px !important;"/>\
						<div class="col-md-12 text-right" style="padding: 0px 15px 10px 0;">\
							<i class="icon-remove" onclick="removeRow('+randNumber+', table)" style="cursor:pointer;"> </i>\
						</div>\
						<div class="form-group col-md-8">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Previous Address, State, Zip:</span>\
								<textarea postToTable="'+table+'" uniqueNum="'+randNumber+'" coSignerUniqueNum="'+appendInDiv+'" data-required="1" class="form-control" id="previous_landlord_add_'+randNumber+'" name="previous_landlord_add['+randNumber+']"></textarea>\
							</div>\
						</div>\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Rent Cost: $</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" coSignerUniqueNum="'+appendInDiv+'" type="text" class="form-control" id="previous_landlord_rent_'+randNumber+'" name="previous_landlord_rent['+randNumber+']" value=""/>\
							</div>\
						</div>\
					</div>';
					
	html	+=	'<div class="row row_'+randNumber+'" style="padding:10px">\
					   <div class="form-group col-md-4" >\
							<div class="input-group" >\
								<span class="input-group-addon customBackground">Landlord`s name:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'"  coSignerUniqueNum="'+appendInDiv+'" type="text" class="form-control" id="previous_landlord_name_'+randNumber+'" name="previous_landlord_name['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Landlord`s #</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'"  coSignerUniqueNum="'+appendInDiv+'" type="text" class="form-control phone" id="previous_landlord_phone_'+randNumber+'" name="previous_landlord_phone['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group date-picker input-daterange" data-date="10/11/2012" data-date-format="mm/dd/yyyy">\
								<span class="input-group-addon customBackground">From</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'"  coSignerUniqueNum="'+appendInDiv+'"  type="text" class="form-control form-control-inline date-picker"  id="previous_landlord_from_'+randNumber+'" name="previous_landlord_from['+randNumber+']" value="">\
								<span class="input-group-addon customBackground">To</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'"  coSignerUniqueNum="'+appendInDiv+'"  type="text" class="form-control form-control-inline date-picker"  id="previous_landlord_to_'+randNumber+'" name="previous_landlord_to['+randNumber+']" value="">\
							</div>\
							<span class="help-block text-right">\
								<a href="javascript:void(0)" postToTable="'+table+'" uniqueNum="'+randNumber+'" class="currentDateSet" changeField="previous_landlord_to['+randNumber+']">Set Current</a>\
							</span>\
						</div>\
					</div>';

	
	$('#coRenterMorePreviousLandlord'+appendInDiv).append(html);
	
	$('.date-picker').datepicker();
	$('.timepicker-default').timepicker();
	
	applicantForm.init();
}

function coRenterMoreCurrentEmployment(appendInDiv='', table1)
{
	var randNumber = $.now();
	
	html	=	'';
	table	=	table1;
	
	_currentEmployerName	=	$.trim($('#current_employer_'+appendInDiv).val());
	_currentEmployerAdd		=	$.trim($('#current_employer_add_'+appendInDiv).val());
	_currentEmployerPhone	=	$.trim($('#current_employer_phone_'+appendInDiv).val());
	
	if(_currentEmployerName == '' && _currentEmployerPhone == '')
	{
		alert('Before adding more, please enter details first for current employer');
		return false;
	}
	
	html	+=	'<div class="row row_'+randNumber+'" style="padding:10px">\
						<hr  style="margin: 0px 5px 0px 5px !important;"/>\
						<div class="col-md-12 text-right" style="padding: 0px 15px 10px 0;">\
							<i class="icon-remove" onclick="removeRow('+randNumber+', table)" style="cursor:pointer;"> </i>\
						</div>\
					   <div class="form-group col-md-8">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Current Employer:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" coSignerUniqueNum="'+appendInDiv+'" type="text" class="form-control" id="current_employer_'+randNumber+'" name="current_employer['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
						<div class="form-group col-md-4">\
							<div class="input-group date-picker input-daterange" data-date="10/11/2012" data-date-format="mm/dd/yyyy">\
								<span class="input-group-addon customBackground">From</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" coSignerUniqueNum="'+appendInDiv+'"  type="text" class="form-control form-control-inline date-picker"  id="current_employer_from_'+randNumber+'" name="current_employer_from['+randNumber+']" value="">\
								<span class="input-group-addon customBackground">To</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" coSignerUniqueNum="'+appendInDiv+'"  type="text" class="form-control form-control-inline date-picker"  id="current_employer_to_'+randNumber+'" name="current_employer_to['+randNumber+']" value="">\
							</div>\
							<span class="help-block text-right">\
								<a href="javascript:void(0)" postToTable="'+table+'" uniqueNum="'+randNumber+'" class="currentDateSet" changeField="current_employer_to['+randNumber+']">Set Current</a>\
							</span>\
						</div>\
					</div>';
					
	html	+=	'<div class="row row_'+randNumber+'" style="padding:10px">\
					   <div class="form-group col-md-12">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Current Address, State, Zip:</span>\
								<textarea postToTable="'+table+'" uniqueNum="'+randNumber+'" coSignerUniqueNum="'+appendInDiv+'" data-required="1" class="form-control" id="current_employer_add_'+randNumber+'" name="current_employer_add['+randNumber+']"></textarea>\
							</div>\
						</div>\
					</div>';
					
	html	+=	'<div class="row row_'+randNumber+'" style="padding:10px">\
					   <div class="form-group col-md-4" >\
							<div class="input-group" >\
								<span class="input-group-addon customBackground">Phone #</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" coSignerUniqueNum="'+appendInDiv+'" type="text" class="form-control phone" id="current_employer_phone_'+randNumber+'" name="current_employer_phone['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Position:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" coSignerUniqueNum="'+appendInDiv+'" type="text" class="form-control" id="current_employer_position_'+randNumber+'" name="current_employer_position['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">NET income/mo:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" coSignerUniqueNum="'+appendInDiv+'" type="text" class="form-control" id="current_employer_netincome_'+randNumber+'" name="current_employer_netincome['+randNumber+']" value=""/>\
							</div>\
						</div>\
					</div>';
					
	$('#coRenterMoreCurrentEmployment'+appendInDiv).append(html);
	
	$('.date-picker').datepicker();
	$('.timepicker-default').timepicker();
	
	applicantForm.init();
}


function coRenterMoreCurrentPreviousEmployment(appendInDiv='', table1)
{
	var randNumber = $.now();
	
	html	=	'';
	table	=	table1;
	
	
	_previousEmployerName	=	$.trim($('#previous_employer_'+appendInDiv).val());
	_previousEmployerAdd	=	$.trim($('#previous_employer_add_'+appendInDiv).val());
	_previousEmployerPhone	=	$.trim($('#previous_employer_phone_'+appendInDiv).val());
	
	if(_previousEmployerName == '' && _previousEmployerPhone == '')
	{
		alert('Before adding more, please enter details first for previous employer');
		return false;
	}	
	
	
	
	html	+=	'<div class="row row_'+randNumber+'" style="padding:10px">\
						<hr  style="margin: 0px 5px 0px 5px !important;"/>\
						<div class="col-md-12 text-right" style="padding: 0px 15px 10px 0;">\
							<i class="icon-remove" onclick="removeRow('+randNumber+', table)" style="cursor:pointer;"> </i>\
						</div>\
					   <div class="form-group col-md-8">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Company Name:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" coSignerUniqueNum="'+appendInDiv+'" type="text" class="form-control" id="previous_employer_'+randNumber+'" name="previous_employer['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
						<div class="form-group col-md-4">\
							<div class="input-group date-picker input-daterange" data-date="10/11/2012" data-date-format="mm/dd/yyyy">\
								<span class="input-group-addon customBackground">From</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" coSignerUniqueNum="'+appendInDiv+'"  type="text" class="form-control form-control-inline date-picker"  id="previous_employer_from_'+randNumber+'" name="previous_employer_from['+randNumber+']" value="">\
								<span class="input-group-addon customBackground">To</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'"  coSignerUniqueNum="'+appendInDiv+'" type="text" class="form-control form-control-inline date-picker"  id="previous_employer_to_'+randNumber+'" name="previous_employer_to['+randNumber+']" value="">\
							</div>\
							<span class="help-block text-right">\
								<a href="javascript:void(0)" postToTable="'+table+'" uniqueNum="'+randNumber+'" class="currentDateSet" changeField="previous_employer_to['+randNumber+']">Set Current</a>\
							</span>\
						</div>\
					</div>';
					
	html	+=	'<div class="row row_'+randNumber+'" style="padding:10px">\
					   <div class="form-group col-md-12">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Address, State, Zip:</span>\
								<textarea postToTable="'+table+'" uniqueNum="'+randNumber+'" coSignerUniqueNum="'+appendInDiv+'" data-required="1" class="form-control" id="previous_employer_add_'+randNumber+'" name="previous_employer_add['+randNumber+']"></textarea>\
							</div>\
						</div>\
					</div>';
					
	html	+=	'<div class="row row_'+randNumber+'" style="padding:10px">\
					   <div class="form-group col-md-4" >\
							<div class="input-group" >\
								<span class="input-group-addon customBackground">Phone #</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" coSignerUniqueNum="'+appendInDiv+'" type="text" class="form-control phone" id="previous_employer_phone_'+randNumber+'" name="previous_employer_phone['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Position:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" coSignerUniqueNum="'+appendInDiv+'" type="text" class="form-control" id="previous_employer_position_'+randNumber+'" name="previous_employer_position['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">NET income/mo:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" coSignerUniqueNum="'+appendInDiv+'" type="text" class="form-control" id="previous_employer_netincome_'+randNumber+'" name="previous_employer_netincome['+randNumber+']" value=""/>\
							</div>\
						</div>\
					</div>';
					
					
	$('#coRenterMoreCurrentPreviousEmployment'+appendInDiv).append(html);
	
	$('.date-picker').datepicker();
	$('.timepicker-default').timepicker();
	
	applicantForm.init();
}
//-------------------Co-Renter-related-function------------------------------//

//--------------------renter block-------------------------------------------//
function moreRenterBlock(appendInDiv='')
{
	var randNumber = $.now();
	
	html								=	'';
	signatureOfCoRenterHtml				=	'';
	signatureOfCoRenterHtmlPage3		=	'';
	
	table										=	'pdf_data_cosigner';
	coRenterMorePreviousLandlordTable			=	'pdf_data_cosigner_previous_landlord';
	coRenterMoreCurrentEmploymentTable			=	'pdf_data_cosigner_current_employment';
	coRenterMoreCurrentPreviousEmploymentTable	=	'pdf_data_cosigner_previous_employment';
	
	renterNumber	=	$('.cosignerDetailBlock').length + 1;
	
	monthArray		=	['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	monthDropdown	=	'';
	dateDropdown	=	'';
	yearDropdown	=	'';
	
	jQuery.each( monthArray, function( i, val )
	{
		monthDropdown	+=	'<option value="'+(i+1)+'">';
		monthDropdown	+=	val;
		monthDropdown	+=	'</option>';
	});
	
	for(i = 1; i <= 31; i++)
	{
		dateDropdown	+=	'<option value="'+i+'">';
		dateDropdown	+=	i;
		dateDropdown	+=	'</option>';
	}
	
	for(i =  (new Date).getFullYear(); i >= 1900; i--)
	{
		yearDropdown	+=	'<option value="'+i+'">';
		yearDropdown	+=	i;
		yearDropdown	+=	'</option>';
	}
	
	html	=	'<div class="row cosignerDetailBlock row_'+randNumber+'" id="renterDetailBlock_'+randNumber+'" style="border:2px solid gray; margin-top:15px">\
					<h5 class="bold font-times-roman headingBlock" >\
						# '+renterNumber+') Select One:\
						<div class="form-group">\
							<label>\
								<input postToTable="'+table+'"  uniqueNum="'+randNumber+'" type="radio" name="renter_type['+randNumber+']"  value="renter" checked> \
									Renter\
							</label>\
							\
							<label>\
								<input postToTable="'+table+'"  uniqueNum="'+randNumber+'" type="radio" name="renter_type['+randNumber+']" value="cosigner" > \
								Co-signer\
							</label>\
						</div>\
						\
						<span class="pull-right">\
							<a href="javascript:void(0)" onclick="removeRow('+randNumber+', table)">\
								X\
							</a>\
						</span>\
					</h5>\
					\
					<div class="row" style="padding:10px">\
					   <div class="form-group col-md-3" >\
							<div class="input-group" >\
								<span class="input-group-addon customBackground">Name:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control" id="cosigner_username_'+randNumber+'" name="cosigner_username['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-5">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Date of birth:</span>\
								<select postToTable="'+table+'" uniqueNum="'+randNumber+'" class="form-control form-control-inline" id="cosigner_dob_month_'+randNumber+'" name="cosigner_dob_month['+randNumber+']" style="width: 80px;">\
									<option value="">MM</option>\
									'+monthDropdown+'\
								</select>\
								\
								<select postToTable="'+table+'" uniqueNum="'+randNumber+'" class="form-control form-control-inline" id="cosigner_dob_date_'+randNumber+'" name="cosigner_dob_date['+randNumber+']" style="width: 70px;">\
									<option value="">DD</option>\
									'+dateDropdown+'\
								</select>\
								\
								<select postToTable="'+table+'" uniqueNum="'+randNumber+'" class="form-control form-control-inline" id="cosigner_dob_year_'+randNumber+'" name="cosigner_dob_year['+randNumber+']" style="width: 100px;">\
									<option value="">YYYY</option>\
									'+yearDropdown+'\
								</select>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">SSN:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control SSN input-xsmall" id="cosigner_ssn_'+randNumber+'" name="cosigner_ssn['+randNumber+']" value="" maxlength="3"/>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control SSN input-xsmall" id="cosigner_ssn_'+randNumber+'_part2" name="cosigner_ssn_part2['+randNumber+']" value="" maxlength="2"/>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control SSN input-xsmall" id="cosigner_ssn_'+randNumber+'_part3" name="cosigner_ssn_part3['+randNumber+']" value="" maxlength="4"/>\
							</div>\
						</div>\
					</div>\
					\
					<div class="row" style="padding:10px">\
						<div class="form-group col-md-8">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Current Address, State, Zip:</span>\
								<textarea postToTable="'+table+'" uniqueNum="'+randNumber+'" data-required="1" class="form-control" id="cosigner_add_'+randNumber+'" name="cosigner_add['+randNumber+']"></textarea>\
							</div>\
						</div>\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Rent Cost: $</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control" id="cosigner_rent_'+randNumber+'" name="cosigner_rent['+randNumber+']" value=""/>\
							</div>\
						</div>\
					</div>\
					\
					<div class="row" style="padding:10px">\
					   <div class="form-group col-md-4" >\
							<div class="input-group" >\
								<span class="input-group-addon customBackground">Landlord`s name:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control" id="cosigner_landlord_'+randNumber+'" name="cosigner_landlord['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Phone#:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control phone" id="cosigner_landlord_phone_'+randNumber+'" name="cosigner_landlord_phone['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group date-picker input-daterange" data-date="10/11/2012" data-date-format="mm/dd/yyyy">\
								<span class="input-group-addon customBackground">From</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'"  type="text" class="form-control form-control-inline date-picker"  id="cosigner_landlord_from_'+randNumber+'" name="cosigner_landlord_from['+randNumber+']" value="">\
								<span class="input-group-addon customBackground">To</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'"  type="text" class="form-control form-control-inline date-picker"  id="cosigner_landlord_to_'+randNumber+'" name="cosigner_landlord_to['+randNumber+']" value="">\
							</div>\
						</div>\
					</div>\
					\
					<h5 class="bold font-times-roman headingBlock">\
						<span>\
							PREVIOUS LANDLORD INFORMATION\
						</span>\
						\
						<span class="pull-right">\
							<a href="javascript:void(0)" onclick="coRenterMorePreviousLandlord('+randNumber+',coRenterMorePreviousLandlordTable)"> \
								+ Add more\
							</a>\
						</span>\
					</h5>\
					\
					<div class="row" style="padding:10px">\
						<div class="form-group col-md-8">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Previous Address, State, Zip:</span>\
								<textarea postToTable="'+table+'" uniqueNum="'+randNumber+'"  data-required="1" class="form-control" id="previous_landlord_add_'+randNumber+'" name="previous_landlord_add['+randNumber+']"></textarea>\
							</div>\
						</div>\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Rent Cost: $</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control" id="previous_landlord_rent_'+randNumber+'" name="previous_landlord_rent['+randNumber+']" value=""/>\
							</div>\
						</div>\
					</div>\
					\
					<div class="row" style="padding:10px">\
					   <div class="form-group col-md-4" >\
							<div class="input-group" >\
								<span class="input-group-addon customBackground">Landlord`s name:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control" id="previous_landlord_name_'+randNumber+'" name="previous_landlord_name['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Landlord`s #</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control phone" id="previous_landlord_phone_'+randNumber+'" name="previous_landlord_phone['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group date-picker input-daterange" data-date="10/11/2012" data-date-format="mm/dd/yyyy">\
								<span class="input-group-addon customBackground">From</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'"  type="text" class="form-control form-control-inline date-picker"  id="previous_landlord_from_'+randNumber+'" name="previous_landlord_from['+randNumber+']" value="">\
								<span class="input-group-addon customBackground">To</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'"  type="text" class="form-control form-control-inline date-picker"  id="previous_landlord_to_'+randNumber+'" name="previous_landlord_to['+randNumber+']" value="">\
							</div>\
						</div>\
					</div>\
					\
					<div id="coRenterMorePreviousLandlord'+randNumber+'">\
						\
					</div>\
					\
					\
					<h5 class="bold font-times-roman headingBlock">\
						<span>\
							CURRENT EMPLOYMENT INFORMATION\
						</span>\
						\
						<span class="pull-right">\
							<a href="javascript:void(0)" onclick="coRenterMoreCurrentEmployment('+randNumber+',coRenterMoreCurrentEmploymentTable)"> \
								+ Add more\
							</a>\
						</span>\
					</h5>\
					\
					<div class="row" style="padding:10px">\
					   <div class="form-group col-md-8">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Current Employer:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control" id="current_employer_'+randNumber+'" name="current_employer['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
						<div class="form-group col-md-4">\
							<div class="input-group date-picker input-daterange" data-date="10/11/2012" data-date-format="mm/dd/yyyy">\
								<span class="input-group-addon customBackground">From</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'"  type="text" class="form-control form-control-inline date-picker"  id="current_employer_from_'+randNumber+'" name="current_employer_from['+randNumber+']" value="">\
								<span class="input-group-addon customBackground">To</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'"  type="text" class="form-control form-control-inline date-picker"  id="current_employer_to_'+randNumber+'" name="current_employer_to['+randNumber+']" value="">\
							</div>\
						</div>\
					</div>\
					\
					<div class="row" style="padding:10px">\
					   <div class="form-group col-md-12">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Current Address, State, Zip:</span>\
								<textarea postToTable="'+table+'" uniqueNum="'+randNumber+'" data-required="1" class="form-control" id="current_employer_add_'+randNumber+'" name="current_employer_add['+randNumber+']"></textarea>\
							</div>\
						</div>\
					</div>\
					\
					<div class="row" style="padding:10px">\
					   <div class="form-group col-md-4" >\
							<div class="input-group" >\
								<span class="input-group-addon customBackground">Phone #</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control phone" id="current_employer_phone_'+randNumber+'" name="current_employer_phone['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Position:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control" id="current_employer_position_'+randNumber+'" name="current_employer_position['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">NET income/mo:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control" id="current_employer_netincome_'+randNumber+'" name="current_employer_netincome['+randNumber+']" value=""/>\
							</div>\
						</div>\
					</div>\
					\
					<div id="coRenterMoreCurrentEmployment'+randNumber+'">\
					</div>\
					\
					<h5 class="bold font-times-roman headingBlock">\
						<span class="checkbox-list">\
							<label class="checkbox-inline bold">\
								PREVIOUS EMPLOYER`S INFORMATION\
							</label>\
						</span>\
						\
						<span class="pull-right">\
							<a href="javascript:void(0)" onclick="coRenterMoreCurrentPreviousEmployment('+randNumber+', coRenterMoreCurrentPreviousEmploymentTable)"> \
								+ Add more\
							</a>\
						</span>\
					</h5>\
					\
					<div class="row" style="padding:10px">\
					   <div class="form-group col-md-8">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Company Name:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control" id="previous_employer_'+randNumber+'" name="previous_employer['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
						<div class="form-group col-md-4">\
							<div class="input-group date-picker input-daterange" data-date="10/11/2012" data-date-format="mm/dd/yyyy">\
								<span class="input-group-addon customBackground">From</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'"  type="text" class="form-control form-control-inline date-picker"  id="previous_employer_from_'+randNumber+'" name="previous_employer_from['+randNumber+']" value="">\
								<span class="input-group-addon customBackground">To</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'"  type="text" class="form-control form-control-inline date-picker"  id="previous_employer_to_'+randNumber+'" name="previous_employer_to['+randNumber+']" value="">\
							</div>\
						</div>\
					</div>\
					\
					<div class="row" style="padding:10px">\
					   <div class="form-group col-md-12">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Address, State, Zip:</span>\
								<textarea postToTable="'+table+'" uniqueNum="'+randNumber+'" data-required="1" class="form-control" id="previous_employer_add_'+randNumber+'" name="previous_employer_add['+randNumber+']"></textarea>\
							</div>\
						</div>\
					</div>\
					\
					<div class="row" style="padding:10px">\
					   <div class="form-group col-md-4" >\
							<div class="input-group" >\
								<span class="input-group-addon customBackground">Phone #</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control phone" id="previous_employer_phone_'+randNumber+'" name="previous_employer_phone['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">Position:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control" id="previous_employer_position_'+randNumber+'" name="previous_employer_position['+randNumber+']" value=""/>\
							</div>\
						</div>\
						\
					   <div class="form-group col-md-4">\
							<div class="input-group">\
								<span class="input-group-addon customBackground">NET income/mo:</span>\
								<input postToTable="'+table+'" uniqueNum="'+randNumber+'" type="text" class="form-control" id="previous_employer_netincome_'+randNumber+'" name="previous_employer_netincome['+randNumber+']" value=""/>\
							</div>\
						</div>\
					</div>\
					\
					<div id="coRenterMoreCurrentPreviousEmployment'+randNumber+'">\
					</div>\
					\
				</div>';
	
	
	signatureOfCoRenterHtml		+=	'<div class="row row_'+randNumber+'" style="padding:10px">\
										   <div class="form-group col-md-8">\
												<div class="input-group">\
													<span class="input-group-addon signatureLabel'+randNumber+' customBackground">Signature of Co-Renter:</span>\
													<input  postToTable="'+table+'"  uniqueNum="'+randNumber+'" type="text" class="form-control" id="cosigner_signature_'+randNumber+'" name="cosigner_signature['+randNumber+']" value=""/>\
												</div>\
											</div>\
											\
										   <div class="form-group col-md-4">\
												<div class="input-group date-picker input-daterange" data-date="10/11/2012" data-date-format="mm/dd/yyyy">\
													<span class="input-group-addon customBackground">Date:</span>\
													<input postToTable="'+table+'"  uniqueNum="'+randNumber+'" type="text" class="form-control form-control-inline date-picker" id="cosigner_signature_date_'+randNumber+'" name="cosigner_signature_date['+randNumber+']"  value=""/>\
												</div>\
											</div>\
										</div>';
										
	signatureOfCoRenterHtmlPage3	+=	'<div class="row row_'+randNumber+'" style="margin-bottom:10px">\
										   <div class="form-group col-md-12">\
												<div class="input-group">\
													<span class="input-group-addon signatureLabel'+randNumber+' customBackground">Signature of Co-Renter:</span>\
													<input  postToTable="'+table+'"  uniqueNum="'+randNumber+'" type="text" class="form-control"  name="cosigner_signature['+randNumber+randNumber+']" value=""/>\
												</div>\
											</div>\
										</div>';

	$('#moreRenterBlock').append(html);
	$('.signatureOfCoRenter').append(signatureOfCoRenterHtml);
	$('.signatureOfCoRenterPage3').append(signatureOfCoRenterHtmlPage3);
	
	$('.date-picker').datepicker();
	$('.timepicker-default').timepicker();
	
	applicantForm.init();
}
//--------------------renter block-------------------------------------------//
function removeRow(randNumber, table, ifCorenterDecrease = '0')
{
	pdf_user_id			=	$("#pdf_user_id").val();
	
	if(confirm('Are you sure you want to delete this section?'))
	{
		postData			=	{
									action				: 'deleteData', 
									uniqueNum			: randNumber, 
									table				: table,
									pdf_user_id			: pdf_user_id,
									ifCorenterDecrease	:	ifCorenterDecrease
								};
		
		$.ajax
		({
			type: "post",
			url: "post_multipleData.php",
			data: postData,
			beforeSend: function() {
			},
			error: function(response) {
			  alert("Record not deleted. Please reload your browser and try again");
			},
			success: function(response) 
			{
				console.log(response);
				$('.row_'+randNumber).remove();
			}
		});
	}
	
}
