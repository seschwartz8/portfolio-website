import apocalypseImg from './images/apocalypse-crop.png';
import blackjackImg from './images/blackjack-crop.png';
import githubbattleImg from './images/githubbattle-crop.png';
import portfolioImg from './images/portfolio-crop.png';
import pinterestCloneImg from './images/pinterest-clone-crop.png';
import typingGameImg from './images/typing-game-crop.png';

const linkName = 'Check out the code on github...';

const projectData = [
  {
    id: '0',
    imgUrl: portfolioImg,
    title: 'My Website',
    content:
      'This is the website you are currently looking at. I built it from the ground up using React.',
    link: 'https://github.com/seschwartz8/portfolio-website',
    linkName: linkName,
  },
  {
    id: '1',
    imgUrl: pinterestCloneImg,
    title: 'Simple Pinterest Clone',
    content:
      'A simple Pinterest clone app. You can log in with google, post photos, view all photos, view specific photo details, edit/delete photos (but only if you were the one who posted them), search for photos with specific tags, and pin photos to your pin board. If you click on "Pins" you should see all the photos you have pinned, and you can remove them from your pin board as well. This app utilizes redux, Google OAuth, portals, redux forms, and react router to provide CRUD functionality.',
    link: 'https://github.com/seschwartz8/pinterest-clone-react-redux',
    linkName: linkName,
  },
  {
    id: '2',
    imgUrl: githubbattleImg,
    title: 'Github Battle',
    content:
      'This app finds popular github pages and lets you "battle" them against each other based on their stats. It was built for Tyler McGinnis\' online React course.',
    link: 'https://github.com/seschwartz8/github-battle',
    linkName: linkName,
  },
  {
    id: '3',
    imgUrl: typingGameImg,
    title: 'Typing Game',
    content:
      "This application allows you to see how fast you're typing, as well as race against your friends. You are provided with 100 words worth of dad jokes as you type. As you type, the text will shift and change color to display which letters you typed correctly and incorrectly. When you finish typing, the game will display your words per minute, characters per minute, and number of errors.",
    link: 'https://github.com/seschwartz8/typing-game',
    linkName: linkName,
  },
  {
    id: '4',
    imgUrl: apocalypseImg,
    title: 'Intermediate Python Programs',
    content:
      "Python programs and games that utilize more advanced principles of data structures, algorithms, and recursion. Created for Rice University's Fundamentals of Computing specialization on Coursera.",
    link: 'https://github.com/seschwartz8/intermediate-python-programs',
    linkName: linkName,
  },
  {
    id: '5',
    imgUrl: blackjackImg,
    title: 'Basic Python Games',
    content:
      "Basic games like pong, blackjack, and asteroids written in python for Rice University's Fundamentals of Computing specialization on Coursera.",
    link: 'https://github.com/seschwartz8/basic-python-games',
    linkName: linkName,
  },
];

export default projectData;
