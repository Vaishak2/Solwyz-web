import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Sharma Don",
    title: "Chairman Quest",
    quote: "I had a pleasure of working with this great team, and I must say they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work.",
  },
  {
    name: "Another Person",
    title: "CEO Company",
    quote: "Their dedication and commitment to excellence is unparalleled. I highly recommend their services.",
  },
  // Add more testimonials as needed
];

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-black bg-gray-200 rounded-full shadow-lg`}
      style={{ ...style, display: "block", right: "25px"}}
      onClick={onClick}
    >
    
      <span className="sr-only">Next</span>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-black bg-gray-200 rounded-full shadow-lg`}
      style={{ ...style, display: "block", left: "25px",}}
      onClick={onClick}
    >
      <span className="sr-only">Previous</span>
    </div>
  );
};

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="max-w-4xl mx-auto my-10">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="text-center p-8">
            <p className="text-lg italic mb-4">{testimonial.quote}</p>
            <h3 className="text-xl font-bold">{testimonial.name}</h3>
            <p className="text-gray-600">{testimonial.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
