import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Krunal Kishan",
    title: "Chairman BSGM Group",
    quote: "Solwyz Technologies is simply outstanding. Their web development team crafted a visually stunning and highly intuitive website that perfectly embodies our brand's essence. The digital marketing strategies they implemented have been transformative, driving a remarkable surge in traffic and engagement. Their expertise and creativity have exceeded our expectations, delivering phenomenal results across all fronts. I highly recommend their exceptional services to any business looking to elevate their online presence and marketing efforts.",
  },
  {
    name: "Arvind Reddy",
    title: "AVM Group",
    quote: "Solwyz Technologies has been instrumental in transforming our online presence. Their web development team created a sleek, modern website that is both visually appealing and user-friendly. The digital marketing services they provided have been extraordinary, significantly boosting our online visibility and customer engagement. Their strategic approach and innovative solutions have truly set us apart in the competitive market. I couldn't be more satisfied with their exceptional service and outstanding results."
,
  },
  {
    name: "Shardul Sharma",
    title: "Chairman Querz",
    quote: "Working with Solwyz Technology was an absolute pleasure! Their team's innovative thinking consistently amazed me, producing impactful solutions that truly made a difference. They excel at pushing boundaries and delivering results that exceed expectations. I highly recommend Solwyz Technology for anyone seeking cutting-edge solutions backed by creativity and expertise. Their commitment to excellence is unmatched, and I look forward to future collaborations with them. Highly recommended",
  }
  // Add more testimonials as needed
];

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={``}
      style={{ ...style, display: "block", right: "25px" ,  zIndex: 1 }}
      onClick={onClick}
    >
      
      <button type="button" className="hidden md:block absolute top-48 right-[15rem] text-banner-buttonBackground bg-gray-300 hover:bg-gray-500 font-medium rounded-full text-sm p-2.5 text-center">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
      </button>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={``}
      style={{ ...style, display: "block", left: "25px", zIndex: 10 }}
      onClick={onClick}
    >
      <button type="button" className="hidden md:block absolute z-50 top-48 left-[15rem] text-banner-buttonBackground rotate-180 bg-gray-300 hover:bg-gray-500 font-medium rounded-full text-sm p-2.5 text-center">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
      </button>
    </div>
  );
};

const CarouselComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="mx-auto mt-2">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="max-w-3xl text-center p-8">
            
            <h3 className="text-[25px] font-bold">{testimonial.name}</h3>
            <p className="text-[15px] text-gray-600">{testimonial.title}</p>
            <p className="text-[18px] font-normal mb-4 mt-16">{testimonial.quote}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
