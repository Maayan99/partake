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
        id: "18",
        title: "Goods Donation For “Ha’Metsion”.",
        coverImage: 'shekel_hamezion_donations.png',
        activityType: 'goods-donation',
        author: 'Shekel Association',
        DateTime:"",
        category: 'For you',
        about: 'HaMetzion was founded in 2013 as a social and environmental business that partnered with ‘Shekel’ organisation – Israel’s leading organisation for the inclusion of people with disabilities in the community – to open a chain store of second-hand items that employs people with special needs.', //About the NGO or the Give
        description: "You can bring the items directly to our Talpiot branch, located at 39 General Pierre Koenig Street in Jerusalem, or to our city centre branch, located at 5 Dorot Rishonim street, Center of town, Jerusalem Please contact us in case you do not find parking. We will send a team to receive the donation from the vehicle.",
        location: 'General Pierre Koenig Street 39, Jerusalem.',
        contactDetails:
            {
                name: 'Ofra, Donation coordinator',
                phone: '+972-03-6198214',
                website: 'https://hamezion.co.il/',
            },
        requirements: ['All clothes must be in good condition.', 'Furniture and baby products must be in good condition.', 'All electricity products must be working.'],

        impact: {
            type: 'Social',
            categories: [
                {
                    icon: 'goods-donation',
                    boldText: 'Goods Donation',
                    text: '',
                    tooltips:
                        [
                            {
                                text: 'Supporting an organization that employs people with disabilities is important as it supports their economic empowerment , independence and helps create a more equitable society.',
                                icon: 'wheelchair',
                            },
                        ],
                },
                {
                    icon: 'goods-donation',
                    boldText: 'Goods Donation',
                    text: '',
                    tooltips:
                        [
                            {
                                text: 'Supporting an organization that employs people with disabilities is important as it supports their economic empowerment , independence and helps create a more equitable society.',
                                icon: 'wheelchair',
                            },
                            {
                                text: 'Supporting an organization that employs people with disabilities is important as it supports their economic empowerment , independence and helps create a more equitable society.',
                                icon: 'goods-donation',
                            },
                        ],
                }
            ],
        },
        timeDetails:
            {
                time: ['Sunday-Thursday', '9am - 9pm'],
                duration: 'ongoing',
            },
        sponsors:
            {
                text: 'Tamir',
                array: [
                    {
                        id: '1',
                        image: 'adam',
                        name: 'adam',
                        text: 'An Israeli non-profit organization dedicated to promoting inclusion and improving the lives of people with disabilities. We collaborate with the social business "HaMzeyon" in Jerusalem, offering employment opportunities for individuals with disabilities.',
                    },
                ]
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
                    text: 'Advantage for another language such as Russian, Arabic or Amharic.',
                },
            ]
        },
        participants: 85,
        aboutTheCause: 'HaMetzion was founded in 2013 as a social and environmental business that partnered with ‘Shekel’ organisation – Israel’s leading organisation for the inclusion of people with disabilities in the community – to open a chain store of second-hand items that employs people with special needs.',
        delivery: 'Self delivery',
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
        title: 'Ein-Gedi national Park cleaning day',
        coverImage: '',
        type: 'Field Volunteering', //Either Field Volunteering, Online Voluneering, Goods Donation, or Fundraising
        author: 'רשות הטבע והגנים & Clean Coin.',
        about: "Ein Gedi National Park is a nature reserve located in the Judean Desert of Israel, near the Dead Sea. The park features a lush oasis with waterfalls and streams, surrounded by dry desert mountains.The park is home to a variety of flora and fauna, including ibex, hyrax, and many species of birds. Ein Gedi is a popular destination for nature lovers, hikers, offering a unique and stunning contrast between the desert and oasis environments.Abraham Hostel's HR department is proud to partner with in and, “Israel Nature and Parks Authority” (רשות הטבע והגנים), to organize a day of hiking and cleaning one of Israel’s most unique places.", //About the NGO or the Givedescription: " Cleaning natural resort and national parks helps to reduce litter and waste, protect local wildlife, prevent pollution and enhance natural beauty of the park for visitors,Together, as volunteers we can make a positive impact, learn about the Ein-Gedi’s environment, wildlife and history. Ein-Gedi is a stunning natural reserve that can be enjoyed and preserved through volunteer efforts.",
        skills: ['Coding', 'Teaching'],
        location: 'Ein Gedi National Park',
        contactDetails:
            {
                name: 'Shiri Buzaglo,HR Department',
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
        id: '21',
        title: 'Donate To Our Animal Shelter.',
        coverImage: '',
        type: 'Fundraising', //Either Field Volunteering, Online Voluneering, Goods Donation, or Fundraising
        author: 'SPCA Israel (צער בעלי חיים)',
        about: "Since its establishment in 1927, The Society for Prevention of Cruelty to Animals in Israel (SPCA Israel) has been working for the prevention of cruelty and suffering in animals and the promotion of their rights and welfare", //About the NGO or the Give
        category: 'For you',
        description: "Donations for animals also allow us to operate our clinic for longer hours, subsidize various surgeries and treatments, improve the conditions of the animals in our care, operate more rescue vehicles to assist animals in need, conduct educational activities for future generations, and more. Come and do good by donating from the bottom of your heart.",
        location: 'online',
        parking: 'n/a',
        dateTime:'n/a',
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
            type: 'Social',
            categories: ['Money'],
            boldText: 'Donation',
            text: '',
            tooltip: [
                {
                    text: 'Donating to an animal shelter helps them to find warm and loving homes.',
                    icon: 'animal-welfare',
                },
            ]
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
        participants: 105,
        aboutTheCause: 'Since its establishment in 1927, The Society for Prevention of Cruelty to Animals in Israel (SPCA Israel) has been working for the prevention of cruelty and suffering in animals and the promotion of their rights and welfare.',
    },
    {
        id: '22',
        title: 'English teacher for children and youth',
        coverImage: '',
        type: 'Online Volunteering', //Either Field Volunteering, Online Voluneering, Goods Donation, or Fundraising
        author: "Kidum No'ar Kiryat Gat",
        about: "'Kidum Noa'r' is a program for high school students that includes 50 at-risk teenagers located in Kiryat Gat.", //About the NGO or the Give
        description: "We are seeking volunteers for personal and educational mentoring in English for these students.  The volunteer will provide conversation and personal support, as well as educational mentoring that includes preparation for English exams and assistance in understanding the material being studied.  The commitment is until the end of the academic year.",
        category:'For you',
        skills: ['English', 'Teaching',],
        location: 'Online',
        parking:"n/a",
        dateTime:"October till June, Sundays.",
        contactDetails:
            {
                name: 'Maya Cohen, Volunteer Coordinator',
                email: 'maya.cohen@Kidum-Noar.org',
                phone: '+972-123456789',
            },
        reward: 'Certificate of recognition.',
        requirements: ['English-Reading and writing', 'Teaching'],
        impact: {
            type: 'Social',
            categories: ['clock'],
            boldText: '25 hours',
            text: '',
            tooltip: [
                {
                    text: 'Teaching English is  important to access educational resources, employment opportunities, communication and connection with a wider world.',
                    icon: 'education',
                },
                {
                    text: 'Volunteering with children can help break the cycle of disadvantage, empower them to overcome challenges, and create a brighter future full of possibilities.',
                    icon: 'child',
                },
            ]
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
        participants: 23,
    },

    {
        id: '2',
        title: 'Collect and sort surplus food for familiies in need',
        author: 'Food Rescuers JLM (מצילות המזון בירושלים)',
        duration: 10,
        location: 'Ein Gedi Park',
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
        title: 'Online Volunteer Digital Marketing Tutors Needed',
        author: 'Clean Coin',
        duration: 8,
        location: 'Online',
        donations: false,
        coverImage: 'give_card_online_volunteer_digital_marketing_tutors_needed.png',
        activityType: 'online',
        endDate: '21/5/2023',
        participants: false,
        category: 'For you',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '4',
        title: 'Food Collection and Distribution',
        author: 'Leket Israel',
        duration: 4,
        location: '97 Jaffa Street, Clal Center, Jerusalem',
        donations: false,
        coverImage: 'give_card_food_collection_distribution.png',
        activityType: 'field',
        endDate: '3/5/2023',
        participants: true,
        category: 'For you',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '5',
        title: "Planting trees in Ben Shemen Forest",
        author: 'Kakal',
        duration: 6,
        location: 'Ben Shemen Forest',
        donations: false,
        coverImage: 'give_card_autistic_children.png',
        activityType: 'field',
        endDate: '14/5/2023',
        participants: '8',
        category: 'In your area',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '6',
        title: 'Adopt a donkey',
        author: 'Safe haven for donkeys',
        duration: 10,
        location: "Online",
        donations: true,
        coverImage: 'give_card_at-risk_youth_field.png',
        activityType: 'fundraising',
        endDate: '',
        participants: true,
        category: 'In your area',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '7',
        title: 'Volunteering with Elderly People',
        author: 'Yad Sarah',
        duration: 8,
        location: '15 Herzl Street, Jerusalem',
        donations: false,
        coverImage: 'give_card_volunteering_elderly_people.png',
        activityType: 'field',
        endDate: '16/5/2023',
        participants: false,
        category: 'In your area',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '8',
        title: 'Sustainable Farming Volunteer',
        author: 'Hazon',
        duration: 4,
        location: '97 Jaffa Street, Clal Center, Jerusalem',
        donations: false,
        coverImage: 'give_card_sustainable_farming_volunteer.png',
        activityType: 'field',
        endDate: '3/5/2023',
        participants: true,
        category: 'In your area',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '9',
        title: 'Collect and sort surplus food for familiies in need',
        author: 'Food Rescuers JLM (מצילות המזון)',
        duration: 5,
        location: '',
        donations: false,
        coverImage: 'give_card_food_rescue_mission.png',
        activityType: 'field',
        endDate: '14/5/2023',
        participants: true,
        category: 'Events',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '10',
        title: 'Renovation Day for a Holocaust Survivor’s Home',
        author: 'Helping Hands Association',
        duration: 10,
        location: '789 Hope Street, Jerusalem',
        donations: true,
        coverImage: 'give_card_renovation_day_home.png',
        activityType: 'field',
        endDate: '3/6/2023',
        participants: true,
        category: 'Events',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '11',
        title: 'Food Basket Distribution',
        author: 'Yad Sarah',
        duration: 8,
        location: 'Online',
        donations: false,
        coverImage: 'give_card_food_basket_distribution.png',
        activityType: 'online',
        endDate: '16/5/2023',
        participants: false,
        category: 'Events',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '12',
        title: 'Environmental Restoration Day',
        author: 'Leket Israel',
        duration: 4,
        location: '97 Jaffa Street, Clal Center, Jerusalem',
        donations: false,
        coverImage: 'give_card_environmental _restoration_day.png',
        activityType: 'field',
        endDate: '3/5/2023',
        participants: true,
        category: 'Events',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '13',
        title: 'Empowering Women and Children in Underprivileged Communities',
        author: 'Rakefet Group',
        donations: false,
        coverImage: 'give_card_Empowering give_card_women_children.png',
        activityType: 'donation',
        endDate: '14/5/2023',
        participants: true,
        category: 'Fundraising',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '14',
        title: 'Host a lone solider for the weekend',
        author: 'Big Brother Oganization for Lone Soliders',
        donations: true,
        coverImage: 'give_card_help_PTSD.png',
        activityType: 'donation',
        endDate: '3/6/2023',
        participants: true,
        category: 'Fundraising',
        cause: '',
        type: '',
        sponsors: [],
    },
    {
        id: '15',
        title: 'Helping Children with Cancer',
        author: 'ICA',
        location: 'Online',
        donations: false,
        coverImage: 'give_card_helping_children.png',
        activityType: 'goods_donation',
        endDate: '16/5/2023',
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
        activityType: 'goods_donation',
        endDate: '3/5/2023',
        participants: true,
        category: 'Fundraising',
        cause: '',
        type: '',
        sponsors: [],
    },
];

export default giveData;