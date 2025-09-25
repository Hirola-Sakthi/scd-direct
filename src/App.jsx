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
import BlogContentSeven from './pages/BlogsSingleContainer/BlogContentSeven';
import BlogContentEight from './pages/BlogsSingleContainer/BlogContentEight';
import BlogContentNine from './pages/BlogsSingleContainer/BlogContentNine';
import BlogContentTen from './pages/BlogsSingleContainer/BlogContentTen';
import BlogContentEleven from './pages/BlogsSingleContainer/BlogContentEleven';
import BlogContentTwelve from './pages/BlogsSingleContainer/BlogContentTwelve';
import BlogContentThirteen from './pages/BlogsSingleContainer/BlogContentThirteen';
import BlogContentFourteen from './pages/BlogsSingleContainer/BlogContentFourteen';
import BlogContentFifteen from './pages/BlogsSingleContainer/BlogContentFifteen';
import BlogContentSixteen from './pages/BlogsSingleContainer/BlogContentSixteen';
import BlogContentSeventeen from './pages/BlogsSingleContainer/BlogContentSeventeen';
import BlogContentEighteen from './pages/BlogsSingleContainer/BlogContentEighteen';
import BlogContentNineteen from './pages/BlogsSingleContainer/BlogContentNineteen';
import BlogContentTwenty from './pages/BlogsSingleContainer/BlogContentTwenty';
import BlogContentTwentyone from './pages/BlogsSingleContainer/BlogContentTwentyone';
import BlogContentTwentytwo from './pages/BlogsSingleContainer/BlogContentTwentytwo';
import BlogContentTwentythree from './pages/BlogsSingleContainer/BlogContentTwentythree';
import BlogContentTwentyfour from './pages/BlogsSingleContainer/BlogContentTwentyfour';
import BlogContentTwentyfive from './pages/BlogsSingleContainer/BlogContentTwentyfive';
import BlogContentTwentysix from './pages/BlogsSingleContainer/BlogContentTwentysix';
import BlogContentTwentyseven from './pages/BlogsSingleContainer/BlogContentTwentyseven';
import BlogContentTwentyeight from './pages/BlogsSingleContainer/BlogContentTwentyeight';
import BlogContentTwentynine from './pages/BlogsSingleContainer/BlogContentTwentynine';
import BlogContentThirty from './pages/BlogsSingleContainer/BlogContentThirty';
import BlogContentThirtyone from './pages/BlogsSingleContainer/BlogContentThirtyone';
import BlogContentThirtytwo from './pages/BlogsSingleContainer/BlogContentThirtytwo';

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
        <Route path='/how-to-import-cars-from-australia-guide-scd-direct' exact element={<BlogContentSeven />} />
        <Route path='/right-hand-drive-conversions-australia-scd-direct' exact element={<BlogContentEight />} />
        <Route path='/adr-compliance-australia-vehicle-importers-scd-direct' exact element={<BlogContentNine />} />
        <Route path='/how-to-avoid-common-mistakes-when-importing-cars-to-australia' exact element={<BlogContentTen />} />
        <Route path='/tips-vehicle-shipping-usa-to-australia' exact element={<BlogContentEleven />} />
        <Route path='/australians-choosing-american-pickup-trucks' exact element={<BlogContentTwelve />} />
        <Route path='/adr-compliance-importing-converting-american-trucks-australia' exact element={<BlogContentThirteen />} />
        <Route path='/ford-f150-vs-f250-rhd-conversion-australia' exact element={<BlogContentFourteen />} />
        <Route path='/ram-1500-2500-3500-towing-australia' exact element={<BlogContentFifteen />} />
        <Route path='/rhd-conversion-melbourne-american-trucks-adr-compliance' exact element={<BlogContentSixteen />} />
        <Route path='/rhd-conversion-sydney-american-trucks-&-adr-compliance' exact element={<BlogContentSeventeen />} />
        <Route path='/right-hand-drive-conversions-qld-rhd-american-trucks-adr-compliance' exact element={<BlogContentEighteen />} />
        <Route path='/right-hand-drive-conversions-australia-guide' exact element={<BlogContentNineteen />} />
        <Route path='/truck-conversion-specialists-australia-rhd-adr-compliance' exact element={<BlogContentTwenty />} />
        <Route path='/vehicle-compliance-australia-rhd-adr-certification' exact element={<BlogContentTwentyone />} />
        <Route path='/american-trucks-popularity-australia-top-models' exact element={<BlogContentTwentytwo />} />
        <Route path='/adr-compliance-trucks-australia-rhd-conversion-safety-standards' exact element={<BlogContentTwentythree />} />
        <Route path='/buy-american-trucks-australia-guide' exact element={<BlogContentTwentyfour />} />
        <Route path='/ford-f250-rhd-conversion-import-compliance-road-ready-guide' exact element={<BlogContentTwentyfive />} />
        <Route path='/right-hand-drive-american-trucks-import-conversion-compliance' exact element={<BlogContentTwentysix />} />
        <Route path='/american-trucks-australia-guide' exact element={<BlogContentTwentyseven />} />
        <Route path='/ford-truck-conversion-australia-rhd-adr-compliance-road-ready' exact element={<BlogContentTwentyeight />} />
        <Route path='/american-truck-prices-australia' exact element={<BlogContentTwentynine />} />
        <Route path='/maintaining-imported-american-trucks-australia' exact element={<BlogContentThirty />} />
        <Route path='/import-american-trucks-australia-costs-rules-cities' exact element={<BlogContentThirtyone />} />
        <Route path='/top-american-truck-accessories-upgrades-australia' exact element={<BlogContentThirtytwo />} />






















      </Routes>
    </Router>
    </HelmetProvider>
    </>
  )
}

export default App
