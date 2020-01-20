//Ravage Digital Custom
/*
 * jQuery Ravage Functions and Plugins - v1.1.1
 * Copyright (c) 2020 Joseph Biggers
 *
 */


//*****************************
//CHANGE Social Media Links Here
// "SocialAll" is for the icons on the header and footer
// All Can be used at once
// [type,true/false for use, image source, link to our page] 
// only change the true/false and the link to page
// All 8 can be used
var SocialAll = [
    ["Facebook", true, "img/logos/facebook.png", "https://facebook.com"],
    ["Twitter", true, "img/logos/Twitter.png", "https://Twitter.com"],
    ["Instagram", true, "img/logos/Instagram.png", "https://Instagram.com"],
    ["GPlus", true, "img/logos/GPlus.png", "https://GPlus.com"],
    ["LinkedIn", true, "img/logos/LinkedIn.png", "https://LinkedIn.com"],
    ["Snapchat", false, "img/logos/Snapchat.png", "https://Snapchat.com"],
    ["Twitch", false, "img/logos/Twitch.png", "https://Twitch.com"],
    ["youtube", false, "img/logos/youtube.png", "https://youtube.com"]
];

//*****************************
// "SocialMin" is for the icons on the business section
// Only use up to four best for business
var SocialMin = [
    ["Facebook", true, "img/logos/facebook.png", "https://facebook.com"],
    ["Twitter", true, "img/logos/Twitter.png", "https://Twitter.com"],
    ["Instagram", true, "img/logos/Instagram.png", "https://Instagram.com"],
    ["GPlus", false, "img/logos/GPlus.png", "https://GPlus.com"],
    ["LinkedIn", false, "img/logos/LinkedIn.png", "https://LinkedIn.com"],
    ["Snapchat", false, "img/logos/Snapchat.png", "https://Snapchat.com"],
    ["Twitch", false, "img/logos/Twitch.png", "https://Twitch.com"],
    ["youtube", false, "img/logos/youtube.png", "https://youtube.com"]
];

//*****************************
//IMPORTANT!!!!!
// we need this! this link is active!!!
// It will be inserted into all our data-links for GOFundMe
var gofundmelink = "https://www.gofundme.com/f/dark-solstice-gaming-experience";

//Change the date below to set a target date
var target_date = new Date("December 10, 2020").getTime();



var comments = [{
    "comment1": [{
        "author": "author",
        "date": "11/1/2019",
        "commentHtml": ""
    }],
    "comment2": [{
        "author": "author",
        "date": "11/1/2019",
        "commentHtml": ""
    }],
    "comment3": [{
        "author": "author",
        "date": "11/1/2019",
        "commentHtml": ""
    }],
    "comment4": [{
        "author": "author",
        "date": "11/1/2019",
        "commentHtml": ""
    }]
}];

var mailTo = {
    "Admin": "admin@ravagedigital.com",
    "Support": "support@ravagedigital.com",
    "Community": "Community@ravagedigital.com"
}

var companyInfo = {
    "Address1": "8938 East Millett Dr.",
    "Address2": "",
    "City": "Tucson",
    "State": "Arizona",
    "StateAbb": "AZ",
    "PostalCode": "85710",
    "Country": "United States",
    "Phone1": "",
    "Phone2": "",
    "Website": "www.ravagedigital.com"
}

var CTA = "Help Us With Dark Solstice!";



var navigation = {
    "headerMain": '<div class="header-top">' +
        '<div class="container">' +
        '<div class="row">' +
        '<div class="col-lg-6 col-sm-6 col-4 header-top-left no-padding">' +
        '<ul class="social-link-nav" id="social-upper-placeholder">' +
        '</ul></div><div class="col-lg-6 col-sm-6 col-8 header-top-right no-padding">' +
        '<a href="#" id="phone"></a><a href="#" id="email"></a></div>' +
        '</div></div></div><div class="container main-menu"><div class="row align-items-center justify-content-around d-flex">' +
        '<div id="logo" class="animate fadeInLeft"><a href="index.html"><img src="img/logos/ravagelogowhite.png" style="max-height:40px" alt="" title="" /><span id="businessLogoAddon"></span></a>' +
        '</div><nav id="nav-menu-container"><ul class="nav-menu" id="header-nav-placeholder"></ul></nav>' +
        '</div></div><div class="go_to_button"><a href="#" id="headerCTA">Help With Dark Solstice!</a></div>',
    "navigationTop": '<div class="ravage-main-menu" id="sticker" style="position:fixed;z-index:9999999;width:100%;">' +
        ' <div style="width:100%;text-align:center;background:black;padding:2px;display:flex;flex-direction:row"><a id="email" href="#" style="color:white"></a>' +
        '<ul class="social-link-nav" id="social-upper-placeholder">' +
        '</ul>' +
        '</div>' +
        '<div class="classy-nav-container breakpoint-off">' +
        '<div class="container-fluid nav-background">' +
        '<nav class="classy-navbar justify-content-center" id="ravageNav">' +
        '<a href="index.html" class="nav-brand"><img class="header-logo-sm" width="170px" src="img/logos/ravagelogowhite.png" alt=""><span id="businessLogoAddon"></span></a>' +
        '<div class="classy-navbar-toggler">' +
        '<span class="navbarToggler"><span></span><span></span><span></span></span>' +
        '</div>' +
        '<div class="classy-menu">' +
        '<div class="classycloseIcon">' +
        '<div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>' +
        '</div>' +
        '<div class="dark classynav">' +
        '<ul>' +
        '<li id="index"><a href="index.html">Home</a></li>' +
        '<li id="Projects"><a href="projects.html">Projects</a>' +
        '<ul class="dropdown">' +
        '<li class="drop_item"><a class="drop-item" href="darksolstice.html">Dark Solstice&trade;</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="contest.html">Design a Warrior</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="packsoflove.html">Packs of Love&trade;</a>' +
        '<li class="drop_item"><a class="drop-item" href="business.html" target="_blank">Business Services</a>' +
        '<li class="drop_item"><a class="drop-item" href="projects.html">Coming Soon</a></li>' +
        '</ul>' +
        '</li>' +
        '<li id="Business"><a href="business.html" target="_blank">Business</a>' +
        '<ul class="dropdown">' +
        '<li class="drop_item"><a class="drop-item" href="business.html" target="_blank">Business Services</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="advertising.html">Advertising</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="artargeting.html">AR Targeting</a></li>' +
        '</ul>' +
        '</li>' +

        '<li id="support"><a href="mission.html">Mission</a>' +
        '<ul class="dropdown">' +
        '<li class="drop_item"><a class="drop-item" href="mission.html">About Us</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="gofundme.html">Help Us</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="mission.html">Giving Back</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="persevere.html">Persevere&copy;</a></li>' +
        '</ul>' +
        '</li>' +
        '<li id="Contact"><a href="contactus.html">Contact</a>' +
        '<ul class="dropdown">' +
        '<li class="drop_item"><a class="drop-item" href="contactus.html">Contact Us</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="employmentopportunities.html">Jobs</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="employmentapplication.html">Job Application</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="business.html" target="_blank">Services</a></li></ul>' +
        '</li>' +
        '</ul>' +

        '<div class="go_to_button"><a href="#" data-link="gofundme" target="_blank" id="headerCTA" data-index="0">Help With Dark Solstice!</a></div>' +
        '</div></div></nav></div></div>' +
        '</div>',
    "navigationBusiness": '<div class="ravage-main-menu" id="sticker" style="position:fixed;z-index:9999999;width:100%;">' +
        ' <div style="width:100%;text-align:center;background:black;padding:2px;display:flex;flex-direction:row"><a id="email" href="#" style="color:white"></a>' +
        '<ul class="social-link-nav" id="social-upper-placeholder">' +
        '</ul>' +
        '</div>' +
        '<div class="classy-nav-container breakpoint-off">' +
        '<div class="container-fluid nav-background">' +
        '<nav class="classy-navbar justify-content-center" id="ravageNav">' +
        '<a href="index.html" class="nav-brand business_logo_text"><img class="header-logo-sm" width="170px" src="img/logos/ravagelogowhite.png" alt="">Business.</a>' +
        '<div class="classy-navbar-toggler">' +
        '<span class="navbarToggler"><span></span><span></span><span></span></span>' +
        '</div>' +
        '<div class="classy-menu">' +
        '<div class="classycloseIcon">' +
        '<div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>' +
        '</div>' +
        '<div class="dark classynav">' +
        '<ul>' +
        '<li id="index"><a href="index.html">Home</a></li>' +
        '<li id="Projects"><a href="projects.html">Projects</a>' +
        '<ul class="dropdown">' +
        '<li class="drop_item"><a class="drop-item" href="darksolstice.html">Dark Solstice&trade;</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="contest.html">Design a Warrior</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="packsoflove.html">Packs of Love&trade;</a>' +
        '<li class="drop_item"><a class="drop-item" href="business.html" target="_blank">Business Services</a>' +
        '<li class="drop_item"><a class="drop-item" href="projects.html">Coming Soon</a></li>' +
        '</ul>' +
        '</li>' +
        '<li id="Business"><a href="business.html" target="_blank">Business</a>' +
        '<ul class="dropdown">' +
        '<li class="drop_item"><a class="drop-item" href="business.html" target="_blank">Business Services</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="advertising.html">Advertising</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="artargeting.html">AR Targeting</a></li>' +
        '</ul>' +
        '</li>' +

        '<li id="support"><a href="mission.html">Mission</a>' +
        '<ul class="dropdown">' +
        '<li class="drop_item"><a class="drop-item" href="mission.html">About Us</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="gofundme.html">Help Us</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="mission.html">Giving Back</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="persevere.html">Persevere&copy;</a></li>' +
        '</ul>' +
        '</li>' +
        '<li id="Contact"><a href="contactus.html">Contact</a>' +
        '<ul class="dropdown">' +
        '<li class="drop_item"><a class="drop-item" href="contactus.html">Contact Us</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="employmentopportunities.html">Jobs</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="employmentapplication.html">Job Application</a></li>' +
        '<li class="drop_item"><a class="drop-item" href="business.html" target="_blank">Services</a></li></ul>' +
        '</li>' +
        '</ul>' +

        '<div class="go_to_button"><a href="#" data-link="gofundme" target="_blank" id="headerCTA" data-index="0">Help With Dark Solstice!</a></div>' +
        '</div></div></nav></div></div>' +
        '</div>',


    "navigationFooter": '<footer class="footer-area ravage_gap" style="z-index:0">' +
        '<div class="footer_overlay">' +
        '<div class="container">' +
        '<div class="row" id="footer-cat-placeholder" style="z-index:1">' +

        '<div class="col-lg-2 col-md-6 ravag-footer-widget">' +
        '<h4 class="footer_category_title">Projects</h4>' +
        '<ul class="no-list-style">' +
        '<li><a href="darksolstice.html">Dark Solstice</a></li>' +

        '<li><a href="designawarrior.html">Design a Warrior</a></li>' +
        '<li><a href="business.html" target="_blank">Business Services</a></li>' +
        '</ul>' +
        '</div>' +
        '<div class="col-lg-2 col-md-6 ravag-footer-widget">' +
        '<h4 class="footer_category_title">Community</h4>' +
        '<ul class="no-list-style">' +
        '<li><a href="mission.html">Our Mission</a></li>' +
        '<li><a href="packsoflove.html">Packs of Love</a></li>' +
        '<li><a href="goldenrule.html">Our Platinum Rule</a></li>' +
        '</ul>' +
        '</div>' +
        '<div class="col-lg-2 col-md-6 ravag-footer-widget">' +
        '<h4 class="footer_category_title">About Us</h4>' +
        '<ul class="no-list-style">' +
        '<li><a href="mission.html">About</a></li>' +
        '</ul>' +
        '</div>' +
        '<div class="col-lg-2 col-md-6 ravag-footer-widget">' +
        '<h4 class="footer_category_title">Resources</h4>' +
        '<ul class="no-list-style">' +
        '<li><a href="contactus.html">Contact Us</a></li>' +
        '<li><a href="employmentopportunities.html">Jobs</a></li>' +
        '</ul>' +
        '</div>' +
        '<div class="col-lg-4 col-md-6 ravag-footer-widget">' +
        '<h4 class="footer_category_title">Newsletter</h4>' +
        '<div class="form-wrap" id="mc_embed_signup">' +
        '<form action="mail/newsletter.php" method="PostalCode" class="form-inline">' +
        '<input class="form-control" name="email" placeholder="Your Email Address" ' +
        'required="" type="email" style="width:200px">' +
        '<button class="newsletter-btn">Subscribe</button>' +
        ' <div class="info"></div>' +
        '</form>' +
        '<p class="footer-text m-0 col-lg-12 col-md-12">' +
        'Copyright Ravage Digital&copy;<span id="copyrightYear"></span> All rights reserved </p><a href="#headerPlaceholder" id="returnToTop"></a>' +
        '</div><div class="footer-bottom row align-items-center">' +
        '<ul class="social-link-nav" id="footer-social-placeholder"></ul>' +
        '<div class="col-lg-8 col-md-12 footer-social"></div></div></div></div></footer>'
}






$(function () {

    'use strict';


    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(400).fadeOut("slow");
    });

    // Startup Procedures:
    initTimer();

    loadPartialView("#headerPlaceholder", "navigationTop");


    loadPartialView("#businessHeaderPlaceholder", "navigationBusiness");


    loadPartialView("#footerWrap", "navigationFooter");

    //loadPartialView("#footer-cat-placeholder","navigationFooter");
    loadSocialMediaIcons(SocialAll, "social-upper-placeholder", "social-small");
    loadSocialMediaIcons(SocialAll, "footer-social-placeholder", "social-lg");
    $('#phone').html(companyInfo.Phone1).attr("href", "tel:" + companyInfo.Phone1);
    $('#email').html(mailTo.Admin).attr("href", "mailTo:" + mailTo.Admin);
    $('#headerCTA').attr("data-index", "0");
    setDefaultTab();
    $('#headerCTA').html(CTA);
    $('#copyrightYear').html = new Date().getFullYear();
    loadGoFundMeLink();
    if ($('#socialSmall').length) {
        loadSocialMediaIcons(SocialMin, "socialSmall", "social-lg");
    }
    if ($.fn.classyNav) {
        $('#ravageNav').classyNav();
    }

    $(document).ready(function () {
        $('.classy-navbar-toggler').on("click", function () {
            $('#goToTop').click();
        });

        $('html, body').hide();

        if (window.location.hash) {

            setTimeout(function () {

                $('html, body').scrollTop(0).show();

                $('html, body').animate({

                    scrollTop: $(window.location.hash).offset().top - 108

                }, 1000)

            }, 0);

        }

        else {

            $('html, body').show();

        }

    });

    $('.news-ticker').marquee({
        duration: 20000,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    });
    $('#headerCTA').ravageFade({ "Fade": true });



    var contentWayPoint = function () {
        var i = 0;
        $('.ftco-animate').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .ftco-animate.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn ftco-animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft ftco-animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight ftco-animated');
                            } else {
                                el.addClass('fadeInUp ftco-animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, { offset: '95%' });
    };
    contentWayPoint();

    var counter = function () {

        $('#section-counter').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                $('.number').each(function () {
                    var $this = $(this),
                        num = $this.data('number');
                    console.log(num);
                    $this.animateNumber(
                        {
                            number: num,
                            numberStep: comma_separator_number_step
                        }, 7000
                    );
                });

            }

        }, { offset: '95%' });

    }
    counter();


});

function initTimer() {
    if ($('.timer').length) {
       
        var days, hours, minutes, seconds;

        var d = $('#day');
        var h = $('#hour');
        var m = $('#minute');
        var s = $('#second');

        setInterval(function () {
            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;
            days = parseInt(seconds_left / 86400);
            seconds_left = seconds_left % 86400;
            hours = parseInt(seconds_left / 3600);
            seconds_left = seconds_left % 3600;
            minutes = parseInt(seconds_left / 60);
            seconds = parseInt(seconds_left % 60);
            d.text(days);
            h.text(hours);
            m.text(minutes);
            s.text(seconds);
        }, 1000);
    }
}


function loadSocialMediaIcons(a, e, c) {
    var html = "";
    var list = a;
    var rc = 8;
    for (var i = 0; i < rc; i++) {
        if (a[i][1] == true) {
            var img = a[i][2];
            var link = a[i][3];
            html += '<li class="social-link"><a id="' + a[i][0] + '-link" data-link="' + a[i][0] + '" href="' + link + '" target="_blank">' +
                '<img class="' + c + '" src="' + img + '" alt="' + a[i][0] + '" ></a></li>'
        }
    }
    $('#' + e).html(html);
};

function loadPartialView(element, type) {
    $(element).html(navigation[type]);
}

function loadGoFundMeLink() {
    $("[data-link = 'gofundme']").each(function () {
        var ctrl = $(this);
        ctrl.attr("href", gofundmelink);
        ctrl.attr("target", "_blank");
    });
};

function setDefaultTab() {
    var id = $('body').attr("data-id");
    $('#' + id).addClass("selected");
}

//Ravage Specific Plugins

! function (l, o, e) {
    "use strict";
    l.fn.scrollUp = function (o) {
        l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o))
    }, l.fn.scrollUp.init = function (r) {
        var s, t, c, i, n, a, d, p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r),
            f = !1;
        switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", {
            id: p.scrollName,
            href: "#top"
        }), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({
            display: "none",
            position: "fixed",
            zIndex: p.zIndex
        }), p.activeOverlay && l("<div/>", {
            id: p.scrollName + "-active"
        }).css({
            position: "absolute",
            top: p.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + p.activeOverlay,
            zIndex: p.zIndex
        }).appendTo("body"), p.animation) {
            case "fade":
                s = "fadeIn", t = "fadeOut", c = p.animationSpeed;
                break;
            case "slide":
                s = "slideDown", t = "slideUp", c = p.animationSpeed;
                break;
            default:
                s = "show", t = "hide", c = 0
        }
        i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance, n = l(o).scroll(function () {
            l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1)
        }), p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0, d.click(function (o) {
            o.preventDefault(), l("html, body").animate({
                scrollTop: a
            }, p.scrollSpeed, p.easingType);
        });
    }, l.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 998
    }, l.fn.scrollUp.destroy = function (r) {
        l.removeData(e.body, "scrollUp"), l("#" + l.fn.scrollUp.settings.scrollName).remove(), l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(), l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r);
    }, l.scrollUp = l.fn.scrollUp;
}(jQuery, window, document);



(function ($) {
    $.fn.ravageslider = function (options) {
        var settings = $.extend({}, $.fn.ravageslider.defaults, options);
        var curIndex = $(this).attr("data-index");
        return this.each(function () {
            var ctrl = $(this);
            ctrl.attr("data-index", curIndex);
            if (settings.Height !== "") {
                ctrl.css("height", settings.Height);
            }

            ctrl.css("width", settings.Width);

            ctrl.css("background-image", "url(" + settings.ImageList[0] + ")");
            if ($('#sliderText0').length) {
                $('#sliderText').removeClass('hide_text');
            }
            var curCtrl = $('#sliderText0');
            setInterval(function () {
                curIndex++;
                if (curIndex > settings.ImageList.length - 1) {

                    ctrl.css("background-image", settings.ImageList[0]);
                    curIndex = 0;
                }
                var nextCtrl = $('#sliderText' + curIndex);
                if (settings.Fade) {
                    curCtrl.addClass("hide_text");
                    ctrl.removeClass("fadeIn").addClass("animated-slow").addClass("fadeOut");

                    setTimeout(function () {
                        ctrl.css("background-image", "url(" + settings.ImageList[curIndex] + ")");
                        ctrl.removeClass("fadeOut").addClass("animated-slow").addClass("fadeIn");
                        nextCtrl.removeClass("hide_text");
                    }, 2000);



                }
                else {
                    ctrl.css("background-image", "url(" + settings.ImageList[curIndex] + ")");
                    curCtrl.addClass("hide_text");
                    nextCtrl.removeClass("hide_text");
                }
                ctrl.attr("data-index", curIndex);

                curCtrl = $('#sliderText' + curIndex);


            }, settings.Interval);
        });
    };
    $.fn.ravageslider.defaults = {
        "Fade": false,
        "FadeExRate": 4000,
        "Interval": 10000,
        "ImageList": [""],
        "Height": "",
        "Width": "100%",
        "Contain": true
    };
})(jQuery, window, document);

(function ($) {
    $.fn.ravageFade = function (options) {
        var settings = $.extend({}, $.fn.ravageFade.defaults, options);
        var curIndex = $(this).attr("data-index");
        return this.each(function () {
            var ctrl = $(this);
            ctrl.attr("data-index", curIndex);
            ctrl.html(settings.fadeExMsg[0]);
            setInterval(function () {
                curIndex = ctrl.attr("data-index");
                var rgb = ctrl.css("color");
                var pos = rgb.lastIndexOf(",");
                rgb = rgb.slice(0, pos + 1);
                if (settings.Fade) {
                    ctrl.fadeOut("slow");
                    setTimeout(function () {
                        ctrl.html(curIndex > settings.fadeExMsg.length - 1 ?
                            settings.fadeExMsg[0] : settings.fadeExMsg[Number(curIndex) + 1]);
                        ctrl.fadeIn("slow");
                    }, 1000);
                }
                else {
                    ctrl.html(curIndex > settings.fadeExMsg.length - 1 ?
                        settings.fadeExMsg[0] : settings.fadeExMsg[Number(curIndex) + 1]);
                }

                ctrl.attr("data-index", Number(curIndex) + 1);
            }, settings.Interval);
        });
    };
    $.fn.ravageFade.defaults = {
        "Fade": false,
        "FadeExRate": 4000,
        "Interval": 6000,
        "fadeExMsg": ["Be A Part of Dark Solstice!", "Ravage Studios Gives Back!",
            "Entertainment for a Cause",
            "Spectacular Graphics and Design",
            "Support the Dark Solstice Project!",
            "Learn About Our Packs of Love Program"]
    };
})(jQuery, window, document);

(function ($) {
    $.fn.ravagebackgrounder = function (options) {
        var settings = $.extend({}, $.fn.ravagebackgrounder.defaults, options);
        return this.each(function () {
            var $ctrl = $(this);
            var subClass = settings.Repeat === true ? "bg_repeat" : "bg_cover";
            $ctrl.addClass(subClass);

            if (settings.HideOnResize) {
                $ctrl.addClass("resize");
            }


            $ctrl.css("min-height", settings.Height + "px");
            if (settings.URL !== "") {
                $ctrl.css("background", "url(" + settings.URL + ")");
                if (settings.Contain) {
                    $ctrl.css("background-size", "cover").css("background-repeat", "no-repeat");
                }

            }
            else {
                $ctrl.css("background-color", settings.Color);
            }
        });
    };
    $.fn.ravagebackgrounder.defaults = {
        "Repeat": false,
        "URL:": "",
        "Color": "#FFF",
        "Height": 0,
        "Contain": false,
        "HideOnResize": true

    };
})(jQuery, window, document);


(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#ravageNav').classyNav();
    }

    // :: 3.0 Sliders Active Code
    if ($.fn.owlCarousel) {
        var welcomeSlide = $('.hero-slideshow');
        var testiSlide = $('.testimonial-slides');

        welcomeSlide.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ['Prev', 'Next'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 10000,
            smartSpeed: 500,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        testiSlide.owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 10000,
            smartSpeed: 500
        });
    }


    // :: 6.0 Magnific Popup Active Code
    if ($.fn.magnificPopup) {
        $('.zoom-img').magnificPopup({
            type: 'image'
        });
    }
    // :: 7.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i> Top'
        });
    }

    // :: 8.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 9.0 Progress Bar Active Code
    if ($.fn.circleProgress) {
        $('#c1').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }
    if ($.fn.circleProgress) {
        $('#c2').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }
    if ($.fn.circleProgress) {
        $('#c3').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }
    if ($.fn.circleProgress) {
        $('#c4').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }


    // :: 11.0 Prevent Default a Click
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });



})(jQuery);


