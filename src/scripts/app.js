// Modules
// import navbar from 'Modules/navbar/navbar';
// import searchOverlay from 'Modules/search-overlay/search-overlay';


document.addEventListener('DOMContentLoaded', function () {
    $('.hotel_page_accordion')
        .accordion({
            onOpening:function () {
                $('.hotel_page_slider .hotel_l_items_slider').slick("refresh");
            },
        })
    ;
    document.querySelectorAll(".gallery_slider_text span").forEach(element => {
        element.textContent = element.parentElement.parentElement.querySelectorAll(".gallery_slider_items").length;
    })
    document.querySelectorAll(".gallery_slider_items").forEach((element, i) => {
        element.onclick = () => {
            $(".hotel_l_items_slider").slick('slickGoTo', i, true);
        }
    })
    document.querySelectorAll(".hotel_slider_all .number_result").forEach(element => {
        element.textContent = `1/${element.parentElement.parentElement.querySelectorAll(".hotel_l_items_slider_img").length}`;
    })

    document.querySelectorAll(".slider_dots_img").forEach((element, i) => {
        element.onmouseover = () => {
            element.classList.add("active");
            $(".hotel_page_slider .hotel_l_items_slider").slick('slickGoTo', i, true);
        }
        element.onmouseout = () => {
            element.classList.remove("active");
        }
    })

    document.querySelectorAll(".status_rating_number").forEach(element => {
        let rating = parseFloat(element.textContent.replace(',', '.')) * 10;
        element.parentElement.querySelectorAll(".progress_rating>div")[0].style.width = rating + "%";
    })
    if (window.innerWidth <= 1260) {
        if (document.querySelectorAll(".hotel_page_col_bottom")[0]) {
            document.querySelectorAll(".hotel_page_col_bottom")[0].appendChild(document.querySelectorAll(".hotel_page_button")[0]);

            $('.hotel_page_services ul').readmore({ //вызов плагина
                speed: 250, //скорость раскрытия скрытого текста (в миллисекундах)
                maxHeight: 75, //высота раскрытой области текста (в пикселях)
                heightMargin: 12, //избегание ломания блоков, которые больше maxHeight (в пикселях)
                moreLink: '<a href="#" class="read_more">Показать все</a>',
                lessLink: '<a href="#" class="read_more">Скрыть</a>'
            });
            $('.hotel_page_accordion')
                .accordion({
                    onOpening:function () {
                        $('.hotel_page_slider .hotel_l_items_slider').slick("refresh");
                    },
                    onOpen:function () {
                        $('.hotel_page_services ul').readmore({ //вызов плагина
                            speed: 250, //скорость раскрытия скрытого текста (в миллисекундах)
                            maxHeight: 75, //высота раскрытой области текста (в пикселях)
                            heightMargin: 12, //избегание ломания блоков, которые больше maxHeight (в пикселях)
                            moreLink: '<a href="#" class="read_more">Показать все</a>',
                            lessLink: '<a href="#" class="read_more">Скрыть</a>'
                        });
                    }
                })
            ;

        }
    }
    $('.hotel_l_items_slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        slick.$slider[0].parentElement.querySelectorAll(".number_result")[0].textContent = `${nextSlide + 1}/${slick.slideCount}`;
    });
    $(".gallery_slider").slick({
        rows: 2,
        slidesPerRow: 2,
        arrows: true,
    })
    $(".hotel_page_slider .hotel_l_items_slider").slick({
        arrows: true
    })
    $(".hotel_l_items_slider").slick({
        arrows: false,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    arrows: true
                }
            }
        ]
    })


})
