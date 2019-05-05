export interface IProject {
  name: string
  summary: string
  description: string[]
  date: string
  tags?: string[]
  tasks?: string[]

  thumbnail_img_path: string
  img_path: string
  gif_path?: string

  link?: string
  github?: string
  itch?: string
  youtube?: string
  embedded?: string

  url: string

  type: string
  software: string
  language: string
  role: string
  returnLink: string
}

export const Zephyr: IProject = {
  "name": "Odyssey of the Zephyr",
  "summary": "an RPG in which your goal is to bring happiness to each car on a train",
  "description": [
    "<em>Odyssey of the Zephyr</em> is an RPG in which your goal is to bring happiness to each car along a train."
  ],
  "type": "Game Jam",
  "software": "Unreal Engine 4",
  "language": "Blueprints",
  "role": "Gameplay Programmer",
  "thumbnail_img_path": "icon_odyssey.png",
  "img_path": "odyssey.png",
  "date": "March 2018",
  "itch": "https://itch.io/embed/235921?bg_color=ffffff&amp;fg_color=222222&amp;border_color=bebebe",
  "tags": ["Blueprints", "Unreal Engine 4", "Train Jam"],
  "tasks": [
    "Created quest items to be completed",
    "Created custom triggers for NPC characters",
    "Implemented dynamically disappearing cut-outs of train cars"
  ],
  "url": "zephyr",
  "returnLink": "games"
}

export const BugHunters: IProject = {
  "name": "BugHunters 2",
  "summary": "a VR experience in which you pilot a spaceship",
  "description": [
    "<em>BugHunters 2</em> is the sequel to the wildly-popular (yet never-released) game <em>BugHunters</em>."
  ],
  "type": "University Project",
  "software": "Unity",
  "language": "C#",
  "role": "Gameplay Programmer, Producer",
  "thumbnail_img_path": "icon_bughunters.png",
  "img_path": "",
  "date": "February 2018",
  "github": "hekemp/BugHunters2",
  "tags": ["C#", "Unity", "VR"],
  "tasks": [
    "Implemented motion controls, movement system, and bullet pooling",
    "Worked closely with 3D assets to implement realistic physics constraints",
    "Extended several components in the SteamVR interaction system"
  ],
  "url": "bughunters2",
  "returnLink": "games"
}

export const TonyBirb: IProject = {
  "name": "Tony Birb: Pro Sk8er 2003",
  "summary": "an infinite runner in which you're a birb who's shaped like a friend",
  "description": [
    "<em>Tony Birb Pro Sk8er 2003</em> is an infinite runner in which you play as the legendary Tony Birb, sliding down twigs.",
    "Inspired by a GIF of a bird sliding down a rail, this game was created with <a href='https://hekemp.github.io/' target='_blank' rel='noopener noreferrer'>Heather Kemp</a> for the Fall EPX Jam at the University of Iowa."
  ],
  "type": "Game Jam",
  "software": "Unity",
  "language": "C#",
  "role": "Gameplay Programmer",
  "thumbnail_img_path": "icon_tonybirb.png",
  "img_path": "tonybirb.jpg",
  "gif_path": "birb.gif",
  "date": "October 2017",
  "itch": "https://itch.io/embed/325452?bg_color=ffffff&amp;fg_color=222222&amp;border_color=bebebe",
  "github": "hekemp/Tony-Birb",
  "tags": ["C#", "Unity", "EPX Jam"],
  "tasks": [
    "Created 3D model, textures, and animations",
    "Programmed particle effects to react to whether or not the player is on a twig"
  ],
  "url": "tonybirb",
  "returnLink": "games"
}

