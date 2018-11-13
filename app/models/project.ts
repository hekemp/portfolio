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

  link: string
  github?: string
  itch?: string
  youtube?: string

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
  "role": "Gameplay Programmer, Composer",
  "thumbnail_img_path": "odyssey.gif",
  "img_path": "odyssey.png",
  "date": "March 2018",
  "link": "https://joat.itch.io/odyssey-of-the-zephyr",
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
  "role": "Gameplay Programmer",
  "thumbnail_img_path": "icon_bughunters.png",
  "img_path": "",
  "date": "February 2018",
  "link": "https://github.com/hekemp/BugHunters2",
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
  "role": "Technical Artist, Character Artist",
  "thumbnail_img_path": "icon_tonybirb.png",
  "img_path": "tonybirb.jpg",
  "gif_path": "birb.gif",
  "date": "October 2017",
  "link": "tonybirb/",
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
  "role": "Gameplay Programmer",
  "thumbnail_img_path": "icon_iof.jpg",
  "img_path": "iof.jpg",
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

export const DancingRobots: IProject = {
  "name": "Dancing Robots",
  "summary": "an interdisciplinary, project-based course",
  "description": [
    "The Department of Computer Science at the University of Iowa designed a new interdisciplinary, project-based course in collaboration with the Department of Dance in which students designed and implemented a 45-minute dance recital performed by autonomous humanoid robots.",
    "I created <a href='https://www.youtube.com/watch?v=rTpt6K-Lmf4' target='_blank' rel='noopener noreferrer'>a dance routine</a> for this performance, and continued to work with the robots through the University to create several theatrical skits, as well as to do outreach to encourage children to continue STEM education."
  ],
  "type": "University Project",
  "software": "Choregraphe",
  "language": "Python",
  "role": "Animator, Choreographer, Programmer",
  "thumbnail_img_path": "icon_robots.jpg",
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
  "url": "dancing-robots",
  "returnLink": "projects"
}

export const games = [
  Zephyr,
  BugHunters,
  TonyBirb,
  InternetOfFollowers,
]

export const otherProjects = [
  DancingRobots,
]
