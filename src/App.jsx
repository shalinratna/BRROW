import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { HowItWorks } from './pages/HowItWorks';
import { Contact } from './pages/Contact';
import { ListItem } from './pages/ListItem';
import { Feedback } from './pages/Feedback';
import { Browse } from './pages/Browse';
import { Waitlist } from './pages/Waitlist';
import { Help } from './pages/Help';
import { About } from './pages/About';
import { Collaborate } from './pages/Collaborate';
import { Press } from './pages/Press';
import { Community } from './pages/Community';
import { Safety } from './pages/Safety';
import { TrustSafety } from './pages/TrustSafety';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Cookies } from './pages/Cookies';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/list-item" element={<ListItem />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/waitlist" element={<Waitlist />} />
            <Route path="/about" element={<About />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/help" element={<Help />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/press" element={<Press />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/trust" element={<TrustSafety />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
