import{_ as f,u as S,r,d as H,e as T,m as M,f as B,o as m,c as h,b as e,g as a,w as t,n,h as l,i as d,p as I,q as L}from"./index-Cezryfoa.js";import{u as y}from"./useDecodeHtml-C0ehvwlq.js";import{u as C,a as z}from"./usePrismInitialization-BkL16XLn.js";const s=u=>(I("data-v-1bb54ff8"),u=u(),L(),u),w=s(()=>e("h1",null,"Skeleton-boxes",-1)),V={class:"demo-block"},D=s(()=>e("h3",{class:"page-subtitle"},"Basic Skeleton",-1)),E=s(()=>e("div",{class:"component-description"}," Here you can use our basic Skeleton-boxes: ",-1)),N=["innerHTML"],q={class:"demo-block"},A=s(()=>e("h3",{class:"page-subtitle"},"Basic Skeleton",-1)),P=s(()=>e("div",{class:"component-description"}," Here you can use our basic Skeleton-boxes: ",-1)),R=["innerHTML"],U={class:"demo-block"},j=s(()=>e("h3",{class:"page-subtitle"},"Basic Skeleton",-1)),F=s(()=>e("div",{class:"component-description"}," Here you can use our basic Skeleton-boxes: ",-1)),G=s(()=>e("div",{class:"skeleton-block"},null,-1)),J=["innerHTML"],K={class:"demo-block"},O=s(()=>e("h3",{class:"page-subtitle"},"Basic Skeleton",-1)),Q=s(()=>e("div",{class:"component-description"}," Here you can use our basic Skeleton-boxes: ",-1)),W=s(()=>e("div",{class:"skeleton-box-lines"},[e("div"),e("div"),e("div"),e("div")],-1)),X=["innerHTML"],Y={class:"demo-block"},Z=s(()=>e("h3",{class:"page-subtitle"},"Images Skeleton",-1)),$=s(()=>e("div",{class:"component-description"}," Here you can use our basic Skeleton-boxes: ",-1)),ee=s(()=>e("img",{src:"https://picsum.photos/16",alt:"Image demo"},null,-1)),se=[ee],oe=s(()=>e("br",null,null,-1)),te=s(()=>e("img",{src:"https://picsum.photos/32",alt:"Image demo"},null,-1)),le=[te],ne=s(()=>e("br",null,null,-1)),ie=s(()=>e("img",{src:"https://picsum.photos/64",alt:"Image demo"},null,-1)),ce=[ie],ae=s(()=>e("br",null,null,-1)),de=s(()=>e("img",{src:"https://picsum.photos/128",alt:"Image demo"},null,-1)),ue=[de],_e=s(()=>e("br",null,null,-1)),re=s(()=>e("img",{src:"https://picsum.photos/256",alt:"Image demo"},null,-1)),me=[re],he=["innerHTML"],pe={class:"demo-block"},ve=s(()=>e("h3",{class:"page-subtitle"},"More complex structures Skeletons",-1)),be=s(()=>e("div",{class:"component-description"}," Here you can use our basic Skeleton-boxes: ",-1)),ge={class:"article-item"},ke={class:"article-poster"},xe={class:"poster-link"},fe=s(()=>e("img",{src:"https://picsum.photos/700/300"},null,-1)),Se=[fe],He={class:"article-content"},Te={class:"text-content"},Me={class:"article-description"},Be={key:0,class:"skeleton-box-lines"},Ie=s(()=>e("div",null,null,-1)),Le=s(()=>e("div",null,null,-1)),ye=s(()=>e("div",null,null,-1)),Ce=[Ie,Le,ye],ze={key:1},we={class:"article-meta"},Ve=["innerHTML"],De={__name:"SkeletonsView",setup(u){const g=S(),p=r([]);let i=H({basic:null});const k={Basic:"Basic Skeleton"},o=r(!0),v=r(null),x=()=>{o.value=!o.value};return T(async()=>{v.value=setInterval(x,3e3),p.value=g.getComponentByType("input"),p.value.forEach(_=>{const b=y(_.content.code);switch(_.content.title){case k.Basic:i.basic=b;break}}),C(),z()}),M(()=>{clearInterval(v.value)}),(_,b)=>{const c=B("DemonstrationBox");return m(),h("div",null,[w,e("div",V,[D,E,a(c,null,{"demo-slot":t(()=>[e("h2",{class:n(["title",{"skeleton-box":o.value}])},"Title",2)]),"code-slot":t(()=>[e("pre",null,[l("        "),e("code",{class:"language-html",innerHTML:d(i).small},null,8,N),l(`
      `)])]),_:1})]),e("div",q,[A,P,a(c,null,{"demo-slot":t(()=>[e("h2",{class:n(["title",{"skeleton-box-short":o.value}])},"Title",2)]),"code-slot":t(()=>[e("pre",null,[l("        "),e("code",{class:"language-html",innerHTML:d(i).small},null,8,R),l(`
      `)])]),_:1})]),e("div",U,[j,F,a(c,null,{"demo-slot":t(()=>[G]),"code-slot":t(()=>[e("pre",null,[l("        "),e("code",{class:"language-html",innerHTML:d(i).small},null,8,J),l(`
      `)])]),_:1})]),e("div",K,[O,Q,a(c,null,{"demo-slot":t(()=>[W]),"code-slot":t(()=>[e("pre",null,[l("        "),e("code",{class:"language-html",innerHTML:d(i).small},null,8,X),l(`
      `)])]),_:1})]),e("div",Y,[Z,$,a(c,null,{"demo-slot":t(()=>[e("figure",{class:n(["image size-16x16",{"skeleton-box":o.value}])},se,2),oe,e("figure",{class:n(["image size-32x32",{"skeleton-box":o.value}])},le,2),ne,e("figure",{class:n(["image size-64x64",{"skeleton-box":o.value}])},ce,2),ae,e("figure",{class:n(["image size-128x128",{"skeleton-box":o.value}])},ue,2),_e,e("figure",{class:n(["image size-256x256",{"skeleton-box":o.value}])},me,2)]),"code-slot":t(()=>[e("pre",null,[l("        "),e("code",{class:"language-html",innerHTML:d(i).small},null,8,he),l(`
      `)])]),_:1})]),e("div",pe,[ve,be,a(c,null,{"demo-slot":t(()=>[e("article",ge,[e("div",ke,[e("a",xe,[e("figure",{class:n(["image",{"skeleton-box":o.value}])},Se,2)])]),e("div",He,[e("div",Te,[e("a",null,[e("h3",{class:n(["article-title",{"skeleton-box":o.value}])},"Lorem ipsum dolor sit amet, consectetur.",2)]),e("div",Me,[o.value?(m(),h("div",Be,Ce)):(m(),h("p",ze," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aperiam cum cupiditate doloribus dolorum esse et eum hic id impedit inventore ipsa ipsam ipsum iste iure magni maxime nihil nobis odit pariatur provident, quia ratione repellat repellendus repudiandae saepe tenetur totam vero voluptate. Tempore! "))])]),e("div",we,[e("div",{class:n(["date",{"skeleton-box-short":o.value}])},"2024 May 30 ",2),e("a",null,[e("span",{class:n({"skeleton-box-short":o.value})},"Read more",2)])])])])]),"code-slot":t(()=>[e("pre",null,[l("        "),e("code",{class:"language-html",innerHTML:d(i).small},null,8,Ve),l(`
      `)])]),_:1})])])}}},Ae=f(De,[["__scopeId","data-v-1bb54ff8"]]);export{Ae as default};
