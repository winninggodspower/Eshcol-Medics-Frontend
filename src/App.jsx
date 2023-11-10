import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from './layouts/RootLayout';
import DashboardLayout from "./layouts/DashboardLayout";

import ProtectedRoute from "./utils/protectedRoute";

// pages
import RegisterPatient from './pages/Register/RegisterPatient';
import RegisterExpert from './pages/Register/RegisterExpert';
import LoginPatient from './pages/Login/LoginPatient';
import LoginExpert from './pages/Login/LoginExpert';
import RegisterIndividualOrHospital from "./pages/dashboard/Register/ExpertPages/RegisterAsIndividualOrHospital";
import SearchForHospital from "./pages/dashboard/Register/ExpertPages/SearchForHospital";
import RegisterHospital from "./pages/dashboard/Register/ExpertPages/RegisterHospital";
import HostpitalOwnerShipInformation from "./pages/dashboard/Register/ExpertPages/HostpitalOwnerShipInformation";
import PersonalInformation from "./pages/dashboard/Register/AccountDetails/PersonalInformation";

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
        <Route path="register-as-hospital-or-individual" element={<RegisterIndividualOrHospital/>}/>
        <Route path="search-for-hospital" element={<SearchForHospital/>}/>
        <Route path="register-hospital" element={<RegisterHospital/>}/>
        <Route path="hostpital-ownership-information" element={<HostpitalOwnerShipInformation/>}/>
        <Route path="personal-information" element={<PersonalInformation/>}/>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
