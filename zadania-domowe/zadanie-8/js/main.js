 'use strict';
    $(function () {
        $("#button").on({
            "click": function pobierzDane() {
                $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {
                    var container = $('<div/>', {
                        id: 'dane-programisty',
                                          });
                    $(container).html("Imię: " + data.imie + "<br>" + "Nazwisko: " + data.nazwisko + "<br>" + "Zawód: " + data.zawod + "<br>" + "Firma: " + data.firma);
                    $("body").append(container);
                })
            }
        })
        $("#button").onclick(function () {
            "console.log(’test’)"
        });
    });