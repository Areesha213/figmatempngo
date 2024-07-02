import React from 'react';
import Card from './Card';
import img1 from "../assets/Thumbnail.png";
import img2 from "../assets/Thumbnail (1).png";
import img3 from "../assets/Thumbnail (2).png";
import img4 from "../assets/Thumbnail (3).png";
import '../styles/CardGallery.css'; // Import custom CSS

const CardGallery = () => {
  const cardsData = [
    {
      title: "Our goal is to make education available for everyone",
      content: "We want our youth to be fully educated and achieve the success",
      imgSrc: img1,
      link: "#!"
    },
    {
      title: "Our goal is to make education available for everyone",
      content: "We want our youth to be fully educated and achieve the success",
      imgSrc: img2,
      link: "#!"
    },
    {
      title: "Our goal is to make education available for everyone",
      content: "We want our youth to be fully educated and achieve the success",
      imgSrc: img3,
      link: "#!"
    },
    {
      title: "Our goal is to make education available for everyone",
      content: "We want our youth to be fully educated and achieve the success",
      imgSrc: img4,
      link: "#!"
    }
  ];

  return (
    <div className="card-gallery">
      {cardsData.map((card, index) => (
        <div key={index} className="card-container mb-3">
          <Card
            title={card.title}
            content={card.content}
            imgSrc={card.imgSrc}
            link={card.link}
          />
        </div>
      ))}
    </div>
  );
};

export default CardGallery;
