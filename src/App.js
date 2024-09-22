import logo from './logo.svg';
import './App.css';
import Hero from "./components/Hero"
import Body from './components/Body';
import Features from './components/Features';
import Faq from './components/Faq';
import Blogs from './components/Blogs';
import TrialSection from './components/TrialSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Hero />
      <Body/>
      <Features/>
      <Faq/>
      <Blogs/>
      <TrialSection/>
      <Footer/>
    </div>
  );
}

export default App;
