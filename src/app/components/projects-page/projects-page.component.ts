import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {
  // Sample projects with real data
  projects = [
    {
      image: 'https://i.pinimg.com/736x/13/fd/ff/13fdff207650f1ba7927d552ef1a8bfa.jpg',
      title: 'Easy & Most Powerful Server Platform',
      author: 'Roy Bricks',
      description: 'Our Easy & Most Powerful Server Platform is designed for businesses looking to scale with ease. Featuring robust security, seamless integration, and high-speed performance, it is the perfect solution for high-traffic applications and enterprise-level operations.'
    },
    {
      image: 'https://i.pinimg.com/736x/13/fd/ff/13fdff207650f1ba7927d552ef1a8bfa.jpg',
      title: 'Travel Blog: My Big European Summer Travel Goal',
      author: 'Jane Meldrum',
      description: 'Follow Jane Meldrum’s journey across Europe as she explores the top tourist destinations, local cuisines, and unique cultures. This blog captures her experiences and tips for anyone planning their own European adventure.'
    },
    {
      image: 'https://i.pinimg.com/736x/13/fd/ff/13fdff207650f1ba7927d552ef1a8bfa.jpg',
      title: 'AI-Powered Business Solutions',
      author: 'Lara Smith',
      description: 'Discover how AI can help businesses streamline operations, increase productivity, and deliver personalized customer experiences. This project integrates machine learning algorithms to automate data analysis and customer service functions.'
    },
    {
      image: 'https://i.pinimg.com/736x/13/fd/ff/13fdff207650f1ba7927d552ef1a8bfa.jpg',
      title: 'E-Commerce Platform: Revolutionizing Online Shopping',
      author: 'David Black',
      description: 'This project revolutionizes the way users shop online. With enhanced product recommendations powered by AI, fast checkout systems, and easy navigation, it aims to provide an unparalleled online shopping experience for both customers and vendors.'
    },
    {
      image: 'https://i.pinimg.com/736x/13/fd/ff/13fdff207650f1ba7927d552ef1a8bfa.jpg',
      title: 'Travel Blog: My Big European Summer Travel Goal',
      author: 'Jane Meldrum',
      description: 'Join Jane as she visits iconic European landmarks, tries new activities, and enjoys the best local experiences. From traveling in Italy to backpacking across Eastern Europe, this blog gives readers a front-row seat to an epic summer adventure.'
    },
    {
      image: 'https://i.pinimg.com/736x/13/fd/ff/13fdff207650f1ba7927d552ef1a8bfa.jpg',
      title: 'Smart Home Automation',
      author: 'Sarah Lee',
      description: 'Explore the future of home automation with this project. It integrates IoT devices to provide seamless control over home appliances, lighting, security, and even energy consumption, all from a single app.'
    }
  ];

  // Pagination variables
  pageSize: number = 4; // Number of projects to display at once
  currentPage: number = 0; // Track current page index

  // Get the projects to display for the current page
  get visibleProjects() {
    const startIndex = this.currentPage * this.pageSize;
    return this.projects.slice(startIndex, startIndex + this.pageSize);
  }

  // Navigate to the next page
  goToNext() {
    if ((this.currentPage + 1) * this.pageSize < this.projects.length) {
      this.currentPage++;
    }
  }

  // Navigate to the previous page
  goToPrevious() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}
