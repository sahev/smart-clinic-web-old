(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8613778"],{"6bf2":function(e,t,a){"use strict";var i=a("dde5");t["a"]={login(e){return i["a"].post("/auth/login",e).catch(()=>!1)},register(e){return i["a"].post("/auth/register",e)}}},"946e":function(e,t,a){},b5d5:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("div",[t("h1",{staticClass:"mb-0"},[e._v("Sign Up")]),t("p",[e._v("Enter your email address and password to access admin panel.")]),e.firstPage?t("DetailsClinicSignUpForm",{on:{initalData:function(t){return e.onNext(t)}}}):t("DetailsClinicFastConfigForm",{attrs:{initalData:e.initalData}})],1)},s=[],r=function(){var e=this,t=e._self._c;return t("ValidationObserver",{ref:"form",scopedSlots:e._u([{key:"default",fn:function({handleSubmit:a}){return[t("form",{staticClass:"mt-4",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),a(e.onSubmit)}}},[t("ValidationProvider",{attrs:{vid:"name",name:"Full Name",rules:"required|fullName"},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"name"}},[e._v("Your Full Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.fullName,expression:"user.fullName"}],class:"form-control mb-0"+(a.length>0?" is-invalid":""),attrs:{type:"text",id:"name","aria-describedby":"emailHelp",placeholder:"Your Full Name"},domProps:{value:e.user.fullName},on:{input:function(t){t.target.composing||e.$set(e.user,"fullName",t.target.value)}}}),t("div",{staticClass:"invalid-feedback"},[t("span",[e._v(e._s(a[0]))])])])]}}],null,!0)}),t("ValidationProvider",{attrs:{vid:"name",name:"Email"},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"email"}},[e._v("Email address")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],class:"form-control mb-0"+(a.length>0?" is-invalid":""),attrs:{type:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",disabled:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})])]}}],null,!0)}),t("ValidationProvider",{attrs:{rules:"required|caracters",name:"basepassword"},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"text"}},[e._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.basepassword,expression:"basepassword"}],class:"form-control mb-0"+(a.length>0?" is-invalid":""),attrs:{type:"password",id:"email",placeholder:"Enter password"},domProps:{value:e.basepassword},on:{input:function(t){t.target.composing||(e.basepassword=t.target.value)}}}),t("div",{staticClass:"invalid-feedback"},[t("span",[e._v(e._s(a[0]))])])])]}}],null,!0)}),t("ValidationProvider",{attrs:{name:"confirm",rules:"required|password:@basepassword"},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"text"}},[e._v("Confirm Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],class:"form-control mb-0"+(a.length>0?" is-invalid":""),attrs:{type:"password",id:"password",placeholder:"Enter password","data-vv-as":"basepassword"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),t("div",{staticClass:"invalid-feedback"},[t("span",[e._v(e._s(a[0]))])])])]}}],null,!0)}),t("ValidationProvider",{attrs:{vid:"name",name:"Clinic alias",rules:"required"},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"text"}},[e._v("Your Clinic Web Address")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.host,expression:"host"}],class:"form-control mb-0"+(a.length>0?" is-invalid":""),attrs:{type:"text",id:"clinicalias",placeholder:"Your Clinic Address",disabled:""},domProps:{value:e.host},on:{input:function(t){t.target.composing||(e.host=t.target.value)}}})])]}}],null,!0)}),t("div",{staticClass:"d-inline-block w-100"},[t("button",{staticClass:"btn btn-primary float-right",attrs:{type:"submit"}},[e._v("Next")])]),t("div",{staticClass:"sign-info"},[t("span",{staticClass:"dark-color d-inline-block line-height-2"},[e._v(" Already Have Account ? "),e.$route.meta.dark?t("router-link",{staticClass:"iq-waves-effect pr-4",attrs:{to:"/dark/auth/sign-in1"}},[e._v(" Sign in ")]):t("router-link",{staticClass:"iq-waves-effect pr-4",attrs:{to:"/auth/sign-in1"}},[e._v(" Sign in ")])],1),t("social-login-form")],1)],1)]}}])})},n=[],l=a("6bf2"),o=a("8aa5"),c=a.n(o),u=a("1363"),d=a("2f62"),m=a("93d6"),p=a("8925"),f={name:"SignUp1Form",components:{SocialLoginForm:u["a"]},props:["formType"],computed:{...Object(d["c"])({users:"Setting/usersState"})},data:()=>({host:window.location.hostname+(""!==window.location.port?":"+window.location.port:""),basepassword:"",user:{fullName:"",email:"",password:"",isFirstUser:!0},clinic:{alias:""}}),mounted(){this.setDefaultData()},methods:{setDefaultData(){let e=this.queryToJson();this.user.firstName=e.name,this.user.email=e.email,this.user.fullName=e.fullName,this.clinic.alias=e.alias},queryToJson(){let e=location.search.substring(1);return JSON.parse('{"'+decodeURIComponent(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')},async onSubmit(){this.separateFullName();let e=await this.registerClinic(this.clinic);console.log(e,"clinic"),this.user.clinicId=e.data.id,console.log(this.user,"user");let t=await this.registerUser(this.user),a={user:t.data,clinic:e.data};this.$emit("initalData",{...a})},separateFullName(){let e=this.user.fullName.split(" ");this.user.firstName=e[0],e.map((e,t)=>{t>0&&(this.user.lastName=e)}),console.log(this.user.firstName,this.user.lastName,"nome completo")},async registerUser(e){return delete e.fullName,m["a"].createCustomerUser(e)},registerClinic(e){return p["a"].create(e)},jwtRegister(){this.$store.dispatch("Setting/addUserAction",this.user),this.$router.replace("/auth/sign-in1")},passportRegister(){l["a"].register(this.user).then(e=>{e.status?this.$router.push("/auth/sign-in1"):e.data.errors.length>0&&this.$refs.form.setErrors(e.data.errors)}).finally(()=>{this.loading=!1})},firebaseRegister(){c.a.auth().createUserWithEmailAndPassword(this.user.email,this.user.password).then(e=>{this.$router.replace("/auth/sign-in1")}).catch(e=>{})}}},v=f,g=a("2877"),h=Object(g["a"])(v,r,n,!1,null,null,null),b=h.exports,w=function(){var e=this,t=e._self._c;return t("ValidationObserver",{ref:"form",scopedSlots:e._u([{key:"default",fn:function({handleSubmit:a}){return[t("form",{staticClass:"mt-4",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),a(e.onSubmit)}}},[t("div",{staticClass:"form-group"},[t("div",{attrs:{id:"preview"}},[e.url?t("img",{attrs:{src:e.url}}):e._e()]),t("label",{attrs:{for:"name"}},[e._v("Logo")]),t("b-form-file",{attrs:{type:"input",id:"name",placeholder:"Enter your clinic logo"},on:{change:e.onFileChange}})],1),t("ValidationProvider",{attrs:{rules:"required",vid:"name",name:"Email"},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"clinicname"}},[e._v("Clinic Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.clinic.name,expression:"clinic.name"}],class:"form-control mb-0"+(a.length>0?" is-invalid":""),attrs:{type:"text",id:"clinicname",placeholder:"Enter clinic name"},domProps:{value:e.clinic.name},on:{input:function(t){t.target.composing||e.$set(e.clinic,"name",t.target.value)}}})])]}}],null,!0)}),t("ValidationProvider",{attrs:{rules:"required",name:"currency"},scopedSlots:e._u([{key:"default",fn:function({errors:a}){return[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"currency"}},[e._v("Currency")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.clinic.currency,expression:"clinic.currency"}],class:"form-control mb-0"+(a.length>0?" is-invalid":""),attrs:{type:"text",id:"currency",placeholder:"Enter currency"},domProps:{value:e.clinic.currency},on:{input:function(t){t.target.composing||e.$set(e.clinic,"currency",t.target.value)}}}),t("div",{staticClass:"invalid-feedback"},[t("span",[e._v(e._s(a[0]))])])])]}}],null,!0)}),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"text"}},[e._v("Your Clinic Alias")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.clinic.alias,expression:"clinic.alias"}],staticClass:"form-control mb-0",attrs:{type:"text",id:"clinicalias",placeholder:"Enter Your Clinic Alias"},domProps:{value:e.clinic.alias},on:{input:function(t){t.target.composing||e.$set(e.clinic,"alias",t.target.value)}}})]),t("div",{staticClass:"d-inline-block w-100"},[t("button",{staticClass:"btn btn-primary float-right",attrs:{type:"submit"}},[e._v("Start")])]),t("div",{staticClass:"sign-info"},[t("span",{staticClass:"dark-color d-inline-block line-height-2"},[e._v(" Already Have Account ? "),e.$route.meta.dark?t("router-link",{staticClass:"iq-waves-effect pr-4",attrs:{to:"/dark/auth/sign-in1"}},[e._v(" Sign in ")]):t("router-link",{staticClass:"iq-waves-effect pr-4",attrs:{to:"/auth/sign-in1"}},[e._v(" Sign in ")])],1),t("social-login-form")],1)],1)]}}])})},C=[],y={name:"SignUp1Form",components:{SocialLoginForm:u["a"]},props:["initalData"],computed:{...Object(d["c"])({users:"Setting/usersState"})},data:()=>({host:window.location.hostname+(""!==window.location.port?":"+window.location.port:""),basepassword:"",user:{fullName:"",email:""},clinic:{name:"",alias:"",logo:"",currency:""},url:null}),mounted(){console.log(this.initalData,"initalData"),this.setDefaultData()},methods:{async onFileChange(e){const t=e.target.files[0];t?(this.url=URL.createObjectURL(t),this.clinic.logo=await this.getBase64(t)):this.url=null},async getBase64(e){return new Promise((t,a)=>{const i=new FileReader;i.readAsDataURL(e),i.onload=()=>t(i.result),i.onerror=e=>a(e)})},setImage(e){e&&(this.clinic.logo=e)},setDefaultData(){let e=location.hostname.split(".")[0];this.clinic.alias=e,this.clinic.id=this.initalData.clinic.id},queryToJson(){let e=location.search.substring(1);return JSON.parse('{"'+decodeURIComponent(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')},async onSubmit(){console.log(this.clinic,"save"),await this.updateClinic(this.clinic),this.$router.push("sign-in1")},async updateClinic(e){let t=await p["a"].update(e);console.log(t,"atualizado")}}},_=y,N=(a("eebb"),Object(g["a"])(_,w,C,!1,null,null,null)),S=N.exports,k=a("b0af"),D=a("358c"),x={name:"SignUp1",components:{DetailsClinicSignUpForm:b,DetailsClinicFastConfigForm:S},data:()=>({initalData:null,firstPage:!0}),methods:{loginOAuth0(){new k["a"].WebAuth(D["a"].auth0Config).authorize()},onNext(e){this.initalData=e,this.firstPage=!1}}},P=x,F=Object(g["a"])(P,i,s,!1,null,null,null);t["default"]=F.exports},eebb:function(e,t,a){"use strict";a("946e")}}]);
//# sourceMappingURL=chunk-b8613778.95e17de8.js.map