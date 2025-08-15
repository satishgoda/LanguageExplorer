// Sanskrit & Telugu Explorer JS

const languageData = {
    sanskrit: {
        vowels: { title: "Vowels (स्वराः)", list: [
            { char: 'अ', examples: [{word: 'अग्निः', meaning: 'Fire'}, {word: 'अतिथिः', meaning: 'Guest'}, {word: 'अश्वः', meaning: 'Horse'}, {word: 'अम्बरम्', meaning: 'Sky'}, {word: 'अमृतम्', meaning: 'Nectar'}] },
            { char: 'आ', examples: [{word: 'आम्रम्', meaning: 'Mango'}, {word: 'आकाशः', meaning: 'Sky'}, {word: 'आसनम्', meaning: 'Seat'}, {word: 'आनन्दः', meaning: 'Joy'}, {word: 'आरोग्यम्', meaning: 'Health'}] },
            { char: 'इ', examples: [{word: 'इन्दुः', meaning: 'Moon'}, {word: 'इच्छा', meaning: 'Wish'}, {word: 'इन्द्रः', meaning: 'Indra (King of Gods)'}, {word: 'इतिहासः', meaning: 'History'}, {word: 'इक्षुः', meaning: 'Sugarcane'}] },
            { char: 'ई', examples: [{word: 'ईशः', meaning: 'God'}, {word: 'ईश्वरः', meaning: 'Lord'}, {word: 'ईर्ष्या', meaning: 'Envy'}, {word: 'ईक्षणम्', meaning: 'Seeing'}, {word: 'ईहा', meaning: 'Effort'}] },
            { char: 'उ', examples: [{word: 'उष्ट्रः', meaning: 'Camel'}, {word: 'उदयः', meaning: 'Rise'}, {word: 'उत्तरम्', meaning: 'Answer'}, {word: 'उपवनम्', meaning: 'Garden'}, {word: 'उत्सवः', meaning: 'Festival'}] },
            { char: 'ऊ', examples: [{word: 'ऊर्ण', meaning: 'Wool'}, {word: 'ऊर्जा', meaning: 'Energy'}, {word: 'ऊहः', meaning: 'Inference'}, {word: 'ऊनम्', meaning: 'Less'}, {word: 'ऊर्ध्वम्', meaning: 'Upwards'}] },
            { char: 'ऋ', examples: [{word: 'ऋषिः', meaning: 'Sage'}, {word: 'ऋणम्', meaning: 'Debt'}, {word: 'ऋतुः', meaning: 'Season'}, {word: 'ऋग्वेदः', meaning: 'Rigveda'}, {word: 'ऋषभः', meaning: 'Bull'}] },
            { char: 'ॠ', examples: [] }, { char: 'ऌ', examples: [] }, { char: 'ॡ', examples: [] },
            { char: 'ए', examples: [{word: 'एकम्', meaning: 'One'}, {word: 'एव', meaning: 'Only'}, {word: 'एतत्', meaning: 'This'}, {word: 'एला', meaning: 'Cardamom'}, {word: 'एषः', meaning: 'This (masculine)'}] },
            { char: 'ऐ', examples: [{word: 'ऐक्यम्', meaning: 'Unity'}, {word: 'ऐरावतः', meaning: 'Airavata (Indra\'s elephant)'}, {word: 'ऐश्वर्यम्', meaning: 'Prosperity'}, {word: 'ऐतिहासिकम्', meaning: 'Historical'}, {word: 'ऐच्छिकम्', meaning: 'Optional'}] },
            { char: 'ओ', examples: [{word: 'ओदनम्', meaning: 'Cooked rice'}, {word: 'ओष्ठः', meaning: 'Lip'}, {word: 'ओम्', meaning: 'Om (sacred syllable)'}, {word: 'ओजः', meaning: 'Vigor'}, {word: 'ओषधिः', meaning: 'Herb/Medicine'}] },
            { char: 'औ', examples: [{word: 'औषधम्', meaning: 'Medicine'}, {word: 'औदार्यम्', meaning: 'Generosity'}, {word: 'औपचारिकम्', meaning: 'Formal'}, {word: 'औत्सुक्यम्', meaning: 'Curiosity'}, {word: 'औद्योगिक', meaning: 'Industrial'}] },
        ]},
        consonants: { title: "Consonants (व्यञ्जनानि)", list: [
            { char: 'क', examples: [{word: 'कमलम्', meaning: 'Lotus'}, {word: 'कविः', meaning: 'Poet'}, {word: 'कार्यम्', meaning: 'Work'}, {word: 'कथा', meaning: 'Story'}, {word: 'कण्टकम्', meaning: 'Thorn'}] },
            { char: 'ख', examples: [{word: 'खगः', meaning: 'Bird'}, {word: 'खड्गः', meaning: 'Sword'}, {word: 'खलः', meaning: 'Wicked person'}, {word: 'खनित्रम्', meaning: 'Spade'}, {word: 'खेदः', meaning: 'Sorrow'}] },
            { char: 'ग', examples: [{word: 'गजः', meaning: 'Elephant'}, {word: 'गङ्गा', meaning: 'Ganges river'}, {word: 'गीतम्', meaning: 'Song'}, {word: 'गुरुः', meaning: 'Teacher'}, {word: 'ग्रामः', meaning: 'Village'}] },
            { char: 'घ', examples: [{word: 'घटः', meaning: 'Pot'}, {word: 'घनः', meaning: 'Cloud'}, {word: 'घण्टा', meaning: 'Bell'}, {word: 'घोरम्', meaning: 'Fierce'}, {word: 'घृतम्', meaning: 'Ghee'}] },
            { char: 'ङ', examples: [{word: 'अङ्कः', meaning: 'Number'}, {word: 'पङ्कजम्', meaning: 'Lotus'}, {word: 'शङ्खः', meaning: 'Conch'}, {word: 'गङ्गा', meaning: 'Ganges river'}, {word: 'सङ्गः', meaning: 'Company'}] },
            { char: 'च', examples: [{word: 'चन्द्रः', meaning: 'Moon'}, {word: 'चक्रम्', meaning: 'Wheel'}, {word: 'चर्म', meaning: 'Skin'}, {word: 'चक्षुः', meaning: 'Eye'}, {word: 'चम्पकम्', meaning: 'Champa flower'}] },
            { char: 'छ', examples: [{word: 'छात्रः', meaning: 'Student'}, {word: 'छाया', meaning: 'Shadow'}, {word: 'छत्रम्', meaning: 'Umbrella'}, {word: 'छन्दः', meaning: 'Meter (poetry)'}, {word: 'छेदः', meaning: 'Cut'}] },
            { char: 'ज', examples: [{word: 'जलम्', meaning: 'Water'}, {word: 'जनः', meaning: 'Person'}, {word: 'जयः', meaning: 'Victory'}, {word: 'जिह्वा', meaning: 'Tongue'}, {word: 'जन्म', meaning: 'Birth'}] },
            { char: 'झ', examples: [{word: 'झरः', meaning: 'Waterfall'}, {word: 'झञ्झा', meaning: 'Storm'}]},
            { char: 'ञ', examples: [{word: 'ज्ञानम्', meaning: 'Knowledge'}, {word: 'यज्ञः', meaning: 'Sacrifice'}, {word: 'राज्ञी', meaning: 'Queen'}, {word: 'अञ्जलिः', meaning: 'Folded hands'}, {word: 'पञ्च', meaning: 'Five'}] },
            { char: 'ट', examples: [{word: 'कटः', meaning: 'Mat'}]}, { char: 'ठ', examples: []}, { char: 'ड', examples: []}, { char: 'ढ', examples: []},
            { char: 'ण', examples: [{word: 'गणेशः', meaning: 'Ganesha'}, {word: 'गुणः', meaning: 'Quality'}, {word: 'प्रणामः', meaning: 'Salutation'}, {word: 'वीणा', meaning: 'Veena (instrument)'}, {word: 'अरण्यम्', meaning: 'Forest'}] },
            { char: 'त', examples: [{word: 'तरुः', meaning: 'Tree'}, {word: 'तडागः', meaning: 'Pond'}, {word: 'तारा', meaning: 'Star'}, {word: 'तैलम्', meaning: 'Oil'}, {word: 'त्वम्', meaning: 'You'}] },
            { char: 'थ', examples: [{word: 'रथः', meaning: 'Chariot'}, {word: 'कथा', meaning: 'Story'}, {word: 'अथ', meaning: 'Then'}, {word: 'पथिन्', meaning: 'Path'}, {word: 'पृथ्वी', meaning: 'Earth'}] },
            { char: 'द', examples: [{word: 'दिनम्', meaning: 'Day'}, {word: 'देवः', meaning: 'God'}, {word: 'दानम्', meaning: 'Donation'}, {word: 'दुग्धम्', meaning: 'Milk'}, {word: 'द्वारम्', meaning: 'Door'}] },
            { char: 'ध', examples: [{word: 'धनम्', meaning: 'Wealth'}, {word: 'धर्मः', meaning: 'Duty/Religion'}, {word: 'धनुः', meaning: 'Bow'}, {word: 'ध्यानम्', meaning: 'Meditation'}, {word: 'धरणी', meaning: 'Earth'}] },
            { char: 'न', examples: [{word: 'नदी', meaning: 'River'}, {word: 'नगरम्', meaning: 'City'}, {word: 'नयनम्', meaning: 'Eye'}, {word: 'नाम', meaning: 'Name'}, {word: 'नवीनम्', meaning: 'New'}] },
            { char: 'प', examples: [{word: 'पत्रम्', meaning: 'Leaf/Letter'}, {word: 'पर्वतः', meaning: 'Mountain'}, {word: 'पुष्पम्', meaning: 'Flower'}, {word: 'पिता', meaning: 'Father'}, {word: 'पक्षिन्', meaning: 'Bird'}] },
            { char: 'फ', examples: [{word: 'फलम्', meaning: 'Fruit'}, {word: 'फेनः', meaning: 'Foam'}]},
            { char: 'ब', examples: [{word: 'बालकः', meaning: 'Boy'}, {word: 'बन्धुः', meaning: 'Relative'}, {word: 'बुद्धिः', meaning: 'Intellect'}, {word: 'बिन्दुः', meaning: 'Dot/Drop'}, {word: 'बलम्', meaning: 'Strength'}] },
            { char: 'भ', examples: [{word: 'भानुः', meaning: 'Sun'}, {word: 'भक्तः', meaning: 'Devotee'}, {word: 'भवनम्', meaning: 'Building'}, {word: 'भारः', meaning: 'Weight'}, {word: 'भूमिः', meaning: 'Earth/Land'}] },
            { char: 'म', examples: [{word: 'माता', meaning: 'Mother'}, {word: 'मित्रम्', meaning: 'Friend'}, {word: 'मेघः', meaning: 'Cloud'}, {word: 'मनः', meaning: 'Mind'}, {word: 'मधु', meaning: 'Honey'}] },
            { char: 'य', examples: [{word: 'यन्त्रम्', meaning: 'Machine'}, {word: 'यशः', meaning: 'Fame'}, {word: 'युवकः', meaning: 'Youth'}, {word: 'योगः', meaning: 'Yoga'}, {word: 'युद्धम्', meaning: 'War'}] },
            { char: 'र', examples: [{word: 'रात्रिः', meaning: 'Night'}, {word: 'राजा', meaning: 'King'}, {word: 'रक्तम्', meaning: 'Blood'}, {word: 'रत्नम्', meaning: 'Gem'}, {word: 'रसः', meaning: 'Juice'}] },
            { char: 'ल', examples: [{word: 'लता', meaning: 'Creeper'}, {word: 'लोकः', meaning: 'World'}, {word: 'लेखनी', meaning: 'Pen'}, {word: 'लवणम्', meaning: 'Salt'}, {word: 'लघु', meaning: 'Small/Light'}] },
            { char: 'व', examples: [{word: 'वनम्', meaning: 'Forest'}, {word: 'वायुः', meaning: 'Wind'}, {word: 'विद्या', meaning: 'Knowledge'}, {word: 'वस्त्रम्', meaning: 'Cloth'}, {word: 'वृक्षः', meaning: 'Tree'}] },
            { char: 'श', examples: [{word: 'शिवः', meaning: 'Shiva'}, {word: 'शब्दः', meaning: 'Word'}, {word: 'शरीरम्', meaning: 'Body'}, {word: 'शान्तिः', meaning: 'Peace'}, {word: 'शिशुः', meaning: 'Infant'}] },
            { char: 'ष', examples: [{word: 'षट्', meaning: 'Six'}, {word: 'भाषा', meaning: 'Language'}, {word: 'विषम्', meaning: 'Poison'}, {word: 'पुरुषः', meaning: 'Man/Person'}, {word: 'विशेषः', meaning: 'Special'}] },
            { char: 'स', examples: [{word: 'सूर्यः', meaning: 'Sun'}, {word: 'समुद्रः', meaning: 'Ocean'}, {word: 'सिंहः', meaning: 'Lion'}, {word: 'स्वर्णम्', meaning: 'Gold'}, {word: 'सुखम्', meaning: 'Happiness'}] },
            { char: 'ह', examples: [{word: 'हस्तः', meaning: 'Hand'}, {word: 'हिमम्', meaning: 'Snow'}, {word: 'हृदयम्', meaning: 'Heart'}, {word: 'हंसः', meaning: 'Swan'}, {word: 'हरितम्', meaning: 'Green'}] },
        ]}
    },
    telugu: {
        vowels: { title: "Vowels (అచ్చులు)", list: [
            { char: 'అ', examples: [{word: 'అమ్మ', meaning: 'Mother'}, {word: 'అడవి', meaning: 'Forest'}, {word: 'అరటి', meaning: 'Banana'}, {word: 'అద్దం', meaning: 'Mirror'}, {word: 'അన్నം', meaning: 'Rice'}] },
            { char: 'ఆ', examples: [{word: 'ఆవు', meaning: 'Cow'}, {word: 'ఆట', meaning: 'Game'}, {word: 'ఆకాశం', meaning: 'Sky'}, {word: 'ఆకు', meaning: 'Leaf'}, {word: 'ఆలయం', meaning: 'Temple'}] },
            { char: 'ఇ', examples: [{word: 'ఇల్లు', meaning: 'House'}, {word: 'ఇసుక', meaning: 'Sand'}, {word: 'ఇటుక', meaning: 'Brick'}, {word: 'ఇనుము', meaning: 'Iron'}, {word: 'ఇష్టం', meaning: 'Liking'}] },
            { char: 'ఈ', examples: [{word: 'ఈగ', meaning: 'Fly (insect)'}, {word: 'ఈత', meaning: 'Swimming'}, {word: 'ఈల', meaning: 'Whistle'}, {word: 'ఈశ్వరుడు', meaning: 'Lord Shiva'}, {word: 'ఈక', meaning: 'Feather'}] },
            { char: 'ఉ', examples: [{word: 'ఉడుత', meaning: 'Squirrel'}, {word: 'ఉప్పు', meaning: 'Salt'}, {word: 'ఉంగరం', meaning: 'Ring'}, {word: 'ఉదయం', meaning: 'Morning'}, {word: 'ఉల్లి', meaning: 'Onion'}] },
            { char: 'ఊ', examples: [{word: 'ఊయల', meaning: 'Cradle/Swing'}, {word: 'ఊరు', meaning: 'Village'}, {word: 'ఊపిరి', meaning: 'Breath'}, {word: 'ఊహ', meaning: 'Imagination'}, {word: 'ఊద', meaning: 'Purple'}] },
            { char: 'ఋ', examples: [{word: 'ఋషి', meaning: 'Sage'}, {word: 'ఋణం', meaning: 'Debt'}, {word: 'ఋతువు', meaning: 'Season'}, {word: 'ఋగ్వేదం', meaning: 'Rigveda'}, {word: 'ఋజువు', meaning: 'Proof'}] },
            { char: 'ౠ', examples: [] },
            { char: 'ఎ', examples: [{word: 'ఎలుక', meaning: 'Rat'}, {word: 'ఎరుపు', meaning: 'Red'}, {word: 'ఎండ', meaning: 'Sunlight'}, {word: 'ఎంత', meaning: 'How much'}, {word: 'ఎముక', meaning: 'Bone'}] },
            { char: 'ఏ', examples: [{word: 'ఏనుగు', meaning: 'Elephant'}, {word: 'ఏడు', meaning: 'Seven'}, {word: 'ఏరు', meaning: 'River'}, {word: 'ఏప్రిల్', meaning: 'April'}, {word: 'ఏడాది', meaning: 'Year'}] },
            { char: 'ఐ', examples: [{word: 'ఐదు', meaning: 'Five'}, {word: 'ఐక్యత', meaning: 'Unity'}, {word: 'ఐస్', meaning: 'Ice'}, {word: 'ఐరావతం', meaning: 'Airavata'}, {word: 'ఐశ్వర్యం', meaning: 'Prosperity'}] },
            { char: 'ఒ', examples: [{word: 'ఒంటె', meaning: 'Camel'}, {word: 'ఒకటి', meaning: 'One'}, {word: 'ఒడ్డు', meaning: 'Shore'}, {word: 'ఒళ్ళు', meaning: 'Body'}, {word: 'ఒত্তిడి', meaning: 'Pressure'}] },
            { char: 'ఓ', examples: [{word: 'ఓడ', meaning: 'Ship'}, {word: 'ఓటు', meaning: 'Vote'}, {word: 'ఓపిక', meaning: 'Patience'}, {word: 'ఓటమి', meaning: 'Defeat'}, {word: 'ఓనమాలు', meaning: 'Alphabet basics'}] },
            { char: 'ఔ', examples: [{word: 'ఔషధం', meaning: 'Medicine'}, {word: 'ఔను', meaning: 'Yes'}, {word: 'ఔదార్యం', meaning: 'Generosity'}]},
        ]},
        consonants: { title: "Consonants (హల్లులు)", list: [
            { char: 'క', examples: [{word: 'కమలం', meaning: 'Lotus'}, {word: 'కన్ను', meaning: 'Eye'}, {word: 'కథ', meaning: 'Story'}, {word: 'కల', meaning: 'Dream'}, {word: 'కప్ప', meaning: 'Frog'}] },
            { char: 'ఖ', examples: [{word: 'ఖడ్గం', meaning: 'Sword'}, {word: 'ఖనిజం', meaning: 'Mineral'}, {word: 'ఖర్చు', meaning: 'Expense'}, {word: 'ఖ్యాతি', meaning: 'Fame'}, {word: 'ఖండం', meaning: 'Continent'}] },
            { char: 'గ', examples: [{word: 'గడియారం', meaning: 'Clock'}, {word: 'గంట', meaning: 'Bell'}, {word: 'గాలి', meaning: 'Air/Wind'}, {word: 'గది', meaning: 'Room'}, {word: 'గణితం', meaning: 'Mathematics'}] },
            { char: 'ఘ', examples: [{word: 'ఘటం', meaning: 'Pot'}, {word: 'ఘనం', meaning: 'Solid/Great'}, {word: 'ఘోష', meaning: 'Loud noise'}, {word: 'ఘనత', meaning: 'Greatness'}, {word: 'మేఘం', meaning: 'Cloud'}] },
            { char: 'ఙ', examples: [{word: 'వాఙ్మూలం', meaning: 'Testimony'}]},
            { char: 'చ', examples: [{word: 'చక్రం', meaning: 'Wheel'}, {word: 'చదువు', meaning: 'Study'}, {word: 'చందమామ', meaning: 'Moon'}, {word: 'చలి', meaning: 'Cold'}, {word: 'చాప', meaning: 'Mat'}] },
            { char: 'ఛ', examples: [{word: 'ఛత్రపతి', meaning: 'Emperor'}, {word: 'ఛాయ', meaning: 'Shade/Photo'}, {word: 'ఛందస్సు', meaning: 'Prosody'}, {word: 'ఛేదించు', meaning: 'To cut'}]},
            { char: 'జ', examples: [{word: 'జడ', meaning: 'Braid'}, {word: 'జలం', meaning: 'Water'}, {word: 'జనం', meaning: 'People'}, {word: 'జయం', meaning: 'Victory'}, {word: 'జంతువు', meaning: 'Animal'}] },
            { char: 'ఝ', examples: [{word: 'ఝషం', meaning: 'Fish'}, {word: 'ఝరి', meaning: 'Stream'}]},
            { char: 'ఞ', examples: [{word: 'జ్ఞాపకం', meaning: 'Memory'}, {word: 'జ్ఞానం', meaning: 'Knowledge'}]},
            { char: 'ట', examples: [{word: 'టమోటా', meaning: 'Tomato'}, {word: 'టపాకాయ', meaning: 'Firecracker'}, {word: 'టోపీ', meaning: 'Hat'}]},
            { char: 'ఠ', examples: [{word: 'పాఠం', meaning: 'Lesson'}]},
            { char: 'డ', examples: [{word: 'డబ్బు', meaning: 'Money'}, {word: 'డబ్బా', meaning: 'Box'}, {word: 'డాక్టర్', meaning: 'Doctor'}]},
            { char: 'ఢ', examples: [{word: 'ఢంకా', meaning: 'Large drum'}]},
            { char: 'ణ', examples: [{word: 'వీణ', meaning: 'Veena (instrument)'}, {word: 'రాణి', meaning: 'Queen'}, {word: 'గణపతి', meaning: 'Ganesha'}, {word: 'బాణం', meaning: 'Arrow'}, {word: 'కారణం', meaning: 'Reason'}] },
            { char: 'త', examples: [{word: 'తల', meaning: 'Head'}, {word: 'తల్లి', meaning: 'Mother'}, {word: 'తలుపు', meaning: 'Door'}, {word: 'తమలపాకు', meaning: 'Betel leaf'}, {word: 'తాడు', meaning: 'Rope'}] },
            { char: 'థ', examples: [{word: 'రథం', meaning: 'Chariot'}, {word: 'కథ', meaning: 'Story'}, {word: 'అర్థం', meaning: 'Meaning'}]},
            { char: 'ద', examples: [{word: 'దంతం', meaning: 'Tooth'}, {word: 'దండ', meaning: 'Garland'}, {word: 'దశ', meaning: 'State/Condition'}, {word: 'దానం', meaning: 'Donation'}, {word: 'దూరం', meaning: 'Distance'}] },
            { char: 'ధ', examples: [{word: 'ధనం', meaning: 'Wealth'}, {word: 'ధర్మం', meaning: 'Justice/Duty'}, {word: 'ధనుస్సు', meaning: 'Bow'}, {word: 'ధైర్యం', meaning: 'Courage'}, {word: 'ధ్యానం', meaning: 'Meditation'}] },
            { char: 'న', examples: [{word: 'నది', meaning: 'River'}, {word: 'నగరం', meaning: 'City'}, {word: 'నక్క', meaning: 'Fox'}, {word: 'నవ్వు', meaning: 'Laughter'}, {word: 'నక్షత్రం', meaning: 'Star'}] },
            { char: 'ప', examples: [{word: 'పండు', meaning: 'Fruit'}, {word: 'పాలు', meaning: 'Milk'}, {word: 'పాట', meaning: 'Song'}, {word: 'పిల్ల', meaning: 'Child/Girl'}, {word: 'పువ్వు', meaning: 'Flower'}] },
            { char: 'ఫ', examples: [{word: 'ఫలం', meaning: 'Fruit/Result'}, {word: 'కాఫీ', meaning: 'Coffee'}]},
            { char: 'బ', examples: [{word: 'బంతి', meaning: 'Ball'}, {word: 'బడి', meaning: 'School'}, {word: 'బంగారం', meaning: 'Gold'}, {word: 'బండి', meaning: 'Vehicle'}, {word: 'బలం', meaning: 'Strength'}] },
            { char: 'భ', examples: [{word: 'భయం', meaning: 'Fear'}, {word: 'భూమి', meaning: 'Earth'}, {word: 'భోజనం', meaning: 'Meal'}, {word: 'భక్తి', meaning: 'Devotion'}, {word: 'భవనం', meaning: 'Building'}] },
            { char: 'మ', examples: [{word: 'మంచం', meaning: 'Cot'}, {word: 'మబ్బు', meaning: 'Cloud'}, {word: 'మనిషి', meaning: 'Person'}, {word: 'మందు', meaning: 'Medicine'}, {word: 'మంచి', meaning: 'Good'}] },
            { char: 'య', examples: [{word: 'యమున', meaning: 'Yamuna river'}, {word: 'యంత్రం', meaning: 'Machine'}, {word: 'యుద్ధం', meaning: 'War'}, {word: 'యాత్ర', meaning: 'Journey'}, {word: 'యువత', meaning: 'Youth'}] },
            { char: 'ర', examples: [{word: 'రవి', meaning: 'Sun'}, {word: 'రాయి', meaning: 'Stone'}, {word: 'రక్తం', meaning: 'Blood'}, {word: 'రంగు', meaning: 'Color'}, {word: 'రైಲು', meaning: 'Train'}] },
            { char: 'ల', examples: [{word: 'లత', meaning: 'Creeper'}, {word: 'లక్ష', meaning: 'Lakh (100,000)'}, {word: 'లవంగం', meaning: 'Clove'}, {word: 'లక్ష్యం', meaning: 'Goal'}]},
            { char: 'వ', examples: [{word: 'వంద', meaning: 'Hundred'}, {word: 'వాన', meaning: 'Rain'}, {word: 'వజ్రం', meaning: 'Diamond'}, {word: 'వయసు', meaning: 'Age'}, {word: 'వంట', meaning: 'Cooking'}] },
            { char: 'శ', examples: [{word: 'శంఖం', meaning: 'Conch'}, {word: 'శరీరం', meaning: 'Body'}, {word: 'శక్తి', meaning: 'Power'}, {word: 'శని', meaning: 'Saturday/Saturn'}, {word: 'శత్రువు', meaning: 'Enemy'}] },
            { char: 'ష', examples: [{word: 'భాష', meaning: 'Language'}, {word: 'విషం', meaning: 'Poison'}, {word: 'వేషం', meaning: 'Costume'}, {word: 'కృషి', meaning: 'Effort'}]},
            { char: 'స', examples: [{word: 'సంచి', meaning: 'Bag'}, {word: 'సబ్బు', meaning: 'Soap'}, {word: 'సముద్రం', meaning: 'Ocean'}, {word: 'సంగీతం', meaning: 'Music'}, {word: 'సూర్యుడు', meaning: 'Sun'}] },
            { char: 'హ', examples: [{word: 'హంస', meaning: 'Swan'}, {word: 'హారం', meaning: 'Necklace'}, {word: 'హద్దు', meaning: 'Boundary'}]},
            { char: 'ళ', examples: [{word: 'తాళం', meaning: 'Lock'}, {word: 'పళ్ళు', meaning: 'Teeth'}, {word: 'నీళ్ళు', meaning: 'Water'}]},
            { char: 'క్ష', examples: [{word: 'పక్షి', meaning: 'Bird'}, {word: 'రక్షణ', meaning: 'Protection'}, {word: 'క్షమ', meaning: 'Forgiveness'}]},
            { char: 'ఱ', examples: [{word: 'గుఱ్ఱం', meaning: 'Horse'}]},
        ]}
    }
};