//Superfish
/*
 * jQuery Superfish Menu Plugin - v1.7.9
 * Copyright (c) 2016 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

; (function ($, w) {
    "use strict";

    var methods = (function () {
        // private properties and methods go here
        var c = {
            bcClass: 'sf-breadcrumb',
            menuClass: 'sf-js-enabled',
            anchorClass: 'sf-with-ul',
            menuArrowClass: 'sf-arrows'
        },
            ios = (function () {
                var ios = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);
                if (ios) {
                    // tap anywhere on iOS to unfocus a submenu
                    $('html').css('cursor', 'pointer').on('click', $.noop);
                }
                return ios;
            })(),
            wp7 = (function () {
                var style = document.documentElement.style;
                return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent));
            })(),
            unprefixedPointerEvents = (function () {
                return (!!w.PointerEvent);
            })(),
            toggleMenuClasses = function ($menu, o, add) {
                var classes = c.menuClass,
                    method;
                if (o.cssArrows) {
                    classes += ' ' + c.menuArrowClass;
                }
                method = (add) ? 'addClass' : 'removeClass';
                $menu[method](classes);
            },
            setPathToCurrent = function ($menu, o) {
                return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels)
                    .addClass(o.hoverClass + ' ' + c.bcClass)
                    .filter(function () {
                        return ($(this).children(o.popUpSelector).hide().show().length);
                    }).removeClass(o.pathClass);
            },
            toggleAnchorClass = function ($li, add) {
                var method = (add) ? 'addClass' : 'removeClass';
                $li.children('a')[method](c.anchorClass);
            },
            toggleTouchAction = function ($menu) {
                var msTouchAction = $menu.css('ms-touch-action');
                var touchAction = $menu.css('touch-action');
                touchAction = touchAction || msTouchAction;
                touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
                $menu.css({
                    'ms-touch-action': touchAction,
                    'touch-action': touchAction
                });
            },
            getMenu = function ($el) {
                return $el.closest('.' + c.menuClass);
            },
            getOptions = function ($el) {
                return getMenu($el).data('sfOptions');
            },
            over = function () {
                var $this = $(this),
                    o = getOptions($this);
                clearTimeout(o.sfTimer);
                $this.siblings().superfish('hide').end().superfish('show');
            },
            close = function (o) {
                o.retainPath = ($.inArray(this[0], o.$path) > -1);
                this.superfish('hide');

                if (!this.parents('.' + o.hoverClass).length) {
                    o.onIdle.call(getMenu(this));
                    if (o.$path.length) {
                        $.proxy(over, o.$path)();
                    }
                }
            },
            out = function () {
                var $this = $(this),
                    o = getOptions($this);
                if (ios) {
                    $.proxy(close, $this, o)();
                }
                else {
                    clearTimeout(o.sfTimer);
                    o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
                }
            },
            touchHandler = function (e) {
                var $this = $(this),
                    o = getOptions($this),
                    $ul = $this.siblings(e.data.popUpSelector);

                if (o.onHandleTouch.call($ul) === false) {
                    return this;
                }

                if ($ul.length > 0 && $ul.is(':hidden')) {
                    $this.one('click.superfish', false);
                    if (e.type === 'MSPointerDown' || e.type === 'pointerdown') {
                        $this.trigger('focus');
                    } else {
                        $.proxy(over, $this.parent('li'))();
                    }
                }
            },
            applyHandlers = function ($menu, o) {
                var targets = 'li:has(' + o.popUpSelector + ')';
                if ($.fn.hoverIntent && !o.disableHI) {
                    $menu.hoverIntent(over, out, targets);
                }
                else {
                    $menu
                        .on('mouseenter.superfish', targets, over)
                        .on('mouseleave.superfish', targets, out);
                }
                var touchevent = 'MSPointerDown.superfish';
                if (unprefixedPointerEvents) {
                    touchevent = 'pointerdown.superfish';
                }
                if (!ios) {
                    touchevent += ' touchend.superfish';
                }
                if (wp7) {
                    touchevent += ' mousedown.superfish';
                }
                $menu
                    .on('focusin.superfish', 'li', over)
                    .on('focusout.superfish', 'li', out)
                    .on(touchevent, 'a', o, touchHandler);
            };

        return {
            // public methods
            hide: function (instant) {
                if (this.length) {
                    var $this = this,
                        o = getOptions($this);
                    if (!o) {
                        return this;
                    }
                    var not = (o.retainPath === true) ? o.$path : '',
                        $ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
                        speed = o.speedOut;

                    if (instant) {
                        $ul.show();
                        speed = 0;
                    }
                    o.retainPath = false;

                    if (o.onBeforeHide.call($ul) === false) {
                        return this;
                    }

                    $ul.stop(true, true).animate(o.animationOut, speed, function () {
                        var $this = $(this);
                        o.onHide.call($this);
                    });
                }
                return this;
            },
            show: function () {
                var o = getOptions(this);
                if (!o) {
                    return this;
                }
                var $this = this.addClass(o.hoverClass),
                    $ul = $this.children(o.popUpSelector);

                if (o.onBeforeShow.call($ul) === false) {
                    return this;
                }

                $ul.stop(true, true).animate(o.animation, o.speed, function () {
                    o.onShow.call($ul);
                });
                return this;
            },
            destroy: function () {
                return this.each(function () {
                    var $this = $(this),
                        o = $this.data('sfOptions'),
                        $hasPopUp;
                    if (!o) {
                        return false;
                    }
                    $hasPopUp = $this.find(o.popUpSelector).parent('li');
                    clearTimeout(o.sfTimer);
                    toggleMenuClasses($this, o);
                    toggleAnchorClass($hasPopUp);
                    toggleTouchAction($this);
                    // remove event handlers
                    $this.off('.superfish').off('.hoverIntent');
                    // clear animation's inline display style
                    $hasPopUp.children(o.popUpSelector).attr('style', function (i, style) {
                        return style.replace(/display[^;]+;?/g, '');
                    });
                    // reset 'current' path classes
                    o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
                    $this.find('.' + o.hoverClass).removeClass(o.hoverClass);
                    o.onDestroy.call($this);
                    $this.removeData('sfOptions');
                });
            },
            init: function (op) {
                return this.each(function () {
                    var $this = $(this);
                    if ($this.data('sfOptions')) {
                        return false;
                    }
                    var o = $.extend({}, $.fn.superfish.defaults, op),
                        $hasPopUp = $this.find(o.popUpSelector).parent('li');
                    o.$path = setPathToCurrent($this, o);

                    $this.data('sfOptions', o);

                    toggleMenuClasses($this, o, true);
                    toggleAnchorClass($hasPopUp, true);
                    toggleTouchAction($this);
                    applyHandlers($this, o);

                    $hasPopUp.not('.' + c.bcClass).superfish('hide', true);

                    o.onInit.call(this);
                });
            }
        };
    })();

    $.fn.superfish = function (method, args) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }
        else {
            return $.error('Method ' + method + ' does not exist on jQuery.fn.superfish');
        }
    };

    $.fn.superfish.defaults = {
        popUpSelector: 'ul,.sf-mega', // within menu context
        hoverClass: 'sfHover',
        pathClass: 'overrideThisToUse',
        pathLevels: 1,
        delay: 800,
        animation: { opacity: 'show' },
        animationOut: { opacity: 'hide' },
        speed: 'normal',
        speedOut: 'fast',
        cssArrows: true,
        disableHI: false,
        onInit: $.noop,
        onBeforeShow: $.noop,
        onShow: $.noop,
        onBeforeHide: $.noop,
        onHide: $.noop,
        onIdle: $.noop,
        onDestroy: $.noop,
        onHandleTouch: $.noop
    };

})(jQuery, window);



(function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define &&
        define.amd ? define([], e) : "object" == typeof exports ? exports.Typed = e() : t.Typed = e();
})(this, function () {
    return function (t) {
        function e(n) {
            if (s[n])
                return s[n].exports; var i = s[n] = { exports: {}, id: n, loaded: !1 }; return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
        } var s = {}; return e.m = t, e.c = s, e.p = "", e(0);
    }([function (t, e, s) {
        "use strict";
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = function () {
            function t(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            } return function (e, s, n) { return s && t(e.prototype, s), n && t(e, n), e; };
        }(), r = s(1), o = s(3), a = function () {
            function t(e, s) { n(this, t), r.initializer.load(this, s, e), this.begin(); } return i(t, [{
                key: "toggle", value: function () {
                    this.pause.status ? this.start() : this.stop();
                }
            }, {
                key: "stop", value: function () {
                    this.typingComplete || this.pause.status || (this.toggleBlinking(!0),
                        this.pause.status = !0, this.options.onStop(this.arrayPos, this));
                }
            }, {
                key: "start", value: function () {
                    this.typingComplete || this.pause.status && (this.pause.status = !1,
                        this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
                }
            }, { key: "destroy", value: function () { this.reset(!1), this.options.onDestroy(this); } }, {
                key: "reset", value: function () {
                    var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0]; clearInterval(this.timeout), this.replaceText(""),
                        this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null),
                        this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin());
                }
            }, {
                key: "begin", value: function () {
                    var t = this; this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(),
                        this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function () {
                            t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos);
                        }, this.startDelay);
                }
            }, {
                key: "typewrite", value: function (t, e) {
                    var s = this; this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass),
                        this.cursor && this.cursor.classList.remove(this.fadeOutClass)); var n = this.humanizer(this.typeSpeed), i = 1;
                    return this.pause.status === !0 ? void this.setPauseStatus(t, e, !0) : void (this.timeout = setTimeout(function () {
                        e = o.htmlParser.typeHtmlChars(t, e, s); var n = 0, r = t.substr(e); if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
                            var a = 1;
                            r = /\d+/.exec(r)[0], a += r.length, n = parseInt(r), s.temporaryPause = !0, s.options.onTypingPaused(s.arrayPos, s),
                                t = t.substring(0, e) + t.substring(e + a), s.toggleBlinking(!0);
                        } if ("`" === r.charAt(0)) {
                            for (; "`" !== t.substr(e + i).charAt(0) && (i++ , !(e + i > t.length));)
                                ;
                            var u = t.substring(0, e), l = t.substring(u.length + 1, e + i), c = t.substring(e + i + 1);
                            t = u + l + c, i--;
                        } s.timeout = setTimeout(function () {
                            s.toggleBlinking(!1), e === t.length ? s.doneTyping(t, e) : s.keepTyping(t, e, i),
                                s.temporaryPause && (s.temporaryPause = !1, s.options.onTypingResumed(s.arrayPos, s));
                        }, n);
                    }, n));
                }
            }, {
                key: "keepTyping", value: function (t, e, s) {
                    0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)),
                        e += s; var n = t.substr(0, e); this.replaceText(n), this.typewrite(t, e);
                }
            }, {
                key: "doneTyping", value: function (t, e) {
                    var s = this; this.options.onStringTyped(this.arrayPos, this),
                        this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(),
                            this.loop === !1 || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function () { s.backspace(t, e); }, this.backDelay));
                }
            }, {
                key: "backspace", value: function (t, e) {
                    var s = this; if (this.pause.status === !0)
                        return void this.setPauseStatus(t, e, !0); if (this.fadeOut)
                        return this.initFadeOut(); this.toggleBlinking(!1); var n = this.humanizer(this.backSpeed); this.timeout = setTimeout(function () {
                            e = o.htmlParser.backSpaceHtmlChars(t, e, s); var n = t.substr(0, e); if (s.replaceText(n), s.smartBackspace) {
                                var i = s.strings[s.arrayPos + 1];
                                i && n === i.substr(0, e) ? s.stopNum = e : s.stopNum = 0;
                            } e > s.stopNum ? (e-- , s.backspace(t, e)) : e <= s.stopNum && (s.arrayPos++ , s.arrayPos === s.strings.length ?
                                (s.arrayPos = 0, s.options.onLastStringBackspaced(), s.shuffleStringsIfNeeded(), s.begin()) : s.typewrite(s.strings[s.sequence[s.arrayPos]], e));
                        }, n);
                }
            }, { key: "complete", value: function () { this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0; } },
            { key: "setPauseStatus", value: function (t, e, s) { this.pause.typewrite = s, this.pause.curString = t, this.pause.curStrPos = e; } },
            {
                key: "toggleBlinking", value: function (t) {
                    this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ?
                        this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
                }
            }, { key: "humanizer", value: function (t) { return Math.round(Math.random() * t / 2) + t; } }, {
                key: "shuffleStringsIfNeeded",
                value: function () { this.shuffle && (this.sequence = this.sequence.sort(function () { return Math.random() - .5; })); }
            }, {
                key: "initFadeOut", value: function () {
                    var t = this; return this.el.className += " " + this.fadeOutClass, this.cursor &&
                        (this.cursor.className += " " + this.fadeOutClass), setTimeout(function () {
                            t.arrayPos++ , t.replaceText(""),
                                t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0);
                        }, this.fadeOutDelay);
                }
            }, {
                key: "replaceText", value: function (t) {
                    this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t :
                        "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t;
                }
            }, {
                key: "bindFocusEvents", value: function () {
                    var t = this; this.isInput && (this.el.addEventListener("focus", function (e) { t.stop(); }),
                        this.el.addEventListener("blur", function (e) { t.el.value && 0 !== t.el.value.length || t.start(); }));
                }
            }, {
                key: "insertCursor", value: function () {
                    this.showCursor && (this.cursor || (this.cursor = document.createElement("span"),
                        this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
                }
            }]), t;
        }();
        e["default"] = a, t.exports = e["default"];
    }, function (t, e, s) {
        "use strict";
        function n(t) { return t && t.__esModule ? t : { "default": t }; }
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var s = arguments[e];
                for (var n in s)
                    Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
            } return t;
        }, o = function () {
            function t(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            } return function (e, s, n) { return s && t(e.prototype, s), n && t(e, n), e; };
        }(), a = s(2), u = n(a), l = function () {
            function t() { i(this, t); } return o(t, [{
                key: "load", value: function (t, e, s) {
                    if ("string" == typeof s ? t.el = document.querySelector(s) : t.el = s, t.options = r({}, u["default"], e),
                        t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents =
                        t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0,
                        t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed,
                        t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay,
                        t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings =
                        t.options.strings.map(function (t) { return t.trim(); }), "string" == typeof t.options.stringsElement ? t.stringsElement =
                            document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement) {
                        t.strings = [], t.stringsElement.style.display = "none";
                        var n = Array.prototype.slice.apply(t.stringsElement.children), i = n.length;
                        if (i)
                            for (var o = 0; o < i; o += 1) {
                                var a = n[o];
                                t.strings.push(a.innerHTML.trim());
                            }
                    } t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle,
                        t.sequence = [], t.pause = { status: !1, typewrite: !0, curString: "", curStrPos: 0 }, t.typingComplete = !1; for (var o in t.strings)
                        t.sequence[o] = o; t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t);
                }
            }, { key: "getCurrentElContent", value: function (t) { var e = ""; return e = t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent; } }, {
                key: "appendAnimationCss", value: function (t) {
                    var e = "data-typed-js-css"; if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[" + e + "]")) {
                        var s = document.createElement("style");
                        s.type = "text/css", s.setAttribute(e, !0);
                        var n = "";
                        t.showCursor && (n += "\n.typed-cursor{\n opacity: 1;\n}\n .typed-cursor.typed-cursor--blink{\n animation: typedjsBlink 0.7s infinite;\n " +
                            "-webkit - animation: typedjsBlink 0.7s infinite; \n  animation: typedjsBlink 0.7s infinite; \n" +
                            " } \n  @keyframes typedjsBlink{ \n 50 % { opacity: 0.0; }\n } \n @-webkit - keyframes typedjsBlink{ \n 0 % { opacity: 1; }\n 50 % { opacity: 0.0; }\n100 % { opacity: 1; }\n } \n "),
                            t.fadeOut && (n += "\n.typed - fade - out{ \n opacity: 0; \n transition: opacity .25s; \n } \n.typed - cursor.typed - cursor--blink.typed - fade - out{ \n - webkit - animation: 0; \n" +
                                "animation: 0; \n } \n"), 0 !== s.length && (s.innerHTML = n, document.body.appendChild(s));
                    }
                }
            }]), t;
        }();
        e["default"] = l;
        var c = new l;
        e.initializer = c;
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = {
            strings: ["Ravag Studios is Awesome!", "Ravag Studios is Awesome!", "Ravag Studios is Awesome!", "Have a great day!"], stringsElement: null,
            typeSpeed: 0, startDelay: 0, backSpeed: 0, smartBackspace: !0, shuffle: !1, backDelay: 700, fadeOut: !1, fadeOutClass: "typed-fade-out", fadeOutDelay: 500,
            loop: !1, loopCount: 1 / 0, showCursor: !0, cursorChar: "|", autoInsertCss: !0, attr: null, bindInputFocusEvents: !1, contentType: "html", onComplete: function (t) { },
            preStringTyped: function (t, e) { }, onStringTyped: function (t, e) { }, onLastStringBackspaced: function (t) { }, onTypingPaused: function (t, e) { }, onTypingResumed:
                function (t, e) { }, onReset: function (t) { }, onStop: function (t, e) { }, onStart: function (t, e) { }, onDestroy: function (t) { }
        };
        e["default"] = s, t.exports = e["default"];
    }, function (t, e) {
        "use strict";
        function s(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = function () {
            function t(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            } return function (e, s, n) { return s && t(e.prototype, s), n && t(e, n), e; };
        }(), i = function () {
            function t() { s(this, t); } return n(t, [{
                key: "typeHtmlChars", value: function (t, e, s) {
                    if ("html" !== s.contentType)
                        return e; var n = t.substr(e).charAt(0); if ("<" === n || "&" === n) {
                            var i = "";
                            for (i = "<" === n ? ">" : ";"; t.substr(e + 1).charAt(0) !== i && (e++ , !(e + 1 > t.length));)
                                ;
                            e++;
                        } return e;
                }
            }, {
                key: "backSpaceHtmlChars", value: function (t, e, s) {
                    if ("html" !== s.contentType)
                        return e; var n = t.substr(e).charAt(0); if (">" === n || ";" === n) {
                            var i = "";
                            for (i = ">" === n ? "<" : "&"; t.substr(e - 1).charAt(0) !== i && (e-- , !(e < 0));)
                                ;
                            e--;
                        } return e;
                }
            }]), t;
        }();
        e["default"] = i;
        var r = new i;
        e.htmlParser = r;
    }]);
});


(function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define &&
        define.amd ? define([], e) : "object" == typeof exports ? exports.Typed = e() : t.Typed = e();
})(this, function () {
    return function (t) {
        function e(n) {
            if (s[n])
                return s[n].exports; var i = s[n] = { exports: {}, id: n, loaded: !1 }; return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
        } var s = {}; return e.m = t, e.c = s, e.p = "", e(0);
    }([function (t, e, s) {
        "use strict";
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = function () {
            function t(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            } return function (e, s, n) { return s && t(e.prototype, s), n && t(e, n), e; };
        }(), r = s(1), o = s(3), a = function () {
            function t(e, s) { n(this, t), r.initializer.load(this, s, e), this.begin(); } return i(t, [{
                key: "toggle", value: function () {
                    this.pause.status ? this.start() : this.stop();
                }
            }, {
                key: "stop", value: function () {
                    this.typingComplete || this.pause.status || (this.toggleBlinking(!0),
                        this.pause.status = !0, this.options.onStop(this.arrayPos, this));
                }
            }, {
                key: "start", value: function () {
                    this.typingComplete || this.pause.status && (this.pause.status = !1,
                        this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
                }
            }, { key: "destroy", value: function () { this.reset(!1), this.options.onDestroy(this); } }, {
                key: "reset", value: function () {
                    var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0]; clearInterval(this.timeout), this.replaceText(""),
                        this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null),
                        this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin());
                }
            }, {
                key: "begin", value: function () {
                    var t = this; this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(),
                        this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function () {
                            t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos);
                        }, this.startDelay);
                }
            }, {
                key: "typewrite", value: function (t, e) {
                    var s = this; this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass),
                        this.cursor && this.cursor.classList.remove(this.fadeOutClass)); var n = this.humanizer(this.typeSpeed), i = 1;
                    return this.pause.status === !0 ? void this.setPauseStatus(t, e, !0) : void (this.timeout = setTimeout(function () {
                        e = o.htmlParser.typeHtmlChars(t, e, s); var n = 0, r = t.substr(e); if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
                            var a = 1;
                            r = /\d+/.exec(r)[0], a += r.length, n = parseInt(r), s.temporaryPause = !0, s.options.onTypingPaused(s.arrayPos, s),
                                t = t.substring(0, e) + t.substring(e + a), s.toggleBlinking(!0);
                        } if ("`" === r.charAt(0)) {
                            for (; "`" !== t.substr(e + i).charAt(0) && (i++ , !(e + i > t.length));)
                                ;
                            var u = t.substring(0, e), l = t.substring(u.length + 1, e + i), c = t.substring(e + i + 1);
                            t = u + l + c, i--;
                        } s.timeout = setTimeout(function () {
                            s.toggleBlinking(!1), e === t.length ? s.doneTyping(t, e) : s.keepTyping(t, e, i),
                                s.temporaryPause && (s.temporaryPause = !1, s.options.onTypingResumed(s.arrayPos, s));
                        }, n);
                    }, n));
                }
            }, {
                key: "keepTyping", value: function (t, e, s) {
                    0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)),
                        e += s; var n = t.substr(0, e); this.replaceText(n), this.typewrite(t, e);
                }
            }, {
                key: "doneTyping", value: function (t, e) {
                    var s = this; this.options.onStringTyped(this.arrayPos, this),
                        this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(),
                            this.loop === !1 || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function () { s.backspace(t, e); }, this.backDelay));
                }
            }, {
                key: "backspace", value: function (t, e) {
                    var s = this; if (this.pause.status === !0)
                        return void this.setPauseStatus(t, e, !0); if (this.fadeOut)
                        return this.initFadeOut(); this.toggleBlinking(!1); var n = this.humanizer(this.backSpeed); this.timeout = setTimeout(function () {
                            e = o.htmlParser.backSpaceHtmlChars(t, e, s); var n = t.substr(0, e); if (s.replaceText(n), s.smartBackspace) {
                                var i = s.strings[s.arrayPos + 1];
                                i && n === i.substr(0, e) ? s.stopNum = e : s.stopNum = 0;
                            } e > s.stopNum ? (e-- , s.backspace(t, e)) : e <= s.stopNum && (s.arrayPos++ , s.arrayPos === s.strings.length ?
                                (s.arrayPos = 0, s.options.onLastStringBackspaced(), s.shuffleStringsIfNeeded(), s.begin()) : s.typewrite(s.strings[s.sequence[s.arrayPos]], e));
                        }, n);
                }
            }, { key: "complete", value: function () { this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0; } },
            { key: "setPauseStatus", value: function (t, e, s) { this.pause.typewrite = s, this.pause.curString = t, this.pause.curStrPos = e; } },
            {
                key: "toggleBlinking", value: function (t) {
                    this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ?
                        this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
                }
            }, { key: "humanizer", value: function (t) { return Math.round(Math.random() * t / 2) + t; } }, {
                key: "shuffleStringsIfNeeded",
                value: function () { this.shuffle && (this.sequence = this.sequence.sort(function () { return Math.random() - .5; })); }
            }, {
                key: "initFadeOut", value: function () {
                    var t = this; return this.el.className += " " + this.fadeOutClass, this.cursor &&
                        (this.cursor.className += " " + this.fadeOutClass), setTimeout(function () {
                            t.arrayPos++ , t.replaceText(""),
                                t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0);
                        }, this.fadeOutDelay);
                }
            }, {
                key: "replaceText", value: function (t) {
                    this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t :
                        "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t;
                }
            }, {
                key: "bindFocusEvents", value: function () {
                    var t = this; this.isInput && (this.el.addEventListener("focus", function (e) { t.stop(); }),
                        this.el.addEventListener("blur", function (e) { t.el.value && 0 !== t.el.value.length || t.start(); }));
                }
            }, {
                key: "insertCursor", value: function () {
                    this.showCursor && (this.cursor || (this.cursor = document.createElement("span"),
                        this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
                }
            }]), t;
        }();
        e["default"] = a, t.exports = e["default"];
    }, function (t, e, s) {
        "use strict";
        function n(t) { return t && t.__esModule ? t : { "default": t }; }
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var s = arguments[e];
                for (var n in s)
                    Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
            } return t;
        }, o = function () {
            function t(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            } return function (e, s, n) { return s && t(e.prototype, s), n && t(e, n), e; };
        }(), a = s(2), u = n(a), l = function () {
            function t() { i(this, t); } return o(t, [{
                key: "load", value: function (t, e, s) {
                    if ("string" == typeof s ? t.el = document.querySelector(s) : t.el = s, t.options = r({}, u["default"], e),
                        t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents =
                        t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0,
                        t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed,
                        t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay,
                        t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings =
                        t.options.strings.map(function (t) { return t.trim(); }), "string" == typeof t.options.stringsElement ? t.stringsElement =
                            document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement) {
                        t.strings = [], t.stringsElement.style.display = "none";
                        var n = Array.prototype.slice.apply(t.stringsElement.children), i = n.length;
                        if (i)
                            for (var o = 0; o < i; o += 1) {
                                var a = n[o];
                                t.strings.push(a.innerHTML.trim());
                            }
                    } t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle,
                        t.sequence = [], t.pause = { status: !1, typewrite: !0, curString: "", curStrPos: 0 }, t.typingComplete = !1; for (var o in t.strings)
                        t.sequence[o] = o; t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t);
                }
            }, { key: "getCurrentElContent", value: function (t) { var e = ""; return e = t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent; } }, {
                key: "appendAnimationCss", value: function (t) {
                    var e = "data-typed-js-css"; if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[" + e + "]")) {
                        var s = document.createElement("style");
                        s.type = "text/css", s.setAttribute(e, !0);
                        var n = "";
                        t.showCursor && (n += "\n.typed-cursor{\n opacity: 1;\n}\n .typed-cursor.typed-cursor--blink{\n animation: typedjsBlink 0.7s infinite;\n " +
                            "-webkit - animation: typedjsBlink 0.7s infinite; \n  animation: typedjsBlink 0.7s infinite; \n" +
                            " } \n  @keyframes typedjsBlink{ \n 50 % { opacity: 0.0; }\n } \n @-webkit - keyframes typedjsBlink{ \n 0 % { opacity: 1; }\n 50 % { opacity: 0.0; }\n100 % { opacity: 1; }\n } \n "),
                            t.fadeOut && (n += "\n.typed - fade - out{ \n opacity: 0; \n transition: opacity .25s; \n } \n.typed - cursor.typed - cursor--blink.typed - fade - out{ \n - webkit - animation: 0; \n" +
                                "animation: 0; \n } \n"), 0 !== s.length && (s.innerHTML = n, document.body.appendChild(s));
                    }
                }
            }]), t;
        }();
        e["default"] = l;
        var c = new l;
        e.initializer = c;
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = {
            strings: ["Ravag Studios is Awesome!", "Ravag Studios is Awesome!", "Ravag Studios is Awesome!", "Have a great day!"], stringsElement: null,
            typeSpeed: 0, startDelay: 0, backSpeed: 0, smartBackspace: !0, shuffle: !1, backDelay: 700, fadeOut: !1, fadeOutClass: "typed-fade-out", fadeOutDelay: 500,
            loop: !1, loopCount: 1 / 0, showCursor: !0, cursorChar: "|", autoInsertCss: !0, attr: null, bindInputFocusEvents: !1, contentType: "html", onComplete: function (t) { },
            preStringTyped: function (t, e) { }, onStringTyped: function (t, e) { }, onLastStringBackspaced: function (t) { }, onTypingPaused: function (t, e) { }, onTypingResumed:
                function (t, e) { }, onReset: function (t) { }, onStop: function (t, e) { }, onStart: function (t, e) { }, onDestroy: function (t) { }
        };
        e["default"] = s, t.exports = e["default"];
    }, function (t, e) {
        "use strict";
        function s(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = function () {
            function t(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            } return function (e, s, n) { return s && t(e.prototype, s), n && t(e, n), e; };
        }(), i = function () {
            function t() { s(this, t); } return n(t, [{
                key: "typeHtmlChars", value: function (t, e, s) {
                    if ("html" !== s.contentType)
                        return e; var n = t.substr(e).charAt(0); if ("<" === n || "&" === n) {
                            var i = "";
                            for (i = "<" === n ? ">" : ";"; t.substr(e + 1).charAt(0) !== i && (e++ , !(e + 1 > t.length));)
                                ;
                            e++;
                        } return e;
                }
            }, {
                key: "backSpaceHtmlChars", value: function (t, e, s) {
                    if ("html" !== s.contentType)
                        return e; var n = t.substr(e).charAt(0); if (">" === n || ";" === n) {
                            var i = "";
                            for (i = ">" === n ? "<" : "&"; t.substr(e - 1).charAt(0) !== i && (e-- , !(e < 0));)
                                ;
                            e--;
                        } return e;
                }
            }]), t;
        }();
        e["default"] = i;
        var r = new i;
        e.htmlParser = r;
    }]);
});


(function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define &&
        define.amd ? define([], e) : "object" == typeof exports ? exports.Typed = e() : t.Typed = e();
})(this, function () {
    return function (t) {
        function e(n) {
            if (s[n])
                return s[n].exports; var i = s[n] = { exports: {}, id: n, loaded: !1 }; return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
        } var s = {}; return e.m = t, e.c = s, e.p = "", e(0);
    }([function (t, e, s) {
        "use strict";
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = function () {
            function t(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            } return function (e, s, n) { return s && t(e.prototype, s), n && t(e, n), e; };
        }(), r = s(1), o = s(3), a = function () {
            function t(e, s) { n(this, t), r.initializer.load(this, s, e), this.begin(); } return i(t, [{
                key: "toggle", value: function () {
                    this.pause.status ? this.start() : this.stop();
                }
            }, {
                key: "stop", value: function () {
                    this.typingComplete || this.pause.status || (this.toggleBlinking(!0),
                        this.pause.status = !0, this.options.onStop(this.arrayPos, this));
                }
            }, {
                key: "start", value: function () {
                    this.typingComplete || this.pause.status && (this.pause.status = !1,
                        this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
                }
            }, { key: "destroy", value: function () { this.reset(!1), this.options.onDestroy(this); } }, {
                key: "reset", value: function () {
                    var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0]; clearInterval(this.timeout), this.replaceText(""),
                        this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null),
                        this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin());
                }
            }, {
                key: "begin", value: function () {
                    var t = this; this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(),
                        this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function () {
                            t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos);
                        }, this.startDelay);
                }
            }, {
                key: "typewrite", value: function (t, e) {
                    var s = this; this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass),
                        this.cursor && this.cursor.classList.remove(this.fadeOutClass)); var n = this.humanizer(this.typeSpeed), i = 1;
                    return this.pause.status === !0 ? void this.setPauseStatus(t, e, !0) : void (this.timeout = setTimeout(function () {
                        e = o.htmlParser.typeHtmlChars(t, e, s); var n = 0, r = t.substr(e); if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
                            var a = 1;
                            r = /\d+/.exec(r)[0], a += r.length, n = parseInt(r), s.temporaryPause = !0, s.options.onTypingPaused(s.arrayPos, s),
                                t = t.substring(0, e) + t.substring(e + a), s.toggleBlinking(!0);
                        } if ("`" === r.charAt(0)) {
                            for (; "`" !== t.substr(e + i).charAt(0) && (i++ , !(e + i > t.length));)
                                ;
                            var u = t.substring(0, e), l = t.substring(u.length + 1, e + i), c = t.substring(e + i + 1);
                            t = u + l + c, i--;
                        } s.timeout = setTimeout(function () {
                            s.toggleBlinking(!1), e === t.length ? s.doneTyping(t, e) : s.keepTyping(t, e, i),
                                s.temporaryPause && (s.temporaryPause = !1, s.options.onTypingResumed(s.arrayPos, s));
                        }, n);
                    }, n));
                }
            }, {
                key: "keepTyping", value: function (t, e, s) {
                    0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)),
                        e += s; var n = t.substr(0, e); this.replaceText(n), this.typewrite(t, e);
                }
            }, {
                key: "doneTyping", value: function (t, e) {
                    var s = this; this.options.onStringTyped(this.arrayPos, this),
                        this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(),
                            this.loop === !1 || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function () { s.backspace(t, e); }, this.backDelay));
                }
            }, {
                key: "backspace", value: function (t, e) {
                    var s = this; if (this.pause.status === !0)
                        return void this.setPauseStatus(t, e, !0); if (this.fadeOut)
                        return this.initFadeOut(); this.toggleBlinking(!1); var n = this.humanizer(this.backSpeed); this.timeout = setTimeout(function () {
                            e = o.htmlParser.backSpaceHtmlChars(t, e, s); var n = t.substr(0, e); if (s.replaceText(n), s.smartBackspace) {
                                var i = s.strings[s.arrayPos + 1];
                                i && n === i.substr(0, e) ? s.stopNum = e : s.stopNum = 0;
                            } e > s.stopNum ? (e-- , s.backspace(t, e)) : e <= s.stopNum && (s.arrayPos++ , s.arrayPos === s.strings.length ?
                                (s.arrayPos = 0, s.options.onLastStringBackspaced(), s.shuffleStringsIfNeeded(), s.begin()) : s.typewrite(s.strings[s.sequence[s.arrayPos]], e));
                        }, n);
                }
            }, { key: "complete", value: function () { this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0; } },
            { key: "setPauseStatus", value: function (t, e, s) { this.pause.typewrite = s, this.pause.curString = t, this.pause.curStrPos = e; } },
            {
                key: "toggleBlinking", value: function (t) {
                    this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ?
                        this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
                }
            }, { key: "humanizer", value: function (t) { return Math.round(Math.random() * t / 2) + t; } }, {
                key: "shuffleStringsIfNeeded",
                value: function () { this.shuffle && (this.sequence = this.sequence.sort(function () { return Math.random() - .5; })); }
            }, {
                key: "initFadeOut", value: function () {
                    var t = this; return this.el.className += " " + this.fadeOutClass, this.cursor &&
                        (this.cursor.className += " " + this.fadeOutClass), setTimeout(function () {
                            t.arrayPos++ , t.replaceText(""),
                                t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0);
                        }, this.fadeOutDelay);
                }
            }, {
                key: "replaceText", value: function (t) {
                    this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t :
                        "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t;
                }
            }, {
                key: "bindFocusEvents", value: function () {
                    var t = this; this.isInput && (this.el.addEventListener("focus", function (e) { t.stop(); }),
                        this.el.addEventListener("blur", function (e) { t.el.value && 0 !== t.el.value.length || t.start(); }));
                }
            }, {
                key: "insertCursor", value: function () {
                    this.showCursor && (this.cursor || (this.cursor = document.createElement("span"),
                        this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
                }
            }]), t;
        }();
        e["default"] = a, t.exports = e["default"];
    }, function (t, e, s) {
        "use strict";
        function n(t) { return t && t.__esModule ? t : { "default": t }; }
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var s = arguments[e];
                for (var n in s)
                    Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
            } return t;
        }, o = function () {
            function t(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            } return function (e, s, n) { return s && t(e.prototype, s), n && t(e, n), e; };
        }(), a = s(2), u = n(a), l = function () {
            function t() { i(this, t); } return o(t, [{
                key: "load", value: function (t, e, s) {
                    if ("string" == typeof s ? t.el = document.querySelector(s) : t.el = s, t.options = r({}, u["default"], e),
                        t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents =
                        t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0,
                        t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed,
                        t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay,
                        t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings =
                        t.options.strings.map(function (t) { return t.trim(); }), "string" == typeof t.options.stringsElement ? t.stringsElement =
                            document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement) {
                        t.strings = [], t.stringsElement.style.display = "none";
                        var n = Array.prototype.slice.apply(t.stringsElement.children), i = n.length;
                        if (i)
                            for (var o = 0; o < i; o += 1) {
                                var a = n[o];
                                t.strings.push(a.innerHTML.trim());
                            }
                    } t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle,
                        t.sequence = [], t.pause = { status: !1, typewrite: !0, curString: "", curStrPos: 0 }, t.typingComplete = !1; for (var o in t.strings)
                        t.sequence[o] = o; t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t);
                }
            }, { key: "getCurrentElContent", value: function (t) { var e = ""; return e = t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent; } }, {
                key: "appendAnimationCss", value: function (t) {
                    var e = "data-typed-js-css"; if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[" + e + "]")) {
                        var s = document.createElement("style");
                        s.type = "text/css", s.setAttribute(e, !0);
                        var n = "";
                        t.showCursor && (n += "\n.typed-cursor{\n opacity: 1;\n}\n .typed-cursor.typed-cursor--blink{\n animation: typedjsBlink 0.7s infinite;\n " +
                            "-webkit - animation: typedjsBlink 0.7s infinite; \n  animation: typedjsBlink 0.7s infinite; \n" +
                            " } \n  @keyframes typedjsBlink{ \n 50 % { opacity: 0.0; }\n } \n @-webkit - keyframes typedjsBlink{ \n 0 % { opacity: 1; }\n 50 % { opacity: 0.0; }\n100 % { opacity: 1; }\n } \n "),
                            t.fadeOut && (n += "\n.typed - fade - out{ \n opacity: 0; \n transition: opacity .25s; \n } \n.typed - cursor.typed - cursor--blink.typed - fade - out{ \n - webkit - animation: 0; \n" +
                                "animation: 0; \n } \n"), 0 !== s.length && (s.innerHTML = n, document.body.appendChild(s));
                    }
                }
            }]), t;
        }();
        e["default"] = l;
        var c = new l;
        e.initializer = c;
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = {
            strings: ["Ravag Studios is Awesome!", "Ravag Studios is Awesome!", "Ravag Studios is Awesome!", "Have a great day!"], stringsElement: null,
            typeSpeed: 0, startDelay: 0, backSpeed: 0, smartBackspace: !0, shuffle: !1, backDelay: 700, fadeOut: !1, fadeOutClass: "typed-fade-out", fadeOutDelay: 500,
            loop: !1, loopCount: 1 / 0, showCursor: !0, cursorChar: "|", autoInsertCss: !0, attr: null, bindInputFocusEvents: !1, contentType: "html", onComplete: function (t) { },
            preStringTyped: function (t, e) { }, onStringTyped: function (t, e) { }, onLastStringBackspaced: function (t) { }, onTypingPaused: function (t, e) { }, onTypingResumed:
                function (t, e) { }, onReset: function (t) { }, onStop: function (t, e) { }, onStart: function (t, e) { }, onDestroy: function (t) { }
        };
        e["default"] = s, t.exports = e["default"];
    }, function (t, e) {
        "use strict";
        function s(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = function () {
            function t(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            } return function (e, s, n) { return s && t(e.prototype, s), n && t(e, n), e; };
        }(), i = function () {
            function t() { s(this, t); } return n(t, [{
                key: "typeHtmlChars", value: function (t, e, s) {
                    if ("html" !== s.contentType)
                        return e; var n = t.substr(e).charAt(0); if ("<" === n || "&" === n) {
                            var i = "";
                            for (i = "<" === n ? ">" : ";"; t.substr(e + 1).charAt(0) !== i && (e++ , !(e + 1 > t.length));)
                                ;
                            e++;
                        } return e;
                }
            }, {
                key: "backSpaceHtmlChars", value: function (t, e, s) {
                    if ("html" !== s.contentType)
                        return e; var n = t.substr(e).charAt(0); if (">" === n || ";" === n) {
                            var i = "";
                            for (i = ">" === n ? "<" : "&"; t.substr(e - 1).charAt(0) !== i && (e-- , !(e < 0));)
                                ;
                            e--;
                        } return e;
                }
            }]), t;
        }();
        e["default"] = i;
        var r = new i;
        e.htmlParser = r;
    }]);
});

//Plugins including ClassyNav
// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function noop() { };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*!
* jquery.counterup.js
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/(function (e) { "use strict"; e.fn.counterUp = function (t) { var n = e.extend({ time: 400, delay: 10 }, t); return this.each(function () { var t = e(this), r = n, i = function () { var e = [], n = r.time / r.delay, i = t.text(), s = /[0-9]+,[0-9]+/.test(i); i = i.replace(/,/g, ""); var o = /^[0-9]+$/.test(i), u = /^[0-9]+\.[0-9]+$/.test(i), a = u ? (i.split(".")[1] || []).length : 0; for (var f = n; f >= 1; f--) { var l = parseInt(i / n * f); u && (l = parseFloat(i / n * f).toFixed(a)); if (s) while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2"); e.unshift(l) } t.data("counterup-nums", e); t.text("0"); var c = function () { t.text(t.data("counterup-nums").shift()); if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay); else { delete t.data("counterup-nums"); t.data("counterup-nums", null); t.data("counterup-func", null) } }; t.data("counterup-func", c); setTimeout(t.data("counterup-func"), r.delay) }; t.waypoint(i, { offset: "100%", triggerOnce: !0 }) }) } })(jQuery);

// :: easing js
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function (n, e, t, r, u) { return jQuery.easing[jQuery.easing.def](n, e, t, r, u) }, easeInQuad: function (n, e, t, r, u) { return r * (e /= u) * e + t }, easeOutQuad: function (n, e, t, r, u) { return -r * (e /= u) * (e - 2) + t }, easeInOutQuad: function (n, e, t, r, u) { return (e /= u / 2) < 1 ? r / 2 * e * e + t : -r / 2 * (--e * (e - 2) - 1) + t }, easeInCubic: function (n, e, t, r, u) { return r * (e /= u) * e * e + t }, easeOutCubic: function (n, e, t, r, u) { return r * ((e = e / u - 1) * e * e + 1) + t }, easeInOutCubic: function (n, e, t, r, u) { return (e /= u / 2) < 1 ? r / 2 * e * e * e + t : r / 2 * ((e -= 2) * e * e + 2) + t }, easeInQuart: function (n, e, t, r, u) { return r * (e /= u) * e * e * e + t }, easeOutQuart: function (n, e, t, r, u) { return -r * ((e = e / u - 1) * e * e * e - 1) + t }, easeInOutQuart: function (n, e, t, r, u) { return (e /= u / 2) < 1 ? r / 2 * e * e * e * e + t : -r / 2 * ((e -= 2) * e * e * e - 2) + t }, easeInQuint: function (n, e, t, r, u) { return r * (e /= u) * e * e * e * e + t }, easeOutQuint: function (n, e, t, r, u) { return r * ((e = e / u - 1) * e * e * e * e + 1) + t }, easeInOutQuint: function (n, e, t, r, u) { return (e /= u / 2) < 1 ? r / 2 * e * e * e * e * e + t : r / 2 * ((e -= 2) * e * e * e * e + 2) + t }, easeInSine: function (n, e, t, r, u) { return -r * Math.cos(e / u * (Math.PI / 2)) + r + t }, easeOutSine: function (n, e, t, r, u) { return r * Math.sin(e / u * (Math.PI / 2)) + t }, easeInOutSine: function (n, e, t, r, u) { return -r / 2 * (Math.cos(Math.PI * e / u) - 1) + t }, easeInExpo: function (n, e, t, r, u) { return 0 == e ? t : r * Math.pow(2, 10 * (e / u - 1)) + t }, easeOutExpo: function (n, e, t, r, u) { return e == u ? t + r : r * (-Math.pow(2, -10 * e / u) + 1) + t }, easeInOutExpo: function (n, e, t, r, u) { return 0 == e ? t : e == u ? t + r : (e /= u / 2) < 1 ? r / 2 * Math.pow(2, 10 * (e - 1)) + t : r / 2 * (-Math.pow(2, -10 * --e) + 2) + t }, easeInCirc: function (n, e, t, r, u) { return -r * (Math.sqrt(1 - (e /= u) * e) - 1) + t }, easeOutCirc: function (n, e, t, r, u) { return r * Math.sqrt(1 - (e = e / u - 1) * e) + t }, easeInOutCirc: function (n, e, t, r, u) { return (e /= u / 2) < 1 ? -r / 2 * (Math.sqrt(1 - e * e) - 1) + t : r / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t }, easeInElastic: function (n, e, t, r, u) { var a = 1.70158, i = 0, s = r; if (0 == e) return t; if (1 == (e /= u)) return t + r; if (i || (i = .3 * u), s < Math.abs(r)) { s = r; var a = i / 4 } else var a = i / (2 * Math.PI) * Math.asin(r / s); return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * u - a) * (2 * Math.PI) / i)) + t }, easeOutElastic: function (n, e, t, r, u) { var a = 1.70158, i = 0, s = r; if (0 == e) return t; if (1 == (e /= u)) return t + r; if (i || (i = .3 * u), s < Math.abs(r)) { s = r; var a = i / 4 } else var a = i / (2 * Math.PI) * Math.asin(r / s); return s * Math.pow(2, -10 * e) * Math.sin((e * u - a) * (2 * Math.PI) / i) + r + t }, easeInOutElastic: function (n, e, t, r, u) { var a = 1.70158, i = 0, s = r; if (0 == e) return t; if (2 == (e /= u / 2)) return t + r; if (i || (i = u * (.3 * 1.5)), s < Math.abs(r)) { s = r; var a = i / 4 } else var a = i / (2 * Math.PI) * Math.asin(r / s); return 1 > e ? -.5 * (s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * u - a) * (2 * Math.PI) / i)) + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * u - a) * (2 * Math.PI) / i) * .5 + r + t }, easeInBack: function (n, e, t, r, u, a) { return void 0 == a && (a = 1.70158), r * (e /= u) * e * ((a + 1) * e - a) + t }, easeOutBack: function (n, e, t, r, u, a) { return void 0 == a && (a = 1.70158), r * ((e = e / u - 1) * e * ((a + 1) * e + a) + 1) + t }, easeInOutBack: function (n, e, t, r, u, a) { return void 0 == a && (a = 1.70158), (e /= u / 2) < 1 ? r / 2 * (e * e * (((a *= 1.525) + 1) * e - a)) + t : r / 2 * ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) + t }, easeInBounce: function (n, e, t, r, u) { return r - jQuery.easing.easeOutBounce(n, u - e, 0, r, u) + t }, easeOutBounce: function (n, e, t, r, u) { return (e /= u) < 1 / 2.75 ? r * (7.5625 * e * e) + t : 2 / 2.75 > e ? r * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : 2.5 / 2.75 > e ? r * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : r * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t }, easeInOutBounce: function (n, e, t, r, u) { return u / 2 > e ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, r, u) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - u, 0, r, u) + .5 * r + t } });

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function (a, b, c, d) { function e(b, c) { this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) { this._handlers[c] = a.proxy(this[c], this) }, this)), a.each(e.Plugins, a.proxy(function (a, b) { this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this) }, this)), a.each(e.Workers, a.proxy(function (b, c) { this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) }) }, this)), this.setup(), this.initialize() } e.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Type = { Event: "event", State: "state" }, e.Plugins = {}, e.Workers = [{ filter: ["width", "settings"], run: function () { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function (a) { a.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function () { this.$stage.children(".cloned").remove() } }, { filter: ["width", "items", "settings"], run: function (a) { var b = this.settings.margin || "", c = !this.settings.autoWidth, d = this.settings.rtl, e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b }; !c && this.$stage.children().css(e), a.css = e } }, { filter: ["width", "items", "settings"], run: function (a) { var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, c = null, d = this._items.length, e = !this.settings.autoWidth, f = []; for (a.items = { merge: !1, width: b }; d--;)c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width(); this._widths = f } }, { filter: ["items", "settings"], run: function () { var b = [], c = this._items, d = this.settings, e = Math.max(2 * d.items, 4), f = 2 * Math.ceil(c.length / 2), g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0, h = "", i = ""; for (g /= 2; g--;)b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i; this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage) } }, { filter: ["width", "items", "settings"], run: function () { for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;)d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a); this._coordinates = f } }, { filter: ["width", "items", "settings"], run: function () { var a = this.settings.stagePadding, b = this._coordinates, c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" }; this.$stage.css(c) } }, { filter: ["width", "items", "settings"], run: function (a) { var b = this._coordinates.length, c = !this.settings.autoWidth, d = this.$stage.children(); if (c && a.items.merge) for (; b--;)a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css); else c && (a.css.width = a.items.width, d.css(a.css)) } }, { filter: ["items"], run: function () { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function (a) { a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current) } }, { filter: ["position"], run: function () { this.animate(this.coordinates(this._current)) } }, { filter: ["width", "position", "items", "settings"], run: function () { var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = []; for (c = 0, d = this._coordinates.length; c < d; c++)a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c); this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center")) } }], e.prototype.initialize = function () { if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) { var b, c, e; b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b) } this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized") }, e.prototype.setup = function () { var b = this.viewport(), c = this.options.responsive, d = -1, e = null; c ? (a.each(c, function (a) { a <= b && a > d && (d = Number(a)) }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } }) }, e.prototype.optionsLogic = function () { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, e.prototype.prepare = function (b) { var c = this.trigger("prepare", { content: b }); return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data }, e.prototype.update = function () { for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) { return this[a] }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++; this._invalidated = {}, !this.is("valid") && this.enter("valid") }, e.prototype.width = function (a) { switch (a = a || e.Width.Default) { case e.Width.Inner: case e.Width.Outer: return this._width; default: return this._width - 2 * this.settings.stagePadding + this.settings.margin } }, e.prototype.refresh = function () { this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed") }, e.prototype.onThrottledResize = function () { b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) }, e.prototype.onResize = function () { return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))))) }, e.prototype.registerEventHandlers = function () { a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () { return !1 })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this))) }, e.prototype.onDragStart = function (b) { var d = null; 3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }) : (d = this.$stage.position(), d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) { var d = this.difference(this._drag.pointer, this.pointer(b)); a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag")) }, this))) }, e.prototype.onDragMove = function (a) { var b = null, c = null, d = null, e = this.difference(this._drag.pointer, this.pointer(a)), f = this.difference(this._drag.stage.start, e); this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x)) }, e.prototype.onDragEnd = function (b) { var d = this.difference(this._drag.pointer, this.pointer(b)), e = this._drag.stage.current, f = d.x > 0 ^ this.settings.rtl ? "left" : "right"; a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () { return !1 })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged")) }, e.prototype.closest = function (b, c) { var d = -1, e = 30, f = this.width(), g = this.coordinates(); return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) { return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1 }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d }, e.prototype.animate = function (b) { var c = this.speed() > 0; this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" }) : c ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: b + "px" }) }, e.prototype.is = function (a) { return this._states.current[a] && this._states.current[a] > 0 }, e.prototype.current = function (a) { if (a === d) return this._current; if (0 === this._items.length) return d; if (a = this.normalize(a), this._current !== a) { var b = this.trigger("change", { property: { name: "position", value: a } }); b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } }) } return this._current }, e.prototype.invalidate = function (b) { return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) { return b }) }, e.prototype.reset = function (a) { a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"])) }, e.prototype.normalize = function (a, b) { var c = this._items.length, e = b ? 0 : this._clones.length; return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a }, e.prototype.relative = function (a) { return a -= this._clones.length / 2, this.normalize(a, !0) }, e.prototype.maximum = function (a) { var b, c, d, e = this.settings, f = this._coordinates.length; if (e.loop) f = this._clones.length / 2 + this._items.length - 1; else if (e.autoWidth || e.merge) { for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d));); f = b + 1 } else f = e.center ? this._items.length - 1 : this._items.length - e.items; return a && (f -= this._clones.length / 2), Math.max(f, 0) }, e.prototype.minimum = function (a) { return a ? 0 : this._clones.length / 2 }, e.prototype.items = function (a) { return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]) }, e.prototype.mergers = function (a) { return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]) }, e.prototype.clones = function (b) { var c = this._clones.length / 2, e = c + this._items.length, f = function (a) { return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2 }; return b === d ? a.map(this._clones, function (a, b) { return f(b) }) : a.map(this._clones, function (a, c) { return a === b ? f(c) : null }) }, e.prototype.speed = function (a) { return a !== d && (this._speed = a), this._speed }, e.prototype.coordinates = function (b) { var c, e = 1, f = b - 1; return b === d ? a.map(this._coordinates, a.proxy(function (a, b) { return this.coordinates(b) }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c)) }, e.prototype.duration = function (a, b, c) { return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed) }, e.prototype.to = function (a, b) { var c = this.current(), d = null, e = a - this.relative(c), f = (e > 0) - (e < 0), g = this._items.length, h = this.minimum(), i = this.maximum(); this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update() }, e.prototype.next = function (a) { a = a || !1, this.to(this.relative(this.current()) + 1, a) }, e.prototype.prev = function (a) { a = a || !1, this.to(this.relative(this.current()) - 1, a) }, e.prototype.onTransitionEnd = function (a) { if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1; this.leave("animating"), this.trigger("translated") }, e.prototype.viewport = function () { var d; return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d }, e.prototype.replace = function (b) { this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () { return 1 === this.nodeType }).each(a.proxy(function (a, b) { b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, e.prototype.add = function (b, c) { var e = this.relative(this._current); c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", { content: b, position: c }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", { content: b, position: c }) }, e.prototype.remove = function (a) { a = this.normalize(a, !0), a !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a })) }, e.prototype.preloadAutoWidthImages = function (b) { b.each(a.proxy(function (b, c) { this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) { c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh() }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")) }, this)) }, e.prototype.destroy = function () { this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize)); for (var d in this._plugins) this._plugins[d].destroy(); this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel") }, e.prototype.op = function (a, b, c) { var d = this.settings.rtl; switch (b) { case "<": return d ? a > c : a < c; case ">": return d ? a < c : a > c; case ">=": return d ? a <= c : a >= c; case "<=": return d ? a >= c : a <= c } }, e.prototype.on = function (a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c) }, e.prototype.off = function (a, b, c, d) { a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c) }, e.prototype.trigger = function (b, c, d, f, g) { var h = { item: { count: this._items.length, index: this.current() } }, i = a.camelCase(a.grep(["on", b, d], function (a) { return a }).join("-").toLowerCase()), j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c)); return this._supress[b] || (a.each(this._plugins, function (a, b) { b.onTrigger && b.onTrigger(j) }), this.register({ type: e.Type.Event, name: b }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j }, e.prototype.enter = function (b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) { this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++ }, this)) }, e.prototype.leave = function (b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) { this._states.current[b]-- }, this)) }, e.prototype.register = function (b) { if (b.type === e.Type.Event) { if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) { var c = a.event.special[b.name]._default; a.event.special[b.name]._default = function (a) { return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments) }, a.event.special[b.name].owl = !0 } } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) { return a.inArray(c, this._states.tags[b.name]) === d }, this))) }, e.prototype.suppress = function (b) { a.each(b, a.proxy(function (a, b) { this._supress[b] = !0 }, this)) }, e.prototype.release = function (b) { a.each(b, a.proxy(function (a, b) { delete this._supress[b] }, this)) }, e.prototype.pointer = function (a) { var c = { x: null, y: null }; return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c }, e.prototype.isNumeric = function (a) { return !isNaN(parseFloat(a)) }, e.prototype.difference = function (a, b) { return { x: a.x - b.x, y: a.y - b.y } }, a.fn.owlCarousel = function (b) { var c = Array.prototype.slice.call(arguments, 1); return this.each(function () { var d = a(this), f = d.data("owl.carousel"); f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) { f.register({ type: e.Type.Event, name: c }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) { a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c])) }, f)) })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c) }) }, a.fn.owlCarousel.Constructor = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { var e = function (b) { this._core = b, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.autoRefresh && this.watch() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) }; e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, e.prototype.watch = function () { this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) }, e.prototype.refresh = function () { this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) }, e.prototype.destroy = function () { var a, c; b.clearInterval(this._interval); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { var e = function (b) { this._core = b, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) { if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) { this.load(b) }, this); f++ < e;)this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++ }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) }; e.Defaults = { lazyLoad: !1 }, e.prototype.load = function (c) { var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy"); !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) { var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src"); this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () { f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () { f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this), e.src = g) }, this)), this._loaded.push(d.get(0))) }, e.prototype.destroy = function () { var a, b; for (a in this.handlers) this._core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { var e = function (b) { this._core = b, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update() }, this), "loaded.owl.lazy": a.proxy(function (a) { a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) }; e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function () { var b = this._core._current, c = b + this._core.settings.items, d = this._core.$stage.children().toArray().slice(b, c), e = [], f = 0; a.each(d, function (b, c) { e.push(a(c).height()) }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass) }, e.prototype.destroy = function () { var a, b; for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { var e = function (b) { this._core = b, this._videos = {}, this._playing = null, this._handlers = { "initialized.owl.carousel": a.proxy(function (a) { a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }, this), "resize.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault() }, this), "refreshed.owl.carousel": a.proxy(function (a) { a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove() }, this), "changed.owl.carousel": a.proxy(function (a) { a.namespace && "position" === a.property.name && this._playing && this.stop() }, this), "prepared.owl.carousel": a.proxy(function (b) { if (b.namespace) { var c = a(b.content).find(".owl-video"); c.length && (c.css("display", "none"), this.fetch(c, a(b.content))) } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) { this.play(a) }, this)) }; e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, e.prototype.fetch = function (a, b) { var c = function () { return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube" }(), d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"), e = a.attr("data-width") || this._core.settings.videoWidth, f = a.attr("data-height") || this._core.settings.videoHeight, g = a.attr("href"); if (!g) throw new Error("Missing video URL."); if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube"; else if (d[3].indexOf("vimeo") > -1) c = "vimeo"; else { if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported."); c = "vzaar" } d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]) }, e.prototype.thumbnail = function (b, c) { var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function (a) { e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e) }; if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1; "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function (a) { f = a[0].thumbnail_large, l(f) } }) : "vzaar" === c.type && a.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function (a) { f = a.framegrab_url, l(f) } }) }, e.prototype.stop = function () { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video") }, e.prototype.play = function (b) { var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass), f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height(); this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing")) }, e.prototype.isInFullScreen = function () { var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement; return b && a(b).parent().hasClass("owl-video-frame") }, e.prototype.destroy = function () { var a, b; this._core.$element.off("click.owl.video"); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Video = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) { this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function (a) { a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) { a.namespace && (this.swapping = "translated" == a.type) }, this), "translate.owl.carousel": a.proxy(function (a) { a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) }; e.Defaults = { animateOut: !1, animateIn: !1 }, e.prototype.swap = function () { if (1 === this.core.settings.items && a.support.animation && a.support.transition) { this.core.speed(0); var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut; this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f)) } }, e.prototype.clear = function (b) { a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd() }, e.prototype.destroy = function () { var a, b; for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) },
        a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { var e = function (b) { this._core = b, this._timeout = null, this._paused = !1, this._handlers = { "changed.owl.carousel": a.proxy(function (a) { a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval() }, this), "initialized.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": a.proxy(function (a, b, c) { a.namespace && this.play(b, c) }, this), "stop.owl.autoplay": a.proxy(function (a) { a.namespace && this.stop() }, this), "mouseover.owl.autoplay": a.proxy(function () { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": a.proxy(function () { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": a.proxy(function () { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": a.proxy(function () { this._core.settings.autoplayHoverPause && this.play() }, this) }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options) }; e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, e.prototype.play = function (a, b) { this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval()) }, e.prototype._getNextTimeout = function (d, e) { return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () { this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed) }, this), d || this._core.settings.autoplayTimeout) }, e.prototype._setAutoPlayInterval = function () { this._timeout = this._getNextTimeout() }, e.prototype.stop = function () { this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating")) }, e.prototype.pause = function () { this._core.is("rotating") && (this._paused = !0) }, e.prototype.destroy = function () { var a, b; this.stop(); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { "use strict"; var e = function (b) { this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function (b) { b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>") }, this), "added.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1) }, this), "changed.owl.carousel": a.proxy(function (a) { a.namespace && "position" == a.property.name && this.draw() }, this), "initialized.owl.carousel": a.proxy(function (a) { a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": a.proxy(function (a) { a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers) }; e.Defaults = { nav: !1, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, e.prototype.initialize = function () { var b, c = this._core.settings; this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) { this.prev(c.navSpeed) }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) { this.next(c.navSpeed) }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) { var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index(); b.preventDefault(), this.to(d, c.dotsSpeed) }, this)); for (b in this._overrides) this._core[b] = a.proxy(this[b], this) }, e.prototype.destroy = function () { var a, b, c, d; for (a in this._handlers) this.$element.off(a, this._handlers[a]); for (b in this._controls) this._controls[b].remove(); for (d in this.overides) this._core[d] = this._overrides[d]; for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, e.prototype.update = function () { var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0), g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items; if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) { if (b >= h || 0 === b) { if (this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f) break; b = 0, ++c } b += this._core.mergers(this._core.relative(a)) } }, e.prototype.draw = function () { var b, c = this._core.settings, d = this._core.items().length <= c.items, e = this._core.relative(this._core.current()), f = c.loop || c.rewind; this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active")) }, e.prototype.onTrigger = function (b) { var c = this._core.settings; b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) } }, e.prototype.current = function () { var b = this._core.relative(this._core.current()); return a.grep(this._pages, a.proxy(function (a, c) { return a.start <= b && a.end >= b }, this)).pop() }, e.prototype.getPosition = function (b) { var c, d, e = this._core.settings; return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c }, e.prototype.next = function (b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b) }, e.prototype.prev = function (b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b) }, e.prototype.to = function (b, c, d) { var e; !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c) }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { "use strict"; var e = function (c) { this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function (c) { c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation") }, this), "prepared.owl.carousel": a.proxy(function (b) { if (b.namespace) { var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash"); if (!c) return; this._hashes[c] = b.content } }, this), "changed.owl.carousel": a.proxy(function (c) { if (c.namespace && "position" === c.property.name) { var d = this._core.items(this._core.relative(this._core.current())), e = a.map(this._hashes, function (a, b) { return a === d ? b : null }).join(); if (!e || b.location.hash.slice(1) === e) return; b.location.hash = e } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) { var c = b.location.hash.substring(1), e = this._core.$stage.children(), f = this._hashes[c] && e.index(this._hashes[c]); f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0) }, this)) }; e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function () { var c, d; a(b).off("hashchange.owl.navigation"); for (c in this._handlers) this._core.$element.off(c, this._handlers[c]); for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null) }, a.fn.owlCarousel.Constructor.Plugins.Hash = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { function e(b, c) { var e = !1, f = b.charAt(0).toUpperCase() + b.slice(1); return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) { if (g[b] !== d) return e = !c || b, !1 }), e } function f(a) { return e(a, !0) } var g = a("<support>").get(0).style, h = "Webkit Moz O ms".split(" "), i = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } }, j = { csstransforms: function () { return !!e("transform") }, csstransforms3d: function () { return !!e("perspective") }, csstransitions: function () { return !!e("transition") }, cssanimations: function () { return !!e("animation") } }; j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d()) }(window.Zepto || window.jQuery, window, document);

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function (a) { var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function () { }, u = !!window.jQuery, v = a(window), w = function (a, c) { b.ev.on(o + a + p, c) }, x = function (b, c, d, e) { var f = document.createElement("div"); return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f }, y = function (c, d) { b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])) }, z = function (c) { return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn }, A = function () { a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b) }, B = function () { var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"]; if (void 0 !== a.transition) return !0; for (; b.length;)if (b.pop() + "Transition" in a) return !0; return !1 }; t.prototype = { constructor: t, init: function () { var c = navigator.appVersion; b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {} }, open: function (c) { var e; if (c.isObj === !1) { b.items = c.items.toArray(), b.index = 0; var g, h = c.items; for (e = 0; e < h.length; e++)if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) { b.index = e; break } } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0; if (b.isOpen) return void b.updateItemHTML(); b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () { b.close() }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) { b._checkIfClose(a.target) && b.close() }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading)); var i = a.magnificPopup.modules; for (e = 0; e < i.length; e++) { var j = i[e]; j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b) } y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) { c.close_replaceWith = z(d.type) }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) { 27 === a.keyCode && b.close() }), v.on("resize" + p, function () { b.updateSize() }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f); var k = b.wH = v.height(), n = {}; if (b.fixedContentPos && b._hasScrollBar(k)) { var o = b._getScrollbarSize(); o && (n.marginRight = o) } b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden"); var r = b.st.mainClass; return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () { b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn) }, 16), b.isOpen = !0, b.updateSize(k), y(m), c }, close: function () { b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () { b._close() }, b.st.removalDelay)) : b._close()) }, _close: function () { y(h); var c = r + " " + q + " "; if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) { var e = { marginRight: "" }; b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e) } d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j) }, updateSize: function (a) { if (b.isIOS) { var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c; b.wrap.css("height", d), b.wH = d } else b.wH = a || v.height(); b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize") }, updateItemHTML: function () { var c = b.items[b.index]; b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index)); var d = c.type; if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) { var f = b.st[d] ? b.st[d].markup : !1; y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0 } e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder"); var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]); b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange") }, appendContent: function (a, c) { b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content) }, parseEl: function (c) { var d, e = b.items[c]; if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) { for (var f = b.types, g = 0; g < f.length; g++)if (e.el.hasClass("mfp-" + f[g])) { d = f[g]; break } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href")) } return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c] }, addGroup: function (a, c) { var d = function (d) { d.mfpEl = this, b._openClick(d, a, c) }; c || (c = {}); var e = "click.magnificPopup"; c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d))) }, _openClick: function (c, d, e) { var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick; if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) { var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn; if (g) if (a.isFunction(g)) { if (!g.call(b)) return !0 } else if (v.width() < g) return !0; c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e) } }, updateStatus: function (a, d) { if (b.preloader) { c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading); var e = { status: a, text: d }; y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) { a.stopImmediatePropagation() }), b.container.addClass("mfp-s-" + a), c = a } }, _checkIfClose: function (c) { if (!a(c).hasClass(s)) { var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick; if (d && e) return !0; if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0; if (c === b.content[0] || a.contains(b.content[0], c)) { if (d) return !0 } else if (e && a.contains(document, c)) return !0; return !1 } }, _addClassToMFP: function (a) { b.bgOverlay.addClass(a), b.wrap.addClass(a) }, _removeClassFromMFP: function (a) { this.bgOverlay.removeClass(a), b.wrap.removeClass(a) }, _hasScrollBar: function (a) { return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height()) }, _setFocus: function () { (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus() }, _onFocusIn: function (c) { return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1) }, _parseMarkup: function (b, c, d) { var e; d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) { if (void 0 === d || d === !1) return !0; if (e = c.split("_"), e.length > 1) { var f = b.find(p + "-" + e[0]); if (f.length > 0) { var g = e[1]; "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d) } } else b.find(p + "-" + c).html(d) }) }, _getScrollbarSize: function () { if (void 0 === b.scrollbarSize) { var a = document.createElement("div"); a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a) } return b.scrollbarSize } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function (b, c) { return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function () { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function (b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function (c) { A(); var d = a(this); if ("string" == typeof c) if ("open" === c) { var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0; f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f) } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c); return d }; var C, D, E, F = "inline", G = function () { E && (D.after(E.addClass(C)).detach(), E = null) }; a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function () { b.types.push(F), w(h + "." + F, function () { G() }) }, getInline: function (c, d) { if (G(), c.src) { var e = b.st.inline, f = a(c.src); if (f.length) { var g = f[0].parentNode; g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready") } else b.updateStatus("error", e.tNotFound), f = a("<div>"); return c.inlineElement = f, f } return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d } } }); var H, I = "ajax", J = function () { H && a(document.body).removeClass(H) }, K = function () { J(), b.req && b.req.abort() }; a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function () { b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K) }, getAjax: function (c) { H && a(document.body).addClass(H), b.updateStatus("loading"); var d = a.extend({ url: c.src, success: function (d, e, f) { var g = { data: d, xhr: f }; y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () { b.wrap.addClass(q) }, 16), b.updateStatus("ready"), y("AjaxContentAdded") }, error: function () { J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src)) } }, b.st.ajax.settings); return b.req = a.ajax(d), "" } } }); var L, M = function (c) { if (c.data && void 0 !== c.data.title) return c.data.title; var d = b.st.image.titleSrc; if (d) { if (a.isFunction(d)) return d.call(b, c); if (c.el) return c.el.attr(d) || "" } return "" }; a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function () { var c = b.st.image, d = ".image"; b.types.push("image"), w(m + d, function () { "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor) }), w(h + d, function () { c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p) }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage) }, resizeImage: function () { var a = b.currItem; if (a && a.img && b.st.image.verticalFit) { var c = 0; b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c) } }, _onImageHasSize: function (a) { a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1)) }, findImageSize: function (a) { var c = 0, d = a.img[0], e = function (f) { L && clearInterval(L), L = setInterval(function () { return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++ , void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500))) }, f) }; e(1) }, getImage: function (c, d) { var e = 0, f = function () { c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++ , 200 > e ? setTimeout(f, 100) : g())) }, g = function () { c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0) }, h = b.st.image, i = d.find(".mfp-img"); if (i.length) { var j = document.createElement("img"); j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1) } return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d) } } }); var N, O = function () { return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N }; a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) { return a.is("img") ? a : a.find("img") } }, proto: { initZoom: function () { var a, c = b.st.zoom, d = ".zoom"; if (c.enabled && b.supportsTransition) { var e, f, g = c.duration, j = function (a) { var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + c.duration / 1e3 + "s " + c.easing, e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" }, f = "transition"; return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b }, k = function () { b.content.css("visibility", "visible") }; w("BuildControls" + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k(); f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () { f.css(b._getOffset(!0)), e = setTimeout(function () { k(), setTimeout(function () { f.remove(), a = f = null, y("ZoomAnimationEnded") }, 16) }, g) }, 16) } }), w(i + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.st.removalDelay = g, !a) { if (a = b._getItemToZoom(), !a) return; f = j(a) } f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () { f.css(b._getOffset()) }, 16) } }), w(h + d, function () { b._allowZoom() && (k(), f && f.remove(), a = null) }) } }, _allowZoom: function () { return "image" === b.currItem.type }, _getItemToZoom: function () { return b.currItem.hasSize ? b.currItem.img : !1 }, _getOffset: function (c) { var d; d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem); var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10); e.top -= a(window).scrollTop() - f; var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f }; return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h } } }); var P = "iframe", Q = "//about:blank", R = function (a) { if (b.currTemplate[P]) { var c = b.currTemplate[P].find("iframe"); c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none")) } }; a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function () { b.types.push(P), w("BeforeChange", function (a, b, c) { b !== c && (b === P ? R() : c === P && R(!0)) }), w(h + "." + P, function () { R() }) }, getIframe: function (c, d) { var e = c.src, f = b.st.iframe; a.each(f.patterns, function () { return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0 }); var g = {}; return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d } } }); var S = function (a) { var c = b.items.length; return a > c - 1 ? a - c : 0 > a ? c + a : a }, T = function (a, b, c) { return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c) }; a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function () { var c = b.st.gallery, e = ".mfp-gallery"; return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () { c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () { return b.items.length > 1 ? (b.next(), !1) : void 0 }), d.on("keydown" + e, function (a) { 37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next() }) }), w("UpdateStatus" + e, function (a, c) { c.text && (c.text = T(c.text, b.currItem.index, b.items.length)) }), w(l + e, function (a, d, e, f) { var g = b.items.length; e.counter = g > 1 ? T(c.tCounter, f.index, g) : "" }), w("BuildControls" + e, function () { if (b.items.length > 1 && c.arrows && !b.arrowLeft) { var d = c.arrowMarkup, e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s), f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s); e.click(function () { b.prev() }), f.click(function () { b.next() }), b.container.append(e.add(f)) } }), w(n + e, function () { b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () { b.preloadNearbyImages(), b._preloadTimeout = null }, 16) }), void w(h + e, function () { d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null })) : !1 }, next: function () { b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML() }, prev: function () { b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML() }, goTo: function (a) { b.direction = a >= b.index, b.index = a, b.updateItemHTML() }, preloadNearbyImages: function () { var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length); for (a = 1; a <= (b.direction ? e : d); a++)b._preloadItem(b.index + a); for (a = 1; a <= (b.direction ? d : e); a++)b._preloadItem(b.index - a) }, _preloadItem: function (c) { if (c = S(c), !b.items[c].preloaded) { var d = b.items[c]; d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () { d.hasSize = !0 }).on("error.mfploader", function () { d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d) }).attr("src", d.src)), d.preloaded = !0 } } } }); var U = "retina"; a.magnificPopup.registerModule(U, { options: { replaceSrc: function (a) { return a.src.replace(/\.\w+$/, function (a) { return "@2x" + a }) }, ratio: 1 }, proto: { initRetina: function () { if (window.devicePixelRatio > 1) { var a = b.st.retina, c = a.ratio; c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) { b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" }) }), w("ElementParse." + U, function (b, d) { d.src = a.replaceSrc(d, c) })) } } } }), A() });

/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear — @markgdyr — http://markgoodyear.com
 * License: MIT
 */
