function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=r);var i=r("7Y9D8");const l=document.querySelector(".form"),s=l.querySelector("button");l.addEventListener("submit",(t=>{t.preventDefault(),s.disabled=!0,console.dir(t.target.elements);const{delay:o,step:n,amount:r}=t.target.elements;console.log(r.value);for(let t=1;t<=Number(r.value);t++){const r=Number(o.value)+Number(n.value)*(t-1);setTimeout((()=>{l(t,r).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`,{position:"center-center",timeout:5e3})})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`,{position:"center-center",timeout:5e3})}))}),r)}function l(e,t){const o=Math.random()>.3;return new Promise(((n,r)=>{o?n({position:e,delay:t}):r({position:e,delay:t})}))}}));
//# sourceMappingURL=03-promises.92cf34a9.js.map