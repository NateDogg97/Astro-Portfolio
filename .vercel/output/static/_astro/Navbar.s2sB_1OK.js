import{S as $,i as ee,s as G,e as w,c as k,a as L,p as te,d as v,f,h as M,j as S,k as g,u as O,n as W,v as ae,y as re,z as T,A as Y,B as ie,C as F,o as oe,D as le,E as ue,m as q,F as ce,q as D,G as fe,x as C,H as he,I as de,J as me,K as ne,L as _e,t as pe,b as ge}from"./index.kCl_MdRb.js";/* empty css                               */function V(a){return a?.length!==void 0?a:Array.from(a)}function ve(a){let t,e,l='<span class="hamburger-inner svelte-jas1sv"></span>',n,r,s;return{c(){t=w("button"),e=w("span"),e.innerHTML=l,this.h()},l(u){t=k(u,"BUTTON",{class:!0,"aria-label":!0});var o=L(t);e=k(o,"SPAN",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-kk1wi2"&&(e.innerHTML=l),o.forEach(v),this.h()},h(){f(e,"class","hamburger-box svelte-jas1sv"),f(t,"class",n="hamburger hamburger--"+a[1]+" svelte-jas1sv"),f(t,"aria-label",a[2]),M(t,"is-active",a[0])},m(u,o){S(u,t,o),g(t,e),r||(s=[O(t,"click",a[3]),O(t,"click",a[4])],r=!0)},p(u,[o]){o&2&&n!==(n="hamburger hamburger--"+u[1]+" svelte-jas1sv")&&f(t,"class",n),o&4&&f(t,"aria-label",u[2]),o&3&&M(t,"is-active",u[0])},i:W,o:W,d(u){u&&v(t),r=!1,ae(s)}}}function be(a,t,e){let{open:l=!1}=t,{type:n="spin"}=t,{ariaLabel:r="Hamburger menu"}=t;function s(o){re.call(this,a,o)}const u=()=>e(0,l=!l);return a.$$set=o=>{"open"in o&&e(0,l=o.open),"type"in o&&e(1,n=o.type),"ariaLabel"in o&&e(2,r=o.ariaLabel)},[l,n,r,s,u]}class we extends ${constructor(t){super(),ee(this,t,be,ve,G,{open:0,type:1,ariaLabel:2})}}function K(a,t,e){const l=a.slice();return l[16]=t[e],l[18]=e,l}function Q(a,t,e){const l=a.slice();return l[19]=t[e][0],l[20]=t[e][1],l[22]=e,l}function R(a){let t,e,l=a[19]+"",n,r,s,u,o;return{c(){t=w("li"),e=w("a"),n=pe(l),r=q(),this.h()},l(h){t=k(h,"LI",{class:!0,"data-index":!0,style:!0});var c=L(t);e=k(c,"A",{href:!0,class:!0});var _=L(e);n=ge(_,l),_.forEach(v),r=D(c),c.forEach(v),this.h()},h(){f(e,"href",a[20]),f(e,"class","text-white font-sourceCode tracking-wider w-fit svelte-1xpmuzs"),f(t,"class","menu-item flex justify-center sm:bg-none w-full sm:w-auto svelte-1xpmuzs"),f(t,"data-index",a[18]),f(t,"style",s=a[2]?`transform:translateY(${(a[18]+1)*B}px);`:null),M(t,"open",a[2])},m(h,c){S(h,t,c),g(t,e),g(e,n),g(t,r),u||(o=O(e,"click",a[8]),u=!0)},p(h,c){c&4&&s!==(s=h[2]?`transform:translateY(${(h[18]+1)*B}px);`:null)&&f(t,"style",s),c&4&&M(t,"open",h[2])},d(h){h&&v(t),u=!1,o()}}}function X(a){let t,e=V(Object.entries(a[16])),l=[];for(let n=0;n<e.length;n+=1)l[n]=R(Q(a,e,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();t=T()},l(n){for(let r=0;r<l.length;r+=1)l[r].l(n);t=T()},m(n,r){for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(n,r);S(n,t,r)},p(n,r){if(r&324){e=V(Object.entries(n[16]));let s;for(s=0;s<e.length;s+=1){const u=Q(n,e,s);l[s]?l[s].p(u,r):(l[s]=R(u),l[s].c(),l[s].m(t.parentNode,t))}for(;s<l.length;s+=1)l[s].d(1);l.length=e.length}},d(n){n&&v(t),ne(l,n)}}}function Z(a){let t,e,l,n,r,s,u="Nathaniel Mays",o,h,c,_,H,N,P,j,E,x,I;function d(i){a[10](i)}let J={type:"squeeze"};a[2]!==void 0&&(J.open=a[2]),c=new we({props:J}),le.push(()=>ue(c,"open",d));let z=V(a[6]),p=[];for(let i=0;i<z.length;i+=1)p[i]=X(K(a,z,i));return{c(){t=w("nav"),e=w("ul"),l=w("li"),n=w("div"),r=q(),s=w("a"),s.textContent=u,o=q(),h=w("div"),_=w("div"),ce(c.$$.fragment),N=q();for(let i=0;i<p.length;i+=1)p[i].c();this.h()},l(i){t=k(i,"NAV",{class:!0});var y=L(t);e=k(y,"UL",{class:!0,style:!0});var b=L(e);l=k(b,"LI",{class:!0});var m=L(l);n=k(m,"DIV",{class:!0}),L(n).forEach(v),r=D(m),s=k(m,"A",{href:!0,class:!0,"data-svelte-h":!0}),te(s)!=="svelte-3sa5lq"&&(s.textContent=u),o=D(m),h=k(m,"DIV",{class:!0});var A=L(h);_=k(A,"DIV",{style:!0});var se=L(_);fe(c.$$.fragment,se),A.forEach(v),m.forEach(v),N=D(b);for(let U=0;U<p.length;U+=1)p[U].l(b);b.forEach(v),y.forEach(v),this.h()},h(){f(n,"class","w-0 h-0 sm:hidden"),f(s,"href","/"),f(s,"class","text-white font-sourceCode tracking-wider w-fit whitespace-nowrap svelte-1xpmuzs"),C(_,"display","contents"),C(_,"--color","white"),C(_,"--padding","0px"),C(_,"--layer-width","25px"),C(_,"--layer-spacing","5px"),C(_,"--layer-height","3px"),f(h,"class","hamburger mt-[3px] sm:hidden"),f(l,"class","flex justify-between items-center w-full svelte-1xpmuzs"),f(e,"class",P="flex flex-col sm:flex-row w-11/12 sm:w-5/6 "+(a[5]||a[2]||!a[1]?"scrolled":"")+" "+a[0]+" svelte-1xpmuzs"),f(e,"style",j=a[2]?`height:${a[7]}px`:`height:${B}px`),f(t,"class","navbar svelte-1xpmuzs")},m(i,y){S(i,t,y),g(t,e),g(e,l),g(l,n),g(l,r),g(l,s),g(l,o),g(l,h),g(h,_),he(c,_,null),g(e,N);for(let b=0;b<p.length;b+=1)p[b]&&p[b].m(e,null);a[11](t),E=!0,x||(I=O(s,"click",a[8]),x=!0)},p(i,y){const b={};if(!H&&y&4&&(H=!0,b.open=i[2],de(()=>H=!1)),c.$set(b),y&324){z=V(i[6]);let m;for(m=0;m<z.length;m+=1){const A=K(i,z,m);p[m]?p[m].p(A,y):(p[m]=X(A),p[m].c(),p[m].m(e,null))}for(;m<p.length;m+=1)p[m].d(1);p.length=z.length}(!E||y&39&&P!==(P="flex flex-col sm:flex-row w-11/12 sm:w-5/6 "+(i[5]||i[2]||!i[1]?"scrolled":"")+" "+i[0]+" svelte-1xpmuzs"))&&f(e,"class",P),(!E||y&4&&j!==(j=i[2]?`height:${i[7]}px`:`height:${B}px`))&&f(e,"style",j)},i(i){E||(F(c.$$.fragment,i),E=!0)},o(i){Y(c.$$.fragment,i),E=!1},d(i){i&&v(t),me(c),ne(p,i),a[11](null),x=!1,I()}}}function ke(a){let t=a[4],e,l,n=Z(a);return{c(){n.c(),e=T()},l(r){n.l(r),e=T()},m(r,s){n.m(r,s),S(r,e,s),l=!0},p(r,[s]){s&16&&G(t,t=r[4])?(_e(),Y(n,1,1,W),ie(),n=Z(r),n.c(),F(n,1),n.m(e.parentNode,e)):n.p(r,s)},i(r){l||(F(n),l=!0)},o(r){Y(n),l=!1},d(r){r&&v(e),n.d(r)}}}let B="46.39";function ye(a,t,e){let{navStyle:l}=t,{currentPagePath:n}=t,r,s,u,o,h=0,c=!1;const _=[{About:"/#about_me"},{Portfolio:"/#my_projects"},{Contact:"/#contact_me"}];let H=B*(_.length+1);function N(){const d=window.innerWidth<=640;d!==o&&(o=d,e(2,s=!1),e(4,h++,h))}function P(){return n==="/"}function j(d){u.contains(d.target)||e(2,s=!1)}function E(){e(2,s=!1)}oe(()=>{const d=()=>{e(5,c=window.scrollY>window.innerHeight-50)};return e(1,r=P()),o=window.innerWidth<=640,d(),window.addEventListener("click",j),window.addEventListener("resize",N),window.addEventListener("scroll",d),()=>{window.removeEventListener("scroll",d)}});function x(d){s=d,e(2,s)}function I(d){le[d?"unshift":"push"](()=>{u=d,e(3,u)})}return a.$$set=d=>{"navStyle"in d&&e(0,l=d.navStyle),"currentPagePath"in d&&e(9,n=d.currentPagePath)},[l,r,s,u,h,c,_,H,E,n,x,I]}class Pe extends ${constructor(t){super(),ee(this,t,ye,ke,G,{navStyle:0,currentPagePath:9})}}export{Pe as default};
