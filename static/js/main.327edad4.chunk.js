(this["webpackJsonpreact-firebase-boilerplate"]=this["webpackJsonpreact-firebase-boilerplate"]||[]).push([[0],{18:function(e,t,n){e.exports={projectlistItem:"ProjectDetails_projectlistItem__3Z6pl",picture:"ProjectDetails_picture__3UuhV",content:"ProjectDetails_content__3-X-v",title:"ProjectDetails_title__2CK_a",meta:"ProjectDetails_meta__22kKF",rating:"ProjectDetails_rating__1TS0F"}},19:function(e,t,n){e.exports={projectlistItem:"ProjectListItem_projectlistItem__tSvpf",picture:"ProjectListItem_picture__ZgcKd",content:"ProjectListItem_content__3XYbu",title:"ProjectListItem_title__25sET",meta:"ProjectListItem_meta__VWJzb",rating:"ProjectListItem_rating__3puZ5"}},29:function(e,t,n){e.exports={fullContainer:"NotFoundPage_fullContainer__9mGkh",fof:"NotFoundPage_fof__1LO5d",callToActions:"NotFoundPage_callToActions__3rvGO"}},37:function(e,t,n){e.exports={footer:"Footer_footer__fWAC3"}},39:function(e,t,n){e.exports={user__avatar:"MainNavigation_user__avatar__2_lZw"}},40:function(e,t,n){e.exports={header:"Header_header__3_WZn"}},41:function(e,t,n){e.exports={main:"BaseLayout_main__38wDi"}},42:function(e,t,n){e.exports={projectlistItem:"ProjectReviewListItem_projectlistItem__3Pm55",picture:"ProjectReviewListItem_picture__wbRPq",content:"ProjectReviewListItem_content__3oCSj",title:"ProjectReviewListItem_title__p3a6R",meta:"ProjectReviewListItem_meta__1O2B4",rating:"ProjectReviewListItem_rating__mbmUs"}},43:function(e,t,n){},48:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),a=n(36),s=n.n(a),i=(n(48),n(6)),o=n.n(i),u=n(10),j=n(16),l=(n(50),n(28)),d={basicURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).BASIC_URL},O={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DATABASE_URL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APP_ID},p=n(2),b=Object(r.createContext)(null),_=function(){return Object(r.useContext)(b)},m=function(e){var t=e.children,n=Object(r.useState)(l.a.apps.length?l.a.app():l.a.initializeApp(O)),c=Object(j.a)(n,1)[0];return Object(p.jsx)(b.Provider,{value:{app:c},children:t})},f=Object(r.createContext)(null),x=function(){return Object(r.useContext)(f)},h=function(e){var t=e.children,n=Object(r.useState)(JSON.parse(localStorage.getItem("react-firebase-pgm-4:currentUser"))),c=Object(j.a)(n,2),a=c[0],s=c[1],i=_().app.auth();Object(r.useEffect)((function(){var e=i.onAuthStateChanged((function(e){localStorage.setItem("react-firebase-pgm-4:currentUser",JSON.stringify(e)),s(e)}));return function(){e()}}),[i]);var l=function(){var e=Object(u.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.signInWithEmailAndPassword(t,n);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("react-firebase-pgm-4:currentUser",null),e.next=3,i.signOut();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)(f.Provider,{value:{currentUser:a,signInWithEmailAndPassword:l,signOut:d},children:t})},v=n(20),S=(n(59),n(61)),P=c.a.createContext(null),E=function(){return Object(r.useContext)(P)},g=function(e){var t=e.children,n=_().app.firestore(),r=null,c=function(){var e=Object(u.a)(o.a.mark((function e(){var t,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.collection("projects").orderBy("createdAt","desc"),e.next=3,t.get();case 3:return r=e.sent,c=r.docs.map((function(e){return Object(v.a)({uid:e.id},e.data())})),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c,a,s,i=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:10,c=null,c=null===r||void 0===r?n.collection("projects").orderBy("createdAt","desc").limit(t):n.collection("projects").orderBy("createdAt","desc").startAfter(r).limit(t),e.next=5,c.get();case 5:return a=e.sent,r=a.docs[a.docs.length-1],s=a.docs.map((function(e){return Object(v.a)({uid:e.id},e.data())})),e.abrupt("return",{projects:s});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(u.a)(o.a.mark((function e(t){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.collection("projects").doc(t),e.next=3,r.get();case 3:if((c=e.sent).exists){e.next=6;break}throw new Error("Document does not exist!");case 6:return e.abrupt("return",Object(v.a)({uid:c.id},c.data()));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(u.a)(o.a.mark((function e(t){var r,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.collection("projects").doc(t).collection("reviews").orderBy("createdAt","desc"),e.next=3,r.get();case 3:return c=e.sent,a=c.docs.map((function(e){return Object(v.a)({uid:e.id},e.data())})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(o.a.mark((function e(t,r){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.collection("reviews").doc(Object(S.a)()),e.abrupt("return",n.runTransaction((function(e){return e.get(t).then((function(n){if(!n.exists)throw new Error("Document does not exist!");var a=n.data().numReviews+1,s=(n.data().avgRating*n.data().numReviews+r.rating)/a;e.update(t,{numReviews:a,avgRating:s}),e.set(c,r)}))})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(p.jsx)(P.Provider,{value:{addReview:j,getPagedProjects:a,getProjectById:s,getProjects:c,getProjectReviews:i},children:t})},R=n(15),T=n(7),w="/",C="/projects",N="/projects/:id",A="/auth/sigin",I=n(37),D=n.n(I),L=function(){return Object(p.jsx)("footer",{className:D.a.footer,children:Object(p.jsx)(R.b,{to:"/404",children:"404"})})},U=n(39),W=n.n(U),H=function(){var e=x(),t=e.currentUser,n=e.signOut;return Object(p.jsx)("nav",{children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(R.b,{to:w,children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)(R.b,{to:C,children:"Projects"})}),Object(p.jsx)("li",{children:t?Object(p.jsxs)("button",{onClick:n,children:[Object(p.jsx)("img",{className:W.a.user__avatar,src:t.photoURL,alt:t.email}),"Logout"]}):Object(p.jsx)(R.b,{to:A,children:"Sign In"})})]})})},K=n(40),F=n.n(K),y=function(){return Object(p.jsx)("header",{className:F.a.header,children:Object(p.jsx)(H,{})})},k=n(41),B=n.n(k),V=function(e){var t=e.children;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(y,{}),Object(p.jsx)("main",{className:B.a.main,children:t}),Object(p.jsx)(L,{})]})},M=function(){return Object(p.jsx)(V,{children:Object(p.jsx)("p",{children:"HOME PAGE"})})},G=(n(29),n(27)),J=n(26),Z=n(18),z=n.n(Z),X=function(e){var t=e.project;return Object(p.jsxs)("article",{className:z.a.projectlistItem,children:[Object(p.jsx)("picture",{className:z.a.picture,children:Object(p.jsx)("img",{src:t.thumbnailURL,alt:t.title})}),Object(p.jsxs)("div",{className:z.a.content,children:[Object(p.jsx)("span",{className:z.a.rating,children:Math.round(t.avgRating/5*100)}),Object(p.jsx)("h3",{className:z.a.title,children:t.title})]}),Object(p.jsxs)("footer",{className:z.a.meta,children:[Object(p.jsxs)("span",{className:z.a.numReviews,children:[Object(p.jsx)(J.a,{}),Object(p.jsx)("span",{children:t.numReviews})]}),Object(p.jsxs)("span",{className:z.a.numViews,children:[Object(p.jsx)(G.a,{}),Object(p.jsx)("span",{children:t.numViews})]})]})]})},Y=n(19),q=n.n(Y),Q=function(e){var t=e.project;return Object(p.jsxs)("article",{className:q.a.projectlistItem,children:[Object(p.jsx)("picture",{className:q.a.picture,children:Object(p.jsx)("img",{src:t.thumbnailURL,alt:t.title})}),Object(p.jsxs)("div",{className:q.a.content,children:[Object(p.jsx)("span",{className:q.a.rating,children:Math.round(t.avgRating/5*100)}),Object(p.jsx)("h3",{className:q.a.title,children:Object(p.jsx)(R.b,{to:N.replace(":id",t.uid),children:t.title})})]}),Object(p.jsxs)("footer",{className:q.a.meta,children:[Object(p.jsxs)("span",{className:q.a.numReviews,children:[Object(p.jsx)(J.a,{}),Object(p.jsx)("span",{children:t.numReviews})]}),Object(p.jsxs)("span",{className:q.a.numViews,children:[Object(p.jsx)(G.a,{}),Object(p.jsx)("span",{children:t.numViews})]})]})]})},$=function(e){var t=e.itemsPerPage,n=void 0===t?10:t,c=Object(r.useState)(),a=Object(j.a)(c,2),s=a[0],i=a[1],l=E().getPagedProjects,d=Object(r.useCallback)(Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(n);case 2:t=e.sent,i(t.projects);case 4:case"end":return e.stop()}}),e)}))),[l,n]);return Object(r.useEffect)((function(){d()}),[d]),Object(p.jsxs)("div",{className:"project-list",children:[!!s&&s.map((function(e){return Object(p.jsx)(Q,{project:e},e.uid)})),!!s&&s.length>=n&&Object(p.jsx)("button",{onClick:function(){return d()},children:"MORE"})]})},ee=n(42),te=n.n(ee),ne=function(e){var t=e.projectReview;return Object(p.jsxs)("article",{className:te.a.projectlistItem,children:[Object(p.jsx)("h3",{children:t.title}),Object(p.jsx)("div",{children:t.review}),Object(p.jsx)("span",{children:t.rating})]})},re=function(e){var t=e.projectId,n=Object(r.useState)(),c=Object(j.a)(n,2),a=c[0],s=c[1],i=E().getProjectReviews;return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t);case 2:n=e.sent,s(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i,t]),Object(p.jsx)("div",{className:"project-review-list",children:!!a&&a.map((function(e){return Object(p.jsx)(ne,{projectReview:e},e.uid)}))})},ce=function(){var e=Object(T.g)().id,t=Object(r.useState)(),n=Object(j.a)(t,2),c=n[0],a=n[1],s=E().getProjectById;return Object(r.useEffect)((function(){(function(){var t=Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(e);case 2:n=t.sent,a(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e,s]),Object(p.jsxs)(V,{children:[!!c&&Object(p.jsx)(X,{project:c}),!!c&&Object(p.jsx)(re,{projectId:c.uid})]})},ae=function(){return Object(p.jsx)(V,{children:Object(p.jsx)($,{})})},se=n(25),ie=function(e){e.children;var t=Object(T.f)(),n=Object(r.useState)({txtEmail:"",txtPassword:""}),c=Object(j.a)(n,2),a=c[0],s=c[1],i=x(),l=i.currentUser,d=i.signInWithEmailAndPassword,O=i.signOut,b=function(){var e=Object(u.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,d(a.txtEmail,a.txtPassword);case 3:e.sent&&t.goBack();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(Object(v.a)(Object(v.a)({},a),{},Object(se.a)({},t.target.name,t.target.value)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"page page--sign-in",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6",children:[!1===!!l&&Object(p.jsxs)("form",{onSubmit:function(e){return b(e)},children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"txtEmail",children:"Email address"}),Object(p.jsx)("input",{type:"email",className:"form-control",id:"txtEmail",name:"txtEmail","aria-describedby":"emailHelp",onChange:_,value:a.txtEmail}),Object(p.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"txtPassword",children:"Password"}),Object(p.jsx)("input",{type:"password",className:"form-control",id:"txtPassword",name:"txtPassword",onChange:_,value:a.txtPassword})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Sign In"})]}),!0===!!l&&Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:l.photoURL,alt:l.email}),Object(p.jsx)("button",{onClick:function(){return O()},children:"Sign out"})]})]})})})})},oe=n(43),ue=n.n(oe);var je=function(){return Object(p.jsx)("div",{className:ue.a.app,children:Object(p.jsx)(m,{children:Object(p.jsx)(h,{children:Object(p.jsx)(g,{children:Object(p.jsx)(R.a,{basename:d.basicURL,children:Object(p.jsxs)(T.c,{children:[Object(p.jsx)(T.a,{exact:!0,path:w,component:M}),Object(p.jsx)(T.a,{from:"/home",to:w}),Object(p.jsx)(T.a,{exact:!0,path:N,component:ce}),Object(p.jsx)(T.a,{exact:!0,path:C,component:ae}),Object(p.jsx)(T.a,{exact:!0,path:A,component:ie})]})})})})})})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(je,{})}),document.getElementById("root")),le()}},[[58,1,2]]]);
//# sourceMappingURL=main.327edad4.chunk.js.map