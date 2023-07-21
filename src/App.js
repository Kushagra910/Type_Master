import React, {useEffect} from "react";
import Multiplayer from "./pages/Multiplayer";
import Navbar from "./components/Navbar";
import Solo from "./pages/Solo";
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import socket from './socket' ;

function App(){
  
  useEffect(() =>{
    socket.on('test', (message) =>{
      console.log(message);
    });

    return () => {
      socket.off('test');
    };
  }, []);

  return (
      <div className="w-full h-[100vh]">
        <div className="w-full h-12">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Solo" element={<Solo/>}/>
          <Route path="/Multiplayer" element={<Multiplayer/>}/>
        </Routes>
      </div>
)};

export default App;
