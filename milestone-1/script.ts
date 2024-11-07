//import id's from html file

const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement

//add an avent linstener for toggle button to hide or show skills section

toggleButton.addEventListener('click', () => {
    //condition for hide /show section when we click on b utton
    if (skills.style.display === 'none') {
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
})