!function (l, o, e) { "use strict"; l.fn.scrollUp = function (o) { l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o)) }, l.fn.scrollUp.init = function (r) { var s, t, c, i, n, a, d, p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r), f = !1; switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", { id: p.scrollName, href: "#top" }), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({ display: "none", position: "fixed", zIndex: p.zIndex }), p.activeOverlay && l("<div/>", { id: p.scrollName + "-active" }).css({ position: "absolute", top: p.scrollDistance + "px", width: "100%", borderTop: "1px dotted" + p.activeOverlay, zIndex: p.zIndex }).appendTo("body"), p.animation) { case "fade": s = "fadeIn", t = "fadeOut", c = p.animationSpeed; break; case "slide": s = "slideDown", t = "slideUp", c = p.animationSpeed; break; default: s = "show", t = "hide", c = 0 }i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance, n = l(o).scroll(function () { l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1) }), p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0, d.click(function (o) { o.preventDefault(), l("html, body").animate({ scrollTop: a }, p.scrollSpeed, p.easingType) }) }, l.fn.scrollUp.defaults = { scrollName: "scrollUp", scrollDistance: 300, scrollFrom: "top", scrollSpeed: 300, easingType: "linear", animation: "fade", animationSpeed: 200, scrollTrigger: !1, scrollTarget: !1, scrollText: "Scroll to top", scrollTitle: !1, scrollImg: !1, activeOverlay: !1, zIndex: 2147483647 }, l.fn.scrollUp.destroy = function (r) { l.removeData(e.body, "scrollUp"), l("#" + l.fn.scrollUp.settings.scrollName).remove(), l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(), l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r) }, l.scrollUp = l.fn.scrollUp }(jQuery, window, document);

// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function () { var t = [].indexOf || function (t) { for (var e = 0, n = this.length; e < n; e++) { if (e in this && this[e] === t) return e } return -1 }, e = [].slice; (function (t, e) { if (typeof define === "function" && define.amd) { return define("waypoints", ["jquery"], function (n) { return e(n, t) }) } else { return e(t.jQuery, t) } })(this, function (n, r) { var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m; i = n(r); c = t.call(r, "ontouchstart") >= 0; s = { horizontal: {}, vertical: {} }; f = 1; a = {}; u = "waypoints-context-id"; p = "resize.waypoints"; y = "scroll.waypoints"; v = 1; w = "waypoints-waypoint-ids"; g = "waypoint"; m = "waypoints"; o = function () { function t(t) { var e = this; this.$element = t; this.element = t[0]; this.didResize = false; this.didScroll = false; this.id = "context" + f++; this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() }; this.waypoints = { horizontal: {}, vertical: {} }; t.data(u, this.id); a[this.id] = this; t.bind(y, function () { var t; if (!(e.didScroll || c)) { e.didScroll = true; t = function () { e.doScroll(); return e.didScroll = false }; return r.setTimeout(t, n[m].settings.scrollThrottle) } }); t.bind(p, function () { var t; if (!e.didResize) { e.didResize = true; t = function () { n[m]("refresh"); return e.didResize = false }; return r.setTimeout(t, n[m].settings.resizeThrottle) } }) } t.prototype.doScroll = function () { var t, e = this; t = { horizontal: { newScroll: this.$element.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.$element.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } }; if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) { n[m]("refresh") } n.each(t, function (t, r) { var i, o, l; l = []; o = r.newScroll > r.oldScroll; i = o ? r.forward : r.backward; n.each(e.waypoints[t], function (t, e) { var n, i; if (r.oldScroll < (n = e.offset) && n <= r.newScroll) { return l.push(e) } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) { return l.push(e) } }); l.sort(function (t, e) { return t.offset - e.offset }); if (!o) { l.reverse() } return n.each(l, function (t, e) { if (e.options.continuous || t === l.length - 1) { return e.trigger([i]) } }) }); return this.oldScroll = { x: t.horizontal.newScroll, y: t.vertical.newScroll } }; t.prototype.refresh = function () { var t, e, r, i = this; r = n.isWindow(this.element); e = this.$element.offset(); this.doScroll(); t = { horizontal: { contextOffset: r ? 0 : e.left, contextScroll: r ? 0 : this.oldScroll.x, contextDimension: this.$element.width(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: r ? 0 : e.top, contextScroll: r ? 0 : this.oldScroll.y, contextDimension: r ? n[m]("viewportHeight") : this.$element.height(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } }; return n.each(t, function (t, e) { return n.each(i.waypoints[t], function (t, r) { var i, o, l, s, f; i = r.options.offset; l = r.offset; o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp]; if (n.isFunction(i)) { i = i.apply(r.element) } else if (typeof i === "string") { i = parseFloat(i); if (r.options.offset.indexOf("%") > -1) { i = Math.ceil(e.contextDimension * i / 100) } } r.offset = o - e.contextOffset + e.contextScroll - i; if (r.options.onlyOnScroll && l != null || !r.enabled) { return } if (l !== null && l < (s = e.oldScroll) && s <= r.offset) { return r.trigger([e.backward]) } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) { return r.trigger([e.forward]) } else if (l === null && e.oldScroll >= r.offset) { return r.trigger([e.forward]) } }) }) }; t.prototype.checkEmpty = function () { if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) { this.$element.unbind([p, y].join(" ")); return delete a[this.id] } }; return t }(); l = function () { function t(t, e, r) { var i, o; r = n.extend({}, n.fn[g].defaults, r); if (r.offset === "bottom-in-view") { r.offset = function () { var t; t = n[m]("viewportHeight"); if (!n.isWindow(e.element)) { t = e.$element.height() } return t - n(this).outerHeight() } } this.$element = t; this.element = t[0]; this.axis = r.horizontal ? "horizontal" : "vertical"; this.callback = r.handler; this.context = e; this.enabled = r.enabled; this.id = "waypoints" + v++; this.offset = null; this.options = r; e.waypoints[this.axis][this.id] = this; s[this.axis][this.id] = this; i = (o = t.data(w)) != null ? o : []; i.push(this.id); t.data(w, i) } t.prototype.trigger = function (t) { if (!this.enabled) { return } if (this.callback != null) { this.callback.apply(this.element, t) } if (this.options.triggerOnce) { return this.destroy() } }; t.prototype.disable = function () { return this.enabled = false }; t.prototype.enable = function () { this.context.refresh(); return this.enabled = true }; t.prototype.destroy = function () { delete s[this.axis][this.id]; delete this.context.waypoints[this.axis][this.id]; return this.context.checkEmpty() }; t.getWaypointsByElement = function (t) { var e, r; r = n(t).data(w); if (!r) { return [] } e = n.extend({}, s.horizontal, s.vertical); return n.map(r, function (t) { return e[t] }) }; return t }(); d = { init: function (t, e) { var r; if (e == null) { e = {} } if ((r = e.handler) == null) { e.handler = t } this.each(function () { var t, r, i, s; t = n(this); i = (s = e.context) != null ? s : n.fn[g].defaults.context; if (!n.isWindow(i)) { i = t.closest(i) } i = n(i); r = a[i.data(u)]; if (!r) { r = new o(i) } return new l(t, r, e) }); n[m]("refresh"); return this }, disable: function () { return d._invoke(this, "disable") }, enable: function () { return d._invoke(this, "enable") }, destroy: function () { return d._invoke(this, "destroy") }, prev: function (t, e) { return d._traverse.call(this, t, e, function (t, e, n) { if (e > 0) { return t.push(n[e - 1]) } }) }, next: function (t, e) { return d._traverse.call(this, t, e, function (t, e, n) { if (e < n.length - 1) { return t.push(n[e + 1]) } }) }, _traverse: function (t, e, i) { var o, l; if (t == null) { t = "vertical" } if (e == null) { e = r } l = h.aggregate(e); o = []; this.each(function () { var e; e = n.inArray(this, l[t]); return i(o, e, l[t]) }); return this.pushStack(o) }, _invoke: function (t, e) { t.each(function () { var t; t = l.getWaypointsByElement(this); return n.each(t, function (t, n) { n[e](); return true }) }); return this } }; n.fn[g] = function () { var t, r; r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : []; if (d[r]) { return d[r].apply(this, t) } else if (n.isFunction(r)) { return d.init.apply(this, arguments) } else if (n.isPlainObject(r)) { return d.init.apply(this, [null, r]) } else if (!r) { return n.error("jQuery Waypoints needs a callback function or handler option.") } else { return n.error("The " + r + " method does not exist in jQuery Waypoints.") } }; n.fn[g].defaults = { context: r, continuous: true, enabled: true, horizontal: false, offset: 0, triggerOnce: false }; h = { refresh: function () { return n.each(a, function (t, e) { return e.refresh() }) }, viewportHeight: function () { var t; return (t = r.innerHeight) != null ? t : i.height() }, aggregate: function (t) { var e, r, i; e = s; if (t) { e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0 } if (!e) { return [] } r = { horizontal: [], vertical: [] }; n.each(r, function (t, i) { n.each(e[t], function (t, e) { return i.push(e) }); i.sort(function (t, e) { return t.offset - e.offset }); r[t] = n.map(i, function (t) { return t.element }); return r[t] = n.unique(r[t]) }); return r }, above: function (t) { if (t == null) { t = r } return h._filter(t, "vertical", function (t, e) { return e.offset <= t.oldScroll.y }) }, below: function (t) { if (t == null) { t = r } return h._filter(t, "vertical", function (t, e) { return e.offset > t.oldScroll.y }) }, left: function (t) { if (t == null) { t = r } return h._filter(t, "horizontal", function (t, e) { return e.offset <= t.oldScroll.x }) }, right: function (t) { if (t == null) { t = r } return h._filter(t, "horizontal", function (t, e) { return e.offset > t.oldScroll.x }) }, enable: function () { return h._invoke("enable") }, disable: function () { return h._invoke("disable") }, destroy: function () { return h._invoke("destroy") }, extendFn: function (t, e) { return d[t] = e }, _invoke: function (t) { var e; e = n.extend({}, s.vertical, s.horizontal); return n.each(e, function (e, n) { n[t](); return true }) }, _filter: function (t, e, r) { var i, o; i = a[n(t).data(u)]; if (!i) { return [] } o = []; n.each(i.waypoints[e], function (t, e) { if (r(i, e)) { return o.push(e) } }); o.sort(function (t, e) { return t.offset - e.offset }); return n.map(o, function (t) { return t.element }) } }; n[m] = function () { var t, n; n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : []; if (h[n]) { return h[n].apply(null, t) } else { return h.aggregate.call(null, n) } }; n[m].settings = { resizeThrottle: 100, scrollThrottle: 30 }; return i.load(function () { return n[m]("refresh") }) }) }).call(this);

