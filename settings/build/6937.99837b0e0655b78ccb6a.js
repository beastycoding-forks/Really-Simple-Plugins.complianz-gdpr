"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[6937,3275,6239,1789,1871,835],{63275:function(e,t,n){n.r(t),n.d(t,{UseMenuData:function(){return r}});var l=n(30270),a=n(48399),i=n(12902),c=n(1277),s=n(65736);const r=(0,l.Ue)(((e,t)=>({menuDataLoaded:!1,saving:!1,menu:[],menuChanged:!1,changedMenuType:"per_document",emptyMenuLink:"#",requiredDocuments:[],createdDocuments:[],genericDocuments:[],documentsNotInMenu:[],pageTypes:[],regions:[],fetchMenuData:async()=>{const t=await o(!1);let n=t.required_documents.filter((e=>e.page_id));e({menuDataLoaded:!0,emptyMenuLink:t.empty_menu_link,menu:t.menu,requiredDocuments:t.required_documents,genericDocuments:t.generic_documents_list,createdDocuments:n,pageTypes:t.page_types,documentsNotInMenu:t.documents_not_in_menu,regions:t.regions})},updateMenu:(t,n)=>{let l=isNaN(t)?"per_type":"per_document";e({menuType:l}),e("per_type"===l?(0,i.ZP)((e=>{let l=e.genericDocuments.findIndex((function(e,n){return e.page_id===t||e.type===t})),a=e.createdDocuments.findIndex((function(e,n){return e.page_id===t||e.type===t}));-1!==l&&(e.genericDocuments[l].menu_id=n,-1!==a&&(e.createdDocuments[a].menu_id=-1),e.menuChanged=!0)})):(0,i.ZP)((e=>{let l=e.genericDocuments.findIndex((function(e,n){return e.page_id===t||e.type===t})),a=e.createdDocuments.findIndex((function(e,n){return e.page_id===t||e.type===t}));-1!==a&&(e.createdDocuments[a].menu_id=n,-1!==l&&(e.genericDocuments[l].menu_id=-1),e.menuChanged=!0)})))},saveDocumentsMenu:async(n,l)=>{if(e({saving:!0}),t().menuChanged||n){let n={};n.genericDocuments=t().genericDocuments.filter((e=>e.can_region_redirect)),n.createdDocuments=t().createdDocuments;const i=a.doAction("save_documents_menu_data",n).then((t=>(e({saving:!1}),t))).catch((e=>{console.error(e)}));l&&c.toast.promise(i,{pending:(0,s.__)("Saving menu...","complianz-gdpr"),success:(0,s.__)("Menu saved","complianz-gdpr"),error:(0,s.__)("Something went wrong","complianz-gdpr")})}else l&&c.toast.info((0,s.__)("Settings have not been changed","complianz-gdpr"))}}))),o=()=>a.doAction("documents_menu_data",{generate:!1}).then((e=>e)).catch((e=>{console.error(e)}))},76239:function(e,t,n){n.r(t);var l=n(69307),a=n(23361),i=n(65736),c=n(27856),s=n.n(c);t.default=e=>{let t=e.help;t.title||(t.title=t.text,t.text=!1);let n=e.noticesExpanded?"open":"",c=t.url&&-1!==t.url.indexOf("complianz.io")?"_blank":"_self";return(0,l.createElement)(l.Fragment,null,t.title&&t.text&&(0,l.createElement)("details",{className:"cmplz-wizard-help-notice cmplz-"+t.label.toLowerCase(),open:n},(0,l.createElement)("summary",null,t.title," ",(0,l.createElement)(a.default,{name:"chevron-down"})),(0,l.createElement)("div",{dangerouslySetInnerHTML:{__html:s().sanitize(t.text)}})," ",t.url&&(0,l.createElement)("div",{className:"cmplz-help-more-info"},(0,l.createElement)("a",{target:c,href:t.url},(0,i.__)("More info","complianz-gdpr")))),t.title&&!t.text&&(0,l.createElement)("div",{className:"cmplz-wizard-help-notice cmplz-"+t.label.toLowerCase()},(0,l.createElement)("p",null,t.title)))}},71789:function(e,t,n){n.r(t);var l=n(30270),a=n(48399);const i=(0,l.Ue)(((e,t)=>({licenseStatus:cmplz_settings.licenseStatus,processing:!1,licenseNotices:[],noticesLoaded:!1,getLicenseNotices:async()=>{const{licenseStatus:t,notices:n}=await a.doAction("license_notices",{}).then((e=>e));e((e=>({noticesLoaded:!0,licenseNotices:n,licenseStatus:t})))},activateLicense:async t=>{let n={};n.license=t,e({processing:!0});const{licenseStatus:l,notices:i}=await a.doAction("activate_license",n);e((e=>({processing:!1,licenseNotices:i,licenseStatus:l})))},deactivateLicense:async()=>{e({processing:!0});const{licenseStatus:t,notices:n}=await a.doAction("deactivate_license");e((e=>({processing:!1,licenseNotices:n,licenseStatus:t})))}})));t.default=i},46937:function(e,t,n){n.r(t),n.d(t,{ScrollProgress:function(){return f}});var l=n(69307),a=n(20835),i=n(1871),c=n(76239),s=n(65736),r=n(56293),o=n(82485),m=n(63275),d=n(5830),u=n(82387),p=n(66182),g=n(38892);t.default=()=>{const[e,t]=(0,l.useState)(!0),{progressLoaded:_,notices:h,fetchProgressData:z}=(0,u.default)(),[E,v]=(0,l.useState)(!1),{saveBanner:b,setBannerDataLoaded:y}=(0,d.default)(),{saveDocumentsMenu:N}=(0,m.UseMenuData)(),[k,w]=(0,l.useState)(null),[D,L]=(0,l.useState)(null),[x,M]=(0,l.useState)(!1),{getFieldNotices:S,saving:C,fieldNotices:I,fieldNoticesLoaded:F,fieldsLoaded:P,saveFields:T,changedFields:A,fields:B,fetchAllFieldsCompleted:H,nextButtonDisabled:q,isNextButtonDisabled:U}=(0,r.default)(),{subMenuLoaded:$,saveButtonsRequired:O,subMenu:R,selectedSubMenuItem:Z,selectedMainMenuItem:G,nextMenuItem:V,previousMenuItem:Y}=(0,o.default)();(0,l.useEffect)((()=>{"banner"!==G||k||n.e(2870).then(n.bind(n,72870)).then((e=>{let{default:t}=e;w((()=>t))}))}),[G]),(0,l.useEffect)((()=>{"finish"!==Z||D||Promise.all([n.e(1493),n.e(3555)]).then(n.bind(n,23555)).then((e=>{let{default:t}=e;L((()=>t))}))}),[Z]),(0,l.useEffect)((()=>{"#banner"!==window.location.hash&&H()}),[A]),(0,l.useEffect)((()=>{let e=!1;return q?e=setInterval((()=>{U(B,Z)}),3e3):e&&clearInterval(e),()=>clearInterval(e)}),[q]);const j=async(e,t)=>{-1!==A.findIndex((e=>"regions"===e.id))&&y(!1),"document-menu"===Z?(await T(Z,t,!1),await N(A.length>0,t)):"banner"===G?await b(B):await T(Z,t,e)},{menu_items:J}=R;if(!$||!P||0===J.length)return(0,l.createElement)(p.default,null);let K=B.filter((e=>e.menu_id===Z)),Q=[];for(const e of K)(0,a.in_array)(e.group_id,Q)||Q.push(e.group_id);let W=[];if(F)for(const e of I)K.filter((t=>e.field_id===t.id)).length>0&&W.push(e);if(_)for(const e of h){let t=!1;if(e.show_with_options&&"warning"===e.status&&(t=K.filter((t=>e.show_with_options.includes(t.id))).length>0),t||e.menu_id===Z){let t={};t.title=!!e.title&&e.title,t.label=e.label,t.id=e.id,t.text=e.message,t.url=e.url,t.linked_field=e.show_with_option,W.push(t)}}for(const e of K.filter((e=>e.help&&!e.conditionallyDisabled))){let t=e.help;0===W.filter((e=>e.id&&e.id===t.id)).length&&W.push(e.help)}W=W.filter((e=>"completed"!==e.label.toLowerCase()));let X=B.filter((e=>"enable_cookie_banner"===e.id&&"yes"===e.value)).length>0,ee=q?`#${G}/${Z}`:V,te=X?"#banner":"#dashboard";return te=q?`#${G}/${Z}`:te,(0,l.createElement)(l.Fragment,null,E&&D&&(0,l.createElement)("div",{className:"cmplz-confetti"},(0,l.createElement)(D,{zIndex:999999})),(0,l.createElement)("div",{className:"cmplz-wizard-settings cmplz-column-2"},Q.map(((e,t)=>(0,l.createElement)(g.default,{key:"groups-"+t,fallback:"Could not load: Banner preview"},(0,l.createElement)(i.default,{key:t,index:t,group:e,fields:K})))),(0,l.createElement)("div",{className:"cmplz-grid-item-footer-container"},(0,l.createElement)(f,null),(0,l.createElement)("div",{className:"cmplz-grid-item-footer"},"wizard"!==G&&(0,l.createElement)("div",{className:"cmplz-grid-item-footer-upsell-bar"},!cmplz_settings.is_premium&&(0,l.createElement)("a",{className:"button button-default",href:"https://complianz.io/pricing",target:"_blank",rel:"noopener noreferrer"},(0,s.__)("Get Premium","complianz-gdpr"))),(0,l.createElement)("div",{className:"cmplz-grid-item-footer-buttons"},"#"!==Y&&(0,l.createElement)("a",{href:Y,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},(0,s.__)("Previous","complianz-gdpr")),O()&&(0,l.createElement)("button",{className:"button button-default",onClick:e=>j(!1,!0)},(0,s.__)("Save","complianz-gdpr")),Z!==J[J.length-1].id&&(0,l.createElement)(l.Fragment,null,O()&&(0,l.createElement)("a",{disabled:q,className:"button button-primary",href:ee,onClick:e=>{j(!1,!1),window.scrollTo({top:0,behavior:"smooth"})}},(0,s.__)("Save and Continue","complianz-gdpr")),!O()&&(0,l.createElement)("a",{className:"button button-primary",href:ee,onClick:e=>j(!1,!1)},(0,s.__)("Continue","complianz-gdpr"))),"wizard"===G&&Z===J[J.length-1].id&&(0,l.createElement)("a",{disabled:q||C||x,className:"button button-primary",href:"#",onClick:e=>(async e=>{e.preventDefault(),q||(M(!0),v(!0),j(!0,!1),M(!1),window.location.hash=te,setTimeout((async()=>{v(!1)}),2e3))})(e)},(0,s.__)("Finish","complianz-gdpr")))))),(0,l.createElement)("div",{className:"cmplz-wizard-help"},(0,l.createElement)("div",{className:"cmplz-help-header"},(0,l.createElement)("h3",{className:"cmplz-h4"},(0,s.__)("Notifications","complianz-gdpr")),(0,l.createElement)("div",{className:"cmplz-help-control",onClick:()=>{t(!e)}},!e&&(0,s.__)("Expand all","complianz-gdpr"),e&&(0,s.__)("Collapse all","complianz-gdpr"))),W.map(((t,n)=>(0,l.createElement)(g.default,{key:"field-"+n,fallback:"Could not load: Help notices"},(0,l.createElement)(c.default,{key:n,noticesExpanded:e,help:t,fieldId:t.id}))))),"banner"===G&&k&&(0,l.createElement)(g.default,{fallback:"Could not load: Banner preview"},(0,l.createElement)(k,null)))};const f=()=>{const[e,t]=(0,l.useState)(0);return(0,l.useEffect)((()=>{window.addEventListener("scroll",(()=>{let e=document.documentElement.scrollHeight-document.documentElement.clientHeight,n=Math.round(window.scrollY/e*100);n=Math.max(5,n),t(n)}))}),[]),document.documentElement.scrollHeight<=document.documentElement.clientHeight?null:(0,l.createElement)("span",{className:"cmplz-grid-item-footer-scroll-progress-container"},(0,l.createElement)("span",{className:"cmplz-grid-item-footer-scroll-progress",style:{width:e+"%"}},e,"%"))}},1871:function(e,t,n){n.r(t);var l=n(69307),a=n(99950),i=n(65736),c=n(82485),s=n(71789),r=n(56293),o=n(5830),m=n(38892),d=n(27856),u=n.n(d);t.default=e=>{const{highLightField:t,getFieldValue:d}=(0,r.default)(),{licenseStatus:p}=(0,s.default)(),{bannerDataLoaded:g}=(0,o.default)();let f="https://complianz.io/pricing/";const{subMenu:_,getMenuRegions:h,selectedSubMenuItem:z}=(0,c.default)();let E=h(),v=d("regions");Array.isArray(v)||(v=[v]),E=E.filter((e=>v.includes(e)));const[b,y]=(0,l.useState)(null);(0,l.useEffect)((()=>{Promise.resolve().then(n.bind(n,93019)).then((e=>{let{default:t}=e;y((()=>t))}))}),[]);let N,k=[];for(const t of e.fields)t.group_id===e.group&&k.push(t);for(const e of _.menu_items)if(e.id===z?N=e:e.menu_items&&(N=e.menu_items.filter((e=>e.id===z))[0]),N)break;for(const t of _.menu_items)if(t.id===z&&t.hasOwnProperty("groups")){let n=t.groups.filter((t=>t.id===e.group));n.length>0&&(N=n[0])}if(!N)return null;let w=N.premium_text?N.premium_text:(0,i.__)("Learn more about %sPremium%s","complianz-gdpr");cmplz_settings.is_premium&&(w="empty"===p||"deactivated"===p?cmplz_settings.messageInactive:cmplz_settings.messageInvalid);let D="valid"!==p&&N.premium;D=cmplz_settings.is_premium&&"valid"!==p&&"license"!==N.id,f=N.upgrade?N.upgrade:f;let L=N.helpLink_text?N.helpLink_text:(0,i.__)("Instructions","complianz-gdpr"),x=D?"cmplz-disabled":"";return k.filter((e=>e.conditionallyDisabled&&!0===e.conditionallyDisabled||e.visible&&!1===e.visible)).length===k.length?null:(0,l.createElement)("div",{className:"cmplz-grid-item cmplz-"+N.id+" "+x,key:N.id},N.title&&(0,l.createElement)("div",{className:"cmplz-grid-item-header"},(0,l.createElement)("h3",{className:"cmplz-h4"},N.title),E.length>0&&(0,l.createElement)("div",{className:"cmplz-grid-item-controls"},E.map(((e,t)=>(0,l.createElement)("div",{key:t},(0,l.createElement)("img",{className:"cmplz-settings-region",src:cmplz_settings.plugin_url+"/assets/images/"+e+".svg",alt:"region"}))))),0===E.length&&N.helpLink&&(0,l.createElement)("div",{className:"cmplz-grid-item-controls"},(0,l.createElement)(a.default,{target:"_blank",rel:"noopener noreferrer",className:"cmplz-helplink",text:L,url:N.helpLink}))),(0,l.createElement)("div",{className:"cmplz-grid-item-content"},N.intro&&(0,l.createElement)("div",{className:"cmplz-settings-block-intro",dangerouslySetInnerHTML:{__html:u().sanitize(N.intro)}})," ",b&&k.map(((e,n)=>(0,l.createElement)(m.default,{key:"field-"+e.id,fallback:"Could not load field "+e.id},(0,l.createElement)(b,{key:e.id,field:e,highLightField:t}))))),D&&(0,l.createElement)("div",{className:"cmplz-locked"},(0,l.createElement)("div",{className:"cmplz-locked-overlay"},(0,l.createElement)("span",{className:"cmplz-task-status cmplz-premium"},(0,i.__)("Upgrade","complianz-gdpr")),(0,l.createElement)("span",null,cmplz_settings.is_premium&&(0,l.createElement)("span",null,w," ",(0,l.createElement)("a",{className:"cmplz-locked-link",href:cmplz_settings.license_url},(0,i.__)("Check license","complianz-gdpr"))),!cmplz_settings.is_premium&&(0,l.createElement)(a.default,{target:"_blank",rel:"noopener noreferrer",text:w,url:f})))),"banner"===_.id&&!g&&(0,l.createElement)("div",{className:"cmplz-locked"},(0,l.createElement)("div",{className:"cmplz-locked-overlay"})))}},20835:function(e,t,n){n.r(t),n.d(t,{in_array:function(){return l}});const l=(e,t)=>{let n=t.length;for(let l=0;l<n;l++)if(t[l]==e)return!0;return!1}}}]);