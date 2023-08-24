let target = Math.floor(Math.random() * 20) + 1;
let current = 0;
let count = 0;
let f = false;

let dice = document.getElementById('dice');
let box = document.getElementById('box');
let show = document.getElementById('show');

function onClick() {
    let num = Math.floor(Math.random() * 6) + 1;
    dice.innerHTML = `<img id="dice" src="image/${num}.png" alt="">`;

    count++;
    show.innerHTML = `<p>Target : ${target}</p>`;
    const p = document.createElement('p');
    p.innerHTML = `<p>Number Of Attempts : ${count}</p>`;
    show.appendChild(p);

    if (current + num <= target) {
        let i = num;
        while (i--) {
            const span = document.createElement('span');
            span.className = 'dot';
            box.appendChild(span);
        }
        current += num;

        if (current === target) {
            show.innerHTML = `<p><strong>You Win</strong></p>
            <p>Number of attempts taken : ${count}</p>`;
            f = true;
        }
    }
    else{
        document.getElementById('show').innerHTML = `<p>Target : ${target}</p> <br> 
                                                     <strong>Target Value Exceeded</strong>`;
    }

    if (f == true) {
        document.getElementById('box').innerHTML = '';
        document.getElementById('dice').innerHTML = `<img id="dice" src="image/start.png" alt="">`
        target = Math.floor(Math.random() * 20) + 1;
        current = 0;
        count = 0;
        f = false;
        return;
    }
}

dice.addEventListener('click', onClick);