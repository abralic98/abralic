(this["webpackJsonpabralic-portfolio"]=this["webpackJsonpabralic-portfolio"]||[]).push([[0],{12:function(e,t,c){e.exports={nothing:"HomePage_nothing__A1rAH",background:"HomePage_background__1Szsr",tap:"HomePage_tap__2gvBs",homeFlexBox:"HomePage_homeFlexBox__Ce_DW",img:"HomePage_img__1c6U_",imageScale:"HomePage_imageScale__3A3mK",backgroundOpacity:"HomePage_backgroundOpacity__2eNB3",introduction:"HomePage_introduction__xK9mm",linkBlock:"HomePage_linkBlock__2pGyx",fadeIn:"HomePage_fadeIn__IFRKB",fadeIn2:"HomePage_fadeIn2__2nipI",fadeIn3:"HomePage_fadeIn3__R_kEu"}},15:function(e,t,c){e.exports={background:"AboutPage_background__1oX8x",titleBlock:"AboutPage_titleBlock__2eNWe",fadeIn:"AboutPage_fadeIn__3Ma3C",showMore:"AboutPage_showMore__1b_gn",fadeInOut:"AboutPage_fadeInOut__29Zy9",about:"AboutPage_about__J_SgG",link:"AboutPage_link__asBF5"}},17:function(e,t,c){e.exports={navigation:"Navigation_navigation__24k7n",fadeIn:"Navigation_fadeIn__33rQs",pa:"Navigation_pa__1TMVY"}},18:function(e){e.exports=JSON.parse('[{"name":"Car shopping site","description":["Since we barely did any HTML and CSS on college, I am pretty sure I overwhelmed myself doing this as my first project","I learned everything from scratch and I manage to figure something out. Project is not finished but the core part I wanted to make is done."],"id":0,"technologies":["HTML5","CSS3","JavaScript"],"sourceLink":"https://github.com/abralic98/meckasajt","githubPages":"https://abralic98.github.io/meckasajt/","youtube":"https://www.youtube.com/watch?v=Owm_Q8WLeME"},{"name":"Sword shopping site","description":["Similar project as 1st one, but more focused on design and funcionality.","I expanded knowledge a lot and I manage to reduce code a bit and make it more optimal."],"id":1,"technologies":["HTML5","CSS3","JavaScript"],"sourceLink":"https://github.com/abralic98/katanashop","githubPages":"https://abralic98.github.io/katanashop/","youtube":"https://www.youtube.com/watch?v=iZD8MvMgLFM"},{"name":"React Meetings","description":["I had watched some tutorials to learn fundamentals so I can create my first react project.","With aquired basic knowledge I managed to create website where you can add favourite places and store them using firebase."],"id":2,"technologies":["React js","CSS3","Google Firebase"],"sourceLink":["https://github.com/abralic98/MeetupPage"],"githubPages":null,"youtube":"https://www.youtube.com/watch?v=0C-9XTRuzRs"},{"name":"BalkanFlix","description":["This is a project of which I am most proud of.","It took me a while to make it work but I succeed.","In this app you can make account, log in, explore movies and tv shows, watch trailers and search specific things.","This is the first project where I learned how to communicate between frontend and backend, how to use api calls and how to manage CRUD (Create, Read, Update, Delete) in mySQL server."],"id":3,"technologies":["React js","CSS3","Node js","mySQL","REST API"],"sourceLink":"https://github.com/abralic98/react-movies","githubPages":null,"youtube":"https://www.youtube.com/"}]')},23:function(e,t,c){e.exports={background:"ProjectsPage_background__37wl4",fadeIn:"ProjectsPage_fadeIn__1TvQg",projects:"ProjectsPage_projects__2f-RJ"}},24:function(e,t,c){e.exports={background:"ProjectBlock_background__1bkso",opacity:"ProjectBlock_opacity__b0slI",fadeInOpacity:"ProjectBlock_fadeInOpacity__jqVCr",fadeIn:"ProjectBlock_fadeIn__HgsOu"}},39:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),o=c(26),i=c.n(o),s=c(13),r=c(3),l=c(4),j=c.p+"static/media/bradakek.f1dfa22c.png",d=c(12),b=c.n(d),u=c(1),h=Object(a.createContext)(),p=function(e){var t=Object(a.useState)({name:"",description:"",id:"",technologies:"",sourceLink:"",githubPages:""}),c=Object(l.a)(t,2),n=c[0],o=c[1],i=Object(a.useState)(),s=Object(l.a)(i,2),r=s[0],j=s[1],d=Object(a.useState)(!1),b=Object(l.a)(d,2);b[0],b[1];return Object(u.jsx)(h.Provider,{value:{projects:[n,o],navigation:[r,j]},children:e.children})},g=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),n=Object(a.useRef)(),o=Object(a.useRef)(),i=Object(a.useRef)(),r=Object(a.useContext)(h),d=r.navigation,p=r.projects,g=Object(l.a)(d,2),m=(g[0],g[1]),x=Object(l.a)(p,2),f=(x[0],x[1]),O=Object(a.useState)(b.a.linkBlock),k=Object(l.a)(O,2),w=k[0],I=k[1];function v(e){0===e&&(m((function(e){return"about"})),f((function(e){return{name:e.name=""}}))),1===e&&(m((function(e){return"projects"})),f((function(e){return{name:e.name=""}}))),2===e&&(m((function(e){return"contact"})),f((function(e){return{name:e.name=""}})))}function C(){I((function(e){return b.a.linkBlock}))}return Object(u.jsxs)("div",{onClick:function(){w===b.a.linkBlock&&(I((function(e){return b.a.nothing})),setTimeout(C,100))},className:b.a.background,children:[Object(u.jsx)("div",{className:b.a.backgroundOpacity}),Object(u.jsxs)("div",{className:b.a.homeFlexBox,children:[Object(u.jsxs)("div",{className:b.a.introduction,children:[Object(u.jsx)("div",{ref:n,onClick:function(){return v(0)},className:w,children:Object(u.jsx)(s.b,{to:"/about",children:Object(u.jsx)("h1",{onMouseOver:function(){e.current.innerHTML="About"},onMouseLeave:function(){e.current.innerHTML="Hello"},ref:e,children:"Hello"})})}),Object(u.jsx)("div",{ref:o,onClick:function(){return v(1)},className:w,children:Object(u.jsx)(s.b,{to:"/projects",children:Object(u.jsx)("h1",{onMouseOver:function(){t.current.innerHTML="Projects"},onMouseLeave:function(){t.current.innerHTML="I am"},ref:t,children:"I am"})})}),Object(u.jsx)("div",{ref:i,onClick:function(){return v(2)},className:w,children:Object(u.jsx)(s.b,{to:"/contact",children:Object(u.jsx)("h1",{onMouseOver:function(){c.current.innerHTML="Contact"},onMouseLeave:function(){c.current.innerHTML="Ante"},ref:c,children:"Ante"})})})]}),Object(u.jsx)("img",{className:b.a.img,src:j,alt:""})]}),Object(u.jsx)("p",{className:b.a.tap,children:"Tap anywhere"})]})},m=c(15),x=c.n(m),f=c(17),O=c.n(f),k=function(){var e=Object(r.f)(),t=Object(a.useContext)(h),c=t.navigation,n=t.projects,o=Object(l.a)(c,2),i=o[0],s=(o[1],Object(l.a)(n,2)),j=s[0],d=s[1];function b(t){0===t&&(d((function(e){return{name:e.name=""}})),e.replace("/")),1===t&&(d((function(e){return{name:e.name=""}})),e.replace("/".concat(i)))}return console.log(i),Object(u.jsxs)("div",{className:O.a.navigation,children:[Object(u.jsx)("p",{className:O.a.pa,onClick:function(){return b(0)},children:"Ante"}),Object(u.jsx)("p",{children:">"}),Object(u.jsx)("p",{className:O.a.pa,onClick:function(){return b(1)},children:i}),""!==j.name&&"projects"===i?Object(u.jsx)("p",{children:">"}):null,"projects"===i?Object(u.jsx)("p",{className:O.a.pa,children:j.name}):null]})},w=c.p+"static/media/arrowDown.9edfd30d.png",I=function(){var e=Object(a.useContext)(h).navigation,t=Object(l.a)(e,2),c=(t[0],t[1]);return Object(u.jsxs)("div",{className:x.a.background,children:[Object(u.jsx)(k,{}),Object(u.jsx)("div",{className:x.a.titleBlock,children:Object(u.jsxs)("h1",{children:["I design ","&"," build user interfaces "]})}),Object(u.jsxs)("div",{onClick:function(){window.scrollTo({top:1500,behavior:"smooth"})},className:x.a.showMore,children:[Object(u.jsx)("img",{src:w,alt:""}),Object(u.jsx)("p",{children:"More About Me"})]}),Object(u.jsxs)("div",{className:x.a.about,children:[Object(u.jsx)("h1",{children:"About"}),Object(u.jsx)("h2",{children:"Hi, I'm Ante. I'm Frontend software developer"}),Object(u.jsx)("p",{children:"I always look at myself as a person who defines the work by quality and efficiency. Skills can be mastered, personality is inherent. Every task I perform is another ladder of experience I gain. My goals are to keep challenging myself, going far beyond the borders of my knowledge and do interesting things that matter."}),Object(u.jsx)("p",{children:"I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also love the logic and structure of coding and always strive to write elegant and efficent code."}),Object(u.jsx)("p",{children:"My abundant energy fuels me in pursuit of interests. I'm a fast learner, able to pick up new skills and create projects with relative ease."}),Object(u.jsx)("h2",{children:"Technologies I know"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"HTML5"}),Object(u.jsx)("li",{children:"CSS3"}),Object(u.jsx)("li",{children:"JavaScript"}),Object(u.jsx)("li",{children:"React js"}),Object(u.jsx)("li",{children:"Node js"}),Object(u.jsx)("li",{children:"MySQL"})]}),Object(u.jsxs)(s.b,{to:"/projects",onClick:function(){c((function(e){return"projects"})),window.scroll(0,0)},children:[" ",Object(u.jsx)("h2",{className:x.a.link,children:"Want to check my projects?"})," "]})]})]})},v=c(23),C=c.n(v),P=c(24),S=c.n(P),A=function(e){var t=Object(r.f)(),c=Object(a.useContext)(h).projects,n=Object(l.a)(c,2),o=(n[0],n[1]),i=["https://www.wallpaperflare.com/static/871/312/888/mercedes-amg-c-63-s-cabriolet-nyias-2016-white-wallpaper.jpg","https://cdn.wallpapersafari.com/29/11/mw5tCD.jpg","https://cdn.kimkim.com/files/a/content_articles/featured_photos/f21821b56779ee07d34c654485facbf41f6cbd6f/big-b8d1c62f808e75dd2eca85616fdef999.jpg","data:image/png;base64,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"];return Object(u.jsxs)("div",{onClick:function(){return 0===(c=e.projectData.id)&&(o((function(t){return{name:t.name=e.projectData.name,description:t.description=e.projectData.description,id:t.id=e.projectData.id,technologies:t.technologies=e.projectData.technologies,sourceLink:t.sourceLink=e.projectData.sourceLink,githubPages:t.githubPages=e.projectData.githubPages,youtube:t.youtube=e.projectData.youtube}})),window.scroll(0,0),t.replace("/projects/carshop")),1===c&&(o((function(t){return{name:t.name=e.projectData.name,description:t.description=e.projectData.description,id:t.id=e.projectData.id,technologies:t.technologies=e.projectData.technologies,sourceLink:t.sourceLink=e.projectData.sourceLink,githubPages:t.githubPages=e.projectData.githubPages,youtube:t.youtube=e.projectData.youtube}})),window.scroll(0,0),t.replace("/projects/katanashop")),2===c&&(o((function(t){return{name:t.name=e.projectData.name,description:t.description=e.projectData.description,id:t.id=e.projectData.id,technologies:t.technologies=e.projectData.technologies,sourceLink:t.sourceLink=e.projectData.sourceLink,githubPages:t.githubPages=e.projectData.githubPages,youtube:t.youtube=e.projectData.youtube}})),window.scroll(0,0),t.replace("/projects/meetings")),void(3===c&&(o((function(t){return{name:t.name=e.projectData.name,description:t.description=e.projectData.description,id:t.id=e.projectData.id,technologies:t.technologies=e.projectData.technologies,sourceLink:t.sourceLink=e.projectData.sourceLink,githubPages:t.githubPages=e.projectData.githubPages,youtube:t.youtube=e.projectData.youtube}})),window.scroll(0,0),t.replace("/projects/balkanflix")));var c},className:S.a.background,children:[Object(u.jsx)("div",{className:S.a.opacity}),Object(u.jsx)("img",{src:i[e.projectData.id],alt:""}),Object(u.jsx)("h2",{children:e.projectData.name})]})},B=c(18),E=function(){var e=function(){var e=Object(a.useState)([window.innerWidth,window.innerHeight]),t=Object(l.a)(e,2),c=t[0];return t[1],c}(),t=Object(l.a)(e,2),c=t[0];t[1];return Object(u.jsxs)("div",{className:C.a.background,children:[Object(u.jsx)(k,{}),Object(u.jsx)("h1",{children:"Projects"}),Object(u.jsxs)("div",{className:C.a.projects,children:[Object(u.jsx)(A,{projectData:B[0]}),c<1e3?Object(u.jsx)("p",{children:"Car shopping site"}):null,Object(u.jsx)(A,{projectData:B[1]}),c<1e3?Object(u.jsx)("p",{children:"Sword shopping site"}):null,Object(u.jsx)(A,{projectData:B[2]}),c<1e3?Object(u.jsx)("p",{children:"React meetings"}):null,Object(u.jsx)(A,{projectData:B[3]}),c<1e3?Object(u.jsx)("p",{children:"BalkanFlix"}):null]}),Object(u.jsx)("h3",{children:"More to come"})]})},y=c(6),N=c.n(y),Q=c(7),L=function(){var e=Object(a.useContext)(h).projects,t=Object(l.a)(e,2),c=t[0];t[1];return console.log(c),Object(u.jsxs)("div",{className:N.a.background,children:[Object(u.jsx)(k,{}),Object(u.jsx)("h1",{children:c.name}),2===c.description.length?Object(u.jsxs)("p",{className:N.a.description,children:[c.description[0]," ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{})," ",c.description[1]]}):Object(u.jsxs)("p",{className:N.a.description,children:[c.description[0]," ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{})," ",c.description[1]," ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{})," ",c.description[2]," ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{})," ",c.description[3]]}),Object(u.jsx)("h2",{children:"Technologies"}),3===c.technologies.length&&"HTML5"===c.technologies[0]?Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:N.a.trio,children:"HTML5"===c.technologies[0]?Object(u.jsx)(Q.d,{}):null}),Object(u.jsx)("li",{className:N.a.trio,children:"CSS3"===c.technologies[1]?Object(u.jsx)(Q.a,{}):null}),Object(u.jsx)("li",{className:N.a.trio,children:"JavaScript"===c.technologies[2]?Object(u.jsx)(Q.e,{}):null})]}):3===c.technologies.length?Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:N.a.tech,children:"React js"===c.technologies[0]?Object(u.jsx)(Q.i,{}):null}),Object(u.jsx)("li",{className:N.a.tech,children:"CSS3"===c.technologies[1]?Object(u.jsx)(Q.a,{}):null}),Object(u.jsx)("li",{className:N.a.tech,children:"Google Firebase"===c.technologies[2]?Object(u.jsx)(Q.b,{}):null})]}):5===c.technologies.length?Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:N.a.tech,children:"React js"===c.technologies[0]?Object(u.jsx)(Q.i,{}):null}),Object(u.jsx)("li",{className:N.a.tech,children:"CSS3"===c.technologies[1]?Object(u.jsx)(Q.a,{}):null}),Object(u.jsx)("li",{className:N.a.tech2,children:"Node js"===c.technologies[2]?Object(u.jsx)(Q.h,{}):null}),Object(u.jsx)("li",{className:N.a.tech,children:"mySQL"===c.technologies[3]?Object(u.jsx)(Q.g,{}):null}),Object(u.jsx)("li",{className:N.a.tech,children:"REST API"===c.technologies[4]?Object(u.jsx)("img",{src:"data:image/png;base64,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",alt:""}):null})]}):null,Object(u.jsx)("h2",{className:N.a.links,children:"Useful Links"}),Object(u.jsxs)("div",{className:N.a.information,children:[Object(u.jsx)("div",{onClick:function(){window.open("".concat(c.sourceLink),"_blank")},className:N.a.source,children:Object(u.jsx)(Q.c,{})}),Object(u.jsx)("div",{onClick:function(){window.open("".concat(c.youtube),"_blank")},className:N.a.youtube,children:Object(u.jsx)(Q.k,{})})]})]})},M=c(8),W=c.n(M),F=c(28),V=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),n=Object(a.useRef)(),o=Object(a.useState)(!1),i=Object(l.a)(o,2),s=i[0],r=i[1];function j(a){if(a.preventDefault(),""!==e.current.value&&""!==t){r((function(e){return!0}));var o=e.current.value,i=t.current.value;!function(){var a=e.current.value,o=t.current.value,i=c.current.value,s=n.current.value;window.Email.send({Host:"smtp.gmail.com",Username:"balkanflix98@gmail.com",Password:"balkanflix123",To:"ante.bralic2@gmail.com",From:"balkanflix98@gmail.com",Subject:"You have new message from ",Body:"Some ".concat(a," wants to contact you from ").concat(o," and his subject is ").concat(i," and message ").concat(s)})}(),window.Email.send({Host:"smtp.gmail.com",Username:"balkanflix98@gmail.com",Password:"balkanflix123",To:i,From:"balkanflix98@gmail.com",Subject:"no-reply",Body:"Thank you for contacting me ".concat(o,". I recieved your message and I will respond as soon as possible")}).then(e.current.value="",t.current.value="",c.current.value="",n.current.value="")}else r((function(e){return"no message"}))}return Object(u.jsxs)("div",{className:W.a.background,children:[Object(u.jsx)(k,{}),Object(u.jsxs)("div",{className:W.a.content,children:[Object(u.jsx)("h1",{children:"Lets Make Something Great"}),Object(u.jsx)("h2",{children:"Contact Me"}),!0===s?Object(u.jsx)("p",{className:W.a.sent,children:"Message Sent"}):"no message"===s?Object(u.jsx)("p",{className:W.a.fail,children:"Please fill in all fields"}):null,Object(u.jsxs)("form",{onSubmit:j,className:W.a.form,action:"",children:[Object(u.jsxs)("div",{className:W.a.inputBlock,children:[Object(u.jsx)("label",{htmlFor:"",children:"Your Name"}),Object(u.jsx)("input",{ref:e,type:"text"})]}),Object(u.jsxs)("div",{className:W.a.inputBlock,children:[Object(u.jsx)("label",{htmlFor:"",children:"Your Email"}),Object(u.jsx)("input",{ref:t,type:"email"})]}),Object(u.jsxs)("div",{className:W.a.inputBlock,children:[Object(u.jsx)("label",{htmlFor:"",children:"Subject"}),Object(u.jsx)("input",{ref:c,type:"text"})]}),Object(u.jsxs)("div",{className:W.a.inputBlock,children:[Object(u.jsx)("label",{htmlFor:"",children:"Your Message"}),Object(u.jsx)("textarea",{ref:n})]}),Object(u.jsxs)("div",{onClick:j,className:W.a.btn,children:[Object(u.jsx)("button",{children:"Send Message"}),Object(u.jsx)(F.a,{className:W.a.btnIcon})]})]}),Object(u.jsx)("h2",{className:W.a.reach,children:"Feel free to reach out throught any platforms below"}),Object(u.jsxs)("div",{className:W.a.contactIcons,children:[Object(u.jsx)(Q.j,{onClick:function(){window.open("https://wa.me/+385955183303/?text=Hello I Checked your portfolio and I would like to speak with you","_blank")},className:W.a.icon}),Object(u.jsx)(Q.c,{onClick:function(){window.open("https://github.com/abralic98","_blank")},className:W.a.icon}),Object(u.jsx)(Q.f,{onClick:function(){window.open("https://www.linkedin.com/in/ante-bralic-bb6bb320b/","_blank")},className:W.a.icon})]})]})]})};var Y=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(s.a,{basename:"antebralic",children:Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/",children:Object(u.jsx)(g,{})}),Object(u.jsx)(r.a,{exact:!0,path:"/about",children:Object(u.jsx)(I,{})}),Object(u.jsx)(r.a,{exact:!0,path:"/projects",children:Object(u.jsx)(E,{})}),Object(u.jsx)(r.a,{exact:!0,path:"/projects/carshop",children:Object(u.jsx)(L,{})}),Object(u.jsx)(r.a,{exact:!0,path:"/projects/katanashop",children:Object(u.jsx)(L,{})}),Object(u.jsx)(r.a,{exact:!0,path:"/projects/meetings",children:Object(u.jsx)(L,{})}),Object(u.jsx)(r.a,{exact:!0,path:"/projects/balkanflix",children:Object(u.jsx)(L,{})}),Object(u.jsx)(r.a,{exact:!0,path:"/contact",children:Object(u.jsx)(V,{})})]})})})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(p,{children:Object(u.jsx)(Y,{})})}),document.getElementById("root"))},6:function(e,t,c){e.exports={background:"SelectedProject_background__25JmM",fadeInTitle:"SelectedProject_fadeInTitle__1DHSL",fadeInTech:"SelectedProject_fadeInTech__6kAEt",description:"SelectedProject_description__2SvWg",fadeInDesc:"SelectedProject_fadeInDesc__2O87i",trio:"SelectedProject_trio__ReXyB",tech:"SelectedProject_tech___4Pi4",reactRotate:"SelectedProject_reactRotate__2FdqP",tech2:"SelectedProject_tech2__3aahk",information:"SelectedProject_information__30DfS",source:"SelectedProject_source__2uMeO",youtube:"SelectedProject_youtube__lIVco",yt:"SelectedProject_yt__3GkbP",links:"SelectedProject_links__1S8NN"}},8:function(e,t,c){e.exports={background:"ContactPage_background__2RXOR",content:"ContactPage_content__3RoMG",fadeInTitle:"ContactPage_fadeInTitle__12wQD",form:"ContactPage_form__9F6k7",inputBlock:"ContactPage_inputBlock__2DpDA",btn:"ContactPage_btn__1Wuln",btnIcon:"ContactPage_btnIcon__F7IF9",reach:"ContactPage_reach__118Sm",contactIcons:"ContactPage_contactIcons__3ZG60",icon:"ContactPage_icon__2iwxv",sent:"ContactPage_sent__3Ocur",fail:"ContactPage_fail__3B6is"}}},[[39,1,2]]]);
//# sourceMappingURL=main.c4e62caf.chunk.js.map