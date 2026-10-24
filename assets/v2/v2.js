(()=>{var __=Object.defineProperty;var x_=(r,t,e)=>t in r?__(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Pt=(r,t,e)=>x_(r,typeof t!="symbol"?t+"":t,e);function Ki(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ad(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ls={duration:.5,overwrite:!1,delay:0},qh,hn,Ie,di=1e8,Me=1/di,Fh=Math.PI*2,v_=Fh/4,y_=0,Cd=Math.sqrt,S_=Math.cos,M_=Math.sin,Qe=function(t){return typeof t=="string"},Oe=function(t){return typeof t=="function"},ji=function(t){return typeof t=="number"},Ka=function(t){return typeof t>"u"},Bi=function(t){return typeof t=="object"},Wn=function(t){return t!==!1},Zh=function(){return typeof window<"u"},Ga=function(t){return Oe(t)||Qe(t)},Rd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,Oh=/(?:-?\.?\d|\.)+/gi,Jh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,jr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$h=/[+-]=-?[.\d]+/,Pd=/[^,'"\[\]\s]+/gi,b_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,De,Fi,Bh,Kh,Kn={},Ya={},Id,Ld=function(t){return(Ya=Ds(t,Kn))&&_n},Qa=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Io=function(t,e){return!e&&console.warn(t)},Dd=function(t,e){return t&&(Kn[t]=e)&&Ya&&(Ya[t]=e)||Kn},Lo=function(){return 0},T_={suppressEvents:!0,isStart:!0,kill:!1},Ha={suppressEvents:!0,kill:!1},w_={suppressEvents:!0},Qh={},yr=[],zh={},Nd,Gn={},Ph={},yd=30,Wa=[],jh="",tu=function(t){var e=t[0],n,i;if(Bi(e)||Oe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Wa.length;i--&&!Wa[i].targetTest(e););n=Wa[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new ru(t[i],n)))||t.splice(i,1);return t},Sr=function(t){return t._gsap||tu(pi(t))[0]._gsap},eu=function(t,e,n){return(n=t[e])&&Oe(n)?t[e]():Ka(n)&&t.getAttribute&&t.getAttribute(e)||n},Rn=function(t,e){return(t=t.split(",")).forEach(e)||t},Be=function(t){return Math.round(t*1e5)/1e5||0},qe=function(t){return Math.round(t*1e7)/1e7||0},ts=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},E_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},qa=function(){var t=yr.length,e=yr.slice(0),n,i;for(zh={},yr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},nu=function(t){return!!(t._initted||t._startAt||t.add)},Ud=function(t,e,n,i){yr.length&&!hn&&qa(),t.render(e,n,i||!!(hn&&e<0&&nu(t))),yr.length&&!hn&&qa()},Fd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Pd).length<2?e:Qe(t)?t.trim():t},Od=function(t){return t},Qn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},A_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ds=function(t,e){for(var n in e)t[n]=e[n];return t},Sd=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Bi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Za=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Co=function(t){var e=t.parent||De,n=t.keyframes?A_(gn(t.keyframes)):Qn;if(Wn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},C_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Bd=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},ja=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Mr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},$r=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},R_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},kh=function(t,e,n,i){return t._startAt&&(hn?t._startAt.revert(Ha):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},P_=function r(t){return!t||t._ts&&r(t.parent)},Md=function(t){return t._repeat?Ns(t._tTime,t=t.duration()+t._rDelay)*t:0},Ns=function(t,e){var n=Math.floor(t=qe(t/e));return t&&n===t?n-1:n},Ja=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},tl=function(t){return t._end=qe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Me)||0))},el=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=qe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),tl(t),n._dirty||$r(n,t)),t},zd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ja(t.rawTime(),e),(!e._dur||Uo(0,e.totalDuration(),n)-e._tTime>Me)&&e.render(n,!0)),$r(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Me}},Oi=function(t,e,n,i){return e.parent&&Mr(e),e._start=qe((ji(n)?n:n||t!==De?fi(t,n,e):t._time)+e._delay),e._end=qe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Bd(t,e,"_first","_last",t._sort?"_start":0),Vh(e)||(t._recent=e),i||zd(t,e),t._ts<0&&el(t,t._tTime),t},kd=function(t,e){return(Kn.ScrollTrigger||Qa("scrollTrigger",e))&&Kn.ScrollTrigger.create(e,t)},Vd=function(t,e,n,i,s){if(au(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!hn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Nd!==Hn.frame)return yr.push(t),t._lazy=[s,i],1},I_=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Vh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},L_=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&I_(t)&&!(!t._initted&&Vh(t))||(t._ts<0||t._dp._ts<0)&&!Vh(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Uo(0,t._tDur,e),h=Ns(l,a),t._yoyo&&h&1&&(o=1-o),h!==Ns(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||hn||i||t._zTime===Me||!e&&t._zTime){if(!t._initted&&Vd(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Me:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&kh(t,e,n,!0),t._onUpdate&&!n&&$n(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&$n(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Mr(t,1),!n&&!hn&&($n(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},D_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Us=function(t,e,n,i){var s=t._repeat,o=qe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:qe(o*(s+1)+t._rDelay*s):o,a>0&&!i&&el(t,t._tTime=t._tDur*a),t.parent&&tl(t),n||$r(t.parent,t),t},bd=function(t){return t instanceof cn?$r(t):Us(t,t._dur)},N_={_start:0,endTime:Lo,totalDuration:Lo},fi=function r(t,e,n){var i=t.labels,s=t._recent||N_,o=t.duration()>=di?s.endTime(!1):t._dur,a,l,c;return Qe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(gn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Ro=function(t,e,n){var i=ji(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Wn(l.vars.inherit)&&l.parent;o.immediateRender=Wn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new He(e[0],o,e[s+1])},br=function(t,e){return t||t===0?e(t):e},Uo=function(t,e,n){return n<t?t:n>e?e:n},un=function(t,e){return!Qe(t)||!(e=b_.exec(t))?"":e[1]},U_=function(t,e,n){return br(n,function(i){return Uo(t,e,i)})},Gh=[].slice,Gd=function(t,e){return t&&Bi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Bi(t[0]))&&!t.nodeType&&t!==Fi},F_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Qe(i)&&!e||Gd(i,1)?(s=n).push.apply(s,pi(i)):n.push(i)})||n},pi=function(t,e,n){return Ie&&!e&&Ie.selector?Ie.selector(t):Qe(t)&&!n&&(Bh||!Fs())?Gh.call((e||Kh).querySelectorAll(t),0):gn(t)?F_(t,n):Gd(t)?Gh.call(t,0):t?[t]:[]},Hh=function(t){return t=pi(t)[0]||Io("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return pi(e,n.querySelectorAll?n:n===t?Io("Invalid scope")||Kh.createElement("div"):t)}},Hd=function(t){return t.sort(function(){return .5-Math.random()})},Wd=function(t){if(Oe(t))return t;var e=Bi(t)?t:{each:t},n=Kr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return Qe(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,m){var _=(m||e).length,p=o[_],g,M,A,y,S,T,E,v,w;if(!p){if(w=e.grid==="auto"?0:(e.grid||[1,di])[1],!w){for(E=-di;E<(E=m[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(p=o[_]=[],g=l?Math.min(w,_)*h-.5:i%w,M=w===di?0:l?_*d/w-.5:i/w|0,E=0,v=di,T=0;T<_;T++)A=T%w-g,y=M-(T/w|0),p[T]=S=c?Math.abs(c==="y"?y:A):Cd(A*A+y*y),S>E&&(E=S),S<v&&(v=S);i==="random"&&Hd(p),p.max=E-v,p.min=v,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(w>_?_-1:c?c==="y"?_/w:w:Math.max(w,_/w))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=un(e.amount||e.each)||0,n=n&&_<0?jd(n):n}return _=(p[u]-p.min)/p.max||0,qe(p.b+(n?n(_):_)*p.v)+p.u}},Wh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=qe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ji(n)?0:un(n))}},Xd=function(t,e){var n=gn(t),i,s;return!n&&Bi(t)&&(i=n=t.radius||di,t.values?(t=pi(t.values),(s=!ji(t[0]))&&(i*=i)):t=Wh(t.increment)),br(e,n?Oe(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=di,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,s||h===o||ji(o)?h:h+un(o)}:Wh(t))},Yd=function(t,e,n,i){return br(gn(t)?!e:n===!0?!!(n=0):!i,function(){return gn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},O_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},B_=function(t,e){return function(n){return t(parseFloat(n))+(e||un(n))}},z_=function(t,e,n){return Zd(t,e,0,1,n)},qd=function(t,e,n){return br(n,function(i){return t[~~e(i)]})},k_=function r(t,e,n){var i=e-t;return gn(t)?qd(t,r(0,t.length),e):br(n,function(s){return(i+(s-t)%i)%i+t})},V_=function r(t,e,n){var i=e-t,s=i*2;return gn(t)?qd(t,r(0,t.length-1),e):br(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Os=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?Pd:Oh),n+=t.substr(e,i-e)+Yd(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Zd=function(t,e,n,i,s){var o=e-t,a=i-n;return br(s,function(l){return n+((l-t)/o*a||0)})},G_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=Qe(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(gn(t)&&!gn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(m){m*=d;var _=Math.min(u,~~m);return h[_](m-_)},n=e}else i||(t=Ds(gn(t)?[]:{},t));if(!h){for(l in e)su.call(a,t,l,"get",e[l]);s=function(m){return hu(m,a)||(o?t.p:t)}}}return br(n,s)},Td=function(t,e,n){var i=t.labels,s=di,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},$n=function(t,e,n){var i=t.vars,s=i[e],o=Ie,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&yr.length&&qa(),a&&(Ie=a),h=l?s.apply(c,l):s.call(c),Ie=o,h},Eo=function(t){return Mr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!hn),t.progress()<1&&$n(t,"onInterrupt"),t},Is,Jd=[],$d=function(t){if(t)if(t=!t.name&&t.default||t,Zh()||t.headless){var e=t.name,n=Oe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Lo,render:hu,add:su,kill:r0,modifier:i0,rawVars:0},o={targetTest:0,get:0,getSetter:nl,aliases:{},register:0};if(Fs(),t!==i){if(Gn[e])return;Qn(i,Qn(Za(t,s),o)),Ds(i.prototype,Ds(s,Za(t,o))),Gn[i.prop=e]=i,t.targetTest&&(Wa.push(i),Qh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Dd(e,i),t.register&&t.register(_n,i,Pn)}else Jd.push(t)},Se=255,Ao={aqua:[0,Se,Se],lime:[0,Se,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Se],navy:[0,0,128],white:[Se,Se,Se],olive:[128,128,0],yellow:[Se,Se,0],orange:[Se,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Se,0,0],pink:[Se,192,203],cyan:[0,Se,Se],transparent:[Se,Se,Se,0]},Ih=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Se+.5|0},Kd=function(t,e,n){var i=t?ji(t)?[t>>16,t>>8&Se,t&Se]:0:Ao.black,s,o,a,l,c,h,d,u,f,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ao[t])i=Ao[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Se,i&Se,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Se,t&Se]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(Oh),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Ih(l+1/3,s,o),i[1]=Ih(l,s,o),i[2]=Ih(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Jh),n&&i.length<4&&(i[3]=1),i}else i=t.match(Oh)||Ao.transparent;i=i.map(Number)}return e&&!m&&(s=i[0]/Se,o=i[1]/Se,a=i[2]/Se,d=Math.max(s,o,a),u=Math.min(s,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Qd=function(t){var e=[],n=[],i=-1;return t.split(Qi).forEach(function(s){var o=s.match(jr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},wd=function(t,e,n){var i="",s=(t+i).match(Qi),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=Kd(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Qd(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Qi,"1").split(jr),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Qi),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},Qi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ao)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),H_=/hsl[a]?\(/,iu=function(t){var e=t.join(" "),n;if(Qi.lastIndex=0,Qi.test(e))return n=H_.test(e),t[1]=wd(t[1],n),t[0]=wd(t[0],n,Qd(t[1])),!0},Do,Hn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,d,u,f,m=function _(p){var g=r()-i,M=p===!0,A,y,S,T;if((g>t||g<0)&&(n+=g-e),i+=g,S=i-n,A=S-o,(A>0||M)&&(T=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,o+=A+(A>=s?4:s-A),y=1),M||(l=c(_)),y)for(f=0;f<a.length;f++)a[f](S,u,T,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Id&&(!Bh&&Zh()&&(Fi=Bh=window,Kh=Fi.document||{},Kn.gsap=_n,(Fi.gsapVersions||(Fi.gsapVersions=[])).push(_n.version),Ld(Ya||Fi.GreenSockGlobals||!Fi.gsap&&Fi||{}),Jd.forEach($d)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Do=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Do=0,c=Lo},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,g,M){var A=g?function(y,S,T,E){p(y,S,T,E),d.remove(A)}:p;return d.remove(p),a[M?"unshift":"push"](A),Fs(),A},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),Fs=function(){return!Do&&Hn.wake()},le={},W_=/^[\d.\-M][\d.\-,\s]/,X_=/["']/g,Y_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(X_,"").trim():+c,i=l.substr(a+1).trim();return e},q_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Z_=function(t){var e=(t+"").split("("),n=le[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Y_(e[1])]:q_(t).split(",").map(Fd)):le._CE&&W_.test(t)?le._CE("",t):n},jd=function(t){return function(e){return 1-t(1-e)}},tp=function r(t,e){for(var n=t._first,i;n;)n instanceof cn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Kr=function(t,e){return t&&(Oe(t)?t:le[t]||Z_(t))||e},es=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Rn(t,function(a){le[a]=Kn[a]=s,le[o=a.toLowerCase()]=n;for(var l in s)le[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=le[a+"."+l]=s[l]}),s},ep=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Lh=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Fh*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*M_((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:ep(a);return s=Fh/s,l.config=function(c,h){return r(t,c,h)},l},Dh=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:ep(n);return i.config=function(s){return r(t,s)},i};Rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;es(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});le.Linear.easeNone=le.none=le.Linear.easeIn;es("Elastic",Lh("in"),Lh("out"),Lh());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};es("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);es("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});es("Circ",function(r){return-(Cd(1-r*r)-1)});es("Sine",function(r){return r===1?1:-S_(r*v_)+1});es("Back",Dh("in"),Dh("out"),Dh());le.SteppedEase=le.steps=Kn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Me;return function(a){return((i*Uo(0,o,a)|0)+s)*n}}};Ls.ease=le["quad.out"];Rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return jh+=r+","+r+"Params,"});var ru=function(t,e){this.id=y_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:eu,this.set=e?e.getSetter:nl},No=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Us(this,+e.duration,1,1),this.data=e.data,Ie&&(this._ctx=Ie,Ie.data.push(this)),Do||Hn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Us(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Fs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(el(this,n),!s._dp||s.parent||zd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Oi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Me||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ud(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Md(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Md(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ns(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Me?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ja(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Me?0:this._rts,this.totalTime(Uo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),tl(this),R_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Me&&(this._tTime-=Me)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Oi(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Wn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ja(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=w_);var i=hn;return hn=n,nu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),hn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,bd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,bd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(fi(this,n),Wn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Wn(i)),this._dur||(this._zTime=-Me),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Me:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Me,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Me)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Oe(n)?n:Od,a=function(){var c=i.then;i.then=null,Oe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Eo(this)},r})();Qn(No.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Me,_prom:0,_ps:!1,_rts:1});var cn=(function(r){Ad(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Wn(n.sortChildren),De&&Oi(n.parent||De,Ki(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&kd(Ki(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Ro(0,arguments,this),this},e.from=function(i,s,o){return Ro(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Ro(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Co(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new He(i,s,fi(this,o),1),this},e.call=function(i,s,o){return Oi(this,He.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new He(i,o,fi(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Co(o).immediateRender=Wn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,d){return a.startAt=o,Co(a).immediateRender=Wn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,d)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:qe(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,m,_,p,g,M,A,y,S,T,E;if(this!==De&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,y=this._start,A=this._ts,g=!A,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(u=qe(h%p),h===l?(_=this._repeat,u=c):(S=qe(h/p),_=~~S,_&&_===S&&(u=c,_--),u>c&&(u=c)),S=Ns(this._tTime,p),!a&&this._tTime&&S!==_&&this._tTime-S*p-this._dur<=0&&(S=_),T&&_&1&&(u=c-u,E=1),_!==S&&!this._lock){var v=T&&S&1,w=v===(T&&_&1);if(_<S&&(v=!v),a=v?0:h%c?c:h,this._lock=1,this.render(a||(E?0:qe(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&$n(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;tp(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=D_(this,qe(a),qe(u)),M&&(h-=u-(u=M._start))),this._tTime=h,this._time=u,this._act=!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!S&&($n(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||u>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,o),u!==this._time||!this._ts&&!g){M=0,m&&(h+=this._zTime=-Me);break}}f=m}else{f=this._last;for(var C=i<0?i:u;f;){if(m=f._prev,(f._act||C<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,o||hn&&nu(f)),u!==this._time||!this._ts&&!g){M=0,m&&(h+=this._zTime=C?-Me:Me);break}}f=m}}if(M&&!s&&(this.pause(),M.render(u>=a?0:-Me)._zTime=u>=a?1:-1,this._ts))return this._start=y,tl(this),this.render(i,s,o);this._onUpdate&&!s&&$n(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Mr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&($n(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(ji(s)||(s=fi(this,s,i)),!(i instanceof No)){if(gn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Qe(i))return this.addLabel(i,s);if(Oe(i))i=He.delayedCall(0,i);else return this}return this!==i?Oi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-di);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof He?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Qe(i)?this.removeLabel(i):Oe(i)?this.killTweensOf(i):(i.parent===this&&ja(this,i),i===this._recent&&(this._recent=this._last),$r(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=qe(Hn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=fi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=He.delayedCall(0,s||Lo,o);return a.data="isPause",this._hasPause=1,Oi(this,a,fi(this,i))},e.removePause=function(i){var s=this._first;for(i=fi(this,i);s;)s._start===i&&s.data==="isPause"&&Mr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)vr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=pi(i),l=this._first,c=ji(s),h;l;)l instanceof He?E_(l._targets,a)&&(c?(!vr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=fi(o,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,m=He.to(o,Qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Me,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&Us(m,p,0,1).render(m._time,!0,!0),f=1}h&&h.apply(m,d||[])}},s));return u?m.render(0):m},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Qn({startAt:{time:fi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Td(this,fi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Td(this,fi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Me)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return $r(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),$r(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=di,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Oi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Us(o,o===De&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(De._ts&&(Ud(De,Ja(i,De)),Nd=Hn.frame),Hn.frame>=yd){yd+=Xn.autoSleep||120;var s=De._first;if((!s||!s._ts)&&Xn.autoSleep&&Hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Hn.sleep()}}},t})(No);Qn(cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var J_=function(t,e,n,i,s,o,a){var l=new Pn(this._pt,t,e,0,1,cu,null,s),c=0,h=0,d,u,f,m,_,p,g,M;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Os(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),u=n.match(Rh)||[];d=Rh.exec(i);)m=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?ts(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=Rh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,($h.test(i)||g)&&(l.e=0),this._pt=l,l},su=function(t,e,n,i,s,o,a,l,c,h){Oe(i)&&(i=i(s||0,t,o));var d=t[e],u=n!=="get"?n:Oe(d)?c?t[e.indexOf("set")||!Oe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=Oe(d)?c?t0:rp:lu,m;if(Qe(i)&&(~i.indexOf("random(")&&(i=Os(i)),i.charAt(1)==="="&&(m=ts(u,i)+(un(u)||0),(m||m===0)&&(i=m))),!h||u!==i||Xh)return!isNaN(u*i)&&i!==""?(m=new Pn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?n0:sp,0,f),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!d&&!(e in t)&&Qa(e,i),J_.call(this,t,e,u,i,f,l||Xn.stringFilter,c))},$_=function(t,e,n,i,s){if(Oe(t)&&(t=Po(t,s,e,n,i)),!Bi(t)||t.style&&t.nodeType||gn(t)||Rd(t))return Qe(t)?Po(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Po(t[a],s,e,n,i);return o},ou=function(t,e,n,i,s,o){var a,l,c,h;if(Gn[t]&&(a=new Gn[t]).init(s,a.rawVars?e[t]:$_(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Pn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Is))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},vr,Xh,au=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,m=t._dur,_=t._startAt,p=t._targets,g=t.parent,M=g&&g.data==="nested"?g.vars.targets:p,A=t._overwrite==="auto"&&!qh,y=t.timeline,S,T,E,v,w,C,D,I,z,L,B,X,k;if(y&&(!u||!s)&&(s="none"),t._ease=Kr(s,Ls.ease),t._yEase=d?jd(Kr(d===!0?s:d,Ls.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!y&&!!i.runBackwards,!y||u&&!i.stagger){if(I=p[0]?Sr(p[0]).harness:0,X=I&&i[I.prop],S=Za(i,Qh),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&m?Ha:T_),_._lazy=0),o){if(Mr(t._startAt=He.set(p,Qn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Wn(l),startAt:null,delay:0,onUpdate:c&&function(){return $n(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(hn||!a&&!f)&&t._startAt.revert(Ha),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!_){if(e&&(a=!1),E=Qn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Wn(l),immediateRender:a,stagger:0,parent:g},S),X&&(E[I.prop]=X),Mr(t._startAt=He.set(p,E)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(hn?t._startAt.revert(Ha):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Me,Me);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Wn(l)||l&&!m,T=0;T<p.length;T++){if(w=p[T],D=w._gsap||tu(p)[T]._gsap,t._ptLookup[T]=L={},zh[D.id]&&yr.length&&qa(),B=M===p?T:M.indexOf(w),I&&(z=new I).init(w,X||S,t,B,M)!==!1&&(t._pt=v=new Pn(t._pt,w,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(K){L[K]=v}),z.priority&&(C=1)),!I||X)for(E in S)Gn[E]&&(z=ou(E,S,t,B,w,M))?z.priority&&(C=1):L[E]=v=su.call(t,w,E,"get",S[E],B,M,0,i.stringFilter);t._op&&t._op[T]&&t.kill(w,t._op[T]),A&&t._pt&&(vr=t,De.killTweensOf(w,L,t.globalTime(e)),k=!t.parent,vr=0),t._pt&&l&&(zh[D.id]=1)}C&&uu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!k,u&&e<=0&&y.render(di,!0,!0)},K_=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Xh=1,t.vars[e]="+=0",au(t,a),Xh=0,l?Io(e+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Be(n)+un(d.e)),d.b&&(d.b=h.s+un(d.b))},Q_=function(t,e){var n=t[0]?Sr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Ds({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},j_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(gn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Po=function(t,e,n,i,s){return Oe(t)?t.call(e,n,i,s):Qe(t)&&~t.indexOf("random(")?Os(t):t},np=jh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ip={};Rn(np+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ip[r]=1});var He=(function(r){Ad(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Co(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,M=i.parent||De,A=(gn(n)||Rd(n)?ji(n[0]):"length"in i)?[n]:pi(n),y,S,T,E,v,w,C,D;if(a._targets=A.length?tu(A):Io("GSAP target "+n+" not found. https://gsap.com",!Xn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||u||Ga(c)||Ga(h)){if(i=a.vars,y=a.timeline=new cn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:A}),y.kill(),y.parent=y._dp=Ki(a),y._start=0,u||Ga(c)||Ga(h)){if(E=A.length,C=u&&Wd(u),Bi(u))for(v in u)~np.indexOf(v)&&(D||(D={}),D[v]=u[v]);for(S=0;S<E;S++)T=Za(i,ip),T.stagger=0,g&&(T.yoyoEase=g),D&&Ds(T,D),w=A[S],T.duration=+Po(c,Ki(a),S,w,A),T.delay=(+Po(h,Ki(a),S,w,A)||0)-a._delay,!u&&E===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),y.to(w,T,C?C(S,w,A):0),y._ease=le.none;y.duration()?c=h=0:a.timeline=0}else if(m){Co(Qn(y.vars.defaults,{ease:"none"})),y._ease=Kr(m.ease||i.ease||"none");var I=0,z,L,B;if(gn(m))m.forEach(function(X){return y.to(A,X,">")}),y.duration();else{T={};for(v in m)v==="ease"||v==="easeEach"||j_(v,m[v],T,m.easeEach);for(v in T)for(z=T[v].sort(function(X,k){return X.t-k.t}),I=0,S=0;S<z.length;S++)L=z[S],B={ease:L.e,duration:(L.t-(S?z[S-1].t:0))/100*c},B[v]=L.v,y.to(A,B,I),I+=B.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return f===!0&&!qh&&(vr=Ki(a),De.killTweensOf(A),vr=0),Oi(M,Ki(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!m&&a._start===qe(M._time)&&Wn(d)&&P_(Ki(a))&&M.data!=="nested")&&(a._tTime=-Me,a.render(Math.max(0,-h)||0)),p&&kd(Ki(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Me&&!h?l:i<Me?0:i,u,f,m,_,p,g,M,A,y;if(!c)L_(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,A=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(u=qe(d%_),d===l?(m=this._repeat,u=c):(p=qe(d/_),m=~~p,m&&m===p?(u=c,m--):u>c&&(u=c)),g=this._yoyo&&m&1,g&&(y=this._yEase,u=c-u),p=Ns(this._tTime,_),u===a&&!o&&this._initted&&m===p)return this._tTime=d,this;m!==p&&(A&&this._yEase&&tp(A,g),this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(qe(_*m),!0).invalidate()._lock=0))}if(!this._initted){if(Vd(this,h?i:u,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(y||this._ease)(u/c),this._from&&(this.ratio=M=1-M),!a&&d&&!s&&!p&&($n(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;A&&A.render(i<0?i:A._dur*A._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&kh(this,i,s,o),$n(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&$n(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&kh(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Mr(this,1),!s&&!(h&&!a)&&(d||a||g)&&($n(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Do||Hn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||au(this,c),h=this._ease(c/this._dur),K_(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(el(this,0),this.parent||Bd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Eo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!hn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,vr&&vr.vars.overwrite!==!0)._first||Eo(this),this.parent&&o!==this.timeline.totalDuration()&&Us(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?pi(i):a,c=this._ptLookup,h=this._pt,d,u,f,m,_,p,g;if((!s||s==="all")&&C_(a,l))return s==="all"&&(this._pt=0),Eo(this);for(d=this._op=this._op||[],s!=="all"&&(Qe(s)&&(_={},Rn(s,function(M){return _[M]=1}),s=_),s=Q_(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],s==="all"?(d[g]=s,m=u,f={}):(f=d[g]=d[g]||{},m=s);for(_ in m)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&ja(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Eo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ro(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Ro(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return De.killTweensOf(i,s,o)},t})(No);Qn(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Rn("staggerTo,staggerFrom,staggerFromTo",function(r){He[r]=function(){var t=new cn,e=Gh.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var lu=function(t,e,n){return t[e]=n},rp=function(t,e,n){return t[e](n)},t0=function(t,e,n,i){return t[e](i.fp,n)},e0=function(t,e,n){return t.setAttribute(e,n)},nl=function(t,e){return Oe(t[e])?rp:Ka(t[e])&&t.setAttribute?e0:lu},sp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},n0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},cu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},hu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},i0=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},r0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ja(this,e,"_pt"):e.dep||(n=1),e=i;return!n},s0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},uu=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Pn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||sp,this.d=l||this,this.set=c||lu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=s0,this.m=n,this.mt=s,this.tween=i},r})();Rn(jh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Qh[r]=1});Kn.TweenMax=Kn.TweenLite=He;Kn.TimelineLite=Kn.TimelineMax=cn;De=new cn({sortChildren:!1,defaults:Ls,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xn.stringFilter=iu;var Qr=[],Xa={},o0=[],Ed=0,a0=0,Nh=function(t){return(Xa[t]||o0).map(function(e){return e()})},Yh=function(){var t=Date.now(),e=[];t-Ed>2&&(Nh("matchMediaInit"),Qr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Fi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Nh("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ed=t,Nh("matchMedia"))},op=(function(){function r(e,n){this.selector=n&&Hh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=a0++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Oe(n)&&(s=i,i=n,n=Oe);var o=this,a=function(){var c=Ie,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=Hh(s)),Ie=o,d=i.apply(o,arguments),Oe(d)&&o._r.push(d),Ie=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Oe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ie;Ie=null,n(this),Ie=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof He&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof He)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Qr.length;o--;)Qr[o].id===this.id&&Qr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),l0=(function(){function r(e){this.contexts=[],this.scope=e,Ie&&Ie.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Bi(n)||(n={matches:n});var o=new op(0,s||this.scope),a=o.conditions={},l,c,h;Ie&&!o.selector&&(o.selector=Ie.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Fi.matchMedia(n[c]),l&&(Qr.indexOf(o)<0&&Qr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Yh):l.addEventListener("change",Yh)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),$a={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return $d(i)})},timeline:function(t){return new cn(t)},getTweensOf:function(t,e){return De.getTweensOf(t,e)},getProperty:function(t,e,n,i){Qe(t)&&(t=pi(t)[0]);var s=Sr(t||{}).get,o=n?Od:Fd;return n==="native"&&(n=""),t&&(e?o((Gn[e]&&Gn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Gn[a]&&Gn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=pi(t),t.length>1){var i=t.map(function(h){return _n.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var o=Gn[e],a=Sr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Is._pt=0,d.init(t,n?h+n:h,Is,0,[t]),d.render(1,d),Is._pt&&hu(1,Is)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=_n.to(t,Qn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return De.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Kr(t.ease,Ls.ease)),Sd(Ls,t||{})},config:function(t){return Sd(Xn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Gn[a]&&!Kn[a]&&Io(e+" effect requires "+a+" plugin.")}),Ph[e]=function(a,l,c){return n(pi(a),Qn(l||{},s),c)},o&&(cn.prototype[e]=function(a,l,c){return this.add(Ph[e](a,Bi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){le[t]=Kr(e)},parseEase:function(t,e){return arguments.length?Kr(t,e):le},getById:function(t){return De.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new cn(t),i,s;for(n.smoothChildTiming=Wn(t.smoothChildTiming),De.remove(n),n._dp=0,n._time=n._tTime=De._time,i=De._first;i;)s=i._next,(e||!(!i._dur&&i instanceof He&&i.vars.onComplete===i._targets[0]))&&Oi(n,i,i._start-i._delay),i=s;return Oi(De,n,0),n},context:function(t,e){return t?new op(t,e):Ie},matchMedia:function(t){return new l0(t)},matchMediaRefresh:function(){return Qr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Yh()},addEventListener:function(t,e){var n=Xa[t]||(Xa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Xa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:k_,wrapYoyo:V_,distribute:Wd,random:Yd,snap:Xd,normalize:z_,getUnit:un,clamp:U_,splitColor:Kd,toArray:pi,selector:Hh,mapRange:Zd,pipe:O_,unitize:B_,interpolate:G_,shuffle:Hd},install:Ld,effects:Ph,ticker:Hn,updateRoot:cn.updateRoot,plugins:Gn,globalTimeline:De,core:{PropTween:Pn,globals:Dd,Tween:He,Timeline:cn,Animation:No,getCache:Sr,_removeLinkedListItem:ja,reverting:function(){return hn},context:function(t){return t&&Ie&&(Ie.data.push(t),t._ctx=Ie),Ie},suppressOverwrites:function(t){return qh=t}}};Rn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return $a[r]=He[r]});Hn.add(cn.updateRoot);Is=$a.to({},{duration:0});var c0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},h0=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=c0(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Uh=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Qe(s)&&(l={},Rn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}h0(a,s)}}}},_n=$a.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)hn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Uh("roundProps",Wh),Uh("modifiers"),Uh("snap",Xd))||$a;He.version=cn.version=_n.version="3.13.0";Id=1;Zh()&&Fs();var u0=le.Power0,f0=le.Power1,d0=le.Power2,p0=le.Power3,m0=le.Power4,g0=le.Linear,_0=le.Quad,x0=le.Cubic,v0=le.Quart,y0=le.Quint,S0=le.Strong,M0=le.Elastic,b0=le.Back,T0=le.SteppedEase,w0=le.Bounce,E0=le.Sine,A0=le.Expo,C0=le.Circ;var ap,Tr,zs,_u,ss,R0,lp,xu,P0=function(){return typeof window<"u"},er={},rs=180/Math.PI,ks=Math.PI/180,Bs=Math.atan2,cp=1e8,vu=/([A-Z])/g,I0=/(left|right|width|margin|padding|x)/i,L0=/[\s,\(]\S/,zi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},du=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},D0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},N0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},U0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},_p=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},xp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},F0=function(t,e,n){return t.style[e]=n},O0=function(t,e,n){return t.style.setProperty(e,n)},B0=function(t,e,n){return t._gsap[e]=n},z0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},k0=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},V0=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ne="transform",Yn=Ne+"Origin",G0=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in er&&s){if(this.tfm=this.tfm||{},t!=="transform")t=zi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=tr(i,a)}):this.tfm[t]=o.x?o[t]:tr(i,t),t===Yn&&(this.tfm.zOrigin=o.zOrigin);else return zi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Ne)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Yn,e,"")),t=Ne}(s||e)&&this.props.push(t,e,s[t])},vp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},H0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(vu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=xu(),(!s||!s.isStart)&&!n[Ne]&&(vp(n),i.zOrigin&&n[Yn]&&(n[Yn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},yp=function(t,e){var n={target:t,props:[],revert:H0,save:G0};return t._gsap||_n.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Sp,pu=function(t,e){var n=Tr.createElementNS?Tr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Tr.createElement(t);return n&&n.style?n:Tr.createElement(t)},mi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(vu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Vs(e)||e,1)||""},hp="O,Moz,ms,Ms,Webkit".split(","),Vs=function(t,e,n){var i=e||ss,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(hp[o]+t in s););return o<0?null:(o===3?"ms":o>=0?hp[o]:"")+t},mu=function(){P0()&&window.document&&(ap=window,Tr=ap.document,zs=Tr.documentElement,ss=pu("div")||{style:{}},R0=pu("div"),Ne=Vs(Ne),Yn=Ne+"Origin",ss.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Sp=!!Vs("perspective"),xu=_n.core.reverting,_u=1)},up=function(t){var e=t.ownerSVGElement,n=pu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),zs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),zs.removeChild(n),s},fp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Mp=function(t){var e,n;try{e=t.getBBox()}catch{e=up(t),n=1}return e&&(e.width||e.height)||n||(e=up(t)),e&&!e.width&&!e.x&&!e.y?{x:+fp(t,["x","cx","x1"])||0,y:+fp(t,["y","cy","y1"])||0,width:0,height:0}:e},bp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Mp(t))},os=function(t,e){if(e){var n=t.style,i;e in er&&e!==Yn&&(e=Ne),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(vu,"-$1").toLowerCase())):n.removeAttribute(e)}},wr=function(t,e,n,i,s,o){var a=new Pn(t._pt,e,n,0,1,o?xp:_p);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},dp={deg:1,rad:1,turn:1},W0={grid:1,flex:1},Er=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ss.style,l=I0.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",m,_,p,g;if(i===o||!s||dp[i]||dp[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),g=t.getCTM&&bp(t),(f||o==="%")&&(er[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],Be(f?s/m*d:s/100*m);if(a[l?"width":"height"]=d+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Tr||!_.appendChild)&&(_=Tr.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Hn.time&&!p.uncache)return Be(s/p.width*d);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=d+i,m=t[h],M?t.style[e]=M:os(t,e)}else(f||o==="%")&&!W0[mi(_,"display")]&&(a.position=mi(t,"position")),_===t&&(a.position="static"),_.appendChild(ss),m=ss[h],_.removeChild(ss),a.position="absolute";return l&&f&&(p=Sr(_),p.time=Hn.time,p.width=_[h]),Be(u?m*s/d:m&&s?d/m*s:0)},tr=function(t,e,n,i){var s;return _u||mu(),e in zi&&e!=="transform"&&(e=zi[e],~e.indexOf(",")&&(e=e.split(",")[0])),er[e]&&e!=="transform"?(s=Bo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:rl(mi(t,Yn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=il[e]&&il[e](t,e,n)||mi(t,e)||eu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Er(t,e,s,n)+n:s},X0=function(t,e,n,i){if(!n||n==="none"){var s=Vs(e,t,1),o=s&&mi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=mi(t,"borderTopColor"))}var a=new Pn(this._pt,t.style,e,0,1,cu),l=0,c=0,h,d,u,f,m,_,p,g,M,A,y,S;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=mi(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=mi(t,e)||i,_?t.style[e]=_:os(t,e)),h=[n,i],iu(h),n=h[0],i=h[1],u=n.match(jr)||[],S=i.match(jr)||[],S.length){for(;d=jr.exec(i);)p=d[0],M=i.substring(l,d.index),m?m=(m+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(m=1),p!==(_=u[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),p.charAt(1)==="="&&(p=ts(f,p)+y),g=parseFloat(p),A=p.substr((g+"").length),l=jr.lastIndex-A.length,A||(A=A||Xn.units[e]||y,l===i.length&&(i+=A,a.e+=A)),y!==A&&(f=Er(t,e,_,A)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:g-f,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?xp:_p;return $h.test(i)&&(a.e=0),this._pt=a,a},pp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Y0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=pp[n]||n,e[1]=pp[i]||i,e.join(" ")},q0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],er[a]&&(l=1,a=a==="transformOrigin"?Yn:Ne),os(n,a);l&&(os(n,Ne),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Bo(n,1),o.uncache=1,vp(i)))}},il={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Pn(t._pt,e,n,0,0,q0);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Oo=[1,0,0,1,0,0],Tp={},wp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},mp=function(t){var e=mi(t,Ne);return wp(e)?Oo:e.substr(7).match(Jh).map(Be)},yu=function(t,e){var n=t._gsap||Sr(t),i=t.style,s=mp(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Oo:s):(s===Oo&&!t.offsetParent&&t!==zs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,zs.appendChild(t)),s=mp(t),l?i.display=l:os(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):zs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},gu=function(t,e,n,i,s,o){var a=t._gsap,l=s||yu(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],m=l[1],_=l[2],p=l[3],g=l[4],M=l[5],A=e.split(" "),y=parseFloat(A[0])||0,S=parseFloat(A[1])||0,T,E,v,w;n?l!==Oo&&(E=f*p-m*_)&&(v=y*(p/E)+S*(-_/E)+(_*M-p*g)/E,w=y*(-m/E)+S*(f/E)-(f*M-m*g)/E,y=v,S=w):(T=Mp(t),y=T.x+(~A[0].indexOf("%")?y/100*T.width:y),S=T.y+(~(A[1]||A[0]).indexOf("%")?S/100*T.height:S)),i||i!==!1&&a.smooth?(g=y-c,M=S-h,a.xOffset=d+(g*f+M*_)-g,a.yOffset=u+(g*m+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=S,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Yn]="0px 0px",o&&(wr(o,a,"xOrigin",c,y),wr(o,a,"yOrigin",h,S),wr(o,a,"xOffset",d,a.xOffset),wr(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+S)},Bo=function(t,e){var n=t._gsap||new ru(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=mi(t,Yn)||"0",h,d,u,f,m,_,p,g,M,A,y,S,T,E,v,w,C,D,I,z,L,B,X,k,K,q,R,j,St,Mt,Vt,kt;return h=d=u=_=p=g=M=A=y=0,f=m=1,n.svg=!!(t.getCTM&&bp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ne]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ne]!=="none"?l[Ne]:"")),i.scale=i.rotate=i.translate="none"),E=yu(t,n.svg),n.svg&&(n.uncache?(K=t.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),gu(t,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,E)),S=n.xOrigin||0,T=n.yOrigin||0,E!==Oo&&(D=E[0],I=E[1],z=E[2],L=E[3],h=B=E[4],d=X=E[5],E.length===6?(f=Math.sqrt(D*D+I*I),m=Math.sqrt(L*L+z*z),_=D||I?Bs(I,D)*rs:0,M=z||L?Bs(z,L)*rs+_:0,M&&(m*=Math.abs(Math.cos(M*ks))),n.svg&&(h-=S-(S*D+T*z),d-=T-(S*I+T*L))):(kt=E[6],Mt=E[7],R=E[8],j=E[9],St=E[10],Vt=E[11],h=E[12],d=E[13],u=E[14],v=Bs(kt,St),p=v*rs,v&&(w=Math.cos(-v),C=Math.sin(-v),k=B*w+R*C,K=X*w+j*C,q=kt*w+St*C,R=B*-C+R*w,j=X*-C+j*w,St=kt*-C+St*w,Vt=Mt*-C+Vt*w,B=k,X=K,kt=q),v=Bs(-z,St),g=v*rs,v&&(w=Math.cos(-v),C=Math.sin(-v),k=D*w-R*C,K=I*w-j*C,q=z*w-St*C,Vt=L*C+Vt*w,D=k,I=K,z=q),v=Bs(I,D),_=v*rs,v&&(w=Math.cos(v),C=Math.sin(v),k=D*w+I*C,K=B*w+X*C,I=I*w-D*C,X=X*w-B*C,D=k,B=K),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),f=Be(Math.sqrt(D*D+I*I+z*z)),m=Be(Math.sqrt(X*X+kt*kt)),v=Bs(B,X),M=Math.abs(v)>2e-4?v*rs:0,y=Vt?1/(Vt<0?-Vt:Vt):0),n.svg&&(k=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!wp(mi(t,Ne)),k&&t.setAttribute("transform",k))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Be(f),n.scaleY=Be(m),n.rotation=Be(_)+a,n.rotationX=Be(p)+a,n.rotationY=Be(g)+a,n.skewX=M+a,n.skewY=A+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Yn]=rl(c)),n.xOffset=n.yOffset=0,n.force3D=Xn.force3D,n.renderTransform=n.svg?J0:Sp?Ep:Z0,n.uncache=0,n},rl=function(t){return(t=t.split(" "))[0]+" "+t[1]},fu=function(t,e,n){var i=un(e);return Be(parseFloat(e)+parseFloat(Er(t,"x",n+"px",i)))+i},Z0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Ep(t,e)},ns="0deg",Fo="0px",is=") ",Ep=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,M=n.target,A=n.zOrigin,y="",S=g==="auto"&&t&&t!==1||g===!0;if(A&&(d!==ns||h!==ns)){var T=parseFloat(h)*ks,E=Math.sin(T),v=Math.cos(T),w;T=parseFloat(d)*ks,w=Math.cos(T),o=fu(M,o,E*w*-A),a=fu(M,a,-Math.sin(T)*-A),l=fu(M,l,v*w*-A+A)}p!==Fo&&(y+="perspective("+p+is),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(S||o!==Fo||a!==Fo||l!==Fo)&&(y+=l!==Fo||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+is),c!==ns&&(y+="rotate("+c+is),h!==ns&&(y+="rotateY("+h+is),d!==ns&&(y+="rotateX("+d+is),(u!==ns||f!==ns)&&(y+="skew("+u+", "+f+is),(m!==1||_!==1)&&(y+="scale("+m+", "+_+is),M.style[Ne]=y||"translate(0, 0)"},J0=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,M=n.forceCSS,A=parseFloat(o),y=parseFloat(a),S,T,E,v,w;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ks,c*=ks,S=Math.cos(l)*d,T=Math.sin(l)*d,E=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(h*=ks,w=Math.tan(c-h),w=Math.sqrt(1+w*w),E*=w,v*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),S*=w,T*=w)),S=Be(S),T=Be(T),E=Be(E),v=Be(v)):(S=d,v=u,T=E=0),(A&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(A=Er(f,"x",o,"px"),y=Er(f,"y",a,"px")),(m||_||p||g)&&(A=Be(A+m-(m*S+_*E)+p),y=Be(y+_-(m*T+_*v)+g)),(i||s)&&(w=f.getBBox(),A=Be(A+i/100*w.width),y=Be(y+s/100*w.height)),w="matrix("+S+","+T+","+E+","+v+","+A+","+y+")",f.setAttribute("transform",w),M&&(f.style[Ne]=w)},$0=function(t,e,n,i,s){var o=360,a=Qe(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?rs:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*cp)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*cp)%o-~~(c/o)*o)),t._pt=u=new Pn(t._pt,e,n,i,c,D0),u.e=h,u.u="deg",t._props.push(n),u},gp=function(t,e){for(var n in e)t[n]=e[n];return t},K0=function(t,e,n){var i=gp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ne]=e,a=Bo(n,1),os(n,Ne),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ne],o[Ne]=e,a=Bo(n,1),o[Ne]=c);for(l in er)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=un(c),m=un(h),d=f!==m?Er(n,l,c,m):parseFloat(c),u=parseFloat(h),t._pt=new Pn(t._pt,a,l,d,u-d,du),t._pt.u=m||0,t._props.push(l));gp(a,i)};Rn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});il[t>1?"border"+r:r]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(m){return tr(a,m,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(m,_){return f[m]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var Su={name:"css",register:mu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,m,_,p,g,M,A,y,S,T,E,v;_u||mu(),this.styles=this.styles||yp(t),v=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Gn[_]&&ou(_,e,n,i,t,s)))){if(f=typeof h,m=il[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Os(h)),m)m(this,t,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Qi.lastIndex=0,Qi.test(c)||(p=un(c),g=un(h)),g?p!==g&&(c=Er(t,_,c,g)+g):p&&(h+=p),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),v.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Qe(c)&&~c.indexOf("random(")&&(c=Os(c)),un(c+"")||c==="auto"||(c+=Xn.units[_]||un(tr(t,_))||""),(c+"").charAt(1)==="="&&(c=tr(t,_))):c=tr(t,_),u=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),d=parseFloat(h),_ in zi&&(_==="autoAlpha"&&(u===1&&tr(t,"visibility")==="hidden"&&d&&(u=0),v.push("visibility",0,a.visibility),wr(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=zi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in er,A){if(this.styles.save(_),f==="string"&&h.substring(0,6)==="var(--"&&(h=mi(t,h.substring(4,h.indexOf(")"))),d=parseFloat(h)),y||(S=t._gsap,S.renderTransform&&!e.parseTransform||Bo(t,e.parseTransform),T=e.smoothOrigin!==!1&&S.smooth,y=this._pt=new Pn(this._pt,a,Ne,0,1,S.renderTransform,S,0,-1),y.dep=1),_==="scale")this._pt=new Pn(this._pt,S,"scaleY",S.scaleY,(M?ts(S.scaleY,M+d):d)-S.scaleY||0,du),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(Yn,0,a[Yn]),h=Y0(h),S.svg?gu(t,h,0,T,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==S.zOrigin&&wr(this,S,"zOrigin",S.zOrigin,g),wr(this,a,_,rl(c),rl(h)));continue}else if(_==="svgOrigin"){gu(t,h,1,T,0,this);continue}else if(_ in Tp){$0(this,S,_,u,M?ts(u,M+h):h);continue}else if(_==="smoothOrigin"){wr(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){K0(this,h,t);continue}}else _ in a||(_=Vs(_)||_);if(A||(d||d===0)&&(u||u===0)&&!L0.test(h)&&_ in a)p=(c+"").substr((u+"").length),d||(d=0),g=un(h)||(_ in Xn.units?Xn.units[_]:p),p!==g&&(u=Er(t,_,c,g)),this._pt=new Pn(this._pt,A?S:a,_,u,(M?ts(u,M+d):d)-u,!A&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?U0:du),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=N0);else if(_ in a)X0.call(this,t,_,c,M?M+h:h);else if(_ in t)this.add(t,_,c||t[_],M?M+h:h,i,s);else if(_!=="parseTransform"){Qa(_,h);continue}A||(_ in a?v.push(_,0,a[_]):typeof t[_]=="function"?v.push(_,2,t[_]()):v.push(_,1,c||t[_])),o.push(_)}}E&&uu(this)},render:function(t,e){if(e.tween._time||!xu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:tr,aliases:zi,getSetter:function(t,e,n){var i=zi[e];return i&&i.indexOf(",")<0&&(e=i),e in er&&e!==Yn&&(t._gsap.x||tr(t,"x"))?n&&lp===n?e==="scale"?z0:B0:(lp=n||{})&&(e==="scale"?k0:V0):t.style&&!Ka(t.style[e])?F0:~e.indexOf("-")?O0:nl(t,e)},core:{_removeProperty:os,_getMatrix:yu}};_n.utils.checkPrefix=Vs;_n.core.getStyleSaver=yp;(function(r,t,e,n){var i=Rn(r+","+t+","+e,function(s){er[s]=1});Rn(t,function(s){Xn.units[s]="deg",Tp[s]=1}),zi[i[13]]=r+","+t,Rn(n,function(s){var o=s.split(":");zi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Xn.units[r]="px"});_n.registerPlugin(Su);var In=_n.registerPlugin(Su)||_n,cT=In.core.Tween;function Ap(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Q0(r,t,e){return t&&Ap(r.prototype,t),e&&Ap(r,e),r}var fn,al,j0,jn,Ar,Cr,Hs,Rp,as,ko,Pp,nr,bi,Ip,Lp=function(){return fn||typeof window<"u"&&(fn=window.gsap)&&fn.registerPlugin&&fn},Dp=1,Gs=[],te=[],Ti=[],Vo=Date.now,Mu=function(t,e){return e},tx=function(){var t=ko.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,te),i.push.apply(i,Ti),te=n,Ti=i,Mu=function(o,a){return e[o](a)}},rr=function(t,e){return~Ti.indexOf(t)&&Ti[Ti.indexOf(t)+1][e]},Go=function(t){return!!~Pp.indexOf(t)},Dn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Ln=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},sl="scrollLeft",ol="scrollTop",bu=function(){return nr&&nr.isPressed||te.cache++},ll=function(t,e){var n=function i(s){if(s||s===0){Dp&&(jn.history.scrollRestoration="manual");var o=nr&&nr.isPressed;s=i.v=Math.round(s)||(nr&&nr.iOS?1:0),t(s),i.cacheID=te.cache,o&&Mu("ss",s)}else(e||te.cache!==i.cacheID||Mu("ref"))&&(i.cacheID=te.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},xn={s:sl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ll(function(r){return arguments.length?jn.scrollTo(r,Ze.sc()):jn.pageXOffset||Ar[sl]||Cr[sl]||Hs[sl]||0})},Ze={s:ol,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:xn,sc:ll(function(r){return arguments.length?jn.scrollTo(xn.sc(),r):jn.pageYOffset||Ar[ol]||Cr[ol]||Hs[ol]||0})},Nn=function(t,e){return(e&&e._ctx&&e._ctx.selector||fn.utils.toArray)(t)[0]||(typeof t=="string"&&fn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},ex=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},ir=function(t,e){var n=e.s,i=e.sc;Go(t)&&(t=Ar.scrollingElement||Cr);var s=te.indexOf(t),o=i===Ze.sc?1:2;!~s&&(s=te.push(t)-1),te[s+o]||Dn(t,"scroll",bu);var a=te[s+o],l=a||(te[s+o]=ll(rr(t,n),!0)||(Go(t)?i:ll(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=fn.getProperty(t,"scrollBehavior")==="smooth"),l},cl=function(t,e,n){var i=t,s=t,o=Vo(),a=o,l=e||50,c=Math.max(500,l*3),h=function(m,_){var p=Vo();_||p-o>l?(s=i,i=m,a=o,o=p):n?i+=m:i=s+(m-s)/(p-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},u=function(m){var _=a,p=s,g=Vo();return(m||m===0)&&m!==i&&h(m),o===a||g-a>c?0:(i+(n?p:-p))/((n?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},zo=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Cp=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Np=function(){ko=fn.core.globals().ScrollTrigger,ko&&ko.core&&tx()},Up=function(t){return fn=t||Lp(),!al&&fn&&typeof document<"u"&&document.body&&(jn=window,Ar=document,Cr=Ar.documentElement,Hs=Ar.body,Pp=[jn,Ar,Cr,Hs],j0=fn.utils.clamp,Ip=fn.core.context||function(){},as="onpointerenter"in Hs?"pointer":"mouse",Rp=ze.isTouch=jn.matchMedia&&jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,bi=ze.eventTypes=("ontouchstart"in Cr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Cr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Dp=0},500),Np(),al=1),al};xn.op=Ze;te.cache=0;var ze=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){al||Up(fn)||console.warn("Please gsap.registerPlugin(Observer)"),ko||Np();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,M=n.onDrag,A=n.onPress,y=n.onRelease,S=n.onRight,T=n.onLeft,E=n.onUp,v=n.onDown,w=n.onChangeX,C=n.onChangeY,D=n.onChange,I=n.onToggleX,z=n.onToggleY,L=n.onHover,B=n.onHoverEnd,X=n.onMove,k=n.ignoreCheck,K=n.isNormalizer,q=n.onGestureStart,R=n.onGestureEnd,j=n.onWheel,St=n.onEnable,Mt=n.onDisable,Vt=n.onClick,kt=n.scrollSpeed,Ht=n.capture,J=n.allowClicks,tt=n.lockAxis,_t=n.onLockAxis;this.target=a=Nn(a)||Cr,this.vars=n,f&&(f=fn.utils.toArray(f)),i=i||1e-9,s=s||0,m=m||1,kt=kt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(jn.getComputedStyle(Hs).lineHeight)||22);var Ot,mt,Bt,zt,It,Yt,Kt,V=this,ne=0,_e=0,Le=n.passive||!h&&n.passive!==!1,qt=ir(a,xn),de=ir(a,Ze),F=qt(),Pe=de(),Wt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&bi[0]==="pointerdown",P=Go(a),x=a.ownerDocument||Ar,O=[0,0,0],H=[0,0,0],$=0,ct=function(){return $=Vo()},ot=function(rt,Nt){return(V.event=rt)&&f&&ex(rt.target,f)||Nt&&Wt&&rt.pointerType!=="touch"||k&&k(rt,Nt)},Q=function(){V._vx.reset(),V._vy.reset(),mt.pause(),d&&d(V)},nt=function(){var rt=V.deltaX=Cp(O),Nt=V.deltaY=Cp(H),st=Math.abs(rt)>=i,Ut=Math.abs(Nt)>=i;D&&(st||Ut)&&D(V,rt,Nt,O,H),st&&(S&&V.deltaX>0&&S(V),T&&V.deltaX<0&&T(V),w&&w(V),I&&V.deltaX<0!=ne<0&&I(V),ne=V.deltaX,O[0]=O[1]=O[2]=0),Ut&&(v&&V.deltaY>0&&v(V),E&&V.deltaY<0&&E(V),C&&C(V),z&&V.deltaY<0!=_e<0&&z(V),_e=V.deltaY,H[0]=H[1]=H[2]=0),(zt||Bt)&&(X&&X(V),Bt&&(p&&Bt===1&&p(V),M&&M(V),Bt=0),zt=!1),Yt&&!(Yt=!1)&&_t&&_t(V),It&&(j(V),It=!1),Ot=0},ft=function(rt,Nt,st){O[st]+=rt,H[st]+=Nt,V._vx.update(rt),V._vy.update(Nt),c?Ot||(Ot=requestAnimationFrame(nt)):nt()},Et=function(rt,Nt){tt&&!Kt&&(V.axis=Kt=Math.abs(rt)>Math.abs(Nt)?"x":"y",Yt=!0),Kt!=="y"&&(O[2]+=rt,V._vx.update(rt,!0)),Kt!=="x"&&(H[2]+=Nt,V._vy.update(Nt,!0)),c?Ot||(Ot=requestAnimationFrame(nt)):nt()},dt=function(rt){if(!ot(rt,1)){rt=zo(rt,h);var Nt=rt.clientX,st=rt.clientY,Ut=Nt-V.x,At=st-V.y,Zt=V.isDragging;V.x=Nt,V.y=st,(Zt||(Ut||At)&&(Math.abs(V.startX-Nt)>=s||Math.abs(V.startY-st)>=s))&&(Bt=Zt?2:1,Zt||(V.isDragging=!0),Et(Ut,At))}},ut=V.onPress=function(at){ot(at,1)||at&&at.button||(V.axis=Kt=null,mt.pause(),V.isPressed=!0,at=zo(at),ne=_e=0,V.startX=V.x=at.clientX,V.startY=V.y=at.clientY,V._vx.reset(),V._vy.reset(),Dn(K?a:x,bi[1],dt,Le,!0),V.deltaX=V.deltaY=0,A&&A(V))},lt=V.onRelease=function(at){if(!ot(at,1)){Ln(K?a:x,bi[1],dt,!0);var rt=!isNaN(V.y-V.startY),Nt=V.isDragging,st=Nt&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Ut=zo(at);!st&&rt&&(V._vx.reset(),V._vy.reset(),h&&J&&fn.delayedCall(.08,function(){if(Vo()-$>300&&!at.defaultPrevented){if(at.target.click)at.target.click();else if(x.createEvent){var At=x.createEvent("MouseEvents");At.initMouseEvent("click",!0,!0,jn,1,Ut.screenX,Ut.screenY,Ut.clientX,Ut.clientY,!1,!1,!1,!1,0,null),at.target.dispatchEvent(At)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,d&&Nt&&!K&&mt.restart(!0),Bt&&nt(),g&&Nt&&g(V),y&&y(V,st)}},Lt=function(rt){return rt.touches&&rt.touches.length>1&&(V.isGesturing=!0)&&q(rt,V.isDragging)},Ft=function(){return(V.isGesturing=!1)||R(V)},N=function(rt){if(!ot(rt)){var Nt=qt(),st=de();ft((Nt-F)*kt,(st-Pe)*kt,1),F=Nt,Pe=st,d&&mt.restart(!0)}},ht=function(rt){if(!ot(rt)){rt=zo(rt,h),j&&(It=!0);var Nt=(rt.deltaMode===1?l:rt.deltaMode===2?jn.innerHeight:1)*m;ft(rt.deltaX*Nt,rt.deltaY*Nt,0),d&&!K&&mt.restart(!0)}},et=function(rt){if(!ot(rt)){var Nt=rt.clientX,st=rt.clientY,Ut=Nt-V.x,At=st-V.y;V.x=Nt,V.y=st,zt=!0,d&&mt.restart(!0),(Ut||At)&&Et(Ut,At)}},pt=function(rt){V.event=rt,L(V)},xt=function(rt){V.event=rt,B(V)},it=function(rt){return ot(rt)||zo(rt,h)&&Vt(V)};mt=V._dc=fn.delayedCall(u||.25,Q).pause(),V.deltaX=V.deltaY=0,V._vx=cl(0,50,!0),V._vy=cl(0,50,!0),V.scrollX=qt,V.scrollY=de,V.isDragging=V.isGesturing=V.isPressed=!1,Ip(this),V.enable=function(at){return V.isEnabled||(Dn(P?x:a,"scroll",bu),o.indexOf("scroll")>=0&&Dn(P?x:a,"scroll",N,Le,Ht),o.indexOf("wheel")>=0&&Dn(a,"wheel",ht,Le,Ht),(o.indexOf("touch")>=0&&Rp||o.indexOf("pointer")>=0)&&(Dn(a,bi[0],ut,Le,Ht),Dn(x,bi[2],lt),Dn(x,bi[3],lt),J&&Dn(a,"click",ct,!0,!0),Vt&&Dn(a,"click",it),q&&Dn(x,"gesturestart",Lt),R&&Dn(x,"gestureend",Ft),L&&Dn(a,as+"enter",pt),B&&Dn(a,as+"leave",xt),X&&Dn(a,as+"move",et)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=zt=Bt=!1,V._vx.reset(),V._vy.reset(),F=qt(),Pe=de(),at&&at.type&&ut(at),St&&St(V)),V},V.disable=function(){V.isEnabled&&(Gs.filter(function(at){return at!==V&&Go(at.target)}).length||Ln(P?x:a,"scroll",bu),V.isPressed&&(V._vx.reset(),V._vy.reset(),Ln(K?a:x,bi[1],dt,!0)),Ln(P?x:a,"scroll",N,Ht),Ln(a,"wheel",ht,Ht),Ln(a,bi[0],ut,Ht),Ln(x,bi[2],lt),Ln(x,bi[3],lt),Ln(a,"click",ct,!0),Ln(a,"click",it),Ln(x,"gesturestart",Lt),Ln(x,"gestureend",Ft),Ln(a,as+"enter",pt),Ln(a,as+"leave",xt),Ln(a,as+"move",et),V.isEnabled=V.isPressed=V.isDragging=!1,Mt&&Mt(V))},V.kill=V.revert=function(){V.disable();var at=Gs.indexOf(V);at>=0&&Gs.splice(at,1),nr===V&&(nr=0)},Gs.push(V),K&&Go(a)&&(nr=V),V.enable(_)},Q0(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();ze.version="3.13.0";ze.create=function(r){return new ze(r)};ze.register=Up;ze.getAll=function(){return Gs.slice()};ze.getById=function(r){return Gs.filter(function(t){return t.vars.id===r})[0]};Lp()&&fn.registerPlugin(ze);var wt,Ys,re,we,ni,me,Bu,wl,ea,Jo,Wo,hl,vn,Rl,Iu,Fn,Fp,Op,qs,jp,Tu,tm,Un,Lu,em,nm,Rr,Du,zu,Zs,ku,El,Nu,wu,ul=1,yn=Date.now,Eu=yn(),xi=0,Xo=0,Bp=function(t,e,n){var i=ei(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},zp=function(t,e){return e&&(!ei(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},nx=function r(){return Xo&&requestAnimationFrame(r)},kp=function(){return Rl=1},Vp=function(){return Rl=0},ki=function(t){return t},Yo=function(t){return Math.round(t*1e5)/1e5||0},im=function(){return typeof window<"u"},rm=function(){return wt||im()&&(wt=window.gsap)&&wt.registerPlugin&&wt},ds=function(t){return!!~Bu.indexOf(t)},sm=function(t){return(t==="Height"?ku:re["inner"+t])||ni["client"+t]||me["client"+t]},om=function(t){return rr(t,"getBoundingClientRect")||(ds(t)?function(){return Tl.width=re.innerWidth,Tl.height=ku,Tl}:function(){return sr(t)})},ix=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=rr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?sm(s):t["client"+s])||0}},rx=function(t,e){return!e||~Ti.indexOf(t)?om(t):function(){return Tl}},Vi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=rr(t,n))?o()-om(t)()[s]:ds(t)?(ni[n]||me[n])-sm(i):t[n]-t["offset"+i])},fl=function(t,e){for(var n=0;n<qs.length;n+=3)(!e||~e.indexOf(qs[n+1]))&&t(qs[n],qs[n+1],qs[n+2])},ei=function(t){return typeof t=="string"},Sn=function(t){return typeof t=="function"},qo=function(t){return typeof t=="number"},ls=function(t){return typeof t=="object"},Ho=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Au=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Ws=Math.abs,am="left",lm="top",Vu="right",Gu="bottom",hs="width",us="height",$o="Right",Ko="Left",Qo="Top",jo="Bottom",Je="padding",gi="margin",$s="Width",Hu="Height",je="px",_i=function(t){return re.getComputedStyle(t)},sx=function(t){var e=_i(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Gp=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},sr=function(t,e){var n=e&&_i(t)[Iu]!=="matrix(1, 0, 0, 1, 0, 0)"&&wt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Al=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},cm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},ox=function(t){return function(e){return wt.utils.snap(cm(t),e)}},Wu=function(t){var e=wt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},ax=function(t){return function(e,n){return Wu(cm(t))(e,n.direction)}},dl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},on=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},sn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},pl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Hp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ml={toggleActions:"play",anticipatePin:0},Cl={top:0,left:0,center:.5,bottom:1,right:1},yl=function(t,e){if(ei(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Cl?Cl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},gl=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,m=we.createElement("div"),_=ds(n)||rr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=_?me:n,M=t.indexOf("start")!==-1,A=M?c:h,y="border-color:"+A+";font-size:"+d+";color:"+A+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===Ze?Vu:Gu)+":"+(o+parseFloat(u))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=M,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=y,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],Sl(m,0,i,M),m},Sl=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+$s]=1,s["border"+a+$s]=0,s[n.p]=e+"px",wt.set(t,s)},ee=[],Uu={},na,Wp=function(){return yn()-xi>34&&(na||(na=requestAnimationFrame(or)))},Xs=function(){(!Un||!Un.isPressed||Un.startX>me.clientWidth)&&(te.cache++,Un?na||(na=requestAnimationFrame(or)):or(),xi||ms("scrollStart"),xi=yn())},Cu=function(){nm=re.innerWidth,em=re.innerHeight},Zo=function(t){te.cache++,(t===!0||!vn&&!tm&&!we.fullscreenElement&&!we.webkitFullscreenElement&&(!Lu||nm!==re.innerWidth||Math.abs(re.innerHeight-em)>re.innerHeight*.25))&&wl.restart(!0)},ps={},lx=[],hm=function r(){return sn(Jt,"scrollEnd",r)||cs(!0)},ms=function(t){return ps[t]&&ps[t].map(function(e){return e()})||lx},ti=[],um=function(t){for(var e=0;e<ti.length;e+=5)(!t||ti[e+4]&&ti[e+4].query===t)&&(ti[e].style.cssText=ti[e+1],ti[e].getBBox&&ti[e].setAttribute("transform",ti[e+2]||""),ti[e+3].uncache=1)},Xu=function(t,e){var n;for(Fn=0;Fn<ee.length;Fn++)n=ee[Fn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));El=!0,e&&um(e),e||ms("revert")},fm=function(t,e){te.cache++,(e||!On)&&te.forEach(function(n){return Sn(n)&&n.cacheID++&&(n.rec=0)}),ei(t)&&(re.history.scrollRestoration=zu=t)},On,fs=0,Xp,cx=function(){if(Xp!==fs){var t=Xp=fs;requestAnimationFrame(function(){return t===fs&&cs(!0)})}},dm=function(){me.appendChild(Zs),ku=!Un&&Zs.offsetHeight||re.innerHeight,me.removeChild(Zs)},Yp=function(t){return ea(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},cs=function(t,e){if(ni=we.documentElement,me=we.body,Bu=[re,we,ni,me],xi&&!t&&!El){on(Jt,"scrollEnd",hm);return}dm(),On=Jt.isRefreshing=!0,te.forEach(function(i){return Sn(i)&&++i.cacheID&&(i.rec=i())});var n=ms("refreshInit");jp&&Jt.sort(),e||Xu(),te.forEach(function(i){Sn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ee.slice(0).forEach(function(i){return i.refresh()}),El=!1,ee.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Nu=1,Yp(!0),ee.forEach(function(i){var s=Vi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Yp(!1),Nu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),te.forEach(function(i){Sn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),fm(zu,1),wl.pause(),fs++,On=2,or(2),ee.forEach(function(i){return Sn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),On=Jt.isRefreshing=!1,ms("refresh")},Fu=0,Ml=1,ta,or=function(t){if(t===2||!On&&!El){Jt.isUpdating=!0,ta&&ta.update(0);var e=ee.length,n=yn(),i=n-Eu>=50,s=e&&ee[0].scroll();if(Ml=Fu>s?-1:1,On||(Fu=s),i&&(xi&&!Rl&&n-xi>200&&(xi=0,ms("scrollEnd")),Wo=Eu,Eu=n),Ml<0){for(Fn=e;Fn-- >0;)ee[Fn]&&ee[Fn].update(0,i);Ml=1}else for(Fn=0;Fn<e;Fn++)ee[Fn]&&ee[Fn].update(0,i);Jt.isUpdating=!1}na=0},Ou=[am,lm,Gu,Vu,gi+jo,gi+$o,gi+Qo,gi+Ko,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],bl=Ou.concat([hs,us,"boxSizing","max"+$s,"max"+Hu,"position",gi,Je,Je+Qo,Je+$o,Je+jo,Je+Ko]),hx=function(t,e,n){Js(n);var i=t._gsap;if(i.spacerIsNative)Js(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Ru=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Ou.length,o=e.style,a=t.style,l;s--;)l=Ou[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Gu]=a[Vu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[hs]=Al(t,xn)+je,o[us]=Al(t,Ze)+je,o[Je]=a[gi]=a[lm]=a[am]="0",Js(i),a[hs]=a["max"+$s]=n[hs],a[us]=a["max"+Hu]=n[us],a[Je]=n[Je],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},ux=/([A-Z])/g,Js=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||wt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(ux,"-$1").toLowerCase())}},_l=function(t){for(var e=bl.length,n=t.style,i=[],s=0;s<e;s++)i.push(bl[s],n[bl[s]]);return i.t=t,i},fx=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Tl={left:0,top:0},qp=function(t,e,n,i,s,o,a,l,c,h,d,u,f,m){Sn(t)&&(t=t(l)),ei(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?yl("0"+t.substr(3),n):0));var _=f?f.time():0,p,g,M;if(f&&f.seek(0),isNaN(t)||(t=+t),qo(t))f&&(t=wt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&Sl(a,n,i,!0);else{Sn(e)&&(e=e(l));var A=(t||"0").split(" "),y,S,T,E;M=Nn(e,l)||me,y=sr(M)||{},(!y||!y.left&&!y.top)&&_i(M).display==="none"&&(E=M.style.display,M.style.display="block",y=sr(M),E?M.style.display=E:M.style.removeProperty("display")),S=yl(A[0],y[i.d]),T=yl(A[1]||"0",n),t=y[i.p]-c[i.p]-h+S+s-T,a&&Sl(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var v=t+n,w=o._isStart;p="scroll"+i.d2,Sl(o,v,i,w&&v>20||!w&&(d?Math.max(me[p],ni[p]):o.parentNode[p])<=v+1),d&&(c=sr(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+je))}return f&&M&&(p=sr(M),f.seek(u),g=sr(M),f._caScrollDist=p[i.p]-g[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},dx=/(webkit|moz|length|cssText|inset)/i,Zp=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===me){t._stOrig=s.cssText,a=_i(t);for(o in a)!+o&&!dx.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;wt.core.getCache(t).uncache=1,e.appendChild(t)}},pm=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},xl=function(t,e,n){var i={};i[e.p]="+="+n,wt.set(t,i)},Jp=function(t,e){var n=ir(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,m={};c=c||n();var _=pm(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){te.cache++,o.tween&&or()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=wt.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},on(t,"wheel",n.wheelHandler),Jt.isTouch&&on(t,"touchmove",n.wheelHandler),s},Jt=(function(){function r(e,n){Ys||r.register(wt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Du(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Xo){this.update=this.refresh=this.kill=ki;return}n=Gp(ei(n)||qo(n)||n.nodeType?{trigger:n}:n,ml);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,M=s.onSnapComplete,A=s.once,y=s.snap,S=s.pinReparent,T=s.pinSpacer,E=s.containerAnimation,v=s.fastScrollEnd,w=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?xn:Ze,D=!d&&d!==0,I=Nn(n.scroller||re),z=wt.core.getCache(I),L=ds(I),B=("pinType"in n?n.pinType:rr(I,"pinType")||L&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=D&&n.toggleActions.split(" "),K="markers"in n?n.markers:ml.markers,q=L?0:parseFloat(_i(I)["border"+C.p2+$s])||0,R=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(R)},St=ix(I,L,C),Mt=rx(I,L),Vt=0,kt=0,Ht=0,J=ir(I,C),tt,_t,Ot,mt,Bt,zt,It,Yt,Kt,V,ne,_e,Le,qt,de,F,Pe,Wt,P,x,O,H,$,ct,ot,Q,nt,ft,Et,dt,ut,lt,Lt,Ft,N,ht,et,pt,xt;if(R._startClamp=R._endClamp=!1,R._dir=C,p*=45,R.scroller=I,R.scroll=E?E.time.bind(E):J,mt=J(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(jp=1,n.refreshPriority===-9999&&(ta=R)),z.tweenScroll=z.tweenScroll||{top:Jp(I,Ze),left:Jp(I,xn)},R.tweenTo=tt=z.tweenScroll[C.p],R.scrubDuration=function(st){Lt=qo(st)&&st,Lt?lt?lt.duration(st):lt=wt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Lt,paused:!0,onComplete:function(){return g&&g(R)}}):(lt&&lt.progress(1).kill(),lt=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),dt=0,l||(l=i.vars.id)),y&&((!ls(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in me.style&&wt.set(L?[me,ni]:I,{scrollBehavior:"auto"}),te.forEach(function(st){return Sn(st)&&st.target===(L?we.scrollingElement||ni:I)&&(st.smooth=!1)}),Ot=Sn(y.snapTo)?y.snapTo:y.snapTo==="labels"?ox(i):y.snapTo==="labelsDirectional"?ax(i):y.directional!==!1?function(st,Ut){return Wu(y.snapTo)(st,yn()-kt<500?0:Ut.direction)}:wt.utils.snap(y.snapTo),Ft=y.duration||{min:.1,max:2},Ft=ls(Ft)?Jo(Ft.min,Ft.max):Jo(Ft,Ft),N=wt.delayedCall(y.delay||Lt/2||.1,function(){var st=J(),Ut=yn()-kt<500,At=tt.tween;if((Ut||Math.abs(R.getVelocity())<10)&&!At&&!Rl&&Vt!==st){var Zt=(st-zt)/qt,We=i&&!D?i.totalProgress():Zt,ie=Ut?0:(We-ut)/(yn()-Wo)*1e3||0,Ee=wt.utils.clamp(-Zt,1-Zt,Ws(ie/2)*ie/.185),nn=Zt+(y.inertia===!1?0:Ee),Ae,ve,ae=y,En=ae.onStart,be=ae.onInterrupt,pn=ae.onComplete;if(Ae=Ot(nn,R),qo(Ae)||(Ae=nn),ve=Math.max(0,Math.round(zt+Ae*qt)),st<=It&&st>=zt&&ve!==st){if(At&&!At._initted&&At.data<=Ws(ve-st))return;y.inertia===!1&&(Ee=Ae-Zt),tt(ve,{duration:Ft(Ws(Math.max(Ws(nn-We),Ws(Ae-We))*.185/ie/.05||0)),ease:y.ease||"power3",data:Ws(ve-st),onInterrupt:function(){return N.restart(!0)&&be&&be(R)},onComplete:function(){R.update(),Vt=J(),i&&!D&&(lt?lt.resetTo("totalProgress",Ae,i._tTime/i._tDur):i.progress(Ae)),dt=ut=i&&!D?i.totalProgress():R.progress,M&&M(R),pn&&pn(R)}},st,Ee*qt,ve-st-Ee*qt),En&&En(R,tt.tween)}}else R.isActive&&Vt!==st&&N.restart(!0)}).pause()),l&&(Uu[l]=R),u=R.trigger=Nn(u||f!==!0&&f),xt=u&&u._gsap&&u._gsap.stRevert,xt&&(xt=xt(R)),f=f===!0?u:Nn(f),ei(a)&&(a={targets:u,className:a}),f&&(m===!1||m===gi||(m=!m&&f.parentNode&&f.parentNode.style&&_i(f.parentNode).display==="flex"?!1:Je),R.pin=f,_t=wt.core.getCache(f),_t.spacer?de=_t.pinState:(T&&(T=Nn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),_t.spacerIsNative=!!T,T&&(_t.spacerState=_l(T))),_t.spacer=Wt=T||we.createElement("div"),Wt.classList.add("pin-spacer"),l&&Wt.classList.add("pin-spacer-"+l),_t.pinState=de=_l(f)),n.force3D!==!1&&wt.set(f,{force3D:!0}),R.spacer=Wt=_t.spacer,Et=_i(f),ct=Et[m+C.os2],x=wt.getProperty(f),O=wt.quickSetter(f,C.a,je),Ru(f,Wt,Et),Pe=_l(f)),K){_e=ls(K)?Gp(K,Hp):Hp,V=gl("scroller-start",l,I,C,_e,0),ne=gl("scroller-end",l,I,C,_e,0,V),P=V["offset"+C.op.d2];var it=Nn(rr(I,"content")||I);Yt=this.markerStart=gl("start",l,it,C,_e,P,0,E),Kt=this.markerEnd=gl("end",l,it,C,_e,P,0,E),E&&(pt=wt.quickSetter([Yt,Kt],C.a,je)),!B&&!(Ti.length&&rr(I,"fixedMarkers")===!0)&&(sx(L?me:I),wt.set([V,ne],{force3D:!0}),Q=wt.quickSetter(V,C.a,je),ft=wt.quickSetter(ne,C.a,je))}if(E){var at=E.vars.onUpdate,rt=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),at&&at.apply(E,rt||[])})}if(R.previous=function(){return ee[ee.indexOf(R)-1]},R.next=function(){return ee[ee.indexOf(R)+1]},R.revert=function(st,Ut){if(!Ut)return R.kill(!0);var At=st!==!1||!R.enabled,Zt=vn;At!==R.isReverted&&(At&&(ht=Math.max(J(),R.scroll.rec||0),Ht=R.progress,et=i&&i.progress()),Yt&&[Yt,Kt,V,ne].forEach(function(We){return We.style.display=At?"none":"block"}),At&&(vn=R,R.update(At)),f&&(!S||!R.isActive)&&(At?hx(f,Wt,de):Ru(f,Wt,_i(f),ot)),At||R.update(At),vn=Zt,R.isReverted=At)},R.refresh=function(st,Ut,At,Zt){if(!((vn||!R.enabled)&&!Ut)){if(f&&st&&xi){on(r,"scrollEnd",hm);return}!On&&j&&j(R),vn=R,tt.tween&&!At&&(tt.tween.kill(),tt.tween=0),lt&&lt.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(gt){return gt.vars.immediateRender&&gt.render(0,!0,!0)})),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var We=St(),ie=Mt(),Ee=E?E.duration():Vi(I,C),nn=qt<=.01||!qt,Ae=0,ve=Zt||0,ae=ls(At)?At.end:n.end,En=n.endTrigger||u,be=ls(At)?At.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),pn=R.pinnedContainer=n.pinnedContainer&&Nn(n.pinnedContainer,R),An=u&&Math.max(0,ee.indexOf(R))||0,Xe=An,Fe,Ke,Ni,As,rn,Ve,hi,Cs,b,U,Y,G,W;for(K&&ls(At)&&(G=wt.getProperty(V,C.p),W=wt.getProperty(ne,C.p));Xe-- >0;)Ve=ee[Xe],Ve.end||Ve.refresh(0,1)||(vn=R),hi=Ve.pin,hi&&(hi===u||hi===f||hi===pn)&&!Ve.isReverted&&(U||(U=[]),U.unshift(Ve),Ve.revert(!0,!0)),Ve!==ee[Xe]&&(An--,Xe--);for(Sn(be)&&(be=be(R)),be=Bp(be,"start",R),zt=qp(be,u,We,C,J(),Yt,V,R,ie,q,B,Ee,E,R._startClamp&&"_startClamp")||(f?-.001:0),Sn(ae)&&(ae=ae(R)),ei(ae)&&!ae.indexOf("+=")&&(~ae.indexOf(" ")?ae=(ei(be)?be.split(" ")[0]:"")+ae:(Ae=yl(ae.substr(2),We),ae=ei(be)?be:(E?wt.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,zt):zt)+Ae,En=u)),ae=Bp(ae,"end",R),It=Math.max(zt,qp(ae||(En?"100% 0":Ee),En,We,C,J()+Ae,Kt,ne,R,ie,q,B,Ee,E,R._endClamp&&"_endClamp"))||-.001,Ae=0,Xe=An;Xe--;)Ve=ee[Xe],hi=Ve.pin,hi&&Ve.start-Ve._pinPush<=zt&&!E&&Ve.end>0&&(Fe=Ve.end-(R._startClamp?Math.max(0,Ve.start):Ve.start),(hi===u&&Ve.start-Ve._pinPush<zt||hi===pn)&&isNaN(be)&&(Ae+=Fe*(1-Ve.progress)),hi===f&&(ve+=Fe));if(zt+=Ae,It+=Ae,R._startClamp&&(R._startClamp+=Ae),R._endClamp&&!On&&(R._endClamp=It||-.001,It=Math.min(It,Vi(I,C))),qt=It-zt||(zt-=.01)&&.001,nn&&(Ht=wt.utils.clamp(0,1,wt.utils.normalize(zt,It,ht))),R._pinPush=ve,Yt&&Ae&&(Fe={},Fe[C.a]="+="+Ae,pn&&(Fe[C.p]="-="+J()),wt.set([Yt,Kt],Fe)),f&&!(Nu&&R.end>=Vi(I,C)))Fe=_i(f),As=C===Ze,Ni=J(),H=parseFloat(x(C.a))+ve,!Ee&&It>1&&(Y=(L?we.scrollingElement||ni:I).style,Y={style:Y,value:Y["overflow"+C.a.toUpperCase()]},L&&_i(me)["overflow"+C.a.toUpperCase()]!=="scroll"&&(Y.style["overflow"+C.a.toUpperCase()]="scroll")),Ru(f,Wt,Fe),Pe=_l(f),Ke=sr(f,!0),Cs=B&&ir(I,As?xn:Ze)(),m?(ot=[m+C.os2,qt+ve+je],ot.t=Wt,Xe=m===Je?Al(f,C)+qt+ve:0,Xe&&(ot.push(C.d,Xe+je),Wt.style.flexBasis!=="auto"&&(Wt.style.flexBasis=Xe+je)),Js(ot),pn&&ee.forEach(function(gt){gt.pin===pn&&gt.vars.pinSpacing!==!1&&(gt._subPinOffset=!0)}),B&&J(ht)):(Xe=Al(f,C),Xe&&Wt.style.flexBasis!=="auto"&&(Wt.style.flexBasis=Xe+je)),B&&(rn={top:Ke.top+(As?Ni-zt:Cs)+je,left:Ke.left+(As?Cs:Ni-zt)+je,boxSizing:"border-box",position:"fixed"},rn[hs]=rn["max"+$s]=Math.ceil(Ke.width)+je,rn[us]=rn["max"+Hu]=Math.ceil(Ke.height)+je,rn[gi]=rn[gi+Qo]=rn[gi+$o]=rn[gi+jo]=rn[gi+Ko]="0",rn[Je]=Fe[Je],rn[Je+Qo]=Fe[Je+Qo],rn[Je+$o]=Fe[Je+$o],rn[Je+jo]=Fe[Je+jo],rn[Je+Ko]=Fe[Je+Ko],F=fx(de,rn,S),On&&J(0)),i?(b=i._initted,Tu(1),i.render(i.duration(),!0,!0),$=x(C.a)-H+qt+ve,nt=Math.abs(qt-$)>1,B&&nt&&F.splice(F.length-2,2),i.render(0,!0,!0),b||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Tu(0)):$=qt,Y&&(Y.value?Y.style["overflow"+C.a.toUpperCase()]=Y.value:Y.style.removeProperty("overflow-"+C.a));else if(u&&J()&&!E)for(Ke=u.parentNode;Ke&&Ke!==me;)Ke._pinOffset&&(zt-=Ke._pinOffset,It-=Ke._pinOffset),Ke=Ke.parentNode;U&&U.forEach(function(gt){return gt.revert(!1,!0)}),R.start=zt,R.end=It,mt=Bt=On?ht:J(),!E&&!On&&(mt<ht&&J(ht),R.scroll.rec=0),R.revert(!1,!0),kt=yn(),N&&(Vt=-1,N.restart(!0)),vn=0,i&&D&&(i._initted||et)&&i.progress()!==et&&i.progress(et||0,!0).render(i.time(),!0,!0),(nn||Ht!==R.progress||E||_||i&&!i._initted)&&(i&&!D&&(i._initted||Ht||i.vars.immediateRender!==!1)&&i.totalProgress(E&&zt<-.001&&!Ht?wt.utils.normalize(zt,It,0):Ht,!0),R.progress=nn||(mt-zt)/qt===Ht?0:Ht),f&&m&&(Wt._pinOffset=Math.round(R.progress*$)),lt&&lt.invalidate(),isNaN(G)||(G-=wt.getProperty(V,C.p),W-=wt.getProperty(ne,C.p),xl(V,C,G),xl(Yt,C,G-(Zt||0)),xl(ne,C,W),xl(Kt,C,W-(Zt||0))),nn&&!On&&R.update(),h&&!On&&!Le&&(Le=!0,h(R),Le=!1)}},R.getVelocity=function(){return(J()-Bt)/(yn()-Wo)*1e3||0},R.endAnimation=function(){Ho(R.callbackAnimation),i&&(lt?lt.progress(1):i.paused()?D||Ho(i,R.direction<0,1):Ho(i,i.reversed()))},R.labelToScroll=function(st){return i&&i.labels&&(zt||R.refresh()||zt)+i.labels[st]/i.duration()*qt||0},R.getTrailing=function(st){var Ut=ee.indexOf(R),At=R.direction>0?ee.slice(0,Ut).reverse():ee.slice(Ut+1);return(ei(st)?At.filter(function(Zt){return Zt.vars.preventOverlaps===st}):At).filter(function(Zt){return R.direction>0?Zt.end<=zt:Zt.start>=It})},R.update=function(st,Ut,At){if(!(E&&!At&&!st)){var Zt=On===!0?ht:R.scroll(),We=st?0:(Zt-zt)/qt,ie=We<0?0:We>1?1:We||0,Ee=R.progress,nn,Ae,ve,ae,En,be,pn,An;if(Ut&&(Bt=mt,mt=E?J():Zt,y&&(ut=dt,dt=i&&!D?i.totalProgress():ie)),p&&f&&!vn&&!ul&&xi&&(!ie&&zt<Zt+(Zt-Bt)/(yn()-Wo)*p?ie=1e-4:ie===1&&It>Zt+(Zt-Bt)/(yn()-Wo)*p&&(ie=.9999)),ie!==Ee&&R.enabled){if(nn=R.isActive=!!ie&&ie<1,Ae=!!Ee&&Ee<1,be=nn!==Ae,En=be||!!ie!=!!Ee,R.direction=ie>Ee?1:-1,R.progress=ie,En&&!vn&&(ve=ie&&!Ee?0:ie===1?1:Ee===1?2:3,D&&(ae=!be&&k[ve+1]!=="none"&&k[ve+1]||k[ve],An=i&&(ae==="complete"||ae==="reset"||ae in i))),w&&(be||An)&&(An||d||!i)&&(Sn(w)?w(R):R.getTrailing(w).forEach(function(Ni){return Ni.endAnimation()})),D||(lt&&!vn&&!ul?(lt._dp._time-lt._start!==lt._time&&lt.render(lt._dp._time-lt._start),lt.resetTo?lt.resetTo("totalProgress",ie,i._tTime/i._tDur):(lt.vars.totalProgress=ie,lt.invalidate().restart())):i&&i.totalProgress(ie,!!(vn&&(kt||st)))),f){if(st&&m&&(Wt.style[m+C.os2]=ct),!B)O(Yo(H+$*ie));else if(En){if(pn=!st&&ie>Ee&&It+1>Zt&&Zt+1>=Vi(I,C),S)if(!st&&(nn||pn)){var Xe=sr(f,!0),Fe=Zt-zt;Zp(f,me,Xe.top+(C===Ze?Fe:0)+je,Xe.left+(C===Ze?0:Fe)+je)}else Zp(f,Wt);Js(nn||pn?F:Pe),nt&&ie<1&&nn||O(H+(ie===1&&!pn?$:0))}}y&&!tt.tween&&!vn&&!ul&&N.restart(!0),a&&(be||A&&ie&&(ie<1||!wu))&&ea(a.targets).forEach(function(Ni){return Ni.classList[nn||A?"add":"remove"](a.className)}),o&&!D&&!st&&o(R),En&&!vn?(D&&(An&&(ae==="complete"?i.pause().totalProgress(1):ae==="reset"?i.restart(!0).pause():ae==="restart"?i.restart(!0):i[ae]()),o&&o(R)),(be||!wu)&&(c&&be&&Au(R,c),X[ve]&&Au(R,X[ve]),A&&(ie===1?R.kill(!1,1):X[ve]=0),be||(ve=ie===1?1:3,X[ve]&&Au(R,X[ve]))),v&&!nn&&Math.abs(R.getVelocity())>(qo(v)?v:2500)&&(Ho(R.callbackAnimation),lt?lt.progress(1):Ho(i,ae==="reverse"?1:!ie,1))):D&&o&&!vn&&o(R)}if(ft){var Ke=E?Zt/E.duration()*(E._caScrollDist||0):Zt;Q(Ke+(V._isFlipped?1:0)),ft(Ke)}pt&&pt(-Zt/E.duration()*(E._caScrollDist||0))}},R.enable=function(st,Ut){R.enabled||(R.enabled=!0,on(I,"resize",Zo),L||on(I,"scroll",Xs),j&&on(r,"refreshInit",j),st!==!1&&(R.progress=Ht=0,mt=Bt=Vt=J()),Ut!==!1&&R.refresh())},R.getTween=function(st){return st&&tt?tt.tween:lt},R.setPositions=function(st,Ut,At,Zt){if(E){var We=E.scrollTrigger,ie=E.duration(),Ee=We.end-We.start;st=We.start+Ee*st/ie,Ut=We.start+Ee*Ut/ie}R.refresh(!1,!1,{start:zp(st,At&&!!R._startClamp),end:zp(Ut,At&&!!R._endClamp)},Zt),R.update()},R.adjustPinSpacing=function(st){if(ot&&st){var Ut=ot.indexOf(C.d)+1;ot[Ut]=parseFloat(ot[Ut])+st+je,ot[1]=parseFloat(ot[1])+st+je,Js(ot)}},R.disable=function(st,Ut){if(R.enabled&&(st!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Ut||lt&&lt.pause(),ht=0,_t&&(_t.uncache=1),j&&sn(r,"refreshInit",j),N&&(N.pause(),tt.tween&&tt.tween.kill()&&(tt.tween=0)),!L)){for(var At=ee.length;At--;)if(ee[At].scroller===I&&ee[At]!==R)return;sn(I,"resize",Zo),L||sn(I,"scroll",Xs)}},R.kill=function(st,Ut){R.disable(st,Ut),lt&&!Ut&&lt.kill(),l&&delete Uu[l];var At=ee.indexOf(R);At>=0&&ee.splice(At,1),At===Fn&&Ml>0&&Fn--,At=0,ee.forEach(function(Zt){return Zt.scroller===R.scroller&&(At=1)}),At||On||(R.scroll.rec=0),i&&(i.scrollTrigger=null,st&&i.revert({kill:!1}),Ut||i.kill()),Yt&&[Yt,Kt,V,ne].forEach(function(Zt){return Zt.parentNode&&Zt.parentNode.removeChild(Zt)}),ta===R&&(ta=0),f&&(_t&&(_t.uncache=1),At=0,ee.forEach(function(Zt){return Zt.pin===f&&At++}),At||(_t.spacer=0)),n.onKill&&n.onKill(R)},ee.push(R),R.enable(!1,!1),xt&&xt(R),i&&i.add&&!qt){var Nt=R.update;R.update=function(){R.update=Nt,te.cache++,zt||It||R.refresh()},wt.delayedCall(.01,R.update),qt=.01,zt=It=0}else R.refresh();f&&cx()},r.register=function(n){return Ys||(wt=n||rm(),im()&&window.document&&r.enable(),Ys=Xo),Ys},r.defaults=function(n){if(n)for(var i in n)ml[i]=n[i];return ml},r.disable=function(n,i){Xo=0,ee.forEach(function(o){return o[i?"kill":"disable"](n)}),sn(re,"wheel",Xs),sn(we,"scroll",Xs),clearInterval(hl),sn(we,"touchcancel",ki),sn(me,"touchstart",ki),dl(sn,we,"pointerdown,touchstart,mousedown",kp),dl(sn,we,"pointerup,touchend,mouseup",Vp),wl.kill(),fl(sn);for(var s=0;s<te.length;s+=3)pl(sn,te[s],te[s+1]),pl(sn,te[s],te[s+2])},r.enable=function(){if(re=window,we=document,ni=we.documentElement,me=we.body,wt&&(ea=wt.utils.toArray,Jo=wt.utils.clamp,Du=wt.core.context||ki,Tu=wt.core.suppressOverwrites||ki,zu=re.history.scrollRestoration||"auto",Fu=re.pageYOffset||0,wt.core.globals("ScrollTrigger",r),me)){Xo=1,Zs=document.createElement("div"),Zs.style.height="100vh",Zs.style.position="absolute",dm(),nx(),ze.register(wt),r.isTouch=ze.isTouch,Rr=ze.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Lu=ze.isTouch===1,on(re,"wheel",Xs),Bu=[re,we,ni,me],wt.matchMedia?(r.matchMedia=function(c){var h=wt.matchMedia(),d;for(d in c)h.add(d,c[d]);return h},wt.addEventListener("matchMediaInit",function(){return Xu()}),wt.addEventListener("matchMediaRevert",function(){return um()}),wt.addEventListener("matchMedia",function(){cs(0,1),ms("matchMedia")}),wt.matchMedia().add("(orientation: portrait)",function(){return Cu(),Cu})):console.warn("Requires GSAP 3.11.0 or later"),Cu(),on(we,"scroll",Xs);var n=me.hasAttribute("style"),i=me.style,s=i.borderTopStyle,o=wt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=sr(me),Ze.m=Math.round(a.top+Ze.sc())||0,xn.m=Math.round(a.left+xn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(me.setAttribute("style",""),me.removeAttribute("style")),hl=setInterval(Wp,250),wt.delayedCall(.5,function(){return ul=0}),on(we,"touchcancel",ki),on(me,"touchstart",ki),dl(on,we,"pointerdown,touchstart,mousedown",kp),dl(on,we,"pointerup,touchend,mouseup",Vp),Iu=wt.utils.checkPrefix("transform"),bl.push(Iu),Ys=yn(),wl=wt.delayedCall(.2,cs).pause(),qs=[we,"visibilitychange",function(){var c=re.innerWidth,h=re.innerHeight;we.hidden?(Fp=c,Op=h):(Fp!==c||Op!==h)&&Zo()},we,"DOMContentLoaded",cs,re,"load",cs,re,"resize",Zo],fl(on),ee.forEach(function(c){return c.enable(0,1)}),l=0;l<te.length;l+=3)pl(sn,te[l],te[l+1]),pl(sn,te[l],te[l+2])}},r.config=function(n){"limitCallbacks"in n&&(wu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(hl)||(hl=i)&&setInterval(Wp,i),"ignoreMobileResize"in n&&(Lu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(fl(sn)||fl(on,n.autoRefreshEvents||"none"),tm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Nn(n),o=te.indexOf(s),a=ds(s);~o&&te.splice(o,a?6:2),i&&(a?Ti.unshift(re,i,me,i,ni,i):Ti.unshift(s,i))},r.clearMatchMedia=function(n){ee.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(ei(n)?Nn(n):n).getBoundingClientRect(),a=o[s?hs:us]*i||0;return s?o.right-a>0&&o.left+a<re.innerWidth:o.bottom-a>0&&o.top+a<re.innerHeight},r.positionInViewport=function(n,i,s){ei(n)&&(n=Nn(n));var o=n.getBoundingClientRect(),a=o[s?hs:us],l=i==null?a/2:i in Cl?Cl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/re.innerWidth:(o.top+l)/re.innerHeight},r.killAll=function(n){if(ee.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ps.killAll||[];ps={},i.forEach(function(s){return s()})}},r})();Jt.version="3.13.0";Jt.saveStyles=function(r){return r?ea(r).forEach(function(t){if(t&&t.style){var e=ti.indexOf(t);e>=0&&ti.splice(e,5),ti.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),wt.core.getCache(t),Du())}}):ti};Jt.revert=function(r,t){return Xu(!r,t)};Jt.create=function(r,t){return new Jt(r,t)};Jt.refresh=function(r){return r?Zo(!0):(Ys||Jt.register())&&cs(!0)};Jt.update=function(r){return++te.cache&&or(r===!0?2:0)};Jt.clearScrollMemory=fm;Jt.maxScroll=function(r,t){return Vi(r,t?xn:Ze)};Jt.getScrollFunc=function(r,t){return ir(Nn(r),t?xn:Ze)};Jt.getById=function(r){return Uu[r]};Jt.getAll=function(){return ee.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Jt.isScrolling=function(){return!!xi};Jt.snapDirectional=Wu;Jt.addEventListener=function(r,t){var e=ps[r]||(ps[r]=[]);~e.indexOf(t)||e.push(t)};Jt.removeEventListener=function(r,t){var e=ps[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Jt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=wt.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(m){d.length||f.restart(!0),d.push(m.trigger),u.push(m),s<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Sn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Sn(s)&&(s=s(),on(Jt,"refresh",function(){return s=t.batchMax()})),ea(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Jt.create(c))}),e};var $p=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Pu=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(ze.isTouch?" pinch-zoom":""):"none",t===ni&&r(me,e)},vl={auto:1,scroll:1},px=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||wt.core.getCache(s),a=yn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==me&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(vl[(l=_i(s)).overflowY]||vl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ds(s)&&(vl[(l=_i(s)).overflowY]||vl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},mm=function(t,e,n,i){return ze.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&px,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&on(we,ze.eventTypes[0],Qp,!1,!0)},onDisable:function(){return sn(we,ze.eventTypes[0],Qp,!0)}})},mx=/(input|label|select|textarea)/i,Kp,Qp=function(t){var e=mx.test(t.target.tagName);(e||Kp)&&(t._gsapAllow=!0,Kp=e)},gx=function(t){ls(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Nn(t.target)||ni,h=wt.core.globals().ScrollSmoother,d=h&&h.get(),u=Rr&&(t.content&&Nn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=ir(c,Ze),m=ir(c,xn),_=1,p=(ze.isTouch&&re.visualViewport?re.visualViewport.scale*re.visualViewport.width:re.outerWidth)/re.innerWidth,g=0,M=Sn(i)?function(){return i(a)}:function(){return i||2.8},A,y,S=mm(c,t.type,!0,s),T=function(){return y=!1},E=ki,v=ki,w=function(){l=Vi(c,Ze),v=Jo(Rr?1:0,l),n&&(E=Jo(0,Vi(c,xn))),A=fs},C=function(){u._gsap.y=Yo(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(y){requestAnimationFrame(T);var K=Yo(a.deltaY/2),q=v(f.v-K);if(u&&q!==f.v+f.offset){f.offset=q-f.v;var R=Yo((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",f.cacheID=te.cache,or()}return!0}f.offset&&C(),y=!0},I,z,L,B,X=function(){w(),I.isActive()&&I.vars.scrollY>l&&(f()>l?I.progress(1)&&f(l):I.resetTo("scrollY",l))};return u&&wt.set(u,{y:"+=0"}),t.ignoreCheck=function(k){return Rr&&k.type==="touchmove"&&D(k)||_>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},t.onPress=function(){y=!1;var k=_;_=Yo((re.visualViewport&&re.visualViewport.scale||1)/p),I.pause(),k!==_&&Pu(c,_>1.01?!0:n?!1:"x"),z=m(),L=f(),w(),A=fs},t.onRelease=t.onGestureStart=function(k,K){if(f.offset&&C(),!K)B.restart(!0);else{te.cache++;var q=M(),R,j;n&&(R=m(),j=R+q*.05*-k.velocityX/.227,q*=$p(m,R,j,Vi(c,xn)),I.vars.scrollX=E(j)),R=f(),j=R+q*.05*-k.velocityY/.227,q*=$p(f,R,j,Vi(c,Ze)),I.vars.scrollY=v(j),I.invalidate().duration(q).play(.01),(Rr&&I.vars.scrollY>=l||R>=l-1)&&wt.to({},{onUpdate:X,duration:q})}o&&o(k)},t.onWheel=function(){I._ts&&I.pause(),yn()-g>1e3&&(A=0,g=yn())},t.onChange=function(k,K,q,R,j){if(fs!==A&&w(),K&&n&&m(E(R[2]===K?z+(k.startX-k.x):m()+K-R[1])),q){f.offset&&C();var St=j[2]===q,Mt=St?L+k.startY-k.y:f()+q-j[1],Vt=v(Mt);St&&Mt!==Vt&&(L+=Vt-Mt),f(Vt)}(q||K)&&or()},t.onEnable=function(){Pu(c,n?!1:"x"),Jt.addEventListener("refresh",X),on(re,"resize",X),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),S.enable()},t.onDisable=function(){Pu(c,!0),sn(re,"resize",X),Jt.removeEventListener("refresh",X),S.kill()},t.lockAxis=t.lockAxis!==!1,a=new ze(t),a.iOS=Rr,Rr&&!f()&&f(1),Rr&&wt.ticker.add(ki),B=a._dc,I=wt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:pm(f,f(),function(){return I.pause()})},onUpdate:or,onComplete:B.vars.onComplete}),a};Jt.sort=function(r){if(Sn(r))return ee.sort(r);var t=re.pageYOffset||0;return Jt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+re.innerHeight}),ee.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Jt.observe=function(r){return new ze(r)};Jt.normalizeScroll=function(r){if(typeof r>"u")return Un;if(r===!0&&Un)return Un.enable();if(r===!1){Un&&Un.kill(),Un=r;return}var t=r instanceof ze?r:gx(r);return Un&&Un.target===t.target&&Un.kill(),ds(t.target)&&(Un=t),t};Jt.core={_getVelocityProp:cl,_inputObserver:mm,_scrollers:te,_proxies:Ti,bridge:{ss:function(){xi||ms("scrollStart"),xi=yn()},ref:function(){return vn}}};rm()&&wt.registerPlugin(Jt);var gm="1.3.26";function vm(r,t,e){return Math.max(r,Math.min(t,e))}function _x(r,t,e){return(1-e)*r+e*t}function xx(r,t,e,n){return _x(r,t,1-Math.exp(-e*n))}function vx(r,t){return(r%t+t)%t}var yx=class{constructor(){Pt(this,"isRunning",!1);Pt(this,"value",0);Pt(this,"from",0);Pt(this,"to",0);Pt(this,"currentTime",0);Pt(this,"lerp");Pt(this,"duration");Pt(this,"easing");Pt(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=vm(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=xx(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function Sx(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var Mx=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Pt(this,"width",0);Pt(this,"height",0);Pt(this,"scrollHeight",0);Pt(this,"scrollWidth",0);Pt(this,"debouncedResize");Pt(this,"wrapperResizeObserver");Pt(this,"contentResizeObserver");Pt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Pt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Pt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=Sx(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},ym=class{constructor(){Pt(this,"events",{})}emit(r,...t){let e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},bx=100/6,Pr={passive:!1};function _m(r,t){return r===1?bx:r===2?t:1}var Tx=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Pt(this,"touchStart",{x:0,y:0});Pt(this,"lastDelta",{x:0,y:0});Pt(this,"window",{width:0,height:0});Pt(this,"emitter",new ym);Pt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Pt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Pt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Pt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=_m(n,this.window.width),s=_m(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Pt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Pr),this.element.addEventListener("touchstart",this.onTouchStart,Pr),this.element.addEventListener("touchmove",this.onTouchMove,Pr),this.element.addEventListener("touchend",this.onTouchEnd,Pr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Pr),this.element.removeEventListener("touchstart",this.onTouchStart,Pr),this.element.removeEventListener("touchmove",this.onTouchMove,Pr),this.element.removeEventListener("touchend",this.onTouchEnd,Pr)}},xm=r=>Math.min(1,1.001-2**(-10*r)),Sm=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:M=!0,autoRaf:A=!1,anchors:y=!1,autoToggle:S=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:v=E,stopInertiaOnNavigate:w=!1,respectReducedMotion:C=!0}={}){Pt(this,"_isScrolling",!1);Pt(this,"_isStopped",!1);Pt(this,"_isLocked",!1);Pt(this,"_preventNextNativeScrollEvent",!1);Pt(this,"_resetVelocityTimeout",null);Pt(this,"_rafId",null);Pt(this,"_isDraggingSelection",!1);Pt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Pt(this,"isTouching");Pt(this,"isIos");Pt(this,"time",0);Pt(this,"userData",{});Pt(this,"lastVelocity",0);Pt(this,"velocity",0);Pt(this,"direction",0);Pt(this,"options");Pt(this,"targetScroll");Pt(this,"animatedScroll");Pt(this,"animate",new yx);Pt(this,"emitter",new ym);Pt(this,"dimensions");Pt(this,"virtualScroll");Pt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Pt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Pt(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Pt(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Pt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Pt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(m=>m instanceof HTMLElement&&(typeof c=="function"&&c?.(m)||m.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&m.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&m.hasAttribute?.("data-lenis-prevent-horizontal")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Pt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Pt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=gm,window.lenis||(window.lenis={}),window.lenis.version=gm,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=xm:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:M,autoRaf:A,anchors:y,autoToggle:S,allowNestedScroll:T,naiveDimensions:v,stopInertiaOnNavigate:w,respectReducedMotion:C},this.dimensions=new Mx(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Tx(e,{touchMultiplier:f,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let m=null;if(typeof u=="string"?(m=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),m||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&u?.nodeType&&(m=u),m){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?y.left:y.top}let _=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),M=getComputedStyle(this.rootElement),A=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(A)?0:A)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let m=u-this.animatedScroll;m>this.limit/2?u-=this.limit:m<-this.limit/2&&(u+=this.limit)}}else u=vm(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=xm:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),i&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,d,u,f,m;if(n-(i.time??0)>2e3){i.time=Date.now();let T=window.getComputedStyle(r);if(i.computedStyle=T,s=["auto","overlay","scroll"].includes(T.overflowX),o=["auto","overlay","scroll"].includes(T.overflowY),c=["auto"].includes(T.overscrollBehaviorX),h=["auto"].includes(T.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,m=r.clientHeight,a=d>f,l=u>m,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=m,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,m=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",p,g,M,A,y,S;if(_==="horizontal")p=Math.round(r.scrollLeft),g=d-f,M=t,A=s,y=a,S=c;else if(_==="vertical")p=Math.round(r.scrollTop),g=u-m,M=e,A=o,y=l,S=h;else return!1;return!S&&(p>=g||p<=0)?!0:(M>0?p<g:p>0)&&A&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?vx(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var Hm=0,Mf=1,Wm=2;var Ca=1,Xm=2,_o=3,Wr=0,kn=1,qi=2,Zi=0,xo=1,bf=2,Tf=3,wf=4,Ym=5;var Ms=100,qm=101,Zm=102,Jm=103,$m=104,Km=200,Qm=201,jm=202,tg=203,Ef=204,Af=205,eg=206,ng=207,ig=208,rg=209,sg=210,og=211,ag=212,lg=213,cg=214,jl=0,tc=1,ec=2,uo=3,nc=4,ic=5,rc=6,sc=7,Cf=0,hg=1,ug=2,Pi=0,Rf=1,Pf=2,If=3,Lf=4,Df=5,Nf=6,Uf=7;var Ff=300,Xr=301,bs=302,Lc=303,Dc=304,Ra=306,oc=1e3,Hi=1001,ac=1002,ln=1003,fg=1004;var Pa=1005;var dn=1006,Nc=1007;var Yr=1008;var ci=1009,Of=1010,Bf=1011,vo=1012,Uc=1013,Ii=1014,Li=1015,Di=1016,Fc=1017,Oc=1018,yo=1020,zf=35902,kf=35899,Vf=1021,Gf=1022,Mi=1023,Wi=1026,qr=1027,Hf=1028,Bc=1029,Zr=1030,zc=1031;var kc=1033,Ia=33776,La=33777,Da=33778,Na=33779,Vc=35840,Gc=35841,Hc=35842,Wc=35843,Xc=36196,Yc=37492,qc=37496,Zc=37488,Jc=37489,Ua=37490,$c=37491,Kc=37808,Qc=37809,jc=37810,th=37811,eh=37812,nh=37813,ih=37814,rh=37815,sh=37816,oh=37817,ah=37818,lh=37819,ch=37820,hh=37821,uh=36492,fh=36494,dh=36495,ph=36283,mh=36284,Fa=36285,gh=36286;var la=2300,lc=2301,Kl=2302,mf=2303,gf=2400,_f=2401,xf=2402;var dg=3200;var Wf=0,pg=1,pr="",si="srgb",ca="srgb-linear",ha="linear",ge="srgb";var Ql=7680;var mg=519,gg=512,_g=513,xg=514,_h=515,vg=516,yg=517,xh=518,Sg=519,Mg=35044;var Xf="300 es",Ri=2e3,ua=2001;function wx(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ex(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function fa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bg(){let r=fa("canvas");return r.style.display="block",r}var Mm={},fo=null;function Yf(...r){let t="THREE."+r.shift();fo?fo("log",t,...r):console.log(t,...r)}function Tg(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Gt(...r){r=Tg(r);let t="THREE."+r.shift();if(fo)fo("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Xt(...r){r=Tg(r);let t="THREE."+r.shift();if(fo)fo("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function ys(...r){let t=r.join(" ");t in Mm||(Mm[t]=!0,Gt(...r))}function wg(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Eg={[jl]:tc,[ec]:rc,[nc]:sc,[uo]:ic,[tc]:jl,[rc]:ec,[sc]:nc,[ic]:uo},Xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yu=Math.PI/180,cc=180/Math.PI;function Oa(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[r&255]+Mn[r>>8&255]+Mn[r>>16&255]+Mn[r>>24&255]+"-"+Mn[t&255]+Mn[t>>8&255]+"-"+Mn[t>>16&15|64]+Mn[t>>24&255]+"-"+Mn[e&63|128]+Mn[e>>8&255]+"-"+Mn[e>>16&255]+Mn[e>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function ce(r,t,e){return Math.max(t,Math.min(e,r))}function Ax(r,t){return(r%t+t)%t}function qu(r,t,e){return(1-e)*r+e*t}function ia(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Kf=class Kf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kf.prototype.isVector2=!0;var fe=Kf,Yi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(d!==_||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*_;p<0&&(u=-u,f=-f,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let M=Math.acos(p),A=Math.sin(M);g=Math.sin(g*M)/A,a=Math.sin(a*M)/A,l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+_*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+_*a;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Qf=class Qf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zu.copy(this).projectOnVector(t),this.sub(Zu)}reflect(t){return this.sub(Zu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qf.prototype.isVector3=!0;var Z=Qf,Zu=new Z,bm=new Yi,jf=class jf{constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=i[0],p=i[3],g=i[6],M=i[1],A=i[4],y=i[7],S=i[2],T=i[5],E=i[8];return s[0]=o*_+a*M+l*S,s[3]=o*p+a*A+l*T,s[6]=o*g+a*y+l*E,s[1]=c*_+h*M+d*S,s[4]=c*p+h*A+d*T,s[7]=c*g+h*y+d*E,s[2]=u*_+f*M+m*S,s[5]=u*p+f*A+m*T,s[8]=u*g+f*y+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ju.makeScale(t,e)),this}rotate(t){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ju.makeRotation(-t)),this}translate(t,e){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ju.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};jf.prototype.isMatrix3=!0;var $t=jf,Ju=new $t,Tm=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wm=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cx(){let r={enabled:!0,workingColorSpace:ca,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ge&&(i.r=dr(i.r),i.g=dr(i.g),i.b=dr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(i.r=ho(i.r),i.g=ho(i.g),i.b=ho(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pr?ha:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ca]:{primaries:t,whitePoint:n,transfer:ha,toXYZ:Tm,fromXYZ:wm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:Tm,fromXYZ:wm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),r}var oe=Cx();function dr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ho(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ks,hc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ks===void 0&&(Ks=fa("canvas")),Ks.width=t.width,Ks.height=t.height;let i=Ks.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ks}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=dr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(dr(e[n]/255)*255):e[n]=dr(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Rx=0,po=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=Oa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push($u(i[o].image)):s.push($u(i[o]))}else s=$u(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function $u(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var Px=0,Ku=new Z,Zn=class r extends Xi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Hi,i=Hi,s=dn,o=Yr,a=Mi,l=ci,c=r.DEFAULT_ANISOTROPY,h=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=Oa(),this.name="",this.source=new po(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ku).x}get height(){return this.source.getSize(Ku).y}get depth(){return this.source.getSize(Ku).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ff)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oc:t.x=t.x-Math.floor(t.x);break;case Hi:t.x=t.x<0?0:1;break;case ac:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oc:t.y=t.y-Math.floor(t.y);break;case Hi:t.y=t.y<0?0:1;break;case ac:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Ff;Zn.DEFAULT_ANISOTROPY=1;var td=class td{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,y=(f+1)/2,S=(g+1)/2,T=(h+u)/4,E=(d+_)/4,v=(m+p)/4;return A>y&&A>S?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=T/n,s=E/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=v/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=E/s,i=v/s),this.set(n,i,s,e),this}let M=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};td.prototype.isVector4=!0;var Ue=td,uc=class extends Xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Zn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new po(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends uc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},da=class extends Zn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fc=class extends Zn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ic=class Ic{constructor(t,e,n,i,s,o,a,l,c,h,d,u,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,f,m,_,p)}set(t,e,n,i,s,o,a,l,c,h,d,u,f,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ic().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Qs.setFromMatrixColumn(t,0).length(),s=1/Qs.setFromMatrixColumn(t,1).length(),o=1/Qs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ix,t,Lx)}lookAt(t,e,n){let i=this.elements;return ii.subVectors(t,e),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ir.crossVectors(n,ii),Ir.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ir.crossVectors(n,ii)),Ir.normalize(),Pl.crossVectors(ii,Ir),i[0]=Ir.x,i[4]=Pl.x,i[8]=ii.x,i[1]=Ir.y,i[5]=Pl.y,i[9]=ii.y,i[2]=Ir.z,i[6]=Pl.z,i[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],M=n[3],A=n[7],y=n[11],S=n[15],T=i[0],E=i[4],v=i[8],w=i[12],C=i[1],D=i[5],I=i[9],z=i[13],L=i[2],B=i[6],X=i[10],k=i[14],K=i[3],q=i[7],R=i[11],j=i[15];return s[0]=o*T+a*C+l*L+c*K,s[4]=o*E+a*D+l*B+c*q,s[8]=o*v+a*I+l*X+c*R,s[12]=o*w+a*z+l*k+c*j,s[1]=h*T+d*C+u*L+f*K,s[5]=h*E+d*D+u*B+f*q,s[9]=h*v+d*I+u*X+f*R,s[13]=h*w+d*z+u*k+f*j,s[2]=m*T+_*C+p*L+g*K,s[6]=m*E+_*D+p*B+g*q,s[10]=m*v+_*I+p*X+g*R,s[14]=m*w+_*z+p*k+g*j,s[3]=M*T+A*C+y*L+S*K,s[7]=M*E+A*D+y*B+S*q,s[11]=M*v+A*I+y*X+S*R,s[15]=M*w+A*z+y*k+S*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],p=t[11],g=t[15],M=l*f-c*u,A=a*f-c*d,y=a*u-l*d,S=o*f-c*h,T=o*u-l*h,E=o*d-a*h;return e*(_*M-p*A+g*y)-n*(m*M-p*S+g*T)+i*(m*A-_*S+g*E)-s*(m*y-_*T+p*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],p=t[14],g=t[15],M=e*a-n*o,A=e*l-i*o,y=e*c-s*o,S=n*l-i*a,T=n*c-s*a,E=i*c-s*l,v=h*_-d*m,w=h*p-u*m,C=h*g-f*m,D=d*p-u*_,I=d*g-f*_,z=u*g-f*p,L=M*z-A*I+y*D+S*C-T*w+E*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return t[0]=(a*z-l*I+c*D)*B,t[1]=(i*I-n*z-s*D)*B,t[2]=(_*E-p*T+g*S)*B,t[3]=(u*T-d*E-f*S)*B,t[4]=(l*C-o*z-c*w)*B,t[5]=(e*z-i*C+s*w)*B,t[6]=(p*y-m*E-g*A)*B,t[7]=(h*E-u*y+f*A)*B,t[8]=(o*I-a*C+c*v)*B,t[9]=(n*C-e*I-s*v)*B,t[10]=(m*T-_*y+g*M)*B,t[11]=(d*y-h*T-f*M)*B,t[12]=(a*w-o*D-l*v)*B,t[13]=(e*D-n*w+i*v)*B,t[14]=(_*A-m*S-p*M)*B,t[15]=(h*S-d*A+u*M)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,m=s*d,_=o*h,p=o*d,g=a*d,M=l*c,A=l*h,y=l*d,S=n.x,T=n.y,E=n.z;return i[0]=(1-(_+g))*S,i[1]=(f+y)*S,i[2]=(m-A)*S,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(u+g))*T,i[6]=(p+M)*T,i[7]=0,i[8]=(m+A)*E,i[9]=(p-M)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Qs.set(i[0],i[1],i[2]).length(),a=Qs.set(i[4],i[5],i[6]).length(),l=Qs.set(i[8],i[9],i[10]).length();s<0&&(o=-o),wi.copy(this);let c=1/o,h=1/a,d=1/l;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=d,wi.elements[9]*=d,wi.elements[10]*=d,e.setFromRotationMatrix(wi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=Ri,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===Ri)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ua)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Ri,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===Ri)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===ua)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ic.prototype.isMatrix4=!0;var ke=Ic,Qs=new Z,wi=new ke,Ix=new Z(0,0,0),Lx=new Z(1,1,1),Ir=new Z,Pl=new Z,ii=new Z,Em=new ke,Am=new Yi,Or=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Em.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Em,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Am.setFromEuler(this),this.setFromQuaternion(Am,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Or.DEFAULT_ORDER="XYZ";var pa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dx=0,Cm=new Z,js=new Yi,ar=new ke,Il=new Z,ra=new Z,Nx=new Z,Ux=new Yi,Rm=new Z(1,0,0),Pm=new Z(0,1,0),Im=new Z(0,0,1),Lm={type:"added"},Fx={type:"removed"},to={type:"childadded",child:null},Qu={type:"childremoved",child:null},oi=class r extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new Z,e=new Or,n=new Yi,i=new Z(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new $t}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.multiply(js),this}rotateOnWorldAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.premultiply(js),this}rotateX(t){return this.rotateOnAxis(Rm,t)}rotateY(t){return this.rotateOnAxis(Pm,t)}rotateZ(t){return this.rotateOnAxis(Im,t)}translateOnAxis(t,e){return Cm.copy(t).applyQuaternion(this.quaternion),this.position.add(Cm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rm,t)}translateY(t){return this.translateOnAxis(Pm,t)}translateZ(t){return this.translateOnAxis(Im,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ar.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Il.copy(t):Il.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ar.lookAt(ra,Il,this.up):ar.lookAt(Il,ra,this.up),this.quaternion.setFromRotationMatrix(ar),i&&(ar.extractRotation(i.matrixWorld),js.setFromRotationMatrix(ar),this.quaternion.premultiply(js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lm),to.child=t,this.dispatchEvent(to),to.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fx),Qu.child=t,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ar.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ar.multiply(t.parent.matrixWorld)),t.applyMatrix4(ar),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lm),to.child=t,this.dispatchEvent(to),to.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,t,Nx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,Ux,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};oi.DEFAULT_UP=new Z(0,1,0);oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fr=class extends oi{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ox={type:"move"},mo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ox)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new fr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function ju(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var he=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=Ax(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ju(o,s,t+1/3),this.g=ju(o,s,t),this.b=ju(o,s,t-1/3)}return oe.colorSpaceToWorking(this,i),this}setStyle(t,e=si){function n(s){s!==void 0&&parseFloat(s)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=si){let n=Ag[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dr(t.r),this.g=dr(t.g),this.b=dr(t.b),this}copyLinearToSRGB(t){return this.r=ho(t.r),this.g=ho(t.g),this.b=ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return oe.workingToColorSpace(bn.copy(this),t),Math.round(ce(bn.r*255,0,255))*65536+Math.round(ce(bn.g*255,0,255))*256+Math.round(ce(bn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(bn.copy(this),e);let n=bn.r,i=bn.g,s=bn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=si){oe.workingToColorSpace(bn.copy(this),t);let e=bn.r,n=bn.g,i=bn.b;return t!==si?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Lr),this.setHSL(Lr.h+t,Lr.s+e,Lr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Lr),t.getHSL(Ll);let n=qu(Lr.h,Ll.h,e),i=qu(Lr.s,Ll.s,e),s=qu(Lr.l,Ll.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new he;he.NAMES=Ag;var ma=class extends oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Or,this.environmentIntensity=1,this.environmentRotation=new Or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ei=new Z,lr=new Z,tf=new Z,cr=new Z,eo=new Z,no=new Z,Dm=new Z,ef=new Z,nf=new Z,rf=new Z,sf=new Ue,of=new Ue,af=new Ue,Fr=class r{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ei.subVectors(t,e),i.cross(Ei);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ei.subVectors(i,e),lr.subVectors(n,e),tf.subVectors(t,e);let o=Ei.dot(Ei),a=Ei.dot(lr),l=Ei.dot(tf),c=lr.dot(lr),h=lr.dot(tf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,cr.x),l.addScaledVector(o,cr.y),l.addScaledVector(a,cr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return sf.setScalar(0),of.setScalar(0),af.setScalar(0),sf.fromBufferAttribute(t,e),of.fromBufferAttribute(t,n),af.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(sf,s.x),o.addScaledVector(of,s.y),o.addScaledVector(af,s.z),o}static isFrontFacing(t,e,n,i){return Ei.subVectors(n,e),lr.subVectors(t,e),Ei.cross(lr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),Ei.cross(lr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;eo.subVectors(i,n),no.subVectors(s,n),ef.subVectors(t,n);let l=eo.dot(ef),c=no.dot(ef);if(l<=0&&c<=0)return e.copy(n);nf.subVectors(t,i);let h=eo.dot(nf),d=no.dot(nf);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(eo,o);rf.subVectors(t,s);let f=eo.dot(rf),m=no.dot(rf);if(m>=0&&f<=m)return e.copy(s);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(no,a);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return Dm.subVectors(s,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(Dm,a);let g=1/(p+_+u);return o=_*g,a=u*g,e.copy(n).addScaledVector(eo,o).addScaledVector(no,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Br=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ai):Ai.fromBufferAttribute(s,o),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dl.copy(n.boundingBox)),Dl.applyMatrix4(t.matrixWorld),this.union(Dl)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sa),Nl.subVectors(this.max,sa),io.subVectors(t.a,sa),ro.subVectors(t.b,sa),so.subVectors(t.c,sa),Dr.subVectors(ro,io),Nr.subVectors(so,ro),gs.subVectors(io,so);let e=[0,-Dr.z,Dr.y,0,-Nr.z,Nr.y,0,-gs.z,gs.y,Dr.z,0,-Dr.x,Nr.z,0,-Nr.x,gs.z,0,-gs.x,-Dr.y,Dr.x,0,-Nr.y,Nr.x,0,-gs.y,gs.x,0];return!lf(e,io,ro,so,Nl)||(e=[1,0,0,0,1,0,0,0,1],!lf(e,io,ro,so,Nl))?!1:(Ul.crossVectors(Dr,Nr),e=[Ul.x,Ul.y,Ul.z],lf(e,io,ro,so,Nl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},hr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ai=new Z,Dl=new Br,io=new Z,ro=new Z,so=new Z,Dr=new Z,Nr=new Z,gs=new Z,sa=new Z,Nl=new Z,Ul=new Z,_s=new Z;function lf(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){_s.fromArray(r,s);let a=i.x*Math.abs(_s.x)+i.y*Math.abs(_s.y)+i.z*Math.abs(_s.z),l=t.dot(_s),c=e.dot(_s),h=n.dot(_s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var $e=new Z,Fl=new fe,Bx=0,Bn=class extends Xi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mg,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fl.fromBufferAttribute(this,e),Fl.applyMatrix3(t),this.setXY(e,Fl.x,Fl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ia(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ia(e,this.array)),e}setX(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ia(e,this.array)),e}setY(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ia(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ia(e,this.array)),e}setW(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qn(e,this.array),n=qn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=qn(e,this.array),n=qn(n,this.array),i=qn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=qn(e,this.array),n=qn(n,this.array),i=qn(i,this.array),s=qn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ga=class extends Bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _a=class extends Bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var yi=class extends Bn{constructor(t,e,n){super(new Float32Array(t),e,n)}},zx=new Br,oa=new Z,cf=new Z,Ss=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zx.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;oa.subVectors(t,this.center);let e=oa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(oa,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(oa.copy(t.center).add(cf)),this.expandByPoint(oa.copy(t.center).sub(cf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},kx=0,vi=new ke,hf=new oi,oo=new Z,ri=new Br,aa=new Br,an=new Z,ai=class r extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=Oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wx(t)?_a:ga)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,e,n){return vi.makeTranslation(t,e,n),this.applyMatrix4(vi),this}scale(t,e,n){return vi.makeScale(t,e,n),this.applyMatrix4(vi),this}lookAt(t){return hf.lookAt(t),hf.updateMatrix(),this.applyMatrix4(hf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yi(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];aa.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(ri.min,aa.min),ri.expandByPoint(an),an.addVectors(ri.max,aa.max),ri.expandByPoint(an)):(ri.expandByPoint(aa.min),ri.expandByPoint(aa.max))}ri.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)an.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(an));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&(oo.fromBufferAttribute(t,c),an.add(oo)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new Z,l[v]=new Z;let c=new Z,h=new Z,d=new Z,u=new fe,f=new fe,m=new fe,_=new Z,p=new Z;function g(v,w,C){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),u.fromBufferAttribute(s,v),f.fromBufferAttribute(s,w),m.fromBufferAttribute(s,C),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(D),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(D),a[v].add(_),a[w].add(_),a[C].add(_),l[v].add(p),l[w].add(p),l[C].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,w=M.length;v<w;++v){let C=M[v],D=C.start,I=C.count;for(let z=D,L=D+I;z<L;z+=3)g(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let A=new Z,y=new Z,S=new Z,T=new Z;function E(v){S.fromBufferAttribute(i,v),T.copy(S);let w=a[v];A.copy(w),A.sub(S.multiplyScalar(S.dot(w))).normalize(),y.crossVectors(T,w);let D=y.dot(l[v])<0?-1:1;o.setXYZW(v,A.x,A.y,A.z,D)}for(let v=0,w=M.length;v<w;++v){let C=M[v],D=C.start,I=C.count;for(let z=D,L=D+I;z<L;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new Z,s=new Z,o=new Z,a=new Z,l=new Z,c=new Z,h=new Z,d=new Z;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new Bn(u,h,d)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var uf=new Z,Vx=new Z,Gx=new $t,Ci=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=uf.subVectors(n,e).cross(Vx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(uf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Gx.getNormalMatrix(t),i=this.coplanarPoint(uf).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Hx=0,zr=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Oa(),this.name="",this.type="Material",this.blending=xo,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ef,this.blendDst=Af,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ql,this.stencilZFail=Ql,this.stencilZPass=Ql,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new he().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ci().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new fe().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ur=new Z,ff=new Z,Ol=new Z,Bl=new Z,xa=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ur)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ur.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ur.copy(this.origin).addScaledVector(this.direction,e),ur.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ff.copy(t).add(e).multiplyScalar(.5),Ol.copy(e).sub(t).normalize(),Bl.copy(this.origin).sub(ff);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Ol),a=Bl.dot(this.direction),l=-Bl.dot(Ol),c=Bl.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=s*h,d>=0)if(u>=-m)if(u<=m){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ff).addScaledVector(Ol,u),f}intersectSphere(t,e){if(t.radius<0)return null;ur.subVectors(t.center,this.origin);let n=ur.dot(this.direction),i=ur.dot(ur)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ur)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,_=e.y-o.y,p=e.z-o.z,g=n.x-o.x,M=n.y-o.y,A=n.z-o.z,y=Math.abs(l),S=Math.abs(c),T=Math.abs(h),E,v,w,C,D,I,z,L,B,X,k,K;if(y>=S&&y>=T?(w=l,I=d,B=m,K=g,l>=0?(E=c,v=h,C=u,D=f,z=_,L=p,X=M,k=A):(E=h,v=c,C=f,D=u,z=p,L=_,X=A,k=M)):S>=T?(w=c,I=u,B=_,K=M,c>=0?(E=h,v=l,C=f,D=d,z=p,L=m,X=A,k=g):(E=l,v=h,C=d,D=f,z=m,L=p,X=g,k=A)):(w=h,I=f,B=p,K=A,h>=0?(E=l,v=c,C=d,D=u,z=m,L=_,X=g,k=M):(E=c,v=l,C=u,D=d,z=_,L=m,X=M,k=g)),w===0)return null;let q=E/w,R=v/w,j=1/w,St=C-q*I,Mt=D-R*I,Vt=z-q*B,kt=L-R*B,Ht=X-q*K,J=k-R*K,tt=Ht*kt-J*Vt,_t=St*J-Mt*Ht,Ot=Vt*Mt-kt*St;if(i){if(tt<0||_t<0||Ot<0)return null}else if((tt<0||_t<0||Ot<0)&&(tt>0||_t>0||Ot>0))return null;let mt=tt+_t+Ot;if(mt===0)return null;let Bt=j*(tt*I+_t*B+Ot*K);return(mt>0?Bt<0:Bt>0)?null:this.at(Bt/mt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},va=class extends zr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Or,this.combine=Cf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Nm=new ke,xs=new xa,zl=new Ss,Um=new Z,kl=new Z,Vl=new Z,Gl=new Z,df=new Z,Hl=new Z,Fm=new Z,Wl=new Z,Si=class extends oi{constructor(t=new ai,e=new va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Hl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(df.fromBufferAttribute(d,t),o?Hl.addScaledVector(df,h):Hl.addScaledVector(df.sub(e),h))}e.add(Hl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zl.copy(n.boundingSphere),zl.applyMatrix4(s),xs.copy(t.ray).recast(t.near),!(zl.containsPoint(xs.origin)===!1&&(xs.intersectSphere(zl,Um)===null||xs.origin.distanceToSquared(Um)>(t.far-t.near)**2))&&(Nm.copy(s).invert(),xs.copy(t.ray).applyMatrix4(Nm),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xs)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,S=A;y<S;y+=3){let T=a.getX(y),E=a.getX(y+1),v=a.getX(y+2);i=Xl(this,g,t,n,c,h,d,T,E,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let M=a.getX(p),A=a.getX(p+1),y=a.getX(p+2);i=Xl(this,o,t,n,c,h,d,M,A,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,S=A;y<S;y+=3){let T=y,E=y+1,v=y+2;i=Xl(this,g,t,n,c,h,d,T,E,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let M=p,A=p+1,y=p+2;i=Xl(this,o,t,n,c,h,d,M,A,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function Wx(r,t,e,n,i,s,o,a){let l;if(t.side===kn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Wr,a),l===null)return null;Wl.copy(a),Wl.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Wl);return c<e.near||c>e.far?null:{distance:c,point:Wl.clone(),object:r}}function Xl(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,kl),r.getVertexPosition(l,Vl),r.getVertexPosition(c,Gl);let h=Wx(r,t,e,n,kl,Vl,Gl,Fm);if(h){let d=new Z;Fr.getBarycoord(Fm,kl,Vl,Gl,d),i&&(h.uv=Fr.getInterpolatedAttribute(i,a,l,c,d,new fe)),s&&(h.uv1=Fr.getInterpolatedAttribute(s,a,l,c,d,new fe)),o&&(h.normal=Fr.getInterpolatedAttribute(o,a,l,c,d,new Z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new Z,materialIndex:0};Fr.getNormal(kl,Vl,Gl,u.normal),h.face=u,h.barycoord=d}return h}var dc=class extends Zn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=ln,h=ln,d,u){super(null,o,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vs=new Ss,Xx=new fe(.5,.5),Yl=new Z,ya=class{constructor(t=new Ci,e=new Ci,n=new Ci,i=new Ci,s=new Ci,o=new Ci){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ri,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],m=s[8],_=s[9],p=s[10],g=s[11],M=s[12],A=s[13],y=s[14],S=s[15];if(i[0].setComponents(c-o,f-h,g-m,S-M).normalize(),i[1].setComponents(c+o,f+h,g+m,S+M).normalize(),i[2].setComponents(c+a,f+d,g+_,S+A).normalize(),i[3].setComponents(c-a,f-d,g-_,S-A).normalize(),n)i[4].setComponents(l,u,p,y).normalize(),i[5].setComponents(c-l,f-u,g-p,S-y).normalize();else if(i[4].setComponents(c-l,f-u,g-p,S-y).normalize(),e===Ri)i[5].setComponents(c+l,f+u,g+p,S+y).normalize();else if(e===ua)i[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){vs.center.set(0,0,0);let e=Xx.distanceTo(t.center);return vs.radius=.7071067811865476+e,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Yl.x=i.normal.x>0?t.max.x:t.min.x,Yl.y=i.normal.y>0?t.max.y:t.min.y,Yl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var pc=class extends zr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Om=new ke,vf=new xa,ql=new Ss,Zl=new Z,Sa=class extends oi{constructor(t=new ai,e=new pc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ql.copy(n.boundingSphere),ql.applyMatrix4(i),ql.radius+=s,t.ray.intersectsSphere(ql)===!1)return;Om.copy(i).invert(),vf.copy(t.ray).applyMatrix4(Om);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,_=f;m<_;m++){let p=c.getX(m);Zl.fromBufferAttribute(d,p),Bm(Zl,p,l,i,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,_=f;m<_;m++)Zl.fromBufferAttribute(d,m),Bm(Zl,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Bm(r,t,e,n,i,s,o){let a=vf.distanceSqToPoint(r);if(a<e){let l=new Z;vf.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ma=class extends Zn{constructor(t=[],e=Xr,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var kr=class extends Zn{constructor(t,e,n=Ii,i,s,o,a=ln,l=ln,c,h=Wi,d=1){if(h!==Wi&&h!==qr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new po(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},mc=class extends kr{constructor(t,e=Ii,n=Xr,i,s,o=ln,a=ln,l,c=Wi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ba=class extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},go=class r extends ai{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new yi(c,3)),this.setAttribute("normal",new yi(h,3)),this.setAttribute("uv",new yi(d,2));function m(_,p,g,M,A,y,S,T,E,v,w){let C=y/E,D=S/v,I=y/2,z=S/2,L=T/2,B=E+1,X=v+1,k=0,K=0,q=new Z;for(let R=0;R<X;R++){let j=R*D-z;for(let St=0;St<B;St++){let Mt=St*C-I;q[_]=Mt*M,q[p]=j*A,q[g]=L,c.push(q.x,q.y,q.z),q[_]=0,q[p]=0,q[g]=T>0?1:-1,h.push(q.x,q.y,q.z),d.push(St/E),d.push(1-R/v),k+=1}}for(let R=0;R<v;R++)for(let j=0;j<E;j++){let St=u+j+B*R,Mt=u+j+B*(R+1),Vt=u+(j+1)+B*(R+1),kt=u+(j+1)+B*R;l.push(St,Mt,kt),l.push(Mt,Vt,kt),K+=6}a.addGroup(f,K,w),f+=K,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ta=class r extends ai{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let M=g*u-o;for(let A=0;A<c;A++){let y=A*d-s;m.push(y,-M,0),_.push(0,0,1),p.push(A/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let A=M+c*g,y=M+c*(g+1),S=M+1+c*(g+1),T=M+1+c*g;f.push(A,y,T),f.push(y,S,T)}this.setIndex(f),this.setAttribute("position",new yi(m,3)),this.setAttribute("normal",new yi(_,3)),this.setAttribute("uv",new yi(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ts(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(zm(i))i.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(zm(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function wn(r){let t={};for(let e=0;e<r.length;e++){let n=Ts(r[e]);for(let i in n)t[i]=n[i]}return t}function zm(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Yx(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function qf(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Cg={clone:Ts,merge:wn},qx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zn=class extends zr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qx,this.fragmentShader=Zx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=Yx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new he().setHex(i.value);break;case"v2":this.uniforms[n].value=new fe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ue().fromArray(i.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ke().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},gc=class extends zn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var _c=class extends zr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xc=class extends zr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ao(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function pf(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Vr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vc=class extends Vr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gf,endingEnd:gf}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case _f:s=t,a=2*e-n;break;case xf:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _f:o=t,l=2*n-e;break;case xf:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,p=_*m,g=-u*p+2*u*_-u*m,M=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*m+1,A=(-1-f)*p+(1.5+f)*_+.5*m,y=f*p-f*_;for(let S=0;S!==a;++S)s[S]=g*o[h+S]+M*o[c+S]+A*o[l+S]+y*o[d+S];return s}},yc=class extends Vr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},Sc=class extends Vr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Mc=class extends Vr{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),_=1-m;for(let p=0;p!==a;++p)s[p]=o[c+p]*_+o[l+p]*m;return s}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=f*u+m*2,M=d[g],A=d[g+1],y=t*u+m*2,S=h[y],T=h[y+1],E=$x(n,e,M,S,i);s[m]=Rg(E,_,A,T,p)}return s}};function Rg(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function Jx(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function $x(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=Rg(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let l=Jx(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var li=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ao(e,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ao(t.times,Array),values:ao(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),pf(t.settings)&&(n.settings={inTangents:ao(t.settings.inTangents,Array),outTangents:ao(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Mc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case la:e=this.InterpolantFactoryMethodDiscrete;break;case lc:e=this.InterpolantFactoryMethodLinear;break;case Kl:e=this.InterpolantFactoryMethodSmooth;break;case mf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Gt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return la;case this.InterpolantFactoryMethodLinear:return lc;case this.InterpolantFactoryMethodSmooth:return Kl;case this.InterpolantFactoryMethodBezier:return mf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;pf(this.settings)&&(km(this.settings.inTangents,t),km(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Xt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Ex(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Kl,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let _=e[d+m];if(_!==e[u+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,pf(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function km(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}li.prototype.ValueTypeName="";li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=lc;var Gr=class extends li{constructor(t,e,n){super(t,e,n)}};Gr.prototype.ValueTypeName="bool";Gr.prototype.ValueBufferType=Array;Gr.prototype.DefaultInterpolation=la;Gr.prototype.InterpolantFactoryMethodLinear=void 0;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var bc=class extends li{constructor(t,e,n,i){super(t,e,n,i)}};bc.prototype.ValueTypeName="color";var Tc=class extends li{constructor(t,e,n,i){super(t,e,n,i)}};Tc.prototype.ValueTypeName="number";var wc=class extends Vr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Yi.slerpFlat(s,0,o,c-a,o,c,l);return s}},wa=class extends li{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new wc(this.times,this.values,this.getValueSize(),t)}};wa.prototype.ValueTypeName="quaternion";wa.prototype.InterpolantFactoryMethodSmooth=void 0;var Hr=class extends li{constructor(t,e,n){super(t,e,n)}};Hr.prototype.ValueTypeName="string";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=la;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends li{constructor(t,e,n,i){super(t,e,n,i)}};Ec.prototype.ValueTypeName="vector";var Ac=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pg=new Ac,Cc=class{constructor(t){this.manager=t!==void 0?t:Pg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Cc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jl=new Z,$l=new Yi,Gi=new Z,Ea=class extends oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Jl,$l,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,$l,Gi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Jl,$l,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,$l,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ur=new Z,Vm=new fe,Gm=new fe,Tn=class extends Ea{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Yu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cc*2*Math.atan(Math.tan(Yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ur.x,Ur.y).multiplyScalar(-t/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ur.x,Ur.y).multiplyScalar(-t/Ur.z)}getViewSize(t,e){return this.getViewBounds(t,Vm,Gm),e.subVectors(Gm,Vm)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Yu*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Aa=class extends Ea{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var lo=-90,co=1,Rc=class extends oi{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Tn(lo,co,t,e);i.layers=this.layers,this.add(i);let s=new Tn(lo,co,t,e);s.layers=this.layers,this.add(s);let o=new Tn(lo,co,t,e);o.layers=this.layers,this.add(o);let a=new Tn(lo,co,t,e);a.layers=this.layers,this.add(a);let l=new Tn(lo,co,t,e);l.layers=this.layers,this.add(l);let c=new Tn(lo,co,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Pc=class extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Zf="\\[\\]\\.:\\/",Kx=new RegExp("["+Zf+"]","g"),Jf="[^"+Zf+"]",Qx="[^"+Zf.replace("\\.","")+"]",jx=/((?:WC+[\/:])*)/.source.replace("WC",Jf),tv=/(WCOD+)?/.source.replace("WCOD",Qx),ev=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jf),nv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jf),iv=new RegExp("^"+jx+tv+ev+nv+"$"),rv=["material","materials","bones","map"],yf=class{constructor(t,e,n){let i=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kx,"")}static parseTrackName(t){let e=iv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);rv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=yf;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ST=new Float32Array(1);var ed=class ed{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};ed.prototype.isMatrix2=!0;var Sf=ed;function $f(r,t,e,n){let i=sv(n);switch(e){case Vf:return r*t;case Hf:return r*t/i.components*i.byteLength;case Bc:return r*t/i.components*i.byteLength;case Zr:return r*t*2/i.components*i.byteLength;case zc:return r*t*2/i.components*i.byteLength;case Gf:return r*t*3/i.components*i.byteLength;case Mi:return r*t*4/i.components*i.byteLength;case kc:return r*t*4/i.components*i.byteLength;case Ia:case La:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Da:case Na:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Gc:case Wc:return Math.max(r,16)*Math.max(t,8)/4;case Vc:case Hc:return Math.max(r,8)*Math.max(t,8)/2;case Xc:case Yc:case Zc:case Jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case qc:case Ua:case $c:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case jc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case th:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case eh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case nh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ih:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case rh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case sh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case oh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ah:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case lh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ch:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case hh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case uh:case fh:case dh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ph:case mh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Fa:case gh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sv(r){switch(r){case ci:case Of:return{byteLength:1,components:1};case vo:case Bf:case Di:return{byteLength:2,components:1};case Fc:case Oc:return{byteLength:2,components:4};case Ii:case Uc:case Li:return{byteLength:4,components:1};case zf:case kf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Qg(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function av(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var lv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_v=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Iv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Nv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ov=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bv="gl_FragColor = linearToOutputTexel( gl_FragColor );",zv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$v=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ty=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ny=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ry=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ay=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ly=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,uy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,py=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,my=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,My=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,by=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ty=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ay=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Iy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,By=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ky=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ky=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_S=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,PS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,US=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:lv,alphahash_pars_fragment:cv,alphamap_fragment:hv,alphamap_pars_fragment:uv,alphatest_fragment:fv,alphatest_pars_fragment:dv,aomap_fragment:pv,aomap_pars_fragment:mv,batching_pars_vertex:gv,batching_vertex:_v,begin_vertex:xv,beginnormal_vertex:vv,bsdfs:yv,iridescence_fragment:Sv,bumpmap_pars_fragment:Mv,clipping_planes_fragment:bv,clipping_planes_pars_fragment:Tv,clipping_planes_pars_vertex:wv,clipping_planes_vertex:Ev,color_fragment:Av,color_pars_fragment:Cv,color_pars_vertex:Rv,color_vertex:Pv,common:Iv,cube_uv_reflection_fragment:Lv,defaultnormal_vertex:Dv,displacementmap_pars_vertex:Nv,displacementmap_vertex:Uv,emissivemap_fragment:Fv,emissivemap_pars_fragment:Ov,colorspace_fragment:Bv,colorspace_pars_fragment:zv,envmap_fragment:kv,envmap_common_pars_fragment:Vv,envmap_pars_fragment:Gv,envmap_pars_vertex:Hv,envmap_physical_pars_fragment:ty,envmap_vertex:Wv,fog_vertex:Xv,fog_pars_vertex:Yv,fog_fragment:qv,fog_pars_fragment:Zv,gradientmap_pars_fragment:Jv,lightmap_pars_fragment:$v,lights_lambert_fragment:Kv,lights_lambert_pars_fragment:Qv,lights_pars_begin:jv,lights_toon_fragment:ey,lights_toon_pars_fragment:ny,lights_phong_fragment:iy,lights_phong_pars_fragment:ry,lights_physical_fragment:sy,lights_physical_pars_fragment:oy,lights_fragment_begin:ay,lights_fragment_maps:ly,lights_fragment_end:cy,lightprobes_pars_fragment:hy,logdepthbuf_fragment:uy,logdepthbuf_pars_fragment:fy,logdepthbuf_pars_vertex:dy,logdepthbuf_vertex:py,map_fragment:my,map_pars_fragment:gy,map_particle_fragment:_y,map_particle_pars_fragment:xy,metalnessmap_fragment:vy,metalnessmap_pars_fragment:yy,morphinstance_vertex:Sy,morphcolor_vertex:My,morphnormal_vertex:by,morphtarget_pars_vertex:Ty,morphtarget_vertex:wy,normal_fragment_begin:Ey,normal_fragment_maps:Ay,normal_pars_fragment:Cy,normal_pars_vertex:Ry,normal_vertex:Py,normalmap_pars_fragment:Iy,clearcoat_normal_fragment_begin:Ly,clearcoat_normal_fragment_maps:Dy,clearcoat_pars_fragment:Ny,iridescence_pars_fragment:Uy,opaque_fragment:Fy,packing:Oy,premultiplied_alpha_fragment:By,project_vertex:zy,dithering_fragment:ky,dithering_pars_fragment:Vy,roughnessmap_fragment:Gy,roughnessmap_pars_fragment:Hy,shadowmap_pars_fragment:Wy,shadowmap_pars_vertex:Xy,shadowmap_vertex:Yy,shadowmask_pars_fragment:qy,skinbase_vertex:Zy,skinning_pars_vertex:Jy,skinning_vertex:$y,skinnormal_vertex:Ky,specularmap_fragment:Qy,specularmap_pars_fragment:jy,tonemapping_fragment:tS,tonemapping_pars_fragment:eS,transmission_fragment:nS,transmission_pars_fragment:iS,uv_pars_fragment:rS,uv_pars_vertex:sS,uv_vertex:oS,worldpos_vertex:aS,background_vert:lS,background_frag:cS,backgroundCube_vert:hS,backgroundCube_frag:uS,cube_vert:fS,cube_frag:dS,depth_vert:pS,depth_frag:mS,distance_vert:gS,distance_frag:_S,equirect_vert:xS,equirect_frag:vS,linedashed_vert:yS,linedashed_frag:SS,meshbasic_vert:MS,meshbasic_frag:bS,meshlambert_vert:TS,meshlambert_frag:wS,meshmatcap_vert:ES,meshmatcap_frag:AS,meshnormal_vert:CS,meshnormal_frag:RS,meshphong_vert:PS,meshphong_frag:IS,meshphysical_vert:LS,meshphysical_frag:DS,meshtoon_vert:NS,meshtoon_frag:US,points_vert:FS,points_frag:OS,shadow_vert:BS,shadow_frag:zS,sprite_vert:kS,sprite_frag:VS},vt={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},$i={basic:{uniforms:wn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:wn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new he(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:wn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:wn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:wn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new he(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:wn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:wn([vt.points,vt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:wn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:wn([vt.common,vt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:wn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:wn([vt.sprite,vt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:wn([vt.common,vt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:wn([vt.lights,vt.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};$i.physical={uniforms:wn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var vh={r:0,b:0,g:0},GS=new ke,jg=new $t;jg.set(-1,0,0,0,1,0,0,0,1);function HS(r,t,e,n,i,s){let o=new he(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let y=M.backgroundBlurriness>0;A=t.get(A,y)}return A}function m(M){let A=!1,y=f(M);y===null?p(o,a):y&&y.isColor&&(p(y,1),A=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(M,A){let y=f(A);y&&(y.isCubeTexture||y.mapping===Ra)?(c===void 0&&(c=new Si(new go(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Ts($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(GS.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(jg),c.material.toneMapped=oe.getTransfer(y.colorSpace)!==ge,(h!==y||d!==y.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Si(new Ta(2,2),new zn({name:"BackgroundMaterial",uniforms:Ts($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=oe.getTransfer(y.colorSpace)!==ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,A){M.getRGB(vh,qf(r)),e.buffers.color.setClear(vh.r,vh.g,vh.b,A,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),a=A,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:m,addToRenderList:_,dispose:g}}function WS(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(D,I,z,L,B){let X=!1,k=d(D,L,z,I);s!==k&&(s=k,c(s.object)),X=f(D,L,z,B),X&&m(D,L,z,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(D,I,z,L),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function h(D){return r.deleteVertexArray(D)}function d(D,I,z,L){let B=L.wireframe===!0,X=n[I.id];X===void 0&&(X={},n[I.id]=X);let k=D.isInstancedMesh===!0?D.id:0,K=X[k];K===void 0&&(K={},X[k]=K);let q=K[z.id];q===void 0&&(q={},K[z.id]=q);let R=q[B];return R===void 0&&(R=u(l()),q[B]=R),R}function u(D){let I=[],z=[],L=[];for(let B=0;B<e;B++)I[B]=0,z[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,I,z,L){let B=s.attributes,X=I.attributes,k=0,K=z.getAttributes();for(let q in K)if(K[q].location>=0){let j=B[q],St=X[q];if(St===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(St=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(St=D.instanceColor)),j===void 0||j.attribute!==St||St&&j.data!==St.data)return!0;k++}return s.attributesNum!==k||s.index!==L}function m(D,I,z,L){let B={},X=I.attributes,k=0,K=z.getAttributes();for(let q in K)if(K[q].location>=0){let j=X[q];j===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));let St={};St.attribute=j,j&&j.data&&(St.data=j.data),B[q]=St,k++}s.attributes=B,s.attributesNum=k,s.index=L}function _(){let D=s.newAttributes;for(let I=0,z=D.length;I<z;I++)D[I]=0}function p(D){g(D,0)}function g(D,I){let z=s.newAttributes,L=s.enabledAttributes,B=s.attributeDivisors;z[D]=1,L[D]===0&&(r.enableVertexAttribArray(D),L[D]=1),B[D]!==I&&(r.vertexAttribDivisor(D,I),B[D]=I)}function M(){let D=s.newAttributes,I=s.enabledAttributes;for(let z=0,L=I.length;z<L;z++)I[z]!==D[z]&&(r.disableVertexAttribArray(z),I[z]=0)}function A(D,I,z,L,B,X,k){k===!0?r.vertexAttribIPointer(D,I,z,B,X):r.vertexAttribPointer(D,I,z,L,B,X)}function y(D,I,z,L){_();let B=L.attributes,X=z.getAttributes(),k=I.defaultAttributeValues;for(let K in X){let q=X[K];if(q.location>=0){let R=B[K];if(R===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),R!==void 0){let j=R.normalized,St=R.itemSize,Mt=t.get(R);if(Mt===void 0)continue;let Vt=Mt.buffer,kt=Mt.type,Ht=Mt.bytesPerElement,J=kt===r.INT||kt===r.UNSIGNED_INT||R.gpuType===Uc;if(R.isInterleavedBufferAttribute){let tt=R.data,_t=tt.stride,Ot=R.offset;if(tt.isInstancedInterleavedBuffer){for(let mt=0;mt<q.locationSize;mt++)g(q.location+mt,tt.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let mt=0;mt<q.locationSize;mt++)p(q.location+mt);r.bindBuffer(r.ARRAY_BUFFER,Vt);for(let mt=0;mt<q.locationSize;mt++)A(q.location+mt,St/q.locationSize,kt,j,_t*Ht,(Ot+St/q.locationSize*mt)*Ht,J)}else{if(R.isInstancedBufferAttribute){for(let tt=0;tt<q.locationSize;tt++)g(q.location+tt,R.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let tt=0;tt<q.locationSize;tt++)p(q.location+tt);r.bindBuffer(r.ARRAY_BUFFER,Vt);for(let tt=0;tt<q.locationSize;tt++)A(q.location+tt,St/q.locationSize,kt,j,St*Ht,St/q.locationSize*tt*Ht,J)}}else if(k!==void 0){let j=k[K];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(q.location,j);break;case 3:r.vertexAttrib3fv(q.location,j);break;case 4:r.vertexAttrib4fv(q.location,j);break;default:r.vertexAttrib1fv(q.location,j)}}}}M()}function S(){w();for(let D in n){let I=n[D];for(let z in I){let L=I[z];for(let B in L){let X=L[B];for(let k in X)h(X[k].object),delete X[k];delete L[B]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let I=n[D.id];for(let z in I){let L=I[z];for(let B in L){let X=L[B];for(let k in X)h(X[k].object),delete X[k];delete L[B]}}delete n[D.id]}function E(D){for(let I in n){let z=n[I];for(let L in z){let B=z[L];if(B[D.id]===void 0)continue;let X=B[D.id];for(let k in X)h(X[k].object),delete X[k];delete B[D.id]}}}function v(D){for(let I in n){let z=n[I],L=D.isInstancedMesh===!0?D.id:0,B=z[L];if(B!==void 0){for(let X in B){let k=B[X];for(let K in k)h(k[K].object),delete k[K];delete B[X]}delete z[L],Object.keys(z).length===0&&delete n[I]}}}function w(){C(),o=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function XS(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function YS(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Mi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let v=E===Di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==ci&&E!==Li&&!v&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:y,maxSamples:S,samples:T}}function qS(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Ci,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=r.get(d);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{let M=s?0:n,A=M*4,y=g.clippingState||null;l.value=y,y=h(m,u,A,f);for(let S=0;S!==A;++S)y[S]=e[S];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=f+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let A=0,y=f;A!==_;++A,y+=4)o.copy(d[A]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var Mo=4,ZS=6,JS=20,$S=256,Ba=new Aa,Ig=new he,nd=null,id=0,rd=0,sd=!1,KS=new Z,ws=new Z,Sh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=KS}=s;nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(nd,id,rd),this._renderer.xr.enabled=sd,t.scissorTest=!1,So(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xr||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Di,format:Mi,colorSpace:ca,depthBuffer:!1},i=Lg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lg(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=QS(s)),this._blurMaterial=tM(s,t,e),this._ggxMaterial=jS(s,t,e)}return i}_compileMaterial(t){let e=new Si(new ai,t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,n,i,s){let l=new Tn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Ig),d.toneMapping=Pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Si(new go,new va({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,g=!1,M=t.background;M?M.isColor&&(p.color.copy(M),t.background=null,g=!0):(p.color.copy(Ig),g=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));let S=this._cubeSize;So(i,y*S,A>2?S:0,S,S),d.setRenderTarget(i),g&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Xr||t.mapping===bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dg());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;So(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ba)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-Mo?n-m+Mo:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,So(s,p,g,3*_,2*_),i.setRenderTarget(s),i.render(a,Ba),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,So(t,p,g,3*_,2*_),i.setRenderTarget(t),i.render(a,Ba)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,i,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-Mo?i-this._lodMax+Mo:0),u=4*(this._cubeSize-h);So(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Ba)}};function QS(r){let t=[],e=[],n=r,i=r-Mo+1+ZS;for(let s=0;s<i;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let g=0;g<d;g++){let M=g%3*2/3-1,A=g>2?0:-1,y=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];m.set(y,f*u*g);for(let S=0;S<u;S++){let T=h[S*2]*2-1,E=h[S*2+1]*2-1;g===0?ws.set(1,E,T):g===1?ws.set(-T,1,-E):g===2?ws.set(-T,E,1):g===3?ws.set(-1,E,-T):g===4?ws.set(-T,-1,E):ws.set(T,E,-1),ws.toArray(_,(g*u+S)*f)}}let p=new ai;p.setAttribute("position",new Bn(m,f)),p.setAttribute("outputDirection",new Bn(_,f)),e.push(new Si(p,null)),n>Mo&&n--}return{lodMeshes:e,sizeLods:t}}function Lg(r,t,e){let n=new Jn(r,t,e);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function So(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function jS(r,t,e){return new zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$S,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Th(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function tM(r,t,e){return new zn({name:"SphericalGaussianBlur",defines:{SAMPLES:JS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Th(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Dg(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Ng(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Th(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Mh=class extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ma(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new go(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:Zi});s.uniforms.tEquirect.value=e;let o=new Si(i,s),a=e.minFilter;return e.minFilter===Yr&&(e.minFilter=dn),new Rc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}};function eM(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===Lc||f===Dc)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new Mh(m.height);return _.fromEquirectangularTexture(r,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,m=f===Lc||f===Dc,_=f===Xr||f===bs;if(m||_){let p=e.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Sh(r)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return m&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new Sh(r)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===Lc?u.mapping=Xr:f===Dc&&(u.mapping=bs),u}function l(u){let f=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function nM(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ys("WebGLRenderer: "+n+" extension not supported."),i}}}function iM(r,t,e,n){let i={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete i[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],r.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,_=0;if(m===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let A=0,y=M.length;A<y;A+=3){let S=M[A+0],T=M[A+1],E=M[A+2];u.push(S,T,T,E,E,S)}}else{let M=m.array;_=m.version;for(let A=0,y=M.length/3-1;A<y;A+=3){let S=A+0,T=A+1,E=A+2;u.push(S,T,T,E,E,S)}}let p=new(m.count>=65535?_a:ga)(u,1);p.version=_;let g=s.get(d);g&&t.remove(g),s.set(d,p)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function rM(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function sM(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:Xt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function oM(r,t,e){let n=new WeakMap,i=new Ue;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let w=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],A=0;f===!0&&(A=1),m===!0&&(A=2),_===!0&&(A=3);let y=a.attributes.position.count*A,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*S*4*d),E=new da(T,y,S,d);E.type=Li,E.needsUpdate=!0;let v=A*4;for(let C=0;C<d;C++){let D=p[C],I=g[C],z=M[C],L=y*S*4*C;for(let B=0;B<D.count;B++){let X=B*v;f===!0&&(i.fromBufferAttribute(D,B),T[L+X+0]=i.x,T[L+X+1]=i.y,T[L+X+2]=i.z,T[L+X+3]=0),m===!0&&(i.fromBufferAttribute(I,B),T[L+X+4]=i.x,T[L+X+5]=i.y,T[L+X+6]=i.z,T[L+X+7]=0),_===!0&&(i.fromBufferAttribute(z,B),T[L+X+8]=i.x,T[L+X+9]=i.y,T[L+X+10]=i.z,T[L+X+11]=z.itemSize===4?i.w:1)}}u={count:d,texture:E,size:new fe(y,S)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function aM(r,t,e,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var lM={[Rf]:"LINEAR_TONE_MAPPING",[Pf]:"REINHARD_TONE_MAPPING",[If]:"CINEON_TONE_MAPPING",[Lf]:"ACES_FILMIC_TONE_MAPPING",[Nf]:"AGX_TONE_MAPPING",[Uf]:"NEUTRAL_TONE_MAPPING",[Df]:"CUSTOM_TONE_MAPPING"};function cM(r,t,e,n,i,s){let o=new Jn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ai;c.setAttribute("position",new yi([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new yi([0,2,0,0,2,0],2));let h=new gc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Si(c,h),u=new Aa(-1,1,1,-1,0,1),f=null,m=null,_=!1,p,g=null,M=[],A=!1;this.setSize=function(y,S){o.setSize(y,S),a!==null&&a.setSize(y,S),l!==null&&l.setSize(y,S);for(let T=0;T<M.length;T++){let E=M[T];E.setSize&&E.setSize(y,S)}},this.setEffects=function(y){M=y,A=M.length>0&&M[0].isRenderPass===!0;let S=o.width,T=o.height;M.length>0&&a===null&&(a=new Jn(S,T,{type:Di,depthBuffer:!1,stencilBuffer:!1}),l=new Jn(S,T,{type:Di,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<M.length;E++){let v=M[E];v.setSize&&v.setSize(S,T)}},this.begin=function(y,S){if(_||y.toneMapping===Pi&&M.length===0)return!1;if(g=S,S!==null){let T=S.width,E=S.height;(o.width!==T||o.height!==E)&&this.setSize(T,E)}return A===!1&&y.setRenderTarget(o),p=y.toneMapping,y.toneMapping=Pi,!0},this.hasRenderPass=function(){return A},this.end=function(y,S){y.toneMapping=p,_=!0;let T=o,E=a;for(let v=0;v<M.length;v++){let w=M[v];w.enabled!==!1&&(w.render(y,E,T,S),w.needsSwap!==!1&&(T=E,E=E===a?l:a))}if(f!==y.outputColorSpace||m!==y.toneMapping){f=y.outputColorSpace,m=y.toneMapping,h.defines={},oe.getTransfer(f)===ge&&(h.defines.SRGB_TRANSFER="");let v=lM[m];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(g),y.render(d,u),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var t_=new Zn,ld=new kr(1,1),e_=new da,n_=new fc,i_=new Ma,Ug=[],Fg=[],Og=new Float32Array(16),Bg=new Float32Array(9),zg=new Float32Array(4);function To(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Ug[i];if(s===void 0&&(s=new Float32Array(i),Ug[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function tn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function en(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function wh(r,t){let e=Fg[t];e===void 0&&(e=new Int32Array(t),Fg[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function hM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function uM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;r.uniform2fv(this.addr,t),en(e,t)}}function fM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;r.uniform3fv(this.addr,t),en(e,t)}}function dM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;r.uniform4fv(this.addr,t),en(e,t)}}function pM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;zg.set(n),r.uniformMatrix2fv(this.addr,!1,zg),en(e,n)}}function mM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Bg.set(n),r.uniformMatrix3fv(this.addr,!1,Bg),en(e,n)}}function gM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Og.set(n),r.uniformMatrix4fv(this.addr,!1,Og),en(e,n)}}function _M(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function xM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;r.uniform2iv(this.addr,t),en(e,t)}}function vM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;r.uniform3iv(this.addr,t),en(e,t)}}function yM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;r.uniform4iv(this.addr,t),en(e,t)}}function SM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function MM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;r.uniform2uiv(this.addr,t),en(e,t)}}function bM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;r.uniform3uiv(this.addr,t),en(e,t)}}function TM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;r.uniform4uiv(this.addr,t),en(e,t)}}function wM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ld.compareFunction=e.isReversedDepthBuffer()?xh:_h,s=ld):s=t_,e.setTexture2D(t||s,i)}function EM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||n_,i)}function AM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||i_,i)}function CM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||e_,i)}function RM(r){switch(r){case 5126:return hM;case 35664:return uM;case 35665:return fM;case 35666:return dM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return _M;case 35667:case 35671:return xM;case 35668:case 35672:return vM;case 35669:case 35673:return yM;case 5125:return SM;case 36294:return MM;case 36295:return bM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return CM}}function PM(r,t){r.uniform1fv(this.addr,t)}function IM(r,t){let e=To(t,this.size,2);r.uniform2fv(this.addr,e)}function LM(r,t){let e=To(t,this.size,3);r.uniform3fv(this.addr,e)}function DM(r,t){let e=To(t,this.size,4);r.uniform4fv(this.addr,e)}function NM(r,t){let e=To(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function UM(r,t){let e=To(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function FM(r,t){let e=To(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function OM(r,t){r.uniform1iv(this.addr,t)}function BM(r,t){r.uniform2iv(this.addr,t)}function zM(r,t){r.uniform3iv(this.addr,t)}function kM(r,t){r.uniform4iv(this.addr,t)}function VM(r,t){r.uniform1uiv(this.addr,t)}function GM(r,t){r.uniform2uiv(this.addr,t)}function HM(r,t){r.uniform3uiv(this.addr,t)}function WM(r,t){r.uniform4uiv(this.addr,t)}function XM(r,t,e){let n=this.cache,i=t.length,s=wh(e,i);tn(n,s)||(r.uniform1iv(this.addr,s),en(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=ld:o=t_;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function YM(r,t,e){let n=this.cache,i=t.length,s=wh(e,i);tn(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||n_,s[o])}function qM(r,t,e){let n=this.cache,i=t.length,s=wh(e,i);tn(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||i_,s[o])}function ZM(r,t,e){let n=this.cache,i=t.length,s=wh(e,i);tn(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||e_,s[o])}function JM(r){switch(r){case 5126:return PM;case 35664:return IM;case 35665:return LM;case 35666:return DM;case 35674:return NM;case 35675:return UM;case 35676:return FM;case 5124:case 35670:return OM;case 35667:case 35671:return BM;case 35668:case 35672:return zM;case 35669:case 35673:return kM;case 5125:return VM;case 36294:return GM;case 36295:return HM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return YM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return ZM}}var cd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=RM(e.type)}},hd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=JM(e.type)}},ud=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},od=/(\w+)(\])?(\[|\.)?/g;function kg(r,t){r.seq.push(t),r.map[t.id]=t}function $M(r,t,e){let n=r.name,i=n.length;for(od.lastIndex=0;;){let s=od.exec(n),o=od.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){kg(e,c===void 0?new cd(a,r,t):new hd(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new ud(a),kg(e,d)),e=d}}}var bo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);$M(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Vg(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var KM=37297,QM=0;function jM(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Gg=new $t;function tb(r){oe._getMatrix(Gg,oe.workingColorSpace,r);let t=`mat3( ${Gg.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(r)){case ha:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Hg(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+jM(r.getShaderSource(t),a)}else return s}function eb(r,t){let e=tb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var nb={[Rf]:"Linear",[Pf]:"Reinhard",[If]:"Cineon",[Lf]:"ACESFilmic",[Nf]:"AgX",[Uf]:"Neutral",[Df]:"Custom"};function ib(r,t){let e=nb[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var yh=new Z;function rb(){oe.getLuminanceCoefficients(yh);let r=yh.x.toFixed(4),t=yh.y.toFixed(4),e=yh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function ob(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ab(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function ka(r){return r!==""}function Wg(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xg(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function fd(r){return r.replace(lb,hb)}var cb=new Map;function hb(r,t){let e=jt[t];if(e===void 0){let n=cb.get(t);if(n!==void 0)e=jt[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return fd(e)}var ub=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yg(r){return r.replace(ub,fb)}function fb(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function qg(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var db={[Ca]:"SHADOWMAP_TYPE_PCF",[_o]:"SHADOWMAP_TYPE_VSM"};function pb(r){return db[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mb={[Xr]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[Ra]:"ENVMAP_TYPE_CUBE_UV"};function gb(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":mb[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var _b={[bs]:"ENVMAP_MODE_REFRACTION"};function xb(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":_b[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vb={[Cf]:"ENVMAP_BLENDING_MULTIPLY",[hg]:"ENVMAP_BLENDING_MIX",[ug]:"ENVMAP_BLENDING_ADD"};function yb(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":vb[r.combine]||"ENVMAP_BLENDING_NONE"}function Sb(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Mb(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=pb(e),c=gb(e),h=xb(e),d=yb(e),u=Sb(e),f=sb(e),m=ob(s),_=i.createProgram(),p,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ka).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ka).join(`
`),g.length>0&&(g+=`
`)):(p=[qg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),g=[qg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?jt.tonemapping_pars_fragment:"",e.toneMapping!==Pi?ib("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,eb("linearToOutputTexel",e.outputColorSpace),rb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ka).join(`
`)),o=fd(o),o=Wg(o,e),o=Xg(o,e),a=fd(a),a=Wg(a,e),a=Xg(a,e),o=Yg(o),a=Yg(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let A=M+p+o,y=M+g+a,S=Vg(i,i.VERTEX_SHADER,A),T=Vg(i,i.FRAGMENT_SHADER,y);i.attachShader(_,S),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(D){if(r.debug.checkShaderErrors){let I=i.getProgramInfoLog(_)||"",z=i.getShaderInfoLog(S)||"",L=i.getShaderInfoLog(T)||"",B=I.trim(),X=z.trim(),k=L.trim(),K=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,T);else{let R=Hg(i,S,"vertex"),j=Hg(i,T,"fragment");Xt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+R+`
`+j)}else B!==""?Gt("WebGLProgram: Program Info Log:",B):(X===""||k==="")&&(q=!1);q&&(D.diagnostics={runnable:K,programLog:B,vertexShader:{log:X,prefix:p},fragmentShader:{log:k,prefix:g}})}i.deleteShader(S),i.deleteShader(T),v=new bo(i,_),w=ab(i,_)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,KM)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=QM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=T,this}var bb=0,dd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new pd(t),e.set(t,n)),n}},pd=class{constructor(t){this.id=bb++,this.code=t,this.usedTimes=0}};function Tb(r){return r===Zr||r===Ua||r===Fa}function wb(r,t,e,n,i,s){let o=new pa,a=new dd,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,w,C,D,I,z){let L=D.fog,B=I.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,K=t.get(v.envMap||X,k),q=K&&K.mapping===Ra?K.image.height:null,R=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Gt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,St=j!==void 0?j.length:0,Mt=0;B.morphAttributes.position!==void 0&&(Mt=1),B.morphAttributes.normal!==void 0&&(Mt=2),B.morphAttributes.color!==void 0&&(Mt=3);let Vt,kt,Ht,J;if(R){let Nt=$i[R];Vt=Nt.vertexShader,kt=Nt.fragmentShader}else{Vt=v.vertexShader,kt=v.fragmentShader;let Nt=a.getVertexShaderStage(v),st=a.getFragmentShaderStage(v);a.update(v,Nt,st),Ht=Nt.id,J=st.id}let tt=r.getRenderTarget(),_t=r.state.buffers.depth.getReversed(),Ot=I.isInstancedMesh===!0,mt=I.isBatchedMesh===!0,Bt=!!v.map,zt=!!v.matcap,It=!!K,Yt=!!v.aoMap,Kt=!!v.lightMap,V=!!v.bumpMap&&v.wireframe===!1,ne=!!v.normalMap,_e=!!v.displacementMap,Le=!!v.emissiveMap,qt=!!v.metalnessMap,de=!!v.roughnessMap,F=v.anisotropy>0,Pe=v.clearcoat>0,Wt=v.dispersion>0,P=v.retroreflectivity>0,x=v.iridescence>0,O=v.sheen>0,H=v.transmission>0,$=F&&!!v.anisotropyMap,ct=Pe&&!!v.clearcoatMap,ot=Pe&&!!v.clearcoatNormalMap,Q=Pe&&!!v.clearcoatRoughnessMap,nt=x&&!!v.iridescenceMap,ft=x&&!!v.iridescenceThicknessMap,Et=O&&!!v.sheenColorMap,dt=O&&!!v.sheenRoughnessMap,ut=!!v.specularMap,lt=!!v.specularColorMap,Lt=!!v.specularIntensityMap,Ft=H&&!!v.transmissionMap,N=H&&!!v.thicknessMap,ht=!!v.gradientMap,et=!!v.alphaMap,pt=v.alphaTest>0,xt=!!v.alphaHash,it=!!v.extensions,at=Pi;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(at=r.toneMapping);let rt={shaderID:R,shaderType:v.type,shaderName:v.name,vertexShader:Vt,fragmentShader:kt,defines:v.defines,customVertexShaderID:Ht,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:mt,batchingColor:mt&&I._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&I.instanceColor!==null,instancingMorph:Ot&&I.morphTexture!==null,outputColorSpace:tt===null?r.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Bt,matcap:zt,envMap:It,envMapMode:It&&K.mapping,envMapCubeUVHeight:q,aoMap:Yt,lightMap:Kt,bumpMap:V,normalMap:ne,displacementMap:_e,emissiveMap:Le,normalMapObjectSpace:ne&&v.normalMapType===pg,normalMapTangentSpace:ne&&v.normalMapType===Wf,packedNormalMap:ne&&v.normalMapType===Wf&&Tb(v.normalMap.format),metalnessMap:qt,roughnessMap:de,anisotropy:F,anisotropyMap:$,clearcoat:Pe,clearcoatMap:ct,clearcoatNormalMap:ot,clearcoatRoughnessMap:Q,dispersion:Wt,retroreflection:P,iridescence:x,iridescenceMap:nt,iridescenceThicknessMap:ft,sheen:O,sheenColorMap:Et,sheenRoughnessMap:dt,specularMap:ut,specularColorMap:lt,specularIntensityMap:Lt,transmission:H,transmissionMap:Ft,thicknessMap:N,gradientMap:ht,opaque:v.transparent===!1&&v.blending===xo&&v.alphaToCoverage===!1,alphaMap:et,alphaTest:pt,alphaHash:xt,combine:v.combine,mapUv:Bt&&m(v.map.channel),aoMapUv:Yt&&m(v.aoMap.channel),lightMapUv:Kt&&m(v.lightMap.channel),bumpMapUv:V&&m(v.bumpMap.channel),normalMapUv:ne&&m(v.normalMap.channel),displacementMapUv:_e&&m(v.displacementMap.channel),emissiveMapUv:Le&&m(v.emissiveMap.channel),metalnessMapUv:qt&&m(v.metalnessMap.channel),roughnessMapUv:de&&m(v.roughnessMap.channel),anisotropyMapUv:$&&m(v.anisotropyMap.channel),clearcoatMapUv:ct&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ot&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:dt&&m(v.sheenRoughnessMap.channel),specularMapUv:ut&&m(v.specularMap.channel),specularColorMapUv:lt&&m(v.specularColorMap.channel),specularIntensityMapUv:Lt&&m(v.specularIntensityMap.channel),transmissionMapUv:Ft&&m(v.transmissionMap.channel),thicknessMapUv:N&&m(v.thicknessMap.channel),alphaMapUv:et&&m(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ne||F),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Bt||et),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&ne===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Mt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:at,decodeVideoTexture:Bt&&v.map.isVideoTexture===!0&&oe.getTransfer(v.map.colorSpace)===ge,decodeVideoTextureEmissive:Le&&v.emissiveMap.isVideoTexture===!0&&oe.getTransfer(v.emissiveMap.colorSpace)===ge,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===qi,flipSided:v.side===kn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:it&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&v.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function p(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)w.push(C),w.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(g(w,v),M(w,v),w.push(r.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function g(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function A(v){let w=f[v.type],C;if(w){let D=$i[w];C=Cg.clone(D.uniforms)}else C=v.uniforms;return C}function y(v,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new Mb(r,w,v,i),c.push(C),h.set(w,C)),C}function S(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:A,acquireProgram:y,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:E}}function Eb(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Ab(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Zg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Jg(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,_,p,g){let M=r[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:g},r[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=m,M.materialVariant=o(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=p,M.group=g),t++,M}function l(u,f,m,_,p,g,M){M.reversedDepth===!0&&(p=-p);let A=a(u,f,m,_,p,g);m.transmission>0?n.push(A):m.transparent===!0?i.push(A):e.push(A)}function c(u,f,m,_,p,g){let M=a(u,f,m,_,p,g);m.transmission>0?n.unshift(M):m.transparent===!0?i.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||Ab),n.length>1&&n.sort(f||Zg),i.length>1&&i.sort(f||Zg)}function d(){for(let u=t,f=r.length;u<f;u++){let m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function Cb(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Jg,r.set(n,[o])):i>=s.length?(o=new Jg,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Rb(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new he};break;case"SpotLight":e={position:new Z,direction:new Z,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=e,e}}}function Pb(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Ib=0;function Lb(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Db(r){let t=new Rb,e=Pb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);let i=new Z,s=new ke,o=new ke;function a(c){let h=0,d=0,u=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,M=0,A=0,y=0,S=0,T=0,E=0,v=0,w=0,C=0;c.sort(Lb);for(let I=0,z=c.length;I<z;I++){let L=c[I],B=L.color,X=L.intensity,k=L.distance,K=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Zr?K=L.shadow.map.texture:K=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=B.r*X,d+=B.g*X,u+=B.b*X;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],X);C++}else if(L.isSunLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,j=e.get(L);j.shadowIntensity=R.intensity,j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[m]=j,n.sunShadowMap[m]=K;let St=R.getViewportCount();for(let Mt=0;Mt<St;Mt++)n.sunShadowMatrix[_+Mt]=R.getMatrix(Mt),n.sunShadowCascade[_+Mt]=R._cascadeData[Mt];_+=St,m++}n.sun[f]=q,f++}else if(L.isDirectionalLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,j=e.get(L);j.shadowIntensity=R.intensity,j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=L.shadow.matrix,S++}n.directional[p]=q,p++}else if(L.isSpotLight){let q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(B).multiplyScalar(X),q.distance=k,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[M]=q;let R=L.shadow;if(L.map&&(n.spotLightMap[v]=L.map,v++,R.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[M]=R.matrix,L.castShadow){let j=e.get(L);j.shadowIntensity=R.intensity,j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=K,E++}M++}else if(L.isRectAreaLight){let q=t.get(L);q.color.copy(B).multiplyScalar(X),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=q,A++}else if(L.isPointLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let R=L.shadow,j=e.get(L);j.shadowIntensity=R.intensity,j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,j.shadowCameraNear=R.camera.near,j.shadowCameraFar=R.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=L.shadow.matrix,T++}n.point[g]=q,g++}else if(L.isHemisphereLight){let q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(X),q.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[y]=q,y++}}A>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==g||D.spotLength!==M||D.rectAreaLength!==A||D.hemiLength!==y||D.numSunShadows!==m||D.numDirectionalShadows!==S||D.numPointShadows!==T||D.numSpotShadows!==E||D.numSpotMaps!==v||D.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=A,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,D.sunLength=f,D.directionalLength=p,D.pointLength=g,D.spotLength=M,D.rectAreaLength=A,D.hemiLength=y,D.numSunShadows=m,D.numDirectionalShadows=S,D.numPointShadows=T,D.numSpotShadows=E,D.numSpotMaps=v,D.numLightProbes=C,n.version=Ib++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){let y=c[M];if(y.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),u++}else if(y.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function $g(r){let t=new Db(r),e=[],n=[],i=[];function s(u){d.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Nb(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new $g(r),t.set(i,[a])):s>=o.length?(a=new $g(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ub=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ob=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Bb=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Kg=new ke,za=new Z,ad=new Z;function zb(r,t,e){let n=new ya,i=new fe,s=new fe,o=new Ue,a=new _c,l=new xc,c={},h=e.maxTextureSize,d={[Wr]:kn,[kn]:Wr,[qi]:qi},u=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Ub,fragmentShader:Fb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new ai;m.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Si(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ca;let g=this.type;this.render=function(T,E,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Xm&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ca);let w=r.getRenderTarget(),C=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Zi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let z=g!==this.type;z&&E.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=T.length;L<B;L++){let X=T[L],k=X.shadow;if(k===void 0){Gt("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let K=k.getFrameExtents();i.multiply(K),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,k.mapSize.y=s.y));let q=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=q,k.map===null||z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===_o){if(X.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Jn(i.x,i.y,{format:Zr,type:Di,minFilter:dn,magFilter:dn,generateMipmaps:!1}),k.map.texture.name=X.name+".shadowMap",k.map.depthTexture=new kr(i.x,i.y,Li),k.map.depthTexture.name=X.name+".shadowMapDepth",k.map.depthTexture.format=Wi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=ln,k.map.depthTexture.magFilter=ln}else X.isPointLight?(k.map=new Mh(i.x),k.map.depthTexture=new mc(i.x,Ii)):(k.map=new Jn(i.x,i.y),k.map.depthTexture=new kr(i.x,i.y,Ii)),k.map.depthTexture.name=X.name+".shadowMap",k.map.depthTexture.format=Wi,this.type===Ca?(k.map.depthTexture.compareFunction=q?xh:_h,k.map.depthTexture.minFilter=dn,k.map.depthTexture.magFilter=dn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=ln,k.map.depthTexture.magFilter=ln);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);let R=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();X.isPointLight!==!0&&k.updateMatrices(X,v);for(let j=0;j<R;j++){let St=k.getCamera(j);if(X.isPointLight){let Mt=k.camera,Vt=k.matrix,kt=X.distance||Mt.far;kt!==Mt.far&&(Mt.far=kt,Mt.updateProjectionMatrix()),za.setFromMatrixPosition(X.matrixWorld),Mt.position.copy(za),ad.copy(Mt.position),ad.add(Ob[j]),Mt.up.copy(Bb[j]),Mt.lookAt(ad),Mt.updateMatrixWorld(),Vt.makeTranslation(-za.x,-za.y,-za.z),Kg.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Kg,Mt.coordinateSystem,Mt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,j),r.clear();else{j===0&&(r.setRenderTarget(k.map),r.clear());let Mt=k.getViewport(j);o.set(s.x*Mt.x,s.y*Mt.y,s.x*Mt.z,s.y*Mt.w),I.viewport(o)}n=k.getFrustum(j),y(E,v,St,X,this.type)}k.isPointLightShadow!==!0&&this.type===_o&&M(k,v),k.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(w,C,D)};function M(T,E){let v=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Jn(i.x,i.y,{format:Zr,type:Di}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(E,null,v,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(E,null,v,f,_,null)}function A(T,E,v,w){let C=null,D=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)C=D;else if(C=v.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let I=C.uuid,z=E.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let B=L[z];B===void 0&&(B=C.clone(),L[z]=B,E.addEventListener("dispose",S)),C=B}if(C.visible=E.visible,C.wireframe=E.wireframe,w===_o?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:d[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let I=r.properties.get(C);I.light=v}return C}function y(T,E,v,w,C){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===_o)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let z=t.update(T),L=T.material;if(Array.isArray(L)){let B=z.groups;for(let X=0,k=B.length;X<k;X++){let K=B[X],q=L[K.materialIndex];if(q&&q.visible){let R=A(T,q,w,C);T.onBeforeShadow(r,T,E,v,z,R,K),r.renderBufferDirect(v,null,z,R,T,K),T.onAfterShadow(r,T,E,v,z,R,K)}}}else if(L.visible){let B=A(T,L,w,C);T.onBeforeShadow(r,T,E,v,z,B,null),r.renderBufferDirect(v,null,z,B,T,null),T.onAfterShadow(r,T,E,v,z,B,null)}}let I=T.children;for(let z=0,L=I.length;z<L;z++)y(I[z],E,v,w,C)}function S(T){T.target.removeEventListener("dispose",S);for(let v in c){let w=c[v],C=T.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function kb(r,t){function e(){let N=!1,ht=new Ue,et=null,pt=new Ue(0,0,0,0);return{setMask:function(xt){et!==xt&&!N&&(r.colorMask(xt,xt,xt,xt),et=xt)},setLocked:function(xt){N=xt},setClear:function(xt,it,at,rt,Nt){Nt===!0&&(xt*=rt,it*=rt,at*=rt),ht.set(xt,it,at,rt),pt.equals(ht)===!1&&(r.clearColor(xt,it,at,rt),pt.copy(ht))},reset:function(){N=!1,et=null,pt.set(-1,0,0,0)}}}function n(){let N=!1,ht=!1,et=null,pt=null,xt=null;return{setReversed:function(it){if(ht!==it){let at=t.get("EXT_clip_control");it?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),ht=it;let rt=xt;xt=null,this.setClear(rt)}},getReversed:function(){return ht},setTest:function(it){it?tt(r.DEPTH_TEST):_t(r.DEPTH_TEST)},setMask:function(it){et!==it&&!N&&(r.depthMask(it),et=it)},setFunc:function(it){if(ht&&(it=Eg[it]),pt!==it){switch(it){case jl:r.depthFunc(r.NEVER);break;case tc:r.depthFunc(r.ALWAYS);break;case ec:r.depthFunc(r.LESS);break;case uo:r.depthFunc(r.LEQUAL);break;case nc:r.depthFunc(r.EQUAL);break;case ic:r.depthFunc(r.GEQUAL);break;case rc:r.depthFunc(r.GREATER);break;case sc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pt=it}},setLocked:function(it){N=it},setClear:function(it){xt!==it&&(xt=it,ht&&(it=1-it),r.clearDepth(it))},reset:function(){N=!1,et=null,pt=null,xt=null,ht=!1}}}function i(){let N=!1,ht=null,et=null,pt=null,xt=null,it=null,at=null,rt=null,Nt=null;return{setTest:function(st){N||(st?tt(r.STENCIL_TEST):_t(r.STENCIL_TEST))},setMask:function(st){ht!==st&&!N&&(r.stencilMask(st),ht=st)},setFunc:function(st,Ut,At){(et!==st||pt!==Ut||xt!==At)&&(r.stencilFunc(st,Ut,At),et=st,pt=Ut,xt=At)},setOp:function(st,Ut,At){(it!==st||at!==Ut||rt!==At)&&(r.stencilOp(st,Ut,At),it=st,at=Ut,rt=At)},setLocked:function(st){N=st},setClear:function(st){Nt!==st&&(r.clearStencil(st),Nt=st)},reset:function(){N=!1,ht=null,et=null,pt=null,xt=null,it=null,at=null,rt=null,Nt=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],_=null,p=!1,g=null,M=null,A=null,y=null,S=null,T=null,E=null,v=new he(0,0,0),w=0,C=!1,D=null,I=null,z=null,L=null,B=null,X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,K=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=K>=2);let R=null,j={},St=r.getParameter(r.SCISSOR_BOX),Mt=r.getParameter(r.VIEWPORT),Vt=new Ue().fromArray(St),kt=new Ue().fromArray(Mt);function Ht(N,ht,et,pt){let xt=new Uint8Array(4),it=r.createTexture();r.bindTexture(N,it),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<et;at++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ht,0,r.RGBA,1,1,pt,0,r.RGBA,r.UNSIGNED_BYTE,xt):r.texImage2D(ht+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xt);return it}let J={};J[r.TEXTURE_2D]=Ht(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=Ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(r.DEPTH_TEST),o.setFunc(uo),V(!1),ne(Mf),tt(r.CULL_FACE),Yt(Zi);function tt(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function _t(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function Ot(N,ht){return u[N]!==ht?(r.bindFramebuffer(N,ht),u[N]=ht,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ht),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ht),!0):!1}function mt(N,ht){let et=m,pt=!1;if(N){et=f.get(ht),et===void 0&&(et=[],f.set(ht,et));let xt=N.textures;if(et.length!==xt.length||et[0]!==r.COLOR_ATTACHMENT0){for(let it=0,at=xt.length;it<at;it++)et[it]=r.COLOR_ATTACHMENT0+it;et.length=xt.length,pt=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,pt=!0);pt&&r.drawBuffers(et)}function Bt(N){return _!==N?(r.useProgram(N),_=N,!0):!1}let zt={[Ms]:r.FUNC_ADD,[qm]:r.FUNC_SUBTRACT,[Zm]:r.FUNC_REVERSE_SUBTRACT};zt[Jm]=r.MIN,zt[$m]=r.MAX;let It={[Km]:r.ZERO,[Qm]:r.ONE,[jm]:r.SRC_COLOR,[Ef]:r.SRC_ALPHA,[sg]:r.SRC_ALPHA_SATURATE,[ig]:r.DST_COLOR,[eg]:r.DST_ALPHA,[tg]:r.ONE_MINUS_SRC_COLOR,[Af]:r.ONE_MINUS_SRC_ALPHA,[rg]:r.ONE_MINUS_DST_COLOR,[ng]:r.ONE_MINUS_DST_ALPHA,[og]:r.CONSTANT_COLOR,[ag]:r.ONE_MINUS_CONSTANT_COLOR,[lg]:r.CONSTANT_ALPHA,[cg]:r.ONE_MINUS_CONSTANT_ALPHA};function Yt(N,ht,et,pt,xt,it,at,rt,Nt,st){if(N===Zi){p===!0&&(_t(r.BLEND),p=!1);return}if(p===!1&&(tt(r.BLEND),p=!0),N!==Ym){if(N!==g||st!==C){if((M!==Ms||S!==Ms)&&(r.blendEquation(r.FUNC_ADD),M=Ms,S=Ms),st)switch(N){case xo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bf:r.blendFunc(r.ONE,r.ONE);break;case Tf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xt("WebGLState: Invalid blending: ",N);break}else switch(N){case xo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Tf:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wf:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",N);break}A=null,y=null,T=null,E=null,v.set(0,0,0),w=0,g=N,C=st}return}xt=xt||ht,it=it||et,at=at||pt,(ht!==M||xt!==S)&&(r.blendEquationSeparate(zt[ht],zt[xt]),M=ht,S=xt),(et!==A||pt!==y||it!==T||at!==E)&&(r.blendFuncSeparate(It[et],It[pt],It[it],It[at]),A=et,y=pt,T=it,E=at),(rt.equals(v)===!1||Nt!==w)&&(r.blendColor(rt.r,rt.g,rt.b,Nt),v.copy(rt),w=Nt),g=N,C=!1}function Kt(N,ht){N.side===qi?_t(r.CULL_FACE):tt(r.CULL_FACE);let et=N.side===kn;ht&&(et=!et),V(et),N.blending===xo&&N.transparent===!1?Yt(Zi):Yt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let pt=N.stencilWrite;a.setTest(pt),pt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Le(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(r.SAMPLE_ALPHA_TO_COVERAGE):_t(r.SAMPLE_ALPHA_TO_COVERAGE)}function V(N){D!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),D=N)}function ne(N){N!==Hm?(tt(r.CULL_FACE),N!==I&&(N===Mf?r.cullFace(r.BACK):N===Wm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_t(r.CULL_FACE),I=N}function _e(N){N!==z&&(k&&r.lineWidth(N),z=N)}function Le(N,ht,et){N?(tt(r.POLYGON_OFFSET_FILL),(L!==ht||B!==et)&&(L=ht,B=et,o.getReversed()&&(ht=-ht),r.polygonOffset(ht,et))):_t(r.POLYGON_OFFSET_FILL)}function qt(N){N?tt(r.SCISSOR_TEST):_t(r.SCISSOR_TEST)}function de(N){N===void 0&&(N=r.TEXTURE0+X-1),R!==N&&(r.activeTexture(N),R=N)}function F(N,ht,et){et===void 0&&(R===null?et=r.TEXTURE0+X-1:et=R);let pt=j[et];pt===void 0&&(pt={type:void 0,texture:void 0},j[et]=pt),(pt.type!==N||pt.texture!==ht)&&(R!==et&&(r.activeTexture(et),R=et),r.bindTexture(N,ht||J[N]),pt.type=N,pt.texture=ht)}function Pe(){let N=j[R];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Wt(){try{r.compressedTexImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function x(){try{r.texSubImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function O(){try{r.texSubImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function H(){try{r.compressedTexSubImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function $(){try{r.compressedTexSubImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function ct(){try{r.texStorage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function ot(){try{r.texStorage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function Q(){try{r.texImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function nt(){try{r.texImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function ft(N){return d[N]!==void 0?d[N]:r.getParameter(N)}function Et(N,ht){d[N]!==ht&&(r.pixelStorei(N,ht),d[N]=ht)}function dt(N){Vt.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Vt.copy(N))}function ut(N){kt.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),kt.copy(N))}function lt(N,ht){let et=c.get(ht);et===void 0&&(et=new WeakMap,c.set(ht,et));let pt=et.get(N);pt===void 0&&(pt=r.getUniformBlockIndex(ht,N.name),et.set(N,pt))}function Lt(N,ht){let pt=c.get(ht).get(N);l.get(ht)!==pt&&(r.uniformBlockBinding(ht,pt,N.__bindingPointIndex),l.set(ht,pt))}function Ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,j={},u={},f=new WeakMap,m=[],_=null,p=!1,g=null,M=null,A=null,y=null,S=null,T=null,E=null,v=new he(0,0,0),w=0,C=!1,D=null,I=null,z=null,L=null,B=null,Vt.set(0,0,r.canvas.width,r.canvas.height),kt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:tt,disable:_t,bindFramebuffer:Ot,drawBuffers:mt,useProgram:Bt,setBlending:Yt,setMaterial:Kt,setFlipSided:V,setCullFace:ne,setLineWidth:_e,setPolygonOffset:Le,setScissorTest:qt,activeTexture:de,bindTexture:F,unbindTexture:Pe,compressedTexImage2D:Wt,compressedTexImage3D:P,texImage2D:Q,texImage3D:nt,pixelStorei:Et,getParameter:ft,updateUBOMapping:lt,uniformBlockBinding:Lt,texStorage2D:ct,texStorage3D:ot,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:H,compressedTexSubImage3D:$,scissor:dt,viewport:ut,reset:Ft}}function Vb(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,x){return m?new OffscreenCanvas(P,x):fa("canvas")}function p(P,x,O){let H=1,$=Wt(P);if(($.width>O||$.height>O)&&(H=O/Math.max($.width,$.height)),H<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ct=Math.floor(H*$.width),ot=Math.floor(H*$.height);u===void 0&&(u=_(ct,ot));let Q=x?_(ct,ot):u;return Q.width=ct,Q.height=ot,Q.getContext("2d").drawImage(P,0,0,ct,ot),Gt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ct+"x"+ot+")."),Q}else return"data"in P&&Gt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function g(P){return P.generateMipmaps}function M(P){r.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,x,O,H,$,ct=!1){if(P!==null){if(r[P]!==void 0)return r[P];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ot;H&&(ot=t.get("EXT_texture_norm16"),ot||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===r.RED&&(O===r.FLOAT&&(Q=r.R32F),O===r.HALF_FLOAT&&(Q=r.R16F),O===r.UNSIGNED_BYTE&&(Q=r.R8),O===r.UNSIGNED_SHORT&&ot&&(Q=ot.R16_EXT),O===r.SHORT&&ot&&(Q=ot.R16_SNORM_EXT)),x===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(Q=r.R8UI),O===r.UNSIGNED_SHORT&&(Q=r.R16UI),O===r.UNSIGNED_INT&&(Q=r.R32UI),O===r.BYTE&&(Q=r.R8I),O===r.SHORT&&(Q=r.R16I),O===r.INT&&(Q=r.R32I)),x===r.RG&&(O===r.FLOAT&&(Q=r.RG32F),O===r.HALF_FLOAT&&(Q=r.RG16F),O===r.UNSIGNED_BYTE&&(Q=r.RG8),O===r.UNSIGNED_SHORT&&ot&&(Q=ot.RG16_EXT),O===r.SHORT&&ot&&(Q=ot.RG16_SNORM_EXT)),x===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(Q=r.RG8UI),O===r.UNSIGNED_SHORT&&(Q=r.RG16UI),O===r.UNSIGNED_INT&&(Q=r.RG32UI),O===r.BYTE&&(Q=r.RG8I),O===r.SHORT&&(Q=r.RG16I),O===r.INT&&(Q=r.RG32I)),x===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),O===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),O===r.UNSIGNED_INT&&(Q=r.RGB32UI),O===r.BYTE&&(Q=r.RGB8I),O===r.SHORT&&(Q=r.RGB16I),O===r.INT&&(Q=r.RGB32I)),x===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),O===r.UNSIGNED_INT&&(Q=r.RGBA32UI),O===r.BYTE&&(Q=r.RGBA8I),O===r.SHORT&&(Q=r.RGBA16I),O===r.INT&&(Q=r.RGBA32I)),x===r.RGB&&(O===r.UNSIGNED_SHORT&&ot&&(Q=ot.RGB16_EXT),O===r.SHORT&&ot&&(Q=ot.RGB16_SNORM_EXT),O===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(Q=r.R11F_G11F_B10F)),x===r.RGBA){let nt=ct?ha:oe.getTransfer($);O===r.FLOAT&&(Q=r.RGBA32F),O===r.HALF_FLOAT&&(Q=r.RGBA16F),O===r.UNSIGNED_BYTE&&(Q=nt===ge?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT&&ot&&(Q=ot.RGBA16_EXT),O===r.SHORT&&ot&&(Q=ot.RGBA16_SNORM_EXT),O===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function S(P,x){let O;return P?x===null||x===Ii||x===yo?O=r.DEPTH24_STENCIL8:x===Li?O=r.DEPTH32F_STENCIL8:x===vo&&(O=r.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ii||x===yo?O=r.DEPTH_COMPONENT24:x===Li?O=r.DEPTH_COMPONENT32F:x===vo&&(O=r.DEPTH_COMPONENT16),O}function T(P,x){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==ln&&P.minFilter!==dn?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function E(P){let x=P.target;x.removeEventListener("dispose",E),w(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function v(P){let x=P.target;x.removeEventListener("dispose",v),D(x)}function w(P){let x=n.get(P);if(x.__webglInit===void 0)return;let O=P.source,H=f.get(O);if(H){let $=H[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&C(P),Object.keys(H).length===0&&f.delete(O)}n.remove(P)}function C(P){let x=n.get(P);r.deleteTexture(x.__webglTexture);let O=P.source,H=f.get(O);delete H[x.__cacheKey],o.memory.textures--}function D(P){let x=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let $=0;$<x.__webglFramebuffer[H].length;$++)r.deleteFramebuffer(x.__webglFramebuffer[H][$]);else r.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)r.deleteFramebuffer(x.__webglFramebuffer[H]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=P.textures;for(let H=0,$=O.length;H<$;H++){let ct=n.get(O[H]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),o.memory.textures--),n.remove(O[H])}n.remove(P)}let I=0;function z(){I=0}function L(){return I}function B(P){I=P}function X(){let P=I;return P>=i.maxTextures&&Gt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function k(P){let x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function K(P,x){let O=n.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&O.__version!==P.version){let H=P.image;if(H===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(O,P,x);return}}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+x)}function q(P,x){let O=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){_t(O,P,x);return}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+x)}function R(P,x){let O=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){_t(O,P,x);return}e.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+x)}function j(P,x){let O=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&O.__version!==P.version){Ot(O,P,x);return}e.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+x)}let St={[oc]:r.REPEAT,[Hi]:r.CLAMP_TO_EDGE,[ac]:r.MIRRORED_REPEAT},Mt={[ln]:r.NEAREST,[fg]:r.NEAREST_MIPMAP_NEAREST,[Pa]:r.NEAREST_MIPMAP_LINEAR,[dn]:r.LINEAR,[Nc]:r.LINEAR_MIPMAP_NEAREST,[Yr]:r.LINEAR_MIPMAP_LINEAR},Vt={[gg]:r.NEVER,[Sg]:r.ALWAYS,[_g]:r.LESS,[_h]:r.LEQUAL,[xg]:r.EQUAL,[xh]:r.GEQUAL,[vg]:r.GREATER,[yg]:r.NOTEQUAL};function kt(P,x){if(x.type===Li&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===dn||x.magFilter===Nc||x.magFilter===Pa||x.magFilter===Yr||x.minFilter===dn||x.minFilter===Nc||x.minFilter===Pa||x.minFilter===Yr)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,St[x.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,St[x.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,St[x.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Mt[x.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Mt[x.minFilter]),x.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Vt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ln||x.minFilter!==Pa&&x.minFilter!==Yr||x.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ht(P,x){let O=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",E));let H=x.source,$=f.get(H);$===void 0&&($={},f.set(H,$));let ct=k(x);if(ct!==P.__cacheKey){$[ct]===void 0&&($[ct]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,O=!0),$[ct].usedTimes++;let ot=$[P.__cacheKey];ot!==void 0&&($[P.__cacheKey].usedTimes--,ot.usedTimes===0&&C(x)),P.__cacheKey=ct,P.__webglTexture=$[ct].texture}return O}function J(P,x,O){return Math.floor(Math.floor(P/O)/x)}function tt(P,x,O,H){let ct=P.updateRanges;if(ct.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,O,H,x.data);else{ct.sort((Et,dt)=>Et.start-dt.start);let ot=0;for(let Et=1;Et<ct.length;Et++){let dt=ct[ot],ut=ct[Et],lt=dt.start+dt.count,Lt=J(ut.start,x.width,4),Ft=J(dt.start,x.width,4);ut.start<=lt+1&&Lt===Ft&&J(ut.start+ut.count-1,x.width,4)===Lt?dt.count=Math.max(dt.count,ut.start+ut.count-dt.start):(++ot,ct[ot]=ut)}ct.length=ot+1;let Q=e.getParameter(r.UNPACK_ROW_LENGTH),nt=e.getParameter(r.UNPACK_SKIP_PIXELS),ft=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let Et=0,dt=ct.length;Et<dt;Et++){let ut=ct[Et],lt=Math.floor(ut.start/4),Lt=Math.ceil(ut.count/4),Ft=lt%x.width,N=Math.floor(lt/x.width),ht=Lt,et=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(r.UNPACK_SKIP_ROWS,N),e.texSubImage2D(r.TEXTURE_2D,0,Ft,N,ht,et,O,H,x.data)}P.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,Q),e.pixelStorei(r.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(r.UNPACK_SKIP_ROWS,ft)}}function _t(P,x,O){let H=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=r.TEXTURE_3D);let $=Ht(P,x),ct=x.source;e.bindTexture(H,P.__webglTexture,r.TEXTURE0+O);let ot=n.get(ct);if(ct.version!==ot.__version||$===!0){if(e.activeTexture(r.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let et=oe.getPrimaries(oe.workingColorSpace),pt=x.colorSpace===pr?null:oe.getPrimaries(x.colorSpace),xt=x.colorSpace===pr||et===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment);let nt=p(x.image,!1,i.maxTextureSize);nt=Pe(x,nt);let ft=s.convert(x.format,x.colorSpace),Et=s.convert(x.type),dt=y(x.internalFormat,ft,Et,x.normalized,x.colorSpace,x.isVideoTexture);kt(H,x);let ut,lt=x.mipmaps,Lt=x.isVideoTexture!==!0,Ft=ot.__version===void 0||$===!0,N=ct.dataReady,ht=T(x,nt);if(x.isDepthTexture)dt=S(x.format===qr,x.type),Ft&&(Lt?e.texStorage2D(r.TEXTURE_2D,1,dt,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,dt,nt.width,nt.height,0,ft,Et,null));else if(x.isDataTexture)if(lt.length>0){Lt&&Ft&&e.texStorage2D(r.TEXTURE_2D,ht,dt,lt[0].width,lt[0].height);for(let et=0,pt=lt.length;et<pt;et++)ut=lt[et],Lt?N&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ut.width,ut.height,ft,Et,ut.data):e.texImage2D(r.TEXTURE_2D,et,dt,ut.width,ut.height,0,ft,Et,ut.data);x.generateMipmaps=!1}else Lt?(Ft&&e.texStorage2D(r.TEXTURE_2D,ht,dt,nt.width,nt.height),N&&tt(x,nt,ft,Et)):e.texImage2D(r.TEXTURE_2D,0,dt,nt.width,nt.height,0,ft,Et,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Lt&&Ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ht,dt,lt[0].width,lt[0].height,nt.depth);for(let et=0,pt=lt.length;et<pt;et++)if(ut=lt[et],x.format!==Mi)if(ft!==null)if(Lt){if(N)if(x.layerUpdates.size>0){let xt=$f(ut.width,ut.height,x.format,x.type);for(let it of x.layerUpdates){let at=ut.data.subarray(it*xt/ut.data.BYTES_PER_ELEMENT,(it+1)*xt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,it,ut.width,ut.height,1,ft,at)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,ut.width,ut.height,nt.depth,ft,ut.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,et,dt,ut.width,ut.height,nt.depth,0,ut.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?N&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,ut.width,ut.height,nt.depth,ft,Et,ut.data):e.texImage3D(r.TEXTURE_2D_ARRAY,et,dt,ut.width,ut.height,nt.depth,0,ft,Et,ut.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Lt&&Ft&&e.texStorage2D(r.TEXTURE_2D,ht,dt,lt[0].width,lt[0].height);for(let et=0,pt=lt.length;et<pt;et++)ut=lt[et],x.format!==Mi?ft!==null?Lt?N&&e.compressedTexSubImage2D(r.TEXTURE_2D,et,0,0,ut.width,ut.height,ft,ut.data):e.compressedTexImage2D(r.TEXTURE_2D,et,dt,ut.width,ut.height,0,ut.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?N&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ut.width,ut.height,ft,Et,ut.data):e.texImage2D(r.TEXTURE_2D,et,dt,ut.width,ut.height,0,ft,Et,ut.data)}else if(x.isDataArrayTexture)if(Lt){if(Ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ht,dt,nt.width,nt.height,nt.depth),N)if(x.layerUpdates.size>0){let et=$f(nt.width,nt.height,x.format,x.type);for(let pt of x.layerUpdates){let xt=nt.data.subarray(pt*et/nt.data.BYTES_PER_ELEMENT,(pt+1)*et/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pt,nt.width,nt.height,1,ft,Et,xt)}x.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ft,Et,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,dt,nt.width,nt.height,nt.depth,0,ft,Et,nt.data);else if(x.isData3DTexture)Lt?(Ft&&e.texStorage3D(r.TEXTURE_3D,ht,dt,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ft,Et,nt.data)):e.texImage3D(r.TEXTURE_3D,0,dt,nt.width,nt.height,nt.depth,0,ft,Et,nt.data);else if(x.isFramebufferTexture){if(Ft)if(Lt)e.texStorage2D(r.TEXTURE_2D,ht,dt,nt.width,nt.height);else{let et=nt.width,pt=nt.height;for(let xt=0;xt<ht;xt++)e.texImage2D(r.TEXTURE_2D,xt,dt,et,pt,0,ft,Et,null),et>>=1,pt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in r){let et=r.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),nt.parentNode!==et){et.appendChild(nt),d.add(x),et.onpaint=pt=>{let xt=pt.changedElements;for(let it of d)xt.includes(it.image)&&(it.needsUpdate=!0)},et.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,nt);else{let xt=r.RGBA,it=r.RGBA,at=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,xt,it,at,nt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(lt.length>0){if(Lt&&Ft){let et=Wt(lt[0]);e.texStorage2D(r.TEXTURE_2D,ht,dt,et.width,et.height)}for(let et=0,pt=lt.length;et<pt;et++)ut=lt[et],Lt?N&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ft,Et,ut):e.texImage2D(r.TEXTURE_2D,et,dt,ft,Et,ut);x.generateMipmaps=!1}else if(Lt){if(Ft){let et=Wt(nt);e.texStorage2D(r.TEXTURE_2D,ht,dt,et.width,et.height)}N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ft,Et,nt)}else e.texImage2D(r.TEXTURE_2D,0,dt,ft,Et,nt);g(x)&&M(H),ot.__version=ct.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function Ot(P,x,O){if(x.image.length!==6)return;let H=Ht(P,x),$=x.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+O);let ct=n.get($);if($.version!==ct.__version||H===!0){e.activeTexture(r.TEXTURE0+O);let ot=oe.getPrimaries(oe.workingColorSpace),Q=x.colorSpace===pr?null:oe.getPrimaries(x.colorSpace),nt=x.colorSpace===pr||ot===Q?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ft=x.isCompressedTexture||x.image[0].isCompressedTexture,Et=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let it=0;it<6;it++)!ft&&!Et?dt[it]=p(x.image[it],!0,i.maxCubemapSize):dt[it]=Et?x.image[it].image:x.image[it],dt[it]=Pe(x,dt[it]);let ut=dt[0],lt=s.convert(x.format,x.colorSpace),Lt=s.convert(x.type),Ft=y(x.internalFormat,lt,Lt,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,ht=ct.__version===void 0||H===!0,et=$.dataReady,pt=T(x,ut);kt(r.TEXTURE_CUBE_MAP,x);let xt;if(ft){N&&ht&&e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Ft,ut.width,ut.height);for(let it=0;it<6;it++){xt=dt[it].mipmaps;for(let at=0;at<xt.length;at++){let rt=xt[at];x.format!==Mi?lt!==null?N?et&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,0,0,rt.width,rt.height,lt,rt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,Ft,rt.width,rt.height,0,rt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,0,0,rt.width,rt.height,lt,Lt,rt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at,Ft,rt.width,rt.height,0,lt,Lt,rt.data)}}}else{if(xt=x.mipmaps,N&&ht){xt.length>0&&pt++;let it=Wt(dt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Ft,it.width,it.height)}for(let it=0;it<6;it++)if(Et){N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,dt[it].width,dt[it].height,lt,Lt,dt[it].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ft,dt[it].width,dt[it].height,0,lt,Lt,dt[it].data);for(let at=0;at<xt.length;at++){let Nt=xt[at].image[it].image;N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,0,0,Nt.width,Nt.height,lt,Lt,Nt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,Ft,Nt.width,Nt.height,0,lt,Lt,Nt.data)}}else{N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,lt,Lt,dt[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ft,lt,Lt,dt[it]);for(let at=0;at<xt.length;at++){let rt=xt[at];N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,0,0,lt,Lt,rt.image[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,at+1,Ft,lt,Lt,rt.image[it])}}}g(x)&&M(r.TEXTURE_CUBE_MAP),ct.__version=$.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function mt(P,x,O,H,$,ct){let ot=s.convert(O.format,O.colorSpace),Q=s.convert(O.type),nt=y(O.internalFormat,ot,Q,O.normalized,O.colorSpace),ft=n.get(x),Et=n.get(O);if(Et.__renderTarget=x,!ft.__hasExternalTextures){let dt=Math.max(1,x.width>>ct),ut=Math.max(1,x.height>>ct);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?e.texImage3D($,ct,nt,dt,ut,x.depth,0,ot,Q,null):e.texImage2D($,ct,nt,dt,ut,0,ot,Q,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),de(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,H,$,Et.__webglTexture,0,qt(x)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,H,$,Et.__webglTexture,ct),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(P,x,O){if(r.bindRenderbuffer(r.RENDERBUFFER,P),x.depthBuffer){let H=x.depthTexture,$=H&&H.isDepthTexture?H.type:null,ct=S(x.stencilBuffer,$),ot=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;de(x)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt(x),ct,x.width,x.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt(x),ct,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,ct,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,P)}else{let H=x.textures;for(let $=0;$<H.length;$++){let ct=H[$],ot=s.convert(ct.format,ct.colorSpace),Q=s.convert(ct.type),nt=y(ct.internalFormat,ot,Q,ct.normalized,ct.colorSpace);de(x)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt(x),nt,x.width,x.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt(x),nt,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,nt,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function zt(P,x,O){let H=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",E)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),kt(r.TEXTURE_CUBE_MAP,x.depthTexture);let ft=s.convert(x.depthTexture.format),Et=s.convert(x.depthTexture.type),dt;x.depthTexture.format===Wi?dt=r.DEPTH_COMPONENT24:x.depthTexture.format===qr&&(dt=r.DEPTH24_STENCIL8);for(let ut=0;ut<6;ut++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,dt,x.width,x.height,0,ft,Et,null)}}else K(x.depthTexture,0);let ct=$.__webglTexture,ot=qt(x),Q=H?r.TEXTURE_CUBE_MAP_POSITIVE_X+O:r.TEXTURE_2D,nt=x.depthTexture.format===qr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===Wi)de(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,Q,ct,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,nt,Q,ct,0);else if(x.depthTexture.format===qr)de(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,Q,ct,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,nt,Q,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function It(P){let x=n.get(P),O=P.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==P.depthTexture){let H=P.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){let $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",$)};H.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=H}if(P.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let H=0;H<6;H++)zt(x.__webglFramebuffer[H],P,H);else{let H=P.texture.mipmaps;H&&H.length>0?zt(x.__webglFramebuffer[0],P,0):zt(x.__webglFramebuffer,P,0)}else if(O){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=r.createRenderbuffer(),Bt(x.__webglDepthbuffer[H],P,!1);else{let $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer[H];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ct)}}else{let H=P.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Bt(x.__webglDepthbuffer,P,!1);else{let $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ct)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Yt(P,x,O){let H=n.get(P);x!==void 0&&mt(H.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&It(P)}function Kt(P){let x=P.texture,O=n.get(P),H=n.get(x);P.addEventListener("dispose",v);let $=P.textures,ct=P.isWebGLCubeRenderTarget===!0,ot=$.length>1;if(ot||(H.__webglTexture===void 0&&(H.__webglTexture=r.createTexture()),H.__version=x.version,o.memory.textures++),ct){O.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[Q]=[];for(let nt=0;nt<x.mipmaps.length;nt++)O.__webglFramebuffer[Q][nt]=r.createFramebuffer()}else O.__webglFramebuffer[Q]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)O.__webglFramebuffer[Q]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(ot)for(let Q=0,nt=$.length;Q<nt;Q++){let ft=n.get($[Q]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&de(P)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Q=0;Q<$.length;Q++){let nt=$[Q];O.__webglColorRenderbuffer[Q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[Q]);let ft=s.convert(nt.format,nt.colorSpace),Et=s.convert(nt.type),dt=y(nt.internalFormat,ft,Et,nt.normalized,nt.colorSpace,P.isXRRenderTarget===!0),ut=qt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,dt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,O.__webglColorRenderbuffer[Q])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Bt(O.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture),kt(r.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let nt=0;nt<x.mipmaps.length;nt++)mt(O.__webglFramebuffer[Q][nt],P,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,nt);else mt(O.__webglFramebuffer[Q],P,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);g(x)&&M(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let Q=0,nt=$.length;Q<nt;Q++){let ft=$[Q],Et=n.get(ft),dt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(dt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(dt,Et.__webglTexture),kt(dt,ft),mt(O.__webglFramebuffer,P,ft,r.COLOR_ATTACHMENT0+Q,dt,0),g(ft)&&M(dt)}e.unbindTexture()}else{let Q=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Q,H.__webglTexture),kt(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let nt=0;nt<x.mipmaps.length;nt++)mt(O.__webglFramebuffer[nt],P,x,r.COLOR_ATTACHMENT0,Q,nt);else mt(O.__webglFramebuffer,P,x,r.COLOR_ATTACHMENT0,Q,0);g(x)&&M(Q),e.unbindTexture()}P.depthBuffer&&It(P)}function V(P){let x=P.textures;for(let O=0,H=x.length;O<H;O++){let $=x[O];if(g($)){let ct=A(P),ot=n.get($).__webglTexture;e.bindTexture(ct,ot),M(ct),e.unbindTexture()}}}let ne=[],_e=[];function Le(P){if(P.samples>0){if(de(P)===!1){let x=P.textures,O=P.width,H=P.height,$=r.COLOR_BUFFER_BIT,ct=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=n.get(P),Q=x.length>1;if(Q)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);let nt=P.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),Q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ot.__webglColorRenderbuffer[ft]);let Et=n.get(x[ft]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,O,H,0,0,O,H,$,r.NEAREST),l===!0&&(ne.length=0,_e.length=0,ne.push(r.COLOR_ATTACHMENT0+ft),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ne.push(ct),_e.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,_e)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ne))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Q)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,ot.__webglColorRenderbuffer[ft]);let Et=n.get(x[ft]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,Et,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let x=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function qt(P){return Math.min(i.maxSamples,P.samples)}function de(P){let x=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function F(P){let x=o.render.frame;h.get(P)!==x&&(h.set(P,x),P.update())}function Pe(P,x){let O=P.colorSpace,H=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||O!==ca&&O!==pr&&(oe.getTransfer(O)===ge?(H!==Mi||$!==ci)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",O)),x}function Wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=z,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=R,this.setTextureCube=j,this.rebindTextures=Yt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Gb(r,t){function e(n,i=pr){let s,o=oe.getTransfer(i);if(n===ci)return r.UNSIGNED_BYTE;if(n===Fc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Oc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===zf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===kf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Of)return r.BYTE;if(n===Bf)return r.SHORT;if(n===vo)return r.UNSIGNED_SHORT;if(n===Uc)return r.INT;if(n===Ii)return r.UNSIGNED_INT;if(n===Li)return r.FLOAT;if(n===Di)return r.HALF_FLOAT;if(n===Vf)return r.ALPHA;if(n===Gf)return r.RGB;if(n===Mi)return r.RGBA;if(n===Wi)return r.DEPTH_COMPONENT;if(n===qr)return r.DEPTH_STENCIL;if(n===Hf)return r.RED;if(n===Bc)return r.RED_INTEGER;if(n===Zr)return r.RG;if(n===zc)return r.RG_INTEGER;if(n===kc)return r.RGBA_INTEGER;if(n===Ia||n===La||n===Da||n===Na)if(o===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ia)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ia)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===La)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Da)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Na)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vc||n===Gc||n===Hc||n===Wc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Vc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xc||n===Yc||n===qc||n===Zc||n===Jc||n===Ua||n===$c)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xc||n===Yc)return o===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===qc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zc)return s.COMPRESSED_R11_EAC;if(n===Jc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ua)return s.COMPRESSED_RG11_EAC;if(n===$c)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kc||n===Qc||n===jc||n===th||n===eh||n===nh||n===ih||n===rh||n===sh||n===oh||n===ah||n===lh||n===ch||n===hh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Kc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jc)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===th)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eh)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nh)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ih)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rh)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sh)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oh)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ah)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lh)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ch)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hh)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uh||n===fh||n===dh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===uh)return o===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ph||n===mh||n===Fa||n===gh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ph)return s.COMPRESSED_RED_RGTC1_EXT;if(n===mh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Hb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,md=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ba(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new zn({vertexShader:Hb,fragmentShader:Wb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Si(new Ta(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gd=class extends Xi{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,_=typeof XRWebGLBinding<"u",p=new md,g={},M=e.getContextAttributes(),A=null,y=null,S=[],T=[],E=new fe,v=null,w=null,C=new Tn;C.viewport=new Ue;let D=new Tn;D.viewport=new Ue;let I=[C,D],z=new Pc,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let tt=S[J];return tt===void 0&&(tt=new mo,S[J]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(J){let tt=S[J];return tt===void 0&&(tt=new mo,S[J]=tt),tt.getGripSpace()},this.getHand=function(J){let tt=S[J];return tt===void 0&&(tt=new mo,S[J]=tt),tt.getHandSpace()};function X(J){let tt=T.indexOf(J.inputSource);if(tt===-1)return;let _t=S[tt];_t!==void 0&&(_t.update(J.inputSource,J.frame,c||o),_t.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",K);for(let J=0;J<S.length;J++){let tt=T[J];tt!==null&&(T[J]=null,S[J].disconnect(tt))}L=null,B=null,p.reset();for(let J in g)delete g[J];if(t.setRenderTarget(A),f=null,u=null,d=null,i=null,y=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(E.width,E.height,!1),w!==null){let J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(A=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",k),i.addEventListener("inputsourceschange",K),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Ot=null,mt=null;M.depth&&(mt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=M.stencil?qr:Wi,Ot=M.stencil?yo:Ii);let Bt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Bt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Jn(u.textureWidth,u.textureHeight,{format:Mi,type:ci,depthTexture:new kr(u.textureWidth,u.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _t={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Jn(f.framebufferWidth,f.framebufferHeight,{format:Mi,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ht.setContext(i),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(J){for(let tt=0;tt<J.removed.length;tt++){let _t=J.removed[tt],Ot=T.indexOf(_t);Ot>=0&&(T[Ot]=null,S[Ot].disconnect(_t))}for(let tt=0;tt<J.added.length;tt++){let _t=J.added[tt],Ot=T.indexOf(_t);if(Ot===-1){for(let Bt=0;Bt<S.length;Bt++)if(Bt>=T.length){T.push(_t),Ot=Bt;break}else if(T[Bt]===null){T[Bt]=_t,Ot=Bt;break}if(Ot===-1)break}let mt=S[Ot];mt&&mt.connect(_t)}}let q=new Z,R=new Z;function j(J,tt,_t){q.setFromMatrixPosition(tt.matrixWorld),R.setFromMatrixPosition(_t.matrixWorld);let Ot=q.distanceTo(R),mt=tt.projectionMatrix.elements,Bt=_t.projectionMatrix.elements,zt=mt[14]/(mt[10]-1),It=mt[14]/(mt[10]+1),Yt=(mt[9]+1)/mt[5],Kt=(mt[9]-1)/mt[5],V=(mt[8]-1)/mt[0],ne=(Bt[8]+1)/Bt[0],_e=zt*V,Le=zt*ne,qt=Ot/(-V+ne),de=qt*-V;if(tt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(de),J.translateZ(qt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),mt[10]===-1)J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let F=zt+qt,Pe=It+qt,Wt=_e-de,P=Le+(Ot-de),x=Yt*It/Pe*F,O=Kt*It/Pe*F;J.projectionMatrix.makePerspective(Wt,P,x,O,F,Pe),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function St(J,tt){tt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(tt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let tt=J.near,_t=J.far;p.texture!==null&&(p.depthNear>0&&(tt=p.depthNear),p.depthFar>0&&(_t=p.depthFar)),z.near=D.near=C.near=tt,z.far=D.far=C.far=_t,(L!==z.near||B!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,B=z.far),z.layers.mask=J.layers.mask|6,C.layers.mask=z.layers.mask&-5,D.layers.mask=z.layers.mask&-3;let Ot=J.parent,mt=z.cameras;St(z,Ot);for(let Bt=0;Bt<mt.length;Bt++)St(mt[Bt],Ot);mt.length===2?j(z,C,D):z.projectionMatrix.copy(C.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),Mt(J,z,Ot)};function Mt(J,tt,_t){_t===null?J.matrix.copy(tt.matrixWorld):(J.matrix.copy(_t.matrixWorld),J.matrix.invert(),J.matrix.multiply(tt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=cc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(J){return g[J]};let Vt=null;function kt(J,tt){if(h=tt.getViewerPose(c||o),m=tt,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ot=!1;_t.length!==z.cameras.length&&(z.cameras.length=0,Ot=!0);for(let It=0;It<_t.length;It++){let Yt=_t[It],Kt=null;if(f!==null)Kt=f.getViewport(Yt);else{let ne=d.getViewSubImage(u,Yt);Kt=ne.viewport,It===0&&(t.setRenderTargetTextures(y,ne.colorTexture,ne.depthStencilTexture),t.setRenderTarget(y))}let V=I[It];V===void 0&&(V=new Tn,V.layers.enable(It),V.viewport=new Ue,I[It]=V),V.matrix.fromArray(Yt.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Yt.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),It===0&&(z.matrix.copy(V.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ot===!0&&z.cameras.push(V)}let mt=i.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let It=d.getDepthInformation(_t[0]);It&&It.isValid&&It.texture&&p.init(It,i.renderState)}if(mt&&mt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let It=0;It<_t.length;It++){let Yt=_t[It].camera;if(Yt){let Kt=g[Yt];Kt||(Kt=new ba,g[Yt]=Kt);let V=d.getCameraImage(Yt);Kt.sourceTexture=V}}}}for(let _t=0;_t<S.length;_t++){let Ot=T[_t],mt=S[_t];Ot!==null&&mt!==void 0&&mt.update(Ot,tt,c||o)}Vt&&Vt(J,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let Ht=new Qg;Ht.setAnimationLoop(kt),this.setAnimationLoop=function(J){Vt=J},this.dispose=function(){}}},Xb=new ke,r_=new $t;r_.set(-1,0,0,0,1,0,0,0,1);function Yb(r,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,qf(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,M,A,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,M,A):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===kn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===kn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let M=t.get(g),A=M.envMap,y=M.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(Xb.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(r_),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,A){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=A*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,M){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===kn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let M=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function qb(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let T=S.program;n.uniformBlockBinding(y,T)}function c(y,S){let T=i[y.id];T===void 0&&(p(y),T=h(y),i[y.id]=T,y.addEventListener("dispose",M));let E=S.program;n.updateUBOMapping(y,E);let v=t.render.frame;s[y.id]!==v&&(u(y),s[y.id]=v)}function h(y){let S=d();y.__bindingPointIndex=S;let T=r.createBuffer(),E=y.__size,v=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,E,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,T),T}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let S=i[y.id],T=y.uniforms,E=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let v=0,w=T.length;v<w;v++){let C=T[v];if(Array.isArray(C))for(let D=0,I=C.length;D<I;D++)f(C[D],v,D,E);else f(C,v,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,S,T,E){if(_(y,S,T,E)===!0){let v=y.__offset,w=y.value;if(Array.isArray(w)){let C=0;for(let D=0;D<w.length;D++){let I=w[D],z=g(I);m(I,y.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,v,y.__data)}}function m(y,S,T){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,T)}function _(y,S,T,E){let v=y.value,w=S+"_"+T;if(E[w]===void 0)return typeof v=="number"||typeof v=="boolean"?E[w]=v:ArrayBuffer.isView(v)?E[w]=v.slice():E[w]=v.clone(),!0;{let C=E[w];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return E[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function p(y){let S=y.uniforms,T=0,E=16;for(let w=0,C=S.length;w<C;w++){let D=Array.isArray(S[w])?S[w]:[S[w]];for(let I=0,z=D.length;I<z;I++){let L=D[I],B=Array.isArray(L.value)?L.value:[L.value];for(let X=0,k=B.length;X<k;X++){let K=B[X],q=g(K),R=T%E,j=R%q.boundary,St=R+j;T+=j,St!==0&&E-St<q.storage&&(T+=E-St),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,T+=q.storage}}}let v=T%E;return v>0&&(T+=E-v),y.__size=T,y.__cache={},this}function g(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",y),S}function M(y){let S=y.target;S.removeEventListener("dispose",M);let T=o.indexOf(S.__bindingPointIndex);o.splice(T,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function A(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:A}}var Zb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;function Jb(){return Ji===null&&(Ji=new dc(Zb,16,16,Zr,Di),Ji.name="DFG_LUT",Ji.minFilter=dn,Ji.magFilter=dn,Ji.wrapS=Hi,Ji.wrapT=Hi,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var bh=class{constructor(t={}){let{canvas:e=bg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ci}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=f,p=new Set([kc,zc,Bc]),g=new Set([ci,Ii,vo,yo,Fc,Oc]),M=new Uint32Array(4),A=new Int32Array(4),y=new Z,S=null,T=null,E=[],v=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,I=null,z=null,L=null,B=null;this._outputColorSpace=si;let X=0,k=0,K=null,q=-1,R=null,j=new Ue,St=new Ue,Mt=null,Vt=new he(0),kt=0,Ht=e.width,J=e.height,tt=1,_t=null,Ot=null,mt=new Ue(0,0,Ht,J),Bt=new Ue(0,0,Ht,J),zt=!1,It=new ya,Yt=!1,Kt=!1,V=new ke,ne=new Z,_e=new Ue,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function de(){return K===null?tt:1}let F=n;function Pe(b,U){return e.getContext(b,U)}let Wt,P,x,O,H,$,ct,ot,Q,nt,ft,Et,dt,ut,lt,Lt,Ft,N,ht,et,pt,xt,it;try{let b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),F===null){let U="webgl2";if(F=Pe(U,b),F===null)throw Pe(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(b){throw e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),Xt("WebGLRenderer: "+b.message),b}function at(){Wt=new nM(F),Wt.init(),pt=new Gb(F,Wt),P=new YS(F,Wt,t,pt),x=new kb(F,Wt),P.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),z=F.createFramebuffer(),L=F.createFramebuffer(),B=F.createFramebuffer(),O=new sM(F),H=new Eb,$=new Vb(F,Wt,x,H,P,pt,O),ct=new eM(C),ot=new av(F),xt=new WS(F,ot),Q=new iM(F,ot,O,xt),nt=new aM(F,Q,ot,xt,O),N=new oM(F,P,$),lt=new qS(H),ft=new wb(C,ct,Wt,P,xt,lt),Et=new Yb(C,H),dt=new Cb,ut=new Nb(Wt),Ft=new HS(C,ct,x,nt,m,l),Lt=new zb(C,nt,P),it=new qb(F,O,P,x),ht=new XS(F,Wt,O),et=new rM(F,Wt,O),O.programs=ft.programs,C.capabilities=P,C.extensions=Wt,C.properties=H,C.renderLists=dt,C.shadowMap=Lt,C.state=x,C.info=O}_!==ci&&(w=new cM(_,e.width,e.height,a,i,s));let rt=new gd(C,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=Wt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Wt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(b){b!==void 0&&(tt=b,this.setSize(Ht,J,!1))},this.getSize=function(b){return b.set(Ht,J)},this.setSize=function(b,U,Y=!0){if(rt.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ht=b,J=U,e.width=Math.floor(b*tt),e.height=Math.floor(U*tt),Y===!0&&(e.style.width=b+"px",e.style.height=U+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Ht*tt,J*tt).floor()},this.setDrawingBufferSize=function(b,U,Y){Ht=b,J=U,tt=Y,e.width=Math.floor(b*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(_===ci){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(j)},this.getViewport=function(b){return b.copy(mt)},this.setViewport=function(b,U,Y,G){b.isVector4?mt.set(b.x,b.y,b.z,b.w):mt.set(b,U,Y,G),x.viewport(j.copy(mt).multiplyScalar(tt).round())},this.getScissor=function(b){return b.copy(Bt)},this.setScissor=function(b,U,Y,G){b.isVector4?Bt.set(b.x,b.y,b.z,b.w):Bt.set(b,U,Y,G),x.scissor(St.copy(Bt).multiplyScalar(tt).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(b){x.setScissorTest(zt=b)},this.setOpaqueSort=function(b){_t=b},this.setTransparentSort=function(b){Ot=b},this.getClearColor=function(b){return b.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,Y=!0){let G=0;if(b){let W=!1;if(K!==null){let gt=K.texture.format;W=p.has(gt)}if(W){let gt=K.texture.type,Tt=g.has(gt),yt=Ft.getClearColor(),Ct=Ft.getClearAlpha(),Dt=yt.r,Qt=yt.g,se=yt.b;Tt?(M[0]=Dt,M[1]=Qt,M[2]=se,M[3]=Ct,F.clearBufferuiv(F.COLOR,0,M)):(A[0]=Dt,A[1]=Qt,A[2]=se,A[3]=Ct,F.clearBufferiv(F.COLOR,0,A))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),I=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),Ft.dispose(),dt.dispose(),ut.dispose(),H.dispose(),ct.dispose(),nt.dispose(),xt.dispose(),it.dispose(),ft.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Ae),rt.removeEventListener("sessionend",ve),ae.stop()};function Nt(b){b.preventDefault(),Yf("WebGLRenderer: Context Lost."),D=!0}function st(){Yf("WebGLRenderer: Context Restored."),D=!1;let b=O.autoReset,U=Lt.enabled,Y=Lt.autoUpdate,G=Lt.needsUpdate,W=Lt.type;at(),O.autoReset=b,Lt.enabled=U,Lt.autoUpdate=Y,Lt.needsUpdate=G,Lt.type=W}function Ut(b){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function At(b){let U=b.target;U.removeEventListener("dispose",At),Zt(U)}function Zt(b){We(b),H.remove(b)}function We(b){let U=H.get(b).programs;U!==void 0&&(U.forEach(function(Y){ft.releaseProgram(Y)}),b.isShaderMaterial&&ft.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,Y,G,W,gt){U===null&&(U=Le);let Tt=W.isMesh&&W.matrixWorld.determinantAffine()<0,yt=rn(b,U,Y,G,W);x.setMaterial(G,Tt);let Ct=Y.index,Dt=1;if(G.wireframe===!0){if(Ct=Q.getWireframeAttribute(Y),Ct===void 0)return;Dt=2}let Qt=Y.drawRange,se=Y.attributes.position,Rt=Qt.start*Dt,pe=(Qt.start+Qt.count)*Dt;gt!==null&&(Rt=Math.max(Rt,gt.start*Dt),pe=Math.min(pe,(gt.start+gt.count)*Dt)),Ct!==null?(Rt=Math.max(Rt,0),pe=Math.min(pe,Ct.count)):se!=null&&(Rt=Math.max(Rt,0),pe=Math.min(pe,se.count));let Ye=pe-Rt;if(Ye<0||Ye===1/0)return;xt.setup(W,G,yt,Y,Ct);let Ce,ye=ht;if(Ct!==null&&(Ce=ot.get(Ct),ye=et,ye.setIndex(Ce)),W.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*de()),ye.setMode(F.LINES)):ye.setMode(F.TRIANGLES);else if(W.isLine){let mn=G.linewidth;mn===void 0&&(mn=1),x.setLineWidth(mn*de()),W.isLineSegments?ye.setMode(F.LINES):W.isLineLoop?ye.setMode(F.LINE_LOOP):ye.setMode(F.LINE_STRIP)}else W.isPoints?ye.setMode(F.POINTS):W.isSprite&&ye.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(Wt.get("WEBGL_multi_draw"))ye.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let mn=W._multiDrawStarts,bt=W._multiDrawCounts,Cn=W._multiDrawCount,ue=Ct?ot.get(Ct).bytesPerElement:1,ui=H.get(G).currentProgram.getUniforms();for(let Ui=0;Ui<Cn;Ui++)ui.setValue(F,"_gl_DrawID",Ui),ye.render(mn[Ui]/ue,bt[Ui])}else if(W.isInstancedMesh)ye.renderInstances(Rt,Ye,W.count);else if(Y.isInstancedBufferGeometry){let mn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,bt=Math.min(Y.instanceCount,mn);ye.renderInstances(Rt,Ye,bt)}else ye.render(Rt,Ye)};function ie(b,U,Y,G){I!==null&&b.isNodeMaterial&&I.setObject(G,b),Yt===!0&&lt.setState(b,Y,!1),b.transparent===!0&&b.side===qi&&b.forceSinglePass===!1?(b.side=kn,b.needsUpdate=!0,Fe(b,U,G),b.side=Wr,b.needsUpdate=!0,Fe(b,U,G),b.side=qi):Fe(b,U,G)}this.compile=function(b,U,Y=null){Y===null&&(Y=b),I!==null&&I.renderStart(b,U,Y),T=ut.get(Y),T.init(U),v.push(T),Y.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),b!==Y&&b.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),Kt=this.localClippingEnabled,Yt=lt.init(this.clippingPlanes,Kt),Yt===!0&&lt.setGlobalState(this.clippingPlanes,U),I!==null&&Lt.render(T.state.shadowsArray,Y,U);let G=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let gt=W.material;if(gt)if(Array.isArray(gt))for(let Tt=0;Tt<gt.length;Tt++){let yt=gt[Tt];ie(yt,Y,U,W),G.add(yt)}else ie(gt,Y,U,W),G.add(gt)}),T=v.pop(),I!==null&&I.renderEnd(),G},this.compileAsync=function(b,U,Y=null){let G=this.compile(b,U,Y);return new Promise(W=>{function gt(){if(G.forEach(function(Tt){let Ct=H.get(Tt).currentProgram;(Ct===void 0||Ct.isReady())&&G.delete(Tt)}),G.size===0){W(b);return}setTimeout(gt,10)}Wt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Ee=null;function nn(b){Ee&&Ee(b)}function Ae(){ae.stop()}function ve(){ae.start()}let ae=new Qg;ae.setAnimationLoop(nn),typeof self<"u"&&ae.setContext(self),this.setAnimationLoop=function(b){Ee=b,rt.setAnimationLoop(b),b===null?ae.stop():ae.start()},rt.addEventListener("sessionstart",Ae),rt.addEventListener("sessionend",ve),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(b,U);let Y=rt.enabled===!0&&rt.isPresenting===!0,G=w!==null&&(K===null||Y)&&w.begin(C,K);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(U),U=rt.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,U,K),T=ut.get(b,v.length),T.init(U),T.state.textureUnits=$.getTextureUnits(),v.push(T),V.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),It.setFromProjectionMatrix(V,Ri,U.reversedDepth),Kt=this.localClippingEnabled,Yt=lt.init(this.clippingPlanes,Kt),S=dt.get(b,E.length),S.init(),E.push(S),rt.enabled===!0&&rt.isPresenting===!0){let Tt=C.xr.getDepthSensingMesh();Tt!==null&&En(Tt,U,-1/0,C.sortObjects)}En(b,U,0,C.sortObjects),S.finish(),I!==null&&I.updateLights(T.state.lightsArray),C.sortObjects===!0&&S.sort(_t,Ot),qt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,qt&&Ft.addToRenderList(S,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Yt===!0&&lt.beginShadows();let W=T.state.shadowsArray;if(Lt.render(W,b,U),Yt===!0&&lt.endShadows(),(G&&w.hasRenderPass())===!1){let Tt=S.opaque,yt=S.transmissive;if(T.setupLights(),U.isArrayCamera){let Ct=U.cameras;if(yt.length>0)for(let Dt=0,Qt=Ct.length;Dt<Qt;Dt++){let se=Ct[Dt];pn(Tt,yt,b,se)}qt&&Ft.render(b);for(let Dt=0,Qt=Ct.length;Dt<Qt;Dt++){let se=Ct[Dt];be(S,b,se,se.viewport)}}else yt.length>0&&pn(Tt,yt,b,U),qt&&Ft.render(b),be(S,b,U)}K!==null&&k===0&&($.updateMultisampleRenderTarget(K),$.updateRenderTargetMipmap(K)),G&&w.end(C),b.isScene===!0&&b.onAfterRender(C,b,U),xt.resetDefaultState(),q=-1,R=null,v.pop(),v.length>0?(T=v[v.length-1],$.setTextureUnits(T.state.textureUnits),Yt===!0&&lt.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,I!==null&&I.renderEnd()};function En(b,U,Y,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(It)){G&&_e.setFromMatrixPosition(b.matrixWorld).applyMatrix4(V);let Tt=nt.update(b),yt=b.material;yt.visible&&S.push(b,Tt,yt,Y,_e.z,null,U)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(It))){let Tt=nt.update(b),yt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),_e.copy(b.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),_e.copy(Tt.boundingSphere.center)),_e.applyMatrix4(b.matrixWorld).applyMatrix4(V)),Array.isArray(yt)){let Ct=Tt.groups;for(let Dt=0,Qt=Ct.length;Dt<Qt;Dt++){let se=Ct[Dt],Rt=yt[se.materialIndex];Rt&&Rt.visible&&S.push(b,Tt,Rt,Y,_e.z,se,U)}}else yt.visible&&S.push(b,Tt,yt,Y,_e.z,null,U)}}let gt=b.children;for(let Tt=0,yt=gt.length;Tt<yt;Tt++)En(gt[Tt],U,Y,G)}function be(b,U,Y,G){let{opaque:W,transmissive:gt,transparent:Tt}=b;T.setupLightsView(Y),Yt===!0&&lt.setGlobalState(C.clippingPlanes,Y),G&&x.viewport(j.copy(G)),W.length>0&&An(W,U,Y),gt.length>0&&An(gt,U,Y),Tt.length>0&&An(Tt,U,Y),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function pn(b,U,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){let Rt=Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new Jn(1,1,{generateMipmaps:!0,type:Rt?Di:ci,minFilter:Yr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let gt=T.state.transmissionRenderTarget[G.id],Tt=G.viewport||j;gt.setSize(Tt.z*C.transmissionResolutionScale,Tt.w*C.transmissionResolutionScale);let yt=C.getRenderTarget(),Ct=C.getActiveCubeFace(),Dt=C.getActiveMipmapLevel();C.setRenderTarget(gt),C.getClearColor(Vt),kt=C.getClearAlpha(),kt<1&&C.setClearColor(16777215,.5),C.clear(),qt&&Ft.render(Y);let Qt=C.toneMapping;C.toneMapping=Pi;let se=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),Yt===!0&&lt.setGlobalState(C.clippingPlanes,G),An(b,Y,G),$.updateMultisampleRenderTarget(gt),$.updateRenderTargetMipmap(gt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let pe=0,Ye=U.length;pe<Ye;pe++){let Ce=U[pe],{object:ye,geometry:mn,material:bt,group:Cn}=Ce;if(bt.side===qi&&ye.layers.test(G.layers)){let ue=bt.side;bt.side=kn,bt.needsUpdate=!0,Xe(ye,Y,G,mn,bt,Cn),bt.side=ue,bt.needsUpdate=!0,Rt=!0}}Rt===!0&&($.updateMultisampleRenderTarget(gt),$.updateRenderTargetMipmap(gt))}C.setRenderTarget(yt,Ct,Dt),C.setClearColor(Vt,kt),se!==void 0&&(G.viewport=se),C.toneMapping=Qt}function An(b,U,Y){let G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,gt=b.length;W<gt;W++){let Tt=b[W],{object:yt,geometry:Ct,group:Dt}=Tt,Qt=Tt.material;Qt.allowOverride===!0&&G!==null&&(Qt=G),yt.layers.test(Y.layers)&&Xe(yt,U,Y,Ct,Qt,Dt)}}function Xe(b,U,Y,G,W,gt){I!==null&&W.isNodeMaterial&&I.setObject(b,W),b.onBeforeRender(C,U,Y,G,W,gt),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(C,U,Y,G,b,gt),W.transparent===!0&&W.side===qi&&W.forceSinglePass===!1?(W.side=kn,W.needsUpdate=!0,C.renderBufferDirect(Y,U,G,W,b,gt),W.side=Wr,W.needsUpdate=!0,C.renderBufferDirect(Y,U,G,W,b,gt),W.side=qi):C.renderBufferDirect(Y,U,G,W,b,gt),b.onAfterRender(C,U,Y,G,W,gt)}function Fe(b,U,Y){U.isScene!==!0&&(U=Le);let G=H.get(b),W=T.state.lights,gt=T.state.shadowsArray,Tt=W.state.version,yt=ft.getParameters(b,W.state,gt,U,Y,T.state.lightProbeGridArray),Ct=ft.getProgramCacheKey(yt),Dt=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let Qt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=ct.get(b.envMap||G.environment,Qt),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Dt===void 0&&(b.addEventListener("dispose",At),Dt=new Map,G.programs=Dt);let se=Dt.get(Ct);if(se!==void 0){if(G.currentProgram===se&&G.lightsStateVersion===Tt)return Ni(b,yt),se}else yt.uniforms=ft.getUniforms(b),I!==null&&b.isNodeMaterial&&I.build(b,Y,yt),b.onBeforeCompile(yt,C),se=ft.acquireProgram(yt,Ct),Dt.set(Ct,se),G.uniforms=yt.uniforms;let Rt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=lt.uniform),Ni(b,yt),G.needsLights=hi(b),G.lightsStateVersion=Tt,G.needsLights&&(Rt.ambientLightColor.value=W.state.ambient,Rt.lightProbe.value=W.state.probe,Rt.sunLights.value=W.state.sun,Rt.sunLightShadows.value=W.state.sunShadow,Rt.directionalLights.value=W.state.directional,Rt.directionalLightShadows.value=W.state.directionalShadow,Rt.spotLights.value=W.state.spot,Rt.spotLightShadows.value=W.state.spotShadow,Rt.rectAreaLights.value=W.state.rectArea,Rt.ltc_1.value=W.state.rectAreaLTC1,Rt.ltc_2.value=W.state.rectAreaLTC2,Rt.pointLights.value=W.state.point,Rt.pointLightShadows.value=W.state.pointShadow,Rt.hemisphereLights.value=W.state.hemi,Rt.sunShadowMatrix.value=W.state.sunShadowMatrix,Rt.sunShadowCascade.value=W.state.sunShadowCascade,Rt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Rt.spotLightMatrix.value=W.state.spotLightMatrix,Rt.spotLightMap.value=W.state.spotLightMap,Rt.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=se,G.uniformsList=null,se}function Ke(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=bo.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Ni(b,U){let Y=H.get(b);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function As(b,U){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let Y=0,G=b.length;Y<G;Y++){let W=b[Y];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function rn(b,U,Y,G,W){U.isScene!==!0&&(U=Le),$.resetTextureUnits();let gt=U.fog,Tt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,yt=K===null?C.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:oe.workingColorSpace,Ct=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Dt=ct.get(G.envMap||Tt,Ct),Qt=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,se=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Rt=!!Y.morphAttributes.position,pe=!!Y.morphAttributes.normal,Ye=!!Y.morphAttributes.color,Ce=Pi;G.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ce=C.toneMapping);let ye=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,mn=ye!==void 0?ye.length:0,bt=H.get(G),Cn=T.state.lights;if(Yt===!0&&(Kt===!0||b!==R)){let Te=b===R&&G.id===q;lt.setState(G,b,Te)}let ue=!1;G.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Cn.state.version||bt.outputColorSpace!==yt||W.isBatchedMesh&&bt.batching===!1||!W.isBatchedMesh&&bt.batching===!0||W.isBatchedMesh&&bt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&bt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&bt.instancing===!1||!W.isInstancedMesh&&bt.instancing===!0||W.isSkinnedMesh&&bt.skinning===!1||!W.isSkinnedMesh&&bt.skinning===!0||W.isInstancedMesh&&bt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&bt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&bt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&bt.instancingMorph===!1&&W.morphTexture!==null||bt.envMap!==Dt||G.fog===!0&&bt.fog!==gt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==lt.numPlanes||bt.numIntersection!==lt.numIntersection)||bt.vertexAlphas!==Qt||bt.vertexTangents!==se||bt.morphTargets!==Rt||bt.morphNormals!==pe||bt.morphColors!==Ye||bt.toneMapping!==Ce||bt.morphTargetsCount!==mn||!!bt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ue=!0):(ue=!0,bt.__version=G.version);let ui=bt.currentProgram;ue===!0&&(ui=Fe(G,U,W),I&&G.isNodeMaterial&&I.onUpdateProgram(G,ui,bt));let Ui=!1,gr=!1,Rs=!1,xe=ui.getUniforms(),Ge=bt.uniforms;if(x.useProgram(ui.program)&&(Ui=!0,gr=!0,Rs=!0),G.id!==q&&(q=G.id,gr=!0),bt.needsLights){let Te=As(T.state.lightProbeGridArray,W);bt.lightProbeGrid!==Te&&(bt.lightProbeGrid=Te,gr=!0)}if(Ui||R!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),xe.setValue(F,"projectionMatrix",b.projectionMatrix),xe.setValue(F,"viewMatrix",b.matrixWorldInverse);let xr=xe.map.cameraPosition;xr!==void 0&&xr.setValue(F,ne.setFromMatrixPosition(b.matrixWorld)),P.logarithmicDepthBuffer&&xe.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xe.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,gr=!0,Rs=!0)}if(bt.needsLights&&(Cn.state.sunShadowMap.length>0&&xe.setValue(F,"sunShadowMap",Cn.state.sunShadowMap,$),Cn.state.directionalShadowMap.length>0&&xe.setValue(F,"directionalShadowMap",Cn.state.directionalShadowMap,$),Cn.state.spotShadowMap.length>0&&xe.setValue(F,"spotShadowMap",Cn.state.spotShadowMap,$),Cn.state.pointShadowMap.length>0&&xe.setValue(F,"pointShadowMap",Cn.state.pointShadowMap,$)),W.isSkinnedMesh){xe.setOptional(F,W,"bindMatrix"),xe.setOptional(F,W,"bindMatrixInverse");let Te=W.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),xe.setValue(F,"boneTexture",Te.boneTexture,$))}W.isBatchedMesh&&(xe.setOptional(F,W,"batchingTexture"),xe.setValue(F,"batchingTexture",W._matricesTexture,$),xe.setOptional(F,W,"batchingIdTexture"),xe.setValue(F,"batchingIdTexture",W._indirectTexture,$),xe.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&xe.setValue(F,"batchingColorTexture",W._colorsTexture,$));let _r=Y.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&N.update(W,Y,ui),(gr||bt.receiveShadow!==W.receiveShadow)&&(bt.receiveShadow=W.receiveShadow,xe.setValue(F,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Ge.envMapIntensity.value=U.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=Jb()),gr){if(xe.setValue(F,"toneMappingExposure",C.toneMappingExposure),bt.needsLights&&Ve(Ge,Rs),gt&&G.fog===!0&&Et.refreshFogUniforms(Ge,gt),Et.refreshMaterialUniforms(Ge,G,tt,J,T.state.transmissionRenderTarget[b.id]),bt.needsLights&&bt.lightProbeGrid){let Te=bt.lightProbeGrid;Ge.probesSH.value=Te.texture,Ge.probesMin.value.copy(Te.boundingBox.min),Ge.probesMax.value.copy(Te.boundingBox.max),Ge.probesResolution.value.copy(Te.resolution)}bo.upload(F,Ke(bt),Ge,$)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(bo.upload(F,Ke(bt),Ge,$),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xe.setValue(F,"center",W.center),xe.setValue(F,"modelViewMatrix",W.modelViewMatrix),xe.setValue(F,"normalMatrix",W.normalMatrix),xe.setValue(F,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Te=G.uniformsGroups;for(let xr=0,Ps=Te.length;xr<Ps;xr++){let vd=Te[xr];it.update(vd,ui),it.bind(vd,ui)}}return ui}function Ve(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function hi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(b,U,Y){let G=H.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),H.get(b.texture).__webglTexture=U,H.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let Y=H.get(b);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,Y=0){K=b,X=U,k=Y;let G=null,W=!1,gt=!1;if(b){let yt=H.get(b);if(yt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(F.FRAMEBUFFER,yt.__webglFramebuffer),j.copy(b.viewport),St.copy(b.scissor),Mt=b.scissorTest,x.viewport(j),x.scissor(St),x.setScissorTest(Mt),q=-1;return}else if(yt.__webglFramebuffer===void 0)$.setupRenderTarget(b);else if(yt.__hasExternalTextures)$.rebindTextures(b,H.get(b.texture).__webglTexture,H.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Qt=b.depthTexture;if(yt.__boundDepthTexture!==Qt){if(Qt!==null&&H.has(Qt)&&(b.width!==Qt.image.width||b.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(b)}}let Ct=b.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(gt=!0);let Dt=H.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?G=Dt[U][Y]:G=Dt[U],W=!0):b.samples>0&&$.useMultisampledRTT(b)===!1?G=H.get(b).__webglMultisampledFramebuffer:Array.isArray(Dt)?G=Dt[Y]:G=Dt,j.copy(b.viewport),St.copy(b.scissor),Mt=b.scissorTest}else j.copy(mt).multiplyScalar(tt).floor(),St.copy(Bt).multiplyScalar(tt).floor(),Mt=zt;if(Y!==0&&(G=z),x.bindFramebuffer(F.FRAMEBUFFER,G)&&x.drawBuffers(b,G),x.viewport(j),x.scissor(St),x.setScissorTest(Mt),W){let yt=H.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,Y)}else if(gt){let yt=U;for(let Ct=0;Ct<b.textures.length;Ct++){let Dt=H.get(b.textures[Ct]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ct,Dt.__webglTexture,Y,yt)}}else if(b!==null&&Y!==0){let yt=H.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,yt.__webglTexture,Y)}q=-1};function Cs(b){let U=H.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=P.textureFormatReadable(b.format),U.__typeReadable=P.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,Y,G,W,gt,Tt,yt=0){if(!(b&&b.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct){x.bindFramebuffer(F.FRAMEBUFFER,Ct);try{let Dt=b.textures[yt],Qt=Dt.format,se=Dt.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt);let Rt=Cs(Dt);if(Rt.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&Y>=0&&Y<=b.height-W&&F.readPixels(U,Y,G,W,pt.convert(Qt),pt.convert(se),gt)}finally{let Dt=K!==null?H.get(K).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(b,U,Y,G,W,gt,Tt,yt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct)if(U>=0&&U<=b.width-G&&Y>=0&&Y<=b.height-W){x.bindFramebuffer(F.FRAMEBUFFER,Ct);let Dt=b.textures[yt],Qt=Dt.format,se=Dt.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt);let Rt=Cs(Dt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.bufferData(F.PIXEL_PACK_BUFFER,gt.byteLength,F.STREAM_READ),F.readPixels(U,Y,G,W,pt.convert(Qt),pt.convert(se),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ye=K!==null?H.get(K).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,Ye);let Ce=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await wg(F,Ce,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,gt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(pe),F.deleteSync(Ce),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,Y=0){let G=Math.pow(2,-Y),W=Math.floor(b.image.width*G),gt=Math.floor(b.image.height*G),Tt=U!==null?U.x:0,yt=U!==null?U.y:0;$.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Tt,yt,W,gt),x.unbindTexture()},this.copyTextureToTexture=function(b,U,Y=null,G=null,W=0,gt=0){let Tt,yt,Ct,Dt,Qt,se,Rt,pe,Ye,Ce=b.isCompressedTexture?b.mipmaps[gt]:b.image;if(Y!==null)Tt=Y.max.x-Y.min.x,yt=Y.max.y-Y.min.y,Ct=Y.isBox3?Y.max.z-Y.min.z:1,Dt=Y.min.x,Qt=Y.min.y,se=Y.isBox3?Y.min.z:0;else{let Ge=Math.pow(2,-W);Tt=Math.floor(Ce.width*Ge),yt=Math.floor(Ce.height*Ge),b.isDataArrayTexture?Ct=Ce.depth:b.isData3DTexture?Ct=Math.floor(Ce.depth*Ge):Ct=1,Dt=0,Qt=0,se=0}G!==null?(Rt=G.x,pe=G.y,Ye=G.z):(Rt=0,pe=0,Ye=0);let ye=pt.convert(U.format),mn=pt.convert(U.type),bt;U.isData3DTexture?($.setTexture3D(U,0),bt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),bt=F.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),bt=F.TEXTURE_2D),x.activeTexture(F.TEXTURE0),x.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Cn=x.getParameter(F.UNPACK_ROW_LENGTH),ue=x.getParameter(F.UNPACK_IMAGE_HEIGHT),ui=x.getParameter(F.UNPACK_SKIP_PIXELS),Ui=x.getParameter(F.UNPACK_SKIP_ROWS),gr=x.getParameter(F.UNPACK_SKIP_IMAGES);x.pixelStorei(F.UNPACK_ROW_LENGTH,Ce.width),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ce.height),x.pixelStorei(F.UNPACK_SKIP_PIXELS,Dt),x.pixelStorei(F.UNPACK_SKIP_ROWS,Qt),x.pixelStorei(F.UNPACK_SKIP_IMAGES,se);let Rs=b.isDataArrayTexture||b.isData3DTexture,xe=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let Ge=H.get(b),_r=H.get(U),Te=H.get(Ge.__renderTarget),xr=H.get(_r.__renderTarget);x.bindFramebuffer(F.READ_FRAMEBUFFER,Te.__webglFramebuffer),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,xr.__webglFramebuffer);for(let Ps=0;Ps<Ct;Ps++)Rs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,H.get(b).__webglTexture,W,se+Ps),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,H.get(U).__webglTexture,gt,Ye+Ps)),F.blitFramebuffer(Dt,Qt,Tt,yt,Rt,pe,Tt,yt,F.DEPTH_BUFFER_BIT,F.NEAREST);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||H.has(b)){let Ge=H.get(b),_r=H.get(U);x.bindFramebuffer(F.READ_FRAMEBUFFER,L),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let Te=0;Te<Ct;Te++)Rs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.__webglTexture,W,se+Te):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ge.__webglTexture,W),xe?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,_r.__webglTexture,gt,Ye+Te):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_r.__webglTexture,gt),W!==0?F.blitFramebuffer(Dt,Qt,Tt,yt,Rt,pe,Tt,yt,F.COLOR_BUFFER_BIT,F.NEAREST):xe?F.copyTexSubImage3D(bt,gt,Rt,pe,Ye+Te,Dt,Qt,Tt,yt):F.copyTexSubImage2D(bt,gt,Rt,pe,Dt,Qt,Tt,yt);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else xe?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(bt,gt,Rt,pe,Ye,Tt,yt,Ct,ye,mn,Ce.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(bt,gt,Rt,pe,Ye,Tt,yt,Ct,ye,Ce.data):F.texSubImage3D(bt,gt,Rt,pe,Ye,Tt,yt,Ct,ye,mn,Ce):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,gt,Rt,pe,Tt,yt,ye,mn,Ce.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,gt,Rt,pe,Ce.width,Ce.height,ye,Ce.data):F.texSubImage2D(F.TEXTURE_2D,gt,Rt,pe,Tt,yt,ye,mn,Ce);x.pixelStorei(F.UNPACK_ROW_LENGTH,Cn),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ue),x.pixelStorei(F.UNPACK_SKIP_PIXELS,ui),x.pixelStorei(F.UNPACK_SKIP_ROWS,Ui),x.pixelStorei(F.UNPACK_SKIP_IMAGES,gr),gt===0&&U.generateMipmaps&&F.generateMipmap(bt),x.unbindTexture()},this.initRenderTarget=function(b){H.get(b).__webglFramebuffer===void 0&&$.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$.setTextureCube(b,0):b.isData3DTexture?$.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$.setTexture2DArray(b,0):$.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){X=0,k=0,K=null,x.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var s_=r=>()=>{r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};function o_(r){let t=new Float32Array(r*3),e=(s,o)=>{let a=s/3,l=(o+2.2)/4.4;return .2+.42*a*a*Math.exp(-1.6*l)-.12*a*Math.exp(-1.2*l)+.06*l},n=56,i=r>>1;for(let s=0;s<r;s++){let o=s<i,a=o?s:s-i,l=Math.ceil((o?i:r-i)/n),c=Math.floor(a/l)/(n-1),h=a%l/(l-1),d=-3+6*(o?h:c),u=-2.2+4.4*(o?c:h);t[s*3]=d,t[s*3+1]=(e(d,u)-.42)*4.6,t[s*3+2]=u}return t}function a_(r){let t=s_(11),e=new Float32Array(r*3),n=34,i=26,s=2.9/n,o=.1,a=[0,1].map(c=>Array.from({length:i},(h,d)=>{let u=0;return Array.from({length:n},(f,m)=>(u+=(.35+t()*.9)*(1+m*.045)*(.75+.25*Math.sin(d*.35+m*.2+c*2)),u))})),l=Math.max(...a.flat(2));for(let c=0;c<r;c++){let h=t()<.5?0:1,d=h?1:-1,u=Math.floor(t()*i),f=Math.floor(t()*n),m=a[h][u][f]/l*3.4,_=f?a[h][u][f-1]/l*3.4:0,p=d*(o+f*s),g=d*(o+(f+1)*s),M,A;t()<.6?(M=p+(g-p)*t(),A=m):(M=p,A=_+(m-_)*t()),e[c*3]=M,e[c*3+1]=A-1.5,e[c*3+2]=-2.2+4.4*u/(i-1)}return e}function l_(r){let t=new Float32Array(r*3),e=.1,n=0,i=0,s=.004,o=()=>{let a=10*(n-e),l=e*(28-i)-n,c=e*n-8/3*i;e+=a*s,n+=l*s,i+=c*s};for(let a=0;a<2e3;a++)o();for(let a=0;a<r;a++)o(),o(),t[a*3]=e*.11,t[a*3+1]=(i-24)*.1,t[a*3+2]=n*.09;return t}function c_(r){let t=s_(23),e=new Float32Array(r*3);for(let n=0;n<r;n++){let i=-1+2*t(),s=Math.sqrt(.18+1.1*i*i),o=t()<.22,a=o?0:Math.pow(t(),1.8)*1.9;e[n*3]=(s+a-1.45)*1.7,e[n*3+1]=i*2.2,e[n*3+2]=o?0:(t()-.5)*2*a*.9}return e}var h_=[{position:[2.1,.75,0],rotation:[.5,-.62,0],scale:1.05},{position:[0,-.2,-3.5],rotation:[.38,.55,0],scale:1.6},{position:[2.6,.1,0],rotation:[.15,.35,0],scale:1.05},{position:[3.1,.35,0],rotation:[.08,-.5,0],scale:.95}],$b=[{position:[0,1.5,0],rotation:[.5,-.62,0],scale:.62},{position:[0,.3,-3],rotation:[.38,.55,0],scale:.9},{position:[0,1.3,0],rotation:[.15,.35,0],scale:.6},{position:[0,1.6,0],rotation:[.08,-.5,0],scale:.58}],Kb=`
  attribute vec3 aShape1;
  attribute vec3 aShape2;
  attribute vec3 aShape3;
  attribute vec3 aRandom;
  uniform float uMorph;
  uniform float uTime;
  uniform float uIntro;
  uniform float uSize;
  uniform float uDrift;
  varying float vAlpha;
  varying float vShade;

  vec3 shape(float index) {
    if (index < .5) return position;
    if (index < 1.5) return aShape1;
    if (index < 2.5) return aShape2;
    return aShape3;
  }

  void main() {
    float morph = clamp(uMorph, 0., 3.);
    float from = min(floor(morph), 2.);
    float delay = aRandom.x * .4;
    float t = smoothstep(delay, delay + .6, morph - from);
    vec3 a = shape(from);
    vec3 b = shape(from + 1.);
    // The volatility surface breathes while it is on screen.
    if (from < .5) a.y += sin(a.x * 1.4 + uTime * .7) * cos(a.z * 1.2 + uTime * .45) * .14 * uDrift;
    vec3 p = mix(a, b, t);
    // Points lift off their path mid-transition, so each morph reads as a re-forming cloud.
    p += (aRandom - .5) * sin(t * 3.14159) * 1.6;
    float intro = smoothstep(aRandom.y * .5, aRandom.y * .5 + .5, uIntro);
    p = mix((aRandom - .5) * vec3(18., 11., 12.), p, intro);
    p += vec3(sin(uTime * .6 + aRandom.y * 6.283), cos(uTime * .5 + aRandom.z * 6.283), sin(uTime * .4 + aRandom.x * 6.283)) * .025 * uDrift;
    vec4 view = modelViewMatrix * vec4(p, 1.);
    gl_Position = projectionMatrix * view;
    gl_PointSize = uSize * (.55 + aRandom.z * .9) / -view.z;
    vShade = clamp(p.y * .22 + .5, 0., 1.) * .7 + aRandom.y * .3;
    vAlpha = smoothstep(24., 7., -view.z) * (.55 + aRandom.y * .45);
  }
`,Qb=`
  uniform float uTone;
  uniform float uOpacity;
  varying float vAlpha;
  varying float vShade;
  const vec3 COBALT = vec3(.137, .298, .910);
  const vec3 INK = vec3(.071, .094, .200);
  const vec3 PAPER = vec3(.969, .969, .949);
  const vec3 PERIWINKLE = vec3(.60, .68, 1.);
  void main() {
    float d = length(gl_PointCoord - .5);
    if (d > .5) discard;
    vec3 onPaper = mix(INK, COBALT, vShade);
    vec3 onField = mix(PERIWINKLE, PAPER, vShade);
    gl_FragColor = vec4(mix(onPaper, onField, uTone), smoothstep(.5, .12, d) * vAlpha * uOpacity);
  }
`,wo=(r,t,e)=>r+(t-r)*e;function u_(r,{reduced:t}){let e;try{e=new bh({canvas:r,alpha:!0,antialias:!1,powerPreference:"high-performance"})}catch{return null}e.setClearColor(0,0);let n=innerWidth<700?15e3:26e3,i=new ai;[o_,a_,l_,c_].forEach((M,A)=>{i.setAttribute(A?`aShape${A}`:"position",new Bn(M(n),3))});let s=new Float32Array(n*3);for(let M=0;M<s.length;M++)s[M]=Math.random();i.setAttribute("aRandom",new Bn(s,3));let o={uMorph:{value:0},uTime:{value:0},uIntro:{value:t?1:0},uSize:{value:30},uDrift:{value:t?0:1},uTone:{value:0},uOpacity:{value:1}},a=new Sa(i,new zn({uniforms:o,vertexShader:Kb,fragmentShader:Qb,transparent:!0,depthWrite:!1}));a.frustumCulled=!1;let l=new fr;l.add(a);let c=new ma;c.add(l);let h=new Tn(35,1,.1,80);h.position.set(0,0,11);let d=h_,u=!1,f=()=>{let M=innerWidth,A=innerHeight;u=M<900,d=u?$b:h_;let y=Math.min(devicePixelRatio||1,1.75);e.setPixelRatio(y),e.setSize(M,A,!1),h.aspect=M/A,h.updateProjectionMatrix(),o.uSize.value=30*y*Math.min(1.25,Math.max(.7,A/900))};f();let m={morph:0,opacity:1,pointerX:0,pointerY:0},_={morph:0,opacity:1,pointerX:0,pointerY:0};return{uniforms:o,target:m,render:M=>{let A=t?1:.06;for(let C in m)_[C]+=(m[C]-_[C])*A;let y=Math.max(0,Math.min(3,_.morph)),S=Math.min(Math.floor(y),2),T=y-S,E=d[S],v=d[S+1];l.position.set(...E.position.map((C,D)=>wo(C,v.position[D],T))),l.scale.setScalar(wo(E.scale,v.scale,T));let w=t?0:Math.sin(M*.12)*.18;l.rotation.set(wo(E.rotation[0],v.rotation[0],T)+_.pointerY*.08,wo(E.rotation[1],v.rotation[1],T)+w+_.pointerX*.16,wo(E.rotation[2],v.rotation[2],T)),o.uMorph.value=y,o.uTime.value=M,o.uOpacity.value=_.opacity*(u?wo(.6,.28,Math.min(1,y)):1),e.render(c,h)},resize:f,snap:()=>Object.assign(_,m)}}In.registerPlugin(Jt);var Es=matchMedia("(prefers-reduced-motion: reduce)").matches,d_=()=>document.querySelector(".masthead").offsetHeight+16,Jr=Es?null:new Sm({lerp:.1});Jr?.on("scroll",Jt.update);document.addEventListener("click",r=>{let t=r.target.closest('a[href^="#"]');if(!t||r.defaultPrevented)return;let e=t.getAttribute("href"),n=e.length>1&&document.getElementById(e.slice(1));n&&(r.preventDefault(),Jr?Jr.scrollTo(e==="#top"?0:n,{offset:-d_()}):n.scrollIntoView({behavior:Es?"auto":"smooth"}),history.pushState(null,"",e),n.hasAttribute("tabindex")||n.setAttribute("tabindex","-1"),n.focus({preventScroll:!0}))});var Eh=document.querySelector(".menu-button"),Ah=document.getElementById("menu"),Ch=r=>{Ah.hidden=!r,Eh.setAttribute("aria-expanded",String(r)),Eh.textContent=r?"Close":"Menu"};Eh.addEventListener("click",()=>Ch(Ah.hidden));Ah.querySelectorAll("a").forEach(r=>r.addEventListener("click",()=>Ch(!1)));document.addEventListener("keydown",r=>{r.key==="Escape"&&!Ah.hidden&&(Ch(!1),Eh.focus())});matchMedia("(min-width: 901px)").addEventListener("change",r=>{r.matches&&Ch(!1)});var mr=document.getElementById("info");document.querySelectorAll("[data-dialog]").forEach(r=>r.addEventListener("click",()=>{let t=document.getElementById(`dialog-${r.dataset.dialog}`);mr.querySelector(".dialog-content").replaceChildren(t.content.cloneNode(!0)),mr.showModal(),document.body.classList.add("dialog-open"),Jr?.stop()}));mr.querySelectorAll(".dialog-close, .dialog-done").forEach(r=>r.addEventListener("click",()=>mr.close()));mr.addEventListener("click",r=>{if(r.target!==mr)return;let t=mr.getBoundingClientRect();(r.clientX<t.left||r.clientX>t.right||r.clientY<t.top||r.clientY>t.bottom)&&mr.close()});mr.addEventListener("close",()=>{document.body.classList.remove("dialog-open"),Jr?.start()});var p_=[];document.querySelectorAll("[data-split]").forEach(r=>{r.setAttribute("aria-label",r.textContent.replace(/\s+/g," ").trim()),r.querySelectorAll(".line").forEach(t=>{let e=t.textContent.trim().split(/\s+/).map(n=>{let i=document.createElement("span");i.className="word",i.setAttribute("aria-hidden","true");for(let s of n){let o=document.createElement("span");o.className="char",o.textContent=s,i.append(o),p_.push(o)}return i});t.replaceChildren(...e.flatMap((n,i)=>i?[document.createTextNode(" "),n]:[n]))})});var jb=document.getElementById("figure"),Vn=u_(jb,{reduced:Es});Vn||document.documentElement.classList.add("no-webgl");In.ticker.lagSmoothing(0);In.ticker.add(r=>{Jr?.raf(r*1e3),Vn&&!document.hidden&&Vn.render(r)});addEventListener("resize",()=>Vn?.resize());Vn&&!Es&&addEventListener("pointermove",r=>{Vn.target.pointerX=r.clientX/innerWidth-.5,Vn.target.pointerY=r.clientY/innerHeight-.5},{passive:!0});if(!Es){let r=In.timeline({delay:.1});r.from(p_,{yPercent:55,rotateX:-100,opacity:0,transformPerspective:700,transformOrigin:"50% 90%",duration:1.4,ease:"expo.out",stagger:.04},0).from(".hero-sub > *, .hero-copy > *, .page-intro > *",{opacity:0,y:20,duration:1,ease:"power3.out",stagger:.08},.55),Vn&&r.to(Vn.uniforms.uIntro,{value:1,duration:2.8,ease:"power3.out"},0)}if(!Es){In.utils.toArray(".hero, .page-hero").forEach(t=>{let e={trigger:t,start:"top top",end:"bottom 30%",scrub:!0};In.to(t.querySelectorAll("[data-split] .word"),{scrollTrigger:e,rotateX:75,yPercent:-30,opacity:0,transformPerspective:700,transformOrigin:"50% 100%",stagger:.1,ease:"none"}),In.to(t.querySelectorAll(".hero-sub, .hero-copy, .page-intro"),{scrollTrigger:e,opacity:0,y:-40,ease:"none"})});let r=document.querySelector(".venue-photos");if(r){let t={trigger:r,start:"top bottom",end:"top 30%",scrub:!0};In.fromTo(".photo-main",{rotateX:24,y:80},{rotateX:0,y:0,ease:"none",scrollTrigger:t}),In.fromTo(".photo-side",{rotateX:38,y:180},{rotateX:0,y:0,ease:"none",scrollTrigger:{...t,end:"top 20%"}})}}var Va=In.utils.toArray("[data-figure]"),_d=r=>Number(r.dataset.figure),m_=Va.map(()=>0),g_=[],xd=()=>{if(!Va.length)return;let r=Va.reduce((e,n,i)=>i?e+m_[i]*(_d(n)-_d(Va[i-1])):_d(n),0),t=g_.some(e=>e.isActive&&(!e.trigger.hasAttribute("data-quiet-narrow")||innerWidth<900));Vn&&(Vn.target.morph=r,Vn.target.opacity=t?.14:1)};Va.forEach((r,t)=>{if(!t)return;let e=n=>{m_[t]=n.progress,xd()};Jt.create({trigger:r,start:"top 85%",end:"top 20%",onUpdate:e,onRefresh:e})});In.utils.toArray("[data-quiet], [data-quiet-narrow]").forEach(r=>{g_.push(Jt.create({trigger:r,start:"top 60%",end:"bottom 40%",onToggle:xd}))});var tT=document.querySelector('meta[name="theme-color"]'),f_=[];f_=In.utils.toArray(".tone-zone").map(r=>Jt.create({trigger:r,start:"top 55%",end:"bottom 55%",onToggle:()=>{let t=f_.some(e=>e.isActive);document.body.dataset.tone=t?"field":"paper",tT.content=t?"#1532c0":"#f7f7f2",Vn&&In.to(Vn.uniforms.uTone,{value:t?1:0,duration:Es?0:.8,overwrite:!0})}}));Jt.sort();document.addEventListener("toggle",r=>{r.target.matches("details")&&Jt.refresh()},!0);xd();Vn?.snap();document.fonts?.ready.then(()=>{Jt.refresh();let r=location.hash.length>1&&document.getElementById(location.hash.slice(1));r&&(Jr?Jr.scrollTo(r,{offset:-d_(),immediate:!0}):r.scrollIntoView())});})();
