!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var i=r("6JpON"),a=document.querySelector(".form"),u=a.querySelector("button");a.addEventListener("submit",(function(t){var n=function(t){var n=Number(r.value)+Number(a.value)*(t-1);setTimeout((function(){var o,r,a;(o=t,r=n,a=Math.random()>.3,new Promise((function(e,t){a?e({position:o,delay:r}):t({position:o,delay:r})}))).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"),{position:"center-center",timeout:5e3})})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"),{position:"center-center",timeout:5e3})}))}),n)};t.preventDefault(),u.disabled=!0,console.dir(t.target.elements);var o=t.target.elements,r=o.delay,a=o.step,l=o.amount;console.log(l.value);for(var c=1;c<=Number(l.value);c++)n(c)}))}();
//# sourceMappingURL=03-promises.16f931d4.js.map
