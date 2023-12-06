const doorNums = [ 24, 1, 18, 3, 4, 5, 6, 
    20, 21, 22, 23,
    7, 8, 9, 10, 2, 11, 12, 13, 
];

const images = [
    "https://placekitten.com/100/100",
    "https://placekitten.com/110/100",
    "https://placekitten.com/120/100",
    "https://placekitten.com/130/100",
    "https://placekitten.com/140/100",
    "https://placekitten.com/150/100",
    "https://placekitten.com/160/100",
    "https://placekitten.com/170/100",
    "https://placekitten.com/180/100",
    "https://placekitten.com/190/100",
    "https://placekitten.com/200/100",
    "https://placekitten.com/210/100",
    "https://placekitten.com/220/100",
    "https://placekitten.com/230/100",
    "https://placekitten.com/240/100",
    "https://placekitten.com/200/100",
    "https://placekitten.com/200/100",
    "https://placekitten.com/200/100",
    "https://placekitten.com/220/100",
    "https://placekitten.com/230/100",
    "https://placekitten.com/240/100",
    "https://placekitten.com/200/100",
    "https://placekitten.com/200/100",
    "https://placekitten.com/200/100",
]

function createImage(num="x", src="https://placekitten.com/100/100", alt="MERRY XMAS!") {

    const fig = document.createElement('figure');
    const cap = document.createElement('figcaption');

    const img = document.createElement('img');
    img.alt = alt;
    img.src = src;

    cap.textContent = num;

    fig.append(img)
    fig.append(cap);

    return fig;

}

const target = document.querySelector('main');

let i=0;
for (const num of doorNums) {
    target.append( createImage(num, images[i]) );
    i++;
}

const doors = document.querySelectorAll('figure');

for (const door of doors) {
    door.addEventListener('click', function() {
        door.classList.toggle('open');
    })
}
