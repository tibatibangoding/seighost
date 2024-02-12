'use client';
import { FC, useState, useEffect } from 'react';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { RiTwitterXFill } from 'react-icons/ri';
import { FaDiscord } from 'react-icons/fa';

const ContainerHome: FC = () => {
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY * 0.001; // Sesuaikan faktor skala sesuai kebutuhan Anda
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
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
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
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  rounded-xl">
                <Image
                  src={'/images/7.gif'}
                  width={200}
                  height={200}
                  alt="hero"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="mt-24 w-full">
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-center gap-20">
            <Image
              src={'/images/hero.gif'}
              width={200}
              height={200}
              alt="hero"
              className="object-cover"
            />
            <div className="">
              <h1 className="text-5xl text-amber-950 text-center font-extrabold ">
                WELCOME TO
                <br />
                <span className="text-9xl">ABRAXUS</span>
                <br /> HOME OF SEIAVATARS
              </h1>
            </div>
            <Image
              src={'/images/hero.gif'}
              width={200}
              height={200}
              alt="hero"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-16 text-3xl text-amber-950 text-center font-extrabold ">
            <h1 className="w-2/3 text-amber-950 text-center font-extrabold ">
              The Abraxus Collective is our fully animated collection of 5555
              pixel art NFTs, each with their own unique story.
            </h1>
            <p>OG Minters (Holders) Prioritised.</p>
            <div className="flex gap-10">
              <div className="flex gap-3 items-center">
                <RiTwitterXFill className="text-4xl" />
                <h1>@seighost</h1>
              </div>
              <div className="flex gap-3 items-center">
                <FaDiscord className="text-4xl" />
                <h1>Discord</h1>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      {/* <section className="w-full  mt-4"></section> */}
    </>
  );
};

export default ContainerHome;
