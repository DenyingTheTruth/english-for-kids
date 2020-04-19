! function (r) {
    var e = {};

    function t(c) {
        if (e[c]) return e[c].exports;
        var a = e[c] = {
            i: c,
            l: !1,
            exports: {}
        };
        return r[c].call(a.exports, a, a.exports, t), a.l = !0, a.exports
    }
    t.m = r, t.c = e, t.d = function (r, e, c) {
        t.o(r, e) || Object.defineProperty(r, e, {
            enumerable: !0,
            get: c
        })
    }, t.r = function (r) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(r, "__esModule", {
            value: !0
        })
    }, t.t = function (r, e) {
        if (1 & e && (r = t(r)), 8 & e) return r;
        if (4 & e && "object" == typeof r && r && r.__esModule) return r;
        var c = Object.create(null);
        if (t.r(c), Object.defineProperty(c, "default", {
                enumerable: !0,
                value: r
            }), 2 & e && "string" != typeof r)
            for (var a in r) t.d(c, a, function (e) {
                return r[e]
            }.bind(null, a));
        return c
    }, t.n = function (r) {
        var e = r && r.__esModule ? function () {
            return r.default
        } : function () {
            return r
        };
        return t.d(e, "a", e), e
    }, t.o = function (r, e) {
        return Object.prototype.hasOwnProperty.call(r, e)
    }, t.p = "", t(t.s = 0)
}([function (r, e, t) {
    t(2), r.exports = t(1)
}, function (r, e, t) {}, function (r, e, t) {
    "use strict";
    t.r(e);
    var c = function r(e, t, c, a, s) {
        var n = this;
        if (function (r, e) {
                if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, r), this.createCard = function () {
                var r = document.createElement("div");
                r.classList.add("flip-card");
                var e = '<span class="material-icons">flip_camera_android</span>',
                    t = document.createElement("div");
                t.classList.add("flip-card-front");
                var c = document.createElement("img");
                c.src = n.imgSrc;
                var a = document.createElement("p");
                a.textContent = n.text;
                var s = document.createElement("audio");
                s.src = n.audioSrc.replace("male", "female");
                var o = document.createElement("button");
                o.classList.add("flip-card-btn"), o.innerHTML = e;
                var i = document.createElement("div");
                i.classList.add("flip-card-back");
                var l = document.createElement("p");
                l.textContent = n.textTranslate;
                var d = document.createElement("button");
                return d.classList.add("flip-card-btn"), d.innerHTML = e, t.append(c, a, s, o), i.append(l, d), r.append(t, i), r
            }, this.createMainPageCard = function () {
                var r = document.createElement("div");
                r.classList.add("main-page-card");
                var e = document.createElement("div");
                e.classList.add("main-page-card-front");
                var t = document.createElement("img");
                t.classList.add("main-page-card-img"), t.src = n.imgSrc;
                var c = document.createElement("p");
                c.classList.add("main-page-card-text");
                var a = document.createElement("span");
                a.textContent = "Category";
                var s = document.createElement("span");
                return s.textContent = n.text, c.append(a, s), e.append(t, c), r.append(e), r
            }, this.text = e, this.imgSrc = t, this.audioSrc = c, this.textTranslate = a, this.cardWrapper = document.createElement("div"), this.cardWrapper.classList.add("flip-card-3D-wrapper"), c && a) {
            var o = this.createCard();
            this.cardWrapper.append(o)
        } else {
            var i = this.createMainPageCard();
            this.cardWrapper.append(i), this.cardWrapper.dataset.category = s
        }
    };

    function a(r, e) {
        if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var s, n = function r(e) {
        var t = this,
            s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        a(this, r), this.createCategoryCards = function () {
            t.cardsData.forEach((function (r) {
                var e = t.createCategoryCard(r);
                t.categoryWrapper.append(e.cardWrapper)
            }))
        }, this.createCategoryCard = function (r) {
            var e = r.text,
                t = r.imgSrc,
                a = r.audioSrc,
                s = r.textTranslate;
            return new c(e, t, a, s)
        }, this.createMainPageCards = function () {
            t.cardsData.forEach((function (r, e) {
                var c = t.createMainPageCard(r, e);
                t.categoryWrapper.append(c.cardWrapper)
            }))
        }, this.createMainPageCard = function (r, e) {
            var t = r.text,
                a = r.imgSrc;
            return new c(t, a, null, null, e)
        }, this.cardsData = 9 === e.length ? e.slice(1) : e, this.isMainPage = s, this.categoryWrapper = document.createElement("div"), this.categoryWrapper.classList.add("category-wrapper"), this.isMainPage ? (this.createMainPageCards(), this.categoryWrapper.classList.add("category-main-page")) : this.createCategoryCards()
    };

    function o(r, e, t) {
        return e in r ? Object.defineProperty(r, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : r[e] = t, r
    }
    var i = (o(s = {}, "Professions", [
            ["accountant", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["baker", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["author", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["electrician", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["fisherman", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["doctor", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["hairdresser", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["judge", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }]
        ]), o(s, "Food", [
            ["pineapple", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["banana", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["pancake", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["jam", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["ham", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["grapes", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["mushroom", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["pear", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }]
        ]), o(s, "Clothes", [
            ["collar", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["hat", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["blouse", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["jeans", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["suit", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["footwear", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["glove", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["strap", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }]
        ]), o(s, "Appearance", [
            ["makeup", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["bald", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["beard", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["ear", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["mouth", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["moustache", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["tongue", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["waist", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }]
        ]), o(s, "Transport", [
            ["traffic lights", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["highway", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["bulldozer", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["truck", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["jeep", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["boat", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["raft", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["airplane", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }]
        ]), o(s, "Computer", [
            ["browser", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["CPU", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["flash drive", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["keyboard", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["laptop", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["motherboard", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["network", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["hard drive", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }]
        ]), o(s, "Furniture", [
            ["bath", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["rug", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["bookcase", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["mirror", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["curtain", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["sofa", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["door", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["armchair", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }]
        ]), o(s, "Animals", [
            ["shark", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["monkey", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["pigeon", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["viper", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["crow", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["sparrow", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["rabbit", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }],
            ["frog", {
                translate: "",
                clicksTrains: 0,
                clicksCorrect: 0,
                clicksErrors: 0,
                percentErrors: 0
            }]
        ]), s),
        l = function (r) {
            var e, t, c, a, s = (e = 0, t = r.length - 1, c = t - e + 1, a = Math.random() * c, Math.floor(a) + e),
                n = r[s];
            return r.splice(s, 1), n
        },
        d = {
            isFistStart: !0,
            error: 0
        },
        u = localStorage.getItem("stats") ? JSON.parse(localStorage.getItem("stats")) : i,
        p = function () {
            d.arrIndexAudio = null, d.randomAudio = null, d.randomText = null, d.error = 0
        },
        m = function () {
            var r = document.getElementById("loader");
            r.scrollIntoView(), r.style.opacity = 1, r.style.display = "block", setTimeout((function () {
                r.style.opacity = 0, setTimeout((function () {
                    r.style.display = "none"
                }), 400)
            }), 1600)
        },
        k = function () {
            var r, e;
            d.error ? ((e = document.getElementById("fail")).querySelector("audio").play(), e.querySelector("p").textContent = "You made ".concat(d.error, " errors"), e.style.opacity = 1, e.style.display = "flex", setTimeout((function () {
                e.style.opacity = 0, setTimeout((function () {
                    e.style.display = "none"
                }), 400)
            }), 2600)) : ((r = document.getElementById("win")).querySelector("audio").play(), r.style.opacity = 1, r.style.display = "flex", setTimeout((function () {
                r.style.opacity = 0, setTimeout((function () {
                    r.style.display = "none"
                }), 400)
            }), 2600)), localStorage.setItem("stats", JSON.stringify(u))
        },
        f = function () {
            document.getElementById("menu_toggle").checked = !1, document.querySelector("body").classList.remove("no-scroll")
        },
        E = function (r) {
            var e = document.querySelectorAll("#main_menu li a");
            e.forEach((function (r) {
                return r.classList.remove("active")
            })), r ? "A" === r.tagName ? r.classList.add("active") : e.forEach((function (e) {
                e.dataset.category === r && e.classList.add("active")
            })) : e[0].classList.add("active")
        },
        y = function (r) {
            var e, t;
            t = (e = r).offsetLeft, e.clientLeft > t && r.remove()
        },
        g = function () {
            var r = document.querySelectorAll(".category-wrapper .flip-card-front audio"),
                e = document.querySelectorAll(".category-wrapper .flip-card-front p");
            void 0 !== d.arrIndexAudio && null !== d.arrIndexAudio || (d.arrIndexAudio = function (r, e) {
                for (var t = [], c = r; c <= e; c += 1) t.push(c);
                return t
            }(0, r.length - 1));
            var t = l(d.arrIndexAudio);
            void 0 !== t ? (d.randomAudio = r[t], d.randomText = e[t].textContent) : (k(), L(JSON.parse(localStorage.getItem("wordsData"))), E(), S(document.getElementById("change_play_mode").checked), p())
        },
        v = function (r) {
            var e = document.querySelector(".category-wrapper");
            e.classList.add("start-game"), d.isFistStart && (! function (r) {
                for (var e = r.children.length; e >= 0; e -= 1) r.appendChild(r.children[Math.random() * e | 0])
            }(e), d.isFistStart = !1, r.target.innerHTML = '<span class="material-icons">rotate_left</span> Repeat', g()), setTimeout((function () {
                d.randomAudio.play()
            }), 500)
        },
        h = function (r) {
            document.getElementById("correct_audio").play(), r.classList.add("correct");
            var e, t = document.querySelector("#main_menu > li > a.active").textContent,
                c = r.querySelector("p").textContent;
            u[t].find((function (r) {
                return r[0] === c
            }))[1].clicksCorrect += 1, (e = document.querySelector(".star-wrap")).innerHTML += '<span class="material-icons correct-star">star</span>', y(e.childNodes[0]), r.removeEventListener("click", v), g(), d.arrIndexAudio && setTimeout((function () {
                d.randomAudio.play()
            }), 1e3)
        },
        C = function (r) {
            var e;
            document.getElementById("error_audio").play(), (e = document.querySelector(".star-wrap")).innerHTML += '<span class="material-icons error-star">star_border</span>', y(e.childNodes[0]), d.error += 1;
            var t = document.querySelector("#main_menu > li > a.active").textContent;
            u[t].find((function (e) {
                return e[0] === r
            }))[1].clicksErrors += 1
        },
        T = function () {
            var r = document.querySelector("main");
            if (r.querySelector(".category-wrapper"))
                if (r.querySelector(".category-wrapper").classList.contains("category-main-page")) r.querySelectorAll(".flip-card-3D-wrapper").forEach((function (r) {
                    return r.classList.add("play-category")
                }));
                else {
                    r.append(function () {
                        var r = document.createElement("div");
                        r.classList.add("play-button-wrap");
                        var e = document.createElement("button");
                        return e.classList.add("play-button"), e.textContent = "Start game", e.addEventListener("click", v), r.append(e), r
                    }());
                    var e = document.createElement("div");
                    e.classList.add("star-wrap"), r.insertBefore(e, r.querySelector(".category-wrapper")), r.querySelectorAll(".flip-card").forEach((function (r) {
                        r.querySelector(".flip-card-front p").classList.add("hide"), r.querySelector(".flip-card-front .flip-card-btn").classList.add("hide"), r.querySelector(".flip-card-back").classList.add("hide"), r.classList.add("play-mode")
                    }))
                }
        };

    function S(r) {
        r ? (d.isFistStart = !0, T()) : document.querySelector(".category-wrapper") && (document.querySelector(".category-wrapper").classList.contains("category-main-page") ? document.querySelectorAll("main .flip-card-3D-wrapper").forEach((function (r) {
            return r.classList.remove("play-category")
        })) : (document.querySelector("main .play-button") && document.querySelector("main .play-button-wrap").remove(), p(), document.querySelector(".category-wrapper").classList.contains("start-game") && document.querySelector(".category-wrapper").classList.remove("start-game"), document.querySelectorAll("main .flip-card-3D-wrapper").forEach((function (r) {
            r.querySelector(".flip-card-front p").classList.remove("hide"), r.querySelector(".flip-card-front .flip-card-btn").classList.remove("hide"), r.querySelector(".flip-card-back").classList.remove("hide"), r.querySelector(".flip-card").classList.remove("play-mode"), r.classList.remove("correct")
        }))))
    }
    var b = function (r) {
        var e = new n(r, !1).categoryWrapper;
        document.querySelector("main").innerHTML = "", document.querySelector("main").append(e), e.childNodes.forEach((function (r) {
            r.addEventListener("click", (function (r) {
                if (r.target.parentNode.classList.contains("flip-card-btn")) r.target.parentNode.parentNode.parentNode.classList.toggle("do-flip");
                else if (r.currentTarget.childNodes[0].classList.contains("play-mode")) r.currentTarget.parentNode.classList.contains("start-game") && ((c = r.currentTarget).classList.contains("correct") || (c.querySelector(".flip-card-front p").textContent === d.randomText ? h(c) : C(d.randomText)));
                else {
                    r.currentTarget.querySelector("audio").play();
                    var e = document.querySelector("#main_menu > li > a.active").textContent,
                        t = r.currentTarget.querySelector("p").textContent;
                    u[e].find((function (r) {
                        return r[0] === t
                    }))[1].clicksTrains += 1
                }
                var c
            })), r.addEventListener("mouseout", (function (r) {
                r.fromElement.classList.contains("flip-card-back") && r.relatedTarget.classList.contains("category-wrapper") && r.fromElement.parentNode.classList.remove("do-flip")
            }))
        })), d.isFistStart = !0
    };

    function L(r) {
        var e = r.map((function (r) {
                return r[0]
            })),
            t = new n(e, !0).categoryWrapper;
        document.querySelector("main").innerHTML = "", document.querySelector("main").append(t), t.childNodes.forEach((function (e) {
            return e.addEventListener("click", (function (e) {
                var t = document.getElementById("change_play_mode").checked,
                    c = e.currentTarget.dataset.category;
                m(), b(r[c]), S(t), E(c)
            }))
        }))
    }
    var w, q = function () {
        u = localStorage.getItem("stats") ? JSON.parse(localStorage.getItem("stats")) : i;
        var r = "";
        for (var e in u) u[e].forEach((function (r) {
            return r[1].translate = (e = r[0], JSON.parse(localStorage.getItem("wordsData")).forEach((function (r) {
                var c = r.find((function (r) {
                    return r.text === e
                }));
                c && (t = c.textTranslate)
            })), t);
            var e, t
        }));
        var t = function (e) {
            var t = "";
            u[e].forEach((function (r) {
                r[1].clicksCorrect + r[1].clicksErrors !== 0 && (r[1].percentErrors = (100 * parseFloat(r[1].clicksCorrect / (r[1].clicksCorrect + r[1].clicksErrors))).toFixed(2));
                var c = "<tr>";
                c += "<td>".concat(e, "</td>"), c += "<td>".concat(r[0], "</td>"), c += "<td>".concat(r[1].translate, "</td>"), c += "<td>".concat(r[1].clicksTrains, "</td>"), c += "<td>".concat(r[1].clicksCorrect, "</td>"), c += "<td>".concat(r[1].clicksErrors, "</td>"), c += "<td>".concat(r[1].percentErrors, "</td>"), t += c += "</tr>"
            })), r += t
        };
        for (var c in u) t(c);
        document.querySelector("tbody").innerHTML = r
        $(document).ready(function () {
            $("#dtBasicExample").DataTable();
            $(".dataTables_length").addClass("bs-select");
        });
    };

    function x(r, e, t) {
        return e in r ? Object.defineProperty(r, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : r[e] = t, r
    }
    var I = (x(w = {}, "Professions", ["accountant", "baker", "author", "electrician", "fisherman", "doctor", "hairdresser", "judge"]), x(w, "Food", ["pineapple", "banana", "pancake", "jam", "ham", "grapes", "mushroom", "pear"]), x(w, "Clothes", ["collar", "hat", "blouse", "jeans", "suit", "footwear", "glove", "strap"]), x(w, "Appearance", ["makeup", "bald", "beard", "ear", "mouth", "moustache", "tongue", "waist"]), x(w, "Transport", ["traffic lights", "highway", "bulldozer", "truck", "jeep", "boat", "raft", "airplane"]), x(w, "Computer", ["browser", "CPU", "flash drive", "keyboard", "laptop", "motherboard", "network", "hard drive"]), x(w, "Furniture", ["bath", "rug", "bookcase", "mirror", "curtain", "sofa", "door", "armchair"]), x(w, "Animals", ["shark", "monkey", "pigeon", "viper", "crow", "sparrow", "rabbit", "frog"]), w),
        _ = function (r) {
            return fetch("https://dictionary.skyeng.ru/api/public/v1/words/search?search=".concat(r, "&page=1&pageSize=1")).then((function (r) {
                return r.json()
            })).then((function (r) {
                return {
                    text: r[0].text,
                    imgSrc: r[0].meanings[0].imageUrl,
                    audioSrc: r[0].meanings[0].soundUrl,
                    textTranslate: r[0].meanings[0].translation.text
                }
            }))
        };
    window.addEventListener("DOMContentLoaded", (function () {
        var r, e;
        (m(), localStorage.getItem("wordsData")) ? L(JSON.parse(localStorage.getItem("wordsData"))): (r = Object.entries(I), e = [], r.forEach((function (r) {
            e.push(_(r[0])), r[1].forEach((function (r) {
                e.push(_(r))
            }))
        })), Promise.all(e).then((function (r) {
            var e = function (r, e) {
                var t = 0,
                    c = r.length,
                    a = [];
                for (t = 0; t < c; t += e) {
                    var s = r.slice(t, t + e);
                    a.push(s)
                }
                return a
            }(r, 9);
            localStorage.setItem("wordsData", JSON.stringify(e)), L(e)
        })))
    })), document.getElementById("main_menu").addEventListener("click", (function (r) {
        var e = JSON.parse(localStorage.getItem("wordsData")),
            t = document.getElementById("change_play_mode").checked,
            c = r.target.dataset,
            a = c.category,
            s = c.mainPage,
            n = c.statistics;
        (a || s || n) && (m(), document.querySelector(".stats-wrapper").classList.add("hide"), a ? (b(e[a]), S(t)) : s ? (L(e), S(t)) : (! function () {
            document.querySelector("main").innerHTML = "", document.querySelector(".stats-wrapper").classList.remove("hide");
            var r = document.createElement("div"),
                e = document.createElement("button");
            e.classList.add("play-button", "mr-3"), e.id = "reset_stats", e.textContent = "Reset Stats";
            var t = document.createElement("button");
            t.classList.add("play-button"), t.textContent = "Rep Difficult", r.classList.add("star-wrap"), r.append(e, t), document.querySelector("main").append(r), q()
        }(), document.getElementById("reset_stats").addEventListener("click", (function () {
            localStorage.removeItem("stats"), q()
        }))), E(r.target), f())
    })), document.querySelector("nav").addEventListener("click", (function (r) {
        "NAV" === r.target.tagName && f()
    })), document.getElementById("menu_toggle").addEventListener("click", (function () {
        document.querySelector("body").classList.toggle("no-scroll")
    })), document.getElementById("change_play_mode").addEventListener("change", (function (r) {
        document.querySelector(".category-main-page"), S(r.target.checked)
    }))
}]);