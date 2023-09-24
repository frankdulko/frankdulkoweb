export const projects = [
  {
    id: 0,
    title: "Audacy.com",
    path: "audacy",
    description:
      "In the summer of 2022, I interned at Work & Co as a web developer implmenting the redesign of Audacy.com",
    about:
      "While interning at Work & Co in the Summer of 2022, I had the opportunity to be a part of the team responsible for Audacy’s major redesign. I was able to work with a team of fantastic developers and designers, implementing design bug fixes as well as several key features, including the liking of content and including an episodes tab and episode results in search. I had the privilege to present some of these features to the wider Audacy team, and was able to witness the launch of the redesign and Work & Co’s completion of the project in August 2022.",
    images: ["/images/audacy.png"],
    url: "https://audacy.com",
    cta: "Audacy.com",
    tags: ["React", "Typescript", "Web", "GitLab", "Git"],
  },
  {
    id: 1,
    title: "Does This Person Exist?",
    path: "does-this-person-exist",
    description:
      'Easily swipe "yes" or "no" on the face presented to guess if the image is AI generated or not.',
    about:
      "Using ThisPersonDoesNotExist.com and ThisPersonDoesExist.com, I created a cross platform application to randomly present either a real person or an AI generated one. Using a “Tinder-like” swipe action (in addition to buttons for accessibility), the user can try their best to guess if the person does exist, and will be notified if they were correct or not.",
    images: ["/images/doesThisPersonExist.jpg"],
    url: "https://testflight.apple.com/join/Y1JYurtU",
    cta: "Try Yourself!",
    tags: [
      "React Native",
      "Design",
      "Google AdMob",
      "AI",
      "UX",
      "Redux",
      "API",
      "Mobile App Development",
    ],
  },
  {
    id: 2,
    title: "Who Are My Representatives?",
    path: "who-are-my-representatives",
    description:
      "A website to view all the government representatives for a given address in the United States.",
    about:
      "Using Google’s Civic Information API, I designed and developed a dynamic and responsive webpage to display the federal, state, and local representatives for any given address in the United States of America. To accomplish this, I used Bootstrap, Javascript, and Node. The result can be viewed and interacted by clicking the button below. I believe it is important for everyone to know their government representatives, and I wanted to create an easy and clear way to view these individuals.",
    images: ["/images/representatives.jpg"],
    url: "https://www.frankdulko.com/representatives",
    cta: "Try Yourself!",
    tags: [
      "Web",
      "Design",
      "Responsive",
      "Dynamic",
      "Bootsrap",
      "Javascript",
      "Node",
    ],
  },
  {
    id: 5,
    title: "360º Color and Depth Map Panorama",
    path: "kinect",
    description:
      "Used a Microsoft Kinect 2.0 to capture images of an indoor room and stitch them together to form a 360º panoramic image",
    about:
      "In my senior thesis project at Stony Brook University, I composited color and depth images into a 360º panorama using data collected from a Microsoft Kinect 2.0. With the Kinect at the center of rotation, approximately the center of the room, sixteen images (eight color and eight depth) were captured, two at each 45º interval of rotation. Using MATLAB, the depth images were normalized and aligned to the coordinate system of the color camera. Then, features were detected, exctracted, and matched between adjacent color images. Using the data of the matched characteristics, the redundant part of the image was removed, seamlessly stitching together the adjacent photos. This information was then used to stitch the respective depth images in the same way. After applying this computation at each view collected, the result is a 360º Color and Depth panorama of an indoor room.\n\nMy respective paper documenting this project was published by the Long Island Systems, Applications and Technology Conference (LISAT) in IEEE Xplore, recieving the Best Student Paper award in 2018.",
    url: "https://ieeexplore.ieee.org/document/8378016",
    cta: "Read The Paper",
    images: ["/images/color-depth-map.jpg", ""],
    tags: ["Kinect", "MATLAB", "Computer Vision"],
    award: "Best Student Paper",
  },
  {
    id: 3,
    title: "Walk The Line",
    path: "walk-the-line",
    description:
      "A modern arcade game created in the vain of traditional arcade games and cabinets.",
    about:
      "Under the guidance of Mark Kleeb (http://www.kleebtronics.com) and with a team of two other individuals, we developed and created an arcade game and traditional tabletop arcade cabinet. Upon completion, we had the opportunity to display our cabinet at the barcade Wonderville (https://www.wonderville.nyc).\n\nThe game is a versus game, having the two players face off by tracing a randomly generated line. The winner is whoever followed the line more closely. The inspiration behind this game came from the simplicity yet enjoyable nature of Mario Party mini games, specifically one of my personal favorites, “Trace Race” from Mario Party 4. While tracing the line, the players will have to avoid certain obstacles, such as reckless drivers and rabid raccoons!\n\nThe main difficulties behind the development of this game came from the controls and algorithm used to determine the accuracy of the line tracing.\n\nIn terms of controls, the team wanted somewhat “difficult” or unexpected controls that almost made it less user friendly to control the characters. We were determined to use a trackball controller to add to the difficulty; however, a USB compatible trackball is recognized as a mouse by a computer, and from Unity’s point of view, the computer can only recognize one mouse. Eventually, after much research, we were able to parse the values from the different trackballs by running a C script and then sending these values to the Unity game via OSC.\n\nThe algorithm used to determine the accuracy of the line tracing went through several iterations, and faced a couple of bugs. Eventually, the game treated the plane as an xy grid, calculating the percent error between the player’s y and the line’s y every frame and then averaging these values at the end. Difficulty came from since there were two players, the two planes had to be aligned so that say the top player didn’t experience a higher percent error than the player on the bottom. We ended up with an algorithm that seemed to work perfectly in the end, and were very happy with the results.",
    images: ["/images/walk-the-line-1.jpg"],
    tags: [
      "Unity",
      "C#",
      "Fabrication",
      "Laser Cutter",
      "CNC",
      "Woodworking",
      "C",
      "Game Development",
      "OSC",
    ],
  },
  {
    id: 4,
    title: "Who's That Dollar?",
    path: "whos-that-dollar",
    description:
      "A Snapchat AR filter that when pointed at a U.S. $1 bill replaces Geroge Washignton with another important individual from American History",
    about:
      "Who’s That Dollar? is a snapchat filter in development that replaces George Washington’s face with another individual from an underrepresented group important to American history. The filter is being developed with Lens Studio, and uses image tracking to recognize a U.S. dollar bill and initiate the replace. The idea stems from recent discussion about replacing the reprasentatives of certain U.S. bills with another individual. This seemed like a good application of AR in order to achieve the same idea without much disruption.",
    images: ["/images/dollar.jpg"],
    tags: ["AR", "Snapchat", "Lens Studio", "Photoshop"],
  },
];
