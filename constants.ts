import { TimelineItem } from './types';

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'buzzsaw',
    year: 'circa 1998 — 2010s',
    title: 'Buzzsaw: a Primordial Ooze',
    oldName: 'Physical Blueprints',
    newName: 'Buzzsaw',
    description: 'The first "cloud" (though we called it ASP back then) project management software. It was revolutionary, which in 1998 meant it took 20 minutes to download a PDF.',
    snark: '',
    color: 'accent-orange',
    references: [
      {
        quote: "We are the first company in our space to really try to leverage the internet... it's about connecting all the participants in the construction process and changing the way an industry works.",
        label: "Carol Bartz, Stanford 2001: The Concept Behind Buzzsaw",
        url: "https://stvp.stanford.edu/videos/the-concept-behind-buzzsaw-com/"
      },
      {
        quote: "The combination of Autodesk and Buzzsaw.com provides our customers with the best of both worlds -- the leading design and project collaboration tools together with the leading project management services for the building industry.",
        label: "Autodesk to Purchase Buzzsaw.com (July 2001)",
        url: "https://investors.autodesk.com/news-releases/news-release-details/autodesk-signs-definitive-agreement-purchase-buzzsawcom-leading"
      }
    ]
  },
  {
    id: 'a360',
    year: 'circa 2013 — 2015',
    title: 'A360: The Circle Begins',
    oldName: 'Buzzsaw / FTP',
    newName: 'A360 / A360 Drive',
    description: 'Autodesk decides that "360" is the magic number. A360 was supposed to be the one-stop shop for all your files, until it wasn\'t.',
    snark: '',
    color: 'accent-cyan',
    references: [
      {
        quote: "A360 is a project-based collaboration solution that helps individuals and teams who are working together on a project to efficiently communicate and collaborate.",
        label: "About A360 Help Documentation",
        url: "https://help.autodesk.com/view/ADSK360/ENU/?guid=GUID-20B332B9-B8B7-4C22-81C0-C90FB8F781E9"
      },
      {
        quote: "Use A360 to store, share, and view your 2D and 3D design files. You can access your files from any device and collaborate with your team members in one central location.",
        label: "A360: Getting Started Guide",
        url: "https://help.autodesk.com/view/ADSK360/ENU/?guid=GUID-F0E045B6-EE5F-499C-85D2-F8041BC9F293"
      }
    ]
  },
  {
    id: 'bim360',
    year: 'circa 2015 — 2020',
    title: 'BIM 360: a Suite is Born',
    oldName: 'A360 Team',
    newName: 'BIM 360 (Docs, Glue, Field, etc.)',
    description: 'The "Classic" era. A suite of products so large that IT managers needed a second IT manager just to manage the subscriptions.',
    tip: 'To access the drawing you just viewed in BIM 360 Docs, please switch to BIM 360 Field, then log into PlanGrid via the BIM 360 Glue integration.',
    snark: '',
    color: 'accent-magenta',
    references: [
      {
        quote: "Autodesk has officially launched the ‘next generation’ of its BIM 360 construction management platform, which aims to provide a single, unified solution for project teams.",
        label: "Martyn Day, AEC Mag: Autodesk BIM 360 'Next Gen' is here",
        url: "https://aecmag.com/news/autodesk-bim-360-2/"
      }
    ]
  },
  {
    id: 'acc',
    year: 'circa 2021 — 2023',
    title: 'Autodesk Construction Cloud (ACC)',
    oldName: 'BIM 360 Next Gen',
    newName: 'ACC (Build, Collaborate, Takeoff)',
    description: 'The "Unification." Autodesk bought PlanGrid and BuildingConnected, threw them into a blender with BIM 360, and served it with a new logo.',
    snark: '',
    color: 'accent-neon',
    references: [
      {
        quote: "Autodesk Construction Cloud combines a powerful set of transition-spanning software for the construction industry... including BIM 360, PlanGrid, BuildingConnected, and Assemble.",
        label: "PR Newswire: Autodesk Construction Cloud Increases Industry Footprint (2020)",
        url: "https://www.prnewswire.com/news-releases/autodesk-construction-cloud-increases-industry-footprint-with-growing-customer-adoption-and-expanded-global-team-301020664.html"
      },
      {
        quote: "With the worldwide release of Autodesk Build, the company is finally rationalising its construction-specific acquisitions and development efforts into a single unified platform.",
        label: "Martyn Day, AEC Mag: Autodesk triples down on collaboration (2021)",
        url: "https://aecmag.com/construction/autodesk-triples-down-on-collaboration-releases-autodesk-build-worldwide/"
      }
    ]
  },
  {
    id: 'forma',
    year: 'circa 2023 — Present',
    title: 'Autodesk Forma: The Industry Cloud Awakens',
    oldName: 'ACC / Spacemaker',
    newName: 'Forma',
    description: 'Autodesk Forma enters the chat. ACC is destined to be swallowed by Forma. Docs is now "Forma Data Management." Reset your clocks!',
    snark: '',
    color: 'accent-purple',
    references: [
      {
        quote: "Autodesk Forma is our industry cloud that will eventually unite workflows across the entire project lifecycle. We are starting with early-stage planning and design, but the vision is much larger.",
        label: "Autodesk: Transitioning from ACC to Forma Info",
        url: "https://construction.autodesk.com/go/acc-to-forma-info/"
      }
    ]
  }
];

export const DISCLAIMER = "Dates are approximate and figures are purely hyperbolic, much like the marketing materials they satirize. No brands were permanently harmed in the making of this timeline, though several thousand logos are currently in therapy. Terms and conditions (and names) subject to change without notice. Or reason.";

export const FORMA_REBRAND_TARGET = new Date('2026-03-24T00:00:00');