"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7558,6972,2304,4882,6127,7940,1646,4980],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){return function(t){var n=p(t.components);return a.createElement(e,r({},t,{components:n}))}},p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,c(c({ref:t},s),{},{components:n})):a.createElement(h,c({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(67294),o=n(34334);const r="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},65488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(83117),o=n(67294),r=n(34334),l=n(72389),c=n(67392),i=n(7094),s=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,h=e.values,y=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,c.l)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,i.U)(),C=x.tabGroupChoices,w=x.setTabGroupChoices,O=(0,o.useState)(k),T=O[0],N=O[1],E=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var D=C[y];null!=D&&D!==T&&g.some((function(e){return e.value===D}))&&N(D)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==T&&(j(t),N(a),null!=y&&w(y,String(a)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,o=E.indexOf(e.currentTarget)+1;n=null!=(a=E[o])?a:E[0];break;case"ArrowLeft":var r,l=E.indexOf(e.currentTarget)-1;n=null!=(r=E[l])?r:E[E.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},f)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:S,onFocus:P,onClick:P},l,{className:(0,r.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,l.default)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},7772:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(83117),o=n(67294),r=n(23746),l=n(7694),c=n(13618),i="0.44.0",s="0.45.0-SNAPSHOT",u="0.10.4",p="0.142.0",d=n(86668);const m=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,i).replace(/{{site.soloaderVersion}}/g,u).replace(/{{site.lithoSnapshotVersion}}/g,s).replace(/{{site.flipperVersion}}/g,p).trim(),m=(0,d.L)().isDarkTheme?c.Z:l.Z;return o.createElement(r.ZP,(0,a.Z)({},r.lG,{code:n,language:t,theme:m}),(function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,l=e.getTokenProps;return o.createElement("pre",{className:t,style:n},a.map((function(e,t){return o.createElement("div",r({line:e,key:t}),e.map((function(e,t){return o.createElement("span",l({token:e,key:t}))})))})))}))}},24415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),l=(n(65488),n(85162),n(7772),["components"]),c={id:"use-cached",title:"useCached"},i=void 0,s={unversionedId:"mainconcepts/use-cached",id:"mainconcepts/use-cached",title:"useCached",description:"useCached is a hook that, rather than have to repeatedly make an expensive calculation, enables a component to calculate and maintain a cached value. It is calculated when the component is first added to the ComponentTree, and only recalculated when any of the dependencies provided in the useCached declaration changes.",source:"@site/../docs/mainconcepts/use-cached.mdx",sourceDirName:"mainconcepts",slug:"/mainconcepts/use-cached",permalink:"/docs/mainconcepts/use-cached",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/use-cached.mdx",tags:[],version:"current",frontMatter:{id:"use-cached",title:"useCached"},sidebar:"mainSidebar",previous:{title:"useRef",permalink:"/docs/mainconcepts/use-ref"},next:{title:"useErrorBoundary",permalink:"/docs/mainconcepts/use-error-boundary"}},u={},p=[{value:"Example: Cached value with dependencies",id:"example-cached-value-with-dependencies",level:2},{value:"Example: Cached value without dependencies",id:"example-cached-value-without-dependencies",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.mdx)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"useCached")," is a hook that, rather than have to repeatedly make an expensive calculation, enables a component to calculate and maintain a cached value. It is calculated when the component is first added to the ComponentTree, and only recalculated when any of the dependencies provided in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"useCached")," declaration changes."),(0,r.mdx)("p",null,"To familiarize yourself with the concept and rules for hooks, see the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/hooks-intro"},"Introduction to Hooks")," page."),(0,r.mdx)("h2",{id:"example-cached-value-with-dependencies"},"Example: Cached value with dependencies"),(0,r.mdx)("p",null,"In the following code, ",(0,r.mdx)("inlineCode",{parentName:"p"},"useCached")," is used to create and maintain an expensive-to-calculate value, which can be used multiple times across renders without repeating the expensive calculation."),(0,r.mdx)("p",null,"Since the ",(0,r.mdx)("inlineCode",{parentName:"p"},"useCached")," declaration defines a dependency, the value will be calculated when the component is attached to the ComponentTree, and then recalculated every time the dependency changes."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/UseCachedWithDependencyComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/UseCachedWithDependencyComponent.kt",start:"start_example",end:"end_example"},'class UseCachedWithDependencyComponent : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    val number = useState { 1 }\n\n    val expensiveValue = useCached(number) { expensiveRepeatFunc("hello", number.value) }\n\n    return Column(style = Style.onClick { number.update { n -> n + 1 } }) {\n      child(Text(text = expensiveValue))\n    }\n  }\n\n  companion object {\n    private fun expensiveRepeatFunc(prefix: String, num: Int = 20): String {\n      return StringBuilder().apply { repeat(num) { append(prefix) } }.toString()\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"example-cached-value-without-dependencies"},"Example: Cached value without dependencies"),(0,r.mdx)("p",null,"In the code below, since ",(0,r.mdx)("inlineCode",{parentName:"p"},"useCached")," does not declare a dependency, the value will be calculated only once when the component is attached to the ComponentTree but will not be recalculated when the state value changes. The initial value of the state will always be used."),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"It's a common mistake to use the state in ",(0,r.mdx)("inlineCode",{parentName:"p"},"useCached")," without defining it as a dependency then expect the cached value to be recalculated when the state is updated.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/UseCachedWithoutDependencyComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/UseCachedWithoutDependencyComponent.kt",start:"start_example",end:"end_example"},'class UseCachedWithoutDependencyComponent : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    val number = useState { 1 }\n\n    val expensiveValue = useCached {\n      // state isn\'t declared as a dependency, so initial state value will always be used\n      expensiveRepeatFunc("hello", number.value)\n    }\n\n    return Column(style = Style.onClick { number.update { n -> n + 1 } }) {\n      child(Text(text = expensiveValue))\n    }\n  }\n')))}m.isMDXComponent=!0},23746:(e,t,n)=>{n.d(t,{ZP:()=>h,lG:()=>l});var a=n(87410);const o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var r=n(67294),l={Prism:a.Z,theme:o};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var s=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=i({},n,{backgroundColor:null}),o};function m(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const h=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=i({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==o&&(r.style=void 0!==r.style?i({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),c(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(c))}})),c(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,l=i({},m(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?i({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),c(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,l=0,c=[],i=[c];l>-1;){for(;(r=a[l]++)<o[l];){var d=void 0,m=t[l],h=n[l][r];if("string"==typeof h?(m=l>0?m:["plain"],d=h):(m=p(m,h.type),h.alias&&(m=p(m,h.alias)),d=h.content),"string"==typeof d){var y=d.split(s),f=y.length;c.push({types:m,content:y[0]});for(var v=1;v<f;v++)u(c),i.push(c=[]),c.push({types:m,content:y[v]})}else l++,t.push(m),n.push(d),a.push(0),o.push(d.length)}l--,t.pop(),n.pop(),a.pop(),o.pop()}return u(c),i}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component)},13618:(e,t,n)=>{n.d(t,{Z:()=>a});const a={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,n)=>{n.d(t,{Z:()=>a});const a={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);