/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/(function () { var a, b, c, d, e, f = function (a, b) { return function () { return a.apply(b, arguments) } }, g = [].indexOf || function (a) { for (var b = 0, c = this.length; c > b; b++)if (b in this && this[b] === a) return b; return -1 }; b = function () { function a() { } return a.prototype.extend = function (a, b) { var c, d; for (c in b) d = b[c], null == a[c] && (a[c] = d); return a }, a.prototype.isMobile = function (a) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a) }, a.prototype.createEvent = function (a, b, c, d) { var e; return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e }, a.prototype.emitEvent = function (a, b) { return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0 }, a.prototype.addEvent = function (a, b, c) { return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c }, a.prototype.removeEvent = function (a, b, c) { return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b] }, a.prototype.innerHeight = function () { return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight }, a }(), c = this.WeakMap || this.MozWeakMap || (c = function () { function a() { this.keys = [], this.values = [] } return a.prototype.get = function (a) { var b, c, d, e, f; for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)if (c = f[b], c === a) return this.values[b] }, a.prototype.set = function (a, b) { var c, d, e, f, g; for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)if (d = g[c], d === a) return void (this.values[c] = b); return this.keys.push(a), this.values.push(b) }, a }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () { function a() { "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.") } return a.notSupported = !0, a.prototype.observe = function () { }, a }()), d = this.getComputedStyle || function (a, b) { return this.getPropertyValue = function (b) { var c; return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function (a, b) { return b.toUpperCase() }), (null != (c = a.currentStyle) ? c[b] : void 0) || null }, this }, e = /(\-([a-z]){1})/g, this.WOW = function () { function e(a) { null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass) } return e.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null }, e.prototype.init = function () { var a; return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [] }, e.prototype.start = function () { var b, c, d, e; if (this.stopped = !1, this.boxes = function () { var a, c, d, e; for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++)b = d[a], e.push(b); return e }.call(this), this.all = function () { var a, c, d, e; for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)b = d[a], e.push(b); return e }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else for (e = this.boxes, c = 0, d = e.length; d > c; c++)b = e[c], this.applyStyle(b, !0); return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function (a) { return function (b) { var c, d, e, f, g; for (g = [], c = 0, d = b.length; d > c; c++)f = b[c], g.push(function () { var a, b, c, d; for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++)e = c[a], d.push(this.doSync(e)); return d }.call(a)); return g } }(this)).observe(document.body, { childList: !0, subtree: !0 }) : void 0 }, e.prototype.stop = function () { return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0 }, e.prototype.sync = function (b) { return a.notSupported ? this.doSync(this.element) : void 0 }, e.prototype.doSync = function (a) { var b, c, d, e, f; if (null == a && (a = this.element), 1 === a.nodeType) { for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++)b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0); return f } }, e.prototype.show = function (a) { return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a }, e.prototype.applyStyle = function (a, b) { var c, d, e; return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) { return function () { return f.customStyle(a, b, d, c, e) } }(this)) }, e.prototype.animate = function () { return "requestAnimationFrame" in window ? function (a) { return window.requestAnimationFrame(a) } : function (a) { return a() } }(), e.prototype.resetStyle = function () { var a, b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)a = d[b], e.push(a.style.visibility = "visible"); return e }, e.prototype.resetAnimation = function (a) { var b; return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0 }, e.prototype.customStyle = function (a, b, c, d, e) { return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function (a, b) { var c, d, e, f; d = []; for (c in b) e = b[c], a["" + c] = e, d.push(function () { var b, d, g, h; for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++)f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e); return h }.call(this)); return d }, e.prototype.vendorCSS = function (a, b) { var c, e, f, g, h, i; for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++)i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b); return g }, e.prototype.animationName = function (a) { var b; try { b = this.vendorCSS(a, "animation-name").cssText } catch (c) { b = d(a).getPropertyValue("animation-name") } return "none" === b ? "" : b }, e.prototype.cacheAnimationName = function (a) { return this.animationNameCache.set(a, this.animationName(a)) }, e.prototype.cachedAnimationName = function (a) { return this.animationNameCache.get(a) }, e.prototype.scrollHandler = function () { return this.scrolled = !0 }, e.prototype.scrollCallback = function () { var a; return !this.scrolled || (this.scrolled = !1, this.boxes = function () { var b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a)); return e }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop() }, e.prototype.offsetTop = function (a) { for (var b; void 0 === a.offsetTop;)a = a.parentNode; for (b = a.offsetTop; a = a.offsetParent;)b += a.offsetTop; return b }, e.prototype.isVisible = function (a) { var b, c, d, e, f; return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f }, e.prototype.util = function () { return null != this._util ? this._util : this._util = new b }, e.prototype.disabled = function () { return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, e }() }).call(this);

/*
 * classyNav.js 1.0.0
 * Responsive Megamenu plugins
 * Copyright (c) 2018 Designing World - https://themeforest.net/user/designing-world
 */

(function ($) {
    $.fn.classyNav = function (options) {

        // Variables
        var navContainer = $('.classy-nav-container');
        var classy_nav = $('.classynav ul');
        var classy_navli = $('.classynav > ul > li');
        var navbarToggler = $('.classy-navbar-toggler');
        var closeIcon = $('.classycloseIcon');
        var navToggler = $('.navbarToggler');
        var classyMenu = $('.classy-menu');
        var var_window = $(window);

        // default options
        var defaultOpt = $.extend({
            theme: 'dark',
            breakpoint: 991,
            openCloseSpeed: 350,
            megaopenCloseSpeed: 700,
            alwaysHidden: false,
            openMobileMenu: 'left',
            dropdownRtl: false,
            stickyNav: false,
            stickyFooterNav: false
        }, options);

        return this.each(function () {

            // light or dark theme
            if (defaultOpt.theme === 'light' || defaultOpt.theme === 'dark') {
                navContainer.addClass(defaultOpt.theme);
            }

            // open mobile menu direction 'left' or 'right' side
            if (defaultOpt.openMobileMenu === 'left' || defaultOpt.openMobileMenu === 'right') {
                navContainer.addClass(defaultOpt.openMobileMenu);
            }

            // dropdown rtl
            if (defaultOpt.dropdownRtl === true) {
                navContainer.addClass('dropdown-rtl');
            }

            // navbar toggler
            navbarToggler.on('click', function () {
                navToggler.toggleClass('active');
                classyMenu.toggleClass('menu-on');
                $('#returnToTop').click();
            });

            // close icon
            closeIcon.on('click', function () {
                classyMenu.removeClass('menu-on');
                navToggler.removeClass('active');
            });

            // add dropdown & megamenu class in parent li class
            classy_navli.has('.dropdown').addClass('cn-dropdown-item');
            classy_navli.has('.megamenu').addClass('megamenu-item');

            // adds toggle button to li items that have children
            classy_nav.find('li a').each(function () {
                if ($(this).next().length > 0) {
                    $(this).parent('li').addClass('has-down').append('<span class="dd-trigger"></span>');
                }
            });

            // expands the dropdown menu on each click
            classy_nav.find('li .dd-trigger').on('click', function (e) {
                e.preventDefault();
                $(this).parent('li').children('ul').stop(true, true).slideToggle(defaultOpt.openCloseSpeed);
                $(this).parent('li').toggleClass('active');
            });

            // add padding in dropdown & megamenu item
            $('.megamenu-item').removeClass('has-down');

            // expands the megamenu on each click
            classy_nav.find('li .dd-trigger').on('click', function (e) {
                e.preventDefault();
                $(this).parent('li').children('.megamenu').slideToggle(defaultOpt.megaopenCloseSpeed);
            });

            // check browser width in real-time
            function breakpointCheck() {
                var windoWidth = window.innerWidth;
                if (windoWidth <= defaultOpt.breakpoint) {
                    navContainer.removeClass('breakpoint-off').addClass('breakpoint-on');
                } else {
                    navContainer.removeClass('breakpoint-on').addClass('breakpoint-off');
                }
            }

            breakpointCheck();

            var_window.on('resize', function () {
                breakpointCheck();
            });

            // always hidden enable
            if (defaultOpt.alwaysHidden === true) {
                navContainer.addClass('breakpoint-on').removeClass('breakpoint-off');
            }

            // sticky
            if (defaultOpt.stickyNav === true) {
                var_window.on('scroll', function () {
                    if (var_window.scrollTop() > 0) {
                        navContainer.addClass('classy-sticky');
                    } else {
                        navContainer.removeClass('classy-sticky');
                    }
                });
            }

            // footer sticky
            if (defaultOpt.stickyFooterNav === true) {
                navContainer.addClass('classy-sticky-footer');
            }
        });
    };
}(jQuery));

// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var slice = Array.prototype.slice; // save ref to original slice()
    var splice = Array.prototype.splice; // save ref to original slice()

    var defaults = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: 'is-sticky',
        wrapperClassName: 'sticky-wrapper',
        center: false,
        getWidthFrom: '',
        widthFromWrapper: true, // works only when .getWidthFrom is empty
        responsiveWidth: false,
        zIndex: 'inherit'
    },
        $window = $(window),
        $document = $(document),
        sticked = [],
        windowHeight = $window.height(),
        scroller = function () {
            var scrollTop = $window.scrollTop(),
                documentHeight = $document.height(),
                dwh = documentHeight - windowHeight,
                extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

            for (var i = 0, l = sticked.length; i < l; i++) {
                var s = sticked[i],
                    elementTop = s.stickyWrapper.offset().top,
                    etse = elementTop - s.topSpacing - extra;

                //update height in case of dynamic content
                s.stickyWrapper.css('height', s.stickyElement.outerHeight());

                if (scrollTop <= etse) {
                    if (s.currentTop !== null) {
                        s.stickyElement
                            .css({
                                'width': '',
                                'position': '',
                                'top': '',
                                'z-index': ''
                            });
                        s.stickyElement.parent().removeClass(s.className);
                        s.stickyElement.trigger('sticky-end', [s]);
                        s.currentTop = null;
                    }
                }
                else {
                    var newTop = documentHeight - s.stickyElement.outerHeight()
                        - s.topSpacing - s.bottomSpacing - scrollTop - extra;
                    if (newTop < 0) {
                        newTop = newTop + s.topSpacing;
                    } else {
                        newTop = s.topSpacing;
                    }
                    if (s.currentTop !== newTop) {
                        var newWidth;
                        if (s.getWidthFrom) {
                            padding = s.stickyElement.innerWidth() - s.stickyElement.width();
                            newWidth = $(s.getWidthFrom).width() - padding || null;
                        } else if (s.widthFromWrapper) {
                            newWidth = s.stickyWrapper.width();
                        }
                        if (newWidth == null) {
                            newWidth = s.stickyElement.width();
                        }
                        s.stickyElement
                            .css('width', newWidth)
                            .css('position', 'fixed')
                            .css('top', newTop)
                            .css('z-index', s.zIndex);

                        s.stickyElement.parent().addClass(s.className);

                        if (s.currentTop === null) {
                            s.stickyElement.trigger('sticky-start', [s]);
                        } else {
                            // sticky is started but it have to be repositioned
                            s.stickyElement.trigger('sticky-update', [s]);
                        }

                        if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
                            // just reached bottom || just started to stick but bottom is already reached
                            s.stickyElement.trigger('sticky-bottom-reached', [s]);
                        } else if (s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
                            // sticky is started && sticked at topSpacing && overflowing from top just finished
                            s.stickyElement.trigger('sticky-bottom-unreached', [s]);
                        }

                        s.currentTop = newTop;
                    }

                    // Check if sticky has reached end of container and stop sticking
                    var stickyWrapperContainer = s.stickyWrapper.parent();
                    var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);

                    if (unstick) {
                        s.stickyElement
                            .css('position', 'absolute')
                            .css('top', '')
                            .css('bottom', 0)
                            .css('z-index', '');
                    } else {
                        s.stickyElement
                            .css('position', 'fixed')
                            .css('top', newTop)
                            .css('bottom', '')
                            .css('z-index', s.zIndex);
                    }
                }
            }
        },
        resizer = function () {
            windowHeight = $window.height();

            for (var i = 0, l = sticked.length; i < l; i++) {
                var s = sticked[i];
                var newWidth = null;
                if (s.getWidthFrom) {
                    if (s.responsiveWidth) {
                        newWidth = $(s.getWidthFrom).width();
                    }
                } else if (s.widthFromWrapper) {
                    newWidth = s.stickyWrapper.width();
                }
                if (newWidth != null) {
                    s.stickyElement.css('width', newWidth);
                }
            }
        },
        methods = {
            init: function (options) {
                return this.each(function () {
                    var o = $.extend({}, defaults, options);
                    var stickyElement = $(this);

                    var stickyId = stickyElement.attr('id');
                    var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
                    var wrapper = $('<div></div>')
                        .attr('id', wrapperId)
                        .addClass(o.wrapperClassName);

                    stickyElement.wrapAll(function () {
                        if ($(this).parent("#" + wrapperId).length == 0) {
                            return wrapper;
                        }
                    });

                    var stickyWrapper = stickyElement.parent();

                    if (o.center) {
                        stickyWrapper.css({ width: stickyElement.outerWidth(), marginLeft: "auto", marginRight: "auto" });
                    }

                    if (stickyElement.css("float") === "right") {
                        stickyElement.css({ "float": "none" }).parent().css({ "float": "right" });
                    }

                    o.stickyElement = stickyElement;
                    o.stickyWrapper = stickyWrapper;
                    o.currentTop = null;

                    sticked.push(o);

                    methods.setWrapperHeight(this);
                    methods.setupChangeListeners(this);
                });
            },

            setWrapperHeight: function (stickyElement) {
                var element = $(stickyElement);
                var stickyWrapper = element.parent();
                if (stickyWrapper) {
                    stickyWrapper.css('height', element.outerHeight());
                }
            },

            setupChangeListeners: function (stickyElement) {
                if (window.MutationObserver) {
                    var mutationObserver = new window.MutationObserver(function (mutations) {
                        if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
                            methods.setWrapperHeight(stickyElement);
                        }
                    });
                    mutationObserver.observe(stickyElement, { subtree: true, childList: true });
                } else {
                    if (window.addEventListener) {
                        stickyElement.addEventListener('DOMNodeInserted', function () {
                            methods.setWrapperHeight(stickyElement);
                        }, false);
                        stickyElement.addEventListener('DOMNodeRemoved', function () {
                            methods.setWrapperHeight(stickyElement);
                        }, false);
                    } else if (window.attachEvent) {
                        stickyElement.attachEvent('onDOMNodeInserted', function () {
                            methods.setWrapperHeight(stickyElement);
                        });
                        stickyElement.attachEvent('onDOMNodeRemoved', function () {
                            methods.setWrapperHeight(stickyElement);
                        });
                    }
                }
            },
            update: scroller,
            unstick: function (options) {
                return this.each(function () {
                    var that = this;
                    var unstickyElement = $(that);

                    var removeIdx = -1;
                    var i = sticked.length;
                    while (i-- > 0) {
                        if (sticked[i].stickyElement.get(0) === that) {
                            splice.call(sticked, i, 1);
                            removeIdx = i;
                        }
                    }
                    if (removeIdx !== -1) {
                        unstickyElement.unwrap();
                        unstickyElement
                            .css({
                                'width': '',
                                'position': '',
                                'top': '',
                                'float': '',
                                'z-index': ''
                            })
                            ;
                    }
                });
            }
        };

    // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
    if (window.addEventListener) {
        window.addEventListener('scroll', scroller, false);
        window.addEventListener('resize', resizer, false);
    } else if (window.attachEvent) {
        window.attachEvent('onscroll', scroller);
        window.attachEvent('onresize', resizer);
    }

    $.fn.sticky = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.sticky');
        }
    };

    $.fn.unstick = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.unstick.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.sticky');
        }
    };
    $(function () {
        setTimeout(scroller, 0);
    });
}));

