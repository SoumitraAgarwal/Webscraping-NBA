(function(){var window=this;var d=this,ba=function(){},aa=function(){var a=e[5],b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var k=function(){this.a="";this.b=ca},ca={};var z;a:{var ea=d.navigator;if(ea){var fa=ea.userAgent;if(fa){z=fa;break a}}z=""};var ia=function(){var a=v();ha();var b=new k;b.a=a;return b},ha=ba;var N=function(a){N[" "](a);return a};N[" "]=ba;var ja=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b){try{var O=new Uint32Array(1);d.crypto.getRandomValues(O);c=O[0]/65536/65536}catch(Y){c=Math.random()}return a[Math.floor(c*a.length)]}}return null};var g=function(){return d.googletag||(d.googletag={})};var f={1:"pagead2.googlesyndication.com",2:"pubads.g.doubleclick.net",3:"securepubads.g.doubleclick.net",7:.02,10:0,13:1500,16:.01,17:1,20:0,23:.001,24:200,27:.01,28:0,29:.01,33:"pagead2.googlesyndication.com",34:1,37:.01,38:.001,47:1E-4,53:"",54:0,57:.05,58:1,159:.001,60:0,63:0,65:.01,66:1E-5,67:0,68:0,69:.99,71:.05,73:.001,74:.05,75:"",161:0,162:149,76:"",77:.001,78:.01,88:1,79:.95,81:.001,83:1E-4,84:0,85:.01,87:.2,89:.995,90:.01,91:.01,92:0,93:0,94:0,95:0,96:.995,97:.001,98:0,99:.01,101:.001,103:.01,104:"/pagead/js/rum.js",105:0,106:"1-0-10",107:"1-0-10",110:.001,113:1,114:.01,115:.01,116:.001,117:.01,118:.05,123:.01,120:.05,121:.001,124:.01,122:.001,125:.01,126:.01,127:.001,129:.01,130:1,131:"",132:.01,156:.05,133:.01,134:.01,135:0,136:1,137:0,138:"",143:.001,144:.001,141:.95,145:1,151:.01,157:0,158:0,150:"",153:.05,154:1,155:0,160:"",152:[]};f[6]=function(a,b){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!!b;case "http:":return!1}}catch(O){}return!0}(window);f[49]=(new Date).getTime();f[36]=/^true$/.test(!1);f[46]=/^true$/.test(!1);f[148]=/^true$/.test(!1);var q=function(){var a={},b;for(b in f)a[b]=f[b];this.a=a};q.prototype.get=function(a){return this.a[a]};q.prototype.set=function(a,b){this.a[a]=b};q.b=void 0;q.a=function(){return q.b?q.b:q.b=new q};var h=["21060621","21060622","21060833","21060713"],r=q.a().a,t=g(),u=t._vars_,m;for(m in u)r[m]=u[m];t._vars_=r;var ka=function(){return"150"},la=g();la.hasOwnProperty("getVersion")||(la.getVersion=ka);var ma=function(a){var b=a;return function(){if(b){var a=b;b=null;a()}}};var na=function(a,b){a.addEventListener?a.addEventListener("message",b,void 0):a.attachEvent&&a.attachEvent("onmessage",b)};var pa=function(){var a=oa;this.c=void 0===a?function(){return d}:a;this.g="https://securepubads.g.doubleclick.net/static/3p_cookie.html";this.a=2;this.b=[];this.f=!1},A=function(a){if(2!=qa(a)){for(var b=1==qa(a),c=0;c<a.b.length;c++)try{a.b[c](b)}catch(O){}a.b=[]}},sa=function(a){var b=a.c().frames[N("detect_3p_cookie")];b&&2==a.a&&(ra(b,"3p_cookie_yes")?a.a=1:ra(b,"3p_cookie_no")&&(a.a=0))},qa=function(a){sa(a);return a.a},ta=function(a){var b=B,c=b.c();b.b.push(a);b.f||(na(c,function(a){var c=b.c();if((c=c?c.document.getElementsByName("detect_3p_cookie")[0]:null)&&a.source==c.contentWindow&&2==b.a){switch(a.data){case "3p_cookie_yes":b.a=1;break;case "3p_cookie_no":b.a=0}A(b)}}),b.f=!0);if(c.frames[N("detect_3p_cookie")])A(b);else{a=c.document.createElement("iframe");a.src=b.g;a.name="detect_3p_cookie";a.style.visibility="hidden";a.style.height="0";a.onload=function(){sa(b);A(b)};try{c.document.body.appendChild(a)}catch(O){}}},ra=function(a,b){try{return!!a.frames[b]}catch(c){return!1}};var D=null;var l=/^\.google\.(com\.)?[a-z]{2,3}$/,ua=/\.(cn|com\.bi|do|sl)$/,F=function(a){return l.test(a)&&!ua.test(a)},oa=function(){return d},n=d,B,v=function(){var a="https://adservice"+e[1]+(e[3]?"/generate_204":"/adsid/integrator.js"),b=["domain="+encodeURIComponent(d.location.hostname)];p[3]>=+new Date&&b.push("adsid="+encodeURIComponent(p[1]));return a+"?"+b.join("&")},p,e,y=function(){n=d;p=n.googleToken=n.googleToken||{};var a=+new Date;p[1]&&p[3]>a&&0<p[2]||(p[1]="",p[2]=-1,p[3]=-1,p[4]="");e=n.googleIMState=n.googleIMState||{};F(e[1])||(e[1]=".google.com");0!=e[2]&&(e[2]=1);"boolean"==typeof e[3]||(e[3]=!1);"boolean"==typeof e[4]||(e[4]=!1);"array"==aa()||(e[5]=[])},va=function(a){try{a()}catch(b){d.setTimeout(function(){throw b;},0)}},E=function(){if(!e[4]){e[4]=!0;var a=d.document;if(0==e[2]){var b=v().replace(/[\W]/g,function(a){return"&#"+a.charCodeAt()+";"}),c=N("script");a.write("<"+c+' src="'+b+'"></'+c+">"+("<"+c+">processGoogleToken("+(e[3]?'{"newToken":"FBS"}':"{}")+");</"+c+">"))}else{b=a.createElement("script");b.type="text/javascript";b.onerror=function(){return d.processGoogleToken({},2)};e[3]&&(b.onload=function(){var a={};return d.processGoogleToken((a.newToken="FBA",a))});c=ia();b.src=c instanceof k&&c.constructor===k&&c.b===ca?c.a:"type_error:TrustedResourceUrl";try{(a.head||a.body||a.documentElement).appendChild(b)}catch(O){}d.setTimeout(function(){return d.processGoogleToken({},1)},1E3)}}},K=function(a){d.processGoogleToken=d.processGoogleToken||wa;y();var b=n.googleToken[5]||0;a&&(0!=b||p[3]>=+new Date?va(a):(e[5].push(a),E()));p[3]>=+new Date&&p[2]>=+new Date||E()},xa=function(){var a=ma(function(){});B=B||new pa;ta(function(b){b&&a()});K(a)},da=0,wa=function(a,b){a=void 0===a?{}:a;b=void 0===b?0:b;var c=a.newToken||"",O=a.altDomain||"",Y=parseInt(a.freshLifetimeSecs||"",10)||3600,T=parseInt(a.validLifetimeSecs||"",10)||86400;a=a["1p_jar"]||"";y();e[4]=!1;if(1E-5>Math.random()){d.google_image_requests||(d.google_image_requests=[]);var C=d.document.createElement("img");C.src="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+b;d.google_image_requests.push(C)}if(!c&&O&&F(O)&&2>=++da)F(O)&&(e[1]=O),E();else{O=n.googleToken=n.googleToken||{};O[5]=b;0==b&&c&&"string"==typeof c&&0<Y&&0<T&&"string"==typeof a&&(b=+new Date,O[1]=c,O[2]=b+1E3*Y,O[3]=b+1E3*T,O[4]=a,y());c=e[5];for(Y=0;Y<c.length;Y++)va(c[Y]);e[5]=[]}};N("partner.googleadservices.com");N("www.googletagservices.com");var w="",x="",ya=q.a().get(46)&&!q.a().get(6);w=ya?"http:":"https:";x=q.a().get(ya?2:3);var za=function(a,b){if(null===D){D="";try{var c=d.top.location.hash;if(c){var O=c.match(/\bdeid=([\d,]+)/);D=O?O[1]:""}}catch(Y){}}return(c=(c=D)&&c.match(new RegExp("\\b("+a.join("|")+")\\b")))?c[0]:b?ja(a,a.length*b):null};var G=g(),H=G.fifWin||window,I=H.document,Aa=[],Ba=g();Ba.hasOwnProperty("cmd")||(Ba.cmd=Aa);if(G.evalScripts)G.evalScripts();else{var Ca=I.currentScript,J;var L=q.a(),M=L.get(76);if(M)J=M;else{var P=["147","147","149"],Da=P[0]||"150",Q="",R,Ea=!1;if(L.get(131))Q="?sf=1",R="150";else if(1<P.length&&-1==z.indexOf("Google Web Preview")){var S=["21060967","21060968","21060969"],U=za(S,.1);if(U)if(Ea=!0,q.a().set(53,U),U==S[0])Q="?v="+P[S.length-1];else for(var V=1;V<S.length;++V)if(U==S[V]){R=P[V];break}}R=R||Da;var Fa="/gpt/pubads_impl_";if(!Ea){var W;var Ga=q.a(),Ha=Ga.get(161),X=za(["21060994","21060995"],Ha);X?(Ga.get(152).push(X),W="21060995"==X?"/gpt/pubads_impl_core_":"/gpt/pubads_impl_control_"):W=null;var Ia=W;Ia&&(Fa=Ia,R=L.get(162))}M=w+"//"+x+Fa+R+".js"+Q;q.a().set(76,M);J=M}var Ja=J;-1!=z.indexOf("iPhone")&&q.a().set(79,0);var Ka=q.a().get(160);Ka&&q.a().get(152).push(Ka);var Z,La=q.a().get(137);if(q.a().get(148)&&0<La)try{var Ma=q.a().get(150);Ma&&(y(),F(Ma)&&(e[1]=Ma));q.a().get(138)||(Z=ja(h,h.length*La))&&q.a().set(138,Z)}catch(a){}var Na=H.performance;if(Na&&Na.now){var Oa=Na.now();(H.google_js_reporting_queue=H.google_js_reporting_queue||[]).push({label:"1",type:9,value:Oa,uniqueId:"rt."+Math.random()})}if(!("complete"==I.readyState||"loaded"==I.readyState||Ca&&Ca.async)){var Pa="gpt-impl-"+Math.random();try{I.write('<script id="'+Pa+'" src="'+Ja+'">\x3c/script>'),G._syncTagged_=!0}catch(a){}I.getElementById(Pa)&&(G._loadStarted_=!0)}if(!G._loadStarted_){Z&&"21060621"!=Z&&(y(),e[3]=!0,y(),e[2]=1);switch(Z){case "21060833":xa();break;case "21060622":case "21060713":K(null)}var Qa=I.createElement("script");Qa.src=Ja;Qa.async=!0;(I.head||I.body||I.documentElement).appendChild(Qa);G._loadStarted_=!0}};}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)