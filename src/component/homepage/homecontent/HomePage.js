import React from 'react';
import Banner from '../banner/Banner';
import AboutUs from '../aboutus/AboutUs';
import Idea from '../idea/Idea';
import Why from '../why/Why';
import Ebook from '../ebook/Ebook';

// Banner Images
import BannerImage from '../../images/banner.png';
import BannerAichat from '../../images/ai-chat.svg';
import BannerRight from '../../images/rht-img.png';
// About Images
import AboutLeft from '../../images/left-section.png';
// Idea Images 
import IdeaRight from '../../images/idea-right-full.png'
// Why Images 
import WhyLeft from '../../images/why-left-imgg.png'
// Why Images 
import EbookRight from '../../images/ebook-rht-img-blk.png'

function HomePage() {
  const bannerData = {
    titleblack: "Let Gen - AI Turn Your Idea to a",
    titlecolor: "Kid’s Book!",
    subtitle: "Express your idea in a few words",
    countertitle: "Downloads",
    counternumber: "12000",
    ratingtitle: "Assessment",
    ratingpoint: "4.8",
    BannerImage: BannerImage,
    BannerAichat : BannerAichat,
    BannerRight : BannerRight,
  };

  const aboutUsData = {
    title: "The Perfect Storyteller",
    subtitle: "About Us",
    AboutLeft : AboutLeft,
    rightcontent: `
      Is A Genai Powered App That Lets You Create And Share Your Own Stories. With the Help Of Genai, the App Can Generate Stories Based On Your Prompts And Ideas. You Can Then Turn Your Stories Into Books.

      Once You've Created a Story, You Can Share It With Friends And Family Through the App's Social Media Integration.

      You Can Also Publish Your Stories Online Through the App's Publishing Platform.
    `,
  };

  const ideaData = {
    title: "All One Needs Is an Idea!",
    subtitle: "AI Personalized Stories",
    IdeaRight: IdeaRight,
    leftcontent: `
      All You Need To Do Is Start By Giving the App a Few Prompts. These Prompts Can Be Anything From a Simple Setting To a Complex Character. Once You've Given the App Some Prompts, It Will Start Generating a Story. You Can Then Follow Along As the Story Unfolds, Or You Can Even Take Control Of the Story And Make Your Own Choices.

      You Can Create Stories About Anything You Can Imagine. You Can Create Stories About Your Favorite Characters, Your Favorite Places, Or Even Your Own Life.
    `,
  };

  const whyData = {
    title: "StoryNoi",
    subContent: "Why",
    mainContent: "Create Stories About Anything You Can Imagine. Create & Share Your Stories With Friends And Family Through Social Media. Publish Your Stories Online Or Turn Your Stories Into Books. It Is the Perfect Tool For Anyone Who Loves To Create Stories. It's Easy To Use, Affordable, And Fun. So What Are You Waiting For? Start Creating Your Own Stories Today!",
    listTitle: "Here Are Some Additional Benefits Of Using Storynoi",
    WhyLeft: WhyLeft,
    benefits: [
      "It's A Great Way To Relax And Have Fun.",
      "It's A Great Way To Express Your Creativity.",
      "It's A Great Way To Learn About Different Cultures And Perspectives.",
      "It's A Great Way To Connect With Other People Who Love To Create Stories.",
      "If You're Looking For A Way To Unleash Your Creativity, Connect With Other People, Or Learn About Different Cultures, Then Storynoi Is The Perfect Tool For You.",
    ],
  };

  const ebookData = {
    title: "Go Live! Create Your Ebook or Print It!",
    subtitle: "AI Personalized Stories",
    EbookRight: EbookRight,
    bottomcontent: `
      All You Need To Do Is Start By Giving the App a Few Prompts. These Prompts Can Be Anything From a Simple Setting To a Complex Character. Once You've Given the App Some Prompts, It Will Start Generating a Story. You Can Then Follow Along As the Story Unfolds, Or You Can Even Take Control Of the Story And Make Your Own Choices.
    `,
  };

  return (
    <>
      <Banner {...bannerData} />
      <AboutUs {...aboutUsData} />
      <Idea {...ideaData} />
      <Why {...whyData} />
      <Ebook {...ebookData} />
    </>
  );
}

export default HomePage;