let activeCharData = null;
let activeCharType = null;
let currentLang = 'sanskrit';
let viewMode = 'map'; // 'map' or 'list'
let sessionState = {
    sanskrit: { visited: [] },
    telugu: { visited: [] },
    theme: 'default'
};
let carouselIndex = 0;
let voices = []; // To store available speech synthesis voices
let lastInteractionSource = 'grid';
// DOM elements will be wired during init()
let vowelsGrid, consonantsGrid, vowelsTitle, consonantsTitle, detailView;
let mapViewBtn, listViewBtn, carouselSection, carouselTrack, carouselPrevBtn, carouselNextBtn;
let saveBtn, loadBtn, sessionStatusEl, themeSwitcher;

// --- Speech Synthesis Setup ---
function populateVoiceList() {
    voices = speechSynthesis.getVoices();
}
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}
// --- End Speech Synthesis Setup ---


function renderLanguage(lang) {
    currentLang = lang;
    const data = languageData[lang];
    
    vowelsGrid.innerHTML = '';
    consonantsGrid.innerHTML = '';
    detailView.innerHTML = `<p class="text-center text-subtle">Select a character from the left to see its details.</p>`;
    activeCharData = null;
    activeCharType = null;
    
    vowelsTitle.textContent = data.vowels.title;
    consonantsTitle.textContent = data.consonants.title;

    data.vowels.list.forEach(item => {
        const box = document.createElement('div');
        box.className = 'character-box';
        box.textContent = item.char;
        box.dataset.char = item.char;
        box.addEventListener('click', () => showCharacterDetails(item, 'Vowel', 'grid'));
        vowelsGrid.appendChild(box);
    });

    data.consonants.list.forEach(item => {
        const box = document.createElement('div');
        box.className = 'character-box';
        box.textContent = item.char;
        box.dataset.char = item.char;
        box.addEventListener('click', () => showCharacterDetails(item, 'Consonant', 'grid'));
        consonantsGrid.appendChild(box);
    });
    
    updateCarousel();
    updateVisitedStyles();
}

