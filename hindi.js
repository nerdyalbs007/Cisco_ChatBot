module.exports = function (controller) {

    controller.hears([/(\s?\w)*\s?pam|नक्शे|नक्शा|नकशा\s?(\s?\w)*/gi], 'direct_message,direct_mention', function (bot, message) {
            bot.startConversation(message, function (err, convo) {
            var question = "क्या आप इसके बारे में जानना चाहते हैं";
            question += "<br/> `1)` विशिष्ट स्थान";
            question += "<br/> `2)` दो स्थानों के बीच का मार्ग \n";
            question += "\nआप क्या करना चाहते हैं?";
            convo.ask(question, [
                {
                    pattern: "1",
                    callback: function (response, convo) {
                        convo.ask('खोजे जाने वाली जगह दर्ज करें?', function (response, convo) {
                var loc=response.text;
                //var loc1=loc.replace(/(^\s+|\s+$)/g, "+");
                var loc1=loc.split(" ").join("+");
                convo.say("https://www.google.com/maps/search/?api=1&query="+loc1);
                convo.next();
            });     
                        convo.next();

                    },
                }
                ,
                {
                    pattern: "2",
                    callback: function (response, convo) {
                    convo.ask('प्रारंभिक स्थान दर्ज करें?', function (response, convo) {
                var start=response.text;
                    convo.next();
                convo.ask('समाप्ति स्थान दर्ज करें?', function (response, convo) {
                var end=response.text;
                    convo.next();
                convo.say("https://www.google.com/maps/dir/?api=1&origin="+start.split(" ").join("+")+"&destination="+end.split(" ").join("+"));
                    convo.next();
                });
            });
                    convo.next();
                    },
                }
            ]);

            // Bad response
            convo.addMessage({
                text: "Sorry, I did not understand.",
                action: 'default',
            }, 'bad_response');
        });
    });
};