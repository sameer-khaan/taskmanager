function zoomchangedprop()
{
 
 /*var xhr = null;
 var tiles_listener = google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
 var zoom_listener = google.maps.event.addListener(map, 'zoom_changed', function() {
 var zoom_changed = map.getZoom();
 var latNEValue =  map.getBounds().getNorthEast().lat();
    // NorthEast Longitude : 180
     var longNEValue = map.getBounds().getNorthEast().lng();
     // SouthWest Latitude : -87.71179927260242
     var latSWValue =  map.getBounds().getSouthWest().lat();
     // Southwest Latitude :  -180
     var longSWValue = map.getBounds().getSouthWest().lng();

  
  
 
  var datastring = 'latNEValue='+latNEValue+'&longNEValue='+longNEValue+'&latSWValue='+latSWValue+'&longSWValue='+longSWValue+'&zoom_changed='+zoom_changed;
  //flter_properties_with_zoom(datastring);  

  var url = 'http://modernagent24.com/map/admin/ajax_filter_properties.php';
  //$('#ajaxloader').html('<img src="'+base_url+'/assets/img/loading-x.gif">');
    //--- Disply loading image ---
  
  //jQuery('.loading').show();
  //jQuery('.loading').addClass('loaderimg')
  
 
  //--- Disply loading image end ---
  // if there is a previous ajax request, then we abort it and then set xhr to null /
        if( xhr != null ) {
                xhr.abort();
                xhr = null;
        }
  xhr = $.ajax({
   type:'post',
   url:url,
   data:datastring,
   crossDomain:true, 
   success:function(data)
   {
    //alert(data);
	//jQuery('#search_result_filtered').html(data);
    //console.log(data['total_rows']);
    /*var total_rows = data['pager_total_count']+' Results';
    //init_google_map(data);
    resetMarkers(markersArray);
    deleteMarkers();
    $.each(data, function(i, item) {
   
   //console.log(data[i]);
   if(typeof data[i] === "object") {
   if(typeof data[i].GeoLat !== "undefined") {  
    var lat  = check_null_val(data[i].GeoLat);
    var html = '';
     var longit  = check_null_val(data[i].GeoLong);
     if(lat != 0 || longit != 0) {
     
      if(data[i].image!='')
     {
     
    
     
    }
    else
    {
     html+= '<img alt="" src="'+base_url+'assets/images/dummy.jpg" width="100" height="100">';
    }
     
     
     
     
    addMarker(lat,longit ,'<div class="marker_main"><div class="img_marker">'+html+'</div><div class="cont_marker"><b>'+data[i].Address+'</b><br/><b>$'+data[i].list_price1+'</b><br/>'+data[i].NoBR+'bd,'+data[i].NoFB+'ba<br/>'+data[i].SqFt+' SqFt<span class="systemid" id="'+data[i].SystemID+'"></span></div><div class="clr"></div></div>');  
    }
  }  
  }
 });*/


 /*  }
  
  });
 

 
   }); 
   
   }); */
 }