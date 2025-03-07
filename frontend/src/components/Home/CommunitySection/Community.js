import React from "react";
import CSS from "./Community.module.css";
import CommunityCard from "./CommunityCard/CommunityCard";
import img1 from "../TrendProductSection/images/rabbitmeat2.jpg";
import img2 from "../TrendProductSection/images/rabbitmeat1.jpg";
import img3 from "../TrendProductSection/images/rabbitmeat3.jpg";
import abubakar from "../TrendProductSection/images/abubakar.jpg";
import umar from "../../../images/ahmad.png";
import muzzamil from "../../../images/muzzamil.png";

const Community = () => {
  const CommunityMember = [
    {
      title: "Fresh Organic Rabbit Meat – A New Journey!",
      subtitle:
        "Join our vibrant community and indulge in the finest organic rabbit meat for an unforgettable experience.",
      memberName: "Ahmad Hassan Khan",
      memberImg: umar,
      communityImg: img2,
    },
    {
      title: "A Flavorful Adventure Awaits!",
      subtitle:
        "Come together with others who share your love for fresh rabbit meat and create lasting memories.",
      memberName: "Abu Bakar Siddique",
      memberImg: abubakar,
      communityImg: img1,
    },

    {
      title: "Discover the Joy of Premium Rabbit Meat!",
      subtitle:
        "Step into a world of flavorful rabbit dishes and connect with passionate food lovers.",
      memberName: "Muzzamil Khan",
      memberImg: muzzamil,
      communityImg: img3,
    },
  ];

  return (
    <div className={`${CSS["community-container"]}`}>
      <div className="container">
        <h1 className={CSS["community-title"]}>Join our Community</h1>
        <div className={CSS["community-divs"]}>
          {CommunityMember.map((memberdata, index) => (
            <CommunityCard
              key={index}
              title={memberdata.title}
              subtitle={memberdata.subtitle}
              memberName={memberdata.memberName}
              memberImg={memberdata.memberImg}
              communityImg={memberdata.communityImg}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
