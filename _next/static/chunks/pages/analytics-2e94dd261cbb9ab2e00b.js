_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{"9fNV":function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analytics",function(){return a("NFYf")}])},CwOF:function(t,e,a){t.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",loaderWrapper:"_3d0GU",inline:"_2YCUz",content:"_2emF1",center:"_2ny11",assetListLoader:"_334HO"}},NFYf:function(t,e,a){"use strict";a.r(e);var n=a("nKUr"),s=a("o0o1"),c=a.n(s),o=a("HaE+"),r=a("1OyB"),i=a("vuIU"),l=a("JX7q"),p=a("Ji7U"),j=a("md7G"),u=a("foSv"),d=a("rePB"),b=a("q1tI"),m=a("/MKj"),f=a("ANjH"),O=a("9xET"),g=a.n(O),h=a("ZPTe"),x=a.n(h),y=a("wd/R"),v=a.n(y),S=a("TlR6"),N=a("9At1"),w=a("K4dc"),D=a("Zb9X"),I=a("WrOz"),C=a("fS1W"),P=a("PGnZ"),k=a.n(P),A=a("32PK"),E=a("XKlS"),F=a("7iAt"),_=a.n(F),R=a("mOvS"),U=a.n(R),B=U()().publicRuntimeConfig,M=function(t){switch(t){case"download":return Object(n.jsx)("img",{src:"".concat(B.asset,"/static/dist/images/icons/download.png"),alt:"Analytics icon",className:_.a.analyticsIcon});case"import":return Object(n.jsx)("img",{src:"".concat(B.asset,"/static/dist/images/icons/import.png"),alt:"Analytics icon",className:_.a.analyticsIcon});case"component":return Object(n.jsx)("img",{src:"".concat(B.asset,"/static/dist/images/icons/component.png"),alt:"Analytics icon",className:_.a.analyticsIcon});default:return Object(n.jsx)("img",{src:"".concat(B.asset,"/static/dist/images/icons/import.png"),alt:"Analytics icon",className:_.a.analyticsIcon})}},T=function(t){var e=t.title,a=t.count,s=t.icon,c=t.className;return Object(n.jsxs)(g.a,{className:"".concat(_.a.base," ").concat(c),children:[Object(n.jsxs)(x.a,{className:_.a.titleIcon,children:[Object(n.jsx)(x.a,{span:22,children:Object(n.jsx)("h2",{children:e})}),Object(n.jsx)(x.a,{span:2,children:M(s)})]}),Object(n.jsx)(x.a,{span:24,children:Object(n.jsx)("h3",{children:a})})]})};T.defaultProps={title:"",count:0,icon:""};var H=T,L=a("Zch0"),V=a.n(L),z=a("7Qib"),K=U()().publicRuntimeConfig,W=function(t){var e=t.data,a=t.title,s=t.className;return Object(n.jsxs)(g.a,{className:"".concat(V.a.base," ").concat(s),children:[Object(n.jsx)(x.a,{className:V.a.title,children:Object(n.jsx)("h2",{children:"TOP 5"})}),Object(n.jsx)(x.a,{children:Object(n.jsx)("h2",{children:a})}),Object(n.jsx)(x.a,{span:24,className:V.a.wrapper,children:e&&e.length>0?e.map((function(t){return Object(n.jsxs)(g.a,{className:V.a.itemWrapper,children:[Object(n.jsx)(x.a,{span:16,children:Object(z.f)(t.title,30)}),Object(n.jsxs)(x.a,{span:4,children:[Object(n.jsx)("img",{src:"".concat(K.asset,"/static/dist/images/icons/like.svg"),alt:"icon",className:V.a.statsIcon}),t.likes]}),Object(n.jsxs)(x.a,{span:4,children:[Object(n.jsx)("img",{src:"".concat(K.asset,"/static/dist/images/icons/downloadBlue.png"),alt:"icon",className:V.a.statsIcon}),t.downloads]})]})})):"No Data found for current Selected Dates"})]})};W.defaultProps={title:"",data:[]};var X=W;function J(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function Y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=Object(u.a)(t);if(e){var s=Object(u.a)(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return Object(j.a)(this,a)}}var Z=function(t){Object(p.a)(a,t);var e=Y(a);function a(t){var s;Object(r.a)(this,a),s=e.call(this,t),Object(d.a)(Object(l.a)(s),"getData",function(){var t=Object(o.a)(c.a.mark((function t(e){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s.setState({loading:!0}),t.next=4,w.c.get("api/v1_0/marketplace/get_analytics_data_dashboard",{params:{from_date:e[0],to_date:e[1]}});case 4:a=t.sent,s.setState({loading:!1,data:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),s.setState({loading:!1,data:[]});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()),Object(d.a)(Object(l.a)(s),"renderContent",(function(t){var e=s.state,a=e.loading,c=e.dates,o=e.momentDates,r=e.data;return t?a?Object(n.jsx)(C.a,{}):Object(n.jsxs)(b.Fragment,{children:[Object(n.jsxs)(g.a,{className:k.a.panelContainer,children:[Object(n.jsxs)(x.a,{span:12,className:k.a.datePanel,children:[Object(n.jsx)(E.a,{title:"Component Performance",type:"action",color:"blue",href:"/analytics/component",target:"_blank",className:k.a.componentPerformanceButton}),Object(n.jsx)(E.a,{title:"Search Analytics",type:"action",color:"blue",href:"/analytics/search",target:"_blank"})]}),Object(n.jsx)(x.a,{span:12,className:k.a.datePanel,children:Object(n.jsx)(I.a,{setDate:s.setDate,defaultDateValuesInMoment:o,defaultDateValues:c})})]}),Object(n.jsxs)(g.a,{children:[Object(n.jsxs)(g.a,{className:k.a.miniPanelContainer,children:[Object(n.jsx)(x.a,{span:8,children:Object(n.jsx)(H,{title:"Total Number Of Components",count:r.totalAssets,icon:"component",className:"totalComponentCount"})}),Object(n.jsx)(x.a,{span:8,children:Object(n.jsx)(H,{title:"Total Number Of Downloads",count:r.totalDownloads,icon:"download",className:"totalDownloadsCount"})}),Object(n.jsx)(x.a,{span:8,children:Object(n.jsx)(H,{title:"Total Number Of Imports to Viz Forms",count:r.totalVizImports,icon:"import",className:"totalVizFormsImportsCount"})})]}),Object(n.jsxs)(g.a,{children:[Object(n.jsx)(x.a,{span:12,children:Object(n.jsx)(X,{title:"Most Downloaded Components",data:r.topFiveDownloads,className:"topFiveDownloadsCount"})}),Object(n.jsx)(x.a,{span:12,children:Object(n.jsx)(X,{title:"Most Deployed Components",data:r.topFiveDeployments,className:"topFiveDeployedCount"})})]})]})]}):Object(n.jsx)(A.a,{})}));var i=a.getFormattedDate(new Date),p=a.getFormattedDate(new Date((new Date).getTime()-6048e5));return s.state={data:[],loading:!1,dates:[p,i],momentDates:[v()(p),v()(i)]},s.setDate=s.setDate.bind(Object(l.a)(s)),s.getData=s.getData.bind(Object(l.a)(s)),s}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var t=this.state.dates;this.getData(t)}},{key:"setDate",value:function(t,e){this.setState({dates:t,momentDates:e}),this.getData(t)}},{key:"render",value:function(){var t=this.props,e=t.marketplace,a=t.url,s=e.config,c=e.moderatorMenu;return Object(n.jsxs)(D.a,{config:s,url:a,children:[Object(n.jsx)(S.a,{placeholder:"Search for Marketplace Assets"}),Object(n.jsx)("div",{children:this.renderContent(c&&c.subMenu&&c.subMenu.length>0)})]})}}],[{key:"getFormattedDate",value:function(t){var e=t,a=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),s=e.getFullYear();return"".concat(s,"-").concat(n,"-").concat(a)}},{key:"getInitialProps",value:function(){var t=Object(o.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(w.a)(e);case 2:return t.next=4,e.store.dispatch(N.b.getConfig(!0));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),a}(b.Component);e.default=Object(m.b)((function(t){return{marketplace:t.marketplace}}),(function(t){return Object(f.bindActionCreators)(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?J(Object(a),!0).forEach((function(e){Object(d.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},N.b),t)}))(Z)},fS1W:function(t,e,a){"use strict";var n=a("nKUr"),s=(a("q1tI"),a("CwOF")),c=a.n(s),o=a("mOvS"),r=a.n(o)()().publicRuntimeConfig,i=function(t){var e=t.inline,a=t.size,s=t.height,o=t.width,i=t.className,l=t.style;return Object(n.jsx)("div",{style:l,className:"".concat(c.a.loaderWrapper," ").concat(e?c.a.inline:null," ").concat(i),children:Object(n.jsx)("div",{className:c.a.content,children:Object(n.jsx)("div",{className:c.a.center,children:Object(n.jsx)("img",{src:"".concat(r.asset,"/static/dist/images/loader.svg"),alt:"Loader",height:s||a,width:o||a})})})})};i.defaultProps={inline:!1},e.a=i}},[["9fNV",1,2,3,6,9,12,0,4,5,7,10,11,13,17,18,8]]]);