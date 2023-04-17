import img1 from "./assets/Auth.jpeg";
import img2 from "./assets/crypto.jpeg";
import img3 from "./assets/Todo.jpeg";
import img4 from "./assets/YouTubeClone.jpeg";
import { FaReact } from "react-icons/fa";

import { SiRedux, SiNetlify, SiPostman, SiFirebase } from "react-icons/si";

export const myPorjects = [
  {
    id: "639X8AQ",
    name: "Crypto news ",
    img: img2,
    demo: "https://crypto-part1.web.app/",
    github: "https://github.com/TamerJr/CryptoWithRedux",
    description:
      "SPA ,I did this project to try to fetch data throught to deffirent api , it afford user to get new article about every Currency through Crypto-Currencies news API , and another api to get Crypto currencies list ,and some informtion about it like market cap price and another",
    details: <>
    <h4>SPA</h4>
    <ul>
      <li>
      Home Page
        <dt>
          <dd>Contain 3 sections for sample of crypto coins, sample of news ,and trending coins</dd>
        </dt>
      </li>
      <li>
      news Page
        <dt>
        
          <dd>provide more news article about the crypto </dd>
        </dt>
      </li>  
       <li>
      Crypto currencies Page
        <dt>
          <dd> Provide list of Crypto currencies </dd>
        </dt>
        </li>
        <li>
        Crypto details Page
          <dt>
            <dd> Provide inforamtion about the currencies like market cap  </dd>
          </dt>
      </li>
      
    </ul>
    </>,
    technologies: [
      <FaReact size={35} />,
      <SiRedux size={35} />,
      <SiPostman size={35} />,
      <SiNetlify size={35} />,
    ],
  },
  {
    id: "63Q82Mq",
    name: "Courses company",
    img: img1,
    demo: "https://stellar-cat-d4df5f.netlify.app/",
    github: "https://github.com/TamerJr/AuthenticCompany",
    description:
      "this project depending on firebase as backend to try the authentication , and doing protect routes to protect account route or redirecting the using to log in page  ",
    details: <>
    <h4>SPA</h4>
    <ul>
      <li>
      Home page
        <dt>
          <dd>The landing page , It contains several section one of to to show sample of the project , counter to provid the numbers of the clients , and about us section it contains a CTA  </dd>
        </dt>
      </li>
      <li>
      Products Page
        <dt>
        
          <dd>it contain whole course but showing 6 per page and 2 buttons to do pagination between every project  </dd>
        </dt>
      </li>  
       <li>
      Terms Page
        <dt>
          <dd> some text about website terms and every part of terms in a collapsed menu </dd>
        </dt>
      </li>
      <li>
      Log In Page
        <dt>
          <dd> Contain form with 2 input fields , button to submit and Link to sign up page if the user did not have an account .. ,the two inputs one for email, and one for passowrd tracked by state to get what user write in throught onChange event , the submit button send the input field data to method created by Context Api to send it to firebase </dd>
        </dt>
      </li>      
       <li>
      Sign Up Page
        <dt>
        <dd> Contain form with 2 input fields , button to submit and Link to sign in page if the user did  have an account .. ,the two inputs one for email, and one for passowrd tracked by state to get what user write in throught onChange event , the submit button send the input field data to method created by Context Api to send it to firebase </dd>
        </dt>
      </li>      
       <li>
      Product Details Page
        <dt>
          <dd>this page is a protect route to enter it , the user have to log in first </dd>
        </dt>
      </li>
      <li>
      Account Page
        <dt>
          <dd> Protect route page the user have to log in first to be seen on the navbar ,it conatin the user list of the courser he on or the list of the following list which the not availbe for now </dd>
        </dt>
      </li>
    </ul> </>,
    technologies: [
      <FaReact size={35} />,
      <SiFirebase size={35} />,
      <SiNetlify size={35} />,
    ],
  },
  {
    id: "72dm8j2",
    name: "Todo",
    img: img3,
    demo: "https://heroic-cat-415534.netlify.app/",
    github: "https://github.com/TamerJr/TODO",
    details:
      "this Project save the todo list which the user enter and save it in localStorage , each element this array shown in row with two button one for deletign and one for updating ",
    description:
      "The main perpose of this project is taking data from user through input field then send use this data to update the data list Local storage , i used  local storage to save user data to find it every time the user open the website",
    technologies: [<FaReact size={35} />, <SiNetlify size={35} />],
  },
  {
    id: "83KmL18",
    name: "Youtube Clone",
    img: img4,
    github: "https://github.com/TamerJr/youtubeClone/tree/main",
    demo: "https://velvety-biscuit-0ade42.netlify.app/",
    details: <>
    <h4>SPA</h4>
    <ul>
      <li>
      Home
        <dt>
          <dd>Conatin navbar with logo and search input feild , side bar which contain several searchterms </dd>
        </dt>
      </li>
      <li>
      Vedio Page
        <dt>
        
          <dd>open the video page which provide a box for vedio and sidebase for suggestion list </dd>
        </dt>
      </li>  
       <li>
      ChannelPage
        <dt>
          <dd> it conatin the vedios List of the channel </dd>
        </dt>
      </li>
      
    </ul></>,
    description:
      "SPA,I did this project to as second try of using state to search about what user need in API and , which mean take a search term from user through input field using onChange action which change the value of the state the send this value to Api end-point and fetch this desired data ",
    technologies: [
      <FaReact size={35} />,
      <SiRedux size={35} />,
      <SiPostman size={35} />,
      <SiNetlify size={35} />,
    ],
  },
];