function renderMindmapView(charData, type) {
    detailView.innerHTML = '';
    const containerWidth = detailView.offsetWidth;
    const containerHeight = detailView.offsetHeight;

    const typePos = { x: containerWidth / 2, y: 50 };
    const charPos = { x: containerWidth / 2, y: 150 };

    const typeNode = createNode(type, 'type-node', typePos);
    const charNode = createNode(charData.char, 'char-node', charPos);
    
    detailView.appendChild(typeNode);
    detailView.appendChild(charNode);
    detailView.appendChild(createLine(typePos, charPos));

    const examples = charData.examples.slice(0, 5);
    const angleStep = examples.length > 1 ? Math.PI / (examples.length - 1) : 0;
    const radius = Math.min(containerWidth, containerHeight) / 3.5;

    if (examples.length > 0) {
        examples.forEach((ex, i) => {
            const angle = (Math.PI / 2) + angleStep * (i - (examples.length - 1) / 2);
            const wordX = charPos.x + radius * Math.cos(angle);
            const wordY = charPos.y + radius * Math.sin(angle) + 40;
            const wordPos = { x: wordX, y: wordY };
            const content = `<span>${ex.word}</span><span class="meaning">${ex.meaning}</span>`;
            const wordNode = createNode(null, 'word-node', wordPos, content);
            
            wordNode.addEventListener('click', () => speakWord(ex.word, currentLang));
            wordNode.addEventListener('mouseover', () => {
                document.querySelectorAll('.word-node').forEach(n => n.classList.add('shrink'));
                wordNode.classList.remove('shrink');
                wordNode.classList.add('grow');
            });
            wordNode.addEventListener('mouseout', () => {
                document.querySelectorAll('.word-node').forEach(n => {
                    n.classList.remove('shrink');
                    n.classList.remove('grow');
                });
            });

            detailView.appendChild(wordNode);
            detailView.appendChild(createLine(charPos, wordPos));
        });
    } else {
         const noDataPos = { x: charPos.x, y: charPos.y + 120 };
         const noDataNode = createNode('No examples available', 'word-node', noDataPos);
         detailView.appendChild(noDataNode);
         detailView.appendChild(createLine(charPos, noDataPos));
    }
}

