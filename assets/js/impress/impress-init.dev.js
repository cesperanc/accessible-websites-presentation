/**
 * Manage the impress state between sessions using cookies
 * Initializes the impress
 */
/* global ImpressL10n, prettyPrint*/

(function (document, window, ImpressL10n) {
    'use strict';
    var impress = window.impress, el;
    if (impress.supported) {
        el = document.createElement("div");
        el.classList.add("hint");
        el.innerHTML = "<p>"+ImpressL10n.navigationTip+"</p>";
        document.body.appendChild(el);
        if ("ontouchstart" in document.documentElement) {
            document.querySelector(".hint").innerHTML = "<p>"+ImpressL10n.touchNavigationTip+"</p>";
        }
    }
    el = document.createElement("a");
    el.setAttribute("id", "change-effects");
    el.setAttribute("aria-live", "assertive");
    el.setAttribute("href", "#");
    el.setAttribute("title", ImpressL10n.manageVisualEffectsHint);
    el.innerHTML = ImpressL10n.manageVisualEffects;
    document.body.appendChild(el);

    var ImpressCookie = {
        /* cookies methods */
        setCookie: function (name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            }
            document.cookie = 'Impress_' + name + '=' + value + expires + '; path=/';
        },
        getCookie: function (name) {
            var nameEQ = 'Impress_' + name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1, c.length);
                }
                if (c.indexOf(nameEQ) === 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }
            return null;
        },
        deleteCookie: function (name) {
            ImpressCookie.setCookie(name, '', -1);
        },
        effectsEnabled: function () {
            return (ImpressCookie.getCookie('effects-enabled') !== "false");
        },
        enableEffects: function () {
            ImpressCookie.deleteCookie('effects-enabled');
        },
        disableEffects: function () {
            ImpressCookie.setCookie('effects-enabled', "false");
        },
        enablePrint: function () {
            ImpressCookie.setCookie('enable-print', "true");
        },
        printEnabled: function () {
            return (ImpressCookie.getCookie('enable-print') === "true");
        },
        disablePrint: function () {
            ImpressCookie.deleteCookie('enable-print');
        },
        init: function () {
            document.getElementById("change-effects").addEventListener("click", function () {
                if (ImpressCookie.effectsEnabled()) {
                    ImpressCookie.disableEffects();
                } else {
                    ImpressCookie.enableEffects();
                }
                window.location.reload();
            }, false);

            if (ImpressCookie.effectsEnabled()) {
                document.getElementById("change-effects").innerHTML = ImpressL10n.disableVisualEffects;
                document.body.classList.add("impress-effects-enabled");
            } else {
                document.getElementById("change-effects").innerHTML = ImpressL10n.enableVisualEffects;
                document.body.classList.add("impress-effects-disabled");
            }
            if (ImpressCookie.printEnabled()) {
                ImpressCookie.disablePrint();
                window.print();
            }
        }
    };

    ImpressCookie.init();
    
    if (typeof(impress)==='function' && ImpressCookie.effectsEnabled()) {
        impress().init();

        var beforePrint = function () {
            if (ImpressCookie.effectsEnabled()) {
                ImpressCookie.disableEffects();
                ImpressCookie.enablePrint();
                window.location.reload();
            }
        };

        var afterPrint = function () {/*
         if (ImpressCookie.printEnabled()) {
         ImpressCookie.enableEffects();
         window.location.reload();
         }*/
        };

        if (window.matchMedia) {
            var mediaQueryList = window.matchMedia('print');
            mediaQueryList.addListener(function (mql) {
                if (mql.matches) {
                    beforePrint();
                } else {
                    afterPrint();
                }
            });
        }

        window.onbeforeprint = beforePrint;
        window.onafterprint = afterPrint;
    }
    
    if(typeof(prettyPrint) === "function"){
        prettyPrint();
    }
})(document, window, ImpressL10n);