/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.10.5
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function (o) { var n = {}; function i(e) { if (n[e]) return n[e].exports; var t = n[e] = { i: e, l: !1, exports: {} }; return o[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports } i.m = o, i.c = n, i.d = function (e, t, o) { i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o }) }, i.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, i.t = function (t, e) { if (1 & e && (t = i(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var o = Object.create(null); if (i.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var n in t) i.d(o, n, function (e) { return t[e] }.bind(null, n)); return o }, i.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return i.d(t, "a", t), t }, i.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, i.p = "", i(i.s = 11) }([, , function (e, t, o) { "use strict"; e.exports = function (e) { "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function () { "interactive" === document.readyState && e.call() }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e) } }, , function (o, e, t) { "use strict"; (function (e) { var t; t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, o.exports = t }).call(this, t(5)) }, function (e, t, o) { "use strict"; var n, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }; n = function () { return this }(); try { n = n || Function("return this")() || (0, eval)("this") } catch (e) { "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (n = window) } e.exports = n }, , , , , , function (e, t, o) { e.exports = o(12) }, function (e, t, o) { "use strict"; var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, i = l(o(2)), a = o(4), r = l(o(13)); function l(e) { return e && e.__esModule ? e : { default: e } } var s = a.window.jarallax; if (a.window.jarallax = r.default, a.window.jarallax.noConflict = function () { return a.window.jarallax = s, this }, void 0 !== a.jQuery) { var c = function () { var e = arguments || []; Array.prototype.unshift.call(e, this); var t = r.default.apply(a.window, e); return "object" !== (void 0 === t ? "undefined" : n(t)) ? t : this }; c.constructor = r.default.constructor; var u = a.jQuery.fn.jarallax; a.jQuery.fn.jarallax = c, a.jQuery.fn.jarallax.noConflict = function () { return a.jQuery.fn.jarallax = u, this } } (0, i.default)(function () { (0, r.default)(document.querySelectorAll("[data-jarallax]")) }) }, function (e, j, S) { "use strict"; (function (e) { Object.defineProperty(j, "__esModule", { value: !0 }); var d = function (e, t) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return function (e, t) { var o = [], n = !0, i = !1, a = void 0; try { for (var r, l = e[Symbol.iterator](); !(n = (r = l.next()).done) && (o.push(r.value), !t || o.length !== t); n = !0); } catch (e) { i = !0, a = e } finally { try { !n && l.return && l.return() } finally { if (i) throw a } } return o }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance") }, t = function () { function n(e, t) { for (var o = 0; o < t.length; o++) { var n = t[o]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } return function (e, t, o) { return t && n(e.prototype, t), o && n(e, o), e } }(), p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, o = a(S(2)), n = a(S(14)), i = S(4); function a(e) { return e && e.__esModule ? e : { default: e } } var s = -1 < navigator.userAgent.indexOf("MSIE ") || -1 < navigator.userAgent.indexOf("Trident/") || -1 < navigator.userAgent.indexOf("Edge/"), r = function () { for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), o = 0; o < e.length; o++)if (t && void 0 !== t.style[e[o]]) return e[o]; return !1 }(), b = void 0, v = void 0, l = void 0, c = !1, u = !1; function m(e) { b = i.window.innerWidth || document.documentElement.clientWidth, v = i.window.innerHeight || document.documentElement.clientHeight, "object" !== (void 0 === e ? "undefined" : p(e)) || "load" !== e.type && "dom-loaded" !== e.type || (c = !0) } m(), i.window.addEventListener("resize", m), i.window.addEventListener("orientationchange", m), i.window.addEventListener("load", m), (0, o.default)(function () { m({ type: "dom-loaded" }) }); var f = [], y = !1; function g() { if (f.length) { l = void 0 !== i.window.pageYOffset ? i.window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop; var t = c || !y || y.width !== b || y.height !== v, o = u || t || !y || y.y !== l; u = c = !1, (t || o) && (f.forEach(function (e) { t && e.onResize(), o && e.onScroll() }), y = { width: b, height: v, y: l }), (0, n.default)(g) } } var h = !!e.ResizeObserver && new e.ResizeObserver(function (e) { e && e.length && (0, n.default)(function () { e.forEach(function (e) { e.target && e.target.jarallax && (c || e.target.jarallax.onResize(), u = !0) }) }) }), x = 0, w = function () { function u(e, t) { !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, u); var o = this; o.instanceID = x++ , o.$item = e, o.defaults = { type: "scroll", speed: .5, imgSrc: null, imgElement: ".jarallax-img", imgSize: "cover", imgPosition: "50% 50%", imgRepeat: "no-repeat", keepImg: !1, elementInViewport: null, zIndex: -100, disableParallax: !1, disableVideo: !1, automaticResize: !0, videoSrc: null, videoStartTime: 0, videoEndTime: 0, videoVolume: 0, videoPlayOnlyVisible: !0, onScroll: null, onInit: null, onDestroy: null, onCoverImage: null }; var n = o.$item.getAttribute("data-jarallax"), i = JSON.parse(n || "{}"); n && console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53"); var a = o.$item.dataset || {}, r = {}; if (Object.keys(a).forEach(function (e) { var t = e.substr(0, 1).toLowerCase() + e.substr(1); t && void 0 !== o.defaults[t] && (r[t] = a[e]) }), o.options = o.extend({}, o.defaults, i, r, t), o.pureOptions = o.extend({}, o.options), Object.keys(o.options).forEach(function (e) { "true" === o.options[e] ? o.options[e] = !0 : "false" === o.options[e] && (o.options[e] = !1) }), o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed))), (o.options.noAndroid || o.options.noIos) && (console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"), o.options.disableParallax || (o.options.noIos && o.options.noAndroid ? o.options.disableParallax = /iPad|iPhone|iPod|Android/ : o.options.noIos ? o.options.disableParallax = /iPad|iPhone|iPod/ : o.options.noAndroid && (o.options.disableParallax = /Android/))), "string" == typeof o.options.disableParallax && (o.options.disableParallax = new RegExp(o.options.disableParallax)), o.options.disableParallax instanceof RegExp) { var l = o.options.disableParallax; o.options.disableParallax = function () { return l.test(navigator.userAgent) } } if ("function" != typeof o.options.disableParallax && (o.options.disableParallax = function () { return !1 }), "string" == typeof o.options.disableVideo && (o.options.disableVideo = new RegExp(o.options.disableVideo)), o.options.disableVideo instanceof RegExp) { var s = o.options.disableVideo; o.options.disableVideo = function () { return s.test(navigator.userAgent) } } "function" != typeof o.options.disableVideo && (o.options.disableVideo = function () { return !1 }); var c = o.options.elementInViewport; c && "object" === (void 0 === c ? "undefined" : p(c)) && void 0 !== c.length && (c = d(c, 1)[0]); c instanceof Element || (c = null), o.options.elementInViewport = c, o.image = { src: o.options.imgSrc || null, $container: null, useImgTag: !1, position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? "absolute" : "fixed" }, o.initImg() && o.canInitParallax() && o.init() } return t(u, [{ key: "css", value: function (t, o) { return "string" == typeof o ? i.window.getComputedStyle(t).getPropertyValue(o) : (o.transform && r && (o[r] = o.transform), Object.keys(o).forEach(function (e) { t.style[e] = o[e] }), t) } }, { key: "extend", value: function (o) { var n = arguments; return o = o || {}, Object.keys(arguments).forEach(function (t) { n[t] && Object.keys(n[t]).forEach(function (e) { o[e] = n[t][e] }) }), o } }, { key: "getWindowData", value: function () { return { width: b, height: v, y: l } } }, { key: "initImg", value: function () { var e = this, t = e.options.imgElement; return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !!e.image.$item || (null === e.image.src && (e.image.src = e.css(e.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!e.image.src || "none" === e.image.src)) } }, { key: "canInitParallax", value: function () { return r && !this.options.disableParallax() } }, { key: "init", value: function () { var e = this, t = { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", pointerEvents: "none" }, o = {}; if (!e.options.keepImg) { var n = e.$item.getAttribute("style"); if (n && e.$item.setAttribute("data-jarallax-original-styles", n), e.image.useImgTag) { var i = e.image.$item.getAttribute("style"); i && e.image.$item.setAttribute("data-jarallax-original-styles", i) } } if ("static" === e.css(e.$item, "position") && e.css(e.$item, { position: "relative" }), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, { zIndex: 0 }), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, { "z-index": e.options.zIndex }), s && e.css(e.image.$container, { opacity: .9999 }), e.image.$container.setAttribute("id", "jarallax-container-" + e.instanceID), e.$item.appendChild(e.image.$container), e.image.useImgTag ? o = e.extend({ "object-fit": e.options.imgSize, "object-position": e.options.imgPosition, "font-family": "object-fit: " + e.options.imgSize + "; object-position: " + e.options.imgPosition + ";", "max-width": "none" }, t, o) : (e.image.$item = document.createElement("div"), e.image.src && (o = e.extend({ "background-position": e.options.imgPosition, "background-size": e.options.imgSize, "background-repeat": e.options.imgRepeat, "background-image": 'url("' + e.image.src + '")' }, t, o))), "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"), "fixed" === e.image.position) for (var a = 0, r = e.$item; null !== r && r !== document && 0 === a;) { var l = e.css(r, "-webkit-transform") || e.css(r, "-moz-transform") || e.css(r, "transform"); l && "none" !== l && (a = 1, e.image.position = "absolute"), r = r.parentNode } o.position = e.image.position, e.css(e.image.$item, o), e.image.$container.appendChild(e.image.$item), e.onResize(), e.onScroll(!0), e.options.automaticResize && h && h.observe(e.$item), e.options.onInit && e.options.onInit.call(e), "none" !== e.css(e.$item, "background-image") && e.css(e.$item, { "background-image": "none" }), e.addToParallaxList() } }, { key: "addToParallaxList", value: function () { f.push(this), 1 === f.length && g() } }, { key: "removeFromParallaxList", value: function () { var o = this; f.forEach(function (e, t) { e.instanceID === o.instanceID && f.splice(t, 1) }) } }, { key: "destroy", value: function () { var e = this; e.removeFromParallaxList(); var t = e.$item.getAttribute("data-jarallax-original-styles"); if (e.$item.removeAttribute("data-jarallax-original-styles"), t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"), e.image.useImgTag) { var o = e.image.$item.getAttribute("data-jarallax-original-styles"); e.image.$item.removeAttribute("data-jarallax-original-styles"), o ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item) } e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax } }, { key: "clipContainer", value: function () { if ("fixed" === this.image.position) { var e = this, t = e.image.$container.getBoundingClientRect(), o = t.width, n = t.height; if (!e.$clipStyles) e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "jarallax-clip-" + e.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles); var i = "#jarallax-container-" + e.instanceID + " {\n           clip: rect(0 " + o + "px " + n + "px 0);\n           clip: rect(0, " + o + "px, " + n + "px, 0);\n        }"; e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = i : e.$clipStyles.innerHTML = i } } }, { key: "coverImage", value: function () { var e = this, t = e.image.$container.getBoundingClientRect(), o = t.height, n = e.options.speed, i = "scroll" === e.options.type || "scroll-opacity" === e.options.type, a = 0, r = o, l = 0; return i && (a = n < 0 ? n * Math.max(o, v) : n * (o + v), 1 < n ? r = Math.abs(a - v) : n < 0 ? r = a / n + Math.abs(a) : r += Math.abs(v - o) * (1 - n), a /= 2), e.parallaxScrollDistance = a, l = i ? (v - r) / 2 : (o - r) / 2, e.css(e.image.$item, { height: r + "px", marginTop: l + "px", left: "fixed" === e.image.position ? t.left + "px" : "0", width: t.width + "px" }), e.options.onCoverImage && e.options.onCoverImage.call(e), { image: { height: r, marginTop: l }, container: t } } }, { key: "isVisible", value: function () { return this.isElementInViewport || !1 } }, { key: "onScroll", value: function (e) { var t = this, o = t.$item.getBoundingClientRect(), n = o.top, i = o.height, a = {}, r = o; if (t.options.elementInViewport && (r = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = 0 <= r.bottom && 0 <= r.right && r.top <= v && r.left <= b, e || t.isElementInViewport) { var l = Math.max(0, n), s = Math.max(0, i + n), c = Math.max(0, -n), u = Math.max(0, n + i - v), d = Math.max(0, i - (n + i - v)), p = Math.max(0, -n + v - i), m = 1 - 2 * (v - n) / (v + i), f = 1; if (i < v ? f = 1 - (c || u) / i : s <= v ? f = s / v : d <= v && (f = d / v), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (a.transform = "translate3d(0,0,0)", a.opacity = f), "scale" === t.options.type || "scale-opacity" === t.options.type) { var y = 1; t.options.speed < 0 ? y -= t.options.speed * f : y += t.options.speed * (1 - f), a.transform = "scale(" + y + ") translate3d(0,0,0)" } if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) { var g = t.parallaxScrollDistance * m; "absolute" === t.image.position && (g -= n), a.transform = "translate3d(0," + g + "px,0)" } t.css(t.image.$item, a), t.options.onScroll && t.options.onScroll.call(t, { section: o, beforeTop: l, beforeTopEnd: s, afterTop: c, beforeBottom: u, beforeBottomEnd: d, afterBottom: p, visiblePercent: f, fromViewportCenter: m }) } } }, { key: "onResize", value: function () { this.coverImage(), this.clipContainer() } }]), u }(), $ = function (e) { ("object" === ("undefined" == typeof HTMLElement ? "undefined" : p(HTMLElement)) ? e instanceof HTMLElement : e && "object" === (void 0 === e ? "undefined" : p(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]); for (var t = arguments[1], o = Array.prototype.slice.call(arguments, 2), n = e.length, i = 0, a = void 0; i < n; i++)if ("object" === (void 0 === t ? "undefined" : p(t)) || void 0 === t ? e[i].jarallax || (e[i].jarallax = new w(e[i], t)) : e[i].jarallax && (a = e[i].jarallax[t].apply(e[i].jarallax, o)), void 0 !== a) return a; return e }; $.constructor = w, j.default = $ }).call(this, S(5)) }, function (e, t, o) { "use strict"; var n = o(4), i = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || function (e) { var t = +new Date, o = Math.max(0, 16 - (t - a)), n = setTimeout(e, o); return a = t, n }, a = +new Date; var r = n.cancelAnimationFrame || n.webkitCancelAnimationFrame || n.mozCancelAnimationFrame || clearTimeout; Function.prototype.bind && (i = i.bind(n), r = r.bind(n)), (e.exports = i).cancel = r }]);
//# sourceMappingURL=jarallax.min.js.map

/*!
 * imagesLoaded PACKAGED v4.1.3
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function (e, t) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t() }("undefined" != typeof window ? window : this, function () { function e() { } var t = e.prototype; return t.on = function (e, t) { if (e && t) { var i = this._events = this._events || {}, n = i[e] = i[e] || []; return -1 == n.indexOf(t) && n.push(t), this } }, t.once = function (e, t) { if (e && t) { this.on(e, t); var i = this._onceEvents = this._onceEvents || {}, n = i[e] = i[e] || {}; return n[t] = !0, this } }, t.off = function (e, t) { var i = this._events && this._events[e]; if (i && i.length) { var n = i.indexOf(t); return -1 != n && i.splice(n, 1), this } }, t.emitEvent = function (e, t) { var i = this._events && this._events[e]; if (i && i.length) { var n = 0, o = i[n]; t = t || []; for (var r = this._onceEvents && this._onceEvents[e]; o;) { var s = r && r[o]; s && (this.off(e, o), delete r[o]), o.apply(this, t), n += s ? 0 : 1, o = i[n] } return this } }, t.allOff = t.removeAllListeners = function () { delete this._events, delete this._onceEvents }, e }), function (e, t) { "use strict"; "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) { return t(e, i) }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter) }("undefined" != typeof window ? window : this, function (e, t) { function i(e, t) { for (var i in t) e[i] = t[i]; return e } function n(e) { var t = []; if (Array.isArray(e)) t = e; else if ("number" == typeof e.length) for (var i = 0; i < e.length; i++)t.push(e[i]); else t.push(e); return t } function o(e, t, r) { return this instanceof o ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = n(e), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function () { this.check() }.bind(this))) : new o(e, t, r) } function r(e) { this.img = e } function s(e, t) { this.url = e, this.element = t, this.img = new Image } var h = e.jQuery, a = e.console; o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function () { this.images = [], this.elements.forEach(this.addElementImages, this) }, o.prototype.addElementImages = function (e) { "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e); var t = e.nodeType; if (t && d[t]) { for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) { var o = i[n]; this.addImage(o) } if ("string" == typeof this.options.background) { var r = e.querySelectorAll(this.options.background); for (n = 0; n < r.length; n++) { var s = r[n]; this.addElementBackgroundImages(s) } } } }; var d = { 1: !0, 9: !0, 11: !0 }; return o.prototype.addElementBackgroundImages = function (e) { var t = getComputedStyle(e); if (t) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) { var o = n && n[2]; o && this.addBackground(o, e), n = i.exec(t.backgroundImage) } }, o.prototype.addImage = function (e) { var t = new r(e); this.images.push(t) }, o.prototype.addBackground = function (e, t) { var i = new s(e, t); this.images.push(i) }, o.prototype.check = function () { function e(e, i, n) { setTimeout(function () { t.progress(e, i, n) }) } var t = this; return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) { t.once("progress", e), t.check() }) : void this.complete() }, o.prototype.progress = function (e, t, i) { this.progressedCount++ , this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t) }, o.prototype.complete = function () { var e = this.hasAnyBroken ? "fail" : "done"; if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) { var t = this.hasAnyBroken ? "reject" : "resolve"; this.jqDeferred[t](this) } }, r.prototype = Object.create(t.prototype), r.prototype.check = function () { var e = this.getIsImageComplete(); return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src)) }, r.prototype.getIsImageComplete = function () { return this.img.complete && void 0 !== this.img.naturalWidth }, r.prototype.confirm = function (e, t) { this.isLoaded = e, this.emitEvent("progress", [this, this.img, t]) }, r.prototype.handleEvent = function (e) { var t = "on" + e.type; this[t] && this[t](e) }, r.prototype.onload = function () { this.confirm(!0, "onload"), this.unbindEvents() }, r.prototype.onerror = function () { this.confirm(!1, "onerror"), this.unbindEvents() }, r.prototype.unbindEvents = function () { this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, s.prototype = Object.create(r.prototype), s.prototype.check = function () { this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url; var e = this.getIsImageComplete(); e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents()) }, s.prototype.unbindEvents = function () { this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, s.prototype.confirm = function (e, t) { this.isLoaded = e, this.emitEvent("progress", [this, this.element, t]) }, o.makeJQueryPlugin = function (t) { t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function (e, t) { var i = new o(this, e, t); return i.jqDeferred.promise(h(this)) }) }, o.makeJQueryPlugin(), o });

/*!
 * Isotope PACKAGED v3.0.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */
!function (t, e) { "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery) }(window, function (t, e) { "use strict"; function i(i, s, a) { function u(t, e, n) { var o, s = "$()." + i + '("' + e + '")'; return t.each(function (t, u) { var h = a.data(u, i); if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s); var d = h[e]; if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method"); var l = d.apply(h, n); o = void 0 === o ? l : o }), void 0 !== o ? o : t } function h(t, e) { t.each(function (t, n) { var o = a.data(n, i); o ? (o.option(e), o._init()) : (o = new s(n, e), a.data(n, i, o)) }) } a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) { a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t)) }), a.fn[i] = function (t) { if ("string" == typeof t) { var e = o.call(arguments, 1); return u(this, t, e) } return h(this, t), this }, n(a)) } function n(t) { !t || t && t.bridget || (t.bridget = i) } var o = Array.prototype.slice, s = t.console, r = "undefined" == typeof s ? function () { } : function (t) { s.error(t) }; return n(e || t.jQuery), i }), function (t, e) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e() }("undefined" != typeof window ? window : this, function () { function t() { } var e = t.prototype; return e.on = function (t, e) { if (t && e) { var i = this._events = this._events || {}, n = i[t] = i[t] || []; return n.indexOf(e) == -1 && n.push(e), this } }, e.once = function (t, e) { if (t && e) { this.on(t, e); var i = this._onceEvents = this._onceEvents || {}, n = i[t] = i[t] || {}; return n[e] = !0, this } }, e.off = function (t, e) { var i = this._events && this._events[t]; if (i && i.length) { var n = i.indexOf(e); return n != -1 && i.splice(n, 1), this } }, e.emitEvent = function (t, e) { var i = this._events && this._events[t]; if (i && i.length) { var n = 0, o = i[n]; e = e || []; for (var s = this._onceEvents && this._onceEvents[t]; o;) { var r = s && s[o]; r && (this.off(t, o), delete s[o]), o.apply(this, e), n += r ? 0 : 1, o = i[n] } return this } }, t }), function (t, e) { "use strict"; "function" == typeof define && define.amd ? define("get-size/get-size", [], function () { return e() }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e() }(window, function () { "use strict"; function t(t) { var e = parseFloat(t), i = t.indexOf("%") == -1 && !isNaN(e); return i && e } function e() { } function i() { for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < h; e++) { var i = u[e]; t[i] = 0 } return t } function n(t) { var e = getComputedStyle(t); return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e } function o() { if (!d) { d = !0; var e = document.createElement("div"); e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box"; var i = document.body || document.documentElement; i.appendChild(e); var o = n(e); s.isBoxSizeOuter = r = 200 == t(o.width), i.removeChild(e) } } function s(e) { if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) { var s = n(e); if ("none" == s.display) return i(); var a = {}; a.width = e.offsetWidth, a.height = e.offsetHeight; for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) { var f = u[l], c = s[f], m = parseFloat(c); a[f] = isNaN(m) ? 0 : m } var p = a.paddingLeft + a.paddingRight, y = a.paddingTop + a.paddingBottom, g = a.marginLeft + a.marginRight, v = a.marginTop + a.marginBottom, _ = a.borderLeftWidth + a.borderRightWidth, I = a.borderTopWidth + a.borderBottomWidth, z = d && r, x = t(s.width); x !== !1 && (a.width = x + (z ? 0 : p + _)); var S = t(s.height); return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a } } var r, a = "undefined" == typeof console ? e : function (t) { console.error(t) }, u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], h = u.length, d = !1; return s }), function (t, e) { "use strict"; "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e() }(window, function () { "use strict"; var t = function () { var t = Element.prototype; if (t.matches) return "matches"; if (t.matchesSelector) return "matchesSelector"; for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) { var n = e[i], o = n + "MatchesSelector"; if (t[o]) return o } }(); return function (e, i) { return e[t](i) } }), function (t, e) { "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector) }(window, function (t, e) { var i = {}; i.extend = function (t, e) { for (var i in e) t[i] = e[i]; return t }, i.modulo = function (t, e) { return (t % e + e) % e }, i.makeArray = function (t) { var e = []; if (Array.isArray(t)) e = t; else if (t && "number" == typeof t.length) for (var i = 0; i < t.length; i++)e.push(t[i]); else e.push(t); return e }, i.removeFrom = function (t, e) { var i = t.indexOf(e); i != -1 && t.splice(i, 1) }, i.getParent = function (t, i) { for (; t != document.body;)if (t = t.parentNode, e(t, i)) return t }, i.getQueryElement = function (t) { return "string" == typeof t ? document.querySelector(t) : t }, i.handleEvent = function (t) { var e = "on" + t.type; this[e] && this[e](t) }, i.filterFindElements = function (t, n) { t = i.makeArray(t); var o = []; return t.forEach(function (t) { if (t instanceof HTMLElement) { if (!n) return void o.push(t); e(t, n) && o.push(t); for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++)o.push(i[s]) } }), o }, i.debounceMethod = function (t, e, i) { var n = t.prototype[e], o = e + "Timeout"; t.prototype[e] = function () { var t = this[o]; t && clearTimeout(t); var e = arguments, s = this; this[o] = setTimeout(function () { n.apply(s, e), delete s[o] }, i || 100) } }, i.docReady = function (t) { var e = document.readyState; "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t) }, i.toDashed = function (t) { return t.replace(/(.)([A-Z])/g, function (t, e, i) { return e + "-" + i }).toLowerCase() }; var n = t.console; return i.htmlInit = function (e, o) { i.docReady(function () { var s = i.toDashed(o), r = "data-" + s, a = document.querySelectorAll("[" + r + "]"), u = document.querySelectorAll(".js-" + s), h = i.makeArray(a).concat(i.makeArray(u)), d = r + "-options", l = t.jQuery; h.forEach(function (t) { var i, s = t.getAttribute(r) || t.getAttribute(d); try { i = s && JSON.parse(s) } catch (a) { return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a)) } var u = new e(t, i); l && l.data(t, o, u) }) }) }, i }), function (t, e) { "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize)) }(window, function (t, e) { "use strict"; function i(t) { for (var e in t) return !1; return e = null, !0 } function n(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) } function o(t) { return t.replace(/([A-Z])/g, function (t) { return "-" + t.toLowerCase() }) } var s = document.documentElement.style, r = "string" == typeof s.transition ? "transition" : "WebkitTransition", a = "string" == typeof s.transform ? "transform" : "WebkitTransform", u = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r], h = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" }, d = n.prototype = Object.create(t.prototype); d.constructor = n, d._create = function () { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, d.handleEvent = function (t) { var e = "on" + t.type; this[e] && this[e](t) }, d.getSize = function () { this.size = e(this.element) }, d.css = function (t) { var e = this.element.style; for (var i in t) { var n = h[i] || i; e[n] = t[i] } }, d.getPosition = function () { var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"), i = this.layout._getOption("originTop"), n = t[e ? "left" : "right"], o = t[i ? "top" : "bottom"], s = this.layout.size, r = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.width : parseInt(n, 10), a = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.height : parseInt(o, 10); r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a }, d.layoutPosition = function () { var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"), n = this.layout._getOption("originTop"), o = i ? "paddingLeft" : "paddingRight", s = i ? "left" : "right", r = i ? "right" : "left", a = this.position.x + t[o]; e[s] = this.getXValue(a), e[r] = ""; var u = n ? "paddingTop" : "paddingBottom", h = n ? "top" : "bottom", d = n ? "bottom" : "top", l = this.position.y + t[u]; e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this]) }, d.getXValue = function (t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px" }, d.getYValue = function (t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px" }, d._transitionTo = function (t, e) { this.getPosition(); var i = this.position.x, n = this.position.y, o = parseInt(t, 10), s = parseInt(e, 10), r = o === this.position.x && s === this.position.y; if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition(); var a = t - i, u = e - n, h = {}; h.transform = this.getTranslate(a, u), this.transition({ to: h, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }) }, d.getTranslate = function (t, e) { var i = this.layout._getOption("originLeft"), n = this.layout._getOption("originTop"); return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)" }, d.goTo = function (t, e) { this.setPosition(t, e), this.layoutPosition() }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) { this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10) }, d._nonTransition = function (t) { this.css(t.to), t.isCleaning && this._removeStyles(t.to); for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, d.transition = function (t) { if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t); var e = this._transn; for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i]; for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0); if (t.from) { this.css(t.from); var n = this.element.offsetHeight; n = null } this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0 }; var l = "opacity," + o(a); d.enableTransition = function () { if (!this.isTransitioning) { var t = this.layout.options.transitionDuration; t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(u, this, !1) } }, d.onwebkitTransitionEnd = function (t) { this.ontransitionend(t) }, d.onotransitionend = function (t) { this.ontransitionend(t) }; var f = { "-webkit-transform": "transform" }; d.ontransitionend = function (t) { if (t.target === this.element) { var e = this._transn, n = f[t.propertyName] || t.propertyName; if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) { var o = e.onEnd[n]; o.call(this), delete e.onEnd[n] } this.emitEvent("transitionEnd", [this]) } }, d.disableTransition = function () { this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1 }, d._removeStyles = function (t) { var e = {}; for (var i in t) e[i] = ""; this.css(e) }; var c = { transitionProperty: "", transitionDuration: "", transitionDelay: "" }; return d.removeTransitionStyles = function () { this.css(c) }, d.stagger = function (t) { t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms" }, d.removeElem = function () { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, d.remove = function () { return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () { this.removeElem() }), void this.hide()) : void this.removeElem() }, d.reveal = function () { delete this.isHidden, this.css({ display: "" }); var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle"); e[i] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e }) }, d.onRevealTransitionEnd = function () { this.isHidden || this.emitEvent("reveal") }, d.getHideRevealTransitionEndProperty = function (t) { var e = this.layout.options[t]; if (e.opacity) return "opacity"; for (var i in e) return i }, d.hide = function () { this.isHidden = !0, this.css({ display: "" }); var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle"); e[i] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e }) }, d.onHideTransitionEnd = function () { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, d.destroy = function () { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, n }), function (t, e) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, s) { return e(t, i, n, o, s) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item) }(window, function (t, e, i, n, o) { "use strict"; function s(t, e) { var i = n.getQueryElement(t); if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t))); this.element = i, h && (this.$element = h(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e); var o = ++l; this.element.outlayerGUID = o, f[o] = this, this._create(); var s = this._getOption("initLayout"); s && this.layout() } function r(t) { function e() { t.apply(this, arguments) } return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e } function a(t) { if ("number" == typeof t) return t; var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], n = e && e[2]; if (!i.length) return 0; i = parseFloat(i); var o = m[n] || 1; return i * o } var u = t.console, h = t.jQuery, d = function () { }, l = 0, f = {}; s.namespace = "outlayer", s.Item = o, s.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }; var c = s.prototype; n.extend(c, e.prototype), c.option = function (t) { n.extend(this.options, t) }, c._getOption = function (t) { var e = this.constructor.compatOptions[t]; return e && void 0 !== this.options[e] ? this.options[e] : this.options[t] }, s.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, c._create = function () { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle); var t = this._getOption("resize"); t && this.bindResize() }, c.reloadItems = function () { this.items = this._itemize(this.element.children) }, c._itemize = function (t) { for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) { var s = e[o], r = new i(s, this); n.push(r) } return n }, c._filterFindItemElements = function (t) { return n.filterFindElements(t, this.options.itemSelector) }, c.getItemElements = function () { return this.items.map(function (t) { return t.element }) }, c.layout = function () { this._resetLayout(), this._manageStamps(); var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited; this.layoutItems(this.items, e), this._isLayoutInited = !0 }, c._init = c.layout, c._resetLayout = function () { this.getSize() }, c.getSize = function () { this.size = i(this.element) }, c._getMeasurement = function (t, e) { var n, o = this.options[t]; o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0 }, c.layoutItems = function (t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, c._getItemsForLayout = function (t) { return t.filter(function (t) { return !t.isIgnored }) }, c._layoutItems = function (t, e) { if (this._emitCompleteOnItems("layout", t), t && t.length) { var i = []; t.forEach(function (t) { var n = this._getItemLayoutPosition(t); n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n) }, this), this._processLayoutQueue(i) } }, c._getItemLayoutPosition = function () { return { x: 0, y: 0 } }, c._processLayoutQueue = function (t) { this.updateStagger(), t.forEach(function (t, e) { this._positionItem(t.item, t.x, t.y, t.isInstant, e) }, this) }, c.updateStagger = function () { var t = this.options.stagger; return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger) }, c._positionItem = function (t, e, i, n, o) { n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i)) }, c._postLayout = function () { this.resizeContainer() }, c.resizeContainer = function () { var t = this._getOption("resizeContainer"); if (t) { var e = this._getContainerSize(); e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1)) } }, c._getContainerSize = d, c._setContainerMeasure = function (t, e) { if (void 0 !== t) { var i = this.size; i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px" } }, c._emitCompleteOnItems = function (t, e) { function i() { o.dispatchEvent(t + "Complete", null, [e]) } function n() { r++ , r == s && i() } var o = this, s = e.length; if (!e || !s) return void i(); var r = 0; e.forEach(function (e) { e.once(t, n) }) }, c.dispatchEvent = function (t, e, i) { var n = e ? [e].concat(i) : i; if (this.emitEvent(t, n), h) if (this.$element = this.$element || h(this.element), e) { var o = h.Event(e); o.type = t, this.$element.trigger(o, i) } else this.$element.trigger(t, i) }, c.ignore = function (t) { var e = this.getItem(t); e && (e.isIgnored = !0) }, c.unignore = function (t) { var e = this.getItem(t); e && delete e.isIgnored }, c.stamp = function (t) { t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this)) }, c.unstamp = function (t) { t = this._find(t), t && t.forEach(function (t) { n.removeFrom(this.stamps, t), this.unignore(t) }, this) }, c._find = function (t) { if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t) }, c._manageStamps = function () { this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this)) }, c._getBoundingRect = function () { var t = this.element.getBoundingClientRect(), e = this.size; this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) } }, c._manageStamp = d, c._getElementOffset = function (t) { var e = t.getBoundingClientRect(), n = this._boundingRect, o = i(t), s = { left: e.left - n.left - o.marginLeft, top: e.top - n.top - o.marginTop, right: n.right - e.right - o.marginRight, bottom: n.bottom - e.bottom - o.marginBottom }; return s }, c.handleEvent = n.handleEvent, c.bindResize = function () { t.addEventListener("resize", this), this.isResizeBound = !0 }, c.unbindResize = function () { t.removeEventListener("resize", this), this.isResizeBound = !1 }, c.onresize = function () { this.resize() }, n.debounceMethod(s, "onresize", 100), c.resize = function () { this.isResizeBound && this.needsResizeLayout() && this.layout() }, c.needsResizeLayout = function () { var t = i(this.element), e = this.size && t; return e && t.innerWidth !== this.size.innerWidth }, c.addItems = function (t) { var e = this._itemize(t); return e.length && (this.items = this.items.concat(e)), e }, c.appended = function (t) { var e = this.addItems(t); e.length && (this.layoutItems(e, !0), this.reveal(e)) }, c.prepended = function (t) { var e = this._itemize(t); if (e.length) { var i = this.items.slice(0); this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i) } }, c.reveal = function (t) { if (this._emitCompleteOnItems("reveal", t), t && t.length) { var e = this.updateStagger(); t.forEach(function (t, i) { t.stagger(i * e), t.reveal() }) } }, c.hide = function (t) { if (this._emitCompleteOnItems("hide", t), t && t.length) { var e = this.updateStagger(); t.forEach(function (t, i) { t.stagger(i * e), t.hide() }) } }, c.revealItemElements = function (t) { var e = this.getItems(t); this.reveal(e) }, c.hideItemElements = function (t) { var e = this.getItems(t); this.hide(e) }, c.getItem = function (t) { for (var e = 0; e < this.items.length; e++) { var i = this.items[e]; if (i.element == t) return i } }, c.getItems = function (t) { t = n.makeArray(t); var e = []; return t.forEach(function (t) { var i = this.getItem(t); i && e.push(i) }, this), e }, c.remove = function (t) { var e = this.getItems(t); this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) { t.remove(), n.removeFrom(this.items, t) }, this) }, c.destroy = function () { var t = this.element.style; t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) { t.destroy() }), this.unbindResize(); var e = this.element.outlayerGUID; delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace) }, s.data = function (t) { t = n.getQueryElement(t); var e = t && t.outlayerGUID; return e && f[e] }, s.create = function (t, e) { var i = r(s); return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(o), n.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i }; var m = { ms: 1, s: 1e3 }; return s.Item = o, s }), function (t, e) { "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer)) }(window, function (t) { "use strict"; function e() { t.Item.apply(this, arguments) } var i = e.prototype = Object.create(t.Item.prototype), n = i._create; i._create = function () { this.id = this.layout.itemGUID++ , n.call(this), this.sortData = {} }, i.updateSortData = function () { if (!this.isIgnored) { this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random(); var t = this.layout.options.getSortData, e = this.layout._sorters; for (var i in t) { var n = e[i]; this.sortData[i] = n(this.element, this) } } }; var o = i.destroy; return i.destroy = function () { o.apply(this, arguments), this.css({ display: "" }) }, e }), function (t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)) }(window, function (t, e) { "use strict"; function i(t) { this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size) } var n = i.prototype, o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"]; return o.forEach(function (t) { n[t] = function () { return e.prototype[t].apply(this.isotope, arguments) } }), n.needsVerticalResizeLayout = function () { var e = t(this.isotope.element), i = this.isotope.size && e; return i && e.innerHeight != this.isotope.size.innerHeight }, n._getMeasurement = function () { this.isotope._getMeasurement.apply(this, arguments) }, n.getColumnWidth = function () { this.getSegmentSize("column", "Width") }, n.getRowHeight = function () { this.getSegmentSize("row", "Height") }, n.getSegmentSize = function (t, e) { var i = t + e, n = "outer" + e; if (this._getMeasurement(i, n), !this[i]) { var o = this.getFirstItemSize(); this[i] = o && o[n] || this.isotope.size["inner" + e] } }, n.getFirstItemSize = function () { var e = this.isotope.filteredItems[0]; return e && e.element && t(e.element) }, n.layout = function () { this.isotope.layout.apply(this.isotope, arguments) }, n.getSize = function () { this.isotope.getSize(), this.size = this.isotope.size }, i.modes = {}, i.create = function (t, e) { function o() { i.apply(this, arguments) } return o.prototype = Object.create(n), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o }, i }), function (t, e) { "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize) }(window, function (t, e) { var i = t.create("masonry"); return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function () { this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = []; for (var t = 0; t < this.cols; t++)this.colYs.push(0); this.maxY = 0 }, i.prototype.measureColumns = function () { if (this.getContainerWidth(), !this.columnWidth) { var t = this.items[0], i = t && t.element; this.columnWidth = i && e(i).outerWidth || this.containerWidth } var n = this.columnWidth += this.gutter, o = this.containerWidth + this.gutter, s = o / n, r = n - o % n, a = r && r < 1 ? "round" : "floor"; s = Math[a](s), this.cols = Math.max(s, 1) }, i.prototype.getContainerWidth = function () { var t = this._getOption("fitWidth"), i = t ? this.element.parentNode : this.element, n = e(i); this.containerWidth = n && n.innerWidth }, i.prototype._getItemLayoutPosition = function (t) { t.getSize(); var e = t.size.outerWidth % this.columnWidth, i = e && e < 1 ? "round" : "ceil", n = Math[i](t.size.outerWidth / this.columnWidth); n = Math.min(n, this.cols); for (var o = this._getColGroup(n), s = Math.min.apply(Math, o), r = o.indexOf(s), a = { x: this.columnWidth * r, y: s }, u = s + t.size.outerHeight, h = this.cols + 1 - o.length, d = 0; d < h; d++)this.colYs[r + d] = u; return a }, i.prototype._getColGroup = function (t) { if (t < 2) return this.colYs; for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) { var o = this.colYs.slice(n, n + t); e[n] = Math.max.apply(Math, o) } return e }, i.prototype._manageStamp = function (t) { var i = e(t), n = this._getElementOffset(t), o = this._getOption("originLeft"), s = o ? n.left : n.right, r = s + i.outerWidth, a = Math.floor(s / this.columnWidth); a = Math.max(0, a); var u = Math.floor(r / this.columnWidth); u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u); for (var h = this._getOption("originTop"), d = (h ? n.top : n.bottom) + i.outerHeight, l = a; l <= u; l++)this.colYs[l] = Math.max(d, this.colYs[l]) }, i.prototype._getContainerSize = function () { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t }, i.prototype._getContainerFitWidth = function () { for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)t++; return (this.cols - t) * this.columnWidth - this.gutter }, i.prototype.needsResizeLayout = function () { var t = this.containerWidth; return this.getContainerWidth(), t != this.containerWidth }, i }), function (t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry) }(window, function (t, e) { "use strict"; var i = t.create("masonry"), n = i.prototype, o = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 }; for (var s in e.prototype) o[s] || (n[s] = e.prototype[s]); var r = n.measureColumns; n.measureColumns = function () { this.items = this.isotope.filteredItems, r.call(this) }; var a = n._getOption; return n._getOption = function (t) { return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments) }, i }), function (t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function (t) { "use strict"; var e = t.create("fitRows"), i = e.prototype; return i._resetLayout = function () { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, i._getItemLayoutPosition = function (t) { t.getSize(); var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter; 0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY); var n = { x: this.x, y: this.y }; return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n }, i._getContainerSize = function () { return { height: this.maxY } }, e }), function (t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function (t) { "use strict"; var e = t.create("vertical", { horizontalAlignment: 0 }), i = e.prototype; return i._resetLayout = function () { this.y = 0 }, i._getItemLayoutPosition = function (t) { t.getSize(); var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y; return this.y += t.size.outerHeight, { x: e, y: i } }, i._getContainerSize = function () { return { height: this.y } }, e }), function (t, e) { "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (i, n, o, s, r, a) { return e(t, i, n, o, s, r, a) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode) }(window, function (t, e, i, n, o, s, r) {
    function a(t, e) { return function (i, n) { for (var o = 0; o < t.length; o++) { var s = t[o], r = i.sortData[s], a = n.sortData[s]; if (r > a || r < a) { var u = void 0 !== e[s] ? e[s] : e, h = u ? 1 : -1; return (r > a ? 1 : -1) * h } } return 0 } } var u = t.jQuery, h = String.prototype.trim ? function (t) { return t.trim() } : function (t) { return t.replace(/^\s+|\s+$/g, "") }, d = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 }); d.Item = s, d.LayoutMode = r; var l = d.prototype; l._create = function () { this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"]; for (var t in r.modes) this._initLayoutMode(t) }, l.reloadItems = function () { this.itemGUID = 0, e.prototype.reloadItems.call(this) }, l._itemize = function () { for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) { var n = t[i]; n.id = this.itemGUID++ } return this._updateItemsSortData(t), t }, l._initLayoutMode = function (t) { var e = r.modes[t], i = this.options[t] || {}; this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this) }, l.layout = function () { return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout() }, l._layout = function () { var t = this._getIsInstant(); this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0 }, l.arrange = function (t) { this.option(t), this._getIsInstant(); var e = this._filter(this.items); this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout() }, l._init = l.arrange, l._hideReveal = function (t) { this.reveal(t.needReveal), this.hide(t.needHide) }, l._getIsInstant = function () { var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited; return this._isInstant = e, e }, l._bindArrangeComplete = function () { function t() { e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems]) } var e, i, n, o = this; this.once("layoutComplete", function () { e = !0, t() }), this.once("hideComplete", function () { i = !0, t() }), this.once("revealComplete", function () { n = !0, t() }) }, l._filter = function (t) { var e = this.options.filter; e = e || "*"; for (var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) { var a = t[r]; if (!a.isIgnored) { var u = s(a); u && i.push(a), u && a.isHidden ? n.push(a) : u || a.isHidden || o.push(a) } } return { matches: i, needReveal: n, needHide: o } }, l._getFilterTest = function (t) { return u && this.options.isJQueryFiltering ? function (e) { return u(e.element).is(t) } : "function" == typeof t ? function (e) { return t(e.element) } : function (e) { return n(e.element, t) } }, l.updateSortData = function (t) { var e; t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e) }, l._getSorters = function () { var t = this.options.getSortData; for (var e in t) { var i = t[e]; this._sorters[e] = f(i) } }, l._updateItemsSortData = function (t) { for (var e = t && t.length, i = 0; e && i < e; i++) { var n = t[i]; n.updateSortData() } }; var f = function () {
        function t(t) {
            if ("string" != typeof t) return t; var i = h(t).split(" "), n = i[0], o = n.match(/^\[(.+)\]$/), s = o && o[1], r = e(s, n), a = d.sortDataParsers[i[1]];
            return t = a ? function (t) { return t && a(r(t)) } : function (t) { return t && r(t) }
        } function e(t, e) { return t ? function (e) { return e.getAttribute(t) } : function (t) { var i = t.querySelector(e); return i && i.textContent } } return t
    }(); d.sortDataParsers = { parseInt: function (t) { return parseInt(t, 10) }, parseFloat: function (t) { return parseFloat(t) } }, l._sort = function () { var t = this.options.sortBy; if (t) { var e = [].concat.apply(t, this.sortHistory), i = a(e, this.options.sortAscending); this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t) } }, l._mode = function () { var t = this.options.layoutMode, e = this.modes[t]; if (!e) throw new Error("No layout mode: " + t); return e.options = this.options[t], e }, l._resetLayout = function () { e.prototype._resetLayout.call(this), this._mode()._resetLayout() }, l._getItemLayoutPosition = function (t) { return this._mode()._getItemLayoutPosition(t) }, l._manageStamp = function (t) { this._mode()._manageStamp(t) }, l._getContainerSize = function () { return this._mode()._getContainerSize() }, l.needsResizeLayout = function () { return this._mode().needsResizeLayout() }, l.appended = function (t) { var e = this.addItems(t); if (e.length) { var i = this._filterRevealAdded(e); this.filteredItems = this.filteredItems.concat(i) } }, l.prepended = function (t) { var e = this._itemize(t); if (e.length) { this._resetLayout(), this._manageStamps(); var i = this._filterRevealAdded(e); this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items) } }, l._filterRevealAdded = function (t) { var e = this._filter(t); return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches }, l.insert = function (t) { var e = this.addItems(t); if (e.length) { var i, n, o = e.length; for (i = 0; i < o; i++)n = e[i], this.element.appendChild(n.element); var s = this._filter(e).matches; for (i = 0; i < o; i++)e[i].isLayoutInstant = !0; for (this.arrange(), i = 0; i < o; i++)delete e[i].isLayoutInstant; this.reveal(s) } }; var c = l.remove; return l.remove = function (t) { t = o.makeArray(t); var e = this.getItems(t); c.call(this, t); for (var i = e && e.length, n = 0; i && n < i; n++) { var s = e[n]; o.removeFrom(this.filteredItems, s) } }, l.shuffle = function () { for (var t = 0; t < this.items.length; t++) { var e = this.items[t]; e.sortData.random = Math.random() } this.options.sortBy = "random", this._sort(), this._layout() }, l._noTransition = function (t, e) { var i = this.options.transitionDuration; this.options.transitionDuration = 0; var n = t.apply(this, e); return this.options.transitionDuration = i, n }, l.getFilteredItemElements = function () { return this.filteredItems.map(function (t) { return t.element }) }, d
});

