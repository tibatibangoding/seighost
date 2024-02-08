'use client';
import { FC, useState, useEffect } from 'react';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ContainerHome: FC = () => {
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY * 0.0001; // Sesuaikan faktor skala sesuai kebutuhan Anda
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="h-screen fixed -z-50">
        <Image
          src="/images/pxfuel.jpg"
          alt="Picture of the author"
          width={10000}
          height={0}
          className="transform transition duration-500 "
        />
      </div>
      <section className="w-full h-screen">
        <div className="relative w-full h-full" style={{ overflow: 'hidden' }}>
          <Image
            src="/images/bg-seivatars.png"
            alt="Picture of the author"
            width={10000}
            height={0}
            className="transform transition duration-500 object-cover "
            style={{
              transform: `scale(${scale})`,
              transition: 'transform 0.15s ease-in-out',
            }}
          />
          <Image
            src={'/images/hero.gif'}
            width={300}
            height={300}
            alt="hero"
            className="absolute bottom-0 left-0"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4 mt-4 ">
        <div className="">
          <Swiper
            breakpoints={{
              375: {
                // width: 375,
                slidesPerView: 2,
              },
              576: {
                // width: 576,
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 8,
              },
            }}
            spaceBetween={30}
            autoplay={{
              delay: 0,
            }}
            speed={2000}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl">
                <video
                  controls
                  loop
                  autoplay
                  playsInline
                  className="object-cover"
                >
                  <source src="/video/7.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl">
                <video
                  controls
                  loop
                  autoplay
                  playsInline
                  className="object-cover"
                >
                  <source src="/video/7.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl">
                <video
                  controls
                  loop
                  autoplay
                  playsInline
                  className="object-cover"
                >
                  <source src="/video/7.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl">
                <video
                  controls
                  loop
                  autoplay
                  playsInline
                  className="object-cover"
                >
                  <source src="/video/7.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl">
                <video
                  controls
                  loop
                  autoplay
                  playsInline
                  className="object-cover"
                >
                  <source src="/video/7.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl">
                <video
                  controls
                  loop
                  autoplay
                  playsInline
                  className="object-cover"
                >
                  <source src="/video/7.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl">
                <video
                  controls
                  loop
                  autoplay
                  playsInline
                  className="object-cover"
                >
                  <source src="/video/7.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl">
                <video
                  controls
                  loop
                  autoplay
                  playsInline
                  className="object-cover"
                >
                  <source src="/video/7.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl">
                <video
                  controls
                  loop
                  autoplay
                  playsInline
                  className="object-cover"
                >
                  <source src="/video/7.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl">
                <video
                  controls
                  loop
                  autoplay
                  playsInline
                  className="object-cover"
                >
                  <source src="/video/7.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl">
                <video
                  controls
                  loop
                  autoplay
                  playsInline
                  className="object-cover"
                >
                  <source src="/video/7.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl">
                <video
                  controls
                  loop
                  autoplay
                  playsInline
                  className="object-cover"
                >
                  <source src="/video/7.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl">
                <video
                  controls
                  loop
                  autoplay
                  playsInline
                  className="object-cover"
                >
                  <source src="/video/7.mp4" type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full" dir="rtl">
          <Swiper
            breakpoints={{
              375: {
                // width: 375,
                slidesPerView: 2,
              },
              576: {
                // width: 576,
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 8,
              },
            }}
            spaceBetween={30}
            autoplay={{
              delay: 0,
            }}
            speed={2000}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px] h-[200px] bg-red-500 rounded-xl"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* <section className="w-full  mt-4"></section> */}
    </>
  );
};

export default ContainerHome;
