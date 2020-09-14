$(Document).ready(function()
{
    $('carousel').carousel({

        interval:6000
    });
     
    // Show Color Option Div When Click On The Gear
    $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
    }); 

    // Change Theme Color On Click
    var colorli =  $(".color-option ul li")
    colorli
    .eq(0).css(" backgroundColor","#3a3aec").end()
    .eq(1).css("backgroundColor","#E426D5").end()
    .eq(2).css("backgroundColor","#e60000f5").end()
    .eq(3).css("backgroundColor","#FFD500");

    colorli.click(function ()
    {
      
       $("link[href*='theme']").attr("href",$(this).attr("data-value"));
       
    });


    var scrollbutton = $("#scroll-top");

    $(window).scroll(function () 
    {
        console.log($(this).scrollTop()); 
        ($(this).scrollTop()>=700)?scrollbutton.show():scrollbutton.hide();
    });
    scrollbutton.click(function () 
    {
        $("html,body").animate({scrollTop:0},600);
    });
});



// Loading Screen
//  $(Window).load(function () 
//  {
//    $(".loading-overlay .loader");
//  });
