import venueImg from "@/assets/venue.jpg";
import { wedding } from "@/config/wedding";
import { mapsDirectionsUrl } from "@/utils/calendar";

import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

/** Strong, soft shadow so text stays readable on any background */
const textShadow = {
  textShadow:
    "0 1px 3px rgba(0,0,0,0.85), 0 2px 12px rgba(0,0,0,0.7), 0 0 28px rgba(0,0,0,0.55)",
};

export function VenueSection() {
  return (
    <section
      className="relative bg-transparent px-5 py-20"
      style={{
        background: "transparent",
        backgroundColor: "transparent",
        backgroundImage: "none",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        boxShadow: "none",
      }}
    >
      <div className="relative mx-auto max-w-md">
        <Reveal>
          <SectionHeading
            eyebrow="Where we celebrate"
            title="The Venue"
            script
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="
              mt-10
              overflow-hidden
              rounded-xl
              border
              border-white/40
              bg-transparent
              p-2
              shadow-[0_10px_30px_rgba(0,0,0,0.30)]
            "
          >
            <img
              src={venueImg}
              alt="Wedding venue"
              loading="lazy"
              width={1024}
              height={768}
              className="h-52 w-full rounded-lg object-cover sm:h-60"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-6 text-center">
            <h3
              style={textShadow}
              className="text-xl font-semibold uppercase leading-snug tracking-[0.15em] text-[#fff4ea] sm:text-2xl"
            >
              {wedding.venue.name}
            </h3>

            <p
              style={textShadow}
              className="mt-3 text-base font-medium leading-relaxed text-[#f3dfb4] sm:text-lg"
            >
              {wedding.venue.address}
            </p>

            <a
              href={mapsDirectionsUrl(wedding.venue.mapsQuery)}
              target="_blank"
              rel="noreferrer"
              className="
                mt-6
                inline-block
                rounded-md
                border
                border-[#e8c996]
                bg-[#571d2b]/90
                px-8
                py-3.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#fff8ef]
                shadow-[0_6px_20px_rgba(0,0,0,0.40)]
                transition-all
                duration-300
                hover:bg-[#571d2b]
                sm:text-sm
              "
            >
              Get Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}