'use client';
import { FC, useState, useEffect } from 'react';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { RiTwitterXFill } from 'react-icons/ri';
import { FaDiscord } from 'react-icons/fa';
import StackedCarousel from '@/components/Common/StackedCarousel';
import Accordion from '@/components/Common/FaqAccordion';

const ContainerHome: FC = () => {
  const [scale, setScale] = useState<number>(1);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const handleToggleAccordion = (accordionNumber: number) => {
    setOpenAccordion((prev) =>
      prev === accordionNumber ? null : accordionNumber
    );
  };

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
            <div>
              <a
                href="https://pallet.exchange/collection/sei-avatars"
                className="flex items-center gap-4 text-orange-950/90 font-extrabold text-4xl hover:opacity-70"
              >
                <Image
                  src={'/images/Pallet.png'}
                  alt="Your SVG"
                  width={40}
                  height={40}
                />
                Pallete Exchange
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className=" mt-44 max-w-7xl mx-auto">
        <div className="mt-4 flex justify-between">
          <div className="box w-1/3 p-4 flex justify-end items-end">
            <Image
              src="/images/unicorn-sprite.gif"
              alt="Your SVG"
              width={180}
              height={180}
            />
          </div>
          <div className="box  w-1/3 p-4 text-center ">
            <p className="text-orange-950/90 text-5xl font-extrabold ">
              Only The
            </p>
            <p className="text-orange-950/90 text-8xl font-extrabold">
              Begining
            </p>
          </div>
          <div className="box w-1/3 p-4 flex justify-start items-start">
            <Image
              src="/images/fox-sprite.gif"
              alt="Your SVG"
              width={180}
              height={180}
            />
          </div>
        </div>

        <StackedCarousel />
      </section>

      <section className=" mt-44 max-w-7xl mx-auto ">
        <div className="text-center uppercase font-extrabold text-orange-950">
          <h1 className="text-5xl">Free Access To</h1>
          <h1 className="text-7xl mt-3">Collectibles and upgrades </h1>
          <h1 className="text-2xl mt-8">an eternal ecosystem.</h1>
          <Image
            src={'/images/hero.gif'}
            height={400}
            width={400}
            alt="Hero"
            className="mx-auto"
          />
        </div>
      </section>
      <section className=" mt-44 max-w-7xl mx-auto ">
        <h1 className="mx-auto text-center  text-orange-950 font-extrabold text-7xl">
          FAQ
        </h1>
        <div className="flex items-center">
          <div className="box w-2/3 p-4 uppercase ">
            <Accordion
              title="Where I Can Learn About SeiGhost?"
              content={
                <div className="text-orange-950 font-extrabold text-xl flex my-5">
                  <p>Join ABRARXUS in out</p>
                  <a
                    href="https://discord.com"
                    className="underline text-orange-700 hover:opacity-70 mx-2"
                  >
                    discord
                  </a>
                  <p>and inquire about anything you`d like!</p>
                </div>
              }
              isOpen={openAccordion === 1}
              onToggle={() => handleToggleAccordion(1)}
            />
            <Accordion
              title="WHAT IS THE VISION OF SEIAVATARS?"
              content={
                <div className="text-orange-950 font-extrabold text-xl flex my-5">
                  <p>
                    Seiavatars are an access token to a living ecosystem. At the
                    heart of SeiAvatars lies a distinct ethos where branding,
                    intellectual property (IP), and community take center stage.
                    Our belief is that our brand extends beyond the visuals,
                    immersing into narrative and shared identity.
                  </p>
                </div>
              }
              isOpen={openAccordion === 2}
              onToggle={() => handleToggleAccordion(2)}
            />
            <Accordion
              title="WHERE CAN I BUY A SEIAVATAR?"
              content={
                <div className="text-orange-950 font-extrabold text-xl flex my-5">
                  <p>We are listed</p>
                  <a
                    href="https://discord.com"
                    className="underline text-orange-700 hover:opacity-70 mx-2"
                  >
                    Pallete exchange
                  </a>
                </div>
              }
              isOpen={openAccordion === 3}
              onToggle={() => handleToggleAccordion(3)}
            />
          </div>
          <div className="box 1/3">
            <Image
              src={'/images/hero.gif'}
              height={400}
              width={400}
              alt="Hero"
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="my-44 max-w-5xl mx-auto">
        <div className="text-center font-extrabold text-orange-950 text-7xl uppercase">
          <h1>Team</h1>
        </div>

        <div className="grid grid-cols-2 gap-8 align-center items-center mt-8 mx-auto">
          <div className="items-center align-middle justify-center">
            <Image
              src={'/images/1.jpg'}
              width={200}
              height={200}
              alt="Team Member 1"
              className="rounded-full w-72 h-72  mx-auto"
            />

            <div className="text-center text-orange-950">
              <p className="font-extrabold text-4xl my-3">Messi</p>
              <p className="font-bold text-2xl opacity-60">RWF</p>
              <a href="/" style={{ cursor: 'url(/images/cursor.png), auto' }}>
                <RiTwitterXFill
                  className="text-4xl mx-auto hover:opacity-50 "
                  style={{ cursor: 'url(/images/cursor.png), auto' }}
                />
              </a>
            </div>
          </div>

          <div className="items-center">
            <Image
              src={'/images/1.jpg'}
              width={200}
              height={200}
              alt="Team Member 2"
              className="rounded-full w-72 h-72  mx-auto"
            />

            <div className="text-center text-orange-950">
              <p className="font-extrabold text-4xl my-3">Neymar</p>
              <p className="font-bold text-2xl opacity-60">LWF</p>
              <a href="/" style={{ cursor: 'url(/images/cursor.png), auto' }}>
                <RiTwitterXFill
                  className="text-4xl mx-auto hover:opacity-50 "
                  style={{ cursor: 'url(/images/cursor.png), auto' }}
                />
              </a>
            </div>
          </div>
          <div className="items-center">
            <Image
              src={'/images/1.jpg'}
              width={200}
              height={200}
              alt="Team Member 2"
              className="rounded-full w-72 h-72  mx-auto"
            />

            <div className="text-center text-orange-950">
              <p className="font-extrabold text-4xl my-3">Pele</p>
              <p className="font-bold text-2xl opacity-60">CF</p>
              <a href="/" style={{ cursor: 'url(/images/cursor.png), auto' }}>
                <RiTwitterXFill
                  className="text-4xl mx-auto hover:opacity-50 "
                  style={{ cursor: 'url(/images/cursor.png), auto' }}
                />
              </a>
            </div>
          </div>
          <div className="items-center">
            <Image
              src={'/images/1.jpg'}
              width={200}
              height={200}
              alt="Team Member 2"
              className="rounded-full w-72 h-72  mx-auto"
            />

            <div className="text-center text-orange-950">
              <p className="font-extrabold text-4xl my-3">Naruto</p>
              <p className="font-bold text-2xl opacity-60">Boruto`s Father</p>
              <a href="/" style={{ cursor: 'url(/images/cursor.png), auto' }}>
                <RiTwitterXFill
                  className="text-4xl mx-auto hover:opacity-50 "
                  style={{ cursor: 'url(/images/cursor.png), auto' }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContainerHome;
