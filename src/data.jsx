export const navbarLinks = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "About us",
    link: "about",
  },
  {
    name: "Events",
    link: "events",
  },
  {
    name: "Contact us",
    link: "contact",
  },
];

export const description ={
  intro:"The Department of Computer Science and Design proudly presents ",
  content:"Designtrix 2026, a National Level Symposium featuring five engaging events categorized into technical and non-technical competitions. This event provides students with an excellent opportunity to showcase their skills, explore innovative ideas, and engage in healthy competition. With a perfect blend of creativity and technology, Designtrix 2026 promises an exciting and enriching experience for all participants."
};
export const aboutCollege = {
  department: "Computer Science and Design",
  description: [
    `This event is being conducted by Computer Science and Design Department of RMK Engineering College.The Department of Computer Science and Design was established in the year 2021, with Mindtree as its knowledge partner to offer an industry relevant program. professional and ethical graduates, proficient of meeting challenges in the field of Computer Science and Design through effective teaching learning process and Industry Institute interaction.`,
  ],
};

export const events = [
  {
    name: "DOM-inance Technical",
    desc: "Offline Code-from-Scratch Challenge\nTask: Recreate a provided UI screenshot with maximum precision\n🏆 Evaluation Criteria:\nVisual Accuracy: How closely the output matches the reference screenshot (Layout, Spacing, Typography)\nCode Efficiency: Use of clean, semantic HTML and optimized CSS\nResponsiveness: Proper alignment and scaling within the specified viewport.",
    bigImg: "/images/poster/coding.jpg",
    smallImg: "/images/logo/coding.jpg",
    rules: [  
      "Team Size: 1 to 2 members",

"Duration: 45 Mins",

"⚙️ Prerequisites:","Hardware: Participants must bring their own laptop (fully charged).","Software: VS Code or Notepad++ (Pre-installed).","Connectivity: No Internet access will be provided or allowed during the contest.",
],
    bgLeftGrad:
      "bg-gradient-to-r from-orange-600/60 via-rose-500/40 to-transparent",
    bgRightGrad:
      "bg-gradient-to-l from-orange-600/40 via-rose-500/20 to-transparent",
  },
  {
    name: "IdeaForge Technical",
    desc: 'Idea Presentation & Pitching\nTask: Identify a problem statement and present a feasible, tech-based solution/startup idea',
    smallImg: "/images/logo/artwar.png",
    bigImg: "/images/poster/art.jpg",
    rules: [
      "Team Size: 1 to 3 members",
      "Deliverable: A PowerPoint presentation (PPT) or a clickable prototype",
      "⚙️ Prerequisites:",
      "Hardware: Participants must bring their own laptop",
      "Preparation: Participants should come prepared with their presentation or prototype on a pen drive or local storage (ensure it works offline)",
      "🏆 Evaluation Criteria:",
      "Innovation: How unique and creative is your solution?",
      "Feasibility: Can this be realistically implemented with current technology?",
      "Impact: The potential of the idea to solve a significant problem or disrupt an industry",
      "Presentation Skills: Clarity, confidence, and how well you handle the Q&A round",
    ],
    bgLeftGrad:
      "bg-gradient-to-r from-purple-600/60 via-indigo-500/40 to-transparent",
    bgRightGrad:
      "bg-gradient-to-l from-purple-600/40 via-indigo-500/20 to-transparent",
  },
  {
    name: "Disrupt.exe Technical",
    desc: "Hands-on Prototyping Workshop & Challenge\nTask: Solve a specific user-journey problem by creating a physical, paper-based wireframe/prototype",
    smallImg: "/images/logo/paper.png",
    bigImg: "/images/poster/paper.jpg",
    rules: [
      "Team Size: 1 to 2 members",
      "Materials: Paper, markers, and basic stationary (will be provided, though you are welcome to bring your favorite sketching tools).",
      "⚙️ Prerequisites:",
      "No Laptops Required: This is a 100% offline, analog event",
      "Mindset: A strong understanding of user flow, navigation logic, and information architecture",
      "🏆 Evaluation Criteria:",
      "User Experience (UX) Logic: Is the flow intuitive and easy for a user to follow?",
      "Problem Solving: How effectively does your design address the specific constraints provided?",
      "Clarity: Is the layout clean and the functionality of each \"screen\" easy to understand?",
      "Innovation: Creative use of physical elements to simulate digital interactions (tabs, scrolls, or pop-ups)"
    ],
    bgLeftGrad:
      "bg-gradient-to-r from-[#020239] via-[#5444af] to-[#130086]",
    bgRightGrad:
      "bg-gradient-to-r from-[#020239] via-[#5444af] to-[#130086]",
    imageModify: "",
  },
  {
    name: "SquidBid Non-Technical",
    desc: `Get ready for the ultimate cricketing showdown at our IPL Auction event! Test your strategy, budget management, and cricket knowledge as you bid for top players to build your dream team. Compete against rival owners, make smart picks, and create the ultimate squad.`,
    smallImg: "/images/poster/ipl.jpg",
    bigImg: "/images/logo/ipl.jpg",
    rules: [
      "TEAM: 11 players (1 WK, 2 AR, 3 BAT, 3 BOWL).",
      "SCORING: Player points + Purse balance decide the winner.",
      "BIDDING: Direct bids allowed unsold players won’t return.",
      "DECISIONS: Auctioneer’s call is final. Disputes = Disqualification.",
      "CONDUCT: Respect all; misconduct leads to disqualification.",
      "DISQUALIFICATION: Insufficient funds or rule violations.",
    ],
    bgLeftGrad:
      "bg-gradient-to-r from-pink-600/60 via-fuchsia-500/40 to-transparent",
    bgRightGrad:
      "bg-gradient-to-l from-pink-600/40 via-fuchsia-500/20 to-transparent",
  },
  {
    name: "FlickPicks Non-Technical",
    desc: `
Players guess the movie or song based on a sequence of images revealed over time. Early images are vague, while later ones give clearer hints. Players can guess anytime—earlier correct guesses earn more points. If no one guesses correctly, the answer is revealed.`,
    smallImg: "/images/logo/connection.jpg",
    bigImg: "/images/poster/connection.jpg",
    rules: [
      "TEAM & ROUNDS: Teams consist of 1 to 4 members, competing in 3 rounds with a minimum of 5 questions each.",
      "SCORING: Each correct answer earns 5 points, while every incorrect answer deducts 2 points.",
      "ANSWER FORMATS: All final answers must be given in Tamil.",
      "ASSISTANCE: No audience support is allowed at any stage.",
      "RESULTS: The final results are determined solely by the organizers.",
    ],
    bgLeftGrad:
      "bg-gradient-to-r from-[#0e263c] via-[#a5021f] to-[#581826]",
    bgRightGrad:
      "bg-gradient-to-r from-[#0e263c] via-[#a5021f] to-[#581826]",
  },
];