function renderInvertedMindmapView(charData, type, targetElement) {
    const existingOverlay = document.getElementById('mindmap-overlay');
    if (existingOverlay) {
        existingOverlay.remove();
    }

    const overlay = document.createElement('div');
    overlay.id = 'mindmap-overlay';
    overlay.className = 'mindmap-overlay';
    document.body.appendChild(overlay);

    const targetRect = targetElement.getBoundingClientRect();
    overlay.style.top = `${window.scrollY + targetRect.top - 310}px`; // 300px height + 10px margin
    overlay.style.left = `${window.scrollX + targetRect.left + (targetRect.width / 2)}px`;
    
    setTimeout(() => {
        overlay.classList.add('show');
    }, 10);
    
    const containerWidth = overlay.offsetWidth;
    const containerHeight = overlay.offsetHeight;

    const charPos = { x: containerWidth / 2, y: containerHeight - 60 };
    const charNode = createNode(charData.char, 'char-node', charPos);
    overlay.appendChild(charNode);

    const examples = charData.examples.slice(0, 5);
    const angleStep = examples.length > 1 ? Math.PI / (examples.length - 1) : 0;
    const radius = Math.min(containerWidth, containerHeight) / 2.8;

    if (examples.length > 0) {
        examples.forEach((ex, i) => {
            const angle = - (Math.PI / 2) + angleStep * (i - (examples.length - 1) / 2);
            const wordX = charPos.x + radius * Math.cos(angle);
            const wordY = charPos.y + radius * Math.sin(angle) - 30;
            const wordPos = { x: wordX, y: wordY };
            const content = `<span>${ex.word}</span><span class="meaning">${ex.meaning}</span>`;
            const wordNode = createNode(null, 'word-node', wordPos, content);
            
            wordNode.addEventListener('click', (e) => {
                e.stopPropagation();
                speakWord(ex.word, currentLang);
            });
            
            overlay.appendChild(wordNode);
            overlay.appendChild(createLine(wordPos, charPos));
        });
    }
}

