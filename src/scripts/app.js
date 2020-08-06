"use strict"


document.addEventListener('DOMContentLoaded', function () {
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

})
