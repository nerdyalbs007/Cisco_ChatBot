
module.exports = function (controller) {

    controller.hears([/(\w\s?)*\s?advance(\s?\w)*\s?period(\s?\w)*\s?/gi], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
                convo.say("Indian Railways requires reservations on long-distance trains for all classes of accommodations except second class. Online bookings can be carried out via the IRCTC Online Passenger Reservation website. However, travel portals such as Cleartrip.com, Makemytrip.com,​ and Yatra.com also offer online train bookings. These websites are much more user-friendly but they do levy a service charge.\
Do note that it's only possible to buy six tickets per month from one user ID online.");
                convo.next();
            });

    });
};
