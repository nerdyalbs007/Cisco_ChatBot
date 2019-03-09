module.exports = function (controller) {

    controller.hears([/(\w*\s)*?tatkal(\w*\s)*/gi], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
                convo.say("Tatkal booking is meant for immediate travel plans.\
Tatkal booking for every train opens 1 days in advance at 10 am for AC (Air conditioned Class) and at 11 Am for Non-Ac.\
You can book tatkal e-ticket online irctc.co.in or any other online booking agency.\
Every train and class has a defined tatkal quota and it varies from station to station.\
Many of the trains does not have tatkal category.\
You have to select the Tatkal check box in the 'Plan my travel' page along with other details for booking tatkal ticket.");
                convo.next();
            });

    });
};