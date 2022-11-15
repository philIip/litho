"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4813,6972,2304,4882,6127,7940,1646,4980],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){return function(t){var n=u(t.components);return o.createElement(e,a({},t,{components:n}))}},u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var o=n(67294),r=n(34334);const a="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,s),hidden:n},t)}},65488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var o=n(83117),r=n(67294),a=n(34334),s=n(72389),l=n(67392),i=n(7094),c=n(12466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n,s=e.lazy,m=e.block,d=e.defaultValue,f=e.values,h=e.groupId,y=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,i.U)(),N=x.tabGroupChoices,w=x.setTabGroupChoices,O=(0,r.useState)(k),T=O[0],C=O[1],P=[],S=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=N[h];null!=E&&E!==T&&g.some((function(e){return e.value===E}))&&C(E)}var j=function(e){var t=e.currentTarget,n=P.indexOf(t),o=g[n].value;o!==T&&(S(t),C(o),null!=h&&w(h,String(o)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o,r=P.indexOf(e.currentTarget)+1;n=null!=(o=P[r])?o:P[0];break;case"ArrowLeft":var a,s=P.indexOf(e.currentTarget)-1;n=null!=(a=P[s])?a:P[P.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":m},y)},g.map((function(e){var t=e.value,n=e.label,s=e.attributes;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return P.push(e)},onKeyDown:D,onFocus:j,onClick:j},s,{className:(0,a.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,s.default)();return r.createElement(m,(0,o.Z)({key:String(t)},e))}},7772:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(83117),r=n(67294),a=n(23746),s=n(7694),l=n(13618),i="0.44.0",c="0.45.0-SNAPSHOT",p="0.10.4",u="0.142.0",m=n(86668);const d=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,i).replace(/{{site.soloaderVersion}}/g,p).replace(/{{site.lithoSnapshotVersion}}/g,c).replace(/{{site.flipperVersion}}/g,u).trim(),d=(0,m.L)().isDarkTheme?l.Z:s.Z;return r.createElement(a.ZP,(0,o.Z)({},a.lG,{code:n,language:t,theme:d}),(function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,s=e.getTokenProps;return r.createElement("pre",{className:t,style:n},o.map((function(e,t){return r.createElement("div",a({line:e,key:t}),e.map((function(e,t){return r.createElement("span",s({token:e,key:t}))})))})))}))}},56481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),s=(n(65488),n(85162),n(7772),["components"]),l={id:"hooks-intro",title:"Introduction to Hooks"},i=void 0,c={unversionedId:"mainconcepts/hooks-intro",id:"mainconcepts/hooks-intro",title:"Introduction to Hooks",description:"Definition: Hooks are special functions that can persist state across renders and perform side effects . They begin with use and may only be called from render() and other hooks. The API is heavily inspired by React Hooks.",source:"@site/../docs/mainconcepts/hooks-intro.mdx",sourceDirName:"mainconcepts",slug:"/mainconcepts/hooks-intro",permalink:"/docs/mainconcepts/hooks-intro",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/hooks-intro.mdx",tags:[],version:"current",frontMatter:{id:"hooks-intro",title:"Introduction to Hooks"},sidebar:"mainSidebar",previous:{title:"Types of Props",permalink:"/docs/mainconcepts/props"},next:{title:"useState",permalink:"/docs/mainconcepts/use-state"}},p={},u=[{value:"Hooks in Practice",id:"hooks-in-practice",level:3},{value:"Rules for Hooks",id:"rules-for-hooks",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.mdx)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("admonition",{type:"note"},(0,a.mdx)("p",{parentName:"admonition"},(0,a.mdx)("strong",{parentName:"p"},"Definition"),": ",(0,a.mdx)("em",{parentName:"p"},"Hooks")," are special functions that can persist state across renders and perform side effects",(0,a.mdx)("sup",{parentName:"p",id:"fnref-1"},(0,a.mdx)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," . They begin with ",(0,a.mdx)("inlineCode",{parentName:"p"},"use")," and may only be called from ",(0,a.mdx)("inlineCode",{parentName:"p"},"render()")," and other hooks. The API is heavily inspired by ",(0,a.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"React Hooks"),".")),(0,a.mdx)("p",null,"Hooks are Litho's way to enable components to persist state across renders and register for lifecycle events while remaining immutable. Litho has a suite of built in hooks whose docs you'll find in this section."),(0,a.mdx)("p",null,"As a brief introduction, some of the most common ones you'll encounter are:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},(0,a.mdx)("a",{parentName:"strong",href:"/docs/mainconcepts/use-state"},"useState"))," - keeps track of a variable across renders."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},(0,a.mdx)("a",{parentName:"strong",href:"/docs/mainconcepts/use-effect"},"useEffect"))," - lets a component perform side effects when it's attached or detached from the tree."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},(0,a.mdx)("a",{parentName:"strong",href:"/docs/mainconcepts/use-ref"},"useRef"))," - keeps track of a mutable reference across renders."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},(0,a.mdx)("a",{parentName:"strong",href:"/docs/mainconcepts/use-cached"},"useCached"))," - keeps track of a cached value that is expensive to calculate.")),(0,a.mdx)("h3",{id:"hooks-in-practice"},"Hooks in Practice"),(0,a.mdx)("p",null,"To demonstrate the use of hooks in practice, the component below implements a simple counter; whenever it's clicked, it increments the number of clicks and re-renders:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"{3}","{3}":!0},'class CounterComponent : KComponent() {\n  override fun ComponentScope.render(): Component {\n    val clicks = useState { 0 }\n    return Text(\n        style = Style.onClick { clicks.update { c -> c + 1 } },\n        text = "Clicks: ${clicks.value}")\n  }\n}\n')),(0,a.mdx)("p",null,"As shown in the above code, ",(0,a.mdx)("inlineCode",{parentName:"p"},"useState")," is a hook that can keep track of a variable across renders. The first time it's called it returns the initial value (",(0,a.mdx)("inlineCode",{parentName:"p"},"0"),").  Subsequent calls return the current value of the state. For more information about state, see the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/use-state"},"useState")," page."),(0,a.mdx)("p",null,"The identity of ",(0,a.mdx)("inlineCode",{parentName:"p"},"useState")," is just the sequence of the call within the render function. So, to add another state variable, you can just add another call to ",(0,a.mdx)("inlineCode",{parentName:"p"},"useState"),". However, this leads to some important rules about preserving the identity of hooks!"),(0,a.mdx)("h2",{id:"rules-for-hooks"},"Rules for Hooks"),(0,a.mdx)("p",null,"Hooks maintain state by using the identity of the current component along with the sequence of the call within the component. This means that in a render, the first ",(0,a.mdx)("inlineCode",{parentName:"p"},"useState")," call will maintain one piece of state, a second ",(0,a.mdx)("inlineCode",{parentName:"p"},"useState")," call will maintain another, and so on, and they'll be consistent across render passes."),(0,a.mdx)("p",null,"As such, there are ",(0,a.mdx)("strong",{parentName:"p"},"three hooks rules")," that you need to remember:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Hooks can only be called from ",(0,a.mdx)("inlineCode",{parentName:"p"},"render()")," or from another hook.")),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Hooks must not be called conditionally."),(0,a.mdx)("pre",{parentName:"li"},(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"if (something) {\n  val state = useState{ 1 } // INCORRECT. Called inside an if block\n}\n")),(0,a.mdx)("pre",{parentName:"li"},(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},"val cachedValue = useCached(dependendency) {\n  val dynamicColor = useBinding{0} // INCORRECT. The useCached block will only be executed if the dependency changes.\n  return false\n}\n"))),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Hook names should start with ",(0,a.mdx)("inlineCode",{parentName:"p"},"use"),"."))),(0,a.mdx)("p",null,"The reasons for rules 1 and 2 are to preserve hook identity, as mentioned above. Rule 3 is just to make it easier to tell when a function has hook-like behavior."),(0,a.mdx)("p",null,"It may prove helpful to look at some more examples, starting with the most fundamental hook: ",(0,a.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/use-state"},"useState"),"!"),(0,a.mdx)("div",{className:"footnotes"},(0,a.mdx)("hr",{parentName:"div"}),(0,a.mdx)("ol",{parentName:"div"},(0,a.mdx)("li",{parentName:"ol",id:"fn-1"},"Side effects are operations that affect your component. Side effects include operations such as fetch requests, subscriptions, using timers, and manually changing the DOM. Side effects cannot occur during rendering. For more information on side effects, see the ",(0,a.mdx)("a",{parentName:"li",href:"/docs/mainconcepts/use-effect"},"useEffect")," hook.",(0,a.mdx)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},23746:(e,t,n)=>{n.d(t,{ZP:()=>f,lG:()=>s});var o=n(87410);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a=n(67294),s={Prism:o.Z,theme:r};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=i({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=i({},n,{backgroundColor:null}),r};function d(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const f=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=i({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==r&&(a.style=void 0!==a.style?i({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),l(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var s=o?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,s=i({},d(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?i({},s.style,r):r),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),l(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,s=0,l=[],i=[l];s>-1;){for(;(a=o[s]++)<r[s];){var m=void 0,d=t[s],f=n[s][a];if("string"==typeof f?(d=s>0?d:["plain"],m=f):(d=u(d,f.type),f.alias&&(d=u(d,f.alias)),m=f.content),"string"==typeof m){var h=m.split(c),y=h.length;l.push({types:d,content:h[0]});for(var v=1;v<y;v++)p(l),i.push(l=[]),l.push({types:d,content:h[v]})}else s++,t.push(d),n.push(m),o.push(0),r.push(m.length)}s--,t.pop(),n.pop(),o.pop(),r.pop()}return p(l),i}(void 0!==s?this.tokenize(t,o,s,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)},13618:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);