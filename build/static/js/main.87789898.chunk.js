(this.webpackJsonpai_news_app=this.webpackJsonpai_news_app||[]).push([[0],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),l=a.n(r),o=(a(87),a(36)),c=a(163),s=a(42),m=a.n(s),d=a(71),u=a.n(d),p=a(168),f=a(167),g=a(159),h=Object(g.a)({container:{padding:"0 5%",width:"100%",margin:0},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:"100%",height:"45vh",padding:"10%",borderRadius:10,color:"white"},infoCard:{display:"flex",flexDirection:"column",textAlign:"center"}}),b=a(169),y=a(161),x=a(162),w=a(164),E=a(165),v=a(166),j=a(75),C=a.n(j),N=Object(g.a)({media:{height:250},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid white"},activeCard:{borderBottom:"10px solid #03a9f4"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),O=function(e){var t=e.article,a=t.description,r=t.publishedAt,l=t.source,s=t.title,m=t.url,d=t.urlToImage,u=e.i,p=e.activeArticle,f=N(),g=Object(n.useState)([]),h=Object(o.a)(g,2),j=h[0],O=h[1];return Object(n.useEffect)((function(){O((function(e){return Array(20).fill().map((function(t,a){return e[a]||Object(n.createRef)()}))}))}),[]),Object(n.useEffect)((function(){var e;u===p&&j[p]&&(e=j[p],window.scroll(0,e.current.offsetTop-50))}),[u,p,j]),i.a.createElement(b.a,{ref:j[u],className:C()(f.card,p===u?f.activeCard:null)},i.a.createElement(y.a,{href:m,target:"_blank"},i.a.createElement(x.a,{className:f.media,image:d||"https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"}),i.a.createElement("div",{className:f.details},i.a.createElement(c.a,{variant:"body2",color:"textSecondary",component:"h2"},new Date(r).toDateString()),i.a.createElement(c.a,{variant:"body2",color:"textSecondary",component:"h2"},l.name)),i.a.createElement(c.a,{className:f.title,gutterBottom:!0,variant:"h5"},s),i.a.createElement(w.a,null,i.a.createElement(c.a,{variant:"body2",color:"textSecondary",component:"p"},a))),i.a.createElement(E.a,{className:f.cardActions},i.a.createElement(v.a,{size:"small",color:"primary "},"Learn More"),i.a.createElement(c.a,{variant:"h5",color:"textSecondary "},u+1)))},k=[{color:"#ffa41b",title:"Latest News",text:"Give me the latest news"},{color:"#000839",title:"News by Categories",info:"Business, Entertainment, Health, Science, Sports, Technology...",text:"Give me the latest Technology news"},{color:"#005082",title:"News by Terms",info:"Bitcoin, Coronavirus, Smartphones, Donald Trump...",text:"What's up with PlayStation 5"},{color:"#00a8cc",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN"}],A=function(e){var t=e.articles,a=e.activeArticle,n=h();return t.length?i.a.createElement(p.a,{in:!0},i.a.createElement(f.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},t.map((function(e,t){return i.a.createElement(f.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"}},i.a.createElement(O,{article:e,activeArticle:a,i:t}))})))):i.a.createElement(p.a,{in:!0},i.a.createElement(f.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},k.map((function(e){return i.a.createElement(f.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:n.infoCard},i.a.createElement("div",{className:n.card,style:{backgroundColor:e.color}},i.a.createElement(c.a,{variant:"h5",component:"h5"},e.title),e.info?i.a.createElement(c.a,{variant:"h6",component:"h6"},i.a.createElement("strong",null,e.title.split(" ")[2]),": ",i.a.createElement("br",null),e.info):null,i.a.createElement(c.a,{variant:"h6",component:"h6"},"Try saying: ",i.a.createElement("br",null)," ",i.a.createElement("i",null,e.text))))}))))},S=a(25),B=Object(g.a)((function(e){return{footer:Object(S.a)({textAlign:"center",position:"fixed",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},e.breakpoints.down("sm"),{display:"none"}),link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{marginLeft:20},card:Object(S.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"rgba(21, 101, 192)",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(S.a)({display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logoContainer:Object(S.a)({padding:"0 5%",display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),alanLogo:Object(S.a)({height:"27vmin",borderRadius:"15%",padding:"0 5%",margin:"3% 0"},e.breakpoints.down("sm"),{height:"35vmin"})}})),D=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(-1),s=Object(o.a)(l,2),d=s[0],p=s[1],f=B();return Object(n.useEffect)((function(){m()({key:"e56e264dfd2b9a6d0985e467b6d2d9152e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,a=e.articles,n=e.number;if("newHeadlines"===t)r(a),p(-1);else if("highlight"===t)p((function(e){return e+1}));else if("open"===t){var i=n.length>2?u()(n,{fuzzy:!0}):n,l=a[i-1];i>20?m()().playText("Please try that again."):l&&(window.open(l.url,"_blank"),m()().playText("Opening... "))}}})}),[]),i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("div",{className:f.logoContainer},i.a.createElement("img",{src:"https://i.imgur.com/RY6Ct5D.jpg",className:f.alanLogo,alt:"alan logo"})),i.a.createElement(A,{articles:a,activeArticle:d})),i.a.createElement("div",{className:f.footer},i.a.createElement(c.a,{variant:"body1",component:"h2"},"Created by",i.a.createElement("a",{className:f.link,href:"https://www.linkedin.com/in/matiaspuletti/"}," Mat\xedas Puletti"),"  ")," "))};l.a.render(i.a.createElement(D,null),document.getElementById("root"))},82:function(e,t,a){e.exports=a(145)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.87789898.chunk.js.map