(this.webpackJsonpcorona=this.webpackJsonpcorona||[]).push([[0],{204:function(e,t,a){e.exports=a(410)},209:function(e,t,a){},409:function(e,t,a){},410:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(33),s=a.n(r),c=(a(69),a(159)),o=a.n(c);function i(){return Object(n.useEffect)((function(){var e=document.querySelectorAll(".sidenav");o.a.Sidenav.init(e,{})}),[]),l.a.createElement(n.Fragment,null,l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement("a",{href:"#!",className:"brand-logo "},l.a.createElement("i",{className:"material-icons hide-on-small-and-down",style:{fontSize:"50px"}},"assessment")," ","Corona Stats"),l.a.createElement("a",{href:"#!","data-target":"mobile-demo",className:"sidenav-trigger"},l.a.createElement("i",{className:"material-icons"},"menu")),l.a.createElement("ul",{className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement("a",{href:"/#global"},"Global")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#search"},"Country")),l.a.createElement("li",null,l.a.createElement("a",{href:"/about"},"About"))))),l.a.createElement("ul",{className:"sidenav",id:"mobile-demo"},l.a.createElement("li",null,l.a.createElement("a",{href:"/#global"},"Global")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#search"},"Country")),l.a.createElement("li",null,l.a.createElement("a",{href:"/about"},"About"))))}a(209);var m=a(24),u=a(25),d=a(27),h=a(26),E=a(28),f=a.n(E),v=a(20),p=a(65),b=a(35),y=a.n(b),g=a(30),C=a(160),N=a(176),D=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={countries:null,country:null,disabled:!1},e.updateCountry=function(t){e.setState({country:t.value}),console.log("Country: ",e.state.country)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props),f.a.get("https://api.covid19api.com/countries").then((function(t){return e.setState({countries:t.data})})).catch((function(e){return console.log(e.message)}))}},{key:"componentDidUpdate",value:function(){this.state.country&&this.props.history.push("/"+this.state.country.trim())}},{key:"render",value:function(){return l.a.createElement("div",{id:"search",style:{marginTop:"50px"}},l.a.createElement("h4",null,l.a.createElement(v.a,{icon:C.a}),"  Country Wise"),l.a.createElement("p",null,"Get detailed Statistics of Corona in each countries ."),this.state.countries?l.a.createElement("div",null,l.a.createElement(N.a,{options:this.state.countries.map((function(e){return{label:e.Country,value:e.Slug}})),onChange:this.updateCountry,placeholder:"  Search Your Country"})):null)}}]),a}(n.Component),w=(Object(g.f)(D),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={results:null,errMsg:null,isLoading:!1},e.formatValue=function(e){return e.toFixed(0)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://api.covid19api.com/summary").then((function(t){return e.setState({results:t.data,isLoading:!1})})).catch((function(t){return e.setState({errMsg:t,isLoading:!1})})),this.setState({isLoading:!0})}},{key:"render",value:function(){return console.log(this.state.results),l.a.createElement(n.Fragment,null,l.a.createElement("div",null,this.state.isLoading?l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("div",{className:"lds-facebook col s12 m"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))):null),this.state.results?l.a.createElement("div",{className:"section"},l.a.createElement("h4",{id:"global",className:"section scrollspy"},l.a.createElement(v.a,{icon:p.b}),"  Global"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m6 l4"},l.a.createElement("h5",null,"Total Confirmed Cases"),l.a.createElement("h6",null," ",l.a.createElement("b",null,l.a.createElement(y.a,{value:this.state.results.Global.TotalConfirmed,duration:2e3,formatValue:this.formatValue,easing:"linear"})))),l.a.createElement("div",{className:"col s12 m6 l4"},l.a.createElement("h5",null,"Total Deaths"),l.a.createElement("h6",null," ",l.a.createElement("b",null,l.a.createElement(y.a,{value:this.state.results.Global.TotalDeaths,duration:1500,formatValue:this.formatValue,easing:"linear"})))),l.a.createElement("div",{className:"col s12 m6 l4"},l.a.createElement("h5",null,"Total Recovered"),l.a.createElement("h6",null," ",l.a.createElement("b",null,l.a.createElement(y.a,{value:this.state.results.Global.TotalRecovered,duration:1500,formatValue:this.formatValue,easing:"linear"}))))),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m6 l4"},l.a.createElement("h5",null,"New Confirmed Cases"),l.a.createElement("h6",null," ",l.a.createElement("b",null,l.a.createElement(y.a,{value:this.state.results.Global.NewConfirmed,formatValue:this.formatValue,duration:1e3,easing:"linear"})))),l.a.createElement("div",{className:"col s12 m6 l4"},l.a.createElement("h5",null,"New Deaths"),l.a.createElement("h6",null," ",l.a.createElement("b",null,l.a.createElement(y.a,{value:this.state.results.Global.NewDeaths,duration:1e3,formatValue:this.formatValue,easing:"linear"})))),l.a.createElement("div",{className:"col s12 m6 l4"},l.a.createElement("h5",null,"New Recovered"),l.a.createElement("h6",null," ",l.a.createElement("b",null,l.a.createElement(y.a,{value:this.state.results.Global.NewRecovered,duration:1e3,formatValue:this.formatValue,easing:"linear"}))))),l.a.createElement(D,this.props)):l.a.createElement("div",null))}}]),a}(n.Component)),k=Object(g.f)(w),S=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"container",style:{marginTop:"20px"}},l.a.createElement("h3",null,"Get Exact Corona Stats Now   ",l.a.createElement(v.a,{icon:p.a})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("p",null,"Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.With Coronavirus spreading rapidly , Its safe to be at your Home .",l.a.createElement("b",null,"Stay Home , Stay safe !")))),l.a.createElement(k,this.props)))}}]),a}(n.Component),O=Object(g.f)(S),j=a(41),L=a(165),R=a.n(L),V=a(8),T=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={confirmed:null,deaths:null,recovered:null,isCL:!1,isDL:!1,isRL:!1,totalRecovered:0,totalConfirmed:0,totalDeaths:0},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({})}},{key:"shouldComponentUpdate",value:function(){return!(this.state.confirmed&&this.state.deaths&&this.state.recovered)}},{key:"componentDidUpdate",value:function(){var e=this;R.a.Tabs.init(document.querySelector(".tabs"),{}),!this.state.isCL&&!this.state.isDL&!this.state.isRL&&(this.setState({isCL:!0,isDL:!0,isRL:!0}),console.log("hello"),f.a.get("https://api.covid19api.com/total/country/"+this.props.match.params.country.trim()+"/status/confirmed").then((function(t){return e.setState({confirmed:t.data,isCL:!1})})).catch((function(e){return console.log(e.message)})),f.a.get("https://api.covid19api.com/total/country/"+this.props.match.params.country.trim()+"/status/deaths").then((function(t){return e.setState({deaths:t.data,isDL:!1})})).catch((function(e){return console.log(e.message)})),f.a.get("https://api.covid19api.com/total/country/"+this.props.match.params.country.trim()+"/status/recovered").then((function(t){return e.setState({recovered:t.data,isRL:!1})})).catch((function(e){return console.log(e.message)})))}},{key:"render",value:function(){console.log(this.state.results);var e=0,t=0,a=0;return l.a.createElement("div",null,this.state.isCL||this.state.isDL||this.state.isRL?l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("div",{className:"lds-facebook col s12 m"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))):l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12"},l.a.createElement("ul",{className:"tabs"},l.a.createElement("li",{className:"tab col s3"},l.a.createElement("a",{href:"#ConfirmedCases",className:"active"},"Confirmed Cases")),l.a.createElement("li",{className:"tab col s3"},l.a.createElement("a",{href:"#DeathCases"},"Death Cases")),l.a.createElement("li",{className:"tab col s3"},l.a.createElement("a",{href:"#RecoveredCases"},"Recovered Cases")))),l.a.createElement("div",{id:"ConfirmedCases",className:"col s12"},l.a.createElement("div",null,l.a.createElement("h5",null,"Confirmed Cases  "),this.state.confirmed?l.a.createElement("div",null,l.a.createElement(V.d,{width:"95%",height:400},l.a.createElement(V.b,{data:this.state.confirmed.map((function(t){return e=t.Cases,{Date:t.Date.slice(0,10),Confirmed:t.Cases}})),margin:{top:20,right:30,left:30,bottom:5}},l.a.createElement(V.f,{dataKey:"Date",stroke:"#8884d8"}),l.a.createElement(V.g,{dataKey:"Confirmed"}),l.a.createElement(V.e,null),l.a.createElement(V.c,{stroke:"#ccc",strokeDasharray:"5 5"}),l.a.createElement(V.a,{dataKey:"Confirmed",fill:"#8884d8",barSize:30}))),l.a.createElement("h5",null,"Total Confirmed Cases ",l.a.createElement("b",null," ",e)," ")):null)),l.a.createElement("div",{id:"DeathCases",className:"col s12"},l.a.createElement("div",null,l.a.createElement("h5",null,"Death Cases"),this.state.deaths?l.a.createElement("div",null,l.a.createElement(V.d,{width:"95%",height:400},l.a.createElement(V.b,{data:this.state.deaths.map((function(e){return t=e.Cases,{Date:e.Date.slice(0,10),"Death Cases":e.Cases}})),margin:{top:20,right:30,left:30,bottom:5}},l.a.createElement(V.f,{dataKey:"Date",stroke:"#8884d8"}),l.a.createElement(V.g,{dataKey:"Death Cases"}),l.a.createElement(V.e,null),l.a.createElement(V.c,{stroke:"#ccc",strokeDasharray:"5 5"}),l.a.createElement(V.a,{dataKey:"Death Cases",fill:"#8884d8",barSize:30}))),l.a.createElement("h5",null,"Total Deaths Cases ",l.a.createElement("b",null,t))):null)),l.a.createElement("div",{id:"RecoveredCases",className:"col s12"},l.a.createElement("div",null,l.a.createElement("h5",null,"Recovered Cases"),this.state.recovered?l.a.createElement("div",null,l.a.createElement(V.d,{width:"95%",height:400},l.a.createElement(V.b,{data:this.state.recovered.map((function(e){return a=e.Cases,{Date:e.Date.slice(0,10),"Recovered Cases":e.Cases}})),margin:{top:20,right:30,left:30,bottom:5}},l.a.createElement(V.f,{dataKey:"Date",stroke:"#8884d8"}),l.a.createElement(V.g,{dataKey:"Recovered Cases"}),l.a.createElement(V.e,null),l.a.createElement(V.c,{stroke:"#ccc",strokeDasharray:"5 5"}),l.a.createElement(V.a,{dataKey:"Recovered Cases",fill:"#8884d8",barSize:30}))),l.a.createElement("h5",null,"Total Recovered Cases ",l.a.createElement("b",null,a))):null))))}}]),a}(n.Component),x=Object(g.f)(T),G=a(99);a(409);var A=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"About"),l.a.createElement("p",null,"Version 1.0.0",l.a.createElement("br",null),"Powered by COVID-19 API"),l.a.createElement("hr",null),l.a.createElement("h5",{className:"m-4"},"Made by Arun"),l.a.createElement("div",{style:{fontSize:"30px"}},l.a.createElement("a",{href:"https://github.com/ArunMurugan78",className:"git",style:{margin:"20px"}},l.a.createElement(v.a,{icon:G.a})),l.a.createElement("a",{href:"https://www.linkedin.com/in/arun-murugan-50885717a/"},l.a.createElement(v.a,{icon:G.b})))))};var K=function(){return l.a.createElement(j.a,null,l.a.createElement(i,null),l.a.createElement(g.c,null,l.a.createElement(g.a,{path:"/about",component:A}),l.a.createElement(g.a,{path:"/:country",render:function(e){return l.a.createElement(x,e)}}),l.a.createElement(g.a,{path:"/",render:function(e){return l.a.createElement(O,e)}}))," ")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,a){}},[[204,1,2]]]);
//# sourceMappingURL=main.f4b8fb20.chunk.js.map