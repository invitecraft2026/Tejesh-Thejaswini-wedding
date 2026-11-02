import { useEffect, useState } from "react";
import { wedding } from "@/config/wedding";

import { Reveal } from "./Reveal";
import { CornerFrame, SectionHeading } from "./Ornament";

/** Strong, soft shadow so text stays readable on any background */
const textShadow = {
  textShadow:
    "0 1px 3px rgba(0,0,0,0.85), 0 2px 12px rgba(0,0,0,0.7), 0 0 28px rgba(0,0,0,0.55)",
};

function getTimeLeft(targetDate: string) {
  const target = new Date(targetDate).getTime();

  if (Number.isNaN(target)) {
    console.error("Invalid wedding date:", targetDate);

    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const now = Date.now();
  const difference = target - now;

  if (difference <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  const seconds = Math.floor((difference / 1000) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

function TimeUnit({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p
        style={textShadow}
        className="text-4xl font-medium tabular-nums tracking-wide text-[#f3dfb4] sm:text-5xl"
      >
        {value}
      </p>

      <p
        style={textShadow}
        className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#fff4ea] sm:text-xs"
      >
        {label}
      </p>
    </div>
  );
}

export function SaveTheDate() {
  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeLeft(wedding.dateISO)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(wedding.dateISO));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-transparent px-5 py-20"
      style={{
        background: "transparent",
        backgroundColor: "transparent",
        backgroundImage: "none",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        boxShadow: "none",
      }}
    >
      <div className="relative mx-auto max-w-md text-center">
        <CornerFrame />

        <Reveal>
          <SectionHeading title="The Celebration Begins" script />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10">
            <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-4">
              <TimeUnit value={timeLeft.days} label="Days" />
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <TimeUnit value={timeLeft.minutes} label="Minutes" />
              <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            style={textShadow}
            className="mt-8 text-center text-base font-medium leading-relaxed text-[#fff4ea] sm:text-lg"
          >
            {wedding.date}
            <br />
            {wedding.time} · {wedding.lagnam}
          </p>
        </Reveal>
      </div>
    </section>
  );
}