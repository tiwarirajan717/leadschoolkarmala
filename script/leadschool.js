$(window).on("load resize", function(e) {
    //script to detect current device and add class to body according to the width
    if ($(window).width() >= 980) {
        $("body").removeClass("mobL");
        $("body").removeClass("mobile").addClass("desktop");
    } else {
        if ($(window).width() >= 560) {
            $("body").removeClass("desktop").addClass("mobile mobL");
        } else {
            $("body").removeClass("desktop").addClass("mobile");
            $("body").removeClass("mobL");
        }
    }
    //script to match height of two div on same page
    $("#matchheight").height($("#matchheightog").height());
    $(".matchheight").height($(".matchheightog").height());
    $('.teampg_img img').addClass('position-absolute');
    $('.teampg_img iframe').removeClass('d-none').addClass('d-block');
});

var flag = true;
$(document).ready(function() {
    $('.file').change(function() {
        console.log($(this)[0].files[0].name);
        $(this).parent('.btn-file').find('.show-name').text($(this)[0].files[0].name);
    })
    $('.main-icon-wrapper').click(function(e) {
        $(this).addClass('d-none');
        $('.Secondary-icon').fadeIn(300);
    })
    start1();
    start2();
    start3();

    // Landing Page Redirection on click
    $("#Id").change(function() {
        var selected = $('#Id option:selected').val();
        window.location.href = 'homepage.html';
    });
    //disable text input on tel number 
    $('input[type="tel"]').keyup(function(e) {
        if (/\D/g.test(this.value)) {
            // Filter non-digits from input value.
            this.value = this.value.replace(/\D/g, '');
        }
    });
    // Auto Collapse navigation
    $(document).click(function(event) {
        var clickover = $(event.target);
        var _opened = $(".hamberger").hasClass("show");
        if (_opened === true) {
            $(".hamberger").removeClass("show");
        }
    });
    // smooth scroll
    $(".header a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            // event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    // check if the body has landing page class redirect to homepage after 10 sec = 100000
    if ($('body').hasClass('LandingPage'))
        window.setTimeout(function() {
            window.location.href = 'homepage.html';
        }, 10000);
});

//Removed Affix plugin add add below script 
window.addEventListener("scroll", function(event) {
    var scroll = this.scrollY;
    if (scroll >= 100) // Higher this vaue if navigation solid needs o be trgger slower/ more scroll
        $(".navbar").addClass("affix")
    else
        $(".navbar").removeClass("affix").addClass("affix-top")
});
//end Affix custom script


// Counter Scipt
var i = 0;
var j = 0;
var k = 0;
var firstcounter = $(".counter1").text();
var secondcounter = $(".counter2").text();
var thirdcounter = $(".counter3").text();

function start1() {
    if (i <= firstcounter) {
        setTimeout(function() {
            $(".counter1").text(i + "+");
            i++;
            start1();
        }, 30)
    }
};

function start2() {
    if (j <= secondcounter) {
        setTimeout(function() {
            $(".counter2").text(j + "+");
            j++;
            j++;
            j++;
            j++;
            j++;
            start2();
        }, 7)
    }
};

function start3() {
    if (k <= thirdcounter) {
        setTimeout(function() {
            $(".counter3").text(k + "+");
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            k++;
            start3();
        }, 0)
    }
};