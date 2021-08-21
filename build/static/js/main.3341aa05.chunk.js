(this["webpackJsonptf-react-chester"]=this["webpackJsonptf-react-chester"]||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var c=a(2),i=a(33),n=a.n(i),s=(a(69),a(70),a(71),a(72),a(6)),l=a(133),r=a(13),o=a(10),j=(a(73),a(14)),d=a(9),m=a.n(d),b=a(36),u=a.n(b),h=a(128),O=a(24),p=a.n(O),x=a(56),g=a.n(x),v=a(0);var f=function(){return Object(v.jsxs)("div",{className:"mi-bglines",children:[Object(v.jsx)("span",{}),Object(v.jsx)("span",{}),Object(v.jsx)("span",{}),Object(v.jsx)("span",{}),Object(v.jsx)("span",{})]})},N=a(11),y=a.n(N);var k=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(!1),l=Object(s.a)(n,2),o=l[0],j=l[1];return Object(c.useEffect)((function(){m.a.get("/api/information").then((function(e){i(e.data)}))}),[]),Object(v.jsxs)("nav",{className:o?"mi-header is-visible":"mi-header",children:[Object(v.jsx)("button",{onClick:function(){j(!o)},className:"mi-header-toggler",children:o?Object(v.jsx)(y.a,{name:"close"}):Object(v.jsx)(y.a,{name:"menu"})}),Object(v.jsxs)("div",{className:"mi-header-inner",children:[Object(v.jsx)("div",{className:"mi-header-image",children:Object(v.jsx)(r.b,{to:"/",children:Object(v.jsx)("img",{src:a.brandImage,alt:"brandimage"})})}),Object(v.jsxs)("ul",{className:"mi-header-menu",children:[Object(v.jsx)("li",{children:Object(v.jsx)(r.c,{exact:!0,to:"/",children:Object(v.jsx)("span",{children:"Home"})})}),Object(v.jsx)("li",{children:Object(v.jsx)(r.c,{to:"/about",children:Object(v.jsx)("span",{children:"About"})})}),Object(v.jsx)("li",{children:Object(v.jsx)(r.c,{to:"/resume",children:Object(v.jsx)("span",{children:"Resume"})})}),Object(v.jsx)("li",{children:Object(v.jsx)(r.c,{to:"/portfolios",children:Object(v.jsx)("span",{children:"Portfolio"})})}),Object(v.jsx)("li",{children:Object(v.jsx)(r.c,{to:"/blogs",children:Object(v.jsx)("span",{children:"Blog"})})}),Object(v.jsx)("li",{children:Object(v.jsx)(r.c,{to:"/contact",children:Object(v.jsx)("span",{children:"Contact"})})})]}),Object(v.jsxs)("p",{className:"mi-header-copyright",children:["\xa9 ",(new Date).getFullYear()," ",Object(v.jsx)("b",{children:"Illumin8 Analytics Group"})]})]})]})};var S=function(e){return Object(v.jsxs)("div",{className:"mi-wrapper",children:[Object(v.jsx)(f,{}),Object(v.jsx)(k,{}),e.children]})};var w=function(e){return Object(v.jsxs)("div",{className:"mi-sectiontitle",children:[Object(v.jsx)("h2",{children:e.title}),Object(v.jsx)("span",{children:e.title})]})};var C=function(e){return Object(v.jsxs)("div",{className:"mi-service",children:[Object(v.jsx)("span",{className:"mi-service-icon",children:Object(v.jsx)(y.a,{name:e.content.icon})}),Object(v.jsx)("h5",{children:e.content.title}),Object(v.jsx)("p",{children:e.content.details})]})};var E=function(e){return Object(v.jsx)("div",{className:"mi-testimonial-slideritem",children:Object(v.jsxs)("div",{className:"mi-testimonial",children:[Object(v.jsx)("div",{className:"mi-testimonial-content",children:Object(v.jsx)("p",{children:e.content.content})}),Object(v.jsxs)("div",{className:"mi-testimonial-author",children:[Object(v.jsx)("h5",{children:e.content.author.name}),Object(v.jsx)("h6",{children:e.content.author.designation})]})]})})};var P=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(""),l=Object(s.a)(n,2),r=l[0],o=l[1],d=Object(c.useState)([]),b=Object(s.a)(d,2),O=b[0],x=b[1],f=Object(c.useState)([]),N=Object(s.a)(f,2),y=N[0],k=N[1];return Object(c.useEffect)((function(){m.a.get("/api/information").then((function(e){o(e.data)})),m.a.get("/api/services").then((function(e){x(e.data)})),m.a.get("/api/reviews").then((function(e){k(e.data)}))}),[]),Object(v.jsxs)(S,{children:[Object(v.jsx)("div",{className:"mi-about-area mi-section mi-padding-top",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(w,{title:"About"}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-lg-6",children:Object(v.jsxs)("div",{className:"mi-about-image",children:[Object(v.jsx)(p.a,{src:r.aboutImage,placeholder:"/images/about-image-placeholder.png",children:function(e){return Object(v.jsx)("img",{src:e,alt:"aboutimage",onClick:function(){i({toggler:!a})}})}}),Object(v.jsx)("span",{className:"mi-about-image-icon",children:Object(v.jsx)(h.a,{})}),Object(v.jsx)(u.a,{toggler:a,sources:[r.aboutImageLg]})]})}),Object(v.jsx)("div",{className:"col-lg-6",children:Object(v.jsxs)("div",{className:"mi-about-content",children:[Object(v.jsx)("h3",{children:Object(v.jsx)("span",{className:"color-theme",children:r.name})}),Object(v.jsx)("p",{children:"I am a software engineer with a preference for CloudOps, backend development, and systems design. I have 4+ years of experience working with computer hardware, networking, and cybersecurity while managing the I.T. department of a small business."}),Object(v.jsx)("p",{children:"I attended Wake Forest University, majoring in Applied Math and Computer Science. I also completed a 6 month full stack development bootcamp at the University of North Carolina at Chapel Hill."}),Object(v.jsxs)("ul",{children:[r.name?Object(v.jsxs)("li",{children:[Object(v.jsx)("b",{children:"Full Name"})," ",r.name]}):null,r.phone?Object(v.jsxs)("li",{children:[Object(v.jsx)("b",{children:"Phone"})," ",r.phone]}):null,r.language?Object(v.jsxs)("li",{children:[Object(v.jsx)("b",{children:"Languages"})," ",r.language]}):null,r.email?Object(v.jsxs)("li",{children:[Object(v.jsx)("b",{children:"Email"})," ",r.email]}):null,r.address?Object(v.jsxs)("li",{children:[Object(v.jsx)("b",{children:"Address"})," ",r.address]}):null,r.freelanceStatus?Object(v.jsxs)("li",{children:[Object(v.jsx)("b",{children:"Freelance"})," ",r.freelanceStatus]}):null]}),Object(v.jsx)("p",{children:"*Please only use for initial contact. I will change this as crawlers and scrapers record it."}),Object(v.jsx)("a",{href:r.cvfile,target:"_blank",rel:"noopener noreferrer",className:"mi-button",children:"Download Resume"})]})})]})]})}),Object(v.jsx)("div",{className:"mi-service-area mi-section mi-padding-top",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(w,{title:"Core Competencies"}),Object(v.jsx)("div",{className:"mi-service-wrapper",children:Object(v.jsx)("div",{className:"row mt-30-reverse",children:O.map((function(e){return Object(v.jsx)("div",{className:"col-lg-4 col-md-6 col-12 mt-30",children:Object(v.jsx)(C,{content:e})},e.title)}))})})]})}),Object(v.jsx)("div",{className:"mi-review-area mi-section mi-padding-top mi-padding-bottom",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(w,{title:"Recent Blog Posts"}),Object(v.jsx)("div",{className:"row justify-content-center",children:Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)(g.a,Object(j.a)(Object(j.a)({className:"mi-testimonial-slider"},{dots:!1,infinite:!0,arrows:!1,speed:500,slidesToShow:2,slidesToScroll:2,autoplay:!0,autoplaySpeed:6e3,pauseOnHover:!0,adaptiveHeight:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),{},{children:y.map((function(e){return Object(v.jsx)(E,{content:e},e.id)}))}))})})]})})]})},A=a(61),I=a(62),M=a.p+"fc3e5ab868b616acad84281cb11a8fde.md";var B=function(){return Object(v.jsx)(S,{children:Object(v.jsx)("div",{className:"mi-blog-details mi-section mi-padding-top mi-padding-bottom",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsx)(A.a,{children:M,remarkPlugins:[I.a]})})})})};var D=function(e){var t,a=e.data,c=a.id,i=a.featuredImage,n=a.title,s=a.createDay,l=a.createMonth,o=a.filesource,j=function(e){var t=e.split("/");return t[t.length-1].slice(0,-3)};return Object(v.jsxs)("div",{className:"mi-blog",children:[Object(v.jsxs)("div",{className:"mi-blog-image",children:[Object(v.jsx)(r.b,{to:"blogs/blog-details/".concat(c,"/").concat(j(o)),children:Object(v.jsx)(p.a,{src:i,placeholder:"/images/blog-image-placeholder.png",children:function(e){return Object(v.jsx)("img",{src:e,alt:n})}})}),Object(v.jsxs)("div",{className:"mi-blog-date",children:[Object(v.jsx)("span",{className:"date",children:s}),Object(v.jsx)("span",{className:"month",children:(t=l,t.slice(0,3))})]})]}),Object(v.jsx)("div",{className:"mi-blog-content",children:Object(v.jsx)("h5",{children:Object(v.jsx)(r.b,{to:"blogs/blog-details/".concat(c,"/").concat(j(o)),children:n})})})]})};var F=function(e){var t=e.blogs;return Object(v.jsx)("div",{className:"row mt-30-reverse",children:t.map((function(e){return Object(v.jsx)("div",{className:"col-lg-6 col-md-6 col-12 mt-30",children:Object(v.jsx)(D,{data:e})},e.id)}))})};var G=function(e){for(var t=e.itemsPerPage,a=e.totalItems,c=e.paginate,i=e.currentPage,n=e.className,s=[],l=1;l<=Math.ceil(a/t);l++)s.push(l);return Object(v.jsx)("div",{className:n?"mi-pagination "+n:"mi-pagination",children:Object(v.jsxs)("ul",{children:[1===i?null:Object(v.jsx)("li",{children:Object(v.jsx)("a",{onClick:function(e){return c(e,i-1)},href:"!#",children:Object(v.jsx)(y.a,{name:"chevron-left"})})}),s.map((function(e){return Object(v.jsx)("li",{className:i===e?"is-active":null,children:Object(v.jsx)("a",{onClick:function(t){return c(t,e)},href:"!#",children:e})},e)})),i===s[s.length-1]?null:Object(v.jsx)("li",{children:Object(v.jsx)("a",{onClick:function(e){return c(e,i+1)},href:"!#",children:Object(v.jsx)(y.a,{name:"chevron-right"})})})]})})};var L=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(1),l=Object(s.a)(n,2),r=l[0],o=l[1],j=Object(c.useState)(6),d=Object(s.a)(j,1)[0];Object(c.useEffect)((function(){var e=!0;return m.a.get("/api/blog").then((function(t){e&&i(t.data)})),function(){return e=!1}}),[a]);var b=r*d,u=b-d,h=a.slice(u,b);return Object(v.jsx)(S,{children:Object(v.jsx)("div",{className:"mi-about mi-section mi-padding-top mi-padding-bottom",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(w,{title:"Blogs"}),Object(v.jsx)(F,{blogs:h}),a.length>d?Object(v.jsx)(G,{className:"mt-50",itemsPerPage:d,totalItems:a.length,paginate:function(e,t){e.preventDefault(),o(t)},currentPage:r}):null]})})})},W=a(5),_=a(129),H=a(130),U=a(131);var T=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)([]),l=Object(s.a)(n,2),r=l[0],o=l[1],d=Object(c.useState)([]),b=Object(s.a)(d,2),u=b[0],h=b[1],O=Object(c.useState)({name:"",email:"",subject:"",message:""}),p=Object(s.a)(O,2),x=p[0],g=p[1],f=Object(c.useState)(!1),N=Object(s.a)(f,2),y=N[0],k=N[1],C=Object(c.useState)(""),E=Object(s.a)(C,2),P=E[0],A=E[1],I=function(e){g(Object(j.a)(Object(j.a)({},x),{},Object(W.a)({},e.currentTarget.name,e.currentTarget.value)))};return Object(c.useEffect)((function(){m.a.get("/api/contactinfo").then((function(e){i(e.data.phoneNumbers),o(e.data.emailAddress),h(e.data.address)}))}),[]),Object(v.jsx)(S,{children:Object(v.jsx)("div",{className:"mi-contact-area mi-section mi-padding-top mi-padding-bottom",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(w,{title:"Contact Me"}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-lg-6",children:Object(v.jsxs)("div",{className:"mi-contact-formwrapper",children:[Object(v.jsx)("h4",{children:"Get In Touch"}),Object(v.jsxs)("form",{action:"#",className:"mi-form mi-contact-form",onSubmit:function(e){e.preventDefault(),x.name?x.email?x.subject?x.message?(k(!1),A("You message has been sent!!!")):(k(!0),A("Message is required")):(k(!0),A("Subject is required")):(k(!0),A("Email is required")):(k(!0),A("Name is required"))},children:[Object(v.jsxs)("div",{className:"mi-form-field",children:[Object(v.jsx)("label",{htmlFor:"contact-form-name",children:"Enter your name*"}),Object(v.jsx)("input",{onChange:I,type:"text",name:"name",id:"contact-form-name",value:x.name})]}),Object(v.jsxs)("div",{className:"mi-form-field",children:[Object(v.jsx)("label",{htmlFor:"contact-form-email",children:"Enter your email*"}),Object(v.jsx)("input",{onChange:I,type:"text",name:"email",id:"contact-form-email",value:x.email})]}),Object(v.jsxs)("div",{className:"mi-form-field",children:[Object(v.jsx)("label",{htmlFor:"contact-form-subject",children:"Enter your subject*"}),Object(v.jsx)("input",{onChange:I,type:"text",name:"subject",id:"contact-form-subject",value:x.subject})]}),Object(v.jsxs)("div",{className:"mi-form-field",children:[Object(v.jsx)("label",{htmlFor:"contact-form-message",children:"Enter your Message*"}),Object(v.jsx)("textarea",{onChange:I,name:"message",id:"contact-form-message",cols:"30",rows:"6",value:x.message})]}),Object(v.jsx)("div",{className:"mi-form-field",children:Object(v.jsx)("button",{className:"mi-button",type:"submit",children:"Send Mail"})})]}),y&&P?Object(v.jsx)("div",{className:"alert alert-danger mt-4",children:P}):!y&&P?Object(v.jsx)("div",{className:"alert alert-success mt-4",children:P}):null]})}),Object(v.jsx)("div",{className:"col-lg-6",children:Object(v.jsxs)("div",{className:"mi-contact-info",children:[a?Object(v.jsxs)("div",{className:"mi-contact-infoblock",children:[Object(v.jsx)("span",{className:"mi-contact-infoblock-icon",children:Object(v.jsx)(_.a,{})}),Object(v.jsxs)("div",{className:"mi-contact-infoblock-content",children:[Object(v.jsx)("h6",{children:"Phone"}),a.map((function(e){return Object(v.jsx)("p",{children:Object(v.jsx)("a",{href:e,children:e})},e)}))]})]}):null,r?Object(v.jsxs)("div",{className:"mi-contact-infoblock",children:[Object(v.jsx)("span",{className:"mi-contact-infoblock-icon",children:Object(v.jsx)(H.a,{})}),Object(v.jsxs)("div",{className:"mi-contact-infoblock-content",children:[Object(v.jsx)("h6",{children:"Email"}),r.map((function(e){return Object(v.jsx)("p",{children:Object(v.jsx)("a",{href:"mailto:".concat(e),children:e})},e)}))]})]}):null,a?Object(v.jsxs)("div",{className:"mi-contact-infoblock",children:[Object(v.jsx)("span",{className:"mi-contact-infoblock-icon",children:Object(v.jsx)(U.a,{})}),Object(v.jsxs)("div",{className:"mi-contact-infoblock-content",children:[Object(v.jsx)("h6",{children:"Address"}),Object(v.jsx)("p",{children:u})]})]}):null]})})]})]})})})},R=a(60),q=a.n(R);var z=function(e){var t=Object(c.useState)({}),a=Object(s.a)(t,2),i=a[0],n=a[1];return Object(c.useEffect)((function(){m.a.get("/api/information").then((function(e){n(e.data.socialLinks)}))}),[]),Object(v.jsxs)("ul",{className:e.bordered?"mi-socialicons mi-socialicons-bordered":"mi-socialicons",children:[i.facebook?Object(v.jsx)("li",{children:Object(v.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:i.facebook,children:Object(v.jsx)(y.a,{name:"facebook"})})}):null,i.twitter?Object(v.jsx)("li",{children:Object(v.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:i.twitter,children:Object(v.jsx)(y.a,{name:"twitter"})})}):null,i.pinterest?Object(v.jsx)("li",{children:Object(v.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:i.pinterest,children:Object(v.jsx)(y.a,{name:"pinterest"})})}):null,i.behance?Object(v.jsx)("li",{children:Object(v.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:i.behance,children:Object(v.jsx)(y.a,{name:"behance"})})}):null,i.linkedin?Object(v.jsx)("li",{children:Object(v.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:i.linkedin,children:Object(v.jsx)(y.a,{name:"linkedin"})})}):null,i.dribbble?Object(v.jsx)("li",{children:Object(v.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:i.dribbble,children:Object(v.jsx)(y.a,{name:"dribbble"})})}):null,i.github?Object(v.jsx)("li",{children:Object(v.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:i.github,children:Object(v.jsx)(y.a,{name:"github"})})}):null,i.quora?Object(v.jsx)("li",{children:Object(v.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:i.quora,children:Object(v.jsx)(y.a,{name:"quora"})})}):null,i.hackerrank?Object(v.jsx)("li",{children:Object(v.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:i.hackerrank,children:Object(v.jsx)(y.a,{name:"code"})})}):null]})};var J=function(e){var t=e.lightMode,a=Object(c.useState)(""),i=Object(s.a)(a,2),n=i[0],l=i[1];return Object(c.useEffect)((function(){m.a.get("/api/information").then((function(e){l(e.data)}))}),[]),Object(v.jsx)(S,{children:Object(v.jsxs)("div",{className:"mi-home-area mi-padding-section",children:[Object(v.jsx)(q.a,{className:"mi-home-particle",params:t?{particles:{number:{value:160,density:{enable:!1}},color:{value:"#000000"},opacity:{value:.1},size:{value:5,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}}}:{particles:{number:{value:160,density:{enable:!1}},color:{value:"#ffffff"},opacity:{value:.1},size:{value:5,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}}}}),Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"row justify-content-center",children:Object(v.jsx)("div",{className:"col-lg-10 col-12",children:Object(v.jsxs)("div",{className:"mi-home-content",children:[Object(v.jsxs)("h1",{children:["Hi, I am ",Object(v.jsx)("span",{className:"color-theme",children:n.name})]}),Object(v.jsx)("p",{children:n.aboutContent}),Object(v.jsx)(z,{bordered:!0})]})})})})]})})};var V=function(){return Object(v.jsx)(S,{children:Object(v.jsx)("div",{className:"mi-about-area mi-section",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"row justify-content-center",children:Object(v.jsx)("div",{className:"col-lg-8",children:Object(v.jsx)("div",{className:"notfound",children:Object(v.jsxs)("div",{className:"notfound-inner text-center",children:[Object(v.jsx)("h1",{children:"404"}),Object(v.jsx)("h3",{children:"Whoops!!! Page not found!"}),Object(v.jsx)(r.b,{to:"/",className:"mi-button",children:"Back to Home"})]})})})})})})})},Q=a(132);var Z=function(e){var t=Object(c.useState)(!1),a=Object(s.a)(t,2),i=a[0],n=a[1],l=e.content,r=l.title,o=l.subtitle,j=l.imageUrl,d=l.largeImageUrl,m=l.url;return Object(v.jsxs)("div",{className:"mi-portfolio mi-portfolio-visible",children:[Object(v.jsxs)("div",{className:"mi-portfolio-image",children:[Object(v.jsx)(p.a,{src:j,placeholder:"/images/portfolio-image-placeholder.png",children:function(e){return Object(v.jsx)("img",{src:e,alt:r})}}),Object(v.jsxs)("ul",{children:[d?Object(v.jsx)("li",{children:Object(v.jsx)("button",{onClick:function(){n(!i)},children:Object(v.jsx)(h.a,{})})}):null,m?Object(v.jsx)("li",{children:Object(v.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:m,children:Object(v.jsx)(Q.a,{})})}):null]})]}),m?Object(v.jsx)("h5",{children:Object(v.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:m,children:r})}):Object(v.jsx)("h5",{children:r}),o?Object(v.jsx)("h6",{children:o}):null,d?Object(v.jsx)(u.a,{toggler:i,sources:d}):null]})};var Y=function(e){var t=e.portfolios;return Object(v.jsx)("div",{className:"row mt-30-reverse",children:t.map((function(e){return Object(v.jsx)("div",{className:"col-lg-4 col-md-6 col-12 mt-30",children:Object(v.jsx)(Z,{content:e})},e.id)}))})};var K=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(1),l=Object(s.a)(n,2),r=l[0],o=l[1],j=Object(c.useState)(9),d=Object(s.a)(j,1)[0];Object(c.useEffect)((function(){var e=!0;return m.a.get("/api/portfolios").then((function(t){e&&i(t.data)})),function(){return e=!1}}),[a]);var b=r*d,u=b-d,h=a.slice(u,b);return Object(v.jsx)(S,{children:Object(v.jsx)("div",{className:"mi-about mi-section mi-padding-top mi-padding-bottom",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(w,{title:"Portfolio"}),Object(v.jsx)(Y,{portfolios:h}),a.length>d?Object(v.jsx)(G,{className:"mt-50",itemsPerPage:d,totalItems:a.length,paginate:function(e,t){e.preventDefault(),o(t)},currentPage:r}):null]})})})},$=a(38),X=a.n($);var ee=function(e){return Object(v.jsxs)("div",{className:"mi-smalltitle",children:[Object(v.jsx)("span",{className:"mi-smalltitle-icon",children:Object(v.jsx)(y.a,{name:e.icon})}),Object(v.jsx)("h4",{children:e.title})]})};var te=function(e){var t=window.innerWidth;return Object(v.jsxs)("div",{className:"mi-progress",children:[Object(v.jsx)("h6",{className:"mi-progress-title",children:e.title}),Object(v.jsxs)("div",{className:"mi-progress-inner",children:[Object(v.jsx)("div",{className:"mi-progress-percentage",children:"".concat(e.percentage,"%")}),Object(v.jsx)("div",{className:"mi-progress-container",children:t&&t>767?Object(v.jsx)("span",{className:"mi-progress-active",style:e.isVisible?{width:"".concat(e.percentage,"%")}:{width:0}}):Object(v.jsx)("span",{className:"mi-progress-active",style:{width:"".concat(e.percentage,"%")}})})]})]})};var ae=function(e){var t=e.resumeData,a=t.year,c=t.position,i=t.graduation,n=t.university,s=t.company,l=t.details;return Object(v.jsxs)("div",{className:"mi-resume mt-30",children:[Object(v.jsx)("div",{className:"mi-resume-summary",children:Object(v.jsx)("h6",{className:"mi-resume-year",children:a})}),Object(v.jsxs)("div",{className:"mi-resume-details",children:[Object(v.jsx)("h5",{children:c||i}),Object(v.jsx)("h6",{className:"mi-resume-company",children:s||n}),Object(v.jsx)("p",{children:l})]})]})};var ce=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)([]),l=Object(s.a)(n,2),r=l[0],o=l[1],j=Object(c.useState)([]),d=Object(s.a)(j,2),b=d[0],u=d[1],h=Object(c.useState)([]),O=Object(s.a)(h,2),p=O[0],x=O[1],g=Object(c.useState)([]),f=Object(s.a)(g,2),N=f[0],y=f[1];return Object(c.useEffect)((function(){m.a.get("/api/skills").then((function(e){i(e.data)})),m.a.get("/api/awsskills").then((function(e){o(e.data)})),m.a.get("/api/frontendskills").then((function(e){u(e.data)})),m.a.get("/api/experience").then((function(e){x(e.data.workingExperience),y(e.data.educationExperience)}))}),[]),Object(v.jsxs)(S,{children:[Object(v.jsx)("div",{className:"mi-skills-area mi-section mi-padding-top",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(w,{title:"Skills:"}),Object(v.jsx)(w,{title:"Backend"}),Object(v.jsx)("div",{className:"mi-skills",children:Object(v.jsx)("div",{className:"row mt-30-reverse",children:a.map((function(e){return Object(v.jsx)(X.a,{once:!0,className:"col-lg-6 mt-30",children:Object(v.jsx)(te,{title:e.title,percentage:e.value})},e.title)}))})}),Object(v.jsx)(w,{title:"AWS"}),Object(v.jsx)("div",{className:"mi-skills",children:Object(v.jsx)("div",{className:"row mt-30-reverse",children:r.map((function(e){return Object(v.jsx)(X.a,{once:!0,className:"col-lg-6 mt-30",children:Object(v.jsx)(te,{title:e.title,percentage:e.value})},e.title)}))})}),Object(v.jsx)(w,{title:"Frontend"}),Object(v.jsx)("div",{className:"mi-skills",children:Object(v.jsx)("div",{className:"row mt-30-reverse",children:b.map((function(e){return Object(v.jsx)(X.a,{once:!0,className:"col-lg-6 mt-30",children:Object(v.jsx)(te,{title:e.title,percentage:e.value})},e.title)}))})})]})}),Object(v.jsx)("div",{className:"mi-resume-area mi-section mi-padding-top mi-padding-bottom",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(w,{title:"Resume"}),Object(v.jsx)(ee,{title:"Working Experience",icon:"briefcase"}),Object(v.jsx)("div",{className:"mi-resume-wrapper",children:p.map((function(e){return Object(v.jsx)(ae,{resumeData:e},e.id)}))}),Object(v.jsx)("div",{className:"mt-30"}),Object(v.jsx)(ee,{title:"Educational Qualifications",icon:"book"}),Object(v.jsx)("div",{className:"mi-resume-wrapper",children:N.map((function(e){return Object(v.jsx)(ae,{resumeData:e},e.id)}))})]})})]})};var ie=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),a=t[0],i=t[1];return a?document.body.classList.add("light"):document.body.classList.remove("light"),Object(v.jsxs)(r.a,{children:[Object(v.jsxs)("div",{className:"light-mode",children:[Object(v.jsx)("span",{className:"icon",children:Object(v.jsx)(l.a,{})}),Object(v.jsx)("button",{className:a?"light-mode-switch active":"light-mode-switch",onClick:function(){a?(i(!1),document.body.classList.remove("light")):(i(!0),document.body.classList.add("light"))}})]}),Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{path:"/",exact:!0,children:Object(v.jsx)(J,{lightMode:a})}),Object(v.jsx)(o.a,{path:"/about",component:P}),Object(v.jsx)(o.a,{path:"/resume",component:ce}),Object(v.jsx)(o.a,{path:"/portfolios",component:K}),Object(v.jsx)(o.a,{path:"/blogs",exact:!0,component:L}),Object(v.jsx)(o.a,{path:"/blogs/blog-details/:id/:title",component:B}),Object(v.jsx)(o.a,{path:"/contact",component:T}),Object(v.jsx)(o.a,{path:"*",component:V})]})]})},ne=new(a(117))(a(9)),se={name:"Bennett P. Gould",aboutContent:"I have interests in Systems Design, Cloud/DevOps, High Performance Computing, and Machine Learning.",age:22,phone:"",nationality:"American",language:"English, Elementary German",email:"contactbennett@protonmail.com*",address:"Winston-Salem, NC",freelanceStatus:"Available exclusively for charity work (helping students, small businesses, etc.)",socialLinks:{facebook:"",twitter:"",pinterest:"",behance:"",linkedin:"https://www.linkedin.com/in/bennettgould12345",dribbble:"",github:"https://github.com/bpgould",quora:"https://www.quora.com/profile/Bennett-Gould",hackerrank:"https://www.hackerrank.com/bgould"},brandImage:"/images/brand-image.jpg",aboutImage:"/images/about-image.jpg",aboutImageLg:"/images/about-image-lg.jpg",cvfile:"/files/Resume_For_Website.pdf"},le=[{title:"Backend Development",icon:"code",details:"Java, C++, Node.js, Express.js, Python, REST API, Microservices"},{title:"Frontend Development",icon:"code",details:"HTML, CSS, jQuery, React.js, Next.js, Cognito"},{title:"Databases",icon:"code",details:"MongoDB, Atlas, DocumentDB, MySQL, Mongoose, Sequelize"},{title:"Compute",icon:"code",details:"EC2, Lambda, Step Functions, ELB, Autoscaling"},{title:"Storage",icon:"code",details:"S3, Glacier, EFS, EBS, BeeGFS Converged Deployment"},{title:"Networking",icon:"code",details:"CloudFront, Route53, VPC, Subnetting, Security Groups"},{title:"Tools",icon:"code",details:"CodePipeline, Git, Bash, Ansible, GitHub, SAM"},{title:"Other",icon:"code",details:"API Gateway, Elastic Beanstalk, IAM, CloudWatch"}],re=[{id:1,content:"Blog Exerpt 1",author:{name:"Example Blog 1",designation:"Blog Category"}},{id:2,content:"Blog Exerpt 2",author:{name:"Example Blog 2",designation:"Blog Category"}}],oe=[{title:"JavaScript, ES6+",value:85},{title:"Express.js",value:80},{title:"C++",value:75},{title:"Java",value:70},{title:"Python 3",value:60},{title:"MS PowerShell",value:60},{title:"MS VBA",value:55},{title:"Ansible",value:50},{title:"Fortran",value:30},{title:"Matlab",value:30},{title:"R",value:25},{title:"MongoDB",value:80},{title:"Mongoose ORM",value:80},{title:"MySQL",value:70},{title:"Sequelize",value:70},{title:"Firebase",value:60},{title:"MERN Stack",value:85},{title:"Serverless Archictecture",value:80},{title:"REST API",value:85},{title:"PuTTY",value:95},{title:"Linux",value:60}],je=[{title:"Lambda",value:90},{title:"EC2",value:85},{title:"Autoscaling",value:75},{title:"Step Functions",value:70},{title:"ELB",value:70},{title:"S3",value:90},{title:"Glaciar/ IA",value:80},{title:"EFS/ EBS",value:75},{title:"CodePipeline",value:90},{title:"CloudFront",value:90},{title:"CLI",value:85},{title:"AWS Document DB",value:80},{title:"Elastic Beanstalk",value:75},{title:"Cognito",value:65},{title:"API Gateway",value:65},{title:"VPC, Subnetting, & Security Groups",value:65},{title:"CloudWatch",value:60}],de=[{title:"Javascript ES6+",value:85},{title:"HTML 5",value:85},{title:"CSS 3",value:80},{title:"Bootstrap",value:80},{title:"Next.js",value:75},{title:"React.js",value:75},{title:"jQuery",value:70},{title:"Search Engine Optimization",value:60},{title:"WordPress",value:40},{title:"Vue.js",value:25}],me=[{id:1,title:"WFU ASGM P.O.C.",subtitle:"A data warehousing & inventory pipeline proof of concept",imageUrl:"/images/portfolio-image-1.jpg",largeImageUrl:["/images/portfolio-image-1-lg.jpg"],url:"https://drive.google.com/file/d/1KzEvJU57_qkCe2mxy9-L9cDqBtAffp75/view?usp=sharing"},{id:2,title:"DroneZones.io",subtitle:"Multitenant drone & binary data warehousing",imageUrl:"/images/portfolio-image-2.jpg",largeImageUrl:["/images/portfolio-image-4-lg.jpg","/images/portfolio-image-4-lg2.jpg"],url:"https://drive.google.com/file/d/143y503rZ01-SJkIZHuhfDhpr2Fju7ZVu/view?usp=sharing"},{id:3,title:"Project 3",subtitle:"Coming Soon",imageUrl:"/images/portfolio-image-3.jpg",url:""}],be={workingExperience:[{id:1,year:"Jun 2017 - Present",position:"Head Systems Administrator",company:"VarTech Systems",details:"Managed all internal and cloud-based servers, services, technology infrastructure, and tools. Managed numerous migrations from legacy and on-prem software/infrastructure to modern and often cloud-based solutions. Configured, updated, and upgraded all user PCs, servers, printers, networking equipment, etc. Performed security audits, gap assessments, patching, and documentation for internal use and regulatory compliance. Managed and implemented modern, redundant backups and disaster recovery plans."},{id:2,year:"Oct 2020 - Present",position:"CloudOps Engineer and Co-Founder",company:"DroneZones.io",details:"Created a big data warehousing application and API for machine learning workflows in the WFU ASGM lab. Architected microservices, utilized serverless resources, built CICD pipelines, and performed TCO calculations. Utilized Next.js frontend, Node.js backend services, Python-based metadata stripper, Mongo Atlas, and more."},{id:3,year:"May 2016 - Dec 2016",position:"Biochemistry HPC Intern",company:"Wake Forest University",details:"Conducted original research on the TCF4:NEUROD2 pseudo homodimer complex relevant to Pitt-Hopkins Syndrome. Leveraged the use of VMD and NAMD on the WFU DEAC HPC cluster to run molecular dynamics simulations comparing the wild and mutant types. Presented research at the International Pitt-Hopkins Research Symposium in Dallas and the WFU Undergrad Research Fair."}],educationExperience:[{id:1,year:"2020 - 2021",graduation:"Full Stack Web Development",university:"University of North Carolina at Chapel Hill",details:"6 Month Coding Bootcamp"},{id:2,year:"2017 - 2021",graduation:"Bachelor of Science, Bachelor of Arts (In Progress)",university:"Wake Forest University",details:"Computer Science, Applied Mathematics"},{id:3,year:"2013 - 2017",graduation:"High School",university:"West Forsyth High School",details:"3rd/538, Passed 14 AP Exams"}]},ue=[{id:1,title:"twelvenines-all-md",featuredImage:"/images/Profile.jpg",filesource:"../../blog/twelvenines-all-md.md",createDay:"20",createMonth:"February",createYear:"2020"}],he={phoneNumbers:["Recruiter Sign In"],emailAddress:["contactbennett@protonmail.com"],address:"Herndon, VA"};ne.onGet("/api/information").reply((function(e){return[200,se]})),ne.onGet("/api/services").reply((function(e){return[200,le]})),ne.onGet("/api/reviews").reply((function(e){return[200,re]})),ne.onGet("/api/skills").reply((function(e){return[200,oe]})),ne.onGet("/api/awsskills").reply((function(e){return[200,je]})),ne.onGet("/api/frontendskills").reply((function(e){return[200,de]})),ne.onGet("/api/portfolios").reply((function(e){return[200,me]})),ne.onGet("/api/experience").reply((function(e){return[200,be]})),ne.onGet("/api/blog").reply((function(e){return[200,ue]})),ne.onGet("/api/contactinfo").reply((function(e){return[200,he]})),ne.onAny().passThrough();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(v.jsx)(ie,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},72:function(e,t,a){},73:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.3341aa05.chunk.js.map