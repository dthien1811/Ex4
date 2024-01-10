import React from "react";
import PeopleInfo from "./PeopleInfo"; // Make sure the path to your PeopleInfo component is correct
import Navbar from "./Navbar";
import CourseList from "./CourseList";


import "./App.css"; // Make sure to create this CSS file with the styles provided below


const App = () => {
  return (
    <div className="hello-react">
      <Navbar />

      Hello <span className="react-text">React</span>
      <h1>My Courses</h1>
      <CourseList />
      <PeopleInfo />
      <div style={{ textAlign: "center" }}>
    {" "}
    {/* Center align the content */}
    <img
      
      alt="React Logo"
      style={{ width: "200px", marginTop: "50px" }}
    />{" "}
    {/* Image with styles */}
    <p style={{ fontStyle: "italic" }}>
      This is the React logo! <br />
      (I don't know why it is here either)
    </p>
    <p>The library for web and native user interfaces</p>
  </div>
    </div>
    
  );
  
};




export default App;