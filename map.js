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
                    callback: function (response, convo) {
                        convo.ask('Enter the place to be searched?', function (response, convo) {
                var loc=response.text;
                //var loc1=loc.replace(/(^\s+|\s+$)/g, "+");
                var loc1=loc.split(" ").join("+");
                convo.say("https://www.google.com/maps/search/?api=1&query="+loc1);
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