import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './layouts/RootLayout';

// pages
import RegisterPatient from './pages/Register/RegisterPatient';
import RegisterExpert from './pages/Register/RegisterExpert';
import LoginPatient from './pages/Login/LoginPatient';
import LoginExpert from './pages/Login/LoginExpert';

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
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
