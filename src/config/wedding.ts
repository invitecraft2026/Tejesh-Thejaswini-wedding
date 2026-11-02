/**
 * CENTRAL WEDDING CONFIGURATION
 * Every editable detail of the invitation lives here.
 */

export type WeddingEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  icon: "crescent" | "rings" | "lantern" | "dinner";
};

export const wedding = {
  bride: {
    firstName: "Thejaswini",
    fullName: "K.P. Thejaswini",
    parents: "Daughter of Smt. N. Saralamma & Sri N. Parandaman",
  },

  groom: {
    firstName: "Tejesh",
    fullName: "N. Tejesh (Rajesh)",
    parents: "Son of Smt. N. Bhushanamma & Sri N. Venkatesh",
  },

  initials: "T & T",

  /** Human readable date + time */
  date: "Sunday, 15 November 2026",

  dayName: "Sunday",
  dayNumber: "15",
  monthName: "November",
  year: "2026",

  time: "5:30 AM – 6:30 AM",

  /** Used by countdown + calendar (IST) */
  dateISO: "2026-11-15T05:30:00+05:30",
  endISO: "2026-11-15T06:30:00+05:30",

  welcomeLine: "Together with our families",

  welcomeTitle: "Wedding Ceremony",

  welcomeJoin: "of",

  /** Extra details from the card */
  familyName: "Neerugatti Vari",
  blessings: ["Sri Rasthu", "Subhamasthu", "Kalyanamasthu"],
  blessingLine: "Kanipakam Varasiddi Vinayakaswamy Prassanam",
  lagnam: "Thula Lagnam",
  hosts: {
    names: "Smt. N. Bhushanamma & Sri N. Venkatesh",
    address: "Danduvaripalli, Bangarupalyam (M), Chittoor Dist.",
  },
  brideFamilyAddress: "Patrapalli, Thavanampalli (M), Chittoor Dist.",
  qualifications: "B.Tech.",
  contacts: ["8008321107", "9959052677"],

  venue: {
    name: "SLV Kalyana Mandapam",
    address: "Aragonda Road, Bangaraupalyam, Chittoor",
    mapsQuery: "SLV Kalyana Mandapam, Aragonda Road, Bangarupalyam, Chittoor",
  },

  events: [
    {
      id: "reception",
      title: "Reception & Dinner",
      date: "Saturday, 14 November 2026",
      time: "7:00 PM onwards",
      venue: "SLV Kalyana Mandapam",
      icon: "dinner",
    },

    {
      id: "muhurtham",
      title: "Muhurtham",
      date: "Sunday, 15 November 2026",
      time: "5:30 AM – 6:30 AM (Thula Lagnam)",
      venue: "SLV Kalyana Mandapam",
      icon: "rings",
    },
  ] satisfies WeddingEvent[],

  dressCode: {
    description:
      "We invite you to celebrate with us in elegant traditional attire inspired by warm, romantic and earthy tones.",

    colors: [
      { name: "Ivory", hex: "#F8F3E9" },
      { name: "Champagne", hex: "#D9C19C" },
      { name: "Dusty Rose", hex: "#CFA6A3" },
      { name: "Burgundy", hex: "#6B2637" },
      { name: "Mauve", hex: "#A8808A" },
      { name: "Sage", hex: "#A8B09A" },
      { name: "Warm Brown", hex: "#7A5A48" },
    ],
  },

  invitationMessage:
    "We solicit your gracious presence with family and friends on the auspicious occasion of the marriage of our only son.",

  quote: "Sri Rasthu · Subhamasthu · Kalyanamasthu",

  guestInformation: [
    {
      title: "Arrival",
      body: "The Muhurtham is between 5:30 and 6:30 AM. We kindly request our guests to arrive in good time before the ceremony begins.",
    },

    {
      title: "Dress Code",
      body: "Elegant traditional or formal attire in soft earthy, burgundy, champagne and neutral tones is warmly encouraged.",
    },

    {
      title: "Family",
      body: "Families and children are warmly welcome to join us in celebrating this beautiful occasion.",
    },

    {
      title: "Parking",
      body: "Guest parking will be available at the venue. Venue staff will be present to assist you on arrival.",
    },

    {
      title: "Photography",
      body: "We would love for you to enjoy the ceremony with us. Kindly avoid flash photography during the Muhurtham.",
    },

    {
      title: "Gifts",
      body: "Your presence and blessings are the greatest gifts we could ask for.",
    },
  ],

  /** Optional background music */
  musicSrc: "/A thousend years.mp4",

  footer: {
    signOff: "With best compliments from,",
    thanks: "Friends & Relatives",
  },
} as const;

export type Wedding = typeof wedding;