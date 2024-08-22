import{S as A,i as F,s as R,e as g,m as H,t as C,c as v,a as T,p as G,q as I,d as x,b as O,f as t,j as U,k as f,r as y,u as M,n as j,v as X,w as J}from"./index.kCl_MdRb.js";/* empty css                       */function B(o){let s,e,a;return{c(){s=g("p"),e=C(o[3]),this.h()},l(i){s=v(i,"P",{class:!0});var u=T(s);e=O(u,o[3]),u.forEach(x),this.h()},h(){t(s,"class",a=`message text-right ${o[4]?"success text-green-600":"error text-red-600"}`)},m(i,u){U(i,s,u),f(s,e)},p(i,u){u&8&&J(e,i[3]),u&16&&a!==(a=`message text-right ${i[4]?"success text-green-600":"error text-red-600"}`)&&t(s,"class",a)},d(i){i&&x(s)}}}function K(o){let s,e,a,i=`<h2 class="text-white text-3xl md:text-5xl font-bold mb-4 font-montserrat">Let&#39;s get in touch!</h2> <div class="flex flex-row space-x-4"><a class="text-light text-xl flex gap-1 font-montserrat" href="https://github.com/NateDogg97" target="_blank">Github
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-13qc0ai"><path fill="#9333ea" d="M13 19q-.425 0-.712-.288T12 18v-8H4q-.425 0-.712-.288T3 9q0-.425.288-.712T4 8h9q.425 0 .713.288T14 9v9q0 .425-.288.713T13 19m5-5q-.425 0-.712-.288T17 13V5H9q-.425 0-.712-.288T8 4q0-.425.288-.712T9 3h9q.425 0 .713.288T19 4v9q0 .425-.288.713T18 14"></path></svg></a> <a class="text-light text-xl flex gap-1 font-montserrat" href="https://www.linkedin.com/in/nathaniel-mays/" target="_blank">LinkedIn
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="svelte-13qc0ai"><path fill="#9333ea" d="M13 19q-.425 0-.712-.288T12 18v-8H4q-.425 0-.712-.288T3 9q0-.425.288-.712T4 8h9q.425 0 .713.288T14 9v9q0 .425-.288.713T13 19m5-5q-.425 0-.712-.288T17 13V5H9q-.425 0-.712-.288T8 4q0-.425.288-.712T9 3h9q.425 0 .713.288T19 4v9q0 .425-.288.713T18 14"></path></svg></a></div>`,u,b,r,l,E,p,k,h,q,m,n,D,P,z,L,c=o[3]&&B(o);return{c(){s=g("div"),e=g("div"),a=g("div"),a.innerHTML=i,u=H(),b=g("div"),r=g("form"),l=g("input"),E=H(),p=g("input"),k=H(),h=g("textarea"),q=H(),m=g("div"),n=g("button"),D=C("Say Hi!"),P=H(),c&&c.c(),this.h()},l(d){s=v(d,"DIV",{id:!0,class:!0});var w=T(s);e=v(w,"DIV",{class:!0});var S=T(e);a=v(S,"DIV",{class:!0,"data-svelte-h":!0}),G(a)!=="svelte-1dw5r5v"&&(a.innerHTML=i),u=I(S),b=v(S,"DIV",{class:!0});var N=T(b);r=v(N,"FORM",{class:!0});var _=T(r);l=v(_,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),E=I(_),p=v(_,"INPUT",{type:!0,class:!0,name:!0,placeholder:!0}),k=I(_),h=v(_,"TEXTAREA",{class:!0,name:!0,placeholder:!0}),T(h).forEach(x),q=I(_),m=v(_,"DIV",{class:!0});var V=T(m);n=v(V,"BUTTON",{type:!0,class:!0});var Y=T(n);D=O(Y,"Say Hi!"),Y.forEach(x),P=I(V),c&&c.l(V),V.forEach(x),_.forEach(x),N.forEach(x),S.forEach(x),w.forEach(x),this.h()},h(){t(a,"class","flex flex-col w-full md:w-1/2 mb-8 md:mb-0"),t(l,"class","bg-indigo-950 border border-gray-500 text-white text-lg p-3 rounded focus:outline-none focus:border-purple-500"),t(l,"type","text"),t(l,"name","name"),t(l,"placeholder","Your name"),l.required=!0,t(p,"type","email"),t(p,"class","bg-indigo-950 border border-gray-500 text-white text-lg p-3 rounded focus:outline-none focus:border-purple-500"),t(p,"name","email"),t(p,"placeholder","Your email"),p.required=!0,t(h,"class","bg-indigo-950 border border-gray-500 text-white text-lg p-3 rounded focus:outline-none focus:border-purple-500 h-32"),t(h,"name","message"),t(h,"placeholder","Your message"),h.required=!0,n.disabled=o[5],t(n,"type","submit"),t(n,"class","button bg-radient-ellipse-c from-purple-600 via-purple-800 to-purple-900 [background-size:100%;] hover:[background-size:200%;] focus:[background-size:200%;] text-white font-bold font-montserrat py-2 px-4 rounded w-fit transition-[background-size] duration-500"),t(m,"class","flex justify-between items-center"),t(r,"class","w-full flex flex-col space-y-4 svelte-13qc0ai"),t(b,"class","flex w-full md:w-1/2 font-montserrat"),t(e,"class","container mx-auto px-6 md:px-12 lg:px-24 py-12 flex flex-wrap md:flex-nowrap"),t(s,"id","contact_me"),t(s,"class","w-full")},m(d,w){U(d,s,w),f(s,e),f(e,a),f(e,u),f(e,b),f(b,r),f(r,l),y(l,o[0]),f(r,E),f(r,p),y(p,o[1]),f(r,k),f(r,h),y(h,o[2]),f(r,q),f(r,m),f(m,n),f(n,D),f(m,P),c&&c.m(m,null),z||(L=[M(l,"input",o[7]),M(p,"input",o[8]),M(h,"input",o[9]),M(r,"submit",o[6])],z=!0)},p(d,[w]){w&1&&l.value!==d[0]&&y(l,d[0]),w&2&&p.value!==d[1]&&y(p,d[1]),w&4&&y(h,d[2]),w&32&&(n.disabled=d[5]),d[3]?c?c.p(d,w):(c=B(d),c.c(),c.m(m,null)):c&&(c.d(1),c=null)},i:j,o:j,d(d){d&&x(s),c&&c.d(),z=!1,X(L)}}}function Q(o,s,e){let a,i,u,b,r=!1,l=!1;async function E(q){if(q.preventDefault(),l)return;e(5,l=!0);const m=new FormData(q.currentTarget);try{const n=await fetch("/api/sendEmail",{method:"POST",body:m});if(n.status===429)throw new Error("Please wait 15 minutes after sending your last message.");if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const D=await n.json();e(4,r=!0),e(3,b=D.message||"Your message was sent successfully!")}catch(n){console.error("Error sending message: ",n),e(4,r=!1),e(3,b=n.message)}finally{e(5,l=!1)}e(0,a=""),e(1,i=""),e(2,u="")}function p(){a=this.value,e(0,a)}function k(){i=this.value,e(1,i)}function h(){u=this.value,e(2,u)}return[a,i,u,b,r,l,E,p,k,h]}class $ extends A{constructor(s){super(),F(this,s,Q,K,R,{})}}export{$ as default};