export const contact = {
  email: "designtrix@rmkec.ac.in",
  number: "044 6790 6710",
  loc: "R.M.K. Engineering College",
  instaLink: "",
};
export const rules = {
  mainText: "Who doesn't like rules? Let us share ours!!",
  description: [
    `PARTICIPANTS ARE HEREBY INFORMED THAT T-SHIRTS, JEANS AND
OTHER CASUALS ARE STRICTLY PROHIBITED INSIDE OUR CAMPUS.
 GENTLEMEN ARE REQUESTED TO WEAR FORMALS AND SHOES
COMPULSORILY.`,
    `LADIES ARE REQUESTED TO WEAR ONLY SALWARS.
USE OF MOBILE PHONES INSIDE THE COLLEGE PREMISES IS STRICTLY
PROHIBITED.`,
    `ALL THE PARTICIPANTS SHOULD ADHERE TO THE RULES AND
REGULATIONS OF THE COLLEGE.`,
    `ANYONE VIOLATING THE ABOVE RULES WILL NOT BE ALLOWED TO
PARTICIPATE IN THE EVENT.`,
  ],
  link: "https://drive.google.com/file/d/1nsx3Tf0Cc_iH-ORfzyM-BshhhsL0OM1j/view",
};
export const busRoutes = {
  mainText: "We make it easy to reach us 😇",
  link: "https://drive.google.com/file/d/16CQ5cOTd6pE6aNk-YClcblwn99VyvW_g/view",
};
export const prizes = {
  mainText: "💵Exciting prizes and more fun awaits",
  description: [
    "Diverse Challenges Await! – Test your skills across multiple exciting categories and prove you're the best.",

    "Showcase Your Talent! – Compete against top contenders and gain recognition for your expertise.",

    "Unforgettable Rewards! – Win prizes, earn bragging rights, and make memories that last a lifetime.",
  ],
};

export const regLink = "https://forms.gle/jewvf6TuDNFQC1396";
export const instaLink="https://www.instagram.com/designtrix25/";