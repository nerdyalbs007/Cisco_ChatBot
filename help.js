//
// Command: help
//
module.exports = function (controller) {

    controller.hears([/((\w*\s))?help((\s\w)*)?/gi], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.enrichCommand(message, "help") + ": spreads the word about my skills";
        text += "\n- " + bot.enrichCommand(message, "number") + ": Give you the helpline number";
        text += "\n- " + bot.enrichCommand(message, "book") + ": redirect you to a website to book a ticket";
        text += "\n- " + bot.enrichCommand(message, "PNR ") + ": Gives you details about PNR";
        text += "\n- " + bot.enrichCommand(message, "error ") + ": Gives you details about most common errors of PNR";
        text += "\n- " + bot.enrichCommand(message, "map ") + ": Gives you details about a specific location or a travel route between two places.";
        text += "\n- " + bot.enrichCommand(message, "नक्शे/नक्शा/नकशा") + ": आपको एक विशिष्ट स्थान या दो स्थानों के बीच यात्रा मार्ग के बारे में जानकारी देता है।";  
        text += "\n- " + bot.enrichCommand(message, "find ") + ": Gives you details about finding your PNR";
        text += "\n- " + bot.enrichCommand(message, "tatkal") + ": Gives you details about Tatkal Booking";
        text += "\n- " + bot.enrichCommand(message, "conditions") + ": Gives you details about Tatkal Booking Conditions";
		text += "\n- " + bot.enrichCommand(message, "online reservation") + ": Detailed explanation on online reservation";
        text += "\n- " + bot.enrichCommand(message, "coaches") + ": Details on Coaches of Trains";
        text += "\n- " + bot.enrichCommand(message, "order food") + ": How to order food in train";
        text += "\n- " + bot.enrichCommand(message, "RAC") + ": Details about the term RAC";
        text += "\n- " + bot.enrichCommand(message, "WL") + ": Details about the WL";
        bot.reply(message, text);
    });
}
