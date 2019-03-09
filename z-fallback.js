//
// Fallback Command
//
module.exports = function (controller) {

    controller.hears([/(.\s?)/gi], 'direct_message,direct_mention', function (bot, message) {
            bot.startConversation(message, function (err, convo) {
                 var mardown = 
            + bot.enrichCommand(message, "help");
            convo.say("Sorry, I did not understand.");
            var question = "Do you want to prompt us about your query ?";
            question += "<br/> `Press 1 or Type Add)` To prompt us";
            question += "<br/> `Press 2)` To exit"; 
            convo.ask(question, [
                {
                    pattern: "1|Add",
                    callback: function (response, convo)
                    {
                        convo.ask('Enter your question. ', function (response, convo) {
                            var quest = response.text;
                            convo.say("Your question is:\n"+quest);
                            var fs = require('fs');

                            var data = response.text;
                            fs.appendFile('Output.txt', data+"\r\n", function(err, data){
                              if (err) console.log(err);
                            console.log("Successfully Written to File.");
                            convo.say("Thank you.");
                        });
                            convo.next();
                    });
                        convo.next();
                    },
                }
                , 
                
                {
                    pattern: "2|Exit",
                    callback: function (response, convo) {
                        convo.say("Thank You!!");
                        convo.next();
                    }
                }
                ,
                
                
            ]);

            // Bad response
            convo.addMessage({
                text: "Sorry, I did not understand.",
                action: 'default',
            }, 'bad_response');
        });
    });
};