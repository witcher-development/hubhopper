import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

import './App.css'
import {Map} from "./features/map/Map";
import {get_hubs} from "./features/api/api";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <FlowManager />,
//   },
//   {
//     path: "/welcome",
//     element: <Welcome />,
//   },
// ]);

function App() {
  const [modal, setModal] = useState(false);

  const data = useQuery('hubs', get_hubs)
  console.log(data)

  useEffect(() => {
    if (!localStorage.getItem('mode')) {
      router.navigate('/welcome')
    }
  }, [])

  const setMode = (mode: 'driver' | 'passenger') => {
    localStorage.setItem('mode', mode)
    router.navigate(0)
  }

  return (
    <div>
      <button className='hamburger' onClick={() => setModal(m => !m)}>[]</button>
      {modal && (
        <div className='modal'>
          <button onClick={() => setMode('driver')}>Driver</button>
          <button onClick={() => setMode('passenger')}>Passenger</button>
        </div>
      )}
      <Map hubs={data.status === "success" ? data.data : []} />
      {/*<RouterProvider router={router} />*/}
    </div>
  )
}

export default App
