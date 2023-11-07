import './App.css';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/login/Login';
import HomePage from './component/homepage/homecontent/HomePage';
import CreateStory from './component/innerpages/createstory/CreateStory';

function App() {
  const sections = [
    { id: 'about-section', title: 'About Us' },
    { id: 'why-storynoi', title: 'Why StoryNoi' },
    { id: 'idea', title: 'Idea' },
  ];

  return (
    <BrowserRouter>
      <div>
        <Header sections={sections} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/create-story" component={CreateStory} /> */}
          <Route path="/create-story" element={<CreateStory />} />
        </Routes>
        <Footer companyName="Storynoi" currentYear={new Date().getFullYear()} rightsText="All Rights Reserved" />
      </div>
    </BrowserRouter>
  );
}

export default App;
