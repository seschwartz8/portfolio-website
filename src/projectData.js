import apocalypseImg from './images/apocalypse-crop.png';
import blackjackImg from './images/blackjack-crop.png';
import githubbattleImg from './images/githubbattle-crop.png';
import portfolioImg from './images/portfolio-crop.png';
import pinterestCloneImg from './images/pinterest-clone-crop.png';
import typingGameImg from './images/typing-game-crop.png';

const projectData = [
  {
    id: '0',
    imgUrl: portfolioImg,
    title: 'My Website',
    content:
      'This is the website you are currently looking at. I built it from the ground up using React. My website is being continuously updated as I learn and grow as a developer.',
    link: 'https://github.com/seschwartz8/portfolio-website',
  },
  {
    id: '1',
    imgUrl: pinterestCloneImg,
    title: 'Simple Pinterest Clone',
    content:
      'Log in, post photos, view photo details, edit/delete photos, search for photos with specific tags, and pin photos to your pin board. This app utilizes redux, Google OAuth, portals, redux forms, and react router to provide CRUD functionality.',
    link: 'https://github.com/seschwartz8/pinterest-clone-react-redux',
  },
  {
    id: '2',
    imgUrl: githubbattleImg,
    title: 'Github Battle',
    content:
      'Find popular github pages and "battle" them against each other based on their stats. This app was built for Tyler McGinnis\' online React course.',
    link: 'https://github.com/seschwartz8/github-battle',
  },
  {
    id: '3',
    imgUrl: typingGameImg,
    title: 'Typing Game',
    content:
      'See how fast you type and race your friends. As you type, the text shifts and changes color to display which letters you typed correctly and incorrectly. The game will display your words per minute, characters per minute, and number of errors.',
    link: 'https://github.com/seschwartz8/typing-game',
  },
  {
    id: '4',
    imgUrl: apocalypseImg,
    title: 'Intermediate Python Programs',
    content:
      "Python programs and games that utilize more advanced principles of data structures, algorithms, and recursion. Created for Rice University's Fundamentals of Computing specialization on Coursera.",
    link: 'https://github.com/seschwartz8/intermediate-python-programs',
  },
  {
    id: '5',
    imgUrl: blackjackImg,
    title: 'Basic Python Games',
    content:
      "Basic games like pong, blackjack, and asteroids written in python for Rice University's Fundamentals of Computing specialization on Coursera.",
    link: 'https://github.com/seschwartz8/basic-python-games',
  },
];

export default projectData;
