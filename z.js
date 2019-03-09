module.exports = function (controller) {

    controller.hears(["(.*)"], 'direct_message,direct_mention', function (bot, message) {
        var mardown = "Sorry, I did not understand.<br/>Try "
            + bot.enrichCommand(message, "help");
            var question = "Do you want to prompt us about your query ?";
            question += "<br/> `Press 1 or Type Add)` To prompt us";
            question += "<br/> `Press 2)` To exit"; 
            convo.ask(question, [
                {
                    pattern: "1|Add",
                    callback: function (response, convo) {
                       convo.ask('Please enter your question', function (response, convo) {
                            var text=response.text;
                            const fs = require('fs');
            fs.writeFile("./Output.txt", text, function(err) {
                if(err) {
                             return console.log(err);
                        }

    console.log("The file was saved!");
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
                        convo.say("Thank you. Please type your next command.");
                        convo.next();
                    },
                }
            ]);
            convo.addMessage({
                text: "Sorry, I did not understand.",
                action: 'default',
            }, 'bad_response'); 
        bot.reply(message, mardown);
    });
