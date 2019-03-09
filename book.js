module.exports = function (controller) {

    controller.hears([/(\w\s?)*\s?book(\s?\w)*/gi], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
                convo.say("You can book your ticket here https://www.irctc.co.in/nget/train-search");
                convo.next();
            });

    });
};
//uqtzar0o30
