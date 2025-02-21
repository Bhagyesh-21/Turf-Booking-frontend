import React, { useState } from "react";
import './AdvertisementCarousel.css';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";

const items = [
  {
    src: "https://media.istockphoto.com/id/1442572567/photo/cricket-leather-ball-and-wickets-in-stadium-with-copy-space.jpg?s=2048x2048&w=is&k=20&c=bUGfkUjrOqSH5vwM7I70ZUzHPCwqnrk_bla-mSLBRD8=",
    altText: "Special Turf Discount",
    caption: "Get 20% off on your first booking!"
  },
  {
    src: "https://media.istockphoto.com/id/640931466/photo/batsman-on-the-stadium-in-action.jpg?s=2048x2048&w=is&k=20&c=jSjQxjTEy2A7bEiDO-U6D0MDIHgifMewflMjMUt_YeI=",
    altText: "Night Matches Available",
    caption: "Book floodlit turfs for night tournaments!"
  },
  {
    src: "https://media.istockphoto.com/id/641191084/photo/batsman-on-the-stadium-in-action.jpg?s=2048x2048&w=is&k=20&c=6YF7ovUB1kxV1rFT58Ow7Kt_PeywakyfJKsgqMiVDwk=",
    altText: "Exclusive Membership Plans",
    caption: "Join our membership and enjoy unlimited benefits!"
  }
];


const AdvertisementCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const previous = () => {
    if (animating) return;
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={index}
    >
      {/* <img src={item.src} alt={item.altText} className="d-block w-100" /> */}
      <img src={item.src} alt={item.altText} className="d-block w-100 carousel-img" />

      <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
    </CarouselItem>
  ));

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default AdvertisementCarousel;
