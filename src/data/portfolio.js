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
    'I’m Thanh, a Software Engineering student at FPT University, currently focusing on ReactJS and modern frontend development.',
  about:
    'I’m a fifth-semester Software Engineering student at FPT University, focusing on ReactJS and frontend development. I enjoy making interfaces clear, consistent, and usable.',
  direction:
    'Through ChayBook, an academic team project, I’m putting ReactJS into practice. I’m looking for a Frontend Developer internship where I can learn from experienced developers and contribute to real products.',
  email: 'thanhhqse183846@fpt.edu.vn',
  github: 'https://github.com/thanhhqse183846-eng',
  linkedin: '', // Show only after a real profile URL is provided.
  resume: '', // Show only after the corresponding CV file exists in public/.
};

export const skills = [
  {
    label: 'Core Frontend',
    description: 'The interface, from structure to interaction.',
    icon: 'frontend',
    items: ['ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    highlight: ['ReactJS', 'JavaScript'],
  },
  {
    label: 'API & Integration',
    description: 'Connecting the interface to application data.',
    icon: 'integration',
    items: ['RESTful APIs', 'Axios'],
  },
  {
    label: 'Development Tools',
    description: 'Keeping changes organized and working together.',
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
    year: '2026',
    description:
      'A team-built web application centered on a vegetarian lifestyle. My part: bringing the Meal Plan, Admin, and Home Page interfaces to life with ReactJS.',
    contributions: [
      {
        title: 'Meal Plan',
        description: 'Worked on frontend features for the Meal Plan module.',
        technicalDetail: '', // Optional: add only details verified in ChayBook source or documentation.
      },
      {
        title: 'Admin interface',
        description:
          'Contributed to the frontend implementation of the Admin interface.',
        technicalDetail: '', // Optional: verified implementation details only.
      },
      {
        title: 'Home Page',
        description: 'Participated in building the Home Page interface.',
        technicalDetail: '', // Optional: verified implementation details only.
      },
      {
        title: 'Team collaboration',
        description:
          'Collaborated with teammates on ReactJS frontend implementation.',
        technicalDetail: '', // Optional: verified implementation details only.
      },
    ],
    stack: ['ReactJS', 'JavaScript', 'Tailwind CSS', 'RESTful APIs'],
    demo: '', // Add only the verified, public deployed URL.
    source: '', // Add only the verified, shareable project repository URL.
    screenshots: [
      {
        label: 'Home Page',
        src: '/projects/chaybook-home.png',
        alt: 'ChayBook Home Page with Vietnamese introduction and vegetarian lifestyle tools',
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
