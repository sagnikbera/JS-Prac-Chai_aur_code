const btn = document.querySelectorAll('.button');
const bd = document.querySelector('body');

btn.forEach(function (btns){
    console.log(btns);
    btns.addEventListener('click',function(event){
        console.log(event);
        console.log(event.target);

        switch (event.target.id) {
            case 'gray':
                bd.style.backgroundColor = event.target.id
                bd.style.color = "white"
                break;
            case 'white':
                bd.style.backgroundColor = event.target.id
                bd.style.color = "black"
                break;
            case 'blue':
                bd.style.backgroundColor = event.target.id
                bd.style.color = "violet"
                break;
            case 'yellow':
                bd.style.backgroundColor = event.target.id
                bd.style.color = "red"
                break;
            
            default:
                break;
        }
    })
});