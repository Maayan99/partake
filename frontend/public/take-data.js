const template =
    {
        id: "3",
        coverImage: '.png',
        title: '',
        author: '',
        impactType: '',
        subject: "",
        shortDescription: '',
        description: '',
        coins: 300,
        progress: 20,
        category: 'For you',
        duration: 7200,
        durationText: '5 days, starting Monday 15/4/2023',
        numberOfTasks: 5,
        location: 'Online',
        difficultyLevel: 'Hard',
        participants: 123,


        tasks: [
            {
                id: "29f10a8ec96751af",
                validation: {
                    text: 'How many emails have you deleted?',
                    type: 'number',
                    icon: 'email',

                    numberValidationData:
                        {
                            max: 100,
                            min: 0,
                            multiplier: 4,
                        },

                    photoValidationData:
                        {
                            text: '',
                        },
                },
                shortText: 'Delete as many emails as possible',
                longText: "Take a few minutes to go through your inbox and delete any old or unnecessary emails. Take a screenshot of the number of emails you deleted before and after. Don't forget to encourage your coworkers to participate as well!",
            },
        ],


        galleryItems: [
            {
                id: "1",
                text: 'Link to the podcast!',
                image: 'give_card_renovation_day_home.png'
            },
            {
                id: "2",
                text: 'Link to the podcast?',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    name: 'Someone',
                    profileImage: 'profile_image_3.jpeg'
                },
            },
        ],

        impact: {
            causes: [
                {
                    id: 1,
                    text: 'Happy',
                    icon: 'happy',
                    infoText: 'Happy',
                    boldText: '',
                    largeText: '',
                },
            ],
            text: 'Emotional Well-Being',
            type: 'Social'
        },

        tips: [
            {
                text: "",
                id: 1,
            },
        ],

        reward: [
            {
                amount: 50,
                text: ''
            }
        ],

        bonus: '',
    };

const cardOnlyTemplate = {
    id: '',
    title: '',
    author: '',
    shortDescription: '',
    coverImage: '.png',
    subject: '',
    category: '',
    impact:
        {
            type: 'social'
        },
    coins: 100,
    progress: 0,
    duration: 60,
    participants: 123,
};


