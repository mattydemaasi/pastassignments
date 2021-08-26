(function(t) {
    function e(e) {
        for (var i, r, o = e[0], c = e[1], l = e[2], d = 0, p = []; d < o.length; d++)
            r = o[d],
            Object.prototype.hasOwnProperty.call(a, r) && a[r] && p.push(a[r][0]),
            a[r] = 0;
        for (i in c)
            Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
        u && u(e);
        while (p.length)
            p.shift()();
        return s.push.apply(s, l || []),
        n()
    }
    function n() {
        for (var t, e = 0; e < s.length; e++) {
            for (var n = s[e], i = !0, o = 1; o < n.length; o++) {
                var c = n[o];
                0 !== a[c] && (i = !1)
            }
            i && (s.splice(e--, 1),
            t = r(r.s = n[0]))
        }
        return t
    }
    var i = {}
      , a = {
        app: 0
    }
      , s = [];
    function r(e) {
        if (i[e])
            return i[e].exports;
        var n = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, r),
        n.l = !0,
        n.exports
    }
    r.m = t,
    r.c = i,
    r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(t, e) {
        if (1 & e && (t = r(t)),
        8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                r.d(n, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return n
    }
    ,
    r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return r.d(e, "a", e),
        e
    }
    ,
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    r.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || []
      , c = o.push.bind(o);
    o.push = e,
    o = o.slice();
    for (var l = 0; l < o.length; l++)
        e(o[l]);
    var u = c;
    s.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(t, e, n) {
        t.exports = n("56d7")
    },
    "007d": function(t, e, n) {
        "use strict";
        var i = n("2647")
          , a = n.n(i);
        a.a
    },
    "018f": function(t, e, n) {
        "use strict";
        var i = n("aefe")
          , a = n.n(i);
        a.a
    },
    "0ac6": function(t) {
        t.exports = JSON.parse('{"description":"I like to design clean, aesthetic UI\'s and turn them into reality. I\'ve worked extensively with HTML/CSS, JavaScript and frameworks during internships and personal projects.","skills":[{"name":"Javascript & jQuery","level":5,"description":"Experience with ES2015 to ES2017 features, e.g. async/await, promises. Understanding of event loop/job queue/stack, Google V8 engine optimisation. Experience writing custom jQuery libraries & plug-ins."},{"name":"Vue.js","level":4,"description":"Applied extensively at GBST to create complex front-end applications, as well as personal projects."},{"name":"Cloud Services (AWS & Firebase)","level":3,"description":"I have understanding of using NodeJS with a JSON database (MongoDB), and communicating with front-end web-apps with ExpressJS and HTTP requests."},{"name":"Node.js","level":2,"description":""}]}')
    },
    "0dac": function(t, e, n) {},
    "25e0": function(t, e, n) {
        "use strict";
        var i = n("94ac")
          , a = n.n(i);
        a.a
    },
    2647: function(t, e, n) {},
    "2e9c": function(t, e, n) {},
    "3c2f": function(t) {
        t.exports = JSON.parse('[{"date":"Feb 2016 - Jun 2021","title":"Bachelor of Computer & Electrical Engineering, Bachelor of IT","description":"I\'m studying a dual bachelor with a current GPA of 6.94. I have received the dean\'s commendation each semester, and have been awarded 8 scholarships."},{"date":"Feb 2018 - Current","title":"UQ Teaching Assistant","description":"I have taught classes up up to 90 students on topics including embedded systems, web design, networking, and operating systems. Responsibilities also include grading course assessment."},{"date":"Nov 2018 - Feb 2019","title":"UQ Summer Research Project","description":"I was awarded a research scholarship with UQ to design and prototype technology to improve the lives of people with dementia."}]')
    },
    4766: function(t) {
        t.exports = JSON.parse('[{"name":"Smart Bus App","img":"./img/projects/busuber","imgAlt":"Busuber app screenshot","tags":["Android","SQLite","Java"],"description":"During a one-month intensive entrepreneurship program in China, my team and I created an app. It is marketed at schools, providing route planning and pickup scheduling abilities. It uses clustering/path-finding algorithms to plan optimal bus routes. Parents are able to use the app to select pickup dates, which automatically modifies the route.","link":{"text":"View Slides","href":"/files/docs.pdf"}},{"name":"Choose Your Own Adventure","img":"./img/projects/CYOA","imgAlt":"Choose Your Own adventure project","imgExt":"jpg","tags":["JS & JQuery","UX Design"],"description":"Using only vanilla javascript and jQuery, I made an interactive web-based version of the classic Choose Your Own Adventure novel \'Underground Kingdom\'. Features include additional animations and imagery as well as a branching path-based system that allow endless exploration.","link":{"text":"Visit Site","href":"http://deco1400.bitballoon.com/"}}]')
    },
    4933: function(t, e, n) {
        "use strict";
        var i = n("9c75")
          , a = n.n(i);
        a.a
    },
    5249: function(t, e, n) {},
    "52d8": function(t, e, n) {
        "use strict";
        var i = n("ac55")
          , a = n.n(i);
        a.a
    },
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        n("cadf"),
        n("551c"),
        n("f751"),
        n("097d");
        var i = n("2b0e")
          , a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                attrs: {
                    id: "app"
                }
            }, [n("Navbar", {
                attrs: {
                    "is-scrolled": t.isScrolled,
                    active: t.activePage,
                    "is-scrolled-fully": t.isScrolledFully
                }
            }), n("LandingSection", {
                ref: "home",
                attrs: {
                    "is-active": !t.isScrolledFully
                },
                on: {
                    enter: t.onEnter,
                    leave: t.onLeave
                }
            }), n("AboutSection", {
                ref: "about"
            }), n("SkillsSection", {
                ref: "skills"
            }), n("ProjectsSection", {
                ref: "project"
            }), n("EducationSection", {
                ref: "education"
            }), n("ContactSection", {
                ref: "contact"
            })], 1)
        }
          , s = []
          , r = (n("ac4d"),
        n("8a81"),
        n("ac6a"),
        function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "navbar"
            }, [n("HamburgerMenu", {
                attrs: {
                    dark: t.isScrolledFully,
                    open: t.hamburgOpen
                },
                nativeOn: {
                    click: function(e) {
                        return t.onClickHamburg(e)
                    }
                }
            }), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.hamburgOpen,
                    expression: "hamburgOpen"
                }],
                staticClass: "menuOverlay"
            }), n("nav", {
                class: {
                    pageScroll: t.isScrolled,
                    slideIn: t.hamburgOpen
                },
                on: {
                    click: function(e) {
                        return t.onClick(e)
                    }
                }
            }, [n("Logo", {
                class: {
                    pageScroll: t.isScrolled
                }
            }), n("a", {
                class: {
                    active: "home" === t.active
                },
                attrs: {
                    href: "#home"
                }
            }, [t._v("Home")]), n("a", {
                class: {
                    active: "about" === t.active
                },
                attrs: {
                    id: "navAbout",
                    href: "#about"
                }
            }, [t._v("About Me")]), n("a", {
                class: {
                    active: "skills" === t.active
                },
                attrs: {
                    id: "navSkills",
                    href: "#skills"
                }
            }, [t._v("Skills")]), n("a", {
                ref: "project",
                class: {
                    active: "project" === t.active
                },
                attrs: {
                    href: "#project"
                }
            }, [t._v("Projects")]), n("a", {
                ref: "education",
                class: {
                    active: "education" === t.active
                },
                attrs: {
                    href: "#education"
                }
            }, [t._v("Experience")]), n("a", {
                ref: "contact",
                class: {
                    active: "contact" === t.active
                },
                attrs: {
                    href: "#contact"
                }
            }, [t._v("Contact")])], 1)], 1)
        }
        )
          , o = []
          , c = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("a", {
                staticClass: "logo",
                attrs: {
                    href: "#home"
                },
                on: {
                    click: function(e) {
                        return t.onClick("#home")
                    }
                }
            }, [n("svg", {
                attrs: {
                    "data-name": "Logo",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 492.92581 358.39626"
                }
            }, [n("title", [t._v("AC_crop")]), n("path", {
                attrs: {
                    d: "M229.23514,208.74652c2.31332-1.70659,4.71125-3.31065,6.92555-5.13725,10.58709-8.73317,21.01414-17.66509,31.74554-26.2158a22.7954,22.7954,0,0,0,6.82163-9.46065c9.42625-22.00432,20.27533-43.25825,34.537-62.58507C324.18347,85.13059,341.5912,67.49311,363.372,54.57646a94.35946,94.35946,0,0,1,35.613-12.89c15.15216-2.057,28.96282,1.57427,41.712,9.82072,7.24964,4.68928,13.73041,10.113,17.95271,17.82353,2.188,3.99563,2.12459,3.84625,6.62735,2.69716,7.64862-1.9519,15.34419-3.726,23.04714-5.45373a10.80183,10.80183,0,0,1,4.6017.328c-2.09811,1.38693-4.17952,2.8-6.29746,4.15591-6.32037,4.04639-12.6396,8.09505-18.99669,12.08324-1.34383.84307-1.52138,1.64634-.95,3.14853a57.0963,57.0963,0,0,1,3.334,10.36665c1.23224,7.15184-.58179,13.85483-4.53741,19.86673-5.45206,8.28611-13.38363,13.16542-22.93432,15.13456-6.92937,1.42873-13.79272.84441-19.63722-3.84739a19.69938,19.69938,0,0,1-4.66763-24.618c3.34582-6.18056,8.28053-10.81615,13.78608-14.93108,2.97628-2.22449,6.10147-4.25527,9.21738-6.28448,1.18813-.77373,1.58057-1.34828.27908-2.37816-8.3365-6.59689-17.36949-11.88945-28.05769-13.33735-8.36748-1.1335-16.4.81851-24.09558,4.17631C375.33688,76.56,363.81918,86.08507,353.42485,97.09305c-13.135,13.91045-23.21423,29.86617-31.30551,47.13855A323.06619,323.06619,0,0,0,299.77455,207.412c-4.23968,18.03686-6.79048,36.26555-6.28374,54.83753.26131,9.57795,1.52673,18.964,5.25042,27.92891,4.98329,11.99752,13.88879,18.3859,26.77144,19.528,10.40475.92248,20.14821-1.46665,29.53547-5.64935a100.21166,100.21166,0,0,0,42.37676-35.529c3.03121-4.40219,6.082-8.845,10.49494-12.0231,6.541-4.71071,13.67539-5.55108,20.85811-1.93364,7.0756,3.56347,10.428,9.75955,10.57727,17.658.09621,5.09219-1.67822,9.7058-3.97461,14.10481a122.10107,122.10107,0,0,1-30.67434,37.94223c-15.34052,12.69238-32.50628,21.9124-51.91739,26.593-16.89536,4.07394-33.78186,4.13035-50.36892-1.62007-21.69487-7.52123-36.01726-22.54614-43.96127-43.89008a104.53152,104.53152,0,0,1-6.18829-30.06346c-.97039-15.28369.48268-30.37386,3.14673-45.39262a9.447,9.447,0,0,0,.14977-1.20334,4.339,4.339,0,0,0-.22886-.89991c-.97272.60373-1.89275,1.09052-2.7207,1.70191-7.12669,5.26283-14.2181,10.57365-21.36831,15.80414a4.2968,4.2968,0,0,0-1.82893,3.79774q-.23353,19.18011-.548,38.35923-.39074,24.25011-.849,48.49907a30.9299,30.9299,0,0,1-.68131,6.43557c-1.64959,7.00759-7.52829,11.1372-15.08643,10.80206a13.82839,13.82839,0,0,1-12.70269-11.93987,52.49265,52.49265,0,0,1-.32649-8.28554c.21915-13.79877.51768-27.59615.769-41.39442.1577-8.65825.28234-17.317.41906-25.97566.01137-.71972.00148-1.43976.00148-2.59462-3.4487,1.36887-6.51916,2.54123-9.55361,3.80034-11.11158,4.61073-22.49571,8.1005-34.63914,8.46751-14.39257.435-28.48693-.99934-41.66547-7.32244a86.58338,86.58338,0,0,1-8.923-5.54892c-.78237-.501-1.48158-1.132-2.57417-1.97848-.88753,2.60176-1.68855,4.919-2.46892,7.24315-2.59383,7.72526-5.08447,15.48675-7.79351,23.17128-3.46971,9.84236-6.9057,19.70543-10.74229,29.40691A108.93272,108.93272,0,0,1,68.442,345.43842c-4.422,5.9426-10.826,8.957-17.69181,11.22172-8.559,2.823-17.0374,2.3238-24.50718-2.38725C11.71986,345.11335,3.09379,331.73131.59218,314.62662c-.95873-6.55523-.918-13.16106,1.36194-19.43647a25.30079,25.30079,0,0,1,4.9017-8.25426c4.44774-4.87391,11.33141-4.72436,16.08483-.10414,3.9526,3.84186,5.52842,8.88874,6.99078,13.98207,1.26762,4.41508,2.31485,8.906,3.828,13.23472a21.787,21.787,0,0,0,10.08537,12.27165c3.42929,1.90335,5.20733,1.22242,7.423-1.9452,4.38615-6.27055,7.02718-13.35418,9.62514-20.42914,3.76132-10.24312,7.30565-20.56818,10.79874-30.90685,3.89677-11.53348,7.5668-23.14357,11.46073-34.678,2.77433-8.21805,5.74327-16.37061,8.648-24.54435,2.81708-7.9271,5.58284-15.87381,8.52011-23.75642,2.66178-7.14324,5.502-14.22048,8.30376-21.31095,3.91321-9.90345,7.79746-19.81922,11.82158-29.67769,2.67254-6.54732,5.53675-13.01736,8.37266-19.49682,2.56367-5.85741,5.089-11.736,7.83515-17.5083,7.3442-15.43745,14.4146-31.023,22.32652-46.167,6.59865-12.63032,14.15723-24.7648,21.45344-37.022A108.9785,108.9785,0,0,1,188.941,6.41c6.89658-8.59889,19.54814-8.61266,25.77666.35994,3.2364,4.66223,4.48641,10.1084,5.99638,15.41849a163.11158,163.11158,0,0,1,5.71729,32.6715c.77538,10.49967,1.43706,21.00841,2.06163,31.51834.5888,9.90769,1.26223,19.81676,1.53255,29.73518.26168,9.59957.10717,19.21215.04209,28.81838q-.08224,12.14007-.38687,24.27844c-.28948,11.67554-.67629,23.34866-1.00977,35.02314-.0397,1.39042-.00543,2.783-.00543,4.17455ZM127.68421,191.45238c.412.04617.561.10853.671.06719.441-.16568.87885-.3452,1.302-.55213a83.05044,83.05044,0,0,1,28.7674-8.531,53.17371,53.17371,0,0,1,28.41347,4.70729c4.0415,1.9242,7.36528,4.79648,8.406,9.55976.40813,1.86806.31616,3.55825-1.30724,4.73879a4.21763,4.21763,0,0,1-5.13189-.06494c-5.43613-3.66088-11.63262-4.915-17.96-5.76194-8.96878-1.20054-17.602.30681-26.10975,3.12509-9.15041,3.03117-17.26619,7.69717-23.87467,14.768a15.73356,15.73356,0,0,0-3.3614,4.96975c-2.58918,6.94767-4.79,14.04047-7.39895,20.98018a4.50054,4.50054,0,0,0,1.00386,5.141,11.08046,11.08046,0,0,0,2.51592,2.01375c5.15517,3.0751,10.93528,3.837,16.75041,4.06958,4.44533.17778,8.91775-.09019,13.36863-.33336a79.03091,79.03091,0,0,0,22.99961-4.41445c7.16294-2.6237,14.19525-5.60719,21.26282-8.487,4.55528-1.85607,9.14869-3.60351,12.86935-7.0736,1.45012-1.35244,2.35582-2.6466,2.307-4.65318-.05594-2.29813-.02352-4.60391.09547-6.89991.769-14.83917,1.5847-29.676,2.35821-44.5149q.4904-9.40847.87432-18.82238c.52516-12.74245,1.28094-25.48287,1.44484-38.23047.14319-11.13453-.26564-22.28249-.66888-33.41587q-.59391-16.39872-1.71534-32.77648a93.1959,93.1959,0,0,0-1.86916-11.57363,3.44194,3.44194,0,0,0-3.091-3.05357c-1.888-.1956-2.95083.8129-3.81983,2.38447-2.92572,5.29108-6.01348,10.49315-8.90475,15.80253-2.92986,5.38025-5.87246,10.76539-8.50392,16.29381-5.41047,11.367-10.6423,22.81935-15.89837,34.25923q-4.93173,10.734-9.70911,21.53864c-2.25907,5.12033-4.39837,10.29394-6.55448,15.45909-2.95917,7.089-5.93454,14.17185-8.81,21.29489-3.50693,8.68735-6.92357,17.41123-10.35532,26.12873A10.38273,10.38273,0,0,0,127.68421,191.45238Zm323.34405-97.937c-6.14628,3.29778-11.84267,6.88788-16.468,11.92314a13.92819,13.92819,0,0,0-2.3469,3.97607c-.89933,2.11182-.11837,3.32827,2.1399,3.7274,6.84174,1.20937,15.44883-4.00248,17.48553-10.6455C452.7495,99.5263,453.02645,96.56067,451.02826,93.51537Z"
                }
            })])])
        }
          , l = [];
        function u(t) {
            d(t.target.hash)
        }
        function d(t) {
            var e = document.querySelector(t);
            e && (event.preventDefault(),
            e.scrollIntoView({
                behavior: "smooth"
            }))
        }
        var p = {
            name: "Logo",
            methods: {
                onClick: d
            }
        }
          , h = p
          , f = (n("52d8"),
        n("2877"))
          , v = Object(f["a"])(h, c, l, !1, null, "751cded7", null)
          , m = v.exports
          , y = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                class: {
                    dark: t.dark,
                    open: t.open
                },
                attrs: {
                    id: "hamburgerMenu"
                }
            }, [t._m(0)])
        }
          , g = [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "icon"
            }, [n("div", {
                staticClass: "bar"
            }), n("div", {
                staticClass: "bar"
            }), n("div", {
                staticClass: "bar"
            })])
        }
        ]
          , b = {
            name: "HamburgerMenu",
            props: {
                dark: {
                    type: Boolean,
                    default: !1
                },
                open: {
                    type: Boolean,
                    default: !1
                }
            }
        }
          , O = b
          , w = (n("9fd8"),
        Object(f["a"])(O, y, g, !1, null, "25885d40", null))
          , j = w.exports
          , S = {
            name: "Navbar",
            components: {
                Logo: m,
                HamburgerMenu: j
            },
            props: {
                isScrolled: {
                    type: Boolean,
                    default: !1
                },
                active: {
                    type: String,
                    default: "home"
                },
                isScrolledFully: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    hamburgOpen: !1
                }
            },
            methods: {
                onClick: function(t) {
                    u(t),
                    this.hamburgOpen = !1
                },
                onClickHamburg: function() {
                    this.hamburgOpen = !this.hamburgOpen
                }
            }
        }
          , x = S
          , C = (n("cc05"),
        Object(f["a"])(x, r, o, !1, null, "733c6340", null))
          , k = C.exports
          , P = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("Section", {
                staticClass: "container",
                attrs: {
                    id: "home",
                    "show-header": !1
                },
                nativeOn: {
                    mousemove: function(e) {
                        return t.mousemove(e)
                    }
                }
            }, [n("ParticleCanvas", {
                ref: "canvas",
                staticClass: "canvas",
                attrs: {
                    "is-active": t.isActive
                }
            }), n("Intersect", {
                attrs: {
                    threshold: [.8]
                },
                on: {
                    enter: t.onEnter,
                    leave: t.onLeave
                }
            }, [n("div", {
                staticClass: "content"
            }, [n("div", {
                staticClass: "title"
            }, [n("Typer", {
                attrs: {
                    text: "Hi, I'm Aaron Coox"
                }
            }), n("h2", {
                attrs: {
                    id: "description"
                }
            }, [t._v("\n          Computer & Electrical/Information Technology student. Welcome to my\n          resume.\n        ")])], 1), n("a", {
                attrs: {
                    id: "enterBtn",
                    href: "#about"
                },
                on: {
                    click: function(e) {
                        return t.onClick(e)
                    }
                }
            }, [t._v("Explore Site")])])]), n("div", {
                attrs: {
                    id: "overlay"
                }
            })], 1)
        }
          , _ = []
          , E = n("760e")
          , I = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("section", {
                staticClass: "section",
                class: {
                    coloured: t.coloured
                }
            }, [t.showHeader ? n("header", [t._v(t._s(t.header))]) : t._e(), t._t("default")], 2)
        }
          , A = []
          , M = {
            name: "Section",
            props: {
                header: {
                    type: String,
                    default: ""
                },
                showHeader: {
                    type: Boolean,
                    default: !0
                },
                coloured: {
                    type: Boolean,
                    default: !1
                }
            }
        }
          , T = M
          , D = (n("4933"),
        Object(f["a"])(T, I, A, !1, null, "7f361f91", null))
          , B = D.exports
          , L = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "typer"
            }, [n("p", {
                class: {
                    cursor: t.cursorShow
                }
            }, [t._v(t._s(t.typedText))])])
        }
          , V = []
          , H = (n("c5f6"),
        {
            getRandomBetween: function(t, e) {
                return Math.random() * (e - t) + t
            }
        })
          , $ = {
            name: "Typer",
            props: {
                text: {
                    type: String,
                    default: ""
                },
                cursorSpeed: {
                    type: Number,
                    default: 500
                },
                typeDelay: {
                    type: Number,
                    default: 100
                }
            },
            data: function() {
                return {
                    cursorShow: !0,
                    cursorAnim: null,
                    charsTyped: 0,
                    cursorStopDelay: 1400,
                    typeStartDelay: 500
                }
            },
            computed: {
                typedText: function() {
                    return this.text.slice(0, this.charsTyped)
                }
            },
            mounted: function() {
                this.startCursorAnim(),
                setTimeout(this.typeChar, this.typeStartDelay)
            },
            methods: {
                startCursorAnim: function() {
                    var t = this;
                    this.cursorAnim = setInterval(function() {
                        t.cursorShow = !t.cursorShow
                    }, this.cursorSpeed)
                },
                stopCursorAnim: function() {
                    clearInterval(this.cursorAnim),
                    this.cursorAnim = null,
                    this.cursorShow = !1
                },
                typeChar: function() {
                    if (this.charsTyped != this.text.length) {
                        this.charsTyped++;
                        var t = this.typeDelay * H.getRandomBetween(.85, 1.15);
                        "," === this.text[this.charsTyped - 1] && (t *= 3),
                        setTimeout(this.typeChar, t)
                    } else
                        setTimeout(this.stopCursorAnim, this.cursorStopDelay)
                }
            }
        }
          , z = $
          , F = (n("c4e0"),
        Object(f["a"])(z, L, V, !1, null, "e96731ee", null))
          , q = F.exports
          , J = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("canvas", {
                ref: "canvas",
                attrs: {
                    width: t.canvas.width,
                    height: t.canvas.height
                }
            })
        }
          , N = []
          , U = (n("55dd"),
        n("8449"),
        n("6c7b"),
        n("d225"))
          , G = n("b0b4")
          , R = n("bd86")
          , Q = n("3c4e")
          , W = n.n(Q)
          , Y = 2 * Math.PI;
        function X(t) {
            var e;
            return e = t <= .5 ? .5 - Math.sqrt(.25 - t * t) : .5 + Math.sqrt(.25 - (t - 1) * (t - 1)),
            e
        }
        function Z(t, e) {
            return "rgba(" + t + "," + e + ")"
        }
        function K(t, e) {
            return Math.random() * (e - t) + t
        }
        var tt = function() {
            function t(e, n, i) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                Object(U["a"])(this, t),
                Object(R["a"])(this, "ctx", null),
                Object(R["a"])(this, "anchor", {
                    x: 0,
                    y: 0
                }),
                Object(R["a"])(this, "pos", {
                    x: 0,
                    y: 0
                }),
                Object(R["a"])(this, "options", {
                    radius: 3,
                    colours: {
                        particle: "156,217,249",
                        line: "156,217,249"
                    },
                    lineOpacity: .5
                }),
                Object(R["a"])(this, "fillStyle", ""),
                Object(R["a"])(this, "lineStyle", ""),
                Object(R["a"])(this, "opacity", 0),
                Object(R["a"])(this, "anim", {
                    startPos: {
                        x: 0,
                        y: 0
                    },
                    startTime: 0,
                    duration: 0
                }),
                Object(R["a"])(this, "connected", []),
                this.ctx = e,
                this.anchor = n,
                this.pos = i,
                this.options = W()(this.options, a),
                this.updateStyles()
            }
            return Object(G["a"])(t, [{
                key: "setOpacity",
                value: function(t) {
                    this.opacity = t,
                    this.updateStyles()
                }
            }, {
                key: "updateStyles",
                value: function() {
                    this.fillStyle = Z(this.options.colours.particle, this.opacity);
                    var t = this.opacity * this.options.lineOpacity;
                    this.lineStyle = Z(this.options.colours.line, t)
                }
            }, {
                key: "draw",
                value: function() {
                    var t = this;
                    this.opacity > 0 && (this.ctx.beginPath(),
                    this.ctx.arc(this.pos.x, this.pos.y, this.options.radius, 0, Y, !1),
                    this.ctx.fillStyle = this.fillStyle,
                    this.ctx.fill(),
                    this.connected.forEach(function(e) {
                        return t.drawLineTo(e)
                    }))
                }
            }, {
                key: "drawLineTo",
                value: function(t) {
                    0 !== t.opacity && (this.ctx.beginPath(),
                    this.ctx.strokeStyle = this.lineStyle,
                    this.ctx.moveTo(this.pos.x, this.pos.y),
                    this.ctx.lineTo(t.pos.x, t.pos.y),
                    this.ctx.stroke())
                }
            }, {
                key: "startAnimateTo",
                value: function(t, e, n, i) {
                    this.anim.startPos.x = this.pos.x,
                    this.anim.startPos.y = this.pos.y,
                    this.anim.deltaPos = {
                        x: t - this.pos.x,
                        y: e - this.pos.y
                    },
                    this.anim.startTime = i,
                    this.anim.duration = n
                }
            }, {
                key: "animateFrame",
                value: function(t) {
                    if (0 === this.opacity)
                        return !1;
                    var e = t - this.anim.startTime;
                    if (e < this.anim.duration) {
                        var n = X(e / this.anim.duration);
                        return this.pos.x = this.anim.startPos.x + this.anim.deltaPos.x * n,
                        this.pos.y = this.anim.startPos.y + this.anim.deltaPos.y * n,
                        !1
                    }
                    return !0
                }
            }]),
            t
        }()
          , et = function() {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                Object(U["a"])(this, t),
                Object(R["a"])(this, "canvas", {
                    elem: null,
                    ctx: null
                }),
                Object(R["a"])(this, "options", {
                    particles: {
                        density: 65,
                        maxRange: 60,
                        maxDistance: 55e3,
                        maxOpacity: .9
                    },
                    lineCount: 3,
                    duration: {
                        min: 1e3,
                        max: 2e3
                    }
                }),
                Object(R["a"])(this, "particles", []),
                Object(R["a"])(this, "visibleParticles", []),
                Object(R["a"])(this, "mousePos", {
                    x: 0,
                    y: 0,
                    updated: !0
                }),
                Object(R["a"])(this, "anim", {
                    req: null
                }),
                this.canvas.elem = e,
                this.options = W()(this.options, n),
                this.init()
            }
            return Object(G["a"])(t, [{
                key: "init",
                value: function() {
                    this.initCanvas(),
                    this.initParticles(this.canvas.elem.width, this.canvas.elem.height)
                }
            }, {
                key: "initCanvas",
                value: function() {
                    this.canvas.ctx = this.canvas.elem.getContext("2d")
                }
            }, {
                key: "updateCanvas",
                value: function(t, e) {
                    this.particles = [],
                    this.initParticles(t, e)
                }
            }, {
                key: "initParticles",
                value: function(t, e) {
                    for (var n = this, i = this.options.particles.density, a = Math.ceil(t / i) + 1, s = Math.ceil(e / i) + 1, r = 0; r < a; r++) {
                        for (var o = [], c = 0; c < s; c++) {
                            var l = {
                                x: r * i,
                                y: c * i
                            }
                              , u = this.randomParticleOffset(l)
                              , d = new tt(this.canvas.ctx,l,u);
                            d.options.radius = Math.round(K(2, 4)),
                            o.push(d)
                        }
                        this.particles.push(o)
                    }
                    this.forEachParticle(function(t, e, i) {
                        t.connected = n.getConnectedParticles(e, i)
                    })
                }
            }, {
                key: "start",
                value: function() {
                    this.forEachParticle(this.startParticleAnimate.bind(this)),
                    this.anim.req = requestAnimationFrame(this.animateFrame.bind(this))
                }
            }, {
                key: "stop",
                value: function() {
                    null != this.anim.req && (cancelAnimationFrame(this.anim.req),
                    this.anim.req = null)
                }
            }, {
                key: "continue",
                value: function() {
                    this.anim.req = requestAnimationFrame(this.animateFrame.bind(this))
                }
            }, {
                key: "startParticleAnimate",
                value: function(t) {
                    var e = performance.now()
                      , n = this.randomParticleOffset(t.anchor)
                      , i = n.x
                      , a = n.y
                      , s = K(this.options.duration.min, this.options.duration.max);
                    t.startAnimateTo(i, a, s, e)
                }
            }, {
                key: "randomParticleOffset",
                value: function(t) {
                    var e = this.options.particles.maxRange;
                    return {
                        x: t.x + K(-e, e),
                        y: t.y + K(-e, e)
                    }
                }
            }, {
                key: "animateFrame",
                value: function(t) {
                    var e = this;
                    this.canvas.ctx.clearRect(0, 0, this.canvas.elem.width, this.canvas.elem.height),
                    this.forEachParticle(function(n, i, a) {
                        e.updateParticleOpacity(n, i, a),
                        n.animateFrame(t) && e.startParticleAnimate(n),
                        n.draw()
                    }),
                    this.anim.req = requestAnimationFrame(this.animateFrame.bind(this))
                }
            }, {
                key: "forEachParticle",
                value: function(t) {
                    for (var e = 0; e < this.particles.length; e++)
                        for (var n = 0; n < this.particles[e].length; n++)
                            t(this.particles[e][n], e, n)
                }
            }, {
                key: "findClosestParticleToMouse",
                value: function() {
                    return {
                        x: Math.round(this.mousePos.x / this.options.particles.density),
                        y: Math.round(this.mousePos.y / this.options.particles.density)
                    }
                }
            }, {
                key: "updateParticleOpacity",
                value: function(t) {
                    var e = this.distanceFromMouse(t);
                    t.setOpacity(this.distanceToOpacity(e))
                }
            }, {
                key: "getConnectedParticles",
                value: function(t, e) {
                    for (var n = Math.max(0, t - 1), i = Math.min(this.particles.length - 1, t + 1), a = Math.max(0, e - 1), s = Math.min(this.particles[0].length - 1, e + 1), r = [], o = n; o <= i; o++)
                        for (var c = a; c <= s; c++)
                            o == t && c == e || r.push(this.particles[o][c]);
                    return r.slice(0, this.options.lineCount)
                }
            }, {
                key: "getLineDistances",
                value: function(t, e, n) {
                    for (var i = this.options.lineRange, a = Math.max(0, e - i), s = Math.min(this.particles.length - 1, e + i), r = Math.max(0, n - i), o = Math.min(this.particles[0].length - 1, n + i), c = [], l = a; l < s; l++)
                        for (var u = r; u < o; u++)
                            if (l != t.anchor.x || u != t.anchor.y) {
                                var d = this.particles[l][u];
                                c.push({
                                    particle: d,
                                    distance: this.distance(t.pos, d.pos)
                                })
                            }
                    return c.sort(function(t, e) {
                        return t.distance == e.distance ? 0 : t.distance < e.distance ? -1 : 1
                    }),
                    c.slice(0, this.options.lineCount)
                }
            }, {
                key: "distanceFromMouse",
                value: function(t) {
                    return this.distance(t.pos, this.mousePos)
                }
            }, {
                key: "distance",
                value: function(t, e) {
                    var n = t.x - e.x
                      , i = t.y - e.y;
                    return n * n + i * i
                }
            }, {
                key: "distanceToOpacity",
                value: function(t) {
                    var e = this.options.particles.maxDistance;
                    if (t > e)
                        return 0;
                    var n = 1 - t / e;
                    return n * this.options.particles.maxOpacity
                }
            }, {
                key: "distanceToLineOpacity",
                value: function(t) {
                    var e = this.distanceToOpacity(t);
                    return e *= .5,
                    e
                }
            }, {
                key: "onMouseMove",
                value: function(t) {
                    var e = this.canvas.elem.getBoundingClientRect();
                    this.mousePos.x = t.clientX - e.left,
                    this.mousePos.y = t.clientY - e.top,
                    this.mousePos.updated = !0
                }
            }]),
            t
        }();
        function nt(t, e, n) {
            var i;
            return function() {
                var a = this
                  , s = arguments
                  , r = function() {
                    i = null,
                    n || t.apply(a, s)
                }
                  , o = n && !i;
                clearTimeout(i),
                i = setTimeout(r, e),
                o && t.apply(a, s)
            }
        }
        var it = {
            name: "ParticleCanvas",
            props: {
                isActive: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    animation: null,
                    running: !1,
                    hasStarted: !1,
                    canvas: {
                        width: 500,
                        height: 500
                    }
                }
            },
            watch: {
                running: function(t) {
                    t ? this.hasStarted ? this.animation.continue() : (this.hasStarted = !0,
                    this.animation.start()) : this.animation.stop()
                },
                isActive: function(t) {
                    this.running = t
                }
            },
            mounted: function() {
                var t = this
                  , e = this.$refs.canvas;
                this.canvas.width = this.$refs.canvas.clientWidth,
                this.canvas.height = this.$refs.canvas.clientHeight,
                this.$nextTick(function() {
                    t.animation = new et(e),
                    window.addEventListener("resize", nt(function(e) {
                        return t.resize(e)
                    }, 50))
                })
            },
            methods: {
                mousemove: function(t) {
                    this.hasStarted || (this.running = !0),
                    this.animation.onMouseMove(t)
                },
                resize: function() {
                    if (this.$refs.canvas) {
                        var t = this.$refs.canvas
                          , e = t.clientWidth
                          , n = t.clientHeight;
                        this.canvas.width == e && this.canvas.height == n || (this.canvas.width = e,
                        this.canvas.height = n,
                        this.animation.updateCanvas(e, n))
                    }
                }
            }
        }
          , at = it
          , st = (n("c94a"),
        Object(f["a"])(at, J, N, !1, null, "4462768c", null))
          , rt = st.exports
          , ot = {
            name: "LandingSection",
            components: {
                Section: B,
                Typer: q,
                ParticleCanvas: rt,
                Intersect: E["a"]
            },
            props: {
                isActive: {
                    type: Boolean,
                    default: !1
                }
            },
            methods: {
                onClick: u,
                mousemove: function(t) {
                    this.$refs.canvas.mousemove(t)
                },
                onEnter: function(t) {
                    this.$emit("enter", t)
                },
                onLeave: function(t) {
                    this.$emit("leave", t)
                }
            }
        }
          , ct = ot
          , lt = (n("cff0"),
        Object(f["a"])(ct, P, _, !1, null, "8a1c2a7a", null))
          , ut = lt.exports
          , dt = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("Section", {
                attrs: {
                    id: "about",
                    header: "About Me"
                }
            }, [n("transition", {
                attrs: {
                    name: "fade-in"
                }
            }, [n("div", {
                attrs: {
                    id: "aboutContainer"
                }
            }, [n("p", [t._v("\n        I'm an enthusiastic student interested in all things electronic, from\n        web app development to C micro-controller programming. I love reading\n        to complement my studies or unwind.\n        "), n("br"), n("br"), t._v("Side projects and work knowledge are what give me a strong\n        skillset to bring to the workforce. My internships and tutoring\n        experience have given me a deeper understanding of programming and\n        teamwork. I live in Brisbane, Australia where I study engineering at\n        the University of Queensland.\n        "), n("br"), n("br"), t._v("I am always interested in opportunities to expand my experience!\n      ")]), n("Picture", {
                attrs: {
                    id: "myPhoto",
                    src: "img/me",
                    ext: "png",
                    alt: "Handsome photo of me"
                }
            })], 1)])], 1)
        }
          , pt = []
          , ht = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("picture", [n("source", {
                attrs: {
                    srcset: t.src + ".webp",
                    type: "image/webp"
                }
            }), n("source", {
                attrs: {
                    srcset: t.src + "." + t.ext,
                    type: "image/" + t.ext
                }
            }), n("img", {
                attrs: {
                    src: t.src + "." + t.ext,
                    alt: t.alt
                }
            })])
        }
          , ft = []
          , vt = {
            name: "Picture",
            props: {
                src: {
                    type: String,
                    default: ""
                },
                alt: {
                    type: String,
                    default: ""
                },
                ext: {
                    type: String,
                    default: "jpg"
                }
            }
        }
          , mt = vt
          , yt = (n("840f"),
        Object(f["a"])(mt, ht, ft, !1, null, "5285351c", null))
          , gt = yt.exports
          , bt = {
            name: "AboutSection",
            components: {
                Section: B,
                Picture: gt
            }
        }
          , Ot = bt
          , wt = (n("614c"),
        n("be4b"),
        Object(f["a"])(Ot, dt, pt, !1, null, "4bfef68a", null))
          , jt = wt.exports
          , St = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("Section", {
                attrs: {
                    id: "skills",
                    header: "Skills & Experience",
                    coloured: !0
                }
            }, [n("Intersect", {
                attrs: {
                    threshold: [.2]
                },
                on: {
                    "~enter": function(e) {
                        t.animate = !0
                    }
                }
            }, [n("div", {
                staticClass: "skillContainer"
            }, [n("SkillBox", {
                staticClass: "webSkills",
                attrs: {
                    title: "Web Developer",
                    skills: t.webDevSkills.skills,
                    description: t.webDevSkills.description,
                    animate: t.animate,
                    logo: t.webLogo
                }
            }), n("SkillBox", {
                attrs: {
                    title: "Computer Engineer",
                    skills: t.engSkills.skills,
                    description: t.engSkills.description,
                    animate: t.animate,
                    logo: t.cpuLogo
                }
            })], 1)])], 1)
        }
          , xt = []
          , Ct = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "skillBox"
            }, [n(t.logo, {
                tag: "component",
                staticClass: "logo"
            }), n("h3", {
                staticClass: "skillHead"
            }, [t._v(t._s(t.title))]), n("p", {
                staticClass: "description"
            }, [t._v(t._s(t.description))]), n("h4", [t._v("Languages I use:")]), n("div", {
                staticClass: "skills"
            }, t._l(t.skills, function(e, i) {
                return n("Skill", {
                    key: i,
                    attrs: {
                        skill: e,
                        animate: t.animate
                    }
                })
            }), 1), t._m(0)], 1)
        }
          , kt = [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "scale"
            }, [n("div", {
                attrs: {
                    id: "basic"
                }
            }, [t._v("Basic")]), n("div", {
                attrs: {
                    id: "good"
                }
            }, [t._v("Intermediate")]), n("div", {
                attrs: {
                    id: "advanced"
                }
            }, [t._v("Advanced")])])
        }
        ]
          , Pt = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "skill"
            }, [n("p", [t._v(t._s(t.skill.name))]), n("div", {
                staticClass: "barGraph"
            }, t._l(t.skill.level, function(e, i) {
                return n("div", {
                    key: i,
                    staticClass: "bar",
                    class: {
                        glow: t.animateCount > i
                    }
                })
            }), 0)])
        }
          , _t = []
          , Et = {
            name: "Skill",
            props: {
                skill: {
                    type: Object,
                    default: function() {
                        return {
                            name: "",
                            level: 0
                        }
                    }
                },
                animate: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    animateCount: 0
                }
            },
            watch: {
                animate: function(t) {
                    var e = this;
                    if (t)
                        var n = setInterval(function() {
                            e.animateCount >= e.skill.level && clearTimeout(n),
                            e.animateCount++
                        }, 200)
                }
            }
        }
          , It = Et
          , At = (n("9383"),
        Object(f["a"])(It, Pt, _t, !1, null, "ec03ac56", null))
          , Mt = At.exports
          , Tt = {
            name: "SkillBox",
            components: {
                Skill: Mt
            },
            props: {
                title: {
                    type: String,
                    default: ""
                },
                skills: {
                    type: Array,
                    default: function() {}
                },
                description: {
                    type: String,
                    default: ""
                },
                animate: {
                    type: Boolean,
                    default: !1
                },
                logo: {
                    type: Object,
                    default: null
                }
            }
        }
          , Dt = Tt
          , Bt = (n("cb5d"),
        Object(f["a"])(Dt, Ct, kt, !1, null, "d095c59e", null))
          , Lt = Bt.exports
          , Vt = n("0ac6")
          , Ht = n("b6cc")
          , $t = (n("8e6e"),
        n("456d"),
        n("a8db"));
        function zt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                n.push.apply(n, i)
            }
            return n
        }
        function Ft(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? zt(n, !0).forEach(function(e) {
                    Object(R["a"])(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : zt(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        var qt = {
            functional: !0,
            render: function(t, e) {
                var n = e._c
                  , i = (e._v,
                e.data)
                  , a = e.children
                  , s = void 0 === a ? [] : a
                  , r = i.class
                  , o = i.staticClass
                  , c = i.style
                  , l = i.staticStyle
                  , u = i.attrs
                  , d = void 0 === u ? {} : u
                  , p = Object($t["a"])(i, ["class", "staticClass", "style", "staticStyle", "attrs"]);
                return n("svg", Ft({
                    class: [r, o],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 512 512"
                    }, d)
                }, p), s.concat([n("defs", [n("linearGradient", {
                    attrs: {
                        id: "a",
                        gradientTransform: "rotate(45)",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [n("stop", {
                    attrs: {
                        offset: "0",
                        "stop-color": "#1babfea6"
                    }
                }), n("stop", {
                    attrs: {
                        offset: "1",
                        "stop-color": "#2430dfa6"
                    }
                })])]), n("g", {
                    attrs: {
                        fill: "url(#a)"
                    }
                }, [n("circle", {
                    attrs: {
                        cx: "128",
                        cy: "128",
                        r: "11.636"
                    }
                }), n("circle", {
                    attrs: {
                        cx: "384",
                        cy: "128",
                        r: "11.636"
                    }
                }), n("circle", {
                    attrs: {
                        cx: "128",
                        cy: "384",
                        r: "11.636"
                    }
                }), n("circle", {
                    attrs: {
                        cx: "384",
                        cy: "384",
                        r: "11.636"
                    }
                }), n("path", {
                    attrs: {
                        d: "M500.364 232.727c6.435 0 11.636-5.213 11.636-11.636 0-6.423-5.201-11.636-11.636-11.636h-58.182V162.91h58.182c6.435 0 11.636-5.213 11.636-11.636 0-6.423-5.201-11.636-11.636-11.636h-58.182V128c0-32.081-26.1-58.182-58.182-58.182h-11.636V11.636C372.364 5.213 367.162 0 360.727 0c-6.435 0-11.636 5.213-11.636 11.636v58.182h-46.545V11.636C302.545 5.213 297.344 0 290.909 0c-6.435 0-11.636 5.213-11.636 11.636v58.182h-46.545V11.636C232.727 5.213 227.526 0 221.091 0c-6.435 0-11.636 5.213-11.636 11.636v58.182H162.91V11.636C162.909 5.213 157.708 0 151.273 0c-6.435 0-11.636 5.213-11.636 11.636v58.182H128c-32.081 0-58.182 26.1-58.182 58.182v11.636H11.636C5.201 139.636 0 144.849 0 151.273c0 6.423 5.201 11.636 11.636 11.636h58.182v46.545H11.636C5.201 209.455 0 214.668 0 221.091s5.201 11.636 11.636 11.636h58.182v46.545H11.636C5.201 279.273 0 284.486 0 290.909s5.201 11.636 11.636 11.636h58.182v46.545H11.636C5.201 349.091 0 354.304 0 360.727s5.201 11.636 11.636 11.636h58.182V384c0 32.081 26.1 58.182 58.182 58.182h11.636v58.182c0 6.423 5.201 11.636 11.636 11.636s11.636-5.213 11.636-11.636v-58.182h46.545v58.182c0 6.423 5.201 11.636 11.636 11.636s11.636-5.213 11.636-11.636v-58.182h46.545v58.182c0 6.423 5.201 11.636 11.636 11.636s11.636-5.213 11.636-11.636v-58.182h46.545v58.182c0 6.423 5.201 11.636 11.636 11.636s11.636-5.213 11.636-11.636v-58.182H384c32.081 0 58.182-26.1 58.182-58.182v-11.636h58.182c6.435 0 11.636-5.213 11.636-11.636s-5.201-11.636-11.636-11.636h-69.818c-6.435 0-11.636 5.213-11.636 11.636V384c0 19.247-15.663 34.909-34.909 34.909H128c-19.247 0-34.909-15.663-34.909-34.909V128c0-19.247 15.663-34.909 34.909-34.909h256c19.247 0 34.909 15.663 34.909 34.909v186.182c0 6.423 5.201 11.636 11.636 11.636s11.636-5.213 11.636-11.636v-11.636h58.182c6.435 0 11.636-5.213 11.636-11.636s-5.201-11.636-11.636-11.636h-58.182v-46.545h58.183z"
                    }
                }), n("path", {
                    attrs: {
                        d: "M221.091 186.182c-19.247 0-34.909 15.663-34.909 34.909 0 15.151 9.763 27.951 23.273 32.768v95.232h-34.909c-6.412 0-11.625-5.225-11.625-11.636v-162.91c0-6.412 5.213-11.636 11.636-11.636h69.807c6.435 0 11.636-5.213 11.636-11.636 0-6.423-5.201-11.636-11.636-11.636h-69.807c-19.247 0-34.909 15.663-34.909 34.909v162.909c0 19.247 15.663 34.909 34.897 34.909h46.545c6.435 0 11.636-5.213 11.636-11.636V253.859c13.51-4.817 23.273-17.617 23.273-32.768.001-19.247-15.662-34.909-34.908-34.909zm0 46.545c-6.423 0-11.636-5.225-11.636-11.636 0-6.412 5.213-11.636 11.636-11.636 6.423 0 11.636 5.225 11.636 11.636 0 6.412-5.213 11.636-11.636 11.636zm116.352-93.091h-46.534c-6.435 0-11.636 5.213-11.636 11.636V258.14C265.763 262.959 256 275.759 256 290.909c0 19.247 15.663 34.909 34.909 34.909 19.247 0 34.909-15.663 34.909-34.909 0-15.151-9.763-27.951-23.273-32.768v-95.232h34.897c6.423 0 11.636 5.225 11.636 11.636v162.909c0 6.412-5.213 11.636-11.636 11.636h-69.807c-6.435 0-11.636 5.213-11.636 11.636s5.201 11.636 11.636 11.636h69.807c19.247 0 34.909-15.663 34.909-34.909V174.545c.001-19.246-15.662-34.909-34.908-34.909zm-46.534 162.909c-6.423 0-11.636-5.225-11.636-11.636 0-6.412 5.213-11.636 11.636-11.636s11.636 5.225 11.636 11.636c0 6.412-5.213 11.636-11.636 11.636z"
                    }
                })])]))
            }
        };
        function Jt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                n.push.apply(n, i)
            }
            return n
        }
        function Nt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Jt(n, !0).forEach(function(e) {
                    Object(R["a"])(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Jt(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        var Ut = {
            functional: !0,
            render: function(t, e) {
                var n = e._c
                  , i = (e._v,
                e.data)
                  , a = e.children
                  , s = void 0 === a ? [] : a
                  , r = i.class
                  , o = i.staticClass
                  , c = i.style
                  , l = i.staticStyle
                  , u = i.attrs
                  , d = void 0 === u ? {} : u
                  , p = Object($t["a"])(i, ["class", "staticClass", "style", "staticStyle", "attrs"]);
                return n("svg", Nt({
                    class: [r, o],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 634 558"
                    }, d)
                }, p), s.concat([n("defs", [n("linearGradient", {
                    attrs: {
                        id: "a",
                        gradientTransform: "rotate(45)",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [n("stop", {
                    attrs: {
                        offset: "0",
                        "stop-color": "#1babfea6"
                    }
                }), n("stop", {
                    attrs: {
                        offset: "1",
                        "stop-color": "#2430dfa6"
                    }
                })])]), n("g", {
                    attrs: {
                        fill: "url(#a)",
                        stroke: "url(#a)"
                    }
                }, [n("rect", {
                    attrs: {
                        x: "12.5",
                        y: "12.5",
                        width: "609",
                        height: "533",
                        rx: "87.5",
                        fill: "#fff"
                    }
                }), n("path", {
                    attrs: {
                        d: "M534 25a75.29 75.29 0 0175 75v358a75.29 75.29 0 01-75 75H100a75.29 75.29 0 01-75-75V100a75.29 75.29 0 0175-75h434m0-25H100C45 0 0 45 0 100v358c0 55 45 100 100 100h434c55 0 100-45 100-100V100C634 45 589 0 534 0z"
                    }
                }), n("path", {
                    attrs: {
                        "stroke-miterlimit": "10",
                        "stroke-width": "25",
                        d: "M18.5 177.78h595"
                    }
                }), n("circle", {
                    attrs: {
                        cx: "95",
                        cy: "98",
                        r: "21.5",
                        fill: "none",
                        "stroke-miterlimit": "10",
                        "stroke-width": "25"
                    }
                }), n("circle", {
                    attrs: {
                        cx: "175",
                        cy: "98",
                        r: "21.5",
                        fill: "none",
                        "stroke-miterlimit": "10",
                        "stroke-width": "25"
                    }
                }), n("circle", {
                    attrs: {
                        cx: "255",
                        cy: "98",
                        r: "21.5",
                        fill: "none",
                        "stroke-miterlimit": "10",
                        "stroke-width": "25"
                    }
                }), n("path", {
                    attrs: {
                        fill: "none",
                        "stroke-linecap": "round",
                        "stroke-miterlimit": "10",
                        "stroke-width": "25",
                        d: "M289.97 443.97l52.39-196.47"
                    }
                }), n("path", {
                    attrs: {
                        d: "M239.12 289.39l-62.12 58 65.46 61.09M397.88 289.05L460 347l-65.46 61.09",
                        fill: "none",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "25"
                    }
                })])]))
            }
        }
          , Gt = {
            name: "SkillsSection",
            components: {
                Section: B,
                SkillBox: Lt,
                Intersect: E["a"]
            },
            data: function() {
                return {
                    webDevSkills: Vt,
                    engSkills: Ht,
                    animate: !1,
                    webLogo: Ut,
                    cpuLogo: qt
                }
            }
        }
          , Rt = Gt
          , Qt = (n("007d"),
        n("76d7"),
        Object(f["a"])(Rt, St, xt, !1, null, "e7673c0c", null))
          , Wt = Qt.exports
          , Yt = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("Section", {
                attrs: {
                    id: "project",
                    header: "Projects"
                }
            }, [n("div", {
                staticClass: "projects"
            }, [t._l(t.projects, function(t) {
                return n("Project", {
                    key: t.name,
                    staticClass: "mainProject",
                    attrs: {
                        project: t
                    }
                })
            }), n("Collapser", {
                attrs: {
                    collapsed: t.moreCollapsed
                }
            }, t._l(t.projectsExtra, function(t, e) {
                return n("Project", {
                    key: e,
                    staticClass: "extraProject",
                    attrs: {
                        project: t
                    }
                })
            }), 1), n("Button", {
                staticClass: "showMore",
                nativeOn: {
                    click: function(e) {
                        return t.showMore(e)
                    }
                }
            }, [t._v(t._s(t.showMoreText))])], 2)])
        }
          , Xt = []
          , Zt = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("FadeIn", [n("div", {
                staticClass: "project"
            }, [n("Picture", {
                staticClass: "picture",
                attrs: {
                    src: t.project.img,
                    alt: t.project.imgAlt,
                    ext: t.project.imgExt || "png"
                }
            }), n("div", {
                staticClass: "projText"
            }, [n("h2", [t._v(t._s(t.project.name))]), n("p", [t._v(t._s(t.project.description))]), n("ul", {
                staticClass: "projTags"
            }, t._l(t.project.tags, function(e, i) {
                return n("li", {
                    key: i
                }, [t._v(t._s(e))])
            }), 0), t.project.link ? n("Button", {
                staticClass: "button",
                attrs: {
                    href: t.project.link.href,
                    target: "_blank"
                }
            }, [t._v("\n        " + t._s(t.project.link.text) + "\n      ")]) : t._e(), t._t("default")], 2)], 1)])
        }
          , Kt = []
          , te = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("Intersect", {
                attrs: {
                    threshold: [.6]
                },
                on: {
                    "~enter": function(e) {
                        return t.animate(e)
                    }
                }
            }, [n("div", {
                staticClass: "animateContainer",
                class: {
                    animated: t.animated,
                    right: "right" == t.direction
                }
            }, [t._t("default")], 2)])
        }
          , ee = []
          , ne = {
            name: "FadeIn",
            components: {
                Intersect: E["a"]
            },
            props: {
                threshold: {
                    type: Array,
                    default: function() {
                        return [.6]
                    }
                },
                direction: {
                    type: String,
                    default: "left"
                },
                toAnimate: {
                    type: Boolean,
                    default: !1
                },
                enabled: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    animatedInternal: !1
                }
            },
            computed: {
                animated: function() {
                    return this.animatedInternal || this.toAnimate
                }
            },
            methods: {
                animate: function() {
                    this.enabled && (this.animatedInternal = !0,
                    this.$emit("animate"))
                }
            }
        }
          , ie = ne
          , ae = (n("6125"),
        Object(f["a"])(ie, te, ee, !1, null, "36201fdf", null))
          , se = ae.exports
          , re = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("a", [t._t("default")], 2)
        }
          , oe = []
          , ce = {
            name: "Button",
            props: {
                text: {
                    type: String,
                    default: ""
                },
                symbol: {
                    type: String,
                    default: ""
                }
            }
        }
          , le = ce
          , ue = (n("b3f8"),
        Object(f["a"])(le, re, oe, !1, null, "ff71103c", null))
          , de = ue.exports
          , pe = {
            name: "Project",
            components: {
                FadeIn: se,
                Button: de,
                Picture: gt
            },
            props: {
                project: {
                    type: Object,
                    default: function() {
                        return {
                            name: "",
                            img: "",
                            imgAlt: "",
                            description: "",
                            tags: []
                        }
                    }
                }
            }
        }
          , he = pe
          , fe = (n("edc3"),
        n("db7e"),
        Object(f["a"])(he, Zt, Kt, !1, null, "4d8b37b1", null))
          , ve = fe.exports
          , me = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                ref: "collapser",
                staticClass: "collapser"
            }, [t._t("default")], 2)
        }
          , ye = []
          , ge = {
            name: "Collapser",
            props: {
                collapsed: {
                    type: Boolean,
                    default: !1
                }
            },
            watch: {
                collapsed: function(t, e) {
                    e && !t ? this.expand() : !e && t && this.collapse()
                }
            },
            mounted: function() {
                var t = this.$refs.collapser;
                t.style.height = "0px"
            },
            methods: {
                expand: function() {
                    var t = this
                      , e = this.$refs.collapser
                      , n = e.scrollHeight;
                    e.style.height = n + "px";
                    var i = function n() {
                        e.removeEventListener("transitionend", n),
                        e.style.height = null,
                        t.hidden = !1
                    };
                    e.addEventListener("transitionend", i)
                },
                collapse: function() {
                    var t = this
                      , e = this.$refs.collapser
                      , n = e.scrollHeight
                      , i = e.style.transition;
                    e.style.transition = "",
                    requestAnimationFrame(function() {
                        e.style.height = n + "px",
                        e.style.transition = i,
                        requestAnimationFrame(function() {
                            e.style.height = "0px",
                            t.hidden = !0
                        })
                    })
                }
            }
        }
          , be = ge
          , Oe = (n("79ff"),
        Object(f["a"])(be, me, ye, !1, null, "d6c04b50", null))
          , we = Oe.exports
          , je = n("aad6")
          , Se = n("4766")
          , xe = {
            name: "ProjectsSection",
            components: {
                Section: B,
                Project: ve,
                Collapser: we,
                Button: de
            },
            data: function() {
                return {
                    moreCollapsed: !0,
                    projects: je,
                    projectsExtra: Se
                }
            },
            computed: {
                showMoreText: function() {
                    return this.moreCollapsed ? "Show More" : "Show Less"
                }
            },
            methods: {
                showMore: function() {
                    this.moreCollapsed = !this.moreCollapsed
                }
            }
        }
          , Ce = xe
          , ke = (n("d8f6"),
        n("018f"),
        Object(f["a"])(Ce, Yt, Xt, !1, null, "8e5a709e", null))
          , Pe = ke.exports
          , _e = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("Section", {
                attrs: {
                    id: "education",
                    header: "Work & Education",
                    coloured: !0
                }
            }, [n("div", {
                staticClass: "edContainer"
            }, [n("div", {
                staticClass: "segment industry"
            }, [n("briefcaseLogo"), n("h3", [t._v("Industry")]), n("div", {
                staticClass: "timelineContainer"
            }, [n("Timeline", {
                attrs: {
                    data: t.industryHistory
                }
            })], 1)], 1), n("div", {
                staticClass: "segment academic"
            }, [n("gradHatLogo"), n("h3", [t._v("Academic")]), n("div", {
                staticClass: "timelineContainer"
            }, [n("Timeline", {
                attrs: {
                    data: t.academicHistory
                }
            })], 1)], 1)])])
        }
          , Ee = []
          , Ie = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "timeline"
            }, [n("div", {
                staticClass: "line"
            }), n("div", {
                staticClass: "timelineElements"
            }, t._l(t.data, function(t, e) {
                return n("TimelineSegment", {
                    key: e,
                    attrs: {
                        data: t
                    }
                })
            }), 1)])
        }
          , Ae = []
          , Me = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("FadeIn", {
                staticClass: "timelineSegment",
                attrs: {
                    direction: "right"
                }
            }, [n("div", {
                staticClass: "arrow"
            }), n("div", {
                staticClass: "text"
            }, [n("h3", {
                staticClass: "title"
            }, [t._v(t._s(t.data.title))]), n("h4", {
                staticClass: "date"
            }, [t._v(t._s(t.data.date))]), n("p", {
                staticClass: "description"
            }, [t._v(t._s(t.data.description))])])])
        }
          , Te = []
          , De = {
            name: "TimelineSegment",
            components: {
                FadeIn: se
            },
            props: {
                data: {
                    type: Object,
                    default: function() {}
                }
            }
        }
          , Be = De
          , Le = (n("a62c"),
        Object(f["a"])(Be, Me, Te, !1, null, "c7608826", null))
          , Ve = Le.exports
          , He = {
            name: "Timeline",
            components: {
                TimelineSegment: Ve
            },
            props: {
                data: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            }
        }
          , $e = He
          , ze = (n("ef84"),
        Object(f["a"])($e, Ie, Ae, !1, null, "9d9abaf6", null))
          , Fe = ze.exports
          , qe = n("e9dc")
          , Je = n("3c2f");
        function Ne(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                n.push.apply(n, i)
            }
            return n
        }
        function Ue(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ne(n, !0).forEach(function(e) {
                    Object(R["a"])(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ne(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        var Ge = {
            functional: !0,
            render: function(t, e) {
                var n = e._c
                  , i = (e._v,
                e.data)
                  , a = e.children
                  , s = void 0 === a ? [] : a
                  , r = i.class
                  , o = i.staticClass
                  , c = i.style
                  , l = i.staticStyle
                  , u = i.attrs
                  , d = void 0 === u ? {} : u
                  , p = Object($t["a"])(i, ["class", "staticClass", "style", "staticStyle", "attrs"]);
                return n("svg", Ue({
                    class: [r, o],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 349.2 349.2"
                    }, d)
                }, p), s.concat([n("path", {
                    attrs: {
                        d: "M337.6 114.25l-139.2-68c-12-6-32.4-6-44.4 0l-142.4 68c-10 4.8-11.6 11.6-11.6 15.2 0 3.6 1.6 10 11.6 15.2l11.6 5.6v64c-7.2 2.8-12.4 10-12.4 18s5.2 15.2 12 18l-18 57.2h50.4l-18-57.2c7.2-2.8 12-10 12-18 0-8.4-5.2-15.2-12.4-18v-57.2l21.2 10.4v83.2c0 1.2.4 2.4 1.2 3.6 2 2.4 39.2 53.2 115.2 53.2s113.2-51.2 114.8-53.2c.8-1.2 1.2-2.4 1.2-3.6v-82.8l47.2-23.2c10-4.8 11.6-11.6 11.6-15.2-.4-3.6-1.6-10.4-11.6-15.2zm-60 134.4c-6.4 8-40.8 46.4-103.2 46.4-62.4 0-96.8-38.4-103.2-46.4v-75.6l82.8 39.6c6 2.8 14 4.4 22 4.4 8.4 0 16.4-1.6 22.4-4.8l79.2-38.8v75.2zm54.4-115.2l-48 23.6c-2 0-3.6.8-4.4 2.4l-86.8 42c-8.4 4.4-24.8 4.4-33.6 0l-106.8-51.2 122.8-14.4c3.6-.4 6-3.6 5.6-6.8-.4-3.6-3.6-6-6.8-5.6l-142.4 16.8-14.4-6.8c-3.6-1.6-4.4-3.6-4.4-3.6 0-.4.8-2 4.4-3.6l142.4-68.4c4.4-2 10.4-3.2 16.4-3.2 6.4 0 12.8 1.2 16.8 3.2l139.2 68c3.6 1.6 4.4 3.2 4.4 4 0 0-1.2 2-4.4 3.6z"
                    }
                })]))
            }
        };
        function Re(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                n.push.apply(n, i)
            }
            return n
        }
        function Qe(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Re(n, !0).forEach(function(e) {
                    Object(R["a"])(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Re(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        var We = {
            functional: !0,
            render: function(t, e) {
                var n = e._c
                  , i = (e._v,
                e.data)
                  , a = e.children
                  , s = void 0 === a ? [] : a
                  , r = i.class
                  , o = i.staticClass
                  , c = i.style
                  , l = i.staticStyle
                  , u = i.attrs
                  , d = void 0 === u ? {} : u
                  , p = Object($t["a"])(i, ["class", "staticClass", "style", "staticStyle", "attrs"]);
                return n("svg", Qe({
                    class: [r, o],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 512 512"
                    }, d)
                }, p), s.concat([n("path", {
                    attrs: {
                        d: "M469.333 106.667H362.667V85.333c0-23.531-19.135-42.667-42.667-42.667H192c-23.531 0-42.667 19.135-42.667 42.667v21.333H42.667C19.135 106.667 0 125.802 0 149.333v277.333c0 23.531 19.135 42.667 42.667 42.667h426.667c23.531 0 42.667-19.135 42.667-42.667V149.333c-.001-23.531-19.136-42.666-42.668-42.666zM170.667 85.333C170.667 73.573 180.24 64 192 64h128c11.76 0 21.333 9.573 21.333 21.333v21.333H170.667V85.333zm320 341.334c0 11.76-9.573 21.333-21.333 21.333H42.667c-11.76 0-21.333-9.573-21.333-21.333V271.4c6.301 3.674 13.527 5.934 21.333 5.934h170.667v32a10.66 10.66 0 0010.667 10.667h64a10.66 10.66 0 0010.667-10.667v-32h170.667c7.806 0 15.033-2.259 21.333-5.934v155.267zm-256-128V256h42.667v42.667h-42.667zm256-64c0 11.76-9.573 21.333-21.333 21.333H298.667v-10.667A10.66 10.66 0 00288 234.666h-64a10.66 10.66 0 00-10.667 10.667V256H42.667c-11.76 0-21.333-9.573-21.333-21.333v-85.333c0-11.76 9.573-21.333 21.333-21.333h426.667c11.76 0 21.333 9.573 21.333 21.333v85.333z"
                    }
                })]))
            }
        }
          , Ye = {
            name: "EducationSection",
            components: {
                Section: B,
                gradHatLogo: Ge,
                Timeline: Fe,
                briefcaseLogo: We
            },
            data: function() {
                return {
                    industryHistory: qe,
                    academicHistory: Je,
                    showFullTimeline: !1
                }
            },
            computed: {}
        }
          , Xe = Ye
          , Ze = (n("9233"),
        n("f64f"),
        Object(f["a"])(Xe, _e, Ee, !1, null, "ed0d46fe", null))
          , Ke = Ze.exports
          , tn = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("Section", {
                attrs: {
                    id: "contact",
                    header: "Contact Me"
                }
            }, [n("div", {
                staticClass: "contactInfo"
            }, [n("p", [t._v("\n      Please, don't hestitate to contact me through any of the options below.\n      I'd love to hear from you!\n    ")]), n("div", {
                attrs: {
                    id: "contactLinks"
                }
            }, t._l(t.contacts, function(e) {
                return n("ContactLink", t._b({
                    key: e.text
                }, "ContactLink", e, !1))
            }), 1)])])
        }
          , en = []
          , nn = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "contactLink"
            }, [n("a", {
                attrs: {
                    href: t.link,
                    target: "_blank"
                }
            }, [n(t.logo, {
                tag: "component"
            })], 1), n("p", {
                staticClass: "iconSub"
            }, [t._v(t._s(t.text))])])
        }
          , an = []
          , sn = {
            name: "ContactLink",
            props: {
                link: {
                    type: String,
                    default: ""
                },
                text: {
                    type: String,
                    default: ""
                },
                logo: {
                    type: Object,
                    default: null
                }
            }
        }
          , rn = sn
          , on = (n("88dc"),
        Object(f["a"])(rn, nn, an, !1, null, "e7ff38e8", null))
          , cn = on.exports;
        function ln(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                n.push.apply(n, i)
            }
            return n
        }
        function un(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ln(n, !0).forEach(function(e) {
                    Object(R["a"])(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ln(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        var dn = {
            functional: !0,
            render: function(t, e) {
                var n = e._c
                  , i = (e._v,
                e.data)
                  , a = e.children
                  , s = void 0 === a ? [] : a
                  , r = i.class
                  , o = i.staticClass
                  , c = i.style
                  , l = i.staticStyle
                  , u = i.attrs
                  , d = void 0 === u ? {} : u
                  , p = Object($t["a"])(i, ["class", "staticClass", "style", "staticStyle", "attrs"]);
                return n("svg", un({
                    class: ["svg-inline--fa fa-linkedin-in fa-w-14", r, o],
                    style: [c, l],
                    attrs: Object.assign({
                        "aria-hidden": "true",
                        "data-prefix": "fab",
                        "data-icon": "linkedin-in",
                        class: "svg-inline--fa fa-linkedin-in fa-w-14",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 448 512"
                    }, d)
                }, p), s.concat([n("path", {
                    attrs: {
                        fill: "currentColor",
                        d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    }
                })]))
            }
        };
        function pn(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                n.push.apply(n, i)
            }
            return n
        }
        function hn(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? pn(n, !0).forEach(function(e) {
                    Object(R["a"])(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : pn(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        var fn = {
            functional: !0,
            render: function(t, e) {
                var n = e._c
                  , i = (e._v,
                e.data)
                  , a = e.children
                  , s = void 0 === a ? [] : a
                  , r = i.class
                  , o = i.staticClass
                  , c = i.style
                  , l = i.staticStyle
                  , u = i.attrs
                  , d = void 0 === u ? {} : u
                  , p = Object($t["a"])(i, ["class", "staticClass", "style", "staticStyle", "attrs"]);
                return n("svg", hn({
                    class: ["svg-inline--fa fa-envelope fa-w-16", r, o],
                    style: [c, l],
                    attrs: Object.assign({
                        "aria-hidden": "true",
                        "data-prefix": "far",
                        "data-icon": "envelope",
                        class: "svg-inline--fa fa-envelope fa-w-16",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 512 512"
                    }, d)
                }, p), s.concat([n("path", {
                    attrs: {
                        fill: "currentColor",
                        d: "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                    }
                })]))
            }
        };
        function vn(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                n.push.apply(n, i)
            }
            return n
        }
        function mn(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? vn(n, !0).forEach(function(e) {
                    Object(R["a"])(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : vn(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        var yn = {
            functional: !0,
            render: function(t, e) {
                var n = e._c
                  , i = (e._v,
                e.data)
                  , a = e.children
                  , s = void 0 === a ? [] : a
                  , r = i.class
                  , o = i.staticClass
                  , c = i.style
                  , l = i.staticStyle
                  , u = i.attrs
                  , d = void 0 === u ? {} : u
                  , p = Object($t["a"])(i, ["class", "staticClass", "style", "staticStyle", "attrs"]);
                return n("svg", mn({
                    class: ["svg-inline--fa fa-github fa-w-16", r, o],
                    style: [c, l],
                    attrs: Object.assign({
                        "aria-hidden": "true",
                        "data-prefix": "fab",
                        "data-icon": "github",
                        class: "svg-inline--fa fa-github fa-w-16",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 496 512"
                    }, d)
                }, p), s.concat([n("path", {
                    attrs: {
                        fill: "currentColor",
                        d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    }
                })]))
            }
        };
        function gn(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                n.push.apply(n, i)
            }
            return n
        }
        function bn(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? gn(n, !0).forEach(function(e) {
                    Object(R["a"])(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : gn(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        var On = {
            functional: !0,
            render: function(t, e) {
                var n = e._c
                  , i = (e._v,
                e.data)
                  , a = e.children
                  , s = void 0 === a ? [] : a
                  , r = i.class
                  , o = i.staticClass
                  , c = i.style
                  , l = i.staticStyle
                  , u = i.attrs
                  , d = void 0 === u ? {} : u
                  , p = Object($t["a"])(i, ["class", "staticClass", "style", "staticStyle", "attrs"]);
                return n("svg", bn({
                    class: ["svg-inline--fa fa-medium-m fa-w-16", r, o],
                    style: [c, l],
                    attrs: Object.assign({
                        "aria-hidden": "true",
                        "data-prefix": "fab",
                        "data-icon": "medium-m",
                        class: "svg-inline--fa fa-medium-m fa-w-16",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 512 512"
                    }, d)
                }, p), s.concat([n("path", {
                    attrs: {
                        fill: "currentColor",
                        d: "M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"
                    }
                })]))
            }
        }
          , wn = {
            name: "ContactSection",
            components: {
                ContactLink: cn,
                Section: B
            },
            data: function() {
                return {
                    contacts: [{
                        text: "Linkedin",
                        logo: dn,
                        link: "https://www.linkedin.com/in/aaron-coox/"
                    }, {
                        text: "Email",
                        logo: fn,
                        link: "mailto:aaron.coox@outlook.com"
                    }, {
                        text: "GitHub",
                        logo: yn,
                        link: "https://github.com/Belgiumese/"
                    }, {
                        text: "Medium",
                        logo: On,
                        link: "https://medium.com/@thebelgiumesekid"
                    }]
                }
            }
        }
          , jn = wn
          , Sn = (n("25e0"),
        Object(f["a"])(jn, tn, en, !1, null, "985498bc", null))
          , xn = Sn.exports
          , Cn = n("7707")
          , kn = n.n(Cn);
        kn.a.polyfill(),
        n("5abe");
        var Pn = {
            name: "App",
            components: {
                Navbar: k,
                LandingSection: ut,
                AboutSection: jt,
                SkillsSection: Wt,
                ProjectsSection: Pe,
                EducationSection: Ke,
                ContactSection: xn
            },
            data: function() {
                return {
                    isScrolled: !1,
                    active: 0,
                    pages: ["home", "about", "skills", "project", "education", "contact"]
                }
            },
            computed: {
                activePage: function() {
                    return this.pages[this.active]
                },
                isScrolledFully: function() {
                    return 0 != this.active
                }
            },
            mounted: function() {
                var t = this
                  , e = new IntersectionObserver(this.sectionScrollBack,{
                    threshold: .2
                });
                this.pages.forEach(function(n) {
                    e.observe(t.$refs[n].$el)
                })
            },
            methods: {
                onEnter: function(t) {
                    t[0].intersectionRatio > .8 ? this.isScrolled = !1 : this.isScrolled = !0
                },
                onLeave: function() {
                    this.isScrolled = !0
                },
                sectionScrollBack: function(t) {
                    var e = !0
                      , n = !1
                      , i = void 0;
                    try {
                        for (var a, s = t[Symbol.iterator](); !(e = (a = s.next()).done); e = !0) {
                            var r = a.value;
                            !r.target.id || r.boundingClientRect.top > 0 || (r.isIntersecting ? this.active = this.pages.indexOf(r.target.id) : this.active = this.pages.indexOf(r.target.id) + 1)
                        }
                    } catch (o) {
                        n = !0,
                        i = o
                    } finally {
                        try {
                            e || null == s.return || s.return()
                        } finally {
                            if (n)
                                throw i
                        }
                    }
                }
            }
        }
          , _n = Pn
          , En = (n("5c0b"),
        Object(f["a"])(_n, a, s, !1, null, null, null))
          , In = En.exports;
        i["a"].config.productionTip = !1,
        new i["a"]({
            render: function(t) {
                return t(In)
            }
        }).$mount("#app")
    },
    "5c0b": function(t, e, n) {
        "use strict";
        var i = n("e332")
          , a = n.n(i);
        a.a
    },
    6125: function(t, e, n) {
        "use strict";
        var i = n("a250")
          , a = n.n(i);
        a.a
    },
    "614c": function(t, e, n) {
        "use strict";
        var i = n("7107")
          , a = n.n(i);
        a.a
    },
    7107: function(t, e, n) {},
    7345: function(t, e, n) {},
    "76d7": function(t, e, n) {
        "use strict";
        var i = n("2e9c")
          , a = n.n(i);
        a.a
    },
    "79ff": function(t, e, n) {
        "use strict";
        var i = n("7b25")
          , a = n.n(i);
        a.a
    },
    "7b25": function(t, e, n) {},
    "840f": function(t, e, n) {
        "use strict";
        var i = n("cc28")
          , a = n.n(i);
        a.a
    },
    8539: function(t, e, n) {},
    "88dc": function(t, e, n) {
        "use strict";
        var i = n("e12d")
          , a = n.n(i);
        a.a
    },
    "920a": function(t, e, n) {},
    9233: function(t, e, n) {
        "use strict";
        var i = n("0dac")
          , a = n.n(i);
        a.a
    },
    9383: function(t, e, n) {
        "use strict";
        var i = n("e079")
          , a = n.n(i);
        a.a
    },
    "94ac": function(t, e, n) {},
    "9c75": function(t, e, n) {},
    "9fd8": function(t, e, n) {
        "use strict";
        var i = n("a5fa")
          , a = n.n(i);
        a.a
    },
    a250: function(t, e, n) {},
    a5fa: function(t, e, n) {},
    a62c: function(t, e, n) {
        "use strict";
        var i = n("7345")
          , a = n.n(i);
        a.a
    },
    aad6: function(t) {
        t.exports = JSON.parse('[{"name":"SpotiSearch","img":"img/projects/spotisearch","imgAlt":"Spotisearch","tags":["Serverless","Vue.js","OAuth 2.0"],"description":"I individually designed, created, and published a website which provides powerful filtering and playlist automation functionality for Spotify users. Made using Vue.JS, the public Spotify API, and OAuth 2.0 authentication. It was designed as a demonstration of my front-end abilities.","link":{"text":"Visit Site","href":"https://spotisearch.com/"}},{"name":"RemindMe IOT Assistant","img":"img/projects/cube","imgAlt":"Glowing cube with button","imgExt":"jpg","tags":["AWS Lambda","Embedded C","Alexa"],"description":"I designed the RemindMe cube prototype to assist dementia patients with their daily routine by providing a compact cloud-enabled cube. The cube can be set to softly pulse and play music at certain times of day, or based on smart-home triggers (such as a positional sensor) to remind the patient of their goal. I implemented it with an IOT-enabled microcontroller and full Alexa integration through Amazon AWS.","link":{"text":"Visit Article","href":"https://medium.com/@thebelgiumesekid/how-to-create-an-alexa-enabled-smart-home-with-particle-photon-part-1-d8c4da3702e9"}},{"name":"ColoChat Chatbot","img":"img/projects/colo","imgAlt":"ColoChat website","tags":["Natural Language Processing","Serverless","Vue.js"],"description":"Colochat is an interactive web-app which inspires an interest in Aboriginal languages. Children are able to talk to Colo and ask for translations, quizzes, etc. I used Google\'s DialogFlow API for advanced natural language processing as well as Firebase Functions for the server. The front-end was done in Vue.","link":{"text":"Visit Site","href":"https://colochat.netlify.com/"}},{"name":"UQ GIT EdX Course","img":"img/projects/edxcourse","imgAlt":"edX Course website","tags":["Version Control","GIT"],"description":"I wrote a large section of UQ’s official GIT version control online course. This online course will be used to teach GIT to every engineering and IT student at UQ from next semester onwards. My task included writing explanations on command-line functionality & core concepts and creating tutorial videos."}]')
    },
    ac55: function(t, e, n) {},
    aefe: function(t, e, n) {},
    b3f8: function(t, e, n) {
        "use strict";
        var i = n("dc11")
          , a = n.n(i);
        a.a
    },
    b6cc: function(t) {
        t.exports = JSON.parse('{"description":"I\'m a stickler for effiency, so I take any opportunity to dive into some low-level C programming. I\'ve done some internships writing C, and teach it at UQ.","skills":[{"name":"C (Windows and Linux)","level":5},{"name":"Embedded Systems (STM32, Atmel)","level":3},{"name":"Linux & Bash","level":6,"description":""},{"name":"IOT With AWS & Particle.io","level":3}]}')
    },
    be4b: function(t, e, n) {
        "use strict";
        var i = n("f512")
          , a = n.n(i);
        a.a
    },
    c4e0: function(t, e, n) {
        "use strict";
        var i = n("920a")
          , a = n.n(i);
        a.a
    },
    c824: function(t, e, n) {},
    c94a: function(t, e, n) {
        "use strict";
        var i = n("fc30")
          , a = n.n(i);
        a.a
    },
    cb5d: function(t, e, n) {
        "use strict";
        var i = n("d2d6")
          , a = n.n(i);
        a.a
    },
    cc05: function(t, e, n) {
        "use strict";
        var i = n("e3c8")
          , a = n.n(i);
        a.a
    },
    cc28: function(t, e, n) {},
    cff0: function(t, e, n) {
        "use strict";
        var i = n("e120")
          , a = n.n(i);
        a.a
    },
    d2d6: function(t, e, n) {},
    d8f6: function(t, e, n) {
        "use strict";
        var i = n("f92c")
          , a = n.n(i);
        a.a
    },
    db7e: function(t, e, n) {
        "use strict";
        var i = n("8539")
          , a = n.n(i);
        a.a
    },
    dc11: function(t, e, n) {},
    e079: function(t, e, n) {},
    e120: function(t, e, n) {},
    e12d: function(t, e, n) {},
    e332: function(t, e, n) {},
    e3c8: function(t, e, n) {},
    e9dc: function(t) {
        t.exports = JSON.parse('[{"date":"Jun 2019 - Sep 2019","title":"Software Engineer Intern @Infosys, India","description":"I completed a Robotics intership in India with Infosys, a global IT company. I researched and implemented a co-operative pathfinding algorithm in low-cost robotics."},{"date":"Nov 2018 - Dec 2018","title":"Cyber Security Intern @Cympire, Israel","description":"I wrote a fully automated Windows Kerberos Vulnerability exploit in C. I also created an Azure infrastructure to execute this vulnerability on, able to be automatically deployed through PowerShell."},{"date":"Apr 2018 - Feb 2019","title":"Front-end Developer @GBST, Brisbane","description":"I worked as a front-end developer with GBST on financial graphing using Vue.js and D3.js. I also briefly worked with React."}]')
    },
    edc3: function(t, e, n) {
        "use strict";
        var i = n("c824")
          , a = n.n(i);
        a.a
    },
    ef84: function(t, e, n) {
        "use strict";
        var i = n("5249")
          , a = n.n(i);
        a.a
    },
    f512: function(t, e, n) {},
    f64f: function(t, e, n) {
        "use strict";
        var i = n("fe29")
          , a = n.n(i);
        a.a
    },
    f92c: function(t, e, n) {},
    fc30: function(t, e, n) {},
    fe29: function(t, e, n) {}
});
//# sourceMappingURL=app.0236c0c7.js.map
