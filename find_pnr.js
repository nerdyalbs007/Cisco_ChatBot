module.exports = function (controller) {

    controller.hears([/(\s?\w)*\s?find(\s?\w)*/gi], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
                convo.say("On a paper ticket released in a railway booking counter, the PNR number is on the top left of the ticket.\
The PNR number on ticket might be split right into 3-7(digits) form (e.g. 890-1234567) on paper ticket.\
On IRCTC e-ticket or any other agency e-ticket the PNR number can be on the top left of the ticket.\
PNR might also be on SMS alert on your mobile if you have booked e-ticket and provided your mobile number.\
Below are two ticket samples of Online/IRCTC Ticket and Counter/Paper Ticket. In this you can see the location of PNR Number");
                convo.next();
            });

    });
};