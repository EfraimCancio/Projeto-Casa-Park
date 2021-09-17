/* $(document).ready(function () {
    $("#g-menu-trigger").click(function () {
        $("#fs-menu").fadeIn("2000");
        console.log('teste 1');
    });
    $(".closebtn").click(function () {
        $("#fs-menu").fadeOut("2000");
        console.log('teste 2');
    });
}); */




function openNav() {
    document.getElementById("fs-menu").classList.add('show');
}

function closeNav() {
    document.getElementById("fs-menu").classList.add('hide');
    setTimeout(function () {
        document.getElementById("fs-menu").classList.remove('hide')
        document.getElementById("fs-menu").classList.remove('show');
    }, 1000);
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
        document.querySelector("header").classList.add('u-header-opacity');
    } else if (currentScrollPos > 150) {
        document.querySelector("header").style.top = "-100px";
        document.querySelector("header").classList.remove('u-header-opacity');
    }
    prevScrollpos = currentScrollPos;
}