import React from "react";
import "./MeetOurTeam.css";
import team1 from "../../../../assets/Person/p1.jpg";
import team2 from "../../../../assets/Person/p2.jpg";
import team3 from  "../../../../assets/Person/p3.jpg";
import team4 from  "../../../../assets/Person/p4.jpg";
import team5 from "../../../../assets/Person/p5.jpg";

import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom"


const MeetOurTeam = () => {
  const chobiData = [
    {
      src: team1,
      name: "Abu Sayed",
      title: "Student",
    },
    {
      src: team2,
      name: "Rahima",
      title: "Student",
    },
    {
      src: team3,
      name: "Pitom",
      title: "Lawyer",
    },
    {
      src: team4,
      name: "Salma",
      title: "Student",
    },
    {
      src: team5,
      name: "Farhan",
      title: "Student",
    },
  ];

  return (
    <div className="meetourteam_container font-[Inter]">
      <h1>
        The professional, licensed, and vetted Psychologist who you can trust
      </h1>

      <div className="chobi-container">
        {chobiData.map((item, index) => (
          <div className="chobi" key={index}>
            <img src={item.src} />
            <h3>{item.name}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <button className="btn  text-white bg-[#00B4D8]">Meet Our Team</button>

    </div>
  );
};

export default MeetOurTeam;
