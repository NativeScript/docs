import { inBrowser as lo, useData as De, useRoute as Nn, useRouter as oc } from "vitepress";
import { pushScopeId as ic, popScopeId as ac, defineComponent as L, nextTick as Ln, openBlock as g, createBlock as ue, createElementBlock as b, normalizeClass as te, renderSlot as Te, normalizeProps as sc, guardReactiveProps as lc, withScopeId as cc, resolveComponent as Oe, normalizeStyle as or, withKeys as uc, createElementVNode as h, Fragment as z, createCommentVNode as V, withCtx as he, createVNode as F, ref as A, createApp as fc, h as se, mergeProps as dc, toDisplayString as U, cloneVNode as pc, inject as me, provide as He, onMounted as le, watchEffect as ke, computed as T, watch as $e, onUnmounted as Ze, Teleport as hc, reactive as mc, unref as P, getCurrentInstance as cs, getCurrentScope as vc, onScopeDispose as gc, readonly as yc, shallowRef as _c, isRef as us, withDirectives as qt, renderList as ne, vModelSelect as bc, withModifiers as kt, resolveDynamicComponent as Mn, vShow as dr, createStaticVNode as fs, Transition as qr, createTextVNode as Le, resolveDirective as wc } from "vue";
function Xe(e) {
  return e.split("-")[0];
}
function Ft(e) {
  return e.split("-")[1];
}
function Rn(e) {
  return ["top", "bottom"].includes(Xe(e)) ? "x" : "y";
}
function zo(e) {
  return e === "y" ? "height" : "width";
}
function ri(e) {
  let {
    reference: t,
    floating: n,
    placement: r
  } = e;
  const o = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2;
  let a;
  switch (Xe(r)) {
    case "top":
      a = {
        x: o,
        y: t.y - n.height
      };
      break;
    case "bottom":
      a = {
        x: o,
        y: t.y + t.height
      };
      break;
    case "right":
      a = {
        x: t.x + t.width,
        y: i
      };
      break;
    case "left":
      a = {
        x: t.x - n.width,
        y: i
      };
      break;
    default:
      a = {
        x: t.x,
        y: t.y
      };
  }
  const s = Rn(r), l = zo(s);
  switch (Ft(r)) {
    case "start":
      a[s] = a[s] - (t[l] / 2 - n[l] / 2);
      break;
    case "end":
      a[s] = a[s] + (t[l] / 2 - n[l] / 2);
      break;
  }
  return a;
}
const Sc = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n;
  if (process.env.NODE_ENV !== "production" && (a == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), i.filter((p) => {
    let {
      name: v
    } = p;
    return v === "autoPlacement" || v === "flip";
  }).length > 1))
    throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement`", "middleware detected. This will lead to an infinite loop. Ensure only", "one of either has been passed to the `middleware` array."].join(" "));
  let s = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: l,
    y: u
  } = ri({
    ...s,
    placement: r
  }), c = r, f = {}, d = 0;
  for (let p = 0; p < i.length; p++) {
    if (process.env.NODE_ENV !== "production" && (d++, d > 100))
      throw new Error(["Floating UI: The middleware lifecycle appears to be", "running in an infinite loop. This is usually caused by a `reset`", "continually being returned without a break condition."].join(" "));
    const {
      name: v,
      fn: y
    } = i[p], {
      x: _,
      y: w,
      data: S,
      reset: x
    } = await y({
      x: l,
      y: u,
      initialPlacement: r,
      placement: c,
      strategy: o,
      middlewareData: f,
      rects: s,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (l = _ ?? l, u = w ?? u, f = {
      ...f,
      [v]: S ?? {}
    }, x) {
      typeof x == "object" && (x.placement && (c = x.placement), x.rects && (s = x.rects === !0 ? await a.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : x.rects), {
        x: l,
        y: u
      } = ri({
        ...s,
        placement: c
      })), p = -1;
      continue;
    }
  }
  return {
    x: l,
    y: u,
    placement: c,
    strategy: o,
    middlewareData: f
  };
};
function xc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ds(e) {
  return typeof e != "number" ? xc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function co(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function Ir(e, t) {
  t === void 0 && (t = {});
  const {
    x: n,
    y: r,
    platform: o,
    rects: i,
    elements: a,
    strategy: s
  } = e, {
    boundary: l = "clippingParents",
    rootBoundary: u = "viewport",
    elementContext: c = "floating",
    altBoundary: f = !1,
    padding: d = 0
  } = t, p = ds(d), y = a[f ? c === "floating" ? "reference" : "floating" : c], _ = await o.getClippingClientRect({
    element: await o.isElement(y) ? y : y.contextElement || await o.getDocumentElement({
      element: a.floating
    }),
    boundary: l,
    rootBoundary: u
  }), w = co(await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: c === "floating" ? {
      ...i.floating,
      x: n,
      y: r
    } : i.reference,
    offsetParent: await o.getOffsetParent({
      element: a.floating
    }),
    strategy: s
  }));
  return {
    top: _.top - w.top + p.top,
    bottom: w.bottom - _.bottom + p.bottom,
    left: _.left - w.left + p.left,
    right: w.right - _.right + p.right
  };
}
const Oc = Math.min, Ot = Math.max;
function uo(e, t, n) {
  return Ot(e, Oc(t, n));
}
const kc = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      element: n,
      padding: r = 0
    } = e ?? {}, {
      x: o,
      y: i,
      placement: a,
      rects: s,
      platform: l
    } = t;
    if (n == null)
      return process.env.NODE_ENV !== "production" && console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const u = ds(r), c = {
      x: o,
      y: i
    }, f = Xe(a), d = Rn(f), p = zo(d), v = await l.getDimensions({
      element: n
    }), y = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", w = s.reference[p] + s.reference[d] - c[d] - s.floating[p], S = c[d] - s.reference[d], x = await l.getOffsetParent({
      element: n
    }), $ = x ? d === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, k = w / 2 - S / 2, N = u[y], C = $ - v[p] - u[_], E = $ / 2 - v[p] / 2 + k, j = uo(N, E, C);
    return {
      data: {
        [d]: j,
        centerOffset: E - j
      }
    };
  }
}), $c = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function pr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => $c[t]);
}
function ps(e, t) {
  const n = Ft(e) === "start", r = Rn(e), o = zo(r);
  let i = r === "x" ? n ? "right" : "left" : n ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (i = pr(i)), {
    main: i,
    cross: pr(i)
  };
}
const Pc = {
  start: "end",
  end: "start"
};
function fo(e) {
  return e.replace(/start|end/g, (t) => Pc[t]);
}
const Ec = ["top", "right", "bottom", "left"], jc = /* @__PURE__ */ Ec.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
function Cc(e, t, n) {
  return (e ? [...n.filter((o) => Ft(o) === e), ...n.filter((o) => Ft(o) !== e)] : n.filter((o) => Xe(o) === o)).filter((o) => e ? Ft(o) === e || (t ? fo(o) !== o : !1) : !0);
}
const Ac = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var n, r, o, i, a, s;
      const {
        x: l,
        y: u,
        rects: c,
        middlewareData: f,
        placement: d
      } = t, {
        alignment: p = null,
        allowedPlacements: v = jc,
        autoAlignment: y = !0,
        ..._
      } = e;
      if ((n = f.autoPlacement) != null && n.skip)
        return {};
      const w = Cc(p, y, v), S = await Ir(t, _), x = (r = (o = f.autoPlacement) == null ? void 0 : o.index) != null ? r : 0, $ = w[x], {
        main: k,
        cross: N
      } = ps($, c);
      if (d !== $)
        return {
          x: l,
          y: u,
          reset: {
            placement: w[0]
          }
        };
      const C = [S[Xe($)], S[k], S[N]], E = [...(i = (a = f.autoPlacement) == null ? void 0 : a.overflows) != null ? i : [], {
        placement: $,
        overflows: C
      }], j = w[x + 1];
      if (j)
        return {
          data: {
            index: x + 1,
            overflows: E
          },
          reset: {
            placement: j
          }
        };
      const I = E.slice().sort((J, Y) => J.overflows[0] - Y.overflows[0]), H = (s = I.find((J) => {
        let {
          overflows: Y
        } = J;
        return Y.every((q) => q <= 0);
      })) == null ? void 0 : s.placement;
      return {
        data: {
          skip: !0
        },
        reset: {
          placement: H ?? I[0].placement
        }
      };
    }
  };
};
function Ic(e) {
  const t = pr(e);
  return [fo(e), t, fo(t)];
}
const Tc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: a,
        initialPlacement: s
      } = t;
      if ((n = i.flip) != null && n.skip)
        return {};
      const {
        mainAxis: l = !0,
        crossAxis: u = !0,
        fallbackPlacements: c,
        fallbackStrategy: f = "bestFit",
        flipAlignment: d = !0,
        ...p
      } = e, v = Xe(o), _ = c || (v === s || !d ? [pr(s)] : Ic(s)), w = [s, ..._], S = await Ir(t, p), x = [];
      let $ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (l && x.push(S[v]), u) {
        const {
          main: E,
          cross: j
        } = ps(o, a);
        x.push(S[E], S[j]);
      }
      if ($ = [...$, {
        placement: o,
        overflows: x
      }], !x.every((E) => E <= 0)) {
        var k, N;
        const E = ((k = (N = i.flip) == null ? void 0 : N.index) != null ? k : 0) + 1, j = w[E];
        if (j)
          return {
            data: {
              index: E,
              overflows: $
            },
            reset: {
              placement: j
            }
          };
        let I = "bottom";
        switch (f) {
          case "bestFit": {
            var C;
            const H = (C = $.slice().sort((J, Y) => J.overflows.filter((q) => q > 0).reduce((q, ge) => q + ge, 0) - Y.overflows.filter((q) => q > 0).reduce((q, ge) => q + ge, 0))[0]) == null ? void 0 : C.placement;
            H && (I = H);
            break;
          }
          case "initialPlacement":
            I = s;
            break;
        }
        return {
          data: {
            skip: !0
          },
          reset: {
            placement: I
          }
        };
      }
      return {};
    }
  };
};
function Dc(e) {
  let {
    placement: t,
    rects: n,
    value: r
  } = e;
  const o = Xe(t), i = ["left", "top"].includes(o) ? -1 : 1, a = typeof r == "function" ? r({
    ...n,
    placement: t
  }) : r, {
    mainAxis: s,
    crossAxis: l
  } = typeof a == "number" ? {
    mainAxis: a,
    crossAxis: 0
  } : {
    mainAxis: 0,
    crossAxis: 0,
    ...a
  };
  return Rn(o) === "x" ? {
    x: l,
    y: s * i
  } : {
    x: s * i,
    y: l
  };
}
const Nc = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i
      } = t, a = Dc({
        placement: o,
        rects: i,
        value: e
      });
      return {
        x: n + a.x,
        y: r + a.y,
        data: a
      };
    }
  };
};
function Lc(e) {
  return e === "x" ? "y" : "x";
}
const Mc = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: s = {
          fn: (_) => {
            let {
              x: w,
              y: S
            } = _;
            return {
              x: w,
              y: S
            };
          }
        },
        ...l
      } = e, u = {
        x: n,
        y: r
      }, c = await Ir(t, l), f = Rn(Xe(o)), d = Lc(f);
      let p = u[f], v = u[d];
      if (i) {
        const _ = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", S = p + c[_], x = p - c[w];
        p = uo(S, p, x);
      }
      if (a) {
        const _ = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", S = v + c[_], x = v - c[w];
        v = uo(S, v, x);
      }
      const y = s.fn({
        ...t,
        [f]: p,
        [d]: v
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r
        }
      };
    }
  };
}, Rc = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: r,
        rects: o,
        middlewareData: i
      } = t, {
        apply: a,
        ...s
      } = e;
      if ((n = i.size) != null && n.skip)
        return {};
      const l = await Ir(t, s), u = Xe(r), c = Ft(r) === "end";
      let f, d;
      u === "top" || u === "bottom" ? (f = u, d = c ? "left" : "right") : (d = u, f = c ? "top" : "bottom");
      const p = Ot(l.left, 0), v = Ot(l.right, 0), y = Ot(l.top, 0), _ = Ot(l.bottom, 0), w = {
        height: o.floating.height - (["left", "right"].includes(r) ? 2 * (y !== 0 || _ !== 0 ? y + _ : Ot(l.top, l.bottom)) : l[f]),
        width: o.floating.width - (["top", "bottom"].includes(r) ? 2 * (p !== 0 || v !== 0 ? p + v : Ot(l.left, l.right)) : l[d])
      };
      return a == null || a({
        ...w,
        ...o
      }), {
        data: {
          skip: !0
        },
        reset: {
          rects: !0
        }
      };
    }
  };
};
function Vo(e) {
  return (e == null ? void 0 : e.toString()) === "[object Window]";
}
function dt(e) {
  if (e == null)
    return window;
  if (!Vo(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Tr(e) {
  return dt(e).getComputedStyle(e);
}
function Qe(e) {
  return Vo(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function Ye(e) {
  return e instanceof dt(e).HTMLElement;
}
function hr(e) {
  return e instanceof dt(e).Element;
}
function Hc(e) {
  return e instanceof dt(e).Node;
}
function hs(e) {
  const t = dt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Dr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r
  } = Tr(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n);
}
function Bc(e) {
  return ["table", "td", "th"].includes(Qe(e));
}
function ms(e) {
  const t = navigator.userAgent.toLowerCase().includes("firefox"), n = Tr(e);
  return n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].includes(n.willChange) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1);
}
const oi = Math.min, ln = Math.max, mr = Math.round;
function Wt(e, t) {
  t === void 0 && (t = !1);
  const n = e.getBoundingClientRect();
  let r = 1, o = 1;
  return t && Ye(e) && (r = e.offsetWidth > 0 && mr(n.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && mr(n.height) / e.offsetHeight || 1), {
    width: n.width / r,
    height: n.height / o,
    top: n.top / o,
    right: n.right / r,
    bottom: n.bottom / o,
    left: n.left / r,
    x: n.left / r,
    y: n.top / o
  };
}
function pt(e) {
  return ((Hc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Nr(e) {
  return Vo(e) ? {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  } : {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function vs(e) {
  return Wt(pt(e)).left + Nr(e).scrollLeft;
}
function Fc(e) {
  const t = Wt(e);
  return mr(t.width) !== e.offsetWidth || mr(t.height) !== e.offsetHeight;
}
function zc(e, t, n) {
  const r = Ye(t), o = pt(t), i = Wt(e, r && Fc(t));
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((Qe(t) !== "body" || Dr(o)) && (a = Nr(t)), Ye(t)) {
      const l = Wt(t, !0);
      s.x = l.x + t.clientLeft, s.y = l.y + t.clientTop;
    } else
      o && (s.x = vs(o));
  return {
    x: i.left + a.scrollLeft - s.x,
    y: i.top + a.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function Lr(e) {
  return Qe(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // @ts-ignore
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (hs(e) ? e.host : null) || // ShadowRoot detected
    pt(e)
  );
}
function ii(e) {
  return !Ye(e) || getComputedStyle(e).position === "fixed" ? null : e.offsetParent;
}
function Vc(e) {
  let t = Lr(e);
  for (; Ye(t) && !["html", "body"].includes(Qe(t)); ) {
    if (ms(t))
      return t;
    t = t.parentNode;
  }
  return null;
}
function po(e) {
  const t = dt(e);
  let n = ii(e);
  for (; n && Bc(n) && getComputedStyle(n).position === "static"; )
    n = ii(n);
  return n && (Qe(n) === "html" || Qe(n) === "body" && getComputedStyle(n).position === "static" && !ms(n)) ? t : n || Vc(e) || t;
}
function ai(e) {
  return {
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
function Uc(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = Ye(n), i = pt(n);
  if (n === i)
    return t;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = {
    x: 0,
    y: 0
  };
  if ((o || !o && r !== "fixed") && ((Qe(n) !== "body" || Dr(i)) && (a = Nr(n)), Ye(n))) {
    const l = Wt(n, !0);
    s.x = l.x + n.clientLeft, s.y = l.y + n.clientTop;
  }
  return {
    ...t,
    x: t.x - a.scrollLeft + s.x,
    y: t.y - a.scrollTop + s.y
  };
}
function qc(e) {
  const t = dt(e), n = pt(e), r = t.visualViewport;
  let o = n.clientWidth, i = n.clientHeight, a = 0, s = 0;
  return r && (o = r.width, i = r.height, Math.abs(t.innerWidth / r.scale - r.width) < 0.01 && (a = r.offsetLeft, s = r.offsetTop)), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function Wc(e) {
  var t;
  const n = pt(e), r = Nr(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = ln(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = ln(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let s = -r.scrollLeft + vs(e);
  const l = -r.scrollTop;
  return Tr(o || n).direction === "rtl" && (s += ln(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function gs(e) {
  return ["html", "body", "#document"].includes(Qe(e)) ? e.ownerDocument.body : Ye(e) && Dr(e) ? e : gs(Lr(e));
}
function vr(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = gs(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = dt(r), a = o ? [i].concat(i.visualViewport || [], Dr(r) ? r : []) : r, s = t.concat(a);
  return o ? s : (
    // @ts-ignore: isBody tells us target will be an HTMLElement here
    s.concat(vr(Lr(a)))
  );
}
function Kc(e, t) {
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && hs(n)) {
    let r = t;
    do {
      if (r && e === r)
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Gc(e) {
  const t = Wt(e), n = t.top + e.clientTop, r = t.left + e.clientLeft;
  return {
    top: n,
    left: r,
    x: r,
    y: n,
    right: r + e.clientWidth,
    bottom: n + e.clientHeight,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function si(e, t) {
  return t === "viewport" ? co(qc(e)) : hr(t) ? Gc(t) : co(Wc(pt(e)));
}
function Jc(e) {
  const t = vr(Lr(e)), r = ["absolute", "fixed"].includes(Tr(e).position) && Ye(e) ? po(e) : e;
  return hr(r) ? t.filter((o) => hr(o) && Kc(o, r) && Qe(o) !== "body") : [];
}
function Qc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r
  } = e;
  const i = [...n === "clippingParents" ? Jc(t) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = si(t, u);
    return l.top = ln(c.top, l.top), l.right = oi(c.right, l.right), l.bottom = oi(c.bottom, l.bottom), l.left = ln(c.left, l.left), l;
  }, si(t, a));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
const Yc = {
  getElementRects: (e) => {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    return {
      reference: zc(t, po(n), r),
      floating: {
        ...ai(n),
        x: 0,
        y: 0
      }
    };
  },
  convertOffsetParentRelativeRectToViewportRelativeRect: (e) => Uc(e),
  getOffsetParent: (e) => {
    let {
      element: t
    } = e;
    return po(t);
  },
  isElement: (e) => hr(e),
  getDocumentElement: (e) => {
    let {
      element: t
    } = e;
    return pt(t);
  },
  getClippingClientRect: (e) => Qc(e),
  getDimensions: (e) => {
    let {
      element: t
    } = e;
    return ai(t);
  },
  getClientRects: (e) => {
    let {
      element: t
    } = e;
    return t.getClientRects();
  }
}, Zc = (e, t, n) => Sc(e, t, {
  platform: Yc,
  ...n
});
var Xc = Object.defineProperty, eu = Object.defineProperties, tu = Object.getOwnPropertyDescriptors, li = Object.getOwnPropertySymbols, nu = Object.prototype.hasOwnProperty, ru = Object.prototype.propertyIsEnumerable, ci = (e, t, n) => t in e ? Xc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, We = (e, t) => {
  for (var n in t || (t = {}))
    nu.call(t, n) && ci(e, n, t[n]);
  if (li)
    for (var n of li(t))
      ru.call(t, n) && ci(e, n, t[n]);
  return e;
}, Hn = (e, t) => eu(e, tu(t));
function ys(e, t) {
  for (const n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? ys(e[n], t[n]) : e[n] = t[n]);
}
const Ge = {
  disabled: !1,
  distance: 5,
  skidding: 0,
  container: "body",
  boundary: void 0,
  instantMove: !1,
  disposeTimeout: 5e3,
  popperTriggers: [],
  strategy: "absolute",
  preventOverflow: !0,
  flip: !0,
  shift: !0,
  overflowPadding: 0,
  arrowPadding: 0,
  arrowOverflow: !0,
  themes: {
    tooltip: {
      placement: "top",
      triggers: ["hover", "focus", "touch"],
      hideTriggers: (e) => [...e, "click"],
      delay: {
        show: 200,
        hide: 0
      },
      handleResize: !1,
      html: !1,
      loadingContent: "..."
    },
    dropdown: {
      placement: "bottom",
      triggers: ["click"],
      delay: 0,
      handleResize: !0,
      autoHide: !0
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover", "focus"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function Kt(e, t) {
  let n = Ge.themes[e] || {}, r;
  do
    r = n[t], typeof r > "u" ? n.$extend ? n = Ge.themes[n.$extend] || {} : (n = null, r = Ge[t]) : n = null;
  while (n);
  return r;
}
function ou(e) {
  const t = [e];
  let n = Ge.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Ge.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((r) => `v-popper--theme-${r}`);
}
function ui(e) {
  const t = [e];
  let n = Ge.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Ge.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let $t = !1;
if (typeof window < "u") {
  $t = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        $t = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let _s = !1;
typeof window < "u" && typeof navigator < "u" && (_s = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const bs = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), fi = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart"
}, di = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend"
};
function pi(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Wr() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Me = [];
let yt = null;
const hi = {};
function mi(e) {
  let t = hi[e];
  return t || (t = hi[e] = []), t;
}
let ho = function() {
};
typeof window < "u" && (ho = window.Element);
function Q(e) {
  return function(t) {
    return Kt(t.theme, e);
  };
}
const Kr = "__floating-vue__popper";
var ws = () => L({
  name: "VPopper",
  provide() {
    return {
      [Kr]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Kr]: { default: null }
  },
  props: {
    theme: {
      type: String,
      required: !0
    },
    targetNodes: {
      type: Function,
      required: !0
    },
    referenceNode: {
      type: Function,
      default: null
    },
    popperNode: {
      type: Function,
      required: !0
    },
    shown: {
      type: Boolean,
      default: !1
    },
    showGroup: {
      type: String,
      default: null
    },
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: Q("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: Q("positioningDisabled")
    },
    placement: {
      type: String,
      default: Q("placement"),
      validator: (e) => bs.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: Q("delay")
    },
    distance: {
      type: [Number, String],
      default: Q("distance")
    },
    skidding: {
      type: [Number, String],
      default: Q("skidding")
    },
    triggers: {
      type: Array,
      default: Q("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: Q("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: Q("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: Q("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: Q("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: Q("popperHideTriggers")
    },
    container: {
      type: [String, Object, ho, Boolean],
      default: Q("container")
    },
    boundary: {
      type: [String, ho],
      default: Q("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: Q("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: Q("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: Q("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: Q("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: Q("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: Q("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: Q("computeTransformOrigin")
    },
    autoMinSize: {
      type: Boolean,
      default: Q("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: Q("autoSize")
    },
    autoMaxSize: {
      type: Boolean,
      default: Q("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: Q("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: Q("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: Q("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: Q("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: Q("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: Q("flip")
    },
    shift: {
      type: Boolean,
      default: Q("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: Q("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: Q("noAutoFocus")
    }
  },
  emits: [
    "show",
    "hide",
    "update:shown",
    "apply-show",
    "apply-hide",
    "close-group",
    "close-directive",
    "auto-hide",
    "resize",
    "dispose"
  ],
  data() {
    return {
      isShown: !1,
      isMounted: !1,
      skipTransition: !1,
      classes: {
        showFrom: !1,
        showTo: !1,
        hideFrom: !1,
        hideTo: !0
      },
      result: {
        x: 0,
        y: 0,
        placement: "",
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0
        },
        transformOrigin: null
      },
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: !0
    };
  },
  computed: {
    popperId() {
      return this.ariaId != null ? this.ariaId : this.randomId;
    },
    shouldMountContent() {
      return this.eagerMount || this.isMounted;
    },
    slotData() {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: Hn(We({}, this.classes), {
          popperClass: this.popperClass
        }),
        result: this.positioningDisabled ? null : this.result,
        attrs: this.$attrs
      };
    },
    parentPopper() {
      var e;
      return (e = this[Kr]) == null ? void 0 : e.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var e, t;
      return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
    }
  },
  watch: We(We({
    shown: "$_autoShowHide",
    disabled(e) {
      e ? this.dispose() : this.init();
    },
    async container() {
      this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
    }
  }, [
    "triggers",
    "positioningDisabled"
  ].reduce((e, t) => (e[t] = "$_refreshListeners", e), {})), [
    "placement",
    "distance",
    "skidding",
    "boundary",
    "strategy",
    "overflowPadding",
    "arrowPadding",
    "preventOverflow",
    "shift",
    "shiftCrossAxis",
    "flip"
  ].reduce((e, t) => (e[t] = "$_computePosition", e), {})),
  created() {
    this.$_isDisposed = !0, this.randomId = `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`, this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
  },
  mounted() {
    this.init(), this.$_detachPopperNode();
  },
  activated() {
    this.$_autoShowHide();
  },
  deactivated() {
    this.hide();
  },
  beforeUnmount() {
    this.dispose();
  },
  methods: {
    show({ event: e = null, skipDelay: t = !1, force: n = !1 } = {}) {
      var r, o;
      (r = this.parentPopper) != null && r.lockedChild && this.parentPopper.lockedChild !== this || (this.$_pendingHide = !1, (n || !this.disabled) && (((o = this.parentPopper) == null ? void 0 : o.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
        this.$_showFrameLocked = !1;
      })), this.$emit("update:shown", !0));
    },
    hide({ event: e = null, skipDelay: t = !1 } = {}) {
      var n;
      if (!this.$_hideInProgress) {
        if (this.shownChildren.size > 0) {
          this.$_pendingHide = !0;
          return;
        }
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
            this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t }), this.parentPopper.lockedChild = null);
          }, 1e3));
          return;
        }
        ((n = this.parentPopper) == null ? void 0 : n.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
      }
    },
    init() {
      var e, t;
      this.$_isDisposed && (this.$_isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = (t = (e = this.referenceNode) == null ? void 0 : e.call(this)) != null ? t : this.$el, this.$_targetNodes = this.targetNodes().filter((n) => n.nodeType === n.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
    },
    dispose() {
      this.$_isDisposed || (this.$_isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"), this.$emit("dispose"));
    },
    async onResize() {
      this.isShown && (await this.$_computePosition(), this.$emit("resize"));
    },
    async $_computePosition() {
      var e;
      if (this.$_isDisposed || this.positioningDisabled)
        return;
      const t = {
        strategy: this.strategy,
        middleware: []
      };
      (this.distance || this.skidding) && t.middleware.push(Nc({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const n = this.placement.startsWith("auto");
      if (n ? t.middleware.push(Ac({
        alignment: (e = this.placement.split("-")[1]) != null ? e : ""
      })) : t.placement = this.placement, this.preventOverflow && (this.shift && t.middleware.push(Mc({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !n && this.flip && t.middleware.push(Tc({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), t.middleware.push(kc({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && t.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: o, rects: i, middlewareData: a }) => {
          let s;
          const { centerOffset: l } = a.arrow;
          return o.startsWith("top") || o.startsWith("bottom") ? s = Math.abs(l) > i.reference.width / 2 : s = Math.abs(l) > i.reference.height / 2, {
            data: {
              overflow: s
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const o = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        t.middleware.push({
          name: "autoSize",
          fn: ({ rects: i, placement: a, middlewareData: s }) => {
            var l;
            if ((l = s.autoSize) != null && l.skip)
              return {};
            let u, c;
            return a.startsWith("top") || a.startsWith("bottom") ? u = i.reference.width : c = i.reference.height, this.$_innerNode.style[o === "min" ? "minWidth" : o === "max" ? "maxWidth" : "width"] = u != null ? `${u}px` : null, this.$_innerNode.style[o === "min" ? "minHeight" : o === "max" ? "maxHeight" : "height"] = c != null ? `${c}px` : null, {
              data: {
                skip: !0
              },
              reset: {
                rects: !0
              }
            };
          }
        });
      }
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, t.middleware.push(Rc({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ width: o, height: i }) => {
          this.$_innerNode.style.maxWidth = o != null ? `${o}px` : null, this.$_innerNode.style.maxHeight = i != null ? `${i}px` : null;
        }
      })));
      const r = await Zc(this.$_referenceNode, this.$_popperNode, t);
      Object.assign(this.result, {
        x: r.x,
        y: r.y,
        placement: r.placement,
        strategy: r.strategy,
        arrow: We(We({}, r.middlewareData.arrow), r.middlewareData.arrowOverflow)
      });
    },
    $_scheduleShow(e = null, t = !1) {
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), yt && this.instantMove && yt.instantMove && yt !== this.parentPopper) {
        yt.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e = null, t = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (yt = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Wr(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...vr(this.$_referenceNode),
        ...vr(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const t = this.$_referenceNode.getBoundingClientRect(), n = this.$_popperNode.querySelector(".v-popper__wrapper"), r = n.parentNode.getBoundingClientRect(), o = t.x + t.width / 2 - (r.left + n.offsetLeft), i = t.y + t.height / 2 - (r.top + n.offsetTop);
        this.result.transformOrigin = `${o}px ${i}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const e = this.showGroup;
      if (e) {
        let t;
        for (let n = 0; n < Me.length; n++)
          t = Me[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Me.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of ui(this.theme))
        mi(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Wr(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, pi(Me, this), Me.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of ui(this.theme)) {
        const r = mi(n);
        pi(r, this), r.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      yt === this && (yt = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = Kt(this.theme, "disposeTimeout");
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Wr(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
    },
    $_autoShowHide() {
      this.shown ? this.show() : this.hide();
    },
    $_ensureTeleport() {
      if (this.$_isDisposed)
        return;
      let e = this.container;
      if (typeof e == "string" ? e = window.document.querySelector(e) : e === !1 && (e = this.$_targetNodes[0].parentNode), !e)
        throw new Error("No container for popover: " + this.container);
      e.appendChild(this.$_popperNode), this.isMounted = !0;
    },
    $_addEventListeners() {
      const e = (n) => {
        this.isShown && !this.$_hideInProgress || (n.usedByTooltip = !0, !this.$_preventShow && this.show({ event: n }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, fi, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], fi, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, di, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], di, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((r) => r.addEventListener(t, n, $t ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, n, r, o) {
      let i = n;
      r != null && (i = typeof r == "function" ? r(i) : r), i.forEach((a) => {
        const s = t[a];
        s && this.$_registerEventListeners(e, s, o);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((n) => {
        const { targetNodes: r, eventType: o, handler: i } = n;
        !e || e === o ? r.forEach((a) => a.removeEventListener(o, i)) : t.push(n);
      }), this.$_events = t;
    },
    $_refreshListeners() {
      this.$_isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
    },
    $_handleGlobalClose(e, t = !1) {
      this.$_showFrameLocked || (this.hide({ event: e }), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t && (this.$_preventShow = !0, setTimeout(() => {
        this.$_preventShow = !1;
      }, 300)));
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(e, t) {
      for (const n of this.$_targetNodes) {
        const r = n.getAttribute(e);
        r && (n.removeAttribute(e), n.setAttribute(t, r));
      }
    },
    $_applyAttrsToTarget(e) {
      for (const t of this.$_targetNodes)
        for (const n in e) {
          const r = e[n];
          r == null ? t.removeAttribute(n) : t.setAttribute(n, r);
        }
    },
    $_updateParentShownChildren(e) {
      let t = this.parentPopper;
      for (; t; )
        e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.$_pendingHide && t.hide()), t = t.parentPopper;
    },
    $_isAimingPopper() {
      const e = this.$_referenceNode.getBoundingClientRect();
      if (cn >= e.left && cn <= e.right && un >= e.top && un <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = cn - ot, r = un - it, i = t.left + t.width / 2 - ot + (t.top + t.height / 2) - it + t.width + t.height, a = ot + n * i, s = it + r * i;
        return qn(ot, it, a, s, t.left, t.top, t.left, t.bottom) || qn(ot, it, a, s, t.left, t.top, t.right, t.top) || qn(ot, it, a, s, t.right, t.top, t.right, t.bottom) || qn(ot, it, a, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
typeof document < "u" && typeof window < "u" && (_s ? (document.addEventListener("touchstart", vi, $t ? {
  passive: !0,
  capture: !0
} : !0), document.addEventListener("touchend", au, $t ? {
  passive: !0,
  capture: !0
} : !0)) : (window.addEventListener("mousedown", vi, !0), window.addEventListener("click", iu, !0)), window.addEventListener("resize", cu));
function vi(e) {
  for (let t = 0; t < Me.length; t++) {
    const n = Me[t];
    try {
      const r = n.popperNode();
      n.$_mouseDownContains = r.contains(e.target);
    } catch {
    }
  }
}
function iu(e) {
  Ss(e);
}
function au(e) {
  Ss(e, !0);
}
function Ss(e, t = !1) {
  const n = {};
  for (let r = Me.length - 1; r >= 0; r--) {
    const o = Me[r];
    try {
      const i = o.$_containsGlobalTarget = su(o, e);
      o.$_pendingHide = !1, requestAnimationFrame(() => {
        if (o.$_pendingHide = !1, !n[o.randomId] && gi(o, i, e)) {
          if (o.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && i) {
            let s = o.parentPopper;
            for (; s; )
              n[s.randomId] = !0, s = s.parentPopper;
            return;
          }
          let a = o.parentPopper;
          for (; a && gi(a, a.$_containsGlobalTarget, e); ) {
            a.$_handleGlobalClose(e, t);
            a = a.parentPopper;
          }
        }
      });
    } catch {
    }
  }
}
function su(e, t) {
  const n = e.popperNode();
  return e.$_mouseDownContains || n.contains(t.target);
}
function gi(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || lu(e, n) && !t;
}
function lu(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function cu(e) {
  for (let t = 0; t < Me.length; t++)
    Me[t].$_computePosition(e);
}
let ot = 0, it = 0, cn = 0, un = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  ot = cn, it = un, cn = e.clientX, un = e.clientY;
}, $t ? {
  passive: !0
} : void 0);
function qn(e, t, n, r, o, i, a, s) {
  const l = ((a - o) * (t - i) - (s - i) * (e - o)) / ((s - i) * (n - e) - (a - o) * (r - t)), u = ((n - e) * (t - i) - (r - t) * (e - o)) / ((s - i) * (n - e) - (a - o) * (r - t));
  return l >= 0 && l <= 1 && u >= 0 && u <= 1;
}
var Mr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const uu = {
  extends: ws()
};
function fu(e, t, n, r, o, i) {
  return g(), b("div", {
    ref: "reference",
    class: te(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Te(e.$slots, "default", sc(lc(e.slotData)))
  ], 2);
}
var du = /* @__PURE__ */ Mr(uu, [["render", fu]]);
function pu() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var n = e.indexOf("Trident/");
  if (n > 0) {
    var r = e.indexOf("rv:");
    return parseInt(e.substring(r + 3, e.indexOf(".", r)), 10);
  }
  var o = e.indexOf("Edge/");
  return o > 0 ? parseInt(e.substring(o + 5, e.indexOf(".", o)), 10) : -1;
}
let ir;
function mo() {
  mo.init || (mo.init = !0, ir = pu() !== -1);
}
var Rr = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    mo(), Ln(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", ir && this.$el.appendChild(e), e.data = "about:blank", ir || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!ir && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const hu = /* @__PURE__ */ cc("data-v-b329ee4c");
ic("data-v-b329ee4c");
const mu = {
  class: "resize-observer",
  tabindex: "-1"
};
ac();
const vu = /* @__PURE__ */ hu((e, t, n, r, o, i) => (g(), ue("div", mu)));
Rr.render = vu;
Rr.__scopeId = "data-v-b329ee4c";
Rr.__file = "src/components/ResizeObserver.vue";
var xs = (e = "theme") => ({
  computed: {
    themeClass() {
      return ou(this[e]);
    }
  }
});
const gu = L({
  name: "VPopperContent",
  components: {
    ResizeObserver: Rr
  },
  mixins: [
    xs()
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  emits: [
    "hide",
    "resize"
  ],
  methods: {
    toPx(e) {
      return e != null && !isNaN(e) ? `${e}px` : null;
    }
  }
}), yu = ["id", "aria-hidden", "tabindex", "data-popper-placement"], _u = {
  ref: "inner",
  class: "v-popper__inner"
}, bu = /* @__PURE__ */ h("div", { class: "v-popper__arrow-outer" }, null, -1), wu = /* @__PURE__ */ h("div", { class: "v-popper__arrow-inner" }, null, -1), Su = [
  bu,
  wu
];
function xu(e, t, n, r, o, i) {
  const a = Oe("ResizeObserver");
  return g(), b("div", {
    id: e.popperId,
    ref: "popover",
    class: te(["v-popper__popper", [
      e.themeClass,
      e.classes.popperClass,
      {
        "v-popper__popper--shown": e.shown,
        "v-popper__popper--hidden": !e.shown,
        "v-popper__popper--show-from": e.classes.showFrom,
        "v-popper__popper--show-to": e.classes.showTo,
        "v-popper__popper--hide-from": e.classes.hideFrom,
        "v-popper__popper--hide-to": e.classes.hideTo,
        "v-popper__popper--skip-transition": e.skipTransition,
        "v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
        "v-popper__popper--no-positioning": !e.result
      }
    ]]),
    style: or(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = uc((s) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    h("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (s) => e.autoHide && e.$emit("hide"))
    }),
    h("div", {
      class: "v-popper__wrapper",
      style: or(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      h("div", _u, [
        e.mounted ? (g(), b(z, { key: 0 }, [
          h("div", null, [
            Te(e.$slots, "default")
          ]),
          e.handleResize ? (g(), ue(a, {
            key: 0,
            onNotify: t[1] || (t[1] = (s) => e.$emit("resize", s))
          })) : V("", !0)
        ], 64)) : V("", !0)
      ], 512),
      h("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: or(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, Su, 4)
    ], 4)
  ], 46, yu);
}
var Os = /* @__PURE__ */ Mr(gu, [["render", xu]]), ks = {
  methods: {
    show(...e) {
      return this.$refs.popper.show(...e);
    },
    hide(...e) {
      return this.$refs.popper.hide(...e);
    },
    dispose(...e) {
      return this.$refs.popper.dispose(...e);
    },
    onResize(...e) {
      return this.$refs.popper.onResize(...e);
    }
  }
};
const Ou = L({
  name: "VPopperWrapper",
  components: {
    Popper: du,
    PopperContent: Os
  },
  mixins: [
    ks,
    xs("finalTheme")
  ],
  props: {
    theme: {
      type: String,
      default: null
    }
  },
  computed: {
    finalTheme() {
      var e;
      return (e = this.theme) != null ? e : this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
    }
  }
});
function ku(e, t, n, r, o, i) {
  const a = Oe("PopperContent"), s = Oe("Popper");
  return g(), ue(s, {
    ref: "popper",
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: te([
      e.themeClass
    ])
  }, {
    default: he(({
      popperId: l,
      isShown: u,
      shouldMountContent: c,
      skipTransition: f,
      autoHide: d,
      show: p,
      hide: v,
      handleResize: y,
      onResize: _,
      classes: w,
      result: S
    }) => [
      Te(e.$slots, "default", {
        shown: u,
        show: p,
        hide: v
      }),
      F(a, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: u,
        mounted: c,
        "skip-transition": f,
        "auto-hide": d,
        "handle-resize": y,
        classes: w,
        result: S,
        onHide: v,
        onResize: _
      }, {
        default: he(() => [
          Te(e.$slots, "popper", {
            shown: u,
            hide: v
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 8, ["theme", "target-nodes", "popper-node", "class"]);
}
var Uo = /* @__PURE__ */ Mr(Ou, [["render", ku]]);
const $u = L(Hn(We({}, Uo), {
  name: "VDropdown",
  vPopperTheme: "dropdown"
})), Pu = L(Hn(We({}, Uo), {
  name: "VMenu",
  vPopperTheme: "menu"
})), Eu = L(Hn(We({}, Uo), {
  name: "VTooltip",
  vPopperTheme: "tooltip"
})), ju = L({
  name: "VTooltipDirective",
  components: {
    Popper: ws(),
    PopperContent: Os
  },
  mixins: [
    ks
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => Kt(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => Kt(e.theme, "loadingContent")
    }
  },
  data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync() {
      return typeof this.content == "function";
    },
    loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent() {
      return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
    }
  },
  watch: {
    content: {
      handler() {
        this.fetchContent(!0);
      },
      immediate: !0
    },
    async finalContent() {
      await this.$nextTick(), this.$refs.popper.onResize();
    }
  },
  created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent(e) {
      if (typeof this.content == "function" && this.$_isShown && (e || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null, this.$_loading = !0;
        const t = ++this.$_fetchId, n = this.content(this);
        n.then ? n.then((r) => this.onResult(t, r)) : this.onResult(t, n);
      }
    },
    onResult(e, t) {
      e === this.$_fetchId && (this.$_loading = !1, this.asyncContent = t);
    },
    onShow() {
      this.$_isShown = !0, this.fetchContent();
    },
    onHide() {
      this.$_isShown = !1;
    }
  }
}), Cu = ["innerHTML"], Au = ["textContent"];
function Iu(e, t, n, r, o, i) {
  const a = Oe("PopperContent"), s = Oe("Popper");
  return g(), ue(s, dc({ ref: "popper" }, e.$attrs, {
    theme: e.theme,
    "popper-node": () => e.$refs.popperContent.$el,
    onApplyShow: e.onShow,
    onApplyHide: e.onHide
  }), {
    default: he(({
      popperId: l,
      isShown: u,
      shouldMountContent: c,
      skipTransition: f,
      autoHide: d,
      hide: p,
      handleResize: v,
      onResize: y,
      classes: _,
      result: w
    }) => [
      F(a, {
        ref: "popperContent",
        class: te({
          "v-popper--tooltip-loading": e.loading
        }),
        "popper-id": l,
        theme: e.theme,
        shown: u,
        mounted: c,
        "skip-transition": f,
        "auto-hide": d,
        "handle-resize": v,
        classes: _,
        result: w,
        onHide: p,
        onResize: y
      }, {
        default: he(() => [
          e.html ? (g(), b("div", {
            key: 0,
            innerHTML: e.finalContent
          }, null, 8, Cu)) : (g(), b("div", {
            key: 1,
            textContent: U(e.finalContent)
          }, null, 8, Au))
        ]),
        _: 2
      }, 1032, ["class", "popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 1
  }, 16, ["theme", "popper-node", "onApplyShow", "onApplyHide"]);
}
var Tu = /* @__PURE__ */ Mr(ju, [["render", Iu]]);
const $s = "v-popper--has-tooltip";
function Du(e, t) {
  let n = e.placement;
  if (!n && t)
    for (const r of bs)
      t[r] && (n = r);
  return n || (n = Kt(e.theme || "tooltip", "placement")), n;
}
function Ps(e, t, n) {
  let r;
  const o = typeof t;
  return o === "string" ? r = { content: t } : t && o === "object" ? r = t : r = { content: !1 }, r.placement = Du(r, n), r.targetNodes = () => [e], r.referenceNode = () => e, r;
}
let Gr, Pn, Nu = 0;
function Lu() {
  if (Gr)
    return;
  Pn = A([]), Gr = fc({
    name: "VTooltipDirectiveApp",
    setup() {
      return {
        directives: Pn
      };
    },
    render() {
      return this.directives.map((t) => se(Tu, Hn(We({}, t.options), {
        shown: t.shown || t.options.shown,
        key: t.id
      })));
    },
    devtools: {
      hide: !0
    }
  });
  const e = document.createElement("div");
  document.body.appendChild(e), Gr.mount(e);
}
function Mu(e, t, n) {
  Lu();
  const r = A(Ps(e, t, n)), o = A(!1), i = {
    id: Nu++,
    options: r,
    shown: o
  };
  return Pn.value.push(i), e.classList && e.classList.add($s), e.$_popper = {
    options: r,
    item: i,
    show() {
      o.value = !0;
    },
    hide() {
      o.value = !1;
    }
  };
}
function Es(e) {
  if (e.$_popper) {
    const t = Pn.value.indexOf(e.$_popper.item);
    t !== -1 && Pn.value.splice(t, 1), delete e.$_popper, delete e.$_popperOldShown, delete e.$_popperMountTarget;
  }
  e.classList && e.classList.remove($s);
}
function yi(e, { value: t, modifiers: n }) {
  const r = Ps(e, t, n);
  if (!r.content || Kt(r.theme || "tooltip", "disabled"))
    Es(e);
  else {
    let o;
    e.$_popper ? (o = e.$_popper, o.options.value = r) : o = Mu(e, t, n), typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown, t.shown ? o.show() : o.hide());
  }
}
var Ru = {
  beforeMount: yi,
  updated: yi,
  beforeUnmount(e) {
    Es(e);
  }
};
function _i(e) {
  e.addEventListener("click", js), e.addEventListener("touchstart", Cs, $t ? {
    passive: !0
  } : !1);
}
function bi(e) {
  e.removeEventListener("click", js), e.removeEventListener("touchstart", Cs), e.removeEventListener("touchend", As), e.removeEventListener("touchcancel", Is);
}
function js(e) {
  const t = e.currentTarget;
  e.closePopover = !t.$_vclosepopover_touch, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
}
function Cs(e) {
  if (e.changedTouches.length === 1) {
    const t = e.currentTarget;
    t.$_vclosepopover_touch = !0;
    const n = e.changedTouches[0];
    t.$_vclosepopover_touchPoint = n, t.addEventListener("touchend", As), t.addEventListener("touchcancel", Is);
  }
}
function As(e) {
  const t = e.currentTarget;
  if (t.$_vclosepopover_touch = !1, e.changedTouches.length === 1) {
    const n = e.changedTouches[0], r = t.$_vclosepopover_touchPoint;
    e.closePopover = Math.abs(n.screenY - r.screenY) < 20 && Math.abs(n.screenX - r.screenX) < 20, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
  }
}
function Is(e) {
  const t = e.currentTarget;
  t.$_vclosepopover_touch = !1;
}
var Hu = {
  beforeMount(e, { value: t, modifiers: n }) {
    e.$_closePopoverModifiers = n, (typeof t > "u" || t) && _i(e);
  },
  updated(e, { value: t, oldValue: n, modifiers: r }) {
    e.$_closePopoverModifiers = r, t !== n && (typeof t > "u" || t ? _i(e) : bi(e));
  },
  beforeUnmount(e) {
    bi(e);
  }
};
function Bu(e, t = {}) {
  e.$_vTooltipInstalled || (e.$_vTooltipInstalled = !0, ys(Ge, t), e.directive("tooltip", Ru), e.directive("close-popper", Hu), e.component("VTooltip", Eu), e.component("VDropdown", $u), e.component("VMenu", Pu));
}
const Fu = {
  version: "2.0.0-beta.20",
  install: Bu,
  options: Ge
};
function Re(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, Re), r;
}
var gr = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(gr || {}), lt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(lt || {});
function we({ visible: e = !0, features: t = 0, ourProps: n, theirProps: r, ...o }) {
  var i;
  let a = zu(r, n), s = Object.assign(o, { props: a });
  if (e || t & 2 && a.static)
    return Jr(s);
  if (t & 1) {
    let l = (i = a.unmount) == null || i ? 0 : 1;
    return Re(l, { 0() {
      return null;
    }, 1() {
      return Jr({ ...o, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Jr(s);
}
function Jr({ props: e, attrs: t, slots: n, slot: r, name: o }) {
  var i;
  let { as: a, ...s } = qo(e, ["unmount", "static"]), l = (i = n.default) == null ? void 0 : i.call(n, r), u = {};
  if (r) {
    let c = !1, f = [];
    for (let [d, p] of Object.entries(r))
      typeof p == "boolean" && (c = !0), p === !0 && f.push(d);
    c && (u["data-headlessui-state"] = f.join(" "));
  }
  if (a === "template") {
    if (l = Ts(l ?? []), Object.keys(s).length > 0 || Object.keys(t).length > 0) {
      let [c, ...f] = l ?? [];
      if (!Uu(c) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(t)).sort((d, p) => d.localeCompare(p)).map((d) => `  - ${d}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((d) => `  - ${d}`).join(`
`)].join(`
`));
      return pc(c, Object.assign({}, s, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return se(a, Object.assign({}, s, u), { default: () => l });
}
function Ts(e) {
  return e.flatMap((t) => t.type === z ? Ts(t.children) : [t]);
}
function zu(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let r of e)
    for (let o in r)
      o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((r) => [r, void 0])));
  for (let r in n)
    Object.assign(t, { [r](o, ...i) {
      let a = n[r];
      for (let s of a) {
        if (o instanceof Event && o.defaultPrevented)
          return;
        s(o, ...i);
      }
    } });
  return t;
}
function Vu(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function qo(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t)
    r in n && delete n[r];
  return n;
}
function Uu(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let qu = 0;
function Wu() {
  return ++qu;
}
function et() {
  return Wu();
}
var yr = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(yr || {});
function Ie(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Ds = Symbol("Context");
var Pt = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Pt || {});
function Ku() {
  return Wo() !== null;
}
function Wo() {
  return me(Ds, null);
}
function Gu(e) {
  He(Ds, e);
}
function wi(e, t) {
  if (e)
    return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function Ju(e, t) {
  let n = A(wi(e.value.type, e.value.as));
  return le(() => {
    n.value = wi(e.value.type, e.value.as);
  }), ke(() => {
    var r;
    n.value || !Ie(t) || Ie(t) instanceof HTMLButtonElement && !((r = Ie(t)) != null && r.hasAttribute("type")) && (n.value = "button");
  }), n;
}
const Hr = typeof window > "u" || typeof document > "u";
function Jt(e) {
  if (Hr)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = Ie(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let vo = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var En = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(En || {}), Ns = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ns || {}), Qu = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Qu || {});
function Yu(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(vo));
}
var Ls = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ls || {});
function Zu(e, t = 0) {
  var n;
  return e === ((n = Jt(e)) == null ? void 0 : n.body) ? !1 : Re(t, { 0() {
    return e.matches(vo);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(vo))
        return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
function fn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Xu = ["textarea", "input"].join(",");
function ef(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Xu)) != null ? n : !1;
}
function tf(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null)
      return 0;
    let a = o.compareDocumentPosition(i);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function go(e, t, n = !0, r = null) {
  var o;
  let i = (o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? o : document, a = Array.isArray(e) ? n ? tf(e) : e : Yu(e);
  r = r ?? i.activeElement;
  let s = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, a.indexOf(r)) - 1;
    if (t & 4)
      return Math.max(0, a.indexOf(r)) + 1;
    if (t & 8)
      return a.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, c = 0, f = a.length, d;
  do {
    if (c >= f || c + f <= 0)
      return 0;
    let p = l + c;
    if (t & 16)
      p = (p + f) % f;
    else {
      if (p < 0)
        return 3;
      if (p >= f)
        return 1;
    }
    d = a[p], d == null || d.focus(u), c += s;
  } while (d !== i.activeElement);
  return t & 6 && ef(d) && d.select(), d.hasAttribute("tabindex") || d.setAttribute("tabindex", "0"), 2;
}
function Qr(e, t, n) {
  Hr || ke((r) => {
    document.addEventListener(e, t, n), r(() => document.removeEventListener(e, t, n));
  });
}
function nf(e, t, n = T(() => !0)) {
  function r(i, a) {
    if (!n.value || i.defaultPrevented)
      return;
    let s = a(i);
    if (s === null || !s.getRootNode().contains(s))
      return;
    let l = function u(c) {
      return typeof c == "function" ? u(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let u of l) {
      if (u === null)
        continue;
      let c = u instanceof HTMLElement ? u : Ie(u);
      if (c != null && c.contains(s))
        return;
    }
    return !Zu(s, Ls.Loose) && s.tabIndex !== -1 && i.preventDefault(), t(i, s);
  }
  let o = A(null);
  Qr("mousedown", (i) => {
    var a, s;
    n.value && (o.value = ((s = (a = i.composedPath) == null ? void 0 : a.call(i)) == null ? void 0 : s[0]) || i.target);
  }, !0), Qr("click", (i) => {
    !o.value || (r(i, () => o.value), o.value = null);
  }, !0), Qr("blur", (i) => r(i, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var jn = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(jn || {});
let _r = L({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: r, ...o } = e, i = { "aria-hidden": (r & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
    return we({ ourProps: i, theirProps: o, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function rf(e) {
  var t;
  let n = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (n) {
    for (let r of n.elements)
      if (r.tagName === "INPUT" && r.type === "submit" || r.tagName === "BUTTON" && r.type === "submit" || r.nodeName === "INPUT" && r.type === "image") {
        r.click();
        return;
      }
  }
}
function of(e, t, n) {
  let r = A(n == null ? void 0 : n.value), o = T(() => e.value !== void 0);
  return [T(() => o.value ? e.value : r.value), function(i) {
    return o.value || (r.value = i), t == null ? void 0 : t(i);
  }];
}
function af(e, t, n) {
  Hr || ke((r) => {
    window.addEventListener(e, t, n), r(() => window.removeEventListener(e, t, n));
  });
}
var yo = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(yo || {});
function sf() {
  let e = A(0);
  return af("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Ms(e, t, n, r) {
  Hr || ke((o) => {
    e = e ?? window, e.addEventListener(t, n, r), o(() => e.removeEventListener(t, n, r));
  });
}
function lf(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Rs = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Rs || {});
let en = Object.assign(L({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: A(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = A(null);
  r({ el: o, $el: o });
  let i = T(() => Jt(o));
  cf({ ownerDocument: i }, T(() => !!(e.features & 16)));
  let a = uf({ ownerDocument: i, container: o, initialFocus: T(() => e.initialFocus) }, T(() => !!(e.features & 2)));
  ff({ ownerDocument: i, container: o, containers: e.containers, previousActiveElement: a }, T(() => !!(e.features & 8)));
  let s = sf();
  function l() {
    let u = Ie(o);
    !u || Re(s.value, { [yo.Forwards]: () => go(u, En.First), [yo.Backwards]: () => go(u, En.Last) });
  }
  return () => {
    let u = {}, c = { ref: o }, { features: f, initialFocus: d, containers: p, ...v } = e;
    return se(z, [!!(f & 4) && se(_r, { as: "button", type: "button", onFocus: l, features: jn.Focusable }), we({ ourProps: c, theirProps: { ...t, ...v }, slot: u, attrs: t, slots: n, name: "FocusTrap" }), !!(f & 4) && se(_r, { as: "button", type: "button", onFocus: l, features: jn.Focusable })]);
  };
} }), { features: Rs });
function cf({ ownerDocument: e }, t) {
  let n = A(null);
  function r() {
    var i;
    n.value || (n.value = (i = e.value) == null ? void 0 : i.activeElement);
  }
  function o() {
    !n.value || (fn(n.value), n.value = null);
  }
  le(() => {
    $e(t, (i, a) => {
      i !== a && (i ? r() : o());
    }, { immediate: !0 });
  }), Ze(o);
}
function uf({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let o = A(null), i = A(!1);
  return le(() => i.value = !0), Ze(() => i.value = !1), le(() => {
    $e([t, n, r], (a, s) => {
      if (a.every((u, c) => (s == null ? void 0 : s[c]) === u) || !r.value)
        return;
      let l = Ie(t);
      !l || lf(() => {
        var u, c;
        if (!i.value)
          return;
        let f = Ie(n), d = (u = e.value) == null ? void 0 : u.activeElement;
        if (f) {
          if (f === d) {
            o.value = d;
            return;
          }
        } else if (l.contains(d)) {
          o.value = d;
          return;
        }
        f ? fn(f) : go(l, En.First | En.NoScroll) === Ns.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), o;
}
function ff({ ownerDocument: e, container: t, containers: n, previousActiveElement: r }, o) {
  var i;
  Ms((i = e.value) == null ? void 0 : i.defaultView, "focus", (a) => {
    if (!o.value)
      return;
    let s = new Set(n == null ? void 0 : n.value);
    s.add(t);
    let l = r.value;
    if (!l)
      return;
    let u = a.target;
    u && u instanceof HTMLElement ? df(s, u) ? (r.value = u, fn(u)) : (a.preventDefault(), a.stopPropagation(), fn(l)) : fn(r.value);
  }, !0);
}
function df(e, t) {
  var n;
  for (let r of e)
    if ((n = r.value) != null && n.contains(t))
      return !0;
  return !1;
}
let Si = "body > *", It = /* @__PURE__ */ new Set(), at = /* @__PURE__ */ new Map();
function xi(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function Oi(e) {
  let t = at.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function pf(e, t = A(!0)) {
  ke((n) => {
    if (!t.value || !e.value)
      return;
    let r = e.value, o = Jt(r);
    if (o) {
      It.add(r);
      for (let i of at.keys())
        i.contains(r) && (Oi(i), at.delete(i));
      o.querySelectorAll(Si).forEach((i) => {
        if (i instanceof HTMLElement) {
          for (let a of It)
            if (i.contains(a))
              return;
          It.size === 1 && (at.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), xi(i));
        }
      }), n(() => {
        if (It.delete(r), It.size > 0)
          o.querySelectorAll(Si).forEach((i) => {
            if (i instanceof HTMLElement && !at.has(i)) {
              for (let a of It)
                if (i.contains(a))
                  return;
              at.set(i, { "aria-hidden": i.getAttribute("aria-hidden"), inert: i.inert }), xi(i);
            }
          });
        else
          for (let i of at.keys())
            Oi(i), at.delete(i);
      });
    }
  });
}
let Hs = Symbol("ForcePortalRootContext");
function hf() {
  return me(Hs, !1);
}
let _o = L({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return He(Hs, e.force), () => {
    let { force: r, ...o } = e;
    return we({ theirProps: o, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} });
function mf(e) {
  let t = Jt(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let n = t.getElementById("headlessui-portal-root");
  if (n)
    return n;
  let r = t.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(r);
}
let Bs = L({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let r = A(null), o = T(() => Jt(r)), i = hf(), a = me(Fs, null), s = A(i === !0 || a == null ? mf(r.value) : a.resolveTarget());
  return ke(() => {
    i || a != null && (s.value = a.resolveTarget());
  }), Ze(() => {
    var l, u;
    let c = (l = o.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || s.value === c && s.value.children.length <= 0 && ((u = s.value.parentElement) == null || u.removeChild(s.value));
  }), () => {
    if (s.value === null)
      return null;
    let l = { ref: r, "data-headlessui-portal": "" };
    return se(hc, { to: s.value }, we({ ourProps: l, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), Fs = Symbol("PortalGroupContext"), vf = L({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let r = mc({ resolveTarget() {
    return e.target;
  } });
  return He(Fs, r), () => {
    let { target: o, ...i } = e;
    return we({ theirProps: i, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} }), zs = Symbol("StackContext");
var bo = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(bo || {});
function gf() {
  return me(zs, () => {
  });
}
function yf({ type: e, enabled: t, element: n, onUpdate: r }) {
  let o = gf();
  function i(...a) {
    r == null || r(...a), o(...a);
  }
  le(() => {
    $e(t, (a, s) => {
      a ? i(0, e, n) : s === !0 && i(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), Ze(() => {
    t.value && i(1, e, n);
  }), He(zs, i);
}
let Vs = Symbol("DescriptionContext");
function _f() {
  let e = me(Vs, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Us({ slot: e = A({}), name: t = "Description", props: n = {} } = {}) {
  let r = A([]);
  function o(i) {
    return r.value.push(i), () => {
      let a = r.value.indexOf(i);
      a !== -1 && r.value.splice(a, 1);
    };
  }
  return He(Vs, { register: o, slot: e, name: t, props: n }), T(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
L({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: n }) {
  let r = _f(), o = `headlessui-description-${et()}`;
  return le(() => Ze(r.register(o))), () => {
    let { name: i = "Description", slot: a = A({}), props: s = {} } = r, l = e, u = { ...Object.entries(s).reduce((c, [f, d]) => Object.assign(c, { [f]: P(d) }), {}), id: o };
    return we({ ourProps: u, theirProps: l, slot: a.value, attrs: t, slots: n, name: i });
  };
} });
function Ko() {
  let e = [], t = [], n = { enqueue(r) {
    t.push(r);
  }, addEventListener(r, o, i, a) {
    return r.addEventListener(o, i, a), n.add(() => r.removeEventListener(o, i, a));
  }, requestAnimationFrame(...r) {
    let o = requestAnimationFrame(...r);
    n.add(() => cancelAnimationFrame(o));
  }, nextFrame(...r) {
    n.requestAnimationFrame(() => {
      n.requestAnimationFrame(...r);
    });
  }, setTimeout(...r) {
    let o = setTimeout(...r);
    n.add(() => clearTimeout(o));
  }, add(r) {
    e.push(r);
  }, dispose() {
    for (let r of e.splice(0))
      r();
  }, async workQueue() {
    for (let r of t.splice(0))
      await r();
  } };
  return n;
}
function bf() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var wf = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(wf || {});
let wo = Symbol("DialogContext");
function Bn(e) {
  let t = me(wo, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Bn), n;
  }
  return t;
}
let Wn = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Sf = L({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Wn }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  var i;
  let a = A(!1);
  le(() => {
    a.value = !0;
  });
  let s = A(0), l = Wo(), u = T(() => e.open === Wn && l !== null ? Re(l.value, { [Pt.Open]: !0, [Pt.Closed]: !1 }) : e.open), c = A(/* @__PURE__ */ new Set()), f = A(null), d = A(null), p = T(() => Jt(f));
  if (o({ el: f, $el: f }), !(e.open !== Wn || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === Wn ? void 0 : e.open}`);
  let v = T(() => a.value && u.value ? 0 : 1), y = T(() => v.value === 0), _ = T(() => s.value > 1), w = me(wo, null) !== null, S = T(() => _.value ? "parent" : "leaf");
  pf(f, T(() => _.value ? y.value : !1)), yf({ type: "Dialog", enabled: T(() => v.value === 0), element: f, onUpdate: (C, E, j) => {
    if (E === "Dialog")
      return Re(C, { [bo.Add]() {
        c.value.add(j), s.value += 1;
      }, [bo.Remove]() {
        c.value.delete(j), s.value -= 1;
      } });
  } });
  let x = Us({ name: "DialogDescription", slot: T(() => ({ open: u.value })) }), $ = `headlessui-dialog-${et()}`, k = A(null), N = { titleId: k, panelRef: A(null), dialogState: v, setTitleId(C) {
    k.value !== C && (k.value = C);
  }, close() {
    t("close", !1);
  } };
  return He(wo, N), nf(() => {
    var C, E, j;
    return [...Array.from((E = (C = p.value) == null ? void 0 : C.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? E : []).filter((I) => !(!(I instanceof HTMLElement) || I.contains(Ie(d)) || N.panelRef.value && I.contains(N.panelRef.value))), (j = N.panelRef.value) != null ? j : f.value];
  }, (C, E) => {
    N.close(), Ln(() => E == null ? void 0 : E.focus());
  }, T(() => v.value === 0 && !_.value)), Ms((i = p.value) == null ? void 0 : i.defaultView, "keydown", (C) => {
    C.defaultPrevented || C.key === yr.Escape && v.value === 0 && (_.value || (C.preventDefault(), C.stopPropagation(), N.close()));
  }), ke((C) => {
    var E;
    if (v.value !== 0 || w)
      return;
    let j = p.value;
    if (!j)
      return;
    let I = Ko();
    function H(q, ge, Be) {
      let Ne = q.style.getPropertyValue(ge);
      return Object.assign(q.style, { [ge]: Be }), I.add(() => {
        Object.assign(q.style, { [ge]: Ne });
      });
    }
    let J = j == null ? void 0 : j.documentElement, Y = ((E = j.defaultView) != null ? E : window).innerWidth - J.clientWidth;
    if (H(J, "overflow", "hidden"), Y > 0) {
      let q = J.clientWidth - J.offsetWidth, ge = Y - q;
      H(J, "paddingRight", `${ge}px`);
    }
    if (bf()) {
      let q = window.pageYOffset;
      H(J, "position", "fixed"), H(J, "marginTop", `-${q}px`), H(J, "width", "100%"), I.add(() => window.scrollTo(0, q));
    }
    C(I.dispose);
  }), ke((C) => {
    if (v.value !== 0)
      return;
    let E = Ie(f);
    if (!E)
      return;
    let j = new IntersectionObserver((I) => {
      for (let H of I)
        H.boundingClientRect.x === 0 && H.boundingClientRect.y === 0 && H.boundingClientRect.width === 0 && H.boundingClientRect.height === 0 && N.close();
    });
    j.observe(E), C(() => j.disconnect());
  }), () => {
    let C = { ...n, ref: f, id: $, role: "dialog", "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": k.value, "aria-describedby": x.value }, { open: E, initialFocus: j, ...I } = e, H = { open: v.value === 0 };
    return se(_o, { force: !0 }, () => [se(Bs, () => se(vf, { target: f.value }, () => se(_o, { force: !1 }, () => se(en, { initialFocus: j, containers: c, features: y.value ? Re(S.value, { parent: en.features.RestoreFocus, leaf: en.features.All & ~en.features.FocusLock }) : en.features.None }, () => we({ ourProps: C, theirProps: I, slot: H, attrs: n, slots: r, visible: v.value === 0, features: gr.RenderStrategy | gr.Static, name: "Dialog" }))))), se(_r, { features: jn.Hidden, ref: d })]);
  };
} });
L({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: n }) {
  let r = Bn("DialogOverlay"), o = `headlessui-dialog-overlay-${et()}`;
  function i(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), r.close());
  }
  return () => we({ ourProps: { id: o, "aria-hidden": !0, onClick: i }, theirProps: e, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
} });
L({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = Bn("DialogBackdrop"), i = `headlessui-dialog-backdrop-${et()}`, a = A(null);
  return r({ el: a, $el: a }), le(() => {
    if (o.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let s = e, l = { id: i, ref: a, "aria-hidden": !0 };
    return se(_o, { force: !0 }, () => se(Bs, () => we({ ourProps: l, theirProps: { ...t, ...s }, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogBackdrop" })));
  };
} });
let xf = L({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let o = Bn("DialogPanel"), i = `headlessui-dialog-panel-${et()}`;
  r({ el: o.panelRef, $el: o.panelRef });
  function a(s) {
    s.stopPropagation();
  }
  return () => {
    let s = { id: i, ref: o.panelRef, onClick: a };
    return we({ ourProps: s, theirProps: e, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} });
L({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(e, { attrs: t, slots: n }) {
  let r = Bn("DialogTitle"), o = `headlessui-dialog-title-${et()}`;
  return le(() => {
    r.setTitleId(o), Ze(() => r.setTitleId(null));
  }), () => we({ ourProps: { id: o }, theirProps: e, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
} });
let qs = Symbol("LabelContext");
function Ws() {
  let e = me(qs, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ws), t;
  }
  return e;
}
function Of({ slot: e = {}, name: t = "Label", props: n = {} } = {}) {
  let r = A([]);
  function o(i) {
    return r.value.push(i), () => {
      let a = r.value.indexOf(i);
      a !== -1 && r.value.splice(a, 1);
    };
  }
  return He(qs, { register: o, slot: e, name: t, props: n }), T(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
L({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: n }) {
  let r = Ws(), o = `headlessui-label-${et()}`;
  return le(() => Ze(r.register(o))), () => {
    let { name: i = "Label", slot: a = {}, props: s = {} } = r, { passive: l, ...u } = e, c = { ...Object.entries(s).reduce((f, [d, p]) => Object.assign(f, { [d]: P(p) }), {}), id: o };
    return l && (delete c.onClick, delete u.onClick), we({ ourProps: c, theirProps: u, slot: a, attrs: n, slots: t, name: i });
  };
} });
let Ks = Symbol("GroupContext");
L({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: n }) {
  let r = A(null), o = Of({ name: "SwitchLabel", props: { onClick() {
    !r.value || (r.value.click(), r.value.focus({ preventScroll: !0 }));
  } } }), i = Us({ name: "SwitchDescription" });
  return He(Ks, { switchRef: r, labelledby: o, describedby: i }), () => we({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: n, name: "SwitchGroup" });
} });
let kf = L({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, default: !1 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 } }, inheritAttrs: !1, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  let i = me(Ks, null), a = `headlessui-switch-${et()}`, [s, l] = of(T(() => e.modelValue), (_) => t("update:modelValue", _), T(() => e.defaultChecked));
  function u() {
    l(!s.value);
  }
  let c = A(null), f = i === null ? c : i.switchRef, d = Ju(T(() => ({ as: e.as, type: n.type })), f);
  o({ el: f, $el: f });
  function p(_) {
    _.preventDefault(), u();
  }
  function v(_) {
    _.key === yr.Space ? (_.preventDefault(), u()) : _.key === yr.Enter && rf(_.currentTarget);
  }
  function y(_) {
    _.preventDefault();
  }
  return () => {
    let { name: _, value: w, ...S } = e, x = { checked: s.value }, $ = { id: a, ref: f, role: "switch", type: d.value, tabIndex: 0, "aria-checked": s.value, "aria-labelledby": i == null ? void 0 : i.labelledby.value, "aria-describedby": i == null ? void 0 : i.describedby.value, onClick: p, onKeyup: v, onKeypress: y };
    return se(z, [_ != null && s.value != null ? se(_r, Vu({ features: jn.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: s.value, name: _, value: w })) : null, we({ ourProps: $, theirProps: { ...n, ...qo(S, ["modelValue", "defaultChecked"]) }, slot: x, attrs: n, slots: r, name: "Switch" })]);
  };
} });
function $f(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function Yr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Kn(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var So = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(So || {});
function Pf(e, t) {
  let n = Ko();
  if (!e)
    return n.dispose;
  let { transitionDuration: r, transitionDelay: o } = getComputedStyle(e), [i, a] = [r, o].map((s) => {
    let [l = 0] = s.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return i !== 0 ? n.setTimeout(() => t("finished"), i + a) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function ki(e, t, n, r, o, i) {
  let a = Ko(), s = i !== void 0 ? $f(i) : () => {
  };
  return Kn(e, ...o), Yr(e, ...t, ...n), a.nextFrame(() => {
    Kn(e, ...n), Yr(e, ...r), a.add(Pf(e, (l) => (Kn(e, ...r, ...t), Yr(e, ...o), s(l))));
  }), a.add(() => Kn(e, ...t, ...n, ...r, ...o)), a.add(() => s("cancelled")), a.dispose;
}
function _t(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Go = Symbol("TransitionContext");
var Ef = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Ef || {});
function jf() {
  return me(Go, null) !== null;
}
function Cf() {
  let e = me(Go, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Af() {
  let e = me(Jo, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Jo = Symbol("NestingContext");
function Br(e) {
  return "children" in e ? Br(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Gs(e) {
  let t = A([]), n = A(!1);
  le(() => n.value = !0), Ze(() => n.value = !1);
  function r(i, a = lt.Hidden) {
    let s = t.value.findIndex(({ id: l }) => l === i);
    s !== -1 && (Re(a, { [lt.Unmount]() {
      t.value.splice(s, 1);
    }, [lt.Hidden]() {
      t.value[s].state = "hidden";
    } }), !Br(t) && n.value && (e == null || e()));
  }
  function o(i) {
    let a = t.value.find(({ id: s }) => s === i);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: i, state: "visible" }), () => r(i, lt.Unmount);
  }
  return { children: t, register: o, unregister: r };
}
let Js = gr.RenderStrategy, xo = L({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: o }) {
  if (!jf() && Ku())
    return () => se(Qs, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, r);
  let i = A(null), a = A("visible"), s = T(() => e.unmount ? lt.Unmount : lt.Hidden);
  o({ el: i, $el: i });
  let { show: l, appear: u } = Cf(), { register: c, unregister: f } = Af(), d = { value: !0 }, p = et(), v = { value: !1 }, y = Gs(() => {
    v.value || (a.value = "hidden", f(p), t("afterLeave"));
  });
  le(() => {
    let E = c(p);
    Ze(E);
  }), ke(() => {
    if (s.value === lt.Hidden && p) {
      if (l && a.value !== "visible") {
        a.value = "visible";
        return;
      }
      Re(a.value, { hidden: () => f(p), visible: () => c(p) });
    }
  });
  let _ = _t(e.enter), w = _t(e.enterFrom), S = _t(e.enterTo), x = _t(e.entered), $ = _t(e.leave), k = _t(e.leaveFrom), N = _t(e.leaveTo);
  le(() => {
    ke(() => {
      if (a.value === "visible") {
        let E = Ie(i);
        if (E instanceof Comment && E.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function C(E) {
    let j = d.value && !u.value, I = Ie(i);
    !I || !(I instanceof HTMLElement) || j || (v.value = !0, l.value && t("beforeEnter"), l.value || t("beforeLeave"), E(l.value ? ki(I, _, w, S, x, (H) => {
      v.value = !1, H === So.Finished && t("afterEnter");
    }) : ki(I, $, k, N, x, (H) => {
      v.value = !1, H === So.Finished && (Br(y) || (a.value = "hidden", f(p), t("afterLeave")));
    })));
  }
  return le(() => {
    $e([l], (E, j, I) => {
      C(I), d.value = !1;
    }, { immediate: !0 });
  }), He(Jo, y), Gu(T(() => Re(a.value, { visible: Pt.Open, hidden: Pt.Closed }))), () => {
    let { appear: E, show: j, enter: I, enterFrom: H, enterTo: J, entered: Y, leave: q, leaveFrom: ge, leaveTo: Be, ...Ne } = e;
    return we({ theirProps: Ne, ourProps: { ref: i }, slot: {}, slots: r, attrs: n, features: Js, visible: a.value === "visible", name: "TransitionChild" });
  };
} }), If = xo, Qs = L({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r }) {
  let o = Wo(), i = T(() => e.show === null && o !== null ? Re(o.value, { [Pt.Open]: !0, [Pt.Closed]: !1 }) : e.show);
  ke(() => {
    if (![!0, !1].includes(i.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = A(i.value ? "visible" : "hidden"), s = Gs(() => {
    a.value = "hidden";
  }), l = A(!0), u = { show: i, appear: T(() => e.appear || !l.value) };
  return le(() => {
    ke(() => {
      l.value = !1, i.value ? a.value = "visible" : Br(s) || (a.value = "hidden");
    });
  }), He(Jo, s), He(Go, u), () => {
    let c = qo(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return we({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...r, default: () => [se(If, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...f, ...c }, r.default)] }, attrs: {}, features: Js, visible: a.value === "visible", name: "Transition" });
  };
} });
var $i;
const Ys = typeof window < "u", Tf = (e) => typeof e == "function", Df = (e) => typeof e == "string", Nf = () => {
};
Ys && (($i = window == null ? void 0 : window.navigator) != null && $i.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Qo(e) {
  return typeof e == "function" ? e() : P(e);
}
function Lf(e, t) {
  function n(...r) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(o).catch(i);
    });
  }
  return n;
}
const Zs = (e) => e();
function Mf(e = Zs) {
  const t = A(!0);
  function n() {
    t.value = !1;
  }
  function r() {
    t.value = !0;
  }
  const o = (...i) => {
    t.value && e(...i);
  };
  return { isActive: yc(t), pause: n, resume: r, eventFilter: o };
}
function Rf(e) {
  return e;
}
function Xs(e) {
  return vc() ? (gc(e), !0) : !1;
}
function Hf(e) {
  return typeof e == "function" ? T(e) : A(e);
}
function el(e, t = !0) {
  cs() ? le(e) : t ? e() : Ln(e);
}
var Pi = Object.getOwnPropertySymbols, Bf = Object.prototype.hasOwnProperty, Ff = Object.prototype.propertyIsEnumerable, zf = (e, t) => {
  var n = {};
  for (var r in e)
    Bf.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Pi)
    for (var r of Pi(e))
      t.indexOf(r) < 0 && Ff.call(e, r) && (n[r] = e[r]);
  return n;
};
function Vf(e, t, n = {}) {
  const r = n, {
    eventFilter: o = Zs
  } = r, i = zf(r, [
    "eventFilter"
  ]);
  return $e(e, Lf(o, t), i);
}
var Uf = Object.defineProperty, qf = Object.defineProperties, Wf = Object.getOwnPropertyDescriptors, br = Object.getOwnPropertySymbols, tl = Object.prototype.hasOwnProperty, nl = Object.prototype.propertyIsEnumerable, Ei = (e, t, n) => t in e ? Uf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Kf = (e, t) => {
  for (var n in t || (t = {}))
    tl.call(t, n) && Ei(e, n, t[n]);
  if (br)
    for (var n of br(t))
      nl.call(t, n) && Ei(e, n, t[n]);
  return e;
}, Gf = (e, t) => qf(e, Wf(t)), Jf = (e, t) => {
  var n = {};
  for (var r in e)
    tl.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && br)
    for (var r of br(e))
      t.indexOf(r) < 0 && nl.call(e, r) && (n[r] = e[r]);
  return n;
};
function Qf(e, t, n = {}) {
  const r = n, {
    eventFilter: o
  } = r, i = Jf(r, [
    "eventFilter"
  ]), { eventFilter: a, pause: s, resume: l, isActive: u } = Mf(o);
  return { stop: Vf(e, t, Gf(Kf({}, i), {
    eventFilter: a
  })), pause: s, resume: l, isActive: u };
}
function Yf(e) {
  var t;
  const n = Qo(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const ct = Ys ? window : void 0;
function Oo(...e) {
  let t, n, r, o;
  if (Df(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = ct) : [t, n, r, o] = e, !t)
    return Nf;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [], a = () => {
    i.forEach((c) => c()), i.length = 0;
  }, s = (c, f, d, p) => (c.addEventListener(f, d, p), () => c.removeEventListener(f, d, p)), l = $e(() => [Yf(t), Qo(o)], ([c, f]) => {
    a(), c && i.push(...n.flatMap((d) => r.map((p) => s(c, d, p, f))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), a();
  };
  return Xs(u), u;
}
function Zf(e, t = !1) {
  const n = A(), r = () => n.value = !!e();
  return r(), el(r, t), n;
}
function Xf(e, t = {}) {
  const { window: n = ct } = t, r = Zf(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let o;
  const i = A(!1), a = () => {
    o && ("removeEventListener" in o ? o.removeEventListener("change", s) : o.removeListener(s));
  }, s = () => {
    r.value && (a(), o = n.matchMedia(Hf(e).value), i.value = o.matches, "addEventListener" in o ? o.addEventListener("change", s) : o.addListener(s));
  };
  return ke(s), Xs(() => a()), i;
}
const ko = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $o = "__vueuse_ssr_handlers__";
ko[$o] = ko[$o] || {};
const ed = ko[$o];
function rl(e, t) {
  return ed[e] || t;
}
function td(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var nd = Object.defineProperty, ji = Object.getOwnPropertySymbols, rd = Object.prototype.hasOwnProperty, od = Object.prototype.propertyIsEnumerable, Ci = (e, t, n) => t in e ? nd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ai = (e, t) => {
  for (var n in t || (t = {}))
    rd.call(t, n) && Ci(e, n, t[n]);
  if (ji)
    for (var n of ji(t))
      od.call(t, n) && Ci(e, n, t[n]);
  return e;
};
const id = {
  boolean: {
    read: (e) => e === "true",
    write: (e) => String(e)
  },
  object: {
    read: (e) => JSON.parse(e),
    write: (e) => JSON.stringify(e)
  },
  number: {
    read: (e) => Number.parseFloat(e),
    write: (e) => String(e)
  },
  any: {
    read: (e) => e,
    write: (e) => String(e)
  },
  string: {
    read: (e) => e,
    write: (e) => String(e)
  },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: {
    read: (e) => new Date(e),
    write: (e) => e.toISOString()
  }
}, Ii = "vueuse-storage";
function ol(e, t, n, r = {}) {
  var o;
  const {
    flush: i = "pre",
    deep: a = !0,
    listenToStorageChanges: s = !0,
    writeDefaults: l = !0,
    mergeDefaults: u = !1,
    shallow: c,
    window: f = ct,
    eventFilter: d,
    onError: p = (E) => {
      console.error(E);
    }
  } = r, v = (c ? _c : A)(t);
  if (!n)
    try {
      n = rl("getDefaultStorage", () => {
        var E;
        return (E = ct) == null ? void 0 : E.localStorage;
      })();
    } catch (E) {
      p(E);
    }
  if (!n)
    return v;
  const y = Qo(t), _ = td(y), w = (o = r.serializer) != null ? o : id[_], { pause: S, resume: x } = Qf(v, () => $(v.value), { flush: i, deep: a, eventFilter: d });
  return f && s && (Oo(f, "storage", C), Oo(f, Ii, N)), C(), v;
  function $(E) {
    try {
      if (E == null)
        n.removeItem(e);
      else {
        const j = w.write(E), I = n.getItem(e);
        I !== j && (n.setItem(e, j), f && f.dispatchEvent(new CustomEvent(Ii, {
          detail: {
            key: e,
            oldValue: I,
            newValue: j,
            storageArea: n
          }
        })));
      }
    } catch (j) {
      p(j);
    }
  }
  function k(E) {
    const j = E ? E.newValue : n.getItem(e);
    if (j == null)
      return l && y !== null && n.setItem(e, w.write(y)), y;
    if (!E && u) {
      const I = w.read(j);
      return Tf(u) ? u(I, y) : _ === "object" && !Array.isArray(I) ? Ai(Ai({}, y), I) : I;
    } else
      return typeof j != "string" ? j : w.read(j);
  }
  function N(E) {
    C(E.detail);
  }
  function C(E) {
    if (!(E && E.storageArea !== n)) {
      if (E && E.key == null) {
        v.value = y;
        return;
      }
      if (!(E && E.key !== e)) {
        S();
        try {
          v.value = k(E);
        } catch (j) {
          p(j);
        } finally {
          E ? Ln(x) : x();
        }
      }
    }
  }
}
function il(e) {
  return Xf("(prefers-color-scheme: dark)", e);
}
var ad = Object.defineProperty, Ti = Object.getOwnPropertySymbols, sd = Object.prototype.hasOwnProperty, ld = Object.prototype.propertyIsEnumerable, Di = (e, t, n) => t in e ? ad(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, cd = (e, t) => {
  for (var n in t || (t = {}))
    sd.call(t, n) && Di(e, n, t[n]);
  if (Ti)
    for (var n of Ti(t))
      ld.call(t, n) && Di(e, n, t[n]);
  return e;
};
function ud(e = {}) {
  const {
    selector: t = "html",
    attribute: n = "class",
    initialValue: r = "auto",
    window: o = ct,
    storage: i,
    storageKey: a = "vueuse-color-scheme",
    listenToStorageChanges: s = !0,
    storageRef: l,
    emitAuto: u
  } = e, c = cd({
    auto: "",
    light: "light",
    dark: "dark"
  }, e.modes || {}), f = il({ window: o }), d = T(() => f.value ? "dark" : "light"), p = l || (a == null ? A(r) : ol(a, r, i, { window: o, listenToStorageChanges: s })), v = T({
    get() {
      return p.value === "auto" && !u ? d.value : p.value;
    },
    set(S) {
      p.value = S;
    }
  }), y = rl("updateHTMLAttrs", (S, x, $) => {
    const k = o == null ? void 0 : o.document.querySelector(S);
    if (k)
      if (x === "class") {
        const N = $.split(/\s/g);
        Object.values(c).flatMap((C) => (C || "").split(/\s/g)).filter(Boolean).forEach((C) => {
          N.includes(C) ? k.classList.add(C) : k.classList.remove(C);
        });
      } else
        k.setAttribute(x, $);
  });
  function _(S) {
    var x;
    const $ = S === "auto" ? d.value : S;
    y(t, n, (x = c[$]) != null ? x : $);
  }
  function w(S) {
    e.onChanged ? e.onChanged(S, _) : _(S);
  }
  return $e(v, w, { flush: "post", immediate: !0 }), u && $e(d, () => w(v.value), { flush: "post" }), el(() => w(v.value)), v;
}
var fd = Object.defineProperty, dd = Object.defineProperties, pd = Object.getOwnPropertyDescriptors, Ni = Object.getOwnPropertySymbols, hd = Object.prototype.hasOwnProperty, md = Object.prototype.propertyIsEnumerable, Li = (e, t, n) => t in e ? fd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, vd = (e, t) => {
  for (var n in t || (t = {}))
    hd.call(t, n) && Li(e, n, t[n]);
  if (Ni)
    for (var n of Ni(t))
      md.call(t, n) && Li(e, n, t[n]);
  return e;
}, gd = (e, t) => dd(e, pd(t));
function yd(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: n = "",
    window: r = ct
  } = e, o = ud(gd(vd({}, e), {
    onChanged: (s, l) => {
      var u;
      e.onChanged ? (u = e.onChanged) == null || u.call(e, s === "dark") : l(s);
    },
    modes: {
      dark: t,
      light: n
    }
  })), i = il({ window: r });
  return T({
    get() {
      return o.value === "dark";
    },
    set(s) {
      s === i.value ? o.value = "auto" : o.value = s ? "dark" : "light";
    }
  });
}
function _d(e, t, n = {}) {
  const { window: r = ct } = n;
  return ol(e, t, r == null ? void 0 : r.localStorage, n);
}
var Mi;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Mi || (Mi = {}));
var bd = Object.defineProperty, Ri = Object.getOwnPropertySymbols, wd = Object.prototype.hasOwnProperty, Sd = Object.prototype.propertyIsEnumerable, Hi = (e, t, n) => t in e ? bd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, xd = (e, t) => {
  for (var n in t || (t = {}))
    wd.call(t, n) && Hi(e, n, t[n]);
  if (Ri)
    for (var n of Ri(t))
      Sd.call(t, n) && Hi(e, n, t[n]);
  return e;
};
const Od = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
xd({
  linear: Rf
}, Od);
function kd({ window: e = ct } = {}) {
  if (!e)
    return {
      x: A(0),
      y: A(0)
    };
  const t = A(e.scrollX), n = A(e.scrollY);
  return Oo(e, "scroll", () => {
    t.value = e.scrollX, n.value = e.scrollY;
  }, {
    capture: !1,
    passive: !0
  }), { x: t, y: n };
}
const Tt = yd(), $d = /* @__PURE__ */ h("span", { class: "sr-only" }, "Toggle Dark Mode", -1), Pd = /* @__PURE__ */ h("svg", {
  class: "h-4 w-4 text-gray-500",
  fill: "currentColor",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("path", { d: "M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" })
], -1), Ed = [
  Pd
], jd = /* @__PURE__ */ h("svg", {
  class: "h-3 w-3 text-gray-900",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ h("path", {
    "fill-rule": "evenodd",
    d: "M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z",
    "clip-rule": "evenodd"
  })
], -1), Cd = [
  jd
], Ad = /* @__PURE__ */ L({
  __name: "DarkModeToggle",
  setup(e) {
    return (t, n) => {
      const r = Oe("ClientOnly");
      return g(), ue(r, null, {
        default: he(() => [
          F(P(kf), {
            modelValue: P(Tt),
            "onUpdate:modelValue": n[0] || (n[0] = (o) => us(Tt) ? Tt.value = o : null),
            class: te([
              "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-white/20 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-transparent dark:bg-white/10"
            ])
          }, {
            default: he(() => [
              $d,
              h("span", {
                class: te([
                  P(Tt) ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                ])
              }, [
                h("span", {
                  class: te([
                    P(Tt) ? "opacity-0 duration-100 ease-out" : "opacity-100 duration-200 ease-in",
                    "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                  ]),
                  "aria-hidden": "true"
                }, Ed, 2),
                h("span", {
                  class: te([
                    P(Tt) ? "opacity-100 duration-200 ease-in" : "opacity-0 duration-100 ease-out",
                    "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                  ]),
                  "aria-hidden": "true"
                }, Cd, 2)
              ], 2)
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      });
    };
  }
}), al = Symbol(), Bi = "__CURRENT_FLAVOR__";
function Id() {
  const e = _d(Bi, ""), t = A(e.value ?? void 0);
  return $e(t, () => {
    lo && t.value && localStorage.setItem(Bi, t.value);
  }), {
    value: t,
    set(n) {
      t.value = n;
    }
  };
}
function sl() {
  const e = me(al);
  if (!e)
    throw new Error("useCurrentFlavor() is called without provider.");
  return e;
}
const Td = { class: "relative flex items-center" }, Dd = ["value"], Nd = /* @__PURE__ */ L({
  __name: "FlavorDropdown",
  setup(e) {
    const { value: t, set: n } = sl(), r = [
      { name: "Angular", value: "angular" },
      { name: "Vue", value: "vue" },
      { name: "React", value: "react" },
      { name: "Svelte", value: "svelte" },
      { name: "Plain", value: "plain" }
    ].sort((i, a) => i.value.localeCompare(a.value)), o = T({
      get() {
        return t.value;
      },
      set(i) {
        i && n(i);
      }
    });
    return (i, a) => {
      const s = Oe("ClientOnly");
      return g(), b("div", Td, [
        F(s, null, {
          default: he(() => [
            qt(h("select", {
              class: "form-select w-full rounded border border-slate-200 bg-slate-100 px-4 py-2 dark:border-white/20 dark:bg-white/10 dark:text-white",
              "onUpdate:modelValue": a[0] || (a[0] = (l) => us(o) ? o.value = l : null)
            }, [
              (g(!0), b(z, null, ne(P(r), (l) => (g(), b("option", {
                value: l.value
              }, U(l.name), 9, Dd))), 256))
            ], 512), [
              [bc, P(o)]
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
function Ld(e, t) {
  return g(), b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
    })
  ]);
}
function Md(e, t) {
  return g(), b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
    })
  ]);
}
function Rd(e, t) {
  return g(), b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
    })
  ]);
}
function Hd(e, t) {
  return g(), b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
    })
  ]);
}
function Bd(e, t) {
  return g(), b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.5 12.75l6 6 9-13.5"
    })
  ]);
}
function Fd(e, t) {
  return g(), b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
    })
  ]);
}
function zd(e, t) {
  return g(), b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
    })
  ]);
}
function Vd(e, t) {
  return g(), b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
    })
  ]);
}
function Ud(e, t) {
  return g(), b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
    })
  ]);
}
const ll = /#.*$/, qd = /(index)?\.(md|html)$/, Wd = typeof window < "u", Kd = A(Wd ? location.hash : "");
function Et(e, t, n = !1) {
  if (t === void 0)
    return !1;
  if (e = Fi(`/${e}`), n)
    return new RegExp(t).test(e);
  if (Fi(t) !== e)
    return !1;
  const r = t.match(ll);
  return r ? Kd.value === r[0] : !0;
}
function Fi(e) {
  return decodeURI(e).replace(ll, "").replace(qd, "");
}
function Gd(e, t) {
  const n = e.endsWith("/"), r = t.startsWith("/");
  return n && r ? e.slice(0, -1) + t : !n && !r ? `${e}/${t}` : e + t;
}
function Fn() {
  const { theme: e, page: t } = De(), n = e.value;
  return T(() => {
    const o = Object.keys(n.sidebar).find((i) => Et(t.value.relativePath, i, !0)) ?? "/";
    return n.sidebar[o] ?? [];
  });
}
function Yo(e) {
  const t = [];
  function n(r, o) {
    for (const i of r) {
      const a = { ...i, link: i == null ? void 0 : i.link, parent: o };
      t.push(a), "items" in i && n(i.items ?? [], a);
    }
  }
  for (const r of e)
    n(r.items ?? [], r);
  return t;
}
const Jd = {
  key: 0,
  class: "flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 text-gray-700 dark:text-white"
}, Qd = { key: 1 }, Yd = ["href"], Zd = {
  key: 2,
  class: "ml-2 px-2"
}, Xd = /* @__PURE__ */ L({
  __name: "MobileNavigationItem",
  props: {
    depth: {
      type: Number,
      default: 0
    },
    item: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const { page: t } = De();
    return (n, r) => {
      var i;
      const o = Oe("MobileNavigationItem", !0);
      return e.item.hidden ? V("", !0) : (g(), b(z, { key: 0 }, [
        e.item.link ? (g(), b("li", Qd, [
          h("a", {
            href: e.item.link,
            class: te([
              "block rounded-md py-2 pr-2 pl-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-white/10",
              P(Et)(
                P(t).relativePath,
                e.item.activeMatch || e.item.link,
                !!e.item.activeMatch
              ) ? "font-semibold text-blue-700 dark:text-cyan-400" : "text-gray-700 dark:text-gray-200"
            ])
          }, U(e.item.text), 11, Yd)
        ])) : (g(), b("li", Jd, U(e.item.text), 1)),
        (i = e.item.items) != null && i.length ? (g(), b("ul", Zd, [
          (g(!0), b(z, null, ne(e.item.items, (a) => (g(), ue(o, { item: a }, null, 8, ["item"]))), 256))
        ])) : V("", !0)
      ], 64));
    };
  }
}), ep = { class: "sticky top-0 z-10 border-b bg-gray-50 px-4 py-2 dark:-top-px dark:border-t dark:border-white/10 dark:bg-gray-900 lg:hidden" }, tp = /* @__PURE__ */ h("span", { class: "ml-2 text-xs" }, "Menu", -1), np = { class: "fixed inset-0 overflow-hidden" }, rp = { class: "absolute inset-0 overflow-hidden" }, op = { class: "pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-24" }, ip = { class: "flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl dark:bg-gray-900 dark:shadow-cyan-400/20" }, ap = { class: "relative flex-1 px-4 sm:px-6" }, sp = {
  role: "list",
  class: "space-y-1"
}, lp = /* @__PURE__ */ L({
  __name: "MobileNavigation",
  setup(e) {
    const t = A(!1), n = Nn();
    $e(
      () => n.path,
      () => {
        t.value = !1;
      }
    );
    const r = Fn();
    return (o, i) => (g(), b(z, null, [
      h("div", ep, [
        h("button", {
          type: "button",
          class: "flex items-center text-gray-900 dark:text-white",
          onClick: i[0] || (i[0] = (a) => t.value = !0)
        }, [
          F(P(Rd), { class: "h-5 w-5 text-gray-400 dark:text-white/50" }),
          tp
        ])
      ]),
      F(P(Qs), {
        as: "template",
        show: t.value
      }, {
        default: he(() => [
          F(P(Sf), {
            as: "div",
            class: "relative z-20",
            onClose: i[1] || (i[1] = (a) => t.value = !1)
          }, {
            default: he(() => [
              F(P(xo), {
                as: "div",
                class: "fixed inset-0 bg-gray-200/80 dark:bg-gray-900/70",
                enter: "transition-opacity ease-in-out duration-300",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "transition-opacity ease-in-out duration-300",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }),
              h("div", np, [
                h("div", rp, [
                  h("div", op, [
                    F(P(xo), {
                      as: "template",
                      enter: "transform transition ease-in-out duration-300",
                      "enter-from": "-translate-x-full",
                      "enter-to": "translate-x-0",
                      leave: "transform transition ease-in-out duration-300",
                      "leave-from": "translate-x-0",
                      "leave-to": "-translate-x-full"
                    }, {
                      default: he(() => [
                        F(P(xf), { class: "pointer-events-auto w-screen max-w-md" }, {
                          default: he(() => [
                            h("div", ip, [
                              h("div", ap, [
                                h("ul", sp, [
                                  (g(!0), b(z, null, ne(P(r), (a) => (g(), ue(Xd, { item: a }, null, 8, ["item"]))), 256))
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), jt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, cp = {}, up = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "h-6 w-6"
}, fp = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
}, null, -1), dp = [
  fp
];
function pp(e, t) {
  return g(), b("svg", up, dp);
}
const hp = /* @__PURE__ */ jt(cp, [["render", pp]]), mp = {}, vp = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "h-6 w-6"
}, gp = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
}, null, -1), yp = [
  gp
];
function _p(e, t) {
  return g(), b("svg", vp, yp);
}
const bp = /* @__PURE__ */ jt(mp, [["render", _p]]), wp = {}, Sp = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "h-6 w-6"
}, xp = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
}, null, -1), Op = [
  xp
];
function kp(e, t) {
  return g(), b("svg", Sp, Op);
}
const $p = /* @__PURE__ */ jt(wp, [["render", kp]]), Pp = {}, Ep = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "h-5 w-5"
}, jp = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
  "clip-rule": "evenodd"
}, null, -1), Cp = [
  jp
];
function Ap(e, t) {
  return g(), b("svg", Ep, Cp);
}
const ar = /* @__PURE__ */ jt(Pp, [["render", Ap]]), Ip = {
  key: 0,
  class: "mt-2"
}, Tp = ["innerHTML"], Dp = ["href", "data-current"], Np = { class: "flex w-full items-center" }, Lp = ["innerHTML"], Mp = /* @__PURE__ */ L({
  __name: "SideBarLink",
  props: {
    item: null,
    depth: { default: 0 }
  },
  setup(e) {
    const t = e, n = {
      file: bp,
      folder: hp,
      cube: $p,
      chevron_right: ar
    }, { page: r, site: o } = De(), i = t.item.text, a = d(o.value.base, t.item.link), s = t.item.items, l = T(() => Et(r.value.relativePath, t.item.link)), u = t.item.icon && n[t.item.icon], c = A(!!t.item.hideChildren), f = T(() => t.item.hideChildren ? !1 : !!s && t.item.collapsible !== !1);
    function d(p, v) {
      return v === void 0 || v.startsWith("#") ? v : Gd(p, v);
    }
    return (p, v) => {
      var _, w, S;
      const y = Oe("SideBarLink", !0);
      return (_ = e.item) != null && _.hidden ? V("", !0) : (g(), b("li", Ip, [
        ((w = e.item) == null ? void 0 : w.visible) !== !1 ? (g(), b(z, { key: 0 }, [
          !P(a) && P(i) ? (g(), b("p", {
            key: 0,
            onClick: v[0] || (v[0] = kt((x) => c.value = !c.value, ["prevent"])),
            class: "group mt-4 flex cursor-pointer items-center justify-between py-2 text-sm font-semibold tracking-wide text-slate-900 dark:text-white"
          }, [
            h("span", { innerHTML: P(i) }, null, 8, Tp),
            ((S = e.item) == null ? void 0 : S.collapsible) !== !1 ? (g(), ue(ar, {
              key: 0,
              class: te(["h-5 w-5 text-slate-400 group-hover:text-slate-800 dark:group-hover:text-cyan-300", {
                "rotate-90 transform": !c.value
              }])
            }, null, 8, ["class"])) : V("", !0)
          ])) : (g(), b("a", {
            key: 1,
            href: P(a),
            "data-current": P(l),
            class: te(["group -ml-0.5 flex items-center justify-between border-l-2 border-transparent text-sm font-medium", {
              "border-blue-600 text-blue-600 dark:border-cyan-400 dark:text-cyan-400": P(l),
              "text-slate-600 hover:border-blue-600 hover:text-slate-900 dark:text-slate-400 dark:hover:border-cyan-400 dark:hover:text-slate-300": !P(l)
            }]),
            style: or({
              paddingLeft: `${e.depth * 0.75}rem`
            })
          }, [
            h("div", Np, [
              P(u) ? (g(), ue(Mn(P(u)), {
                key: 0,
                class: "relative -top-0.5 mr-1.5 h-5 w-5"
              })) : V("", !0),
              h("div", {
                innerHTML: P(i),
                class: "truncate"
              }, null, 8, Lp)
            ]),
            P(f) ? (g(), b("button", {
              key: 0,
              onClick: v[1] || (v[1] = kt((x) => c.value = !c.value, ["prevent"])),
              class: "py-0.5 pl-2"
            }, [
              F(ar, {
                class: te(["h-5 w-5 text-slate-400 hover:text-slate-800 dark:hover:text-cyan-300", {
                  "rotate-90 transform": !c.value
                }])
              }, null, 8, ["class"])
            ])) : V("", !0)
          ], 14, Dp))
        ], 64)) : V("", !0),
        P(s) ? qt((g(), b("ul", {
          key: 1,
          class: te({
            "border-l-2 border-slate-200 dark:border-slate-800": e.depth === 0 && e.item.type !== "filetree"
          })
        }, [
          (g(!0), b(z, null, ne(P(s), (x) => (g(), ue(y, {
            item: x,
            depth: e.item.type === "filetree" ? 0 : e.depth + 1
          }, null, 8, ["item", "depth"]))), 256))
        ], 2)), [
          [dr, !c.value]
        ]) : V("", !0)
      ]));
    };
  }
}), Rp = {
  key: 0,
  class: "relative"
}, Hp = /* @__PURE__ */ L({
  __name: "SideBar",
  setup(e) {
    const t = Fn();
    return (n, r) => P(t).length > 0 ? (g(), b("ul", Rp, [
      (g(!0), b(z, null, ne(P(t), (o) => (g(), ue(Mp, {
        key: o.text,
        item: o
      }, null, 8, ["item"]))), 128))
    ])) : V("", !0);
  }
}), Bp = { class: "space-y-3" }, Fp = ["href", "target"], zp = {
  key: 0,
  class: "rounded border border-slate-300 p-1 text-slate-400 dark:border-slate-300/30 dark:text-slate-300/40"
}, Vp = { class: "ml-3 font-medium leading-6 tracking-wide" }, Up = /* @__PURE__ */ L({
  __name: "SideBarNav",
  setup(e) {
    const t = {
      AcademicCapIcon: Ld,
      BookOpenIcon: Hd,
      CheckIcon: Bd,
      CodeBracketIcon: Fd,
      CpuChipIcon: zd,
      CubeTransparentIcon: Vd,
      DevicePhoneMobileIcon: Ud
    }, { theme: n, page: r } = De();
    return (o, i) => (g(), b("ul", Bp, [
      (g(!0), b(z, null, ne(P(n).nav, (a) => (g(), b("li", null, [
        h("a", {
          href: a.link,
          class: te([
            "flex items-center",
            P(Et)(P(r).relativePath, a.activeMatch, !!a.activeMatch) ? "text-blue-600 dark:text-cyan-400" : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
          ]),
          target: a.target
        }, [
          a.icon in t ? (g(), b("div", zp, [
            (g(), ue(Mn(t[a.icon]), { class: "h-5 w-5" }))
          ])) : V("", !0),
          h("span", Vp, U(a.text), 1)
        ], 10, Fp)
      ]))), 256))
    ]));
  }
}), tn = (e = "") => ({}).VITE_MAIN_URL + e, qp = (e = "") => ({}).VITE_DOCS_URL + e, Wp = (e = "") => ({}).VITE_BLOG_URL + e, zi = {
  nav: [
    { text: "Docs", link: qp() },
    { text: "Blog", link: Wp() },
    { text: "Community", link: "https://nativescript.org/discord", target: "blank" },
    { text: "Support", link: tn("/support") }
  ],
  flyoutNav: [
    {
      text: "Partners",
      link: tn("/partners"),
      description: "Find partners who can help you with your projects."
    },
    {
      text: "Samples",
      link: tn("/samples"),
      description: "Browse creative samples of NativeScript user experiences."
    },
    {
      text: "Showcase",
      link: tn("/showcase"),
      description: "Browse a few production apps submitted by the community."
    },
    {
      text: "Mentoring",
      link: tn("/mentoring-free-for-beginners"),
      description: "Starting a career in tech?"
    },
    {
      text: "Preview",
      link: "https://preview.nativescript.org/",
      target: "blank",
      description: "Preview NativeScript projects with StackBlitz or locally."
    },
    {
      text: "Governance",
      link: "https://github.com/NativeScript/management/blob/master/nativescript-governance.md",
      target: "blank",
      description: "Learn about the governance model and how you can be a part of it."
    }
  ]
}, Kp = {
  key: 0,
  viewBox: "0 0 532 100",
  xmlns: "http://www.w3.org/2000/svg",
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "2"
}, Gp = /* @__PURE__ */ fs('<g transform="translate(-362.21733 -1030)"><path fill="none" d="M362.217 1030h531.337v100H362.217z"></path><clipPath id="a"><path d="M362.217 1030h531.337v100H362.217z"></path></clipPath><g clip-path="url(#a)"><g transform="matrix(.09766 0 0 .09766 362.4350256 1030.0000256)"><path d="M1024 256C1024 114.71 909.29 0 768 0H256C114.71 0 0 114.71 0 256v512c0 141.29 114.71 256 256 256h512c141.29 0 256-114.71 256-256V256z" fill="none"></path><clipPath id="b"><path d="M1024 256C1024 114.71 909.29 0 768 0H256C114.71 0 0 114.71 0 256v512c0 141.29 114.71 256 256 256h512c141.29 0 256-114.71 256-256V256z"></path></clipPath><g clip-path="url(#b)"><path fill="#65adf1" d="M0 0h1024v1024H0z"></path><path d="M843 511.864v1.099c0 .256-.195.468-.451.492-33.364 3.123-59.479 30.233-59.479 64.409v136.941c0 9.569-2.01 18.8-5.64 27.229-10.35 24.071-33.84 41.571-61.16 41.571h-69.2l-.48-.601-269.18-337.32v337.921h-69.68c-36.893 0-66.8-29.908-66.8-66.8V577.864c0-34.175-26.115-61.286-59.479-64.409-.256-.024-.451-.236-.451-.492v-1.099c0-.255.194-.467.449-.492 33.245-3.237 59.221-31.021 59.221-65.117v-139.06c0-9.29 1.9-18.15 5.33-26.181 10.18-23.879 33.87-40.62 61.47-40.62h69.66l.28.35 269.18 337.33v-337.68h69.94c36.893 0 66.8 29.908 66.8 66.801v139.06c0 34.096 25.976 61.88 59.222 65.117.254.025.448.237.448.492" fill="#fff" fill-rule="nonzero"></path></g></g><path d="M527.5797 1056.618v49.436h-9.044l-21.556-31.144h-.34v31.144h-10.472v-49.436h9.18l21.352 31.076h.408v-31.076h10.472zM546.5577 1106.734c-3.536 0-6.46-.884-8.84-2.788-2.312-1.836-3.468-4.556-3.468-8.228 0-2.788.612-4.964 1.972-6.528 1.292-1.564 2.992-2.72 5.1-3.468 2.108-.748 4.42-1.224 6.868-1.428 3.196-.34 5.508-.68 6.868-1.02 1.428-.34 2.108-1.156 2.108-2.312v-.136c0-1.564-.476-2.72-1.428-3.604-.952-.816-2.312-1.224-4.08-1.224-1.836 0-3.332.408-4.42 1.224-1.088.748-1.836 1.836-2.176 3.06l-9.52-.816c.68-3.332 2.448-6.052 5.304-8.024 2.788-1.972 6.392-2.992 10.88-2.992 2.72 0 5.304.476 7.684 1.36 2.38.816 4.352 2.176 5.848 4.012 1.428 1.904 2.176 4.284 2.176 7.208v25.024h-9.724v-5.168h-.34c-.884 1.768-2.244 3.128-4.012 4.216-1.836 1.088-4.08 1.632-6.8 1.632zm2.924-7.072c2.244 0 4.148-.68 5.576-1.972 1.428-1.292 2.176-2.924 2.176-4.896v-3.944c-.408.272-1.02.544-1.904.748-.816.204-1.7.408-2.652.544-1.02.136-1.836.272-2.584.408-1.836.204-3.264.748-4.352 1.496-1.156.748-1.7 1.836-1.7 3.332 0 1.428.544 2.448 1.564 3.196 1.02.748 2.312 1.088 3.876 1.088zM595.1267 1068.994v7.684h-6.936v17.952c0 1.428.34 2.38.952 2.924.68.476 1.496.748 2.516.748.476 0 .952-.068 1.428-.136.476-.136.884-.204 1.156-.204l1.564 7.616c-.476.204-1.224.34-2.176.612-.884.204-2.04.34-3.4.34-3.74.204-6.732-.612-8.976-2.38-2.244-1.768-3.4-4.488-3.332-8.16v-19.312h-5.1v-7.684h5.1v-8.908h10.268v8.908h6.936zM601.8247 1106.054v-37.06h10.336v37.06h-10.336zm5.168-41.888c-1.496 0-2.788-.476-3.876-1.496s-1.632-2.244-1.632-3.672c0-1.496.544-2.72 1.632-3.672 1.088-1.02 2.38-1.564 3.876-1.564 1.564 0 2.856.544 3.944 1.564 1.088.952 1.632 2.176 1.632 3.672 0 1.428-.544 2.652-1.632 3.672-1.088 1.02-2.38 1.496-3.944 1.496zM654.9337 1068.994l-12.988 37.06h-11.56l-12.988-37.06h10.88l7.684 26.52h.408l7.684-26.52h10.88zM675.8657 1106.802c-3.808 0-7.072-.816-9.86-2.38-2.72-1.496-4.828-3.74-6.324-6.596-1.496-2.856-2.244-6.256-2.244-10.132 0-3.808.748-7.208 2.244-10.064 1.496-2.856 3.604-5.1 6.256-6.732 2.72-1.632 5.848-2.448 9.52-2.448 3.264 0 6.188.748 8.84 2.108s4.692 3.468 6.256 6.256c1.564 2.788 2.312 6.324 2.312 10.472v2.856h-25.228c0 2.788.748 4.964 2.244 6.596 1.496 1.564 3.604 2.38 6.12 2.38 1.768 0 3.264-.408 4.488-1.088 1.292-.748 2.176-1.836 2.652-3.196l9.52.612c-.748 3.4-2.584 6.188-5.508 8.228-2.924 2.108-6.732 3.128-11.288 3.128zm-8.228-23.052h15.572c0-2.176-.748-4.012-2.108-5.44-1.428-1.428-3.264-2.176-5.508-2.176s-4.148.748-5.576 2.244c-1.496 1.496-2.244 3.264-2.38 5.372zM726.6387 1070.83c-.204-1.972-1.02-3.468-2.516-4.556s-3.468-1.632-5.984-1.632-4.488.544-5.848 1.564c-1.36 1.088-2.04 2.38-2.04 4.012-.068 1.768.68 3.06 2.244 4.012 1.564.884 3.4 1.632 5.576 2.108l4.42 1.02c2.856.68 5.44 1.632 7.616 2.856 2.244 1.224 4.012 2.788 5.304 4.692 1.292 1.904 1.904 4.284 1.904 7.004 0 4.556-1.7 8.16-5.1 10.812-3.332 2.72-8.024 4.012-14.076 4.012-6.052 0-10.812-1.36-14.416-4.08-3.536-2.72-5.372-6.8-5.508-12.104h10.132c.136 2.448 1.156 4.352 2.924 5.576 1.768 1.224 4.012 1.836 6.732 1.836 2.652 0 4.76-.544 6.392-1.632 1.564-1.156 2.38-2.652 2.38-4.42 0-1.7-.748-2.992-2.176-3.876-1.496-.884-3.536-1.7-6.256-2.312l-5.372-1.36c-4.148-1.02-7.48-2.584-9.86-4.76-2.448-2.176-3.604-5.1-3.604-8.704 0-2.992.748-5.644 2.38-7.888 1.632-2.244 3.876-3.944 6.664-5.236 2.856-1.224 6.052-1.836 9.724-1.836 3.604 0 6.868.612 9.588 1.836 2.72 1.292 4.896 3.06 6.392 5.304 1.564 2.176 2.312 4.828 2.38 7.752h-9.996zM760.8987 1106.802c-3.808 0-7.072-.816-9.792-2.448-2.72-1.632-4.828-3.876-6.324-6.732-1.428-2.924-2.176-6.188-2.176-9.996 0-3.74.748-7.14 2.244-9.996 1.496-2.856 3.536-5.1 6.256-6.732 2.72-1.632 5.984-2.448 9.724-2.448 3.264 0 6.052.612 8.5 1.768 2.448 1.224 4.352 2.856 5.78 4.964 1.428 2.108 2.176 4.624 2.312 7.48h-9.656c-.272-1.836-1.02-3.332-2.176-4.488-1.156-1.088-2.72-1.7-4.556-1.7-2.38 0-4.352.952-5.78 2.924-1.428 1.904-2.176 4.624-2.176 8.092 0 3.536.748 6.324 2.176 8.228 1.428 1.972 3.332 2.924 5.78 2.924 1.768 0 3.264-.544 4.42-1.632 1.224-1.02 1.972-2.584 2.312-4.556h9.656c-.136 2.856-.884 5.304-2.244 7.48-1.428 2.176-3.332 3.876-5.712 5.032-2.448 1.224-5.304 1.836-8.568 1.836zM784.0427 1106.054v-37.06h9.996v6.46h.408c.68-2.312 1.768-4.08 3.4-5.236 1.564-1.224 3.4-1.768 5.508-1.768 1.156 0 2.176.136 3.196.34v9.112c-.476-.136-1.156-.272-1.972-.408-.884-.068-1.632-.136-2.38-.136-2.244 0-4.148.748-5.644 2.176-1.428 1.428-2.176 3.264-2.176 5.508v21.012h-10.336zM811.8367 1106.054v-37.06h10.336v37.06h-10.336zm5.168-41.888c-1.496 0-2.788-.476-3.876-1.496s-1.632-2.244-1.632-3.672c0-1.496.544-2.72 1.632-3.672 1.088-1.02 2.38-1.564 3.876-1.564 1.564 0 2.856.544 3.944 1.564 1.088.952 1.632 2.176 1.632 3.672 0 1.428-.544 2.652-1.632 3.672-1.088 1.02-2.38 1.496-3.944 1.496zM830.3347 1119.994v-51h10.2v6.188h.408c.476-1.02 1.156-2.04 1.972-3.06.884-1.02 2.04-1.904 3.4-2.584 1.428-.68 3.128-1.088 5.168-1.088 2.72 0 5.236.748 7.548 2.176 2.244 1.36 4.08 3.468 5.44 6.324 1.36 2.788 2.04 6.324 2.04 10.608 0 4.148-.612 7.616-1.972 10.472-1.36 2.856-3.128 4.964-5.44 6.46-2.244 1.428-4.76 2.176-7.616 2.176-1.972 0-3.672-.34-5.1-1.02-1.36-.612-2.516-1.496-3.4-2.448-.884-1.02-1.564-2.04-2.04-3.06h-.272v19.856h-10.336zm10.064-32.504c0 3.332.68 5.984 2.04 7.956 1.36 2.04 3.332 2.992 5.78 2.992 2.516 0 4.488-.952 5.78-2.992 1.36-2.04 2.04-4.692 2.04-7.956 0-3.196-.68-5.78-1.972-7.82-1.36-1.972-3.264-2.992-5.848-2.992-2.516 0-4.42.952-5.78 2.924-1.36 1.972-2.04 4.624-2.04 7.888zM893.0617 1068.994v7.684h-6.936v17.952c0 1.428.34 2.38.952 2.924.68.476 1.496.748 2.516.748.476 0 .952-.068 1.428-.136.476-.136.884-.204 1.156-.204l1.564 7.616c-.476.204-1.224.34-2.176.612-.884.204-2.04.34-3.4.34-3.74.204-6.732-.612-8.976-2.38-2.244-1.768-3.4-4.488-3.332-8.16v-19.312h-5.1v-7.684h5.1v-8.908h10.268v8.908h6.936z" fill="#65adf1"></path></g></g>', 1), Jp = [
  Gp
], Qp = {
  key: 1,
  viewBox: "0 0 532 100",
  xmlns: "http://www.w3.org/2000/svg",
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "2"
}, Yp = /* @__PURE__ */ fs('<g transform="translate(-1641.886 -310)"><path fill="none" d="M1642.22 310h531.337v100H1642.22z"></path><clipPath id="a1"><path d="M1642.22 310h531.337v100H1642.22z"></path></clipPath><g clip-path="url(#a1)"><g transform="matrix(.09766 0 0 .09766 1642.4300256 310.0000256)"><path d="M1024 256C1024 114.71 909.29 0 768 0H256C114.71 0 0 114.71 0 256v512c0 141.29 114.71 256 256 256h512c141.29 0 256-114.71 256-256V256z" fill="none"></path><clipPath id="b"><path d="M1024 256C1024 114.71 909.29 0 768 0H256C114.71 0 0 114.71 0 256v512c0 141.29 114.71 256 256 256h512c141.29 0 256-114.71 256-256V256z"></path></clipPath><g clip-path="url(#b)"><path d="M1024 0H0v1024h1024V0zM843 511.86v1.1c0 .26-.19.47-.45.49-33.36 3.13-59.48 30.24-59.48 64.41v136.95c0 9.56-2.01 18.8-5.64 27.23-10.35 24.07-33.84 41.57-61.16 41.57h-69.2l-.48-.6-269.18-337.33v337.93h-69.68c-36.89 0-66.8-29.91-66.8-66.8V577.86c0-34.17-26.11-61.28-59.48-64.41-.25-.02-.45-.23-.45-.49v-1.1c0-.25.19-.46.45-.49 33.24-3.24 59.22-31.02 59.22-65.11V307.19c0-9.29 1.9-18.14 5.33-26.18 10.18-23.88 33.87-40.62 61.47-40.62h69.66l.28.35 269.18 337.34V240.39h69.94c36.89 0 66.8 29.91 66.8 66.8v139.07c0 34.09 25.98 61.87 59.22 65.11.26.03.45.24.45.49z" fill="#fff"></path></g></g><path d="M1807.579 336.618v49.436h-9.044l-21.556-31.144h-.34v31.144h-10.472v-49.436h9.18l21.352 31.076h.408v-31.076h10.472zM1826.557 386.734c-3.536 0-6.46-.884-8.84-2.788-2.312-1.836-3.468-4.556-3.468-8.228 0-2.788.612-4.964 1.972-6.528 1.292-1.564 2.992-2.72 5.1-3.468 2.108-.748 4.42-1.224 6.868-1.428 3.196-.34 5.508-.68 6.868-1.02 1.428-.34 2.108-1.156 2.108-2.312v-.136c0-1.564-.476-2.72-1.428-3.604-.952-.816-2.312-1.224-4.08-1.224-1.836 0-3.332.408-4.42 1.224-1.088.748-1.836 1.836-2.176 3.06l-9.52-.816c.68-3.332 2.448-6.052 5.304-8.024 2.788-1.972 6.392-2.992 10.88-2.992 2.72 0 5.304.476 7.684 1.36 2.38.816 4.352 2.176 5.848 4.012 1.428 1.904 2.176 4.284 2.176 7.208v25.024h-9.724v-5.168h-.34c-.884 1.768-2.244 3.128-4.012 4.216-1.836 1.088-4.08 1.632-6.8 1.632zm2.924-7.072c2.244 0 4.148-.68 5.576-1.972 1.428-1.292 2.176-2.924 2.176-4.896v-3.944c-.408.272-1.02.544-1.904.748-.816.204-1.7.408-2.652.544-1.02.136-1.836.272-2.584.408-1.836.204-3.264.748-4.352 1.496-1.156.748-1.7 1.836-1.7 3.332 0 1.428.544 2.448 1.564 3.196 1.02.748 2.312 1.088 3.876 1.088zM1875.126 348.994v7.684h-6.936v17.952c0 1.428.34 2.38.952 2.924.68.476 1.496.748 2.516.748.476 0 .952-.068 1.428-.136.476-.136.884-.204 1.156-.204l1.564 7.616c-.476.204-1.224.34-2.176.612-.884.204-2.04.34-3.4.34-3.74.204-6.732-.612-8.976-2.38-2.244-1.768-3.4-4.488-3.332-8.16v-19.312h-5.1v-7.684h5.1v-8.908h10.268v8.908h6.936zM1881.824 386.054v-37.06h10.336v37.06h-10.336zm5.168-41.888c-1.496 0-2.788-.476-3.876-1.496s-1.632-2.244-1.632-3.672c0-1.496.544-2.72 1.632-3.672 1.088-1.02 2.38-1.564 3.876-1.564 1.564 0 2.856.544 3.944 1.564 1.088.952 1.632 2.176 1.632 3.672 0 1.428-.544 2.652-1.632 3.672-1.088 1.02-2.38 1.496-3.944 1.496zM1934.933 348.994l-12.988 37.06h-11.56l-12.988-37.06h10.88l7.684 26.52h.408l7.684-26.52h10.88zM1955.865 386.802c-3.808 0-7.072-.816-9.86-2.38-2.72-1.496-4.828-3.74-6.324-6.596-1.496-2.856-2.244-6.256-2.244-10.132 0-3.808.748-7.208 2.244-10.064 1.496-2.856 3.604-5.1 6.256-6.732 2.72-1.632 5.848-2.448 9.52-2.448 3.264 0 6.188.748 8.84 2.108s4.692 3.468 6.256 6.256c1.564 2.788 2.312 6.324 2.312 10.472v2.856h-25.228c0 2.788.748 4.964 2.244 6.596 1.496 1.564 3.604 2.38 6.12 2.38 1.768 0 3.264-.408 4.488-1.088 1.292-.748 2.176-1.836 2.652-3.196l9.52.612c-.748 3.4-2.584 6.188-5.508 8.228-2.924 2.108-6.732 3.128-11.288 3.128zm-8.228-23.052h15.572c0-2.176-.748-4.012-2.108-5.44-1.428-1.428-3.264-2.176-5.508-2.176s-4.148.748-5.576 2.244c-1.496 1.496-2.244 3.264-2.38 5.372zM2006.638 350.83c-.204-1.972-1.02-3.468-2.516-4.556s-3.468-1.632-5.984-1.632-4.488.544-5.848 1.564c-1.36 1.088-2.04 2.38-2.04 4.012-.068 1.768.68 3.06 2.244 4.012 1.564.884 3.4 1.632 5.576 2.108l4.42 1.02c2.856.68 5.44 1.632 7.616 2.856 2.244 1.224 4.012 2.788 5.304 4.692 1.292 1.904 1.904 4.284 1.904 7.004 0 4.556-1.7 8.16-5.1 10.812-3.332 2.72-8.024 4.012-14.076 4.012-6.052 0-10.812-1.36-14.416-4.08-3.536-2.72-5.372-6.8-5.508-12.104h10.132c.136 2.448 1.156 4.352 2.924 5.576 1.768 1.224 4.012 1.836 6.732 1.836 2.652 0 4.76-.544 6.392-1.632 1.564-1.156 2.38-2.652 2.38-4.42 0-1.7-.748-2.992-2.176-3.876-1.496-.884-3.536-1.7-6.256-2.312l-5.372-1.36c-4.148-1.02-7.48-2.584-9.86-4.76-2.448-2.176-3.604-5.1-3.604-8.704 0-2.992.748-5.644 2.38-7.888 1.632-2.244 3.876-3.944 6.664-5.236 2.856-1.224 6.052-1.836 9.724-1.836 3.604 0 6.868.612 9.588 1.836 2.72 1.292 4.896 3.06 6.392 5.304 1.564 2.176 2.312 4.828 2.38 7.752h-9.996zM2040.898 386.802c-3.808 0-7.072-.816-9.792-2.448-2.72-1.632-4.828-3.876-6.324-6.732-1.428-2.924-2.176-6.188-2.176-9.996 0-3.74.748-7.14 2.244-9.996 1.496-2.856 3.536-5.1 6.256-6.732 2.72-1.632 5.984-2.448 9.724-2.448 3.264 0 6.052.612 8.5 1.768 2.448 1.224 4.352 2.856 5.78 4.964 1.428 2.108 2.176 4.624 2.312 7.48h-9.656c-.272-1.836-1.02-3.332-2.176-4.488-1.156-1.088-2.72-1.7-4.556-1.7-2.38 0-4.352.952-5.78 2.924-1.428 1.904-2.176 4.624-2.176 8.092 0 3.536.748 6.324 2.176 8.228 1.428 1.972 3.332 2.924 5.78 2.924 1.768 0 3.264-.544 4.42-1.632 1.224-1.02 1.972-2.584 2.312-4.556h9.656c-.136 2.856-.884 5.304-2.244 7.48-1.428 2.176-3.332 3.876-5.712 5.032-2.448 1.224-5.304 1.836-8.568 1.836zM2064.042 386.054v-37.06h9.996v6.46h.408c.68-2.312 1.768-4.08 3.4-5.236 1.564-1.224 3.4-1.768 5.508-1.768 1.156 0 2.176.136 3.196.34v9.112c-.476-.136-1.156-.272-1.972-.408-.884-.068-1.632-.136-2.38-.136-2.244 0-4.148.748-5.644 2.176-1.428 1.428-2.176 3.264-2.176 5.508v21.012h-10.336zM2091.836 386.054v-37.06h10.336v37.06h-10.336zm5.168-41.888c-1.496 0-2.788-.476-3.876-1.496s-1.632-2.244-1.632-3.672c0-1.496.544-2.72 1.632-3.672 1.088-1.02 2.38-1.564 3.876-1.564 1.564 0 2.856.544 3.944 1.564 1.088.952 1.632 2.176 1.632 3.672 0 1.428-.544 2.652-1.632 3.672-1.088 1.02-2.38 1.496-3.944 1.496zM2110.334 399.994v-51h10.2v6.188h.408c.476-1.02 1.156-2.04 1.972-3.06.884-1.02 2.04-1.904 3.4-2.584 1.428-.68 3.128-1.088 5.168-1.088 2.72 0 5.236.748 7.548 2.176 2.244 1.36 4.08 3.468 5.44 6.324 1.36 2.788 2.04 6.324 2.04 10.608 0 4.148-.612 7.616-1.972 10.472-1.36 2.856-3.128 4.964-5.44 6.46-2.244 1.428-4.76 2.176-7.616 2.176-1.972 0-3.672-.34-5.1-1.02-1.36-.612-2.516-1.496-3.4-2.448-.884-1.02-1.564-2.04-2.04-3.06h-.272v19.856h-10.336zm10.064-32.504c0 3.332.68 5.984 2.04 7.956 1.36 2.04 3.332 2.992 5.78 2.992 2.516 0 4.488-.952 5.78-2.992 1.36-2.04 2.04-4.692 2.04-7.956 0-3.196-.68-5.78-1.972-7.82-1.36-1.972-3.264-2.992-5.848-2.992-2.516 0-4.42.952-5.78 2.924-1.36 1.972-2.04 4.624-2.04 7.888zM2173.061 348.994v7.684h-6.936v17.952c0 1.428.34 2.38.952 2.924.68.476 1.496.748 2.516.748.476 0 .952-.068 1.428-.136.476-.136.884-.204 1.156-.204l1.564 7.616c-.476.204-1.224.34-2.176.612-.884.204-2.04.34-3.4.34-3.74.204-6.732-.612-8.976-2.38-2.244-1.768-3.4-4.488-3.332-8.16v-19.312h-5.1v-7.684h5.1v-8.908h10.268v8.908h6.936z" fill="#fff" fill-rule="nonzero"></path></g></g>', 1), Zp = [
  Yp
], Vi = /* @__PURE__ */ L({
  __name: "NativeScriptLogo",
  props: {
    variant: String
  },
  setup(e) {
    return (t, n) => e.variant === "blue" ? (g(), b("svg", Kp, Jp)) : (g(), b("svg", Qp, Zp));
  }
});
/*! @docsearch/js 3.5.1 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */
function Ui(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ui(Object(n), !0).forEach(function(r) {
      Xp(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ui(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Cn(e) {
  return Cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Cn(e);
}
function Xp(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Po() {
  return Po = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Po.apply(this, arguments);
}
function e1(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, f = Object.keys(a);
    for (u = 0; u < f.length; u++)
      l = f[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function wr(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var i, a, s = [], l = !0, u = !1;
      try {
        for (o = o.call(n); !(l = (i = o.next()).done) && (s.push(i.value), !r || s.length !== r); l = !0)
          ;
      } catch (c) {
        u = !0, a = c;
      } finally {
        try {
          l || o.return == null || o.return();
        } finally {
          if (u)
            throw a;
        }
      }
      return s;
    }
  }(e, t) || cl(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Sr(e) {
  return function(t) {
    if (Array.isArray(t))
      return Eo(t);
  }(e) || function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
      return Array.from(t);
  }(e) || cl(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function cl(e, t) {
  if (e) {
    if (typeof e == "string")
      return Eo(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Eo(e, t) : void 0;
  }
}
function Eo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var M, dn, ul, qi, fl, xr = {}, Zo = [], t1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Ke(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function dl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ze(e, t, n) {
  var r, o, i, a = arguments, s = {};
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
  if (arguments.length > 3)
    for (n = [n], i = 3; i < arguments.length; i++)
      n.push(a[i]);
  if (n != null && (s.children = n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return pn(e, s, r, o, null);
}
function pn(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o ?? ++M.__v };
  return M.vnode != null && M.vnode(i), i;
}
function ut(e) {
  return e.children;
}
function Ve(e, t) {
  this.props = e, this.context = t;
}
function An(e, t) {
  if (t == null)
    return e.__ ? An(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? An(e) : null;
}
function pl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return pl(e);
  }
}
function jo(e) {
  (!e.__d && (e.__d = !0) && dn.push(e) && !Or.__r++ || qi !== M.debounceRendering) && ((qi = M.debounceRendering) || ul)(Or);
}
function Or() {
  for (var e; Or.__r = dn.length; )
    e = dn.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), dn = [], e.some(function(t) {
      var n, r, o, i, a, s;
      t.__d && (a = (i = (n = t).__v).__e, (s = n.__P) && (r = [], (o = Ke({}, i)).__v = i.__v + 1, Xo(s, i, o, n.__n, s.ownerSVGElement !== void 0, i.__h != null ? [a] : null, r, a ?? An(i), i.__h), gl(r, i), i.__e != a && pl(i)));
    });
}
function hl(e, t, n, r, o, i, a, s, l, u) {
  var c, f, d, p, v, y, _, w = r && r.__k || Zo, S = w.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((p = n.__k[c] = (p = t[c]) == null || typeof p == "boolean" ? null : typeof p == "string" || typeof p == "number" ? pn(null, p, null, null, p) : Array.isArray(p) ? pn(ut, { children: p }, null, null, null) : p.__b > 0 ? pn(p.type, p.props, p.key, null, p.__v) : p) != null) {
      if (p.__ = n, p.__b = n.__b + 1, (d = w[c]) === null || d && p.key == d.key && p.type === d.type)
        w[c] = void 0;
      else
        for (f = 0; f < S; f++) {
          if ((d = w[f]) && p.key == d.key && p.type === d.type) {
            w[f] = void 0;
            break;
          }
          d = null;
        }
      Xo(e, p, d = d || xr, o, i, a, s, l, u), v = p.__e, (f = p.ref) && d.ref != f && (_ || (_ = []), d.ref && _.push(d.ref, null, p), _.push(f, p.__c || v, p)), v != null ? (y == null && (y = v), typeof p.type == "function" && p.__k != null && p.__k === d.__k ? p.__d = l = ml(p, l, e) : l = vl(e, p, d, w, v, l), u || n.type !== "option" ? typeof n.type == "function" && (n.__d = l) : e.value = "") : l && d.__e == l && l.parentNode != e && (l = An(d));
    }
  for (n.__e = y, c = S; c--; )
    w[c] != null && (typeof n.type == "function" && w[c].__e != null && w[c].__e == n.__d && (n.__d = An(r, c + 1)), _l(w[c], w[c]));
  if (_)
    for (c = 0; c < _.length; c++)
      yl(_[c], _[++c], _[++c]);
}
function ml(e, t, n) {
  var r, o;
  for (r = 0; r < e.__k.length; r++)
    (o = e.__k[r]) && (o.__ = e, t = typeof o.type == "function" ? ml(o, t, n) : vl(n, o, o, e.__k, o.__e, t));
  return t;
}
function Je(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
    Je(n, t);
  }) : t.push(e)), t;
}
function vl(e, t, n, r, o, i) {
  var a, s, l;
  if (t.__d !== void 0)
    a = t.__d, t.__d = void 0;
  else if (n == null || o != i || o.parentNode == null)
    e:
      if (i == null || i.parentNode !== e)
        e.appendChild(o), a = null;
      else {
        for (s = i, l = 0; (s = s.nextSibling) && l < r.length; l += 2)
          if (s == o)
            break e;
        e.insertBefore(o, i), a = i;
      }
  return a !== void 0 ? a : o.nextSibling;
}
function Wi(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || t1.test(t) ? n : n + "px";
}
function Gn(e, t, n, r, o) {
  var i;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Wi(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Wi(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? Gi : Ki, i) : e.removeEventListener(t, i ? Gi : Ki, i);
    else if (t !== "dangerouslySetInnerHTML") {
      if (o)
        t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
}
function Ki(e) {
  this.l[e.type + !1](M.event ? M.event(e) : e);
}
function Gi(e) {
  this.l[e.type + !0](M.event ? M.event(e) : e);
}
function Xo(e, t, n, r, o, i, a, s, l) {
  var u, c, f, d, p, v, y, _, w, S, x, $ = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, s = t.__e = n.__e, t.__h = null, i = [s]), (u = M.__b) && u(t);
  try {
    e:
      if (typeof $ == "function") {
        if (_ = t.props, w = (u = $.contextType) && r[u.__c], S = u ? w ? w.props.value : u.__ : r, n.__c ? y = (c = t.__c = n.__c).__ = c.__E : ("prototype" in $ && $.prototype.render ? t.__c = c = new $(_, S) : (t.__c = c = new Ve(_, S), c.constructor = $, c.render = r1), w && w.sub(c), c.props = _, c.state || (c.state = {}), c.context = S, c.__n = r, f = c.__d = !0, c.__h = []), c.__s == null && (c.__s = c.state), $.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Ke({}, c.__s)), Ke(c.__s, $.getDerivedStateFromProps(_, c.__s))), d = c.props, p = c.state, f)
          $.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if ($.getDerivedStateFromProps == null && _ !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(_, S), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(_, c.__s, S) === !1 || t.__v === n.__v) {
            c.props = _, c.state = c.__s, t.__v !== n.__v && (c.__d = !1), c.__v = t, t.__e = n.__e, t.__k = n.__k, c.__h.length && a.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(_, c.__s, S), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, p, v);
          });
        }
        c.context = S, c.props = _, c.state = c.__s, (u = M.__r) && u(t), c.__d = !1, c.__v = t, c.__P = e, u = c.render(c.props, c.state, c.context), c.state = c.__s, c.getChildContext != null && (r = Ke(Ke({}, r), c.getChildContext())), f || c.getSnapshotBeforeUpdate == null || (v = c.getSnapshotBeforeUpdate(d, p)), x = u != null && u.type === ut && u.key == null ? u.props.children : u, hl(e, Array.isArray(x) ? x : [x], t, n, r, o, i, a, s, l), c.base = t.__e, t.__h = null, c.__h.length && a.push(c), y && (c.__E = c.__ = null), c.__e = !1;
      } else
        i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = n1(n.__e, t, n, r, o, i, a, l);
    (u = M.diffed) && u(t);
  } catch (k) {
    t.__v = null, (l || i != null) && (t.__e = s, t.__h = !!l, i[i.indexOf(s)] = null), M.__e(k, t, n);
  }
}
function gl(e, t) {
  M.__c && M.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      M.__e(r, n.__v);
    }
  });
}
function n1(e, t, n, r, o, i, a, s) {
  var l, u, c, f, d = n.props, p = t.props, v = t.type, y = 0;
  if (v === "svg" && (o = !0), i != null) {
    for (; y < i.length; y++)
      if ((l = i[y]) && (l === e || (v ? l.localName == v : l.nodeType == 3))) {
        e = l, i[y] = null;
        break;
      }
  }
  if (e == null) {
    if (v === null)
      return document.createTextNode(p);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, p.is && p), i = null, s = !1;
  }
  if (v === null)
    d === p || s && e.data === p || (e.data = p);
  else {
    if (i = i && Zo.slice.call(e.childNodes), u = (d = n.props || xr).dangerouslySetInnerHTML, c = p.dangerouslySetInnerHTML, !s) {
      if (i != null)
        for (d = {}, f = 0; f < e.attributes.length; f++)
          d[e.attributes[f].name] = e.attributes[f].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (function(_, w, S, x, $) {
      var k;
      for (k in S)
        k === "children" || k === "key" || k in w || Gn(_, k, null, S[k], x);
      for (k in w)
        $ && typeof w[k] != "function" || k === "children" || k === "key" || k === "value" || k === "checked" || S[k] === w[k] || Gn(_, k, w[k], S[k], x);
    }(e, p, d, o, s), c)
      t.__k = [];
    else if (y = t.props.children, hl(e, Array.isArray(y) ? y : [y], t, n, r, o && v !== "foreignObject", i, a, e.firstChild, s), i != null)
      for (y = i.length; y--; )
        i[y] != null && dl(i[y]);
    s || ("value" in p && (y = p.value) !== void 0 && (y !== e.value || v === "progress" && !y) && Gn(e, "value", y, d.value, !1), "checked" in p && (y = p.checked) !== void 0 && y !== e.checked && Gn(e, "checked", y, d.checked, !1));
  }
  return e;
}
function yl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    M.__e(r, n);
  }
}
function _l(e, t, n) {
  var r, o, i;
  if (M.unmount && M.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || yl(r, null, t)), n || typeof e.type == "function" || (n = (o = e.__e) != null), e.__e = e.__d = void 0, (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (a) {
        M.__e(a, t);
      }
    r.base = r.__P = null;
  }
  if (r = e.__k)
    for (i = 0; i < r.length; i++)
      r[i] && _l(r[i], t, n);
  o != null && dl(o);
}
function r1(e, t, n) {
  return this.constructor(e, n);
}
function In(e, t, n) {
  var r, o, i;
  M.__ && M.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], Xo(t, e = (!r && n || t).__k = ze(ut, null, [e]), o || xr, xr, t.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : t.firstChild ? Zo.slice.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r), gl(i, e);
}
function bl(e, t) {
  In(e, t, bl);
}
function o1(e, t, n) {
  var r, o, i, a = arguments, s = Ke({}, e.props);
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
  if (arguments.length > 3)
    for (n = [n], i = 3; i < arguments.length; i++)
      n.push(a[i]);
  return n != null && (s.children = n), pn(e.type, s, r || e.key, o || e.ref, null);
}
M = { __e: function(e, t) {
  for (var n, r, o; t = t.__; )
    if ((n = t.__c) && !n.__)
      try {
        if ((r = n.constructor) && r.getDerivedStateFromError != null && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), n.componentDidCatch != null && (n.componentDidCatch(e), o = n.__d), o)
          return n.__E = n;
      } catch (i) {
        e = i;
      }
  throw e;
}, __v: 0 }, Ve.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ke({}, this.state), typeof e == "function" && (e = e(Ke({}, n), this.props)), e && Ke(n, e), e != null && this.__v && (t && this.__h.push(t), jo(this));
}, Ve.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), jo(this));
}, Ve.prototype.render = ut, dn = [], ul = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Or.__r = 0, fl = 0;
var Qt, xe, Ji, zt = 0, Co = [], Qi = M.__b, Yi = M.__r, Zi = M.diffed, Xi = M.__c, ea = M.unmount;
function zn(e, t) {
  M.__h && M.__h(xe, e, zt || t), zt = 0;
  var n = xe.__H || (xe.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function wl(e) {
  return zt = 1, Sl(Ol, e);
}
function Sl(e, t, n) {
  var r = zn(Qt++, 2);
  return r.t = e, r.__c || (r.__ = [n ? n(t) : Ol(void 0, t), function(o) {
    var i = r.t(r.__[0], o);
    r.__[0] !== i && (r.__ = [i, r.__[1]], r.__c.setState({}));
  }], r.__c = xe), r.__;
}
function xl(e, t) {
  var n = zn(Qt++, 3);
  !M.__s && ei(n.__H, t) && (n.__ = e, n.__H = t, xe.__H.__h.push(n));
}
function ta(e, t) {
  var n = zn(Qt++, 4);
  !M.__s && ei(n.__H, t) && (n.__ = e, n.__H = t, xe.__h.push(n));
}
function Zr(e, t) {
  var n = zn(Qt++, 7);
  return ei(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function i1() {
  Co.forEach(function(e) {
    if (e.__P)
      try {
        e.__H.__h.forEach(sr), e.__H.__h.forEach(Ao), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], M.__e(t, e.__v);
      }
  }), Co = [];
}
M.__b = function(e) {
  xe = null, Qi && Qi(e);
}, M.__r = function(e) {
  Yi && Yi(e), Qt = 0;
  var t = (xe = e.__c).__H;
  t && (t.__h.forEach(sr), t.__h.forEach(Ao), t.__h = []);
}, M.diffed = function(e) {
  Zi && Zi(e);
  var t = e.__c;
  t && t.__H && t.__H.__h.length && (Co.push(t) !== 1 && Ji === M.requestAnimationFrame || ((Ji = M.requestAnimationFrame) || function(n) {
    var r, o = function() {
      clearTimeout(i), na && cancelAnimationFrame(r), setTimeout(n);
    }, i = setTimeout(o, 100);
    na && (r = requestAnimationFrame(o));
  })(i1)), xe = void 0;
}, M.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(sr), n.__h = n.__h.filter(function(r) {
        return !r.__ || Ao(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], M.__e(r, n.__v);
    }
  }), Xi && Xi(e, t);
}, M.unmount = function(e) {
  ea && ea(e);
  var t = e.__c;
  if (t && t.__H)
    try {
      t.__H.__.forEach(sr);
    } catch (n) {
      M.__e(n, t.__v);
    }
};
var na = typeof requestAnimationFrame == "function";
function sr(e) {
  var t = xe;
  typeof e.__c == "function" && e.__c(), xe = t;
}
function Ao(e) {
  var t = xe;
  e.__c = e.__(), xe = t;
}
function ei(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Ol(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function kl(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Io(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var r in t)
    if (r !== "__source" && e[r] !== t[r])
      return !0;
  return !1;
}
function To(e) {
  this.props = e;
}
(To.prototype = new Ve()).isPureReactComponent = !0, To.prototype.shouldComponentUpdate = function(e, t) {
  return Io(this.props, e) || Io(this.state, t);
};
var ra = M.__b;
M.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), ra && ra(e);
};
var a1 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911, oa = function(e, t) {
  return e == null ? null : Je(Je(e).map(t));
}, s1 = { map: oa, forEach: oa, count: function(e) {
  return e ? Je(e).length : 0;
}, only: function(e) {
  var t = Je(e);
  if (t.length !== 1)
    throw "Children.only";
  return t[0];
}, toArray: Je }, l1 = M.__e;
function lr() {
  this.__u = 0, this.t = null, this.__b = null;
}
function $l(e) {
  var t = e.__.__c;
  return t && t.__e && t.__e(e);
}
function on() {
  this.u = null, this.o = null;
}
M.__e = function(e, t, n) {
  if (e.then) {
    for (var r, o = t; o = o.__; )
      if ((r = o.__c) && r.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
  }
  l1(e, t, n);
}, (lr.prototype = new Ve()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = $l(r.__v), i = !1, a = function() {
    i || (i = !0, n.componentWillUnmount = n.__c, o ? o(s) : s());
  };
  n.__c = n.componentWillUnmount, n.componentWillUnmount = function() {
    a(), n.__c && n.__c();
  };
  var s = function() {
    if (!--r.__u) {
      if (r.state.__e) {
        var u = r.state.__e;
        r.__v.__k[0] = function f(d, p, v) {
          return d && (d.__v = null, d.__k = d.__k && d.__k.map(function(y) {
            return f(y, p, v);
          }), d.__c && d.__c.__P === p && (d.__e && v.insertBefore(d.__e, d.__d), d.__c.__e = !0, d.__c.__P = v)), d;
        }(u, u.__c.__P, u.__c.__O);
      }
      var c;
      for (r.setState({ __e: r.__b = null }); c = r.t.pop(); )
        c.forceUpdate();
    }
  }, l = t.__h === !0;
  r.__u++ || l || r.setState({ __e: r.__b = r.__v.__k[0] }), e.then(a, a);
}, lr.prototype.componentWillUnmount = function() {
  this.t = [];
}, lr.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = function i(a, s, l) {
        return a && (a.__c && a.__c.__H && (a.__c.__H.__.forEach(function(u) {
          typeof u.__c == "function" && u.__c();
        }), a.__c.__H = null), (a = kl({}, a)).__c != null && (a.__c.__P === l && (a.__c.__P = s), a.__c = null), a.__k = a.__k && a.__k.map(function(u) {
          return i(u, s, l);
        })), a;
      }(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__e && ze(ut, null, e.fallback);
  return o && (o.__h = null), [ze(ut, null, t.__e ? null : e.children), o];
};
var ia = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
function c1(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function u1(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    In(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r);
  } }), In(ze(c1, { context: t.context }, e.__v), t.l)) : t.l && t.componentWillUnmount();
}
function Pl(e, t) {
  return ze(u1, { __v: e, i: t });
}
(on.prototype = new Ve()).__e = function(e) {
  var t = this, n = $l(t.__v), r = t.o.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), ia(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, on.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = Je(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, on.prototype.componentDidUpdate = on.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    ia(e, n, t);
  });
};
var El = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, f1 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, d1 = function(e) {
  return (typeof Symbol < "u" && Cn(Symbol()) == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e);
};
function jl(e, t, n) {
  return t.__k == null && (t.textContent = ""), In(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
Ve.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(Ve.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var aa = M.event;
function p1() {
}
function h1() {
  return this.cancelBubble;
}
function m1() {
  return this.defaultPrevented;
}
M.event = function(e) {
  return aa && (e = aa(e)), e.persist = p1, e.isPropagationStopped = h1, e.isDefaultPrevented = m1, e.nativeEvent = e;
};
var Cl, sa = { configurable: !0, get: function() {
  return this.class;
} }, la = M.vnode;
M.vnode = function(e) {
  var t = e.type, n = e.props, r = n;
  if (typeof t == "string") {
    for (var o in r = {}, n) {
      var i = n[o];
      o === "value" && "defaultValue" in n && i == null || (o === "defaultValue" && "value" in n && n.value == null ? o = "value" : o === "download" && i === !0 ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !d1(n.type) ? o = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : f1.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i === null && (i = void 0), r[o] = i);
    }
    t == "select" && r.multiple && Array.isArray(r.value) && (r.value = Je(n.children).forEach(function(a) {
      a.props.selected = r.value.indexOf(a.props.value) != -1;
    })), t == "select" && r.defaultValue != null && (r.value = Je(n.children).forEach(function(a) {
      a.props.selected = r.multiple ? r.defaultValue.indexOf(a.props.value) != -1 : r.defaultValue == a.props.value;
    })), e.props = r;
  }
  t && n.class != n.className && (sa.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", sa)), e.$$typeof = El, la && la(e);
};
var ca = M.__r;
M.__r = function(e) {
  ca && ca(e), Cl = e.__c;
};
var v1 = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return Cl.__n[e.__c].props.value;
} } } };
(typeof performance > "u" ? "undefined" : Cn(performance)) == "object" && typeof performance.now == "function" && performance.now.bind(performance);
function ua(e) {
  return !!e && e.$$typeof === El;
}
var m = { useState: wl, useReducer: Sl, useEffect: xl, useLayoutEffect: ta, useRef: function(e) {
  return zt = 5, Zr(function() {
    return { current: e };
  }, []);
}, useImperativeHandle: function(e, t, n) {
  zt = 6, ta(function() {
    typeof e == "function" ? e(t()) : e && (e.current = t());
  }, n == null ? n : n.concat(e));
}, useMemo: Zr, useCallback: function(e, t) {
  return zt = 8, Zr(function() {
    return e;
  }, t);
}, useContext: function(e) {
  var t = xe.context[e.__c], n = zn(Qt++, 9);
  return n.__c = e, t ? (n.__ == null && (n.__ = !0, t.sub(xe)), t.props.value) : e.__;
}, useDebugValue: function(e, t) {
  M.useDebugValue && M.useDebugValue(t ? t(e) : e);
}, version: "16.8.0", Children: s1, render: jl, hydrate: function(e, t, n) {
  return bl(e, t), typeof n == "function" && n(), e ? e.__c : null;
}, unmountComponentAtNode: function(e) {
  return !!e.__k && (In(null, e), !0);
}, createPortal: Pl, createElement: ze, createContext: function(e, t) {
  var n = { __c: t = "__cC" + fl++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value !== a.value && o.some(jo);
    }, this.sub = function(a) {
      o.push(a);
      var s = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        o.splice(o.indexOf(a), 1), s && s.call(a);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}, createFactory: function(e) {
  return ze.bind(null, e);
}, cloneElement: function(e) {
  return ua(e) ? o1.apply(null, arguments) : e;
}, createRef: function() {
  return { current: null };
}, Fragment: ut, isValidElement: ua, findDOMNode: function(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}, Component: Ve, PureComponent: To, memo: function(e, t) {
  function n(o) {
    var i = this.props.ref, a = i == o.ref;
    return !a && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !a : Io(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, ze(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}, forwardRef: function(e) {
  function t(n, r) {
    var o = kl({}, n);
    return delete o.ref, e(o, (r = n.ref || r) && (Cn(r) != "object" || "current" in r) ? r : null);
  }
  return t.$$typeof = a1, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}, unstable_batchedUpdates: function(e, t) {
  return e(t);
}, StrictMode: ut, Suspense: lr, SuspenseList: on, lazy: function(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(a) {
      n = a.default || a;
    }, function(a) {
      r = a;
    }), r)
      throw r;
    if (!n)
      throw t;
    return ze(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: v1 };
function g1() {
  return m.createElement("svg", { width: "15", height: "15", className: "DocSearch-Control-Key-Icon" }, m.createElement("path", { d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953", strokeWidth: "1.2", stroke: "currentColor", fill: "none", strokeLinecap: "square" }));
}
function Al() {
  return m.createElement("svg", { width: "20", height: "20", className: "DocSearch-Search-Icon", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
var y1 = ["translations"];
function Do() {
  return Do = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Do.apply(this, arguments);
}
function _1(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var i, a, s = [], l = !0, u = !1;
      try {
        for (o = o.call(n); !(l = (i = o.next()).done) && (s.push(i.value), !r || s.length !== r); l = !0)
          ;
      } catch (c) {
        u = !0, a = c;
      } finally {
        try {
          l || o.return == null || o.return();
        } finally {
          if (u)
            throw a;
        }
      }
      return s;
    }
  }(e, t) || function(n, r) {
    if (n) {
      if (typeof n == "string")
        return fa(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return fa(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function fa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function b1(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, f = Object.keys(a);
    for (u = 0; u < f.length; u++)
      l = f[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
var w1 = m.forwardRef(function(e, t) {
  var n = e.translations, r = n === void 0 ? {} : n, o = b1(e, y1), i = r.buttonText, a = i === void 0 ? "Search" : i, s = r.buttonAriaLabel, l = s === void 0 ? "Search" : s, u = _1(wl(null), 2), c = u[0], f = u[1];
  return xl(function() {
    typeof navigator < "u" && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? f("⌘") : f("Ctrl"));
  }, []), m.createElement("button", Do({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": l }, o, { ref: t }), m.createElement("span", { className: "DocSearch-Button-Container" }, m.createElement(Al, null), m.createElement("span", { className: "DocSearch-Button-Placeholder" }, a)), m.createElement("span", { className: "DocSearch-Button-Keys" }, c !== null && m.createElement(m.Fragment, null, m.createElement("kbd", { className: "DocSearch-Button-Key" }, c === "Ctrl" ? m.createElement(g1, null) : c), m.createElement("kbd", { className: "DocSearch-Button-Key" }, "K"))));
});
function Il(e, t) {
  var n = void 0;
  return function() {
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    n && clearTimeout(n), n = setTimeout(function() {
      return e.apply(void 0, o);
    }, t);
  };
}
function S1(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var i, a, s, l, u = [], c = !0, f = !1;
      try {
        if (s = (o = o.call(n)).next, r === 0) {
          if (Object(o) !== o)
            return;
          c = !1;
        } else
          for (; !(c = (i = s.call(o)).done) && (u.push(i.value), u.length !== r); c = !0)
            ;
      } catch (d) {
        f = !0, a = d;
      } finally {
        try {
          if (!c && o.return != null && (l = o.return(), Object(l) !== l))
            return;
        } finally {
          if (f)
            throw a;
        }
      }
      return u;
    }
  }(e, t) || function(n, r) {
    if (n) {
      if (typeof n == "string")
        return da(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return da(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function da(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function No(e) {
  return No = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, No(e);
}
function kr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  if (process.env.NODE_ENV === "production" || !e || No(e) !== "object")
    return e;
  if (t.has(e))
    return "[Circular]";
  var n = t.add(e);
  return Array.isArray(e) ? e.map(function(r) {
    return kr(r, n);
  }) : Object.fromEntries(Object.entries(e).map(function(r) {
    var o = S1(r, 2);
    return [o[0], kr(o[1], n)];
  }));
}
function Tn(e) {
  return e.reduce(function(t, n) {
    return t.concat(n);
  }, []);
}
var x1 = 0;
function Lo(e) {
  return e.collections.length === 0 ? 0 : e.collections.reduce(function(t, n) {
    return t + n.items.length;
  }, 0);
}
function Dn(e, t) {
  if (process.env.NODE_ENV !== "production" && !e)
    throw new Error("[Autocomplete] ".concat(typeof t == "function" ? t() : t));
}
function pa(e) {
  return e !== Object(e);
}
function Tl(e, t) {
  if (e === t)
    return !0;
  if (pa(e) || pa(t) || typeof e == "function" || typeof t == "function")
    return e === t;
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (var n = 0, r = Object.keys(e); n < r.length; n++) {
    var o = r[n];
    if (!(o in t) || !Tl(e[o], t[o]))
      return !1;
  }
  return !0;
}
var $r = function() {
}, O1 = [{ segment: "autocomplete-core", version: "1.9.3" }], ha = { current: {} };
function ma(e) {
  var t = e.item, n = e.items;
  return { index: t.__autocomplete_indexName, items: [t], positions: [1 + n.findIndex(function(r) {
    return r.objectID === t.objectID;
  })], queryID: t.__autocomplete_queryID, algoliaSource: ["autocomplete"] };
}
function k1(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var i, a, s, l, u = [], c = !0, f = !1;
      try {
        if (s = (o = o.call(n)).next, r === 0) {
          if (Object(o) !== o)
            return;
          c = !1;
        } else
          for (; !(c = (i = s.call(o)).done) && (u.push(i.value), u.length !== r); c = !0)
            ;
      } catch (d) {
        f = !0, a = d;
      } finally {
        try {
          if (!c && o.return != null && (l = o.return(), Object(l) !== l))
            return;
        } finally {
          if (f)
            throw a;
        }
      }
      return u;
    }
  }(e, t) || function(n, r) {
    if (n) {
      if (typeof n == "string")
        return va(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return va(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function va(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var $1 = ["items"], P1 = ["items"];
function hn(e) {
  return hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hn(e);
}
function Jn(e) {
  return function(t) {
    if (Array.isArray(t))
      return Xr(t);
  }(e) || function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
      return Array.from(t);
  }(e) || function(t, n) {
    if (t) {
      if (typeof t == "string")
        return Xr(t, n);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
        return Array.from(t);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
        return Xr(t, n);
    }
  }(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Xr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Dl(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, f = Object.keys(a);
    for (u = 0; u < f.length; u++)
      l = f[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function ga(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Gt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ga(Object(n), !0).forEach(function(r) {
      E1(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ga(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function E1(e, t, n) {
  return (t = function(r) {
    var o = function(i, a) {
      if (hn(i) !== "object" || i === null)
        return i;
      var s = i[Symbol.toPrimitive];
      if (s !== void 0) {
        var l = s.call(i, a || "default");
        if (hn(l) !== "object")
          return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(i);
    }(r, "string");
    return hn(o) === "symbol" ? o : String(o);
  }(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function j1(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 20, n = [], r = 0; r < e.objectIDs.length; r += t)
    n.push(Gt(Gt({}, e), {}, { objectIDs: e.objectIDs.slice(r, r + t) }));
  return n;
}
function Qn(e) {
  return e.map(function(t) {
    var n = t.items, r = Dl(t, $1);
    return Gt(Gt({}, r), {}, { objectIDs: (n == null ? void 0 : n.map(function(o) {
      return o.objectID;
    })) || r.objectIDs });
  });
}
function C1(e) {
  var t, n, r, o = (t = k1((e.version || "").split(".").map(Number), 2), n = t[0], r = t[1], n >= 3 || n === 2 && r >= 4 || n === 1 && r >= 10);
  function i(a, s, l) {
    if (o && l !== void 0) {
      var u = l[0].__autocomplete_algoliaCredentials, c = { "X-Algolia-Application-Id": u.appId, "X-Algolia-API-Key": u.apiKey };
      e.apply(void 0, [a].concat(Jn(s), [{ headers: c }]));
    } else
      e.apply(void 0, [a].concat(Jn(s)));
  }
  return { init: function(a, s) {
    e("init", { appId: a, apiKey: s });
  }, setUserToken: function(a) {
    e("setUserToken", a);
  }, clickedObjectIDsAfterSearch: function() {
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    s.length > 0 && i("clickedObjectIDsAfterSearch", Qn(s), s[0].items);
  }, clickedObjectIDs: function() {
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    s.length > 0 && i("clickedObjectIDs", Qn(s), s[0].items);
  }, clickedFilters: function() {
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    s.length > 0 && e.apply(void 0, ["clickedFilters"].concat(s));
  }, convertedObjectIDsAfterSearch: function() {
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    s.length > 0 && i("convertedObjectIDsAfterSearch", Qn(s), s[0].items);
  }, convertedObjectIDs: function() {
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    s.length > 0 && i("convertedObjectIDs", Qn(s), s[0].items);
  }, convertedFilters: function() {
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    s.length > 0 && e.apply(void 0, ["convertedFilters"].concat(s));
  }, viewedObjectIDs: function() {
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    s.length > 0 && s.reduce(function(u, c) {
      var f = c.items, d = Dl(c, P1);
      return [].concat(Jn(u), Jn(j1(Gt(Gt({}, d), {}, { objectIDs: (f == null ? void 0 : f.map(function(p) {
        return p.objectID;
      })) || d.objectIDs })).map(function(p) {
        return { items: f, payload: p };
      })));
    }, []).forEach(function(u) {
      var c = u.items;
      return i("viewedObjectIDs", [u.payload], c);
    });
  }, viewedFilters: function() {
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    s.length > 0 && e.apply(void 0, ["viewedFilters"].concat(s));
  } };
}
function A1(e) {
  var t = e.items.reduce(function(n, r) {
    var o;
    return n[r.__autocomplete_indexName] = ((o = n[r.__autocomplete_indexName]) !== null && o !== void 0 ? o : []).concat(r), n;
  }, {});
  return Object.keys(t).map(function(n) {
    return { index: n, items: t[n], algoliaSource: ["autocomplete"] };
  });
}
function eo(e) {
  return e.objectID && e.__autocomplete_indexName && e.__autocomplete_queryID;
}
function mn(e) {
  return mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mn(e);
}
function Dt(e) {
  return function(t) {
    if (Array.isArray(t))
      return to(t);
  }(e) || function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
      return Array.from(t);
  }(e) || function(t, n) {
    if (t) {
      if (typeof t == "string")
        return to(t, n);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
        return Array.from(t);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
        return to(t, n);
    }
  }(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function to(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ya(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function st(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ya(Object(n), !0).forEach(function(r) {
      I1(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ya(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function I1(e, t, n) {
  return (t = function(r) {
    var o = function(i, a) {
      if (mn(i) !== "object" || i === null)
        return i;
      var s = i[Symbol.toPrimitive];
      if (s !== void 0) {
        var l = s.call(i, a || "default");
        if (mn(l) !== "object")
          return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(i);
    }(r, "string");
    return mn(o) === "symbol" ? o : String(o);
  }(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var T1 = "https://cdn.jsdelivr.net/npm/search-insights@".concat("2.6.0", "/dist/search-insights.min.js"), D1 = Il(function(e) {
  var t = e.onItemsChange, n = e.items, r = e.insights, o = e.state;
  t({ insights: r, insightsEvents: A1({ items: n }).map(function(i) {
    return st({ eventName: "Items Viewed" }, i);
  }), state: o });
}, 400);
function N1(e) {
  var t = function(c) {
    return st({ onItemsChange: function(f) {
      var d = f.insights, p = f.insightsEvents;
      d.viewedObjectIDs.apply(d, Dt(p.map(function(v) {
        return st(st({}, v), {}, { algoliaSource: [].concat(Dt(v.algoliaSource || []), ["autocomplete-internal"]) });
      })));
    }, onSelect: function(f) {
      var d = f.insights, p = f.insightsEvents;
      d.clickedObjectIDsAfterSearch.apply(d, Dt(p.map(function(v) {
        return st(st({}, v), {}, { algoliaSource: [].concat(Dt(v.algoliaSource || []), ["autocomplete-internal"]) });
      })));
    }, onActive: $r }, c);
  }(e), n = t.insightsClient, r = t.onItemsChange, o = t.onSelect, i = t.onActive, a = n;
  n || function(c) {
    typeof window < "u" && c({ window });
  }(function(c) {
    var f = c.window, d = f.AlgoliaAnalyticsObject || "aa";
    typeof d == "string" && (a = f[d]), a || (f.AlgoliaAnalyticsObject = d, f[d] || (f[d] = function() {
      f[d].queue || (f[d].queue = []);
      for (var p = arguments.length, v = new Array(p), y = 0; y < p; y++)
        v[y] = arguments[y];
      f[d].queue.push(v);
    }), f[d].version = "2.6.0", a = f[d], function(p) {
      var v = "[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";
      try {
        var y = p.document.createElement("script");
        y.async = !0, y.src = T1, y.onerror = function() {
          console.error(v);
        }, document.body.appendChild(y);
      } catch {
        console.error(v);
      }
    }(f));
  });
  var s = C1(a), l = { current: [] }, u = Il(function(c) {
    var f = c.state;
    if (f.isOpen) {
      var d = f.collections.reduce(function(p, v) {
        return [].concat(Dt(p), Dt(v.items));
      }, []).filter(eo);
      Tl(l.current.map(function(p) {
        return p.objectID;
      }), d.map(function(p) {
        return p.objectID;
      })) || (l.current = d, d.length > 0 && D1({ onItemsChange: r, items: d, insights: s, state: f }));
    }
  }, 0);
  return { name: "aa.algoliaInsightsPlugin", subscribe: function(c) {
    var f = c.setContext, d = c.onSelect, p = c.onActive;
    a("addAlgoliaAgent", "insights-plugin"), f({ algoliaInsightsPlugin: { __algoliaSearchParameters: { clickAnalytics: !0 }, insights: s } }), d(function(v) {
      var y = v.item, _ = v.state, w = v.event;
      eo(y) && o({ state: _, event: w, insights: s, item: y, insightsEvents: [st({ eventName: "Item Selected" }, ma({ item: y, items: l.current }))] });
    }), p(function(v) {
      var y = v.item, _ = v.state, w = v.event;
      eo(y) && i({ state: _, event: w, insights: s, item: y, insightsEvents: [st({ eventName: "Item Active" }, ma({ item: y, items: l.current }))] });
    });
  }, onStateChange: function(c) {
    var f = c.state;
    u({ state: f });
  }, __autocomplete_pluginOptions: e };
}
function L1(e) {
  process.env.NODE_ENV !== "production" && function(t, n) {
    if (process.env.NODE_ENV !== "production" && !t) {
      var r = n.trim();
      ha.current[r] || (ha.current[r] = !0, console.warn("[Autocomplete] ".concat(r)));
    }
  }(!e.debug, "The `debug` option is meant for development debugging and should not be used in production.");
}
function cr(e, t) {
  var n = t;
  return { then: function(r, o) {
    return cr(e.then(Yn(r, n, e), Yn(o, n, e)), n);
  }, catch: function(r) {
    return cr(e.catch(Yn(r, n, e)), n);
  }, finally: function(r) {
    return r && n.onCancelList.push(r), cr(e.finally(Yn(r && function() {
      return n.onCancelList = [], r();
    }, n, e)), n);
  }, cancel: function() {
    n.isCanceled = !0;
    var r = n.onCancelList;
    n.onCancelList = [], r.forEach(function(o) {
      o();
    });
  }, isCanceled: function() {
    return n.isCanceled === !0;
  } };
}
function _a(e) {
  return cr(e, { isCanceled: !1, onCancelList: [] });
}
function Yn(e, t, n) {
  return e ? function(r) {
    return t.isCanceled ? r : e(r);
  } : n;
}
function ba(e, t, n, r) {
  if (!n)
    return null;
  if (e < 0 && (t === null || r !== null && t === 0))
    return n + e;
  var o = (t === null ? -1 : t) + e;
  return o <= -1 || o >= n ? r === null ? null : 0 : o;
}
function wa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Sa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wa(Object(n), !0).forEach(function(r) {
      M1(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wa(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function M1(e, t, n) {
  return (t = function(r) {
    var o = function(i, a) {
      if (Vt(i) !== "object" || i === null)
        return i;
      var s = i[Symbol.toPrimitive];
      if (s !== void 0) {
        var l = s.call(i, a || "default");
        if (Vt(l) !== "object")
          return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(i);
    }(r, "string");
    return Vt(o) === "symbol" ? o : String(o);
  }(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Vt(e) {
  return Vt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vt(e);
}
function Ht(e) {
  var t = function(o) {
    var i = o.collections.map(function(a) {
      return a.items.length;
    }).reduce(function(a, s, l) {
      var u = (a[l - 1] || 0) + s;
      return a.push(u), a;
    }, []).reduce(function(a, s) {
      return s <= o.activeItemId ? a + 1 : a;
    }, 0);
    return o.collections[i];
  }(e);
  if (!t)
    return null;
  var n = t.items[function(o) {
    for (var i = o.state, a = o.collection, s = !1, l = 0, u = 0; s === !1; ) {
      var c = i.collections[l];
      if (c === a) {
        s = !0;
        break;
      }
      u += c.items.length, l++;
    }
    return i.activeItemId - u;
  }({ state: e, collection: t })], r = t.source;
  return { item: n, itemInputValue: r.getItemInputValue({ item: n, state: e }), itemUrl: r.getItemUrl({ item: n, state: e }), source: r };
}
var R1 = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
function vn(e) {
  return vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vn(e);
}
function xa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function H1(e, t, n) {
  return (t = function(r) {
    var o = function(i, a) {
      if (vn(i) !== "object" || i === null)
        return i;
      var s = i[Symbol.toPrimitive];
      if (s !== void 0) {
        var l = s.call(i, a || "default");
        if (vn(l) !== "object")
          return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(i);
    }(r, "string");
    return vn(o) === "symbol" ? o : String(o);
  }(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function B1(e, t, n) {
  var r, o = t.initialState;
  return { getState: function() {
    return o;
  }, dispatch: function(i, a) {
    var s = function(l) {
      for (var u = 1; u < arguments.length; u++) {
        var c = arguments[u] != null ? arguments[u] : {};
        u % 2 ? xa(Object(c), !0).forEach(function(f) {
          H1(l, f, c[f]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c)) : xa(Object(c)).forEach(function(f) {
          Object.defineProperty(l, f, Object.getOwnPropertyDescriptor(c, f));
        });
      }
      return l;
    }({}, o);
    o = e(o, { type: i, props: t, payload: a }), n({ state: o, prevState: s });
  }, pendingRequests: (r = [], { add: function(i) {
    return r.push(i), i.finally(function() {
      r = r.filter(function(a) {
        return a !== i;
      });
    });
  }, cancelAll: function() {
    r.forEach(function(i) {
      return i.cancel();
    });
  }, isEmpty: function() {
    return r.length === 0;
  } }) };
}
function gn(e) {
  return gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gn(e);
}
function Oa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Zn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Oa(Object(n), !0).forEach(function(r) {
      F1(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oa(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function F1(e, t, n) {
  return (t = function(r) {
    var o = function(i, a) {
      if (gn(i) !== "object" || i === null)
        return i;
      var s = i[Symbol.toPrimitive];
      if (s !== void 0) {
        var l = s.call(i, a || "default");
        if (gn(l) !== "object")
          return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(i);
    }(r, "string");
    return gn(o) === "symbol" ? o : String(o);
  }(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function yn(e) {
  return yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yn(e);
}
function z1(e) {
  return function(t) {
    if (Array.isArray(t))
      return no(t);
  }(e) || function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
      return Array.from(t);
  }(e) || function(t, n) {
    if (t) {
      if (typeof t == "string")
        return no(t, n);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
        return Array.from(t);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
        return no(t, n);
    }
  }(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function no(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ka(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ka(Object(n), !0).forEach(function(r) {
      V1(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ka(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function V1(e, t, n) {
  return (t = function(r) {
    var o = function(i, a) {
      if (yn(i) !== "object" || i === null)
        return i;
      var s = i[Symbol.toPrimitive];
      if (s !== void 0) {
        var l = s.call(i, a || "default");
        if (yn(l) !== "object")
          return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(i);
    }(r, "string");
    return yn(o) === "symbol" ? o : String(o);
  }(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function U1(e, t) {
  var n, r = typeof window < "u" ? window : {}, o = e.plugins || [];
  return Nt(Nt({ debug: !1, openOnFocus: !1, placeholder: "", autoFocus: !1, defaultActiveItemId: null, stallThreshold: 300, insights: !1, environment: r, shouldPanelOpen: function(i) {
    return Lo(i.state) > 0;
  }, reshape: function(i) {
    return i.sources;
  } }, e), {}, { id: (n = e.id) !== null && n !== void 0 ? n : "autocomplete-".concat(x1++), plugins: o, initialState: Nt({ activeItemId: null, query: "", completion: null, collections: [], isOpen: !1, status: "idle", context: {} }, e.initialState), onStateChange: function(i) {
    var a;
    (a = e.onStateChange) === null || a === void 0 || a.call(e, i), o.forEach(function(s) {
      var l;
      return (l = s.onStateChange) === null || l === void 0 ? void 0 : l.call(s, i);
    });
  }, onSubmit: function(i) {
    var a;
    (a = e.onSubmit) === null || a === void 0 || a.call(e, i), o.forEach(function(s) {
      var l;
      return (l = s.onSubmit) === null || l === void 0 ? void 0 : l.call(s, i);
    });
  }, onReset: function(i) {
    var a;
    (a = e.onReset) === null || a === void 0 || a.call(e, i), o.forEach(function(s) {
      var l;
      return (l = s.onReset) === null || l === void 0 ? void 0 : l.call(s, i);
    });
  }, getSources: function(i) {
    return Promise.all([].concat(z1(o.map(function(a) {
      return a.getSources;
    })), [e.getSources]).filter(Boolean).map(function(a) {
      return function(s, l) {
        var u = [];
        return Promise.resolve(s(l)).then(function(c) {
          return Dn(Array.isArray(c), function() {
            return "The `getSources` function must return an array of sources but returned type ".concat(JSON.stringify(Vt(c)), `:

`).concat(JSON.stringify(kr(c), null, 2));
          }), Promise.all(c.filter(function(f) {
            return !!f;
          }).map(function(f) {
            if (Dn(typeof f.sourceId == "string", "A source must provide a `sourceId` string."), u.includes(f.sourceId))
              throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(f.sourceId), " is not unique."));
            u.push(f.sourceId);
            var d = { getItemInputValue: function(v) {
              return v.state.query;
            }, getItemUrl: function() {
            }, onSelect: function(v) {
              (0, v.setIsOpen)(!1);
            }, onActive: $r, onResolve: $r };
            Object.keys(d).forEach(function(v) {
              d[v].__default = !0;
            });
            var p = Sa(Sa({}, d), f);
            return Promise.resolve(p);
          }));
        });
      }(a, i);
    })).then(function(a) {
      return Tn(a);
    }).then(function(a) {
      return a.map(function(s) {
        return Nt(Nt({}, s), {}, { onSelect: function(l) {
          s.onSelect(l), t.forEach(function(u) {
            var c;
            return (c = u.onSelect) === null || c === void 0 ? void 0 : c.call(u, l);
          });
        }, onActive: function(l) {
          s.onActive(l), t.forEach(function(u) {
            var c;
            return (c = u.onActive) === null || c === void 0 ? void 0 : c.call(u, l);
          });
        }, onResolve: function(l) {
          s.onResolve(l), t.forEach(function(u) {
            var c;
            return (c = u.onResolve) === null || c === void 0 ? void 0 : c.call(u, l);
          });
        } });
      });
    });
  }, navigator: Nt({ navigate: function(i) {
    var a = i.itemUrl;
    r.location.assign(a);
  }, navigateNewTab: function(i) {
    var a = i.itemUrl, s = r.open(a, "_blank", "noopener");
    s == null || s.focus();
  }, navigateNewWindow: function(i) {
    var a = i.itemUrl;
    r.open(a, "_blank", "noopener");
  } }, e.navigator) });
}
function _n(e) {
  return _n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _n(e);
}
function $a(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Xn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $a(Object(n), !0).forEach(function(r) {
      Nl(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $a(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Nl(e, t, n) {
  return (t = function(r) {
    var o = function(i, a) {
      if (_n(i) !== "object" || i === null)
        return i;
      var s = i[Symbol.toPrimitive];
      if (s !== void 0) {
        var l = s.call(i, a || "default");
        if (_n(l) !== "object")
          return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(i);
    }(r, "string");
    return _n(o) === "symbol" ? o : String(o);
  }(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ut(e) {
  return Ut = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ut(e);
}
function Pa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pa(Object(n), !0).forEach(function(r) {
      q1(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pa(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function q1(e, t, n) {
  return (t = function(r) {
    var o = function(i, a) {
      if (Ut(i) !== "object" || i === null)
        return i;
      var s = i[Symbol.toPrimitive];
      if (s !== void 0) {
        var l = s.call(i, a || "default");
        if (Ut(l) !== "object")
          return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(i);
    }(r, "string");
    return Ut(o) === "symbol" ? o : String(o);
  }(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ll(e) {
  return function(t) {
    if (Array.isArray(t))
      return ro(t);
  }(e) || function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
      return Array.from(t);
  }(e) || function(t, n) {
    if (t) {
      if (typeof t == "string")
        return ro(t, n);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
        return Array.from(t);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
        return ro(t, n);
    }
  }(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function ro(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function er(e) {
  return !!e.execute;
}
function W1(e, t, n) {
  if (o = e, !!(o != null && o.execute)) {
    var r = e.requesterId === "algolia" ? Object.assign.apply(Object, [{}].concat(Ll(Object.keys(n.context).map(function(i) {
      var a;
      return (a = n.context[i]) === null || a === void 0 ? void 0 : a.__algoliaSearchParameters;
    })))) : {};
    return Lt(Lt({}, e), {}, { requests: e.queries.map(function(i) {
      return { query: e.requesterId === "algolia" ? Lt(Lt({}, i), {}, { params: Lt(Lt({}, r), i.params) }) : i, sourceId: t, transformResponse: e.transformResponse };
    }) });
  }
  var o;
  return { items: e, sourceId: t };
}
function K1(e) {
  var t = e.reduce(function(n, r) {
    if (!er(r))
      return n.push(r), n;
    var o = r.searchClient, i = r.execute, a = r.requesterId, s = r.requests, l = n.find(function(f) {
      return er(r) && er(f) && f.searchClient === o && !!a && f.requesterId === a;
    });
    if (l) {
      var u;
      (u = l.items).push.apply(u, Ll(s));
    } else {
      var c = { execute: i, requesterId: a, items: s, searchClient: o };
      n.push(c);
    }
    return n;
  }, []).map(function(n) {
    if (!er(n))
      return Promise.resolve(n);
    var r = n, o = r.execute, i = r.items;
    return o({ searchClient: r.searchClient, requests: i });
  });
  return Promise.all(t).then(function(n) {
    return Tn(n);
  });
}
function G1(e, t, n) {
  return t.map(function(r) {
    var o, i = e.filter(function(u) {
      return u.sourceId === r.sourceId;
    }), a = i.map(function(u) {
      return u.items;
    }), s = i[0].transformResponse, l = s ? s({ results: o = a, hits: o.map(function(u) {
      return u.hits;
    }).filter(Boolean), facetHits: o.map(function(u) {
      var c;
      return (c = u.facetHits) === null || c === void 0 ? void 0 : c.map(function(f) {
        return { label: f.value, count: f.count, _highlightResult: { label: { value: f.highlighted } } };
      });
    }).filter(Boolean) }) : a;
    return r.onResolve({ source: r, results: a, items: l, state: n.getState() }), Dn(Array.isArray(l), function() {
      return 'The `getItems` function from source "'.concat(r.sourceId, '" must return an array of items but returned type ').concat(JSON.stringify(Ut(l)), `:

`).concat(JSON.stringify(kr(l), null, 2), `.

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`);
    }), Dn(l.every(Boolean), 'The `getItems` function from source "'.concat(r.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), `.

Did you forget to return items?

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`)), { source: r, items: l };
  });
}
function bn(e) {
  return bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bn(e);
}
var J1 = ["event", "nextState", "props", "query", "refresh", "store"];
function Ea(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function nn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ea(Object(n), !0).forEach(function(r) {
      Q1(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ea(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Q1(e, t, n) {
  return (t = function(r) {
    var o = function(i, a) {
      if (bn(i) !== "object" || i === null)
        return i;
      var s = i[Symbol.toPrimitive];
      if (s !== void 0) {
        var l = s.call(i, a || "default");
        if (bn(l) !== "object")
          return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(i);
    }(r, "string");
    return bn(o) === "symbol" ? o : String(o);
  }(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Y1(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, f = Object.keys(a);
    for (u = 0; u < f.length; u++)
      l = f[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
var ja, oo, tr, rn = null, Ca = (ja = -1, oo = -1, tr = void 0, function(e) {
  var t = ++ja;
  return Promise.resolve(e).then(function(n) {
    return tr && t < oo ? tr : (oo = t, tr = n, n);
  });
});
function Rt(e) {
  var t = e.event, n = e.nextState, r = n === void 0 ? {} : n, o = e.props, i = e.query, a = e.refresh, s = e.store, l = Y1(e, J1);
  rn && o.environment.clearTimeout(rn);
  var u = l.setCollections, c = l.setIsOpen, f = l.setQuery, d = l.setActiveItemId, p = l.setStatus;
  if (f(i), d(o.defaultActiveItemId), !i && o.openOnFocus === !1) {
    var v, y = s.getState().collections.map(function(S) {
      return nn(nn({}, S), {}, { items: [] });
    });
    p("idle"), u(y), c((v = r.isOpen) !== null && v !== void 0 ? v : o.shouldPanelOpen({ state: s.getState() }));
    var _ = _a(Ca(y).then(function() {
      return Promise.resolve();
    }));
    return s.pendingRequests.add(_);
  }
  p("loading"), rn = o.environment.setTimeout(function() {
    p("stalled");
  }, o.stallThreshold);
  var w = _a(Ca(o.getSources(nn({ query: i, refresh: a, state: s.getState() }, l)).then(function(S) {
    return Promise.all(S.map(function(x) {
      return Promise.resolve(x.getItems(nn({ query: i, refresh: a, state: s.getState() }, l))).then(function($) {
        return W1($, x.sourceId, s.getState());
      });
    })).then(K1).then(function(x) {
      return G1(x, S, s);
    }).then(function(x) {
      return function($) {
        var k = $.collections, N = $.props, C = $.state, E = k.reduce(function(I, H) {
          return Xn(Xn({}, I), {}, Nl({}, H.source.sourceId, Xn(Xn({}, H.source), {}, { getItems: function() {
            return Tn(H.items);
          } })));
        }, {}), j = N.plugins.reduce(function(I, H) {
          return H.reshape ? H.reshape(I) : I;
        }, { sourcesBySourceId: E, state: C }).sourcesBySourceId;
        return Tn(N.reshape({ sourcesBySourceId: j, sources: Object.values(j), state: C })).filter(Boolean).map(function(I) {
          return { source: I, items: I.getItems() };
        });
      }({ collections: x, props: o, state: s.getState() });
    });
  }))).then(function(S) {
    var x;
    p("idle"), u(S);
    var $ = o.shouldPanelOpen({ state: s.getState() });
    c((x = r.isOpen) !== null && x !== void 0 ? x : o.openOnFocus && !i && $ || $);
    var k = Ht(s.getState());
    if (s.getState().activeItemId !== null && k) {
      var N = k.item, C = k.itemInputValue, E = k.itemUrl, j = k.source;
      j.onActive(nn({ event: t, item: N, itemInputValue: C, itemUrl: E, refresh: a, source: j, state: s.getState() }, l));
    }
  }).finally(function() {
    p("idle"), rn && o.environment.clearTimeout(rn);
  });
  return s.pendingRequests.add(w);
}
function wn(e) {
  return wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wn(e);
}
var Z1 = ["event", "props", "refresh", "store"];
function Aa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Aa(Object(n), !0).forEach(function(r) {
      X1(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Aa(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function X1(e, t, n) {
  return (t = function(r) {
    var o = function(i, a) {
      if (wn(i) !== "object" || i === null)
        return i;
      var s = i[Symbol.toPrimitive];
      if (s !== void 0) {
        var l = s.call(i, a || "default");
        if (wn(l) !== "object")
          return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(i);
    }(r, "string");
    return wn(o) === "symbol" ? o : String(o);
  }(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function e0(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, f = Object.keys(a);
    for (u = 0; u < f.length; u++)
      l = f[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function Sn(e) {
  return Sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sn(e);
}
var t0 = ["props", "refresh", "store"], n0 = ["inputElement", "formElement", "panelElement"], r0 = ["inputElement"], o0 = ["inputElement", "maxLength"], i0 = ["sourceIndex"], a0 = ["sourceIndex"], s0 = ["item", "source", "sourceIndex"];
function Ia(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ia(Object(n), !0).forEach(function(r) {
      l0(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ia(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function l0(e, t, n) {
  return (t = function(r) {
    var o = function(i, a) {
      if (Sn(i) !== "object" || i === null)
        return i;
      var s = i[Symbol.toPrimitive];
      if (s !== void 0) {
        var l = s.call(i, a || "default");
        if (Sn(l) !== "object")
          return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(i);
    }(r, "string");
    return Sn(o) === "symbol" ? o : String(o);
  }(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function wt(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, f = Object.keys(a);
    for (u = 0; u < f.length; u++)
      l = f[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function c0(e) {
  var t = e.props, n = e.refresh, r = e.store, o = wt(e, t0), i = function(a, s) {
    return s !== void 0 ? "".concat(a, "-").concat(s) : a;
  };
  return { getEnvironmentProps: function(a) {
    var s = a.inputElement, l = a.formElement, u = a.panelElement;
    function c(f) {
      !r.getState().isOpen && r.pendingRequests.isEmpty() || f.target === s || [l, u].some(function(d) {
        return p = d, v = f.target, p === v || p.contains(v);
        var p, v;
      }) === !1 && (r.dispatch("blur", null), t.debug || r.pendingRequests.cancelAll());
    }
    return be({ onTouchStart: c, onMouseDown: c, onTouchMove: function(f) {
      r.getState().isOpen !== !1 && s === t.environment.document.activeElement && f.target !== s && s.blur();
    } }, wt(a, n0));
  }, getRootProps: function(a) {
    return be({ role: "combobox", "aria-expanded": r.getState().isOpen, "aria-haspopup": "listbox", "aria-owns": r.getState().isOpen ? "".concat(t.id, "-list") : void 0, "aria-labelledby": "".concat(t.id, "-label") }, a);
  }, getFormProps: function(a) {
    return a.inputElement, be({ action: "", noValidate: !0, role: "search", onSubmit: function(s) {
      var l;
      s.preventDefault(), t.onSubmit(be({ event: s, refresh: n, state: r.getState() }, o)), r.dispatch("submit", null), (l = a.inputElement) === null || l === void 0 || l.blur();
    }, onReset: function(s) {
      var l;
      s.preventDefault(), t.onReset(be({ event: s, refresh: n, state: r.getState() }, o)), r.dispatch("reset", null), (l = a.inputElement) === null || l === void 0 || l.focus();
    } }, wt(a, r0));
  }, getLabelProps: function(a) {
    var s = a || {}, l = s.sourceIndex, u = wt(s, i0);
    return be({ htmlFor: "".concat(i(t.id, l), "-input"), id: "".concat(i(t.id, l), "-label") }, u);
  }, getInputProps: function(a) {
    var s;
    function l(_) {
      (t.openOnFocus || r.getState().query) && Rt(be({ event: _, props: t, query: r.getState().completion || r.getState().query, refresh: n, store: r }, o)), r.dispatch("focus", null);
    }
    var u = a || {}, c = (u.inputElement, u.maxLength), f = c === void 0 ? 512 : c, d = wt(u, o0), p = Ht(r.getState()), v = function(_) {
      return !!(_ && _.match(R1));
    }(((s = t.environment.navigator) === null || s === void 0 ? void 0 : s.userAgent) || ""), y = p != null && p.itemUrl && !v ? "go" : "search";
    return be({ "aria-autocomplete": "both", "aria-activedescendant": r.getState().isOpen && r.getState().activeItemId !== null ? "".concat(t.id, "-item-").concat(r.getState().activeItemId) : void 0, "aria-controls": r.getState().isOpen ? "".concat(t.id, "-list") : void 0, "aria-labelledby": "".concat(t.id, "-label"), value: r.getState().completion || r.getState().query, id: "".concat(t.id, "-input"), autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", enterKeyHint: y, spellCheck: "false", autoFocus: t.autoFocus, placeholder: t.placeholder, maxLength: f, type: "search", onChange: function(_) {
      Rt(be({ event: _, props: t, query: _.currentTarget.value.slice(0, f), refresh: n, store: r }, o));
    }, onKeyDown: function(_) {
      (function(w) {
        var S = w.event, x = w.props, $ = w.refresh, k = w.store, N = e0(w, Z1);
        if (S.key === "ArrowUp" || S.key === "ArrowDown") {
          var C = function() {
            var q = x.environment.document.getElementById("".concat(x.id, "-item-").concat(k.getState().activeItemId));
            q && (q.scrollIntoViewIfNeeded ? q.scrollIntoViewIfNeeded(!1) : q.scrollIntoView(!1));
          }, E = function() {
            var q = Ht(k.getState());
            if (k.getState().activeItemId !== null && q) {
              var ge = q.item, Be = q.itemInputValue, Ne = q.itemUrl, fe = q.source;
              fe.onActive(bt({ event: S, item: ge, itemInputValue: Be, itemUrl: Ne, refresh: $, source: fe, state: k.getState() }, N));
            }
          };
          S.preventDefault(), k.getState().isOpen === !1 && (x.openOnFocus || k.getState().query) ? Rt(bt({ event: S, props: x, query: k.getState().query, refresh: $, store: k }, N)).then(function() {
            k.dispatch(S.key, { nextActiveItemId: x.defaultActiveItemId }), E(), setTimeout(C, 0);
          }) : (k.dispatch(S.key, {}), E(), C());
        } else if (S.key === "Escape")
          S.preventDefault(), k.dispatch(S.key, null), k.pendingRequests.cancelAll();
        else if (S.key === "Tab")
          k.dispatch("blur", null), k.pendingRequests.cancelAll();
        else if (S.key === "Enter") {
          if (k.getState().activeItemId === null || k.getState().collections.every(function(q) {
            return q.items.length === 0;
          }))
            return void (x.debug || k.pendingRequests.cancelAll());
          S.preventDefault();
          var j = Ht(k.getState()), I = j.item, H = j.itemInputValue, J = j.itemUrl, Y = j.source;
          if (S.metaKey || S.ctrlKey)
            J !== void 0 && (Y.onSelect(bt({ event: S, item: I, itemInputValue: H, itemUrl: J, refresh: $, source: Y, state: k.getState() }, N)), x.navigator.navigateNewTab({ itemUrl: J, item: I, state: k.getState() }));
          else if (S.shiftKey)
            J !== void 0 && (Y.onSelect(bt({ event: S, item: I, itemInputValue: H, itemUrl: J, refresh: $, source: Y, state: k.getState() }, N)), x.navigator.navigateNewWindow({ itemUrl: J, item: I, state: k.getState() }));
          else if (!S.altKey) {
            if (J !== void 0)
              return Y.onSelect(bt({ event: S, item: I, itemInputValue: H, itemUrl: J, refresh: $, source: Y, state: k.getState() }, N)), void x.navigator.navigate({ itemUrl: J, item: I, state: k.getState() });
            Rt(bt({ event: S, nextState: { isOpen: !1 }, props: x, query: H, refresh: $, store: k }, N)).then(function() {
              Y.onSelect(bt({ event: S, item: I, itemInputValue: H, itemUrl: J, refresh: $, source: Y, state: k.getState() }, N));
            });
          }
        }
      })(be({ event: _, props: t, refresh: n, store: r }, o));
    }, onFocus: l, onBlur: $r, onClick: function(_) {
      a.inputElement !== t.environment.document.activeElement || r.getState().isOpen || l(_);
    } }, d);
  }, getPanelProps: function(a) {
    return be({ onMouseDown: function(s) {
      s.preventDefault();
    }, onMouseLeave: function() {
      r.dispatch("mouseleave", null);
    } }, a);
  }, getListProps: function(a) {
    var s = a || {}, l = s.sourceIndex, u = wt(s, a0);
    return be({ role: "listbox", "aria-labelledby": "".concat(i(t.id, l), "-label"), id: "".concat(i(t.id, l), "-list") }, u);
  }, getItemProps: function(a) {
    var s = a.item, l = a.source, u = a.sourceIndex, c = wt(a, s0);
    return be({ id: "".concat(i(t.id, u), "-item-").concat(s.__autocomplete_id), role: "option", "aria-selected": r.getState().activeItemId === s.__autocomplete_id, onMouseMove: function(f) {
      if (s.__autocomplete_id !== r.getState().activeItemId) {
        r.dispatch("mousemove", s.__autocomplete_id);
        var d = Ht(r.getState());
        if (r.getState().activeItemId !== null && d) {
          var p = d.item, v = d.itemInputValue, y = d.itemUrl, _ = d.source;
          _.onActive(be({ event: f, item: p, itemInputValue: v, itemUrl: y, refresh: n, source: _, state: r.getState() }, o));
        }
      }
    }, onMouseDown: function(f) {
      f.preventDefault();
    }, onClick: function(f) {
      var d = l.getItemInputValue({ item: s, state: r.getState() }), p = l.getItemUrl({ item: s, state: r.getState() });
      (p ? Promise.resolve() : Rt(be({ event: f, nextState: { isOpen: !1 }, props: t, query: d, refresh: n, store: r }, o))).then(function() {
        l.onSelect(be({ event: f, item: s, itemInputValue: d, itemUrl: p, refresh: n, source: l, state: r.getState() }, o));
      });
    } }, c);
  } };
}
function xn(e) {
  return xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xn(e);
}
function Ta(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function u0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ta(Object(n), !0).forEach(function(r) {
      Ml(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ta(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ml(e, t, n) {
  return (t = function(r) {
    var o = function(i, a) {
      if (xn(i) !== "object" || i === null)
        return i;
      var s = i[Symbol.toPrimitive];
      if (s !== void 0) {
        var l = s.call(i, a || "default");
        if (xn(l) !== "object")
          return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(i);
    }(r, "string");
    return xn(o) === "symbol" ? o : String(o);
  }(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function f0(e) {
  var t, n, r, o, i = e.plugins, a = e.options, s = (t = (((n = a.__autocomplete_metadata) === null || n === void 0 ? void 0 : n.userAgents) || [])[0]) === null || t === void 0 ? void 0 : t.segment, l = s ? Ml({}, s, Object.keys(((r = a.__autocomplete_metadata) === null || r === void 0 ? void 0 : r.options) || {})) : {};
  return { plugins: i.map(function(u) {
    return { name: u.name, options: Object.keys(u.__autocomplete_pluginOptions || []) };
  }), options: u0({ "autocomplete-core": Object.keys(a) }, l), ua: O1.concat(((o = a.__autocomplete_metadata) === null || o === void 0 ? void 0 : o.userAgents) || []) };
}
function Da(e) {
  var t, n = e.state;
  return n.isOpen === !1 || n.activeItemId === null ? null : ((t = Ht(n)) === null || t === void 0 ? void 0 : t.itemInputValue) || null;
}
function On(e) {
  return On = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, On(e);
}
function Na(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Na(Object(n), !0).forEach(function(r) {
      d0(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Na(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function d0(e, t, n) {
  return (t = function(r) {
    var o = function(i, a) {
      if (On(i) !== "object" || i === null)
        return i;
      var s = i[Symbol.toPrimitive];
      if (s !== void 0) {
        var l = s.call(i, a || "default");
        if (On(l) !== "object")
          return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(i);
    }(r, "string");
    return On(o) === "symbol" ? o : String(o);
  }(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var p0 = function(e, t) {
  switch (t.type) {
    case "setActiveItemId":
    case "mousemove":
      return W(W({}, e), {}, { activeItemId: t.payload });
    case "setQuery":
      return W(W({}, e), {}, { query: t.payload, completion: null });
    case "setCollections":
      return W(W({}, e), {}, { collections: t.payload });
    case "setIsOpen":
      return W(W({}, e), {}, { isOpen: t.payload });
    case "setStatus":
      return W(W({}, e), {}, { status: t.payload });
    case "setContext":
      return W(W({}, e), {}, { context: W(W({}, e.context), t.payload) });
    case "ArrowDown":
      var n = W(W({}, e), {}, { activeItemId: t.payload.hasOwnProperty("nextActiveItemId") ? t.payload.nextActiveItemId : ba(1, e.activeItemId, Lo(e), t.props.defaultActiveItemId) });
      return W(W({}, n), {}, { completion: Da({ state: n }) });
    case "ArrowUp":
      var r = W(W({}, e), {}, { activeItemId: ba(-1, e.activeItemId, Lo(e), t.props.defaultActiveItemId) });
      return W(W({}, r), {}, { completion: Da({ state: r }) });
    case "Escape":
      return e.isOpen ? W(W({}, e), {}, { activeItemId: null, isOpen: !1, completion: null }) : W(W({}, e), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
    case "submit":
      return W(W({}, e), {}, { activeItemId: null, isOpen: !1, status: "idle" });
    case "reset":
      return W(W({}, e), {}, { activeItemId: t.props.openOnFocus === !0 ? t.props.defaultActiveItemId : null, status: "idle", query: "" });
    case "focus":
      return W(W({}, e), {}, { activeItemId: t.props.defaultActiveItemId, isOpen: (t.props.openOnFocus || !!e.query) && t.props.shouldPanelOpen({ state: e }) });
    case "blur":
      return t.props.debug ? e : W(W({}, e), {}, { isOpen: !1, activeItemId: null });
    case "mouseleave":
      return W(W({}, e), {}, { activeItemId: t.props.defaultActiveItemId });
    default:
      return Dn(!1, "The reducer action ".concat(JSON.stringify(t.type), " is not supported.")), e;
  }
};
function kn(e) {
  return kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kn(e);
}
function La(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function St(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? La(Object(n), !0).forEach(function(r) {
      h0(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : La(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function h0(e, t, n) {
  return (t = function(r) {
    var o = function(i, a) {
      if (kn(i) !== "object" || i === null)
        return i;
      var s = i[Symbol.toPrimitive];
      if (s !== void 0) {
        var l = s.call(i, a || "default");
        if (kn(l) !== "object")
          return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(i);
    }(r, "string");
    return kn(o) === "symbol" ? o : String(o);
  }(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function m0(e) {
  L1(e);
  var t = [], n = U1(e, t), r = B1(p0, n, function(l) {
    var u = l.prevState, c = l.state;
    n.onStateChange(St({ prevState: u, state: c, refresh: a, navigator: n.navigator }, o));
  }), o = function(l) {
    var u = l.store;
    return { setActiveItemId: function(c) {
      u.dispatch("setActiveItemId", c);
    }, setQuery: function(c) {
      u.dispatch("setQuery", c);
    }, setCollections: function(c) {
      var f = 0, d = c.map(function(p) {
        return Zn(Zn({}, p), {}, { items: Tn(p.items).map(function(v) {
          return Zn(Zn({}, v), {}, { __autocomplete_id: f++ });
        }) });
      });
      u.dispatch("setCollections", d);
    }, setIsOpen: function(c) {
      u.dispatch("setIsOpen", c);
    }, setStatus: function(c) {
      u.dispatch("setStatus", c);
    }, setContext: function(c) {
      u.dispatch("setContext", c);
    } };
  }({ store: r }), i = c0(St({ props: n, refresh: a, store: r, navigator: n.navigator }, o));
  function a() {
    return Rt(St({ event: new Event("input"), nextState: { isOpen: r.getState().isOpen }, props: n, navigator: n.navigator, query: r.getState().query, refresh: a, store: r }, o));
  }
  if (e.insights && !n.plugins.some(function(l) {
    return l.name === "aa.algoliaInsightsPlugin";
  })) {
    var s = typeof e.insights == "boolean" ? {} : e.insights;
    n.plugins.push(N1(s));
  }
  return n.plugins.forEach(function(l) {
    var u;
    return (u = l.subscribe) === null || u === void 0 ? void 0 : u.call(l, St(St({}, o), {}, { navigator: n.navigator, refresh: a, onSelect: function(c) {
      t.push({ onSelect: c });
    }, onActive: function(c) {
      t.push({ onActive: c });
    }, onResolve: function(c) {
      t.push({ onResolve: c });
    } }));
  }), function(l) {
    var u, c, f = l.metadata, d = l.environment;
    if (!((u = d.navigator) === null || u === void 0 || (c = u.userAgent) === null || c === void 0) && c.includes("Algolia Crawler")) {
      var p = d.document.createElement("meta"), v = d.document.querySelector("head");
      p.name = "algolia:metadata", setTimeout(function() {
        p.content = JSON.stringify(f), v.appendChild(p);
      }, 0);
    }
  }({ metadata: f0({ plugins: n.plugins, options: e }), environment: n.environment }), St(St({ refresh: a, navigator: n.navigator }, i), o);
}
function v0(e) {
  var t = e.translations, n = (t === void 0 ? {} : t).searchByText, r = n === void 0 ? "Search by" : n;
  return m.createElement("a", { href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"), target: "_blank", rel: "noopener noreferrer" }, m.createElement("span", { className: "DocSearch-Label" }, r), m.createElement("svg", { width: "77", height: "19", "aria-label": "Algolia", role: "img", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2196.2 500" }, m.createElement("defs", null, m.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")), m.createElement("path", { className: "cls-2", d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), m.createElement("rect", { className: "cls-1", x: "1845.88", y: "104.73", width: "62.58", height: "277.9", rx: "5.9", ry: "5.9" }), m.createElement("path", { className: "cls-2", d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z" }), m.createElement("path", { className: "cls-2", d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), m.createElement("path", { className: "cls-2", d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z" }), m.createElement("path", { className: "cls-2", d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), m.createElement("path", { className: "cls-2", d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), m.createElement("path", { className: "cls-2", d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z" }), m.createElement("path", { className: "cls-1", d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z" })));
}
function nr(e) {
  return m.createElement("svg", { width: "15", height: "15", "aria-label": e.ariaLabel, role: "img" }, m.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2" }, e.children));
}
function g0(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = n.selectText, o = r === void 0 ? "to select" : r, i = n.selectKeyAriaLabel, a = i === void 0 ? "Enter key" : i, s = n.navigateText, l = s === void 0 ? "to navigate" : s, u = n.navigateUpKeyAriaLabel, c = u === void 0 ? "Arrow up" : u, f = n.navigateDownKeyAriaLabel, d = f === void 0 ? "Arrow down" : f, p = n.closeText, v = p === void 0 ? "to close" : p, y = n.closeKeyAriaLabel, _ = y === void 0 ? "Escape key" : y, w = n.searchByText, S = w === void 0 ? "Search by" : w;
  return m.createElement(m.Fragment, null, m.createElement("div", { className: "DocSearch-Logo" }, m.createElement(v0, { translations: { searchByText: S } })), m.createElement("ul", { className: "DocSearch-Commands" }, m.createElement("li", null, m.createElement("kbd", { className: "DocSearch-Commands-Key" }, m.createElement(nr, { ariaLabel: a }, m.createElement("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" }))), m.createElement("span", { className: "DocSearch-Label" }, o)), m.createElement("li", null, m.createElement("kbd", { className: "DocSearch-Commands-Key" }, m.createElement(nr, { ariaLabel: d }, m.createElement("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" }))), m.createElement("kbd", { className: "DocSearch-Commands-Key" }, m.createElement(nr, { ariaLabel: c }, m.createElement("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" }))), m.createElement("span", { className: "DocSearch-Label" }, l)), m.createElement("li", null, m.createElement("kbd", { className: "DocSearch-Commands-Key" }, m.createElement(nr, { ariaLabel: _ }, m.createElement("path", { d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956" }))), m.createElement("span", { className: "DocSearch-Label" }, v))));
}
function y0(e) {
  var t = e.hit, n = e.children;
  return m.createElement("a", { href: t.url }, n);
}
function _0() {
  return m.createElement("svg", { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" }, m.createElement("g", { fill: "none", fillRule: "evenodd" }, m.createElement("g", { transform: "translate(1 1)", strokeWidth: "2" }, m.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }), m.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, m.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
}
function b0() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, m.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }), m.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })));
}
function Mo() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function w0() {
  return m.createElement("svg", { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, m.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }), m.createElement("path", { d: "M8 17l-6-6 6-6" })));
}
var S0 = function() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
};
function x0(e) {
  switch (e.type) {
    case "lvl1":
      return m.createElement(S0, null);
    case "content":
      return m.createElement(k0, null);
    default:
      return m.createElement(O0, null);
  }
}
function O0() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function k0() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function Ma() {
  return m.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, m.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function $0() {
  return m.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, m.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" }));
}
function P0() {
  return m.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, m.createElement("path", { d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2" }));
}
function E0(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = n.titleText, o = r === void 0 ? "Unable to fetch results" : r, i = n.helpText, a = i === void 0 ? "You might want to check your network connection." : i;
  return m.createElement("div", { className: "DocSearch-ErrorScreen" }, m.createElement("div", { className: "DocSearch-Screen-Icon" }, m.createElement($0, null)), m.createElement("p", { className: "DocSearch-Title" }, o), m.createElement("p", { className: "DocSearch-Help" }, a));
}
var j0 = ["translations"];
function C0(e) {
  return function(t) {
    if (Array.isArray(t))
      return io(t);
  }(e) || function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
      return Array.from(t);
  }(e) || function(t, n) {
    if (t) {
      if (typeof t == "string")
        return io(t, n);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
        return Array.from(t);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
        return io(t, n);
    }
  }(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function io(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function A0(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, f = Object.keys(a);
    for (u = 0; u < f.length; u++)
      l = f[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function I0(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = A0(e, j0), o = n.noResultsText, i = o === void 0 ? "No results for" : o, a = n.suggestedQueryText, s = a === void 0 ? "Try searching for" : a, l = n.reportMissingResultsText, u = l === void 0 ? "Believe this query should return results?" : l, c = n.reportMissingResultsLinkText, f = c === void 0 ? "Let us know." : c, d = r.state.context.searchSuggestions;
  return m.createElement("div", { className: "DocSearch-NoResults" }, m.createElement("div", { className: "DocSearch-Screen-Icon" }, m.createElement(P0, null)), m.createElement("p", { className: "DocSearch-Title" }, i, ' "', m.createElement("strong", null, r.state.query), '"'), d && d.length > 0 && m.createElement("div", { className: "DocSearch-NoResults-Prefill-List" }, m.createElement("p", { className: "DocSearch-Help" }, s, ":"), m.createElement("ul", null, d.slice(0, 3).reduce(function(p, v) {
    return [].concat(C0(p), [m.createElement("li", { key: v }, m.createElement("button", { className: "DocSearch-Prefill", key: v, type: "button", onClick: function() {
      r.setQuery(v.toLowerCase() + " "), r.refresh(), r.inputRef.current.focus();
    } }, v))]);
  }, []))), r.getMissingResultsUrl && m.createElement("p", { className: "DocSearch-Help" }, "".concat(u, " "), m.createElement("a", { href: r.getMissingResultsUrl({ query: r.state.query }), target: "_blank", rel: "noopener noreferrer" }, f)));
}
var T0 = ["hit", "attribute", "tagName"];
function Ra(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ha(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ra(Object(n), !0).forEach(function(r) {
      D0(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ra(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function D0(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function N0(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, f = Object.keys(a);
    for (u = 0; u < f.length; u++)
      l = f[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function Ba(e, t) {
  return t.split(".").reduce(function(n, r) {
    return n != null && n[r] ? n[r] : null;
  }, e);
}
function Mt(e) {
  var t = e.hit, n = e.attribute, r = e.tagName;
  return ze(r === void 0 ? "span" : r, Ha(Ha({}, N0(e, T0)), {}, { dangerouslySetInnerHTML: { __html: Ba(t, "_snippetResult.".concat(n, ".value")) || Ba(t, n) } }));
}
function Fa(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var i, a, s = [], l = !0, u = !1;
      try {
        for (o = o.call(n); !(l = (i = o.next()).done) && (s.push(i.value), !r || s.length !== r); l = !0)
          ;
      } catch (c) {
        u = !0, a = c;
      } finally {
        try {
          l || o.return == null || o.return();
        } finally {
          if (u)
            throw a;
        }
      }
      return s;
    }
  }(e, t) || function(n, r) {
    if (n) {
      if (typeof n == "string")
        return za(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return za(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function za(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Pr() {
  return Pr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Pr.apply(this, arguments);
}
function Ro(e) {
  return e.collection && e.collection.items.length !== 0 ? m.createElement("section", { className: "DocSearch-Hits" }, m.createElement("div", { className: "DocSearch-Hit-source" }, e.title), m.createElement("ul", e.getListProps(), e.collection.items.map(function(t, n) {
    return m.createElement(L0, Pr({ key: [e.title, t.objectID].join(":"), item: t, index: n }, e));
  }))) : null;
}
function L0(e) {
  var t = e.item, n = e.index, r = e.renderIcon, o = e.renderAction, i = e.getItemProps, a = e.onItemClick, s = e.collection, l = e.hitComponent, u = Fa(m.useState(!1), 2), c = u[0], f = u[1], d = Fa(m.useState(!1), 2), p = d[0], v = d[1], y = m.useRef(null), _ = l;
  return m.createElement("li", Pr({ className: ["DocSearch-Hit", t.__docsearch_parent && "DocSearch-Hit--Child", c && "DocSearch-Hit--deleting", p && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "), onTransitionEnd: function() {
    y.current && y.current();
  } }, i({ item: t, source: s.source, onClick: function(w) {
    a(t, w);
  } })), m.createElement(_, { hit: t }, m.createElement("div", { className: "DocSearch-Hit-Container" }, r({ item: t, index: n }), t.hierarchy[t.type] && t.type === "lvl1" && m.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, m.createElement(Mt, { className: "DocSearch-Hit-title", hit: t, attribute: "hierarchy.lvl1" }), t.content && m.createElement(Mt, { className: "DocSearch-Hit-path", hit: t, attribute: "content" })), t.hierarchy[t.type] && (t.type === "lvl2" || t.type === "lvl3" || t.type === "lvl4" || t.type === "lvl5" || t.type === "lvl6") && m.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, m.createElement(Mt, { className: "DocSearch-Hit-title", hit: t, attribute: "hierarchy.".concat(t.type) }), m.createElement(Mt, { className: "DocSearch-Hit-path", hit: t, attribute: "hierarchy.lvl1" })), t.type === "content" && m.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, m.createElement(Mt, { className: "DocSearch-Hit-title", hit: t, attribute: "content" }), m.createElement(Mt, { className: "DocSearch-Hit-path", hit: t, attribute: "hierarchy.lvl1" })), o({ item: t, runDeleteTransition: function(w) {
    f(!0), y.current = w;
  }, runFavoriteTransition: function(w) {
    v(!0), y.current = w;
  } }))));
}
function Va(e, t, n) {
  return e.reduce(function(r, o) {
    var i = t(o);
    return r.hasOwnProperty(i) || (r[i] = []), r[i].length < (n || 5) && r[i].push(o), r;
  }, {});
}
function Ua(e) {
  return e;
}
function rr(e) {
  return e.button === 1 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
}
function M0() {
}
var Rl = /(<mark>|<\/mark>)/g, R0 = RegExp(Rl.source);
function Hl(e) {
  var t, n, r, o, i, a = e;
  if (!a.__docsearch_parent && !e._highlightResult)
    return e.hierarchy.lvl0;
  var s = ((a.__docsearch_parent ? (t = a.__docsearch_parent) === null || t === void 0 || (n = t._highlightResult) === null || n === void 0 || (r = n.hierarchy) === null || r === void 0 ? void 0 : r.lvl0 : (o = e._highlightResult) === null || o === void 0 || (i = o.hierarchy) === null || i === void 0 ? void 0 : i.lvl0) || {}).value;
  return s && R0.test(s) ? s.replace(Rl, "") : s;
}
function Ho() {
  return Ho = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ho.apply(this, arguments);
}
function H0(e) {
  return m.createElement("div", { className: "DocSearch-Dropdown-Container" }, e.state.collections.map(function(t) {
    if (t.items.length === 0)
      return null;
    var n = Hl(t.items[0]);
    return m.createElement(Ro, Ho({}, e, { key: t.source.sourceId, title: n, collection: t, renderIcon: function(r) {
      var o, i = r.item, a = r.index;
      return m.createElement(m.Fragment, null, i.__docsearch_parent && m.createElement("svg", { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" }, m.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, i.__docsearch_parent !== ((o = t.items[a + 1]) === null || o === void 0 ? void 0 : o.__docsearch_parent) ? m.createElement("path", { d: "M8 6v21M20 27H8.3" }) : m.createElement("path", { d: "M8 6v42M20 27H8.3" }))), m.createElement("div", { className: "DocSearch-Hit-icon" }, m.createElement(x0, { type: i.type })));
    }, renderAction: function() {
      return m.createElement("div", { className: "DocSearch-Hit-action" }, m.createElement(w0, null));
    } }));
  }), e.resultsFooterComponent && m.createElement("section", { className: "DocSearch-HitsFooter" }, m.createElement(e.resultsFooterComponent, { state: e.state })));
}
var B0 = ["translations"];
function Er() {
  return Er = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Er.apply(this, arguments);
}
function F0(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, f = Object.keys(a);
    for (u = 0; u < f.length; u++)
      l = f[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function z0(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = F0(e, B0), o = n.recentSearchesTitle, i = o === void 0 ? "Recent" : o, a = n.noRecentSearchesText, s = a === void 0 ? "No recent searches" : a, l = n.saveRecentSearchButtonTitle, u = l === void 0 ? "Save this search" : l, c = n.removeRecentSearchButtonTitle, f = c === void 0 ? "Remove this search from history" : c, d = n.favoriteSearchesTitle, p = d === void 0 ? "Favorite" : d, v = n.removeFavoriteSearchButtonTitle, y = v === void 0 ? "Remove this search from favorites" : v;
  return r.state.status === "idle" && r.hasCollections === !1 ? r.disableUserPersonalization ? null : m.createElement("div", { className: "DocSearch-StartScreen" }, m.createElement("p", { className: "DocSearch-Help" }, s)) : r.hasCollections === !1 ? null : m.createElement("div", { className: "DocSearch-Dropdown-Container" }, m.createElement(Ro, Er({}, r, { title: i, collection: r.state.collections[0], renderIcon: function() {
    return m.createElement("div", { className: "DocSearch-Hit-icon" }, m.createElement(b0, null));
  }, renderAction: function(_) {
    var w = _.item, S = _.runFavoriteTransition, x = _.runDeleteTransition;
    return m.createElement(m.Fragment, null, m.createElement("div", { className: "DocSearch-Hit-action" }, m.createElement("button", { className: "DocSearch-Hit-action-button", title: u, type: "submit", onClick: function($) {
      $.preventDefault(), $.stopPropagation(), S(function() {
        r.favoriteSearches.add(w), r.recentSearches.remove(w), r.refresh();
      });
    } }, m.createElement(Ma, null))), m.createElement("div", { className: "DocSearch-Hit-action" }, m.createElement("button", { className: "DocSearch-Hit-action-button", title: f, type: "submit", onClick: function($) {
      $.preventDefault(), $.stopPropagation(), x(function() {
        r.recentSearches.remove(w), r.refresh();
      });
    } }, m.createElement(Mo, null))));
  } })), m.createElement(Ro, Er({}, r, { title: p, collection: r.state.collections[1], renderIcon: function() {
    return m.createElement("div", { className: "DocSearch-Hit-icon" }, m.createElement(Ma, null));
  }, renderAction: function(_) {
    var w = _.item, S = _.runDeleteTransition;
    return m.createElement("div", { className: "DocSearch-Hit-action" }, m.createElement("button", { className: "DocSearch-Hit-action-button", title: y, type: "submit", onClick: function(x) {
      x.preventDefault(), x.stopPropagation(), S(function() {
        r.favoriteSearches.remove(w), r.refresh();
      });
    } }, m.createElement(Mo, null)));
  } })));
}
var V0 = ["translations"];
function jr() {
  return jr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, jr.apply(this, arguments);
}
function U0(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, f = Object.keys(a);
    for (u = 0; u < f.length; u++)
      l = f[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
var q0 = m.memo(function(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = U0(e, V0);
  if (r.state.status === "error")
    return m.createElement(E0, { translations: n == null ? void 0 : n.errorScreen });
  var o = r.state.collections.some(function(i) {
    return i.items.length > 0;
  });
  return r.state.query ? o === !1 ? m.createElement(I0, jr({}, r, { translations: n == null ? void 0 : n.noResultsScreen })) : m.createElement(H0, r) : m.createElement(z0, jr({}, r, { hasCollections: o, translations: n == null ? void 0 : n.startScreen }));
}, function(e, t) {
  return t.state.status === "loading" || t.state.status === "stalled";
}), W0 = ["translations"];
function Cr() {
  return Cr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Cr.apply(this, arguments);
}
function K0(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, f = Object.keys(a);
    for (u = 0; u < f.length; u++)
      l = f[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function G0(e) {
  var t = e.translations, n = t === void 0 ? {} : t, r = K0(e, W0), o = n.resetButtonTitle, i = o === void 0 ? "Clear the query" : o, a = n.resetButtonAriaLabel, s = a === void 0 ? "Clear the query" : a, l = n.cancelButtonText, u = l === void 0 ? "Cancel" : l, c = n.cancelButtonAriaLabel, f = c === void 0 ? "Cancel" : c, d = r.getFormProps({ inputElement: r.inputRef.current }).onReset;
  return m.useEffect(function() {
    r.autoFocus && r.inputRef.current && r.inputRef.current.focus();
  }, [r.autoFocus, r.inputRef]), m.useEffect(function() {
    r.isFromSelection && r.inputRef.current && r.inputRef.current.select();
  }, [r.isFromSelection, r.inputRef]), m.createElement(m.Fragment, null, m.createElement("form", { className: "DocSearch-Form", onSubmit: function(p) {
    p.preventDefault();
  }, onReset: d }, m.createElement("label", Cr({ className: "DocSearch-MagnifierLabel" }, r.getLabelProps()), m.createElement(Al, null)), m.createElement("div", { className: "DocSearch-LoadingIndicator" }, m.createElement(_0, null)), m.createElement("input", Cr({ className: "DocSearch-Input", ref: r.inputRef }, r.getInputProps({ inputElement: r.inputRef.current, autoFocus: r.autoFocus, maxLength: 64 }))), m.createElement("button", { type: "reset", title: i, className: "DocSearch-Reset", "aria-label": s, hidden: !r.state.query }, m.createElement(Mo, null))), m.createElement("button", { className: "DocSearch-Cancel", type: "reset", "aria-label": f, onClick: r.onClose }, u));
}
var J0 = ["_highlightResult", "_snippetResult"];
function Q0(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, f = Object.keys(a);
    for (u = 0; u < f.length; u++)
      l = f[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function Y0(e) {
  return function() {
    var t = "__TEST_KEY__";
    try {
      return localStorage.setItem(t, ""), localStorage.removeItem(t), !0;
    } catch {
      return !1;
    }
  }() === !1 ? { setItem: function() {
  }, getItem: function() {
    return [];
  } } : { setItem: function(t) {
    return window.localStorage.setItem(e, JSON.stringify(t));
  }, getItem: function() {
    var t = window.localStorage.getItem(e);
    return t ? JSON.parse(t) : [];
  } };
}
function qa(e) {
  var t = e.key, n = e.limit, r = n === void 0 ? 5 : n, o = Y0(t), i = o.getItem().slice(0, r);
  return { add: function(a) {
    var s = a, l = (s._highlightResult, s._snippetResult, Q0(s, J0)), u = i.findIndex(function(c) {
      return c.objectID === l.objectID;
    });
    u > -1 && i.splice(u, 1), i.unshift(l), i = i.slice(0, r), o.setItem(i);
  }, remove: function(a) {
    i = i.filter(function(s) {
      return s.objectID !== a.objectID;
    }), o.setItem(i);
  }, getAll: function() {
    return i;
  } };
}
var Z0 = ["facetName", "facetQuery"];
function X0(e) {
  var t, n = "algoliasearch-client-js-".concat(e.key), r = function() {
    return t === void 0 && (t = e.localStorage || window.localStorage), t;
  }, o = function() {
    return JSON.parse(r().getItem(n) || "{}");
  };
  return { get: function(i, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } };
    return Promise.resolve().then(function() {
      var l = JSON.stringify(i), u = o()[l];
      return Promise.all([u || a(), u !== void 0]);
    }).then(function(l) {
      var u = wr(l, 2), c = u[0], f = u[1];
      return Promise.all([c, f || s.miss(c)]);
    }).then(function(l) {
      return wr(l, 1)[0];
    });
  }, set: function(i, a) {
    return Promise.resolve().then(function() {
      var s = o();
      return s[JSON.stringify(i)] = a, r().setItem(n, JSON.stringify(s)), a;
    });
  }, delete: function(i) {
    return Promise.resolve().then(function() {
      var a = o();
      delete a[JSON.stringify(i)], r().setItem(n, JSON.stringify(a));
    });
  }, clear: function() {
    return Promise.resolve().then(function() {
      r().removeItem(n);
    });
  } };
}
function an(e) {
  var t = Sr(e.caches), n = t.shift();
  return n === void 0 ? { get: function(r, o) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } };
    return o().then(function(a) {
      return Promise.all([a, i.miss(a)]);
    }).then(function(a) {
      return wr(a, 1)[0];
    });
  }, set: function(r, o) {
    return Promise.resolve(o);
  }, delete: function(r) {
    return Promise.resolve();
  }, clear: function() {
    return Promise.resolve();
  } } : { get: function(r, o) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } };
    return n.get(r, o, i).catch(function() {
      return an({ caches: t }).get(r, o, i);
    });
  }, set: function(r, o) {
    return n.set(r, o).catch(function() {
      return an({ caches: t }).set(r, o);
    });
  }, delete: function(r) {
    return n.delete(r).catch(function() {
      return an({ caches: t }).delete(r);
    });
  }, clear: function() {
    return n.clear().catch(function() {
      return an({ caches: t }).clear();
    });
  } };
}
function ao() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { serializable: !0 }, t = {};
  return { get: function(n, r) {
    var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } }, i = JSON.stringify(n);
    if (i in t)
      return Promise.resolve(e.serializable ? JSON.parse(t[i]) : t[i]);
    var a = r(), s = o && o.miss || function() {
      return Promise.resolve();
    };
    return a.then(function(l) {
      return s(l);
    }).then(function() {
      return a;
    });
  }, set: function(n, r) {
    return t[JSON.stringify(n)] = e.serializable ? JSON.stringify(r) : r, Promise.resolve(r);
  }, delete: function(n) {
    return delete t[JSON.stringify(n)], Promise.resolve();
  }, clear: function() {
    return t = {}, Promise.resolve();
  } };
}
function eh(e) {
  for (var t = e.length - 1; t > 0; t--) {
    var n = Math.floor(Math.random() * (t + 1)), r = e[t];
    e[t] = e[n], e[n] = r;
  }
  return e;
}
function Bl(e, t) {
  return t && Object.keys(t).forEach(function(n) {
    e[n] = t[n](e);
  }), e;
}
function Fr(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0;
  return e.replace(/%s/g, function() {
    return encodeURIComponent(n[o++]);
  });
}
var ur = { WithinQueryParameters: 0, WithinHeaders: 1 };
function Wa(e, t) {
  var n = e || {}, r = n.data || {};
  return Object.keys(n).forEach(function(o) {
    ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(o) === -1 && (r[o] = n[o]);
  }), { data: Object.entries(r).length > 0 ? r : void 0, timeout: n.timeout || t, headers: n.headers || {}, queryParameters: n.queryParameters || {}, cacheable: n.cacheable };
}
var Bt = { Read: 1, Write: 2, Any: 3 }, Fl = 1, th = 2, zl = 3;
function Vl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fl;
  return Z(Z({}, e), {}, { status: t, lastUpdate: Date.now() });
}
function Ul(e) {
  return typeof e == "string" ? { protocol: "https", url: e, accept: Bt.Any } : { protocol: e.protocol || "https", url: e.url, accept: e.accept || Bt.Any };
}
var Ka = "GET", zr = "POST";
function nh(e, t) {
  return Promise.all(t.map(function(n) {
    return e.get(n, function() {
      return Promise.resolve(Vl(n));
    });
  })).then(function(n) {
    var r = n.filter(function(a) {
      return function(s) {
        return s.status === Fl || Date.now() - s.lastUpdate > 12e4;
      }(a);
    }), o = n.filter(function(a) {
      return function(s) {
        return s.status === zl && Date.now() - s.lastUpdate <= 12e4;
      }(a);
    }), i = [].concat(Sr(r), Sr(o));
    return { getTimeout: function(a, s) {
      return (o.length === 0 && a === 0 ? 1 : o.length + 3 + a) * s;
    }, statelessHosts: i.length > 0 ? i.map(function(a) {
      return Ul(a);
    }) : t };
  });
}
function Ga(e, t, n, r) {
  var o = [], i = function(d, p) {
    if (!(d.method === Ka || d.data === void 0 && p.data === void 0)) {
      var v = Array.isArray(d.data) ? d.data : Z(Z({}, d.data), p.data);
      return JSON.stringify(v);
    }
  }(n, r), a = function(d, p) {
    var v = Z(Z({}, d.headers), p.headers), y = {};
    return Object.keys(v).forEach(function(_) {
      var w = v[_];
      y[_.toLowerCase()] = w;
    }), y;
  }(e, r), s = n.method, l = n.method !== Ka ? {} : Z(Z({}, n.data), r.data), u = Z(Z(Z({ "x-algolia-agent": e.userAgent.value }, e.queryParameters), l), r.queryParameters), c = 0, f = function d(p, v) {
    var y = p.pop();
    if (y === void 0)
      throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", transporterStackTrace: Ja(o) };
    var _ = { data: i, headers: a, method: s, url: oh(y, n.path, u), connectTimeout: v(c, e.timeouts.connect), responseTimeout: v(c, r.timeout) }, w = function(x) {
      var $ = { request: _, response: x, host: y, triesLeft: p.length };
      return o.push($), $;
    }, S = { onSucess: function(x) {
      return function($) {
        try {
          return JSON.parse($.content);
        } catch (k) {
          throw function(N, C) {
            return { name: "DeserializationError", message: N, response: C };
          }(k.message, $);
        }
      }(x);
    }, onRetry: function(x) {
      var $ = w(x);
      return x.isTimedOut && c++, Promise.all([e.logger.info("Retryable failure", Wl($)), e.hostsCache.set(y, Vl(y, x.isTimedOut ? zl : th))]).then(function() {
        return d(p, v);
      });
    }, onFail: function(x) {
      throw w(x), function($, k) {
        var N = $.content, C = $.status, E = N;
        try {
          E = JSON.parse(N).message;
        } catch {
        }
        return function(j, I, H) {
          return { name: "ApiError", message: j, status: I, transporterStackTrace: H };
        }(E, C, k);
      }(x, Ja(o));
    } };
    return e.requester.send(_).then(function(x) {
      return function($, k) {
        return function(N) {
          var C = N.status;
          return N.isTimedOut || function(E) {
            var j = E.isTimedOut, I = E.status;
            return !j && ~~I == 0;
          }(N) || ~~(C / 100) != 2 && ~~(C / 100) != 4;
        }($) ? k.onRetry($) : ~~($.status / 100) == 2 ? k.onSucess($) : k.onFail($);
      }(x, S);
    });
  };
  return nh(e.hostsCache, t).then(function(d) {
    return f(Sr(d.statelessHosts).reverse(), d.getTimeout);
  });
}
function rh(e) {
  var t = { value: "Algolia for JavaScript (".concat(e, ")"), add: function(n) {
    var r = "; ".concat(n.segment).concat(n.version !== void 0 ? " (".concat(n.version, ")") : "");
    return t.value.indexOf(r) === -1 && (t.value = "".concat(t.value).concat(r)), t;
  } };
  return t;
}
function oh(e, t, n) {
  var r = ql(n), o = "".concat(e.protocol, "://").concat(e.url, "/").concat(t.charAt(0) === "/" ? t.substr(1) : t);
  return r.length && (o += "?".concat(r)), o;
}
function ql(e) {
  return Object.keys(e).map(function(t) {
    return Fr("%s=%s", t, (n = e[t], Object.prototype.toString.call(n) === "[object Object]" || Object.prototype.toString.call(n) === "[object Array]" ? JSON.stringify(e[t]) : e[t]));
    var n;
  }).join("&");
}
function Ja(e) {
  return e.map(function(t) {
    return Wl(t);
  });
}
function Wl(e) {
  var t = e.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
  return Z(Z({}, e), {}, { request: Z(Z({}, e.request), {}, { headers: Z(Z({}, e.request.headers), t) }) });
}
var ih = function(e) {
  var t = e.appId, n = function(i, a, s) {
    var l = { "x-algolia-api-key": s, "x-algolia-application-id": a };
    return { headers: function() {
      return i === ur.WithinHeaders ? l : {};
    }, queryParameters: function() {
      return i === ur.WithinQueryParameters ? l : {};
    } };
  }(e.authMode !== void 0 ? e.authMode : ur.WithinHeaders, t, e.apiKey), r = function(i) {
    var a = i.hostsCache, s = i.logger, l = i.requester, u = i.requestsCache, c = i.responsesCache, f = i.timeouts, d = i.userAgent, p = i.hosts, v = i.queryParameters, y = { hostsCache: a, logger: s, requester: l, requestsCache: u, responsesCache: c, timeouts: f, userAgent: d, headers: i.headers, queryParameters: v, hosts: p.map(function(_) {
      return Ul(_);
    }), read: function(_, w) {
      var S = Wa(w, y.timeouts.read), x = function() {
        return Ga(y, y.hosts.filter(function(k) {
          return (k.accept & Bt.Read) != 0;
        }), _, S);
      };
      if ((S.cacheable !== void 0 ? S.cacheable : _.cacheable) !== !0)
        return x();
      var $ = { request: _, mappedRequestOptions: S, transporter: { queryParameters: y.queryParameters, headers: y.headers } };
      return y.responsesCache.get($, function() {
        return y.requestsCache.get($, function() {
          return y.requestsCache.set($, x()).then(function(k) {
            return Promise.all([y.requestsCache.delete($), k]);
          }, function(k) {
            return Promise.all([y.requestsCache.delete($), Promise.reject(k)]);
          }).then(function(k) {
            var N = wr(k, 2);
            return N[0], N[1];
          });
        });
      }, { miss: function(k) {
        return y.responsesCache.set($, k);
      } });
    }, write: function(_, w) {
      return Ga(y, y.hosts.filter(function(S) {
        return (S.accept & Bt.Write) != 0;
      }), _, Wa(w, y.timeouts.write));
    } };
    return y;
  }(Z(Z({ hosts: [{ url: "".concat(t, "-dsn.algolia.net"), accept: Bt.Read }, { url: "".concat(t, ".algolia.net"), accept: Bt.Write }].concat(eh([{ url: "".concat(t, "-1.algolianet.com") }, { url: "".concat(t, "-2.algolianet.com") }, { url: "".concat(t, "-3.algolianet.com") }])) }, e), {}, { headers: Z(Z(Z({}, n.headers()), { "content-type": "application/x-www-form-urlencoded" }), e.headers), queryParameters: Z(Z({}, n.queryParameters()), e.queryParameters) })), o = { transporter: r, appId: t, addAlgoliaAgent: function(i, a) {
    r.userAgent.add({ segment: i, version: a });
  }, clearCache: function() {
    return Promise.all([r.requestsCache.clear(), r.responsesCache.clear()]).then(function() {
    });
  } };
  return Bl(o, e.methods);
}, Kl = function(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = { transporter: e.transporter, appId: e.appId, indexName: t };
    return Bl(r, n.methods);
  };
}, Qa = function(e) {
  return function(t, n) {
    var r = t.map(function(o) {
      return Z(Z({}, o), {}, { params: ql(o.params || {}) });
    });
    return e.transporter.read({ method: zr, path: "1/indexes/*/queries", data: { requests: r }, cacheable: !0 }, n);
  };
}, Ya = function(e) {
  return function(t, n) {
    return Promise.all(t.map(function(r) {
      var o = r.params, i = o.facetName, a = o.facetQuery, s = e1(o, Z0);
      return Kl(e)(r.indexName, { methods: { searchForFacetValues: Gl } }).searchForFacetValues(i, a, Z(Z({}, n), s));
    }));
  };
}, ah = function(e) {
  return function(t, n, r) {
    return e.transporter.read({ method: zr, path: Fr("1/answers/%s/prediction", e.indexName), data: { query: t, queryLanguages: n }, cacheable: !0 }, r);
  };
}, sh = function(e) {
  return function(t, n) {
    return e.transporter.read({ method: zr, path: Fr("1/indexes/%s/query", e.indexName), data: { query: t }, cacheable: !0 }, n);
  };
}, Gl = function(e) {
  return function(t, n, r) {
    return e.transporter.read({ method: zr, path: Fr("1/indexes/%s/facets/%s/query", e.indexName, t), data: { facetQuery: n }, cacheable: !0 }, r);
  };
}, lh = 1, ch = 2, uh = 3;
function Jl(e, t, n) {
  var r, o = { appId: e, apiKey: t, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(i) {
    return new Promise(function(a) {
      var s = new XMLHttpRequest();
      s.open(i.method, i.url, !0), Object.keys(i.headers).forEach(function(f) {
        return s.setRequestHeader(f, i.headers[f]);
      });
      var l, u = function(f, d) {
        return setTimeout(function() {
          s.abort(), a({ status: 0, content: d, isTimedOut: !0 });
        }, 1e3 * f);
      }, c = u(i.connectTimeout, "Connection timeout");
      s.onreadystatechange = function() {
        s.readyState > s.OPENED && l === void 0 && (clearTimeout(c), l = u(i.responseTimeout, "Socket timeout"));
      }, s.onerror = function() {
        s.status === 0 && (clearTimeout(c), clearTimeout(l), a({ content: s.responseText || "Network request failed", status: s.status, isTimedOut: !1 }));
      }, s.onload = function() {
        clearTimeout(c), clearTimeout(l), a({ content: s.responseText, status: s.status, isTimedOut: !1 });
      }, s.send(i.data);
    });
  } }, logger: (r = uh, { debug: function(i, a) {
    return lh >= r && console.debug(i, a), Promise.resolve();
  }, info: function(i, a) {
    return ch >= r && console.info(i, a), Promise.resolve();
  }, error: function(i, a) {
    return console.error(i, a), Promise.resolve();
  } }), responsesCache: ao(), requestsCache: ao({ serializable: !1 }), hostsCache: an({ caches: [X0({ key: "".concat("4.8.5", "-").concat(e) }), ao()] }), userAgent: rh("4.8.5").add({ segment: "Browser", version: "lite" }), authMode: ur.WithinQueryParameters };
  return ih(Z(Z(Z({}, o), n), {}, { methods: { search: Qa, searchForFacetValues: Ya, multipleQueries: Qa, multipleSearchForFacetValues: Ya, initIndex: function(i) {
    return function(a) {
      return Kl(i)(a, { methods: { search: sh, searchForFacetValues: Gl, findAnswers: ah } });
    };
  } } }));
}
Jl.version = "4.8.5";
var fh = ["footer", "searchBox"];
function $n() {
  return $n = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $n.apply(this, arguments);
}
function Za(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function so(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Za(Object(n), !0).forEach(function(r) {
      dh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Za(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function dh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ph(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var i, a, s = [], l = !0, u = !1;
      try {
        for (o = o.call(n); !(l = (i = o.next()).done) && (s.push(i.value), !r || s.length !== r); l = !0)
          ;
      } catch (c) {
        u = !0, a = c;
      } finally {
        try {
          l || o.return == null || o.return();
        } finally {
          if (u)
            throw a;
        }
      }
      return s;
    }
  }(e, t) || function(n, r) {
    if (n) {
      if (typeof n == "string")
        return Xa(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return Xa(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Xa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function hh(e, t) {
  if (e == null)
    return {};
  var n, r, o = function(a, s) {
    if (a == null)
      return {};
    var l, u, c = {}, f = Object.keys(a);
    for (u = 0; u < f.length; u++)
      l = f[u], s.indexOf(l) >= 0 || (c[l] = a[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function mh(e) {
  var t = e.appId, n = e.apiKey, r = e.indexName, o = e.placeholder, i = o === void 0 ? "Search docs" : o, a = e.searchParameters, s = e.maxResultsPerGroup, l = e.onClose, u = l === void 0 ? M0 : l, c = e.transformItems, f = c === void 0 ? Ua : c, d = e.hitComponent, p = d === void 0 ? y0 : d, v = e.resultsFooterComponent, y = v === void 0 ? function() {
    return null;
  } : v, _ = e.navigator, w = e.initialScrollY, S = w === void 0 ? 0 : w, x = e.transformSearchClient, $ = x === void 0 ? Ua : x, k = e.disableUserPersonalization, N = k !== void 0 && k, C = e.initialQuery, E = C === void 0 ? "" : C, j = e.translations, I = j === void 0 ? {} : j, H = e.getMissingResultsUrl, J = e.insights, Y = J !== void 0 && J, q = I.footer, ge = I.searchBox, Be = hh(I, fh), Ne = ph(m.useState({ query: "", collections: [], completion: null, context: {}, isOpen: !1, activeItemId: null, status: "idle" }), 2), fe = Ne[0], ht = Ne[1], Yt = m.useRef(null), R = m.useRef(null), O = m.useRef(null), D = m.useRef(null), K = m.useRef(null), X = m.useRef(10), ie = m.useRef(typeof window < "u" ? window.getSelection().toString().slice(0, 64) : "").current, ee = m.useRef(E || ie).current, Ue = function(B, G, ce) {
    return m.useMemo(function() {
      var pe = Jl(B, G);
      return pe.addAlgoliaAgent("docsearch", "3.5.1"), /docsearch.js \(.*\)/.test(pe.transporter.userAgent.value) === !1 && pe.addAlgoliaAgent("docsearch-react", "3.5.1"), ce(pe);
    }, [B, G, ce]);
  }(t, n, $), Se = m.useRef(qa({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(r), limit: 10 })).current, de = m.useRef(qa({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(r), limit: Se.getAll().length === 0 ? 7 : 4 })).current, ae = m.useCallback(function(B) {
    if (!N) {
      var G = B.type === "content" ? B.__docsearch_parent : B;
      G && Se.getAll().findIndex(function(ce) {
        return ce.objectID === G.objectID;
      }) === -1 && de.add(G);
    }
  }, [Se, de, N]), mt = m.useCallback(function(B) {
    if (fe.context.algoliaInsightsPlugin && B.__autocomplete_id) {
      var G = B, ce = { eventName: "Item Selected", index: G.__autocomplete_indexName, items: [G], positions: [B.__autocomplete_id], queryID: G.__autocomplete_queryID };
      fe.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(ce);
    }
  }, [fe.context.algoliaInsightsPlugin]), je = m.useMemo(function() {
    return m0({ id: "docsearch", defaultActiveItemId: 0, placeholder: i, openOnFocus: !0, initialState: { query: ee, context: { searchSuggestions: [] } }, insights: Y, navigator: _, onStateChange: function(B) {
      ht(B.state);
    }, getSources: function(B) {
      var G = B.query, ce = B.state, pe = B.setContext, ye = B.setStatus;
      if (!G)
        return N ? [] : [{ sourceId: "recentSearches", onSelect: function(re) {
          var Pe = re.item, qe = re.event;
          ae(Pe), rr(qe) || u();
        }, getItemUrl: function(re) {
          return re.item.url;
        }, getItems: function() {
          return de.getAll();
        } }, { sourceId: "favoriteSearches", onSelect: function(re) {
          var Pe = re.item, qe = re.event;
          ae(Pe), rr(qe) || u();
        }, getItemUrl: function(re) {
          return re.item.url;
        }, getItems: function() {
          return Se.getAll();
        } }];
      var Ce = !!Y;
      return Ue.search([{ query: G, indexName: r, params: so({ attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], attributesToSnippet: ["hierarchy.lvl1:".concat(X.current), "hierarchy.lvl2:".concat(X.current), "hierarchy.lvl3:".concat(X.current), "hierarchy.lvl4:".concat(X.current), "hierarchy.lvl5:".concat(X.current), "hierarchy.lvl6:".concat(X.current), "content:".concat(X.current)], snippetEllipsisText: "…", highlightPreTag: "<mark>", highlightPostTag: "</mark>", hitsPerPage: 20, clickAnalytics: Ce }, a) }]).catch(function(re) {
        throw re.name === "RetryError" && ye("error"), re;
      }).then(function(re) {
        var Pe = re.results, qe = Pe[0], Vn = qe.hits, At = qe.nbHits, vt = Va(Vn, function(Zt) {
          return Hl(Zt);
        }, s);
        ce.context.searchSuggestions.length < Object.keys(vt).length && pe({ searchSuggestions: Object.keys(vt) }), pe({ nbHits: At });
        var nt = {};
        return Ce && (nt = { __autocomplete_indexName: r, __autocomplete_queryID: Pe[0].queryID, __autocomplete_algoliaCredentials: { appId: t, apiKey: n } }), Object.values(vt).map(function(Zt, Ur) {
          return { sourceId: "hits".concat(Ur), onSelect: function(Ae) {
            var rt = Ae.item, gt = Ae.event;
            ae(rt), rr(gt) || u();
          }, getItemUrl: function(Ae) {
            return Ae.item.url;
          }, getItems: function() {
            return Object.values(Va(Zt, function(Ae) {
              return Ae.hierarchy.lvl1;
            }, s)).map(f).map(function(Ae) {
              return Ae.map(function(rt) {
                var gt = null, Xt = Ae.find(function(Un) {
                  return Un.type === "lvl1" && Un.hierarchy.lvl1 === rt.hierarchy.lvl1;
                });
                return rt.type !== "lvl1" && Xt && (gt = Xt), so(so({}, rt), {}, { __docsearch_parent: gt }, nt);
              });
            }).flat();
          } };
        });
      });
    } });
  }, [r, a, s, Ue, u, de, Se, ae, ee, i, _, f, N, Y, t, n]), Fe = je.getEnvironmentProps, tt = je.getRootProps, Ct = je.refresh;
  return function(B) {
    var G = B.getEnvironmentProps, ce = B.panelElement, pe = B.formElement, ye = B.inputElement;
    m.useEffect(function() {
      if (ce && pe && ye) {
        var Ce = G({ panelElement: ce, formElement: pe, inputElement: ye }), re = Ce.onTouchStart, Pe = Ce.onTouchMove;
        return window.addEventListener("touchstart", re), window.addEventListener("touchmove", Pe), function() {
          window.removeEventListener("touchstart", re), window.removeEventListener("touchmove", Pe);
        };
      }
    }, [G, ce, pe, ye]);
  }({ getEnvironmentProps: Fe, panelElement: D.current, formElement: O.current, inputElement: K.current }), function(B) {
    var G = B.container;
    m.useEffect(function() {
      if (G) {
        var ce = G.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"), pe = ce[0], ye = ce[ce.length - 1];
        return G.addEventListener("keydown", Ce), function() {
          G.removeEventListener("keydown", Ce);
        };
      }
      function Ce(re) {
        re.key === "Tab" && (re.shiftKey ? document.activeElement === pe && (re.preventDefault(), ye.focus()) : document.activeElement === ye && (re.preventDefault(), pe.focus()));
      }
    }, [G]);
  }({ container: Yt.current }), m.useEffect(function() {
    return document.body.classList.add("DocSearch--active"), function() {
      var B, G;
      document.body.classList.remove("DocSearch--active"), (B = (G = window).scrollTo) === null || B === void 0 || B.call(G, 0, S);
    };
  }, []), m.useEffect(function() {
    window.matchMedia("(max-width: 768px)").matches && (X.current = 5);
  }, []), m.useEffect(function() {
    D.current && (D.current.scrollTop = 0);
  }, [fe.query]), m.useEffect(function() {
    ee.length > 0 && (Ct(), K.current && K.current.focus());
  }, [ee, Ct]), m.useEffect(function() {
    function B() {
      if (R.current) {
        var G = 0.01 * window.innerHeight;
        R.current.style.setProperty("--docsearch-vh", "".concat(G, "px"));
      }
    }
    return B(), window.addEventListener("resize", B), function() {
      window.removeEventListener("resize", B);
    };
  }, []), m.createElement("div", $n({ ref: Yt }, tt({ "aria-expanded": !0 }), { className: ["DocSearch", "DocSearch-Container", fe.status === "stalled" && "DocSearch-Container--Stalled", fe.status === "error" && "DocSearch-Container--Errored"].filter(Boolean).join(" "), role: "button", tabIndex: 0, onMouseDown: function(B) {
    B.target === B.currentTarget && u();
  } }), m.createElement("div", { className: "DocSearch-Modal", ref: R }, m.createElement("header", { className: "DocSearch-SearchBar", ref: O }, m.createElement(G0, $n({}, je, { state: fe, autoFocus: ee.length === 0, inputRef: K, isFromSelection: !!ee && ee === ie, translations: ge, onClose: u }))), m.createElement("div", { className: "DocSearch-Dropdown", ref: D }, m.createElement(q0, $n({}, je, { indexName: r, state: fe, hitComponent: p, resultsFooterComponent: y, disableUserPersonalization: N, recentSearches: de, favoriteSearches: Se, inputRef: K, translations: Be, getMissingResultsUrl: H, onItemClick: function(B, G) {
    mt(B), ae(B), rr(G) || u();
  } }))), m.createElement("footer", { className: "DocSearch-Footer" }, m.createElement(g0, { translations: q }))));
}
function Bo() {
  return Bo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Bo.apply(this, arguments);
}
function es(e, t) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(e) || function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var i, a, s = [], l = !0, u = !1;
      try {
        for (o = o.call(n); !(l = (i = o.next()).done) && (s.push(i.value), !r || s.length !== r); l = !0)
          ;
      } catch (c) {
        u = !0, a = c;
      } finally {
        try {
          l || o.return == null || o.return();
        } finally {
          if (u)
            throw a;
        }
      }
      return s;
    }
  }(e, t) || function(n, r) {
    if (n) {
      if (typeof n == "string")
        return ts(n, r);
      var o = Object.prototype.toString.call(n).slice(8, -1);
      if (o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set")
        return Array.from(n);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
        return ts(n, r);
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function ts(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function vh(e) {
  var t, n, r = m.useRef(null), o = es(m.useState(!1), 2), i = o[0], a = o[1], s = es(m.useState((e == null ? void 0 : e.initialQuery) || void 0), 2), l = s[0], u = s[1], c = m.useCallback(function() {
    a(!0);
  }, [a]), f = m.useCallback(function() {
    a(!1);
  }, [a]);
  return function(d) {
    var p = d.isOpen, v = d.onOpen, y = d.onClose, _ = d.onInput, w = d.searchButtonRef;
    m.useEffect(function() {
      function S(x) {
        var $;
        (x.keyCode === 27 && p || (($ = x.key) === null || $ === void 0 ? void 0 : $.toLowerCase()) === "k" && (x.metaKey || x.ctrlKey) || !function(k) {
          var N = k.target, C = N.tagName;
          return N.isContentEditable || C === "INPUT" || C === "SELECT" || C === "TEXTAREA";
        }(x) && x.key === "/" && !p) && (x.preventDefault(), p ? y() : document.body.classList.contains("DocSearch--active") || document.body.classList.contains("DocSearch--active") || v()), w && w.current === document.activeElement && _ && /[a-zA-Z0-9]/.test(String.fromCharCode(x.keyCode)) && _(x);
      }
      return window.addEventListener("keydown", S), function() {
        window.removeEventListener("keydown", S);
      };
    }, [p, v, y, _, w]);
  }({ isOpen: i, onOpen: c, onClose: f, onInput: m.useCallback(function(d) {
    a(!0), u(d.key);
  }, [a, u]), searchButtonRef: r }), m.createElement(m.Fragment, null, m.createElement(w1, { ref: r, translations: e == null || (t = e.translations) === null || t === void 0 ? void 0 : t.button, onClick: c }), i && Pl(m.createElement(mh, Bo({}, e, { initialScrollY: window.scrollY, initialQuery: l, translations: e == null || (n = e.translations) === null || n === void 0 ? void 0 : n.modal, onClose: f })), document.body));
}
function gh(e) {
  jl(m.createElement(vh, Po({}, e, { transformSearchClient: function(t) {
    return t.addAlgoliaAgent("docsearch.js", "3.5.1"), e.transformSearchClient ? e.transformSearchClient(t) : t;
  } })), function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window;
    return typeof t == "string" ? n.document.querySelector(t) : t;
  }(e.container, e.environment));
}
const yh = {
  class: "algolia-search-box",
  id: "docsearch"
}, _h = /* @__PURE__ */ L({
  __name: "AlgoliaSearchBox",
  props: {
    options: null
  },
  setup(e) {
    const t = e, n = me("useRouter"), r = me("useRoute"), o = cs(), i = n(), a = r();
    $e(
      () => t.options,
      (d) => {
        l(d);
      }
    ), le(() => {
      f(t.options);
    });
    function s(d) {
      const { pathname: p, hash: v } = new URL(d);
      return p + v;
    }
    function l(d) {
      o && o.vnode.el && (o.vnode.el.innerHTML = '<div class="algolia-search-box" id="docsearch"></div>', f(d));
    }
    function u(d) {
      if (d.startsWith("http"))
        return window.location.assign(d);
      window.location.assign(window.location.origin + d);
    }
    function c(d) {
      const p = (() => d.includes("api-reference") || d.includes("docs.") && !d.startsWith(window.location.origin) ? d : d.startsWith("http") ? s(d) : d)();
      return window != null && window.__DEBUG && console.log(`getTargetUrl('${d}') -> ${p}`), p;
    }
    function f(d) {
      gh(
        Object.assign({}, d, {
          container: "#docsearch",
          searchParameters: Object.assign({}, d.searchParameters),
          navigator: {
            navigate: ({ suggestionUrl: p }) => {
              const v = c(p);
              if (v.startsWith("http") || a.path === v)
                return u(v);
              i.go(v);
            }
          },
          transformItems: (p) => p.map((v) => Object.assign({}, v, {
            url: c(v.url)
          })),
          //@ts-ignore
          hitComponent({ hit: p, children: v }) {
            return {
              __v: null,
              type: "a",
              ref: void 0,
              constructor: void 0,
              key: void 0,
              props: { href: p.url, children: v }
            };
          }
          // hitComponent: ({ hit, children }: { hit: DocSearchHit; children: any }) => {
          //   console.log(hit, children)
          //   const targetUrl = getTargetUrl(hit.url);
          //   return {
          //     type: 'a',
          //     ref: undefined,
          //     constructor: undefined,
          //     key: undefined,
          //     props: {
          //       href: hit.url,
          //       onClick: (event: MouseEvent) => {
          //         if (isSpecialClick(event)) {
          //           return;
          //         }
          //         if (targetUrl.startsWith('http')) {
          //           event.stopImmediatePropagation();
          //           return navigate(targetUrl);
          //         }
          //         // we rely on the native link scrolling when user is already on
          //         // the right anchor because Router doesn't support duplicated
          //         // history entries
          //         if (route.path === targetUrl) {
          //           return;
          //         }
          //         // if the hits goes to another page, we prevent the native link
          //         // behavior to leverage the Router loading feature
          //         if (route.path !== targetUrl) {
          //           event.preventDefault();
          //         }
          //         router.go(targetUrl);
          //       },
          //       children,
          //     },
          //   };
          // },
        })
      );
    }
    return (d, p) => (g(), b("div", yh));
  }
});
const bh = /* @__PURE__ */ h("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ h("path", {
    "fill-rule": "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    "clip-rule": "evenodd"
  })
], -1), wh = { class: "hidden lg:block" }, Sh = /* @__PURE__ */ h("span", { class: "ml-2" }, "Search", -1), xh = { class: "sr-only" }, Oh = {
  class: "absolute right-3 text-sm font-semibold",
  "aria-hidden": "true"
}, ns = /* @__PURE__ */ L({
  __name: "SearchButton",
  setup(e) {
    const t = typeof navigator < "u" ? navigator.platform : "", n = /(Mac|iPhone|iPod|iPad)/i.test(t) ? "⌘" : "Ctrl ", r = /(Mac|iPhone|iPod|iPad)/i.test(t) ? "Command" : "Control", o = () => {
      document.querySelector(
        "#docsearch .DocSearch-Button"
      ).click();
    }, i = {
      appId: "110JARHFDU",
      // apiKey: 'b54a1df4c08fbed7da6964ca0e24281d',
      apiKey: "310ff6509ce699c2ac968fc825224f26",
      indexName: "nativescript-new",
      debug: !0
    };
    return (a, s) => {
      const l = Oe("ClientOnly");
      return g(), b(z, null, [
        F(l, null, {
          default: he(() => [
            F(_h, {
              options: i,
              class: "sr-only"
            })
          ]),
          _: 1
        }),
        h("div", {
          class: "relative flex cursor-pointer items-center rounded-md p-2 text-white transition-shadow dark:ring-slate-300/10 lg:bg-white/20 lg:px-3 lg:py-1.5 lg:pr-20 lg:hover:shadow-md lg:dark:bg-white/10 lg:dark:ring-1 lg:dark:hover:ring-cyan-400/50",
          onClick: o
        }, [
          bh,
          h("div", wh, [
            Sh,
            F(l, null, {
              default: he(() => [
                h("span", xh, "Press " + U(P(r)) + "+K to open quick search", 1),
                h("span", Oh, U(P(n)) + "K", 1)
              ]),
              _: 1
            })
          ])
        ])
      ], 64);
    };
  }
}), kh = /* @__PURE__ */ h("a", {
  href: "https://blog.nativescript.org/nativescript-preview-announcement",
  class: "flex flex-col content-center items-center justify-center bg-white px-4 py-2 text-white dark:border-b dark:border-white/10 dark:bg-transparent md:flex-row"
}, [
  /* @__PURE__ */ h("span", { class: "text-sm font-medium text-gray-800 dark:text-white" }, [
    /* @__PURE__ */ h("b", null, "Preview 2.0"),
    /* @__PURE__ */ Le(" is now in Public Beta!")
  ]),
  /* @__PURE__ */ h("div", { class: "ml-2 text-sm font-bold text-gray-900 underline dark:text-white" }, [
    /* @__PURE__ */ Le(" Read the Announcement "),
    /* @__PURE__ */ h("span", { "aria-hidden": "true" }, "→")
  ])
], -1), $h = { class: "nav-bar top-0 z-10 lg:sticky" }, Ph = { class: "bg-ns-blue py-4 backdrop-blur dark:bg-slate-900 dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/80" }, Eh = {
  class: "relative mx-auto flex items-center justify-between px-4 sm:px-6 2xl:container",
  "aria-label": "Global"
}, jh = { class: "flex flex-1 items-center" }, Ch = { class: "flex w-full items-center justify-between lg:w-auto" }, Ah = ["href"], Ih = /* @__PURE__ */ h("span", { class: "sr-only" }, "NativeScript", -1), Th = { class: "flex items-center space-x-4 lg:hidden" }, Dh = { class: "-mr-1 flex items-center" }, Nh = ["aria-expanded"], Lh = /* @__PURE__ */ h("span", { class: "sr-only" }, "Open main menu", -1), Mh = /* @__PURE__ */ h("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M4 6h16M4 12h16M4 18h16"
  })
], -1), Rh = [
  Lh,
  Mh
], Hh = { class: "ml-10 hidden space-x-8 lg:flex" }, Bh = { class: "flex flex-1 justify-center px-2 lg:justify-end" }, Fh = { class: "w-full max-w-xl xl:max-w-xs" }, zh = { class: "hidden lg:flex lg:items-center lg:space-x-6" }, Vh = ["href", "target"], Uh = { class: "relative" }, qh = ["aria-expanded"], Wh = /* @__PURE__ */ h("span", { class: "sr-only" }, "Open additional menu", -1), Kh = /* @__PURE__ */ h("svg", {
  class: "h-6 w-6",
  role: "presentation",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
  })
], -1), Gh = [
  Wh,
  Kh
], Jh = {
  key: 0,
  class: "absolute left-24 z-10 mt-3 w-screen max-w-xs -translate-x-full transform px-2 sm:px-0"
}, Qh = { class: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:shadow-none dark:ring-slate-300/10" }, Yh = { class: "relative grid gap-6 bg-white px-5 py-6 dark:bg-slate-800 sm:gap-8 sm:p-8" }, Zh = ["href", "target"], Xh = { class: "text-base font-medium text-gray-900 dark:text-slate-200" }, e2 = { class: "mt-1 text-sm text-gray-500 dark:text-slate-400" }, t2 = /* @__PURE__ */ h("a", {
  href: "https://github.com/NativeScript/NativeScript",
  target: "_blank",
  rel: "noopener noreferrer",
  class: "inline-flex items-center justify-center rounded-md p-2 text-gray-900 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent dark:text-white dark:hover:text-amber-200",
  "aria-expanded": "false"
}, [
  /* @__PURE__ */ h("span", { class: "sr-only" }, "Open NativeScript GitHub"),
  /* @__PURE__ */ h("svg", {
    class: "h-6 w-6",
    role: "presentation",
    viewBox: "0 0 16 16",
    fill: "currentColor"
  }, [
    /* @__PURE__ */ h("path", {
      "fill-rule": "evenodd",
      d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    })
  ])
], -1), n2 = {
  key: 0,
  class: "absolute inset-x-0 top-0 z-20 origin-top transform p-2 transition lg:hidden"
}, r2 = { class: "overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5" }, o2 = { class: "flex items-center justify-between px-5 pt-4" }, i2 = { class: "-mr-3" }, a2 = /* @__PURE__ */ h("span", { class: "sr-only" }, "Close menu", -1), s2 = /* @__PURE__ */ h("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), l2 = [
  a2,
  s2
], c2 = { class: "pt-5 pb-6" }, u2 = { class: "space-y-1 px-2" }, f2 = ["href", "target"], d2 = /* @__PURE__ */ h("hr", { class: "-mx-2" }, null, -1), p2 = ["href", "target"], h2 = /* @__PURE__ */ L({
  __name: "Header",
  props: {
    nav: {
      type: Array,
      default() {
        return zi.nav;
      }
    },
    flyoutNav: {
      type: Array,
      default() {
        return zi.flyoutNav;
      }
    },
    mainURL: {
      default: "/",
      type: String
    }
  },
  setup(e) {
    const t = A(!1), n = A(!1);
    return (r, o) => (g(), b(z, null, [
      kh,
      h("header", $h, [
        h("div", Ph, [
          h("nav", Eh, [
            h("div", jh, [
              h("div", Ch, [
                h("a", { href: e.mainURL }, [
                  Ih,
                  F(Vi, {
                    class: "h-8 w-auto sm:h-10",
                    "aria-hidden": "true"
                  })
                ], 8, Ah),
                h("div", Th, [
                  F(ns),
                  Te(r.$slots, "right"),
                  h("div", Dh, [
                    h("button", {
                      onClick: o[0] || (o[0] = (i) => t.value = !0),
                      type: "button",
                      class: "-mx-2 inline-flex items-center justify-center rounded-md p-2 text-white focus:bg-white/20 dark:focus:bg-white/10",
                      "aria-expanded": t.value
                    }, Rh, 8, Nh)
                  ])
                ])
              ]),
              h("div", Hh, [
                h("div", Bh, [
                  h("div", Fh, [
                    F(ns)
                  ])
                ])
              ])
            ]),
            h("div", zh, [
              (g(!0), b(z, null, ne(e.nav, (i, a) => (g(), b("a", {
                key: a,
                href: i.link,
                target: i.target,
                class: "border-b-4 border-transparent text-base font-medium text-white hover:border-blue-100"
              }, U(i.text), 9, Vh))), 128)),
              h("div", Uh, [
                h("button", {
                  onClick: o[1] || (o[1] = kt((i) => n.value = !n.value, ["prevent"])),
                  class: te(["relative z-20 inline-flex items-center justify-center rounded-md p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent", {
                    "bg-white text-gray-900": n.value,
                    "text-white hover:text-gray-900 dark:hover:text-slate-400": !n.value
                  }]),
                  role: "button",
                  "aria-expanded": n.value
                }, Gh, 10, qh),
                F(qr, {
                  "enter-from-class": "opacity-0",
                  "enter-to-class": "opacity-100",
                  "leave-from-class": "opacity-100",
                  "leave-to-class": "opacity-0"
                }, {
                  default: he(() => [
                    n.value ? (g(), b("button", {
                      key: 0,
                      tabindex: "-1",
                      onClick: o[2] || (o[2] = (i) => n.value = !1),
                      class: "fixed inset-0 z-10 h-screen w-screen cursor-default bg-slate-300/40 transition duration-200 dark:bg-slate-900/70"
                    })) : V("", !0)
                  ]),
                  _: 1
                }),
                F(qr, {
                  "enter-active-class": "transition duration-200 ease-out",
                  "enter-from-class": "translate-y-1 opacity-0",
                  "enter-to-class": "translate-y-0 opacity-100",
                  "leave-active-class": "transition duration-150 ease-in",
                  "leave-from-class": "translate-y-0 opacity-100",
                  "leave-to-class": "translate-y-1 opacity-0"
                }, {
                  default: he(() => [
                    n.value ? (g(), b("div", Jh, [
                      h("div", Qh, [
                        h("div", Yh, [
                          (g(!0), b(z, null, ne(e.flyoutNav, (i, a) => (g(), b("a", {
                            key: a,
                            href: i.link,
                            target: i.target,
                            class: "-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50 dark:hover:bg-slate-700/50"
                          }, [
                            h("p", Xh, U(i.text), 1),
                            h("p", e2, U(i.description), 1)
                          ], 8, Zh))), 128))
                        ])
                      ])
                    ])) : V("", !0)
                  ]),
                  _: 1
                })
              ]),
              Te(r.$slots, "right"),
              t2
            ])
          ])
        ]),
        F(qr, {
          "enter-active-class": "duration-150 ease-out",
          "enter-from-class": "scale-95 opacity-0",
          "enter-to-class": "scale-100 opacity-100",
          "leave-active-class": "duration-100 ease-in",
          "leave-from-class": "scale-100 opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: he(() => [
            t.value ? (g(), b("div", n2, [
              h("div", r2, [
                h("div", o2, [
                  h("div", null, [
                    F(Vi, {
                      class: "h-8 w-auto",
                      variant: "blue",
                      "aria-hidden": "true"
                    })
                  ]),
                  h("div", i2, [
                    h("button", {
                      onClick: o[3] || (o[3] = (i) => t.value = !1),
                      type: "button",
                      class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    }, l2)
                  ])
                ]),
                h("div", c2, [
                  h("div", u2, [
                    (g(!0), b(z, null, ne(e.nav, (i, a) => (g(), b("a", {
                      key: a,
                      onClick: o[4] || (o[4] = (s) => t.value = !1),
                      href: i.link,
                      target: i.target,
                      class: "block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    }, U(i.text), 9, f2))), 128)),
                    d2,
                    (g(!0), b(z, null, ne(e.flyoutNav, (i, a) => (g(), b("a", {
                      key: a,
                      onClick: o[5] || (o[5] = (s) => t.value = !1),
                      href: i.link,
                      target: i.target,
                      class: "block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                    }, U(i.text), 9, p2))), 128))
                  ])
                ])
              ])
            ])) : V("", !0)
          ]),
          _: 1
        })
      ])
    ], 64));
  }
});
const m2 = {}, v2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "h-5 w-5"
}, g2 = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z",
  "clip-rule": "evenodd"
}, null, -1), y2 = [
  g2
];
function _2(e, t) {
  return g(), b("svg", v2, y2);
}
const b2 = /* @__PURE__ */ jt(m2, [["render", _2]]), w2 = {
  class: "flex",
  "aria-label": "Breadcrumb"
}, S2 = {
  role: "list",
  class: "flex items-center space-x-3"
}, x2 = {
  href: "/",
  class: "text-slate-400 hover:text-slate-500 dark:hover:text-cyan-300"
}, O2 = /* @__PURE__ */ h("span", { class: "sr-only" }, "Home", -1), k2 = { class: "flex items-center" }, $2 = /* @__PURE__ */ L({
  __name: "Breadcrumbs",
  setup(e) {
    const t = Fn(), { page: n, frontmatter: r } = De(), o = T(() => Yo(t.value)), i = T(() => {
      if (r.value.breadcrumbs)
        return r.value.breadcrumbs.map(
          ({ name: l, href: u }, c) => {
            const f = u === n.value.relativePath || c === r.value.breadcrumbs.length - 1;
            return {
              name: l,
              href: f ? void 0 : u,
              current: f
            };
          }
        );
      const a = [];
      let s = o.value.find((l) => Et(n.value.relativePath, l.link));
      if (!s) {
        const { category: l, categoryLink: u } = n.value.frontmatter;
        return [
          ...l ? [
            {
              name: l,
              href: u
            }
          ] : [],
          {
            name: n.value.title,
            href: n.value.relativePath,
            current: !0
          }
        ];
      }
      for (a.push({
        name: s.text,
        href: s.link,
        current: !0
      }); s = s.parent; ) {
        let l;
        s.hidden ? !s.href && s.parent : l = s.link, a.unshift({
          name: s.text,
          href: l,
          current: !1
        });
      }
      return a;
    });
    return (a, s) => (g(), b("nav", w2, [
      h("ol", S2, [
        h("li", null, [
          h("div", null, [
            h("a", x2, [
              F(b2, {
                class: "flex-shrink-0",
                "aria-hidden": "true"
              }),
              O2
            ])
          ])
        ]),
        (g(!0), b(z, null, ne(P(i), (l) => (g(), b("li", {
          key: l.name
        }, [
          h("div", k2, [
            F(ar, {
              class: "flex-shrink-0 text-slate-400 dark:text-slate-500",
              "aria-hidden": "true"
            }),
            (g(), ue(Mn(l.href ? "a" : "div"), {
              href: l.href,
              class: te(["ml-3 text-sm font-medium text-slate-500 dark:text-slate-400", {
                "hover:text-slate-700 dark:hover:text-cyan-300": l.href,
                "font-semibold": l.current
              }]),
              "aria-current": l.current ? "page" : void 0
            }, {
              default: he(() => [
                Le(U(l.name), 1)
              ]),
              _: 2
            }, 1032, ["href", "class", "aria-current"]))
          ])
        ]))), 128))
      ])
    ]));
  }
}), P2 = { key: 0 }, E2 = /* @__PURE__ */ h("h4", { class: "text-sm font-bold text-gray-900 dark:text-white" }, " Contributors ", -1), j2 = { class: "mt-2 flex -space-x-1 overflow-hidden" }, C2 = ["href"], A2 = ["src", "alt"], I2 = /* @__PURE__ */ L({
  __name: "ContributorsList",
  setup(e) {
    const { page: t } = De(), n = T(() => {
      var r;
      return (r = t.value.frontmatter) == null ? void 0 : r.contributors;
    });
    return (r, o) => {
      const i = wc("tooltip");
      return P(n).length ? (g(), b("div", P2, [
        E2,
        h("div", j2, [
          (g(!0), b(z, null, ne(P(n), (a) => qt((g(), b("a", {
            href: a.profileURL,
            target: "_blank"
          }, [
            h("img", {
              class: "inline-block h-6 w-6 cursor-pointer rounded-full ring-2 ring-white dark:ring-slate-800",
              src: a.avatarURL,
              alt: a.username
            }, null, 8, A2)
          ], 8, C2)), [
            [i, a.username]
          ])), 256))
        ])
      ])) : V("", !0);
    };
  }
}), T2 = { class: "text-xs text-slate-500" }, D2 = ["datatime"], N2 = /* @__PURE__ */ L({
  __name: "LastUpdatedLabel",
  setup(e) {
    const { theme: t, page: n } = De(), r = T(() => {
      if (n.value.lastUpdated)
        return new Date(n.value.lastUpdated);
    }), o = T(() => {
      var a;
      return (a = r.value) == null ? void 0 : a.toISOString();
    }), i = A();
    return le(() => {
      ke(() => {
        var a;
        i.value = (a = r.value) == null ? void 0 : a.toLocaleString(window.navigator.language);
      });
    }), (a, s) => qt((g(), b("p", T2, [
      Le(U(P(t).lastUpdatedText ?? "Last updated") + ": ", 1),
      h("time", { datatime: P(o) }, U(i.value), 9, D2)
    ], 512)), [
      [dr, i.value]
    ]);
  }
});
var L2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function M2(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ql = { exports: {} };
/*!
  * vue-scrollto v2.20.0
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(L2, function() {
    function n(R) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? n = function(O) {
        return typeof O;
      } : n = function(O) {
        return O && typeof Symbol == "function" && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O;
      }, n(R);
    }
    function r() {
      return r = Object.assign || function(R) {
        for (var O = 1; O < arguments.length; O++) {
          var D = arguments[O];
          for (var K in D)
            Object.prototype.hasOwnProperty.call(D, K) && (R[K] = D[K]);
        }
        return R;
      }, r.apply(this, arguments);
    }
    var o = 4, i = 1e-3, a = 1e-7, s = 10, l = 11, u = 1 / (l - 1), c = typeof Float32Array == "function";
    function f(R, O) {
      return 1 - 3 * O + 3 * R;
    }
    function d(R, O) {
      return 3 * O - 6 * R;
    }
    function p(R) {
      return 3 * R;
    }
    function v(R, O, D) {
      return ((f(O, D) * R + d(O, D)) * R + p(O)) * R;
    }
    function y(R, O, D) {
      return 3 * f(O, D) * R * R + 2 * d(O, D) * R + p(O);
    }
    function _(R, O, D, K, X) {
      var ie, ee, Ue = 0;
      do
        ee = O + (D - O) / 2, ie = v(ee, K, X) - R, ie > 0 ? D = ee : O = ee;
      while (Math.abs(ie) > a && ++Ue < s);
      return ee;
    }
    function w(R, O, D, K) {
      for (var X = 0; X < o; ++X) {
        var ie = y(O, D, K);
        if (ie === 0)
          return O;
        var ee = v(O, D, K) - R;
        O -= ee / ie;
      }
      return O;
    }
    function S(R) {
      return R;
    }
    var x = function(O, D, K, X) {
      if (!(0 <= O && O <= 1 && 0 <= K && K <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      if (O === D && K === X)
        return S;
      for (var ie = c ? new Float32Array(l) : new Array(l), ee = 0; ee < l; ++ee)
        ie[ee] = v(ee * u, O, K);
      function Ue(Se) {
        for (var de = 0, ae = 1, mt = l - 1; ae !== mt && ie[ae] <= Se; ++ae)
          de += u;
        --ae;
        var je = (Se - ie[ae]) / (ie[ae + 1] - ie[ae]), Fe = de + je * u, tt = y(Fe, O, K);
        return tt >= i ? w(Se, Fe, O, K) : tt === 0 ? Fe : _(Se, de, de + u, O, K);
      }
      return function(de) {
        return de === 0 ? 0 : de === 1 ? 1 : v(Ue(de), D, X);
      };
    }, $ = {
      ease: [0.25, 0.1, 0.25, 1],
      linear: [0, 0, 1, 1],
      "ease-in": [0.42, 0, 1, 1],
      "ease-out": [0, 0, 0.58, 1],
      "ease-in-out": [0.42, 0, 0.58, 1]
    }, k = !1;
    try {
      var N = Object.defineProperty({}, "passive", {
        get: function() {
          k = !0;
        }
      });
      window.addEventListener("test", null, N);
    } catch {
    }
    var C = {
      $: function(O) {
        return typeof O != "string" ? O : document.querySelector(O);
      },
      on: function(O, D, K) {
        var X = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
          passive: !1
        };
        D instanceof Array || (D = [D]);
        for (var ie = 0; ie < D.length; ie++)
          O.addEventListener(D[ie], K, k ? X : !1);
      },
      off: function(O, D, K) {
        D instanceof Array || (D = [D]);
        for (var X = 0; X < D.length; X++)
          O.removeEventListener(D[X], K);
      },
      cumulativeOffset: function(O) {
        var D = 0, K = 0;
        do
          D += O.offsetTop || 0, K += O.offsetLeft || 0, O = O.offsetParent;
        while (O);
        return {
          top: D,
          left: K
        };
      }
    }, E = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"], j = {
      container: "body",
      duration: 500,
      lazy: !0,
      easing: "ease",
      offset: 0,
      force: !0,
      cancelable: !0,
      onStart: !1,
      onDone: !1,
      onCancel: !1,
      x: !1,
      y: !0
    };
    function I(R) {
      j = r({}, j, R);
    }
    var H = function() {
      var O, D, K, X, ie, ee, Ue, Se, de, ae, mt, je, Fe, tt, Ct, B, G, ce, pe, ye, Ce, re, Pe, qe = function(ve) {
        Se && (Pe = ve, ye = !0);
      }, Vn, At, vt, nt;
      function Zt(_e) {
        var ve = _e.scrollTop;
        return _e.tagName.toLowerCase() === "body" && (ve = ve || document.documentElement.scrollTop), ve;
      }
      function Ur(_e) {
        var ve = _e.scrollLeft;
        return _e.tagName.toLowerCase() === "body" && (ve = ve || document.documentElement.scrollLeft), ve;
      }
      function Ae() {
        Ce = C.cumulativeOffset(D), re = C.cumulativeOffset(O), je && (Ct = re.left - Ce.left + ee, ce = Ct - tt), Fe && (G = re.top - Ce.top + ee, pe = G - B);
      }
      function rt(_e) {
        if (ye)
          return gt();
        At || (At = _e), ie || Ae(), vt = _e - At, nt = Math.min(vt / K, 1), nt = Vn(nt), Xt(D, B + pe * nt, tt + ce * nt), vt < K ? window.requestAnimationFrame(rt) : gt();
      }
      function gt() {
        ye || Xt(D, G, Ct), At = !1, C.off(D, E, qe), ye && mt && mt(Pe, O), !ye && ae && ae(O);
      }
      function Xt(_e, ve, oe) {
        Fe && (_e.scrollTop = ve), je && (_e.scrollLeft = oe), _e.tagName.toLowerCase() === "body" && (Fe && (document.documentElement.scrollTop = ve), je && (document.documentElement.scrollLeft = oe));
      }
      function Un(_e, ve) {
        var oe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (n(ve) === "object" ? oe = ve : typeof ve == "number" && (oe.duration = ve), O = C.$(_e), !O)
          return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: " + _e);
        if (D = C.$(oe.container || j.container), K = oe.hasOwnProperty("duration") ? oe.duration : j.duration, ie = oe.hasOwnProperty("lazy") ? oe.lazy : j.lazy, X = oe.easing || j.easing, ee = oe.hasOwnProperty("offset") ? oe.offset : j.offset, Ue = oe.hasOwnProperty("force") ? oe.force !== !1 : j.force, Se = oe.hasOwnProperty("cancelable") ? oe.cancelable !== !1 : j.cancelable, de = oe.onStart || j.onStart, ae = oe.onDone || j.onDone, mt = oe.onCancel || j.onCancel, je = oe.x === void 0 ? j.x : oe.x, Fe = oe.y === void 0 ? j.y : oe.y, typeof ee == "function" && (ee = ee(O, D)), tt = Ur(D), B = Zt(D), Ae(), ye = !1, !Ue) {
          var tc = D.tagName.toLowerCase() === "body" ? document.documentElement.clientHeight || window.innerHeight : D.offsetHeight, ti = B, nc = ti + tc, ni = G - ee, rc = ni + O.offsetHeight;
          if (ni >= ti && rc <= nc) {
            ae && ae(O);
            return;
          }
        }
        if (de && de(O), !pe && !ce) {
          ae && ae(O);
          return;
        }
        return typeof X == "string" && (X = $[X] || $.ease), Vn = x.apply(x, X), C.on(D, E, qe, {
          passive: !0
        }), window.requestAnimationFrame(rt), function() {
          Pe = null, ye = !0;
        };
      }
      return Un;
    }, J = H(), Y = [];
    function q(R) {
      for (var O = 0; O < Y.length; ++O)
        if (Y[O].el === R)
          return Y.splice(O, 1), !0;
      return !1;
    }
    function ge(R) {
      for (var O = 0; O < Y.length; ++O)
        if (Y[O].el === R)
          return Y[O];
    }
    function Be(R) {
      var O = ge(R);
      return O || (Y.push(O = {
        el: R,
        binding: {}
      }), O);
    }
    function Ne(R) {
      var O = Be(this).binding;
      if (O.value) {
        if (R.preventDefault(), typeof O.value == "string")
          return J(O.value);
        J(O.value.el || O.value.element, O.value);
      }
    }
    var fe = {
      bind: function(O, D) {
        Be(O).binding = D, C.on(O, "click", Ne);
      },
      unbind: function(O) {
        q(O), C.off(O, "click", Ne);
      },
      update: function(O, D) {
        Be(O).binding = D;
      }
    }, ht = {
      bind: fe.bind,
      unbind: fe.unbind,
      update: fe.update,
      beforeMount: fe.bind,
      unmounted: fe.unbind,
      updated: fe.update,
      scrollTo: J,
      bindings: Y
    }, Yt = function(O, D) {
      D && I(D), O.directive("scroll-to", ht);
      var K = O.config.globalProperties || O.prototype;
      K.$scrollTo = ht.scrollTo;
    };
    return typeof window < "u" && window.Vue && (window.VueScrollTo = ht, window.VueScrollTo.setDefaults = I, window.VueScrollTo.scroller = H, window.Vue.use && window.Vue.use(Yt)), ht.install = Yt, ht;
  });
})(Ql);
var R2 = Ql.exports;
const Yl = /* @__PURE__ */ M2(R2), H2 = /* @__PURE__ */ h("div", { class: "text-sm font-semibold leading-6 text-gray-900 dark:text-white" }, " On this page ", -1), B2 = { class: "mt-4 text-sm leading-6 text-slate-700 dark:text-slate-400" }, F2 = ["onClick"], z2 = ["href"], V2 = { key: 0 }, U2 = { class: "" }, q2 = ["href"], W2 = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "h-6 w-6 overflow-visible p-1 text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
}, [
  /* @__PURE__ */ h("path", {
    "fill-rule": "evenodd",
    d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
    "clip-rule": "evenodd"
  })
], -1), K2 = { class: "truncate" }, G2 = /* @__PURE__ */ L({
  __name: "OnThisPage",
  setup(e) {
    const { page: t } = De(), n = T(() => t.value.headers), r = T(() => n.value.flatMap((f) => [
      f.link,
      ...f.children.map((d) => d.link)
    ]).map((f) => {
      if (f.charAt(0) === "#")
        return f.substring(1);
    }).filter(Boolean));
    function o(f) {
      if (!lo)
        return -1;
      let d = document.getElementById(f);
      if (!d)
        return -1;
      let p = window.getComputedStyle(d), v = parseFloat(p.scrollMarginTop), y = parseFloat(p.marginTop);
      return window.scrollY + d.getBoundingClientRect().top - v - y - 5;
    }
    const i = A(r.value[0]), { y: a } = kd();
    ke(() => {
      let f;
      for (const d of r.value)
        a.value >= o(d) && (f = d);
      i.value = f ?? r.value[0];
    });
    function s(f) {
      return lo ? f.link.substring(1) === i.value ? !0 : f.children ? f.children.findIndex(s) > -1 : !1 : !1;
    }
    function l({ target: f }) {
      const d = "#" + f.href.split("#")[1], p = document.querySelector(
        decodeURIComponent(d)
      );
      p == null || p.focus();
    }
    const u = T(() => (f) => {
      const d = s(f) ? "text-blue-500 dark:text-cyan-400" : "hover:text-slate-900 dark:hover:text-slate-300", p = f.title.includes(" ") ? "break-words" : "break-all";
      return d + " " + p;
    }), c = () => {
      Yl.scrollTo("#top", 200, {
        force: !0
      });
    };
    return (f, d) => (g(), b(z, null, [
      H2,
      h("ol", B2, [
        h("li", null, [
          h("button", {
            href: "#top",
            onClick: kt(c, ["prevent"]),
            class: "block py-1 font-medium opacity-50 transition-opacity hover:text-slate-900 hover:opacity-100 dark:hover:text-slate-300"
          }, " ↑ Top ", 8, F2)
        ]),
        (g(!0), b(z, null, ne(P(n), (p) => (g(), b("li", null, [
          h("a", {
            href: p.link,
            onClick: l,
            class: te([
              "block py-1 font-medium",
              s(p) ? "text-blue-500 dark:text-cyan-400" : "hover:text-slate-900 dark:hover:text-slate-300"
            ])
          }, U(p.title), 11, z2),
          p.children ? (g(), b("ol", V2, [
            (g(!0), b(z, null, ne(p.children, (v) => (g(), b("li", U2, [
              h("a", {
                href: v.link,
                onClick: l,
                class: te(["group flex items-start py-1", P(u)(v)])
              }, [
                W2,
                h("span", K2, U(v.title), 1)
              ], 10, q2)
            ]))), 256))
          ])) : V("", !0)
        ]))), 256))
      ])
    ], 64));
  }
});
function J2() {
  const { frontmatter: e, page: t } = De();
  return T(() => {
    const n = Fn(), r = Yo(n.value).filter(
      (s) => !!s.link
    ), o = r.findIndex((s) => Et(t.value.relativePath, s.link)), i = e.value.prev ? r.find((s) => s.link === e.value.prev) : r[o - 1], a = e.value.next ? r.find((s) => s.link === e.value.next) : r[o + 1];
    return {
      prev: e.value.prev !== !1 && i && { ...i, text: e.value.prevText ?? i.text },
      next: e.value.next !== !1 && a && { ...a, text: e.value.nextText ?? a.text }
    };
  });
}
const Q2 = { class: "mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800" }, Y2 = { key: 0 }, Z2 = /* @__PURE__ */ h("dt", { class: "font-display text-sm font-medium text-slate-900 dark:text-white" }, " Previous ", -1), X2 = { class: "mt-1" }, em = ["href"], tm = /* @__PURE__ */ h("span", { "aria-hidden": "true" }, "←", -1), nm = ["innerHTML"], rm = {
  key: 1,
  class: "ml-auto text-right"
}, om = /* @__PURE__ */ h("dt", { class: "font-display text-sm font-medium text-slate-900 dark:text-white" }, " Next ", -1), im = { class: "mt-1" }, am = ["href"], sm = ["innerHTML"], lm = /* @__PURE__ */ h("span", { "aria-hidden": "true" }, "→", -1), cm = /* @__PURE__ */ L({
  __name: "PrevNextLinks",
  setup(e) {
    const t = J2();
    return (n, r) => (g(), b("dl", Q2, [
      P(t).prev ? (g(), b("div", Y2, [
        Z2,
        h("dd", X2, [
          h("a", {
            href: P(t).prev.link,
            class: "text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          }, [
            tm,
            h("span", {
              innerHTML: P(t).prev.text
            }, null, 8, nm)
          ], 8, em)
        ])
      ])) : V("", !0),
      P(t).next ? (g(), b("div", rm, [
        om,
        h("dd", im, [
          h("a", {
            href: P(t).next.link,
            class: "text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          }, [
            h("span", {
              innerHTML: P(t).next.text
            }, null, 8, sm),
            lm
          ], 8, am)
        ])
      ])) : V("", !0)
    ]));
  }
});
function um() {
  const { theme: e, page: t } = De(), n = Nn();
  return T(() => {
    const { text: r = "Edit this page", pattern: o } = e.value.editLink || {}, { relativePath: i } = t.value, a = n.path;
    return { url: o.replace(/:path/g, a).replace(/:filePath/g, i), text: r };
  });
}
const fm = {
  id: "content",
  class: "static max-h-full w-full min-w-0 flex-auto overflow-y-visible"
}, dm = { class: "flex w-full" }, pm = { class: "min-w-0 flex-auto" }, hm = /* @__PURE__ */ h("div", { class: "mx-2 rounded-b-md bg-amber-100/70 px-4 py-2 text-amber-900 dark:mt-px dark:bg-amber-400/10 dark:text-amber-300 dark:ring-1 dark:ring-amber-300/30" }, [
  /* @__PURE__ */ h("strong", null, "Note:"),
  /* @__PURE__ */ Le(" You are on the beta version of our docs. This is a work in progress and may contain broken links and pages. ")
], -1), mm = { class: "mt-4 flex h-[42px] items-center" }, vm = { class: "px-6 pt-10 pb-[70vh] xl:px-10" }, gm = {
  key: 0,
  id: "header"
}, ym = {
  key: 0,
  class: "mb-2 text-base font-semibold leading-6 text-blue-500 dark:text-cyan-400"
}, _m = { class: "text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl" }, bm = { class: "mt-2 text-lg text-slate-700 dark:text-slate-400" }, wm = { class: "hidden w-72 flex-none xl:block" }, Sm = { class: "h-sidebar sticky top-[72px] overflow-y-auto overflow-x-hidden" }, xm = { class: "pt-16 pb-10 pr-3" }, Om = ["href", "target"], km = /* @__PURE__ */ L({
  __name: "default",
  setup(e) {
    const { page: t } = De(), n = um(), r = Fn(), o = T(() => Yo(r.value)), i = T(() => o.value.find(
      (l) => Et(t.value.relativePath, l.link)
    )), a = T(() => {
      var l;
      return t.value.title ? t.value.title : ((l = i.value) == null ? void 0 : l.text) ?? !1;
    }), s = T(() => {
      if (t.value.frontmatter.category)
        return t.value.frontmatter.category;
      let l = i.value;
      for (; l != null && l.parent; )
        l = l.parent;
      return (l == null ? void 0 : l.text) ?? !1;
    });
    return (l, u) => {
      const c = Oe("Content");
      return g(), b("div", fm, [
        h("div", dm, [
          h("div", pm, [
            hm,
            h("div", mm, [
              F($2, { class: "px-6 xl:px-10" })
            ]),
            h("div", vm, [
              P(a) ? (g(), b("header", gm, [
                P(s) ? (g(), b("p", ym, U(P(s)), 1)) : V("", !0),
                h("h1", _m, U(P(a)), 1),
                h("p", bm, U(P(t).description), 1)
              ])) : V("", !0),
              F(c, { class: "prose-headings:font-display prose prose-slate mx-auto max-w-none prose-a:font-semibold prose-lead:text-slate-500 dark:prose-invert dark:prose-a:text-cyan-400 dark:prose-hr:border-slate-800 dark:prose-lead:text-slate-400" }),
              F(cm)
            ])
          ]),
          h("div", wm, [
            h("div", Sm, [
              h("div", xm, [
                F(G2),
                P(t).frontmatter.layout !== "api" ? (g(), b(z, { key: 0 }, [
                  F(I2, { class: "mt-4" }),
                  h("a", {
                    href: P(n).url,
                    target: P(n).url.startsWith("http") ? "_blank" : "_self",
                    class: "mt-4 block rounded-md border border-gray-400 bg-white px-4 py-2 text-center text-sm text-gray-700 hover:border-gray-600 hover:text-gray-900 dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:border-white/40"
                  }, U(P(n).text), 9, Om),
                  F(N2, { class: "mt-2" })
                ], 64)) : V("", !0)
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), $m = {
  id: "content",
  class: "static max-h-full w-full min-w-0 flex-auto overflow-y-visible"
}, Pm = { class: "flex w-full" }, Em = { class: "min-w-0 flex-auto" }, jm = { class: "px-6 pt-10 xl:px-10" }, Cm = /* @__PURE__ */ h("header", { id: "header" }, [
  /* @__PURE__ */ h("h1", { class: "text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-4xl" }, " 404 "),
  /* @__PURE__ */ h("h2", { class: "mt-2 text-xl font-semibold text-slate-900 dark:text-slate-400 sm:text-3xl" }, " Page Not Found ")
], -1), Am = { class: "prose-headings:font-display prose prose-slate mx-auto mt-4 max-w-none prose-a:font-semibold prose-lead:text-slate-500 dark:prose-invert dark:prose-a:text-cyan-400 dark:prose-hr:border-slate-800 dark:prose-lead:text-slate-400" }, Im = /* @__PURE__ */ h("p", null, " This page doesn't exist or has been removed. Perhaps not included in the docs yet? ", -1), Tm = /* @__PURE__ */ h("a", {
  href: "/",
  class: "rounded-md bg-blue-500 px-4 py-2 text-lg text-white no-underline"
}, "Go Home", -1), Dm = /* @__PURE__ */ h("p", null, "Here are some links that may be what you are looking for:", -1), Nm = ["href"], Ar = /* @__PURE__ */ L({
  __name: "NotFound",
  setup(e) {
    const t = Nn(), n = A([]);
    return console.log(t.path), le(() => {
      n.value.push(`https://v7.docs.nativescript.org${t.path}`), n.value.push(`https://v6.docs.nativescript.org${t.path}`), n.value.push("https://v7.docs.nativescript.org"), n.value.push("https://v6.docs.nativescript.org");
    }), (r, o) => (g(), b("div", $m, [
      h("div", Pm, [
        h("div", Em, [
          h("div", jm, [
            Cm,
            h("div", Am, [
              Im,
              Tm,
              Dm,
              h("ul", null, [
                (g(!0), b(z, null, ne(n.value, (i) => (g(), b("li", { key: i }, [
                  h("a", {
                    href: i,
                    target: "_blank"
                  }, U(i), 9, Nm)
                ]))), 128))
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}), Lm = {
  id: "top",
  class: "min-h-screen font-sans antialiased"
}, Mm = { class: "mx-auto lg:px-6 2xl:container" }, Rm = { class: "flex" }, Hm = { class: "hidden lg:relative lg:block lg:flex-none" }, Bm = /* @__PURE__ */ h("div", { class: "absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" }, null, -1), Fm = /* @__PURE__ */ h("div", { class: "absolute top-12 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" }, null, -1), zm = /* @__PURE__ */ h("div", { class: "absolute top-24 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" }, null, -1), Vm = { class: "h-sidebar sticky top-[72px] overflow-y-auto overflow-x-hidden overscroll-contain" }, Um = { class: "w-64 pt-4 pr-4 pb-16 xl:w-72" }, qm = { class: "flex items-center" }, Wm = /* @__PURE__ */ L({
  __name: "Layout",
  setup(e) {
    const { theme: t } = De(), n = Nn();
    return (r, o) => (g(), b("div", Lm, [
      F(P(h2), {
        mainURL: P(t).mainURL
      }, {
        right: he(() => [
          F(Ad)
        ]),
        _: 1
      }, 8, ["mainURL"]),
      F(lp),
      h("div", Mm, [
        h("div", Rm, [
          h("div", Hm, [
            Bm,
            Fm,
            zm,
            h("div", Vm, [
              h("div", Um, [
                h("div", qm, [
                  F(Nd, { class: "flex-1" })
                ]),
                F(Up, { class: "mt-6" }),
                F(Hp, { class: "mt-8" })
              ])
            ])
          ]),
          P(n).component === Ar ? (g(), ue(Ar, { key: 0 })) : (g(), ue(km, { key: 1 }))
        ])
      ])
    ]));
  }
});
const Km = { class: "mt-10 mb-16" }, Gm = { class: "border-b border-gray-200 dark:border-white/5" }, Jm = { class: "z-10 -mb-px flex" }, Qm = ["onClick"], Ym = /* @__PURE__ */ L({
  __name: "FlavorTabs",
  setup(e) {
    const { value: t, set: n } = sl(), r = A([]), o = A(), i = A(), a = () => {
      i.value && (r.value = [], Array.from(i.value.children).map((l, u) => {
        l.classList.add("hidden"), r.value.push({
          title: l.dataset.tabTitle,
          index: u,
          show() {
            l.classList.remove("hidden");
          },
          hide() {
            l.classList.add("hidden");
          }
        });
      }), r.value.sort(function(l, u) {
        return l.title.localeCompare(u.title);
      }), o.value = r.value.find((l) => l.title === t.value) ?? r.value[0]);
    };
    le(() => {
      a();
    }), $e(o, (l, u) => {
      u == null || u.hide(), l == null || l.show();
    }), $e(t, () => {
      const l = r.value.find((u) => u.title.toLowerCase() === t.value) ?? r.value[0];
      o.value = l;
    });
    function s(l, u) {
      const c = l.target, f = Math.round(c.getBoundingClientRect().top);
      o.value = u, n(u.title.toLowerCase()), Ln(() => {
        Yl.scrollTo(c, 0, {
          offset: -f,
          force: !0,
          cancelable: !1
        });
      });
    }
    return (l, u) => (g(), b("div", Km, [
      h("div", Gm, [
        h("div", Jm, [
          (g(!0), b(z, null, ne(r.value, (c) => (g(), b("button", {
            key: c.index,
            class: te(["whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium uppercase focus:outline-none", {
              "border-ns-blue text-ns-blue focus:border-ns-blue dark:border-cyan-300 dark:text-cyan-300 dark:focus:border-cyan-300": o.value === c,
              "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 dark:text-white/90": o.value !== c
            }]),
            onClick: kt((f) => s(f, c), ["prevent"])
          }, U(c.title), 11, Qm))), 128))
        ])
      ]),
      h("div", {
        class: "tab-container relative -mt-px rounded-md rounded-t-none border px-4 shadow-lg dark:border-transparent dark:shadow-cyan-300/5",
        ref_key: "tabContainer",
        ref: i
      }, [
        Te(l.$slots, "default")
      ], 512)
    ]));
  }
}), Zm = { class: "mt-10 mb-4" }, Xm = { class: "" }, ev = { class: "z-10 flex rounded-t-md border border-white/10 bg-gray-900 dark:bg-transparent" }, tv = ["onClick"], nv = /* @__PURE__ */ L({
  __name: "CodeTabs",
  setup(e) {
    const t = A(0), n = A(), r = A([]), o = () => {
      n.value && (r.value = [], Array.from(n.value.children).map((i, a) => {
        a !== t.value && i.classList.add("hidden"), r.value.push({
          title: i.dataset.tabTitle,
          index: a
        });
      }));
    };
    return le(() => {
      o();
    }), $e(t, (i, a) => {
      var s, l;
      (s = n.value) == null || s.children[a].classList.add("hidden"), (l = n.value) == null || l.children[i].classList.remove("hidden");
    }), (i, a) => (g(), b("div", Zm, [
      h("div", Xm, [
        h("div", ev, [
          (g(!0), b(z, null, ne(r.value, (s) => (g(), b("button", {
            key: s.index,
            class: te(["whitespace-nowrap border-b px-6 py-3 text-sm font-medium focus:outline-none", {
              "border-cyan-300 text-cyan-200 focus:border-cyan-300": t.value === s.index,
              "border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-100 focus:border-gray-300": t.value !== s.index
            }]),
            onClick: kt((l) => t.value = s.index, ["prevent"])
          }, U(s.title), 11, tv))), 128))
        ])
      ]),
      h("div", {
        class: "code-tab-container",
        ref_key: "tabContainer",
        ref: n
      }, [
        Te(i.$slots, "default")
      ], 512)
    ]));
  }
});
const rv = { class: "flex flex-col" }, ov = {
  key: 0,
  class: "flex h-5 items-center justify-center"
}, iv = /* @__PURE__ */ h("div", { class: "h-5 w-20 rounded-full ring-1 ring-ns-blue dark:ring-cyan-700" }, null, -1), av = /* @__PURE__ */ h("div", { class: "ml-4 h-5 w-5 rounded-full ring-1 ring-ns-blue dark:ring-cyan-700" }, null, -1), sv = [
  iv,
  av
], lv = {
  key: 1,
  class: "flex h-5 items-center justify-center"
}, cv = /* @__PURE__ */ h("span", { class: "flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-ns-blue dark:ring-cyan-700" }, [
  /* @__PURE__ */ h("span", { class: "absolute h-0.5 w-0.5 rounded-full bg-ns-blue dark:bg-white" })
], -1), uv = [
  cv
], fv = {
  key: 2,
  class: "flex h-2 items-center justify-start px-4"
}, dv = {
  key: 0,
  class: "mr-4 flex items-center space-x-2"
}, pv = /* @__PURE__ */ h("span", { class: "flex h-3 w-3 items-center justify-center rounded-full bg-red-400" }, null, -1), hv = /* @__PURE__ */ h("span", { class: "flex h-3 w-3 items-center justify-center rounded-full bg-orange-400" }, null, -1), mv = /* @__PURE__ */ h("span", { class: "flex h-3 w-3 items-center justify-center rounded-full bg-green-500" }, null, -1), vv = [
  pv,
  hv,
  mv
], gv = {
  key: 1,
  class: "font-mono text-sm text-slate-900 dark:text-white"
}, yv = /* @__PURE__ */ L({
  __name: "DeviceFrame",
  props: {
    type: null,
    title: { type: [String, Boolean], default: "~/" },
    buttons: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (t, n) => (g(), b("div", {
      class: te(["device not-prose mr-6 inline-flex rounded-[36px] ring-1 ring-ns-blue dark:ring-cyan-700", {
        "rounded-[36px] p-4": e.type === "ios",
        "rounded-[16px] p-4": e.type === "android",
        "rounded-[16px] pt-4": e.type === "window"
      }])
    }, [
      h("div", rv, [
        e.type === "ios" ? (g(), b("div", ov, sv)) : e.type === "android" ? (g(), b("div", lv, uv)) : e.type === "window" ? (g(), b("div", fv, [
          e.buttons !== !1 ? (g(), b("div", dv, vv)) : V("", !0),
          e.title !== !1 ? (g(), b("span", gv, U(e.title ?? "~/"), 1)) : V("", !0)
        ])) : V("", !0),
        h("div", {
          class: te(["relative mt-4 overflow-hidden ring-1 ring-ns-blue dark:ring-cyan-700", {
            "rounded-b-[20px]": e.type === "ios",
            "rounded-b-[4px]": e.type === "android",
            "rounded-b-[16px]": e.type === "window"
          }])
        }, [
          Te(t.$slots, "default")
        ], 2)
      ])
    ], 2));
  }
});
const _v = /* @__PURE__ */ L({
  __name: "Heading",
  props: {
    ignore: { type: Boolean }
  },
  setup(e) {
    return (t, n) => Te(t.$slots, "default");
  }
}), bv = { class: "not-prose" }, wv = ["href"], Sv = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "ml-3 h-5 w-5"
}, [
  /* @__PURE__ */ h("path", {
    "fill-rule": "evenodd",
    d: "M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z",
    "clip-rule": "evenodd"
  }),
  /* @__PURE__ */ h("path", {
    "fill-rule": "evenodd",
    d: "M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z",
    "clip-rule": "evenodd"
  })
], -1), xv = /* @__PURE__ */ L({
  __name: "ExternalButtonLink",
  props: {
    href: null,
    text: null
  },
  setup(e) {
    return (t, n) => (g(), b("div", bv, [
      h("a", {
        href: e.href,
        target: "_blank",
        class: "inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-400 dark:bg-cyan-500 dark:text-slate-900 dark:hover:bg-cyan-400"
      }, [
        Le(U(e.text) + " ", 1),
        Sv
      ], 8, wv)
    ]));
  }
}), Ov = {}, kv = {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "xml:space": "preserve",
  "xmlns:serif": "http://www.serif.com/",
  style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
}, $v = /* @__PURE__ */ h("g", { transform: "matrix(1,0,0,1,-2248,0)" }, [
  /* @__PURE__ */ h("g", {
    id: "NativeScript_Logo_White_Blue_Rounded",
    transform: "matrix(1,0,0,1,2248,0)"
  }, [
    /* @__PURE__ */ h("path", {
      d: "M1024,256C1024,114.71 909.29,0 768,0L256,0C114.71,0 0,114.71 0,256L0,768C0,909.29 114.71,1024 256,1024L768,1024C909.29,1024 1024,909.29 1024,768L1024,256Z",
      style: { fill: "none" }
    }),
    /* @__PURE__ */ h("clipPath", { id: "_clip1" }, [
      /* @__PURE__ */ h("path", { d: "M1024,256C1024,114.71 909.29,0 768,0L256,0C114.71,0 0,114.71 0,256L0,768C0,909.29 114.71,1024 256,1024L768,1024C909.29,1024 1024,909.29 1024,768L1024,256Z" })
    ]),
    /* @__PURE__ */ h("g", { "clip-path": "url(#_clip1)" }, [
      /* @__PURE__ */ h("g", { id: "Background" }, [
        /* @__PURE__ */ h("rect", {
          x: "0",
          y: "0",
          width: "1024",
          height: "1024",
          style: { fill: "rgb(101, 173, 241)" }
        })
      ]),
      /* @__PURE__ */ h("g", { transform: "matrix(1,0,0,1,843,512.135)" }, [
        /* @__PURE__ */ h("g", {
          id: "NativeScript-Logo",
          "serif:id": "NativeScript Logo"
        }, [
          /* @__PURE__ */ h("path", {
            d: "M0,-0.271L0,0.828C0,1.084 -0.195,1.296 -0.451,1.32C-33.815,4.443 -59.93,31.553 -59.93,65.729L-59.93,202.67C-59.93,212.239 -61.94,221.47 -65.57,229.899C-75.92,253.97 -99.41,271.47 -126.73,271.47L-195.93,271.47L-196.41,270.869L-465.59,-66.451L-465.59,271.47L-535.27,271.47C-572.163,271.47 -602.07,241.562 -602.07,204.67L-602.07,65.729C-602.07,31.554 -628.185,4.443 -661.549,1.32C-661.805,1.296 -662,1.084 -662,0.828L-662,-0.271C-662,-0.526 -661.806,-0.738 -661.551,-0.763C-628.306,-4 -602.33,-31.784 -602.33,-65.88L-602.33,-204.94C-602.33,-214.23 -600.43,-223.09 -597,-231.121C-586.82,-255 -563.13,-271.741 -535.53,-271.741L-465.87,-271.741L-465.59,-271.391L-196.41,65.939L-196.41,-271.741L-126.47,-271.741C-89.577,-271.741 -59.67,-241.833 -59.67,-204.94L-59.67,-65.88C-59.67,-31.784 -33.694,-4 -0.448,-0.763C-0.194,-0.738 0,-0.526 0,-0.271",
            style: { fill: "white", "fill-rule": "nonzero" }
          })
        ])
      ])
    ])
  ])
], -1), Pv = [
  $v
];
function Ev(e, t) {
  return g(), b("svg", kv, Pv);
}
const jv = /* @__PURE__ */ jt(Ov, [["render", Ev]]), Cv = {
  angular: '<clipPath id="a"><path d="m0 0h24v24h-24z"/></clipPath><g clip-path="url(#a)"><path d="m9.931 12.645h4.138l-2.07-4.908m0-7.737-11.319 3.982 1.726 14.771 9.594 5.247 9.596-5.242 1.724-14.774-11.321-3.983zm7.064 18.31h-2.638l-1.422-3.503h-6.007l-1.422 3.504h-2.64l7.066-15.661z" fill="#dd0031"/></g>',
  javascript: '<clipPath id="a"><path d="m0 0h24v24h-24z"/></clipPath><g clip-path="url(#a)"><path d="m0 0h24v24h-24zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179z" fill="#f7df1e"/></g>',
  react: '<path d="m14.23 12.004c0 .5928-.2354 1.1614-.6546 1.5807-.4191.4193-.9875.655-1.5804.6553-.593 0-1.1618-.2356-1.5811-.6549-.41932-.4193-.6549-.9881-.6549-1.5811 0-.5929.23544-1.1614.6546-1.5807.4191-.4193.9875-.65504 1.5804-.6553.593 0 1.1618.2356 1.5811.6549s.6549.9881.6549 1.5811zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365-3.044.94-5.024 2.443-5.024 4.027 0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365 3.033-.932 5.013-2.438 5.013-4.024 0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.687-.277-1.091-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.128.563-.133zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.095 1.345-1.564zm.015 2.626c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.284 2.015-.387zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474s1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.434-.788.635-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zm10.894 2.987c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.299 3.113-.539zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.143-.944.251-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="#61dafb"/>',
  svelte: '<clipPath id="a"><path d="m0 0h24v24h-24z"/></clipPath><g clip-path="url(#a)"><path d="m10.354 21.125c-.87963.2285-1.8082.1817-2.66032-.1343s-1.58675-.8859-2.10469-1.6327c-.31809-.445-.54412-.9491-.66484-1.4826-.12071-.5335-.13369-1.0858-.03816-1.6244.03257-.1769.07735-.3513.134-.522l.105-.321.287.21c.66123.4857 1.40051.855 2.186 1.092l.208.063-.02.208c-.02497.2947.05509.5887.226.83.15586.2251.37704.3969.63367.4922.25664.0953.53635.1096.80133.0408.12132-.0322.23699-.0828.343-.15l5.59001-3.562c.1365-.0862.2536-.1999.3438-.3339.0902-.1339.1516-.2852.1802-.4441.0288-.1624.025-.3288-.0113-.4897-.0362-.1609-.1041-.3129-.1997-.4473-.156-.225-.3772-.3967-.6338-.492s-.5362-.1096-.8012-.041c-.1213.0322-.237.0828-.343.15l-2.133 1.36c-.3507.2232-.7335.3915-1.135.499-.87952.2286-1.80802.1819-2.66014-.1339-.85211-.3158-1.5868-.8855-2.10487-1.6321-.31809-.4452-.54405-.9495-.6646-1.4832s-.13326-1.0861-.0374-1.6248c.09479-.52788.29867-1.03017.59863-1.47477.29995-.44459.68938-.82171 1.14337-1.10723l5.58901-3.563c.3506-.2233.7334-.39158 1.135-.499.8796-.22855 1.8082-.18166 2.6603.13433s1.5868.88587 2.1047 1.63267c.3181.44502.5441.94907.6648 1.4826.1208.53353.1337 1.08579.0382 1.6244-.0327.17685-.0775.35126-.134.522l-.105.321-.286-.21c-.6614-.48628-1.4011-.85594-2.187-1.093l-.208-.063.02-.207c.025-.29499-.055-.58933-.226-.831-.156-.22489-.3772-.3965-.6339-.49163-.2566-.09514-.5362-.10923-.8011-.04037-.1213.03222-.237.0828-.343.15l-5.59001 3.562c-.13661.08614-.25377.19982-.34399.33378-.09022.13395-.15153.28524-.18001.44422-.0289.1624-.02513.3289.0111.4898.03623.1608.10419.3129.1999.4472.15595.225.37715.3967.63375.492s.53626.1096.80125.041c.1217-.0325.23771-.0834.34401-.151l2.132-1.36c.3507-.22302.7334-.39096 1.135-.498.8795-.22865 1.808-.18192 2.6601.13389s1.5868.88551 2.1049 1.63211c.3181.4452.544.9494.6646 1.4832.1205.5337.1333 1.0861.0374 1.6248-.0948.528-.2986 1.0305-.5986 1.4752-.2999.4448-.6894.8221-1.1434 1.1078l-5.589 3.562c-.3506.2233-.7334.3916-1.135.499zm10.358-17.95c-2.228-3.1900018-6.63-4.135002-9.812-2.107l-5.59001 3.562c-.7549.4751-1.40237 1.10248-1.90103 1.84203s-.83753 1.57501-.99497 2.45297c-.26672 1.4792-.03235 3.0051.666 4.336-.47866.7256-.80524 1.5407-.96 2.396-.15904.8956-.13766 1.814.06291 2.7013s.57628 1.7255 1.10509 2.4657c2.229 3.19 6.63 4.135 9.81201 2.108l5.59-3.562c.755-.475 1.4025-1.1024 1.9012-1.8419.4987-.7396.8375-1.5751.9948-2.4531.2668-1.4791.0328-3.0049-.665-4.336.478-.7257.8039-1.5408.958-2.396.1594-.89573.1383-1.81429-.0621-2.70175s-.576-1.72595-1.1049-2.46625z" fill="#ff3e00"/></g>',
  typescript: '<clipPath id="a"><path d="m0 0h24v24h-24z"/></clipPath><g clip-path="url(#a)"><path clip-rule="evenodd" d="m.899999 0h22.200001c.497 0 .9.402943.9.9v22.2c0 .4971-.403.9-.9.9h-22.200001c-.497056 0-.899999-.4029-.899999-.9v-22.2c0-.497057.402943-.9.899999-.9zm12.441401 12.7684v-1.9684h-8.54141v1.9684h3.04944v8.7642h2.42757v-8.7642zm.9679 8.5328c.3914.1996.8544.3493 1.3889.4491.5346.0998 1.0979.1497 1.6902.1497.5772 0 1.1254-.0549 1.6449-.1647.5195-.1097.9749-.2907 1.3664-.5427.3914-.252.7014-.5812.9297-.9879.2284-.4067.3426-.9094.3426-1.5082 0-.4342-.0653-.8146-.1958-1.1414-.1304-.3269-.3186-.6176-.5646-.8721-.2459-.2544-.5408-.4827-.8846-.6848-.3438-.202-.7314-.3929-1.1631-.5726-.3162-.1298-.5998-.2558-.8507-.378-.251-.1222-.4643-.247-.6399-.3742-.1757-.1273-.3111-.262-.4065-.4042s-.143-.3031-.143-.4828c0-.1646.0426-.3131.1279-.4453.0854-.1322.2058-.2458.3614-.3406s.3463-.1683.5722-.2208c.2258-.0523.4767-.0785.7527-.0785.2008 0 .4129.0149.6362.0448.2233.03.448.0762.6738.1385.2259.0624.4455.1409.6588.2358.2132.0948.4102.2046.5909.3293v-2.2379c-.3664-.1398-.7666-.2433-1.2008-.3106-.4341-.0674-.9323-.1011-1.4944-.1011-.5721 0-1.1141.0611-1.6261.1834-.5119.1222-.9623.3131-1.3513.5726s-.6964.59-.9222.9917c-.2259.4017-.3388.882-.3388 1.4408 0 .7136.207 1.3224.6211 1.8263.4141.504 1.0427.9306 1.8858 1.2799.3313.1348.6399.267.9261.3968.286.1297.5332.2644.7414.4041.2083.1398.3727.2919.4932.4566.1204.1646.1807.3517.1807.5614 0 .1547-.0377.2981-.113.4303-.0753.1323-.1895.247-.3426.3443-.153.0973-.3437.1735-.572.2283-.2284.0549-.4957.0823-.8018.0823-.522 0-1.039-.091-1.5509-.2731s-.9862-.4554-1.4228-.8196z" fill="#3178c6" fill-rule="evenodd"/></g>',
  vue: '<path d="M14.775 2L12 6.7625L9.225 2H0L12 22.625L24 2H14.775Z" fill="#42B883"/><path d="M14.775 2L12 6.7625L9.225 2H4.8L12 14.375L19.2 2H14.775Z" fill="#35495E"/>'
};
function xt(e) {
  return L({
    setup(t, n) {
      return () => se(
        "div",
        {
          class: "relative pr-2.5 pb-2.5"
        },
        [
          se("svg", {
            class: "object-contain h-10 w-10 rounded-md",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            innerHTML: Cv[e]
          }),
          se(jv, { class: "absolute w-5 h-5 right-0 bottom-0" })
        ]
      );
    }
  });
}
const Av = { class: "not-prose -mx-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4" }, Iv = ["href"], Tv = { class: "ml-4" }, Dv = /* @__PURE__ */ h("div", { class: "text-lg font-semibold" }, "NativeScript", -1), Nv = { class: "text-sm" }, Lv = /* @__PURE__ */ L({
  __name: "StackBlitzLinks",
  setup(e) {
    const t = [
      {
        name: "TypeScript",
        link: "https://nativescript.new/",
        icon: xt("typescript")
      },
      {
        name: "JavaScript",
        link: "https://nativescript.new/js",
        icon: xt("javascript")
      },
      {
        name: "Angular",
        link: "https://nativescript.new/angular",
        icon: xt("angular")
      },
      {
        name: "Vue",
        link: "https://nativescript.new/vue",
        icon: xt("vue")
      },
      {
        name: "Vue 3 (Beta)",
        link: "https://nativescript.new/vue3",
        icon: xt("vue")
      },
      {
        name: "React",
        link: "https://nativescript.new/react",
        icon: xt("react")
      },
      {
        name: "Svelte",
        link: "https://nativescript.new/Svelte",
        icon: xt("svelte")
      }
    ];
    return (n, r) => (g(), b("div", Av, [
      (g(), b(z, null, ne(t, (o) => h("a", {
        href: o.link,
        target: "blank",
        class: "flex items-center rounded-md px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5"
      }, [
        h("div", null, [
          (g(), ue(Mn(o.icon), { class: "" }))
        ]),
        h("div", Tv, [
          Dv,
          h("div", Nv, U(o.name), 1)
        ])
      ], 8, Iv)), 64))
    ]));
  }
});
const Mv = {}, Rv = { class: "step-list" };
function Hv(e, t) {
  return g(), b("div", Rv, [
    Te(e.$slots, "default")
  ]);
}
const Bv = /* @__PURE__ */ jt(Mv, [["render", Hv]]), Fv = /* @__PURE__ */ L({
  __name: "APIRefFlags",
  props: {
    flags: null
  },
  setup(e) {
    const t = e, n = {
      isPrivate: {
        text: "Private",
        class: "bg-red-100 text-red-800"
      },
      isStatic: {
        text: "Static",
        class: "bg-pink-100 text-pink-800"
      },
      isProtected: {
        text: "Protected",
        class: "bg-sky-100 text-sky-800"
      },
      isReadonly: {
        text: "Readonly",
        class: "bg-yellow-100 text-yellow-800"
      },
      isAbstract: {
        text: "Abstract",
        class: "bg-lime-100 text-lime-800"
      }
    }, r = T(() => Object.keys(t.flags).map((o) => n[o]).filter(Boolean));
    return (o, i) => (g(!0), b(z, null, ne(P(r), (a) => (g(), b("span", {
      class: te(["inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium", a.class])
    }, U(a.text), 3))), 256));
  }
}), zv = { class: "flex items-baseline" }, Vv = {
  key: 0,
  class: "ml-2"
}, Uv = { class: "space-y-4" }, qv = { class: "pb-2" }, Wv = { class: "relative" }, Kv = ["id", "href"], Gv = ["innerHTML"], Jv = {
  key: 2,
  class: "mt-4 mb-0 whitespace-normal [&_a]:text-blue-400 [&_a]:no-underline"
}, Qv = ["href"], Yv = { class: "text-right text-sm text-slate-500" }, Zv = { key: 0 }, Xv = ["href"], e4 = ["href"], t4 = {
  key: 0,
  class: "prose prose-slate flex min-w-full items-center dark:prose-invert sm:pl-0"
}, n4 = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  class: "h-4 w-4"
}, [
  /* @__PURE__ */ h("path", {
    "fill-rule": "evenodd",
    d: "M12.207 2.232a.75.75 0 00.025 1.06l4.146 3.958H6.375a5.375 5.375 0 000 10.75H9.25a.75.75 0 000-1.5H6.375a3.875 3.875 0 010-7.75h10.003l-4.146 3.957a.75.75 0 001.036 1.085l5.5-5.25a.75.75 0 000-1.085l-5.5-5.25a.75.75 0 00-1.06.025z",
    "clip-rule": "evenodd"
  })
], -1), r4 = { class: "ml-2" }, o4 = ["innerHTML"], i4 = /* @__PURE__ */ L({
  __name: "APIRef",
  props: {
    for: null
  },
  setup(e) {
    const t = e, n = me("API_DATA"), r = T(() => {
      var s;
      return (s = n == null ? void 0 : n.reflections) == null ? void 0 : s[Number(t.for)];
    });
    function o(s) {
      let l = s.fileName;
      return s.line && (l += ":" + s.line, s.character && (l += ":" + s.character)), l;
    }
    function i(s) {
      var l;
      return ((l = s.fileName) == null ? void 0 : l.replace(
        "@nativescript/core",
        "https://unpkg.com/browse/@nativescript/core/"
      )) + `#L${s.line}`;
    }
    function a(s) {
      if (s)
        return new URL("https://localhost" + s).hash;
    }
    return (s, l) => {
      var f, d;
      const u = Oe("APIRefComment"), c = Oe("APIRefParameters");
      return g(), b(z, null, [
        h("div", zv, [
          Te(s.$slots, "title"),
          (f = P(r)) != null && f.flags ? (g(), b("div", Vv, [
            F(Fv, {
              flags: P(r).flags
            }, null, 8, ["flags"])
          ])) : V("", !0)
        ]),
        h("div", Uv, [
          (g(!0), b(z, null, ne((d = P(r)) == null ? void 0 : d.signatures, (p) => {
            var v, y, _, w;
            return g(), b("div", qv, [
              h("div", Wv, [
                p.url ? (g(), b("a", {
                  key: 0,
                  id: a(p.url),
                  href: a(p.url),
                  class: "not-prose absolute inset-y-0 -left-6 flex items-center"
                }, null, 8, Kv)) : V("", !0),
                p.code ? (g(), b("pre", {
                  key: 1,
                  innerHTML: p.code,
                  class: te(["mt-4 mb-0 [&_a]:text-blue-400 [&_a]:no-underline", {
                    "rounded-b-none": ((y = (v = P(r)) == null ? void 0 : v.signatures) == null ? void 0 : y.length) > 1
                  }])
                }, null, 10, Gv)) : V("", !0),
                p.target ? (g(), b("pre", Jv, [
                  Le(`          Alias for
          `),
                  h("a", {
                    href: p.target.url,
                    class: "not-prose text-blue-400 underline"
                  }, [
                    h("code", null, U(p.target.name), 1)
                  ], 8, Qv),
                  Le(`
        `)
                ])) : V("", !0)
              ]),
              h("div", {
                class: te(["pt-2", {
                  "rounded-b-md border border-t-0 px-4 pb-4 dark:border-slate-800": ((w = (_ = P(r)) == null ? void 0 : _.signatures) == null ? void 0 : w.length) > 1
                }])
              }, [
                h("div", Yv, [
                  p.inheritedFrom ? (g(), b("div", Zv, [
                    Le(" inherited from "),
                    h("a", {
                      href: p.inheritedFrom.url
                    }, U(p.inheritedFrom.name), 9, Xv)
                  ])) : V("", !0),
                  (g(!0), b(z, null, ne(p.sources, (S) => (g(), b("div", null, [
                    Le(" defined in "),
                    h("a", {
                      href: i(S),
                      target: "_blank"
                    }, U(o(S)), 9, e4)
                  ]))), 256))
                ]),
                F(u, {
                  comment: p == null ? void 0 : p.comment
                }, null, 8, ["comment"]),
                F(c, {
                  parameters: p.parameters
                }, null, 8, ["parameters"]),
                p.returns ? (g(), b("div", t4, [
                  n4,
                  h("span", r4, [
                    Le(" Returns "),
                    h("i", {
                      class: "font-semibold italic",
                      innerHTML: p.returns
                    }, null, 8, o4)
                  ])
                ])) : V("", !0)
              ], 2)
            ]);
          }), 256))
        ])
      ], 64);
    };
  }
}), a4 = {
  key: 0,
  class: "not-prose mt-4"
}, s4 = /* @__PURE__ */ L({
  __name: "APIRefComment",
  props: {
    comment: null,
    commentBase64: null
  },
  setup(e) {
    const t = e, n = T(() => {
      if (t.commentBase64)
        try {
          return JSON.parse(atob(t.commentBase64));
        } catch (o) {
          console.log(o);
        }
      return t.comment;
    }), r = {
      text: {
        tag: "span",
        class: ""
      },
      code: {
        tag: "code",
        class: "font-bold"
      },
      "inline-tag": {
        tag: "span",
        class: "italic underline"
      }
    };
    return (o, i) => {
      var a;
      return P(n) ? (g(), b("div", a4, [
        (g(!0), b(z, null, ne((a = P(n)) == null ? void 0 : a.summary, (s) => (g(), ue(Mn(r[s.kind].tag), {
          class: te(r[s.kind].class),
          innerHTML: s.text
        }, null, 8, ["class", "innerHTML"]))), 256))
      ])) : V("", !0);
    };
  }
});
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const l4 = () => {
}, Zl = Object.assign, c4 = Array.isArray, u4 = (e) => typeof e == "function", f4 = (e) => typeof e == "symbol";
let d4;
function p4(e, t = d4) {
  t && t.active && t.effects.push(e);
}
const rs = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Xl = (e) => (e.w & ft) > 0, ec = (e) => (e.n & ft) > 0, h4 = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= ft;
}, m4 = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      Xl(o) && !ec(o) ? o.delete(e) : t[n++] = o, o.w &= ~ft, o.n &= ~ft;
    }
    t.length = n;
  }
};
let sn = 0, ft = 1;
const Fo = 30;
let Ee;
Symbol(process.env.NODE_ENV !== "production" ? "iterate" : "");
Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class v4 {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, p4(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Ee, n = fr;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Ee, Ee = this, fr = !0, ft = 1 << ++sn, sn <= Fo ? h4(this) : os(this), this.fn();
    } finally {
      sn <= Fo && m4(this), ft = 1 << --sn, Ee = this.parent, fr = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Ee === this ? this.deferStop = !0 : this.active && (os(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function os(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let fr = !0;
function is(e, t) {
  let n = !1;
  sn <= Fo ? ec(e) || (e.n |= ft, n = !Xl(e)) : n = !e.has(Ee), n && (e.add(Ee), Ee.deps.push(e), process.env.NODE_ENV !== "production" && Ee.onTrack && Ee.onTrack(
    Zl(
      {
        effect: Ee
      },
      t
    )
  ));
}
function as(e, t) {
  const n = c4(e) ? e : [...e];
  for (const r of n)
    r.computed && ss(r, t);
  for (const r of n)
    r.computed || ss(r, t);
}
function ss(e, t) {
  (e !== Ee || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Zl({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(f4)
);
function Vr(e) {
  const t = e && e.__v_raw;
  return t ? Vr(t) : e;
}
function g4(e) {
  fr && Ee && (e = Vr(e), process.env.NODE_ENV !== "production" ? is(e.dep || (e.dep = rs()), {
    target: e,
    type: "get",
    key: "value"
  }) : is(e.dep || (e.dep = rs())));
}
function y4(e, t) {
  e = Vr(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? as(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : as(n));
}
class _4 {
  constructor(t, n, r, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new v4(t, () => {
      this._dirty || (this._dirty = !0, y4(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const t = Vr(this);
    return g4(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function b4(e, t, n = !1) {
  let r, o;
  const i = u4(e);
  i ? (r = e, o = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : l4) : (r = e.get, o = e.set);
  const a = new _4(r, o, i || !o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (a.effect.onTrack = t.onTrack, a.effect.onTrigger = t.onTrigger), a;
}
const w4 = { class: "flex items-start" }, S4 = { class: "columns-1 gap-8 sm:columns-2 md:columns-3 lg:columns-4" }, x4 = ["href"], O4 = {
  key: 1,
  class: "block font-bold text-slate-800 dark:text-slate-300"
}, k4 = /* @__PURE__ */ L({
  __name: "APIRefHierarchyItem",
  props: {
    hierarchy: null,
    root: { type: Boolean }
  },
  setup(e) {
    const t = e, n = b4(() => {
      const r = t.hierarchy.at(0);
      return r ? Array.isArray(r) ? r : [r] : !1;
    });
    return (r, o) => {
      const i = Oe("APIRefHierarchyItem", !0);
      return P(n) ? (g(), b("div", {
        key: 0,
        class: te({ "pl-4": !e.root })
      }, [
        h("div", w4, [
          e.root ? V("", !0) : (g(), ue(P(Md), {
            key: 0,
            class: "mt-0.5 mr-2 h-5 w-5 rotate-180 transform"
          })),
          h("div", S4, [
            (g(!0), b(z, null, ne(P(n), (a) => (g(), b(z, null, [
              a.link ? (g(), b("a", {
                key: 0,
                href: a.link,
                class: "block text-blue-500 no-underline hover:text-blue-600 dark:text-cyan-400 dark:hover:text-cyan-600"
              }, U(a.text), 9, x4)) : (g(), b("span", O4, U(a.text), 1))
            ], 64))), 256))
          ])
        ]),
        e.hierarchy.length ? (g(), ue(i, {
          key: 0,
          hierarchy: e.hierarchy.slice(1)
        }, null, 8, ["hierarchy"])) : V("", !0)
      ], 2)) : V("", !0);
    };
  }
}), $4 = { class: "mt-6 font-medium" }, P4 = /* @__PURE__ */ L({
  __name: "APIRefHierarchy",
  props: {
    hierarchy: { default: () => [
      { text: "ViewBase", link: "//#" },
      { text: "View", link: "//#" },
      { text: "ActionBar" }
    ] }
  },
  setup(e) {
    const t = e, n = me("API_DATA"), r = T(() => (n == null ? void 0 : n.hierarchy) ?? t.hierarchy);
    return (o, i) => (g(), b("div", $4, [
      F(k4, {
        hierarchy: P(r),
        root: !0
      }, null, 8, ["hierarchy"])
    ]));
  }
}), E4 = {
  key: 0,
  class: "not-prose mt-4"
}, j4 = { class: "not-prose mt-4" }, C4 = { class: "-mx-4 overflow-x-auto sm:mx-0" }, A4 = { class: "inline-block min-w-full" }, I4 = { class: "w- w-full min-w-[540px] border-b border-slate-200 text-left dark:border-slate-700 sm:min-w-full" }, T4 = { class: "divide-y divide-slate-200 dark:divide-slate-700" }, D4 = /* @__PURE__ */ h("tr", { class: "w-1/4 text-slate-900 dark:text-slate-400" }, [
  /* @__PURE__ */ h("td", { class: "w-1/6 whitespace-nowrap py-2 pl-4 text-sm font-medium sm:pl-0" }, " Parameter "),
  /* @__PURE__ */ h("td", { class: "w-1/6 whitespace-nowrap py-2 text-sm font-medium" }, " Default "),
  /* @__PURE__ */ h("td", { class: "w-2/3 whitespace-nowrap py-2 text-sm font-medium" }, " Description ")
], -1), N4 = { class: "" }, L4 = { class: "prose-sm prose prose-slate py-3 pl-4 align-baseline dark:prose-invert sm:pl-0" }, M4 = ["innerHTML"], R4 = { class: "prose-sm prose prose-slate py-3 align-baseline dark:prose-invert" }, H4 = { class: "" }, B4 = { class: "py-3 align-baseline" }, F4 = { class: "prose-sm prose prose-slate my-0 space-x-5 whitespace-nowrap dark:prose-invert [&_a]:text-blue-500 dark:[&_a]:text-cyan-400" }, z4 = ["innerHTML"], V4 = { class: "prose-sm prose prose-slate dark:prose-invert" }, U4 = /* @__PURE__ */ L({
  __name: "APIRefParameters",
  props: {
    parameters: null
  },
  setup(e) {
    return (t, n) => {
      var o;
      const r = Oe("APIRefComment");
      return (o = e.parameters) != null && o.length ? (g(), b("div", E4, [
        h("div", j4, [
          h("div", C4, [
            h("div", A4, [
              h("table", I4, [
                h("tbody", T4, [
                  D4,
                  (g(!0), b(z, null, ne(e.parameters, (i) => (g(), b("tr", N4, [
                    h("td", L4, [
                      h("code", {
                        innerHTML: i.name
                      }, null, 8, M4)
                    ]),
                    h("td", R4, [
                      h("span", H4, [
                        h("code", null, U(i.defaultValue), 1)
                      ])
                    ]),
                    h("td", B4, [
                      h("div", F4, [
                        h("span", null, [
                          h("code", {
                            class: "font-bold",
                            innerHTML: i.type
                          }, null, 8, z4)
                        ])
                      ]),
                      h("div", V4, [
                        h("p", null, [
                          F(r, {
                            comment: i.comment,
                            class: "m-0"
                          }, null, 8, ["comment"])
                        ])
                      ])
                    ])
                  ]))), 256))
                ])
              ])
            ])
          ])
        ])
      ])) : V("", !0);
    };
  }
});
function q4(e, t) {
  return g(), b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "fill-rule": "evenodd",
      d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ls(e, t) {
  return g(), b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    h("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
const W4 = { key: 0 }, K4 = { key: 0 }, G4 = ["id"], J4 = { class: "columns-1 gap-4 sm:columns-2 2xl:columns-3" }, Q4 = ["href"], Y4 = ["innerHTML"], Z4 = { class: "-mx-4 mt-4 rounded-lg border border-slate-200 dark:border-slate-700" }, X4 = ["onClick"], eg = { class: "ml-2" }, tg = ["href", "innerHTML"], ng = ["innerHTML"], rg = { class: "flex-1 text-right text-xs" }, og = { class: "columns-1 p-4 sm:columns-2 2xl:columns-3" }, ig = ["href"], ag = ["innerHTML"], sg = /* @__PURE__ */ L({
  __name: "APIRefSummary",
  setup(e) {
    const t = me("API_DATA"), n = T(() => (c) => c.items.map((f) => {
      var d;
      return (d = t == null ? void 0 : t.reflections) == null ? void 0 : d[f];
    }).filter(Boolean)), r = T(() => (c) => n.value(c).filter((f) => f.type === "Constructor" || !f.inheritedFrom)), o = T(() => (c) => Object.values(
      n.value(c).filter((f) => f.type !== "Constructor" && !!f.inheritedFrom).reduce((f, d) => {
        let p = d.inheritedFrom.fromName;
        return p || (p = "&laquo;External&raquo;"), f[p] ?? (f[p] = {
          name: p,
          url: d.inheritedFrom.fromUrl,
          // explore this later, get the url from the hierarchy
          // ?? data?.hierarchy?.flat().find((item) => item.text === group)?.link,
          items: []
        }), f[p].items.push(d), f;
      }, {})
    )), i = T(() => (c) => {
      var d, p;
      const f = (d = c.signatures) == null ? void 0 : d.find((v) => {
        var y;
        return !!((y = v.inheritedFrom) != null && y.url);
      });
      return (p = f == null ? void 0 : f.inheritedFrom) == null ? void 0 : p.url;
    }), a = A(/* @__PURE__ */ new Set());
    T(() => (c) => a.value.has(c.title));
    const s = A(/* @__PURE__ */ new Set());
    function l(c) {
      s.value.has(c) ? s.value.delete(c) : s.value.add(c);
    }
    const u = T(() => (c) => s.value.has(c));
    return (c, f) => P(t) ? (g(), b("div", W4, [
      (g(!0), b(z, null, ne(P(t).summary, (d) => (g(), b(z, null, [
        P(r)(d).length ? (g(), b("div", K4, [
          h("h4", {
            id: "summary-" + d.title
          }, U(d.title), 9, G4),
          h("dl", J4, [
            (g(!0), b(z, null, ne(P(r)(d), (p) => (g(), b("dd", null, [
              h("a", {
                href: p.url,
                class: "flex items-center text-blue-500 no-underline hover:text-blue-600 dark:text-cyan-400 dark:hover:text-cyan-600"
              }, [
                F(P(ls), { class: "mr-1.5 h-5 w-5 flex-shrink-0" }),
                h("span", {
                  innerHTML: p.name,
                  class: "truncate"
                }, null, 8, Y4)
              ], 8, Q4)
            ]))), 256))
          ]),
          qt(h("div", Z4, [
            (g(!0), b(z, null, ne(P(o)(d), (p) => (g(), b("div", null, [
              h("div", {
                onClick: kt((v) => l(`${d.title}-${p.name}`), ["prevent"]),
                class: "flex cursor-pointer items-center border-b px-4 py-2 text-slate-700 dark:text-slate-400"
              }, [
                F(P(q4), {
                  class: te(["h-4 w-4", {
                    "rotate-90": P(u)(`${d.title}-${p.name}`)
                  }])
                }, null, 8, ["class"]),
                h("span", eg, U(p.items.length) + " " + U(d.title.toLowerCase()) + " inherited from ", 1),
                p.url ? (g(), b("a", {
                  key: 0,
                  class: "ml-1 text-blue-500 no-underline hover:underline",
                  href: p.url,
                  innerHTML: p.name
                }, null, 8, tg)) : (g(), b("span", {
                  key: 1,
                  class: "ml-1 font-bold",
                  innerHTML: p.name
                }, null, 8, ng)),
                h("div", rg, U(P(u)(`${d.title}-${p.name}`) ? "Click to collapse" : "Click to expand"), 1)
              ], 8, X4),
              qt(h("dl", og, [
                (g(!0), b(z, null, ne(p.items, (v) => (g(), b("dd", null, [
                  h("a", {
                    href: P(i)(v),
                    class: "flex items-center text-blue-500 no-underline hover:text-blue-600 dark:text-cyan-400 dark:hover:text-cyan-600"
                  }, [
                    F(P(ls), { class: "mr-1.5 h-5 w-5 flex-shrink-0" }),
                    h("span", {
                      innerHTML: v.name
                    }, null, 8, ag)
                  ], 8, ig)
                ]))), 256))
              ], 512), [
                [dr, P(u)(`${d.title}-${p.name}`)]
              ])
            ]))), 256))
          ], 512), [
            [dr, P(o)(d).length]
          ])
        ])) : V("", !0)
      ], 64))), 256))
    ])) : V("", !0);
  }
}), ug = (e) => ({
  Layout: Wm,
  NotFound: Ar,
  enhanceApp(t) {
    const { app: n, router: r, siteData: o } = t;
    n.component("FlavorTabs", Ym), n.component("CodeTabs", nv), n.component("NotFound", Ar), n.component("DeviceFrame", yv), n.component("Heading", _v), n.component("ExternalButtonLink", xv), n.component("StackBlitzLinks", Lv), n.component("StepList", Bv), n.component("APIRef", i4), n.component("APIRefComment", s4), n.component("APIRefHierarchy", P4), n.component("APIRefParameters", U4), n.component("APIRefSummary", sg), n.provide("useRouter", oc), n.provide("useRoute", Nn), n.provide(al, Id()), n.use(Fu, {
      instantMove: !0,
      distance: 10,
      themes: {
        tooltip: {
          delay: {
            show: 0
          }
        }
      }
    }), e && e(t);
  }
});
export {
  ug as default
};