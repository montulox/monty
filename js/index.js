let isDark = 1;
let arr = [0, 1, 2, 3, 4]; 
let links = ['./img/Btn_Change-theme-dark.svg', './img/github.svg', './img/twitter.svg', './img/linkedinn.svg', './img/youtube.svg'];
let links_dark =['./img/DarkIcons/Btn_Change-theme-light.svg', './img/DarkIcons/github-dark.svg', './img/DarkIcons/twitter-dark.svg', './img/DarkIcons/linkedin-dark.svg', './img/DarkIcons/youtube-dark.svg'];


document.querySelector('.btn_them').addEventListener('click', () => {
    let link = document.getElementById("switch_them");
    
    rotateIcon();

    setTimeout (() => {
        if (isDark === 1){
            link.href = "./css/style_light.css";
            isDark = 0;
            change_ico(links_dark);
        }
        else{
            link.href = "./css/style_dark.css";
            isDark = 1;
            change_ico(links);
        }
    }, 100);
});


function change_ico(links) {
    arr.map((element, index) => {
        let link = document.getElementById(`${element}`)
        link.src = `${links[index]}`
    });
}

function rotateIcon() {
    const icon = document.getElementById("0");
    icon.classList.toggle("rotate")
}

document.getElementById('footer').addEventListener('click', () => {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' })
});
