
import React from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="app-container">
      <h1>Team Profiles</h1>
      <div className="cards-container">
        <ProfileCard
          name="Alice Johnson"
          image="https://randomuser.me/api/portraits/women/44.jpg"
          description="Frontend Developer passionate about UI/UX design."
        />
        <ProfileCard
          name="Michael Smith"
          image="https://randomuser.me/api/portraits/men/46.jpg"
          description="Backend Developer specializing in Node.js and databases."
        />
        <ProfileCard
          name="Sophia Lee"
          image="https://randomuser.me/api/portraits/women/68.jpg"
          description="Full-stack Developer with a love for problem-solving."
        />
      </div>
    </div>
  );
}

export default App;
