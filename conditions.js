module.exports = function (controller) {

    controller.hears([/(\w*\s)*?condition\s?(\w*\s)*?/gi], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
                convo.say("Tatkal tickets shall be issued only on production of one of the ten prescribed proofs of identity shown under:\n\
1. Voter Photo identity card issued by Election Commision of India.\n\
2. Passport\n\
3. PAN Card issued by Income Tax Department.\n\
4. Driving Licence issued by RTO.\n\
5. Photo identity card having serial number issued by Central/State Government.\n\
6. Student Identity Card with photograph issued by recognized School/College for their students.\n\
7. Nationalized Bank Passbok with photograph.\n\
8. Credit cards issued by banks with laminated photograph.\n\
9. Unique Identification Card Aadhaar.\n\
10. Photo identity cards having serial number issued by Public Sector Undertaking of State/Central Government, District Administration, Municipal bodies and Penchant Administration.\n\
 The tatkal category is not applicable on first ac class and second seating class.\n\
 Ladies and general quota cannot be opted for along with Tatkal quota.\n\
 No concession is allowed in Tatkal Booking.\n\
 It will be possible to book a maximum of only four passengers per PNR forTatkal tickets.\n\
 The facility of change of name is not permitted on the bookings made under Tatkal scheme\n\
 TDRs are not being issued for waiting list tickets.\n\
 No duplicate Tatkal tickets shall be issued.\n\
 Duplicate Tatkal tickets shall be issued only in exceptional cases on payment of full fare including Tatkal charges.\n");
                convo.next();
            });

    });
};