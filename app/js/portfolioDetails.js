var portfolioDetails;

portfolioDetails = function() {
  return {
    games: [
      {
        title: 'Tony Birb: Pro Sk8er 2003',
        description: '<p><em>Tony Birb: Pro Skater 2003</em> is an infinite runner in which you play as the legendary Tony Birb, sliding down twigs.</p> <p>Inspired by a GIF of a bird sliding down a rail, this game was created with <a href="http://hekemp.github.io/" target="_blank" rel="noopener noreferrer">Heather Kemp</a> for the Fall EPX Jam at the University of Iowa.</p>',
        thumbnail_img: 'icon_tonybirb.png',
        img: 'tonybirb.jpg',
        gif: 'birb.gif',
        date: 'October 2017',
        link: 'tonybirb/'
      }, {
        title: 'Internet of Followers',
        description: '<p><em>Internet of Followers</em> allows users to have an innovative VR experience which allows them to delve through the wide-reaching space of Twitter networks. Users are able to walk firsthand through their network of Twitter followers and watch clusters form from different communities of users all following each other.</p> <p>It was created for the <a href="http://bigdata.uiowa.edu/" target="_blank" rel="noopener noreferrer">Midwest Big Data Hackathon</a> and took first place.',
        thumbnail_img: 'icon_iof.jpg',
        img: 'iof.jpg',
        date: 'September 2017',
        link: 'https://devpost.com/software/internet-of-followers-iof',
        github: 'joshua-friede/Internet-of-Followers'
      }, {
        title: 'Bee Dodger',
        description: '<p><em>Bee Dodger</em> is a dodge-em-up inspired by a GIF of Oprah releasing bees onto an unsuspecting crowd. It was written entirely in JavaScript, and can be played <a href="beedodger/" target="_blank" rel="noopener noreferrer">here</a>.</p> <p>Source code is available at my <a href="https://github.com/aszecsei/game-jan17" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>',
        thumbnail_img: 'icon_beedodger.png',
        img: 'beedodger.png',
        gif: 'bees.gif',
        date: 'January 2017',
        link: 'beedodger/',
        github: 'aszecsei/game-jan17'
      }, {
        title: 'Highway To A Neon Valhalla',
        description: '<p><em>Highway To A Neon Valhalla</em> is a local multiplayer racing game in which players attempt to obtain different pick ups, which have colors assigned at random: one increases a player\'s score; one, when enough have been picked up, ends the game; the third does nothing.</p><p>This game was developed during Train Jam 2017, on the 3-day train ride from Chicago, IL to San Francisco, CA. It requires two controllers.</p>',
        thumbnail_img: 'icon_neonvalhalla.png',
        img: 'neonvalhalla.png',
        itch: 'https://itch.io/embed/122937?bg_color=ffffff&amp;fg_color=222222&amp;border_color=bebebe',
        date: 'March 2017',
        link: 'https://aszecsei.itch.io/neon-valhalla/'
      }, {
        title: 'Train Filler',
        description: '<p><em>Train Filler</em> is a local competitive multiplayer game where you spray people out of a hose to try and fill a train car more than your opponent. It also features my Unity package for <a href="https://github.com/aszecsei/2D-Volumetric-Lighting">2D volumetric lighting</a>.</p><p>This game was developed during Train Jam 2016, on the 3-day train ride from Chicago, IL to San Francisco, CA. It requires two players each using controllers.</p>',
        thumbnail_img: 'icon_trainfiller.png',
        img: 'trainfiller.png',
        itch: 'https://itch.io/embed/57569?bg_color=ffffff&amp;fg_color=222222&amp;border_color=bebebe',
        date: 'March 2016',
        link: 'https://aszecsei.itch.io/train-filler/'
      }, {
        title: 'Gravity',
        description: '<p><em>Gravity</em> is a platformer written entirely in JavaScript. It can be played <a href="sector5/" target="_blank" rel="noopener noreferrer">here</a>.</p><p>It includes a built-in level editor, which can be used to export JSON representations of levels for ease of development.</p>',
        thumbnail_img: 'icon_gravity.png',
        img: 'gravity.png',
        date: 'February 2015',
        link: 'sector5/'
      }, {
        title: 'On The Tracks',
        description: '<p><em>On The Tracks</em> is a local multiplayer game of chicken: two rectangles make their way along a set of railroad tracks, towards the center of the screen. Their only obstacle is a relentless train that arrives out of nowhere, crushing those who stand in its path. Jumping allows them to hang in the air until the train passes underneath them, but stops their motion towards the center of the screen until the train has passed and they fall back down to the tracks.</p><p>This game was developed during Train Jam 2015, on the 3-day train ride from Chicago, IL to San Francisco, CA. Some bugs have been fixed, and audio added since then. It requires the players to share a keyboard and use the left and right control keys.</p>',
        thumbnail_img: 'icon_ott.png',
        img: 'onthetracks.jpg',
        itch: 'https://itch.io/embed/20009?bg_color=ffffff&amp;fg_color=222222&amp;border_color=bebebe',
        date: 'March 2015',
        link: 'https://aszecsei.itch.io/on-the-tracks'
      }, {
        title: 'Untitled',
        description: '<p><em>Untitled</em> is a first-person game created for <a href="http://gamejolt.com/tag/clonejamnuprahtor" target="_blank" rel="noopener noreferrer">#clonejamnuprahtor</a>.</p><p>It can be downloaded <a href="http://gamejolt.com/games/untitled/62765" target="_blank" rel="noopener noreferrer">here</a>.</p>',
        thumbnail_img: 'icon_untitled.png',
        img: 'untitled.jpg',
        date: 'April 2015',
        link: 'http://gamejolt.com/games/untitled/62765/'
      }, {
        title: 'Rover',
        description: '<p><em>Rover</em> is a game where the player remotely drives around an alien landscape, trying to collect 6 resources without overturning their vehicle.</p><p>This game was developed for <a href="http://ludumdare.com/compo/2014/12/03/welcome-to-ludum-dare-31/" target="_blank" rel="noopener noreferrer">Ludum Dare 31</a>, and can be downloaded <a href="http://ludumdare.com/compo/ludum-dare-31/?action=preview&uid=15297" target="_blank" rel="noopener noreferrer">here</a>.',
        thumbnail_img: 'icon_rover.png',
        img: 'rover.jpg',
        date: 'December 2014',
        link: 'http://ludumdare.com/compo/ludum-dare-31/?action=preview&uid=15297'
      }, {
        title: 'Chess Plus',
        description: '<p><em>Chess+</em> is a roguelike chess match where you control a King and Queen who can move across a procedurally-generated dungeon board according to standard rules of chess movement. Things get somewhat trickier when capturing pieces with your King changes their allegiance.</p><p>This game was created for the <a href="http://7drl.org" target="_blank" rel="noopener noreferrer">7-Day Roguelike Challenge</a>.</p>',
        thumbnail_img: 'icon_chessplus.png',
        img: 'chessplus.png',
        itch: 'https://itch.io/embed/20499?bg_color=ffffff&amp;fg_color=222222&amp;border_color=bebebe',
        date: 'March 2015',
        link: 'https://aszecsei.itch.io/chess-plus'
      }, {
        title: 'Confetti',
        description: '<p><em>Confetti</em> is a screensaver you can run in your browser - just pop it onto fullscreen and let it run! Made for <a href="https://itch.io/jam/flying-toast-with-jam">Flying Toast With Jam</a>.</p>',
        thumbnail_img: 'icon_confetti.png',
        img: 'confetti.png',
        itch: 'https://itch.io/embed/14169?bg_color=ffffff&amp;fg_color=222222&amp;border_color=bebebe',
        date: 'November 2014',
        link: 'https://aszecsei.itch.io/confetti'
      }
    ],
    other: [
      {
        title: 'Dancing Robots',
        description: '<p>The Department of Computer Science at the University of Iowa designed a new interdisciplinary, project-based course in collaboration with the Department of Dance in which students designed and implemented a 45-minute dance recital performed by autonomous humanoid robots.</p> <p>I created <a href="https://www.youtube.com/watch?v=rTpt6K-Lmf4" target="_blank" rel="noopener noreferrer">a dance routine</a> for this performance, and continued to work with the robots through the University to create several theatrical skits, as well as to do outreach to encourage children to continue STEM education.',
        thumbnail_img: 'icon_robots.jpg',
        img: 'robots.jpg',
        date: 'December 2014',
        link: 'https://cs.uiowa.edu/resources/ui-cs-performing-robots',
        youtube: 'n2CMJaNdBaI'
      }, {
        title: 'dexterity.io',
        description: '<p><em>dexterity.io</em> is an agile management tool created in a software engineering course. It\'s designed to combine several aspects of project management, including issue tracking and scrum meeting tools.</p> <p>I worked on a team of 5 students to create this site, focusing on unit testing and front-end development.</p>',
        thumbnail_img: 'icon_dexterity.png',
        img: 'dexterity.png',
        date: 'October 2017',
        link: 'https://dexterity-io.herokuapp.com/',
        github: 'aszecsei/dexterity.io'
      }, {
        title: 'TraumaHawk',
        description: '<p><em>TraumaHawk</em> is an app developed in collaboration with the University of Iowa National Advanced Driving Simulator and the Iowa Department of Transportation to help reduce casualties from vehicular accidents.</p> <p>I developed a web service to store and display crash reports from a corresponding iOS application. Preliminary results showed that when TraumaHawk was not used to communicate, doctors had about 12 minutes of lead-time to prepare for a crash victim. But, when TraumaHawk was used, that lead time was more than doubled, providing doctors with patient details and photos an average of 26 minutes before a crash victim arrived.</p>',
        thumbnail_img: 'icon_traumahawk.jpg',
        img: 'traumahawk.jpg',
        date: 'November 2016',
        link: 'https://www.usatoday.com/story/tech/2015/02/16/app-lets-hospital-see-accident-scenes-better-prepare/23505279/',
        youtube: 'O1WCoJdTQ8I'
      }
    ]
  };
};