export const InternetOfFollowers: IProject = {
  "name": "Internet of Followers",
  "summary": "a VR experience in which you fly through your Twitter network",
  "description": [
    "<em>Internet of Followers</em> is an innovative VR experience which enables users to delve through the wide-reaching space of Twitter networks. Users are able to walk firsthand through their network of Twitter followers and watch clusters form from different communities of users all following each other.",
    "It was created for the <a href='https://bigdata.uiowa.edu/' target='_blank' rel='noopener noreferrer'>Midwest Big Data Hackathon</a> and took first place."
  ],
  "type": "Hackathon",
  "software": "Unity",
  "language": "C#",
  "role": "Programmer, Producer, Scrum Master",
  "thumbnail_img_path": "icon_iof.jpg",
  "img_path": "iof.jpg",
  "gif_path": "birb.gif",
  "date": "September 2017",
  "link": "https://devpost.com/software/internet-of-followers-iof",
  "github": "joshua-friede/Internet-of-Followers",
  "tags": ["C#", "Unity", "Data Visualization", "VR"],
  "tasks": [
    "Programmed 6DOF movement system",
    "Implemented spring-based 3D node placement algorithm"
  ],
  "url": "internet-of-followers",
  "returnLink": "projects"
}

export const RobotOutreach: IProject = {
  "name": "Robot Theater Stem Outreach",
  "summary": "an interdisciplinary, project-based course",
  "description": [
    "The Department of Computer Science at the University of Iowa designed a new interdisciplinary, project-based course in collaboration with the Department of Dance in which students designed and implemented a 45-minute dance recital performed by autonomous humanoid robots.",
    "I created <a href='https://www.youtube.com/watch?v=rTpt6K-Lmf4' target='_blank' rel='noopener noreferrer'>a dance routine</a> for this performance, and continued to work with the robots through the University to create several theatrical skits, as well as to do outreach to encourage children to continue STEM education."
  ],
  "type": "University Project",
  "software": "Choregraphe",
  "language": "Python",
  "role": "Instructor, Animator, Choreographer, Programmer",
  "thumbnail_img_path": "icon_robot_outreach.jpg",
  "img_path": "robots.jpg",
  "date": "December 2014",
  "link": "https://outreach.uiowa.edu/program/robot-theater-summer-program",
  "youtube": "KXH5jP2OFec",
  "tags": ["Python", "NAO Robots", "Cozmo Robots"],
  "tasks": [
    "Developed and programmed a 5-minute dance routine for 4 Nao robots",
    "Created a Python script that was used by other students to have robots sync up by sending messages over a local network",
    "Assisted in the programming of other students' dance routines"
  ],
  "url": "robot-outreach",
  "returnLink": "projects"
}

export const RobotEyebrows: IProject = {
  "name": "NAO Robot Eyebrows",
  "summary": "an interdisciplinary, project-based course",
  "description": [
    "The Department of Computer Science at the University of Iowa designed a new interdisciplinary, project-based course in collaboration with the Department of Dance in which students designed and implemented a 45-minute dance recital performed by autonomous humanoid robots.",
    "I created <a href='https://www.youtube.com/watch?v=rTpt6K-Lmf4' target='_blank' rel='noopener noreferrer'>a dance routine</a> for this performance, and continued to work with the robots through the University to create several theatrical skits, as well as to do outreach to encourage children to continue STEM education.",
    "https://medium.com/@heatherkemp_89938/a-journey-with-nao-robots-and-arduinos-towards-eyebrows-b4d5fef6549f",
    "https://medium.com/@heatherkemp_89938/interfacing-nao-robots-with-the-arduino-in-depth-tutorial-284ecba0b0aa"
  ],
  "type": "University Project",
  "software": "Choregraphe",
  "language": "Python",
  "role": "Programmer, Hardware Engineer, 3D Designer",
  "thumbnail_img_path": "icon_nao_eyebrows.png",
  "img_path": "robots.jpg",
  "date": "December 2014",
  "link": "/static/reports/NAO-Eyebrows-Report.pdf",
  "youtube": "md460xqwSKA",
  "tags": ["Python", "NAO Robots"],
  "tasks": [
    "Developed and programmed a 5-minute dance routine for 4 Nao robots",
    "Created a Python script that was used by other students to have robots sync up by sending messages over a local network",
    "Assisted in the programming of other students' dance routines"
  ],
  "url": "robot-eyebrows",
  "returnLink": "projects"
}

