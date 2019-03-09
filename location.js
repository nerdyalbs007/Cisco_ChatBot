module.exports = function (controller) {

    controller.hears([/(\w\s?)*\s?location(\s?\w)*/gi], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
        	function geoTest() {

    if (google.loader.ClientLocation) {

        var latitude = google.loader.ClientLocation.latitude;
        var longitude = google.loader.ClientLocation.longitude;
        var city = google.loader.ClientLocation.address.city;
        var country = google.loader.ClientLocation.address.country;
        var country_code = google.loader.ClientLocation.address.country_code;
        var region = google.loader.ClientLocation.address.region;

        var text = 'Your Location<br /><br />Latitude: ' + latitude + '<br />Longitude: ' + longitude + '<br />City: ' + city + '<br />Country: ' + country + '<br />Country Code: ' + country_code + '<br />Region: ' + region;

    } else {

        var text = 'Google was not able to detect your location';

    }

    document.write(text);
}

geoTest();

                //convo.say("");
                convo.next();
            });

    });
};