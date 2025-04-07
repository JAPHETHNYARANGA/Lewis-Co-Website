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
    {
      title: 'Prudence Showroom',
      description: 'Prudence Showroom is a dynamic platform designed for buying and selling cars. It connects car buyers and sellers in a seamless and efficient marketplace. Whether you are looking to purchase a new or used vehicle, or you want to sell your car, Prudence Showroom offers a user-friendly interface, detailed listings, and secure transaction options. With a wide range of vehicles available, Prudence Showroom is your one-stop destination for all your car buying and selling needs.',
      image: '/assets/prudence.svg',
      link: 'https://prudenceshowroom.com/', // Replace with your live project URL
    },
    {
      title: 'Pceamakupaparish',
      description: "Welcome to P.C.E.A Makupa Parish, a place where faith and community come together to create a profound spiritual journey. We have been a steadfast presence in the lives of our congregation, nurturing and fostering spiritual growth. As we continue to evolve and adapt to the changing world, our commitment to spreading the message of love and hope remains unwavering. Join us in our journey of faith and be part of a community that makes a positive impact in the world. Learn about our services, leadership, and find opportunities to engage with us both in person and virtually.",
      image: '/assets/pceamakupaparish.svg',
      link: 'https://pceamakupaparish.org/', // Replace with your live project URL
    } 
        
 
  ];
  