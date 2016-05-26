(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration"]}')},lmMv:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return o})),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var r,n=a("8o2o"),i=(a("q1tI"),a("7ljp")),c=a("xCMr"),o="Zipkin integration",s={},p=(r="RequiredDependencies",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),l={pageTitle:o,_frontmatter:s},b=c.a;function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(b,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"zipkin-integration",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h1"},{href:"#zipkin-integration","aria-label":"zipkin integration permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Zipkin integration"),Object(i.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"#see-also"}),"See also"))),Object(i.b)("p",null,"If you want to troubleshoot latency problems in microservice architecture, you will want to use distributed\ntracing system such as ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://zipkin.io/"}),"Zipkin"),". It gathers timing data and shows which component is\nfailing or taking more time than others in a distributed environment. Armeria supports distributed tracing via\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/openzipkin/brave/"}),"Brave"),", which is a Java tracing library compatible with\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://zipkin.io/"}),"Zipkin"),". Let's find out how to use it to trace requests."),Object(i.b)("p",null,"First, You need the ",Object(i.b)("inlineCode",{parentName:"p"},"armeria-brave")," dependency:"),Object(i.b)(p,{boms:[{groupId:"com.linecorp.armeria",artifactId:"armeria-bom"}],dependencies:[{groupId:"com.linecorp.armeria",artifactId:"armeria-brave"}],mdxType:"RequiredDependencies"}),Object(i.b)("p",null,"Then, you need to create the ",Object(i.b)("inlineCode",{parentName:"p"},"HttpTracing"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'    import com.linecorp.armeria.common.brave.RequestContextCurrentTraceContext;\n\n    import brave.Tracing;\n    import brave.http.HttpTracing;\n    import zipkin2.reporter.Reporter;\n\n    Reporter<Span> myReporter = ...\n    Tracing tracing = Tracing.newBuilder()\n                             .localServiceName("myService")\n                             .currentTraceContext(RequestContextCurrentTraceContext.ofDefault())\n                             .spanReporter(myReporter)\n                             .build();\n    HttpTracing httpTracing = HttpTracing.create(tracing);\n')),Object(i.b)("p",null,"Please note that we specified ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://RequestContextCurrentTraceContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/brave/RequestContextCurrentTraceContext.html"}),"type://RequestContextCurrentTraceContext"),". It stores the trace context into a\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://RequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html"}),"type://RequestContext")," and loads the trace context from the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://RequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html"}),"type://RequestContext")," automatically. Because of that,\nwe don't need to use a thread local variable which can lead to unpredictable behavior in asynchronous\nprogramming. If you want to send timing data to the span collecting server, you should specify ",Object(i.b)("inlineCode",{parentName:"p"},"spanReporter"),".\nFor more information about the ",Object(i.b)("inlineCode",{parentName:"p"},"spanReporter"),", please refer to\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/openzipkin/zipkin-reporter-java"}),"Zipkin reporter")," or\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/openzipkin-contrib/zipkin-armeria-example"}),"the fully working example"),"."),Object(i.b)("p",null,"Now, you can specify ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://BraveService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/brave/BraveService.html"}),"type://BraveService")," using ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/docs/server-decorator"}),"Decorating a service")," with the\n",Object(i.b)("inlineCode",{parentName:"p"},"HttpTracing")," you just built:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'    import com.linecorp.armeria.common.HttpResponse;\n    import com.linecorp.armeria.server.Server;\n    import com.linecorp.armeria.server.brave.BraveService;\n\n    Tracing tracing = ...\n    Server server = Server.builder()\n                          .http(8081)\n                          .service("/", (ctx, res) -> HttpResponse.of(200))\n                          .decorator(BraveService.newDecorator(httpTracing))\n                          .build();\n')),Object(i.b)("p",null,"If the requests come to Armeria server and go to another backend, you can trace them using\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://BraveClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/brave/BraveClient.html"}),"type://BraveClient"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'    import com.linecorp.armeria.client.WebClient;\n    import com.linecorp.armeria.client.brave.BraveClient;\n    import com.linecorp.armeria.server.brave.BraveService;\n\n    Tracing tracing = ...\n    WebClient client = WebClient\n            .builder("https://myBackend.com")\n            .decorator(BraveClient.newDecorator(httpTracing.clientOf("myBackend")))\n            .build();\n\n    Server server = Server.builder()\n                          .http(8081)\n                          .service("/", (ctx, res) -> client.get("/api"))\n                          .decorator(BraveService.newDecorator(httpTracing))\n                          .build();\n')),Object(i.b)("p",null,"Please note that our ",Object(i.b)("inlineCode",{parentName:"p"},"HttpTracing")," instance used the same ",Object(i.b)("inlineCode",{parentName:"p"},"Tracing")," instance when we\ncreate ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://BraveClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/brave/BraveClient.html"}),"type://BraveClient")," and ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"type://BraveService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/brave/BraveService.html"}),"type://BraveService"),". Otherwise, there might be problems if the instances are not\nconfigured exactly the same.\nIn the same manner, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"Tracing")," instance with any\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/openzipkin/brave/tree/master/instrumentation"}),"Brave instrumentation libraries"),".\nFor example, you can use it with ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://kafka.apache.org/"}),"Kafka")," producer:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'    import org.apache.kafka.clients.producer.KafkaProducer;\n    import org.apache.kafka.clients.producer.Producer;\n    import org.apache.kafka.clients.producer.ProducerRecord;\n\n    import brave.kafka.clients.KafkaTracing;\n\n    Tracing tracing = ...\n    KafkaTracing kafkaTracing = KafkaTracing.newBuilder(tracing)\n                                            .remoteServiceName("backend")\n                                            .writeB3SingleFormat(true)\n                                            .build();\n\n    Properties props = new Properties();\n    props.put("bootstrap.servers", "https://myKafka.com");\n    props.put("acks", "all");\n    ...\n\n    Producer<String, String> kafkaProducer = kafkaTracing.producer(new KafkaProducer<>(props));\n\n    Server server = Server.builder()\n                          .http(8081)\n                          .service("/", (ctx, req) -> {\n                              kafkaProducer.send(new ProducerRecord<>("test", "foo", "bar"));\n                              return HttpResponse.of(200);\n                          })\n                          .decorator(BraveService.newDecorator(tracing))\n                          .build();\n')),Object(i.b)("p",null,"This will trace all the requests sent from the client to the above example server to\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://kafka.apache.org/"}),"Kafka"),", and report timing data using the ",Object(i.b)("inlineCode",{parentName:"p"},"spanReporter")," you specified.\nThe following screenshot shows a trace of a request:"),Object(i.b)("p",null,Object(i.b)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}}),"\n      ",Object(i.b)("span",Object.assign({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.62576687116564%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABuklEQVQoz22RaXITMRCFfXyOwhVSHIAUEDA4VDCJ4/E6i0bLSLNobIeP1iRU+Qc/XvVrqft162lWlQXFLiNfP2HzPZeu4Rwc51Zi+xpPkp+C5Sx3sTHY4kDQJS7f0RR7mrpCVwW+aZg11uC2j4TnHxPs76/UD5/p1wvG7b3gJ+1qPiHxmC2Im3s6yePylnF1R8xX+OMab2pmSjYsK0W8/KEfzzjf0g2Rp4NmvlYstpZvz4p5VrPYWb5nmrtVOfHF3gmvWGxqHo+WLNfMYtdi5KnjOHIaI74baC9QucBDlrOuPFkVyFSY+JS/8Y3yMtDwcVmQlY54ujCzukYft2it0c5z+HTD7v07drc3ePGJQXz0ipPgpTXQi5ehnvDSGYElOiXHJVH8njkRNGKuNgbjGvHzF+rLB/RmySBbq6qkEsOdeB1CQ5ksKnO8dwTfTPx42Al39H13JWgtxmiUdVTio2tbWrFDyX1oA0MUK6RBS00T/JS7xqFq6XdWajv6oX8TTE82FiuihWxgrSZKQ9e/FiUkngYk8ev8+r7vk6BMTJ9iRMzKs9MGtQz5V5xiKo7yYakhbZW2+y+Ggb9kg6ZtDlps0wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object.assign({parentName:"span"},{className:"gatsby-resp-image-image",alt:"zipkin 1",title:"zipkin 1",src:"/static/4c0eed158c7ca619c37d255151184f4a/a6d36/zipkin_1.png",srcSet:["/static/4c0eed158c7ca619c37d255151184f4a/222b7/zipkin_1.png 163w","/static/4c0eed158c7ca619c37d255151184f4a/ff46a/zipkin_1.png 325w","/static/4c0eed158c7ca619c37d255151184f4a/a6d36/zipkin_1.png 650w","/static/4c0eed158c7ca619c37d255151184f4a/e548f/zipkin_1.png 975w","/static/4c0eed158c7ca619c37d255151184f4a/3c492/zipkin_1.png 1300w","/static/4c0eed158c7ca619c37d255151184f4a/cc40b/zipkin_1.png 2394w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("h2",{id:"see-also",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#see-also","aria-label":"see also permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"See also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/openzipkin-contrib/zipkin-armeria-example"}),"Armeria Zipkin example"))))}m.isMDXComponent=!0},xCMr:function(e,t,a){"use strict";var r=a("Wbzz"),n=a("q1tI"),i=a.n(n),c=a("/94A"),o=a("+ejy");t.a=function(e){var t=Object(r.useStaticQuery)("1217743243").allMdx.nodes;return i.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:t,index:c,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-advanced-zipkin-mdx-a610621c450e27ae2946.js.map