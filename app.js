fetch('jobs-data.json')
  .then(response => response.json())
  .then(data => {
    const featuredJobsContainer = document.getElementById('featured-jobs');
    const locationFilter = document.getElementById('location-filter');
    const locationFilterValue = locationFilter.value.toLowerCase();
    const filteredJobs = data.featured_jobs.filter(job => job.location.toLowerCase().includes(locationFilterValue));
    featuredJobsContainer.innerHTML = '';
    filteredJobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>${job.description}</p>
            <p>${job.location}</p>
            <a href="${job.apply_link}" class="apply-button">Apply Now</a>
        `;
        jobElement.classList.add("featured-job");

        featuredJobsContainer.appendChild(jobElement);
    });
  });
  
  
 