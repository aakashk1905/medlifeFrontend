import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BlogsDetails from "./Components/Blogs/BlogsDetails";
import BlogsPage from "./Components/Blogs/BlogsPage";
import Caorosel from "./Components/Caorosel";
import HerniaPage from "./Components/DiseasePages/AllDiseasePages/HerniaPage";
import DoctorsDetails from "./Components/DoctorsPage/DoctorsDetails/DoctorsDetails";
import DoctorsPage from "./Components/DoctorsPage/DoctorsPage";
import AboutUs from "./Components/FooterPages/AboutUs";
import ContactUs from "./Components/FooterPages/ContactUs";
import Partner from "./Components/FooterPages/Partner";
import Payments from "./Components/FooterPages/Payments";
import PrivacyPolicy from "./Components/FooterPages/PrivacyPolicy";
import RefundPolicy from "./Components/FooterPages/RefundPolicy";
import TermsConditions from "./Components/FooterPages/TermsConditions";
import HospitalDetails from "./Components/Hospitals/HospitalDetails";
import HospitalsPage from "./Components/Hospitals/HospitalsPage";
import Modal from "./Components/Modal";
import Navbar from "./Components/Navbar";
import ReviewPage from "./Components/Review/ReviewPage";
import WriteReview from "./Components/Review/WriteReview/WriteReview";
import BookAmbulance from "./Components/Services/BookAmbulance";
import EmergencyService from "./Components/Services/EmergencyService/EmergencyService";
import DiseasePage from "./Pages/DiseasePage";
import Landingpage from "./Pages/Landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const queryClient = new QueryClient();
function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
      
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="" element={<Landingpage />} />
          <Route path="/:disease" element={<DiseasePage />} />
        </Route>
        <Route path="/treatment/:subDisease" element={<HerniaPage />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/caorosel" element={<Caorosel />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/writeReview" element={<WriteReview />} />
        <Route path="/bookAmbulance" element={<BookAmbulance />} />
        <Route path="/emergencyService" element={<EmergencyService />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/doctorsDetails/:id" element={<DoctorsDetails />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogsDetails" element={<BlogsDetails />} />
        <Route path="/hospitals" element={<HospitalsPage />} />
        <Route path="/hospitalDetails" element={<HospitalDetails />} />

        {/* Footer pages */}
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/refundPolicy" element={<RefundPolicy />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/termsConditions" element={<TermsConditions />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