export const SafeSwarm: IProject = {
  "name": "SafeSwarm",
  "summary": "an interdisciplinary, project-based course",
  "description": [
    "The Department of Computer Science at the University of Iowa designed a new interdisciplinary, project-based course in collaboration with the Department of Dance in which students designed and implemented a 45-minute dance recital performed by autonomous humanoid robots.",
    "I created <a href='https://www.youtube.com/watch?v=rTpt6K-Lmf4' target='_blank' rel='noopener noreferrer'>a dance routine</a> for this performance, and continued to work with the robots through the University to create several theatrical skits, as well as to do outreach to encourage children to continue STEM education."
  ],
  "type": "University Project",
  "software": "Choregraphe",
  "language": "Python",
  "role": "Programmer, Project Manager",
  "thumbnail_img_path": "icon_safeswarm.png",
  "img_path": "robots.jpg",
  "date": "December 2014",
  "link": "/static/reports/Safe_Swarm.pdf",
  "youtube": "Pdbdpq5uljw",
  "tags": ["Python", "NAO Robots"],
  "tasks": [
    "Developed and programmed a 5-minute dance routine for 4 Nao robots",
    "Created a Python script that was used by other students to have robots sync up by sending messages over a local network",
    "Assisted in the programming of other students' dance routines"
  ],
  "url": "safeswarm",
  "returnLink": "projects"
}

export const Werewolf: IProject = {
  "name": "Werewolf",
  "summary": "an interdisciplinary, project-based course",
  "description": [
    "The Department of Computer Science at the University of Iowa designed a new interdisciplinary, project-based course in collaboration with the Department of Dance in which students designed and implemented a 45-minute dance recital performed by autonomous humanoid robots.",
    "I created <a href='https://www.youtube.com/watch?v=rTpt6K-Lmf4' target='_blank' rel='noopener noreferrer'>a dance routine</a> for this performance, and continued to work with the robots through the University to create several theatrical skits, as well as to do outreach to encourage children to continue STEM education."
  ],
  "type": "University Project",
  "software": "Choregraphe",
  "language": "Python",
  "role": "Programmer, Producer, Graphic Designer",
  "thumbnail_img_path": "icon_werewolf.png",
  "img_path": "robots.jpg",
  "date": "December 2014",
  "youtube": "v9qpx77UJTc",
  "github": "hekemp/Werewolf",
  "tags": ["Python", "NAO Robots"],
  "tasks": [
    "Developed and programmed a 5-minute dance routine for 4 Nao robots",
    "Created a Python script that was used by other students to have robots sync up by sending messages over a local network",
    "Assisted in the programming of other students' dance routines"
  ],
  "url": "werewolf",
  "returnLink": "games"
}

export const StatisticsAppSuite: IProject = {
  "name": "Statistics App Suite",
  "summary": "an interdisciplinary, project-based course",
  "description": [
    "The Department of Computer Science at the University of Iowa designed a new interdisciplinary, project-based course in collaboration with the Department of Dance in which students designed and implemented a 45-minute dance recital performed by autonomous humanoid robots.",
    "I created <a href='https://www.youtube.com/watch?v=rTpt6K-Lmf4' target='_blank' rel='noopener noreferrer'>a dance routine</a> for this performance, and continued to work with the robots through the University to create several theatrical skits, as well as to do outreach to encourage children to continue STEM education."
  ],
  "type": "University Project",
  "software": "Choregraphe",
  "language": "Python",
  "role": "Lead Programmer",
  "thumbnail_img_path": "icon_statistics_suite.png",
  "img_path": "robots.jpg",
  "date": "December 2014",
  "link": "/static/reports/Statistics-App-Suite-Report.pdf", 
  "github": "hekemp/Statistics-App-Suite",
  "tags": ["Python", "NAO Robots"],
  "tasks": [
    "Developed and programmed a 5-minute dance routine for 4 Nao robots",
    "Created a Python script that was used by other students to have robots sync up by sending messages over a local network",
    "Assisted in the programming of other students' dance routines"
  ],
  "url": "statistics-app-suite",
  "returnLink": "projects"
}


