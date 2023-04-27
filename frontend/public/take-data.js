const template = {
    id: "12",
    title: '',
    coverImage: '',
    type: '',
    onboarding: '',
    description: '',
    difficultyLevel: '',
    duration: 1440,
    location: '',
    coins: 100,
    tasks: '',
    tasksValidation: [''],
    tips: [''],
    impact: {
        cases: [],
        type: '',
    },
    breed: '',
    info: {
        text: '',
        link: '',
    },
};

const takeData = [
    {
        id: "11",
        messages: [
            {
                id: "1",
                text: 'Link to the podcast!',
            },
            {
                id: "2",
                text: 'Link to the podcast?',
            },
            {
                id: "3",
                text: 'Link to the podcast.',
            },
            {
                id: "4",
                text: '{Link to the podcast}',
            },
        ],
        placeholderText: "Paste your podcast's link here",
        coverImage: 'take_card_clean_inbox_clear_conscience_big.png',
        title: 'Clean Inbox, Clear Conscience',
        author: 'Anonymous Bee',
        impact: {
            cases: ['CO2'],
            text: '1 deleted Email saves 4 grams of CO2',
            type: 'Environment'
        },
        impactType: 'Environment',
        subject: 'Sustainability',
        shortDescription: 'Reduce unnecessary energy usage in seconds',
        description: 'In this challenge, we want you to take a few minutes out of your day to go through your inbox and delete any old or unnecessary emails. It’s a small action, but it can have a big impact on the environment.',
        task: 'Delete any old or unnecessary emails. Take a screenshot of the number of emails you deleted before and another one after. Don’t forget to encourage your coworkers to participate as well!',
        tips: [
            "Don't forget to delete spam or sale emails",
            "Unsubscribe from unnecessary emails you no longer need or want",
            'Use labels to help you organize your work such as "work" or "personal"',
            'Remember, even small actions can make a big impact on the environment'],
        moreInformation: 'Did you know that every year, the world’s data centers consume more energy than the entire United Kingdom? And did you know that a single email produces an average of 4 grams of CO2 emissions? It’s time to take action and reduce our digital footprint.',
        coins: 200,
        reward: [[100, 'You will receive 1 point for each email you delete, for a maximum of 100 points.'], [100, 'Additionally, every 50 emails deleted will get you another 10 points, for a maximum of 100 points.']],
        progress: 0,
        duration: 1440,
        numberOfTasks: 1,
        location: 'Online',
        difficultyLevel: 'Easy',
        participants: 31,
        info: {
            text: 'Reduce Carbon Footprint',
            link: '/hello-world',
        },
    },
    {
        id: "1",
        coverImage: 'take_card_vegan_option.png',
        title: 'Vegan Option',
        author: 'Anonymous Bee',
        impactType: 'Environment',
        subject: 'Sustainability',
        shortDescription: 'Reduce unnecessary energy usage in seconds',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut mollis tellus, ut bibendum odio. Sed ut turpis libero. Pellentesque viverra elit sed metus tempor aliquet. Sed iaculis tincidunt ex lacinia venenatis. Mauris vehicula mauris in ligula auctor, in elementum velit viverra. Etiam erat risus, vehicula dignissim dui ac, laoreet rutrum magna. Aenean odio ante, convallis at metus sed, bibendum sagittis dolor. Suspendisse in purus in ex mattis dignissim at quis augue. Nam tempor dui sed nulla tempus molestie. Nunc semper volutpat euismod. Quisque sodales scelerisque laoreet. Mauris eleifend, libero in condimentum tempor, arcu mauris pellentesque nunc, ac volutpat ex enim ut neque.',
        coins: 300,
        progress: 60,
        category: 'Popular',
        duration: 10080,
        numberOfTasks: 7,
        location: 'Online',
        difficultyLevel: 'Hard',
        participants: 1,
    },
    {
        messages: [
            {
                id: "1",
                text: 'Link to the podcast!',
            },
            {
                id: "2",
                text: 'Link to the podcast?',
            },
            {
                id: "3",
                text: 'Link to the podcast.',
            },
            {
                id: "4",
                text: '{Link to the podcast}',
            },
        ],
        placeholderText: "Paste your podcast's link here",
        impact: {
            cases: ['Happy'],
            text: 'Emotional Well-Being',
            type: 'Social'
        },
        tasks: [
            'Choose a podcast related to your professional or personal interests.',
            'Listen to at least one full episode of the podcast.',
            'Share your key takeaways with the team. You can do this in a written format or record a short audio message.'
        ],
        tips: [
            "Choose a podcast that you’ve been wanting to listen to but haven’t had the chance to.",
            "Take notes while listening to the podcast so you don’t forget your key takeaways.",
            'Don’t be afraid to share your opinion and start a conversation about the topic with your colleagues.',
            'If you don’t know where to start, ask your colleagues for podcast recommendations. You might discover something new and interesting.',
            'Remember to be respectful of other people’s opinions and keep an open mind.',
        ],
        moreInformation: 'Did you know that every year, the world’s data centers consume more energy than the entire United Kingdom? And did you know that a single email produces an average of 4 grams of CO2 emissions? It’s time to take action and reduce our digital footprint.',
        reward: [[50, 'You will receive 20 points for listening to the podcast and sharing your key takeaways, and an additional 30 points for coming up with a creative way to share your key takeaways with the team.']],
        bonus: 'For those who want to take it a step further, we challenge you to create your own podcast episode on a topic related to your professional or personal interests. You can record it using your smartphone or any other device you have access to. Share your podcast episode with the team and let us know what you learned from the experience. We can’t wait to hear what you come up with!',
        duration: 1440,
        info: {
            text: 'Reduce Digital Footprint',
            link: '/hello-world',
        },
        id: "2",
        coverImage: 'take_card_podcast_power_hour.png',
        title: 'Podcast Power Hour',
        author: 'Anonymous Bee',
        impactType: 'Social',
        subject: 'Social Connection',
        shortDescription: 'Reduce unnecessary energy usage in seconds',
        description: 'Podcasts are a great way to learn new things and gain knowledge on a variety of subjects. In this challenge, we want you to listen to at least one episode of a podcast related to your professional or personal interests and share your key takeaways with the team. Not only will this challenge encourage you to learn new things, but it will also inspire your colleagues to discover new podcasts and expand their own knowledge.',
        coins: 50,
        progress: {
            oiuadsfhli1u32e: 30,
            oiuaasfhli1u32e: 70,
            oiuadsfhli1u31e: 40,
        },
        type: 'Individual',
        category: 'For you',
        numberOfTasks: 5,
        location: 'Online',
        difficultyLevel: 'Easy',
        participants: 30,
    },
    {
        id: "3",
        coverImage: 'take_card_mindful_moment.png',
        title: 'Mindful Moment',
        author: 'Anonymous Bee',
        impactType: 'Wellness',
        subject: "Wellness",
        coins: 20,
        progress: 0,
        category: 'For you',
        duration: 20160,
        durationText: '5 days, starting Monday 15/4/2023',
        numberOfTasks: 14,
        location: 'Online',
        difficultyLevel: 'Hard',
        participants: 123,
    },
    {
        id: "4",
        coverImage: 'take_card_recycling_marathon.png',
        title: "Recycling Marathon",
        author: 'Anonymous Bee',
        impactType: 'Environment',
        subject: 'Sustainability',
        coins: 300,
        progress: 0,
        category: 'For you',
        duration: 20160,
        numberOfTasks: 28,
        location: 'Online',
        difficultyLevel: 'Hard',
        participants: 100,
    },
    {
        id: "5",
        coverImage: 'take_card_fun_facts.png',
        title: 'Fun Facts',
        author: 'Anonymous Bee',
        impactType: 'Wellness',
        subject: 'Wellness',
        coins: 50,
        progress: 0,
        category: 'Popular',
        duration: 10,
        numberOfTasks: 1,
        location: 'Online',
        difficultyLevel: 'Easy',
        participants: 500,
    },
    {
        id: "6",
        coverImage: 'take_card_pub_quiz.png',
        title: 'Pub Quiz',
        author: 'Anonymous Bee',
        impactType: 'Wellness',
        subject: 'Social Connection',
        coins: 300,
        progress: 0,
        category: 'Popular',
        numberOfTasks: 1,
        location: 'Online',
        difficultyLevel: 'Easy',
        participants: 20,
    },
    {
        id: "7",
        coverImage: 'take_card_cyber_security.png',
        title: 'Cyber Security',
        author: 'Anonymous Bee',
        subject: 'Training and Development',
        coins: 500,
        progress: 0,
        category: 'Learning and Surveys',
        duration: 30,
        numberOfTasks: 1,
        location: 'Online',
        difficultyLevel: 'Medium',
        participants: 1,
    },
    {
        id: "8",
        coverImage: 'take_card_equality_diversity_inclusion.png',
        title: 'Equality, Diversity, Inclusion',
        author: 'Anonymous Bee',
        subject: 'Diversity and Inclusion',
        coins: 1000,
        progress: 0,
        category: 'Learning and Surveys',
        duration: 60,
        numberOfTasks: 1,
        location: 'Online',
        difficultyLevel: 'Hard',
        participants: 31,
    },
    {
        id: "9",
        coverImage: 'take_card_office_flex.png',
        title: 'Office Flex',
        author: 'Anonymous Bee',
        impactType: 'Wellness',
        subject: 'Social Connection',
        coins: 200,
        progress: 0,
        category: 'For you',
        numberOfTasks: 1,
        location: 'Online',
        difficultyLevel: 'Easy',
        participants: 31,
    },
    {
        id: "10",
        coverImage: 'take_card_crave_for_health.png',
        title: 'Crave for Health',
        author: 'Anonymous Bee',
        impactType: 'Wellness',
        subject: 'Wellness',
        coins: 50,
        progress: 0,
        category: 'Popular',
        duration: 1440,
        numberOfTasks: 7,
        location: 'Online',
        difficultyLevel: 'Hard',
        participants: 31,
    }
];

export default takeData;