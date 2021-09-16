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
    setTimeout(function(){
        document.getElementById("fs-menu").classList.remove('hide')
        document.getElementById("fs-menu").classList.remove('show');
    }, 1000);
}