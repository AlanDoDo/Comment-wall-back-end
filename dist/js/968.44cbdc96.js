"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[968],{9647:function(a,t,e){e.r(t),e.d(t,{default:function(){return I}});var s=e(6252),d=e.p+"media/qm1.2bff3d3f.mp4";const i=a=>((0,s.dD)("data-v-5784342a"),a=a(),(0,s.Cn)(),a),o={class:"wall-index"},n=i((()=>(0,s._)("video",{src:d,autoplay:"autoplay",muted:"muted",loop:"loop",class:"bg-video"},null,-1)));function c(a,t,e,d,i,c){const l=(0,s.up)("top-bar"),r=(0,s.up)("router-view"),v=(0,s.up)("foot-bar-vue");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(l),n,(0,s.Wm)(r),(0,s.Wm)(v)])}var l=e.p+"img/yksg.d6df069e.svg";const r=a=>((0,s.dD)("data-v-d9bff260"),a=a(),(0,s.Cn)(),a),v={class:"top-bar"},p=r((()=>(0,s._)("div",{class:"logo"},[(0,s._)("img",{src:l,class:"logo-img"}),(0,s._)("p",{class:"logo-name"},"一刻时光")],-1))),u={class:"menu"},b=r((()=>(0,s._)("div",{class:"user"},[(0,s._)("div",{class:"user-head"})],-1)));function m(a,t,e,d,i,o){const n=(0,s.up)("yk-button-vue");return(0,s.wg)(),(0,s.iD)("div",v,[p,(0,s._)("div",u,[(0,s.Wm)(n,{nom:0==o.id?"cprimary":"csecondary",class:"menu-message",onClick:t[0]||(t[0]=a=>o.changeWall(0))},{default:(0,s.w5)((()=>[(0,s.Uk)("留言墙")])),_:1},8,["nom"]),(0,s.Wm)(n,{nom:1==o.id?"cprimary":"csecondary",class:"mebu-photo",onClick:t[1]||(t[1]=a=>o.changeWall(1))},{default:(0,s.w5)((()=>[(0,s.Uk)("照片墙")])),_:1},8,["nom"])]),b])}e(560);var g=e(7299),f={data(){return{}},components:{YkButtonVue:g.Z},computed:{id(){return this.$route.query.id}},methods:{changeWall(a){this.id!==a&&this.$router.push({query:{id:a}})}},watch:{$route(a){"1"!==a.query.id&&"0"!==a.query.id||window.location.reload()}}},h=e(3744);const _=(0,h.Z)(f,[["render",m],["__scopeId","data-v-d9bff260"]]);var k=_,w=e.p+"img/weixin.6cf949d5.png",y=e.p+"img/zhifubao.c2ea6cd2.png";const C={class:"foot-bar"},W=(0,s.uE)('<div class="foot-bar-inner" data-v-2be73780><div class="foot-left" data-v-2be73780><div class="logo" data-v-2be73780><img src="'+l+'" class="logo-img" data-v-2be73780><p class="logo-name" data-v-2be73780>一刻时光</p></div><p class="top-p" data-v-2be73780>一刻时光是本人独自开发的，为便于与用户交流的留言平台。</p><p class="top-p" data-v-2be73780>用户将留言便签贴在留言墙上，用户可以自定义便签颜色和内容属性，不仅可以用于交流，也是一场记录。</p><p class="state" data-v-2be73780><span data-v-2be73780>声明</span><span data-v-2be73780>采用 CC BY-NC-SA 4.0 许可协议</span><span data-v-2be73780>©2022 - 2023 By Alan</span></p></div><div class="link" data-v-2be73780><p class="title" data-v-2be73780>链接</p><div class="line-inner" data-v-2be73780><a href="https://www.alandodo.cn/" target="_blank" class="link-name" data-v-2be73780>博客</a><a href="https://space.bilibili.com/1116074436?spm_id_from=333.1007.0.0" target="_blank" class="link-name" data-v-2be73780>B站</a><a href="https://github.com/AlanDoDo" target="_blank" class="link-name" data-v-2be73780>Github</a></div></div><div class="foot-right" data-v-2be73780><p class="title" data-v-2be73780>打赏</p><div class="right-inner" data-v-2be73780><div data-v-2be73780><img src="'+w+'" data-v-2be73780><p class="ds-title" data-v-2be73780>微信支付</p></div><div data-v-2be73780><img src="'+y+'" data-v-2be73780><p class="ds-title" data-v-2be73780>支付宝支付</p></div></div></div></div>',1),D=[W];function B(a,t,e,d,i,o){return(0,s.wg)(),(0,s.iD)("div",C,D)}var q={};const U=(0,h.Z)(q,[["render",B],["__scopeId","data-v-2be73780"]]);var Z=U,$=e(9529),x={data(){return{aaa:""}},components:{topBar:k,FootBarVue:Z},computed:{},created(){this.getUser()},methods:{getUser(){(0,$.xP)().then((a=>{let t={id:a.ip};this.$store.commit("getUser",t)}))}}};const A=(0,h.Z)(x,[["render",c],["__scopeId","data-v-5784342a"]]);var I=A}}]);
//# sourceMappingURL=968.44cbdc96.js.map