export const projects = [
  {
    id: '6c4b1231f00c4d91add7d4a7e41b2048',
    title: 'NYC Department of Sanitation',
    path: 'dsny',
    description: 'In the summer of 2023, I worked as a web application developer at the DSNY.',
    about:
      "During my internship with the NYC Department of Sanitation's Information Technology bureau, I served as a web application developer specializing in React and Typescript. My primary responsibility involved leading the migration of the DSNY website to Typescript, which included redesigning and optimizing various contact pages. In this capacity, I utilized React Hook Form for form management and validation, alongside developing modular input components and a form generator capable of decoding JSON objects for each form. Additionally, I contributed to resolving bugs, implementing new features, and integrating backend services through platforms such as Wordpress and TeamSite.",
    tags: [
      'React',
      'Typescript',
      'Web',
      'Bitbucket',
      'Git',
      'Internship',
      'React Hook Form',
      'Redux'
    ]
  },
  {
    id: 0,
    title: 'Audacy.com',
    path: 'audacy',
    description:
      'In the summer of 2022, I interned at Work & Co as a web developer implmenting the redesign of Audacy.com',
    about:
      'While interning at Work & Co in the Summer of 2022, I had the opportunity to be a part of the team responsible for Audacy’s major redesign. I was able to work with a team of fantastic developers and designers, implementing design bug fixes as well as several key features, including the liking of content and including an episodes tab and episode results in search. I had the privilege to present some of these features to the wider Audacy team, and was able to witness the launch of the redesign and Work & Co’s completion of the project in August 2022.',
    images: ['/images/audacy.png'],
    url: 'https://audacy.com',
    cta: 'Audacy.com',
    tags: ['React', 'Typescript', 'Web', 'GitLab', 'Git', 'Internship']
  },
  {
    id: '7b4075fdefea4cdb848a11311a26443f',
    title: 'Bus Monitor',
    path: 'bus-monitor',
    description: 'Fabricated and developed a bus monitor for my local stop using the MTA API',
    about:
      "I developed a bus monitoring system for my local stop by harnessing the MTA's public API. Leveraging Node.js, I established a server hosted on Glitch to efficiently retrieve and parse real-time bus arrival information specific to my stop. Subsequently, I employed Arduino to connect to the network, make API calls to the server, and illuminate an LED based on the proximity of incoming buses to my stop. This project not only showcased my proficiency in integrating disparate technologies but also demonstrated my ability to create practical solutions that enhance everyday experiences.",
    images: ['/images/bus.jpg'],
    tags: ['Arduino', 'LEDs', 'Node', 'Javascript', 'API', 'Prototyping']
  },
  {
    id: 1,
    title: 'Does This Person Exist?',
    path: 'does-this-person-exist',
    description:
      'Easily swipe "yes" or "no" on the face presented to guess if the image is AI generated or not.',
    about:
      'Using ThisPersonDoesNotExist.com and ThisPersonDoesExist.com, I created a cross platform application to randomly present either a real person or an AI generated one. Using a “Tinder-like” swipe action (in addition to buttons for accessibility), the user can try their best to guess if the person does exist, and will be notified if they were correct or not.',
    images: ['/images/doesThisPersonExist.jpg'],
    url: 'https://apps.apple.com/us/app/does-this-person-exist/id6450964505',
    cta: 'Try Yourself!',
    tags: [
      'React Native',
      'Design',
      'Google AdMob',
      'AI',
      'UX',
      'Redux',
      'API',
      'Mobile App Development'
    ]
  },
  {
    id: 2,
    title: 'Who Are My Representatives?',
    path: 'who-are-my-representatives',
    description:
      'A website to view all the government representatives for a given address in the United States.',
    about:
      'Using Google’s Civic Information API, I designed and developed a dynamic and responsive webpage to display the federal, state, and local representatives for any given address in the United States of America. To accomplish this, I used Bootstrap, Javascript, and Node. The result can be viewed and interacted by clicking the button below. I believe it is important for everyone to know their government representatives, and I wanted to create an easy and clear way to view these individuals.',
    images: ['/images/representatives.jpg'],
    url: 'https://www.frankdulko.com/representatives',
    cta: 'Try Yourself!',
    tags: ['Web', 'Design', 'Responsive', 'Dynamic', 'Bootsrap', 'Javascript', 'Node']
  },
  {
    id: 5,
    title: '360º Color and Depth Map Panorama',
    path: 'kinect',
    description:
      'Used a Microsoft Kinect 2.0 to capture images of an indoor room and stitch them together to form a 360º panoramic image',
    about:
      'In my senior thesis project at Stony Brook University, I composited color and depth images into a 360º panorama using data collected from a Microsoft Kinect 2.0. With the Kinect at the center of rotation, approximately the center of the room, sixteen images (eight color and eight depth) were captured, two at each 45º interval of rotation. Using MATLAB, the depth images were normalized and aligned to the coordinate system of the color camera. Then, features were detected, exctracted, and matched between adjacent color images. Using the data of the matched characteristics, the redundant part of the image was removed, seamlessly stitching together the adjacent photos. This information was then used to stitch the respective depth images in the same way. After applying this computation at each view collected, the result is a 360º Color and Depth panorama of an indoor room.\n\nMy respective paper documenting this project was published by the Long Island Systems, Applications and Technology Conference (LISAT) in IEEE Xplore, recieving the Best Student Paper award in 2018.',
    url: 'https://ieeexplore.ieee.org/document/8378016',
    cta: 'Read The Paper',
    images: ['/images/color-depth-map.jpg', ''],
    tags: ['Kinect', 'MATLAB', 'Computer Vision'],
    award: 'Best Student Paper'
  },
  {
    id: 3,
    title: 'Walk The Line',
    path: 'walk-the-line',
    description:
      'A modern arcade game created in the vain of traditional arcade games and cabinets.',
    about:
      'Under the guidance of Mark Kleeb (http://www.kleebtronics.com) and with a team of two other individuals, we developed and created an arcade game and traditional tabletop arcade cabinet. Upon completion, we had the opportunity to display our cabinet at the barcade Wonderville (https://www.wonderville.nyc).\n\nThe game is a versus game, having the two players face off by tracing a randomly generated line. The winner is whoever followed the line more closely. The inspiration behind this game came from the simplicity yet enjoyable nature of Mario Party mini games, specifically one of my personal favorites, “Trace Race” from Mario Party 4. While tracing the line, the players will have to avoid certain obstacles, such as reckless drivers and rabid raccoons!\n\nThe main difficulties behind the development of this game came from the controls and algorithm used to determine the accuracy of the line tracing.\n\nIn terms of controls, the team wanted somewhat “difficult” or unexpected controls that almost made it less user friendly to control the characters. We were determined to use a trackball controller to add to the difficulty; however, a USB compatible trackball is recognized as a mouse by a computer, and from Unity’s point of view, the computer can only recognize one mouse. Eventually, after much research, we were able to parse the values from the different trackballs by running a C script and then sending these values to the Unity game via OSC.\n\nThe algorithm used to determine the accuracy of the line tracing went through several iterations, and faced a couple of bugs. Eventually, the game treated the plane as an xy grid, calculating the percent error between the player’s y and the line’s y every frame and then averaging these values at the end. Difficulty came from since there were two players, the two planes had to be aligned so that say the top player didn’t experience a higher percent error than the player on the bottom. We ended up with an algorithm that seemed to work perfectly in the end, and were very happy with the results.',
    images: ['/images/walk-the-line-1.jpg'],
    tags: [
      'Unity',
      'C#',
      'Fabrication',
      'Laser Cutter',
      'CNC',
      'Woodworking',
      'C',
      'Game Development',
      'OSC'
    ]
  },
  {
    id: 4,
    title: "Who's That Dollar?",
    path: 'whos-that-dollar',
    description:
      'A Snapchat AR filter that when pointed at a U.S. $1 bill replaces Geroge Washignton with another important individual from American History',
    about:
      'Who’s That Dollar? is a snapchat filter in development that replaces George Washington’s face with another individual from an underrepresented group important to American history. The filter is being developed with Lens Studio, and uses image tracking to recognize a U.S. dollar bill and initiate the replace. The idea stems from recent discussion about replacing the reprasentatives of certain U.S. bills with another individual. This seemed like a good application of AR in order to achieve the same idea without much disruption.',
    images: ['/images/dollar.jpg'],
    tags: ['AR', 'Snapchat', 'Lens Studio', 'Photoshop']
  },
  {
    id: 'c765ffeea2c24a46a8ce22d010c25383',
    title: "SSRI's (Art Toy)",
    path: 'art-toy',
    description: 'Concepted and produced an art toy shedding light on mental illness.',
    about:
      "I embarked on an extensive exploration of art toys and toy development, delving into their creative realm to devise a unique concept. Drawing inspiration from the iconic M&M's character designs, I envisioned a novel application by incorporating these designs into representations of antidepressants. This innovative concept aimed to shed light on mental illness and its prevalence in contemporary society. Utilizing various prototyping techniques, including clay modeling, I refined my initial concept into two distinct characters. Transitioning to 3D printing as my primary medium, I navigated the intricacies of Blender to bring my characters to life digitally. After rigorous testing and refinement, I entrusted a professional facility with the production of my multicolored models, culminating in the realization of my vision through expertly crafted 3D prints.",
    images: ['images/art-toy.jpg'],
    tags: ['Blender', '3D Modeling', '3D Printing', 'Prototyping']
  },
  {
    id: 'aed72fe0616f49a291d5824671fd65da',
    title: 'World Building in Unity',
    path: 'world-building',
    description: 'Created a 3D platforming environment using Unity',
    about:
      'In a "World Building in Unity" course, I crafted a 3D platforming environment to explore and master various aspects of game development. This immersive project enabled me to delve into working with 3D models, implementing animation triggers, managing object collisions, and exploring a myriad of other functionalities essential to game development. Excited by this experience, I am eager to apply these newfound skills to craft even more captivating experiences, all while actively seeking opportunities to further expand my expertise in this dynamic field.',
    images: ['/images/world-building.png'],
    tags: ['Unity', 'C#', 'Mixamo']
  }
];
