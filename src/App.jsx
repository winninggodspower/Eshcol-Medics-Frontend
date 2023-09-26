import { useState } from 'react'
import Navbar from './components/Navbar';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './layouts/RootLayout';
import RegisterPatient from './pages/Register/RegisterPatient';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='/register'>
        <Route path='patient' element={<RegisterPatient/>} />
      </Route>
    </Route>
  )
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <RouterProvider router={router} />
  )
}

export default App
