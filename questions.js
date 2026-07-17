const quizData = [
  {
    "category": "Current Affairs (सामयिक विषय)",
    "question": "2024 में भारत का 18वां लोकसभा चुनाव किस महीने में संपन्न हुआ?",
    "options": [ "जून–जुलाई", "जनवरी–फरवरी","अप्रैल–मई", "अगस्त–सितंबर"],
    "correct": 2
  },
  {
    "category": "Current Affairs (सामयिक विषय)",
    "question": "2024 Paris Olympics में भारत ने कितने पदक जीते?",
    "options": ["3", "6", "7", "9"],
    "correct": 2
  },
  {
    "category": "Current Affairs (सामयिक विषय)",
    "question": "2025 में भारत का Union Budget किसने प्रस्तुत किया?",
    "options": [ "अरुण जेटली","निर्मला सीतारमण", "पीयूष गोयल", "राजनाथ सिंह"],
    "correct": 1
  },
  {
    "category": "Current Affairs (सामयिक विषय)",
    "question": "2024 में Bharat Ratna किसे दिया गया?",
    "options": ["करुणानिधि",  "रतन टाटा", "सचिन तेंदुलकर","लाल कृष्ण आडवाणी"],
    "correct": 3
  },
  {
    "category": "Current Affairs (सामयिक विषय)",
    "question": "2025 में ICC Champions Trophy कहाँ आयोजित हुई?",
    "options": ["भारत", "पाकिस्तान", "इंग्लैंड", "ऑस्ट्रेलिया"],
    "correct": 1
  },
  {
    "category": "Current Affairs (सामयिक विषय)",
    "question": "2026 में Oscar Best Picture Award किस फिल्म को मिला?",
    "options": ["Oppenheimer", "Barbie", "Killers of the Flower Moon", "Poor Things"],
    "correct": 0
  },
  {
    "category": "Current Affairs (सामयिक विषय)",
    "question": "2024 में G20 Summit कहाँ आयोजित हुआ?",
    "options": [ "रोम", "नई दिल्ली","ब्राज़ील", "टोक्यो"],
    "correct": 2
  },
  {
    "category": "Current Affairs (सामयिक विषय)",
    "question": "2025 में UN Climate Change Conference (COP30) कहाँ हुआ?",
    "options": ["दुबई", "बेलम, ब्राज़ील", "पेरिस", "लंदन"],
    "correct": 1
  },
  {
    "category": "Current Affairs (सामयिक विषय)",
    "question": "2023 में Nobel Peace Prize किसे मिला?",
    "options": [ "मारिया रेसा", "अबी अहमद", "मलाला यूसुफजई","नरगिस मोहम्मदी"],
    "correct": 3
  },
  {
    "category": "Current Affairs (सामयिक विषय)",
    "question": "2026 में Cricket World Cup कहाँ आयोजित होगा?",
    "options": ["भारत & श्रीलंका", "इंग्लैंड", "दक्षिण अफ्रीका", "श्रीलंका"],
    "correct": 0
  },
  {
    "category": "Indian History",
    "question": "हड़प्पा सभ्यता का प्रमुख बंदरगाह कौन सा था?",
    "options": ["लोथल", "मोहनजोदड़ो", "हड़प्पा", "कालीबंगन"],
    "correct": 0
  },
  {
    "category": "Indian History",
    "question": "गुप्तकाल को किस नाम से जाना जाता है?",
    "options": [ "लौह युग", "पाषाण युग","स्वर्ण युग", "मध्य युग"],
    "correct": 2
  },
  {
    "category": "Indian History",
    "question": "1857 की क्रांति का नेतृत्व झांसी में किसने किया?",
    "options": ["रानी लक्ष्मीबाई", "तात्या टोपे", "नाना साहेब", "बेगम हज़रत महल"],
    "correct": 0
  },
  {
    "category": "Indian History",
    "question": "\"भारत छोड़ो आंदोलन\" कब शुरू हुआ?",
    "options": ["1930", "1942", "1947", "1920"],
    "correct": 1
  },
  {
    "category": "Indian History",
    "question": "\"सुभाष चंद्र बोस\" ने INA (आजाद हिंद फौज) कब बनाई?",
    "options": ["1942", "1940", "1939", "1945"],
    "correct": 0
  },
  {
    "category": "Indian History",
    "question": "\"द्वितीय गोलमेज सम्मेलन\" कब हुआ?",
    "options": [ "1931","1930", "1932", "1935"],
    "correct": 0
  },
  {
    "category": "Indian History",
    "question": "\"प्लासी का युद्ध\" कब हुआ?",
    "options": [ "1764", "1857", "1707","1757"],
    "correct": 3
  },
  {
    "category": "Indian History",
    "question": "\"साइमन कमीशन\" भारत कब आया?",
    "options": ["1927", "1928", "1930", "1932"],
    "correct": 1
  },
  {
    "category": "Indian History",
    "question": "\"इलाहाबाद संधि\" कब हुई?",
    "options": ["1765", "1757", "1857", "1947"],
    "correct": 0
  },
  {
    "category": "Indian History",
    "question": "\"जालियावाला बाग हत्याकांड\" कब हुआ?",
    "options": [ "1920", "1930", "1942","1919"],
    "correct": 3
  },
  {
    "category": "Indian Geography",
    "question": "भारत की सबसे लंबी नदी कौन सी है?",
    "options": ["गंगा", "ब्रह्मपुत्र", "गोदावरी", "यमुना"],
    "correct": 0
  },
  {
    "category": "Indian Geography",
    "question": "\"अरावली पर्वत\" कहाँ स्थित है?",
    "options": [ "मध्य प्रदेश", "उत्तर प्रदेश","राजस्थान", "गुजरात"],
    "correct": 2
  },
  {
    "category": "Indian Geography",
    "question": "\"सियाचिन ग्लेशियर\" किस राज्य केंद्र शासित प्रदेश में है?",
    "options": [ "जम्मू-कश्मीर", "हिमाचल प्रदेश","लद्दाख", "उत्तराखंड"],
    "correct": 2
  },
  {
    "category": "Indian Geography",
    "question": "\"कृष्णा नदी\" का उद्गम स्थल कहाँ है?",
    "options": ["महाबलेश्वर", "अमरकंटक", "त्र्यंबकेश्वर", "नासिक"],
    "correct": 0
  },
  {
    "category": "Indian Geography",
    "question": "\"थार मरुस्थल\" किस राज्य में है?",
    "options": [ "गुजरात","राजस्थान", "पंजाब", "हरियाणा"],
    "correct": 1
  },
  {
    "category": "Indian Geography",
    "question": "\"सतपुड़ा पर्वत\" कहाँ है?",
    "options": ["मध्य प्रदेश", "महाराष्ट्र", "छत्तीसगढ़", "उपरोक्त सभी"],
    "correct": 3
  },
  {
    "category": "Indian Geography",
    "question": "\"कावेरी नदी\" का उद्गम स्थल कहाँ है?",
    "options": ["ब्रह्मगिरि पहाड़ी", "नीलगिरी", "अरावली", "हिमालय"],
    "correct": 0
  },
  {
    "category": "Indian Geography",
    "question": "\"चिल्का झील\" कहाँ स्थित है?",
    "options": [ "आंध्र प्रदेश", "तमिलनाडु", "ओडिशा", "पश्चिम बंगाल"],
    "correct": 2
  },
  {
    "category": "Indian Geography",
    "question": "\"सूर्य मंदिर\" कहाँ स्थित है?",
    "options": ["कोणार्क, ओडिशा", "मदुरै, तमिलनाडु", "खजुराहो, मध्य प्रदेश", "बिहार"],
    "correct": 0
  },
  {
    "category": "Indian Polity",
    "question": "भारतीय संविधान का अनुच्छेद 370 किस राज्य से संबंधित था?",
    "options": ["जम्मू-कश्मीर", "नागालैंड", "मणिपुर", "असम"],
    "correct": 0
  },
  {
    "category": "Indian Polity",
    "question": "भारतीय संविधान में कुल कितने अनुसूचियाँ (Schedules) हैं?",
    "options": ["10", "12", "8", "15"],
    "correct": 1
  },
  {
    "category": "Indian Polity",
    "question": "भारत के प्रथम राष्ट्रपति कौन थे?",
    "options": [ "डॉ. सर्वपल्ली राधाकृष्णन", "डॉ. जाकिर हुसैन","डॉ. राजेंद्र प्रसाद", "वी.वी. गिरी"],
    "correct": 2
  },
  {
    "category": "Indian Polity",
    "question": "\"पंचायती राज व्यवस्था\" किस समिति की सिफारिश पर लागू हुई?",
    "options": [ "अशोक मेहता समिति", "गाडगिल समिति", "वी.टी. कृष्णम्माचारी समिति","बलवंत राय मेहता समिति"],
    "correct": 3
  },
  {
    "category": "Indian Polity",
    "question": "भारतीय संसद का उच्च सदन कौन सा है?",
    "options": ["लोकसभा", "राज्यसभा", "विधानसभा", "विधान परिषद"],
    "correct": 1
  },
  {
    "category": "Indian Polity",
    "question": "\"मौलिक अधिकार\" संविधान के किस भाग में दिए गए हैं?",
    "options": ["भाग III", "भाग IV", "भाग V", "भाग II"],
    "correct": 0
  },
  {
    "category": "Indian Polity",
    "question": "\"न्यायपालिका की स्वतंत्रता\" किस अनुच्छेद में निहित है?",
    "options": [ "अनुच्छेद 32", "अनुच्छेद 21","अनुच्छेद 50", "अनुच्छेद 14"],
    "correct": 2
  },
  {
    "category": "Indian Polity",
    "question": "भारत का सर्वोच्च न्यायालय कहाँ स्थित है?",
    "options": ["मुंबई", "दिल्ली", "चेन्नई", "कोलकाता"],
    "correct": 1
  },
  {
    "category": "Indian Polity",
    "question": "\"लोकसभा\" की अधिकतम सदस्य संख्या कितनी है?",
    "options": ["552", "545", "500", "600"],
    "correct": 0
  },
  {
    "category": "Indian Polity",
    "question": "\"राज्यपाल\" की नियुक्ति कौन करता है?",
    "options": ["प्रधानमंत्री", "राष्ट्रपति", "मुख्यमंत्री", "s संसद"],
    "correct": 1
  },
  {
    "category": "Economy",
    "question": "भारत में \"GST\" कब लागू हुआ?",
    "options": ["2015", "2017", "2018", "2016"],
    "correct": 1
  },
  {
    "category": "Economy",
    "question": "\"RBI\" का मुख्यालय कहाँ है?",
    "options": ["दिल्ली",  "चेन्नई", "कोलकाता","मुंबई",],
    "correct": 3
  },
  {
    "category": "Economy",
    "question": "\"नाबार्ड\" किस क्षेत्र से संबंधित है?",
    "options": ["उद्योग", "कृषि एवं ग्रामीण विकास", "शिक्षा", "स्वास्थ्य"],
    "correct": 1
  },
  {
    "category": "Economy",
    "question": "\"मुद्रास्फीति\" का अर्थ है?",
    "options": ["कीमतों में गिरावट",  "उत्पादन में वृद्धि", "कीमतों में वृद्धि","उत्पादन में कमी"],
    "correct": 2
  },
  {
    "category": "Economy",
    "question": "\"Make in India\" अभियान कब शुरू हुआ?",
    "options": [ "2015", "2016", "2017","2014"],
    "correct": 3
  },
  {
    "category": "Economy",
    "question": "\"प्रधानमंत्री जन धन योजना\" कब शुरू हुई?",
    "options": ["2013", "2014", "2015", "2016"],
    "correct": 1
  },
  {
    "category": "Economy",
    "question": "\"भारत का पहला डिजिटल रुपया\" किस वर्ष लॉन्च हुआ?",
    "options": ["2022", "2023", "2024", "2025"],
    "correct": 0
  },
  {
    "category": "Economy",
    "question": "\"SEBI\" का कार्य क्या है?",
    "options": ["बैंकिंग नियमन",  "कृषि विकास", "शिक्षा नीति","शेयर बाजार नियमन"],
    "correct": 3
  },
  {
    "category": "Economy",
    "question": "\"भारत का पहला बजट\" किसने प्रस्तुत किया था?",
    "options": [ "मोरारजी देसाई", "सी.डी. देशमुख","आर. के. शणमुखम चेट्टी", "टी.टी. कृष्णमाचारी"],
    "correct": 2
  },
  {
    "category": "Economy",
    "question": "\"विश्व बैंक\" का मुख्यालय कहाँ है?",
    "options": ["न्यूयॉर्क", "वाशिंगटन डी.सी.", "लंदन", "पेरिस"],
    "correct": 1
  },
  {
    "category": "General Science",
    "question": "\"गति का प्रथम नियम\" किसने दिया?",
    "options": ["न्यूटन", "गैलीलियो", "आइंस्टीन", "केपलर"],
    "correct": 0
  },
  {
    "category": "General Science",
    "question": "\"DNA\" की संरचना किसने खोजी?",
    "options": ["वॉटसन और क्रिक", "न्यूटन", "डार्विन", "पास्चर"],
    "correct": 0
  },
  {
    "category": "General Science",
    "question": "\"ओजोन परत\" किसे रोकती है?",
    "options": [ "अवरक्त किरणें", "रेडियो तरंगें","पराबैंगनी किरणें", "ध्वनि तरंगें"],
    "correct": 2
  },
  {
    "category": "General Science",
    "question": "\"क्लोरोफिल\" किस रंग का होता है?",
    "options": [ "लाल", "नीला", "पीला","हरा",],
    "correct": 3
  },
  {
    "category": "General Science",
    "question": "\"गगनयान मिशन\" किस संगठन द्वारा संचालित है?",
    "options": ["NASA", "ISRO", "ESA", "JAXA"],
    "correct": 1
  },
  {
    "category": "General Science",
    "question": "\"पेनिसिलिन\" की खोज किसने की?",
    "options": ["अलेक्जेंडर फ्लेमिंग", "पास्चर", "वॉटसन", "क्रिक"],
    "correct": 0
  },
  {
    "category": "General Science",
    "question": "\"सौर ऊर्जा\" किस प्रकार की ऊर्जा है?",
    "options": [ "अनवीकरणीय ऊर्जा","अक्षय ऊर्जा", "रासायनिक ऊर्जा", "यांत्रिक ऊर्जा"],
    "correct": 1
  },
  {
    "category": "General Science",
    "question": "\"हृदय\" में कितने कक्ष होते हैं?",
    "options": ["2", "3", "4", "5"],
    "correct": 2
  },
  {
    "category": "General Science",
    "question": "\"पृथ्वी का गुरुत्वाकर्षण बल\" किसने खोजा?",
    "options": ["न्यूटन", "आइंस्टीन", "गैलीलियो", "केपलर"],
    "correct": 0
  },
  {
    "category": "Jharkhand General Knowledge",
    "question": "झारखंड राज्य का गठन कब हुआ?",
    "options": [ "1999", "2001","2000", "1998"],
    "correct": 2
  },
  {
    "category": "Jharkhand General Knowledge",
    "question": "झारखंड की राजधानी कौन सी है?",
    "options": ["धनबाद",  "जमशेदपुर", "बोकारो","रांची"],
    "correct": 3
  },
  {
    "category": "Jharkhand General Knowledge",
    "question": "झारखंड का सबसे बड़ा जिला कौन सा है?",
    "options": ["रांची", "धनबाद", "सिंहभूम", "गढ़वा"],
    "correct": 0
  },
  {
    "category": "Jharkhand General Knowledge",
    "question": "झारखंड की प्रमुख जनजाति कौन सी है?",
    "options": [ "गोंड", "भील", "संथाल","मिजो"],
    "correct": 2
  },
  {
    "category": "Jharkhand General Knowledge",
    "question": "बिरसा मुंडा का जन्मस्थान कहाँ है?",
    "options": ["उलीहातु", "लोहरदगा", "गुमला", "रांची"],
    "correct": 0
  },
  {
    "category": "Jharkhand General Knowledge",
    "question": "झारखंड का प्रसिद्ध \"पारसनाथ पर्वत\" किस जिले में है?",
    "options": [ "धनबाद", "गिरिडीह","बोकारो", "रांची"],
    "correct": 1
  },
  {
    "category": "Jharkhand General Knowledge",
    "question": "झारखंड का सबसे बड़ा औद्योगिक शहर कौन सा है?",
    "options": ["जमशेदपुर", "धनबाद", "बोकारो", "हजारीबाग"],
    "correct": 0
  },
  {
    "category": "Jharkhand General Knowledge",
    "question": "झारखंड का \"स्टील सिटी\" किसे कहा जाता है?",
    "options": [ "बोकारो", "धनबाद","जमशेदपुर", "रांची"],
    "correct": 2
  },
  {
    "category": "Jharkhand General Knowledge",
    "question": "झारखंड का \"कोयला राजधानी\" कौन सा शहर है?",
    "options": ["धनबाद", "बोकारो", "गिरिडीह", "रांची"],
    "correct": 0
  },
  {
    "category": "Jharkhand General Knowledge",
    "question": "झारखंड का \"टाटा स्टील प्लांट\" कहाँ स्थित है?",
    "options": [ "बोकारो", "धनबाद","जमशेदपुर", "रांची"],
    "correct": 2
  },
  {
    "category": "Jharkhand General Knowledge",
    "question": "झारखंड का \"बोकारो स्टील Plant\" किस वर्ष स्थापित हुआ?",
    "options": ["1965",  "1968", "1970","1967"],
    "correct": 3
  },
  {
    "category": "Jharkhand General Knowledge",
    "question": "झारखंड का \"हजारीबाग\" किसके लिए प्रसिद्ध है?",
    "options": ["कोयला", "वन्यजीव अभयारण्य", "स्टील", "सोना"],
    "correct": 1
  },
  {
    "category": "Jharkhand General Knowledge",
    "question": "झारखंड का \"Netarhat\" किसके लिए प्रसिद्ध है?",
    "options": ["शिक्षा",  "उद्योग", "खनिज","पर्यटन",],
    "correct": 3
  },
  {
    "category": "Jharkhand General Knowledge",
    "question": "झारखंड का \"Dassam Falls\" किस नदी पर है?",
    "options": ["कांची नदी", "स्वर्णरेखा नदी", "दामोदर नदी", "गंगा नदी"],
    "correct": 0
  },
  {
    "category": "Jharkhand General Knowledge",
    "question": "झारखंड का \"Tagore Hill\" कहाँ स्थित है?",
    "options": [ "धनबाद", "रांची","बोकारो", "गिरिडीह"],
    "correct": 1
  },
  {
    "category": "Jharkhand General Knowledge",
    "question": "झारखंड का \"Birsa Munda Airport\" कहाँ है?",
    "options": ["रांची", "धनबाद", "जमशेदपुर", "बोकारो"],
    "correct": 0
  },
  {
    "category": "Basic Mathematics",
    "question": "यदि किसी वस्तु का मूल्य ₹500 है और उस पर 10% छूट दी जाती है, तो विक्रय मूल्य क्या होगा?",
    "options": [ "₹400","₹450", "₹480", "₹470"],
    "correct": 1
  },
  {
    "category": "Basic Mathematics",
    "question": "यदि 20% का लाभ ₹200 है, तो क्रय मूल्य क्या होगा?",
    "options": [ "₹800", "₹1200","₹1000", "₹1500"],
    "correct": 2
  },
  {
    "category": "Basic Mathematics",
    "question": "यदि A:B = 2:3 और B:C = 4:5, तो A:B:C का अनुपात क्या होगा?",
    "options": [ "2:4:5", "4:6:5","8:12:15", "6:8:10"],
    "correct": 2
  },
  {
    "category": "Basic Mathematics",
    "question": "5, 10, 15, 20 का औसत क्या है?",
    "options": ["10", "12.5", "15", "20"],
    "correct": 1
  },
  {
    "category": "Basic Mathematics",
    "question": "यदि 10 मजदूर 20 दिन में काम पूरा करते हैं, तो 5 मजदूर वही काम कितने दिन में करेंगे?",
    "options": ["40", "30", "20", "50"],
    "correct": 0
  },
  {
    "category": "Basic Mathematics",
    "question": "यदि ₹1000 पर 2 वर्ष के लिए 10% वार्षिक दर से साधारण ब्याज लगाया जाए, तो ब्याज कितना होगा?",
    "options": [ "₹200", "₹300", "₹250","₹100"],
    "correct": 0
  },
  {
    "category": "Basic Mathematics",
    "question": "यदि ₹1000 पर 2 वर्ष के लिए 10% वार्षिक दर से चक्रवृद्धि ब्याज लगाया जाए, तो ब्याज कितना होगा?",
    "options": [ "₹220", "₹200", "₹210","₹250"],
    "correct": 2
  },
  {
    "category": "Basic Mathematics",
    "question": "संख्या 144 का वर्गमूल क्या है?",
    "options": ["10", "11", "12", "13"],
    "correct": 2
  },
  {
    "category": "Basic Mathematics",
    "question": "यदि किसी संख्या का 25% = 50 है, तो संख्या क्या होगी?",
    "options": ["100", "200", "150", "250"],
    "correct": 1
  },
  {
    "category": "Basic Mathematics",
    "question": "यदि किसी वस्तु का क्रय मूल्य ₹400 है और विक्रय मूल्य ₹500 है, तो लाभ प्रतिशत कितना होगा?",
    "options": ["20%",  "30%", "15%","25%",],
    "correct": 3
  },
  {
    "category": "Basic Mathematics",
    "question": "यदि किसी वस्तु का क्रय मूल्य ₹500 है और विक्रय मूल्य ₹400 है, तो हानि प्रतिशत कितना होगा?",
    "options": ["10%", "20%", "25%", "15%"],
    "correct": 1
  },
  {
    "category": "Basic Mathematics",
    "question": "यदि 2 संख्याओं का HCF = 12 और LCM = 60 है, तो उन संख्याओं का गुणनफल कितना होगा?",
    "options": ["720", "600", "800", "900"],
    "correct": 0
  },
  {
    "category": "Basic Mathematics",
    "question": "यदि किसी वस्तु का मूल्य ₹1200 है और उस पर 15% छूट दी जाती है, तो विक्रय मूल्य क्या होगा?",
    "options": [ "₹1000", "₹1080", "₹1050","₹1020",],
    "correct": 3
  },
  {
    "category": "Basic Mathematics",
    "question": "यदि किसी वस्तु का मूल्य ₹800 है और उस पर 25% लाभ होता है, तो विक्रय मूल्य क्या होगा?",
    "options": [ "₹950", "₹1050", "₹1000","₹1100"],
    "correct": 2
  },
  {
    "category": "General Awareness Current Affairs & Awards",
    "question": "2025 में भारत का पहला सेमीकंडक्टर प्लांट कहाँ स्थापित हुआ?",
    "options": ["गुजरात", "महाराष्ट्र", "तमिलनाडु", "कर्नाटक"],
    "correct": 0
  },
  {
    "category": "General Awareness Current Affairs & Awards",
    "question": "2024 में पद्म विभूषण किसे मिला?",
    "options": [ "अजीम प्रेमजी", "मल्लिका साराभाई","रतन टाटा", "सचिन तेंदुलकर"],
    "correct": 2
  },
  {
    "category": "General Awareness Current Affairs & Awards",
    "question": "2025 में ICC Women's World Cup कहाँ आयोजित हुआ?",
    "options": ["भारत", "इंग्लैंड", "ऑस्ट्रेलिया", "न्यूज़ीलैंड"],
    "correct": 1
  },
  {
    "category": "General Awareness Current Affairs & Awards",
    "question": "2026 में UNESCO World Heritage Site में भारत का कौन सा स्थल नया जोड़ा गया?",
    "options": ["काकतीय मंदिर", "होयसल मंदिर", "कोणार्क सूर्य मंदिर", "अजंता गुफाएँ"],
    "correct": 1
  },
  {
    "category": "General Awareness Current Affairs & Awards",
    "question": "2024 में Booker Prize किस भारतीय लेखक को मिला?",
    "options": [ "गीता मेहता", "जस्टिन नारायण", "जया गोकुल","अरुंधति रॉय"],
    "correct": 3
  },
  {
    "category": "General Awareness Current Affairs & Awards",
    "question": "2025 में Asian Games कहाँ हुए?",
    "options": ["चीन", "जापान", "दक्षिण कोरिया", "भारत"],
    "correct": 2
  },
  {
    "category": "General Awareness Current Affairs & Awards",
    "question": "2026 में भारत का पहला ग्रीन हाइड्रोजन प्लांट कहाँ शुरू हुआ?",
    "options": ["ओडिशा", "गुजरात", "महाराष्ट्र", "तमिलनाडु"],
    "correct": 1
  },
  {
    "category": "General Awareness Current Affairs & Awards",
    "question": "2024 में Miss World का खिताब किसने जीता?",
    "options": ["सनी शेट्टी","करोलिना बिएलावस्का",  "वनेसा पोंस", "मानुषी छिल्लर"],
    "correct": 0
  },
  {
    "category": "Indian History - Freedom Struggle & Modern India",
    "question": "\"चंपारण आंदोलन\" का नेतृत्व किसने किया?",
    "options": [ "बाल गंगाधर तिलक", "सुभाष चंद्र बोस", "भगत सिंह","महात्मा गांधी",],
    "correct": 3
  },
  {
    "category": "Indian History - Freedom Struggle & Modern India",
    "question": "\"असहयोग आंदोलन\" कब शुरू हुआ?",
    "options": ["1920", "1930", "1942", "1919"],
    "correct": 0
  },
  {
    "category": "Indian History - Freedom Struggle & Modern India",
    "question": "\"काकोरी कांड\" किस वर्ष हुआ?",
    "options": [ "1920", "1930","1925", "1942"],
    "correct": 2
  },
  {
    "category": "Indian History - Freedom Struggle & Modern India",
    "question": "\"भारतीय राष्ट्रीय कांग्रेस\" की स्थापना कब हुई?",
    "options": [ "1890", "1905", "1910","1885",],
    "correct": 3
  },
  {
    "category": "Indian History - Freedom Struggle & Modern India",
    "question": "\"गदर पार्टी\" की स्थापना कहाँ हुई थी?",
    "options": [ "इंग्लैंड", "भारत","अमेरिका", "कनाडा"],
    "correct": 2
  },
  {
    "category": "Indian History - Freedom Struggle & Modern India",
    "question": "\"साइमन कमीशन\" का विरोध किस नारे से किया गया?",
    "options": [ "Quit India", "Vande Mataram", "Inquilab Zindabad","Simon Go Back",],
    "correct": 3
  },
  {
    "category": "Indian History - Freedom Struggle & Modern India",
    "question": "\"भारतीय संविधान सभा\" का गठन कब हुआ?",
    "options": [ "1947", "1948", "1946","1949"],
    "correct": 2
  },
  {
    "category": "Indian History - Freedom Struggle & Modern India",
    "question": "\"भारतीय राष्ट्रीय कांग्रेस\" के प्रथम अध्यक्ष कौन थे?",
    "options": [ "दादाभाई नौरोजी", "गोपाल कृष्ण गोखले", "बाल गंगाधर तिलक","डब्ल्यू.सी. बनर्जी",],
    "correct": 3
  },
  {
    "category": "Indian Geography - Climate & Resources",
    "question": "भारत का सबसे बड़ा राज्य क्षेत्रफल के अनुसार कौन सा है?",
    "options": ["उत्तर प्रदेश", "राजस्थान", "मध्य प्रदेश", "महाराष्ट्र"],
    "correct": 1
  },
  {
    "category": "Indian Geography - Climate & Resources",
    "question": "भारत का सबसे छोटा राज्य क्षेत्रफल के अनुसार कौन सा है?",
    "options": [ "सिक्किम", "त्रिपुरा", "नागालैंड","गोवा"],
    "correct": 3
  },
  {
    "category": "Indian Geography - Climate & Resources",
    "question": "\"दामोदर नदी\" को किस नाम से जाना जाता है?",
    "options": [ "बिहार का शोक", "झारखंड का शोक", "भारत का शोक","बंगाल का शोक",],
    "correct": 3
  },
  {
    "category": "Indian Geography - Climate & Resources",
    "question": "\"नर्मदा नदी\" किस दिशा में बहती है?",
    "options": ["पूर्व से पश्चिम", "उत्तर से दक्षिण", "पश्चिम से पूर्व", "दक्षिण से उत्तर"],
    "correct": 0
  },
  {
    "category": "Indian Geography - Climate & Resources",
    "question": "भारत का सबसे बड़ा पठार कौन सा है?",
    "options": ["मालवा पठार",  "छोटा नागपुर पठार", "मेघालय पठार","दक्कन पठार"],
    "correct": 3
  },
  {
    "category": "Indian Geography - Climate & Resources",
    "question": "\"साइलेंट वैली\" कहाँ स्थित है?",
    "options": ["केरल", "तमिलनाडु", "कर्नाटक", "आंध्र प्रदेश"],
    "correct": 0
  },
  {
    "category": "Indian Geography - Climate & Resources",
    "question": "भारत का सबसे बड़ा डेल्टा कौन सा है?",
    "options": [ "कृष्णा डेल्टा", "गोदावरी डेल्टा","सुंदरबन", "कावेरी डेल्टा"],
    "correct": 2
  },
  {
    "category": "Indian Geography - Climate & Resources",
    "question": "भारत का सबसे ऊँचा पर्वत शिखर कौन सा है?",
    "options": ["कंचनजंघा", "नंदा देवी", "K2 (गॉडविन ऑस्टिन)", "एवरेस्ट"],
    "correct": 2
  },
  {
    "category": "General Science - Applied & Daily Life",
    "question": "\"ब्लूटूथ\" तकनीक किस पर आधारित है?",
    "options": ["रेडियो तरंगें", "इन्फ्रारेड", "माइक्रोवेव", "लेज़र"],
    "correct": 0
  },
  {
    "category": "General Science - Applied & Daily Life",
    "question": "\"क्वांटम कंप्यूटर\" किस सिद्धांत पर आधारित है?",
    "options": [ "न्यूटन का नियम","सुपरपोजिशन और एंटैंगलमेंट", "आइंस्टीन का सापेक्षता सिद्धांत", "क्लासिक मैकेनिक्स"],
    "correct": 1
  },
  {
    "category": "General Science - Applied & Daily Life",
    "question": "\"लिथियम आयन बैटरी\" का उपयोग किसमें होता है?",
    "options": ["मोबाइल फोन", "कार", "लैपटॉप", "उपरोक्त सभी"],
    "correct": 3
  },
  {
    "category": "General Science - Applied & Daily Life",
    "question": "\"ISRO का Aditya-L1 मिशन\" किस अध्ययन से संबंधित है?",
    "options": ["चंद्रमा", "मंगल","सूर्य",  "पृथ्वी"],
    "correct": 2
  },
  {
    "category": "General Science - Applied & Daily Life",
    "question": "\"CRISPR तकनीक\" किससे संबंधित है?",
    "options": ["जीन संपादन", "कंप्यूटर", "अंतरिक्ष", "ऊर्जा"],
    "correct": 0
  },
  {
    "category": "General Science - Applied & Daily Life",
    "question": "\"5G नेटवर्क\" किस आवृत्ति पर काम करता है?",
    "options": [ "रेडियो वेव", "इन्फ्रारेड", "माइक्रोवेव","मिलीमीटर वेव",],
    "correct": 3
  },
  {
    "category": "Indian Polity Constitution & Governance",
    "question": "भारतीय संविधान में कुल कितने अनुच्छेद (Articles) हैं?",
    "options": ["395", "448", "500", "420"],
    "correct": 1
  },
  {
    "category": "Indian Polity Constitution & Governance",
    "question": "\"संविधान सभा\" के अध्यक्ष कौन थे?",
    "options": [ "डॉ. भीमराव अंबेडकर", "जवाहरलाल नेहरू", "सरदार पटेल","डॉ. राजेंद्र प्रसाद"],
    "correct": 3
  },
  {
    "category": "Indian Polity Constitution & Governance",
    "question": "\"मौलिक कर्तव्य\" संविधान में किस संशोधन द्वारा जोड़े गए?",
    "options": ["42वाँ संशोधन", "44वाँ संशोधन", "46वाँ संशोधन", "52वाँ संशोधन"],
    "correct": 0
  },
  {
    "category": "Indian Polity Constitution & Governance",
    "question": "\"भारत के प्रधानमंत्री\" की नियुक्ति कौन करता है?",
    "options": [ "संसद", "लोकसभा", "राज्यसभा","राष्ट्रपति"],
    "correct": 3
  },
  {
    "category": "Indian Polity Constitution & Governance",
    "question": "\"लोकपाल और लोकायुक्त अधिनियम\" कब पारित हुआ?",
    "options": [ "2014", "2015", "2016","2013"],
    "correct": 3
  },
  {
    "category": "Indian Polity Constitution & Governance",
    "question": "\"संविधान का अनुच्छेद 356\" किससे संबंधित है?",
    "options": [ "आपातकाल", "मौलिक अधिकार","राष्ट्रपति शासन", "न्यायपालिका"],
    "correct": 2
  },
  {
    "category": "Indian Polity Constitution & Governance",
    "question": "\"भारत के उपराष्ट्रपति\" का चुनाव कौन करता है?",
    "options": ["लोकसभा", "राज्यसभा", "संसद के दोनों सदन", "राष्ट्रपति"],
    "correct": 2
  },
  {
    "category": "Indian Polity Constitution & Governance",
    "question": "\"संविधान दिवस\" कब मनाया जाता है?",
    "options": ["26 जनवरी",  "15 अगस्त", "2 अक्टूबर","26 नवंबर"],
    "correct": 3
  },
  {
    "category": "Economy - Banking & Budget",
    "question": "\"भारतीय रिजर्व बैंक\" की स्थापना कब हुई?",
    "options": [ "1947", "1950","1935", "1960"],
    "correct": 2
  },
  {
    "category": "Economy - Banking & Budget",
    "question": "\"मुद्रा योजना\" किस वर्ष शुरू हुई?",
    "options": ["2014", "2015", "2016", "2017"],
    "correct": 1
  },
  {
    "category": "Economy - Banking & Budget",
    "question": "\"भारत का पहला भुगतान बैंक\" कौन सा था?",
    "options": ["एयरटेल पेमेंट्स बैंक", "इंडिया पोस्ट पेमेंट्स बैंक", "पेटीएम पेमेंट्स बैंक", "फिनो पेमेंट्स बैंक"],
    "correct": 0
  },
  {
    "category": "Economy - Banking & Budget",
    "question": "\"नोटबंदी\" किस वर्ष हुई?",
    "options": ["2014", "2015", "2016", "2017"],
    "correct": 2
  },
  {
    "category": "Economy - Banking & Budget",
    "question": "\"भारत का पहला बजट\" किस वर्ष प्रस्तुत हुआ?",
    "options": [ "1948", "1950", "1952","1947"],
    "correct": 3
  },
  {
    "category": "Economy - Banking & Budget",
    "question": "\"FDI\" का पूरा रूप क्या है?",
    "options": [ "Financial Development Index", "Fiscal Development Investment", "Foreign Domestic Investment","Foreign Direct Investment",],
    "correct": 3
  },
  {
    "category": "Economy - Banking & Budget",
    "question": "\"भारत का पहला महिला वित्त मंत्री\" कौन थीं?",
    "options": ["निर्मला सीतारमण", "इंदिरा गांधी", "सरोजिनी नायडू", "सुषमा स्वराज"],
    "correct": 1
  },
  {
    "category": "Economy - Banking & Budget",
    "question": "\"GST Council\" का अध्यक्ष कौन होता है?",
    "options": ["प्रधानमंत्री", "वित्त मंत्री", "राष्ट्रपति", "RBI गवर्नर"],
    "correct": 1
  },
  {
    "category": "Jharkhand GK - Culture & Contribution",
    "question": "\"झारखंड आंदोलन\" के जनक किसे कहा जाता है?",
    "options": [ "बिरसा मुंडा", "शिबू सोरेन","जयपाल सिंह मुंडा", "बाबूलाल मरांडी"],
    "correct": 2
  },
  {
    "category": "Jharkhand GK - Culture & Contribution",
    "question": "\"झारखंड का राजकीय पशु\" कौन है?",
    "options": [ "हिरण", "बाघ", "भालू","हाथी"],
    "correct": 3
  },
  {
    "category": "Jharkhand GK - Culture & Contribution",
    "question": "\"झारखंड का राजकीय पक्षी\" कौन है?",
    "options": [ "मैना", "मोर", "कोयल","गरुड़"],
    "correct": 2
  },
  {
    "category": "Jharkhand GK - Culture & Contribution",
    "question": "\"झारखंड का राजकीय वृक्ष\" कौन सा है?",
    "options": [ "पीपल", "नीम","साल", "बरगद"],
    "correct": 2
  },
  {
    "category": "Jharkhand GK - Culture & Contribution",
    "question": "\"झारखंड का राजकीय फूल\" कौन सा है?",
    "options": [ "गुलाब", "पलाश","कमल", "सूरजमुखी"],
    "correct": 1
  },
  {
    "category": "Jharkhand GK - Culture & Contribution",
    "question": "\"झारखंड का पहला मुख्यमंत्री\" कौन था?",
    "options": ["शिबू सोरेन", "बाबूलाल मरांडी", "अर्जुन मुंडा", "हेमंत सोरेन"],
    "correct": 1
  },
  {
    "category": "Jharkhand GK - Culture & Contribution",
    "question": "\"झारखंड का पहला विश्वविद्यालय\" कौन सा था?",
    "options": ["रांची विश्वविद्यालय", "विनोबा भावे विश्वविद्यालय", "बिरसा कृषि विश्वविद्यालय", "कोल्हान विश्वविद्यालय"],
    "correct": 0
  },
  {
    "category": "Jharkhand GK - Culture & Contribution",
    "question": "\"झारखंड का पहला अंतरराष्ट्रीय क्रिकेट स्टेडियम\" कौन सा है?",
    "options": ["जेएससीए स्टेडियम, रांची", "धनबाद क्रिकेट स्टेडियम", "बोकारो क्रिकेट स्टेडियम", "गिरिडीह स्टेडियम"],
    "correct": 0
  },
  {
    "category": "General Science - Physics, Chemistry, Biology",
    "question": "\"पानी का रासायनिक सूत्र\" क्या है?",
    "options": [ "CO2", "O2","H2O", "H2SO4"],
    "correct": 2
  },
  {
    "category": "General Science - Physics, Chemistry, Biology",
    "question": "\"मानव शरीर में सबसे बड़ा अंग\" कौन सा है?",
    "options": ["हृदय", "त्वचा", "यकृत", "फेफड़े"],
    "correct": 1
  },
  {
    "category": "General Science - Physics, Chemistry, Biology",
    "question": "\"सूर्य का ऊर्जा स्रोत\" क्या है?",
    "options": ["नाभिकीय संलयन", "नाभिकीय विखंडन", "रासायनिक प्रतिक्रिया", "विद्युत ऊर्जा"],
    "correct": 0
  },
  {
    "category": "General Science - Physics, Chemistry, Biology",
    "question": "\"विटामिन D\" किससे प्राप्त होता है?",
    "options": ["सूर्य का प्रकाश", "दूध", "अंडा", "उपरोक्त सभी"],
    "correct": 3
  },
  {
    "category": "General Science - Physics, Chemistry, Biology",
    "question": "\"लाल रक्त कणिकाओं\" का कार्य क्या है?",
    "options": ["ऑक्सीजन का परिवहन", "रोग प्रतिरोधक क्षमता", "हार्मोन का निर्माण", "ऊर्जा उत्पादन"],
    "correct": 0
  },
  {
    "category": "General Science - Physics, Chemistry, Biology",
    "question": "\"सोडियम क्लोराइड\" किस नाम से जाना जाता है?",
    "options": [ "चीनी", "चूना","सामान्य नमक", "अमोनिया"],
    "correct": 2
  },
  {
    "category": "General Science - Physics, Chemistry, Biology",
    "question": "\"मानव शरीर में रक्त का शुद्धीकरण\" कौन सा अंग करता है?",
    "options": ["हृदय", "गुर्दा", "यकृत", "फेफड़े"],
    "correct": 1
  },
  {
    "category": "Indian History - Ancient & Medieval",
    "question": "\"अशोक का शिलालेख\" किस लिपि में लिखा गया है?",
    "options": [ "खरोष्ठी", "संस्कृत", "फारसी","ब्राह्मी"],
    "correct": 3
  },
  {
    "category": "Indian History - Ancient & Medieval",
    "question": "\"गुप्तकाल\" में कौन सी मुद्रा प्रचलित थी?",
    "options": ["सोने की मुद्रा", "तांबे की मुद्रा", "चाँदी की मुद्रा", "उपरोक्त सभी"],
    "correct": 3
  },
  {
    "category": "Indian History - Ancient & Medieval",
    "question": "\"दिल्ली सल्तनत\" का पहला शासक कौन था?",
    "options": ["कुतुबुद्दीन ऐबक", "इल्तुतमिश", "बलबन", "अलाउद्दीन खलजी"],
    "correct": 0
  },
  {
    "category": "Indian History - Ancient & Medieval",
    "question": "\"मुगल साम्राज्य\" का संस्थापक कौन था?",
    "options": [ "अकबर", "हुमायूँ", "शाहजहाँ","बाबर"],
    "correct": 3
  },
  {
    "category": "Indian History - Ancient & Medieval",
    "question": "\"पानीपत का प्रथम युद्ध\" कब हुआ?",
    "options": [ "1556", "1761","1526", "1707"],
    "correct": 2
  },
  {
    "category": "Indian History - Ancient & Medieval",
    "question": "\"अकबर\" ने किस नीति का पालन किया?",
    "options": [ "विभाजन और शासन", "सुलह-ए-कुल","धार्मिक असहिष्णुता", "युद्ध नीति"],
    "correct": 1
  },
  {
    "category": "Indian History - Ancient & Medieval",
    "question": "\"शेरशाह सूरी\" किसके लिए प्रसिद्ध था?",
    "options": ["सड़क निर्माण", "सिक्का प्रणाली", "प्रशासनिक सुधार", "उपरोक्त सभी"],
    "correct": 3
  },
  {
    "category": "Indian History - Ancient & Medieval",
    "question": "\"खजुराहो मंदिर\" किस राज्य में स्थित है?",
    "options": ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "बिहार"],
    "correct": 0
  },
  {
    "category": "Indian History - Ancient & Medieval",
    "question": "\"विक्रमादित्य\" किस वंश से संबंधित थे?",
    "options": ["गुप्त वंश", "मौर्य वंश", "चोल वंश", "चालुक्य वंश"],
    "correct": 0
  },
  {
    "category": "Indian Geography - Resources & Agriculture",
    "question": "भारत का सबसे बड़ा खनिज तेल उत्पादक राज्य कौन सा है?",
    "options": ["गुजरात", "असम", "राजस्थान", "महाराष्ट्र"],
    "correct": 2
  },
  {
    "category": "Indian Geography - Resources & Agriculture",
    "question": "\"कृषि का हरित क्रांति\" किस फसल से जुड़ा है?",
    "options": ["गेहूँ", "धान", "कपास", "गन्ना"],
    "correct": 0
  },
  {
    "category": "Indian Geography - Resources & Agriculture",
    "question": "भारत का सबसे बड़ा चाय उत्पादक राज्य कौन सा है?",
    "options": [ "पश्चिम बंगाल", "तमिलनाडु", "केरल","असम"],
    "correct": 3
  },
  {
    "category": "Indian Geography - Resources & Agriculture",
    "question": "\"कृषि का पीली क्रांति\" किससे संबंधित है?",
    "options": [ "दूध उत्पादन", "मछली उत्पादन", "फल उत्पादन","तिलहन उत्पादन"],
    "correct": 3
  },
  {
    "category": "Indian Geography - Resources & Agriculture",
    "question": "\"भारत का सबसे बड़ा कपास उत्पादक राज्य\" कौन सा है?",
    "options": ["महाराष्ट्र", "गुजरात", "पंजाब", "आंध्र प्रदेश"],
    "correct": 1
  },
  {
    "category": "Indian Geography - Resources & Agriculture",
    "question": "\"भारत का सबसे बड़ा गन्ना उत्पादक राज्य\" कौन सा है?",
    "options": ["उत्तर प्रदेश", "बिहार", "महाराष्ट्र", "पंजाब"],
    "correct": 0
  },
  {
    "category": "Indian Geography - Resources & Agriculture",
    "question": "\"भारत का सबसे बड़ा गेहूँ उत्पादक राज्य\" कौन सा है?",
    "options": [ "पंजाब", "हरियाणा", "मध्य प्रदेश","उत्तर प्रदेश"],
    "correct": 3
  },
  {
    "category": "Indian Geography - Resources & Agriculture",
    "question": "\"भारत का सबसे बड़ा धान उत्पादक राज्य\" कौन सा है?",
    "options": ["पश्चिम बंगाल", "बिहार", "उत्तर प्रदेश", "आंध्र प्रदेश"],
    "correct": 0
  },
  {
    "category": "General Science - Technology & Space",
    "question": "\"चंद्रयान-3\" किस वर्ष सफल हुआ?",
    "options": ["2022", "2023", "2024", "2025"],
    "correct": 1
  },
  {
    "category": "General Science - Technology & Space",
    "question": "\"गगनयान मिशन\" का उद्देश्य क्या है?",
    "options": ["मानव को अंतरिक्ष में भेजना", "चंद्रमा पर उतरना", "मंगल पर जाना", "सूर्य का अध्ययन"],
    "correct": 0
  },
  {
    "category": "General Science - Technology & Space",
    "question": "\"NASA का Artemis Program\" किस ग्रह से संबंधित है?",
    "options": [ "मंगल", "शुक्र","चंद्रमा", "पृथ्वी"],
    "correct": 2
  },
  {
    "category": "General Science - Technology & Space",
    "question": "\"ISRO का PSLV\" किसके लिए प्रसिद्ध है?",
    "options": ["उपग्रह प्रक्षेपण", "मिसाइल", "परमाणु परीक्षण", "ऊर्जा उत्पादन"],
    "correct": 0
  },
  {
    "category": "General Science - Technology & Space",
    "question": "\"हिग्स बोसॉन\" को किस नाम से जाना जाता है?",
    "options": ["न्यूट्रॉन", "इलेक्ट्रॉन","गॉड पार्टिकल", "क्वार्क"],
    "correct": 2
  },
  {
    "category": "General Science - Technology & Space",
    "question": "\"क्वांटम डॉट्स\" किस क्षेत्र में सबसे जायदा उपयोग होते हैं?",
    "options": [ "कृषि","डिस्प्ले तकनीक", "चिकित्सा", "ऊर्जा"],
    "correct": 1
  },
  {
    "category": "General Science - Technology & Space",
    "question": "\"DNA फिंगर प्रिंटिंग\" तकनीक किससे संबंधित है?",
    "options": ["पहचान", "ऊर्जा", "कंप्यूटर", "अंतरिक्ष"],
    "correct": 0
  },
  {
    "category": "General Science - Technology & Space",
    "question": "\"ब्लॉकचेन तकनीक\" का मुख्य उपयोग किसमें है?",
    "options": [ "कृषि", "शिक्षा", "क्रिप्टोकरेंसी","चिकित्सा"],
    "correct": 2
  },
  {
    "category": "Basic Mathematics - Problem Solving",
    "question": "यदि किसी वस्तु का मूल्य ₹600 है और उस पर 20% छूट दी जाती है, तो विक्रय मूल्य क्या होगा?",
    "options": ["₹480", "₹500", "₹520", "₹540"],
    "correct": 0
  },
  {
    "category": "Basic Mathematics - Problem Solving",
    "question": "यदि किसी वस्तु का क्रय मूल्य ₹800 है और विक्रय मूल्य ₹1000 है, तो लाभ प्रतिशत कितना होगा?",
    "options": ["20%", "25%", "30%", "15%"],
    "correct": 1
  },
  {
    "category": "Basic Mathematics - Problem Solving",
    "question": "यदि किसी संख्या का 30% = 90 है, तो संख्या क्या होगी?",
    "options": ["200", "250", "300", "350"],
    "correct": 2
  },
  {
    "category": "Basic Mathematics - Problem Solving",
    "question": "यदि 12 mudoor 24 दिन में काम पूरा करते हैं, तो 6 मजदूर वही काम कितने दिन में करेंगे?",
    "options": [ "36", "30", "40","48",],
    "correct": 3
  },
  {
    "category": "Basic Mathematics - Problem Solving",
    "question": "यदि ₹2000 पर 3 वर्ष के लिए 5% वार्षिक दर से साधारण ब्याज लगाया जाए, तो ब्याज कितना होगा?",
    "options": ["₹300", "₹250", "₹400", "₹350"],
    "correct": 0
  },
  {
    "category": "Basic Mathematics - Problem Solving",
    "question": "यदि किसी संख्या का वर्ग = 625 है, तो संख्या क्या होगी?",
    "options": ["20", "25", "30", "35"],
    "correct": 1
  }
]