import{S as g,i as Q,s as R,k as D,a as P,q as v,l as M,c as B,m as S,r as w,h as _,n as C,b as y,C as G,D as d,E as $,F as J,u as E,G as Z,H as le,I as re,y as se,z as ne,A as ue,g as V,d as Y,B as ae,J as oe,K as fe,L as ie,M as pe}from"../chunks/index.999cfe3c.js";function me(e){let l,n,a,p,t,m=parseInt(e[0])+"",r,o,f=parseInt(e[1])+"",I,h,L,x,c,N,H,k=parseInt(e[4])+"",T,U,j;return{c(){l=D("input"),n=P(),a=D("input"),p=P(),t=D("p"),r=v(m),o=v(" + "),I=v(f),h=v(" = "),L=v(e[2]),x=P(),c=D("p"),N=v(e[2]),H=v(" × 2 = "),T=v(k),this.h()},l(u){l=M(u,"INPUT",{class:!0,type:!0}),n=B(u),a=M(u,"INPUT",{class:!0,type:!0}),p=B(u),t=M(u,"P",{class:!0});var i=S(t);r=w(i,m),o=w(i," + "),I=w(i,f),h=w(i," = "),L=w(i,e[2]),i.forEach(_),x=B(u),c=M(u,"P",{class:!0});var A=S(c);N=w(A,e[2]),H=w(A," × 2 = "),T=w(A,k),A.forEach(_),this.h()},h(){C(l,"class","bg-fadedpink rounded-2xl p-5 flex text-center m-auto text-xl my-5 text-red-400 w-[400px]"),C(l,"type","number"),C(a,"class","bg-fadedblue rounded-2xl p-5 flex text-center m-auto text-xl my-5 text-red-400 w-[400px]"),C(a,"type","number"),C(t,"class","text-2xl font-extrabold text-center text-slate-300"),C(c,"class","text-2xl font-extrabold text-center text-slate-300")},m(u,i){y(u,l,i),G(l,e[0]),y(u,n,i),y(u,a,i),G(a,e[1]),y(u,p,i),y(u,t,i),d(t,r),d(t,o),d(t,I),d(t,h),d(t,L),y(u,x,i),y(u,c,i),d(c,N),d(c,H),d(c,T),U||(j=[$(l,"input",e[5]),$(l,"input",e[6]),$(a,"input",e[7]),$(a,"input",e[8])],U=!0)},p(u,[i]){i&1&&J(l.value)!==u[0]&&G(l,u[0]),i&2&&J(a.value)!==u[1]&&G(a,u[1]),i&1&&m!==(m=parseInt(u[0])+"")&&E(r,m),i&2&&f!==(f=parseInt(u[1])+"")&&E(I,f),i&4&&E(L,u[2]),i&4&&E(N,u[2]),i&16&&k!==(k=parseInt(u[4])+"")&&E(T,k)},i:Z,o:Z,d(u){u&&_(l),u&&_(n),u&&_(a),u&&_(p),u&&_(t),u&&_(x),u&&_(c),U=!1,le(j)}}}function _e(e,l,n){let a,p,{numOne:t=0}=l,{numTwo:m=0}=l,r=!1;function o(){if(r===!0)clearInterval(f);else{let c=Math.floor(Math.random()*10);console.log(c),c>=7&&n(0,t=parseInt(t)+1),c<4&&n(1,m=parseInt(m)+1)}}const f=setInterval(o,1e3);re(()=>{clearInterval(f)});function I(){t=J(this.value),n(0,t)}const h=()=>n(3,r=!0);function L(){m=J(this.value),n(1,m)}const x=()=>n(3,r=!0);return e.$$set=c=>{"numOne"in c&&n(0,t=c.numOne),"numTwo"in c&&n(1,m=c.numTwo)},e.$$.update=()=>{e.$$.dirty&3&&n(2,a=parseInt(t)+parseInt(m)),e.$$.dirty&4&&n(4,p=a*2),e.$$.dirty&3&&console.log(parseInt(t)+" "+parseInt(m))},[t,m,a,r,p,I,h,L,x]}class ce extends g{constructor(l){super(),Q(this,l,_e,me,R,{numOne:0,numTwo:1})}}function be(e){let l,n=te(e[0])+"",a,p,t=(e[0].toLowerCase()!=="bob"?e[0]:ee(e[0]))+"",m,r,o,f,I,h,L,x,c,N=e[1]===1?"time":"times",H,k,T,U=e[2].join(" + ")+"",j,u,i,A,q,O,K,X;return q=new ce({props:{numOne:"0",numTwo:"0"}}),{c(){l=D("h1"),a=v(n),p=P(),m=v(t),r=v("!"),o=P(),f=D("input"),I=P(),h=D("button"),L=v("Clicked "),x=v(e[1]),c=P(),H=v(N),k=P(),T=D("p"),j=v(U),u=v(" = "),i=v(e[3]),A=P(),se(q.$$.fragment),this.h()},l(s){l=M(s,"H1",{class:!0});var b=S(l);a=w(b,n),p=B(b),m=w(b,t),r=w(b,"!"),b.forEach(_),o=B(s),f=M(s,"INPUT",{class:!0,type:!0}),I=B(s),h=M(s,"BUTTON",{class:!0});var z=S(h);L=w(z,"Clicked "),x=w(z,e[1]),c=B(z),H=w(z,N),z.forEach(_),k=B(s),T=M(s,"P",{class:!0});var F=S(T);j=w(F,U),u=w(F," = "),i=w(F,e[3]),F.forEach(_),A=B(s),ne(q.$$.fragment,s),this.h()},h(){C(l,"class","text-2xl text-center text-slate-100"),C(f,"class","bg-fadedblue h-[64px] w-[456px] flex m-auto mt-7 rounded-3xl text-2xl text-slate-100 px-4"),C(f,"type","text"),C(h,"class","bg-fuchsia-200 p-2 rounded-md flex mt-5 m-auto text-2xl"),C(T,"class","text-center mt-5 text-xl text-slate-400")},m(s,b){y(s,l,b),d(l,a),d(l,p),d(l,m),d(l,r),y(s,o,b),y(s,f,b),y(s,I,b),y(s,h,b),d(h,L),d(h,x),d(h,c),d(h,H),y(s,k,b),y(s,T,b),d(T,j),d(T,u),d(T,i),y(s,A,b),ue(q,s,b),O=!0,K||(X=[$(f,"input",e[5]),$(h,"click",e[4])],K=!0)},p(s,[b]){(!O||b&1)&&n!==(n=te(s[0])+"")&&E(a,n),(!O||b&1)&&t!==(t=(s[0].toLowerCase()!=="bob"?s[0]:ee(s[0]))+"")&&E(m,t),(!O||b&2)&&E(x,s[1]),(!O||b&2)&&N!==(N=s[1]===1?"time":"times")&&E(H,N),(!O||b&4)&&U!==(U=s[2].join(" + ")+"")&&E(j,U),(!O||b&8)&&E(i,s[3])},i(s){O||(V(q.$$.fragment,s),O=!0)},o(s){Y(q.$$.fragment,s),O=!1},d(s){s&&_(l),s&&_(o),s&&_(f),s&&_(I),s&&_(h),s&&_(k),s&&_(T),s&&_(A),ae(q,s),K=!1,le(X)}}}const W="bob";function de(){console.log("we Don't talk about that guy")}function ee(e){return e.toLowerCase()===W?"we don't talk about that guy":", someone..."}function te(e){return e.toLowerCase()===W?"I love you, but ":"I love you"}function Ie(e,l,n){let a="{name}",p=0,t=[1,2],m=3;function r(){n(1,p++,p),t.push(t.length+1),console.log(t);let f=0;for(let I=0;I<t.length;I++)f+=t[I];n(3,m=f),n(2,t)}return[a,p,t,m,r,f=>{n(0,a=f.target.value),a.toLowerCase()===W&&de()}]}class he extends g{constructor(l){super(),Q(this,l,Ie,be,R,{})}}function ve(e){let l,n,a,p,t;const m=e[1].default,r=oe(m,e,e[0],null);return p=new he({}),{c(){l=D("div"),n=D("main"),r&&r.c(),a=P(),se(p.$$.fragment),this.h()},l(o){l=M(o,"DIV",{class:!0});var f=S(l);n=M(f,"MAIN",{class:!0});var I=S(n);r&&r.l(I),a=B(I),ne(p.$$.fragment,I),I.forEach(_),f.forEach(_),this.h()},h(){C(n,"class",""),C(l,"class","app")},m(o,f){y(o,l,f),d(l,n),r&&r.m(n,null),d(n,a),ue(p,n,null),t=!0},p(o,[f]){r&&r.p&&(!t||f&1)&&fe(r,m,o,o[0],t?pe(m,o[0],f,null):ie(o[0]),null)},i(o){t||(V(r,o),V(p.$$.fragment,o),t=!0)},o(o){Y(r,o),Y(p.$$.fragment,o),t=!1},d(o){o&&_(l),r&&r.d(o),ae(p)}}}function we(e,l,n){let{$$slots:a={},$$scope:p}=l;return e.$$set=t=>{"$$scope"in t&&n(0,p=t.$$scope)},[p,a]}class Te extends g{constructor(l){super(),Q(this,l,we,ve,R,{})}}export{Te as default};