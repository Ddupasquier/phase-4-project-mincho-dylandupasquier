(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{19:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(9),r=n.n(s),i=(n(19),n(17)),j=n(4),o=n(12),l=n(1);var u=function(e){var t=e.onLogin,n=e.username,c=e.setUsername,s=Object(a.useState)(!1),r=Object(j.a)(s,2),i=r[0],u=r[1],b=Object(a.useState)(""),d=Object(j.a)(b,2),h=d[0],O=d[1],m=Object(a.useState)(),p=Object(j.a)(m,2),x=p[0],f=p[1],g=Object(a.useState)([]),v=Object(j.a)(g,2),y=v[0],S=v[1];function k(e){e.preventDefault(),fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:h})}).then((function(e){return e.json()})).then((function(e){e.error?S(y):t(e)})),f(!0)}function N(e){e.preventDefault();var t={username:n,password:h};fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){e.ok?e.json():e.json().then((function(e){return S(Object.entries(e.error).flat())}))})),f(!1)}return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{variant:"primary",onClick:function(){return u(!0)},className:"button loginbtn",children:"Login/Signup"}),Object(l.jsxs)(o.a,{show:i,onHide:function(){return u(!1)},className:"modalCont",children:[Object(l.jsx)(o.a.Header,{closeButton:!0,children:Object(l.jsx)("h3",{children:"Login"})}),Object(l.jsx)(o.a.Body,{children:Object(l.jsxs)("form",{onSubmit:function(){x?k():N()},className:"loginform",children:[Object(l.jsx)("p",{className:"medfont",children:"Let's Get Started By Logging In!"}),Object(l.jsx)("p",{children:"One day, this may even be password protecte"}),Object(l.jsx)("input",{type:"text",placeholder:"Username",value:n,onChange:function(e){return c(e.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",placeholder:"Password",value:h,onChange:function(e){return O(e.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{type:"submit",className:"button",onClick:k,value:"login",children:"Login"})," ",Object(l.jsx)("button",{type:"submit",className:"signupbtn button",onClick:N,value:"signup",children:"Signup"})]})})]})]})},b=n(11);var d=function(e){var t=e.user,n=e.setUser,c=e.username,s=e.setUsername;function r(){fetch("/api/logout",{method:"DELETE"}).then((function(){n(null)}))}return Object(a.useEffect)((function(){fetch("/api/me").then((function(e){e.ok&&e.json().then((function(e){return n(e)}))}))}),[n]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)("div",{className:"navtitle",children:"National Parks"}),Object(l.jsxs)("div",{className:"navlink",children:[Object(l.jsx)(b.b,{to:"/",className:"link",children:"Parks"})," | ",null!==t?Object(l.jsx)(b.b,{to:"/my_profile/".concat(t.username),className:"link",children:"My Profile"}):Object(l.jsx)("span",{className:"disabledMyProfile",children:"My Profile"})]}),null!==t?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{className:"loginmsg",children:["Welcome, ",t.username,"!"]}),Object(l.jsx)("button",{onClick:r,className:"button logoutbtn",children:"Logout"})]}):Object(l.jsx)(u,{user:t,onLogin:n,username:c,setUsername:s})]})})},h=(n(29),n(20)),O=n.p+"static/media/geyser-yelowstone-burst_h.82300c11.png",m=n.p+"static/media/GRp433jw6BKfCyL86nk8jc-970-80.jpg.04c78e56.webp",p=n.p+"static/media/hiker-in-north-window-arch-royalty-free-image-1588786762.c1b81f5c.jpg",x=n.p+"static/media/ku5EqMv2ZWTQJvMb3XCmeb-970-80.jpg.bc244938.webp",f=n.p+"static/media/national_parks_sustainability_feature.56d446a8.jpg",g=n.p+"static/media/poAYm6mb5ay4TBSYuMAWs4-970-80.jpg.11981fc6.webp",v=n.p+"static/media/ukUkjVfuPhJadUKzSS4Kmm-970-80.jpg.9134c703.webp",y=n.p+"static/media/ZiVxAfNzdnvjEigJuKXxJW-970-80.jpg.e4ea8440.webp",S=[{url:"".concat(O)},{url:"".concat(m)},{url:"".concat(p)},{url:"".concat(x)},{url:"".concat(f)},{url:"".concat(g)},{url:"".concat(v)},{url:"".concat(y)}].map((function(e,t){return Object(l.jsx)("div",{className:"each-fade",children:Object(l.jsx)("div",{className:"image-container",children:Object(l.jsx)("img",{src:e.url,alt:"carouselimages"})})},t)}));var k=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(h.Fade,{children:S})})};var N=function(e){var t=e.user,n=e.setUser,a=e.username,c=e.setUsername;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{username:a,setUsername:c,user:t,setUser:n}),Object(l.jsx)(k,{})]})};var C=function(e){var t=e.setSearch,n=e.sortBy,a=e.search,c=e.setSortBy;return Object(l.jsxs)("div",{className:"sortsearch",children:[Object(l.jsx)("input",{type:"text",className:"searchinp",placeholder:"Search...",value:a,onChange:function(e){return t(e.target.value)}}),Object(l.jsxs)("select",{className:"searchdrop",value:n,onChange:function(e){return c(e.target.value)},children:[Object(l.jsx)("option",{value:"",children:"Sort By"}),Object(l.jsx)("option",{value:"states",children:"State"}),Object(l.jsx)("option",{value:"name",children:"Name"})]})]})},P=n(21);var w=function(){return Object(l.jsx)(P.a,{animation:"border",role:"status",className:"toCenter",children:Object(l.jsx)("span",{className:"visually-hidden",children:"Loading..."})})};n(30);var B=function(e){var t=e.eachPark,n=e.setAllParks,c=e.allParks,s=e.search,r=e.sortBy,i=e.setSearch,o=e.setSortBy,u=Object(a.useState)(1),b=Object(j.a)(u,2),d=b[0],h=b[1];return Object(a.useEffect)((function(){fetch("/api/parks?limit=20&page=".concat(d)).then((function(e){return e.json()})).then((function(e){n(e.parks)}))}),[d,n]),0===c.length?Object(l.jsx)(w,{}):Object(l.jsxs)("main",{children:[Object(l.jsx)(C,{search:s,sortBy:r,setSearch:i,setSortBy:o}),Object(l.jsx)("div",{className:"grid-container",children:t}),Object(l.jsxs)("div",{className:"tocenter",children:[Object(l.jsx)("button",{className:"btn",onClick:function(){h(d-1)},children:"Back"})," ",Object(l.jsx)("button",{className:"btn",onClick:function(){h(d+1)},children:"More"})]})]})};var U=function(e){var t=e.user,n=(e.setUser,e.username),c=e.setUsername,s=Object(a.useState)(!1),r=Object(j.a)(s,2),i=r[0],u=r[1],b=Object(a.useState)(t.image),d=Object(j.a)(b,2),h=d[0],O=d[1],m=Object(a.useState)(t.city),p=Object(j.a)(m,2),x=p[0],f=p[1],g=Object(a.useState)(t.state),v=Object(j.a)(g,2),y=v[0],S=v[1],k=Object(a.useState)(t.email),N=Object(j.a)(k,2),C=N[0],P=N[1],w=Object(a.useState)(t.phone),B=Object(j.a)(w,2),U=B[0],L=B[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"myProfile",children:[Object(l.jsx)("div",{className:"userImage",children:Object(l.jsx)("img",{src:t.image,alt:t.username})}),"Username: ",t.username,Object(l.jsx)("br",{}),"City: ",t.city,Object(l.jsx)("br",{}),"State: ",t.state,Object(l.jsx)("br",{}),"Phone: ",t.phone,Object(l.jsx)("br",{}),"Email: ",t.email,Object(l.jsx)("br",{}),Object(l.jsx)("button",{variant:"primary",onClick:function(){return u(!0)},className:"button",children:"Edit"})]}),Object(l.jsxs)(o.a,{show:i,onHide:function(){return u(!1)},className:"",children:[Object(l.jsx)(o.a.Header,{closeButton:!0,children:Object(l.jsx)("h3",{children:"Edit Profile"})}),Object(l.jsx)(o.a.Body,{children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/api/users/".concat(t.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,city:x,state:y,image:h,email:C,phone:U})}).then((function(e){return e.json()}))},className:"userpatchform",children:[Object(l.jsx)("input",{type:"text",placeholder:"Username",value:n,onChange:function(e){return c(e.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",placeholder:"Image URL",value:h,onChange:function(e){return O(e.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",placeholder:"City",value:x,onChange:function(e){return f(e.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",placeholder:"State",value:y,onChange:function(e){return S(e.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",placeholder:"Email",value:C,onChange:function(e){return P(e.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",placeholder:"Phone",value:U,onChange:function(e){return L(e.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{type:"submit",className:"button",children:"All Done!"})]})})]})]})};var L=function(){return Object(l.jsx)("div",{children:"Campgrounds"})},E=n(3);var T=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(E.g)().id;return Object(a.useEffect)((function(){fetch("/api/parks/".concat(s)).then((function(e){return e.json()})).then((function(e){c(e)}))}),[s]),0===n.length?Object(l.jsx)(w,{}):(console.log(n),Object(l.jsxs)("div",{className:"selectedPark",children:[Object(l.jsxs)("div",{className:"selectedParkImage",children:[Object(l.jsx)("img",{src:n.images[0].url,title:n.images[0].title,alt:n.images[0].altText}),Object(l.jsx)("figcaption",{children:n.images[0].caption})]}),Object(l.jsx)("br",{}),Object(l.jsx)("h3",{children:n.name}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:n.description}),"X: ",n.longitude,", Y: ",n.latitude,Object(l.jsx)("br",{}),Object(l.jsx)("b",{children:"Weather:"}),n.weatherInfo]}))};var F=function(e){var t=e.park,n=t.images,a=t.name,c=t.states,s=t.id,r={backgroundImage:"url(".concat(n[0].url,")"),backgroundPosition:"50% 50%",backgroundSize:"cover",backgroundRepeat:"no-repeat"};return Object(l.jsx)("div",{className:"grid-square",style:r,children:Object(l.jsxs)("div",{className:"parkInfo",children:[a,Object(l.jsx)("br",{}),c,Object(l.jsx)("br",{}),Object(l.jsx)(b.b,{to:"/parks/".concat(s),children:"More info"})]})})};var I=function(){return Object(l.jsx)("footer",{children:"Phase 4 Project by Min Cho & Dylan Dupasquier"})};var M=function(){var e=Object(a.useState)("name"),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),r=Object(j.a)(s,2),o=r[0],u=r[1],b=Object(a.useState)(""),d=Object(j.a)(b,2),h=d[0],O=d[1],m=Object(a.useState)(""),p=Object(j.a)(m,2),x=p[0],f=p[1],g=Object(a.useState)(null),v=Object(j.a)(g,2),y=v[0],S=v[1],k=Object(i.a)(o).sort((function(e,t){if(e[n]<t[n])return-1;return 0})).filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())})).map((function(e){return Object(l.jsx)(F,{park:e},e.id)}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)(N,{user:y,setUser:S,username:x,setUsername:f})}),Object(l.jsxs)(E.c,{children:[Object(l.jsx)(E.a,{path:"/",element:Object(l.jsx)(B,{eachPark:k,setAllParks:u,allParks:o,search:h,sortBy:n,setSearch:O,setSortBy:c})}),Object(l.jsx)(E.a,{path:"/my_profile/:name",element:null!==y?Object(l.jsx)(U,{user:y,setUser:S,username:x,setUsername:f}):"Please Log Back In!"}),Object(l.jsx)(E.a,{path:"/campgrounds",element:Object(l.jsx)(L,{})}),Object(l.jsx)(E.a,{path:"/parks/:id",element:Object(l.jsx)(T,{})})]}),Object(l.jsx)(I,{})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b.a,{children:Object(l.jsx)(M,{})})}),document.getElementById("root")),A()}},[[31,1,2]]]);
//# sourceMappingURL=main.bc09a0f1.chunk.js.map