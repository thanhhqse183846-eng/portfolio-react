// Keep personal details and verified project contributions in one place.
export const profile = {
  name: 'Ho Quang Thanh',
  initials: 'HT',
  role: 'Frontend Developer Intern',
  location: 'Vietnam',
  availability: 'Open to OJT opportunities',
  university: 'FPT University',
  degree: 'Software Engineering',
  semester: 'Semester 5',
  headline: ['Frontend', 'Developer.'],
  introduction:
    'I’m a semester 5 Software Engineering student at FPT University. I’m looking for a Frontend Developer OJT.',
  about:
    'I’m studying Software Engineering at FPT University, in semester 5. I use ReactJS and Tailwind CSS in ChayBook, a project with four other students.',
  direction:
    'I built the Admin interface and worked on the Meal Plan and Home Page frontend. For my OJT, I want to work on frontend tasks and learn from code reviews.',
  email: 'thanhhqse183846@fpt.edu.vn',
  github: 'https://github.com/thanhhqse183846-eng',
  linkedin: '', // Show only after a real profile URL is provided.
  resume: '', // Show only after the corresponding CV file exists in public/.
};

export const skills = [
  {
    label: 'Core Frontend',
    description: 'I built ChayBook interfaces with ReactJS and Tailwind CSS.',
    icon: 'frontend',
    items: ['ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    highlight: ['ReactJS', 'JavaScript'],
  },
  {
    label: 'API & Integration',
    description: 'I connected Admin views to APIs and handled request states.',
    icon: 'integration',
    items: ['RESTful APIs'],
  },
  {
    label: 'Development Tools',
    description: 'I used Git and GitHub for our team project.',
    icon: 'tools',
    items: ['Git', 'GitHub'],
  },
];

export const projects = [
  {
    id: 'chaybook',
    title: 'ChayBook',
    subtitle: 'Vegetarian Lifestyle Web Application',
    type: 'Academic team project',
    role: 'Frontend development',
    year: 'Sep–Nov 2026',
    description:
      'I worked in a team of five on this vegetarian lifestyle web app. ChayBook’s UI is in Vietnamese.',
    contributions: [
      {
        title: 'Admin interface',
        description:
          'I built the ReactJS Admin interface with API-connected views, including loading, error, and retry states.',
      },
      {
        title: 'Meal Plan and Home Page',
        description: 'I worked on the frontend for both modules.',
      },
      {
        title: 'Testing',
        description:
          'I wrote JUnit tests using Mockito and MockMvc for admin access and input validation, and Playwright browser tests for admin workflows.',
      },
      {
        title: 'Backend support',
        description: 'I also did supporting backend work.',
        // TODO: Confirm the specific backend changes I authored before adding implementation details here.
      },
    ],
    stack: ['ReactJS', 'Vite', 'Tailwind CSS', 'Java', 'Spring Boot', 'SQL Server'],
    demo: 'https://chay-book.vercel.app/login',
    source: 'https://github.com/MinNeoVo/ChayBook',
    screenshots: [
      {
        label: 'Home Page',
        src: '/projects/chaybook-home.png',
        alt: 'ChayBook Home Page with an introduction and vegetarian lifestyle tools',
        width: 1883,
        height: 985,
      },
      {
        label: 'Recipes',
        src: '/projects/chaybook-recipes.png',
        alt: 'ChayBook recipe listing with vegetarian dishes, preparation times, and recipe links',
        width: 1883,
        height: 987,
      },
    ],
    screenshot: '', // Put an authentic screenshot in public/ and enter its path.
    screenshotAlt: 'ChayBook vegetarian lifestyle web application',
    visual: 'chaybook',
  },
];
