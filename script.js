window.onload = () => {


    $('img.img-svg').each(function () {
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function (data) {
            var $svg = $(data).find('svg');
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });
    if (document.querySelectorAll(".result_city")[0]) {
        document.querySelectorAll(".result_city")[0].onclick = () => {
            document.querySelectorAll(".list_link")[0].classList.add("active");
        }


        $(document).mouseup(function (e) {
            var div = $(".list_link_hov, .language_link_hov");
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                document.querySelectorAll(".list_link")[0].classList.remove("active");
                document.querySelectorAll(".language_link")[0].classList.remove("active")
            }
        });
        document.querySelectorAll(".language_link_text")[0].onclick = () => {
            document.querySelectorAll(".language_link")[0].classList.add("active");
        }
        document.querySelectorAll(".language_link_hov a").forEach(element => {
            element.onclick = () => {
                document.querySelectorAll(".language_link_hov a").forEach(elementDel => {
                    elementDel.classList.remove("active");
                })
                element.classList.add("active");
                document.querySelectorAll(".language_link_text")[0].textContent = element.textContent;
                document.querySelectorAll(".language_link")[0].classList.remove("active");
            }
        })
    }


    if (window.innerWidth <= 767) {
        if (document.querySelectorAll(".footer_bottom")[0]) {
            document.querySelectorAll(".footer_bottom")[0].appendChild(document.querySelectorAll("footer .menu_list")[0]);
        }
        document.querySelectorAll("#party .ui.secondary.menu .item").forEach(element => {
            if (element.classList.contains("active")) {
                $('.party_select_mob .news_dropdown')
                    .dropdown('set selected', element.dataset.tab)
                ;
                debugger
            }
        })


    }
    if (window.innerWidth <= 1230) {
        if (document.querySelectorAll(".container_lead_l")[0]) {
            document.querySelectorAll(".container_lead_l")[0].appendChild(document.querySelectorAll(".container_lead_r")[0]);
            document.querySelectorAll(".container_interview_grid")[0].classList.add("swiper-wrapper");
            document.querySelectorAll(".slider_mob")[0].classList.add("swiper-container");

            document.querySelectorAll(".container_interview_items").forEach(element => {
                element.classList.add("swiper-slide");
            })
        }

        if (window.innerWidth <= 1260) {
            $('.container_interview_grid').slick({
                slidesToShow: 2,
                dots: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            arrows: false,
                            slidesToShow: 1
                        }
                    },
                ]
            });
        }

    }
    if (document.querySelectorAll(".btn_mobile_open")[0]) {
        document.querySelectorAll(".btn_mobile_open")[0].onclick = () => {
            document.querySelectorAll(".btn_mobile")[0].classList.add("active");
            document.querySelectorAll(".header_bottom_mob")[0].classList.add("active");
        }
        document.querySelectorAll(".btn_mobile_close")[0].onclick = () => {
            document.querySelectorAll(".btn_mobile")[0].classList.remove("active");
            document.querySelectorAll(".header_bottom_mob")[0].classList.remove("active");
        }
    }

    $('.slider_container .swiper-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.slider_news .slider_wrapper').slick({
        slidesToShow: 1,
        prevArrow: ".button_left",
        nextArrow: ".button_right",
        dots: false
    });
    if (document.querySelectorAll(".number_end")[0]) {
        document.querySelectorAll(".number_end")[0].textContent = $(".slider_news .slider_wrapper").slick("getSlick").slideCount;
    }
    $('.slider_news .slider_wrapper').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        document.querySelectorAll(".number_start")[0].textContent = ((currentSlide ? currentSlide : 0) + 1);
    });

    $('#party .menu .item').tab({
        context: 'parent'
    });

    $('#context .menu .item')
        .tab({
            // special keyword works same as above
            context: 'parent'
        })
    ;

    $('.party_select_mob select.dropdown')
        .dropdown({
            onChange: function (value, text, $selectedItem) {
                $.tab('change tab', value);
            }
        })
    ;

    $('select.dropdown')
        .dropdown()
    ;
    $('.accordion_food')
        .accordion()
    ;
    $('.ui.checkbox').checkbox();
    $(".tab[data-tab='fourth'] div.button_all")
        .on('click', function () {
            // programmatically activating tab
            $.tab('change tab', 'fifth');
            document.querySelectorAll(".tabs_join .ui.secondary.menu .item").forEach((element, i) => {
                if (i == 0) {
                    document.querySelectorAll(".block_join_tabs")[0].classList.remove("active");
                    element.classList.remove("active");
                    element.classList.add("success");
                } else {
                    document.querySelectorAll(".block_join_tabs")[0].classList.add("active");
                    element.classList.add("active");
                    element.classList.remove("disabled");
                }
            })
        })
    ;

}