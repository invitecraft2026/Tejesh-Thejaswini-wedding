import { motion } from "framer-motion";

import { wedding } from "@/config/wedding";

/** Strong, soft shadow so text stays readable on any background */
const textShadow = {
  textShadow:
    "0 1px 3px rgba(0,0,0,0.85), 0 2px 12px rgba(0,0,0,0.7), 0 0 28px rgba(0,0,0,0.55)",
};

export function HeroSection({ start }: { start: boolean }) {
  return (
    <section
      className="
        relative
        w-full
        min-h-[100svh]
        bg-transparent
      "
    >
      <div
        className="
          relative
          flex
          min-h-[100svh]
          flex-col
          items-center
          justify-between
          px-5
          py-14
          text-center
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: start ? 1 : 0,
            y: start ? 0 : 16,
          }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative isolate mx-auto max-w-md px-4 py-6"
        >
          {/* Soft dark glow behind the text for contrast */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-6 -inset-y-4 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(22,8,14,0.6)_0%,rgba(22,8,14,0.38)_50%,transparent_75%)]"
          />

          <p
            style={textShadow}
            className="tracking-luxe text-xs font-medium uppercase text-[#fff4ea] sm:text-sm"
          >
            {wedding.welcomeLine}
          </p>

          <h1
            style={textShadow}
            className="font-script mt-3 text-5xl leading-[1.05] text-[#f3dfb4] sm:text-6xl"
          >
            {wedding.welcomeTitle}
          </h1>

          <p
            style={textShadow}
            className="mt-2 text-sm italic tracking-wide text-[#fff4ea]"
          >
            {wedding.welcomeJoin}
          </p>

          <div className="mt-4 flex flex-col items-center">
            {/* Groom */}
            <h2
              style={textShadow}
              className="font-script text-6xl leading-none text-[#fff4ea] sm:text-7xl"
            >
              {wedding.groom.firstName}
            </h2>

            <p
              style={textShadow}
              className="mt-2 max-w-[20rem] text-sm font-medium leading-snug tracking-wide text-[#fff4ea] sm:text-base"
            >
              {wedding.groom.parents}
            </p>

            <span
              style={textShadow}
              className="font-script my-2 text-3xl text-[#f3dfb4] sm:text-4xl"
            >
              &amp;
            </span>

            {/* Bride */}
            <h2
              style={textShadow}
              className="font-script text-6xl leading-none text-[#fff4ea] sm:text-7xl"
            >
              {wedding.bride.firstName}
            </h2>

            <p
              style={textShadow}
              className="mt-2 max-w-[20rem] text-sm font-medium leading-snug tracking-wide text-[#fff4ea] sm:text-base"
            >
              {wedding.bride.parents}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: start ? 1 : 0,
          }}
          transition={{
            duration: 1,
            delay: 0.9,
          }}
          className="mx-auto max-w-sm"
        >
          <p
            style={textShadow}
            className="mt-10 text-xs font-medium uppercase tracking-[0.28em] text-[#fff4ea]"
          >
            Scroll to discover
          </p>

          <motion.svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            aria-hidden
            className="mx-auto mt-2 text-[#f3dfb4] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
            animate={
              start
                ? {
                    y: [0, 6, 0],
                  }
                : {
                    y: 0,
                  }
            }
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path
              d="M6 9l6 6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}