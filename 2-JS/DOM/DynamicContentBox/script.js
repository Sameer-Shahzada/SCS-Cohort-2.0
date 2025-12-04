const arr = [
    {
        team: 'CSK',
        primary:'yellow',
        secondary:'blue'
    },
    {
        team: 'RCB',
        primary:'red',
        secondary:'black'
    },
    {
        team: 'MI',
        primary:'blue',
        secondary:'gold'
    },
    {
        team: 'KKR',
        primary:'purple',
        secondary:'gold'
    },
];

let btn = document.getElementById('changeBtn');
let teamName = document.getElementById('team');

btn.addEventListener('click', () => {
    let item = Math.floor(Math.random() * arr.length);
    console.log(arr[item]?.team);
    teamName.innerText = arr[item]?.team;
    teamName.style.color = arr[item]?.primary;
    document.getElementById('box').style.backgroundColor = arr[item]?.secondary;
    document.querySelector('body').style.backgroundColor = arr[item]?.primary;
})

