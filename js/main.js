// Enter your code below.
document.addEventListener('DOMContentLoaded', function() {
    const showResourcesButton = document.getElementById('show-resources');
    const resourcesDiv = document.querySelector('.javascript-resources');

    showResourcesButton.addEventListener('click', function() {
        resourcesDiv.classList.toggle('d-none');  
    });

    resourcesDiv.addEventListener('mouseover', function(event) {
        if (event.target.classList.contains('list-group-item')) {
            event.target.classList.add('fw-bold');
        }
    });

    resourcesDiv.addEventListener('mouseout', function(event) {
        if (event.target.classList.contains('list-group-item')) {
            event.target.classList.remove('fw-bold');
        }
    });

    resourcesDiv.addEventListener('click', function(event) {
        if (event.target.classList.contains('list-group-item')) {
            event.target.classList.add('fst-italic');
        }
    });
});

