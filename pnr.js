module.exports = function (controller) {

    controller.hears([/(\s?\w)*\s?pnr(\s?\w)*/gi], 'direct_message,direct_mention', function (bot, message) {
            bot.startConversation(message, function (err, convo) {
                convo.say("PNR is short name for 'Passenger Name Record'. It is a record in the database of Indian Railways computer reservation system (IR-CRS) against which journey details for a passenger, or a group of passengers are saved. \
To be specific, when a reserved railway ticket is booked for a train in Indian Railways, all the details of passengers are stored in relational database of centralized reservation system. These details are associated with a unique ten digit number. This reference number is called PNR and it is printed on the ticket.");
            var question = "Do you wanna know about";
            question += "<br/> `1)` PNR Status";
            question += "<br/> `2)` Time Table";
            question += "<br/> `3)` Live Train Status";
            question += "<br/> `4)` Exit";
            question += "\n\nWhat do you want to do ?<br/>_(type a number, a **bold keyword** or `cancel`)_";
            convo.ask(question, [
                {
                    pattern: "1|pnr",
                    callback: function (response, convo) {
                        convo.ask('What is your PNR Number?', function (response, convo) {
                        convo.say("You Can Check you Train status here https://www.railyatri.in/pnr-status/" + response.text +"/");
                        convo.next();
            });
                        convo.next();
                    },
                }
                , 
                {
                    pattern: "2|time table",
                    callback: function (response, convo) {
                        convo.ask('What is your Train Number?', function (response, convo) {
                        convo.say("You Can Check you Train status here https://www.railyatri.in/time-table/" + response.text +"/");
                        convo.next();
            });
                        convo.next();
                    },
                }
                ,
                {
                    pattern: "3|live status",
                    callback: function (response, convo) {
                        convo.ask('What is your Train Number?', function (response, convo) {
                        convo.say("You Can Check you Live Train status here https://www.railyatri.in/live-train-status/" + response.text +"/");
                        convo.next();
            });
                        convo.next();
                    },
                }
                ,
                {
                    pattern: "4|exit",
                    callback: function (response, convo) {
                        convo.say("Thank you. Please type your next command.");
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