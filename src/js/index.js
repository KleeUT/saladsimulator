require('../css/index.css');

const responses = [
    ":(",
    ":-(",
    ";_;",
    "D:",
    "T_T",
    "ಥ_ಥ",
    "(｡•́︿•̀｡)",
    "( ´•̥̥̥ω•̥̥̥` )",
    "Bad",
    "Bitter",
    "Bleak",
    "Brutal",
    "Cruel",
    "Depressing",
    "Dire",
    "Disappointing",
    "Disheartening",
    "Dismal",
    "Dispiriting",
    "Funereal",
    "Galling",
    "Heartbreaking",
    "Inadequate",
    "Lamentable",
    "Joyless",
    "Pitiable",
    "Sad",
    "Savage",
    "Tragic",
    "Unfortunate",
    "Unpalatable",
    "Unpleasant",
    "Unsatisfying",
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