export const DataCleaner: IProject = {
  "name": "Career Center Data Cleaner",
  "summary": "an interdisciplinary, project-based course",
  "description": [
    "The Department of Computer Science at the University of Iowa designed a new interdisciplinary, project-based course in collaboration with the Department of Dance in which students designed and implemented a 45-minute dance recital performed by autonomous humanoid robots.",
    "I created <a href='https://www.youtube.com/watch?v=rTpt6K-Lmf4' target='_blank' rel='noopener noreferrer'>a dance routine</a> for this performance, and continued to work with the robots through the University to create several theatrical skits, as well as to do outreach to encourage children to continue STEM education."
  ],
  "type": "University Project",
  "software": "Choregraphe",
  "language": "Python",
  "role": "Lead Programmer, Graphic Designer",
  "thumbnail_img_path": "icon_datacleaner.png",
  "img_path": "robots.jpg",
  "date": "December 2014",
  "github": "hekemp/CareerCenterDataCleaner",
  "tags": ["Python", "NAO Robots"],
  "tasks": [
    "Developed and programmed a 5-minute dance routine for 4 Nao robots",
    "Created a Python script that was used by other students to have robots sync up by sending messages over a local network",
    "Assisted in the programming of other students' dance routines"
  ],
  "url": "data-cleaner",
  "returnLink": "projects"
}

export const SandwichDiscourse: IProject = {
  "name": "Sandwich Discourse",
  "summary": "an interdisciplinary, project-based course",
  "description": [
    "The Department of Computer Science at the University of Iowa designed a new interdisciplinary, project-based course in collaboration with the Department of Dance in which students designed and implemented a 45-minute dance recital performed by autonomous humanoid robots.",
    "I created <a href='https://www.youtube.com/watch?v=rTpt6K-Lmf4' target='_blank' rel='noopener noreferrer'>a dance routine</a> for this performance, and continued to work with the robots through the University to create several theatrical skits, as well as to do outreach to encourage children to continue STEM education."
  ],
  "type": "University Project",
  "software": "Choregraphe",
  "language": "Python",
  "role": "Lead Programmer, Graphic Designer",
  "thumbnail_img_path": "icon_sandwich.png",
  "img_path": "robots.jpg",
  "date": "December 2014",
  "itch": "https://itch.io/embed/235915?bg_color=ffffff&amp;fg_color=222222&amp;border_color=bebebe",
  "github": "hekemp/Sandwich-Discourse",
  "tags": ["Python", "NAO Robots"],
  "tasks": [
    "Developed and programmed a 5-minute dance routine for 4 Nao robots",
    "Created a Python script that was used by other students to have robots sync up by sending messages over a local network",
    "Assisted in the programming of other students' dance routines"
  ],
  "url": "sandwich-discourse",
  "returnLink": "games"
}

export const AttendEZ: IProject = {
  "name": "AttendEZ",
  "summary": "an interdisciplinary, project-based course",
  "description": [
    "The Department of Computer Science at the University of Iowa designed a new interdisciplinary, project-based course in collaboration with the Department of Dance in which students designed and implemented a 45-minute dance recital performed by autonomous humanoid robots.",
    "I created <a href='https://www.youtube.com/watch?v=rTpt6K-Lmf4' target='_blank' rel='noopener noreferrer'>a dance routine</a> for this performance, and continued to work with the robots through the University to create several theatrical skits, as well as to do outreach to encourage children to continue STEM education."
  ],
  "type": "University Project",
  "software": "Choregraphe",
  "language": "Python",
  "role": "Lead Programmer, Graphic Designer, Project Manager",
  "thumbnail_img_path": "icon_attendez.png",
  "img_path": "robots.jpg",
  "date": "December 2014",
  "github": "UIOWASELT2018/selt18project-g009",
  "tags": ["Python", "NAO Robots"],
  "tasks": [
    "Developed and programmed a 5-minute dance routine for 4 Nao robots",
    "Created a Python script that was used by other students to have robots sync up by sending messages over a local network",
    "Assisted in the programming of other students' dance routines"
  ],
  "url": "attendez",
  "returnLink": "projects"
}

