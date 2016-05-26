(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration"]}')},LZCH:function(e,r,t){"use strict";t.r(r),t.d(r,"pageTitle",(function(){return n})),t.d(r,"_frontmatter",(function(){return s})),t.d(r,"default",(function(){return b}));var a=t("8o2o"),i=(t("q1tI"),t("7ljp")),o=t("xCMr"),n="Service registration for discovery",s={},c=function(e){return function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",r)}},p=c("RequiredDependencies"),d=c("Tip"),l={pageTitle:n,_frontmatter:s},m=o.a;function b(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)(m,Object.assign({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"service-registration-for-discovery",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h1"},{href:"#service-registration-for-discovery","aria-label":"service registration for discovery permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Service registration for discovery"),Object(i.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#zookeeper-based-service-registration-with-zookeeperupdatinglistener"}),"ZooKeeper-based service registration with ZooKeeperUpdatingListener")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#eureka-based-service-registration-with-eurekaupdatinglistener"}),"Eureka-based service registration with EurekaUpdatingListener"))),Object(i.b)("p",null,"You can use ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://ServerListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerListener.html"}),"type://ServerListener")," to register the information of Armeria servers when they start so that\na client uses the information to distribute its requests to the servers autonomously, unlike\ntraditional server-side load balancing where the requests go through a dedicated load balancer such as\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Multilayer_switch#Layer_4%E2%80%937_switch,_web_switch,_or_content_switch"}),"L4 and L7 switches"),"."),Object(i.b)("p",null,"Armeria provides 2 ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://ServerListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerListener.html"}),"type://ServerListener")," implementations for service registration:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"type://ZooKeeperUpdatingListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperUpdatingListener.html"}),"type://ZooKeeperUpdatingListener")," which registers to ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://zookeeper.apache.org/"}),"ZooKeeper"),"\nas an ephemeral node."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"type://EurekaUpdatingListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/eureka/EurekaUpdatingListener.html"}),"type://EurekaUpdatingListener")," which registers to ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/Netflix/eureka/"}),"Eureka"),".")),Object(i.b)("h2",{id:"zookeeper-based-service-registration-with-zookeeperupdatinglistener",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#zookeeper-based-service-registration-with-zookeeperupdatinglistener","aria-label":"zookeeper based service registration with zookeeperupdatinglistener permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"ZooKeeper-based service registration with ",Object(i.b)("inlineCode",{parentName:"h2"},"ZooKeeperUpdatingListener")),Object(i.b)("p",null,"First, You need the ",Object(i.b)("inlineCode",{parentName:"p"},"armeria-zookeeper3")," dependency:"),Object(i.b)(p,{boms:[{groupId:"com.linecorp.armeria",artifactId:"armeria-bom"}],dependencies:[{groupId:"com.linecorp.armeria",artifactId:"armeria-zookeeper3"}],mdxType:"RequiredDependencies"}),Object(i.b)("p",null,"Then, use ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://ZooKeeperUpdatingListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperUpdatingListener.html"}),"type://ZooKeeperUpdatingListener")," and ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://ZooKeeperRegistrationSpec:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperRegistrationSpec.html"}),"type://ZooKeeperRegistrationSpec")," to register your server\nto a ZooKeeper cluster:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.server.Server;\nimport com.linecorp.armeria.server.zookeeper.ZooKeeperRegistrationSpec;\nimport com.linecorp.armeria.server.zookeeper.ZooKeeperUpdatingListener;\n\nString zkConnectionStr = "myZooKeeperHost:2181";\nString znodePath = "/myProductionEndpoints";\nString serviceName = "catalog";\nZooKeeperRegistrationSpec registrationSpec =\n        ZooKeeperRegistrationSpec.curator(serviceName);\nZooKeeperUpdatingListener listener =\n        ZooKeeperUpdatingListener.builder(zkConnectionStr, znodePath, registrationSpec)\n                                 .sessionTimeoutMillis(10000)\n                                 .build();\nServer server = ...\nserver.addListener(listener);\nserver.start();\n')),Object(i.b)("p",null,"The ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://ZooKeeperRegistrationSpec:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperRegistrationSpec.html"}),"type://ZooKeeperRegistrationSpec")," is used to convert the information of your server to a binary\nrepresentation. The ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://ZooKeeperUpdatingListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperUpdatingListener.html"}),"type://ZooKeeperUpdatingListener")," registers the binary representation to the specified\nznode as a member of the cluster when your server starts up. Each server will represent itself as\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://zookeeper.apache.org/doc/r3.4.10/zookeeperOver.html#Nodes+and+ephemeral+nodes"}),"an EPHEMERAL node"),",\nwhich means when a server stops or a network partition between your server and ZooKeeper cluster occurs,\nthe node of the server that became unreachable will be deleted automatically by ZooKeeper."),Object(i.b)("p",null,Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://ZooKeeperRegistrationSpec#curator(String):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperRegistrationSpec.html#curator(java.lang.String)"}),"type://ZooKeeperRegistrationSpec#curator(String)")," uses the format of\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://curator.apache.org/curator-x-discovery/index.html"}),"Curator Service Discovery")," which is compatible\nwith ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://cloud.spring.io/spring-cloud-zookeeper/reference/html/"}),"Spring Cloud Zookeeper"),".\nYou can use ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://ZooKeeperRegistrationSpec#serverSets():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperRegistrationSpec.html#serverSets()"}),"type://ZooKeeperRegistrationSpec#serverSets()")," that applies the format of\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.github.io/finagle/docs/com/twitter/serverset.html"}),"Finagle ServerSets"),".\nIf you want to use your own format, you can implement the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://ZooKeeperRegistrationSpec:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperRegistrationSpec.html"}),"type://ZooKeeperRegistrationSpec"),"."),Object(i.b)("p",null,"In the example above, we used the ZooKeeper connection string(",Object(i.b)("inlineCode",{parentName:"p"},'"myZooKeeperHost:2181"'),") to connect to\nthe ZooKeeper cluster. Instead, you can use an existing\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://curator.apache.org/apidocs/org/apache/curator/framework/CuratorFramework.html"}),"CuratorFramework"),"\ninstance."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"import org.apache.curator.framework.CuratorFramework;\n\nCuratorFramework client = ...\nString znodePath = ...\nZooKeeperRegistrationSpec registrationSpec = ...\nZooKeeperUpdatingListener listener =\n        ZooKeeperUpdatingListener.builder(client, znodePath, registrationSpec)\n                                 .build();\nServer server = ...\nserver.addListener(listener);\nserver.start();\n")),Object(i.b)("p",null,"For more information, please refer to the API documentation of the\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/package-summary.html"}),"com.linecorp.armeria.server.zookeeper")," package."),Object(i.b)(d,{mdxType:"Tip"},Object(i.b)("p",null,"See ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/docs/client-service-discovery#zookeeper-based-service-discovery-with-zookeeperendpointgroup"}),"ZooKeeper service discovery"),".")),Object(i.b)("h2",{id:"eureka-based-service-registration-with-eurekaupdatinglistener",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#eureka-based-service-registration-with-eurekaupdatinglistener","aria-label":"eureka based service registration with eurekaupdatinglistener permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Eureka-based service registration with ",Object(i.b)("inlineCode",{parentName:"h2"},"EurekaUpdatingListener")),Object(i.b)("p",null,"First, You need the ",Object(i.b)("inlineCode",{parentName:"p"},"armeria-eureka")," dependency:"),Object(i.b)(p,{boms:[{groupId:"com.linecorp.armeria",artifactId:"armeria-bom"}],dependencies:[{groupId:"com.linecorp.armeria",artifactId:"armeria-eureka"}],mdxType:"RequiredDependencies"}),Object(i.b)("p",null,"Then, use ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://EurekaUpdatingListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/eureka/EurekaUpdatingListener.html"}),"type://EurekaUpdatingListener")," to register your server to the Eureka:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.server.Server;\nimport com.linecorp.armeria.server.ServerBuilder;\nimport com.linecorp.armeria.server.eureka.EurekaUpdatingListener;\n\nEurekaUpdatingListener listener =\n        EurekaUpdatingListener.of("https://eureka.com:8001/eureka/v2");\n\nServerBuilder sb = Server.builder();\nsb.serverListener(listener);\nsb.builder().start();\n')),Object(i.b)("p",null,"If you want to specify the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/Netflix/eureka/wiki/Eureka-REST-operations"}),"properties"),"\nof the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://Server:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Server.html"}),"type://Server"),", use ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://EurekaUpdatingListenerBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/eureka/EurekaUpdatingListenerBuilder.html"}),"type://EurekaUpdatingListenerBuilder"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.server.eureka.EurekaUpdatingListenerBuilder;\n\nEurekaUpdatingListenerBuilder builder =\n        EurekaUpdatingListener.builder("https://eureka.com:8001/eureka/v2");\n                              .instanceId("i-00000000")\n                              .setHostname("armeria.service.1")\n                              // If ipAddr is not specified, it\'s automatically filled\n                              // using SystemInfo.defaultNonLoopbackIpV4Address().\n                              .ipAddr("192.168.10.10")\n                              .vipAddress("armeria.service.com:8080");\n                              .build();\nEurekaUpdatingListener listener = builder.build();\nServerBuilder sb = Server.builder();\nsb.serverListener(listener);\nsb.builder().start();\n')),Object(i.b)("p",null,"For more information, please refer to the API documentation of the\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/eureka/package-summary.html"}),"com.linecorp.armeria.client.eureka")," package."),Object(i.b)(d,{mdxType:"Tip"},Object(i.b)("p",null,"See ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/docs/client-service-discovery#eureka-based-service-discovery-with-eurekaendpointgroup"}),"Eureka service discovery"),".")))}b.isMDXComponent=!0},xCMr:function(e,r,t){"use strict";var a=t("Wbzz"),i=t("q1tI"),o=t.n(i),n=t("/94A"),s=t("+ejy");r.a=function(e){var r=Object(a.useStaticQuery)("1217743243").allMdx.nodes;return o.a.createElement(s.a,Object.assign({},e,{candidateMdxNodes:r,index:n,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-server-service-registration-mdx-453aa3f7410ff45cfa53.js.map