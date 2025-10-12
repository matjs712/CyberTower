"use client";

import {
  SiApple,
  SiFacebook,
  SiGithub,
  SiGoogle,
  SiInstagram,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { MarqueeItem, Marquee, MarqueeContent, MarqueeFade } from "./marquee";
import { Mail, MessageCircle, MessageCircleCode } from "lucide-react";
import Image from "next/image";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

const logos = [
  {
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com",
  },
  {
    name: "Facebook",
    icon: SiFacebook,
    url: "https://facebook.com",
  },
  {
    name: "Google",
    icon: SiGoogle,
    url: "https://google.com",
  },
  {
    name: "X",
    icon: SiX,
    url: "https://x.com",
  },
  {
    name: "Apple",
    icon: SiApple,
    url: "https://apple.com",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    url: "https://instagram.com",
  },
  {
    name: "YouTube",
    icon: SiYoutube,
    url: "https://youtube.com",
  },
];

const Hero = () => (
  <div className="flex flex-col gap-16 px-8 py-6 text-center">
    <section className="relative flex h-[90vh] flex-col items-center justify-center overflow-hidden rounded-2xl bg-transparent px-6 text-left text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl space-y-6"
      >
        <h1 className="text-balance text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl bg-gradient-to-r from-secondary-light-color to-white bg-clip-text text-transparent">
          Amplify Your Brand with
          <br /> Cutting-Edge Digital Marketing
        </h1>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"></div>

        {/* Reseñas (opcional) */}
        <div className="w-full mt-6 flex flex-row items-center justify-between text-sm text-gray-400">
          {/* Izquierda */}
          <div className="flex-1 flex flex-col max-w-xs gap-2">
            <div className="flex flex-row gap-3 items-center text-secondary-light-color">
              <LinkedInLogoIcon className="size-6" />
              <MessageCircleCode className="size-6" />
              <Mail className="size-6" />
            </div>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio officia eum delectus ipsum ducimus earum perferendis
              enim beatae, saepe consequuntur corporis eligendi, blanditiis
            </span>
          </div>

          {/* Derecha */}
          <div className="flex-1 max-w-lg ">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              ipsa impedit provident debitis! Ut odit eligendi ab blanditiis
              architecto esse, illum quasi explicabo atque qui eum. Perspiciatis
              asperiores quaerat soluta beatae, fugiat corporis magnam sed
            </span>

            <div className="flex justify-start flex-row gap-4 items-center mt-4">
              <Button
                variant={"default"}
                className="rounded-full px-1 bg-neutral-700 w-fit"
                asChild
              >
                <a href={""} className="flex flex-row gap-2 px-1">
                  <div className="bg-secondary-light-color p-2 rounded-full">
                    <MessageCircle className="size-5" />
                  </div>
                  <div className="pr-2">Contáctanos</div>
                </a>
              </Button>

              <div className="flex -space-x-3 ">
                <Image
                  width={32}
                  height={32}
                  src="/user.jpg"
                  alt=""
                  className="size-8 rounded-full border-2 border-secondary-light-color object-cover"
                />
                <Image
                  width={32}
                  height={32}
                  src="/user-1.jpg"
                  alt=""
                  className="size-8 rounded-full border-2 border-blue-400 object-cover"
                />
                <Image
                  width={32}
                  height={32}
                  src="/user.jpg"
                  alt=""
                  className="size-8 rounded-full border-2 border-blue-400 object-cover"
                />
              </div>

              <div className="text-white">
                <span>
                  2.7k+ Positive <br /> Reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>

    <section className="flex flex-col items-center justify-center gap-8 rounded-xl bg-secondary py-8 pb-18">
      <p className="mb-0 text-balance font-medium text-muted-foreground">
        Trusted by developers from leading companies
      </p>
      <div className="flex size-full items-center justify-center">
        <Marquee>
          <MarqueeFade className="from-secondary" side="left" />
          <MarqueeFade className="from-secondary" side="right" />
          <MarqueeContent pauseOnHover={false}>
            {logos.map((logo) => (
              <MarqueeItem className="mx-16 size-12" key={logo.name}>
                <Link href={logo.url}>
                  <logo.icon className="size-full" />
                </Link>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </section>
  </div>
);

export default Hero;