function renderListView(charData) {
    detailView.innerHTML = '';
    const largeChar = document.createElement('div');
    largeChar.className = 'text-8xl md:text-9xl font-bold text-center text-indigo-600 mb-6';
    largeChar.textContent = charData.char;
    detailView.appendChild(largeChar);

    const examplesList = document.createElement('ul');
    examplesList.className = 'space-y-3';
    
    if (charData.examples && charData.examples.length > 0) {
         charData.examples.forEach(ex => {
            const listItem = document.createElement('li');
            listItem.className = 'flex justify-between items-center text-lg p-3 border-b example-list-item';
            listItem.innerHTML = `<span class="font-semibold">${ex.word}</span> <span class="text-subtle">${ex.meaning}</span>`;
            listItem.addEventListener('click', () => speakWord(ex.word, currentLang));
            examplesList.appendChild(listItem);
        });
    } else {
         const listItem = document.createElement('li');
         listItem.className = 'text-center text-subtle mt-4';
         listItem.textContent = 'Example words are not available for this character.';
         examplesList.appendChild(listItem);
    }
    detailView.appendChild(examplesList);
}

function createNode(text, className, position, content) {
    const node = document.createElement('div');
    node.className = `mindmap-node ${className}`;
    node.style.left = `${position.x}px`;
    node.style.top = `${position.y}px`;
    if (content) {
        node.innerHTML = content;
    } else {
        node.textContent = text;
    }
    return node;
}

