import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Sai",
  lastName: "Kommineni",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Tech Support Engineer",
  avatar: "/images/avatar.png",
  email: "saikirankommineni0@gmail.com",
  location: "Australia/Melbourne", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Telugu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I will be writing about short tech tutorials, focusing on devops. Stay tuned!
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Kiran7321",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sakirankommineni/",
  },
  // {
  //   name: "X",
  //   icon: "x",
  //   link: "",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Jack of all trades! 'cause who has time to master just one ⏳</>,
  featured: {
    display: true,
    title: <><strong className="ml-4">Open to Work</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Hey! I'm Sai 😺<br />
      IT Support Engineer at <Logo icon={false} style={{ 
      display: "inline-flex", 
      position: "relative",
      top: "0.38em",     // Increased to move slightly down
      paddingTop: "-0.1em",
      marginLeft: "0.1em",  // Changed from negative to positive to move right
    }}/> 
    <br />
    where I keep systems running smoothly & help users solve problems. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm an IT engineer with a passion for transforming complex challenges
        into simple, elegant solutions. My work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Alfred Health",
        timeframe: "2023 - Present",
        role: "Technical Support Engineer",
        achievements: [
          <>
            Delivered L2 support in a hybrid environment (on-prem AD and Microsoft 365), 
            handling escalations and resolving complex infrastructure issues during after hours.
          </>,
          <>
            Automated repetitive tasks by creating custom PowerShell scripts-bulk 
            user creation, permission delegation, mailbox configurations, and reporting. 
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Cognizant",
        timeframe: "2022 - 2023",
        role: "Junior Programming Analyst",
        achievements: [
          <>
            Assisted in deploying and maintaining cloud-based infrastructure using AWS services such as Lambda, S3, and EC2, 
            enhancing scalability and system availability by 25%.
          </>,
          <>
            Developed Python scripts for automating 
            routine serverless tasks, improving operational efficiency by 35%.
          </>,
        ],
        images: [
          {
          src: "/images/mine/internshipThumbnail.png",
          alt: "Once UI Project",
          width: 16,
          height: 9,
        },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Victorian Institue of Technology",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Jawaharlal Nehru Technological University",
        description: <>Studied computer science.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Azure, AWS",
        description: <>Able to build solutions in AWS, Azure & Industry Certified</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/mine/awsCert.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/mine/msCerts.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js, automating tedious tasks using Python, Shell!</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/mine/landingPage.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/mine/psScripts.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
