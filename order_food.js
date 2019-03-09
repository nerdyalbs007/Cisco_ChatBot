module.exports = function (controller) {

    controller.hears([/(\s?\w)*\s?order(\s?\w)*\s?food(\s?\w)*\s?/gi], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
                convo.say("There are a number of options for meals on Indian Railways. Many long-distance trains have pantry cars that provide food to passengers. However, unfortunately, the quality has deteriorated in recent years. The demand for better food has resulted in the startup of independent food delivery services, which have partnered with local restaurants. You can pre-order food (either by phone, online, or using an app), and the restaurant will package and deliver it to your seat. Travel Khana, Mera Food Choice, Rail Restro, and Yatra Chef are some popular options. Indian Railways has begun to introduce a similar service, called e-catering.");
                convo.next();
            });

    });
};