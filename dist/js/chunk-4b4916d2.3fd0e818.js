(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b4916d2"],{6013:function(t,a,s){"use strict";var i=function(){var t=this,a=t._self._c;return a("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[t._v("Schedule")])]},proxy:!0}])},[a("div",{staticClass:"iq-card-body"},[a("ul",{staticClass:"list-inline m-0 p-0"},[a("li",[a("h6",{staticClass:"float-left mb-1"},[t._v("Ruby saul (Blood Check)")]),a("small",{staticClass:"float-right mt-1"},[t._v("Today")]),a("div",{staticClass:"d-inline-block w-100"},[a("p",{staticClass:"badge badge-primary"},[t._v("09:00 AM ")])])]),a("li",[a("h6",{staticClass:"float-left mb-1"},[t._v(" Anna Mull (Fever)")]),a("small",{staticClass:"float-right mt-1"},[t._v("Today")]),a("div",{staticClass:"d-inline-block w-100"},[a("p",{staticClass:"badge badge-danger"},[t._v("09:15 AM ")])])]),a("li",[a("h6",{staticClass:"float-left mb-1"},[t._v("Petey Cruiser (X-ray)")]),a("small",{staticClass:"float-right mt-1"},[t._v("Today")]),a("div",{staticClass:"d-inline-block w-100"},[a("p",{staticClass:"badge badge-warning"},[t._v("10:00 AM ")])])]),a("li",[a("h6",{staticClass:"float-left mb-1"},[t._v("Anna Sthesia (Full body Check up)")]),a("small",{staticClass:"float-right mt-1"},[t._v("Today")]),a("div",{staticClass:"d-inline-block w-100"},[a("p",{staticClass:"badge badge-info"},[t._v("01:00 PM ")])])]),a("li",[a("h6",{staticClass:"float-left mb-1"},[t._v("Paul Molive (Operation)")]),a("small",{staticClass:"float-right mt-1"},[t._v("Tomorrow")]),a("div",{staticClass:"d-inline-block w-100"},[a("p",{staticClass:"badge badge-success"},[t._v("09:00 AM ")])])])])])])},e=[],l=s("2f62"),r={name:"Schedules",data(){return{}},computed:{...Object(l["c"])({userState:"User/userState"})},mounted(){},components:{},beforeMount(){},method:{}},c=r,o=s("2877"),n=Object(o["a"])(c,i,e,!1,null,null,null);a["a"]=n.exports},"71ea":function(t,a,s){"use strict";s("c51e")},"73bc":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t._self._c;return a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",{attrs:{lg:"4"}},[a("PersonalInformation",{attrs:{staff:t.staff}}),a("PersonalInformationDetails",{attrs:{staff:t.staff}})],1),a("b-col",{attrs:{lg:"8"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("Schedule",{attrs:{staff:t.staff}})],1),a("b-col",{attrs:{md:"6"}},[a("Photos",{attrs:{staff:t.staff}})],1),a("b-col",{attrs:{md:"6"}})],1)],1)],1)],1)},e=[],l=s("bcae"),r=function(){var t=this,a=t._self._c;return a("iq-card",{staticClass:"iq-card-body"},[a("div",{staticClass:"iq-card-header d-flex justify-content-between"},[a("div",{staticClass:"iq-header-title"},[a("h4",{staticClass:"card-title"},[t._v("Personal Information")])])]),a("div",{staticClass:"iq-card-body"},[a("div",{staticClass:"about-info m-0 p-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[t._v("First Name:")]),a("div",{staticClass:"col-8"},[t._v(t._s(t.staff.firstName))]),a("div",{staticClass:"col-4"},[t._v("Last Name:")]),a("div",{staticClass:"col-8"},[t._v(t._s(t.staff.lastName))]),a("div",{staticClass:"col-4"},[t._v("Age:")]),a("div",{staticClass:"col-8"},[t._v(t._s(t.getAge(t.staff.birthDate)?t.getAge(t.staff.birthDate):"No data available"))]),a("div",{staticClass:"col-4"},[t._v("Position:")]),a("div",{staticClass:"col-8"},[t._v(t._s(t.staff.position?t.staff.position:"No data available"))]),a("div",{staticClass:"col-4"},[t._v("Email:")]),a("div",{staticClass:"col-8"},[a("a",{attrs:{href:"mailto:"+t.staff.email}},[t._v(t._s(t.staff.email))])]),a("div",{staticClass:"col-4"},[t._v("Phone:")]),t.staff.contact?a("div",{staticClass:"col-8"},[a("a",{attrs:{href:"tel:"+t.staff.contact.phone!==""?t.staff.contact.phone:"No data available"}},[t._v(" "+t._s(""!==t.staff.contact.phone?t.staff.contact.phone:"No data available")+" ")])]):a("div",{staticClass:"col-8"},[t._v("No data available")]),a("div",{staticClass:"col-4"},[t._v("Role:")]),a("div",{staticClass:"col-8"},[a("b-badge",{attrs:{variant:"primary",pill:""}},[t._v(t._s(t.staff.role))])],1),a("div",{staticClass:"col-12 iq-doc-social-info mt-3 mb-3 text-center"},[t.staff.contact?a("ul",{staticClass:"m-0 p-0 list-inline"},[t.hasAddress(t.staff.contact.facebookUrl)?a("li",{attrs:{id:"facebookurl"}},[a("a",{attrs:{href:t.getAddress(t.staff.contact.facebookUrl),target:"_blank"}},[a("i",{staticClass:"ri-facebook-fill"})])]):t._e(),t.hasAddress(t.staff.contact.twitterUrl)?a("li",{attrs:{id:"twitterurl"}},[a("a",{attrs:{href:t.getAddress(t.staff.contact.twitterUrl),target:"_blank"}},[a("i",{staticClass:"ri-twitter-fill"})])]):t._e(),t.hasAddress(t.staff.contact.instagramUrl)?a("li",{attrs:{id:"instagramurl"}},[a("a",{attrs:{href:t.getAddress(t.staff.contact.instagramUrl),target:"_blank"}},[a("i",{staticClass:"ri-instagram-fill"})])]):t._e(),t.hasAddress(t.staff.contact.siteUrl)?a("li",{attrs:{id:"siteurl"}},[a("a",{attrs:{href:t.getAddress(t.staff.contact.siteUrl),target:"_blank"}},[a("i",{staticClass:"ri-global-fill"})])]):t._e()]):t._e()])])])])])},c=[],o=s("2f62"),n={name:"PersonalInformation",props:{staff:Object},data(){return{}},computed:{...Object(o["c"])({userState:"User/userState"})},mounted(){},components:{},beforeMount(){},methods:{hasAddress(t){return!(""===t||!t)},getAddress(t){return"http://"+t.replace(/^https?:\/\//,"")},getAge(){var t=new Date,a=new Date(this.staff.birthDate),s=t.getFullYear()-a.getFullYear(),i=t.getMonth()-a.getMonth();return(i<0||0===i&&t.getDate()<a.getDate())&&s--,s}}},f=n,d=(s("71ea"),s("2877")),m=Object(d["a"])(f,r,c,!1,null,null,null),u=m.exports,p=s("a59b"),b=s("6013"),v=function(){var t=this,a=t._self._c;return a("iq-card",{attrs:{"body-class":"iq-card-body pl-0 pr-0 pt-0"},scopedSlots:t._u([{key:"body",fn:function(){return[a("div",{staticClass:"docter-details-block"},[a("div",{staticClass:"doc-profile-bg bg-primary",staticStyle:{height:"150px"}},[a("div",{staticClass:"docter-profile text-center"},[a("b-img",{staticClass:"avatar-130",staticStyle:{"margin-top":"10px"},attrs:{src:t.staff.profileImage?t.staff.profileImage:t.defaultProfileImage(),rounded:"circle",alt:"profile-img"}})],1)]),a("div",{staticClass:"text-center mt-3 pl-3 pr-3"},[a("h4",[a("b",[t._v(t._s(t.staff.firstName+" "+t.staff.lastName))]),a("router-link",{attrs:{to:"/patients/profile-edit/"+t.staff.id}},[a("i",{staticClass:"ri-pencil-line float-right"})])],1),a("p",[t._v("Patient")]),a("p",{staticClass:"mb-0"},[t._v(t._s(t.staff.description))])]),a("hr"),a("ul",{staticClass:"doctoe-sedual d-flex align-items-center justify-content-between p-0 m-0"},[a("li",{staticClass:"text-center"},[a("h3",{staticClass:"counter"},[t._v("1")]),a("span",[t._v("Today Appointments")])]),a("li",{staticClass:"text-center"},[a("h3",{staticClass:"counter"},[t._v("4")]),a("span",[t._v("Upcoming Appointments")])]),a("li",{staticClass:"text-center"},[a("h3",{staticClass:"counter"},[t._v("7")]),a("span",[t._v("Completed Appointments")])])])])]},proxy:!0}])})},g=[],C={name:"PersonalInformation",props:{staff:Object},data(){return{}},computed:{...Object(o["c"])({userState:"User/userState"})},mounted(){},components:{},beforeMount(){},method:{}},h=C,_=Object(d["a"])(h,v,g,!1,null,null,null),y=_.exports,w=s("93d6"),x={name:"Profile",async mounted(){l["a"].index(),await this.getStaff()},components:{PersonalInformationDetails:u,Photos:p["a"],Schedule:b["a"],PersonalInformation:y},data(){return{staff:{}}},methods:{async getStaff(){const t=this.$route.params.id;let{data:a}=await w["a"].getById(t);this.staff=a}}},A=x,k=Object(d["a"])(A,i,e,!1,null,null,null);a["default"]=k.exports},"89af":function(t,a,s){t.exports=s.p+"img/1.1059a0bf.png"},"8db3":function(t,a,s){t.exports=s.p+"img/2.b4477f82.png"},a59b:function(t,a,s){"use strict";var i=function(){var t=this,a=t._self._c;return a("iq-card",{attrs:{"body-class":"iq-card-body"}},[a("div",{staticClass:"iq-card-header d-flex justify-content-between"},[a("div",{staticClass:"iq-header-title"},[a("h4",{staticClass:"card-title"},[t._v("Photos")]),a("a",[t._v("Feature is incomming!")])])]),a("div",{staticClass:"iq-card-body"},[a("ul",{staticClass:"profile-img-gallary d-flex flex-wrap p-0 m-0"},[a("li",{staticClass:"col-md-4 col-6 pb-3"},[a("a",{attrs:{href:"javascript:void(0);"}},[a("img",{staticClass:"img-fluid",attrs:{src:s("89af"),alt:"gallary-image"}})])]),a("li",{staticClass:"col-md-4 col-6 pb-3"},[a("a",{attrs:{href:"javascript:void(0);"}},[a("img",{staticClass:"img-fluid",attrs:{src:s("8db3"),alt:"gallary-image"}})])]),a("li",{staticClass:"col-md-4 col-6 pb-3"},[a("a",{attrs:{href:"javascript:void(0);"}},[a("img",{staticClass:"img-fluid",attrs:{src:s("b180"),alt:"gallary-image"}})])]),a("li",{staticClass:"col-md-4 col-6 pb-3"},[a("a",{attrs:{href:"javascript:void(0);"}},[a("img",{staticClass:"img-fluid",attrs:{src:s("8db3"),alt:"gallary-image"}})])]),a("li",{staticClass:"col-md-4 col-6 pb-3"},[a("a",{attrs:{href:"javascript:void(0);"}},[a("img",{staticClass:"img-fluid",attrs:{src:s("b180"),alt:"gallary-image"}})])]),a("li",{staticClass:"col-md-4 col-6 pb-0"},[a("a",{attrs:{href:"javascript:void(0);"}},[a("img",{staticClass:"img-fluid",attrs:{src:s("b180"),alt:"gallary-image"}})])])])])])},e=[],l=s("2f62"),r={name:"Photos",props:{staff:Object},data(){return{}},computed:{...Object(l["c"])({userState:"User/userState"})},mounted(){},components:{},beforeMount(){},method:{}},c=r,o=s("2877"),n=Object(o["a"])(c,i,e,!1,null,null,null);a["a"]=n.exports},b180:function(t,a,s){t.exports=s.p+"img/3.d96e7968.png"},c51e:function(t,a,s){}}]);
//# sourceMappingURL=chunk-4b4916d2.3fd0e818.js.map