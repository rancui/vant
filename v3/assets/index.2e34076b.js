import{U as d}from"./index.2bcab174.js";import{B as C}from"./index.230e90f1.js";import{a as V}from"./use-translate.aef3085b.js";import{T as r}from"./function-call.aaae010c.js";import{z as y,C as n,r as w,o as A,a as U,e as t,w as o,A as e,h as _,t as b,d as B,F as D}from"./vue-libs.f710b8ed.js";import"./with-install.796b4cad.js";import"./use-expose.b82056d2.js";import"./index.c480cbe8.js";import"./function-call.07b90c69.js";import"./mount-component.e03afee0.js";import"./constant.80c6de18.js";import"./interceptor.3dc21389.js";import"./index.3a921ec7.js";import"./use-touch.8e5a0907.js";import"./on-popup-reopen.4b166a39.js";import"./index.590c19a0.js";import"./use-lazy-render.c4d421a8.js";import"./index.bd451b43.js";import"./index.67230d2f.js";import"./index.88eab4b6.js";import"./use-route.7ce7c3ed.js";const S={class:"preview-cover van-ellipsis"},te=y({setup(T){const a=V({"zh-CN":{status:"\u4E0A\u4F20\u72B6\u6001",failed:"\u4E0A\u4F20\u5931\u8D25",upload:"\u4E0A\u4F20\u6587\u4EF6",preview:"\u6587\u4EF6\u9884\u89C8",maxSize:"\u9650\u5236\u4E0A\u4F20\u5927\u5C0F",disabled:"\u7981\u7528\u6587\u4EF6\u4E0A\u4F20",maxCount:"\u9650\u5236\u4E0A\u4F20\u6570\u91CF",uploading:"\u4E0A\u4F20\u4E2D...",imageName:"\u56FE\u7247\u540D\u79F0",beforeRead:"\u4E0A\u4F20\u524D\u7F6E\u5904\u7406",overSizeTip:"\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 500kb",invalidType:"\u8BF7\u4E0A\u4F20 jpg \u683C\u5F0F\u56FE\u7247",customUpload:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F",previewCover:"\u81EA\u5B9A\u4E49\u9884\u89C8\u6837\u5F0F",customPreviewImage:"\u81EA\u5B9A\u4E49\u5355\u4E2A\u56FE\u7247\u9884\u89C8",deleteMessage:"\u5220\u9664\u524D\u7F6E\u5904\u7406"},"en-US":{status:"Upload Status",failed:"Failed",upload:"Upload File",preview:"Preview File",maxSize:"Max Size",disabled:"Disable Uploader",maxCount:"Max Count",uploading:"Uploading...",imageName:"Image Name",beforeRead:"Before Read",overSizeTip:"File size cannot exceed 500kb",invalidType:"Please upload an image in jpg format",customUpload:"Custom Upload Area",previewCover:"Preview Cover",customPreviewImage:"Custom single prevew image",deleteMessage:"Before Delete"}}),p=n([{url:"https://img.yzcdn.cn/vant/leaf.jpg"},{url:"https://img.yzcdn.cn/vant/tree.jpg"}]),m=n([{url:"https://img.yzcdn.cn/vant/sand.jpg"}]),c=n([]),f=n([{url:"https://img.yzcdn.cn/vant/sand.jpg"}]),v=n([{url:"https://img.yzcdn.cn/vant/leaf.jpg"},{url:"https://img.yzcdn.cn/vant/sand.jpg",deletable:!0,beforeDelete:()=>{r(a("deleteMessage"))}},{url:"https://img.yzcdn.cn/vant/tree.jpg",deletable:!0,imageFit:"contain",previewSize:120}]),g=n([{url:"https://img.yzcdn.cn/vant/leaf.jpg",status:"uploading",message:a("uploading")},{url:"https://img.yzcdn.cn/vant/tree.jpg",status:"failed",message:a("failed")}]),F=n([{url:"https://img.yzcdn.cn/vant/leaf.jpg",file:{name:a("imageName")}}]),E=i=>i.type!=="image/jpeg"?(r(a("invalidType")),!1):!0,j=(i,u)=>{console.log(i,u)},x=i=>{i.status="uploading",i.message=a("uploading"),setTimeout(()=>{i.status="failed",i.message=a("failed")},1e3)},z=(i,u)=>{console.log(i,u),r(a("overSizeTip"))};return(i,u)=>{const s=w("demo-block");return A(),U(D,null,[t(s,{title:e(a)("basicUsage")},{default:o(()=>[t(e(d),{"after-read":j})]),_:1},8,["title"]),t(s,{title:e(a)("preview")},{default:o(()=>[t(e(d),{modelValue:p.value,"onUpdate:modelValue":u[0]||(u[0]=l=>p.value=l),multiple:"",accept:"*"},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(a)("status")},{default:o(()=>[t(e(d),{modelValue:g.value,"onUpdate:modelValue":u[1]||(u[1]=l=>g.value=l),"after-read":x},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(a)("maxCount")},{default:o(()=>[t(e(d),{modelValue:m.value,"onUpdate:modelValue":u[2]||(u[2]=l=>m.value=l),multiple:"","max-count":2},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(a)("maxSize")},{default:o(()=>[t(e(d),{modelValue:f.value,"onUpdate:modelValue":u[3]||(u[3]=l=>f.value=l),multiple:"","max-size":500*1024,onOversize:z},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(a)("customUpload")},{default:o(()=>[t(e(d),null,{default:o(()=>[t(e(C),{type:"primary",icon:"plus"},{default:o(()=>[_(b(e(a)("upload")),1)]),_:1})]),_:1})]),_:1},8,["title"]),t(s,{title:e(a)("previewCover")},{default:o(()=>[t(e(d),{modelValue:F.value,"onUpdate:modelValue":u[4]||(u[4]=l=>F.value=l)},{"preview-cover":o(({file:l})=>[B("div",S,b(l.name),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(a)("beforeRead")},{default:o(()=>[t(e(d),{modelValue:c.value,"onUpdate:modelValue":u[5]||(u[5]=l=>c.value=l),"before-read":E},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(a)("disabled")},{default:o(()=>[t(e(d),{"after-read":j,disabled:""})]),_:1},8,["title"]),t(s,{title:e(a)("customPreviewImage")},{default:o(()=>[t(e(d),{modelValue:v.value,"onUpdate:modelValue":u[6]||(u[6]=l=>v.value=l),multiple:"",accept:"*",deletable:!1},null,8,["modelValue"])]),_:1},8,["title"])],64)}}});export{te as default};