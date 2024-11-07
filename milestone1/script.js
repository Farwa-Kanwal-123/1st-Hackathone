//import id's from html file
var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
//add an avent linstener for toggle button to hide or show skills section
toggleButton.addEventListener('click', function () {
    //condition for hide /show section when we click on b utton
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        skills.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
});
