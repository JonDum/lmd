(function(a){var b={},c={},d=function(e){var f=b[e],g;return c[e]?f:(typeof f=="string"&&(f=(0,a.eval)(f)),g={exports:{}},c[e]=1,b[e]=g.exports,f?typeof f=="function"&&(f=f(d,g.exports,g)):f=a[e],b[e]=f||g.exports)},e=function(a){var f={exports:{}};switch(typeof a){case"function":a(d,f.exports,f);break;case"object":for(var g in a)c[g]=0,b[g]=a[g]}return e};return e})(window)({depA:'(function(a){var b=a("depB");return function(a){console.log(b(a))}})',depB:'(function(a,b,c){c.exports=function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}})',i18n:{hello:"Привет"}})(function(b){var c=b("depA"),d=b("i18n"),e=b("$"),f=d.hello+", lmd";c(f),e("#log").text(f)})