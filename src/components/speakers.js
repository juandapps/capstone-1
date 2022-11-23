const speakersData = [
  {
    name: 'Alberto Viera',
    title: 'Developer Relations Manager',
    description:
      'In my 4+ years dedicated to research, I\'ve learned to embrace knowledge and challenges. Recently I decided to change my career path, landing in the world of blockchain technologies. The reason is simple, I wanted to be part of something I believe is the future, and as Harvey Mackay popularized: "Find a job you enjoy doing, and you will never have to work a day in your life".',
    pfp: 'img/speakers/Alberto_Viera_81b770a4bf.jpeg',
  },
  {
    name: 'Anett Rolikova',
    title: 'Ethereum Events Organiser',
    description:
      'Anett is leading NFT Standards Working Group, focusing on research and development in the NFT ERC Ecosystem. She published many articles tackling protocol and application layer obstacles around ERC-721 and similar standards in the NFT ecosystem. She is also coordinating Ethereum Magicians community and facilitating discussions around Ethereum Core Protocol and Governance. Anett has been contributing to evolution of Ethereum Core Protocol and Governance while contributing to various DAOs and projects. Helping with documentation, specs.',
    pfp: 'img/speakers/Anett_Rolikova_b9c37e6c44.jpeg',
  },
  {
    name: 'Kevin Owocki',
    title: 'Founder at supermodular.xyz',
    description:
      'Kevin Owocki is a blockchain expert, computer scientist, co-founder of Gitcoin and CEO/founder of SuperModular, a venture studio that builds regen web3 projects. After completing his BS in Computer Science, Kevin spent 15 years in the world of web2, working in engineering leadership serving as a CTO and founder for open source software and web startups.',
    pfp: 'img/speakers/Kevin_Owocki_1368c781a1.jpeg',
  },
  {
    name: 'Justyna Broniszewska',
    title: 'Lead Blockchain Engineer',
    description: 'ETHWarsaw co-founder & team lead at TrueFi',
    pfp: 'img/speakers/Justyna_Broniszewska_084ae5c04e.jpeg',
  },
  {
    name: 'Mudit Gupta',
    title: 'CISO at Polygon and Technical Partner at Delta Blockchain Fund',
    description:
      "Mudit is passionate about security, coding, blockchains and gaming. Mudit loves solving logical problems, researching new technologies, developing secure software, and breaking insecure software. Mudit's expertise lies in smart contract development using Solidity and core blockchain development using Rust.",
    pfp: 'img/speakers/Mudit_Gupta_24466b2021.png',
  },
  {
    name: 'Pablo Sabbatella',
    title:
      'Defy Education director. Blockchain, Ethereum & DeFi researcher and investor.',
    description:
      'I studied Economics at Universidad de Buenos Aires. I love Technology, Business, Economy & Innovation. Crypto Enthusiast.',
    pfp: 'img/speakers/Pablo_Sabbatella_a92506b767.png',
  },
];

const root = document.querySelector('#speakers');
const container = document.createElement('div');
container.classList.add('speakers-container');
const h2 = document.createElement('h2');
const hr = document.createElement('hr');
const cardContainer = document.createElement('div');
container.appendChild(h2);
container.appendChild(hr);
cardContainer.classList.add('speakers-card-container');

function speakers(nameData, titleData, descriptionData, pfpData) {
  const speaker = document.createElement('div');
  const speakerImg = document.createElement('div');
  const img = document.createElement('img');
  const profile = document.createElement('div');
  const h3 = document.createElement('h3');
  const title = document.createElement('p');
  const description = document.createElement('div');
  const span = document.createElement('span');

  speaker.classList.add('speaker');
  speakerImg.classList.add('speaker-image');
  profile.classList.add('speaker-profile');

  img.setAttribute('src', pfpData);
  img.width = '126';
  img.height = '126';

  h2.innerHTML = 'Featured Speakers';
  h3.innerHTML = nameData;
  title.innerHTML = titleData;
  description.innerHTML = descriptionData;

  root.appendChild(container);
  container.appendChild(cardContainer);
  cardContainer.appendChild(speaker);
  speaker.appendChild(speakerImg);
  speakerImg.appendChild(img);
  speaker.appendChild(profile);
  profile.appendChild(h3);
  profile.appendChild(title);
  profile.appendChild(span);
  profile.appendChild(description);
}

export { speakers, speakersData }; //eslint-disable-line
