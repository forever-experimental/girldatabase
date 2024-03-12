(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/lit-html/lit-html.js
  function C(t5, i5) {
    if (!Array.isArray(t5) || !t5.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== s ? s.createHTML(i5) : i5;
  }
  function N(t5, i5, s5 = t5, e5) {
    if (i5 === w)
      return i5;
    let h5 = void 0 !== e5 ? s5._$Co?.[e5] : s5._$Cl;
    const o5 = c(i5) ? void 0 : i5._$litDirective$;
    return h5?.constructor !== o5 && (h5?._$AO?.(false), void 0 === o5 ? h5 = void 0 : (h5 = new o5(t5), h5._$AT(t5, s5, e5)), void 0 !== e5 ? (s5._$Co ??= [])[e5] = h5 : s5._$Cl = h5), void 0 !== h5 && (i5 = N(t5, h5._$AS(t5, i5.values), h5, e5)), i5;
  }
  var t, i, s, e, h, o, n, r, l, c, a, u, d, f, v, _, m, p, g, $, y, x, b, w, T, A, E, P, V, S, M, R, k, H, I, L, Z, j;
  var init_lit_html = __esm({
    "node_modules/lit-html/lit-html.js"() {
      t = globalThis;
      i = t.trustedTypes;
      s = i ? i.createPolicy("lit-html", { createHTML: (t5) => t5 }) : void 0;
      e = "$lit$";
      h = `lit$${(Math.random() + "").slice(9)}$`;
      o = "?" + h;
      n = `<${o}>`;
      r = document;
      l = () => r.createComment("");
      c = (t5) => null === t5 || "object" != typeof t5 && "function" != typeof t5;
      a = Array.isArray;
      u = (t5) => a(t5) || "function" == typeof t5?.[Symbol.iterator];
      d = "[ 	\n\f\r]";
      f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
      v = /-->/g;
      _ = />/g;
      m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
      p = /'/g;
      g = /"/g;
      $ = /^(?:script|style|textarea|title)$/i;
      y = (t5) => (i5, ...s5) => ({ _$litType$: t5, strings: i5, values: s5 });
      x = y(1);
      b = y(2);
      w = Symbol.for("lit-noChange");
      T = Symbol.for("lit-nothing");
      A = /* @__PURE__ */ new WeakMap();
      E = r.createTreeWalker(r, 129);
      P = (t5, i5) => {
        const s5 = t5.length - 1, o5 = [];
        let r5, l5 = 2 === i5 ? "<svg>" : "", c5 = f;
        for (let i6 = 0; i6 < s5; i6++) {
          const s6 = t5[i6];
          let a5, u5, d5 = -1, y4 = 0;
          for (; y4 < s6.length && (c5.lastIndex = y4, u5 = c5.exec(s6), null !== u5); )
            y4 = c5.lastIndex, c5 === f ? "!--" === u5[1] ? c5 = v : void 0 !== u5[1] ? c5 = _ : void 0 !== u5[2] ? ($.test(u5[2]) && (r5 = RegExp("</" + u5[2], "g")), c5 = m) : void 0 !== u5[3] && (c5 = m) : c5 === m ? ">" === u5[0] ? (c5 = r5 ?? f, d5 = -1) : void 0 === u5[1] ? d5 = -2 : (d5 = c5.lastIndex - u5[2].length, a5 = u5[1], c5 = void 0 === u5[3] ? m : '"' === u5[3] ? g : p) : c5 === g || c5 === p ? c5 = m : c5 === v || c5 === _ ? c5 = f : (c5 = m, r5 = void 0);
          const x4 = c5 === m && t5[i6 + 1].startsWith("/>") ? " " : "";
          l5 += c5 === f ? s6 + n : d5 >= 0 ? (o5.push(a5), s6.slice(0, d5) + e + s6.slice(d5) + h + x4) : s6 + h + (-2 === d5 ? i6 : x4);
        }
        return [C(t5, l5 + (t5[s5] || "<?>") + (2 === i5 ? "</svg>" : "")), o5];
      };
      V = class _V {
        constructor({ strings: t5, _$litType$: s5 }, n5) {
          let r5;
          this.parts = [];
          let c5 = 0, a5 = 0;
          const u5 = t5.length - 1, d5 = this.parts, [f5, v6] = P(t5, s5);
          if (this.el = _V.createElement(f5, n5), E.currentNode = this.el.content, 2 === s5) {
            const t6 = this.el.content.firstChild;
            t6.replaceWith(...t6.childNodes);
          }
          for (; null !== (r5 = E.nextNode()) && d5.length < u5; ) {
            if (1 === r5.nodeType) {
              if (r5.hasAttributes())
                for (const t6 of r5.getAttributeNames())
                  if (t6.endsWith(e)) {
                    const i5 = v6[a5++], s6 = r5.getAttribute(t6).split(h), e5 = /([.?@])?(.*)/.exec(i5);
                    d5.push({ type: 1, index: c5, name: e5[2], strings: s6, ctor: "." === e5[1] ? k : "?" === e5[1] ? H : "@" === e5[1] ? I : R }), r5.removeAttribute(t6);
                  } else
                    t6.startsWith(h) && (d5.push({ type: 6, index: c5 }), r5.removeAttribute(t6));
              if ($.test(r5.tagName)) {
                const t6 = r5.textContent.split(h), s6 = t6.length - 1;
                if (s6 > 0) {
                  r5.textContent = i ? i.emptyScript : "";
                  for (let i5 = 0; i5 < s6; i5++)
                    r5.append(t6[i5], l()), E.nextNode(), d5.push({ type: 2, index: ++c5 });
                  r5.append(t6[s6], l());
                }
              }
            } else if (8 === r5.nodeType)
              if (r5.data === o)
                d5.push({ type: 2, index: c5 });
              else {
                let t6 = -1;
                for (; -1 !== (t6 = r5.data.indexOf(h, t6 + 1)); )
                  d5.push({ type: 7, index: c5 }), t6 += h.length - 1;
              }
            c5++;
          }
        }
        static createElement(t5, i5) {
          const s5 = r.createElement("template");
          return s5.innerHTML = t5, s5;
        }
      };
      S = class {
        constructor(t5, i5) {
          this._$AV = [], this._$AN = void 0, this._$AD = t5, this._$AM = i5;
        }
        get parentNode() {
          return this._$AM.parentNode;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        u(t5) {
          const { el: { content: i5 }, parts: s5 } = this._$AD, e5 = (t5?.creationScope ?? r).importNode(i5, true);
          E.currentNode = e5;
          let h5 = E.nextNode(), o5 = 0, n5 = 0, l5 = s5[0];
          for (; void 0 !== l5; ) {
            if (o5 === l5.index) {
              let i6;
              2 === l5.type ? i6 = new M(h5, h5.nextSibling, this, t5) : 1 === l5.type ? i6 = new l5.ctor(h5, l5.name, l5.strings, this, t5) : 6 === l5.type && (i6 = new L(h5, this, t5)), this._$AV.push(i6), l5 = s5[++n5];
            }
            o5 !== l5?.index && (h5 = E.nextNode(), o5++);
          }
          return E.currentNode = r, e5;
        }
        p(t5) {
          let i5 = 0;
          for (const s5 of this._$AV)
            void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t5, s5, i5), i5 += s5.strings.length - 2) : s5._$AI(t5[i5])), i5++;
        }
      };
      M = class _M {
        get _$AU() {
          return this._$AM?._$AU ?? this._$Cv;
        }
        constructor(t5, i5, s5, e5) {
          this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t5, this._$AB = i5, this._$AM = s5, this.options = e5, this._$Cv = e5?.isConnected ?? true;
        }
        get parentNode() {
          let t5 = this._$AA.parentNode;
          const i5 = this._$AM;
          return void 0 !== i5 && 11 === t5?.nodeType && (t5 = i5.parentNode), t5;
        }
        get startNode() {
          return this._$AA;
        }
        get endNode() {
          return this._$AB;
        }
        _$AI(t5, i5 = this) {
          t5 = N(this, t5, i5), c(t5) ? t5 === T || null == t5 || "" === t5 ? (this._$AH !== T && this._$AR(), this._$AH = T) : t5 !== this._$AH && t5 !== w && this._(t5) : void 0 !== t5._$litType$ ? this.$(t5) : void 0 !== t5.nodeType ? this.T(t5) : u(t5) ? this.k(t5) : this._(t5);
        }
        S(t5) {
          return this._$AA.parentNode.insertBefore(t5, this._$AB);
        }
        T(t5) {
          this._$AH !== t5 && (this._$AR(), this._$AH = this.S(t5));
        }
        _(t5) {
          this._$AH !== T && c(this._$AH) ? this._$AA.nextSibling.data = t5 : this.T(r.createTextNode(t5)), this._$AH = t5;
        }
        $(t5) {
          const { values: i5, _$litType$: s5 } = t5, e5 = "number" == typeof s5 ? this._$AC(t5) : (void 0 === s5.el && (s5.el = V.createElement(C(s5.h, s5.h[0]), this.options)), s5);
          if (this._$AH?._$AD === e5)
            this._$AH.p(i5);
          else {
            const t6 = new S(e5, this), s6 = t6.u(this.options);
            t6.p(i5), this.T(s6), this._$AH = t6;
          }
        }
        _$AC(t5) {
          let i5 = A.get(t5.strings);
          return void 0 === i5 && A.set(t5.strings, i5 = new V(t5)), i5;
        }
        k(t5) {
          a(this._$AH) || (this._$AH = [], this._$AR());
          const i5 = this._$AH;
          let s5, e5 = 0;
          for (const h5 of t5)
            e5 === i5.length ? i5.push(s5 = new _M(this.S(l()), this.S(l()), this, this.options)) : s5 = i5[e5], s5._$AI(h5), e5++;
          e5 < i5.length && (this._$AR(s5 && s5._$AB.nextSibling, e5), i5.length = e5);
        }
        _$AR(t5 = this._$AA.nextSibling, i5) {
          for (this._$AP?.(false, true, i5); t5 && t5 !== this._$AB; ) {
            const i6 = t5.nextSibling;
            t5.remove(), t5 = i6;
          }
        }
        setConnected(t5) {
          void 0 === this._$AM && (this._$Cv = t5, this._$AP?.(t5));
        }
      };
      R = class {
        get tagName() {
          return this.element.tagName;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        constructor(t5, i5, s5, e5, h5) {
          this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t5, this.name = i5, this._$AM = e5, this.options = h5, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = T;
        }
        _$AI(t5, i5 = this, s5, e5) {
          const h5 = this.strings;
          let o5 = false;
          if (void 0 === h5)
            t5 = N(this, t5, i5, 0), o5 = !c(t5) || t5 !== this._$AH && t5 !== w, o5 && (this._$AH = t5);
          else {
            const e6 = t5;
            let n5, r5;
            for (t5 = h5[0], n5 = 0; n5 < h5.length - 1; n5++)
              r5 = N(this, e6[s5 + n5], i5, n5), r5 === w && (r5 = this._$AH[n5]), o5 ||= !c(r5) || r5 !== this._$AH[n5], r5 === T ? t5 = T : t5 !== T && (t5 += (r5 ?? "") + h5[n5 + 1]), this._$AH[n5] = r5;
          }
          o5 && !e5 && this.j(t5);
        }
        j(t5) {
          t5 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t5 ?? "");
        }
      };
      k = class extends R {
        constructor() {
          super(...arguments), this.type = 3;
        }
        j(t5) {
          this.element[this.name] = t5 === T ? void 0 : t5;
        }
      };
      H = class extends R {
        constructor() {
          super(...arguments), this.type = 4;
        }
        j(t5) {
          this.element.toggleAttribute(this.name, !!t5 && t5 !== T);
        }
      };
      I = class extends R {
        constructor(t5, i5, s5, e5, h5) {
          super(t5, i5, s5, e5, h5), this.type = 5;
        }
        _$AI(t5, i5 = this) {
          if ((t5 = N(this, t5, i5, 0) ?? T) === w)
            return;
          const s5 = this._$AH, e5 = t5 === T && s5 !== T || t5.capture !== s5.capture || t5.once !== s5.once || t5.passive !== s5.passive, h5 = t5 !== T && (s5 === T || e5);
          e5 && this.element.removeEventListener(this.name, this, s5), h5 && this.element.addEventListener(this.name, this, t5), this._$AH = t5;
        }
        handleEvent(t5) {
          "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t5) : this._$AH.handleEvent(t5);
        }
      };
      L = class {
        constructor(t5, i5, s5) {
          this.element = t5, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s5;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(t5) {
          N(this, t5);
        }
      };
      Z = t.litHtmlPolyfillSupport;
      Z?.(V, M), (t.litHtmlVersions ??= []).push("3.1.2");
      j = (t5, i5, s5) => {
        const e5 = s5?.renderBefore ?? i5;
        let h5 = e5._$litPart$;
        if (void 0 === h5) {
          const t6 = s5?.renderBefore ?? null;
          e5._$litPart$ = h5 = new M(i5.insertBefore(l(), t6), t6, void 0, s5 ?? {});
        }
        return h5._$AI(t5), h5;
      };
    }
  });

  // node_modules/cute-html/index.cjs.js
  var index_cjs_exports = {};
  function C2(t5, i5) {
    if (!Array.isArray(t5) || !t5.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== s2 ? s2.createHTML(i5) : i5;
  }
  function N2(t5, i5, s5 = t5, e5) {
    if (i5 === w2)
      return i5;
    let h5 = void 0 !== e5 ? s5._$Co?.[e5] : s5._$Cl;
    const o5 = c2(i5) ? void 0 : i5._$litDirective$;
    return h5?.constructor !== o5 && (h5?._$AO?.(false), void 0 === o5 ? h5 = void 0 : (h5 = new o5(t5), h5._$AT(t5, s5, e5)), void 0 !== e5 ? (s5._$Co ??= [])[e5] = h5 : s5._$Cl = h5), void 0 !== h5 && (i5 = N2(t5, h5._$AS(t5, i5.values), h5, e5)), i5;
  }
  var t2, i2, s2, e2, h2, o2, n2, r2, l2, c2, a2, u2, d2, f2, v2, _$2, m2, p2, g2, $$1, y2, x2, w2, T2, A2, E2, P2, V2, S2, M2, R2, k2, H2, I2, L2, Z2, j2, _$1, html, _2, $2, $$;
  var init_index_cjs = __esm({
    "node_modules/cute-html/index.cjs.js"() {
      "use strict";
      t2 = globalThis;
      i2 = t2.trustedTypes;
      s2 = i2 ? i2.createPolicy("lit-html", { createHTML: (t5) => t5 }) : void 0;
      e2 = "$lit$";
      h2 = `lit$${(Math.random() + "").slice(9)}$`;
      o2 = "?" + h2;
      n2 = `<${o2}>`;
      r2 = document;
      l2 = () => r2.createComment("");
      c2 = (t5) => null === t5 || "object" != typeof t5 && "function" != typeof t5;
      a2 = Array.isArray;
      u2 = (t5) => a2(t5) || "function" == typeof t5?.[Symbol.iterator];
      d2 = "[ 	\n\f\r]";
      f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
      v2 = /-->/g;
      _$2 = />/g;
      m2 = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
      p2 = /'/g;
      g2 = /"/g;
      $$1 = /^(?:script|style|textarea|title)$/i;
      y2 = (t5) => (i5, ...s5) => ({ _$litType$: t5, strings: i5, values: s5 });
      x2 = y2(1);
      w2 = Symbol.for("lit-noChange");
      T2 = Symbol.for("lit-nothing");
      A2 = /* @__PURE__ */ new WeakMap();
      E2 = r2.createTreeWalker(r2, 129);
      P2 = (t5, i5) => {
        const s5 = t5.length - 1, o5 = [];
        let r5, l5 = 2 === i5 ? "<svg>" : "", c5 = f2;
        for (let i6 = 0; i6 < s5; i6++) {
          const s6 = t5[i6];
          let a5, u5, d5 = -1, y4 = 0;
          for (; y4 < s6.length && (c5.lastIndex = y4, u5 = c5.exec(s6), null !== u5); )
            y4 = c5.lastIndex, c5 === f2 ? "!--" === u5[1] ? c5 = v2 : void 0 !== u5[1] ? c5 = _$2 : void 0 !== u5[2] ? ($$1.test(u5[2]) && (r5 = RegExp("</" + u5[2], "g")), c5 = m2) : void 0 !== u5[3] && (c5 = m2) : c5 === m2 ? ">" === u5[0] ? (c5 = r5 ?? f2, d5 = -1) : void 0 === u5[1] ? d5 = -2 : (d5 = c5.lastIndex - u5[2].length, a5 = u5[1], c5 = void 0 === u5[3] ? m2 : '"' === u5[3] ? g2 : p2) : c5 === g2 || c5 === p2 ? c5 = m2 : c5 === v2 || c5 === _$2 ? c5 = f2 : (c5 = m2, r5 = void 0);
          const x4 = c5 === m2 && t5[i6 + 1].startsWith("/>") ? " " : "";
          l5 += c5 === f2 ? s6 + n2 : d5 >= 0 ? (o5.push(a5), s6.slice(0, d5) + e2 + s6.slice(d5) + h2 + x4) : s6 + h2 + (-2 === d5 ? i6 : x4);
        }
        return [C2(t5, l5 + (t5[s5] || "<?>") + (2 === i5 ? "</svg>" : "")), o5];
      };
      V2 = class _V {
        constructor({ strings: t5, _$litType$: s5 }, n5) {
          let r5;
          this.parts = [];
          let c5 = 0, a5 = 0;
          const u5 = t5.length - 1, d5 = this.parts, [f5, v6] = P2(t5, s5);
          if (this.el = _V.createElement(f5, n5), E2.currentNode = this.el.content, 2 === s5) {
            const t6 = this.el.content.firstChild;
            t6.replaceWith(...t6.childNodes);
          }
          for (; null !== (r5 = E2.nextNode()) && d5.length < u5; ) {
            if (1 === r5.nodeType) {
              if (r5.hasAttributes())
                for (const t6 of r5.getAttributeNames())
                  if (t6.endsWith(e2)) {
                    const i5 = v6[a5++], s6 = r5.getAttribute(t6).split(h2), e5 = /([.?@])?(.*)/.exec(i5);
                    d5.push({ type: 1, index: c5, name: e5[2], strings: s6, ctor: "." === e5[1] ? k2 : "?" === e5[1] ? H2 : "@" === e5[1] ? I2 : R2 }), r5.removeAttribute(t6);
                  } else
                    t6.startsWith(h2) && (d5.push({ type: 6, index: c5 }), r5.removeAttribute(t6));
              if ($$1.test(r5.tagName)) {
                const t6 = r5.textContent.split(h2), s6 = t6.length - 1;
                if (s6 > 0) {
                  r5.textContent = i2 ? i2.emptyScript : "";
                  for (let i5 = 0; i5 < s6; i5++)
                    r5.append(t6[i5], l2()), E2.nextNode(), d5.push({ type: 2, index: ++c5 });
                  r5.append(t6[s6], l2());
                }
              }
            } else if (8 === r5.nodeType)
              if (r5.data === o2)
                d5.push({ type: 2, index: c5 });
              else {
                let t6 = -1;
                for (; -1 !== (t6 = r5.data.indexOf(h2, t6 + 1)); )
                  d5.push({ type: 7, index: c5 }), t6 += h2.length - 1;
              }
            c5++;
          }
        }
        static createElement(t5, i5) {
          const s5 = r2.createElement("template");
          return s5.innerHTML = t5, s5;
        }
      };
      S2 = class {
        constructor(t5, i5) {
          this._$AV = [], this._$AN = void 0, this._$AD = t5, this._$AM = i5;
        }
        get parentNode() {
          return this._$AM.parentNode;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        u(t5) {
          const { el: { content: i5 }, parts: s5 } = this._$AD, e5 = (t5?.creationScope ?? r2).importNode(i5, true);
          E2.currentNode = e5;
          let h5 = E2.nextNode(), o5 = 0, n5 = 0, l5 = s5[0];
          for (; void 0 !== l5; ) {
            if (o5 === l5.index) {
              let i6;
              2 === l5.type ? i6 = new M2(h5, h5.nextSibling, this, t5) : 1 === l5.type ? i6 = new l5.ctor(h5, l5.name, l5.strings, this, t5) : 6 === l5.type && (i6 = new L2(h5, this, t5)), this._$AV.push(i6), l5 = s5[++n5];
            }
            o5 !== l5?.index && (h5 = E2.nextNode(), o5++);
          }
          return E2.currentNode = r2, e5;
        }
        p(t5) {
          let i5 = 0;
          for (const s5 of this._$AV)
            void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t5, s5, i5), i5 += s5.strings.length - 2) : s5._$AI(t5[i5])), i5++;
        }
      };
      M2 = class _M {
        get _$AU() {
          return this._$AM?._$AU ?? this._$Cv;
        }
        constructor(t5, i5, s5, e5) {
          this.type = 2, this._$AH = T2, this._$AN = void 0, this._$AA = t5, this._$AB = i5, this._$AM = s5, this.options = e5, this._$Cv = e5?.isConnected ?? true;
        }
        get parentNode() {
          let t5 = this._$AA.parentNode;
          const i5 = this._$AM;
          return void 0 !== i5 && 11 === t5?.nodeType && (t5 = i5.parentNode), t5;
        }
        get startNode() {
          return this._$AA;
        }
        get endNode() {
          return this._$AB;
        }
        _$AI(t5, i5 = this) {
          t5 = N2(this, t5, i5), c2(t5) ? t5 === T2 || null == t5 || "" === t5 ? (this._$AH !== T2 && this._$AR(), this._$AH = T2) : t5 !== this._$AH && t5 !== w2 && this._(t5) : void 0 !== t5._$litType$ ? this.$(t5) : void 0 !== t5.nodeType ? this.T(t5) : u2(t5) ? this.k(t5) : this._(t5);
        }
        S(t5) {
          return this._$AA.parentNode.insertBefore(t5, this._$AB);
        }
        T(t5) {
          this._$AH !== t5 && (this._$AR(), this._$AH = this.S(t5));
        }
        _(t5) {
          this._$AH !== T2 && c2(this._$AH) ? this._$AA.nextSibling.data = t5 : this.T(r2.createTextNode(t5)), this._$AH = t5;
        }
        $(t5) {
          const { values: i5, _$litType$: s5 } = t5, e5 = "number" == typeof s5 ? this._$AC(t5) : (void 0 === s5.el && (s5.el = V2.createElement(C2(s5.h, s5.h[0]), this.options)), s5);
          if (this._$AH?._$AD === e5)
            this._$AH.p(i5);
          else {
            const t6 = new S2(e5, this), s6 = t6.u(this.options);
            t6.p(i5), this.T(s6), this._$AH = t6;
          }
        }
        _$AC(t5) {
          let i5 = A2.get(t5.strings);
          return void 0 === i5 && A2.set(t5.strings, i5 = new V2(t5)), i5;
        }
        k(t5) {
          a2(this._$AH) || (this._$AH = [], this._$AR());
          const i5 = this._$AH;
          let s5, e5 = 0;
          for (const h5 of t5)
            e5 === i5.length ? i5.push(s5 = new _M(this.S(l2()), this.S(l2()), this, this.options)) : s5 = i5[e5], s5._$AI(h5), e5++;
          e5 < i5.length && (this._$AR(s5 && s5._$AB.nextSibling, e5), i5.length = e5);
        }
        _$AR(t5 = this._$AA.nextSibling, i5) {
          for (this._$AP?.(false, true, i5); t5 && t5 !== this._$AB; ) {
            const i6 = t5.nextSibling;
            t5.remove(), t5 = i6;
          }
        }
        setConnected(t5) {
          void 0 === this._$AM && (this._$Cv = t5, this._$AP?.(t5));
        }
      };
      R2 = class {
        get tagName() {
          return this.element.tagName;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        constructor(t5, i5, s5, e5, h5) {
          this.type = 1, this._$AH = T2, this._$AN = void 0, this.element = t5, this.name = i5, this._$AM = e5, this.options = h5, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = T2;
        }
        _$AI(t5, i5 = this, s5, e5) {
          const h5 = this.strings;
          let o5 = false;
          if (void 0 === h5)
            t5 = N2(this, t5, i5, 0), o5 = !c2(t5) || t5 !== this._$AH && t5 !== w2, o5 && (this._$AH = t5);
          else {
            const e6 = t5;
            let n5, r5;
            for (t5 = h5[0], n5 = 0; n5 < h5.length - 1; n5++)
              r5 = N2(this, e6[s5 + n5], i5, n5), r5 === w2 && (r5 = this._$AH[n5]), o5 ||= !c2(r5) || r5 !== this._$AH[n5], r5 === T2 ? t5 = T2 : t5 !== T2 && (t5 += (r5 ?? "") + h5[n5 + 1]), this._$AH[n5] = r5;
          }
          o5 && !e5 && this.j(t5);
        }
        j(t5) {
          t5 === T2 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t5 ?? "");
        }
      };
      k2 = class extends R2 {
        constructor() {
          super(...arguments), this.type = 3;
        }
        j(t5) {
          this.element[this.name] = t5 === T2 ? void 0 : t5;
        }
      };
      H2 = class extends R2 {
        constructor() {
          super(...arguments), this.type = 4;
        }
        j(t5) {
          this.element.toggleAttribute(this.name, !!t5 && t5 !== T2);
        }
      };
      I2 = class extends R2 {
        constructor(t5, i5, s5, e5, h5) {
          super(t5, i5, s5, e5, h5), this.type = 5;
        }
        _$AI(t5, i5 = this) {
          if ((t5 = N2(this, t5, i5, 0) ?? T2) === w2)
            return;
          const s5 = this._$AH, e5 = t5 === T2 && s5 !== T2 || t5.capture !== s5.capture || t5.once !== s5.once || t5.passive !== s5.passive, h5 = t5 !== T2 && (s5 === T2 || e5);
          e5 && this.element.removeEventListener(this.name, this, s5), h5 && this.element.addEventListener(this.name, this, t5), this._$AH = t5;
        }
        handleEvent(t5) {
          "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t5) : this._$AH.handleEvent(t5);
        }
      };
      L2 = class {
        constructor(t5, i5, s5) {
          this.element = t5, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s5;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(t5) {
          N2(this, t5);
        }
      };
      Z2 = t2.litHtmlPolyfillSupport;
      Z2?.(V2, M2), (t2.litHtmlVersions ??= []).push("3.1.2");
      j2 = (t5, i5, s5) => {
        const e5 = s5?.renderBefore ?? i5;
        let h5 = e5._$litPart$;
        if (void 0 === h5) {
          const t6 = s5?.renderBefore ?? null;
          e5._$litPart$ = h5 = new M2(i5.insertBefore(l2(), t6), t6, void 0, s5 ?? {});
        }
        return h5._$AI(t5), h5;
      };
      _$1 = (...args) => {
        console.log(...args);
        return args[args.length - 1];
      };
      html = x2;
      _2 = _$1;
      $2 = (selector) => {
        const el = document.querySelector(selector);
        el.render = (template) => {
          const content = typeof template === "function" ? template() : template;
          j2(content, el);
        };
        el.inject = (template) => {
          const tempContainer = document.createElement("template");
          const content = typeof template === "function" ? template() : template;
          j2(content, tempContainer.content);
          el.appendChild(tempContainer.content.cloneNode(true));
        };
        el.on = (event, handler) => el.addEventListener(event, handler);
        el.click = (handler) => el.addEventListener("click", handler);
        el.hide = () => el.style.display = "none";
        el.show = () => el.style.display = "";
        el.toggle = () => el.style.display = el.style.display === "none" ? "" : "none";
        el.addClass = (className) => el.classList.add(className);
        el.removeClass = (className) => el.classList.remove(className);
        el.hasClass = (className) => el.classList.contains(className);
        el.attr = (name, value) => value === void 0 ? el.getAttribute(name) : el.setAttribute(name, value);
        el.css = (styleName, value) => value === void 0 ? getComputedStyle(el).getPropertyValue(styleName) : el.style[styleName] = value;
        el.remove = () => el.parentNode.removeChild(el);
        el.scrollTo = (options) => el.scrollIntoView(options);
        el.id = () => el.getAttribute("id");
        return el;
      };
      $$ = (selector) => {
        const elements = document.querySelectorAll(selector);
        elements.hide = () => elements.forEach((el) => el.style.display = "none");
        elements.show = () => elements.forEach((el) => el.style.display = "");
        return elements;
      };
      exports.$ = $2;
      exports.$$ = $$;
      exports._ = _2;
      exports.html = html;
    }
  });

  // node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
  var getHttpHandlerExtensionConfiguration, resolveHttpHandlerRuntimeConfig;
  var init_httpExtensionConfiguration = __esm({
    "node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js"() {
      getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
        let httpHandler = runtimeConfig.httpHandler;
        return {
          setHttpHandler(handler) {
            httpHandler = handler;
          },
          httpHandler() {
            return httpHandler;
          },
          updateHttpClientConfig(key, value) {
            httpHandler.updateHttpClientConfig(key, value);
          },
          httpHandlerConfigs() {
            return httpHandler.httpHandlerConfigs();
          }
        };
      };
      resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
        return {
          httpHandler: httpHandlerExtensionConfiguration.httpHandler()
        };
      };
    }
  });

  // node_modules/@smithy/protocol-http/dist-es/extensions/index.js
  var init_extensions = __esm({
    "node_modules/@smithy/protocol-http/dist-es/extensions/index.js"() {
      init_httpExtensionConfiguration();
    }
  });

  // node_modules/@smithy/types/dist-es/abort.js
  var init_abort = __esm({
    "node_modules/@smithy/types/dist-es/abort.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/auth/auth.js
  var HttpAuthLocation;
  var init_auth = __esm({
    "node_modules/@smithy/types/dist-es/auth/auth.js"() {
      (function(HttpAuthLocation2) {
        HttpAuthLocation2["HEADER"] = "header";
        HttpAuthLocation2["QUERY"] = "query";
      })(HttpAuthLocation || (HttpAuthLocation = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
  var HttpApiKeyAuthLocation;
  var init_HttpApiKeyAuth = __esm({
    "node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js"() {
      (function(HttpApiKeyAuthLocation2) {
        HttpApiKeyAuthLocation2["HEADER"] = "header";
        HttpApiKeyAuthLocation2["QUERY"] = "query";
      })(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js
  var init_HttpAuthScheme = __esm({
    "node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js
  var init_HttpAuthSchemeProvider = __esm({
    "node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/auth/HttpSigner.js
  var init_HttpSigner = __esm({
    "node_modules/@smithy/types/dist-es/auth/HttpSigner.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js
  var init_IdentityProviderConfig = __esm({
    "node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/auth/index.js
  var init_auth2 = __esm({
    "node_modules/@smithy/types/dist-es/auth/index.js"() {
      init_auth();
      init_HttpApiKeyAuth();
      init_HttpAuthScheme();
      init_HttpAuthSchemeProvider();
      init_HttpSigner();
      init_IdentityProviderConfig();
    }
  });

  // node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js
  var init_blob_payload_input_types = __esm({
    "node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/checksum.js
  var init_checksum = __esm({
    "node_modules/@smithy/types/dist-es/checksum.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/client.js
  var init_client = __esm({
    "node_modules/@smithy/types/dist-es/client.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/command.js
  var init_command = __esm({
    "node_modules/@smithy/types/dist-es/command.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/connection/config.js
  var init_config = __esm({
    "node_modules/@smithy/types/dist-es/connection/config.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/connection/manager.js
  var init_manager = __esm({
    "node_modules/@smithy/types/dist-es/connection/manager.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/connection/pool.js
  var init_pool = __esm({
    "node_modules/@smithy/types/dist-es/connection/pool.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/connection/index.js
  var init_connection = __esm({
    "node_modules/@smithy/types/dist-es/connection/index.js"() {
      init_config();
      init_manager();
      init_pool();
    }
  });

  // node_modules/@smithy/types/dist-es/crypto.js
  var init_crypto = __esm({
    "node_modules/@smithy/types/dist-es/crypto.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/encode.js
  var init_encode = __esm({
    "node_modules/@smithy/types/dist-es/encode.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/endpoint.js
  var EndpointURLScheme;
  var init_endpoint = __esm({
    "node_modules/@smithy/types/dist-es/endpoint.js"() {
      (function(EndpointURLScheme2) {
        EndpointURLScheme2["HTTP"] = "http";
        EndpointURLScheme2["HTTPS"] = "https";
      })(EndpointURLScheme || (EndpointURLScheme = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js
  var init_EndpointRuleObject = __esm({
    "node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js
  var init_ErrorRuleObject = __esm({
    "node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js
  var init_RuleSetObject = __esm({
    "node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/endpoints/shared.js
  var init_shared = __esm({
    "node_modules/@smithy/types/dist-es/endpoints/shared.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js
  var init_TreeRuleObject = __esm({
    "node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/endpoints/index.js
  var init_endpoints = __esm({
    "node_modules/@smithy/types/dist-es/endpoints/index.js"() {
      init_EndpointRuleObject();
      init_ErrorRuleObject();
      init_RuleSetObject();
      init_shared();
      init_TreeRuleObject();
    }
  });

  // node_modules/@smithy/types/dist-es/eventStream.js
  var init_eventStream = __esm({
    "node_modules/@smithy/types/dist-es/eventStream.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/extensions/checksum.js
  var AlgorithmId;
  var init_checksum2 = __esm({
    "node_modules/@smithy/types/dist-es/extensions/checksum.js"() {
      (function(AlgorithmId2) {
        AlgorithmId2["MD5"] = "md5";
        AlgorithmId2["CRC32"] = "crc32";
        AlgorithmId2["CRC32C"] = "crc32c";
        AlgorithmId2["SHA1"] = "sha1";
        AlgorithmId2["SHA256"] = "sha256";
      })(AlgorithmId || (AlgorithmId = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js
  var init_defaultClientConfiguration = __esm({
    "node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js"() {
      init_checksum2();
    }
  });

  // node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js
  var init_defaultExtensionConfiguration = __esm({
    "node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/extensions/index.js
  var init_extensions2 = __esm({
    "node_modules/@smithy/types/dist-es/extensions/index.js"() {
      init_defaultClientConfiguration();
      init_defaultExtensionConfiguration();
      init_checksum2();
    }
  });

  // node_modules/@smithy/types/dist-es/http.js
  var FieldPosition;
  var init_http = __esm({
    "node_modules/@smithy/types/dist-es/http.js"() {
      (function(FieldPosition2) {
        FieldPosition2[FieldPosition2["HEADER"] = 0] = "HEADER";
        FieldPosition2[FieldPosition2["TRAILER"] = 1] = "TRAILER";
      })(FieldPosition || (FieldPosition = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js
  var init_httpHandlerInitialization = __esm({
    "node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js
  var init_apiKeyIdentity = __esm({
    "node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js
  var init_awsCredentialIdentity = __esm({
    "node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/identity/identity.js
  var init_identity = __esm({
    "node_modules/@smithy/types/dist-es/identity/identity.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/identity/tokenIdentity.js
  var init_tokenIdentity = __esm({
    "node_modules/@smithy/types/dist-es/identity/tokenIdentity.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/identity/index.js
  var init_identity2 = __esm({
    "node_modules/@smithy/types/dist-es/identity/index.js"() {
      init_apiKeyIdentity();
      init_awsCredentialIdentity();
      init_identity();
      init_tokenIdentity();
    }
  });

  // node_modules/@smithy/types/dist-es/logger.js
  var init_logger = __esm({
    "node_modules/@smithy/types/dist-es/logger.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/middleware.js
  var SMITHY_CONTEXT_KEY;
  var init_middleware = __esm({
    "node_modules/@smithy/types/dist-es/middleware.js"() {
      SMITHY_CONTEXT_KEY = "__smithy_context";
    }
  });

  // node_modules/@smithy/types/dist-es/pagination.js
  var init_pagination = __esm({
    "node_modules/@smithy/types/dist-es/pagination.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/profile.js
  var IniSectionType;
  var init_profile = __esm({
    "node_modules/@smithy/types/dist-es/profile.js"() {
      (function(IniSectionType2) {
        IniSectionType2["PROFILE"] = "profile";
        IniSectionType2["SSO_SESSION"] = "sso-session";
        IniSectionType2["SERVICES"] = "services";
      })(IniSectionType || (IniSectionType = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/response.js
  var init_response = __esm({
    "node_modules/@smithy/types/dist-es/response.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/retry.js
  var init_retry = __esm({
    "node_modules/@smithy/types/dist-es/retry.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/serde.js
  var init_serde = __esm({
    "node_modules/@smithy/types/dist-es/serde.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/shapes.js
  var init_shapes = __esm({
    "node_modules/@smithy/types/dist-es/shapes.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/signature.js
  var init_signature = __esm({
    "node_modules/@smithy/types/dist-es/signature.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/stream.js
  var init_stream = __esm({
    "node_modules/@smithy/types/dist-es/stream.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js
  var init_streaming_blob_common_types = __esm({
    "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js
  var init_streaming_blob_payload_input_types = __esm({
    "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js
  var init_streaming_blob_payload_output_types = __esm({
    "node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/transfer.js
  var RequestHandlerProtocol;
  var init_transfer = __esm({
    "node_modules/@smithy/types/dist-es/transfer.js"() {
      (function(RequestHandlerProtocol2) {
        RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
        RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
        RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
      })(RequestHandlerProtocol || (RequestHandlerProtocol = {}));
    }
  });

  // node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js
  var init_client_payload_blob_type_narrow = __esm({
    "node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/transform/no-undefined.js
  var init_no_undefined = __esm({
    "node_modules/@smithy/types/dist-es/transform/no-undefined.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/transform/type-transform.js
  var init_type_transform = __esm({
    "node_modules/@smithy/types/dist-es/transform/type-transform.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/uri.js
  var init_uri = __esm({
    "node_modules/@smithy/types/dist-es/uri.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/util.js
  var init_util = __esm({
    "node_modules/@smithy/types/dist-es/util.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/waiter.js
  var init_waiter = __esm({
    "node_modules/@smithy/types/dist-es/waiter.js"() {
    }
  });

  // node_modules/@smithy/types/dist-es/index.js
  var init_dist_es = __esm({
    "node_modules/@smithy/types/dist-es/index.js"() {
      init_abort();
      init_auth2();
      init_blob_payload_input_types();
      init_checksum();
      init_client();
      init_command();
      init_connection();
      init_crypto();
      init_encode();
      init_endpoint();
      init_endpoints();
      init_eventStream();
      init_extensions2();
      init_http();
      init_httpHandlerInitialization();
      init_identity2();
      init_logger();
      init_middleware();
      init_pagination();
      init_profile();
      init_response();
      init_retry();
      init_serde();
      init_shapes();
      init_signature();
      init_stream();
      init_streaming_blob_common_types();
      init_streaming_blob_payload_input_types();
      init_streaming_blob_payload_output_types();
      init_transfer();
      init_client_payload_blob_type_narrow();
      init_no_undefined();
      init_type_transform();
      init_uri();
      init_util();
      init_waiter();
    }
  });

  // node_modules/@smithy/protocol-http/dist-es/Field.js
  var init_Field = __esm({
    "node_modules/@smithy/protocol-http/dist-es/Field.js"() {
      init_dist_es();
    }
  });

  // node_modules/@smithy/protocol-http/dist-es/Fields.js
  var init_Fields = __esm({
    "node_modules/@smithy/protocol-http/dist-es/Fields.js"() {
    }
  });

  // node_modules/@smithy/protocol-http/dist-es/httpHandler.js
  var init_httpHandler = __esm({
    "node_modules/@smithy/protocol-http/dist-es/httpHandler.js"() {
    }
  });

  // node_modules/@smithy/protocol-http/dist-es/httpRequest.js
  function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName) => {
      const param = query[paramName];
      return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param
      };
    }, {});
  }
  var HttpRequest;
  var init_httpRequest = __esm({
    "node_modules/@smithy/protocol-http/dist-es/httpRequest.js"() {
      HttpRequest = class _HttpRequest {
        constructor(options) {
          this.method = options.method || "GET";
          this.hostname = options.hostname || "localhost";
          this.port = options.port;
          this.query = options.query || {};
          this.headers = options.headers || {};
          this.body = options.body;
          this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
          this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
          this.username = options.username;
          this.password = options.password;
          this.fragment = options.fragment;
        }
        static isInstance(request) {
          if (!request)
            return false;
          const req = request;
          return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
        }
        clone() {
          const cloned = new _HttpRequest({
            ...this,
            headers: { ...this.headers }
          });
          if (cloned.query)
            cloned.query = cloneQuery(cloned.query);
          return cloned;
        }
      };
    }
  });

  // node_modules/@smithy/protocol-http/dist-es/httpResponse.js
  var HttpResponse;
  var init_httpResponse = __esm({
    "node_modules/@smithy/protocol-http/dist-es/httpResponse.js"() {
      HttpResponse = class {
        constructor(options) {
          this.statusCode = options.statusCode;
          this.reason = options.reason;
          this.headers = options.headers || {};
          this.body = options.body;
        }
        static isInstance(response) {
          if (!response)
            return false;
          const resp = response;
          return typeof resp.statusCode === "number" && typeof resp.headers === "object";
        }
      };
    }
  });

  // node_modules/@smithy/protocol-http/dist-es/isValidHostname.js
  var init_isValidHostname = __esm({
    "node_modules/@smithy/protocol-http/dist-es/isValidHostname.js"() {
    }
  });

  // node_modules/@smithy/protocol-http/dist-es/types.js
  var init_types = __esm({
    "node_modules/@smithy/protocol-http/dist-es/types.js"() {
    }
  });

  // node_modules/@smithy/protocol-http/dist-es/index.js
  var init_dist_es2 = __esm({
    "node_modules/@smithy/protocol-http/dist-es/index.js"() {
      init_extensions();
      init_Field();
      init_Fields();
      init_httpHandler();
      init_httpRequest();
      init_httpResponse();
      init_isValidHostname();
      init_types();
    }
  });

  // node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
  function resolveHostHeaderConfig(input) {
    return input;
  }
  var hostHeaderMiddleware, hostHeaderMiddlewareOptions, getHostHeaderPlugin;
  var init_dist_es3 = __esm({
    "node_modules/@aws-sdk/middleware-host-header/dist-es/index.js"() {
      init_dist_es2();
      hostHeaderMiddleware = (options) => (next) => async (args) => {
        if (!HttpRequest.isInstance(args.request))
          return next(args);
        const { request } = args;
        const { handlerProtocol = "" } = options.requestHandler.metadata || {};
        if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
          delete request.headers["host"];
          request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
        } else if (!request.headers["host"]) {
          let host = request.hostname;
          if (request.port != null)
            host += `:${request.port}`;
          request.headers["host"] = host;
        }
        return next(args);
      };
      hostHeaderMiddlewareOptions = {
        name: "hostHeaderMiddleware",
        step: "build",
        priority: "low",
        tags: ["HOST"],
        override: true
      };
      getHostHeaderPlugin = (options) => ({
        applyToStack: (clientStack) => {
          clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
        }
      });
    }
  });

  // node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
  var loggerMiddleware, loggerMiddlewareOptions, getLoggerPlugin;
  var init_loggerMiddleware = __esm({
    "node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js"() {
      loggerMiddleware = () => (next, context) => async (args) => {
        try {
          const response = await next(args);
          const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
          const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
          const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
          const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
          const { $metadata, ...outputWithoutMetadata } = response.output;
          logger2?.info?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            output: outputFilterSensitiveLog(outputWithoutMetadata),
            metadata: $metadata
          });
          return response;
        } catch (error) {
          const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context;
          const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
          const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
          logger2?.error?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            error,
            metadata: error.$metadata
          });
          throw error;
        }
      };
      loggerMiddlewareOptions = {
        name: "loggerMiddleware",
        tags: ["LOGGER"],
        step: "initialize",
        override: true
      };
      getLoggerPlugin = (options) => ({
        applyToStack: (clientStack) => {
          clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
        }
      });
    }
  });

  // node_modules/@aws-sdk/middleware-logger/dist-es/index.js
  var init_dist_es4 = __esm({
    "node_modules/@aws-sdk/middleware-logger/dist-es/index.js"() {
      init_loggerMiddleware();
    }
  });

  // node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js
  var TRACE_ID_HEADER_NAME, ENV_LAMBDA_FUNCTION_NAME, ENV_TRACE_ID, recursionDetectionMiddleware, addRecursionDetectionMiddlewareOptions, getRecursionDetectionPlugin;
  var init_dist_es5 = __esm({
    "node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js"() {
      init_dist_es2();
      TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
      ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
      ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
      recursionDetectionMiddleware = (options) => (next) => async (args) => {
        const { request } = args;
        if (!HttpRequest.isInstance(request) || options.runtime !== "node" || request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
          return next(args);
        }
        const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
        const traceId = process.env[ENV_TRACE_ID];
        const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
        if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
          request.headers[TRACE_ID_HEADER_NAME] = traceId;
        }
        return next({
          ...args,
          request
        });
      };
      addRecursionDetectionMiddlewareOptions = {
        step: "build",
        tags: ["RECURSION_DETECTION"],
        name: "recursionDetectionMiddleware",
        override: true,
        priority: "low"
      };
      getRecursionDetectionPlugin = (options) => ({
        applyToStack: (clientStack) => {
          clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
        }
      });
    }
  });

  // node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
  function resolveUserAgentConfig(input) {
    return {
      ...input,
      customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent
    };
  }
  var init_configurations = __esm({
    "node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js"() {
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js
  var IP_V4_REGEX, isIpAddress;
  var init_isIpAddress = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js"() {
      IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
      isIpAddress = (value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]");
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js
  var VALID_HOST_LABEL_REGEX, isValidHostLabel;
  var init_isValidHostLabel = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js"() {
      VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
      isValidHostLabel = (value, allowSubDomains = false) => {
        if (!allowSubDomains) {
          return VALID_HOST_LABEL_REGEX.test(value);
        }
        const labels = value.split(".");
        for (const label of labels) {
          if (!isValidHostLabel(label)) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js
  var customEndpointFunctions;
  var init_customEndpointFunctions = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js"() {
      customEndpointFunctions = {};
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js
  var debugId;
  var init_debugId = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js"() {
      debugId = "endpoints";
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js
  function toDebugString(input) {
    if (typeof input !== "object" || input == null) {
      return input;
    }
    if ("ref" in input) {
      return `$${toDebugString(input.ref)}`;
    }
    if ("fn" in input) {
      return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
    }
    return JSON.stringify(input, null, 2);
  }
  var init_toDebugString = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js"() {
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/debug/index.js
  var init_debug = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/debug/index.js"() {
      init_debugId();
      init_toDebugString();
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js
  var EndpointError;
  var init_EndpointError = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js"() {
      EndpointError = class extends Error {
        constructor(message) {
          super(message);
          this.name = "EndpointError";
        }
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js
  var init_EndpointFunctions = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js"() {
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js
  var init_EndpointRuleObject2 = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js"() {
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js
  var init_ErrorRuleObject2 = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js"() {
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js
  var init_RuleSetObject2 = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js"() {
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js
  var init_TreeRuleObject2 = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js"() {
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/types/shared.js
  var init_shared2 = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/types/shared.js"() {
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/types/index.js
  var init_types2 = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/types/index.js"() {
      init_EndpointError();
      init_EndpointFunctions();
      init_EndpointRuleObject2();
      init_ErrorRuleObject2();
      init_RuleSetObject2();
      init_TreeRuleObject2();
      init_shared2();
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js
  var booleanEquals;
  var init_booleanEquals = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js"() {
      booleanEquals = (value1, value2) => value1 === value2;
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js
  var getAttrPathList;
  var init_getAttrPathList = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js"() {
      init_types2();
      getAttrPathList = (path) => {
        const parts = path.split(".");
        const pathList = [];
        for (const part of parts) {
          const squareBracketIndex = part.indexOf("[");
          if (squareBracketIndex !== -1) {
            if (part.indexOf("]") !== part.length - 1) {
              throw new EndpointError(`Path: '${path}' does not end with ']'`);
            }
            const arrayIndex = part.slice(squareBracketIndex + 1, -1);
            if (Number.isNaN(parseInt(arrayIndex))) {
              throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
            }
            if (squareBracketIndex !== 0) {
              pathList.push(part.slice(0, squareBracketIndex));
            }
            pathList.push(arrayIndex);
          } else {
            pathList.push(part);
          }
        }
        return pathList;
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js
  var getAttr;
  var init_getAttr = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js"() {
      init_types2();
      init_getAttrPathList();
      getAttr = (value, path) => getAttrPathList(path).reduce((acc, index) => {
        if (typeof acc !== "object") {
          throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
        } else if (Array.isArray(acc)) {
          return acc[parseInt(index)];
        }
        return acc[index];
      }, value);
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js
  var isSet;
  var init_isSet = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js"() {
      isSet = (value) => value != null;
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/not.js
  var not;
  var init_not = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/not.js"() {
      not = (value) => !value;
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js
  var DEFAULT_PORTS, parseURL;
  var init_parseURL = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js"() {
      init_dist_es();
      init_isIpAddress();
      DEFAULT_PORTS = {
        [EndpointURLScheme.HTTP]: 80,
        [EndpointURLScheme.HTTPS]: 443
      };
      parseURL = (value) => {
        const whatwgURL = (() => {
          try {
            if (value instanceof URL) {
              return value;
            }
            if (typeof value === "object" && "hostname" in value) {
              const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
              const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
              url.search = Object.entries(query).map(([k5, v6]) => `${k5}=${v6}`).join("&");
              return url;
            }
            return new URL(value);
          } catch (error) {
            return null;
          }
        })();
        if (!whatwgURL) {
          console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
          return null;
        }
        const urlString = whatwgURL.href;
        const { host, hostname, pathname, protocol, search } = whatwgURL;
        if (search) {
          return null;
        }
        const scheme = protocol.slice(0, -1);
        if (!Object.values(EndpointURLScheme).includes(scheme)) {
          return null;
        }
        const isIp = isIpAddress(hostname);
        const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
        const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
        return {
          scheme,
          authority,
          path: pathname,
          normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
          isIp
        };
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js
  var stringEquals;
  var init_stringEquals = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js"() {
      stringEquals = (value1, value2) => value1 === value2;
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/substring.js
  var substring;
  var init_substring = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/substring.js"() {
      substring = (input, start, stop, reverse) => {
        if (start >= stop || input.length < stop) {
          return null;
        }
        if (!reverse) {
          return input.substring(start, stop);
        }
        return input.substring(input.length - stop, input.length - start);
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js
  var uriEncode;
  var init_uriEncode = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js"() {
      uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c5) => `%${c5.charCodeAt(0).toString(16).toUpperCase()}`);
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/lib/index.js
  var init_lib = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/lib/index.js"() {
      init_booleanEquals();
      init_getAttr();
      init_isSet();
      init_isValidHostLabel();
      init_not();
      init_parseURL();
      init_stringEquals();
      init_substring();
      init_uriEncode();
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js
  var endpointFunctions;
  var init_endpointFunctions = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js"() {
      init_lib();
      endpointFunctions = {
        booleanEquals,
        getAttr,
        isSet,
        isValidHostLabel,
        not,
        parseURL,
        stringEquals,
        substring,
        uriEncode
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js
  var evaluateTemplate;
  var init_evaluateTemplate = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js"() {
      init_lib();
      evaluateTemplate = (template, options) => {
        const evaluatedTemplateArr = [];
        const templateContext = {
          ...options.endpointParams,
          ...options.referenceRecord
        };
        let currentIndex = 0;
        while (currentIndex < template.length) {
          const openingBraceIndex = template.indexOf("{", currentIndex);
          if (openingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(currentIndex));
            break;
          }
          evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
          const closingBraceIndex = template.indexOf("}", openingBraceIndex);
          if (closingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex));
            break;
          }
          if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
            currentIndex = closingBraceIndex + 2;
          }
          const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
          if (parameterName.includes("#")) {
            const [refName, attrName] = parameterName.split("#");
            evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
          } else {
            evaluatedTemplateArr.push(templateContext[parameterName]);
          }
          currentIndex = closingBraceIndex + 1;
        }
        return evaluatedTemplateArr.join("");
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js
  var getReferenceValue;
  var init_getReferenceValue = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js"() {
      getReferenceValue = ({ ref }, options) => {
        const referenceRecord = {
          ...options.endpointParams,
          ...options.referenceRecord
        };
        return referenceRecord[ref];
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js
  var evaluateExpression;
  var init_evaluateExpression = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js"() {
      init_types2();
      init_callFunction();
      init_evaluateTemplate();
      init_getReferenceValue();
      evaluateExpression = (obj, keyName, options) => {
        if (typeof obj === "string") {
          return evaluateTemplate(obj, options);
        } else if (obj["fn"]) {
          return callFunction(obj, options);
        } else if (obj["ref"]) {
          return getReferenceValue(obj, options);
        }
        throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js
  var callFunction;
  var init_callFunction = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js"() {
      init_customEndpointFunctions();
      init_endpointFunctions();
      init_evaluateExpression();
      callFunction = ({ fn, argv }, options) => {
        const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options));
        const fnSegments = fn.split(".");
        if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) {
          return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
        }
        return endpointFunctions[fn](...evaluatedArgs);
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js
  var evaluateCondition;
  var init_evaluateCondition = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js"() {
      init_debug();
      init_types2();
      init_callFunction();
      evaluateCondition = ({ assign, ...fnArgs }, options) => {
        if (assign && assign in options.referenceRecord) {
          throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
        }
        const value = callFunction(fnArgs, options);
        options.logger?.debug?.(debugId, `evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
        return {
          result: value === "" ? true : !!value,
          ...assign != null && { toAssign: { name: assign, value } }
        };
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js
  var evaluateConditions;
  var init_evaluateConditions = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js"() {
      init_debug();
      init_evaluateCondition();
      evaluateConditions = (conditions = [], options) => {
        const conditionsReferenceRecord = {};
        for (const condition of conditions) {
          const { result, toAssign } = evaluateCondition(condition, {
            ...options,
            referenceRecord: {
              ...options.referenceRecord,
              ...conditionsReferenceRecord
            }
          });
          if (!result) {
            return { result };
          }
          if (toAssign) {
            conditionsReferenceRecord[toAssign.name] = toAssign.value;
            options.logger?.debug?.(debugId, `assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
          }
        }
        return { result: true, referenceRecord: conditionsReferenceRecord };
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js
  var getEndpointHeaders;
  var init_getEndpointHeaders = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js"() {
      init_types2();
      init_evaluateExpression();
      getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
        ...acc,
        [headerKey]: headerVal.map((headerValEntry) => {
          const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
          if (typeof processedExpr !== "string") {
            throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
          }
          return processedExpr;
        })
      }), {});
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js
  var getEndpointProperty;
  var init_getEndpointProperty = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js"() {
      init_types2();
      init_evaluateTemplate();
      init_getEndpointProperties();
      getEndpointProperty = (property, options) => {
        if (Array.isArray(property)) {
          return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
        }
        switch (typeof property) {
          case "string":
            return evaluateTemplate(property, options);
          case "object":
            if (property === null) {
              throw new EndpointError(`Unexpected endpoint property: ${property}`);
            }
            return getEndpointProperties(property, options);
          case "boolean":
            return property;
          default:
            throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
        }
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js
  var getEndpointProperties;
  var init_getEndpointProperties = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js"() {
      init_getEndpointProperty();
      getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
        ...acc,
        [propertyKey]: getEndpointProperty(propertyVal, options)
      }), {});
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js
  var getEndpointUrl;
  var init_getEndpointUrl = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js"() {
      init_types2();
      init_evaluateExpression();
      getEndpointUrl = (endpointUrl, options) => {
        const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
        if (typeof expression === "string") {
          try {
            return new URL(expression);
          } catch (error) {
            console.error(`Failed to construct URL with ${expression}`, error);
            throw error;
          }
        }
        throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js
  var evaluateEndpointRule;
  var init_evaluateEndpointRule = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js"() {
      init_debug();
      init_evaluateConditions();
      init_getEndpointHeaders();
      init_getEndpointProperties();
      init_getEndpointUrl();
      evaluateEndpointRule = (endpointRule, options) => {
        const { conditions, endpoint } = endpointRule;
        const { result, referenceRecord } = evaluateConditions(conditions, options);
        if (!result) {
          return;
        }
        const endpointRuleOptions = {
          ...options,
          referenceRecord: { ...options.referenceRecord, ...referenceRecord }
        };
        const { url, properties, headers } = endpoint;
        options.logger?.debug?.(debugId, `Resolving endpoint from template: ${toDebugString(endpoint)}`);
        return {
          ...headers != void 0 && {
            headers: getEndpointHeaders(headers, endpointRuleOptions)
          },
          ...properties != void 0 && {
            properties: getEndpointProperties(properties, endpointRuleOptions)
          },
          url: getEndpointUrl(url, endpointRuleOptions)
        };
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js
  var evaluateErrorRule;
  var init_evaluateErrorRule = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js"() {
      init_types2();
      init_evaluateConditions();
      init_evaluateExpression();
      evaluateErrorRule = (errorRule, options) => {
        const { conditions, error } = errorRule;
        const { result, referenceRecord } = evaluateConditions(conditions, options);
        if (!result) {
          return;
        }
        throw new EndpointError(evaluateExpression(error, "Error", {
          ...options,
          referenceRecord: { ...options.referenceRecord, ...referenceRecord }
        }));
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js
  var evaluateTreeRule;
  var init_evaluateTreeRule = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js"() {
      init_evaluateConditions();
      init_evaluateRules();
      evaluateTreeRule = (treeRule, options) => {
        const { conditions, rules } = treeRule;
        const { result, referenceRecord } = evaluateConditions(conditions, options);
        if (!result) {
          return;
        }
        return evaluateRules(rules, {
          ...options,
          referenceRecord: { ...options.referenceRecord, ...referenceRecord }
        });
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js
  var evaluateRules;
  var init_evaluateRules = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js"() {
      init_types2();
      init_evaluateEndpointRule();
      init_evaluateErrorRule();
      init_evaluateTreeRule();
      evaluateRules = (rules, options) => {
        for (const rule of rules) {
          if (rule.type === "endpoint") {
            const endpointOrUndefined = evaluateEndpointRule(rule, options);
            if (endpointOrUndefined) {
              return endpointOrUndefined;
            }
          } else if (rule.type === "error") {
            evaluateErrorRule(rule, options);
          } else if (rule.type === "tree") {
            const endpointOrUndefined = evaluateTreeRule(rule, options);
            if (endpointOrUndefined) {
              return endpointOrUndefined;
            }
          } else {
            throw new EndpointError(`Unknown endpoint rule: ${rule}`);
          }
        }
        throw new EndpointError(`Rules evaluation failed`);
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/utils/index.js
  var init_utils = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/utils/index.js"() {
      init_customEndpointFunctions();
      init_evaluateRules();
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js
  var resolveEndpoint;
  var init_resolveEndpoint = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js"() {
      init_debug();
      init_types2();
      init_utils();
      resolveEndpoint = (ruleSetObject, options) => {
        const { endpointParams, logger: logger2 } = options;
        const { parameters, rules } = ruleSetObject;
        options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
        const paramsWithDefault = Object.entries(parameters).filter(([, v6]) => v6.default != null).map(([k5, v6]) => [k5, v6.default]);
        if (paramsWithDefault.length > 0) {
          for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
            endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
          }
        }
        const requiredParams = Object.entries(parameters).filter(([, v6]) => v6.required).map(([k5]) => k5);
        for (const requiredParam of requiredParams) {
          if (endpointParams[requiredParam] == null) {
            throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
          }
        }
        const endpoint = evaluateRules(rules, { endpointParams, logger: logger2, referenceRecord: {} });
        if (options.endpointParams?.Endpoint) {
          try {
            const givenEndpoint = new URL(options.endpointParams.Endpoint);
            const { protocol, port } = givenEndpoint;
            endpoint.url.protocol = protocol;
            endpoint.url.port = port;
          } catch (e5) {
          }
        }
        options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
        return endpoint;
      };
    }
  });

  // node_modules/@smithy/util-endpoints/dist-es/index.js
  var init_dist_es6 = __esm({
    "node_modules/@smithy/util-endpoints/dist-es/index.js"() {
      init_isIpAddress();
      init_isValidHostLabel();
      init_customEndpointFunctions();
      init_resolveEndpoint();
      init_types2();
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js
  var init_isIpAddress2 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js"() {
      init_dist_es6();
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
  var isVirtualHostableS3Bucket;
  var init_isVirtualHostableS3Bucket = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js"() {
      init_dist_es6();
      init_isIpAddress2();
      isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
        if (allowSubDomains) {
          for (const label of value.split(".")) {
            if (!isVirtualHostableS3Bucket(label)) {
              return false;
            }
          }
          return true;
        }
        if (!isValidHostLabel(value)) {
          return false;
        }
        if (value.length < 3 || value.length > 63) {
          return false;
        }
        if (value !== value.toLowerCase()) {
          return false;
        }
        if (isIpAddress(value)) {
          return false;
        }
        return true;
      };
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
  var parseArn;
  var init_parseArn = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js"() {
      parseArn = (value) => {
        const segments = value.split(":");
        if (segments.length < 6)
          return null;
        const [arn, partition2, service, region, accountId, ...resourceId] = segments;
        if (arn !== "arn" || partition2 === "" || service === "" || resourceId[0] === "")
          return null;
        return {
          partition: partition2,
          service,
          region,
          accountId,
          resourceId: resourceId[0].includes("/") ? resourceId[0].split("/") : resourceId
        };
      };
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
  var partitions_default;
  var init_partitions = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json"() {
      partitions_default = {
        partitions: [{
          id: "aws",
          outputs: {
            dnsSuffix: "amazonaws.com",
            dualStackDnsSuffix: "api.aws",
            implicitGlobalRegion: "us-east-1",
            name: "aws",
            supportsDualStack: true,
            supportsFIPS: true
          },
          regionRegex: "^(us|eu|ap|sa|ca|me|af|il)\\-\\w+\\-\\d+$",
          regions: {
            "af-south-1": {
              description: "Africa (Cape Town)"
            },
            "ap-east-1": {
              description: "Asia Pacific (Hong Kong)"
            },
            "ap-northeast-1": {
              description: "Asia Pacific (Tokyo)"
            },
            "ap-northeast-2": {
              description: "Asia Pacific (Seoul)"
            },
            "ap-northeast-3": {
              description: "Asia Pacific (Osaka)"
            },
            "ap-south-1": {
              description: "Asia Pacific (Mumbai)"
            },
            "ap-south-2": {
              description: "Asia Pacific (Hyderabad)"
            },
            "ap-southeast-1": {
              description: "Asia Pacific (Singapore)"
            },
            "ap-southeast-2": {
              description: "Asia Pacific (Sydney)"
            },
            "ap-southeast-3": {
              description: "Asia Pacific (Jakarta)"
            },
            "ap-southeast-4": {
              description: "Asia Pacific (Melbourne)"
            },
            "aws-global": {
              description: "AWS Standard global region"
            },
            "ca-central-1": {
              description: "Canada (Central)"
            },
            "ca-west-1": {
              description: "Canada West (Calgary)"
            },
            "eu-central-1": {
              description: "Europe (Frankfurt)"
            },
            "eu-central-2": {
              description: "Europe (Zurich)"
            },
            "eu-north-1": {
              description: "Europe (Stockholm)"
            },
            "eu-south-1": {
              description: "Europe (Milan)"
            },
            "eu-south-2": {
              description: "Europe (Spain)"
            },
            "eu-west-1": {
              description: "Europe (Ireland)"
            },
            "eu-west-2": {
              description: "Europe (London)"
            },
            "eu-west-3": {
              description: "Europe (Paris)"
            },
            "il-central-1": {
              description: "Israel (Tel Aviv)"
            },
            "me-central-1": {
              description: "Middle East (UAE)"
            },
            "me-south-1": {
              description: "Middle East (Bahrain)"
            },
            "sa-east-1": {
              description: "South America (Sao Paulo)"
            },
            "us-east-1": {
              description: "US East (N. Virginia)"
            },
            "us-east-2": {
              description: "US East (Ohio)"
            },
            "us-west-1": {
              description: "US West (N. California)"
            },
            "us-west-2": {
              description: "US West (Oregon)"
            }
          }
        }, {
          id: "aws-cn",
          outputs: {
            dnsSuffix: "amazonaws.com.cn",
            dualStackDnsSuffix: "api.amazonwebservices.com.cn",
            implicitGlobalRegion: "cn-northwest-1",
            name: "aws-cn",
            supportsDualStack: true,
            supportsFIPS: true
          },
          regionRegex: "^cn\\-\\w+\\-\\d+$",
          regions: {
            "aws-cn-global": {
              description: "AWS China global region"
            },
            "cn-north-1": {
              description: "China (Beijing)"
            },
            "cn-northwest-1": {
              description: "China (Ningxia)"
            }
          }
        }, {
          id: "aws-us-gov",
          outputs: {
            dnsSuffix: "amazonaws.com",
            dualStackDnsSuffix: "api.aws",
            implicitGlobalRegion: "us-gov-west-1",
            name: "aws-us-gov",
            supportsDualStack: true,
            supportsFIPS: true
          },
          regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
          regions: {
            "aws-us-gov-global": {
              description: "AWS GovCloud (US) global region"
            },
            "us-gov-east-1": {
              description: "AWS GovCloud (US-East)"
            },
            "us-gov-west-1": {
              description: "AWS GovCloud (US-West)"
            }
          }
        }, {
          id: "aws-iso",
          outputs: {
            dnsSuffix: "c2s.ic.gov",
            dualStackDnsSuffix: "c2s.ic.gov",
            implicitGlobalRegion: "us-iso-east-1",
            name: "aws-iso",
            supportsDualStack: false,
            supportsFIPS: true
          },
          regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
          regions: {
            "aws-iso-global": {
              description: "AWS ISO (US) global region"
            },
            "us-iso-east-1": {
              description: "US ISO East"
            },
            "us-iso-west-1": {
              description: "US ISO WEST"
            }
          }
        }, {
          id: "aws-iso-b",
          outputs: {
            dnsSuffix: "sc2s.sgov.gov",
            dualStackDnsSuffix: "sc2s.sgov.gov",
            implicitGlobalRegion: "us-isob-east-1",
            name: "aws-iso-b",
            supportsDualStack: false,
            supportsFIPS: true
          },
          regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
          regions: {
            "aws-iso-b-global": {
              description: "AWS ISOB (US) global region"
            },
            "us-isob-east-1": {
              description: "US ISOB East (Ohio)"
            }
          }
        }, {
          id: "aws-iso-e",
          outputs: {
            dnsSuffix: "cloud.adc-e.uk",
            dualStackDnsSuffix: "cloud.adc-e.uk",
            implicitGlobalRegion: "eu-isoe-west-1",
            name: "aws-iso-e",
            supportsDualStack: false,
            supportsFIPS: true
          },
          regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
          regions: {}
        }, {
          id: "aws-iso-f",
          outputs: {
            dnsSuffix: "csp.hci.ic.gov",
            dualStackDnsSuffix: "csp.hci.ic.gov",
            implicitGlobalRegion: "us-isof-south-1",
            name: "aws-iso-f",
            supportsDualStack: false,
            supportsFIPS: true
          },
          regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
          regions: {}
        }],
        version: "1.1"
      };
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
  var selectedPartitionsInfo, selectedUserAgentPrefix, partition, getUserAgentPrefix;
  var init_partition = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js"() {
      init_partitions();
      selectedPartitionsInfo = partitions_default;
      selectedUserAgentPrefix = "";
      partition = (value) => {
        const { partitions } = selectedPartitionsInfo;
        for (const partition2 of partitions) {
          const { regions, outputs } = partition2;
          for (const [region, regionData] of Object.entries(regions)) {
            if (region === value) {
              return {
                ...outputs,
                ...regionData
              };
            }
          }
        }
        for (const partition2 of partitions) {
          const { regionRegex, outputs } = partition2;
          if (new RegExp(regionRegex).test(value)) {
            return {
              ...outputs
            };
          }
        }
        const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
        if (!DEFAULT_PARTITION) {
          throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
        }
        return {
          ...DEFAULT_PARTITION.outputs
        };
      };
      getUserAgentPrefix = () => selectedUserAgentPrefix;
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/aws.js
  var awsEndpointFunctions;
  var init_aws = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/aws.js"() {
      init_dist_es6();
      init_isVirtualHostableS3Bucket();
      init_parseArn();
      init_partition();
      awsEndpointFunctions = {
        isVirtualHostableS3Bucket,
        parseArn,
        partition
      };
      customEndpointFunctions.aws = awsEndpointFunctions;
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js
  var init_resolveEndpoint2 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js"() {
      init_dist_es6();
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js
  var init_EndpointError2 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js"() {
      init_dist_es6();
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js
  var init_EndpointRuleObject3 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js"() {
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js
  var init_ErrorRuleObject3 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js"() {
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js
  var init_RuleSetObject3 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js"() {
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js
  var init_TreeRuleObject3 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js"() {
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js
  var init_shared3 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js"() {
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js
  var init_types3 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js"() {
      init_EndpointError2();
      init_EndpointRuleObject3();
      init_ErrorRuleObject3();
      init_RuleSetObject3();
      init_TreeRuleObject3();
      init_shared3();
    }
  });

  // node_modules/@aws-sdk/util-endpoints/dist-es/index.js
  var init_dist_es7 = __esm({
    "node_modules/@aws-sdk/util-endpoints/dist-es/index.js"() {
      init_aws();
      init_partition();
      init_isIpAddress2();
      init_resolveEndpoint2();
      init_types3();
    }
  });

  // node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
  var USER_AGENT, X_AMZ_USER_AGENT, SPACE, UA_NAME_SEPARATOR, UA_NAME_ESCAPE_REGEX, UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR;
  var init_constants = __esm({
    "node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js"() {
      USER_AGENT = "user-agent";
      X_AMZ_USER_AGENT = "x-amz-user-agent";
      SPACE = " ";
      UA_NAME_SEPARATOR = "/";
      UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
      UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
      UA_ESCAPE_CHAR = "-";
    }
  });

  // node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
  var userAgentMiddleware, escapeUserAgent, getUserAgentMiddlewareOptions, getUserAgentPlugin;
  var init_user_agent_middleware = __esm({
    "node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js"() {
      init_dist_es7();
      init_dist_es2();
      init_constants();
      userAgentMiddleware = (options) => (next, context) => async (args) => {
        const { request } = args;
        if (!HttpRequest.isInstance(request))
          return next(args);
        const { headers } = request;
        const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
        const defaultUserAgent2 = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
        const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
        const prefix = getUserAgentPrefix();
        const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent2, ...userAgent, ...customUserAgent]).join(SPACE);
        const normalUAValue = [
          ...defaultUserAgent2.filter((section) => section.startsWith("aws-sdk-")),
          ...customUserAgent
        ].join(SPACE);
        if (options.runtime !== "browser") {
          if (normalUAValue) {
            headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
          }
          headers[USER_AGENT] = sdkUserAgentValue;
        } else {
          headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
        }
        return next({
          ...args,
          request
        });
      };
      escapeUserAgent = (userAgentPair) => {
        const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
        const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
        const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
        const prefix = name.substring(0, prefixSeparatorIndex);
        let uaName = name.substring(prefixSeparatorIndex + 1);
        if (prefix === "api") {
          uaName = uaName.toLowerCase();
        }
        return [prefix, uaName, version].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
          switch (index) {
            case 0:
              return item;
            case 1:
              return `${acc}/${item}`;
            default:
              return `${acc}#${item}`;
          }
        }, "");
      };
      getUserAgentMiddlewareOptions = {
        name: "getUserAgentMiddleware",
        step: "build",
        priority: "low",
        tags: ["SET_USER_AGENT", "USER_AGENT"],
        override: true
      };
      getUserAgentPlugin = (config) => ({
        applyToStack: (clientStack) => {
          clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
        }
      });
    }
  });

  // node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js
  var init_dist_es8 = __esm({
    "node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js"() {
      init_configurations();
      init_user_agent_middleware();
    }
  });

  // node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js
  var init_booleanSelector = __esm({
    "node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js"() {
    }
  });

  // node_modules/@smithy/util-config-provider/dist-es/numberSelector.js
  var init_numberSelector = __esm({
    "node_modules/@smithy/util-config-provider/dist-es/numberSelector.js"() {
    }
  });

  // node_modules/@smithy/util-config-provider/dist-es/types.js
  var SelectorType;
  var init_types4 = __esm({
    "node_modules/@smithy/util-config-provider/dist-es/types.js"() {
      (function(SelectorType2) {
        SelectorType2["ENV"] = "env";
        SelectorType2["CONFIG"] = "shared config entry";
      })(SelectorType || (SelectorType = {}));
    }
  });

  // node_modules/@smithy/util-config-provider/dist-es/index.js
  var init_dist_es9 = __esm({
    "node_modules/@smithy/util-config-provider/dist-es/index.js"() {
      init_booleanSelector();
      init_numberSelector();
      init_types4();
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js
  var DEFAULT_USE_DUALSTACK_ENDPOINT;
  var init_NodeUseDualstackEndpointConfigOptions = __esm({
    "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js"() {
      init_dist_es9();
      DEFAULT_USE_DUALSTACK_ENDPOINT = false;
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js
  var DEFAULT_USE_FIPS_ENDPOINT;
  var init_NodeUseFipsEndpointConfigOptions = __esm({
    "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js"() {
      init_dist_es9();
      DEFAULT_USE_FIPS_ENDPOINT = false;
    }
  });

  // node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
  var getSmithyContext;
  var init_getSmithyContext = __esm({
    "node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js"() {
      init_dist_es();
      getSmithyContext = (context) => context[SMITHY_CONTEXT_KEY] || (context[SMITHY_CONTEXT_KEY] = {});
    }
  });

  // node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
  var normalizeProvider;
  var init_normalizeProvider = __esm({
    "node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js"() {
      normalizeProvider = (input) => {
        if (typeof input === "function")
          return input;
        const promisified = Promise.resolve(input);
        return () => promisified;
      };
    }
  });

  // node_modules/@smithy/util-middleware/dist-es/index.js
  var init_dist_es10 = __esm({
    "node_modules/@smithy/util-middleware/dist-es/index.js"() {
      init_getSmithyContext();
      init_normalizeProvider();
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js
  var init_resolveCustomEndpointsConfig = __esm({
    "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js"() {
      init_dist_es10();
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js
  var init_getEndpointFromRegion = __esm({
    "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js"() {
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js
  var init_resolveEndpointsConfig = __esm({
    "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js"() {
      init_dist_es10();
      init_getEndpointFromRegion();
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js
  var init_endpointsConfig = __esm({
    "node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js"() {
      init_NodeUseDualstackEndpointConfigOptions();
      init_NodeUseFipsEndpointConfigOptions();
      init_resolveCustomEndpointsConfig();
      init_resolveEndpointsConfig();
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js
  var init_config2 = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js"() {
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js
  var isFipsRegion;
  var init_isFipsRegion = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js"() {
      isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js
  var getRealRegion;
  var init_getRealRegion = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js"() {
      init_isFipsRegion();
      getRealRegion = (region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region;
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js
  var resolveRegionConfig;
  var init_resolveRegionConfig = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js"() {
      init_getRealRegion();
      init_isFipsRegion();
      resolveRegionConfig = (input) => {
        const { region, useFipsEndpoint } = input;
        if (!region) {
          throw new Error("Region is missing");
        }
        return {
          ...input,
          region: async () => {
            if (typeof region === "string") {
              return getRealRegion(region);
            }
            const providedRegion = await region();
            return getRealRegion(providedRegion);
          },
          useFipsEndpoint: async () => {
            const providedRegion = typeof region === "string" ? region : await region();
            if (isFipsRegion(providedRegion)) {
              return true;
            }
            return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
          }
        };
      };
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js
  var init_regionConfig = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js"() {
      init_config2();
      init_resolveRegionConfig();
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js
  var init_PartitionHash = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js"() {
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js
  var init_RegionHash = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js"() {
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js
  var init_getHostnameFromVariants = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js"() {
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js
  var init_getResolvedHostname = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js"() {
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js
  var init_getResolvedPartition = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js"() {
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js
  var init_getResolvedSigningRegion = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js"() {
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js
  var init_getRegionInfo = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js"() {
      init_getHostnameFromVariants();
      init_getResolvedHostname();
      init_getResolvedPartition();
      init_getResolvedSigningRegion();
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js
  var init_regionInfo = __esm({
    "node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js"() {
      init_PartitionHash();
      init_RegionHash();
      init_getRegionInfo();
    }
  });

  // node_modules/@smithy/config-resolver/dist-es/index.js
  var init_dist_es11 = __esm({
    "node_modules/@smithy/config-resolver/dist-es/index.js"() {
      init_endpointsConfig();
      init_regionConfig();
      init_regionInfo();
    }
  });

  // node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
  function convertHttpAuthSchemesToMap(httpAuthSchemes) {
    const map = /* @__PURE__ */ new Map();
    for (const scheme of httpAuthSchemes) {
      map.set(scheme.schemeId, scheme);
    }
    return map;
  }
  var httpAuthSchemeMiddleware;
  var init_httpAuthSchemeMiddleware = __esm({
    "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js"() {
      init_dist_es();
      init_dist_es10();
      httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => async (args) => {
        const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
        const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
        const smithyContext = getSmithyContext(context);
        const failureReasons = [];
        for (const option of options) {
          const scheme = authSchemes.get(option.schemeId);
          if (!scheme) {
            failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
            continue;
          }
          const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
          if (!identityProvider) {
            failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
            continue;
          }
          const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
          option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
          option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
          smithyContext.selectedHttpAuthScheme = {
            httpAuthOption: option,
            identity: await identityProvider(option.identityProperties),
            signer: scheme.signer
          };
          break;
        }
        if (!smithyContext.selectedHttpAuthScheme) {
          throw new Error(failureReasons.join("\n"));
        }
        return next(args);
      };
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
  var resolveParamsForS3, DOMAIN_PATTERN, IP_ADDRESS_PATTERN, DOTS_PATTERN, isDnsCompatibleBucketName, isArnBucketName;
  var init_s3 = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js"() {
      resolveParamsForS3 = async (endpointParams) => {
        const bucket = endpointParams?.Bucket || "";
        if (typeof endpointParams.Bucket === "string") {
          endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
        }
        if (isArnBucketName(bucket)) {
          if (endpointParams.ForcePathStyle === true) {
            throw new Error("Path-style addressing cannot be used with ARN buckets");
          }
        } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
          endpointParams.ForcePathStyle = true;
        }
        if (endpointParams.DisableMultiRegionAccessPoints) {
          endpointParams.disableMultiRegionAccessPoints = true;
          endpointParams.DisableMRAP = true;
        }
        return endpointParams;
      };
      DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
      IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
      DOTS_PATTERN = /\.\./;
      isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
      isArnBucketName = (bucketName) => {
        const [arn, partition2, service, region, account, typeOrId] = bucketName.split(":");
        const isArn = arn === "arn" && bucketName.split(":").length >= 6;
        const isValidArn = [arn, partition2, service, account, typeOrId].filter(Boolean).length === 5;
        if (isArn && !isValidArn) {
          throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
        }
        return arn === "arn" && !!partition2 && !!service && !!account && !!typeOrId;
      };
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js
  var init_service_customizations = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js"() {
      init_s3();
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
  var createConfigValueProvider;
  var init_createConfigValueProvider = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js"() {
      createConfigValueProvider = (configKey, canonicalEndpointParamKey, config) => {
        const configProvider = async () => {
          const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
          if (typeof configValue === "function") {
            return configValue();
          }
          return configValue;
        };
        if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
          return async () => {
            const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
            const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
            return configValue;
          };
        }
        if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
          return async () => {
            const endpoint = await configProvider();
            if (endpoint && typeof endpoint === "object") {
              if ("url" in endpoint) {
                return endpoint.url.href;
              }
              if ("hostname" in endpoint) {
                const { protocol, hostname, port, path } = endpoint;
                return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
              }
            }
            return endpoint;
          };
        }
        return configProvider;
      };
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js
  var getEndpointFromConfig;
  var init_getEndpointFromConfig_browser = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js"() {
      getEndpointFromConfig = async (serviceId) => void 0;
    }
  });

  // node_modules/@smithy/querystring-parser/dist-es/index.js
  function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
      for (const pair of querystring.split("&")) {
        let [key, value = null] = pair.split("=");
        key = decodeURIComponent(key);
        if (value) {
          value = decodeURIComponent(value);
        }
        if (!(key in query)) {
          query[key] = value;
        } else if (Array.isArray(query[key])) {
          query[key].push(value);
        } else {
          query[key] = [query[key], value];
        }
      }
    }
    return query;
  }
  var init_dist_es12 = __esm({
    "node_modules/@smithy/querystring-parser/dist-es/index.js"() {
    }
  });

  // node_modules/@smithy/url-parser/dist-es/index.js
  var parseUrl;
  var init_dist_es13 = __esm({
    "node_modules/@smithy/url-parser/dist-es/index.js"() {
      init_dist_es12();
      parseUrl = (url) => {
        if (typeof url === "string") {
          return parseUrl(new URL(url));
        }
        const { hostname, pathname, port, protocol, search } = url;
        let query;
        if (search) {
          query = parseQueryString(search);
        }
        return {
          hostname,
          port: port ? parseInt(port) : void 0,
          protocol,
          path: pathname,
          query
        };
      };
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
  var toEndpointV1;
  var init_toEndpointV1 = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js"() {
      init_dist_es13();
      toEndpointV1 = (endpoint) => {
        if (typeof endpoint === "object") {
          if ("url" in endpoint) {
            return parseUrl(endpoint.url);
          }
          return endpoint;
        }
        return parseUrl(endpoint);
      };
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
  var getEndpointFromInstructions, resolveParams;
  var init_getEndpointFromInstructions = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js"() {
      init_service_customizations();
      init_createConfigValueProvider();
      init_getEndpointFromConfig_browser();
      init_toEndpointV1();
      getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
        if (!clientConfig.endpoint) {
          const endpointFromConfig = await getEndpointFromConfig(clientConfig.serviceId || "");
          if (endpointFromConfig) {
            clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
          }
        }
        const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
        if (typeof clientConfig.endpointProvider !== "function") {
          throw new Error("config.endpointProvider is not set.");
        }
        const endpoint = clientConfig.endpointProvider(endpointParams, context);
        return endpoint;
      };
      resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
        const endpointParams = {};
        const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
        for (const [name, instruction] of Object.entries(instructions)) {
          switch (instruction.type) {
            case "staticContextParams":
              endpointParams[name] = instruction.value;
              break;
            case "contextParams":
              endpointParams[name] = commandInput[instruction.name];
              break;
            case "clientContextParams":
            case "builtInParams":
              endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
              break;
            default:
              throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
          }
        }
        if (Object.keys(instructions).length === 0) {
          Object.assign(endpointParams, clientConfig);
        }
        if (String(clientConfig.serviceId).toLowerCase() === "s3") {
          await resolveParamsForS3(endpointParams);
        }
        return endpointParams;
      };
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js
  var init_adaptors = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js"() {
      init_getEndpointFromInstructions();
      init_toEndpointV1();
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js
  var endpointMiddleware;
  var init_endpointMiddleware = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js"() {
      init_dist_es10();
      init_getEndpointFromInstructions();
      endpointMiddleware = ({ config, instructions }) => {
        return (next, context) => async (args) => {
          const endpoint = await getEndpointFromInstructions(args.input, {
            getEndpointParameterInstructions() {
              return instructions;
            }
          }, { ...config }, context);
          context.endpointV2 = endpoint;
          context.authSchemes = endpoint.properties?.authSchemes;
          const authScheme = context.authSchemes?.[0];
          if (authScheme) {
            context["signing_region"] = authScheme.signingRegion;
            context["signing_service"] = authScheme.signingName;
            const smithyContext = getSmithyContext(context);
            const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
            if (httpAuthOption) {
              httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
                signing_region: authScheme.signingRegion,
                signingRegion: authScheme.signingRegion,
                signing_service: authScheme.signingName,
                signingName: authScheme.signingName,
                signingRegionSet: authScheme.signingRegionSet
              }, authScheme.properties);
            }
          }
          return next({
            ...args
          });
        };
      };
    }
  });

  // node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js
  var deserializerMiddleware;
  var init_deserializerMiddleware = __esm({
    "node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js"() {
      deserializerMiddleware = (options, deserializer) => (next, context) => async (args) => {
        const { response } = await next(args);
        try {
          const parsed = await deserializer(response, options);
          return {
            response,
            output: parsed
          };
        } catch (error) {
          Object.defineProperty(error, "$response", {
            value: response
          });
          if (!("$metadata" in error)) {
            const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
            error.message += "\n  " + hint;
            if (typeof error.$responseBodyText !== "undefined") {
              if (error.$response) {
                error.$response.body = error.$responseBodyText;
              }
            }
          }
          throw error;
        }
      };
    }
  });

  // node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js
  var serializerMiddleware;
  var init_serializerMiddleware = __esm({
    "node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js"() {
      serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
        const endpoint = context.endpointV2?.url && options.urlParser ? async () => options.urlParser(context.endpointV2.url) : options.endpoint;
        if (!endpoint) {
          throw new Error("No valid endpoint provider available.");
        }
        const request = await serializer(args.input, { ...options, endpoint });
        return next({
          ...args,
          request
        });
      };
    }
  });

  // node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
  function getSerdePlugin(config, serializer, deserializer) {
    return {
      applyToStack: (commandStack) => {
        commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
        commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
      }
    };
  }
  var deserializerMiddlewareOption, serializerMiddlewareOption;
  var init_serdePlugin = __esm({
    "node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js"() {
      init_deserializerMiddleware();
      init_serializerMiddleware();
      deserializerMiddlewareOption = {
        name: "deserializerMiddleware",
        step: "deserialize",
        tags: ["DESERIALIZER"],
        override: true
      };
      serializerMiddlewareOption = {
        name: "serializerMiddleware",
        step: "serialize",
        tags: ["SERIALIZER"],
        override: true
      };
    }
  });

  // node_modules/@smithy/middleware-serde/dist-es/index.js
  var init_dist_es14 = __esm({
    "node_modules/@smithy/middleware-serde/dist-es/index.js"() {
      init_deserializerMiddleware();
      init_serdePlugin();
      init_serializerMiddleware();
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
  var endpointMiddlewareOptions, getEndpointPlugin;
  var init_getEndpointPlugin = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js"() {
      init_dist_es14();
      init_endpointMiddleware();
      endpointMiddlewareOptions = {
        step: "serialize",
        tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
        name: "endpointV2Middleware",
        override: true,
        relation: "before",
        toMiddleware: serializerMiddlewareOption.name
      };
      getEndpointPlugin = (config, instructions) => ({
        applyToStack: (clientStack) => {
          clientStack.addRelativeTo(endpointMiddleware({
            config,
            instructions
          }), endpointMiddlewareOptions);
        }
      });
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js
  var resolveEndpointConfig;
  var init_resolveEndpointConfig = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js"() {
      init_dist_es10();
      init_toEndpointV1();
      resolveEndpointConfig = (input) => {
        const tls = input.tls ?? true;
        const { endpoint } = input;
        const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await normalizeProvider(endpoint)()) : void 0;
        const isCustomEndpoint = !!endpoint;
        return {
          ...input,
          endpoint: customEndpointProvider,
          tls,
          isCustomEndpoint,
          useDualstackEndpoint: normalizeProvider(input.useDualstackEndpoint ?? false),
          useFipsEndpoint: normalizeProvider(input.useFipsEndpoint ?? false)
        };
      };
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/types.js
  var init_types5 = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/types.js"() {
    }
  });

  // node_modules/@smithy/middleware-endpoint/dist-es/index.js
  var init_dist_es15 = __esm({
    "node_modules/@smithy/middleware-endpoint/dist-es/index.js"() {
      init_adaptors();
      init_endpointMiddleware();
      init_getEndpointPlugin();
      init_resolveEndpointConfig();
      init_types5();
    }
  });

  // node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
  var httpAuthSchemeEndpointRuleSetMiddlewareOptions, getHttpAuthSchemeEndpointRuleSetPlugin;
  var init_getHttpAuthSchemeEndpointRuleSetPlugin = __esm({
    "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js"() {
      init_dist_es15();
      init_httpAuthSchemeMiddleware();
      httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
        step: "serialize",
        tags: ["HTTP_AUTH_SCHEME"],
        name: "httpAuthSchemeMiddleware",
        override: true,
        relation: "before",
        toMiddleware: endpointMiddlewareOptions.name
      };
      getHttpAuthSchemeEndpointRuleSetPlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
        applyToStack: (clientStack) => {
          clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
            httpAuthSchemeParametersProvider,
            identityProviderConfigProvider
          }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
        }
      });
    }
  });

  // node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
  var httpAuthSchemeMiddlewareOptions;
  var init_getHttpAuthSchemePlugin = __esm({
    "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js"() {
      init_dist_es14();
      init_httpAuthSchemeMiddleware();
      httpAuthSchemeMiddlewareOptions = {
        step: "serialize",
        tags: ["HTTP_AUTH_SCHEME"],
        name: "httpAuthSchemeMiddleware",
        override: true,
        relation: "before",
        toMiddleware: serializerMiddlewareOption.name
      };
    }
  });

  // node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js
  var init_middleware_http_auth_scheme = __esm({
    "node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js"() {
      init_httpAuthSchemeMiddleware();
      init_getHttpAuthSchemeEndpointRuleSetPlugin();
      init_getHttpAuthSchemePlugin();
    }
  });

  // node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
  var defaultErrorHandler, defaultSuccessHandler, httpSigningMiddleware;
  var init_httpSigningMiddleware = __esm({
    "node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js"() {
      init_dist_es2();
      init_dist_es();
      init_dist_es10();
      defaultErrorHandler = (signingProperties) => (error) => {
        throw error;
      };
      defaultSuccessHandler = (httpResponse, signingProperties) => {
      };
      httpSigningMiddleware = (config) => (next, context) => async (args) => {
        if (!HttpRequest.isInstance(args.request)) {
          return next(args);
        }
        const smithyContext = getSmithyContext(context);
        const scheme = smithyContext.selectedHttpAuthScheme;
        if (!scheme) {
          throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
        }
        const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
        const output = await next({
          ...args,
          request: await signer.sign(args.request, identity, signingProperties)
        }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
        (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
        return output;
      };
    }
  });

  // node_modules/@smithy/util-retry/dist-es/config.js
  var RETRY_MODES, DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE;
  var init_config3 = __esm({
    "node_modules/@smithy/util-retry/dist-es/config.js"() {
      (function(RETRY_MODES2) {
        RETRY_MODES2["STANDARD"] = "standard";
        RETRY_MODES2["ADAPTIVE"] = "adaptive";
      })(RETRY_MODES || (RETRY_MODES = {}));
      DEFAULT_MAX_ATTEMPTS = 3;
      DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;
    }
  });

  // node_modules/@smithy/service-error-classification/dist-es/constants.js
  var THROTTLING_ERROR_CODES, TRANSIENT_ERROR_CODES, TRANSIENT_ERROR_STATUS_CODES, NODEJS_TIMEOUT_ERROR_CODES;
  var init_constants2 = __esm({
    "node_modules/@smithy/service-error-classification/dist-es/constants.js"() {
      THROTTLING_ERROR_CODES = [
        "BandwidthLimitExceeded",
        "EC2ThrottledException",
        "LimitExceededException",
        "PriorRequestNotComplete",
        "ProvisionedThroughputExceededException",
        "RequestLimitExceeded",
        "RequestThrottled",
        "RequestThrottledException",
        "SlowDown",
        "ThrottledException",
        "Throttling",
        "ThrottlingException",
        "TooManyRequestsException",
        "TransactionInProgressException"
      ];
      TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
      TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
      NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
    }
  });

  // node_modules/@smithy/service-error-classification/dist-es/index.js
  var isClockSkewCorrectedError, isThrottlingError, isTransientError, isServerError;
  var init_dist_es16 = __esm({
    "node_modules/@smithy/service-error-classification/dist-es/index.js"() {
      init_constants2();
      isClockSkewCorrectedError = (error) => error.$metadata?.clockSkewCorrected;
      isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error.name) || error.$retryable?.throttling == true;
      isTransientError = (error) => isClockSkewCorrectedError(error) || TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0);
      isServerError = (error) => {
        if (error.$metadata?.httpStatusCode !== void 0) {
          const statusCode = error.$metadata.httpStatusCode;
          if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
            return true;
          }
          return false;
        }
        return false;
      };
    }
  });

  // node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js
  var DefaultRateLimiter;
  var init_DefaultRateLimiter = __esm({
    "node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js"() {
      init_dist_es16();
      DefaultRateLimiter = class {
        constructor(options) {
          this.currentCapacity = 0;
          this.enabled = false;
          this.lastMaxRate = 0;
          this.measuredTxRate = 0;
          this.requestCount = 0;
          this.lastTimestamp = 0;
          this.timeWindow = 0;
          this.beta = options?.beta ?? 0.7;
          this.minCapacity = options?.minCapacity ?? 1;
          this.minFillRate = options?.minFillRate ?? 0.5;
          this.scaleConstant = options?.scaleConstant ?? 0.4;
          this.smooth = options?.smooth ?? 0.8;
          const currentTimeInSeconds = this.getCurrentTimeInSeconds();
          this.lastThrottleTime = currentTimeInSeconds;
          this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
          this.fillRate = this.minFillRate;
          this.maxCapacity = this.minCapacity;
        }
        getCurrentTimeInSeconds() {
          return Date.now() / 1e3;
        }
        async getSendToken() {
          return this.acquireTokenBucket(1);
        }
        async acquireTokenBucket(amount) {
          if (!this.enabled) {
            return;
          }
          this.refillTokenBucket();
          if (amount > this.currentCapacity) {
            const delay = (amount - this.currentCapacity) / this.fillRate * 1e3;
            await new Promise((resolve) => setTimeout(resolve, delay));
          }
          this.currentCapacity = this.currentCapacity - amount;
        }
        refillTokenBucket() {
          const timestamp = this.getCurrentTimeInSeconds();
          if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;
            return;
          }
          const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
          this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
          this.lastTimestamp = timestamp;
        }
        updateClientSendingRate(response) {
          let calculatedRate;
          this.updateMeasuredRate();
          if (isThrottlingError(response)) {
            const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
            this.lastMaxRate = rateToUse;
            this.calculateTimeWindow();
            this.lastThrottleTime = this.getCurrentTimeInSeconds();
            calculatedRate = this.cubicThrottle(rateToUse);
            this.enableTokenBucket();
          } else {
            this.calculateTimeWindow();
            calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
          }
          const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
          this.updateTokenBucketRate(newRate);
        }
        calculateTimeWindow() {
          this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
        }
        cubicThrottle(rateToUse) {
          return this.getPrecise(rateToUse * this.beta);
        }
        cubicSuccess(timestamp) {
          return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
        }
        enableTokenBucket() {
          this.enabled = true;
        }
        updateTokenBucketRate(newRate) {
          this.refillTokenBucket();
          this.fillRate = Math.max(newRate, this.minFillRate);
          this.maxCapacity = Math.max(newRate, this.minCapacity);
          this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
        }
        updateMeasuredRate() {
          const t5 = this.getCurrentTimeInSeconds();
          const timeBucket = Math.floor(t5 * 2) / 2;
          this.requestCount++;
          if (timeBucket > this.lastTxRateBucket) {
            const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
            this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
            this.requestCount = 0;
            this.lastTxRateBucket = timeBucket;
          }
        }
        getPrecise(num) {
          return parseFloat(num.toFixed(8));
        }
      };
    }
  });

  // node_modules/@smithy/util-retry/dist-es/constants.js
  var DEFAULT_RETRY_DELAY_BASE, MAXIMUM_RETRY_DELAY, THROTTLING_RETRY_DELAY_BASE, INITIAL_RETRY_TOKENS, RETRY_COST, TIMEOUT_RETRY_COST, NO_RETRY_INCREMENT, INVOCATION_ID_HEADER, REQUEST_HEADER;
  var init_constants3 = __esm({
    "node_modules/@smithy/util-retry/dist-es/constants.js"() {
      DEFAULT_RETRY_DELAY_BASE = 100;
      MAXIMUM_RETRY_DELAY = 20 * 1e3;
      THROTTLING_RETRY_DELAY_BASE = 500;
      INITIAL_RETRY_TOKENS = 500;
      RETRY_COST = 5;
      TIMEOUT_RETRY_COST = 10;
      NO_RETRY_INCREMENT = 1;
      INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
      REQUEST_HEADER = "amz-sdk-request";
    }
  });

  // node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js
  var getDefaultRetryBackoffStrategy;
  var init_defaultRetryBackoffStrategy = __esm({
    "node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js"() {
      init_constants3();
      getDefaultRetryBackoffStrategy = () => {
        let delayBase = DEFAULT_RETRY_DELAY_BASE;
        const computeNextBackoffDelay = (attempts) => {
          return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
        };
        const setDelayBase = (delay) => {
          delayBase = delay;
        };
        return {
          computeNextBackoffDelay,
          setDelayBase
        };
      };
    }
  });

  // node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js
  var createDefaultRetryToken;
  var init_defaultRetryToken = __esm({
    "node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js"() {
      init_constants3();
      createDefaultRetryToken = ({ retryDelay, retryCount, retryCost }) => {
        const getRetryCount = () => retryCount;
        const getRetryDelay = () => Math.min(MAXIMUM_RETRY_DELAY, retryDelay);
        const getRetryCost = () => retryCost;
        return {
          getRetryCount,
          getRetryDelay,
          getRetryCost
        };
      };
    }
  });

  // node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js
  var StandardRetryStrategy;
  var init_StandardRetryStrategy = __esm({
    "node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js"() {
      init_config3();
      init_constants3();
      init_defaultRetryBackoffStrategy();
      init_defaultRetryToken();
      StandardRetryStrategy = class {
        constructor(maxAttempts) {
          this.maxAttempts = maxAttempts;
          this.mode = RETRY_MODES.STANDARD;
          this.capacity = INITIAL_RETRY_TOKENS;
          this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
          this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
        }
        async acquireInitialRetryToken(retryTokenScope) {
          return createDefaultRetryToken({
            retryDelay: DEFAULT_RETRY_DELAY_BASE,
            retryCount: 0
          });
        }
        async refreshRetryTokenForRetry(token, errorInfo) {
          const maxAttempts = await this.getMaxAttempts();
          if (this.shouldRetry(token, errorInfo, maxAttempts)) {
            const errorType = errorInfo.errorType;
            this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE);
            const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
            const retryDelay = errorInfo.retryAfterHint ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType) : delayFromErrorType;
            const capacityCost = this.getCapacityCost(errorType);
            this.capacity -= capacityCost;
            return createDefaultRetryToken({
              retryDelay,
              retryCount: token.getRetryCount() + 1,
              retryCost: capacityCost
            });
          }
          throw new Error("No retry token available");
        }
        recordSuccess(token) {
          this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
        }
        getCapacity() {
          return this.capacity;
        }
        async getMaxAttempts() {
          try {
            return await this.maxAttemptsProvider();
          } catch (error) {
            console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
            return DEFAULT_MAX_ATTEMPTS;
          }
        }
        shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
          const attempts = tokenToRenew.getRetryCount() + 1;
          return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
        }
        getCapacityCost(errorType) {
          return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
        }
        isRetryableError(errorType) {
          return errorType === "THROTTLING" || errorType === "TRANSIENT";
        }
      };
    }
  });

  // node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js
  var AdaptiveRetryStrategy;
  var init_AdaptiveRetryStrategy = __esm({
    "node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js"() {
      init_config3();
      init_DefaultRateLimiter();
      init_StandardRetryStrategy();
      AdaptiveRetryStrategy = class {
        constructor(maxAttemptsProvider, options) {
          this.maxAttemptsProvider = maxAttemptsProvider;
          this.mode = RETRY_MODES.ADAPTIVE;
          const { rateLimiter } = options ?? {};
          this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
          this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
        }
        async acquireInitialRetryToken(retryTokenScope) {
          await this.rateLimiter.getSendToken();
          return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
        }
        async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
          this.rateLimiter.updateClientSendingRate(errorInfo);
          return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
        }
        recordSuccess(token) {
          this.rateLimiter.updateClientSendingRate({});
          this.standardRetryStrategy.recordSuccess(token);
        }
      };
    }
  });

  // node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js
  var init_ConfiguredRetryStrategy = __esm({
    "node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js"() {
      init_constants3();
      init_StandardRetryStrategy();
    }
  });

  // node_modules/@smithy/util-retry/dist-es/types.js
  var init_types6 = __esm({
    "node_modules/@smithy/util-retry/dist-es/types.js"() {
    }
  });

  // node_modules/@smithy/util-retry/dist-es/index.js
  var init_dist_es17 = __esm({
    "node_modules/@smithy/util-retry/dist-es/index.js"() {
      init_AdaptiveRetryStrategy();
      init_ConfiguredRetryStrategy();
      init_DefaultRateLimiter();
      init_StandardRetryStrategy();
      init_config3();
      init_constants3();
      init_types6();
    }
  });

  // node_modules/@smithy/middleware-retry/node_modules/uuid/dist/esm-browser/rng.js
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }
  var getRandomValues, rnds8;
  var init_rng = __esm({
    "node_modules/@smithy/middleware-retry/node_modules/uuid/dist/esm-browser/rng.js"() {
      rnds8 = new Uint8Array(16);
    }
  });

  // node_modules/@smithy/middleware-retry/node_modules/uuid/dist/esm-browser/regex.js
  var regex_default;
  var init_regex = __esm({
    "node_modules/@smithy/middleware-retry/node_modules/uuid/dist/esm-browser/regex.js"() {
      regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    }
  });

  // node_modules/@smithy/middleware-retry/node_modules/uuid/dist/esm-browser/validate.js
  function validate(uuid) {
    return typeof uuid === "string" && regex_default.test(uuid);
  }
  var validate_default;
  var init_validate = __esm({
    "node_modules/@smithy/middleware-retry/node_modules/uuid/dist/esm-browser/validate.js"() {
      init_regex();
      validate_default = validate;
    }
  });

  // node_modules/@smithy/middleware-retry/node_modules/uuid/dist/esm-browser/stringify.js
  function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
    if (!validate_default(uuid)) {
      throw TypeError("Stringified UUID is invalid");
    }
    return uuid;
  }
  var byteToHex, i5, stringify_default;
  var init_stringify = __esm({
    "node_modules/@smithy/middleware-retry/node_modules/uuid/dist/esm-browser/stringify.js"() {
      init_validate();
      byteToHex = [];
      for (i5 = 0; i5 < 256; ++i5) {
        byteToHex.push((i5 + 256).toString(16).substr(1));
      }
      stringify_default = stringify;
    }
  });

  // node_modules/@smithy/middleware-retry/node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset) {
    options = options || {};
    var rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (var i5 = 0; i5 < 16; ++i5) {
        buf[offset + i5] = rnds[i5];
      }
      return buf;
    }
    return stringify_default(rnds);
  }
  var v4_default;
  var init_v4 = __esm({
    "node_modules/@smithy/middleware-retry/node_modules/uuid/dist/esm-browser/v4.js"() {
      init_rng();
      init_stringify();
      v4_default = v4;
    }
  });

  // node_modules/@smithy/middleware-retry/node_modules/uuid/dist/esm-browser/index.js
  var init_esm_browser = __esm({
    "node_modules/@smithy/middleware-retry/node_modules/uuid/dist/esm-browser/index.js"() {
      init_v4();
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js
  var init_defaultRetryQuota = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js"() {
      init_dist_es17();
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/delayDecider.js
  var init_delayDecider = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/delayDecider.js"() {
      init_dist_es17();
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/retryDecider.js
  var init_retryDecider = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/retryDecider.js"() {
      init_dist_es16();
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/util.js
  var asSdkError;
  var init_util2 = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/util.js"() {
      asSdkError = (error) => {
        if (error instanceof Error)
          return error;
        if (error instanceof Object)
          return Object.assign(new Error(), error);
        if (typeof error === "string")
          return new Error(error);
        return new Error(`AWS SDK error wrapper for ${error}`);
      };
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js
  var init_StandardRetryStrategy2 = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js"() {
      init_dist_es2();
      init_dist_es16();
      init_dist_es17();
      init_defaultRetryQuota();
      init_delayDecider();
      init_retryDecider();
      init_util2();
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js
  var init_AdaptiveRetryStrategy2 = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js"() {
      init_dist_es17();
      init_StandardRetryStrategy2();
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/configurations.js
  var resolveRetryConfig;
  var init_configurations2 = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/configurations.js"() {
      init_dist_es10();
      init_dist_es17();
      resolveRetryConfig = (input) => {
        const { retryStrategy } = input;
        const maxAttempts = normalizeProvider(input.maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
        return {
          ...input,
          maxAttempts,
          retryStrategy: async () => {
            if (retryStrategy) {
              return retryStrategy;
            }
            const retryMode = await normalizeProvider(input.retryMode)();
            if (retryMode === RETRY_MODES.ADAPTIVE) {
              return new AdaptiveRetryStrategy(maxAttempts);
            }
            return new StandardRetryStrategy(maxAttempts);
          }
        };
      };
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js
  var init_omitRetryHeadersMiddleware = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js"() {
      init_dist_es2();
      init_dist_es17();
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
  var NoOpLogger;
  var init_NoOpLogger = __esm({
    "node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js"() {
      NoOpLogger = class {
        trace() {
        }
        debug() {
        }
        info() {
        }
        warn() {
        }
        error() {
        }
      };
    }
  });

  // node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
  var getAllAliases, getMiddlewareNameWithAliases, constructStack, stepWeights, priorityWeights;
  var init_MiddlewareStack = __esm({
    "node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js"() {
      getAllAliases = (name, aliases) => {
        const _aliases = [];
        if (name) {
          _aliases.push(name);
        }
        if (aliases) {
          for (const alias of aliases) {
            _aliases.push(alias);
          }
        }
        return _aliases;
      };
      getMiddlewareNameWithAliases = (name, aliases) => {
        return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
      };
      constructStack = () => {
        let absoluteEntries = [];
        let relativeEntries = [];
        let identifyOnResolve = false;
        const entriesNameSet = /* @__PURE__ */ new Set();
        const sort = (entries) => entries.sort((a5, b4) => stepWeights[b4.step] - stepWeights[a5.step] || priorityWeights[b4.priority || "normal"] - priorityWeights[a5.priority || "normal"]);
        const removeByName = (toRemove) => {
          let isRemoved = false;
          const filterCb = (entry) => {
            const aliases = getAllAliases(entry.name, entry.aliases);
            if (aliases.includes(toRemove)) {
              isRemoved = true;
              for (const alias of aliases) {
                entriesNameSet.delete(alias);
              }
              return false;
            }
            return true;
          };
          absoluteEntries = absoluteEntries.filter(filterCb);
          relativeEntries = relativeEntries.filter(filterCb);
          return isRemoved;
        };
        const removeByReference = (toRemove) => {
          let isRemoved = false;
          const filterCb = (entry) => {
            if (entry.middleware === toRemove) {
              isRemoved = true;
              for (const alias of getAllAliases(entry.name, entry.aliases)) {
                entriesNameSet.delete(alias);
              }
              return false;
            }
            return true;
          };
          absoluteEntries = absoluteEntries.filter(filterCb);
          relativeEntries = relativeEntries.filter(filterCb);
          return isRemoved;
        };
        const cloneTo = (toStack) => {
          absoluteEntries.forEach((entry) => {
            toStack.add(entry.middleware, { ...entry });
          });
          relativeEntries.forEach((entry) => {
            toStack.addRelativeTo(entry.middleware, { ...entry });
          });
          toStack.identifyOnResolve?.(stack.identifyOnResolve());
          return toStack;
        };
        const expandRelativeMiddlewareList = (from) => {
          const expandedMiddlewareList = [];
          from.before.forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
              expandedMiddlewareList.push(entry);
            } else {
              expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
          });
          expandedMiddlewareList.push(from);
          from.after.reverse().forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
              expandedMiddlewareList.push(entry);
            } else {
              expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
          });
          return expandedMiddlewareList;
        };
        const getMiddlewareList = (debug = false) => {
          const normalizedAbsoluteEntries = [];
          const normalizedRelativeEntries = [];
          const normalizedEntriesNameMap = {};
          absoluteEntries.forEach((entry) => {
            const normalizedEntry = {
              ...entry,
              before: [],
              after: []
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
              normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedAbsoluteEntries.push(normalizedEntry);
          });
          relativeEntries.forEach((entry) => {
            const normalizedEntry = {
              ...entry,
              before: [],
              after: []
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
              normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedRelativeEntries.push(normalizedEntry);
          });
          normalizedRelativeEntries.forEach((entry) => {
            if (entry.toMiddleware) {
              const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
              if (toMiddleware === void 0) {
                if (debug) {
                  return;
                }
                throw new Error(`${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`);
              }
              if (entry.relation === "after") {
                toMiddleware.after.push(entry);
              }
              if (entry.relation === "before") {
                toMiddleware.before.push(entry);
              }
            }
          });
          const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
            wholeList.push(...expandedMiddlewareList);
            return wholeList;
          }, []);
          return mainChain;
        };
        const stack = {
          add: (middleware, options = {}) => {
            const { name, override, aliases: _aliases } = options;
            const entry = {
              step: "initialize",
              priority: "normal",
              middleware,
              ...options
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
              if (aliases.some((alias) => entriesNameSet.has(alias))) {
                if (!override)
                  throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                for (const alias of aliases) {
                  const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a5) => a5 === alias));
                  if (toOverrideIndex === -1) {
                    continue;
                  }
                  const toOverride = absoluteEntries[toOverrideIndex];
                  if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                    throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`);
                  }
                  absoluteEntries.splice(toOverrideIndex, 1);
                }
              }
              for (const alias of aliases) {
                entriesNameSet.add(alias);
              }
            }
            absoluteEntries.push(entry);
          },
          addRelativeTo: (middleware, options) => {
            const { name, override, aliases: _aliases } = options;
            const entry = {
              middleware,
              ...options
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
              if (aliases.some((alias) => entriesNameSet.has(alias))) {
                if (!override)
                  throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                for (const alias of aliases) {
                  const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a5) => a5 === alias));
                  if (toOverrideIndex === -1) {
                    continue;
                  }
                  const toOverride = relativeEntries[toOverrideIndex];
                  if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                    throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
                  }
                  relativeEntries.splice(toOverrideIndex, 1);
                }
              }
              for (const alias of aliases) {
                entriesNameSet.add(alias);
              }
            }
            relativeEntries.push(entry);
          },
          clone: () => cloneTo(constructStack()),
          use: (plugin) => {
            plugin.applyToStack(stack);
          },
          remove: (toRemove) => {
            if (typeof toRemove === "string")
              return removeByName(toRemove);
            else
              return removeByReference(toRemove);
          },
          removeByTag: (toRemove) => {
            let isRemoved = false;
            const filterCb = (entry) => {
              const { tags, name, aliases: _aliases } = entry;
              if (tags && tags.includes(toRemove)) {
                const aliases = getAllAliases(name, _aliases);
                for (const alias of aliases) {
                  entriesNameSet.delete(alias);
                }
                isRemoved = true;
                return false;
              }
              return true;
            };
            absoluteEntries = absoluteEntries.filter(filterCb);
            relativeEntries = relativeEntries.filter(filterCb);
            return isRemoved;
          },
          concat: (from) => {
            const cloned = cloneTo(constructStack());
            cloned.use(from);
            cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
            return cloned;
          },
          applyToStack: cloneTo,
          identify: () => {
            return getMiddlewareList(true).map((mw) => {
              const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
              return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
            });
          },
          identifyOnResolve(toggle) {
            if (typeof toggle === "boolean")
              identifyOnResolve = toggle;
            return identifyOnResolve;
          },
          resolve: (handler, context) => {
            for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
              handler = middleware(handler, context);
            }
            if (identifyOnResolve) {
              console.log(stack.identify());
            }
            return handler;
          }
        };
        return stack;
      };
      stepWeights = {
        initialize: 5,
        serialize: 4,
        build: 3,
        finalizeRequest: 2,
        deserialize: 1
      };
      priorityWeights = {
        high: 3,
        normal: 2,
        low: 1
      };
    }
  });

  // node_modules/@smithy/middleware-stack/dist-es/index.js
  var init_dist_es18 = __esm({
    "node_modules/@smithy/middleware-stack/dist-es/index.js"() {
      init_MiddlewareStack();
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/client.js
  var Client;
  var init_client2 = __esm({
    "node_modules/@smithy/smithy-client/dist-es/client.js"() {
      init_dist_es18();
      Client = class {
        constructor(config) {
          this.middlewareStack = constructStack();
          this.config = config;
        }
        send(command, optionsOrCb, cb) {
          const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
          const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
          const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
          if (callback) {
            handler(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
            });
          } else {
            return handler(command).then((result) => result.output);
          }
        }
        destroy() {
          if (this.config.requestHandler.destroy)
            this.config.requestHandler.destroy();
        }
      };
    }
  });

  // node_modules/@smithy/util-base64/dist-es/constants.browser.js
  var alphabetByEncoding, alphabetByValue, bitsPerLetter, bitsPerByte, maxLetterValue;
  var init_constants_browser = __esm({
    "node_modules/@smithy/util-base64/dist-es/constants.browser.js"() {
      alphabetByEncoding = {};
      alphabetByValue = new Array(64);
      for (let i5 = 0, start = "A".charCodeAt(0), limit = "Z".charCodeAt(0); i5 + start <= limit; i5++) {
        const char = String.fromCharCode(i5 + start);
        alphabetByEncoding[char] = i5;
        alphabetByValue[i5] = char;
      }
      for (let i5 = 0, start = "a".charCodeAt(0), limit = "z".charCodeAt(0); i5 + start <= limit; i5++) {
        const char = String.fromCharCode(i5 + start);
        const index = i5 + 26;
        alphabetByEncoding[char] = index;
        alphabetByValue[index] = char;
      }
      for (let i5 = 0; i5 < 10; i5++) {
        alphabetByEncoding[i5.toString(10)] = i5 + 52;
        const char = i5.toString(10);
        const index = i5 + 52;
        alphabetByEncoding[char] = index;
        alphabetByValue[index] = char;
      }
      alphabetByEncoding["+"] = 62;
      alphabetByValue[62] = "+";
      alphabetByEncoding["/"] = 63;
      alphabetByValue[63] = "/";
      bitsPerLetter = 6;
      bitsPerByte = 8;
      maxLetterValue = 63;
    }
  });

  // node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js
  var fromBase64;
  var init_fromBase64_browser = __esm({
    "node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js"() {
      init_constants_browser();
      fromBase64 = (input) => {
        let totalByteLength = input.length / 4 * 3;
        if (input.slice(-2) === "==") {
          totalByteLength -= 2;
        } else if (input.slice(-1) === "=") {
          totalByteLength--;
        }
        const out = new ArrayBuffer(totalByteLength);
        const dataView = new DataView(out);
        for (let i5 = 0; i5 < input.length; i5 += 4) {
          let bits = 0;
          let bitLength = 0;
          for (let j5 = i5, limit = i5 + 3; j5 <= limit; j5++) {
            if (input[j5] !== "=") {
              if (!(input[j5] in alphabetByEncoding)) {
                throw new TypeError(`Invalid character ${input[j5]} in base64 string.`);
              }
              bits |= alphabetByEncoding[input[j5]] << (limit - j5) * bitsPerLetter;
              bitLength += bitsPerLetter;
            } else {
              bits >>= bitsPerLetter;
            }
          }
          const chunkOffset = i5 / 4 * 3;
          bits >>= bitLength % bitsPerByte;
          const byteLength = Math.floor(bitLength / bitsPerByte);
          for (let k5 = 0; k5 < byteLength; k5++) {
            const offset = (byteLength - k5 - 1) * bitsPerByte;
            dataView.setUint8(chunkOffset + k5, (bits & 255 << offset) >> offset);
          }
        }
        return new Uint8Array(out);
      };
    }
  });

  // node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
  var fromUtf8;
  var init_fromUtf8_browser = __esm({
    "node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js"() {
      fromUtf8 = (input) => new TextEncoder().encode(input);
    }
  });

  // node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
  var toUint8Array;
  var init_toUint8Array = __esm({
    "node_modules/@smithy/util-utf8/dist-es/toUint8Array.js"() {
      init_fromUtf8_browser();
      toUint8Array = (data) => {
        if (typeof data === "string") {
          return fromUtf8(data);
        }
        if (ArrayBuffer.isView(data)) {
          return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
        }
        return new Uint8Array(data);
      };
    }
  });

  // node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js
  var toUtf8;
  var init_toUtf8_browser = __esm({
    "node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js"() {
      toUtf8 = (input) => {
        if (typeof input === "string") {
          return input;
        }
        if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
          throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
        }
        return new TextDecoder("utf-8").decode(input);
      };
    }
  });

  // node_modules/@smithy/util-utf8/dist-es/index.js
  var init_dist_es19 = __esm({
    "node_modules/@smithy/util-utf8/dist-es/index.js"() {
      init_fromUtf8_browser();
      init_toUint8Array();
      init_toUtf8_browser();
    }
  });

  // node_modules/@smithy/util-base64/dist-es/toBase64.browser.js
  function toBase64(_input) {
    let input;
    if (typeof _input === "string") {
      input = fromUtf8(_input);
    } else {
      input = _input;
    }
    if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
      throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    }
    let str = "";
    for (let i5 = 0; i5 < input.length; i5 += 3) {
      let bits = 0;
      let bitLength = 0;
      for (let j5 = i5, limit = Math.min(i5 + 3, input.length); j5 < limit; j5++) {
        bits |= input[j5] << (limit - j5 - 1) * bitsPerByte;
        bitLength += bitsPerByte;
      }
      const bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
      bits <<= bitClusterCount * bitsPerLetter - bitLength;
      for (let k5 = 1; k5 <= bitClusterCount; k5++) {
        const offset = (bitClusterCount - k5) * bitsPerLetter;
        str += alphabetByValue[(bits & maxLetterValue << offset) >> offset];
      }
      str += "==".slice(0, 4 - bitClusterCount);
    }
    return str;
  }
  var init_toBase64_browser = __esm({
    "node_modules/@smithy/util-base64/dist-es/toBase64.browser.js"() {
      init_dist_es19();
      init_constants_browser();
    }
  });

  // node_modules/@smithy/util-base64/dist-es/index.js
  var init_dist_es20 = __esm({
    "node_modules/@smithy/util-base64/dist-es/index.js"() {
      init_fromBase64_browser();
      init_toBase64_browser();
    }
  });

  // node_modules/@smithy/util-stream/dist-es/blob/transforms.js
  function transformToString(payload, encoding = "utf-8") {
    if (encoding === "base64") {
      return toBase64(payload);
    }
    return toUtf8(payload);
  }
  function transformFromString(str, encoding) {
    if (encoding === "base64") {
      return Uint8ArrayBlobAdapter.mutate(fromBase64(str));
    }
    return Uint8ArrayBlobAdapter.mutate(fromUtf8(str));
  }
  var init_transforms = __esm({
    "node_modules/@smithy/util-stream/dist-es/blob/transforms.js"() {
      init_dist_es20();
      init_dist_es19();
      init_Uint8ArrayBlobAdapter();
    }
  });

  // node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
  var Uint8ArrayBlobAdapter;
  var init_Uint8ArrayBlobAdapter = __esm({
    "node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js"() {
      init_transforms();
      Uint8ArrayBlobAdapter = class _Uint8ArrayBlobAdapter extends Uint8Array {
        static fromString(source, encoding = "utf-8") {
          switch (typeof source) {
            case "string":
              return transformFromString(source, encoding);
            default:
              throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
          }
        }
        static mutate(source) {
          Object.setPrototypeOf(source, _Uint8ArrayBlobAdapter.prototype);
          return source;
        }
        transformToString(encoding = "utf-8") {
          return transformToString(this, encoding);
        }
      };
    }
  });

  // node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.browser.js
  var init_getAwsChunkedEncodingStream_browser = __esm({
    "node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.browser.js"() {
    }
  });

  // node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
  var escapeUri, hexEncode;
  var init_escape_uri = __esm({
    "node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js"() {
      escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
      hexEncode = (c5) => `%${c5.charCodeAt(0).toString(16).toUpperCase()}`;
    }
  });

  // node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js
  var init_escape_uri_path = __esm({
    "node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js"() {
      init_escape_uri();
    }
  });

  // node_modules/@smithy/util-uri-escape/dist-es/index.js
  var init_dist_es21 = __esm({
    "node_modules/@smithy/util-uri-escape/dist-es/index.js"() {
      init_escape_uri();
      init_escape_uri_path();
    }
  });

  // node_modules/@smithy/querystring-builder/dist-es/index.js
  function buildQueryString(query) {
    const parts = [];
    for (let key of Object.keys(query).sort()) {
      const value = query[key];
      key = escapeUri(key);
      if (Array.isArray(value)) {
        for (let i5 = 0, iLen = value.length; i5 < iLen; i5++) {
          parts.push(`${key}=${escapeUri(value[i5])}`);
        }
      } else {
        let qsEntry = key;
        if (value || typeof value === "string") {
          qsEntry += `=${escapeUri(value)}`;
        }
        parts.push(qsEntry);
      }
    }
    return parts.join("&");
  }
  var init_dist_es22 = __esm({
    "node_modules/@smithy/querystring-builder/dist-es/index.js"() {
      init_dist_es21();
    }
  });

  // node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
  function requestTimeout(timeoutInMs = 0) {
    return new Promise((resolve, reject) => {
      if (timeoutInMs) {
        setTimeout(() => {
          const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
          timeoutError.name = "TimeoutError";
          reject(timeoutError);
        }, timeoutInMs);
      }
    });
  }
  var init_request_timeout = __esm({
    "node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js"() {
    }
  });

  // node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
  var keepAliveSupport, FetchHttpHandler;
  var init_fetch_http_handler = __esm({
    "node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js"() {
      init_dist_es2();
      init_dist_es22();
      init_request_timeout();
      keepAliveSupport = {
        supported: Boolean(typeof Request !== "undefined" && "keepalive" in new Request("https://[::1]"))
      };
      FetchHttpHandler = class _FetchHttpHandler {
        static create(instanceOrOptions) {
          if (typeof instanceOrOptions?.handle === "function") {
            return instanceOrOptions;
          }
          return new _FetchHttpHandler(instanceOrOptions);
        }
        constructor(options) {
          if (typeof options === "function") {
            this.configProvider = options().then((opts) => opts || {});
          } else {
            this.config = options ?? {};
            this.configProvider = Promise.resolve(this.config);
          }
        }
        destroy() {
        }
        async handle(request, { abortSignal } = {}) {
          if (!this.config) {
            this.config = await this.configProvider;
          }
          const requestTimeoutInMs = this.config.requestTimeout;
          const keepAlive = this.config.keepAlive === true;
          if (abortSignal?.aborted) {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            return Promise.reject(abortError);
          }
          let path = request.path;
          const queryString = buildQueryString(request.query || {});
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request.fragment) {
            path += `#${request.fragment}`;
          }
          let auth = "";
          if (request.username != null || request.password != null) {
            const username = request.username ?? "";
            const password = request.password ?? "";
            auth = `${username}:${password}@`;
          }
          const { port, method } = request;
          const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
          const body = method === "GET" || method === "HEAD" ? void 0 : request.body;
          const requestOptions = { body, headers: new Headers(request.headers), method };
          if (typeof AbortController !== "undefined") {
            requestOptions["signal"] = abortSignal;
          }
          if (keepAliveSupport.supported) {
            requestOptions["keepalive"] = keepAlive;
          }
          const fetchRequest = new Request(url, requestOptions);
          const raceOfPromises = [
            fetch(fetchRequest).then((response) => {
              const fetchHeaders = response.headers;
              const transformedHeaders = {};
              for (const pair of fetchHeaders.entries()) {
                transformedHeaders[pair[0]] = pair[1];
              }
              const hasReadableStream = response.body != void 0;
              if (!hasReadableStream) {
                return response.blob().then((body2) => ({
                  response: new HttpResponse({
                    headers: transformedHeaders,
                    reason: response.statusText,
                    statusCode: response.status,
                    body: body2
                  })
                }));
              }
              return {
                response: new HttpResponse({
                  headers: transformedHeaders,
                  reason: response.statusText,
                  statusCode: response.status,
                  body: response.body
                })
              };
            }),
            requestTimeout(requestTimeoutInMs)
          ];
          if (abortSignal) {
            raceOfPromises.push(new Promise((resolve, reject) => {
              abortSignal.onabort = () => {
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
              };
            }));
          }
          return Promise.race(raceOfPromises);
        }
        updateHttpClientConfig(key, value) {
          this.config = void 0;
          this.configProvider = this.configProvider.then((config) => {
            config[key] = value;
            return config;
          });
        }
        httpHandlerConfigs() {
          return this.config ?? {};
        }
      };
    }
  });

  // node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
  async function collectBlob(blob) {
    const base64 = await readToBase64(blob);
    const arrayBuffer = fromBase64(base64);
    return new Uint8Array(arrayBuffer);
  }
  async function collectStream(stream) {
    let res = new Uint8Array(0);
    const reader = stream.getReader();
    let isDone = false;
    while (!isDone) {
      const { done, value } = await reader.read();
      if (value) {
        const prior = res;
        res = new Uint8Array(prior.length + value.length);
        res.set(prior);
        res.set(value, prior.length);
      }
      isDone = done;
    }
    return res;
  }
  function readToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.readyState !== 2) {
          return reject(new Error("Reader aborted too early"));
        }
        const result = reader.result ?? "";
        const commaIndex = result.indexOf(",");
        const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
        resolve(result.substring(dataOffset));
      };
      reader.onabort = () => reject(new Error("Read aborted"));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
  }
  var streamCollector;
  var init_stream_collector = __esm({
    "node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js"() {
      init_dist_es20();
      streamCollector = (stream) => {
        if (typeof Blob === "function" && stream instanceof Blob) {
          return collectBlob(stream);
        }
        return collectStream(stream);
      };
    }
  });

  // node_modules/@smithy/fetch-http-handler/dist-es/index.js
  var init_dist_es23 = __esm({
    "node_modules/@smithy/fetch-http-handler/dist-es/index.js"() {
      init_fetch_http_handler();
      init_stream_collector();
    }
  });

  // node_modules/@smithy/util-hex-encoding/dist-es/index.js
  function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
      throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for (let i5 = 0; i5 < encoded.length; i5 += 2) {
      const encodedByte = encoded.slice(i5, i5 + 2).toLowerCase();
      if (encodedByte in HEX_TO_SHORT) {
        out[i5 / 2] = HEX_TO_SHORT[encodedByte];
      } else {
        throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
      }
    }
    return out;
  }
  function toHex(bytes) {
    let out = "";
    for (let i5 = 0; i5 < bytes.byteLength; i5++) {
      out += SHORT_TO_HEX[bytes[i5]];
    }
    return out;
  }
  var SHORT_TO_HEX, HEX_TO_SHORT;
  var init_dist_es24 = __esm({
    "node_modules/@smithy/util-hex-encoding/dist-es/index.js"() {
      SHORT_TO_HEX = {};
      HEX_TO_SHORT = {};
      for (let i5 = 0; i5 < 256; i5++) {
        let encodedByte = i5.toString(16).toLowerCase();
        if (encodedByte.length === 1) {
          encodedByte = `0${encodedByte}`;
        }
        SHORT_TO_HEX[i5] = encodedByte;
        HEX_TO_SHORT[encodedByte] = i5;
      }
    }
  });

  // node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js
  var init_sdk_stream_mixin_browser = __esm({
    "node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js"() {
      init_dist_es23();
      init_dist_es20();
      init_dist_es24();
      init_dist_es19();
    }
  });

  // node_modules/@smithy/util-stream/dist-es/index.js
  var init_dist_es25 = __esm({
    "node_modules/@smithy/util-stream/dist-es/index.js"() {
      init_Uint8ArrayBlobAdapter();
      init_getAwsChunkedEncodingStream_browser();
      init_sdk_stream_mixin_browser();
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js
  var collectBody;
  var init_collect_stream_body = __esm({
    "node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js"() {
      init_dist_es25();
      collectBody = async (streamBody = new Uint8Array(), context) => {
        if (streamBody instanceof Uint8Array) {
          return Uint8ArrayBlobAdapter.mutate(streamBody);
        }
        if (!streamBody) {
          return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
        }
        const fromContext = context.streamCollector(streamBody);
        return Uint8ArrayBlobAdapter.mutate(await fromContext);
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/command.js
  var Command, ClassBuilder;
  var init_command2 = __esm({
    "node_modules/@smithy/smithy-client/dist-es/command.js"() {
      init_dist_es18();
      init_dist_es();
      Command = class {
        constructor() {
          this.middlewareStack = constructStack();
        }
        static classBuilder() {
          return new ClassBuilder();
        }
        resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
          for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
            this.middlewareStack.use(mw);
          }
          const stack = clientStack.concat(this.middlewareStack);
          const { logger: logger2 } = configuration;
          const handlerExecutionContext = {
            logger: logger2,
            clientName,
            commandName,
            inputFilterSensitiveLog,
            outputFilterSensitiveLog,
            [SMITHY_CONTEXT_KEY]: {
              ...smithyContext
            },
            ...additionalContext
          };
          const { requestHandler } = configuration;
          return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
        }
      };
      ClassBuilder = class {
        constructor() {
          this._init = () => {
          };
          this._ep = {};
          this._middlewareFn = () => [];
          this._commandName = "";
          this._clientName = "";
          this._additionalContext = {};
          this._smithyContext = {};
          this._inputFilterSensitiveLog = (_3) => _3;
          this._outputFilterSensitiveLog = (_3) => _3;
          this._serializer = null;
          this._deserializer = null;
        }
        init(cb) {
          this._init = cb;
        }
        ep(endpointParameterInstructions) {
          this._ep = endpointParameterInstructions;
          return this;
        }
        m(middlewareSupplier) {
          this._middlewareFn = middlewareSupplier;
          return this;
        }
        s(service, operation, smithyContext = {}) {
          this._smithyContext = {
            service,
            operation,
            ...smithyContext
          };
          return this;
        }
        c(additionalContext = {}) {
          this._additionalContext = additionalContext;
          return this;
        }
        n(clientName, commandName) {
          this._clientName = clientName;
          this._commandName = commandName;
          return this;
        }
        f(inputFilter = (_3) => _3, outputFilter = (_3) => _3) {
          this._inputFilterSensitiveLog = inputFilter;
          this._outputFilterSensitiveLog = outputFilter;
          return this;
        }
        ser(serializer) {
          this._serializer = serializer;
          return this;
        }
        de(deserializer) {
          this._deserializer = deserializer;
          return this;
        }
        build() {
          const closure = this;
          let CommandRef;
          return CommandRef = class extends Command {
            static getEndpointParameterInstructions() {
              return closure._ep;
            }
            constructor(input) {
              super();
              this.input = input;
              this.serialize = closure._serializer;
              this.deserialize = closure._deserializer;
              closure._init(this);
            }
            resolveMiddleware(stack, configuration, options) {
              return this.resolveMiddlewareWithContext(stack, configuration, options, {
                CommandCtor: CommandRef,
                middlewareFn: closure._middlewareFn,
                clientName: closure._clientName,
                commandName: closure._commandName,
                inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
                outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
                smithyContext: closure._smithyContext,
                additionalContext: closure._additionalContext
              });
            }
          };
        }
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/constants.js
  var init_constants4 = __esm({
    "node_modules/@smithy/smithy-client/dist-es/constants.js"() {
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js
  var createAggregatedClient;
  var init_create_aggregated_client = __esm({
    "node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js"() {
      createAggregatedClient = (commands3, Client2) => {
        for (const command of Object.keys(commands3)) {
          const CommandCtor = commands3[command];
          const methodImpl = async function(args, optionsOrCb, cb) {
            const command2 = new CommandCtor(args);
            if (typeof optionsOrCb === "function") {
              this.send(command2, optionsOrCb);
            } else if (typeof cb === "function") {
              if (typeof optionsOrCb !== "object")
                throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
              this.send(command2, optionsOrCb || {}, cb);
            } else {
              return this.send(command2, optionsOrCb);
            }
          };
          const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
          Client2.prototype[methodName] = methodImpl;
        }
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/parse-utils.js
  var expectBoolean, expectNumber, MAX_FLOAT, expectLong, expectInt32, expectSizedInt, castInt, expectNonNull, expectObject, expectString, expectUnion, strictParseDouble, NUMBER_REGEX, parseNumber, limitedParseDouble, parseFloatString, stackTraceWarning, logger;
  var init_parse_utils = __esm({
    "node_modules/@smithy/smithy-client/dist-es/parse-utils.js"() {
      expectBoolean = (value) => {
        if (value === null || value === void 0) {
          return void 0;
        }
        if (typeof value === "number") {
          if (value === 0 || value === 1) {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
          }
          if (value === 0) {
            return false;
          }
          if (value === 1) {
            return true;
          }
        }
        if (typeof value === "string") {
          const lower = value.toLowerCase();
          if (lower === "false" || lower === "true") {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
          }
          if (lower === "false") {
            return false;
          }
          if (lower === "true") {
            return true;
          }
        }
        if (typeof value === "boolean") {
          return value;
        }
        throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
      };
      expectNumber = (value) => {
        if (value === null || value === void 0) {
          return void 0;
        }
        if (typeof value === "string") {
          const parsed = parseFloat(value);
          if (!Number.isNaN(parsed)) {
            if (String(parsed) !== String(value)) {
              logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
            }
            return parsed;
          }
        }
        if (typeof value === "number") {
          return value;
        }
        throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
      };
      MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
      expectLong = (value) => {
        if (value === null || value === void 0) {
          return void 0;
        }
        if (Number.isInteger(value) && !Number.isNaN(value)) {
          return value;
        }
        throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
      };
      expectInt32 = (value) => expectSizedInt(value, 32);
      expectSizedInt = (value, size) => {
        const expected = expectLong(value);
        if (expected !== void 0 && castInt(expected, size) !== expected) {
          throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
        }
        return expected;
      };
      castInt = (value, size) => {
        switch (size) {
          case 32:
            return Int32Array.of(value)[0];
          case 16:
            return Int16Array.of(value)[0];
          case 8:
            return Int8Array.of(value)[0];
        }
      };
      expectNonNull = (value, location) => {
        if (value === null || value === void 0) {
          if (location) {
            throw new TypeError(`Expected a non-null value for ${location}`);
          }
          throw new TypeError("Expected a non-null value");
        }
        return value;
      };
      expectObject = (value) => {
        if (value === null || value === void 0) {
          return void 0;
        }
        if (typeof value === "object" && !Array.isArray(value)) {
          return value;
        }
        const receivedType = Array.isArray(value) ? "array" : typeof value;
        throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
      };
      expectString = (value) => {
        if (value === null || value === void 0) {
          return void 0;
        }
        if (typeof value === "string") {
          return value;
        }
        if (["boolean", "number", "bigint"].includes(typeof value)) {
          logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
          return String(value);
        }
        throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
      };
      expectUnion = (value) => {
        if (value === null || value === void 0) {
          return void 0;
        }
        const asObject = expectObject(value);
        const setKeys = Object.entries(asObject).filter(([, v6]) => v6 != null).map(([k5]) => k5);
        if (setKeys.length === 0) {
          throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
        }
        if (setKeys.length > 1) {
          throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
        }
        return asObject;
      };
      strictParseDouble = (value) => {
        if (typeof value == "string") {
          return expectNumber(parseNumber(value));
        }
        return expectNumber(value);
      };
      NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
      parseNumber = (value) => {
        const matches = value.match(NUMBER_REGEX);
        if (matches === null || matches[0].length !== value.length) {
          throw new TypeError(`Expected real number, got implicit NaN`);
        }
        return parseFloat(value);
      };
      limitedParseDouble = (value) => {
        if (typeof value == "string") {
          return parseFloatString(value);
        }
        return expectNumber(value);
      };
      parseFloatString = (value) => {
        switch (value) {
          case "NaN":
            return NaN;
          case "Infinity":
            return Infinity;
          case "-Infinity":
            return -Infinity;
          default:
            throw new Error(`Unable to parse float value: ${value}`);
        }
      };
      stackTraceWarning = (message) => {
        return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s5) => !s5.includes("stackTraceWarning")).join("\n");
      };
      logger = {
        warn: console.warn
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/date-utils.js
  var RFC3339, RFC3339_WITH_OFFSET, IMF_FIXDATE, RFC_850_DATE, ASC_TIME, parseEpochTimestamp, FIFTY_YEARS_IN_MILLIS;
  var init_date_utils = __esm({
    "node_modules/@smithy/smithy-client/dist-es/date-utils.js"() {
      init_parse_utils();
      RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
      RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
      IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
      RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
      ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
      parseEpochTimestamp = (value) => {
        if (value === null || value === void 0) {
          return void 0;
        }
        let valueAsDouble;
        if (typeof value === "number") {
          valueAsDouble = value;
        } else if (typeof value === "string") {
          valueAsDouble = strictParseDouble(value);
        } else {
          throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
        }
        if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
          throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
        }
        return new Date(Math.round(valueAsDouble * 1e3));
      };
      FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/exceptions.js
  var ServiceException, decorateServiceException;
  var init_exceptions = __esm({
    "node_modules/@smithy/smithy-client/dist-es/exceptions.js"() {
      ServiceException = class _ServiceException extends Error {
        constructor(options) {
          super(options.message);
          Object.setPrototypeOf(this, _ServiceException.prototype);
          this.name = options.name;
          this.$fault = options.$fault;
          this.$metadata = options.$metadata;
        }
      };
      decorateServiceException = (exception, additions = {}) => {
        Object.entries(additions).filter(([, v6]) => v6 !== void 0).forEach(([k5, v6]) => {
          if (exception[k5] == void 0 || exception[k5] === "") {
            exception[k5] = v6;
          }
        });
        const message = exception.message || exception.Message || "UnknownError";
        exception.message = message;
        delete exception.Message;
        return exception;
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
  var throwDefaultError, withBaseException, deserializeMetadata;
  var init_default_error_handler = __esm({
    "node_modules/@smithy/smithy-client/dist-es/default-error-handler.js"() {
      init_exceptions();
      throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
        const $metadata = deserializeMetadata(output);
        const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
        const response = new exceptionCtor({
          name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
          $fault: "client",
          $metadata
        });
        throw decorateServiceException(response, parsedBody);
      };
      withBaseException = (ExceptionCtor) => {
        return ({ output, parsedBody, errorCode }) => {
          throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
        };
      };
      deserializeMetadata = (output) => ({
        httpStatusCode: output.statusCode,
        requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"]
      });
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
  var loadConfigsForDefaultMode;
  var init_defaults_mode = __esm({
    "node_modules/@smithy/smithy-client/dist-es/defaults-mode.js"() {
      loadConfigsForDefaultMode = (mode) => {
        switch (mode) {
          case "standard":
            return {
              retryMode: "standard",
              connectionTimeout: 3100
            };
          case "in-region":
            return {
              retryMode: "standard",
              connectionTimeout: 1100
            };
          case "cross-region":
            return {
              retryMode: "standard",
              connectionTimeout: 3100
            };
          case "mobile":
            return {
              retryMode: "standard",
              connectionTimeout: 3e4
            };
          default:
            return {};
        }
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js
  var init_emitWarningIfUnsupportedVersion = __esm({
    "node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js"() {
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js
  var getChecksumConfiguration2, resolveChecksumRuntimeConfig2;
  var init_checksum3 = __esm({
    "node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js"() {
      init_dist_es();
      getChecksumConfiguration2 = (runtimeConfig) => {
        const checksumAlgorithms = [];
        for (const id in AlgorithmId) {
          const algorithmId = AlgorithmId[id];
          if (runtimeConfig[algorithmId] === void 0) {
            continue;
          }
          checksumAlgorithms.push({
            algorithmId: () => algorithmId,
            checksumConstructor: () => runtimeConfig[algorithmId]
          });
        }
        return {
          _checksumAlgorithms: checksumAlgorithms,
          addChecksumAlgorithm(algo) {
            this._checksumAlgorithms.push(algo);
          },
          checksumAlgorithms() {
            return this._checksumAlgorithms;
          }
        };
      };
      resolveChecksumRuntimeConfig2 = (clientConfig) => {
        const runtimeConfig = {};
        clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
          runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
        });
        return runtimeConfig;
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
  var getRetryConfiguration, resolveRetryRuntimeConfig;
  var init_retry2 = __esm({
    "node_modules/@smithy/smithy-client/dist-es/extensions/retry.js"() {
      getRetryConfiguration = (runtimeConfig) => {
        let _retryStrategy = runtimeConfig.retryStrategy;
        return {
          setRetryStrategy(retryStrategy) {
            _retryStrategy = retryStrategy;
          },
          retryStrategy() {
            return _retryStrategy;
          }
        };
      };
      resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
        const runtimeConfig = {};
        runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
        return runtimeConfig;
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
  var getDefaultExtensionConfiguration, resolveDefaultRuntimeConfig;
  var init_defaultExtensionConfiguration2 = __esm({
    "node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js"() {
      init_checksum3();
      init_retry2();
      getDefaultExtensionConfiguration = (runtimeConfig) => {
        return {
          ...getChecksumConfiguration2(runtimeConfig),
          ...getRetryConfiguration(runtimeConfig)
        };
      };
      resolveDefaultRuntimeConfig = (config) => {
        return {
          ...resolveChecksumRuntimeConfig2(config),
          ...resolveRetryRuntimeConfig(config)
        };
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/extensions/index.js
  var init_extensions3 = __esm({
    "node_modules/@smithy/smithy-client/dist-es/extensions/index.js"() {
      init_defaultExtensionConfiguration2();
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js
  var init_extended_encode_uri_component = __esm({
    "node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js"() {
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js
  var init_get_array_if_single_item = __esm({
    "node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js"() {
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
  var init_get_value_from_text_node = __esm({
    "node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js"() {
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/lazy-json.js
  var StringWrapper;
  var init_lazy_json = __esm({
    "node_modules/@smithy/smithy-client/dist-es/lazy-json.js"() {
      StringWrapper = function() {
        const Class = Object.getPrototypeOf(this).constructor;
        const Constructor = Function.bind.apply(String, [null, ...arguments]);
        const instance = new Constructor();
        Object.setPrototypeOf(instance, Class.prototype);
        return instance;
      };
      StringWrapper.prototype = Object.create(String.prototype, {
        constructor: {
          value: StringWrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      Object.setPrototypeOf(StringWrapper, String);
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/object-mapping.js
  var take, applyInstruction, nonNullish, pass;
  var init_object_mapping = __esm({
    "node_modules/@smithy/smithy-client/dist-es/object-mapping.js"() {
      take = (source, instructions) => {
        const out = {};
        for (const key in instructions) {
          applyInstruction(out, source, instructions, key);
        }
        return out;
      };
      applyInstruction = (target, source, instructions, targetKey) => {
        if (source !== null) {
          let instruction = instructions[targetKey];
          if (typeof instruction === "function") {
            instruction = [, instruction];
          }
          const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
          if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
            target[targetKey] = valueFn(source[sourceKey]);
          }
          return;
        }
        let [filter, value] = instructions[targetKey];
        if (typeof value === "function") {
          let _value;
          const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
          const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
          if (defaultFilterPassed) {
            target[targetKey] = _value;
          } else if (customFilterPassed) {
            target[targetKey] = value();
          }
        } else {
          const defaultFilterPassed = filter === void 0 && value != null;
          const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
          if (defaultFilterPassed || customFilterPassed) {
            target[targetKey] = value;
          }
        }
      };
      nonNullish = (_3) => _3 != null;
      pass = (_3) => _3;
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/resolve-path.js
  var init_resolve_path = __esm({
    "node_modules/@smithy/smithy-client/dist-es/resolve-path.js"() {
      init_extended_encode_uri_component();
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/ser-utils.js
  var serializeFloat;
  var init_ser_utils = __esm({
    "node_modules/@smithy/smithy-client/dist-es/ser-utils.js"() {
      serializeFloat = (value) => {
        if (value !== value) {
          return "NaN";
        }
        switch (value) {
          case Infinity:
            return "Infinity";
          case -Infinity:
            return "-Infinity";
          default:
            return value;
        }
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/serde-json.js
  var _json;
  var init_serde_json = __esm({
    "node_modules/@smithy/smithy-client/dist-es/serde-json.js"() {
      _json = (obj) => {
        if (obj == null) {
          return {};
        }
        if (Array.isArray(obj)) {
          return obj.filter((_3) => _3 != null).map(_json);
        }
        if (typeof obj === "object") {
          const target = {};
          for (const key of Object.keys(obj)) {
            if (obj[key] == null) {
              continue;
            }
            target[key] = _json(obj[key]);
          }
          return target;
        }
        return obj;
      };
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/split-every.js
  var init_split_every = __esm({
    "node_modules/@smithy/smithy-client/dist-es/split-every.js"() {
    }
  });

  // node_modules/@smithy/smithy-client/dist-es/index.js
  var init_dist_es26 = __esm({
    "node_modules/@smithy/smithy-client/dist-es/index.js"() {
      init_NoOpLogger();
      init_client2();
      init_collect_stream_body();
      init_command2();
      init_constants4();
      init_create_aggregated_client();
      init_date_utils();
      init_default_error_handler();
      init_defaults_mode();
      init_emitWarningIfUnsupportedVersion();
      init_extensions3();
      init_exceptions();
      init_extended_encode_uri_component();
      init_get_array_if_single_item();
      init_get_value_from_text_node();
      init_lazy_json();
      init_object_mapping();
      init_parse_utils();
      init_resolve_path();
      init_ser_utils();
      init_serde_json();
      init_split_every();
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js
  var isStreamingPayload;
  var init_isStreamingPayload_browser = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js"() {
      isStreamingPayload = (request) => request?.body instanceof ReadableStream;
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js
  var retryMiddleware, isRetryStrategyV2, getRetryErrorInfo, getRetryErrorType, retryMiddlewareOptions, getRetryPlugin, getRetryAfterHint;
  var init_retryMiddleware = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js"() {
      init_dist_es2();
      init_dist_es16();
      init_dist_es26();
      init_dist_es17();
      init_esm_browser();
      init_isStreamingPayload_browser();
      init_util2();
      retryMiddleware = (options) => (next, context) => async (args) => {
        let retryStrategy = await options.retryStrategy();
        const maxAttempts = await options.maxAttempts();
        if (isRetryStrategyV2(retryStrategy)) {
          retryStrategy = retryStrategy;
          let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
          let lastError = new Error();
          let attempts = 0;
          let totalRetryDelay = 0;
          const { request } = args;
          const isRequest = HttpRequest.isInstance(request);
          if (isRequest) {
            request.headers[INVOCATION_ID_HEADER] = v4_default();
          }
          while (true) {
            try {
              if (isRequest) {
                request.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
              }
              const { response, output } = await next(args);
              retryStrategy.recordSuccess(retryToken);
              output.$metadata.attempts = attempts + 1;
              output.$metadata.totalRetryDelay = totalRetryDelay;
              return { response, output };
            } catch (e5) {
              const retryErrorInfo = getRetryErrorInfo(e5);
              lastError = asSdkError(e5);
              if (isRequest && isStreamingPayload(request)) {
                (context.logger instanceof NoOpLogger ? console : context.logger)?.warn("An error was encountered in a non-retryable streaming request.");
                throw lastError;
              }
              try {
                retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
              } catch (refreshError) {
                if (!lastError.$metadata) {
                  lastError.$metadata = {};
                }
                lastError.$metadata.attempts = attempts + 1;
                lastError.$metadata.totalRetryDelay = totalRetryDelay;
                throw lastError;
              }
              attempts = retryToken.getRetryCount();
              const delay = retryToken.getRetryDelay();
              totalRetryDelay += delay;
              await new Promise((resolve) => setTimeout(resolve, delay));
            }
          }
        } else {
          retryStrategy = retryStrategy;
          if (retryStrategy?.mode)
            context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
          return retryStrategy.retry(next, args);
        }
      };
      isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined";
      getRetryErrorInfo = (error) => {
        const errorInfo = {
          error,
          errorType: getRetryErrorType(error)
        };
        const retryAfterHint = getRetryAfterHint(error.$response);
        if (retryAfterHint) {
          errorInfo.retryAfterHint = retryAfterHint;
        }
        return errorInfo;
      };
      getRetryErrorType = (error) => {
        if (isThrottlingError(error))
          return "THROTTLING";
        if (isTransientError(error))
          return "TRANSIENT";
        if (isServerError(error))
          return "SERVER_ERROR";
        return "CLIENT_ERROR";
      };
      retryMiddlewareOptions = {
        name: "retryMiddleware",
        tags: ["RETRY"],
        step: "finalizeRequest",
        priority: "high",
        override: true
      };
      getRetryPlugin = (options) => ({
        applyToStack: (clientStack) => {
          clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
        }
      });
      getRetryAfterHint = (response) => {
        if (!HttpResponse.isInstance(response))
          return;
        const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
        if (!retryAfterHeaderName)
          return;
        const retryAfter = response.headers[retryAfterHeaderName];
        const retryAfterSeconds = Number(retryAfter);
        if (!Number.isNaN(retryAfterSeconds))
          return new Date(retryAfterSeconds * 1e3);
        const retryAfterDate = new Date(retryAfter);
        return retryAfterDate;
      };
    }
  });

  // node_modules/@smithy/middleware-retry/dist-es/index.js
  var init_dist_es27 = __esm({
    "node_modules/@smithy/middleware-retry/dist-es/index.js"() {
      init_AdaptiveRetryStrategy2();
      init_StandardRetryStrategy2();
      init_configurations2();
      init_delayDecider();
      init_omitRetryHeadersMiddleware();
      init_retryDecider();
      init_retryMiddleware();
    }
  });

  // node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
  var httpSigningMiddlewareOptions, getHttpSigningPlugin;
  var init_getHttpSigningMiddleware = __esm({
    "node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js"() {
      init_dist_es27();
      init_httpSigningMiddleware();
      httpSigningMiddlewareOptions = {
        step: "finalizeRequest",
        tags: ["HTTP_SIGNING"],
        name: "httpSigningMiddleware",
        aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
        override: true,
        relation: "after",
        toMiddleware: retryMiddlewareOptions.name
      };
      getHttpSigningPlugin = (config) => ({
        applyToStack: (clientStack) => {
          clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
        }
      });
    }
  });

  // node_modules/@smithy/core/dist-es/middleware-http-signing/index.js
  var init_middleware_http_signing = __esm({
    "node_modules/@smithy/core/dist-es/middleware-http-signing/index.js"() {
      init_httpSigningMiddleware();
      init_getHttpSigningMiddleware();
    }
  });

  // node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
  var DefaultIdentityProviderConfig;
  var init_DefaultIdentityProviderConfig = __esm({
    "node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js"() {
      DefaultIdentityProviderConfig = class {
        constructor(config) {
          this.authSchemes = /* @__PURE__ */ new Map();
          for (const [key, value] of Object.entries(config)) {
            if (value !== void 0) {
              this.authSchemes.set(key, value);
            }
          }
        }
        getIdentityProvider(schemeId) {
          return this.authSchemes.get(schemeId);
        }
      };
    }
  });

  // node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js
  var init_httpApiKeyAuth = __esm({
    "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js"() {
      init_dist_es();
    }
  });

  // node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js
  var init_httpBearerAuth = __esm({
    "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js"() {
    }
  });

  // node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js
  var NoAuthSigner;
  var init_noAuth = __esm({
    "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js"() {
      NoAuthSigner = class {
        async sign(httpRequest, identity, signingProperties) {
          return httpRequest;
        }
      };
    }
  });

  // node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js
  var init_httpAuthSchemes = __esm({
    "node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js"() {
      init_httpApiKeyAuth();
      init_httpBearerAuth();
      init_noAuth();
    }
  });

  // node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
  var createIsIdentityExpiredFunction, EXPIRATION_MS, isIdentityExpired, doesIdentityRequireRefresh, memoizeIdentityProvider;
  var init_memoizeIdentityProvider = __esm({
    "node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js"() {
      createIsIdentityExpiredFunction = (expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
      EXPIRATION_MS = 3e5;
      isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
      doesIdentityRequireRefresh = (identity) => identity.expiration !== void 0;
      memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
        if (provider === void 0) {
          return void 0;
        }
        const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
        let resolved;
        let pending;
        let hasResult;
        let isConstant = false;
        const coalesceProvider = async (options) => {
          if (!pending) {
            pending = normalizedProvider(options);
          }
          try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
          } finally {
            pending = void 0;
          }
          return resolved;
        };
        if (isExpired === void 0) {
          return async (options) => {
            if (!hasResult || options?.forceRefresh) {
              resolved = await coalesceProvider(options);
            }
            return resolved;
          };
        }
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider(options);
          }
          if (isConstant) {
            return resolved;
          }
          if (!requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
          }
          if (isExpired(resolved)) {
            await coalesceProvider(options);
            return resolved;
          }
          return resolved;
        };
      };
    }
  });

  // node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js
  var init_util_identity_and_auth = __esm({
    "node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js"() {
      init_DefaultIdentityProviderConfig();
      init_httpAuthSchemes();
      init_memoizeIdentityProvider();
    }
  });

  // node_modules/@smithy/core/dist-es/getSmithyContext.js
  var init_getSmithyContext2 = __esm({
    "node_modules/@smithy/core/dist-es/getSmithyContext.js"() {
      init_dist_es();
    }
  });

  // node_modules/@smithy/core/dist-es/normalizeProvider.js
  var normalizeProvider2;
  var init_normalizeProvider2 = __esm({
    "node_modules/@smithy/core/dist-es/normalizeProvider.js"() {
      normalizeProvider2 = (input) => {
        if (typeof input === "function")
          return input;
        const promisified = Promise.resolve(input);
        return () => promisified;
      };
    }
  });

  // node_modules/@smithy/core/dist-es/protocols/requestBuilder.js
  var init_requestBuilder = __esm({
    "node_modules/@smithy/core/dist-es/protocols/requestBuilder.js"() {
      init_dist_es2();
      init_dist_es26();
    }
  });

  // node_modules/@smithy/core/dist-es/pagination/createPaginator.js
  function createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {
    return async function* paginateOperation(config, input, ...additionalArguments) {
      let token = config.startingToken || void 0;
      let hasNext = true;
      let page;
      while (hasNext) {
        input[inputTokenName] = token;
        if (pageSizeTokenName) {
          input[pageSizeTokenName] = input[pageSizeTokenName] ?? config.pageSize;
        }
        if (config.client instanceof ClientCtor) {
          page = await makePagedClientRequest(CommandCtor, config.client, input, ...additionalArguments);
        } else {
          throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);
        }
        yield page;
        const prevToken = token;
        token = get(page, outputTokenName);
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
      }
      return void 0;
    };
  }
  var makePagedClientRequest, get;
  var init_createPaginator = __esm({
    "node_modules/@smithy/core/dist-es/pagination/createPaginator.js"() {
      makePagedClientRequest = async (CommandCtor, client, input, ...args) => {
        return await client.send(new CommandCtor(input), ...args);
      };
      get = (fromObject, path) => {
        let cursor = fromObject;
        const pathComponents = path.split(".");
        for (const step of pathComponents) {
          if (!cursor || typeof cursor !== "object") {
            return void 0;
          }
          cursor = cursor[step];
        }
        return cursor;
      };
    }
  });

  // node_modules/@smithy/core/dist-es/index.js
  var init_dist_es28 = __esm({
    "node_modules/@smithy/core/dist-es/index.js"() {
      init_middleware_http_auth_scheme();
      init_middleware_http_signing();
      init_util_identity_and_auth();
      init_getSmithyContext2();
      init_normalizeProvider2();
      init_requestBuilder();
      init_createPaginator();
    }
  });

  // node_modules/@smithy/middleware-content-length/dist-es/index.js
  function contentLengthMiddleware(bodyLengthChecker) {
    return (next) => async (args) => {
      const request = args.request;
      if (HttpRequest.isInstance(request)) {
        const { body, headers } = request;
        if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER) === -1) {
          try {
            const length = bodyLengthChecker(body);
            request.headers = {
              ...request.headers,
              [CONTENT_LENGTH_HEADER]: String(length)
            };
          } catch (error) {
          }
        }
      }
      return next({
        ...args,
        request
      });
    };
  }
  var CONTENT_LENGTH_HEADER, contentLengthMiddlewareOptions, getContentLengthPlugin;
  var init_dist_es29 = __esm({
    "node_modules/@smithy/middleware-content-length/dist-es/index.js"() {
      init_dist_es2();
      CONTENT_LENGTH_HEADER = "content-length";
      contentLengthMiddlewareOptions = {
        step: "build",
        tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
        name: "contentLengthMiddleware",
        override: true
      };
      getContentLengthPlugin = (options) => ({
        applyToStack: (clientStack) => {
          clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
        }
      });
    }
  });

  // node_modules/@aws-sdk/core/dist-es/client/emitWarningIfUnsupportedVersion.js
  var init_emitWarningIfUnsupportedVersion2 = __esm({
    "node_modules/@aws-sdk/core/dist-es/client/emitWarningIfUnsupportedVersion.js"() {
    }
  });

  // node_modules/@aws-sdk/core/dist-es/client/index.js
  var init_client3 = __esm({
    "node_modules/@aws-sdk/core/dist-es/client/index.js"() {
      init_emitWarningIfUnsupportedVersion2();
    }
  });

  // node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getDateHeader.js
  var getDateHeader;
  var init_getDateHeader = __esm({
    "node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getDateHeader.js"() {
      init_dist_es2();
      getDateHeader = (response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0;
    }
  });

  // node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getSkewCorrectedDate.js
  var getSkewCorrectedDate;
  var init_getSkewCorrectedDate = __esm({
    "node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getSkewCorrectedDate.js"() {
      getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);
    }
  });

  // node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/isClockSkewed.js
  var isClockSkewed;
  var init_isClockSkewed = __esm({
    "node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/isClockSkewed.js"() {
      init_getSkewCorrectedDate();
      isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5;
    }
  });

  // node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
  var getUpdatedSystemClockOffset;
  var init_getUpdatedSystemClockOffset = __esm({
    "node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js"() {
      init_isClockSkewed();
      getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
        const clockTimeInMs = Date.parse(clockTime);
        if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
          return clockTimeInMs - Date.now();
        }
        return currentSystemClockOffset;
      };
    }
  });

  // node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/index.js
  var init_utils2 = __esm({
    "node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/index.js"() {
      init_getDateHeader();
      init_getSkewCorrectedDate();
      init_getUpdatedSystemClockOffset();
    }
  });

  // node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
  var throwSigningPropertyError, validateSigningProperties, AwsSdkSigV4Signer;
  var init_AwsSdkSigV4Signer = __esm({
    "node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js"() {
      init_dist_es2();
      init_utils2();
      throwSigningPropertyError = (name, property) => {
        if (!property) {
          throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
        }
        return property;
      };
      validateSigningProperties = async (signingProperties) => {
        const context = throwSigningPropertyError("context", signingProperties.context);
        const config = throwSigningPropertyError("config", signingProperties.config);
        const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
        const signerFunction = throwSigningPropertyError("signer", config.signer);
        const signer = await signerFunction(authScheme);
        const signingRegion = signingProperties?.signingRegion;
        const signingName = signingProperties?.signingName;
        return {
          config,
          signer,
          signingRegion,
          signingName
        };
      };
      AwsSdkSigV4Signer = class {
        async sign(httpRequest, identity, signingProperties) {
          if (!HttpRequest.isInstance(httpRequest)) {
            throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
          }
          const { config, signer, signingRegion, signingName } = await validateSigningProperties(signingProperties);
          const signedRequest = await signer.sign(httpRequest, {
            signingDate: getSkewCorrectedDate(config.systemClockOffset),
            signingRegion,
            signingService: signingName
          });
          return signedRequest;
        }
        errorHandler(signingProperties) {
          return (error) => {
            const serverTime = error.ServerTime ?? getDateHeader(error.$response);
            if (serverTime) {
              const config = throwSigningPropertyError("config", signingProperties.config);
              const initialSystemClockOffset = config.systemClockOffset;
              config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
              const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
              if (clockSkewCorrected && error.$metadata) {
                error.$metadata.clockSkewCorrected = true;
              }
            }
            throw error;
          };
        }
        successHandler(httpResponse, signingProperties) {
          const dateHeader = getDateHeader(httpResponse);
          if (dateHeader) {
            const config = throwSigningPropertyError("config", signingProperties.config);
            config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
          }
        }
      };
    }
  });

  // node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js
  var tslib_es6_exports = {};
  __export(tslib_es6_exports, {
    __assign: () => __assign,
    __asyncDelegator: () => __asyncDelegator,
    __asyncGenerator: () => __asyncGenerator,
    __asyncValues: () => __asyncValues,
    __await: () => __await,
    __awaiter: () => __awaiter,
    __classPrivateFieldGet: () => __classPrivateFieldGet,
    __classPrivateFieldSet: () => __classPrivateFieldSet,
    __createBinding: () => __createBinding,
    __decorate: () => __decorate,
    __exportStar: () => __exportStar,
    __extends: () => __extends,
    __generator: () => __generator,
    __importDefault: () => __importDefault,
    __importStar: () => __importStar,
    __makeTemplateObject: () => __makeTemplateObject,
    __metadata: () => __metadata,
    __param: () => __param,
    __read: () => __read,
    __rest: () => __rest,
    __spread: () => __spread,
    __spreadArrays: () => __spreadArrays,
    __values: () => __values
  });
  function __extends(d5, b4) {
    extendStatics(d5, b4);
    function __() {
      this.constructor = d5;
    }
    d5.prototype = b4 === null ? Object.create(b4) : (__.prototype = b4.prototype, new __());
  }
  function __rest(s5, e5) {
    var t5 = {};
    for (var p5 in s5)
      if (Object.prototype.hasOwnProperty.call(s5, p5) && e5.indexOf(p5) < 0)
        t5[p5] = s5[p5];
    if (s5 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i5 = 0, p5 = Object.getOwnPropertySymbols(s5); i5 < p5.length; i5++) {
        if (e5.indexOf(p5[i5]) < 0 && Object.prototype.propertyIsEnumerable.call(s5, p5[i5]))
          t5[p5[i5]] = s5[p5[i5]];
      }
    return t5;
  }
  function __decorate(decorators, target, key, desc) {
    var c5 = arguments.length, r5 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d5;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r5 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i5 = decorators.length - 1; i5 >= 0; i5--)
        if (d5 = decorators[i5])
          r5 = (c5 < 3 ? d5(r5) : c5 > 3 ? d5(target, key, r5) : d5(target, key)) || r5;
    return c5 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
  }
  function __param(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter(thisArg, _arguments, P3, generator) {
    function adopt(value) {
      return value instanceof P3 ? value : new P3(function(resolve) {
        resolve(value);
      });
    }
    return new (P3 || (P3 = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e5) {
          reject(e5);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e5) {
          reject(e5);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _3 = { label: 0, sent: function() {
      if (t5[0] & 1)
        throw t5[1];
      return t5[1];
    }, trys: [], ops: [] }, f5, y4, t5, g5;
    return g5 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g5[Symbol.iterator] = function() {
      return this;
    }), g5;
    function verb(n5) {
      return function(v6) {
        return step([n5, v6]);
      };
    }
    function step(op) {
      if (f5)
        throw new TypeError("Generator is already executing.");
      while (_3)
        try {
          if (f5 = 1, y4 && (t5 = op[0] & 2 ? y4["return"] : op[0] ? y4["throw"] || ((t5 = y4["return"]) && t5.call(y4), 0) : y4.next) && !(t5 = t5.call(y4, op[1])).done)
            return t5;
          if (y4 = 0, t5)
            op = [op[0] & 2, t5.value];
          switch (op[0]) {
            case 0:
            case 1:
              t5 = op;
              break;
            case 4:
              _3.label++;
              return { value: op[1], done: false };
            case 5:
              _3.label++;
              y4 = op[1];
              op = [0];
              continue;
            case 7:
              op = _3.ops.pop();
              _3.trys.pop();
              continue;
            default:
              if (!(t5 = _3.trys, t5 = t5.length > 0 && t5[t5.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _3 = 0;
                continue;
              }
              if (op[0] === 3 && (!t5 || op[1] > t5[0] && op[1] < t5[3])) {
                _3.label = op[1];
                break;
              }
              if (op[0] === 6 && _3.label < t5[1]) {
                _3.label = t5[1];
                t5 = op;
                break;
              }
              if (t5 && _3.label < t5[2]) {
                _3.label = t5[2];
                _3.ops.push(op);
                break;
              }
              if (t5[2])
                _3.ops.pop();
              _3.trys.pop();
              continue;
          }
          op = body.call(thisArg, _3);
        } catch (e5) {
          op = [6, e5];
          y4 = 0;
        } finally {
          f5 = t5 = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __createBinding(o5, m5, k5, k22) {
    if (k22 === void 0)
      k22 = k5;
    o5[k22] = m5[k5];
  }
  function __exportStar(m5, exports2) {
    for (var p5 in m5)
      if (p5 !== "default" && !exports2.hasOwnProperty(p5))
        exports2[p5] = m5[p5];
  }
  function __values(o5) {
    var s5 = typeof Symbol === "function" && Symbol.iterator, m5 = s5 && o5[s5], i5 = 0;
    if (m5)
      return m5.call(o5);
    if (o5 && typeof o5.length === "number")
      return {
        next: function() {
          if (o5 && i5 >= o5.length)
            o5 = void 0;
          return { value: o5 && o5[i5++], done: !o5 };
        }
      };
    throw new TypeError(s5 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o5, n5) {
    var m5 = typeof Symbol === "function" && o5[Symbol.iterator];
    if (!m5)
      return o5;
    var i5 = m5.call(o5), r5, ar = [], e5;
    try {
      while ((n5 === void 0 || n5-- > 0) && !(r5 = i5.next()).done)
        ar.push(r5.value);
    } catch (error) {
      e5 = { error };
    } finally {
      try {
        if (r5 && !r5.done && (m5 = i5["return"]))
          m5.call(i5);
      } finally {
        if (e5)
          throw e5.error;
      }
    }
    return ar;
  }
  function __spread() {
    for (var ar = [], i5 = 0; i5 < arguments.length; i5++)
      ar = ar.concat(__read(arguments[i5]));
    return ar;
  }
  function __spreadArrays() {
    for (var s5 = 0, i5 = 0, il = arguments.length; i5 < il; i5++)
      s5 += arguments[i5].length;
    for (var r5 = Array(s5), k5 = 0, i5 = 0; i5 < il; i5++)
      for (var a5 = arguments[i5], j5 = 0, jl = a5.length; j5 < jl; j5++, k5++)
        r5[k5] = a5[j5];
    return r5;
  }
  function __await(v6) {
    return this instanceof __await ? (this.v = v6, this) : new __await(v6);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var g5 = generator.apply(thisArg, _arguments || []), i5, q3 = [];
    return i5 = {}, verb("next"), verb("throw"), verb("return"), i5[Symbol.asyncIterator] = function() {
      return this;
    }, i5;
    function verb(n5) {
      if (g5[n5])
        i5[n5] = function(v6) {
          return new Promise(function(a5, b4) {
            q3.push([n5, v6, a5, b4]) > 1 || resume(n5, v6);
          });
        };
    }
    function resume(n5, v6) {
      try {
        step(g5[n5](v6));
      } catch (e5) {
        settle(q3[0][3], e5);
      }
    }
    function step(r5) {
      r5.value instanceof __await ? Promise.resolve(r5.value.v).then(fulfill, reject) : settle(q3[0][2], r5);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f5, v6) {
      if (f5(v6), q3.shift(), q3.length)
        resume(q3[0][0], q3[0][1]);
    }
  }
  function __asyncDelegator(o5) {
    var i5, p5;
    return i5 = {}, verb("next"), verb("throw", function(e5) {
      throw e5;
    }), verb("return"), i5[Symbol.iterator] = function() {
      return this;
    }, i5;
    function verb(n5, f5) {
      i5[n5] = o5[n5] ? function(v6) {
        return (p5 = !p5) ? { value: __await(o5[n5](v6)), done: n5 === "return" } : f5 ? f5(v6) : v6;
      } : f5;
    }
  }
  function __asyncValues(o5) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var m5 = o5[Symbol.asyncIterator], i5;
    return m5 ? m5.call(o5) : (o5 = typeof __values === "function" ? __values(o5) : o5[Symbol.iterator](), i5 = {}, verb("next"), verb("throw"), verb("return"), i5[Symbol.asyncIterator] = function() {
      return this;
    }, i5);
    function verb(n5) {
      i5[n5] = o5[n5] && function(v6) {
        return new Promise(function(resolve, reject) {
          v6 = o5[n5](v6), settle(resolve, reject, v6.done, v6.value);
        });
      };
    }
    function settle(resolve, reject, d5, v6) {
      Promise.resolve(v6).then(function(v7) {
        resolve({ value: v7, done: d5 });
      }, reject);
    }
  }
  function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  function __importStar(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k5 in mod)
        if (Object.hasOwnProperty.call(mod, k5))
          result[k5] = mod[k5];
    }
    result.default = mod;
    return result;
  }
  function __importDefault(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  }
  function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
  }
  function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
  }
  var extendStatics, __assign;
  var init_tslib_es6 = __esm({
    "node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js"() {
      extendStatics = function(d5, b4) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d6, b5) {
          d6.__proto__ = b5;
        } || function(d6, b5) {
          for (var p5 in b5)
            if (b5.hasOwnProperty(p5))
              d6[p5] = b5[p5];
        };
        return extendStatics(d5, b4);
      };
      __assign = function() {
        __assign = Object.assign || function __assign6(t5) {
          for (var s5, i5 = 1, n5 = arguments.length; i5 < n5; i5++) {
            s5 = arguments[i5];
            for (var p5 in s5)
              if (Object.prototype.hasOwnProperty.call(s5, p5))
                t5[p5] = s5[p5];
          }
          return t5;
        };
        return __assign.apply(this, arguments);
      };
    }
  });

  // node_modules/@aws-sdk/util-utf8-browser/dist-cjs/pureJs.js
  var require_pureJs = __commonJS({
    "node_modules/@aws-sdk/util-utf8-browser/dist-cjs/pureJs.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.toUtf8 = exports2.fromUtf8 = void 0;
      var fromUtf82 = (input) => {
        const bytes = [];
        for (let i5 = 0, len = input.length; i5 < len; i5++) {
          const value = input.charCodeAt(i5);
          if (value < 128) {
            bytes.push(value);
          } else if (value < 2048) {
            bytes.push(value >> 6 | 192, value & 63 | 128);
          } else if (i5 + 1 < input.length && (value & 64512) === 55296 && (input.charCodeAt(i5 + 1) & 64512) === 56320) {
            const surrogatePair = 65536 + ((value & 1023) << 10) + (input.charCodeAt(++i5) & 1023);
            bytes.push(surrogatePair >> 18 | 240, surrogatePair >> 12 & 63 | 128, surrogatePair >> 6 & 63 | 128, surrogatePair & 63 | 128);
          } else {
            bytes.push(value >> 12 | 224, value >> 6 & 63 | 128, value & 63 | 128);
          }
        }
        return Uint8Array.from(bytes);
      };
      exports2.fromUtf8 = fromUtf82;
      var toUtf82 = (input) => {
        let decoded = "";
        for (let i5 = 0, len = input.length; i5 < len; i5++) {
          const byte = input[i5];
          if (byte < 128) {
            decoded += String.fromCharCode(byte);
          } else if (192 <= byte && byte < 224) {
            const nextByte = input[++i5];
            decoded += String.fromCharCode((byte & 31) << 6 | nextByte & 63);
          } else if (240 <= byte && byte < 365) {
            const surrogatePair = [byte, input[++i5], input[++i5], input[++i5]];
            const encoded = "%" + surrogatePair.map((byteValue) => byteValue.toString(16)).join("%");
            decoded += decodeURIComponent(encoded);
          } else {
            decoded += String.fromCharCode((byte & 15) << 12 | (input[++i5] & 63) << 6 | input[++i5] & 63);
          }
        }
        return decoded;
      };
      exports2.toUtf8 = toUtf82;
    }
  });

  // node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js
  var require_whatwgEncodingApi = __commonJS({
    "node_modules/@aws-sdk/util-utf8-browser/dist-cjs/whatwgEncodingApi.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.toUtf8 = exports2.fromUtf8 = void 0;
      function fromUtf82(input) {
        return new TextEncoder().encode(input);
      }
      exports2.fromUtf8 = fromUtf82;
      function toUtf82(input) {
        return new TextDecoder("utf-8").decode(input);
      }
      exports2.toUtf8 = toUtf82;
    }
  });

  // node_modules/@aws-sdk/util-utf8-browser/dist-cjs/index.js
  var require_dist_cjs = __commonJS({
    "node_modules/@aws-sdk/util-utf8-browser/dist-cjs/index.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.toUtf8 = exports2.fromUtf8 = void 0;
      var pureJs_1 = require_pureJs();
      var whatwgEncodingApi_1 = require_whatwgEncodingApi();
      var fromUtf82 = (input) => typeof TextEncoder === "function" ? (0, whatwgEncodingApi_1.fromUtf8)(input) : (0, pureJs_1.fromUtf8)(input);
      exports2.fromUtf8 = fromUtf82;
      var toUtf82 = (input) => typeof TextDecoder === "function" ? (0, whatwgEncodingApi_1.toUtf8)(input) : (0, pureJs_1.toUtf8)(input);
      exports2.toUtf8 = toUtf82;
    }
  });

  // node_modules/@aws-crypto/util/build/convertToBuffer.js
  var require_convertToBuffer = __commonJS({
    "node_modules/@aws-crypto/util/build/convertToBuffer.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.convertToBuffer = void 0;
      var util_utf8_browser_1 = require_dist_cjs();
      var fromUtf82 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
        return Buffer.from(input, "utf8");
      } : util_utf8_browser_1.fromUtf8;
      function convertToBuffer(data) {
        if (data instanceof Uint8Array)
          return data;
        if (typeof data === "string") {
          return fromUtf82(data);
        }
        if (ArrayBuffer.isView(data)) {
          return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
        }
        return new Uint8Array(data);
      }
      exports2.convertToBuffer = convertToBuffer;
    }
  });

  // node_modules/@aws-crypto/util/build/isEmptyData.js
  var require_isEmptyData = __commonJS({
    "node_modules/@aws-crypto/util/build/isEmptyData.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.isEmptyData = void 0;
      function isEmptyData(data) {
        if (typeof data === "string") {
          return data.length === 0;
        }
        return data.byteLength === 0;
      }
      exports2.isEmptyData = isEmptyData;
    }
  });

  // node_modules/@aws-crypto/util/build/numToUint8.js
  var require_numToUint8 = __commonJS({
    "node_modules/@aws-crypto/util/build/numToUint8.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.numToUint8 = void 0;
      function numToUint8(num) {
        return new Uint8Array([
          (num & 4278190080) >> 24,
          (num & 16711680) >> 16,
          (num & 65280) >> 8,
          num & 255
        ]);
      }
      exports2.numToUint8 = numToUint8;
    }
  });

  // node_modules/@aws-crypto/util/build/uint32ArrayFrom.js
  var require_uint32ArrayFrom = __commonJS({
    "node_modules/@aws-crypto/util/build/uint32ArrayFrom.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.uint32ArrayFrom = void 0;
      function uint32ArrayFrom(a_lookUpTable) {
        if (!Uint32Array.from) {
          var return_array = new Uint32Array(a_lookUpTable.length);
          var a_index = 0;
          while (a_index < a_lookUpTable.length) {
            return_array[a_index] = a_lookUpTable[a_index];
            a_index += 1;
          }
          return return_array;
        }
        return Uint32Array.from(a_lookUpTable);
      }
      exports2.uint32ArrayFrom = uint32ArrayFrom;
    }
  });

  // node_modules/@aws-crypto/util/build/index.js
  var require_build = __commonJS({
    "node_modules/@aws-crypto/util/build/index.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.uint32ArrayFrom = exports2.numToUint8 = exports2.isEmptyData = exports2.convertToBuffer = void 0;
      var convertToBuffer_1 = require_convertToBuffer();
      Object.defineProperty(exports2, "convertToBuffer", { enumerable: true, get: function() {
        return convertToBuffer_1.convertToBuffer;
      } });
      var isEmptyData_1 = require_isEmptyData();
      Object.defineProperty(exports2, "isEmptyData", { enumerable: true, get: function() {
        return isEmptyData_1.isEmptyData;
      } });
      var numToUint8_1 = require_numToUint8();
      Object.defineProperty(exports2, "numToUint8", { enumerable: true, get: function() {
        return numToUint8_1.numToUint8;
      } });
      var uint32ArrayFrom_1 = require_uint32ArrayFrom();
      Object.defineProperty(exports2, "uint32ArrayFrom", { enumerable: true, get: function() {
        return uint32ArrayFrom_1.uint32ArrayFrom;
      } });
    }
  });

  // node_modules/@aws-crypto/crc32/build/aws_crc32.js
  var require_aws_crc32 = __commonJS({
    "node_modules/@aws-crypto/crc32/build/aws_crc32.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.AwsCrc32 = void 0;
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var util_1 = require_build();
      var index_1 = require_build2();
      var AwsCrc32 = (
        /** @class */
        function() {
          function AwsCrc322() {
            this.crc32 = new index_1.Crc32();
          }
          AwsCrc322.prototype.update = function(toHash) {
            if ((0, util_1.isEmptyData)(toHash))
              return;
            this.crc32.update((0, util_1.convertToBuffer)(toHash));
          };
          AwsCrc322.prototype.digest = function() {
            return tslib_1.__awaiter(this, void 0, void 0, function() {
              return tslib_1.__generator(this, function(_a) {
                return [2, (0, util_1.numToUint8)(this.crc32.digest())];
              });
            });
          };
          AwsCrc322.prototype.reset = function() {
            this.crc32 = new index_1.Crc32();
          };
          return AwsCrc322;
        }()
      );
      exports2.AwsCrc32 = AwsCrc32;
    }
  });

  // node_modules/@aws-crypto/crc32/build/index.js
  var require_build2 = __commonJS({
    "node_modules/@aws-crypto/crc32/build/index.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.AwsCrc32 = exports2.Crc32 = exports2.crc32 = void 0;
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var util_1 = require_build();
      function crc32(data) {
        return new Crc323().update(data).digest();
      }
      exports2.crc32 = crc32;
      var Crc323 = (
        /** @class */
        function() {
          function Crc324() {
            this.checksum = 4294967295;
          }
          Crc324.prototype.update = function(data) {
            var e_1, _a;
            try {
              for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                var byte = data_1_1.value;
                this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 255];
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (data_1_1 && !data_1_1.done && (_a = data_1.return))
                  _a.call(data_1);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
            return this;
          };
          Crc324.prototype.digest = function() {
            return (this.checksum ^ 4294967295) >>> 0;
          };
          return Crc324;
        }()
      );
      exports2.Crc32 = Crc323;
      var a_lookUpTable = [
        0,
        1996959894,
        3993919788,
        2567524794,
        124634137,
        1886057615,
        3915621685,
        2657392035,
        249268274,
        2044508324,
        3772115230,
        2547177864,
        162941995,
        2125561021,
        3887607047,
        2428444049,
        498536548,
        1789927666,
        4089016648,
        2227061214,
        450548861,
        1843258603,
        4107580753,
        2211677639,
        325883990,
        1684777152,
        4251122042,
        2321926636,
        335633487,
        1661365465,
        4195302755,
        2366115317,
        997073096,
        1281953886,
        3579855332,
        2724688242,
        1006888145,
        1258607687,
        3524101629,
        2768942443,
        901097722,
        1119000684,
        3686517206,
        2898065728,
        853044451,
        1172266101,
        3705015759,
        2882616665,
        651767980,
        1373503546,
        3369554304,
        3218104598,
        565507253,
        1454621731,
        3485111705,
        3099436303,
        671266974,
        1594198024,
        3322730930,
        2970347812,
        795835527,
        1483230225,
        3244367275,
        3060149565,
        1994146192,
        31158534,
        2563907772,
        4023717930,
        1907459465,
        112637215,
        2680153253,
        3904427059,
        2013776290,
        251722036,
        2517215374,
        3775830040,
        2137656763,
        141376813,
        2439277719,
        3865271297,
        1802195444,
        476864866,
        2238001368,
        4066508878,
        1812370925,
        453092731,
        2181625025,
        4111451223,
        1706088902,
        314042704,
        2344532202,
        4240017532,
        1658658271,
        366619977,
        2362670323,
        4224994405,
        1303535960,
        984961486,
        2747007092,
        3569037538,
        1256170817,
        1037604311,
        2765210733,
        3554079995,
        1131014506,
        879679996,
        2909243462,
        3663771856,
        1141124467,
        855842277,
        2852801631,
        3708648649,
        1342533948,
        654459306,
        3188396048,
        3373015174,
        1466479909,
        544179635,
        3110523913,
        3462522015,
        1591671054,
        702138776,
        2966460450,
        3352799412,
        1504918807,
        783551873,
        3082640443,
        3233442989,
        3988292384,
        2596254646,
        62317068,
        1957810842,
        3939845945,
        2647816111,
        81470997,
        1943803523,
        3814918930,
        2489596804,
        225274430,
        2053790376,
        3826175755,
        2466906013,
        167816743,
        2097651377,
        4027552580,
        2265490386,
        503444072,
        1762050814,
        4150417245,
        2154129355,
        426522225,
        1852507879,
        4275313526,
        2312317920,
        282753626,
        1742555852,
        4189708143,
        2394877945,
        397917763,
        1622183637,
        3604390888,
        2714866558,
        953729732,
        1340076626,
        3518719985,
        2797360999,
        1068828381,
        1219638859,
        3624741850,
        2936675148,
        906185462,
        1090812512,
        3747672003,
        2825379669,
        829329135,
        1181335161,
        3412177804,
        3160834842,
        628085408,
        1382605366,
        3423369109,
        3138078467,
        570562233,
        1426400815,
        3317316542,
        2998733608,
        733239954,
        1555261956,
        3268935591,
        3050360625,
        752459403,
        1541320221,
        2607071920,
        3965973030,
        1969922972,
        40735498,
        2617837225,
        3943577151,
        1913087877,
        83908371,
        2512341634,
        3803740692,
        2075208622,
        213261112,
        2463272603,
        3855990285,
        2094854071,
        198958881,
        2262029012,
        4057260610,
        1759359992,
        534414190,
        2176718541,
        4139329115,
        1873836001,
        414664567,
        2282248934,
        4279200368,
        1711684554,
        285281116,
        2405801727,
        4167216745,
        1634467795,
        376229701,
        2685067896,
        3608007406,
        1308918612,
        956543938,
        2808555105,
        3495958263,
        1231636301,
        1047427035,
        2932959818,
        3654703836,
        1088359270,
        936918e3,
        2847714899,
        3736837829,
        1202900863,
        817233897,
        3183342108,
        3401237130,
        1404277552,
        615818150,
        3134207493,
        3453421203,
        1423857449,
        601450431,
        3009837614,
        3294710456,
        1567103746,
        711928724,
        3020668471,
        3272380065,
        1510334235,
        755167117
      ];
      var lookupTable = (0, util_1.uint32ArrayFrom)(a_lookUpTable);
      var aws_crc32_1 = require_aws_crc32();
      Object.defineProperty(exports2, "AwsCrc32", { enumerable: true, get: function() {
        return aws_crc32_1.AwsCrc32;
      } });
    }
  });

  // node_modules/@smithy/eventstream-codec/dist-es/Int64.js
  function negate(bytes) {
    for (let i5 = 0; i5 < 8; i5++) {
      bytes[i5] ^= 255;
    }
    for (let i5 = 7; i5 > -1; i5--) {
      bytes[i5]++;
      if (bytes[i5] !== 0)
        break;
    }
  }
  var Int64;
  var init_Int64 = __esm({
    "node_modules/@smithy/eventstream-codec/dist-es/Int64.js"() {
      init_dist_es24();
      Int64 = class _Int64 {
        constructor(bytes) {
          this.bytes = bytes;
          if (bytes.byteLength !== 8) {
            throw new Error("Int64 buffers must be exactly 8 bytes");
          }
        }
        static fromNumber(number) {
          if (number > 9223372036854776e3 || number < -9223372036854776e3) {
            throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
          }
          const bytes = new Uint8Array(8);
          for (let i5 = 7, remaining = Math.abs(Math.round(number)); i5 > -1 && remaining > 0; i5--, remaining /= 256) {
            bytes[i5] = remaining;
          }
          if (number < 0) {
            negate(bytes);
          }
          return new _Int64(bytes);
        }
        valueOf() {
          const bytes = this.bytes.slice(0);
          const negative = bytes[0] & 128;
          if (negative) {
            negate(bytes);
          }
          return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
        }
        toString() {
          return String(this.valueOf());
        }
      };
    }
  });

  // node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js
  var HeaderMarshaller, HEADER_VALUE_TYPE, BOOLEAN_TAG, BYTE_TAG, SHORT_TAG, INT_TAG, LONG_TAG, BINARY_TAG, STRING_TAG, TIMESTAMP_TAG, UUID_TAG, UUID_PATTERN;
  var init_HeaderMarshaller = __esm({
    "node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js"() {
      init_dist_es24();
      init_Int64();
      HeaderMarshaller = class {
        constructor(toUtf82, fromUtf82) {
          this.toUtf8 = toUtf82;
          this.fromUtf8 = fromUtf82;
        }
        format(headers) {
          const chunks = [];
          for (const headerName of Object.keys(headers)) {
            const bytes = this.fromUtf8(headerName);
            chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
          }
          const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
          let position = 0;
          for (const chunk of chunks) {
            out.set(chunk, position);
            position += chunk.byteLength;
          }
          return out;
        }
        formatHeaderValue(header) {
          switch (header.type) {
            case "boolean":
              return Uint8Array.from([header.value ? 0 : 1]);
            case "byte":
              return Uint8Array.from([2, header.value]);
            case "short":
              const shortView = new DataView(new ArrayBuffer(3));
              shortView.setUint8(0, 3);
              shortView.setInt16(1, header.value, false);
              return new Uint8Array(shortView.buffer);
            case "integer":
              const intView = new DataView(new ArrayBuffer(5));
              intView.setUint8(0, 4);
              intView.setInt32(1, header.value, false);
              return new Uint8Array(intView.buffer);
            case "long":
              const longBytes = new Uint8Array(9);
              longBytes[0] = 5;
              longBytes.set(header.value.bytes, 1);
              return longBytes;
            case "binary":
              const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
              binView.setUint8(0, 6);
              binView.setUint16(1, header.value.byteLength, false);
              const binBytes = new Uint8Array(binView.buffer);
              binBytes.set(header.value, 3);
              return binBytes;
            case "string":
              const utf8Bytes = this.fromUtf8(header.value);
              const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
              strView.setUint8(0, 7);
              strView.setUint16(1, utf8Bytes.byteLength, false);
              const strBytes = new Uint8Array(strView.buffer);
              strBytes.set(utf8Bytes, 3);
              return strBytes;
            case "timestamp":
              const tsBytes = new Uint8Array(9);
              tsBytes[0] = 8;
              tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
              return tsBytes;
            case "uuid":
              if (!UUID_PATTERN.test(header.value)) {
                throw new Error(`Invalid UUID received: ${header.value}`);
              }
              const uuidBytes = new Uint8Array(17);
              uuidBytes[0] = 9;
              uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
              return uuidBytes;
          }
        }
        parse(headers) {
          const out = {};
          let position = 0;
          while (position < headers.byteLength) {
            const nameLength = headers.getUint8(position++);
            const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
            position += nameLength;
            switch (headers.getUint8(position++)) {
              case 0:
                out[name] = {
                  type: BOOLEAN_TAG,
                  value: true
                };
                break;
              case 1:
                out[name] = {
                  type: BOOLEAN_TAG,
                  value: false
                };
                break;
              case 2:
                out[name] = {
                  type: BYTE_TAG,
                  value: headers.getInt8(position++)
                };
                break;
              case 3:
                out[name] = {
                  type: SHORT_TAG,
                  value: headers.getInt16(position, false)
                };
                position += 2;
                break;
              case 4:
                out[name] = {
                  type: INT_TAG,
                  value: headers.getInt32(position, false)
                };
                position += 4;
                break;
              case 5:
                out[name] = {
                  type: LONG_TAG,
                  value: new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
                };
                position += 8;
                break;
              case 6:
                const binaryLength = headers.getUint16(position, false);
                position += 2;
                out[name] = {
                  type: BINARY_TAG,
                  value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
                };
                position += binaryLength;
                break;
              case 7:
                const stringLength = headers.getUint16(position, false);
                position += 2;
                out[name] = {
                  type: STRING_TAG,
                  value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
                };
                position += stringLength;
                break;
              case 8:
                out[name] = {
                  type: TIMESTAMP_TAG,
                  value: new Date(new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
                };
                position += 8;
                break;
              case 9:
                const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
                position += 16;
                out[name] = {
                  type: UUID_TAG,
                  value: `${toHex(uuidBytes.subarray(0, 4))}-${toHex(uuidBytes.subarray(4, 6))}-${toHex(uuidBytes.subarray(6, 8))}-${toHex(uuidBytes.subarray(8, 10))}-${toHex(uuidBytes.subarray(10))}`
                };
                break;
              default:
                throw new Error(`Unrecognized header type tag`);
            }
          }
          return out;
        }
      };
      (function(HEADER_VALUE_TYPE2) {
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolTrue"] = 0] = "boolTrue";
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolFalse"] = 1] = "boolFalse";
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byte"] = 2] = "byte";
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["short"] = 3] = "short";
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["integer"] = 4] = "integer";
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["long"] = 5] = "long";
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byteArray"] = 6] = "byteArray";
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["string"] = 7] = "string";
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["timestamp"] = 8] = "timestamp";
        HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["uuid"] = 9] = "uuid";
      })(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
      BOOLEAN_TAG = "boolean";
      BYTE_TAG = "byte";
      SHORT_TAG = "short";
      INT_TAG = "integer";
      LONG_TAG = "long";
      BINARY_TAG = "binary";
      STRING_TAG = "string";
      TIMESTAMP_TAG = "timestamp";
      UUID_TAG = "uuid";
      UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
    }
  });

  // node_modules/@smithy/eventstream-codec/dist-es/splitMessage.js
  var import_crc32, PRELUDE_MEMBER_LENGTH, PRELUDE_LENGTH, CHECKSUM_LENGTH, MINIMUM_MESSAGE_LENGTH;
  var init_splitMessage = __esm({
    "node_modules/@smithy/eventstream-codec/dist-es/splitMessage.js"() {
      import_crc32 = __toESM(require_build2());
      PRELUDE_MEMBER_LENGTH = 4;
      PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
      CHECKSUM_LENGTH = 4;
      MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
    }
  });

  // node_modules/@smithy/eventstream-codec/dist-es/EventStreamCodec.js
  var import_crc322;
  var init_EventStreamCodec = __esm({
    "node_modules/@smithy/eventstream-codec/dist-es/EventStreamCodec.js"() {
      import_crc322 = __toESM(require_build2());
      init_HeaderMarshaller();
      init_splitMessage();
    }
  });

  // node_modules/@smithy/eventstream-codec/dist-es/Message.js
  var init_Message = __esm({
    "node_modules/@smithy/eventstream-codec/dist-es/Message.js"() {
    }
  });

  // node_modules/@smithy/eventstream-codec/dist-es/MessageDecoderStream.js
  var init_MessageDecoderStream = __esm({
    "node_modules/@smithy/eventstream-codec/dist-es/MessageDecoderStream.js"() {
    }
  });

  // node_modules/@smithy/eventstream-codec/dist-es/MessageEncoderStream.js
  var init_MessageEncoderStream = __esm({
    "node_modules/@smithy/eventstream-codec/dist-es/MessageEncoderStream.js"() {
    }
  });

  // node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageDecoderStream.js
  var init_SmithyMessageDecoderStream = __esm({
    "node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageDecoderStream.js"() {
    }
  });

  // node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageEncoderStream.js
  var init_SmithyMessageEncoderStream = __esm({
    "node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageEncoderStream.js"() {
    }
  });

  // node_modules/@smithy/eventstream-codec/dist-es/index.js
  var init_dist_es30 = __esm({
    "node_modules/@smithy/eventstream-codec/dist-es/index.js"() {
      init_EventStreamCodec();
      init_HeaderMarshaller();
      init_Int64();
      init_Message();
      init_MessageDecoderStream();
      init_MessageEncoderStream();
      init_SmithyMessageDecoderStream();
      init_SmithyMessageEncoderStream();
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/constants.js
  var ALGORITHM_QUERY_PARAM, CREDENTIAL_QUERY_PARAM, AMZ_DATE_QUERY_PARAM, SIGNED_HEADERS_QUERY_PARAM, EXPIRES_QUERY_PARAM, SIGNATURE_QUERY_PARAM, TOKEN_QUERY_PARAM, AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER, GENERATED_HEADERS, SIGNATURE_HEADER, SHA256_HEADER, TOKEN_HEADER, ALWAYS_UNSIGNABLE_HEADERS, PROXY_HEADER_PATTERN, SEC_HEADER_PATTERN, ALGORITHM_IDENTIFIER, EVENT_ALGORITHM_IDENTIFIER, UNSIGNED_PAYLOAD, MAX_CACHE_SIZE, KEY_TYPE_IDENTIFIER, MAX_PRESIGNED_TTL;
  var init_constants5 = __esm({
    "node_modules/@smithy/signature-v4/dist-es/constants.js"() {
      ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
      CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
      AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
      SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
      EXPIRES_QUERY_PARAM = "X-Amz-Expires";
      SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
      TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
      AUTH_HEADER = "authorization";
      AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
      DATE_HEADER = "date";
      GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
      SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
      SHA256_HEADER = "x-amz-content-sha256";
      TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
      ALWAYS_UNSIGNABLE_HEADERS = {
        authorization: true,
        "cache-control": true,
        connection: true,
        expect: true,
        from: true,
        "keep-alive": true,
        "max-forwards": true,
        pragma: true,
        referer: true,
        te: true,
        trailer: true,
        "transfer-encoding": true,
        upgrade: true,
        "user-agent": true,
        "x-amzn-trace-id": true
      };
      PROXY_HEADER_PATTERN = /^proxy-/;
      SEC_HEADER_PATTERN = /^sec-/;
      ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
      EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
      UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
      MAX_CACHE_SIZE = 50;
      KEY_TYPE_IDENTIFIER = "aws4_request";
      MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
  var signingKeyCache, cacheQueue, createScope, getSigningKey, hmac;
  var init_credentialDerivation = __esm({
    "node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js"() {
      init_dist_es24();
      init_dist_es19();
      init_constants5();
      signingKeyCache = {};
      cacheQueue = [];
      createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
      getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
        const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
        const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
        if (cacheKey in signingKeyCache) {
          return signingKeyCache[cacheKey];
        }
        cacheQueue.push(cacheKey);
        while (cacheQueue.length > MAX_CACHE_SIZE) {
          delete signingKeyCache[cacheQueue.shift()];
        }
        let key = `AWS4${credentials.secretAccessKey}`;
        for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
          key = await hmac(sha256Constructor, key, signable);
        }
        return signingKeyCache[cacheKey] = key;
      };
      hmac = (ctor, secret, data) => {
        const hash = new ctor(secret);
        hash.update(toUint8Array(data));
        return hash.digest();
      };
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
  var getCanonicalHeaders;
  var init_getCanonicalHeaders = __esm({
    "node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js"() {
      init_constants5();
      getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
        const canonical = {};
        for (const headerName of Object.keys(headers).sort()) {
          if (headers[headerName] == void 0) {
            continue;
          }
          const canonicalHeaderName = headerName.toLowerCase();
          if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
            if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
              continue;
            }
          }
          canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
        }
        return canonical;
      };
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
  var getCanonicalQuery;
  var init_getCanonicalQuery = __esm({
    "node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js"() {
      init_dist_es21();
      init_constants5();
      getCanonicalQuery = ({ query = {} }) => {
        const keys = [];
        const serialized = {};
        for (const key of Object.keys(query).sort()) {
          if (key.toLowerCase() === SIGNATURE_HEADER) {
            continue;
          }
          keys.push(key);
          const value = query[key];
          if (typeof value === "string") {
            serialized[key] = `${escapeUri(key)}=${escapeUri(value)}`;
          } else if (Array.isArray(value)) {
            serialized[key] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${escapeUri(key)}=${escapeUri(value2)}`]), []).sort().join("&");
          }
        }
        return keys.map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
      };
    }
  });

  // node_modules/@smithy/is-array-buffer/dist-es/index.js
  var isArrayBuffer;
  var init_dist_es31 = __esm({
    "node_modules/@smithy/is-array-buffer/dist-es/index.js"() {
      isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
  var getPayloadHash;
  var init_getPayloadHash = __esm({
    "node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js"() {
      init_dist_es31();
      init_dist_es24();
      init_dist_es19();
      init_constants5();
      getPayloadHash = async ({ headers, body }, hashConstructor) => {
        for (const headerName of Object.keys(headers)) {
          if (headerName.toLowerCase() === SHA256_HEADER) {
            return headers[headerName];
          }
        }
        if (body == void 0) {
          return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
        } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
          const hashCtor = new hashConstructor();
          hashCtor.update(toUint8Array(body));
          return toHex(await hashCtor.digest());
        }
        return UNSIGNED_PAYLOAD;
      };
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/headerUtil.js
  var hasHeader;
  var init_headerUtil = __esm({
    "node_modules/@smithy/signature-v4/dist-es/headerUtil.js"() {
      hasHeader = (soughtHeader, headers) => {
        soughtHeader = soughtHeader.toLowerCase();
        for (const headerName of Object.keys(headers)) {
          if (soughtHeader === headerName.toLowerCase()) {
            return true;
          }
        }
        return false;
      };
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/cloneRequest.js
  var cloneRequest, cloneQuery2;
  var init_cloneRequest = __esm({
    "node_modules/@smithy/signature-v4/dist-es/cloneRequest.js"() {
      cloneRequest = ({ headers, query, ...rest }) => ({
        ...rest,
        headers: { ...headers },
        query: query ? cloneQuery2(query) : void 0
      });
      cloneQuery2 = (query) => Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
          ...carry,
          [paramName]: Array.isArray(param) ? [...param] : param
        };
      }, {});
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
  var moveHeadersToQuery;
  var init_moveHeadersToQuery = __esm({
    "node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js"() {
      init_cloneRequest();
      moveHeadersToQuery = (request, options = {}) => {
        const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
        for (const name of Object.keys(headers)) {
          const lname = name.toLowerCase();
          if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) {
            query[name] = headers[name];
            delete headers[name];
          }
        }
        return {
          ...request,
          headers,
          query
        };
      };
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
  var prepareRequest;
  var init_prepareRequest = __esm({
    "node_modules/@smithy/signature-v4/dist-es/prepareRequest.js"() {
      init_cloneRequest();
      init_constants5();
      prepareRequest = (request) => {
        request = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
        for (const headerName of Object.keys(request.headers)) {
          if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
          }
        }
        return request;
      };
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/utilDate.js
  var iso8601, toDate2;
  var init_utilDate = __esm({
    "node_modules/@smithy/signature-v4/dist-es/utilDate.js"() {
      iso8601 = (time) => toDate2(time).toISOString().replace(/\.\d{3}Z$/, "Z");
      toDate2 = (time) => {
        if (typeof time === "number") {
          return new Date(time * 1e3);
        }
        if (typeof time === "string") {
          if (Number(time)) {
            return new Date(Number(time) * 1e3);
          }
          return new Date(time);
        }
        return time;
      };
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
  var SignatureV4, formatDate, getCanonicalHeaderList;
  var init_SignatureV4 = __esm({
    "node_modules/@smithy/signature-v4/dist-es/SignatureV4.js"() {
      init_dist_es30();
      init_dist_es24();
      init_dist_es10();
      init_dist_es19();
      init_constants5();
      init_credentialDerivation();
      init_getCanonicalHeaders();
      init_getCanonicalQuery();
      init_getPayloadHash();
      init_headerUtil();
      init_moveHeadersToQuery();
      init_prepareRequest();
      init_utilDate();
      SignatureV4 = class {
        constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
          this.headerMarshaller = new HeaderMarshaller(toUtf8, fromUtf8);
          this.service = service;
          this.sha256 = sha256;
          this.uriEscapePath = uriEscapePath;
          this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
          this.regionProvider = normalizeProvider(region);
          this.credentialProvider = normalizeProvider(credentials);
        }
        async presign(originalRequest, options = {}) {
          const { signingDate = /* @__PURE__ */ new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService } = options;
          const credentials = await this.credentialProvider();
          this.validateResolvedCredentials(credentials);
          const region = signingRegion ?? await this.regionProvider();
          const { longDate, shortDate } = formatDate(signingDate);
          if (expiresIn > MAX_PRESIGNED_TTL) {
            return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
          }
          const scope = createScope(shortDate, region, signingService ?? this.service);
          const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders });
          if (credentials.sessionToken) {
            request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
          }
          request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
          request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
          request.query[AMZ_DATE_QUERY_PARAM] = longDate;
          request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
          const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
          request.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
          request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
          return request;
        }
        async sign(toSign, options) {
          if (typeof toSign === "string") {
            return this.signString(toSign, options);
          } else if (toSign.headers && toSign.payload) {
            return this.signEvent(toSign, options);
          } else if (toSign.message) {
            return this.signMessage(toSign, options);
          } else {
            return this.signRequest(toSign, options);
          }
        }
        async signEvent({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService }) {
          const region = signingRegion ?? await this.regionProvider();
          const { shortDate, longDate } = formatDate(signingDate);
          const scope = createScope(shortDate, region, signingService ?? this.service);
          const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
          const hash = new this.sha256();
          hash.update(headers);
          const hashedHeaders = toHex(await hash.digest());
          const stringToSign = [
            EVENT_ALGORITHM_IDENTIFIER,
            longDate,
            scope,
            priorSignature,
            hashedHeaders,
            hashedPayload
          ].join("\n");
          return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
        }
        async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService }) {
          const promise = this.signEvent({
            headers: this.headerMarshaller.format(signableMessage.message.headers),
            payload: signableMessage.message.body
          }, {
            signingDate,
            signingRegion,
            signingService,
            priorSignature: signableMessage.priorSignature
          });
          return promise.then((signature) => {
            return { message: signableMessage.message, signature };
          });
        }
        async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService } = {}) {
          const credentials = await this.credentialProvider();
          this.validateResolvedCredentials(credentials);
          const region = signingRegion ?? await this.regionProvider();
          const { shortDate } = formatDate(signingDate);
          const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
          hash.update(toUint8Array(stringToSign));
          return toHex(await hash.digest());
        }
        async signRequest(requestToSign, { signingDate = /* @__PURE__ */ new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
          const credentials = await this.credentialProvider();
          this.validateResolvedCredentials(credentials);
          const region = signingRegion ?? await this.regionProvider();
          const request = prepareRequest(requestToSign);
          const { longDate, shortDate } = formatDate(signingDate);
          const scope = createScope(shortDate, region, signingService ?? this.service);
          request.headers[AMZ_DATE_HEADER] = longDate;
          if (credentials.sessionToken) {
            request.headers[TOKEN_HEADER] = credentials.sessionToken;
          }
          const payloadHash = await getPayloadHash(request, this.sha256);
          if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
            request.headers[SHA256_HEADER] = payloadHash;
          }
          const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
          const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
          request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
          return request;
        }
        createCanonicalRequest(request, canonicalHeaders, payloadHash) {
          const sortedHeaders = Object.keys(canonicalHeaders).sort();
          return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
        }
        async createStringToSign(longDate, credentialScope, canonicalRequest) {
          const hash = new this.sha256();
          hash.update(toUint8Array(canonicalRequest));
          const hashedRequest = await hash.digest();
          return `${ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
        }
        getCanonicalPath({ path }) {
          if (this.uriEscapePath) {
            const normalizedPathSegments = [];
            for (const pathSegment of path.split("/")) {
              if (pathSegment?.length === 0)
                continue;
              if (pathSegment === ".")
                continue;
              if (pathSegment === "..") {
                normalizedPathSegments.pop();
              } else {
                normalizedPathSegments.push(pathSegment);
              }
            }
            const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
            const doubleEncoded = encodeURIComponent(normalizedPath);
            return doubleEncoded.replace(/%2F/g, "/");
          }
          return path;
        }
        async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
          const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
          const hash = new this.sha256(await keyPromise);
          hash.update(toUint8Array(stringToSign));
          return toHex(await hash.digest());
        }
        getSigningKey(credentials, region, shortDate, service) {
          return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
        }
        validateResolvedCredentials(credentials) {
          if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
            throw new Error("Resolved credential object is not valid");
          }
        }
      };
      formatDate = (now) => {
        const longDate = iso8601(now).replace(/[\-:]/g, "");
        return {
          longDate,
          shortDate: longDate.slice(0, 8)
        };
      };
      getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(";");
    }
  });

  // node_modules/@smithy/signature-v4/dist-es/index.js
  var init_dist_es32 = __esm({
    "node_modules/@smithy/signature-v4/dist-es/index.js"() {
      init_SignatureV4();
      init_getCanonicalHeaders();
      init_getCanonicalQuery();
      init_getPayloadHash();
      init_moveHeadersToQuery();
      init_prepareRequest();
      init_credentialDerivation();
    }
  });

  // node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
  var resolveAwsSdkSigV4Config;
  var init_resolveAwsSdkSigV4Config = __esm({
    "node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js"() {
      init_dist_es28();
      init_dist_es32();
      resolveAwsSdkSigV4Config = (config) => {
        let normalizedCreds;
        if (config.credentials) {
          normalizedCreds = memoizeIdentityProvider(config.credentials, isIdentityExpired, doesIdentityRequireRefresh);
        }
        if (!normalizedCreds) {
          if (config.credentialDefaultProvider) {
            normalizedCreds = normalizeProvider2(config.credentialDefaultProvider(Object.assign({}, config, {
              parentClientConfig: config
            })));
          } else {
            normalizedCreds = async () => {
              throw new Error("`credentials` is missing");
            };
          }
        }
        const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256 } = config;
        let signer;
        if (config.signer) {
          signer = normalizeProvider2(config.signer);
        } else if (config.regionInfoProvider) {
          signer = () => normalizeProvider2(config.region)().then(async (region) => [
            await config.regionInfoProvider(region, {
              useFipsEndpoint: await config.useFipsEndpoint(),
              useDualstackEndpoint: await config.useDualstackEndpoint()
            }) || {},
            region
          ]).then(([regionInfo, region]) => {
            const { signingRegion, signingService } = regionInfo;
            config.signingRegion = config.signingRegion || signingRegion || region;
            config.signingName = config.signingName || signingService || config.serviceId;
            const params = {
              ...config,
              credentials: normalizedCreds,
              region: config.signingRegion,
              service: config.signingName,
              sha256,
              uriEscapePath: signingEscapePath
            };
            const SignerCtor = config.signerConstructor || SignatureV4;
            return new SignerCtor(params);
          });
        } else {
          signer = async (authScheme) => {
            authScheme = Object.assign({}, {
              name: "sigv4",
              signingName: config.signingName || config.defaultSigningName,
              signingRegion: await normalizeProvider2(config.region)(),
              properties: {}
            }, authScheme);
            const signingRegion = authScheme.signingRegion;
            const signingService = authScheme.signingName;
            config.signingRegion = config.signingRegion || signingRegion;
            config.signingName = config.signingName || signingService || config.serviceId;
            const params = {
              ...config,
              credentials: normalizedCreds,
              region: config.signingRegion,
              service: config.signingName,
              sha256,
              uriEscapePath: signingEscapePath
            };
            const SignerCtor = config.signerConstructor || SignatureV4;
            return new SignerCtor(params);
          };
        }
        return {
          ...config,
          systemClockOffset,
          signingEscapePath,
          credentials: normalizedCreds,
          signer
        };
      };
    }
  });

  // node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/index.js
  var init_aws_sdk = __esm({
    "node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/index.js"() {
      init_AwsSdkSigV4Signer();
      init_resolveAwsSdkSigV4Config();
    }
  });

  // node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/index.js
  var init_httpAuthSchemes2 = __esm({
    "node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/index.js"() {
      init_aws_sdk();
    }
  });

  // node_modules/@aws-sdk/core/dist-es/protocols/coercing-serializers.js
  var init_coercing_serializers = __esm({
    "node_modules/@aws-sdk/core/dist-es/protocols/coercing-serializers.js"() {
    }
  });

  // node_modules/@aws-sdk/core/dist-es/protocols/json/awsExpectUnion.js
  var awsExpectUnion;
  var init_awsExpectUnion = __esm({
    "node_modules/@aws-sdk/core/dist-es/protocols/json/awsExpectUnion.js"() {
      init_dist_es26();
      awsExpectUnion = (value) => {
        if (value == null) {
          return void 0;
        }
        if (typeof value === "object" && "__type" in value) {
          delete value.__type;
        }
        return expectUnion(value);
      };
    }
  });

  // node_modules/@aws-sdk/core/dist-es/protocols/common.js
  var collectBodyString;
  var init_common = __esm({
    "node_modules/@aws-sdk/core/dist-es/protocols/common.js"() {
      init_dist_es26();
      collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
    }
  });

  // node_modules/@aws-sdk/core/dist-es/protocols/json/parseJsonBody.js
  var parseJsonBody, parseJsonErrorBody, loadRestJsonErrorCode;
  var init_parseJsonBody = __esm({
    "node_modules/@aws-sdk/core/dist-es/protocols/json/parseJsonBody.js"() {
      init_common();
      parseJsonBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
        if (encoded.length) {
          try {
            return JSON.parse(encoded);
          } catch (e5) {
            if (e5?.name === "SyntaxError") {
              Object.defineProperty(e5, "$responseBodyText", {
                value: encoded
              });
            }
            throw e5;
          }
        }
        return {};
      });
      parseJsonErrorBody = async (errorBody, context) => {
        const value = await parseJsonBody(errorBody, context);
        value.message = value.message ?? value.Message;
        return value;
      };
      loadRestJsonErrorCode = (output, data) => {
        const findKey2 = (object, key) => Object.keys(object).find((k5) => k5.toLowerCase() === key.toLowerCase());
        const sanitizeErrorCode = (rawValue) => {
          let cleanValue = rawValue;
          if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
          }
          if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
          }
          if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
          }
          if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
          }
          return cleanValue;
        };
        const headerKey = findKey2(output.headers, "x-amzn-errortype");
        if (headerKey !== void 0) {
          return sanitizeErrorCode(output.headers[headerKey]);
        }
        if (data.code !== void 0) {
          return sanitizeErrorCode(data.code);
        }
        if (data["__type"] !== void 0) {
          return sanitizeErrorCode(data["__type"]);
        }
      };
    }
  });

  // node_modules/fast-xml-parser/src/util.js
  var require_util = __commonJS({
    "node_modules/fast-xml-parser/src/util.js"(exports2) {
      "use strict";
      var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
      var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
      var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
      var regexName = new RegExp("^" + nameRegexp + "$");
      var getAllMatches = function(string, regex) {
        const matches = [];
        let match2 = regex.exec(string);
        while (match2) {
          const allmatches = [];
          allmatches.startIndex = regex.lastIndex - match2[0].length;
          const len = match2.length;
          for (let index = 0; index < len; index++) {
            allmatches.push(match2[index]);
          }
          matches.push(allmatches);
          match2 = regex.exec(string);
        }
        return matches;
      };
      var isName = function(string) {
        const match2 = regexName.exec(string);
        return !(match2 === null || typeof match2 === "undefined");
      };
      exports2.isExist = function(v6) {
        return typeof v6 !== "undefined";
      };
      exports2.isEmptyObject = function(obj) {
        return Object.keys(obj).length === 0;
      };
      exports2.merge = function(target, a5, arrayMode) {
        if (a5) {
          const keys = Object.keys(a5);
          const len = keys.length;
          for (let i5 = 0; i5 < len; i5++) {
            if (arrayMode === "strict") {
              target[keys[i5]] = [a5[keys[i5]]];
            } else {
              target[keys[i5]] = a5[keys[i5]];
            }
          }
        }
      };
      exports2.getValue = function(v6) {
        if (exports2.isExist(v6)) {
          return v6;
        } else {
          return "";
        }
      };
      exports2.isName = isName;
      exports2.getAllMatches = getAllMatches;
      exports2.nameRegexp = nameRegexp;
    }
  });

  // node_modules/fast-xml-parser/src/validator.js
  var require_validator = __commonJS({
    "node_modules/fast-xml-parser/src/validator.js"(exports2) {
      "use strict";
      var util = require_util();
      var defaultOptions2 = {
        allowBooleanAttributes: false,
        //A tag can have attributes without any value
        unpairedTags: []
      };
      exports2.validate = function(xmlData, options) {
        options = Object.assign({}, defaultOptions2, options);
        const tags = [];
        let tagFound = false;
        let reachedRoot = false;
        if (xmlData[0] === "\uFEFF") {
          xmlData = xmlData.substr(1);
        }
        for (let i5 = 0; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === "<" && xmlData[i5 + 1] === "?") {
            i5 += 2;
            i5 = readPI(xmlData, i5);
            if (i5.err)
              return i5;
          } else if (xmlData[i5] === "<") {
            let tagStartPos = i5;
            i5++;
            if (xmlData[i5] === "!") {
              i5 = readCommentAndCDATA(xmlData, i5);
              continue;
            } else {
              let closingTag = false;
              if (xmlData[i5] === "/") {
                closingTag = true;
                i5++;
              }
              let tagName = "";
              for (; i5 < xmlData.length && xmlData[i5] !== ">" && xmlData[i5] !== " " && xmlData[i5] !== "	" && xmlData[i5] !== "\n" && xmlData[i5] !== "\r"; i5++) {
                tagName += xmlData[i5];
              }
              tagName = tagName.trim();
              if (tagName[tagName.length - 1] === "/") {
                tagName = tagName.substring(0, tagName.length - 1);
                i5--;
              }
              if (!validateTagName(tagName)) {
                let msg;
                if (tagName.trim().length === 0) {
                  msg = "Invalid space after '<'.";
                } else {
                  msg = "Tag '" + tagName + "' is an invalid name.";
                }
                return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i5));
              }
              const result = readAttributeStr(xmlData, i5);
              if (result === false) {
                return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i5));
              }
              let attrStr = result.value;
              i5 = result.index;
              if (attrStr[attrStr.length - 1] === "/") {
                const attrStrStart = i5 - attrStr.length;
                attrStr = attrStr.substring(0, attrStr.length - 1);
                const isValid = validateAttributeString(attrStr, options);
                if (isValid === true) {
                  tagFound = true;
                } else {
                  return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
                }
              } else if (closingTag) {
                if (!result.tagClosed) {
                  return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i5));
                } else if (attrStr.trim().length > 0) {
                  return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
                } else {
                  const otg = tags.pop();
                  if (tagName !== otg.tagName) {
                    let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                    return getErrorObject(
                      "InvalidTag",
                      "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                      getLineNumberForPosition(xmlData, tagStartPos)
                    );
                  }
                  if (tags.length == 0) {
                    reachedRoot = true;
                  }
                }
              } else {
                const isValid = validateAttributeString(attrStr, options);
                if (isValid !== true) {
                  return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i5 - attrStr.length + isValid.err.line));
                }
                if (reachedRoot === true) {
                  return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i5));
                } else if (options.unpairedTags.indexOf(tagName) !== -1) {
                } else {
                  tags.push({ tagName, tagStartPos });
                }
                tagFound = true;
              }
              for (i5++; i5 < xmlData.length; i5++) {
                if (xmlData[i5] === "<") {
                  if (xmlData[i5 + 1] === "!") {
                    i5++;
                    i5 = readCommentAndCDATA(xmlData, i5);
                    continue;
                  } else if (xmlData[i5 + 1] === "?") {
                    i5 = readPI(xmlData, ++i5);
                    if (i5.err)
                      return i5;
                  } else {
                    break;
                  }
                } else if (xmlData[i5] === "&") {
                  const afterAmp = validateAmpersand(xmlData, i5);
                  if (afterAmp == -1)
                    return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i5));
                  i5 = afterAmp;
                } else {
                  if (reachedRoot === true && !isWhiteSpace(xmlData[i5])) {
                    return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i5));
                  }
                }
              }
              if (xmlData[i5] === "<") {
                i5--;
              }
            }
          } else {
            if (isWhiteSpace(xmlData[i5])) {
              continue;
            }
            return getErrorObject("InvalidChar", "char '" + xmlData[i5] + "' is not expected.", getLineNumberForPosition(xmlData, i5));
          }
        }
        if (!tagFound) {
          return getErrorObject("InvalidXml", "Start tag expected.", 1);
        } else if (tags.length == 1) {
          return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
        } else if (tags.length > 0) {
          return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t5) => t5.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
        }
        return true;
      };
      function isWhiteSpace(char) {
        return char === " " || char === "	" || char === "\n" || char === "\r";
      }
      function readPI(xmlData, i5) {
        const start = i5;
        for (; i5 < xmlData.length; i5++) {
          if (xmlData[i5] == "?" || xmlData[i5] == " ") {
            const tagname = xmlData.substr(start, i5 - start);
            if (i5 > 5 && tagname === "xml") {
              return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i5));
            } else if (xmlData[i5] == "?" && xmlData[i5 + 1] == ">") {
              i5++;
              break;
            } else {
              continue;
            }
          }
        }
        return i5;
      }
      function readCommentAndCDATA(xmlData, i5) {
        if (xmlData.length > i5 + 5 && xmlData[i5 + 1] === "-" && xmlData[i5 + 2] === "-") {
          for (i5 += 3; i5 < xmlData.length; i5++) {
            if (xmlData[i5] === "-" && xmlData[i5 + 1] === "-" && xmlData[i5 + 2] === ">") {
              i5 += 2;
              break;
            }
          }
        } else if (xmlData.length > i5 + 8 && xmlData[i5 + 1] === "D" && xmlData[i5 + 2] === "O" && xmlData[i5 + 3] === "C" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "Y" && xmlData[i5 + 6] === "P" && xmlData[i5 + 7] === "E") {
          let angleBracketsCount = 1;
          for (i5 += 8; i5 < xmlData.length; i5++) {
            if (xmlData[i5] === "<") {
              angleBracketsCount++;
            } else if (xmlData[i5] === ">") {
              angleBracketsCount--;
              if (angleBracketsCount === 0) {
                break;
              }
            }
          }
        } else if (xmlData.length > i5 + 9 && xmlData[i5 + 1] === "[" && xmlData[i5 + 2] === "C" && xmlData[i5 + 3] === "D" && xmlData[i5 + 4] === "A" && xmlData[i5 + 5] === "T" && xmlData[i5 + 6] === "A" && xmlData[i5 + 7] === "[") {
          for (i5 += 8; i5 < xmlData.length; i5++) {
            if (xmlData[i5] === "]" && xmlData[i5 + 1] === "]" && xmlData[i5 + 2] === ">") {
              i5 += 2;
              break;
            }
          }
        }
        return i5;
      }
      var doubleQuote = '"';
      var singleQuote = "'";
      function readAttributeStr(xmlData, i5) {
        let attrStr = "";
        let startChar = "";
        let tagClosed = false;
        for (; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === doubleQuote || xmlData[i5] === singleQuote) {
            if (startChar === "") {
              startChar = xmlData[i5];
            } else if (startChar !== xmlData[i5]) {
            } else {
              startChar = "";
            }
          } else if (xmlData[i5] === ">") {
            if (startChar === "") {
              tagClosed = true;
              break;
            }
          }
          attrStr += xmlData[i5];
        }
        if (startChar !== "") {
          return false;
        }
        return {
          value: attrStr,
          index: i5,
          tagClosed
        };
      }
      var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
      function validateAttributeString(attrStr, options) {
        const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
        const attrNames = {};
        for (let i5 = 0; i5 < matches.length; i5++) {
          if (matches[i5][1].length === 0) {
            return getErrorObject("InvalidAttr", "Attribute '" + matches[i5][2] + "' has no space in starting.", getPositionFromMatch(matches[i5]));
          } else if (matches[i5][3] !== void 0 && matches[i5][4] === void 0) {
            return getErrorObject("InvalidAttr", "Attribute '" + matches[i5][2] + "' is without value.", getPositionFromMatch(matches[i5]));
          } else if (matches[i5][3] === void 0 && !options.allowBooleanAttributes) {
            return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i5][2] + "' is not allowed.", getPositionFromMatch(matches[i5]));
          }
          const attrName = matches[i5][2];
          if (!validateAttrName(attrName)) {
            return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i5]));
          }
          if (!attrNames.hasOwnProperty(attrName)) {
            attrNames[attrName] = 1;
          } else {
            return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i5]));
          }
        }
        return true;
      }
      function validateNumberAmpersand(xmlData, i5) {
        let re = /\d/;
        if (xmlData[i5] === "x") {
          i5++;
          re = /[\da-fA-F]/;
        }
        for (; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === ";")
            return i5;
          if (!xmlData[i5].match(re))
            break;
        }
        return -1;
      }
      function validateAmpersand(xmlData, i5) {
        i5++;
        if (xmlData[i5] === ";")
          return -1;
        if (xmlData[i5] === "#") {
          i5++;
          return validateNumberAmpersand(xmlData, i5);
        }
        let count = 0;
        for (; i5 < xmlData.length; i5++, count++) {
          if (xmlData[i5].match(/\w/) && count < 20)
            continue;
          if (xmlData[i5] === ";")
            break;
          return -1;
        }
        return i5;
      }
      function getErrorObject(code, message, lineNumber) {
        return {
          err: {
            code,
            msg: message,
            line: lineNumber.line || lineNumber,
            col: lineNumber.col
          }
        };
      }
      function validateAttrName(attrName) {
        return util.isName(attrName);
      }
      function validateTagName(tagname) {
        return util.isName(tagname);
      }
      function getLineNumberForPosition(xmlData, index) {
        const lines = xmlData.substring(0, index).split(/\r?\n/);
        return {
          line: lines.length,
          // column number is last line's length + 1, because column numbering starts at 1:
          col: lines[lines.length - 1].length + 1
        };
      }
      function getPositionFromMatch(match2) {
        return match2.startIndex + match2[1].length;
      }
    }
  });

  // node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
  var require_OptionsBuilder = __commonJS({
    "node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"(exports2) {
      var defaultOptions2 = {
        preserveOrder: false,
        attributeNamePrefix: "@_",
        attributesGroupName: false,
        textNodeName: "#text",
        ignoreAttributes: true,
        removeNSPrefix: false,
        // remove NS from tag name or attribute name if true
        allowBooleanAttributes: false,
        //a tag can have attributes without any value
        //ignoreRootElement : false,
        parseTagValue: true,
        parseAttributeValue: false,
        trimValues: true,
        //Trim string values of tag and attributes
        cdataPropName: false,
        numberParseOptions: {
          hex: true,
          leadingZeros: true,
          eNotation: true
        },
        tagValueProcessor: function(tagName, val2) {
          return val2;
        },
        attributeValueProcessor: function(attrName, val2) {
          return val2;
        },
        stopNodes: [],
        //nested tags will not be parsed even for errors
        alwaysCreateTextNode: false,
        isArray: () => false,
        commentPropName: false,
        unpairedTags: [],
        processEntities: true,
        htmlEntities: false,
        ignoreDeclaration: false,
        ignorePiTags: false,
        transformTagName: false,
        transformAttributeName: false,
        updateTag: function(tagName, jPath, attrs) {
          return tagName;
        }
        // skipEmptyListItem: false
      };
      var buildOptions = function(options) {
        return Object.assign({}, defaultOptions2, options);
      };
      exports2.buildOptions = buildOptions;
      exports2.defaultOptions = defaultOptions2;
    }
  });

  // node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
  var require_xmlNode = __commonJS({
    "node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"(exports2, module) {
      "use strict";
      var XmlNode = class {
        constructor(tagname) {
          this.tagname = tagname;
          this.child = [];
          this[":@"] = {};
        }
        add(key, val2) {
          if (key === "__proto__")
            key = "#__proto__";
          this.child.push({ [key]: val2 });
        }
        addChild(node) {
          if (node.tagname === "__proto__")
            node.tagname = "#__proto__";
          if (node[":@"] && Object.keys(node[":@"]).length > 0) {
            this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
          } else {
            this.child.push({ [node.tagname]: node.child });
          }
        }
      };
      module.exports = XmlNode;
    }
  });

  // node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
  var require_DocTypeReader = __commonJS({
    "node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"(exports2, module) {
      var util = require_util();
      function readDocType(xmlData, i5) {
        const entities = {};
        if (xmlData[i5 + 3] === "O" && xmlData[i5 + 4] === "C" && xmlData[i5 + 5] === "T" && xmlData[i5 + 6] === "Y" && xmlData[i5 + 7] === "P" && xmlData[i5 + 8] === "E") {
          i5 = i5 + 9;
          let angleBracketsCount = 1;
          let hasBody = false, comment = false;
          let exp = "";
          for (; i5 < xmlData.length; i5++) {
            if (xmlData[i5] === "<" && !comment) {
              if (hasBody && isEntity(xmlData, i5)) {
                i5 += 7;
                [entityName, val, i5] = readEntityExp(xmlData, i5 + 1);
                if (val.indexOf("&") === -1)
                  entities[validateEntityName(entityName)] = {
                    regx: RegExp(`&${entityName};`, "g"),
                    val
                  };
              } else if (hasBody && isElement(xmlData, i5))
                i5 += 8;
              else if (hasBody && isAttlist(xmlData, i5))
                i5 += 8;
              else if (hasBody && isNotation(xmlData, i5))
                i5 += 9;
              else if (isComment)
                comment = true;
              else
                throw new Error("Invalid DOCTYPE");
              angleBracketsCount++;
              exp = "";
            } else if (xmlData[i5] === ">") {
              if (comment) {
                if (xmlData[i5 - 1] === "-" && xmlData[i5 - 2] === "-") {
                  comment = false;
                  angleBracketsCount--;
                }
              } else {
                angleBracketsCount--;
              }
              if (angleBracketsCount === 0) {
                break;
              }
            } else if (xmlData[i5] === "[") {
              hasBody = true;
            } else {
              exp += xmlData[i5];
            }
          }
          if (angleBracketsCount !== 0) {
            throw new Error(`Unclosed DOCTYPE`);
          }
        } else {
          throw new Error(`Invalid Tag instead of DOCTYPE`);
        }
        return { entities, i: i5 };
      }
      function readEntityExp(xmlData, i5) {
        let entityName2 = "";
        for (; i5 < xmlData.length && (xmlData[i5] !== "'" && xmlData[i5] !== '"'); i5++) {
          entityName2 += xmlData[i5];
        }
        entityName2 = entityName2.trim();
        if (entityName2.indexOf(" ") !== -1)
          throw new Error("External entites are not supported");
        const startChar = xmlData[i5++];
        let val2 = "";
        for (; i5 < xmlData.length && xmlData[i5] !== startChar; i5++) {
          val2 += xmlData[i5];
        }
        return [entityName2, val2, i5];
      }
      function isComment(xmlData, i5) {
        if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "-" && xmlData[i5 + 3] === "-")
          return true;
        return false;
      }
      function isEntity(xmlData, i5) {
        if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "E" && xmlData[i5 + 3] === "N" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "I" && xmlData[i5 + 6] === "T" && xmlData[i5 + 7] === "Y")
          return true;
        return false;
      }
      function isElement(xmlData, i5) {
        if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "E" && xmlData[i5 + 3] === "L" && xmlData[i5 + 4] === "E" && xmlData[i5 + 5] === "M" && xmlData[i5 + 6] === "E" && xmlData[i5 + 7] === "N" && xmlData[i5 + 8] === "T")
          return true;
        return false;
      }
      function isAttlist(xmlData, i5) {
        if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "A" && xmlData[i5 + 3] === "T" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "L" && xmlData[i5 + 6] === "I" && xmlData[i5 + 7] === "S" && xmlData[i5 + 8] === "T")
          return true;
        return false;
      }
      function isNotation(xmlData, i5) {
        if (xmlData[i5 + 1] === "!" && xmlData[i5 + 2] === "N" && xmlData[i5 + 3] === "O" && xmlData[i5 + 4] === "T" && xmlData[i5 + 5] === "A" && xmlData[i5 + 6] === "T" && xmlData[i5 + 7] === "I" && xmlData[i5 + 8] === "O" && xmlData[i5 + 9] === "N")
          return true;
        return false;
      }
      function validateEntityName(name) {
        if (util.isName(name))
          return name;
        else
          throw new Error(`Invalid entity name ${name}`);
      }
      module.exports = readDocType;
    }
  });

  // node_modules/strnum/strnum.js
  var require_strnum = __commonJS({
    "node_modules/strnum/strnum.js"(exports2, module) {
      var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
      var numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
      if (!Number.parseInt && window.parseInt) {
        Number.parseInt = window.parseInt;
      }
      if (!Number.parseFloat && window.parseFloat) {
        Number.parseFloat = window.parseFloat;
      }
      var consider = {
        hex: true,
        leadingZeros: true,
        decimalPoint: ".",
        eNotation: true
        //skipLike: /regex/
      };
      function toNumber(str, options = {}) {
        options = Object.assign({}, consider, options);
        if (!str || typeof str !== "string")
          return str;
        let trimmedStr = str.trim();
        if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr))
          return str;
        else if (options.hex && hexRegex.test(trimmedStr)) {
          return Number.parseInt(trimmedStr, 16);
        } else {
          const match2 = numRegex.exec(trimmedStr);
          if (match2) {
            const sign = match2[1];
            const leadingZeros = match2[2];
            let numTrimmedByZeros = trimZeros(match2[3]);
            const eNotation = match2[4] || match2[6];
            if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".")
              return str;
            else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".")
              return str;
            else {
              const num = Number(trimmedStr);
              const numStr = "" + num;
              if (numStr.search(/[eE]/) !== -1) {
                if (options.eNotation)
                  return num;
                else
                  return str;
              } else if (eNotation) {
                if (options.eNotation)
                  return num;
                else
                  return str;
              } else if (trimmedStr.indexOf(".") !== -1) {
                if (numStr === "0" && numTrimmedByZeros === "")
                  return num;
                else if (numStr === numTrimmedByZeros)
                  return num;
                else if (sign && numStr === "-" + numTrimmedByZeros)
                  return num;
                else
                  return str;
              }
              if (leadingZeros) {
                if (numTrimmedByZeros === numStr)
                  return num;
                else if (sign + numTrimmedByZeros === numStr)
                  return num;
                else
                  return str;
              }
              if (trimmedStr === numStr)
                return num;
              else if (trimmedStr === sign + numStr)
                return num;
              return str;
            }
          } else {
            return str;
          }
        }
      }
      function trimZeros(numStr) {
        if (numStr && numStr.indexOf(".") !== -1) {
          numStr = numStr.replace(/0+$/, "");
          if (numStr === ".")
            numStr = "0";
          else if (numStr[0] === ".")
            numStr = "0" + numStr;
          else if (numStr[numStr.length - 1] === ".")
            numStr = numStr.substr(0, numStr.length - 1);
          return numStr;
        }
        return numStr;
      }
      module.exports = toNumber;
    }
  });

  // node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
  var require_OrderedObjParser = __commonJS({
    "node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"(exports2, module) {
      "use strict";
      var util = require_util();
      var xmlNode = require_xmlNode();
      var readDocType = require_DocTypeReader();
      var toNumber = require_strnum();
      var regx = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, util.nameRegexp);
      var OrderedObjParser = class {
        constructor(options) {
          this.options = options;
          this.currentNode = null;
          this.tagsNodeStack = [];
          this.docTypeEntities = {};
          this.lastEntities = {
            "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
            "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
            "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
            "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
          };
          this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
          this.htmlEntities = {
            "space": { regex: /&(nbsp|#160);/g, val: " " },
            // "lt" : { regex: /&(lt|#60);/g, val: "<" },
            // "gt" : { regex: /&(gt|#62);/g, val: ">" },
            // "amp" : { regex: /&(amp|#38);/g, val: "&" },
            // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
            // "apos" : { regex: /&(apos|#39);/g, val: "'" },
            "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
            "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
            "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
            "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
            "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
            "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
            "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" }
          };
          this.addExternalEntities = addExternalEntities;
          this.parseXml = parseXml;
          this.parseTextData = parseTextData;
          this.resolveNameSpace = resolveNameSpace;
          this.buildAttributesMap = buildAttributesMap;
          this.isItStopNode = isItStopNode;
          this.replaceEntitiesValue = replaceEntitiesValue;
          this.readStopNodeData = readStopNodeData;
          this.saveTextToParentTag = saveTextToParentTag;
          this.addChild = addChild;
        }
      };
      function addExternalEntities(externalEntities) {
        const entKeys = Object.keys(externalEntities);
        for (let i5 = 0; i5 < entKeys.length; i5++) {
          const ent = entKeys[i5];
          this.lastEntities[ent] = {
            regex: new RegExp("&" + ent + ";", "g"),
            val: externalEntities[ent]
          };
        }
      }
      function parseTextData(val2, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
        if (val2 !== void 0) {
          if (this.options.trimValues && !dontTrim) {
            val2 = val2.trim();
          }
          if (val2.length > 0) {
            if (!escapeEntities)
              val2 = this.replaceEntitiesValue(val2);
            const newval = this.options.tagValueProcessor(tagName, val2, jPath, hasAttributes, isLeafNode);
            if (newval === null || newval === void 0) {
              return val2;
            } else if (typeof newval !== typeof val2 || newval !== val2) {
              return newval;
            } else if (this.options.trimValues) {
              return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
            } else {
              const trimmedVal = val2.trim();
              if (trimmedVal === val2) {
                return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
              } else {
                return val2;
              }
            }
          }
        }
      }
      function resolveNameSpace(tagname) {
        if (this.options.removeNSPrefix) {
          const tags = tagname.split(":");
          const prefix = tagname.charAt(0) === "/" ? "/" : "";
          if (tags[0] === "xmlns") {
            return "";
          }
          if (tags.length === 2) {
            tagname = prefix + tags[1];
          }
        }
        return tagname;
      }
      var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
      function buildAttributesMap(attrStr, jPath, tagName) {
        if (!this.options.ignoreAttributes && typeof attrStr === "string") {
          const matches = util.getAllMatches(attrStr, attrsRegx);
          const len = matches.length;
          const attrs = {};
          for (let i5 = 0; i5 < len; i5++) {
            const attrName = this.resolveNameSpace(matches[i5][1]);
            let oldVal = matches[i5][4];
            let aName = this.options.attributeNamePrefix + attrName;
            if (attrName.length) {
              if (this.options.transformAttributeName) {
                aName = this.options.transformAttributeName(aName);
              }
              if (aName === "__proto__")
                aName = "#__proto__";
              if (oldVal !== void 0) {
                if (this.options.trimValues) {
                  oldVal = oldVal.trim();
                }
                oldVal = this.replaceEntitiesValue(oldVal);
                const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
                if (newVal === null || newVal === void 0) {
                  attrs[aName] = oldVal;
                } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                  attrs[aName] = newVal;
                } else {
                  attrs[aName] = parseValue(
                    oldVal,
                    this.options.parseAttributeValue,
                    this.options.numberParseOptions
                  );
                }
              } else if (this.options.allowBooleanAttributes) {
                attrs[aName] = true;
              }
            }
          }
          if (!Object.keys(attrs).length) {
            return;
          }
          if (this.options.attributesGroupName) {
            const attrCollection = {};
            attrCollection[this.options.attributesGroupName] = attrs;
            return attrCollection;
          }
          return attrs;
        }
      }
      var parseXml = function(xmlData) {
        xmlData = xmlData.replace(/\r\n?/g, "\n");
        const xmlObj = new xmlNode("!xml");
        let currentNode = xmlObj;
        let textData = "";
        let jPath = "";
        for (let i5 = 0; i5 < xmlData.length; i5++) {
          const ch = xmlData[i5];
          if (ch === "<") {
            if (xmlData[i5 + 1] === "/") {
              const closeIndex = findClosingIndex(xmlData, ">", i5, "Closing Tag is not closed.");
              let tagName = xmlData.substring(i5 + 2, closeIndex).trim();
              if (this.options.removeNSPrefix) {
                const colonIndex = tagName.indexOf(":");
                if (colonIndex !== -1) {
                  tagName = tagName.substr(colonIndex + 1);
                }
              }
              if (this.options.transformTagName) {
                tagName = this.options.transformTagName(tagName);
              }
              if (currentNode) {
                textData = this.saveTextToParentTag(textData, currentNode, jPath);
              }
              const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
              if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
                throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
              }
              let propIndex = 0;
              if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
                propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
                this.tagsNodeStack.pop();
              } else {
                propIndex = jPath.lastIndexOf(".");
              }
              jPath = jPath.substring(0, propIndex);
              currentNode = this.tagsNodeStack.pop();
              textData = "";
              i5 = closeIndex;
            } else if (xmlData[i5 + 1] === "?") {
              let tagData = readTagExp(xmlData, i5, false, "?>");
              if (!tagData)
                throw new Error("Pi Tag is not closed.");
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
              } else {
                const childNode = new xmlNode(tagData.tagName);
                childNode.add(this.options.textNodeName, "");
                if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
                }
                this.addChild(currentNode, childNode, jPath);
              }
              i5 = tagData.closeIndex + 1;
            } else if (xmlData.substr(i5 + 1, 3) === "!--") {
              const endIndex = findClosingIndex(xmlData, "-->", i5 + 4, "Comment is not closed.");
              if (this.options.commentPropName) {
                const comment = xmlData.substring(i5 + 4, endIndex - 2);
                textData = this.saveTextToParentTag(textData, currentNode, jPath);
                currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
              }
              i5 = endIndex;
            } else if (xmlData.substr(i5 + 1, 2) === "!D") {
              const result = readDocType(xmlData, i5);
              this.docTypeEntities = result.entities;
              i5 = result.i;
            } else if (xmlData.substr(i5 + 1, 2) === "![") {
              const closeIndex = findClosingIndex(xmlData, "]]>", i5, "CDATA is not closed.") - 2;
              const tagExp = xmlData.substring(i5 + 9, closeIndex);
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              if (this.options.cdataPropName) {
                currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
              } else {
                let val2 = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
                if (val2 == void 0)
                  val2 = "";
                currentNode.add(this.options.textNodeName, val2);
              }
              i5 = closeIndex + 2;
            } else {
              let result = readTagExp(xmlData, i5, this.options.removeNSPrefix);
              let tagName = result.tagName;
              let tagExp = result.tagExp;
              let attrExpPresent = result.attrExpPresent;
              let closeIndex = result.closeIndex;
              if (this.options.transformTagName) {
                tagName = this.options.transformTagName(tagName);
              }
              if (currentNode && textData) {
                if (currentNode.tagname !== "!xml") {
                  textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
                }
              }
              const lastTag = currentNode;
              if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
                currentNode = this.tagsNodeStack.pop();
                jPath = jPath.substring(0, jPath.lastIndexOf("."));
              }
              if (tagName !== xmlObj.tagname) {
                jPath += jPath ? "." + tagName : tagName;
              }
              if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
                let tagContent = "";
                if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                  i5 = result.closeIndex;
                } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                  i5 = result.closeIndex;
                } else {
                  const result2 = this.readStopNodeData(xmlData, tagName, closeIndex + 1);
                  if (!result2)
                    throw new Error(`Unexpected end of ${tagName}`);
                  i5 = result2.i;
                  tagContent = result2.tagContent;
                }
                const childNode = new xmlNode(tagName);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                if (tagContent) {
                  tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
                }
                jPath = jPath.substr(0, jPath.lastIndexOf("."));
                childNode.add(this.options.textNodeName, tagContent);
                this.addChild(currentNode, childNode, jPath);
              } else {
                if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                  if (tagName[tagName.length - 1] === "/") {
                    tagName = tagName.substr(0, tagName.length - 1);
                    tagExp = tagName;
                  } else {
                    tagExp = tagExp.substr(0, tagExp.length - 1);
                  }
                  if (this.options.transformTagName) {
                    tagName = this.options.transformTagName(tagName);
                  }
                  const childNode = new xmlNode(tagName);
                  if (tagName !== tagExp && attrExpPresent) {
                    childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                  }
                  this.addChild(currentNode, childNode, jPath);
                  jPath = jPath.substr(0, jPath.lastIndexOf("."));
                } else {
                  const childNode = new xmlNode(tagName);
                  this.tagsNodeStack.push(currentNode);
                  if (tagName !== tagExp && attrExpPresent) {
                    childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                  }
                  this.addChild(currentNode, childNode, jPath);
                  currentNode = childNode;
                }
                textData = "";
                i5 = closeIndex;
              }
            }
          } else {
            textData += xmlData[i5];
          }
        }
        return xmlObj.child;
      };
      function addChild(currentNode, childNode, jPath) {
        const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
        if (result === false) {
        } else if (typeof result === "string") {
          childNode.tagname = result;
          currentNode.addChild(childNode);
        } else {
          currentNode.addChild(childNode);
        }
      }
      var replaceEntitiesValue = function(val2) {
        if (this.options.processEntities) {
          for (let entityName2 in this.docTypeEntities) {
            const entity = this.docTypeEntities[entityName2];
            val2 = val2.replace(entity.regx, entity.val);
          }
          for (let entityName2 in this.lastEntities) {
            const entity = this.lastEntities[entityName2];
            val2 = val2.replace(entity.regex, entity.val);
          }
          if (this.options.htmlEntities) {
            for (let entityName2 in this.htmlEntities) {
              const entity = this.htmlEntities[entityName2];
              val2 = val2.replace(entity.regex, entity.val);
            }
          }
          val2 = val2.replace(this.ampEntity.regex, this.ampEntity.val);
        }
        return val2;
      };
      function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
        if (textData) {
          if (isLeafNode === void 0)
            isLeafNode = Object.keys(currentNode.child).length === 0;
          textData = this.parseTextData(
            textData,
            currentNode.tagname,
            jPath,
            false,
            currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
            isLeafNode
          );
          if (textData !== void 0 && textData !== "")
            currentNode.add(this.options.textNodeName, textData);
          textData = "";
        }
        return textData;
      }
      function isItStopNode(stopNodes, jPath, currentTagName) {
        const allNodesExp = "*." + currentTagName;
        for (const stopNodePath in stopNodes) {
          const stopNodeExp = stopNodes[stopNodePath];
          if (allNodesExp === stopNodeExp || jPath === stopNodeExp)
            return true;
        }
        return false;
      }
      function tagExpWithClosingIndex(xmlData, i5, closingChar = ">") {
        let attrBoundary;
        let tagExp = "";
        for (let index = i5; index < xmlData.length; index++) {
          let ch = xmlData[index];
          if (attrBoundary) {
            if (ch === attrBoundary)
              attrBoundary = "";
          } else if (ch === '"' || ch === "'") {
            attrBoundary = ch;
          } else if (ch === closingChar[0]) {
            if (closingChar[1]) {
              if (xmlData[index + 1] === closingChar[1]) {
                return {
                  data: tagExp,
                  index
                };
              }
            } else {
              return {
                data: tagExp,
                index
              };
            }
          } else if (ch === "	") {
            ch = " ";
          }
          tagExp += ch;
        }
      }
      function findClosingIndex(xmlData, str, i5, errMsg) {
        const closingIndex = xmlData.indexOf(str, i5);
        if (closingIndex === -1) {
          throw new Error(errMsg);
        } else {
          return closingIndex + str.length - 1;
        }
      }
      function readTagExp(xmlData, i5, removeNSPrefix, closingChar = ">") {
        const result = tagExpWithClosingIndex(xmlData, i5 + 1, closingChar);
        if (!result)
          return;
        let tagExp = result.data;
        const closeIndex = result.index;
        const separatorIndex = tagExp.search(/\s/);
        let tagName = tagExp;
        let attrExpPresent = true;
        if (separatorIndex !== -1) {
          tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, "");
          tagExp = tagExp.substr(separatorIndex + 1);
        }
        if (removeNSPrefix) {
          const colonIndex = tagName.indexOf(":");
          if (colonIndex !== -1) {
            tagName = tagName.substr(colonIndex + 1);
            attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
          }
        }
        return {
          tagName,
          tagExp,
          closeIndex,
          attrExpPresent
        };
      }
      function readStopNodeData(xmlData, tagName, i5) {
        const startIndex = i5;
        let openTagCount = 1;
        for (; i5 < xmlData.length; i5++) {
          if (xmlData[i5] === "<") {
            if (xmlData[i5 + 1] === "/") {
              const closeIndex = findClosingIndex(xmlData, ">", i5, `${tagName} is not closed`);
              let closeTagName = xmlData.substring(i5 + 2, closeIndex).trim();
              if (closeTagName === tagName) {
                openTagCount--;
                if (openTagCount === 0) {
                  return {
                    tagContent: xmlData.substring(startIndex, i5),
                    i: closeIndex
                  };
                }
              }
              i5 = closeIndex;
            } else if (xmlData[i5 + 1] === "?") {
              const closeIndex = findClosingIndex(xmlData, "?>", i5 + 1, "StopNode is not closed.");
              i5 = closeIndex;
            } else if (xmlData.substr(i5 + 1, 3) === "!--") {
              const closeIndex = findClosingIndex(xmlData, "-->", i5 + 3, "StopNode is not closed.");
              i5 = closeIndex;
            } else if (xmlData.substr(i5 + 1, 2) === "![") {
              const closeIndex = findClosingIndex(xmlData, "]]>", i5, "StopNode is not closed.") - 2;
              i5 = closeIndex;
            } else {
              const tagData = readTagExp(xmlData, i5, ">");
              if (tagData) {
                const openTagName = tagData && tagData.tagName;
                if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                  openTagCount++;
                }
                i5 = tagData.closeIndex;
              }
            }
          }
        }
      }
      function parseValue(val2, shouldParse, options) {
        if (shouldParse && typeof val2 === "string") {
          const newval = val2.trim();
          if (newval === "true")
            return true;
          else if (newval === "false")
            return false;
          else
            return toNumber(val2, options);
        } else {
          if (util.isExist(val2)) {
            return val2;
          } else {
            return "";
          }
        }
      }
      module.exports = OrderedObjParser;
    }
  });

  // node_modules/fast-xml-parser/src/xmlparser/node2json.js
  var require_node2json = __commonJS({
    "node_modules/fast-xml-parser/src/xmlparser/node2json.js"(exports2) {
      "use strict";
      function prettify(node, options) {
        return compress(node, options);
      }
      function compress(arr, options, jPath) {
        let text;
        const compressedObj = {};
        for (let i5 = 0; i5 < arr.length; i5++) {
          const tagObj = arr[i5];
          const property = propName(tagObj);
          let newJpath = "";
          if (jPath === void 0)
            newJpath = property;
          else
            newJpath = jPath + "." + property;
          if (property === options.textNodeName) {
            if (text === void 0)
              text = tagObj[property];
            else
              text += "" + tagObj[property];
          } else if (property === void 0) {
            continue;
          } else if (tagObj[property]) {
            let val2 = compress(tagObj[property], options, newJpath);
            const isLeaf = isLeafTag(val2, options);
            if (tagObj[":@"]) {
              assignAttributes(val2, tagObj[":@"], newJpath, options);
            } else if (Object.keys(val2).length === 1 && val2[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
              val2 = val2[options.textNodeName];
            } else if (Object.keys(val2).length === 0) {
              if (options.alwaysCreateTextNode)
                val2[options.textNodeName] = "";
              else
                val2 = "";
            }
            if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
              if (!Array.isArray(compressedObj[property])) {
                compressedObj[property] = [compressedObj[property]];
              }
              compressedObj[property].push(val2);
            } else {
              if (options.isArray(property, newJpath, isLeaf)) {
                compressedObj[property] = [val2];
              } else {
                compressedObj[property] = val2;
              }
            }
          }
        }
        if (typeof text === "string") {
          if (text.length > 0)
            compressedObj[options.textNodeName] = text;
        } else if (text !== void 0)
          compressedObj[options.textNodeName] = text;
        return compressedObj;
      }
      function propName(obj) {
        const keys = Object.keys(obj);
        for (let i5 = 0; i5 < keys.length; i5++) {
          const key = keys[i5];
          if (key !== ":@")
            return key;
        }
      }
      function assignAttributes(obj, attrMap, jpath, options) {
        if (attrMap) {
          const keys = Object.keys(attrMap);
          const len = keys.length;
          for (let i5 = 0; i5 < len; i5++) {
            const atrrName = keys[i5];
            if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
              obj[atrrName] = [attrMap[atrrName]];
            } else {
              obj[atrrName] = attrMap[atrrName];
            }
          }
        }
      }
      function isLeafTag(obj, options) {
        const { textNodeName } = options;
        const propCount = Object.keys(obj).length;
        if (propCount === 0) {
          return true;
        }
        if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
          return true;
        }
        return false;
      }
      exports2.prettify = prettify;
    }
  });

  // node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
  var require_XMLParser = __commonJS({
    "node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"(exports2, module) {
      var { buildOptions } = require_OptionsBuilder();
      var OrderedObjParser = require_OrderedObjParser();
      var { prettify } = require_node2json();
      var validator = require_validator();
      var XMLParser2 = class {
        constructor(options) {
          this.externalEntities = {};
          this.options = buildOptions(options);
        }
        /**
         * Parse XML dats to JS object 
         * @param {string|Buffer} xmlData 
         * @param {boolean|Object} validationOption 
         */
        parse(xmlData, validationOption) {
          if (typeof xmlData === "string") {
          } else if (xmlData.toString) {
            xmlData = xmlData.toString();
          } else {
            throw new Error("XML data is accepted in String or Bytes[] form.");
          }
          if (validationOption) {
            if (validationOption === true)
              validationOption = {};
            const result = validator.validate(xmlData, validationOption);
            if (result !== true) {
              throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
            }
          }
          const orderedObjParser = new OrderedObjParser(this.options);
          orderedObjParser.addExternalEntities(this.externalEntities);
          const orderedResult = orderedObjParser.parseXml(xmlData);
          if (this.options.preserveOrder || orderedResult === void 0)
            return orderedResult;
          else
            return prettify(orderedResult, this.options);
        }
        /**
         * Add Entity which is not by default supported by this library
         * @param {string} key 
         * @param {string} value 
         */
        addEntity(key, value) {
          if (value.indexOf("&") !== -1) {
            throw new Error("Entity value can't have '&'");
          } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
            throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
          } else if (value === "&") {
            throw new Error("An entity with value '&' is not permitted");
          } else {
            this.externalEntities[key] = value;
          }
        }
      };
      module.exports = XMLParser2;
    }
  });

  // node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js
  var require_orderedJs2Xml = __commonJS({
    "node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"(exports2, module) {
      var EOL = "\n";
      function toXml(jArray, options) {
        let indentation = "";
        if (options.format && options.indentBy.length > 0) {
          indentation = EOL;
        }
        return arrToStr(jArray, options, "", indentation);
      }
      function arrToStr(arr, options, jPath, indentation) {
        let xmlStr = "";
        let isPreviousElementTag = false;
        for (let i5 = 0; i5 < arr.length; i5++) {
          const tagObj = arr[i5];
          const tagName = propName(tagObj);
          let newJPath = "";
          if (jPath.length === 0)
            newJPath = tagName;
          else
            newJPath = `${jPath}.${tagName}`;
          if (tagName === options.textNodeName) {
            let tagText = tagObj[tagName];
            if (!isStopNode(newJPath, options)) {
              tagText = options.tagValueProcessor(tagName, tagText);
              tagText = replaceEntitiesValue(tagText, options);
            }
            if (isPreviousElementTag) {
              xmlStr += indentation;
            }
            xmlStr += tagText;
            isPreviousElementTag = false;
            continue;
          } else if (tagName === options.cdataPropName) {
            if (isPreviousElementTag) {
              xmlStr += indentation;
            }
            xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
            isPreviousElementTag = false;
            continue;
          } else if (tagName === options.commentPropName) {
            xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
            isPreviousElementTag = true;
            continue;
          } else if (tagName[0] === "?") {
            const attStr2 = attr_to_str(tagObj[":@"], options);
            const tempInd = tagName === "?xml" ? "" : indentation;
            let piTextNodeName = tagObj[tagName][0][options.textNodeName];
            piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
            xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
            isPreviousElementTag = true;
            continue;
          }
          let newIdentation = indentation;
          if (newIdentation !== "") {
            newIdentation += options.indentBy;
          }
          const attStr = attr_to_str(tagObj[":@"], options);
          const tagStart = indentation + `<${tagName}${attStr}`;
          const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
          if (options.unpairedTags.indexOf(tagName) !== -1) {
            if (options.suppressUnpairedNode)
              xmlStr += tagStart + ">";
            else
              xmlStr += tagStart + "/>";
          } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
            xmlStr += tagStart + "/>";
          } else if (tagValue && tagValue.endsWith(">")) {
            xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
          } else {
            xmlStr += tagStart + ">";
            if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
              xmlStr += indentation + options.indentBy + tagValue + indentation;
            } else {
              xmlStr += tagValue;
            }
            xmlStr += `</${tagName}>`;
          }
          isPreviousElementTag = true;
        }
        return xmlStr;
      }
      function propName(obj) {
        const keys = Object.keys(obj);
        for (let i5 = 0; i5 < keys.length; i5++) {
          const key = keys[i5];
          if (key !== ":@")
            return key;
        }
      }
      function attr_to_str(attrMap, options) {
        let attrStr = "";
        if (attrMap && !options.ignoreAttributes) {
          for (let attr in attrMap) {
            let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
            attrVal = replaceEntitiesValue(attrVal, options);
            if (attrVal === true && options.suppressBooleanAttributes) {
              attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
            } else {
              attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
            }
          }
        }
        return attrStr;
      }
      function isStopNode(jPath, options) {
        jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
        let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
        for (let index in options.stopNodes) {
          if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName)
            return true;
        }
        return false;
      }
      function replaceEntitiesValue(textValue, options) {
        if (textValue && textValue.length > 0 && options.processEntities) {
          for (let i5 = 0; i5 < options.entities.length; i5++) {
            const entity = options.entities[i5];
            textValue = textValue.replace(entity.regex, entity.val);
          }
        }
        return textValue;
      }
      module.exports = toXml;
    }
  });

  // node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js
  var require_json2xml = __commonJS({
    "node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"(exports2, module) {
      "use strict";
      var buildFromOrderedJs = require_orderedJs2Xml();
      var defaultOptions2 = {
        attributeNamePrefix: "@_",
        attributesGroupName: false,
        textNodeName: "#text",
        ignoreAttributes: true,
        cdataPropName: false,
        format: false,
        indentBy: "  ",
        suppressEmptyNode: false,
        suppressUnpairedNode: true,
        suppressBooleanAttributes: true,
        tagValueProcessor: function(key, a5) {
          return a5;
        },
        attributeValueProcessor: function(attrName, a5) {
          return a5;
        },
        preserveOrder: false,
        commentPropName: false,
        unpairedTags: [],
        entities: [
          { regex: new RegExp("&", "g"), val: "&amp;" },
          //it must be on top
          { regex: new RegExp(">", "g"), val: "&gt;" },
          { regex: new RegExp("<", "g"), val: "&lt;" },
          { regex: new RegExp("'", "g"), val: "&apos;" },
          { regex: new RegExp('"', "g"), val: "&quot;" }
        ],
        processEntities: true,
        stopNodes: [],
        // transformTagName: false,
        // transformAttributeName: false,
        oneListGroup: false
      };
      function Builder(options) {
        this.options = Object.assign({}, defaultOptions2, options);
        if (this.options.ignoreAttributes || this.options.attributesGroupName) {
          this.isAttribute = function() {
            return false;
          };
        } else {
          this.attrPrefixLen = this.options.attributeNamePrefix.length;
          this.isAttribute = isAttribute;
        }
        this.processTextOrObjNode = processTextOrObjNode;
        if (this.options.format) {
          this.indentate = indentate;
          this.tagEndChar = ">\n";
          this.newLine = "\n";
        } else {
          this.indentate = function() {
            return "";
          };
          this.tagEndChar = ">";
          this.newLine = "";
        }
      }
      Builder.prototype.build = function(jObj) {
        if (this.options.preserveOrder) {
          return buildFromOrderedJs(jObj, this.options);
        } else {
          if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
            jObj = {
              [this.options.arrayNodeName]: jObj
            };
          }
          return this.j2x(jObj, 0).val;
        }
      };
      Builder.prototype.j2x = function(jObj, level) {
        let attrStr = "";
        let val2 = "";
        for (let key in jObj) {
          if (typeof jObj[key] === "undefined") {
          } else if (jObj[key] === null) {
            if (key[0] === "?")
              val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
            else
              val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
          } else if (jObj[key] instanceof Date) {
            val2 += this.buildTextValNode(jObj[key], key, "", level);
          } else if (typeof jObj[key] !== "object") {
            const attr = this.isAttribute(key);
            if (attr) {
              attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
            } else {
              if (key === this.options.textNodeName) {
                let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
                val2 += this.replaceEntitiesValue(newval);
              } else {
                val2 += this.buildTextValNode(jObj[key], key, "", level);
              }
            }
          } else if (Array.isArray(jObj[key])) {
            const arrLen = jObj[key].length;
            let listTagVal = "";
            for (let j5 = 0; j5 < arrLen; j5++) {
              const item = jObj[key][j5];
              if (typeof item === "undefined") {
              } else if (item === null) {
                if (key[0] === "?")
                  val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
                else
                  val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
              } else if (typeof item === "object") {
                if (this.options.oneListGroup) {
                  listTagVal += this.j2x(item, level + 1).val;
                } else {
                  listTagVal += this.processTextOrObjNode(item, key, level);
                }
              } else {
                listTagVal += this.buildTextValNode(item, key, "", level);
              }
            }
            if (this.options.oneListGroup) {
              listTagVal = this.buildObjectNode(listTagVal, key, "", level);
            }
            val2 += listTagVal;
          } else {
            if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
              const Ks = Object.keys(jObj[key]);
              const L3 = Ks.length;
              for (let j5 = 0; j5 < L3; j5++) {
                attrStr += this.buildAttrPairStr(Ks[j5], "" + jObj[key][Ks[j5]]);
              }
            } else {
              val2 += this.processTextOrObjNode(jObj[key], key, level);
            }
          }
        }
        return { attrStr, val: val2 };
      };
      Builder.prototype.buildAttrPairStr = function(attrName, val2) {
        val2 = this.options.attributeValueProcessor(attrName, "" + val2);
        val2 = this.replaceEntitiesValue(val2);
        if (this.options.suppressBooleanAttributes && val2 === "true") {
          return " " + attrName;
        } else
          return " " + attrName + '="' + val2 + '"';
      };
      function processTextOrObjNode(object, key, level) {
        const result = this.j2x(object, level + 1);
        if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
          return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
        } else {
          return this.buildObjectNode(result.val, key, result.attrStr, level);
        }
      }
      Builder.prototype.buildObjectNode = function(val2, key, attrStr, level) {
        if (val2 === "") {
          if (key[0] === "?")
            return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
          else {
            return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
          }
        } else {
          let tagEndExp = "</" + key + this.tagEndChar;
          let piClosingChar = "";
          if (key[0] === "?") {
            piClosingChar = "?";
            tagEndExp = "";
          }
          if (attrStr && val2.indexOf("<") === -1) {
            return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val2 + tagEndExp;
          } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
            return this.indentate(level) + `<!--${val2}-->` + this.newLine;
          } else {
            return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val2 + this.indentate(level) + tagEndExp;
          }
        }
      };
      Builder.prototype.closeTag = function(key) {
        let closeTag = "";
        if (this.options.unpairedTags.indexOf(key) !== -1) {
          if (!this.options.suppressUnpairedNode)
            closeTag = "/";
        } else if (this.options.suppressEmptyNode) {
          closeTag = "/";
        } else {
          closeTag = `></${key}`;
        }
        return closeTag;
      };
      Builder.prototype.buildTextValNode = function(val2, key, attrStr, level) {
        if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
          return this.indentate(level) + `<![CDATA[${val2}]]>` + this.newLine;
        } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
          return this.indentate(level) + `<!--${val2}-->` + this.newLine;
        } else if (key[0] === "?") {
          return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        } else {
          let textValue = this.options.tagValueProcessor(key, val2);
          textValue = this.replaceEntitiesValue(textValue);
          if (textValue === "") {
            return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
          } else {
            return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
          }
        }
      };
      Builder.prototype.replaceEntitiesValue = function(textValue) {
        if (textValue && textValue.length > 0 && this.options.processEntities) {
          for (let i5 = 0; i5 < this.options.entities.length; i5++) {
            const entity = this.options.entities[i5];
            textValue = textValue.replace(entity.regex, entity.val);
          }
        }
        return textValue;
      };
      function indentate(level) {
        return this.options.indentBy.repeat(level);
      }
      function isAttribute(name) {
        if (name.startsWith(this.options.attributeNamePrefix)) {
          return name.substr(this.attrPrefixLen);
        } else {
          return false;
        }
      }
      module.exports = Builder;
    }
  });

  // node_modules/fast-xml-parser/src/fxp.js
  var require_fxp = __commonJS({
    "node_modules/fast-xml-parser/src/fxp.js"(exports2, module) {
      "use strict";
      var validator = require_validator();
      var XMLParser2 = require_XMLParser();
      var XMLBuilder = require_json2xml();
      module.exports = {
        XMLParser: XMLParser2,
        XMLValidator: validator,
        XMLBuilder
      };
    }
  });

  // node_modules/@aws-sdk/core/dist-es/protocols/xml/parseXmlBody.js
  var import_fast_xml_parser;
  var init_parseXmlBody = __esm({
    "node_modules/@aws-sdk/core/dist-es/protocols/xml/parseXmlBody.js"() {
      init_dist_es26();
      import_fast_xml_parser = __toESM(require_fxp());
    }
  });

  // node_modules/@aws-sdk/core/dist-es/protocols/index.js
  var init_protocols = __esm({
    "node_modules/@aws-sdk/core/dist-es/protocols/index.js"() {
      init_coercing_serializers();
      init_awsExpectUnion();
      init_parseJsonBody();
      init_parseXmlBody();
    }
  });

  // node_modules/@aws-sdk/core/dist-es/index.js
  var init_dist_es33 = __esm({
    "node_modules/@aws-sdk/core/dist-es/index.js"() {
      init_client3();
      init_httpAuthSchemes2();
      init_protocols();
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/auth/httpAuthSchemeProvider.js
  function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "cognito-identity",
        region: authParameters.region
      },
      propertiesExtractor: (config, context) => ({
        signingProperties: {
          config,
          context
        }
      })
    };
  }
  function createSmithyApiNoAuthHttpAuthOption(authParameters) {
    return {
      schemeId: "smithy.api#noAuth"
    };
  }
  var defaultCognitoIdentityHttpAuthSchemeParametersProvider, defaultCognitoIdentityHttpAuthSchemeProvider, resolveHttpAuthSchemeConfig;
  var init_httpAuthSchemeProvider = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/auth/httpAuthSchemeProvider.js"() {
      init_dist_es33();
      init_dist_es10();
      defaultCognitoIdentityHttpAuthSchemeParametersProvider = async (config, context, input) => {
        return {
          operation: getSmithyContext(context).operation,
          region: await normalizeProvider(config.region)() || (() => {
            throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
          })()
        };
      };
      defaultCognitoIdentityHttpAuthSchemeProvider = (authParameters) => {
        const options = [];
        switch (authParameters.operation) {
          case "GetCredentialsForIdentity": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
          }
          case "GetId": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
          }
          case "GetOpenIdToken": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
          }
          case "UnlinkIdentity": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
          }
          default: {
            options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
          }
        }
        return options;
      };
      resolveHttpAuthSchemeConfig = (config) => {
        const config_0 = resolveAwsSdkSigV4Config(config);
        return {
          ...config_0
        };
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/EndpointParameters.js
  var resolveClientEndpointParameters, commonParams;
  var init_EndpointParameters = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/EndpointParameters.js"() {
      resolveClientEndpointParameters = (options) => {
        return {
          ...options,
          useDualstackEndpoint: options.useDualstackEndpoint ?? false,
          useFipsEndpoint: options.useFipsEndpoint ?? false,
          defaultSigningName: "cognito-identity"
        };
      };
      commonParams = {
        UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
        Endpoint: { type: "builtInParams", name: "endpoint" },
        Region: { type: "builtInParams", name: "region" },
        UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/package.json
  var package_default;
  var init_package = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/package.json"() {
      package_default = {
        name: "@aws-sdk/client-cognito-identity",
        description: "AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native",
        version: "3.529.1",
        scripts: {
          build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
          "build:cjs": "node ../../scripts/compilation/inline client-cognito-identity",
          "build:es": "tsc -p tsconfig.es.json",
          "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
          "build:types": "tsc -p tsconfig.types.json",
          "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
          clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
          "extract:docs": "api-extractor run --local",
          "generate:client": "node ../../scripts/generate-clients/single-service --solo cognito-identity",
          "test:e2e": "ts-mocha test/**/*.ispec.ts && karma start karma.conf.js"
        },
        main: "./dist-cjs/index.js",
        types: "./dist-types/index.d.ts",
        module: "./dist-es/index.js",
        sideEffects: false,
        dependencies: {
          "@aws-crypto/sha256-browser": "3.0.0",
          "@aws-crypto/sha256-js": "3.0.0",
          "@aws-sdk/client-sts": "3.529.1",
          "@aws-sdk/core": "3.529.1",
          "@aws-sdk/credential-provider-node": "3.529.1",
          "@aws-sdk/middleware-host-header": "3.523.0",
          "@aws-sdk/middleware-logger": "3.523.0",
          "@aws-sdk/middleware-recursion-detection": "3.523.0",
          "@aws-sdk/middleware-user-agent": "3.525.0",
          "@aws-sdk/region-config-resolver": "3.525.0",
          "@aws-sdk/types": "3.523.0",
          "@aws-sdk/util-endpoints": "3.525.0",
          "@aws-sdk/util-user-agent-browser": "3.523.0",
          "@aws-sdk/util-user-agent-node": "3.525.0",
          "@smithy/config-resolver": "^2.1.4",
          "@smithy/core": "^1.3.5",
          "@smithy/fetch-http-handler": "^2.4.3",
          "@smithy/hash-node": "^2.1.3",
          "@smithy/invalid-dependency": "^2.1.3",
          "@smithy/middleware-content-length": "^2.1.3",
          "@smithy/middleware-endpoint": "^2.4.4",
          "@smithy/middleware-retry": "^2.1.4",
          "@smithy/middleware-serde": "^2.1.3",
          "@smithy/middleware-stack": "^2.1.3",
          "@smithy/node-config-provider": "^2.2.4",
          "@smithy/node-http-handler": "^2.4.1",
          "@smithy/protocol-http": "^3.2.1",
          "@smithy/smithy-client": "^2.4.2",
          "@smithy/types": "^2.10.1",
          "@smithy/url-parser": "^2.1.3",
          "@smithy/util-base64": "^2.1.1",
          "@smithy/util-body-length-browser": "^2.1.1",
          "@smithy/util-body-length-node": "^2.2.1",
          "@smithy/util-defaults-mode-browser": "^2.1.4",
          "@smithy/util-defaults-mode-node": "^2.2.3",
          "@smithy/util-endpoints": "^1.1.4",
          "@smithy/util-middleware": "^2.1.3",
          "@smithy/util-retry": "^2.1.3",
          "@smithy/util-utf8": "^2.1.1",
          tslib: "^2.5.0"
        },
        devDependencies: {
          "@aws-sdk/client-iam": "3.529.1",
          "@smithy/service-client-documentation-generator": "^2.1.1",
          "@tsconfig/node14": "1.0.3",
          "@types/chai": "^4.2.11",
          "@types/mocha": "^8.0.4",
          "@types/node": "^14.14.31",
          concurrently: "7.0.0",
          "downlevel-dts": "0.10.1",
          rimraf: "3.0.2",
          typescript: "~4.9.5"
        },
        engines: {
          node: ">=14.0.0"
        },
        typesVersions: {
          "<4.0": {
            "dist-types/*": [
              "dist-types/ts3.4/*"
            ]
          }
        },
        files: [
          "dist-*/**"
        ],
        author: {
          name: "AWS SDK for JavaScript Team",
          url: "https://aws.amazon.com/javascript/"
        },
        license: "Apache-2.0",
        browser: {
          "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
        },
        "react-native": {
          "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
        },
        homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity",
        repository: {
          type: "git",
          url: "https://github.com/aws/aws-sdk-js-v3.git",
          directory: "clients/client-cognito-identity"
        }
      };
    }
  });

  // node_modules/@aws-crypto/sha256-browser/node_modules/tslib/tslib.es6.js
  var tslib_es6_exports2 = {};
  __export(tslib_es6_exports2, {
    __assign: () => __assign2,
    __asyncDelegator: () => __asyncDelegator2,
    __asyncGenerator: () => __asyncGenerator2,
    __asyncValues: () => __asyncValues2,
    __await: () => __await2,
    __awaiter: () => __awaiter2,
    __classPrivateFieldGet: () => __classPrivateFieldGet2,
    __classPrivateFieldSet: () => __classPrivateFieldSet2,
    __createBinding: () => __createBinding2,
    __decorate: () => __decorate2,
    __exportStar: () => __exportStar2,
    __extends: () => __extends2,
    __generator: () => __generator2,
    __importDefault: () => __importDefault2,
    __importStar: () => __importStar2,
    __makeTemplateObject: () => __makeTemplateObject2,
    __metadata: () => __metadata2,
    __param: () => __param2,
    __read: () => __read2,
    __rest: () => __rest2,
    __spread: () => __spread2,
    __spreadArrays: () => __spreadArrays2,
    __values: () => __values2
  });
  function __extends2(d5, b4) {
    extendStatics2(d5, b4);
    function __() {
      this.constructor = d5;
    }
    d5.prototype = b4 === null ? Object.create(b4) : (__.prototype = b4.prototype, new __());
  }
  function __rest2(s5, e5) {
    var t5 = {};
    for (var p5 in s5)
      if (Object.prototype.hasOwnProperty.call(s5, p5) && e5.indexOf(p5) < 0)
        t5[p5] = s5[p5];
    if (s5 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i5 = 0, p5 = Object.getOwnPropertySymbols(s5); i5 < p5.length; i5++) {
        if (e5.indexOf(p5[i5]) < 0 && Object.prototype.propertyIsEnumerable.call(s5, p5[i5]))
          t5[p5[i5]] = s5[p5[i5]];
      }
    return t5;
  }
  function __decorate2(decorators, target, key, desc) {
    var c5 = arguments.length, r5 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d5;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r5 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i5 = decorators.length - 1; i5 >= 0; i5--)
        if (d5 = decorators[i5])
          r5 = (c5 < 3 ? d5(r5) : c5 > 3 ? d5(target, key, r5) : d5(target, key)) || r5;
    return c5 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
  }
  function __param2(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __metadata2(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter2(thisArg, _arguments, P3, generator) {
    function adopt(value) {
      return value instanceof P3 ? value : new P3(function(resolve) {
        resolve(value);
      });
    }
    return new (P3 || (P3 = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e5) {
          reject(e5);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e5) {
          reject(e5);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator2(thisArg, body) {
    var _3 = { label: 0, sent: function() {
      if (t5[0] & 1)
        throw t5[1];
      return t5[1];
    }, trys: [], ops: [] }, f5, y4, t5, g5;
    return g5 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g5[Symbol.iterator] = function() {
      return this;
    }), g5;
    function verb(n5) {
      return function(v6) {
        return step([n5, v6]);
      };
    }
    function step(op) {
      if (f5)
        throw new TypeError("Generator is already executing.");
      while (_3)
        try {
          if (f5 = 1, y4 && (t5 = op[0] & 2 ? y4["return"] : op[0] ? y4["throw"] || ((t5 = y4["return"]) && t5.call(y4), 0) : y4.next) && !(t5 = t5.call(y4, op[1])).done)
            return t5;
          if (y4 = 0, t5)
            op = [op[0] & 2, t5.value];
          switch (op[0]) {
            case 0:
            case 1:
              t5 = op;
              break;
            case 4:
              _3.label++;
              return { value: op[1], done: false };
            case 5:
              _3.label++;
              y4 = op[1];
              op = [0];
              continue;
            case 7:
              op = _3.ops.pop();
              _3.trys.pop();
              continue;
            default:
              if (!(t5 = _3.trys, t5 = t5.length > 0 && t5[t5.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _3 = 0;
                continue;
              }
              if (op[0] === 3 && (!t5 || op[1] > t5[0] && op[1] < t5[3])) {
                _3.label = op[1];
                break;
              }
              if (op[0] === 6 && _3.label < t5[1]) {
                _3.label = t5[1];
                t5 = op;
                break;
              }
              if (t5 && _3.label < t5[2]) {
                _3.label = t5[2];
                _3.ops.push(op);
                break;
              }
              if (t5[2])
                _3.ops.pop();
              _3.trys.pop();
              continue;
          }
          op = body.call(thisArg, _3);
        } catch (e5) {
          op = [6, e5];
          y4 = 0;
        } finally {
          f5 = t5 = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __createBinding2(o5, m5, k5, k22) {
    if (k22 === void 0)
      k22 = k5;
    o5[k22] = m5[k5];
  }
  function __exportStar2(m5, exports2) {
    for (var p5 in m5)
      if (p5 !== "default" && !exports2.hasOwnProperty(p5))
        exports2[p5] = m5[p5];
  }
  function __values2(o5) {
    var s5 = typeof Symbol === "function" && Symbol.iterator, m5 = s5 && o5[s5], i5 = 0;
    if (m5)
      return m5.call(o5);
    if (o5 && typeof o5.length === "number")
      return {
        next: function() {
          if (o5 && i5 >= o5.length)
            o5 = void 0;
          return { value: o5 && o5[i5++], done: !o5 };
        }
      };
    throw new TypeError(s5 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read2(o5, n5) {
    var m5 = typeof Symbol === "function" && o5[Symbol.iterator];
    if (!m5)
      return o5;
    var i5 = m5.call(o5), r5, ar = [], e5;
    try {
      while ((n5 === void 0 || n5-- > 0) && !(r5 = i5.next()).done)
        ar.push(r5.value);
    } catch (error) {
      e5 = { error };
    } finally {
      try {
        if (r5 && !r5.done && (m5 = i5["return"]))
          m5.call(i5);
      } finally {
        if (e5)
          throw e5.error;
      }
    }
    return ar;
  }
  function __spread2() {
    for (var ar = [], i5 = 0; i5 < arguments.length; i5++)
      ar = ar.concat(__read2(arguments[i5]));
    return ar;
  }
  function __spreadArrays2() {
    for (var s5 = 0, i5 = 0, il = arguments.length; i5 < il; i5++)
      s5 += arguments[i5].length;
    for (var r5 = Array(s5), k5 = 0, i5 = 0; i5 < il; i5++)
      for (var a5 = arguments[i5], j5 = 0, jl = a5.length; j5 < jl; j5++, k5++)
        r5[k5] = a5[j5];
    return r5;
  }
  function __await2(v6) {
    return this instanceof __await2 ? (this.v = v6, this) : new __await2(v6);
  }
  function __asyncGenerator2(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var g5 = generator.apply(thisArg, _arguments || []), i5, q3 = [];
    return i5 = {}, verb("next"), verb("throw"), verb("return"), i5[Symbol.asyncIterator] = function() {
      return this;
    }, i5;
    function verb(n5) {
      if (g5[n5])
        i5[n5] = function(v6) {
          return new Promise(function(a5, b4) {
            q3.push([n5, v6, a5, b4]) > 1 || resume(n5, v6);
          });
        };
    }
    function resume(n5, v6) {
      try {
        step(g5[n5](v6));
      } catch (e5) {
        settle(q3[0][3], e5);
      }
    }
    function step(r5) {
      r5.value instanceof __await2 ? Promise.resolve(r5.value.v).then(fulfill, reject) : settle(q3[0][2], r5);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f5, v6) {
      if (f5(v6), q3.shift(), q3.length)
        resume(q3[0][0], q3[0][1]);
    }
  }
  function __asyncDelegator2(o5) {
    var i5, p5;
    return i5 = {}, verb("next"), verb("throw", function(e5) {
      throw e5;
    }), verb("return"), i5[Symbol.iterator] = function() {
      return this;
    }, i5;
    function verb(n5, f5) {
      i5[n5] = o5[n5] ? function(v6) {
        return (p5 = !p5) ? { value: __await2(o5[n5](v6)), done: n5 === "return" } : f5 ? f5(v6) : v6;
      } : f5;
    }
  }
  function __asyncValues2(o5) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var m5 = o5[Symbol.asyncIterator], i5;
    return m5 ? m5.call(o5) : (o5 = typeof __values2 === "function" ? __values2(o5) : o5[Symbol.iterator](), i5 = {}, verb("next"), verb("throw"), verb("return"), i5[Symbol.asyncIterator] = function() {
      return this;
    }, i5);
    function verb(n5) {
      i5[n5] = o5[n5] && function(v6) {
        return new Promise(function(resolve, reject) {
          v6 = o5[n5](v6), settle(resolve, reject, v6.done, v6.value);
        });
      };
    }
    function settle(resolve, reject, d5, v6) {
      Promise.resolve(v6).then(function(v7) {
        resolve({ value: v7, done: d5 });
      }, reject);
    }
  }
  function __makeTemplateObject2(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  function __importStar2(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k5 in mod)
        if (Object.hasOwnProperty.call(mod, k5))
          result[k5] = mod[k5];
    }
    result.default = mod;
    return result;
  }
  function __importDefault2(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  }
  function __classPrivateFieldGet2(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
  }
  function __classPrivateFieldSet2(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
  }
  var extendStatics2, __assign2;
  var init_tslib_es62 = __esm({
    "node_modules/@aws-crypto/sha256-browser/node_modules/tslib/tslib.es6.js"() {
      extendStatics2 = function(d5, b4) {
        extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d6, b5) {
          d6.__proto__ = b5;
        } || function(d6, b5) {
          for (var p5 in b5)
            if (b5.hasOwnProperty(p5))
              d6[p5] = b5[p5];
        };
        return extendStatics2(d5, b4);
      };
      __assign2 = function() {
        __assign2 = Object.assign || function __assign6(t5) {
          for (var s5, i5 = 1, n5 = arguments.length; i5 < n5; i5++) {
            s5 = arguments[i5];
            for (var p5 in s5)
              if (Object.prototype.hasOwnProperty.call(s5, p5))
                t5[p5] = s5[p5];
          }
          return t5;
        };
        return __assign2.apply(this, arguments);
      };
    }
  });

  // node_modules/@aws-crypto/sha256-browser/build/isEmptyData.js
  var require_isEmptyData2 = __commonJS({
    "node_modules/@aws-crypto/sha256-browser/build/isEmptyData.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.isEmptyData = void 0;
      function isEmptyData(data) {
        if (typeof data === "string") {
          return data.length === 0;
        }
        return data.byteLength === 0;
      }
      exports2.isEmptyData = isEmptyData;
    }
  });

  // node_modules/@aws-crypto/sha256-browser/build/constants.js
  var require_constants = __commonJS({
    "node_modules/@aws-crypto/sha256-browser/build/constants.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.EMPTY_DATA_SHA_256 = exports2.SHA_256_HMAC_ALGO = exports2.SHA_256_HASH = void 0;
      exports2.SHA_256_HASH = { name: "SHA-256" };
      exports2.SHA_256_HMAC_ALGO = {
        name: "HMAC",
        hash: exports2.SHA_256_HASH
      };
      exports2.EMPTY_DATA_SHA_256 = new Uint8Array([
        227,
        176,
        196,
        66,
        152,
        252,
        28,
        20,
        154,
        251,
        244,
        200,
        153,
        111,
        185,
        36,
        39,
        174,
        65,
        228,
        100,
        155,
        147,
        76,
        164,
        149,
        153,
        27,
        120,
        82,
        184,
        85
      ]);
    }
  });

  // node_modules/@aws-sdk/util-locate-window/dist-cjs/index.js
  var require_dist_cjs2 = __commonJS({
    "node_modules/@aws-sdk/util-locate-window/dist-cjs/index.js"(exports2, module) {
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
      var __export2 = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps2 = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
      var src_exports = {};
      __export2(src_exports, {
        locateWindow: () => locateWindow
      });
      module.exports = __toCommonJS2(src_exports);
      var fallbackWindow = {};
      function locateWindow() {
        if (typeof window !== "undefined") {
          return window;
        } else if (typeof self !== "undefined") {
          return self;
        }
        return fallbackWindow;
      }
      __name(locateWindow, "locateWindow");
    }
  });

  // node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js
  var require_ie11Sha256 = __commonJS({
    "node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Sha256 = void 0;
      var isEmptyData_1 = require_isEmptyData2();
      var constants_1 = require_constants();
      var util_utf8_browser_1 = require_dist_cjs();
      var util_locate_window_1 = require_dist_cjs2();
      var Sha2563 = (
        /** @class */
        function() {
          function Sha2564(secret) {
            this.secret = secret;
            this.reset();
          }
          Sha2564.prototype.update = function(toHash) {
            var _this = this;
            if ((0, isEmptyData_1.isEmptyData)(toHash)) {
              return;
            }
            this.operation = this.operation.then(function(operation) {
              operation.onerror = function() {
                _this.operation = Promise.reject(new Error("Error encountered updating hash"));
              };
              operation.process(toArrayBufferView(toHash));
              return operation;
            });
            this.operation.catch(function() {
            });
          };
          Sha2564.prototype.digest = function() {
            return this.operation.then(function(operation) {
              return new Promise(function(resolve, reject) {
                operation.onerror = function() {
                  reject(new Error("Error encountered finalizing hash"));
                };
                operation.oncomplete = function() {
                  if (operation.result) {
                    resolve(new Uint8Array(operation.result));
                  }
                  reject(new Error("Error encountered finalizing hash"));
                };
                operation.finish();
              });
            });
          };
          Sha2564.prototype.reset = function() {
            if (this.secret) {
              this.operation = getKeyPromise(this.secret).then(function(keyData) {
                return (0, util_locate_window_1.locateWindow)().msCrypto.subtle.sign(constants_1.SHA_256_HMAC_ALGO, keyData);
              });
              this.operation.catch(function() {
              });
            } else {
              this.operation = Promise.resolve((0, util_locate_window_1.locateWindow)().msCrypto.subtle.digest("SHA-256"));
            }
          };
          return Sha2564;
        }()
      );
      exports2.Sha256 = Sha2563;
      function getKeyPromise(secret) {
        return new Promise(function(resolve, reject) {
          var keyOperation = (0, util_locate_window_1.locateWindow)().msCrypto.subtle.importKey("raw", toArrayBufferView(secret), constants_1.SHA_256_HMAC_ALGO, false, ["sign"]);
          keyOperation.oncomplete = function() {
            if (keyOperation.result) {
              resolve(keyOperation.result);
            }
            reject(new Error("ImportKey completed without importing key."));
          };
          keyOperation.onerror = function() {
            reject(new Error("ImportKey failed to import key."));
          };
        });
      }
      function toArrayBufferView(data) {
        if (typeof data === "string") {
          return (0, util_utf8_browser_1.fromUtf8)(data);
        }
        if (ArrayBuffer.isView(data)) {
          return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
        }
        return new Uint8Array(data);
      }
    }
  });

  // node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js
  var require_webCryptoSha256 = __commonJS({
    "node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Sha256 = void 0;
      var util_1 = require_build();
      var constants_1 = require_constants();
      var util_locate_window_1 = require_dist_cjs2();
      var Sha2563 = (
        /** @class */
        function() {
          function Sha2564(secret) {
            this.toHash = new Uint8Array(0);
            this.secret = secret;
            this.reset();
          }
          Sha2564.prototype.update = function(data) {
            if ((0, util_1.isEmptyData)(data)) {
              return;
            }
            var update = (0, util_1.convertToBuffer)(data);
            var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
            typedArray.set(this.toHash, 0);
            typedArray.set(update, this.toHash.byteLength);
            this.toHash = typedArray;
          };
          Sha2564.prototype.digest = function() {
            var _this = this;
            if (this.key) {
              return this.key.then(function(key) {
                return (0, util_locate_window_1.locateWindow)().crypto.subtle.sign(constants_1.SHA_256_HMAC_ALGO, key, _this.toHash).then(function(data) {
                  return new Uint8Array(data);
                });
              });
            }
            if ((0, util_1.isEmptyData)(this.toHash)) {
              return Promise.resolve(constants_1.EMPTY_DATA_SHA_256);
            }
            return Promise.resolve().then(function() {
              return (0, util_locate_window_1.locateWindow)().crypto.subtle.digest(constants_1.SHA_256_HASH, _this.toHash);
            }).then(function(data) {
              return Promise.resolve(new Uint8Array(data));
            });
          };
          Sha2564.prototype.reset = function() {
            var _this = this;
            this.toHash = new Uint8Array(0);
            if (this.secret && this.secret !== void 0) {
              this.key = new Promise(function(resolve, reject) {
                (0, util_locate_window_1.locateWindow)().crypto.subtle.importKey("raw", (0, util_1.convertToBuffer)(_this.secret), constants_1.SHA_256_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
              });
              this.key.catch(function() {
              });
            }
          };
          return Sha2564;
        }()
      );
      exports2.Sha256 = Sha2563;
    }
  });

  // node_modules/@aws-crypto/sha256-js/node_modules/tslib/tslib.es6.js
  var tslib_es6_exports3 = {};
  __export(tslib_es6_exports3, {
    __assign: () => __assign3,
    __asyncDelegator: () => __asyncDelegator3,
    __asyncGenerator: () => __asyncGenerator3,
    __asyncValues: () => __asyncValues3,
    __await: () => __await3,
    __awaiter: () => __awaiter3,
    __classPrivateFieldGet: () => __classPrivateFieldGet3,
    __classPrivateFieldSet: () => __classPrivateFieldSet3,
    __createBinding: () => __createBinding3,
    __decorate: () => __decorate3,
    __exportStar: () => __exportStar3,
    __extends: () => __extends3,
    __generator: () => __generator3,
    __importDefault: () => __importDefault3,
    __importStar: () => __importStar3,
    __makeTemplateObject: () => __makeTemplateObject3,
    __metadata: () => __metadata3,
    __param: () => __param3,
    __read: () => __read3,
    __rest: () => __rest3,
    __spread: () => __spread3,
    __spreadArrays: () => __spreadArrays3,
    __values: () => __values3
  });
  function __extends3(d5, b4) {
    extendStatics3(d5, b4);
    function __() {
      this.constructor = d5;
    }
    d5.prototype = b4 === null ? Object.create(b4) : (__.prototype = b4.prototype, new __());
  }
  function __rest3(s5, e5) {
    var t5 = {};
    for (var p5 in s5)
      if (Object.prototype.hasOwnProperty.call(s5, p5) && e5.indexOf(p5) < 0)
        t5[p5] = s5[p5];
    if (s5 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i5 = 0, p5 = Object.getOwnPropertySymbols(s5); i5 < p5.length; i5++) {
        if (e5.indexOf(p5[i5]) < 0 && Object.prototype.propertyIsEnumerable.call(s5, p5[i5]))
          t5[p5[i5]] = s5[p5[i5]];
      }
    return t5;
  }
  function __decorate3(decorators, target, key, desc) {
    var c5 = arguments.length, r5 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d5;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r5 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i5 = decorators.length - 1; i5 >= 0; i5--)
        if (d5 = decorators[i5])
          r5 = (c5 < 3 ? d5(r5) : c5 > 3 ? d5(target, key, r5) : d5(target, key)) || r5;
    return c5 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
  }
  function __param3(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __metadata3(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter3(thisArg, _arguments, P3, generator) {
    function adopt(value) {
      return value instanceof P3 ? value : new P3(function(resolve) {
        resolve(value);
      });
    }
    return new (P3 || (P3 = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e5) {
          reject(e5);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e5) {
          reject(e5);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator3(thisArg, body) {
    var _3 = { label: 0, sent: function() {
      if (t5[0] & 1)
        throw t5[1];
      return t5[1];
    }, trys: [], ops: [] }, f5, y4, t5, g5;
    return g5 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g5[Symbol.iterator] = function() {
      return this;
    }), g5;
    function verb(n5) {
      return function(v6) {
        return step([n5, v6]);
      };
    }
    function step(op) {
      if (f5)
        throw new TypeError("Generator is already executing.");
      while (_3)
        try {
          if (f5 = 1, y4 && (t5 = op[0] & 2 ? y4["return"] : op[0] ? y4["throw"] || ((t5 = y4["return"]) && t5.call(y4), 0) : y4.next) && !(t5 = t5.call(y4, op[1])).done)
            return t5;
          if (y4 = 0, t5)
            op = [op[0] & 2, t5.value];
          switch (op[0]) {
            case 0:
            case 1:
              t5 = op;
              break;
            case 4:
              _3.label++;
              return { value: op[1], done: false };
            case 5:
              _3.label++;
              y4 = op[1];
              op = [0];
              continue;
            case 7:
              op = _3.ops.pop();
              _3.trys.pop();
              continue;
            default:
              if (!(t5 = _3.trys, t5 = t5.length > 0 && t5[t5.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _3 = 0;
                continue;
              }
              if (op[0] === 3 && (!t5 || op[1] > t5[0] && op[1] < t5[3])) {
                _3.label = op[1];
                break;
              }
              if (op[0] === 6 && _3.label < t5[1]) {
                _3.label = t5[1];
                t5 = op;
                break;
              }
              if (t5 && _3.label < t5[2]) {
                _3.label = t5[2];
                _3.ops.push(op);
                break;
              }
              if (t5[2])
                _3.ops.pop();
              _3.trys.pop();
              continue;
          }
          op = body.call(thisArg, _3);
        } catch (e5) {
          op = [6, e5];
          y4 = 0;
        } finally {
          f5 = t5 = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __createBinding3(o5, m5, k5, k22) {
    if (k22 === void 0)
      k22 = k5;
    o5[k22] = m5[k5];
  }
  function __exportStar3(m5, exports2) {
    for (var p5 in m5)
      if (p5 !== "default" && !exports2.hasOwnProperty(p5))
        exports2[p5] = m5[p5];
  }
  function __values3(o5) {
    var s5 = typeof Symbol === "function" && Symbol.iterator, m5 = s5 && o5[s5], i5 = 0;
    if (m5)
      return m5.call(o5);
    if (o5 && typeof o5.length === "number")
      return {
        next: function() {
          if (o5 && i5 >= o5.length)
            o5 = void 0;
          return { value: o5 && o5[i5++], done: !o5 };
        }
      };
    throw new TypeError(s5 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read3(o5, n5) {
    var m5 = typeof Symbol === "function" && o5[Symbol.iterator];
    if (!m5)
      return o5;
    var i5 = m5.call(o5), r5, ar = [], e5;
    try {
      while ((n5 === void 0 || n5-- > 0) && !(r5 = i5.next()).done)
        ar.push(r5.value);
    } catch (error) {
      e5 = { error };
    } finally {
      try {
        if (r5 && !r5.done && (m5 = i5["return"]))
          m5.call(i5);
      } finally {
        if (e5)
          throw e5.error;
      }
    }
    return ar;
  }
  function __spread3() {
    for (var ar = [], i5 = 0; i5 < arguments.length; i5++)
      ar = ar.concat(__read3(arguments[i5]));
    return ar;
  }
  function __spreadArrays3() {
    for (var s5 = 0, i5 = 0, il = arguments.length; i5 < il; i5++)
      s5 += arguments[i5].length;
    for (var r5 = Array(s5), k5 = 0, i5 = 0; i5 < il; i5++)
      for (var a5 = arguments[i5], j5 = 0, jl = a5.length; j5 < jl; j5++, k5++)
        r5[k5] = a5[j5];
    return r5;
  }
  function __await3(v6) {
    return this instanceof __await3 ? (this.v = v6, this) : new __await3(v6);
  }
  function __asyncGenerator3(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var g5 = generator.apply(thisArg, _arguments || []), i5, q3 = [];
    return i5 = {}, verb("next"), verb("throw"), verb("return"), i5[Symbol.asyncIterator] = function() {
      return this;
    }, i5;
    function verb(n5) {
      if (g5[n5])
        i5[n5] = function(v6) {
          return new Promise(function(a5, b4) {
            q3.push([n5, v6, a5, b4]) > 1 || resume(n5, v6);
          });
        };
    }
    function resume(n5, v6) {
      try {
        step(g5[n5](v6));
      } catch (e5) {
        settle(q3[0][3], e5);
      }
    }
    function step(r5) {
      r5.value instanceof __await3 ? Promise.resolve(r5.value.v).then(fulfill, reject) : settle(q3[0][2], r5);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f5, v6) {
      if (f5(v6), q3.shift(), q3.length)
        resume(q3[0][0], q3[0][1]);
    }
  }
  function __asyncDelegator3(o5) {
    var i5, p5;
    return i5 = {}, verb("next"), verb("throw", function(e5) {
      throw e5;
    }), verb("return"), i5[Symbol.iterator] = function() {
      return this;
    }, i5;
    function verb(n5, f5) {
      i5[n5] = o5[n5] ? function(v6) {
        return (p5 = !p5) ? { value: __await3(o5[n5](v6)), done: n5 === "return" } : f5 ? f5(v6) : v6;
      } : f5;
    }
  }
  function __asyncValues3(o5) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var m5 = o5[Symbol.asyncIterator], i5;
    return m5 ? m5.call(o5) : (o5 = typeof __values3 === "function" ? __values3(o5) : o5[Symbol.iterator](), i5 = {}, verb("next"), verb("throw"), verb("return"), i5[Symbol.asyncIterator] = function() {
      return this;
    }, i5);
    function verb(n5) {
      i5[n5] = o5[n5] && function(v6) {
        return new Promise(function(resolve, reject) {
          v6 = o5[n5](v6), settle(resolve, reject, v6.done, v6.value);
        });
      };
    }
    function settle(resolve, reject, d5, v6) {
      Promise.resolve(v6).then(function(v7) {
        resolve({ value: v7, done: d5 });
      }, reject);
    }
  }
  function __makeTemplateObject3(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  function __importStar3(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k5 in mod)
        if (Object.hasOwnProperty.call(mod, k5))
          result[k5] = mod[k5];
    }
    result.default = mod;
    return result;
  }
  function __importDefault3(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  }
  function __classPrivateFieldGet3(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
  }
  function __classPrivateFieldSet3(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
  }
  var extendStatics3, __assign3;
  var init_tslib_es63 = __esm({
    "node_modules/@aws-crypto/sha256-js/node_modules/tslib/tslib.es6.js"() {
      extendStatics3 = function(d5, b4) {
        extendStatics3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d6, b5) {
          d6.__proto__ = b5;
        } || function(d6, b5) {
          for (var p5 in b5)
            if (b5.hasOwnProperty(p5))
              d6[p5] = b5[p5];
        };
        return extendStatics3(d5, b4);
      };
      __assign3 = function() {
        __assign3 = Object.assign || function __assign6(t5) {
          for (var s5, i5 = 1, n5 = arguments.length; i5 < n5; i5++) {
            s5 = arguments[i5];
            for (var p5 in s5)
              if (Object.prototype.hasOwnProperty.call(s5, p5))
                t5[p5] = s5[p5];
          }
          return t5;
        };
        return __assign3.apply(this, arguments);
      };
    }
  });

  // node_modules/@aws-crypto/sha256-js/build/constants.js
  var require_constants2 = __commonJS({
    "node_modules/@aws-crypto/sha256-js/build/constants.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.MAX_HASHABLE_LENGTH = exports2.INIT = exports2.KEY = exports2.DIGEST_LENGTH = exports2.BLOCK_SIZE = void 0;
      exports2.BLOCK_SIZE = 64;
      exports2.DIGEST_LENGTH = 32;
      exports2.KEY = new Uint32Array([
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ]);
      exports2.INIT = [
        1779033703,
        3144134277,
        1013904242,
        2773480762,
        1359893119,
        2600822924,
        528734635,
        1541459225
      ];
      exports2.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
    }
  });

  // node_modules/@aws-crypto/sha256-js/build/RawSha256.js
  var require_RawSha256 = __commonJS({
    "node_modules/@aws-crypto/sha256-js/build/RawSha256.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.RawSha256 = void 0;
      var constants_1 = require_constants2();
      var RawSha256 = (
        /** @class */
        function() {
          function RawSha2562() {
            this.state = Int32Array.from(constants_1.INIT);
            this.temp = new Int32Array(64);
            this.buffer = new Uint8Array(64);
            this.bufferLength = 0;
            this.bytesHashed = 0;
            this.finished = false;
          }
          RawSha2562.prototype.update = function(data) {
            if (this.finished) {
              throw new Error("Attempted to update an already finished hash.");
            }
            var position = 0;
            var byteLength = data.byteLength;
            this.bytesHashed += byteLength;
            if (this.bytesHashed * 8 > constants_1.MAX_HASHABLE_LENGTH) {
              throw new Error("Cannot hash more than 2^53 - 1 bits");
            }
            while (byteLength > 0) {
              this.buffer[this.bufferLength++] = data[position++];
              byteLength--;
              if (this.bufferLength === constants_1.BLOCK_SIZE) {
                this.hashBuffer();
                this.bufferLength = 0;
              }
            }
          };
          RawSha2562.prototype.digest = function() {
            if (!this.finished) {
              var bitsHashed = this.bytesHashed * 8;
              var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
              var undecoratedLength = this.bufferLength;
              bufferView.setUint8(this.bufferLength++, 128);
              if (undecoratedLength % constants_1.BLOCK_SIZE >= constants_1.BLOCK_SIZE - 8) {
                for (var i5 = this.bufferLength; i5 < constants_1.BLOCK_SIZE; i5++) {
                  bufferView.setUint8(i5, 0);
                }
                this.hashBuffer();
                this.bufferLength = 0;
              }
              for (var i5 = this.bufferLength; i5 < constants_1.BLOCK_SIZE - 8; i5++) {
                bufferView.setUint8(i5, 0);
              }
              bufferView.setUint32(constants_1.BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), true);
              bufferView.setUint32(constants_1.BLOCK_SIZE - 4, bitsHashed);
              this.hashBuffer();
              this.finished = true;
            }
            var out = new Uint8Array(constants_1.DIGEST_LENGTH);
            for (var i5 = 0; i5 < 8; i5++) {
              out[i5 * 4] = this.state[i5] >>> 24 & 255;
              out[i5 * 4 + 1] = this.state[i5] >>> 16 & 255;
              out[i5 * 4 + 2] = this.state[i5] >>> 8 & 255;
              out[i5 * 4 + 3] = this.state[i5] >>> 0 & 255;
            }
            return out;
          };
          RawSha2562.prototype.hashBuffer = function() {
            var _a = this, buffer = _a.buffer, state = _a.state;
            var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
            for (var i5 = 0; i5 < constants_1.BLOCK_SIZE; i5++) {
              if (i5 < 16) {
                this.temp[i5] = (buffer[i5 * 4] & 255) << 24 | (buffer[i5 * 4 + 1] & 255) << 16 | (buffer[i5 * 4 + 2] & 255) << 8 | buffer[i5 * 4 + 3] & 255;
              } else {
                var u5 = this.temp[i5 - 2];
                var t1_1 = (u5 >>> 17 | u5 << 15) ^ (u5 >>> 19 | u5 << 13) ^ u5 >>> 10;
                u5 = this.temp[i5 - 15];
                var t2_1 = (u5 >>> 7 | u5 << 25) ^ (u5 >>> 18 | u5 << 14) ^ u5 >>> 3;
                this.temp[i5] = (t1_1 + this.temp[i5 - 7] | 0) + (t2_1 + this.temp[i5 - 16] | 0);
              }
              var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (constants_1.KEY[i5] + this.temp[i5] | 0) | 0) | 0;
              var t22 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
              state7 = state6;
              state6 = state5;
              state5 = state4;
              state4 = state3 + t1 | 0;
              state3 = state2;
              state2 = state1;
              state1 = state0;
              state0 = t1 + t22 | 0;
            }
            state[0] += state0;
            state[1] += state1;
            state[2] += state2;
            state[3] += state3;
            state[4] += state4;
            state[5] += state5;
            state[6] += state6;
            state[7] += state7;
          };
          return RawSha2562;
        }()
      );
      exports2.RawSha256 = RawSha256;
    }
  });

  // node_modules/@aws-crypto/sha256-js/build/jsSha256.js
  var require_jsSha256 = __commonJS({
    "node_modules/@aws-crypto/sha256-js/build/jsSha256.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Sha256 = void 0;
      var tslib_1 = (init_tslib_es63(), __toCommonJS(tslib_es6_exports3));
      var constants_1 = require_constants2();
      var RawSha256_1 = require_RawSha256();
      var util_1 = require_build();
      var Sha2563 = (
        /** @class */
        function() {
          function Sha2564(secret) {
            this.secret = secret;
            this.hash = new RawSha256_1.RawSha256();
            this.reset();
          }
          Sha2564.prototype.update = function(toHash) {
            if ((0, util_1.isEmptyData)(toHash) || this.error) {
              return;
            }
            try {
              this.hash.update((0, util_1.convertToBuffer)(toHash));
            } catch (e5) {
              this.error = e5;
            }
          };
          Sha2564.prototype.digestSync = function() {
            if (this.error) {
              throw this.error;
            }
            if (this.outer) {
              if (!this.outer.finished) {
                this.outer.update(this.hash.digest());
              }
              return this.outer.digest();
            }
            return this.hash.digest();
          };
          Sha2564.prototype.digest = function() {
            return tslib_1.__awaiter(this, void 0, void 0, function() {
              return tslib_1.__generator(this, function(_a) {
                return [2, this.digestSync()];
              });
            });
          };
          Sha2564.prototype.reset = function() {
            this.hash = new RawSha256_1.RawSha256();
            if (this.secret) {
              this.outer = new RawSha256_1.RawSha256();
              var inner = bufferFromSecret(this.secret);
              var outer = new Uint8Array(constants_1.BLOCK_SIZE);
              outer.set(inner);
              for (var i5 = 0; i5 < constants_1.BLOCK_SIZE; i5++) {
                inner[i5] ^= 54;
                outer[i5] ^= 92;
              }
              this.hash.update(inner);
              this.outer.update(outer);
              for (var i5 = 0; i5 < inner.byteLength; i5++) {
                inner[i5] = 0;
              }
            }
          };
          return Sha2564;
        }()
      );
      exports2.Sha256 = Sha2563;
      function bufferFromSecret(secret) {
        var input = (0, util_1.convertToBuffer)(secret);
        if (input.byteLength > constants_1.BLOCK_SIZE) {
          var bufferHash = new RawSha256_1.RawSha256();
          bufferHash.update(input);
          input = bufferHash.digest();
        }
        var buffer = new Uint8Array(constants_1.BLOCK_SIZE);
        buffer.set(input);
        return buffer;
      }
    }
  });

  // node_modules/@aws-crypto/sha256-js/build/index.js
  var require_build3 = __commonJS({
    "node_modules/@aws-crypto/sha256-js/build/index.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es63(), __toCommonJS(tslib_es6_exports3));
      tslib_1.__exportStar(require_jsSha256(), exports2);
    }
  });

  // node_modules/@aws-crypto/supports-web-crypto/node_modules/tslib/tslib.es6.js
  var tslib_es6_exports4 = {};
  __export(tslib_es6_exports4, {
    __assign: () => __assign4,
    __asyncDelegator: () => __asyncDelegator4,
    __asyncGenerator: () => __asyncGenerator4,
    __asyncValues: () => __asyncValues4,
    __await: () => __await4,
    __awaiter: () => __awaiter4,
    __classPrivateFieldGet: () => __classPrivateFieldGet4,
    __classPrivateFieldSet: () => __classPrivateFieldSet4,
    __createBinding: () => __createBinding4,
    __decorate: () => __decorate4,
    __exportStar: () => __exportStar4,
    __extends: () => __extends4,
    __generator: () => __generator4,
    __importDefault: () => __importDefault4,
    __importStar: () => __importStar4,
    __makeTemplateObject: () => __makeTemplateObject4,
    __metadata: () => __metadata4,
    __param: () => __param4,
    __read: () => __read4,
    __rest: () => __rest4,
    __spread: () => __spread4,
    __spreadArrays: () => __spreadArrays4,
    __values: () => __values4
  });
  function __extends4(d5, b4) {
    extendStatics4(d5, b4);
    function __() {
      this.constructor = d5;
    }
    d5.prototype = b4 === null ? Object.create(b4) : (__.prototype = b4.prototype, new __());
  }
  function __rest4(s5, e5) {
    var t5 = {};
    for (var p5 in s5)
      if (Object.prototype.hasOwnProperty.call(s5, p5) && e5.indexOf(p5) < 0)
        t5[p5] = s5[p5];
    if (s5 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i5 = 0, p5 = Object.getOwnPropertySymbols(s5); i5 < p5.length; i5++) {
        if (e5.indexOf(p5[i5]) < 0 && Object.prototype.propertyIsEnumerable.call(s5, p5[i5]))
          t5[p5[i5]] = s5[p5[i5]];
      }
    return t5;
  }
  function __decorate4(decorators, target, key, desc) {
    var c5 = arguments.length, r5 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d5;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r5 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i5 = decorators.length - 1; i5 >= 0; i5--)
        if (d5 = decorators[i5])
          r5 = (c5 < 3 ? d5(r5) : c5 > 3 ? d5(target, key, r5) : d5(target, key)) || r5;
    return c5 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
  }
  function __param4(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __metadata4(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter4(thisArg, _arguments, P3, generator) {
    function adopt(value) {
      return value instanceof P3 ? value : new P3(function(resolve) {
        resolve(value);
      });
    }
    return new (P3 || (P3 = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e5) {
          reject(e5);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e5) {
          reject(e5);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator4(thisArg, body) {
    var _3 = { label: 0, sent: function() {
      if (t5[0] & 1)
        throw t5[1];
      return t5[1];
    }, trys: [], ops: [] }, f5, y4, t5, g5;
    return g5 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g5[Symbol.iterator] = function() {
      return this;
    }), g5;
    function verb(n5) {
      return function(v6) {
        return step([n5, v6]);
      };
    }
    function step(op) {
      if (f5)
        throw new TypeError("Generator is already executing.");
      while (_3)
        try {
          if (f5 = 1, y4 && (t5 = op[0] & 2 ? y4["return"] : op[0] ? y4["throw"] || ((t5 = y4["return"]) && t5.call(y4), 0) : y4.next) && !(t5 = t5.call(y4, op[1])).done)
            return t5;
          if (y4 = 0, t5)
            op = [op[0] & 2, t5.value];
          switch (op[0]) {
            case 0:
            case 1:
              t5 = op;
              break;
            case 4:
              _3.label++;
              return { value: op[1], done: false };
            case 5:
              _3.label++;
              y4 = op[1];
              op = [0];
              continue;
            case 7:
              op = _3.ops.pop();
              _3.trys.pop();
              continue;
            default:
              if (!(t5 = _3.trys, t5 = t5.length > 0 && t5[t5.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _3 = 0;
                continue;
              }
              if (op[0] === 3 && (!t5 || op[1] > t5[0] && op[1] < t5[3])) {
                _3.label = op[1];
                break;
              }
              if (op[0] === 6 && _3.label < t5[1]) {
                _3.label = t5[1];
                t5 = op;
                break;
              }
              if (t5 && _3.label < t5[2]) {
                _3.label = t5[2];
                _3.ops.push(op);
                break;
              }
              if (t5[2])
                _3.ops.pop();
              _3.trys.pop();
              continue;
          }
          op = body.call(thisArg, _3);
        } catch (e5) {
          op = [6, e5];
          y4 = 0;
        } finally {
          f5 = t5 = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __createBinding4(o5, m5, k5, k22) {
    if (k22 === void 0)
      k22 = k5;
    o5[k22] = m5[k5];
  }
  function __exportStar4(m5, exports2) {
    for (var p5 in m5)
      if (p5 !== "default" && !exports2.hasOwnProperty(p5))
        exports2[p5] = m5[p5];
  }
  function __values4(o5) {
    var s5 = typeof Symbol === "function" && Symbol.iterator, m5 = s5 && o5[s5], i5 = 0;
    if (m5)
      return m5.call(o5);
    if (o5 && typeof o5.length === "number")
      return {
        next: function() {
          if (o5 && i5 >= o5.length)
            o5 = void 0;
          return { value: o5 && o5[i5++], done: !o5 };
        }
      };
    throw new TypeError(s5 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read4(o5, n5) {
    var m5 = typeof Symbol === "function" && o5[Symbol.iterator];
    if (!m5)
      return o5;
    var i5 = m5.call(o5), r5, ar = [], e5;
    try {
      while ((n5 === void 0 || n5-- > 0) && !(r5 = i5.next()).done)
        ar.push(r5.value);
    } catch (error) {
      e5 = { error };
    } finally {
      try {
        if (r5 && !r5.done && (m5 = i5["return"]))
          m5.call(i5);
      } finally {
        if (e5)
          throw e5.error;
      }
    }
    return ar;
  }
  function __spread4() {
    for (var ar = [], i5 = 0; i5 < arguments.length; i5++)
      ar = ar.concat(__read4(arguments[i5]));
    return ar;
  }
  function __spreadArrays4() {
    for (var s5 = 0, i5 = 0, il = arguments.length; i5 < il; i5++)
      s5 += arguments[i5].length;
    for (var r5 = Array(s5), k5 = 0, i5 = 0; i5 < il; i5++)
      for (var a5 = arguments[i5], j5 = 0, jl = a5.length; j5 < jl; j5++, k5++)
        r5[k5] = a5[j5];
    return r5;
  }
  function __await4(v6) {
    return this instanceof __await4 ? (this.v = v6, this) : new __await4(v6);
  }
  function __asyncGenerator4(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var g5 = generator.apply(thisArg, _arguments || []), i5, q3 = [];
    return i5 = {}, verb("next"), verb("throw"), verb("return"), i5[Symbol.asyncIterator] = function() {
      return this;
    }, i5;
    function verb(n5) {
      if (g5[n5])
        i5[n5] = function(v6) {
          return new Promise(function(a5, b4) {
            q3.push([n5, v6, a5, b4]) > 1 || resume(n5, v6);
          });
        };
    }
    function resume(n5, v6) {
      try {
        step(g5[n5](v6));
      } catch (e5) {
        settle(q3[0][3], e5);
      }
    }
    function step(r5) {
      r5.value instanceof __await4 ? Promise.resolve(r5.value.v).then(fulfill, reject) : settle(q3[0][2], r5);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f5, v6) {
      if (f5(v6), q3.shift(), q3.length)
        resume(q3[0][0], q3[0][1]);
    }
  }
  function __asyncDelegator4(o5) {
    var i5, p5;
    return i5 = {}, verb("next"), verb("throw", function(e5) {
      throw e5;
    }), verb("return"), i5[Symbol.iterator] = function() {
      return this;
    }, i5;
    function verb(n5, f5) {
      i5[n5] = o5[n5] ? function(v6) {
        return (p5 = !p5) ? { value: __await4(o5[n5](v6)), done: n5 === "return" } : f5 ? f5(v6) : v6;
      } : f5;
    }
  }
  function __asyncValues4(o5) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var m5 = o5[Symbol.asyncIterator], i5;
    return m5 ? m5.call(o5) : (o5 = typeof __values4 === "function" ? __values4(o5) : o5[Symbol.iterator](), i5 = {}, verb("next"), verb("throw"), verb("return"), i5[Symbol.asyncIterator] = function() {
      return this;
    }, i5);
    function verb(n5) {
      i5[n5] = o5[n5] && function(v6) {
        return new Promise(function(resolve, reject) {
          v6 = o5[n5](v6), settle(resolve, reject, v6.done, v6.value);
        });
      };
    }
    function settle(resolve, reject, d5, v6) {
      Promise.resolve(v6).then(function(v7) {
        resolve({ value: v7, done: d5 });
      }, reject);
    }
  }
  function __makeTemplateObject4(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  function __importStar4(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k5 in mod)
        if (Object.hasOwnProperty.call(mod, k5))
          result[k5] = mod[k5];
    }
    result.default = mod;
    return result;
  }
  function __importDefault4(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  }
  function __classPrivateFieldGet4(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
  }
  function __classPrivateFieldSet4(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
  }
  var extendStatics4, __assign4;
  var init_tslib_es64 = __esm({
    "node_modules/@aws-crypto/supports-web-crypto/node_modules/tslib/tslib.es6.js"() {
      extendStatics4 = function(d5, b4) {
        extendStatics4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d6, b5) {
          d6.__proto__ = b5;
        } || function(d6, b5) {
          for (var p5 in b5)
            if (b5.hasOwnProperty(p5))
              d6[p5] = b5[p5];
        };
        return extendStatics4(d5, b4);
      };
      __assign4 = function() {
        __assign4 = Object.assign || function __assign6(t5) {
          for (var s5, i5 = 1, n5 = arguments.length; i5 < n5; i5++) {
            s5 = arguments[i5];
            for (var p5 in s5)
              if (Object.prototype.hasOwnProperty.call(s5, p5))
                t5[p5] = s5[p5];
          }
          return t5;
        };
        return __assign4.apply(this, arguments);
      };
    }
  });

  // node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js
  var require_supportsWebCrypto = __commonJS({
    "node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.supportsZeroByteGCM = exports2.supportsSubtleCrypto = exports2.supportsSecureRandom = exports2.supportsWebCrypto = void 0;
      var tslib_1 = (init_tslib_es64(), __toCommonJS(tslib_es6_exports4));
      var subtleCryptoMethods = [
        "decrypt",
        "digest",
        "encrypt",
        "exportKey",
        "generateKey",
        "importKey",
        "sign",
        "verify"
      ];
      function supportsWebCrypto(window2) {
        if (supportsSecureRandom(window2) && typeof window2.crypto.subtle === "object") {
          var subtle = window2.crypto.subtle;
          return supportsSubtleCrypto(subtle);
        }
        return false;
      }
      exports2.supportsWebCrypto = supportsWebCrypto;
      function supportsSecureRandom(window2) {
        if (typeof window2 === "object" && typeof window2.crypto === "object") {
          var getRandomValues3 = window2.crypto.getRandomValues;
          return typeof getRandomValues3 === "function";
        }
        return false;
      }
      exports2.supportsSecureRandom = supportsSecureRandom;
      function supportsSubtleCrypto(subtle) {
        return subtle && subtleCryptoMethods.every(function(methodName) {
          return typeof subtle[methodName] === "function";
        });
      }
      exports2.supportsSubtleCrypto = supportsSubtleCrypto;
      function supportsZeroByteGCM(subtle) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var key, zeroByteAuthTag, _a;
          return tslib_1.__generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                if (!supportsSubtleCrypto(subtle))
                  return [2, false];
                _b.label = 1;
              case 1:
                _b.trys.push([1, 4, , 5]);
                return [4, subtle.generateKey({ name: "AES-GCM", length: 128 }, false, ["encrypt"])];
              case 2:
                key = _b.sent();
                return [4, subtle.encrypt({
                  name: "AES-GCM",
                  iv: new Uint8Array(Array(12)),
                  additionalData: new Uint8Array(Array(16)),
                  tagLength: 128
                }, key, new Uint8Array(0))];
              case 3:
                zeroByteAuthTag = _b.sent();
                return [2, zeroByteAuthTag.byteLength === 16];
              case 4:
                _a = _b.sent();
                return [2, false];
              case 5:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }
      exports2.supportsZeroByteGCM = supportsZeroByteGCM;
    }
  });

  // node_modules/@aws-crypto/supports-web-crypto/build/index.js
  var require_build4 = __commonJS({
    "node_modules/@aws-crypto/supports-web-crypto/build/index.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es64(), __toCommonJS(tslib_es6_exports4));
      tslib_1.__exportStar(require_supportsWebCrypto(), exports2);
    }
  });

  // node_modules/@aws-crypto/ie11-detection/node_modules/tslib/tslib.es6.js
  var tslib_es6_exports5 = {};
  __export(tslib_es6_exports5, {
    __assign: () => __assign5,
    __asyncDelegator: () => __asyncDelegator5,
    __asyncGenerator: () => __asyncGenerator5,
    __asyncValues: () => __asyncValues5,
    __await: () => __await5,
    __awaiter: () => __awaiter5,
    __classPrivateFieldGet: () => __classPrivateFieldGet5,
    __classPrivateFieldSet: () => __classPrivateFieldSet5,
    __createBinding: () => __createBinding5,
    __decorate: () => __decorate5,
    __exportStar: () => __exportStar5,
    __extends: () => __extends5,
    __generator: () => __generator5,
    __importDefault: () => __importDefault5,
    __importStar: () => __importStar5,
    __makeTemplateObject: () => __makeTemplateObject5,
    __metadata: () => __metadata5,
    __param: () => __param5,
    __read: () => __read5,
    __rest: () => __rest5,
    __spread: () => __spread5,
    __spreadArrays: () => __spreadArrays5,
    __values: () => __values5
  });
  function __extends5(d5, b4) {
    extendStatics5(d5, b4);
    function __() {
      this.constructor = d5;
    }
    d5.prototype = b4 === null ? Object.create(b4) : (__.prototype = b4.prototype, new __());
  }
  function __rest5(s5, e5) {
    var t5 = {};
    for (var p5 in s5)
      if (Object.prototype.hasOwnProperty.call(s5, p5) && e5.indexOf(p5) < 0)
        t5[p5] = s5[p5];
    if (s5 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i5 = 0, p5 = Object.getOwnPropertySymbols(s5); i5 < p5.length; i5++) {
        if (e5.indexOf(p5[i5]) < 0 && Object.prototype.propertyIsEnumerable.call(s5, p5[i5]))
          t5[p5[i5]] = s5[p5[i5]];
      }
    return t5;
  }
  function __decorate5(decorators, target, key, desc) {
    var c5 = arguments.length, r5 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d5;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r5 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i5 = decorators.length - 1; i5 >= 0; i5--)
        if (d5 = decorators[i5])
          r5 = (c5 < 3 ? d5(r5) : c5 > 3 ? d5(target, key, r5) : d5(target, key)) || r5;
    return c5 > 3 && r5 && Object.defineProperty(target, key, r5), r5;
  }
  function __param5(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __metadata5(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter5(thisArg, _arguments, P3, generator) {
    function adopt(value) {
      return value instanceof P3 ? value : new P3(function(resolve) {
        resolve(value);
      });
    }
    return new (P3 || (P3 = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e5) {
          reject(e5);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e5) {
          reject(e5);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator5(thisArg, body) {
    var _3 = { label: 0, sent: function() {
      if (t5[0] & 1)
        throw t5[1];
      return t5[1];
    }, trys: [], ops: [] }, f5, y4, t5, g5;
    return g5 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g5[Symbol.iterator] = function() {
      return this;
    }), g5;
    function verb(n5) {
      return function(v6) {
        return step([n5, v6]);
      };
    }
    function step(op) {
      if (f5)
        throw new TypeError("Generator is already executing.");
      while (_3)
        try {
          if (f5 = 1, y4 && (t5 = op[0] & 2 ? y4["return"] : op[0] ? y4["throw"] || ((t5 = y4["return"]) && t5.call(y4), 0) : y4.next) && !(t5 = t5.call(y4, op[1])).done)
            return t5;
          if (y4 = 0, t5)
            op = [op[0] & 2, t5.value];
          switch (op[0]) {
            case 0:
            case 1:
              t5 = op;
              break;
            case 4:
              _3.label++;
              return { value: op[1], done: false };
            case 5:
              _3.label++;
              y4 = op[1];
              op = [0];
              continue;
            case 7:
              op = _3.ops.pop();
              _3.trys.pop();
              continue;
            default:
              if (!(t5 = _3.trys, t5 = t5.length > 0 && t5[t5.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _3 = 0;
                continue;
              }
              if (op[0] === 3 && (!t5 || op[1] > t5[0] && op[1] < t5[3])) {
                _3.label = op[1];
                break;
              }
              if (op[0] === 6 && _3.label < t5[1]) {
                _3.label = t5[1];
                t5 = op;
                break;
              }
              if (t5 && _3.label < t5[2]) {
                _3.label = t5[2];
                _3.ops.push(op);
                break;
              }
              if (t5[2])
                _3.ops.pop();
              _3.trys.pop();
              continue;
          }
          op = body.call(thisArg, _3);
        } catch (e5) {
          op = [6, e5];
          y4 = 0;
        } finally {
          f5 = t5 = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __createBinding5(o5, m5, k5, k22) {
    if (k22 === void 0)
      k22 = k5;
    o5[k22] = m5[k5];
  }
  function __exportStar5(m5, exports2) {
    for (var p5 in m5)
      if (p5 !== "default" && !exports2.hasOwnProperty(p5))
        exports2[p5] = m5[p5];
  }
  function __values5(o5) {
    var s5 = typeof Symbol === "function" && Symbol.iterator, m5 = s5 && o5[s5], i5 = 0;
    if (m5)
      return m5.call(o5);
    if (o5 && typeof o5.length === "number")
      return {
        next: function() {
          if (o5 && i5 >= o5.length)
            o5 = void 0;
          return { value: o5 && o5[i5++], done: !o5 };
        }
      };
    throw new TypeError(s5 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read5(o5, n5) {
    var m5 = typeof Symbol === "function" && o5[Symbol.iterator];
    if (!m5)
      return o5;
    var i5 = m5.call(o5), r5, ar = [], e5;
    try {
      while ((n5 === void 0 || n5-- > 0) && !(r5 = i5.next()).done)
        ar.push(r5.value);
    } catch (error) {
      e5 = { error };
    } finally {
      try {
        if (r5 && !r5.done && (m5 = i5["return"]))
          m5.call(i5);
      } finally {
        if (e5)
          throw e5.error;
      }
    }
    return ar;
  }
  function __spread5() {
    for (var ar = [], i5 = 0; i5 < arguments.length; i5++)
      ar = ar.concat(__read5(arguments[i5]));
    return ar;
  }
  function __spreadArrays5() {
    for (var s5 = 0, i5 = 0, il = arguments.length; i5 < il; i5++)
      s5 += arguments[i5].length;
    for (var r5 = Array(s5), k5 = 0, i5 = 0; i5 < il; i5++)
      for (var a5 = arguments[i5], j5 = 0, jl = a5.length; j5 < jl; j5++, k5++)
        r5[k5] = a5[j5];
    return r5;
  }
  function __await5(v6) {
    return this instanceof __await5 ? (this.v = v6, this) : new __await5(v6);
  }
  function __asyncGenerator5(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var g5 = generator.apply(thisArg, _arguments || []), i5, q3 = [];
    return i5 = {}, verb("next"), verb("throw"), verb("return"), i5[Symbol.asyncIterator] = function() {
      return this;
    }, i5;
    function verb(n5) {
      if (g5[n5])
        i5[n5] = function(v6) {
          return new Promise(function(a5, b4) {
            q3.push([n5, v6, a5, b4]) > 1 || resume(n5, v6);
          });
        };
    }
    function resume(n5, v6) {
      try {
        step(g5[n5](v6));
      } catch (e5) {
        settle(q3[0][3], e5);
      }
    }
    function step(r5) {
      r5.value instanceof __await5 ? Promise.resolve(r5.value.v).then(fulfill, reject) : settle(q3[0][2], r5);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f5, v6) {
      if (f5(v6), q3.shift(), q3.length)
        resume(q3[0][0], q3[0][1]);
    }
  }
  function __asyncDelegator5(o5) {
    var i5, p5;
    return i5 = {}, verb("next"), verb("throw", function(e5) {
      throw e5;
    }), verb("return"), i5[Symbol.iterator] = function() {
      return this;
    }, i5;
    function verb(n5, f5) {
      i5[n5] = o5[n5] ? function(v6) {
        return (p5 = !p5) ? { value: __await5(o5[n5](v6)), done: n5 === "return" } : f5 ? f5(v6) : v6;
      } : f5;
    }
  }
  function __asyncValues5(o5) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var m5 = o5[Symbol.asyncIterator], i5;
    return m5 ? m5.call(o5) : (o5 = typeof __values5 === "function" ? __values5(o5) : o5[Symbol.iterator](), i5 = {}, verb("next"), verb("throw"), verb("return"), i5[Symbol.asyncIterator] = function() {
      return this;
    }, i5);
    function verb(n5) {
      i5[n5] = o5[n5] && function(v6) {
        return new Promise(function(resolve, reject) {
          v6 = o5[n5](v6), settle(resolve, reject, v6.done, v6.value);
        });
      };
    }
    function settle(resolve, reject, d5, v6) {
      Promise.resolve(v6).then(function(v7) {
        resolve({ value: v7, done: d5 });
      }, reject);
    }
  }
  function __makeTemplateObject5(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  function __importStar5(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k5 in mod)
        if (Object.hasOwnProperty.call(mod, k5))
          result[k5] = mod[k5];
    }
    result.default = mod;
    return result;
  }
  function __importDefault5(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  }
  function __classPrivateFieldGet5(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
  }
  function __classPrivateFieldSet5(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
  }
  var extendStatics5, __assign5;
  var init_tslib_es65 = __esm({
    "node_modules/@aws-crypto/ie11-detection/node_modules/tslib/tslib.es6.js"() {
      extendStatics5 = function(d5, b4) {
        extendStatics5 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d6, b5) {
          d6.__proto__ = b5;
        } || function(d6, b5) {
          for (var p5 in b5)
            if (b5.hasOwnProperty(p5))
              d6[p5] = b5[p5];
        };
        return extendStatics5(d5, b4);
      };
      __assign5 = function() {
        __assign5 = Object.assign || function __assign6(t5) {
          for (var s5, i5 = 1, n5 = arguments.length; i5 < n5; i5++) {
            s5 = arguments[i5];
            for (var p5 in s5)
              if (Object.prototype.hasOwnProperty.call(s5, p5))
                t5[p5] = s5[p5];
          }
          return t5;
        };
        return __assign5.apply(this, arguments);
      };
    }
  });

  // node_modules/@aws-crypto/ie11-detection/build/CryptoOperation.js
  var require_CryptoOperation = __commonJS({
    "node_modules/@aws-crypto/ie11-detection/build/CryptoOperation.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
    }
  });

  // node_modules/@aws-crypto/ie11-detection/build/Key.js
  var require_Key = __commonJS({
    "node_modules/@aws-crypto/ie11-detection/build/Key.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
    }
  });

  // node_modules/@aws-crypto/ie11-detection/build/KeyOperation.js
  var require_KeyOperation = __commonJS({
    "node_modules/@aws-crypto/ie11-detection/build/KeyOperation.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
    }
  });

  // node_modules/@aws-crypto/ie11-detection/build/MsSubtleCrypto.js
  var require_MsSubtleCrypto = __commonJS({
    "node_modules/@aws-crypto/ie11-detection/build/MsSubtleCrypto.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
    }
  });

  // node_modules/@aws-crypto/ie11-detection/build/MsWindow.js
  var require_MsWindow = __commonJS({
    "node_modules/@aws-crypto/ie11-detection/build/MsWindow.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.isMsWindow = void 0;
      var msSubtleCryptoMethods = [
        "decrypt",
        "digest",
        "encrypt",
        "exportKey",
        "generateKey",
        "importKey",
        "sign",
        "verify"
      ];
      function quacksLikeAnMsWindow(window2) {
        return "MSInputMethodContext" in window2 && "msCrypto" in window2;
      }
      function isMsWindow(window2) {
        if (quacksLikeAnMsWindow(window2) && window2.msCrypto.subtle !== void 0) {
          var _a = window2.msCrypto, getRandomValues3 = _a.getRandomValues, subtle_1 = _a.subtle;
          return msSubtleCryptoMethods.map(function(methodName) {
            return subtle_1[methodName];
          }).concat(getRandomValues3).every(function(method) {
            return typeof method === "function";
          });
        }
        return false;
      }
      exports2.isMsWindow = isMsWindow;
    }
  });

  // node_modules/@aws-crypto/ie11-detection/build/index.js
  var require_build5 = __commonJS({
    "node_modules/@aws-crypto/ie11-detection/build/index.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es65(), __toCommonJS(tslib_es6_exports5));
      tslib_1.__exportStar(require_CryptoOperation(), exports2);
      tslib_1.__exportStar(require_Key(), exports2);
      tslib_1.__exportStar(require_KeyOperation(), exports2);
      tslib_1.__exportStar(require_MsSubtleCrypto(), exports2);
      tslib_1.__exportStar(require_MsWindow(), exports2);
    }
  });

  // node_modules/@aws-crypto/sha256-browser/build/crossPlatformSha256.js
  var require_crossPlatformSha256 = __commonJS({
    "node_modules/@aws-crypto/sha256-browser/build/crossPlatformSha256.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Sha256 = void 0;
      var ie11Sha256_1 = require_ie11Sha256();
      var webCryptoSha256_1 = require_webCryptoSha256();
      var sha256_js_1 = require_build3();
      var supports_web_crypto_1 = require_build4();
      var ie11_detection_1 = require_build5();
      var util_locate_window_1 = require_dist_cjs2();
      var util_1 = require_build();
      var Sha2563 = (
        /** @class */
        function() {
          function Sha2564(secret) {
            if ((0, supports_web_crypto_1.supportsWebCrypto)((0, util_locate_window_1.locateWindow)())) {
              this.hash = new webCryptoSha256_1.Sha256(secret);
            } else if ((0, ie11_detection_1.isMsWindow)((0, util_locate_window_1.locateWindow)())) {
              this.hash = new ie11Sha256_1.Sha256(secret);
            } else {
              this.hash = new sha256_js_1.Sha256(secret);
            }
          }
          Sha2564.prototype.update = function(data, encoding) {
            this.hash.update((0, util_1.convertToBuffer)(data));
          };
          Sha2564.prototype.digest = function() {
            return this.hash.digest();
          };
          Sha2564.prototype.reset = function() {
            this.hash.reset();
          };
          return Sha2564;
        }()
      );
      exports2.Sha256 = Sha2563;
    }
  });

  // node_modules/@aws-crypto/sha256-browser/build/index.js
  var require_build6 = __commonJS({
    "node_modules/@aws-crypto/sha256-browser/build/index.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.WebCryptoSha256 = exports2.Ie11Sha256 = void 0;
      var tslib_1 = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
      tslib_1.__exportStar(require_crossPlatformSha256(), exports2);
      var ie11Sha256_1 = require_ie11Sha256();
      Object.defineProperty(exports2, "Ie11Sha256", { enumerable: true, get: function() {
        return ie11Sha256_1.Sha256;
      } });
      var webCryptoSha256_1 = require_webCryptoSha256();
      Object.defineProperty(exports2, "WebCryptoSha256", { enumerable: true, get: function() {
        return webCryptoSha256_1.Sha256;
      } });
    }
  });

  // node_modules/bowser/es5.js
  var require_es5 = __commonJS({
    "node_modules/bowser/es5.js"(exports2, module) {
      !function(e5, t5) {
        "object" == typeof exports2 && "object" == typeof module ? module.exports = t5() : "function" == typeof define && define.amd ? define([], t5) : "object" == typeof exports2 ? exports2.bowser = t5() : e5.bowser = t5();
      }(exports2, function() {
        return function(e5) {
          var t5 = {};
          function r5(n5) {
            if (t5[n5])
              return t5[n5].exports;
            var i5 = t5[n5] = { i: n5, l: false, exports: {} };
            return e5[n5].call(i5.exports, i5, i5.exports, r5), i5.l = true, i5.exports;
          }
          return r5.m = e5, r5.c = t5, r5.d = function(e6, t6, n5) {
            r5.o(e6, t6) || Object.defineProperty(e6, t6, { enumerable: true, get: n5 });
          }, r5.r = function(e6) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e6, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e6, "__esModule", { value: true });
          }, r5.t = function(e6, t6) {
            if (1 & t6 && (e6 = r5(e6)), 8 & t6)
              return e6;
            if (4 & t6 && "object" == typeof e6 && e6 && e6.__esModule)
              return e6;
            var n5 = /* @__PURE__ */ Object.create(null);
            if (r5.r(n5), Object.defineProperty(n5, "default", { enumerable: true, value: e6 }), 2 & t6 && "string" != typeof e6)
              for (var i5 in e6)
                r5.d(n5, i5, function(t7) {
                  return e6[t7];
                }.bind(null, i5));
            return n5;
          }, r5.n = function(e6) {
            var t6 = e6 && e6.__esModule ? function() {
              return e6.default;
            } : function() {
              return e6;
            };
            return r5.d(t6, "a", t6), t6;
          }, r5.o = function(e6, t6) {
            return Object.prototype.hasOwnProperty.call(e6, t6);
          }, r5.p = "", r5(r5.s = 90);
        }({ 17: function(e5, t5, r5) {
          "use strict";
          t5.__esModule = true, t5.default = void 0;
          var n5 = r5(18), i5 = function() {
            function e6() {
            }
            return e6.getFirstMatch = function(e7, t6) {
              var r6 = t6.match(e7);
              return r6 && r6.length > 0 && r6[1] || "";
            }, e6.getSecondMatch = function(e7, t6) {
              var r6 = t6.match(e7);
              return r6 && r6.length > 1 && r6[2] || "";
            }, e6.matchAndReturnConst = function(e7, t6, r6) {
              if (e7.test(t6))
                return r6;
            }, e6.getWindowsVersionName = function(e7) {
              switch (e7) {
                case "NT":
                  return "NT";
                case "XP":
                  return "XP";
                case "NT 5.0":
                  return "2000";
                case "NT 5.1":
                  return "XP";
                case "NT 5.2":
                  return "2003";
                case "NT 6.0":
                  return "Vista";
                case "NT 6.1":
                  return "7";
                case "NT 6.2":
                  return "8";
                case "NT 6.3":
                  return "8.1";
                case "NT 10.0":
                  return "10";
                default:
                  return;
              }
            }, e6.getMacOSVersionName = function(e7) {
              var t6 = e7.split(".").splice(0, 2).map(function(e8) {
                return parseInt(e8, 10) || 0;
              });
              if (t6.push(0), 10 === t6[0])
                switch (t6[1]) {
                  case 5:
                    return "Leopard";
                  case 6:
                    return "Snow Leopard";
                  case 7:
                    return "Lion";
                  case 8:
                    return "Mountain Lion";
                  case 9:
                    return "Mavericks";
                  case 10:
                    return "Yosemite";
                  case 11:
                    return "El Capitan";
                  case 12:
                    return "Sierra";
                  case 13:
                    return "High Sierra";
                  case 14:
                    return "Mojave";
                  case 15:
                    return "Catalina";
                  default:
                    return;
                }
            }, e6.getAndroidVersionName = function(e7) {
              var t6 = e7.split(".").splice(0, 2).map(function(e8) {
                return parseInt(e8, 10) || 0;
              });
              if (t6.push(0), !(1 === t6[0] && t6[1] < 5))
                return 1 === t6[0] && t6[1] < 6 ? "Cupcake" : 1 === t6[0] && t6[1] >= 6 ? "Donut" : 2 === t6[0] && t6[1] < 2 ? "Eclair" : 2 === t6[0] && 2 === t6[1] ? "Froyo" : 2 === t6[0] && t6[1] > 2 ? "Gingerbread" : 3 === t6[0] ? "Honeycomb" : 4 === t6[0] && t6[1] < 1 ? "Ice Cream Sandwich" : 4 === t6[0] && t6[1] < 4 ? "Jelly Bean" : 4 === t6[0] && t6[1] >= 4 ? "KitKat" : 5 === t6[0] ? "Lollipop" : 6 === t6[0] ? "Marshmallow" : 7 === t6[0] ? "Nougat" : 8 === t6[0] ? "Oreo" : 9 === t6[0] ? "Pie" : void 0;
            }, e6.getVersionPrecision = function(e7) {
              return e7.split(".").length;
            }, e6.compareVersions = function(t6, r6, n6) {
              void 0 === n6 && (n6 = false);
              var i6 = e6.getVersionPrecision(t6), s5 = e6.getVersionPrecision(r6), a5 = Math.max(i6, s5), o5 = 0, u5 = e6.map([t6, r6], function(t7) {
                var r7 = a5 - e6.getVersionPrecision(t7), n7 = t7 + new Array(r7 + 1).join(".0");
                return e6.map(n7.split("."), function(e7) {
                  return new Array(20 - e7.length).join("0") + e7;
                }).reverse();
              });
              for (n6 && (o5 = a5 - Math.min(i6, s5)), a5 -= 1; a5 >= o5; ) {
                if (u5[0][a5] > u5[1][a5])
                  return 1;
                if (u5[0][a5] === u5[1][a5]) {
                  if (a5 === o5)
                    return 0;
                  a5 -= 1;
                } else if (u5[0][a5] < u5[1][a5])
                  return -1;
              }
            }, e6.map = function(e7, t6) {
              var r6, n6 = [];
              if (Array.prototype.map)
                return Array.prototype.map.call(e7, t6);
              for (r6 = 0; r6 < e7.length; r6 += 1)
                n6.push(t6(e7[r6]));
              return n6;
            }, e6.find = function(e7, t6) {
              var r6, n6;
              if (Array.prototype.find)
                return Array.prototype.find.call(e7, t6);
              for (r6 = 0, n6 = e7.length; r6 < n6; r6 += 1) {
                var i6 = e7[r6];
                if (t6(i6, r6))
                  return i6;
              }
            }, e6.assign = function(e7) {
              for (var t6, r6, n6 = e7, i6 = arguments.length, s5 = new Array(i6 > 1 ? i6 - 1 : 0), a5 = 1; a5 < i6; a5++)
                s5[a5 - 1] = arguments[a5];
              if (Object.assign)
                return Object.assign.apply(Object, [e7].concat(s5));
              var o5 = function() {
                var e8 = s5[t6];
                "object" == typeof e8 && null !== e8 && Object.keys(e8).forEach(function(t7) {
                  n6[t7] = e8[t7];
                });
              };
              for (t6 = 0, r6 = s5.length; t6 < r6; t6 += 1)
                o5();
              return e7;
            }, e6.getBrowserAlias = function(e7) {
              return n5.BROWSER_ALIASES_MAP[e7];
            }, e6.getBrowserTypeByAlias = function(e7) {
              return n5.BROWSER_MAP[e7] || "";
            }, e6;
          }();
          t5.default = i5, e5.exports = t5.default;
        }, 18: function(e5, t5, r5) {
          "use strict";
          t5.__esModule = true, t5.ENGINE_MAP = t5.OS_MAP = t5.PLATFORMS_MAP = t5.BROWSER_MAP = t5.BROWSER_ALIASES_MAP = void 0;
          t5.BROWSER_ALIASES_MAP = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" };
          t5.BROWSER_MAP = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" };
          t5.PLATFORMS_MAP = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" };
          t5.OS_MAP = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" };
          t5.ENGINE_MAP = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
        }, 90: function(e5, t5, r5) {
          "use strict";
          t5.__esModule = true, t5.default = void 0;
          var n5, i5 = (n5 = r5(91)) && n5.__esModule ? n5 : { default: n5 }, s5 = r5(18);
          function a5(e6, t6) {
            for (var r6 = 0; r6 < t6.length; r6++) {
              var n6 = t6[r6];
              n6.enumerable = n6.enumerable || false, n6.configurable = true, "value" in n6 && (n6.writable = true), Object.defineProperty(e6, n6.key, n6);
            }
          }
          var o5 = function() {
            function e6() {
            }
            var t6, r6, n6;
            return e6.getParser = function(e7, t7) {
              if (void 0 === t7 && (t7 = false), "string" != typeof e7)
                throw new Error("UserAgent should be a string");
              return new i5.default(e7, t7);
            }, e6.parse = function(e7) {
              return new i5.default(e7).getResult();
            }, t6 = e6, n6 = [{ key: "BROWSER_MAP", get: function() {
              return s5.BROWSER_MAP;
            } }, { key: "ENGINE_MAP", get: function() {
              return s5.ENGINE_MAP;
            } }, { key: "OS_MAP", get: function() {
              return s5.OS_MAP;
            } }, { key: "PLATFORMS_MAP", get: function() {
              return s5.PLATFORMS_MAP;
            } }], (r6 = null) && a5(t6.prototype, r6), n6 && a5(t6, n6), e6;
          }();
          t5.default = o5, e5.exports = t5.default;
        }, 91: function(e5, t5, r5) {
          "use strict";
          t5.__esModule = true, t5.default = void 0;
          var n5 = u5(r5(92)), i5 = u5(r5(93)), s5 = u5(r5(94)), a5 = u5(r5(95)), o5 = u5(r5(17));
          function u5(e6) {
            return e6 && e6.__esModule ? e6 : { default: e6 };
          }
          var d5 = function() {
            function e6(e7, t7) {
              if (void 0 === t7 && (t7 = false), null == e7 || "" === e7)
                throw new Error("UserAgent parameter can't be empty");
              this._ua = e7, this.parsedResult = {}, true !== t7 && this.parse();
            }
            var t6 = e6.prototype;
            return t6.getUA = function() {
              return this._ua;
            }, t6.test = function(e7) {
              return e7.test(this._ua);
            }, t6.parseBrowser = function() {
              var e7 = this;
              this.parsedResult.browser = {};
              var t7 = o5.default.find(n5.default, function(t8) {
                if ("function" == typeof t8.test)
                  return t8.test(e7);
                if (t8.test instanceof Array)
                  return t8.test.some(function(t9) {
                    return e7.test(t9);
                  });
                throw new Error("Browser's test function is not valid");
              });
              return t7 && (this.parsedResult.browser = t7.describe(this.getUA())), this.parsedResult.browser;
            }, t6.getBrowser = function() {
              return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
            }, t6.getBrowserName = function(e7) {
              return e7 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
            }, t6.getBrowserVersion = function() {
              return this.getBrowser().version;
            }, t6.getOS = function() {
              return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
            }, t6.parseOS = function() {
              var e7 = this;
              this.parsedResult.os = {};
              var t7 = o5.default.find(i5.default, function(t8) {
                if ("function" == typeof t8.test)
                  return t8.test(e7);
                if (t8.test instanceof Array)
                  return t8.test.some(function(t9) {
                    return e7.test(t9);
                  });
                throw new Error("Browser's test function is not valid");
              });
              return t7 && (this.parsedResult.os = t7.describe(this.getUA())), this.parsedResult.os;
            }, t6.getOSName = function(e7) {
              var t7 = this.getOS().name;
              return e7 ? String(t7).toLowerCase() || "" : t7 || "";
            }, t6.getOSVersion = function() {
              return this.getOS().version;
            }, t6.getPlatform = function() {
              return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
            }, t6.getPlatformType = function(e7) {
              void 0 === e7 && (e7 = false);
              var t7 = this.getPlatform().type;
              return e7 ? String(t7).toLowerCase() || "" : t7 || "";
            }, t6.parsePlatform = function() {
              var e7 = this;
              this.parsedResult.platform = {};
              var t7 = o5.default.find(s5.default, function(t8) {
                if ("function" == typeof t8.test)
                  return t8.test(e7);
                if (t8.test instanceof Array)
                  return t8.test.some(function(t9) {
                    return e7.test(t9);
                  });
                throw new Error("Browser's test function is not valid");
              });
              return t7 && (this.parsedResult.platform = t7.describe(this.getUA())), this.parsedResult.platform;
            }, t6.getEngine = function() {
              return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
            }, t6.getEngineName = function(e7) {
              return e7 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
            }, t6.parseEngine = function() {
              var e7 = this;
              this.parsedResult.engine = {};
              var t7 = o5.default.find(a5.default, function(t8) {
                if ("function" == typeof t8.test)
                  return t8.test(e7);
                if (t8.test instanceof Array)
                  return t8.test.some(function(t9) {
                    return e7.test(t9);
                  });
                throw new Error("Browser's test function is not valid");
              });
              return t7 && (this.parsedResult.engine = t7.describe(this.getUA())), this.parsedResult.engine;
            }, t6.parse = function() {
              return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
            }, t6.getResult = function() {
              return o5.default.assign({}, this.parsedResult);
            }, t6.satisfies = function(e7) {
              var t7 = this, r6 = {}, n6 = 0, i6 = {}, s6 = 0;
              if (Object.keys(e7).forEach(function(t8) {
                var a7 = e7[t8];
                "string" == typeof a7 ? (i6[t8] = a7, s6 += 1) : "object" == typeof a7 && (r6[t8] = a7, n6 += 1);
              }), n6 > 0) {
                var a6 = Object.keys(r6), u6 = o5.default.find(a6, function(e8) {
                  return t7.isOS(e8);
                });
                if (u6) {
                  var d6 = this.satisfies(r6[u6]);
                  if (void 0 !== d6)
                    return d6;
                }
                var c5 = o5.default.find(a6, function(e8) {
                  return t7.isPlatform(e8);
                });
                if (c5) {
                  var f5 = this.satisfies(r6[c5]);
                  if (void 0 !== f5)
                    return f5;
                }
              }
              if (s6 > 0) {
                var l5 = Object.keys(i6), h5 = o5.default.find(l5, function(e8) {
                  return t7.isBrowser(e8, true);
                });
                if (void 0 !== h5)
                  return this.compareVersion(i6[h5]);
              }
            }, t6.isBrowser = function(e7, t7) {
              void 0 === t7 && (t7 = false);
              var r6 = this.getBrowserName().toLowerCase(), n6 = e7.toLowerCase(), i6 = o5.default.getBrowserTypeByAlias(n6);
              return t7 && i6 && (n6 = i6.toLowerCase()), n6 === r6;
            }, t6.compareVersion = function(e7) {
              var t7 = [0], r6 = e7, n6 = false, i6 = this.getBrowserVersion();
              if ("string" == typeof i6)
                return ">" === e7[0] || "<" === e7[0] ? (r6 = e7.substr(1), "=" === e7[1] ? (n6 = true, r6 = e7.substr(2)) : t7 = [], ">" === e7[0] ? t7.push(1) : t7.push(-1)) : "=" === e7[0] ? r6 = e7.substr(1) : "~" === e7[0] && (n6 = true, r6 = e7.substr(1)), t7.indexOf(o5.default.compareVersions(i6, r6, n6)) > -1;
            }, t6.isOS = function(e7) {
              return this.getOSName(true) === String(e7).toLowerCase();
            }, t6.isPlatform = function(e7) {
              return this.getPlatformType(true) === String(e7).toLowerCase();
            }, t6.isEngine = function(e7) {
              return this.getEngineName(true) === String(e7).toLowerCase();
            }, t6.is = function(e7, t7) {
              return void 0 === t7 && (t7 = false), this.isBrowser(e7, t7) || this.isOS(e7) || this.isPlatform(e7);
            }, t6.some = function(e7) {
              var t7 = this;
              return void 0 === e7 && (e7 = []), e7.some(function(e8) {
                return t7.is(e8);
              });
            }, e6;
          }();
          t5.default = d5, e5.exports = t5.default;
        }, 92: function(e5, t5, r5) {
          "use strict";
          t5.__esModule = true, t5.default = void 0;
          var n5, i5 = (n5 = r5(17)) && n5.__esModule ? n5 : { default: n5 };
          var s5 = /version\/(\d+(\.?_?\d+)+)/i, a5 = [{ test: [/googlebot/i], describe: function(e6) {
            var t6 = { name: "Googlebot" }, r6 = i5.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e6) || i5.default.getFirstMatch(s5, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/opera/i], describe: function(e6) {
            var t6 = { name: "Opera" }, r6 = i5.default.getFirstMatch(s5, e6) || i5.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/opr\/|opios/i], describe: function(e6) {
            var t6 = { name: "Opera" }, r6 = i5.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e6) || i5.default.getFirstMatch(s5, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/SamsungBrowser/i], describe: function(e6) {
            var t6 = { name: "Samsung Internet for Android" }, r6 = i5.default.getFirstMatch(s5, e6) || i5.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/Whale/i], describe: function(e6) {
            var t6 = { name: "NAVER Whale Browser" }, r6 = i5.default.getFirstMatch(s5, e6) || i5.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/MZBrowser/i], describe: function(e6) {
            var t6 = { name: "MZ Browser" }, r6 = i5.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e6) || i5.default.getFirstMatch(s5, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/focus/i], describe: function(e6) {
            var t6 = { name: "Focus" }, r6 = i5.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e6) || i5.default.getFirstMatch(s5, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/swing/i], describe: function(e6) {
            var t6 = { name: "Swing" }, r6 = i5.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e6) || i5.default.getFirstMatch(s5, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/coast/i], describe: function(e6) {
            var t6 = { name: "Opera Coast" }, r6 = i5.default.getFirstMatch(s5, e6) || i5.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe: function(e6) {
            var t6 = { name: "Opera Touch" }, r6 = i5.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e6) || i5.default.getFirstMatch(s5, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/yabrowser/i], describe: function(e6) {
            var t6 = { name: "Yandex Browser" }, r6 = i5.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e6) || i5.default.getFirstMatch(s5, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/ucbrowser/i], describe: function(e6) {
            var t6 = { name: "UC Browser" }, r6 = i5.default.getFirstMatch(s5, e6) || i5.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/Maxthon|mxios/i], describe: function(e6) {
            var t6 = { name: "Maxthon" }, r6 = i5.default.getFirstMatch(s5, e6) || i5.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/epiphany/i], describe: function(e6) {
            var t6 = { name: "Epiphany" }, r6 = i5.default.getFirstMatch(s5, e6) || i5.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/puffin/i], describe: function(e6) {
            var t6 = { name: "Puffin" }, r6 = i5.default.getFirstMatch(s5, e6) || i5.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/sleipnir/i], describe: function(e6) {
            var t6 = { name: "Sleipnir" }, r6 = i5.default.getFirstMatch(s5, e6) || i5.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/k-meleon/i], describe: function(e6) {
            var t6 = { name: "K-Meleon" }, r6 = i5.default.getFirstMatch(s5, e6) || i5.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/micromessenger/i], describe: function(e6) {
            var t6 = { name: "WeChat" }, r6 = i5.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e6) || i5.default.getFirstMatch(s5, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/qqbrowser/i], describe: function(e6) {
            var t6 = { name: /qqbrowserlite/i.test(e6) ? "QQ Browser Lite" : "QQ Browser" }, r6 = i5.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e6) || i5.default.getFirstMatch(s5, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/msie|trident/i], describe: function(e6) {
            var t6 = { name: "Internet Explorer" }, r6 = i5.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/\sedg\//i], describe: function(e6) {
            var t6 = { name: "Microsoft Edge" }, r6 = i5.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/edg([ea]|ios)/i], describe: function(e6) {
            var t6 = { name: "Microsoft Edge" }, r6 = i5.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/vivaldi/i], describe: function(e6) {
            var t6 = { name: "Vivaldi" }, r6 = i5.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/seamonkey/i], describe: function(e6) {
            var t6 = { name: "SeaMonkey" }, r6 = i5.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/sailfish/i], describe: function(e6) {
            var t6 = { name: "Sailfish" }, r6 = i5.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/silk/i], describe: function(e6) {
            var t6 = { name: "Amazon Silk" }, r6 = i5.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/phantom/i], describe: function(e6) {
            var t6 = { name: "PhantomJS" }, r6 = i5.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/slimerjs/i], describe: function(e6) {
            var t6 = { name: "SlimerJS" }, r6 = i5.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e6) {
            var t6 = { name: "BlackBerry" }, r6 = i5.default.getFirstMatch(s5, e6) || i5.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/(web|hpw)[o0]s/i], describe: function(e6) {
            var t6 = { name: "WebOS Browser" }, r6 = i5.default.getFirstMatch(s5, e6) || i5.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/bada/i], describe: function(e6) {
            var t6 = { name: "Bada" }, r6 = i5.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/tizen/i], describe: function(e6) {
            var t6 = { name: "Tizen" }, r6 = i5.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e6) || i5.default.getFirstMatch(s5, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/qupzilla/i], describe: function(e6) {
            var t6 = { name: "QupZilla" }, r6 = i5.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e6) || i5.default.getFirstMatch(s5, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/firefox|iceweasel|fxios/i], describe: function(e6) {
            var t6 = { name: "Firefox" }, r6 = i5.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/electron/i], describe: function(e6) {
            var t6 = { name: "Electron" }, r6 = i5.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/MiuiBrowser/i], describe: function(e6) {
            var t6 = { name: "Miui" }, r6 = i5.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/chromium/i], describe: function(e6) {
            var t6 = { name: "Chromium" }, r6 = i5.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e6) || i5.default.getFirstMatch(s5, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/chrome|crios|crmo/i], describe: function(e6) {
            var t6 = { name: "Chrome" }, r6 = i5.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/GSA/i], describe: function(e6) {
            var t6 = { name: "Google Search" }, r6 = i5.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: function(e6) {
            var t6 = !e6.test(/like android/i), r6 = e6.test(/android/i);
            return t6 && r6;
          }, describe: function(e6) {
            var t6 = { name: "Android Browser" }, r6 = i5.default.getFirstMatch(s5, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/playstation 4/i], describe: function(e6) {
            var t6 = { name: "PlayStation 4" }, r6 = i5.default.getFirstMatch(s5, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/safari|applewebkit/i], describe: function(e6) {
            var t6 = { name: "Safari" }, r6 = i5.default.getFirstMatch(s5, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/.*/i], describe: function(e6) {
            var t6 = -1 !== e6.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
            return { name: i5.default.getFirstMatch(t6, e6), version: i5.default.getSecondMatch(t6, e6) };
          } }];
          t5.default = a5, e5.exports = t5.default;
        }, 93: function(e5, t5, r5) {
          "use strict";
          t5.__esModule = true, t5.default = void 0;
          var n5, i5 = (n5 = r5(17)) && n5.__esModule ? n5 : { default: n5 }, s5 = r5(18);
          var a5 = [{ test: [/Roku\/DVP/], describe: function(e6) {
            var t6 = i5.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e6);
            return { name: s5.OS_MAP.Roku, version: t6 };
          } }, { test: [/windows phone/i], describe: function(e6) {
            var t6 = i5.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e6);
            return { name: s5.OS_MAP.WindowsPhone, version: t6 };
          } }, { test: [/windows /i], describe: function(e6) {
            var t6 = i5.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e6), r6 = i5.default.getWindowsVersionName(t6);
            return { name: s5.OS_MAP.Windows, version: t6, versionName: r6 };
          } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function(e6) {
            var t6 = { name: s5.OS_MAP.iOS }, r6 = i5.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/macintosh/i], describe: function(e6) {
            var t6 = i5.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e6).replace(/[_\s]/g, "."), r6 = i5.default.getMacOSVersionName(t6), n6 = { name: s5.OS_MAP.MacOS, version: t6 };
            return r6 && (n6.versionName = r6), n6;
          } }, { test: [/(ipod|iphone|ipad)/i], describe: function(e6) {
            var t6 = i5.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e6).replace(/[_\s]/g, ".");
            return { name: s5.OS_MAP.iOS, version: t6 };
          } }, { test: function(e6) {
            var t6 = !e6.test(/like android/i), r6 = e6.test(/android/i);
            return t6 && r6;
          }, describe: function(e6) {
            var t6 = i5.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e6), r6 = i5.default.getAndroidVersionName(t6), n6 = { name: s5.OS_MAP.Android, version: t6 };
            return r6 && (n6.versionName = r6), n6;
          } }, { test: [/(web|hpw)[o0]s/i], describe: function(e6) {
            var t6 = i5.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e6), r6 = { name: s5.OS_MAP.WebOS };
            return t6 && t6.length && (r6.version = t6), r6;
          } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e6) {
            var t6 = i5.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e6) || i5.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e6) || i5.default.getFirstMatch(/\bbb(\d+)/i, e6);
            return { name: s5.OS_MAP.BlackBerry, version: t6 };
          } }, { test: [/bada/i], describe: function(e6) {
            var t6 = i5.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e6);
            return { name: s5.OS_MAP.Bada, version: t6 };
          } }, { test: [/tizen/i], describe: function(e6) {
            var t6 = i5.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e6);
            return { name: s5.OS_MAP.Tizen, version: t6 };
          } }, { test: [/linux/i], describe: function() {
            return { name: s5.OS_MAP.Linux };
          } }, { test: [/CrOS/], describe: function() {
            return { name: s5.OS_MAP.ChromeOS };
          } }, { test: [/PlayStation 4/], describe: function(e6) {
            var t6 = i5.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e6);
            return { name: s5.OS_MAP.PlayStation4, version: t6 };
          } }];
          t5.default = a5, e5.exports = t5.default;
        }, 94: function(e5, t5, r5) {
          "use strict";
          t5.__esModule = true, t5.default = void 0;
          var n5, i5 = (n5 = r5(17)) && n5.__esModule ? n5 : { default: n5 }, s5 = r5(18);
          var a5 = [{ test: [/googlebot/i], describe: function() {
            return { type: "bot", vendor: "Google" };
          } }, { test: [/huawei/i], describe: function(e6) {
            var t6 = i5.default.getFirstMatch(/(can-l01)/i, e6) && "Nova", r6 = { type: s5.PLATFORMS_MAP.mobile, vendor: "Huawei" };
            return t6 && (r6.model = t6), r6;
          } }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: function() {
            return { type: s5.PLATFORMS_MAP.tablet, vendor: "Nexus" };
          } }, { test: [/ipad/i], describe: function() {
            return { type: s5.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
          } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function() {
            return { type: s5.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
          } }, { test: [/kftt build/i], describe: function() {
            return { type: s5.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
          } }, { test: [/silk/i], describe: function() {
            return { type: s5.PLATFORMS_MAP.tablet, vendor: "Amazon" };
          } }, { test: [/tablet(?! pc)/i], describe: function() {
            return { type: s5.PLATFORMS_MAP.tablet };
          } }, { test: function(e6) {
            var t6 = e6.test(/ipod|iphone/i), r6 = e6.test(/like (ipod|iphone)/i);
            return t6 && !r6;
          }, describe: function(e6) {
            var t6 = i5.default.getFirstMatch(/(ipod|iphone)/i, e6);
            return { type: s5.PLATFORMS_MAP.mobile, vendor: "Apple", model: t6 };
          } }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: function() {
            return { type: s5.PLATFORMS_MAP.mobile, vendor: "Nexus" };
          } }, { test: [/[^-]mobi/i], describe: function() {
            return { type: s5.PLATFORMS_MAP.mobile };
          } }, { test: function(e6) {
            return "blackberry" === e6.getBrowserName(true);
          }, describe: function() {
            return { type: s5.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
          } }, { test: function(e6) {
            return "bada" === e6.getBrowserName(true);
          }, describe: function() {
            return { type: s5.PLATFORMS_MAP.mobile };
          } }, { test: function(e6) {
            return "windows phone" === e6.getBrowserName();
          }, describe: function() {
            return { type: s5.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
          } }, { test: function(e6) {
            var t6 = Number(String(e6.getOSVersion()).split(".")[0]);
            return "android" === e6.getOSName(true) && t6 >= 3;
          }, describe: function() {
            return { type: s5.PLATFORMS_MAP.tablet };
          } }, { test: function(e6) {
            return "android" === e6.getOSName(true);
          }, describe: function() {
            return { type: s5.PLATFORMS_MAP.mobile };
          } }, { test: function(e6) {
            return "macos" === e6.getOSName(true);
          }, describe: function() {
            return { type: s5.PLATFORMS_MAP.desktop, vendor: "Apple" };
          } }, { test: function(e6) {
            return "windows" === e6.getOSName(true);
          }, describe: function() {
            return { type: s5.PLATFORMS_MAP.desktop };
          } }, { test: function(e6) {
            return "linux" === e6.getOSName(true);
          }, describe: function() {
            return { type: s5.PLATFORMS_MAP.desktop };
          } }, { test: function(e6) {
            return "playstation 4" === e6.getOSName(true);
          }, describe: function() {
            return { type: s5.PLATFORMS_MAP.tv };
          } }, { test: function(e6) {
            return "roku" === e6.getOSName(true);
          }, describe: function() {
            return { type: s5.PLATFORMS_MAP.tv };
          } }];
          t5.default = a5, e5.exports = t5.default;
        }, 95: function(e5, t5, r5) {
          "use strict";
          t5.__esModule = true, t5.default = void 0;
          var n5, i5 = (n5 = r5(17)) && n5.__esModule ? n5 : { default: n5 }, s5 = r5(18);
          var a5 = [{ test: function(e6) {
            return "microsoft edge" === e6.getBrowserName(true);
          }, describe: function(e6) {
            if (/\sedg\//i.test(e6))
              return { name: s5.ENGINE_MAP.Blink };
            var t6 = i5.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e6);
            return { name: s5.ENGINE_MAP.EdgeHTML, version: t6 };
          } }, { test: [/trident/i], describe: function(e6) {
            var t6 = { name: s5.ENGINE_MAP.Trident }, r6 = i5.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: function(e6) {
            return e6.test(/presto/i);
          }, describe: function(e6) {
            var t6 = { name: s5.ENGINE_MAP.Presto }, r6 = i5.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: function(e6) {
            var t6 = e6.test(/gecko/i), r6 = e6.test(/like gecko/i);
            return t6 && !r6;
          }, describe: function(e6) {
            var t6 = { name: s5.ENGINE_MAP.Gecko }, r6 = i5.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }, { test: [/(apple)?webkit\/537\.36/i], describe: function() {
            return { name: s5.ENGINE_MAP.Blink };
          } }, { test: [/(apple)?webkit/i], describe: function(e6) {
            var t6 = { name: s5.ENGINE_MAP.WebKit }, r6 = i5.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e6);
            return r6 && (t6.version = r6), t6;
          } }];
          t5.default = a5, e5.exports = t5.default;
        } });
      });
    }
  });

  // node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js
  var import_bowser, defaultUserAgent;
  var init_dist_es34 = __esm({
    "node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js"() {
      import_bowser = __toESM(require_es5());
      defaultUserAgent = ({ serviceId, clientVersion }) => async () => {
        const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent ? import_bowser.default.parse(window.navigator.userAgent) : void 0;
        const sections = [
          ["aws-sdk-js", clientVersion],
          ["ua", "2.0"],
          [`os/${parsedUA?.os?.name || "other"}`, parsedUA?.os?.version],
          ["lang/js"],
          ["md/browser", `${parsedUA?.browser?.name ?? "unknown"}_${parsedUA?.browser?.version ?? "unknown"}`]
        ];
        if (serviceId) {
          sections.push([`api/${serviceId}`, clientVersion]);
        }
        return sections;
      };
    }
  });

  // node_modules/@smithy/invalid-dependency/dist-es/invalidFunction.js
  var init_invalidFunction = __esm({
    "node_modules/@smithy/invalid-dependency/dist-es/invalidFunction.js"() {
    }
  });

  // node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js
  var invalidProvider;
  var init_invalidProvider = __esm({
    "node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js"() {
      invalidProvider = (message) => () => Promise.reject(message);
    }
  });

  // node_modules/@smithy/invalid-dependency/dist-es/index.js
  var init_dist_es35 = __esm({
    "node_modules/@smithy/invalid-dependency/dist-es/index.js"() {
      init_invalidFunction();
      init_invalidProvider();
    }
  });

  // node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js
  var TEXT_ENCODER, calculateBodyLength;
  var init_calculateBodyLength = __esm({
    "node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js"() {
      TEXT_ENCODER = typeof TextEncoder == "function" ? new TextEncoder() : null;
      calculateBodyLength = (body) => {
        if (typeof body === "string") {
          if (TEXT_ENCODER) {
            return TEXT_ENCODER.encode(body).byteLength;
          }
          let len = body.length;
          for (let i5 = len - 1; i5 >= 0; i5--) {
            const code = body.charCodeAt(i5);
            if (code > 127 && code <= 2047)
              len++;
            else if (code > 2047 && code <= 65535)
              len += 2;
            if (code >= 56320 && code <= 57343)
              i5--;
          }
          return len;
        } else if (typeof body.byteLength === "number") {
          return body.byteLength;
        } else if (typeof body.size === "number") {
          return body.size;
        }
        throw new Error(`Body Length computation failed for ${body}`);
      };
    }
  });

  // node_modules/@smithy/util-body-length-browser/dist-es/index.js
  var init_dist_es36 = __esm({
    "node_modules/@smithy/util-body-length-browser/dist-es/index.js"() {
      init_calculateBodyLength();
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/ruleset.js
  var s3, t3, u3, v3, a3, b2, c3, d3, e3, f3, g3, h3, i3, j3, k3, l3, m3, n3, o3, p3, q, r3, _data, ruleSet;
  var init_ruleset = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/ruleset.js"() {
      s3 = "required";
      t3 = "fn";
      u3 = "argv";
      v3 = "ref";
      a3 = true;
      b2 = "isSet";
      c3 = "booleanEquals";
      d3 = "error";
      e3 = "endpoint";
      f3 = "tree";
      g3 = "PartitionResult";
      h3 = { [s3]: false, "type": "String" };
      i3 = { [s3]: true, "default": false, "type": "Boolean" };
      j3 = { [v3]: "Endpoint" };
      k3 = { [t3]: c3, [u3]: [{ [v3]: "UseFIPS" }, true] };
      l3 = { [t3]: c3, [u3]: [{ [v3]: "UseDualStack" }, true] };
      m3 = {};
      n3 = { [t3]: "getAttr", [u3]: [{ [v3]: g3 }, "supportsFIPS"] };
      o3 = { [t3]: c3, [u3]: [true, { [t3]: "getAttr", [u3]: [{ [v3]: g3 }, "supportsDualStack"] }] };
      p3 = [k3];
      q = [l3];
      r3 = [{ [v3]: "Region" }];
      _data = { version: "1.0", parameters: { Region: h3, UseDualStack: i3, UseFIPS: i3, Endpoint: h3 }, rules: [{ conditions: [{ [t3]: b2, [u3]: [j3] }], rules: [{ conditions: p3, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d3 }, { conditions: q, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d3 }, { endpoint: { url: j3, properties: m3, headers: m3 }, type: e3 }], type: f3 }, { conditions: [{ [t3]: b2, [u3]: r3 }], rules: [{ conditions: [{ [t3]: "aws.partition", [u3]: r3, assign: g3 }], rules: [{ conditions: [k3, l3], rules: [{ conditions: [{ [t3]: c3, [u3]: [a3, n3] }, o3], rules: [{ endpoint: { url: "https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: m3, headers: m3 }, type: e3 }], type: f3 }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d3 }], type: f3 }, { conditions: p3, rules: [{ conditions: [{ [t3]: c3, [u3]: [n3, a3] }], rules: [{ endpoint: { url: "https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}", properties: m3, headers: m3 }, type: e3 }], type: f3 }, { error: "FIPS is enabled but this partition does not support FIPS", type: d3 }], type: f3 }, { conditions: q, rules: [{ conditions: [o3], rules: [{ endpoint: { url: "https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: m3, headers: m3 }, type: e3 }], type: f3 }, { error: "DualStack is enabled but this partition does not support DualStack", type: d3 }], type: f3 }, { endpoint: { url: "https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}", properties: m3, headers: m3 }, type: e3 }], type: f3 }], type: f3 }, { error: "Invalid Configuration: Missing Region", type: d3 }] };
      ruleSet = _data;
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/endpointResolver.js
  var defaultEndpointResolver;
  var init_endpointResolver = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/endpointResolver.js"() {
      init_dist_es6();
      init_ruleset();
      defaultEndpointResolver = (endpointParams, context = {}) => {
        return resolveEndpoint(ruleSet, {
          endpointParams,
          logger: context.logger
        });
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.shared.js
  var getRuntimeConfig;
  var init_runtimeConfig_shared = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.shared.js"() {
      init_dist_es33();
      init_dist_es28();
      init_dist_es26();
      init_dist_es13();
      init_dist_es20();
      init_dist_es19();
      init_httpAuthSchemeProvider();
      init_endpointResolver();
      getRuntimeConfig = (config) => {
        return {
          apiVersion: "2014-06-30",
          base64Decoder: config?.base64Decoder ?? fromBase64,
          base64Encoder: config?.base64Encoder ?? toBase64,
          disableHostPrefix: config?.disableHostPrefix ?? false,
          endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
          extensions: config?.extensions ?? [],
          httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultCognitoIdentityHttpAuthSchemeProvider,
          httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
              schemeId: "aws.auth#sigv4",
              identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
              signer: new AwsSdkSigV4Signer()
            },
            {
              schemeId: "smithy.api#noAuth",
              identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
              signer: new NoAuthSigner()
            }
          ],
          logger: config?.logger ?? new NoOpLogger(),
          serviceId: config?.serviceId ?? "Cognito Identity",
          urlParser: config?.urlParser ?? parseUrl,
          utf8Decoder: config?.utf8Decoder ?? fromUtf8,
          utf8Encoder: config?.utf8Encoder ?? toUtf8
        };
      };
    }
  });

  // node_modules/@smithy/property-provider/dist-es/ProviderError.js
  var ProviderError;
  var init_ProviderError = __esm({
    "node_modules/@smithy/property-provider/dist-es/ProviderError.js"() {
      ProviderError = class _ProviderError extends Error {
        constructor(message, tryNextLink = true) {
          super(message);
          this.tryNextLink = tryNextLink;
          this.name = "ProviderError";
          Object.setPrototypeOf(this, _ProviderError.prototype);
        }
        static from(error, tryNextLink = true) {
          return Object.assign(new this(error.message, tryNextLink), error);
        }
      };
    }
  });

  // node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js
  var CredentialsProviderError;
  var init_CredentialsProviderError = __esm({
    "node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js"() {
      init_ProviderError();
      CredentialsProviderError = class _CredentialsProviderError extends ProviderError {
        constructor(message, tryNextLink = true) {
          super(message, tryNextLink);
          this.tryNextLink = tryNextLink;
          this.name = "CredentialsProviderError";
          Object.setPrototypeOf(this, _CredentialsProviderError.prototype);
        }
      };
    }
  });

  // node_modules/@smithy/property-provider/dist-es/TokenProviderError.js
  var init_TokenProviderError = __esm({
    "node_modules/@smithy/property-provider/dist-es/TokenProviderError.js"() {
      init_ProviderError();
    }
  });

  // node_modules/@smithy/property-provider/dist-es/chain.js
  var init_chain = __esm({
    "node_modules/@smithy/property-provider/dist-es/chain.js"() {
      init_ProviderError();
    }
  });

  // node_modules/@smithy/property-provider/dist-es/fromStatic.js
  var init_fromStatic = __esm({
    "node_modules/@smithy/property-provider/dist-es/fromStatic.js"() {
    }
  });

  // node_modules/@smithy/property-provider/dist-es/memoize.js
  var memoize;
  var init_memoize = __esm({
    "node_modules/@smithy/property-provider/dist-es/memoize.js"() {
      memoize = (provider, isExpired, requiresRefresh) => {
        let resolved;
        let pending;
        let hasResult;
        let isConstant = false;
        const coalesceProvider = async () => {
          if (!pending) {
            pending = provider();
          }
          try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
          } finally {
            pending = void 0;
          }
          return resolved;
        };
        if (isExpired === void 0) {
          return async (options) => {
            if (!hasResult || options?.forceRefresh) {
              resolved = await coalesceProvider();
            }
            return resolved;
          };
        }
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
          }
          if (isConstant) {
            return resolved;
          }
          if (requiresRefresh && !requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
          }
          if (isExpired(resolved)) {
            await coalesceProvider();
            return resolved;
          }
          return resolved;
        };
      };
    }
  });

  // node_modules/@smithy/property-provider/dist-es/index.js
  var init_dist_es37 = __esm({
    "node_modules/@smithy/property-provider/dist-es/index.js"() {
      init_CredentialsProviderError();
      init_ProviderError();
      init_TokenProviderError();
      init_chain();
      init_fromStatic();
      init_memoize();
    }
  });

  // node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js
  var DEFAULTS_MODE_OPTIONS;
  var init_constants6 = __esm({
    "node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js"() {
      DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
    }
  });

  // node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js
  var import_bowser2, resolveDefaultsModeConfig, isMobileBrowser;
  var init_resolveDefaultsModeConfig = __esm({
    "node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js"() {
      init_dist_es37();
      import_bowser2 = __toESM(require_es5());
      init_constants6();
      resolveDefaultsModeConfig = ({ defaultsMode } = {}) => memoize(async () => {
        const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
        switch (mode?.toLowerCase()) {
          case "auto":
            return Promise.resolve(isMobileBrowser() ? "mobile" : "standard");
          case "mobile":
          case "in-region":
          case "cross-region":
          case "standard":
          case "legacy":
            return Promise.resolve(mode?.toLocaleLowerCase());
          case void 0:
            return Promise.resolve("legacy");
          default:
            throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
        }
      });
      isMobileBrowser = () => {
        const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent ? import_bowser2.default.parse(window.navigator.userAgent) : void 0;
        const platform = parsedUA?.platform?.type;
        return platform === "tablet" || platform === "mobile";
      };
    }
  });

  // node_modules/@smithy/util-defaults-mode-browser/dist-es/index.js
  var init_dist_es38 = __esm({
    "node_modules/@smithy/util-defaults-mode-browser/dist-es/index.js"() {
      init_resolveDefaultsModeConfig();
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.browser.js
  var import_sha256_browser, getRuntimeConfig2;
  var init_runtimeConfig_browser = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.browser.js"() {
      init_package();
      import_sha256_browser = __toESM(require_build6());
      init_dist_es34();
      init_dist_es11();
      init_dist_es23();
      init_dist_es35();
      init_dist_es36();
      init_dist_es17();
      init_runtimeConfig_shared();
      init_dist_es26();
      init_dist_es38();
      getRuntimeConfig2 = (config) => {
        const defaultsMode = resolveDefaultsModeConfig(config);
        const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
        const clientSharedValues = getRuntimeConfig(config);
        return {
          ...clientSharedValues,
          ...config,
          runtime: "browser",
          defaultsMode,
          bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
          credentialDefaultProvider: config?.credentialDefaultProvider ?? ((_3) => () => Promise.reject(new Error("Credential is missing"))),
          defaultUserAgentProvider: config?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
          maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
          region: config?.region ?? invalidProvider("Region is missing"),
          requestHandler: FetchHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
          retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
          sha256: config?.sha256 ?? import_sha256_browser.Sha256,
          streamCollector: config?.streamCollector ?? streamCollector,
          useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
          useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))
        };
      };
    }
  });

  // node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js
  var getAwsRegionExtensionConfiguration, resolveAwsRegionExtensionConfiguration;
  var init_extensions4 = __esm({
    "node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js"() {
      getAwsRegionExtensionConfiguration = (runtimeConfig) => {
        let runtimeConfigRegion = async () => {
          if (runtimeConfig.region === void 0) {
            throw new Error("Region is missing from runtimeConfig");
          }
          const region = runtimeConfig.region;
          if (typeof region === "string") {
            return region;
          }
          return region();
        };
        return {
          setRegion(region) {
            runtimeConfigRegion = region;
          },
          region() {
            return runtimeConfigRegion;
          }
        };
      };
      resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
        return {
          region: awsRegionExtensionConfiguration.region()
        };
      };
    }
  });

  // node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js
  var init_config4 = __esm({
    "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js"() {
    }
  });

  // node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js
  var init_isFipsRegion2 = __esm({
    "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js"() {
    }
  });

  // node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js
  var init_getRealRegion2 = __esm({
    "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js"() {
      init_isFipsRegion2();
    }
  });

  // node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js
  var init_resolveRegionConfig2 = __esm({
    "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js"() {
      init_getRealRegion2();
      init_isFipsRegion2();
    }
  });

  // node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js
  var init_regionConfig2 = __esm({
    "node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js"() {
      init_config4();
      init_resolveRegionConfig2();
    }
  });

  // node_modules/@aws-sdk/region-config-resolver/dist-es/index.js
  var init_dist_es39 = __esm({
    "node_modules/@aws-sdk/region-config-resolver/dist-es/index.js"() {
      init_extensions4();
      init_regionConfig2();
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/auth/httpAuthExtensionConfiguration.js
  var getHttpAuthExtensionConfiguration, resolveHttpAuthRuntimeConfig;
  var init_httpAuthExtensionConfiguration = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/auth/httpAuthExtensionConfiguration.js"() {
      getHttpAuthExtensionConfiguration = (runtimeConfig) => {
        const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
        let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
        let _credentials = runtimeConfig.credentials;
        return {
          setHttpAuthScheme(httpAuthScheme) {
            const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
            if (index === -1) {
              _httpAuthSchemes.push(httpAuthScheme);
            } else {
              _httpAuthSchemes.splice(index, 1, httpAuthScheme);
            }
          },
          httpAuthSchemes() {
            return _httpAuthSchemes;
          },
          setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
            _httpAuthSchemeProvider = httpAuthSchemeProvider;
          },
          httpAuthSchemeProvider() {
            return _httpAuthSchemeProvider;
          },
          setCredentials(credentials) {
            _credentials = credentials;
          },
          credentials() {
            return _credentials;
          }
        };
      };
      resolveHttpAuthRuntimeConfig = (config) => {
        return {
          httpAuthSchemes: config.httpAuthSchemes(),
          httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
          credentials: config.credentials()
        };
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeExtensions.js
  var asPartial, resolveRuntimeExtensions;
  var init_runtimeExtensions = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeExtensions.js"() {
      init_dist_es39();
      init_dist_es2();
      init_dist_es26();
      init_httpAuthExtensionConfiguration();
      asPartial = (t5) => t5;
      resolveRuntimeExtensions = (runtimeConfig, extensions) => {
        const extensionConfiguration = {
          ...asPartial(getAwsRegionExtensionConfiguration(runtimeConfig)),
          ...asPartial(getDefaultExtensionConfiguration(runtimeConfig)),
          ...asPartial(getHttpHandlerExtensionConfiguration(runtimeConfig)),
          ...asPartial(getHttpAuthExtensionConfiguration(runtimeConfig))
        };
        extensions.forEach((extension) => extension.configure(extensionConfiguration));
        return {
          ...runtimeConfig,
          ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
          ...resolveDefaultRuntimeConfig(extensionConfiguration),
          ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
          ...resolveHttpAuthRuntimeConfig(extensionConfiguration)
        };
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/CognitoIdentityClient.js
  var CognitoIdentityClient;
  var init_CognitoIdentityClient = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/CognitoIdentityClient.js"() {
      init_dist_es3();
      init_dist_es4();
      init_dist_es5();
      init_dist_es8();
      init_dist_es11();
      init_dist_es28();
      init_dist_es29();
      init_dist_es15();
      init_dist_es27();
      init_dist_es26();
      init_httpAuthSchemeProvider();
      init_EndpointParameters();
      init_runtimeConfig_browser();
      init_runtimeExtensions();
      CognitoIdentityClient = class extends Client {
        constructor(...[configuration]) {
          const _config_0 = getRuntimeConfig2(configuration || {});
          const _config_1 = resolveClientEndpointParameters(_config_0);
          const _config_2 = resolveRegionConfig(_config_1);
          const _config_3 = resolveEndpointConfig(_config_2);
          const _config_4 = resolveRetryConfig(_config_3);
          const _config_5 = resolveHostHeaderConfig(_config_4);
          const _config_6 = resolveUserAgentConfig(_config_5);
          const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
          const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
          super(_config_8);
          this.config = _config_8;
          this.middlewareStack.use(getRetryPlugin(this.config));
          this.middlewareStack.use(getContentLengthPlugin(this.config));
          this.middlewareStack.use(getHostHeaderPlugin(this.config));
          this.middlewareStack.use(getLoggerPlugin(this.config));
          this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
          this.middlewareStack.use(getUserAgentPlugin(this.config));
          this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
            identityProviderConfigProvider: this.getIdentityProviderConfigProvider()
          }));
          this.middlewareStack.use(getHttpSigningPlugin(this.config));
        }
        destroy() {
          super.destroy();
        }
        getDefaultHttpAuthSchemeParametersProvider() {
          return defaultCognitoIdentityHttpAuthSchemeParametersProvider;
        }
        getIdentityProviderConfigProvider() {
          return async (config) => new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials
          });
        }
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/models/CognitoIdentityServiceException.js
  var CognitoIdentityServiceException;
  var init_CognitoIdentityServiceException = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/models/CognitoIdentityServiceException.js"() {
      init_dist_es26();
      CognitoIdentityServiceException = class _CognitoIdentityServiceException extends ServiceException {
        constructor(options) {
          super(options);
          Object.setPrototypeOf(this, _CognitoIdentityServiceException.prototype);
        }
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/models/models_0.js
  var InternalErrorException, InvalidParameterException, LimitExceededException, NotAuthorizedException, ResourceConflictException, TooManyRequestsException, ResourceNotFoundException, ExternalServiceException, InvalidIdentityPoolConfigurationException, DeveloperUserAlreadyRegisteredException, ConcurrentModificationException;
  var init_models_0 = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/models/models_0.js"() {
      init_CognitoIdentityServiceException();
      InternalErrorException = class _InternalErrorException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "InternalErrorException",
            $fault: "server",
            ...opts
          });
          this.name = "InternalErrorException";
          this.$fault = "server";
          Object.setPrototypeOf(this, _InternalErrorException.prototype);
        }
      };
      InvalidParameterException = class _InvalidParameterException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "InvalidParameterException",
            $fault: "client",
            ...opts
          });
          this.name = "InvalidParameterException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _InvalidParameterException.prototype);
        }
      };
      LimitExceededException = class _LimitExceededException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts
          });
          this.name = "LimitExceededException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _LimitExceededException.prototype);
        }
      };
      NotAuthorizedException = class _NotAuthorizedException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "NotAuthorizedException",
            $fault: "client",
            ...opts
          });
          this.name = "NotAuthorizedException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _NotAuthorizedException.prototype);
        }
      };
      ResourceConflictException = class _ResourceConflictException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "ResourceConflictException",
            $fault: "client",
            ...opts
          });
          this.name = "ResourceConflictException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ResourceConflictException.prototype);
        }
      };
      TooManyRequestsException = class _TooManyRequestsException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts
          });
          this.name = "TooManyRequestsException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _TooManyRequestsException.prototype);
        }
      };
      ResourceNotFoundException = class _ResourceNotFoundException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts
          });
          this.name = "ResourceNotFoundException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
        }
      };
      ExternalServiceException = class _ExternalServiceException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "ExternalServiceException",
            $fault: "client",
            ...opts
          });
          this.name = "ExternalServiceException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ExternalServiceException.prototype);
        }
      };
      InvalidIdentityPoolConfigurationException = class _InvalidIdentityPoolConfigurationException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "InvalidIdentityPoolConfigurationException",
            $fault: "client",
            ...opts
          });
          this.name = "InvalidIdentityPoolConfigurationException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _InvalidIdentityPoolConfigurationException.prototype);
        }
      };
      DeveloperUserAlreadyRegisteredException = class _DeveloperUserAlreadyRegisteredException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "DeveloperUserAlreadyRegisteredException",
            $fault: "client",
            ...opts
          });
          this.name = "DeveloperUserAlreadyRegisteredException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _DeveloperUserAlreadyRegisteredException.prototype);
        }
      };
      ConcurrentModificationException = class _ConcurrentModificationException extends CognitoIdentityServiceException {
        constructor(opts) {
          super({
            name: "ConcurrentModificationException",
            $fault: "client",
            ...opts
          });
          this.name = "ConcurrentModificationException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ConcurrentModificationException.prototype);
        }
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/protocols/Aws_json1_1.js
  function sharedHeaders(operation) {
    return {
      "content-type": "application/x-amz-json-1.1",
      "x-amz-target": `AWSCognitoIdentityService.${operation}`
    };
  }
  var se_CreateIdentityPoolCommand, se_DeleteIdentitiesCommand, se_DeleteIdentityPoolCommand, se_DescribeIdentityCommand, se_DescribeIdentityPoolCommand, se_GetCredentialsForIdentityCommand, se_GetIdCommand, se_GetIdentityPoolRolesCommand, se_GetOpenIdTokenCommand, se_GetOpenIdTokenForDeveloperIdentityCommand, se_GetPrincipalTagAttributeMapCommand, se_ListIdentitiesCommand, se_ListIdentityPoolsCommand, se_ListTagsForResourceCommand, se_LookupDeveloperIdentityCommand, se_MergeDeveloperIdentitiesCommand, se_SetIdentityPoolRolesCommand, se_SetPrincipalTagAttributeMapCommand, se_TagResourceCommand, se_UnlinkDeveloperIdentityCommand, se_UnlinkIdentityCommand, se_UntagResourceCommand, se_UpdateIdentityPoolCommand, de_CreateIdentityPoolCommand, de_DeleteIdentitiesCommand, de_DeleteIdentityPoolCommand, de_DescribeIdentityCommand, de_DescribeIdentityPoolCommand, de_GetCredentialsForIdentityCommand, de_GetIdCommand, de_GetIdentityPoolRolesCommand, de_GetOpenIdTokenCommand, de_GetOpenIdTokenForDeveloperIdentityCommand, de_GetPrincipalTagAttributeMapCommand, de_ListIdentitiesCommand, de_ListIdentityPoolsCommand, de_ListTagsForResourceCommand, de_LookupDeveloperIdentityCommand, de_MergeDeveloperIdentitiesCommand, de_SetIdentityPoolRolesCommand, de_SetPrincipalTagAttributeMapCommand, de_TagResourceCommand, de_UnlinkDeveloperIdentityCommand, de_UnlinkIdentityCommand, de_UntagResourceCommand, de_UpdateIdentityPoolCommand, de_CommandError, de_ConcurrentModificationExceptionRes, de_DeveloperUserAlreadyRegisteredExceptionRes, de_ExternalServiceExceptionRes, de_InternalErrorExceptionRes, de_InvalidIdentityPoolConfigurationExceptionRes, de_InvalidParameterExceptionRes, de_LimitExceededExceptionRes, de_NotAuthorizedExceptionRes, de_ResourceConflictExceptionRes, de_ResourceNotFoundExceptionRes, de_TooManyRequestsExceptionRes, de_Credentials, de_GetCredentialsForIdentityResponse, de_IdentitiesList, de_IdentityDescription, de_ListIdentitiesResponse, deserializeMetadata2, throwDefaultError2, buildHttpRpcRequest;
  var init_Aws_json1_1 = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/protocols/Aws_json1_1.js"() {
      init_dist_es33();
      init_dist_es2();
      init_dist_es26();
      init_CognitoIdentityServiceException();
      init_models_0();
      se_CreateIdentityPoolCommand = async (input, context) => {
        const headers = sharedHeaders("CreateIdentityPool");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_DeleteIdentitiesCommand = async (input, context) => {
        const headers = sharedHeaders("DeleteIdentities");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_DeleteIdentityPoolCommand = async (input, context) => {
        const headers = sharedHeaders("DeleteIdentityPool");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_DescribeIdentityCommand = async (input, context) => {
        const headers = sharedHeaders("DescribeIdentity");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_DescribeIdentityPoolCommand = async (input, context) => {
        const headers = sharedHeaders("DescribeIdentityPool");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_GetCredentialsForIdentityCommand = async (input, context) => {
        const headers = sharedHeaders("GetCredentialsForIdentity");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_GetIdCommand = async (input, context) => {
        const headers = sharedHeaders("GetId");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_GetIdentityPoolRolesCommand = async (input, context) => {
        const headers = sharedHeaders("GetIdentityPoolRoles");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_GetOpenIdTokenCommand = async (input, context) => {
        const headers = sharedHeaders("GetOpenIdToken");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_GetOpenIdTokenForDeveloperIdentityCommand = async (input, context) => {
        const headers = sharedHeaders("GetOpenIdTokenForDeveloperIdentity");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_GetPrincipalTagAttributeMapCommand = async (input, context) => {
        const headers = sharedHeaders("GetPrincipalTagAttributeMap");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_ListIdentitiesCommand = async (input, context) => {
        const headers = sharedHeaders("ListIdentities");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_ListIdentityPoolsCommand = async (input, context) => {
        const headers = sharedHeaders("ListIdentityPools");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_ListTagsForResourceCommand = async (input, context) => {
        const headers = sharedHeaders("ListTagsForResource");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_LookupDeveloperIdentityCommand = async (input, context) => {
        const headers = sharedHeaders("LookupDeveloperIdentity");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_MergeDeveloperIdentitiesCommand = async (input, context) => {
        const headers = sharedHeaders("MergeDeveloperIdentities");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_SetIdentityPoolRolesCommand = async (input, context) => {
        const headers = sharedHeaders("SetIdentityPoolRoles");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_SetPrincipalTagAttributeMapCommand = async (input, context) => {
        const headers = sharedHeaders("SetPrincipalTagAttributeMap");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_TagResourceCommand = async (input, context) => {
        const headers = sharedHeaders("TagResource");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_UnlinkDeveloperIdentityCommand = async (input, context) => {
        const headers = sharedHeaders("UnlinkDeveloperIdentity");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_UnlinkIdentityCommand = async (input, context) => {
        const headers = sharedHeaders("UnlinkIdentity");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_UntagResourceCommand = async (input, context) => {
        const headers = sharedHeaders("UntagResource");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      se_UpdateIdentityPoolCommand = async (input, context) => {
        const headers = sharedHeaders("UpdateIdentityPool");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest(context, headers, "/", void 0, body);
      };
      de_CreateIdentityPoolCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_DeleteIdentitiesCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_DeleteIdentityPoolCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        await collectBody(output.body, context);
        const response = {
          $metadata: deserializeMetadata2(output)
        };
        return response;
      };
      de_DescribeIdentityCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_IdentityDescription(data, context);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_DescribeIdentityPoolCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_GetCredentialsForIdentityCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_GetCredentialsForIdentityResponse(data, context);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_GetIdCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_GetIdentityPoolRolesCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_GetOpenIdTokenCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_GetOpenIdTokenForDeveloperIdentityCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_GetPrincipalTagAttributeMapCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_ListIdentitiesCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_ListIdentitiesResponse(data, context);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_ListIdentityPoolsCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_ListTagsForResourceCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_LookupDeveloperIdentityCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_MergeDeveloperIdentitiesCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_SetIdentityPoolRolesCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        await collectBody(output.body, context);
        const response = {
          $metadata: deserializeMetadata2(output)
        };
        return response;
      };
      de_SetPrincipalTagAttributeMapCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_TagResourceCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_UnlinkDeveloperIdentityCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        await collectBody(output.body, context);
        const response = {
          $metadata: deserializeMetadata2(output)
        };
        return response;
      };
      de_UnlinkIdentityCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        await collectBody(output.body, context);
        const response = {
          $metadata: deserializeMetadata2(output)
        };
        return response;
      };
      de_UntagResourceCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_UpdateIdentityPoolCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata2(output),
          ...contents
        };
        return response;
      };
      de_CommandError = async (output, context) => {
        const parsedOutput = {
          ...output,
          body: await parseJsonErrorBody(output.body, context)
        };
        const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
        switch (errorCode) {
          case "InternalErrorException":
          case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
          case "InvalidParameterException":
          case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
          case "LimitExceededException":
          case "com.amazonaws.cognitoidentity#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
          case "NotAuthorizedException":
          case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
          case "ResourceConflictException":
          case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
          case "TooManyRequestsException":
          case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
          case "ResourceNotFoundException":
          case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
          case "ExternalServiceException":
          case "com.amazonaws.cognitoidentity#ExternalServiceException":
            throw await de_ExternalServiceExceptionRes(parsedOutput, context);
          case "InvalidIdentityPoolConfigurationException":
          case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
            throw await de_InvalidIdentityPoolConfigurationExceptionRes(parsedOutput, context);
          case "DeveloperUserAlreadyRegisteredException":
          case "com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":
            throw await de_DeveloperUserAlreadyRegisteredExceptionRes(parsedOutput, context);
          case "ConcurrentModificationException":
          case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
          default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError2({
              output,
              parsedBody,
              errorCode
            });
        }
      };
      de_ConcurrentModificationExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new ConcurrentModificationException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_DeveloperUserAlreadyRegisteredExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new DeveloperUserAlreadyRegisteredException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_ExternalServiceExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new ExternalServiceException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_InternalErrorExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new InternalErrorException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_InvalidIdentityPoolConfigurationExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new InvalidIdentityPoolConfigurationException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_InvalidParameterExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new InvalidParameterException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_LimitExceededExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new LimitExceededException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_NotAuthorizedExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new NotAuthorizedException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_ResourceConflictExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new ResourceConflictException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new ResourceNotFoundException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_TooManyRequestsExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new TooManyRequestsException({
          $metadata: deserializeMetadata2(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_Credentials = (output, context) => {
        return take(output, {
          AccessKeyId: expectString,
          Expiration: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          SecretKey: expectString,
          SessionToken: expectString
        });
      };
      de_GetCredentialsForIdentityResponse = (output, context) => {
        return take(output, {
          Credentials: (_3) => de_Credentials(_3, context),
          IdentityId: expectString
        });
      };
      de_IdentitiesList = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return de_IdentityDescription(entry, context);
        });
        return retVal;
      };
      de_IdentityDescription = (output, context) => {
        return take(output, {
          CreationDate: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          IdentityId: expectString,
          LastModifiedDate: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          Logins: _json
        });
      };
      de_ListIdentitiesResponse = (output, context) => {
        return take(output, {
          Identities: (_3) => de_IdentitiesList(_3, context),
          IdentityPoolId: expectString,
          NextToken: expectString
        });
      };
      deserializeMetadata2 = (output) => ({
        httpStatusCode: output.statusCode,
        requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"]
      });
      throwDefaultError2 = withBaseException(CognitoIdentityServiceException);
      buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
        const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
        const contents = {
          protocol,
          hostname,
          port,
          method: "POST",
          path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
          headers
        };
        if (resolvedHostname !== void 0) {
          contents.hostname = resolvedHostname;
        }
        if (body !== void 0) {
          contents.body = body;
        }
        return new HttpRequest(contents);
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/CreateIdentityPoolCommand.js
  var CreateIdentityPoolCommand;
  var init_CreateIdentityPoolCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/CreateIdentityPoolCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      CreateIdentityPoolCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "CreateIdentityPool", {}).n("CognitoIdentityClient", "CreateIdentityPoolCommand").f(void 0, void 0).ser(se_CreateIdentityPoolCommand).de(de_CreateIdentityPoolCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DeleteIdentitiesCommand.js
  var DeleteIdentitiesCommand;
  var init_DeleteIdentitiesCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DeleteIdentitiesCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      DeleteIdentitiesCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "DeleteIdentities", {}).n("CognitoIdentityClient", "DeleteIdentitiesCommand").f(void 0, void 0).ser(se_DeleteIdentitiesCommand).de(de_DeleteIdentitiesCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DeleteIdentityPoolCommand.js
  var DeleteIdentityPoolCommand;
  var init_DeleteIdentityPoolCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DeleteIdentityPoolCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      DeleteIdentityPoolCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "DeleteIdentityPool", {}).n("CognitoIdentityClient", "DeleteIdentityPoolCommand").f(void 0, void 0).ser(se_DeleteIdentityPoolCommand).de(de_DeleteIdentityPoolCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DescribeIdentityCommand.js
  var DescribeIdentityCommand;
  var init_DescribeIdentityCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DescribeIdentityCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      DescribeIdentityCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "DescribeIdentity", {}).n("CognitoIdentityClient", "DescribeIdentityCommand").f(void 0, void 0).ser(se_DescribeIdentityCommand).de(de_DescribeIdentityCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DescribeIdentityPoolCommand.js
  var DescribeIdentityPoolCommand;
  var init_DescribeIdentityPoolCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/DescribeIdentityPoolCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      DescribeIdentityPoolCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "DescribeIdentityPool", {}).n("CognitoIdentityClient", "DescribeIdentityPoolCommand").f(void 0, void 0).ser(se_DescribeIdentityPoolCommand).de(de_DescribeIdentityPoolCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetCredentialsForIdentityCommand.js
  var GetCredentialsForIdentityCommand;
  var init_GetCredentialsForIdentityCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetCredentialsForIdentityCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      GetCredentialsForIdentityCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "GetCredentialsForIdentity", {}).n("CognitoIdentityClient", "GetCredentialsForIdentityCommand").f(void 0, void 0).ser(se_GetCredentialsForIdentityCommand).de(de_GetCredentialsForIdentityCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetIdCommand.js
  var GetIdCommand;
  var init_GetIdCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetIdCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      GetIdCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "GetId", {}).n("CognitoIdentityClient", "GetIdCommand").f(void 0, void 0).ser(se_GetIdCommand).de(de_GetIdCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetIdentityPoolRolesCommand.js
  var GetIdentityPoolRolesCommand;
  var init_GetIdentityPoolRolesCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetIdentityPoolRolesCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      GetIdentityPoolRolesCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "GetIdentityPoolRoles", {}).n("CognitoIdentityClient", "GetIdentityPoolRolesCommand").f(void 0, void 0).ser(se_GetIdentityPoolRolesCommand).de(de_GetIdentityPoolRolesCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetOpenIdTokenCommand.js
  var GetOpenIdTokenCommand;
  var init_GetOpenIdTokenCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetOpenIdTokenCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      GetOpenIdTokenCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "GetOpenIdToken", {}).n("CognitoIdentityClient", "GetOpenIdTokenCommand").f(void 0, void 0).ser(se_GetOpenIdTokenCommand).de(de_GetOpenIdTokenCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetOpenIdTokenForDeveloperIdentityCommand.js
  var GetOpenIdTokenForDeveloperIdentityCommand;
  var init_GetOpenIdTokenForDeveloperIdentityCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetOpenIdTokenForDeveloperIdentityCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      GetOpenIdTokenForDeveloperIdentityCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "GetOpenIdTokenForDeveloperIdentity", {}).n("CognitoIdentityClient", "GetOpenIdTokenForDeveloperIdentityCommand").f(void 0, void 0).ser(se_GetOpenIdTokenForDeveloperIdentityCommand).de(de_GetOpenIdTokenForDeveloperIdentityCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetPrincipalTagAttributeMapCommand.js
  var GetPrincipalTagAttributeMapCommand;
  var init_GetPrincipalTagAttributeMapCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetPrincipalTagAttributeMapCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      GetPrincipalTagAttributeMapCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "GetPrincipalTagAttributeMap", {}).n("CognitoIdentityClient", "GetPrincipalTagAttributeMapCommand").f(void 0, void 0).ser(se_GetPrincipalTagAttributeMapCommand).de(de_GetPrincipalTagAttributeMapCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/ListIdentitiesCommand.js
  var ListIdentitiesCommand;
  var init_ListIdentitiesCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/ListIdentitiesCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      ListIdentitiesCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "ListIdentities", {}).n("CognitoIdentityClient", "ListIdentitiesCommand").f(void 0, void 0).ser(se_ListIdentitiesCommand).de(de_ListIdentitiesCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/ListIdentityPoolsCommand.js
  var ListIdentityPoolsCommand;
  var init_ListIdentityPoolsCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/ListIdentityPoolsCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      ListIdentityPoolsCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "ListIdentityPools", {}).n("CognitoIdentityClient", "ListIdentityPoolsCommand").f(void 0, void 0).ser(se_ListIdentityPoolsCommand).de(de_ListIdentityPoolsCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/ListTagsForResourceCommand.js
  var ListTagsForResourceCommand;
  var init_ListTagsForResourceCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/ListTagsForResourceCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      ListTagsForResourceCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "ListTagsForResource", {}).n("CognitoIdentityClient", "ListTagsForResourceCommand").f(void 0, void 0).ser(se_ListTagsForResourceCommand).de(de_ListTagsForResourceCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/LookupDeveloperIdentityCommand.js
  var LookupDeveloperIdentityCommand;
  var init_LookupDeveloperIdentityCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/LookupDeveloperIdentityCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      LookupDeveloperIdentityCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "LookupDeveloperIdentity", {}).n("CognitoIdentityClient", "LookupDeveloperIdentityCommand").f(void 0, void 0).ser(se_LookupDeveloperIdentityCommand).de(de_LookupDeveloperIdentityCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/MergeDeveloperIdentitiesCommand.js
  var MergeDeveloperIdentitiesCommand;
  var init_MergeDeveloperIdentitiesCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/MergeDeveloperIdentitiesCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      MergeDeveloperIdentitiesCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "MergeDeveloperIdentities", {}).n("CognitoIdentityClient", "MergeDeveloperIdentitiesCommand").f(void 0, void 0).ser(se_MergeDeveloperIdentitiesCommand).de(de_MergeDeveloperIdentitiesCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/SetIdentityPoolRolesCommand.js
  var SetIdentityPoolRolesCommand;
  var init_SetIdentityPoolRolesCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/SetIdentityPoolRolesCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      SetIdentityPoolRolesCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "SetIdentityPoolRoles", {}).n("CognitoIdentityClient", "SetIdentityPoolRolesCommand").f(void 0, void 0).ser(se_SetIdentityPoolRolesCommand).de(de_SetIdentityPoolRolesCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/SetPrincipalTagAttributeMapCommand.js
  var SetPrincipalTagAttributeMapCommand;
  var init_SetPrincipalTagAttributeMapCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/SetPrincipalTagAttributeMapCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      SetPrincipalTagAttributeMapCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "SetPrincipalTagAttributeMap", {}).n("CognitoIdentityClient", "SetPrincipalTagAttributeMapCommand").f(void 0, void 0).ser(se_SetPrincipalTagAttributeMapCommand).de(de_SetPrincipalTagAttributeMapCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/TagResourceCommand.js
  var TagResourceCommand;
  var init_TagResourceCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/TagResourceCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      TagResourceCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "TagResource", {}).n("CognitoIdentityClient", "TagResourceCommand").f(void 0, void 0).ser(se_TagResourceCommand).de(de_TagResourceCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UnlinkDeveloperIdentityCommand.js
  var UnlinkDeveloperIdentityCommand;
  var init_UnlinkDeveloperIdentityCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UnlinkDeveloperIdentityCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      UnlinkDeveloperIdentityCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "UnlinkDeveloperIdentity", {}).n("CognitoIdentityClient", "UnlinkDeveloperIdentityCommand").f(void 0, void 0).ser(se_UnlinkDeveloperIdentityCommand).de(de_UnlinkDeveloperIdentityCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UnlinkIdentityCommand.js
  var UnlinkIdentityCommand;
  var init_UnlinkIdentityCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UnlinkIdentityCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      UnlinkIdentityCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "UnlinkIdentity", {}).n("CognitoIdentityClient", "UnlinkIdentityCommand").f(void 0, void 0).ser(se_UnlinkIdentityCommand).de(de_UnlinkIdentityCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UntagResourceCommand.js
  var UntagResourceCommand;
  var init_UntagResourceCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UntagResourceCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      UntagResourceCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "UntagResource", {}).n("CognitoIdentityClient", "UntagResourceCommand").f(void 0, void 0).ser(se_UntagResourceCommand).de(de_UntagResourceCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UpdateIdentityPoolCommand.js
  var UpdateIdentityPoolCommand;
  var init_UpdateIdentityPoolCommand = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/UpdateIdentityPoolCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters();
      init_Aws_json1_1();
      UpdateIdentityPoolCommand = class extends Command.classBuilder().ep({
        ...commonParams
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("AWSCognitoIdentityService", "UpdateIdentityPool", {}).n("CognitoIdentityClient", "UpdateIdentityPoolCommand").f(void 0, void 0).ser(se_UpdateIdentityPoolCommand).de(de_UpdateIdentityPoolCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/CognitoIdentity.js
  var commands, CognitoIdentity;
  var init_CognitoIdentity = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/CognitoIdentity.js"() {
      init_dist_es26();
      init_CognitoIdentityClient();
      init_CreateIdentityPoolCommand();
      init_DeleteIdentitiesCommand();
      init_DeleteIdentityPoolCommand();
      init_DescribeIdentityCommand();
      init_DescribeIdentityPoolCommand();
      init_GetCredentialsForIdentityCommand();
      init_GetIdCommand();
      init_GetIdentityPoolRolesCommand();
      init_GetOpenIdTokenCommand();
      init_GetOpenIdTokenForDeveloperIdentityCommand();
      init_GetPrincipalTagAttributeMapCommand();
      init_ListIdentitiesCommand();
      init_ListIdentityPoolsCommand();
      init_ListTagsForResourceCommand();
      init_LookupDeveloperIdentityCommand();
      init_MergeDeveloperIdentitiesCommand();
      init_SetIdentityPoolRolesCommand();
      init_SetPrincipalTagAttributeMapCommand();
      init_TagResourceCommand();
      init_UnlinkDeveloperIdentityCommand();
      init_UnlinkIdentityCommand();
      init_UntagResourceCommand();
      init_UpdateIdentityPoolCommand();
      commands = {
        CreateIdentityPoolCommand,
        DeleteIdentitiesCommand,
        DeleteIdentityPoolCommand,
        DescribeIdentityCommand,
        DescribeIdentityPoolCommand,
        GetCredentialsForIdentityCommand,
        GetIdCommand,
        GetIdentityPoolRolesCommand,
        GetOpenIdTokenCommand,
        GetOpenIdTokenForDeveloperIdentityCommand,
        GetPrincipalTagAttributeMapCommand,
        ListIdentitiesCommand,
        ListIdentityPoolsCommand,
        ListTagsForResourceCommand,
        LookupDeveloperIdentityCommand,
        MergeDeveloperIdentitiesCommand,
        SetIdentityPoolRolesCommand,
        SetPrincipalTagAttributeMapCommand,
        TagResourceCommand,
        UnlinkDeveloperIdentityCommand,
        UnlinkIdentityCommand,
        UntagResourceCommand,
        UpdateIdentityPoolCommand
      };
      CognitoIdentity = class extends CognitoIdentityClient {
      };
      createAggregatedClient(commands, CognitoIdentity);
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/index.js
  var init_commands = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/index.js"() {
      init_CreateIdentityPoolCommand();
      init_DeleteIdentitiesCommand();
      init_DeleteIdentityPoolCommand();
      init_DescribeIdentityCommand();
      init_DescribeIdentityPoolCommand();
      init_GetCredentialsForIdentityCommand();
      init_GetIdCommand();
      init_GetIdentityPoolRolesCommand();
      init_GetOpenIdTokenCommand();
      init_GetOpenIdTokenForDeveloperIdentityCommand();
      init_GetPrincipalTagAttributeMapCommand();
      init_ListIdentitiesCommand();
      init_ListIdentityPoolsCommand();
      init_ListTagsForResourceCommand();
      init_LookupDeveloperIdentityCommand();
      init_MergeDeveloperIdentitiesCommand();
      init_SetIdentityPoolRolesCommand();
      init_SetPrincipalTagAttributeMapCommand();
      init_TagResourceCommand();
      init_UnlinkDeveloperIdentityCommand();
      init_UnlinkIdentityCommand();
      init_UntagResourceCommand();
      init_UpdateIdentityPoolCommand();
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/pagination/Interfaces.js
  var init_Interfaces = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/pagination/Interfaces.js"() {
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/pagination/ListIdentityPoolsPaginator.js
  var paginateListIdentityPools;
  var init_ListIdentityPoolsPaginator = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/pagination/ListIdentityPoolsPaginator.js"() {
      init_dist_es28();
      init_CognitoIdentityClient();
      init_ListIdentityPoolsCommand();
      paginateListIdentityPools = createPaginator(CognitoIdentityClient, ListIdentityPoolsCommand, "NextToken", "NextToken", "MaxResults");
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/pagination/index.js
  var init_pagination2 = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/pagination/index.js"() {
      init_Interfaces();
      init_ListIdentityPoolsPaginator();
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/models/index.js
  var init_models = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/models/index.js"() {
      init_models_0();
    }
  });

  // node_modules/@aws-sdk/client-cognito-identity/dist-es/index.js
  var init_dist_es40 = __esm({
    "node_modules/@aws-sdk/client-cognito-identity/dist-es/index.js"() {
      init_CognitoIdentityClient();
      init_CognitoIdentity();
      init_commands();
      init_pagination2();
      init_models();
      init_dist_es7();
    }
  });

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/CognitoProviderParameters.js
  var init_CognitoProviderParameters = __esm({
    "node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/CognitoProviderParameters.js"() {
    }
  });

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/Logins.js
  var init_Logins = __esm({
    "node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/Logins.js"() {
    }
  });

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/Storage.js
  var init_Storage = __esm({
    "node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/Storage.js"() {
    }
  });

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/resolveLogins.js
  function resolveLogins(logins) {
    return Promise.all(Object.keys(logins).reduce((arr, name) => {
      const tokenOrProvider = logins[name];
      if (typeof tokenOrProvider === "string") {
        arr.push([name, tokenOrProvider]);
      } else {
        arr.push(tokenOrProvider().then((token) => [name, token]));
      }
      return arr;
    }, [])).then((resolvedPairs) => resolvedPairs.reduce((logins2, [key, value]) => {
      logins2[key] = value;
      return logins2;
    }, {}));
  }
  var init_resolveLogins = __esm({
    "node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/resolveLogins.js"() {
    }
  });

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/loadCognitoIdentity.js
  var loadCognitoIdentity_exports = {};
  __export(loadCognitoIdentity_exports, {
    CognitoIdentityClient: () => CognitoIdentityClient,
    GetCredentialsForIdentityCommand: () => GetCredentialsForIdentityCommand,
    GetIdCommand: () => GetIdCommand
  });
  var init_loadCognitoIdentity = __esm({
    "node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/loadCognitoIdentity.js"() {
      init_dist_es40();
    }
  });

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/fromCognitoIdentity.js
  function fromCognitoIdentity(parameters) {
    return async () => {
      parameters.logger?.debug("@aws-sdk/credential-provider-cognito-identity", "fromCognitoIdentity");
      const { GetCredentialsForIdentityCommand: GetCredentialsForIdentityCommand2, CognitoIdentityClient: CognitoIdentityClient2 } = await Promise.resolve().then(() => (init_loadCognitoIdentity(), loadCognitoIdentity_exports));
      const { Credentials: { AccessKeyId = throwOnMissingAccessKeyId(), Expiration, SecretKey = throwOnMissingSecretKey(), SessionToken } = throwOnMissingCredentials() } = await (parameters.client ?? new CognitoIdentityClient2(Object.assign({}, parameters.clientConfig ?? {}, {
        region: parameters.clientConfig?.region ?? parameters.parentClientConfig?.region
      }))).send(new GetCredentialsForIdentityCommand2({
        CustomRoleArn: parameters.customRoleArn,
        IdentityId: parameters.identityId,
        Logins: parameters.logins ? await resolveLogins(parameters.logins) : void 0
      }));
      return {
        identityId: parameters.identityId,
        accessKeyId: AccessKeyId,
        secretAccessKey: SecretKey,
        sessionToken: SessionToken,
        expiration: Expiration
      };
    };
  }
  function throwOnMissingAccessKeyId() {
    throw new CredentialsProviderError("Response from Amazon Cognito contained no access key ID");
  }
  function throwOnMissingCredentials() {
    throw new CredentialsProviderError("Response from Amazon Cognito contained no credentials");
  }
  function throwOnMissingSecretKey() {
    throw new CredentialsProviderError("Response from Amazon Cognito contained no secret key");
  }
  var init_fromCognitoIdentity = __esm({
    "node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/fromCognitoIdentity.js"() {
      init_dist_es37();
      init_resolveLogins();
    }
  });

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/IndexedDbStorage.js
  var STORE_NAME, IndexedDbStorage;
  var init_IndexedDbStorage = __esm({
    "node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/IndexedDbStorage.js"() {
      STORE_NAME = "IdentityIds";
      IndexedDbStorage = class {
        constructor(dbName = "aws:cognito-identity-ids") {
          this.dbName = dbName;
        }
        getItem(key) {
          return this.withObjectStore("readonly", (store) => {
            const req = store.get(key);
            return new Promise((resolve) => {
              req.onerror = () => resolve(null);
              req.onsuccess = () => resolve(req.result ? req.result.value : null);
            });
          }).catch(() => null);
        }
        removeItem(key) {
          return this.withObjectStore("readwrite", (store) => {
            const req = store.delete(key);
            return new Promise((resolve, reject) => {
              req.onerror = () => reject(req.error);
              req.onsuccess = () => resolve();
            });
          });
        }
        setItem(id, value) {
          return this.withObjectStore("readwrite", (store) => {
            const req = store.put({ id, value });
            return new Promise((resolve, reject) => {
              req.onerror = () => reject(req.error);
              req.onsuccess = () => resolve();
            });
          });
        }
        getDb() {
          const openDbRequest = self.indexedDB.open(this.dbName, 1);
          return new Promise((resolve, reject) => {
            openDbRequest.onsuccess = () => {
              resolve(openDbRequest.result);
            };
            openDbRequest.onerror = () => {
              reject(openDbRequest.error);
            };
            openDbRequest.onblocked = () => {
              reject(new Error("Unable to access DB"));
            };
            openDbRequest.onupgradeneeded = () => {
              const db = openDbRequest.result;
              db.onerror = () => {
                reject(new Error("Failed to create object store"));
              };
              db.createObjectStore(STORE_NAME, { keyPath: "id" });
            };
          });
        }
        withObjectStore(mode, action) {
          return this.getDb().then((db) => {
            const tx = db.transaction(STORE_NAME, mode);
            tx.oncomplete = () => db.close();
            return new Promise((resolve, reject) => {
              tx.onerror = () => reject(tx.error);
              resolve(action(tx.objectStore(STORE_NAME)));
            }).catch((err) => {
              db.close();
              throw err;
            });
          });
        }
      };
    }
  });

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/InMemoryStorage.js
  var InMemoryStorage;
  var init_InMemoryStorage = __esm({
    "node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/InMemoryStorage.js"() {
      InMemoryStorage = class {
        constructor(store = {}) {
          this.store = store;
        }
        getItem(key) {
          if (key in this.store) {
            return this.store[key];
          }
          return null;
        }
        removeItem(key) {
          delete this.store[key];
        }
        setItem(key, value) {
          this.store[key] = value;
        }
      };
    }
  });

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/localStorage.js
  function localStorage() {
    if (typeof self === "object" && self.indexedDB) {
      return new IndexedDbStorage();
    }
    if (typeof window === "object" && window.localStorage) {
      return window.localStorage;
    }
    return inMemoryStorage;
  }
  var inMemoryStorage;
  var init_localStorage = __esm({
    "node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/localStorage.js"() {
      init_IndexedDbStorage();
      init_InMemoryStorage();
      inMemoryStorage = new InMemoryStorage();
    }
  });

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/fromCognitoIdentityPool.js
  function fromCognitoIdentityPool({ accountId, cache = localStorage(), client, clientConfig, customRoleArn, identityPoolId, logins, userIdentifier = !logins || Object.keys(logins).length === 0 ? "ANONYMOUS" : void 0, logger: logger2, parentClientConfig }) {
    logger2?.debug("@aws-sdk/credential-provider-cognito-identity", "fromCognitoIdentity");
    const cacheKey = userIdentifier ? `aws:cognito-identity-credentials:${identityPoolId}:${userIdentifier}` : void 0;
    let provider = async () => {
      const { GetIdCommand: GetIdCommand2, CognitoIdentityClient: CognitoIdentityClient2 } = await Promise.resolve().then(() => (init_loadCognitoIdentity(), loadCognitoIdentity_exports));
      const _client = client ?? new CognitoIdentityClient2(Object.assign({}, clientConfig ?? {}, { region: clientConfig?.region ?? parentClientConfig?.region }));
      let identityId = cacheKey && await cache.getItem(cacheKey);
      if (!identityId) {
        const { IdentityId = throwOnMissingId() } = await _client.send(new GetIdCommand2({
          AccountId: accountId,
          IdentityPoolId: identityPoolId,
          Logins: logins ? await resolveLogins(logins) : void 0
        }));
        identityId = IdentityId;
        if (cacheKey) {
          Promise.resolve(cache.setItem(cacheKey, identityId)).catch(() => {
          });
        }
      }
      provider = fromCognitoIdentity({
        client: _client,
        customRoleArn,
        logins,
        identityId
      });
      return provider();
    };
    return () => provider().catch(async (err) => {
      if (cacheKey) {
        Promise.resolve(cache.removeItem(cacheKey)).catch(() => {
        });
      }
      throw err;
    });
  }
  function throwOnMissingId() {
    throw new CredentialsProviderError("Response from Amazon Cognito contained no identity ID");
  }
  var init_fromCognitoIdentityPool = __esm({
    "node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/fromCognitoIdentityPool.js"() {
      init_dist_es37();
      init_fromCognitoIdentity();
      init_localStorage();
      init_resolveLogins();
    }
  });

  // node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/index.js
  var init_dist_es41 = __esm({
    "node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/index.js"() {
      init_CognitoProviderParameters();
      init_Logins();
      init_Storage();
      init_fromCognitoIdentity();
      init_fromCognitoIdentityPool();
    }
  });

  // node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/configurations.js
  var init_configurations3 = __esm({
    "node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/configurations.js"() {
    }
  });

  // node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/getCacheKey.js
  var init_getCacheKey = __esm({
    "node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/getCacheKey.js"() {
    }
  });

  // node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/updateDiscoveredEndpointInCache.js
  var init_updateDiscoveredEndpointInCache = __esm({
    "node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/updateDiscoveredEndpointInCache.js"() {
    }
  });

  // node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/endpointDiscoveryMiddleware.js
  var init_endpointDiscoveryMiddleware = __esm({
    "node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/endpointDiscoveryMiddleware.js"() {
      init_dist_es2();
      init_getCacheKey();
      init_updateDiscoveredEndpointInCache();
    }
  });

  // node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/getEndpointDiscoveryPlugin.js
  var init_getEndpointDiscoveryPlugin = __esm({
    "node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/getEndpointDiscoveryPlugin.js"() {
      init_endpointDiscoveryMiddleware();
    }
  });

  // node_modules/@aws-sdk/endpoint-cache/dist-es/Endpoint.js
  var init_Endpoint = __esm({
    "node_modules/@aws-sdk/endpoint-cache/dist-es/Endpoint.js"() {
    }
  });

  // node_modules/obliterator/iterator.js
  var require_iterator = __commonJS({
    "node_modules/obliterator/iterator.js"(exports2, module) {
      function Iterator(next) {
        Object.defineProperty(this, "_next", {
          writable: false,
          enumerable: false,
          value: next
        });
        this.done = false;
      }
      Iterator.prototype.next = function() {
        if (this.done)
          return { done: true };
        var step = this._next();
        if (step.done)
          this.done = true;
        return step;
      };
      if (typeof Symbol !== "undefined")
        Iterator.prototype[Symbol.iterator] = function() {
          return this;
        };
      Iterator.of = function() {
        var args = arguments, l5 = args.length, i5 = 0;
        return new Iterator(function() {
          if (i5 >= l5)
            return { done: true };
          return { done: false, value: args[i5++] };
        });
      };
      Iterator.empty = function() {
        var iterator = new Iterator(null);
        iterator.done = true;
        return iterator;
      };
      Iterator.is = function(value) {
        if (value instanceof Iterator)
          return true;
        return typeof value === "object" && value !== null && typeof value.next === "function";
      };
      module.exports = Iterator;
    }
  });

  // node_modules/obliterator/foreach.js
  var require_foreach = __commonJS({
    "node_modules/obliterator/foreach.js"(exports2, module) {
      var ARRAY_BUFFER_SUPPORT = typeof ArrayBuffer !== "undefined";
      var SYMBOL_SUPPORT = typeof Symbol !== "undefined";
      function forEach(iterable, callback) {
        var iterator, k5, i5, l5, s5;
        if (!iterable)
          throw new Error("obliterator/forEach: invalid iterable.");
        if (typeof callback !== "function")
          throw new Error("obliterator/forEach: expecting a callback.");
        if (Array.isArray(iterable) || ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable) || typeof iterable === "string" || iterable.toString() === "[object Arguments]") {
          for (i5 = 0, l5 = iterable.length; i5 < l5; i5++)
            callback(iterable[i5], i5);
          return;
        }
        if (typeof iterable.forEach === "function") {
          iterable.forEach(callback);
          return;
        }
        if (SYMBOL_SUPPORT && Symbol.iterator in iterable && typeof iterable.next !== "function") {
          iterable = iterable[Symbol.iterator]();
        }
        if (typeof iterable.next === "function") {
          iterator = iterable;
          i5 = 0;
          while (s5 = iterator.next(), s5.done !== true) {
            callback(s5.value, i5);
            i5++;
          }
          return;
        }
        for (k5 in iterable) {
          if (iterable.hasOwnProperty(k5)) {
            callback(iterable[k5], k5);
          }
        }
        return;
      }
      forEach.forEachWithNullKeys = function(iterable, callback) {
        var iterator, k5, i5, l5, s5;
        if (!iterable)
          throw new Error("obliterator/forEachWithNullKeys: invalid iterable.");
        if (typeof callback !== "function")
          throw new Error("obliterator/forEachWithNullKeys: expecting a callback.");
        if (Array.isArray(iterable) || ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable) || typeof iterable === "string" || iterable.toString() === "[object Arguments]") {
          for (i5 = 0, l5 = iterable.length; i5 < l5; i5++)
            callback(iterable[i5], null);
          return;
        }
        if (iterable instanceof Set) {
          iterable.forEach(function(value) {
            callback(value, null);
          });
          return;
        }
        if (typeof iterable.forEach === "function") {
          iterable.forEach(callback);
          return;
        }
        if (SYMBOL_SUPPORT && Symbol.iterator in iterable && typeof iterable.next !== "function") {
          iterable = iterable[Symbol.iterator]();
        }
        if (typeof iterable.next === "function") {
          iterator = iterable;
          i5 = 0;
          while (s5 = iterator.next(), s5.done !== true) {
            callback(s5.value, null);
            i5++;
          }
          return;
        }
        for (k5 in iterable) {
          if (iterable.hasOwnProperty(k5)) {
            callback(iterable[k5], k5);
          }
        }
        return;
      };
      module.exports = forEach;
    }
  });

  // node_modules/mnemonist/utils/typed-arrays.js
  var require_typed_arrays = __commonJS({
    "node_modules/mnemonist/utils/typed-arrays.js"(exports2) {
      var MAX_8BIT_INTEGER = Math.pow(2, 8) - 1;
      var MAX_16BIT_INTEGER = Math.pow(2, 16) - 1;
      var MAX_32BIT_INTEGER = Math.pow(2, 32) - 1;
      var MAX_SIGNED_8BIT_INTEGER = Math.pow(2, 7) - 1;
      var MAX_SIGNED_16BIT_INTEGER = Math.pow(2, 15) - 1;
      var MAX_SIGNED_32BIT_INTEGER = Math.pow(2, 31) - 1;
      exports2.getPointerArray = function(size) {
        var maxIndex = size - 1;
        if (maxIndex <= MAX_8BIT_INTEGER)
          return Uint8Array;
        if (maxIndex <= MAX_16BIT_INTEGER)
          return Uint16Array;
        if (maxIndex <= MAX_32BIT_INTEGER)
          return Uint32Array;
        return Float64Array;
      };
      exports2.getSignedPointerArray = function(size) {
        var maxIndex = size - 1;
        if (maxIndex <= MAX_SIGNED_8BIT_INTEGER)
          return Int8Array;
        if (maxIndex <= MAX_SIGNED_16BIT_INTEGER)
          return Int16Array;
        if (maxIndex <= MAX_SIGNED_32BIT_INTEGER)
          return Int32Array;
        return Float64Array;
      };
      exports2.getNumberType = function(value) {
        if (value === (value | 0)) {
          if (Math.sign(value) === -1) {
            if (value <= 127 && value >= -128)
              return Int8Array;
            if (value <= 32767 && value >= -32768)
              return Int16Array;
            return Int32Array;
          } else {
            if (value <= 255)
              return Uint8Array;
            if (value <= 65535)
              return Uint16Array;
            return Uint32Array;
          }
        }
        return Float64Array;
      };
      var TYPE_PRIORITY = {
        Uint8Array: 1,
        Int8Array: 2,
        Uint16Array: 3,
        Int16Array: 4,
        Uint32Array: 5,
        Int32Array: 6,
        Float32Array: 7,
        Float64Array: 8
      };
      exports2.getMinimalRepresentation = function(array, getter) {
        var maxType = null, maxPriority = 0, p5, t5, v6, i5, l5;
        for (i5 = 0, l5 = array.length; i5 < l5; i5++) {
          v6 = getter ? getter(array[i5]) : array[i5];
          t5 = exports2.getNumberType(v6);
          p5 = TYPE_PRIORITY[t5.name];
          if (p5 > maxPriority) {
            maxPriority = p5;
            maxType = t5;
          }
        }
        return maxType;
      };
      exports2.isTypedArray = function(value) {
        return typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView(value);
      };
      exports2.concat = function() {
        var length = 0, i5, o5, l5;
        for (i5 = 0, l5 = arguments.length; i5 < l5; i5++)
          length += arguments[i5].length;
        var array = new arguments[0].constructor(length);
        for (i5 = 0, o5 = 0; i5 < l5; i5++) {
          array.set(arguments[i5], o5);
          o5 += arguments[i5].length;
        }
        return array;
      };
      exports2.indices = function(length) {
        var PointerArray = exports2.getPointerArray(length);
        var array = new PointerArray(length);
        for (var i5 = 0; i5 < length; i5++)
          array[i5] = i5;
        return array;
      };
    }
  });

  // node_modules/mnemonist/utils/iterables.js
  var require_iterables = __commonJS({
    "node_modules/mnemonist/utils/iterables.js"(exports2) {
      var forEach = require_foreach();
      var typed = require_typed_arrays();
      function isArrayLike(target) {
        return Array.isArray(target) || typed.isTypedArray(target);
      }
      function guessLength(target) {
        if (typeof target.length === "number")
          return target.length;
        if (typeof target.size === "number")
          return target.size;
        return;
      }
      function toArray(target) {
        var l5 = guessLength(target);
        var array = typeof l5 === "number" ? new Array(l5) : [];
        var i5 = 0;
        forEach(target, function(value) {
          array[i5++] = value;
        });
        return array;
      }
      function toArrayWithIndices(target) {
        var l5 = guessLength(target);
        var IndexArray = typeof l5 === "number" ? typed.getPointerArray(l5) : Array;
        var array = typeof l5 === "number" ? new Array(l5) : [];
        var indices = typeof l5 === "number" ? new IndexArray(l5) : [];
        var i5 = 0;
        forEach(target, function(value) {
          array[i5] = value;
          indices[i5] = i5++;
        });
        return [array, indices];
      }
      exports2.isArrayLike = isArrayLike;
      exports2.guessLength = guessLength;
      exports2.toArray = toArray;
      exports2.toArrayWithIndices = toArrayWithIndices;
    }
  });

  // node_modules/mnemonist/lru-cache.js
  var require_lru_cache = __commonJS({
    "node_modules/mnemonist/lru-cache.js"(exports2, module) {
      var Iterator = require_iterator();
      var forEach = require_foreach();
      var typed = require_typed_arrays();
      var iterables = require_iterables();
      function LRUCache2(Keys, Values, capacity) {
        if (arguments.length < 2) {
          capacity = Keys;
          Keys = null;
          Values = null;
        }
        this.capacity = capacity;
        if (typeof this.capacity !== "number" || this.capacity <= 0)
          throw new Error("mnemonist/lru-cache: capacity should be positive number.");
        var PointerArray = typed.getPointerArray(capacity);
        this.forward = new PointerArray(capacity);
        this.backward = new PointerArray(capacity);
        this.K = typeof Keys === "function" ? new Keys(capacity) : new Array(capacity);
        this.V = typeof Values === "function" ? new Values(capacity) : new Array(capacity);
        this.size = 0;
        this.head = 0;
        this.tail = 0;
        this.items = {};
      }
      LRUCache2.prototype.clear = function() {
        this.size = 0;
        this.head = 0;
        this.tail = 0;
        this.items = {};
      };
      LRUCache2.prototype.splayOnTop = function(pointer) {
        var oldHead = this.head;
        if (this.head === pointer)
          return this;
        var previous = this.backward[pointer], next = this.forward[pointer];
        if (this.tail === pointer) {
          this.tail = previous;
        } else {
          this.backward[next] = previous;
        }
        this.forward[previous] = next;
        this.backward[oldHead] = pointer;
        this.head = pointer;
        this.forward[pointer] = oldHead;
        return this;
      };
      LRUCache2.prototype.set = function(key, value) {
        var pointer = this.items[key];
        if (typeof pointer !== "undefined") {
          this.splayOnTop(pointer);
          this.V[pointer] = value;
          return;
        }
        if (this.size < this.capacity) {
          pointer = this.size++;
        } else {
          pointer = this.tail;
          this.tail = this.backward[pointer];
          delete this.items[this.K[pointer]];
        }
        this.items[key] = pointer;
        this.K[pointer] = key;
        this.V[pointer] = value;
        this.forward[pointer] = this.head;
        this.backward[this.head] = pointer;
        this.head = pointer;
      };
      LRUCache2.prototype.setpop = function(key, value) {
        var oldValue = null;
        var oldKey = null;
        var pointer = this.items[key];
        if (typeof pointer !== "undefined") {
          this.splayOnTop(pointer);
          oldValue = this.V[pointer];
          this.V[pointer] = value;
          return { evicted: false, key, value: oldValue };
        }
        if (this.size < this.capacity) {
          pointer = this.size++;
        } else {
          pointer = this.tail;
          this.tail = this.backward[pointer];
          oldValue = this.V[pointer];
          oldKey = this.K[pointer];
          delete this.items[this.K[pointer]];
        }
        this.items[key] = pointer;
        this.K[pointer] = key;
        this.V[pointer] = value;
        this.forward[pointer] = this.head;
        this.backward[this.head] = pointer;
        this.head = pointer;
        if (oldKey) {
          return { evicted: true, key: oldKey, value: oldValue };
        } else {
          return null;
        }
      };
      LRUCache2.prototype.has = function(key) {
        return key in this.items;
      };
      LRUCache2.prototype.get = function(key) {
        var pointer = this.items[key];
        if (typeof pointer === "undefined")
          return;
        this.splayOnTop(pointer);
        return this.V[pointer];
      };
      LRUCache2.prototype.peek = function(key) {
        var pointer = this.items[key];
        if (typeof pointer === "undefined")
          return;
        return this.V[pointer];
      };
      LRUCache2.prototype.forEach = function(callback, scope) {
        scope = arguments.length > 1 ? scope : this;
        var i5 = 0, l5 = this.size;
        var pointer = this.head, keys = this.K, values = this.V, forward = this.forward;
        while (i5 < l5) {
          callback.call(scope, values[pointer], keys[pointer], this);
          pointer = forward[pointer];
          i5++;
        }
      };
      LRUCache2.prototype.keys = function() {
        var i5 = 0, l5 = this.size;
        var pointer = this.head, keys = this.K, forward = this.forward;
        return new Iterator(function() {
          if (i5 >= l5)
            return { done: true };
          var key = keys[pointer];
          i5++;
          if (i5 < l5)
            pointer = forward[pointer];
          return {
            done: false,
            value: key
          };
        });
      };
      LRUCache2.prototype.values = function() {
        var i5 = 0, l5 = this.size;
        var pointer = this.head, values = this.V, forward = this.forward;
        return new Iterator(function() {
          if (i5 >= l5)
            return { done: true };
          var value = values[pointer];
          i5++;
          if (i5 < l5)
            pointer = forward[pointer];
          return {
            done: false,
            value
          };
        });
      };
      LRUCache2.prototype.entries = function() {
        var i5 = 0, l5 = this.size;
        var pointer = this.head, keys = this.K, values = this.V, forward = this.forward;
        return new Iterator(function() {
          if (i5 >= l5)
            return { done: true };
          var key = keys[pointer], value = values[pointer];
          i5++;
          if (i5 < l5)
            pointer = forward[pointer];
          return {
            done: false,
            value: [key, value]
          };
        });
      };
      if (typeof Symbol !== "undefined")
        LRUCache2.prototype[Symbol.iterator] = LRUCache2.prototype.entries;
      LRUCache2.prototype.inspect = function() {
        var proxy = /* @__PURE__ */ new Map();
        var iterator = this.entries(), step;
        while (step = iterator.next(), !step.done)
          proxy.set(step.value[0], step.value[1]);
        Object.defineProperty(proxy, "constructor", {
          value: LRUCache2,
          enumerable: false
        });
        return proxy;
      };
      if (typeof Symbol !== "undefined")
        LRUCache2.prototype[Symbol.for("nodejs.util.inspect.custom")] = LRUCache2.prototype.inspect;
      LRUCache2.from = function(iterable, Keys, Values, capacity) {
        if (arguments.length < 2) {
          capacity = iterables.guessLength(iterable);
          if (typeof capacity !== "number")
            throw new Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.");
        } else if (arguments.length === 2) {
          capacity = Keys;
          Keys = null;
          Values = null;
        }
        var cache = new LRUCache2(Keys, Values, capacity);
        forEach(iterable, function(value, key) {
          cache.set(key, value);
        });
        return cache;
      };
      module.exports = LRUCache2;
    }
  });

  // node_modules/@aws-sdk/endpoint-cache/dist-es/EndpointCache.js
  var import_lru_cache, EndpointCache;
  var init_EndpointCache = __esm({
    "node_modules/@aws-sdk/endpoint-cache/dist-es/EndpointCache.js"() {
      import_lru_cache = __toESM(require_lru_cache());
      EndpointCache = class {
        constructor(capacity) {
          this.cache = new import_lru_cache.default(capacity);
        }
        getEndpoint(key) {
          const endpointsWithExpiry = this.get(key);
          if (!endpointsWithExpiry || endpointsWithExpiry.length === 0) {
            return void 0;
          }
          const endpoints = endpointsWithExpiry.map((endpoint) => endpoint.Address);
          return endpoints[Math.floor(Math.random() * endpoints.length)];
        }
        get(key) {
          if (!this.has(key)) {
            return;
          }
          const value = this.cache.get(key);
          if (!value) {
            return;
          }
          const now = Date.now();
          const endpointsWithExpiry = value.filter((endpoint) => now < endpoint.Expires);
          if (endpointsWithExpiry.length === 0) {
            this.delete(key);
            return void 0;
          }
          return endpointsWithExpiry;
        }
        set(key, endpoints) {
          const now = Date.now();
          this.cache.set(key, endpoints.map(({ Address, CachePeriodInMinutes }) => ({
            Address,
            Expires: now + CachePeriodInMinutes * 60 * 1e3
          })));
        }
        delete(key) {
          this.cache.set(key, []);
        }
        has(key) {
          if (!this.cache.has(key)) {
            return false;
          }
          const endpoints = this.cache.peek(key);
          if (!endpoints) {
            return false;
          }
          return endpoints.length > 0;
        }
        clear() {
          this.cache.clear();
        }
      };
    }
  });

  // node_modules/@aws-sdk/endpoint-cache/dist-es/index.js
  var init_dist_es42 = __esm({
    "node_modules/@aws-sdk/endpoint-cache/dist-es/index.js"() {
      init_Endpoint();
      init_EndpointCache();
    }
  });

  // node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/resolveEndpointDiscoveryConfig.js
  var resolveEndpointDiscoveryConfig;
  var init_resolveEndpointDiscoveryConfig = __esm({
    "node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/resolveEndpointDiscoveryConfig.js"() {
      init_dist_es42();
      resolveEndpointDiscoveryConfig = (input, { endpointDiscoveryCommandCtor }) => ({
        ...input,
        endpointDiscoveryCommandCtor,
        endpointCache: new EndpointCache(input.endpointCacheSize ?? 1e3),
        endpointDiscoveryEnabled: input.endpointDiscoveryEnabled !== void 0 ? () => Promise.resolve(input.endpointDiscoveryEnabled) : input.endpointDiscoveryEnabledProvider,
        isClientEndpointDiscoveryEnabled: input.endpointDiscoveryEnabled !== void 0
      });
    }
  });

  // node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/index.js
  var init_dist_es43 = __esm({
    "node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/index.js"() {
      init_configurations3();
      init_getEndpointDiscoveryPlugin();
      init_resolveEndpointDiscoveryConfig();
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/auth/httpAuthSchemeProvider.js
  function createAwsAuthSigv4HttpAuthOption2(authParameters) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "dynamodb",
        region: authParameters.region
      },
      propertiesExtractor: (config, context) => ({
        signingProperties: {
          config,
          context
        }
      })
    };
  }
  var defaultDynamoDBHttpAuthSchemeParametersProvider, defaultDynamoDBHttpAuthSchemeProvider, resolveHttpAuthSchemeConfig2;
  var init_httpAuthSchemeProvider2 = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/auth/httpAuthSchemeProvider.js"() {
      init_dist_es33();
      init_dist_es10();
      defaultDynamoDBHttpAuthSchemeParametersProvider = async (config, context, input) => {
        return {
          operation: getSmithyContext(context).operation,
          region: await normalizeProvider(config.region)() || (() => {
            throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
          })()
        };
      };
      defaultDynamoDBHttpAuthSchemeProvider = (authParameters) => {
        const options = [];
        switch (authParameters.operation) {
          default: {
            options.push(createAwsAuthSigv4HttpAuthOption2(authParameters));
          }
        }
        return options;
      };
      resolveHttpAuthSchemeConfig2 = (config) => {
        const config_0 = resolveAwsSdkSigV4Config(config);
        return {
          ...config_0
        };
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/EndpointParameters.js
  var resolveClientEndpointParameters2, commonParams2;
  var init_EndpointParameters2 = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/EndpointParameters.js"() {
      resolveClientEndpointParameters2 = (options) => {
        return {
          ...options,
          useDualstackEndpoint: options.useDualstackEndpoint ?? false,
          useFipsEndpoint: options.useFipsEndpoint ?? false,
          defaultSigningName: "dynamodb"
        };
      };
      commonParams2 = {
        UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
        Endpoint: { type: "builtInParams", name: "endpoint" },
        Region: { type: "builtInParams", name: "region" },
        UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
      };
    }
  });

  // node_modules/uuid/dist/esm-browser/rng.js
  function rng2() {
    if (!getRandomValues2) {
      getRandomValues2 = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
      if (!getRandomValues2) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues2(rnds82);
  }
  var getRandomValues2, rnds82;
  var init_rng2 = __esm({
    "node_modules/uuid/dist/esm-browser/rng.js"() {
      rnds82 = new Uint8Array(16);
    }
  });

  // node_modules/uuid/dist/esm-browser/stringify.js
  function unsafeStringify(arr, offset = 0) {
    return byteToHex2[arr[offset + 0]] + byteToHex2[arr[offset + 1]] + byteToHex2[arr[offset + 2]] + byteToHex2[arr[offset + 3]] + "-" + byteToHex2[arr[offset + 4]] + byteToHex2[arr[offset + 5]] + "-" + byteToHex2[arr[offset + 6]] + byteToHex2[arr[offset + 7]] + "-" + byteToHex2[arr[offset + 8]] + byteToHex2[arr[offset + 9]] + "-" + byteToHex2[arr[offset + 10]] + byteToHex2[arr[offset + 11]] + byteToHex2[arr[offset + 12]] + byteToHex2[arr[offset + 13]] + byteToHex2[arr[offset + 14]] + byteToHex2[arr[offset + 15]];
  }
  var byteToHex2;
  var init_stringify2 = __esm({
    "node_modules/uuid/dist/esm-browser/stringify.js"() {
      byteToHex2 = [];
      for (let i5 = 0; i5 < 256; ++i5) {
        byteToHex2.push((i5 + 256).toString(16).slice(1));
      }
    }
  });

  // node_modules/uuid/dist/esm-browser/native.js
  var randomUUID, native_default;
  var init_native = __esm({
    "node_modules/uuid/dist/esm-browser/native.js"() {
      randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
      native_default = {
        randomUUID
      };
    }
  });

  // node_modules/uuid/dist/esm-browser/v4.js
  function v42(options, buf, offset) {
    if (native_default.randomUUID && !buf && !options) {
      return native_default.randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || rng2)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i5 = 0; i5 < 16; ++i5) {
        buf[offset + i5] = rnds[i5];
      }
      return buf;
    }
    return unsafeStringify(rnds);
  }
  var v4_default2;
  var init_v42 = __esm({
    "node_modules/uuid/dist/esm-browser/v4.js"() {
      init_native();
      init_rng2();
      init_stringify2();
      v4_default2 = v42;
    }
  });

  // node_modules/uuid/dist/esm-browser/index.js
  var init_esm_browser2 = __esm({
    "node_modules/uuid/dist/esm-browser/index.js"() {
      init_v42();
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/models/DynamoDBServiceException.js
  var DynamoDBServiceException;
  var init_DynamoDBServiceException = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/models/DynamoDBServiceException.js"() {
      init_dist_es26();
      DynamoDBServiceException = class _DynamoDBServiceException extends ServiceException {
        constructor(options) {
          super(options);
          Object.setPrototypeOf(this, _DynamoDBServiceException.prototype);
        }
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/models/models_0.js
  var BackupInUseException, BackupNotFoundException, InternalServerError, RequestLimitExceeded, InvalidEndpointException, ProvisionedThroughputExceededException, ResourceNotFoundException2, ItemCollectionSizeLimitExceededException, ContinuousBackupsUnavailableException, LimitExceededException2, TableInUseException, TableNotFoundException, GlobalTableAlreadyExistsException, ResourceInUseException, TransactionConflictException, ExportNotFoundException, GlobalTableNotFoundException, ImportNotFoundException, DuplicateItemException, IdempotentParameterMismatchException, TransactionInProgressException, ExportConflictException, InvalidExportTimeException, PointInTimeRecoveryUnavailableException, ImportConflictException, TableAlreadyExistsException, InvalidRestoreTimeException, ReplicaAlreadyExistsException, ReplicaNotFoundException, IndexNotFoundException, AttributeValue, ConditionalCheckFailedException, TransactionCanceledException;
  var init_models_02 = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/models/models_0.js"() {
      init_DynamoDBServiceException();
      BackupInUseException = class _BackupInUseException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "BackupInUseException",
            $fault: "client",
            ...opts
          });
          this.name = "BackupInUseException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _BackupInUseException.prototype);
        }
      };
      BackupNotFoundException = class _BackupNotFoundException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "BackupNotFoundException",
            $fault: "client",
            ...opts
          });
          this.name = "BackupNotFoundException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _BackupNotFoundException.prototype);
        }
      };
      InternalServerError = class _InternalServerError extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "InternalServerError",
            $fault: "server",
            ...opts
          });
          this.name = "InternalServerError";
          this.$fault = "server";
          Object.setPrototypeOf(this, _InternalServerError.prototype);
        }
      };
      RequestLimitExceeded = class _RequestLimitExceeded extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "RequestLimitExceeded",
            $fault: "client",
            ...opts
          });
          this.name = "RequestLimitExceeded";
          this.$fault = "client";
          Object.setPrototypeOf(this, _RequestLimitExceeded.prototype);
        }
      };
      InvalidEndpointException = class _InvalidEndpointException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "InvalidEndpointException",
            $fault: "client",
            ...opts
          });
          this.name = "InvalidEndpointException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _InvalidEndpointException.prototype);
          this.Message = opts.Message;
        }
      };
      ProvisionedThroughputExceededException = class _ProvisionedThroughputExceededException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "ProvisionedThroughputExceededException",
            $fault: "client",
            ...opts
          });
          this.name = "ProvisionedThroughputExceededException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ProvisionedThroughputExceededException.prototype);
        }
      };
      ResourceNotFoundException2 = class _ResourceNotFoundException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts
          });
          this.name = "ResourceNotFoundException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
        }
      };
      ItemCollectionSizeLimitExceededException = class _ItemCollectionSizeLimitExceededException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "ItemCollectionSizeLimitExceededException",
            $fault: "client",
            ...opts
          });
          this.name = "ItemCollectionSizeLimitExceededException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ItemCollectionSizeLimitExceededException.prototype);
        }
      };
      ContinuousBackupsUnavailableException = class _ContinuousBackupsUnavailableException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "ContinuousBackupsUnavailableException",
            $fault: "client",
            ...opts
          });
          this.name = "ContinuousBackupsUnavailableException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ContinuousBackupsUnavailableException.prototype);
        }
      };
      LimitExceededException2 = class _LimitExceededException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts
          });
          this.name = "LimitExceededException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _LimitExceededException.prototype);
        }
      };
      TableInUseException = class _TableInUseException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "TableInUseException",
            $fault: "client",
            ...opts
          });
          this.name = "TableInUseException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _TableInUseException.prototype);
        }
      };
      TableNotFoundException = class _TableNotFoundException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "TableNotFoundException",
            $fault: "client",
            ...opts
          });
          this.name = "TableNotFoundException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _TableNotFoundException.prototype);
        }
      };
      GlobalTableAlreadyExistsException = class _GlobalTableAlreadyExistsException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "GlobalTableAlreadyExistsException",
            $fault: "client",
            ...opts
          });
          this.name = "GlobalTableAlreadyExistsException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _GlobalTableAlreadyExistsException.prototype);
        }
      };
      ResourceInUseException = class _ResourceInUseException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "ResourceInUseException",
            $fault: "client",
            ...opts
          });
          this.name = "ResourceInUseException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ResourceInUseException.prototype);
        }
      };
      TransactionConflictException = class _TransactionConflictException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "TransactionConflictException",
            $fault: "client",
            ...opts
          });
          this.name = "TransactionConflictException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _TransactionConflictException.prototype);
        }
      };
      ExportNotFoundException = class _ExportNotFoundException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "ExportNotFoundException",
            $fault: "client",
            ...opts
          });
          this.name = "ExportNotFoundException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ExportNotFoundException.prototype);
        }
      };
      GlobalTableNotFoundException = class _GlobalTableNotFoundException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "GlobalTableNotFoundException",
            $fault: "client",
            ...opts
          });
          this.name = "GlobalTableNotFoundException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _GlobalTableNotFoundException.prototype);
        }
      };
      ImportNotFoundException = class _ImportNotFoundException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "ImportNotFoundException",
            $fault: "client",
            ...opts
          });
          this.name = "ImportNotFoundException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ImportNotFoundException.prototype);
        }
      };
      DuplicateItemException = class _DuplicateItemException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "DuplicateItemException",
            $fault: "client",
            ...opts
          });
          this.name = "DuplicateItemException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _DuplicateItemException.prototype);
        }
      };
      IdempotentParameterMismatchException = class _IdempotentParameterMismatchException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "IdempotentParameterMismatchException",
            $fault: "client",
            ...opts
          });
          this.name = "IdempotentParameterMismatchException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _IdempotentParameterMismatchException.prototype);
          this.Message = opts.Message;
        }
      };
      TransactionInProgressException = class _TransactionInProgressException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "TransactionInProgressException",
            $fault: "client",
            ...opts
          });
          this.name = "TransactionInProgressException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _TransactionInProgressException.prototype);
          this.Message = opts.Message;
        }
      };
      ExportConflictException = class _ExportConflictException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "ExportConflictException",
            $fault: "client",
            ...opts
          });
          this.name = "ExportConflictException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ExportConflictException.prototype);
        }
      };
      InvalidExportTimeException = class _InvalidExportTimeException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "InvalidExportTimeException",
            $fault: "client",
            ...opts
          });
          this.name = "InvalidExportTimeException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _InvalidExportTimeException.prototype);
        }
      };
      PointInTimeRecoveryUnavailableException = class _PointInTimeRecoveryUnavailableException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "PointInTimeRecoveryUnavailableException",
            $fault: "client",
            ...opts
          });
          this.name = "PointInTimeRecoveryUnavailableException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _PointInTimeRecoveryUnavailableException.prototype);
        }
      };
      ImportConflictException = class _ImportConflictException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "ImportConflictException",
            $fault: "client",
            ...opts
          });
          this.name = "ImportConflictException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ImportConflictException.prototype);
        }
      };
      TableAlreadyExistsException = class _TableAlreadyExistsException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "TableAlreadyExistsException",
            $fault: "client",
            ...opts
          });
          this.name = "TableAlreadyExistsException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _TableAlreadyExistsException.prototype);
        }
      };
      InvalidRestoreTimeException = class _InvalidRestoreTimeException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "InvalidRestoreTimeException",
            $fault: "client",
            ...opts
          });
          this.name = "InvalidRestoreTimeException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _InvalidRestoreTimeException.prototype);
        }
      };
      ReplicaAlreadyExistsException = class _ReplicaAlreadyExistsException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "ReplicaAlreadyExistsException",
            $fault: "client",
            ...opts
          });
          this.name = "ReplicaAlreadyExistsException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ReplicaAlreadyExistsException.prototype);
        }
      };
      ReplicaNotFoundException = class _ReplicaNotFoundException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "ReplicaNotFoundException",
            $fault: "client",
            ...opts
          });
          this.name = "ReplicaNotFoundException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ReplicaNotFoundException.prototype);
        }
      };
      IndexNotFoundException = class _IndexNotFoundException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "IndexNotFoundException",
            $fault: "client",
            ...opts
          });
          this.name = "IndexNotFoundException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _IndexNotFoundException.prototype);
        }
      };
      (function(AttributeValue2) {
        AttributeValue2.visit = (value, visitor) => {
          if (value.S !== void 0)
            return visitor.S(value.S);
          if (value.N !== void 0)
            return visitor.N(value.N);
          if (value.B !== void 0)
            return visitor.B(value.B);
          if (value.SS !== void 0)
            return visitor.SS(value.SS);
          if (value.NS !== void 0)
            return visitor.NS(value.NS);
          if (value.BS !== void 0)
            return visitor.BS(value.BS);
          if (value.M !== void 0)
            return visitor.M(value.M);
          if (value.L !== void 0)
            return visitor.L(value.L);
          if (value.NULL !== void 0)
            return visitor.NULL(value.NULL);
          if (value.BOOL !== void 0)
            return visitor.BOOL(value.BOOL);
          return visitor._(value.$unknown[0], value.$unknown[1]);
        };
      })(AttributeValue || (AttributeValue = {}));
      ConditionalCheckFailedException = class _ConditionalCheckFailedException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "ConditionalCheckFailedException",
            $fault: "client",
            ...opts
          });
          this.name = "ConditionalCheckFailedException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _ConditionalCheckFailedException.prototype);
          this.Item = opts.Item;
        }
      };
      TransactionCanceledException = class _TransactionCanceledException extends DynamoDBServiceException {
        constructor(opts) {
          super({
            name: "TransactionCanceledException",
            $fault: "client",
            ...opts
          });
          this.name = "TransactionCanceledException";
          this.$fault = "client";
          Object.setPrototypeOf(this, _TransactionCanceledException.prototype);
          this.Message = opts.Message;
          this.CancellationReasons = opts.CancellationReasons;
        }
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/protocols/Aws_json1_0.js
  function sharedHeaders2(operation) {
    return {
      "content-type": "application/x-amz-json-1.0",
      "x-amz-target": `DynamoDB_20120810.${operation}`
    };
  }
  var se_BatchExecuteStatementCommand, se_BatchGetItemCommand, se_BatchWriteItemCommand, se_CreateBackupCommand, se_CreateGlobalTableCommand, se_CreateTableCommand, se_DeleteBackupCommand, se_DeleteItemCommand, se_DeleteTableCommand, se_DescribeBackupCommand, se_DescribeContinuousBackupsCommand, se_DescribeContributorInsightsCommand, se_DescribeEndpointsCommand, se_DescribeExportCommand, se_DescribeGlobalTableCommand, se_DescribeGlobalTableSettingsCommand, se_DescribeImportCommand, se_DescribeKinesisStreamingDestinationCommand, se_DescribeLimitsCommand, se_DescribeTableCommand, se_DescribeTableReplicaAutoScalingCommand, se_DescribeTimeToLiveCommand, se_DisableKinesisStreamingDestinationCommand, se_EnableKinesisStreamingDestinationCommand, se_ExecuteStatementCommand, se_ExecuteTransactionCommand, se_ExportTableToPointInTimeCommand, se_GetItemCommand, se_ImportTableCommand, se_ListBackupsCommand, se_ListContributorInsightsCommand, se_ListExportsCommand, se_ListGlobalTablesCommand, se_ListImportsCommand, se_ListTablesCommand, se_ListTagsOfResourceCommand, se_PutItemCommand, se_QueryCommand, se_RestoreTableFromBackupCommand, se_RestoreTableToPointInTimeCommand, se_ScanCommand, se_TagResourceCommand2, se_TransactGetItemsCommand, se_TransactWriteItemsCommand, se_UntagResourceCommand2, se_UpdateContinuousBackupsCommand, se_UpdateContributorInsightsCommand, se_UpdateGlobalTableCommand, se_UpdateGlobalTableSettingsCommand, se_UpdateItemCommand, se_UpdateKinesisStreamingDestinationCommand, se_UpdateTableCommand, se_UpdateTableReplicaAutoScalingCommand, se_UpdateTimeToLiveCommand, de_BatchExecuteStatementCommand, de_BatchGetItemCommand, de_BatchWriteItemCommand, de_CreateBackupCommand, de_CreateGlobalTableCommand, de_CreateTableCommand, de_DeleteBackupCommand, de_DeleteItemCommand, de_DeleteTableCommand, de_DescribeBackupCommand, de_DescribeContinuousBackupsCommand, de_DescribeContributorInsightsCommand, de_DescribeEndpointsCommand, de_DescribeExportCommand, de_DescribeGlobalTableCommand, de_DescribeGlobalTableSettingsCommand, de_DescribeImportCommand, de_DescribeKinesisStreamingDestinationCommand, de_DescribeLimitsCommand, de_DescribeTableCommand, de_DescribeTableReplicaAutoScalingCommand, de_DescribeTimeToLiveCommand, de_DisableKinesisStreamingDestinationCommand, de_EnableKinesisStreamingDestinationCommand, de_ExecuteStatementCommand, de_ExecuteTransactionCommand, de_ExportTableToPointInTimeCommand, de_GetItemCommand, de_ImportTableCommand, de_ListBackupsCommand, de_ListContributorInsightsCommand, de_ListExportsCommand, de_ListGlobalTablesCommand, de_ListImportsCommand, de_ListTablesCommand, de_ListTagsOfResourceCommand, de_PutItemCommand, de_QueryCommand, de_RestoreTableFromBackupCommand, de_RestoreTableToPointInTimeCommand, de_ScanCommand, de_TagResourceCommand2, de_TransactGetItemsCommand, de_TransactWriteItemsCommand, de_UntagResourceCommand2, de_UpdateContinuousBackupsCommand, de_UpdateContributorInsightsCommand, de_UpdateGlobalTableCommand, de_UpdateGlobalTableSettingsCommand, de_UpdateItemCommand, de_UpdateKinesisStreamingDestinationCommand, de_UpdateTableCommand, de_UpdateTableReplicaAutoScalingCommand, de_UpdateTimeToLiveCommand, de_CommandError2, de_BackupInUseExceptionRes, de_BackupNotFoundExceptionRes, de_ConditionalCheckFailedExceptionRes, de_ContinuousBackupsUnavailableExceptionRes, de_DuplicateItemExceptionRes, de_ExportConflictExceptionRes, de_ExportNotFoundExceptionRes, de_GlobalTableAlreadyExistsExceptionRes, de_GlobalTableNotFoundExceptionRes, de_IdempotentParameterMismatchExceptionRes, de_ImportConflictExceptionRes, de_ImportNotFoundExceptionRes, de_IndexNotFoundExceptionRes, de_InternalServerErrorRes, de_InvalidEndpointExceptionRes, de_InvalidExportTimeExceptionRes, de_InvalidRestoreTimeExceptionRes, de_ItemCollectionSizeLimitExceededExceptionRes, de_LimitExceededExceptionRes2, de_PointInTimeRecoveryUnavailableExceptionRes, de_ProvisionedThroughputExceededExceptionRes, de_ReplicaAlreadyExistsExceptionRes, de_ReplicaNotFoundExceptionRes, de_RequestLimitExceededRes, de_ResourceInUseExceptionRes, de_ResourceNotFoundExceptionRes2, de_TableAlreadyExistsExceptionRes, de_TableInUseExceptionRes, de_TableNotFoundExceptionRes, de_TransactionCanceledExceptionRes, de_TransactionConflictExceptionRes, de_TransactionInProgressExceptionRes, se_AttributeUpdates, se_AttributeValue, se_AttributeValueList, se_AttributeValueUpdate, se_AutoScalingPolicyUpdate, se_AutoScalingSettingsUpdate, se_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate, se_BatchExecuteStatementInput, se_BatchGetItemInput, se_BatchGetRequestMap, se_BatchStatementRequest, se_BatchWriteItemInput, se_BatchWriteItemRequestMap, se_BinarySetAttributeValue, se_Condition, se_ConditionCheck, se_Delete, se_DeleteItemInput, se_DeleteRequest, se_ExecuteStatementInput, se_ExecuteTransactionInput, se_ExpectedAttributeMap, se_ExpectedAttributeValue, se_ExportTableToPointInTimeInput, se_ExpressionAttributeValueMap, se_FilterConditionMap, se_Get, se_GetItemInput, se_GlobalSecondaryIndexAutoScalingUpdate, se_GlobalSecondaryIndexAutoScalingUpdateList, se_GlobalTableGlobalSecondaryIndexSettingsUpdate, se_GlobalTableGlobalSecondaryIndexSettingsUpdateList, se_ImportTableInput, se_IncrementalExportSpecification, se_Key, se_KeyConditions, se_KeyList, se_KeysAndAttributes, se_ListAttributeValue, se_ListBackupsInput, se_MapAttributeValue, se_ParameterizedStatement, se_ParameterizedStatements, se_PartiQLBatchRequest, se_PreparedStatementParameters, se_Put, se_PutItemInput, se_PutItemInputAttributeMap, se_PutRequest, se_QueryInput, se_ReplicaAutoScalingUpdate, se_ReplicaAutoScalingUpdateList, se_ReplicaGlobalSecondaryIndexAutoScalingUpdate, se_ReplicaGlobalSecondaryIndexAutoScalingUpdateList, se_ReplicaGlobalSecondaryIndexSettingsUpdate, se_ReplicaGlobalSecondaryIndexSettingsUpdateList, se_ReplicaSettingsUpdate, se_ReplicaSettingsUpdateList, se_RestoreTableToPointInTimeInput, se_ScanInput, se_TransactGetItem, se_TransactGetItemList, se_TransactGetItemsInput, se_TransactWriteItem, se_TransactWriteItemList, se_TransactWriteItemsInput, se_Update, se_UpdateGlobalTableSettingsInput, se_UpdateItemInput, se_UpdateTableReplicaAutoScalingInput, se_WriteRequest, se_WriteRequests, de_ArchivalSummary, de_AttributeMap, de_AttributeValue, de_AutoScalingPolicyDescription, de_AutoScalingPolicyDescriptionList, de_AutoScalingSettingsDescription, de_AutoScalingTargetTrackingScalingPolicyConfigurationDescription, de_BackupDescription, de_BackupDetails, de_BackupSummaries, de_BackupSummary, de_BatchExecuteStatementOutput, de_BatchGetItemOutput, de_BatchGetRequestMap, de_BatchGetResponseMap, de_BatchStatementError, de_BatchStatementResponse, de_BatchWriteItemOutput, de_BatchWriteItemRequestMap, de_BillingModeSummary, de_BinarySetAttributeValue, de_CancellationReason, de_CancellationReasonList, de_Capacity, de_ConditionalCheckFailedException, de_ConsumedCapacity, de_ConsumedCapacityMultiple, de_ContinuousBackupsDescription, de_CreateBackupOutput, de_CreateGlobalTableOutput, de_CreateTableOutput, de_DeleteBackupOutput, de_DeleteItemOutput, de_DeleteRequest, de_DeleteTableOutput, de_DescribeBackupOutput, de_DescribeContinuousBackupsOutput, de_DescribeContributorInsightsOutput, de_DescribeExportOutput, de_DescribeGlobalTableOutput, de_DescribeGlobalTableSettingsOutput, de_DescribeImportOutput, de_DescribeTableOutput, de_DescribeTableReplicaAutoScalingOutput, de_ExecuteStatementOutput, de_ExecuteTransactionOutput, de_ExportDescription, de_ExportTableToPointInTimeOutput, de_GetItemOutput, de_GlobalSecondaryIndexDescription, de_GlobalSecondaryIndexDescriptionList, de_GlobalTableDescription, de_ImportSummary, de_ImportSummaryList, de_ImportTableDescription, de_ImportTableOutput, de_IncrementalExportSpecification, de_ItemCollectionKeyAttributeMap, de_ItemCollectionMetrics, de_ItemCollectionMetricsMultiple, de_ItemCollectionMetricsPerTable, de_ItemCollectionSizeEstimateRange, de_ItemList, de_ItemResponse, de_ItemResponseList, de_Key, de_KeyList, de_KeysAndAttributes, de_ListAttributeValue, de_ListBackupsOutput, de_ListImportsOutput, de_MapAttributeValue, de_PartiQLBatchResponse, de_PointInTimeRecoveryDescription, de_ProvisionedThroughputDescription, de_PutItemInputAttributeMap, de_PutItemOutput, de_PutRequest, de_QueryOutput, de_ReplicaAutoScalingDescription, de_ReplicaAutoScalingDescriptionList, de_ReplicaDescription, de_ReplicaDescriptionList, de_ReplicaGlobalSecondaryIndexAutoScalingDescription, de_ReplicaGlobalSecondaryIndexAutoScalingDescriptionList, de_ReplicaGlobalSecondaryIndexSettingsDescription, de_ReplicaGlobalSecondaryIndexSettingsDescriptionList, de_ReplicaSettingsDescription, de_ReplicaSettingsDescriptionList, de_RestoreSummary, de_RestoreTableFromBackupOutput, de_RestoreTableToPointInTimeOutput, de_ScanOutput, de_SecondaryIndexesCapacityMap, de_SourceTableDetails, de_SourceTableFeatureDetails, de_SSEDescription, de_TableAutoScalingDescription, de_TableClassSummary, de_TableDescription, de_TransactGetItemsOutput, de_TransactionCanceledException, de_TransactWriteItemsOutput, de_UpdateContinuousBackupsOutput, de_UpdateGlobalTableOutput, de_UpdateGlobalTableSettingsOutput, de_UpdateItemOutput, de_UpdateTableOutput, de_UpdateTableReplicaAutoScalingOutput, de_WriteRequest, de_WriteRequests, deserializeMetadata3, throwDefaultError3, buildHttpRpcRequest2;
  var init_Aws_json1_0 = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/protocols/Aws_json1_0.js"() {
      init_dist_es33();
      init_dist_es2();
      init_dist_es26();
      init_esm_browser2();
      init_DynamoDBServiceException();
      init_models_02();
      se_BatchExecuteStatementCommand = async (input, context) => {
        const headers = sharedHeaders2("BatchExecuteStatement");
        let body;
        body = JSON.stringify(se_BatchExecuteStatementInput(input, context));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_BatchGetItemCommand = async (input, context) => {
        const headers = sharedHeaders2("BatchGetItem");
        let body;
        body = JSON.stringify(se_BatchGetItemInput(input, context));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_BatchWriteItemCommand = async (input, context) => {
        const headers = sharedHeaders2("BatchWriteItem");
        let body;
        body = JSON.stringify(se_BatchWriteItemInput(input, context));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_CreateBackupCommand = async (input, context) => {
        const headers = sharedHeaders2("CreateBackup");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_CreateGlobalTableCommand = async (input, context) => {
        const headers = sharedHeaders2("CreateGlobalTable");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_CreateTableCommand = async (input, context) => {
        const headers = sharedHeaders2("CreateTable");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_DeleteBackupCommand = async (input, context) => {
        const headers = sharedHeaders2("DeleteBackup");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_DeleteItemCommand = async (input, context) => {
        const headers = sharedHeaders2("DeleteItem");
        let body;
        body = JSON.stringify(se_DeleteItemInput(input, context));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_DeleteTableCommand = async (input, context) => {
        const headers = sharedHeaders2("DeleteTable");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_DescribeBackupCommand = async (input, context) => {
        const headers = sharedHeaders2("DescribeBackup");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_DescribeContinuousBackupsCommand = async (input, context) => {
        const headers = sharedHeaders2("DescribeContinuousBackups");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_DescribeContributorInsightsCommand = async (input, context) => {
        const headers = sharedHeaders2("DescribeContributorInsights");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_DescribeEndpointsCommand = async (input, context) => {
        const headers = sharedHeaders2("DescribeEndpoints");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_DescribeExportCommand = async (input, context) => {
        const headers = sharedHeaders2("DescribeExport");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_DescribeGlobalTableCommand = async (input, context) => {
        const headers = sharedHeaders2("DescribeGlobalTable");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_DescribeGlobalTableSettingsCommand = async (input, context) => {
        const headers = sharedHeaders2("DescribeGlobalTableSettings");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_DescribeImportCommand = async (input, context) => {
        const headers = sharedHeaders2("DescribeImport");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_DescribeKinesisStreamingDestinationCommand = async (input, context) => {
        const headers = sharedHeaders2("DescribeKinesisStreamingDestination");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_DescribeLimitsCommand = async (input, context) => {
        const headers = sharedHeaders2("DescribeLimits");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_DescribeTableCommand = async (input, context) => {
        const headers = sharedHeaders2("DescribeTable");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_DescribeTableReplicaAutoScalingCommand = async (input, context) => {
        const headers = sharedHeaders2("DescribeTableReplicaAutoScaling");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_DescribeTimeToLiveCommand = async (input, context) => {
        const headers = sharedHeaders2("DescribeTimeToLive");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_DisableKinesisStreamingDestinationCommand = async (input, context) => {
        const headers = sharedHeaders2("DisableKinesisStreamingDestination");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_EnableKinesisStreamingDestinationCommand = async (input, context) => {
        const headers = sharedHeaders2("EnableKinesisStreamingDestination");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_ExecuteStatementCommand = async (input, context) => {
        const headers = sharedHeaders2("ExecuteStatement");
        let body;
        body = JSON.stringify(se_ExecuteStatementInput(input, context));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_ExecuteTransactionCommand = async (input, context) => {
        const headers = sharedHeaders2("ExecuteTransaction");
        let body;
        body = JSON.stringify(se_ExecuteTransactionInput(input, context));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_ExportTableToPointInTimeCommand = async (input, context) => {
        const headers = sharedHeaders2("ExportTableToPointInTime");
        let body;
        body = JSON.stringify(se_ExportTableToPointInTimeInput(input, context));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_GetItemCommand = async (input, context) => {
        const headers = sharedHeaders2("GetItem");
        let body;
        body = JSON.stringify(se_GetItemInput(input, context));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_ImportTableCommand = async (input, context) => {
        const headers = sharedHeaders2("ImportTable");
        let body;
        body = JSON.stringify(se_ImportTableInput(input, context));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_ListBackupsCommand = async (input, context) => {
        const headers = sharedHeaders2("ListBackups");
        let body;
        body = JSON.stringify(se_ListBackupsInput(input, context));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_ListContributorInsightsCommand = async (input, context) => {
        const headers = sharedHeaders2("ListContributorInsights");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_ListExportsCommand = async (input, context) => {
        const headers = sharedHeaders2("ListExports");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_ListGlobalTablesCommand = async (input, context) => {
        const headers = sharedHeaders2("ListGlobalTables");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_ListImportsCommand = async (input, context) => {
        const headers = sharedHeaders2("ListImports");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_ListTablesCommand = async (input, context) => {
        const headers = sharedHeaders2("ListTables");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_ListTagsOfResourceCommand = async (input, context) => {
        const headers = sharedHeaders2("ListTagsOfResource");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_PutItemCommand = async (input, context) => {
        const headers = sharedHeaders2("PutItem");
        let body;
        body = JSON.stringify(se_PutItemInput(input, context));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_QueryCommand = async (input, context) => {
        const headers = sharedHeaders2("Query");
        let body;
        body = JSON.stringify(se_QueryInput(input, context));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_RestoreTableFromBackupCommand = async (input, context) => {
        const headers = sharedHeaders2("RestoreTableFromBackup");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_RestoreTableToPointInTimeCommand = async (input, context) => {
        const headers = sharedHeaders2("RestoreTableToPointInTime");
        let body;
        body = JSON.stringify(se_RestoreTableToPointInTimeInput(input, context));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_ScanCommand = async (input, context) => {
        const headers = sharedHeaders2("Scan");
        let body;
        body = JSON.stringify(se_ScanInput(input, context));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_TagResourceCommand2 = async (input, context) => {
        const headers = sharedHeaders2("TagResource");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_TransactGetItemsCommand = async (input, context) => {
        const headers = sharedHeaders2("TransactGetItems");
        let body;
        body = JSON.stringify(se_TransactGetItemsInput(input, context));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_TransactWriteItemsCommand = async (input, context) => {
        const headers = sharedHeaders2("TransactWriteItems");
        let body;
        body = JSON.stringify(se_TransactWriteItemsInput(input, context));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_UntagResourceCommand2 = async (input, context) => {
        const headers = sharedHeaders2("UntagResource");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_UpdateContinuousBackupsCommand = async (input, context) => {
        const headers = sharedHeaders2("UpdateContinuousBackups");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_UpdateContributorInsightsCommand = async (input, context) => {
        const headers = sharedHeaders2("UpdateContributorInsights");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_UpdateGlobalTableCommand = async (input, context) => {
        const headers = sharedHeaders2("UpdateGlobalTable");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_UpdateGlobalTableSettingsCommand = async (input, context) => {
        const headers = sharedHeaders2("UpdateGlobalTableSettings");
        let body;
        body = JSON.stringify(se_UpdateGlobalTableSettingsInput(input, context));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_UpdateItemCommand = async (input, context) => {
        const headers = sharedHeaders2("UpdateItem");
        let body;
        body = JSON.stringify(se_UpdateItemInput(input, context));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_UpdateKinesisStreamingDestinationCommand = async (input, context) => {
        const headers = sharedHeaders2("UpdateKinesisStreamingDestination");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_UpdateTableCommand = async (input, context) => {
        const headers = sharedHeaders2("UpdateTable");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_UpdateTableReplicaAutoScalingCommand = async (input, context) => {
        const headers = sharedHeaders2("UpdateTableReplicaAutoScaling");
        let body;
        body = JSON.stringify(se_UpdateTableReplicaAutoScalingInput(input, context));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      se_UpdateTimeToLiveCommand = async (input, context) => {
        const headers = sharedHeaders2("UpdateTimeToLive");
        let body;
        body = JSON.stringify(_json(input));
        return buildHttpRpcRequest2(context, headers, "/", void 0, body);
      };
      de_BatchExecuteStatementCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_BatchExecuteStatementOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_BatchGetItemCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_BatchGetItemOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_BatchWriteItemCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_BatchWriteItemOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_CreateBackupCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_CreateBackupOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_CreateGlobalTableCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_CreateGlobalTableOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_CreateTableCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_CreateTableOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_DeleteBackupCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_DeleteBackupOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_DeleteItemCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_DeleteItemOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_DeleteTableCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_DeleteTableOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_DescribeBackupCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_DescribeBackupOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_DescribeContinuousBackupsCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_DescribeContinuousBackupsOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_DescribeContributorInsightsCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_DescribeContributorInsightsOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_DescribeEndpointsCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_DescribeExportCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_DescribeExportOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_DescribeGlobalTableCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_DescribeGlobalTableOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_DescribeGlobalTableSettingsCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_DescribeGlobalTableSettingsOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_DescribeImportCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_DescribeImportOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_DescribeKinesisStreamingDestinationCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_DescribeLimitsCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_DescribeTableCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_DescribeTableOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_DescribeTableReplicaAutoScalingCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_DescribeTableReplicaAutoScalingOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_DescribeTimeToLiveCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_DisableKinesisStreamingDestinationCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_EnableKinesisStreamingDestinationCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_ExecuteStatementCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_ExecuteStatementOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_ExecuteTransactionCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_ExecuteTransactionOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_ExportTableToPointInTimeCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_ExportTableToPointInTimeOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_GetItemCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_GetItemOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_ImportTableCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_ImportTableOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_ListBackupsCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_ListBackupsOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_ListContributorInsightsCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_ListExportsCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_ListGlobalTablesCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_ListImportsCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_ListImportsOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_ListTablesCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_ListTagsOfResourceCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_PutItemCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_PutItemOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_QueryCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_QueryOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_RestoreTableFromBackupCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_RestoreTableFromBackupOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_RestoreTableToPointInTimeCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_RestoreTableToPointInTimeOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_ScanCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_ScanOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_TagResourceCommand2 = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        await collectBody(output.body, context);
        const response = {
          $metadata: deserializeMetadata3(output)
        };
        return response;
      };
      de_TransactGetItemsCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_TransactGetItemsOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_TransactWriteItemsCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_TransactWriteItemsOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_UntagResourceCommand2 = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        await collectBody(output.body, context);
        const response = {
          $metadata: deserializeMetadata3(output)
        };
        return response;
      };
      de_UpdateContinuousBackupsCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_UpdateContinuousBackupsOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_UpdateContributorInsightsCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_UpdateGlobalTableCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_UpdateGlobalTableOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_UpdateGlobalTableSettingsCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_UpdateGlobalTableSettingsOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_UpdateItemCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_UpdateItemOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_UpdateKinesisStreamingDestinationCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_UpdateTableCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_UpdateTableOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_UpdateTableReplicaAutoScalingCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = de_UpdateTableReplicaAutoScalingOutput(data, context);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_UpdateTimeToLiveCommand = async (output, context) => {
        if (output.statusCode >= 300) {
          return de_CommandError2(output, context);
        }
        const data = await parseJsonBody(output.body, context);
        let contents = {};
        contents = _json(data);
        const response = {
          $metadata: deserializeMetadata3(output),
          ...contents
        };
        return response;
      };
      de_CommandError2 = async (output, context) => {
        const parsedOutput = {
          ...output,
          body: await parseJsonErrorBody(output.body, context)
        };
        const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
        switch (errorCode) {
          case "InternalServerError":
          case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
          case "RequestLimitExceeded":
          case "com.amazonaws.dynamodb#RequestLimitExceeded":
            throw await de_RequestLimitExceededRes(parsedOutput, context);
          case "InvalidEndpointException":
          case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
          case "ProvisionedThroughputExceededException":
          case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
          case "ResourceNotFoundException":
          case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes2(parsedOutput, context);
          case "ItemCollectionSizeLimitExceededException":
          case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
            throw await de_ItemCollectionSizeLimitExceededExceptionRes(parsedOutput, context);
          case "BackupInUseException":
          case "com.amazonaws.dynamodb#BackupInUseException":
            throw await de_BackupInUseExceptionRes(parsedOutput, context);
          case "ContinuousBackupsUnavailableException":
          case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":
            throw await de_ContinuousBackupsUnavailableExceptionRes(parsedOutput, context);
          case "LimitExceededException":
          case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes2(parsedOutput, context);
          case "TableInUseException":
          case "com.amazonaws.dynamodb#TableInUseException":
            throw await de_TableInUseExceptionRes(parsedOutput, context);
          case "TableNotFoundException":
          case "com.amazonaws.dynamodb#TableNotFoundException":
            throw await de_TableNotFoundExceptionRes(parsedOutput, context);
          case "GlobalTableAlreadyExistsException":
          case "com.amazonaws.dynamodb#GlobalTableAlreadyExistsException":
            throw await de_GlobalTableAlreadyExistsExceptionRes(parsedOutput, context);
          case "ResourceInUseException":
          case "com.amazonaws.dynamodb#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
          case "BackupNotFoundException":
          case "com.amazonaws.dynamodb#BackupNotFoundException":
            throw await de_BackupNotFoundExceptionRes(parsedOutput, context);
          case "ConditionalCheckFailedException":
          case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
            throw await de_ConditionalCheckFailedExceptionRes(parsedOutput, context);
          case "TransactionConflictException":
          case "com.amazonaws.dynamodb#TransactionConflictException":
            throw await de_TransactionConflictExceptionRes(parsedOutput, context);
          case "ExportNotFoundException":
          case "com.amazonaws.dynamodb#ExportNotFoundException":
            throw await de_ExportNotFoundExceptionRes(parsedOutput, context);
          case "GlobalTableNotFoundException":
          case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
            throw await de_GlobalTableNotFoundExceptionRes(parsedOutput, context);
          case "ImportNotFoundException":
          case "com.amazonaws.dynamodb#ImportNotFoundException":
            throw await de_ImportNotFoundExceptionRes(parsedOutput, context);
          case "DuplicateItemException":
          case "com.amazonaws.dynamodb#DuplicateItemException":
            throw await de_DuplicateItemExceptionRes(parsedOutput, context);
          case "IdempotentParameterMismatchException":
          case "com.amazonaws.dynamodb#IdempotentParameterMismatchException":
            throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
          case "TransactionCanceledException":
          case "com.amazonaws.dynamodb#TransactionCanceledException":
            throw await de_TransactionCanceledExceptionRes(parsedOutput, context);
          case "TransactionInProgressException":
          case "com.amazonaws.dynamodb#TransactionInProgressException":
            throw await de_TransactionInProgressExceptionRes(parsedOutput, context);
          case "ExportConflictException":
          case "com.amazonaws.dynamodb#ExportConflictException":
            throw await de_ExportConflictExceptionRes(parsedOutput, context);
          case "InvalidExportTimeException":
          case "com.amazonaws.dynamodb#InvalidExportTimeException":
            throw await de_InvalidExportTimeExceptionRes(parsedOutput, context);
          case "PointInTimeRecoveryUnavailableException":
          case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":
            throw await de_PointInTimeRecoveryUnavailableExceptionRes(parsedOutput, context);
          case "ImportConflictException":
          case "com.amazonaws.dynamodb#ImportConflictException":
            throw await de_ImportConflictExceptionRes(parsedOutput, context);
          case "TableAlreadyExistsException":
          case "com.amazonaws.dynamodb#TableAlreadyExistsException":
            throw await de_TableAlreadyExistsExceptionRes(parsedOutput, context);
          case "InvalidRestoreTimeException":
          case "com.amazonaws.dynamodb#InvalidRestoreTimeException":
            throw await de_InvalidRestoreTimeExceptionRes(parsedOutput, context);
          case "ReplicaAlreadyExistsException":
          case "com.amazonaws.dynamodb#ReplicaAlreadyExistsException":
            throw await de_ReplicaAlreadyExistsExceptionRes(parsedOutput, context);
          case "ReplicaNotFoundException":
          case "com.amazonaws.dynamodb#ReplicaNotFoundException":
            throw await de_ReplicaNotFoundExceptionRes(parsedOutput, context);
          case "IndexNotFoundException":
          case "com.amazonaws.dynamodb#IndexNotFoundException":
            throw await de_IndexNotFoundExceptionRes(parsedOutput, context);
          default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError3({
              output,
              parsedBody,
              errorCode
            });
        }
      };
      de_BackupInUseExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new BackupInUseException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_BackupNotFoundExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new BackupNotFoundException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_ConditionalCheckFailedExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = de_ConditionalCheckFailedException(body, context);
        const exception = new ConditionalCheckFailedException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_ContinuousBackupsUnavailableExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new ContinuousBackupsUnavailableException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_DuplicateItemExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new DuplicateItemException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_ExportConflictExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new ExportConflictException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_ExportNotFoundExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new ExportNotFoundException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_GlobalTableAlreadyExistsExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new GlobalTableAlreadyExistsException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_GlobalTableNotFoundExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new GlobalTableNotFoundException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_IdempotentParameterMismatchExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new IdempotentParameterMismatchException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_ImportConflictExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new ImportConflictException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_ImportNotFoundExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new ImportNotFoundException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_IndexNotFoundExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new IndexNotFoundException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_InternalServerErrorRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new InternalServerError({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_InvalidEndpointExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new InvalidEndpointException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_InvalidExportTimeExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new InvalidExportTimeException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_InvalidRestoreTimeExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new InvalidRestoreTimeException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_ItemCollectionSizeLimitExceededExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new ItemCollectionSizeLimitExceededException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_LimitExceededExceptionRes2 = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new LimitExceededException2({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_PointInTimeRecoveryUnavailableExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new PointInTimeRecoveryUnavailableException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_ProvisionedThroughputExceededExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new ProvisionedThroughputExceededException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_ReplicaAlreadyExistsExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new ReplicaAlreadyExistsException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_ReplicaNotFoundExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new ReplicaNotFoundException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_RequestLimitExceededRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new RequestLimitExceeded({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_ResourceInUseExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new ResourceInUseException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_ResourceNotFoundExceptionRes2 = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new ResourceNotFoundException2({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_TableAlreadyExistsExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new TableAlreadyExistsException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_TableInUseExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new TableInUseException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_TableNotFoundExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new TableNotFoundException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_TransactionCanceledExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = de_TransactionCanceledException(body, context);
        const exception = new TransactionCanceledException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_TransactionConflictExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new TransactionConflictException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      de_TransactionInProgressExceptionRes = async (parsedOutput, context) => {
        const body = parsedOutput.body;
        const deserialized = _json(body);
        const exception = new TransactionInProgressException({
          $metadata: deserializeMetadata3(parsedOutput),
          ...deserialized
        });
        return decorateServiceException(exception, body);
      };
      se_AttributeUpdates = (input, context) => {
        return Object.entries(input).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = se_AttributeValueUpdate(value, context);
          return acc;
        }, {});
      };
      se_AttributeValue = (input, context) => {
        return AttributeValue.visit(input, {
          B: (value) => ({ B: context.base64Encoder(value) }),
          BOOL: (value) => ({ BOOL: value }),
          BS: (value) => ({ BS: se_BinarySetAttributeValue(value, context) }),
          L: (value) => ({ L: se_ListAttributeValue(value, context) }),
          M: (value) => ({ M: se_MapAttributeValue(value, context) }),
          N: (value) => ({ N: value }),
          NS: (value) => ({ NS: _json(value) }),
          NULL: (value) => ({ NULL: value }),
          S: (value) => ({ S: value }),
          SS: (value) => ({ SS: _json(value) }),
          _: (name, value) => ({ name: value })
        });
      };
      se_AttributeValueList = (input, context) => {
        return input.filter((e5) => e5 != null).map((entry) => {
          return se_AttributeValue(entry, context);
        });
      };
      se_AttributeValueUpdate = (input, context) => {
        return take(input, {
          Action: [],
          Value: (_3) => se_AttributeValue(_3, context)
        });
      };
      se_AutoScalingPolicyUpdate = (input, context) => {
        return take(input, {
          PolicyName: [],
          TargetTrackingScalingPolicyConfiguration: (_3) => se_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate(_3, context)
        });
      };
      se_AutoScalingSettingsUpdate = (input, context) => {
        return take(input, {
          AutoScalingDisabled: [],
          AutoScalingRoleArn: [],
          MaximumUnits: [],
          MinimumUnits: [],
          ScalingPolicyUpdate: (_3) => se_AutoScalingPolicyUpdate(_3, context)
        });
      };
      se_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = (input, context) => {
        return take(input, {
          DisableScaleIn: [],
          ScaleInCooldown: [],
          ScaleOutCooldown: [],
          TargetValue: serializeFloat
        });
      };
      se_BatchExecuteStatementInput = (input, context) => {
        return take(input, {
          ReturnConsumedCapacity: [],
          Statements: (_3) => se_PartiQLBatchRequest(_3, context)
        });
      };
      se_BatchGetItemInput = (input, context) => {
        return take(input, {
          RequestItems: (_3) => se_BatchGetRequestMap(_3, context),
          ReturnConsumedCapacity: []
        });
      };
      se_BatchGetRequestMap = (input, context) => {
        return Object.entries(input).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = se_KeysAndAttributes(value, context);
          return acc;
        }, {});
      };
      se_BatchStatementRequest = (input, context) => {
        return take(input, {
          ConsistentRead: [],
          Parameters: (_3) => se_PreparedStatementParameters(_3, context),
          ReturnValuesOnConditionCheckFailure: [],
          Statement: []
        });
      };
      se_BatchWriteItemInput = (input, context) => {
        return take(input, {
          RequestItems: (_3) => se_BatchWriteItemRequestMap(_3, context),
          ReturnConsumedCapacity: [],
          ReturnItemCollectionMetrics: []
        });
      };
      se_BatchWriteItemRequestMap = (input, context) => {
        return Object.entries(input).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = se_WriteRequests(value, context);
          return acc;
        }, {});
      };
      se_BinarySetAttributeValue = (input, context) => {
        return input.filter((e5) => e5 != null).map((entry) => {
          return context.base64Encoder(entry);
        });
      };
      se_Condition = (input, context) => {
        return take(input, {
          AttributeValueList: (_3) => se_AttributeValueList(_3, context),
          ComparisonOperator: []
        });
      };
      se_ConditionCheck = (input, context) => {
        return take(input, {
          ConditionExpression: [],
          ExpressionAttributeNames: _json,
          ExpressionAttributeValues: (_3) => se_ExpressionAttributeValueMap(_3, context),
          Key: (_3) => se_Key(_3, context),
          ReturnValuesOnConditionCheckFailure: [],
          TableName: []
        });
      };
      se_Delete = (input, context) => {
        return take(input, {
          ConditionExpression: [],
          ExpressionAttributeNames: _json,
          ExpressionAttributeValues: (_3) => se_ExpressionAttributeValueMap(_3, context),
          Key: (_3) => se_Key(_3, context),
          ReturnValuesOnConditionCheckFailure: [],
          TableName: []
        });
      };
      se_DeleteItemInput = (input, context) => {
        return take(input, {
          ConditionExpression: [],
          ConditionalOperator: [],
          Expected: (_3) => se_ExpectedAttributeMap(_3, context),
          ExpressionAttributeNames: _json,
          ExpressionAttributeValues: (_3) => se_ExpressionAttributeValueMap(_3, context),
          Key: (_3) => se_Key(_3, context),
          ReturnConsumedCapacity: [],
          ReturnItemCollectionMetrics: [],
          ReturnValues: [],
          ReturnValuesOnConditionCheckFailure: [],
          TableName: []
        });
      };
      se_DeleteRequest = (input, context) => {
        return take(input, {
          Key: (_3) => se_Key(_3, context)
        });
      };
      se_ExecuteStatementInput = (input, context) => {
        return take(input, {
          ConsistentRead: [],
          Limit: [],
          NextToken: [],
          Parameters: (_3) => se_PreparedStatementParameters(_3, context),
          ReturnConsumedCapacity: [],
          ReturnValuesOnConditionCheckFailure: [],
          Statement: []
        });
      };
      se_ExecuteTransactionInput = (input, context) => {
        return take(input, {
          ClientRequestToken: [true, (_3) => _3 ?? v4_default2()],
          ReturnConsumedCapacity: [],
          TransactStatements: (_3) => se_ParameterizedStatements(_3, context)
        });
      };
      se_ExpectedAttributeMap = (input, context) => {
        return Object.entries(input).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = se_ExpectedAttributeValue(value, context);
          return acc;
        }, {});
      };
      se_ExpectedAttributeValue = (input, context) => {
        return take(input, {
          AttributeValueList: (_3) => se_AttributeValueList(_3, context),
          ComparisonOperator: [],
          Exists: [],
          Value: (_3) => se_AttributeValue(_3, context)
        });
      };
      se_ExportTableToPointInTimeInput = (input, context) => {
        return take(input, {
          ClientToken: [true, (_3) => _3 ?? v4_default2()],
          ExportFormat: [],
          ExportTime: (_3) => Math.round(_3.getTime() / 1e3),
          ExportType: [],
          IncrementalExportSpecification: (_3) => se_IncrementalExportSpecification(_3, context),
          S3Bucket: [],
          S3BucketOwner: [],
          S3Prefix: [],
          S3SseAlgorithm: [],
          S3SseKmsKeyId: [],
          TableArn: []
        });
      };
      se_ExpressionAttributeValueMap = (input, context) => {
        return Object.entries(input).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = se_AttributeValue(value, context);
          return acc;
        }, {});
      };
      se_FilterConditionMap = (input, context) => {
        return Object.entries(input).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = se_Condition(value, context);
          return acc;
        }, {});
      };
      se_Get = (input, context) => {
        return take(input, {
          ExpressionAttributeNames: _json,
          Key: (_3) => se_Key(_3, context),
          ProjectionExpression: [],
          TableName: []
        });
      };
      se_GetItemInput = (input, context) => {
        return take(input, {
          AttributesToGet: _json,
          ConsistentRead: [],
          ExpressionAttributeNames: _json,
          Key: (_3) => se_Key(_3, context),
          ProjectionExpression: [],
          ReturnConsumedCapacity: [],
          TableName: []
        });
      };
      se_GlobalSecondaryIndexAutoScalingUpdate = (input, context) => {
        return take(input, {
          IndexName: [],
          ProvisionedWriteCapacityAutoScalingUpdate: (_3) => se_AutoScalingSettingsUpdate(_3, context)
        });
      };
      se_GlobalSecondaryIndexAutoScalingUpdateList = (input, context) => {
        return input.filter((e5) => e5 != null).map((entry) => {
          return se_GlobalSecondaryIndexAutoScalingUpdate(entry, context);
        });
      };
      se_GlobalTableGlobalSecondaryIndexSettingsUpdate = (input, context) => {
        return take(input, {
          IndexName: [],
          ProvisionedWriteCapacityAutoScalingSettingsUpdate: (_3) => se_AutoScalingSettingsUpdate(_3, context),
          ProvisionedWriteCapacityUnits: []
        });
      };
      se_GlobalTableGlobalSecondaryIndexSettingsUpdateList = (input, context) => {
        return input.filter((e5) => e5 != null).map((entry) => {
          return se_GlobalTableGlobalSecondaryIndexSettingsUpdate(entry, context);
        });
      };
      se_ImportTableInput = (input, context) => {
        return take(input, {
          ClientToken: [true, (_3) => _3 ?? v4_default2()],
          InputCompressionType: [],
          InputFormat: [],
          InputFormatOptions: _json,
          S3BucketSource: _json,
          TableCreationParameters: _json
        });
      };
      se_IncrementalExportSpecification = (input, context) => {
        return take(input, {
          ExportFromTime: (_3) => Math.round(_3.getTime() / 1e3),
          ExportToTime: (_3) => Math.round(_3.getTime() / 1e3),
          ExportViewType: []
        });
      };
      se_Key = (input, context) => {
        return Object.entries(input).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = se_AttributeValue(value, context);
          return acc;
        }, {});
      };
      se_KeyConditions = (input, context) => {
        return Object.entries(input).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = se_Condition(value, context);
          return acc;
        }, {});
      };
      se_KeyList = (input, context) => {
        return input.filter((e5) => e5 != null).map((entry) => {
          return se_Key(entry, context);
        });
      };
      se_KeysAndAttributes = (input, context) => {
        return take(input, {
          AttributesToGet: _json,
          ConsistentRead: [],
          ExpressionAttributeNames: _json,
          Keys: (_3) => se_KeyList(_3, context),
          ProjectionExpression: []
        });
      };
      se_ListAttributeValue = (input, context) => {
        return input.filter((e5) => e5 != null).map((entry) => {
          return se_AttributeValue(entry, context);
        });
      };
      se_ListBackupsInput = (input, context) => {
        return take(input, {
          BackupType: [],
          ExclusiveStartBackupArn: [],
          Limit: [],
          TableName: [],
          TimeRangeLowerBound: (_3) => Math.round(_3.getTime() / 1e3),
          TimeRangeUpperBound: (_3) => Math.round(_3.getTime() / 1e3)
        });
      };
      se_MapAttributeValue = (input, context) => {
        return Object.entries(input).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = se_AttributeValue(value, context);
          return acc;
        }, {});
      };
      se_ParameterizedStatement = (input, context) => {
        return take(input, {
          Parameters: (_3) => se_PreparedStatementParameters(_3, context),
          ReturnValuesOnConditionCheckFailure: [],
          Statement: []
        });
      };
      se_ParameterizedStatements = (input, context) => {
        return input.filter((e5) => e5 != null).map((entry) => {
          return se_ParameterizedStatement(entry, context);
        });
      };
      se_PartiQLBatchRequest = (input, context) => {
        return input.filter((e5) => e5 != null).map((entry) => {
          return se_BatchStatementRequest(entry, context);
        });
      };
      se_PreparedStatementParameters = (input, context) => {
        return input.filter((e5) => e5 != null).map((entry) => {
          return se_AttributeValue(entry, context);
        });
      };
      se_Put = (input, context) => {
        return take(input, {
          ConditionExpression: [],
          ExpressionAttributeNames: _json,
          ExpressionAttributeValues: (_3) => se_ExpressionAttributeValueMap(_3, context),
          Item: (_3) => se_PutItemInputAttributeMap(_3, context),
          ReturnValuesOnConditionCheckFailure: [],
          TableName: []
        });
      };
      se_PutItemInput = (input, context) => {
        return take(input, {
          ConditionExpression: [],
          ConditionalOperator: [],
          Expected: (_3) => se_ExpectedAttributeMap(_3, context),
          ExpressionAttributeNames: _json,
          ExpressionAttributeValues: (_3) => se_ExpressionAttributeValueMap(_3, context),
          Item: (_3) => se_PutItemInputAttributeMap(_3, context),
          ReturnConsumedCapacity: [],
          ReturnItemCollectionMetrics: [],
          ReturnValues: [],
          ReturnValuesOnConditionCheckFailure: [],
          TableName: []
        });
      };
      se_PutItemInputAttributeMap = (input, context) => {
        return Object.entries(input).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = se_AttributeValue(value, context);
          return acc;
        }, {});
      };
      se_PutRequest = (input, context) => {
        return take(input, {
          Item: (_3) => se_PutItemInputAttributeMap(_3, context)
        });
      };
      se_QueryInput = (input, context) => {
        return take(input, {
          AttributesToGet: _json,
          ConditionalOperator: [],
          ConsistentRead: [],
          ExclusiveStartKey: (_3) => se_Key(_3, context),
          ExpressionAttributeNames: _json,
          ExpressionAttributeValues: (_3) => se_ExpressionAttributeValueMap(_3, context),
          FilterExpression: [],
          IndexName: [],
          KeyConditionExpression: [],
          KeyConditions: (_3) => se_KeyConditions(_3, context),
          Limit: [],
          ProjectionExpression: [],
          QueryFilter: (_3) => se_FilterConditionMap(_3, context),
          ReturnConsumedCapacity: [],
          ScanIndexForward: [],
          Select: [],
          TableName: []
        });
      };
      se_ReplicaAutoScalingUpdate = (input, context) => {
        return take(input, {
          RegionName: [],
          ReplicaGlobalSecondaryIndexUpdates: (_3) => se_ReplicaGlobalSecondaryIndexAutoScalingUpdateList(_3, context),
          ReplicaProvisionedReadCapacityAutoScalingUpdate: (_3) => se_AutoScalingSettingsUpdate(_3, context)
        });
      };
      se_ReplicaAutoScalingUpdateList = (input, context) => {
        return input.filter((e5) => e5 != null).map((entry) => {
          return se_ReplicaAutoScalingUpdate(entry, context);
        });
      };
      se_ReplicaGlobalSecondaryIndexAutoScalingUpdate = (input, context) => {
        return take(input, {
          IndexName: [],
          ProvisionedReadCapacityAutoScalingUpdate: (_3) => se_AutoScalingSettingsUpdate(_3, context)
        });
      };
      se_ReplicaGlobalSecondaryIndexAutoScalingUpdateList = (input, context) => {
        return input.filter((e5) => e5 != null).map((entry) => {
          return se_ReplicaGlobalSecondaryIndexAutoScalingUpdate(entry, context);
        });
      };
      se_ReplicaGlobalSecondaryIndexSettingsUpdate = (input, context) => {
        return take(input, {
          IndexName: [],
          ProvisionedReadCapacityAutoScalingSettingsUpdate: (_3) => se_AutoScalingSettingsUpdate(_3, context),
          ProvisionedReadCapacityUnits: []
        });
      };
      se_ReplicaGlobalSecondaryIndexSettingsUpdateList = (input, context) => {
        return input.filter((e5) => e5 != null).map((entry) => {
          return se_ReplicaGlobalSecondaryIndexSettingsUpdate(entry, context);
        });
      };
      se_ReplicaSettingsUpdate = (input, context) => {
        return take(input, {
          RegionName: [],
          ReplicaGlobalSecondaryIndexSettingsUpdate: (_3) => se_ReplicaGlobalSecondaryIndexSettingsUpdateList(_3, context),
          ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate: (_3) => se_AutoScalingSettingsUpdate(_3, context),
          ReplicaProvisionedReadCapacityUnits: [],
          ReplicaTableClass: []
        });
      };
      se_ReplicaSettingsUpdateList = (input, context) => {
        return input.filter((e5) => e5 != null).map((entry) => {
          return se_ReplicaSettingsUpdate(entry, context);
        });
      };
      se_RestoreTableToPointInTimeInput = (input, context) => {
        return take(input, {
          BillingModeOverride: [],
          GlobalSecondaryIndexOverride: _json,
          LocalSecondaryIndexOverride: _json,
          ProvisionedThroughputOverride: _json,
          RestoreDateTime: (_3) => Math.round(_3.getTime() / 1e3),
          SSESpecificationOverride: _json,
          SourceTableArn: [],
          SourceTableName: [],
          TargetTableName: [],
          UseLatestRestorableTime: []
        });
      };
      se_ScanInput = (input, context) => {
        return take(input, {
          AttributesToGet: _json,
          ConditionalOperator: [],
          ConsistentRead: [],
          ExclusiveStartKey: (_3) => se_Key(_3, context),
          ExpressionAttributeNames: _json,
          ExpressionAttributeValues: (_3) => se_ExpressionAttributeValueMap(_3, context),
          FilterExpression: [],
          IndexName: [],
          Limit: [],
          ProjectionExpression: [],
          ReturnConsumedCapacity: [],
          ScanFilter: (_3) => se_FilterConditionMap(_3, context),
          Segment: [],
          Select: [],
          TableName: [],
          TotalSegments: []
        });
      };
      se_TransactGetItem = (input, context) => {
        return take(input, {
          Get: (_3) => se_Get(_3, context)
        });
      };
      se_TransactGetItemList = (input, context) => {
        return input.filter((e5) => e5 != null).map((entry) => {
          return se_TransactGetItem(entry, context);
        });
      };
      se_TransactGetItemsInput = (input, context) => {
        return take(input, {
          ReturnConsumedCapacity: [],
          TransactItems: (_3) => se_TransactGetItemList(_3, context)
        });
      };
      se_TransactWriteItem = (input, context) => {
        return take(input, {
          ConditionCheck: (_3) => se_ConditionCheck(_3, context),
          Delete: (_3) => se_Delete(_3, context),
          Put: (_3) => se_Put(_3, context),
          Update: (_3) => se_Update(_3, context)
        });
      };
      se_TransactWriteItemList = (input, context) => {
        return input.filter((e5) => e5 != null).map((entry) => {
          return se_TransactWriteItem(entry, context);
        });
      };
      se_TransactWriteItemsInput = (input, context) => {
        return take(input, {
          ClientRequestToken: [true, (_3) => _3 ?? v4_default2()],
          ReturnConsumedCapacity: [],
          ReturnItemCollectionMetrics: [],
          TransactItems: (_3) => se_TransactWriteItemList(_3, context)
        });
      };
      se_Update = (input, context) => {
        return take(input, {
          ConditionExpression: [],
          ExpressionAttributeNames: _json,
          ExpressionAttributeValues: (_3) => se_ExpressionAttributeValueMap(_3, context),
          Key: (_3) => se_Key(_3, context),
          ReturnValuesOnConditionCheckFailure: [],
          TableName: [],
          UpdateExpression: []
        });
      };
      se_UpdateGlobalTableSettingsInput = (input, context) => {
        return take(input, {
          GlobalTableBillingMode: [],
          GlobalTableGlobalSecondaryIndexSettingsUpdate: (_3) => se_GlobalTableGlobalSecondaryIndexSettingsUpdateList(_3, context),
          GlobalTableName: [],
          GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate: (_3) => se_AutoScalingSettingsUpdate(_3, context),
          GlobalTableProvisionedWriteCapacityUnits: [],
          ReplicaSettingsUpdate: (_3) => se_ReplicaSettingsUpdateList(_3, context)
        });
      };
      se_UpdateItemInput = (input, context) => {
        return take(input, {
          AttributeUpdates: (_3) => se_AttributeUpdates(_3, context),
          ConditionExpression: [],
          ConditionalOperator: [],
          Expected: (_3) => se_ExpectedAttributeMap(_3, context),
          ExpressionAttributeNames: _json,
          ExpressionAttributeValues: (_3) => se_ExpressionAttributeValueMap(_3, context),
          Key: (_3) => se_Key(_3, context),
          ReturnConsumedCapacity: [],
          ReturnItemCollectionMetrics: [],
          ReturnValues: [],
          ReturnValuesOnConditionCheckFailure: [],
          TableName: [],
          UpdateExpression: []
        });
      };
      se_UpdateTableReplicaAutoScalingInput = (input, context) => {
        return take(input, {
          GlobalSecondaryIndexUpdates: (_3) => se_GlobalSecondaryIndexAutoScalingUpdateList(_3, context),
          ProvisionedWriteCapacityAutoScalingUpdate: (_3) => se_AutoScalingSettingsUpdate(_3, context),
          ReplicaUpdates: (_3) => se_ReplicaAutoScalingUpdateList(_3, context),
          TableName: []
        });
      };
      se_WriteRequest = (input, context) => {
        return take(input, {
          DeleteRequest: (_3) => se_DeleteRequest(_3, context),
          PutRequest: (_3) => se_PutRequest(_3, context)
        });
      };
      se_WriteRequests = (input, context) => {
        return input.filter((e5) => e5 != null).map((entry) => {
          return se_WriteRequest(entry, context);
        });
      };
      de_ArchivalSummary = (output, context) => {
        return take(output, {
          ArchivalBackupArn: expectString,
          ArchivalDateTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          ArchivalReason: expectString
        });
      };
      de_AttributeMap = (output, context) => {
        return Object.entries(output).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = de_AttributeValue(awsExpectUnion(value), context);
          return acc;
        }, {});
      };
      de_AttributeValue = (output, context) => {
        if (output.B != null) {
          return {
            B: context.base64Decoder(output.B)
          };
        }
        if (expectBoolean(output.BOOL) !== void 0) {
          return { BOOL: expectBoolean(output.BOOL) };
        }
        if (output.BS != null) {
          return {
            BS: de_BinarySetAttributeValue(output.BS, context)
          };
        }
        if (output.L != null) {
          return {
            L: de_ListAttributeValue(output.L, context)
          };
        }
        if (output.M != null) {
          return {
            M: de_MapAttributeValue(output.M, context)
          };
        }
        if (expectString(output.N) !== void 0) {
          return { N: expectString(output.N) };
        }
        if (output.NS != null) {
          return {
            NS: _json(output.NS)
          };
        }
        if (expectBoolean(output.NULL) !== void 0) {
          return { NULL: expectBoolean(output.NULL) };
        }
        if (expectString(output.S) !== void 0) {
          return { S: expectString(output.S) };
        }
        if (output.SS != null) {
          return {
            SS: _json(output.SS)
          };
        }
        return { $unknown: Object.entries(output)[0] };
      };
      de_AutoScalingPolicyDescription = (output, context) => {
        return take(output, {
          PolicyName: expectString,
          TargetTrackingScalingPolicyConfiguration: (_3) => de_AutoScalingTargetTrackingScalingPolicyConfigurationDescription(_3, context)
        });
      };
      de_AutoScalingPolicyDescriptionList = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return de_AutoScalingPolicyDescription(entry, context);
        });
        return retVal;
      };
      de_AutoScalingSettingsDescription = (output, context) => {
        return take(output, {
          AutoScalingDisabled: expectBoolean,
          AutoScalingRoleArn: expectString,
          MaximumUnits: expectLong,
          MinimumUnits: expectLong,
          ScalingPolicies: (_3) => de_AutoScalingPolicyDescriptionList(_3, context)
        });
      };
      de_AutoScalingTargetTrackingScalingPolicyConfigurationDescription = (output, context) => {
        return take(output, {
          DisableScaleIn: expectBoolean,
          ScaleInCooldown: expectInt32,
          ScaleOutCooldown: expectInt32,
          TargetValue: limitedParseDouble
        });
      };
      de_BackupDescription = (output, context) => {
        return take(output, {
          BackupDetails: (_3) => de_BackupDetails(_3, context),
          SourceTableDetails: (_3) => de_SourceTableDetails(_3, context),
          SourceTableFeatureDetails: (_3) => de_SourceTableFeatureDetails(_3, context)
        });
      };
      de_BackupDetails = (output, context) => {
        return take(output, {
          BackupArn: expectString,
          BackupCreationDateTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          BackupExpiryDateTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          BackupName: expectString,
          BackupSizeBytes: expectLong,
          BackupStatus: expectString,
          BackupType: expectString
        });
      };
      de_BackupSummaries = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return de_BackupSummary(entry, context);
        });
        return retVal;
      };
      de_BackupSummary = (output, context) => {
        return take(output, {
          BackupArn: expectString,
          BackupCreationDateTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          BackupExpiryDateTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          BackupName: expectString,
          BackupSizeBytes: expectLong,
          BackupStatus: expectString,
          BackupType: expectString,
          TableArn: expectString,
          TableId: expectString,
          TableName: expectString
        });
      };
      de_BatchExecuteStatementOutput = (output, context) => {
        return take(output, {
          ConsumedCapacity: (_3) => de_ConsumedCapacityMultiple(_3, context),
          Responses: (_3) => de_PartiQLBatchResponse(_3, context)
        });
      };
      de_BatchGetItemOutput = (output, context) => {
        return take(output, {
          ConsumedCapacity: (_3) => de_ConsumedCapacityMultiple(_3, context),
          Responses: (_3) => de_BatchGetResponseMap(_3, context),
          UnprocessedKeys: (_3) => de_BatchGetRequestMap(_3, context)
        });
      };
      de_BatchGetRequestMap = (output, context) => {
        return Object.entries(output).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = de_KeysAndAttributes(value, context);
          return acc;
        }, {});
      };
      de_BatchGetResponseMap = (output, context) => {
        return Object.entries(output).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = de_ItemList(value, context);
          return acc;
        }, {});
      };
      de_BatchStatementError = (output, context) => {
        return take(output, {
          Code: expectString,
          Item: (_3) => de_AttributeMap(_3, context),
          Message: expectString
        });
      };
      de_BatchStatementResponse = (output, context) => {
        return take(output, {
          Error: (_3) => de_BatchStatementError(_3, context),
          Item: (_3) => de_AttributeMap(_3, context),
          TableName: expectString
        });
      };
      de_BatchWriteItemOutput = (output, context) => {
        return take(output, {
          ConsumedCapacity: (_3) => de_ConsumedCapacityMultiple(_3, context),
          ItemCollectionMetrics: (_3) => de_ItemCollectionMetricsPerTable(_3, context),
          UnprocessedItems: (_3) => de_BatchWriteItemRequestMap(_3, context)
        });
      };
      de_BatchWriteItemRequestMap = (output, context) => {
        return Object.entries(output).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = de_WriteRequests(value, context);
          return acc;
        }, {});
      };
      de_BillingModeSummary = (output, context) => {
        return take(output, {
          BillingMode: expectString,
          LastUpdateToPayPerRequestDateTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3)))
        });
      };
      de_BinarySetAttributeValue = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return context.base64Decoder(entry);
        });
        return retVal;
      };
      de_CancellationReason = (output, context) => {
        return take(output, {
          Code: expectString,
          Item: (_3) => de_AttributeMap(_3, context),
          Message: expectString
        });
      };
      de_CancellationReasonList = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return de_CancellationReason(entry, context);
        });
        return retVal;
      };
      de_Capacity = (output, context) => {
        return take(output, {
          CapacityUnits: limitedParseDouble,
          ReadCapacityUnits: limitedParseDouble,
          WriteCapacityUnits: limitedParseDouble
        });
      };
      de_ConditionalCheckFailedException = (output, context) => {
        return take(output, {
          Item: (_3) => de_AttributeMap(_3, context),
          message: expectString
        });
      };
      de_ConsumedCapacity = (output, context) => {
        return take(output, {
          CapacityUnits: limitedParseDouble,
          GlobalSecondaryIndexes: (_3) => de_SecondaryIndexesCapacityMap(_3, context),
          LocalSecondaryIndexes: (_3) => de_SecondaryIndexesCapacityMap(_3, context),
          ReadCapacityUnits: limitedParseDouble,
          Table: (_3) => de_Capacity(_3, context),
          TableName: expectString,
          WriteCapacityUnits: limitedParseDouble
        });
      };
      de_ConsumedCapacityMultiple = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return de_ConsumedCapacity(entry, context);
        });
        return retVal;
      };
      de_ContinuousBackupsDescription = (output, context) => {
        return take(output, {
          ContinuousBackupsStatus: expectString,
          PointInTimeRecoveryDescription: (_3) => de_PointInTimeRecoveryDescription(_3, context)
        });
      };
      de_CreateBackupOutput = (output, context) => {
        return take(output, {
          BackupDetails: (_3) => de_BackupDetails(_3, context)
        });
      };
      de_CreateGlobalTableOutput = (output, context) => {
        return take(output, {
          GlobalTableDescription: (_3) => de_GlobalTableDescription(_3, context)
        });
      };
      de_CreateTableOutput = (output, context) => {
        return take(output, {
          TableDescription: (_3) => de_TableDescription(_3, context)
        });
      };
      de_DeleteBackupOutput = (output, context) => {
        return take(output, {
          BackupDescription: (_3) => de_BackupDescription(_3, context)
        });
      };
      de_DeleteItemOutput = (output, context) => {
        return take(output, {
          Attributes: (_3) => de_AttributeMap(_3, context),
          ConsumedCapacity: (_3) => de_ConsumedCapacity(_3, context),
          ItemCollectionMetrics: (_3) => de_ItemCollectionMetrics(_3, context)
        });
      };
      de_DeleteRequest = (output, context) => {
        return take(output, {
          Key: (_3) => de_Key(_3, context)
        });
      };
      de_DeleteTableOutput = (output, context) => {
        return take(output, {
          TableDescription: (_3) => de_TableDescription(_3, context)
        });
      };
      de_DescribeBackupOutput = (output, context) => {
        return take(output, {
          BackupDescription: (_3) => de_BackupDescription(_3, context)
        });
      };
      de_DescribeContinuousBackupsOutput = (output, context) => {
        return take(output, {
          ContinuousBackupsDescription: (_3) => de_ContinuousBackupsDescription(_3, context)
        });
      };
      de_DescribeContributorInsightsOutput = (output, context) => {
        return take(output, {
          ContributorInsightsRuleList: _json,
          ContributorInsightsStatus: expectString,
          FailureException: _json,
          IndexName: expectString,
          LastUpdateDateTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          TableName: expectString
        });
      };
      de_DescribeExportOutput = (output, context) => {
        return take(output, {
          ExportDescription: (_3) => de_ExportDescription(_3, context)
        });
      };
      de_DescribeGlobalTableOutput = (output, context) => {
        return take(output, {
          GlobalTableDescription: (_3) => de_GlobalTableDescription(_3, context)
        });
      };
      de_DescribeGlobalTableSettingsOutput = (output, context) => {
        return take(output, {
          GlobalTableName: expectString,
          ReplicaSettings: (_3) => de_ReplicaSettingsDescriptionList(_3, context)
        });
      };
      de_DescribeImportOutput = (output, context) => {
        return take(output, {
          ImportTableDescription: (_3) => de_ImportTableDescription(_3, context)
        });
      };
      de_DescribeTableOutput = (output, context) => {
        return take(output, {
          Table: (_3) => de_TableDescription(_3, context)
        });
      };
      de_DescribeTableReplicaAutoScalingOutput = (output, context) => {
        return take(output, {
          TableAutoScalingDescription: (_3) => de_TableAutoScalingDescription(_3, context)
        });
      };
      de_ExecuteStatementOutput = (output, context) => {
        return take(output, {
          ConsumedCapacity: (_3) => de_ConsumedCapacity(_3, context),
          Items: (_3) => de_ItemList(_3, context),
          LastEvaluatedKey: (_3) => de_Key(_3, context),
          NextToken: expectString
        });
      };
      de_ExecuteTransactionOutput = (output, context) => {
        return take(output, {
          ConsumedCapacity: (_3) => de_ConsumedCapacityMultiple(_3, context),
          Responses: (_3) => de_ItemResponseList(_3, context)
        });
      };
      de_ExportDescription = (output, context) => {
        return take(output, {
          BilledSizeBytes: expectLong,
          ClientToken: expectString,
          EndTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          ExportArn: expectString,
          ExportFormat: expectString,
          ExportManifest: expectString,
          ExportStatus: expectString,
          ExportTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          ExportType: expectString,
          FailureCode: expectString,
          FailureMessage: expectString,
          IncrementalExportSpecification: (_3) => de_IncrementalExportSpecification(_3, context),
          ItemCount: expectLong,
          S3Bucket: expectString,
          S3BucketOwner: expectString,
          S3Prefix: expectString,
          S3SseAlgorithm: expectString,
          S3SseKmsKeyId: expectString,
          StartTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          TableArn: expectString,
          TableId: expectString
        });
      };
      de_ExportTableToPointInTimeOutput = (output, context) => {
        return take(output, {
          ExportDescription: (_3) => de_ExportDescription(_3, context)
        });
      };
      de_GetItemOutput = (output, context) => {
        return take(output, {
          ConsumedCapacity: (_3) => de_ConsumedCapacity(_3, context),
          Item: (_3) => de_AttributeMap(_3, context)
        });
      };
      de_GlobalSecondaryIndexDescription = (output, context) => {
        return take(output, {
          Backfilling: expectBoolean,
          IndexArn: expectString,
          IndexName: expectString,
          IndexSizeBytes: expectLong,
          IndexStatus: expectString,
          ItemCount: expectLong,
          KeySchema: _json,
          Projection: _json,
          ProvisionedThroughput: (_3) => de_ProvisionedThroughputDescription(_3, context)
        });
      };
      de_GlobalSecondaryIndexDescriptionList = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return de_GlobalSecondaryIndexDescription(entry, context);
        });
        return retVal;
      };
      de_GlobalTableDescription = (output, context) => {
        return take(output, {
          CreationDateTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          GlobalTableArn: expectString,
          GlobalTableName: expectString,
          GlobalTableStatus: expectString,
          ReplicationGroup: (_3) => de_ReplicaDescriptionList(_3, context)
        });
      };
      de_ImportSummary = (output, context) => {
        return take(output, {
          CloudWatchLogGroupArn: expectString,
          EndTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          ImportArn: expectString,
          ImportStatus: expectString,
          InputFormat: expectString,
          S3BucketSource: _json,
          StartTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          TableArn: expectString
        });
      };
      de_ImportSummaryList = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return de_ImportSummary(entry, context);
        });
        return retVal;
      };
      de_ImportTableDescription = (output, context) => {
        return take(output, {
          ClientToken: expectString,
          CloudWatchLogGroupArn: expectString,
          EndTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          ErrorCount: expectLong,
          FailureCode: expectString,
          FailureMessage: expectString,
          ImportArn: expectString,
          ImportStatus: expectString,
          ImportedItemCount: expectLong,
          InputCompressionType: expectString,
          InputFormat: expectString,
          InputFormatOptions: _json,
          ProcessedItemCount: expectLong,
          ProcessedSizeBytes: expectLong,
          S3BucketSource: _json,
          StartTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          TableArn: expectString,
          TableCreationParameters: _json,
          TableId: expectString
        });
      };
      de_ImportTableOutput = (output, context) => {
        return take(output, {
          ImportTableDescription: (_3) => de_ImportTableDescription(_3, context)
        });
      };
      de_IncrementalExportSpecification = (output, context) => {
        return take(output, {
          ExportFromTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          ExportToTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          ExportViewType: expectString
        });
      };
      de_ItemCollectionKeyAttributeMap = (output, context) => {
        return Object.entries(output).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = de_AttributeValue(awsExpectUnion(value), context);
          return acc;
        }, {});
      };
      de_ItemCollectionMetrics = (output, context) => {
        return take(output, {
          ItemCollectionKey: (_3) => de_ItemCollectionKeyAttributeMap(_3, context),
          SizeEstimateRangeGB: (_3) => de_ItemCollectionSizeEstimateRange(_3, context)
        });
      };
      de_ItemCollectionMetricsMultiple = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return de_ItemCollectionMetrics(entry, context);
        });
        return retVal;
      };
      de_ItemCollectionMetricsPerTable = (output, context) => {
        return Object.entries(output).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = de_ItemCollectionMetricsMultiple(value, context);
          return acc;
        }, {});
      };
      de_ItemCollectionSizeEstimateRange = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return limitedParseDouble(entry);
        });
        return retVal;
      };
      de_ItemList = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return de_AttributeMap(entry, context);
        });
        return retVal;
      };
      de_ItemResponse = (output, context) => {
        return take(output, {
          Item: (_3) => de_AttributeMap(_3, context)
        });
      };
      de_ItemResponseList = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return de_ItemResponse(entry, context);
        });
        return retVal;
      };
      de_Key = (output, context) => {
        return Object.entries(output).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = de_AttributeValue(awsExpectUnion(value), context);
          return acc;
        }, {});
      };
      de_KeyList = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return de_Key(entry, context);
        });
        return retVal;
      };
      de_KeysAndAttributes = (output, context) => {
        return take(output, {
          AttributesToGet: _json,
          ConsistentRead: expectBoolean,
          ExpressionAttributeNames: _json,
          Keys: (_3) => de_KeyList(_3, context),
          ProjectionExpression: expectString
        });
      };
      de_ListAttributeValue = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return de_AttributeValue(awsExpectUnion(entry), context);
        });
        return retVal;
      };
      de_ListBackupsOutput = (output, context) => {
        return take(output, {
          BackupSummaries: (_3) => de_BackupSummaries(_3, context),
          LastEvaluatedBackupArn: expectString
        });
      };
      de_ListImportsOutput = (output, context) => {
        return take(output, {
          ImportSummaryList: (_3) => de_ImportSummaryList(_3, context),
          NextToken: expectString
        });
      };
      de_MapAttributeValue = (output, context) => {
        return Object.entries(output).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = de_AttributeValue(awsExpectUnion(value), context);
          return acc;
        }, {});
      };
      de_PartiQLBatchResponse = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return de_BatchStatementResponse(entry, context);
        });
        return retVal;
      };
      de_PointInTimeRecoveryDescription = (output, context) => {
        return take(output, {
          EarliestRestorableDateTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          LatestRestorableDateTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          PointInTimeRecoveryStatus: expectString
        });
      };
      de_ProvisionedThroughputDescription = (output, context) => {
        return take(output, {
          LastDecreaseDateTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          LastIncreaseDateTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          NumberOfDecreasesToday: expectLong,
          ReadCapacityUnits: expectLong,
          WriteCapacityUnits: expectLong
        });
      };
      de_PutItemInputAttributeMap = (output, context) => {
        return Object.entries(output).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = de_AttributeValue(awsExpectUnion(value), context);
          return acc;
        }, {});
      };
      de_PutItemOutput = (output, context) => {
        return take(output, {
          Attributes: (_3) => de_AttributeMap(_3, context),
          ConsumedCapacity: (_3) => de_ConsumedCapacity(_3, context),
          ItemCollectionMetrics: (_3) => de_ItemCollectionMetrics(_3, context)
        });
      };
      de_PutRequest = (output, context) => {
        return take(output, {
          Item: (_3) => de_PutItemInputAttributeMap(_3, context)
        });
      };
      de_QueryOutput = (output, context) => {
        return take(output, {
          ConsumedCapacity: (_3) => de_ConsumedCapacity(_3, context),
          Count: expectInt32,
          Items: (_3) => de_ItemList(_3, context),
          LastEvaluatedKey: (_3) => de_Key(_3, context),
          ScannedCount: expectInt32
        });
      };
      de_ReplicaAutoScalingDescription = (output, context) => {
        return take(output, {
          GlobalSecondaryIndexes: (_3) => de_ReplicaGlobalSecondaryIndexAutoScalingDescriptionList(_3, context),
          RegionName: expectString,
          ReplicaProvisionedReadCapacityAutoScalingSettings: (_3) => de_AutoScalingSettingsDescription(_3, context),
          ReplicaProvisionedWriteCapacityAutoScalingSettings: (_3) => de_AutoScalingSettingsDescription(_3, context),
          ReplicaStatus: expectString
        });
      };
      de_ReplicaAutoScalingDescriptionList = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return de_ReplicaAutoScalingDescription(entry, context);
        });
        return retVal;
      };
      de_ReplicaDescription = (output, context) => {
        return take(output, {
          GlobalSecondaryIndexes: _json,
          KMSMasterKeyId: expectString,
          ProvisionedThroughputOverride: _json,
          RegionName: expectString,
          ReplicaInaccessibleDateTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          ReplicaStatus: expectString,
          ReplicaStatusDescription: expectString,
          ReplicaStatusPercentProgress: expectString,
          ReplicaTableClassSummary: (_3) => de_TableClassSummary(_3, context)
        });
      };
      de_ReplicaDescriptionList = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return de_ReplicaDescription(entry, context);
        });
        return retVal;
      };
      de_ReplicaGlobalSecondaryIndexAutoScalingDescription = (output, context) => {
        return take(output, {
          IndexName: expectString,
          IndexStatus: expectString,
          ProvisionedReadCapacityAutoScalingSettings: (_3) => de_AutoScalingSettingsDescription(_3, context),
          ProvisionedWriteCapacityAutoScalingSettings: (_3) => de_AutoScalingSettingsDescription(_3, context)
        });
      };
      de_ReplicaGlobalSecondaryIndexAutoScalingDescriptionList = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return de_ReplicaGlobalSecondaryIndexAutoScalingDescription(entry, context);
        });
        return retVal;
      };
      de_ReplicaGlobalSecondaryIndexSettingsDescription = (output, context) => {
        return take(output, {
          IndexName: expectString,
          IndexStatus: expectString,
          ProvisionedReadCapacityAutoScalingSettings: (_3) => de_AutoScalingSettingsDescription(_3, context),
          ProvisionedReadCapacityUnits: expectLong,
          ProvisionedWriteCapacityAutoScalingSettings: (_3) => de_AutoScalingSettingsDescription(_3, context),
          ProvisionedWriteCapacityUnits: expectLong
        });
      };
      de_ReplicaGlobalSecondaryIndexSettingsDescriptionList = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return de_ReplicaGlobalSecondaryIndexSettingsDescription(entry, context);
        });
        return retVal;
      };
      de_ReplicaSettingsDescription = (output, context) => {
        return take(output, {
          RegionName: expectString,
          ReplicaBillingModeSummary: (_3) => de_BillingModeSummary(_3, context),
          ReplicaGlobalSecondaryIndexSettings: (_3) => de_ReplicaGlobalSecondaryIndexSettingsDescriptionList(_3, context),
          ReplicaProvisionedReadCapacityAutoScalingSettings: (_3) => de_AutoScalingSettingsDescription(_3, context),
          ReplicaProvisionedReadCapacityUnits: expectLong,
          ReplicaProvisionedWriteCapacityAutoScalingSettings: (_3) => de_AutoScalingSettingsDescription(_3, context),
          ReplicaProvisionedWriteCapacityUnits: expectLong,
          ReplicaStatus: expectString,
          ReplicaTableClassSummary: (_3) => de_TableClassSummary(_3, context)
        });
      };
      de_ReplicaSettingsDescriptionList = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return de_ReplicaSettingsDescription(entry, context);
        });
        return retVal;
      };
      de_RestoreSummary = (output, context) => {
        return take(output, {
          RestoreDateTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          RestoreInProgress: expectBoolean,
          SourceBackupArn: expectString,
          SourceTableArn: expectString
        });
      };
      de_RestoreTableFromBackupOutput = (output, context) => {
        return take(output, {
          TableDescription: (_3) => de_TableDescription(_3, context)
        });
      };
      de_RestoreTableToPointInTimeOutput = (output, context) => {
        return take(output, {
          TableDescription: (_3) => de_TableDescription(_3, context)
        });
      };
      de_ScanOutput = (output, context) => {
        return take(output, {
          ConsumedCapacity: (_3) => de_ConsumedCapacity(_3, context),
          Count: expectInt32,
          Items: (_3) => de_ItemList(_3, context),
          LastEvaluatedKey: (_3) => de_Key(_3, context),
          ScannedCount: expectInt32
        });
      };
      de_SecondaryIndexesCapacityMap = (output, context) => {
        return Object.entries(output).reduce((acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = de_Capacity(value, context);
          return acc;
        }, {});
      };
      de_SourceTableDetails = (output, context) => {
        return take(output, {
          BillingMode: expectString,
          ItemCount: expectLong,
          KeySchema: _json,
          ProvisionedThroughput: _json,
          TableArn: expectString,
          TableCreationDateTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          TableId: expectString,
          TableName: expectString,
          TableSizeBytes: expectLong
        });
      };
      de_SourceTableFeatureDetails = (output, context) => {
        return take(output, {
          GlobalSecondaryIndexes: _json,
          LocalSecondaryIndexes: _json,
          SSEDescription: (_3) => de_SSEDescription(_3, context),
          StreamDescription: _json,
          TimeToLiveDescription: _json
        });
      };
      de_SSEDescription = (output, context) => {
        return take(output, {
          InaccessibleEncryptionDateTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          KMSMasterKeyArn: expectString,
          SSEType: expectString,
          Status: expectString
        });
      };
      de_TableAutoScalingDescription = (output, context) => {
        return take(output, {
          Replicas: (_3) => de_ReplicaAutoScalingDescriptionList(_3, context),
          TableName: expectString,
          TableStatus: expectString
        });
      };
      de_TableClassSummary = (output, context) => {
        return take(output, {
          LastUpdateDateTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          TableClass: expectString
        });
      };
      de_TableDescription = (output, context) => {
        return take(output, {
          ArchivalSummary: (_3) => de_ArchivalSummary(_3, context),
          AttributeDefinitions: _json,
          BillingModeSummary: (_3) => de_BillingModeSummary(_3, context),
          CreationDateTime: (_3) => expectNonNull(parseEpochTimestamp(expectNumber(_3))),
          DeletionProtectionEnabled: expectBoolean,
          GlobalSecondaryIndexes: (_3) => de_GlobalSecondaryIndexDescriptionList(_3, context),
          GlobalTableVersion: expectString,
          ItemCount: expectLong,
          KeySchema: _json,
          LatestStreamArn: expectString,
          LatestStreamLabel: expectString,
          LocalSecondaryIndexes: _json,
          ProvisionedThroughput: (_3) => de_ProvisionedThroughputDescription(_3, context),
          Replicas: (_3) => de_ReplicaDescriptionList(_3, context),
          RestoreSummary: (_3) => de_RestoreSummary(_3, context),
          SSEDescription: (_3) => de_SSEDescription(_3, context),
          StreamSpecification: _json,
          TableArn: expectString,
          TableClassSummary: (_3) => de_TableClassSummary(_3, context),
          TableId: expectString,
          TableName: expectString,
          TableSizeBytes: expectLong,
          TableStatus: expectString
        });
      };
      de_TransactGetItemsOutput = (output, context) => {
        return take(output, {
          ConsumedCapacity: (_3) => de_ConsumedCapacityMultiple(_3, context),
          Responses: (_3) => de_ItemResponseList(_3, context)
        });
      };
      de_TransactionCanceledException = (output, context) => {
        return take(output, {
          CancellationReasons: (_3) => de_CancellationReasonList(_3, context),
          Message: expectString
        });
      };
      de_TransactWriteItemsOutput = (output, context) => {
        return take(output, {
          ConsumedCapacity: (_3) => de_ConsumedCapacityMultiple(_3, context),
          ItemCollectionMetrics: (_3) => de_ItemCollectionMetricsPerTable(_3, context)
        });
      };
      de_UpdateContinuousBackupsOutput = (output, context) => {
        return take(output, {
          ContinuousBackupsDescription: (_3) => de_ContinuousBackupsDescription(_3, context)
        });
      };
      de_UpdateGlobalTableOutput = (output, context) => {
        return take(output, {
          GlobalTableDescription: (_3) => de_GlobalTableDescription(_3, context)
        });
      };
      de_UpdateGlobalTableSettingsOutput = (output, context) => {
        return take(output, {
          GlobalTableName: expectString,
          ReplicaSettings: (_3) => de_ReplicaSettingsDescriptionList(_3, context)
        });
      };
      de_UpdateItemOutput = (output, context) => {
        return take(output, {
          Attributes: (_3) => de_AttributeMap(_3, context),
          ConsumedCapacity: (_3) => de_ConsumedCapacity(_3, context),
          ItemCollectionMetrics: (_3) => de_ItemCollectionMetrics(_3, context)
        });
      };
      de_UpdateTableOutput = (output, context) => {
        return take(output, {
          TableDescription: (_3) => de_TableDescription(_3, context)
        });
      };
      de_UpdateTableReplicaAutoScalingOutput = (output, context) => {
        return take(output, {
          TableAutoScalingDescription: (_3) => de_TableAutoScalingDescription(_3, context)
        });
      };
      de_WriteRequest = (output, context) => {
        return take(output, {
          DeleteRequest: (_3) => de_DeleteRequest(_3, context),
          PutRequest: (_3) => de_PutRequest(_3, context)
        });
      };
      de_WriteRequests = (output, context) => {
        const retVal = (output || []).filter((e5) => e5 != null).map((entry) => {
          return de_WriteRequest(entry, context);
        });
        return retVal;
      };
      deserializeMetadata3 = (output) => ({
        httpStatusCode: output.statusCode,
        requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"]
      });
      throwDefaultError3 = withBaseException(DynamoDBServiceException);
      buildHttpRpcRequest2 = async (context, headers, path, resolvedHostname, body) => {
        const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
        const contents = {
          protocol,
          hostname,
          port,
          method: "POST",
          path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
          headers
        };
        if (resolvedHostname !== void 0) {
          contents.hostname = resolvedHostname;
        }
        if (body !== void 0) {
          contents.body = body;
        }
        return new HttpRequest(contents);
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeEndpointsCommand.js
  var DescribeEndpointsCommand;
  var init_DescribeEndpointsCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeEndpointsCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      DescribeEndpointsCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "DescribeEndpoints", {}).n("DynamoDBClient", "DescribeEndpointsCommand").f(void 0, void 0).ser(se_DescribeEndpointsCommand).de(de_DescribeEndpointsCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/package.json
  var package_default2;
  var init_package2 = __esm({
    "node_modules/@aws-sdk/client-dynamodb/package.json"() {
      package_default2 = {
        name: "@aws-sdk/client-dynamodb",
        description: "AWS SDK for JavaScript Dynamodb Client for Node.js, Browser and React Native",
        version: "3.529.1",
        scripts: {
          build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
          "build:cjs": "node ../../scripts/compilation/inline client-dynamodb",
          "build:es": "tsc -p tsconfig.es.json",
          "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
          "build:types": "tsc -p tsconfig.types.json",
          "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
          clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
          "extract:docs": "api-extractor run --local",
          "generate:client": "node ../../scripts/generate-clients/single-service --solo dynamodb"
        },
        main: "./dist-cjs/index.js",
        types: "./dist-types/index.d.ts",
        module: "./dist-es/index.js",
        sideEffects: false,
        dependencies: {
          "@aws-crypto/sha256-browser": "3.0.0",
          "@aws-crypto/sha256-js": "3.0.0",
          "@aws-sdk/client-sts": "3.529.1",
          "@aws-sdk/core": "3.529.1",
          "@aws-sdk/credential-provider-node": "3.529.1",
          "@aws-sdk/middleware-endpoint-discovery": "3.525.0",
          "@aws-sdk/middleware-host-header": "3.523.0",
          "@aws-sdk/middleware-logger": "3.523.0",
          "@aws-sdk/middleware-recursion-detection": "3.523.0",
          "@aws-sdk/middleware-user-agent": "3.525.0",
          "@aws-sdk/region-config-resolver": "3.525.0",
          "@aws-sdk/types": "3.523.0",
          "@aws-sdk/util-endpoints": "3.525.0",
          "@aws-sdk/util-user-agent-browser": "3.523.0",
          "@aws-sdk/util-user-agent-node": "3.525.0",
          "@smithy/config-resolver": "^2.1.4",
          "@smithy/core": "^1.3.5",
          "@smithy/fetch-http-handler": "^2.4.3",
          "@smithy/hash-node": "^2.1.3",
          "@smithy/invalid-dependency": "^2.1.3",
          "@smithy/middleware-content-length": "^2.1.3",
          "@smithy/middleware-endpoint": "^2.4.4",
          "@smithy/middleware-retry": "^2.1.4",
          "@smithy/middleware-serde": "^2.1.3",
          "@smithy/middleware-stack": "^2.1.3",
          "@smithy/node-config-provider": "^2.2.4",
          "@smithy/node-http-handler": "^2.4.1",
          "@smithy/protocol-http": "^3.2.1",
          "@smithy/smithy-client": "^2.4.2",
          "@smithy/types": "^2.10.1",
          "@smithy/url-parser": "^2.1.3",
          "@smithy/util-base64": "^2.1.1",
          "@smithy/util-body-length-browser": "^2.1.1",
          "@smithy/util-body-length-node": "^2.2.1",
          "@smithy/util-defaults-mode-browser": "^2.1.4",
          "@smithy/util-defaults-mode-node": "^2.2.3",
          "@smithy/util-endpoints": "^1.1.4",
          "@smithy/util-middleware": "^2.1.3",
          "@smithy/util-retry": "^2.1.3",
          "@smithy/util-utf8": "^2.1.1",
          "@smithy/util-waiter": "^2.1.3",
          tslib: "^2.5.0",
          uuid: "^9.0.1"
        },
        devDependencies: {
          "@smithy/service-client-documentation-generator": "^2.1.1",
          "@tsconfig/node14": "1.0.3",
          "@types/node": "^14.14.31",
          "@types/uuid": "^9.0.4",
          concurrently: "7.0.0",
          "downlevel-dts": "0.10.1",
          rimraf: "3.0.2",
          typescript: "~4.9.5"
        },
        engines: {
          node: ">=14.0.0"
        },
        typesVersions: {
          "<4.0": {
            "dist-types/*": [
              "dist-types/ts3.4/*"
            ]
          }
        },
        files: [
          "dist-*/**"
        ],
        author: {
          name: "AWS SDK for JavaScript Team",
          url: "https://aws.amazon.com/javascript/"
        },
        license: "Apache-2.0",
        browser: {
          "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
        },
        "react-native": {
          "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
        },
        homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-dynamodb",
        repository: {
          type: "git",
          url: "https://github.com/aws/aws-sdk-js-v3.git",
          directory: "clients/client-dynamodb"
        }
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/ruleset.js
  var w3, x3, y3, z, a4, b3, c4, d4, e4, f4, g4, h4, i4, j4, k4, l4, m4, n4, o4, p4, q2, r4, s4, t4, u4, v5, _data2, ruleSet2;
  var init_ruleset2 = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/ruleset.js"() {
      w3 = "required";
      x3 = "fn";
      y3 = "argv";
      z = "ref";
      a4 = true;
      b3 = "isSet";
      c4 = "booleanEquals";
      d4 = "error";
      e4 = "endpoint";
      f4 = "tree";
      g4 = "PartitionResult";
      h4 = "getAttr";
      i4 = "stringEquals";
      j4 = { [w3]: false, "type": "String" };
      k4 = { [w3]: true, "default": false, "type": "Boolean" };
      l4 = { [z]: "Endpoint" };
      m4 = { [x3]: c4, [y3]: [{ [z]: "UseFIPS" }, true] };
      n4 = { [x3]: c4, [y3]: [{ [z]: "UseDualStack" }, true] };
      o4 = {};
      p4 = { [z]: "Region" };
      q2 = { [x3]: h4, [y3]: [{ [z]: g4 }, "supportsFIPS"] };
      r4 = { [z]: g4 };
      s4 = { [x3]: c4, [y3]: [true, { [x3]: h4, [y3]: [r4, "supportsDualStack"] }] };
      t4 = [m4];
      u4 = [n4];
      v5 = [p4];
      _data2 = { version: "1.0", parameters: { Region: j4, UseDualStack: k4, UseFIPS: k4, Endpoint: j4 }, rules: [{ conditions: [{ [x3]: b3, [y3]: [l4] }], rules: [{ conditions: t4, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d4 }, { conditions: u4, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d4 }, { endpoint: { url: l4, properties: o4, headers: o4 }, type: e4 }], type: f4 }, { conditions: [{ [x3]: b3, [y3]: v5 }], rules: [{ conditions: [{ [x3]: "aws.partition", [y3]: v5, assign: g4 }], rules: [{ conditions: [m4, n4], rules: [{ conditions: [{ [x3]: c4, [y3]: [a4, q2] }, s4], rules: [{ endpoint: { url: "https://dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: o4, headers: o4 }, type: e4 }], type: f4 }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d4 }], type: f4 }, { conditions: t4, rules: [{ conditions: [{ [x3]: c4, [y3]: [q2, a4] }], rules: [{ conditions: [{ [x3]: i4, [y3]: [{ [x3]: h4, [y3]: [r4, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://dynamodb.{Region}.amazonaws.com", properties: o4, headers: o4 }, type: e4 }, { endpoint: { url: "https://dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}", properties: o4, headers: o4 }, type: e4 }], type: f4 }, { error: "FIPS is enabled but this partition does not support FIPS", type: d4 }], type: f4 }, { conditions: u4, rules: [{ conditions: [s4], rules: [{ endpoint: { url: "https://dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: o4, headers: o4 }, type: e4 }], type: f4 }, { error: "DualStack is enabled but this partition does not support DualStack", type: d4 }], type: f4 }, { conditions: [{ [x3]: i4, [y3]: [p4, "local"] }], endpoint: { url: "http://localhost:8000", properties: { authSchemes: [{ name: "sigv4", signingName: "dynamodb", signingRegion: "us-east-1" }] }, headers: o4 }, type: e4 }, { endpoint: { url: "https://dynamodb.{Region}.{PartitionResult#dnsSuffix}", properties: o4, headers: o4 }, type: e4 }], type: f4 }], type: f4 }, { error: "Invalid Configuration: Missing Region", type: d4 }] };
      ruleSet2 = _data2;
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/endpointResolver.js
  var defaultEndpointResolver2;
  var init_endpointResolver2 = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/endpointResolver.js"() {
      init_dist_es6();
      init_ruleset2();
      defaultEndpointResolver2 = (endpointParams, context = {}) => {
        return resolveEndpoint(ruleSet2, {
          endpointParams,
          logger: context.logger
        });
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.shared.js
  var getRuntimeConfig3;
  var init_runtimeConfig_shared2 = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.shared.js"() {
      init_dist_es33();
      init_dist_es26();
      init_dist_es13();
      init_dist_es20();
      init_dist_es19();
      init_httpAuthSchemeProvider2();
      init_endpointResolver2();
      getRuntimeConfig3 = (config) => {
        return {
          apiVersion: "2012-08-10",
          base64Decoder: config?.base64Decoder ?? fromBase64,
          base64Encoder: config?.base64Encoder ?? toBase64,
          disableHostPrefix: config?.disableHostPrefix ?? false,
          endpointProvider: config?.endpointProvider ?? defaultEndpointResolver2,
          extensions: config?.extensions ?? [],
          httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultDynamoDBHttpAuthSchemeProvider,
          httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
              schemeId: "aws.auth#sigv4",
              identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
              signer: new AwsSdkSigV4Signer()
            }
          ],
          logger: config?.logger ?? new NoOpLogger(),
          serviceId: config?.serviceId ?? "DynamoDB",
          urlParser: config?.urlParser ?? parseUrl,
          utf8Decoder: config?.utf8Decoder ?? fromUtf8,
          utf8Encoder: config?.utf8Encoder ?? toUtf8
        };
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.browser.js
  var import_sha256_browser2, getRuntimeConfig4;
  var init_runtimeConfig_browser2 = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.browser.js"() {
      init_package2();
      import_sha256_browser2 = __toESM(require_build6());
      init_dist_es34();
      init_dist_es11();
      init_dist_es23();
      init_dist_es35();
      init_dist_es36();
      init_dist_es17();
      init_runtimeConfig_shared2();
      init_dist_es26();
      init_dist_es38();
      getRuntimeConfig4 = (config) => {
        const defaultsMode = resolveDefaultsModeConfig(config);
        const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
        const clientSharedValues = getRuntimeConfig3(config);
        return {
          ...clientSharedValues,
          ...config,
          runtime: "browser",
          defaultsMode,
          bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
          credentialDefaultProvider: config?.credentialDefaultProvider ?? ((_3) => () => Promise.reject(new Error("Credential is missing"))),
          defaultUserAgentProvider: config?.defaultUserAgentProvider ?? defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: package_default2.version }),
          endpointDiscoveryEnabledProvider: config?.endpointDiscoveryEnabledProvider ?? (() => Promise.resolve(void 0)),
          maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
          region: config?.region ?? invalidProvider("Region is missing"),
          requestHandler: FetchHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
          retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
          sha256: config?.sha256 ?? import_sha256_browser2.Sha256,
          streamCollector: config?.streamCollector ?? streamCollector,
          useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
          useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))
        };
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/auth/httpAuthExtensionConfiguration.js
  var getHttpAuthExtensionConfiguration2, resolveHttpAuthRuntimeConfig2;
  var init_httpAuthExtensionConfiguration2 = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/auth/httpAuthExtensionConfiguration.js"() {
      getHttpAuthExtensionConfiguration2 = (runtimeConfig) => {
        const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
        let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
        let _credentials = runtimeConfig.credentials;
        return {
          setHttpAuthScheme(httpAuthScheme) {
            const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
            if (index === -1) {
              _httpAuthSchemes.push(httpAuthScheme);
            } else {
              _httpAuthSchemes.splice(index, 1, httpAuthScheme);
            }
          },
          httpAuthSchemes() {
            return _httpAuthSchemes;
          },
          setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
            _httpAuthSchemeProvider = httpAuthSchemeProvider;
          },
          httpAuthSchemeProvider() {
            return _httpAuthSchemeProvider;
          },
          setCredentials(credentials) {
            _credentials = credentials;
          },
          credentials() {
            return _credentials;
          }
        };
      };
      resolveHttpAuthRuntimeConfig2 = (config) => {
        return {
          httpAuthSchemes: config.httpAuthSchemes(),
          httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
          credentials: config.credentials()
        };
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeExtensions.js
  var asPartial2, resolveRuntimeExtensions2;
  var init_runtimeExtensions2 = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeExtensions.js"() {
      init_dist_es39();
      init_dist_es2();
      init_dist_es26();
      init_httpAuthExtensionConfiguration2();
      asPartial2 = (t5) => t5;
      resolveRuntimeExtensions2 = (runtimeConfig, extensions) => {
        const extensionConfiguration = {
          ...asPartial2(getAwsRegionExtensionConfiguration(runtimeConfig)),
          ...asPartial2(getDefaultExtensionConfiguration(runtimeConfig)),
          ...asPartial2(getHttpHandlerExtensionConfiguration(runtimeConfig)),
          ...asPartial2(getHttpAuthExtensionConfiguration2(runtimeConfig))
        };
        extensions.forEach((extension) => extension.configure(extensionConfiguration));
        return {
          ...runtimeConfig,
          ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
          ...resolveDefaultRuntimeConfig(extensionConfiguration),
          ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
          ...resolveHttpAuthRuntimeConfig2(extensionConfiguration)
        };
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/DynamoDBClient.js
  var DynamoDBClient;
  var init_DynamoDBClient = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/DynamoDBClient.js"() {
      init_dist_es43();
      init_dist_es3();
      init_dist_es4();
      init_dist_es5();
      init_dist_es8();
      init_dist_es11();
      init_dist_es28();
      init_dist_es29();
      init_dist_es15();
      init_dist_es27();
      init_dist_es26();
      init_httpAuthSchemeProvider2();
      init_DescribeEndpointsCommand();
      init_EndpointParameters2();
      init_runtimeConfig_browser2();
      init_runtimeExtensions2();
      DynamoDBClient = class extends Client {
        constructor(...[configuration]) {
          const _config_0 = getRuntimeConfig4(configuration || {});
          const _config_1 = resolveClientEndpointParameters2(_config_0);
          const _config_2 = resolveRegionConfig(_config_1);
          const _config_3 = resolveEndpointConfig(_config_2);
          const _config_4 = resolveRetryConfig(_config_3);
          const _config_5 = resolveHostHeaderConfig(_config_4);
          const _config_6 = resolveUserAgentConfig(_config_5);
          const _config_7 = resolveHttpAuthSchemeConfig2(_config_6);
          const _config_8 = resolveEndpointDiscoveryConfig(_config_7, {
            endpointDiscoveryCommandCtor: DescribeEndpointsCommand
          });
          const _config_9 = resolveRuntimeExtensions2(_config_8, configuration?.extensions || []);
          super(_config_9);
          this.config = _config_9;
          this.middlewareStack.use(getRetryPlugin(this.config));
          this.middlewareStack.use(getContentLengthPlugin(this.config));
          this.middlewareStack.use(getHostHeaderPlugin(this.config));
          this.middlewareStack.use(getLoggerPlugin(this.config));
          this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
          this.middlewareStack.use(getUserAgentPlugin(this.config));
          this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
            identityProviderConfigProvider: this.getIdentityProviderConfigProvider()
          }));
          this.middlewareStack.use(getHttpSigningPlugin(this.config));
        }
        destroy() {
          super.destroy();
        }
        getDefaultHttpAuthSchemeParametersProvider() {
          return defaultDynamoDBHttpAuthSchemeParametersProvider;
        }
        getIdentityProviderConfigProvider() {
          return async (config) => new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials
          });
        }
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/BatchExecuteStatementCommand.js
  var BatchExecuteStatementCommand;
  var init_BatchExecuteStatementCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/BatchExecuteStatementCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      BatchExecuteStatementCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "BatchExecuteStatement", {}).n("DynamoDBClient", "BatchExecuteStatementCommand").f(void 0, void 0).ser(se_BatchExecuteStatementCommand).de(de_BatchExecuteStatementCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/BatchGetItemCommand.js
  var BatchGetItemCommand;
  var init_BatchGetItemCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/BatchGetItemCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      BatchGetItemCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "BatchGetItem", {}).n("DynamoDBClient", "BatchGetItemCommand").f(void 0, void 0).ser(se_BatchGetItemCommand).de(de_BatchGetItemCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/BatchWriteItemCommand.js
  var BatchWriteItemCommand;
  var init_BatchWriteItemCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/BatchWriteItemCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      BatchWriteItemCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "BatchWriteItem", {}).n("DynamoDBClient", "BatchWriteItemCommand").f(void 0, void 0).ser(se_BatchWriteItemCommand).de(de_BatchWriteItemCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/CreateBackupCommand.js
  var CreateBackupCommand;
  var init_CreateBackupCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/CreateBackupCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      CreateBackupCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "CreateBackup", {}).n("DynamoDBClient", "CreateBackupCommand").f(void 0, void 0).ser(se_CreateBackupCommand).de(de_CreateBackupCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/CreateGlobalTableCommand.js
  var CreateGlobalTableCommand;
  var init_CreateGlobalTableCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/CreateGlobalTableCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      CreateGlobalTableCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "CreateGlobalTable", {}).n("DynamoDBClient", "CreateGlobalTableCommand").f(void 0, void 0).ser(se_CreateGlobalTableCommand).de(de_CreateGlobalTableCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/CreateTableCommand.js
  var CreateTableCommand;
  var init_CreateTableCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/CreateTableCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      CreateTableCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "CreateTable", {}).n("DynamoDBClient", "CreateTableCommand").f(void 0, void 0).ser(se_CreateTableCommand).de(de_CreateTableCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DeleteBackupCommand.js
  var DeleteBackupCommand;
  var init_DeleteBackupCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DeleteBackupCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      DeleteBackupCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "DeleteBackup", {}).n("DynamoDBClient", "DeleteBackupCommand").f(void 0, void 0).ser(se_DeleteBackupCommand).de(de_DeleteBackupCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DeleteItemCommand.js
  var DeleteItemCommand;
  var init_DeleteItemCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DeleteItemCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      DeleteItemCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "DeleteItem", {}).n("DynamoDBClient", "DeleteItemCommand").f(void 0, void 0).ser(se_DeleteItemCommand).de(de_DeleteItemCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DeleteTableCommand.js
  var DeleteTableCommand;
  var init_DeleteTableCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DeleteTableCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      DeleteTableCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "DeleteTable", {}).n("DynamoDBClient", "DeleteTableCommand").f(void 0, void 0).ser(se_DeleteTableCommand).de(de_DeleteTableCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeBackupCommand.js
  var DescribeBackupCommand;
  var init_DescribeBackupCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeBackupCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      DescribeBackupCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "DescribeBackup", {}).n("DynamoDBClient", "DescribeBackupCommand").f(void 0, void 0).ser(se_DescribeBackupCommand).de(de_DescribeBackupCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeContinuousBackupsCommand.js
  var DescribeContinuousBackupsCommand;
  var init_DescribeContinuousBackupsCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeContinuousBackupsCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      DescribeContinuousBackupsCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "DescribeContinuousBackups", {}).n("DynamoDBClient", "DescribeContinuousBackupsCommand").f(void 0, void 0).ser(se_DescribeContinuousBackupsCommand).de(de_DescribeContinuousBackupsCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeContributorInsightsCommand.js
  var DescribeContributorInsightsCommand;
  var init_DescribeContributorInsightsCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeContributorInsightsCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      DescribeContributorInsightsCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "DescribeContributorInsights", {}).n("DynamoDBClient", "DescribeContributorInsightsCommand").f(void 0, void 0).ser(se_DescribeContributorInsightsCommand).de(de_DescribeContributorInsightsCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeExportCommand.js
  var DescribeExportCommand;
  var init_DescribeExportCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeExportCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      DescribeExportCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "DescribeExport", {}).n("DynamoDBClient", "DescribeExportCommand").f(void 0, void 0).ser(se_DescribeExportCommand).de(de_DescribeExportCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeGlobalTableCommand.js
  var DescribeGlobalTableCommand;
  var init_DescribeGlobalTableCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeGlobalTableCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      DescribeGlobalTableCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "DescribeGlobalTable", {}).n("DynamoDBClient", "DescribeGlobalTableCommand").f(void 0, void 0).ser(se_DescribeGlobalTableCommand).de(de_DescribeGlobalTableCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeGlobalTableSettingsCommand.js
  var DescribeGlobalTableSettingsCommand;
  var init_DescribeGlobalTableSettingsCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeGlobalTableSettingsCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      DescribeGlobalTableSettingsCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "DescribeGlobalTableSettings", {}).n("DynamoDBClient", "DescribeGlobalTableSettingsCommand").f(void 0, void 0).ser(se_DescribeGlobalTableSettingsCommand).de(de_DescribeGlobalTableSettingsCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeImportCommand.js
  var DescribeImportCommand;
  var init_DescribeImportCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeImportCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      DescribeImportCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "DescribeImport", {}).n("DynamoDBClient", "DescribeImportCommand").f(void 0, void 0).ser(se_DescribeImportCommand).de(de_DescribeImportCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeKinesisStreamingDestinationCommand.js
  var DescribeKinesisStreamingDestinationCommand;
  var init_DescribeKinesisStreamingDestinationCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeKinesisStreamingDestinationCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      DescribeKinesisStreamingDestinationCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "DescribeKinesisStreamingDestination", {}).n("DynamoDBClient", "DescribeKinesisStreamingDestinationCommand").f(void 0, void 0).ser(se_DescribeKinesisStreamingDestinationCommand).de(de_DescribeKinesisStreamingDestinationCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeLimitsCommand.js
  var DescribeLimitsCommand;
  var init_DescribeLimitsCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeLimitsCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      DescribeLimitsCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "DescribeLimits", {}).n("DynamoDBClient", "DescribeLimitsCommand").f(void 0, void 0).ser(se_DescribeLimitsCommand).de(de_DescribeLimitsCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeTableCommand.js
  var DescribeTableCommand;
  var init_DescribeTableCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeTableCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      DescribeTableCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "DescribeTable", {}).n("DynamoDBClient", "DescribeTableCommand").f(void 0, void 0).ser(se_DescribeTableCommand).de(de_DescribeTableCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeTableReplicaAutoScalingCommand.js
  var DescribeTableReplicaAutoScalingCommand;
  var init_DescribeTableReplicaAutoScalingCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeTableReplicaAutoScalingCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      DescribeTableReplicaAutoScalingCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "DescribeTableReplicaAutoScaling", {}).n("DynamoDBClient", "DescribeTableReplicaAutoScalingCommand").f(void 0, void 0).ser(se_DescribeTableReplicaAutoScalingCommand).de(de_DescribeTableReplicaAutoScalingCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeTimeToLiveCommand.js
  var DescribeTimeToLiveCommand;
  var init_DescribeTimeToLiveCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeTimeToLiveCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      DescribeTimeToLiveCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "DescribeTimeToLive", {}).n("DynamoDBClient", "DescribeTimeToLiveCommand").f(void 0, void 0).ser(se_DescribeTimeToLiveCommand).de(de_DescribeTimeToLiveCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DisableKinesisStreamingDestinationCommand.js
  var DisableKinesisStreamingDestinationCommand;
  var init_DisableKinesisStreamingDestinationCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DisableKinesisStreamingDestinationCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      DisableKinesisStreamingDestinationCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "DisableKinesisStreamingDestination", {}).n("DynamoDBClient", "DisableKinesisStreamingDestinationCommand").f(void 0, void 0).ser(se_DisableKinesisStreamingDestinationCommand).de(de_DisableKinesisStreamingDestinationCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/EnableKinesisStreamingDestinationCommand.js
  var EnableKinesisStreamingDestinationCommand;
  var init_EnableKinesisStreamingDestinationCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/EnableKinesisStreamingDestinationCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      EnableKinesisStreamingDestinationCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "EnableKinesisStreamingDestination", {}).n("DynamoDBClient", "EnableKinesisStreamingDestinationCommand").f(void 0, void 0).ser(se_EnableKinesisStreamingDestinationCommand).de(de_EnableKinesisStreamingDestinationCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ExecuteStatementCommand.js
  var ExecuteStatementCommand;
  var init_ExecuteStatementCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ExecuteStatementCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      ExecuteStatementCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "ExecuteStatement", {}).n("DynamoDBClient", "ExecuteStatementCommand").f(void 0, void 0).ser(se_ExecuteStatementCommand).de(de_ExecuteStatementCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ExecuteTransactionCommand.js
  var ExecuteTransactionCommand;
  var init_ExecuteTransactionCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ExecuteTransactionCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      ExecuteTransactionCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "ExecuteTransaction", {}).n("DynamoDBClient", "ExecuteTransactionCommand").f(void 0, void 0).ser(se_ExecuteTransactionCommand).de(de_ExecuteTransactionCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ExportTableToPointInTimeCommand.js
  var ExportTableToPointInTimeCommand;
  var init_ExportTableToPointInTimeCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ExportTableToPointInTimeCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      ExportTableToPointInTimeCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "ExportTableToPointInTime", {}).n("DynamoDBClient", "ExportTableToPointInTimeCommand").f(void 0, void 0).ser(se_ExportTableToPointInTimeCommand).de(de_ExportTableToPointInTimeCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/GetItemCommand.js
  var GetItemCommand;
  var init_GetItemCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/GetItemCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      GetItemCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "GetItem", {}).n("DynamoDBClient", "GetItemCommand").f(void 0, void 0).ser(se_GetItemCommand).de(de_GetItemCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ImportTableCommand.js
  var ImportTableCommand;
  var init_ImportTableCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ImportTableCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      ImportTableCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "ImportTable", {}).n("DynamoDBClient", "ImportTableCommand").f(void 0, void 0).ser(se_ImportTableCommand).de(de_ImportTableCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListBackupsCommand.js
  var ListBackupsCommand;
  var init_ListBackupsCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListBackupsCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      ListBackupsCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "ListBackups", {}).n("DynamoDBClient", "ListBackupsCommand").f(void 0, void 0).ser(se_ListBackupsCommand).de(de_ListBackupsCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListContributorInsightsCommand.js
  var ListContributorInsightsCommand;
  var init_ListContributorInsightsCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListContributorInsightsCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      ListContributorInsightsCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "ListContributorInsights", {}).n("DynamoDBClient", "ListContributorInsightsCommand").f(void 0, void 0).ser(se_ListContributorInsightsCommand).de(de_ListContributorInsightsCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListExportsCommand.js
  var ListExportsCommand;
  var init_ListExportsCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListExportsCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      ListExportsCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "ListExports", {}).n("DynamoDBClient", "ListExportsCommand").f(void 0, void 0).ser(se_ListExportsCommand).de(de_ListExportsCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListGlobalTablesCommand.js
  var ListGlobalTablesCommand;
  var init_ListGlobalTablesCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListGlobalTablesCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      ListGlobalTablesCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "ListGlobalTables", {}).n("DynamoDBClient", "ListGlobalTablesCommand").f(void 0, void 0).ser(se_ListGlobalTablesCommand).de(de_ListGlobalTablesCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListImportsCommand.js
  var ListImportsCommand;
  var init_ListImportsCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListImportsCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      ListImportsCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "ListImports", {}).n("DynamoDBClient", "ListImportsCommand").f(void 0, void 0).ser(se_ListImportsCommand).de(de_ListImportsCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListTablesCommand.js
  var ListTablesCommand;
  var init_ListTablesCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListTablesCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      ListTablesCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "ListTables", {}).n("DynamoDBClient", "ListTablesCommand").f(void 0, void 0).ser(se_ListTablesCommand).de(de_ListTablesCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListTagsOfResourceCommand.js
  var ListTagsOfResourceCommand;
  var init_ListTagsOfResourceCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListTagsOfResourceCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      ListTagsOfResourceCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "ListTagsOfResource", {}).n("DynamoDBClient", "ListTagsOfResourceCommand").f(void 0, void 0).ser(se_ListTagsOfResourceCommand).de(de_ListTagsOfResourceCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/PutItemCommand.js
  var PutItemCommand;
  var init_PutItemCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/PutItemCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      PutItemCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "PutItem", {}).n("DynamoDBClient", "PutItemCommand").f(void 0, void 0).ser(se_PutItemCommand).de(de_PutItemCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/QueryCommand.js
  var QueryCommand;
  var init_QueryCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/QueryCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      QueryCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "Query", {}).n("DynamoDBClient", "QueryCommand").f(void 0, void 0).ser(se_QueryCommand).de(de_QueryCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/RestoreTableFromBackupCommand.js
  var RestoreTableFromBackupCommand;
  var init_RestoreTableFromBackupCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/RestoreTableFromBackupCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      RestoreTableFromBackupCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "RestoreTableFromBackup", {}).n("DynamoDBClient", "RestoreTableFromBackupCommand").f(void 0, void 0).ser(se_RestoreTableFromBackupCommand).de(de_RestoreTableFromBackupCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/RestoreTableToPointInTimeCommand.js
  var RestoreTableToPointInTimeCommand;
  var init_RestoreTableToPointInTimeCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/RestoreTableToPointInTimeCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      RestoreTableToPointInTimeCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "RestoreTableToPointInTime", {}).n("DynamoDBClient", "RestoreTableToPointInTimeCommand").f(void 0, void 0).ser(se_RestoreTableToPointInTimeCommand).de(de_RestoreTableToPointInTimeCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ScanCommand.js
  var ScanCommand;
  var init_ScanCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ScanCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      ScanCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "Scan", {}).n("DynamoDBClient", "ScanCommand").f(void 0, void 0).ser(se_ScanCommand).de(de_ScanCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/TagResourceCommand.js
  var TagResourceCommand2;
  var init_TagResourceCommand2 = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/TagResourceCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      TagResourceCommand2 = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "TagResource", {}).n("DynamoDBClient", "TagResourceCommand").f(void 0, void 0).ser(se_TagResourceCommand2).de(de_TagResourceCommand2).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/TransactGetItemsCommand.js
  var TransactGetItemsCommand;
  var init_TransactGetItemsCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/TransactGetItemsCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      TransactGetItemsCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "TransactGetItems", {}).n("DynamoDBClient", "TransactGetItemsCommand").f(void 0, void 0).ser(se_TransactGetItemsCommand).de(de_TransactGetItemsCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/TransactWriteItemsCommand.js
  var TransactWriteItemsCommand;
  var init_TransactWriteItemsCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/TransactWriteItemsCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      TransactWriteItemsCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "TransactWriteItems", {}).n("DynamoDBClient", "TransactWriteItemsCommand").f(void 0, void 0).ser(se_TransactWriteItemsCommand).de(de_TransactWriteItemsCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UntagResourceCommand.js
  var UntagResourceCommand2;
  var init_UntagResourceCommand2 = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UntagResourceCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      UntagResourceCommand2 = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "UntagResource", {}).n("DynamoDBClient", "UntagResourceCommand").f(void 0, void 0).ser(se_UntagResourceCommand2).de(de_UntagResourceCommand2).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateContinuousBackupsCommand.js
  var UpdateContinuousBackupsCommand;
  var init_UpdateContinuousBackupsCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateContinuousBackupsCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      UpdateContinuousBackupsCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "UpdateContinuousBackups", {}).n("DynamoDBClient", "UpdateContinuousBackupsCommand").f(void 0, void 0).ser(se_UpdateContinuousBackupsCommand).de(de_UpdateContinuousBackupsCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateContributorInsightsCommand.js
  var UpdateContributorInsightsCommand;
  var init_UpdateContributorInsightsCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateContributorInsightsCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      UpdateContributorInsightsCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "UpdateContributorInsights", {}).n("DynamoDBClient", "UpdateContributorInsightsCommand").f(void 0, void 0).ser(se_UpdateContributorInsightsCommand).de(de_UpdateContributorInsightsCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateGlobalTableCommand.js
  var UpdateGlobalTableCommand;
  var init_UpdateGlobalTableCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateGlobalTableCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      UpdateGlobalTableCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "UpdateGlobalTable", {}).n("DynamoDBClient", "UpdateGlobalTableCommand").f(void 0, void 0).ser(se_UpdateGlobalTableCommand).de(de_UpdateGlobalTableCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateGlobalTableSettingsCommand.js
  var UpdateGlobalTableSettingsCommand;
  var init_UpdateGlobalTableSettingsCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateGlobalTableSettingsCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      UpdateGlobalTableSettingsCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "UpdateGlobalTableSettings", {}).n("DynamoDBClient", "UpdateGlobalTableSettingsCommand").f(void 0, void 0).ser(se_UpdateGlobalTableSettingsCommand).de(de_UpdateGlobalTableSettingsCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateItemCommand.js
  var UpdateItemCommand;
  var init_UpdateItemCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateItemCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      UpdateItemCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "UpdateItem", {}).n("DynamoDBClient", "UpdateItemCommand").f(void 0, void 0).ser(se_UpdateItemCommand).de(de_UpdateItemCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateKinesisStreamingDestinationCommand.js
  var UpdateKinesisStreamingDestinationCommand;
  var init_UpdateKinesisStreamingDestinationCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateKinesisStreamingDestinationCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      UpdateKinesisStreamingDestinationCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "UpdateKinesisStreamingDestination", {}).n("DynamoDBClient", "UpdateKinesisStreamingDestinationCommand").f(void 0, void 0).ser(se_UpdateKinesisStreamingDestinationCommand).de(de_UpdateKinesisStreamingDestinationCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateTableCommand.js
  var UpdateTableCommand;
  var init_UpdateTableCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateTableCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      UpdateTableCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "UpdateTable", {}).n("DynamoDBClient", "UpdateTableCommand").f(void 0, void 0).ser(se_UpdateTableCommand).de(de_UpdateTableCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateTableReplicaAutoScalingCommand.js
  var UpdateTableReplicaAutoScalingCommand;
  var init_UpdateTableReplicaAutoScalingCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateTableReplicaAutoScalingCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      UpdateTableReplicaAutoScalingCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "UpdateTableReplicaAutoScaling", {}).n("DynamoDBClient", "UpdateTableReplicaAutoScalingCommand").f(void 0, void 0).ser(se_UpdateTableReplicaAutoScalingCommand).de(de_UpdateTableReplicaAutoScalingCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateTimeToLiveCommand.js
  var UpdateTimeToLiveCommand;
  var init_UpdateTimeToLiveCommand = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateTimeToLiveCommand.js"() {
      init_dist_es15();
      init_dist_es14();
      init_dist_es26();
      init_EndpointParameters2();
      init_Aws_json1_0();
      UpdateTimeToLiveCommand = class extends Command.classBuilder().ep({
        ...commonParams2
      }).m(function(Command2, cs, config, o5) {
        return [
          getSerdePlugin(config, this.serialize, this.deserialize),
          getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
        ];
      }).s("DynamoDB_20120810", "UpdateTimeToLive", {}).n("DynamoDBClient", "UpdateTimeToLiveCommand").f(void 0, void 0).ser(se_UpdateTimeToLiveCommand).de(de_UpdateTimeToLiveCommand).build() {
      };
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/DynamoDB.js
  var commands2, DynamoDB;
  var init_DynamoDB = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/DynamoDB.js"() {
      init_dist_es26();
      init_BatchExecuteStatementCommand();
      init_BatchGetItemCommand();
      init_BatchWriteItemCommand();
      init_CreateBackupCommand();
      init_CreateGlobalTableCommand();
      init_CreateTableCommand();
      init_DeleteBackupCommand();
      init_DeleteItemCommand();
      init_DeleteTableCommand();
      init_DescribeBackupCommand();
      init_DescribeContinuousBackupsCommand();
      init_DescribeContributorInsightsCommand();
      init_DescribeEndpointsCommand();
      init_DescribeExportCommand();
      init_DescribeGlobalTableCommand();
      init_DescribeGlobalTableSettingsCommand();
      init_DescribeImportCommand();
      init_DescribeKinesisStreamingDestinationCommand();
      init_DescribeLimitsCommand();
      init_DescribeTableCommand();
      init_DescribeTableReplicaAutoScalingCommand();
      init_DescribeTimeToLiveCommand();
      init_DisableKinesisStreamingDestinationCommand();
      init_EnableKinesisStreamingDestinationCommand();
      init_ExecuteStatementCommand();
      init_ExecuteTransactionCommand();
      init_ExportTableToPointInTimeCommand();
      init_GetItemCommand();
      init_ImportTableCommand();
      init_ListBackupsCommand();
      init_ListContributorInsightsCommand();
      init_ListExportsCommand();
      init_ListGlobalTablesCommand();
      init_ListImportsCommand();
      init_ListTablesCommand();
      init_ListTagsOfResourceCommand();
      init_PutItemCommand();
      init_QueryCommand();
      init_RestoreTableFromBackupCommand();
      init_RestoreTableToPointInTimeCommand();
      init_ScanCommand();
      init_TagResourceCommand2();
      init_TransactGetItemsCommand();
      init_TransactWriteItemsCommand();
      init_UntagResourceCommand2();
      init_UpdateContinuousBackupsCommand();
      init_UpdateContributorInsightsCommand();
      init_UpdateGlobalTableCommand();
      init_UpdateGlobalTableSettingsCommand();
      init_UpdateItemCommand();
      init_UpdateKinesisStreamingDestinationCommand();
      init_UpdateTableCommand();
      init_UpdateTableReplicaAutoScalingCommand();
      init_UpdateTimeToLiveCommand();
      init_DynamoDBClient();
      commands2 = {
        BatchExecuteStatementCommand,
        BatchGetItemCommand,
        BatchWriteItemCommand,
        CreateBackupCommand,
        CreateGlobalTableCommand,
        CreateTableCommand,
        DeleteBackupCommand,
        DeleteItemCommand,
        DeleteTableCommand,
        DescribeBackupCommand,
        DescribeContinuousBackupsCommand,
        DescribeContributorInsightsCommand,
        DescribeEndpointsCommand,
        DescribeExportCommand,
        DescribeGlobalTableCommand,
        DescribeGlobalTableSettingsCommand,
        DescribeImportCommand,
        DescribeKinesisStreamingDestinationCommand,
        DescribeLimitsCommand,
        DescribeTableCommand,
        DescribeTableReplicaAutoScalingCommand,
        DescribeTimeToLiveCommand,
        DisableKinesisStreamingDestinationCommand,
        EnableKinesisStreamingDestinationCommand,
        ExecuteStatementCommand,
        ExecuteTransactionCommand,
        ExportTableToPointInTimeCommand,
        GetItemCommand,
        ImportTableCommand,
        ListBackupsCommand,
        ListContributorInsightsCommand,
        ListExportsCommand,
        ListGlobalTablesCommand,
        ListImportsCommand,
        ListTablesCommand,
        ListTagsOfResourceCommand,
        PutItemCommand,
        QueryCommand,
        RestoreTableFromBackupCommand,
        RestoreTableToPointInTimeCommand,
        ScanCommand,
        TagResourceCommand: TagResourceCommand2,
        TransactGetItemsCommand,
        TransactWriteItemsCommand,
        UntagResourceCommand: UntagResourceCommand2,
        UpdateContinuousBackupsCommand,
        UpdateContributorInsightsCommand,
        UpdateGlobalTableCommand,
        UpdateGlobalTableSettingsCommand,
        UpdateItemCommand,
        UpdateKinesisStreamingDestinationCommand,
        UpdateTableCommand,
        UpdateTableReplicaAutoScalingCommand,
        UpdateTimeToLiveCommand
      };
      DynamoDB = class extends DynamoDBClient {
      };
      createAggregatedClient(commands2, DynamoDB);
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/commands/index.js
  var init_commands2 = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/commands/index.js"() {
      init_BatchExecuteStatementCommand();
      init_BatchGetItemCommand();
      init_BatchWriteItemCommand();
      init_CreateBackupCommand();
      init_CreateGlobalTableCommand();
      init_CreateTableCommand();
      init_DeleteBackupCommand();
      init_DeleteItemCommand();
      init_DeleteTableCommand();
      init_DescribeBackupCommand();
      init_DescribeContinuousBackupsCommand();
      init_DescribeContributorInsightsCommand();
      init_DescribeEndpointsCommand();
      init_DescribeExportCommand();
      init_DescribeGlobalTableCommand();
      init_DescribeGlobalTableSettingsCommand();
      init_DescribeImportCommand();
      init_DescribeKinesisStreamingDestinationCommand();
      init_DescribeLimitsCommand();
      init_DescribeTableCommand();
      init_DescribeTableReplicaAutoScalingCommand();
      init_DescribeTimeToLiveCommand();
      init_DisableKinesisStreamingDestinationCommand();
      init_EnableKinesisStreamingDestinationCommand();
      init_ExecuteStatementCommand();
      init_ExecuteTransactionCommand();
      init_ExportTableToPointInTimeCommand();
      init_GetItemCommand();
      init_ImportTableCommand();
      init_ListBackupsCommand();
      init_ListContributorInsightsCommand();
      init_ListExportsCommand();
      init_ListGlobalTablesCommand();
      init_ListImportsCommand();
      init_ListTablesCommand();
      init_ListTagsOfResourceCommand();
      init_PutItemCommand();
      init_QueryCommand();
      init_RestoreTableFromBackupCommand();
      init_RestoreTableToPointInTimeCommand();
      init_ScanCommand();
      init_TagResourceCommand2();
      init_TransactGetItemsCommand();
      init_TransactWriteItemsCommand();
      init_UntagResourceCommand2();
      init_UpdateContinuousBackupsCommand();
      init_UpdateContributorInsightsCommand();
      init_UpdateGlobalTableCommand();
      init_UpdateGlobalTableSettingsCommand();
      init_UpdateItemCommand();
      init_UpdateKinesisStreamingDestinationCommand();
      init_UpdateTableCommand();
      init_UpdateTableReplicaAutoScalingCommand();
      init_UpdateTimeToLiveCommand();
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/Interfaces.js
  var init_Interfaces2 = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/Interfaces.js"() {
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ListContributorInsightsPaginator.js
  var paginateListContributorInsights;
  var init_ListContributorInsightsPaginator = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ListContributorInsightsPaginator.js"() {
      init_dist_es28();
      init_ListContributorInsightsCommand();
      init_DynamoDBClient();
      paginateListContributorInsights = createPaginator(DynamoDBClient, ListContributorInsightsCommand, "NextToken", "NextToken", "MaxResults");
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ListExportsPaginator.js
  var paginateListExports;
  var init_ListExportsPaginator = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ListExportsPaginator.js"() {
      init_dist_es28();
      init_ListExportsCommand();
      init_DynamoDBClient();
      paginateListExports = createPaginator(DynamoDBClient, ListExportsCommand, "NextToken", "NextToken", "MaxResults");
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ListImportsPaginator.js
  var paginateListImports;
  var init_ListImportsPaginator = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ListImportsPaginator.js"() {
      init_dist_es28();
      init_ListImportsCommand();
      init_DynamoDBClient();
      paginateListImports = createPaginator(DynamoDBClient, ListImportsCommand, "NextToken", "NextToken", "PageSize");
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ListTablesPaginator.js
  var paginateListTables;
  var init_ListTablesPaginator = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ListTablesPaginator.js"() {
      init_dist_es28();
      init_ListTablesCommand();
      init_DynamoDBClient();
      paginateListTables = createPaginator(DynamoDBClient, ListTablesCommand, "ExclusiveStartTableName", "LastEvaluatedTableName", "Limit");
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/QueryPaginator.js
  var paginateQuery;
  var init_QueryPaginator = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/QueryPaginator.js"() {
      init_dist_es28();
      init_QueryCommand();
      init_DynamoDBClient();
      paginateQuery = createPaginator(DynamoDBClient, QueryCommand, "ExclusiveStartKey", "LastEvaluatedKey", "Limit");
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ScanPaginator.js
  var paginateScan;
  var init_ScanPaginator = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ScanPaginator.js"() {
      init_dist_es28();
      init_ScanCommand();
      init_DynamoDBClient();
      paginateScan = createPaginator(DynamoDBClient, ScanCommand, "ExclusiveStartKey", "LastEvaluatedKey", "Limit");
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/index.js
  var init_pagination3 = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/index.js"() {
      init_Interfaces2();
      init_ListContributorInsightsPaginator();
      init_ListExportsPaginator();
      init_ListImportsPaginator();
      init_ListTablesPaginator();
      init_QueryPaginator();
      init_ScanPaginator();
    }
  });

  // node_modules/@smithy/util-waiter/dist-es/utils/sleep.js
  var init_sleep = __esm({
    "node_modules/@smithy/util-waiter/dist-es/utils/sleep.js"() {
    }
  });

  // node_modules/@smithy/util-waiter/dist-es/waiter.js
  var WaiterState;
  var init_waiter2 = __esm({
    "node_modules/@smithy/util-waiter/dist-es/waiter.js"() {
      (function(WaiterState2) {
        WaiterState2["ABORTED"] = "ABORTED";
        WaiterState2["FAILURE"] = "FAILURE";
        WaiterState2["SUCCESS"] = "SUCCESS";
        WaiterState2["RETRY"] = "RETRY";
        WaiterState2["TIMEOUT"] = "TIMEOUT";
      })(WaiterState || (WaiterState = {}));
    }
  });

  // node_modules/@smithy/util-waiter/dist-es/poller.js
  var init_poller = __esm({
    "node_modules/@smithy/util-waiter/dist-es/poller.js"() {
      init_sleep();
      init_waiter2();
    }
  });

  // node_modules/@smithy/util-waiter/dist-es/utils/validate.js
  var init_validate2 = __esm({
    "node_modules/@smithy/util-waiter/dist-es/utils/validate.js"() {
    }
  });

  // node_modules/@smithy/util-waiter/dist-es/utils/index.js
  var init_utils3 = __esm({
    "node_modules/@smithy/util-waiter/dist-es/utils/index.js"() {
      init_sleep();
      init_validate2();
    }
  });

  // node_modules/@smithy/util-waiter/dist-es/createWaiter.js
  var init_createWaiter = __esm({
    "node_modules/@smithy/util-waiter/dist-es/createWaiter.js"() {
      init_poller();
      init_utils3();
      init_waiter2();
    }
  });

  // node_modules/@smithy/util-waiter/dist-es/index.js
  var init_dist_es44 = __esm({
    "node_modules/@smithy/util-waiter/dist-es/index.js"() {
      init_createWaiter();
      init_waiter2();
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/waiters/waitForTableExists.js
  var init_waitForTableExists = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/waiters/waitForTableExists.js"() {
      init_dist_es44();
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/waiters/waitForTableNotExists.js
  var init_waitForTableNotExists = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/waiters/waitForTableNotExists.js"() {
      init_dist_es44();
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/waiters/index.js
  var init_waiters = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/waiters/index.js"() {
      init_waitForTableExists();
      init_waitForTableNotExists();
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/models/index.js
  var init_models2 = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/models/index.js"() {
      init_models_02();
    }
  });

  // node_modules/@aws-sdk/client-dynamodb/dist-es/index.js
  var init_dist_es45 = __esm({
    "node_modules/@aws-sdk/client-dynamodb/dist-es/index.js"() {
      init_DynamoDBClient();
      init_DynamoDB();
      init_commands2();
      init_pagination3();
      init_waiters();
      init_models2();
      init_dist_es7();
    }
  });

  // src/js/frontend/utils/createDynamoDBClient.js
  var require_createDynamoDBClient = __commonJS({
    "src/js/frontend/utils/createDynamoDBClient.js"(exports2, module) {
      init_dist_es40();
      init_dist_es41();
      init_dist_es45();
      var createDynamoDBClient2 = (region = "us-west-2", identityPoolId = "us-west-2:5cf2c915-001b-4190-ad65-6f10af3a375c") => {
        return new DynamoDBClient({
          region,
          credentials: fromCognitoIdentityPool({
            client: new CognitoIdentityClient({ region }),
            identityPoolId
          })
        });
      };
      module.exports = { createDynamoDBClient: createDynamoDBClient2 };
    }
  });

  // src/js/frontend/utils/fetchDynamoDB.js
  var require_fetchDynamoDB = __commonJS({
    "src/js/frontend/utils/fetchDynamoDB.js"(exports2, module) {
      init_dist_es45();
      async function fetchPostsFromBoard2(tableName, dynamoDBClient, theDirectoryWeWant, limit = 5, startAfterPostId = null) {
        theDirectoryWeWant = `/${theDirectoryWeWant}/`;
        try {
          const params = {
            TableName: tableName,
            // Replace with your DynamoDB table name
            KeyConditionExpression: "#pk = :boardId",
            ExpressionAttributeNames: {
              "#pk": "dir"
            },
            ExpressionAttributeValues: {
              ":boardId": { S: theDirectoryWeWant }
            },
            ScanIndexForward: false,
            // Set to false to get the newest posts first
            Limit: limit
          };
          if (startAfterPostId) {
            params.ExclusiveStartKey = {
              "dir": { S: theDirectoryWeWant },
              "unix": { S: startAfterPostId }
            };
          }
          const command = new QueryCommand(params);
          const { Items, LastEvaluatedKey } = await dynamoDBClient.send(command);
          const processedItems = Items.map((item) => ({
            theDir: item.dir.S,
            imageUrl: item.imgURL?.S || "",
            comments: item.comments?.S || "",
            theFileName: item.ogfilename?.S || "",
            theText: item.text?.S || "",
            theUnix: item.unix.N || ""
          }));
          return {
            items: processedItems,
            lastEvaluatedKey: LastEvaluatedKey ? LastEvaluatedKey.unix.S : null
          };
        } catch (error) {
          console.error("Error fetching posts:", error);
          throw new Error("Failed to fetch posts");
        }
      }
      module.exports = fetchPostsFromBoard2;
    }
  });

  // src/js/frontend/utils/convertImageToCompressedWebP.js
  var require_convertImageToCompressedWebP = __commonJS({
    "src/js/frontend/utils/convertImageToCompressedWebP.js"(exports2, module) {
      async function compressImage2(file) {
        const MAX_SIZE_MB = 3;
        const MB = 1024 * 1024;
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            let quality = 0.8;
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, img.width, img.height);
            const compress = () => {
              canvas.toBlob((blob) => {
                if (blob.size / MB <= MAX_SIZE_MB) {
                  resolve(blob);
                } else if (quality > 0.1) {
                  quality -= 0.1;
                  canvas.toBlob(compress, "image/webp", quality);
                } else {
                  reject(new Error("Unable to compress image below 3 MB"));
                }
              }, "image/webp", quality);
            };
            compress();
          };
          img.onerror = () => {
            reject(new Error("Image loading error"));
          };
          const reader = new FileReader();
          reader.onload = (e5) => {
            img.src = e5.target.result;
          };
          reader.onerror = () => {
            reject(new Error("FileReader error"));
          };
          reader.readAsDataURL(file);
        });
      }
      module.exports.compressImage = compressImage2;
    }
  });

  // src/js/frontend/utils/GCF_PostPost.js
  var require_GCF_PostPost = __commonJS({
    "src/js/frontend/utils/GCF_PostPost.js"(exports2, module) {
      async function uploadSockToCloudFunction2(dir, fileName, imageBlob, text) {
        const cloudFunctionUrl = "https://us-central1-enduring-maxim-411523.cloudfunctions.net/girlsock-directory_image-upload";
        const imageContent = await toBase642(imageBlob);
        fileName += ".webp";
        const body = JSON.stringify({
          dir,
          fileName,
          imageContent,
          text
        });
        try {
          const response = await fetch(cloudFunctionUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body
          });
          const responseClone = response.clone();
          return await responseClone;
        } catch (error) {
          throw new Error(`Network error: ${error.message}`);
        }
      }
      function toBase642(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result.split(",")[1]);
          reader.onerror = (error) => reject(error);
        });
      }
      module.exports.uploadSockToCloudFunction = uploadSockToCloudFunction2;
    }
  });

  // src/js/frontend/components/girl.js
  var girl_exports = {};
  __export(girl_exports, {
    sock: () => sock
  });
  var sock;
  var init_girl = __esm({
    "src/js/frontend/components/girl.js"() {
      init_lit_html();
      sock = (imgUri, imgFileName, imgRes, commentsCount, txt, id, timeStr) => x`
    <article>
        <img class="image", id="img-${id}" src="${imgUri}" alt="user attached image" loading="lazy" onclick="imgToggleBig(this);">
        <div class="meta">
            <span style="max-width: 50%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${imgFileName}</span>
            <span style="display: inline-block; overflow: hidden;"><span id="imgRes-${id}">(${imgRes})</span> / <i>${timeStr}</i></span>
        </div>
        <div class="body">
            ${txt}
        </div>
    </article>
`;
    }
  });

  // node_modules/cute-util/src/index.js
  var require_src = __commonJS({
    "node_modules/cute-util/src/index.js"(exports2, module) {
      function getLastExtensionFromUri(uri) {
        let ext = getFileNameFromUri2(uri).split(".").pop().toLowerCase();
        return ext ? ext : "";
      }
      function getFileNameFromUri2(uri) {
        return uri.split("/").pop().split("#")[0].split("?")[0];
      }
      function getMimeTypeFromUri(uri) {
        const mimeTypes = {
          "": "application/octet-stream",
          "jpg": "image/jpeg",
          "jpeg": "image/jpeg",
          "png": "image/png",
          "gif": "image/gif",
          "bmp": "image/bmp",
          "tiff": "image/tiff",
          "mp3": "audio/mpeg",
          "wav": "audio/wav",
          "mp4": "video/mp4",
          "mov": "video/quicktime",
          "pdf": "application/pdf",
          "mpeg": "video/mpeg",
          "mpga": "audio/mpeg",
          "m4a": "audio/mp4",
          "webm": "video/webm"
        };
        return mimeTypes[getLastExtensionFromUri(uri)];
      }
      module.exports = { getLastExtension: getLastExtensionFromUri, getMimeTypeFromUri, getFileNameFromUri: getFileNameFromUri2 };
    }
  });

  // src/js/frontend/socks.index.js
  init_lit_html();

  // node_modules/date-fns/toDate.mjs
  function toDate(argument) {
    const argStr = Object.prototype.toString.call(argument);
    if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
      return new argument.constructor(+argument);
    } else if (typeof argument === "number" || argStr === "[object Number]" || typeof argument === "string" || argStr === "[object String]") {
      return new Date(argument);
    } else {
      return /* @__PURE__ */ new Date(NaN);
    }
  }

  // node_modules/date-fns/constants.mjs
  var daysInYear = 365.2425;
  var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
  var minTime = -maxTime;
  var minutesInMonth = 43200;
  var minutesInDay = 1440;
  var secondsInHour = 3600;
  var secondsInDay = secondsInHour * 24;
  var secondsInWeek = secondsInDay * 7;
  var secondsInYear = secondsInDay * daysInYear;
  var secondsInMonth = secondsInYear / 12;
  var secondsInQuarter = secondsInMonth * 3;

  // node_modules/date-fns/_lib/defaultOptions.mjs
  var defaultOptions = {};
  function getDefaultOptions() {
    return defaultOptions;
  }

  // node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs
  function getTimezoneOffsetInMilliseconds(date) {
    const _date = toDate(date);
    const utcDate = new Date(
      Date.UTC(
        _date.getFullYear(),
        _date.getMonth(),
        _date.getDate(),
        _date.getHours(),
        _date.getMinutes(),
        _date.getSeconds(),
        _date.getMilliseconds()
      )
    );
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
  }

  // node_modules/date-fns/compareAsc.mjs
  function compareAsc(dateLeft, dateRight) {
    const _dateLeft = toDate(dateLeft);
    const _dateRight = toDate(dateRight);
    const diff = _dateLeft.getTime() - _dateRight.getTime();
    if (diff < 0) {
      return -1;
    } else if (diff > 0) {
      return 1;
    } else {
      return diff;
    }
  }

  // node_modules/date-fns/differenceInCalendarMonths.mjs
  function differenceInCalendarMonths(dateLeft, dateRight) {
    const _dateLeft = toDate(dateLeft);
    const _dateRight = toDate(dateRight);
    const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();
    const monthDiff = _dateLeft.getMonth() - _dateRight.getMonth();
    return yearDiff * 12 + monthDiff;
  }

  // node_modules/date-fns/_lib/getRoundingMethod.mjs
  function getRoundingMethod(method) {
    return (number) => {
      const round = method ? Math[method] : Math.trunc;
      const result = round(number);
      return result === 0 ? 0 : result;
    };
  }

  // node_modules/date-fns/differenceInMilliseconds.mjs
  function differenceInMilliseconds(dateLeft, dateRight) {
    return +toDate(dateLeft) - +toDate(dateRight);
  }

  // node_modules/date-fns/endOfDay.mjs
  function endOfDay(date) {
    const _date = toDate(date);
    _date.setHours(23, 59, 59, 999);
    return _date;
  }

  // node_modules/date-fns/endOfMonth.mjs
  function endOfMonth(date) {
    const _date = toDate(date);
    const month = _date.getMonth();
    _date.setFullYear(_date.getFullYear(), month + 1, 0);
    _date.setHours(23, 59, 59, 999);
    return _date;
  }

  // node_modules/date-fns/isLastDayOfMonth.mjs
  function isLastDayOfMonth(date) {
    const _date = toDate(date);
    return +endOfDay(_date) === +endOfMonth(_date);
  }

  // node_modules/date-fns/differenceInMonths.mjs
  function differenceInMonths(dateLeft, dateRight) {
    const _dateLeft = toDate(dateLeft);
    const _dateRight = toDate(dateRight);
    const sign = compareAsc(_dateLeft, _dateRight);
    const difference = Math.abs(
      differenceInCalendarMonths(_dateLeft, _dateRight)
    );
    let result;
    if (difference < 1) {
      result = 0;
    } else {
      if (_dateLeft.getMonth() === 1 && _dateLeft.getDate() > 27) {
        _dateLeft.setDate(30);
      }
      _dateLeft.setMonth(_dateLeft.getMonth() - sign * difference);
      let isLastMonthNotFull = compareAsc(_dateLeft, _dateRight) === -sign;
      if (isLastDayOfMonth(toDate(dateLeft)) && difference === 1 && compareAsc(dateLeft, _dateRight) === 1) {
        isLastMonthNotFull = false;
      }
      result = sign * (difference - Number(isLastMonthNotFull));
    }
    return result === 0 ? 0 : result;
  }

  // node_modules/date-fns/differenceInSeconds.mjs
  function differenceInSeconds(dateLeft, dateRight, options) {
    const diff = differenceInMilliseconds(dateLeft, dateRight) / 1e3;
    return getRoundingMethod(options?.roundingMethod)(diff);
  }

  // node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs
  var formatDistanceLocale = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
    },
    xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
    },
    xHours: {
      one: "1 hour",
      other: "{{count}} hours"
    },
    xDays: {
      one: "1 day",
      other: "{{count}} days"
    },
    aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
    },
    xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
    },
    aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
    },
    xMonths: {
      one: "1 month",
      other: "{{count}} months"
    },
    aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
    },
    xYears: {
      one: "1 year",
      other: "{{count}} years"
    },
    overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
    },
    almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
    }
  };
  var formatDistance = (token, count, options) => {
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
      result = tokenValue;
    } else if (count === 1) {
      result = tokenValue.one;
    } else {
      result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "in " + result;
      } else {
        return result + " ago";
      }
    }
    return result;
  };

  // node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs
  function buildFormatLongFn(args) {
    return (options = {}) => {
      const width = options.width ? String(options.width) : args.defaultWidth;
      const format = args.formats[width] || args.formats[args.defaultWidth];
      return format;
    };
  }

  // node_modules/date-fns/locale/en-US/_lib/formatLong.mjs
  var dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  };
  var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  };
  var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  };
  var formatLong = {
    date: buildFormatLongFn({
      formats: dateFormats,
      defaultWidth: "full"
    }),
    time: buildFormatLongFn({
      formats: timeFormats,
      defaultWidth: "full"
    }),
    dateTime: buildFormatLongFn({
      formats: dateTimeFormats,
      defaultWidth: "full"
    })
  };

  // node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs
  var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  };
  var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];

  // node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs
  function buildLocalizeFn(args) {
    return (value, options) => {
      const context = options?.context ? String(options.context) : "standalone";
      let valuesArray;
      if (context === "formatting" && args.formattingValues) {
        const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
        const width = options?.width ? String(options.width) : defaultWidth;
        valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
      } else {
        const defaultWidth = args.defaultWidth;
        const width = options?.width ? String(options.width) : args.defaultWidth;
        valuesArray = args.values[width] || args.values[defaultWidth];
      }
      const index = args.argumentCallback ? args.argumentCallback(value) : value;
      return valuesArray[index];
    };
  }

  // node_modules/date-fns/locale/en-US/_lib/localize.mjs
  var eraValues = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
  };
  var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
  };
  var monthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  };
  var dayValues = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  };
  var dayPeriodValues = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    }
  };
  var formattingDayPeriodValues = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    }
  };
  var ordinalNumber = (dirtyNumber, _options) => {
    const number = Number(dirtyNumber);
    const rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
      switch (rem100 % 10) {
        case 1:
          return number + "st";
        case 2:
          return number + "nd";
        case 3:
          return number + "rd";
      }
    }
    return number + "th";
  };
  var localize = {
    ordinalNumber,
    era: buildLocalizeFn({
      values: eraValues,
      defaultWidth: "wide"
    }),
    quarter: buildLocalizeFn({
      values: quarterValues,
      defaultWidth: "wide",
      argumentCallback: (quarter) => quarter - 1
    }),
    month: buildLocalizeFn({
      values: monthValues,
      defaultWidth: "wide"
    }),
    day: buildLocalizeFn({
      values: dayValues,
      defaultWidth: "wide"
    }),
    dayPeriod: buildLocalizeFn({
      values: dayPeriodValues,
      defaultWidth: "wide",
      formattingValues: formattingDayPeriodValues,
      defaultFormattingWidth: "wide"
    })
  };

  // node_modules/date-fns/locale/_lib/buildMatchFn.mjs
  function buildMatchFn(args) {
    return (string, options = {}) => {
      const width = options.width;
      const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
      const matchResult = string.match(matchPattern);
      if (!matchResult) {
        return null;
      }
      const matchedString = matchResult[0];
      const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
      const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString))
      );
      let value;
      value = args.valueCallback ? args.valueCallback(key) : key;
      value = options.valueCallback ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      ) : value;
      const rest = string.slice(matchedString.length);
      return { value, rest };
    };
  }
  function findKey(object, predicate) {
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
        return key;
      }
    }
    return void 0;
  }
  function findIndex(array, predicate) {
    for (let key = 0; key < array.length; key++) {
      if (predicate(array[key])) {
        return key;
      }
    }
    return void 0;
  }

  // node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs
  function buildMatchPatternFn(args) {
    return (string, options = {}) => {
      const matchResult = string.match(args.matchPattern);
      if (!matchResult)
        return null;
      const matchedString = matchResult[0];
      const parseResult = string.match(args.parsePattern);
      if (!parseResult)
        return null;
      let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
      value = options.valueCallback ? options.valueCallback(value) : value;
      const rest = string.slice(matchedString.length);
      return { value, rest };
    };
  }

  // node_modules/date-fns/locale/en-US/_lib/match.mjs
  var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
  var parseOrdinalNumberPattern = /\d+/i;
  var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  };
  var parseEraPatterns = {
    any: [/^b/i, /^(a|c)/i]
  };
  var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  };
  var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
  };
  var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  };
  var parseMonthPatterns = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i
    ]
  };
  var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  };
  var parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  };
  var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  };
  var parseDayPeriodPatterns = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  };
  var match = {
    ordinalNumber: buildMatchPatternFn({
      matchPattern: matchOrdinalNumberPattern,
      parsePattern: parseOrdinalNumberPattern,
      valueCallback: (value) => parseInt(value, 10)
    }),
    era: buildMatchFn({
      matchPatterns: matchEraPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseEraPatterns,
      defaultParseWidth: "any"
    }),
    quarter: buildMatchFn({
      matchPatterns: matchQuarterPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseQuarterPatterns,
      defaultParseWidth: "any",
      valueCallback: (index) => index + 1
    }),
    month: buildMatchFn({
      matchPatterns: matchMonthPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseMonthPatterns,
      defaultParseWidth: "any"
    }),
    day: buildMatchFn({
      matchPatterns: matchDayPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseDayPatterns,
      defaultParseWidth: "any"
    }),
    dayPeriod: buildMatchFn({
      matchPatterns: matchDayPeriodPatterns,
      defaultMatchWidth: "any",
      parsePatterns: parseDayPeriodPatterns,
      defaultParseWidth: "any"
    })
  };

  // node_modules/date-fns/locale/en-US.mjs
  var enUS = {
    code: "en-US",
    formatDistance,
    formatLong,
    formatRelative,
    localize,
    match,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  };

  // node_modules/date-fns/formatDistance.mjs
  function formatDistance2(date, baseDate, options) {
    const defaultOptions2 = getDefaultOptions();
    const locale = options?.locale ?? defaultOptions2.locale ?? enUS;
    const minutesInAlmostTwoDays = 2520;
    const comparison = compareAsc(date, baseDate);
    if (isNaN(comparison)) {
      throw new RangeError("Invalid time value");
    }
    const localizeOptions = Object.assign({}, options, {
      addSuffix: options?.addSuffix,
      comparison
    });
    let dateLeft;
    let dateRight;
    if (comparison > 0) {
      dateLeft = toDate(baseDate);
      dateRight = toDate(date);
    } else {
      dateLeft = toDate(date);
      dateRight = toDate(baseDate);
    }
    const seconds = differenceInSeconds(dateRight, dateLeft);
    const offsetInSeconds = (getTimezoneOffsetInMilliseconds(dateRight) - getTimezoneOffsetInMilliseconds(dateLeft)) / 1e3;
    const minutes = Math.round((seconds - offsetInSeconds) / 60);
    let months;
    if (minutes < 2) {
      if (options?.includeSeconds) {
        if (seconds < 5) {
          return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
        } else if (seconds < 10) {
          return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
        } else if (seconds < 20) {
          return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
        } else if (seconds < 40) {
          return locale.formatDistance("halfAMinute", 0, localizeOptions);
        } else if (seconds < 60) {
          return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
        } else {
          return locale.formatDistance("xMinutes", 1, localizeOptions);
        }
      } else {
        if (minutes === 0) {
          return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
        } else {
          return locale.formatDistance("xMinutes", minutes, localizeOptions);
        }
      }
    } else if (minutes < 45) {
      return locale.formatDistance("xMinutes", minutes, localizeOptions);
    } else if (minutes < 90) {
      return locale.formatDistance("aboutXHours", 1, localizeOptions);
    } else if (minutes < minutesInDay) {
      const hours = Math.round(minutes / 60);
      return locale.formatDistance("aboutXHours", hours, localizeOptions);
    } else if (minutes < minutesInAlmostTwoDays) {
      return locale.formatDistance("xDays", 1, localizeOptions);
    } else if (minutes < minutesInMonth) {
      const days = Math.round(minutes / minutesInDay);
      return locale.formatDistance("xDays", days, localizeOptions);
    } else if (minutes < minutesInMonth * 2) {
      months = Math.round(minutes / minutesInMonth);
      return locale.formatDistance("aboutXMonths", months, localizeOptions);
    }
    months = differenceInMonths(dateRight, dateLeft);
    if (months < 12) {
      const nearestMonth = Math.round(minutes / minutesInMonth);
      return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
    } else {
      const monthsSinceStartOfYear = months % 12;
      const years = Math.trunc(months / 12);
      if (monthsSinceStartOfYear < 3) {
        return locale.formatDistance("aboutXYears", years, localizeOptions);
      } else if (monthsSinceStartOfYear < 9) {
        return locale.formatDistance("overXYears", years, localizeOptions);
      } else {
        return locale.formatDistance("almostXYears", years + 1, localizeOptions);
      }
    }
  }

  // node_modules/date-fns/formatDistanceToNow.mjs
  function formatDistanceToNow(date, options) {
    return formatDistance2(date, Date.now(), options);
  }

  // node_modules/cute-con/src/index.js
  var erro = (r5) => {
    detailedErrorLogger(r5);
  };
  function detailedErrorLogger(error, context = "") {
    console.error(`[Error${context ? ` in ${context}` : ""}]: ${error.message}
Error Name: ${error.name}
Stack Trace: ${error.stack}`);
    Object.keys(error).forEach((key) => {
      if (!["name", "message", "stack"].includes(key)) {
        console.log(`Additional Info - ${key}: ${error[key]}`);
      }
    });
  }

  // src/js/frontend/socks.index.js
  var { $: $3, $$: $$2, listen } = (init_index_cjs(), __toCommonJS(index_cjs_exports));
  var { createDynamoDBClient } = require_createDynamoDBClient();
  var fetchPostsFromBoard = require_fetchDynamoDB();
  var { compressImage } = require_convertImageToCompressedWebP();
  var { uploadSockToCloudFunction } = require_GCF_PostPost();
  var { sock: sock2 } = (init_girl(), __toCommonJS(girl_exports));
  var { getFileNameFromUri } = require_src();
  var USER_POSTS_TABLE = "girlsockdir";
  async function main() {
    let dirToPull = getLastPartOfUrl();
    if (dirToPull === "index.html") {
      dirToPull = "th";
    }
    getLatest(dirToPull);
    $3("#post-form-submit").click(submitPost);
  }
  async function getLatest(dir) {
    try {
      CuteLoadingModal.show();
      let posts2 = await fetchPostsFromBoard(USER_POSTS_TABLE, createDynamoDBClient(), dir, 20);
      CuteLoadingModal.hide();
    } catch (r5) {
      erro(r5);
    }
    if (posts.items.length === 0 || void 0 || null) {
      alert("Nothing found or server error.");
    }
    const allSocks = posts.items.map((post, index) => sock2(post.imageUrl, post.theFileName, "1x1", 0, post.theText, index, unixToRelativeTime(post.theUnix)));
    j(x`${allSocks}`, $3("#articles"));
    $$2("img.image").forEach((img) => {
      const setDim = () => document.getElementById(`imgRes-${img.id.split("-")[1]}`).textContent = `(${img.naturalWidth}x${img.naturalHeight})`;
      img.complete ? setDim() : img.onload = setDim;
    });
  }
  async function submitPost() {
    CuteLoadingModal.show();
    let dir = getLastPartOfUrl();
    if (dir === "index.html") {
      dir = "th";
    }
    const fileInput = $3("#post-image");
    const textInput = $3("#post-body")?.value;
    if (fileInput.files.length > 0) {
      const compressedImage = await compressImage(fileInput.files[0]);
      const response = await uploadSockToCloudFunction(`/${dir}/`, getFileNameFromUri(fileInput.files[0].name), compressedImage, textInput);
      console.log(response);
      if (response.ok) {
        CuteLoadingModal.hide();
        window.location.reload();
      } else {
        CuteLoadingModal.hide();
        alert("Upload failed: " + response);
      }
      return response;
    }
  }
  var CuteLoadingModal = /* @__PURE__ */ (() => {
    const cuteLoadingModalDisplayNoneHtml = () => x`
        <div id="post-form-submit-loading-modal" style="display:none; position:fixed; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.5);">
            <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); padding:20px; background:#fff;">
                Loading....
            </div>
        </div>
    `;
    return {
      show: () => {
        $3("#post-form-submit-loading-modal").style.display = "block";
      },
      hide: () => {
        $3("#post-form-submit-loading-modal").style.display = "none";
      }
    };
  })();
  var unixToRelativeTime = (unixTime) => formatDistanceToNow(new Date(unixTime * 1e3)) + " ago";
  var getLastPartOfUrl = () => {
    const segments = window.location.pathname.split("/").filter(Boolean);
    return segments.pop();
  };
  main();
})();
/*! Bundled license information:

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

cute-html/index.cjs.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
