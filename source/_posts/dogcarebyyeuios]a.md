---
abbrlink: 没想到很久没更这个系列了，🐱
categories:
- - 没想到很久没更这个系列了，🐱
date: '2025-07-24T16:35:33.158330+08:00'
tags:
- 没想到很久没更这个系列了，🐱
title: stellar主题修改
updated: '2025-07-24T16:35:33.371+08:00'
---
# 开头

没想到很久没更这个系列了，🐱

### 前言

最近也是用上了stellar主题哈！这个主题由xaoxuu开源，在 `theme/stellar/languages`中，我们可以看到有三个文件，修改zh-cn.yml文件就可以了，例子


| `search:`<br/>`  search: 搜索`<br/>`  tip: Power by 阿黄`<br/>`  search_in: 在 %s 中搜索`<br/>`  no_results: 空空如也，但不多`<br/> |
| ----------------------------------------------------------------------------------------------------------------------------------- |

例如
![2](https://ayellowdogsays.top/png/code.png)

# 侧边栏美化


| `preconnect:`<br/>`  - https://gcore.jsdelivr.net`<br/>`  - https://unpkg.com`<br/>`  - https://cdn.bootcdn.net`<br/>`inject:`<br/>`  head:`<br/>`    - <link rel="apple-touch-icon" sizes="180x180" href="/assets/xaoxuu/favicon/apple-touch-icon.png">`<br/>`    - <link rel="icon" type="image/png" sizes="32x32" href="/assets/xaoxuu/favicon/favicon-32x32.png">`<br/>`    - <link rel="icon" type="image/png" sizes="16x16" href="/assets/xaoxuu/favicon/favicon-16x16.png">`<br/>`    - <link rel="manifest" href="/assets/xaoxuu/favicon/site.webmanifest">`<br/>`    - <link rel="shortcut icon" href="/assets/xaoxuu/favicon/favicon.ico">`<br/>`    - <meta name="theme-color" content="#f8f8f8">`<br/>`    - <link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.min.css" media="all" />`<br/>`    - <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC&display=swap" rel="stylesheet">`<br/>`logo:`<br/>`  icon:`<br/>`  title: 阿黄说`<br/>`  subtitle: '狗儿要听狗儿歌'`<br/>`menubar:`<br/>` items:`<br/>`    - id: post`<br/>`      title: 阿黄说`<br/>`      url: /`<br/>`    - id: topic`<br/>`      title: 狗儿说`<br/>`      url: /pro/`<br/>`    - id: explore`<br/>`      title: 狗随机`<br/>`      url: /2025/01/13/e/`<br/>`    - id: explore`<br/>`      title: 阿黄友`<br/>`      url: /friends/`<br/>`site_tree:`<br/>`  home:`<br/>`    sidebar: starter, welcome, recent`<br/>`  index_blog:`<br/>`    sidebar: starter, welcome, recent`<br/>`  index_topic:`<br/>`    menu_id: topic`<br/>`  topic:`<br/>`    menu_id: topic`<br/>`article:`<br/>`  share: [wechat, weibo, email, link]`<br/>`style:`<br/>`  text-align: justify`<br/>`  smooth_scroll: false`<br/>`  codeblock:`<br/>`    scrollbar: 0px`<br/>`  font-size:`<br/>`    body: 1rem`<br/>`  font-family:`<br/>`    logo: '"LXGW WenKai Screen", system-ui, "Microsoft Yahei", "Segoe UI", -apple-system, Roboto, Ubuntu, "Helvetica Neue", Arial, "WenQuanYi Micro Hei", sans-serif'`<br/>`    body: '"Noto Serif SC","LXGW WenKai Screen", system-ui, "Microsoft Yahei", "Segoe UI", -apple-system, Roboto, Ubuntu, "Helvetica Neue", Arial, "WenQuanYi Micro Hei", sans-serif'`<br/>`    code: '"LXGW WenKai Screen", Menlo, Monaco, Consolas, system-ui, "Courier New", monospace, sans-serif'`<br/>`    codeblock: 'Menlo, Monaco, Consolas, system-ui, "Courier New", monospace, sans-serif'`<br/> |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

# 危险地带-修改主题，请先备份

新建dogs文件夹在source文件夹中，代码来源[阿黄说穿梭](https://sfzhang.top/blog/2023/10/12/blog-progress/)

# 再新建一个css和js文件夹，在CSS中命名一个叫DOGEE.css的文件，放入


| `.pace {`<br/>`	-webkit-pointer-events: none;`<br/>`	pointer-events: none;`<br/>`	-webkit-user-select: none;`<br/>`	-moz-user-select: none;`<br/>`	-ms-user-select: none;`<br/>`	    user-select: none;`<br/>`	z-index: 2000;`<br/>`	position: fixed;`<br/>`	margin: auto;`<br/>`	top: 10px;`<br/>`	left: 0;`<br/>`	right: 0;`<br/>`	height: 8px;`<br/>`	border-radius: 8px;`<br/>`	width: 4rem;`<br/>`	background: #eaecf2;`<br/>`	border: 1px #e3e8f7;`<br/>`	overflow: hidden;`<br/>`  }`<br/>`  `<br/>`  .pace-inactive .pace-progress {`<br/>`	opacity: 0;`<br/>`	transition: 0.3s ease-in;`<br/>`  }`<br/>`  `<br/>`  .pace .pace-progress {`<br/>`	-ms-box-sizing: border-box;`<br/>`	-o-box-sizing: border-box;`<br/>`	box-sizing: border-box;`<br/>`	transform: translate3d(0, 0, 0);`<br/>`	max-width: 200px;`<br/>`	position: absolute;`<br/>`	z-index: 2000;`<br/>`	display: block;`<br/>`	top: 0;`<br/>`	right: 100%;`<br/>`	height: 100%;`<br/>`	width: 100%;`<br/>`	background: #78c2ff;`<br/>`	/*background: linear-gradient(-45deg, #F4511E, #7E57C2, #23d5ab);*/`<br/>`	-webkit-animation: gradient 1.5s ease infinite;`<br/>`	        animation: gradient 1.5s ease infinite;`<br/>`	background-size: 200%;`<br/>`  }`<br/>`  `<br/>`  .pace.pace-inactive {`<br/>`	opacity: 0;`<br/>`	transition: 0.3s;`<br/>`	top: -8px;`<br/>`  }`<br/>`  @-webkit-keyframes gradient {`<br/>`	0% {`<br/>`	  background-position: 0% 50%;`<br/>`	}`<br/>`	50% {`<br/>`	  background-position: 100% 50%;`<br/>`	}`<br/>`	100% {`<br/>`	  background-position: 0% 50%;`<br/>`	}`<br/>`  }`<br/>`  @keyframes gradient {`<br/>`	0% {`<br/>`	  background-position: 0% 50%;`<br/>`	}`<br/>`	50% {`<br/>`	  background-position: 100% 50%;`<br/>`	}`<br/>`	100% {`<br/>`	  background-position: 0% 50%;`<br/>`	}`<br/>`  }`<br/> |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

# 再次进入js中，名为dogee.js


| `/*!`<br/>` * pace.js v1.2.4`<br/>` * https://github.com/CodeByZach/pace/`<br/>` * Licensed MIT © HubSpot, Inc.`<br/>` */`<br/>`! function () {`<br/>`	function o(t, e) {`<br/>`		return function () {`<br/>`			return t.apply(e, arguments)`<br/>`		}`<br/>`	}`<br/>`	var u, c, i, s, n, y, t, l, v, r, a, p, e, h, w, b, f, g, d, m, k, S, q, L, x, P, T, R, j, O, E, M, A, C, N, _, F, U, W, X, D, H, I, z, G, B, J = [].slice,`<br/>`		K = {}.hasOwnProperty,`<br/>`		Q = function (t, e) {`<br/>`			for (var n in e) K.call(e, n) && (t[n] = e[n]);`<br/>`			function r() {`<br/>`				this.constructor = t`<br/>`			}`<br/>`			return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t`<br/>`		},`<br/>`		V = [].indexOf || function (t) {`<br/>`			for (var e = 0, n = this.length; e < n; e++)`<br/>`				if (e in this && this[e] === t) return e;`<br/>`			return -1`<br/>`		};`<br/>`	function Y() {}`<br/>`	for (g = {`<br/>`			className: "",`<br/>`			catchupTime: 100,`<br/>`			initialRate: .03,`<br/>`			minTime: 250,`<br/>`			ghostTime: 100,`<br/>`			maxProgressPerFrame: 20,`<br/>`			easeFactor: 1.25,`<br/>`			startOnPageLoad: !0,`<br/>`			restartOnPushState: !0,`<br/>`			restartOnRequestAfter: 500,`<br/>`			target: "body",`<br/>`			elements: {`<br/>`				checkInterval: 100,`<br/>`				selectors: ["body"]`<br/>`			},`<br/>`			eventLag: {`<br/>`				minSamples: 10,`<br/>`				sampleCount: 3,`<br/>`				lagThreshold: 3`<br/>`			},`<br/>`			ajax: {`<br/>`				trackMethods: ["GET"],`<br/>`				trackWebSockets: !0,`<br/>`				ignoreURLs: []`<br/>`			}`<br/>`		}, P = function () {`<br/>`			var t;`<br/>`			return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date`<br/>`		}, R = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, f = window.cancelAnimationFrame || window.mozCancelAnimationFrame, p = function (t, e, n) {`<br/>`			if ("function" == typeof t.addEventListener) return t.addEventListener(e, n, !1);`<br/>`			var r;`<br/>`			"function" != typeof t["on" + e] || "object" != typeof t["on" + e].eventListeners ? (r = new s, "function" == typeof t["on" + e] && r.on(e, t["on" + e]), t["on" + e] = function (t) {`<br/>`				return r.trigger(e, t)`<br/>`			}, t["on" + e].eventListeners = r) : r = t["on" + e].eventListeners, r.on(e, n)`<br/>`		}, null == R && (R = function (t) {`<br/>`			return setTimeout(t, 50)`<br/>`		}, f = function (t) {`<br/>`			return clearTimeout(t)`<br/>`		}), O = function (e) {`<br/>`			var n = P(),`<br/>`				r = function () {`<br/>`					var t = P() - n;`<br/>`					return 33 <= t ? (n = P(), e(t, function () {`<br/>`						return R(r)`<br/>`					})) : setTimeout(r, 33 - t)`<br/>`				};`<br/>`			return r()`<br/>`		}, j = function () {`<br/>`			var t = arguments[0],`<br/>`				e = arguments[1],`<br/>`				n = 3 <= arguments.length ? J.call(arguments, 2) : [];`<br/>`			return "function" == typeof t[e] ? t[e].apply(t, n) : t[e]`<br/>`		}, d = function () {`<br/>`			for (var t, e, n, r = arguments[0], s = 2 <= arguments.length ? J.call(arguments, 1) : [], o = 0, i = s.length; o < i; o++)`<br/>`				if (e = s[o])`<br/>`					for (t in e) K.call(e, t) && (n = e[t], null != r[t] && "object" == typeof r[t] && null != n && "object" == typeof n ? d(r[t], n) : r[t] = n);`<br/>`			return r`<br/>`		}, h = function (t) {`<br/>`			for (var e, n, r = e = 0, s = 0, o = t.length; s < o; s++) n = t[s], r += Math.abs(n), e++;`<br/>`			return r / e`<br/>`		}, k = function (t, e) {`<br/>`			var n, r;`<br/>`			if (null == t && (t = "options"), null == e && (e = !0), r = document.querySelector("[data-pace-" + t + "]")) {`<br/>`				if (n = r.getAttribute("data-pace-" + t), !e) return n;`<br/>`				try {`<br/>`					return JSON.parse(n)`<br/>`				} catch (t) {`<br/>`					return "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", t) : void 0`<br/>`				}`<br/>`			}`<br/>`		}, Y.prototype.on = function (t, e, n, r) {`<br/>`			var s;`<br/>`			return null == r && (r = !1), null == this.bindings && (this.bindings = {}), null == (s = this.bindings)[t] && (s[t] = []), this.bindings[t].push({`<br/>`				handler: e,`<br/>`				ctx: n,`<br/>`				once: r`<br/>`			})`<br/>`		}, Y.prototype.once = function (t, e, n) {`<br/>`			return this.on(t, e, n, !0)`<br/>`		}, Y.prototype.off = function (t, e) {`<br/>`			var n, r, s;`<br/>`			if (null != (null != (r = this.bindings) ? r[t] : void 0)) {`<br/>`				if (null == e) return delete this.bindings[t];`<br/>`				for (n = 0, s = []; n < this.bindings[t].length;) this.bindings[t][n].handler === e ? s.push(this.bindings[t].splice(n, 1)) : s.push(n++);`<br/>`				return s`<br/>`			}`<br/>`		}, Y.prototype.trigger = function () {`<br/>`			var t, e, n, r, s, o, i = arguments[0],`<br/>`				a = 2 <= arguments.length ? J.call(arguments, 1) : [];`<br/>`			if (null != (r = this.bindings) && r[i]) {`<br/>`				for (n = 0, o = []; n < this.bindings[i].length;) e = (s = this.bindings[i][n]).handler, t = s.ctx, s = s.once, e.apply(null != t ? t : this, a), s ? o.push(this.bindings[i].splice(n, 1)) : o.push(n++);`<br/>`				return o`<br/>`			}`<br/>`		}, B = Y, y = window.Pace || {}, window.Pace = y, d(y, B.prototype), T = y.options = d({}, g, window.paceOptions, k()), X = 0, H = (z = ["ajax", "document", "eventLag", "elements"]).length; X < H; X++) !0 === T[C = z[X]] && (T[C] = g[C]);`<br/>`	function Z() {`<br/>`		return Z.__super__.constructor.apply(this, arguments)`<br/>`	}`<br/>`	function $() {`<br/>`		this.progress = 0`<br/>`	}`<br/>`	function tt() {`<br/>`		this.bindings = {}`<br/>`	}`<br/>`	function et() {`<br/>`		var e, o = this;`<br/>`		et.__super__.constructor.apply(this, arguments), e = function (r) {`<br/>`			var s = r.open;`<br/>`			return r.open = function (t, e, n) {`<br/>`				return A(t) && o.trigger("request", {`<br/>`					type: t,`<br/>`					url: e,`<br/>`					request: r`<br/>`				}), s.apply(r, arguments)`<br/>`			}`<br/>`		}, window.XMLHttpRequest = function (t) {`<br/>`			t = new W(t);`<br/>`			return e(t), t`<br/>`		};`<br/>`		try {`<br/>`			m(window.XMLHttpRequest, W)`<br/>`		} catch (t) {}`<br/>`		if (null != U) {`<br/>`			window.XDomainRequest = function () {`<br/>`				var t = new U;`<br/>`				return e(t), t`<br/>`			};`<br/>`			try {`<br/>`				m(window.XDomainRequest, U)`<br/>`			} catch (t) {}`<br/>`		}`<br/>`		if (null != F && T.ajax.trackWebSockets) {`<br/>`			window.WebSocket = function (t, e) {`<br/>`				var n = null != e ? new F(t, e) : new F(t);`<br/>`				return A("socket") && o.trigger("request", {`<br/>`					type: "socket",`<br/>`					url: t,`<br/>`					protocols: e,`<br/>`					request: n`<br/>`				}), n`<br/>`			};`<br/>`			try {`<br/>`				m(window.WebSocket, F)`<br/>`			} catch (t) {}`<br/>`		}`<br/>`	}`<br/>`	function nt() {`<br/>`		this.complete = o(this.complete, this);`<br/>`		var t = this;`<br/>`		this.elements = [], S().on("request", function () {`<br/>`			return t.watch.apply(t, arguments)`<br/>`		})`<br/>`	}`<br/>`	function rt(t) {`<br/>`		var e, n, r, s;`<br/>`		for (null == t && (t = {}), this.complete = o(this.complete, this), this.elements = [], null == t.selectors && (t.selectors = []), n = 0, r = (s = t.selectors).length; n < r; n++) e = s[n], this.elements.push(new i(e, this.complete))`<br/>`	}`<br/>`	function st(t, e) {`<br/>`		this.selector = t, this.completeCallback = e, this.progress = 0, this.check()`<br/>`	}`<br/>`	function ot() {`<br/>`		var t, e, n = this;`<br/>`		this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function () {`<br/>`			return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0`<br/>`		}`<br/>`	}`<br/>`	function it(t) {`<br/>`		this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = T.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = j(this.source, "progress"))`<br/>`	}`<br/>`	B = Error, Q(Z, B), n = Z, $.prototype.getElement = function () {`<br/>`		var t;`<br/>`		if (null == this.el) {`<br/>`			if (!(t = document.querySelector(T.target))) throw new n;`<br/>`			this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/(pace-done )|/, "pace-running ");`<br/>`			var e = "" !== T.className ? " " + T.className : "";`<br/>`			this.el.innerHTML = '<div class="pace-progress' + e + '">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el)`<br/>`		}`<br/>`		return this.el`<br/>`	}, $.prototype.finish = function () {`<br/>`		var t = this.getElement();`<br/>`		return t.className = t.className.replace("pace-active", "pace-inactive"), document.body.className = document.body.className.replace("pace-running ", "pace-done ")`<br/>`	}, $.prototype.update = function (t) {`<br/>`		return this.progress = t, y.trigger("progress", t), this.render()`<br/>`	}, $.prototype.destroy = function () {`<br/>`		try {`<br/>`			this.getElement().parentNode.removeChild(this.getElement())`<br/>`		} catch (t) {`<br/>`			n = t`<br/>`		}`<br/>`		return this.el = void 0`<br/>`	}, $.prototype.render = function () {`<br/>`		var t, e, n, r, s, o, i;`<br/>`		if (null == document.querySelector(T.target)) return !1;`<br/>`		for (t = this.getElement(), r = "translate3d(" + this.progress + "%, 0, 0)", s = 0, o = (i = ["webkitTransform", "msTransform", "transform"]).length; s < o; s++) e = i[s], t.children[0].style[e] = r;`<br/>`		return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"), 100 <= this.progress ? n = "99" : (n = this.progress < 10 ? "0" : "", n += 0 | this.progress), t.children[0].setAttribute("data-progress", "" + n)), y.trigger("change", this.progress), this.lastRenderedProgress = this.progress`<br/>`	}, $.prototype.done = function () {`<br/>`		return 100 <= this.progress`<br/>`	}, c = $, tt.prototype.trigger = function (t, e) {`<br/>`		var n, r, s, o, i;`<br/>`		if (null != this.bindings[t]) {`<br/>`			for (i = [], r = 0, s = (o = this.bindings[t]).length; r < s; r++) n = o[r], i.push(n.call(this, e));`<br/>`			return i`<br/>`		}`<br/>`	}, tt.prototype.on = function (t, e) {`<br/>`		var n;`<br/>`		return null == (n = this.bindings)[t] && (n[t] = []), this.bindings[t].push(e)`<br/>`	}, s = tt, W = window.XMLHttpRequest, U = window.XDomainRequest, F = window.WebSocket, m = function (t, e) {`<br/>`		var n, r = [];`<br/>`		for (n in e.prototype) try {`<br/>`			null == t[n] && "function" != typeof e[n] ? "function" == typeof Object.defineProperty ? r.push(Object.defineProperty(t, n, {`<br/>`				get: function (t) {`<br/>`					return function () {`<br/>`						return e.prototype[t]`<br/>`					}`<br/>`				}(n),`<br/>`				configurable: !0,`<br/>`				enumerable: !0`<br/>`			})) : r.push(t[n] = e.prototype[n]) : r.push(void 0)`<br/>`		} catch (t) {`<br/>`			0`<br/>`		}`<br/>`		return r`<br/>`	}, L = [], y.ignore = function () {`<br/>`		var t = arguments[0],`<br/>`			e = 2 <= arguments.length ? J.call(arguments, 1) : [];`<br/>`		return L.unshift("ignore"), e = t.apply(null, e), L.shift(), e`<br/>`	}, y.track = function () {`<br/>`		var t = arguments[0],`<br/>`			e = 2 <= arguments.length ? J.call(arguments, 1) : [];`<br/>`		return L.unshift("track"), e = t.apply(null, e), L.shift(), e`<br/>`	}, A = function (t) {`<br/>`		if (null == t && (t = "GET"), "track" === L[0]) return "force";`<br/>`		if (!L.length && T.ajax) {`<br/>`			if ("socket" === t && T.ajax.trackWebSockets) return !0;`<br/>`			if (t = t.toUpperCase(), 0 <= V.call(T.ajax.trackMethods, t)) return !0`<br/>`		}`<br/>`		return !1`<br/>`	}, Q(et, s), t = et, D = null, M = function (t) {`<br/>`		for (var e, n = T.ajax.ignoreURLs, r = 0, s = n.length; r < s; r++)`<br/>`			if ("string" == typeof (e = n[r])) {`<br/>`				if (-1 !== t.indexOf(e)) return !0`<br/>`			} else if (e.test(t)) return !0;`<br/>`		return !1`<br/>`	}, (S = function () {`<br/>`		return D = null == D ? new t : D`<br/>`	})().on("request", function (t) {`<br/>`		var o, i = t.type,`<br/>`			a = t.request,`<br/>`			e = t.url;`<br/>`		if (!M(e)) return y.running || !1 === T.restartOnRequestAfter && "force" !== A(i) ? void 0 : (o = arguments, "boolean" == typeof (e = T.restartOnRequestAfter || 0) && (e = 0), setTimeout(function () {`<br/>`			var t, e, n, r, s = "socket" === i ? a.readyState < 1 : 0 < (s = a.readyState) && s < 4;`<br/>`			if (s) {`<br/>`				for (y.restart(), r = [], t = 0, e = (n = y.sources).length; t < e; t++) {`<br/>`					if ((C = n[t]) instanceof u) {`<br/>`						C.watch.apply(C, o);`<br/>`						break`<br/>`					}`<br/>`					r.push(void 0)`<br/>`				}`<br/>`				return r`<br/>`			}`<br/>`		}, e))`<br/>`	}), nt.prototype.watch = function (t) {`<br/>`		var e = t.type,`<br/>`			n = t.request,`<br/>`			t = t.url;`<br/>`		if (!M(t)) return n = new("socket" === e ? r : a)(n, this.complete), this.elements.push(n)`<br/>`	}, nt.prototype.complete = function (e) {`<br/>`		return this.elements = this.elements.filter(function (t) {`<br/>`			return t !== e`<br/>`		})`<br/>`	}, u = nt, a = function (e, n) {`<br/>`		var t, r, s, o, i = this;`<br/>`		if (this.progress = 0, null != window.ProgressEvent)`<br/>`			for (p(e, "progress", function (t) {`<br/>`					return t.lengthComputable ? i.progress = 100 * t.loaded / t.total : i.progress = i.progress + (100 - i.progress) / 2`<br/>`				}), t = 0, r = (o = ["load", "abort", "timeout", "error"]).length; t < r; t++) p(e, o[t], function () {`<br/>`				return n(i), i.progress = 100`<br/>`			});`<br/>`		else s = e.onreadystatechange, e.onreadystatechange = function () {`<br/>`			var t;`<br/>`			return 0 === (t = e.readyState) || 4 === t ? (n(i), i.progress = 100) : 3 === e.readyState && (i.progress = 50), "function" == typeof s ? s.apply(null, arguments) : void 0`<br/>`		}`<br/>`	}, r = function (t, e) {`<br/>`		for (var n, r = this, s = this.progress = 0, o = (n = ["error", "open"]).length; s < o; s++) p(t, n[s], function () {`<br/>`			return e(r), r.progress = 100`<br/>`		})`<br/>`	}, rt.prototype.complete = function (e) {`<br/>`		return this.elements = this.elements.filter(function (t) {`<br/>`			return t !== e`<br/>`		})`<br/>`	}, k = rt, st.prototype.check = function () {`<br/>`		var t = this;`<br/>`		return document.querySelector(this.selector) ? this.done() : setTimeout(function () {`<br/>`			return t.check()`<br/>`		}, T.elements.checkInterval)`<br/>`	}, st.prototype.done = function () {`<br/>`		return this.completeCallback(this), this.completeCallback = null, this.progress = 100`<br/>`	}, i = st, ot.prototype.states = {`<br/>`		loading: 0,`<br/>`		interactive: 50,`<br/>`		complete: 100`<br/>`	}, B = ot, Q = function () {`<br/>`		var e, n, r, s, o, i = this;`<br/>`		this.progress = 0, o = [], s = 0, r = P(), n = setInterval(function () {`<br/>`			var t = P() - r - 50;`<br/>`			return r = P(), o.push(t), o.length > T.eventLag.sampleCount && o.shift(), e = h(o), ++s >= T.eventLag.minSamples && e < T.eventLag.lagThreshold ? (i.progress = 100, clearInterval(n)) : i.progress = 3 / (e + 3) * 100`<br/>`		}, 50)`<br/>`	}, it.prototype.tick = function (t, e) {`<br/>`		return 100 <= (e = null == e ? j(this.source, "progress") : e) && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / T.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), e = 1 - Math.pow(this.progress / 100, T.easeFactor), this.progress += e * this.rate * t, this.progress = Math.min(this.lastProgress + T.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress`<br/>`	}, v = it, b = e = _ = w = E = N = null, y.running = !1, q = function () {`<br/>`		if (T.restartOnPushState) return y.restart()`<br/>`	}, null != window.history.pushState && (I = window.history.pushState, window.history.pushState = function () {`<br/>`		return q(), I.apply(window.history, arguments)`<br/>`	}), null != window.history.replaceState && (G = window.history.replaceState, window.history.replaceState = function () {`<br/>`		return q(), G.apply(window.history, arguments)`<br/>`	}), l = {`<br/>`		ajax: u,`<br/>`		elements: k,`<br/>`		document: B,`<br/>`		eventLag: Q`<br/>`	}, (x = function () {`<br/>`		var t, e, n, r, s, o, i, a;`<br/>`		for (y.sources = N = [], e = 0, r = (o = ["ajax", "elements", "document", "eventLag"]).length; e < r; e++) !1 !== T[t = o[e]] && N.push(new l[t](T[t]));`<br/>`		for (n = 0, s = (a = null != (i = T.extraSources) ? i : []).length; n < s; n++) C = a[n], N.push(new C(T));`<br/>`		return y.bar = w = new c, E = [], _ = new v`<br/>`	})(), y.stop = function () {`<br/>`		return y.trigger("stop"), y.running = !1, w.destroy(), b = !0, null != e && ("function" == typeof f && f(e), e = null), x()`<br/>`	}, y.restart = function () {`<br/>`		return y.trigger("restart"), y.stop(), y.start()`<br/>`	}, y.go = function () {`<br/>`		var m;`<br/>`		return y.running = !0, w.render(), m = P(), b = !1, e = O(function (t, e) {`<br/>`			w.progress;`<br/>`			for (var n, r, s, o, i, a, u, c, l, p, h = a = 0, f = !0, g = u = 0, d = N.length; u < d; g = ++u)`<br/>`				for (C = N[g], i = null != E[g] ? E[g] : E[g] = [], s = c = 0, l = (r = null != (p = C.elements) ? p : [C]).length; c < l; s = ++c) o = r[s], f &= (o = null != i[s] ? i[s] : i[s] = new v(o)).done, o.done || (h++, a += o.tick(t));`<br/>`			return n = a / h, w.update(_.tick(t, n)), w.done() || f || b ? (w.update(100), y.trigger("done"), setTimeout(function () {`<br/>`				return w.finish(), y.running = !1, y.trigger("hide")`<br/>`			}, Math.max(T.ghostTime, Math.max(T.minTime - (P() - m), 0)))) : e()`<br/>`		})`<br/>`	}, y.start = function (t) {`<br/>`		d(T, t), y.running = !0;`<br/>`		try {`<br/>`			w.render()`<br/>`		} catch (t) {`<br/>`			n = t`<br/>`		}`<br/>`		return document.querySelector(".pace") ? (y.trigger("start"), y.go()) : setTimeout(y.start, 50)`<br/>`	}, "function" == typeof define && define.amd ? define(function () {`<br/>`		return y`<br/>`	}) : "object" == typeof exports ? module.exports = y : T.startOnPageLoad && y.start()`<br/>`}.call(this);`<br/> |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

最后在主题配置文件中引入


| `# 自定义引入css,js`<br/>`inject:`<br/>`  head:`<br/>`    - <link rel="stylesheet" href="/dogs/css/DOGEE.css"> # 网站进度条加载`<br/>`  script:`<br/>`    - <script type="text/javascript" src="/dogs/js/DOGEE.js"></script> # 网站进度条加载`<br/> |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

# 首页轮播

[点我去语佬的文章](https://weekdaycare.cn/posts/home-swiper/)

# footer&sitemap


| `footer:`<br/>`  social:`<br/>`    # github:`<br/>`    #   icon: '<img src="https://gcore.jsdelivr.net/gh/cdn-x/placeholder@1.0.12/social/08a41b181ce68.svg"/>'`<br/>`    #   url: /`<br/>`    # music:`<br/>`    #   icon: '<img src="https://gcore.jsdelivr.net/gh/cdn-x/placeholder@1.0.12/social/3845874.svg"/>'`<br/>`    #   url: /`<br/>`    # unsplash:`<br/>`    #   icon: '<img src="https://gcore.jsdelivr.net/gh/cdn-x/placeholder@1.0.12/social/3616429.svg"/>'`<br/>`    #   url: /`<br/>`    # comments:`<br/>`    #   icon: '<img src="https://gcore.jsdelivr.net/gh/cdn-x/placeholder@1.0.12/social/942ebbf1a4b91.svg"/>'`<br/>`    #   url: /about/#comments`<br/>`  sitemap:`<br/>`    # '博客':`<br/>`    #   - '[近期](/)'`<br/>`    #   - '[分类](/categories/)'`<br/>`    #   - '[标签](/tags/)'`<br/>`    #   - '[归档](/archives/)'`<br/>`    # '项目':`<br/>`    #   - '[开源库](/)'`<br/>`    # '社交':`<br/>`    #   - '[友链](/)'`<br/>`    #   - '[留言板](/)'`<br/>`    # '更多':`<br/>`    #   - '[关于本站](/)'`<br/>`    #   - '[GitHub](/)'`<br/>`  content: | # 支持 Markdown 格式`<br/>`    本站由 [{author.name}](/) 使用 [{theme.name} {theme.version}]({theme.tree}) 主题创建。`<br/>`    本博客所有文章除特别声明外，均采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可协议，转载请注明出处。`<br/>`    <span class="jinrishici-sentence"></span>`<br/>`    <script src="https://sdk.jinrishici.com/v2/browser/jinrishici.js" charset="utf-8"></script>`<br/>`  # 主题用户越多，开发者维护和更新的积极性就越高，如果您喜欢本主题，请在适当的位置显示主题信息和仓库链接以表支持。`<br/> |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

# 添加鼠标光粒

在 `theme/stellar/source/js/xxx.js`下写


| `class Circle {`<br/>`    constructor({ origin, speed, color, angle, context }) {`<br/>`      this.origin = origin`<br/>`      this.position = { ...this.origin }`<br/>`      this.color = color`<br/>`      this.speed = speed`<br/>`      this.angle = angle`<br/>`      this.context = context`<br/>`      this.renderCount = 0`<br/>`    }`<br/>`  `<br/>`    draw() {`<br/>`      this.context.fillStyle = this.color`<br/>`      this.context.beginPath()`<br/>`      this.context.arc(this.position.x, this.position.y, 2, 0, Math.PI * 2)`<br/>`      this.context.fill()`<br/>`    }`<br/>`  `<br/>`    move() {`<br/>`      this.position.x = (Math.sin(this.angle) * this.speed) + this.position.x`<br/>`      this.position.y = (Math.cos(this.angle) * this.speed) + this.position.y + (this.renderCount * 0.3)`<br/>`      this.renderCount++`<br/>`    }`<br/>`  }`<br/>`  `<br/>`  class Boom {`<br/>`    constructor ({ origin, context, circleCount = 10, area }) {`<br/>`      this.origin = origin`<br/>`      this.context = context`<br/>`      this.circleCount = circleCount`<br/>`      this.area = area`<br/>`      this.stop = false`<br/>`      this.circles = []`<br/>`    }`<br/>`  `<br/>`    randomArray(range) {`<br/>`      const length = range.length`<br/>`      const randomIndex = Math.floor(length * Math.random())`<br/>`      return range[randomIndex]`<br/>`    }`<br/>`  `<br/>`    randomColor() {`<br/>`      const range = ['8', '9', 'A', 'B', 'C', 'D', 'E', 'F']`<br/>`      return '#' + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range)`<br/>`    }`<br/>`  `<br/>`    randomRange(start, end) {`<br/>`      return (end - start) * Math.random() + start`<br/>`    }`<br/>`  `<br/>`    init() {`<br/>`      for(let i = 0; i < this.circleCount; i++) {`<br/>`        const circle = new Circle({`<br/>`          context: this.context,`<br/>`          origin: this.origin,`<br/>`          color: this.randomColor(),`<br/>`          angle: this.randomRange(Math.PI - 1, Math.PI + 1),`<br/>`          speed: this.randomRange(1, 6)`<br/>`        })`<br/>`        this.circles.push(circle)`<br/>`      }`<br/>`    }`<br/>`  `<br/>`    move() {`<br/>`      this.circles.forEach((circle, index) => {`<br/>`        if (circle.position.x > this.area.width || circle.position.y > this.area.height) {`<br/>`          return this.circles.splice(index, 1)`<br/>`        }`<br/>`        circle.move()`<br/>`      })`<br/>`      if (this.circles.length == 0) {`<br/>`        this.stop = true`<br/>`      }`<br/>`    }`<br/>`  `<br/>`    draw() {`<br/>`      this.circles.forEach(circle => circle.draw())`<br/>`    }`<br/>`  }`<br/>`  `<br/>`  class CursorSpecialEffects {`<br/>`    constructor() {`<br/>`      this.computerCanvas = document.createElement('canvas')`<br/>`      this.renderCanvas = document.createElement('canvas')`<br/>`  `<br/>`      this.computerContext = this.computerCanvas.getContext('2d')`<br/>`      this.renderContext = this.renderCanvas.getContext('2d')`<br/>`  `<br/>`      this.globalWidth = window.innerWidth`<br/>`      this.globalHeight = window.innerHeight`<br/>`  `<br/>`      this.booms = []`<br/>`      this.running = false`<br/>`    }`<br/>`  `<br/>`    handleMouseDown(e) {`<br/>`      const boom = new Boom({`<br/>`        origin: { x: e.clientX, y: e.clientY },`<br/>`        context: this.computerContext,`<br/>`        area: {`<br/>`          width: this.globalWidth,`<br/>`          height: this.globalHeight`<br/>`        }`<br/>`      })`<br/>`      boom.init()`<br/>`      this.booms.push(boom)`<br/>`      this.running || this.run()`<br/>`    }`<br/>`  `<br/>`    handlePageHide() {`<br/>`      this.booms = []`<br/>`      this.running = false`<br/>`    }`<br/>`  `<br/>`    init() {`<br/>`      const style = this.renderCanvas.style`<br/>`      style.position = 'fixed'`<br/>`      style.top = style.left = 0`<br/>`      style.zIndex = '999999999999999999999999999999999999999999'`<br/>`      style.pointerEvents = 'none'`<br/>`  `<br/>`      style.width = this.renderCanvas.width = this.computerCanvas.width = this.globalWidth`<br/>`      style.height = this.renderCanvas.height = this.computerCanvas.height = this.globalHeight`<br/>`  `<br/>`      document.body.append(this.renderCanvas)`<br/>`  `<br/>`      window.addEventListener('mousedown', this.handleMouseDown.bind(this))`<br/>`      window.addEventListener('pagehide', this.handlePageHide.bind(this))`<br/>`    }`<br/>`  `<br/>`    run() {`<br/>`      this.running = true`<br/>`      if (this.booms.length == 0) {`<br/>`        return this.running = false`<br/>`      }`<br/>`  `<br/>`      requestAnimationFrame(this.run.bind(this))`<br/>`  `<br/>`      this.computerContext.clearRect(0, 0, this.globalWidth, this.globalHeight)`<br/>`      this.renderContext.clearRect(0, 0, this.globalWidth, this.globalHeight)`<br/>`  `<br/>`      this.booms.forEach((boom, index) => {`<br/>`        if (boom.stop) {`<br/>`          return this.booms.splice(index, 1)`<br/>`        }`<br/>`        boom.move()`<br/>`        boom.draw()`<br/>`      })`<br/>`      this.renderContext.drawImage(this.computerCanvas, 0, 0, this.globalWidth, this.globalHeight)`<br/>`    }`<br/>`  }`<br/>`  `<br/>`document.addEventListener('DOMContentLoaded', function() {`<br/>`    const cursorSpecialEffects = new CursorSpecialEffects();`<br/>`    cursorSpecialEffects.init();`<br/>`});`<br/>`  `<br/> |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

然后引入

# 每日热点

新建new/index.html,把这个图片![https://api.szfx.top/morning-paper](https://api.szfx.top/morning-paper)放入，例如


| `!(1)[https://api.szfx.top/morning-paper]`<br/><br /> |
| ----------------------------------------------------- |

# 搜索框透明,1.30.4,附上代码css

在`/source/css/...../search.styl   `中打开，替换为

```css







.search-wrapper {
  padding-bottom: 32px;
  width: 100%;
  border-radius: $border-card-s;
  
  > .search-form {
    position: sticky;
    top: 0;
    height: 48px;  // Slightly taller for better interaction
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.38s ease-out;
    z-index: 1;
    border-radius: $border-card-s;
    color: var(--text);
    background: var(--bg-a5);  // Subtle background
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  
    > * {
      z-index: 1;
    }
  
    &:before {
      position: absolute;
      content: '';
      height: 2px;
      bottom: 0;
      left: 1rem;
      right: 1rem;
      border-radius: $border-bar;
      background: var(--theme-a30);  // Use theme color for accent
      z-index: 0;
      transition: all 0.3s ease;
    }
  
    &:hover,
    &:has(input:focus),
    &:has(input:not(:placeholder-shown)) {
      background: var(--bg-a10);  // Slightly more visible on interaction
  
      &:before {
        background: var(--theme-a50);  // More prominent theme color
        height: 100%;
        left: 0;
        right: 0;
      }
  
      .search-button svg {
        color: var(--theme);  // Match icon with theme
      }
    }
  }
  
  .search-input {
    width: 100%;
    box-sizing: border-box;
    font-family: $ff-body;
    font-size: $fs-15;  // Slightly larger font
    padding: 12px 16px;  // More horizontal padding
    color: var(--text);
    background: transparent;
    border: none;
    outline: none;
  
    &::placeholder {
      color: var(--text-p3);
      transition: color 0.2s ease;
  
      @media screen and (prefers-color-scheme: dark) {
        color: var(--text-p2);
      }
    }
  
    &:focus::placeholder {
      color: var(--text-p4);  // Make placeholder fade more when focused
    }
  }
  
  .search-button {
    border-radius: $border-bar;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    margin-right: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
  
    &:hover {
      background: var(--bg-a20);
    }
  
    svg {
      height: 1.1rem;  // Slightly larger icon
      width: 1.1rem;
      color: var(--text-p2);
      fill: currentColor;
      transition: color 0.2s ease;
  
      path[p-id="1562"] {
        color: var(--theme);
      }
    }
  }
  
  &[searching='true'] {
    .search-button {
      animation: pulse 1.5s infinite;
  
      path[p-id="1562"] {
        color: $c-green;
      }
    }
  }
  
  &.noresult[searching='true'] {
    .search-button {
      path[p-id="1562"] {
        color: $c-red;
      }
    }
  }
  
  .search-no-result {
    display: none;
    color: var(--text-p1);
    text-align: center;
    font-size: $fs-14;
    padding: 2rem;
    margin: 8px 0;
    background: var(--bg-a20);
    border-radius: $border-card-s;
    border: 1px dashed var(--bg-a50);
  }
  
  #search-result {
    max-height: 60vh;
    overflow: auto;
    scrollbar-width: none;
    scrollbar(0, 0);
    border-radius: $border-bar;
    margin-top: 12px;
  
    &:empty {
      display: none;
    }
  
    .search-result-list {
      padding: 0;
      margin: 8px 0;
      list-style-type: none;
    }
  
    li a {
      display: block;
      background: var(--bg-a20);
      line-height: 1.2;
      padding: 1rem;  // More padding
      border-radius: $border-card-s;
      transition: all 0.2s ease;
      border-left: 3px solid transparent;
  
      &:hover {
        background: var(--bg-a100);
        border-left-color: var(--theme);  // Accent border
        transform: translateX(2px);
      }
    }
  
    li + li {
      margin-top: 8px;
    }
  
    .search-result-title {
      color: var(--text-p1);
      font-weight: 700;
      font-size: $fs-15;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
  
      &:before {
        content: '→';
        margin-right: 6px;
        color: var(--theme);
        font-size: 0.9em;
      }
    }
  
    .search-result-content {
      overflow: hidden;
      color: var(--text-p3);
      margin: 4px 0 0;
      max-height: 13em;
      text-align: justify;
      font-size: $fs-13;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 2;
      line-height: 1.5;
    }
  
    .search-keyword {
      color: var(--theme);  // Use theme color instead of red
      font-weight: bold;
      background: var(--theme-a10);
      padding: 0 2px;
      border-radius: 2px;
    }
  }
}

.search-wrapper.noresult[searching='true'] {
  .search-no-result {
    display: block;
    margin-bottom: 8px;
  }
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.6; }
  100% { opacity: 1; }
}
```

# Menu

菜单栏按下动效以及搜索框是deepseek写的

```
.nav-area .menu {
  display: grid;
  margin-bottom: 12px;
  padding: 6px;
  border-radius: 24px; /* 增大外圆角 */
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.1);
  grid-template-columns: repeat(hexo-config('menubar.columns'), 1fr);
  grid-gap: 6px; /* 增大间距 */
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  touch-action: pan-x;

  /* 隐藏滚动条 */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  .nav-item {
    box-sizing: border-box;
    width: 100%;
    min-height: 52px; /* 增加高度 */
    font-size: $fs-15;
    font-weight: 500;
    color: var(--text-p3);
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 18px; /* 增大圆角 */
    margin: 0;
    padding: 8px 4px;
  
    /* 图标样式 */
    img, svg {
      height: 26px;
      width: 26px;
      object-fit: contain;
      filter: grayscale(100%) brightness(0.8) opacity(0.8);
      transition: all 0.3s ease;
      margin-bottom: 4px;
    }
  
    /* 文字样式 */
    span {
      text-overflow: ellipsis;
      word-break: keep-all;
      white-space: nowrap;
      font-size: $fs-12;
      line-height: 1.2;
    }
  
    /* 激活和悬停状态 */
    &.active, &:hover {
      color: var(--text-p1);
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
      box-shadow: 
        0 4px 12px rgba(0, 0, 0, 0.1),
        inset 0 1px 1px rgba(255, 255, 255, 0.2);
    
      img, svg {
        filter: unset;
        transform: scale(1.15);
      }
    }
  
    /* 激活状态指示器 */
    &.active:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 3px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 3px;
      bottom: 6px;
      background: currentColor;
      opacity: 0.8;
    }
  
    /* 按压效果 */
    &:active {
      transform: scale(0.96);
      transition: transform 0.1s ease;
    }
  }
}

/* 拖动状态样式 */
.nav-area.dragging .menu {
  cursor: grabbing;
  
  .nav-item {
    transition: none !important;
    pointer-events: none;
  }
}

/* 响应式调整 */
@media screen and (max-width: $device-mobile) {
  .nav-area .menu {
    grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
    padding: 8px;
    border-radius: 20px;
  
    .nav-item {
      min-height: 48px;
      padding: 6px 4px;
      border-radius: 16px;
    
      img, svg {
        height: 22px;
        width: 22px;
      }
    
      span {
        font-size: $fs-11;
      }
    
      &.active:after {
        width: 18px;
        bottom: 5px;
      }
    }
  }
}

/* 滚动指示器（可选） */
.menu-scroll-indicator {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  &.left {
    left: 0;
    background: linear-gradient(90deg, rgba(255,255,255,0.5), transparent);
  }
  
  &.right {
    right: 0;
    background: linear-gradient(270deg, rgba(255,255,255,0.5), transparent);
  }
  
  &.visible {
    opacity: 1;
  }
  
  i {
    background: rgba(255,255,255,0.8);
    border-radius: 50%;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    color: var(--theme);
  }
}
```

```

```
