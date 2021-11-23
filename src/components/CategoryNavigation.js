import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Category from "./Category";
import { categories } from "../utils/categories";

SwiperCore.use([Navigation]);

const CategoryNavigation = () => {
  return (
    <div className="category-nav">
      <Swiper
        navigation
        slideToClickedSlide={true}
        breakpoints={{
          // when window width is >= 1250px
          1250: {
            slidesPerView: 8,
          },
          1080: {
            slidesPerView: 7,
          },
          800: {
            slidesPerView: 6,
          },
          710: {
            slidesPerView: 5,
          },
          425: {
            slidesPerView: 4,
          },
          300: {
            slidesPerView: 3,
          },
        }}
      >
        {categories.map((category) => {
          return (
            <SwiperSlide key={`${category.name}-slide`}>
              <Category
                name={category.name}
                displayedName={category.displayedName}
                categoryName={category.name}
                iconPath={category.iconPath}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategoryNavigation;
