import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { HowItWorks } from './pages/HowItWorks';
import { Contact } from './pages/Contact';
import { ListItem } from './pages/ListItem';
import { Feedback } from './pages/Feedback';
import { Browse } from './pages/Browse';

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
            <Route path="/safety" element={<div className="section-padding container-custom text-center"><h1 className="text-4xl font-bold mb-4">Safety</h1><p className="text-gray-600">Coming soon...</p></div>} />
            <Route path="/help" element={<div className="section-padding container-custom text-center"><h1 className="text-4xl font-bold mb-4">Help Center</h1><p className="text-gray-600">Coming soon...</p></div>} />
            <Route path="/login" element={<div className="section-padding container-custom text-center"><h1 className="text-4xl font-bold mb-4">Login</h1><p className="text-gray-600">Coming soon...</p></div>} />
            <Route path="/signup" element={<div className="section-padding container-custom text-center"><h1 className="text-4xl font-bold mb-4">Sign Up</h1><p className="text-gray-600">Coming soon...</p></div>} />
            <Route path="/about" element={<div className="section-padding container-custom text-center"><h1 className="text-4xl font-bold mb-4">About</h1><p className="text-gray-600">Coming soon...</p></div>} />
            <Route path="/careers" element={<div className="section-padding container-custom text-center"><h1 className="text-4xl font-bold mb-4">Careers</h1><p className="text-gray-600">Coming soon...</p></div>} />
            <Route path="/press" element={<div className="section-padding container-custom text-center"><h1 className="text-4xl font-bold mb-4">Press</h1><p className="text-gray-600">Coming soon...</p></div>} />
            <Route path="/community" element={<div className="section-padding container-custom text-center"><h1 className="text-4xl font-bold mb-4">Community</h1><p className="text-gray-600">Coming soon...</p></div>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/trust" element={<div className="section-padding container-custom text-center"><h1 className="text-4xl font-bold mb-4">Trust & Safety</h1><p className="text-gray-600">Coming soon...</p></div>} />
            <Route path="/privacy" element={<div className="section-padding container-custom text-center"><h1 className="text-4xl font-bold mb-4">Privacy Policy</h1><p className="text-gray-600">Coming soon...</p></div>} />
            <Route path="/terms" element={<div className="section-padding container-custom text-center"><h1 className="text-4xl font-bold mb-4">Terms of Service</h1><p className="text-gray-600">Coming soon...</p></div>} />
            <Route path="/cookies" element={<div className="section-padding container-custom text-center"><h1 className="text-4xl font-bold mb-4">Cookie Policy</h1><p className="text-gray-600">Coming soon...</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