export const VRShowdown: IProject = {
  "name": "Accessible VR Showdown",
  "summary": "an interdisciplinary, project-based course",
  "description": [
    "The Department of Computer Science at the University of Iowa designed a new interdisciplinary, project-based course in collaboration with the Department of Dance in which students designed and implemented a 45-minute dance recital performed by autonomous humanoid robots.",
    "I created <a href='https://www.youtube.com/watch?v=rTpt6K-Lmf4' target='_blank' rel='noopener noreferrer'>a dance routine</a> for this performance, and continued to work with the robots through the University to create several theatrical skits, as well as to do outreach to encourage children to continue STEM education."
  ],
  "type": "University Project",
  "software": "Choregraphe",
  "language": "Python",
  "role": "Lead Programmer",
  "thumbnail_img_path": "icon_vr_showdown.png",
  "img_path": "robots.jpg",
  "date": "December 2014",
  "tags": ["Python", "NAO Robots"],
  "tasks": [
    "Developed and programmed a 5-minute dance routine for 4 Nao robots",
    "Created a Python script that was used by other students to have robots sync up by sending messages over a local network",
    "Assisted in the programming of other students' dance routines"
  ],
  "url": "vr-showdown",
  "returnLink": "games"
}

export const DeathParadox: IProject = {
  "name": "Death Paradox",
  "summary": "an interdisciplinary, project-based course",
  "description": [
    "The Department of Computer Science at the University of Iowa designed a new interdisciplinary, project-based course in collaboration with the Department of Dance in which students designed and implemented a 45-minute dance recital performed by autonomous humanoid robots.",
    "I created <a href='https://www.youtube.com/watch?v=rTpt6K-Lmf4' target='_blank' rel='noopener noreferrer'>a dance routine</a> for this performance, and continued to work with the robots through the University to create several theatrical skits, as well as to do outreach to encourage children to continue STEM education."
  ],
  "type": "University Project",
  "software": "Choregraphe",
  "language": "Python",
  "role": "Programmer, Producer",
  "thumbnail_img_path": "icon_death_paradox.png",
  "img_path": "robots.jpg",
  "date": "December 2014",
  "tags": ["Python", "NAO Robots"],
  "tasks": [
    "Developed and programmed a 5-minute dance routine for 4 Nao robots",
    "Created a Python script that was used by other students to have robots sync up by sending messages over a local network",
    "Assisted in the programming of other students' dance routines"
  ],
  "url": "death-paradox",
  "returnLink": "games"
}

export const HoloScribe: IProject = {
  "name": "HoloScribe",
  "summary": "an interdisciplinary, project-based course",
  "description": [
    "The Department of Computer Science at the University of Iowa designed a new interdisciplinary, project-based course in collaboration with the Department of Dance in which students designed and implemented a 45-minute dance recital performed by autonomous humanoid robots.",
    "I created <a href='https://www.youtube.com/watch?v=rTpt6K-Lmf4' target='_blank' rel='noopener noreferrer'>a dance routine</a> for this performance, and continued to work with the robots through the University to create several theatrical skits, as well as to do outreach to encourage children to continue STEM education."
  ],
  "type": "University Project",
  "software": "Choregraphe",
  "language": "Python",
  "role": "Programmer, Producer",
  "thumbnail_img_path": "icon_holoscribe.png",
  "img_path": "robots.jpg",
  "date": "December 2014",
  "link": "https://hackuiowa.hackerearth.com/sprints/hackuiowa-1/dashboard/38fae46/submission/",
  "tags": ["Python", "NAO Robots"],
  "tasks": [
    "Developed and programmed a 5-minute dance routine for 4 Nao robots",
    "Created a Python script that was used by other students to have robots sync up by sending messages over a local network",
    "Assisted in the programming of other students' dance routines"
  ],
  "url": "holoscribe",
  "returnLink": "projects"
}

