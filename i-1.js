let form = document.getElementById('form');
form.onsubmit = (event) => {
    event.preventDefault();
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let mobile = document.getElementById('mobile');
    let message = document.getElementById('message');

    emailjs.init('3F-KqbAOtE0kPuTW-');
    var templateParams = {
        to_name: "Vishnu",
        from_name: name.value,
        from_email: email.value,
        from_mobile: mobile.value,
        message: message.value,
    };
    emailjs.send("service_9fkaa2f", "template_yz2x18m", templateParams)
        .then(function(response) {
            console.log("Email sent successfully:", response);
        }, function(error) {
            console.error("Email could not be sent:", error);
        });

    name.value = '';
    email.value = '';
    message.value = '';
    mobile.value = '';

};

let ti1 = document.getElementById('ti1');
let ti2 = document.getElementById('ti2');
let ti3 = document.getElementById('ti3');

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

img1.onclick = () => {
    ti2.classList.add('img-none');
    ti1.classList.remove('img-none');
    ti3.classList.add('img-none');
}
img2.onclick = () => {
    ti1.classList.add('img-none');
    ti2.classList.remove('img-none');
    ti3.classList.add('img-none');
}

img3.onclick = () => {
    ti1.classList.add('img-none');
    ti3.classList.remove('img-none');
    ti2.classList.add('img-none');
}

var myIndex = 0;
carousel();

function carousel() {
    var j;
    var y = document.getElementsByClassName("mySlides1");
    for (j = 0; j < y.length; j++) {
        y[j].style.display = "none";
    }
    myIndex++;
    if (myIndex > y.length) {
        myIndex = 1
    }
    y[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

let i1 = document.getElementById('i1')
let i2 = document.getElementById('i2')
let i3 = document.getElementById('i3')

let form1 = document.getElementById('form1');
form1.onsubmit = (event) => {
    event.preventDefault();
    if (i1.value === '' || i2.value === '' || i3.value === "") {
        alert('required');
    } else {

    }
}