function createLine(pos1, pos2) {
    const line = document.createElement('div');
    const length = Math.sqrt((pos2.x - pos1.x) ** 2 + (pos2.y - pos1.y) ** 2);
    const angle = Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x) * 180 / Math.PI;
    const centerX = (pos1.x + pos2.x) / 2 - length / 2;
    const centerY = (pos1.y + pos2.y) / 2;

    line.className = 'mindmap-line';
    line.style.width = `${length}px`;
    line.style.height = '2px';
    line.style.transform = `rotate(${angle}deg)`;
    line.style.left = `${centerX}px`;
    line.style.top = `${centerY}px`;
    return line;
}

function speakWord(word, lang) {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(word);
    let langCode = '';
    if (lang === 'sanskrit') {
        langCode = 'sa-IN';
    } else if (lang === 'telugu') {
        langCode = 'te-IN';
    }
    
    utterance.voice = voices.find(voice => voice.lang === langCode);
    if (!utterance.voice) {
         utterance.voice = voices.find(voice => voice.lang.startsWith(langCode.substring(0,2)));
    }

    if(utterance.voice){
        speechSynthesis.speak(utterance);
    } else {
        console.warn(`No voice found for language: ${langCode}`);
    }
}

function showCharacterDetails(charData, type, source = 'grid') {
    activeCharData = charData;
    activeCharType = type;
    lastInteractionSource = source;
    
    if (!sessionState[currentLang].visited.some(item => item.char === charData.char)) {
        sessionState[currentLang].visited.push({ char: charData.char, type: type });
    }
    updateCarousel();
    updateVisitedStyles();

    detailView.classList.remove('fade-in');
    void detailView.offsetWidth;
    detailView.classList.add('fade-in');

    if (viewMode === 'map') {
        renderMindmapView(charData, type);
    } else {
        renderListView(charData);
    }
}
    
