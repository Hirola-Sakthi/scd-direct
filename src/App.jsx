import './App.css'
import './assets/scss/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import HomePage from './pages/HomePage';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from './pages/AboutUsPage';
import ComingSoonPage from './pages/ComingSoonPage';
import DealerPricingPage from './pages/DealerPricingPage';
import ContactUsPage from './pages/ContactUsPage';
import ADRCompliance from './pages/ADRCompliance';
import ExportPage from './pages/ExportPage';
import Ford150RaptorPage from './pages/Ford150RaptorPage';
import RamHeavyDutyMainPage from './pages/RamHeavyDutyMainPage';
import FordSuperDutyMainPage from './pages/FordSuperDutyMainPage';
import Ram1500RHOPage from './pages/Ram1500RHOPage';
import FordSuperDuty2025 from './pages/FordSuperDuty2025';
import FordSuperDutyCabChassis from './pages/FordSuperDutyCabChassis';
import RamHeavyDuty2025and3500 from './pages/RamHeavyDuty2025and3500';
import RamHeavyDutyCabChassis from './pages/RamHeavyDutyCabChassis';
import Blogs from './pages/Blogs/Blogs';
import BlogContentOne from './pages/BlogsSingleContainer/BlogContentOne';
import BlogContentTwo from './pages/BlogsSingleContainer/BlogContentTwo';
import BlogContentThree from './pages/BlogsSingleContainer/BlogContentThree';
import BlogContentFour from './pages/BlogsSingleContainer/BlogContentFour';
import BlogContentFive from './pages/BlogsSingleContainer/BlogContentFive';
import BlogContentSix from './pages/BlogsSingleContainer/BlogContentSix';

function App() {
  const helmetContext = {}
  return (
    <>
      <HelmetProvider context={helmetContext}>
    <Router>
    {/* <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            position: "relative",
            top: "5px",
          },
        }}
      /> */}
      <Routes>
        <Route path='/' exact element={<HomePage/>}/>
        <Route path='/about-us' exact element={<AboutUsPage/>}/>
        <Route path='/coming-soon' exact element={<ComingSoonPage />}/>
        <Route path='/dealer-pricing' exact element={<DealerPricingPage />}/>
        <Route path='/adr-compliance' exact element={<ADRCompliance />}/>
        <Route path='/export' exact element={<ExportPage />}/>
        <Route path='/contact-us' exact element={<ContactUsPage />}/>
        <Route path='/blogs' exact element={<Blogs/>}/>

        {/* varients main pages */}
        <Route path='/ford150' exact element={<Ford150RaptorPage />}/>
        <Route path='/ram-heavy-duty' exact element={<RamHeavyDutyMainPage />}/>
        <Route path='/ford-super-duty' exact element={<FordSuperDutyMainPage />}/>
        <Route path='/ram-1500-rho' exact element={<Ram1500RHOPage />}/>
        <Route path='/ram-heavy-duty-2500-and-3500' exact element={<RamHeavyDuty2025and3500 />}/>
        <Route path='/ram-heavy-duty-cab-chassis' exact element={<RamHeavyDutyCabChassis />}/>
        <Route path='/ford-super-duty-2025' exact element={<FordSuperDuty2025 />}/>
        <Route path='/ford-super-duty-cab-chassis' exact element={<FordSuperDutyCabChassis />}/>



        {/* blogs pages */}
        <Route path='/choosing-the-right-american-car-importer-in-australia' exact element={<BlogContentOne />} />
        <Route path='/a-complete-guide-to-shipping-american-vehicles-to-australia' exact element={<BlogContentTwo />} />
        <Route path='/understanding-adr-compliance-for-imported-american-vehicles' exact element={<BlogContentThree />} />
        <Route path='/why-american-vehicles-are-perfect-for-australian-roads-and-conditions' exact element={<BlogContentFour />} />
        <Route path='/why-importing-american-vehicles-to-australia-is-easier-with-scd-direct' exact element={<BlogContentFive />} />
        <Route path='/why-right-hand-drive-conversion-matters-for-imported-vehicles' exact element={<BlogContentSix />} />

      </Routes>
    </Router>
    </HelmetProvider>
    </>
  )
}

export default App
