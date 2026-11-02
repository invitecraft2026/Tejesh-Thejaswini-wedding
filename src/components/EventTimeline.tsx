import { wedding, type WeddingEvent } from "@/config/wedding";

import archIllustration from "@/assets/timeline-arch.png";
import mehndiIllustration from "@/assets/timeline-mehndi.png";
import ringsIllustration from "@/assets/timeline-rings.png";
import dinnerIllustration from "@/assets/timeline-dinner.png";

import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

const illustrationByIcon: Record<WeddingEvent["icon"], string> = {
  crescent: archIllustration,
  rings: ringsIllustration,
  lantern: mehndiIllustration,
  dinner: dinnerIllustration,
};

/** Strong, soft shadow so text stays readable on any background */
const textShadow = {
  textShadow:
    "0 1px 3px rgba(0,0,0,0.85), 0 2px 12px rgba(0,0,0,0.7), 0 0 28px rgba(0,0,0,0.55)",
};

function EventInfo({
  event,
  align,
}: {
  event: WeddingEvent;
  align: "left" | "right";
}) {
  return (
    <div
      className={
        align === "left" ? "pl-3 text-left" : "pr-3 text-right"
      }
    >
      <p
        style={textShadow}
        className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#fff4ea] sm:text-xs"
      >
        {event.date}
      </p>

      <p
        style={textShadow}
        className="font-script mt-1 text-2xl leading-tight text-[#f3dfb4] sm:text-3xl"
      >
        {event.time}
      </p>

      <h3
        style={textShadow}
        className="mt-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#fff4ea] sm:text-base"
      >
        {event.title}
      </h3>

      <p
        style={textShadow}
        className="mt-1.5 text-xs font-medium leading-snug text-[#fff4ea] sm:text-sm"
      >
        {event.venue}
      </p>
    </div>
  );
}

function EventImage({
  event,
  align,
}: {
  event: WeddingEvent;
  align: "start" | "end";
}) {
  return (
    <div
      className={
        align === "end" ? "flex justify-end pr-3" : "flex justify-start pl-3"
      }
    >
      <img
        src={illustrationByIcon[event.icon]}
        alt=""
        className="
          h-28
          w-28
          object-contain
          drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]
          sm:h-32
          sm:w-32
        "
      />
    </div>
  );
}

export function EventTimeline() {
  return (
    <section
      className="relative bg-transparent px-5 py-20"
      style={{
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
            eyebrow="The celebrations"
            title="Wedding Timeline"
            script
          />
        </Reveal>

        <div className="relative mt-14">
          {/* Center vertical line */}
          <span className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-champagne to-transparent" />

          <div className="flex flex-col gap-14">
            {wedding.events.map((event, i) => {
              const imageLeft = i % 2 === 0;

              return (
                <Reveal key={event.id} delay={i * 0.08}>
                  <div className="relative grid grid-cols-2 items-center gap-4">
                    {/* Center diamond marker */}
                    <span
                      className="
                        absolute
                        top-1/2
                        left-1/2
                        h-3
                        w-3
                        -translate-x-1/2
                        -translate-y-1/2
                        rotate-45
                        border
                        border-champagne
                        bg-[#6b2b38]
                        shadow-[0_0_8px_rgba(217,192,156,0.6)]
                      "
                    />

                    {imageLeft ? (
                      <>
                        <EventImage event={event} align="end" />
                        <EventInfo event={event} align="left" />
                      </>
                    ) : (
                      <>
                        <EventInfo event={event} align="right" />
                        <EventImage event={event} align="start" />
                      </>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}