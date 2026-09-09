/**
 * All 19 FAQ pairs, ported verbatim from /faq/ (WordPress id 2385).
 * Wording is unchanged; the old site's broken internal links are repaired
 * (Explore -> /explore, Events -> /events, Join Us -> /join) and its dead
 * WhatsApp/Discord anchors are rendered as plain emphasis.
 * `<hl>` marks text the old page rendered in red/orange.
 */
export interface FaqItem {
  q: string;
  /** HTML answer body. */
  a: string;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

export const faqGroups: FaqGroup[] = [
  {
    title: "Membership & eligibility",
    items: [
      {
        q: "What is ECE MakerSpace, and who is it for?",
        a: "ECE MakerSpace is a student organization affiliated with the Department of Electronics and Computer Engineering. It is open to all members of the ECE department, including students majoring in ELEC, MEIC, or CPEG, as well as ECE students who have not yet declared a major.",
      },
      {
        q: "How can I join ECE MakerSpace?",
        a: 'There is no membership fee or selection process. Simply visit the <a href="/join">Join Us</a> page and complete the sign-up form. After signing up, you will need to complete the introductory ELEC 0001 course and participate in two induction training workshops. Once you complete these requirements, you can become a MakerSpace member.',
      },
      {
        q: "Can students from outside the ECE department use MakerSpace?",
        a: "Yes, but only when they are working as part of a team with a MakerSpace member. The MakerSpace member must be present with them while they are working in the space.",
      },
      {
        q: "Do I have to remain a MakerSpace member once I join?",
        a: "No. There are no ongoing membership requirements. If you decide that you no longer want to remain a member, you can simply choose to leave.",
      },
      {
        q: "How will I know when I officially become a member?",
        a: "Once you have completed the required induction training, you will receive an email confirming your membership. Your HKUST student card will also be added to our access database.",
      },
      {
        q: "How can I become more involved in MakerSpace?",
        a: "Keep an eye out for our recruitment announcements! We regularly recruit students for Helper (<span class=\"hl\">orange</span>) and Executive Committee (<span class=\"hl\">orange</span>) positions. If you are interested in taking a more active role in MakerSpace, watch for our recruitment postings and apply.",
      },
    ],
  },
  {
    title: "Using the space",
    items: [
      {
        q: "What can I do at MakerSpace?",
        a: 'MakerSpace is the dream workshop for your big ideas. Whether you want to build a prototype, work on a personal project, or bring an idea to life, MakerSpace provides the tools and facilities to help you make it happen. Our facilities include 3D printers, resin printers, laser cutters, a mechanical workspace, a CAM station, and a wide range of components. Check out our <a href="/explore">Explore</a> page to learn more.',
      },
      {
        q: "Do I need prior experience to use MakerSpace?",
        a: "No prior experience is required. As part of the induction process, you will receive training on how to safely use most of the equipment available at MakerSpace.",
      },
      {
        q: "When is MakerSpace open? Can I use it outside of opening hours?",
        a: 'MakerSpace is open from <span class="hl">9:00 AM to 5:30 PM on weekdays</span>, except public holidays. You can use any available equipment without booking, as long as it is not already being used. If you wish to stay or work at MakerSpace outside of opening hours, an Executive Committee member must be present with you.',
      },
      {
        q: "Where is ECE MakerSpace located?",
        a: 'ECE MakerSpace is located in <span class="hl">Room 3125A</span> on the Main Campus.',
      },
      {
        q: "Can I work on my own personal projects at MakerSpace?",
        a: "Yes! MakerSpace is open for you to work on your own personal projects and ideas.",
      },
      {
        q: "Can I collaborate with other MakerSpace members on a project?",
        a: "Absolutely! MakerSpace is a great place to meet other students, form teams, and collaborate on projects.",
      },
      {
        q: "Can I use MakerSpace during semester breaks?",
        a: "Yes! MakerSpace can be used throughout the year, including during semester breaks, as long as it is within our regular opening hours on weekdays and is not a public holiday.",
      },
    ],
  },
  {
    title: "Safety & equipment",
    items: [
      {
        q: "What safety rules do I need to follow?",
        a: "Basic electronic and laboratory safety rules apply. Always be aware of your surroundings and never attempt anything that could put yourself or others at risk. The introductory ELEC 1000 course also provides training on laboratory safety.",
      },
      {
        q: "What should I do if I damage equipment or break something?",
        a: "Let an Executive Committee member know immediately. There is no penalty system, but it is important that we know about any damage or issues so that we can address and fix them as soon as possible.",
      },
    ],
  },
  {
    title: "Community, events & activities",
    items: [
      {
        q: "Can someone at MakerSpace help me with my project?",
        a: "Absolutely! If you have an idea or project and are not sure how to build it, reach out to one of our Executive Committee members. We will do our best to help you bring your idea to life.",
      },
      {
        q: "How can I stay connected with MakerSpace?",
        a: "Once you become a member, you can join our <strong>WhatsApp Community</strong> and <strong>Discord server</strong>, where members actively communicate, collaborate, and share updates.",
      },
      {
        q: "Does MakerSpace organize workshops and events?",
        a: 'Yes! We regularly host enrichment workshops covering a range of electronics and engineering topics, from PCB design to soldering. Head over to our <a href="/events">Events</a> page to see our upcoming workshops and activities.',
      },
      {
        q: "Can I suggest or lead a workshop or activity?",
        a: "Definitely! If you have an idea for a workshop, event, or activity, reach out to the Executive Committee. You may even have the opportunity to lead it yourself!",
      },
    ],
  },
];