function setViewMode(mode) {
    viewMode = mode;
    mapViewBtn.classList.toggle('active', mode === 'map');
    listViewBtn.classList.toggle('active', mode === 'list');
    if (activeCharData) {
        showCharacterDetails(activeCharData, activeCharType, 'grid'); // Default to grid source on view change
    }
}

function updateVisitedStyles() {
     document.querySelectorAll('.character-box').forEach(box => {
        box.classList.remove('active', 'visited');
        if (sessionState[currentLang].visited.some(item => item.char === box.dataset.char)) {
            box.classList.add('visited');
        }
    });
    if (activeCharData) {
        const activeBox = document.querySelector(`.character-box[data-char="${activeCharData.char}"]`);
        if (activeBox) {
            activeBox.classList.add('active');
        }
    }
}

function updateCarousel() {
    const visitedCharData = sessionState[currentLang].visited;
    if (visitedCharData.length === 0) {
        carouselSection.classList.add('hidden');
        return;
    }
    carouselSection.classList.remove('hidden');
    carouselTrack.innerHTML = '';
    visitedCharData.forEach(data => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'carousel-item';
        const box = document.createElement('div');
        box.className = 'character-box'; // Removed 'visited' class
        box.textContent = data.char;
        
        let overlayTimeout;

        box.addEventListener('mouseover', () => {
            const fullData = [...languageData[currentLang].vowels.list, ...languageData[currentLang].consonants.list].find(d => d.char === data.char);
            if (fullData) {
                renderInvertedMindmapView(fullData, data.type, itemDiv);
            }
        });

        box.addEventListener('mouseout', () => {
             const overlay = document.getElementById('mindmap-overlay');
             if(overlay) {
                overlay.remove();
             }
        });

        itemDiv.appendChild(box);
        carouselTrack.appendChild(itemDiv);
    });
    updateCarouselPosition();
}