const takeData = [
    // First featured take (big card)
    {
        id: "b1c7051da1bc43ad",
        coverImage: 'take_card_clean_inbox_clear_conscience_big.png',
        title: 'Clean Inbox, Clear Conscience',
        author: 'Partake',
        subject: "Environmental",
        shortDescription: 'Even a small action such as deleting emails can reduce carbon emissions.',
        description: "Have you ever thought about the impact that deleting old emails can have on the environment? In this challenge, we want you to take a few minutes out of your day to go through your inbox and delete any old or unnecessary emails. It's a small action, but it can have a big impact on the environment.",
        coins: 200,
        progress: 33,
        category: 'Environmental',
        durationText: '10 minutes',
        numberOfTasks: 3,
        location: 'Online',
        difficultyLevel: 'Easy',
        participants: 27,
        type: 'challenge',

        whatToDo: "Take a screenshot of the number of emails you deleted before and another one  after. Don't forget to encourage your coworkers to participate as well!",
        tasks:
            [
                {
                    id: "19f10a8ec96751ad",
                    validation: {
                        text: "Upload the screenshot you've taken.",
                        type: 'image',
                        icon: 'energy',
                        infoText: 'Every email sent and stored requires energy to power the servers and data centers that store and transmit them.',
                        photoValidationData:
                            {},
                    },
                    shortText: "Check out your collegues' mailboxes",
                    longText: "Take a screenshot of your mailbox showing the number of emails you currently have and upload it to the gallery.",
                },
                {
                    id: "2g75y6htyr73regf",
                    validation: {
                        text: 'Draw the line to your current number.',
                        type: 'number',
                        icon: 'db',
                        infoText: 'Emails are stored in data centers that require extensive cooling systems that  consume significant amounts of energy.',
                        numberValidationData:
                            {
                                max: 200,
                                min: 0,
                                multiplier: 4,
                                units: 'grams',
                            },
                    },
                    shortText: "Check out your collegues' mailbox",
                    longText: "Delete any old or unnecessary emails and insert the number of emails you have deleted.",
                },

                {
                    id: "39f10a8ec96751af",
                    validation: {
                        text: "Upload the screenshot you've taken",
                        type: 'image',
                        icon: 'server',
                        infoText: 'Storing emails requires servers and data storage devices that are associated with Co2 emissions, and electronic waste.',
                        numberValidationData:
                            {
                                max: 200,
                                min: 0,
                                multiplier: 4,
                                units: 'grams',
                            },
                    },
                    shortText: "Check out your collegues' mailbox",
                    longText: "Take a screenshot of your mailbox showing the number of emails you currently have after deleting all unnecessary emails.",
                },
            ],


        galleryItems: [
            {
                id: "12ffbbb28978fef6",
                text: 'Look how many emails I deleted!',
                image: 'give_card_renovation_day_home.png'
            },
            {
                id: "faa623ba3bff7565",
                text: 'That was easy',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    id: 'owuadsfhli1u32e',
                },
            },
            {
                id: "d0d057f3401ed49b",
                text: 'Like cleaning my desk',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    id: 'oiuadsfhli1u31e',
                },
            },
            {
                id: "db2fd9d5f571b962",
                text: 'Nothing to add',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    id: 'aiua123hvefwli1u32e',
                },
            },
            {
                id: "928966f939ccd19f",
                text: '',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    id: 'oiuadsfhli1u32d',
                },
            },
            {
                id: "d16b1f3f061a9e62",
                text: 'I recommend emptying the bin as well',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    id: 'oiuadsfhli1u32d',
                },
            },
            {
                id: "76ef74ccdbfdeaa1",
                text: 'Wow',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    id: 'oiuadsfhli1u32d',
                },
            },
            {
                id: "8234dabb7bfbc1ae",
                text: '',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    id: 'oiuadsfhli1u32d',
                },
            },
            {
                id: "9958b72228e7a462",
                text: 'I usually delete a hundered emails per day. I think my account had been hacked',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    id: 'oiuadsfhli1u32d',
                },
            },

        ],
        impact: {
            type: 'Environmental',
            categories: [
                {
                    icon: 'carbon',
                    boldText: 'Co2 emissions',
                    text: '',
                    tooltips:
                        [
                            {
                                id: '1',
                                text: 'Deleting a single email can reduce an average of 0.4 grams of CO2 emissions.',
                                icon: 'digital-footprint',
                            }
                        ],
                }],

        },

        tips: [
            {
                id: "ddc6ce14bd798f60",
                text: "Don’t forget to delete spam or sale emails.",
            },
            {
                id: "055060e5408fcf25",
                text: "Unsubscribe from unnecessary emails you no longer need or want.",
            },
            {
                id: "17b75b356a1e021b",
                text: "Use labels to help you organize your email by category such as “work” or “personal”.\n",
            },
        ],

        reward: [
            {
                amount: 100,
                text: ' 1 coin for each 10  emails you delete, for a maximum of 100 coins.',
            },
            {
                amount: 100,
                text: 'Additionally, every 50 emails deleted will get you another 10 coins.',
            },
        ],

        moreInformation: 'Did you know that every year, the world\'s data centers consume more energy than the entire United Kingdom? And did you know that a single email produces an average of 0.4 grams of CO2 emissions? It\'s time to take action and reduce our digital footprint.',
    },


    //Second featured take
    {
        id: "a6289983652a8ef8",
        coverImage: 'take_card_mindful_moment.png',
        title: '21 Days of Mindfulness.',
        author: 'Partake',
        impactType: 'Wellness',
        subject: "Wellness",
        shortDescription: 'Meditation for 5 minutes every day at your workplace can help reduce stress and enhance relaxation.',
        description: 'Practicing meditation every day can calm your mind and refocus your energy. In this challenge, we encourage you to take a break for a few minutes at your workplace. By doing that, you can improve focus, reduce stress, and promote overall well-being for both yourself and your coworkers.',
        coins: 300,
        progress: 20,
        category: 'For you',
        duration: 30240,
        durationText: '21 days',
        numberOfTasks: 3,
        location: 'Online',
        difficultyLevel: 'Easy',
        participants: 47,

        whatToDo: 'The "21-Day Meditation Challenge " is a challenge that helps you determine a realistic and achievable meditation goal based on your desired outcome, practice meditation in an app of your choosing, and finally realizing the impact on your life.',
        tasks: [
            {
                id: 1,
                validation: {
                    text: "Now, write it down and release it to the universe (aka the gallery..)",
                    type: 'image',
                    icon: 'mindfulness',
                    infoText: 'Mindfulness meditation is like a gentle breeze that awakens the senses.',
                    numberValidationData:
                        {},
                },
                shortText: "Meditation Goal Gallery",
                longText: "Think of a goal that you would achieve before embarking on a 21-day meditation challenge.",
            },
            {
                id: 2,
                validation: {
                    text: 'Which app did you choose?',
                    type: 'multi',
                    icon: 'mindfulness',
                    infoText: 'Mindfulness meditation is like a gentle breeze that awakens the senses.',
                    multiValidationData:
                        {
                            options:
                                [
                                    {
                                        id: '1',
                                        text: 'Headspace',
                                    },
                                    {
                                        id: '2',
                                        text: 'Ten Percent',
                                    },
                                    {
                                        id: '3',
                                        text: 'Youtube',
                                    },
                                    {
                                        id: '4',
                                        text: 'Other',
                                    }
                                ]
                        },
                },
                shortText: "What apps did your collegues choose?",
                longText: "Open your favorite meditation app or track, and meditate every day for a minimum of  5 minutes."
            },
            {
                id: 2,
                validation: {
                    text: "Draw the line to your satisfaction.",
                    type: 'number',
                    icon: 'flower',
                    infoText: 'Meditation empowers us to cultivate a resilient Just as a mountain stands tall.',
                    numberValidationData:
                        {},
                },
                shortText: "See how your collegues did",
                longText: "Welcome back! Did you achieve your goal?",
            },

        ],


        galleryItems: [
            {
                id: "1",
                text: 'Link to the podcast!',
                image: 'give_card_renovation_day_home.png'
            },
            {
                id: "2",
                text: 'Link to the podcast?',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    name: 'Someone',
                    profileImage: 'profile_image_3.jpeg'
                },
            },
        ],

        impact:
            {
                type: 'Wellness',
                categories: [
                    {
                        icon: 'happy',
                        boldText: 'Well-being',
                        text: '',


                        tooltip:
                            {
                                text: 'Research shows that participants who practiced mindfulness meditation on a daily basis  experienced a decrease in stress by 31%. (Chiesa & Serretti, 2009).',
                                icon: 'relaxation',
                            },
                    },
                    {
                        icon: 'balance',
                        boldText: 'Work-life balance',
                        text: '',


                        tooltips:
                            [
                                {
                                    text: 'A study reported that individuals who engaged in regular mindfulness meditation experienced a 20% decrease in symptoms of anxiety and a 15% decrease in symptoms of depression (Hofmann et al., 2010).',
                                    icon: 'mindfulness',
                                },
                            ]
                    },
                ],

            },


        tips: [
            {
                id: "3c7c28290fa0b40c",
                text: "If you're new to meditation, start with shorter sessions and gradually increase it.",
            },
            {
                id: "44e3e1aadb502387",
                text: "Choose a time of day in a quiet place where you can dedicate a few minutes to yourself everyday.",
            },
            {
                id: "842fe8e029d688b2",
                text: "Experiment with different types of and  find what works best for you.",
            },
            {
                id: "dc622a83dbabc447",
                text: "Meditation is a skill that takes time and practice to develop, so be patient with yourself.",
            },
        ],

        reward: [
            {
                amount: 210,
                text: 'You will receive 10 coins for each day that you meditate, for a total of 210 coins'
            }
        ],
    },


    // Third featured take
    {
        id: "0b395cd505248fa2",
        coverImage: 'take_card_equality_diversity_inclusion.png',
        title: 'Equality, Diversity, Inclusion',
        author: 'Anonymous Bee',
        subject: 'Diversity and Inclusion',
        shortDescription: 'Equality and diversity in the workplace are essential for creating a positive work environment.',
        coins: 1000,
        progress: 0,
        category: 'Learning and Surveys',
        duration: 60,
        participants: 31,
    },


    // For you challenges
    {
        id: "3",
        coverImage: 'take_card_recycle.png',
        title: 'Recycling Department War.',
        author: 'HR, Abraham’s Hostel.',
        impactType: 'Environmental',
        subject: "Environmental",
        shortDescription: 'Our exciting interdepartmental recycling competition! Who can make the biggest impact?',
        description: 'Get ready for an exhilarating recycling challenge between departments! In this thrilling competition, teams will go head-to-head to determine who can make the most significant environmental impact. Watch our informative video, provided in collaboration with Tamir Corporation, to learn which materials should be recycled and join us in this exciting sustainability initiative. Click here to watch the video: [insert link to the video].',
        coins: 50,
        progress: 20,
        category: 'For you',
        duration: 20160,
        durationText: '5 days, starting Monday 15/4/2023',
        numberOfTasks: 3,
        location: 'Home',
        difficultyLevel: 'Intermediate',
        participants: 78,

        isCompetition: true,

        whatToDo: 'Collect as many packages as possible. it can be  plastic packages, paper packaging, glass, and cans.Take a picture of each full trash bag. Share the picture on the challenge feed with the type of material collected.',
        tasks: [
            {
                id: 1,
                validation: {
                    text: "What shouldn't you throw in the Tamir Orange Bag?",
                    type: 'multi',
                    icon: 'recycle',
                    infoText: 'The average household waste in Israel is 50% organic waste, 20% paper and cardboard, 10% plastic, and 20% other materials such as glass, metal, and textiles.',
                    multiValidationData:
                        {
                            options:
                                [
                                    {
                                        id: '1',
                                        text: 'Glass bottles',
                                    },
                                    {
                                        id: '2',
                                        text: 'Textile',
                                    },
                                    {
                                        id: '3',
                                        text: 'Milk cartons',
                                    },
                                    {
                                        id: '4',
                                        text: 'Stray Cats',
                                    }
                                ]
                        },
                },
                shortText: "",
                longText: "Watch the video in the description.",
            },
            {
                id: 2,
                validation: {
                    text: "How many bags have you collected in the past 14 days?",
                    type: 'free text',
                    icon: 'plastic bottle',
                    infoText: 'Recycling one ton of plastic saves around 5,774 kWh of energy.',
                    multiValidationData:
                        {},
                },
                shortText: "",
                longText: "Take Tamir orange bags home, and collect packages that can be recycled.",
            },
            {
                id: 3,
                validation: {
                    text: "Upload your photo",
                    type: 'image',
                    icon: 'Orange pastic bag.',
                    infoText: 'It is estimated that plastic bags can not decompose for 100 to 500 years.',
                    multiValidationData:
                        {},
                },
                shortText: "",
                longText: "Take a photo of the full Tamir Plastic bags next to the orange trash bin.",
            },
        ],


        galleryItems: [
            {
                id: "1",
                text: 'Link to the podcast!',
                image: 'give_card_renovation_day_home.png'
            },
            {
                id: "2",
                text: 'Link to the podcast?',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    name: 'Someone',
                    profileImage: 'profile_image_3.jpeg'
                },
            },
        ],


        impact: {
            type: 'Environmental',
            categories: ['carbon'],
            boldText: 'Co2 emissions',
            text: '',
            tooltip:
                {
                    text: 'Deleting a single email can reduce an average of 0.4 grams of CO2 emissions.',
                    icon: 'digital-footprint',
                },
        },

        tips: [
            {
                text: "Encourage your coworkers to participate and collect recyclable materials.",
                id: 1,
            },
            {
                text: "Make sure to properly sort and clean the recyclable materials before collecting them.",
                id: 2,
            },
            {
                text: "Consider setting up designated recycling bins in your workplace to make it easier for everyone to participate.",
                id: 3,
            },
            {
                text: "Remember, recycling is a simple but effective way to reduce waste and protect the environment!",
                id: 4,
            },
        ],

        moreInformation: '',

        reward: [
            {
                amount: 50,
                text: 'Every participant will earn 50 points.'
            },
            {
                amount: 50,
                text: 'Every The participants from the winning department will receive a reusable bottle. will earn 50 points.'
            }
        ],

        bonus: '',
    },


    {
        id: "3",
        coverImage: 'take_card_mindful_moment.png',
        title: 'Mindful Moment',
        author: 'Anonymous Bee',
        impactType: 'Wellness',
        subject: "Wellness",
        shortDescription: 'Reduce unnecessary energy usage in seconds',
        description: 'Podcasts are a great way to learn new things and gain knowledge on a variety of subjects. In this challenge, we want you to listen to at least one episode of a podcast related to your professional or personal interests and share your key takeaways with the team. Not only will this challenge encourage you to learn new things, but it will also inspire your colleagues to discover new podcasts and expand their own knowledge.',
        coins: 300,
        progress: 20,
        category: 'For you',
        duration: 7200,
        durationText: '5 days, starting Monday 15/4/2023',
        numberOfTasks: 5,
        location: 'Online',
        difficultyLevel: 'Hard',
        participants: 123,


        tasks: [
            {
                id: 1,
                validateText: 'How do you feel after 15 minutes of meditation?',
                shortText: 'Have a 15-minute meditation',
                longText: '',
            },
        ],


        galleryItems: [
            {
                id: "1",
                text: 'Link to the podcast!',
                image: 'give_card_renovation_day_home.png'
            },
            {
                id: "2",
                text: 'Link to the podcast?',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    name: 'Someone',
                    profileImage: 'profile_image_3.jpeg'
                },
            },
        ],

        impact: {
            causes: [
                {
                    id: 1,
                    text: 'Happy',
                    icon: 'happy',
                    infoText: 'Happy',
                    boldText: '',
                    largeText: '',
                },
            ],
            text: 'Emotional Well-Being',
            type: 'social'
        },

        tips: [
            {
                text: "",
                id: 1,
            },
        ],

        moreInformation: '',

        reward: [
            {
                amount: 50,
                text: ''
            }
        ],

        bonus: '',
    },


    {
        id: "3",
        coverImage: 'take_card_mindful_moment.png',
        title: 'Mindful Moment',
        author: 'Anonymous Bee',
        impactType: 'Wellness',
        subject: "Wellness",
        shortDescription: 'Reduce unnecessary energy usage in seconds',
        description: 'Podcasts are a great way to learn new things and gain knowledge on a variety of subjects. In this challenge, we want you to listen to at least one episode of a podcast related to your professional or personal interests and share your key takeaways with the team. Not only will this challenge encourage you to learn new things, but it will also inspire your colleagues to discover new podcasts and expand their own knowledge.',
        coins: 300,
        progress: 20,
        category: 'For you',
        duration: 7200,
        durationText: '5 days, starting Monday 15/4/2023',
        numberOfTasks: 5,
        location: 'Online',
        difficultyLevel: 'Hard',
        participants: 123,


        tasks: [
            {
                id: 1,
                validateText: 'How do you feel after 15 minutes of meditation?',
                shortText: 'Have a 15-minute meditation',
                longText: '',
            },
        ],


        galleryItems: [
            {
                id: "1",
                text: 'Link to the podcast!',
                image: 'give_card_renovation_day_home.png'
            },
            {
                id: "2",
                text: 'Link to the podcast?',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    name: 'Someone',
                    profileImage: 'profile_image_3.jpeg'
                },
            },
        ],

        impact: {
            causes: [
                {
                    id: 1,
                    text: 'Happy',
                    icon: 'happy',
                    infoText: 'Happy',
                    boldText: '',
                    largeText: '',
                },
            ],
            text: 'Emotional Well-Being',
            type: 'social'
        },

        tips: [
            {
                text: "",
                id: 1,
            },
        ],

        moreInformation: '',

        reward: [
            {
                amount: 50,
                text: ''
            }
        ],

        bonus: '',
    },


    {
        id: "73018c53b97334d9",
        coverImage: 'take_card_recycling_marathon.png',
        title: "Recycling Marathon",
        author: 'Anonymous Bee',
        shortDescription: 'In this challenge you will compete with other employees and try to recycle as much as possible!',
        impact: {
            type: 'environmental'
        },
        subject: 'Sustainability',
        coins: 300,
        progress: 0,
        category: 'For you',
        duration: 20160,
        participants: 100,
    },
    {
        id: "416171eef1bf987b",
        coverImage: 'take_card_fun_facts.png',
        title: '',
        author: 'Anonymous Bee',
        shortDescription: 'Tell us some fun facts about the office space and find out about new ones!',
        impact: {
            type: 'wellness'
        },
        subject: 'Wellness',
        coins: 50,
        progress: 0,
        category: 'Popular',
        duration: 10,
        participants: 500,
    },
    {
        id: "416171eef1bg987b",
        coverImage: 'take_card_fun_facts.png',
        title: 'Meatless Monday',
        author: 'Ilanit from HR',
        shortDescription: 'Tell us some fun facts about the office space and find out about new ones!',
        impact: {
            type: 'wellness'
        },
        subject: 'Wellness',
        coins: 50,
        progress: 0,
        category: 'Popular',
        duration: 10,
        participants: 89,
    },
    {
        id: "8b5906d96ec1cbb7",
        coverImage: 'take_card_pub_quiz.png',
        title: 'Pub Quiz',
        author: 'Anonymous Bee',
        shortDescription: 'Where do you go after work? Share with otherss and find new places!',
        impact: {
            type: 'wellness',
        },
        subject: 'Social Connection',
        coins: 300,
        progress: 0,
        category: 'Popular',
        participants: 20,
    },
    {
        id: "460bd61f793c16bd",
        coverImage: 'take_card_cyber_security.png',
        title: 'Cyber Security',
        author: 'Anonymous Bee',
        shortDescription: 'Cyber security can be critical. In this e-course you will learn all about it',
        subject: 'Training and Development',
        coins: 500,
        progress: 0,
        category: 'Learning and Surveys',
        duration: 30,
        participants: 164,
    },
    {
        id: "948fe332bf68fb37",
        coverImage: 'take_card_office_flex.png',
        title: 'Strech Break',
        author: 'Anonymous Bee',
        shortDescription: '',
        impact: {
            type: 'wellness',
        },
        subject: 'Social Connection',
        coins: 200,
        progress: 0,
        category: 'For you',
        participants: 31,
    },
    {
        id: "8ef17a519c62a6b5",
        coverImage: 'take_card_crave_for_health.png',
        title: 'Crave for Health',
        author: 'Anonymous Bee',
        shortDescription: 'Start craving healthy food by eating a more balanced diet and eliminate the urge for sweets!',
        impact: {
            type: 'wellness',
        },
        subject: 'Wellness',
        coins: 50,
        progress: 0,
        category: 'Popular',
        duration: 1440,
        participants: 31,
    },

    {
        id: '',
        title: '',
        author: '',
        shortDescription: '',
        coverImage: '.png',
        subject: '',
        category: '15 Minutes or Less',
        impact:
            {
                type: 'social'
            },
        coins: 100,
        progress: 0,
        duration: 60,
        participants: 123,
    }

];


export default takeData;