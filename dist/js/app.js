"use strict"


document.addEventListener('DOMContentLoaded', function () {


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

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
    $('.ui.dropdown.all_dropdown').dropdown({
            transition: "auto",
            duration: 0,
        }
    );
    $('.city_button .custom.button')
        .popup({
            popup: $('.custom.popup'),
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

    const func_search = (event) => {
        if (event.target.value.length >= 4) {
            document.querySelectorAll(".popup_search .search_header_b input")[0].value = event.target.value;
            $('.popup_click_search')
                .popup({
                        on: 'click',
                        popup: $('.custom.popup.popup_search'),
                        position: "bottom center",
                        hoverable: false,
                        onShow: function ($popup) {

                            $popup.parentElement.classList.add('active');
                        },
                        onHide: function ($popup) {
                            $popup.parentElement.classList.remove('active');
                            $('.popup_click_search')
                                .popup({
                                    on: 'focus',
                                })
                        }
                    }
                )
            $('.search_header_b').click();
        }
    }

    const search_header = document.querySelectorAll(".search_header_b input")[0];
    const search_header_popup = document.querySelectorAll(".popup_search input")[0];
    search_header_popup.onkeyup = (e) => {
        document.querySelectorAll(".search_header_b input")[0].value = e.target.value;
    }
    search_header.onclick = (e) => {
        func_search(e)
    }
    search_header.onkeyup = (e) => {
        func_search(e)
    }


    $('.ui.search.dropdown')
        .dropdown({
            allowAdditions: true
        })
    ;
    document.querySelectorAll(".button_header")[0].onclick = () => {
        $('.ui.modal.modal_measurer')
            .modal({
                centered: false
            })
            .modal('setting', 'transition', 'slide left')
            .modal('show')
    }

    document.querySelectorAll(".link_call")[0].onclick = () => {
        $('.ui.modal.modal_call')
            .modal({
                centered: false
            })
            .modal('setting', 'transition', 'slide left')
            .modal('show')
    }
    document.querySelectorAll(".login_icon")[0].onclick = () => {
        $('.ui.modal.modal_entrance')
            .modal({
                centered: false,
                useFlex: "auto",
            })
            .modal('setting', 'transition', 'slide left')
            .modal('show')
    }

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
    $('.ui.modal.modal_entrance')
        .modal('setting', 'transition', 'slide left')
        .modal('attach events', '.ui.modal.modal_password_reset #password_reset ')
    ;
    $('.ui.modal.modal_email')
        .modal('setting', 'transition', 'slide left')
        .modal('attach events', '.ui.modal.modal_entrance .entrance_button')
    ;

    $('.ui.modal.modal_registration')
        .modal('setting', 'transition', 'slide left')
        .modal('attach events', '.ui.modal.modal_phone #registration_phone')
    ;

    document.querySelectorAll(".basket_icon")[0].onclick = () => {
        $('.ui.modal.modal_basket')
            .modal({
                centered: false,
                useFlex: "auto",
            })
            .modal('setting', 'transition', 'slide left')
            .modal('show')
        ;
    }


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

    $('.checkbox').checkbox();

    document.querySelectorAll(".menu_list_grid li").forEach(element => {
        element.onmouseover = () => {
            element.classList.add("active");
        }
        element.onmouseout = () => {
            element.classList.remove("active");
        }
    })

    function offset(el) {
        var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    let one = 0;
    document.querySelectorAll(".menu_list_grid li .hover_list").forEach((element, i) => {
        if (i === 0) {
            one = offset(element).left;
        } else {
            element.style.left = -offset(element).left + one + "px";
        }


    })


    $('.home_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });


})
