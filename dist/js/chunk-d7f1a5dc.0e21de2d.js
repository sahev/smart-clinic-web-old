(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d7f1a5dc"],{"6bf2":function(t,a,e){"use strict";var s=e("dde5");a["a"]={login(t){return s["a"].post("/auth/login",t).catch(()=>!1)},register(t){return s["a"].post("/auth/register",t)}}},d773:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("b-container",{attrs:{fluid:""}},[a("form",[a("b-row",[a("b-col",{attrs:{lg:"12"}},[a("iq-card",{attrs:{"body-class":"p-0"},scopedSlots:t._u([{key:"body",fn:function(){return[a("div",{staticClass:"iq-edit-list"},[a("tab-nav",{staticClass:"iq-edit-profile d-flex",attrs:{pills:!0}},[a("tab-nav-items",{class:t.isMe()?"col-md-6 p-0":"col-md-12 p-0",attrs:{active:!0,href:"#personal-information",title:"Personal Information"}}),t.isMe()?a("tab-nav-items",{staticClass:"col-md-6 p-0",attrs:{active:!1,href:"#chang-pwd",title:" Change Password"}}):t._e()],1)],1)]},proxy:!0}])})],1),a("b-col",{attrs:{lg:"12"}},[a("div",{staticClass:"iq-edit-list-data"},[a("tab-content",{attrs:{id:"pills-tabContent-2"}},[a("tab-content-item",{attrs:{active:!0,id:"personal-information"}},[a("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[t._v("Personal Information")])]},proxy:!0},{key:"body",fn:function(){return[a("b-form-group",{staticClass:"row align-items-center"},[a("b-col",{attrs:{md:"12"}},[a("div",{staticClass:"profile-img-edit"},[a("b-img",{staticClass:"profile-pic height-150 width-150",attrs:{src:t.staffUser.profileImage?t.staffUser.profileImage:t.defaultProfileImage(),alt:"profile-pic"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.staffUser.profileImage,expression:"staffUser.profileImage"}],attrs:{type:"hidden"},domProps:{value:t.staffUser.profileImage},on:{input:function(a){a.target.composing||t.$set(t.staffUser,"profileImage",a.target.value)}}}),a("div",{staticClass:"p-image"},[a("div",{staticClass:"position-relative"},[a("b-form-file",{staticClass:"h-100 position-absolute",staticStyle:{opacity:"0"},attrs:{accept:"image/*"},on:{change:t.previewImage}}),a("i",{staticClass:"ri-pencil-line upload-button"})],1)])],1)])],1),a("b-row",{attrs:{"align-v":"center"}},[a("b-form-group",{staticClass:"col-md-6",attrs:{label:"First Name","label-for":"fname"}},[a("ValidationProvider",{attrs:{name:"First name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function({errors:e}){return[a("b-form-input",{class:e.length>0?" is-invalid":"",attrs:{type:"text",placeholder:"First Name"},model:{value:t.staffUser.firstName,callback:function(a){t.$set(t.staffUser,"firstName",a)},expression:"staffUser.firstName"}}),a("div",{staticClass:"invalid-feedback"},[a("span",[t._v(t._s(e[0]))])])]}}])})],1),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Last Name","label-for":"lname"}},[a("ValidationProvider",{attrs:{name:"Last name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function({errors:e}){return[a("b-form-input",{class:e.length>0?" is-invalid":"",attrs:{type:"text",placeholder:"Last Name"},model:{value:t.staffUser.lastName,callback:function(a){t.$set(t.staffUser,"lastName",a)},expression:"staffUser.lastName"}}),a("div",{staticClass:"invalid-feedback"},[a("span",[t._v(t._s(e[0]))])])]}}])})],1),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"E-mail","label-for":"email"}},[a("ValidationProvider",{attrs:{name:"E-mail",rules:"required"},scopedSlots:t._u([{key:"default",fn:function({errors:e}){return[a("b-form-input",{class:e.length>0?" is-invalid":"",attrs:{type:"text",placeholder:"Your E-mail"},model:{value:t.staffUser.email,callback:function(a){t.$set(t.staffUser,"email",a)},expression:"staffUser.email"}}),a("div",{staticClass:"invalid-feedback"},[a("span",[t._v(t._s(e[0]))])])]}}])})],1),a("b-form-group",{staticClass:"col-sm-6",attrs:{label:"Date Of Birth:","label-for":"dob"}},[a("b-form-input",{attrs:{type:"date",id:"dob"},model:{value:t.staffUser.birthDate,callback:function(a){t.$set(t.staffUser,"birthDate",a)},expression:"staffUser.birthDate"}})],1),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Speciality","label-for":"speciality"}},[a("ValidationProvider",{attrs:{name:"speciality",rules:"required"},scopedSlots:t._u([{key:"default",fn:function({errors:e}){return[a("b-form-input",{attrs:{type:"text",placeholder:"Your Speciality"},model:{value:t.staffUser.speciality,callback:function(a){t.$set(t.staffUser,"speciality",a)},expression:"staffUser.speciality"}}),a("div",{staticClass:"invalid-feedback"},[a("span",[t._v(t._s(e[0]))])])]}}])})],1)],1),a("b-form-group",{attrs:{label:"Resume","label-for":"resume"}},[a("b-textarea",{attrs:{type:"text",placeholder:"Your resume"},model:{value:t.staffUser.description,callback:function(a){t.$set(t.staffUser,"description",a)},expression:"staffUser.description"}})],1),a("hr",{staticClass:"solid"}),a("h4",{staticClass:"card-title"},[t._v("Contacts")]),a("b-row",{attrs:{"align-v":"center"}},[a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Phone","label-for":"phone"}},[a("b-form-input",{attrs:{type:"text",placeholder:"Phone"},model:{value:t.staffUser.contact.phone,callback:function(a){t.$set(t.staffUser.contact,"phone",a)},expression:"staffUser.contact.phone"}})],1),a("b-form-group",{staticClass:"col-sm-6",attrs:{label:"Address","label-for":"address"}},[a("b-form-input",{attrs:{type:"text",placeholder:"Address"},model:{value:t.staffUser.contact.address,callback:function(a){t.$set(t.staffUser.contact,"address",a)},expression:"staffUser.contact.address"}})],1)],1),a("b-row",{attrs:{"align-v":"center"}},[a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Twitter Url","label-for":"phone"}},[a("b-form-input",{attrs:{type:"text",placeholder:"Twitter Url"},model:{value:t.staffUser.contact.twitterUrl,callback:function(a){t.$set(t.staffUser.contact,"twitterUrl",a)},expression:"staffUser.contact.twitterUrl"}})],1),a("b-form-group",{staticClass:"col-sm-6",attrs:{label:"Facebook Url","label-for":"address"}},[a("b-form-input",{attrs:{type:"text",placeholder:"Facebook Url"},model:{value:t.staffUser.contact.facebookUrl,callback:function(a){t.$set(t.staffUser.contact,"facebookUrl",a)},expression:"staffUser.contact.facebookUrl"}})],1),a("b-form-group",{staticClass:"col-sm-6",attrs:{label:"Instagram Url","label-for":"address"}},[a("b-form-input",{attrs:{type:"text",placeholder:"Instagram Url"},model:{value:t.staffUser.contact.instagramUrl,callback:function(a){t.$set(t.staffUser.contact,"instagramUrl",a)},expression:"staffUser.contact.instagramUrl"}})],1),a("b-form-group",{staticClass:"col-sm-6",attrs:{label:"Site Url","label-for":"address"}},[a("b-form-input",{attrs:{type:"text",placeholder:"Site Url"},model:{value:t.staffUser.contact.siteUrl,callback:function(a){t.$set(t.staffUser.contact,"siteUrl",a)},expression:"staffUser.contact.siteUrl"}})],1)],1),a("hr",{staticClass:"solid"}),a("div",[a("b-button",{staticClass:"mr-2",attrs:{variant:"primary"},on:{click:function(a){return t.save()}}},[t._v("Submit")]),a("b-button",{staticClass:"iq-bg-primary",attrs:{variant:"none"},on:{click:function(a){return t.cancel()}}},[t._v("Back")])],1)]},proxy:!0}])})],1),a("tab-content-item",{attrs:{active:!1,id:"chang-pwd"}},[a("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[t._v("Change Password")])]},proxy:!0},{key:"body",fn:function(){return[a("ValidationObserver",{ref:"b-form-group",scopedSlots:t._u([{key:"default",fn:function({handleSubmit:e}){return[a("b-form-group",{attrs:{label:"Current Password:","label-for":"pass"}},[a("ValidationProvider",{attrs:{name:"fn",rules:"required"},scopedSlots:t._u([{key:"default",fn:function({errors:e}){return[a("b-form-input",{class:t.isInvalid||e.length>0?"is-invalid":"",attrs:{type:"password",placeholder:"Password"},on:{focusout:function(a){return t.validateCurrentPassword()}},model:{value:t.currentPassword,callback:function(a){t.currentPassword=a},expression:"currentPassword"}}),a("div",{staticClass:"invalid-feedback"},[a("span",[t._v("Invalid password")])])]}}],null,!0)})],1),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"New Password:","label-for":"pass"}},[a("ValidationProvider",{attrs:{name:"Password",rules:"required",vid:"password"},scopedSlots:t._u([{key:"default",fn:function({errors:e}){return[a("b-form-input",{class:e.length>0?" is-invalid":"",attrs:{type:"password",placeholder:"Password"},model:{value:t.newPassword,callback:function(a){t.newPassword=a},expression:"newPassword"}}),a("div",{staticClass:"invalid-feedback"},[a("span",[t._v(t._s(e[0]))])])]}}],null,!0)})],1),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Repeat Password:","label-for":"rpass"}},[a("ValidationProvider",{attrs:{name:"Repeat Password",rules:"required|confirmed:password"},scopedSlots:t._u([{key:"default",fn:function({errors:e}){return[a("b-form-input",{class:e.length>0?" is-invalid":"",attrs:{type:"password",placeholder:"Repeat Password"},model:{value:t.repeatPassword,callback:function(a){t.repeatPassword=a},expression:"repeatPassword"}}),a("div",{staticClass:"invalid-feedback"},[a("span",[t._v(t._s(e[0]))])])]}}],null,!0)})],1),a("b-button",{staticClass:"mr-2",attrs:{variant:"primary"},on:{click:function(a){return e(t.changePassword)}}},[t._v("Submit")]),a("b-button",{staticClass:"iq-bg-danger",attrs:{variant:"none"},on:{click:function(a){return t.cancel()}}},[t._v("Cancel")])]}}])})]},proxy:!0}])})],1)],1)],1)])],1)],1)])},r=[],i=e("2f62"),o=e("bcae"),l=e("93d6"),n=e("6bf2"),c={name:"ProfileEdit",async mounted(){o["a"].index(),await this.init()},computed:{...Object(i["c"])({userState:"User/userState"})},data(){return{defaultContact:{phone:"",twitterUrl:"",facebookUrl:"",instagramUrl:"",siteUrl:""},staffUser:{firstName:"",lastName:"",email:"",birthDate:"",profileImage:"",contact:{phone:"",twitterUrl:"",facebookUrl:"",instagramUrl:"",siteUrl:""}},currentPassword:"",newPassword:"",repeatPassword:"",isInvalid:!1}},methods:{isMe(){return parseInt(this.$route.params.id)===this.userState.id},getDate(t){let a=new Date(t);const e=a.getFullYear();let s=a.getMonth()+1,r=a.getDate();return r<10&&(r="0"+r),s<10&&(s="0"+s),e+"-"+s+"-"+r},...Object(i["b"])({setUserState:"User/setUserState"}),cancel(){this.$router.push("/doctor/profile/"+this.staffUser.id)},async init(){const t=this.$route.params.id;let{data:a}=await l["a"].getById(t);this.staffUser=this.cloneObject(a),this.staffUser.birthDate=this.getDate(this.userState.birthDate),this.staffUser.contact||(this.staffUser.contact=this.defaultContact)},async save(){try{await l["a"].update(this.staffUser),this.userState.id===this.staffUser.id&&this.setUserState(this.cloneObject(this.staffUser)),this.makeSuccessToast("Saved")}catch{this.makeErrorToast("Error on save")}},previewImage:async function(t){const a=t.target;if(a.files&&a.files[0]){const t=new FileReader;this.staffUser.profileImage=await this.getBase64(a.files[0]),t.readAsDataURL(a.files[0])}},async getBase64(t){return new Promise((a,e)=>{const s=new FileReader;s.readAsDataURL(t),s.onload=()=>a(s.result),s.onerror=t=>e(t)})},async validateCurrentPassword(){let t={email:this.staffUser.email,password:this.currentPassword},a=await n["a"].login(t);this.isInvalid=!a},async changePassword(){let t={id:this.staffUser.id,password:this.newPassword};if(""===this.currentPassword)return this.isInvalid=!0,void this.makeErrorToast("Enter your current password");if(!this.isInvalid)try{await l["a"].update(t),this.makeSuccessToast("Password changed!")}catch{this.makeErrorToast("Error on change password")}}}},f=c,d=e("2877"),u=Object(d["a"])(f,s,r,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-d7f1a5dc.0e21de2d.js.map