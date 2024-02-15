// Note :
// In this tutorial i will show you how to create a 3D Personal Portfolio website using HTML CSS & JavaScript.

// This 3D portfolio website created by Muhammad Ali From Tech Camp Youtube Channel.

// also complete 3D portfolio website source code upload on my github account.


// ======================================================
// Follow Me On Other Social Media
// ======================================================
// 👉 Instagram : https://www.instagram.com/
// 👉 Facebook : https://www.facebook.com/
// 👉 Github : https://github.com/
// 👉 Pinterest :https://www.pinterest.com/techcamp48
// 👉 Linkedin : https://www.linkedin.com/in/muhammad-ali-634b54257/
// 👉Youtube : https://www.youtube.com/@techcamp48



// turn pages when click next or prev button

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {

        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');

            setTimeout(() => {
                pageTurn.style.zIndex = 2 - index;
            }, 500);

        }else{
            pageTurn.classList.add('turn');

            setTimeout(() => {
                pageTurn.style.zIndex = 2 + index;
            }, 500);
        }
    }
});


// contact me button when click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {

            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            },500);
        }, (index + 1) * 200 + 100)
    });
}


// create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPages - 1;
    }
}


// back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();

            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)

    })
}


// opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');


// open animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);

// open animation (page left or profile page animation)
// setTimeout(() => {
//     pageLeft.style.zIndex = 20;
// }, 3200);



// open animation (all page right animation)

pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();

        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2100)

}) 



//send mail
// function emailSend(){

    // var userName = document.getElementById('name').value;
    // var email = document.getElementById('email').value;
    // var message1 = document.getElementById('message').value;
   
//     var messageBody = "Name " + userName +
//     "<br/> Email " + email + "<br/> Message : " + message1;
//     Email.send({
//       Host : "smtp.elasticemail.com",
//       Username : "pgawali6783@gmail.com",
//       Password : "2EF5191E808F32BDF63040BD6775F1D7F84D",
//       To : 'poojagawali081@gmail.com',
//       From : "pgawali6783@gmail.com",
//       Subject : "This is the subject",
//       Body : messageBody
//    }).then(
//     message => {
//       if(message=='OK'){
//         swal("Secussful", "You clicked the button!", "success");
//       }
//       else{
//         swal("Error", "You clicked the button!", "error");
//       }
//     }
//    );
//    }

    //  var btn = document.getElementById('btn1');
    //  btn.addEventListener('click', function(e){
    //    e.preventDefault()
     
    //    var userName = document.getElementById('name').value;
    //  var email = document.getElementById('email').value;
    //  var message1 = document.getElementById('message').value;

    //  var body = "Name : " + userName +
    // "<br/> Email " + email + "<br/> Message : " + message1;

    //  Email.send({
    //     SecureToken : "0ceff50f-a774-4d85-8418-c80ba419e875",
    //     To : 'poojagawalli081@gmail.com',
    //     From : "pgawali6783@gmail.com",
    //     Subject : "Contact Message",
    //     Body : body
    // }).then(
    //   message => alert(message)
    // );
    //  })
     
   