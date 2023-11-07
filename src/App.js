import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/login/Login';
import HomePage from './component/homepage/homecontent/HomePage';
import CreateStory from './component/innerpages/createstory/CreateStory';
import HeaderLogo from './component/header/HeaderLogo';
import Footer from './component/footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <div>
        <HeaderLogo></HeaderLogo>
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
