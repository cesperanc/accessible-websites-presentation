!function(){var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function R(a){function d(e){var b=e.charCodeAt(0);if(b!==92)return b;var a=e.charAt(1);return(b=r[a])?b:"0"<=a&&a<="7"?parseInt(e.substring(1),8):a==="u"||a==="x"?parseInt(e.substring(2),16):e.charCodeAt(1)}function g(e){if(e<32)return(e<16?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);return e==="\\"||e==="-"||e==="]"||e==="^"?"\\"+e:e}function b(e){var b=e.substring(1,e.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),e=[],a=
b[0]==="^",c=["["];a&&c.push("^");for(var a=a?1:0,f=b.length;a<f;++a){var h=b[a];if(/\\[bdsw]/i.test(h))c.push(h);else{var h=d(h),l;a+2<f&&"-"===b[a+1]?(l=d(b[a+2]),a+=2):l=h;e.push([h,l]);l<65||h>122||(l<65||h>90||e.push([Math.max(65,h)|32,Math.min(l,90)|32]),l<97||h>122||e.push([Math.max(97,h)&-33,Math.min(l,122)&-33]))}}e.sort(function(e,a){return e[0]-a[0]||a[1]-e[1]});b=[];f=[];for(a=0;a<e.length;++a)h=e[a],h[0]<=f[1]+1?f[1]=Math.max(f[1],h[1]):b.push(f=h);for(a=0;a<b.length;++a)h=b[a],c.push(g(h[0])),
h[1]>h[0]&&(h[1]+1>h[0]&&c.push("-"),c.push(g(h[1])));c.push("]");return c.join("")}function s(e){for(var a=e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),c=a.length,d=[],f=0,h=0;f<c;++f){var l=a[f];l==="("?++h:"\\"===l.charAt(0)&&(l=+l.substring(1))&&(l<=h?d[l]=-1:a[f]=g(l))}for(f=1;f<d.length;++f)-1===d[f]&&(d[f]=++x);for(h=f=0;f<c;++f)l=a[f],l==="("?(++h,d[h]||(a[f]="(?:")):"\\"===l.charAt(0)&&(l=+l.substring(1))&&l<=h&&
(a[f]="\\"+d[l]);for(f=0;f<c;++f)"^"===a[f]&&"^"!==a[f+1]&&(a[f]="");if(e.ignoreCase&&m)for(f=0;f<c;++f)l=a[f],e=l.charAt(0),l.length>=2&&e==="["?a[f]=b(l):e!=="\\"&&(a[f]=l.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return a.join("")}for(var x=0,m=!1,j=!1,k=0,c=a.length;k<c;++k){var i=a[k];if(i.ignoreCase)j=!0;else if(/[a-z]/i.test(i.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){m=!0;j=!1;break}}for(var r={b:8,t:9,n:10,v:11,
f:12,r:13},n=[],k=0,c=a.length;k<c;++k){i=a[k];if(i.global||i.multiline)throw Error(""+i);n.push("(?:"+s(i)+")")}return RegExp(n.join("|"),j?"gi":"g")}function S(a,d){function g(a){var c=a.nodeType;if(c==1){if(!b.test(a.className)){for(c=a.firstChild;c;c=c.nextSibling)g(c);c=a.nodeName.toLowerCase();if("br"===c||"li"===c)s[j]="\n",m[j<<1]=x++,m[j++<<1|1]=a}}else if(c==3||c==4)c=a.nodeValue,c.length&&(c=d?c.replace(/\r\n?/g,"\n"):c.replace(/[\t\n\r ]+/g," "),s[j]=c,m[j<<1]=x,x+=c.length,m[j++<<1|1]=
a)}var b=/(?:^|\s)nocode(?:\s|$)/,s=[],x=0,m=[],j=0;g(a);return{a:s.join("").replace(/\n$/,""),d:m}}function H(a,d,g,b){d&&(a={a:d,e:a},g(a),b.push.apply(b,a.g))}function T(a){for(var d=void 0,g=a.firstChild;g;g=g.nextSibling)var b=g.nodeType,d=b===1?d?a:g:b===3?U.test(g.nodeValue)?a:d:d;return d===a?void 0:d}function D(a,d){function g(a){for(var j=a.e,k=[j,"pln"],c=0,i=a.a.match(s)||[],r={},n=0,e=i.length;n<e;++n){var z=i[n],w=r[z],t=void 0,f;if(typeof w==="string")f=!1;else{var h=b[z.charAt(0)];
if(h)t=z.match(h[1]),w=h[0];else{for(f=0;f<x;++f)if(h=d[f],t=z.match(h[1])){w=h[0];break}t||(w="pln")}if((f=w.length>=5&&"lang-"===w.substring(0,5))&&!(t&&typeof t[1]==="string"))f=!1,w="src";f||(r[z]=w)}h=c;c+=z.length;if(f){f=t[1];var l=z.indexOf(f),B=l+f.length;t[2]&&(B=z.length-t[2].length,l=B-f.length);w=w.substring(5);H(j+h,z.substring(0,l),g,k);H(j+h+l,f,I(w,f),k);H(j+h+B,z.substring(B),g,k)}else k.push(j+h,w)}a.g=k}var b={},s;(function(){for(var g=a.concat(d),j=[],k={},c=0,i=g.length;c<i;++c){var r=
g[c],n=r[3];if(n)for(var e=n.length;--e>=0;)b[n.charAt(e)]=r;r=r[1];n=""+r;k.hasOwnProperty(n)||(j.push(r),k[n]=q)}j.push(/[\S\s]/);s=R(j)})();var x=d.length;return g}function v(a){var d=[],g=[];a.tripleQuotedStrings?d.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?d.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
q,"'\"`"]):d.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&g.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var b=a.hashComments;b&&(a.cStyleComments?(b>1?d.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):d.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),g.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,q])):d.push(["com",
/^#[^\n\r]*/,q,"#"]));a.cStyleComments&&(g.push(["com",/^\/\/[^\n\r]*/,q]),g.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));if(b=a.regexLiterals){var s=(b=b>1?"":"\n\r")?".":"[\\S\\s]";g.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+b+"])(?:[^/\\x5B\\x5C"+b+"]|\\x5C"+s+"|\\x5B(?:[^\\x5C\\x5D"+b+"]|\\x5C"+
s+")*(?:\\x5D|$))+/")+")")])}(b=a.types)&&g.push(["typ",b]);b=(""+a.keywords).replace(/^ | $/g,"");b.length&&g.push(["kwd",RegExp("^(?:"+b.replace(/[\s,]+/g,"|")+")\\b"),q]);d.push(["pln",/^\s+/,q," \r\n\t\u00a0"]);b="^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals&&(b+="(?!s*/)");g.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,
q],["pun",RegExp(b),q]);return D(d,g)}function J(a,d,g){function b(a){var c=a.nodeType;if(c==1&&!x.test(a.className))if("br"===a.nodeName)s(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)b(a);else if((c==3||c==4)&&g){var d=a.nodeValue,i=d.match(m);if(i)c=d.substring(0,i.index),a.nodeValue=c,(d=d.substring(i.index+i[0].length))&&a.parentNode.insertBefore(j.createTextNode(d),a.nextSibling),s(a),c||a.parentNode.removeChild(a)}}function s(a){function b(a,c){var d=
c?a.cloneNode(!1):a,e=a.parentNode;if(e){var e=b(e,1),g=a.nextSibling;e.appendChild(d);for(var i=g;i;i=g)g=i.nextSibling,e.appendChild(i)}return d}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),d;(d=a.parentNode)&&d.nodeType===1;)a=d;c.push(a)}for(var x=/(?:^|\s)nocode(?:\s|$)/,m=/\r\n?|\n/,j=a.ownerDocument,k=j.createElement("li");a.firstChild;)k.appendChild(a.firstChild);for(var c=[k],i=0;i<c.length;++i)b(c[i]);d===(d|0)&&c[0].setAttribute("value",d);var r=j.createElement("ol");
r.className="linenums";for(var d=Math.max(0,d-1|0)||0,i=0,n=c.length;i<n;++i)k=c[i],k.className="L"+(i+d)%10,k.firstChild||k.appendChild(j.createTextNode("\u00a0")),r.appendChild(k);a.appendChild(r)}function p(a,d){for(var g=d.length;--g>=0;){var b=d[g];F.hasOwnProperty(b)?E.console&&console.warn("cannot override language handler %s",b):F[b]=a}}function I(a,d){if(!a||!F.hasOwnProperty(a))a=/^\s*</.test(d)?"default-markup":"default-code";return F[a]}function K(a){var d=a.h;try{var g=S(a.c,a.i),b=g.a;
a.a=b;a.d=g.d;a.e=0;I(d,b)(a);var s=/\bMSIE\s(\d+)/.exec(navigator.userAgent),s=s&&+s[1]<=8,d=/\n/g,x=a.a,m=x.length,g=0,j=a.d,k=j.length,b=0,c=a.g,i=c.length,r=0;c[i]=m;var n,e;for(e=n=0;e<i;)c[e]!==c[e+2]?(c[n++]=c[e++],c[n++]=c[e++]):e+=2;i=n;for(e=n=0;e<i;){for(var p=c[e],w=c[e+1],t=e+2;t+2<=i&&c[t+1]===w;)t+=2;c[n++]=p;c[n++]=w;e=t}c.length=n;var f=a.c,h;if(f)h=f.style.display,f.style.display="none";try{for(;b<k;){var l=j[b+2]||m,B=c[r+2]||m,t=Math.min(l,B),A=j[b+1],G;if(A.nodeType!==1&&(G=x.substring(g,
t))){s&&(G=G.replace(d,"\r"));A.nodeValue=G;var L=A.ownerDocument,o=L.createElement("span");o.className=c[r+1];var v=A.parentNode;v.replaceChild(o,A);o.appendChild(A);g<l&&(j[b+1]=A=L.createTextNode(x.substring(t,l)),v.insertBefore(A,o.nextSibling))}g=t;g>=l&&(b+=2);g>=B&&(r+=2)}}finally{if(f)f.style.display=h}}catch(u){E.console&&console.log(u&&u.stack||u)}}var E=window,y=["break,continue,do,else,for,if,return,while"],C=[[y,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],M=[C,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],V=[C,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
N=[C,"abstract,as,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],C=[C,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],O=[y,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
P=[y,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],W=[y,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],y=[y,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],Q=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
U=/\S/,X=v({keywords:[M,N,C,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",O,P,y],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),F={};p(X,["default-code"]);p(D([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",
/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]);p(D([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],
["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);p(D([],[["atv",/^[\S\s]+/]]),["uq.val"]);p(v({keywords:M,hashComments:!0,cStyleComments:!0,types:Q}),["c","cc","cpp","cxx","cyc","m"]);p(v({keywords:"null,true,false"}),["json"]);p(v({keywords:N,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:Q}),
["cs"]);p(v({keywords:V,cStyleComments:!0}),["java"]);p(v({keywords:y,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);p(v({keywords:O,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);p(v({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]);p(v({keywords:P,
hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);p(v({keywords:C,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);p(v({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);p(v({keywords:W,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]);
p(D([],[["str",/^[\S\s]+/]]),["regex"]);var Y=E.PR={createSimpleLexer:D,registerLangHandler:p,sourceDecorator:v,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:E.prettyPrintOne=function(a,d,g){var b=document.createElement("div");b.innerHTML="<pre>"+a+"</pre>";b=b.firstChild;g&&J(b,g,!0);K({h:d,j:g,c:b,i:1});
return b.innerHTML},prettyPrint:E.prettyPrint=function(a,d){function g(){for(var b=E.PR_SHOULD_USE_CONTINUATION?c.now()+250:Infinity;i<p.length&&c.now()<b;i++){for(var d=p[i],j=h,k=d;k=k.previousSibling;){var m=k.nodeType,o=(m===7||m===8)&&k.nodeValue;if(o?!/^\??prettify\b/.test(o):m!==3||/\S/.test(k.nodeValue))break;if(o){j={};o.replace(/\b(\w+)=([\w%+\-.:]+)/g,function(a,b,c){j[b]=c});break}}k=d.className;if((j!==h||e.test(k))&&!v.test(k)){m=!1;for(o=d.parentNode;o;o=o.parentNode)if(f.test(o.tagName)&&
o.className&&e.test(o.className)){m=!0;break}if(!m){d.className+=" prettyprinted";m=j.lang;if(!m){var m=k.match(n),y;if(!m&&(y=T(d))&&t.test(y.tagName))m=y.className.match(n);m&&(m=m[1])}if(w.test(d.tagName))o=1;else var o=d.currentStyle,u=s.defaultView,o=(o=o?o.whiteSpace:u&&u.getComputedStyle?u.getComputedStyle(d,q).getPropertyValue("white-space"):0)&&"pre"===o.substring(0,3);u=j.linenums;if(!(u=u==="true"||+u))u=(u=k.match(/\blinenums\b(?::(\d+))?/))?u[1]&&u[1].length?+u[1]:!0:!1;u&&J(d,u,o);r=
{h:m,c:d,j:u,i:o};K(r)}}}i<p.length?setTimeout(g,250):"function"===typeof a&&a()}for(var b=d||document.body,s=b.ownerDocument||document,b=[b.getElementsByTagName("pre"),b.getElementsByTagName("code"),b.getElementsByTagName("xmp")],p=[],m=0;m<b.length;++m)for(var j=0,k=b[m].length;j<k;++j)p.push(b[m][j]);var b=q,c=Date;c.now||(c={now:function(){return+new Date}});var i=0,r,n=/\blang(?:uage)?-([\w.]+)(?!\S)/,e=/\bprettyprint\b/,v=/\bprettyprinted\b/,w=/pre|xmp/i,t=/^code$/i,f=/^(?:pre|code|xmp)$/i,
h={};g()}};typeof define==="function"&&define.amd&&define("google-code-prettify",[],function(){return Y})})();}()

PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\f\r ]+/,null," \t\r\n\u000c"]],[["str",/^"(?:[^\n\f\r"\\]|\\(?:\r\n?|\n|\f)|\\[\S\s])*"/,null],["str",/^'(?:[^\n\f\r'\\]|\\(?:\r\n?|\n|\f)|\\[\S\s])*'/,null],["lang-css-str",/^url\(([^"')]+)\)/i],["kwd",/^(?:url|rgb|!important|@import|@page|@media|@charset|inherit)(?=[^\w-]|$)/i,null],["lang-css-kw",/^(-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*)\s*:/i],["com",/^\/\*[^*]*\*+(?:[^*/][^*]*\*+)*\//],
["com",/^(?:<\!--|--\>)/],["lit",/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],["lit",/^#[\da-f]{3,6}\b/i],["pln",/^-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*/i],["pun",/^[^\s\w"']+/]]),["css"]);PR.registerLangHandler(PR.createSimpleLexer([],[["kwd",/^-?(?:[_a-z]|\\[\da-f]+ ?)(?:[\w-]|\\\\[\da-f]+ ?)*/i]]),["css-kw"]);PR.registerLangHandler(PR.createSimpleLexer([],[["str",/^[^"')]+/]]),["css-str"]);

// C3
if (window.matchMedia && window.matchMedia('screen')) {

    /**
     * impress.js
     *
     * impress.js is a presentation tool based on the power of CSS3 transforms and transitions
     * in modern browsers and inspired by the idea behind prezi.com.
     *
     *
     * Copyright 2011-2012 Bartek Szopka (@bartaz)
     *
     * Released under the MIT and GPL Licenses.
     *
     * ------------------------------------------------
     *  author:  Bartek Szopka
     *  version: 0.5.3
     *  url:     http://bartaz.github.com/impress.js/
     *  source:  http://github.com/bartaz/impress.js/
     */

    /*jshint bitwise:true, curly:true, eqeqeq:true, forin:true, latedef:true, newcap:true,
     noarg:true, noempty:true, undef:true, strict:true, browser:true */

// You are one of those who like to know how things work inside?
    // Let me show you the cogs that make impress.js run...
    (function (document, window) {
        'use strict';

        // HELPER FUNCTIONS

        // `pfx` is a function that takes a standard CSS property name as a parameter
        // and returns it's prefixed version valid for current browser it runs in.
        // The code is heavily inspired by Modernizr http://www.modernizr.com/
        var pfx = (function () {

            var style = document.createElement('dummy').style,
                    prefixes = 'Webkit Moz O ms Khtml'.split(' '),
                    memory = {};

            return function (prop) {
                if (typeof memory[ prop ] === "undefined") {

                    var ucProp = prop.charAt(0).toUpperCase() + prop.substr(1),
                            props = (prop + ' ' + prefixes.join(ucProp + ' ') + ucProp).split(' ');

                    memory[ prop ] = null;
                    for (var i in props) {
                        if (style[ props[i] ] !== undefined) {
                            memory[ prop ] = props[i];
                            break;
                        }
                    }

                }

                return memory[ prop ];
            };

        })();

        // `arraify` takes an array-like object and turns it into real Array
        // to make all the Array.prototype goodness available.
        var arrayify = function (a) {
            return [].slice.call(a);
        };

        // `css` function applies the styles given in `props` object to the element
        // given as `el`. It runs all property names through `pfx` function to make
        // sure proper prefixed version of the property is used.
        var css = function (el, props) {
            var key, pkey;
            for (key in props) {
                if (props.hasOwnProperty(key)) {
                    pkey = pfx(key);
                    if (pkey !== null) {
                        el.style[pkey] = props[key];
                    }
                }
            }
            return el;
        };

        // `toNumber` takes a value given as `numeric` parameter and tries to turn
        // it into a number. If it is not possible it returns 0 (or other value
        // given as `fallback`).
        var toNumber = function (numeric, fallback) {
            return isNaN(numeric) ? (fallback || 0) : Number(numeric);
        };

        // `byId` returns element with given `id` - you probably have guessed that ;)
        var byId = function (id) {
            return (id===null || id===undefined || id==="")?null:document.getElementById(id);
        };

        // `$` returns first element for given CSS `selector` in the `context` of
        // the given element or whole document.
        var $ = function (selector, context) {
            context = context || document;
            return context.querySelector(selector);
        };

        // `$$` return an array of elements for given CSS `selector` in the `context` of
        // the given element or whole document.
        var $$ = function (selector, context) {
            context = context || document;
            return arrayify(context.querySelectorAll(selector));
        };

        // `triggerEvent` builds a custom DOM event with given `eventName` and `detail` data
        // and triggers it on element given as `el`.
        var triggerEvent = function (el, eventName, detail) {
            var event = document.createEvent("CustomEvent");
            event.initCustomEvent(eventName, true, true, detail);
            el.dispatchEvent(event);
        };

        // `translate` builds a translate transform string for given data.
        var translate = function (t) {
            return " translate3d(" + t.x + "px," + t.y + "px," + t.z + "px) ";
        };

        // `rotate` builds a rotate transform string for given data.
        // By default the rotations are in X Y Z order that can be reverted by passing `true`
        // as second parameter.
        var rotate = function (r, revert) {
            var rX = " rotateX(" + r.x + "deg) ",
                    rY = " rotateY(" + r.y + "deg) ",
                    rZ = " rotateZ(" + r.z + "deg) ";

            return revert ? rZ + rY + rX : rX + rY + rZ;
        };

        // `scale` builds a scale transform string for given data.
        var scale = function (s) {
            return " scale(" + s + ") ";
        };

        // `perspective` builds a perspective transform string for given data.
        var perspective = function (p) {
            return " perspective(" + p + "px) ";
        };

        // `getElementFromHash` returns an element located by id from hash part of
        // window location.
        var getElementFromHash = function () {
            // get id from url # by removing `#` or `#/` from the beginning,
            // so both "fallback" `#slide-id` and "enhanced" `#/slide-id` will work
            return byId(window.location.hash.replace(/^#\/?/, ""));
        };

        // `computeWindowScale` counts the scale factor between window size and size
        // defined for the presentation in the config.
        var computeWindowScale = function (config) {
            var hScale = window.innerHeight / config.height,
                    wScale = window.innerWidth / config.width,
                    scale = hScale > wScale ? wScale : hScale;

            if (config.maxScale && scale > config.maxScale) {
                scale = config.maxScale;
            }

            if (config.minScale && scale < config.minScale) {
                scale = config.minScale;
            }

            return scale;
        };

        // CHECK SUPPORT
        var body = document.body;

        //var ua = navigator.userAgent.toLowerCase();
        var impressSupported =
                // browser should support CSS 3D transtorms 
                        (pfx("perspective") !== null) &&
                        // and `classList` and `dataset` APIs
                                (body.classList) &&
                                (body.dataset)/* &&
                                 
                                 // but some mobile devices need to be blacklisted,
                                 // because their CSS 3D support or hardware is not
                                 // good enough to run impress.js properly, sorry...
                                 (ua.search(/(iphone)|(ipod)|(android)/) === -1)*/;

                        if (!impressSupported) {
                            // we can't be sure that `classList` is supported
                            body.className += " impress-not-supported ";
                        } else {
                            body.classList.remove("impress-not-supported");
                            body.classList.add("impress-supported");
                        }
                        body.classList.remove("impress-loading");

                        // GLOBALS AND DEFAULTS

                        // This is where the root elements of all impress.js instances will be kept.
                        // Yes, this means you can have more than one instance on a page, but I'm not
                        // sure if it makes any sense in practice ;)
                        var roots = {};

                        // some default config values.
                        var defaults = {
                            width: 1024,
                            height: 768,
                            maxScale: 2,
                            minScale: 0,
                            perspective: 1000,
                            transitionDuration: 1000
                        };

                        // it's just an empty function ... and a useless comment.
                        var empty = function () {
                            return false;
                        };

                        // IMPRESS.JS API

                        // And that's where interesting things will start to happen.
                        // It's the core `impress` function that returns the impress.js API
                        // for a presentation based on the element with given id ('impress'
                        // by default).
                        var impress = window.impress = function (rootId) {

                            // If impress.js is not supported by the browser return a dummy API
                            // it may not be a perfect solution but we return early and avoid
                            // running code that may use features not implemented in the browser.
                            if (!impressSupported) {
                                return {
                                    init: empty,
                                    goto: empty,
                                    prev: empty,
                                    next: empty
                                };
                            }

                            rootId = rootId || "impress";

                            // if given root is already initialized just return the API
                            if (roots["impress-root-" + rootId]) {
                                return roots["impress-root-" + rootId];
                            }

                            // data of all presentation steps
                            var stepsData = {};

                            // element of currently active step
                            var activeStep = null;

                            // current state (position, rotation and scale) of the presentation
                            var currentState = null;

                            // array of step elements
                            var steps = null;

                            // configuration options
                            var config = null;

                            // scale factor of the browser window
                            var windowScale = null;

                            // root presentation elements
                            var root = byId(rootId);
                            var canvas = document.createElement("div");

                            var initialized = false;

                            // STEP EVENTS
                            //
                            // There are currently two step events triggered by impress.js
                            // `impress:stepenter` is triggered when the step is shown on the 
                            // screen (the transition from the previous one is finished) and
                            // `impress:stepleave` is triggered when the step is left (the
                            // transition to next step just starts).

                            // reference to last entered step
                            var lastEntered = null;

                            // `onStepEnter` is called whenever the step element is entered
                            // but the event is triggered only if the step is different than
                            // last entered step.
                            var onStepEnter = function (step) {
                                if (lastEntered !== step) {
                                    triggerEvent(step, "impress:stepenter");
                                    lastEntered = step;
                                }
                            };

                            // `onStepLeave` is called whenever the step element is left
                            // but the event is triggered only if the step is the same as
                            // last entered step.
                            var onStepLeave = function (step) {
                                if (lastEntered === step) {
                                    triggerEvent(step, "impress:stepleave");
                                    lastEntered = null;
                                }
                            };

                            // `initStep` initializes given step element by reading data from its
                            // data attributes and setting correct styles.
                            var initStep = function (el, idx) {
                                var data = el.dataset,
                                        step = {
                                            translate: {
                                                x: toNumber(data.x),
                                                y: toNumber(data.y),
                                                z: toNumber(data.z)
                                            },
                                            rotate: {
                                                x: toNumber(data.rotateX),
                                                y: toNumber(data.rotateY),
                                                z: toNumber(data.rotateZ || data.rotate)
                                            },
                                            scale: toNumber(data.scale, 1),
                                            el: el
                                        };

                                if (!el.id) {
                                    el.id = "step-" + (idx + 1);
                                }

                                stepsData["impress-" + el.id] = step;

                                css(el, {
                                    position: "absolute",
                                    transform: "translate(-50%,-50%)" +
                                            translate(step.translate) +
                                            rotate(step.rotate) +
                                            scale(step.scale),
                                    transformStyle: "preserve-3d"
                                });
                            };

                            // C3: add the line number to the slide
                            var appendSlideNumber = function (el, idx) {
                                if (!el.classList.contains("no-number")) {
                                    el.innerHTML += "<span class=\"slide-number\">" + (idx) + "</span>";
                                }
                            };

                            // `init` API function that initializes (and runs) the presentation.
                            var init = function () {
                                if (initialized) {
                                    return;
                                }

                                // First we set up the viewport for mobile devices.
                                // For some reason iPad goes nuts when it is not done properly.
                                var meta = $("meta[name='viewport']") || document.createElement("meta");
                                meta.content = "width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no";
                                if (meta.parentNode !== document.head) {
                                    meta.name = 'viewport';
                                    document.head.appendChild(meta);
                                }

                                // initialize configuration object
                                var rootData = root.dataset;
                                config = {
                                    width: toNumber(rootData.width, defaults.width),
                                    height: toNumber(rootData.height, defaults.height),
                                    maxScale: toNumber(rootData.maxScale, defaults.maxScale),
                                    minScale: toNumber(rootData.minScale, defaults.minScale),
                                    perspective: toNumber(rootData.perspective, defaults.perspective),
                                    transitionDuration: toNumber(rootData.transitionDuration, defaults.transitionDuration)
                                };

                                windowScale = computeWindowScale(config);

                                // wrap steps with "canvas" element
                                arrayify(root.childNodes).forEach(function (el) {
                                    canvas.appendChild(el);
                                });
                                root.appendChild(canvas);

                                // set initial styles
                                document.documentElement.style.height = "100%";

                                css(body, {
                                    height: "100%",
                                    overflow: "hidden"
                                });

                                var rootStyles = {
                                    position: "absolute",
                                    transformOrigin: "top left",
                                    transition: "all 0s ease-in-out",
                                    transformStyle: "preserve-3d"
                                };

                                css(root, rootStyles);
                                css(root, {
                                    top: "50%",
                                    left: "50%",
                                    transform: perspective(config.perspective / windowScale) + scale(windowScale)
                                });
                                css(canvas, rootStyles);

                                body.classList.remove("impress-disabled");
                                body.classList.add("impress-enabled");

                                // get and init steps
                                steps = $$(".step", root);
                                
                                // C3: allow relative position between slides
                                var relativeStep = function(elData, prevData, property){
                                    if(elData[property]!==undefined){
                                        var prevPropertyValue;
                                        if(elData[property].indexOf('+')===0){
                                            prevPropertyValue = (prevData[property]!==undefined?prevData[property]:0);
                                            elData[property] = parseInt(prevPropertyValue)+parseInt(elData[property].substring(1));
                                        }
                                        if(elData[property].indexOf('-')===0){
                                            prevPropertyValue = (prevData[property]!==undefined?prevData[property]:0);
                                            elData[property] = parseInt(prevPropertyValue)-parseInt(elData[property].substring(1));
                                        }
                                    }
                                };
                                steps.forEach(function (el){
                                    var prev = steps.indexOf(el) - 1;
                                    prev = prev >= 0 ? steps[prev] : steps[steps.length - 1];
                                    relativeStep(el.dataset, prev.dataset, 'x');
                                    relativeStep(el.dataset, prev.dataset, 'y');
                                    relativeStep(el.dataset, prev.dataset, 'z');
                                    
                                    relativeStep(el.dataset, prev.dataset, 'rotate-x');
                                    relativeStep(el.dataset, prev.dataset, 'rotate-y');
                                    relativeStep(el.dataset, prev.dataset, 'rotate-z');
                                });
                                
                                steps.forEach(initStep);

                                // C3: append the slide number
                                steps.forEach(appendSlideNumber);

                                // set a default initial state of the canvas
                                currentState = {
                                    translate: {x: 0, y: 0, z: 0},
                                    rotate: {x: 0, y: 0, z: 0},
                                    scale: 1
                                };

                                initialized = true;

                                triggerEvent(root, "impress:init", {api: roots[ "impress-root-" + rootId ]});
                            };

                            // `getStep` is a helper function that returns a step element defined by parameter.
                            // If a number is given, step with index given by the number is returned, if a string
                            // is given step element with such id is returned, if DOM element is given it is returned
                            // if it is a correct step element.
                            var getStep = function (step) {
                                if (typeof step === "number") {
                                    step = step < 0 ? steps[steps.length + step] : steps[step];
                                } else if (typeof step === "string") {
                                    step = byId(step);
                                }
                                return (step && step.id && stepsData["impress-" + step.id]) ? step : null;
                            };

                            // used to reset timeout for `impress:stepenter` event
                            var stepEnterTimeout = null;

                            // `goto` API function that moves to step given with `el` parameter (by index, id or element),
                            // with a transition `duration` optionally given as second parameter.
                            var goto = function (el, duration) {

                                if (!initialized || !(el = getStep(el))) {
                                    // presentation not initialized or given element is not a step
                                    return false;
                                }

                                // Sometimes it's possible to trigger focus on first link with some keyboard action.
                                // Browser in such a case tries to scroll the page to make this element visible
                                // (even that body overflow is set to hidden) and it breaks our careful positioning.
                                //
                                // So, as a lousy (and lazy) workaround we will make the page scroll back to the top
                                // whenever slide is selected
                                //
                                // If you are reading this and know any better way to handle it, I'll be glad to hear about it!
                                window.scrollTo(0, 0);

                                var step = stepsData["impress-" + el.id];

                                if (activeStep) {
                                    activeStep.classList.remove("active");
                                    body.classList.remove("impress-on-" + activeStep.id);
                                }
                                el.classList.add("active");

                                body.classList.add("impress-on-" + el.id);

                                // compute target state of the canvas based on given step
                                var target = {
                                    rotate: {
                                        x: -step.rotate.x,
                                        y: -step.rotate.y,
                                        z: -step.rotate.z
                                    },
                                    translate: {
                                        x: -step.translate.x,
                                        y: -step.translate.y,
                                        z: -step.translate.z
                                    },
                                    scale: 1 / step.scale
                                };

                                // Check if the transition is zooming in or not.
                                //
                                // This information is used to alter the transition style:
                                // when we are zooming in - we start with move and rotate transition
                                // and the scaling is delayed, but when we are zooming out we start
                                // with scaling down and move and rotation are delayed.
                                var zoomin = target.scale >= currentState.scale;

                                duration = toNumber(duration, config.transitionDuration);
                                var delay = (duration / 2);

                                // if the same step is re-selected, force computing window scaling,
                                // because it is likely to be caused by window resize
                                if (el === activeStep) {
                                    windowScale = computeWindowScale(config);
                                }

                                var targetScale = target.scale * windowScale;

                                // trigger leave of currently active element (if it's not the same step again)
                                if (activeStep && activeStep !== el) {
                                    onStepLeave(activeStep);
                                }

                                // Now we alter transforms of `root` and `canvas` to trigger transitions.
                                //
                                // And here is why there are two elements: `root` and `canvas` - they are
                                // being animated separately:
                                // `root` is used for scaling and `canvas` for translate and rotations.
                                // Transitions on them are triggered with different delays (to make
                                // visually nice and 'natural' looking transitions), so we need to know
                                // that both of them are finished.
                                css(root, {
                                    // to keep the perspective look similar for different scales
                                    // we need to 'scale' the perspective, too
                                    transform: perspective(config.perspective / targetScale) + scale(targetScale),
                                    transitionDuration: duration + "ms",
                                    transitionDelay: (zoomin ? delay : 0) + "ms"
                                });

                                css(canvas, {
                                    transform: rotate(target.rotate, true) + translate(target.translate),
                                    transitionDuration: duration + "ms",
                                    transitionDelay: (zoomin ? 0 : delay) + "ms"
                                });

                                // Here is a tricky part...
                                //
                                // If there is no change in scale or no change in rotation and translation, it means there was actually
                                // no delay - because there was no transition on `root` or `canvas` elements.
                                // We want to trigger `impress:stepenter` event in the correct moment, so here we compare the current
                                // and target values to check if delay should be taken into account.
                                //
                                // I know that this `if` statement looks scary, but it's pretty simple when you know what is going on
                                // - it's simply comparing all the values.
                                if (currentState.scale === target.scale ||
                                        (currentState.rotate.x === target.rotate.x && currentState.rotate.y === target.rotate.y &&
                                                currentState.rotate.z === target.rotate.z && currentState.translate.x === target.translate.x &&
                                                currentState.translate.y === target.translate.y && currentState.translate.z === target.translate.z)) {
                                    delay = 0;
                                }

                                // store current state
                                currentState = target;
                                activeStep = el;

                                // And here is where we trigger `impress:stepenter` event.
                                // We simply set up a timeout to fire it taking transition duration (and possible delay) into account.
                                //
                                // I really wanted to make it in more elegant way. The `transitionend` event seemed to be the best way
                                // to do it, but the fact that I'm using transitions on two separate elements and that the `transitionend`
                                // event is only triggered when there was a transition (change in the values) caused some bugs and 
                                // made the code really complicated, cause I had to handle all the conditions separately. And it still
                                // needed a `setTimeout` fallback for the situations when there is no transition at all.
                                // So I decided that I'd rather make the code simpler than use shiny new `transitionend`.
                                //
                                // If you want learn something interesting and see how it was done with `transitionend` go back to
                                // version 0.5.2 of impress.js: http://github.com/bartaz/impress.js/blob/0.5.2/js/impress.js
                                window.clearTimeout(stepEnterTimeout);
                                stepEnterTimeout = window.setTimeout(function () {
                                    onStepEnter(activeStep);
                                }, duration + delay);

                                return el;
                            };

                            // `prev` API function goes to previous step (in document order)
                            var prev = function () {
                                var prev = steps.indexOf(activeStep) - 1;
                                prev = prev >= 0 ? steps[prev] : steps[steps.length - 1];

                                return goto(prev);
                            };

                            // `next` API function goes to next step (in document order)
                            var next = function () {
                                var next = steps.indexOf(activeStep) + 1;
                                next = next < steps.length ? steps[next] : steps[0];

                                return goto(next);
                            };

                            // Adding some useful classes to step elements.
                            //
                            // All the steps that have not been shown yet are given `future` class.
                            // When the step is entered the `future` class is removed and the `present`
                            // class is given. When the step is left `present` class is replaced with
                            // `past` class.
                            //
                            // So every step element is always in one of three possible states:
                            // `future`, `present` and `past`.
                            //
                            // There classes can be used in CSS to style different types of steps.
                            // For example the `present` class can be used to trigger some custom
                            // animations when step is shown.
                            root.addEventListener("impress:init", function () {
                                // STEP CLASSES
                                root.addEventListener("impress:stepenter", function (event) {
                                    //C3
                                    steps.forEach(function (step) {
                                        var indexOfActiveStep = steps.indexOf(event.target);
                                        var indexOfStep = steps.indexOf(step);
                                        if (indexOfActiveStep < indexOfStep && !step.classList.contains("future")) {
                                            step.classList.add("future");
                                            step.classList.remove("past");
                                            step.classList.remove("present");
                                        }
                                        if (indexOfActiveStep > indexOfStep && !step.classList.contains("past")) {
                                            step.classList.add("past");
                                            step.classList.remove("future");
                                            step.classList.remove("present");
                                        }
//                                        if(indexOfActiveStep===indexOfStep && !step.classList.contains("present")){
//                                            step.classList.add("present");
//                                            event.target.classList.remove("future");
//                                            event.target.classList.remove("past");
//                                        }
                                    });

                                    event.target.classList.remove("past");
                                    event.target.classList.remove("future");
                                    event.target.classList.add("present");

                                }, false);

                                root.addEventListener("impress:stepleave", function (event) {
                                    event.target.classList.remove("present");
                                    //event.target.classList.add("past");
                                }, false);

                            }, false);

                            // Adding hash change support.
                            root.addEventListener("impress:init", function () {

                                // last hash detected
                                var lastHash = "";

                                // `#/step-id` is used instead of `#step-id` to prevent default browser
                                // scrolling to element in hash.
                                //
                                // And it has to be set after animation finishes, because in Chrome it
                                // makes transtion laggy.
                                // BUG: http://code.google.com/p/chromium/issues/detail?id=62820
                                root.addEventListener("impress:stepenter", function (event) {
                                    window.location.hash = lastHash = "#/" + event.target.id;
                                }, false);

                                window.addEventListener("hashchange", function () {
                                    // When the step is entered hash in the location is updated
                                    // (just few lines above from here), so the hash change is 
                                    // triggered and we would call `goto` again on the same element.
                                    //
                                    // To avoid this we store last entered hash and compare.
                                    if (window.location.hash !== lastHash) {
                                        goto(getElementFromHash());
                                    }
                                }, false);

                                // START 
                                // by selecting step defined in url or first step of the presentation
                                goto(getElementFromHash() || steps[0], 0);
                            }, false);

                            body.classList.add("impress-disabled");

                            // store and return API for given impress.js root element
                            return (roots["impress-root-" + rootId] = {
                                init: init,
                                goto: goto,
                                next: next,
                                prev: prev
                            });

                        };

                        // flag that can be used in JS to check if browser have passed the support test
                        impress.supported = impressSupported;

                    })(document, window);

            // NAVIGATION EVENTS

            // As you can see this part is separate from the impress.js core code.
            // It's because these navigation actions only need what impress.js provides with
            // its simple API.
            //
            // In future I think about moving it to make them optional, move to separate files
            // and treat more like a 'plugins'.
            (function (document, window) {
                'use strict';

                // throttling function calls, by Remy Sharp
                // http://remysharp.com/2010/07/21/throttling-function-calls/
                var throttle = function (fn, delay) {
                    var timer = null;
                    return function () {
                        var context = this, args = arguments;
                        clearTimeout(timer);
                        timer = setTimeout(function () {
                            fn.apply(context, args);
                        }, delay);
                    };
                };

                // wait for impress.js to be initialized
                document.addEventListener("impress:init", function (event) {
                    // Getting API from event data.
                    // So you don't event need to know what is the id of the root element
                    // or anything. `impress:init` event data gives you everything you 
                    // need to control the presentation that was just initialized.
                    var api = event.detail.api;

                    // KEYBOARD NAVIGATION HANDLERS

                    // Prevent default keydown action when one of supported key is pressed.
                    document.addEventListener("keydown", function (event) {
                        if (/*event.keyCode === 8 || event.keyCode === 9 ||*/ (event.keyCode >= 32 && event.keyCode <= 40)) {
                            event.preventDefault();
                        }
                    }, false);

                    // Trigger impress action (next or prev) on keyup.

                    // Supported keys are:
                    // [space] - quite common in presentation software to move forward
                    // [up] [right] / [down] [left] - again common and natural addition,
                    // [pgdown] / [pgup] - often triggered by remote controllers,
                    // [tab] - this one is quite controversial, but the reason it ended up on
                    //   this list is quite an interesting story... Remember that strange part
                    //   in the impress.js code where window is scrolled to 0,0 on every presentation
                    //   step, because sometimes browser scrolls viewport because of the focused element?
                    //   Well, the [tab] key by default navigates around focusable elements, so clicking
                    //   it very often caused scrolling to focused element and breaking impress.js
                    //   positioning. I didn't want to just prevent this default action, so I used [tab]
                    //   as another way to moving to next step... And yes, I know that for the sake of
                    //   consistency I should add [shift+tab] as opposite action...
                    document.addEventListener("keyup", function (event) {
                        if (/*event.keyCode === 8 || event.keyCode === 9 ||*/ (event.keyCode >= 32 && event.keyCode <= 40)) {
                            switch (event.keyCode) {
                                //case 8:
                                case 33: // pg up
                                case 37: // left
                                case 8: // backspace
                                case 38: // up
                                    api.prev();
                                    break;
                                    //case 9:  // tab
                                case 32: // space
                                case 34: // pg down
                                case 39: // right
                                case 40: // down
                                    api.next();
                                    break;
                                case 36: // home
                                    api.goto(0);
                                    break;
                                case 35: // end
                            }

                            event.preventDefault();
                        }
                    }, false);

                    // delegated handler for clicking on the links to presentation steps
                    document.addEventListener("click", function (event) {
                        // event delegation with "bubbling"
                        // check if event target (or any of its parents is a link)
                        var target = event.target;
                        while ((target.tagName !== "A") &&
                                (target !== document.documentElement)) {
                            target = target.parentNode;
                        }

                        if (target.tagName === "A") {
                            var href = target.getAttribute("href");

                            // if it's a link to presentation step, target this step
                            if (href && href[0] === '#') {
                                target = document.getElementById(href.slice(1));
                            }
                        }

                        if (api.goto(target)) {
                            event.stopImmediatePropagation();
                            event.preventDefault();
                        }
                    }, false);

                    // delegated handler for clicking on step elements
                    document.addEventListener("click", function (event) {
                        var target = event.target;
                        // find closest step element that is not active
                        while (!(target.classList.contains("step") && !target.classList.contains("active")) &&
                                (target !== document.documentElement)) {
                            target = target.parentNode;
                        }

                        if (api.goto(target)) {
                            event.preventDefault();
                        }
                    }, false);

                    // touch handler to detect taps on the left and right side of the screen
                    // based on awesome work of @hakimel: https://github.com/hakimel/reveal.js
                    document.addEventListener("touchstart", function (event) {
                        if (event.touches.length === 1) {
                            var x = event.touches[0].clientX,
                                    width = window.innerWidth * 0.3,
                                    result = null;

                            if (x < width) {
                                result = api.prev();
                            } else if (x > window.innerWidth - width) {
                                result = api.next();
                            }

                            if (result) {
                                event.preventDefault();
                            }
                        }
                    }, false);

                    var mouseWheelListener = function (e) {
                        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))) * (-1);
                        if (delta > 0) {
                            api.next();
                        } else {
                            api.prev();
                        }
                    };

                    document.addEventListener("mousewheel", mouseWheelListener, false);
                    document.addEventListener("DOMMouseScroll", mouseWheelListener, false); // Firefox

                    // rescale presentation when window is resized
                    window.addEventListener("resize", throttle(function () {
                        // force going to active step again, to trigger rescaling
                        api.goto(document.querySelector(".step.active"), 500);
                    }, 250), false);

                }, false);

            })(document, window);


            // THAT'S ALL FOLKS!
            //
            // Thanks for reading it all.
            // Or thanks for scrolling down and reading the last part.
            //
            // I've learnt a lot when building impress.js and I hope this code and comments
            // will help somebody learn at least some part of it.
        }
/* global ImpressL10n, prettyPrint*/

(function (document, window, ImpressL10n) {
    'use strict';
    var impress = window.impress, el, impress_toolbar = document.getElementById("impress-toolbar");
    if (impress.supported) {
        el = document.createElement("div");
        el.classList.add("hint");
        el.innerHTML = "<p>"+ImpressL10n.navigationTip+"</p>";
        document.body.appendChild(el);
        if ("ontouchstart" in document.documentElement) {
            document.querySelector(".hint").innerHTML = "<p>"+ImpressL10n.touchNavigationTip+"</p>";
        }
    }
    if(impress_toolbar){
    el = document.createElement("a");
    el.setAttribute("id", "change-effects");
        el.setAttribute("class", "impress-tool");
    el.setAttribute("aria-live", "assertive");
    el.setAttribute("href", "#");
    el.setAttribute("title", ImpressL10n.manageVisualEffectsHint);
    el.innerHTML = ImpressL10n.manageVisualEffects;

        impress_toolbar.appendChild(el);
    }

    var ImpressCookie = {
        /* cookies methods */
        setCookie: function (name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            }
            document.cookie = 'Impress_' + name + '=' + value + expires + '; path=/';
        },
        getCookie: function (name) {
            var nameEQ = 'Impress_' + name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1, c.length);
                }
                if (c.indexOf(nameEQ) === 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }
            return null;
        },
        deleteCookie: function (name) {
            ImpressCookie.setCookie(name, '', -1);
        },
        effectsEnabled: function () {
            return (ImpressCookie.getCookie('effects-enabled') !== "false");
        },
        enableEffects: function () {
            ImpressCookie.deleteCookie('effects-enabled');
        },
        disableEffects: function () {
            ImpressCookie.setCookie('effects-enabled', "false");
        },
        enablePrint: function () {
            ImpressCookie.setCookie('enable-print', "true");
        },
        printEnabled: function () {
            return (ImpressCookie.getCookie('enable-print') === "true");
        },
        disablePrint: function () {
            ImpressCookie.deleteCookie('enable-print');
        },
        init: function () {
            document.getElementById("change-effects").addEventListener("click", function () {
                if (ImpressCookie.effectsEnabled()) {
                    ImpressCookie.disableEffects();
                } else {
                    ImpressCookie.enableEffects();
                }
                window.location.reload();
            }, false);

            if (ImpressCookie.effectsEnabled()) {
                document.getElementById("change-effects").innerHTML = ImpressL10n.disableVisualEffects;
                document.body.classList.add("impress-effects-enabled");
                document.body.setAttribute("role", "application");
            } else {
                document.getElementById("change-effects").innerHTML = ImpressL10n.enableVisualEffects;
                document.body.classList.add("impress-effects-disabled");
                document.body.setAttribute("role", "document");
            }
            if (ImpressCookie.printEnabled()) {
                ImpressCookie.disablePrint();
                window.print();
            }
        }
    };

    ImpressCookie.init();
    
    if (typeof(impress)==='function' && ImpressCookie.effectsEnabled()) {
        impress().init();

        var beforePrint = function () {
            if (ImpressCookie.effectsEnabled()) {
                ImpressCookie.disableEffects();
                ImpressCookie.enablePrint();
                window.location.reload();
            }
        };

        var afterPrint = function () {/*
         if (ImpressCookie.printEnabled()) {
         ImpressCookie.enableEffects();
         window.location.reload();
         }*/
        };

        if (window.matchMedia) {
            var mediaQueryList = window.matchMedia('print');
            mediaQueryList.addListener(function (mql) {
                if (mql.matches) {
                    beforePrint();
                } else {
                    afterPrint();
                }
            });
        }

        window.onbeforeprint = beforePrint;
        window.onafterprint = afterPrint;
    }
    
    if(typeof(prettyPrint) === "function"){
        prettyPrint();
    }
})(document, window, ImpressL10n);
