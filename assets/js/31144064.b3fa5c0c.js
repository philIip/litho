"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8894],{7772:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(83117),a=n(67294),r=n(23746),p=n(7694),l=n(13618),m="0.42.0",s="0.43.0-SNAPSHOT",i="0.10.4",c="0.142.0",d=n(86668);const u=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,m).replace(/{{site.soloaderVersion}}/g,i).replace(/{{site.lithoSnapshotVersion}}/g,s).replace(/{{site.flipperVersion}}/g,c).trim(),u=(0,d.L)().isDarkTheme?l.Z:p.Z;return a.createElement(r.ZP,(0,o.Z)({},r.lG,{code:n,language:t,theme:u}),(function(e){var t=e.className,n=e.style,o=e.tokens,r=e.getLineProps,p=e.getTokenProps;return a.createElement("pre",{className:t,style:n},o.map((function(e,t){return a.createElement("div",r({line:e,key:t}),e.map((function(e,t){return a.createElement("span",p({token:e,key:t}))})))})))}))}},54380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),p=n(44996),l=n(65488),m=n(85162),s=(n(7772),["components"]),i={id:"treeprops",title:"TreeProps"},c=void 0,d={unversionedId:"codegen/passing-data-to-components/treeprops",id:"codegen/passing-data-to-components/treeprops",title:"TreeProps",description:"This page covers the old Java Spec API. If the Spec API is not being used, refer to the TreeProps section of the 'Types of Props' page.",source:"@site/../docs/codegen/passing-data-to-components/treeprops.mdx",sourceDirName:"codegen/passing-data-to-components",slug:"/codegen/passing-data-to-components/treeprops",permalink:"/docs/codegen/passing-data-to-components/treeprops",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/codegen/passing-data-to-components/treeprops.mdx",tags:[],version:"current",frontMatter:{id:"treeprops",title:"TreeProps"},sidebar:"mainSidebar",previous:{title:"Props in Specs",permalink:"/docs/codegen/passing-data-to-components/spec-props"},next:{title:"State in Specs",permalink:"/docs/codegen/state-for-specs"}},u={},h=[{value:"Declaring a TreeProp",id:"declaring-a-treeprop",level:2},{value:"Using a TreeProp",id:"using-a-treeprop",level:2},{value:"TreeProps with Lists",id:"treeprops-with-lists",level:2}],x={toc:h};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.mdx)("wrapper",(0,o.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("admonition",{type:"caution"},(0,r.mdx)("p",{parentName:"admonition"},"This page covers the old Java Spec API. If the Spec API is not being used, refer to the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/props#tree-props"},"TreeProps")," section of the 'Types of Props' page.")),(0,r.mdx)("p",null,"A TreeProp is a special type of ",(0,r.mdx)("a",{parentName:"p",href:"/docs/codegen/passing-data-to-components/spec-props"},"prop")," that is transparently passed from a parent component to its children. It provides a convenient way to share contextual data or utilities in a tree without having to explicitly pass props to every component in a hierarchy."),(0,r.mdx)("p",null,"A good example of a TreeProp is a 'prefetcher', which fetches network images ahead of render time. Since images are commonplace, the prefetcher is widely used. The prefetcher implementation might be defined for any component that needs to use it, without having to pass it as a prop in the entire component hierarchy."),(0,r.mdx)("h2",{id:"declaring-a-treeprop"},"Declaring a TreeProp"),(0,r.mdx)(l.default,{groupId:"tree_prop_tab_group",defaultValue:"kotlin",values:[{label:"Kotlin API",value:"kotlin"},{label:"Spec API",value:"java"}],mdxType:"Tabs"},(0,r.mdx)(m.default,{value:"kotlin",mdxType:"TabItem"},(0,r.mdx)("p",null,"In order to declare a TreeProp, use ",(0,r.mdx)("inlineCode",{parentName:"p"},"TreePropProvider"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ParentKComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ParentKComponent.kt",start:"start_example",end:"end_example"},"class ParentKComponent(private val prefetcher: Prefetcher, private val imageUri: Uri) :\n    KComponent() {\n\n  override fun ComponentScope.render(): Component? {\n    return TreePropProvider(Prefetcher::class.java to prefetcher) { ChildKComponent(imageUri) }\n  }\n}\n"))),(0,r.mdx)(m.default,{value:"java",mdxType:"TabItem"},(0,r.mdx)("p",null,"Each TreeProp is declared and created from a method annotated with ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnCreateTreeProp"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ParentComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ParentComponentSpec.java",start:"start_example",end:"end_example"},"@LayoutSpec\npublic class ParentComponentSpec {\n\n  @OnCreateTreeProp\n  static Prefetcher onCreatePrefetcher(ComponentContext c, @Prop Prefetcher prefetcher) {\n    return prefetcher;\n  }\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @Prop Uri imageUri) {\n    return ChildComponent.create(c).imageUri(imageUri).build();\n  }\n}\n")))),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"Only one TreeProp can be declared for any one given type. If a child of ",(0,r.mdx)("inlineCode",{parentName:"p"},"ParentComponent")," also defines a TreeProp of type ",(0,r.mdx)("inlineCode",{parentName:"p"},"Prefetcher"),", it will override the value of that TreeProp for all its children (but not for itself).")),(0,r.mdx)("h2",{id:"using-a-treeprop"},"Using a TreeProp"),(0,r.mdx)(l.default,{groupId:"tree_prop_tab_group",defaultValue:"kotlin",values:[{label:"Kotlin API",value:"kotlin"},{label:"Spec API",value:"java"}],mdxType:"Tabs"},(0,r.mdx)(m.default,{value:"kotlin",mdxType:"TabItem"},(0,r.mdx)("p",null,"The child component can access the TreeProp value through a ",(0,r.mdx)("inlineCode",{parentName:"p"},"ComponentScope.getTreeProp<Type>()")," method call, where ",(0,r.mdx)("inlineCode",{parentName:"p"},"Type")," is the same type that was provided in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"TreePropProvider")," call in one of its parents."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ChildKComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ChildKComponent.kt",start:"start_example",end:"end_example"},'class ChildKComponent(private val imageUri: Uri) : KComponent() {\n\n  override fun ComponentScope.render(): Component {\n    val prefetcher = getTreeProp<Prefetcher>()\n\n    prefetcher?.prefetch(imageUri)\n    // ...\n    return Text("Prefetch image when this component is created")\n  }\n}\n'))),(0,r.mdx)(m.default,{value:"java",mdxType:"TabItem"},(0,r.mdx)("p",null,"The child component can access the TreeProp value through a parameter annotated with ",(0,r.mdx)("inlineCode",{parentName:"p"},"@TreeProp")," that has the same type as the return type of one of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@OnCreateTreeProp")," methods defined in the ancestors of child component."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ChildComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ChildComponentSpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\nclass ChildComponentSpec {\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c, @Prop Uri imageUri, @Nullable @TreeProp Prefetcher prefetcher) {\n    if (prefetcher != null) {\n      prefetcher.prefetch(imageUri);\n    }\n    // ...\n    return Column.create(c)\n        .child(Text.create(c).text("Prefetch image when this component is created"))\n        .build();\n  }\n}\n')))),(0,r.mdx)("admonition",{title:"IMPORTANT",type:"caution"},(0,r.mdx)("p",{parentName:"admonition"},"Once created, the TreeProp value is passed down to all children but isn't accessible from the component that created the TreeProp.")),(0,r.mdx)("p",null,"To access a TreeProp from the component that created it, transform it into ",(0,r.mdx)("a",{parentName:"p",href:"/docs/codegen/state-for-specs"},"State")," as follows:"),(0,r.mdx)(l.default,{groupId:"tree_prop_tab_group",defaultValue:"kotlin",values:[{label:"Kotlin API",value:"kotlin"},{label:"Spec API",value:"java"}],mdxType:"Tabs"},(0,r.mdx)(m.default,{value:"kotlin",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ParentComponentTreePropAsStateKComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ParentComponentTreePropAsStateKComponent.kt",start:"start_example",end:"end_example"},'class ParentComponentTreePropAsStateKComponent() : KComponent() {\n\n  override fun ComponentScope.render(): Component? {\n    val importantHelper = useState { ImportantHelper() }\n\n    return TreePropProvider(ImportantHelper::class.java to importantHelper) {\n      Column() { child(Text(text = "ImportantHelper can be used as State in render function")) }\n    }\n  }\n}\n'))),(0,r.mdx)(m.default,{value:"java",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ParentComponentTreePropAsStateSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/ParentComponentTreePropAsStateSpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\npublic class ParentComponentTreePropAsStateSpec {\n\n  @OnCreateInitialState\n  static void createInitialState(ComponentContext c, StateValue<ImportantHelper> helper) {\n    helper.set(new ImportantHelper());\n  }\n\n  @OnCreateTreeProp\n  static ImportantHelper onCreateHelper(ComponentContext c, @State ImportantHelper helper) {\n    return helper;\n  }\n\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @State ImportantHelper helper) {\n    return Column.create(c)\n        .child(\n            Text.create(c).text("ImportantHelper can be used as State in onCreateLayout").build())\n        .build();\n  }\n}\n')))),(0,r.mdx)("h2",{id:"treeprops-with-lists"},"TreeProps with Lists"),(0,r.mdx)("p",null,"TreeProps can be used in components, sections and lazy collections. They can even be modified between them."),(0,r.mdx)("p",null,"The following code is an example of a logging data structure that is passed down from the root component to capture information about the hierarchy."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/LogContext.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/LogContext.java",start:"start_example",end:"end_example"},'public class LogContext {\n  public final String tag;\n\n  public LogContext(String tag) {\n    this.tag = tag;\n  }\n\n  public static LogContext append(@Nullable LogContext parentContext, String tag) {\n    if (parentContext == null) {\n      return new LogContext(tag);\n    }\n    return new LogContext(parentContext.tag + ":" + tag);\n  }\n\n  public String toString() {\n    return tag;\n  }\n}\n')),(0,r.mdx)("admonition",{type:"tip"},(0,r.mdx)("p",{parentName:"admonition"},"Immutable TreeProps are easier to understand so try to follow that design pattern whenever possible.")),(0,r.mdx)("p",null,"The following diagram shows the component hierarchy."),(0,r.mdx)("img",{src:(0,p.default)("/images/treeprop-sections.png")}),(0,r.mdx)(l.default,{groupId:"tree_prop_tab_group",defaultValue:"kotlin",values:[{label:"Kotlin API",value:"kotlin"},{label:"Spec API",value:"java"}],mdxType:"Tabs"},(0,r.mdx)(m.default,{value:"kotlin",mdxType:"TabItem"},(0,r.mdx)("p",null,"Start by setting up the ",(0,r.mdx)("inlineCode",{parentName:"p"},"RootComponent")," with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"LazyList")," as one of its children:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/RootKComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/RootKComponent.kt",start:"start_example",end:"end_example"},'class RootKComponent : KComponent() {\n\n  override fun ComponentScope.render(): Component? {\n    return TreePropProvider(LogContext::class.java to LogContext("root")) {\n      Column() {\n        child(LeafKComponent())\n        child(LazyList(style = Style.height(500.dp)) { child(TopGroupKComponent()) })\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"The TopGroupKComponent takes in the root TreeProp and adds its ",(0,r.mdx)("inlineCode",{parentName:"p"},'"top"')," tag to it:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/TopGroupKComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/TopGroupKComponent.kt",start:"start_example",end:"end_example"},'class TopGroupKComponent : KComponent() {\n\n  override fun ComponentScope.render(): Component? {\n    val parentLogContext = getTreeProp<LogContext>()\n    val topGroupLogContext = LogContext.append(parentLogContext, "top")\n\n    return TreePropProvider(LogContext::class.java to topGroupLogContext) {\n      Column {\n        child(LeafKComponent())\n        child(BottomGroupKComponent())\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"The bottom part here has been omitted for brevity, but it can be found in the repository under ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/tree/master/sample/src/main/java/com/facebook/samples/litho/documentation/treeprops"},"samples"),"."),(0,r.mdx)("p",null,"The leaf node renders the TreeProp as text in the example case but would normally perform some sort of logging based on the context:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/LeafKComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/LeafKComponent.kt",start:"start_example",end:"end_example"},'class LeafKComponent() : KComponent() {\n\n  override fun ComponentScope.render(): Component {\n    val parentLogContext = getTreeProp<LogContext>()\n    return Text(text = LogContext.append(parentLogContext, "leaf").toString())\n  }\n}\n'))),(0,r.mdx)(m.default,{value:"java",mdxType:"TabItem"},(0,r.mdx)("p",null,"Start by setting up the ",(0,r.mdx)("inlineCode",{parentName:"p"},"RootComponent")," with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"RecyclerCollectionComponent")," as one of its children:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/RootComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/RootComponentSpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\npublic class RootComponentSpec {\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c) {\n    return Column.create(c)\n        .child(LeafComponent.create(c))\n        .child(\n            RecyclerCollectionComponent.create(c)\n                .section(TopGroupSection.create(new SectionContext(c)).build())\n                .heightDip(500)\n                .build())\n        .build();\n  }\n\n  @OnCreateTreeProp\n  static LogContext onCreateTestTreeProp(ComponentContext c) {\n    return new LogContext("root");\n  }\n}\n')),(0,r.mdx)("p",null,"The TopGroupSection takes in the root TreeProp and adds its ",(0,r.mdx)("inlineCode",{parentName:"p"},'"top"')," tag to it:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/TopGroupSectionSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/TopGroupSectionSpec.java",start:"start_example",end:"end_example"},'@GroupSectionSpec\npublic class TopGroupSectionSpec {\n\n  @OnCreateChildren\n  protected static Children onCreateChildren(SectionContext c) {\n    return Children.create()\n        .child(SingleComponentSection.create(c).component(LeafComponent.create(c)))\n        .child(BottomGroupSection.create(c).build())\n        .build();\n  }\n\n  @OnCreateTreeProp\n  static LogContext onCreateTestTreeProp(SectionContext c, @TreeProp LogContext parentLogContext) {\n    return LogContext.append(parentLogContext, "top");\n  }\n}\n')),(0,r.mdx)("p",null,"The bottom part has been omitted here for brevity, but it can be found in the repository under ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/tree/master/sample/src/main/java/com/facebook/samples/litho/documentation/treeprops"},"samples"),"."),(0,r.mdx)("p",null,"The leaf node simply renders the TreeProp as text in our example case here, but would normally perform some sort of logging based on the context:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java",metastring:"file=sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/LeafComponentSpec.java start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/documentation/treeprops/LeafComponentSpec.java",start:"start_example",end:"end_example"},'@LayoutSpec\npublic class LeafComponentSpec {\n  @OnCreateLayout\n  static Component onCreateLayout(ComponentContext c, @TreeProp LogContext parentLogContext) {\n    return Text.create(c).text(LogContext.append(parentLogContext, "leaf").toString()).build();\n  }\n}\n')))),(0,r.mdx)("p",null,"The on-screen result is three rows of text that read:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},'"root:leaf"')),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},'"root:top:leaf"')),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},'"root:top:bottom:leaf"'))),(0,r.mdx)("p",null,"This illustrates how TreeProps propagate through both component and section trees and can be used to selectively share information with their children."))}f.isMDXComponent=!0}}]);