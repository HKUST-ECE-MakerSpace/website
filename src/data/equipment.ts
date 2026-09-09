/**
 * Facilities & equipment — the six categories shown on the old Explore page
 * (accordion panels), with the photos ported from wp-content/uploads/2026/08.
 * Panel titles normalized to title case; equipment list unchanged.
 */
export interface EquipmentPhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface EquipmentCategory {
  id: string;
  title: string;
  blurb: string;
  photos: EquipmentPhoto[];
}

export const equipment: EquipmentCategory[] = [
  {
    id: "3d-printers",
    title: "3D Printers",
    blurb: "A farm of FDM printers for fast prototyping — queue a print and keep building.",
    photos: [
      {
        src: "/images/equipment-3d-printers-p1s.png",
        width: 1600,
        height: 900,
        alt: "Row of Bambu Lab P1S 3D printers in the MakerSpace printer farm",
      },
      {
        src: "/images/equipment-3d-printers-h2c.png",
        width: 1600,
        height: 900,
        alt: "Row of Bambu Lab H2C 3D printers in the MakerSpace printer farm",
      },
    ],
  },
  {
    id: "laser-cutters",
    title: "Laser Cutters",
    blurb: "Cut and engrave sheet materials with precision — from acrylic to plywood.",
    photos: [
      {
        src: "/images/equipment-laser-cutters.png",
        width: 1600,
        height: 900,
        alt: "Laser cutter workstation at the ECE MakerSpace",
      },
    ],
  },
  {
    id: "resin-printers",
    title: "Resin Printers",
    blurb: "High-detail resin printing when a fine surface finish matters.",
    photos: [
      {
        src: "/images/equipment-resin-printers.png",
        width: 1600,
        height: 900,
        alt: "Resin 3D printers on a bench at the ECE MakerSpace",
      },
    ],
  },
  {
    id: "oscilloscopes",
    title: "Oscilloscopes",
    blurb: "Bench oscilloscopes for debugging circuits and probing signals.",
    photos: [
      {
        src: "/images/equipment-oscilloscopes.png",
        width: 1600,
        height: 900,
        alt: "Oscilloscope bench with test instruments at the ECE MakerSpace",
      },
    ],
  },
  {
    id: "signal-power",
    title: "Signal Generator & Power Supply",
    blurb: "Bench signal generators and power supplies to drive and test your circuits.",
    photos: [
      {
        src: "/images/equipment-signal-power.png",
        width: 1600,
        height: 900,
        alt: "Signal generators and DC power supplies on the test bench",
      },
    ],
  },
  {
    id: "mechanical",
    title: "Mechanical Equipment",
    blurb: "A mechanical workspace with the tools to cut, drill and assemble your build.",
    photos: [
      {
        src: "/images/equipment-mechanical.png",
        width: 1600,
        height: 900,
        alt: "Mechanical workspace with tools and machinery at the ECE MakerSpace",
      },
    ],
  },
];
