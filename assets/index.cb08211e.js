import{f as s,a as t,b as a,c as e,S as l,i as n,s as c,e as o,d as r,g as h,h as f,j as i,k as g,l as m,m as p,n as u,o as v,t as d,p as b,q as $,r as z,u as E,v as j,w,x as I,y as S,z as x,F as A,A as y}from"./vendor.7e536730.js";const B=[{href:"https://twitch.tv/s4tont",icon:s},{href:"https://t.me/satont",icon:t},{href:"https://github.com/satont",icon:a},{href:"https://dsc.bio/satont",icon:e}];function M(s,t,a){const e=s.slice();return e[0]=t[a],e}function k(s){let t,a,e;return a=new A({props:{icon:s[0].icon,size:D}}),{c(){t=o("a"),r(a.$$.fragment),this.h()},l(s){t=h(s,"A",{href:!0,class:!0});var e=f(t);i(a.$$.fragment,e),e.forEach(g),this.h()},h(){m(t,"href",s[0].href),m(t,"class","svelte-1f41bzc")},m(s,l){p(s,t,l),u(a,t,null),e=!0},p:v,i(s){e||(d(a.$$.fragment,s),e=!0)},o(s){b(a.$$.fragment,s),e=!1},d(s){s&&g(t),$(a)}}}function q(s){let t,a,e,l,n,c,r,i,u,v=B,$=[];for(let o=0;o<v.length;o+=1)$[o]=k(M(s,v,o));const A=s=>b($[s],1,1,(()=>{$[s]=null}));return{c(){t=o("main"),a=o("img"),l=z(),n=o("h1"),c=E("Satont"),r=z(),i=o("div");for(let s=0;s<$.length;s+=1)$[s].c();this.h()},l(s){t=h(s,"MAIN",{class:!0});var e=f(t);a=h(e,"IMG",{src:!0,class:!0,alt:!0}),l=j(e),n=h(e,"H1",{class:!0});var o=f(n);c=w(o,"Satont"),o.forEach(g),r=j(e),i=h(e,"DIV",{class:!0});var m=f(i);for(let t=0;t<$.length;t+=1)$[t].l(m);m.forEach(g),e.forEach(g),this.h()},h(){a.src!==(e="/assets/avatar.3ca49801.jpg")&&m(a,"src","/assets/avatar.3ca49801.jpg"),m(a,"class","logo svelte-1f41bzc"),m(a,"alt","Svelte Logo"),m(n,"class","title svelte-1f41bzc"),m(i,"class","icons svelte-1f41bzc"),m(t,"class","svelte-1f41bzc")},m(s,e){p(s,t,e),I(t,a),I(t,l),I(t,n),I(n,c),I(t,r),I(t,i);for(let t=0;t<$.length;t+=1)$[t].m(i,null);u=!0},p(s,[t]){if(0&t){let a;for(v=B,a=0;a<v.length;a+=1){const e=M(s,v,a);$[a]?($[a].p(e,t),d($[a],1)):($[a]=k(e),$[a].c(),d($[a],1),$[a].m(i,null))}for(y(),a=v.length;a<$.length;a+=1)A(a);S()}},i(s){if(!u){for(let s=0;s<v.length;s+=1)d($[s]);u=!0}},o(s){$=$.filter(Boolean);for(let t=0;t<$.length;t+=1)b($[t]);u=!1},d(s){s&&g(t),x($,s)}}}const D="3x";new class extends l{constructor(s){super(),n(this,s,null,q,c,{})}}({target:document.getElementById("app")});
