import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import GetInvolved from './pages/GetInvolved';
import Donate from './pages/Donate';
import PrivacyPolicy from './pages/Privacy';
import RefundPolicy from './pages/RefundPolicy';
import TermsConditions from './pages/TermCondition';
import Publications from './pages/Publications';
import Programs from './pages/Programs';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="get-involved" element={<GetInvolved />}/>
          <Route path="publications" element={<Publications />}/>
          <Route path="contact" element={<Contact />} /> 
          <Route path="donate" element={<Donate/>} /> 
          <Route path="privacy" element={<PrivacyPolicy/>} /> 
          <Route path="refundpolicy" element={<RefundPolicy/>} />
          <Route path="termcondition" element={<TermsConditions/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
