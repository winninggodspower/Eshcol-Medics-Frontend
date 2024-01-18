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

import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import FetchAccessTokenFromServer from "./utils/FetchAccessToken";

import { useDispatch } from "react-redux";
import { clearCredentials, setCredentails } from "./redux/authSlice";
import Logout from "./pages/Logout";
import Registration from "./pages/dashboard/Register/Registration";
import ReviewInProgress from "./pages/dashboard/Register/ExpertRegistration/ReviewInProgress";

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
