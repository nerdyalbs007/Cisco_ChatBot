
module.exports = function (controller) {

    controller.hears([/coaches(\s?\w)*\s?/gi], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
                convo.say("Indian Railways has numerous classes of travel: Second Class Unreserved, Sleeper Class (SL), Three-Tier Air-Conditioned Class (3AC), Two Tier Air-Conditioned Class (2AC), First Class Air-Conditioned (1AC), Air-Conditioned Chair Car (CC), and Second Class Sitting (2S).\
In order to be comfortable, it's important to choose the class that's most suitable for you.");
                convo.next();
            });

    });
};

/*module.exports = function (controller) {

    controller.hears([/coaches(\s?\w)*\s?/gi], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
                convo.say("");
                convo.next();
            });

    });
};*/