/**
 * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
 * {@link http://kottenator.github.io/jquery-circle-progress/}
 *
 * @author Rostyslav Bryzgunov <kottenator@gmail.com>
 * @version 1.2.2
 * @licence MIT
 * @preserve
 */
!function (i) { if ("function" == typeof define && define.amd) define(["jquery"], i); else if ("object" == typeof module && module.exports) { var t = require("jquery"); i(t), module.exports = t } else i(jQuery) }(function (i) { function t(i) { this.init(i) } t.prototype = { value: 0, size: 100, startAngle: -Math.PI, thickness: "auto", fill: { gradient: ["#3aeabb", "#fdd250"] }, emptyFill: "rgba(0, 0, 0, .1)", animation: { duration: 1200, easing: "circleProgressEasing" }, animationStartValue: 0, reverse: !1, lineCap: "butt", insertMode: "prepend", constructor: t, el: null, canvas: null, ctx: null, radius: 0, arcFill: null, lastFrameValue: 0, init: function (t) { i.extend(this, t), this.radius = this.size / 2, this.initWidget(), this.initFill(), this.draw(), this.el.trigger("circle-inited") }, initWidget: function () { this.canvas || (this.canvas = i("<canvas>")["prepend" == this.insertMode ? "prependTo" : "appendTo"](this.el)[0]); var t = this.canvas; if (t.width = this.size, t.height = this.size, this.ctx = t.getContext("2d"), window.devicePixelRatio > 1) { var e = window.devicePixelRatio; t.style.width = t.style.height = this.size + "px", t.width = t.height = this.size * e, this.ctx.scale(e, e) } }, initFill: function () { function t() { var t = i("<canvas>")[0]; t.width = e.size, t.height = e.size, t.getContext("2d").drawImage(g, 0, 0, r, r), e.arcFill = e.ctx.createPattern(t, "no-repeat"), e.drawFrame(e.lastFrameValue) } var e = this, a = this.fill, n = this.ctx, r = this.size; if (!a) throw Error("The fill is not specified!"); if ("string" == typeof a && (a = { color: a }), a.color && (this.arcFill = a.color), a.gradient) { var s = a.gradient; if (1 == s.length) this.arcFill = s[0]; else if (s.length > 1) { for (var l = a.gradientAngle || 0, o = a.gradientDirection || [r / 2 * (1 - Math.cos(l)), r / 2 * (1 + Math.sin(l)), r / 2 * (1 + Math.cos(l)), r / 2 * (1 - Math.sin(l))], h = n.createLinearGradient.apply(n, o), c = 0; c < s.length; c++) { var d = s[c], u = c / (s.length - 1); i.isArray(d) && (u = d[1], d = d[0]), h.addColorStop(u, d) } this.arcFill = h } } if (a.image) { var g; a.image instanceof Image ? g = a.image : (g = new Image, g.src = a.image), g.complete ? t() : g.onload = t } }, draw: function () { this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value) }, drawFrame: function (i) { this.lastFrameValue = i, this.ctx.clearRect(0, 0, this.size, this.size), this.drawEmptyArc(i), this.drawArc(i) }, drawArc: function (i) { if (0 !== i) { var t = this.ctx, e = this.radius, a = this.getThickness(), n = this.startAngle; t.save(), t.beginPath(), this.reverse ? t.arc(e, e, e - a / 2, n - 2 * Math.PI * i, n) : t.arc(e, e, e - a / 2, n, n + 2 * Math.PI * i), t.lineWidth = a, t.lineCap = this.lineCap, t.strokeStyle = this.arcFill, t.stroke(), t.restore() } }, drawEmptyArc: function (i) { var t = this.ctx, e = this.radius, a = this.getThickness(), n = this.startAngle; i < 1 && (t.save(), t.beginPath(), i <= 0 ? t.arc(e, e, e - a / 2, 0, 2 * Math.PI) : this.reverse ? t.arc(e, e, e - a / 2, n, n - 2 * Math.PI * i) : t.arc(e, e, e - a / 2, n + 2 * Math.PI * i, n), t.lineWidth = a, t.strokeStyle = this.emptyFill, t.stroke(), t.restore()) }, drawAnimated: function (t) { var e = this, a = this.el, n = i(this.canvas); n.stop(!0, !1), a.trigger("circle-animation-start"), n.css({ animationProgress: 0 }).animate({ animationProgress: 1 }, i.extend({}, this.animation, { step: function (i) { var n = e.animationStartValue * (1 - i) + t * i; e.drawFrame(n), a.trigger("circle-animation-progress", [i, n]) } })).promise().always(function () { a.trigger("circle-animation-end") }) }, getThickness: function () { return i.isNumeric(this.thickness) ? this.thickness : this.size / 14 }, getValue: function () { return this.value }, setValue: function (i) { this.animation && (this.animationStartValue = this.lastFrameValue), this.value = i, this.draw() } }, i.circleProgress = { defaults: t.prototype }, i.easing.circleProgressEasing = function (i) { return i < .5 ? (i = 2 * i, .5 * i * i * i) : (i = 2 - 2 * i, 1 - .5 * i * i * i) }, i.fn.circleProgress = function (e, a) { var n = "circle-progress", r = this.data(n); if ("widget" == e) { if (!r) throw Error('Calling "widget" method on not initialized instance is forbidden'); return r.canvas } if ("value" == e) { if (!r) throw Error('Calling "value" method on not initialized instance is forbidden'); if ("undefined" == typeof a) return r.getValue(); var s = arguments[1]; return this.each(function () { i(this).data(n).setValue(s) }) } return this.each(function () { var a = i(this), r = a.data(n), s = i.isPlainObject(e) ? e : {}; if (r) r.init(s); else { var l = i.extend({}, a.data()); "string" == typeof l.fill && (l.fill = JSON.parse(l.fill)), "string" == typeof l.animation && (l.animation = JSON.parse(l.animation)), s = i.extend(l, s), s.el = a, r = new t(s), a.data(n, r) } }) } });



/**
 * jQuery.marquee - scrolling text like old marquee element
 * @author Aamir Afridi - aamirafridi(at)gmail(dot)com / http://aamirafridi.com/jquery/jquery-marquee-plugin
 */
(function ($) {
    $.fn.marquee = function (options) {
        return this.each(function () {
            var o = $.extend({}, $.fn.marquee.defaults, options), $this = $(this), $marqueeWrapper, containerWidth, animationCss, verticalDir, elWidth, loopCount = 3, playState = 'animation-play-state', css3AnimationIsSupported = !1, _prefixedEvent = function (element, type, callback) { var pfx = ["webkit", "moz", "MS", "o", ""]; for (var p = 0; p < pfx.length; p++) { if (!pfx[p]) type = type.toLowerCase(); element.addEventListener(pfx[p] + type, callback, !1) } }, _objToString = function (obj) {
                var tabjson = []; for (var p in obj) { if (obj.hasOwnProperty(p)) { tabjson.push(p + ':' + obj[p]) } }
                tabjson.push(); return '{' + tabjson.join(',') + '}'
            }, _startAnimationWithDelay = function () { $this.timer = setTimeout(animate, o.delayBeforeStart) }, methods = {
                pause: function () {
                    if (css3AnimationIsSupported && o.allowCss3Support) { $marqueeWrapper.css(playState, 'paused') } else { if ($.fn.pause) { $marqueeWrapper.pause() } }
                    $this.data('runningStatus', 'paused'); $this.trigger('paused')
                }, resume: function () {
                    if (css3AnimationIsSupported && o.allowCss3Support) { $marqueeWrapper.css(playState, 'running') } else { if ($.fn.resume) { $marqueeWrapper.resume() } }
                    $this.data('runningStatus', 'resumed'); $this.trigger('resumed')
                }, toggle: function () { methods[$this.data('runningStatus') == 'resumed' ? 'pause' : 'resume']() }, destroy: function () { clearTimeout($this.timer); $this.find("*").addBack().off(); $this.html($this.find('.js-marquee:first').html()) }
            }; if (typeof options === 'string') {
                if ($.isFunction(methods[options])) {
                    if (!$marqueeWrapper) { $marqueeWrapper = $this.find('.js-marquee-wrapper') }
                    if ($this.data('css3AnimationIsSupported') === !0) { css3AnimationIsSupported = !0 }
                    methods[options]()
                }
                return
            }
            var dataAttributes = {}, attr; $.each(o, function (key, value) {
                attr = $this.attr('data-' + key); if (typeof attr !== 'undefined') {
                    switch (attr) { case 'true': attr = !0; break; case 'false': attr = !1; break }
                    o[key] = attr
                }
            }); if (o.speed) { o.duration = parseInt($this.width(), 10) / o.speed * 1000 }
            verticalDir = o.direction == 'up' || o.direction == 'down'; o.gap = o.duplicated ? parseInt(o.gap) : 0; $this.wrapInner('<div class="js-marquee"></div>'); var $el = $this.find('.js-marquee').css({ 'margin-right': o.gap, 'float': 'left' }); if (o.duplicated) { $el.clone(!0).appendTo($this) }
            $this.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'); $marqueeWrapper = $this.find('.js-marquee-wrapper'); if (verticalDir) { var containerHeight = $this.height(); $marqueeWrapper.removeAttr('style'); $this.height(containerHeight); $this.find('.js-marquee').css({ 'float': 'none', 'margin-bottom': o.gap, 'margin-right': 0 }); if (o.duplicated) $this.find('.js-marquee:last').css({ 'margin-bottom': 0 }); var elHeight = $this.find('.js-marquee:first').height() + o.gap; if (o.startVisible && !o.duplicated) { o._completeDuration = ((parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10)) * o.duration; o.duration = (parseInt(elHeight, 10) / parseInt(containerHeight, 10)) * o.duration } else { o.duration = ((parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10)) * o.duration } } else { elWidth = $this.find('.js-marquee:first').width() + o.gap; containerWidth = $this.width(); if (o.startVisible && !o.duplicated) { o._completeDuration = ((parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10)) * o.duration; o.duration = (parseInt(elWidth, 10) / parseInt(containerWidth, 10)) * o.duration } else { o.duration = ((parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10)) * o.duration } }
            if (o.duplicated) { o.duration = o.duration / 2 }
            if (o.allowCss3Support) {
                var
                elm = document.body || document.createElement('div'), animationName = 'marqueeAnimation-' + Math.floor(Math.random() * 10000000), domPrefixes = 'Webkit Moz O ms Khtml'.split(' '), animationString = 'animation', animationCss3Str = '', keyframeString = ''; if (elm.style.animation !== undefined) { keyframeString = '@keyframes ' + animationName + ' '; css3AnimationIsSupported = !0 }
                if (css3AnimationIsSupported === !1) { for (var i = 0; i < domPrefixes.length; i++) { if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) { var prefix = '-' + domPrefixes[i].toLowerCase() + '-'; animationString = prefix + animationString; playState = prefix + playState; keyframeString = '@' + prefix + 'keyframes ' + animationName + ' '; css3AnimationIsSupported = !0; break } } }
                if (css3AnimationIsSupported) { animationCss3Str = animationName + ' ' + o.duration / 1000 + 's ' + o.delayBeforeStart / 1000 + 's infinite ' + o.css3easing; $this.data('css3AnimationIsSupported', !0) }
            }
            var _rePositionVertically = function () { $marqueeWrapper.css('transform', 'translateY(' + (o.direction == 'up' ? containerHeight + 'px' : '-' + elHeight + 'px') + ')') }, _rePositionHorizontally = function () { $marqueeWrapper.css('transform', 'translateX(' + (o.direction == 'left' ? containerWidth + 'px' : '-' + elWidth + 'px') + ')') }; if (o.duplicated) {
                if (verticalDir) { if (o.startVisible) { $marqueeWrapper.css('transform', 'translateY(0)') } else { $marqueeWrapper.css('transform', 'translateY(' + (o.direction == 'up' ? containerHeight + 'px' : '-' + ((elHeight * 2) - o.gap) + 'px') + ')') } } else { if (o.startVisible) { $marqueeWrapper.css('transform', 'translateX(0)') } else { $marqueeWrapper.css('transform', 'translateX(' + (o.direction == 'left' ? containerWidth + 'px' : '-' + ((elWidth * 2) - o.gap) + 'px') + ')') } }
                if (!o.startVisible) { loopCount = 1 }
            } else if (o.startVisible) { loopCount = 2 } else { if (verticalDir) { _rePositionVertically() } else { _rePositionHorizontally() } }
            var animate = function () {
                if (o.duplicated) {
                    if (loopCount === 1) {
                    o._originalDuration = o.duration; if (verticalDir) { o.duration = o.direction == 'up' ? o.duration + (containerHeight / ((elHeight) / o.duration)) : o.duration * 2 } else { o.duration = o.direction == 'left' ? o.duration + (containerWidth / ((elWidth) / o.duration)) : o.duration * 2 }
                        if (animationCss3Str) { animationCss3Str = animationName + ' ' + o.duration / 1000 + 's ' + o.delayBeforeStart / 1000 + 's ' + o.css3easing }
                        loopCount++
                    }
                    else if (loopCount === 2) {
                    o.duration = o._originalDuration; if (animationCss3Str) { animationName = animationName + '0'; keyframeString = $.trim(keyframeString) + '0 '; animationCss3Str = animationName + ' ' + o.duration / 1000 + 's 0s infinite ' + o.css3easing }
                        loopCount++
                    }
                }
                if (verticalDir) {
                    if (o.duplicated) {
                        if (loopCount > 2) { $marqueeWrapper.css('transform', 'translateY(' + (o.direction == 'up' ? 0 : '-' + elHeight + 'px') + ')') }
                        animationCss = { 'transform': 'translateY(' + (o.direction == 'up' ? '-' + elHeight + 'px' : 0) + ')' }
                    } else if (o.startVisible) {
                        if (loopCount === 2) {
                            if (animationCss3Str) { animationCss3Str = animationName + ' ' + o.duration / 1000 + 's ' + o.delayBeforeStart / 1000 + 's ' + o.css3easing }
                            animationCss = { 'transform': 'translateY(' + (o.direction == 'up' ? '-' + elHeight + 'px' : containerHeight + 'px') + ')' }; loopCount++
                        } else if (loopCount === 3) {
                        o.duration = o._completeDuration; if (animationCss3Str) { animationName = animationName + '0'; keyframeString = $.trim(keyframeString) + '0 '; animationCss3Str = animationName + ' ' + o.duration / 1000 + 's 0s infinite ' + o.css3easing }
                            _rePositionVertically()
                        }
                    } else { _rePositionVertically(); animationCss = { 'transform': 'translateY(' + (o.direction == 'up' ? '-' + ($marqueeWrapper.height()) + 'px' : containerHeight + 'px') + ')' } }
                } else {
                    if (o.duplicated) {
                        if (loopCount > 2) { $marqueeWrapper.css('transform', 'translateX(' + (o.direction == 'left' ? 0 : '-' + elWidth + 'px') + ')') }
                        animationCss = { 'transform': 'translateX(' + (o.direction == 'left' ? '-' + elWidth + 'px' : 0) + ')' }
                    } else if (o.startVisible) {
                        if (loopCount === 2) {
                            if (animationCss3Str) { animationCss3Str = animationName + ' ' + o.duration / 1000 + 's ' + o.delayBeforeStart / 1000 + 's ' + o.css3easing }
                            animationCss = { 'transform': 'translateX(' + (o.direction == 'left' ? '-' + elWidth + 'px' : containerWidth + 'px') + ')' }; loopCount++
                        } else if (loopCount === 3) {
                        o.duration = o._completeDuration; if (animationCss3Str) { animationName = animationName + '0'; keyframeString = $.trim(keyframeString) + '0 '; animationCss3Str = animationName + ' ' + o.duration / 1000 + 's 0s infinite ' + o.css3easing }
                            _rePositionHorizontally()
                        }
                    } else { _rePositionHorizontally(); animationCss = { 'transform': 'translateX(' + (o.direction == 'left' ? '-' + elWidth + 'px' : containerWidth + 'px') + ')' } }
                }
                $this.trigger('beforeStarting'); if (css3AnimationIsSupported) {
                    $marqueeWrapper.css(animationString, animationCss3Str); var keyframeCss = keyframeString + ' { 100%  ' + _objToString(animationCss) + '}', $styles = $marqueeWrapper.find('style'); if ($styles.length !== 0) { $styles.filter(":last").html(keyframeCss) } else { $('head').append('<style>' + keyframeCss + '</style>') }
                    _prefixedEvent($marqueeWrapper[0], "AnimationIteration", function () { $this.trigger('finished') }); _prefixedEvent($marqueeWrapper[0], "AnimationEnd", function () { animate(); $this.trigger('finished') })
                } else { $marqueeWrapper.animate(animationCss, o.duration, o.easing, function () { $this.trigger('finished'); if (o.pauseOnCycle) { _startAnimationWithDelay() } else { animate() } }) }
                $this.data('runningStatus', 'resumed')
            }; $this.on('pause', methods.pause); $this.on('resume', methods.resume); if (o.pauseOnHover) { $this.on('mouseenter', methods.pause); $this.on('mouseleave', methods.resume) }
            if (css3AnimationIsSupported && o.allowCss3Support) { animate() } else { _startAnimationWithDelay() }
        })
    }; $.fn.marquee.defaults = { allowCss3Support: !0, css3easing: 'linear', easing: 'linear', delayBeforeStart: 1000, direction: 'left', duplicated: !1, duration: 5000, speed: 0, gap: 20, pauseOnCycle: !1, pauseOnHover: !1, startVisible: !1 }
})(jQuery)


