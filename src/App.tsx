import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

import './App.css'
import {Map} from "./features/map/Map";
import {TopBar} from "./features/topbar/TopBar";
import {Rides} from "./pages/Rides";

import {get_hubs} from "./features/api/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rides />
  }
]);

function App() {
  const [modal, setModal] = useState(false);

  const data = useQuery('hubs', get_hubs)
  console.log(data)

  const setMode = (mode: 'driver' | 'passenger') => {
    localStorage.setItem('mode', mode)
    router.navigate(0)
  }

  return (
    <div>
      <Rides />
      <Map hubs={data.status === "success" ? data.data : []} />
      {/*<RouterProvider router={router} />*/}
    </div>
  )
}

export default App
