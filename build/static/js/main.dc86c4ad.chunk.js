(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){},41:function(e,t,a){e.exports=a(86)},46:function(e,t,a){},47:function(e,t,a){},52:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(22),r=a.n(c),s=(a(46),a(3)),o=a(4),i=a(6),u=a(5),m=a(7),d=(a(47),a(15)),p=a(8),h=a(17),g=(a(52),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).handleLogOutClick=function(){localStorage.removeItem("jsonwebtoken"),a.props.logout(),a.props.history.push("/login")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"menu"},l.a.createElement("h1",null,"Backlog"),l.a.createElement("div",null,l.a.createElement("ul",{className:"menu-items"},this.props.isAuthenticated?null:l.a.createElement("li",null,l.a.createElement(d.b,{to:"/register"},l.a.createElement("button",null,"Register"))),this.props.isAuthenticated?null:l.a.createElement("li",null,l.a.createElement(d.b,{to:"/login"},l.a.createElement("button",null,"Log In"))),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/profile/:userId"},l.a.createElement("button",null,"Profile"))),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/search"},l.a.createElement("button",null,"Search"))),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/backlog/:userId"},l.a.createElement("button",null,"Backlog"))),this.props.isAuthenticated?l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("button",{onClick:this.handleLogOutClick},"Log Out"))):null)))}}]),t}(n.Component)),f=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g,{isAuthenticated:this.props.isAuthenticated,logout:this.props.onLogout,history:this.props.history}),this.props.children)}}]),t}(n.Component),b=Object(p.b)(function(e){return{isAuthenticated:e.isAuthenticated}},function(e){return{onLogout:function(){return e({type:"LOG_OUT"})}}})(Object(h.e)(f)),E=a(2),v=a.n(E),O=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=a(18),N=a(21),j={isAuthenticated:!1,uid:0,gameSelected:!1,selectedGame:{},developers:[],image:null,genres:[],platforms:[],publishers:[],backlog:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ON_AUTHENTICATED":return Object(N.a)({},e,{isAuthenticated:null!=t.token,uid:t.uid});case"LOG_OUT":return Object(N.a)({},e,{isAuthenticated:!1});case"CARD_LOADED":return Object(N.a)({},e,{gameSelected:!0,name:t.value.name,deck:t.value.deck,selectedGame:t.value,publishers:t.value.publishers,developers:t.value.developers,image:t.value.image,genres:t.value.genres,platforms:t.value.platforms,releaseDate:t.value.original_release_date,moreDetails:t.value.site_detail_url});case"ADD_TO_BACKLOG":return console.log(t),Object(N.a)({},e,{backlog:e.backlog.concat(t.card)});default:return e}};function C(e){e?v.a.defaults.headers.common.Authorization="Bearer ".concat(e):delete v.a.defaults.headers.common.Authorization}var w=C,A=a(16),_=(a(77),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleTextChange=function(t){e.setState(Object(A.a)({},t.target.name,t.target.value))},e.handleLogInClick=function(){v.a.post("http://localhost:8080/login",{username:e.state.username,password:e.state.password}).then(function(t){var a=t.data.token,n=t.data.id;localStorage.setItem("jsonwebtoken",a),e.props.onAuthenticated(a,n),C(a),e.props.history.push("/search")}).catch(function(e){return console.log(e)})},e.state={username:"",password:""},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Login"},l.a.createElement("h1",null,"Log In"),l.a.createElement("input",{className:"inputs",onChange:this.handleTextChange,name:"username",type:"text",placeholder:"username"}),l.a.createElement("input",{className:"inputs",onChange:this.handleTextChange,name:"password",type:"password",placeholder:"password"}),l.a.createElement("button",{onClick:this.handleLogInClick},"Log In"))}}]),t}(n.Component)),T=Object(p.b)(null,function(e){return{onAuthenticated:function(t,a){return e({type:"ON_AUTHENTICATED",token:t,uid:a})}}})(_),x=(a(78),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleTextChange=function(t){e.setState(Object(A.a)({},t.target.name,t.target.value))},e.handleRegisterClick=function(){var t={username:e.state.username,location:e.state.location,platform:e.state.platform,genre:e.state.genre,aboutme:e.state.aboutme,email:e.state.email,password:e.state.password};v.a.post("http://localhost:8080/register",t).then(function(e){console.log(e)})},e.state={username:"",location:"",platform:"",genre:"",aboutMe:"",email:"",password:""},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"register"},l.a.createElement("h1",null,"Register"),l.a.createElement("div",{className:"register-inputs"},l.a.createElement("input",{className:"inputs",onChange:this.handleTextChange,name:"username",type:"text",placeholder:"username"}),l.a.createElement("input",{className:"inputs",onChange:this.handleTextChange,name:"location",type:"text",placeholder:"location"}),l.a.createElement("input",{className:"inputs",onChange:this.handleTextChange,name:"platform",type:"text",placeholder:"platform of choice"}),l.a.createElement("input",{className:"inputs",onChange:this.handleTextChange,name:"genre",type:"text",placeholder:"favorite genre"}),l.a.createElement("textarea",{className:"text-area-input",onChange:this.handleTextChange,name:"aboutme",placeholder:"about me"}),l.a.createElement("input",{className:"inputs",onChange:this.handleTextChange,name:"email",type:"email",placeholder:"email"}),l.a.createElement("input",{className:"inputs",onChange:this.handleTextChange,name:"password",type:"password",placeholder:"password"})),l.a.createElement("button",{onClick:this.handleRegisterClick},"Register"))}}]),t}(n.Component)),S=Object(p.b)(null,function(e){return{onAuthenticated:function(t){return e({type:"ON_AUTHENTICATED",token:t})}}})(x),I=(a(79),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).handleBacklogClick=function(){a.props.dispatchToBacklog(a.props)},a.handleWishlistClick=function(){console.log("clicked")},a.handleCurrentClick=function(){console.log("clicked")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.publishers.map(function(e){return l.a.createElement("p",null,e.name)}),t=this.props.developers.map(function(e){return l.a.createElement("p",null,e.name)}),a=this.props.genres.map(function(e){return l.a.createElement("p",null,e.name)}),n=this.props.platforms.map(function(e){return l.a.createElement("p",null,e.name)});return!1===this.props.gameSelected?l.a.createElement("div",null):l.a.createElement("div",{key:this.props.card.id,className:"entire-card"},l.a.createElement("div",{className:"card-title"},l.a.createElement("p",null,this.props.card.name)),l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"image-spot"},this.props.image?l.a.createElement("img",{src:this.props.image.medium_url,alt:""}):null),l.a.createElement("div",{className:"header-info"},l.a.createElement("p",{className:"bold"},"Publisher(s)"),l.a.createElement("p",{className:"header-styles"},e),l.a.createElement("p",{className:"bold"},"Developer(s)"),l.a.createElement("p",{className:"header-styles"},t),l.a.createElement("p",{className:"bold"},"Genre"),l.a.createElement("p",{className:"header-styles"},a))),l.a.createElement("div",{className:"deck"},l.a.createElement("div",{className:"platform-spacing"},l.a.createElement("p",{className:"bold"},"Platform(s)"),l.a.createElement("p",{className:"platform-styles"},n)),l.a.createElement("p",{className:"deck-style"},this.props.card.deck)),l.a.createElement("div",{className:"resources"},l.a.createElement("p",null)),l.a.createElement("ul",{className:"card-buttons"},l.a.createElement("li",null,l.a.createElement("button",{className:"card-backlog-button",onClick:this.handleBacklogClick},"Add to Backlog"))))}}]),t}(n.Component)),D=Object(p.b)(function(e){return{gameSelected:e.gameSelected,name:e.name,deck:e.deck,card:e.selectedGame,publishers:e.publishers,image:e.image,developers:e.developers,genres:e.genres,platforms:e.platforms,releaseDate:e.releaseDate,userId:e.uid}},function(e){return{dispatchToBacklog:function(t){e(function(e){var t={name:e.name,image:e.image.medium_url,developer:e.developers,publisher:e.publishers,genre:e.genres,deck:e.deck,releasedate:e.card.original_release_date,platforms:e.platforms,videos:e.card.videos,gb:e.card.site_detail_url,userId:e.userId};return console.log(t),function(e){v.a.post("http://localhost:8080/backlog",t).then(function(a){console.log(a),e({type:"ADD_TO_BACKLOG",card:t}),alert("Game added to backlog!")})}}(t))}}})(I),L=(a(80),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={users:[]},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:8080/profile/".concat(this.props.user)).then(function(t){e.setState({users:t.data}),console.log(t.data)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"profile"},l.a.createElement("h1",null,"Your Profile"),l.a.createElement("div",{className:"profile-layout"},l.a.createElement("div",{className:"currently-playing"}),l.a.createElement("div",{className:"user-info"},l.a.createElement("div",{className:"profile-info"},l.a.createElement("p",null,"Username"),l.a.createElement("div",{className:"info-name"},this.state.users.username)),l.a.createElement("div",{className:"profile-info"},l.a.createElement("p",null,"Location"),l.a.createElement("div",{className:"info-name"},this.state.users.location)),l.a.createElement("div",{className:"profile-info"},l.a.createElement("p",null,"Platform of choice"),l.a.createElement("div",{className:"info-name"},this.state.users.platform)),l.a.createElement("div",{className:"profile-info"},l.a.createElement("p",null,"Favorite Genre"),l.a.createElement("div",{className:"info-name"},this.state.users.genre)),l.a.createElement("div",{className:"profile-info"},l.a.createElement("p",null,"About Me"),l.a.createElement("div",{className:"info-name"},this.state.users.aboutme)))))}}]),t}(n.Component)),G=Object(p.b)(function(e){return console.log(e),{user:e.uid}})(L),B=(a(36),function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"plate",onClick:e.clicked},l.a.createElement("div",{className:"plate-layout"},l.a.createElement("div",{className:"image-spot"},l.a.createElement("img",{src:e.image,alt:"box art"})),l.a.createElement("div",{className:"plate-body"},l.a.createElement("p",{className:"title"},e.name),l.a.createElement("p",null,e.release_date)))))}),P=(a(81),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handlePlateSelected=function(t){v.a.get("http://localhost:8080/backlog/".concat(e.props.user)).then(function(e){console.log(e.data)})},e.state={log:[],selectedGameId:null},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:8080/backlog/".concat(this.props.user)).then(function(t){e.setState({log:t.data}),console.log(t.data)})}},{key:"render",value:function(){var e=this;if(!1===this.props.gameSelected)return l.a.createElement("div",null);var t=this.state.log.map(function(t){return console.log(t),l.a.createElement(B,{key:t.guid,name:t.name,image:t.image,release_date:t.original_release_date,clicked:function(){return e.handlePlateSelected(t.guid)}})});return l.a.createElement("div",{className:"backlog"},l.a.createElement("h1",null,"Welcome to your Backlog"),l.a.createElement("div",{className:"backlog-layout"},l.a.createElement("div",{className:"backlog-highlight"}),l.a.createElement("div",{className:"backlog-results"},t)))}}]),t}(n.Component)),R=Object(p.b)(function(e){return console.log(e),{user:e.uid}})(P),U=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"plate",onClick:e.clicked},l.a.createElement("div",{className:"plate-layout"},l.a.createElement("div",{className:"image-spot"},l.a.createElement("img",{src:e.image,alt:"box art"})),l.a.createElement("div",{className:"plate-body"},l.a.createElement("p",{className:"title"},e.name),l.a.createElement("p",null,e.release_date)))))},M=(a(82),a(85),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleTextChange=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a.handlePlateSelected=function(e){v.a.get("https://cors-anywhere.herokuapp.com/".concat("https://www.giantbomb.com/api/game/",e,"/?api_key=f194765e78f8558180a48f79cbb6b02fe6f9bca2&format=JSON"),{crossdomain:!0}).then(function(e){a.props.dispatchCard(e.data.results),console.log(e.data.results.publishers)})},a.handleSearchClick=function(){v.a.get("https://cors-anywhere.herokuapp.com/".concat('http://www.giantbomb.com/api/search/?api_key=f194765e78f8558180a48f79cbb6b02fe6f9bca2&format=json&query="',a.state.title,'"&resources=game'),{crossdomain:!0}).then(function(e){a.setState({games:e.data.results})})},a.state={activePage:1,selectedGameId:null,games:[],title:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handlePageChange",value:function(e){this.setState({activePage:e})}},{key:"render",value:function(){var e=this,t=this.state.games.map(function(t){return l.a.createElement(U,{key:t.guid,name:t.name,image:t.image.medium_url,clicked:function(){return e.handlePlateSelected(t.guid)}})});return l.a.createElement("div",{className:"search"},l.a.createElement("input",{className:"inputs",onChange:this.handleTextChange,name:"title",type:"text",placeholder:"Game Title"}),l.a.createElement("button",{className:"search-button",onClick:this.handleSearchClick},"Search"),l.a.createElement("div",{className:"search-layout"},l.a.createElement("div",{className:"search-highlight"},l.a.createElement(D,{id:this.state.selectedGameId})),l.a.createElement("div",{className:"search-results"},t)))}}]),t}(n.Component)),W=Object(p.b)(null,function(e){return{dispatchCard:function(t){e({type:"CARD_LOADED",value:t})}}})(M),H=a(40),J=function(e){var t=function(t){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).props.isAuthenticated||t.props.history.push("/login"),t}return Object(m.a)(a,t),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(e,this.props)}}]),a}(n.Component);return Object(p.b)(function(e){return{isAuthenticated:e.isAuthenticated}})(t)},z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.c,K=Object(k.d)(y,z(Object(k.a)(H.a)));w(localStorage.getItem("jsonwebtoken")),r.a.render(l.a.createElement(p.a,{store:K},l.a.createElement(d.a,null,l.a.createElement(b,null,l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/",exact:!0,component:O}),l.a.createElement(h.a,{path:"/register",exact:!0,component:S}),l.a.createElement(h.a,{path:"/login",exact:!0,component:T}),l.a.createElement(h.a,{path:"/profile/:userId",exact:!0,component:J(G)}),l.a.createElement(h.a,{path:"/search",exact:!0,component:W}),l.a.createElement(h.a,{path:"/backlog/:userId",exact:!0,component:J(R)}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.dc86c4ad.chunk.js.map