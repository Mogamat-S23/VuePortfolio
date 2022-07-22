import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    testimonials: [{
        name: "Joel",
        surname: "Mukanya",
        about: "Saleem is a well-behaved, outstanding, and helpful person. He knows how to make a plan if one of the webpage features is not working.",
        title: "Lecturer",
        image: "https://i.postimg.cc/3Jh3jYQf/joel3.jpg"
      },

      {
        name: "Abdus-Samad",
        surname: "Charles",
        about: "Saleem is a hardworking person whose problem solving skills are second to none, you can always trust him with any responsibility.",
        title: "Colleague",
        image: "https://i.postimg.cc/SxkK5Dhr/Charles-4.jpg"
      },

      {
        name: "Marshalino",
        surname: "Jankowski",
        about: "Saleem is the definition of hardwork, morals and talent. He shows his ability through his work and his personality through his kindness by always lending a hand to anyone who is facing a problem. He is an awesome team member and remarkable individual who always describes himself through his code that always leaves everyone impressed and speechless.",
        title: "Colleague",
        image: "https://i.postimg.cc/yYXfsYMH/LS1.jpg"
      },
      {
        name: "Ra'ees",
        surname: "Benny",
        about: "Mogamat Saleem Areifdien is hardworking person with a good work ethic. He is always in a happy mood and is ready to assist at a moments notice. He loves to create websites that are alive. He will be an excellent in a team and any team would be lucky to have him.",
        title: "Colleague",
        image: "https://i.postimg.cc/BvGQDphD/Raees-3.jpg"
      },
      {
        name: " Rasheedah",
        surname: "Anhuizen",
        about: "Saleem is very hardworking and possesses a keen attention to detail. He is always ready and willing to assist his peers.",
        title: "Colleague",
        image: "https://i.postimg.cc/bNthTbSR/Rasheedah-2.jpg"
      },
      {
        name: "Taucia",
        surname: "Jackson",
        about: "Saleem is a hardworking and dedicated individual who is always willing to go the extra mile. He understands and Respects Others. He is a quick learner, stays on track, and completes projects promptly. Your company would be well served by him.",
        title: "Colleague",
        image: "https://i.postimg.cc/QMJm8m4S/taucia-png-2.jpg"
      },


    ],

    projects: {
      project: [{
          name: "Portfolio",
          img: "https://i.postimg.cc/Y91WwV73/portfolio.png",
          github: "https://github.com/Mogamat-S23/portfolio",
          live: "https://msaleem-portfolio.netlify.app",
          category: "HTML/CSS"
        },
        {
          name: "ToDo App",
          img: "https://i.postimg.cc/yYbZm7pt/to-do-app.png",
          github: "https://github.com/Mogamat-S23/ToDoApp",
          live: "https://saleem-todo-app.netlify.app",
          category: "Javascript"
        },
        {
          name: "Game-Listing",
          img: "https://i.postimg.cc/sxB7w3RL/game-listing.png",
          github: "https://github.com/Mogamat-S23/GameListing",
          live: "https://mogamat-game-listing.netlify.app",
          category: "Vue"
        },
        {
          name: "Website",
          img: "https://i.postimg.cc/0Qt2rShg/Screenshot-2022-05-11-113854.png",
          github: "https://github.com/Mogamat-S23/mock-portfolio",
          live: "https://gleaming-dango-9bd48c.netlify.app",
          category: "Bootstrap"
        },
        {
          name: "BMI Calculator",
          img: "https://i.postimg.cc/RF8hXfd7/BMI-Calculator.png",
          github: "https://github.com/Mogamat-S23/BMI---Calculator",
          live: "https://saleembmi-calculator.netlify.app",
          category: "Javascript"
        },
        {
          name: "Temperature Converter",
          img: "https://i.postimg.cc/qvPrRTwG/Temperature-converter.png",
          github: "https://github.com/Mogamat-S23/TemperaturConverter",
          live: "https://saleem-temperature-converter.netlify.app",
          category: "Javascript"
        },
      ],
      photoshop: [{
         

          id:"1",
          name: "Mockup",
          img: "https://i.postimg.cc/qMYGhvJs/sun-travel.jpg",
          category: "Photoshop"
        }
      ],
    },

    Resume: [{
        name: "Summary",
        year: "",
        info: "I am a hard-working and deadline-driven Aspiring Web developer and Designer with 2 years of experience in designing and developing using tools such as.",
        skills: [
          "Visual Studio Code",
          "Visual Studio",
          "CodePen",
          "Photoshop"
        ]


      },

      {
        name: "Tertiary Education",
        year: "2022",
        info: "Currently at Life Choice Coding Acadamy. Tools i use.",
        skills: [
          "Visual Studio Code",
          "CodePen",
          "Bootstarp"
        ]

      },
      {
        name: "Secondary Education",
        year: "2016",
        info: "Matriculated Al-Azhar High School.",
        skills: []


      },
      
      {
        name: "",
        year: "2021",
        info: "College Of Cape Town. Studied Microsoft IT Academy(MSETA) :Web Development tools I used",
        skills: [
          "Visual Studio",
          "Notepad ++",
          "Bootstrap"
        ]
        
      },
      {
        name: "Work Experience",
        year: "2017-18",
        info: "Click Kenilworth Center , Shop Assistant Cashier for 6 months.",
        skills: []

      },





    ],




  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})