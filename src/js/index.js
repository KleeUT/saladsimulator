require('../css/index.css');

const responses = [
    ":(",
    "Depressing",
    "Sad",
    "Dissapointing",
    "Unsatisfying",
    "Unplesant",
    "Woeful"
];

document.getElementById('findOutButton').addEventListener('click', () => {
    document.getElementById('page-two--response').innerHTML = responses[Math.floor(Math.random()*responses.length)];
    document.getElementById('page-one').style.display = 'none';
    document.getElementById('page-two').style.display = 'flex';
});
document.getElementById('page-two').addEventListener('click', () => {
    document.getElementById('page-two').style.display = 'none';
    document.getElementById('page-one').style.display = 'flex';
});