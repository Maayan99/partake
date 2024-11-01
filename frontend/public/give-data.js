const template = {
    id: 17,
    title: '',
    coverImage: '',
    type: '', //Either Field Volunteering, Online Voluneering, Goods Donation, or Fundraising
    author: '',
    about: '', //About the NGO or the Give
    description: "",
    skills: ['Coding', 'Teaching'],
    location: '',
    contactDetails:
        {
            name: '',
            phone: '',
            email: '',
            website: '',
        },
    reward: '',
    requirements: ['', '', ''],
    impactType: '',
    impactReward: '',
    impact: ['', '', '', ''],
    timeDetails:
        {
            endDate: '',
            frequency: '',
            duration: '',
        },
    dateTime: '',

    sponsors:
        {
            text: '',
            array: [
                {
                    id: '',
                    name: '',
                    image: '',
                },
                {
                    id: '',
                    name: '',
                    image: '',
                },
            ]
        },
};

const giveData = [
    {
        id: "fgry675trgfdh856k",
        title: "Goods Donation for “Ha’Metsion”",
        coverImage: 'shekel_hamezion_donations.png',
        activityType: 'goods-donation',
        author: 'Shekel Association',
        DateTime: "n/a",
        parking: 'Nearby',
        category: 'For you',
        about: 'HaMetzion was founded in 2013 as a social and environmental business that partnered with ‘Shekel’ organisation – Israel’s leading organisation for the inclusion of people with disabilities in the community – to open a chain store of second-hand items that employs people with special needs.', //About the NGO or the Give
        description: "You can bring the items directly to our Talpiot branch, located at 39 General Pierre Koenig Street in Jerusalem, or to our city centre branch, located at 5 Dorot Rishonim street, Center of town, Jerusalem Please contact us in case you do not find parking. We will send a team to receive the donation from the vehicle.",
        location: 'General Pierre Koenig Street 39, Jerusalem',
        contactDetails:
            {
                name: 'Ofra, Donation coordinator',
                phone: '+972-03-6198214',
                website: 'https://hamezion.co.il/',
            },
        requirements: ['All clothes must be in good condition.', 'Furniture and baby products must be in good condition.', 'All electricity products must be working.'],
        impact: {
            tooltips: [
                {
                    id: '334t43',
                    title: 'People with Disabilties',
                    text: 'Supporting an organization that employs people with disabilities supports their economic empowerment, independence and helps create a more equitable society.',
                    icon: 'accessibility',
                },
                
            ],
            type: 'Social',
            categories: [
                {
                    icon: 'goods-donation',
                    boldText: 'Goods Donation',
                    text: '',
                },
            ],
        },

        timeDetails:
            {
                time: ['Sunday-Thursday', '9am - 9pm'],
                duration: 'ongoing',
            },

        additionalInfo: {
            text: '',
            array: [
                {
                    id: "uhfgdtsbvutr",
                    text: 'Please deliver the goods to our store.',
                },
                {
                    id: "gfbdteyhjiwf",
                    text: 'Please store the items in bags or in boxes.',
                },
                {
                    id: "lokgfbdtsvtw",
                    text: 'We also offer assistance in clearing out your apartment in case of moving apartments or clearing houses, stores or warehouses.',
                },
            ]
        },
        participants: {
            number: 85,
            array: [19, 7, 13, 18, 12],
        },
        aboutTheCause: 'HaMetzion was founded in 2013 as a social and environmental business that partnered with ‘Shekel’ organisation – Israel’s leading organisation for the inclusion of people with disabilities in the community – to open a chain store of second-hand items that employs people with special needs.',
        delivery: 'Self delivery',
    },
    {
        id: "fgry675trgfdh856v",
        title: "Earth Day Tree Planting",
        coverImage: 'give_card_environmental_planting.png',
        activityType: 'field',
        author: 'KKL (קרן קיימת לישראל)',
        dateTime: "April 22nd, 9:00-15:00",
        parking: 'On site',
        category: 'For you',
        duration: '6',
        description: "Join us in celebrating Earth Day with a meaningful tree planting event in collaboration with Keren Kayemeth LeIsrael - Jewish National Fund (KKL-JNF). This event aims to promote sustainable development and contribute to the goals of the United Nations' Sustainable Development Goals (SDGs). Together, we can make a positive impact on the environment and support social and environmental goals..",
        location: 'Yatir Forest, Negev Desert',
        contactDetails:
            {
                name: 'Shira, HR department',
                phone: '+972-03-6198214',
            },

            impact: {
                tooltips:
                    [
                        {
                            id: '1',
                            title: 'Carbon Sequestration',
                            text: 'Trees absorb carbon dioxide from the atmosphere through photosynthesis, helping to mitigate climate change by reducing the concentration of greenhouse gasses and sequestering carbon.',
                            icon: 'carbon-sequestration',
                        },
    
                        {
                            id: '2',
                            title: 'Air Quality',
                            text: 'Trees release oxygen as a byproduct of photosynthesis, contributing to cleaner and healthier air by reducing pollutants and filtering harmful particles.',
                            icon: 'air'
                        },
    
                        {
                            id: '3',
                            title: 'Biodiversity Enhancement',
                            text: "Planting trees creates new habitats for various species, promoting biodiversity and providing food, shelter, and nesting sites for animals, insects, and birds.",
                            icon: 'wildlife'
                        }
                    ],
                type: 'environmental',
                categories:
                    [
                        {
                            icon: 'clock',
                            boldText: '6 Hours',
                            text: '',
                        }
                    ],
                boldText: 'CO2 emissions',
                text: '',
            },
        timeDetails:
            {
                frequency: 'Ongoing'
            },

        additionalInfo: {
            text: '',
            array: [
                {
                    id: "uhfgdtsbvutr",
                    text: 'The shuttle will leave from the office buildings and go through the following stations: Tel Aviv HaHagana, Tel Aviv HaShalom.',
                },
                {
                    id: "gfbdteyhjiwf",
                    text: 'Sun Protection: It is important to ensure that participants have adequate sun protection. Providing sun hats, sunscreen and can help prevent sunburn and heat-related issues.',
                },
                {
                    id: "lokgfbdtsvtw",
                    text: 'Comfortable Clothing and Footwear: Participants should be encouraged to wear comfortable clothing and closed-toe shoes suitable for outdoor activities.',
                },
            ]
        },

        participants: {
            number: 63,
            array: [19, 7, 13, 18, 12],
        },

        aboutTheCause: 'At the Earth Day Tree Planting event, employees will participate in tree planting activities, attend educational sessions, engage in environmental awareness activities, build teamwork and collaboration, network with experts, and document the event through photography. This event promotes the goals of the SDGs by fostering environmental sustainability, raising awareness about tree planting, and encouraging employee engagement in environmental conservation efforts.',
    },

    {
        id: "19",
        title: 'Online Computer Skills Tutoring for Holocaust Survivors',
        coverImage: '',
        type: 'Online Voluneering', //Either Field Volunteering, Online Voluneering, Goods Donation, or Fundraising
        author: 'The Foundation for the welfare of holocaust victims',
        about: 'The Foundation for the welfare of holocaust victims”  is the central association for the care of Holocaust survivors in Israel. The foundation was established in 1994 by Holocaust survivors with the aim of assisting Holocaust survivors in Israel in all areas of welfare and providing them with medical, social, psychological and economic assistance so that they can live with dignity and improve their later years. ', //About the NGO or the Give
        description: 'The program helps Holocaust survivors acquire tablet usage skills with the assistance of volunteers. We are looking for a volunteer to visit a survivor once a week and guide them on various tablet uses based on their specific needs for about an hour. We also encourage social contact between the survivor and the volunteer, which can continue beyond the initial 5 months if both parties agree. A commitment of 5 months is required, which includes 3 weeks of online training, one session per week.',
        skills: ['Basic computer and tablet skills.', 'Teaching.', 'Communication.'],
        location: 'Online',
        contactDetails:
            {
                name: 'Rachel, volunteer coordinator',
                email: 'info@k-shoa.org',
                phone: ' +972-03-6090866',
            },
        reward: 'LinkedIn badge: ',
        requirements: [''],
        impactType: 'Social',
        impactReward: 'Clock- 20 hours of volunteering',
        impact: ['Seniors', 'Strengthen Local community.', 'Companionship.'],
        timeDetails:
            {
                frequency: 'Once a week',
                duration: '',
            },
    },
    {
        id: "20",
        title: 'Ein-Gedi National Park Cleaning Day',
        coverImage: '',
        activityType: 'field', //Either Field, Online Voluneering, Goods Donation, or Fundraising
        author: 'רשות הטבע והגנים & Clean Coin.',
        about: "Ein Gedi National Park is a nature reserve located in the Judean Desert of Israel, near the Dead Sea. The park features a lush oasis with waterfalls and streams, surrounded by dry desert mountains.The park is home to a variety of flora and fauna, including ibex, hyrax, and many species of birds. Ein Gedi is a popular destination for nature lovers, hikers, offering a unique and stunning contrast between the desert and oasis environments.Abraham Hostel's HR department is proud to partner with in and, “Israel Nature and Parks Authority” (רשות הטבע והגנים), to organize a day of hiking and cleaning one of Israel’s most unique places.", //About the NGO or the Givedescription: " Cleaning natural resort and national parks helps to reduce litter and waste, protect local wildlife, prevent pollution and enhance natural beauty of the park for visitors,Together, as volunteers we can make a positive impact, learn about the Ein-Gedi’s environment, wildlife and history. Ein-Gedi is a stunning natural reserve that can be enjoyed and preserved through volunteer efforts.",
        category: 'events',
        skills: ['Coding', 'Teaching'],
        location: 'Ein Gedi National Park',
        contactDetails:
            {
                name: 'Shiri Buzaglo, HR Department',
                phone: '054-12345678',
            },
        reward: '',
        requirements: ['Minimum 10 volunteers.', "Don’t forget to bring hiking essentials:", '1.3L water for each participant', '2. Sun Protection: Sunscreen, hat and sunglasses.', '3. First aid kit such as band-aids, antiseptic and pain relievers.', '4. Water shoes or hiking sandals for hiking in water.', '5. Optional: bathing suit.', '*Food and snacks will be provided by the sponsor “clean coin”.'],
        impactType: 'Social, Environmental',
        impactReward: 'clock- 5 hours of volunteering',
        impact: ['Cleaning or rehabilitating natural areas.', 'Protecting wildlife.'],
        timeDetails:
            {
                Date: 'Saturday, May 21st',
                duration: ['5 hours', '9am - 2 pm']
            },
    },
    {
        id: 'f658jdfe54rdgh45',
        title: 'Donate to Our Animal Shelter',
        coverImage: 'give_card_animal.png',
        activityType: 'fundraising', //Either Field Volunteering, Online Voluneering, Goods Donation, or Fundraising
        author: 'SPCA Israel (צער בעלי חיים)',
        about: "Since its establishment in 1927, The Society for Prevention of Cruelty to Animals in Israel (SPCA Israel) has been working for the prevention of cruelty and suffering in animals and the promotion of their rights and welfare", //About the NGO or the Give
        category: 'For you',
        description: "Donations for animals also allow us to operate our clinic for longer hours, subsidize various surgeries and treatments, improve the conditions of the animals in our care, operate more rescue vehicles to assist animals in need, conduct educational activities for future generations, and more. Come and do good by donating from the bottom of your heart.",
        location: 'online',
        parking: 'n/a',
        dateTime: 'n/a',
        contactDetails:
            {
                name: 'Chaya, head of SPCA Isreal jerusalem',
                email: 'https://spca.co.il/',
                phone: '053-1234567',
                adress: '159  Hertsel st. Tel-Aviv.'
            },
        reward: '',
        donationTiers: [
            {
                id: "dfguikmngfdt",
                text: '50 NIS - can provide medical treatment and care of an injured animal.',
            },
            {
                id: "hgnuiolkhgfv",
                text: '100 NIS - can provide vaccinations and spaying.',
            },
            {
                id: "hgnyturgfhdbfr",
                text: '200 NIS - can provide bags of food for 10 adult cats.',
            },
            {
                id: "okjgdetfgdbs",
                text: '500 NIS - you can sponsor therapy treatments for abused or traumatized animals, providing them an oppertunity to find a home.',
            },
        ],




        requirements: [''],
        impact: {
            tooltips: [
                {
                    title:'Animal Welfare',
                    text: 'Donating to an animal shelter helps them to find warm and loving homes.',
                    icon: 'animal-welfare',
                },
            ],
            type: 'Social',
            categories: [
                
                {
                    icon: 'donation',
                    boldText: 'Fundraising',
                    text:'',
            },
        ],
    },
                
               
        timeDetails:
            {
                Date: 'n/a',
                frequency: 'Ongoing',
            },
        additionalInfo: {
            text: '',
            array: [
                {
                    id: "uhntgsvrtegf",
                    text: "If you’re interested in adopting a pet, feel free to contact us and visit  our animal shelter.",
                },
            ]
        },
        participants: {
            number: 105,
            array: [11, 7, 2, 20, 13],
        },
        aboutTheCause: 'Since its establishment in 1927, The Society for Prevention of Cruelty to Animals in Israel (SPCA Israel) has been working for the prevention of cruelty and suffering in animals and the promotion of their rights and welfare.',
    },
    {
        id: 'hgyt9gueh5urhfte',
        title: 'English Teacher for Children and Youth',
        coverImage: 'english_teacher_high_school.png',
        activityType: 'online', //Either Field Volunteering, Online Voluneering, Goods Donation, or Fundraising
        author: "Kidum No'ar Kiryat Gat",
        about: "'Kidum Noa'r' is a program for high school students that includes 50 at-risk teenagers located in Kiryat Gat.", //About the NGO or the Give
        description: "We are seeking volunteers for personal and educational mentoring in English for these students.  The volunteer will provide conversation and personal support, as well as educational mentoring that includes preparation for English exams and assistance in understanding the material being studied.  The commitment is until the end of the academic year.",
        category: 'For you',
        skills: ['English', 'Teaching',],
        duration:'25',
        location: 'Online',
        parking: "n/a",
        dateTime: "October till June, Sundays.",
        contactDetails:
            {
                name: 'Maya Cohen, Volunteer Coordinator',
                email: 'maya.cohen@Kidum-Noar.org',
                phone: '+972-123456789',
            },
        reward: 'Certificate of recognition.',
        requirements: ['English-Reading and writing', 'Teaching'],
        impact: {
            tooltips: [
                {
                    title:'Education',
                    text: 'Teaching English is important to access educational resources, employment opportunities, communication and connection with a wider world.',
                    icon: 'education',
                },
                {
                    title:'Children',
                    text: 'Volunteering with children can help break the cycle of disadvantage, empower them to overcome challenges, and create a brighter future full of possibilities.',
                    icon: 'child',
                },
            ],
            type: 'Social',
            categories: [
               {
                icon: "clock",
                boldText: '25 hours',
                text: '',
                    },
                ],
            },
      

        timeDetails:
            {
                frequency: 'Weekly',
                duration: '25 hours',
            },

        additionalInfo: {
            text: '',
            array: [
                {
                    id: "dasdsadsdaasd",
                    text: 'Advantage for another language such as Russian, Arabic or Amharic.',
                },
                {
                    id: "fewhjlhjlfew",
                    text: 'The Online teaching will take place in Zoom.',
                },
                {
                    id: "bjkdvsjefwln",
                    text: 'We ask a commitment for at least 4 months of volunteering.',
                },
            ]
        },

        aboutTheCause: "'Kidum Noa'r' is a program for high school students that includes 50 at-risk teenagers located in Kiryat Gat.",
        participants: {
            number: 32,
            array: [1, 23, 24, 10, 16],
        },
    },

    {
        id: '2',
        title: 'Collect and Sort Surplus Food for Families in Need',
        author: 'Food Rescuers JLM (מצילות המזון בירושלים)',
        duration: 10,
        location: 'Jerusalem Wholesale Market',
        donations: true,
        coverImage: '',
        activityType: 'field',
        endDate: '21/5/2023',
        participants: false,
        category: 'events',
        cause: '',
        type: 'Social',
    },
    {
        id: '3',
        title: 'Help us Purchase Computers for our commuimity center',
        author: 'Kidum Noar, Kiryat Gat',
        duration: 8,
        location: 'Online',
        donations: false,
        coverImage: 'give_card_computers.png',
        activityType: 'fundraising',
        endDate: '21/5/2023',
        participants: false,
        category: 'Fundraising',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '14',
        title: 'Building a Community Garden Together!',
        author: 'Ginot Kehila Israel',
        duration: 4,
        location: "Rehavia neighberhod, Jerusalem",
        donations: false,
        coverImage: 'give_card_garden.png',
        activityType: 'field',
        endDate: '3/5/2023',
        participants: {
            number: 81,
            array: [11, 22, 18, 12, 14],
        },
        category: 'In your area',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '5',
        title: "Legal Guidance for Women in Shleters",
        author: 'נשים למען נשים',
        duration: 6,
        location: 'Online',
        donations: false,
        coverImage: 'give_card_women.png',
        activityType: 'field',
        endDate: '14/7/2023',
        participants: {
            number: 8,
            array: [8, 9, 12, 17, 18],
        },
        category: 'For you',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '2yrhfyrujfndgsyegf',
        title: "Guiding a Group of LGBTQ+ Teenagers",
        author: 'IGY Organization',
        duration: '60',
        location: 'Givat Ram, Jerusalem',
        donations: false,
        coverImage: 'give_card_pride.png',
        activityType: 'field',
        endDate: '14/5/2023',
        participants: {
            number: 8,
            array: [8, 9, 12, 17, 18],
        },
        category: 'In your area',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '6',
        title: 'Adopt a Donkey',
        author: 'Safe Haven for Donkeys',
        duration: '',
        location: "Online",
        coverImage: 'give_card_donkey.png',
        activityType: 'fundraising',
        endDate: '',
        participants: {
            number: 103,
            array: [11, 12, 21, 13, 14],
        },
        category: 'Fundraising',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '7',
        title: 'Companionship and Assistance to Seniors',
        author: 'Yad Sarah',
        duration: 8,
        location: '124 Herzl BLVD, Jerusalem',
        donations: false,
        coverImage: 'give_card_volunteering_elderly_people.png',
        activityType: 'field',
        endDate: '16/5/2023',
        participants: {
            number: 27,
            array: [11, 12, 21, 13, 14],
        },
        category: 'In your area',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '8',
        title: '',
        author: 'Hazon',
        duration: 4,
        location: '97 Jaffa Street, Clal Center, Jerusalem',
        donations: false,
        coverImage: 'give_card_sustainable_farming_volunteer.png',
        activityType: 'field',
        endDate: '3/5/2023',
        participants: {
            number: 111,
            array: [0, 10, 20, 5, 4],
        },
        category: '',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '9',
        title: 'Collect and Sort Surplus Food',
        author: 'Food Rescuers JLM (מצילות המזון)',
        duration: 5,
        location: 'השוק הסיטונאי,ירושלים',
        donations: false,
        coverImage: 'give_card_food_rescue_mission.png',
        activityType: 'field',
        endDate: '14/5/2023',
        participants: {
            number: 93,
            array: [17, 18, 19, 8, 9],
        },
        category: 'Events',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '10',
        title: 'Volunteer and Play with Rescued Animals',
        author: 'חוות החופש',
        duration: 4,
        location: 'מושב עולש',
        donations: true,
        coverImage: 'give_card_rescued_animals.png',
        activityType: 'field',
        endDate: '3/6/2023',
        participants: {
            number: 13,
            array: [16, 17, 0, 1, 10],
        },
        category: 'Events',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '11',
        title: 'Cooking Together for People in Need',
        author: 'Shishi Beiti & Hanisui School',
        duration: 5,
        location: 'Hanisui School, Jerusalem',
        donations: false,
        coverImage: 'give_card_cooking.jpg',
        activityType: 'field',
        endDate: '16/5/2023',
        participants: {
            number: 25,
            array: [16, 17, 0, 1, 10],
        },
        category: 'Events',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '12',
        title: 'Ein-Gedi National Park Cleaning Day',
        author: 'רשות הטבע והגנים & Clean Coin',
        duration: 6,
        location: 'Ein-Gedi National Park',
        donations: false,
        coverImage: 'give_card_ein_gedi_national_park_cleaning_day.png',
        activityType: 'field',
        endDate: '3/5/2023',
        participants: {
            number: 23,
            array: [13, 14, 15, 3, 4],
        },
        category: 'Events',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '122',
        title: 'Gotcha Day',
        author: 'SPCA',
        duration: 7,
        location: "H'Azma'ut Park, Jerusalem",
        donations: true,
        coverImage: 'gotcha.png',
        activityType: 'field',
        endDate: '3/5/2023',
        participants: {
            number: 23,
            array: [13, 14, 15, 3, 4],
        },
        category: 'Events',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '13',
        title: 'Donations For Families in Need',
        author: 'Latet',
        donations: false,
        location: 'online',
        coverImage: 'give_card_food_basket_distribution.png',
        activityType: 'fundraising',
        endDate: '14/5/2023',
        participants: {
            number: 12,
            array: [10, 2, 3, 11, 12],
        },
        category: 'Fundraising',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '4',
        title: 'Host a Lone Solider for the Weekend',
        author: 'Big Brother Oganization for Lone Soliders',
        coverImage: 'give_card_help_PTSD.png',
        location:'At your home',
        activityType: 'field',
        endDate: '3/6/2023',
        participants: {
            number: 320,
            array: [6, 7, 1, 8, 9],
        },
        category: 'In your area',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '55',
        title: 'Pets Therapy for Seniors',
        author: 'Matav',
        coverImage: 'pets_therapy.png',
        location:'Jerusalem',
        activityType: 'field',
        endDate: '23/8/2023',
        participants: {
            number: 320,
            array: [6, 7, 1, 8, 9],
        },
        category: 'In your area',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '15',
        title: 'Help Us Treat and Prevent Addiction',
        author: 'ICA',
        location: 'Online',
        donations: false,
        coverImage: 'give_card_helping_children.png',
        activityType: 'fundraising',
        endDate: '16/5/2023',
        participants: false,
        category: 'Fundraising',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '155',
        title: 'Beit HaGalgalim Fundraising',
        author: 'Beit HaGalgalim',
        location: 'Online',
        donations: false,
        coverImage: 'wheelchair.png',
        activityType: 'fundraising',
        endDate: '19/9/2023',
        participants: false,
        category: 'Fundraising',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '16',
        title: 'Environmental Restoration Day',
        author: 'Leket Israel',
        donations: false,
        coverImage: 'give_card_environmental _restoration_day.png',
        activityType: 'goods-donation',
        endDate: '3/5/2023',
        participants: {
            number: 67,
            array: [1, 2, 3, 4, 5],
        },
        category: '',
        cause: '',
        type: '',
        sponsors: [],
    },
];

export default giveData;