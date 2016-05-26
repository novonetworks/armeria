(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration"]}')},QUvE:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return s})),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a("8o2o"),r=(a("q1tI"),a("7ljp")),c=a("xCMr"),b=a("aRgT"),s="Using Armeria with Dropwizard",i={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},o=p("Tip"),d=p("RequiredDependencies"),m=p("Warning"),l={pageTitle:s,_frontmatter:i},j=c.a;function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(j,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"using-armeria-with-dropwizard",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h1"},{href:"#using-armeria-with-dropwizard","aria-label":"using armeria with dropwizard permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Using Armeria with Dropwizard"),Object(r.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object.assign({parentName:"p"},{href:"#server-properties"}),"Server Properties"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object.assign({parentName:"p"},{href:"#server-access-logs"}),"Server Access Logs")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"#common"}),"common")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"#combined"}),"combined")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"#custom"}),"custom"))))),Object(r.b)(o,{mdxType:"Tip"},Object(r.b)("p",null,"Visit ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/tree/master/examples/dropwizard"}),"armeria-examples")," to find a fully\nworking example.")),Object(r.b)("p",null,"Dropwizard provides many features which are necessary for building a web application, such as metrics,\nmodel validation, externalized and extensible configuration, etc. In addition, if your Dropwizard\napplication integrates with Armeria, you can leverage the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Rich support for Apache ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://thrift.apache.org/"}),"Thrift")," and ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://grpc.io/"}),"gRPC"),",\nincluding ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"/docs/server-docservice"}),"the fancy web console")," that enables you to send Thrift and gRPC requests\nfrom a web browser"),Object(r.b)("li",{parentName:"ul"},"Ability to run HTTP REST service and RPC service in the same port"),Object(r.b)("li",{parentName:"ul"},"Full HTTP/2 support for both server-side and client-side, including ",Object(r.b)("inlineCode",{parentName:"li"},"h2c")," (plaintext HTTP/2)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt"}),"PROXY protocol")," support which provides\ninteroperability with load balancers such as ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://www.haproxy.org/"}),"HAProxy")," and\n",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://aws.amazon.com/elasticloadbalancing/"}),"AWS ELB"))),Object(r.b)("p",null,"Armeria can be plugged in as the underlying HTTP server for a Dropwizard application by adding\nthe following dependency:"),Object(r.b)(d,{boms:[{groupId:"com.linecorp.armeria",artifactId:"armeria-bom"},{groupId:"io.dropwizard",artifactId:"dropwizard-bom",version:""+b["io.dropwizard:dropwizard-core"]}],dependencies:[{groupId:"com.linecorp.armeria",artifactId:"armeria-dropwizard2"}],mdxType:"RequiredDependencies"}),Object(r.b)("p",null,"The above dependencies import a new ",Object(r.b)("inlineCode",{parentName:"p"},"ServerFactory")," for Dropwizard to run on by referring to the ",Object(r.b)("inlineCode",{parentName:"p"},"armeria")," type\nserver in the Dropwizard configuration file. A user can customize the server configuration with ",Object(r.b)("inlineCode",{parentName:"p"},"the same properties\nprovided by [Dropwizard](https://www.dropwizard.io/en/stable/manual/configuration.html#simple>)'s "),"SimpleServerFactory`.\nThe following is a simple example for configuring the server:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-yaml"}),"server:\n  type: armeria\n  applicationContextPath: /\n")),Object(r.b)("p",null,"For a user who wants to utilize Armeria, an ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://ArmeriaBundle:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/dropwizard/ArmeriaBundle.html"}),"type://ArmeriaBundle")," implementation must be added to the\n",Object(r.b)("inlineCode",{parentName:"p"},"Application"),"."),Object(r.b)("p",null,"The user can further customize the server outside of the ",Object(r.b)("inlineCode",{parentName:"p"},"Configuration")," as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'public class DropwizardArmeriaApplication extends Application<DropwizardArmeriaConfiguration> {\n\n    public static void main(final String[] args) throws Exception {\n        new DropwizardArmeriaApplication().run(args);\n    }\n\n    @Override\n    public void initialize(final Bootstrap<DropwizardArmeriaConfiguration> bootstrap) {\n        final ArmeriaBundle bundle = new ArmeriaBundle() {\n            @Override\n            public void configure(final ServerBuilder builder) {\n                // Customize the server using the given ServerBuilder. For example:\n                builder.service("/armeria", (ctx, res) -> HttpResponse.of("Hello, Armeria!"));\n\n                builder.annotatedService(new HelloService());\n\n                // You can also bind asynchronous RPC services such as Thrift and gRPC:\n                // builder.service(THttpService.of(...));\n                // builder.service(GrpcService.builder()...build());\n            }\n        };\n        bootstrap.addBundle(bundle);\n    }\n}\n')),Object(r.b)(o,{mdxType:"Tip"},Object(r.b)("p",null,"If you are not familiar with Dropwizard, please refer to\n",Object(r.b)("a",Object.assign({parentName:"p"},{href:"http://dropwizard.io/en/stable/getting-started.html"}),"Dropwizard Getting Started Guide")," and\n",Object(r.b)("a",Object.assign({parentName:"p"},{href:"http://dropwizard.io/en/stable/manual/core.html"}),"Dropwizard User Manual"),".")),Object(r.b)("h2",{id:"server-properties",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#server-properties","aria-label":"server properties permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Server Properties"),Object(r.b)(m,{mdxType:"Warning"},Object(r.b)("p",null,"Not all Dropwizard configurations can be passed into the Armeria server. Currently supported parameters are:")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-yaml"}),'server:\n  type: armeria\n  gracefulShutdownQuietPeriodMillis: 5000\n  gracefulShutdownTimeoutMillis: 40000\n  maxRequestLength: 10485760\n  maxNumConnections: 2147483647\n  dateHeaderEnabled: true\n  serverHeaderEnabled: false\n  verboseResponses: false\n  defaultHostname: "host.name.com"\n  ports:\n    - port: 8080\n      protocol: HTTP\n    - ip: 127.0.0.1\n      port: 8081\n      protocol: HTTPS\n    - port: 8443\n      protocols:\n        - HTTPS\n        - PROXY\n          ports:\n  compression:\n    enabled: true\n    mimeTypes:\n      - text/*\n      - application/json\n    excludedUserAgents:\n      - some-user-agent\n      - another-user-agent\n    minResponseSize: 1KB\n  ssl:\n    keyAlias: "host.name.com"\n    keyStore: "classpath:keystore.jks"\n    keyStorePassword: "changeme"\n    trustStore: "classpath:truststore.jks"\n    trustStorePassword: "changeme"\n  http1:\n    maxChunkSize: 4096\n    maxInitialLineLength: 4096\n  http2:\n    initialConnectionWindowSize: 1MB\n    initialStreamWindowSize: 1MB\n    maxFrameSize: 16384\n    maxHeaderListSize: 8192\n  proxy:\n    maxTlvSize: 65319\n  accessLog:\n    type: common\n')),Object(r.b)("p",null,"Where defined, the Armeria ServerFactory will prefer Armeria's default properties over Dropwizard's.\nThe following additional properties are able to be added to configure the ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://ServerBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerBuilder.html"}),"type://ServerBuilder")," before being\npassed to the ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://ArmeriaBundle:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/dropwizard/ArmeriaBundle.html"}),"type://ArmeriaBundle"),"."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("div",{style:{width:"11rem"}},"Path")),Object(r.b)("th",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("div",{style:{width:"19rem"}},"Property")),Object(r.b)("th",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"th"},"Description")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"server"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"jerseyEnabled"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"Whether to enable JAX-RS resources defined by\nDropwizard (default: ",Object(r.b)("inlineCode",{parentName:"p"},"true"),")"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"server"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"maxRequestLength"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The default server-side maximum length of\na request"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"server"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"maxNumConnections"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The maximum allowed number of open connections"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"server"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"dateHeaderEnabled"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"Whether to include default ",Object(r.b)("inlineCode",{parentName:"p"},'"Data"')," header\nin the response header (default: ",Object(r.b)("inlineCode",{parentName:"p"},"true"),")"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"server"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"serverHeaderEnabled"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"Whether to include default ",Object(r.b)("inlineCode",{parentName:"p"},'"Server"')," header\nin the response header (default: ",Object(r.b)("inlineCode",{parentName:"p"},"false"),")"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"server"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"verboseResponses"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"Whether the verbose response mode is enabled\n(default: ",Object(r.b)("inlineCode",{parentName:"p"},"false"),")"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"server"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"defaultHostname"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The default hostname of the default\n",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://VirtualHostBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/VirtualHostBuilder.html"}),"type://VirtualHostBuilder")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"server"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"gracefulShutdownQuietPeriodMillis"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The number of milliseconds to wait after the\nlast processed request to be considered safe\nfor shutdown"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"server"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"gracefulShutdownTimeoutMillis"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The number of milliseconds to wait after going\nunhealthy before forcing the server to shutdown\nregardless of if it is still processing requests"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:3}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"server.ports"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"port"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The port to run the server on (default: 8080)"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"ip"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The IP address to bind to"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"iface"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The network interface to bind to"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:4}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"server.compression"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"enabled"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"Whether to enable the HTTP content encoding"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"mimeTypes"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The MIME Types of an HTTP response which are\napplicable for the HTTP content encoding"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"excludedUserAgents"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The ",Object(r.b)("inlineCode",{parentName:"p"},'"User-Agent"')," header values which are not\napplicable for the HTTP content encoding"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"minResponseSize"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The minimum bytes for encoding the content of\nan HTTP response"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:6}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"server.ssl"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"enabled"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"Whether to enable SSL support"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"keyAlias"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The alias that identifies the key in\nthe key store"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"keyStore"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The path to the key store that holds the SSL\ncertificate (typically a jks file)"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"keyStorePassword"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The password used to access the key store"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"trustStore"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The trust store that holds SSL certificates"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"trustStorePassword"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The password used to access the trust store"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:2}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"server.http1"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"maxChunkSize"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The maximum length of each chunk in an HTTP/1\nresponse content"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"maxInitialLineLength"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The maximum length of an HTTP/1 response\ninitial line"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:5}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"server.http2"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"initialConnectionWindowSize"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The initial connection-level HTTP/2 flow control\nwindow size"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"initialStreamingWindowSize"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The initial stream-level HTTP/2 flow control\nwindow size"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"maxFrameSize"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The maximum size of HTTP/2 frame that can be\nreceived"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"maxStreamsPerConnection"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The maximum number of concurrent streams per\nHTTP/2 connection. Unset means there is no limit\non the number of concurrent streams"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"maxHeaderListSize"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The maximum size of headers that can be received"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:2}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"server.accessLog"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"type"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The access log type that is supposed to be one\nof ",Object(r.b)("inlineCode",{parentName:"p"},'"common"'),", ",Object(r.b)("inlineCode",{parentName:"p"},'"combined"')," or ",Object(r.b)("inlineCode",{parentName:"p"},'"custom"')))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"p"},"format"))),Object(r.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(r.b)("p",{parentName:"td"},"The access log format string"))))),Object(r.b)("h2",{id:"server-access-logs",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#server-access-logs","aria-label":"server access logs permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Server Access Logs"),Object(r.b)("p",null,"Armeria Server ",Object(r.b)("inlineCode",{parentName:"p"},"Access Logging <server-access-log>")," is enabled by default when using the Armeria Server.\nThe default ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://AccessLogWriter:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/logging/AccessLogWriter.html"}),"type://AccessLogWriter")," is ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://AccessLogWriter#common():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/logging/AccessLogWriter.html#common()"}),"type://AccessLogWriter#common()"),", but this can be changed via the\nfollowing configuration."),Object(r.b)("h3",{id:"common",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h3"},{href:"#common","aria-label":"common permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),Object(r.b)("inlineCode",{parentName:"h3"},"common")),Object(r.b)("p",null,"Use NCSA common log format."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-yaml"}),"server:\n  type: armeria\narmeria:\n  accessLog:\n    type: common\n")),Object(r.b)("h3",{id:"combined",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h3"},{href:"#combined","aria-label":"combined permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),Object(r.b)("inlineCode",{parentName:"h3"},"combined")),Object(r.b)("p",null,"Use NCSA combined log format."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-yaml"}),"server:\n  type: armeria\n  accessLog:\n    type: combined\n")),Object(r.b)("h3",{id:"custom",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h3"},{href:"#custom","aria-label":"custom permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),Object(r.b)("inlineCode",{parentName:"h3"},"custom")),Object(r.b)("p",null,"Use your own log format. Refer to ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"/docs/server-access-log#customizing-a-log-format"}),"Customizing a log format"),"\nfor supported format tokens."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-yaml"}),'server:\n  type: armeria\n  accessLog:\n    type: custom\n    format: "...log format..."\n')))}O.isMDXComponent=!0},xCMr:function(e,t,a){"use strict";var n=a("Wbzz"),r=a("q1tI"),c=a.n(r),b=a("/94A"),s=a("+ejy");t.a=function(e){var t=Object(n.useStaticQuery)("1217743243").allMdx.nodes;return c.a.createElement(s.a,Object.assign({},e,{candidateMdxNodes:t,index:b,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-advanced-dropwizard-integration-mdx-420390e4a79f84f8cc9c.js.map