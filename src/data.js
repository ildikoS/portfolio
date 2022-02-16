import proj1 from "./img/set.png";
import proj1gif from "./img/setgif.gif";
import proj2 from "./img/php.png";
import proj2gif from "./img/phpgif.gif";


export const projects = [
    {
        id: 1,
        img: `url(${proj1})`,
        img2: `url(${proj1gif})`,
        link: "https://ildikos.github.io/setgame/",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
        id: 2,
        img: `url(${proj2})`,
        img2: `url(${proj2gif})`,
        link: "http://webprogramozas.inf.elte.hu/hallgatok/ujducs/PHP/PHP_beadando/",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    }
]

export const skillsLangs = [
    {type: "JavaScript", level: 75},
    {type: "Python", level: 67},
    {type: "Java", level: 70},
    {type: "C/C++", level: 38},
    {type: "SQL", level: 71},
    {type: "HTML/CSS", level: 85},
];

export const skillsTechs = [
    {type: "React.js", level: 51},
    {type: "OpenCV", level: 80},
    {type: "Photoshop", level: 70},
];