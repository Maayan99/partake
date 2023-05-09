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
                    icon: '',

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
        author: 'Anonymous Bee',
        subject: "wellness",
        shortDescription: 'Reduce unnecessary energy usage in seconds and refresh your inbox',
        description: "Have you ever thought about the impact that deleting old emails can have on the environment? Every time you delete an email, you're reducing the amount of storage space needed on the server, which ultimately leads to lower energy consumption and carbon emissions. In this challenge, we want you to take a few minutes out of your day to go through your inbox and delete any old or unnecessary emails. It's a small action, but it can have a big impact on the environment.",
        coins: 100,
        progress: 20,
        category: '',
        durationText: 'Ongoing',
        numberOfTasks: 1,
        location: 'Online',
        difficultyLevel: 'Easy',
        participants: 568,
        type: 'challenge',

        whatToDo: "Take a few minutes to go through your inbox and delete any old or unnecessary emails. Take a screenshot of the number of emails you deleted before and after. Don't forget to encourage your coworkers to participate as well!",

        tasks:
            [
                {
                    id: "29f10a8ec96751ad",
                    validation: {
                        text: 'Take a screenshot of the emails ',
                        type: 'image',
                        icon: 'carbon',
                        infoText: 'Deleting emails can also be refreshing',
                        photoValidationData:
                            {},
                    },
                    shortText: 'Delete as many emails as possible',
                    longText: "Take a few minutes to go through your inbox and delete any old or unnecessary emails. Take a screenshot of the number of emails you deleted before and after. Don't forget to encourage your coworkers to participate as well!",
                },

                {
                    id: "29f10a8ec96751af",
                    validation: {
                        text: 'How many emails have you deleted?',
                        type: 'number',
                        icon: 'carbon',
                        infoText: 'Deleting emails can help the environment by as much as 4 grams per email',
                        numberValidationData:
                            {
                                max: 200,
                                min: 0,
                                multiplier: 4,
                                units: 'grams',
                            },
                    },
                    shortText: 'Delete as many emails as possible',
                    longText: "Take a few minutes to go through your inbox and delete any old or unnecessary emails. Take a screenshot of the number of emails you deleted before and after. Don't forget to encourage your coworkers to participate as well!",
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
                text: 'This felt so refreshing',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    id: 'owuadsfhli1u32e',
                },
            },
            {
                id: "d0d057f3401ed49b",
                text: 'This felt so refreshing',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    id: 'oiuadsfhli1u31e',
                },
            },
            {
                id: "db2fd9d5f571b962",
                text: 'This felt so refreshing',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    id: 'aiua123hvefwli1u32e',
                },
            },
            {
                id: "928966f939ccd19f",
                text: 'This felt so refreshing',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    id: 'oiuadsfhli1u32d',
                },
            },
            {
                id: "d16b1f3f061a9e62",
                text: 'This felt so refreshing',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    id: 'oiuadsfhli1u32d',
                },
            },
            {
                id: "76ef74ccdbfdeaa1",
                text: 'This felt so refreshing',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    id: 'oiuadsfhli1u32d',
                },
            },
            {
                id: "8234dabb7bfbc1ae",
                text: 'This felt so refreshing',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    id: 'oiuadsfhli1u32d',
                },
            },
            {
                id: "9958b72228e7a462",
                text: 'This felt so refreshing',
                image: 'give_card_sustainable_farming_volunteer.png',
                user: {
                    id: 'oiuadsfhli1u32d',
                },
            },

        ],

        impact: {
            type: 'environmental',
            categories:
                [
                    {
                        id: "8968f465b14a6b70",
                        icon: 'carbon',
                        tooltipText: 'Does this matter?',
                        tooltips:
                            [
                                {
                                    text: 'Each email deleted reduces co2 emissions by 4 grams',
                                    icon: 'digital-footprint',
                                },
                            ],

                    },
                    {
                        id: "8968f465b1426b70",
                        icon: 'landfill',
                        tooltipText: 'Save server space',
                        tooltips:
                            [
                                {
                                    text: 'Each email deleted saves 1 cm of server space',
                                    icon: '',
                                },
                            ],

                    },
                ],
        },

        tips: [
            {
                id: "ddc6ce14bd798f60",
                text: "Make it a habit to delete old emails regularly to reduce your carbon footprint and contribute to a more sustainable future.",
            },
            {
                id: "055060e5408fcf25",
                text: "Remember, even small actions can make a big impact on the environment.",
            },
            {
                id: "17b75b356a1e021b",
                text: "Make it a habit to delete old emails regularly to reduce your carbon footprint and contribute to a more sustainable future.\n",
            },
        ],

        reward: [
            {
                amount: 100,
                text: 'You will receive 1 point for each email you delete, for a maximum of 100 points.',
            },
            {
                amount: 100,
                text: 'Additionally, every 50 emails deleted will get you another 10 points, for a maximum of 100 points.',
            },
        ],

        moreInformation: 'Did you know that every year, the world\'s data centers consume more energy than the entire United Kingdom? And did you know that a single email produces an average of 4 grams of CO2 emissions? It\'s time to take action and reduce our digital footprint.',
    },


    //Second featured take
    {
        id: "a6289983652a8ef8",
        coverImage: 'take_card_mindful_moment.png',
        title: 'Mindful Moment',
        author: 'Anonymous Bee',
        impactType: 'Wellness',
        subject: "Wellness",
        shortDescription: 'Regular meditation in the workplace can help to reduce stress and promote relaxation.',
        description: 'Taking a few minutes to meditate can help you calm your mind and refocus your energy. In this challenge, we encourage you to take a mindful moment every day for the next week.',
        coins: 300,
        progress: 20,
        category: 'For you',
        duration: 7200,
        durationText: '5 days, starting Monday 15/4/2023',
        numberOfTasks: 5,
        location: 'Online',
        difficultyLevel: 'Hard',
        participants: 243,


        tasks: [
            {
                id: 1,
                validateText: 'How do you feel after 15 minutes of meditation?',
                shortText: 'Have a 15-minute meditation',
                longText: 'Day 1: Have a 15-minute meditation. <br/> <br/> <span class="text-blue">How to meditate</span> <br/> <br/> <span class="text-blue">What is mindfullness</span> <br/>  <br/> You can use <span class="text-blue">Headspace</span> app, or any other meditation app you like. After your meditation session, click "Validate task 1" and answer a short question.',
            },
            {
                id: 2,
                validateText: 'How do you feel after 15 minutes of meditation?',
                shortText: 'Have a 15-minute meditation',
                longText: 'Day 2: Have a 15-minute meditation. <br/> <br/> <span class="text-blue">How to meditate</span> <br/> <br/> <span class="text-blue">What is mindfullness</span> <br/>  <br/> You can use <span class="text-blue">Headspace</span> app, or any other meditation app you like. After your meditation session, click "Validate task 2" and answer a short question.',
            },
            {
                id: 3,
                validateText: 'How do you feel after 15 minutes of meditation?',
                shortText: 'Have a 15-minute meditation',
                longText: 'Day 3: Have a 15-minute meditation. <br/> <br/> <span class="text-blue">How to meditate</span> <br/> <br/> <span class="text-blue">What is mindfullness</span> <br/>  <br/> You can use <span class="text-blue">Headspace</span> app, or any other meditation app you like. After your meditation session, click "Validate task 3" and answer a short question.',
            },
            {
                id: 4,
                validateText: 'How do you feel after 15 minutes of meditation?',
                shortText: 'Have a 15-minute meditation',
                longText: 'Day 4: Have a 15-minute meditation. <br/> <br/> <span class="text-blue">How to meditate</span> <br/> <br/> <span class="text-blue">What is mindfullness</span> <br/>  <br/> You can use <span class="text-blue">Headspace</span> app, or any other meditation app you like. After your meditation session, click "Validate task 4" and answer a short question.',
            },
            {
                id: 5,
                validateText: 'How do you feel after 15 minutes of meditation?',
                shortText: 'Have a 15-minute meditation',
                longText: 'Day 5: Have a 15-minute meditation. <br/> <br/> <span class="text-blue">How to meditate</span> <br/> <br/> <span class="text-blue">What is mindfullness</span> <br/>  <br/> You can use <span class="text-blue">Headspace</span> app, or any other meditation app you like. After your meditation session, click "Validate task 5" and answer a short question.',
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
                id: "3c7c28290fa0b40c",
                text: "Choose a time of day when you can dedicate a few minutes to yourself without interruption.",
            },
            {
                id: "44e3e1aadb502387",
                text: "Find a quiet place where you can meditate comfortably.",
            },
            {
                id: "842fe8e029d688b2",
                text: "Don't worry if your mind wanders during meditation, it's normal. Simply acknowledge your thoughts and refocus your attention on your breath.",
            },
            {
                id: "dc622a83dbabc447",
                text: "Experiment with different types of meditations offered by the Headspace app to find what works best for you.",
            },
            {
                id: "a6abbb6462008676",
                text: "Encourage your colleagues to participate and share their experience. Together, we can create a more mindful workplace!",
            },
        ],

        reward: [
            {
                amount: 140,
                text: 'You will receive 10 points for each day that you meditate using the Headspace app, for a total of 140 points.'
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
        title: 'Fun Facts',
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
        title: 'Office Flex',
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
    }


];


export default takeData;