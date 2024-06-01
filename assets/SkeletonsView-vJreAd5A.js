import{u as p,a as h}from"./usePrismInitialization-JprQpe3V.js";import{_ as v,r as m,e as g,m as k,f as b,o as d,c as r,b as e,g as a,w as i,n,p as x,q as f,h as t}from"./index-qFIyUaa1.js";const s=c=>(x("data-v-e905c563"),c=c(),f(),c),I=s(()=>e("h1",null,"Skeletons",-1)),S=s(()=>e("p",{class:"mar-b-10"},[t("Skeleton is an animated placeholder that displays instead of content during page load. "),e("br"),t("It mimics the structure of the content, enhancing the perception of load speed and improving the user experience.")],-1)),z={class:"demo-block mar-b-10"},y=s(()=>e("h3",{class:"page-subtitle"},"Basic Skeleton",-1)),w=s(()=>e("div",{class:"component-description"}," Here are our basic Skeleton-boxes with full-length ",-1)),T=s(()=>e("pre",{class:"default-positioning"},[t(""),e("code",{class:"language-markup"},`
<h2 class="title skeleton-box">Title</h2>
`),t(`
`)],-1)),B={class:"demo-block mar-b-10"},C=s(()=>e("div",{class:"component-description"}," ...and our basic Skeleton-boxes with short length: ",-1)),V=s(()=>e("pre",{class:"default-positioning"},[t(""),e("code",{class:"language-markup"},`
<h2 class="title skeleton-box-short">Short Title</h2>
`),t(`
`)],-1)),H={class:"demo-block mar-b-10"},L=s(()=>e("h3",{class:"page-subtitle"},"Skeleton Blocks",-1)),M=s(()=>e("div",{class:"component-description"}," Here you can use our Skeleton blocks: ",-1)),N=s(()=>e("div",{class:"skeleton-block"},null,-1)),q=s(()=>e("pre",{class:"default-positioning"},[t(""),e("code",{class:"language-markup"},`
<div class="skeleton-block">Short Title</div>
`),t(`
`)],-1)),A={class:"demo-block mar-b-10"},D=s(()=>e("h3",{class:"page-subtitle"},"Skeleton lines",-1)),E=s(()=>e("div",{class:"component-description"},[t(" Skeleton lines could be used, when you need to replace text-lines etc. Every "),e("b",null,"<div></div>"),t(" add a new line. ")],-1)),P=s(()=>e("div",{class:"skeleton-box-lines"},[e("div"),e("div"),e("div"),e("div")],-1)),R=s(()=>e("pre",{class:"default-positioning"},[t(""),e("code",{class:"language-markup"},`
<div class="skeleton-box-lines">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
`),t(`
`)],-1)),U={class:"demo-block mar-b-10"},Y=s(()=>e("h3",{class:"page-subtitle"},"Images Skeleton",-1)),j=s(()=>e("div",{class:"component-description"}," Images also can be replaced by Skeleton-boxes. ",-1)),F=s(()=>e("img",{src:"https://picsum.photos/16",alt:"Image demo"},null,-1)),G=[F],J=s(()=>e("br",null,null,-1)),K=s(()=>e("img",{src:"https://picsum.photos/32",alt:"Image demo"},null,-1)),O=[K],Q=s(()=>e("br",null,null,-1)),W=s(()=>e("img",{src:"https://picsum.photos/64",alt:"Image demo"},null,-1)),X=[W],Z=s(()=>e("br",null,null,-1)),$=s(()=>e("img",{src:"https://picsum.photos/128",alt:"Image demo"},null,-1)),ee=[$],se=s(()=>e("br",null,null,-1)),te=s(()=>e("img",{src:"https://picsum.photos/256",alt:"Image demo"},null,-1)),oe=[te],ie=s(()=>e("pre",{class:"default-positioning"},[t(""),e("code",{class:"language-markup"},`
<figure class="image size-16x16 skeleton-box">
  <img src="https://picsum.photos/16" alt="Image demo">
</figure>
<figure class="image size-32x32 skeleton-box">
  <img src="https://picsum.photos/32" alt="Image demo">
</figure>
<figure class="image size-64x64 skeleton-box">
  <img src="https://picsum.photos/64" alt="Image demo">
</figure>
<figure class="image size-128x128 skeleton-box">
  <img src="https://picsum.photos/128" alt="Image demo">
</figure>
<figure class="image size-256x256 skeleton-box">
  <img src="https://picsum.photos/256" alt="Image demo">
</figure>
`),t(`
`)],-1)),ne={class:"demo-block mar-b-10"},le=s(()=>e("div",{class:"component-description"}," You can also use Skeleton-boxes for more complex HTML structures: ",-1)),ae={class:"article-item"},ce={class:"article-poster"},de={class:"poster-link"},re=s(()=>e("img",{src:"https://picsum.photos/700/300"},null,-1)),ue=[re],me={class:"article-content"},_e={class:"text-content"},pe={class:"article-description"},he={key:0,class:"skeleton-box-lines"},ve=s(()=>e("div",null,null,-1)),ge=s(()=>e("div",null,null,-1)),ke=s(()=>e("div",null,null,-1)),be=[ve,ge,ke],xe={key:1},fe={class:"article-meta"},Ie=s(()=>e("pre",{class:"default-positioning"},[t(""),e("code",{class:"language-markup"},`
<article class="article-item">
  <div class="article-poster">
    <a class="poster-link">
      <figure class="image skeleton-box">
        <img src="https://picsum.photos/700/300">
      </figure>
    </a>
  </div>
  <div class="article-content">
    <div class="text-content">
      <a>
        <h3 class="article-title skeleton-box">Lorem ipsum dolor sit amet, consectetur.</h3>
      </a>
      <div class="article-description">
        <div class="skeleton-box-lines">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="article-meta">
      <div class="date skeleton-box-short">2024 May 30
      </div>
      <a>
        <span class="skeleton-box-short">Read more</span>
      </a>
    </div>
  </div>
</article>
`),t(`
`)],-1)),Se={__name:"SkeletonsView",setup(c){const o=m(!0),u=m(null),_=()=>{o.value=!o.value};return g(async()=>{u.value=setInterval(_,3e3),p(),h()}),k(()=>{clearInterval(u.value)}),(ze,ye)=>{const l=b("DemonstrationBox");return d(),r("div",null,[I,S,e("div",z,[y,w,a(l,null,{"demo-slot":i(()=>[e("h2",{class:n(["title",{"skeleton-box":o.value}])},"Title",2)]),"code-slot":i(()=>[T]),_:1})]),e("div",B,[C,a(l,null,{"demo-slot":i(()=>[e("h2",{class:n(["title",{"skeleton-box-short":o.value}])},"Short Title",2)]),"code-slot":i(()=>[V]),_:1})]),e("div",H,[L,M,a(l,null,{"demo-slot":i(()=>[N]),"code-slot":i(()=>[q]),_:1})]),e("div",A,[D,E,a(l,null,{"demo-slot":i(()=>[P]),"code-slot":i(()=>[R]),_:1})]),e("div",U,[Y,j,a(l,null,{"demo-slot":i(()=>[e("figure",{class:n(["image size-16x16",{"skeleton-box":o.value}])},G,2),J,e("figure",{class:n(["image size-32x32",{"skeleton-box":o.value}])},O,2),Q,e("figure",{class:n(["image size-64x64",{"skeleton-box":o.value}])},X,2),Z,e("figure",{class:n(["image size-128x128",{"skeleton-box":o.value}])},ee,2),se,e("figure",{class:n(["image size-256x256",{"skeleton-box":o.value}])},oe,2)]),"code-slot":i(()=>[ie]),_:1})]),e("div",ne,[le,a(l,null,{"demo-slot":i(()=>[e("article",ae,[e("div",ce,[e("a",de,[e("figure",{class:n(["image",{"skeleton-box":o.value}])},ue,2)])]),e("div",me,[e("div",_e,[e("a",null,[e("h3",{class:n(["article-title",{"skeleton-box":o.value}])},"Lorem ipsum dolor sit amet, consectetur.",2)]),e("div",pe,[o.value?(d(),r("div",he,be)):(d(),r("p",xe," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aperiam cum cupiditate doloribus dolorum esse et eum hic id impedit inventore ipsa ipsam ipsum iste iure magni maxime nihil nobis odit pariatur provident, quia ratione repellat repellendus repudiandae saepe tenetur totam vero voluptate. Tempore! "))])]),e("div",fe,[e("div",{class:n(["date",{"skeleton-box-short":o.value}])},"2024 May 30 ",2),e("a",null,[e("span",{class:n({"skeleton-box-short":o.value})},"Read more",2)])])])])]),"code-slot":i(()=>[Ie]),_:1})])])}}},Be=v(Se,[["__scopeId","data-v-e905c563"]]);export{Be as default};
