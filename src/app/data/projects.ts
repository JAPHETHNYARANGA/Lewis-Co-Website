// projects.ts
export interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
  }
  
  export const projects: Project[] = [
    {
      title: 'Landlord-Tenant Management App',
      description: 'A robust solution designed to simplify property management for landlords and enhance the renting experience for tenants. The app offers tools for lease agreements, payment tracking, maintenance requests, and communication between tenants and landlords.',
      image: '/assets/project.png',
      link: 'https://cityrealtykenya.com/', // Replace with your live project URL
    },
    {
      title: 'Code Kenya',
      description: 'Code Kenya is an education platform offering career-focused bootcamps and internships in the tech industry. We provide hands-on training in fields such as Software Engineering, Artificial Intelligence, and Entrepreneurship. Our unique program combines intensive bootcamps with internship placements, ensuring students gain valuable real-world experience. Whether online or in Nairobi, our programs equip students with the skills needed to succeed in their tech careers, backed by mentorship, networking opportunities, and a supportive community.',
      image: '/assets/codekenya.svg',
      link: 'https://www.codekenya.org/', // Replace with your live project URL
    },
    {
      title: 'Golden Sail Rong Da Logistics',
      description: 'Golden Sail App is a digital solution designed to optimize cargo transportation, fleet management, and supply chain operations. It connects shippers, carriers, and drivers on a unified platform, ensuring real-time tracking, efficient route planning, and seamless communication between stakeholders.',
      image: '/assets/dashboard.svg',
      link: '', // Replace with your live project URL
    },
    
    // Add more projects as necessary
  ];
  