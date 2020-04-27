//tealium universal tag - utag.loader ut4.0.202003250940, Copyright 2020 Tealium.com Inc. All Rights Reserved.
if (typeof utag_err == 'undefined') var utag_err = [];
window._tealium_old_error = window._tealium_old_error || window.onerror || function() {};
window.onerror = function(m, u, l) {
    if (typeof u !== 'undefined' && u.indexOf('/utag.') > 0 && utag_err.length < 5) utag_err.push({
        e: m,
        s: u,
        l: l,
        t: 'js'
    });
    window._tealium_old_error(m, u, l)
};
var utag_condload = false;
try {
    (function() {
        function ul(src, a, b) {
            a = document;
            b = a.createElement('script');
            b.language = 'javascript';
            b.type = 'text/javascript';
            b.src = src;
            a.getElementsByTagName('head')[0].appendChild(b)
        };
        if (("" + document.cookie).match("utag_env_adidas_yeezysupplyglobal=(\/\/tags\.tiqcdn\.com\/utag\/adidas\/[^\S;]*)")) {
            if (RegExp.$1.indexOf("/prod/") === -1) {
                var s = RegExp.$1;
                while (s.indexOf("%") != -1) {
                    s = decodeURIComponent(s);
                }
                s = s.replace(/\.\./g, "");
                ul(s);
                utag_condload = true;
                __tealium_default_path = '//tags.tiqcdn.com/utag/adidas/yeezysupplyglobal/prod/';
            }
        }
    })();
} catch (e) {};
try {
    window.utag_data = window.utag_data || {};
} catch (e) {};
if (!utag_condload) {
    try {
        if (!window.Array) {
            window.Array = {};
        }
        if (!window.Array.isArray) {
            window.Array.isArray = function(someVar) {
                return (Object.prototype.toString.call(someVar) === '[object Array]') ? true : false;
            };
        }
    } catch (e) {}
};
if (!utag_condload) {
    try {
        window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
        utag_cfg_ovrd.dom_complete = true;
    } catch (e) {}
};
if (!utag_condload) {
    try {
        try {
            var forms = document.getElementsByTagName('form');
            for (var i = 0; i < forms.length; i++) {
                forms[i].addEventListener("click", function(e) {
                    for (var target = e.target; target && target != this; target = target.parentNode) {
                        if (typeof(target) != 'undefined' && typeof(target.matches) != 'undefined' && target.matches('a, button')) {
                            var start = new Date().getTime(),
                                milliseconds = 50;
                            while (new Date().getTime() - milliseconds <= start) {
                                continue;
                            }
                            return true;
                        }
                    }
                }, false);
            }
        } catch (ex) {}
    } catch (e) {}
};
if (typeof utag == "undefined" && !utag_condload) {
    var utag = {
        id: "adidas.yeezysupplyglobal",
        o: {},
        sender: {},
        send: {},
        rpt: {
            ts: {
                a: new Date()
            }
        },
        dbi: [],
        db_log: [],
        loader: {
            q: [],
            lc: 0,
            f: {},
            p: 0,
            ol: 0,
            wq: [],
            lq: [],
            bq: {},
            bk: {},
            rf: 0,
            ri: 0,
            rp: 0,
            rq: [],
            ready_q: [],
            sendq: {
                "pending": 0
            },
            run_ready_q: function() {
                for (var i = 0; i < utag.loader.ready_q.length; i++) {
                    utag.DB("READY_Q:" + i);
                    try {
                        utag.loader.ready_q[i]()
                    } catch (e) {
                        utag.DB(e)
                    };
                }
            },
            lh: function(a, b, c) {
                a = "" + location.hostname;
                b = a.split(".");
                c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\.|\...\.jp$/.test(a)) ? 3 : 2;
                return b.splice(b.length - c, c).join(".");
            },
            WQ: function(a, b, c, d, g) {
                utag.DB('WQ:' + utag.loader.wq.length);
                try {
                    if (utag.udoname && utag.udoname.indexOf(".") < 0) {
                        utag.ut.merge(utag.data, window[utag.udoname], 0);
                    }
                    if (utag.cfg.load_rules_at_wait) {
                        utag.handler.LR(utag.data);
                    }
                } catch (e) {
                    utag.DB(e)
                };
                d = 0;
                g = [];
                for (a = 0; a < utag.loader.wq.length; a++) {
                    b = utag.loader.wq[a];
                    b.load = utag.loader.cfg[b.id].load;
                    if (b.load == 4) {
                        this.f[b.id] = 0;
                        utag.loader.LOAD(b.id)
                    } else if (b.load > 0) {
                        g.push(b);
                        d++;
                    } else {
                        this.f[b.id] = 1;
                    }
                }
                for (a = 0; a < g.length; a++) {
                    utag.loader.AS(g[a]);
                }
                if (d == 0) {
                    utag.loader.END();
                }
            },
            AS: function(a, b, c, d) {
                utag.send[a.id] = a;
                if (typeof a.src == 'undefined') {
                    a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'ut' + 'ag.' + a.id + '.js')
                }
                a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v ? utag.cfg.template + a.v : utag.cfg.v);
                utag.rpt['l_' + a.id] = a.src;
                b = document;
                this.f[a.id] = 0;
                if (a.load == 2) {
                    utag.DB("Attach sync: " + a.src);
                    a.uid = a.id;
                    b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
                    if (typeof a.cb != 'undefined') a.cb();
                } else if (a.load == 1 || a.load == 3) {
                    if (b.createElement) {
                        c = 'utag_adidas.yeezysupplyglobal_' + a.id;
                        if (!b.getElementById(c)) {
                            d = {
                                src: a.src,
                                id: c,
                                uid: a.id,
                                loc: a.loc
                            }
                            if (a.load == 3) {
                                d.type = "iframe"
                            };
                            if (typeof a.cb != 'undefined') d.cb = a.cb;
                            utag.ut.loader(d);
                        }
                    }
                }
            },
            GV: function(a, b, c) {
                b = {};
                for (c in a) {
                    if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
                }
                return b
            },
            OU: function(tid, tcat, a, b, c, d, f, g) {
                g = {};
                utag.loader.RDcp(g);
                try {
                    if (typeof g['cp.OPTOUTMULTI'] != 'undefined') {
                        c = utag.loader.cfg;
                        a = utag.ut.decode(g['cp.OPTOUTMULTI']).split('|');
                        for (d = 0; d < a.length; d++) {
                            b = a[d].split(':');
                            if (b[1] * 1 !== 0) {
                                if (b[0].indexOf('c') == 0) {
                                    for (f in utag.loader.GV(c)) {
                                        if (c[f].tcat == b[0].substring(1)) c[f].load = 0;
                                        if (c[f].tid == tid && c[f].tcat == b[0].substring(1)) return true;
                                    }
                                    if (tcat == b[0].substring(1)) return true;
                                } else if (b[0] * 1 == 0) {
                                    utag.cfg.nocookie = true
                                } else {
                                    for (f in utag.loader.GV(c)) {
                                        if (c[f].tid == b[0]) c[f].load = 0
                                    }
                                    if (tid == b[0]) return true;
                                }
                            }
                        }
                    }
                } catch (e) {
                    utag.DB(e)
                }
                return false;
            },
            RDdom: function(o) {
                var d = document || {},
                    l = location || {};
                o["dom.referrer"] = d.referrer;
                o["dom.title"] = "" + d.title;
                o["dom.domain"] = "" + l.hostname;
                o["dom.query_string"] = ("" + l.search).substring(1);
                o["dom.hash"] = ("" + l.hash).substring(1);
                o["dom.url"] = "" + d.URL;
                o["dom.pathname"] = "" + l.pathname;
                o["dom.viewport_height"] = window.innerHeight || (d.documentElement ? d.documentElement.clientHeight : 960);
                o["dom.viewport_width"] = window.innerWidth || (d.documentElement ? d.documentElement.clientWidth : 960);
            },
            RDcp: function(o, b, c, d) {
                b = utag.loader.RC();
                for (d in b) {
                    if (d.match(/utag_(.*)/)) {
                        for (c in utag.loader.GV(b[d])) {
                            o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
                        }
                    }
                }
                for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) {
                    if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined") o["cp." + c] = b[c];
                }
            },
            RDqp: function(o, a, b, c) {
                a = location.search + (location.hash + '').replace("#", "&");
                if (utag.cfg.lowerqp) {
                    a = a.toLowerCase()
                };
                if (a.length > 1) {
                    b = a.substring(1).split('&');
                    for (a = 0; a < b.length; a++) {
                        c = b[a].split("=");
                        if (c.length > 1) {
                            o["qp." + c[0]] = utag.ut.decode(c[1])
                        }
                    }
                }
            },
            RDmeta: function(o, a, b, h) {
                a = document.getElementsByTagName("meta");
                for (b = 0; b < a.length; b++) {
                    try {
                        h = a[b].name || a[b].getAttribute("property") || "";
                    } catch (e) {
                        h = "";
                        utag.DB(e)
                    };
                    if (utag.cfg.lowermeta) {
                        h = h.toLowerCase()
                    };
                    if (h != "") {
                        o["meta." + h] = a[b].content
                    }
                }
            },
            RDva: function(o) {
                var readAttr = function(o, l) {
                    var a = "",
                        b;
                    a = localStorage.getItem(l);
                    if (!a || a == "{}") return;
                    b = utag.ut.flatten({
                        va: JSON.parse(a)
                    });
                    utag.ut.merge(o, b, 1);
                }
                try {
                    readAttr(o, "tealium_va");
                    readAttr(o, "tealium_va_" + o["ut.account"] + "_" + o["ut.profile"]);
                } catch (e) {
                    utag.DB(e)
                }
            },
            RDut: function(o, a) {
                var t = {};
                var d = new Date();
                var m = (utag.ut.typeOf(d.toISOString) == "function");
                o["ut.domain"] = utag.cfg.domain;
                o["ut.version"] = utag.cfg.v;
                t["tealium_event"] = o["ut.event"] = a || "view";
                t["tealium_visitor_id"] = o["ut.visitor_id"] = o["cp.utag_main_v_id"];
                t["tealium_session_id"] = o["ut.session_id"] = o["cp.utag_main_ses_id"];
                t["tealium_session_number"] = o["cp.utag_main__sn"];
                t["tealium_session_event_number"] = o["cp.utag_main__se"];
                try {
                    t["tealium_datasource"] = utag.cfg.datasource;
                    t["tealium_account"] = o["ut.account"] = utag.cfg.utid.split("/")[0];
                    t["tealium_profile"] = o["ut.profile"] = utag.cfg.utid.split("/")[1];
                    t["tealium_environment"] = o["ut.env"] = utag.cfg.path.split("/")[6];
                } catch (e) {
                    utag.DB(e)
                }
                t["tealium_random"] = Math.random().toFixed(16).substring(2);
                t["tealium_library_name"] = "ut" + "ag.js";
                t["tealium_library_version"] = (utag.cfg.template + "0").substring(2);
                t["tealium_timestamp_epoch"] = Math.floor(d.getTime() / 1000);
                t["tealium_timestamp_utc"] = (m ? d.toISOString() : "");
                d.setHours(d.getHours() - (d.getTimezoneOffset() / 60));
                t["tealium_timestamp_local"] = (m ? d.toISOString().replace("Z", "") : "");
                utag.ut.merge(o, t, 0);
            },
            RDses: function(o, a, c) {
                a = (new Date()).getTime();
                c = (a + parseInt(utag.cfg.session_timeout)) + "";
                if (!o["cp.utag_main_ses_id"]) {
                    o["cp.utag_main_ses_id"] = a + "";
                    o["cp.utag_main__ss"] = "1";
                    o["cp.utag_main__se"] = "1";
                    o["cp.utag_main__sn"] = (1 + parseInt(o["cp.utag_main__sn"] || 0)) + "";
                } else {
                    o["cp.utag_main__ss"] = "0";
                    o["cp.utag_main__se"] = (1 + parseInt(o["cp.utag_main__se"] || 0)) + "";
                }
                o["cp.utag_main__pn"] = o["cp.utag_main__pn"] || "1";
                o["cp.utag_main__st"] = c;
                utag.loader.SC("utag_main", {
                    "_sn": (o["cp.utag_main__sn"] || 1),
                    "_se": o["cp.utag_main__se"],
                    "_ss": o["cp.utag_main__ss"],
                    "_st": c,
                    "ses_id": (o["cp.utag_main_ses_id"] || a) + ";exp-session",
                    "_pn": o["cp.utag_main__pn"] + ";exp-session"
                });
            },
            RDpv: function(o) {
                if (typeof utag.pagevars == "function") {
                    utag.DB("Read page variables");
                    utag.pagevars(o);
                }
            },
            RD: function(o, a) {
                utag.DB("utag.loader.RD");
                utag.DB(o);
                utag.loader.RDcp(o);
                if (!utag.loader.rd_flag) {
                    utag.loader.rd_flag = 1;
                    o["cp.utag_main_v_id"] = o["cp.utag_main_v_id"] || utag.ut.vi((new Date()).getTime());
                    o["cp.utag_main__pn"] = (1 + parseInt(o["cp.utag_main__pn"] || 0)) + "";
                    utag.loader.SC("utag_main", {
                        "v_id": o["cp.utag_main_v_id"]
                    });
                    utag.loader.RDses(o);
                }
                if (a && !utag.cfg.noview) utag.loader.RDses(o);
                utag.loader.RDqp(o);
                utag.loader.RDmeta(o);
                utag.loader.RDdom(o);
                utag.loader.RDut(o, a || "view");
                utag.loader.RDpv(o);
                utag.loader.RDva(o);
            },
            RC: function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
                o = {};
                b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
                r = /^(.*?)=(.*)$/;
                s = /^(.*);exp-(.*)$/;
                t = (new Date()).getTime();
                for (c = 0; c < b.length; c++) {
                    if (b[c].match(r)) {
                        ck = RegExp.$1;
                        cv = RegExp.$2;
                    }
                    e = utag.ut.decode(cv);
                    if (typeof ck != "undefined") {
                        if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
                            e = cv.split("$");
                            g = [];
                            j = {};
                            for (f = 0; f < e.length; f++) {
                                try {
                                    g = e[f].split(":");
                                    if (g.length > 2) {
                                        g[1] = g.slice(1).join(":");
                                    }
                                    v = "";
                                    if (("" + g[1]).indexOf("~") == 0) {
                                        h = g[1].substring(1).split("|");
                                        for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                                        v = h
                                    } else v = utag.ut.decode(g[1]);
                                    j[g[0]] = v;
                                } catch (er) {
                                    utag.DB(er)
                                };
                            }
                            o[ck] = {};
                            for (f in utag.loader.GV(j)) {
                                if (j[f] instanceof Array) {
                                    n = [];
                                    for (m = 0; m < j[f].length; m++) {
                                        if (j[f][m].match(s)) {
                                            k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                                            if (k > t) n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                                        }
                                    }
                                    j[f] = n.join("|");
                                } else {
                                    j[f] = "" + j[f];
                                    if (j[f].match(s)) {
                                        k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                                        j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                                    }
                                }
                                if (j[f]) o[ck][f] = j[f];
                            }
                        } else if (utag.cl[ck] || utag.cl['_all_']) {
                            o[ck] = e
                        }
                    }
                }
                return (a) ? (o[a] ? o[a] : {}) : o;
            },
            SC: function(a, b, c, d, e, f, g, h, i, j, k, x, v) {
                if (!a) return 0;
                if (a == "utag_main" && utag.cfg.nocookie) return 0;
                v = "";
                var date = new Date();
                var exp = new Date();
                exp.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
                x = exp.toGMTString();
                if (c && c == "da") {
                    x = "Thu, 31 Dec 2009 00:00:00 GMT";
                } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
                    if (typeof b != "object") {
                        v = b
                    }
                } else {
                    d = utag.loader.RC(a, 0);
                    for (e in utag.loader.GV(b)) {
                        f = "" + b[e];
                        if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
                            g = date.getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
                            if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
                            f = RegExp.$1 + ";exp-" + g;
                        }
                        if (c == "i") {
                            if (d[e] == null) d[e] = f;
                        } else if (c == "d") delete d[e];
                        else if (c == "a") d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
                        else if (c == "ap" || c == "au") {
                            if (d[e] == null) d[e] = f;
                            else {
                                if (d[e].indexOf("|") > 0) {
                                    d[e] = d[e].split("|")
                                }
                                g = (d[e] instanceof Array) ? d[e] : [d[e]];
                                g.push(f);
                                if (c == "au") {
                                    h = {};
                                    k = {};
                                    for (i = 0; i < g.length; i++) {
                                        if (g[i].match(/^(.*);exp-(.*)$/)) {
                                            j = RegExp.$1;
                                        }
                                        if (typeof k[j] == "undefined") {
                                            k[j] = 1;
                                            h[g[i]] = 1;
                                        }
                                    }
                                    g = [];
                                    for (i in utag.loader.GV(h)) {
                                        g.push(i);
                                    }
                                }
                                d[e] = g
                            }
                        } else d[e] = f;
                    }
                    h = new Array();
                    for (g in utag.loader.GV(d)) {
                        if (d[g] instanceof Array) {
                            for (c = 0; c < d[g].length; c++) {
                                d[g][c] = encodeURIComponent(d[g][c])
                            }
                            h.push(g + ":~" + d[g].join("|"))
                        } else h.push((g + ":").replace(/[\,\$\;\?]/g, "") + encodeURIComponent(d[g]))
                    }
                    if (h.length == 0) {
                        h.push("");
                        x = ""
                    }
                    v = (h.join("$"));
                }
                document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x;
                return 1
            },
            LOAD: function(a, b, c, d) {
                if (!utag.loader.cfg) {
                    return
                }
                if (this.ol == 0) {
                    if (utag.loader.cfg[a].block && utag.loader.cfg[a].cbf) {
                        this.f[a] = 1;
                        delete utag.loader.bq[a];
                    }
                    for (b in utag.loader.GV(utag.loader.bq)) {
                        if (utag.loader.cfg[a].load == 4 && utag.loader.cfg[a].wait == 0) {
                            utag.loader.bk[a] = 1;
                            utag.DB("blocked: " + a);
                        }
                        utag.DB("blocking: " + b);
                        return;
                    }
                    utag.loader.INIT();
                    return;
                }
                utag.DB('utag.loader.LOAD:' + a);
                if (this.f[a] == 0) {
                    this.f[a] = 1;
                    if (utag.cfg.noview != true) {
                        if (utag.loader.cfg[a].send) {
                            utag.DB("SENDING: " + a);
                            try {
                                if (utag.loader.sendq.pending > 0 && utag.loader.sendq[a]) {
                                    utag.DB("utag.loader.LOAD:sendq: " + a);
                                    while (d = utag.loader.sendq[a].shift()) {
                                        utag.DB(d);
                                        utag.sender[a].send(d.event, utag.handler.C(d.data));
                                        utag.loader.sendq.pending--;
                                    }
                                } else {
                                    utag.sender[a].send('view', utag.handler.C(utag.data));
                                }
                                utag.rpt['s_' + a] = 0;
                            } catch (e) {
                                utag.DB(e);
                                utag.rpt['s_' + a] = 1;
                            }
                        }
                    }
                    if (utag.loader.rf == 0) return;
                    for (b in utag.loader.GV(this.f)) {
                        if (this.f[b] == 0 || this.f[b] == 2) return
                    }
                    utag.loader.END();
                }
            },
            EV: function(a, b, c, d) {
                if (b == "ready") {
                    if (!utag.data) {
                        try {
                            utag.cl = {
                                '_all_': 1
                            };
                            utag.loader.initdata();
                            utag.loader.RD(utag.data);
                        } catch (e) {
                            utag.DB(e)
                        };
                    }
                    if ((document.attachEvent || utag.cfg.dom_complete) ? document.readyState === "complete" : document.readyState !== "loading") setTimeout(c, 1);
                    else {
                        utag.loader.ready_q.push(c);
                        var RH;
                        if (utag.loader.ready_q.length <= 1) {
                            if (document.addEventListener) {
                                RH = function() {
                                    document.removeEventListener("DOMContentLoaded", RH, false);
                                    utag.loader.run_ready_q()
                                };
                                if (!utag.cfg.dom_complete) document.addEventListener("DOMContentLoaded", RH, false);
                                window.addEventListener("load", utag.loader.run_ready_q, false);
                            } else if (document.attachEvent) {
                                RH = function() {
                                    if (document.readyState === "complete") {
                                        document.detachEvent("onreadystatechange", RH);
                                        utag.loader.run_ready_q()
                                    }
                                };
                                document.attachEvent("onreadystatechange", RH);
                                window.attachEvent("onload", utag.loader.run_ready_q);
                            }
                        }
                    }
                } else {
                    if (a.addEventListener) {
                        a.addEventListener(b, c, false)
                    } else if (a.attachEvent) {
                        a.attachEvent(((d == 1) ? "" : "on") + b, c)
                    }
                }
            },
            END: function(b, c, d, e, v, w) {
                if (this.ended) {
                    return
                };
                this.ended = 1;
                utag.DB("loader.END");
                b = utag.data;
                if (utag.handler.base && utag.handler.base != '*') {
                    e = utag.handler.base.split(",");
                    for (d = 0; d < e.length; d++) {
                        if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]]
                    }
                } else if (utag.handler.base == '*') {
                    utag.ut.merge(utag.handler.df, b, 1);
                }
                utag.rpt['r_0'] = "t";
                for (var r in utag.loader.GV(utag.cond)) {
                    utag.rpt['r_' + r] = (utag.cond[r]) ? "t" : "f";
                }
                utag.rpt.ts['s'] = new Date();
                (function(a, b, c, l) {
                    if (typeof utag_err != 'undefined' && utag_err.length > 0) {
                        a = '//uconnect.tealiumiq.com/ulog/_error?utid=' + utag.cfg.utid;
                        l = utag_err.length > 5 ? 5 : utag_err.length;
                        for (b = 0; b < l; b++) {
                            c = utag_err[b];
                            a += '&e' + b + '=' + encodeURIComponent(c.t + '::' + c.l + '::' + c.s + '::' + c.e);
                        }
                        utag.dbi.push((new Image()).src = a);
                    }
                })();
                v = utag.cfg.path;
                w = v.indexOf(".tiqcdn.");
                if (w > 0 && b["cp.utag_main__ss"] == 1 && !utag.cfg.no_session_count) utag.ut.loader({
                    src: v.substring(0, v.indexOf("/ut" + "ag/") + 6) + "tiqapp/ut" + "ag.v.js?a=" + utag.cfg.utid + (utag.cfg.nocookie ? "&nocookie=1" : "&cb=" + (new Date).getTime()),
                    id: "tiqapp"
                })
                if (utag.cfg.noview != true) utag.handler.RE('view', b, "end");
                utag.handler.INIT();
            }
        },
        DB: function(a, b) {
            if (utag.cfg.utagdb === false) {
                return;
            } else if (typeof utag.cfg.utagdb == "undefined") {
                b = document.cookie + '';
                utag.cfg.utagdb = ((b.indexOf('utagdb=true') >= 0) ? true : false);
            }
            if (utag.cfg.utagdb === true) {
                var t;
                if (utag.ut.typeOf(a) == "object") {
                    t = utag.handler.C(a)
                } else {
                    t = a
                }
                utag.db_log.push(t);
                try {
                    if (!utag.cfg.noconsole) console.log(t)
                } catch (e) {}
            }
        },
        RP: function(a, b, c) {
            if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
                b = [];
                for (c in utag.loader.GV(a)) {
                    if (c != 'src') b.push(c + '=' + escape(a[c]))
                }
                this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')))
            }
        },
        view: function(a, c, d) {
            return this.track({
                event: 'view',
                data: a || {},
                cfg: {
                    cb: c,
                    uids: d
                }
            })
        },
        link: function(a, c, d) {
            return this.track({
                event: 'link',
                data: a || {},
                cfg: {
                    cb: c,
                    uids: d
                }
            })
        },
        track: function(a, b, c, d, e) {
            a = a || {};
            if (typeof a == "string") {
                a = {
                    event: a,
                    data: b || {},
                    cfg: {
                        cb: c,
                        uids: d
                    }
                }
            }
            for (e in utag.loader.GV(utag.o)) {
                utag.o[e].handler.trigger(a.event || "view", a.data || a, a.cfg || {
                    cb: b,
                    uids: c
                })
            }
            a.cfg = a.cfg || {
                cb: b
            };
            if (typeof a.cfg.cb == "function") a.cfg.cb();
            return true
        },
        handler: {
            base: "",
            df: {},
            o: {},
            send: {},
            iflag: 0,
            INIT: function(a, b, c) {
                utag.DB('utag.handler.INIT');
                if (utag.initcatch) {
                    utag.initcatch = 0;
                    return
                }
                this.iflag = 1;
                a = utag.loader.q.length;
                if (a > 0) {
                    utag.DB("Loader queue");
                    for (b = 0; b < a; b++) {
                        c = utag.loader.q[b];
                        utag.handler.trigger(c.a, c.b, c.c)
                    }
                }
            },
            test: function() {
                return 1
            },
            LR: function(b) {
                utag.DB("Load Rules");
                for (var d in utag.loader.GV(utag.cond)) {
                    utag.cond[d] = false;
                }
                utag.DB(b);
                utag.loader.loadrules(b);
                utag.DB(utag.cond);
                utag.loader.initcfg();
                utag.loader.OU();
                for (var r in utag.loader.GV(utag.cond)) {
                    utag.rpt['r_' + r] = (utag.cond[r]) ? "t" : "f";
                }
            },
            RE: function(a, b, c, d, e, f, g) {
                if (c != "alr" && !this.cfg_extend) {
                    return 0;
                }
                utag.DB("RE: " + c);
                if (c == "alr") utag.DB("All Tags EXTENSIONS");
                utag.DB(b);
                if (typeof this.extend != "undefined") {
                    g = 0;
                    for (d = 0; d < this.extend.length; d++) {
                        try {
                            e = 0;
                            if (typeof this.cfg_extend != "undefined") {
                                f = this.cfg_extend[d];
                                if (typeof f.count == "undefined") f.count = 0;
                                if (f[a] == 0 || (f.once == 1 && f.count > 0) || f[c] == 0) {
                                    e = 1
                                } else {
                                    if (f[c] == 1) {
                                        g = 1
                                    };
                                    f.count++
                                }
                            }
                            if (e != 1) {
                                this.extend[d](a, b);
                                utag.rpt['ex_' + d] = 0
                            }
                        } catch (er) {
                            utag.DB(er);
                            utag.rpt['ex_' + d] = 1;
                            utag.ut.error({
                                e: er.message,
                                s: utag.cfg.path + 'utag.js',
                                l: d,
                                t: 'ge'
                            });
                        }
                    }
                    utag.DB(b);
                    return g;
                }
            },
            trigger: function(a, b, c, d, e, f) {
                utag.DB('trigger:' + a + (c && c.uids ? ":" + c.uids.join(",") : ""));
                b = b || {};
                utag.DB(b);
                if (!this.iflag) {
                    utag.DB("trigger:called before tags loaded");
                    for (d in utag.loader.f) {
                        if (!(utag.loader.f[d] === 1)) utag.DB('Tag ' + d + ' did not LOAD')
                    }
                    utag.loader.q.push({
                        a: a,
                        b: utag.handler.C(b),
                        c: c
                    });
                    return;
                }
                utag.ut.merge(b, this.df, 0);
                utag.loader.RD(b, a);
                utag.cfg.noview = false;

                function sendTag(a, b, d) {
                    try {
                        if (typeof utag.sender[d] != "undefined") {
                            utag.DB("SENDING: " + d);
                            utag.sender[d].send(a, utag.handler.C(b));
                            utag.rpt['s_' + d] = 0;
                        } else if (utag.loader.cfg[d].load != 2) {
                            utag.loader.sendq[d] = utag.loader.sendq[d] || [];
                            utag.loader.sendq[d].push({
                                "event": a,
                                "data": utag.handler.C(b)
                            });
                            utag.loader.sendq.pending++;
                            utag.loader.AS({
                                id: d,
                                load: 1
                            });
                        }
                    } catch (e) {
                        utag.DB(e)
                    }
                }
                if (c && c.uids) {
                    this.RE(a, b, "alr");
                    for (f = 0; f < c.uids.length; f++) {
                        d = c.uids[f];
                        if (!utag.loader.OU(utag.loader.cfg[d].tid)) {
                            sendTag(a, b, d);
                        }
                    }
                } else if (utag.cfg.load_rules_ajax) {
                    this.RE(a, b, "blr");
                    this.LR(b);
                    this.RE(a, b, "alr");
                    for (f = 0; f < utag.loader.cfgsort.length; f++) {
                        d = utag.loader.cfgsort[f];
                        if (utag.loader.cfg[d].load && utag.loader.cfg[d].send) {
                            sendTag(a, b, d);
                        }
                    }
                } else {
                    this.RE(a, b, "alr");
                    for (d in utag.loader.GV(utag.sender)) {
                        sendTag(a, b, d);
                    }
                }
                this.RE(a, b, "end");
            },
            C: function(a, b, c) {
                b = {};
                for (c in utag.loader.GV(a)) {
                    if (a[c] instanceof Array) {
                        b[c] = a[c].slice(0)
                    } else {
                        b[c] = a[c]
                    }
                }
                return b
            }
        },
        ut: {
            pad: function(a, b, c, d) {
                a = "" + ((a - 0).toString(16));
                d = '';
                if (b > a.length) {
                    for (c = 0; c < (b - a.length); c++) {
                        d += '0'
                    }
                }
                return "" + d + a
            },
            vi: function(t, a, b) {
                if (!utag.v_id) {
                    a = this.pad(t, 12);
                    b = "" + Math.random();
                    a += this.pad(b.substring(2, b.length), 16);
                    try {
                        a += this.pad((navigator.plugins.length ? navigator.plugins.length : 0), 2);
                        a += this.pad(navigator.userAgent.length, 3);
                        a += this.pad(document.URL.length, 4);
                        a += this.pad(navigator.appVersion.length, 3);
                        a += this.pad(screen.width + screen.height + parseInt((screen.colorDepth) ? screen.colorDepth : screen.pixelDepth), 5)
                    } catch (e) {
                        utag.DB(e);
                        a += "12345"
                    };
                    utag.v_id = a;
                }
                return utag.v_id
            },
            hasOwn: function(o, a) {
                return o != null && Object.prototype.hasOwnProperty.call(o, a)
            },
            isEmptyObject: function(o, a) {
                for (a in o) {
                    if (utag.ut.hasOwn(o, a)) return false
                }
                return true
            },
            isEmpty: function(o) {
                var t = utag.ut.typeOf(o);
                if (t == "number") {
                    return isNaN(o)
                } else if (t == "boolean") {
                    return false
                } else if (t == "string") {
                    return o.length === 0
                } else return utag.ut.isEmptyObject(o)
            },
            typeOf: function(e) {
                return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            },
            flatten: function(o) {
                var a = {};

                function r(c, p) {
                    if (Object(c) !== c || c instanceof Array) {
                        a[p] = c;
                    } else {
                        if (utag.ut.isEmptyObject(c)) {} else {
                            for (var d in c) {
                                r(c[d], p ? p + "." + d : d);
                            }
                        }
                    }
                }
                r(o, "");
                return a;
            },
            merge: function(a, b, c, d) {
                if (c) {
                    for (d in utag.loader.GV(b)) {
                        a[d] = b[d]
                    }
                } else {
                    for (d in utag.loader.GV(b)) {
                        if (typeof a[d] == "undefined") a[d] = b[d]
                    }
                }
            },
            decode: function(a, b) {
                b = "";
                try {
                    b = decodeURIComponent(a)
                } catch (e) {
                    utag.DB(e)
                };
                if (b == "") {
                    b = unescape(a)
                };
                return b
            },
            encode: function(a, b) {
                b = "";
                try {
                    b = encodeURIComponent(a)
                } catch (e) {
                    utag.DB(e)
                };
                if (b == "") {
                    b = escape(a)
                };
                return b
            },
            error: function(a, b, c) {
                if (typeof utag_err != "undefined") {
                    utag_err.push(a)
                }
            },
            loader: function(o, a, b, c, l, m) {
                utag.DB(o);
                a = document;
                if (o.type == "iframe") {
                    m = a.getElementById(o.id);
                    if (m && m.tagName == "IFRAME") {
                        m.parentNode.removeChild(m);
                    }
                    b = a.createElement("iframe");
                    o.attrs = o.attrs || {};
                    utag.ut.merge(o.attrs, {
                        "height": "1",
                        "width": "1",
                        "style": "display:none"
                    }, 0);
                } else if (o.type == "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                }
                if (o.id) {
                    b.id = o.id
                };
                for (l in utag.loader.GV(o.attrs)) {
                    b.setAttribute(l, o.attrs[l])
                }
                b.setAttribute("src", o.src);
                if (typeof o.cb == "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb()
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                                this.onreadystatechange = null;
                                o.cb()
                            }
                        };
                    }
                }
                if (typeof o.error == "function") {
                    utag.loader.EV(b, "error", o.error);
                }
                if (o.type != "img") {
                    l = o.loc || "head";
                    c = a.getElementsByTagName(l)[0];
                    if (c) {
                        utag.DB("Attach to " + l + ": " + o.src);
                        if (l == "script") {
                            c.parentNode.insertBefore(b, c);
                        } else {
                            c.appendChild(b)
                        }
                    }
                }
            }
        }
    };
    utag.o['adidas.yeezysupplyglobal'] = utag;
    utag.cfg = {
        template: "ut4.46.",
        load_rules_ajax: true,
        load_rules_at_wait: false,
        lowerqp: false,
        noconsole: false,
        session_timeout: 1800000,
        readywait: 0,
        noload: 0,
        domain: utag.loader.lh(),
        datasource: "##UTDATASOURCE##".replace("##" + "UTDATASOURCE##", ""),
        path: "//tags.tiqcdn.com/utag/adidas/yeezysupplyglobal/prod/",
        utid: "adidas/yeezysupplyglobal/202003201140"
    };
    utag.cfg.v = utag.cfg.template + "202003250940";
    utag.cond = {
        151: 0,
        23: 0,
        75: 0,
        77: 0,
        89: 0,
        99: 0
    };
    utag.loader.initdata = function() {
        try {
            utag.data = (typeof utag_data != 'undefined') ? utag_data : {};
            utag.udoname = 'utag_data';
        } catch (e) {
            utag.data = {};
            utag.DB('idf:' + e);
        }
    };
    utag.loader.loadrules = function(_pd, _pc) {
        var d = _pd || utag.data;
        var c = _pc || utag.cond;
        for (var l in utag.loader.GV(c)) {
            switch (l) {
                case '151':
                    try {
                        c[151] |= (/AT|BE|CZ|DE|DK|ES|FI|FR|GR|IE|IT|NL|PL|PT|SE|SK|UK|AR|BR|CL|CO|MX|PE|RU|CA|US|AU|NZ|MY|PH|SG|TH|TR|VN/.test(d['country']))
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '23':
                    try {
                        c[23] |= (d['country'].toString().toLowerCase() == 'AR'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'AT'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'AU'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'BE'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'CA'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'CH'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'CO'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'CZ'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'DE'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'DK'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'ES'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'FI'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'FR'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'GB'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'GR'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'IE'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'IT'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'MX'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'NL'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'NO'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'NZ'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'PL'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'PT'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'SE'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'SK'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'RU'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'UK'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'BR'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'US'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'PE'.toLowerCase()) || (d['country'].toString().toLowerCase() == 'CL'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '75':
                    try {
                        c[75] |= (typeof d['cp.notice_preferences'] == 'undefined') || (typeof d['cp.notice_preferences'] != 'undefined' && d['cp.notice_preferences'] != '' && parseFloat(d['cp.notice_preferences']) > parseFloat(1))
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '77':
                    try {
                        c[77] |= (d['page_type'].toString().toLowerCase() == 'HOME'.toLowerCase()) || (d['page_type'].toString().toLowerCase() == 'CLP'.toLowerCase()) || (d['page_type'].toString().toLowerCase() == 'GLP'.toLowerCase()) || (d['page_type'].toString().toLowerCase() == 'PLP'.toLowerCase()) || (d['page_type'].toString().toLowerCase() == 'PDP'.toLowerCase()) || (d['page_type'].toString().toLowerCase() == 'SHOPPING CART'.toLowerCase()) || (d['page_type'].toString().toLowerCase() == 'CHECKOUT'.toLowerCase() && d['page_name'].toString().toLowerCase() == 'COMPLETE'.toLowerCase()) || (d['page_type'].toString().toLowerCase() == 'SEARCH'.toLowerCase()) || (typeof d['campaign_name'] != 'undefined' && typeof d['campaign_name'] != 'undefined' && d['campaign_name'] != '' && typeof d['country'] != 'undefined')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '89':
                    try {
                        c[89] |= (d['ut.event'].toString().indexOf('view') > -1) || (d['ut.event'].toString().indexOf('link') > -1 && typeof d['event_name'] != 'undefined' && d['event_name'] != '' && d['event_name'].toString().toLowerCase().indexOf('add to cart'.toLowerCase()) > -1) || (d['ut.event'].toString().indexOf('link') > -1 && typeof d['signup_step'] != 'undefined' && d['signup_step'] != '')
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
                case '99':
                    try {
                        c[99] |= (typeof d['email_in_url'] != 'undefined' && d['email_in_url'].toString().toLowerCase() != 'true'.toLowerCase())
                    } catch (e) {
                        utag.DB(e)
                    };
                    break;
            }
        }
    };
    utag.pre = function() {
        utag.loader.initdata();
        try {
            utag.loader.RD(utag.data)
        } catch (e) {
            utag.DB(e)
        };
        utag.loader.loadrules();
    };
    utag.loader.GET = function() {
        utag.cl = {
            '_all_': 1
        };
        utag.pre();
        utag.handler.extend = [function(a, b) {
            try {
                if (1) {
                    try {
                        b['email_in_url'] = decodeURIComponent(document.location.href).indexOf('@') > -1 ? (/.*[a-zA-Z0-9._-]+(@|%40)[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}.*/gi).test(decodeURIComponent(document.location.href)).toString() : 'false'
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((typeof b['country'] != 'undefined' && b['country'] != '' && b['country'].toString().toLowerCase() == 'GB'.toLowerCase())) {
                    b['country'] = 'UK'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    if (!b.geo_country) {
                        if (b['cp.geo_country']) {
                            b.geo_country = b['cp.geo_country'];
                        } else if (b.country) {
                            b.geo_country = b.country;
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            if (b.glass_version != null && b.glass_version != '' && b.glass_version != utag.data.glass_version) {
                utag.data.glass_version = b.glass_version;
            }
            if (utag.data.glass_version != null && utag.data.glass_version != '' && b.glass_version != utag.data.glass_version) {
                b.glass_version = utag.data.glass_version;
            }
            if (!utag.data.glass_version) {
                if (!utag_data.original_page_type) {
                    utag_data.original_page_type = b.page_type || '';
                    utag_data.original_page_name = b.page_name || '';
                    if (b.page_type && b.page_type == 'PDP') {
                        utag_data.original_product_id = b.product_id;
                    }
                }
                if (utag_data.original_product_id && b.product_id && (utag_data.original_product_id[0] != b.product_id[0])) {
                    b['qp.pr'] = b['qp.slot'] = '';
                    utag_data.original_product_id = b.product_id;
                }
                var values = ['campaign_name', 'country', 'customer_id', 'dw_version', 'environment', 'geo_country', 'is_mobile', 'language', 'logged_in', 'page_category', 'page_name', 'page_owner', 'page_type', 'product_brand', 'product_category', 'product_collection', 'product_gender', 'product_sport', 'product_type', 'site_name', 'site_type', 'cart_id'];
                for (var i = 0; i < values.length; i++) {
                    b[values[i]] = (b[values[i]] || utag.data['original_' + values[i]] || utag.data[values[i]] || '');
                    if (!b[values[i]]) {
                        try {
                            b[values[i]] = top.utag.data[values[i]];
                        } catch (ex) {}
                    }
                    if (typeof(b[values[i]]) !== 'object' && typeof(b[values[i]]) !== 'undefined') {
                        b[values[i]] = b[values[i]].toUpperCase();
                    }
                }
                var values2 = ['event', 'event_category', 'event_name'];
                for (var i = 0; i < values.length; i++) {
                    b[values2[i]] = (b[values2[i]] || '').toUpperCase();
                }
                if (b.product_sku && !Array.isArray(b.product_sku)) {
                    b.product_sku = [b.product_sku];
                }
                if (b.product_id && !Array.isArray(b.product_id)) {
                    b.product_id = [b.product_id || ''];
                }
            } else if (utag.data.glass_version != null) {
                var values = ['country', 'cart_id', 'environment', 'is_mobile', 'language', 'logged_in', 'page_name', 'page_type', 'site_name', 'site_type'];
                for (var i = 0; i < values.length; i++) {
                    if (b[values[i]] != null && b[values[i]] != utag.data[values[i]]) {
                        utag.data[values[i]] = b[values[i]];
                    }
                    if (utag.data[values[i]] != null && b[values[i]] != utag.data[values[i]]) {
                        b[values[i]] = utag.data[values[i]];
                    }
                    b[values[i]] = b[values[i]] || '';
                }
                if (a == 'view' && !b.is_salesforce_chat && !b.is_cookie_consent) {
                    utag.data = Object.assign({}, b);
                } else if (a == 'link') {
                    utag.data = Object.assign(utag.data, b);
                } else {
                    b = Object.assign(b, utag.data);
                }
                if (b.product_sku && !Array.isArray(b.product_sku)) {
                    b.product_sku = [b.product_sku];
                }
                if (b.product_id && !Array.isArray(b.product_id)) {
                    b.product_id = [b.product_id || ''];
                }
            }
        }, function(a, b) {
            try {
                if (1) {
                    utag.data.link_view = a;
                    b.link_view = a;
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((b['environment'].toString().toLowerCase() == 'PRODUCTION'.toLowerCase() && b['dom.domain'].toString().toLowerCase().indexOf('staging.'.toLowerCase()) > -1) || (b['environment'].toString().toLowerCase() == 'PRODUCTION'.toLowerCase() && b['dom.domain'].toString().toLowerCase().indexOf('qa.'.toLowerCase()) > -1) || b['environment'].toString().toLowerCase() == 'QA'.toLowerCase()) {
                    b['environment'] = 'STAGING'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (b['environment'].toString().toLowerCase() == 'PROD'.toLowerCase()) {
                    b['environment'] = 'PRODUCTION'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (typeof b['site_name'] == 'undefined' || typeof b['site_name'] != 'undefined' && b['site_name'] == '') {
                    b['site_name'] = 'YEEZYSUPPLY'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            var dw_glass_version = '';
            if (b.glass_version || utag.data.glass_version) {
                dw_glass_version = 'glass|' + (b.glass_version || utag.data.glass_version);
            } else if (b.configurator_version || utag.data.configurator_version) {
                dw_glass_version = 'configurator|' + (b.configurator_version || utag.data.configurator_version);
            } else if (b.ys_version) {
                dw_glass_version = 'ys-immersive|' + b.ys_version;
            } else if (b.dw_version) {
                dw_glass_version = b.dw_version;
            } else {
                dw_glass_version = 'no DW version';
            }
            if (b['cp.fafea'] != null && b['cp.fafea'] != '') {
                dw_glass_version += '|friends and family';
            }
            b.version_info = 'tp.' + b['ut.profile'] + '|' + 'tenv.' + b['ut.env'] + '|' + b['ut.version'] + '|' + dw_glass_version;
        }, function(a, b) {
            try {
                if (b['environment'].toString().toLowerCase().indexOf('PRODUCTION'.toLowerCase()) < 0) {
                    b['prod_dev'] = 'DEV'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (b['environment'].toString().toLowerCase().indexOf('PRODUCTION'.toLowerCase()) > -1) {
                    b['prod_dev'] = 'PROD'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (b['is_mobile'].toString().toLowerCase() != 'TRUE'.toLowerCase() || typeof b['is_mobile'] != 'undefined' && b['is_mobile'] == '' || typeof b['is_mobile'] == 'undefined' || b['is_mobile'].toString().toLowerCase() == 'FALSE'.toLowerCase()) {
                    b['site_type'] = 'DESKTOP'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (b['is_mobile'].toString().toLowerCase() == 'TRUE'.toLowerCase()) {
                    b['site_type'] = 'MOBILE'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (typeof b['page_owner'] == 'undefined' || typeof b['page_owner'] != 'undefined' && b['page_owner'] == '') {
                    b['page_owner'] = 'ECOM'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b, c, d) {
            try {
                if ((typeof b['country'] != 'undefined' && b['country'] != '' && typeof b['language'] != 'undefined' && b['language'] != '')) {
                    c = [b['country'], b['language']];
                    b['language_country'] = c.join(':')
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b, c, d) {
            try {
                if (1) {
                    c = [b['country'], b['prod_dev']];
                    b['country_environment'] = c.join(':')
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b, c, d) {
            try {
                if (1) {
                    c = [b['site_name'], b['country_environment']];
                    b['market_name'] = c.join(':')
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b, c, d) {
            try {
                if ((typeof b['site_name'] != 'undefined' && b['site_name'] != '' && typeof b['country'] != 'undefined' && b['country'] != '')) {
                    c = [b['site_name'], b['page_owner'], b['country']];
                    b['analytics_sitename'] = c.join(':')
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['country'];
                if (typeof d == 'undefined') return;
                c = [{
                    'AR': 'ARS'
                }, {
                    'AT': 'EUR'
                }, {
                    'AU': 'AUD'
                }, {
                    'BE': 'EUR'
                }, {
                    'BR': 'BRL'
                }, {
                    'CA': 'CAD'
                }, {
                    'CH': 'CHF'
                }, {
                    'CL': 'CLP'
                }, {
                    'CO': 'COP'
                }, {
                    'CZ': 'CZK'
                }, {
                    'DE': 'EUR'
                }, {
                    'DK': 'DKK'
                }, {
                    'ES': 'EUR'
                }, {
                    'FI': 'EUR'
                }, {
                    'FR': 'EUR'
                }, {
                    'GR': 'EUR'
                }, {
                    'IE': 'EUR'
                }, {
                    'IT': 'EUR'
                }, {
                    'MX': 'MXN'
                }, {
                    'NL': 'EUR'
                }, {
                    'NO': 'NOK'
                }, {
                    'NZ': 'NZD'
                }, {
                    'PE': 'PEN'
                }, {
                    'PL': 'PLN'
                }, {
                    'PT': 'EUR'
                }, {
                    'RU': 'RUB'
                }, {
                    'SE': 'SEK'
                }, {
                    'SK': 'EUR'
                }, {
                    'UK': 'GBP'
                }, {
                    'US': 'USD'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in c[e]) {
                        if (d == f) {
                            b['currency_code'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
                if (!m) b['currency_code'] = '';
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['currency_code'];
                if (typeof d == 'undefined') return;
                c = [{
                    'AED': '4.26'
                }, {
                    'ALL': '122.51'
                }, {
                    'ARS': '70.00'
                }, {
                    'AUD': '1.64'
                }, {
                    'BAM': '1.96'
                }, {
                    'BDT': '95.36'
                }, {
                    'BGN': '1.96'
                }, {
                    'BHD': '0.44'
                }, {
                    'BOB': '7.85'
                }, {
                    'BRL': '4.47'
                }, {
                    'BZD': '2.26'
                }, {
                    'CAD': '1.51'
                }, {
                    'CHF': '1.10'
                }, {
                    'CLP': '788.20'
                }, {
                    'CNH': '8.01'
                }, {
                    'CNY': '7.99'
                }, {
                    'COP': '3813.27'
                }, {
                    'CRC': '656.50'
                }, {
                    'CUP': '1.13'
                }, {
                    'CZK': '26.18'
                }, {
                    'DKK': '7.45'
                }, {
                    'DOP': '57.37'
                }, {
                    'DZD': '134.79'
                }, {
                    'EEK': '15.65'
                }, {
                    'EGP': '21.12'
                }, {
                    'GBP': '0.90'
                }, {
                    'GHS': '7.20'
                }, {
                    'GTQ': '8.66'
                }, {
                    'HKD': '9.04'
                }, {
                    'HNL': '27.62'
                }, {
                    'HRK': '7.44'
                }, {
                    'HUF': '328.74'
                }, {
                    'IDR': '16905.45'
                }, {
                    'ILS': '4.02'
                }, {
                    'INR': '83.03'
                }, {
                    'IRR': '47460.00'
                }, {
                    'JMD': '154.60'
                }, {
                    'JOD': '0.83'
                }, {
                    'JPY': '121.91'
                }, {
                    'KES': '116.16'
                }, {
                    'KHR': '4649.69'
                }, {
                    'KRW': '1350.73'
                }, {
                    'KWD': '0.35'
                }, {
                    'KZT': '479.16'
                }, {
                    'LBP': '1743.58'
                }, {
                    'LTL': '3.45'
                }, {
                    'LVL': '0.70'
                }, {
                    'LYD': '1.60'
                }, {
                    'MAD': '11.60'
                }, {
                    'MKD': '61.52'
                }, {
                    'MMK': '1707.63'
                }, {
                    'MNT': '3011.23'
                }, {
                    'MUR': '41.92'
                }, {
                    'MXN': '23.25'
                }, {
                    'MYR': '4.80'
                }, {
                    'NGN': '406.57'
                }, {
                    'NIO': '37.43'
                }, {
                    'NOK': '9.84'
                }, {
                    'NZD': '1.71'
                }, {
                    'OMR': '0.45'
                }, {
                    'PAB': '1.16'
                }, {
                    'PEN': '3.87'
                }, {
                    'PHP': '60.43'
                }, {
                    'PKR': '198.39'
                }, {
                    'PLN': '4.36'
                }, {
                    'PYG': '6784.62'
                }, {
                    'QAR': '4.23'
                }, {
                    'RON': '4.94'
                }, {
                    'RSD': '121.90'
                }, {
                    'RUB': '76.06'
                }, {
                    'SAR': '4.35'
                }, {
                    'SEK': '10.61'
                }, {
                    'SGD': '1.57'
                }, {
                    'SYP': '1474110.25'
                }, {
                    'THB': '35.56'
                }, {
                    'TRY': '7.50'
                }, {
                    'TTD': '7.67'
                }, {
                    'TWD': '35.34'
                }, {
                    'TZS': '2862.35'
                }, {
                    'UAH': '35.39'
                }, {
                    'USD': '1.16'
                }, {
                    'UYU': '44.11'
                }, {
                    'VEF': '288283.20'
                }, {
                    'VND': '27361.75'
                }, {
                    'ZAR': '16.83'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in c[e]) {
                        if (d == f) {
                            b['exchange_rate_fixed'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
                if (!m) b['exchange_rate_fixed'] = '';
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['country'];
                if (typeof d == 'undefined') return;
                c = [{
                    'AR': 'lam'
                }, {
                    'AT': 'eu'
                }, {
                    'AU': 'row'
                }, {
                    'BE': 'eu'
                }, {
                    'BR': 'lam'
                }, {
                    'CA': 'row'
                }, {
                    'CH': 'eu'
                }, {
                    'CL': 'lam'
                }, {
                    'CO': 'lam'
                }, {
                    'CZ': 'eu'
                }, {
                    'DE': 'eu'
                }, {
                    'DK': 'eu'
                }, {
                    'ES': 'eu'
                }, {
                    'FI': 'eu'
                }, {
                    'FR': 'eu'
                }, {
                    'GR': 'eu'
                }, {
                    'IE': 'eu'
                }, {
                    'IT': 'eu'
                }, {
                    'MX': 'lam'
                }, {
                    'NL': 'eu'
                }, {
                    'NO': 'eu'
                }, {
                    'NZ': 'row'
                }, {
                    'PE': 'lam'
                }, {
                    'PL': 'eu'
                }, {
                    'PT': 'eu'
                }, {
                    'RU': 'ru'
                }, {
                    'SE': 'eu'
                }, {
                    'SK': 'eu'
                }, {
                    'UK': 'eu'
                }, {
                    'US': 'us'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in c[e]) {
                        if (d == f) {
                            b['region'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
                if (!m) b['region'] = '';
            }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['country'];
                if (typeof d == 'undefined') return;
                c = [{
                    'AR': '0.21'
                }, {
                    'AT': '0.20'
                }, {
                    'AU': '0.10'
                }, {
                    'BE': '0.21'
                }, {
                    'BR': '0.2157'
                }, {
                    'CA': '0.05'
                }, {
                    'CH': '0.08'
                }, {
                    'CL': '0.19'
                }, {
                    'CO': '0.16'
                }, {
                    'CZ': '0.21'
                }, {
                    'DE': '0.19'
                }, {
                    'DK': '0.25'
                }, {
                    'ES': '0.21'
                }, {
                    'FI': '0.24'
                }, {
                    'FR': '0.196'
                }, {
                    'GR': '0.23'
                }, {
                    'IE': '0.23'
                }, {
                    'IT': '0.22'
                }, {
                    'MX': '0.16'
                }, {
                    'NL': '0.21'
                }, {
                    'NO': '0.25'
                }, {
                    'NZ': '0.15'
                }, {
                    'PE': '0.18'
                }, {
                    'PL': '0.23'
                }, {
                    'PT': '0.23'
                }, {
                    'RU': '0.18'
                }, {
                    'SE': '0.25'
                }, {
                    'SK': '0.20'
                }, {
                    'UK': '0.20'
                }, {
                    'US': '0.00'
                }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in c[e]) {
                        if (d == f) {
                            b['tax_pct'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
                if (!m) b['tax_pct'] = '';
            }
        }, function(a, b) {
            if (a == 'view' && b.analytics_pagename == 'CHECKOUT|COMPLETE') {
                if (b.product_price && b.product_quantity) {
                    b.product_total_price = [];
                    if (!b.product_id) {
                        b.product_id = b.product_model_id || b.product_sku || [];
                    }
                    var sub = 0;
                    for (var i = 0; i < b.product_id.length; i++) {
                        var price = parseFloat(b.product_price[i]),
                            totalPrice = (b.product_price[i] * parseInt(b.product_quantity[i]));
                        sub += totalPrice;
                        b.product_total_price.push(totalPrice.toFixed(2));
                    }
                    if (sub) {
                        b.order_subtotal = sub.toFixed(2);
                    }
                }
                if (b.order_total && (!b.order_subtotal || b.order_subtotal == '0.00')) {
                    b.product_id = [];
                    var sub = parseFloat(b.order_total);
                    if (b.tax_amount) {
                        sub -= parseFloat(b.tax_amount);
                    }
                    if (b.shipping_total) {
                        sub -= parseFloat(b.shipping_total);
                    }
                    b.order_subtotal = sub.toFixed(2);
                } else if (b.product_price_vat && b.product_id && !b.product_price) {
                    b.tax_pct = b.tax_pct || '0';
                    b.product_price = [];
                    for (var i = 0; i < b.product_id.length; i++) {
                        b.product_price.push(parseFloat((b.product_price_vat[i]) * (1 - parseFloat(b.tax_pct))).toFixed(2));
                    }
                }
            }
        }, function(a, b) {
            if (b.order_id) {
                b.total_products = 0;
                for (var i = 0; i < b.product_quantity.length; i++) {
                    b.total_products += parseInt(b.product_quantity[i] || '0');
                }
            }
        }, function(a, b) {
            if (!b.product_id && (b.product_sku || b.product_model_id)) {
                b.product_id = b.product_sku || b.product_model_id || [];
            }
            if (b.product_sku) {
                for (var i = 0; i < b.product_sku.length; i++) {
                    if (b.product_id && (b.product_id.length <= i || b.product_id[i].toLowerCase() == 'null')) {
                        b.product_id[i] = b.product_sku[i];
                    }
                }
            }
            b.product_price = b.product_price || [];
            if (b.order_id && b.order_total && (b.product_price.length < b.product_id.length)) {
                for (var i = 0; i < b.product_id.length; i++) {
                    if (typeof(b.product_price[i]) == 'undefined') {
                        b.product_price.push('0.00');
                    }
                }
            }
        }, function(a, b) {
            if (b.page_type == 'PDP' || b.page_type == 'CONFIGURATOR') {
                if (!b.product_id) {
                    b.product_id = utag.data.product_id || utag_data.product_id || [''];
                }
                if (b.product_sku) {
                    var prod = b.product_sku[0];
                    prod = prod.substring(0, prod.indexOf('_'));
                    if (prod != b.product_id[0] && (b.product_id[0] != b.product_sku[0])) {
                        b.product_id[0] = prod;
                    }
                }
                if (!b.product_model_id && utag.data.product_model_id) {
                    b.product_model_id = utag.data.product_model_id;
                }
            }
        }, function(a, b) {
            if (b.country == 'US') {
                if (b.breadcrumb) {
                    for (var i = 0; i < b.breadcrumb.length; i++) {
                        if (b.breadcrumb[i] == 'FOOTBALL') {
                            b.breadcrumb[i] = 'US FOOTBALL';
                        } else if (b.breadcrumb[i] == 'SOCCER') {
                            b.breadcrumb[i] = 'FOOTBALL';
                        }
                    }
                }
                if (b.filter_sport) {
                    if (b.filter_sport == 'FOOTBALL') {
                        b.filter_sport = 'US FOOTBALL';
                    } else if (b.filter_sport == 'SOCCER') {
                        b.filter_sport = 'FOOTBALL';
                    }
                }
                if (b.product_sport) {
                    for (var i = 0; i < b.product_sport.length; i++) {
                        if (b.product_sport[i] == 'FOOTBALL') {
                            b.product_sport[i] = 'US FOOTBALL';
                        } else if (b.product_sport[i] == 'SOCCER') {
                            b.product_sport[i] = 'FOOTBALL';
                        }
                    }
                }
                if (b.filters_applied) {
                    for (var i = 0; i < b.filters_applied.length; i++) {
                        if (b.filters_applied[i] == 'SPORT:FOOTBALL') {
                            b.filters_applied[i] = 'SPORT:US FOOTBALL';
                        } else if (b.filters_applied[i] == 'SPORT:SOCCER') {
                            b.filters_applied[i] = 'SPORT:FOOTBALL';
                        }
                    }
                }
            }
        }, function(a, b) {
            if (b.filters_applied) {
                if (!utag.data['glass_version']) {
                    reBindTealiumProductClicks();
                }
                b.filter_list = '';
                b.filter_names = '';
                b.filter_values = '';
                for (var i = 0; i < b.filters_applied.length; i++) {
                    b.filter_list += (b.filter_list != '' ? '|' : '') + 'F' + (i + 1) + '-' + b.filters_applied[i];
                    var filter = b.filters_applied[i].substring(0, b.filters_applied[i].indexOf(':')),
                        re = new RegExp('(^|,)' + filter, 'g');
                    if (b.filter_names.match(re) == null) {
                        b.filter_names += (b.filter_names ? ',' : '') + filter;
                        b.filter_values += (b.filter_values ? ',' : '') + b.filters_applied[i];
                    } else {
                        var val = b.filters_applied[i].substring(b.filters_applied[i].indexOf(':') + 1),
                            oldFilter = b.filter_values.substring(b.filter_values.indexOf(filter + ':'));
                        oldFilter = oldFilter.indexOf(',') > -1 ? oldFilter.substring(0, oldFilter.indexOf(',')) : oldFilter;
                        b.filter_values = b.filter_values.replace(oldFilter, oldFilter + '|' + val);
                    }
                }
                if (b.event_name == 'PRODUCT CLICK') {
                    b.product_number_filters = b.filters_applied.length;
                }
            }
        }, function(a, b) {
            if (b.filters_applied) {
                var opts = ['brand', 'category', 'collection', 'gender', 'functions', 'product_type', 'product_line_style', 'sport'];
                for (var i = 0; i < b.filters_applied.length; i++) {
                    for (var j = 0; j < opts.length; j++) {
                        var filter = opts[j].replace('_', '').toUpperCase();
                        if (b.filters_applied[i].indexOf(filter + ':') > -1) {
                            b['filter_' + opts[j]] = b.filters_applied[i].replace(filter + ':', '');
                            break;
                        }
                    }
                }
                if (b.filter_functions && !b.filter_product_type) {
                    b.filter_product_type = b.filter_functions;
                }
            }
            if (b.filters_applied) {
                b.filter_last = b.filters_applied[b.filters_applied.length - 1];
            }
            if (b.page_type == 'PDP') {
                b.filter_brand = b.product_brand ? b.product_brand[0] : '';
                b.filter_category = b.product_category ? b.product_category[0] : '';
                b.filter_collection = b.product_collection ? b.product_collection[0] : '';
                b.filter_gender = b.product_gender ? b.product_gender[0] : '';
                b.filter_product_type = b.product_type ? b.product_type[0] : '';
                b.filter_sport = b.product_sport ? b.product_sport[0] : '';
            }
            if (b.page_type == 'PDP') {
                b.filter_brand = b.filter_brand || '';
                b.filter_category = b.filter_category || '';
                b.filter_collection = b.filter_collection || '';
                b.filter_gender = b.filter_gender || '';
                b.filter_product_type = b.filter_product_type || '';
                b.filter_sport = b.filter_sport || '';
            }
            if (b.filters_added && b.filters_added.length > 0 && b.filter_ranking && b.filter_ranking.length > 0) {
                b.filters_added_ranking = [];
                for (var i = 0; i < b.filters_added.length; i++) {
                    b.filters_added_ranking.push(b.filters_added[i].split(':')[0] + '-R' + b.filter_ranking[i]);
                }
            }
            if (b.plp_navigation == 'FILTER USAGE' && (b.filters_added || b.filters_removed)) {
                b.filters_interacted = b.filters_interacted || utag.data.filters_interacted || [];
                if (b.filters_interacted.length > 0 && b.filters_removed.length > 0) {
                    for (var i = 0; i < b.filters_removed.length; i++) {
                        if (b.filters_interacted.indexOf(b.filters_removed[i]) > -1) {
                            b.filters_interacted.splice(b.filters_interacted.indexOf(b.filters_removed[i]), 1);
                        }
                    }
                }
                b.filters_interacted = b.filters_interacted.concat(b.filters_added);
                b.filter_names_interacted = [];
                for (filter in b.filters_interacted) {
                    b.filter_names_interacted.push(b.filters_interacted[filter].split(':')[0]);
                }
                if (b.filters_interacted.length == 0) {
                    delete b.filters_interacted;
                    delete b.filter_names_interacted;
                }
                utag.data.filters_interacted = b.filters_interacted;
                utag.data.filter_names_interacted = b.filter_names_interacted;
            } else if (b.page_type != 'PLP' && b.page_type != 'SEARCH' && utag.data.filters_interacted) {
                delete utag.data.filters_interacted;
                delete utag.data.filter_names_interacted;
            }
        }, function(a, b) {
            if (b.product_size) {
                for (var i = 0; i < b.product_size.length; i++) {
                    b.product_size[i] = b.product_size[i].replace(/\,/g, '.');
                }
            }
        }, function(a, b) {
            if (b.page_type == 'PLP' || b.page_type.indexOf('SEARCH') > -1 && b.product_id) {
                b.results_per_page = b.product_id.length.toString();
            }
        }, function(a, b) {
            var d = new Date();
            b.timestamp_utc = d.getUTCFullYear() + '-' + (d.getUTCMonth() < 9 ? '0' : '') + (d.getUTCMonth() + 1) + '-' + (d.getUTCDate() < 10 ? '0' : '') + d.getUTCDate() + ' ' + (d.getUTCHours() < 10 ? '0' : '') + d.getUTCHours() + ':' + (d.getUTCMinutes() < 10 ? '0' : '') + d.getUTCMinutes() + ':' + (d.getUTCSeconds() < 10 ? '0' : '') + d.getUTCSeconds();
        }, function(a, b) {
            try {
                if (typeof b['qp.utm_source'] != 'undefined' && b['qp.utm_source'] != '') {
                    document.cookie = "utm_source=" + b['qp.utm_source'] + ";path=/;domain=" + utag.cfg.domain + ";expires=" + (function() {
                        var d = new Date();
                        d.setTime(d.getTime() + (30 * 86400000));
                        return d.toGMTString()
                    })() + "";
                    b['cp.utm_source'] = b['qp.utm_source'];
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (typeof b['qp.gclid'] != 'undefined' && b['qp.gclid'] != '') {
                    document.cookie = "utm_source=" + 'Adwords' + ";path=/;domain=" + utag.cfg.domain + ";expires=" + (function() {
                        var d = new Date();
                        d.setTime(d.getTime() + (30 * 86400000));
                        return d.toGMTString()
                    })() + "";
                    b['cp.utm_source'] = 'Adwords';
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((typeof b['geo_country'] != 'undefined' && typeof b['geo_country'] != 'undefined' && b['geo_country'] != '' && typeof b['cp.geo_country'] == 'undefined')) {
                    document.cookie = "geo_country=" + b['geo_country'] + ";path=/;domain=" + utag.cfg.domain + ";expires=" + (function() {
                        var d = new Date();
                        d.setTime(d.getTime() + (365 * 86400000));
                        return d.toGMTString()
                    })() + "";
                    b['cp.geo_country'] = b['geo_country'];
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            if (b.customer_encrypted_email) {
                b.customer_encrypted_email = decodeURIComponent(decodeURIComponent(b.customer_encrypted_email));
            }
            if (b.customer_email) {
                b.customer_email = decodeURIComponent(decodeURIComponent(b.customer_email));
            }
        }, function(a, b) {
            try {
                if ((typeof b['promo_codes'] != 'undefined' && b['promo_codes'] != '' && typeof b['promo_code'] != 'undefined' && b['promo_code'] == '') || (typeof b['promo_codes'] != 'undefined' && b['promo_codes'] != '' && typeof b['promo_code'] == 'undefined')) {
                    b['promo_code'] = b['promo_codes']
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            if (a == 'view') {
                if (b.page_owner == 'HYPE') {
                    if (b.is_yeezy == 'YEEZY') {
                        if (!b.campaign_name) {
                            b.campaign_name = 'KANYE YEEZY';
                        }
                    }
                    if (b.page_type == 'CLP' && b.page_name == 'COMING SOON') {
                        b.analytics_pagename = 'BRAND|KANYE YEEZY|ORIGINALS|HOME';
                        b.analytics_section = 'COMING SOON|' + (b.campaign_name || b.is_yeezy);
                        b.product_id = b._cprod = '';
                    } else if (b.page_name == 'SOLD OUT' || b.page_name == 'REPEAT PURCHASE') {
                        b.analytics_pagename = b.page_type + '|' + b.page_name + '|' + b.product_name[0] + ' (' + b.product_id[0] + ')';
                        b.analytics_section = b.page_name + '|' + (b.campaign_name || b.is_yeezy);
                        b.product_id = b._cprod = '';
                    } else if (b.page_type == 'WAITING ROOM') {
                        b.analytics_pagename = b.page_type + '|' + b.campaign_name + '|' + b.product_name[0] + ' (' + b.product_id[0] + ')';
                        b.analytics_section = b.page_type + '|' + b.is_yeezy;
                        b.product_id = b._cprod = '';
                    } else if (b.page_type && b.page_name) {
                        b.analytics_pagename = b.page_type + '|' + (b.campaign_name || b.is_yeezy) + '|' + b.page_name;
                        b.analytics_section = b.page_name + '|' + (b.campaign_name || b.is_yeezy);
                        b.product_id = b._cprod = '';
                    }
                } else {
                    if (b.page_name == 'CART' && (!b.product_id || (b.product_id && b.product_id.length == 0))) {
                        b.page_name = 'EMPTY CART';
                    }
                    if (b.page_type == 'PDP') {
                        if (b.breadcrumb && b.breadcrumb.length > 1) {
                            b.analytics_section = b.breadcrumb[1];
                        } else if (b.product_gender && b.product_sport) {
                            b.analytics_section = b.product_gender[0] || b.product_sport[0];
                        } else {
                            b.analytics_section = utag.data.product_gender[0] || utag.data.product_sport[0];
                        }
                        b.analytics_section += '|' + (b.product_category && b.product_category[0] ? b.product_category[0] : '');
                        var prefix = 'PRODUCT';
                        b.analytics_pagename = prefix + '|' + b.product_name[0] + ' (' + b.product_id[0] + ')';
                    } else if (b.page_type == 'CLP' && b.breadcrumb) {
                        if (b.breadcrumb.length > 1) {
                            b.analytics_section = b.breadcrumb[1];
                            b.analytics_pagename = b.page_type + '|' + b.breadcrumb[1] + '|' + b.breadcrumb[0];
                        } else {
                            var path = document.location.pathname.toUpperCase();
                            path = path.substring(1);
                            path = path.indexOf('/') > -1 ? path.substring(0, path.indexOf('/')) : path;
                            b.analytics_pagename = b.page_type + '|' + path;
                            b.analytics_section = b.page_type;
                        }
                    } else if (b.page_type == 'PLP') {
                        if (!b.analytics_section) {
                            b.analytics_section = document.location.pathname.replace(/\//gi, '|').toUpperCase();
                        }
                        b.analytics_section = b.analytics_section.indexOf('|') === 0 ? b.analytics_section.substring(1) : b.analytics_section;
                        b.analytics_pagename = b.page_type + '|' + b.analytics_section;
                    } else if (b.page_type && (!b.page_type || b.page_type == '')) {
                        b.analytics_section = b.analytics_pagename = b.page_type;
                    } else if (b.page_name && b.page_type) {
                        b.analytics_section = b.page_type;
                        if (b.page_name == 'HOME') {
                            b.analytics_pagename = b.page_name;
                        } else {
                            b.analytics_pagename = b.page_type + '|' + b.page_name;
                        }
                    } else {
                        b.analytics_section = b.page_type || 'OTHER';
                        b.analytics_pagename = b.analytics_section + document.location.pathname.replace(/\//, '|').toUpperCase();
                    }
                }
                b.analytics_section = b.analytics_section.replace(/\:\s/g, '|').replace(/\:$/, '');
                b.analytics_pagename = b.analytics_pagename.replace(/\:\s/g, '|');
                utag.data.analytics_pagename = b.analytics_pagename;
                utag.data.analytics_section = b.analytics_section;
            } else {
                b.analytics_pagename = utag.data.analytics_pagename;
                b.analytics_section = utag.data.analytics_section;
            }
        }, function(a, b, c, d) {
            try {
                if (1) {
                    c = [b['country'], b['analytics_pagename']];
                    b['country_pagename'] = c.join('|')
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((typeof b['customer_email'] != 'undefined' && typeof b['customer_email'] != 'undefined' && b['customer_email'] != '')) {
                    try {
                        b['customer_hashed_email'] = decodeURIComponent(b.customer_email || '').toLowerCase()
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            utag.ut.md5 = function(s, p) {
                var m = {},
                    l = m.lib = {},
                    n = function() {},
                    r = l.Base = {
                        extend: function(b) {
                            n.prototype = this;
                            var h = new n;
                            b && h.mixIn(b);
                            h.hasOwnProperty("init") || (h.init = function() {
                                h.$super.init.apply(this, arguments)
                            });
                            h.init.prototype = h;
                            h.$super = this;
                            return h
                        },
                        create: function() {
                            var b = this.extend();
                            b.init.apply(b, arguments);
                            return b
                        },
                        init: function() {},
                        mixIn: function(b) {
                            for (var h in b) b.hasOwnProperty(h) && (this[h] = b[h]);
                            b.hasOwnProperty("toString") && (this.toString = b.toString)
                        },
                        clone: function() {
                            return this.init.prototype.extend(this)
                        }
                    },
                    q = l.WordArray = r.extend({
                        init: function(b, h) {
                            b = this.words = b || [];
                            this.sigBytes = h != p ? h : 4 * b.length
                        },
                        toString: function(b) {
                            return (b || t).stringify(this)
                        },
                        concat: function(b) {
                            var h = this.words,
                                a = b.words,
                                j = this.sigBytes;
                            b = b.sigBytes;
                            this.clamp();
                            if (j % 4)
                                for (var g = 0; g < b; g++) h[j + g >>> 2] |= (a[g >>> 2] >>> 24 - 8 * (g % 4) & 255) << 24 - 8 * ((j + g) % 4);
                            else if (65535 < a.length)
                                for (g = 0; g < b; g += 4) h[j + g >>> 2] = a[g >>> 2];
                            else h.push.apply(h, a);
                            this.sigBytes += b;
                            return this
                        },
                        clamp: function() {
                            var b = this.words,
                                h = this.sigBytes;
                            b[h >>> 2] &= 4294967295 << 32 - 8 * (h % 4);
                            b.length = s.ceil(h / 4)
                        },
                        clone: function() {
                            var b = r.clone.call(this);
                            b.words = this.words.slice(0);
                            return b
                        },
                        random: function(b) {
                            for (var h = [], a = 0; a < b; a += 4) h.push(4294967296 * s.random() | 0);
                            return new q.init(h, b)
                        }
                    }),
                    v = m.enc = {},
                    t = v.Hex = {
                        stringify: function(b) {
                            var a = b.words;
                            b = b.sigBytes;
                            for (var g = [], j = 0; j < b; j++) {
                                var k = a[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                                g.push((k >>> 4).toString(16));
                                g.push((k & 15).toString(16))
                            }
                            return g.join("")
                        },
                        parse: function(b) {
                            for (var a = b.length, g = [], j = 0; j < a; j += 2) g[j >>> 3] |= parseInt(b.substr(j, 2), 16) << 24 - 4 * (j % 8);
                            return new q.init(g, a / 2)
                        }
                    },
                    a = v.Latin1 = {
                        stringify: function(b) {
                            var a = b.words;
                            b = b.sigBytes;
                            for (var g = [], j = 0; j < b; j++) g.push(String.fromCharCode(a[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
                            return g.join("")
                        },
                        parse: function(b) {
                            for (var a = b.length, g = [], j = 0; j < a; j++) g[j >>> 2] |= (b.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
                            return new q.init(g, a)
                        }
                    },
                    u = v.Utf8 = {
                        stringify: function(b) {
                            try {
                                return decodeURIComponent(escape(a.stringify(b)))
                            } catch (g) {
                                throw Error("Malformed UTF-8 data");
                            }
                        },
                        parse: function(b) {
                            return a.parse(unescape(encodeURIComponent(b)))
                        }
                    },
                    g = l.BufferedBlockAlgorithm = r.extend({
                        reset: function() {
                            this._data = new q.init;
                            this._nDataBytes = 0
                        },
                        _append: function(b) {
                            "string" == typeof b && (b = u.parse(b));
                            this._data.concat(b);
                            this._nDataBytes += b.sigBytes
                        },
                        _process: function(b) {
                            var a = this._data,
                                g = a.words,
                                j = a.sigBytes,
                                k = this.blockSize,
                                m = j / (4 * k),
                                m = b ? s.ceil(m) : s.max((m | 0) - this._minBufferSize, 0);
                            b = m * k;
                            j = s.min(4 * b, j);
                            if (b) {
                                for (var l = 0; l < b; l += k) this._doProcessBlock(g, l);
                                l = g.splice(0, b);
                                a.sigBytes -= j
                            }
                            return new q.init(l, j)
                        },
                        clone: function() {
                            var b = r.clone.call(this);
                            b._data = this._data.clone();
                            return b
                        },
                        _minBufferSize: 0
                    });
                l.Hasher = g.extend({
                    cfg: r.extend(),
                    init: function(b) {
                        this.cfg = this.cfg.extend(b);
                        this.reset()
                    },
                    reset: function() {
                        g.reset.call(this);
                        this._doReset()
                    },
                    update: function(b) {
                        this._append(b);
                        this._process();
                        return this
                    },
                    finalize: function(b) {
                        b && this._append(b);
                        return this._doFinalize()
                    },
                    blockSize: 16,
                    _createHelper: function(b) {
                        return function(a, g) {
                            return (new b.init(g)).finalize(a)
                        }
                    },
                    _createHmacHelper: function(b) {
                        return function(a, g) {
                            return (new k.HMAC.init(b, g)).finalize(a)
                        }
                    }
                });
                var k = m.algo = {};
                return m
            }(Math);
            (function(s) {
                function p(a, k, b, h, l, j, m) {
                    a = a + (k & b | ~k & h) + l + m;
                    return (a << j | a >>> 32 - j) + k
                }

                function m(a, k, b, h, l, j, m) {
                    a = a + (k & h | b & ~h) + l + m;
                    return (a << j | a >>> 32 - j) + k
                }

                function l(a, k, b, h, l, j, m) {
                    a = a + (k ^ b ^ h) + l + m;
                    return (a << j | a >>> 32 - j) + k
                }

                function n(a, k, b, h, l, j, m) {
                    a = a + (b ^ (k | ~h)) + l + m;
                    return (a << j | a >>> 32 - j) + k
                }
                for (var r = utag.ut.md5, q = r.lib, v = q.WordArray, t = q.Hasher, q = r.algo, a = [], u = 0; 64 > u; u++) a[u] = 4294967296 * s.abs(s.sin(u + 1)) | 0;
                q = q.MD5 = t.extend({
                    _doReset: function() {
                        this._hash = new v.init([1732584193, 4023233417, 2562383102, 271733878])
                    },
                    _doProcessBlock: function(g, k) {
                        for (var b = 0; 16 > b; b++) {
                            var h = k + b,
                                w = g[h];
                            g[h] = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360
                        }
                        var b = this._hash.words,
                            h = g[k + 0],
                            w = g[k + 1],
                            j = g[k + 2],
                            q = g[k + 3],
                            r = g[k + 4],
                            s = g[k + 5],
                            t = g[k + 6],
                            u = g[k + 7],
                            v = g[k + 8],
                            x = g[k + 9],
                            y = g[k + 10],
                            z = g[k + 11],
                            A = g[k + 12],
                            B = g[k + 13],
                            C = g[k + 14],
                            D = g[k + 15],
                            c = b[0],
                            d = b[1],
                            e = b[2],
                            f = b[3],
                            c = p(c, d, e, f, h, 7, a[0]),
                            f = p(f, c, d, e, w, 12, a[1]),
                            e = p(e, f, c, d, j, 17, a[2]),
                            d = p(d, e, f, c, q, 22, a[3]),
                            c = p(c, d, e, f, r, 7, a[4]),
                            f = p(f, c, d, e, s, 12, a[5]),
                            e = p(e, f, c, d, t, 17, a[6]),
                            d = p(d, e, f, c, u, 22, a[7]),
                            c = p(c, d, e, f, v, 7, a[8]),
                            f = p(f, c, d, e, x, 12, a[9]),
                            e = p(e, f, c, d, y, 17, a[10]),
                            d = p(d, e, f, c, z, 22, a[11]),
                            c = p(c, d, e, f, A, 7, a[12]),
                            f = p(f, c, d, e, B, 12, a[13]),
                            e = p(e, f, c, d, C, 17, a[14]),
                            d = p(d, e, f, c, D, 22, a[15]),
                            c = m(c, d, e, f, w, 5, a[16]),
                            f = m(f, c, d, e, t, 9, a[17]),
                            e = m(e, f, c, d, z, 14, a[18]),
                            d = m(d, e, f, c, h, 20, a[19]),
                            c = m(c, d, e, f, s, 5, a[20]),
                            f = m(f, c, d, e, y, 9, a[21]),
                            e = m(e, f, c, d, D, 14, a[22]),
                            d = m(d, e, f, c, r, 20, a[23]),
                            c = m(c, d, e, f, x, 5, a[24]),
                            f = m(f, c, d, e, C, 9, a[25]),
                            e = m(e, f, c, d, q, 14, a[26]),
                            d = m(d, e, f, c, v, 20, a[27]),
                            c = m(c, d, e, f, B, 5, a[28]),
                            f = m(f, c, d, e, j, 9, a[29]),
                            e = m(e, f, c, d, u, 14, a[30]),
                            d = m(d, e, f, c, A, 20, a[31]),
                            c = l(c, d, e, f, s, 4, a[32]),
                            f = l(f, c, d, e, v, 11, a[33]),
                            e = l(e, f, c, d, z, 16, a[34]),
                            d = l(d, e, f, c, C, 23, a[35]),
                            c = l(c, d, e, f, w, 4, a[36]),
                            f = l(f, c, d, e, r, 11, a[37]),
                            e = l(e, f, c, d, u, 16, a[38]),
                            d = l(d, e, f, c, y, 23, a[39]),
                            c = l(c, d, e, f, B, 4, a[40]),
                            f = l(f, c, d, e, h, 11, a[41]),
                            e = l(e, f, c, d, q, 16, a[42]),
                            d = l(d, e, f, c, t, 23, a[43]),
                            c = l(c, d, e, f, x, 4, a[44]),
                            f = l(f, c, d, e, A, 11, a[45]),
                            e = l(e, f, c, d, D, 16, a[46]),
                            d = l(d, e, f, c, j, 23, a[47]),
                            c = n(c, d, e, f, h, 6, a[48]),
                            f = n(f, c, d, e, u, 10, a[49]),
                            e = n(e, f, c, d, C, 15, a[50]),
                            d = n(d, e, f, c, s, 21, a[51]),
                            c = n(c, d, e, f, A, 6, a[52]),
                            f = n(f, c, d, e, q, 10, a[53]),
                            e = n(e, f, c, d, y, 15, a[54]),
                            d = n(d, e, f, c, w, 21, a[55]),
                            c = n(c, d, e, f, v, 6, a[56]),
                            f = n(f, c, d, e, D, 10, a[57]),
                            e = n(e, f, c, d, t, 15, a[58]),
                            d = n(d, e, f, c, B, 21, a[59]),
                            c = n(c, d, e, f, r, 6, a[60]),
                            f = n(f, c, d, e, z, 10, a[61]),
                            e = n(e, f, c, d, j, 15, a[62]),
                            d = n(d, e, f, c, x, 21, a[63]);
                        b[0] = b[0] + c | 0;
                        b[1] = b[1] + d | 0;
                        b[2] = b[2] + e | 0;
                        b[3] = b[3] + f | 0
                    },
                    _doFinalize: function() {
                        var a = this._data,
                            k = a.words,
                            b = 8 * this._nDataBytes,
                            h = 8 * a.sigBytes;
                        k[h >>> 5] |= 128 << 24 - h % 32;
                        var l = s.floor(b / 4294967296);
                        k[(h + 64 >>> 9 << 4) + 15] = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360;
                        k[(h + 64 >>> 9 << 4) + 14] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360;
                        a.sigBytes = 4 * (k.length + 1);
                        this._process();
                        a = this._hash;
                        k = a.words;
                        for (b = 0; 4 > b; b++) h = k[b], k[b] = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360;
                        return a
                    },
                    clone: function() {
                        var a = t.clone.call(this);
                        a._hash = this._hash.clone();
                        return a
                    }
                });
                r.MD5 = t._createHelper(q);
                r.HmacMD5 = t._createHmacHelper(q)
            })(Math);
            try {
                if (typeof b['customer_hashed_email'] != 'undefined' && b['customer_hashed_email'] != '') {
                    b['customer_hashed_email'] = utag.ut.md5.MD5(b['customer_hashed_email']).toString();
                }
            } catch (e) {}
        }, function(a, b) {
            try {
                if ((typeof b['customer_hashed_email'] != 'undefined' && typeof b['customer_hashed_email'] != 'undefined' && b['customer_hashed_email'] != '')) {
                    document.cookie = "customer_hashed_email_pers=" + b['customer_hashed_email'] + ";path=/;domain=" + utag.cfg.domain + ";expires=" + (function() {
                        var d = new Date();
                        d.setTime(d.getTime() + (365 * 86400000));
                        return d.toGMTString()
                    })() + "";
                    b['cp.customer_hashed_email_pers'] = b['customer_hashed_email'];
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((typeof b['cp.euci_persisted'] != 'undefined' && typeof b['cp.euci_persisted'] != 'undefined' && b['cp.euci_persisted'] != '' && typeof b['euci'] == 'undefined') || (typeof b['cp.euci_persisted'] != 'undefined' && typeof b['cp.euci_persisted'] != 'undefined' && b['cp.euci_persisted'] != '' && typeof b['euci'] != 'undefined' && b['euci'] == '')) {
                    b['euci'] = b['cp.euci_persisted']
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((typeof b['qp.cm_mmca3'] != 'undefined' && b['qp.cm_mmca3'] != '' && typeof b['euci'] != 'undefined' && b['euci'] == '') || (typeof b['qp.cm_mmca3'] != 'undefined' && b['qp.cm_mmca3'] != '' && typeof b['euci'] == 'undefined')) {
                    b['euci'] = b['qp.cm_mmca3']
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((typeof b['euci'] != 'undefined' && typeof b['euci'] != 'undefined' && b['euci'] != '')) {
                    document.cookie = "euci_persisted=" + b['euci'] + ";path=/;domain=" + utag.cfg.domain + ";expires=" + (function() {
                        var d = new Date();
                        d.setTime(d.getTime() + (365 * 86400000));
                        return d.toGMTString()
                    })() + "";
                    b['cp.euci_persisted'] = b['euci'];
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            if (b.event && b.event == 'ORDER CANCELLATION') {
                b.event_category = 'ORDER CANCELLATION';
            }
            if (b.order_id && b.event_category && b.event_category == 'ORDER CANCELLATION') {
                b.event_name = (b.event_name ? b.event_name + ':' : '') + b.order_id;
                b.order_id = '';
            }
            if (b.page_name == 'COD REFUND COMPLETE' || b.page_name == 'COD REFUND' && a == 'view') {
                b.order_id = '';
            }
        }, function(a, b) {
            try {
                if (typeof b['order_id'] != 'undefined' && b['order_id'] != '') {
                    b['order_promo_codes'] = b['promo_code']
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b, c, d) {
            b._ccity = (typeof b['customer_city'] != 'undefined') ? b['customer_city'] : '';
            b._ccountry = (typeof b['customer_country'] != 'undefined') ? b['customer_country'] : '';
            b._ccurrency = (typeof b['currency_code'] != 'undefined') ? b['currency_code'] : '';
            b._ccustid = (typeof b['customer_id'] != 'undefined') ? b['customer_id'] : '';
            b._corder = (typeof b['order_id'] != 'undefined') ? b['order_id'] : '';
            b._cpromo = (typeof b['order_promo_codes'] != 'undefined') ? b['order_promo_codes'] : '';
            b._cship = (typeof b['shipping_total'] != 'undefined') ? b['shipping_total'] : '';
            b._cstate = (typeof b['customer_state'] != 'undefined') ? b['customer_state'] : '';
            b._cstore = (typeof b['market_name'] != 'undefined') ? b['market_name'] : 'web';
            b._csubtotal = (typeof b['order_subtotal'] != 'undefined') ? b['order_subtotal'] : '';
            b._ctax = (typeof b['tax_amount'] != 'undefined') ? b['tax_amount'] : '';
            b._ctotal = (typeof b['order_total'] != 'undefined') ? b['order_total'] : '';
            b._ctype = '';
            b._czip = (typeof b['customer_zip'] != 'undefined') ? b['customer_zip'] : '';
            b._cprod = (typeof b['product_id'] != 'undefined' && b['product_id'].length > 0) ? b['product_id'] : [];
            b._cprodname = (typeof b['product_name'] != 'undefined' && b['product_name'].length > 0) ? b['product_name'] : [];
            b._cbrand = (typeof b['product_brand'] != 'undefined' && b['product_brand'].length > 0) ? b['product_brand'] : [];
            b._ccat = (typeof b['product_category'] != 'undefined' && b['product_category'].length > 0) ? b['product_category'] : [];
            b._ccat2 = [];
            b._cquan = (typeof b['product_quantity'] != 'undefined' && b['product_quantity'].length > 0) ? b['product_quantity'] : [];
            b._cprice = (typeof b['product_price'] != 'undefined' && b['product_price'].length > 0) ? b['product_price'] : [];
            b._csku = (typeof b['product_sku'] != 'undefined' && b['product_sku'].length > 0) ? b['product_sku'] : [];
            b._cpdisc = [];
            if (b._cprod.length == 0) {
                b._cprod = b._csku.slice()
            };
            if (b._cprodname.length == 0) {
                b._cprodname = b._csku.slice()
            };

            function tf(a) {
                if (a == '' || isNaN(parseFloat(a))) {
                    return a
                } else {
                    return (parseFloat(a)).toFixed(2)
                }
            };
            b._ctotal = tf(b._ctotal);
            b._csubtotal = tf(b._csubtotal);
            b._ctax = tf(b._ctax);
            b._cship = tf(b._cship);
            for (c = 0; c < b._cprice.length; c++) {
                b._cprice[c] = tf(b._cprice[c])
            };
            for (c = 0; c < b._cpdisc.length; c++) {
                b._cpdisc[c] = tf(b._cpdisc[c])
            };
        }, function(a, b) {
            try {
                if (1) {
                    try {
                        b['page_url_stripped'] = window.location.hostname + window.location.pathname
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (b['page_type'].toString().toLowerCase() == 'ERROR'.toLowerCase()) {
                    b['error_url'] = b['dom.url']
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            function addZero(i) {
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
            }
            var tempdate = new Date;
            var minutes = addZero(tempdate.getMinutes());
            var hour = addZero(tempdate.getHours());
            var dayOfWeek = tempdate.getDay();
            if (dayOfWeek == 0) {
                dayOfWeek = 'Sunday'
            } else if (dayOfWeek == 1) {
                dayOfWeek = 'Monday'
            } else if (dayOfWeek == 2) {
                dayOfWeek = 'Tuesday'
            } else if (dayOfWeek == 3) {
                dayOfWeek = 'Wednesday'
            } else if (dayOfWeek == 4) {
                dayOfWeek = 'Thursday'
            } else if (dayOfWeek == 5) {
                dayOfWeek = 'Friday'
            } else if (dayOfWeek == 6) {
                dayOfWeek = 'Saturday'
            } else {}
            b.time_local = dayOfWeek + ' ' + hour + ':' + minutes;
        }, function(a, b) {
            if (b.product_delivery_carrier || b.product_delivery_charge || b.product_delivery_method || b.product_delivery_point || b.product_delivery_time) {
                b.product_delivery_details = ((b.product_delivery_carrier || 'no carrier') + ':' + (b.product_delivery_charge || 'no delivery charge') + ':' + (b.product_delivery_method || 'no delivery method') + ':' + (b.product_delivery_point || 'no delivery point') + ':' + (b.product_delivery_time || 'no delivery time')).toUpperCase();
            }
        }, function(a, b) {
            b.customer_location = '';
            if (b.customer_city || b.customer_state || b.customer_country) {
                b.customer_location = b.customer_city || 'NONE';
                b.customer_location += ':' + (b.customer_state || 'NONE');
                b.customer_location += ':' + (b.customer_country || 'NONE');
            }
        }, function(a, b) {
            if (b.logged_in == 'TRUE') {
                b.customer_status = 'LOGGED IN';
            } else if (!b.is_iframe) {
                b.customer_status = 'ANONYMOUS';
            }
        }, function(a, b) {
            if (b.page_name == 'SHIPPING' && b.page_type == 'CHECKOUT' && document.location.pathname.match(/paypal/gi) == null && document.referrer.match(/querypaypal/gi) == null) {
                b.checkout_type = (b.logged_in == 'TRUE' ? 'REGISTERED' : 'GUEST') + ' CHECKOUT';
            } else if (b.page_name == 'PAYMENT' && b.page_type == 'CHECKOUT') {
                b.checkout_type = (b.logged_in == 'TRUE' ? 'REGISTERED' : 'GUEST') + ' CHECKOUT';
            }
        }, function(a, b) {
            if (b.breadcrumb && b.page_type && b.page_type.indexOf('MINICART') == -1) {
                b.page_breadcrumb = '';
                for (var i = 0; i < b.breadcrumb.length; i++) {
                    b.page_breadcrumb += (b.page_breadcrumb != '' ? '|' : '') + 'BC' + (i + 1) + ':' + b.breadcrumb[i];
                }
            } else {
                b.page_breadcrumb = '';
            }
        }, function(a, b) {
            if (b.form_error && b.form_error.length > 0 && Array.isArray(b.form_error)) {
                for (var i = 0; i < b.form_error.length; i++) {
                    if (b.form_error[i].indexOf('|') > -1) {
                        b.form_error[i] = b.form_error[i].substring(0, b.form_error[i].indexOf('|'));
                    }
                }
            }
            b.form_error = b.form_error || '';
            if ((b.form_error && b.form_error.length > 0) || b.payment_error) {
                b.form_name = b.form_name || b.analytics_pagename;
                b.form_error = (!Array.isArray(b.form_error) && b.form_error.indexOf('|') > -1) ? b.form_error.split('|')[0] : b.form_error;
                if (b.payment_error) {
                    b.form_error += (b.form_error ? '|' : '') + b.payment_error;
                }
                if (!b.event_name) {
                    b.event_name = b.analytics_pagename;
                }
                if (!b.event_category) {
                    b.event_category = 'FORM ERRORS';
                }
            } else if (b.form_error && b.form_error.length == 0) {
                b.form_error = '';
                b.form_name = '';
            }
        }, function(a, b) {
            var mainCookie = utag.loader.RC('utag_main');
            if (b.event_category && b.event_category.toUpperCase().indexOf('SEARCH-') > -1) {
                b.event_name = b.event_name.trim();
                b.search_term = (b.search_term || b.form_field_value).trim();
                var cookieVal = b.event_category + '|' + b.event_name + '|' + b.search_term;
                utag.loader.SC('utag_main', {
                    'search_data': cookieVal.toUpperCase() + ';exp-30m'
                });
                mainCookie = utag.loader.RC('utag_main');
                if (b.page_type != 'HELP') {
                    return false;
                }
            }
            if (mainCookie && mainCookie.search_data) {
                var searchEls = mainCookie.search_data.split('|');
                b.event_category = searchEls[0];
                b.event_name = searchEls[1];
                b.search_term = searchEls[2];
                if (b.event_category && b.event_name) {
                    b.search_term += '|' + b.event_category + '|' + b.event_name;
                }
                utag.loader.SC('utag_main', {
                    'search_data': ''
                }, 'd');
            }
            if (b.search_term && b.event_category && b.event_category.indexOf('PLP ') == -1) {
                b.search_type = b.event_category || 'SEARCH-QUERY';
                b.search_term = b.search_term.replace(/[',"\t\n\+]/g, "").toUpperCase();
                if (!b.search_results && b.total_results) {
                    b.search_results = b.total_results;
                }
            }
            if ((b.page_type.indexOf('SEARCH') > -1 || b.page_type.indexOf('HELP') > -1) && b.search_term) {
                if (b.total_results.toString() && !b.search_results) {
                    b.search_results = b.total_results;
                }
                if (b.search_results.toString() == '0' || !b.search_results) {
                    b.search_term = 'NULL:' + b.search_term;
                    b.search_results = 'ZERO';
                }
            }
            if (b.search_term) {
                utag.data.did_search = 'TRUE';
            }
            if (b.page_type != 'PLP') {
                b.total_results = '';
            }
        }, function(a, b) {
            try {
                if (1) {
                    try {
                        b['adobe_timepart'] = s.getTimeParting('s', '+2');
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            if (b.order_id && b.order_subtotal) {
                b.product_prorated_shipping = [];
                b.product_prorated_gift_card = [];
                var sub = parseFloat(b.order_subtotal || 0),
                    ship = parseFloat(b.shipping_total || 0),
                    gift = parseFloat(b.order_gift_card_amount || 0);
                for (var i = 0; i < b.product_id.length; i++) {
                    var price = parseFloat(b.product_price[i] || 0),
                        qty = parseInt(b.product_quantity[i] || 0),
                        itemPrice = price * qty,
                        pct = itemPrice / sub;
                    var shipPct = ship && pct ? (pct * ship).toFixed(2) : '',
                        giftPct = gift && pct ? (pct * gift).toFixed(2) : '';
                    b.product_prorated_shipping.push(shipPct);
                    b.product_prorated_gift_card.push(giftPct);
                    if (b.product_prorated_vat && b.product_prorated_vat[i]) {
                        b.product_prorated_vat[i] = parseFloat(b.product_prorated_vat[i]).toFixed(2);
                    }
                    if (b.product_prorated_discount && b.product_prorated_discount[i]) {
                        b.product_prorated_discount[i] = parseFloat(b.product_prorated_discount[i]).toFixed(2);
                    }
                }
                if (b.delivery_method == 'SHIPTOSTORE') {
                    b.product_cnc_revenue = [];
                    b.product_cnc_units = [];
                    for (var i = 0; i < b.product_price.length; i++) {
                        b.product_cnc_units.push(b.product_quantity[i]);
                        b.product_cnc_revenue.push((parseFloat(b.product_price[i]) * parseFloat(b.product_quantity[i])).toFixed(2));
                    }
                    b._cprice = b._cquan = b.product_prorated_vat = b.product_prorated_discount = b.product_prorated_shipping = b.product_prorated_gift_card = [];
                }
            }
        }, function(a, b) {
            if (b.order_id) {
                b.product_price_eur = [];
                b.product_price_fixed = [];
                b.order_subtotal_eur = parseFloat(b.currency_code == 'EUR' ? b.order_subtotal : tealiumiq_currency.convert(b.order_subtotal, b.currency_code, 'EUR'));
                for (var i = 0; i < b.product_price.length; i++) {
                    var qty = parseFloat(b.product_quantity[i]),
                        price = parseFloat(b.currency_code == 'EUR' ? b.product_price[i] : tealiumiq_currency.convert(b.product_price[i], b.currency_code, 'EUR'));
                    b.product_price_eur.push((price * qty).toFixed(2));
                    b.product_price_fixed.push(((b.product_price[i] * qty) / parseFloat(b.exchange_rate_fixed)).toFixed(2));
                }
                if (b.product_cnc_revenue && b.product_cnc_revenue.length > 0) {
                    b.product_cnc_revenue_euros = [];
                    for (var i = 0; i < b.product_cnc_revenue.length; i++) {
                        var qty = parseFloat(b.product_cnc_units[i]),
                            price = parseFloat(b.currency_code == 'EUR' ? b.product_cnc_revenue[i] : tealiumiq_currency.convert(b.product_cnc_revenue[i], b.currency_code, 'EUR'));
                        b.product_cnc_revenue_euros.push((price * qty).toFixed(2));
                    }
                }
            }
        }, function(a, b) {
            if (b['cp.notice_preferences']) {
                if (b['cp.notice_preferences'].indexOf(':') > -1) {
                    b['cp.notice_preferences'] = b['cp.notice_preferences'].substring(0, b['cp.notice_preferences'].indexOf(':'));
                }
            } else {
                b['cp.notice_preferences'] = (b['geo_country'].match(/^(AT|BE|BU|CY|CZ|DE|DK|EE|ES|ET|FI|FR|GB|GR|HR|HU|IC|IE|IT|LH|LT|LU|MA|NL|NO|PL|PT|RO|SE|SK|SL|SV|UK)$/i) !== null) ? 'NO DECISION' : 'NON EU';
            }
        }, function(a, b) {
            if (b.order_total && b.order_id) {
                b.order_total_cents = utag_data.order_total_cents = (parseFloat(b.order_total) * 100).toFixed(0);
            }
        }, function(a, b) {
            try {
                if (1) {
                    b.path_plus_query = b['dom.pathname'] + (b['dom.query_string'] ? '?' + b['dom.query_string'] : '');
                    if (b.email_in_url && b.email_in_url == 'true') {
                        var replace_text = b.path_plus_query.match(/[a-zA-Z0-9._-]+(@|%40)[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}/gi)[0];
                        b.path_plus_query = b.path_plus_query.replace(replace_text, 'SUPPRESSED_EMAIL_ADDRESS');
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    b.product_original_price = [];
                    for (var i = 0; i < b.product_price.length; i++) {
                        if (b.product_prorated_discount) {
                            var product_prorated_discount_no_vat = 0;
                            product_prorated_discount_no_vat = b.product_prorated_discount[i] * (1 - (b.product_price_vat[i] - b.product_price[i]) / b.product_price_vat[i]);
                            b.product_original_price[i] = product_prorated_discount_no_vat + parseFloat(b.product_price[i]) * parseInt(b.product_quantity[i]);
                            b.product_original_price[i] = b.product_original_price[i].toFixed(2).toString();
                        } else {
                            b.product_original_price[i] = b.product_price_vat[i];
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    try {
                        b['user_agent'] = navigator.userAgent
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    b['previous_page_name'] = typeof(utag.loader.RC('utag_main')._prevpage) != 'undefined' && utag.loader.RC('utag_main')._prevpage != '' ? utag.loader.RC('utag_main')._prevpage : 'NO VALUE';
                    if (a == 'view') {
                        utag.loader.SC('utag_main', {
                            '_prevpage': b['analytics_pagename'] + ';exp-1h'
                        })
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                utag.runonce = utag.runonce || {};
                utag.runonce.ext = utag.runonce.ext || {};
                if (typeof utag.runonce.ext[382] == 'undefined') {
                    utag.runonce.ext[382] = 1;
                    if (1) {
                        if (typeof(visitor) != 'undefined' && typeof(visitor.getMarketingCloudVisitorID) != 'undefined') {
                            utag.data.adobe_visitor_id = visitor.getMarketingCloudVisitorID();
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((typeof b['customer_order_history_status'] != 'undefined' && b['customer_order_history_status'].toString().indexOf('3') > -1)) {
                    b['new_existing_purchaser'] = 'new'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((typeof b['customer_order_history_status'] != 'undefined' && b['customer_order_history_status'].toString().indexOf('2') > -1) || (typeof b['customer_order_history_status'] != 'undefined' && b['customer_order_history_status'].toString().indexOf('1') > -1)) {
                    b['new_existing_purchaser'] = 'existing'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            b.tealium_timestamp_local = b.tealium_timestamp_local.indexOf('.') > -1 ? b.tealium_timestamp_local : b.tealium_timestamp_local.split('.')[0];
        }, function(a, b) {
            try {
                if (1) {
                    try {
                        b['new_repeat'] = b['cp.utag_main__sn'] > 1 ? 'REPEAT' : 'NEW'
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    if (!utag.ut.sha256) {
                        utag.ut.sha256 = function(h, s) {
                            var f = {},
                                t = f.lib = {},
                                g = function() {},
                                j = t.Base = {
                                    extend: function(a) {
                                        g.prototype = this;
                                        var c = new g;
                                        a && c.mixIn(a);
                                        c.hasOwnProperty("init") || (c.init = function() {
                                            c.$super.init.apply(this, arguments)
                                        });
                                        c.init.prototype = c;
                                        c.$super = this;
                                        return c
                                    },
                                    create: function() {
                                        var a = this.extend();
                                        a.init.apply(a, arguments);
                                        return a
                                    },
                                    init: function() {},
                                    mixIn: function(a) {
                                        for (var c in a)
                                            a.hasOwnProperty(c) && (this[c] = a[c]);
                                        a.hasOwnProperty("toString") && (this.toString = a.toString)
                                    },
                                    clone: function() {
                                        return this.init.prototype.extend(this)
                                    }
                                },
                                q = t.WordArray = j.extend({
                                    init: function(a, c) {
                                        a = this.words = a || [];
                                        this.sigBytes = c != s ? c : 4 * a.length
                                    },
                                    toString: function(a) {
                                        return (a || u).stringify(this)
                                    },
                                    concat: function(a) {
                                        var c = this.words,
                                            d = a.words,
                                            b = this.sigBytes;
                                        a = a.sigBytes;
                                        this.clamp();
                                        if (b % 4)
                                            for (var e = 0; e < a; e++)
                                                c[b + e >>> 2] |= (d[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((b + e) % 4);
                                        else if (65535 < d.length)
                                            for (e = 0; e < a; e += 4)
                                                c[b + e >>> 2] = d[e >>> 2];
                                        else
                                            c.push.apply(c, d);
                                        this.sigBytes += a;
                                        return this
                                    },
                                    clamp: function() {
                                        var a = this.words,
                                            c = this.sigBytes;
                                        a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                                        a.length = h.ceil(c / 4)
                                    },
                                    clone: function() {
                                        var a = j.clone.call(this);
                                        a.words = this.words.slice(0);
                                        return a
                                    },
                                    random: function(a) {
                                        for (var c = [], d = 0; d < a; d += 4)
                                            c.push(4294967296 * h.random() | 0);
                                        return new q.init(c, a)
                                    }
                                }),
                                v = f.enc = {},
                                u = v.Hex = {
                                    stringify: function(a) {
                                        var c = a.words;
                                        a = a.sigBytes;
                                        for (var d = [], b = 0; b < a; b++) {
                                            var e = c[b >>> 2] >>> 24 - 8 * (b % 4) & 255;
                                            d.push((e >>> 4).toString(16));
                                            d.push((e & 15).toString(16))
                                        }
                                        return d.join("")
                                    },
                                    parse: function(a) {
                                        for (var c = a.length, d = [], b = 0; b < c; b += 2)
                                            d[b >>> 3] |= parseInt(a.substr(b, 2), 16) << 24 - 4 * (b % 8);
                                        return new q.init(d, c / 2)
                                    }
                                },
                                k = v.Latin1 = {
                                    stringify: function(a) {
                                        var c = a.words;
                                        a = a.sigBytes;
                                        for (var d = [], b = 0; b < a; b++)
                                            d.push(String.fromCharCode(c[b >>> 2] >>> 24 - 8 * (b % 4) & 255));
                                        return d.join("")
                                    },
                                    parse: function(a) {
                                        for (var c = a.length, d = [], b = 0; b < c; b++)
                                            d[b >>> 2] |= (a.charCodeAt(b) & 255) << 24 - 8 * (b % 4);
                                        return new q.init(d, c)
                                    }
                                },
                                l = v.Utf8 = {
                                    stringify: function(a) {
                                        try {
                                            return decodeURIComponent(escape(k.stringify(a)))
                                        } catch (c) {
                                            throw Error("Malformed UTF-8 data");
                                        }
                                    },
                                    parse: function(a) {
                                        return k.parse(unescape(encodeURIComponent(a)))
                                    }
                                },
                                x = t.BufferedBlockAlgorithm = j.extend({
                                    reset: function() {
                                        this._data = new q.init;
                                        this._nDataBytes = 0
                                    },
                                    _append: function(a) {
                                        "string" == typeof a && (a = l.parse(a));
                                        this._data.concat(a);
                                        this._nDataBytes += a.sigBytes
                                    },
                                    _process: function(a) {
                                        var c = this._data,
                                            d = c.words,
                                            b = c.sigBytes,
                                            e = this.blockSize,
                                            f = b / (4 * e),
                                            f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0);
                                        a = f * e;
                                        b = h.min(4 * a, b);
                                        if (a) {
                                            for (var m = 0; m < a; m += e)
                                                this._doProcessBlock(d, m);
                                            m = d.splice(0, a);
                                            c.sigBytes -= b
                                        }
                                        return new q.init(m, b)
                                    },
                                    clone: function() {
                                        var a = j.clone.call(this);
                                        a._data = this._data.clone();
                                        return a
                                    },
                                    _minBufferSize: 0
                                });
                            t.Hasher = x.extend({
                                cfg: j.extend(),
                                init: function(a) {
                                    this.cfg = this.cfg.extend(a);
                                    this.reset()
                                },
                                reset: function() {
                                    x.reset.call(this);
                                    this._doReset()
                                },
                                update: function(a) {
                                    this._append(a);
                                    this._process();
                                    return this
                                },
                                finalize: function(a) {
                                    a && this._append(a);
                                    return this._doFinalize()
                                },
                                blockSize: 16,
                                _createHelper: function(a) {
                                    return function(c, d) {
                                        return (new a.init(d)).finalize(c)
                                    }
                                },
                                _createHmacHelper: function(a) {
                                    return function(c, d) {
                                        return (new w.HMAC.init(a, d)).finalize(c)
                                    }
                                }
                            });
                            var w = f.algo = {};
                            return f
                        }(Math);
                        (function(h) {
                            for (var s = utag.ut.sha256, f = s.lib, t = f.WordArray, g = f.Hasher, f = s.algo, j = [], q = [], v = function(a) {
                                    return 4294967296 * (a - (a | 0)) | 0
                                }, u = 2, k = 0; 64 > k;) {
                                var l;
                                a: {
                                    l = u;
                                    for (var x = h.sqrt(l), w = 2; w <= x; w++)
                                        if (!(l % w)) {
                                            l = !1;
                                            break a
                                        }
                                    l = !0
                                }
                                l && (8 > k && (j[k] = v(h.pow(u, 0.5))), q[k] = v(h.pow(u, 1 / 3)), k++);
                                u++
                            }
                            var a = [],
                                f = f.SHA256 = g.extend({
                                    _doReset: function() {
                                        this._hash = new t.init(j.slice(0))
                                    },
                                    _doProcessBlock: function(c, d) {
                                        for (var b = this._hash.words, e = b[0], f = b[1], m = b[2], h = b[3], p = b[4], j = b[5], k = b[6], l = b[7], n = 0; 64 > n; n++) {
                                            if (16 > n)
                                                a[n] = c[d + n] | 0;
                                            else {
                                                var r = a[n - 15],
                                                    g = a[n - 2];
                                                a[n] = ((r << 25 | r >>> 7) ^ (r << 14 | r >>> 18) ^ r >>> 3) + a[n - 7] + ((g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10) + a[n - 16]
                                            }
                                            r = l + ((p << 26 | p >>> 6) ^ (p << 21 | p >>> 11) ^ (p << 7 | p >>> 25)) + (p & j ^ ~p & k) + q[n] + a[n];
                                            g = ((e << 30 | e >>> 2) ^ (e << 19 | e >>> 13) ^ (e << 10 | e >>> 22)) + (e & f ^ e & m ^ f & m);
                                            l = k;
                                            k = j;
                                            j = p;
                                            p = h + r | 0;
                                            h = m;
                                            m = f;
                                            f = e;
                                            e = r + g | 0
                                        }
                                        b[0] = b[0] + e | 0;
                                        b[1] = b[1] + f | 0;
                                        b[2] = b[2] + m | 0;
                                        b[3] = b[3] + h | 0;
                                        b[4] = b[4] + p | 0;
                                        b[5] = b[5] + j | 0;
                                        b[6] = b[6] + k | 0;
                                        b[7] = b[7] + l | 0
                                    },
                                    _doFinalize: function() {
                                        var a = this._data,
                                            d = a.words,
                                            b = 8 * this._nDataBytes,
                                            e = 8 * a.sigBytes;
                                        d[e >>> 5] |= 128 << 24 - e % 32;
                                        d[(e + 64 >>> 9 << 4) + 14] = h.floor(b / 4294967296);
                                        d[(e + 64 >>> 9 << 4) + 15] = b;
                                        a.sigBytes = 4 * d.length;
                                        this._process();
                                        return this._hash
                                    },
                                    clone: function() {
                                        var a = g.clone.call(this);
                                        a._hash = this._hash.clone();
                                        return a
                                    }
                                });
                            s.SHA256 = g._createHelper(f);
                            s.HmacSHA256 = g._createHmacHelper(f)
                        })(Math);
                    }
                    if (b.customer_email && b.customer_email != localStorage.customer_email_sha256) {
                        localStorage.customer_email_sha256 = utag.ut.sha256.SHA256(b['customer_email']).toString();
                    }
                    var customer_email_sha256 = localStorage.customer_email_sha256 || null;
                    if (customer_email_sha256) {
                        b['customer_email_sha256'] = customer_email_sha256;
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    var checkboxes = ['marketing_email_consent_checked', 'try_cancellation_voucher'];
                    var form_checkboxes = [];
                    for (var i = 0; i < checkboxes.length; i++) {
                        if (typeof(b[checkboxes[i]]) != 'undefined') {
                            form_checkboxes.push(checkboxes[i].toUpperCase().replace(/\_/gi, ' ') + ':' + b[checkboxes[i]].toString().toUpperCase());
                        }
                    }
                    if (form_checkboxes.length > 0) {
                        b.form_checkboxes = form_checkboxes;
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    if (b.analytics_pagename != "CHECKOUT|COMPLETE") {
                        b.basket_size = b['cp.persistentBasketCount'];
                    }
                    if (b.analytics_pagename == "CHECKOUT|COMPLETE") {
                        var total = 0;
                        for (var i = 0; i < b.product_quantity.length; i++) {
                            total += parseInt(b.product_quantity[i]);
                        }
                        b.order_basket_size = total;
                        b.basket_size = b.order_basket_size;
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    if (b.product_status && b.product_status.length > 0) {
                        var prodcut_status_dict = {
                            'IN_STOCK': 'IN STOCK',
                            'NOT_AVAILABLE': 'OUT OF STOCK',
                            'PREVIEW': 'COMING SOON'
                        };
                        for (var i = 0; i < b.product_status.length; i++) {
                            b.product_status[i] = prodcut_status_dict[b.product_status[i]] || b.product_status[i];
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    for (var key in localStorage) {
                        if (key.indexOf('kxadidas') > -1) {
                            localStorage.removeItem(key);
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                utag.runonce = utag.runonce || {};
                utag.runonce.ext = utag.runonce.ext || {};
                if (typeof utag.runonce.ext[390] == 'undefined') {
                    utag.runonce.ext[390] = 1;
                    if (1) {
                        if (window.utag) {
                            utag.on_listener = function(elSelector, eventName, selector, fn) {
                                var element = document.querySelector(elSelector);
                                element.addEventListener(eventName, function(event) {
                                    var possibleTargets = element.querySelectorAll(selector);
                                    var target = event.target;
                                    for (var i = 0, l = possibleTargets.length; i < l; i++) {
                                        var el = target;
                                        var p = possibleTargets[i];
                                        while (el && el !== element) {
                                            if (el === p) {
                                                return fn.call(p, event);
                                            }
                                            el = el.parentNode;
                                        }
                                    }
                                });
                            }
                            utag.off_listener = function(elSelector, eventName, selector, fn) {
                                var element = document.querySelector(elSelector);
                                element.removeEventListener(eventName, function(event) {
                                    var possibleTargets = element.querySelectorAll(selector);
                                    var target = event.target;
                                    for (var i = 0, l = possibleTargets.length; i < l; i++) {
                                        var el = target;
                                        var p = possibleTargets[i];
                                        while (el && el !== element) {
                                            if (el === p) {
                                                return fn.call(p, event);
                                            }
                                            el = el.parentNode;
                                        }
                                    }
                                });
                            }
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                utag.runonce = utag.runonce || {};
                utag.runonce.ext = utag.runonce.ext || {};
                if (typeof utag.runonce.ext[391] == 'undefined') {
                    utag.runonce.ext[391] = 1;
                    if (1) {
                        if (utag.on_listener) {
                            utag.on_listener('body', 'click', '[data-auto-id*="yeezy-sidebar-"] a', function(e) {
                                utag.link({
                                    site_promotion_id: this.closest('[data-auto-id]').getAttribute('data-auto-id'),
                                    clicked_element: typeof(jQuery) != 'undefined' ? jQuery(this) : this
                                });
                            })
                        }
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (1) {
                    if (a == 'view') {
                        utag.data = Object.assign(utag.data, b);
                    }
                }
            } catch (e) {
                utag.DB(e)
            }
        }];
        utag.handler.cfg_extend = [{
            "bwq": 0,
            "id": "371",
            "end": 0,
            "blr": 1,
            "alr": 0
        }, {
            "id": "296",
            "alr": 0,
            "end": 0,
            "blr": 1,
            "bwq": 0
        }, {
            "bwq": 0,
            "alr": 0,
            "blr": 1,
            "end": 0,
            "id": "337"
        }, {
            "bwq": 0,
            "id": "90",
            "alr": 0,
            "end": 0,
            "blr": 1
        }, {
            "bwq": 0,
            "id": "429",
            "end": 0,
            "blr": 1,
            "alr": 0
        }, {
            "id": "173",
            "end": 0,
            "blr": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "id": "295",
            "alr": 1,
            "end": 0,
            "blr": 0,
            "bwq": 0
        }, {
            "bwq": 0,
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "149"
        }, {
            "id": "276",
            "end": 0,
            "blr": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "13",
            "bwq": 0
        }, {
            "alr": 1,
            "blr": 0,
            "end": 0,
            "id": "14",
            "bwq": 0
        }, {
            "bwq": 0,
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "116"
        }, {
            "alr": 1,
            "blr": 0,
            "end": 0,
            "id": "117",
            "bwq": 0
        }, {
            "bwq": 0,
            "id": "118",
            "alr": 1,
            "end": 0,
            "blr": 0
        }, {
            "bwq": 0,
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "4"
        }, {
            "id": "11",
            "end": 0,
            "blr": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "id": "17",
            "end": 0,
            "blr": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "120",
            "bwq": 0
        }, {
            "alr": 1,
            "blr": 0,
            "end": 0,
            "id": "2",
            "bwq": 0
        }, {
            "bwq": 0,
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "196"
        }, {
            "id": "148",
            "alr": 1,
            "end": 0,
            "blr": 0,
            "bwq": 0
        }, {
            "bwq": 0,
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "30"
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "28",
            "bwq": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "79",
            "bwq": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "49",
            "bwq": 0
        }, {
            "id": "154",
            "alr": 1,
            "end": 0,
            "blr": 0,
            "bwq": 0
        }, {
            "bwq": 0,
            "id": "155",
            "end": 0,
            "blr": 0,
            "alr": 1
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "57",
            "bwq": 0
        }, {
            "id": "93",
            "alr": 1,
            "end": 0,
            "blr": 0,
            "bwq": 0
        }, {
            "bwq": 0,
            "id": "278",
            "alr": 1,
            "end": 0,
            "blr": 0
        }, {
            "bwq": 0,
            "alr": 1,
            "blr": 0,
            "end": 0,
            "id": "142"
        }, {
            "bwq": 0,
            "id": "297",
            "end": 0,
            "blr": 0,
            "alr": 1
        }, {
            "id": "258",
            "alr": 1,
            "end": 0,
            "blr": 0,
            "bwq": 0
        }, {
            "bwq": 0,
            "alr": 1,
            "blr": 0,
            "end": 0,
            "id": "261"
        }, {
            "bwq": 0,
            "id": "336",
            "end": 0,
            "blr": 0,
            "alr": 1
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "121",
            "bwq": 0
        }, {
            "id": "146",
            "alr": 1,
            "end": 0,
            "blr": 0,
            "bwq": 0
        }, {
            "bwq": 0,
            "id": "97",
            "alr": 1,
            "end": 0,
            "blr": 0
        }, {
            "bwq": 0,
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "298"
        }, {
            "alr": 1,
            "blr": 0,
            "end": 0,
            "id": "224",
            "bwq": 0
        }, {
            "bwq": 0,
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "225"
        }, {
            "id": "226",
            "end": 0,
            "blr": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "id": "245",
            "alr": 1,
            "end": 0,
            "blr": 0,
            "bwq": 0
        }, {
            "bwq": 0,
            "id": "124",
            "end": 0,
            "blr": 0,
            "alr": 1
        }, {
            "id": "244",
            "end": 0,
            "blr": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "268",
            "bwq": 0
        }, {
            "alr": 1,
            "blr": 0,
            "end": 0,
            "id": "277",
            "bwq": 0
        }, {
            "bwq": 0,
            "id": "1",
            "alr": 1,
            "end": 0,
            "blr": 0
        }, {
            "bwq": 0,
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "229"
        }, {
            "id": "299",
            "end": 0,
            "blr": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "id": "233",
            "end": 0,
            "blr": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "alr": 1,
            "blr": 0,
            "end": 0,
            "id": "289",
            "bwq": 0
        }, {
            "bwq": 0,
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "99"
        }, {
            "alr": 1,
            "blr": 0,
            "end": 0,
            "id": "300",
            "bwq": 0
        }, {
            "bwq": 0,
            "alr": 1,
            "blr": 0,
            "end": 0,
            "id": "301"
        }, {
            "bwq": 0,
            "alr": 1,
            "blr": 0,
            "end": 0,
            "id": "302"
        }, {
            "bwq": 0,
            "alr": 1,
            "blr": 0,
            "end": 0,
            "id": "303"
        }, {
            "bwq": 0,
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "105"
        }, {
            "id": "304",
            "alr": 1,
            "end": 0,
            "blr": 0,
            "bwq": 0
        }, {
            "bwq": 0,
            "alr": 1,
            "blr": 0,
            "end": 0,
            "id": "102"
        }, {
            "bwq": 0,
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "178"
        }, {
            "alr": 1,
            "blr": 0,
            "end": 0,
            "id": "283",
            "bwq": 0
        }, {
            "bwq": 0,
            "id": "331",
            "end": 0,
            "blr": 0,
            "alr": 1
        }, {
            "id": "338",
            "alr": 1,
            "end": 0,
            "blr": 0,
            "bwq": 0
        }, {
            "bwq": 0,
            "alr": 1,
            "blr": 0,
            "end": 0,
            "id": "378"
        }, {
            "bwq": 0,
            "id": "379",
            "end": 0,
            "blr": 0,
            "alr": 1
        }, {
            "id": "380",
            "alr": 1,
            "end": 0,
            "blr": 0,
            "bwq": 0
        }, {
            "bwq": 0,
            "alr": 1,
            "blr": 0,
            "end": 0,
            "id": "382"
        }, {
            "bwq": 0,
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "386"
        }, {
            "alr": 1,
            "blr": 0,
            "end": 0,
            "id": "387",
            "bwq": 0
        }, {
            "bwq": 0,
            "id": "427",
            "end": 0,
            "blr": 0,
            "alr": 1
        }, {
            "id": "374",
            "end": 0,
            "blr": 0,
            "alr": 1,
            "bwq": 0
        }, {
            "alr": 1,
            "blr": 0,
            "end": 0,
            "id": "467",
            "bwq": 0
        }, {
            "bwq": 0,
            "id": "483",
            "alr": 1,
            "end": 0,
            "blr": 0
        }, {
            "bwq": 0,
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "470"
        }, {
            "id": "512",
            "alr": 1,
            "end": 0,
            "blr": 0,
            "bwq": 0
        }, {
            "bwq": 0,
            "blr": 0,
            "end": 0,
            "alr": 1,
            "id": "513"
        }, {
            "id": "390",
            "end": 1,
            "blr": 0,
            "alr": 0,
            "bwq": 0
        }, {
            "id": "391",
            "end": 1,
            "blr": 0,
            "alr": 0,
            "bwq": 0
        }, {
            "blr": 0,
            "end": 1,
            "alr": 0,
            "id": "469",
            "bwq": 0
        }];
        utag.loader.initcfg = function() {
            utag.loader.cfg = {
                "110": {
                    load: 4,
                    send: 0,
                    v: 202003250940,
                    wait: 0,
                    tid: 20060,
                    src: "//tags.tiqcdn.com/utag/tiqapp/utag.currency.js"
                },
                "78": {
                    load: 4,
                    send: 1,
                    v: 202003201130,
                    wait: 0,
                    tid: 19063
                },
                "111": {
                    load: (utag.cond[99] && utag.cond[75]),
                    send: 1,
                    v: 202001150956,
                    wait: 1,
                    tid: 7110
                },
                "247": {
                    load: (utag.cond[77] && utag.cond[99] && utag.cond[75]),
                    send: 1,
                    v: 201911051606,
                    wait: 1,
                    tid: 4049
                },
                "172": {
                    load: (utag.cond[75] && utag.cond[89] && utag.cond[99] && utag.cond[23]),
                    send: 1,
                    v: 202003250940,
                    wait: 1,
                    tid: 6026
                },
                "245": {
                    load: (utag.cond[77] && utag.cond[99] && utag.cond[75]),
                    send: 1,
                    v: 202001150956,
                    wait: 1,
                    tid: 7132
                },
                "266": {
                    load: (utag.cond[75] && utag.cond[99] && utag.cond[151]),
                    send: 1,
                    v: 202003250940,
                    wait: 1,
                    tid: 20010
                }
            };
            utag.loader.cfgsort = ["110", "78", "111", "247", "172", "245", "266"];
        }
        utag.loader.initcfg();
    }
    if (typeof utag_cfg_ovrd != 'undefined') {
        for (utag._i in utag.loader.GV(utag_cfg_ovrd)) utag.cfg[utag._i] = utag_cfg_ovrd[utag._i]
    };
    utag.loader.PINIT = function(a, b, c) {
        utag.DB("Pre-INIT");
        if (utag.cfg.noload) {
            return;
        }
        try {
            this.GET();
            if (utag.handler.RE('view', utag.data, "blr")) {
                utag.handler.LR(utag.data);
            }
        } catch (e) {
            utag.DB(e)
        };
        a = this.cfg;
        c = 0;
        for (b in this.GV(a)) {
            if (a[b].block == 1 || (a[b].load > 0 && (typeof a[b].src != 'undefined' && a[b].src != ''))) {
                a[b].block = 1;
                c = 1;
                this.bq[b] = 1;
            }
        }
        if (c == 1) {
            for (b in this.GV(a)) {
                if (a[b].block) {
                    a[b].id = b;
                    if (a[b].load == 4) a[b].load = 1;
                    a[b].cb = function() {
                        var d = this.uid;
                        utag.loader.cfg[d].cbf = 1;
                        utag.loader.LOAD(d)
                    };
                    this.AS(a[b]);
                }
            }
        }
        if (c == 0) this.INIT();
    };
    utag.loader.INIT = function(a, b, c, d, e) {
        utag.DB('utag.loader.INIT');
        if (this.ol == 1) return -1;
        else this.ol = 1;
        if (utag.cfg.noview != true) utag.handler.RE('view', utag.data, "alr");
        utag.rpt.ts['i'] = new Date();
        d = this.cfgsort;
        for (a = 0; a < d.length; a++) {
            e = d[a];
            b = this.cfg[e];
            b.id = e;
            if (b.block != 1) {
                if (utag.loader.bk[b.id] || ((utag.cfg.readywait || utag.cfg.noview) && b.load == 4)) {
                    this.f[b.id] = 0;
                    utag.loader.LOAD(b.id)
                } else if (b.wait == 1 && utag.loader.rf == 0) {
                    utag.DB('utag.loader.INIT: waiting ' + b.id);
                    this.wq.push(b)
                    this.f[b.id] = 2;
                } else if (b.load > 0) {
                    utag.DB('utag.loader.INIT: loading ' + b.id);
                    this.lq.push(b);
                    this.AS(b);
                }
            }
        }
        if (this.wq.length > 0) utag.loader.EV('', 'ready', function(a) {
            if (utag.loader.rf == 0) {
                utag.DB('READY:utag.loader.wq');
                utag.loader.rf = 1;
                utag.loader.WQ();
            }
        });
        else if (this.lq.length > 0) utag.loader.rf = 1;
        else if (this.lq.length == 0) utag.loader.END();
        return 1
    };
    if (utag.cfg.readywait || utag.cfg.waittimer) {
        utag.loader.EV('', 'ready', function(a) {
            if (utag.loader.rf == 0) {
                utag.loader.rf = 1;
                utag.cfg.readywait = 1;
                utag.DB('READY:utag.cfg.readywait');
                setTimeout(function() {
                    utag.loader.PINIT()
                }, utag.cfg.waittimer || 1);
            }
        })
    } else {
        utag.loader.PINIT()
    }
}
//tealium universal tag - utag.110 ut4.0.202003250940, Copyright 2020 Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader, u) {
        try {
            u = utag.o[loader].sender[id] = {}
        } catch (e) {
            u = utag.sender[id]
        };
        u.ev = {
            'view': 1
        };
        u.map = {};
        u.extend = [];
        u.send = function(a, b) {
            if (u.ev[a] || typeof u.ev.all != "undefined") {}
        }
        try {
            utag.o[loader].loader.LOAD(id)
        } catch (e) {
            utag.loader.LOAD(id)
        }
    })('110', 'adidas.yeezysupplyglobal');
} catch (e) {}

//tealium universal tag - utag.78 ut4.0.202003250940, Copyright 2020 Tealium.com Inc. All Rights Reserved.
var s = new AppMeasurement();
s.account = "ag-ys-dev";
s.trackDownloadLinks = true;
s.trackExternalLinks = true;
s.trackInlineStats = false;
s.useForcedLinkTracking = true;
s.forcedLinkTrackingTimeout = 500;
s.linkInternalFilters = "javascript:,yeezysupply.,master.,.paypal.com,demandware.edgesuite.net,.ups.com,.fedex.com,maps.google.com,.adyen.com,tel:,.facebook.com,.narvar.com,.parcelforce.com,.hermesworld.com,.sgiftcard.com,.klarna.com,.bizrate.com,merchant.sgiftcard,yzysply," + document.location.hostname;
s.linkLeaveQueryString = false;
s.linkTrackVars = "None";
s.linkTrackEvents = "None";
s.usePlugins = true;
s.currencyCode = "USD";
s.visitorNamespace = "adidas";
s.trackingServer = "adidas.d3.sc.omtrdc.net";
s.trackingServerSecure = "";
var host = document.location.hostname,
    site = 'yeezysupply',
    pos = host.indexOf('.' + site + '.');
host = pos > -1 ? host.substring(pos) : host;
s.fpCookieDomainPeriods = s.cookieDomainPeriods = (document.location.hostname.indexOf('.' + site + '.') > -1 ? (document.location.hostname.substring(document.location.hostname.indexOf('.' + site + '.'))) : '.' + host).split('.').length - 1;
if ("7ADA401053CCF9130A490D4C@AdobeOrg") {
    if (!window.Visitor) {
        window.Visitor = function(m, t) {
            if (!m) throw "Visitor requires Adobe Marketing Cloud Org ID";
            var a = this;
            a.version = "1.5.4";
            var l = window,
                i = l.Visitor;
            i.version = a.version;
            l.s_c_in || (l.s_c_il = [], l.s_c_in = 0);
            a._c = "Visitor";
            a._il = l.s_c_il;
            a._in = l.s_c_in;
            a._il[a._in] = a;
            l.s_c_in++;
            a.pa = {
                Ka: []
            };
            var o = l.document,
                h = i.Ma;
            h || (h = null);
            var z = i.Na;
            z || (z = void 0);
            var j = i.ja;
            j || (j = !0);
            var k = i.La;
            k || (k = !1);
            a.S = function(a) {
                var c = 0,
                    b, e;
                if (a)
                    for (b = 0; b < a.length; b++) e = a.charCodeAt(b), c = (c << 5) - c + e, c &= c;
                return c
            };
            a.r = function(a) {
                var c = "0123456789",
                    b = "",
                    e = "",
                    f, g = 8,
                    n = 10,
                    h = 10;
                if (1 == a) {
                    c += "ABCDEF";
                    for (a = 0; 16 > a; a++) f = Math.floor(Math.random() * g), b += c.substring(f, f + 1), f = Math.floor(Math.random() * g), e += c.substring(f, f + 1), g = 16;
                    return b + "-" + e
                }
                for (a = 0; 19 > a; a++) f = Math.floor(Math.random() * n), b += c.substring(f, f + 1), 0 == a && 9 == f ? n = 3 : (1 == a || 2 == a) && 10 != n && 2 > f ? n = 10 : 2 < a && (n = 10), f = Math.floor(Math.random() * h), e += c.substring(f, f + 1), 0 == a && 9 == f ? h = 3 : (1 == a || 2 == a) && 10 != h && 2 > f ? h = 10 : 2 < a && (h = 10);
                return b + e
            };
            a.ma = function() {
                var a;
                !a && l.location && (a = l.location.hostname);
                if (a)
                    if (/^[0-9.]+$/.test(a)) a = "";
                    else {
                        var c = a.split("."),
                            b = c.length - 1,
                            e = b - 1;
                        1 < b && 2 >= c[b].length && (2 == c[b - 1].length || 0 > ",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf("," +
                            c[b] + ",")) && e--;
                        if (0 < e)
                            for (a = ""; b >= e;) a = c[b] + (a ? "." : "") + a, b--
                    }
                return a
            };
            a.cookieRead = function(a) {
                var a = encodeURIComponent(a),
                    c = (";" + o.cookie).split(" ").join(";"),
                    b = c.indexOf(";" + a + "="),
                    e = 0 > b ? b : c.indexOf(";", b + 1);
                return 0 > b ? "" : decodeURIComponent(c.substring(b + 2 + a.length, 0 > e ? c.length : e))
            };
            a.cookieWrite = function(d, c, b) {
                var e = a.cookieLifetime,
                    f, c = "" + c,
                    e = e ? ("" + e).toUpperCase() : "";
                b && "SESSION" != e && "NONE" != e ? (f = "" != c ? parseInt(e ? e : 0, 10) : -60) ? (b = new Date, b.setTime(b.getTime() + 1E3 * f)) : 1 == b && (b = new Date, f = b.getYear(), b.setYear(f + 2 + (1900 > f ? 1900 : 0))) : b = 0;
                return d && "NONE" != e ? (o.cookie = encodeURIComponent(d) + "=" + encodeURIComponent(c) + "; path=/;" + (b ? " expires=" + b.toGMTString() + ";" : "") + (a.cookieDomain ? " domain=" + a.cookieDomain + ";" : ""), a.cookieRead(d) == c) : 0
            };
            a.g = h;
            a.A = function(a, c) {
                try {
                    "function" == typeof a ? a.apply(l, c) : a[1].apply(a[0], c)
                } catch (b) {}
            };
            a.ra = function(d, c) {
                c && (a.g == h && (a.g = {}), a.g[d] == z && (a.g[d] = []), a.g[d].push(c))
            };
            a.m = function(d, c) {
                if (a.g != h) {
                    var b = a.g[d];
                    if (b)
                        for (; 0 < b.length;) a.A(b.shift(), c)
                }
            };
            a.j = h;
            a.oa = function(d, c, b) {
                var e = 0,
                    f = 0,
                    g;
                if (c && o) {
                    for (g = 0; !e && 2 > g;) {
                        try {
                            e = (e = o.getElementsByTagName(0 < g ? "HEAD" : "head")) && 0 < e.length ? e[0] : 0
                        } catch (n) {
                            e = 0
                        }
                        g++
                    }
                    if (!e) try {
                        o.body && (e = o.body)
                    } catch (j) {
                        e = 0
                    }
                    if (e)
                        for (g = 0; !f && 2 > g;) {
                            try {
                                f = o.createElement(0 < g ? "SCRIPT" : "script")
                            } catch (i) {
                                f = 0
                            }
                            g++
                        }
                }!c || !e || !f ? b && b() : (f.type = "text/javascript", f.setAttribute("async", "async"), f.src = c, e.firstChild ? e.insertBefore(f, e.firstChild) : e.appendChild(f), a.pa.Ka.push(c), b && (a.j == h && (a.j = {}), a.j[d] = setTimeout(b, a.loadTimeout)))
            };
            a.ka = function(d) {
                a.j != h && a.j[d] && (clearTimeout(a.j[d]), a.j[d] = 0)
            };
            a.T = k;
            a.U = k;
            a.isAllowed = function() {
                if (!a.T && (a.T = j, a.cookieRead(a.cookieName) || a.cookieWrite(a.cookieName, "T", 1))) a.U = j;
                return a.U
            };
            a.a = h;
            a.d = h;
            var B = i.$a;
            B || (B = "MC");
            var r = i.fb;
            r || (r = "MCMID");
            var C = i.ab;
            C || (C = "MCCIDH");
            var D = i.eb;
            D || (D = "MCSYNCS");
            var F = i.bb;
            F || (F = "MCIDTS");
            var x = i.cb;
            x || (x = "MCOPTOUT");
            var A = i.Ya;
            A || (A = "A");
            var p = i.Va;
            p || (p = "MCAID");
            var y = i.Za;
            y || (y = "AAM");
            var w = i.Xa;
            w || (w = "MCAAMLH");
            var q = i.Wa;
            q || (q = "MCAAMB");
            var s = i.gb;
            s || (s = "NONE");
            a.C = 0;
            a.R = function() {
                if (!a.C) {
                    var d = a.version;
                    a.audienceManagerServer && (d += "|" + a.audienceManagerServer);
                    a.audienceManagerServerSecure && (d += "|" + a.audienceManagerServerSecure);
                    a.C = a.S(d)
                }
                return a.C
            };
            a.V = k;
            a.f = function() {
                if (!a.V) {
                    a.V = j;
                    var d = a.R(),
                        c = k,
                        b = a.cookieRead(a.cookieName),
                        e, f, g, n, i = new Date;
                    a.a == h && (a.a = {});
                    if (b && "T" != b) {
                        b = b.split("|");
                        b[0].match(/^[\-0-9]+$/) && (parseInt(b[0], 10) != d && (c = j), b.shift());
                        1 == b.length % 2 && b.pop();
                        for (d = 0; d < b.length; d += 2)
                            if (e = b[d].split("-"), f = e[0], g = b[d + 1], 1 < e.length ? (n = parseInt(e[1], 10), e = 0 < e[1].indexOf("s")) : (n = 0, e = k), c && (f == C && (g = ""), 0 < n && (n = i.getTime() / 1E3 - 60)), f && g && (a.c(f, g, 1), 0 < n && (a.a["expire" + f] = n + (e ? "s" : ""), i.getTime() >= 1E3 * n || e && !a.cookieRead(a.sessionCookieName)))) a.d || (a.d = {}), a.d[f] = j
                    }
                    if (!a.b(p) && (b = a.cookieRead("s_vi"))) b = b.split("|"), 1 < b.length && 0 <= b[0].indexOf("v1") && (g = b[1], d = g.indexOf("["), 0 <= d && (g = g.substring(0, d)), g && g.match(/^[0-9a-fA-F\-]+$/) && a.c(p, g))
                }
            };
            a.ta = function() {
                var d = a.R(),
                    c, b;
                for (c in a.a) !Object.prototype[c] && a.a[c] && "expire" != c.substring(0, 6) && (b = a.a[c], d += (d ? "|" : "") + c + (a.a["expire" + c] ? "-" + a.a["expire" + c] : "") + "|" + b);
                a.cookieWrite(a.cookieName, d, 1)
            };
            a.b = function(d, c) {
                return a.a != h && (c || !a.d || !a.d[d]) ? a.a[d] : h
            };
            a.c = function(d, c, b) {
                a.a == h && (a.a = {});
                a.a[d] = c;
                b || a.ta()
            };
            a.na = function(d, c) {
                var b = a.b(d, c);
                return b ? b.split("*") : h
            };
            a.sa = function(d, c, b) {
                a.c(d, c ? c.join("*") : "", b)
            };
            a.Sa = function(d, c) {
                var b = a.na(d, c);
                if (b) {
                    var e = {},
                        f;
                    for (f = 0; f < b.length; f += 2) e[b[f]] = b[f + 1];
                    return e
                }
                return h
            };
            a.Ua = function(d, c, b) {
                var e = h,
                    f;
                if (c)
                    for (f in e = [], c) Object.prototype[f] || (e.push(f), e.push(c[f]));
                a.sa(d, e, b)
            };
            a.k = function(d, c, b) {
                var e = new Date;
                e.setTime(e.getTime() + 1E3 * c);
                a.a == h && (a.a = {});
                a.a["expire" + d] = Math.floor(e.getTime() / 1E3) + (b ? "s" : "");
                0 > c ? (a.d || (a.d = {}), a.d[d] = j) : a.d && (a.d[d] = k);
                b && (a.cookieRead(a.sessionCookieName) || a.cookieWrite(a.sessionCookieName, "1"))
            };
            a.Q = function(a) {
                if (a && ("object" == typeof a && (a = a.d_mid ? a.d_mid : a.visitorID ? a.visitorID : a.id ? a.id : a.uuid ? a.uuid : "" + a), a && (a = a.toUpperCase(), "NOTARGET" == a && (a = s)), !a || a != s && !a.match(/^[0-9a-fA-F\-]+$/))) a = "";
                return a
            };
            a.i = function(d, c) {
                a.ka(d);
                a.h != h && (a.h[d] = k);
                if (d == B) {
                    var b = a.b(r);
                    if (!b) {
                        b = "object" == typeof c && c.mid ? c.mid : a.Q(c);
                        if (!b) {
                            if (a.v) {
                                a.getAnalyticsVisitorID(h, k, j);
                                return
                            }
                            b = a.r()
                        }
                        a.c(r, b)
                    }
                    if (!b || b == s) b = "";
                    "object" == typeof c && ((c.d_region || c.dcs_region || c.d_blob || c.blob) && a.i(y, c), a.v && c.mid && a.i(A, {
                        id: c.id
                    }));
                    a.m(r, [b])
                }
                if (d == y && "object" == typeof c) {
                    b = 604800;
                    c.id_sync_ttl != z && c.id_sync_ttl && (b = parseInt(c.id_sync_ttl, 10));
                    var e = a.b(w);
                    e || ((e = c.d_region) || (e = c.dcs_region), e && (a.k(w, b), a.c(w, e)));
                    e || (e = "");
                    a.m(w, [e]);
                    e = a.b(q);
                    if (c.d_blob || c.blob)(e = c.d_blob) || (e = c.blob), a.k(q, b), a.c(q, e);
                    e || (e = "");
                    a.m(q, [e]);
                    !c.error_msg && a.t && a.c(C, a.t)
                }
                if (d == A) {
                    b = a.b(p);
                    b || ((b = a.Q(c)) ? a.k(q, -1) : b = s, a.c(p, b));
                    if (!b || b == s) b = "";
                    a.m(p, [b])
                }
                a.idSyncDisableSyncs ? u.ba = j : (u.ba = k, b = {}, b.ibs = c.ibs, b.subdomain = c.subdomain, u.Ia(b));
                c === Object(c) && (b = s, c.d_optout && c.d_optout instanceof Array && (b = c.d_optout.join(",")), e = parseInt(c.d_ottl, 10), isNaN(e) && (e = 7200), a.k(x, e, !0), a.c(x, b), a.m(x, [b]))
            };
            a.h = h;
            a.n = function(d, c, b, e) {
                var f = "",
                    g;
                if (a.isAllowed() && (a.f(), f = a.b(d), !f && (d == r || d == x ? g = B : d == w || d == q ? g = y : d == p && (g = A), g))) {
                    if (c && (a.h == h || !a.h[g])) a.h == h && (a.h = {}), a.h[g] = j, a.oa(g, c, function() {
                        if (!a.b(d)) {
                            var b = "";
                            d == r ? b = a.r() : g == y && (b = {
                                error_msg: "timeout"
                            });
                            a.i(g, b)
                        }
                    });
                    a.ra(d, b);
                    c || a.i(g, {
                        id: s
                    });
                    return ""
                }
                if ((d == r || d == p) && f == s) f = "", e = j;
                b && e && a.A(b, [f]);
                return f
            };
            a._setMarketingCloudFields = function(d) {
                a.f();
                a.i(B, d)
            };
            a.setMarketingCloudVisitorID = function(d) {
                a._setMarketingCloudFields(d)
            };
            a.v = k;
            a.getMarketingCloudVisitorID = function(d, c) {
                if (a.isAllowed()) {
                    a.marketingCloudServer && 0 > a.marketingCloudServer.indexOf(".demdex.net") && (a.v = j);
                    var b = a.s("_setMarketingCloudFields");
                    return a.n(r, b, d, c)
                }
                return ""
            };
            a.qa = function() {
                a.getAudienceManagerBlob()
            };
            i.AuthState = {
                UNKNOWN: 0,
                AUTHENTICATED: 1,
                LOGGED_OUT: 2
            };
            a.q = {};
            a.P = k;
            a.t = "";
            a.setCustomerIDs = function(d) {
                if (a.isAllowed() && d) {
                    a.f();
                    var c, b;
                    for (c in d)
                        if (!Object.prototype[c] && (b = d[c]))
                            if ("object" == typeof b) {
                                var e = {};
                                b.id && (e.id = b.id);
                                b.authState != z && (e.authState = b.authState);
                                a.q[c] = e
                            } else a.q[c] = {
                                id: b
                            };
                    var d = a.getCustomerIDs(),
                        e = a.b(C),
                        f = "";
                    e || (e = 0);
                    for (c in d) Object.prototype[c] || (b = d[c], f += (f ? "|" : "") + c + "|" + (b.id ? b.id : "") + (b.authState ? b.authState : ""));
                    a.t = a.S(f);
                    a.t != e && (a.P = j, a.qa())
                }
            };
            a.getCustomerIDs = function() {
                a.f();
                var d = {},
                    c, b;
                for (c in a.q) Object.prototype[c] || (b = a.q[c], d[c] || (d[c] = {}), b.id && (d[c].id = b.id), d[c].authState = b.authState != z ? b.authState : i.AuthState.UNKNOWN);
                return d
            };
            a._setAnalyticsFields = function(d) {
                a.f();
                a.i(A, d)
            };
            a.setAnalyticsVisitorID = function(d) {
                a._setAnalyticsFields(d)
            };
            a.getAnalyticsVisitorID = function(d, c, b) {
                if (a.isAllowed()) {
                    var e = "";
                    b || (e = a.getMarketingCloudVisitorID(function() {
                        a.getAnalyticsVisitorID(d, j)
                    }));
                    if (e || b) {
                        var f = b ? a.marketingCloudServer : a.trackingServer,
                            g = "";
                        a.loadSSL && (b ? a.marketingCloudServerSecure && (f = a.marketingCloudServerSecure) : a.trackingServerSecure && (f = a.trackingServerSecure));
                        f && (g = "http" + (a.loadSSL ? "s" : "") + "://" + f + "/id?d_visid_ver=" + a.version + "&callback=s_c_il%5B" + a._in + "%5D._set" + (b ? "MarketingCloud" : "Analytics") + "Fields&mcorgid=" + encodeURIComponent(a.marketingCloudOrgID) + (e ? "&mid=" + e : "") + (a.idSyncDisable3rdPartySyncing ? "&d_coppa=true" : ""));
                        return a.n(b ? r : p, g, d, c)
                    }
                }
                return ""
            };
            a._setAudienceManagerFields = function(d) {
                a.f();
                a.i(y, d)
            };
            a.s = function(d) {
                var c = a.audienceManagerServer,
                    b = "",
                    e = a.b(r),
                    f = a.b(q, j),
                    g = a.b(p),
                    g = g && g != s ? "&d_cid_ic=AVID%01" + encodeURIComponent(g) : "";
                a.loadSSL && a.audienceManagerServerSecure && (c = a.audienceManagerServerSecure);
                if (c) {
                    var b = a.getCustomerIDs(),
                        h, i;
                    if (b)
                        for (h in b) Object.prototype[h] || (i = b[h], g += "&d_cid_ic=" + encodeURIComponent(h) + "%01" + encodeURIComponent(i.id ? i.id : "") + (i.authState ? "%01" + i.authState : ""));
                    d || (d = "_setAudienceManagerFields");
                    b = "http" + (a.loadSSL ? "s" : "") + "://" + c + "/id?d_visid_ver=" + a.version + "&d_rtbd=json&d_ver=2" + (!e && a.v ? "&d_verify=1" : "") + "&d_orgid=" + encodeURIComponent(a.marketingCloudOrgID) + "&d_nsid=" + (a.idSyncContainerID || 0) + (e ? "&d_mid=" + e : "") + (a.idSyncDisable3rdPartySyncing ? "&d_coppa=true" : "") + (f ? "&d_blob=" + encodeURIComponent(f) : "") + g + "&d_cb=s_c_il%5B" + a._in + "%5D." +
                        d
                }
                return b
            };
            a.getAudienceManagerLocationHint = function(d, c) {
                if (a.isAllowed() && a.getMarketingCloudVisitorID(function() {
                        a.getAudienceManagerLocationHint(d, j)
                    })) {
                    var b = a.b(p);
                    b || (b = a.getAnalyticsVisitorID(function() {
                        a.getAudienceManagerLocationHint(d, j)
                    }));
                    if (b) return b = a.s(), a.n(w, b, d, c)
                }
                return ""
            };
            a.getAudienceManagerBlob = function(d, c) {
                if (a.isAllowed() && a.getMarketingCloudVisitorID(function() {
                        a.getAudienceManagerBlob(d, j)
                    })) {
                    var b = a.b(p);
                    b || (b = a.getAnalyticsVisitorID(function() {
                        a.getAudienceManagerBlob(d, j)
                    }));
                    if (b) return b = a.s(), a.P && a.k(q, -1), a.n(q, b, d, c)
                }
                return ""
            };
            a.o = "";
            a.u = {};
            a.D = "";
            a.F = {};
            a.getSupplementalDataID = function(d, c) {
                !a.o && !c && (a.o = a.r(1));
                var b = a.o;
                a.D && !a.F[d] ? (b = a.D, a.F[d] = j) : b && (a.u[d] && (a.D = a.o, a.F = a.u, a.o = b = !c ? a.r(1) : "", a.u = {}), b && (a.u[d] = j));
                return b
            };
            i.OptOut = {
                GLOBAL: "global"
            };
            a.getOptOut = function(d, c) {
                if (a.isAllowed()) {
                    var b = a.s("_setMarketingCloudFields");
                    return a.n(x, b, d, c)
                }
                return ""
            };
            a.isOptedOut = function(d, c, b) {
                return a.isAllowed() ? (c || (c = i.OptOut.GLOBAL), (b = a.getOptOut(function(b) {
                    a.A(d, [b == i.OptOut.GLOBAL || 0 <= b.indexOf(c)])
                }, b)) ? b == i.OptOut.GLOBAL || 0 <= b.indexOf(c) : h) : k
            };
            var v = {
                l: !!l.postMessage,
                ha: 1,
                O: 864E5
            };
            a.Oa = v;
            a.X = {
                postMessage: function(a, c, b) {
                    var e = 1;
                    c && (v.l ? b.postMessage(a, c.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : c && (b.location = c.replace(/#.*$/, "") + "#" + +new Date + e++ + "&" + a))
                },
                K: function(a, c) {
                    var b;
                    try {
                        if (v.l)
                            if (a && (b = function(b) {
                                    if ("string" === typeof c && b.origin !== c || "[object Function]" === Object.prototype.toString.call(c) && !1 === c(b.origin)) return !1;
                                    a(b)
                                }), window.addEventListener) window[a ? "addEventListener" : "removeEventListener"]("message", b, !1);
                            else window[a ? "attachEvent" : "detachEvent"]("onmessage", b)
                    } catch (e) {}
                }
            };
            var G = {
                Y: function() {
                    if (o.addEventListener) return function(a, c, b) {
                        a.addEventListener(c, function(a) {
                            "function" === typeof b && b(a)
                        }, k)
                    };
                    if (o.attachEvent) return function(a, c, b) {
                        a.attachEvent("on" + c, function(a) {
                            "function" === typeof b && b(a)
                        })
                    }
                }(),
                map: function(a, c) {
                    if (Array.prototype.map) return a.map(c);
                    if (void 0 === a || a === h) throw new TypeError;
                    var b = Object(a),
                        e = b.length >>> 0;
                    if ("function" !== typeof c) throw new TypeError;
                    for (var f = Array(e), g = 0; g < e; g++) g in b && (f[g] = c.call(c, b[g], g, b));
                    return f
                },
                za: function(a, c) {
                    return this.map(a, function(a) {
                        return encodeURIComponent(a)
                    }).join(c)
                }
            };
            a.Ta = G;
            var u = {
                ia: 3E4,
                N: 649,
                fa: k,
                id: h,
                I: h,
                aa: function(a) {
                    if ("string" === typeof a) return a = a.split("/"), a[0] + "//" + a[2]
                },
                e: h,
                url: h,
                Aa: function() {
                    var d = "http://fast.",
                        c = "?d_nsid=" + a.idSyncContainerID + "#" + encodeURIComponent(o.location.href);
                    this.e || (this.e = "nosubdomainreturned");
                    a.loadSSL && (d = a.idSyncSSLUseAkamai ? "https://fast." : "https://");
                    d = d + this.e + ".demdex.net/dest5.html" + c;
                    this.I = this.aa(d);
                    this.id = "destination_publishing_iframe_" + this.e + "_" + a.idSyncContainerID;
                    return d
                },
                va: function() {
                    var d = "?d_nsid=" + a.idSyncContainerID + "#" + encodeURIComponent(o.location.href);
                    "string" === typeof a.B && a.B.length && (this.id = "destination_publishing_iframe_" + (new Date).getTime() + "_" + a.idSyncContainerID, this.I = this.aa(a.B), this.url = a.B + d)
                },
                ba: h,
                H: k,
                M: k,
                w: h,
                hb: h,
                Ga: h,
                ib: h,
                L: k,
                z: [],
                Ea: [],
                Fa: [],
                ca: v.l ? 15 : 100,
                J: [],
                Ca: [],
                $: j,
                da: k,
                Z: function() {
                    function a() {
                        e = document.createElement("iframe");
                        e.id = b.id;
                        e.style.cssText = "display: none; width: 0; height: 0;";
                        e.src = b.url;
                        b.Ga = j;
                        c();
                        document.body.appendChild(e)
                    }

                    function c() {
                        G.Y(e, "load", function() {
                            e.className = "aamIframeLoaded";
                            b.w = j;
                            b.p()
                        })
                    }
                    this.M = j;
                    var b = this,
                        e = document.getElementById(this.id);
                    e ? "IFRAME" !== e.nodeName ? (this.id += "_2", a()) : "aamIframeLoaded" !== e.className ? c() : (this.w = j, this.p()) : a();
                    this.Ba = e
                },
                p: function(d) {
                    var c = this;
                    d === Object(d) && this.J.push(d);
                    if ((this.da || !v.l || this.w) && this.J.length) this.Ha(this.J.shift()), this.p();
                    !a.idSyncDisableSyncs && this.w && this.z.length && !this.L && (this.fa || (this.fa = j, setTimeout(function() {
                        c.ca = v.l ? 15 : 150
                    }, this.ia)), this.L = j, this.ea())
                },
                Ha: function(a) {
                    var c = encodeURIComponent,
                        b, e, f, g, h;
                    if ((b = a.ibs) && b instanceof Array && (e = b.length))
                        for (f = 0; f < e; f++) g = b[f], h = [c("ibs"), c(g.id || ""), c(g.tag || ""), G.za(g.url || [], ","), c(g.ttl || ""), "", "", g.fireURLSync ? "true" : "false"], this.$ ? this.G(h.join("|")) : g.fireURLSync && this.wa(g, h.join("|"));
                    this.Ca.push(a)
                },
                wa: function(d, c) {
                    a.f();
                    var b = a.b(D),
                        e = k,
                        f = k,
                        g = Math.ceil((new Date).getTime() / v.O);
                    if (b) {
                        if (b = b.split("*"), f = this.Ja(b, d.id, g), e = f.xa, f = f.ya, !e || !f) this.G(c), b.push(d.id + "-" + (g + Math.ceil(d.ttl / 60 / 24))), this.Da(b), a.c(D, b.join("*"))
                    } else this.G(c), a.c(D, d.id + "-" + (g + Math.ceil(d.ttl / 60 / 24)))
                },
                Ja: function(a, c, b) {
                    var e = k,
                        f = k,
                        g, h, i;
                    for (h = 0; h < a.length; h++) g = a[h], i = parseInt(g.split("-")[1], 10), g.match("^" + c + "-") ? (e = j, b < i ? f = j : (a.splice(h, 1), h--)) : b >= i && (a.splice(h, 1), h--);
                    return {
                        xa: e,
                        ya: f
                    }
                },
                Da: function(a) {
                    if (a.join("*").length > this.N)
                        for (a.sort(function(a, b) {
                                return parseInt(a.split("-")[1], 10) - parseInt(b.split("-")[1], 10)
                            }); a.join("*").length > this.N;) a.shift()
                },
                G: function(d) {
                    var c = encodeURIComponent;
                    this.z.push((a.Qa ? c("---destpub-debug---") : c("---destpub---")) + d)
                },
                ea: function() {
                    var d = this,
                        c;
                    this.z.length ? (c = this.z.shift(), a.X.postMessage(c, this.url, this.Ba.contentWindow), this.Ea.push(c), setTimeout(function() {
                        d.ea()
                    }, this.ca)) : this.L = k
                },
                K: function(a) {
                    var c = /^---destpub-to-parent---/;
                    "string" === typeof a && c.test(a) && (c = a.replace(c, "").split("|"), "canSetThirdPartyCookies" === c[0] && (this.$ = "true" === c[1] ? j : k, this.da = j, this.p()), this.Fa.push(a))
                },
                Ia: function(d) {
                    this.url === h && (this.e = "string" === typeof a.W && a.W.length ? a.W : d.subdomain || "", this.url = this.Aa());
                    d.ibs instanceof Array && d.ibs.length && (this.H = j);
                    if (!a.idSyncDisable3rdPartySyncing && (this.H || a.la) && this.e && "nosubdomainreturned" !== this.e && !this.M)(i.ga || "complete" === o.readyState || "loaded" === o.readyState) && this.Z();
                    "function" === typeof a.idSyncIDCallResult ? a.idSyncIDCallResult(d) : this.p(d);
                    "function" === typeof a.idSyncAfterIDCallResult && a.idSyncAfterIDCallResult(d)
                },
                ua: function(d, c) {
                    return a.Ra || !d || c - d > v.ha
                }
            };
            a.Pa = u;
            0 > m.indexOf("@") && (m += "@AdobeOrg");
            a.marketingCloudOrgID = m;
            a.cookieName = "AMCV_" + m;
            a.sessionCookieName = "AMCVS_" + m;
            a.cookieDomain = a.ma();
            a.cookieDomain == l.location.hostname && (a.cookieDomain = "");
            a.loadSSL = 0 <= l.location.protocol.toLowerCase().indexOf("https");
            a.loadTimeout = 500;
            a.marketingCloudServer = a.audienceManagerServer = "dpm.demdex.net";
            if (t && "object" == typeof t) {
                for (var E in t) !Object.prototype[E] && (a[E] = t[E]);
                a.idSyncContainerID = a.idSyncContainerID || 0;
                a.f();
                E = a.b(F);
                var H = Math.ceil((new Date).getTime() / v.O);
                !a.idSyncDisableSyncs && u.ua(E, H) && (a.k(q, -1), a.c(F, H));
                a.getMarketingCloudVisitorID();
                a.getAudienceManagerLocationHint();
                a.getAudienceManagerBlob()
            }
            if (!a.idSyncDisableSyncs) {
                u.va();
                G.Y(window, "load", function() {
                    var d = u;
                    i.ga = j;
                    !a.idSyncDisable3rdPartySyncing && (d.H || a.la) && d.e && "nosubdomainreturned" !== d.e && d.url && !d.M && d.Z()
                });
                try {
                    a.X.K(function(a) {
                        u.K(a.data)
                    }, u.I)
                } catch (I) {}
            }
        }
        Visitor.getInstance = function(m, t) {
            var a, l = window.s_c_il,
                i;
            0 > m.indexOf("@") && (m += "@AdobeOrg");
            if (l)
                for (i = 0; i < l.length; i++)
                    if ((a = l[i]) && "Visitor" == a._c && a.marketingCloudOrgID == m) return a;
            return new Visitor(m, t)
        };
        (function() {
            function m() {
                t.ga = a
            }
            var t = window.Visitor,
                a = t.ja;
            a || (a = !0);
            window.addEventListener ? window.addEventListener("load", m) : window.attachEvent && window.attachEvent("onload", m)
        })();
        var params = host.indexOf('.com') > -1 ? {
            cookieDomain: host.substring(host.indexOf(site))
        } : {};
        window.visitor = new Visitor("7ADA401053CCF9130A490D4C@AdobeOrg", params);
        visitor.trackingServer = "adidas.d3.sc.omtrdc.net";
    }
    s.visitor = Visitor.getInstance("7ADA401053CCF9130A490D4C@AdobeOrg");
}
s._tpDST = {
    2018: '3/25,10/28',
    2019: '3/31,10/27',
    2020: '3/29,10/25',
    2021: '3/28,10/31',
    2022: '3/27,10/30'
};

function s_doPlugins(s) {
    s.events = s.events ? s.events : '';
    s.pageURL = s.pageURL ? decodeURIComponent(s.pageURL) : '';
    if (s.linkObject) {
        s.saveLinkObject = s.linkObject;
    } else if (s.saveLinkObject) {
        s.linkObject = s.saveLinkObject;
    }
    s.expDate = new Date();
    s.expDate.setDate(s.expDate.getDate() - 1);
    s.prop6 = s.getTimeParting('n', '+1');
    s.eVar57 = s.getVisitNum();
    s.prop39 = s.account;
    if (s.events.indexOf('scAdd') > -1) {
        if (s.eVar3 == 'D=ch' || s.eVar3 == 'D=pageName') {
            s.eVar3 = s.channel;
        }
        if (s.eVar36 == 'D=ch') {
            s.eVar36 = 'D=v3';
        }
        s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar36', ',', 2);
    }
    if (s.c_r('v32') && !s.eVar32) {
        s.eVar32 = s.c_r('v32');
    }
    if (s.c_r('v33')) {
        s.eVar33 = s.c_r('v33');
    }
    if (s.c_r('v34') && !s.eVar34) {
        s.eVar34 = s.c_r('v34');
    }
    if (!(s.pageLoaded || (utag_data.is_iframe && utag_data.is_iframe == 'TRUE')) || s.prop26 == 'PLP FILTER' || (utag_data.glass_version && utag.data['link_view'] == 'view' && s.pageName.indexOf('MINICART OVERLAY') == -1)) {
        s.eVar64 = '+1';
        if (s.eVar32) {
            s.events = s.apl(s.events, 'event8', ',', 2);
            if (!s.products) {
                s.productNum = s.getProductNum();
                s.products = ';sitepromotion' + s.productNum;
            }
            s.c_w('v32', '', s.expDate);
        }
        if (s.eVar33) {
            s.prop46 = 'D=v33';
            s.events = s.apl(s.events, 'event9', ',', 2);
            if (!s.products) {
                s.productNum = s.getProductNum();
                s.products = ';navigation' + s.productNum;
            }
            s.c_w('v33', '', s.expDate);
        }
        if (!s.eVar35) {
            if (s.campaign) {
                s.eVar35 = 'EXTERNAL CHANNEL';
            } else if (s.eVar32) {
                s.eVar35 = 'SITE PROMOTION';
            } else if (s.eVar33) {
                s.eVar35 = 'SITE NAVIGATION';
            } else if (s.pageName && s.pageName.indexOf('WISHLIST') > -1) {
                s.eVar35 = 'WISHLIST';
            } else if (s.purchaseID) {
                s.eVar35 = 'UNKNOWN';
            }
            if (s.eVar35 && utag.data['link_view'] == 'view') {
                s.eVar56 = s.crossVisitParticipationLocalStorage(s.eVar35, 'v56', '1', '5', '>', 'purchase', 0);
            }
        }
        if (s.eVar35 && s.prop3 && s.prop3.indexOf('PDP') == -1 && !s.eVar32 && !s.eVar33) {
            if (!s.eVar32) {
                s.eVar32 = 'NON-SITE PROMOTION';
            }
            if (!s.eVar33) {
                s.eVar33 = 'NON-SITE NAVIGATION';
            }
            if (!s.eVar36) {
                s.eVar36 = 'UNKNOWN';
            }
        }
        s.originals = {
            'pageName': s.pageName,
            'channel': s.channel,
            'prop3': s.prop3
        };
    } else {
        s.eVar32 = s.eVar33 = s.eVar34 = s.eVar35 = '';
    }
    if (s.eVar25) {
        s.events = s.events.replace(/event34/gi, 'event34:' + s.eVar25);
        s.events = s.events.replace(/event35/gi, 'event35:' + s.eVar25);
    }
    s.prop1 = 'D="' + utag.data.country + '|"+' + 'pageName';
    if (utag.data.email_in_url && utag.data.email_in_url == 'true') {
        var replace_data = decodeURIComponent(document.location.href).match(/[a-zA-Z0-9._-]+(@|%40)[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}/gi)[0];
        s.pageURL = s.pageURL.replace(replace_data, 'SUPPRESSED_EMAIL_ADDRESS');
    }
    if (document.referrer && document.referrer.indexOf('@') > -1) {
        if ((/.*[a-zA-Z0-9._-]+(@|%40)[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}.*/gi).test(document.referrer)) {
            var replace_data = document.referrer.match(/[a-zA-Z0-9._-]+(@|%40)[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}/gi)[0];
            s.referrer = document.referrer.replace(replace_data, 'SUPPRESSED_EMAIL_ADDRESS');
        }
    }
    s.prop34 = 'D=g';
    if (s.channel == 'ERROR') {
        s.eVar70 = 'D=g';
        s.prop35 = 'D=v70';
    }
    s.eVar1 = s.pageName && !s.eVar1 ? 'D=pageName' : s.eVar1;
    s.eVar2 = s.channel && !s.eVar2 ? 'D=ch' : s.eVar2;
    s.eVar4 = s.prop4 ? 'D=c4' : '';
    s.eVar6 = s.prop6 ? 'D=c6' : '';
    if (s.linkName) {
        s.eVar1 = s.pageName;
    }
    s.linkTrackVars = s.apl(s.linkTrackVars, 'channel', ',', 2);
    s.linkTrackVars = s.apl(s.linkTrackVars, 'prop2', ',', 2);
    s.linkTrackVars = s.apl(s.linkTrackVars, 'prop4', ',', 2);
    s.linkTrackVars = s.apl(s.linkTrackVars, 'prop34', ',', 2);
    s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar1', ',', 2);
    s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar2', ',', 2);
    s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar3', ',', 2);
    s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar4', ',', 2);
    s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar57', ',', 2);
    s.pageLoaded = true;
}
s.doPlugins = s_doPlugins;
s.loadModule('Media');
s.Media.autoTrack = false;
s.Media.trackWhilePlaying = false;
s.Media.playerName = 'youtube';
s.Media.segmentByMilestones = true;
s.Media.trackMilestones = '25,50,75';
s.Media.trackUsingContextData = true;
s.Media.contextDataMapping = {
    'a.media.name': 'eVar24,prop24',
    'a.media.view': 'event24',
    'a.media.timePlayed': 'event29',
    'a.media.complete': 'event25',
    'a.media.milestones': {
        25: 'event26',
        50: 'event27',
        75: 'event28'
    }
};
s.Media.trackVars = 'prop24,eVar24,channel,prop4,prop34,eVar1,eVar2,eVar3,eVar4,eVar57';
s.Media.trackEvents = 'event24';
s.getProductNum = function() {
    var s = this,
        pn, e = new Date();
    if (!s.c_r('pn')) pn = 1;
    else pn = parseInt(s.c_r('pn')) + 1;
    e.setTime(e.getTime() + (30 * 86400000));
    s.c_w('pn', pn, e);
    return pn;
}
s.removeFromList = function(val, list, del) {
    del = del || ',';
    var els = list.split(del),
        newList = '';
    for (var i = 0; i < els.length; i++) {
        if (els[i] != val) {
            newList += (newList ? ',' : '') + els[i];
        }
    }
    return newList;
}
s.getValOnce = new Function("v", "c", "e", "t", "" +
    "var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000" +
    "0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e" +
    "==0?0:a);}return v==k?'':v");
s.apl = new Function("L", "v", "d", "u", "" +
    "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a." +
    "length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas" +
    "e()));}}if(!m)L=L?L+d+v:v;return L");
s.split = new Function("l", "d", "" +
    "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x" +
    "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
s.join = new Function("v", "p", "" +
    "var s=this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back" +
    ":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0" +
    ";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el" +
    "se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");
s.getVisitNum = new Function("tp", "c", "c2", "" +
    "var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}" +
    "if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi" +
    "me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!" +
    "c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn=" +
    "'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi" +
    "t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els" +
    "e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri" +
    "ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);" +
    "s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)" +
    ";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
s.dimo = new Function("m", "y", "" +
    "var d=new Date(y,m+1,0);return d.getDate();");
s.endof = new Function("x", "" +
    "var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x==" +
    "'m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if(" +
    "x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return " +
    "t;");
s.getTimeParting = new Function("h", "z", "" +
    "var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont" +
    "h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['" +
    "Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda" +
    "y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp" +
    "DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea" +
    "r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)" +
    "{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT" +
    "imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d" +
    ".getMinutes();M=(M<10?'0':'')+M;D=d.getDay();if(H<10){H='0'+H;}D=da" +
    "[D];tm=H+':'+M;return(tm+'|'+D);}");
s.crossVisitParticipation = new Function("v", "cn", "ex", "ct", "dl", "ev", "dv", "" +
    "var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var" +
    " ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l" +
    "ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i" +
    "f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape(" +
    "v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()" +
    ";if(c&&c!='')arry=eval(c);var e=new Date();e.setFullYear(e.getFullY" +
    "ear()+5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[ar" +
    "ry.length-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new" +
    " Date().getTime()];var start=arry.length-ct<0?0:arry.length-ct;var " +
    "td=new Date();for(var x=start;x<arry.length;x++){var diff=Math.roun" +
    "d((td.getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arr" +
    "y[x][0]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{deli" +
    "m:',',front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join" +
    "(h,{delim:dl});if(ce)s.c_w(cn,'');return r;");
s.crossVisitParticipationLocalStorage = function(read_from, set_to, expiry_date, max_values, separator, clear_if, duplicates) {
    var s = this,
        ce;
    var persisted_values = localStorage.adobe_crossVisitParticipation || JSON.stringify({});
    persisted_values = JSON.parse(persisted_values);
    var now = (new Date()).getTime();
    if (typeof duplicates == 'undefined') duplicates = 0;
    if (Object.keys(persisted_values).length !== 0) {
        for (value in persisted_values) {
            for (var i = persisted_values[value].length - 1; i >= 0; i--) {
                if (parseInt(persisted_values[value][i].exp_date) < now) {
                    persisted_values[value].splice(i, 1);
                }
            }
            if (persisted_values[value].length == 0) {
                delete persisted_values[value];
            }
        }
    }
    if (s.events && typeof(clear_if) != 'undefined') {
        var ay = clear_if.split(',');
        var ea = s.events.split(',');
        for (var u = 0; u < ay.length; u++) {
            for (var x = 0; x < ea.length; x++) {
                if (ay[u] == ea[x]) {
                    ce = 1;
                }
            }
        }
    }
    if (typeof(ce) != 'undefined' && typeof(set_to) != 'undefined') {
        if (persisted_values[set_to]) {
            delete persisted_values[set_to];
        }
        if (Object.keys(persisted_values).length === 0 && localStorage.adobe_crossVisitParticipation) {
            localStorage.removeItem('adobe_crossVisitParticipation');
        } else {
            try {
                localStorage.adobe_crossVisitParticipation = JSON.stringify(persisted_values);
            } catch (e) {};
        }
        return '';
    } else if (typeof(read_from) == 'undefined' || read_from == '') {
        return '';
    }
    if (Object.keys(persisted_values).length === 0 && localStorage.adobe_crossVisitParticipation) {
        localStorage.removeItem('adobe_crossVisitParticipation');
    }
    if (read_from && typeof(set_to) != 'undefined' && set_to) {
        var set_to_aux = persisted_values[set_to] || [];
        var there_are_duplicates = false;
        if (duplicates == 1) {
            set_to_aux.push({
                value: read_from,
                exp_date: (now + expiry_date * 24 * 60 * 60 * 1000)
            });
        } else {
            if (set_to_aux[set_to_aux.length - 1] && set_to_aux[set_to_aux.length - 1].value && read_from == set_to_aux[set_to_aux.length - 1].value) {
                there_are_duplicates = true;
            }
            if (!there_are_duplicates) {
                set_to_aux.push({
                    value: read_from,
                    exp_date: (now + expiry_date * 24 * 60 * 60 * 1000)
                });
            }
        }
        persisted_values[set_to] = set_to_aux;
        while (persisted_values[set_to].length > max_values) {
            persisted_values[set_to].shift();
        }
        var return_string = [];
        for (var i = 0, length1 = persisted_values[set_to].length; i < length1; i++) {
            return_string.push(persisted_values[set_to][i].value);
        }
        return_string = return_string.join(separator);
        try {
            localStorage.setItem("stringData", "LocalStorageIsFull?");
            localStorage.removeItem("stringData", "LocalStorageIsFull?");
            if (s.c_r && s.c_r(set_to)) {
                s.c_w(set_to, '', s.expDate);
            }
            localStorage.adobe_crossVisitParticipation = JSON.stringify(persisted_values);
            return return_string;
        } catch (e) {
            return '';
        }
    }
}
if (!s.__ccucr) {
    s.c_rr = s.c_r;
    s.__ccucr = true;
    s.c_r = new Function("k", "" +
        "var s=this,d=new Date,v=s.c_rr(k),c=s.c_rr('s_pers'),i,m,e;if(v)ret" +
        "urn v;k=s.escape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess'):c;i=" +
        "c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|',i);e=i<0?i:c.indexOf(';'" +
        ",i);m=m>0?m:e;v=i<0?'':s.unescape(c.substring(i+2+k.length,m<0?c.length:" +
        "m));if(m>0&&m!=e)if(parseInt(c.substring(m+1,e<0?c.length:e))<d.get" +
        "Time()){d.setTime(d.getTime()-60000);s.c_w(s.unescape(k),'',d);v='';}ret" +
        "urn v;");
}
if (!s.__ccucw) {
    s.c_wr = s.c_w;
    s.__ccucw = true;
    s.c_w = new Function("k", "v", "e", "" +
        "this.new2 = true;" +
        "var s=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv,sv," +
        "c,i,t;d.setTime(d.getTime()-60000);if(s.c_rr(k)) s.c_wr(k,'',d);k=s" +
        ".escape(k);pv=s.c_rr(pn);i=pv.indexOf(' '+k+'=');if(i>-1){pv=pv.substr" +
        "ing(0,i)+pv.substring(pv.indexOf(';',i)+1);pc=1;}sv=s.c_rr(sn);i=sv" +
        ".indexOf(' '+k+'=');if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.i" +
        "ndexOf(';',i)+1);sc=1;}d=new Date;if(e){if(e.getTime()>d.getTime())" +
        "{pv+=' '+k+'='+s.escape(v)+'|'+e.getTime()+';';pc=1;}}else{sv+=' '+k+'" +
        "='+s.escape(v)+';';sc=1;}if(sc) s.c_wr(sn,sv,0);if(pc){t=pv;while(t&&t" +
        ".indexOf(';')!=-1){var t1=parseInt(t.substring(t.indexOf('|')+1,t.i" +
        "ndexOf(';')));t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.set" +
        "Time(ht);s.c_wr(pn,pv,d);}return v==s.c_r(s.unescape(k));");
}

function AppMeasurement_Module_Media(q) {
    var b = this;
    b.s = q;
    q = window;
    q.s_c_in || (q.s_c_il = [], q.s_c_in = 0);
    b._il = q.s_c_il;
    b._in = q.s_c_in;
    b._il[b._in] = b;
    q.s_c_in++;
    b._c = "s_m";
    b.list = [];
    b.open = function(d, c, e, k) {
        var f = {},
            a = new Date,
            l = "",
            g;
        c || (c = -1);
        if (d && e) {
            b.list || (b.list = {});
            b.list[d] && b.close(d);
            k && k.id && (l = k.id);
            if (l)
                for (g in b.list) !Object.prototype[g] && b.list[g] && b.list[g].R == l && b.close(b.list[g].name);
            f.name = d;
            f.length = c;
            f.offset = 0;
            f.e = 0;
            f.playerName = b.playerName ? b.playerName : e;
            f.R = l;
            f.C = 0;
            f.a = 0;
            f.timestamp = Math.floor(a.getTime() / 1E3);
            f.k = 0;
            f.u = f.timestamp;
            f.c = -1;
            f.n = "";
            f.g = -1;
            f.D = 0;
            f.I = {};
            f.G = 0;
            f.m = 0;
            f.f = "";
            f.B = 0;
            f.L = 0;
            f.A = 0;
            f.F = 0;
            f.l = !1;
            f.v = "";
            f.J = "";
            f.K = 0;
            f.r = !1;
            f.H = "";
            f.complete = 0;
            f.Q = 0;
            f.p = 0;
            f.q = 0;
            b.list[d] = f
        }
    };
    b.openAd = function(d, c, e, k, f, a, l, g) {
        var h = {};
        b.open(d, c, e, g);
        if (h = b.list[d]) h.l = !0, h.v = k, h.J = f, h.K = a, h.H = l
    };
    b.M = function(d) {
        var c = b.list[d];
        b.list[d] = 0;
        c && c.monitor && clearTimeout(c.monitor.interval)
    };
    b.close = function(d) {
        b.i(d, 0, -1)
    };
    b.play = function(d, c, e, k) {
        var f = b.i(d, 1, c, e, k);
        f && !f.monitor && (f.monitor = {}, f.monitor.update = function() {
            1 == f.k && b.i(f.name, 3, -1);
            f.monitor.interval = setTimeout(f.monitor.update, 1E3)
        }, f.monitor.update())
    };
    b.click = function(d, c) {
        b.i(d, 7, c)
    };
    b.complete = function(d, c) {
        b.i(d, 5, c)
    };
    b.stop = function(d, c) {
        b.i(d, 2, c)
    };
    b.track = function(d) {
        b.i(d, 4, -1)
    };
    b.P = function(d, c) {
        var e = "a.media.",
            k = d.linkTrackVars,
            f = d.linkTrackEvents,
            a = "m_i",
            l, g = d.contextData,
            h;
        c.l && (e += "ad.", c.v && (g["a.media.name"] = c.v, g[e + "pod"] = c.J, g[e + "podPosition"] = c.K), c.G || (g[e + "CPM"] = c.H));
        c.r && (g[e + "clicked"] = !0, c.r = !1);
        g["a.contentType"] = "video" + (c.l ? "Ad" : "");
        g["a.media.channel"] = b.channel;
        g[e + "name"] = c.name;
        g[e + "playerName"] = c.playerName;
        0 < c.length && (g[e + "length"] = c.length);
        g[e + "timePlayed"] = Math.floor(c.a);
        0 < Math.floor(c.a) && (g[e + "timePlayed"] = Math.floor(c.a));
        c.G || (g[e + "view"] = !0, a = "m_s", b.Heartbeat && b.Heartbeat.enabled && (a = c.l ? b.__primetime ? "mspa_s" : "msa_s" : b.__primetime ? "msp_s" : "ms_s"), c.G = 1);
        c.f && (g[e + "segmentNum"] = c.m, g[e + "segment"] = c.f, 0 < c.B && (g[e + "segmentLength"] = c.B), c.A && 0 < c.a && (g[e + "segmentView"] = !0));
        !c.Q && c.complete && (g[e + "complete"] = !0, c.S = 1);
        0 < c.p && (g[e + "milestone"] = c.p);
        0 < c.q && (g[e + "offsetMilestone"] = c.q);
        if (k)
            for (h in g) Object.prototype[h] || (k += ",contextData." + h);
        l = g["a.contentType"];
        d.pe = a;
        d.pev3 = l;
        var q, s;
        if (b.contextDataMapping)
            for (h in d.events2 || (d.events2 = ""), k && (k += ",events"), b.contextDataMapping)
                if (!Object.prototype[h]) {
                    a = h.length > e.length && h.substring(0, e.length) == e ? h.substring(e.length) : "";
                    l = b.contextDataMapping[h];
                    if ("string" == typeof l)
                        for (q = l.split(","), s = 0; s < q.length; s++) l = q[s], "a.contentType" == h ? (k && (k += "," + l), d[l] = g[h]) : "view" == a || "segmentView" == a || "clicked" == a || "complete" == a || "timePlayed" == a || "CPM" == a ? (f && (f += "," + l), "timePlayed" == a || "CPM" == a ? g[h] && (d.events2 += (d.events2 ? "," : "") + l + "=" + g[h]) : g[h] && (d.events2 += (d.events2 ? "," : "") + l)) : "segment" == a && g[h + "Num"] ? (k && (k += "," + l), d[l] = g[h + "Num"] + ":" + g[h]) : (k && (k += "," + l), d[l] = g[h]);
                    else if ("milestones" == a || "offsetMilestones" == a) h = h.substring(0, h.length - 1), g[h] && b.contextDataMapping[h + "s"][g[h]] && (f && (f += "," + b.contextDataMapping[h +
                        "s"][g[h]]), d.events2 += (d.events2 ? "," : "") + b.contextDataMapping[h + "s"][g[h]]);
                    g[h] && (g[h] = 0);
                    "segment" == a && g[h + "Num"] && (g[h + "Num"] = 0)
                }
        d.linkTrackVars = k;
        d.linkTrackEvents = f
    };
    b.i = function(d, c, e, k, f) {
        var a = {},
            l = (new Date).getTime() / 1E3,
            g, h, q = b.trackVars,
            s = b.trackEvents,
            t = b.trackSeconds,
            u = b.trackMilestones,
            v = b.trackOffsetMilestones,
            w = b.segmentByMilestones,
            x = b.segmentByOffsetMilestones,
            p, n, r = 1,
            m = {},
            y;
        b.channel || (b.channel = b.s.w.location.hostname);
        if (a = d && b.list && b.list[d] ? b.list[d] : 0)
            if (a.l && (t = b.adTrackSeconds, u = b.adTrackMilestones, v = b.adTrackOffsetMilestones, w = b.adSegmentByMilestones, x = b.adSegmentByOffsetMilestones), 0 > e && (e = 1 == a.k && 0 < a.u ? l - a.u + a.c : a.c), 0 < a.length && (e = e < a.length ? e : a.length), 0 > e && (e = 0), a.offset = e, 0 < a.length && (a.e = a.offset / a.length * 100, a.e = 100 < a.e ? 100 : a.e), 0 > a.c && (a.c = e), y = a.D, m.name = d, m.ad = a.l, m.length = a.length, m.openTime = new Date, m.openTime.setTime(1E3 * a.timestamp), m.offset = a.offset, m.percent = a.e, m.playerName = a.playerName, m.mediaEvent = 0 > a.g ? "OPEN" : 1 == c ? "PLAY" : 2 == c ? "STOP" : 3 == c ? "MONITOR" : 4 == c ? "TRACK" : 5 == c ? "COMPLETE" : 7 == c ? "CLICK" : "CLOSE", 2 < c || c != a.k && (2 != c || 1 == a.k)) {
                f || (k = a.m, f = a.f);
                if (c) {
                    1 == c && (a.c = e);
                    if ((3 >= c || 5 <= c) && 0 <= a.g && (r = !1, q = s = "None", a.g != e)) {
                        h = a.g;
                        h > e && (h = a.c, h > e && (h = e));
                        p = u ? u.split(",") : 0;
                        if (0 < a.length && p && e >= h)
                            for (n = 0; n < p.length; n++)(g = p[n] ? parseFloat("" + p[n]) : 0) && h / a.length * 100 < g && a.e >= g && (r = !0, n = p.length, m.mediaEvent = "MILESTONE", a.p = m.milestone = g);
                        if ((p = v ? v.split(",") : 0) && e >= h)
                            for (n = 0; n < p.length; n++)(g = p[n] ? parseFloat("" + p[n]) : 0) && h < g && e >= g && (r = !0, n = p.length, m.mediaEvent = "OFFSET_MILESTONE", a.q = m.offsetMilestone = g)
                    }
                    if (a.L || !f) {
                        if (w && u && 0 < a.length) {
                            if (p = u.split(","))
                                for (p.push("100"), n = h = 0; n < p.length; n++)
                                    if (g = p[n] ? parseFloat("" + p[n]) : 0) a.e < g && (k = n + 1, f = "M:" + h + "-" + g, n = p.length), h = g
                        } else if (x && v && (p = v.split(",")))
                            for (p.push("" + (0 < a.length ? a.length : "E")), n = h = 0; n < p.length; n++)
                                if ((g = p[n] ? parseFloat("" + p[n]) : 0) || "E" == p[n]) {
                                    if (e < g || "E" == p[n]) k = n + 1, f = "O:" + h + "-" + g, n = p.length;
                                    h = g
                                }
                        f && (a.L = !0)
                    }(f || a.f) && f != a.f && (a.F = !0, a.f || (a.m = k, a.f = f), 0 <= a.g && (r = !0));
                    (2 <= c || 100 <= a.e) && a.c < e && (a.C += e - a.c, a.a += e - a.c);
                    if (2 >= c || 3 == c && !a.k) a.n += (1 == c || 3 == c ? "S" : "E") + Math.floor(e), a.k = 3 == c ? 1 : c;
                    !r && 0 <= a.g && 3 >= c && (t = t ? t : 0) && a.a >= t && (r = !0, m.mediaEvent = "SECONDS");
                    a.u = l;
                    a.c = e
                }
                if (!c || 3 >= c && 100 <= a.e) 2 != a.k && (a.n += "E" + Math.floor(e)), c = 0, q = s = "None", m.mediaEvent = "CLOSE";
                7 == c && (r = m.clicked = a.r = !0);
                if (5 == c || b.completeByCloseOffset && (!c || 100 <= a.e) && 0 < a.length && e >= a.length - b.completeCloseOffsetThreshold) r = m.complete = a.complete = !0;
                l = m.mediaEvent;
                "MILESTONE" == l ? l += "_" + m.milestone : "OFFSET_MILESTONE" == l && (l += "_" + m.offsetMilestone);
                a.I[l] ? m.eventFirstTime = !1 : (m.eventFirstTime = !0, a.I[l] = 1);
                m.event = m.mediaEvent;
                m.timePlayed = a.C;
                m.segmentNum = a.m;
                m.segment = a.f;
                m.segmentLength = a.B;
                b.monitor && 4 != c && b.monitor(b.s, m);
                b.Heartbeat && b.Heartbeat.enabled && 0 <= a.g && (r = !1);
                0 == c && b.M(d);
                r && a.D == y && (d = {
                    contextData: {}
                }, d.linkTrackVars = q, d.linkTrackEvents = s, d.linkTrackVars || (d.linkTrackVars = ""), d.linkTrackEvents || (d.linkTrackEvents = ""), b.P(d, a), d.linkTrackVars || (d["!linkTrackVars"] = 1), d.linkTrackEvents || (d["!linkTrackEvents"] = 1), b.s.track(d), a.F ? (a.m = k, a.f = f, a.A = !0, a.F = !1) : 0 < a.a && (a.A = !1), a.n = "", a.p = a.q = 0, a.a -= Math.floor(a.a), a.g = e, a.D++)
            }
        return a
    };
    b.O = function(d, c, e, k, f) {
        var a = 0;
        if (d && (!b.autoTrackMediaLengthRequired || c && 0 < c)) {
            if (b.list && b.list[d]) a = 1;
            else if (1 == e || 3 == e) b.open(d, c, "HTML5 Video", f), a = 1;
            a && b.i(d, e, k, -1, 0)
        }
    };
    b.attach = function(d) {
        var c, e, k;
        d && d.tagName && "VIDEO" == d.tagName.toUpperCase() && (b.o || (b.o = function(c, a, d) {
            var e, h;
            b.autoTrack && (e = c.currentSrc, (h = c.duration) || (h = -1), 0 > d && (d = c.currentTime), b.O(e, h, a, d, c))
        }), c = function() {
            b.o(d, 1, -1)
        }, e = function() {
            b.o(d, 1, -1)
        }, b.j(d, "play", c), b.j(d, "pause", e), b.j(d, "seeking", e), b.j(d, "seeked", c), b.j(d, "ended", function() {
            b.o(d, 0, -1)
        }), b.j(d, "timeupdate", c), k = function() {
            d.paused || d.ended || d.seeking || b.o(d, 3, -1);
            setTimeout(k, 1E3)
        }, k())
    };
    b.j = function(b, c, e) {
        b.attachEvent ? b.attachEvent("on" + c, e) : b.addEventListener && b.addEventListener(c, e, !1)
    };
    void 0 == b.completeByCloseOffset && (b.completeByCloseOffset = 1);
    void 0 == b.completeCloseOffsetThreshold && (b.completeCloseOffsetThreshold = 1);
    b.Heartbeat = {};
    b.N = function() {
        var d, c;
        if (b.autoTrack && (d = b.s.d.getElementsByTagName("VIDEO")))
            for (c = 0; c < d.length; c++) b.attach(d[c])
    };
    b.j(q, "load", b.N)
}

function AppMeasurement() {
    var a = this;
    a.version = "1.6";
    var k = window;
    k.s_c_in || (k.s_c_il = [], k.s_c_in = 0);
    a._il = k.s_c_il;
    a._in = k.s_c_in;
    a._il[a._in] = a;
    k.s_c_in++;
    a._c = "s_c";
    var q = k.AppMeasurement.Db;
    q || (q = null);
    var r = k,
        n, t;
    try {
        for (n = r.parent, t = r.location; n && n.location && t && "" + n.location != "" + t && r.location && "" + n.location != "" + r.location && n.location.host == t.host;) r = n, n = r.parent
    } catch (u) {}
    a.sb = function(a) {
        try {
            console.log(a)
        } catch (b) {}
    };
    a.Ba = function(a) {
        return "" + parseInt(a) == "" + a
    };
    a.replace = function(a, b, d) {
        return !a || 0 > a.indexOf(b) ? a : a.split(b).join(d)
    };
    a.escape = function(c) {
        var b, d;
        if (!c) return c;
        c = encodeURIComponent(c);
        for (b = 0; 7 > b; b++) d = "+~!*()'".substring(b, b + 1), 0 <= c.indexOf(d) && (c = a.replace(c, d, "%" + d.charCodeAt(0).toString(16).toUpperCase()));
        return c
    };
    a.unescape = function(c) {
        if (!c) return c;
        c = 0 <= c.indexOf("+") ? a.replace(c, "+", " ") : c;
        try {
            return decodeURIComponent(c)
        } catch (b) {}
        return unescape(c)
    };
    a.kb = function() {
        var c = k.location.hostname,
            b = a.fpCookieDomainPeriods,
            d;
        b || (b = a.cookieDomainPeriods);
        if (c && !a.cookieDomain && !/^[0-9.]+$/.test(c) && (b = b ? parseInt(b) : 2, b = 2 < b ? b : 2, d = c.lastIndexOf("."), 0 <= d)) {
            for (; 0 <= d && 1 < b;) d = c.lastIndexOf(".", d - 1), b--;
            a.cookieDomain = 0 < d ? c.substring(d) : c
        }
        return a.cookieDomain
    };
    a.c_r = a.cookieRead = function(c) {
        c = a.escape(c);
        var b = " " + a.d.cookie,
            d = b.indexOf(" " + c + "="),
            f = 0 > d ? d : b.indexOf(";", d);
        c = 0 > d ? "" : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f));
        return "[[B]]" != c ? c : ""
    };
    a.c_w = a.cookieWrite = function(c, b, d) {
        var f = a.kb(),
            e = a.cookieLifetime,
            g;
        b = "" + b;
        e = e ? ("" + e).toUpperCase() : "";
        d && "SESSION" != e && "NONE" != e && ((g = "" != b ? parseInt(e ? e : 0) : -60) ? (d = new Date, d.setTime(d.getTime() + 1E3 * g)) : 1 == d && (d = new Date, g = d.getYear(), d.setYear(g + 5 + (1900 > g ? 1900 : 0))));
        return c && "NONE" != e ? (a.d.cookie = c + "=" + a.escape("" != b ? b : "[[B]]") + "; path=/;" + (d && "SESSION" != e ? " expires=" + d.toGMTString() + ";" : "") + (f ? " domain=" + f + ";" : ""), a.cookieRead(c) == b) : 0
    };
    a.G = [];
    a.da = function(c, b, d) {
        if (a.va) return 0;
        a.maxDelay || (a.maxDelay = 250);
        var f = 0,
            e = (new Date).getTime() + a.maxDelay,
            g = a.d.visibilityState,
            m = ["webkitvisibilitychange", "visibilitychange"];
        g || (g = a.d.webkitVisibilityState);
        if (g && "prerender" == g) {
            if (!a.ea)
                for (a.ea = 1, d = 0; d < m.length; d++) a.d.addEventListener(m[d], function() {
                    var c = a.d.visibilityState;
                    c || (c = a.d.webkitVisibilityState);
                    "visible" == c && (a.ea = 0, a.delayReady())
                });
            f = 1;
            e = 0
        } else d || a.l("_d") && (f = 1);
        f && (a.G.push({
            m: c,
            a: b,
            t: e
        }), a.ea || setTimeout(a.delayReady, a.maxDelay));
        return f
    };
    a.delayReady = function() {
        var c = (new Date).getTime(),
            b = 0,
            d;
        for (a.l("_d") ? b = 1 : a.pa(); 0 < a.G.length;) {
            d = a.G.shift();
            if (b && !d.t && d.t > c) {
                a.G.unshift(d);
                setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
                break
            }
            a.va = 1;
            a[d.m].apply(a, d.a);
            a.va = 0
        }
    };
    a.setAccount = a.sa = function(c) {
        var b, d;
        if (!a.da("setAccount", arguments))
            if (a.account = c, a.allAccounts)
                for (b = a.allAccounts.concat(c.split(",")), a.allAccounts = [], b.sort(), d = 0; d < b.length; d++) 0 != d && b[d - 1] == b[d] || a.allAccounts.push(b[d]);
            else a.allAccounts = c.split(",")
    };
    a.foreachVar = function(c, b) {
        var d, f, e, g, m = "";
        e = f = "";
        if (a.lightProfileID) d = a.K, (m = a.lightTrackVars) && (m = "," + m + "," + a.ia.join(",") + ",");
        else {
            d = a.e;
            if (a.pe || a.linkType) m = a.linkTrackVars, f = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (m = a[e].Cb, f = a[e].Bb));
            m && (m = "," + m + "," + a.B.join(",") + ",");
            f && m && (m += ",events,")
        }
        b && (b = "," + b + ",");
        for (f = 0; f < d.length; f++) e = d[f], (g = a[e]) && (!m || 0 <= m.indexOf("," + e + ",")) && (!b || 0 <= b.indexOf("," + e + ",")) && c(e, g)
    };
    a.o = function(c, b, d, f, e) {
        var g = "",
            m, p, k, w, n = 0;
        "contextData" == c && (c = "c");
        if (b) {
            for (m in b)
                if (!(Object.prototype[m] || e && m.substring(0, e.length) != e) && b[m] && (!d || 0 <= d.indexOf("," + (f ? f + "." : "") + m + ","))) {
                    k = !1;
                    if (n)
                        for (p = 0; p < n.length; p++) m.substring(0, n[p].length) == n[p] && (k = !0);
                    if (!k && ("" == g && (g += "&" + c + "."), p = b[m], e && (m = m.substring(e.length)), 0 < m.length))
                        if (k = m.indexOf("."), 0 < k) p = m.substring(0, k), k = (e ? e : "") + p + ".", n || (n = []), n.push(k), g += a.o(p, b, d, f, k);
                        else if ("boolean" == typeof p && (p = p ? "true" : "false"), p) {
                        if ("retrieveLightData" == f && 0 > e.indexOf(".contextData.")) switch (k = m.substring(0, 4), w = m.substring(4), m) {
                            case "transactionID":
                                m = "xact";
                                break;
                            case "channel":
                                m = "ch";
                                break;
                            case "campaign":
                                m = "v0";
                                break;
                            default:
                                a.Ba(w) && ("prop" == k ? m = "c" + w : "eVar" == k ? m = "v" + w : "list" == k ? m = "l" + w : "hier" == k && (m = "h" + w, p = p.substring(0, 255)))
                        }
                        g += "&" + a.escape(m) + "=" + a.escape(p)
                    }
                }
            "" != g && (g += "&." + c)
        }
        return g
    };
    a.mb = function() {
        var c = "",
            b, d, f, e, g, m, p, k, n = "",
            r = "",
            s = e = "";
        if (a.lightProfileID) b = a.K, (n = a.lightTrackVars) && (n = "," + n + "," + a.ia.join(",") + ",");
        else {
            b = a.e;
            if (a.pe || a.linkType) n = a.linkTrackVars, r = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (n = a[e].Cb, r = a[e].Bb));
            n && (n = "," + n + "," + a.B.join(",") + ",");
            r && (r = "," + r + ",", n && (n += ",events,"));
            a.events2 && (s += ("" != s ? "," : "") + a.events2)
        }
        if (a.visitor && 1.5 <= parseFloat(a.visitor.version) && a.visitor.getCustomerIDs) {
            e = q;
            if (g = a.visitor.getCustomerIDs())
                for (d in g) Object.prototype[d] || (f = g[d], e || (e = {}), f.id && (e[d + ".id"] = f.id), f.authState && (e[d + ".as"] = f.authState));
            e && (c += a.o("cid", e))
        }
        a.AudienceManagement && a.AudienceManagement.isReady() && (c += a.o("d", a.AudienceManagement.getEventCallConfigParams()));
        for (d = 0; d < b.length; d++) {
            e = b[d];
            g = a[e];
            f = e.substring(0, 4);
            m = e.substring(4);
            !g && "events" == e && s && (g = s, s = "");
            if (g && (!n || 0 <= n.indexOf("," + e + ","))) {
                switch (e) {
                    case "supplementalDataID":
                        e = "sdid";
                        break;
                    case "timestamp":
                        e = "ts";
                        break;
                    case "dynamicVariablePrefix":
                        e = "D";
                        break;
                    case "visitorID":
                        e = "vid";
                        break;
                    case "marketingCloudVisitorID":
                        e = "mid";
                        break;
                    case "analyticsVisitorID":
                        e = "aid";
                        break;
                    case "audienceManagerLocationHint":
                        e = "aamlh";
                        break;
                    case "audienceManagerBlob":
                        e = "aamb";
                        break;
                    case "authState":
                        e = "as";
                        break;
                    case "pageURL":
                        e = "g";
                        255 < g.length && (a.pageURLRest = g.substring(255), g = g.substring(0, 255));
                        break;
                    case "pageURLRest":
                        e = "-g";
                        break;
                    case "referrer":
                        e = "r";
                        break;
                    case "vmk":
                    case "visitorMigrationKey":
                        e = "vmt";
                        break;
                    case "visitorMigrationServer":
                        e = "vmf";
                        a.ssl && a.visitorMigrationServerSecure && (g = "");
                        break;
                    case "visitorMigrationServerSecure":
                        e = "vmf";
                        !a.ssl && a.visitorMigrationServer && (g = "");
                        break;
                    case "charSet":
                        e = "ce";
                        break;
                    case "visitorNamespace":
                        e = "ns";
                        break;
                    case "cookieDomainPeriods":
                        e = "cdp";
                        break;
                    case "cookieLifetime":
                        e = "cl";
                        break;
                    case "variableProvider":
                        e = "vvp";
                        break;
                    case "currencyCode":
                        e = "cc";
                        break;
                    case "channel":
                        e = "ch";
                        break;
                    case "transactionID":
                        e = "xact";
                        break;
                    case "campaign":
                        e = "v0";
                        break;
                    case "latitude":
                        e = "lat";
                        break;
                    case "longitude":
                        e = "lon";
                        break;
                    case "resolution":
                        e = "s";
                        break;
                    case "colorDepth":
                        e = "c";
                        break;
                    case "javascriptVersion":
                        e = "j";
                        break;
                    case "javaEnabled":
                        e = "v";
                        break;
                    case "cookiesEnabled":
                        e = "k";
                        break;
                    case "browserWidth":
                        e = "bw";
                        break;
                    case "browserHeight":
                        e = "bh";
                        break;
                    case "connectionType":
                        e = "ct";
                        break;
                    case "homepage":
                        e = "hp";
                        break;
                    case "events":
                        s && (g += ("" != g ? "," : "") + s);
                        if (r)
                            for (m = g.split(","), g = "", f = 0; f < m.length; f++) p = m[f], k = p.indexOf("="), 0 <= k && (p = p.substring(0, k)), k = p.indexOf(":"), 0 <= k && (p = p.substring(0, k)), 0 <= r.indexOf("," + p + ",") && (g += (g ? "," : "") + m[f]);
                        break;
                    case "events2":
                        g = "";
                        break;
                    case "contextData":
                        c += a.o("c", a[e], n, e);
                        g = "";
                        break;
                    case "lightProfileID":
                        e = "mtp";
                        break;
                    case "lightStoreForSeconds":
                        e = "mtss";
                        a.lightProfileID || (g = "");
                        break;
                    case "lightIncrementBy":
                        e = "mti";
                        a.lightProfileID || (g = "");
                        break;
                    case "retrieveLightProfiles":
                        e = "mtsr";
                        break;
                    case "deleteLightProfiles":
                        e = "mtsd";
                        break;
                    case "retrieveLightData":
                        a.retrieveLightProfiles && (c += a.o("mts", a[e], n, e));
                        g = "";
                        break;
                    default:
                        a.Ba(m) && ("prop" == f ? e = "c" + m : "eVar" == f ? e = "v" + m : "list" == f ? e = "l" + m : "hier" == f && (e = "h" + m, g = g.substring(0, 255)))
                }
                g && (c += "&" + e + "=" + ("pev" != e.substring(0, 3) ? a.escape(g) : g))
            }
            "pev3" == e && a.c && (c += a.c)
        }
        return c
    };
    a.v = function(a) {
        var b = a.tagName;
        if ("undefined" != "" + a.Gb || "undefined" != "" + a.wb && "HTML" != ("" + a.wb).toUpperCase()) return "";
        b = b && b.toUpperCase ? b.toUpperCase() : "";
        "SHAPE" == b && (b = "");
        b && (("INPUT" == b || "BUTTON" == b) && a.type && a.type.toUpperCase ? b = a.type.toUpperCase() : !b && a.href && (b = "A"));
        return b
    };
    a.xa = function(a) {
        var b = a.href ? a.href : "",
            d, f, e;
        d = b.indexOf(":");
        f = b.indexOf("?");
        e = b.indexOf("/");
        b && (0 > d || 0 <= f && d > f || 0 <= e && d > e) && (f = a.protocol && 1 < a.protocol.length ? a.protocol : l.protocol ? l.protocol : "", d = l.pathname.lastIndexOf("/"), b = (f ? f + "//" : "") + (a.host ? a.host : l.host ? l.host : "") + ("/" != h.substring(0, 1) ? l.pathname.substring(0, 0 > d ? 0 : d) + "/" : "") + b);
        return b
    };
    a.H = function(c) {
        var b = a.v(c),
            d, f, e = "",
            g = 0;
        return b && (d = c.protocol, f = c.onclick, !c.href || "A" != b && "AREA" != b || f && d && !(0 > d.toLowerCase().indexOf("javascript")) ? f ? (e = a.replace(a.replace(a.replace(a.replace("" + f, "\r", ""), "\n", ""), "\t", ""), " ", ""), g = 2) : "INPUT" == b || "SUBMIT" == b ? (c.value ? e = c.value : c.innerText ? e = c.innerText : c.textContent && (e = c.textContent), g = 3) : c.src && "IMAGE" == b && (e = c.src) : e = a.xa(c), e) ? {
            id: e.substring(0, 100),
            type: g
        } : 0
    };
    a.Eb = function(c) {
        for (var b = a.v(c), d = a.H(c); c && !d && "BODY" != b;)
            if (c = c.parentElement ? c.parentElement : c.parentNode) b = a.v(c), d = a.H(c);
        d && "BODY" != b || (c = 0);
        c && (b = c.onclick ? "" + c.onclick : "", 0 <= b.indexOf(".tl(") || 0 <= b.indexOf(".trackLink(")) && (c = 0);
        return c
    };
    a.vb = function() {
        var c, b, d = a.linkObject,
            f = a.linkType,
            e = a.linkURL,
            g, m;
        a.ja = 1;
        d || (a.ja = 0, d = a.clickObject);
        if (d) {
            c = a.v(d);
            for (b = a.H(d); d && !b && "BODY" != c;)
                if (d = d.parentElement ? d.parentElement : d.parentNode) c = a.v(d), b = a.H(d);
            b && "BODY" != c || (d = 0);
            if (d && !a.linkObject) {
                var p = d.onclick ? "" + d.onclick : "";
                if (0 <= p.indexOf(".tl(") || 0 <= p.indexOf(".trackLink(")) d = 0
            }
        } else a.ja = 1;
        !e && d && (e = a.xa(d));
        e && !a.linkLeaveQueryString && (g = e.indexOf("?"), 0 <= g && (e = e.substring(0, g)));
        if (!f && e) {
            var n = 0,
                r = 0,
                q;
            if (a.trackDownloadLinks && a.linkDownloadFileTypes)
                for (p = e.toLowerCase(), g = p.indexOf("?"), m = p.indexOf("#"), 0 <= g ? 0 <= m && m < g && (g = m) : g = m, 0 <= g && (p = p.substring(0, g)), g = a.linkDownloadFileTypes.toLowerCase().split(","), m = 0; m < g.length; m++)(q = g[m]) && p.substring(p.length - (q.length + 1)) == "." + q && (f = "d");
            if (a.trackExternalLinks && !f && (p = e.toLowerCase(), a.Aa(p) && (a.linkInternalFilters || (a.linkInternalFilters = k.location.hostname), g = 0, a.linkExternalFilters ? (g = a.linkExternalFilters.toLowerCase().split(","), n = 1) : a.linkInternalFilters && (g = a.linkInternalFilters.toLowerCase().split(",")), g))) {
                for (m = 0; m < g.length; m++) q = g[m], 0 <= p.indexOf(q) && (r = 1);
                r ? n && (f = "e") : n || (f = "e")
            }
        }
        a.linkObject = d;
        a.linkURL = e;
        a.linkType = f;
        if (a.trackClickMap || a.trackInlineStats) a.c = "", d && (f = a.pageName, e = 1, d = d.sourceIndex, f || (f = a.pageURL, e = 0), k.s_objectID && (b.id = k.s_objectID, d = b.type = 1), f && b && b.id && c && (a.c = "&pid=" + a.escape(f.substring(0, 255)) + (e ? "&pidt=" + e : "") +
            "&oid=" + a.escape(b.id.substring(0, 100)) + (b.type ? "&oidt=" + b.type : "") + "&ot=" + c + (d ? "&oi=" + d : "")))
    };
    a.nb = function() {
        var c = a.ja,
            b = a.linkType,
            d = a.linkURL,
            f = a.linkName;
        b && (d || f) && (b = b.toLowerCase(), "d" != b && "e" != b && (b = "o"), a.pe = "lnk_" + b, a.pev1 = d ? a.escape(d) : "", a.pev2 = f ? a.escape(f) : "", c = 1);
        a.abort && (c = 0);
        if (a.trackClickMap || a.trackInlineStats || a.ActivityMap) {
            var b = {},
                d = 0,
                e = a.cookieRead("s_sq"),
                g = e ? e.split("&") : 0,
                m, p, k, e = 0;
            if (g)
                for (m = 0; m < g.length; m++) p = g[m].split("="), f = a.unescape(p[0]).split(","), p = a.unescape(p[1]), b[p] = f;
            f = a.account.split(",");
            m = {};
            for (k in a.contextData) k && !Object.prototype[k] && "a.activitymap." == k.substring(0, 14) && (m[k] = a.contextData[k], a.contextData[k] = "");
            a.c = a.o("c", m) + (a.c ? a.c : "");
            if (c || a.c) {
                c && !a.c && (e = 1);
                for (p in b)
                    if (!Object.prototype[p])
                        for (k = 0; k < f.length; k++)
                            for (e && (g = b[p].join(","), g == a.account && (a.c += ("&" != p.charAt(0) ? "&" : "") + p, b[p] = [], d = 1)), m = 0; m < b[p].length; m++) g = b[p][m], g == f[k] && (e && (a.c += "&u=" + a.escape(g) + ("&" != p.charAt(0) ? "&" : "") + p + "&u=0"), b[p].splice(m, 1), d = 1);
                c || (d = 1);
                if (d) {
                    e = "";
                    m = 2;
                    !c && a.c && (e = a.escape(f.join(",")) + "=" + a.escape(a.c), m = 1);
                    for (p in b) !Object.prototype[p] && 0 < m && 0 < b[p].length && (e += (e ? "&" : "") + a.escape(b[p].join(",")) + "=" + a.escape(p), m--);
                    a.cookieWrite("s_sq", e)
                }
            }
        }
        return c
    };
    a.ob = function() {
        if (!a.Ab) {
            var c = new Date,
                b = r.location,
                d, f, e = f = d = "",
                g = "",
                m = "",
                k = "1.2",
                n = a.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
                q = "",
                s = "";
            if (c.setUTCDate && (k = "1.3", (0).toPrecision && (k = "1.5", c = [], c.forEach))) {
                k = "1.6";
                f = 0;
                d = {};
                try {
                    f = new Iterator(d), f.next && (k = "1.7", c.reduce && (k = "1.8", k.trim && (k = "1.8.1", Date.parse && (k = "1.8.2", Object.create && (k = "1.8.5")))))
                } catch (t) {}
            }
            d = screen.width + "x" + screen.height;
            e = navigator.javaEnabled() ? "Y" : "N";
            f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
            g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
            m = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
            try {
                a.b.addBehavior("#default#homePage"), q = a.b.Fb(b) ? "Y" : "N"
            } catch (u) {}
            try {
                a.b.addBehavior("#default#clientCaps"), s = a.b.connectionType
            } catch (x) {}
            a.resolution = d;
            a.colorDepth = f;
            a.javascriptVersion = k;
            a.javaEnabled = e;
            a.cookiesEnabled = n;
            a.browserWidth = g;
            a.browserHeight = m;
            a.connectionType = s;
            a.homepage = q;
            a.Ab = 1
        }
    };
    a.L = {};
    a.loadModule = function(c, b) {
        var d = a.L[c];
        if (!d) {
            d = k["AppMeasurement_Module_" + c] ? new k["AppMeasurement_Module_" + c](a) : {};
            a.L[c] = a[c] = d;
            d.Qa = function() {
                return d.Ua
            };
            d.Va = function(b) {
                if (d.Ua = b) a[c + "_onLoad"] = b, a.da(c + "_onLoad", [a, d], 1) || b(a, d)
            };
            try {
                Object.defineProperty ? Object.defineProperty(d, "onLoad", {
                    get: d.Qa,
                    set: d.Va
                }) : d._olc = 1
            } catch (f) {
                d._olc = 1
            }
        }
        b && (a[c + "_onLoad"] = b, a.da(c + "_onLoad", [a, d], 1) || b(a, d))
    };
    a.l = function(c) {
        var b, d;
        for (b in a.L)
            if (!Object.prototype[b] && (d = a.L[b]) && (d._olc && d.onLoad && (d._olc = 0, d.onLoad(a, d)), d[c] && d[c]())) return 1;
        return 0
    };
    a.qb = function() {
        var c = Math.floor(1E13 * Math.random()),
            b = a.visitorSampling,
            d = a.visitorSamplingGroup,
            d = "s_vsn_" + (a.visitorNamespace ? a.visitorNamespace : a.account) + (d ? "_" + d : ""),
            f = a.cookieRead(d);
        if (b) {
            f && (f = parseInt(f));
            if (!f) {
                if (!a.cookieWrite(d, c)) return 0;
                f = c
            }
            if (f % 1E4 > v) return 0
        }
        return 1
    };
    a.M = function(c, b) {
        var d, f, e, g, m, k;
        for (d = 0; 2 > d; d++)
            for (f = 0 < d ? a.qa : a.e, e = 0; e < f.length; e++)
                if (g = f[e], (m = c[g]) || c["!" + g]) {
                    if (!b && ("contextData" == g || "retrieveLightData" == g) && a[g])
                        for (k in a[g]) m[k] || (m[k] = a[g][k]);
                    a[g] = m
                }
    };
    a.Ja = function(c, b) {
        var d, f, e, g;
        for (d = 0; 2 > d; d++)
            for (f = 0 < d ? a.qa : a.e, e = 0; e < f.length; e++) g = f[e], c[g] = a[g], b || c[g] || (c["!" + g] = 1)
    };
    a.ib = function(a) {
        var b, d, f, e, g, m = 0,
            k, n = "",
            q = "";
        if (a && 255 < a.length && (b = "" + a, d = b.indexOf("?"), 0 < d && (k = b.substring(d + 1), b = b.substring(0, d), e = b.toLowerCase(), f = 0, "http://" == e.substring(0, 7) ? f += 7 : "https://" == e.substring(0, 8) && (f += 8), d = e.indexOf("/", f), 0 < d && (e = e.substring(f, d), g = b.substring(d), b = b.substring(0, d), 0 <= e.indexOf("google") ? m = ",q,ie,start,search_key,word,kw,cd," : 0 <= e.indexOf("yahoo.co") && (m = ",p,ei,"), m && k)))) {
            if ((a = k.split("&")) && 1 < a.length) {
                for (f = 0; f < a.length; f++) e = a[f], d = e.indexOf("="), 0 < d && 0 <= m.indexOf("," + e.substring(0, d) + ",") ? n += (n ? "&" : "") + e : q += (q ? "&" : "") + e;
                n && q ? k = n + "&" + q : q = ""
            }
            d = 253 - (k.length - q.length) - b.length;
            a = b + (0 < d ? g.substring(0, d) : "") + "?" + k
        }
        return a
    };
    a.Pa = function(c) {
        var b = a.d.visibilityState,
            d = ["webkitvisibilitychange", "visibilitychange"];
        b || (b = a.d.webkitVisibilityState);
        if (b && "prerender" == b) {
            if (c)
                for (b = 0; b < d.length; b++) a.d.addEventListener(d[b], function() {
                    var b = a.d.visibilityState;
                    b || (b = a.d.webkitVisibilityState);
                    "visible" == b && c()
                });
            return !1
        }
        return !0
    };
    a.Z = !1;
    a.D = !1;
    a.Xa = function() {
        a.D = !0;
        a.i()
    };
    a.X = !1;
    a.Q = !1;
    a.Ta = function(c) {
        a.marketingCloudVisitorID = c;
        a.Q = !0;
        a.i()
    };
    a.aa = !1;
    a.R = !1;
    a.Ya = function(c) {
        a.visitorOptedOut = c;
        a.R = !0;
        a.i()
    };
    a.U = !1;
    a.N = !1;
    a.La = function(c) {
        a.analyticsVisitorID = c;
        a.N = !0;
        a.i()
    };
    a.W = !1;
    a.P = !1;
    a.Na = function(c) {
        a.audienceManagerLocationHint = c;
        a.P = !0;
        a.i()
    };
    a.V = !1;
    a.O = !1;
    a.Ma = function(c) {
        a.audienceManagerBlob = c;
        a.O = !0;
        a.i()
    };
    a.Oa = function(c) {
        a.maxDelay || (a.maxDelay = 250);
        return a.l("_d") ? (c && setTimeout(function() {
            c()
        }, a.maxDelay), !1) : !0
    };
    a.Y = !1;
    a.C = !1;
    a.pa = function() {
        a.C = !0;
        a.i()
    };
    a.isReadyToTrack = function() {
        var c = !0,
            b = a.visitor;
        a.Z || a.D || (a.Pa(a.Xa) ? a.D = !0 : a.Z = !0);
        if (a.Z && !a.D) return !1;
        b && b.isAllowed() && (a.X || a.marketingCloudVisitorID || !b.getMarketingCloudVisitorID || (a.X = !0, a.marketingCloudVisitorID = b.getMarketingCloudVisitorID([a, a.Ta]), a.marketingCloudVisitorID && (a.Q = !0)), a.aa || a.visitorOptedOut || !b.isOptedOut || (a.aa = !0, a.visitorOptedOut = b.isOptedOut([a, a.Ya]), a.visitorOptedOut != q && (a.R = !0)), a.U || a.analyticsVisitorID || !b.getAnalyticsVisitorID || (a.U = !0, a.analyticsVisitorID = b.getAnalyticsVisitorID([a, a.La]), a.analyticsVisitorID && (a.N = !0)), a.W || a.audienceManagerLocationHint || !b.getAudienceManagerLocationHint || (a.W = !0, a.audienceManagerLocationHint = b.getAudienceManagerLocationHint([a, a.Na]), a.audienceManagerLocationHint && (a.P = !0)), a.V || a.audienceManagerBlob || !b.getAudienceManagerBlob || (a.V = !0, a.audienceManagerBlob = b.getAudienceManagerBlob([a, a.Ma]), a.audienceManagerBlob && (a.O = !0)), a.X && !a.Q && !a.marketingCloudVisitorID || a.U && !a.N && !a.analyticsVisitorID || a.W && !a.P && !a.audienceManagerLocationHint || a.V && !a.O && !a.audienceManagerBlob || a.aa && !a.R) && (c = !1);
        a.Y || a.C || (a.Oa(a.pa) ? a.C = !0 : a.Y = !0);
        a.Y && !a.C && (c = !1);
        return c
    };
    a.k = q;
    a.p = 0;
    a.callbackWhenReadyToTrack = function(c, b, d) {
        var f;
        f = {};
        f.bb = c;
        f.ab = b;
        f.Za = d;
        a.k == q && (a.k = []);
        a.k.push(f);
        0 == a.p && (a.p = setInterval(a.i, 100))
    };
    a.i = function() {
        var c;
        if (a.isReadyToTrack() && (a.Wa(), a.k != q))
            for (; 0 < a.k.length;) c = a.k.shift(), c.ab.apply(c.bb, c.Za)
    };
    a.Wa = function() {
        a.p && (clearInterval(a.p), a.p = 0)
    };
    a.Ra = function(c) {
        var b, d, f = q,
            e = q;
        if (!a.isReadyToTrack()) {
            b = [];
            if (c != q)
                for (d in f = {}, c) f[d] = c[d];
            e = {};
            a.Ja(e, !0);
            b.push(f);
            b.push(e);
            a.callbackWhenReadyToTrack(a, a.track, b);
            return !0
        }
        return !1
    };
    a.lb = function() {
        var c = a.cookieRead("s_fid"),
            b = "",
            d = "",
            f;
        f = 8;
        var e = 4;
        if (!c || 0 > c.indexOf("-")) {
            for (c = 0; 16 > c; c++) f = Math.floor(Math.random() * f), b += "0123456789ABCDEF".substring(f, f + 1), f = Math.floor(Math.random() * e), d += "0123456789ABCDEF".substring(f, f + 1), f = e = 16;
            c = b + "-" + d
        }
        a.cookieWrite("s_fid", c, 1) || (c = 0);
        return c
    };
    a.t = a.track = function(c, b) {
        var d, f = new Date,
            e = "s" + Math.floor(f.getTime() / 108E5) % 10 + Math.floor(1E13 * Math.random()),
            g = f.getYear(),
            g = "t=" + a.escape(f.getDate() + "/" + f.getMonth() + "/" + (1900 > g ? g + 1900 : g) + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds() + " " +
                f.getDay() + " " + f.getTimezoneOffset());
        a.visitor && (a.visitor.jb && (a.authState = a.visitor.jb()), !a.supplementalDataID && a.visitor.getSupplementalDataID && (a.supplementalDataID = a.visitor.getSupplementalDataID("AppMeasurement:" + a._in, a.expectSupplementalData ? !1 : !0)));
        a.l("_s");
        a.Ra(c) || (b && a.M(b), c && (d = {}, a.Ja(d, 0), a.M(c)), a.qb() && !a.visitorOptedOut && (a.analyticsVisitorID || a.marketingCloudVisitorID || (a.fid = a.lb()), a.vb(), a.usePlugins && a.doPlugins && a.doPlugins(a), a.account && (a.abort || (a.trackOffline && !a.timestamp && (a.timestamp = Math.floor(f.getTime() / 1E3)), f = k.location, a.pageURL || (a.pageURL = f.href ? f.href : f), a.referrer || a.Ka || (a.referrer = r.document.referrer), a.Ka = 1, a.referrer = a.ib(a.referrer), a.l("_g")), a.nb() && !a.abort && (a.ob(), g += a.mb(), a.ub(e, g), a.l("_t"), a.referrer = ""))), c && a.M(d, 1));
        a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = k.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.c = a.lightProfileID = 0
    };
    a.tl = a.trackLink = function(c, b, d, f, e) {
        a.linkObject = c;
        a.linkType = b;
        a.linkName = d;
        e && (a.j = c, a.r = e);
        return a.track(f)
    };
    a.trackLight = function(c, b, d, f) {
        a.lightProfileID = c;
        a.lightStoreForSeconds = b;
        a.lightIncrementBy = d;
        return a.track(f)
    };
    a.clearVars = function() {
        var c, b;
        for (c = 0; c < a.e.length; c++)
            if (b = a.e[c], "prop" == b.substring(0, 4) || "eVar" == b.substring(0, 4) || "hier" == b.substring(0, 4) || "list" == b.substring(0, 4) || "channel" == b || "events" == b || "eventList" == b || "products" == b || "productList" == b || "purchaseID" == b || "transactionID" == b || "state" == b || "zip" == b || "campaign" == b) a[b] = void 0
    };
    a.tagContainerMarker = "";
    a.ub = function(c, b) {
        var d, f = a.trackingServer;
        d = "";
        var e = a.dc,
            g = "sc.",
            k = a.visitorNamespace;
        f ? a.trackingServerSecure && a.ssl && (f = a.trackingServerSecure) : (k || (k = a.account, f = k.indexOf(","), 0 <= f && (k = k.substring(0, f)), k = k.replace(/[^A-Za-z0-9]/g, "")), d || (d = "2o7.net"), e = e ? ("" + e).toLowerCase() : "d1", "2o7.net" == d && ("d1" == e ? e = "112" : "d2" == e && (e = "122"), g = ""), f = k + "." + e + "." + g + d);
        d = a.ssl ? "https://" : "http://";
        e = a.AudienceManagement && a.AudienceManagement.isReady();
        d += f + "/b/ss/" + a.account +
            "/" + (a.mobile ? "5." : "") + (e ? "10" : "1") + "/JS-" + a.version + (a.zb ? "T" : "") + (a.tagContainerMarker ? "-" + a.tagContainerMarker : "") + "/" + c + "?AQB=1&ndh=1&pf=1&" + (e ? "callback=s_c_il[" + a._in + "].AudienceManagement.passData&" : "") + b + "&AQE=1";
        a.gb(d);
        a.fa()
    };
    a.gb = function(c) {
        a.g || a.pb();
        a.g.push(c);
        a.ha = a.u();
        a.Ha()
    };
    a.pb = function() {
        a.g = a.rb();
        a.g || (a.g = [])
    };
    a.rb = function() {
        var c, b;
        if (a.ma()) {
            try {
                (b = k.localStorage.getItem(a.ka())) && (c = k.JSON.parse(b))
            } catch (d) {}
            return c
        }
    };
    a.ma = function() {
        var c = !0;
        a.trackOffline && a.offlineFilename && k.localStorage && k.JSON || (c = !1);
        return c
    };
    a.ya = function() {
        var c = 0;
        a.g && (c = a.g.length);
        a.A && c++;
        return c
    };
    a.fa = function() {
        if (!a.A)
            if (a.za = q, a.la) a.ha > a.J && a.Fa(a.g), a.oa(500);
            else {
                var c = a.$a();
                if (0 < c) a.oa(c);
                else if (c = a.wa()) a.A = 1, a.tb(c), a.xb(c)
            }
    };
    a.oa = function(c) {
        a.za || (c || (c = 0), a.za = setTimeout(a.fa, c))
    };
    a.$a = function() {
        var c;
        if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
        c = a.u() - a.Ea;
        return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c
    };
    a.wa = function() {
        if (0 < a.g.length) return a.g.shift()
    };
    a.tb = function(c) {
        if (a.debugTracking) {
            var b = "AppMeasurement Debug: " + c;
            c = c.split("&");
            var d;
            for (d = 0; d < c.length; d++) b += "\n\t" + a.unescape(c[d]);
            a.sb(b)
        }
    };
    a.Sa = function() {
        return a.marketingCloudVisitorID || a.analyticsVisitorID
    };
    a.T = !1;
    var s;
    try {
        s = JSON.parse('{"x":"y"}')
    } catch (x) {
        s = null
    }
    s && "y" == s.x ? (a.T = !0, a.S = function(a) {
        return JSON.parse(a)
    }) : k.$ && k.$.parseJSON ? (a.S = function(a) {
        return k.$.parseJSON(a)
    }, a.T = !0) : a.S = function() {
        return null
    };
    a.xb = function(c) {
        var b, d, f;
        a.Sa() && 2047 < c.length && ("undefined" != typeof XMLHttpRequest && (b = new XMLHttpRequest, "withCredentials" in b ? d = 1 : b = 0), b || "undefined" == typeof XDomainRequest || (b = new XDomainRequest, d = 2), b && a.AudienceManagement && a.AudienceManagement.isReady() && (a.T ? b.ra = !0 : b = 0));
        !b && a.Ia && (c = c.substring(0, 2047));
        !b && a.d.createElement && a.AudienceManagement && a.AudienceManagement.isReady() && (b = a.d.createElement("SCRIPT")) && "async" in b && ((f = (f = a.d.getElementsByTagName("HEAD")) && f[0] ? f[0] : a.d.body) ? (b.type = "text/javascript", b.setAttribute("async", "async"), d = 3) : b = 0);
        b || (b = new Image, b.alt = "");
        b.ua = function() {
            try {
                a.na && (clearTimeout(a.na), a.na = 0), b.timeout && (clearTimeout(b.timeout), b.timeout = 0)
            } catch (c) {}
        };
        b.onload = b.yb = function() {
            b.ua();
            a.fb();
            a.ba();
            a.A = 0;
            a.fa();
            if (b.ra) {
                b.ra = !1;
                try {
                    var c = a.S(b.responseText);
                    a.AudienceManagement.passData(c)
                } catch (d) {}
            }
        };
        b.onabort = b.onerror = b.hb = function() {
            b.ua();
            (a.trackOffline || a.la) && a.A && a.g.unshift(a.eb);
            a.A = 0;
            a.ha > a.J && a.Fa(a.g);
            a.ba();
            a.oa(500)
        };
        b.onreadystatechange = function() {
            4 == b.readyState && (200 == b.status ? b.yb() : b.hb())
        };
        a.Ea = a.u();
        if (1 == d || 2 == d) {
            var e = c.indexOf("?");
            f = c.substring(0, e);
            e = c.substring(e + 1);
            e = e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, "");
            1 == d ? (b.open("POST", f, !0), b.send(e)) : 2 == d && (b.open("POST", f), b.send(e))
        } else if (b.src = c, 3 == d) {
            if (a.Ca) try {
                f.removeChild(a.Ca)
            } catch (g) {}
            f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
            a.Ca = a.cb
        }
        b.abort && (a.na = setTimeout(b.abort, 5E3));
        a.eb = c;
        a.cb = k["s_i_" + a.replace(a.account, ",", "_")] = b;
        if (a.useForcedLinkTracking && a.F || a.r) a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250), a.ca = setTimeout(a.ba, a.forcedLinkTrackingTimeout)
    };
    a.fb = function() {
        if (a.ma() && !(a.Da > a.J)) try {
            k.localStorage.removeItem(a.ka()), a.Da = a.u()
        } catch (c) {}
    };
    a.Fa = function(c) {
        if (a.ma()) {
            a.Ha();
            try {
                k.localStorage.setItem(a.ka(), k.JSON.stringify(c)), a.J = a.u()
            } catch (b) {}
        }
    };
    a.Ha = function() {
        if (a.trackOffline) {
            if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10;
            for (; a.g.length > a.offlineLimit;) a.wa()
        }
    };
    a.forceOffline = function() {
        a.la = !0
    };
    a.forceOnline = function() {
        a.la = !1
    };
    a.ka = function() {
        return a.offlineFilename + "-" + a.visitorNamespace + a.account
    };
    a.u = function() {
        return (new Date).getTime()
    };
    a.Aa = function(a) {
        a = a.toLowerCase();
        return 0 != a.indexOf("#") && 0 != a.indexOf("about:") && 0 != a.indexOf("opera:") && 0 != a.indexOf("javascript:") ? !0 : !1
    };
    a.setTagContainer = function(c) {
        var b, d, f;
        a.zb = c;
        for (b = 0; b < a._il.length; b++)
            if ((d = a._il[b]) && "s_l" == d._c && d.tagContainerName == c) {
                a.M(d);
                if (d.lmq)
                    for (b = 0; b < d.lmq.length; b++) f = d.lmq[b], a.loadModule(f.n);
                if (d.ml)
                    for (f in d.ml)
                        if (a[f])
                            for (b in c = a[f], f = d.ml[f], f) !Object.prototype[b] && ("function" != typeof f[b] || 0 > ("" + f[b]).indexOf("s_c_il")) && (c[b] = f[b]);
                if (d.mmq)
                    for (b = 0; b < d.mmq.length; b++) f = d.mmq[b], a[f.m] && (c = a[f.m], c[f.f] && "function" == typeof c[f.f] && (f.a ? c[f.f].apply(c, f.a) : c[f.f].apply(c)));
                if (d.tq)
                    for (b = 0; b < d.tq.length; b++) a.track(d.tq[b]);
                d.s = a;
                break
            }
    };
    a.Util = {
        urlEncode: a.escape,
        urlDecode: a.unescape,
        cookieRead: a.cookieRead,
        cookieWrite: a.cookieWrite,
        getQueryParam: function(c, b, d) {
            var f;
            b || (b = a.pageURL ? a.pageURL : k.location);
            d || (d = "&");
            return c && b && (b = "" + b, f = b.indexOf("?"), 0 <= f && (b = d + b.substring(f + 1) + d, f = b.indexOf(d + c + "="), 0 <= f && (b = b.substring(f + d.length + c.length + 1), f = b.indexOf(d), 0 <= f && (b = b.substring(0, f)), 0 < b.length))) ? a.unescape(b) : ""
        }
    };
    a.B = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
    a.e = a.B.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));
    a.ia = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");
    a.K = a.ia.slice(0);
    a.qa = "account allAccounts debugTracking visitor trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData AudienceManagement".split(" ");
    for (n = 0; 250 >= n; n++) 76 > n && (a.e.push("prop" + n), a.K.push("prop" + n)), a.e.push("eVar" + n), a.K.push("eVar" + n), 6 > n && a.e.push("hier" + n), 4 > n && a.e.push("list" + n);
    n = "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest".split(" ");
    a.e = a.e.concat(n);
    a.B = a.B.concat(n);
    a.ssl = 0 <= k.location.protocol.toLowerCase().indexOf("https");
    a.charSet = "UTF-8";
    a.contextData = {};
    a.offlineThrottleDelay = 0;
    a.offlineFilename = "AppMeasurement.offline";
    a.Ea = 0;
    a.ha = 0;
    a.J = 0;
    a.Da = 0;
    a.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
    a.w = k;
    a.d = k.document;
    try {
        if (a.Ia = !1, navigator) {
            var y = navigator.userAgent;
            if ("Microsoft Internet Explorer" == navigator.appName || 0 <= y.indexOf("MSIE ") || 0 <= y.indexOf("Trident/") && 0 <= y.indexOf("Windows NT 6")) a.Ia = !0
        }
    } catch (z) {}
    a.ba = function() {
        a.ca && (k.clearTimeout(a.ca), a.ca = q);
        a.j && a.F && a.j.dispatchEvent(a.F);
        a.r && ("function" == typeof a.r ? a.r() : a.j && a.j.href && (a.d.location = a.j.href));
        a.j = a.F = a.r = 0
    };
    a.Ga = function() {
        a.b = a.d.body;
        a.b ? (a.q = function(c) {
            var b, d, f, e, g;
            if (!(a.d && a.d.getElementById("cppXYctnr") || c && c["s_fe_" + a._in])) {
                if (a.ta)
                    if (a.useForcedLinkTracking) a.b.removeEventListener("click", a.q, !1);
                    else {
                        a.b.removeEventListener("click", a.q, !0);
                        a.ta = a.useForcedLinkTracking = 0;
                        return
                    }
                else a.useForcedLinkTracking = 0;
                a.clickObject = c.srcElement ? c.srcElement : c.target;
                try {
                    if (!a.clickObject || a.I && a.I == a.clickObject || !(a.clickObject.tagName || a.clickObject.parentElement || a.clickObject.parentNode)) a.clickObject = 0;
                    else {
                        var m = a.I = a.clickObject;
                        a.ga && (clearTimeout(a.ga), a.ga = 0);
                        a.ga = setTimeout(function() {
                            a.I == m && (a.I = 0)
                        }, 1E4);
                        f = a.ya();
                        a.track();
                        if (f < a.ya() && a.useForcedLinkTracking && c.target) {
                            for (e = c.target; e && e != a.b && "A" != e.tagName.toUpperCase() && "AREA" != e.tagName.toUpperCase();) e = e.parentNode;
                            if (e && (g = e.href, a.Aa(g) || (g = 0), d = e.target, c.target.dispatchEvent && g && (!d || "_self" == d || "_top" == d || "_parent" == d || k.name && d == k.name))) {
                                try {
                                    b = a.d.createEvent("MouseEvents")
                                } catch (n) {
                                    b = new k.MouseEvent
                                }
                                if (b) {
                                    try {
                                        b.initMouseEvent("click", c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget)
                                    } catch (q) {
                                        b = 0
                                    }
                                    b && (b["s_fe_" + a._in] = b.s_fe = 1, c.stopPropagation(), c.stopImmediatePropagation && c.stopImmediatePropagation(), c.preventDefault(), a.j = c.target, a.F = b)
                                }
                            }
                        }
                    }
                } catch (r) {
                    a.clickObject = 0
                }
            }
        }, a.b && a.b.attachEvent ? a.b.attachEvent("onclick", a.q) : a.b && a.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && a.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && k.MouseEvent) && (a.ta = 1, a.useForcedLinkTracking = 1, a.b.addEventListener("click", a.q, !0)), a.b.addEventListener("click", a.q, !1))) : setTimeout(a.Ga, 30)
    };
    a.Ga();
    a.loadModule("ActivityMap")
}

function s_gi(a) {
    var k, q = window.s_c_il,
        r, n, t = a.split(","),
        u, s, x = 0;
    if (q)
        for (r = 0; !x && r < q.length;) {
            k = q[r];
            if ("s_c" == k._c && (k.account || k.oun))
                if (k.account && k.account == a) x = 1;
                else
                    for (n = k.account ? k.account : k.oun, n = k.allAccounts ? k.allAccounts : n.split(","), u = 0; u < t.length; u++)
                        for (s = 0; s < n.length; s++) t[u] == n[s] && (x = 1);
            r++
        }
    x || (k = new AppMeasurement);
    k.setAccount ? k.setAccount(a) : k.sa && k.sa(a);
    return k
}
AppMeasurement.getInstance = s_gi;
window.s_objectID || (window.s_objectID = 0);

function s_pgicq() {
    var a = window,
        k = a.s_giq,
        q, r, n;
    if (k)
        for (q = 0; q < k.length; q++) r = k[q], n = s_gi(r.oun), n.setAccount(r.un), n.setTagContainer(r.tagContainerName);
    a.s_giq = 0
}
s_pgicq();

function AppMeasurement_Module_Integrate(l) {
    var c = this;
    c.s = l;
    var e = window;
    e.s_c_in || (e.s_c_il = [], e.s_c_in = 0);
    c._il = e.s_c_il;
    c._in = e.s_c_in;
    c._il[c._in] = c;
    e.s_c_in++;
    c._c = "s_m";
    c.list = [];
    c.add = function(d, b) {
        var a;
        b || (b = "s_Integrate_" + d);
        e[b] || (e[b] = {});
        a = c[d] = e[b];
        a.a = d;
        a.e = c;
        a._c = 0;
        a._d = 0;
        void 0 == a.disable && (a.disable = 0);
        a.get = function(b, d) {
            var f = document,
                h = f.getElementsByTagName("HEAD"),
                k;
            if (!a.disable && (d || (v = "s_" + c._in + "_Integrate_" + a.a + "_get_" + a._c), a._c++, a.VAR = v, a.CALLBACK = "s_c_il[" + c._in + "]." +
                    a.a + ".callback", a.delay(), h = h && 0 < h.length ? h[0] : f.body)) try {
                k = f.createElement("SCRIPT"), k.type = "text/javascript", k.setAttribute("async", "async"), k.src = c.c(a, b), 0 > b.indexOf("[CALLBACK]") && (k.onload = k.onreadystatechange = function() {
                    a.callback(e[v])
                }), h.firstChild ? h.insertBefore(k, h.firstChild) : h.appendChild(k)
            } catch (l) {}
        };
        a.callback = function(b) {
            var c;
            if (b)
                for (c in b) Object.prototype[c] || (a[c] = b[c]);
            a.ready()
        };
        a.beacon = function(b) {
            var d = "s_i_" + c._in + "_Integrate_" + a.a + "_" + a._c;
            a.disable || (a._c++, d = e[d] = new Image, d.src = c.c(a, b))
        };
        a.script = function(b) {
            a.get(b, 1)
        };
        a.delay = function() {
            a._d++
        };
        a.ready = function() {
            a._d--;
            a.disable || l.delayReady()
        };
        c.list.push(d)
    };
    c._g = function(d) {
        var b, a = (d ? "use" : "set") + "Vars";
        for (d = 0; d < c.list.length; d++)
            if ((b = c[c.list[d]]) && !b.disable && b[a]) try {
                b[a](l, b)
            } catch (e) {}
    };
    c._t = function() {
        c._g(1)
    };
    c._d = function() {
        var d, b;
        for (d = 0; d < c.list.length; d++)
            if ((b = c[c.list[d]]) && !b.disable && 0 < b._d) return 1;
        return 0
    };
    c.c = function(c, b) {
        var a, e, g, f;
        "http" != b.toLowerCase().substring(0, 4) && (b = "http://" + b);
        l.ssl && (b = l.replace(b, "http:", "https:"));
        c.RAND = Math.floor(1E13 * Math.random());
        for (a = 0; 0 <= a;) a = b.indexOf("[", a), 0 <= a && (e = b.indexOf("]", a), e > a && (g = b.substring(a + 1, e), 2 < g.length && "s." == g.substring(0, 2) ? (f = l[g.substring(2)]) || (f = "") : (f = "" + c[g], f != c[g] && parseFloat(f) != c[g] && (g = 0)), g && (b = b.substring(0, a) + encodeURIComponent(f) + b.substring(e + 1)), a = e));
        return b
    }
}
try {
    (function(id, loader, u) {
        try {
            u = utag.o[loader].sender[id] = {}
        } catch (e) {
            u = utag.sender[id]
        };
        u.ev = {
            'view': 1,
            'link': 1,
            'video': 1
        };
        u.o = s;
        u.varlist = {
            pageName: 'pageName',
            channel: 'ch',
            campaign: 'v0',
            hier1: 'h1',
            hier2: 'h2',
            hier3: 'h3',
            hier4: 'h4'
        };
        for (var i = 1; i < 76; i++) {
            u.varlist['prop' + i] = 'c' + i;
            u.varlist['eVar' + i] = 'v' + i
        };
        u.pushlt = function(l, v) {
            if (typeof l != "undefined") l.push(v)
        };
        u.map = {
            "report_suites": "s_account,prop39",
            "dom.url": "pageURL",
            "analytics_pagename": "pageName,eVar1",
            "analytics_section": "channel,eVar2",
            "analytics_sitename": "server",
            "qp.cm_mmc": "campaign",
            "order_id": "purchaseID,eVar25",
            "form_error": "list1",
            "active_experiments": "list2,list3",
            "site_type": "prop2",
            "page_type": "prop3,eVar3",
            "previous_page_name": "eVar4,prop4",
            "language_country": "prop5,eVar5",
            "page_owner": "prop7,eVar7",
            "campaign_name": "prop8,eVar8",
            "euci": "prop10,eVar10",
            "customer_status": "prop11,eVar11",
            "search_term": "prop12,eVar12",
            "search_type": "prop13,eVar13",
            "search_results": "prop14,eVar14",
            "filter_list": "prop15,eVar15",
            "sort_applied": "prop16,eVar16",
            "page_breadcrumb": "prop17,eVar17",
            "filter_gender": "prop18,eVar18",
            "filter_category": "prop19,eVar19",
            "filter_product_type": "prop20,eVar20",
            "filter_sport": "prop21,eVar21",
            "filter_brand": "prop22,eVar22",
            "filter_collection": "prop23,eVar23",
            "event_name": "prop25,link_text",
            "event_category": "prop26",
            "configurator_item": "prop29",
            "results_page": "prop30",
            "result_page": "prop30",
            "filter_last": "prop31",
            "cart_id": "prop32",
            "order_time": "prop33",
            "promo_code": "prop36,eVar29",
            "cp.sr_token": "prop37",
            "iphone_version": "prop40",
            "filter_names": "prop42",
            "filter_values": "prop43",
            "time_local": "prop44",
            "version_info": "prop45",
            "tealium_timestamp_local": "prop50",
            "content_asset_ids": "prop51",
            "invite_type": "prop71",
            "order_inline_custom_mix": "eVar26",
            "customer_location": "eVar27",
            "customer_payment_type": "eVar28,prop49",
            "checkout_type": "eVar30",
            "delivery_method": "eVar31",
            "qp.cm_sp": "eVar32",
            "certona_recs_id": "eVar34",
            "cart_add_location": "eVar36",
            "plp_attributes": "eVar37",
            "ab_test_id": "eVar49",
            "signup_location": "eVar51",
            "social_channel": "eVar52",
            "form_name": "eVar53",
            "customer_encrypted_email": "eVar54",
            "merchandising_section": "eVar58",
            "qp.cm_mmca4": "eVar59",
            "user_agent": "eVar63",
            "cp.notice_preferences": "eVar65",
            "total_results": "eVar68",
            "tool_name": "eVar71",
            "tool_state": "eVar72",
            "tool_product_model": "eVar73",
            "filters_interacted": "eVar74",
            "filter_names_interacted": "eVar75",
            "qp.cm_mmc2": "eVar76",
            "product_delivery_details": "eVar77",
            "filters_added_ranking": "eVar79",
            "product_model_id": "PRODUCTS_eVar38",
            "product_sku": "PRODUCTS_eVar39",
            "product_status": "PRODUCTS_eVar40",
            "product_personalization": "PRODUCTS_eVar41",
            "product_friendly_price": "PRODUCTS_eVar42",
            "product_color": "PRODUCTS_eVar43",
            "product_size": "PRODUCTS_eVar44",
            "product_rating": "PRODUCTS_eVar45",
            "product_reviews": "PRODUCTS_eVar46",
            "product_recipe_id": "PRODUCTS_eVar47",
            "product_inspiration_name": "PRODUCTS_eVar48",
            "product_price_type": "PRODUCTS_eVar61",
            "product_position": "PRODUCTS_eVar80",
            "product_add_amount": "PRODUCTS_event6",
            "product_remove_amount": "PRODUCTS_event7",
            "product_prorated_shipping": "PRODUCTS_event14",
            "product_prorated_discount": "PRODUCTS_event15",
            "product_prorated_gift_card": "PRODUCTS_event16",
            "product_prorated_vat": "PRODUCTS_event17",
            "product_cnc_units": "PRODUCTS_event34",
            "product_cnc_revenue": "PRODUCTS_event35",
            "product_price_eur": "PRODUCTS_event36",
            "product_price_fixed": "PRODUCTS_event37",
            "product_cnc_revenue_euros": "PRODUCTS_event49",
            "product_number_filters": "PRODUCTS_event64",
            "basket_size": "eVar69",
            "form_checkboxes": "prop52"
        };
        u.extend = [function(a, b) {
            var brand = 'ys';
            if (b.environment != 'PRODUCTION') {
                b.report_suites = 'ag-' + brand + '-dev';
            } else {
                b.report_suites = 'ag-' + brand + '-global-prod';
                if (b.country) {
                    var country = b.country.toLowerCase();
                    b.report_suites += (',ag-' + brand + '-' + country + '-prod');
                }
                b.report_suites += (b.region && (b.region == 'eu' || b.region == 'lam')) ? ',ag-' + brand + '-' + b.region.toLowerCase() + '-prod' : '';
            }
        }, function(a, b) {
            if (!b.glass_version && typeof(jQuery) != 'undefined') {
                if (b.clicked_parent) {
                    b.event_category = b.clicked_parent.attr('data-track').toUpperCase();
                }
                if (b.clicked_element && !b.event_name) {
                    b.event_name = b.clicked_element.attr('data-track').toUpperCase();
                    if (b.clicked_element.attr('type') == 'checkbox') {
                        if (b.clicked_element.attr('checked')) {
                            b.event_name += ':CHECKED';
                        } else {
                            b.event_name += ':UNCHECKED';
                        }
                    }
                }
            }
        }, function(a, b) {
            try {
                if ((typeof b['customer_encrypted_email'] != 'undefined' && b['customer_encrypted_email'] != '' && typeof b['signup_location'] == 'undefined') || (typeof b['customer_encrypted_email'] != 'undefined' && b['customer_encrypted_email'] != '' && typeof b['signup_location'] != 'undefined' && b['signup_location'] == '') || (typeof b['customer_encrypted_email'] != 'undefined' && b['customer_encrypted_email'] != '' && typeof b['signup_step'] == 'undefined') || (typeof b['customer_encrypted_email'] != 'undefined' && b['customer_encrypted_email'] != '' && typeof b['signup_step'] != 'undefined' && b['signup_step'] == '')) {
                    b['signup_location'] = b['page_type'];
                    b['signup_step'] = 'SUCCESS'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            if (b.event_category == 'PRODUCT PERSONALIZE: START') {
                b.event_category = 'PRODUCT PERSONALIZE';
                b.event_name = b.event_category + '|' + (b.personalization_type || 'CUSTOM');
                if (b.page_type == 'PDP') {
                    b.product_id = utag_data.product_id || [];
                    b.product_personalization = ['YES'];
                }
            }
        }, function(a, b) {
            if (b.page_type == 'PLP') {
                b.merchandising_section = '';
                if (b.filter_gender) {
                    b.merchandising_section += (b.merchandising_section ? '|' : '') + b.filter_gender;
                }
                if (b.filter_category) {
                    b.merchandising_section += (b.merchandising_section ? '|' : '') + b.filter_category;
                }
                if (b.filter_producttype) {
                    b.merchandising_section += (b.merchandising_section ? '|' : '') + b.filter_product_type;
                }
                if (b.filter_sport) {
                    b.merchandising_section += (b.merchandising_section ? '|' : '') + b.filter_sport;
                }
                if (b.filter_brand) {
                    b.merchandising_section += (b.merchandising_section ? '|' : '') + b.filter_brand;
                }
                if (b.filter_collection) {
                    b.merchandising_section += (b.merchandising_section ? '|' : '') + b.filter_collection;
                }
            }
        }, function(a, b) {
            try {
                if ((typeof b['event_name'] != 'undefined' && typeof b['wishlist_location'] != 'undefined' && typeof b['wishlist_location'] != 'undefined' && b['wishlist_location'] != '')) {
                    try {
                        b['event_name'] = b.event_name + '|' + b.wishlist_location.toUpperCase().replace(/\_/g, ' ')
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            if (b.page_type && a == 'view') {
                b.sc_events = u.addEvent(['event22']);
                if (b.page_type.indexOf('PDP') > -1) {
                    b.sc_events = u.addEvent(['prodView', 'event1']);
                    if ((b.product_fit_slider && b.product_fit_slider[0] == 'TRUE') || (b.tool_name && b.tool_name.indexOf('FITSLIDER') > -1 && b.tool_state && b.tool_state.indexOf('AVAILABLE') > -1)) {
                        b.sc_events = u.addEvent(['event50']);
                    }
                }
                if (b.page_type.indexOf('PLP') > -1) {
                    b.sc_events = u.addEvent(['event2']);
                }
                if (b.page_type == 'CHECKOUT') {
                    if (b.page_name.indexOf('COMPLETE') == -1) {
                        b.sc_events = u.addEvent(['scCheckout']);
                    }
                    if (b.page_name.indexOf('SHIPPING') > -1) {
                        b.sc_events = u.addEvent(['event12']);
                    }
                    if (b.page_name.indexOf('PAYMENT') > -1) {
                        b.sc_events = u.addEvent(['event13']);
                    }
                }
                if (b.page_type == 'SHOPPING CART') {
                    b.sc_events = u.addEvent(['scView', 'scOpen']);
                }
                if (b.order_id && b.delivery_method == 'SHIPTOSTORE') {
                    b.sc_events = u.addEvent(['event33:' + b.order_id]);
                }
                if (b.certona_recs_id) {
                    b.sc_events = u.addEvent(['event10']);
                }
                if (b.page_type == 'PRODUCT REVIEW' && b.page_name == 'REVIEW START') {
                    b.sc_events = u.addEvent(['event51']);
                }
                if (b.sort_applied) {
                    b.sc_events = u.addEvent(['event67']);
                }
                if (b.campaign_name && b.page_owner != 'HYPE') {
                    b.sc_events = u.addEvent(['event3']);
                }
                if (b.event_name == 'LOGIN|SUCCESS') {
                    b.sc_events = u.addEvent(['event42']);
                }
                if (b.glass_version != null) {
                    if ((b.filters_added && b.filters_added != '' && b.filters_added.length > 1) || (b.filters_removed && b.filters_removed != '' && b.filters_removed.length > 1) || (b.filters_added && b.filters_added != '' && b.filters_removed && b.filters_removed != '')) {
                        b.sc_events = u.addEvent(['event66']);
                    } else if (b.filters_added && b.filters_added != '' && b.filters_added.length > 0) {
                        b.sc_events = u.addEvent(['event62']);
                    } else if (b.filters_removed && b.filters_removed != '' && b.filters_removed.length > 0) {
                        b.sc_events = u.addEvent(['event63']);
                    }
                }
                if (b.content_asset_ids && b.content_asset_ids.length > 0) {
                    b.sc_events = u.addEvent(['event73']);
                }
            } else if (a == 'link') {
                if (b.event_name == 'ADD TO CART') {
                    b.sc_events = u.addEvent(['scAdd', 'scOpen']);
                    if (utag.data.did_search == 'TRUE') {
                        b.cart_add_location = 'SEARCH';
                    } else if (b.page_type == 'CONFIGURATOR:QUICK BUY') {
                        b.cart_add_location = 'MI QUICKVIEW';
                    } else if (b.page_type == 'CONFIGURATOR') {
                        b.cart_add_location = 'MI PDP';
                    } else {
                        b.cart_add_location = b.page_type;
                    }
                    b.product_add_amount = [];
                    for (var i = 0; i < b.product_price.length; i++) {
                        var price = parseFloat(b.product_price[i]) * parseInt(b.product_quantity[i]);
                        b.product_add_amount.push(price.toFixed(2) || '');
                    }
                }
                if (b.event_name == 'PRODUCT CLICK' && b.glass_version != null) {
                    b.sc_events = u.addEvent(['event65']);
                }
                if (b.event_name && (b.event_name == 'CART REMOVE' || b.event_name.indexOf('DELETE PRODUCT') > -1)) {
                    b.sc_events = u.addEvent(['scRemove']);
                    b.product_remove_amount = [];
                    for (var i = 0; i < b.product_price.length; i++) {
                        var price = parseFloat(b.product_price[i]) * parseInt(b.product_quantity[i]);
                        b.product_remove_amount.push(price.toFixed(2) || '');
                    }
                }
                if (b.event_category == 'PRODUCT ALTERNATE IMAGES' || b.event_category == 'PRODUCT IMAGE ZOOM') {
                    if (b.event_category == 'PRODUCT ALTERNATE IMAGES') {
                        b.event_name = b.event_name.replace('ALTERNATE IMAGE', 'THUMB LEFT: CLICKED:');
                    } else {
                        b.event_name = b.event_name.replace('ZOOM', 'ZOOM: USED:');
                        b.sc_events = u.addEvent(['event57']);
                    }
                    b.event_category = 'PDP: MAIN IMAGE';
                }
                if (b.event_name && b.event_name.indexOf('WISHLIST') > -1) {
                    b.sc_events = b.event_name.indexOf('REMOVE FROM') > -1 ? u.addEvent(['event56']) : u.addEvent(['event5']);
                }
                if (b.event_category && b.event_category.indexOf('PRODUCT PERSONALIZE') > -1) {
                    b.sc_events = u.addEvent(['event11']);
                }
                if (b.event_category == 'INVOICES') {
                    if (b.event_name == 'INVOICE') {
                        b.sc_events = u.addEvent(['event43']);
                    } else if (b.event_name == 'CREDITNOTE') {
                        b.sc_events = u.addEvent(['event44']);
                    }
                }
                if (b.event_category == 'PRODUCT REVIEW' && b.event_name == 'REVIEW COMPLETE') {
                    b.sc_events = u.addEvent(['event53']);
                }
                if (b.event_name && b.event_name.indexOf('ADD TO CART ERROR') > -1 && b.error_reason) {
                    b.sc_events = u.addEvent(['event58']);
                    b.event_name += '|' + b.error_reason.join(',').toUpperCase();
                }
                if (b.form_name == 'ADD TO CART') {
                    b.sc_events = u.addEvent(['event58']);
                }
                if (b.event_name && (b.event_name == 'LOGIN|FORM' || b.event_name.indexOf('LOGIN|SOCIAL') > -1)) {
                    b.sc_events = u.addEvent(['event41']);
                }
            }
            if (b.signup_step) {
                if (b.signup_step == 'START') {
                    b.sc_events = u.addEvent(['event18']);
                }
                if (b.signup_step == 'SUCCESS') {
                    var uniqueId = b.customer_encrypted_email ? ':' + b.customer_encrypted_email.substring(0, 19) : '';
                    uniqueId = uniqueId.replace(/[^a-zA-Z0-9]/gi, '');
                    b.sc_events = u.addEvent(['event19' + (uniqueId ? ':' + uniqueId : '')]);
                }
            }
            if ((b.form_error && b.form_error.length > 0) || b.payment_error) {
                b.sc_events = u.addEvent(['event21']);
            }
            if ((b.event_category && (b.event_category == 'PRODUCT SHARE' || b.event_category.indexOf('SOCIAL FOLLOW') > -1 || b.event_category.indexOf('SOCIAL SHARE') > -1)) || (b.configurator_category && b.configurator_category.indexOf('SAVE AND SHARE') > -1)) {
                b.sc_events = u.addEvent(['event23']);
                if (b.configurator_category) {
                    b.social_channel = b.configurator_category.substring(0, b.configurator_category.indexOf(':'));
                } else if (b.event_name) {
                    b.social_channel = b.event_name;
                }
            }
            if (typeof(b.tool_state) != 'undefined' && b.tool_state != '') {
                var tool_state_dict = {
                    'AVAILABLE': 'event59',
                    'EXPOSED': 'event60',
                    'ENGAGED': 'event61',
                    'ENGAGED_BV_TOP': 'event61',
                    'ENGAGED_UGC_STACK': 'event61',
                    'ENGAGED_UGC_TOP': 'event61'
                };
                if (b.tool_name == 'BAZAARVOICE' && b.tool_state != 'AVAILABLE' && b.tool_state != 'EXPOSED') {
                    b.sc_events = u.addEvent('event61');
                } else {
                    b.sc_events = u.addEvent([tool_state_dict[b.tool_state]]);
                }
            }
        }, function(a, b) {
            if (b.product_price) {
                b.product_friendly_price = [];
                for (var i = 0; i < b.product_price.length; i++) {
                    b.product_friendly_price.push(b.product_price[i] != '' ? b.product_price[i] + ' ' + b.currency_code : '')
                }
            }
        }, function(a, b) {
            b._ccat = [];
            if (a == 'view' && ((b.page_type.indexOf('PLP') > -1 || b.page_type.indexOf('SEARCH') > -1))) {
                if (b.product_id.length > 0) {
                    var position_offset = parseInt(b['qp.start']) || 0;
                    b.product_position = [];
                    for (var i = 0; i < b.product_id.length; i++) {
                        b.product_position[i] = (i + 1 + position_offset).toString();
                    }
                }
            }
            if (b.product_personalization) {
                for (var i = 0; i < b.product_personalization.length; i++) {
                    if (!b.product_personalization[i]) {
                        b.product_personalization[i] = 'NO';
                    }
                }
            }
        }, function(a, b) {
            if (b.page_type.indexOf('PLP') > -1) {
                b.plp_attributes = 'BANNER: ' + (b.plp_banner || 'OFF');
                b.plp_attributes += '|PROMO: ' + (b.plp_promo || 'OFF');
                b.plp_attributes += '|WALLPAPER: ' + (b.plp_wallpaper || 'OFF');
                b.plp_attributes += '|FILTER: ' + (b.filters_applied ? 'ON' : 'OFF');
            }
        }, function(a, b) {
            if (b.signup_step && b.signup_location && a != 'view') {
                b.event_category = 'EMAIL SIGNUP|' + b.signup_location;
                b.event_name = b.signup_step;
            }
        }, function(a, b) {
            if (navigator.userAgent.indexOf('iPhone') > -1) {
                if (screen.width == 320 && screen.height == 480) {
                    b.iphone_version = screen.colorDepth == 24 ? 'iPhone 3 or earlier' : 'iPhone 4';
                } else if (screen.width == 640 && screen.height == 960) {
                    b.iphone_version = 'iPhone 4';
                } else if ((screen.width == 320 && screen.height == 568) || (screen.width == 640 && screen.height == 1136)) {
                    b.iphone_version = 'iPhone 5/SE';
                } else if ((screen.width == 375 && screen.height == 667) || (screen.width == 750 && screen.height == 1334)) {
                    b.iphone_version = 'iPhone 6/7/8';
                } else if ((screen.width == 540 && screen.height == 960) || (screen.width == 1080 && screen.height == 1920) || (screen.width == 414 && screen.height == 736)) {
                    b.iphone_version = 'iPhone 6 Plus/7 Plus/8 Plus';
                } else if ((screen.width == 1125 && screen.height == 2436) || (screen.width == 375 && screen.height == 812)) {
                    b.iphone_version = 'iPhone X';
                }
            }
        }, function(a, b) {
            if (b.site_promotion_id) {
                var cookieName = 'v32',
                    promo = b.site_promotion_id.toLowerCase().replace(/\-/gi, '-_-'),
                    navTypes = ['header', 'help', 'filter', 'footer', 'linkfarm', 'body', 'iwp', 'breadcrumb', 'completethelook', 'sidebar'];
                for (var i = 0; i < navTypes.length; i++) {
                    if (promo.indexOf(navTypes[i].toLowerCase()) > -1) {
                        cookieName = 'v33';
                        break;
                    }
                }
                if (cookieName == 'v32') {
                    var promo_syntax_check = promo.split('-_-').length;
                    if (promo_syntax_check < 4) {
                        var promo_elements = promo.split('-_-');
                        while (promo_syntax_check < 4) {
                            promo_elements.push('no_value');
                            promo_syntax_check++;
                        }
                        promo = promo_elements.join('-_-');
                    }
                }
                s.c_w(cookieName, promo.replace(/[\t\r\n\f]/gi, ''));
                if (b.site_promotion_id.indexOf('filter') > -1 && utag.data.glass_version != '') {} else {
                    return false;
                }
            }
            if ((b.event || b.event_name) && (b.event == 'RESULTS CLICK' || (b.event_name == 'PRODUCT CLICK' && b.page_type == 'SEARCH' && b.glass_version)) && (s.prop12 || utag.data.search_term)) {
                s.c_w('e30', 'true');
                s.c_w('e46', s.c_r('c12') || s.prop12 || utag.data.search_term);
                if (b.event_name != 'PRODUCT CLICK') {
                    return false;
                }
            }
            if (b.event_category == 'NAVIGATION CLICK') {
                return false;
            }
            if (b.event_category == 'PERSONALIZED BANNER CLICK') {
                return false;
            }
            if (b.event_name == 'RECOMMENDATIONS CLICK') {
                if (b.recommendations_name && b.recommendations_slot) {
                    s.c_w('v34', b.recommendations_name + '|' + b.recommendations_slot);
                }
                return false;
            }
            if (b.event_category == 'CHECKOUT TYPE' && (b.event_name == 'GUEST CHECKOUT' || b.event_name == 'REGISTERED CHECKOUT')) {
                return false;
            }
            if (b.event_category == 'CHECKOUT' && b.event_name == 'EMAIL ADDRESS ENTERED') {
                return false;
            }
            if (b.event_category == 'MEDIA SLIDER') {
                return false;
            }
            if (b.event_name && b.event_name.indexOf('PAYPAL CHECKOUT') > -1) {
                if (b.analytics_pagename != 'CHECKOUT|PAYMENT') {
                    b.checkout_type = 'PAYPAL EXPRESS';
                } else {
                    b.customer_payment_type = 'PAYPAL';
                }
            }
            if (b.event_name == 'PRODUCT CLICK' && b.glass_version == null) {
                return false;
            } else if (b.event_name == 'PRODUCT CLICK') {
                b.result_page = utag.data.result_page;
                if (document.location.href.indexOf('sort=') > -1) {
                    b.sort_applied = utag.data.sort_applied;
                }
            }
            if (b.is_iframe && b.is_iframe == 'TRUE' && !b.form_error && a == 'view' && window.self !== window.top) {
                s.abort = true;
            }
            if (a == 'link' || b.event_name) {
                b.event_category = b.event_category || b.page_type;
            }
            if (b.event_category) {
                if (b.event_category == 'ORDER REVIEW ACCORDION' && b.current_step) {
                    b.event_name = b.current_step + (b.current_action ? '|' + b.current_action : '');
                }
                if (!b.event_name) {
                    b.event_name = b.campaign_name ? b.analytics_pagename : (b.page_name || b.page_type);
                }
                if (b['return_reason'] && b['product_sku'] && b['return_reason'].length == b['product_sku'].length) {
                    for (var i = 0; i < b['return_reason'].length; i++) {
                        if (b['return_reason'][i]) {
                            b.event_name += '|' + b['product_sku'][i] + ':' + b['return_reason'][i];
                        }
                    }
                }
                b.event_name = (!(b.event && b.event == 'MI:CONFIG') && b.event_name.indexOf(b.event_category) == -1) ? (b.event_category + '|' + b.event_name) : b.event_name;
            }
            if (b.event_category == 'PRODUCT SHARE' && b.campaign_name) {
                return false;
            }
        }, function(a, b) {
            if (b.video_event) {
                if (typeof(s) === 'undefined') {
                    return false;
                }
                if (b.video_player) {
                    s.Media.playerName = b.video_player;
                }
                b.video_event = b.video_event.toLowerCase();
                b.video_category = b.video_category || utag.data.video_category || '';
                if (!b.video_category || b.video_category == '000000') {
                    b.video_category = 'NO CATEGORY';
                }
                b.video_category = b.video_category.toUpperCase();
                b.video_name = ((b.video_name || 'NO NAME').toUpperCase() + '|' + b.video_category);
                b.video_position = b.video_position ? parseInt(b.video_position) : '';
                if (b.video_event == 'video_start' && (b.video_position == 0 || isNaN(b.video_position))) {
                    b.video_position = 1;
                }
                b.video_length = b.video_length ? parseInt(b.video_length) : '';
                switch (b.video_event) {
                    case 'video_close':
                        s.Media.close(b.video_name);
                        break;
                    case 'video_start':
                        s.Media.open(b.video_name, b.video_length, s.Media.playerName);
                        s.Media.play(b.video_name, b.video_position);
                        break;
                    case 'video_play':
                        s.Media.play(b.video_name, b.video_position);
                        break;
                    case 'video_stop':
                        s.Media.stop(b.video_name, b.video_position);
                        break;
                    case 'video_complete':
                        s.Media.stop(b.video_name, b.video_position);
                        s.Media.close(b.video_name);
                        break;
                }
                return false;
            }
        }, function(a, b) {
            try {
                if (1) {
                    b['link_text'] = b['event_name']
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if (typeof b['cp.persistentBasketCount'] != 'undefined' && b['cp.persistentBasketCount'] == '' || typeof b['cp.persistentBasketCount'] == 'undefined' || b['cp.persistentBasketCount'] == '""') {
                    b['cp.persistentBasketCount'] = '0'
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((b['environment'] == 'DEVELOPMENT' && typeof b['customer_email'] != 'undefined' && b['dom.domain'].toString().indexOf('.development.') > -1)) {
                    try {
                        b['customer_hashed_email'] = utag.ut.md5.MD5(b['customer_email'].toUpperCase()).toString().toUpperCase()
                    } catch (e) {};
                    b['customer_encrypted_email'] = b['customer_hashed_email']
                }
            } catch (e) {
                utag.DB(e)
            }
        }, function(a, b) {
            try {
                if ((typeof b['order_id'] != 'undefined' && b['delivery_method'].toString().toLowerCase() == 'SHIPTOSTORE'.toLowerCase() && typeof b['order_id'] != 'undefined' && b['order_id'] != '')) {
                    try {
                        b['_corder'] = ''
                    } catch (e) {}
                }
            } catch (e) {
                utag.DB(e)
            }
        }];
        u.send = function(a, b, c, d, e, f, g, h, ev) {
            if (u.ev[a] || typeof u.ev.all != "undefined") {
                utag.DB("send:78");
                u.data = {};
                u.a = a;
                b.sc_events = b.sc_events || {};
                u.addEvent = function(v, n) {
                    var t = [];
                    if (v instanceof Array) {
                        t = v.slice(0);
                    } else if (typeof n !== "undefined") {
                        t.push(v + "=" + n);
                    } else {
                        t.push(v);
                    }
                    for (var i = 0; i < t.length; i++) {
                        b.sc_events[t[i]] = 1;
                        u.pushlt(u.lte, t[i].indexOf("=") > -1 ? t[i].split('=')[0] : t[i].split(':')[0]);
                    }
                    return b.sc_events;
                };
                u.addProduct = function(v) {
                    u.data.sc_addProd = "";
                    if (v instanceof Array) {
                        u.data.sc_addProd = v.join(',');
                    } else {
                        u.data.sc_addProd = v;
                    }
                };
                if (u.a === "link") {
                    u.ltflag = true;
                    if (typeof b.linkTrackVars === "undefined") {
                        u.ltv = [];
                    }
                    if (typeof b.linkTrackEvents === "undefined") {
                        u.lte = [];
                    }
                }
                u.data.tagdevicetype = "standard";
                for (c = 0; c < u.extend.length; c++) {
                    try {
                        d = u.extend[c](a, b);
                        if (d == false) return
                    } catch (e) {
                        if (typeof utag_err != 'undefined') {
                            utag_err.push({
                                e: 'extension error:' + e,
                                s: utag.cfg.path + 'utag.' + id + '.js',
                                l: c,
                                t: 'ex'
                            })
                        }
                    }
                };
                if (u.data.tagdevicetype === "mobile") {
                    if (b.timestamp || b.timestamp_unix) {
                        u.o.timestamp = b.timestamp || b.timestamp_unix;
                    }
                    u.data.a = {
                        "AppID": b.app_id || "",
                        "CarrierName": b.carrier || "",
                        "DeviceName": b.device || "",
                        "HourOfDay": b.lifecycle_hourofday_local || "",
                        "DayOfWeek": b.lifecycle_dayofweek_local || "",
                        "OSVersion": b.os_version || b.platform_version || "",
                        "Resolution": b.device_resolution || ""
                    }
                    if (b.lifecycle_type) {
                        u.data.a.disable_wake_track = false;
                        u.data.a.disable_sleep_track = false;
                        u.data.a.DaysSinceFirstUse = b.lifecycle_dayssincelaunch || "";
                        u.data.a.DaysSinceLastUpgrade = b.lifecycle_dayssinceupdate || "";
                        u.data.a.DaysSinceLastUse = b.lifecycle_dayssincelastwake || "";
                        u.data.a.Launches = b.lifecycle_launchcount || "";
                        u.data.a.InstallDate = b.lifecycle_firstlaunchdate_MMDDYYYY || "";
                        u.data.a.UpgradeEvent = b.lifecycle_isfirstlaunchupdate || "";
                        u.data.a.PrevSessionLength = b.lifecycle_priorsecondsawake || "";
                    }
                    if (b.lifecycle_isfirstlaunch) {
                        u.data.a.InstallEvent = "InstallEvent";
                    }
                    if (b.lifecycle_diddetectcrash) {
                        u.data.a.CrashEvent = "CrashEvent";
                    }
                    if (b.lifecycle_type === "launch") {
                        u.data.a.LaunchEvent = "LaunchEvent";
                    }
                    if (b.lifecycle_isfirslaunchupdate) {
                        u.data.a.UpgradeEvent = "UpgradeEvent";
                    }
                } else {
                    u.data.a = {};
                }
                for (e in utag.loader.GV(u.map)) {
                    if (u.data.tagdevicetype === "mobile") {
                        if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("contextData.a.") > -1) {
                            f = u.map[e].split(",");
                            for (g = 0; g < f.length; g++) {
                                if (f[g].indexOf("contextData.a.") === 0) {
                                    u.data.a[f[g].substring(14)] = b[e];
                                }
                            }
                        }
                    } else if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("PRODUCTS_") > -1) {
                        f = u.map[e].split(",");
                        for (g = 0; g < f.length; g++) {
                            if (f[g].indexOf("PRODUCTS_id") || f[g].indexOf("PRODUCTS_category") || f[g].indexOf("PRODUCTS_quantity") || f[g].indexOf("PRODUCTS_price")) {
                                u.data[f[g].substring(9)] = b[e];
                            }
                        }
                    }
                }
                if (u.data.a.disable_wake_track === true || u.data.a.disable_wake_track === "true") {
                    if (b.lifecycle_type === "wake") {
                        return false;
                    }
                }
                if (u.data.a.disable_sleep_track === true || u.data.a.disable_sleep_track === "true") {
                    if (b.lifecycle_type === "sleep") {
                        return false;
                    }
                }
                u.data.id = u.data.id || (typeof b._cprod != "undefined" ? b._cprod.slice(0) : []);
                u.data.category = u.data.category || (typeof b._ccat != "undefined" ? b._ccat.slice(0) : []);
                u.data.quantity = u.data.quantity || (typeof b._cquan != "undefined" ? b._cquan.slice(0) : []);
                u.data.price = u.data.price || (typeof b._cprice != "undefined" ? b._cprice.slice(0) : []);
                if (typeof u.data.id != "undefined" && u.data.id != "") {
                    c = [];
                    d = {};
                    ev = {};
                    for (e in utag.loader.GV(u.map)) {
                        if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("PRODUCTS_") > -1) {
                            f = u.map[e].split(",");
                            for (g = 0; g < f.length; g++) {
                                var pv = f[g].substring(9);
                                if (f[g].indexOf("PRODUCTS_evar") == 0 || f[g].indexOf("PRODUCTS_eVar") == 0) {
                                    if (b[e] instanceof Array) {
                                        b.sc_prodevars = b.sc_prodevars || [];
                                        for (var i = 0; i < b[e].length; i++) {
                                            var prodvars = {};
                                            if (typeof b.sc_prodevars[i] != "undefined" && b.sc_prodevars[i] != "") {
                                                b.sc_prodevars[i][pv] = b[e][i];
                                            } else {
                                                prodvars[pv] = b[e][i];
                                                b.sc_prodevars.push(prodvars);
                                            }
                                        }
                                    } else {
                                        d[pv] = (b[e] + "").split(",");
                                    }
                                } else if (f[g].indexOf("PRODUCTS_event") == 0) {
                                    if (b[e] instanceof Array) {
                                        b.sc_prodevents = b.sc_prodevents || [];
                                        for (var i = 0; i < b[e].length; i++) {
                                            var prodevents = {};
                                            if (typeof b.sc_prodevents[i] != "undefined" && b.sc_prodevents[i] != "") {
                                                b.sc_prodevents[i][pv] = b[e][i];
                                            } else {
                                                prodevents[pv] = b[e][i];
                                                b.sc_prodevents.push(prodevents);
                                            }
                                        }
                                        u.addEvent(pv);
                                    } else if (b[e] !== "") {
                                        ev[pv] = b[e];
                                        u.addEvent(pv);
                                    }
                                }
                            }
                        }
                    }
                    e = "";
                    for (f in utag.loader.GV(d)) {
                        for (g = 0; g < d[f].length; g++) {
                            if (e != "") e += "|" + f + "=" + d[f][g];
                            else e = f + "=" + d[f][g];
                        }
                    }
                    h = "";
                    for (f in utag.loader.GV(ev)) {
                        if (h) h += "|" + f + "=" + ((isNaN(ev[f])) ? "1" : ev[f]);
                        else h = f + "=" + ((isNaN(ev[f])) ? "1" : ev[f]);
                    }
                    b.sc_prodevents = b.sc_prodevents || [];
                    b.sc_prodevars = b.sc_prodevars || [];
                    for (d = 0; d < u.data.id.length; d++) {
                        var h2 = h;
                        var h3 = e;
                        if (typeof b.sc_prodevents != "undefined") {
                            for (f in b.sc_prodevents[d]) {
                                if (typeof b.sc_prodevents[d][f] != "undefined") {
                                    var l = b.sc_prodevents[d][f];
                                    if (typeof l != "undefined" && l != "" && isNaN(l) == false) {
                                        if (h2) {
                                            h2 += "|" + f + '=' + l;
                                        } else {
                                            h2 = f + '=' + l;
                                        }
                                    }
                                }
                            }
                        }
                        if (typeof b.sc_prodevars != "undefined") {
                            for (f in b.sc_prodevars[d]) {
                                if (typeof b.sc_prodevars[d][f] != "undefined") {
                                    var l = b.sc_prodevars[d][f];
                                    if (typeof l != "undefined" && l != "") {
                                        if (h3) {
                                            h3 += "|" + f + '=' + l;
                                        } else {
                                            h3 = f + '=' + l;
                                        }
                                    }
                                }
                            }
                        }
                        c.push((u.data.category[d] ? u.data.category[d] : "") + ";" + u.data.id[d] + ";" + (u.data.quantity[d] ? u.data.quantity[d] : "") + ";" + (u.data.price[d] ? ((u.data.quantity[d] ? parseInt(u.data.quantity[d]) : 1) * parseFloat(u.data.price[d])).toFixed(2) : "") + ";" + h2 + ";" + h3);
                    }
                    if (typeof u.data.sc_addProd !== "undefined" && u.data.sc_addProd) {
                        c.push(u.data.sc_addProd);
                    }
                    u.o.products = c.join(",");
                } else {
                    u.o.products = "";
                }
                var evt = /^event|prodView|scOpen|scAdd|scRemove|scView|scCheckout|purchase$/;
                for (c in utag.loader.GV(b)) {
                    if (b[c] !== "") {
                        f = ("" + b[c]).split(",");
                        for (g = 0; g < f.length; g++) {
                            h = f[g].split(":");
                            d = [];
                            if (typeof u.map[c + ":" + h[0]] != "undefined") {
                                d = u.map[c + ":" + h[0]].split(",");
                            } else if (typeof u.map[c] != "undefined") {
                                d = u.map[c].split(",");
                            }
                            for (e = 0; e < d.length; e++) {
                                if (d[e] != "events" && evt.test(d[e])) {
                                    u.addEvent(d[e] + (h.length > 1 ? ":" + h[1] : ""));
                                }
                            }
                        }
                    }
                }
                for (var m in u.data.a) {
                    u.o.contextData["a." + m] = u.data.a[m];
                    u.pushlt(u.ltv, "contextData.a." + m);
                }
                for (c in utag.loader.GV(b)) {
                    if (typeof u.map[c] != "undefined") {
                        d = u.map[c].split(",");
                        for (e = 0; e < d.length; e++) {
                            if (d[e].indexOf("VALUE_") == 0) {
                                u.addEvent(d[e].substring(6), b[c]);
                            } else if (d[e] == "doneAction") {
                                b.doneAction = b[c];
                                if (b.doneAction != "navigate") {
                                    b.doneAction = eval(b[c]);
                                }
                            } else if (d[e].indexOf("c.") == 0 || d[e].indexOf("contextData.") == 0) {
                                d[e] = d[e].replace("contextData.", "c.");
                                if (d[e][2] !== "a" && d[e][3] !== ".") {
                                    u.o.contextData[d[e].substring(2)] = b[c];
                                    u.pushlt(u.ltv, "contextData." + d[e].substring(2))
                                }
                            } else {
                                if (c == "sc_events" || c == "sc_prodevents" || c == "sc_prodevars") {
                                    utag.DB("Error:78: Mapping reserved object name " + c)
                                } else {
                                    u.o[d[e]] = b[c];
                                }
                                if (d[e] == "s_account") {
                                    u.o.account = b[c];
                                } else if (d[e] == "linkTrackVars") {
                                    u.ltflag = false;
                                } else {
                                    u.pushlt(u.ltv, d[e]);
                                }
                            }
                        }
                    }
                }
                d = [];
                for (c in utag.loader.GV(b.sc_events)) {
                    if (b.sc_events[c]) d.push(c)
                };
                if (d.length > 0) {
                    u.o.events = d.join(",");
                    for (var i = 0; i < d.length; i++) {
                        u.pushlt(u.lte, d[i].indexOf(':') == -1 ? d[i] : d[i].substring(0, d[i].indexOf(':')));
                    }
                } else {
                    u.o.events = "";
                }
                if (b._ccurrency) {
                    u.o.currencyCode = b._ccurrency;
                }
                if (b._corder) {
                    u.pushlt(u.lte, "purchase");
                    u.pushlt(u.ltv, "purchaseID");
                    u.o.purchaseID = ((u.o.purchaseID) ? u.o.purchaseID : b._corder);
                    u.o.events = ((u.o.events) ? u.o.events : "purchase");
                    if (u.o.events.indexOf("purchase") < 0) {
                        u.o.events += ",purchase"
                    };
                }
                var t = u.o;
                var q = {},
                    l = {};
                c = u.varlist;
                for (d in utag.loader.GV(c)) {
                    if (typeof t[d] != 'undefined' && t[d] != null && t[d] != '' && t[d].toString().indexOf('D=') != 0) {
                        if (typeof l[t[d]] == 'undefined') l[t[d]] = c[d];
                        else t[d] = 'D=' + l[t[d]];
                    }
                }
                if (u.a == "view") {
                    var img = u.o.t();
                    if (typeof img != "undefined" && img != "") {
                        u.img = new Image();
                        u.img.src = img.substring(img.indexOf("src=") + 5, img.indexOf("width=") - 2);
                    }
                } else if (u.a == "link") {
                    if (typeof u.ltv != "undefined" && u.ltflag) {
                        if (u.o.events) {
                            u.ltv.push("events")
                        };
                        if (u.o.products) {
                            u.ltv.push("products")
                        };
                        b.linkTrackVars = u.ltv.join(',')
                    }
                    if (typeof u.lte != "undefined" && u.ltflag) b.linkTrackEvents = u.lte.join(',');
                    u.o.linkTrackVars = (b.linkTrackVars) ? b.linkTrackVars : "None";
                    u.o.linkTrackEvents = (b.linkTrackEvents) ? b.linkTrackEvents : "None";
                    if (!u.o.linkType) u.o.linkType = 'o';
                    if (b.link_name) b.link_text = b.link_name;
                    b.link_text = (b.link_text) ? b.link_text : "no link_name";
                    if (b.link_type == 'exit link') {
                        u.o.linkType = 'e'
                    } else if (b.link_type == 'download link') u.o.linkType = 'd';
                    try {
                        if (u.o.saveLinkObject) {
                            b.link_obj = u.o.saveLinkObject;
                        }
                    } catch (ex) {}
                    u.o.tl(((b.link_obj) ? b.link_obj : true), u.o.linkType, b.link_text, null, (b.doneAction ? b.doneAction : null));
                    if (u.o.saveLinkObject) {
                        u.o.saveLinkObject = null;
                    }
                }
                if ("yes" == "yes") {
                    u.o.clearVars();
                    u.o.contextData = {};
                }
                for (var i in u.o.originals) {
                    u.o[i] = u.o.originals[i];
                }
                utag.DB("send:78:COMPLETE");
            }
        }
        try {
            utag.o[loader].loader.LOAD(id)
        } catch (e) {
            utag.loader.LOAD(id)
        }
    })('78', 'adidas.yeezysupplyglobal');
} catch (e) {};
(function() {
    if (typeof utag != 'undefined') {
        utag.initcatch = true;
        for (var i in utag.loader.GV(utag.loader.cfg)) {
            var b = utag.loader.cfg[i];
            if (b.load != 4) {
                utag.initcatch = false;
                break
            };
            if (b.wait == 1) {
                utag.initcatch = false;
                break
            }
        };
        if (utag.initcatch) utag.handler.INIT();
    }
})();