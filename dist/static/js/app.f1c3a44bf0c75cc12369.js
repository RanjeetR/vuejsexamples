webpackJsonp([0],{"0/F2":function(t,e,s){t.exports=s.p+"static/media/big_buck_bunny.f13004e.mp4"},"3dtS":function(t,e){},"6i2L":function(t,e){},"9nPO":function(t,e){},EOS0:function(t,e){},JD12:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={name:"nav-bar",data:function(){return{showNav:!1}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar-component"},[s("nav",{staticClass:"navbar"},[s("div",{staticClass:"navbar-brand"},[t._m(0),t._v(" "),s("div",{staticClass:"navbar-burger",class:{"is-active":t.showNav},on:{click:function(e){t.showNav=!t.showNav}}},[s("span"),t._v(" "),s("span"),t._v(" "),s("span")])]),t._v(" "),s("div",{staticClass:"navbar-menu",class:{"is-active":t.showNav}},[t._m(1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-item",attrs:{href:"/"}},[e("strong",[this._v("  My Company ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-end"},[e("a",{staticClass:"navbar-item",attrs:{href:"/about"}},[this._v("\r\n            About\r\n          ")]),this._v(" "),e("a",{staticClass:"navbar-item",attrs:{href:"/path"}},[this._v("\r\n            Path\r\n          ")]),this._v(" "),e("a",{staticClass:"navbar-item",attrs:{href:"/blog"}},[this._v("\r\n            Blog\r\n          ")])])}]};var r={name:"loader"},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column loader-container"},[s("svg",{attrs:{version:"1.1",id:"L1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 100 100","xml:space":"preserve"}},[s("circle",{attrs:{fill:"none",stroke:"#ff3860","stroke-width":"6","stroke-miterlimit":"15","stroke-dasharray":"14.2472,14.2472",cx:"50",cy:"50",r:"47"}},[s("animateTransform",{attrs:{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"5s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"}})],1),t._v(" "),s("circle",{attrs:{fill:"none",stroke:"#ff3860","stroke-width":"1","stroke-miterlimit":"10","stroke-dasharray":"10,10",cx:"50",cy:"50",r:"39"}},[s("animateTransform",{attrs:{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"5s",from:"0 50 50",to:"-360 50 50",repeatCount:"indefinite"}})],1),t._v(" "),s("g",{attrs:{fill:"#ff3860"}},[s("rect",{attrs:{x:"30",y:"35",width:"5",height:"30"}},[s("animateTransform",{attrs:{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.1"}})],1),t._v(" "),s("rect",{attrs:{x:"40",y:"35",width:"5",height:"30"}},[s("animateTransform",{attrs:{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.2"}})],1),t._v(" "),s("rect",{attrs:{x:"50",y:"35",width:"5",height:"30"}},[s("animateTransform",{attrs:{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.3"}})],1),t._v(" "),s("rect",{attrs:{x:"60",y:"35",width:"5",height:"30"}},[s("animateTransform",{attrs:{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.4"}})],1),t._v(" "),s("rect",{attrs:{x:"70",y:"35",width:"5",height:"30"}},[s("animateTransform",{attrs:{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.5"}})],1)])]),t._v(" "),s("h1",[t._v("Loading....")])])])},staticRenderFns:[]};var o={name:"footer-bar"},c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero  footer-bar"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("p",{staticClass:"title"},[this._v("\n          My Company\n        ")]),this._v(" "),e("p",{staticClass:"subtitle"},[this._v("\n          All Rights reserved.\n        ")])])])])}]};var d={name:"App",components:{NavBar:s("VU/8")(i,n,!1,function(t){s("sjHO")},null,null).exports,Loader:s("VU/8")(r,l,!1,function(t){s("3dtS")},null,null).exports,FooterBar:s("VU/8")(o,c,!1,function(t){s("9nPO")},null,null).exports},data:function(){return{showLoader:!0}},created:function(){var t=this;setTimeout(function(){t.showLoader=!1},2e3)}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this.showLoader?e("span",[e("loader")],1):e("span",[e("nav-bar"),this._v(" "),e("router-view"),this._v(" "),e("footer-bar")],1)])},staticRenderFns:[]},m=s("VU/8")(d,u,!1,null,null,null).exports,v=s("/ocq"),p={name:"tag-component",props:["tags"],data:function(){return{}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("div",{staticClass:"tags"},t._l(t.tags,function(e,a){return s("span",{key:a,staticClass:"tag is-info"},[t._v(t._s(e)+"  \r\n        "),s("button",{staticClass:"delete is-small"})])}))])},staticRenderFns:[]};var _={name:"select-component",props:["categary"],data:function(){return{}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("div",{staticClass:"select is-primary"},[s("select",t._l(t.categary,function(e,a){return s("option",{key:a},[t._v(t._s(e))])}))])])])},staticRenderFns:[]},g={name:"table-design"},C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-demo"},[s("h1",{attrs:{id:"responsive"}},[t._v("Resize your browser")]),t._v(" "),s("p",[t._v("The table changes,in order to demonstrate the functionality. The PR is a little bit different.")]),t._v(" "),s("br"),t._v(" "),s("table",{staticClass:"table is-responsive"},[s("thead",[s("tr",[s("th",[t._v("Header A")]),t._v(" "),s("th",[t._v("Header B")]),t._v(" "),s("th",[t._v("Header C")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Lorem ipsum - cell A1")]),t._v(" "),s("td",[t._v("Lorem ipsum - cell B1")]),t._v(" "),s("td",[t._v("Lorem ipsum - cell C1")])]),t._v(" "),s("tr",[s("td",[t._v("Lorem ipsum - cell A2")]),t._v(" "),s("td",[t._v("Lorem ipsum - cell B2")]),t._v(" "),s("td",[t._v("Lorem ipsum - cell C2")])]),t._v(" "),s("tr",[s("td",[t._v("Lorem ipsum - cell A3")]),t._v(" "),s("td",[t._v("Lorem ipsum - cell B3")]),t._v(" "),s("td",[t._v("Lorem ipsum - cell C3")])])])])])}]},b={name:"modal-component",props:["singleProduct"],components:{Tags:s("VU/8")(p,h,!1,function(t){s("EOS0")},"data-v-7ac3857e",null).exports,SelectComponent:s("VU/8")(_,f,!1,null,null,null).exports,TableDesign:s("VU/8")(g,C,!1,null,null,null).exports},methods:{closeModal:function(){this.singleProduct.isActive=!1}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"modal-background"}),t._v(" "),s("div",{staticClass:"modal-card customCardModal"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v(t._s(t.singleProduct.product_name))]),t._v(" "),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.closeModal}})]),t._v(" "),s("section",{staticClass:"modal-card-body"},[s("figure",{staticClass:"image is-4by3"},[s("img",{attrs:{src:t.singleProduct.product_img,alt:"Placeholder image"}})]),t._v(" "),s("div",{staticClass:"content"},[s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.")]),t._v(" "),s("Tags",{attrs:{tags:t.singleProduct.tags}}),t._v(" "),s("select-component",{attrs:{categary:t.singleProduct.categary}})],1),t._v(" "),t._m(0),t._v(" "),s("table-design")],1),t._v(" "),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button is-success ",on:{click:t.closeModal}},[t._v("Save changes")]),t._v(" "),s("button",{staticClass:"button",on:{click:t.closeModal}},[t._v("Cancel")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("div",{staticClass:"field"},[e("p",{staticClass:"control"},[e("textarea",{staticClass:"textarea",attrs:{placeholder:"Add a comment..."}})])])])])}]};var w=s("VU/8")(b,y,!1,function(t){s("6i2L")},null,null).exports,k={name:"addto-cart",props:{singleProduct:{type:Object,required:!0}},methods:{closeProductForm:function(){this.singleProduct.isCartOpen=!1}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"modal-background"}),t._v(" "),s("div",{staticClass:"modal-card customCardModal",staticStyle:{margin:"0px"}},[s("section",{staticClass:"modal-card-body"},[t._m(0),t._v(" "),s("article",{staticClass:"media"},[s("div",{staticClass:"media-content"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("div",{staticClass:"field is-grouped"},[t._m(8),t._v(" "),s("div",{staticClass:"control"},[s("button",{staticClass:"button is-danger",on:{click:t.closeProductForm}},[t._v("Cancel")])])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("h1",[this._v("Edit Product")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[this._v("Name")]),this._v(" "),e("div",{staticClass:"control"},[e("input",{staticClass:"input",attrs:{type:"text",placeholder:"Text input"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[this._v("Username")]),this._v(" "),e("div",{staticClass:"control has-icons-left has-icons-right"},[e("input",{staticClass:"input is-success",attrs:{type:"text",placeholder:"Text input",value:"Product"}}),this._v(" "),e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-user"})]),this._v(" "),e("span",{staticClass:"icon is-small is-right"},[e("i",{staticClass:"fas fa-check"})])]),this._v(" "),e("p",{staticClass:"help is-success"},[this._v("This username is available")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[this._v("Email")]),this._v(" "),e("div",{staticClass:"control has-icons-left has-icons-right"},[e("input",{staticClass:"input is-danger",attrs:{type:"email",placeholder:"Email input",value:"hello@"}}),this._v(" "),e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-envelope"})]),this._v(" "),e("span",{staticClass:"icon is-small is-right"},[e("i",{staticClass:"fas fa-exclamation-triangle"})])]),this._v(" "),e("p",{staticClass:"help is-danger"},[this._v("This email is invalid")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[this._v("Subject")]),this._v(" "),e("div",{staticClass:"control"},[e("div",{staticClass:"select"},[e("select",[e("option",[this._v("Select dropdown")]),this._v(" "),e("option",[this._v("With options")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[this._v("Message")]),this._v(" "),e("div",{staticClass:"control"},[e("textarea",{staticClass:"textarea",attrs:{placeholder:"Textarea"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("label",{staticClass:"checkbox"},[e("input",{attrs:{type:"checkbox"}}),this._v(" I agree to the "),e("a",{attrs:{href:"#"}},[this._v("terms and conditions")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("label",{staticClass:"radio"},[e("input",{attrs:{type:"radio",name:"question"}}),this._v(" Yes\r\n                            ")]),this._v(" "),e("label",{staticClass:"radio"},[e("input",{attrs:{type:"radio",name:"question"}}),this._v(" No\r\n                            ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"control"},[e("button",{staticClass:"button is-link"},[this._v("Submit")])])}]},P={name:"product-list",components:{ModalComponent:w,AddtoCart:s("VU/8")(k,x,!1,null,null,null).exports},props:{Products:{type:Object,required:!0}},data:function(){return{singleProduct:{isActive:!1,isCartOpen:!1,product_name:"",product_img:"",tags:"",categary:""}}},methods:{showModal:function(t){this.singleProduct.isActive=!0,this.singleProduct.product_name=t.name,this.singleProduct.product_img=t.imageUrl,this.singleProduct.tags=t.tags,this.singleProduct.categary=t.categary},closeModal:function(){this.isActive=!1},openCart:function(){this.singleProduct.isCartOpen=!0}}},L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns product-list"},[t._l(t.Products.product,function(e){return s("div",{key:e.name,staticClass:"column"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image is-4by3"},[s("img",{attrs:{src:e.imageUrl,alt:"Placeholder image"}})])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-48x48"},[s("img",{attrs:{src:e.imageUrl,alt:"Placeholder image"}})])]),t._v(" "),s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(" "+t._s(e.name))]),t._v(" "),s("p",{staticClass:"subtitle is-6"},[t._v("@ "+t._s(e.name))])])]),t._v(" "),t._m(0,!0)]),t._v(" "),s("footer",{staticClass:"card-footer"},[s("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:function(s){t.showModal(e)}}},[t._v("Details")]),t._v(" "),s("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:function(e){t.openCart()}}},[t._v("Add to Cart")])])])])}),t._v(" "),t.singleProduct.isActive?s("div",{staticClass:"modal",class:{"is-active":t.singleProduct.isActive}},[s("ModalComponent",{attrs:{singleProduct:t.singleProduct}})],1):t._e(),t._v(" "),t.singleProduct.isCartOpen?s("div",{staticClass:"modal",class:{"is-active":t.singleProduct.isCartOpen}},[s("addto-cart",{attrs:{singleProduct:t.singleProduct}})],1):t._e()],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._v("\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. "),s("a",[t._v("@bulmaio")]),t._v(".\n                    "),s("a",{attrs:{href:"#"}},[t._v("#css")]),t._v(" "),s("a",{attrs:{href:"#"}},[t._v("#responsive")]),t._v(" "),s("br"),t._v(" "),s("time",{attrs:{datetime:"2016-1-1"}},[t._v("11:09 PM - 1 Jan 2016")])])}]};var E=s("VU/8")(P,L,!1,function(t){s("Utt3")},null,null).exports,I=s("VtE7"),T=s.n(I),A=s("T/9F"),$=s.n(A),F=s("g9Wj"),U=s.n(F),M=s("yRIY"),R=s.n(M),N={name:"HomePage",components:{ProductList:E},data:function(){return{Products:{categary:"dailyneed",product:[{name:"Duck",imageUrl:$.a,tags:["animal","rare","water","land"],categary:["Animal","Rare","Forest","Other"],description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "},{name:"Bunny",imageUrl:T.a,tags:["animal","rare","land","white"],categary:["Animal","Rare","Forest","Other"],description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "},{name:"Timon",imageUrl:U.a,tags:["Rare","land","white","yellow"],categary:["Animal","Rare","Forest","Other"],description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "},{name:"Sid",imageUrl:R.a,tags:["Ice-age","land","pink","yellow"],categary:["Animal","Rare","Forest","Other"],description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "}]}}}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-page"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns first-box "},[this._m(0),this._v(" "),e("div",{staticClass:"column is-8"},[e("video",{attrs:{src:s("0/F2"),autoplay:"",loop:"",muted:"",width:"746px"},domProps:{muted:!0}})])])]),this._v(" "),e("product-list",{attrs:{Products:this.Products}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column "},[s("div",{staticClass:"text-section"},[s("h1",{staticClass:"title"},[t._v("\n                Featured Products.\n          ")]),t._v(" "),s("h2",{staticClass:"subtitle"},[t._v("\n        wide range of products for you.\n      ")]),t._v(" "),s("p",{},[t._v("\n“The story so far:\nIn the beginning the Universe was created.\nThis has made a lot of people very angry and been widely regarded as a bad move.” "),s("br"),t._v("\n― Douglas Adams,\n      ")])]),t._v(" "),s("div",{staticClass:"btn-container"},[s("a",{staticClass:"button is-primary is-outlined"},[t._v("How does it work")]),t._v(" "),s("a",{staticClass:"button is-link is-outlined"},[t._v("Explore more")])])])}]};var V=s("VU/8")(N,O,!1,function(t){s("iZX2"),s("k8VT")},null,null).exports;a.a.use(v.a);var S=new v.a({routes:[{path:"/",name:"HomePage",component:V}]});s("JD12");a.a.config.productionTip=!1,new a.a({el:"#app",router:S,components:{App:m},template:"<App/>"})},"T/9F":function(t,e,s){t.exports=s.p+"static/img/Duck.2e996db.png"},Utt3:function(t,e){},VtE7:function(t,e,s){t.exports=s.p+"static/img/Bunny.6a0e72e.png"},g9Wj:function(t,e,s){t.exports=s.p+"static/img/Timon.f605ab0.png"},iZX2:function(t,e){},k8VT:function(t,e){},sjHO:function(t,e){},yRIY:function(t,e,s){t.exports=s.p+"static/img/sid.9b563e7.png"}},["NHnr"]);
//# sourceMappingURL=app.f1c3a44bf0c75cc12369.js.map