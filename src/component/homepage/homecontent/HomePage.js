
import Banner from '../banner/Banner';
import AboutUs from '../aboutus/AboutUs';
import Idea from '../idea/Idea';
import Why from '../why/Why';
import Ebook from '../ebook/Ebook';


function HomePage() {
  const sections = [
    { id: 'about-section', title: 'About Us' },
    { id: 'why-storynoi', title: 'Why StoryNoi' },
    { id: 'idea', title: 'Idea' },
  ];
  return (
    <>
        <Banner
        titleblack="Let Gen - AI Turn Your Idea to a"
        titlecolor="Kid’s Book!"
        subtitle="Express your idea in a few words!"
        countertitle="Downloads"
        counternumber="12000"
        ratingtitle="Assessment"
        ratingpoint="4.8"
      />
      <AboutUs
        title="The Perfect Storyteller"
        subtitle="About Us"
        rightcontent={`
          Is A Genai Powered App That Lets You Create And Share Your Own Stories. With The Help Of Genai, The App Can Generate Stories Based On Your Prompts And Ideas. You Can Then Turn Your Stories Into Books.

          Once You've Created A Story, You Can Share It With Friends And Family Through The App's Social Media Integration.

          You Can Also Publish Your Stories Online Through The App's Publishing Platform.
        `}
      />
      <Idea
        title="All One Needs Is An Idea!"
        subtitle="AI Personalized Stories"
        leftcontent={`
        All You Need To Do Is Start By Giving The App A Few Prompts. These Prompts Can Be Anything From A Simple Setting To A Complex Character. Once You've Given The App Some Prompts, It Will Start Generating A Story. You Can Then Follow Along As The Story Unfolds, Or You Can Even Take Control Of The Story And Make Your Own Choices.

        You Can Create Stories About Anything You Can Imagine. You Can Create Stories About Your Favorite Characters, Your Favorite Places, Or Even Your Own Lif.
        `}
      />

      <Why
        title="StoryNoi"
        subContent="Why"
        mainContent="Create Stories About Anything You Can Imagine. Create & Share Your Stories With Friends And Family Through Social Media. Publish Your Stories Online Or Turn Your Stories Into Books. It Is The Perfect Tool For Anyone Who Loves To Create Stories. It's Easy To Use, Affordable, And Fun. So What Are You Waiting For? Start Creating Your Own Stories Today!"
        listTitle="Here Are Some Additional Benefits Of Using Storynoi:"
        benefits={[
          "It's A Great Way To Relax And Have Fun.",
          "It's A Great Way To Express Your Creativity.",
          "It's A Great Way To Learn About Different Cultures And Perspectives.",
          "It's A Great Way To Connect With Other People Who Love To Create Stories.",
          "If You're Looking For A Way To Unleash Your Creativity, Connect With Other People, Or Learn About Different Cultures, Then Storynoi Is The Perfect Tool For You."
        ]}
      />
        <Ebook
        title="Go Live! Create Your Ebook or Print It!"
        subtitle="AI Personalized Stories"
        bottomcontent={`
        All You Need To Do Is Start By Giving The App A Few Prompts. These Prompts Can Be Anything From A Simple Setting To A Complex Character. Once You've Given The App Some Prompts, It Will Start Generating A Story. You Can Then Follow Along As The Story Unfolds, Or You Can Even Take Control Of The Story And Make Your Own Choices.
        `}
      />
    </>
  );
}

export default HomePage;
