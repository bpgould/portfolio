import Mock from "../mock";

const database = {
  information: {
    name: 'Bennett P. Gould',
    aboutContent: "I have interests in Systems Design, Cloud/DevOps, High Performance Computing, and Machine Learning.",
    age: 22,
    phone: '',
    nationality: 'American',
    language: 'English, Elementary German',
    email: 'contactbennett@protonmail.com*',
    address: 'Winston-Salem, NC',
    freelanceStatus: 'Available exclusively for charity work (helping students, small businesses, etc.)',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/bennettgould12345',
      dribbble: '',
      github: 'https://github.com/bpgould',
      quora: 'https://www.quora.com/profile/Bennett-Gould',
      hackerrank: 'https://www.hackerrank.com/bgould'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/Resume_For_Website.pdf'
  },
  services: [
    {
      title: "Backend Development",
      icon: 'code',
      details: "Java, C++, Node.js, Express.js, Python, REST API, Microservices"
    },
    {
      title: "Frontend Development",
      icon: 'code',
      details: "HTML, CSS, jQuery, React.js, Next.js, Cognito"
    },
    {
      title: "Databases",
      icon: 'code',
      details: "MongoDB, Atlas, DocumentDB, MySQL, Mongoose, Sequelize"
    },
    {
      title: "Compute",
      icon: 'code',
      details: "EC2, Lambda, Step Functions, ELB, Autoscaling"
    },
    {
      title: "Storage",
      icon: 'code',
      details: "S3, Glacier, EFS, EBS, BeeGFS Converged Deployment"
    },
    {
      title: "Networking",
      icon: 'code',
      details: "CloudFront, Route53, VPC, Subnetting, Security Groups"
    },
    {
      title: "Tools",
      icon: 'code',
      details: "CodePipeline, Git, Bash, Ansible, GitHub, SAM"
    },
    {
      title: "Other",
      icon: 'code',
      details: "API Gateway, Elastic Beanstalk, IAM, CloudWatch"
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Blog Exerpt 1",
      author: {
        name: 'Example Blog 1',
        designation: 'Blog Category'
      }
    },
    {
      id: 2,
      content: "Blog Exerpt 2",
      author: {
        name: 'Example Blog 2',
        designation: 'Blog Category'
      }
    }
  ],
  skills: [
    {
      title: "JavaScript, ES6+",
      value: 85
    },
    {
      title: "Express.js",
      value: 80
    },
    {
      title: "C++",
      value: 75
    },
    {
      title: "Java",
      value: 70
    },
    {
      title: "Python 3",
      value: 60
    },
    {
      title: "MS PowerShell",
      value: 60
    },
    {
      title: "MS VBA",
      value: 55
    },
    {
      title: "Ansible",
      value: 50
    },
    {
      title: "Fortran",
      value: 30
    },
    {
      title: "Matlab",
      value: 30
    },
    {
      title: "R",
      value: 25
    },
    {
      title: "MongoDB",
      value: 80
    },
    {
      title: "Mongoose ORM",
      value: 80
    },
    {
      title: "MySQL",
      value: 70
    },
    {
      title: "Sequelize",
      value: 70
    },
    {
      title: "Firebase",
      value: 60
    },
    {
      title: "MERN Stack",
      value: 85
    },
    {
      title: "Serverless Archictecture",
      value: 80
    },
    {
      title: "REST API",
      value: 85
    },
    {
      title: "PuTTY",
      value: 95
    },
    {
      title: "Linux",
      value: 60
    }
  ],
  awsskills: [
    {
      title: "Lambda",
      value: 90
    },
    {
      title: "EC2",
      value: 85
    },
    {
      title: "Autoscaling",
      value: 75
    },
    {
      title: "Step Functions",
      value: 70
    },
    {
      title: "ELB",
      value: 70
    },
    {
      title: "S3",
      value: 90
    },
    {
      title: "Glaciar/ IA",
      value: 80
    },
    {
      title: "EFS/ EBS",
      value: 75
    },
    {
      title: "CodePipeline",
      value: 90
    },
    {
      title: "CloudFront",
      value: 90
    },
    {
      title: "CLI",
      value: 85
    },
    {
      title: "AWS Document DB",
      value: 80
    },
    {
      title: "Elastic Beanstalk",
      value: 75
    },
    {
      title: "Cognito",
      value: 65
    },
    {
      title: "API Gateway",
      value: 65
    },
    {
      title: "VPC, Subnetting, & Security Groups",
      value: 65
    },
    {
      title: "CloudWatch",
      value: 60
    }
  ],
  frontendskills: [
    {
      title: "Javascript ES6+",
      value: 85
    },
    {
      title: "HTML 5",
      value: 85
    },
    {
      title: "CSS 3",
      value: 80
    },
    {
      title: "Bootstrap",
      value: 80
    },
    {
      title: "Next.js",
      value: 75
    },
    {
      title: "React.js",
      value: 75
    },
    {
      title: "jQuery",
      value: 70
    },
    {
      title: "Search Engine Optimization",
      value: 60
    },
    {
      title: "WordPress",
      value: 40
    },
    {
      title: "Vue.js",
      value: 25
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "WFU ASGM P.O.C.",
      subtitle: "A data warehousing & inventory pipeline proof of concept",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://drive.google.com/file/d/1KzEvJU57_qkCe2mxy9-L9cDqBtAffp75/view?usp=sharing'
    },
    {
      id: 2,
      title: "DroneZones.io",
      subtitle: "Multitenant drone & binary data warehousing",
      imageUrl: "/images/portfolio-image-2.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://drive.google.com/file/d/143y503rZ01-SJkIZHuhfDhpr2Fju7ZVu/view?usp=sharing'
    },
    {
      id: 3,
      title: "Project 3",
      subtitle: "Coming Soon",
      imageUrl: "/images/portfolio-image-3.jpg",
      url: ''
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "Jun 2017 - Present",
        position: "Head Systems Administrator",
        company: "VarTech Systems",
        details: "Managed all internal and cloud-based servers, services, technology infrastructure, and tools. Managed numerous migrations from legacy and on-prem software/infrastructure to modern and often cloud-based solutions. Configured, updated, and upgraded all user PCs, servers, printers, networking equipment, etc. Performed security audits, gap assessments, patching, and documentation for internal use and regulatory compliance. Managed and implemented modern, redundant backups and disaster recovery plans."
      },
      {
        id: 2,
        year: "Oct 2020 - Present",
        position: "CloudOps Engineer and Co-Founder",
        company: "DroneZones.io",
        details: "Created a big data warehousing application and API for machine learning workflows in the WFU ASGM lab. Architected microservices, utilized serverless resources, built CICD pipelines, and performed TCO calculations. Utilized Next.js frontend, Node.js backend services, Python-based metadata stripper, Mongo Atlas, and more."
      },
      {
        id: 3,
        year: "May 2016 - Dec 2016",
        position: "Biochemistry HPC Intern",
        company: "Wake Forest University",
        details: "Conducted original research on the TCF4:NEUROD2 pseudo homodimer complex relevant to Pitt-Hopkins Syndrome. Leveraged the use of VMD and NAMD on the WFU DEAC HPC cluster to run molecular dynamics simulations comparing the wild and mutant types. Presented research at the International Pitt-Hopkins Research Symposium in Dallas and the WFU Undergrad Research Fair."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2020 - 2021",
        graduation: "Full Stack Web Development",
        university: "University of North Carolina at Chapel Hill",
        details: "6 Month Coding Bootcamp"
      },
      {
        id: 2,
        year: "2017 - 2021",
        graduation: "Bachelor of Science, Bachelor of Arts (In Progress)",
        university: "Wake Forest University",
        details: "Computer Science, Applied Mathematics"
      },
      {
        id: 3,
        year: "2013 - 2017",
        graduation: "High School",
        university: "West Forsyth High School",
        details: "3rd/538, Passed 14 AP Exams"
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'TwelveNines.com',
      featuredImage: '/images/Profile.jpg',
      filesource: '/blog/twelvenines.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['Recruiter Sign In'],
    emailAddress: ['contactbennett@protonmail.com'],
    address: "Winston-Salem, NC"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/awsskills").reply(config => {
  const response = database.awsskills;
  return [200, response];
});

Mock.onGet("/api/frontendskills").reply(config => {
  const response = database.frontendskills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});