import './App.css';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/login/Login';
import HomePage from './component/homepage/homecontent/HomePage';

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
        </Routes>
        <Footer companyName="Your Company Name" currentYear={new Date().getFullYear()} rightsText="All Rights Reserved" />
      </div>
    </BrowserRouter>
  );
}

export default App;
