import{u as p,r as _,d as h,e as b,f as A,o as g,c as y,b as e,g as t,w as o,j as s,h as i,i as u}from"./index-LqJc7zKO.js";import{u as v}from"./useDecodeHtml-C0ehvwlq.js";import{u as L,a as f}from"./usePrismInitialization-CsiD3u4h.js";const k=e("h1",null,"Accordions",-1),x={class:"demo-block"},T=e("h3",{class:"page-subtitle"},"Basic Accordion",-1),C=e("div",{class:"component-description"},' Here you can use our basic Accordion component with its default styling. Also you can set the Accordion to be opened by default, just adding is-active-on-init="true" parameter. ',-1),w={class:"accordions-block"},q=e("div",{class:"link-text"},"Accordion Title",-1),B=e("h3",null,"Lorem ipsum dolor sit amet.",-1),H=e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur assumenda dolorum iure mollitia nemo tempora? Alias amet cupiditate, dicta earum eum maiores nemo repellat?",-1),M=e("div",{class:"link-text"},"Accordion Title 2",-1),V=e("div",{class:"link-text"},"Accordion Title 3",-1),D=["innerHTML"],E={class:"demo-block"},G=e("h3",{class:"page-subtitle"},"Basic Accordion without caret",-1),N=e("div",{class:"component-description"}," Here you can use our basic Accordion component with its default styling, but without caret. Also you can add aligning of header text. ",-1),j={class:"accordions-block"},P=e("div",{class:"link-text"},"Accordion Title",-1),W=e("h3",null,"Lorem ipsum dolor sit amet.",-1),z=e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur assumenda dolorum iure mollitia nemo tempora? Alias amet cupiditate, dicta earum eum maiores nemo repellat?",-1),I=e("div",{class:"link-text"},"Accordion Title 2",-1),S=e("div",{class:"link-text"},"Accordion Title 3",-1),$=["innerHTML"],Q={__name:"AccordionsView",setup(F){const m=p(),r=_([]);let a=h({noCaret:null,group:null});const l={AccordionWithoutCaret:"Accordion without caret",AccordionGroup:"Accordion Group"};return b(async()=>{r.value=m.getComponentByType("accordion"),r.value.forEach(c=>{const n=v(c.content.code);switch(c.content.title){case l.AccordionWithoutCaret:a.noCaret=n;break;case l.AccordionGroup:a.group=n;break}}),L(),f()}),(c,n)=>{const d=A("DemonstrationBox");return g(),y("div",null,[k,e("div",x,[T,C,t(d,null,{"demo-slot":o(()=>[e("div",w,[t(s,{type:"basic",class:"mar-b-1"},{header:o(()=>[q]),"accordion-body":o(()=>[B,H]),_:1}),t(s,{type:"basic",class:"mar-b-1","is-active-on-init":"true"},{header:o(()=>[M]),"accordion-body":o(()=>[i(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta esse mollitia! Labore, quae, similique? ")]),_:1}),t(s,{type:"basic",class:"mar-b-1"},{header:o(()=>[V]),"accordion-body":o(()=>[i(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta esse mollitia! Labore, quae, similique? ")]),_:1})])]),"code-slot":o(()=>[e("pre",null,[i("        "),e("code",{class:"language-html",innerHTML:u(a).group},null,8,D),i(`
      `)])]),_:1})]),e("div",E,[G,N,t(d,null,{"demo-slot":o(()=>[e("div",j,[t(s,{type:"basic","no-caret":"true",align:"center",class:"mar-b-1"},{header:o(()=>[P]),"accordion-body":o(()=>[W,z]),_:1}),t(s,{type:"basic","no-caret":"true",class:"mar-b-1"},{header:o(()=>[I]),"accordion-body":o(()=>[i(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta esse mollitia! Labore, quae, similique? ")]),_:1}),t(s,{type:"basic","no-caret":"true",align:"right",class:"mar-b-1"},{header:o(()=>[S]),"accordion-body":o(()=>[i(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta esse mollitia! Labore, quae, similique? ")]),_:1})])]),"code-slot":o(()=>[e("pre",null,[i("          "),e("code",{class:"language-html",innerHTML:u(a).noCaret},null,8,$),i(`
        `)])]),_:1})])])}}};export{Q as default};
