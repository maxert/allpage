"use strict"


document.addEventListener('DOMContentLoaded', function () {
    /*Offset block*/
    function offset(el) {
        var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return {top: rect.top + scrollTop, left: rect.left + scrollLeft, topOffset: el.getBoundingClientRect().top}
    }
    /*Offset block*/

    $(window).scroll(function () {
        if ($(window).scrollTop() > document.querySelectorAll("header")[0].clientHeight + document.querySelectorAll(".header_bottom")[0].clientHeight) {
            $('.header_fixed').addClass("active")
        } else {
            $('.header_fixed').removeClass("active")
        }
    });
    /* Svg image*/
    $('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
    /* Svg image*/
    $('.ui.dropdown.all_dropdown').dropdown({
            transition: "auto",
            duration: 0,
        }
    );
    $('.city_button .custom.button')
        .popup({
            popup: $('.custom.popup.city_popup'),
            on: 'click'
        })
    ;


    $('.phone_popup_header')
        .popup({
            popup: $('.custom.popup.phone_popup'),
            on: 'click',
            position: "top center",
            onShow: function ($popup) {
                $popup.classList.add('active');
            },
            onHide: function ($popup) {
                $popup.classList.remove('active');
            }
        })
    ;
    $('.buyer_popup_header')
        .popup({
            popup: $('.custom.popup.buyer_popup'),
            on: 'click',
            position: "top left",
            onShow: function ($popup) {
                $popup.classList.add('active');
            },
            onHide: function ($popup) {
                $popup.classList.remove('active');
            }
        })
    ;


    function mouseup(elementID) {
        $(document).mouseup(function (e) { // событие клика по веб-документу
            var div = elementID; // тут указываем ID элемента
            if (!div.contains(e.target)) {
                document.body.classList.remove("dimmed", "dimmable");
                div.parentElement.classList.remove("active");
                div.classList.remove("active");
                document.querySelectorAll(".search_header_b input")[0].value = "";
                document.querySelectorAll(".search_header_b input")[1].value = "";
            }
        });
    }

    const func_search = (event) => {
        if (event.target.value.length >= 4) {
            let popup = document.querySelectorAll(".popup_search")[0];
            document.querySelectorAll(".popup_search .search_header_b input")[0].value = event.target.value;
            popup.classList.add("active");
            mouseup(popup);
            document.body.classList.add("dimmed", "dimmable");
            popup.parentElement.classList.add("active");
            popup.style.left = offset(event.target).left + "px";
            popup.style.top = offset(event.target).topOffset + "px";
        }
    }

    const search_header = [document.querySelectorAll(".header_bottom .search_header_b input"), document.querySelectorAll(".header_fixed .search_header_b input")];
    const search_header_popup = document.querySelectorAll(".popup_search input");

    search_header_popup.forEach(element => {

        element.onkeyup = (e) => {
            document.querySelectorAll(".search_header_b input")[0].value = e.target.value;
            document.querySelectorAll(".search_header_b input")[1].value = e.target.value;
        }
    })
    search_header.forEach(documentEl => {
        documentEl.forEach(element => {
            element.onclick = (e) => {
                func_search(e)
            }
        })
        documentEl.forEach(element => {
            element.onkeyup = (e) => {
                func_search(e)
            }
        })
    })


    $('.ui.accordion.accordion_info_home')
        .accordion()
    ;
    $('.ui.dropdown.representative_select')
        .dropdown({
            allowAdditions: true
        })
    ;

    $('.ui.search.dropdown')
        .dropdown({
            allowAdditions: true
        })
    ;
    document.querySelectorAll(".button_header").forEach(element => {
        element.onclick = () => {
            $('.ui.modal.modal_measurer')
                .modal({
                    centered: false
                })
                .modal('setting', 'transition', 'slide left')
                .modal('show')
        }
    })
    document.querySelectorAll(".link_call").forEach(element => {
        element.onclick = () => {
            $('.ui.modal.modal_call')
                .modal({
                    centered: false
                })
                .modal('setting', 'transition', 'slide left')
                .modal('show')
        }
    })

    document.querySelectorAll(".login_icon").forEach(element => {
        element.onclick = () => {
            $('.ui.modal.modal_entrance')
                .modal({
                    centered: false,
                    useFlex: "auto",
                })
                .modal('setting', 'transition', 'slide left')
                .modal('show')
        }
    })
    document.querySelectorAll(".basket_icon").forEach(element => {
        element.onclick = () => {
            $('.ui.modal.modal_basket')
                .modal({
                    centered: false,
                    useFlex: "auto",
                })
                .modal('setting', 'transition', 'slide left')
                .modal('show')
            ;
        }
    })


    $('.ui.modal.modal_registration')
        .modal('setting', 'transition', 'slide left')
        .modal('attach events', '.ui.modal.modal_entrance #registration')
    ;
    $('.ui.modal.modal_entrance')
        .modal('setting', 'transition', 'slide left')
        .modal('attach events', '.ui.modal.modal_registration #entrance')
    ;
    $('.ui.modal.modal_entrance')
        .modal('setting', 'transition', 'slide left')
        .modal('attach events', '.ui.modal.modal_email .prev_modal ')
    ;
    $('.ui.modal.modal_entrance')
        .modal('setting', 'transition', 'slide left')
        .modal('attach events', '.ui.modal.modal_phone .phone_click ')
    ;
    $('.ui.modal.modal_password_reset')
        .modal('setting', 'transition', 'slide left')
        .modal('attach events', '.ui.modal.modal_email .password_reset ')
    ;

    let formEmailPhone = document.querySelectorAll(".form_entrance input")[0];

    formEmailPhone.onkeyup=(e)=>{
        let regularPhone = formEmailPhone.value.match(/^\+?3?8?(0\d{9})$/g);
        let regularEmail = formEmailPhone.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(regularPhone){
            formEmailPhone.parentElement.classList.add("geeks")
            formEmailPhone.parentElement.parentElement.classList.remove("error")
        }else if(regularEmail){
            formEmailPhone.parentElement.classList.add("geeks")
            formEmailPhone.parentElement.parentElement.classList.remove("error")
        }else{
            formEmailPhone.parentElement.classList.remove("geeks")
        }

    }

    document.querySelectorAll(".modal_entrance .entrance_button")[0].onclick=(e)=>{
        let regularPhone = formEmailPhone.value.match(/^\+?3?8?(0\d{9})$/g);
        let regularEmail = formEmailPhone.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(regularPhone){
            $('.ui.modal.modal_entrance')
                .modal('setting', 'transition', 'slide left')
            ;
            $('.ui.modal.modal_phone')
                .modal('setting', 'transition', 'slide left')
                .modal("show")
            ;
        }else if(regularPhone===null){
            formEmailPhone.parentElement.parentElement.classList.add("error")
        }
        if(regularEmail){
            $('.ui.modal.modal_entrance')
                .modal('setting', 'transition', 'slide left')
            ;
            $('.ui.modal.modal_email')
                .modal('setting', 'transition', 'slide left')
                .modal("show")
            ;
        }else if(regularEmail===null){
            formEmailPhone.parentElement.parentElement.classList.add("error")
        }
    }

    // $('.ui.modal.modal_email')
    //     .modal('setting', 'transition', 'slide left')
    //     .modal('attach events', '.ui.modal.modal_entrance .entrance_button')
    // ;

    $('.ui.modal.modal_registration')
        .modal('setting', 'transition', 'slide left')
        .modal('attach events', '.ui.modal.modal_phone #registration_phone')
    ;

    /*Password eye*/
    document.querySelectorAll(".password_container .vision").forEach(element => {
        element.onclick = () => {
            if (!element.classList.contains("active")) {
                element.classList.add("active");
                element.parentElement.querySelectorAll("input")[0].setAttribute("type", "text")
            } else {
                element.classList.remove("active");
                element.parentElement.querySelectorAll("input")[0].setAttribute("type", "password")
            }
        }
    })
    /*Password eye*/

    $('.checkbox').checkbox();

    document.querySelectorAll(".menu_list_grid li").forEach(element => {
        element.onmouseover = () => {
            element.classList.add("active");
        }
        element.onmouseout = () => {
            element.classList.remove("active");
        }
    })


    let one = 0;
    document.querySelectorAll(".menu_list_grid li .hover_list").forEach((element, i) => {
        if (i === 0) {
            one = offset(element).left;
        } else {
            element.style.left = -offset(element).left + one + "px";
        }


    })

    $('.home_slider').on('init reInit afterChange', function (event, slick, currentSlide) {
        let i = (currentSlide ? currentSlide : 0) + 1;
        document.querySelectorAll(".home_left_items").forEach(element => {
            element.classList.remove("active");
        })
        document.querySelectorAll(".home_left_items")[i - 1].classList.add("active");
        document.querySelectorAll(".slider_text_number_b")[0].textContent = i;
        document.querySelectorAll(".slider_text_number_s")[0].textContent = slick.slideCount;
    });

    $('.idea_slider').on('init reInit afterChange', function (event, slick, currentSlide) {
        let i = (currentSlide ? currentSlide : 0) + 1;
        document.querySelectorAll(".slider_text_number_b")[2].textContent = i;
        document.querySelectorAll(".slider_text_number_s")[2].textContent = slick.slideCount;
    });


    $('.home_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: ".button_prev",
        nextArrow: ".button_next"
    });

    $('.idea_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: ".slider_idea_container .button_prev",
        nextArrow: ".slider_idea_container .button_next"
    });

    $('.product_slider_1').on('init reInit afterChange', function (event, slick, currentSlide) {
        let i = (currentSlide ? currentSlide : 0) + 1;
        document.querySelectorAll(".slider_text_number_b")[1].textContent = i;
        document.querySelectorAll(".slider_text_number_s")[1].textContent = slick.slideCount;
    });

    $('.product_items').on('init afterChange', function (event, slick, currentSlide) {
        let i = (currentSlide ? currentSlide : 0) + 1;
        slick.$slider[0].parentElement.querySelectorAll(".content_list_product .product_items_container").forEach(element => {
            element.classList.remove("active");
        })
        slick.$slider[0].parentElement.querySelectorAll(".content_list_product .product_items_container")[i - 1].classList.add("active");
    });


    document.querySelectorAll(".product_items").forEach(element => {
        $(element).on('swipe', function (event, slick, direction) {
            if (direction === "left") {
                $('.product_slider_1').slick('slickNext');
                $('.product_slider_2').slick('slickNext');
                $('.product_slider_3').slick('slickNext');
            } else if (direction === "right") {
                $('.product_slider_1').slick('slickPrev');
                $('.product_slider_2').slick('slickPrev');
                $('.product_slider_3').slick('slickPrev');
            }
            // left
        });
    })


    document.querySelectorAll(".product_slider_container .button_prev")[0].onclick = () => {
        $('.product_slider_1').slick('slickPrev');
        $('.product_slider_2').slick('slickPrev');
        $('.product_slider_3').slick('slickPrev');
    }

    document.querySelectorAll(".product_slider_container .button_next")[0].onclick = () => {

        $('.product_slider_1').slick('slickNext');
        $('.product_slider_2').slick('slickNext');
        $('.product_slider_3').slick('slickNext');
    }


    $('.product_slider_1').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    });

    $('.product_slider_2').slick({
        infinite: true,
        initialSlide: 1,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    });
    $('.product_slider_3').slick({
        infinite: true,
        initialSlide: 2,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    });
    $('.product_slider_2').slick('slickGoTo', 1, true);
    $('.product_slider_3').slick('slickGoTo', 2, true);


    document.querySelectorAll(".button_services")[0].onclick = () => {
        document.querySelectorAll(".services_popup")[0].classList.add('active');
    }
    document.querySelectorAll(".close_popup")[0].onclick = () => {
        document.querySelectorAll(".services_popup")[0].classList.remove('active');
    }

    /*Mega menu*/
    document.querySelectorAll(".menu_catalog_grid ul").forEach(element => {
        element.parentElement.classList.add("arrow");
    })
    document.querySelectorAll(".menu_catalog_grid li").forEach(element => {
        element.onmouseover = () => {

            if (element.parentElement.classList.contains("active") || !element.classList.contains("active")) {
                element.offsetParent.querySelectorAll("li").forEach(elementRemove => {
                    elementRemove.classList.remove("active");
                    elementRemove.lastElementChild.classList.remove("active");
                })
            }

            element.classList.add("active")
            if (element.lastElementChild.tagName === "UL") {
                element.lastElementChild.classList.add("active");
            }
        }
    })
    /*Mega menu*/



    document.querySelectorAll(".catalog_header")[0].onclick=()=>{
        if(!document.querySelectorAll(".catalog_header")[0].classList.contains("active")){
            document.querySelectorAll(".catalog_header")[0].classList.add("active")
            document.querySelectorAll(".header_menu_catalog")[0].classList.add("active")

        }else{
            document.querySelectorAll(".catalog_header")[0].classList.remove("active")
            document.querySelectorAll(".header_menu_catalog")[0].classList.remove("active")
        }
    }
})
