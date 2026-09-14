(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Qc="179",qf=0,Oh=1,Yf=2,eh=1,$f=2,fi=3,Oi=0,fn=1,bt=2,Li=0,Kr=1,zh=2,Gh=3,Hh=4,jf=5,er=100,Zf=101,Kf=102,Jf=103,Qf=104,ep=200,tp=201,np=202,ip=203,nc=204,ic=205,rp=206,op=207,sp=208,ap=209,lp=210,cp=211,hp=212,up=213,dp=214,rc=0,oc=1,sc=2,oo=3,ac=4,lc=5,cc=6,hc=7,th=0,fp=1,pp=2,ki=0,mp=1,gp=2,vp=3,Md=4,_p=5,Sp=6,yp=7,Td=300,so=301,ao=302,uc=303,dc=304,Ha=306,es=1e3,nr=1001,fc=1002,Tn=1003,Mp=1004,Rs=1005,un=1006,pl=1007,ir=1008,ii=1009,bd=1010,wd=1011,ts=1012,nh=1013,hr=1014,ei=1015,Ss=1016,ih=1017,rh=1018,ns=1020,Ed=35902,Ad=1021,Cd=1022,Hn=1023,is=1026,rs=1027,oh=1028,sh=1029,Pd=1030,ah=1031,lh=1033,ca=33776,ha=33777,ua=33778,da=33779,pc=35840,mc=35841,gc=35842,vc=35843,_c=36196,Sc=37492,yc=37496,Mc=37808,Tc=37809,bc=37810,wc=37811,Ec=37812,Ac=37813,Cc=37814,Pc=37815,xc=37816,Rc=37817,Ic=37818,Dc=37819,Lc=37820,kc=37821,fa=36492,Uc=36494,Nc=36495,xd=36283,Fc=36284,Bc=36285,Oc=36286,Tp=3200,bp=3201,ch=0,wp=1,Ii="",Wt="srgb",lo="srgb-linear",ga="linear",ft="srgb",Cr=7680,Wh=519,Ep=512,Ap=513,Cp=514,Rd=515,Pp=516,xp=517,Rp=518,Ip=519,zc=35044,hh=35048,Vh="300 es",ti=2e3,va=2001;class go{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,t);t.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xh=1234567;const qo=Math.PI/180,os=180/Math.PI;function gi(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[e&255]+Zt[e>>8&255]+Zt[e>>16&255]+Zt[e>>24&255]+"-"+Zt[t&255]+Zt[t>>8&255]+"-"+Zt[t>>16&15|64]+Zt[t>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Je(e,t,n){return Math.max(t,Math.min(n,e))}function uh(e,t){return(e%t+t)%t}function Dp(e,t,n,i,r){return i+(e-t)*(r-i)/(n-t)}function Lp(e,t,n){return e!==t?(n-e)/(t-e):0}function Yo(e,t,n){return(1-n)*e+n*t}function kp(e,t,n,i){return Yo(e,t,1-Math.exp(-n*i))}function Up(e,t=1){return t-Math.abs(uh(e,t*2)-t)}function Np(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Fp(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Bp(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Op(e,t){return e+Math.random()*(t-e)}function zp(e){return e*(.5-Math.random())}function Gp(e){e!==void 0&&(Xh=e);let t=Xh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hp(e){return e*qo}function Wp(e){return e*os}function Vp(e){return(e&e-1)===0&&e!==0}function Xp(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function qp(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Yp(e,t,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),h=o((t+i)/2),d=s((t+i)/2),u=o((t-i)/2),p=s((t-i)/2),c=o((i-t)/2),m=s((i-t)/2);switch(r){case"XYX":e.set(a*d,l*u,l*p,a*h);break;case"YZY":e.set(l*p,a*d,l*u,a*h);break;case"ZXZ":e.set(l*u,l*p,a*d,a*h);break;case"XZX":e.set(a*d,l*m,l*c,a*h);break;case"YXY":e.set(l*c,a*d,l*m,a*h);break;case"ZYZ":e.set(l*m,l*c,a*d,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function ct(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const Tt={DEG2RAD:qo,RAD2DEG:os,generateUUID:gi,clamp:Je,euclideanModulo:uh,mapLinear:Dp,inverseLerp:Lp,lerp:Yo,damp:kp,pingpong:Up,smoothstep:Np,smootherstep:Fp,randInt:Bp,randFloat:Op,randFloatSpread:zp,seededRandom:Gp,degToRad:Hp,radToDeg:Wp,isPowerOfTwo:Vp,ceilPowerOfTwo:Xp,floorPowerOfTwo:qp,setQuaternionFromProperEuler:Yp,normalize:ct,denormalize:Gn};class Ge{constructor(t=0,n=0){Ge.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Je(this.x,t.x,n.x),this.y=Je(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Je(this.x,t,n),this.y=Je(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-t.x,s=this.y-t.y;return this.x=o*i-s*r+t.x,this.y=o*r+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hi{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,o,s,a){let l=i[r+0],h=i[r+1],d=i[r+2],u=i[r+3];const p=o[s+0],c=o[s+1],m=o[s+2],v=o[s+3];if(a===0){t[n+0]=l,t[n+1]=h,t[n+2]=d,t[n+3]=u;return}if(a===1){t[n+0]=p,t[n+1]=c,t[n+2]=m,t[n+3]=v;return}if(u!==v||l!==p||h!==c||d!==m){let g=1-a;const f=l*p+h*c+d*m+u*v,_=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){const C=Math.sqrt(w),A=Math.atan2(C,f*_);g=Math.sin(g*A)/C,a=Math.sin(a*A)/C}const y=a*_;if(l=l*g+p*y,h=h*g+c*y,d=d*g+m*y,u=u*g+v*y,g===1-a){const C=1/Math.sqrt(l*l+h*h+d*d+u*u);l*=C,h*=C,d*=C,u*=C}}t[n]=l,t[n+1]=h,t[n+2]=d,t[n+3]=u}static multiplyQuaternionsFlat(t,n,i,r,o,s){const a=i[r],l=i[r+1],h=i[r+2],d=i[r+3],u=o[s],p=o[s+1],c=o[s+2],m=o[s+3];return t[n]=a*m+d*u+l*c-h*p,t[n+1]=l*m+d*p+h*u-a*c,t[n+2]=h*m+d*c+a*p-l*u,t[n+3]=d*m-a*u-l*p-h*c,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,r=t._y,o=t._z,s=t._order,a=Math.cos,l=Math.sin,h=a(i/2),d=a(r/2),u=a(o/2),p=l(i/2),c=l(r/2),m=l(o/2);switch(s){case"XYZ":this._x=p*d*u+h*c*m,this._y=h*c*u-p*d*m,this._z=h*d*m+p*c*u,this._w=h*d*u-p*c*m;break;case"YXZ":this._x=p*d*u+h*c*m,this._y=h*c*u-p*d*m,this._z=h*d*m-p*c*u,this._w=h*d*u+p*c*m;break;case"ZXY":this._x=p*d*u-h*c*m,this._y=h*c*u+p*d*m,this._z=h*d*m+p*c*u,this._w=h*d*u-p*c*m;break;case"ZYX":this._x=p*d*u-h*c*m,this._y=h*c*u+p*d*m,this._z=h*d*m-p*c*u,this._w=h*d*u+p*c*m;break;case"YZX":this._x=p*d*u+h*c*m,this._y=h*c*u+p*d*m,this._z=h*d*m-p*c*u,this._w=h*d*u-p*c*m;break;case"XZY":this._x=p*d*u-h*c*m,this._y=h*c*u-p*d*m,this._z=h*d*m+p*c*u,this._w=h*d*u+p*c*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],h=n[2],d=n[6],u=n[10],p=i+a+u;if(p>0){const c=.5/Math.sqrt(p+1);this._w=.25/c,this._x=(d-l)*c,this._y=(o-h)*c,this._z=(s-r)*c}else if(i>a&&i>u){const c=2*Math.sqrt(1+i-a-u);this._w=(d-l)/c,this._x=.25*c,this._y=(r+s)/c,this._z=(o+h)/c}else if(a>u){const c=2*Math.sqrt(1+a-i-u);this._w=(o-h)/c,this._x=(r+s)/c,this._y=.25*c,this._z=(l+d)/c}else{const c=2*Math.sqrt(1+u-i-a);this._w=(s-r)/c,this._x=(o+h)/c,this._y=(l+d)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,o=t._z,s=t._w,a=n._x,l=n._y,h=n._z,d=n._w;return this._x=i*d+s*a+r*h-o*l,this._y=r*d+s*l+o*a-i*h,this._z=o*d+s*h+i*l-r*a,this._w=s*d-i*a-r*l-o*h,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*t._w+i*t._x+r*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const c=1-n;return this._w=c*s+n*this._w,this._x=c*i+n*this._x,this._y=c*r+n*this._y,this._z=c*o+n*this._z,this.normalize(),this}const h=Math.sqrt(l),d=Math.atan2(h,a),u=Math.sin((1-n)*d)/h,p=Math.sin(n*d)/h;return this._w=s*u+this._w*p,this._x=i*u+this._x*p,this._y=r*u+this._y*p,this._z=o*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(n),o*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,n=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(qh.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(qh.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,o=t.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,o=t.x,s=t.y,a=t.z,l=t.w,h=2*(s*r-a*i),d=2*(a*n-o*r),u=2*(o*i-s*n);return this.x=n+l*h+s*u-a*d,this.y=i+l*d+a*h-o*u,this.z=r+l*u+o*d-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Je(this.x,t.x,n.x),this.y=Je(this.y,t.y,n.y),this.z=Je(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Je(this.x,t,n),this.y=Je(this.y,t,n),this.z=Je(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,o=t.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ml.copy(this).projectOnVector(t),this.sub(ml)}reflect(t){return this.sub(ml.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ml=new P,qh=new Hi;class Ye{constructor(t,n,i,r,o,s,a,l,h){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,o,s,a,l,h)}set(t,n,i,r,o,s,a,l,h){const d=this.elements;return d[0]=t,d[1]=r,d[2]=a,d[3]=n,d[4]=o,d[5]=l,d[6]=i,d[7]=s,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],h=i[1],d=i[4],u=i[7],p=i[2],c=i[5],m=i[8],v=r[0],g=r[3],f=r[6],_=r[1],w=r[4],y=r[7],C=r[2],A=r[5],R=r[8];return o[0]=s*v+a*_+l*C,o[3]=s*g+a*w+l*A,o[6]=s*f+a*y+l*R,o[1]=h*v+d*_+u*C,o[4]=h*g+d*w+u*A,o[7]=h*f+d*y+u*R,o[2]=p*v+c*_+m*C,o[5]=p*g+c*w+m*A,o[8]=p*f+c*y+m*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],h=t[7],d=t[8];return n*s*d-n*a*h-i*o*d+i*a*l+r*o*h-r*s*l}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],h=t[7],d=t[8],u=d*s-a*h,p=a*l-d*o,c=h*o-s*l,m=n*u+i*p+r*c;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=u*v,t[1]=(r*h-d*i)*v,t[2]=(a*i-r*s)*v,t[3]=p*v,t[4]=(d*n-r*l)*v,t[5]=(r*o-a*n)*v,t[6]=c*v,t[7]=(i*l-h*n)*v,t[8]=(s*n-i*o)*v,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,o,s,a){const l=Math.cos(o),h=Math.sin(o);return this.set(i*l,i*h,-i*(l*s+h*a)+s+t,-r*h,r*l,-r*(-h*s+l*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(gl.makeScale(t,n)),this}rotate(t){return this.premultiply(gl.makeRotation(-t)),this}translate(t,n){return this.premultiply(gl.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gl=new Ye;function Id(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function _a(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function $p(){const e=_a("canvas");return e.style.display="block",e}const Yh={};function Jr(e){e in Yh||(Yh[e]=!0,console.warn(e))}function jp(e,t,n){return new Promise(function(i,r){function o(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const $h=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zp(){const e={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===ft&&(r.r=vi(r.r),r.g=vi(r.g),r.b=vi(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ft&&(r.r=Qr(r.r),r.g=Qr(r.g),r.b=Qr(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ii?ga:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Jr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Jr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[lo]:{primaries:t,whitePoint:i,transfer:ga,toXYZ:$h,fromXYZ:jh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:t,whitePoint:i,transfer:ft,toXYZ:$h,fromXYZ:jh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),e}const ot=Zp();function vi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Qr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Pr;class Kp{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Pr===void 0&&(Pr=_a("canvas")),Pr.width=t.width,Pr.height=t.height;const r=Pr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Pr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=_a("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=vi(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(vi(n[i]/255)*255):n[i]=vi(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jp=0;class dh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(vl(r[s].image)):o.push(vl(r[s]))}else o=vl(r);i.url=o}return n||(t.images[this.uuid]=i),i}}function vl(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Kp.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qp=0;const _l=new P;class en extends go{constructor(t=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=nr,r=nr,o=un,s=ir,a=Hn,l=ii,h=en.DEFAULT_ANISOTROPY,d=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=gi(),this.name="",this.source=new dh(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_l).x}get height(){return this.source.getSize(_l).y}get depth(){return this.source.getSize(_l).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Td)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case es:t.x=t.x-Math.floor(t.x);break;case nr:t.x=t.x<0?0:1;break;case fc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case es:t.y=t.y-Math.floor(t.y);break;case nr:t.y=t.y<0?0:1;break;case fc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Td;en.DEFAULT_ANISOTROPY=1;class pt{constructor(t=0,n=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,o=this.w,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,o;const l=t.elements,h=l[0],d=l[4],u=l[8],p=l[1],c=l[5],m=l[9],v=l[2],g=l[6],f=l[10];if(Math.abs(d-p)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+p)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(h+c+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(h+1)/2,y=(c+1)/2,C=(f+1)/2,A=(d+p)/4,R=(u+v)/4,L=(m+g)/4;return w>y&&w>C?w<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(w),r=A/i,o=R/i):y>C?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=A/r,o=L/r):C<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(C),i=R/o,r=L/o),this.set(i,r,o,n),this}let _=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(p-d)*(p-d));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-v)/_,this.z=(p-d)/_,this.w=Math.acos((h+c+f-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Je(this.x,t.x,n.x),this.y=Je(this.y,t.y,n.y),this.z=Je(this.z,t.z,n.z),this.w=Je(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Je(this.x,t,n),this.y=Je(this.y,t,n),this.z=Je(this.z,t,n),this.w=Je(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class em extends go{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new pt(0,0,t,n),this.scissorTest=!1,this.viewport=new pt(0,0,t,n);const r={width:t,height:n,depth:i.depth},o=new en(r);this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},t.textures[n].image);this.textures[n].source=new dh(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ur extends em{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Dd extends en{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tm extends en{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gr{constructor(t=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Un.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,Un):Un.fromBufferAttribute(o,s),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Is.copy(i.boundingBox)),Is.applyMatrix4(t.matrixWorld),this.union(Is)}const r=t.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),Ds.subVectors(this.max,Po),xr.subVectors(t.a,Po),Rr.subVectors(t.b,Po),Ir.subVectors(t.c,Po),Ti.subVectors(Rr,xr),bi.subVectors(Ir,Rr),Xi.subVectors(xr,Ir);let n=[0,-Ti.z,Ti.y,0,-bi.z,bi.y,0,-Xi.z,Xi.y,Ti.z,0,-Ti.x,bi.z,0,-bi.x,Xi.z,0,-Xi.x,-Ti.y,Ti.x,0,-bi.y,bi.x,0,-Xi.y,Xi.x,0];return!Sl(n,xr,Rr,Ir,Ds)||(n=[1,0,0,0,1,0,0,0,1],!Sl(n,xr,Rr,Ir,Ds))?!1:(Ls.crossVectors(Ti,bi),n=[Ls.x,Ls.y,Ls.z],Sl(n,xr,Rr,Ir,Ds))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ai=[new P,new P,new P,new P,new P,new P,new P,new P],Un=new P,Is=new gr,xr=new P,Rr=new P,Ir=new P,Ti=new P,bi=new P,Xi=new P,Po=new P,Ds=new P,Ls=new P,qi=new P;function Sl(e,t,n,i,r){for(let o=0,s=e.length-3;o<=s;o+=3){qi.fromArray(e,o);const a=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),l=t.dot(qi),h=n.dot(qi),d=i.dot(qi);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>a)return!1}return!0}const nm=new gr,xo=new P,yl=new P;class vr{constructor(t=new P,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):nm.setFromPoints(t).getCenter(i);let r=0;for(let o=0,s=t.length;o<s;o++)r=Math.max(r,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xo.subVectors(t,this.center);const n=xo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(xo,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xo.copy(t.center).add(yl)),this.expandByPoint(xo.copy(t.center).sub(yl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const li=new P,Ml=new P,ks=new P,wi=new P,Tl=new P,Us=new P,bl=new P;class Wa{constructor(t=new P,n=new P(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=li.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,n),li.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){Ml.copy(t).add(n).multiplyScalar(.5),ks.copy(n).sub(t).normalize(),wi.copy(this.origin).sub(Ml);const o=t.distanceTo(n)*.5,s=-this.direction.dot(ks),a=wi.dot(this.direction),l=-wi.dot(ks),h=wi.lengthSq(),d=Math.abs(1-s*s);let u,p,c,m;if(d>0)if(u=s*l-a,p=s*a-l,m=o*d,u>=0)if(p>=-m)if(p<=m){const v=1/d;u*=v,p*=v,c=u*(u+s*p+2*a)+p*(s*u+p+2*l)+h}else p=o,u=Math.max(0,-(s*p+a)),c=-u*u+p*(p+2*l)+h;else p=-o,u=Math.max(0,-(s*p+a)),c=-u*u+p*(p+2*l)+h;else p<=-m?(u=Math.max(0,-(-s*o+a)),p=u>0?-o:Math.min(Math.max(-o,-l),o),c=-u*u+p*(p+2*l)+h):p<=m?(u=0,p=Math.min(Math.max(-o,-l),o),c=p*(p+2*l)+h):(u=Math.max(0,-(s*o+a)),p=u>0?o:Math.min(Math.max(-o,-l),o),c=-u*u+p*(p+2*l)+h);else p=s>0?-o:o,u=Math.max(0,-(s*p+a)),c=-u*u+p*(p+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ml).addScaledVector(ks,p),c}intersectSphere(t,n){li.subVectors(t.center,this.origin);const i=li.dot(this.direction),r=li.dot(li)-i*i,o=t.radius*t.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,o,s,a,l;const h=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,p=this.origin;return h>=0?(i=(t.min.x-p.x)*h,r=(t.max.x-p.x)*h):(i=(t.max.x-p.x)*h,r=(t.min.x-p.x)*h),d>=0?(o=(t.min.y-p.y)*d,s=(t.max.y-p.y)*d):(o=(t.max.y-p.y)*d,s=(t.min.y-p.y)*d),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),u>=0?(a=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,n,i,r,o){Tl.subVectors(n,t),Us.subVectors(i,t),bl.crossVectors(Tl,Us);let s=this.direction.dot(bl),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;wi.subVectors(this.origin,t);const l=a*this.direction.dot(Us.crossVectors(wi,Us));if(l<0)return null;const h=a*this.direction.dot(Tl.cross(wi));if(h<0||l+h>s)return null;const d=-a*wi.dot(bl);return d<0?null:this.at(d/s,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(t,n,i,r,o,s,a,l,h,d,u,p,c,m,v,g){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,o,s,a,l,h,d,u,p,c,m,v,g)}set(t,n,i,r,o,s,a,l,h,d,u,p,c,m,v,g){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=h,f[6]=d,f[10]=u,f[14]=p,f[3]=c,f[7]=m,f[11]=v,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/Dr.setFromMatrixColumn(t,0).length(),o=1/Dr.setFromMatrixColumn(t,1).length(),s=1/Dr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,o=t.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),h=Math.sin(r),d=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const p=s*d,c=s*u,m=a*d,v=a*u;n[0]=l*d,n[4]=-l*u,n[8]=h,n[1]=c+m*h,n[5]=p-v*h,n[9]=-a*l,n[2]=v-p*h,n[6]=m+c*h,n[10]=s*l}else if(t.order==="YXZ"){const p=l*d,c=l*u,m=h*d,v=h*u;n[0]=p+v*a,n[4]=m*a-c,n[8]=s*h,n[1]=s*u,n[5]=s*d,n[9]=-a,n[2]=c*a-m,n[6]=v+p*a,n[10]=s*l}else if(t.order==="ZXY"){const p=l*d,c=l*u,m=h*d,v=h*u;n[0]=p-v*a,n[4]=-s*u,n[8]=m+c*a,n[1]=c+m*a,n[5]=s*d,n[9]=v-p*a,n[2]=-s*h,n[6]=a,n[10]=s*l}else if(t.order==="ZYX"){const p=s*d,c=s*u,m=a*d,v=a*u;n[0]=l*d,n[4]=m*h-c,n[8]=p*h+v,n[1]=l*u,n[5]=v*h+p,n[9]=c*h-m,n[2]=-h,n[6]=a*l,n[10]=s*l}else if(t.order==="YZX"){const p=s*l,c=s*h,m=a*l,v=a*h;n[0]=l*d,n[4]=v-p*u,n[8]=m*u+c,n[1]=u,n[5]=s*d,n[9]=-a*d,n[2]=-h*d,n[6]=c*u+m,n[10]=p-v*u}else if(t.order==="XZY"){const p=s*l,c=s*h,m=a*l,v=a*h;n[0]=l*d,n[4]=-u,n[8]=h*d,n[1]=p*u+v,n[5]=s*d,n[9]=c*u-m,n[2]=m*u-c,n[6]=a*d,n[10]=v*u+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(im,t,rm)}lookAt(t,n,i){const r=this.elements;return vn.subVectors(t,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ei.crossVectors(i,vn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ei.crossVectors(i,vn)),Ei.normalize(),Ns.crossVectors(vn,Ei),r[0]=Ei.x,r[4]=Ns.x,r[8]=vn.x,r[1]=Ei.y,r[5]=Ns.y,r[9]=vn.y,r[2]=Ei.z,r[6]=Ns.z,r[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],h=i[12],d=i[1],u=i[5],p=i[9],c=i[13],m=i[2],v=i[6],g=i[10],f=i[14],_=i[3],w=i[7],y=i[11],C=i[15],A=r[0],R=r[4],L=r[8],M=r[12],T=r[1],I=r[5],H=r[9],z=r[13],X=r[2],$=r[6],Y=r[10],ee=r[14],q=r[3],he=r[7],ge=r[11],Se=r[15];return o[0]=s*A+a*T+l*X+h*q,o[4]=s*R+a*I+l*$+h*he,o[8]=s*L+a*H+l*Y+h*ge,o[12]=s*M+a*z+l*ee+h*Se,o[1]=d*A+u*T+p*X+c*q,o[5]=d*R+u*I+p*$+c*he,o[9]=d*L+u*H+p*Y+c*ge,o[13]=d*M+u*z+p*ee+c*Se,o[2]=m*A+v*T+g*X+f*q,o[6]=m*R+v*I+g*$+f*he,o[10]=m*L+v*H+g*Y+f*ge,o[14]=m*M+v*z+g*ee+f*Se,o[3]=_*A+w*T+y*X+C*q,o[7]=_*R+w*I+y*$+C*he,o[11]=_*L+w*H+y*Y+C*ge,o[15]=_*M+w*z+y*ee+C*Se,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],o=t[12],s=t[1],a=t[5],l=t[9],h=t[13],d=t[2],u=t[6],p=t[10],c=t[14],m=t[3],v=t[7],g=t[11],f=t[15];return m*(+o*l*u-r*h*u-o*a*p+i*h*p+r*a*c-i*l*c)+v*(+n*l*c-n*h*p+o*s*p-r*s*c+r*h*d-o*l*d)+g*(+n*h*u-n*a*c-o*s*u+i*s*c+o*a*d-i*h*d)+f*(-r*a*d-n*l*u+n*a*p+r*s*u-i*s*p+i*l*d)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],h=t[7],d=t[8],u=t[9],p=t[10],c=t[11],m=t[12],v=t[13],g=t[14],f=t[15],_=u*g*h-v*p*h+v*l*c-a*g*c-u*l*f+a*p*f,w=m*p*h-d*g*h-m*l*c+s*g*c+d*l*f-s*p*f,y=d*v*h-m*u*h+m*a*c-s*v*c-d*a*f+s*u*f,C=m*u*l-d*v*l-m*a*p+s*v*p+d*a*g-s*u*g,A=n*_+i*w+r*y+o*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=_*R,t[1]=(v*p*o-u*g*o-v*r*c+i*g*c+u*r*f-i*p*f)*R,t[2]=(a*g*o-v*l*o+v*r*h-i*g*h-a*r*f+i*l*f)*R,t[3]=(u*l*o-a*p*o-u*r*h+i*p*h+a*r*c-i*l*c)*R,t[4]=w*R,t[5]=(d*g*o-m*p*o+m*r*c-n*g*c-d*r*f+n*p*f)*R,t[6]=(m*l*o-s*g*o-m*r*h+n*g*h+s*r*f-n*l*f)*R,t[7]=(s*p*o-d*l*o+d*r*h-n*p*h-s*r*c+n*l*c)*R,t[8]=y*R,t[9]=(m*u*o-d*v*o-m*i*c+n*v*c+d*i*f-n*u*f)*R,t[10]=(s*v*o-m*a*o+m*i*h-n*v*h-s*i*f+n*a*f)*R,t[11]=(d*a*o-s*u*o-d*i*h+n*u*h+s*i*c-n*a*c)*R,t[12]=C*R,t[13]=(d*v*r-m*u*r+m*i*p-n*v*p-d*i*g+n*u*g)*R,t[14]=(m*a*r-s*v*r-m*i*l+n*v*l+s*i*g-n*a*g)*R,t[15]=(s*u*r-d*a*r+d*i*l-n*u*l-s*i*p+n*a*p)*R,this}scale(t){const n=this.elements,i=t.x,r=t.y,o=t.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=t.x,a=t.y,l=t.z,h=o*s,d=o*a;return this.set(h*s+i,h*a-r*l,h*l+r*a,0,h*a+r*l,d*a+i,d*l-r*s,0,h*l-r*a,d*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,o,s){return this.set(1,i,o,0,t,1,s,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,h=o+o,d=s+s,u=a+a,p=o*h,c=o*d,m=o*u,v=s*d,g=s*u,f=a*u,_=l*h,w=l*d,y=l*u,C=i.x,A=i.y,R=i.z;return r[0]=(1-(v+f))*C,r[1]=(c+y)*C,r[2]=(m-w)*C,r[3]=0,r[4]=(c-y)*A,r[5]=(1-(p+f))*A,r[6]=(g+_)*A,r[7]=0,r[8]=(m+w)*R,r[9]=(g-_)*R,r[10]=(1-(p+v))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let o=Dr.set(r[0],r[1],r[2]).length();const s=Dr.set(r[4],r[5],r[6]).length(),a=Dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),t.x=r[12],t.y=r[13],t.z=r[14],Nn.copy(this);const h=1/o,d=1/s,u=1/a;return Nn.elements[0]*=h,Nn.elements[1]*=h,Nn.elements[2]*=h,Nn.elements[4]*=d,Nn.elements[5]*=d,Nn.elements[6]*=d,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,n.setFromRotationMatrix(Nn),i.x=o,i.y=s,i.z=a,this}makePerspective(t,n,i,r,o,s,a=ti,l=!1){const h=this.elements,d=2*o/(n-t),u=2*o/(i-r),p=(n+t)/(n-t),c=(i+r)/(i-r);let m,v;if(l)m=o/(s-o),v=s*o/(s-o);else if(a===ti)m=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===va)m=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=d,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=u,h[9]=c,h[13]=0,h[2]=0,h[6]=0,h[10]=m,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,n,i,r,o,s,a=ti,l=!1){const h=this.elements,d=2/(n-t),u=2/(i-r),p=-(n+t)/(n-t),c=-(i+r)/(i-r);let m,v;if(l)m=1/(s-o),v=s/(s-o);else if(a===ti)m=-2/(s-o),v=-(s+o)/(s-o);else if(a===va)m=-1/(s-o),v=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=d,h[4]=0,h[8]=0,h[12]=p,h[1]=0,h[5]=u,h[9]=0,h[13]=c,h[2]=0,h[6]=0,h[10]=m,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Dr=new P,Nn=new ht,im=new P(0,0,0),rm=new P(1,1,1),Ei=new P,Ns=new P,vn=new P,Zh=new ht,Kh=new Hi;class jn{constructor(t=0,n=0,i=0,r=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,o=r[0],s=r[4],a=r[8],l=r[1],h=r[5],d=r[9],u=r[2],p=r[6],c=r[10];switch(n){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,c),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,c),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Je(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,c),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,c),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,c));break;case"XZY":this._z=Math.asin(-Je(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Zh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zh,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class fh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let om=0;const Jh=new P,Lr=new Hi,ci=new ht,Fs=new P,Ro=new P,sm=new P,am=new Hi,Qh=new P(1,0,0),eu=new P(0,1,0),tu=new P(0,0,1),nu={type:"added"},lm={type:"removed"},kr={type:"childadded",child:null},wl={type:"childremoved",child:null};class zt extends go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const t=new P,n=new jn,i=new Hi,r=new P(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ye}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Lr.setFromAxisAngle(t,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(t,n){return Lr.setFromAxisAngle(t,n),this.quaternion.premultiply(Lr),this}rotateX(t){return this.rotateOnAxis(Qh,t)}rotateY(t){return this.rotateOnAxis(eu,t)}rotateZ(t){return this.rotateOnAxis(tu,t)}translateOnAxis(t,n){return Jh.copy(t).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Qh,t)}translateY(t){return this.translateOnAxis(eu,t)}translateZ(t){return this.translateOnAxis(tu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Fs.copy(t):Fs.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Ro,Fs,this.up):ci.lookAt(Fs,Ro,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(ci),this.quaternion.premultiply(Lr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nu),kr.child=t,this.dispatchEvent(kr),kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(lm),wl.child=t,this.dispatchEvent(wl),wl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nu),kr.child=t,this.dispatchEvent(kr),kr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,t,sm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,am,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const u=l[h];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(o(t.materials,this.material[l]));r.material=a}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(t.animations,l))}}if(n){const a=s(t.geometries),l=s(t.materials),h=s(t.textures),d=s(t.images),u=s(t.shapes),p=s(t.skeletons),c=s(t.animations),m=s(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),c.length>0&&(i.animations=c),m.length>0&&(i.nodes=m)}return i.object=r,i;function s(a){const l=[];for(const h in a){const d=a[h];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new P(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new P,hi=new P,El=new P,ui=new P,Ur=new P,Nr=new P,iu=new P,Al=new P,Cl=new P,Pl=new P,xl=new pt,Rl=new pt,Il=new pt;class Dn{constructor(t=new P,n=new P,i=new P){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),Fn.subVectors(t,n),r.cross(Fn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,n,i,r,o){Fn.subVectors(r,n),hi.subVectors(i,n),El.subVectors(t,n);const s=Fn.dot(Fn),a=Fn.dot(hi),l=Fn.dot(El),h=hi.dot(hi),d=hi.dot(El),u=s*h-a*a;if(u===0)return o.set(0,0,0),null;const p=1/u,c=(h*l-a*d)*p,m=(s*d-a*l)*p;return o.set(1-c-m,m,c)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,n,i,r,o,s,a,l){return this.getBarycoord(t,n,i,r,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,ui.x),l.addScaledVector(s,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(t,n,i,r,o,s){return xl.setScalar(0),Rl.setScalar(0),Il.setScalar(0),xl.fromBufferAttribute(t,n),Rl.fromBufferAttribute(t,i),Il.fromBufferAttribute(t,r),s.setScalar(0),s.addScaledVector(xl,o.x),s.addScaledVector(Rl,o.y),s.addScaledVector(Il,o.z),s}static isFrontFacing(t,n,i,r){return Fn.subVectors(i,n),hi.subVectors(t,n),Fn.cross(hi).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Fn.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Dn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,r,o){return Dn.getInterpolation(t,this.a,this.b,this.c,n,i,r,o)}containsPoint(t){return Dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,o=this.c;let s,a;Ur.subVectors(r,i),Nr.subVectors(o,i),Al.subVectors(t,i);const l=Ur.dot(Al),h=Nr.dot(Al);if(l<=0&&h<=0)return n.copy(i);Cl.subVectors(t,r);const d=Ur.dot(Cl),u=Nr.dot(Cl);if(d>=0&&u<=d)return n.copy(r);const p=l*u-d*h;if(p<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(Ur,s);Pl.subVectors(t,o);const c=Ur.dot(Pl),m=Nr.dot(Pl);if(m>=0&&c<=m)return n.copy(o);const v=c*h-l*m;if(v<=0&&h>=0&&m<=0)return a=h/(h-m),n.copy(i).addScaledVector(Nr,a);const g=d*m-c*u;if(g<=0&&u-d>=0&&c-m>=0)return iu.subVectors(o,r),a=(u-d)/(u-d+(c-m)),n.copy(r).addScaledVector(iu,a);const f=1/(g+v+p);return s=v*f,a=p*f,n.copy(i).addScaledVector(Ur,s).addScaledVector(Nr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function Dl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class ze{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Wt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ot.colorSpaceToWorking(this,n),this}setRGB(t,n,i,r=ot.workingColorSpace){return this.r=t,this.g=n,this.b=i,ot.colorSpaceToWorking(this,r),this}setHSL(t,n,i,r=ot.workingColorSpace){if(t=uh(t,1),n=Je(n,0,1),i=Je(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Dl(s,o,t+1/3),this.g=Dl(s,o,t),this.b=Dl(s,o,t-1/3)}return ot.colorSpaceToWorking(this,r),this}setStyle(t,n=Wt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Wt){const i=Ld[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wt){return ot.workingToColorSpace(Kt.copy(this),t),Math.round(Je(Kt.r*255,0,255))*65536+Math.round(Je(Kt.g*255,0,255))*256+Math.round(Je(Kt.b*255,0,255))}getHexString(t=Wt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ot.workingColorSpace){ot.workingToColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,o=Kt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,h;const d=(a+s)/2;if(a===s)l=0,h=0;else{const u=s-a;switch(h=d<=.5?u/(s+a):u/(2-s-a),s){case i:l=(r-o)/u+(r<o?6:0);break;case r:l=(o-i)/u+2;break;case o:l=(i-r)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=d,t}getRGB(t,n=ot.workingColorSpace){return ot.workingToColorSpace(Kt.copy(this),n),t.r=Kt.r,t.g=Kt.g,t.b=Kt.b,t}getStyle(t=Wt){ot.workingToColorSpace(Kt.copy(this),t);const n=Kt.r,i=Kt.g,r=Kt.b;return t!==Wt?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+n,Ai.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ai),t.getHSL(Bs);const i=Yo(Ai.h,Bs.h,n),r=Yo(Ai.s,Bs.s,n),o=Yo(Ai.l,Bs.l,n);return this.setHSL(i,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,r=this.b,o=t.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new ze;ze.NAMES=Ld;let cm=0;class Si extends go{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Kr,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nc&&(i.blendSrc=this.blendSrc),this.blendDst!==ic&&(i.blendDst=this.blendDst),this.blendEquation!==er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(t.textures),s=r(t.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class je extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ht=new P,Os=new Ge;let hm=0;class bn{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hm++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=zc,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Os.fromBufferAttribute(this,n),Os.applyMatrix3(t),this.setXY(n,Os.x,Os.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix3(t),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix4(t),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyNormalMatrix(t),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.transformDirection(t),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ct(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Gn(n,this.array)),n}setX(t,n){return this.normalized&&(n=ct(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Gn(n,this.array)),n}setY(t,n){return this.normalized&&(n=ct(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Gn(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ct(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Gn(n,this.array)),n}setW(t,n){return this.normalized&&(n=ct(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,o){return t*=this.itemSize,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array),o=ct(o,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zc&&(t.usage=this.usage),t}}class kd extends bn{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Ud extends bn{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class tt extends bn{constructor(t,n,i){super(new Float32Array(t),n,i)}}let um=0;const Pn=new ht,Ll=new zt,Fr=new P,_n=new gr,Io=new gr,Yt=new P;class Gt extends go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Id(t)?Ud:kd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ye().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,n,i){return Pn.makeTranslation(t,n,i),this.applyMatrix4(Pn),this}scale(t,n,i){return Pn.makeScale(t,n,i),this.applyMatrix4(Pn),this}lookAt(t){return Ll.lookAt(t),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=t.length;r<o;r++){const s=t[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new tt(i,3))}else{const i=Math.min(t.length,n.count);for(let r=0;r<i;r++){const o=t[r];n.setXYZ(r,o.x,o.y,o.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];_n.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(_n.min,Io.min),_n.expandByPoint(Yt),Yt.addVectors(_n.max,Io.max),_n.expandByPoint(Yt)):(_n.expandByPoint(Io.min),_n.expandByPoint(Io.max))}_n.getCenter(i);let r=0;for(let o=0,s=t.count;o<s;o++)Yt.fromBufferAttribute(t,o),r=Math.max(r,i.distanceToSquared(Yt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let h=0,d=a.count;h<d;h++)Yt.fromBufferAttribute(a,h),l&&(Fr.fromBufferAttribute(t,h),Yt.add(Fr)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new P,l[L]=new P;const h=new P,d=new P,u=new P,p=new Ge,c=new Ge,m=new Ge,v=new P,g=new P;function f(L,M,T){h.fromBufferAttribute(i,L),d.fromBufferAttribute(i,M),u.fromBufferAttribute(i,T),p.fromBufferAttribute(o,L),c.fromBufferAttribute(o,M),m.fromBufferAttribute(o,T),d.sub(h),u.sub(h),c.sub(p),m.sub(p);const I=1/(c.x*m.y-m.x*c.y);isFinite(I)&&(v.copy(d).multiplyScalar(m.y).addScaledVector(u,-c.y).multiplyScalar(I),g.copy(u).multiplyScalar(c.x).addScaledVector(d,-m.x).multiplyScalar(I),a[L].add(v),a[M].add(v),a[T].add(v),l[L].add(g),l[M].add(g),l[T].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let L=0,M=_.length;L<M;++L){const T=_[L],I=T.start,H=T.count;for(let z=I,X=I+H;z<X;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const w=new P,y=new P,C=new P,A=new P;function R(L){C.fromBufferAttribute(r,L),A.copy(C);const M=a[L];w.copy(M),w.sub(C.multiplyScalar(C.dot(M))).normalize(),y.crossVectors(A,M);const I=y.dot(l[L])<0?-1:1;s.setXYZW(L,w.x,w.y,w.z,I)}for(let L=0,M=_.length;L<M;++L){const T=_[L],I=T.start,H=T.count;for(let z=I,X=I+H;z<X;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,c=i.count;p<c;p++)i.setXYZ(p,0,0,0);const r=new P,o=new P,s=new P,a=new P,l=new P,h=new P,d=new P,u=new P;if(t)for(let p=0,c=t.count;p<c;p+=3){const m=t.getX(p+0),v=t.getX(p+1),g=t.getX(p+2);r.fromBufferAttribute(n,m),o.fromBufferAttribute(n,v),s.fromBufferAttribute(n,g),d.subVectors(s,o),u.subVectors(r,o),d.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),h.fromBufferAttribute(i,g),a.add(d),l.add(d),h.add(d),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let p=0,c=n.count;p<c;p+=3)r.fromBufferAttribute(n,p+0),o.fromBufferAttribute(n,p+1),s.fromBufferAttribute(n,p+2),d.subVectors(s,o),u.subVectors(r,o),d.cross(u),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Yt.fromBufferAttribute(t,n),Yt.normalize(),t.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function t(a,l){const h=a.array,d=a.itemSize,u=a.normalized,p=new h.constructor(l.length*d);let c=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?c=l[v]*a.data.stride+a.offset:c=l[v]*d;for(let f=0;f<d;f++)p[m++]=h[c++]}return new bn(p,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],h=t(l,i);n.setAttribute(a,h)}const o=this.morphAttributes;for(const a in o){const l=[],h=o[a];for(let d=0,u=h.length;d<u;d++){const p=h[d],c=t(p,i);l.push(c)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const h=s[a];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const h=i[l];t.data.attributes[l]=h.toJSON(t.data)}const r={};let o=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let u=0,p=h.length;u<p;u++){const c=h[u];d.push(c.toJSON(t.data))}d.length>0&&(r[l]=d,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const h in r){const d=r[h];this.setAttribute(h,d.clone(n))}const o=t.morphAttributes;for(const h in o){const d=[],u=o[h];for(let p=0,c=u.length;p<c;p++)d.push(u[p].clone(n));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let h=0,d=s.length;h<d;h++){const u=s[h];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ru=new ht,Yi=new Wa,zs=new vr,ou=new P,Gs=new P,Hs=new P,Ws=new P,kl=new P,Vs=new P,su=new P,Xs=new P;class O extends zt{constructor(t=new Gt,n=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(o&&a){Vs.set(0,0,0);for(let l=0,h=o.length;l<h;l++){const d=a[l],u=o[l];d!==0&&(kl.fromBufferAttribute(u,t),s?Vs.addScaledVector(kl,d):Vs.addScaledVector(kl.sub(n),d))}n.add(Vs)}return n}raycast(t,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(o),Yi.copy(t.ray).recast(t.near),!(zs.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(zs,ou)===null||Yi.origin.distanceToSquared(ou)>(t.far-t.near)**2))&&(ru.copy(o).invert(),Yi.copy(t.ray).applyMatrix4(ru),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Yi)))}_computeIntersections(t,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,h=o.attributes.uv,d=o.attributes.uv1,u=o.attributes.normal,p=o.groups,c=o.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,v=p.length;m<v;m++){const g=p[m],f=s[g.materialIndex],_=Math.max(g.start,c.start),w=Math.min(a.count,Math.min(g.start+g.count,c.start+c.count));for(let y=_,C=w;y<C;y+=3){const A=a.getX(y),R=a.getX(y+1),L=a.getX(y+2);r=qs(this,f,t,i,h,d,u,A,R,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,c.start),v=Math.min(a.count,c.start+c.count);for(let g=m,f=v;g<f;g+=3){const _=a.getX(g),w=a.getX(g+1),y=a.getX(g+2);r=qs(this,s,t,i,h,d,u,_,w,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,v=p.length;m<v;m++){const g=p[m],f=s[g.materialIndex],_=Math.max(g.start,c.start),w=Math.min(l.count,Math.min(g.start+g.count,c.start+c.count));for(let y=_,C=w;y<C;y+=3){const A=y,R=y+1,L=y+2;r=qs(this,f,t,i,h,d,u,A,R,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,c.start),v=Math.min(l.count,c.start+c.count);for(let g=m,f=v;g<f;g+=3){const _=g,w=g+1,y=g+2;r=qs(this,s,t,i,h,d,u,_,w,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function dm(e,t,n,i,r,o,s,a){let l;if(t.side===fn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,t.side===Oi,a),l===null)return null;Xs.copy(a),Xs.applyMatrix4(e.matrixWorld);const h=n.ray.origin.distanceTo(Xs);return h<n.near||h>n.far?null:{distance:h,point:Xs.clone(),object:e}}function qs(e,t,n,i,r,o,s,a,l,h){e.getVertexPosition(a,Gs),e.getVertexPosition(l,Hs),e.getVertexPosition(h,Ws);const d=dm(e,t,n,i,Gs,Hs,Ws,su);if(d){const u=new P;Dn.getBarycoord(su,Gs,Hs,Ws,u),r&&(d.uv=Dn.getInterpolatedAttribute(r,a,l,h,u,new Ge)),o&&(d.uv1=Dn.getInterpolatedAttribute(o,a,l,h,u,new Ge)),s&&(d.normal=Dn.getInterpolatedAttribute(s,a,l,h,u,new P),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c:h,normal:new P,materialIndex:0};Dn.getNormal(Gs,Hs,Ws,p.normal),d.face=p,d.barycoord=u}return d}class Pe extends Gt{constructor(t=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],h=[],d=[],u=[];let p=0,c=0;m("z","y","x",-1,-1,i,n,t,s,o,0),m("z","y","x",1,-1,i,n,-t,s,o,1),m("x","z","y",1,1,t,i,n,r,s,2),m("x","z","y",1,-1,t,i,-n,r,s,3),m("x","y","z",1,-1,t,n,i,r,o,4),m("x","y","z",-1,-1,t,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(u,2));function m(v,g,f,_,w,y,C,A,R,L,M){const T=y/R,I=C/L,H=y/2,z=C/2,X=A/2,$=R+1,Y=L+1;let ee=0,q=0;const he=new P;for(let ge=0;ge<Y;ge++){const Se=ge*I-z;for(let Re=0;Re<$;Re++){const Ze=Re*T-H;he[v]=Ze*_,he[g]=Se*w,he[f]=X,h.push(he.x,he.y,he.z),he[v]=0,he[g]=0,he[f]=A>0?1:-1,d.push(he.x,he.y,he.z),u.push(Re/R),u.push(1-ge/L),ee+=1}}for(let ge=0;ge<L;ge++)for(let Se=0;Se<R;Se++){const Re=p+Se+$*ge,Ze=p+Se+$*(ge+1),lt=p+(Se+1)+$*(ge+1),K=p+(Se+1)+$*ge;l.push(Re,Ze,K),l.push(Ze,lt,K),q+=6}a.addGroup(c,q,M),c+=q,p+=ee}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function co(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function on(e){const t={};for(let n=0;n<e.length;n++){const i=co(e[n]);for(const r in i)t[r]=i[r]}return t}function fm(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Nd(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ot.workingColorSpace}const pm={clone:co,merge:on};var mm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mm,this.fragmentShader=gm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=co(t.uniforms),this.uniformsGroups=fm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Fd extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new P,au=new Ge,lu=new Ge;class Sn extends Fd{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=os*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return os*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,n){return this.getViewBounds(t,au,lu),n.subVectors(lu,au)}setViewOffset(t,n,i,r,o,s){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(qo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,h=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/h,r*=s.width/l,i*=s.height/h}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Br=-90,Or=1;class vm extends zt{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(Br,Or,t,n);r.layers=this.layers,this.add(r);const o=new Sn(Br,Or,t,n);o.layers=this.layers,this.add(o);const s=new Sn(Br,Or,t,n);s.layers=this.layers,this.add(s);const a=new Sn(Br,Or,t,n);a.layers=this.layers,this.add(a);const l=new Sn(Br,Or,t,n);l.layers=this.layers,this.add(l);const h=new Sn(Br,Or,t,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const h of n)this.remove(h);if(t===ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===va)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of n)this.add(h),h.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,h,d]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),c=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(n,o),t.setRenderTarget(i,1,r),t.render(n,s),t.setRenderTarget(i,2,r),t.render(n,a),t.setRenderTarget(i,3,r),t.render(n,l),t.setRenderTarget(i,4,r),t.render(n,h),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(n,d),t.setRenderTarget(u,p,c),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Bd extends en{constructor(t=[],n=so,i,r,o,s,a,l,h,d){super(t,n,i,r,o,s,a,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _m extends ur{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Bd(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pe(5,5,5),o=new zi({name:"CubemapFromEquirect",uniforms:co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Li});o.uniforms.tEquirect.value=n;const s=new O(r,o),a=n.minFilter;return n.minFilter===ir&&(n.minFilter=un),new vm(1,10,this).update(t,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,n=!0,i=!0,r=!0){const o=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(n,i,r);t.setRenderTarget(o)}}class De extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sm={type:"move"};class Ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(h&&t.hand){s=!0;for(const v of t.hand.values()){const g=n.getJointPose(v,i),f=this._getHandJoint(h,v);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const d=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],p=d.position.distanceTo(u.position),c=.02,m=.005;h.inputState.pinching&&p>c+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=c-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=n.getPose(t.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),h!==null&&(h.visible=s!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new De;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}class ph{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new ze(t),this.near=n,this.far=i}clone(){return new ph(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Od extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ym{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=zc,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=n.array[i+r];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new P;class Sa{constructor(t,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(t),this.setXYZ(n,nn.x,nn.y,nn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ct(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Gn(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Gn(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Gn(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Gn(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,n,i,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array),o=ct(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return new bn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Sa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ss extends Si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zr;const Do=new P,Gr=new P,Hr=new P,Wr=new Ge,Lo=new Ge,zd=new ht,Ys=new P,ko=new P,$s=new P,cu=new Ge,Nl=new Ge,hu=new Ge;class $o extends zt{constructor(t=new ss){if(super(),this.isSprite=!0,this.type="Sprite",zr===void 0){zr=new Gt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ym(n,5);zr.setIndex([0,1,2,0,2,3]),zr.setAttribute("position",new Sa(i,3,0,!1)),zr.setAttribute("uv",new Sa(i,2,3,!1))}this.geometry=zr,this.material=t,this.center=new Ge(.5,.5),this.count=1}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gr.setFromMatrixScale(this.matrixWorld),zd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gr.multiplyScalar(-Hr.z);const i=this.material.rotation;let r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));const s=this.center;js(Ys.set(-.5,-.5,0),Hr,s,Gr,r,o),js(ko.set(.5,-.5,0),Hr,s,Gr,r,o),js($s.set(.5,.5,0),Hr,s,Gr,r,o),cu.set(0,0),Nl.set(1,0),hu.set(1,1);let a=t.ray.intersectTriangle(Ys,ko,$s,!1,Do);if(a===null&&(js(ko.set(-.5,.5,0),Hr,s,Gr,r,o),Nl.set(0,1),a=t.ray.intersectTriangle(Ys,$s,ko,!1,Do),a===null))return;const l=t.ray.origin.distanceTo(Do);l<t.near||l>t.far||n.push({distance:l,point:Do.clone(),uv:Dn.getInterpolation(Do,Ys,ko,$s,cu,Nl,hu,new Ge),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function js(e,t,n,i,r,o){Wr.subVectors(e,n).addScalar(.5).multiply(i),r!==void 0?(Lo.x=o*Wr.x-r*Wr.y,Lo.y=r*Wr.x+o*Wr.y):Lo.copy(Wr),e.copy(t),e.x+=Lo.x,e.y+=Lo.y,e.applyMatrix4(zd)}class Mm extends en{constructor(t=null,n=1,i=1,r,o,s,a,l,h=Tn,d=Tn,u,p){super(null,s,a,l,h,d,r,o,u,p),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uu extends bn{constructor(t,n,i,r=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Vr=new ht,du=new ht,Zs=[],fu=new gr,Tm=new ht,Uo=new O,No=new vr;class Lt extends O{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new uu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Tm)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new gr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Vr),fu.copy(t.boundingBox).applyMatrix4(Vr),this.boundingBox.union(fu)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new vr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Vr),No.copy(t.boundingSphere).applyMatrix4(Vr),this.boundingSphere.union(No)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,o=i.length+1,s=t*o+1;for(let a=0;a<i.length;a++)i[a]=r[s+a]}raycast(t,n){const i=this.matrixWorld,r=this.count;if(Uo.geometry=this.geometry,Uo.material=this.material,Uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),No.copy(this.boundingSphere),No.applyMatrix4(i),t.ray.intersectsSphere(No)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,Vr),du.multiplyMatrices(i,Vr),Uo.matrixWorld=du,Uo.raycast(t,Zs);for(let s=0,a=Zs.length;s<a;s++){const l=Zs[s];l.instanceId=o,l.object=this,n.push(l)}Zs.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new uu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Mm(new Float32Array(r*this.count),r,this.count,oh,ei));const o=this.morphTexture.source.data.data;let s=0;for(let h=0;h<i.length;h++)s+=i[h];const a=this.geometry.morphTargetsRelative?1:1-s,l=r*t;o[l]=a,o.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fl=new P,bm=new P,wm=new Ye;class xi{constructor(t=new P(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=Fl.subVectors(i,n).cross(bm.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(Fl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||wm.getNormalMatrix(t),r=this.coplanarPoint(Fl).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new vr,Em=new Ge(.5,.5),Ks=new P;class mh{constructor(t=new xi,n=new xi,i=new xi,r=new xi,o=new xi,s=new xi){this.planes=[t,n,i,r,o,s]}set(t,n,i,r,o,s){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ti,i=!1){const r=this.planes,o=t.elements,s=o[0],a=o[1],l=o[2],h=o[3],d=o[4],u=o[5],p=o[6],c=o[7],m=o[8],v=o[9],g=o[10],f=o[11],_=o[12],w=o[13],y=o[14],C=o[15];if(r[0].setComponents(h-s,c-d,f-m,C-_).normalize(),r[1].setComponents(h+s,c+d,f+m,C+_).normalize(),r[2].setComponents(h+a,c+u,f+v,C+w).normalize(),r[3].setComponents(h-a,c-u,f-v,C-w).normalize(),i)r[4].setComponents(l,p,g,y).normalize(),r[5].setComponents(h-l,c-p,f-g,C-y).normalize();else if(r[4].setComponents(h-l,c-p,f-g,C-y).normalize(),n===ti)r[5].setComponents(h+l,c+p,f+g,C+y).normalize();else if(n===va)r[5].setComponents(l,p,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){$i.center.set(0,0,0);const n=Em.distanceTo(t.center);return $i.radius=.7071067811865476+n,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ks.x=r.normal.x>0?t.max.x:t.min.x,Ks.y=r.normal.y>0?t.max.y:t.min.y,Ks.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gh extends Si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ya=new P,Ma=new P,pu=new ht,Fo=new Wa,Js=new vr,Bl=new P,mu=new P;class Am extends zt{constructor(t=new Gt,n=new gh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)ya.fromBufferAttribute(n,r-1),Ma.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ya.distanceTo(Ma);t.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(r),Js.radius+=o,t.ray.intersectsSphere(Js)===!1)return;pu.copy(r).invert(),Fo.copy(t.ray).applyMatrix4(pu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,d=i.index,p=i.attributes.position;if(d!==null){const c=Math.max(0,s.start),m=Math.min(d.count,s.start+s.count);for(let v=c,g=m-1;v<g;v+=h){const f=d.getX(v),_=d.getX(v+1),w=Qs(this,t,Fo,l,f,_,v);w&&n.push(w)}if(this.isLineLoop){const v=d.getX(m-1),g=d.getX(c),f=Qs(this,t,Fo,l,v,g,m-1);f&&n.push(f)}}else{const c=Math.max(0,s.start),m=Math.min(p.count,s.start+s.count);for(let v=c,g=m-1;v<g;v+=h){const f=Qs(this,t,Fo,l,v,v+1,v);f&&n.push(f)}if(this.isLineLoop){const v=Qs(this,t,Fo,l,m-1,c,m-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Qs(e,t,n,i,r,o,s){const a=e.geometry.attributes.position;if(ya.fromBufferAttribute(a,r),Ma.fromBufferAttribute(a,o),n.distanceSqToSegment(ya,Ma,Bl,mu)>i)return;Bl.applyMatrix4(e.matrixWorld);const h=t.ray.origin.distanceTo(Bl);if(!(h<t.near||h>t.far))return{distance:h,point:mu.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}const gu=new P,vu=new P;class Gd extends Am{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)gu.fromBufferAttribute(n,r),vu.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+gu.distanceTo(vu);t.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hd extends Si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _u=new ht,Gc=new Wa,ea=new vr,ta=new P;class Cm extends zt{constructor(t=new Gt,n=new Hd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,o=t.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(r),ea.radius+=o,t.ray.intersectsSphere(ea)===!1)return;_u.copy(r).invert(),Gc.copy(t.ray).applyMatrix4(_u);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,s.start),c=Math.min(h.count,s.start+s.count);for(let m=p,v=c;m<v;m++){const g=h.getX(m);ta.fromBufferAttribute(u,g),Su(ta,g,l,r,t,n,this)}}else{const p=Math.max(0,s.start),c=Math.min(u.count,s.start+s.count);for(let m=p,v=c;m<v;m++)ta.fromBufferAttribute(u,m),Su(ta,m,l,r,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Su(e,t,n,i,r,o,s){const a=Gc.distanceSqToPoint(e);if(a<n){const l=new P;Gc.closestPointToPoint(e,l),l.applyMatrix4(i);const h=r.ray.origin.distanceTo(l);if(h<r.near||h>r.far)return;o.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}class vo extends en{constructor(t,n,i,r,o,s,a,l,h){super(t,n,i,r,o,s,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wd extends en{constructor(t,n,i=hr,r,o,s,a=Tn,l=Tn,h,d=is,u=1){if(d!==is&&d!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:n,depth:u};super(p,r,o,s,a,l,d,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Bn extends Gt{constructor(t=1,n=1,i=4,r=8,o=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:n,capSegments:i,radialSegments:r,heightSegments:o},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),o=Math.max(1,Math.floor(o));const s=[],a=[],l=[],h=[],d=n/2,u=Math.PI/2*t,p=n,c=2*u+p,m=i*2+o,v=r+1,g=new P,f=new P;for(let _=0;_<=m;_++){let w=0,y=0,C=0,A=0;if(_<=i){const M=_/i,T=M*Math.PI/2;y=-d-t*Math.cos(T),C=t*Math.sin(T),A=-t*Math.cos(T),w=M*u}else if(_<=i+o){const M=(_-i)/o;y=-d+M*n,C=t,A=0,w=u+M*p}else{const M=(_-i-o)/i,T=M*Math.PI/2;y=d+t*Math.sin(T),C=t*Math.cos(T),A=t*Math.sin(T),w=u+p+M*u}const R=Math.max(0,Math.min(1,w/c));let L=0;_===0?L=.5/r:_===m&&(L=-.5/r);for(let M=0;M<=r;M++){const T=M/r,I=T*Math.PI*2,H=Math.sin(I),z=Math.cos(I);f.x=-C*z,f.y=y,f.z=C*H,a.push(f.x,f.y,f.z),g.set(-C*z,A,C*H),g.normalize(),l.push(g.x,g.y,g.z),h.push(T+L,R)}if(_>0){const M=(_-1)*v;for(let T=0;T<r;T++){const I=M+T,H=M+T+1,z=_*v+T,X=_*v+T+1;s.push(I,H,z),s.push(H,X,z)}}}this.setIndex(s),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Wn extends Gt{constructor(t=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const o=[],s=[],a=[],l=[],h=new P,d=new Ge;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=n;u++,p+=3){const c=i+u/n*r;h.x=t*Math.cos(c),h.y=t*Math.sin(c),s.push(h.x,h.y,h.z),a.push(0,0,1),d.x=(s[p]/t+1)/2,d.y=(s[p+1]/t+1)/2,l.push(d.x,d.y)}for(let u=1;u<=n;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class st extends Gt{constructor(t=1,n=1,i=1,r=32,o=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:l};const h=this;r=Math.floor(r),o=Math.floor(o);const d=[],u=[],p=[],c=[];let m=0;const v=[],g=i/2;let f=0;_(),s===!1&&(t>0&&w(!0),n>0&&w(!1)),this.setIndex(d),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(p,3)),this.setAttribute("uv",new tt(c,2));function _(){const y=new P,C=new P;let A=0;const R=(n-t)/i;for(let L=0;L<=o;L++){const M=[],T=L/o,I=T*(n-t)+t;for(let H=0;H<=r;H++){const z=H/r,X=z*l+a,$=Math.sin(X),Y=Math.cos(X);C.x=I*$,C.y=-T*i+g,C.z=I*Y,u.push(C.x,C.y,C.z),y.set($,R,Y).normalize(),p.push(y.x,y.y,y.z),c.push(z,1-T),M.push(m++)}v.push(M)}for(let L=0;L<r;L++)for(let M=0;M<o;M++){const T=v[M][L],I=v[M+1][L],H=v[M+1][L+1],z=v[M][L+1];(t>0||M!==0)&&(d.push(T,I,z),A+=3),(n>0||M!==o-1)&&(d.push(I,H,z),A+=3)}h.addGroup(f,A,0),f+=A}function w(y){const C=m,A=new Ge,R=new P;let L=0;const M=y===!0?t:n,T=y===!0?1:-1;for(let H=1;H<=r;H++)u.push(0,g*T,0),p.push(0,T,0),c.push(.5,.5),m++;const I=m;for(let H=0;H<=r;H++){const X=H/r*l+a,$=Math.cos(X),Y=Math.sin(X);R.x=M*Y,R.y=g*T,R.z=M*$,u.push(R.x,R.y,R.z),p.push(0,T,0),A.x=$*.5+.5,A.y=Y*.5*T+.5,c.push(A.x,A.y),m++}for(let H=0;H<r;H++){const z=C+H,X=I+H;y===!0?d.push(X,X+1,z):d.push(X+1,X,z),L+=3}h.addGroup(f,L,y===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new st(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class an extends st{constructor(t=1,n=1,i=32,r=1,o=!1,s=0,a=Math.PI*2){super(0,t,n,i,r,o,s,a),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:a}}static fromJSON(t){return new an(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ys extends Gt{constructor(t=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:r};const o=[],s=[];a(r),h(i),d(),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(o.slice(),3)),this.setAttribute("uv",new tt(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const w=new P,y=new P,C=new P;for(let A=0;A<n.length;A+=3)c(n[A+0],w),c(n[A+1],y),c(n[A+2],C),l(w,y,C,_)}function l(_,w,y,C){const A=C+1,R=[];for(let L=0;L<=A;L++){R[L]=[];const M=_.clone().lerp(y,L/A),T=w.clone().lerp(y,L/A),I=A-L;for(let H=0;H<=I;H++)H===0&&L===A?R[L][H]=M:R[L][H]=M.clone().lerp(T,H/I)}for(let L=0;L<A;L++)for(let M=0;M<2*(A-L)-1;M++){const T=Math.floor(M/2);M%2===0?(p(R[L][T+1]),p(R[L+1][T]),p(R[L][T])):(p(R[L][T+1]),p(R[L+1][T+1]),p(R[L+1][T]))}}function h(_){const w=new P;for(let y=0;y<o.length;y+=3)w.x=o[y+0],w.y=o[y+1],w.z=o[y+2],w.normalize().multiplyScalar(_),o[y+0]=w.x,o[y+1]=w.y,o[y+2]=w.z}function d(){const _=new P;for(let w=0;w<o.length;w+=3){_.x=o[w+0],_.y=o[w+1],_.z=o[w+2];const y=g(_)/2/Math.PI+.5,C=f(_)/Math.PI+.5;s.push(y,1-C)}m(),u()}function u(){for(let _=0;_<s.length;_+=6){const w=s[_+0],y=s[_+2],C=s[_+4],A=Math.max(w,y,C),R=Math.min(w,y,C);A>.9&&R<.1&&(w<.2&&(s[_+0]+=1),y<.2&&(s[_+2]+=1),C<.2&&(s[_+4]+=1))}}function p(_){o.push(_.x,_.y,_.z)}function c(_,w){const y=_*3;w.x=t[y+0],w.y=t[y+1],w.z=t[y+2]}function m(){const _=new P,w=new P,y=new P,C=new P,A=new Ge,R=new Ge,L=new Ge;for(let M=0,T=0;M<o.length;M+=9,T+=6){_.set(o[M+0],o[M+1],o[M+2]),w.set(o[M+3],o[M+4],o[M+5]),y.set(o[M+6],o[M+7],o[M+8]),A.set(s[T+0],s[T+1]),R.set(s[T+2],s[T+3]),L.set(s[T+4],s[T+5]),C.copy(_).add(w).add(y).divideScalar(3);const I=g(C);v(A,T+0,_,I),v(R,T+2,w,I),v(L,T+4,y,I)}}function v(_,w,y,C){C<0&&_.x===1&&(s[w]=_.x-1),y.x===0&&y.z===0&&(s[w]=C/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.vertices,t.indices,t.radius,t.details)}}class Va extends ys{constructor(t=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,s,t,n),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Va(t.radius,t.detail)}}class Xa extends ys{constructor(t=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,o,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Xa(t.radius,t.detail)}}class wn extends ys{constructor(t=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new wn(t.radius,t.detail)}}class _o extends Gt{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const o=t/2,s=n/2,a=Math.floor(i),l=Math.floor(r),h=a+1,d=l+1,u=t/a,p=n/l,c=[],m=[],v=[],g=[];for(let f=0;f<d;f++){const _=f*p-s;for(let w=0;w<h;w++){const y=w*u-o;m.push(y,-_,0),v.push(0,0,1),g.push(w/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const w=_+h*f,y=_+h*(f+1),C=_+1+h*(f+1),A=_+1+h*f;c.push(w,y,A),c.push(y,C,A)}this.setIndex(c),this.setAttribute("position",new tt(m,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.width,t.height,t.widthSegments,t.heightSegments)}}class kn extends Gt{constructor(t=.5,n=1,i=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:o,thetaLength:s},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],h=[],d=[];let u=t;const p=(n-t)/r,c=new P,m=new Ge;for(let v=0;v<=r;v++){for(let g=0;g<=i;g++){const f=o+g/i*s;c.x=u*Math.cos(f),c.y=u*Math.sin(f),l.push(c.x,c.y,c.z),h.push(0,0,1),m.x=(c.x/n+1)/2,m.y=(c.y/n+1)/2,d.push(m.x,m.y)}u+=p}for(let v=0;v<r;v++){const g=v*(i+1);for(let f=0;f<i;f++){const _=f+g,w=_,y=_+i+1,C=_+i+2,A=_+1;a.push(w,y,A),a.push(y,C,A)}}this.setIndex(a),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class dt extends Gt{constructor(t=1,n=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let h=0;const d=[],u=new P,p=new P,c=[],m=[],v=[],g=[];for(let f=0;f<=i;f++){const _=[],w=f/i;let y=0;f===0&&s===0?y=.5/n:f===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const A=C/n;u.x=-t*Math.cos(r+A*o)*Math.sin(s+w*a),u.y=t*Math.cos(s+w*a),u.z=t*Math.sin(r+A*o)*Math.sin(s+w*a),m.push(u.x,u.y,u.z),p.copy(u).normalize(),v.push(p.x,p.y,p.z),g.push(A+y,1-w),_.push(h++)}d.push(_)}for(let f=0;f<i;f++)for(let _=0;_<n;_++){const w=d[f][_+1],y=d[f][_],C=d[f+1][_],A=d[f+1][_+1];(f!==0||s>0)&&c.push(w,y,A),(f!==i-1||l<Math.PI)&&c.push(y,C,A)}this.setIndex(c),this.setAttribute("position",new tt(m,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class It extends Gt{constructor(t=1,n=.4,i=12,r=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:r,arc:o},i=Math.floor(i),r=Math.floor(r);const s=[],a=[],l=[],h=[],d=new P,u=new P,p=new P;for(let c=0;c<=i;c++)for(let m=0;m<=r;m++){const v=m/r*o,g=c/i*Math.PI*2;u.x=(t+n*Math.cos(g))*Math.cos(v),u.y=(t+n*Math.cos(g))*Math.sin(v),u.z=n*Math.sin(g),a.push(u.x,u.y,u.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),p.subVectors(u,d).normalize(),l.push(p.x,p.y,p.z),h.push(m/r),h.push(c/i)}for(let c=1;c<=i;c++)for(let m=1;m<=r;m++){const v=(r+1)*c+m-1,g=(r+1)*(c-1)+m-1,f=(r+1)*(c-1)+m,_=(r+1)*c+m;s.push(v,g,_),s.push(g,f,_)}this.setIndex(s),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new It(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class de extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ch,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _r extends Si{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ch,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pm extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xm extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class vh extends zt{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Vd extends vh{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const Ol=new ht,yu=new P,Mu=new P;class Xd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mh,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;yu.setFromMatrixPosition(t.matrixWorld),n.position.copy(yu),Mu.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Mu),n.updateMatrixWorld(),Ol.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Tu=new ht,Bo=new P,zl=new P;class Rm extends Xd{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,n=0){const i=this.camera,r=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Bo.setFromMatrixPosition(t.matrixWorld),i.position.copy(Bo),zl.copy(i.position),zl.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(zl),i.updateMatrixWorld(),r.makeTranslation(-Bo.x,-Bo.y,-Bo.z),Tu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu,i.coordinateSystem,i.reversedDepth)}}class _h extends vh{constructor(t,n,i=0,r=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Rm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Sh extends Fd{constructor(t=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-t,s=i+t,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,s=o+h*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Im extends Xd{constructor(){super(new Sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qd extends vh{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Im}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Dm extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Lm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}const bu=new ht;class km{constructor(t,n,i=0,r=1/0){this.ray=new Wa(t,n),this.near=i,this.far=r,this.camera=null,this.layers=new fh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return bu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bu),this}intersectObject(t,n=!0,i=[]){return Hc(t,this,i,n),i.sort(wu),i}intersectObjects(t,n=!0,i=[]){for(let r=0,o=t.length;r<o;r++)Hc(t[r],this,i,n);return i.sort(wu),i}}function wu(e,t){return e.distance-t.distance}function Hc(e,t,n,i){let r=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(r=!1),r===!0&&i===!0){const o=e.children;for(let s=0,a=o.length;s<a;s++)Hc(o[s],t,n,!0)}}class yh extends Gd{constructor(t=10,n=10,i=4473924,r=8947848){i=new ze(i),r=new ze(r);const o=n/2,s=t/n,a=t/2,l=[],h=[];for(let p=0,c=0,m=-a;p<=n;p++,m+=s){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const v=p===o?i:r;v.toArray(h,c),c+=3,v.toArray(h,c),c+=3,v.toArray(h,c),c+=3,v.toArray(h,c),c+=3}const d=new Gt;d.setAttribute("position",new tt(l,3)),d.setAttribute("color",new tt(h,3));const u=new gh({vertexColors:!0,toneMapped:!1});super(d,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Eu(e,t,n,i){const r=Um(i);switch(n){case Ad:return e*t;case oh:return e*t/r.components*r.byteLength;case sh:return e*t/r.components*r.byteLength;case Pd:return e*t*2/r.components*r.byteLength;case ah:return e*t*2/r.components*r.byteLength;case Cd:return e*t*3/r.components*r.byteLength;case Hn:return e*t*4/r.components*r.byteLength;case lh:return e*t*4/r.components*r.byteLength;case ca:case ha:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ua:case da:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case mc:case vc:return Math.max(e,16)*Math.max(t,8)/4;case pc:case gc:return Math.max(e,8)*Math.max(t,8)/2;case _c:case Sc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case yc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Tc:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case bc:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case wc:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case xc:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Dc:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Lc:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case kc:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case fa:case Uc:case Nc:return Math.ceil(e/4)*Math.ceil(t/4)*16;case xd:case Fc:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Bc:case Oc:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Um(e){switch(e){case ii:case bd:return{byteLength:1,components:1};case ts:case wd:case Ss:return{byteLength:2,components:1};case ih:case rh:return{byteLength:2,components:4};case hr:case nh:case ei:return{byteLength:4,components:1};case Ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);function Yd(){let e=null,t=!1,n=null,i=null;function r(o,s){n(o,s),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){n=o},setContext:function(o){e=o}}}function Nm(e){const t=new WeakMap;function n(a,l){const h=a.array,d=a.usage,u=h.byteLength,p=e.createBuffer();e.bindBuffer(l,p),e.bufferData(l,h,d),a.onUploadCallback();let c;if(h instanceof Float32Array)c=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)c=e.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?c=e.HALF_FLOAT:c=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)c=e.SHORT;else if(h instanceof Uint32Array)c=e.UNSIGNED_INT;else if(h instanceof Int32Array)c=e.INT;else if(h instanceof Int8Array)c=e.BYTE;else if(h instanceof Uint8Array)c=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)c=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:c,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,h){const d=l.array,u=l.updateRanges;if(e.bindBuffer(h,a),u.length===0)e.bufferSubData(h,0,d);else{u.sort((c,m)=>c.start-m.start);let p=0;for(let c=1;c<u.length;c++){const m=u[p],v=u[c];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++p,u[p]=v)}u.length=p+1;for(let c=0,m=u.length;c<m;c++){const v=u[c];e.bufferSubData(h,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(e.deleteBuffer(l.buffer),t.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,n(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:r,remove:o,update:s}}var Fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bm=`#ifdef USE_ALPHAHASH
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
#endif`,Om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wm=`#ifdef USE_AOMAP
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
#endif`,Vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xm=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zm=`#ifdef USE_IRIDESCENCE
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
#endif`,Km=`#ifdef USE_BUMPMAP
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
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,s0=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,a0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l0=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",p0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w0=`#ifdef USE_GRADIENTMAP
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
}`,E0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P0=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,x0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,R0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,U0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,N0=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,B0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q0=`#if defined( USE_POINTS_UV )
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
#endif`,Y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`#ifdef USE_MORPHTARGETS
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
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,og=`#ifdef USE_NORMALMAP
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
#endif`,sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ug=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_g=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Mg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bg=`#ifdef USE_SKINNING
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
#endif`,wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,Ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rg=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ig=`#ifdef USE_TRANSMISSION
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fg=`uniform sampler2D t2D;
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
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Og=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`#include <common>
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
}`,Wg=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,Vg=`#define DISTANCE
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
}`,Xg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`uniform float scale;
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
}`,jg=`uniform vec3 diffuse;
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
}`,Zg=`#include <common>
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
}`,Kg=`uniform vec3 diffuse;
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
}`,Jg=`#define LAMBERT
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
}`,Qg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,e1=`#define MATCAP
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
}`,t1=`#define MATCAP
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
}`,n1=`#define NORMAL
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
}`,i1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r1=`#define PHONG
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
}`,o1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,s1=`#define STANDARD
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
}`,a1=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,l1=`#define TOON
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
}`,c1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,h1=`uniform float size;
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
}`,u1=`uniform vec3 diffuse;
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
}`,d1=`#include <common>
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
}`,f1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,p1=`uniform float rotation;
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
}`,m1=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Fm,alphahash_pars_fragment:Bm,alphamap_fragment:Om,alphamap_pars_fragment:zm,alphatest_fragment:Gm,alphatest_pars_fragment:Hm,aomap_fragment:Wm,aomap_pars_fragment:Vm,batching_pars_vertex:Xm,batching_vertex:qm,begin_vertex:Ym,beginnormal_vertex:$m,bsdfs:jm,iridescence_fragment:Zm,bumpmap_pars_fragment:Km,clipping_planes_fragment:Jm,clipping_planes_pars_fragment:Qm,clipping_planes_pars_vertex:e0,clipping_planes_vertex:t0,color_fragment:n0,color_pars_fragment:i0,color_pars_vertex:r0,color_vertex:o0,common:s0,cube_uv_reflection_fragment:a0,defaultnormal_vertex:l0,displacementmap_pars_vertex:c0,displacementmap_vertex:h0,emissivemap_fragment:u0,emissivemap_pars_fragment:d0,colorspace_fragment:f0,colorspace_pars_fragment:p0,envmap_fragment:m0,envmap_common_pars_fragment:g0,envmap_pars_fragment:v0,envmap_pars_vertex:_0,envmap_physical_pars_fragment:x0,envmap_vertex:S0,fog_vertex:y0,fog_pars_vertex:M0,fog_fragment:T0,fog_pars_fragment:b0,gradientmap_pars_fragment:w0,lightmap_pars_fragment:E0,lights_lambert_fragment:A0,lights_lambert_pars_fragment:C0,lights_pars_begin:P0,lights_toon_fragment:R0,lights_toon_pars_fragment:I0,lights_phong_fragment:D0,lights_phong_pars_fragment:L0,lights_physical_fragment:k0,lights_physical_pars_fragment:U0,lights_fragment_begin:N0,lights_fragment_maps:F0,lights_fragment_end:B0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:z0,logdepthbuf_pars_vertex:G0,logdepthbuf_vertex:H0,map_fragment:W0,map_pars_fragment:V0,map_particle_fragment:X0,map_particle_pars_fragment:q0,metalnessmap_fragment:Y0,metalnessmap_pars_fragment:$0,morphinstance_vertex:j0,morphcolor_vertex:Z0,morphnormal_vertex:K0,morphtarget_pars_vertex:J0,morphtarget_vertex:Q0,normal_fragment_begin:eg,normal_fragment_maps:tg,normal_pars_fragment:ng,normal_pars_vertex:ig,normal_vertex:rg,normalmap_pars_fragment:og,clearcoat_normal_fragment_begin:sg,clearcoat_normal_fragment_maps:ag,clearcoat_pars_fragment:lg,iridescence_pars_fragment:cg,opaque_fragment:hg,packing:ug,premultiplied_alpha_fragment:dg,project_vertex:fg,dithering_fragment:pg,dithering_pars_fragment:mg,roughnessmap_fragment:gg,roughnessmap_pars_fragment:vg,shadowmap_pars_fragment:_g,shadowmap_pars_vertex:Sg,shadowmap_vertex:yg,shadowmask_pars_fragment:Mg,skinbase_vertex:Tg,skinning_pars_vertex:bg,skinning_vertex:wg,skinnormal_vertex:Eg,specularmap_fragment:Ag,specularmap_pars_fragment:Cg,tonemapping_fragment:Pg,tonemapping_pars_fragment:xg,transmission_fragment:Rg,transmission_pars_fragment:Ig,uv_pars_fragment:Dg,uv_pars_vertex:Lg,uv_vertex:kg,worldpos_vertex:Ug,background_vert:Ng,background_frag:Fg,backgroundCube_vert:Bg,backgroundCube_frag:Og,cube_vert:zg,cube_frag:Gg,depth_vert:Hg,depth_frag:Wg,distanceRGBA_vert:Vg,distanceRGBA_frag:Xg,equirect_vert:qg,equirect_frag:Yg,linedashed_vert:$g,linedashed_frag:jg,meshbasic_vert:Zg,meshbasic_frag:Kg,meshlambert_vert:Jg,meshlambert_frag:Qg,meshmatcap_vert:e1,meshmatcap_frag:t1,meshnormal_vert:n1,meshnormal_frag:i1,meshphong_vert:r1,meshphong_frag:o1,meshphysical_vert:s1,meshphysical_frag:a1,meshtoon_vert:l1,meshtoon_frag:c1,points_vert:h1,points_frag:u1,shadow_vert:d1,shadow_frag:f1,sprite_vert:p1,sprite_frag:m1},me={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Qn={basic:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ze(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:on([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:on([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ze(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:on([me.points,me.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:on([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:on([me.common,me.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:on([me.sprite,me.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:on([me.common,me.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:on([me.lights,me.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Qn.physical={uniforms:on([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const na={r:0,b:0,g:0},ji=new jn,g1=new ht;function v1(e,t,n,i,r,o,s){const a=new ze(0);let l=o===!0?0:1,h,d,u=null,p=0,c=null;function m(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?n:t).get(y)),y}function v(w){let y=!1;const C=m(w);C===null?f(a,l):C&&C.isColor&&(f(C,1),y=!0);const A=e.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(w,y){const C=m(y);C&&(C.isCubeTexture||C.mapping===Ha)?(d===void 0&&(d=new O(new Pe(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:co(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),ji.copy(y.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(g1.makeRotationFromEuler(ji)),d.material.toneMapped=ot.getTransfer(C.colorSpace)!==ft,(u!==C||p!==C.version||c!==e.toneMapping)&&(d.material.needsUpdate=!0,u=C,p=C.version,c=e.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new O(new _o(2,2),new zi({name:"BackgroundMaterial",uniforms:co(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=ot.getTransfer(C.colorSpace)!==ft,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||p!==C.version||c!==e.toneMapping)&&(h.material.needsUpdate=!0,u=C,p=C.version,c=e.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function f(w,y){w.getRGB(na,Nd(e)),i.buffers.color.setClear(na.r,na.g,na.b,y,s)}function _(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,y=1){a.set(w),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(a,l)},render:v,addToRenderList:g,dispose:_}}function _1(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=p(null);let o=r,s=!1;function a(T,I,H,z,X){let $=!1;const Y=u(z,H,I);o!==Y&&(o=Y,h(o.object)),$=c(T,z,H,X),$&&m(T,z,H,X),X!==null&&t.update(X,e.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,y(T,I,H,z),X!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return e.createVertexArray()}function h(T){return e.bindVertexArray(T)}function d(T){return e.deleteVertexArray(T)}function u(T,I,H){const z=H.wireframe===!0;let X=i[T.id];X===void 0&&(X={},i[T.id]=X);let $=X[I.id];$===void 0&&($={},X[I.id]=$);let Y=$[z];return Y===void 0&&(Y=p(l()),$[z]=Y),Y}function p(T){const I=[],H=[],z=[];for(let X=0;X<n;X++)I[X]=0,H[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:z,object:T,attributes:{},index:null}}function c(T,I,H,z){const X=o.attributes,$=I.attributes;let Y=0;const ee=H.getAttributes();for(const q in ee)if(ee[q].location>=0){const ge=X[q];let Se=$[q];if(Se===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(Se=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(Se=T.instanceColor)),ge===void 0||ge.attribute!==Se||Se&&ge.data!==Se.data)return!0;Y++}return o.attributesNum!==Y||o.index!==z}function m(T,I,H,z){const X={},$=I.attributes;let Y=0;const ee=H.getAttributes();for(const q in ee)if(ee[q].location>=0){let ge=$[q];ge===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(ge=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(ge=T.instanceColor));const Se={};Se.attribute=ge,ge&&ge.data&&(Se.data=ge.data),X[q]=Se,Y++}o.attributes=X,o.attributesNum=Y,o.index=z}function v(){const T=o.newAttributes;for(let I=0,H=T.length;I<H;I++)T[I]=0}function g(T){f(T,0)}function f(T,I){const H=o.newAttributes,z=o.enabledAttributes,X=o.attributeDivisors;H[T]=1,z[T]===0&&(e.enableVertexAttribArray(T),z[T]=1),X[T]!==I&&(e.vertexAttribDivisor(T,I),X[T]=I)}function _(){const T=o.newAttributes,I=o.enabledAttributes;for(let H=0,z=I.length;H<z;H++)I[H]!==T[H]&&(e.disableVertexAttribArray(H),I[H]=0)}function w(T,I,H,z,X,$,Y){Y===!0?e.vertexAttribIPointer(T,I,H,X,$):e.vertexAttribPointer(T,I,H,z,X,$)}function y(T,I,H,z){v();const X=z.attributes,$=H.getAttributes(),Y=I.defaultAttributeValues;for(const ee in $){const q=$[ee];if(q.location>=0){let he=X[ee];if(he===void 0&&(ee==="instanceMatrix"&&T.instanceMatrix&&(he=T.instanceMatrix),ee==="instanceColor"&&T.instanceColor&&(he=T.instanceColor)),he!==void 0){const ge=he.normalized,Se=he.itemSize,Re=t.get(he);if(Re===void 0)continue;const Ze=Re.buffer,lt=Re.type,K=Re.bytesPerElement,fe=lt===e.INT||lt===e.UNSIGNED_INT||he.gpuType===nh;if(he.isInterleavedBufferAttribute){const le=he.data,Ne=le.stride,Fe=he.offset;if(le.isInstancedInterleavedBuffer){for(let Oe=0;Oe<q.locationSize;Oe++)f(q.location+Oe,le.meshPerAttribute);T.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Oe=0;Oe<q.locationSize;Oe++)g(q.location+Oe);e.bindBuffer(e.ARRAY_BUFFER,Ze);for(let Oe=0;Oe<q.locationSize;Oe++)w(q.location+Oe,Se/q.locationSize,lt,ge,Ne*K,(Fe+Se/q.locationSize*Oe)*K,fe)}else{if(he.isInstancedBufferAttribute){for(let le=0;le<q.locationSize;le++)f(q.location+le,he.meshPerAttribute);T.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let le=0;le<q.locationSize;le++)g(q.location+le);e.bindBuffer(e.ARRAY_BUFFER,Ze);for(let le=0;le<q.locationSize;le++)w(q.location+le,Se/q.locationSize,lt,ge,Se*K,Se/q.locationSize*le*K,fe)}}else if(Y!==void 0){const ge=Y[ee];if(ge!==void 0)switch(ge.length){case 2:e.vertexAttrib2fv(q.location,ge);break;case 3:e.vertexAttrib3fv(q.location,ge);break;case 4:e.vertexAttrib4fv(q.location,ge);break;default:e.vertexAttrib1fv(q.location,ge)}}}}_()}function C(){L();for(const T in i){const I=i[T];for(const H in I){const z=I[H];for(const X in z)d(z[X].object),delete z[X];delete I[H]}delete i[T]}}function A(T){if(i[T.id]===void 0)return;const I=i[T.id];for(const H in I){const z=I[H];for(const X in z)d(z[X].object),delete z[X];delete I[H]}delete i[T.id]}function R(T){for(const I in i){const H=i[I];if(H[T.id]===void 0)continue;const z=H[T.id];for(const X in z)d(z[X].object),delete z[X];delete H[T.id]}}function L(){M(),s=!0,o!==r&&(o=r,h(o.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function S1(e,t,n){let i;function r(h){i=h}function o(h,d){e.drawArrays(i,h,d),n.update(d,i,1)}function s(h,d,u){u!==0&&(e.drawArraysInstanced(i,h,d,u),n.update(d,i,u))}function a(h,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,d,0,u);let c=0;for(let m=0;m<u;m++)c+=d[m];n.update(c,i,1)}function l(h,d,u,p){if(u===0)return;const c=t.get("WEBGL_multi_draw");if(c===null)for(let m=0;m<h.length;m++)s(h[m],d[m],p[m]);else{c.multiDrawArraysInstancedWEBGL(i,h,0,d,0,p,0,u);let m=0;for(let v=0;v<u;v++)m+=d[v]*p[v];n.update(m,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function y1(e,t,n,i){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(R){return!(R!==Hn&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===Ss&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ii&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ei&&!L)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const d=l(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const u=n.logarithmicDepthBuffer===!0,p=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),c=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),w=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,A=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:c,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:C,maxSamples:A}}function M1(e){const t=this;let n=null,i=0,r=!1,o=!1;const s=new xi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const c=u.length!==0||p||i!==0||r;return r=p,i=u.length,c},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,p){n=d(u,p,0)},this.setState=function(u,p,c){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,f=e.get(u);if(!r||m===null||m.length===0||o&&!g)o?d(null):h();else{const _=o?0:i,w=_*4;let y=f.clippingState||null;l.value=y,y=d(m,p,w,c);for(let C=0;C!==w;++C)y[C]=n[C];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function h(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(u,p,c,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const f=c+v*4,_=p.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<f)&&(g=new Float32Array(f));for(let w=0,y=c;w!==v;++w,y+=4)s.copy(u[w]).applyMatrix4(_,a),s.normal.toArray(g,y),g[y+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function T1(e){let t=new WeakMap;function n(s,a){return a===uc?s.mapping=so:a===dc&&(s.mapping=ao),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===uc||a===dc)if(t.has(s)){const l=t.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const h=new _m(l.height);return h.fromEquirectangularTexture(e,s),t.set(s,h),s.addEventListener("dispose",r),n(h.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}const Yr=4,Au=[.125,.215,.35,.446,.526,.582],tr=20,Gl=new Sh,Cu=new ze;let Hl=null,Wl=0,Vl=0,Xl=!1;const Ji=(1+Math.sqrt(5))/2,Xr=1/Ji,Pu=[new P(-Ji,Xr,0),new P(Ji,Xr,0),new P(-Xr,0,Ji),new P(Xr,0,Ji),new P(0,Ji,-Xr),new P(0,Ji,Xr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],b1=new P;class xu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100,o={}){const{size:s=256,position:a=b1}=o;Hl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Hl,Wl,Vl),this._renderer.xr.enabled=Xl,t.scissorTest=!1,ia(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===so||t.mapping===ao?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Ss,format:Hn,colorSpace:lo,depthBuffer:!1},r=Ru(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ru(t,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w1(o)),this._blurMaterial=E1(o,t,n)}return r}_compileMaterial(t){const n=new O(this._lodPlanes[0],t);this._renderer.compile(n,Gl)}_sceneToCubeUV(t,n,i,r,o){const l=new Sn(90,1,n,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,c=u.toneMapping;u.getClearColor(Cu),u.toneMapping=ki,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const v=new je({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new O(new Pe,v);let f=!1;const _=t.background;_?_.isColor&&(v.color.copy(_),t.background=null,f=!0):(v.color.copy(Cu),f=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(l.up.set(0,h[w],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+d[w],o.y,o.z)):y===1?(l.up.set(0,0,h[w]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+d[w],o.z)):(l.up.set(0,h[w],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+d[w]));const C=this._cubeSize;ia(r,y*C,w>2?C:0,C,C),u.setRenderTarget(r),f&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=c,u.autoClear=p,t.background=_}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===so||t.mapping===ao;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new O(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;ia(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Gl)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Pu[(r-o-1)%Pu.length];this._blur(t,o-1,o,s,a)}n.autoClear=i}_blur(t,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(t,s,n,i,r,"latitudinal",o),this._halfBlur(s,t,i,i,r,"longitudinal",o)}_halfBlur(t,n,i,r,o,s,a){const l=this._renderer,h=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new O(this._lodPlanes[r],h),p=h.uniforms,c=this._sizeLods[i]-1,m=isFinite(o)?Math.PI/(2*c):2*Math.PI/(2*tr-1),v=o/m,g=isFinite(o)?1+Math.floor(d*v):tr;g>tr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${tr}`);const f=[];let _=0;for(let R=0;R<tr;++R){const L=R/v,M=Math.exp(-L*L/2);f.push(M),R===0?_+=M:R<g&&(_+=2*M)}for(let R=0;R<f.length;R++)f[R]=f[R]/_;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=f,p.latitudinal.value=s==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:w}=this;p.dTheta.value=m,p.mipInt.value=w-i;const y=this._sizeLods[r],C=3*y*(r>w-Yr?r-w+Yr:0),A=4*(this._cubeSize-y);ia(n,C,A,3*y,2*y),l.setRenderTarget(n),l.render(u,Gl)}}function w1(e){const t=[],n=[],i=[];let r=e;const o=e-Yr+1+Au.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>e-Yr?l=Au[s-e+Yr-1]:s===0&&(l=0),i.push(l);const h=1/(a-2),d=-h,u=1+h,p=[d,d,u,d,u,u,d,d,u,u,d,u],c=6,m=6,v=3,g=2,f=1,_=new Float32Array(v*m*c),w=new Float32Array(g*m*c),y=new Float32Array(f*m*c);for(let A=0;A<c;A++){const R=A%3*2/3-1,L=A>2?0:-1,M=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];_.set(M,v*m*A),w.set(p,g*m*A);const T=[A,A,A,A,A,A];y.set(T,f*m*A)}const C=new Gt;C.setAttribute("position",new bn(_,v)),C.setAttribute("uv",new bn(w,g)),C.setAttribute("faceIndex",new bn(y,f)),t.push(C),r>Yr&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Ru(e,t,n){const i=new ur(e,t,n);return i.texture.mapping=Ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ia(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function E1(e,t,n){const i=new Float32Array(tr),r=new P(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Iu(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Du(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Mh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function A1(e){let t=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,h=l===uc||l===dc,d=l===so||l===ao;if(h||d){let u=t.get(a);const p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return n===null&&(n=new xu(e)),u=h?n.fromEquirectangular(a,u):n.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const c=a.image;return h&&c&&c.height>0||d&&c&&r(c)?(n===null&&(n=new xu(e)),u=h?n.fromEquirectangular(a):n.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function r(a){let l=0;const h=6;for(let d=0;d<h;d++)a[d]!==void 0&&l++;return l===h}function o(a){const l=a.target;l.removeEventListener("dispose",o);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function s(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function C1(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Jr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function P1(e,t,n,i){const r={},o=new WeakMap;function s(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",s),delete r[p.id];const c=o.get(p);c&&(t.remove(c),o.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function a(u,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,n.memory.geometries++),p}function l(u){const p=u.attributes;for(const c in p)t.update(p[c],e.ARRAY_BUFFER)}function h(u){const p=[],c=u.index,m=u.attributes.position;let v=0;if(c!==null){const _=c.array;v=c.version;for(let w=0,y=_.length;w<y;w+=3){const C=_[w+0],A=_[w+1],R=_[w+2];p.push(C,A,A,R,R,C)}}else if(m!==void 0){const _=m.array;v=m.version;for(let w=0,y=_.length/3-1;w<y;w+=3){const C=w+0,A=w+1,R=w+2;p.push(C,A,A,R,R,C)}}else return;const g=new(Id(p)?Ud:kd)(p,1);g.version=v;const f=o.get(u);f&&t.remove(f),o.set(u,g)}function d(u){const p=o.get(u);if(p){const c=u.index;c!==null&&p.version<c.version&&h(u)}else h(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function x1(e,t,n){let i;function r(p){i=p}let o,s;function a(p){o=p.type,s=p.bytesPerElement}function l(p,c){e.drawElements(i,c,o,p*s),n.update(c,i,1)}function h(p,c,m){m!==0&&(e.drawElementsInstanced(i,c,o,p*s,m),n.update(c,i,m))}function d(p,c,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,o,p,0,m);let g=0;for(let f=0;f<m;f++)g+=c[f];n.update(g,i,1)}function u(p,c,m,v){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<p.length;f++)h(p[f]/s,c[f],v[f]);else{g.multiDrawElementsInstancedWEBGL(i,c,0,o,p,0,v,0,m);let f=0;for(let _=0;_<m;_++)f+=c[_]*v[_];n.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function R1(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case e.TRIANGLES:n.triangles+=a*(o/3);break;case e.LINES:n.lines+=a*(o/2);break;case e.LINE_STRIP:n.lines+=a*(o-1);break;case e.LINE_LOOP:n.lines+=a*o;break;case e.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function I1(e,t,n){const i=new WeakMap,r=new pt;function o(s,a,l){const h=s.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let p=i.get(a);if(p===void 0||p.count!==u){let T=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var c=T;p!==void 0&&p.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let C=a.attributes.position.count*y,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const R=new Float32Array(C*A*4*u),L=new Dd(R,C,A,u);L.type=ei,L.needsUpdate=!0;const M=y*4;for(let I=0;I<u;I++){const H=f[I],z=_[I],X=w[I],$=C*A*4*I;for(let Y=0;Y<H.count;Y++){const ee=Y*M;m===!0&&(r.fromBufferAttribute(H,Y),R[$+ee+0]=r.x,R[$+ee+1]=r.y,R[$+ee+2]=r.z,R[$+ee+3]=0),v===!0&&(r.fromBufferAttribute(z,Y),R[$+ee+4]=r.x,R[$+ee+5]=r.y,R[$+ee+6]=r.z,R[$+ee+7]=0),g===!0&&(r.fromBufferAttribute(X,Y),R[$+ee+8]=r.x,R[$+ee+9]=r.y,R[$+ee+10]=r.z,R[$+ee+11]=X.itemSize===4?r.w:1)}}p={count:u,texture:L,size:new Ge(C,A)},i.set(a,p),a.addEventListener("dispose",T)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,n);else{let m=0;for(let g=0;g<h.length;g++)m+=h[g];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",p.size)}return{update:o}}function D1(e,t,n,i){let r=new WeakMap;function o(l){const h=i.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==h&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function s(){r=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:s}}const $d=new en,Lu=new Wd(1,1),jd=new Dd,Zd=new tm,Kd=new Bd,ku=[],Uu=[],Nu=new Float32Array(16),Fu=new Float32Array(9),Bu=new Float32Array(4);function So(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let o=ku[r];if(o===void 0&&(o=new Float32Array(r),ku[r]=o),t!==0){i.toArray(o,0);for(let s=1,a=0;s!==t;++s)a+=n,e[s].toArray(o,a)}return o}function Xt(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function qt(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function qa(e,t){let n=Uu[t];n===void 0&&(n=new Int32Array(t),Uu[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function L1(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function k1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xt(n,t))return;e.uniform2fv(this.addr,t),qt(n,t)}}function U1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Xt(n,t))return;e.uniform3fv(this.addr,t),qt(n,t)}}function N1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xt(n,t))return;e.uniform4fv(this.addr,t),qt(n,t)}}function F1(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Xt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),qt(n,t)}else{if(Xt(n,i))return;Bu.set(i),e.uniformMatrix2fv(this.addr,!1,Bu),qt(n,i)}}function B1(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Xt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),qt(n,t)}else{if(Xt(n,i))return;Fu.set(i),e.uniformMatrix3fv(this.addr,!1,Fu),qt(n,i)}}function O1(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Xt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),qt(n,t)}else{if(Xt(n,i))return;Nu.set(i),e.uniformMatrix4fv(this.addr,!1,Nu),qt(n,i)}}function z1(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function G1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xt(n,t))return;e.uniform2iv(this.addr,t),qt(n,t)}}function H1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xt(n,t))return;e.uniform3iv(this.addr,t),qt(n,t)}}function W1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xt(n,t))return;e.uniform4iv(this.addr,t),qt(n,t)}}function V1(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function X1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xt(n,t))return;e.uniform2uiv(this.addr,t),qt(n,t)}}function q1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xt(n,t))return;e.uniform3uiv(this.addr,t),qt(n,t)}}function Y1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xt(n,t))return;e.uniform4uiv(this.addr,t),qt(n,t)}}function $1(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let o;this.type===e.SAMPLER_2D_SHADOW?(Lu.compareFunction=Rd,o=Lu):o=$d,n.setTexture2D(t||o,r)}function j1(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||Zd,r)}function Z1(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||Kd,r)}function K1(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||jd,r)}function J1(e){switch(e){case 5126:return L1;case 35664:return k1;case 35665:return U1;case 35666:return N1;case 35674:return F1;case 35675:return B1;case 35676:return O1;case 5124:case 35670:return z1;case 35667:case 35671:return G1;case 35668:case 35672:return H1;case 35669:case 35673:return W1;case 5125:return V1;case 36294:return X1;case 36295:return q1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return K1}}function Q1(e,t){e.uniform1fv(this.addr,t)}function ev(e,t){const n=So(t,this.size,2);e.uniform2fv(this.addr,n)}function tv(e,t){const n=So(t,this.size,3);e.uniform3fv(this.addr,n)}function nv(e,t){const n=So(t,this.size,4);e.uniform4fv(this.addr,n)}function iv(e,t){const n=So(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function rv(e,t){const n=So(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ov(e,t){const n=So(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function sv(e,t){e.uniform1iv(this.addr,t)}function av(e,t){e.uniform2iv(this.addr,t)}function lv(e,t){e.uniform3iv(this.addr,t)}function cv(e,t){e.uniform4iv(this.addr,t)}function hv(e,t){e.uniform1uiv(this.addr,t)}function uv(e,t){e.uniform2uiv(this.addr,t)}function dv(e,t){e.uniform3uiv(this.addr,t)}function fv(e,t){e.uniform4uiv(this.addr,t)}function pv(e,t,n){const i=this.cache,r=t.length,o=qa(n,r);Xt(i,o)||(e.uniform1iv(this.addr,o),qt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(t[s]||$d,o[s])}function mv(e,t,n){const i=this.cache,r=t.length,o=qa(n,r);Xt(i,o)||(e.uniform1iv(this.addr,o),qt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(t[s]||Zd,o[s])}function gv(e,t,n){const i=this.cache,r=t.length,o=qa(n,r);Xt(i,o)||(e.uniform1iv(this.addr,o),qt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(t[s]||Kd,o[s])}function vv(e,t,n){const i=this.cache,r=t.length,o=qa(n,r);Xt(i,o)||(e.uniform1iv(this.addr,o),qt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(t[s]||jd,o[s])}function _v(e){switch(e){case 5126:return Q1;case 35664:return ev;case 35665:return tv;case 35666:return nv;case 35674:return iv;case 35675:return rv;case 35676:return ov;case 5124:case 35670:return sv;case 35667:case 35671:return av;case 35668:case 35672:return lv;case 35669:case 35673:return cv;case 5125:return hv;case 36294:return uv;case 36295:return dv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return vv}}class Sv{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=J1(n.type)}}class yv{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_v(n.type)}}class Mv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(t,n[a.id],i)}}}const ql=/(\w+)(\])?(\[|\.)?/g;function Ou(e,t){e.seq.push(t),e.map[t.id]=t}function Tv(e,t,n){const i=e.name,r=i.length;for(ql.lastIndex=0;;){const o=ql.exec(i),s=ql.lastIndex;let a=o[1];const l=o[2]==="]",h=o[3];if(l&&(a=a|0),h===void 0||h==="["&&s+2===r){Ou(n,h===void 0?new Sv(a,e,t):new yv(a,e,t));break}else{let u=n.map[a];u===void 0&&(u=new Mv(a),Ou(n,u)),n=u}}}class pa{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(n,r),s=t.getUniformLocation(n,o.name);Tv(o,s,this)}}setValue(t,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,o=t.length;r!==o;++r){const s=t[r];s.id in n&&i.push(s)}return i}}function zu(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const bv=37297;let wv=0;function Ev(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),o=Math.min(t+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===t?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}const Gu=new Ye;function Av(e){ot._getMatrix(Gu,ot.workingColorSpace,e);const t=`mat3( ${Gu.elements.map(n=>n.toFixed(4))} )`;switch(ot.getTransfer(e)){case ga:return[t,"LinearTransferOETF"];case ft:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Hu(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),o=(e.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+o+`

`+Ev(e.getShaderSource(t),a)}else return o}function Cv(e,t){const n=Av(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Pv(e,t){let n;switch(t){case mp:n="Linear";break;case gp:n="Reinhard";break;case vp:n="Cineon";break;case Md:n="ACESFilmic";break;case Sp:n="AgX";break;case yp:n="Neutral";break;case _p:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ra=new P;function xv(){ot.getLuminanceCoefficients(ra);const e=ra.x.toFixed(4),t=ra.y.toFixed(4),n=ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rv(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function Iv(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function Dv(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=e.getActiveAttrib(t,r),s=o.name;let a=1;o.type===e.FLOAT_MAT2&&(a=2),o.type===e.FLOAT_MAT3&&(a=3),o.type===e.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:e.getAttribLocation(t,s),locationSize:a}}return n}function Wo(e){return e!==""}function Wu(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(e){return e.replace(Lv,Uv)}const kv=new Map;function Uv(e,t){let n=$e[t];if(n===void 0){const i=kv.get(t);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Wc(n)}const Nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(e){return e.replace(Nv,Fv)}function Fv(e,t,n,i){let r="";for(let o=parseInt(t);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function qu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Bv(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===eh?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===$f?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function Ov(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case so:case ao:t="ENVMAP_TYPE_CUBE";break;case Ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zv(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===ao&&(t="ENVMAP_MODE_REFRACTION"),t}function Gv(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case th:t="ENVMAP_BLENDING_MULTIPLY";break;case fp:t="ENVMAP_BLENDING_MIX";break;case pp:t="ENVMAP_BLENDING_ADD";break}return t}function Hv(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Wv(e,t,n,i){const r=e.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=Bv(n),h=Ov(n),d=zv(n),u=Gv(n),p=Hv(n),c=Rv(n),m=Iv(o),v=r.createProgram();let g,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Wo).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Wo).join(`
`),f.length>0&&(f+=`
`)):(g=[qu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),f=[qu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",n.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?$e.tonemapping_pars_fragment:"",n.toneMapping!==ki?Pv("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Cv("linearToOutputTexel",n.outputColorSpace),xv(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wo).join(`
`)),s=Wc(s),s=Wu(s,n),s=Vu(s,n),a=Wc(a),a=Wu(a,n),a=Vu(a,n),s=Xu(s),a=Xu(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=_+g+s,y=_+f+a,C=zu(r,r.VERTEX_SHADER,w),A=zu(r,r.FRAGMENT_SHADER,y);r.attachShader(v,C),r.attachShader(v,A),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(I){if(e.debug.checkShaderErrors){const H=r.getProgramInfoLog(v)||"",z=r.getShaderInfoLog(C)||"",X=r.getShaderInfoLog(A)||"",$=H.trim(),Y=z.trim(),ee=X.trim();let q=!0,he=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(q=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,v,C,A);else{const ge=Hu(r,C,"vertex"),Se=Hu(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+$+`
`+ge+`
`+Se)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(Y===""||ee==="")&&(he=!1);he&&(I.diagnostics={runnable:q,programLog:$,vertexShader:{log:Y,prefix:g},fragmentShader:{log:ee,prefix:f}})}r.deleteShader(C),r.deleteShader(A),L=new pa(r,v),M=Dv(r,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(v,bv)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}let Vv=0;class Xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new qv(t),n.set(t,i)),i}}class qv{constructor(t){this.id=Vv++,this.code=t,this.usedTimes=0}}function Yv(e,t,n,i,r,o,s){const a=new fh,l=new Xv,h=new Set,d=[],u=r.logarithmicDepthBuffer,p=r.vertexTextures;let c=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return h.add(M),M===0?"uv":`uv${M}`}function g(M,T,I,H,z){const X=H.fog,$=z.geometry,Y=M.isMeshStandardMaterial?H.environment:null,ee=(M.isMeshStandardMaterial?n:t).get(M.envMap||Y),q=ee&&ee.mapping===Ha?ee.image.height:null,he=m[M.type];M.precision!==null&&(c=r.getMaxPrecision(M.precision),c!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",c,"instead."));const ge=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Se=ge!==void 0?ge.length:0;let Re=0;$.morphAttributes.position!==void 0&&(Re=1),$.morphAttributes.normal!==void 0&&(Re=2),$.morphAttributes.color!==void 0&&(Re=3);let Ze,lt,K,fe;if(he){const nt=Qn[he];Ze=nt.vertexShader,lt=nt.fragmentShader}else Ze=M.vertexShader,lt=M.fragmentShader,l.update(M),K=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);const le=e.getRenderTarget(),Ne=e.state.buffers.depth.getReversed(),Fe=z.isInstancedMesh===!0,Oe=z.isBatchedMesh===!0,Et=!!M.map,Ke=!!M.matcap,k=!!ee,ut=!!M.aoMap,ke=!!M.lightMap,Qe=!!M.bumpMap,Le=!!M.normalMap,_t=!!M.displacementMap,Te=!!M.emissiveMap,qe=!!M.metalnessMap,kt=!!M.roughnessMap,yt=M.anisotropy>0,x=M.clearcoat>0,S=M.dispersion>0,G=M.iridescence>0,Z=M.sheen>0,ne=M.transmission>0,j=yt&&!!M.anisotropyMap,Ie=x&&!!M.clearcoatMap,ce=x&&!!M.clearcoatNormalMap,Ee=x&&!!M.clearcoatRoughnessMap,Ae=G&&!!M.iridescenceMap,ie=G&&!!M.iridescenceThicknessMap,ve=Z&&!!M.sheenColorMap,Ue=Z&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,pe=!!M.specularColorMap,Ve=!!M.specularIntensityMap,U=ne&&!!M.transmissionMap,ae=ne&&!!M.thicknessMap,ue=!!M.gradientMap,ye=!!M.alphaMap,re=M.alphaTest>0,J=!!M.alphaHash,we=!!M.extensions;let We=ki;M.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(We=e.toneMapping);const at={shaderID:he,shaderType:M.type,shaderName:M.name,vertexShader:Ze,fragmentShader:lt,defines:M.defines,customVertexShaderID:K,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:c,batching:Oe,batchingColor:Oe&&z._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&z.instanceColor!==null,instancingMorph:Fe&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:le===null?e.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:lo,alphaToCoverage:!!M.alphaToCoverage,map:Et,matcap:Ke,envMap:k,envMapMode:k&&ee.mapping,envMapCubeUVHeight:q,aoMap:ut,lightMap:ke,bumpMap:Qe,normalMap:Le,displacementMap:p&&_t,emissiveMap:Te,normalMapObjectSpace:Le&&M.normalMapType===wp,normalMapTangentSpace:Le&&M.normalMapType===ch,metalnessMap:qe,roughnessMap:kt,anisotropy:yt,anisotropyMap:j,clearcoat:x,clearcoatMap:Ie,clearcoatNormalMap:ce,clearcoatRoughnessMap:Ee,dispersion:S,iridescence:G,iridescenceMap:Ae,iridescenceThicknessMap:ie,sheen:Z,sheenColorMap:ve,sheenRoughnessMap:Ue,specularMap:Ce,specularColorMap:pe,specularIntensityMap:Ve,transmission:ne,transmissionMap:U,thicknessMap:ae,gradientMap:ue,opaque:M.transparent===!1&&M.blending===Kr&&M.alphaToCoverage===!1,alphaMap:ye,alphaTest:re,alphaHash:J,combine:M.combine,mapUv:Et&&v(M.map.channel),aoMapUv:ut&&v(M.aoMap.channel),lightMapUv:ke&&v(M.lightMap.channel),bumpMapUv:Qe&&v(M.bumpMap.channel),normalMapUv:Le&&v(M.normalMap.channel),displacementMapUv:_t&&v(M.displacementMap.channel),emissiveMapUv:Te&&v(M.emissiveMap.channel),metalnessMapUv:qe&&v(M.metalnessMap.channel),roughnessMapUv:kt&&v(M.roughnessMap.channel),anisotropyMapUv:j&&v(M.anisotropyMap.channel),clearcoatMapUv:Ie&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(M.sheenRoughnessMap.channel),specularMapUv:Ce&&v(M.specularMap.channel),specularColorMapUv:pe&&v(M.specularColorMap.channel),specularIntensityMapUv:Ve&&v(M.specularIntensityMap.channel),transmissionMapUv:U&&v(M.transmissionMap.channel),thicknessMapUv:ae&&v(M.thicknessMap.channel),alphaMapUv:ye&&v(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Le||yt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(Et||ye),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ne,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&I.length>0,shadowMapType:e.shadowMap.type,toneMapping:We,decodeVideoTexture:Et&&M.map.isVideoTexture===!0&&ot.getTransfer(M.map.colorSpace)===ft,decodeVideoTextureEmissive:Te&&M.emissiveMap.isVideoTexture===!0&&ot.getTransfer(M.emissiveMap.colorSpace)===ft,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===bt,flipSided:M.side===fn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:we&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&M.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return at.vertexUv1s=h.has(1),at.vertexUv2s=h.has(2),at.vertexUv3s=h.has(3),h.clear(),at}function f(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)T.push(I),T.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(T,M),w(T,M),T.push(e.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function _(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function w(M,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const T=m[M.type];let I;if(T){const H=Qn[T];I=pm.clone(H.uniforms)}else I=M.uniforms;return I}function C(M,T){let I;for(let H=0,z=d.length;H<z;H++){const X=d[H];if(X.cacheKey===T){I=X,++I.usedTimes;break}}return I===void 0&&(I=new Wv(e,T,M,o),d.push(I)),I}function A(M){if(--M.usedTimes===0){const T=d.indexOf(M);d[T]=d[d.length-1],d.pop(),M.destroy()}}function R(M){l.remove(M)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:d,dispose:L}}function $v(){let e=new WeakMap;function t(s){return e.has(s)}function n(s){let a=e.get(s);return a===void 0&&(a={},e.set(s,a)),a}function i(s){e.delete(s)}function r(s,a,l){e.get(s)[a]=l}function o(){e=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:o}}function jv(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Yu(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function $u(){const e=[];let t=0;const n=[],i=[],r=[];function o(){t=0,n.length=0,i.length=0,r.length=0}function s(u,p,c,m,v,g){let f=e[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:c,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},e[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=c,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=v,f.group=g),t++,f}function a(u,p,c,m,v,g){const f=s(u,p,c,m,v,g);c.transmission>0?i.push(f):c.transparent===!0?r.push(f):n.push(f)}function l(u,p,c,m,v,g){const f=s(u,p,c,m,v,g);c.transmission>0?i.unshift(f):c.transparent===!0?r.unshift(f):n.unshift(f)}function h(u,p){n.length>1&&n.sort(u||jv),i.length>1&&i.sort(p||Yu),r.length>1&&r.sort(p||Yu)}function d(){for(let u=t,p=e.length;u<p;u++){const c=e[u];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:d,sort:h}}function Zv(){let e=new WeakMap;function t(i,r){const o=e.get(i);let s;return o===void 0?(s=new $u,e.set(i,[s])):r>=o.length?(s=new $u,o.push(s)):s=o[r],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function Kv(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new P,color:new ze};break;case"SpotLight":n={position:new P,direction:new P,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=n,n}}}function Jv(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let Qv=0;function e_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function t_(e){const t=new Kv,n=Jv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new P);const r=new P,o=new ht,s=new ht;function a(h){let d=0,u=0,p=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let c=0,m=0,v=0,g=0,f=0,_=0,w=0,y=0,C=0,A=0,R=0;h.sort(e_);for(let M=0,T=h.length;M<T;M++){const I=h[M],H=I.color,z=I.intensity,X=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=H.r*z,u+=H.g*z,p+=H.b*z;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],z);R++}else if(I.isDirectionalLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ee=I.shadow,q=n.get(I);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,i.directionalShadow[c]=q,i.directionalShadowMap[c]=$,i.directionalShadowMatrix[c]=I.shadow.matrix,_++}i.directional[c]=Y,c++}else if(I.isSpotLight){const Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(H).multiplyScalar(z),Y.distance=X,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[v]=Y;const ee=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,ee.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[v]=ee.matrix,I.castShadow){const q=n.get(I);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,i.spotShadow[v]=q,i.spotShadowMap[v]=$,y++}v++}else if(I.isRectAreaLight){const Y=t.get(I);Y.color.copy(H).multiplyScalar(z),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=Y,g++}else if(I.isPointLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const ee=I.shadow,q=n.get(I);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,q.shadowCameraNear=ee.camera.near,q.shadowCameraFar=ee.camera.far,i.pointShadow[m]=q,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=I.shadow.matrix,w++}i.point[m]=Y,m++}else if(I.isHemisphereLight){const Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(z),Y.groundColor.copy(I.groundColor).multiplyScalar(z),i.hemi[f]=Y,f++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=p;const L=i.hash;(L.directionalLength!==c||L.pointLength!==m||L.spotLength!==v||L.rectAreaLength!==g||L.hemiLength!==f||L.numDirectionalShadows!==_||L.numPointShadows!==w||L.numSpotShadows!==y||L.numSpotMaps!==C||L.numLightProbes!==R)&&(i.directional.length=c,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,L.directionalLength=c,L.pointLength=m,L.spotLength=v,L.rectAreaLength=g,L.hemiLength=f,L.numDirectionalShadows=_,L.numPointShadows=w,L.numSpotShadows=y,L.numSpotMaps=C,L.numLightProbes=R,i.version=Qv++)}function l(h,d){let u=0,p=0,c=0,m=0,v=0;const g=d.matrixWorldInverse;for(let f=0,_=h.length;f<_;f++){const w=h[f];if(w.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),u++}else if(w.isSpotLight){const y=i.spot[c];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),c++}else if(w.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),s.identity(),o.copy(w.matrixWorld),o.premultiply(g),s.extractRotation(o),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),m++}else if(w.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),p++}else if(w.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function ju(e){const t=new t_(e),n=[],i=[];function r(d){h.camera=d,n.length=0,i.length=0}function o(d){n.push(d)}function s(d){i.push(d)}function a(){t.setup(n)}function l(d){t.setupView(n,d)}const h={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function n_(e){let t=new WeakMap;function n(r,o=0){const s=t.get(r);let a;return s===void 0?(a=new ju(e),t.set(r,[a])):o>=s.length?(a=new ju(e),s.push(a)):a=s[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}const i_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function o_(e,t,n){let i=new mh;const r=new Ge,o=new Ge,s=new pt,a=new Pm({depthPacking:bp}),l=new xm,h={},d=n.maxTextureSize,u={[Oi]:fn,[fn]:Oi,[bt]:bt},p=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:i_,fragmentShader:r_}),c=p.clone();c.defines.HORIZONTAL_PASS=1;const m=new Gt;m.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new O(m,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eh;let f=this.type;this.render=function(A,R,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const M=e.getRenderTarget(),T=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),H=e.state;H.setBlending(Li),H.buffers.depth.getReversed()?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=f!==fi&&this.type===fi,X=f===fi&&this.type!==fi;for(let $=0,Y=A.length;$<Y;$++){const ee=A[$],q=ee.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const he=q.getFrameExtents();if(r.multiply(he),o.copy(q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/he.x),r.x=o.x*he.x,q.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/he.y),r.y=o.y*he.y,q.mapSize.y=o.y)),q.map===null||z===!0||X===!0){const Se=this.type!==fi?{minFilter:Tn,magFilter:Tn}:{};q.map!==null&&q.map.dispose(),q.map=new ur(r.x,r.y,Se),q.map.texture.name=ee.name+".shadowMap",q.camera.updateProjectionMatrix()}e.setRenderTarget(q.map),e.clear();const ge=q.getViewportCount();for(let Se=0;Se<ge;Se++){const Re=q.getViewport(Se);s.set(o.x*Re.x,o.y*Re.y,o.x*Re.z,o.y*Re.w),H.viewport(s),q.updateMatrices(ee,Se),i=q.getFrustum(),y(R,L,q.camera,ee,this.type)}q.isPointLightShadow!==!0&&this.type===fi&&_(q,L),q.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(M,T,I)};function _(A,R){const L=t.update(v);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,c.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,c.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ur(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(R,null,L,p,v,null),c.uniforms.shadow_pass.value=A.mapPass.texture,c.uniforms.resolution.value=A.mapSize,c.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(R,null,L,c,v,null)}function w(A,R,L,M){let T=null;const I=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)T=I;else if(T=L.isPointLight===!0?l:a,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const H=T.uuid,z=R.uuid;let X=h[H];X===void 0&&(X={},h[H]=X);let $=X[z];$===void 0&&($=T.clone(),X[z]=$,R.addEventListener("dispose",C)),T=$}if(T.visible=R.visible,T.wireframe=R.wireframe,M===fi?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:u[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,L.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const H=e.properties.get(T);H.light=L}return T}function y(A,R,L,M,T){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===fi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const z=t.update(A),X=A.material;if(Array.isArray(X)){const $=z.groups;for(let Y=0,ee=$.length;Y<ee;Y++){const q=$[Y],he=X[q.materialIndex];if(he&&he.visible){const ge=w(A,he,M,T);A.onBeforeShadow(e,A,R,L,z,ge,q),e.renderBufferDirect(L,null,z,ge,A,q),A.onAfterShadow(e,A,R,L,z,ge,q)}}}else if(X.visible){const $=w(A,X,M,T);A.onBeforeShadow(e,A,R,L,z,$,null),e.renderBufferDirect(L,null,z,$,A,null),A.onAfterShadow(e,A,R,L,z,$,null)}}const H=A.children;for(let z=0,X=H.length;z<X;z++)y(H[z],R,L,M,T)}function C(A){A.target.removeEventListener("dispose",C);for(const L in h){const M=h[L],T=A.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}const s_={[rc]:oc,[sc]:cc,[ac]:hc,[oo]:lc,[oc]:rc,[cc]:sc,[hc]:ac,[lc]:oo};function a_(e,t){function n(){let U=!1;const ae=new pt;let ue=null;const ye=new pt(0,0,0,0);return{setMask:function(re){ue!==re&&!U&&(e.colorMask(re,re,re,re),ue=re)},setLocked:function(re){U=re},setClear:function(re,J,we,We,at){at===!0&&(re*=We,J*=We,we*=We),ae.set(re,J,we,We),ye.equals(ae)===!1&&(e.clearColor(re,J,we,We),ye.copy(ae))},reset:function(){U=!1,ue=null,ye.set(-1,0,0,0)}}}function i(){let U=!1,ae=!1,ue=null,ye=null,re=null;return{setReversed:function(J){if(ae!==J){const we=t.get("EXT_clip_control");J?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),ae=J;const We=re;re=null,this.setClear(We)}},getReversed:function(){return ae},setTest:function(J){J?le(e.DEPTH_TEST):Ne(e.DEPTH_TEST)},setMask:function(J){ue!==J&&!U&&(e.depthMask(J),ue=J)},setFunc:function(J){if(ae&&(J=s_[J]),ye!==J){switch(J){case rc:e.depthFunc(e.NEVER);break;case oc:e.depthFunc(e.ALWAYS);break;case sc:e.depthFunc(e.LESS);break;case oo:e.depthFunc(e.LEQUAL);break;case ac:e.depthFunc(e.EQUAL);break;case lc:e.depthFunc(e.GEQUAL);break;case cc:e.depthFunc(e.GREATER);break;case hc:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ye=J}},setLocked:function(J){U=J},setClear:function(J){re!==J&&(ae&&(J=1-J),e.clearDepth(J),re=J)},reset:function(){U=!1,ue=null,ye=null,re=null,ae=!1}}}function r(){let U=!1,ae=null,ue=null,ye=null,re=null,J=null,we=null,We=null,at=null;return{setTest:function(nt){U||(nt?le(e.STENCIL_TEST):Ne(e.STENCIL_TEST))},setMask:function(nt){ae!==nt&&!U&&(e.stencilMask(nt),ae=nt)},setFunc:function(nt,pn,cn){(ue!==nt||ye!==pn||re!==cn)&&(e.stencilFunc(nt,pn,cn),ue=nt,ye=pn,re=cn)},setOp:function(nt,pn,cn){(J!==nt||we!==pn||We!==cn)&&(e.stencilOp(nt,pn,cn),J=nt,we=pn,We=cn)},setLocked:function(nt){U=nt},setClear:function(nt){at!==nt&&(e.clearStencil(nt),at=nt)},reset:function(){U=!1,ae=null,ue=null,ye=null,re=null,J=null,we=null,We=null,at=null}}}const o=new n,s=new i,a=new r,l=new WeakMap,h=new WeakMap;let d={},u={},p=new WeakMap,c=[],m=null,v=!1,g=null,f=null,_=null,w=null,y=null,C=null,A=null,R=new ze(0,0,0),L=0,M=!1,T=null,I=null,H=null,z=null,X=null;const $=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ee=0;const q=e.getParameter(e.VERSION);q.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=ee>=1):q.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=ee>=2);let he=null,ge={};const Se=e.getParameter(e.SCISSOR_BOX),Re=e.getParameter(e.VIEWPORT),Ze=new pt().fromArray(Se),lt=new pt().fromArray(Re);function K(U,ae,ue,ye){const re=new Uint8Array(4),J=e.createTexture();e.bindTexture(U,J),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let we=0;we<ue;we++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(ae,0,e.RGBA,1,1,ye,0,e.RGBA,e.UNSIGNED_BYTE,re):e.texImage2D(ae+we,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,re);return J}const fe={};fe[e.TEXTURE_2D]=K(e.TEXTURE_2D,e.TEXTURE_2D,1),fe[e.TEXTURE_CUBE_MAP]=K(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[e.TEXTURE_2D_ARRAY]=K(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),fe[e.TEXTURE_3D]=K(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),le(e.DEPTH_TEST),s.setFunc(oo),Qe(!1),Le(Oh),le(e.CULL_FACE),ut(Li);function le(U){d[U]!==!0&&(e.enable(U),d[U]=!0)}function Ne(U){d[U]!==!1&&(e.disable(U),d[U]=!1)}function Fe(U,ae){return u[U]!==ae?(e.bindFramebuffer(U,ae),u[U]=ae,U===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ae),U===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ae),!0):!1}function Oe(U,ae){let ue=c,ye=!1;if(U){ue=p.get(ae),ue===void 0&&(ue=[],p.set(ae,ue));const re=U.textures;if(ue.length!==re.length||ue[0]!==e.COLOR_ATTACHMENT0){for(let J=0,we=re.length;J<we;J++)ue[J]=e.COLOR_ATTACHMENT0+J;ue.length=re.length,ye=!0}}else ue[0]!==e.BACK&&(ue[0]=e.BACK,ye=!0);ye&&e.drawBuffers(ue)}function Et(U){return m!==U?(e.useProgram(U),m=U,!0):!1}const Ke={[er]:e.FUNC_ADD,[Zf]:e.FUNC_SUBTRACT,[Kf]:e.FUNC_REVERSE_SUBTRACT};Ke[Jf]=e.MIN,Ke[Qf]=e.MAX;const k={[ep]:e.ZERO,[tp]:e.ONE,[np]:e.SRC_COLOR,[nc]:e.SRC_ALPHA,[lp]:e.SRC_ALPHA_SATURATE,[sp]:e.DST_COLOR,[rp]:e.DST_ALPHA,[ip]:e.ONE_MINUS_SRC_COLOR,[ic]:e.ONE_MINUS_SRC_ALPHA,[ap]:e.ONE_MINUS_DST_COLOR,[op]:e.ONE_MINUS_DST_ALPHA,[cp]:e.CONSTANT_COLOR,[hp]:e.ONE_MINUS_CONSTANT_COLOR,[up]:e.CONSTANT_ALPHA,[dp]:e.ONE_MINUS_CONSTANT_ALPHA};function ut(U,ae,ue,ye,re,J,we,We,at,nt){if(U===Li){v===!0&&(Ne(e.BLEND),v=!1);return}if(v===!1&&(le(e.BLEND),v=!0),U!==jf){if(U!==g||nt!==M){if((f!==er||y!==er)&&(e.blendEquation(e.FUNC_ADD),f=er,y=er),nt)switch(U){case Kr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case zh:e.blendFunc(e.ONE,e.ONE);break;case Gh:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Hh:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Kr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case zh:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Gh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}_=null,w=null,C=null,A=null,R.set(0,0,0),L=0,g=U,M=nt}return}re=re||ae,J=J||ue,we=we||ye,(ae!==f||re!==y)&&(e.blendEquationSeparate(Ke[ae],Ke[re]),f=ae,y=re),(ue!==_||ye!==w||J!==C||we!==A)&&(e.blendFuncSeparate(k[ue],k[ye],k[J],k[we]),_=ue,w=ye,C=J,A=we),(We.equals(R)===!1||at!==L)&&(e.blendColor(We.r,We.g,We.b,at),R.copy(We),L=at),g=U,M=!1}function ke(U,ae){U.side===bt?Ne(e.CULL_FACE):le(e.CULL_FACE);let ue=U.side===fn;ae&&(ue=!ue),Qe(ue),U.blending===Kr&&U.transparent===!1?ut(Li):ut(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),o.setMask(U.colorWrite);const ye=U.stencilWrite;a.setTest(ye),ye&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Te(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):Ne(e.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(U){T!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),T=U)}function Le(U){U!==qf?(le(e.CULL_FACE),U!==I&&(U===Oh?e.cullFace(e.BACK):U===Yf?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ne(e.CULL_FACE),I=U}function _t(U){U!==H&&(Y&&e.lineWidth(U),H=U)}function Te(U,ae,ue){U?(le(e.POLYGON_OFFSET_FILL),(z!==ae||X!==ue)&&(e.polygonOffset(ae,ue),z=ae,X=ue)):Ne(e.POLYGON_OFFSET_FILL)}function qe(U){U?le(e.SCISSOR_TEST):Ne(e.SCISSOR_TEST)}function kt(U){U===void 0&&(U=e.TEXTURE0+$-1),he!==U&&(e.activeTexture(U),he=U)}function yt(U,ae,ue){ue===void 0&&(he===null?ue=e.TEXTURE0+$-1:ue=he);let ye=ge[ue];ye===void 0&&(ye={type:void 0,texture:void 0},ge[ue]=ye),(ye.type!==U||ye.texture!==ae)&&(he!==ue&&(e.activeTexture(ue),he=ue),e.bindTexture(U,ae||fe[U]),ye.type=U,ye.texture=ae)}function x(){const U=ge[he];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{e.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{e.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{e.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{e.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{e.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{e.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{e.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{e.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{e.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{e.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(U){Ze.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),Ze.copy(U))}function Ue(U){lt.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),lt.copy(U))}function Ce(U,ae){let ue=h.get(ae);ue===void 0&&(ue=new WeakMap,h.set(ae,ue));let ye=ue.get(U);ye===void 0&&(ye=e.getUniformBlockIndex(ae,U.name),ue.set(U,ye))}function pe(U,ae){const ye=h.get(ae).get(U);l.get(ae)!==ye&&(e.uniformBlockBinding(ae,ye,U.__bindingPointIndex),l.set(ae,ye))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),d={},he=null,ge={},u={},p=new WeakMap,c=[],m=null,v=!1,g=null,f=null,_=null,w=null,y=null,C=null,A=null,R=new ze(0,0,0),L=0,M=!1,T=null,I=null,H=null,z=null,X=null,Ze.set(0,0,e.canvas.width,e.canvas.height),lt.set(0,0,e.canvas.width,e.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:le,disable:Ne,bindFramebuffer:Fe,drawBuffers:Oe,useProgram:Et,setBlending:ut,setMaterial:ke,setFlipSided:Qe,setCullFace:Le,setLineWidth:_t,setPolygonOffset:Te,setScissorTest:qe,activeTexture:kt,bindTexture:yt,unbindTexture:x,compressedTexImage2D:S,compressedTexImage3D:G,texImage2D:Ae,texImage3D:ie,updateUBOMapping:Ce,uniformBlockBinding:pe,texStorage2D:ce,texStorage3D:Ee,texSubImage2D:Z,texSubImage3D:ne,compressedTexSubImage2D:j,compressedTexSubImage3D:Ie,scissor:ve,viewport:Ue,reset:Ve}}function l_(e,t,n,i,r,o,s){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ge,d=new WeakMap;let u;const p=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(x,S){return c?new OffscreenCanvas(x,S):_a("canvas")}function v(x,S,G){let Z=1;const ne=yt(x);if((ne.width>G||ne.height>G)&&(Z=G/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const j=Math.floor(Z*ne.width),Ie=Math.floor(Z*ne.height);u===void 0&&(u=m(j,Ie));const ce=S?m(j,Ie):u;return ce.width=j,ce.height=Ie,ce.getContext("2d").drawImage(x,0,0,j,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+j+"x"+Ie+")."),ce}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),x;return x}function g(x){return x.generateMipmaps}function f(x){e.generateMipmap(x)}function _(x){return x.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?e.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function w(x,S,G,Z,ne=!1){if(x!==null){if(e[x]!==void 0)return e[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let j=S;if(S===e.RED&&(G===e.FLOAT&&(j=e.R32F),G===e.HALF_FLOAT&&(j=e.R16F),G===e.UNSIGNED_BYTE&&(j=e.R8)),S===e.RED_INTEGER&&(G===e.UNSIGNED_BYTE&&(j=e.R8UI),G===e.UNSIGNED_SHORT&&(j=e.R16UI),G===e.UNSIGNED_INT&&(j=e.R32UI),G===e.BYTE&&(j=e.R8I),G===e.SHORT&&(j=e.R16I),G===e.INT&&(j=e.R32I)),S===e.RG&&(G===e.FLOAT&&(j=e.RG32F),G===e.HALF_FLOAT&&(j=e.RG16F),G===e.UNSIGNED_BYTE&&(j=e.RG8)),S===e.RG_INTEGER&&(G===e.UNSIGNED_BYTE&&(j=e.RG8UI),G===e.UNSIGNED_SHORT&&(j=e.RG16UI),G===e.UNSIGNED_INT&&(j=e.RG32UI),G===e.BYTE&&(j=e.RG8I),G===e.SHORT&&(j=e.RG16I),G===e.INT&&(j=e.RG32I)),S===e.RGB_INTEGER&&(G===e.UNSIGNED_BYTE&&(j=e.RGB8UI),G===e.UNSIGNED_SHORT&&(j=e.RGB16UI),G===e.UNSIGNED_INT&&(j=e.RGB32UI),G===e.BYTE&&(j=e.RGB8I),G===e.SHORT&&(j=e.RGB16I),G===e.INT&&(j=e.RGB32I)),S===e.RGBA_INTEGER&&(G===e.UNSIGNED_BYTE&&(j=e.RGBA8UI),G===e.UNSIGNED_SHORT&&(j=e.RGBA16UI),G===e.UNSIGNED_INT&&(j=e.RGBA32UI),G===e.BYTE&&(j=e.RGBA8I),G===e.SHORT&&(j=e.RGBA16I),G===e.INT&&(j=e.RGBA32I)),S===e.RGB&&G===e.UNSIGNED_INT_5_9_9_9_REV&&(j=e.RGB9_E5),S===e.RGBA){const Ie=ne?ga:ot.getTransfer(Z);G===e.FLOAT&&(j=e.RGBA32F),G===e.HALF_FLOAT&&(j=e.RGBA16F),G===e.UNSIGNED_BYTE&&(j=Ie===ft?e.SRGB8_ALPHA8:e.RGBA8),G===e.UNSIGNED_SHORT_4_4_4_4&&(j=e.RGBA4),G===e.UNSIGNED_SHORT_5_5_5_1&&(j=e.RGB5_A1)}return(j===e.R16F||j===e.R32F||j===e.RG16F||j===e.RG32F||j===e.RGBA16F||j===e.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(x,S){let G;return x?S===null||S===hr||S===ns?G=e.DEPTH24_STENCIL8:S===ei?G=e.DEPTH32F_STENCIL8:S===ts&&(G=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===hr||S===ns?G=e.DEPTH_COMPONENT24:S===ei?G=e.DEPTH_COMPONENT32F:S===ts&&(G=e.DEPTH_COMPONENT16),G}function C(x,S){return g(x)===!0||x.isFramebufferTexture&&x.minFilter!==Tn&&x.minFilter!==un?Math.log2(Math.max(S.width,S.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?S.mipmaps.length:1}function A(x){const S=x.target;S.removeEventListener("dispose",A),L(S),S.isVideoTexture&&d.delete(S)}function R(x){const S=x.target;S.removeEventListener("dispose",R),T(S)}function L(x){const S=i.get(x);if(S.__webglInit===void 0)return;const G=x.source,Z=p.get(G);if(Z){const ne=Z[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(x),Object.keys(Z).length===0&&p.delete(G)}i.remove(x)}function M(x){const S=i.get(x);e.deleteTexture(S.__webglTexture);const G=x.source,Z=p.get(G);delete Z[S.__cacheKey],s.memory.textures--}function T(x){const S=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let ne=0;ne<S.__webglFramebuffer[Z].length;ne++)e.deleteFramebuffer(S.__webglFramebuffer[Z][ne]);else e.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)e.deleteFramebuffer(S.__webglFramebuffer[Z]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=x.textures;for(let Z=0,ne=G.length;Z<ne;Z++){const j=i.get(G[Z]);j.__webglTexture&&(e.deleteTexture(j.__webglTexture),s.memory.textures--),i.remove(G[Z])}i.remove(x)}let I=0;function H(){I=0}function z(){const x=I;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),I+=1,x}function X(x){const S=[];return S.push(x.wrapS),S.push(x.wrapT),S.push(x.wrapR||0),S.push(x.magFilter),S.push(x.minFilter),S.push(x.anisotropy),S.push(x.internalFormat),S.push(x.format),S.push(x.type),S.push(x.generateMipmaps),S.push(x.premultiplyAlpha),S.push(x.flipY),S.push(x.unpackAlignment),S.push(x.colorSpace),S.join()}function $(x,S){const G=i.get(x);if(x.isVideoTexture&&qe(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&G.__version!==x.version){const Z=x.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(G,x,S);return}}else x.isExternalTexture&&(G.__webglTexture=x.sourceTexture?x.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,G.__webglTexture,e.TEXTURE0+S)}function Y(x,S){const G=i.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&G.__version!==x.version){fe(G,x,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,G.__webglTexture,e.TEXTURE0+S)}function ee(x,S){const G=i.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&G.__version!==x.version){fe(G,x,S);return}n.bindTexture(e.TEXTURE_3D,G.__webglTexture,e.TEXTURE0+S)}function q(x,S){const G=i.get(x);if(x.version>0&&G.__version!==x.version){le(G,x,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture,e.TEXTURE0+S)}const he={[es]:e.REPEAT,[nr]:e.CLAMP_TO_EDGE,[fc]:e.MIRRORED_REPEAT},ge={[Tn]:e.NEAREST,[Mp]:e.NEAREST_MIPMAP_NEAREST,[Rs]:e.NEAREST_MIPMAP_LINEAR,[un]:e.LINEAR,[pl]:e.LINEAR_MIPMAP_NEAREST,[ir]:e.LINEAR_MIPMAP_LINEAR},Se={[Ep]:e.NEVER,[Ip]:e.ALWAYS,[Ap]:e.LESS,[Rd]:e.LEQUAL,[Cp]:e.EQUAL,[Rp]:e.GEQUAL,[Pp]:e.GREATER,[xp]:e.NOTEQUAL};function Re(x,S){if(S.type===ei&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===un||S.magFilter===pl||S.magFilter===Rs||S.magFilter===ir||S.minFilter===un||S.minFilter===pl||S.minFilter===Rs||S.minFilter===ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(x,e.TEXTURE_WRAP_S,he[S.wrapS]),e.texParameteri(x,e.TEXTURE_WRAP_T,he[S.wrapT]),(x===e.TEXTURE_3D||x===e.TEXTURE_2D_ARRAY)&&e.texParameteri(x,e.TEXTURE_WRAP_R,he[S.wrapR]),e.texParameteri(x,e.TEXTURE_MAG_FILTER,ge[S.magFilter]),e.texParameteri(x,e.TEXTURE_MIN_FILTER,ge[S.minFilter]),S.compareFunction&&(e.texParameteri(x,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(x,e.TEXTURE_COMPARE_FUNC,Se[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Tn||S.minFilter!==Rs&&S.minFilter!==ir||S.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");e.texParameterf(x,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ze(x,S){let G=!1;x.__webglInit===void 0&&(x.__webglInit=!0,S.addEventListener("dispose",A));const Z=S.source;let ne=p.get(Z);ne===void 0&&(ne={},p.set(Z,ne));const j=X(S);if(j!==x.__cacheKey){ne[j]===void 0&&(ne[j]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,G=!0),ne[j].usedTimes++;const Ie=ne[x.__cacheKey];Ie!==void 0&&(ne[x.__cacheKey].usedTimes--,Ie.usedTimes===0&&M(S)),x.__cacheKey=j,x.__webglTexture=ne[j].texture}return G}function lt(x,S,G){return Math.floor(Math.floor(x/G)/S)}function K(x,S,G,Z){const j=x.updateRanges;if(j.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,G,Z,S.data);else{j.sort((ie,ve)=>ie.start-ve.start);let Ie=0;for(let ie=1;ie<j.length;ie++){const ve=j[Ie],Ue=j[ie],Ce=ve.start+ve.count,pe=lt(Ue.start,S.width,4),Ve=lt(ve.start,S.width,4);Ue.start<=Ce+1&&pe===Ve&&lt(Ue.start+Ue.count-1,S.width,4)===pe?ve.count=Math.max(ve.count,Ue.start+Ue.count-ve.start):(++Ie,j[Ie]=Ue)}j.length=Ie+1;const ce=e.getParameter(e.UNPACK_ROW_LENGTH),Ee=e.getParameter(e.UNPACK_SKIP_PIXELS),Ae=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let ie=0,ve=j.length;ie<ve;ie++){const Ue=j[ie],Ce=Math.floor(Ue.start/4),pe=Math.ceil(Ue.count/4),Ve=Ce%S.width,U=Math.floor(Ce/S.width),ae=pe,ue=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ve),e.pixelStorei(e.UNPACK_SKIP_ROWS,U),n.texSubImage2D(e.TEXTURE_2D,0,Ve,U,ae,ue,G,Z,S.data)}x.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ce),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ee),e.pixelStorei(e.UNPACK_SKIP_ROWS,Ae)}}function fe(x,S,G){let Z=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=e.TEXTURE_3D);const ne=Ze(x,S),j=S.source;n.bindTexture(Z,x.__webglTexture,e.TEXTURE0+G);const Ie=i.get(j);if(j.version!==Ie.__version||ne===!0){n.activeTexture(e.TEXTURE0+G);const ce=ot.getPrimaries(ot.workingColorSpace),Ee=S.colorSpace===Ii?null:ot.getPrimaries(S.colorSpace),Ae=S.colorSpace===Ii||ce===Ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ie=v(S.image,!1,r.maxTextureSize);ie=kt(S,ie);const ve=o.convert(S.format,S.colorSpace),Ue=o.convert(S.type);let Ce=w(S.internalFormat,ve,Ue,S.colorSpace,S.isVideoTexture);Re(Z,S);let pe;const Ve=S.mipmaps,U=S.isVideoTexture!==!0,ae=Ie.__version===void 0||ne===!0,ue=j.dataReady,ye=C(S,ie);if(S.isDepthTexture)Ce=y(S.format===rs,S.type),ae&&(U?n.texStorage2D(e.TEXTURE_2D,1,Ce,ie.width,ie.height):n.texImage2D(e.TEXTURE_2D,0,Ce,ie.width,ie.height,0,ve,Ue,null));else if(S.isDataTexture)if(Ve.length>0){U&&ae&&n.texStorage2D(e.TEXTURE_2D,ye,Ce,Ve[0].width,Ve[0].height);for(let re=0,J=Ve.length;re<J;re++)pe=Ve[re],U?ue&&n.texSubImage2D(e.TEXTURE_2D,re,0,0,pe.width,pe.height,ve,Ue,pe.data):n.texImage2D(e.TEXTURE_2D,re,Ce,pe.width,pe.height,0,ve,Ue,pe.data);S.generateMipmaps=!1}else U?(ae&&n.texStorage2D(e.TEXTURE_2D,ye,Ce,ie.width,ie.height),ue&&K(S,ie,ve,Ue)):n.texImage2D(e.TEXTURE_2D,0,Ce,ie.width,ie.height,0,ve,Ue,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&ae&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ye,Ce,Ve[0].width,Ve[0].height,ie.depth);for(let re=0,J=Ve.length;re<J;re++)if(pe=Ve[re],S.format!==Hn)if(ve!==null)if(U){if(ue)if(S.layerUpdates.size>0){const we=Eu(pe.width,pe.height,S.format,S.type);for(const We of S.layerUpdates){const at=pe.data.subarray(We*we/pe.data.BYTES_PER_ELEMENT,(We+1)*we/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,We,pe.width,pe.height,1,ve,at)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,ie.depth,ve,pe.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,re,Ce,pe.width,pe.height,ie.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ue&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,ie.depth,ve,Ue,pe.data):n.texImage3D(e.TEXTURE_2D_ARRAY,re,Ce,pe.width,pe.height,ie.depth,0,ve,Ue,pe.data)}else{U&&ae&&n.texStorage2D(e.TEXTURE_2D,ye,Ce,Ve[0].width,Ve[0].height);for(let re=0,J=Ve.length;re<J;re++)pe=Ve[re],S.format!==Hn?ve!==null?U?ue&&n.compressedTexSubImage2D(e.TEXTURE_2D,re,0,0,pe.width,pe.height,ve,pe.data):n.compressedTexImage2D(e.TEXTURE_2D,re,Ce,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ue&&n.texSubImage2D(e.TEXTURE_2D,re,0,0,pe.width,pe.height,ve,Ue,pe.data):n.texImage2D(e.TEXTURE_2D,re,Ce,pe.width,pe.height,0,ve,Ue,pe.data)}else if(S.isDataArrayTexture)if(U){if(ae&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ye,Ce,ie.width,ie.height,ie.depth),ue)if(S.layerUpdates.size>0){const re=Eu(ie.width,ie.height,S.format,S.type);for(const J of S.layerUpdates){const we=ie.data.subarray(J*re/ie.data.BYTES_PER_ELEMENT,(J+1)*re/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,ve,Ue,we)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,Ue,ie.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Ce,ie.width,ie.height,ie.depth,0,ve,Ue,ie.data);else if(S.isData3DTexture)U?(ae&&n.texStorage3D(e.TEXTURE_3D,ye,Ce,ie.width,ie.height,ie.depth),ue&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,Ue,ie.data)):n.texImage3D(e.TEXTURE_3D,0,Ce,ie.width,ie.height,ie.depth,0,ve,Ue,ie.data);else if(S.isFramebufferTexture){if(ae)if(U)n.texStorage2D(e.TEXTURE_2D,ye,Ce,ie.width,ie.height);else{let re=ie.width,J=ie.height;for(let we=0;we<ye;we++)n.texImage2D(e.TEXTURE_2D,we,Ce,re,J,0,ve,Ue,null),re>>=1,J>>=1}}else if(Ve.length>0){if(U&&ae){const re=yt(Ve[0]);n.texStorage2D(e.TEXTURE_2D,ye,Ce,re.width,re.height)}for(let re=0,J=Ve.length;re<J;re++)pe=Ve[re],U?ue&&n.texSubImage2D(e.TEXTURE_2D,re,0,0,ve,Ue,pe):n.texImage2D(e.TEXTURE_2D,re,Ce,ve,Ue,pe);S.generateMipmaps=!1}else if(U){if(ae){const re=yt(ie);n.texStorage2D(e.TEXTURE_2D,ye,Ce,re.width,re.height)}ue&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ve,Ue,ie)}else n.texImage2D(e.TEXTURE_2D,0,Ce,ve,Ue,ie);g(S)&&f(Z),Ie.__version=j.version,S.onUpdate&&S.onUpdate(S)}x.__version=S.version}function le(x,S,G){if(S.image.length!==6)return;const Z=Ze(x,S),ne=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,x.__webglTexture,e.TEXTURE0+G);const j=i.get(ne);if(ne.version!==j.__version||Z===!0){n.activeTexture(e.TEXTURE0+G);const Ie=ot.getPrimaries(ot.workingColorSpace),ce=S.colorSpace===Ii?null:ot.getPrimaries(S.colorSpace),Ee=S.colorSpace===Ii||Ie===ce?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!Ae&&!ie?ve[J]=v(S.image[J],!0,r.maxCubemapSize):ve[J]=ie?S.image[J].image:S.image[J],ve[J]=kt(S,ve[J]);const Ue=ve[0],Ce=o.convert(S.format,S.colorSpace),pe=o.convert(S.type),Ve=w(S.internalFormat,Ce,pe,S.colorSpace),U=S.isVideoTexture!==!0,ae=j.__version===void 0||Z===!0,ue=ne.dataReady;let ye=C(S,Ue);Re(e.TEXTURE_CUBE_MAP,S);let re;if(Ae){U&&ae&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ye,Ve,Ue.width,Ue.height);for(let J=0;J<6;J++){re=ve[J].mipmaps;for(let we=0;we<re.length;we++){const We=re[we];S.format!==Hn?Ce!==null?U?ue&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,0,0,We.width,We.height,Ce,We.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,Ve,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ue&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,0,0,We.width,We.height,Ce,pe,We.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,Ve,We.width,We.height,0,Ce,pe,We.data)}}}else{if(re=S.mipmaps,U&&ae){re.length>0&&ye++;const J=yt(ve[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ye,Ve,J.width,J.height)}for(let J=0;J<6;J++)if(ie){U?ue&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Ce,pe,ve[J].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,ve[J].width,ve[J].height,0,Ce,pe,ve[J].data);for(let we=0;we<re.length;we++){const at=re[we].image[J].image;U?ue&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,0,0,at.width,at.height,Ce,pe,at.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,Ve,at.width,at.height,0,Ce,pe,at.data)}}else{U?ue&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ce,pe,ve[J]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,Ce,pe,ve[J]);for(let we=0;we<re.length;we++){const We=re[we];U?ue&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,0,0,Ce,pe,We.image[J]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,Ve,Ce,pe,We.image[J])}}}g(S)&&f(e.TEXTURE_CUBE_MAP),j.__version=ne.version,S.onUpdate&&S.onUpdate(S)}x.__version=S.version}function Ne(x,S,G,Z,ne,j){const Ie=o.convert(G.format,G.colorSpace),ce=o.convert(G.type),Ee=w(G.internalFormat,Ie,ce,G.colorSpace),Ae=i.get(S),ie=i.get(G);if(ie.__renderTarget=S,!Ae.__hasExternalTextures){const ve=Math.max(1,S.width>>j),Ue=Math.max(1,S.height>>j);ne===e.TEXTURE_3D||ne===e.TEXTURE_2D_ARRAY?n.texImage3D(ne,j,Ee,ve,Ue,S.depth,0,Ie,ce,null):n.texImage2D(ne,j,Ee,ve,Ue,0,Ie,ce,null)}n.bindFramebuffer(e.FRAMEBUFFER,x),Te(S)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,ne,ie.__webglTexture,0,_t(S)):(ne===e.TEXTURE_2D||ne>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Z,ne,ie.__webglTexture,j),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Fe(x,S,G){if(e.bindRenderbuffer(e.RENDERBUFFER,x),S.depthBuffer){const Z=S.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,j=y(S.stencilBuffer,ne),Ie=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ce=_t(S);Te(S)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ce,j,S.width,S.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,ce,j,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,j,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Ie,e.RENDERBUFFER,x)}else{const Z=S.textures;for(let ne=0;ne<Z.length;ne++){const j=Z[ne],Ie=o.convert(j.format,j.colorSpace),ce=o.convert(j.type),Ee=w(j.internalFormat,Ie,ce,j.colorSpace),Ae=_t(S);G&&Te(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae,Ee,S.width,S.height):Te(S)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae,Ee,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Ee,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Oe(x,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,x),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const ne=Z.__webglTexture,j=_t(S);if(S.depthTexture.format===is)Te(S)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ne,0,j):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ne,0);else if(S.depthTexture.format===rs)Te(S)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ne,0,j):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Et(x){const S=i.get(x),G=x.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==x.depthTexture){const Z=x.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=Z}if(x.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Z=x.texture.mipmaps;Z&&Z.length>0?Oe(S.__webglFramebuffer[0],x):Oe(S.__webglFramebuffer,x)}else if(G){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=e.createRenderbuffer(),Fe(S.__webglDepthbuffer[Z],x,!1);else{const ne=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[Z];e.bindRenderbuffer(e.RENDERBUFFER,j),e.framebufferRenderbuffer(e.FRAMEBUFFER,ne,e.RENDERBUFFER,j)}}else{const Z=x.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Fe(S.__webglDepthbuffer,x,!1);else{const ne=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,j),e.framebufferRenderbuffer(e.FRAMEBUFFER,ne,e.RENDERBUFFER,j)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ke(x,S,G){const Z=i.get(x);S!==void 0&&Ne(Z.__webglFramebuffer,x,x.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),G!==void 0&&Et(x)}function k(x){const S=x.texture,G=i.get(x),Z=i.get(S);x.addEventListener("dispose",R);const ne=x.textures,j=x.isWebGLCubeRenderTarget===!0,Ie=ne.length>1;if(Ie||(Z.__webglTexture===void 0&&(Z.__webglTexture=e.createTexture()),Z.__version=S.version,s.memory.textures++),j){G.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ce]=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)G.__webglFramebuffer[ce][Ee]=e.createFramebuffer()}else G.__webglFramebuffer[ce]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)G.__webglFramebuffer[ce]=e.createFramebuffer()}else G.__webglFramebuffer=e.createFramebuffer();if(Ie)for(let ce=0,Ee=ne.length;ce<Ee;ce++){const Ae=i.get(ne[ce]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=e.createTexture(),s.memory.textures++)}if(x.samples>0&&Te(x)===!1){G.__webglMultisampledFramebuffer=e.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ce=0;ce<ne.length;ce++){const Ee=ne[ce];G.__webglColorRenderbuffer[ce]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,G.__webglColorRenderbuffer[ce]);const Ae=o.convert(Ee.format,Ee.colorSpace),ie=o.convert(Ee.type),ve=w(Ee.internalFormat,Ae,ie,Ee.colorSpace,x.isXRRenderTarget===!0),Ue=_t(x);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ue,ve,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.RENDERBUFFER,G.__webglColorRenderbuffer[ce])}e.bindRenderbuffer(e.RENDERBUFFER,null),x.depthBuffer&&(G.__webglDepthRenderbuffer=e.createRenderbuffer(),Fe(G.__webglDepthRenderbuffer,x,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(j){n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),Re(e.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)Ne(G.__webglFramebuffer[ce][Ee],x,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee);else Ne(G.__webglFramebuffer[ce],x,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(S)&&f(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let ce=0,Ee=ne.length;ce<Ee;ce++){const Ae=ne[ce],ie=i.get(Ae);let ve=e.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ve=x.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ve,ie.__webglTexture),Re(ve,Ae),Ne(G.__webglFramebuffer,x,Ae,e.COLOR_ATTACHMENT0+ce,ve,0),g(Ae)&&f(ve)}n.unbindTexture()}else{let ce=e.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ce=x.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ce,Z.__webglTexture),Re(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)Ne(G.__webglFramebuffer[Ee],x,S,e.COLOR_ATTACHMENT0,ce,Ee);else Ne(G.__webglFramebuffer,x,S,e.COLOR_ATTACHMENT0,ce,0);g(S)&&f(ce),n.unbindTexture()}x.depthBuffer&&Et(x)}function ut(x){const S=x.textures;for(let G=0,Z=S.length;G<Z;G++){const ne=S[G];if(g(ne)){const j=_(x),Ie=i.get(ne).__webglTexture;n.bindTexture(j,Ie),f(j),n.unbindTexture()}}}const ke=[],Qe=[];function Le(x){if(x.samples>0){if(Te(x)===!1){const S=x.textures,G=x.width,Z=x.height;let ne=e.COLOR_BUFFER_BIT;const j=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ie=i.get(x),ce=S.length>1;if(ce)for(let Ae=0;Ae<S.length;Ae++)n.bindFramebuffer(e.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ae,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Ie.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ae,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Ee=x.texture.mipmaps;Ee&&Ee.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(ne|=e.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(ne|=e.STENCIL_BUFFER_BIT)),ce){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ae]);const ie=i.get(S[Ae]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ie,0)}e.blitFramebuffer(0,0,G,Z,0,0,G,Z,ne,e.NEAREST),l===!0&&(ke.length=0,Qe.length=0,ke.push(e.COLOR_ATTACHMENT0+Ae),x.depthBuffer&&x.resolveDepthBuffer===!1&&(ke.push(j),Qe.push(j),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Qe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ce)for(let Ae=0;Ae<S.length;Ae++){n.bindFramebuffer(e.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ae,e.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ae]);const ie=i.get(S[Ae]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Ie.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ae,e.TEXTURE_2D,ie,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const S=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function _t(x){return Math.min(r.maxSamples,x.samples)}function Te(x){const S=i.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function qe(x){const S=s.render.frame;d.get(x)!==S&&(d.set(x,S),x.update())}function kt(x,S){const G=x.colorSpace,Z=x.format,ne=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||G!==lo&&G!==Ii&&(ot.getTransfer(G)===ft?(Z!==Hn||ne!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function yt(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(h.width=x.naturalWidth||x.width,h.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(h.width=x.displayWidth,h.height=x.displayHeight):(h.width=x.width,h.height=x.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=$,this.setTexture2DArray=Y,this.setTexture3D=ee,this.setTextureCube=q,this.rebindTextures=Ke,this.setupRenderTarget=k,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Te}function c_(e,t){function n(i,r=Ii){let o;const s=ot.getTransfer(r);if(i===ii)return e.UNSIGNED_BYTE;if(i===ih)return e.UNSIGNED_SHORT_4_4_4_4;if(i===rh)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Ed)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===bd)return e.BYTE;if(i===wd)return e.SHORT;if(i===ts)return e.UNSIGNED_SHORT;if(i===nh)return e.INT;if(i===hr)return e.UNSIGNED_INT;if(i===ei)return e.FLOAT;if(i===Ss)return e.HALF_FLOAT;if(i===Ad)return e.ALPHA;if(i===Cd)return e.RGB;if(i===Hn)return e.RGBA;if(i===is)return e.DEPTH_COMPONENT;if(i===rs)return e.DEPTH_STENCIL;if(i===oh)return e.RED;if(i===sh)return e.RED_INTEGER;if(i===Pd)return e.RG;if(i===ah)return e.RG_INTEGER;if(i===lh)return e.RGBA_INTEGER;if(i===ca||i===ha||i===ua||i===da)if(s===ft)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ca)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ca)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ha)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===da)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pc||i===mc||i===gc||i===vc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===pc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_c||i===Sc||i===yc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===_c||i===Sc)return s===ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===yc)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mc||i===Tc||i===bc||i===wc||i===Ec||i===Ac||i===Cc||i===Pc||i===xc||i===Rc||i===Ic||i===Dc||i===Lc||i===kc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Mc)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tc)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bc)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wc)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ec)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ac)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cc)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pc)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xc)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rc)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ic)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dc)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lc)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kc)return s===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fa||i===Uc||i===Nc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===fa)return s===ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xd||i===Fc||i===Bc||i===Oc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===fa)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Fc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ns?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class Jd extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const h_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u_=`
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

}`;class d_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new Jd(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new zi({vertexShader:h_,fragmentShader:u_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new O(new _o(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f_ extends go{constructor(t,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,h=null,d=null,u=null,p=null,c=null,m=null;const v=new d_,g={},f=n.getContextAttributes();let _=null,w=null;const y=[],C=[],A=new Ge;let R=null;const L=new Sn;L.viewport=new pt;const M=new Sn;M.viewport=new pt;const T=[L,M],I=new Dm;let H=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let fe=y[K];return fe===void 0&&(fe=new Ul,y[K]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(K){let fe=y[K];return fe===void 0&&(fe=new Ul,y[K]=fe),fe.getGripSpace()},this.getHand=function(K){let fe=y[K];return fe===void 0&&(fe=new Ul,y[K]=fe),fe.getHandSpace()};function X(K){const fe=C.indexOf(K.inputSource);if(fe===-1)return;const le=y[fe];le!==void 0&&(le.update(K.inputSource,K.frame,h||s),le.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Y);for(let K=0;K<y.length;K++){const fe=C[K];fe!==null&&(C[K]=null,y[K].disconnect(fe))}H=null,z=null,v.reset();for(const K in g)delete g[K];t.setRenderTarget(_),c=null,p=null,u=null,r=null,w=null,lt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||s},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return p!==null?p:c},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Y),f.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(r,n)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ne=null,Fe=null;f.depth&&(Fe=f.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=f.stencil?rs:is,Ne=f.stencil?ns:hr);const Oe={colorFormat:n.RGBA8,depthFormat:Fe,scaleFactor:o};p=u.createProjectionLayer(Oe),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),w=new ur(p.textureWidth,p.textureHeight,{format:Hn,type:ii,depthTexture:new Wd(p.textureWidth,p.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const le={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:o};c=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:c}),t.setPixelRatio(1),t.setSize(c.framebufferWidth,c.framebufferHeight,!1),w=new ur(c.framebufferWidth,c.framebufferHeight,{format:Hn,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),h=null,s=await r.requestReferenceSpace(a),lt.setContext(r),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(K){for(let fe=0;fe<K.removed.length;fe++){const le=K.removed[fe],Ne=C.indexOf(le);Ne>=0&&(C[Ne]=null,y[Ne].disconnect(le))}for(let fe=0;fe<K.added.length;fe++){const le=K.added[fe];let Ne=C.indexOf(le);if(Ne===-1){for(let Oe=0;Oe<y.length;Oe++)if(Oe>=C.length){C.push(le),Ne=Oe;break}else if(C[Oe]===null){C[Oe]=le,Ne=Oe;break}if(Ne===-1)break}const Fe=y[Ne];Fe&&Fe.connect(le)}}const ee=new P,q=new P;function he(K,fe,le){ee.setFromMatrixPosition(fe.matrixWorld),q.setFromMatrixPosition(le.matrixWorld);const Ne=ee.distanceTo(q),Fe=fe.projectionMatrix.elements,Oe=le.projectionMatrix.elements,Et=Fe[14]/(Fe[10]-1),Ke=Fe[14]/(Fe[10]+1),k=(Fe[9]+1)/Fe[5],ut=(Fe[9]-1)/Fe[5],ke=(Fe[8]-1)/Fe[0],Qe=(Oe[8]+1)/Oe[0],Le=Et*ke,_t=Et*Qe,Te=Ne/(-ke+Qe),qe=Te*-ke;if(fe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(qe),K.translateZ(Te),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Fe[10]===-1)K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const kt=Et+Te,yt=Ke+Te,x=Le-qe,S=_t+(Ne-qe),G=k*Ke/yt*kt,Z=ut*Ke/yt*kt;K.projectionMatrix.makePerspective(x,S,G,Z,kt,yt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ge(K,fe){fe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(fe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let fe=K.near,le=K.far;v.texture!==null&&(v.depthNear>0&&(fe=v.depthNear),v.depthFar>0&&(le=v.depthFar)),I.near=M.near=L.near=fe,I.far=M.far=L.far=le,(H!==I.near||z!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),H=I.near,z=I.far),I.layers.mask=K.layers.mask|6,L.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const Ne=K.parent,Fe=I.cameras;ge(I,Ne);for(let Oe=0;Oe<Fe.length;Oe++)ge(Fe[Oe],Ne);Fe.length===2?he(I,L,M):I.projectionMatrix.copy(L.projectionMatrix),Se(K,I,Ne)};function Se(K,fe,le){le===null?K.matrix.copy(fe.matrixWorld):(K.matrix.copy(le.matrixWorld),K.matrix.invert(),K.matrix.multiply(fe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=os*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(p===null&&c===null))return l},this.setFoveation=function(K){l=K,p!==null&&(p.fixedFoveation=K),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(I)},this.getCameraTexture=function(K){return g[K]};let Re=null;function Ze(K,fe){if(d=fe.getViewerPose(h||s),m=fe,d!==null){const le=d.views;c!==null&&(t.setRenderTargetFramebuffer(w,c.framebuffer),t.setRenderTarget(w));let Ne=!1;le.length!==I.cameras.length&&(I.cameras.length=0,Ne=!0);for(let Ke=0;Ke<le.length;Ke++){const k=le[Ke];let ut=null;if(c!==null)ut=c.getViewport(k);else{const Qe=u.getViewSubImage(p,k);ut=Qe.viewport,Ke===0&&(t.setRenderTargetTextures(w,Qe.colorTexture,Qe.depthStencilTexture),t.setRenderTarget(w))}let ke=T[Ke];ke===void 0&&(ke=new Sn,ke.layers.enable(Ke),ke.viewport=new pt,T[Ke]=ke),ke.matrix.fromArray(k.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(k.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(ut.x,ut.y,ut.width,ut.height),Ke===0&&(I.matrix.copy(ke.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ne===!0&&I.cameras.push(ke)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const Ke=u.getDepthInformation(le[0]);Ke&&Ke.isValid&&Ke.texture&&v.init(Ke,r.renderState)}if(Fe&&Fe.includes("camera-access")&&(t.state.unbindTexture(),u))for(let Ke=0;Ke<le.length;Ke++){const k=le[Ke].camera;if(k){let ut=g[k];ut||(ut=new Jd,g[k]=ut);const ke=u.getCameraImage(k);ut.sourceTexture=ke}}}for(let le=0;le<y.length;le++){const Ne=C[le],Fe=y[le];Ne!==null&&Fe!==void 0&&Fe.update(Ne,fe,h||s)}Re&&Re(K,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),m=null}const lt=new Yd;lt.setAnimationLoop(Ze),this.setAnimationLoop=function(K){Re=K},this.dispose=function(){}}}const Zi=new jn,p_=new ht;function m_(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Nd(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,_,w,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(g,f):f.isMeshToonMaterial?(o(g,f),u(g,f)):f.isMeshPhongMaterial?(o(g,f),d(g,f)):f.isMeshStandardMaterial?(o(g,f),p(g,f),f.isMeshPhysicalMaterial&&c(g,f,y)):f.isMeshMatcapMaterial?(o(g,f),m(g,f)):f.isMeshDepthMaterial?o(g,f):f.isMeshDistanceMaterial?(o(g,f),v(g,f)):f.isMeshNormalMaterial?o(g,f):f.isLineBasicMaterial?(s(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,_,w):f.isSpriteMaterial?h(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===fn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===fn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const _=t.get(f),w=_.envMap,y=_.envMapRotation;w&&(g.envMap.value=w,Zi.copy(y),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),g.envMapRotation.value.setFromMatrix4(p_.makeRotationFromEuler(Zi)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function s(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,_,w){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*_,g.scale.value=w*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function p(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function c(g,f,_){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function v(g,f){const _=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function g_(e,t,n,i){let r={},o={},s=[];const a=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,w){const y=w.program;i.uniformBlockBinding(_,y)}function h(_,w){let y=r[_.id];y===void 0&&(m(_),y=d(_),r[_.id]=y,_.addEventListener("dispose",g));const C=w.program;i.updateUBOMapping(_,C);const A=t.render.frame;o[_.id]!==A&&(p(_),o[_.id]=A)}function d(_){const w=u();_.__bindingPointIndex=w;const y=e.createBuffer(),C=_.__size,A=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,C,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,w,y),y}function u(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){const w=r[_.id],y=_.uniforms,C=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,w);for(let A=0,R=y.length;A<R;A++){const L=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,T=L.length;M<T;M++){const I=L[M];if(c(I,A,M,C)===!0){const H=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let $=0;$<z.length;$++){const Y=z[$],ee=v(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,e.bufferSubData(e.UNIFORM_BUFFER,H+X,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,X),X+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,H,I.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function c(_,w,y,C){const A=_.value,R=w+"_"+y;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const L=C[R];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return C[R]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function m(_){const w=_.uniforms;let y=0;const C=16;for(let R=0,L=w.length;R<L;R++){const M=Array.isArray(w[R])?w[R]:[w[R]];for(let T=0,I=M.length;T<I;T++){const H=M[T],z=Array.isArray(H.value)?H.value:[H.value];for(let X=0,$=z.length;X<$;X++){const Y=z[X],ee=v(Y),q=y%C,he=q%ee.boundary,ge=q+he;y+=he,ge!==0&&C-ge<ee.storage&&(y+=C-ge),H.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=ee.storage}}}const A=y%C;return A>0&&(y+=C-A),_.__size=y,_.__cache={},this}function v(_){const w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),w}function g(_){const w=_.target;w.removeEventListener("dispose",g);const y=s.indexOf(w.__bindingPointIndex);s.splice(y,1),e.deleteBuffer(r[w.id]),delete r[w.id],delete o[w.id]}function f(){for(const _ in r)e.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:l,update:h,dispose:f}}class Qd{constructor(t={}){const{canvas:n=$p(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let c;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=i.getContextAttributes().alpha}else c=s;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,f=null;const _=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let C=!1;this._outputColorSpace=Wt;let A=0,R=0,L=null,M=-1,T=null;const I=new pt,H=new pt;let z=null;const X=new ze(0);let $=0,Y=n.width,ee=n.height,q=1,he=null,ge=null;const Se=new pt(0,0,Y,ee),Re=new pt(0,0,Y,ee);let Ze=!1;const lt=new mh;let K=!1,fe=!1;const le=new ht,Ne=new P,Fe=new pt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Ke(){return L===null?q:1}let k=i;function ut(b,F){return n.getContext(b,F)}try{const b={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qc}`),n.addEventListener("webglcontextlost",ue,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",re,!1),k===null){const F="webgl2";if(k=ut(F,b),k===null)throw ut(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ke,Qe,Le,_t,Te,qe,kt,yt,x,S,G,Z,ne,j,Ie,ce,Ee,Ae,ie,ve,Ue,Ce,pe,Ve;function U(){ke=new C1(k),ke.init(),Ce=new c_(k,ke),Qe=new y1(k,ke,t,Ce),Le=new a_(k,ke),Qe.reversedDepthBuffer&&p&&Le.buffers.depth.setReversed(!0),_t=new R1(k),Te=new $v,qe=new l_(k,ke,Le,Te,Qe,Ce,_t),kt=new T1(y),yt=new A1(y),x=new Nm(k),pe=new _1(k,x),S=new P1(k,x,_t,pe),G=new D1(k,S,x,_t),ie=new I1(k,Qe,qe),ce=new M1(Te),Z=new Yv(y,kt,yt,ke,Qe,pe,ce),ne=new m_(y,Te),j=new Zv,Ie=new n_(ke),Ae=new v1(y,kt,yt,Le,G,c,l),Ee=new o_(y,G,Qe),Ve=new g_(k,_t,Qe,Le),ve=new S1(k,ke,_t),Ue=new x1(k,ke,_t),_t.programs=Z.programs,y.capabilities=Qe,y.extensions=ke,y.properties=Te,y.renderLists=j,y.shadowMap=Ee,y.state=Le,y.info=_t}U();const ae=new f_(y,k);this.xr=ae,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const b=ke.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ke.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(Y,ee,!1))},this.getSize=function(b){return b.set(Y,ee)},this.setSize=function(b,F,W=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,ee=F,n.width=Math.floor(b*q),n.height=Math.floor(F*q),W===!0&&(n.style.width=b+"px",n.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(Y*q,ee*q).floor()},this.setDrawingBufferSize=function(b,F,W){Y=b,ee=F,q=W,n.width=Math.floor(b*W),n.height=Math.floor(F*W),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(Se)},this.setViewport=function(b,F,W,V){b.isVector4?Se.set(b.x,b.y,b.z,b.w):Se.set(b,F,W,V),Le.viewport(I.copy(Se).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(Re)},this.setScissor=function(b,F,W,V){b.isVector4?Re.set(b.x,b.y,b.z,b.w):Re.set(b,F,W,V),Le.scissor(H.copy(Re).multiplyScalar(q).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(b){Le.setScissorTest(Ze=b)},this.setOpaqueSort=function(b){he=b},this.setTransparentSort=function(b){ge=b},this.getClearColor=function(b){return b.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,W=!0){let V=0;if(b){let B=!1;if(L!==null){const oe=L.texture.format;B=oe===lh||oe===ah||oe===sh}if(B){const oe=L.texture.type,_e=oe===ii||oe===hr||oe===ts||oe===ns||oe===ih||oe===rh,N=Ae.getClearColor(),D=Ae.getClearAlpha(),te=N.r,Me=N.g,be=N.b;_e?(m[0]=te,m[1]=Me,m[2]=be,m[3]=D,k.clearBufferuiv(k.COLOR,0,m)):(v[0]=te,v[1]=Me,v[2]=be,v[3]=D,k.clearBufferiv(k.COLOR,0,v))}else V|=k.COLOR_BUFFER_BIT}F&&(V|=k.DEPTH_BUFFER_BIT),W&&(V|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ue,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",re,!1),Ae.dispose(),j.dispose(),Ie.dispose(),Te.dispose(),kt.dispose(),yt.dispose(),G.dispose(),pe.dispose(),Ve.dispose(),Z.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",cn),ae.removeEventListener("sessionend",yo),En.stop()};function ue(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=_t.autoReset,F=Ee.enabled,W=Ee.autoUpdate,V=Ee.needsUpdate,B=Ee.type;U(),_t.autoReset=b,Ee.enabled=F,Ee.autoUpdate=W,Ee.needsUpdate=V,Ee.type=B}function re(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function J(b){const F=b.target;F.removeEventListener("dispose",J),we(F)}function we(b){We(b),Te.remove(b)}function We(b){const F=Te.get(b).programs;F!==void 0&&(F.forEach(function(W){Z.releaseProgram(W)}),b.isShaderMaterial&&Z.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,W,V,B,oe){F===null&&(F=Oe);const _e=B.isMesh&&B.matrixWorld.determinant()<0,N=To(b,F,W,V,B);Le.setMaterial(V,_e);let D=W.index,te=1;if(V.wireframe===!0){if(D=S.getWireframeAttribute(W),D===void 0)return;te=2}const Me=W.drawRange,be=W.attributes.position;let He=Me.start*te,it=(Me.start+Me.count)*te;oe!==null&&(He=Math.max(He,oe.start*te),it=Math.min(it,(oe.start+oe.count)*te)),D!==null?(He=Math.max(He,0),it=Math.min(it,D.count)):be!=null&&(He=Math.max(He,0),it=Math.min(it,be.count));const Ut=it-He;if(Ut<0||Ut===1/0)return;pe.setup(B,V,N,W,D);let Mt,gt=ve;if(D!==null&&(Mt=x.get(D),gt=Ue,gt.setIndex(Mt)),B.isMesh)V.wireframe===!0?(Le.setLineWidth(V.wireframeLinewidth*Ke()),gt.setMode(k.LINES)):gt.setMode(k.TRIANGLES);else if(B.isLine){let Be=V.linewidth;Be===void 0&&(Be=1),Le.setLineWidth(Be*Ke()),B.isLineSegments?gt.setMode(k.LINES):B.isLineLoop?gt.setMode(k.LINE_LOOP):gt.setMode(k.LINE_STRIP)}else B.isPoints?gt.setMode(k.POINTS):B.isSprite&&gt.setMode(k.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Jr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))gt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Be=B._multiDrawStarts,xt=B._multiDrawCounts,rt=B._multiDrawCount,mn=D?x.get(D).bytesPerElement:1,Ar=Te.get(V).currentProgram.getUniforms();for(let gn=0;gn<rt;gn++)Ar.setValue(k,"_gl_DrawID",gn),gt.render(Be[gn]/mn,xt[gn])}else if(B.isInstancedMesh)gt.renderInstances(He,Ut,B.count);else if(W.isInstancedBufferGeometry){const Be=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,xt=Math.min(W.instanceCount,Be);gt.renderInstances(He,Ut,xt)}else gt.render(He,Ut)};function at(b,F,W){b.transparent===!0&&b.side===bt&&b.forceSinglePass===!1?(b.side=fn,b.needsUpdate=!0,si(b,F,W),b.side=Oi,b.needsUpdate=!0,si(b,F,W),b.side=bt):si(b,F,W)}this.compile=function(b,F,W=null){W===null&&(W=b),f=Ie.get(W),f.init(F),w.push(f),W.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),b!==W&&b.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const V=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const oe=B.material;if(oe)if(Array.isArray(oe))for(let _e=0;_e<oe.length;_e++){const N=oe[_e];at(N,W,B),V.add(N)}else at(oe,W,B),V.add(oe)}),f=w.pop(),V},this.compileAsync=function(b,F,W=null){const V=this.compile(b,F,W);return new Promise(B=>{function oe(){if(V.forEach(function(_e){Te.get(_e).currentProgram.isReady()&&V.delete(_e)}),V.size===0){B(b);return}setTimeout(oe,10)}ke.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let nt=null;function pn(b){nt&&nt(b)}function cn(){En.stop()}function yo(){En.start()}const En=new Yd;En.setAnimationLoop(pn),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(b){nt=b,ae.setAnimationLoop(b),b===null?En.stop():En.start()},ae.addEventListener("sessionstart",cn),ae.addEventListener("sessionend",yo),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(F),F=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,F,L),f=Ie.get(b,w.length),f.init(F),w.push(f),le.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),lt.setFromProjectionMatrix(le,ti,F.reversedDepth),fe=this.localClippingEnabled,K=ce.init(this.clippingPlanes,fe),g=j.get(b,_.length),g.init(),_.push(g),ae.enabled===!0&&ae.isPresenting===!0){const oe=y.xr.getDepthSensingMesh();oe!==null&&Tr(oe,F,-1/0,y.sortObjects)}Tr(b,F,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(he,ge),Et=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Et&&Ae.addToRenderList(g,b),this.info.render.frame++,K===!0&&ce.beginShadows();const W=f.state.shadowsArray;Ee.render(W,b,F),K===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,B=g.transmissive;if(f.setupLights(),F.isArrayCamera){const oe=F.cameras;if(B.length>0)for(let _e=0,N=oe.length;_e<N;_e++){const D=oe[_e];Mo(V,B,b,D)}Et&&Ae.render(b);for(let _e=0,N=oe.length;_e<N;_e++){const D=oe[_e];ri(g,b,D,D.viewport)}}else B.length>0&&Mo(V,B,b,F),Et&&Ae.render(b),ri(g,b,F);L!==null&&R===0&&(qe.updateMultisampleRenderTarget(L),qe.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(y,b,F),pe.resetDefaultState(),M=-1,T=null,w.pop(),w.length>0?(f=w[w.length-1],K===!0&&ce.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Tr(b,F,W,V){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||lt.intersectsSprite(b)){V&&Fe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(le);const _e=G.update(b),N=b.material;N.visible&&g.push(b,_e,N,W,Fe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||lt.intersectsObject(b))){const _e=G.update(b),N=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Fe.copy(b.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Fe.copy(_e.boundingSphere.center)),Fe.applyMatrix4(b.matrixWorld).applyMatrix4(le)),Array.isArray(N)){const D=_e.groups;for(let te=0,Me=D.length;te<Me;te++){const be=D[te],He=N[be.materialIndex];He&&He.visible&&g.push(b,_e,He,W,Fe.z,be)}}else N.visible&&g.push(b,_e,N,W,Fe.z,null)}}const oe=b.children;for(let _e=0,N=oe.length;_e<N;_e++)Tr(oe[_e],F,W,V)}function ri(b,F,W,V){const B=b.opaque,oe=b.transmissive,_e=b.transparent;f.setupLightsView(W),K===!0&&ce.setGlobalState(y.clippingPlanes,W),V&&Le.viewport(I.copy(V)),B.length>0&&oi(B,F,W),oe.length>0&&oi(oe,F,W),_e.length>0&&oi(_e,F,W),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Mo(b,F,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new ur(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Ss:ii,minFilter:ir,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const oe=f.state.transmissionRenderTarget[V.id],_e=V.viewport||I;oe.setSize(_e.z*y.transmissionResolutionScale,_e.w*y.transmissionResolutionScale);const N=y.getRenderTarget(),D=y.getActiveCubeFace(),te=y.getActiveMipmapLevel();y.setRenderTarget(oe),y.getClearColor(X),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),Et&&Ae.render(W);const Me=y.toneMapping;y.toneMapping=ki;const be=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),K===!0&&ce.setGlobalState(y.clippingPlanes,V),oi(b,W,V),qe.updateMultisampleRenderTarget(oe),qe.updateRenderTargetMipmap(oe),ke.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let it=0,Ut=F.length;it<Ut;it++){const Mt=F[it],gt=Mt.object,Be=Mt.geometry,xt=Mt.material,rt=Mt.group;if(xt.side===bt&&gt.layers.test(V.layers)){const mn=xt.side;xt.side=fn,xt.needsUpdate=!0,br(gt,W,V,Be,xt,rt),xt.side=mn,xt.needsUpdate=!0,He=!0}}He===!0&&(qe.updateMultisampleRenderTarget(oe),qe.updateRenderTargetMipmap(oe))}y.setRenderTarget(N,D,te),y.setClearColor(X,$),be!==void 0&&(V.viewport=be),y.toneMapping=Me}function oi(b,F,W){const V=F.isScene===!0?F.overrideMaterial:null;for(let B=0,oe=b.length;B<oe;B++){const _e=b[B],N=_e.object,D=_e.geometry,te=_e.group;let Me=_e.material;Me.allowOverride===!0&&V!==null&&(Me=V),N.layers.test(W.layers)&&br(N,F,W,D,Me,te)}}function br(b,F,W,V,B,oe){b.onBeforeRender(y,F,W,V,B,oe),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(y,F,W,V,b,oe),B.transparent===!0&&B.side===bt&&B.forceSinglePass===!1?(B.side=fn,B.needsUpdate=!0,y.renderBufferDirect(W,F,V,B,b,oe),B.side=Oi,B.needsUpdate=!0,y.renderBufferDirect(W,F,V,B,b,oe),B.side=bt):y.renderBufferDirect(W,F,V,B,b,oe),b.onAfterRender(y,F,W,V,B,oe)}function si(b,F,W){F.isScene!==!0&&(F=Oe);const V=Te.get(b),B=f.state.lights,oe=f.state.shadowsArray,_e=B.state.version,N=Z.getParameters(b,B.state,oe,F,W),D=Z.getProgramCacheKey(N);let te=V.programs;V.environment=b.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(b.isMeshStandardMaterial?yt:kt).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,te===void 0&&(b.addEventListener("dispose",J),te=new Map,V.programs=te);let Me=te.get(D);if(Me!==void 0){if(V.currentProgram===Me&&V.lightsStateVersion===_e)return Er(b,N),Me}else N.uniforms=Z.getUniforms(b),b.onBeforeCompile(N,y),Me=Z.acquireProgram(N,D),te.set(D,Me),V.uniforms=N.uniforms;const be=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(be.clippingPlanes=ce.uniform),Er(b,N),V.needsLights=bo(b),V.lightsStateVersion=_e,V.needsLights&&(be.ambientLightColor.value=B.state.ambient,be.lightProbe.value=B.state.probe,be.directionalLights.value=B.state.directional,be.directionalLightShadows.value=B.state.directionalShadow,be.spotLights.value=B.state.spot,be.spotLightShadows.value=B.state.spotShadow,be.rectAreaLights.value=B.state.rectArea,be.ltc_1.value=B.state.rectAreaLTC1,be.ltc_2.value=B.state.rectAreaLTC2,be.pointLights.value=B.state.point,be.pointLightShadows.value=B.state.pointShadow,be.hemisphereLights.value=B.state.hemi,be.directionalShadowMap.value=B.state.directionalShadowMap,be.directionalShadowMatrix.value=B.state.directionalShadowMatrix,be.spotShadowMap.value=B.state.spotShadowMap,be.spotLightMatrix.value=B.state.spotLightMatrix,be.spotLightMap.value=B.state.spotLightMap,be.pointShadowMap.value=B.state.pointShadowMap,be.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Me,V.uniformsList=null,Me}function wr(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=pa.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Er(b,F){const W=Te.get(b);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function To(b,F,W,V,B){F.isScene!==!0&&(F=Oe),qe.resetTextureUnits();const oe=F.fog,_e=V.isMeshStandardMaterial?F.environment:null,N=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:lo,D=(V.isMeshStandardMaterial?yt:kt).get(V.envMap||_e),te=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Me=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),be=!!W.morphAttributes.position,He=!!W.morphAttributes.normal,it=!!W.morphAttributes.color;let Ut=ki;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ut=y.toneMapping);const Mt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,gt=Mt!==void 0?Mt.length:0,Be=Te.get(V),xt=f.state.lights;if(K===!0&&(fe===!0||b!==T)){const tn=b===T&&V.id===M;ce.setState(V,b,tn)}let rt=!1;V.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==xt.state.version||Be.outputColorSpace!==N||B.isBatchedMesh&&Be.batching===!1||!B.isBatchedMesh&&Be.batching===!0||B.isBatchedMesh&&Be.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Be.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Be.instancing===!1||!B.isInstancedMesh&&Be.instancing===!0||B.isSkinnedMesh&&Be.skinning===!1||!B.isSkinnedMesh&&Be.skinning===!0||B.isInstancedMesh&&Be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Be.instancingMorph===!1&&B.morphTexture!==null||Be.envMap!==D||V.fog===!0&&Be.fog!==oe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ce.numPlanes||Be.numIntersection!==ce.numIntersection)||Be.vertexAlphas!==te||Be.vertexTangents!==Me||Be.morphTargets!==be||Be.morphNormals!==He||Be.morphColors!==it||Be.toneMapping!==Ut||Be.morphTargetsCount!==gt)&&(rt=!0):(rt=!0,Be.__version=V.version);let mn=Be.currentProgram;rt===!0&&(mn=si(V,F,B));let Ar=!1,gn=!1,Co=!1;const Rt=mn.getUniforms(),An=Be.uniforms;if(Le.useProgram(mn.program)&&(Ar=!0,gn=!0,Co=!0),V.id!==M&&(M=V.id,gn=!0),Ar||T!==b){Le.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Rt.setValue(k,"projectionMatrix",b.projectionMatrix),Rt.setValue(k,"viewMatrix",b.matrixWorldInverse);const hn=Rt.map.cameraPosition;hn!==void 0&&hn.setValue(k,Ne.setFromMatrixPosition(b.matrixWorld)),Qe.logarithmicDepthBuffer&&Rt.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Rt.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),T!==b&&(T=b,gn=!0,Co=!0)}if(B.isSkinnedMesh){Rt.setOptional(k,B,"bindMatrix"),Rt.setOptional(k,B,"bindMatrixInverse");const tn=B.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Rt.setValue(k,"boneTexture",tn.boneTexture,qe))}B.isBatchedMesh&&(Rt.setOptional(k,B,"batchingTexture"),Rt.setValue(k,"batchingTexture",B._matricesTexture,qe),Rt.setOptional(k,B,"batchingIdTexture"),Rt.setValue(k,"batchingIdTexture",B._indirectTexture,qe),Rt.setOptional(k,B,"batchingColorTexture"),B._colorsTexture!==null&&Rt.setValue(k,"batchingColorTexture",B._colorsTexture,qe));const Cn=W.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&ie.update(B,W,mn),(gn||Be.receiveShadow!==B.receiveShadow)&&(Be.receiveShadow=B.receiveShadow,Rt.setValue(k,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(An.envMap.value=D,An.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(An.envMapIntensity.value=F.environmentIntensity),gn&&(Rt.setValue(k,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&xs(An,Co),oe&&V.fog===!0&&ne.refreshFogUniforms(An,oe),ne.refreshMaterialUniforms(An,V,q,ee,f.state.transmissionRenderTarget[b.id]),pa.upload(k,wr(Be),An,qe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(pa.upload(k,wr(Be),An,qe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Rt.setValue(k,"center",B.center),Rt.setValue(k,"modelViewMatrix",B.modelViewMatrix),Rt.setValue(k,"normalMatrix",B.normalMatrix),Rt.setValue(k,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const tn=V.uniformsGroups;for(let hn=0,fl=tn.length;hn<fl;hn++){const Vi=tn[hn];Ve.update(Vi,mn),Ve.bind(Vi,mn)}}return mn}function xs(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function bo(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,F,W){const V=Te.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Te.get(b.texture).__webglTexture=F,Te.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const W=Te.get(b);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const wo=k.createFramebuffer();this.setRenderTarget=function(b,F=0,W=0){L=b,A=F,R=W;let V=!0,B=null,oe=!1,_e=!1;if(b){const D=Te.get(b);if(D.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(k.FRAMEBUFFER,null),V=!1;else if(D.__webglFramebuffer===void 0)qe.setupRenderTarget(b);else if(D.__hasExternalTextures)qe.rebindTextures(b,Te.get(b.texture).__webglTexture,Te.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const be=b.depthTexture;if(D.__boundDepthTexture!==be){if(be!==null&&Te.has(be)&&(b.width!==be.image.width||b.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(b)}}const te=b.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(_e=!0);const Me=Te.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Me[F])?B=Me[F][W]:B=Me[F],oe=!0):b.samples>0&&qe.useMultisampledRTT(b)===!1?B=Te.get(b).__webglMultisampledFramebuffer:Array.isArray(Me)?B=Me[W]:B=Me,I.copy(b.viewport),H.copy(b.scissor),z=b.scissorTest}else I.copy(Se).multiplyScalar(q).floor(),H.copy(Re).multiplyScalar(q).floor(),z=Ze;if(W!==0&&(B=wo),Le.bindFramebuffer(k.FRAMEBUFFER,B)&&V&&Le.drawBuffers(b,B),Le.viewport(I),Le.scissor(H),Le.setScissorTest(z),oe){const D=Te.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,D.__webglTexture,W)}else if(_e){const D=F;for(let te=0;te<b.textures.length;te++){const Me=Te.get(b.textures[te]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+te,Me.__webglTexture,W,D)}}else if(b!==null&&W!==0){const D=Te.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,D.__webglTexture,W)}M=-1},this.readRenderTargetPixels=function(b,F,W,V,B,oe,_e,N=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let D=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(D=D[_e]),D){Le.bindFramebuffer(k.FRAMEBUFFER,D);try{const te=b.textures[N],Me=te.format,be=te.type;if(!Qe.textureFormatReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-V&&W>=0&&W<=b.height-B&&(b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+N),k.readPixels(F,W,V,B,Ce.convert(Me),Ce.convert(be),oe))}finally{const te=L!==null?Te.get(L).__webglFramebuffer:null;Le.bindFramebuffer(k.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(b,F,W,V,B,oe,_e,N=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let D=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(D=D[_e]),D)if(F>=0&&F<=b.width-V&&W>=0&&W<=b.height-B){Le.bindFramebuffer(k.FRAMEBUFFER,D);const te=b.textures[N],Me=te.format,be=te.type;if(!Qe.textureFormatReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.bufferData(k.PIXEL_PACK_BUFFER,oe.byteLength,k.STREAM_READ),b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+N),k.readPixels(F,W,V,B,Ce.convert(Me),Ce.convert(be),0);const it=L!==null?Te.get(L).__webglFramebuffer:null;Le.bindFramebuffer(k.FRAMEBUFFER,it);const Ut=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await jp(k,Ut,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,oe),k.deleteBuffer(He),k.deleteSync(Ut),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,W=0){const V=Math.pow(2,-W),B=Math.floor(b.image.width*V),oe=Math.floor(b.image.height*V),_e=F!==null?F.x:0,N=F!==null?F.y:0;qe.setTexture2D(b,0),k.copyTexSubImage2D(k.TEXTURE_2D,W,0,0,_e,N,B,oe),Le.unbindTexture()};const Eo=k.createFramebuffer(),Ao=k.createFramebuffer();this.copyTextureToTexture=function(b,F,W=null,V=null,B=0,oe=null){oe===null&&(B!==0?(Jr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=B,B=0):oe=0);let _e,N,D,te,Me,be,He,it,Ut;const Mt=b.isCompressedTexture?b.mipmaps[oe]:b.image;if(W!==null)_e=W.max.x-W.min.x,N=W.max.y-W.min.y,D=W.isBox3?W.max.z-W.min.z:1,te=W.min.x,Me=W.min.y,be=W.isBox3?W.min.z:0;else{const Cn=Math.pow(2,-B);_e=Math.floor(Mt.width*Cn),N=Math.floor(Mt.height*Cn),b.isDataArrayTexture?D=Mt.depth:b.isData3DTexture?D=Math.floor(Mt.depth*Cn):D=1,te=0,Me=0,be=0}V!==null?(He=V.x,it=V.y,Ut=V.z):(He=0,it=0,Ut=0);const gt=Ce.convert(F.format),Be=Ce.convert(F.type);let xt;F.isData3DTexture?(qe.setTexture3D(F,0),xt=k.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(qe.setTexture2DArray(F,0),xt=k.TEXTURE_2D_ARRAY):(qe.setTexture2D(F,0),xt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);const rt=k.getParameter(k.UNPACK_ROW_LENGTH),mn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ar=k.getParameter(k.UNPACK_SKIP_PIXELS),gn=k.getParameter(k.UNPACK_SKIP_ROWS),Co=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Mt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,te),k.pixelStorei(k.UNPACK_SKIP_ROWS,Me),k.pixelStorei(k.UNPACK_SKIP_IMAGES,be);const Rt=b.isDataArrayTexture||b.isData3DTexture,An=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const Cn=Te.get(b),tn=Te.get(F),hn=Te.get(Cn.__renderTarget),fl=Te.get(tn.__renderTarget);Le.bindFramebuffer(k.READ_FRAMEBUFFER,hn.__webglFramebuffer),Le.bindFramebuffer(k.DRAW_FRAMEBUFFER,fl.__webglFramebuffer);for(let Vi=0;Vi<D;Vi++)Rt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Te.get(b).__webglTexture,B,be+Vi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Te.get(F).__webglTexture,oe,Ut+Vi)),k.blitFramebuffer(te,Me,_e,N,He,it,_e,N,k.DEPTH_BUFFER_BIT,k.NEAREST);Le.bindFramebuffer(k.READ_FRAMEBUFFER,null),Le.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||Te.has(b)){const Cn=Te.get(b),tn=Te.get(F);Le.bindFramebuffer(k.READ_FRAMEBUFFER,Eo),Le.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ao);for(let hn=0;hn<D;hn++)Rt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Cn.__webglTexture,B,be+hn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Cn.__webglTexture,B),An?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,tn.__webglTexture,oe,Ut+hn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,tn.__webglTexture,oe),B!==0?k.blitFramebuffer(te,Me,_e,N,He,it,_e,N,k.COLOR_BUFFER_BIT,k.NEAREST):An?k.copyTexSubImage3D(xt,oe,He,it,Ut+hn,te,Me,_e,N):k.copyTexSubImage2D(xt,oe,He,it,te,Me,_e,N);Le.bindFramebuffer(k.READ_FRAMEBUFFER,null),Le.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else An?b.isDataTexture||b.isData3DTexture?k.texSubImage3D(xt,oe,He,it,Ut,_e,N,D,gt,Be,Mt.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D(xt,oe,He,it,Ut,_e,N,D,gt,Mt.data):k.texSubImage3D(xt,oe,He,it,Ut,_e,N,D,gt,Be,Mt):b.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,oe,He,it,_e,N,gt,Be,Mt.data):b.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,oe,He,it,Mt.width,Mt.height,gt,Mt.data):k.texSubImage2D(k.TEXTURE_2D,oe,He,it,_e,N,gt,Be,Mt);k.pixelStorei(k.UNPACK_ROW_LENGTH,rt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,mn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ar),k.pixelStorei(k.UNPACK_SKIP_ROWS,gn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Co),oe===0&&F.generateMipmaps&&k.generateMipmap(xt),Le.unbindTexture()},this.copyTextureToTexture3D=function(b,F,W=null,V=null,B=0){return Jr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,F,W,V,B)},this.initRenderTarget=function(b){Te.get(b).__webglFramebuffer===void 0&&qe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?qe.setTextureCube(b,0):b.isData3DTexture?qe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?qe.setTexture2DArray(b,0):qe.setTexture2D(b,0),Le.unbindTexture()},this.resetState=function(){A=0,R=0,L=null,Le.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(t),n.unpackColorSpace=ot._getUnpackColorSpace()}}function v_(e,t=!1){const n=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),o={},s={},a=e[0].morphTargetsRelative,l=new Gt;let h=0;for(let d=0;d<e.length;++d){const u=e[d];let p=0;if(n!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const c in u.attributes){if(!i.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+c+'" attribute exists among all geometries, or in none of them.'),null;o[c]===void 0&&(o[c]=[]),o[c].push(u.attributes[c]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const c in u.morphAttributes){if(!r.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;s[c]===void 0&&(s[c]=[]),s[c].push(u.morphAttributes[c])}if(t){let c;if(n)c=u.index.count;else if(u.attributes.position!==void 0)c=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,c,d),h+=c}}if(n){let d=0;const u=[];for(let p=0;p<e.length;++p){const c=e[p].index;for(let m=0;m<c.count;++m)u.push(c.getX(m)+d);d+=e[p].attributes.position.count}l.setIndex(u)}for(const d in o){const u=Zu(o[d]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,u)}for(const d in s){const u=s[d][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let p=0;p<u;++p){const c=[];for(let v=0;v<s[d].length;++v)c.push(s[d][v][p]);const m=Zu(c);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(m)}}return l}function Zu(e){let t,n,i,r=-1,o=0;for(let h=0;h<e.length;++h){const d=e[h];if(t===void 0&&(t=d.array.constructor),t!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=d.itemSize),n!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=d.normalized),i!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=d.gpuType),r!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=d.count*n}const s=new t(o),a=new bn(s,n,i);let l=0;for(let h=0;h<e.length;++h){const d=e[h];if(d.isInterleavedBufferAttribute){const u=l/n;for(let p=0,c=d.count;p<c;p++)for(let m=0;m<n;m++){const v=d.getComponent(p,m);a.setComponent(p+u,m,v)}}else s.set(d.array,l);l+=d.count*n}return r!==void 0&&(a.gpuType=r),a}const St=32,Ya=10,__=180,Di=28,as=12,jo=10,ef=2,S_=1.5,y_=1.5,M_=2,T_=Math.SQRT1_2,Ta=2,b_=7.1,w_=3.3,di=2.5,tf=.95,nf=1.05,ls=.65,rf=1.5,cs=rf*4,ba=cs/2,E_=new Lm;function A_(e){return Math.max(0,Math.floor(e/10)-1)}function ho(e,t=!1){const n=A_(e);return t&&e>=30?Math.max(0,n-2):n}function Ku(e,t=!1){return Math.pow(tf,ho(e,t))}function C_(e,t=!1){return Math.pow(nf,ho(e,t))}function eo(e,t=!1){return Math.pow(nf,ho(e,t))}function P_(e,t=!1){return M_*Math.pow(tf,ho(e,t))}const xe=new Od;xe.background=new ze(1583683);xe.fog=new ph(1583683,39,78);const jt=new Sh(-(Di*innerWidth/innerHeight)/2,Di*innerWidth/innerHeight/2,Di/2,-Di/2,.1,100);jt.position.set(0,29,8);jt.up.set(0,1,0);const Pt=new Qd({antialias:!0,powerPreference:"high-performance"}),of=Math.min(devicePixelRatio,1.08),Ju=Math.min(of,.72);let $r=of,$a=!1;Pt.setPixelRatio($r);Pt.setSize(innerWidth,innerHeight);Pt.shadowMap.enabled=!0;Pt.shadowMap.type=eh;Pt.shadowMap.autoUpdate=!1;Pt.shadowMap.needsUpdate=!0;Pt.outputColorSpace=Wt;Pt.toneMapping=Md;Pt.toneMappingExposure=1.27;document.querySelector("#game").appendChild(Pt.domElement);xe.add(new Vd(14282751,5399114,2.35));const Wi=new qd(16774367,3.55);Wi.position.set(-12,20,-8);Wi.castShadow=!0;Wi.shadow.mapSize.set(1024,1024);Wi.shadow.camera.left=-42;Wi.shadow.camera.right=42;Wi.shadow.camera.top=42;Wi.shadow.camera.bottom=-42;xe.add(Wi);function sf(e=48271){let t=e%2147483647;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}function x_(){const e=document.createElement("canvas");e.width=1024,e.height=1024;const t=e.getContext("2d"),n=sf(9137),i=t.createRadialGradient(512,470,60,512,512,710);i.addColorStop(0,"#47708d"),i.addColorStop(.48,"#3a5d7b"),i.addColorStop(1,"#2a4661"),t.fillStyle=i,t.fillRect(0,0,1024,1024);for(let o=0;o<460;o+=1){const s=n()*1024,a=n()*1024,l=1+n()*5;t.fillStyle=n()>.46?`rgba(166,215,235,${.02+n()*.038})`:`rgba(9,30,48,${.02+n()*.038})`,t.beginPath(),t.arc(s,a,l,0,Math.PI*2),t.fill()}t.lineCap="round";for(let o=0;o<90;o+=1){let s=n()*1024,a=n()*1024;t.beginPath(),t.moveTo(s,a);for(let l=0;l<2+Math.floor(n()*3);l+=1)s+=(n()-.5)*38,a+=(n()-.5)*38,t.lineTo(s,a);t.strokeStyle=`rgba(8,19,32,${.08+n()*.08})`,t.lineWidth=1+n()*2,t.stroke()}t.strokeStyle="rgba(148,222,239,.11)",t.lineWidth=3;for(let o=90;o<1024;o+=92)t.beginPath(),t.moveTo(o,0),t.lineTo(o,1024),t.stroke(),t.beginPath(),t.moveTo(0,o),t.lineTo(1024,o),t.stroke();const r=new vo(e);return r.colorSpace=Wt,r.anisotropy=Pt.capabilities.getMaxAnisotropy(),r}function R_(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,512,512);n.addColorStop(0,"#102b48"),n.addColorStop(.5,"#174263"),n.addColorStop(1,"#0b243f"),t.fillStyle=n,t.fillRect(0,0,512,512),t.strokeStyle="rgba(109,218,239,.14)",t.lineWidth=3;for(let r=-40;r<560;r+=38){t.beginPath();for(let o=-20;o<=540;o+=12){const s=r+Math.sin(o*.035+r)*7;o===-20?t.moveTo(o,s):t.lineTo(o,s)}t.stroke()}const i=new vo(e);return i.colorSpace=Wt,i.wrapS=es,i.wrapT=es,i.repeat.set(8,8),i}const Vc=R_(),ja=new O(new _o(180,180),new de({map:Vc,color:6926026,emissive:665924,emissiveIntensity:.36,roughness:.34,metalness:.18}));ja.rotation.x=-Math.PI/2;ja.position.y=-1.18;ja.receiveShadow=!0;xe.add(ja);const Th=new O(new st(St+1,St+1.8,.8,64),new de({color:3231340,roughness:.83,metalness:.08}));Th.position.y=-.42;Th.receiveShadow=!0;xe.add(Th);const Za=new O(new Wn(St-.18,96),new de({map:x_(),roughness:.92,metalness:.04}));Za.rotation.x=-Math.PI/2;Za.position.y=.006;Za.receiveShadow=!0;xe.add(Za);const Ka=new yh(62,31,6727103,4746375);Ka.position.y=.024;Ka.material.transparent=!0;Ka.material.opacity=.17;xe.add(Ka);const Ja=new O(new Wn(7.2,48),new de({color:3891326,roughness:.88,metalness:.05}));Ja.rotation.x=-Math.PI/2;Ja.position.y=.03;Ja.receiveShadow=!0;xe.add(Ja);for(const[e,t,n]of[[5,7333631,.2],[11,9087176,.13],[21.5,9087176,.09]]){const i=new O(new kn(e-.06,e+.06,72),new je({color:t,transparent:!0,opacity:n,side:bt}));i.rotation.x=-Math.PI/2,i.position.y=.04,xe.add(i)}const bh=new O(new It(St,.22,10,96),new de({color:6019063,emissive:1461350,emissiveIntensity:2}));bh.rotation.x=Math.PI/2;bh.position.y=.08;xe.add(bh);const Qa=new O(new It(St+.65,.7,10,96),new de({color:1583936,roughness:.42,metalness:.48}));Qa.rotation.x=Math.PI/2;Qa.position.y=-.44;Qa.castShadow=!0;xe.add(Qa);const se=new zt,Mn=[{x:-9.2,z:1.2,width:5.8,depth:.95,height:1.55,yaw:0},{x:9.2,z:1.2,width:5.8,depth:.95,height:1.55,yaw:0},{x:-5.5,z:13.1,width:5.2,depth:.95,height:1.55,yaw:-.48},{x:5.5,z:13.1,width:5.2,depth:.95,height:1.55,yaw:.48},{x:-14.5,z:-14.2,width:4.8,depth:.95,height:1.55,yaw:.78},{x:14.5,z:-14.2,width:4.8,depth:.95,height:1.55,yaw:-.78}],el=new Lt(new Pe(1,1,1),new de({color:3561333,roughness:.68,metalness:.22}),Mn.length),tl=new Lt(new Pe(1,1,1),new de({color:7575213,roughness:.48,metalness:.3}),Mn.length),nl=new Lt(new Pe(1,1,1),new de({color:2704991,roughness:.58,metalness:.3}),Mn.length*2),af=new Lt(new Pe(1,1,1),new je({color:6806518,transparent:!0,opacity:.72}),Mn.length*2);el.castShadow=!0;el.receiveShadow=!0;tl.castShadow=!0;tl.receiveShadow=!0;nl.castShadow=!0;nl.receiveShadow=!0;Mn.forEach((e,t)=>{const n=Math.cos(e.yaw),i=Math.sin(e.yaw);se.position.set(e.x,e.height/2,e.z),se.rotation.set(0,e.yaw,0),se.scale.set(e.width,e.height,e.depth),se.updateMatrix(),el.setMatrixAt(t,se.matrix),se.position.set(e.x,e.height+.07,e.z),se.scale.set(e.width+.18,.14,e.depth+.18),se.updateMatrix(),tl.setMatrixAt(t,se.matrix);for(const[r,o]of[-1,1].entries()){const s=o*(e.width/2-.18);se.position.set(e.x+s*n,(e.height+.22)/2,e.z-s*i),se.rotation.set(0,e.yaw,0),se.scale.set(.38,e.height+.22,e.depth+.13),se.updateMatrix(),nl.setMatrixAt(t*2+r,se.matrix);const a=o*(e.depth/2+.015);se.position.set(e.x+a*i,e.height*.56,e.z+a*n),se.scale.set(e.width*.78,.075,.035),se.updateMatrix(),af.setMatrixAt(t*2+r,se.matrix)}});for(const e of[el,tl,nl,af])e.instanceMatrix.needsUpdate=!0,xe.add(e);const Gi=new Lt(new Va(1,0),new _r({color:16777215}),26);Gi.castShadow=!0;Gi.receiveShadow=!0;for(let e=0;e<26;e+=1){const t=e/26*Math.PI*2,n=e%2?25.5:29,i=.45+e%3*.13;se.position.set(Math.sin(t)*n,.36,Math.cos(t)*n),se.rotation.set(t,t*.7,t*.35),se.scale.setScalar(i),se.updateMatrix(),Gi.setMatrixAt(e,se.matrix),Gi.setColorAt(e,new ze(e%2?3230819:3562094))}Gi.instanceMatrix.needsUpdate=!0;Gi.instanceColor.needsUpdate=!0;xe.add(Gi);const yi=new De;xe.add(yi);const vt=sf(22817),lf=new _r({color:3229789}),cf=new _r({color:4028011}),I_=new _r({color:6001274}),il=new _r({color:5732493,emissive:1055782,emissiveIntensity:.24}),D_=new je({color:9564159,transparent:!0,opacity:.95}),Ms=new Lt(new Va(1,0),lf,34);Ms.castShadow=!0;for(let e=0;e<34;e+=1){const t=vt()*Math.PI*2,n=19+vt()*11.5,i=.1+vt()*.22,r=.35+vt()*.45;se.position.set(Math.sin(t)*n,.1,Math.cos(t)*n),se.rotation.set(vt()*2,vt()*2,vt()*2),se.scale.set(i,i*r,i),se.updateMatrix(),Ms.setMatrixAt(e,se.matrix)}Ms.instanceMatrix.needsUpdate=!0;yi.add(Ms);const rl=new Lt(new st(.06,.1,.55,6),new _r({color:5521198}),20),ol=new Lt(new Xa(1,0),cf,40),sl=new Lt(new Xa(1,0),I_,40);rl.castShadow=!0;ol.castShadow=!0;sl.castShadow=!0;let L_=0,k_=0;for(let e=0;e<20;e+=1){const t=e/20*Math.PI*2+vt()*.16,n=26.1+vt()*3.9,i=new P(Math.sin(t)*n,0,Math.cos(t)*n),r=[];for(let s=0;s<4;s+=1)r.push({leaf:s,size:.28+vt()*.12,x:(vt()-.5)*.42,y:.55+vt()*.27,z:(vt()-.5)*.42,scaleY:.7+vt()*.45});const o=.72+vt()*.6;se.position.set(i.x,.3*o,i.z),se.rotation.set(0,0,0),se.scale.setScalar(o),se.updateMatrix(),rl.setMatrixAt(e,se.matrix);for(const s of r){const a=s.leaf%2?ol:sl,l=s.leaf%2?L_++:k_++,h=s.size*o;se.position.set(i.x+s.x*o,s.y*o,i.z+s.z*o),se.rotation.set(0,0,0),se.scale.set(h,h*s.scaleY,h),se.updateMatrix(),a.setMatrixAt(l,se.matrix)}}for(const e of[rl,ol,sl])e.instanceMatrix.needsUpdate=!0,yi.add(e);const al=new Lt(new st(.38,.5,.24,10),il,12),ll=new Lt(new st(.09,.14,1.8,9),il,12),cl=new Lt(new wn(.38,0),il,12),wh=new Lt(new dt(.19,10,8),D_,12),U_=[];for(let e=0;e<12;e+=1){const t=e/12*Math.PI*2,n=30.25,i=Math.sin(t)*n,r=Math.cos(t)*n;for(const[o,s,a]of[[al,.12,1],[ll,1.05,1],[cl,2.08,1.3],[wh,2.08,1]])se.position.set(i,s,r),se.rotation.set(0,t,0),se.scale.set(1,a,1),se.updateMatrix(),o.setMatrixAt(e,se.matrix);if(U_.push({index:e,phase:e*.73,position:new P(i,2.08,r)}),e%6===0){const o=new _h(6675711,4.5,7,2);o.position.set(i,2.08,r),yi.add(o)}}for(const e of[al,ll,cl,wh])e.instanceMatrix.needsUpdate=!0,yi.add(e);al.castShadow=!0;ll.castShadow=!0;cl.castShadow=!0;const Ts=new Lt(new st(.18,.26,1,8),lf,12),bs=new Lt(new Pe(1.55,.2,.48),il,6);Ts.castShadow=!0;bs.castShadow=!0;let N_=0;for(let e=0;e<6;e+=1){const t=e/6*Math.PI*2+.34,n=27.7+e%2*1.25,i=Math.sin(t)*n,r=Math.cos(t)*n;for(const s of[-.55,.55]){const a=.75+vt()*1.2,l=(vt()-.5)*.18;se.position.set(i+Math.cos(t)*s,.02+a/2,r-Math.sin(t)*s),se.rotation.set(0,t,l),se.scale.set(1,a,1),se.updateMatrix(),Ts.setMatrixAt(N_++,se.matrix)}const o=(vt()-.5)*.15;se.position.set(i,1.22,r),se.rotation.set(0,t,o),se.scale.set(1,1,1),se.updateMatrix(),bs.setMatrixAt(e,se.matrix)}Ts.instanceMatrix.needsUpdate=!0;bs.instanceMatrix.needsUpdate=!0;yi.add(Ts,bs);const F_=new _r({color:16777215}),wa=[7,8,9].map(e=>new Lt(new an(1,1,e),F_,6)),hl=new Lt(new st(.7,1.8,.36,8),cf,18),B_=[0,0,0];for(let e=0;e<18;e+=1){const t=e/18*Math.PI*2+vt()*.12,n=39+vt()*21,i=4+vt()*7,r=2.2+vt()*3.6,o=vt()*Math.PI,s=1.8+vt(),a=Math.sin(t)*n,l=Math.cos(t)*n,h=e%3,d=B_[h]++;se.position.set(a,-1.1+i/2,l),se.rotation.set(0,o,0),se.scale.set(r,i,r),se.updateMatrix(),wa[h].setMatrixAt(d,se.matrix),wa[h].setColorAt(d,new ze(e%2?1848649:2376278));const u=s/1.8;se.position.set(a,-.86+i,l),se.rotation.set(0,0,0),se.scale.set(1.4*u,1,u),se.updateMatrix(),hl.setMatrixAt(e,se.matrix)}for(const e of wa)e.castShadow=!0,e.instanceMatrix.needsUpdate=!0,e.instanceColor.needsUpdate=!0,yi.add(e);hl.instanceMatrix.needsUpdate=!0;yi.add(hl);const O_=new je({color:9235711,transparent:!0,opacity:.74}),ul=new Lt(new Pe(.18,.04,.72),O_,12);for(let e=0;e<12;e+=1){const t=e/12*Math.PI*2;se.position.set(Math.sin(t)*6.4,.065,Math.cos(t)*6.4),se.rotation.set(0,t,0),se.scale.set(1,1,1),se.updateMatrix(),ul.setMatrixAt(e,se.matrix)}ul.instanceMatrix.needsUpdate=!0;yi.add(ul);const Qu={boundary:[Gi],pebbles:[Ms],shrubs:[rl,ol,sl],lanterns:[al,ll,cl,wh],ruins:[Ts,bs],islands:[...wa,hl],runes:[ul]},hf=[];for(let e=0;e<150;e+=1){const t=vt()*Math.PI*2,n=7+Math.sqrt(vt())*24;hf.push(Math.sin(t)*n,.35+vt()*3.8,Math.cos(t)*n)}const uf=new Gt;uf.setAttribute("position",new tt(hf,3));const Ea=new Cm(uf,new Hd({color:9562879,size:.075,transparent:!0,opacity:.5,depthWrite:!1}));xe.add(Ea);const z_=document.querySelector("#player-number"),G_=document.querySelector("#weapon"),df=document.querySelector("#timer"),Xc=document.querySelector("#message");document.querySelector("#leader-hud");const Oo=document.querySelector("#leader-arrow"),oa=document.querySelector("#leader-text"),Aa=document.querySelector("#respawn-hud"),Eh=document.querySelector("#respawn-time"),qc=document.querySelector("#hit-flash"),Ca=document.querySelector("#audio-toggle"),ff=document.querySelector("#start-screen"),Ln=document.querySelector("#start-button"),ed=document.querySelector("#online-status"),Pa=document.querySelector("#online-name"),uo=document.querySelector("#create-room-button"),Zo=document.querySelector("#room-code-input"),dr=document.querySelector("#join-room-button"),pf=document.querySelector("#room-info"),H_=document.querySelector("#room-code-display"),W_=document.querySelector("#room-player-count"),V_=document.querySelector("#room-roster"),td=document.querySelector("#copy-invite-button"),X_=document.querySelector("#leave-room-button"),hs=document.querySelector("#result-screen"),qr=hs.querySelector(".result-card"),mf=hs.querySelector(".result-crown"),Qi=document.querySelector("#result-title"),gf=document.querySelector("#result-summary"),Ki=document.querySelector("#result-avatar"),vf=document.querySelector("#result-player-rank"),_f=document.querySelector("#result-player-number"),xa=document.querySelector("#result-ranking-list"),q_=document.querySelector("#rematch-button");let ma=0,jr=0,Ra=0,Vn=0,wt="solo",fr=null,us="",to=0,Zr=0,Ia=!1,ds=!1,Ui=null,Vo=0,qn="",rr="",Zn=0,pr=[],Da=0,La=0,Sf=0,nd=0,Y_=1,$_=0,Yc=[],ka=!1;const or=new Map,no=new Map,Xo=new Map;let mi=!0,xn=null,ni=null,Ua=null;const Ko={},id=new Map;function Ah(){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;if(!xn){xn=new e,ni=xn.createGain(),ni.gain.value=mi?.36:0,ni.connect(xn.destination),Ua=xn.createBuffer(1,xn.sampleRate,xn.sampleRate);const t=Ua.getChannelData(0);for(let n=0;n<t.length;n+=1)t[n]=Math.random()*2-1}return xn.state==="suspended"&&xn.resume().catch(()=>{}),xn}function Ft(e,t,n,i,r,o="sine",s=0){const a=e.currentTime+s,l=e.createOscillator(),h=e.createGain();l.type=o,l.frequency.setValueAtTime(Math.max(20,t),a),l.frequency.exponentialRampToValueAtTime(Math.max(20,n),a+i),h.gain.setValueAtTime(1e-4,a),h.gain.linearRampToValueAtTime(r,a+Math.min(.008,i*.2)),h.gain.exponentialRampToValueAtTime(1e-4,a+i),l.connect(h).connect(ni),l.start(a),l.stop(a+i+.02)}function Pi(e,t,n,i,r="lowpass",o=0){if(!Ua)return;const s=e.currentTime+o,a=e.createBufferSource(),l=e.createBiquadFilter(),h=e.createGain();a.buffer=Ua,l.type=r,l.frequency.value=i,h.gain.setValueAtTime(Math.max(1e-4,n),s),h.gain.exponentialRampToValueAtTime(1e-4,s+t),a.connect(l).connect(h).connect(ni),a.start(s),a.stop(s+t+.02)}function Nt(e){if(Ko[e]=(Ko[e]||0)+1,!mi)return;const t={swing:80,hit:55,backHit:70,pickupNumber:65,wallImpact:60}[e]||0,n=performance.now();if(t&&n-(id.get(e)||-1/0)<t)return;id.set(e,n);const i=Ah();!i||!ni||(e==="swing"?(Pi(i,.09,.065,1500,"bandpass"),Ft(i,240,115,.09,.035,"triangle")):e==="hit"?(Pi(i,.1,.105,780),Ft(i,135,72,.11,.07,"sine")):e==="backHit"?(Pi(i,.16,.15,980),Ft(i,265,78,.17,.095,"square")):e==="blocked"?(Ft(i,740,410,.12,.06,"triangle"),Ft(i,980,620,.08,.032,"sine",.025)):e==="shield"?Ft(i,820,1180,.18,.055,"sine"):e==="smg"?(Pi(i,.06,.095,1550),Ft(i,175,95,.065,.052,"square")):e==="sniper"?(Pi(i,.18,.16,1250),Ft(i,185,55,.2,.1,"sawtooth")):e==="rocket"?(Pi(i,.18,.11,900),Ft(i,105,52,.22,.085,"sawtooth")):e==="explosion"?(Pi(i,.52,.2,620),Ft(i,82,32,.5,.14,"sine")):e==="wallImpact"?(Pi(i,.07,.085,1100),Ft(i,185,105,.08,.04,"triangle")):e==="pickupNumber"?Ft(i,660,840,.09,.035,"sine"):e==="pickup"?(Ft(i,430,620,.11,.05,"sine"),Ft(i,650,920,.13,.045,"sine",.07)):e==="countdown"?Ft(i,680,650,.1,.042,"sine"):e==="countdownFinal"?Ft(i,880,760,.14,.065,"square"):e==="victory"?[523,659,784,1047].forEach((r,o)=>Ft(i,r,r,.26,.055,"triangle",o*.11)):e==="roundEnd"?[420,350,280].forEach((r,o)=>Ft(i,r,r*.94,.2,.045,"sine",o*.1)):e==="defeat"?Ft(i,210,72,.42,.09,"sawtooth"):e==="start"&&(Ft(i,420,620,.14,.045,"triangle"),Ft(i,620,880,.16,.04,"triangle",.1)))}function yf(){Ca.setAttribute("aria-pressed",String(mi)),Ca.textContent=mi?"🔊 声音开":"🔇 声音关"}Ca.addEventListener("click",()=>{mi=!mi;const e=Ah();e&&ni&&(ni.gain.cancelScheduledValues(e.currentTime),ni.gain.setTargetAtTime(mi?.36:0,e.currentTime,.018)),yf(),mi&&Nt("pickup")});yf();function et(e,t=1.15){Xc.textContent=e,Xc.classList.add("show"),ma=t}function Sr(e,t="#ffffff"){const n=document.createElement("canvas");n.width=256,n.height=128;const i=new vo(n);i.colorSpace=Wt;const r=new $o(new ss({map:i,transparent:!0,depthTest:!1,toneMapped:!1}));return r.scale.set(2.5,1.25,1),r.userData={canvas:n,texture:i,value:null,color:t},ws(r,e),r}function Dt(e){return typeof e=="string"?e:`#${new ze(e).getHexString()}`}function Xe(e,t){const n=new ze(e);return t>=0?n.lerp(new ze(16777215),t):n.lerp(new ze(329743),-t),`#${n.getHexString()}`}function j_({shirtColor:e,pantsColor:t,shoeColor:n,skinColor:i,hairColor:r,hairStyle:o,outfitStyle:s,pantsStyle:a,shoesStyle:l,weaponType:h,meleeWeapon:d,meleeStyle:u}){const p=document.createElement("canvas");p.width=400,p.height=560;const c=p.getContext("2d");c.lineCap="round",c.lineJoin="round";const m="#2b1c22",v=Dt(e),g=Dt(t),f=Dt(n),_=Dt(i),w=Dt(r),y=(z,X,$)=>{c.beginPath(),c.moveTo(z[0][0],z[0][1]);for(let Y=1;Y<z.length;Y+=1)c.lineTo(z[Y][0],z[Y][1]);c.strokeStyle=m,c.lineWidth=$+12,c.stroke(),c.strokeStyle=X,c.lineWidth=$,c.stroke()},C=(z,X,$,Y,ee,q=m,he=7)=>{c.beginPath(),c.ellipse(z,X,$,Y,0,0,Math.PI*2),c.fillStyle=ee,c.fill(),q&&he>0&&(c.strokeStyle=q,c.lineWidth=he,c.stroke())},A=(z,X,$=m,Y=7)=>{c.beginPath(),c.moveTo(z[0][0],z[0][1]),z.slice(1).forEach(([ee,q])=>c.lineTo(ee,q)),c.closePath(),c.fillStyle=X,c.fill(),$&&(c.strokeStyle=$,c.lineWidth=Y,c.stroke())};if(c.save(),c.shadowColor="rgba(0,0,0,.32)",c.shadowBlur=10,c.shadowOffsetY=6,["trench","robe","armor"].includes(s)){const z=s==="armor"?"#2157a5":Xe(v,-.18);A([[142,260],[258,260],[292,432],[200,400],[108,432]],z,m,8)}const R=a==="shorts";y([[171,365],[164,438],[153,493]],R?_:g,34),y([[229,365],[236,438],[247,493]],R?_:g,34),R&&(A([[140,350],[198,347],[195,401],[145,402]],g,m,7),A([[202,347],[260,350],[255,402],[205,401]],g,m,7)),a==="striped"&&(c.strokeStyle=Xe(g,.45),c.lineWidth=7,c.beginPath(),c.moveTo(164,385),c.lineTo(154,474),c.stroke(),c.beginPath(),c.moveTo(236,385),c.lineTo(246,474),c.stroke()),["guard","tech"].includes(a)&&(C(160,435,22,15,a==="tech"?"#68eaff":"#69798b",m,5),C(240,435,22,15,a==="tech"?"#68eaff":"#69798b",m,5));const L=l==="gold"?"#ffd35e":l==="neon"?"#69f6ff":Xe(f,.38);C(148,500,34,18,f,m,7),C(252,500,34,18,f,m,7),c.strokeStyle=L,c.lineWidth=l==="boots"||l==="combat"?11:6,c.beginPath(),c.moveTo(128,497),c.lineTo(168,497),c.stroke(),c.beginPath(),c.moveTo(232,497),c.lineTo(272,497),c.stroke();const M=["armor","vest"].includes(s)?"#7e91a7":v;y([[151,252],[116,302],[95,355]],_,29),y([[249,252],[284,302],[305,355]],_,29),y([[151,252],[130,283]],M,s==="vest"?25:37),y([[249,252],[270,283]],M,s==="vest"?25:37);const T=c.createLinearGradient(135,225,265,360);T.addColorStop(0,Xe(v,.26)),T.addColorStop(.52,v),T.addColorStop(1,Xe(v,-.24)),c.beginPath(),c.moveTo(156,224),c.quadraticCurveTo(200,205,244,224),c.quadraticCurveTo(270,276,258,360),c.quadraticCurveTo(200,382,142,360),c.quadraticCurveTo(130,276,156,224),c.closePath(),c.fillStyle=T,c.fill(),c.strokeStyle=m,c.lineWidth=9,c.stroke(),s==="jacket"||s==="bomber"?(c.strokeStyle="#f0f5fa",c.lineWidth=7,c.beginPath(),c.moveTo(200,232),c.lineTo(200,354),c.stroke(),c.beginPath(),c.moveTo(160,235),c.lineTo(193,278),c.lineTo(200,232),c.stroke(),c.beginPath(),c.moveTo(240,235),c.lineTo(207,278),c.lineTo(200,232),c.stroke()):s==="hoodie"?(c.strokeStyle=Xe(v,-.32),c.lineWidth=18,c.beginPath(),c.arc(200,229,39,.08*Math.PI,.92*Math.PI,!0),c.stroke(),c.lineWidth=5,c.beginPath(),c.moveTo(187,253),c.lineTo(183,300),c.moveTo(213,253),c.lineTo(217,300),c.stroke()):s==="armor"?(A([[151,245],[200,225],[249,245],[239,334],[200,357],[161,334]],"#aebdcc",m,7),A([[165,257],[200,240],[235,257],[226,305],[200,326],[174,305]],"#316bc0","#e9d36e",6)):s==="suit"?(A([[158,232],[194,278],[180,339],[143,356]],"#253143",null),A([[242,232],[206,278],[220,339],[257,356]],"#253143",null),A([[194,245],[206,245],[214,321],[200,345],[186,321]],"#d7484f",m,4)):s==="robe"?(c.strokeStyle="#f1c75b",c.lineWidth=12,c.beginPath(),c.moveTo(148,333),c.lineTo(252,333),c.stroke()):s==="jersey"?(c.strokeStyle="#f5f8ff",c.lineWidth=8,c.beginPath(),c.moveTo(158,240),c.lineTo(151,342),c.moveTo(242,240),c.lineTo(249,342),c.stroke(),c.font="900 50px Arial",c.textAlign="center",c.fillStyle="#f5f8ff",c.fillText("8",200,315)):s==="trench"?(c.strokeStyle="#e9edf2",c.lineWidth=6,c.beginPath(),c.moveTo(200,240),c.lineTo(200,405),c.stroke(),c.lineWidth=11,c.beginPath(),c.moveTo(151,330),c.lineTo(249,330),c.stroke()):(c.strokeStyle="#f0d48c",c.lineWidth=10,c.beginPath(),c.arc(200,231,27,.1*Math.PI,.9*Math.PI,!0),c.stroke()),C(200,213,23,25,_,m,6),C(200,142,76,86,_,m,9),C(125,150,13,22,_,m,5),C(275,150,13,22,_,m,5),((z=!1,X=!1)=>{z&&(C(132,178,27,92,Xe(w,-.1),m,7),C(268,178,27,92,Xe(w,-.1),m,7));const $=[[126,136],[132,88],[153,53],[171,67],[188,39],[203,65],[227,42],[231,71],[264,60],[253,91],[278,102],[267,137],[252,119],[240,130],[222,109],[204,128],[184,107],[166,128],[147,113]];X&&$.splice(3,0,[141,34],[166,57],[181,21],[207,58],[242,26],[248,70]),A($,w,m,9),c.strokeStyle=Xe(w,.28),c.lineWidth=6,c.beginPath(),c.moveTo(151,82),c.quadraticCurveTo(171,61,184,92),c.moveTo(205,67),c.quadraticCurveTo(223,58,235,91),c.stroke()})(o==="long"||o==="ponytail",o==="spiky"||o==="mohawk"),o==="ponytail"&&(C(286,151,24,58,w,m,7),C(276,104,12,12,"#ff6f91",m,4));for(const z of[170,230])C(z,153,20,25,"#f8fbff",m,5),C(z,156,11,17,"#2d9eea",null,0),C(z,160,6,11,"#10203a",null,0),C(z-4,150,4,5,"#ffffff",null,0);if(c.strokeStyle=w,c.lineWidth=7,c.beginPath(),c.moveTo(151,124),c.quadraticCurveTo(169,115,186,125),c.moveTo(214,125),c.quadraticCurveTo(231,115,249,124),c.stroke(),C(200,177,6,7,Xe(_,-.14),null,0),c.strokeStyle="#9b4d52",c.lineWidth=5,c.beginPath(),c.arc(200,183,17,.2*Math.PI,.8*Math.PI),c.stroke(),C(146,183,14,7,"rgba(242,116,130,.35)",null,0),C(254,183,14,7,"rgba(242,116,130,.35)",null,0),o==="cap")c.beginPath(),c.arc(200,95,72,Math.PI,Math.PI*2),c.lineTo(272,118),c.lineTo(128,118),c.closePath(),c.fillStyle=v,c.fill(),c.strokeStyle=m,c.lineWidth=8,c.stroke(),A([[220,112],[293,122],[263,137],[211,128]],v,m,6);else if(o==="beanie")c.beginPath(),c.arc(200,101,74,Math.PI,Math.PI*2),c.lineTo(274,128),c.lineTo(126,128),c.closePath(),c.fillStyle=v,c.fill(),c.strokeStyle=m,c.lineWidth=8,c.stroke(),C(200,42,16,16,v,m,5);else if(o==="cowboy")C(200,102,105,19,"#9a6036",m,7),c.beginPath(),c.roundRect(155,34,90,70,25),c.fillStyle="#86502e",c.fill(),c.strokeStyle=m,c.lineWidth=8,c.stroke();else if(o==="helmet")c.beginPath(),c.arc(200,116,82,Math.PI,Math.PI*2),c.lineTo(280,157),c.lineTo(120,157),c.closePath(),c.fillStyle="#74899d",c.fill(),c.strokeStyle=m,c.lineWidth=9,c.stroke(),c.fillStyle="rgba(89,227,255,.82)",c.fillRect(137,124,126,22);else if(["motorcycleHelmet","racingHelmet","spaceHelmet","mechaHelmet","riotHelmet"].includes(o)){const z=o==="spaceHelmet"?"#e8f1f7":o==="mechaHelmet"?"#596b82":o==="riotHelmet"?"#263644":v;c.beginPath(),c.roundRect(109,38,182,190,72),c.fillStyle=z,c.fill(),c.strokeStyle=m,c.lineWidth=9,c.stroke(),c.beginPath(),c.roundRect(128,91,144,78,24),c.fillStyle=o==="mechaHelmet"?"#13202f":"rgba(62,180,226,.82)",c.fill(),c.strokeStyle=m,c.lineWidth=7,c.stroke(),c.fillStyle="rgba(255,255,255,.68)",c.beginPath(),c.roundRect(143,103,73,9,5),c.fill(),c.beginPath(),c.moveTo(127,169),c.lineTo(153,215),c.lineTo(247,215),c.lineTo(273,169),c.lineTo(251,224),c.lineTo(149,224),c.closePath(),c.fillStyle=o==="spaceHelmet"?"#aab9c7":Xe(z,-.25),c.fill(),c.strokeStyle=m,c.lineWidth=7,c.stroke()}else o==="wizard"?(C(200,98,102,18,"#624099",m,7),A([[145,94],[220,4],[258,94]],"#56358f",m,8)):o==="crown"?A([[157,92],[151,39],[181,67],[200,20],[220,67],[250,39],[243,92]],"#ffd45a",m,7):o==="headphones"&&(c.strokeStyle="#273143",c.lineWidth=15,c.beginPath(),c.arc(200,128,80,Math.PI,Math.PI*2),c.stroke(),c.fillStyle="#55e6f8",c.fillRect(112,120,22,58),c.fillRect(266,120,22,58));return h==="smg"?(A([[277,309],[351,295],[364,321],[291,340]],"#48d5ad",m,7),A([[307,332],[325,334],[321,369],[300,362]],"#26364b",m,5)):h==="sniper"?(A([[263,316],[360,283],[368,300],[272,336]],"#6098ef",m,7),C(315,295,23,9,"#17263c",m,4)):h==="rocket"?(c.strokeStyle=m,c.lineWidth=34,c.beginPath(),c.moveTo(274,326),c.lineTo(359,292),c.stroke(),c.strokeStyle="#f16442",c.lineWidth=24,c.beginPath(),c.moveTo(274,326),c.lineTo(359,292),c.stroke(),C(361,291,12,18,"#ffb454",m,5)):u==="chickenLeg"?(c.strokeStyle=m,c.lineWidth=30,c.beginPath(),c.moveTo(298,354),c.lineTo(331,294),c.stroke(),c.strokeStyle="#f1dfb4",c.lineWidth=20,c.stroke(),C(352,258,32,44,"#d96b38",m,8),C(333,273,24,31,"#ef8a45",m,6)):u==="pickaxe"?(c.strokeStyle=m,c.lineWidth=24,c.beginPath(),c.moveTo(299,354),c.lineTo(344,250),c.stroke(),c.strokeStyle="#9b6338",c.lineWidth=15,c.stroke(),c.strokeStyle=m,c.lineWidth=24,c.beginPath(),c.moveTo(299,259),c.quadraticCurveTo(347,230,389,252),c.stroke(),c.strokeStyle="#91a6b5",c.lineWidth=14,c.stroke()):u==="shovel"?(c.strokeStyle=m,c.lineWidth=23,c.beginPath(),c.moveTo(299,354),c.lineTo(344,250),c.stroke(),c.strokeStyle="#a66c3b",c.lineWidth=14,c.stroke(),A([[327,251],[352,224],[380,237],[375,273],[350,286]],"#a8bac7",m,7)):u==="greatClub"?(c.strokeStyle=m,c.lineWidth=49,c.beginPath(),c.moveTo(298,354),c.lineTo(349,246),c.stroke(),c.strokeStyle="#95542e",c.lineWidth=38,c.stroke(),C(354,239,25,32,"#b36d3b",m,7)):(c.strokeStyle=m,c.lineWidth=28,c.beginPath(),c.moveTo(301,352),c.lineTo(345,262),c.stroke(),c.strokeStyle="#9c5a31",c.lineWidth=19,c.beginPath(),c.moveTo(301,352),c.lineTo(345,262),c.stroke(),C(351,249,17,24,"#a86638",m,6)),c.restore(),p}const Ni=new Image;Ni.src="/assets/fighter-base-chibi-v1.png";const Z_=[[310,40,634,1120],[310,40,634,1120],[310,40,634,1120],[310,40,634,1120],[310,40,634,1120],[310,40,634,1120]];function K_(){return 0}const Mf=1,J_=.4;function Q_(e,t,n){const i=e.canvas.width,r=Math.min(e.canvas.height,Math.round(225*n)),o=e.getImageData(0,0,i,r),s=o.data,a=new ze(t),l=[a.r*255,a.g*255,a.b*255],h=Math.round(78*n),d=Math.min(i,Math.round(322*n)),u=Math.round(6*n);let p=0;for(let c=u;c<r;c+=1)for(let m=h;m<d;m+=1){const v=(c*i+m)*4,g=s[v],f=s[v+1],_=s[v+2];if(!(s[v+3]>20&&g>45&&g<218&&f>18&&f<145&&_<112&&g-f>24&&f-_>8))continue;const C=Math.max(g,f,_)/255,A=Tt.clamp(.48+C*.92,.56,1.28),R=Math.max(0,C-.52)*76;s[v]=Math.min(255,l[0]*A+R),s[v+1]=Math.min(255,l[1]*A+R),s[v+2]=Math.min(255,l[2]*A+R),p+=1}return e.putImageData(o,0,0),p}function e2(e,t){const{hairStyle:n}=t,i=Dt(t.shirtColor);e.save();const r=Dt(t.hairColor),o=Xe(r,-.28),s=e.createLinearGradient(120,55,270,220);if(s.addColorStop(0,Xe(r,.25)),s.addColorStop(.48,r),s.addColorStop(1,o),e.fillStyle=s,e.strokeStyle="#24181a",e.lineWidth=6,n==="long"&&(e.beginPath(),e.ellipse(133,164,34,102,-.08,0,Math.PI*2),e.fill(),e.stroke(),e.beginPath(),e.ellipse(267,164,34,102,.08,0,Math.PI*2),e.fill(),e.stroke()),n==="ponytail"&&(e.beginPath(),e.ellipse(286,151,28,78,-.24,0,Math.PI*2),e.fill(),e.stroke()),n==="braid")for(let a=0;a<5;a+=1)e.beginPath(),e.ellipse(279+Math.sin(a)*4,142+a*29,17-a,22,.15,0,Math.PI*2),e.fill(),e.stroke();if(n==="curly")for(const[a,l,h]of[[139,115,28],[151,78,30],[181,58,32],[216,58,33],[248,82,31],[262,119,27]])e.beginPath(),e.arc(a,l,h,0,Math.PI*2),e.fill(),e.stroke();n==="samuraiBun"&&(e.beginPath(),e.ellipse(200,39,34,29,0,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle="#d7a34e",e.beginPath(),e.roundRect(168,34,64,12,5),e.fill(),e.strokeStyle="#24181a",e.lineWidth=3,e.stroke()),n==="hood"&&(e.fillStyle=Xe(i,-.26),e.beginPath(),e.moveTo(200,15),e.bezierCurveTo(142,15,105,57,106,121),e.bezierCurveTo(107,181,130,218,158,245),e.lineTo(200,226),e.lineTo(242,245),e.bezierCurveTo(270,218,293,181,294,121),e.bezierCurveTo(295,57,258,15,200,15),e.closePath(),e.fill(),e.stroke()),e.restore()}function t2(e,t){const n=t.hairStyle,i=Dt(t.shirtColor);e.save();const r=Dt(t.hairColor),o="#24181a",s=Xe(r,.32),a=Xe(i,.34),l=Xe(i,-.3),h=e.createLinearGradient(145,35,255,130);h.addColorStop(0,s),h.addColorStop(.48,r),h.addColorStop(1,Xe(r,-.32));const d=(u,p,c=6)=>{e.beginPath(),e.moveTo(u[0][0],u[0][1]),u.slice(1).forEach(([m,v])=>e.lineTo(m,v)),e.closePath(),e.fillStyle=p,e.fill(),e.strokeStyle=o,e.lineWidth=c,e.stroke()};if(n==="spiky")d([[128,119],[137,76],[158,88],[169,45],[190,75],[205,35],[221,74],[247,51],[261,116],[245,108],[228,119],[207,108],[184,119],[163,107],[144,120]],h,4.5),e.strokeStyle=s,e.lineWidth=2.5,e.beginPath(),e.moveTo(165,83),e.lineTo(171,57),e.moveTo(203,73),e.lineTo(207,48),e.moveTo(231,85),e.lineTo(245,64),e.stroke();else if(n==="mohawk")e.fillStyle=h,e.strokeStyle=o,e.lineWidth=4.5,e.beginPath(),e.moveTo(169,101),e.bezierCurveTo(171,72,178,35,190,15),e.quadraticCurveTo(199,35,202,63),e.quadraticCurveTo(211,30,222,18),e.bezierCurveTo(230,49,233,74,231,101),e.closePath(),e.fill(),e.stroke(),e.strokeStyle=s,e.lineWidth=3,e.beginPath(),e.moveTo(188,86),e.quadraticCurveTo(190,50,193,31),e.moveTo(213,84),e.quadraticCurveTo(219,49,220,32),e.stroke();else if(n==="undercut")e.fillStyle=Xe(r,-.42),e.strokeStyle=o,e.lineWidth=4,e.beginPath(),e.ellipse(200,95,70,54,0,Math.PI,Math.PI*2),e.fill(),e.stroke(),d([[136,112],[149,72],[176,79],[192,42],[211,72],[248,52],[266,108],[243,101],[221,116],[197,100],[173,119],[153,103]],h,4),e.strokeStyle=s,e.lineWidth=3,e.beginPath(),e.moveTo(178,82),e.quadraticCurveTo(198,52,220,75),e.stroke();else if(n==="curly"){for(const[u,p,c]of[[137,108,27],[151,76,31],[180,57,31],[211,54,33],[242,72,31],[263,105,27],[184,91,30],[221,91,30]])e.fillStyle=h,e.strokeStyle=o,e.lineWidth=4,e.beginPath(),e.arc(u,p,c,0,Math.PI*2),e.fill(),e.stroke();e.strokeStyle=s,e.lineWidth=3,e.beginPath(),e.arc(181,57,16,Math.PI,Math.PI*1.85),e.stroke(),e.beginPath(),e.arc(232,77,15,Math.PI,Math.PI*1.8),e.stroke()}else if(n==="sidepart")e.fillStyle=h,e.strokeStyle=o,e.lineWidth=5,e.beginPath(),e.moveTo(128,119),e.bezierCurveTo(132,62,166,38,209,43),e.bezierCurveTo(246,45,270,72,270,116),e.quadraticCurveTo(245,102,226,94),e.bezierCurveTo(213,118,193,133,164,139),e.quadraticCurveTo(176,109,169,86),e.quadraticCurveTo(149,108,128,119),e.closePath(),e.fill(),e.stroke(),e.strokeStyle=s,e.lineWidth=4,e.beginPath(),e.moveTo(181,56),e.quadraticCurveTo(218,48,248,82),e.stroke();else if(n==="samuraiBun")e.fillStyle=h,e.strokeStyle=o,e.lineWidth=5,e.beginPath(),e.moveTo(132,120),e.bezierCurveTo(135,67,164,48,200,49),e.bezierCurveTo(237,48,265,68,268,120),e.quadraticCurveTo(237,105,217,115),e.lineTo(200,94),e.lineTo(181,116),e.quadraticCurveTo(158,104,132,120),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#d7a34e",e.lineWidth=8,e.beginPath(),e.moveTo(158,113),e.quadraticCurveTo(200,126,242,113),e.stroke();else if(n==="fedora"){const u=e.createLinearGradient(145,39,254,122);u.addColorStop(0,a),u.addColorStop(.5,i),u.addColorStop(1,l),e.fillStyle=u,e.strokeStyle=o,e.lineWidth=5,e.beginPath(),e.moveTo(153,101),e.lineTo(162,48),e.quadraticCurveTo(200,31,238,48),e.lineTo(247,101),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#d7ad54",e.lineWidth=8,e.beginPath(),e.moveTo(155,90),e.lineTo(245,90),e.stroke(),e.fillStyle=u,e.strokeStyle=o,e.lineWidth=5,e.beginPath(),e.ellipse(200,105,112,23,0,0,Math.PI*2),e.fill(),e.stroke()}else if(n==="bucket"){const u=e.createLinearGradient(138,50,260,129);u.addColorStop(0,a),u.addColorStop(.52,i),u.addColorStop(1,l),e.fillStyle=u,e.strokeStyle=o,e.lineWidth=5,e.beginPath(),e.moveTo(139,101),e.quadraticCurveTo(148,48,200,47),e.quadraticCurveTo(252,48,261,101),e.closePath(),e.fill(),e.stroke(),e.beginPath(),e.moveTo(118,101),e.quadraticCurveTo(200,121,282,101),e.lineTo(267,135),e.quadraticCurveTo(200,151,133,135),e.closePath(),e.fill(),e.stroke(),e.strokeStyle=a,e.lineWidth=3,e.beginPath(),e.moveTo(137,116),e.quadraticCurveTo(200,129,263,116),e.stroke()}else if(n==="aviator"){e.fillStyle="#72482f",e.strokeStyle=o,e.lineWidth=5,e.beginPath(),e.moveTo(130,117),e.bezierCurveTo(135,61,165,40,200,41),e.bezierCurveTo(235,40,265,61,270,117),e.lineTo(257,167),e.lineTo(236,153),e.lineTo(236,105),e.lineTo(164,105),e.lineTo(164,153),e.lineTo(143,167),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#e8c992",e.lineWidth=7,e.beginPath(),e.moveTo(145,105),e.quadraticCurveTo(200,120,255,105),e.stroke();for(const u of[173,227])e.fillStyle="#64dff4",e.beginPath(),e.ellipse(u,101,25,15,0,0,Math.PI*2),e.fill(),e.strokeStyle=o,e.lineWidth=4,e.stroke()}else if(n==="foxEars")d([[127,91],[139,18],[184,73]],h,5),d([[216,73],[261,18],[273,91]],h,5),d([[141,70],[146,38],[171,70]],"#ef9a7c",2.5),d([[229,70],[254,38],[259,70]],"#ef9a7c",2.5),e.strokeStyle=s,e.lineWidth=4,e.beginPath(),e.moveTo(141,103),e.quadraticCurveTo(200,74,259,103),e.stroke();else if(n==="cap"){const u=e.createLinearGradient(146,52,250,125);u.addColorStop(0,a),u.addColorStop(.55,i),u.addColorStop(1,l),e.fillStyle=u,e.strokeStyle=o,e.lineWidth=5,e.beginPath(),e.moveTo(132,116),e.bezierCurveTo(137,75,162,51,200,50),e.bezierCurveTo(239,51,263,75,269,116),e.quadraticCurveTo(200,128,132,116),e.closePath(),e.fill(),e.stroke(),e.strokeStyle=a,e.lineWidth=3,e.beginPath(),e.moveTo(200,53),e.lineTo(200,116),e.stroke(),e.strokeStyle=o,e.lineWidth=5,e.beginPath(),e.moveTo(184,116),e.quadraticCurveTo(246,111,286,129),e.quadraticCurveTo(243,141,191,128),e.closePath(),e.fillStyle=l,e.fill(),e.stroke()}else if(n==="beanie"){const u=e.createLinearGradient(145,51,254,129);u.addColorStop(0,a),u.addColorStop(.55,i),u.addColorStop(1,l),e.fillStyle=u,e.strokeStyle=o,e.lineWidth=5,e.beginPath(),e.moveTo(130,111),e.bezierCurveTo(137,72,164,49,200,49),e.bezierCurveTo(236,49,263,72,270,111),e.lineTo(266,127),e.lineTo(134,127),e.closePath(),e.fill(),e.stroke(),e.fillStyle=l,e.beginPath(),e.roundRect(130,106,140,25,10),e.fill(),e.stroke(),e.strokeStyle=a,e.lineWidth=2.5;for(let p=146;p<=254;p+=18)e.beginPath(),e.moveTo(p,109),e.lineTo(p+3,126),e.stroke();e.fillStyle=i,e.beginPath(),e.arc(200,44,13,0,Math.PI*2),e.fill(),e.strokeStyle=o,e.lineWidth=4,e.stroke()}else if(n==="cowboy"){const u=e.createLinearGradient(145,38,250,122);u.addColorStop(0,"#cb8950"),u.addColorStop(.5,"#92542f"),u.addColorStop(1,"#5f3426"),e.fillStyle=u,e.strokeStyle=o,e.lineWidth=5,e.beginPath(),e.moveTo(151,101),e.quadraticCurveTo(156,44,178,37),e.quadraticCurveTo(200,48,222,37),e.quadraticCurveTo(244,45,249,101),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#f0ba61",e.lineWidth=7,e.beginPath(),e.moveTo(153,91),e.quadraticCurveTo(200,101,247,91),e.stroke(),e.fillStyle=u,e.strokeStyle=o,e.lineWidth=5,e.beginPath(),e.moveTo(91,109),e.quadraticCurveTo(142,91,200,106),e.quadraticCurveTo(258,91,309,109),e.quadraticCurveTo(255,132,200,116),e.quadraticCurveTo(145,132,91,109),e.closePath(),e.fill(),e.stroke()}else if(n==="helmet"){const u=e.createLinearGradient(130,47,270,142);u.addColorStop(0,"#e7f4ff"),u.addColorStop(.45,"#718da8"),u.addColorStop(1,"#263d55"),e.fillStyle=u,e.strokeStyle=o,e.lineWidth=6,e.beginPath(),e.moveTo(126,123),e.bezierCurveTo(130,72,158,45,200,44),e.bezierCurveTo(242,45,270,72,274,123),e.lineTo(265,146),e.lineTo(135,146),e.closePath(),e.fill(),e.stroke(),e.fillStyle="rgba(69,226,255,.82)",e.strokeStyle="#17384c",e.lineWidth=4,e.beginPath(),e.roundRect(137,116,126,22,8),e.fill(),e.stroke(),e.strokeStyle="#e9f7ff",e.lineWidth=3,e.beginPath(),e.moveTo(151,120),e.lineTo(224,120),e.stroke()}else if(n==="motorcycleHelmet"){const u=e.createLinearGradient(120,42,281,216);u.addColorStop(0,a),u.addColorStop(.42,i),u.addColorStop(1,l),e.fillStyle=u,e.strokeStyle=o,e.lineWidth=7,e.beginPath(),e.moveTo(200,28),e.bezierCurveTo(143,28,112,70,111,132),e.bezierCurveTo(111,176,132,207,158,225),e.lineTo(245,225),e.bezierCurveTo(271,203,289,170,287,126),e.bezierCurveTo(284,68,253,29,200,28),e.closePath(),e.fill(),e.stroke();const p=e.createLinearGradient(133,93,270,158);p.addColorStop(0,"#d8fbff"),p.addColorStop(.2,"#57d8f1"),p.addColorStop(.7,"#163c62"),p.addColorStop(1,"#0a1728"),e.fillStyle=p,e.strokeStyle="#101923",e.lineWidth=7,e.beginPath(),e.moveTo(126,98),e.quadraticCurveTo(200,71,274,99),e.lineTo(263,156),e.quadraticCurveTo(200,169,137,154),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="rgba(255,255,255,.82)",e.lineWidth=5,e.beginPath(),e.moveTo(144,104),e.quadraticCurveTo(193,89,237,101),e.stroke(),e.fillStyle=l,e.strokeStyle=o,e.lineWidth=6,e.beginPath(),e.moveTo(133,160),e.lineTo(158,218),e.lineTo(242,218),e.lineTo(270,158),e.lineTo(248,207),e.lineTo(151,207),e.closePath(),e.fill(),e.stroke(),e.strokeStyle=a,e.lineWidth=5,e.beginPath(),e.moveTo(178,200),e.lineTo(222,200),e.stroke();for(const c of[185,200,215])e.strokeStyle="#17212c",e.lineWidth=4,e.beginPath(),e.moveTo(c,188),e.lineTo(c,198),e.stroke()}else if(n==="racingHelmet"){const u=e.createLinearGradient(115,34,286,226);u.addColorStop(0,"#f8fbff"),u.addColorStop(.3,a),u.addColorStop(.58,i),u.addColorStop(1,l),e.fillStyle=u,e.strokeStyle=o,e.lineWidth=7,e.beginPath(),e.moveTo(200,25),e.bezierCurveTo(143,25,110,68,111,135),e.lineTo(128,195),e.lineTo(159,226),e.lineTo(246,226),e.lineTo(279,190),e.lineTo(289,119),e.bezierCurveTo(283,60,250,26,200,25),e.closePath(),e.fill(),e.stroke(),d([[121,73],[159,45],[183,71],[222,37],[273,68],[285,93],[245,84],[217,102],[176,78],[136,104]],"#f6c84f",4);const p=e.createLinearGradient(129,102,271,158);p.addColorStop(0,"#8df4ff"),p.addColorStop(.45,"#286899"),p.addColorStop(1,"#101c31"),e.fillStyle=p,e.strokeStyle=o,e.lineWidth=7,e.beginPath(),e.moveTo(126,103),e.quadraticCurveTo(200,81,274,104),e.lineTo(263,157),e.quadraticCurveTo(199,169,137,155),e.closePath(),e.fill(),e.stroke(),d([[133,164],[154,216],[245,216],[269,162],[251,204],[149,204]],l,5),e.fillStyle="#f6c84f",e.beginPath(),e.roundRect(176,184,48,10,5),e.fill()}else if(n==="spaceHelmet"){e.fillStyle="#eff5f7",e.strokeStyle=o,e.lineWidth=8,e.beginPath(),e.ellipse(200,126,99,105,0,0,Math.PI*2),e.fill(),e.stroke();const u=e.createRadialGradient(165,91,12,202,127,87);u.addColorStop(0,"rgba(220,253,255,.92)"),u.addColorStop(.35,"rgba(94,210,236,.64)"),u.addColorStop(1,"rgba(23,58,89,.9)"),e.fillStyle=u,e.strokeStyle="#28475e",e.lineWidth=7,e.beginPath(),e.ellipse(200,126,78,78,0,0,Math.PI*2),e.fill(),e.stroke(),e.strokeStyle="rgba(255,255,255,.86)",e.lineWidth=6,e.beginPath(),e.arc(192,117,58,Math.PI*1.05,Math.PI*1.55),e.stroke(),e.fillStyle=i,e.strokeStyle=o,e.lineWidth=6,e.beginPath(),e.roundRect(124,190,152,39,15),e.fill(),e.stroke(),e.fillStyle="#5de8f3",e.beginPath(),e.arc(160,209,7,0,Math.PI*2),e.fill(),e.fillStyle="#ffcc55",e.beginPath(),e.arc(183,209,7,0,Math.PI*2),e.fill()}else if(n==="mechaHelmet"){const u=e.createLinearGradient(118,34,286,228);u.addColorStop(0,"#d9e7f2"),u.addColorStop(.35,"#71859a"),u.addColorStop(.66,i),u.addColorStop(1,"#253646"),d([[200,24],[249,40],[284,87],[279,176],[247,224],[153,224],[120,176],[115,87],[151,42]],u,7),d([[122,91],[159,61],[196,83],[200,153],[153,143],[128,122]],l,5),d([[278,91],[241,61],[204,83],[200,153],[247,143],[272,122]],l,5),e.fillStyle="#0a1722",e.strokeStyle=o,e.lineWidth=6,e.beginPath(),e.moveTo(137,111),e.lineTo(192,122),e.lineTo(200,143),e.lineTo(208,122),e.lineTo(264,111),e.lineTo(251,151),e.lineTo(149,151),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#63efff",e.shadowColor="#27d9ff",e.shadowBlur=15,e.lineWidth=8,e.beginPath(),e.moveTo(148,127),e.lineTo(190,136),e.moveTo(210,136),e.lineTo(252,127),e.stroke(),e.shadowBlur=0,d([[150,156],[187,164],[200,183],[213,164],[250,156],[239,213],[161,213]],"#34495c",5),e.strokeStyle=a,e.lineWidth=4,e.beginPath(),e.moveTo(180,194),e.lineTo(220,194),e.stroke()}else if(n==="riotHelmet"){const u=e.createLinearGradient(120,34,282,214);u.addColorStop(0,"#53697a"),u.addColorStop(.45,"#283a49"),u.addColorStop(1,"#101a25"),e.fillStyle=u,e.strokeStyle=o,e.lineWidth=7,e.beginPath(),e.moveTo(200,28),e.bezierCurveTo(145,28,113,70,114,132),e.lineTo(124,193),e.lineTo(154,222),e.lineTo(246,222),e.lineTo(278,190),e.lineTo(286,127),e.bezierCurveTo(281,68,250,28,200,28),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#8ba2b4",e.lineWidth=7,e.beginPath(),e.moveTo(126,91),e.quadraticCurveTo(200,66,274,91),e.stroke(),e.fillStyle="rgba(43,101,125,.72)",e.strokeStyle="#111c27",e.lineWidth=7,e.beginPath(),e.moveTo(124,96),e.quadraticCurveTo(200,76,276,97),e.lineTo(267,169),e.quadraticCurveTo(200,182,133,168),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="rgba(211,244,255,.7)",e.lineWidth=4,e.beginPath(),e.moveTo(141,104),e.quadraticCurveTo(190,91,237,102),e.stroke(),e.fillStyle="#182733",e.strokeStyle=o,e.lineWidth=5,e.beginPath(),e.roundRect(145,178,110,42,15),e.fill(),e.stroke();for(let p=188;p<=207;p+=9)e.strokeStyle="#607587",e.lineWidth=3,e.beginPath(),e.moveTo(166,p),e.lineTo(234,p),e.stroke()}else if(n==="wizard")e.fillStyle="#643e9f",e.strokeStyle=o,e.lineWidth=7,e.beginPath(),e.ellipse(200,101,105,19,0,0,Math.PI*2),e.fill(),e.stroke(),d([[145,96],[220,3],[257,96]],"#56358f",7);else if(n==="crown")d([[157,96],[151,41],[181,68],[200,19],[220,68],[250,41],[243,96]],"#ffd555",6);else if(n==="headphones"){e.lineCap="round",e.strokeStyle="#182231",e.lineWidth=18,e.beginPath(),e.arc(200,131,76,Math.PI,Math.PI*2),e.stroke(),e.strokeStyle=i,e.lineWidth=9,e.beginPath(),e.arc(200,131,76,Math.PI,Math.PI*2),e.stroke(),e.strokeStyle=a,e.lineWidth=3,e.beginPath(),e.arc(200,130,72,Math.PI*1.08,Math.PI*1.92),e.stroke();for(const u of[-1,1]){const p=u<0?111:264;e.fillStyle="#172231",e.strokeStyle=o,e.lineWidth=4,e.beginPath(),e.roundRect(p,128,28,53,12),e.fill(),e.stroke(),e.fillStyle=i,e.beginPath(),e.roundRect(p+(u<0?5:2),134,21,41,9),e.fill(),e.strokeStyle=a,e.lineWidth=3,e.beginPath(),e.moveTo(p+8,140),e.lineTo(p+8,167),e.stroke(),e.strokeStyle="#202b3a",e.lineWidth=6,e.beginPath(),e.moveTo(u<0?135:264,139),e.lineTo(u<0?142:257,155),e.stroke()}}else if(n==="bandana")e.strokeStyle=o,e.lineWidth=14,e.beginPath(),e.moveTo(123,134),e.quadraticCurveTo(200,145,277,134),e.stroke(),e.strokeStyle=i,e.lineWidth=9,e.beginPath(),e.moveTo(123,134),e.quadraticCurveTo(200,145,277,134),e.stroke(),d([[272,136],[307,122],[289,158]],i,3);else if(n==="hood"){const u=e.createLinearGradient(112,56,288,226);u.addColorStop(0,a),u.addColorStop(.55,i),u.addColorStop(1,l),e.fillStyle=u,e.strokeStyle=o,e.lineWidth=5,e.beginPath(),e.moveTo(126,83),e.bezierCurveTo(111,119,117,181,151,218),e.lineTo(174,202),e.bezierCurveTo(143,177,137,133,146,102),e.closePath(),e.fill(),e.stroke(),e.beginPath(),e.moveTo(274,83),e.bezierCurveTo(289,119,283,181,249,218),e.lineTo(226,202),e.bezierCurveTo(257,177,263,133,254,102),e.closePath(),e.fill(),e.stroke(),e.strokeStyle=a,e.lineWidth=5,e.beginPath(),e.arc(200,126,70,Math.PI*.73,Math.PI*2.27),e.stroke()}else if(n==="goggles"){e.strokeStyle="#3a2c2c",e.lineWidth=9,e.beginPath(),e.moveTo(132,116),e.quadraticCurveTo(200,105,268,116),e.stroke();for(const u of[169,231]){const p=e.createLinearGradient(u-21,105,u+22,132);p.addColorStop(0,"#d8fbff"),p.addColorStop(.45,"#68dff4"),p.addColorStop(1,"#2579a2"),e.fillStyle=p,e.strokeStyle="#263443",e.lineWidth=5,e.beginPath(),e.ellipse(u,119,25,15,u<200?-.08:.08,0,Math.PI*2),e.fill(),e.stroke(),e.strokeStyle="rgba(255,255,255,.9)",e.lineWidth=3,e.beginPath(),e.moveTo(u-12,113),e.lineTo(u+2,109),e.stroke()}e.strokeStyle="#263443",e.lineWidth=5,e.beginPath(),e.moveTo(194,118),e.lineTo(206,118),e.stroke()}else if(n==="catEars")d([[135,83],[144,22],[183,70]],h,5),d([[217,70],[256,22],[265,83]],h,5),d([[146,65],[150,39],[169,66]],"#f09aa7",2.5),d([[231,66],[250,39],[254,65]],"#f09aa7",2.5);else if(n==="horns")e.lineCap="round",e.strokeStyle=o,e.lineWidth=19,e.beginPath(),e.moveTo(154,80),e.quadraticCurveTo(123,56,126,23),e.quadraticCurveTo(104,44,112,74),e.stroke(),e.beginPath(),e.moveTo(246,80),e.quadraticCurveTo(277,56,274,23),e.quadraticCurveTo(296,44,288,74),e.stroke(),e.strokeStyle="#d8b16a",e.lineWidth=12,e.beginPath(),e.moveTo(154,80),e.quadraticCurveTo(123,56,126,23),e.quadraticCurveTo(104,44,112,74),e.stroke(),e.beginPath(),e.moveTo(246,80),e.quadraticCurveTo(277,56,274,23),e.quadraticCurveTo(296,44,288,74),e.stroke();else if(n==="halo")e.save(),e.shadowColor="#ffd45b",e.shadowBlur=18,e.strokeStyle="#ffe477",e.lineWidth=8,e.beginPath(),e.ellipse(200,24,68,13,0,0,Math.PI*2),e.stroke(),e.restore();else if(n==="beret"){const u=e.createLinearGradient(143,51,250,112);u.addColorStop(0,a),u.addColorStop(.5,i),u.addColorStop(1,l),e.fillStyle=u,e.strokeStyle=o,e.lineWidth=5,e.beginPath(),e.ellipse(192,80,73,39,-.12,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=l,e.beginPath(),e.roundRect(132,94,136,17,8),e.fill(),e.stroke(),e.strokeStyle=o,e.lineWidth=5,e.beginPath(),e.moveTo(191,42),e.quadraticCurveTo(201,30,207,39),e.stroke()}else if(n==="officer"){const u=e.createLinearGradient(143,44,258,120);u.addColorStop(0,a),u.addColorStop(.55,i),u.addColorStop(1,l),e.fillStyle=u,e.strokeStyle=o,e.lineWidth=5,e.beginPath(),e.moveTo(142,103),e.lineTo(151,62),e.quadraticCurveTo(200,37,249,62),e.lineTo(258,103),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffd361",e.lineWidth=6,e.beginPath(),e.moveTo(148,93),e.quadraticCurveTo(200,105,252,93),e.stroke(),e.fillStyle=l,e.strokeStyle=o,e.lineWidth=4,e.beginPath(),e.moveTo(169,100),e.quadraticCurveTo(242,92,282,112),e.quadraticCurveTo(232,124,176,113),e.closePath(),e.fill(),e.stroke()}["long","ponytail","braid"].includes(n)&&(e.strokeStyle=s,e.lineWidth=3,e.beginPath(),e.moveTo(147,76),e.quadraticCurveTo(174,50,188,84),e.moveTo(210,61),e.quadraticCurveTo(234,48,249,84),e.stroke()),e.restore()}function n2(e,t){const n=t.outfitStyle;if(e.save(),e.translate(0,100),n==="none"){e.restore();return}const i=Dt(t.shirtColor),r=Xe(i,.45),o=Xe(i,-.35),s="rgba(36,27,36,.76)",a=e.createLinearGradient(138,126,252,248);a.addColorStop(0,r),a.addColorStop(.42,i),a.addColorStop(1,o);const l=(m,v=a,g=s,f=4)=>{e.beginPath(),e.moveTo(m[0][0],m[0][1]),m.slice(1).forEach(([_,w])=>e.lineTo(_,w)),e.closePath(),e.fillStyle=v,e.fill(),g&&(e.strokeStyle=g,e.lineWidth=f,e.stroke())},h=(m,v,g=i)=>{e.lineCap="round",e.lineJoin="round",e.strokeStyle=s,e.lineWidth=v+5,e.beginPath(),e.moveTo(m[0][0],m[0][1]),m.slice(1).forEach(([f,_])=>e.lineTo(f,_)),e.stroke(),e.strokeStyle=g,e.lineWidth=v,e.stroke(),e.strokeStyle=Xe(g,.32),e.lineWidth=3,e.stroke()};["trench","robe","ceremonial","winter","monk"].includes(n)&&l([[145,181],[255,181],[278,330],[230,309],[200,335],[170,309],[122,330]],Xe(i,-.18),s,6);const d=["jacket","hoodie","suit","trench","bomber","street","pirate","ranger","robe","ninja","tracksuit","academy","winter","monk"],u=["tshirt","jersey"];if(d.includes(n))h([[146,136],[116,211],[96,283]],30,n==="suit"?"#273345":i),h([[254,136],[284,211],[304,283]],30,n==="suit"?"#273345":i);else if(u.includes(n)){const m=Xe(i,-.42);h([[143,139],[116,213],[97,283]],22,m),h([[257,139],[284,213],[303,283]],22,m),h([[143,140],[123,181]],34,i),h([[257,140],[277,181]],34,i)}else if(n==="vest"){const m=Xe(i,-.46);h([[145,138],[116,213],[97,283]],25,m),h([[255,138],[284,213],[303,283]],25,m)}else if(["armor","samurai","ceremonial","knight","cyber","dragon"].includes(n)){const m=n==="samurai"||n==="dragon"?"#843137":n==="ceremonial"?"#375a96":n==="cyber"?"#263c54":"#758a9e";h([[145,137],[117,211],[98,282]],30,m),h([[255,137],[283,211],[302,282]],30,m),l([[127,137],[151,121],[174,143],[149,165],[119,158]],n==="samurai"?"#9f3a3d":"#9cb0c2"),l([[273,137],[249,121],[226,143],[251,165],[281,158]],n==="samurai"?"#9f3a3d":"#9cb0c2")}const p=["armor","samurai","ceremonial","knight","cyber","dragon"].includes(n)?(()=>{const m=e.createLinearGradient(143,124,250,246);return m.addColorStop(0,"#eef6fc"),m.addColorStop(.5,i),m.addColorStop(1,Xe(i,-.42)),m})():n==="suit"?"#273345":a;if(e.beginPath(),e.moveTo(160,126),e.quadraticCurveTo(148,132,143,151),e.quadraticCurveTo(147,176,151,190),e.lineTo(160,244),e.quadraticCurveTo(180,253,200,254),e.quadraticCurveTo(220,253,240,244),e.lineTo(249,190),e.quadraticCurveTo(253,176,257,151),e.quadraticCurveTo(252,132,240,126),e.quadraticCurveTo(220,119,200,124),e.quadraticCurveTo(180,119,160,126),e.closePath(),e.fillStyle=p,e.fill(),e.strokeStyle=s,e.lineWidth=4,e.stroke(),e.save(),e.globalAlpha=.34,e.strokeStyle=r,e.lineWidth=3,e.beginPath(),e.moveTo(163,145),e.quadraticCurveTo(155,190,166,235),e.moveTo(237,145),e.quadraticCurveTo(245,190,234,235),e.stroke(),e.strokeStyle=o,e.lineWidth=2.5,e.beginPath(),e.moveTo(161,240),e.quadraticCurveTo(200,248,239,240),e.stroke(),e.restore(),e.lineCap="round",e.lineJoin="round",n==="tshirt")e.strokeStyle=o,e.lineWidth=7,e.beginPath(),e.arc(200,123,25,.08*Math.PI,.92*Math.PI),e.stroke(),e.strokeStyle=r,e.lineWidth=3,e.beginPath(),e.arc(200,122,21,.12*Math.PI,.88*Math.PI),e.stroke();else if(n==="jacket"||n==="bomber")e.strokeStyle="#eef6fb",e.lineWidth=4,e.beginPath(),e.moveTo(200,128),e.lineTo(200,247),e.stroke(),e.beginPath(),e.moveTo(163,126),e.lineTo(193,168),e.lineTo(200,130),e.moveTo(237,126),e.lineTo(207,168),e.lineTo(200,130),e.stroke(),n==="bomber"&&(e.fillStyle="#ffd45b",e.beginPath(),e.arc(235,176,10,0,Math.PI*2),e.fill());else if(n==="hoodie"){e.strokeStyle=o,e.lineWidth=11,e.beginPath(),e.arc(200,122,32,.12*Math.PI,.88*Math.PI),e.stroke(),e.lineWidth=4,e.beginPath(),e.moveTo(188,137),e.lineTo(184,181),e.moveTo(212,137),e.lineTo(216,181),e.stroke(),e.fillStyle=r;for(const[m,v]of[[184,184],[216,184]])e.beginPath(),e.arc(m,v,4,0,Math.PI*2),e.fill()}else if(n==="vest"||n==="ranger")e.strokeStyle="#5a402d",e.lineWidth=10,e.beginPath(),e.moveTo(160,127),e.lineTo(186,246),e.moveTo(240,127),e.lineTo(214,246),e.stroke(),n==="ranger"&&(e.beginPath(),e.moveTo(153,151),e.lineTo(245,226),e.stroke());else if(["armor","samurai","ceremonial","knight","cyber","dragon"].includes(n)){e.strokeStyle=n==="ceremonial"?"#ffd761":"#e5eef6",e.lineWidth=4;for(let m=0;m<3;m+=1)e.beginPath(),e.moveTo(164,164+m*27),e.lineTo(236,164+m*27),e.stroke();e.beginPath(),e.moveTo(170,134),e.lineTo(200,161),e.lineTo(230,134),e.stroke()}else if(n==="suit")l([[160,127],[195,173],[184,226],[151,246]],"#e8f1fa",null),l([[240,127],[205,173],[216,226],[249,246]],"#e8f1fa",null),l([[194,147],[206,147],[211,216],[200,236],[189,216]],"#d54852",null);else if(n==="trench"){e.strokeStyle=r,e.lineWidth=4,e.beginPath(),e.moveTo(200,132),e.lineTo(200,320),e.stroke(),e.fillStyle=r;for(const m of[171,202,233])for(const v of[183,217])e.beginPath(),e.arc(v,m,4,0,Math.PI*2),e.fill()}else if(n==="jersey")e.font="900 40px Arial",e.textAlign="center",e.fillStyle="#ffffff",e.fillText("8",200,207);else if(n==="robe")e.strokeStyle="#f2c85b",e.lineWidth=9,e.beginPath(),e.moveTo(148,241),e.lineTo(252,241),e.stroke();else if(n==="pirate")e.strokeStyle="#f1e5cd",e.lineWidth=6,e.beginPath(),e.moveTo(163,132),e.lineTo(194,171),e.lineTo(236,132),e.stroke(),e.strokeStyle="#c63e46",e.lineWidth=11,e.beginPath(),e.moveTo(152,236),e.lineTo(248,246),e.stroke();else if(n==="street")e.strokeStyle="#6df4ff",e.lineWidth=4,e.beginPath(),e.moveTo(157,150),e.lineTo(242,226),e.stroke();else if(n==="ninja")e.strokeStyle="#18202d",e.lineWidth=13,e.beginPath(),e.moveTo(158,138),e.lineTo(241,226),e.stroke(),e.strokeStyle="#d04e55",e.lineWidth=8,e.beginPath(),e.moveTo(150,238),e.lineTo(250,238),e.stroke();else if(n==="knight"){e.strokeStyle="#eff7ff",e.lineWidth=4;for(const m of[158,185,212])e.beginPath(),e.moveTo(165,m),e.lineTo(235,m),e.stroke();e.fillStyle="#4c73b8",e.beginPath(),e.moveTo(200,153),e.lineTo(226,180),e.lineTo(200,218),e.lineTo(174,180),e.closePath(),e.fill()}else if(n==="tracksuit")e.strokeStyle="#f2f7fb",e.lineWidth=7,e.beginPath(),e.moveTo(200,130),e.lineTo(200,245),e.moveTo(116,153),e.lineTo(95,281),e.moveTo(284,153),e.lineTo(305,281),e.stroke(),e.strokeStyle=o,e.lineWidth=4,e.beginPath(),e.moveTo(161,226),e.quadraticCurveTo(200,238,239,226),e.stroke();else if(n==="academy")l([[159,127],[194,169],[181,227],[151,246]],"#eef5fb",null),l([[241,127],[206,169],[219,227],[249,246]],"#eef5fb",null),e.fillStyle="#d8ad4d",e.beginPath(),e.moveTo(194,148),e.lineTo(206,148),e.lineTo(211,210),e.lineTo(200,229),e.lineTo(189,210),e.closePath(),e.fill();else if(n==="winter"){e.strokeStyle="#f4f6ef",e.lineWidth=14,e.beginPath(),e.arc(200,129,36,.08*Math.PI,.92*Math.PI),e.stroke(),e.strokeStyle=o,e.lineWidth=5;for(const m of[184,216])e.beginPath(),e.moveTo(m,155),e.lineTo(m,235),e.stroke();e.fillStyle=r;for(const m of[184,216])e.beginPath(),e.arc(m,174,5,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(m,207,5,0,Math.PI*2),e.fill()}else if(n==="cyber")e.strokeStyle="#65efff",e.shadowColor="#35cbe7",e.shadowBlur=10,e.lineWidth=6,e.beginPath(),e.moveTo(164,143),e.lineTo(198,174),e.lineTo(237,141),e.moveTo(198,174),e.lineTo(200,235),e.stroke(),e.shadowBlur=0,e.fillStyle="#65efff",e.beginPath(),e.arc(200,177,10,0,Math.PI*2),e.fill();else if(n==="monk"){e.strokeStyle="#e7c05d",e.lineWidth=8,e.beginPath(),e.moveTo(156,136),e.lineTo(240,230),e.moveTo(151,239),e.lineTo(249,239),e.stroke(),e.fillStyle="#6f392b";for(let m=0;m<7;m+=1){const v=Math.PI*.15+m*Math.PI*.115;e.beginPath(),e.arc(200+Math.cos(v)*44,138+Math.sin(v)*35,5,0,Math.PI*2),e.fill()}}else n==="dragon"&&(e.strokeStyle="#f0c95c",e.lineWidth=6,e.beginPath(),e.moveTo(167,146),e.quadraticCurveTo(219,160,181,194),e.quadraticCurveTo(163,213,205,228),e.quadraticCurveTo(238,216,226,190),e.stroke(),e.fillStyle="#f0c95c",e.beginPath(),e.moveTo(225,183),e.lineTo(242,174),e.lineTo(235,195),e.closePath(),e.fill());e.save(),e.strokeStyle="rgba(22,24,34,.48)",e.lineWidth=6,e.beginPath(),e.moveTo(158,132),e.quadraticCurveTo(143,144,141,169),e.moveTo(242,132),e.quadraticCurveTo(257,144,259,169),e.moveTo(160,244),e.quadraticCurveTo(200,258,240,244),e.stroke(),e.strokeStyle="rgba(255,255,255,.28)",e.lineWidth=3,e.beginPath(),e.moveTo(126,178),e.quadraticCurveTo(111,220,104,258),e.moveTo(274,178),e.quadraticCurveTo(289,220,296,258),e.moveTo(166,151),e.quadraticCurveTo(178,178,170,218),e.stroke(),e.strokeStyle=Xe(i,-.52),e.lineWidth=9,e.beginPath(),e.moveTo(84,287),e.lineTo(107,283),e.moveTo(293,283),e.lineTo(316,287),e.stroke(),e.strokeStyle=r,e.lineWidth=3,e.beginPath(),e.moveTo(86,283),e.lineTo(106,280),e.moveTo(294,280),e.lineTo(314,283),e.stroke(),e.restore();const c=["armor","samurai","ceremonial","knight","cyber","dragon"].includes(n)?Xe(i,-.48):Xe(i,-.58);e.fillStyle=c,e.strokeStyle=s,e.lineWidth=4;for(const m of[96,304])e.beginPath(),e.ellipse(m,309,18,25,0,0,Math.PI*2),e.fill(),e.stroke(),e.strokeStyle=Xe(c,.38),e.lineWidth=3,e.beginPath(),e.moveTo(m-11,303),e.lineTo(m+11,303),e.stroke(),e.strokeStyle=s,e.lineWidth=4;e.restore()}function i2(e,t){const n=t.pantsStyle;if(e.save(),n==="none"){e.restore();return}e.translate(0,347),e.scale(1,.676),e.translate(0,-238);const i=Dt(t.pantsColor),r=Xe(i,.48),o=Xe(i,-.38),s="rgba(36,27,36,.72)",a=e.createLinearGradient(145,260,255,490);a.addColorStop(0,r),a.addColorStop(.38,i),a.addColorStop(1,o),e.lineCap="round",e.lineJoin="round";const l=n==="shorts";if(e.fillStyle=a,e.strokeStyle=s,e.lineWidth=4,e.beginPath(),e.moveTo(153,238),e.quadraticCurveTo(200,230,247,238),e.lineTo(257,301),e.quadraticCurveTo(235,311,211,306),e.lineTo(200,287),e.lineTo(189,306),e.quadraticCurveTo(165,311,143,301),e.closePath(),e.fill(),e.stroke(),e.strokeStyle=r,e.lineWidth=4,e.beginPath(),e.moveTo(154,252),e.quadraticCurveTo(200,260,246,252),e.stroke(),l){e.save(),e.globalCompositeOperation="destination-over";const h=Xe(i,-.46),d=u=>{e.strokeStyle=s,e.lineWidth=62,e.beginPath(),e.moveTo(u[0][0],u[0][1]),u.slice(1).forEach(([p,c])=>e.lineTo(p,c)),e.stroke(),e.strokeStyle=h,e.lineWidth=56,e.stroke()};d([[165,296],[163,374],[149,458]]),d([[235,296],[237,374],[251,458]]),e.strokeStyle=Xe(i,.16),e.lineWidth=6,e.beginPath(),e.moveTo(132,458),e.lineTo(169,458),e.moveTo(231,458),e.lineTo(268,458),e.stroke(),e.restore()}else{const h=["loose","winter"].includes(n)?70:n==="ninja"?51:58,d=u=>{e.strokeStyle=s,e.lineWidth=h+6,e.beginPath(),e.moveTo(u[0][0],u[0][1]),u.slice(1).forEach(([p,c])=>e.lineTo(p,c)),e.stroke(),e.strokeStyle=a,e.lineWidth=h,e.stroke()};d([[167,285],[165,372],[150,458]]),d([[233,285],[235,372],[250,458]]),e.save(),e.globalAlpha=.3,e.strokeStyle=r,e.lineWidth=3,e.beginPath(),e.moveTo(172,302),e.quadraticCurveTo(175,365,153,447),e.moveTo(228,302),e.quadraticCurveTo(225,365,247,447),e.stroke(),e.strokeStyle=o,e.lineWidth=4,e.beginPath(),e.moveTo(200,292),e.lineTo(200,374),e.stroke(),e.restore(),e.strokeStyle=Xe(i,-.24),e.lineWidth=n==="joggers"?9:5,e.beginPath(),e.moveTo(132,458),e.lineTo(169,458),e.moveTo(231,458),e.lineTo(268,458),e.stroke()}if(e.strokeStyle=r,e.fillStyle=o,n==="cargo"){for(const h of[134,226])e.fillStyle=Xe(i,-.2),e.strokeStyle=r,e.lineWidth=3,e.beginPath(),e.roundRect(h,324,40,40,7),e.fill(),e.stroke(),e.fillStyle=r,e.fillRect(h+5,330,30,5);e.strokeStyle="#d0aa63",e.lineWidth=5,e.beginPath(),e.moveTo(150,365),e.lineTo(145,422),e.moveTo(250,365),e.lineTo(255,422),e.stroke()}else if(n==="striped")e.strokeStyle="#f2edf7",e.lineWidth=10,e.beginPath(),e.moveTo(151,299),e.lineTo(140,455),e.moveTo(249,299),e.lineTo(260,455),e.stroke(),e.strokeStyle=o,e.lineWidth=3,e.beginPath(),e.moveTo(151,300),e.lineTo(140,453),e.moveTo(249,300),e.lineTo(260,453),e.stroke();else if(["guard","plated","samurai"].includes(n)){const h=n==="samurai"?"#bd3d42":n==="plated"?"#9eb3c5":"#52697c";for(const d of[158,242])e.fillStyle=h,e.strokeStyle="#dcebf7",e.lineWidth=3,e.beginPath(),e.roundRect(d-25,378,50,n==="plated"?60:42,9),e.fill(),e.stroke(),e.strokeStyle=n==="samurai"?"#f1c55a":"#34495b",e.beginPath(),e.moveTo(d-18,391),e.lineTo(d+18,423),e.moveTo(d+18,391),e.lineTo(d-18,423),e.stroke()}else if(n==="jeans")e.strokeStyle="#e0ad58",e.lineWidth=4,e.beginPath(),e.moveTo(145,276),e.quadraticCurveTo(174,301,197,279),e.moveTo(203,279),e.quadraticCurveTo(226,301,255,276),e.stroke(),e.strokeStyle="#6fa7d8",e.lineWidth=8,e.globalAlpha=.55,e.beginPath(),e.moveTo(142,402),e.lineTo(169,394),e.moveTo(231,394),e.lineTo(258,402),e.stroke(),e.globalAlpha=1;else if(n==="joggers")e.strokeStyle=r,e.lineWidth=7,e.beginPath(),e.moveTo(136,452),e.lineTo(166,452),e.moveTo(234,452),e.lineTo(264,452),e.stroke(),e.lineWidth=4,e.beginPath(),e.moveTo(192,252),e.lineTo(188,290),e.moveTo(208,252),e.lineTo(212,290),e.stroke();else if(n==="camo"){const h=["#708154","#3f543d","#9a8c5b"];let d=0;for(const[u,p,c,m]of[[149,316,17,10],[241,334,19,11],[158,370,14,20],[242,407,16,12],[147,442,15,9],[253,456,12,8]])e.fillStyle=h[d++%h.length],e.beginPath(),e.ellipse(u,p,c,m,.42,0,Math.PI*2),e.fill()}else if(n==="formal")e.strokeStyle="#e8edf4",e.lineWidth=3,e.beginPath(),e.moveTo(167,292),e.lineTo(151,455),e.moveTo(233,292),e.lineTo(249,455),e.stroke(),e.strokeStyle="#151b26",e.lineWidth=8,e.beginPath(),e.moveTo(151,258),e.lineTo(249,258),e.stroke(),e.fillStyle="#d9b454",e.fillRect(193,251,14,14);else if(n==="tech"){e.strokeStyle="#61ecff",e.shadowColor="#31c8ec",e.shadowBlur=8,e.lineWidth=6,e.beginPath(),e.moveTo(145,318),e.lineTo(170,360),e.lineTo(148,441),e.moveTo(255,318),e.lineTo(230,360),e.lineTo(252,441),e.stroke(),e.shadowBlur=0;for(const h of[158,242])e.fillStyle="#61ecff",e.beginPath(),e.arc(h,381,6,0,Math.PI*2),e.fill()}else if(n==="royal")e.strokeStyle="#ffd55f",e.lineWidth=7,e.beginPath(),e.moveTo(145,315),e.lineTo(170,360),e.lineTo(149,444),e.moveTo(255,315),e.lineTo(230,360),e.lineTo(251,444),e.stroke(),e.fillStyle="#ffd55f",e.beginPath(),e.moveTo(181,267),e.lineTo(200,284),e.lineTo(219,267),e.lineTo(211,296),e.lineTo(189,296),e.closePath(),e.fill();else if(n==="leather"){e.strokeStyle="#d69a61",e.lineWidth=4;for(const h of[158,242])e.beginPath(),e.moveTo(h-13,311),e.lineTo(h+11,458),e.stroke(),e.fillStyle="#80502f",e.beginPath(),e.roundRect(h-20,382,40,30,8),e.fill(),e.stroke()}else if(n==="loose"){e.strokeStyle=r,e.lineWidth=5,e.globalAlpha=.5;for(const h of[154,246])e.beginPath(),e.moveTo(h+(h<200?14:-14),302),e.quadraticCurveTo(h+(h<200?21:-21),370,h,449),e.stroke();e.globalAlpha=1}else if(n==="tactical"){e.fillStyle=Xe(i,-.3),e.strokeStyle=r,e.lineWidth=3;for(const[h,d]of[[132,319],[228,319],[137,382],[223,382]])e.beginPath(),e.roundRect(h,d,40,34,6),e.fill(),e.stroke();e.strokeStyle="#d3a857",e.lineWidth=6,e.beginPath(),e.moveTo(146,300),e.lineTo(164,451),e.moveTo(254,300),e.lineTo(236,451),e.stroke()}else if(n==="ninja"){e.strokeStyle="#b13c47",e.lineWidth=8;for(const h of[154,246])for(const d of[349,382,415])e.beginPath(),e.moveTo(h-21,d-9),e.lineTo(h+21,d+9),e.stroke();e.strokeStyle=Xe(i,-.58),e.lineWidth=11,e.beginPath(),e.moveTo(132,455),e.lineTo(170,455),e.moveTo(230,455),e.lineTo(268,455),e.stroke()}else if(n==="explorer"){e.strokeStyle="#d8b66e",e.lineWidth=5,e.beginPath(),e.moveTo(151,310),e.lineTo(169,439),e.moveTo(249,310),e.lineTo(231,439),e.stroke(),e.fillStyle="#745239";for(const h of[139,225])e.beginPath(),e.roundRect(h,338,37,42,7),e.fill(),e.strokeStyle="#d8b66e",e.lineWidth=3,e.stroke()}else if(n==="winter"){e.strokeStyle="#f3f5ec",e.lineWidth=10,e.beginPath(),e.moveTo(126,454),e.lineTo(174,454),e.moveTo(226,454),e.lineTo(274,454),e.stroke(),e.strokeStyle=r,e.globalAlpha=.55,e.lineWidth=4;for(const h of[156,244])e.beginPath(),e.moveTo(h-17,321),e.quadraticCurveTo(h+17,350,h-12,384),e.quadraticCurveTo(h+18,418,h-8,446),e.stroke();e.globalAlpha=1}else if(n==="cyber"){e.strokeStyle="#61ecff",e.shadowColor="#31c8ec",e.shadowBlur=11,e.lineWidth=7,e.beginPath(),e.moveTo(144,309),e.lineTo(171,350),e.lineTo(145,389),e.lineTo(163,442),e.moveTo(256,309),e.lineTo(229,350),e.lineTo(255,389),e.lineTo(237,442),e.stroke(),e.shadowBlur=0,e.fillStyle="#61ecff";for(const[h,d]of[[158,367],[242,367],[151,427],[249,427]])e.beginPath(),e.arc(h,d,6,0,Math.PI*2),e.fill()}else if(n==="dragon"){e.strokeStyle="#f0c95c",e.lineWidth=6;for(const h of[157,243])e.beginPath(),e.moveTo(h-17,318),e.quadraticCurveTo(h+22,341,h-13,369),e.quadraticCurveTo(h+20,397,h-9,438),e.stroke();e.fillStyle="#9d343b";for(const h of[158,242])e.beginPath(),e.moveTo(h-26,389),e.lineTo(h,370),e.lineTo(h+26,389),e.lineTo(h+18,423),e.lineTo(h-18,423),e.closePath(),e.fill(),e.strokeStyle="#f0c95c",e.lineWidth=3,e.stroke()}e.restore()}function r2(e,t){if(t.shoesStyle==="none")return;const n=t.shoesStyle,i=Dt(t.shoeColor),r=n==="gold"||n==="royal"?"#ffd754":n==="neon"||n==="techboots"?"#69f4ff":Xe(i,.48),o="#201b22";e.strokeStyle=r,e.fillStyle=r,e.lineCap="round",e.lineJoin="round";const s=[[126,509,-1],[226,509,1]];for(const[a,l,h]of s){const d=e.createLinearGradient(a,l-34,a+48,l+8);d.addColorStop(0,Xe(i,.28)),d.addColorStop(.5,i),d.addColorStop(1,Xe(i,-.3));const u=["boots","combat","hiking","greaves","techboots","royal"].includes(n),p=u||["high","canvas","ninja"].includes(n);if(e.fillStyle=d,e.strokeStyle=o,e.lineWidth=4,n!=="sandals"){const c=u?l-65:p?l-45:l-31;e.beginPath(),e.moveTo(a+8,c+5),e.quadraticCurveTo(a+24,c-3,a+41,c+5),e.lineTo(a+45,l-7),e.lineTo(a+5,l-7),e.closePath(),e.fill(),e.stroke(),e.save(),e.strokeStyle=o,e.lineWidth=4,e.beginPath(),e.moveTo(a-12,l-12),e.quadraticCurveTo(a+8,l-31,a+42,l-24),e.quadraticCurveTo(a+73+h*3,l-10,a+63,l+14),e.quadraticCurveTo(a+28,l+19,a-6,l+13),e.closePath(),e.fill(),e.stroke(),e.restore()}if(n==="sandals"&&(e.fillStyle=Xe(i,.16),e.strokeStyle=o,e.lineWidth=4,e.beginPath(),e.ellipse(a+24,l-7,38,21,-.04*h,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=d),e.beginPath(),n==="running"||n==="techboots"?(e.moveTo(a-10,l-12),e.lineTo(a+12,l-29),e.lineTo(a+44,l-23),e.lineTo(a+70+h*3,l-5),e.lineTo(a+58,l+14),e.lineTo(a-4,l+13),e.closePath()):n==="leather"?(e.moveTo(a-9,l-13),e.quadraticCurveTo(a+20,l-29,a+55,l-15),e.quadraticCurveTo(a+73+h*2,l-4,a+57,l+13),e.lineTo(a-3,l+13),e.closePath()):n==="sandals"?e.ellipse(a+24,l+1,38,12,-.04*h,0,Math.PI*2):(e.moveTo(a-11,l-12),e.quadraticCurveTo(a+10,l-29,a+42,l-22),e.quadraticCurveTo(a+72+h*3,l-8,a+62,l+14),e.lineTo(a-4,l+13),e.closePath()),e.fill(),e.stroke(),e.strokeStyle=r,n==="sandals"||n==="ninja"?(e.lineWidth=7,e.beginPath(),e.moveTo(a+2,l-18),e.lineTo(a+45,l+1),e.moveTo(a+42,l-19),e.lineTo(a+7,l+2),e.stroke()):(e.lineWidth=n==="running"?8:5,e.beginPath(),e.moveTo(a-1,l+1),e.lineTo(a+56,l+1),e.stroke()),n==="sneakers"&&(e.lineWidth=4,e.beginPath(),e.moveTo(a+12,l-15),e.lineTo(a+37,l-8),e.moveTo(a+10,l-8),e.lineTo(a+34,l-2),e.stroke()),n==="high"||n==="canvas"){e.lineWidth=4;for(let c=0;c<3;c+=1)e.beginPath(),e.moveTo(a+10,l-31+c*9),e.lineTo(a+35,l-25+c*9),e.stroke()}if(n==="high"&&(e.lineWidth=7,e.beginPath(),e.moveTo(a+7,l-38),e.lineTo(a+39,l-31),e.stroke()),n==="canvas"&&(e.fillStyle="#f4f5ef",e.beginPath(),e.ellipse(a+43,l-4,11,10,-.2,0,Math.PI*2),e.fill()),n==="ninja"){e.strokeStyle="#1b1e29",e.lineWidth=5;for(let c=0;c<3;c+=1)e.beginPath(),e.moveTo(a+7,l-39+c*11),e.lineTo(a+42,l-24+c*11),e.stroke()}if(n==="sandals"&&(e.fillStyle="#d89a5d",e.beginPath(),e.arc(a+23,l-10,5,0,Math.PI*2),e.fill()),n==="running"&&(e.fillStyle=r,e.beginPath(),e.moveTo(a+9,l-18),e.lineTo(a+31,l-26),e.lineTo(a+22,l-12),e.lineTo(a+43,l-15),e.lineTo(a+20,l-2),e.closePath(),e.fill()),n==="leather"&&(e.strokeStyle="#f0d79e",e.lineWidth=4,e.beginPath(),e.moveTo(a+8,l-18),e.quadraticCurveTo(a+27,l-27,a+43,l-14),e.stroke()),n==="combat"){e.fillStyle="#d7e1e9";for(const[c,m]of[[13,-42],[30,-35],[16,-25],[35,-20]])e.beginPath(),e.arc(a+c,l+m,3.5,0,Math.PI*2),e.fill()}n==="hiking"&&(e.lineWidth=4,e.beginPath(),e.moveTo(a+8,l-35),e.lineTo(a+39,l-14),e.moveTo(a+39,l-35),e.lineTo(a+8,l-14),e.stroke()),n==="greaves"&&(e.fillStyle="#b8c8d6",e.strokeStyle="#eef7ff",e.lineWidth=3,e.beginPath(),e.moveTo(a+8,l-54),e.lineTo(a+39,l-48),e.lineTo(a+34,l-13),e.lineTo(a+14,l-13),e.closePath(),e.fill(),e.stroke()),n==="royal"&&(e.fillStyle=r,e.beginPath(),e.moveTo(a+8,l-20),e.lineTo(a+17,l-43),e.lineTo(a+27,l-25),e.lineTo(a+38,l-46),e.lineTo(a+45,l-19),e.closePath(),e.fill()),n==="techboots"&&(e.fillStyle=r,e.shadowColor=r,e.shadowBlur=12,e.beginPath(),e.moveTo(a+24,l-36),e.lineTo(a+36,l-24),e.lineTo(a+24,l-12),e.lineTo(a+12,l-24),e.closePath(),e.fill(),e.shadowBlur=0),n==="gold"&&(e.fillStyle=r,e.shadowColor=r,e.shadowBlur=10,e.fillRect(a+7,l-12,38,7),e.shadowBlur=0),n==="neon"&&(e.strokeStyle=r,e.shadowColor=r,e.shadowBlur=14,e.lineWidth=6,e.beginPath(),e.moveTo(a+3,l-8),e.lineTo(a+46,l-8),e.stroke(),e.shadowBlur=0)}}function $c(e=-1){if(e<0)return .08;const t=n=>{const i=Tt.clamp(n,0,1);return i*i*(3-2*i)};if(e<.3)return Tt.lerp(.08,-1.16,t(e/.3));if(e<.62){const n=Tt.clamp((e-.3)/.32,0,1);return Tt.lerp(-1.16,.68,1-Math.pow(1-n,3))}return Tt.lerp(.68,.08,t((e-.62)/.38))}function jc(e=0,t=e){const s={x:265+29*Math.cos(e)-80*Math.sin(e),y:235+29*Math.sin(e)+80*Math.cos(e)},a=-10,l=77;return{elbow:s,hand:{x:s.x+a*Math.cos(t)-l*Math.sin(t),y:s.y+a*Math.sin(t)+l*Math.cos(t)}}}function o2(e=0,t=e){const s={x:135+-29*Math.cos(e)-80*Math.sin(e),y:235+-29*Math.sin(e)+80*Math.cos(e)},a=10,l=77;return{elbow:s,hand:{x:s.x+a*Math.cos(t)-l*Math.sin(t),y:s.y+a*Math.sin(t)+l*Math.cos(t)}}}function s2(e,t,n){const i=t.weaponType,r=n.attackPhase??-1,o=n.recoil||0,s="#1e1b22",a=t.outfitStyle==="none"?Dt(t.skinColor):Xe(Dt(t.shirtColor),-.58),l=(d,u,p)=>{e.save(),e.translate(d,u),e.fillStyle="#fff3a0",e.shadowColor="#ff8a24",e.shadowBlur=18,e.beginPath();for(let c=0;c<10;c+=1){const m=c%2?p*.36:p,v=c*Math.PI/5;e.lineTo(Math.cos(v)*m,Math.sin(v)*m)}e.closePath(),e.fill(),e.restore()};if(!i){const d=n.rightArmAngle??$c(r)*.56,u=n.rightForearmAngle??$c(r),p=u+.08,{hand:c}=jc(d,u),m=t.meleeStyle||"club",v=1.86,g={club:110,sword:126,axe:112,dagger:76,hammer:110,spear:142,katana:127,mace:105,scythe:135,staff:130,cleaver:100,rapier:124,chickenLeg:128,pickaxe:126,shovel:132,greatClub:132}[m]*v||110*v;if(r>=.18&&r<=.86){const f=Math.sin((r-.18)/.68*Math.PI);e.save(),e.translate(c.x,c.y),e.lineCap="round",e.shadowColor="#ff7d2d",e.shadowBlur=24,e.strokeStyle=`rgba(255,157,56,${.2+f*.5})`,e.lineWidth=28,e.beginPath(),e.arc(0,0,g*.86,-Math.PI/2+p-.86,-Math.PI/2+p+.18),e.stroke(),e.strokeStyle=`rgba(255,234,132,${.28+f*.62})`,e.lineWidth=10,e.beginPath(),e.arc(0,0,g*.96,-Math.PI/2+p-.72,-Math.PI/2+p+.1),e.stroke(),e.strokeStyle=`rgba(255,255,238,${f*.86})`,e.lineWidth=3.5,e.beginPath(),e.arc(0,0,g,-Math.PI/2+p-.58,-Math.PI/2+p+.04),e.stroke(),e.restore()}if(e.save(),e.translate(c.x,c.y),e.rotate(p),e.scale(v,v),e.lineCap="round",e.lineJoin="round",m==="sword"){const f=e.createLinearGradient(-11,0,11,0);f.addColorStop(0,"#7891a8"),f.addColorStop(.48,"#f7fbff"),f.addColorStop(1,"#7d93a8"),e.fillStyle="#79502f",e.strokeStyle=s,e.lineWidth=5,e.beginPath(),e.roundRect(-7,-28,14,36,6),e.fill(),e.stroke(),e.strokeStyle="#edc85d",e.lineWidth=8,e.beginPath(),e.moveTo(-22,-29),e.lineTo(22,-29),e.stroke(),e.fillStyle=f,e.strokeStyle=s,e.lineWidth=5,e.beginPath(),e.moveTo(-8,-34),e.lineTo(-5,-112),e.lineTo(0,-127),e.lineTo(6,-112),e.lineTo(8,-34),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="rgba(255,255,255,.85)",e.lineWidth=3,e.beginPath(),e.moveTo(-2,-42),e.lineTo(0,-112),e.stroke(),e.fillStyle="#edc85d",e.beginPath(),e.arc(0,10,7,0,Math.PI*2),e.fill(),e.strokeStyle=s,e.lineWidth=3,e.stroke()}else if(m==="axe"){const f=e.createLinearGradient(-7,0,8,0);f.addColorStop(0,"#60371f"),f.addColorStop(.5,"#bb7740"),f.addColorStop(1,"#6d4026"),e.fillStyle=f,e.strokeStyle=s,e.lineWidth=5,e.beginPath(),e.roundRect(-7,-109,14,117,6),e.fill(),e.stroke();const _=e.createLinearGradient(-36,-120,35,-83);_.addColorStop(0,"#e9f3f8"),_.addColorStop(.5,"#93a9b8"),_.addColorStop(1,"#485d70"),e.fillStyle=_,e.beginPath(),e.moveTo(-4,-108),e.quadraticCurveTo(-30,-118,-42,-101),e.quadraticCurveTo(-32,-75,-5,-79),e.lineTo(6,-92),e.quadraticCurveTo(27,-89,34,-105),e.quadraticCurveTo(21,-119,4,-112),e.closePath(),e.fill(),e.strokeStyle=s,e.lineWidth=5,e.stroke(),e.strokeStyle="#f5fbff",e.lineWidth=3,e.beginPath(),e.moveTo(-35,-99),e.quadraticCurveTo(-27,-80,-9,-84),e.stroke()}else if(m==="dagger"){e.fillStyle="#71452b",e.strokeStyle=s,e.lineWidth=5,e.beginPath(),e.roundRect(-7,-25,14,34,5),e.fill(),e.stroke(),e.strokeStyle="#e1b954",e.lineWidth=7,e.beginPath(),e.moveTo(-17,-26),e.lineTo(17,-26),e.stroke();const f=e.createLinearGradient(-9,0,9,0);f.addColorStop(0,"#748b9d"),f.addColorStop(.5,"#ffffff"),f.addColorStop(1,"#61788c"),e.fillStyle=f,e.strokeStyle=s,e.lineWidth=4,e.beginPath(),e.moveTo(-8,-30),e.lineTo(-4,-66),e.lineTo(0,-79),e.lineTo(7,-65),e.lineTo(8,-30),e.closePath(),e.fill(),e.stroke()}else if(m==="hammer"){e.strokeStyle="#83502f",e.lineWidth=14,e.beginPath(),e.moveTo(0,7),e.lineTo(0,-87),e.stroke();const f=e.createLinearGradient(-42,-112,42,-81);f.addColorStop(0,"#556879"),f.addColorStop(.5,"#dce8ef"),f.addColorStop(1,"#526575"),e.fillStyle=f,e.strokeStyle=s,e.lineWidth=5,e.beginPath(),e.roundRect(-40,-112,80,34,9),e.fill(),e.stroke(),e.fillStyle="#f2c65f",e.fillRect(-5,-108,10,27)}else if(m==="spear"){e.strokeStyle="#8b5633",e.lineWidth=11,e.beginPath(),e.moveTo(0,9),e.lineTo(0,-119),e.stroke();const f=e.createLinearGradient(-13,-145,13,-119);f.addColorStop(0,"#8aa0b2"),f.addColorStop(.5,"#ffffff"),f.addColorStop(1,"#6f879b"),e.fillStyle=f,e.strokeStyle=s,e.lineWidth=4,e.beginPath(),e.moveTo(0,-145),e.lineTo(14,-119),e.lineTo(0,-110),e.lineTo(-14,-119),e.closePath(),e.fill(),e.stroke(),e.fillStyle="#d84c55",e.beginPath(),e.moveTo(-5,-112),e.lineTo(-28,-91),e.lineTo(-4,-98),e.closePath(),e.fill()}else if(m==="katana"){e.fillStyle="#472d26",e.strokeStyle=s,e.lineWidth=4,e.beginPath(),e.roundRect(-6,-31,12,40,5),e.fill(),e.stroke(),e.strokeStyle="#e5b84f",e.lineWidth=7,e.beginPath(),e.moveTo(-18,-31),e.lineTo(18,-31),e.stroke();const f=e.createLinearGradient(-11,0,11,0);f.addColorStop(0,"#778d9d"),f.addColorStop(.55,"#ffffff"),f.addColorStop(1,"#667f91"),e.fillStyle=f,e.strokeStyle=s,e.lineWidth=4,e.beginPath(),e.moveTo(-6,-35),e.quadraticCurveTo(-14,-92,7,-128),e.quadraticCurveTo(14,-91,6,-36),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#b8d8e7",e.lineWidth=2,e.beginPath(),e.moveTo(1,-41),e.quadraticCurveTo(3,-92,8,-117),e.stroke()}else if(m==="mace"){e.strokeStyle="#69422c",e.lineWidth=14,e.beginPath(),e.moveTo(0,8),e.lineTo(0,-76),e.stroke(),e.fillStyle="#778b9b",e.strokeStyle=s,e.lineWidth=5,e.beginPath(),e.arc(0,-95,24,0,Math.PI*2),e.fill(),e.stroke(),e.strokeStyle="#d7e3ea",e.lineWidth=6;for(let f=0;f<8;f+=1){const _=f*Math.PI/4;e.beginPath(),e.moveTo(Math.cos(_)*17,-95+Math.sin(_)*17),e.lineTo(Math.cos(_)*34,-95+Math.sin(_)*34),e.stroke()}}else if(m==="scythe"){e.strokeStyle="#56382e",e.lineWidth=12,e.beginPath(),e.moveTo(0,9),e.lineTo(0,-119),e.stroke();const f=e.createLinearGradient(-56,-144,23,-104);f.addColorStop(0,"#f2f8fb"),f.addColorStop(.55,"#94a8b6"),f.addColorStop(1,"#526776"),e.fillStyle=f,e.strokeStyle=s,e.lineWidth=5,e.beginPath(),e.moveTo(0,-119),e.quadraticCurveTo(-42,-147,-65,-121),e.quadraticCurveTo(-38,-126,-6,-98),e.closePath(),e.fill(),e.stroke()}else if(m==="staff")e.strokeStyle="#744a32",e.lineWidth=13,e.beginPath(),e.moveTo(0,9),e.lineTo(0,-113),e.stroke(),e.strokeStyle="#c89a56",e.lineWidth=8,e.beginPath(),e.arc(0,-117,22,Math.PI*.05,Math.PI*1.95),e.stroke(),e.fillStyle="#60e6ff",e.shadowColor="#42bfff",e.shadowBlur=15,e.beginPath(),e.moveTo(0,-146),e.lineTo(15,-122),e.lineTo(0,-105),e.lineTo(-15,-122),e.closePath(),e.fill(),e.shadowBlur=0;else if(m==="cleaver"){e.fillStyle="#66412c",e.strokeStyle=s,e.lineWidth=5,e.beginPath(),e.roundRect(-7,-31,14,40,5),e.fill(),e.stroke();const f=e.createLinearGradient(-20,-101,29,-29);f.addColorStop(0,"#dce7ed"),f.addColorStop(.55,"#8399aa"),f.addColorStop(1,"#536979"),e.fillStyle=f,e.strokeStyle=s,e.lineWidth=5,e.beginPath(),e.moveTo(-10,-35),e.lineTo(-15,-101),e.lineTo(27,-92),e.lineTo(22,-38),e.closePath(),e.fill(),e.stroke(),e.fillStyle="#26333e",e.beginPath(),e.arc(13,-83,5,0,Math.PI*2),e.fill()}else if(m==="chickenLeg"){const f=e.createLinearGradient(-10,0,12,0);f.addColorStop(0,"#b99b70"),f.addColorStop(.42,"#fff0c5"),f.addColorStop(1,"#c9ae7c"),e.strokeStyle=s,e.lineWidth=19,e.beginPath(),e.moveTo(0,8),e.quadraticCurveTo(2,-27,-4,-53),e.stroke(),e.strokeStyle=f,e.lineWidth=12,e.stroke(),e.fillStyle=f,e.strokeStyle=s,e.lineWidth=4,e.beginPath(),e.arc(-7,8,8,0,Math.PI*2),e.arc(7,8,8,0,Math.PI*2),e.fill(),e.stroke();const _=e.createRadialGradient(-12,-99,7,0,-87,48);_.addColorStop(0,"#ffbc5f"),_.addColorStop(.35,"#e77a38"),_.addColorStop(.78,"#ad462d"),_.addColorStop(1,"#713125"),e.fillStyle=_,e.strokeStyle=s,e.lineWidth=6,e.beginPath(),e.moveTo(-5,-50),e.bezierCurveTo(-35,-61,-46,-91,-32,-116),e.bezierCurveTo(-20,-137,5,-144,24,-130),e.bezierCurveTo(48,-113,50,-78,27,-59),e.quadraticCurveTo(12,-47,-5,-50),e.closePath(),e.fill(),e.stroke(),e.fillStyle="#ffc76b",e.beginPath(),e.ellipse(-11,-108,13,8,-.45,0,Math.PI*2),e.fill(),e.strokeStyle="#8c3828",e.lineWidth=4,e.beginPath(),e.arc(10,-91,22,-.6,.7),e.stroke()}else if(m==="pickaxe"){const f=e.createLinearGradient(-9,0,10,0);f.addColorStop(0,"#59331f"),f.addColorStop(.47,"#bc7540"),f.addColorStop(1,"#6d3d24"),e.fillStyle=f,e.strokeStyle=s,e.lineWidth=5,e.beginPath(),e.roundRect(-8,-114,16,123,7),e.fill(),e.stroke();const _=e.createLinearGradient(-57,-132,55,-103);_.addColorStop(0,"#526777"),_.addColorStop(.42,"#e9f4f8"),_.addColorStop(1,"#607586"),e.fillStyle=_,e.strokeStyle=s,e.lineWidth=5,e.beginPath(),e.moveTo(-4,-121),e.bezierCurveTo(-27,-133,-48,-132,-61,-119),e.lineTo(-69,-108),e.quadraticCurveTo(-38,-120,-6,-105),e.lineTo(6,-105),e.quadraticCurveTo(35,-121,65,-110),e.lineTo(57,-121),e.bezierCurveTo(37,-136,17,-133,4,-121),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#f5fbff",e.lineWidth=3,e.beginPath(),e.moveTo(-52,-118),e.quadraticCurveTo(-29,-126,-9,-115),e.moveTo(11,-116),e.quadraticCurveTo(31,-127,51,-119),e.stroke(),e.strokeStyle="#4b2c20",e.lineWidth=4;for(const w of[-18,-31,-44])e.beginPath(),e.moveTo(-7,w),e.lineTo(7,w-3),e.stroke()}else if(m==="shovel"){const f=e.createLinearGradient(-8,0,9,0);f.addColorStop(0,"#5b351f"),f.addColorStop(.5,"#bd7c45"),f.addColorStop(1,"#704126"),e.fillStyle=f,e.strokeStyle=s,e.lineWidth=5,e.beginPath(),e.roundRect(-7,-105,14,114,6),e.fill(),e.stroke();const _=e.createLinearGradient(-31,-147,32,-99);_.addColorStop(0,"#eef7fa"),_.addColorStop(.48,"#93a8b6"),_.addColorStop(1,"#4c6171"),e.fillStyle=_,e.strokeStyle=s,e.lineWidth=5,e.beginPath(),e.moveTo(-29,-112),e.quadraticCurveTo(-31,-139,0,-151),e.quadraticCurveTo(31,-139,29,-112),e.quadraticCurveTo(18,-95,0,-92),e.quadraticCurveTo(-18,-95,-29,-112),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#f4fbff",e.lineWidth=3,e.beginPath(),e.moveTo(-15,-117),e.quadraticCurveTo(0,-137,15,-117),e.stroke(),e.strokeStyle="#6e4328",e.lineWidth=12,e.beginPath(),e.arc(0,1,15,Math.PI*.12,Math.PI*.88),e.stroke()}else if(m==="greatClub"){const f=e.createLinearGradient(-26,0,28,0);f.addColorStop(0,"#512d1e"),f.addColorStop(.25,"#89502d"),f.addColorStop(.55,"#c07840"),f.addColorStop(1,"#603621"),e.fillStyle=s,e.beginPath(),e.moveTo(-14,8),e.lineTo(-20,-48),e.quadraticCurveTo(-39,-74,-35,-111),e.quadraticCurveTo(-30,-140,-4,-151),e.quadraticCurveTo(28,-147,39,-119),e.quadraticCurveTo(45,-85,22,-51),e.lineTo(14,8),e.closePath(),e.fill(),e.fillStyle=f,e.beginPath(),e.moveTo(-9,4),e.lineTo(-14,-51),e.quadraticCurveTo(-31,-77,-28,-108),e.quadraticCurveTo(-24,-132,-2,-143),e.quadraticCurveTo(23,-138,31,-116),e.quadraticCurveTo(36,-86,15,-54),e.lineTo(9,4),e.closePath(),e.fill(),e.fillStyle="#7b4528";for(const[_,w,y]of[[-18,-91,8],[17,-120,7],[12,-70,6]])e.beginPath(),e.arc(_,w,y,0,Math.PI*2),e.fill();e.strokeStyle="#e0a467",e.lineWidth=4,e.beginPath(),e.moveTo(-15,-125),e.quadraticCurveTo(0,-139,15,-130),e.stroke(),e.strokeStyle="#b9c8d2",e.lineWidth=7;for(const _ of[-62,-76])e.beginPath(),e.moveTo(-23,_),e.lineTo(25,_-4),e.stroke()}else if(m==="rapier")e.fillStyle="#51402f",e.strokeStyle=s,e.lineWidth=4,e.beginPath(),e.roundRect(-5,-27,10,37,4),e.fill(),e.stroke(),e.strokeStyle="#e7c85d",e.lineWidth=5,e.beginPath(),e.arc(0,-27,20,Math.PI*.05,Math.PI*1.95),e.stroke(),e.strokeStyle="#e8f4fa",e.lineWidth=7,e.beginPath(),e.moveTo(0,-31),e.lineTo(0,-120),e.stroke(),e.strokeStyle="#6f8595",e.lineWidth=2,e.beginPath(),e.moveTo(0,-31),e.lineTo(0,-120),e.stroke();else{const f=e.createLinearGradient(-12,0,13,0);f.addColorStop(0,"#64371f"),f.addColorStop(.5,"#c27b42"),f.addColorStop(1,"#754124"),e.beginPath(),e.moveTo(-8,5),e.lineTo(-10,-54),e.quadraticCurveTo(-28,-79,-20,-105),e.quadraticCurveTo(-8,-123,9,-119),e.quadraticCurveTo(25,-104,20,-82),e.quadraticCurveTo(17,-67,10,-54),e.lineTo(8,5),e.closePath(),e.fillStyle=s,e.fill(),e.beginPath(),e.moveTo(-4,1),e.lineTo(-6,-56),e.quadraticCurveTo(-20,-80,-13,-101),e.quadraticCurveTo(-4,-114,8,-111),e.quadraticCurveTo(19,-100,14,-82),e.quadraticCurveTo(12,-68,6,-56),e.lineTo(4,1),e.closePath(),e.fillStyle=f,e.fill(),e.strokeStyle="#e5ad70",e.lineWidth=3,e.beginPath(),e.moveTo(-6,-92),e.quadraticCurveTo(0,-104,8,-95),e.stroke(),e.strokeStyle="#4d2d20",e.lineWidth=4;for(const _ of[-18,-31,-44])e.beginPath(),e.moveTo(-7,_),e.lineTo(7,_-4),e.stroke()}e.fillStyle=a,e.strokeStyle=s,e.lineWidth=3.2,e.beginPath(),e.arc(0,0,10.3,0,Math.PI*2),e.fill(),e.stroke(),e.strokeStyle="rgba(102,57,39,.75)",e.lineWidth=2;for(const f of[-5,0,5])e.beginPath(),e.moveTo(-7,f),e.quadraticCurveTo(0,f+3,8,f),e.stroke();e.restore();return}e.save();const h=i==="rocket"?-.17:-.1;if(e.translate(170-o*8,325+o*2),e.rotate(h),e.scale(1.08,1.08),e.lineJoin="round",i==="smg")e.fillStyle="#253242",e.strokeStyle=s,e.lineWidth=7,e.beginPath(),e.roundRect(-55,-19,166,42,9),e.fill(),e.stroke(),e.fillStyle="#49d8ac",e.fillRect(-16,-15,80,21),e.fillStyle="#151e2b",e.fillRect(105,-8,72,13),e.fillRect(25,20,25,48),e.fillStyle="#72f4cf",e.fillRect(-7,-11,62,4),o>.18&&l(184,-2,25);else if(i==="sniper")e.fillStyle="#476fae",e.strokeStyle=s,e.lineWidth=7,e.beginPath(),e.roundRect(-63,-13,205,29,7),e.fill(),e.stroke(),e.fillStyle="#182437",e.fillRect(126,-7,105,12),e.fillRect(22,14,25,52),e.beginPath(),e.ellipse(47,-18,35,13,0,0,Math.PI*2),e.fill(),e.fillStyle="#82b8ff",e.fillRect(-15,-8,105,5),o>.18&&l(238,-1,32);else if(i==="rocket"){const d=e.createLinearGradient(0,-28,0,28);d.addColorStop(0,"#ffb34f"),d.addColorStop(.46,"#e95f3f"),d.addColorStop(1,"#7a2e2d"),e.strokeStyle=s,e.lineWidth=47,e.beginPath(),e.moveTo(-55,0),e.lineTo(154,0),e.stroke(),e.strokeStyle=d,e.lineWidth=34,e.stroke(),e.fillStyle="#263848",e.fillRect(24,15,28,54),e.fillStyle="#ffd06a",e.beginPath(),e.arc(161,0,22,0,Math.PI*2),e.fill(),o>.18&&l(189,0,38)}e.fillStyle=a,e.strokeStyle=s,e.lineWidth=5;for(const[d,u]of[[6,12],[58,-7]])e.beginPath(),e.arc(d,u,13,0,Math.PI*2),e.fill(),e.stroke();e.restore()}function Tf(e,t){const n=document.createElement("canvas");n.width=Math.round(400*t),n.height=Math.round(560*t);const i=n.getContext("2d");i.scale(t,t),i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",e2(i,e);const r=K_(),[o,s,a,l]=Z_[r],h=Math.min(376/a,530/l),d=a*h,u=l*h,p=document.createElement("canvas");p.width=n.width,p.height=n.height;const c=p.getContext("2d");c.scale(t,t),c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(Ni,o,s,a,l,(400-d)/2,12+(530-u),d,u);const m=Q_(c,e.hairColor,t);i.drawImage(p,0,0,n.width,n.height,0,0,400,560),n.__hairRecolorCount=m;const v=document.createElement("canvas");v.width=n.width,v.height=n.height;const g=v.getContext("2d");return g.scale(t,t),g.imageSmoothingEnabled=!0,g.imageSmoothingQuality="high",n2(g,e),i2(g,e),i.save(),i.globalAlpha=1,i.drawImage(v,0,0,n.width,n.height,0,0,400,560),i.restore(),r2(i,e),t2(i,e),n}function a2(e,t={},n=Mf,i=null){const r=document.createElement("canvas");r.width=Math.round(400*n),r.height=Math.round(560*n);const o=i||Tf(e,n),s=r.getContext("2d");s.scale(n,n),s.imageSmoothingEnabled=!0,s.imageSmoothingQuality="high";let a=0,l=0;if(t.mode==="attack"&&t.attackPhase>=0){const A=t.attackPhase,R=L=>{const M=Tt.clamp(L,0,1);return M*M*(3-2*M)};a=A<.3?Tt.lerp(0,-17,R(A/.3)):A<.62?Tt.lerp(-17,23,1-Math.pow(1-(A-.3)/.32,3)):Tt.lerp(23,0,R((A-.62)/.38)),l=Math.sin(Math.min(1,A)*Math.PI)*.13}const h=t.walkPhase||0,d=t.mode==="walk"?Math.sin(h*Math.PI*2):0,u=t.mode==="walk"?Math.abs(Math.sin(h*Math.PI*2))*2.2:0,p=t.mode==="attack"&&t.attackPhase>=0?Math.sin(t.attackPhase*Math.PI)*2.6:0;s.translate(a+d*1.8,u+p),s.translate(200,280),s.rotate(a*.0024+d*.012),s.translate(-200,-280);const c=document.createElement("canvas");c.width=r.width,c.height=r.height;const m=c.getContext("2d");m.drawImage(o,0,0),m.save(),m.scale(n,n),m.globalCompositeOperation="destination-out",m.lineCap="round",m.lineJoin="round";const v=(A,R)=>{m.lineWidth=R,m.beginPath(),m.moveTo(A[0][0],A[0][1]),A.slice(1).forEach(([L,M])=>m.lineTo(L,M)),m.stroke()};v([[135,235],[106,315],[96,392]],70),v([[265,235],[294,315],[304,392]],70),(Math.abs(d)>.04||l>0)&&(v([[165,400],[159,458],[143,520]],72),v([[235,400],[241,458],[257,520]],72)),m.restore();const g=(A,R,L,M,T,I,H)=>{s.save(),s.translate(T,I),s.rotate(H),s.drawImage(o,A*n,R*n,L*n,M*n,A-T,R-I,L,M),s.restore()},f=(A,R,L,M,T,I,H,z,X)=>{s.save(),s.translate(H,z),s.rotate(X),s.drawImage(o,A*n,R*n,L*n,M*n,A-T,R-I,L,M),s.restore()};(Math.abs(d)>.04||l>0)&&(g(96,378,122,178,165,400,d*.15-l),g(182,378,122,178,235,400,-d*.15+l));let _=t.mode==="walk"?d*.12:0,w=_,y=t.mode==="walk"?-d*.1:0,C=t.mode==="walk"?-d*.04:0;if(t.mode==="attack"&&!e.weaponType){const A=$c(t.attackPhase);y=A*.5,C=A*.92,_=-A*.22}else e.weaponType&&(_=-.55,w=-1.45,y=.55-(t.recoil||0)*.04,C=1.45-(t.recoil||0)*.06);if(e.weaponType){const A=o2(_,w),R=jc(y,C);f(72,205,118,145,135,235,135,235,_),f(47,286,100,139,106,315,A.elbow.x,A.elbow.y,w),f(210,205,118,145,265,235,265,235,y),f(253,286,100,139,294,315,R.elbow.x,R.elbow.y,C)}else{g(54,207,137,215,135,235,_);const{elbow:A}=jc(y,C);f(210,205,118,145,265,235,265,235,y),f(253,286,100,139,294,315,A.x,A.y,C)}return s.drawImage(c,0,0,r.width,r.height,0,0,400,560),s2(s,e,{...t,rightArmAngle:y,rightForearmAngle:C}),r}function ws(e,t){if(e.userData.value===t)return;e.userData.value=t;const{canvas:n,texture:i,color:r}=e.userData,o=n.getContext("2d");o.clearRect(0,0,n.width,n.height),o.fillStyle="rgba(5, 10, 20, .75)",o.beginPath(),o.roundRect(22,13,212,94,30),o.fill(),o.strokeStyle=r,o.lineWidth=6,o.stroke(),o.fillStyle=r,o.textAlign="center",o.textBaseline="middle";const s=String(t);let a=66;do o.font=`900 ${a}px Arial`,a-=2;while(a>24&&o.measureText(s).width>202);o.fillText(s,128,62),i.needsUpdate=!0}const Na=new Map;function l2(e){if(e.isPlayer||!mt){ws(e.label,e.number);return}Na.set(e,e.number)}function c2(e=4){let t=0;for(const[n,i]of Na)if(Na.delete(n),ws(n.label,i),t+=1,t>=e)break}function Zc(e,t){return Math.atan2(Math.sin(t-e),Math.cos(t-e))}function fo(e,t){const n=e.x-t.x,i=e.z-t.z,r=Math.cos(t.yaw),o=Math.sin(t.yaw);return new Ge(n*r-i*o,n*o+i*r)}function bf(e,t=.7){return Mn.some(n=>{const i=fo(e,n);return Math.abs(i.x)<n.width/2+t&&Math.abs(i.y)<n.depth/2+t})}function Fa(e,t=.7){let n=!1;for(let i=0;i<2;i+=1)for(const r of Mn){const o=fo(e,r),s=r.width/2,a=r.depth/2,l=Tt.clamp(o.x,-s,s),h=Tt.clamp(o.y,-a,a);let d=o.x-l,u=o.y-h;const p=d*d+u*u;if(p>=t*t)continue;let c=0,m=0;if(p>1e-6){const f=Math.sqrt(p),_=t-f;c=d/f*_,m=u/f*_}else{const f=s+t-Math.abs(o.x),_=a+t-Math.abs(o.y);f<_?c=(o.x<0?-1:1)*f:m=(o.y<0?-1:1)*_}const v=Math.cos(r.yaw),g=Math.sin(r.yaw);e.x+=c*v+m*g,e.z+=-c*g+m*v,n=!0}return n}function po(e,t,n=0){let i=null;for(const r of Mn){const o=fo(e,r),s=fo(t,r),a=s.x-o.x,l=s.y-o.y,h=r.width/2+n,d=r.depth/2+n;let u=0,p=1,c=!1;for(const[m,v,g,f]of[[o.x,a,-h,h],[o.y,l,-d,d]]){if(Math.abs(v)<1e-6){(m<g||m>f)&&(c=!0);continue}const _=1/v;let w=(g-m)*_,y=(f-m)*_;w>y&&([w,y]=[y,w]),u=Math.max(u,w),p=Math.min(p,y),u>p&&(c=!0)}c||u<0||u>1||i&&u>=i.time||(i={wall:r,time:u,point:e.clone().lerp(t,u)})}return i}function wf(e,t,n=.08){const i=po(e,t,n);return!!(i&&i.time>.025&&i.time<.975)}const h2=new P,u2=new P,rd=new P,d2=new P;function f2(e,t,n=.7,i=1){const r=h2.copy(t).setY(0);if(r.lengthSq()<1e-4)return r;r.normalize();const o=u2.copy(e).addScaledVector(r,1.8+n),s=po(e,o,n*.82);if(!s)return r;const a=s.wall,l=a.width>=a.depth?rd.set(Math.cos(a.yaw),0,-Math.sin(a.yaw)):rd.set(Math.sin(a.yaw),0,Math.cos(a.yaw));let h=Math.sign(l.dot(r));Math.abs(l.dot(r))<.24&&(h=i||1);const d=d2.set(e.x-a.x,0,e.z-a.z);return d.lengthSq()>.001&&d.normalize(),l.multiplyScalar(h||1).multiplyScalar(.86).addScaledVector(d,.42).normalize()}function Xn(e=4,t=St-3){let n=new P;for(let i=0;i<40;i+=1){const r=Math.random()*Math.PI*2,o=Tt.lerp(e,t,Math.sqrt(Math.random()));if(n=new P(Math.sin(r)*o,0,Math.cos(r)*o),!bf(n,1.4))return n}return n}function _i(e,t=1.2){const n=St-t,i=e.x*e.x+e.z*e.z;if(i>n*n){const r=n/Math.sqrt(i);e.x*=r,e.z*=r}}const Q=[];let mt=!1;const p2=[];function m2(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.translate(128,128);const n=-Math.PI*.75,i=-Math.PI*.25,r=112,o=t.createRadialGradient(0,0,22,0,0,r);o.addColorStop(0,"rgba(255,20,67,.12)"),o.addColorStop(.55,"rgba(255,25,74,.38)"),o.addColorStop(1,"rgba(255,60,99,.64)"),t.fillStyle=o,t.beginPath(),t.moveTo(0,0),t.arc(0,0,r,n,i),t.closePath(),t.fill(),t.strokeStyle="rgba(255,91,126,.98)",t.lineWidth=15,t.beginPath(),t.arc(0,0,r-8,n,i),t.stroke(),t.strokeStyle="rgba(255,18,63,.88)",t.lineWidth=11,t.beginPath(),t.arc(0,0,57,n,i),t.stroke(),t.strokeStyle="rgba(255,87,118,1)",t.lineWidth=7;for(const a of[n,i])t.beginPath(),t.moveTo(Math.cos(a)*31,Math.sin(a)*31),t.lineTo(Math.cos(a)*108,Math.sin(a)*108),t.stroke();t.shadowColor="rgba(255,209,91,.9)",t.shadowBlur=12,t.fillStyle="rgba(255,237,176,.98)",t.beginPath(),t.moveTo(0,111),t.lineTo(-19,70),t.lineTo(0,79),t.lineTo(19,70),t.closePath(),t.fill(),t.shadowBlur=0,t.font="900 38px Arial",t.textAlign="center",t.textBaseline="middle",t.lineJoin="round",t.strokeStyle="rgba(47,4,16,.95)",t.lineWidth=10,t.strokeText("×2",0,-67),t.fillStyle="#fff3f6",t.fillText("×2",0,-67);const s=new vo(e);return s.colorSpace=Wt,s.generateMipmaps=!1,s.minFilter=un,s}const g2=m2(),v2=new _o(2.36,2.36);class Ef{constructor({name:t,color:n,position:i,isPlayer:r=!1}){this.name=t,this.color=n,this.isPlayer=r,this.active=!0,this.number=Ya,this.ammo=0,this.weaponType=null,this.boosting=!1,this.boostDrain=0,this.visualTier=0,this.respawnTimer=0,this.invincibleTimer=0,this.meleeWeapon="club",this.meleeStyle="club",this.rangeBuffTimer=0,this.damageBuffTimer=0,this.combatBuffHudKey="",this.yaw=Math.random()*Math.PI*2,this.forwardVector=new P,this.movePreviousPosition=new P,this.moveAttemptedVector=new P,this.moveContactPosition=new P,this.steeringVector=new P,this.networkMoveVector=new P,this.networkAimPoint=new P,this.attackCooldown=Math.random()*.3,this.attackAnimation=0,this.attackAnimationDuration=.43,this.attackResolved=!0,this.shootCooldown=0,this.shootReadyAt=0,this.gunRecoil=0,this.hitPulse=0,this.hitReaction=0,this.hitSide=1,this.aiThink=0,this.aiGoal=null,this.aiDecisionTimer=0,this.aiMoveTarget=null,this.aiFoe=null,this.walkTime=Math.random()*Math.PI*2,this.isMoving=!1,this.motionBlend=0,this.avatarFrameKey="",this.avatarPose={mode:"idle",walkPhase:0,attackPhase:-1,recoil:0,spin:0},this.avatarFrameBlend=1,this.avatarFrameBlendDuration=.05,this.avatarTextureCache=new Map,this.avatarTextureQueuedKey="",this.avatarBaseKey="",this.avatarBaseCanvas=null,this.avatarDirectionTextures={},this.avatarFacing="front",this.suspendAvatarRefresh=!1,this.group=new De,this.group.position.copy(i),this.group.rotation.y=this.yaw,this.groundShadow=new O(new Wn(.68,22),new je({color:463132,transparent:!0,opacity:.3,depthWrite:!1})),this.groundShadow.rotation.x=-Math.PI/2,this.groundShadow.position.y=.028,this.group.add(this.groundShadow),this.model=new De,this.group.add(this.model);const o=new de({color:n,roughness:.62,metalness:.08,emissive:n,emissiveIntensity:.06});this.shirtMaterial=o;const s=[...t].reduce((N,D)=>N+D.charCodeAt(0),0);if(this.aiFlankSign=s%2===0?1:-1,this.aiFlankSpread=(s%3-1)*.42,this.aiLeaderBias=s%5<3,this.aiTactic="idle",!r){const N=["club","sword","axe","dagger","hammer","spear","katana","mace","scythe","staff","cleaver","rapier","chickenLeg","pickaxe","shovel","greatClub"];this.meleeStyle=N[s%N.length]}const a=[16041889,15117696,13207135,10183240,7358005],l=[4925980,2107702,7356447,12684102,8006964,3158843],h=new de({color:r?a[0]:a[s%a.length],roughness:.7,metalness:.01}),d=new de({color:2437704,roughness:.82}),u=new de({color:r?l[0]:l[s%l.length],roughness:.86}),p=new de({color:1581100,roughness:.7,metalness:.08});this.pantsMaterial=d,this.shoeMaterial=p,this.hairMaterial=u,this.skinColor=`#${h.color.getHexString()}`,this.hairColor=`#${u.color.getHexString()}`,this.body=new O(new Bn(.4,.42,7,14),o),this.body.position.y=1.3,this.body.scale.set(1.04,1.06,.78),this.body.castShadow=!0,this.body.receiveShadow=!0,this.model.add(this.body);const c=new O(new st(.17,.19,.24,12),h);c.position.y=1.77,c.castShadow=!0,this.model.add(c);const m=new O(new dt(.45,22,16),h);m.position.y=2.06,m.scale.set(.96,1.04,.94),m.castShadow=!0,this.model.add(m),this.shortHair=new De;const v=new O(new dt(.455,20,12,0,Math.PI*2,0,Math.PI*.55),u);v.position.y=2.1,v.scale.set(.98,1,.96),v.castShadow=!0,this.shortHair.add(v);const g=[[-.29,2.29,.2,-.55,.18,.68],[-.12,2.35,.25,-.25,.35,.86],[.08,2.36,.24,.14,.38,.86],[.28,2.3,.18,.5,.2,.68],[-.34,2.31,-.04,-.78,.52,.05],[.34,2.32,-.06,.78,.52,.05],[0,2.48,-.08,.08,.96,-.22]];for(const[N,D,te,Me,be,He]of g){const it=new O(new an(.105,.34,8),u);it.position.set(N,D,te),it.quaternion.setFromUnitVectors(new P(0,1,0),new P(Me,be,He).normalize()),it.castShadow=!0,this.shortHair.add(it)}for(const[N,D]of[[-.25,-.52],[-.09,-.2],[.08,.18],[.24,.48]]){const te=new O(new Bn(.07,.17,5,9),u);te.position.set(N,2.3,.36),te.rotation.z=D,te.rotation.x=-.16,te.castShadow=!0,this.shortHair.add(te)}for(const N of[-1,1]){const D=new O(new an(.12,.34,8),u);D.position.set(N*.4,2.2,.03),D.quaternion.setFromUnitVectors(new P(0,1,0),new P(N*.8,-.28,.12).normalize()),D.castShadow=!0,this.shortHair.add(D)}this.model.add(this.shortHair),this.capGroup=new De;const f=new O(new dt(.42,14,9),o);f.scale.y=.68,f.position.y=2.28,f.castShadow=!0,this.capGroup.add(f);const _=new O(new Pe(.52,.08,.36),o);_.position.set(0,2.22,.34),_.castShadow=!0,this.capGroup.add(_),this.capGroup.visible=!1,this.model.add(this.capGroup),this.spikyHair=new De;for(const[N,D,te]of[[-.25,-.08,-.18],[0,-.15,0],[.25,-.08,.18],[-.18,.18,-.12],[.18,.18,.12]]){const Me=new O(new an(.16,.48,7),u);Me.position.set(N,2.42,D),Me.rotation.z=te,Me.castShadow=!0,this.spikyHair.add(Me)}this.spikyHair.visible=!1,this.model.add(this.spikyHair),this.longHair=new De;const w=new O(new Pe(.7,.9,.24),u);w.position.set(0,1.77,-.25),w.castShadow=!0,this.longHair.add(w);for(const N of[-.38,.38]){const D=new O(new Bn(.11,.48,5,8),u);D.position.set(N,1.83,-.02),D.castShadow=!0,this.longHair.add(D)}this.longHair.visible=!1,this.model.add(this.longHair),this.beanieGroup=new De;const y=new O(new dt(.43,14,9),o);y.scale.y=.78,y.position.y=2.29,y.castShadow=!0,this.beanieGroup.add(y);const C=new O(new dt(.13,10,8),o);C.position.y=2.68,C.castShadow=!0,this.beanieGroup.add(C),this.beanieGroup.visible=!1,this.model.add(this.beanieGroup),this.mohawkHair=new De;for(const N of[-.28,-.1,.08,.26]){const D=new O(new an(.14,.54,7),u);D.position.set(0,2.43,N),D.castShadow=!0,this.mohawkHair.add(D)}this.mohawkHair.visible=!1,this.model.add(this.mohawkHair),this.cowboyHat=new De;const A=new O(new st(.58,.58,.08,20),new de({color:10249016,roughness:.82}));A.position.y=2.28,A.castShadow=!0,this.cowboyHat.add(A);const R=new O(new st(.29,.36,.38,14),new de({color:9196591,roughness:.8}));R.position.y=2.48,R.castShadow=!0,this.cowboyHat.add(R),this.cowboyHat.visible=!1,this.model.add(this.cowboyHat),this.ponytailGroup=new De;const L=new O(new dt(.4,14,8,0,Math.PI*2,0,Math.PI*.56),u);L.position.y=2.09,L.castShadow=!0,this.ponytailGroup.add(L);const M=new O(new Bn(.13,.62,5,9),u);M.position.set(0,1.72,-.34),M.rotation.x=-.28,M.castShadow=!0,this.ponytailGroup.add(M);const T=new O(new It(.13,.035,7,14),new de({color:16737932,roughness:.55}));T.position.set(0,2,-.34),T.rotation.x=Math.PI/2,this.ponytailGroup.add(T),this.ponytailGroup.visible=!1,this.model.add(this.ponytailGroup),this.helmetGroup=new De;const I=new de({color:6915483,roughness:.28,metalness:.68}),H=new O(new dt(.43,16,9,0,Math.PI*2,0,Math.PI*.58),I);H.position.y=2.11,H.castShadow=!0,this.helmetGroup.add(H);const z=new O(new Pe(.58,.13,.08),new de({color:8187135,emissive:2460327,emissiveIntensity:1.8,transparent:!0,opacity:.78}));z.position.set(0,2.11,.37),this.helmetGroup.add(z),this.helmetGroup.visible=!1,this.model.add(this.helmetGroup),this.wizardHat=new De;const X=new de({color:5649807,roughness:.62,metalness:.08}),$=new O(new st(.58,.58,.08,22),X);$.position.y=2.28,$.castShadow=!0,this.wizardHat.add($);const Y=new O(new an(.38,.94,14),X);Y.position.y=2.77,Y.rotation.z=.12,Y.castShadow=!0,this.wizardHat.add(Y);const ee=new O(new wn(.1),new de({color:16767854,emissive:16754984,emissiveIntensity:1.8}));ee.position.set(.16,2.72,.32),this.wizardHat.add(ee),this.wizardHat.visible=!1,this.model.add(this.wizardHat),this.headphonesGroup=new De;const q=new de({color:2370620,roughness:.35,metalness:.42}),he=new O(new It(.43,.055,8,22),q);he.position.y=2.08,this.headphonesGroup.add(he);for(const N of[-.43,.43]){const D=new O(new Pe(.13,.3,.22),new de({color:5300210,emissive:1602956,emissiveIntensity:1.25,roughness:.3}));D.position.set(N,2.03,0),this.headphonesGroup.add(D)}this.headphonesGroup.visible=!1,this.model.add(this.headphonesGroup),this.crownHat=new De;const ge=new de({color:16764738,emissive:10378505,emissiveIntensity:1.5,roughness:.24,metalness:.7}),Se=new O(new st(.36,.39,.16,16),ge);Se.position.y=2.36,this.crownHat.add(Se);for(let N=0;N<5;N+=1){const D=new O(new an(.1,.42,7),ge),te=N/5*Math.PI*2;D.position.set(Math.sin(te)*.27,2.62,Math.cos(te)*.27),this.crownHat.add(D)}this.crownHat.visible=!1,this.model.add(this.crownHat);const Re=new de({color:16317439,roughness:.38}),Ze=new de({color:3055080,emissive:934248,emissiveIntensity:.3,roughness:.28}),lt=new de({color:1056821,roughness:.3}),K=new je({color:16777215}),fe=new de({color:u.color,roughness:.86});for(const N of[-.14,.14]){const D=new O(new dt(.088,14,10),Re);D.scale.set(1.08,.9,.42),D.position.set(N,2.09,.405),this.model.add(D);const te=new O(new dt(.052,12,9),Ze);te.scale.z=.52,te.position.set(N,2.088,.438),this.model.add(te);const Me=new O(new dt(.027,10,8),lt);Me.scale.z=.5,Me.position.set(N,2.088,.466),this.model.add(Me);const be=new O(new dt(.012,8,6),K);be.position.set(N-.013,2.108,.484),this.model.add(be);const He=new O(new Bn(.016,.11,4,8),fe);He.rotation.z=Math.PI/2+(N<0?-.08:.08),He.position.set(N,2.205,.392),this.model.add(He)}const le=new O(new dt(.045,10,8),h);le.scale.set(.7,.9,.55),le.position.set(0,2.01,.44),this.model.add(le);const Ne=new O(new Pe(.15,.025,.02),new de({color:9191235,roughness:.65}));Ne.position.set(0,1.915,.425),this.model.add(Ne);const Fe=new je({color:15895697,transparent:!0,opacity:.42,depthWrite:!1});for(const N of[-.255,.255]){const D=new O(new Wn(.062,14),Fe);D.position.set(N,1.975,.447),this.model.add(D)}for(const N of[-.435,.435]){const D=new O(new dt(.08,9,7),h);D.scale.x=.55,D.position.set(N,2.03,0),this.model.add(D)}const Oe=(N,D,te)=>{const Me=new O(new Bn(N,Math.max(.08,D-N*2),6,11),te);return Me.castShadow=!0,Me},Et=N=>{const D=new De;D.position.set(N*.54,1.57,0),D.rotation.z=N*.12;const te=Oe(.145,.34,o);te.position.y=-.17,D.add(te);const Me=new O(new dt(.13,12,9),h);Me.position.y=-.34,Me.castShadow=!0,D.add(Me);const be=Oe(.12,.34,h);be.position.y=-.49,be.scale.set(.95,1,.95),D.add(be);const He=new O(new dt(.155,14,10),h);return He.position.set(0,-.68,.03),He.scale.set(.86,1.05,.8),He.castShadow=!0,D.add(He),this.model.add(D),{arm:D,hand:He}},Ke=Et(-1),k=Et(1);this.leftArm=Ke.arm,this.rightArm=k.arm;for(const N of[-.53,.53]){const D=new O(new dt(.205,14,10),o);D.scale.set(.92,.82,.88),D.position.set(N,1.58,0),D.castShadow=!0,this.model.add(D)}this.hands=[Ke.hand,k.hand],this.leftLeg=Oe(.19,.8,d),this.leftLeg.position.set(-.23,.43,0),this.leftLeg.scale.set(.9,1.08,.9),this.model.add(this.leftLeg),this.rightLeg=Oe(.19,.8,d),this.rightLeg.position.set(.23,.43,0),this.rightLeg.scale.set(.9,1.08,.9),this.model.add(this.rightLeg),this.lowerLegs=[];for(const N of[-.23,.23]){const D=Oe(.15,.48,h);D.position.set(N,.34,0),D.visible=!1,this.lowerLegs.push(D),this.model.add(D)}this.shoes=[];const ut=new de({color:15068659,roughness:.72}),ke=new de({color:16251903,roughness:.58});for(const N of[-.23,.23]){const D=new O(new Bn(.16,.25,6,12),p);D.rotation.x=Math.PI/2,D.scale.set(1.08,1,.82),D.position.set(N,.14,.13),D.castShadow=!0;const te=new O(new Bn(.17,.26,5,11),ut);te.position.z=.045,te.scale.set(1.02,1.02,.62),D.add(te);for(const Me of[-.07,0,.07]){const be=new O(new Pe(.23,.025,.025),ke);be.position.set(0,Me+.08,-.17),D.add(be)}this.shoes.push(D),this.model.add(D)}this.shoeCuffs=new De;for(const N of[-.23,.23]){const D=new O(new st(.19,.2,.38,9),p);D.position.set(N,.31,0),D.castShadow=!0,this.shoeCuffs.add(D)}this.shoeCuffs.visible=!1,this.model.add(this.shoeCuffs),this.runningShoeDetails=new De;const Qe=new de({color:8385535,emissive:1805477,emissiveIntensity:1.1,roughness:.35});for(const N of[-.23,.23]){const D=new O(new Pe(.37,.07,.12),Qe);D.position.set(N,.11,.2),D.rotation.z=N<0?-.12:.12,this.runningShoeDetails.add(D);const te=new O(new Pe(.22,.1,.16),Qe);te.position.set(N,.08,-.16),this.runningShoeDetails.add(te)}this.runningShoeDetails.visible=!1,this.model.add(this.runningShoeDetails),this.leatherShoeDetails=new De;const Le=new de({color:3218455,roughness:.22,metalness:.18});for(const N of[-.23,.23]){const D=new O(new dt(.19,10,7),Le);D.scale.set(.9,.45,1.18),D.position.set(N,.12,.33),this.leatherShoeDetails.add(D)}this.leatherShoeDetails.visible=!1,this.model.add(this.leatherShoeDetails),this.combatShoeDetails=new De;const _t=new de({color:5793653,roughness:.36,metalness:.55});for(const N of[-.23,.23]){const D=new O(new Pe(.34,.13,.2),_t);D.position.set(N,.15,.31),this.combatShoeDetails.add(D);const te=new O(new Pe(.08,.12,.08),Qe);te.position.set(N+(N<0?-.17:.17),.31,.04),this.combatShoeDetails.add(te)}this.combatShoeDetails.visible=!1,this.model.add(this.combatShoeDetails),this.canvasShoeDetails=new De;const Te=new de({color:16053484,roughness:.76});for(const N of[-.23,.23]){const D=new O(new Pe(.32,.08,.17),Te);D.position.set(N,.13,.34),this.canvasShoeDetails.add(D);const te=new O(new Wn(.07,10),Te);te.rotation.y=N<0?-Math.PI/2:Math.PI/2,te.position.set(N+(N<0?-.175:.175),.24,.02),this.canvasShoeDetails.add(te)}this.canvasShoeDetails.visible=!1,this.model.add(this.canvasShoeDetails),this.goldShoeDetails=new De;const qe=new de({color:16766543,emissive:10181641,emissiveIntensity:1.35,roughness:.22,metalness:.76});for(const N of[-.23,.23]){const D=new O(new Pe(.37,.16,.32),qe);D.position.set(N,.15,.22),D.castShadow=!0,this.goldShoeDetails.add(D);const te=new O(new an(.09,.3,6),qe);te.rotation.z=N<0?-Math.PI/2:Math.PI/2,te.position.set(N+(N<0?-.25:.25),.23,0),this.goldShoeDetails.add(te)}this.goldShoeDetails.visible=!1,this.model.add(this.goldShoeDetails);const kt=new O(new Pe(.86,.12,.5),new de({color:1383721,roughness:.75}));kt.position.y=.8,kt.castShadow=!0,this.model.add(kt);const yt=new O(new Pe(.19,.17,.07),new de({color:16764761,roughness:.3,metalness:.72}));yt.position.set(0,.8,.285),yt.castShadow=!0,this.model.add(yt),this.cargoPockets=new De;for(const N of[-.34,.34]){const D=new O(new Pe(.24,.28,.16),d);D.position.set(N,.52,.15),D.castShadow=!0,this.cargoPockets.add(D)}this.cargoPockets.visible=!1,this.model.add(this.cargoPockets),this.pantsStripes=new De;const x=new de({color:15398143,roughness:.55});for(const N of[-.38,.38]){const D=new O(new Pe(.055,.7,.08),x);D.position.set(N,.44,.02),this.pantsStripes.add(D)}this.pantsStripes.visible=!1,this.model.add(this.pantsStripes),this.kneeGuards=new De;const S=new de({color:7636890,roughness:.35,metalness:.58});for(const N of[-.23,.23]){const D=new O(new Pe(.28,.25,.14),S);D.position.set(N,.42,.16),D.castShadow=!0,this.kneeGuards.add(D)}this.kneeGuards.visible=!1,this.model.add(this.kneeGuards),this.jeansDetails=new De;const G=new de({color:14067293,roughness:.82});for(const N of[-.23,.23]){const D=new O(new Pe(.025,.66,.035),G);D.position.set(N,.45,.17),this.jeansDetails.add(D);const te=new O(new Pe(.22,.2,.045),d);te.position.set(N,.69,.18),te.rotation.z=N<0?-.12:.12,this.jeansDetails.add(te)}this.jeansDetails.visible=!1,this.model.add(this.jeansDetails),this.joggerDetails=new De;for(const N of[-.23,.23]){const D=new O(new st(.18,.16,.18,9),d);D.position.set(N,.13,0),this.joggerDetails.add(D)}const Z=new O(new It(.14,.02,6,14),G);Z.position.set(0,.77,.25),this.joggerDetails.add(Z),this.joggerDetails.visible=!1,this.model.add(this.joggerDetails),this.camoDetails=new De;const ne=[new de({color:2506033,roughness:.9}),new de({color:7504218,roughness:.9}),new de({color:5003579,roughness:.9})];for(let N=0;N<8;N+=1){const D=N%2?-.23:.23,te=new O(new Pe(.13+N%3*.035,.11,.035),ne[N%ne.length]);te.position.set(D+(N%3-1)*.04,.2+N%4*.16,.175),te.rotation.z=N*.41,this.camoDetails.add(te)}this.camoDetails.visible=!1,this.model.add(this.camoDetails),this.formalPantsDetails=new De;const j=new de({color:14147817,roughness:.56});for(const N of[-.23,.23]){const D=new O(new Pe(.022,.7,.025),j);D.position.set(N,.44,.175),this.formalPantsDetails.add(D)}this.formalPantsDetails.visible=!1,this.model.add(this.formalPantsDetails),this.techPantsDetails=new De;const Ie=new de({color:6650252,roughness:.28,metalness:.66}),ce=new de({color:7532543,emissive:2531256,emissiveIntensity:2.1});for(const N of[-.23,.23]){const D=new O(new Pe(.3,.36,.13),Ie);D.position.set(N,.56,.16),D.castShadow=!0,this.techPantsDetails.add(D);const te=new O(new Pe(.05,.24,.025),ce);te.position.set(N,.56,.235),this.techPantsDetails.add(te)}this.techPantsDetails.visible=!1,this.model.add(this.techPantsDetails);const Ee=new O(new Wn(.12,12),new de({color:16055295,emissive:7527679,emissiveIntensity:.7}));Ee.position.set(0,1.35,.245),this.model.add(Ee);const Ae=new O(new It(.19,.026,7,18),new de({color:15398399,roughness:.52}));Ae.position.set(0,1.69,.252),Ae.scale.y=.52,this.model.add(Ae);for(const N of[-.39,.39]){const D=new O(new Pe(.025,.66,.025),new de({color:13161695,roughness:.7}));D.position.set(N,1.29,.252),this.model.add(D)}const ie=new de({color:15332347,roughness:.55});this.jacketGroup=new De;for(const N of[-.22,.22]){const D=new O(new Pe(.36,.72,.08),o);D.position.set(N,1.27,.28),D.castShadow=!0,this.jacketGroup.add(D)}const ve=new O(new Pe(.055,.68,.035),ie);ve.position.set(0,1.27,.335),this.jacketGroup.add(ve);for(const N of[-.13,.13]){const D=new O(new Pe(.2,.22,.05),ie);D.position.set(N,1.68,.31),D.rotation.z=N<0?-.45:.45,this.jacketGroup.add(D)}this.jacketGroup.visible=!1,this.model.add(this.jacketGroup),this.hoodieGroup=new De;const Ue=new O(new It(.36,.11,8,20),o);Ue.rotation.x=Math.PI/2,Ue.position.set(0,1.73,-.05),Ue.castShadow=!0,this.hoodieGroup.add(Ue);for(const N of[-.1,.1]){const D=new O(new st(.018,.018,.38,6),ie);D.position.set(N,1.45,.29),this.hoodieGroup.add(D)}const Ce=new O(new Pe(.48,.24,.07),o);Ce.position.set(0,1.05,.285),this.hoodieGroup.add(Ce),this.hoodieGroup.visible=!1,this.model.add(this.hoodieGroup),this.vestGroup=new De;const pe=new de({color:3160134,roughness:.68,metalness:.12});for(const N of[-.24,.24]){const D=new O(new Pe(.34,.78,.1),pe);D.position.set(N,1.28,.3),D.castShadow=!0,this.vestGroup.add(D)}const Ve=new O(new Pe(.16,.13,.06),ie);Ve.position.set(0,1.15,.37),this.vestGroup.add(Ve),this.vestGroup.visible=!1,this.model.add(this.vestGroup),this.armorGroup=new De;const U=new de({color:9545917,roughness:.3,metalness:.72}),ae=new O(new Pe(.74,.72,.16),U);ae.position.set(0,1.31,.31),ae.castShadow=!0,this.armorGroup.add(ae);for(const N of[-.58,.58]){const D=new O(new dt(.24,10,7),U);D.scale.y=.6,D.position.set(N,1.58,0),D.castShadow=!0,this.armorGroup.add(D)}const ue=new O(new wn(.13),new de({color:8186367,emissive:3261921,emissiveIntensity:1.5}));ue.position.set(0,1.35,.42),this.armorGroup.add(ue),this.armorGroup.visible=!1,this.model.add(this.armorGroup),this.suitGroup=new De;const ye=new de({color:2107961,roughness:.58,metalness:.12});for(const N of[-.18,.18]){const D=new O(new Pe(.26,.62,.08),ye);D.position.set(N,1.38,.31),D.rotation.z=N<0?-.22:.22,D.castShadow=!0,this.suitGroup.add(D)}const re=new O(new Pe(.24,.68,.06),ie);re.position.set(0,1.35,.34),this.suitGroup.add(re);const J=new O(new an(.08,.48,5),o);J.position.set(0,1.38,.4),J.rotation.z=Math.PI,this.suitGroup.add(J),this.suitGroup.visible=!1,this.model.add(this.suitGroup),this.trenchGroup=new De;for(const N of[-.23,.23]){const D=new O(new Pe(.4,1.45,.1),o);D.position.set(N,1.02,.29),D.rotation.z=N<0?-.035:.035,D.castShadow=!0,this.trenchGroup.add(D)}const we=new O(new Pe(.92,.12,.08),ye);we.position.set(0,1.07,.36),this.trenchGroup.add(we);const We=new O(new Pe(.78,.86,.1),o);We.position.set(0,.82,-.28),We.castShadow=!0,this.trenchGroup.add(We),this.trenchGroup.visible=!1,this.model.add(this.trenchGroup),this.jerseyGroup=new De;const at=new de({color:16186367,roughness:.48});for(const N of[-.34,.34]){const D=new O(new Pe(.08,.72,.04),at);D.position.set(N,1.31,.27),this.jerseyGroup.add(D)}const nt=new O(new kn(.13,.18,14),at);nt.position.set(0,1.36,.31),this.jerseyGroup.add(nt);for(const N of[-.58,.58]){const D=new O(new It(.13,.025,7,14),at);D.rotation.x=Math.PI/2,D.position.set(N,1.48,0),this.jerseyGroup.add(D)}this.jerseyGroup.visible=!1,this.model.add(this.jerseyGroup),this.robeGroup=new De;const pn=new O(new st(.39,.66,1.18,12,1,!0),o);pn.position.y=.83,pn.castShadow=!0,this.robeGroup.add(pn);const cn=new O(new It(.42,.055,7,18),new de({color:16764761,roughness:.42,metalness:.25}));cn.rotation.x=Math.PI/2,cn.position.y=1.25,this.robeGroup.add(cn);const yo=new O(new Pe(.12,1.05,.06),ie);yo.position.set(0,.83,.56),this.robeGroup.add(yo),this.robeGroup.visible=!1,this.model.add(this.robeGroup),this.bomberGroup=new De;const En=new O(new Bn(.4,.28,5,10),o);En.position.y=1.32,En.scale.set(1.08,.96,.82),En.castShadow=!0,this.bomberGroup.add(En);const Tr=new O(new Pe(.05,.68,.04),ie);Tr.position.set(0,1.31,.36),this.bomberGroup.add(Tr);for(const N of[-.57,.57]){const D=new O(new It(.14,.035,7,14),ye);D.rotation.x=Math.PI/2,D.position.set(N,1.02,0),this.bomberGroup.add(D)}this.bomberGroup.visible=!1,this.model.add(this.bomberGroup);const ri=new De;ri.position.set(.67,1.05,.1);const Mo=new de({color:10181680,roughness:.8}),oi=new O(new st(.11,.16,1.28,10),Mo);oi.rotation.x=Math.PI/2,oi.position.z=.53,oi.castShadow=!0,ri.add(oi);const br=new O(new dt(.2,10,8),Mo);br.position.z=1.13,br.castShadow=!0,ri.add(br),this.weapon=ri,this.clubModel=ri,this.model.add(ri),this.sniperModel=new De,this.sniperModel.position.set(-.62,1.02,.2);const si=new de({color:7514623,metalness:.72,roughness:.25}),wr=new O(new Pe(.28,.22,1.08),si);wr.position.z=.42,wr.castShadow=!0,this.sniperModel.add(wr);const Er=new O(new st(.045,.045,.82,8),si);Er.rotation.x=Math.PI/2,Er.position.z=1.32,this.sniperModel.add(Er);const To=new O(new st(.1,.1,.48,10),new de({color:1582390,metalness:.58,roughness:.28}));To.rotation.x=Math.PI/2,To.position.set(0,.19,.45),this.sniperModel.add(To);const xs=new O(new Pe(.34,.3,.42),si);xs.position.set(0,-.08,-.28),this.sniperModel.add(xs),this.sniperModel.visible=!1,this.model.add(this.sniperModel),this.smgModel=new De,this.smgModel.position.set(-.62,1.02,.18);const bo=new de({color:5824690,metalness:.65,roughness:.3}),wo=new O(new Pe(.38,.25,.86),bo);wo.position.z=.34,wo.castShadow=!0,this.smgModel.add(wo);const Eo=new O(new st(.055,.055,.52,8),bo);Eo.rotation.x=Math.PI/2,Eo.position.z=.98,this.smgModel.add(Eo);const Ao=new O(new Pe(.18,.48,.2),bo);Ao.position.set(0,-.28,.28),Ao.rotation.x=.18,this.smgModel.add(Ao),this.smgModel.visible=!1,this.model.add(this.smgModel),this.rocketModel=new De,this.rocketModel.position.set(-.7,1.18,.14);const b=new de({color:16740429,metalness:.58,roughness:.34}),F=new O(new st(.18,.23,1.48,12),b);F.rotation.x=Math.PI/2,F.position.z=.55,F.castShadow=!0,this.rocketModel.add(F);const W=new O(new It(.22,.055,8,18),new de({color:2437954,metalness:.72,roughness:.25}));W.position.z=1.29,this.rocketModel.add(W);const V=new O(new Pe(.12,.18,.3),si);V.position.set(0,.28,.42),this.rocketModel.add(V),this.rocketModel.visible=!1,this.model.add(this.rocketModel),this.rangeBuffAura=new O(new kn(.72,.86,32),new je({color:6679295,transparent:!0,opacity:.74,side:bt,depthWrite:!1})),this.rangeBuffAura.rotation.x=-Math.PI/2,this.rangeBuffAura.position.y=.075,this.rangeBuffAura.visible=!1,this.group.add(this.rangeBuffAura),this.damageBuffAura=new O(new It(.73,.075,8,30),new je({color:16740429,transparent:!0,opacity:.82,depthWrite:!1})),this.damageBuffAura.rotation.x=Math.PI/2,this.damageBuffAura.position.y=.22,this.damageBuffAura.visible=!1,this.group.add(this.damageBuffAura),this.shield=new O(new dt(1.2,20,14),new de({color:8251903,emissive:3592191,emissiveIntensity:1.25,transparent:!0,opacity:.22,roughness:.18,metalness:.25,side:bt,depthWrite:!1,toneMapped:!1})),this.shield.position.y=1.18,this.shield.scale.y=1.22,this.shieldRings=[];for(const N of[[Math.PI/2,0,0],[0,0,Math.PI/2],[0,Math.PI/2,Math.PI/3]]){const D=new O(new It(1.28,.035,8,42),new je({color:10876671,transparent:!0,opacity:.9,depthWrite:!1}));D.rotation.set(...N),this.shield.add(D),this.shieldRings.push(D)}const B=new _h(7531263,5,5,2);if(this.shield.add(B),this.shield.visible=!1,this.group.add(this.shield),r){this.zoneGroup=new De,this.attackRangeArc=new O(new kn(di*.955,di,38,1,Math.PI*1.25,Math.PI/2),new je({color:7858431,transparent:!0,opacity:.82,side:bt,depthWrite:!1})),this.attackRangeArc.rotation.x=-Math.PI/2,this.attackRangeArc.position.y=.046,this.zoneGroup.add(this.attackRangeArc);const N=[];for(const D of[Math.PI*1.25,Math.PI*1.75])N.push(Math.cos(D)*di*.72,.05,-Math.sin(D)*di*.72,Math.cos(D)*di,.05,-Math.sin(D)*di);this.attackRangeBoundaries=new Gd(new Gt().setAttribute("position",new tt(N,3)),new gh({color:7858431,transparent:!0,opacity:.58})),this.zoneGroup.add(this.attackRangeBoundaries),this.group.add(this.zoneGroup)}this.backZoneGroup=new De,this.backZoneSector=null,this.backZoneRing=null,this.backZoneInnerRing=null,this.backZoneLabel=null,this.group.add(this.backZoneGroup),this.label=Sr(this.number,`#${n.toString(16).padStart(6,"0")}`),this.label.scale.set(r?1.72:1.45,r?.86:.72,1),this.label.position.y=3.94,this.label.visible=!0,this.group.add(this.label),this.hairStyle="short",this.outfitStyle="hoodie",this.pantsStyle="pants",this.shoesStyle="sneakers",this.model.visible=!1,this.group.remove(this.model);const oe=()=>{const N=new ss({transparent:!0,alphaTest:.025,depthWrite:!1,toneMapped:!1});return N.userData.mirrorX=0,N.userData.hasMap=!1,N.onBeforeCompile=D=>{D.uniforms.avatarMirrorX={value:N.userData.mirrorX},D.vertexShader=`uniform float avatarMirrorX;
${D.vertexShader}`.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
  vMapUv.x = mix(vMapUv.x, 1.0 - vMapUv.x, avatarMirrorX);
#endif`),N.userData.mirrorShader=D},N.customProgramCacheKey=()=>"number-brawl-avatar-mirror-v2",N},_e=oe();this.avatarSprite=new $o(_e),this.avatarSprite.center.set(.5,.46),this.avatarSprite.position.y=1.72,this.avatarSprite.scale.set(2.78,3.58,1),this.avatarSprite.renderOrder=3,this.group.add(this.avatarSprite),this.avatarPreviousSprite=new $o(oe()),this.avatarPreviousSprite.center.copy(this.avatarSprite.center),this.avatarPreviousSprite.position.copy(this.avatarSprite.position),this.avatarPreviousSprite.scale.copy(this.avatarSprite.scale),this.avatarPreviousSprite.renderOrder=2,this.avatarPreviousSprite.visible=!1,this.group.add(this.avatarPreviousSprite),this.avatarDirectionSprite=new $o(new ss({transparent:!0,alphaTest:.03,depthWrite:!1,depthTest:!0,toneMapped:!1})),this.avatarDirectionSprite.center.copy(this.avatarSprite.center),this.avatarDirectionSprite.position.copy(this.avatarSprite.position),this.avatarDirectionSprite.scale.copy(this.avatarSprite.scale),this.avatarDirectionSprite.renderOrder=4,this.avatarDirectionSprite.visible=!1,this.group.add(this.avatarDirectionSprite),this.refreshAvatarSprite(),xe.add(this.group)}get forward(){return this.forwardVector.set(Math.sin(this.yaw),0,Math.cos(this.yaw))}get moveSpeed(){return b_*Ku(this.number,this.boosting)}get turnSpeed(){return w_*Ku(this.number,this.boosting)}get attackRange(){return di*C_(this.number,this.boosting)*(this.rangeBuffTimer>0?S_:1)}get attackDamageMultiplier(){return this.damageBuffTimer>0?y_:1}get attacksPerSecond(){return P_(this.number,this.boosting)}get meleeAttackInterval(){return 1/this.attacksPerSecond}refreshAvatarSprite(t=this.avatarPose,n=!1,i=!1){if(!this.avatarSprite||this.suspendAvatarRefresh)return;const r={shirtColor:this.shirtMaterial.color,pantsColor:this.pantsMaterial.color,shoeColor:this.shoeMaterial.color,skinColor:this.skinColor,hairColor:this.hairColor,hairStyle:this.hairStyle,outfitStyle:this.outfitStyle,pantsStyle:this.pantsStyle,shoesStyle:this.shoesStyle,weaponType:this.weaponType,meleeWeapon:this.meleeWeapon,meleeStyle:this.meleeStyle},o=Ni.complete&&Ni.naturalWidth>0,s=this.isPlayer?Mf:J_,a=[o?"generated-v9-motion-blend":"fallback",s,this.outfitStyle,this.hairStyle,this.pantsStyle,this.shoesStyle,Dt(this.shirtMaterial.color),Dt(this.pantsMaterial.color),Dt(this.shoeMaterial.color),this.hairColor].join("|");if(a!==this.avatarBaseKey){this.avatarPreviousSprite.visible=!1,this.avatarPreviousSprite.material.map=null,this.avatarFrameBlend=1;for(const m of this.avatarTextureCache.values())m.dispose();this.avatarTextureCache.clear();for(const m of Object.values(this.avatarDirectionTextures))m.dispose();this.avatarDirectionTextures={},this.avatarBaseKey=a,this.avatarBaseCanvas=o?Tf(r,s):null}const l=[a,this.weaponType||"melee",this.meleeWeapon,this.meleeStyle,t.mode,t.walkPhase,t.attackPhase,t.recoil,t.spin].join("|"),h=m=>{const v=this.avatarSprite.material,g=v.map;if(!$a&&g&&g!==m&&(this.motionBlend>.02||this.attackAnimation>0||this.gunRecoil>.03)){const _=this.avatarPreviousSprite.material;_.map=g,_.userData.hasMap||(_.userData.hasMap=!0,_.needsUpdate=!0),this.avatarPreviousSprite.visible=!0,this.avatarFrameBlend=0}else this.avatarPreviousSprite.visible=!1,this.avatarFrameBlend=1;v.map=m,v.userData.hasMap||(v.userData.hasMap=!0,v.needsUpdate=!0)},d=this.avatarTextureCache.get(l);if(d){this.avatarTextureCache.delete(l),this.avatarTextureCache.set(l,d),h(d),i&&typeof Pt.initTexture=="function"&&Pt.initTexture(d);return}if(mt&&!this.isPlayer&&!n)return;this.avatarTextureQueuedKey===l&&(this.avatarTextureQueuedKey="");const u=o?a2(r,t,s,this.avatarBaseCanvas):j_(r),p=new vo(u);p.colorSpace=Wt,p.generateMipmaps=!1,p.minFilter=un,p.magFilter=un,p.anisotropy=1,h(p),this.avatarTextureCache.set(l,p),i&&typeof Pt.initTexture=="function"&&Pt.initTexture(p);const c=this.isPlayer?44:14;for(;this.avatarTextureCache.size>c;){const m=this.avatarTextureCache.keys().next().value,v=this.avatarTextureCache.get(m);this.avatarTextureCache.delete(m),v!==this.avatarSprite.material.map&&v.dispose()}}setHairStyle(t){this.hairStyle=t,this.shortHair.visible=t==="short",this.capGroup.visible=t==="cap",this.spikyHair.visible=t==="spiky",this.longHair.visible=t==="long",this.beanieGroup.visible=t==="beanie",this.mohawkHair.visible=t==="mohawk",this.cowboyHat.visible=t==="cowboy",this.ponytailGroup.visible=t==="ponytail",this.helmetGroup.visible=t==="helmet",this.wizardHat.visible=t==="wizard",this.headphonesGroup.visible=t==="headphones",this.crownHat.visible=t==="crown",this.refreshAvatarSprite()}setOutfitStyle(t){this.outfitStyle=t,this.jacketGroup.visible=t==="jacket",this.hoodieGroup.visible=t==="hoodie",this.vestGroup.visible=t==="vest",this.armorGroup.visible=t==="armor",this.suitGroup.visible=t==="suit",this.trenchGroup.visible=t==="trench",this.jerseyGroup.visible=t==="jersey",this.robeGroup.visible=t==="robe",this.bomberGroup.visible=t==="bomber",this.refreshAvatarSprite()}setPantsStyle(t){this.pantsStyle=t;const n=t==="shorts";this.leftLeg.scale.y=n?.5:1.1,this.rightLeg.scale.y=n?.5:1.1,this.leftLeg.position.y=n?.66:.43,this.rightLeg.position.y=n?.66:.43,this.lowerLegs.forEach(i=>{i.visible=n}),this.cargoPockets.visible=t==="cargo",this.pantsStripes.visible=t==="striped",this.kneeGuards.visible=t==="guard",this.jeansDetails.visible=t==="jeans",this.joggerDetails.visible=t==="joggers",this.camoDetails.visible=t==="camo",this.formalPantsDetails.visible=t==="formal",this.techPantsDetails.visible=t==="tech",this.refreshAvatarSprite()}setShoesStyle(t){this.shoesStyle=t;const n=t==="boots"||t==="high"||t==="combat";this.shoeCuffs.visible=n,this.shoeCuffs.scale.y=t==="high"?.58:t==="combat"?1.18:1,this.shoeMaterial.emissive.set(t==="neon"?this.shoeMaterial.color:0),this.shoeMaterial.emissiveIntensity=t==="neon"?1.8:0,this.runningShoeDetails.visible=t==="running",this.leatherShoeDetails.visible=t==="leather",this.combatShoeDetails.visible=t==="combat",this.canvasShoeDetails.visible=t==="canvas",this.goldShoeDetails.visible=t==="gold",this.shoes.forEach(i=>{i.scale.set(t==="boots"||t==="combat"?1.12:t==="leather"?.95:1,t==="boots"||t==="combat"?1.15:t==="sandals"?.48:1,t==="sneakers"||t==="sandals"||t==="running"?1.12:t==="leather"?1.08:1)}),this.refreshAvatarSprite()}setGun(t,n=0){this.weaponType=t,this.ammo=t?n:0,t&&(this.shootCooldown=0,this.shootReadyAt=0),this.sniperModel.visible=t==="sniper"&&this.ammo>0,this.smgModel.visible=t==="smg"&&this.ammo>0,this.rocketModel.visible=t==="rocket"&&this.ammo>0;let i=this.avatarPose;t&&(mt&&!this.isPlayer||this.avatarPose.mode==="attack")?i={mode:"idle",walkPhase:0,attackPhase:-1,recoil:0,spin:0}:t&&this.avatarPose.mode==="walk"&&(i={mode:"walk",walkPhase:(Math.min(3,Math.floor((this.avatarPose.walkPhase||0)*4))+.5)/4,attackPhase:-1,recoil:0,spin:0}),this.refreshAvatarSprite(i),pi(this)}setMeleeWeapon(){this.meleeWeapon="club",this.clubModel.visible=!0,this.refreshAvatarSprite(),pi(this)}setMeleeStyle(t){["club","sword","axe","dagger","hammer","spear","katana","mace","scythe","staff","cleaver","rapier","chickenLeg","pickaxe","shovel","greatClub"].includes(t)&&(this.meleeStyle=t,this.refreshAvatarSprite(),pi(this))}activateInvincibility(t=10){this.invincibleTimer=Math.max(this.invincibleTimer,t),this.boostDrain=0,this.shield.visible=!0}activateCombatBuff(t,n=as){t==="range"?(this.rangeBuffTimer=Math.max(this.rangeBuffTimer,n),this.rangeBuffAura.visible=!0,this.updateTierVisuals()):t==="damage"&&(this.damageBuffTimer=Math.max(this.damageBuffTimer,n),this.damageBuffAura.visible=!0),pi(this)}clearCombatBuffs(){this.rangeBuffTimer=0,this.damageBuffTimer=0,this.rangeBuffAura.visible=!1,this.damageBuffAura.visible=!1,this.combatBuffHudKey="",this.updateTierVisuals(),pi(this)}setAppearance({shirt:t,hair:n,hairColor:i,outfit:r,pants:o,pantsStyle:s,shoes:a,shoesStyle:l,meleeStyle:h}={}){const d=this.suspendAvatarRefresh;this.suspendAvatarRefresh=!0;try{if(t){const u=new ze(t);this.color=u.getHex(),this.shirtMaterial.color.copy(u),this.shirtMaterial.emissive.copy(u),this.label.userData.color=t,this.label.userData.value=null,ws(this.label,this.number)}n&&this.setHairStyle(n),i&&(this.hairColor=i,this.hairMaterial.color.set(i)),r&&this.setOutfitStyle(r),o&&this.pantsMaterial.color.set(o),s&&this.setPantsStyle(s),a&&(this.shoeMaterial.color.set(a),this.shoesStyle==="neon"&&this.shoeMaterial.emissive.set(a)),l&&this.setShoesStyle(l),h&&this.setMeleeStyle(h)}finally{this.suspendAvatarRefresh=d}d||this.refreshAvatarSprite()}setNumber(t){this.number=Math.max(0,Math.round(t)),l2(this),this.updateTierVisuals(),this.isPlayer&&(z_.textContent=this.number)}updateTierVisuals(){this.visualTier=ho(this.number,this.boosting);const t=eo(this.number,this.boosting);if(this.model.scale.setScalar(t),this.groundShadow.scale.setScalar(t*1.08),this.shield.scale.set(t*1.06,t*1.22,t*1.06),this.label.position.y=3.94*t,this.avatarSprite.scale.set(2.78*t,3.58*t,1),this.avatarSprite.position.y=1.72*t,this.avatarDirectionSprite&&(this.avatarDirectionSprite.scale.copy(this.avatarSprite.scale),this.avatarDirectionSprite.position.copy(this.avatarSprite.position)),this.zoneGroup){const n=this.attackRange/di;this.zoneGroup.scale.set(n,1,n)}this.backZoneGroup.scale.setScalar(t)}turnToward(t,n){this.yaw+=Tt.clamp(Zc(this.yaw,t),-this.turnSpeed*n,this.turnSpeed*n),this.group.rotation.y=this.yaw}move(t,n,i=1){if(t.lengthSq()<.001)return;this.isMoving=!0,t.normalize();const r=this.movePreviousPosition.copy(this.group.position);this.group.position.addScaledVector(t,this.moveSpeed*i*n),_i(this.group.position);const o=.66*eo(this.number,this.boosting),s=po(r,this.group.position,o);if(s){const a=this.moveAttemptedVector.copy(this.group.position).sub(r),l=Math.max(0,s.time-.002),h=this.moveContactPosition.copy(r).lerp(this.group.position,l),d=new P(Math.cos(s.wall.yaw),0,-Math.sin(s.wall.yaw)),u=a.multiplyScalar(1-s.time);h.addScaledVector(d,u.dot(d)),this.group.position.copy(h)}Fa(this.group.position,o),_i(this.group.position)}tickVisual(t){this.visualTier!==ho(this.number,this.boosting)&&this.updateTierVisuals(),this.attackCooldown=Math.max(0,this.attackCooldown-t),this.shootCooldown=this.shootReadyAt>0?Math.max(0,(this.shootReadyAt-performance.now())/1e3):Math.max(0,this.shootCooldown-t),this.gunRecoil=Math.max(0,this.gunRecoil-t*8.5),this.hitPulse=Math.max(0,this.hitPulse-t*4),this.hitReaction=Math.max(0,this.hitReaction-t*4.2);let n=-1;this.attackAnimation>0&&(this.attackAnimation=Math.max(0,this.attackAnimation-t),n=1-this.attackAnimation/this.attackAnimationDuration,!this.attackResolved&&n>=.34&&(this.attackResolved=!0,wt!=="guest"&&kf(this)));const i=this.invincibleTimer;if(this.invincibleTimer=Math.max(0,this.invincibleTimer-t),this.shield.visible=this.invincibleTimer>0,this.shield.rotation.y+=t*.8,this.shield.material.opacity=.18+Math.sin(sn*8)*.055,this.shieldRings.forEach((Se,Re)=>{Se.rotation.y+=t*(Re%2?-2.4:2.4),Se.rotation.z+=t*(Re===2?2.1:.8),Se.material.opacity=.65+Math.sin(sn*10+Re*1.8)*.28}),this.attackRangeArc&&(this.attackRangeArc.material.opacity=.72+Math.sin(sn*6)*.12),this.backZoneSector){const Se=Math.sin(sn*9+this.yaw);this.backZoneSector.material.opacity=.86+Se*.1,this.backZoneLabel&&(this.backZoneLabel.material.opacity=.9+Se*.1)}i>0&&this.invincibleTimer===0&&this.isPlayer&&et("无敌护符效果结束",.9),this.body.material.emissiveIntensity=.06+this.hitPulse*2.2+(this.boosting?.42:0);const r=this.rangeBuffTimer,o=this.damageBuffTimer;if(this.rangeBuffTimer=Math.max(0,this.rangeBuffTimer-t),this.damageBuffTimer=Math.max(0,this.damageBuffTimer-t),this.rangeBuffAura.visible=this.rangeBuffTimer>0,this.damageBuffAura.visible=this.damageBuffTimer>0,this.rangeBuffAura.visible){const Se=1+Math.sin(sn*8)*.11;this.rangeBuffAura.scale.setScalar(Se*this.attackRange/di),this.rangeBuffAura.material.opacity=.58+Math.sin(sn*11)*.18}if(this.damageBuffAura.visible){const Se=1+Math.sin(sn*11)*.14;this.damageBuffAura.scale.setScalar(Se),this.damageBuffAura.rotation.z+=t*2.8,this.damageBuffAura.material.opacity=.66+Math.sin(sn*14)*.2}r>0&&this.rangeBuffTimer===0&&(this.updateTierVisuals(),this.isPlayer&&et("攻击范围增益结束",.9)),o>0&&this.damageBuffTimer===0&&this.isPlayer&&et("攻击伤害增益结束",.9);const s=`${Math.ceil(this.rangeBuffTimer)}:${Math.ceil(this.damageBuffTimer)}`;s!==this.combatBuffHudKey&&(this.combatBuffHudKey=s,pi(this));const a=this.isMoving,l=1-Math.exp(-t*(a?11:7.5));this.motionBlend=Tt.lerp(this.motionBlend,a?1:0,l),(a||this.motionBlend>.01)&&(this.walkTime+=t*this.moveSpeed*(.55+this.motionBlend*1.15));let h=0,d=0;if(n>=0){const Se=Re=>{const Ze=Tt.clamp(Re,0,1);return Ze*Ze*(3-2*Ze)};if(n<.3){const Re=n/.3;h=.2*Se(Re),d=Re*.35}else if(n<.62){const Re=(n-.3)/.32,Ze=1-Math.pow(1-Re,3);h=Tt.lerp(.2,-.3,Ze),d=Math.sin(Re*Math.PI*.72)}else{const Re=(n-.62)/.38,Ze=Se(Re);h=Tt.lerp(-.3,0,Ze),d=1-Ze}}const u=Math.sin(sn*3.2+this.yaw)*.014,p=Tt.lerp(u,Math.abs(Math.sin(this.walkTime*2))*.075,this.motionBlend),c=this.hitReaction>0?Math.sin((1-this.hitReaction)*Math.PI)*this.hitReaction:0,m=n>=0?"attack":a||this.motionBlend>.08?"walk":this.gunRecoil>.03?"fire":"idle",v=this.isPlayer?this.weaponType?4:8:this.weaponType?2:3,g=this.isPlayer?8:4,f=Math.floor((this.walkTime/(Math.PI*2)%1+1)%1*v),_=n>=0?Math.min(g-1,Math.floor(n*g)):0,w=Math.min(1,Math.floor(this.gunRecoil*2)),y=1,C=0,A=m==="walk"?f:0,R=m==="attack"?_:0,L=this.weaponType&&this.isPlayer?w:0,M=`${m}:${A}:${R}:${L}:${C}:${this.weaponType||this.meleeWeapon}`;M!==this.avatarFrameKey&&(this.avatarFrameKey=M,this.avatarPose={mode:m,walkPhase:m==="walk"?(A+.5)/v:0,attackPhase:m==="attack"?R/(g-1):-1,recoil:L,spin:C*Math.PI*2/y},this.refreshAvatarSprite(this.avatarPose));const T=Math.atan2(jt.position.x-this.group.position.x,jt.position.z-this.group.position.z),I=Zc(T,this.yaw),H=Math.abs(I),z=H<Math.PI*.25?"front":H>Math.PI*.75?"back":I>0?"sideRight":"sideLeft";this.avatarFacing=z;const X=eo(this.number,this.boosting),$=1+d*.07,Y=1-d*.035,ee=z==="sideLeft"?-1:1;this.avatarSprite.scale.set(2.78*X*$,3.58*X*Y,1);const q=ee<0?1:0;this.avatarSprite.material.userData.mirrorX=q;const he=this.avatarSprite.material.userData.mirrorShader;he&&(he.uniforms.avatarMirrorX.value=q),this.avatarSprite.position.y=1.72*X+p*.32,this.avatarSprite.material.rotation=Tt.lerp(this.avatarSprite.material.rotation,this.hitSide*c*.09+h*.26,1-Math.exp(-t*26));const ge=.96+Math.min(.04,this.hitPulse*.04);if(this.avatarPreviousSprite.visible){this.avatarFrameBlend=Math.min(1,this.avatarFrameBlend+t/this.avatarFrameBlendDuration);const Se=this.avatarFrameBlend*this.avatarFrameBlend*(3-2*this.avatarFrameBlend);this.avatarSprite.material.opacity=ge*(.28+Se*.72),this.avatarPreviousSprite.material.opacity=ge*(1-Se),this.avatarPreviousSprite.scale.copy(this.avatarSprite.scale),this.avatarPreviousSprite.position.copy(this.avatarSprite.position),this.avatarPreviousSprite.material.rotation=this.avatarSprite.material.rotation,this.avatarPreviousSprite.material.userData.mirrorX=q;const Re=this.avatarPreviousSprite.material.userData.mirrorShader;Re&&(Re.uniforms.avatarMirrorX.value=q),this.avatarFrameBlend>=1&&(this.avatarPreviousSprite.visible=!1)}else this.avatarSprite.material.opacity=ge;this.avatarDirectionSprite.visible=!1,this.groundShadow.material.opacity=a?.23:.3,this.isMoving=!1}}const E=new Ef({name:"你",color:5364223,position:new P(0,0,0),isPlayer:!0});Q.push(E);const _2=[16737655,16762967,12157695,6480538,16748378,5213439,15757268,9163595,16739228,6215622,15116364,9208575,15167313,7784447];for(let e=0;e<14;e+=1){const t=e/14*Math.PI*2+(e%2?.16:0),n=e%2?9.2:16.4,i=new Ef({name:`玩家${e+2}`,color:_2[e],position:new P(Math.sin(t)*n,0,Math.cos(t)*n)});i.aiDecisionTimer=e%7*.014,i.aiLeaderBias=e%5<3,i.setAppearance({hair:["short","undercut","curly","sidepart","samuraiBun","cap","fedora","bucket","aviator","foxEars","spiky","long","headphones","crown"][e%14],hairColor:["#4b2a1c","#161b24","#e4c06a","#dce8f2","#b84e4e","#526fd8","#854fc7"][e%7],outfit:["tshirt","ninja","knight","tracksuit","academy","winter","cyber","monk","dragon","hoodie","armor","ranger","pirate","ceremonial"][e%14],pants:["#253248","#563b73","#345443","#6a4432","#151a24","#b79b68","#e7edf5","#c8434f","#236aa8","#c69b34"][e%10],pantsStyle:["pants","tactical","ninja","explorer","winter","cyber","dragon","cargo","jeans","joggers","camo","samurai","loose","royal"][e%14],shoes:["#18202c","#f3f6fa","#ff784e","#58e0b2","#5c8dff","#c27cff","#ffd052","#ff5d88"][e%8],shoesStyle:["sneakers","boots","high","sandals","neon","running","leather","combat","canvas","gold","greaves","ninja","hiking","royal","techboots"][e%15]}),Q.push(i)}const Fi=new Lt(new Wn(.68,22),new je({color:463132,transparent:!0,opacity:.27,depthWrite:!1}),Q.length);Fi.instanceMatrix.setUsage(hh);Fi.frustumCulled=!1;Fi.renderOrder=0;Fi.visible=!1;xe.add(Fi);const Af=new je({map:g2,transparent:!0,opacity:.9,side:bt,depthWrite:!1,alphaTest:.015}),Bi=new Lt(v2,Af,Q.length);Bi.instanceMatrix.setUsage(hh);Bi.frustumCulled=!1;Bi.renderOrder=1;Bi.visible=!1;xe.add(Bi);Q.forEach(e=>{e.groundShadow.visible=!1});const od=new Hi().setFromAxisAngle(new P(1,0,0),-Math.PI/2),sd=new Hi,ad=new Hi,S2=new P(0,1,0);function y2(){if(Fi.visible=mt,Bi.visible=mt,!!mt){for(let e=0;e<Q.length;e+=1){const t=Q[e],n=t.active?eo(t.number,t.boosting):0;se.position.set(t.group.position.x,.028,t.group.position.z),se.quaternion.copy(od),se.scale.setScalar(n*1.08),se.updateMatrix(),Fi.setMatrixAt(e,se.matrix),se.position.y=.044,sd.setFromAxisAngle(S2,t.yaw),ad.multiplyQuaternions(sd,od),se.quaternion.copy(ad),se.scale.setScalar(n),se.updateMatrix(),Bi.setMatrixAt(e,se.matrix)}Fi.instanceMatrix.needsUpdate=!0,Bi.instanceMatrix.needsUpdate=!0,Af.opacity=.88+Math.sin(sn*7.5)*.07}}const M2=document.querySelector("#avatar-preview"),Es=new Qd({canvas:M2,antialias:!0,alpha:!0,powerPreference:"high-performance"});Es.setPixelRatio(Math.min(devicePixelRatio,1.5));Es.setSize(230,300,!1);Es.outputColorSpace=Wt;Es.shadowMap.enabled=!1;const mo=new Od,Ch=new Sn(34,230/300,.1,30);Ch.position.set(3.5,2.8,5.7);Ch.lookAt(0,1.72,0);mo.add(new Vd(13495039,1581104,2.7));const Ph=new qd(16777215,3.2);Ph.position.set(-3,5,4);Ph.castShadow=!0;mo.add(Ph);const xh=new O(new Wn(1.5,32),new de({color:2440022,roughness:.84}));xh.rotation.x=-Math.PI/2;xh.receiveShadow=!0;mo.add(xh);let Rn=null;function As(){Rn&&mo.remove(Rn),Rn=E.avatarSprite.clone(),Rn.material=E.avatarSprite.material.clone(),Rn.material.depthTest=!1,Rn.material.depthWrite=!1,Rn.renderOrder=20,Rn.scale.set(2.72,3.56,1),Rn.position.y=1.74,mo.add(Rn)}As();let ld=0,cd=0,Yl=0,mr=!1,fs=!1;function Cf(){const e=++Yl;mr=!1,clearTimeout(cd),cd=setTimeout(()=>{if(mt||e!==Yl)return;const t=[{mode:"idle",walkPhase:0,attackPhase:-1,recoil:0,spin:0},...Array.from({length:8},(d,u)=>({mode:"walk",walkPhase:(u+.5)/8,attackPhase:-1,recoil:0,spin:0})),...Array.from({length:8},(d,u)=>({mode:"attack",walkPhase:0,attackPhase:u/7,recoil:0,spin:0}))].map(d=>({weaponType:null,pose:d})),n=["smg","sniper","rocket"].flatMap(d=>[{mode:"idle",walkPhase:0,attackPhase:-1,recoil:0,spin:0},...Array.from({length:4},(u,p)=>({mode:"walk",walkPhase:(p+.5)/4,attackPhase:-1,recoil:0,spin:0})),{mode:"fire",walkPhase:0,attackPhase:-1,recoil:0,spin:0},{mode:"fire",walkPhase:0,attackPhase:-1,recoil:1,spin:0}].map(u=>({weaponType:d,pose:u}))),i=[...t,...n],r=E.weaponType,o=E.ammo;let s=0;const a=()=>{E.weaponType=r,E.ammo=o,E.refreshAvatarSprite({mode:"idle",walkPhase:0,attackPhase:-1,recoil:0,spin:0}),As(),mr=!0,qn&&Mr()&&Mi({type:"ready",ready:!0}),fs&&(fs=!1,Fh())},l=window.requestIdleCallback?d=>window.requestIdleCallback(d,{timeout:30}):d=>setTimeout(()=>d(),8),h=()=>{if(!(mt||e!==Yl)){for(let d=0;d<2&&s<i.length;d+=1){const u=i[s++];E.weaponType=u.weaponType,E.ammo=u.weaponType?1:0,E.refreshAvatarSprite(u.pose,!1,!0)}s<i.length?l(h):a()}};l(h)},90)}function T2(){const e=++ld,t=[{mode:"idle",walkPhase:0,attackPhase:-1,recoil:0,spin:0},...Array.from({length:3},(a,l)=>({mode:"walk",walkPhase:(l+.5)/3,attackPhase:-1,recoil:0,spin:0})),...Array.from({length:4},(a,l)=>({mode:"attack",walkPhase:0,attackPhase:l/3,recoil:0,spin:0}))],n={mode:"idle",walkPhase:0,attackPhase:-1,recoil:0,spin:0},i=Q.slice(1).flatMap(a=>[...t.map(l=>({fighter:a,weaponType:null,pose:l})),...["smg","sniper","rocket"].map(l=>({fighter:a,weaponType:l,pose:n}))]);let r=0;const o=window.requestIdleCallback?a=>window.requestIdleCallback(a,{timeout:28}):a=>setTimeout(()=>a({timeRemaining:()=>8}),8),s=a=>{if(e!==ld||mt)return;let l=0;for(;r<i.length&&l<4;){const{fighter:h,weaponType:d,pose:u}=i[r++];h.weaponType=d,h.ammo=d?1:0,h.refreshAvatarSprite(u,!1,!0),l+=1}r<i.length?o(s):Q.slice(1).forEach(h=>{h.weaponType=null,h.ammo=0,h.refreshAvatarSprite({mode:"idle",walkPhase:0,attackPhase:-1,recoil:0,spin:0})})};o(s)}function b2(e){const t=(e.networkPrewarmToken||0)+1;e.networkPrewarmToken=t;const n=e.weaponType,i=e.ammo,o=[...[{mode:"idle",walkPhase:0,attackPhase:-1,recoil:0,spin:0},...Array.from({length:3},(d,u)=>({mode:"walk",walkPhase:(u+.5)/3,attackPhase:-1,recoil:0,spin:0})),...Array.from({length:4},(d,u)=>({mode:"attack",walkPhase:0,attackPhase:u/3,recoil:0,spin:0}))].map(d=>({weaponType:null,pose:d})),...["smg","sniper","rocket"].map(d=>({weaponType:d,pose:{mode:"idle",walkPhase:0,attackPhase:-1,recoil:0,spin:0}}))];let s=0;const a=()=>{e.weaponType=n,e.ammo=i,e.refreshAvatarSprite({mode:"idle",walkPhase:0,attackPhase:-1,recoil:0,spin:0})},l=window.requestIdleCallback?d=>window.requestIdleCallback(d,{timeout:30}):d=>setTimeout(d,8),h=()=>{if(e.networkPrewarmToken!==t||mt){a();return}for(let d=0;d<4&&s<o.length;d+=1){const u=o[s++];e.weaponType=u.weaponType,e.ammo=u.weaponType?1:0,e.refreshAvatarSprite(u.pose,!1,!0)}s<o.length?l(h):a()};l(h)}const hd=()=>{Q.forEach(e=>e.refreshAvatarSprite()),As(),Cf(),T2()};Ni.complete&&Ni.naturalWidth>0?hd():Ni.addEventListener("load",hd,{once:!0});Ni.addEventListener("error",()=>{mr=!0,qn&&Mr()&&Mi({type:"ready",ready:!0}),fs&&(fs=!1,Fh())},{once:!0});const Yn=new De,Rh=new O(new st(.24,.72,30,20,1,!0),new je({color:16766046,transparent:!0,opacity:.34,side:bt,depthWrite:!1}));Rh.position.y=15;Yn.add(Rh);const ps=new O(new It(1.65,.16,10,48),new de({color:16770167,emissive:16752410,emissiveIntensity:4}));ps.rotation.x=Math.PI/2;ps.position.y=.12;Yn.add(ps);const ms=new O(new It(2.35,.08,8,56),new je({color:16758062,transparent:!0,opacity:.8,depthWrite:!1}));ms.rotation.x=Math.PI/2;ms.position.y=.1;Yn.add(ms);const Cs=new De,Pf=new de({color:16767052,emissive:16751384,emissiveIntensity:3.2,metalness:.65,roughness:.22}),xf=new O(new It(.52,.12,8,28),Pf);xf.rotation.x=Math.PI/2;Cs.add(xf);for(let e=0;e<5;e+=1){const t=new O(new an(.14,e===2?.78:.58,7),Pf);t.position.set((e-2)*.22,.34,0),Cs.add(t)}Cs.position.y=4.45;Yn.add(Cs);const Ih=Sr("第一名","#fff0a8");Ih.scale.set(3.25,1.62,1);Ih.position.y=5.65;Yn.add(Ih);Yn.visible=!1;xe.add(Yn);let At=null,ud=Ya,dd=Q.length,$l=0;function Ri(e,t){e.textContent!==t&&(e.textContent=t)}function w2(e){if($l-=e,$l<=0||At&&!At.active){$l=.1;let n=0,i=-1/0,r=null,o=0;for(const s of Q)s.active&&(n+=1,s.number>i?(i=s.number,r=s,o=1):s.number===i&&(o+=1));dd=n,ud=n?i:Ya,At=n&&o===1?r:null}if(!dd){Yn.visible=!1,Ri(oa,"等待重生");return}if(Yn.visible=!!At,!At){Ri(oa,`多人并列 · ${ud}`),Oo.style.transform="rotate(0deg)";return}Yn.position.set(At.group.position.x,0,At.group.position.z),ps.rotation.z+=e*1.4,ms.rotation.z-=e*1.9,Cs.rotation.y+=e*1.6;const t=1+Math.sin(performance.now()*.007)*.13;if(ps.scale.setScalar(t),ms.scale.setScalar(1.05-(t-1)*.55),Rh.material.opacity=.28+Math.sin(performance.now()*.006)*.1,At===E)Ri(oa,`你 · ${At.number}（被全图标记）`),Ri(Oo,"👑"),Oo.style.transform="rotate(0deg)";else{Ri(oa,`${At.name} · ${At.number}`),Ri(Oo,"▲");const n=At.group.position.x-E.group.position.x,i=At.group.position.z-E.group.position.z,r=Math.atan2(n,-i)*180/Math.PI;Oo.style.transform=`rotate(${r}deg)`}}const jl=document.querySelector("#custom-status");document.querySelectorAll("[data-custom]").forEach(e=>{e.addEventListener("click",t=>{const n=t.target.closest("button[data-value]");n&&(e.querySelectorAll("button").forEach(i=>i.classList.remove("selected")),n.classList.add("selected"),E.setAppearance({[e.dataset.custom]:n.dataset.value}),jl.textContent=`已应用：${n.getAttribute("aria-label")||n.textContent.trim()}`,jl.classList.remove("changed"),requestAnimationFrame(()=>jl.classList.add("changed")),As(),Cf(),Of())})});const Ct=[],fd=6,Rf=.9;function sr(e){const t=Ct[e];t&&(xe.remove(t.group),t.group.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&(n.material.map&&n.material.map.dispose(),n.material.dispose())}),Ct.splice(e,1))}function E2(e){const t=St-Rf,n=Math.hypot(e.group.position.x,e.group.position.z);if(n<=t)return;const i=e.group.position.x/n,r=e.group.position.z/n;e.group.position.x=i*t,e.group.position.z=r*t;const o=e.velocity.x*i+e.velocity.z*r;o>0&&(e.velocity.x-=i*o*1.35,e.velocity.z-=r*o*1.35)}function Dh(e,t){const n=new De,i=new O(new wn(.33),new de({color:8975871,emissive:1874612,emissiveIntensity:2.2,metalness:.25,roughness:.28,transparent:!0}));i.castShadow=!0,n.add(i);const r=Sr(1,"#9af7ff");r.scale.set(.72,.36,1),r.position.y=.62,n.add(r),n.position.copy(e.group.position).add(new P(0,1.1,0)),_i(n.position,Rf),xe.add(n);const o=t.group.position.clone().sub(e.group.position).setY(0).normalize(),s=new P(-o.z,0,o.x),a=o.multiplyScalar(4.2+Math.random()*1.6).addScaledVector(s,(Math.random()-.5)*2.4);a.y=4.5+Math.random()*1.5,Ct.push({group:n,velocity:a,age:0,grounded:!1,materials:[i.material,r.material]})}function If(e,t){const n=e.x-t.group.position.x,i=e.z-t.group.position.z,r=Math.hypot(n,i)||1,o=n/r,s=i/r,a=Math.sin(t.yaw),l=Math.cos(t.yaw),h=a*o+l*s,d=l*o-a*s;return h>=Math.abs(d)?"front":h<=-Math.abs(d)?"back":d>0?"right":"left"}function Ba(e,t){return If(e.group.position,t)}function Lh(e,t,n=e.attackRange){const i=t.group.position.x-e.group.position.x,r=t.group.position.z-e.group.position.z,o=i*i+r*r;if(o<=1e-4||o>=n*n)return!1;const s=1/Math.sqrt(o),a=Math.sin(e.yaw),l=Math.cos(e.yaw);return(i*a+r*l)*s>=T_}function gs(e){e.active=!1,e.group.visible=!1,e.respawnTimer=3,e.boosting=!1,e.invincibleTimer=0,e.attackAnimation=0,e.attackResolved=!0,e.hitReaction=0,e.shield.visible=!1,e.clearCombatBuffs(),e.setGun(null,0),e.setMeleeWeapon("club"),e.isPlayer&&(Nt("defeat"),Aa.classList.add("show"),Eh.textContent=e.respawnTimer.toFixed(1),et("你被击败了，3 秒后重生",1.1))}function A2(e){const t=Xn(2,St-4);e.group.position.copy(t),e.yaw=Math.random()*Math.PI*2,e.group.rotation.y=e.yaw,e.setNumber(Ya),e.attackCooldown=.8,e.attackAnimation=0,e.attackResolved=!0,e.shootCooldown=0,e.gunRecoil=0,e.hitReaction=0,e.boostDrain=0,e.boosting=!1,e.aiThink=0,e.aiGoal=Xn(3,St-5),e.aiDecisionTimer=.02+Math.random()*.08,e.aiMoveTarget=null,e.aiFoe=null,e.aiTactic="idle",e.isMoving=!1,e.clearCombatBuffs(),e.respawnTimer=0,e.active=!0,e.group.visible=!0,e.isPlayer&&(Nt("pickup"),Aa.classList.remove("show"),et("已重生：数字恢复为 10",1))}function C2(e){for(const t of Q)t.active||t.respawnTimer<=0||(t.respawnTimer=Math.max(0,t.respawnTimer-e),t.isPlayer&&(Eh.textContent=t.respawnTimer.toFixed(1)),t.respawnTimer===0&&A2(t))}function ar(e,t,n=1,{allowFrontBlock:i=!0,hitPosition:r=null,splitReward:o=!1}={}){if(!e.active||!t.active)return!1;const s=e.isPlayer||t.isPlayer,a=r?If(r,t):Ba(e,t);if(t.invincibleTimer>0)return t.hitPulse=.35,ro({kind:"hit",outcome:"invincible",attackerSlot:Q.indexOf(e),targetSlot:Q.indexOf(t),damage:0,backHit:!1,sourceX:(r||e.group.position).x,sourceZ:(r||e.group.position).z}),s&&(Nt("shield"),io(t,0,!1,"invincible",r||e.group.position),Jo(.12,!1),et("无敌护符挡住了伤害！",.65)),!0;if(i&&e.number===t.number&&a==="front")return t.hitPulse=.32,t.hitReaction=.45,ro({kind:"hit",outcome:"blocked",attackerSlot:Q.indexOf(e),targetSlot:Q.indexOf(t),damage:0,backHit:!1,sourceX:(r||e.group.position).x,sourceZ:(r||e.group.position).z}),s&&(Nt("blocked"),et("同数字正面对打：挡住了！"),io(t,0,!1,"blocked",r||e.group.position),Jo(.15,!1)),!0;const l=a==="back",h=Math.max(1,Math.round(n*e.attackDamageMultiplier)),d=l?h*2:h,u=Math.min(d,t.number);if(u<=0)return!1;t.setNumber(t.number-u),t.hitPulse=.65,t.hitReaction=l?1.15:.9;const c=(r||e.group.position).clone().sub(t.group.position).setY(0),m=new P(t.forward.z,0,-t.forward.x);t.hitSide=m.dot(c)>=0?-1:1;const v=t.group.position.clone().sub(r||e.group.position).setY(0);if(v.lengthSq()>.001){v.normalize();const _=Math.min(.72,.16+u*.11+(l?.18:0));t.group.position.addScaledVector(v,_),_i(t.group.position)}const g=o?Math.ceil(u/2):0,f=u-g;g>0&&e.setNumber(e.number+g);for(let _=0;_<f;_+=1)Dh(t,e);if(ro({kind:"hit",outcome:"damage",attackerSlot:Q.indexOf(e),targetSlot:Q.indexOf(t),damage:u,directGain:g,groundDropCount:f,backHit:l,sourceX:(r||e.group.position).x,sourceZ:(r||e.group.position).z}),s){Nt(l?"backHit":"hit"),io(t,u,l,"hit",r||e.group.position),Jo(l?.5:.28,l),g>0&&Qo(`+${g}`,"#74ffc1",e,l);const _=g>0?`，吸收 ${g}、掉落 ${f}`:`，掉落 ${f}`;et(e===t?`火箭自伤 ${u}，掉落 ${f}！`:l?`背后命中 ${u}${_}！`:`命中 ${u}${_}`)}return t.number===0&&gs(t),!0}const ln=[],lr=[],cr=[],Df=new wn(1,0),P2=new kn(.18,.32,22),x2=new kn(.12,.42,16),R2=new dt(1,7,6),I2=new wn(1,0),D2=new kn(.52,1,28,1,-Math.PI/4,Math.PI/2),pd={smg:new wn(.16,0),sniper:new wn(.23,0),rocket:new wn(.32,0)},md=new Map;function Jo(e=.25,t=!1){Vn=Math.max(Vn,e),jr=Math.max(jr,t?.16:.1),Ra=Math.max(Ra,t?.68:.36),qc.style.background=t?"radial-gradient(circle at 50% 52%, transparent 12%, rgba(255,196,70,.25) 45%, rgba(255,58,34,.58) 100%)":"radial-gradient(circle at 50% 52%, transparent 18%, rgba(255,225,126,.14) 52%, rgba(255,128,58,.34) 100%)"}function Qo(e,t,n,i=!1){const r=`${e}|${t}|${i?1:0}`;let o=md.get(r);if(!o){const l=document.createElement("canvas");l.width=320,l.height=128;const h=l.getContext("2d");h.textAlign="center",h.textBaseline="middle",h.lineJoin="round",h.font=`900 ${i?62:54}px "Microsoft YaHei", Arial`,h.strokeStyle="rgba(20,8,5,.92)",h.lineWidth=13,h.strokeText(e,160,62),h.fillStyle=t,h.fillText(e,160,62),o=new vo(l),o.colorSpace=Wt,o.generateMipmaps=!1,o.minFilter=un,md.set(r,o)}const s=new $o(new ss({map:o,transparent:!0,depthTest:!1,toneMapped:!1})),a=i?2.65:2.15;s.scale.set(a,a*.4,1),s.position.copy(n.group.position),s.position.y=2.65*n.model.scale.x,s.position.x+=(Math.random()-.5)*.34,xe.add(s),cr.push({sprite:s,life:i?.92:.72,maxLife:i?.92:.72,drift:(Math.random()-.5)*.26})}function io(e,t,n,i="hit",r=null){const o=i==="blocked",s=i==="invincible",a=s?8382975:o?12381439:n?16735542:16763733,l=s?"#9ef4ff":o?"#d4f5ff":n?"#ff7652":"#ffe078",h=$a?n?9:s?7:6:n?15:s?12:9,d=new De;d.position.copy(e.group.position);const u=new je({color:a,transparent:!0,opacity:1,depthWrite:!1}),p=[],c=new Lt(Df,u,h);c.instanceMatrix.setUsage(hh),c.frustumCulled=!1;const m=r?e.group.position.clone().sub(r).setY(0).normalize():new P(0,0,1);for(let f=0;f<h;f+=1){const _=new P((Math.random()-.5)*.28,1+Math.random()*.55,(Math.random()-.5)*.28),w=new P((Math.random()-.5)*4.2+m.x*1.3,1.5+Math.random()*3.6,(Math.random()-.5)*4.2+m.z*1.3),y=n?.075:.058;p.push({position:_,velocity:w,rotationX:0,rotationY:0,size:y}),se.position.copy(_),se.rotation.set(0,0,0),se.scale.setScalar(y),se.updateMatrix(),c.setMatrixAt(f,se.matrix)}c.instanceMatrix.needsUpdate=!0,d.add(c);const v=new je({color:a,transparent:!0,opacity:.82,side:bt,depthWrite:!1}),g=new O(P2,v);g.rotation.x=-Math.PI/2,g.position.y=.11,d.add(g),xe.add(d),lr.push({group:d,particles:p,particleMesh:c,ring:g,particleMaterial:u,ringMaterial:v,sharedRingGeometry:!0,life:n?.46:.34,maxLife:n?.46:.34}),s?Qo("无敌！",l,e,!1):o?Qo("格挡！",l,e,!1):Qo(n?`背击 -${t}`:`-${t}`,l,e,n)}function Lf(e,t){const r=t==="smg"?8388562:t==="rocket"?16740424:8566271,o=new O(pd[t]||pd.sniper,new je({color:r,transparent:!0,opacity:1,depthWrite:!1}));o.position.copy(e.group.position).add(e.forward.multiplyScalar(1.25)),o.position.y=1.12,o.rotation.set(Math.random(),Math.random(),Math.random()),xe.add(o),ln.push({mesh:o,life:.1,maxLife:.1,growth:5,opacity:1,sharedGeometry:!0})}function L2(e,t=11990527){const n=e.attackRange,i=new O(D2,new je({color:t,transparent:!0,opacity:.75,side:bt,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.rotation.z=-e.yaw+Math.PI/2,i.scale.setScalar(n),i.position.copy(e.group.position).add(e.forward.multiplyScalar(n*.12)),i.position.y=.12,xe.add(i),ln.push({mesh:i,life:.2,maxLife:.2,growth:2.5,opacity:.78,sharedGeometry:!0})}function dl(e){!e.active||e.meleeWeapon!=="club"||e.weaponType&&e.ammo>0||e.attackCooldown>0||!mt||(e.isPlayer&&Nt("swing"),e.attackCooldown=e.meleeAttackInterval,e.attackAnimationDuration=Tt.clamp(e.meleeAttackInterval*.94,.38,1.12),e.attackAnimation=e.attackAnimationDuration,e.attackResolved=!1)}function kf(e){if(!e.active||e.meleeWeapon!=="club"||!mt)return;let t=!1,n=e.isPlayer;for(const i of Q)i===e||!i.active||Lh(e,i)&&!wf(e.group.position,i.group.position,.06)&&(n=n||i.isPlayer,t=ar(e,i,2,{splitReward:!0})||t);n&&L2(e,e.isPlayer?9367551:e.color),!t&&e.isPlayer&&et("挥空了",.45)}const Bt=[];function pi(e){if(!e.isPlayer)return;const n={club:"木棍",sword:"长刀",axe:"战斧",dagger:"小刀",hammer:"战锤",spear:"长矛",katana:"武士刀",mace:"钉头锤",scythe:"镰刀",staff:"法杖",cleaver:"大砍刀",rapier:"细剑",chickenLeg:"超大鸡腿",pickaxe:"镐头",shovel:"铁锹",greatClub:"超粗大棒"}[e.meleeStyle]||"木棍",i=[];e.rangeBuffTimer>0&&i.push(`范围×1.5 ${Math.ceil(e.rangeBuffTimer)}秒`),e.damageBuffTimer>0&&i.push(`伤害×1.5 ${Math.ceil(e.damageBuffTimer)}秒`);const r={smg:"冲锋枪",sniper:"狙击枪",rocket:"火箭筒"},o=e.weaponType&&e.ammo>0?`${r[e.weaponType]||"武器"} ${e.ammo}`:n;G_.textContent=[o,...i].join(" · ")}function Uf(){const e=new De,t=new de({color:16741710,emissive:12133650,emissiveIntensity:2.2,metalness:.48,roughness:.3}),n=new de({color:2701127,metalness:.62,roughness:.26}),i=new je({color:16765275,transparent:!0,opacity:.95,depthWrite:!1}),r=new O(new st(.13,.17,.78,12),t);r.rotation.x=Math.PI/2,r.position.z=.08,r.castShadow=!0,e.add(r);const o=new O(new an(.14,.34,12),t);o.rotation.x=Math.PI/2,o.position.z=.62,o.castShadow=!0,e.add(o);for(const a of[-1,1]){const l=new O(new Pe(.07,.34,.3),n);l.position.set(a*.18,0,-.25),l.rotation.z=a*-.3,e.add(l)}const s=new O(new an(.15,.5,10),i);return s.rotation.x=-Math.PI/2,s.position.z=-.58,e.add(s),e.scale.setScalar(1.28),e}function k2(e,t){const n=t.clone().normalize(),i=e.clone().addScaledVector(n,-.55),r=[{color:16766047,radius:.13,life:.24,growth:4.8,opacity:.9,speed:1.1},{color:8095634,radius:.19,life:.5,growth:2.5,opacity:.38,speed:.55}];for(const o of r){const s=new O(R2,new je({color:o.color,transparent:!0,opacity:o.opacity,depthWrite:!1}));s.scale.setScalar(o.radius),s.position.copy(i),s.position.x+=(Math.random()-.5)*.12,s.position.y+=(Math.random()-.5)*.1,s.position.z+=(Math.random()-.5)*.12,xe.add(s),ln.push({mesh:s,kind:"rocket-trail",life:o.life,maxLife:o.life,growth:o.growth,opacity:o.opacity,sharedGeometry:!0,velocity:n.clone().multiplyScalar(-o.speed).add(new P(0,.32,0))})}}function U2(e,t){const n=e.group.position.clone().add(e.forward.multiplyScalar(1.05));n.y=1.12;const i=t.clone();i.y=.18;const r=i.clone().sub(n),o=Math.max(.01,r.length()),s=r.clone().normalize(),a=n.clone().add(i).multiplyScalar(.5),l=(h,d,u)=>{const p=new O(new st(h,h,o,7),new je({color:d,transparent:!0,opacity:u,depthWrite:!1}));p.position.copy(a),p.quaternion.setFromUnitVectors(new P(0,1,0),s),xe.add(p),ln.push({mesh:p,kind:"sniper-trace",life:.14,maxLife:.14,growth:.35,opacity:u})};l(.065,5083135,.38),l(.024,14284287,1),Kc(i,"sniper")}function In(e,t=null){if(e.shootReadyAt>0&&(e.shootCooldown=Math.max(0,(e.shootReadyAt-performance.now())/1e3)),!mt||!e.active||e.shootCooldown>.01)return;if(!e.weaponType||e.ammo<=0){e.isPlayer&&et("先去地图上捡枪");return}const n=e.weaponType,i=n==="smg",r=n==="sniper",o=n==="rocket",s=e.isPlayer||!!(t&&E.active&&t.distanceToSquared(E.group.position)<2.25),a=t?Q.findIndex(p=>p.active&&p.group.position.distanceToSquared(t)<2.25):-1;e.ammo-=1,e.shootCooldown=i?.25:r?.5:1.05,e.shootReadyAt=performance.now()+e.shootCooldown*1e3,e.gunRecoil=1,s&&Lf(e,n),e.isPlayer&&Nt(n),e.isPlayer&&(Vn=Math.max(Vn,i?.055:r?.14:.24));const l=i?7733202:r?7974399:16741710,h=o?Uf():new O(new dt(i?.13:.16,10,10),new de({color:l,emissive:i?1558676:2645682,emissiveIntensity:4}));h.position.copy(e.group.position).add(e.forward.multiplyScalar(Math.min(1.8,e.attackRange*.48))),h.position.y=1.05,h.visible=s,h.isMesh&&(h.castShadow=!0),xe.add(h);let d=null,u=e.forward;if(i||(d=(t||e.group.position.clone().add(e.forward.multiplyScalar(12))).clone(),_i(d,.8),d.y=1.05,u=d.clone().sub(h.position).setY(0),u.lengthSq()<.01?u.copy(e.forward):u.normalize()),r){const p=po(h.position,d,.045);p&&(d.copy(p.point),e.isPlayer&&Nt("wallImpact"));const c=Jc({owner:e,damage:2,type:"sniper",targetPoint:d,blastRadius:ls});(e.isPlayer||c.targets.some(m=>m.isPlayer))&&U2(e,d),xe.remove(h),h.geometry.dispose(),h.material.dispose(),e.ammo<=0?e.setGun(null,0):pi(e);return}o&&(h.rotation.y=Math.atan2(u.x,u.z)),Bt.push({mesh:h,owner:e,velocity:u.multiplyScalar(i?24:r?30:13),damage:o?4:2,type:n,targetPoint:d,blastRadius:r?ls:o?ba:0,life:o?3:1.8,trailTimer:0,visual:s,networkTargetSlot:a}),e.ammo<=0?e.setGun(null,0):pi(e)}function yn(e,t){const n=e[t];if(!n)return;xe.remove(n.group);const i=new Set,r=new Set;n.group.traverse(o=>{o.geometry&&i.add(o.geometry),o.material&&(Array.isArray(o.material)?o.material:[o.material]).forEach(a=>r.add(a))}),i.forEach(o=>o.dispose()),r.forEach(o=>{o.map&&o.map.dispose(),o.dispose()}),e.splice(t,1)}function kh(e,t){const n=Sr("3秒","#ffcf70");return n.scale.set(.72,.36,1),n.position.y=t,n.visible=!1,n.renderOrder=8,e.add(n),n}const $t=[];function N2(e){const t=e==="smg",n=e==="rocket",i=[];if(n){const o=new st(.2,.26,1.85,12);o.rotateZ(Math.PI/2),i.push(o);const s=new It(.25,.065,8,20);s.rotateY(Math.PI/2),s.translate(.92,0,0),i.push(s)}else{i.push(new Pe(t?1.35:1.65,.28,.32));const o=new st(.065,.065,t?.75:1.05,8);o.rotateZ(Math.PI/2),o.translate(t?.95:1.25,0,0),i.push(o);const s=new Pe(.24,.52,.25);if(s.rotateZ(-.28),s.translate(-.18,-.32,0),i.push(s),t){const a=new Pe(.25,.58,.27);a.rotateZ(.12),a.translate(.18,-.38,0),i.push(a)}}const r=v_(i,!1);return i.forEach(o=>o.dispose()),r}function $n(e=Xn(7,St-5),t=Math.random()<.5?"sniper":"smg"){const n=t==="smg",i=t==="sniper",r=t==="rocket",o=new De,s=new de({color:n?5824690:i?7514623:16740429,emissive:n?883554:i?2576283:11021591,emissiveIntensity:1.6,metalness:.55,roughness:.3}),a=new O(N2(t),s);if(a.castShadow=!0,o.add(a),i){const p=new O(new st(.11,.11,.62,10),new de({color:1385272,metalness:.68,roughness:.25}));p.rotation.z=Math.PI/2,p.position.set(.12,.25,0),o.add(p)}const l={smg:"冲锋枪×12",sniper:"狙击枪×6",rocket:"火箭筒×1"},h={smg:"#75ffd2",sniper:"#86b8ff",rocket:"#ff8765"},d=Sr(l[t],h[t]);d.scale.set(r?1.95:1.85,r?.98:.92,1),d.position.y=1.15,o.add(d);const u=kh(o,1.9);o.position.copy(e),o.position.y=.62,xe.add(o),$t.push({group:o,type:t,phase:Math.random()*Math.PI*2,age:0,expiryLabel:u})}$n(new P(-6,0,5),"sniper");$n(new P(-15,0,-9),"sniper");$n(new P(7,0,-7),"smg");$n(new P(16,0,4),"smg");$n(new P(11,0,8),"rocket");$n(new P(-18,0,2),"rocket");let Zl=8,Kl=10,Jl=14;function F2(){let e=Xn(St*.58,St-3.2),t=-1/0;const n=Q.filter(i=>i.active).map(i=>i.group.position);for(let i=0;i<80;i+=1){const r=Xn(St*.58,St-3.2),o=n.length?Math.min(...n.map(l=>r.distanceTo(l))):St,s=r.length()/St*3.5,a=o+s+Math.random()*.5;a>t&&(t=a,e=r)}return e}const Ot=[];function vs(e=F2()){const t=new De,n=new de({color:16766046,emissive:16752410,emissiveIntensity:2,metalness:.65,roughness:.25}),i=new O(new It(.42,.1,10,24),n);i.rotation.x=Math.PI/2,i.castShadow=!0,t.add(i);const r=new O(new wn(.28),new de({color:9040895,emissive:3394534,emissiveIntensity:2.5}));t.add(r);const o=new O(new It(.82,.055,8,32),new je({color:9303039,transparent:!0,opacity:.9,depthWrite:!1}));o.rotation.x=Math.PI/2,t.add(o);const s=new O(new dt(.72,16,11),new je({color:7662335,transparent:!0,opacity:.16,side:bt,depthWrite:!1}));t.add(s);const a=new O(new st(.08,.34,12,12,1,!0),new je({color:10483199,transparent:!0,opacity:.22,side:bt,depthWrite:!1}));a.position.y=6,t.add(a);const l=new _h(7531263,7,9,2);l.position.y=.4,t.add(l);const h=Sr("无敌护符 10秒","#ffe69b");h.scale.set(2.35,1.17,1),h.position.y=1.65,t.add(h);const d=kh(t,2.42);t.position.copy(e),t.position.y=.72,xe.add(t),Ot.push({group:t,phase:Math.random()*Math.PI*2,age:0,outerHalo:o,aura:s,beacon:a,expiryLabel:d})}const Vt=[];function yr(e=Xn(5,St-5),t="range"){const n=new De,i=t==="range",r=i?6548223:16739144,o=new de({color:r,emissive:i?1412263:12134679,emissiveIntensity:2.6,metalness:.42,roughness:.24}),s=new O(i?new It(.42,.1,10,28):new wn(.43,0),o);s.rotation.x=i?Math.PI/2:0,s.castShadow=!0,n.add(s);const a=new an(i?.11:.105,i?.35:.42,i?8:7),l=new Lt(a,o,4),h=i?.68:.48,d=new P(0,1,0),u=new P;for(let v=0;v<4;v+=1){const g=v*Math.PI/2;u.set(Math.cos(g),0,Math.sin(g)),se.position.copy(u).multiplyScalar(h),se.quaternion.setFromUnitVectors(d,u),se.scale.set(1,1,1),se.updateMatrix(),l.setMatrixAt(v,se.matrix)}l.instanceMatrix.needsUpdate=!0,n.add(l);const p=new O(new It(.72,.045,7,32),new je({color:r,transparent:!0,opacity:.62,depthWrite:!1}));p.rotation.x=Math.PI/2,n.add(p);const c=Sr(i?"攻击范围 ×1.5":"攻击伤害 ×1.5",i?"#7af2ff":"#ff8c70");c.scale.set(2.35,1.17,1),c.position.y=1.28,n.add(c);const m=kh(n,2.05);n.position.copy(e),n.position.y=.72,xe.add(n),Vt.push({group:n,type:t,phase:Math.random()*Math.PI*2,age:0,core:s,halo:p,expiryLabel:m})}vs();yr(new P(-7,0,-8),"range");yr(new P(7,0,-8),"damage");yr(new P(-14,0,12),"range");yr(new P(14,0,12),"damage");let Ql=20,ec=6,sa="range";const Qt={};let On=__,gd=null,Ps=!1,rn=!1,Jn=!1;const Oa=new Ge(0,0),Jt=new P(0,0,0),B2=new P,O2=new P,za=new km,Nf=new xi(new P(0,1,0),0),dn=new O(new kn(.28,.42,20),new je({color:9236223,transparent:!0,opacity:.85,side:bt}));dn.rotation.x=-Math.PI/2;dn.position.y=.05;dn.visible=!1;xe.add(dn);const Kn=new yh(cs,4,16765096,16741972);Kn.position.y=.058;Kn.material.transparent=!0;Kn.material.opacity=.86;Kn.material.depthWrite=!1;Kn.visible=!1;xe.add(Kn);addEventListener("keydown",e=>{Qt[e.code]=!0});addEventListener("keyup",e=>{Qt[e.code]=!1});addEventListener("mousemove",e=>{Oa.x=e.clientX/innerWidth*2-1,Oa.y=-(e.clientY/innerHeight)*2+1});addEventListener("mousedown",e=>{if(mt&&e.button===0){if(!E.weaponType){et("先去地图上捡冲锋枪、狙击枪或火箭筒");return}if(Ps=E.weaponType==="smg",wt==="guest"){Sf+=1,E.gunRecoil=1,Lf(E,E.weaponType),Nh(!0);return}In(E,Jt)}});addEventListener("mouseup",e=>{e.button===0&&(Ps=!1,wt==="guest"&&Nh(!0))});addEventListener("contextmenu",e=>e.preventDefault());new URLSearchParams(location.search).has("qa")&&(window.__numberBrawlQA={setPlayerNumber(e){E.setNumber(e)},eliminatePlayer(){E.setNumber(0),gs(E)},giveAmulet(){E.activateInvincibility(10)},giveGun(e="smg"){const t=e==="smg"?12:e==="sniper"?6:1;E.setGun(e,t)},fireGunAt(e=0,t=8){In(E,new P(e,0,t))},weaponState(){return{type:E.weaponType,ammo:E.ammo,shootCooldown:E.shootCooldown,projectiles:Bt.length}},terrainState(){return{wallCount:Mn.length,walls:Mn.map(({x:e,z:t,width:n,depth:i,height:r,yaw:o})=>({x:e,z:t,width:n,depth:i,height:r,yaw:o})),directionMarkerCount:Q.length,audio:this.audioState()}},audioState(){return{enabled:mi,initialized:!!(xn&&ni),contextState:xn?.state||"not-created",toggleText:Ca.textContent,cues:{...Ko}}},directionMarkerState(){return{count:Q.length,playerYaw:E.yaw,integratedIntoWeakZone:!0,visibleScale:E.backZoneGroup.scale.x>0}},setupWallMovementTest(){rn=!0,Jn=!0;const e=Mn[0],t=Math.cos(e.yaw),n=Math.sin(e.yaw),i=(s,a)=>new P(e.x+s*t+a*n,0,e.z-s*n+a*t);E.active=!0,E.group.visible=!0,E.setNumber(10),E.group.position.copy(i(0,-(e.depth/2+.66+.08))),Q.slice(1).forEach(s=>{s.active=!1,s.group.visible=!1,s.respawnTimer=999});const r=fo(E.group.position,e);E.move(new P(n,0,t),.18);const o=fo(E.group.position,e);return{before:[r.x,r.y],after:[o.x,o.y],crossedWall:o.y>e.depth/2,overlapsWall:bf(E.group.position,.659),distanceFromWall:Math.abs(o.y)-e.depth/2}},setupWallMeleeTest(){rn=!0,Jn=!0;const e=Mn[0],t=Math.cos(e.yaw),n=Math.sin(e.yaw),i=o=>new P(e.x+o*n,0,e.z+o*t);E.active=!0,E.group.visible=!0,E.group.position.copy(i(-1.14)),E.yaw=e.yaw,E.group.rotation.y=E.yaw,E.setNumber(10),E.setGun(null,0);const r=Q[1];return r.active=!0,r.group.visible=!0,r.group.position.copy(i(1.14)),r.setNumber(20),Q.slice(2).forEach(o=>{o.active=!1,o.group.visible=!1,o.respawnTimer=999}),kf(E),{targetNumber:r.number,blockedByWall:r.number===20}},setupWallProjectileTest(e="smg"){rn=!0,Jn=!0,Bt.splice(0).forEach(a=>xe.remove(a.mesh));const t=Mn[0],n=Math.cos(t.yaw),i=Math.sin(t.yaw),r=a=>new P(t.x+a*i,0,t.z+a*n);E.active=!0,E.group.visible=!0,E.group.position.copy(r(-3)),E.yaw=t.yaw,E.group.rotation.y=E.yaw,E.setNumber(10);const o=Q[1];o.active=!0,o.group.visible=!0,o.group.position.copy(r(e==="rocket"?4:3)),o.setNumber(20),Q.slice(2).forEach(a=>{a.active=!1,a.group.visible=!1,a.respawnTimer=999});const s=Ko.wallImpact||0;return E.setGun(e,1),In(E,o.group.position.clone()),e!=="sniper"&&Vf(e==="rocket"?.45:.25),{type:e,targetNumber:o.number,projectiles:Bt.length,wallImpactCues:(Ko.wallImpact||0)-s,blockedByWall:o.number===20&&Bt.length===0}},performanceState(){return{pixelRatio:$r,queuedAvatarTextures:p2.length,calls:Pt.info.render.calls,triangles:Pt.info.render.triangles,geometries:Pt.info.memory.geometries,textures:Pt.info.memory.textures,activeFighters:Q.filter(e=>e.active).length,effects:ln.length+lr.length+cr.length,pendingNumberLabels:Na.size}},setDecorGroupVisibility(e,t){return(e==="all"?Object.values(Qu).flat():Qu[e]||[]).forEach(i=>{i.visible=!!t}),this.performanceState()},avatarState(){return{frameKey:E.avatarFrameKey,facing:E.avatarFacing,pose:{...E.avatarPose},motionBlend:E.motionBlend,frameBlend:E.avatarFrameBlend,previousFrameVisible:E.avatarPreviousSprite.visible,attackAnimation:E.attackAnimation,attackAnimationDuration:E.attackAnimationDuration,attackCooldown:E.attackCooldown,outfit:E.outfitStyle,hair:E.hairStyle,pants:E.pantsStyle,shoes:E.shoesStyle,meleeStyle:E.meleeStyle,shirtColor:Dt(E.shirtMaterial.color),pantsColor:Dt(E.pantsMaterial.color),shoeColor:Dt(E.shoeMaterial.color),hairColor:E.hairColor,hairRecolorPixels:E.avatarBaseCanvas?.__hairRecolorCount||0,avatarBaseKey:E.avatarBaseKey,spriteScaleX:E.avatarSprite.scale.x,mirrorX:E.avatarSprite.material.userData.mirrorX||0,directionOverlayVisible:E.avatarDirectionSprite.visible,weapon:E.weaponType||E.meleeStyle,textureSize:E.avatarSprite.material.map?[E.avatarSprite.material.map.image.width,E.avatarSprite.material.map.image.height]:null}},setPlayerYaw(e){E.yaw=Number(e)||0,E.group.rotation.y=E.yaw},setupDirectionalMeleeTest(e=-Math.PI/2,t=.08){rn=!0,E.active=!0,E.group.visible=!0,E.group.position.set(0,0,0),E.setNumber(50),E.yaw=Number(e)||0,E.group.rotation.y=E.yaw,E.setGun(null,0),E.setMeleeWeapon("club"),E.attackAnimationDuration=100,E.attackAnimation=100*(1-Tt.clamp(Number(t)||.08,.01,.98)),E.attackResolved=!0,Q.slice(1).forEach(n=>{n.active=!1,n.group.visible=!1,n.respawnTimer=999})},renderPreviewPose(e={}){return E.avatarPose={mode:e.mode||"idle",walkPhase:e.walkPhase||0,attackPhase:Number.isFinite(e.attackPhase)?e.attackPhase:-1,recoil:e.recoil||0,spin:e.spin||0},E.avatarFrameKey=`qa-preview:${JSON.stringify(E.avatarPose)}`,E.refreshAvatarSprite(E.avatarPose),As(),this.avatarState()},setPlayerBoosting(e){E.boosting=!!e&&E.number>=30,E.updateTierVisuals()},giveCombatBuff(e="range",t=as){E.activateCombatBuff(e,t)},setupCombatBuffTest(e="range",t=!1){rn=!0,E.group.position.set(0,0,0),E.yaw=0,E.group.rotation.y=0,E.setNumber(10),E.clearCombatBuffs(),Q.slice(2).forEach(i=>{i.active=!1,i.group.visible=!1,i.respawnTimer=999});const n=Q[1];return n.active=!0,n.group.visible=!0,n.group.position.set(0,0,3.1),n.yaw=t?0:Math.PI,n.group.rotation.y=n.yaw,n.setNumber(20),E.activateCombatBuff(e,as),e==="damage"&&ar(E,n,2,{allowFrontBlock:!1}),{type:e,backHit:t,playerRange:E.attackRange,playerDamageMultiplier:E.attackDamageMultiplier,targetNumber:n.number}},setupMeleeAnimationTest(){E.group.position.set(0,0,0),E.yaw=0,E.group.rotation.y=0,E.setNumber(10),E.setMeleeWeapon("club"),E.attackCooldown=0,Q.slice(2).forEach(t=>{t.active=!1,t.group.visible=!1,t.respawnTimer=999});const e=Q[1];e.active=!0,e.group.visible=!0,e.group.position.set(0,0,1.6),e.yaw=0,e.group.rotation.y=e.yaw,e.setNumber(9),e.attackCooldown=99,dl(E)},meleeAnimationState(){const e=Q[1].group.position.clone().sub(E.group.position).setY(0);return{playerNumber:E.number,targetNumber:Q[1].number,playerAnimation:E.attackAnimation,resolved:E.attackResolved,targetReaction:Q[1].hitReaction,numberDrops:Ct.length,damageTexts:cr.length,impactBursts:lr.length,targetDistance:e.length(),targetDot:e.lengthSq()>0?e.normalize().dot(E.forward):0,wallBlocked:wf(E.group.position,Q[1].group.position,.06),playerPosition:[E.group.position.x,E.group.position.z],targetPosition:[Q[1].group.position.x,Q[1].group.position.z]}},botOnlyHitTest(){E.active=!1,E.group.visible=!1,E.respawnTimer=999,Q.slice(3).forEach(n=>{n.active=!1,n.group.visible=!1,n.respawnTimer=999});const e=Q[1],t=Q[2];return e.active=!0,t.active=!0,e.group.visible=!0,t.group.visible=!0,e.group.position.set(0,0,0),t.group.position.set(0,0,2),e.setNumber(10),t.setNumber(10),t.yaw=Math.PI,t.group.rotation.y=Math.PI,ar(e,t,2,{allowFrontBlock:!1,splitReward:!0}),{attackerNumber:e.number,targetNumber:t.number,numberDrops:Ct.length,damageTexts:cr.length,impactBursts:lr.length,attackEffects:ln.length}},setupDropLifetimeTest(){rn=!0;for(let n=Ct.length-1;n>=0;n-=1)sr(n);const e=Q[1];return E.group.position.set(St-4,0,0),e.group.position.set(St-1.2,0,0),Dh(e,E),Ct[Ct.length-1].velocity.set(11,4.8,0),E.group.position.set(0,0,0),e.active=!1,e.group.visible=!1,this.numberDropStates()},numberDropStates(){return Ct.map(e=>({age:e.age,grounded:e.grounded,radius:Math.hypot(e.group.position.x,e.group.position.z),opacity:e.materials[0].opacity}))},setupRespawnBotMotionTest(){E.group.position.set(0,0,0),E.setNumber(0),gs(E),Q.slice(2).forEach(t=>{t.active=!1,t.group.visible=!1,t.respawnTimer=999});const e=Q[1];e.active=!0,e.group.visible=!0,e.group.position.set(0,0,8),e.yaw=Math.PI,e.group.rotation.y=e.yaw,e.setNumber(10),e.aiThink=0,e.aiGoal=null,e.aiDecisionTimer=0,e.aiMoveTarget=null,e.aiFoe=null},botState(e=1){const t=Q[e];return{active:t.active,position:[t.group.position.x,t.group.position.z],aiGoal:t.aiGoal?[t.aiGoal.x,t.aiGoal.z]:null}},setupCrowdSeparationTest(){return rn=!0,Jn=!0,[$t,Ot,Vt].forEach(e=>{for(let t=e.length-1;t>=0;t-=1)yn(e,t)}),Q.forEach((e,t)=>{e.active=t<7,e.group.visible=t<7,e.respawnTimer=t<7?0:999,e.attackCooldown=99,e.group.position.set(t%3*.08,0,Math.floor(t/3)*.08)}),this.crowdSeparationState()},crowdSeparationState(){const e=Q.filter(n=>n.active);let t=1/0;for(let n=0;n<e.length;n+=1)for(let i=n+1;i<e.length;i+=1)t=Math.min(t,e[n].group.position.distanceTo(e[i].group.position));return{active:e.length,minimumDistance:t,positions:e.map(n=>[n.group.position.x,n.group.position.z])}},setupPickupLifetimeTest(){return rn=!0,Jn=!0,[$t,Ot,Vt].forEach(e=>{for(let t=e.length-1;t>=0;t-=1)yn(e,t)}),E.active=!0,E.group.visible=!0,E.group.position.set(0,0,0),Q.slice(1).forEach(e=>{e.active=!1,e.group.visible=!1,e.respawnTimer=999}),$n(new P(18,0,0),"sniper"),vs(new P(-18,0,0)),yr(new P(0,0,18),"range"),this.pickupState()},pickupState(){const e=(t,n={})=>({...n,age:t.age,countdownVisible:!!t.expiryLabel?.visible,countdownText:t.expiryLabel?.userData.value??null});return{lifetime:jo,ranged:$t.map(t=>e(t,{type:t.type})),amulets:Ot.map(t=>e(t)),buffs:Vt.map(t=>e(t,{type:t.type}))}},setPickupAges(e=7.1){return[$t,Ot,Vt].forEach(t=>{t.forEach(n=>{n.age=e})}),this.pickupState()},leaderPreferenceState(){const e=Q.slice(1);return{total:e.length,biased:e.filter(t=>t.aiLeaderBias).length,local:e.filter(t=>!t.aiLeaderBias).length,preferences:e.map(t=>({name:t.name,leader:t.aiLeaderBias}))}},setupAmuletHunterTest(){return rn=!0,Jn=!0,[$t,Ot,Vt].forEach(e=>{for(let t=e.length-1;t>=0;t-=1)yn(e,t)}),E.active=!1,E.group.visible=!1,E.respawnTimer=999,Q.slice(1).forEach((e,t)=>{e.active=t<6,e.group.visible=t<6,e.respawnTimer=t<6?0:999,e.invincibleTimer=0,e.group.position.set(3+t*2,0,t%2?1:-1)}),vs(new P(0,0,0)),this.amuletHunterState()},amuletHunterState(){const e=Ot[0],t=Q.slice(1).filter(n=>n.active).map(n=>({name:n.name,distance:e?n.group.position.distanceTo(e.group.position):null,huntsAmulet:e?Wf(n,e):!1}));return{maxHunters:ef,activeBots:t.length,hunters:t.filter(n=>n.huntsAmulet).length,bots:t}},setupBotFlankTest(){rn=!1,Jn=!0,[$t,Ot,Vt].forEach(t=>{for(let n=t.length-1;n>=0;n-=1)yn(t,n)}),E.active=!0,E.group.visible=!0,E.group.position.set(0,0,0),E.yaw=0,E.group.rotation.y=0,E.setNumber(50),E.invincibleTimer=0,Q.slice(2).forEach(t=>{t.active=!1,t.group.visible=!1,t.respawnTimer=999});const e=Q[1];return e.active=!0,e.group.visible=!0,e.group.position.set(0,0,6),e.yaw=Math.PI,e.group.rotation.y=e.yaw,e.setNumber(10),e.setGun(null,0),e.attackCooldown=99,e.aiFlankSign=1,e.aiFlankSpread=0,e.aiDecisionTimer=0,e.aiMoveTarget=null,e.aiFoe=E,At=E,this.botFlankState()},botFlankState(){const e=Q[1];return{position:[e.group.position.x,e.group.position.z],zone:Ba(e,E),distance:e.group.position.distanceTo(E.group.position),tactic:e.aiTactic,redZoneOpacity:E.backZoneSector.material.opacity,redRingOpacity:E.backZoneRing.material.opacity}},combatBuffPickups(){return Vt.map(e=>e.type)},hitPlayer(e=2){ar(Q[1],E,e,{allowFrontBlock:!1})},setupAreaWeaponTest(e="sniper"){rn=!0,Bt.splice(0).forEach(n=>xe.remove(n.mesh)),E.active=!0,E.group.visible=!0,E.group.position.set(0,0,0),E.yaw=0,E.group.rotation.y=0,E.setNumber(10),Q.slice(4).forEach(n=>{n.active=!1,n.group.visible=!1,n.respawnTimer=999}),(e==="sniper"?[[0,6],[1.2,6],[1.75,6]]:[[2.2,8.2],[-2.2,3.8],[3.2,6]]).forEach(([n,i],r)=>{const o=Q[r+1];o.active=!0,o.group.visible=!0,o.group.position.set(n,0,i),o.yaw=0,o.group.rotation.y=o.yaw,o.setNumber(10),o.attackCooldown=99}),E.setGun(e,1),In(E,new P(0,0,6))},setupSmgCollisionTest(){rn=!0,Bt.splice(0).forEach(e=>xe.remove(e.mesh)),E.active=!0,E.group.visible=!0,E.group.position.set(0,0,0),E.yaw=0,E.group.rotation.y=0,Q.slice(3).forEach(e=>{e.active=!1,e.group.visible=!1,e.respawnTimer=999});for(const[e,t]of[[1,5],[2,7]]){const n=Q[e];n.active=!0,n.group.visible=!0,n.group.position.set(0,0,t),n.yaw=Math.PI,n.group.rotation.y=Math.PI,n.setNumber(10),n.attackCooldown=99}E.setGun("smg",1),In(E)},smgTargets(){return[Q[1].number,Q[2].number]},areaWeaponTargets(){return Q.slice(1,4).map(e=>e.number)},combatEconomyState(){return{playerNumber:E.number,invincibleTimer:E.invincibleTimer,groundDrops:Ct.length,targets:Q.slice(1,4).map(e=>e.number)}},setupDirectionalRewardTest(e="smg",t=!1){rn=!0,Jn=!0,Bt.splice(0).forEach(i=>xe.remove(i.mesh));for(let i=Ct.length-1;i>=0;i-=1)sr(i);E.active=!0,E.group.visible=!0,E.group.position.set(0,0,0),E.yaw=0,E.group.rotation.y=0,E.setNumber(10),Q.slice(2).forEach(i=>{i.active=!1,i.group.visible=!1,i.respawnTimer=999});const n=Q[1];n.active=!0,n.group.visible=!0,n.group.position.set(0,0,e==="smg"?5:6.45),n.yaw=t?0:Math.PI,n.group.rotation.y=n.yaw,n.setNumber(20),n.attackCooldown=99,E.setGun(e,1),In(E,new P(0,0,6))},directionalRewardState(){return{playerNumber:E.number,invincibleTimer:E.invincibleTimer,targetNumber:Q[1].number,groundDrops:Ct.length}},setupRocketSelfDamageTest(e=!1){rn=!0,Jn=!0,Bt.splice(0).forEach(t=>xe.remove(t.mesh));for(let t=Ct.length-1;t>=0;t-=1)sr(t);Q.slice(1).forEach(t=>{t.active=!1,t.group.visible=!1,t.respawnTimer=999}),E.active=!0,E.group.visible=!0,E.group.position.set(0,0,0),E.yaw=0,E.group.rotation.y=0,E.setNumber(20),E.invincibleTimer=e?10:0,E.setGun("rocket",1),In(E,E.group.position.clone())},setupLethalRocketSelfDamageTest(){this.setupRocketSelfDamageTest(!1),Bt.splice(0).forEach(t=>xe.remove(t.mesh));for(let t=Ct.length-1;t>=0;t-=1)sr(t);E.setNumber(1);const e=Q[1];e.active=!0,e.group.visible=!0,e.respawnTimer=0,e.group.position.set(0,0,.8),e.yaw=Math.PI,e.group.rotation.y=e.yaw,e.setNumber(20),e.attackCooldown=99,E.setGun("rocket",1),In(E,E.group.position.clone())},rocketSelfDamageState(){return{number:E.number,active:E.active,invincibleTimer:E.invincibleTimer,groundDrops:Ct.length,firstTargetNumber:Q[1].number,rocketsInFlight:Bt.filter(e=>e.type==="rocket").length}},rocketVisualState(){const e=Bt.find(t=>t.type==="rocket");return{projectilePresent:!!e,projectileParts:e?.mesh.children?.length||0,trailEffects:ln.filter(t=>t.kind==="rocket-trail").length,explosionEffects:ln.filter(t=>t.kind==="rocket-explosion"||t.kind==="rocket-debris").length,cameraShake:Vn}},rangedWeaponConfig(){return{sniperInstant:!Bt.some(e=>e.type==="sniper"),sniperRadius:ls,rocketGridSize:cs,rocketGridHalfSize:ba,rocketGridInOriginalCells:cs/rf}},amuletState(){const e=Ot[0];return e?{position:[e.group.position.x,e.group.position.z],nearestFighter:Math.min(...Q.filter(t=>t.active).map(t=>t.group.position.distanceTo(e.group.position)))}:null},finishRound(e=[]){return e.forEach((t,n)=>{Q[n]&&Number.isFinite(t)&&Q[n].setNumber(t)}),On=0,Bh("time"),this.resultState()},resultState(){return{visible:!hs.classList.contains("hidden"),running:mt,title:Qi.textContent,summary:gf.textContent,playerRank:vf.textContent,playerNumber:_f.textContent,cardClass:qr.className,crown:mf.textContent,fullRankingVisible:getComputedStyle(hs.querySelector(".result-content")).display!=="none",rows:[...xa.querySelectorAll(".result-row")].map(e=>e.textContent.trim()),playerRows:xa.querySelectorAll(".player-row").length}},state(){return{active:E.active,number:E.number,respawnTimer:E.respawnTimer,invincibleTimer:E.invincibleTimer,meleeWeapon:E.meleeWeapon,rangeBuffTimer:E.rangeBuffTimer,damageBuffTimer:E.damageBuffTimer,attackDamageMultiplier:E.attackDamageMultiplier,boosting:E.boosting,moveSpeed:E.moveSpeed,turnSpeed:E.turnSpeed,attackRange:E.attackRange,modelScale:E.model.scale.x,attacksPerSecond:E.attacksPerSecond,meleeAttackInterval:E.meleeAttackInterval,leader:At?.name??null}},networkState(){return{mode:wt,roomId:qn,playerId:rr,localSlot:Zn,members:pr.map(e=>({id:e.id,name:e.name,slot:e.slot,host:e.host})),running:mt,snapshotReceived:ka,fighters:Q.map((e,t)=>({localIndex:t,authoritativeSlot:z2(t),name:e.name,human:!!e.networkHuman,x:Number(e.group.position.x.toFixed(3)),z:Number(e.group.position.z.toFixed(3)),number:e.number,active:e.active}))}},forceNetworkHit(e=1,t=0,n=!1,i=2){if(wt!=="host")return{ok:!1,reason:"host-only"};const r=Q[e],o=Q[t];return!r||!o?{ok:!1,reason:"bad-slot"}:(r.active=!0,o.active=!0,r.group.visible=!0,o.group.visible=!0,r.setNumber(10),o.setNumber(10),o.group.position.set(0,0,0),o.yaw=0,o.group.rotation.y=0,r.group.position.set(0,0,n?-2:2),ar(r,o,Number(i)||2,{allowFrontBlock:!1,splitReward:!0}),Uh(!0),{ok:!0,attackerNumber:r.number,targetNumber:o.number,drops:Ct.length})}});function Mr(){return fr?.readyState===WebSocket.OPEN}function zn(e,t="offline"){ed.textContent=e,ed.dataset.state=t}function Ff(){return{shirt:Dt(E.shirtMaterial.color),hair:E.hairStyle,hairColor:E.hairColor,outfit:E.outfitStyle,pants:Dt(E.pantsMaterial.color),pantsStyle:E.pantsStyle,shoes:Dt(E.shoeMaterial.color),shoesStyle:E.shoesStyle,meleeStyle:E.meleeStyle}}function Bf(){const e=Pa.value.replace(/[<>\r\n]/g,"").trim().slice(0,10)||"玩家";Pa.value=e;try{localStorage.setItem("number-brawl-player-name",e)}catch{}return e}function Mi(e){Mr()&&fr.send(JSON.stringify(e))}function Of(){!qn||!Mr()||Mi({type:"appearance",name:Bf(),appearance:Ff(),ready:mr})}function _s(e){return wt!=="guest"?e:e===Zn?0:e===0?Zn:e}function z2(e){return wt!=="guest"?e:e===0?Zn:e===Zn?0:e}function vd(e=pr){pr=e;const t=new Map(e.map(o=>[o.slot,o])),n=new Set(e.map(o=>o.id));for(const o of Xo.keys())n.has(o)||Xo.delete(o);for(let o=0;o<Q.length;o+=1){const s=_s(o),a=Q[s],l=t.get(o);if(a.networkHuman=!!l,a.networkPlayerId=l?.id||"",a.name=l?.name||`人机${o+1}`,l?.appearance){const h=JSON.stringify(l.appearance);Xo.get(l.id)!==h&&(Xo.set(l.id,h),a.setAppearance(l.appearance),!a.isPlayer&&!mt&&b2(a))}}V_.replaceChildren(...e.map(o=>{const s=document.createElement("span"),a=o.connected===!1?"↻ ":o.ready?"✓ ":"… ";return s.textContent=`${a}${o.host?"房主·":""}${o.id===rr?"你":o.name}`,s}));const i=e.filter(o=>o.connected!==!1).length;W_.textContent=`${i}名真人 + ${Math.max(0,15-i)}名人机`;const r=e.length>0&&e.every(o=>o.connected!==!1&&o.ready);wt==="host"?(Ln.disabled=!r,Ln.textContent=r?`开始联机对局（${e.length}真人）`:"等待玩家准备动画…"):wt==="guest"&&(Ln.disabled=!0,Ln.textContent=mr?"等待房主开始":"正在准备流畅动画…")}function Ga(e="已返回单人模式"){to&&(clearTimeout(to),to=0),wt="solo",qn="",rr="",us="",Zr=0,Ia=!1,Ui=null,Zn=0,pr=[],or.clear(),Xo.clear(),ka=!1,pf.classList.add("hidden"),Ln.disabled=!1,Ln.textContent="单人开局",uo.disabled=!1,dr.disabled=!1,zn(e,"offline")}function zf(e=!1){ds=!1,Ia=e,Vo+=1;const t=Vo,n=location.protocol==="https:"?"wss:":"ws:",i=new URL(`${n}//${location.host}/ws`);us&&i.searchParams.set("resume",us);const r=new WebSocket(i);fr=r,r.addEventListener("message",o=>{let s;try{s=JSON.parse(o.data)}catch{return}$2(s)}),r.addEventListener("close",()=>{if(!(t!==Vo||ds)){if(wt==="solo"&&!Ui){uo.disabled=!1,dr.disabled=!1;return}G2()}}),r.addEventListener("error",()=>{t===Vo&&zn(e?"重连失败，继续尝试…":"暂时无法连接服务器","error")})}function G2(){if(to||ds)return;if(Zr+=1,Zr>7){mt&&et("重连超时，已转为单人状态",1.8),Ga("重连超时，请重新加入房间");return}const e=Math.min(350*2**(Zr-1),3e3);zn(`连接中断，正在第 ${Zr} 次重连…`,"connecting"),to=window.setTimeout(()=>{to=0,zf(!0)},e)}function Gf(e){if(uo.disabled=!0,dr.disabled=!0,zn("正在连接…","connecting"),Ui={...e,name:Bf(),appearance:Ff(),ready:mr},Mr()){Mi(Ui),Ui=null;return}if(fr){Vo+=1;try{fr.close()}catch{}}zf(!1)}function zo(e){return e.networkId||(e.networkId=Y_++),e.networkId}function ro(e){wt!=="host"||!qn||pr.length<=1||Yc.push({...e,id:++$_})}function H2(e){return{x:Number(e.group.position.x.toFixed(3)),z:Number(e.group.position.z.toFixed(3)),yaw:Number(e.yaw.toFixed(4)),number:e.number,active:e.active,respawnTimer:Number(e.respawnTimer.toFixed(2)),invincibleTimer:Number(e.invincibleTimer.toFixed(2)),rangeBuffTimer:Number(e.rangeBuffTimer.toFixed(2)),damageBuffTimer:Number(e.damageBuffTimer.toFixed(2)),boosting:e.boosting,weaponType:e.weaponType,ammo:e.ammo,meleeStyle:e.meleeStyle,attackCooldown:Number(e.attackCooldown.toFixed(3)),attackAnimation:Number(e.attackAnimation.toFixed(3)),attackAnimationDuration:Number(e.attackAnimationDuration.toFixed(3)),attackResolved:e.attackResolved,gunRecoil:Number(e.gunRecoil.toFixed(3)),hitPulse:Number(e.hitPulse.toFixed(3)),hitReaction:Number(e.hitReaction.toFixed(3)),moving:e.isMoving||e.motionBlend>.3}}function Uh(e=!1){if(!(wt!=="host"||!qn||!Mr())){if(pr.length<=1){Yc.length=0;return}!e&&Da>0||(Da=1/12,Mi({type:"snapshot",running:mt,roundTime:Number(On.toFixed(2)),leaderSlot:At?Q.indexOf(At):-1,fighters:Q.map(H2),numberDrops:Ct.map(t=>({id:zo(t),x:Number(t.group.position.x.toFixed(3)),y:Number(t.group.position.y.toFixed(3)),z:Number(t.group.position.z.toFixed(3)),age:Number(t.age.toFixed(2)),grounded:t.grounded})),rangedPickups:$t.map(t=>({id:zo(t),type:t.type,x:Number(t.group.position.x.toFixed(3)),y:Number(t.group.position.y.toFixed(3)),z:Number(t.group.position.z.toFixed(3)),age:Number(t.age.toFixed(2))})),amuletPickups:Ot.map(t=>({id:zo(t),x:Number(t.group.position.x.toFixed(3)),y:Number(t.group.position.y.toFixed(3)),z:Number(t.group.position.z.toFixed(3)),age:Number(t.age.toFixed(2))})),combatBuffPickups:Vt.map(t=>({id:zo(t),type:t.type,x:Number(t.group.position.x.toFixed(3)),y:Number(t.group.position.y.toFixed(3)),z:Number(t.group.position.z.toFixed(3)),age:Number(t.age.toFixed(2))})),projectiles:Bt.map(t=>({id:zo(t),type:t.type,x:Number(t.mesh.position.x.toFixed(3)),y:Number(t.mesh.position.y.toFixed(3)),z:Number(t.mesh.position.z.toFixed(3)),yaw:Number(t.mesh.rotation.y.toFixed(4)),ownerSlot:Q.indexOf(t.owner),targetSlot:t.networkTargetSlot??-1})),events:Yc.splice(0)}))}}function _d(e){const t=no.get(e);t&&(xe.remove(t.mesh),t.mesh.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()}),no.delete(e))}function W2(e=[]){const t=new Set(e.map(n=>n.id));for(const n of no.keys())t.has(n)||_d(n);for(const n of e){const i=n.ownerSlot===Zn,r=n.targetSlot===Zn;if(!i&&!r){_d(n.id);continue}let o=no.get(n.id);if(!o){const s=n.type==="rocket"?Uf():new O(new dt(.13,8,8),new je({color:7733202}));s.position.set(n.x,n.y,n.z),xe.add(s),o={mesh:s,target:new P(n.x,n.y,n.z)},no.set(n.id,o)}o.target.set(n.x,n.y,n.z),o.mesh.rotation.y=n.yaw}}function aa(e,t,n,i){const r=new Map(t.map(s=>[s.id,s]));for(let s=e.length-1;s>=0;s-=1)r.has(e[s].networkId)||i(s);const o=new Map(e.map(s=>[s.networkId,s]));for(const s of t){let a=o.get(s.id);a||(a=n(s),a.networkId=s.id,o.set(s.id,a)),a.group.position.set(s.x,s.y,s.z),a.age=s.age,"grounded"in s&&(a.grounded=s.grounded,a.velocity.set(0,0,0))}}function V2(e){aa(Ct,e.numberDrops||[],t=>(Dh(E,Q[1]),Ct[Ct.length-1]),sr),aa($t,e.rangedPickups||[],t=>($n(new P(t.x,0,t.z),t.type),$t[$t.length-1]),t=>yn($t,t)),aa(Ot,e.amuletPickups||[],t=>(vs(new P(t.x,0,t.z)),Ot[Ot.length-1]),t=>yn(Ot,t)),aa(Vt,e.combatBuffPickups||[],t=>(yr(new P(t.x,0,t.z),t.type),Vt[Vt.length-1]),t=>yn(Vt,t)),W2(e.projectiles||[])}function X2(e){if(e.targetSlot!==Zn)return;const t={smg:"捡到冲锋枪：12发",sniper:"捡到狙击枪：6发",rocket:"捡到火箭筒：1发",amulet:"获得无敌护符：10秒内不掉数字！",rangeBuff:"获得攻击范围 ×1.5！",damageBuff:"获得攻击伤害 ×1.5！"};Nt("pickup"),et(t[e.pickupType]||"获得道具",1.1)}function q2(e){const t=_s(e.attackerSlot),n=_s(e.targetSlot);if(t!==0&&n!==0)return;const i=Q[t],r=Q[n],o=new P(e.sourceX,0,e.sourceZ);if(e.outcome==="invincible"){Nt("shield"),io(r,0,!1,"invincible",o),et("无敌护符挡住了伤害！",.65);return}if(e.outcome==="blocked"){Nt("blocked"),io(r,0,!1,"blocked",o),et("同数字正面对打：挡住了！",.8);return}Nt(e.backHit?"backHit":"hit"),io(r,e.damage,e.backHit,"hit",o),Jo(e.backHit?.5:.28,e.backHit),t===0&&e.directGain>0&&Qo(`+${e.directGain}`,"#74ffc1",i,e.backHit);const s=`，吸收 ${e.directGain||0}、掉落 ${e.groundDropCount||0}`;et(t===0&&n===0?`火箭自伤 ${e.damage}，掉落 ${e.groundDropCount||0}！`:t===0?e.backHit?`背后命中 ${e.damage}${s}！`:`命中 ${e.damage}${s}`:e.backHit?`背后受到 ${e.damage} 点伤害！`:`受到 ${e.damage} 点伤害！`,.8)}function Y2(e){const t=!ka;ka=!0,On=Math.max(0,e.roundTime||0);for(let r=0;r<e.fighters.length;r+=1){const o=e.fighters[r],s=Q[_s(r)];s.networkTargetPosition||(s.networkTargetPosition=new P(o.x,0,o.z)),s.networkTargetPosition.set(o.x,0,o.z),t&&s.group.position.set(o.x,0,o.z),s.networkTargetYaw=o.yaw,s.networkMoving=o.moving,s.active=o.active,s.group.visible=o.active,s.respawnTimer=o.respawnTimer,s.boosting=o.boosting,s.invincibleTimer=o.invincibleTimer,s.rangeBuffTimer=o.rangeBuffTimer,s.damageBuffTimer=o.damageBuffTimer,s.attackCooldown=o.attackCooldown,s.attackAnimation=o.attackAnimation,s.attackAnimationDuration=o.attackAnimationDuration||.47,s.attackResolved=o.attackResolved,s.gunRecoil=Math.max(s.gunRecoil,o.gunRecoil),s.hitPulse=Math.max(s.hitPulse,o.hitPulse),s.hitReaction=Math.max(s.hitReaction,o.hitReaction),s.number!==o.number&&s.setNumber(o.number),s.weaponType!==o.weaponType?s.setGun(o.weaponType,o.ammo):s.ammo=o.ammo,s.meleeStyle!==o.meleeStyle&&s.setMeleeStyle(o.meleeStyle)}At=e.leaderSlot>=0?Q[_s(e.leaderSlot)]:null;const n=Math.floor(On/60),i=Math.floor(On%60);Ri(df,`${String(n).padStart(2,"0")}:${String(i).padStart(2,"0")}`),pi(E),E.active?Aa.classList.remove("show"):(Aa.classList.add("show"),Eh.textContent=E.respawnTimer.toFixed(1)),V2(e);for(const r of e.events||[])r.id<=nd||(nd=r.id,r.kind==="hit"?q2(r):r.kind==="pickup"&&X2(r));mt&&e.running===!1&&Bh("time")}function $2(e){if(e.type==="connected"){if(rr=e.playerId||rr,us=e.resumeToken||us,Ia&&qn&&!e.resumed){ds=!0;try{fr?.close()}catch{}Ga("房间重连已超时，请重新加入");return}Zr=0,Ia=!1,e.resumed&&zn("已重新连接","online"),Ui&&(Mi(Ui),Ui=null)}else if(e.type==="joined")qn=e.roomId,rr=e.playerId,Zn=e.slot,wt=e.host?"host":"guest",H_.textContent=qn,pf.classList.remove("hidden"),uo.disabled=!0,dr.disabled=!0,zn(e.resumed?"已重新连接房间":e.host?"你是房主":"已加入房间","online");else if(e.type==="roster")vd(e.members||[]);else if(e.type==="remoteInput"&&wt==="host"){const t=or.get(e.playerId)||{lastFireSequence:-1};or.set(e.playerId,{...t,...e.input||{},slot:e.slot})}else e.type==="playerLeft"?(or.delete(e.playerId),et("一名玩家离开，已由人机接管",1.1)):e.type==="hostChanged"?e.playerId===rr?(wt="host",Zn=Number(e.slot)||0,or.clear(),zn("原房主离开，你已成为新房主","online"),et("你已成为新房主，对局继续！",1.8)):(zn("房主已更换，对局继续","online"),et(e.message||"房主已更换",1.4)):e.type==="start"?(e.members&&vd(e.members),Hf()):e.type==="snapshot"&&wt==="guest"?Y2(e):e.type==="roomClosed"?(et(e.message||"房间已关闭",1.6),Ga("房间已关闭")):e.type==="serverRestart"?zn(e.message||"服务器更新中，准备重连…","connecting"):e.type==="error"&&(uo.disabled=!1,dr.disabled=!1,zn(e.message||"联机失败","error"))}function Nh(e=!1){if(wt!=="guest"||!mt||!Mr()||!e&&La>0)return;La=.05;const t=Jt.clone().sub(E.group.position).setY(0),n=t.lengthSq()>.001?Math.atan2(t.x,t.z):E.yaw;Mi({type:"input",input:{moveX:(Qt.KeyD?1:0)-(Qt.KeyA?1:0),moveZ:(Qt.KeyS?1:0)-(Qt.KeyW?1:0),aimYaw:n,aimX:Number(Jt.x.toFixed(3)),aimZ:Number(Jt.z.toFixed(3)),boost:!!(Qt.ShiftLeft||Qt.ShiftRight),fireHeld:Ps,fireSequence:Sf}})}function j2(e,t,n){if(!e.active)return;const i=e.networkMoveVector.set(Number(t?.moveX)||0,0,Number(t?.moveZ)||0),r=i.lengthSq()>.001,o=Number(t?.aimYaw);if(Number.isFinite(o)&&e.turnToward(o,n),e.boosting=!!t?.boost&&e.number>=30,e.boosting&&r&&e.invincibleTimer<=0)for(e.boostDrain+=n;e.boostDrain>=Ta&&e.active;)e.boostDrain-=Ta,e.setNumber(e.number-1),e.number===0&&gs(e);e.number<30&&(e.boosting=!1),e.move(i,n);const s=e.networkAimPoint.set(Number(t?.aimX)||0,0,Number(t?.aimZ)||0),a=Number(t?.fireSequence)||0;(e.weaponType==="smg"&&t?.fireHeld||e.weaponType&&a>(t?.lastFireSequence??-1))&&In(e,s),t&&(t.lastFireSequence=Math.max(t.lastFireSequence??-1,a)),Q.some(h=>h===e||!h.active?!1:Lh(e,h))&&dl(e)}function Z2(e){za.setFromCamera(Oa,jt),za.ray.intersectPlane(Nf,Jt);const t=E.weaponType==="rocket";dn.visible=!t,dn.position.set(Jt.x,.05,Jt.z);const n=E.weaponType==="sniper"?ls:.42;dn.scale.setScalar(n/.42),dn.material.color.set(E.weaponType==="sniper"?8566271:9236223),Kn.visible=t,Kn.position.set(Jt.x,.058,Jt.z),La=Math.max(0,La-e),Nh();const i=1-Math.exp(-e*18);for(const r of Q){if(!r.networkTargetPosition)continue;const o=r.group.position.clone();r.group.position.lerp(r.networkTargetPosition,i),r.yaw+=Zc(r.yaw,r.networkTargetYaw??r.yaw)*i,r.group.rotation.y=r.yaw,r.isMoving=r.networkMoving||o.distanceToSquared(r.group.position)>1e-4}for(const r of no.values())r.mesh.position.lerp(r.target,1-Math.exp(-e*24)),r.mesh.rotation.z+=e*4.5;for(const r of Ct)r.group.rotation.y+=e*3;for(const r of $t)r.group.rotation.y+=e*1.8;for(const r of Ot)r.group.rotation.y+=e*1.6;for(const r of Vt)r.group.rotation.y+=e*(r.type==="range"?2.4:3.6)}function Hf(){mt||(Ah(),Nt("start"),mt=!0,dn.visible=!0,ff.classList.add("hidden"),Ot.length&&et("全图通告：无敌护符已出现在远离人群的隐蔽区域！",2.2),wt==="host"&&Uh(!0))}try{const e=localStorage.getItem("number-brawl-player-name");e&&(Pa.value=e)}catch{}uo.addEventListener("click",()=>Gf({type:"create"}));dr.addEventListener("click",()=>{const e=Zo.value.trim().toUpperCase();if(e.length!==6){zn("请输入6位邀请码","error");return}Gf({type:"join",roomId:e})});Zo.addEventListener("input",()=>{Zo.value=Zo.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6)});Pa.addEventListener("change",Of);X_.addEventListener("click",()=>{ds=!0,Mi({type:"leave"}),fr?.close(),Ga()});td.addEventListener("click",async()=>{const e=window.__NUMBER_BRAWL_INVITE_ORIGIN__||location.origin,t=new URL(e);t.searchParams.set("room",qn);try{await navigator.clipboard.writeText(t.href),td.textContent="已复制，发给朋友"}catch{window.prompt("复制这条邀请链接",t.href)}});const Sd=new URLSearchParams(location.search).get("room");Sd&&(Zo.value=Sd.toUpperCase().slice(0,6),setTimeout(()=>dr.click(),120));function Fh(){if(Ln.dataset.finished==="true"){location.reload();return}if(wt!=="guest"){if(!mr){fs=!0,Ln.disabled=!0,Ln.textContent="正在准备流畅动画…";return}if(wt==="host"){Mi({type:"start"}),Ln.disabled=!0,Ln.textContent="正在开始…";return}Hf()}}Ln.addEventListener("click",()=>{Fh()});function K2(e){za.setFromCamera(Oa,jt),za.ray.intersectPlane(Nf,Jt),dn.position.set(Jt.x,.05,Jt.z);const t=E.weaponType==="rocket",n=E.weaponType==="sniper"?ls:.42;dn.visible=!t,dn.scale.setScalar(n/.42),dn.material.color.set(E.weaponType==="sniper"?8566271:9236223),Kn.visible=t,Kn.position.set(Jt.x,.058,Jt.z);const i=B2.set((Qt.KeyD?1:0)-(Qt.KeyA?1:0),0,(Qt.KeyS?1:0)-(Qt.KeyW?1:0)),r=i.lengthSq()>.001;E.boosting=(Qt.ShiftLeft||Qt.ShiftRight)&&E.number>=30;const o=O2.copy(Jt).sub(E.group.position).setY(0);if(o.lengthSq()>.01&&E.turnToward(Math.atan2(o.x,o.z),e),E.boosting&&r&&E.invincibleTimer<=0)for(E.boostDrain+=e;E.boostDrain>=Ta&&E.active;)E.boostDrain-=Ta,E.setNumber(E.number-1),et("加速消耗数字 -1",.7),E.number===0&&gs(E);if(E.number<30&&(E.boosting=!1),!E.active)return;E.move(i,e),Ps&&E.weaponType==="smg"&&In(E,Jt),Q.some(a=>a===E||!a.active?!1:Lh(E,a))&&dl(E)}function Go(e,t,n,i=null){let r=null,o=1/0;for(const s of t){if(i&&!i(s))continue;const a=e.distanceToSquared(n(s));a<o&&(o=a,r=s)}return{item:r,distance:Math.sqrt(o)}}function Wf(e,t){if(!t||!e.active||e.isPlayer||e.invincibleTimer>0)return!1;const n=e.group.position.distanceToSquared(t.group.position);let i=0;for(const r of Q){if(r===e||r.isPlayer||!r.active||r.invincibleTimer>0)continue;const o=r.group.position.distanceToSquared(t.group.position),s=Math.abs(o-n)<1e-4&&r.name.localeCompare(e.name)<0;if((o<n-1e-4||s)&&(i+=1),i>=ef)return!1}return!0}function J2(e,t){if(!e.active||rn)return;e.aiThink-=t,e.aiDecisionTimer-=t;let n=e.aiFoe&&e.aiFoe.active&&e.aiFoe!==e?e.aiFoe:null;if(e.aiDecisionTimer<=0||!e.aiMoveTarget){e.aiDecisionTimer=.09+(Math.abs(e.aiFlankSpread)+.2)*.035;const l=Go(e.group.position,Ct,_=>_.group.position,_=>_.grounded),h=Go(e.group.position,$t,_=>_.group.position),d=Go(e.group.position,Ot,_=>_.group.position),u=Go(e.group.position,Vt,_=>_.group.position,_=>_.type==="range"?e.rangeBuffTimer<=0:e.damageBuffTimer<=0),p=Go(e.group.position,Q,_=>_.group.position,_=>_!==e&&_.active),c=At&&At!==e&&At.active,m=c?e.group.position.distanceTo(At.group.position):1/0;n=c&&e.aiLeaderBias&&(m<22||At.number>=e.number+8)?At:p.item;const g=n?e.group.position.distanceTo(n.group.position):1/0;let f;if(d.item&&Wf(e,d.item))f=d.item.group.position,e.aiTactic="collect-amulet";else if(u.item&&u.distance<11)f=u.item.group.position,e.aiTactic="collect-buff";else if(l.item&&l.distance<9)f=l.item.group.position,e.aiTactic="collect-number";else if(e.ammo===0&&h.item&&h.distance<11)f=h.item.group.position,e.aiTactic="collect-weapon";else if(n){const _=Ba(e,n),w=n.forward,y=new P(w.z,0,-w.x),C=e.ammo>0&&!!e.weaponType,A=C?e.weaponType==="smg"?6.2:e.weaponType==="rocket"?8:9.5:Tt.clamp(e.attackRange*.62,1.35,2.25),R=n.group.position.clone().addScaledVector(w,-A);if(C&&_==="back"&&Math.abs(g-A)<1.5)f=e.group.position,e.aiTactic="backline-fire";else if(_==="back")f=R.addScaledVector(y,e.aiFlankSpread),e.aiTactic=C?"reach-backline":"back-strike";else if(_==="front"){const M=2.35+Math.min(1.5,g*.1)+Math.abs(e.aiFlankSpread);f=R.addScaledVector(y,e.aiFlankSign*M),e.aiTactic="flank-from-front"}else f=R.addScaledVector(y,e.aiFlankSign*.32+e.aiFlankSpread),e.aiTactic="circle-to-back";_i(f,.8)}else(!e.aiGoal||e.group.position.distanceToSquared(e.aiGoal)<1.4||e.aiThink<=0)&&(e.aiGoal=Xn(3,St-5),e.aiThink=2.4+Math.random()*2.6),f=e.aiGoal,e.aiTactic="wander";e.aiFoe=n,e.aiMoveTarget=f?f.clone():e.group.position.clone()}const i=e.steeringVector.copy(e.aiMoveTarget).sub(e.group.position).setY(0);if(i.lengthSq()>.01){const l=f2(e.group.position,i,.66*eo(e.number,e.boosting),e.aiFlankSign),h=Math.atan2(l.x,l.z);e.turnToward(h,t);const d=l.dot(e.forward),u=["flank-from-front","circle-to-back","reach-backline"].includes(e.aiTactic);e.move(e.forward,t,d>.45?u?.88:.72:.25)}const r=n?e.group.position.distanceTo(n.group.position):1/0,s=(n?Ba(e,n):"front")!=="front"||r<.82;n&&e.ammo===0&&r<e.attackRange*.96&&s&&dl(e);const a=e.weaponType==="smg"?13:20;if(n&&e.ammo>0&&r>4&&r<a){const l=e.networkAimPoint.copy(n.group.position).sub(e.group.position).setY(0).normalize();e.aiTactic==="backline-fire"&&e.turnToward(Math.atan2(l.x,l.z),t),l.dot(e.forward)>.94&&Math.random()<t*1.4&&In(e,n.group.position)}}function Q2(){for(let e=0;e<Q.length;e+=1){const t=Q[e];if(t.active)for(let n=e+1;n<Q.length;n+=1){const i=Q[n];if(!i.active)continue;let r=i.group.position.x-t.group.position.x,o=i.group.position.z-t.group.position.z,s=r*r+o*o;const a=.72*(t.model.scale.x+i.model.scale.x);if(s>=a*a)continue;if(s<1e-4){const p=(e*2.17+n*3.41)%(Math.PI*2);r=Math.cos(p),o=Math.sin(p),s=1}const l=Math.sqrt(s),h=(a-l)/l,d=t.isPlayer?.32:i.isPlayer?.68:.5,u=1-d;t.group.position.x-=r*h*d,t.group.position.z-=o*h*d,i.group.position.x+=r*h*u,i.group.position.z+=o*h*u,_i(t.group.position),_i(i.group.position)}}for(const e of Q)e.active&&(Fa(e.group.position,.66*eo(e.number,e.boosting)),_i(e.group.position))}function eS(e){for(let t=Ct.length-1;t>=0;t-=1){const n=Ct[t];if(n.age+=e,n.age>=fd){sr(t);continue}n.group.rotation.y+=e*3,n.grounded?(n.group.position.y=.36+Math.sin(n.age*4)*.08,Fa(n.group.position,.22)):(n.velocity.y-=11*e,n.group.position.addScaledVector(n.velocity,e),E2(n),Fa(n.group.position,.22)&&(n.velocity.x*=-.22,n.velocity.z*=-.22),n.group.position.y<=.36&&(n.group.position.y=.36,n.velocity.multiplyScalar(.35),n.velocity.y=0,n.grounded=!0));const i=fd-n.age,r=i<1?Tt.clamp(i,0,1):1,o=i<1.5?.72+Math.sin(n.age*28)*.28:1;for(const s of n.materials)s.opacity=r*o;if(n.age>.55){const s=Q.find(a=>a.active&&a.group.position.distanceTo(n.group.position)<1.25);s&&(s.setNumber(s.number+1),s.isPlayer&&(Nt("pickupNumber"),et("捡到数字 +1",.65)),sr(t))}}}function tS(e,t,n,i){const r=t.clone().sub(e),o=e.clone().sub(n),s=r.dot(r);if(s<1e-6)return null;const a=2*o.dot(r),l=o.dot(o)-i*i,h=a*a-4*s*l;if(h<0)return null;const d=Math.sqrt(h),u=(-a-d)/(2*s),p=(-a+d)/(2*s);return u>=0&&u<=1?u:p>=0&&p<=1?p:null}function Kc(e,t){const n=t==="smg"?7733202:t==="rocket"?16740424:8566271,i=new O(x2,new je({color:n,transparent:!0,opacity:.95,side:bt,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.set(e.x,.09,e.z),xe.add(i),ln.push({mesh:i,life:.2,maxLife:.2,growth:3.4,opacity:.9,sharedGeometry:!0})}function nS(e,t,n){const i=n==="rocket"?16740424:8566271,r=new De;r.position.set(e.x,.09,e.z);const o=n==="rocket"?new yh(cs,4,16769213,i):new O(new kn(t*.72,t,36),new je({color:i,transparent:!0,opacity:.92,side:bt,depthWrite:!1}));n==="rocket"?(o.material.transparent=!0,o.material.opacity=.92,o.material.depthWrite=!1):o.rotation.x=-Math.PI/2,r.add(o);const s=new O(new dt(n==="rocket"?t*.58:t*.42,18,12),new je({color:i,transparent:!0,opacity:n==="rocket"?.42:.26,depthWrite:!1}));s.position.y=n==="rocket"?.52:.3,r.add(s);const a=[];if(n==="rocket"){const l=new O(new Wn(t*.78,42),new je({color:16752942,transparent:!0,opacity:.5,side:bt,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.045,r.add(l),a.push({mesh:l,life:.3,maxLife:.3,growth:1.8,opacity:.5,parent:r,kind:"rocket-explosion"});const h=new O(new kn(t*.35,t*.52,44),new je({color:16769674,transparent:!0,opacity:1,side:bt,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.13,r.add(h),a.push({mesh:h,life:.46,maxLife:.46,growth:4.8,opacity:1,parent:r,kind:"rocket-explosion"});const d=new O(new st(t*.14,t*.38,2.8,18,1,!0),new je({color:16743222,transparent:!0,opacity:.58,side:bt,depthWrite:!1}));d.position.y=1.35,r.add(d),a.push({mesh:d,life:.38,maxLife:.38,growth:2.2,opacity:.58,parent:r,kind:"rocket-explosion"});const u=$a?8:14;for(let p=0;p<u;p+=1){const c=p/u*Math.PI*2+Math.random()*.2,m=new O(I2,new je({color:p%2?16765276:16735026,transparent:!0,opacity:.95,depthWrite:!1}));m.scale.setScalar(.08+Math.random()*.08),m.position.set(Math.cos(c)*t*.18,.38+Math.random()*.45,Math.sin(c)*t*.18),r.add(m),a.push({mesh:m,life:.48+Math.random()*.22,maxLife:.7,growth:.7,opacity:.95,parent:r,kind:"rocket-debris",sharedGeometry:!0,velocity:new P(Math.cos(c)*(4+Math.random()*3),3.8+Math.random()*3.2,Math.sin(c)*(4+Math.random()*3)),gravity:9.5,spin:10+Math.random()*8})}}xe.add(r),ln.push({mesh:o,life:.42,maxLife:.42,growth:n==="rocket"?.7:2.6,opacity:.92,parent:r,kind:n==="rocket"?"rocket-explosion":"area-explosion"}),ln.push({mesh:s,life:n==="rocket"?.42:.28,maxLife:n==="rocket"?.42:.28,growth:n==="rocket"?4.8:3.4,opacity:n==="rocket"?.58:.26,parent:r,kind:n==="rocket"?"rocket-explosion":"area-explosion"}),ln.push(...a)}function Jc(e){const t=Q.filter(r=>{if(!r.active||r===e.owner&&e.type!=="rocket")return!1;const o=.78*r.model.scale.x,s=r.group.position.x-e.targetPoint.x,a=r.group.position.z-e.targetPoint.z;return e.type==="rocket"?Math.abs(s)<=ba+o&&Math.abs(a)<=ba+o:Math.hypot(s,a)<=e.blastRadius+o}),n=e.owner.isPlayer||t.some(r=>r.isPlayer),i=[...t].sort((r,o)=>+(r===e.owner)-+(o===e.owner));for(const r of i){const o=r===e.owner;ar(e.owner,r,e.damage,{allowFrontBlock:!1,hitPosition:e.targetPoint,splitReward:!o})}return n&&(e.type==="rocket"&&Nt("explosion"),nS(e.targetPoint,e.blastRadius,e.type),Vn=Math.max(Vn,e.type==="rocket"?.48:.22),e.type==="rocket"&&Jo(.62,!1)),{targets:t,playerInvolved:n}}function Vf(e){for(let t=Bt.length-1;t>=0;t-=1){const n=Bt[t];n.life-=e;const i=n.mesh.position.clone(),r=i.clone().addScaledVector(n.velocity,e);if(n.type==="rocket"&&(n.trailTimer-=e,n.visual&&n.trailTimer<=0&&(k2(i,n.velocity),n.trailTimer+=.075),n.mesh.rotation.z+=e*4.5),n.targetPoint){const l=po(i,r,.06);if(l){n.targetPoint.copy(l.point),n.mesh.position.copy(l.point),Jc(n),xe.remove(n.mesh),Bt.splice(t,1);continue}const h=i.distanceTo(n.targetPoint),d=n.velocity.length()*e;h<=d||n.life<=0?(n.mesh.position.copy(n.targetPoint),Jc(n),xe.remove(n.mesh),Bt.splice(t,1)):n.mesh.position.copy(r);continue}let o=null,s=1/0;for(const l of Q){if(l===n.owner||!l.active)continue;const h=l.group.position.clone();h.y=1.05;const d=l.model.scale.x,u=tS(i,r,h,.72*d);u!==null&&u<s&&(s=u,o=l)}const a=po(i,r,.045);if(a&&a.time<s){n.mesh.position.copy(a.point),n.owner.isPlayer&&(Nt("wallImpact"),Kc(a.point,n.type)),xe.remove(n.mesh),Bt.splice(t,1);continue}if(o){n.mesh.position.lerpVectors(i,r,s),ar(n.owner,o,n.damage,{allowFrontBlock:!1,hitPosition:n.mesh.position,splitReward:!0}),(n.owner.isPlayer||o.isPlayer)&&Kc(n.mesh.position,n.type),xe.remove(n.mesh),Bt.splice(t,1);continue}n.mesh.position.copy(r),(n.life<=0||new Ge(n.mesh.position.x,n.mesh.position.z).length()>St+4)&&(xe.remove(n.mesh),Bt.splice(t,1))}}function tc(e){const t=jo-e.age;if(e.expiryLabel&&(e.expiryLabel.visible=t<=3,e.expiryLabel.visible&&ws(e.expiryLabel,`${Math.max(1,Math.ceil(t))}秒`)),t>2){e.group.scale.setScalar(1),e.group.visible=!0;return}const n=1-Tt.clamp(t/2,0,1);e.group.scale.setScalar(1+Math.sin(e.age*(15+n*14))*(.035+n*.07)),e.group.visible=t>.7||Math.floor(e.age*18)%2===0}function iS(e){for(let t=$t.length-1;t>=0;t-=1){const n=$t[t];if(n.age+=e,n.age>=jo){yn($t,t);continue}tc(n),n.phase+=e,n.group.rotation.y+=e*1.8,n.group.position.y=.68+Math.sin(n.phase*2)*.12;const i=Q.find(r=>r.active&&r.group.position.distanceTo(n.group.position)<1.25);if(i){const r=n.type==="smg"?12:n.type==="sniper"?6:1;i.setGun(n.type,r),ro({kind:"pickup",pickupType:n.type,targetSlot:Q.indexOf(i)}),i.isPlayer&&(Nt("pickup"),et({smg:"捡到冲锋枪：12 发，每秒 4 发、每发伤害 2",sniper:"捡到狙击枪：6 发，每秒 2 发、点击即刻命中落点",rocket:"捡到火箭筒：1 发，点击选择 4×4 范围落点"}[n.type],1.35)),yn($t,t)}}for(let t=Ot.length-1;t>=0;t-=1){const n=Ot[t];if(n.age+=e,n.age>=jo){yn(Ot,t);continue}tc(n),n.phase+=e,n.group.rotation.y+=e*1.6,n.group.position.y=.72+Math.sin(n.phase*2.2)*.14;const i=1+Math.sin(n.phase*4.2)*.13;n.outerHalo.scale.setScalar(i),n.aura.scale.setScalar(.96+Math.sin(n.phase*3.1)*.16),n.aura.material.opacity=.13+Math.sin(n.phase*4.6)*.055,n.beacon.material.opacity=.16+Math.sin(n.phase*3.8)*.09;const r=Q.find(o=>o.active&&o.group.position.distanceTo(n.group.position)<1.3);r&&(r.activateInvincibility(10),ro({kind:"pickup",pickupType:"amulet",targetSlot:Q.indexOf(r)}),r.isPlayer&&(Nt("pickup"),et("获得无敌护符：10 秒内不掉数字！",1.1)),yn(Ot,t))}for(let t=Vt.length-1;t>=0;t-=1){const n=Vt[t];if(n.age+=e,n.age>=jo){yn(Vt,t);continue}tc(n),n.phase+=e,n.group.rotation.y+=e*(n.type==="range"?2.4:3.6),n.group.position.y=.72+Math.sin(n.phase*2.4)*.12;const i=1+Math.sin(n.phase*4.4)*.14;n.halo.scale.setScalar(i),n.halo.material.opacity=.48+Math.sin(n.phase*4.8)*.2;const r=Q.find(o=>o.active&&o.group.position.distanceTo(n.group.position)<1.35);r&&(r.activateCombatBuff(n.type),ro({kind:"pickup",pickupType:n.type==="range"?"rangeBuff":"damageBuff",targetSlot:Q.indexOf(r)}),r.isPlayer&&(Nt("pickup"),et(n.type==="range"?`获得攻击范围增益：${as} 秒内范围 ×1.5！`:`获得攻击伤害增益：${as} 秒内伤害 ×1.5！`,1.2)),yn(Vt,t))}}function rS(e){Jn||(Zl-=e,Kl-=e,Jl-=e,Zl<=0&&(Zl+=10,$n(Xn(5,St-5),"sniper"),et("地图出现了一把狙击枪",.9)),Kl<=0&&(Kl+=12,$n(Xn(5,St-5),"smg"),et("地图出现了一把冲锋枪",.9)),Jl<=0&&(Jl+=18,$n(Xn(5,St-5),"rocket"),et("地图出现了一把火箭筒",1.05)),Ql-=e,ec-=e,Ql<=0&&(Ql+=20,vs(),et("全图通告：无敌护符出现在远离人群的隐蔽区域，快去争夺！",2.2)),ec<=0&&(ec+=9,yr(Xn(5,St-5),sa),et(sa==="range"?"地图出现了攻击范围 ×1.5 增益":"地图出现了攻击伤害 ×1.5 增益",1.05),sa=sa==="range"?"damage":"range"))}function yd(e){for(let t=ln.length-1;t>=0;t-=1){const n=ln[t];n.life-=e;const i=Math.max(0,n.life/(n.maxLife||.18));n.velocity&&(n.gravity&&(n.velocity.y-=n.gravity*e),n.mesh.position.addScaledVector(n.velocity,e)),n.spin&&(n.mesh.rotation.x+=n.spin*e,n.mesh.rotation.y+=n.spin*.72*e),n.mesh.material.opacity=i*(n.opacity||.75),n.mesh.scale.multiplyScalar(1+e*(n.growth||2)),n.life<=0&&(n.parent?(n.parent.remove(n.mesh),n.parent.children.length===0&&xe.remove(n.parent)):xe.remove(n.mesh),n.sharedGeometry||n.mesh.geometry.dispose(),n.mesh.material.dispose(),ln.splice(t,1))}for(let t=lr.length-1;t>=0;t-=1){const n=lr[t];n.life-=e;const i=Math.max(0,n.life/n.maxLife);for(let o=0;o<n.particles.length;o+=1){const s=n.particles[o];s.velocity.y-=7.5*e,s.position.addScaledVector(s.velocity,e),s.rotationX+=e*9,s.rotationY+=e*12;const a=s.size*(.55+i*.75);se.position.copy(s.position),se.rotation.set(s.rotationX,s.rotationY,0),se.scale.setScalar(a),se.updateMatrix(),n.particleMesh.setMatrixAt(o,se.matrix)}n.particleMesh.instanceMatrix.needsUpdate=!0,n.particleMaterial.opacity=i,n.ringMaterial.opacity=i*.82;const r=1-i;n.ring.scale.setScalar(1+r*5.4),n.life<=0&&(xe.remove(n.group),n.sharedRingGeometry||n.ring.geometry.dispose(),n.particleMaterial.dispose(),n.ringMaterial.dispose(),lr.splice(t,1))}for(let t=cr.length-1;t>=0;t-=1){const n=cr[t];n.life-=e;const i=Math.max(0,n.life/n.maxLife);n.sprite.position.y+=e*(.72+i*.45),n.sprite.position.x+=n.drift*e,n.sprite.material.opacity=Math.min(1,i*1.8),n.sprite.scale.multiplyScalar(1+e*.16),n.life<=0&&(xe.remove(n.sprite),n.sprite.material.dispose(),cr.splice(t,1))}jr>0?(jr=Math.max(0,jr-e),qc.style.opacity=String(Math.min(.75,Ra*(jr/.16)))):(Ra=0,qc.style.opacity="0")}const oS=new P;function sS(e){const t=oS.set(E.group.position.x,29,E.group.position.z+16);jt.position.lerp(t,1-Math.pow(.001,e)),Vn=Math.max(0,Vn-e*2.7);const n=(Math.random()-.5)*Vn,i=(Math.random()-.5)*Vn;jt.position.x+=n*.65,jt.position.z+=i*.65,jt.lookAt(E.group.position.x+n,0,E.group.position.z-1.5+i)}function aS(){const e=Ki.getContext("2d"),t=E.avatarSprite.material.map?.image;if(e.clearRect(0,0,Ki.width,Ki.height),!t?.width||!t?.height)return;const n=Math.min(Ki.width/t.width,Ki.height/t.height),i=t.width*n,r=t.height*n;e.drawImage(t,(Ki.width-i)/2,(Ki.height-r)/2,i,r)}function lS(e,t){const n=document.createElement("div");n.className=`result-row rank-${Math.min(t,4)}${e===E?" player-row":""}`;const i=document.createElement("span");i.className="result-rank",i.textContent=t===1?"♛":String(t);const r=document.createElement("span");r.className="result-name",r.textContent=e===E?"你":e.name;const o=document.createElement("strong");o.className="result-score",o.textContent=String(e.number),n.append(i,r,o),xa.append(n)}function Bh(e="time"){if(!mt)return;mt=!1,Ps=!1,Object.keys(Qt).forEach(u=>{Qt[u]=!1}),dn.visible=!1,Kn.visible=!1,Yn.visible=!1;const t=[...Q].sort((u,p)=>p.number-u.number),n=u=>1+t.filter(p=>p.number>u.number).length,i=n(E),r=t[0].number,o=t.filter(u=>u.number===r),s=i===1,l=t.filter(u=>u.number===E.number).length>1,h=i<=3;qr.classList.remove("winner","runner-up","third-place","simple-result"),i===1?qr.classList.add("winner"):i===2?qr.classList.add("runner-up"):i===3?qr.classList.add("third-place"):qr.classList.add("simple-result"),mf.textContent=i===1?"♛":i===2?"Ⅱ":i===3?"Ⅲ":"",e==="eliminated"?Qi.textContent="你被淘汰了":i===1&&l?Qi.textContent="并列第一！":s?Qi.textContent="你是冠军！":i===2?Qi.textContent=l?"并列第二！":"获得亚军！":i===3?Qi.textContent=l?"并列第三！":"获得季军！":Qi.textContent=`本局第 ${i} 名`;const d=o.map(u=>u===E?"你":u.name).join("、");gf.textContent=h?`${d}以数字 ${r}，${o.length>1?"并列第一":"获得第一"} · 你最终数字 ${E.number}`:`你的最终数字：${E.number}`,vf.textContent=`${l?"并列":""}第 ${i} 名`,_f.textContent=`最终数字 ${E.number}`,aS(),xa.replaceChildren(),t.forEach(u=>lS(u,n(u))),Nt(h?"victory":"roundEnd"),hs.classList.remove("hidden")}q_.addEventListener("click",()=>location.reload());function cS(e){On=Math.max(0,On-e);const t=Math.floor(On/60),n=Math.floor(On%60);Ri(df,`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`);const i=Math.ceil(On);i<=10&&i>=1&&i!==gd&&(gd=i,Nt(i<=3?"countdownFinal":"countdown")),On<=0&&Bh("time")}let sn=0,Ho=0,la=0;function hS(e){if(!mt){Ho=0,la=0;return}if(Ho+=Math.min(e,.25),la+=1,Ho<1.8)return;const t=la/Ho;if(t<56&&$r>Ju){$a=!0,Ea.visible=!1;const n=t<48?.12:.07;$r=Math.max(Ju,$r-n),Pt.setPixelRatio($r),Pt.setSize(innerWidth,innerHeight,!1)}Ho=0,la=0}function uS(e){sn+=e,Vc.offset.x=sn*.006,Vc.offset.y=sn*.0035,Ea.rotation.y=sn*.018,Ea.material.opacity=.4+Math.sin(sn*.9)*.11}function Xf(){requestAnimationFrame(Xf);const e=E_.getDelta(),t=Math.min(e,.2);if(hS(e),uS(t),mt)if(w2(t),wt==="guest"){Z2(t);for(const n of Q)n.active&&n.tickVisual(t);yd(t)}else{C2(t),E.active&&K2(t);for(let n=1;n<Q.length;n+=1){const i=Q[n];if(!i.active)continue;const r=wt==="host"?pr.find(o=>o.slot===n):null;if(r){let o=or.get(r.id);o||(o={slot:n,lastFireSequence:-1},or.set(r.id,o)),j2(i,o,t)}else J2(i,t)}Q2();for(const n of Q)n.active&&n.tickVisual(t);eS(t),Vf(t),iS(t),rS(t),yd(t),cS(t),wt==="host"&&(Da=Math.max(0,Da-t),Uh(!mt))}c2(wt==="guest"?5:3),sS(t),ma>0&&(ma-=t,ma<=0&&Xc.classList.remove("show")),!ff.classList.contains("hidden")&&Rn&&(Rn.rotation.y+=t*.32,Es.render(mo,Ch)),y2(),Pt.render(xe,jt)}function dS(){const e=new je({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),t=new Lt(Df,e,1);t.frustumCulled=!1,t.scale.setScalar(.001);const n=new O(E.shield.geometry,E.shield.material);n.scale.setScalar(.001),xe.add(t,n),Pt.compile(xe,jt),xe.remove(t,n),e.dispose()}dS();Xf();addEventListener("resize",()=>{const e=innerWidth/innerHeight;jt.left=-(Di*e)/2,jt.right=Di*e/2,jt.top=Di/2,jt.bottom=-Di/2,jt.updateProjectionMatrix(),Pt.setSize(innerWidth,innerHeight)});
