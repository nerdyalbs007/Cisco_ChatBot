module.exports = function (controller) {

    controller.hears([/(\s?\w)*\s?numbers?\s?(\s?\w)*/gi], 'direct_message,direct_mention', function (bot, message) {
        bot.startConversation(message, function (err, convo) {
                convo.say("Railway helpline number is : 139");
                convo.next();
            });

    });
};