/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function (e) { e.fn.niceSelect = function (t) { function s(t) { t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>')); var s = t.next(), n = t.find("option"), i = t.find("option:selected"); s.find(".current").html(i.data("display") || i.text()), n.each(function (t) { var n = e(this), i = n.data("display"); s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text())) }) } if ("string" == typeof t) return "update" == t ? this.each(function () { var t = e(this), n = e(this).next(".nice-select"), i = n.hasClass("open"); n.length && (n.remove(), s(t), i && t.next().trigger("click")) }) : "destroy" == t ? (this.each(function () { var t = e(this), s = e(this).next(".nice-select"); s.length && (s.remove(), t.css("display", "")) }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this; this.hide(), this.each(function () { var t = e(this); t.next().hasClass("nice-select") || s(t) }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) { var s = e(this); e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus() }), e(document).on("click.nice_select", function (t) { 0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option") }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) { var s = e(this), n = s.closest(".nice-select"); n.find(".selected").removeClass("selected"), s.addClass("selected"); var i = s.data("display") || s.text(); n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change") }), e(document).on("keydown.nice_select", ".nice-select", function (t) { var s = e(this), n = e(s.find(".focus") || s.find(".list .option.selected")); if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1; if (40 == t.keyCode) { if (s.hasClass("open")) { var i = n.nextAll(".option:not(.disabled)").first(); i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus")) } else s.trigger("click"); return !1 } if (38 == t.keyCode) { if (s.hasClass("open")) { var l = n.prevAll(".option:not(.disabled)").first(); l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus")) } else s.trigger("click"); return !1 } if (27 == t.keyCode) s.hasClass("open") && s.trigger("click"); else if (9 == t.keyCode && s.hasClass("open")) return !1 }); var n = document.createElement("a").style; return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this } }(jQuery);

/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/(function (e) { "use strict"; e.fn.counterUp = function (t) { var n = e.extend({ time: 400, delay: 10 }, t); return this.each(function () { var t = e(this), r = n, i = function () { var e = [], n = r.time / r.delay, i = t.text(), s = /[0-9]+,[0-9]+/.test(i); i = i.replace(/,/g, ""); var o = /^[0-9]+$/.test(i), u = /^[0-9]+\.[0-9]+$/.test(i), a = u ? (i.split(".")[1] || []).length : 0; for (var f = n; f >= 1; f--) { var l = parseInt(i / n * f); u && (l = parseFloat(i / n * f).toFixed(a)); if (s) while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2"); e.unshift(l) } t.data("counterup-nums", e); t.text("0"); var c = function () { t.text(t.data("counterup-nums").shift()); if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay); else { delete t.data("counterup-nums"); t.data("counterup-nums", null); t.data("counterup-func", null) } }; t.data("counterup-func", c); setTimeout(t.data("counterup-func"), r.delay) }; t.waypoint(i, { offset: "100%", triggerOnce: !0 }) }) } })(jQuery);


//AOS

!function (e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t() }(this, function () { return function (e) { function t(o) { if (n[o]) return n[o].exports; var i = n[o] = { exports: {}, id: o, loaded: !1 }; return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports } var n = {}; return t.m = e, t.c = n, t.p = "dist/", t(0) }([function (e, t, n) { "use strict"; function o(e) { return e && e.__esModule ? e : { default: e } } var i = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]) } return e }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), f = o(c), s = n(8), d = o(s), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = !1, x = document.all && !window.atob, j = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded" }, O = function () { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; if (e && (k = !0), k) return w = (0, y.default)(w, j), (0, b.default)(w, j.once), w }, S = function () { w = (0, h.default)(), O() }, _ = function () { w.forEach(function (e, t) { e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay") }) }, E = function (e) { return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0 }, z = function (e) { return j = i(j, e), w = (0, h.default)(), E(j.disable) || x ? _() : (document.querySelector("body").setAttribute("data-aos-easing", j.easing), document.querySelector("body").setAttribute("data-aos-duration", j.duration), document.querySelector("body").setAttribute("data-aos-delay", j.delay), "DOMContentLoaded" === j.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? O(!0) : "load" === j.startEvent ? window.addEventListener(j.startEvent, function () { O(!0) }) : document.addEventListener(j.startEvent, function () { O(!0) }), window.addEventListener("resize", (0, f.default)(O, 50, !0)), window.addEventListener("orientationchange", (0, f.default)(O, 50, !0)), window.addEventListener("scroll", (0, u.default)(function () { (0, b.default)(w, j.once) }, 99)), document.addEventListener("DOMNodeRemoved", function (e) { var t = e.target; t && 1 === t.nodeType && t.hasAttribute && t.hasAttribute("data-aos") && (0, f.default)(S, 50, !0) }), (0, d.default)("[data-aos]", S), w) }; e.exports = { init: z, refresh: O, refreshHard: S } }, function (e, t) { }, , , , , function (e, t) { (function (t) { "use strict"; function n(e, t, n) { function o(t) { var n = b, o = v; return b = v = void 0, k = t, g = e.apply(o, n) } function r(e) { return k = e, h = setTimeout(s, t), S ? o(e) : g } function a(e) { var n = e - w, o = e - k, i = t - n; return _ ? j(i, y - o) : i } function c(e) { var n = e - w, o = e - k; return void 0 === w || n >= t || n < 0 || _ && o >= y } function s() { var e = O(); return c(e) ? d(e) : void (h = setTimeout(s, a(e))) } function d(e) { return h = void 0, E && b ? o(e) : (b = v = void 0, g) } function l() { void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0 } function p() { return void 0 === h ? g : d(O()) } function m() { var e = O(), n = c(e); if (b = arguments, v = this, w = e, n) { if (void 0 === h) return r(w); if (_) return h = setTimeout(s, t), o(w) } return void 0 === h && (h = setTimeout(s, t)), g } var b, v, y, g, h, w, k = 0, S = !1, _ = !1, E = !0; if ("function" != typeof e) throw new TypeError(f); return t = u(t) || 0, i(n) && (S = !!n.leading, _ = "maxWait" in n, y = _ ? x(u(n.maxWait) || 0, t) : y, E = "trailing" in n ? !!n.trailing : E), m.cancel = l, m.flush = p, m } function o(e, t, o) { var r = !0, a = !0; if ("function" != typeof e) throw new TypeError(f); return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, { leading: r, maxWait: t, trailing: a }) } function i(e) { var t = "undefined" == typeof e ? "undefined" : c(e); return !!e && ("object" == t || "function" == t) } function r(e) { return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e)) } function a(e) { return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d } function u(e) { if ("number" == typeof e) return e; if (a(e)) return s; if (i(e)) { var t = "function" == typeof e.valueOf ? e.valueOf() : e; e = i(t) ? t + "" : t } if ("string" != typeof e) return 0 === e ? e : +e; e = e.replace(l, ""); var n = m.test(e); return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e } var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, f = "Expected a function", s = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function () { return h.Date.now() }; e.exports = o }).call(t, function () { return this }()) }, function (e, t) { (function (t) { "use strict"; function n(e, t, n) { function i(t) { var n = b, o = v; return b = v = void 0, O = t, g = e.apply(o, n) } function r(e) { return O = e, h = setTimeout(s, t), S ? i(e) : g } function u(e) { var n = e - w, o = e - O, i = t - n; return _ ? x(i, y - o) : i } function f(e) { var n = e - w, o = e - O; return void 0 === w || n >= t || n < 0 || _ && o >= y } function s() { var e = j(); return f(e) ? d(e) : void (h = setTimeout(s, u(e))) } function d(e) { return h = void 0, E && b ? i(e) : (b = v = void 0, g) } function l() { void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0 } function p() { return void 0 === h ? g : d(j()) } function m() { var e = j(), n = f(e); if (b = arguments, v = this, w = e, n) { if (void 0 === h) return r(w); if (_) return h = setTimeout(s, t), i(w) } return void 0 === h && (h = setTimeout(s, t)), g } var b, v, y, g, h, w, O = 0, S = !1, _ = !1, E = !0; if ("function" != typeof e) throw new TypeError(c); return t = a(t) || 0, o(n) && (S = !!n.leading, _ = "maxWait" in n, y = _ ? k(a(n.maxWait) || 0, t) : y, E = "trailing" in n ? !!n.trailing : E), m.cancel = l, m.flush = p, m } function o(e) { var t = "undefined" == typeof e ? "undefined" : u(e); return !!e && ("object" == t || "function" == t) } function i(e) { return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e)) } function r(e) { return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == s } function a(e) { if ("number" == typeof e) return e; if (r(e)) return f; if (o(e)) { var t = "function" == typeof e.valueOf ? e.valueOf() : e; e = o(t) ? t + "" : t } if ("string" != typeof e) return 0 === e ? e : +e; e = e.replace(d, ""); var n = p.test(e); return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e } var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, c = "Expected a function", f = NaN, s = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function () { return g.Date.now() }; e.exports = n }).call(t, function () { return this }()) }, function (e, t) { "use strict"; function n(e, t) { a.push({ selector: e, fn: t }), !u && r && (u = new r(o), u.observe(i.documentElement, { childList: !0, subtree: !0, removedNodes: !0 })), o() } function o() { for (var e, t, n = 0, o = a.length; n < o; n++) { e = a[n], t = i.querySelectorAll(e.selector); for (var r, u = 0, c = t.length; u < c; u++)r = t[u], r.ready || (r.ready = !0, e.fn.call(r, r)) } } Object.defineProperty(t, "__esModule", { value: !0 }); var i = window.document, r = window.MutationObserver || window.WebKitMutationObserver, a = [], u = void 0; t.default = n }, function (e, t) { "use strict"; function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function o() { return navigator.userAgent || navigator.vendor || window.opera || "" } Object.defineProperty(t, "__esModule", { value: !0 }); var i = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var o = t[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } } return function (t, n, o) { return n && e(t.prototype, n), o && e(t, o), t } }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, f = function () { function e() { n(this, e) } return i(e, [{ key: "phone", value: function () { var e = o(); return !(!r.test(e) && !a.test(e.substr(0, 4))) } }, { key: "mobile", value: function () { var e = o(); return !(!u.test(e) && !c.test(e.substr(0, 4))) } }, { key: "tablet", value: function () { return this.mobile() && !this.phone() } }]), e }(); t.default = new f }, function (e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var n = function (e, t, n) { var o = e.node.getAttribute("data-aos-once"); t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate") }, o = function (e, t) { var o = window.pageYOffset, i = window.innerHeight; e.forEach(function (e, r) { n(e, i + o, t) }) }; t.default = o }, function (e, t, n) { "use strict"; function o(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var i = n(12), r = o(i), a = function (e, t) { return e.forEach(function (e, n) { e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset) }), e }; t.default = a }, function (e, t, n) { "use strict"; function o(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var i = n(13), r = o(i), a = function (e, t) { var n = 0, o = 0, i = window.innerHeight, a = { offset: e.getAttribute("data-aos-offset"), anchor: e.getAttribute("data-aos-anchor"), anchorPlacement: e.getAttribute("data-aos-anchor-placement") }; switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) { case "top-bottom": break; case "center-bottom": n += e.offsetHeight / 2; break; case "bottom-bottom": n += e.offsetHeight; break; case "top-center": n += i / 2; break; case "bottom-center": n += i / 2 + e.offsetHeight; break; case "center-center": n += i / 2 + e.offsetHeight / 2; break; case "top-top": n += i; break; case "bottom-top": n += e.offsetHeight + i; break; case "center-top": n += e.offsetHeight / 2 + i }return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o }; t.default = a }, function (e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var n = function (e) { for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);)t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent; return { top: n, left: t } }; t.default = n }, function (e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var n = function (e) { e = e || document.querySelectorAll("[data-aos]"); var t = []; return [].forEach.call(e, function (e, n) { t.push({ node: e }) }), t }; t.default = n }]) });
//# sourceMappingURL=aos.js.map

//Easing

!function (e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t() }(this, function () { return function (e) { function t(o) { if (n[o]) return n[o].exports; var i = n[o] = { exports: {}, id: o, loaded: !1 }; return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports } var n = {}; return t.m = e, t.c = n, t.p = "dist/", t(0) }([function (e, t, n) { "use strict"; function o(e) { return e && e.__esModule ? e : { default: e } } var i = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]) } return e }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), f = o(c), s = n(8), d = o(s), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = !1, x = document.all && !window.atob, j = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded" }, O = function () { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; if (e && (k = !0), k) return w = (0, y.default)(w, j), (0, b.default)(w, j.once), w }, S = function () { w = (0, h.default)(), O() }, _ = function () { w.forEach(function (e, t) { e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay") }) }, E = function (e) { return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0 }, z = function (e) { return j = i(j, e), w = (0, h.default)(), E(j.disable) || x ? _() : (document.querySelector("body").setAttribute("data-aos-easing", j.easing), document.querySelector("body").setAttribute("data-aos-duration", j.duration), document.querySelector("body").setAttribute("data-aos-delay", j.delay), "DOMContentLoaded" === j.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? O(!0) : "load" === j.startEvent ? window.addEventListener(j.startEvent, function () { O(!0) }) : document.addEventListener(j.startEvent, function () { O(!0) }), window.addEventListener("resize", (0, f.default)(O, 50, !0)), window.addEventListener("orientationchange", (0, f.default)(O, 50, !0)), window.addEventListener("scroll", (0, u.default)(function () { (0, b.default)(w, j.once) }, 99)), document.addEventListener("DOMNodeRemoved", function (e) { var t = e.target; t && 1 === t.nodeType && t.hasAttribute && t.hasAttribute("data-aos") && (0, f.default)(S, 50, !0) }), (0, d.default)("[data-aos]", S), w) }; e.exports = { init: z, refresh: O, refreshHard: S } }, function (e, t) { }, , , , , function (e, t) { (function (t) { "use strict"; function n(e, t, n) { function o(t) { var n = b, o = v; return b = v = void 0, k = t, g = e.apply(o, n) } function r(e) { return k = e, h = setTimeout(s, t), S ? o(e) : g } function a(e) { var n = e - w, o = e - k, i = t - n; return _ ? j(i, y - o) : i } function c(e) { var n = e - w, o = e - k; return void 0 === w || n >= t || n < 0 || _ && o >= y } function s() { var e = O(); return c(e) ? d(e) : void (h = setTimeout(s, a(e))) } function d(e) { return h = void 0, E && b ? o(e) : (b = v = void 0, g) } function l() { void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0 } function p() { return void 0 === h ? g : d(O()) } function m() { var e = O(), n = c(e); if (b = arguments, v = this, w = e, n) { if (void 0 === h) return r(w); if (_) return h = setTimeout(s, t), o(w) } return void 0 === h && (h = setTimeout(s, t)), g } var b, v, y, g, h, w, k = 0, S = !1, _ = !1, E = !0; if ("function" != typeof e) throw new TypeError(f); return t = u(t) || 0, i(n) && (S = !!n.leading, _ = "maxWait" in n, y = _ ? x(u(n.maxWait) || 0, t) : y, E = "trailing" in n ? !!n.trailing : E), m.cancel = l, m.flush = p, m } function o(e, t, o) { var r = !0, a = !0; if ("function" != typeof e) throw new TypeError(f); return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, { leading: r, maxWait: t, trailing: a }) } function i(e) { var t = "undefined" == typeof e ? "undefined" : c(e); return !!e && ("object" == t || "function" == t) } function r(e) { return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e)) } function a(e) { return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d } function u(e) { if ("number" == typeof e) return e; if (a(e)) return s; if (i(e)) { var t = "function" == typeof e.valueOf ? e.valueOf() : e; e = i(t) ? t + "" : t } if ("string" != typeof e) return 0 === e ? e : +e; e = e.replace(l, ""); var n = m.test(e); return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e } var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, f = "Expected a function", s = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function () { return h.Date.now() }; e.exports = o }).call(t, function () { return this }()) }, function (e, t) { (function (t) { "use strict"; function n(e, t, n) { function i(t) { var n = b, o = v; return b = v = void 0, O = t, g = e.apply(o, n) } function r(e) { return O = e, h = setTimeout(s, t), S ? i(e) : g } function u(e) { var n = e - w, o = e - O, i = t - n; return _ ? x(i, y - o) : i } function f(e) { var n = e - w, o = e - O; return void 0 === w || n >= t || n < 0 || _ && o >= y } function s() { var e = j(); return f(e) ? d(e) : void (h = setTimeout(s, u(e))) } function d(e) { return h = void 0, E && b ? i(e) : (b = v = void 0, g) } function l() { void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0 } function p() { return void 0 === h ? g : d(j()) } function m() { var e = j(), n = f(e); if (b = arguments, v = this, w = e, n) { if (void 0 === h) return r(w); if (_) return h = setTimeout(s, t), i(w) } return void 0 === h && (h = setTimeout(s, t)), g } var b, v, y, g, h, w, O = 0, S = !1, _ = !1, E = !0; if ("function" != typeof e) throw new TypeError(c); return t = a(t) || 0, o(n) && (S = !!n.leading, _ = "maxWait" in n, y = _ ? k(a(n.maxWait) || 0, t) : y, E = "trailing" in n ? !!n.trailing : E), m.cancel = l, m.flush = p, m } function o(e) { var t = "undefined" == typeof e ? "undefined" : u(e); return !!e && ("object" == t || "function" == t) } function i(e) { return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e)) } function r(e) { return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == s } function a(e) { if ("number" == typeof e) return e; if (r(e)) return f; if (o(e)) { var t = "function" == typeof e.valueOf ? e.valueOf() : e; e = o(t) ? t + "" : t } if ("string" != typeof e) return 0 === e ? e : +e; e = e.replace(d, ""); var n = p.test(e); return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e } var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, c = "Expected a function", f = NaN, s = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function () { return g.Date.now() }; e.exports = n }).call(t, function () { return this }()) }, function (e, t) { "use strict"; function n(e, t) { a.push({ selector: e, fn: t }), !u && r && (u = new r(o), u.observe(i.documentElement, { childList: !0, subtree: !0, removedNodes: !0 })), o() } function o() { for (var e, t, n = 0, o = a.length; n < o; n++) { e = a[n], t = i.querySelectorAll(e.selector); for (var r, u = 0, c = t.length; u < c; u++)r = t[u], r.ready || (r.ready = !0, e.fn.call(r, r)) } } Object.defineProperty(t, "__esModule", { value: !0 }); var i = window.document, r = window.MutationObserver || window.WebKitMutationObserver, a = [], u = void 0; t.default = n }, function (e, t) { "use strict"; function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function o() { return navigator.userAgent || navigator.vendor || window.opera || "" } Object.defineProperty(t, "__esModule", { value: !0 }); var i = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var o = t[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } } return function (t, n, o) { return n && e(t.prototype, n), o && e(t, o), t } }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, f = function () { function e() { n(this, e) } return i(e, [{ key: "phone", value: function () { var e = o(); return !(!r.test(e) && !a.test(e.substr(0, 4))) } }, { key: "mobile", value: function () { var e = o(); return !(!u.test(e) && !c.test(e.substr(0, 4))) } }, { key: "tablet", value: function () { return this.mobile() && !this.phone() } }]), e }(); t.default = new f }, function (e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var n = function (e, t, n) { var o = e.node.getAttribute("data-aos-once"); t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate") }, o = function (e, t) { var o = window.pageYOffset, i = window.innerHeight; e.forEach(function (e, r) { n(e, i + o, t) }) }; t.default = o }, function (e, t, n) { "use strict"; function o(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var i = n(12), r = o(i), a = function (e, t) { return e.forEach(function (e, n) { e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset) }), e }; t.default = a }, function (e, t, n) { "use strict"; function o(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var i = n(13), r = o(i), a = function (e, t) { var n = 0, o = 0, i = window.innerHeight, a = { offset: e.getAttribute("data-aos-offset"), anchor: e.getAttribute("data-aos-anchor"), anchorPlacement: e.getAttribute("data-aos-anchor-placement") }; switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) { case "top-bottom": break; case "center-bottom": n += e.offsetHeight / 2; break; case "bottom-bottom": n += e.offsetHeight; break; case "top-center": n += i / 2; break; case "bottom-center": n += i / 2 + e.offsetHeight; break; case "center-center": n += i / 2 + e.offsetHeight / 2; break; case "top-top": n += i; break; case "bottom-top": n += e.offsetHeight + i; break; case "center-top": n += e.offsetHeight / 2 + i }return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o }; t.default = a }, function (e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var n = function (e) { for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);)t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent; return { top: n, left: t } }; t.default = n }, function (e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var n = function (e) { e = e || document.querySelectorAll("[data-aos]"); var t = []; return [].forEach.call(e, function (e, n) { t.push({ node: e }) }), t }; t.default = n }]) });
//# sourceMappingURL=aos.js.map
