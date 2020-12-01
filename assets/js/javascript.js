$(document).on('scroll', function () {
    let scrollTopValue = $(document).scrollTop();

    if (scrollTopValue > (100)) {
        $('.topnav').addClass('down')

    } else {
        $('.topnav').removeClass('down')

    }//end of sticky menu
})

//menu click
$('.people-section1 .aa .icon-container .info').click(function(){
    if($(this).parent().prev().hasClass('hide')){
        $(this).parent().prev().addClass('show')
        $(this).parent().prev().removeClass('hide')
    } else {
        $(this).parent().prev().addClass('hide')
        $(this).parent().prev().removeClass('show')
    }
    
    //$('.main-clicked').addClass('show');
});

//menu click
$('.topnav .icon-container').click(function(){
    console.log('sss')
    $('.side-menu').removeClass('hide');
    $('.side-menu').addClass('show');
});
//side-menu click
$('.fa-times').click(function(){
    $(this).parent().parent().removeClass('show');
    $(this).parent().parent().addClass('hide');
})