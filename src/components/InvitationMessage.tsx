import { wedding } from "@/config/wedding";

import { Divider } from "./Ornament";
import { Reveal } from "./Reveal";

/** Strong, soft shadow so text stays readable on any background */
const textShadow = {
  textShadow:
    "0 1px 3px rgba(0,0,0,0.85), 0 2px 12px rgba(0,0,0,0.7), 0 0 28px rgba(0,0,0,0.55)",
};

export function InvitationMessage() {
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
      <div className="relative mx-auto max-w-md text-center">
        <Reveal>
          <p
            style={textShadow}
            className="text-xs font-semibold uppercase leading-relaxed tracking-[0.2em] text-[#fff4ea] sm:text-sm"
          >
            You are invited to the
            <br />
            {wedding.welcomeTitle} of
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h3
            style={textShadow}
            className="font-script mt-6 text-6xl leading-none text-[#fff4ea] sm:text-7xl"
          >
            {wedding.bride.firstName}
          </h3>

          <p
            style={textShadow}
            className="mx-auto mt-3 max-w-[20rem] text-sm font-medium leading-snug tracking-wide text-[#fff4ea] sm:text-base"
          >
            {wedding.bride.parents}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <span
            style={textShadow}
            className="font-script mt-4 block text-3xl text-[#f3dfb4]"
          >
            with
          </span>
        </Reveal>

        <Reveal delay={0.2}>
          <h3
            style={textShadow}
            className="font-script mt-3 text-6xl leading-none text-[#fff4ea] sm:text-7xl"
          >
            {wedding.groom.firstName}
          </h3>

          <p
            style={textShadow}
            className="mx-auto mt-3 max-w-[20rem] text-sm font-medium leading-snug tracking-wide text-[#fff4ea] sm:text-base"
          >
            {wedding.groom.parents}
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <Divider className="mt-8" />

          <p
            style={textShadow}
            className="mt-6 text-base font-medium leading-relaxed text-[#fff4ea] sm:text-lg"
          >
            {wedding.invitationMessage}
          </p>

          <p
            style={textShadow}
            className="mt-6 text-sm font-medium italic leading-relaxed tracking-wide text-[#f3dfb4] sm:text-base"
          >
            {wedding.quote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}