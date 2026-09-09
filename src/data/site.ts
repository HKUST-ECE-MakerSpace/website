/**
 * Central site facts — ported verbatim from maker.ece.hkust.edu.hk
 * (see the content inventory extracted 2026-09-09).
 */
export const site = {
  name: "HKUST ECE MakerSpace",
  shortName: "ECE MakerSpace",
  tagline: "The Dream Workshop for Big Ideas",
  url: "https://web.ecemaker.space",
  email: "ecemakers@ust.hk",
  description:
    "The HKUST ECE MakerSpace is a student workshop in Room 3125A with 3D printers, laser cutters, resin printers, oscilloscopes and a mechanical workspace. Membership is free, with no selection process.",
  links: {
    wiki: "https://wiki.ecemaker.space/",
    wikiBanks: "https://wiki.ecemaker.space/docs/banks",
    joinForm:
      "https://forms.cloud.microsoft/pages/responsepage.aspx?id=UkEdbNA5ykSI2bjW3coHCJnvSzhQwDtNmnPrLLIob19UMDFJSzY3MUhEU1ZOT083WVpWNjgwM0FVUCQlQCN0PWcu&route=shorturl",
    policyPdf:
      "https://ust.az1.qualtrics.com/WRQualtricsSurveyEngine/File.php?F=F_d3XzgLc2bkJO2x0",
    directions:
      "https://pathadvisor.ust.hk/from/ROOM%203125A;MH-vRAASsJIw;3;2442,460/to/floor/3/at/normalized/2442,460,3",
    calendar: "https://eez156.ece.ust.hk/makerspace-utils/#/calendar",
    instagram: "https://www.instagram.com/hkust/",
    linkedin: "https://www.linkedin.com/school/hkust/",
    hkust: "https://www.ust.hk",
    eceDept: "https://www.ece.ust.hk",
    privacy: "https://dataprivacy.ust.hk/university-data-privacy-policy-statement/",
  },
  dept: {
    name: "Department of Electronic and Computer Engineering",
    lines: [
      "Room 2457, 2/F (via Lift 25/26)",
      "Hong Kong University of Science and Technology",
      "Clear Water Bay",
      "Kowloon, Hong Kong",
    ],
  },
  space: {
    lines: ["Room 3125A", "LIFT 22, Main Campus"],
  },
  /** Exact wording from the old homepage. */
  eligibility:
    "Membership is reserved for ECE Students (ELEC, MEIC & CPEG) and Year 1 Undeclared Major Students",
} as const;

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "Explore", href: "/explore" },
  { label: "Events", href: "/events" },
  { label: "Community", href: "/community" },
  { label: "Wiki", href: site.links.wiki, external: true },
  { label: "FAQ", href: "/faq" },
];
