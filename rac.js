module.exports = function (controller) {

    controller.hears([/(\s?\w)*\s?rac(\s?\w)*/gi], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
                convo.say("RAC means Reservation Against Cancellation. This type of reservation allows you to board the train and guarantees you somewhere to sit -- but not necessarily somewhere to sleep! Berths will be allocated to RAC holders if a passenger, who has a confirmed ticket, cancels their ticket or doesn't turn up.");
                convo.next();
            });

    });
};