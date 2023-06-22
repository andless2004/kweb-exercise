const price = {
    apple: 700,
    orange: 800,
    lemon: 900,
};

let total = 0;

for (const buttonEl of document.getElementsByClassName('add-to-cart')) {
    buttonEl.addEventListener('click', event => {
        // make variable to readablitiy
        total += price[event.target.parentNode.parentNode.getAttribute('id')];
        
        document.getElementById('cost').innerText = total;
    });
}
