
// create an array of 24 numbers & sort it randomly
const doorNums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,18,20,21,22,23,24];
doorNums.sort(() => Math.random() - 0.5);

// NOTE: this is technically hotlinking because I'm using the images from someone elses
// site, which is bad practice *unless* you run the other site (or you have permission).
const baseURL = "https://soc.port.ac.uk/staff/pix/"

const staff = ["alaa", "shikun", "simon", "elly", "nadim", "amanda", "farzad", "annie", "taiwo", "oluwatobi", "gail", "kirsten", "thanos", "penny", "mani", "val", "claudia", "dalin", "haythem", "janka", "matthew", "ronel", "matt", "rich"]


function createImage(num="x", src="./", alt="MERRY XMAS!") {

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

function toggle(e) {
    e.currentTarget.classList.toggle('open');
}

const target = document.querySelector('main');

// get current day of the month 
const today = new Date().getDate();

for (const num of doorNums) {
    // NOTE: this is technically hotlinking because I'm using the images from someone elses
    // site, which is bad practice *unless* you run the other site (or you have permission).
    const name = staff[num-1];
    const image = `${baseURL}${name}/${name}.avif`
    const door = createImage(num, image, `A picture of ${name} from the School of Computing`)
    target.append( door );

    // add an event listener to the door if it's a day before today
    if (num <= today) {
        door.addEventListener('click', toggle)
    } else {
        door.classList.add('locked');
    }

}

const doors = document.querySelectorAll('figure');
