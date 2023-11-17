import React from "react";
import DisplayCarousel from "../components/DisplayCarousel";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from "../components/NavigationBar";

function HomePage() {
  return (
    <>
    <NavigationBar/>
    <DisplayCarousel/>
    </>
  );
}

export default HomePage;