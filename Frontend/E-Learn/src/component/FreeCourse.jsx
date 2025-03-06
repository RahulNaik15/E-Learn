import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const FreeCourse = () => {

    const filterData = list.filter((data) => data.category === "Free");
   
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20'>
      <div>
        <h1 className='text-2xl font-bold pb-2'>Free Courses</h1>
        <p className='text-xl text-[#64748b] font-medium'>Explore a variety of free courses to enhance your skills and boost your career. Start learning today!</p>
      </div>

      <div className='mt-20 mb-20'>
        <Slider {...settings}>
          {filterData.map((item) => (
          <Cards item={item} key={item.id}></Cards>
        ))}
        </Slider>
      </div>

    </div>
    </>
    
  )
}

export default FreeCourse