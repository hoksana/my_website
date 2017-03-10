//form
$(function() {
    $('#btn-submit').click(function(e) {
       e.preventDefault();
       $.ajax({
            url: "https://formspree.io/oksana.halus@gmail.com", 
            method: "POST",
            data: {
                clientFirstName: $('#client-first').val(),
                clientLastName: $('#client-last').val(),
                clientEmail: $('#client-email').val(),
                clientPhone: $('#client-phone').val(),
                message: $('#message').val()
            },
            dataType: "json"
       })
         .done(function() {
             $('form').html('<h2>Thank you for contacting us!</h2>');
         });
    });    
});

//map

function init_map(){
    var myOptions = {zoom:10,center:new google.maps.LatLng(48.2920787,25.93583669999998),mapTypeId: google.maps.MapTypeId.HYBRID};
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(48.2920787,25.93583669999998)});
    infowindow = new google.maps.InfoWindow({content:'<strong>Oksana Khalus</strong><br>Chernivtsi, Ukraine<br>'});
    google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
    infowindow.open(map,marker);
   }
   google.maps.event.addDomListener(window, 'load', init_map);