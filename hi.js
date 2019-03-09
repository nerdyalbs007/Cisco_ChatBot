module.exports = function (controller) {

    controller.hears([/((\w*\s)*)?\s?hi((\s\w*)*)?/gi], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            var ans="Hello Sir, How may i help you?";
            ans+="<br/>Type 'help' to know more about me";
            convo.say(ans);
            convo.next();
            });

    });
};