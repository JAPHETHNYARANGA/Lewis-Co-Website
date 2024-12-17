import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {
  // Sample projects
  projects = [
    {
      image: 'https://i.pinimg.com/736x/13/fd/ff/13fdff207650f1ba7927d552ef1a8bfa.jpg',
      title: 'Easy & Most Powerful Server Platform',
      author: 'Roy Bricks',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: 'https://i.pinimg.com/736x/13/fd/ff/13fdff207650f1ba7927d552ef1a8bfa.jpg',
      title: 'Travel Blog: My Big European Summer Travel Goal',
      author: 'Jane Meldrum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: 'https://i.pinimg.com/736x/13/fd/ff/13fdff207650f1ba7927d552ef1a8bfa.jpg',
      title: 'Easy & Most Powerful Server Platform',
      author: 'Roy Bricks',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: 'https://i.pinimg.com/736x/13/fd/ff/13fdff207650f1ba7927d552ef1a8bfa.jpg',
      title: 'Travel Blog: My Big European Summer Travel Goal',
      author: 'Jane Meldrum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: 'https://i.pinimg.com/736x/13/fd/ff/13fdff207650f1ba7927d552ef1a8bfa.jpg',
      title: 'Easy & Most Powerful Server Platform',
      author: 'Roy Bricks',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: 'https://i.pinimg.com/736x/13/fd/ff/13fdff207650f1ba7927d552ef1a8bfa.jpg',
      title: 'Travel Blog: My Big European Summer Travel Goal',
      author: 'Jane Meldrum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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
