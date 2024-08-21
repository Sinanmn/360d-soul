import React from "react";
import "./OurValue.css";
import { FaRegCompass } from "react-icons/fa6";
import { BiTargetLock } from "react-icons/bi";
import { CiStopwatch } from "react-icons/ci";
import Box from "../Box/Box";

const OurValue = () => {
  const boxData = [
    {
      icon: <FaRegCompass />,
      title: "Mission",
      description:
        "At 360D Soul Ltd., our mission is to provide user-friendly, high-quality resourcing solutions that are trusted, dynamic, and rooted in local expertise, while simultaneously fostering a global footprint. We are committed to long-term sustainability, ensuring that our innovative platforms and services empower businesses to thrive in today's ever-evolving landscape.",
    },
    {
      icon: <BiTargetLock />,
      title: "Vision",
      description:
        "360D Soul Ltd. is to be the premier Sourcing & Organizational Development (OD) platform, setting the standard for excellence in our industry worldwide. We aspire to empower organizations with cutting-edge solutions that optimize their resources and foster organizational development, driving success and innovation in the global marketplace.",
    },
    {
      icon: <CiStopwatch />,
      title: "Value",
      description:
        "360D Soul Ltd. offers comprehensive, cost-effective solutions for businesses of all types, from established enterprises to emerging startups. Our commitment to ethical and socially responsible practices ensures that our services not only boost profitability but also contribute positively to society. We empower companies to grow sustainably and make a meaningful impact on the world.",
    },
  ];

  return (
    <div className="ourvalue_container  font-[Inter] ">
      <div className="ourvalue_menu ">
        <h4 className="font-[Inter]">OUR VALUE</h4>
        <h1>Quality care from quality experts.</h1>
        {boxData.map((item, index) => (
          <Box
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          ></Box>
        ))}
      </div>
    </div>
  );
};

export default OurValue;