export const MettaPR: IProject = {
  "name": "Metta",
  "summary": "a crowdsourced application focused on sharing stories from different cultures",
  "description": [
    "Project Metta was created for Microsoft One Week 2018.",
    "The Department of Computer Science at the University of Iowa designed a new interdisciplinary, project-based course in collaboration with the Department of Dance in which students designed and implemented a 45-minute dance recital performed by autonomous humanoid robots.",
    "I created <a href='https://www.youtube.com/watch?v=rTpt6K-Lmf4' target='_blank' rel='noopener noreferrer'>a dance routine</a> for this performance, and continued to work with the robots through the University to create several theatrical skits, as well as to do outreach to encourage children to continue STEM education."
  ],
  "type": "University Project",
  "software": "Choregraphe",
  "language": "Python",
  "role": "Programmer, Graphic Designer",
  "thumbnail_img_path": "icon_metta.png",
  "img_path": "robots.jpg",
  "date": "December 2014",
  "youtube": "nKo9ukq-eSA",
  "tags": ["Python", "NAO Robots"],
  "tasks": [
    "Developed and programmed a 5-minute dance routine for 4 Nao robots",
    "Created a Python script that was used by other students to have robots sync up by sending messages over a local network",
    "Assisted in the programming of other students' dance routines"
  ],
  "url": "metta",
  "returnLink": "projects"
}

export const OutlookAccessibility: IProject = {
  "name": "Outlook Accessibility Checker",
  "summary": "an interdisciplinary, project-based course",
  "description": [
    "The Department of Computer Science at the University of Iowa designed a new interdisciplinary, project-based course in collaboration with the Department of Dance in which students designed and implemented a 45-minute dance recital performed by autonomous humanoid robots.",
    "I created <a href='https://www.youtube.com/watch?v=rTpt6K-Lmf4' target='_blank' rel='noopener noreferrer'>a dance routine</a> for this performance, and continued to work with the robots through the University to create several theatrical skits, as well as to do outreach to encourage children to continue STEM education."
  ],
  "type": "University Project",
  "software": "Choregraphe",
  "language": "Python",
  "role": "Graphic Designer, Project Manager",
  "thumbnail_img_path": "icon_outlook.png",
  "img_path": "robots.jpg",
  "date": "December 2014",
  "link": "https://cs.uiowa.edu/resources/ui-cs-performing-robots",
  "youtube": "n2CMJaNdBaI",
  "tags": ["Python", "NAO Robots"],
  "tasks": [
    "Developed and programmed a 5-minute dance routine for 4 Nao robots",
    "Created a Python script that was used by other students to have robots sync up by sending messages over a local network",
    "Assisted in the programming of other students' dance routines"
  ],
  "url": "outlook-accessibility",
  "returnLink": "projects"
}

export const ConferenceOrganizer: IProject = {
  "name": "Conference Organizer",
  "summary": "an interdisciplinary, project-based course",
  "description": [
    "The Department of Computer Science at the University of Iowa designed a new interdisciplinary, project-based course in collaboration with the Department of Dance in which students designed and implemented a 45-minute dance recital performed by autonomous humanoid robots.",
    "I created <a href='https://www.youtube.com/watch?v=rTpt6K-Lmf4' target='_blank' rel='noopener noreferrer'>a dance routine</a> for this performance, and continued to work with the robots through the University to create several theatrical skits, as well as to do outreach to encourage children to continue STEM education."
  ],
  "type": "University Project",
  "software": "Choregraphe",
  "language": "Python",
  "role": "Graphic Designer, Conference Organizer",
  "thumbnail_img_path": "icon_conference.png",
  "img_path": "robots.jpg",
  "date": "December 2014",
  "link": "https://cs.uiowa.edu/resources/ui-cs-performing-robots",
  "youtube": "n2CMJaNdBaI",
  "tags": ["Python", "NAO Robots"],
  "tasks": [
    "Developed and programmed a 5-minute dance routine for 4 Nao robots",
    "Created a Python script that was used by other students to have robots sync up by sending messages over a local network",
    "Assisted in the programming of other students' dance routines"
  ],
  "url": "conference-organizer",
  "returnLink": "projects"
}


export const games = [
  VRShowdown,
  BugHunters,
  DeathParadox,
  TonyBirb,
  Werewolf,
  Zephyr,
  SandwichDiscourse,
]

export const otherProjects = [
  HoloScribe,
  RobotEyebrows, 
  InternetOfFollowers,
  SafeSwarm, 
  RobotOutreach,
  StatisticsAppSuite,
  DataCleaner,
  AttendEZ,
  MettaPR,
  OutlookAccessibility,
  ConferenceOrganizer,
]
