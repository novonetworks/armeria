(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.2.0":"v1.2.0","/release-notes/1.1.0":"v1.1.0","/release-notes/1.0.0":"v1.0.0","/release-notes/0.99.9":"v0.99.9","/release-notes/0.99.8":"v0.99.8","/release-notes/0.99.7":"v0.99.7","/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5","/release-notes/0.99.4":"v0.99.4","/release-notes/0.99.3":"v0.99.3","/release-notes/0.99.2":"v0.99.2","/release-notes/0.99.1":"v0.99.1","/release-notes/0.99.0":"v0.99.0","/release-notes/0.98.7":"v0.98.7","/release-notes/0.98.6":"v0.98.6","/release-notes/0.98.5":"v0.98.5"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},"79TK":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return p}));var n,i=t("8o2o"),r=(t("q1tI"),t("7ljp")),s=t("JkCF"),c={},l=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),o={_frontmatter:c},b=s.a;function p(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)(b,Object.assign({},o,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",{className:"date"},"26th September 2019"),Object(r.b)("h2",{id:"new-features",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#new-features","aria-label":"new features permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"New features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now create a ",Object(r.b)("inlineCode",{parentName:"p"},"Sampler")," from a specification string such as ",Object(r.b)("inlineCode",{parentName:"p"},"random=0.1")," and ",Object(r.b)("inlineCode",{parentName:"p"},"rate-limited=10"),". ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2108"}),"#2108")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"This is going to be useful when you want to make the sampling policy of ",Object(r.b)("inlineCode",{parentName:"li"},"Brave{Client,Server}")," or ",Object(r.b)("inlineCode",{parentName:"li"},"Logging{Client,Server}")," configurable from external sources such as a configuration file or a system property.")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'Sampler<Object> randomSampler = Sampler.of("random=0.1");\nSampler<Object> rateLimitedSampler = Sampler.of("rate-limited=10");\nSampler<Object> alwaysSampler = Sampler.of("always");\nSampler<Object> neverSampler = Sampler.of("never");\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now specify the ",Object(r.b)("inlineCode",{parentName:"p"},"Sampler")," specification string in the ",Object(r.b)("inlineCode",{parentName:"p"},"com.linecorp.armeria.verboseExceptions")," system property. ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2105"}),"#2105")," ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2111"}),"#2111")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"From this release, the default value of this property is ",Object(r.b)("inlineCode",{parentName:"li"},"rate-limited=10")," which means the stack trace of the exceptions will be recorded at the maximum rate of 10 exceptions/sec. Previously, the default value of this property was ",Object(r.b)("inlineCode",{parentName:"li"},"false"),", which eliminates all stack traces, which gave our users a hard time figuring out why."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now specify a common path prefix using ",Object(r.b)("inlineCode",{parentName:"p"},"@PathPrefix")," annotation in annotated services. ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2031"}),"#2031")," ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2099"}),"#2099")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'@PathPrefix("/users")\npublic class MyUserService {\n    @Get("/{id}") // Mapped to \'/users/{id}\'\n    @ProducesJson\n    public User getUser(@Param int id) { ... }\n    ...\n}\n\nServer server = new ServerBuilder()\n    .annotatedService(new MyUserService())\n    .build();\n')))),Object(r.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Bug fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fixed a memory leak in ",Object(r.b)("inlineCode",{parentName:"li"},"HealthCheckService"),". ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2110"}),"#2110")),Object(r.b)("li",{parentName:"ul"},"Prometheus and Dropwizard Metrics are now optional dependencies in ",Object(r.b)("inlineCode",{parentName:"li"},"armeria-spring-boot-*"),". ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2106"}),"#2106")," ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2107"}),"#2107")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"armeria-spring-boot-actuator-autoconfigure")," does not refuse to start anymore when ",Object(r.b)("inlineCode",{parentName:"li"},"HealthStatusHttpMapper")," is missing. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2104"}),"#2104"))),Object(r.b)("h2",{id:"breaking-changes",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#breaking-changes","aria-label":"breaking changes permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Breaking changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Flags.verboseExceptions()")," has been replaced with ",Object(r.b)("inlineCode",{parentName:"li"},"verboseExceptionSampler()")," and ",Object(r.b)("inlineCode",{parentName:"li"},"verboseExceptionSamplerSpec()"),". ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2111"}),"#2111")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Exceptions.isVerbose()"),", which was deprecated previously, has been removed. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2111"}),"#2111")),Object(r.b)("li",{parentName:"ul"},"You may need to add ",Object(r.b)("inlineCode",{parentName:"li"},"io.micrometer:micrometer-registry-prometheus")," or ",Object(r.b)("inlineCode",{parentName:"li"},"io.dropwizard.metrics:metrics-json")," after upgrading if you were depending on them transitively. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2107"}),"#2107"))),Object(r.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Dependencies"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Netty 4.1.41 -> 4.1.42"),Object(r.b)("li",{parentName:"ul"},"Netty TCNative BoringSSL 2.0.25 -> 2.0.26"),Object(r.b)("li",{parentName:"ul"},"Project Reactor 3.2.12 -> 3.3.0"),Object(r.b)("li",{parentName:"ul"},"Prometheus 0.6.0 -> 0.7.0"),Object(r.b)("li",{parentName:"ul"},"Retrofit 2.6.1 -> 2.6.2")),Object(r.b)("h2",{id:"thank-you",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#thank-you","aria-label":"thank you permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Thank you"),Object(r.b)(l,{usernames:["adriancole","anuraaga","heowc","ikhoon","jyblue","minwoox","sivaalli","taejs","trustin"],mdxType:"ThankYou"}))}p.isMDXComponent=!0},JkCF:function(e,a,t){"use strict";t("tU7J");var n=t("wFql"),i=t("q1tI"),r=t.n(i),s=t("2+3N"),c=t("1lec"),l=t("+ejy"),o=t("+9zj"),b=n.a.Title;a.a=function(e){var a={},t={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(s).forEach((function(e){var t=e[0],n=e[1];a[n]=t})),Object.entries(c).forEach((function(e){var a=e[0],n=e[1];t[n]=a}));var i=Object(o.a)(e.location),p=e.version||i.substring(i.lastIndexOf("/")+1);return p.match(/^[0-9]/)||(p=void 0),r.a.createElement(l.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:p?p+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),p?r.a.createElement(b,{id:"release-notes",level:1},r.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},r.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),p," release notes"):"",e.children)}}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-93-0-mdx-110c2b72de7daa6133f4.js.map