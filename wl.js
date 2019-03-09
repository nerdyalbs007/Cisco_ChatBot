module.exports = function (controller) {

    controller.hears([/wl(\s?\w)*\s?/gi], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
                convo.say("WL means Wait List. This facility allows you to book a ticket. However, you aren't supposed to board the train unless there are enough cancellations to at least get RAC (Reservation Against Cancellation) status.");
                convo.next();
            });

    });
};