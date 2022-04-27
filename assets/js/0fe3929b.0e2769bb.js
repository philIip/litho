"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9348],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>h,mdx:()=>x,useMDXComponents:()=>u,withMDXComponents:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){return function(t){var n=u(t.components);return a.createElement(e,o({},t,{components:n}))}},u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=u(n),h=i,c=m["".concat(l,".").concat(h)]||m[h]||p[h]||o;return n?a.createElement(c,r(r({ref:t},s),{},{components:n})):a.createElement(c,r({ref:t},s))}));function x(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>i})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>o,default:()=>l});var a=n(52263),i=n(13919);function o(){var e=(0,a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,l=o.forcePrependBaseUrl,r=void 0!==l&&l,d=o.absolute,s=void 0!==d&&d;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(r)return t+n;var m=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+m:m}(o,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},58215:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(67294);const i=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},55064:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(87462),i=n(67294),o=n(72389),l=n(79443);const r=function(){var e=(0,i.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var d=n(83039),s=n(86010);const m="tabItem_1uMI";function u(e){var t,n,a,o=e.lazy,l=e.block,u=e.defaultValue,h=e.values,p=e.groupId,c=e.className,x=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:x.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,d.duplicates)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===u?u:null!=(t=null!=u?u:null==(n=x.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=x[0])?void 0:a.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=r(),w=b.tabGroupChoices,v=b.setTabGroupChoices,N=(0,i.useState)(y),C=N[0],T=N[1],k=[],E=(0,d.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=p){var _=w[p];null!=_&&_!==C&&f.some((function(e){return e.value===_}))&&T(_)}var S=function(e){var t=e.currentTarget,n=k.indexOf(t),a=f[n].value;a!==C&&(E(t),T(a),null!=p&&v(p,a))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=k.indexOf(e.currentTarget)+1;n=k[a]||k[0];break;case"ArrowLeft":var i=k.indexOf(e.currentTarget)-1;n=k[i]||k[k.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.default)("tabs",{"tabs--block":l},c)},f.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,s.default)("tabs__item",m,{"tabs__item--active":C===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:L,onFocus:S,onClick:S},null!=n?n:t)}))),o?(0,i.cloneElement)(x.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function h(e){var t=(0,o.default)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}},62146:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>d,contentTitle:()=>s,metadata:()=>m,toc:()=>u,default:()=>p});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),l=n(44996),r=(n(55064),n(58215),["components"]),d={id:"flexbox-yoga",title:"Layout System with Flexbox",hide_table_of_contents:!0},s=void 0,m={unversionedId:"mainconcepts/flexbox-yoga",id:"mainconcepts/flexbox-yoga",isDocsHomePage:!1,title:"Layout System with Flexbox",description:"Litho uses the Yoga library, which is an implementation of Flexbox, to measure and layout on-screen components. If you have used Flexbox on the web before then this should be very familiar. If you are more familiar with how Android normally performs Layout then Flexbox will remind you of LinearLayout.",source:"@site/../docs/mainconcepts/flexbox-yoga.mdx",sourceDirName:"mainconcepts",slug:"/mainconcepts/flexbox-yoga",permalink:"/docs/mainconcepts/flexbox-yoga",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/flexbox-yoga.mdx",tags:[],version:"current",frontMatter:{id:"flexbox-yoga",title:"Layout System with Flexbox",hide_table_of_contents:!0},sidebar:"mainSidebar",previous:{title:"useErrorBoundary",permalink:"/docs/mainconcepts/use-error-boundary"},next:{title:"Keys and Component Identity",permalink:"/docs/mainconcepts/coordinate-state-actions/keys-and-identity"}},u=[{value:"Flexbox attributes",id:"flexbox-attributes",children:[{value:"Layout direction",id:"layout-direction",children:[],level:3},{value:"Distribution along the main axis",id:"distribution-along-the-main-axis",children:[],level:3},{value:"Distribution along the cross axis",id:"distribution-along-the-cross-axis",children:[],level:3},{value:"Wrapping to multiple lines",id:"wrapping-to-multiple-lines",children:[{value:"Line distribution",id:"line-distribution",children:[],level:4}],level:3}],level:2},{value:"Yoga playground",id:"yoga-playground",children:[],level:2},{value:"Android Views vs. Litho with Yoga",id:"android-views-vs-litho-with-yoga",children:[{value:"Vertically stacked items",id:"vertically-stacked-items",children:[],level:3},{value:"Two items equally stretched horizontally",id:"two-items-equally-stretched-horizontally",children:[],level:3},{value:"Absolutely positioned items",id:"absolutely-positioned-items",children:[],level:3}],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Why is my text cut off?",id:"why-is-my-text-cut-off",children:[],level:3},{value:"How to build overlapping components?",id:"how-to-build-overlapping-components",children:[],level:3},{value:"How to place my components at centre?",id:"how-to-place-my-components-at-centre",children:[],level:3},{value:"I have defined flexGrow / flexShrink but it does not do anything?",id:"i-have-defined-flexgrow--flexshrink-but-it-does-not-do-anything",children:[],level:3},{value:"When keyboard opens then content is cut off?",id:"when-keyboard-opens-then-content-is-cut-off",children:[],level:3}],level:2}],h={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.mdx)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Litho uses the ",(0,o.mdx)("a",{parentName:"p",href:"https://yogalayout.com/"},"Yoga")," library, which is an implementation of ",(0,o.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/css-flexbox-1/"},"Flexbox"),", to measure and layout on-screen components. If you have used Flexbox on the web before then this should be very familiar. If you are more familiar with how Android normally performs Layout then Flexbox will remind you of ",(0,o.mdx)("inlineCode",{parentName:"p"},"LinearLayout"),"."),(0,o.mdx)("h2",{id:"flexbox-attributes"},"Flexbox attributes"),(0,o.mdx)("p",null,"This section shows how various attributes of Flexbox are used for on-screen layout."),(0,o.mdx)("h3",{id:"layout-direction"},"Layout direction"),(0,o.mdx)("p",null,"Flexbox is a ",(0,o.mdx)("strong",{parentName:"p"},"one dimensional layout model"),", which means all elements are placed along one line.\nThis leads to the question, ",(0,o.mdx)("em",{parentName:"p"},'"Should your elements be laid out horizontally, or vertically?"'),"."),(0,o.mdx)("p",null,"The primary axis of layout is called the ",(0,o.mdx)("strong",{parentName:"p"},"Main Axis"),", and the direction perpendicular to it is called the ",(0,o.mdx)("strong",{parentName:"p"},"Cross Axis"),". For example, if you wanted your children to be laid out left to right, then the Main Axis would be the horizontal axis, and the Cross Axis would be the vertical axis."),(0,o.mdx)("p",null,"Litho uses special container components to define direction of the layout, as shown in the following table."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:"left"},"Component"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"Main Axis"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"Child Elements Layout"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"If Wrapping is Enabled"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"Row")),(0,o.mdx)("td",{parentName:"tr",align:"left"},"horizontal"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"left to right"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"Next line will start under the first item on the left of the container.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"Row (reverse)")),(0,o.mdx)("td",{parentName:"tr",align:"left"},"horizontal"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"right to left"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"Next line will start under the first item on the right of the container.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"Column")),(0,o.mdx)("td",{parentName:"tr",align:"left"},"vertical"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"top to bottom"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"Next line will start to the right of the first item on the top of the container.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},(0,o.mdx)("inlineCode",{parentName:"td"},"Column (reverse)")),(0,o.mdx)("td",{parentName:"tr",align:"left"},"vertical"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"bottom to top"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"Next line will start to the right of the first item on the bottom of the container.")))),(0,o.mdx)("p",null,"The above container components are illustrated in the following diagram."),(0,o.mdx)("img",{src:(0,l.default)("/images/litho-layout-flex-direction.png"),alt:"flex-direction"}),(0,o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"(reverse)")," option is available through the ",(0,o.mdx)("inlineCode",{parentName:"p"},".reverse(boolean)")," method on ",(0,o.mdx)("inlineCode",{parentName:"p"},"Row"),"/",(0,o.mdx)("inlineCode",{parentName:"p"},"Column")," objects."))),(0,o.mdx)("h3",{id:"distribution-along-the-main-axis"},"Distribution along the main axis"),(0,o.mdx)("p",null,"If your container has more space than is necessary along the Main Axis then the way children are positioned across that axis needs to be considered."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"justifyContent")," method specifies how the child elements are distributed across the Main Axis. It takes a ",(0,o.mdx)("inlineCode",{parentName:"p"},"YogaJustify")," enum input, which has the following possible values:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"FLEX_START")," ",(0,o.mdx)("em",{parentName:"li"},"(default)")," - position children at the start of the container, along the main axis."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"FLEX_END")," - position children at the end of the container, along the main axis."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"CENTER")," - position children in the centre of the container, along the main axis."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"SPACE_BETWEEN")," - distribute extra space evenly between children."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"SPACE_AROUND")," - distribute space evenly around each child. Note that adjacent children will have '2x' space between them (because each child has its own 'padding')."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"SPACE_EVENLY")," - distribute space evenly around all children.")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"YogaJustify")," values are illustrated below."),(0,o.mdx)("img",{src:(0,l.default)("/images/litho-layout-justify-content.png"),alt:"justify-content"}),(0,o.mdx)("h3",{id:"distribution-along-the-cross-axis"},"Distribution along the cross axis"),(0,o.mdx)("p",null,"If the elements in your line have different heights, then the way they are positioned along the line needs to be considered."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"alignItems")," method specifies how the container's children are distributed across the Cross Axis. It takes a ",(0,o.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," enum input, which has the following possible values:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"STRETCH")," ",(0,o.mdx)("em",{parentName:"li"},"(default)")," - stretch the size of all elements to completely fill the line."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"FLEX_START")," - align elements with the start of the cross axis."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"FLEX_END")," - align elements with the end of the cross axis."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"CENTER")," - align elements with the centre of the line."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"BASELINE")," - align elements with respect to their baselines.")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," values are illustrated below."),(0,o.mdx)("img",{src:(0,l.default)("/images/litho-layout-align-items.png"),alt:"align-items"}),(0,o.mdx)("h3",{id:"wrapping-to-multiple-lines"},"Wrapping to multiple lines"),(0,o.mdx)("p",null,"In addition to the one-dimensional Flexbox laying out its children in one line, Flexboxes can also wrap their children onto multiple lines, much like text wraps. You specify wrapping behavior with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Wrap")," method, which takes a ",(0,o.mdx)("inlineCode",{parentName:"p"},"YogaWrap")," enum value that has the following possible values:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"NO_WRAP")," ",(0,o.mdx)("em",{parentName:"li"},"(default)")," - there is no wrapping. Children are forced into a single line; if they cannot fit, they will overflow."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"WRAP")," - elements that overflow a single line will be moved to the next line. If the main axis is horizontal, then the next line will be ",(0,o.mdx)("strong",{parentName:"li"},"below")," the previous line."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"WRAP_REVERSE")," - similar to ",(0,o.mdx)("inlineCode",{parentName:"li"},"WRAP")," except the order of lines is reversed. If the main axis is horizontal, then the next line will be ",(0,o.mdx)("strong",{parentName:"li"},"above")," the previous line.")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"YogaWrap")," values are illustrated below."),(0,o.mdx)("img",{src:(0,l.default)("/images/litho-layout-wrap.png"),alt:"wrap"}),(0,o.mdx)("h4",{id:"line-distribution"},"Line distribution"),(0,o.mdx)("p",null,"If your container has extra space in the Cross Axis direction, then the way lines are distributed in that space needs to be considered."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"alignContent")," method specifies how lines are distributed along the Cross Axis. It takes a ",(0,o.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," enum value, which has the following possible values:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"STRETCH")," ",(0,o.mdx)("em",{parentName:"li"},"(default)")," - lines are stretched evenly to fill the available space in the cross axis."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"FLEX_START")," - lines are placed at the start of the cross axis."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"FLEX_END")," - lines are placed at the end of the cross axis."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"CENTER")," - lines are placed in the centre of the cross axis."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"SPACE_BETWEEN")," - evenly distributes extra space between all lines."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"SPACE_AROUND")," - pads lines above and below with extra space.")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"YogaAlign")," values, for Lines, are illustrated below."),(0,o.mdx)("img",{src:(0,l.default)("/images/litho-layout-align-content.png"),alt:"align-content"}),(0,o.mdx)("p",null,"For more information on specific Flexbox properties, refer to the ",(0,o.mdx)("a",{parentName:"p",href:"https://yogalayout.com/docs/"},"Yoga documentation")," or explore any web resource on how Flexbox functions."),(0,o.mdx)("h2",{id:"yoga-playground"},"Yoga playground"),(0,o.mdx)("p",null,"You can also use the ",(0,o.mdx)("a",{parentName:"p",href:"https://yogalayout.com/playground"},"Yoga Playground")," to try different layout configurations and generate corresponding Litho code, as shown in the following screenshot."),(0,o.mdx)("img",{src:(0,l.default)("/images/yoga-playground.png"),alt:"Yoga Playground",className:"white-background"}),(0,o.mdx)("h2",{id:"android-views-vs-litho-with-yoga"},"Android Views vs. Litho with Yoga"),(0,o.mdx)("p",null,"This section lists typical layout configurations in Android and how they translate to Litho with Yoga."),(0,o.mdx)("h3",{id:"vertically-stacked-items"},"Vertically stacked items"),(0,o.mdx)("p",null,"The following table shows vertically stacked items for Android Views and Litho with Yoga."),(0,o.mdx)("table",null,(0,o.mdx)("tr",null,(0,o.mdx)("th",null,"Android Views"),(0,o.mdx)("th",null,"Litho with Yoga")),(0,o.mdx)("tr",null,(0,o.mdx)("td",null,(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<LinearLayout\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    android:orientation="vertical">\n    <TextView\n        android:id="@+id/text1"\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:text="Text 1" />\n    <TextView\n        android:id="@+id/text2"\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:text="Text 2" />\n</LinearLayout>\n'))),(0,o.mdx)("td",null,(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin"},'Column {\n  child(Text(text = "Text 1"))\n  child(Text(text = "Text 2"))\n}\n'))))),(0,o.mdx)("h3",{id:"two-items-equally-stretched-horizontally"},"Two items equally stretched horizontally"),(0,o.mdx)("p",null,"To achieve an effect similar to a ",(0,o.mdx)("inlineCode",{parentName:"p"},"LinearLayout")," with weights, Flexbox provides a concept called ",(0,o.mdx)("inlineCode",{parentName:"p"},"flexGrow(<weight>)"),", as featured in the following table."),(0,o.mdx)("table",null,(0,o.mdx)("tr",null,(0,o.mdx)("th",null,"Android Views"),(0,o.mdx)("th",null,"Litho with Yoga")),(0,o.mdx)("tr",null,(0,o.mdx)("td",null,(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<LinearLayout\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    android:orientation="horizontal">\n    <View\n        android:layout_width="0dp"\n        android:layout_height="match_parent"\n        android:backgroundColor="@color/red"\n        android:layout_weight="1"/>\n    <View\n        android:layout_width="0dp"\n        android:layout_height="match_parent"\n        android:backgroundColor="@color/blue"\n        android:layout_weight="1"/>\n</LinearLayout>\n'))),(0,o.mdx)("td",null,(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin"},"Row {\n  child(Image(style = Style.flex(grow = 1f), drawable = ColorDrawable(Color.RED)))\n  child(Image(style = Style.flex(grow = 1f), drawable = ColorDrawable(Color.BLUE)))\n}\n"))))),(0,o.mdx)("h3",{id:"absolutely-positioned-items"},"Absolutely positioned items"),(0,o.mdx)("p",null,"If you'd like to overlay one view on top of the other, similar to a ",(0,o.mdx)("inlineCode",{parentName:"p"},"FrameLayout"),", Flexbox can achieve that with ",(0,o.mdx)("inlineCode",{parentName:"p"},"positionType(ABSOLUTE)"),", as featured in the following table."),(0,o.mdx)("table",null,(0,o.mdx)("tr",null,(0,o.mdx)("th",null,"Android Views"),(0,o.mdx)("th",null,"Litho with Yoga")),(0,o.mdx)("tr",null,(0,o.mdx)("td",null,(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<FrameLayout\n    android:layout_width="match_parent"\n    android:layout_height="match_parent">\n    <ImageView\n        android:layout_width="100dp"\n        android:layout_height="100dp"\n        android:src="@drawable/some_big_image"/>\n    <TextView\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:text="Overlaid text"/>\n</FrameLayout>\n'))),(0,o.mdx)("td",null,(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin"},'Column {\n  child(Image(\n    style = Style.width(100.dp).height(100.dp),\n    drawable = drawableRes(R.drawable.some_big_image)))\n  child(Text(\n    style = Style.positionType(YogaPositionType.ABSOLUTE),\n    text = "Overlaid text"))\n}\n'))))),(0,o.mdx)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.mdx)("p",null,"There are few issues you may face while using flexbox. This section discusses the more common of those issues; which may prove useful when debugging and finding issues in layout.\nFor debugging you can also refer to ",(0,o.mdx)("a",{parentName:"p",href:"/docs/debugging/debugging-tips#layout-inspector-plugin"},"Flipper layout inspector plugin")," to see the component hierarchy and you can update the flex properties in the plugin itself to understand how it affects layout.\nOther tool that can be used for understanding and playing around with flexbox properties is ",(0,o.mdx)("a",{parentName:"p",href:"https://yogalayout.com/playground"},"Yoga Playground"),"."),(0,o.mdx)("h3",{id:"why-is-my-text-cut-off"},"Why is my text cut off?"),(0,o.mdx)("p",null,"Common problem is that there is not enough space for content to be visible on the screen and therefore text gets truncated.\nThe default value of flexShrink is 1.0f, so if there is not enough space available for the text to render completely then text will shrink and you will see truncated text on the screen. Changing the flexShrink value to zero, will make sure that text component is not shrinked."),(0,o.mdx)("p",null,"Let's understand this using an example.\nHere we have two text components in Row. If no flex properties are defined on either of the text component then they both will take equal space and text will be truncated if text is too long to fit into available space.\nNow, if we add flexShrink = 0f to first text then it will not shrink and take up the whole space to render itself completely and second text will take up the remaining space."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/flexbox/TextInRow.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/flexbox/TextInRow.kt",start:"start_example",end:"end_example"},'override fun ComponentScope.render(): Component {\n  return Row(style = Style.padding(16.dp)) {\n    child(\n        Text(\n            style =\n                Style.flex(shrink = 0f), // If flexShrink is 1f then this text will be truncated\n            text = "This is a really long text.",\n            textSize = 20.sp,\n            maxLines = 1))\n    child(\n        Text(\n            style = Style.margin(start = 8.dp),\n            text = "Another long text",\n            textSize = 20.sp,\n            maxLines = 1))\n  }\n}\n')),(0,o.mdx)("p",null,"But second text is still truncated, based on your requirements - either you can make it multiline text or display these two texts inside a Column."),(0,o.mdx)("p",null,"Another scenario where text can get truncated is if you have exact width and height defined on sibling component which is taking up all the available space and not allowing other children to grow.\nIn this case, you can either remove the exact width / height defined so that both siblings can grow and take up the available space or set flexShrink to zero on sibling component."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/flexbox/TextInsideContainer.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/flexbox/TextInsideContainer.kt",start:"start_example",end:"end_example"},'override fun ComponentScope.render(): Component {\n  return Column(style = Style.height(135.dp).padding(16.dp)) {\n    child(\n        Column(style = Style.heightPercent(100f).widthPercent(100f)) {\n          // either remove widthPercent / heightPercent here so that both siblings can grow\n          // equally\n          child(Text(text = "This is a really long text.", textSize = 20.sp, maxLines = 1))\n          child(\n              Text(\n                  style = Style.margin(top = 8.dp),\n                  text = "Subtitle text",\n                  textSize = 20.sp,\n                  maxLines = 1))\n        })\n    child(\n        Text(\n            // or add flex(shrink = 0f) so that this component does not shrink\n            style = Style.margin(top = 16.dp),\n            text = "Small footer text",\n            textSize = 20.sp,\n            maxLines = 1))\n  }\n}\n')),(0,o.mdx)("h3",{id:"how-to-build-overlapping-components"},"How to build overlapping components?"),(0,o.mdx)("p",null,"You can achieve this by using position type as YogaPositionType.ABSOLUTE. You can also set exact position left / right coordinates for starting position of the absolute child.\nRefer to ",(0,o.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/flexbox-yoga#absolutely-positioned-items"},"Absolutely positioned items")," section to make components overlap each other."),(0,o.mdx)("h3",{id:"how-to-place-my-components-at-centre"},"How to place my components at centre?"),(0,o.mdx)("p",null,"Use ",(0,o.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/flexbox-yoga#distribution-along-the-cross-axis"},"alignItems")," CENTER, if you want to centre your component along cross axis. For example, if you want to centre component inside Row along the vertical axis. ",(0,o.mdx)("br",null),"\nUse ",(0,o.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/flexbox-yoga#distribution-along-the-main-axis"},"justifyContent")," CENTER, if you want to centre your component along the main axis. For example, if you want to centre component inside Row along the horizontal axis."),(0,o.mdx)("p",null,"If it is specific to Text then consider using verticalGravity / horizontalGravity on the Text component to keep it centre aligned."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin"},'  Text(\n    text = "Align this text at centre vertically using vertical gravity",\n    verticalGravity = VerticalGravity.CENTER,\n    textSize = 20.sp))\n')),(0,o.mdx)("h3",{id:"i-have-defined-flexgrow--flexshrink-but-it-does-not-do-anything"},"I have defined flexGrow / flexShrink but it does not do anything?"),(0,o.mdx)("p",null,"If parent has fixed width / height then flexGrow / flexshrink is not expected to work correctly since there is not enough space to work with. Check in your component hierarchy if the component which is getting clipped getting enough width / height needed to render it completely or not."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/flexbox/TextInColumnWithExactHeight.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/flexbox/TextInColumnWithExactHeight.kt",start:"start_example",end:"end_example"},'override fun ComponentScope.render(): Component {\n  return Column(style = Style.height(50.dp).padding(16.dp)) { // exact height defined here\n    child(\n        Text(\n            style =\n                Style.flex(\n                    shrink =\n                        0f), // Even with flexShrink zero, text will be cut as there is not enough\n            // space\n            text = "This is a really long text.",\n            textSize = 20.sp,\n            maxLines = 1))\n    child(\n        Text(\n            style = Style.margin(start = 8.dp),\n            text = "Another long text",\n            textSize = 20.sp,\n            maxLines = 1))\n  }\n}\n')),(0,o.mdx)("h3",{id:"when-keyboard-opens-then-content-is-cut-off"},"When keyboard opens then content is cut off?"),(0,o.mdx)("p",null,"When you have a screen where in different scenarios the keyboard is open as layout contains a TextInput. The same layout now need to fit inside lesser space (height in this case).\nThere are multiple ways to solve this. ",(0,o.mdx)("br",null),"\nFirst check if your text is not cut off due to ",(0,o.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/flexbox-yoga#why-is-my-text-cut-off-"},"flex shrink issues")," or may be you are setting ",(0,o.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/flexbox-yoga#i-have-defined-flexgrow--flexshrink-but-it-does-not-do-anything-"},"exact width / height on parent components")," in the hierarchy. ",(0,o.mdx)("br",null),"\nSecond, you can make your content scrollable by placing your content VerticalScroll. ",(0,o.mdx)("br",null)),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/flexbox/ContentInVerticalScroll.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/flexbox/ContentInVerticalScroll.kt",start:"start_example",end:"end_example"},'override fun ComponentScope.render(): Component = VerticalScroll {\n  Column {\n    for (i in 0..20) {\n      child(\n          Text(\n              style = Style.padding(16.dp).margin(top = 8.dp),\n              text = "Text counter = " + i,\n              textSize = 20.sp,\n              maxLines = 1))\n    }\n  }\n}\n')),(0,o.mdx)("p",null,"Third, you can keep a state value which lets you know if keyboard is open or not and change your layout depending on that."))}p.isMDXComponent=!0}}]);