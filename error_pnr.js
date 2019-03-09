module.exports = function (controller) {

    controller.hears([/(\s?\w)*\s?errors?(\s?\w)*/gi], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
                convo.say("There could be 3 possible reasons.\n\
1. You entered wrong PNR number(Please check PNR then try again).\n\
2. Web servers are down.(In this case check again couple of minutes).\n\
3. Indian Railways Servers Maintenance happens at 11:30pm - 12:30am (Check again after 12:30 AM).\n");
                convo.next();
            });

    });
};
