var gisPrototype = (function () {
    var map;
    var infoWindow;
    var initMap = function () {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -6.175039, lng: 106.827317},
            zoom: 11
        });
        start();
    };

    var start = function () {
        $('.modal-trigger').leanModal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            in_duration: 300, // Transition in duration
            out_duration: 200, // Transition out duration
            ready: function () {
                //alert('Ready');
            }, // Callback for Modal open
            complete: function () {
                //alert('Closed');
            } // Callback for Modal close
        }
        );

        var paths1 = [
            {lat: -6.118162, lng: 106.734448},
            {lat: -6.153151, lng: 106.727925},
            {lat: -6.157759, lng: 106.767922},
            {lat: -6.166122, lng: 106.787663},
            {lat: -6.152468, lng: 106.793500},
            {lat: -6.132158, lng: 106.784230},
            {lat: -6.122088, lng: 106.773587},
            {lat: -6.118162, lng: 106.734448}
        ];

        var paths2 = [
            {lat: -6.129902, lng: 106.830578},
            {lat: -6.177519, lng: 106.842251},
            {lat: -6.166255, lng: 106.878987},
            {lat: -6.130755, lng: 106.892205},
            {lat: -6.122392, lng: 106.860962},
            {lat: -6.129902, lng: 106.830578}
        ];

        var area1 = new google.maps.Polygon(
                {
                    id: 1,
                    paths: paths1,
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35
                });

        var area2 = new google.maps.Polygon(
                {
                    id: 2,
                    paths: paths2,
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#FFFF00',
                    fillOpacity: 0.35
                });

        area1.setMap(map);
        area2.setMap(map);

        google.maps.event.addListener(area1, 'mouseover', function (event) {
            showInfoWindow(event, this.id)
        });
        google.maps.event.addListener(area2, 'mouseover', function (event) {
            showInfoWindow(event, this.id)
        });

        infoWindow = new google.maps.InfoWindow;

        $('#sendButton').on('click', function () {

        });
    };

    function showInfoWindow(event, id) {
        var contentString;
        switch (id) {
            case 1:
                contentString = 'i am here';
                break;
            case 2:
                contentString = 'you are there';
                break;
        }
        infoWindow.setContent(contentString);
        infoWindow.setPosition(event.latLng);
        infoWindow.open(map);
    }
    return {
        initMap: initMap
    }
})();

$(document).ready(function () {
    $('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDmmcOk8qbIouC27avL5-tmIMSlJsH1_7A&callback=gisPrototype.initMap" async defer></script>').appendTo('body');
});