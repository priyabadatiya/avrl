const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const searchBtn = document.querySelector('.searchBtn');
const card = document.querySelector('.body');

btn.addEventListener("click", handleClick);

var arr = [];


function handleClick() {
    console.log(input)
    const location = input.value;
    fetch(`https://python3-dot-parul-arena-2.uc.r.appspot.com/test?cityname=${location}`)
        .then(res => res.json()).then(res => {
            arr.push(res);

            card.innerHTML = ""
            arr.forEach((el, i) => {

                const h2 = document.createElement('h2');
                const button = document.createElement('button');
               
                button.className = 'delete_btn'
                button.id = i;
                button.addEventListener('click', handleDelete)

                h2.innerText = el.description;
                h2.style.color = "blue";
                
                card.append(h2, button)

            })

        })
}

function handleDelete(e) {
    const index = e.target.id
    arr = arr.filter((item,i) => i != index)
    card.innerHTML = ""

    arr.forEach((el, i) => {
        const h2 = document.createElement('h2');
        const button = document.createElement('button');
        button.className = 'delete_btn'
        button.id = i;
        h2.innerText = el.description;
        h2.style.color = "blue";
        button.addEventListener('click', handleDelete)
        card.append(h2, button)

    })
}