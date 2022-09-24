import React from "react";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import data from "./data";
import Footer from "./components/Footer";

export default function App(){
  let infoData = data.map(item => {
    return (<Info
      key={item.id}
      {...item}
    />)
  })
  return (
    <div><Navbar />
    {infoData}
    <Footer />
    </div>
  )
}