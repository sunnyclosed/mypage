import{d as b,u as w,r as y,a as I,c as x,b as t,e,w as s,E,o as V,f as u,g as k,l as z,p as B,h as C,i as S,j as F,k as q,m as R,n as N,q as U,_ as j}from"./index-d34ba515.js";const D="/assets/logo-69181d1b.png",m=l=>(B("data-v-0520d0ba"),l=l(),C(),l),M={class:"login-container"},A={class:"login-box"},G=m(()=>t("div",{class:"login-header"},[t("img",{src:D}),t("div",null,"经济运行分析")],-1)),H={class:"login-body"},J=m(()=>t("span",null,"登 录",-1)),K=b({__name:"login",setup(l){const p=S(),f=w(),_=y(),a=I({username:"",password:""});function g(){var n;if(!f.sysConfig){F.warning("系统初始化中，请稍后");return}(n=_.value)==null||n.validate(o=>{o&&p.push("/home")})}return(n,o)=>{const d=q,c=R,r=N,h=U,v=E;return V(),x("div",M,[t("div",A,[G,t("div",H,[e(v,{ref_key:"formRef",ref:_,model:a},{default:s(()=>[e(r,{class:"login-form",prop:"username",rules:{required:!0,message:"请输入用户名",trigger:"blur"}},{default:s(()=>[e(c,{class:"login-item",size:"large",modelValue:a.username,"onUpdate:modelValue":o[0]||(o[0]=i=>a.username=i),placeholder:"请输入用户名"},{prefix:s(()=>[e(d,{size:20},{default:s(()=>[e(u(k))]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(r,{class:"login-form",prop:"password",rules:{required:!0,message:"请输入密码",trigger:"blur"}},{default:s(()=>[e(c,{class:"login-item",size:"large",modelValue:a.password,"onUpdate:modelValue":o[1]||(o[1]=i=>a.password=i),"show-password":"",placeholder:"请输入密码"},{prefix:s(()=>[e(d,{size:20},{default:s(()=>[e(u(z))]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(r,{class:"login-form"},{default:s(()=>[e(h,{class:"login-item",type:"primary",size:"large",onClick:g},{default:s(()=>[J]),_:1})]),_:1})]),_:1},8,["model"])])])])}}});const O=j(K,[["__scopeId","data-v-0520d0ba"]]);export{O as default};