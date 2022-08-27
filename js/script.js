let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxJYHsi8SOUuwQADndz7LtvhkYxoImKkPcfLLXNnkuexLY4nmWk5x_flw6Ao3brDAUk/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Message sent successfully"))
    .catch(error => console.error('Error!', error.message))
});


// done