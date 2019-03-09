module.exports = function (controller) {

    controller.hears([/(\s?\w)*\s?map\s?(\s?\w)*/gi], 'direct_message,direct_mention', function (bot, message) {
            bot.startConversation(message, function (err, convo) {
            var question = "Do you wanna know about";
            question += "<br/> `1)` Specific Location";
            question += "<br/> `2)` Route between Two locations";
            question += "\n\nWhat do you want to do ?<br/>_(type a number)_";
            convo.ask(question, [
                {
                    pattern: "1",
                    callback: 
            function (response, convo) {
         function showLocation(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var latlongvalue = position.coords.latitude + ","
            + position.coords.longitude;
            var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
            +latlongvalue+"&amp;zoom=14&amp;size=400x300&amp;key           =AIzaSyCXDkJ-e_8qy_2_M5KfezTS_5I6IFoEuO8";
            document.getElementById("mapholder").innerHTML =
            "<img src='"+img_url+"'>";
         }
         function errorHandler(err) {
            if(err.code == 1) {
               alert("Error: Access is denied!");
            } else if( err.code == 2) {
               alert("Error: Position is unavailable!");
            }
         }
         function getLocation(){
            if(navigator.geolocation){
               // timeout at 60000 milliseconds (60 seconds)
               var options = {timeout:60000};
               navigator.geolocation.getCurrentPosition
               (showLocation, errorHandler, options);
            } else{
               alert("Sorry, browser does not support geolocation!");
            }
         }
         
                convo.next();
            });     
                        convo.next();

                    },
                }
                ,
                {
                    pattern: "2",
                    callback: function (response, convo) {
                    convo.ask('Enter the starting location?', function (response, convo) {
                var start=response.text;
                    convo.next();
                convo.ask('Enter the ending location?', function (response, convo) {
                var end=response.text;
                    convo.next();
                convo.say("https://www.google.com/maps/dir/?api=1&origin="+start.split(" ").join("+")+"&destination="+end.split(" ").join("+"));
                    convo.next();
                });
            });
                    convo.next();
                    },
                }
            ]);

            // Bad response
            convo.addMessage({
                text: "Sorry, I did not understand.",
                action: 'default',
            }, 'bad_response');
        });
    });
};



