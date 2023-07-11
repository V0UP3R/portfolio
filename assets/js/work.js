function fetchProjects() {
  fetch('https://api.github.com/users/V0UP3R/repos')
    .then(response => response.json())
    .then(data => {
      const projectsContainer = document.getElementById('projects-container');
      data.forEach(repo => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const projectName = document.createElement('h2');
        projectName.textContent = repo.name;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = repo.description;

        const projectLink = document.createElement('a');
        projectLink.href = repo.html_url;
        projectLink.textContent = 'Ver no GitHub';

        projectDiv.appendChild(projectName);
        projectDiv.appendChild(projectDescription);
        projectDiv.appendChild(projectLink);

        projectsContainer.appendChild(projectDiv);
      });
    })
    .catch(error => {
      console.error(error);
    });
}

document.addEventListener('DOMContentLoaded', fetchProjects);