function updateCarouselPosition() {
    const itemWidth = 90; // 70px width + 20px margin
    const offset = -carouselIndex * itemWidth;
    carouselTrack.style.transform = `translateX(${offset}px)`;
}

carouselPrevBtn && carouselPrevBtn.addEventListener('click', () => {
    if (carouselIndex > 0) {
        carouselIndex--;
        updateCarouselPosition();
    }
});

carouselNextBtn && carouselNextBtn.addEventListener('click', () => {
    const itemWidth = 90;
    const trackWidth = sessionState[currentLang].visited.length * itemWidth;
    const containerWidth = carouselTrack.parentElement.offsetWidth;
    if (trackWidth > containerWidth && (carouselIndex + 1) * itemWidth < trackWidth - containerWidth + itemWidth) {
         carouselIndex++;
         updateCarouselPosition();
    }
});

function saveSession() {
    sessionState.theme = themeSwitcher.value;
    localStorage.setItem('languageLearningSession', JSON.stringify(sessionState));
    sessionStatusEl.textContent = 'Session saved!';
    setTimeout(() => sessionStatusEl.textContent = '', 2000);
}

function loadSession() {
    const savedStateJSON = localStorage.getItem('languageLearningSession');
    if (savedStateJSON) {
        const savedState = JSON.parse(savedStateJSON);
        sessionState.sanskrit.visited = savedState.sanskrit.visited || [];
        sessionState.telugu.visited = savedState.telugu.visited || [];
        setTheme(savedState.theme || 'default');
        renderLanguage(currentLang); // Re-render the current view with loaded data
        sessionStatusEl.textContent = 'Session loaded!';
        setTimeout(() => sessionStatusEl.textContent = '', 2000);
    } else {
        sessionStatusEl.textContent = 'No saved session found.';
        sessionStatusEl.style.color = '#ef4444';
         setTimeout(() => {
            sessionStatusEl.textContent = '';
            sessionStatusEl.style.color = '#10b981';
        }, 2000);
    }
}

// --- Theme Management ---
function setTheme(themeName) {
    document.body.className = 'bg-main text-main'; // Reset classes
    if (themeName !== 'default') {
        document.body.classList.add(themeName);
    }
    themeSwitcher.value = themeName;
    sessionState.theme = themeName;
}

function closeOverlayIfClickedOutside(event) {
    const overlay = document.getElementById('mindmap-overlay');
    if (overlay && !overlay.contains(event.target) && !event.target.closest('.carousel-item')) {
        overlay.remove();
    }
}

function handleResize() {
     if (activeCharData && viewMode === 'map') {
        showCharacterDetails(activeCharData, activeCharType, lastInteractionSource);
     }
     updateCarouselPosition();
}

// Public init function for module consumers
export function init() {
    // Wire DOM elements
    vowelsGrid = document.getElementById('vowels-grid');
    consonantsGrid = document.getElementById('consonants-grid');
    vowelsTitle = document.getElementById('vowels-title');
    consonantsTitle = document.getElementById('consonants-title');
    detailView = document.getElementById('detail-view');
    mapViewBtn = document.getElementById('mapViewBtn');
    listViewBtn = document.getElementById('listViewBtn');
    carouselSection = document.getElementById('carousel-section');
    carouselTrack = document.getElementById('carousel-track');
    carouselPrevBtn = document.getElementById('carousel-prev');
    carouselNextBtn = document.getElementById('carousel-next');
    saveBtn = document.getElementById('saveBtn');
    loadBtn = document.getElementById('loadBtn');
    sessionStatusEl = document.getElementById('session-status');
    themeSwitcher = document.getElementById('theme-switcher');

    // Speech voices
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    // Button wiring
    document.getElementById('sanskritBtn').addEventListener('click', () => renderLanguage('sanskrit'));
    document.getElementById('teluguBtn').addEventListener('click', () => renderLanguage('telugu'));
    mapViewBtn && mapViewBtn.addEventListener('click', () => setViewMode('map'));
    listViewBtn && listViewBtn.addEventListener('click', () => setViewMode('list'));

    carouselPrevBtn && carouselPrevBtn.addEventListener('click', () => {
        if (carouselIndex > 0) {
            carouselIndex--;
            updateCarouselPosition();
        }
    });

    carouselNextBtn && carouselNextBtn.addEventListener('click', () => {
        const itemWidth = 90;
        const trackWidth = sessionState[currentLang].visited.length * itemWidth;
        const containerWidth = carouselTrack.parentElement.offsetWidth;
        if (trackWidth > containerWidth && (carouselIndex + 1) * itemWidth < trackWidth - containerWidth + itemWidth) {
             carouselIndex++;
             updateCarouselPosition();
        }
    });

    saveBtn && saveBtn.addEventListener('click', saveSession);
    loadBtn && loadBtn.addEventListener('click', loadSession);
    themeSwitcher && themeSwitcher.addEventListener('change', (e) => setTheme(e.target.value));

    document.body.addEventListener('click', closeOverlayIfClickedOutside);
    window.addEventListener('resize', handleResize);

    // Initial render
    renderLanguage('sanskrit');
    setViewMode('map');
}

export { languageData };
