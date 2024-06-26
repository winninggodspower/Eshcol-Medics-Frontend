import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from './layouts/RootLayout';
import DashboardLayout from "./layouts/DashboardLayout";
import CustomerServiceSidebarLayout from "./layouts/CustomerServiceSidebarLayout";

// pages
import RegisterPatient from './pages/Register/RegisterPatient';
import RegisterExpert from './pages/Register/RegisterExpert';
import LoginPatient from './pages/Login/LoginPatient';
import LoginExpert from './pages/Login/LoginExpert';
import RegisterIndividualOrHospital from "./pages/dashboard/Register/ExpertPages/RegisterAsIndividualOrHospital";
import SearchForHospital from "./pages/dashboard/Register/ExpertPages/SearchForHospital";
import RegisterHospital from "./pages/dashboard/Register/ExpertPages/RegisterHospital";
import HostpitalOwnerShipInformation from "./pages/dashboard/Register/ExpertPages/HostpitalOwnerShipInformation";
import Logout from "./pages/Logout";
import Registration from "./pages/dashboard/Register/Registration";
import ReviewInProgress from "./pages/dashboard/Register/ExpertRegistration/ReviewInProgress";
import PatientServices from "./pages/dashboard/Services";
import ConsultDoctor from "./pages/dashboard/Services/ConsultDoctor";
import HowTo from "./pages/dashboard/HowTo";
import MedicalPrescription from "./pages/dashboard/MedicalPrescription";
import Settings from "./pages/dashboard/Settings/Settings";

import PatientPersonalInfomationSetting from "./pages/dashboard/Settings/PatientSetting/PatientPersonalInfomationSetting";
import PatientSecuritySetting from "./pages/dashboard/Settings/PatientSetting/PatientSecuritySetting";
import ExpertPersonalInfomationSetting from "./pages/dashboard/Settings/ExpertSetting/ExpertPersonalInformationSetting";
import ExpertSecuritySetting from "./pages/dashboard/Settings/ExpertSetting/ExpertSecuritySetting";

import BillingInformationSetting from "./pages/dashboard/Settings/PatientSetting/BillingInformationSetting";
import NextOfKinSetting from "./pages/dashboard/Settings/PatientSetting/NextOfKinSetting";
import PaymentInformationSetting from "./pages/dashboard/Settings/ExpertSetting/PaymentInformationSetting";
import MedicalDepartmentSetting from "./pages/dashboard/Settings/ExpertSetting/MedicalDepartmentSetting";

import ProtectedRoute from "./utils/protectedRoute";

import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import FetchAccessTokenFromServer from "./utils/FetchAccessToken";

import { useDispatch } from "react-redux";
import { clearCredentials, setCredentails } from "./redux/authSlice";
import ExpertProtectedRoute from "./utils/ExpertProtectedRoute";
import PatientProtectedRoute from "./utils/PatientProtectedRoute";
import Prescribe from "./pages/dashboard/Prescribe";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='/register'>
        <Route index element={<RegisterPatient/>} />
        <Route path='patient' element={<RegisterPatient/>} />
        <Route path='expert' element={<RegisterExpert/>} />
      </Route>
      <Route path='/login'>
        <Route index element={<LoginPatient/>} />
        <Route path='patient' element={<LoginPatient/>} />
        <Route path='expert' element={<LoginExpert/>} />
      </Route>
      <Route path="/dashboard" element={<ProtectedRoute element={<DashboardLayout/>} />}>
        <Route path="registration" element={<Registration/>}></Route>
        <Route path="register-as-hospital-or-individual" element={<RegisterIndividualOrHospital/>}/>
        <Route path="search-for-hospital" element={<SearchForHospital/>}/>
        <Route path="register-hospital" element={<RegisterHospital/>}/>
        <Route path="hostpital-ownership-information" element={<HostpitalOwnerShipInformation/>}/>
        <Route path="review-in-progress" element={<ReviewInProgress/>} />
        <Route path="services" element={<PatientServices/>}/>
        <Route path="consult-doctor" element={<ConsultDoctor/>} />
        <Route element={<CustomerServiceSidebarLayout/>}>
          <Route path="how-to-use" element={<HowTo/>} />
          <Route path="prescribe" element={<Prescribe/>} />
        </Route>
        <Route path="medical-prescriptions" element={<MedicalPrescription/>} />
        <Route path="settings" element={<CustomerServiceSidebarLayout/>} >
          <Route index element={<Settings/>} />
          <Route path="patient" element={<PatientProtectedRoute/>}>
            <Route path="personal-information" element={<PatientPersonalInfomationSetting/>} />
            <Route path="billing-information" element={<BillingInformationSetting/>} />
            <Route path="next-of-kin" element={<NextOfKinSetting/>} />
            <Route path="security" element={<PatientSecuritySetting/>} />
          </Route>
          <Route path="expert" element={<ExpertProtectedRoute/>} >
          <Route path="personal-information" element={<ExpertPersonalInfomationSetting/>} />
          <Route path="payment-information" element={<PaymentInformationSetting/>} />
          <Route path="medical-department" element={<MedicalDepartmentSetting/>} />
          <Route path="security" element={<ExpertSecuritySetting/>} />
          </Route>
        </Route>
      </Route>
      <Route path='/logout' element={<Logout/>} />
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();
  let [ checkedForRefreshToken, setcheckedForRefreshToken ] = useState(false);

  useEffect(()=>{
    // this function is responsible for checking if there is a refresh token in cookies,
    // then fetching the access token and storing it in the global state.
    async function checkRefreshToken() {
      const refreshToken = Cookies.get('refreshToken');
      console.log('found refresh token');
      if (refreshToken) {
        let response = await FetchAccessTokenFromServer(refreshToken);
        console.log(response);
        if (response) {
          dispatch(setCredentails({refreshToken: response.refresh, accessToken: response.access, isAuthenticated: true}));
        }

      }
      setcheckedForRefreshToken(true);
    }
    if (!checkedForRefreshToken) {
      checkRefreshToken();
    }

  }, [dispatch])

  return (
    checkedForRefreshToken ?
    <RouterProvider router={router} /> :
    <h1>Loading </h1>
  )
}

export default App
