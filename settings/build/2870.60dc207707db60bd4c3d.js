"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[2870,5972],{72870:function(e,t,n){n.r(t);var r=n(69307),c=n(56293),l=n(5830),s=n(27856),a=n.n(s),o=n(75972),i=n(82485);t.default=()=>{const{selectedSubMenuItem:e}=(0,i.default)(),t=(0,r.useRef)(null),{fields:n,updateField:s,getFieldValue:p,getField:u,setChangedField:d,changedFields:f,fetchFieldsData:m,updateFieldsData:y,fieldsLoaded:g}=(0,c.default)(),{setBannerContainerClass:z,bannerContainerClass:_,cssLoading:S,cssLoaded:h,generatePreviewCss:v,pageLinks:b,selectedBanner:k,selectedBannerId:w,tcfActiveServerside:q,fetchBannerData:E,setBannerDataLoaded:L,bannerDataLoaded:x,bannerHtml:P,manageConsentHtml:A,consentType:I}=(0,l.default)(),[O,T]=(0,r.useState)(null),[C,F]=(0,r.useState)(0),[H,M]=(0,r.useState)(!1),[D,B]=(0,r.useState)(!1),[W,V]=(0,r.useState)(!1),[j,R]=(0,r.useState)(!1);(0,r.useEffect)((()=>{if(!g||!x)return;let e="tcf"===p("uses_ad_cookies_personalized")||"yes"===p("uses_ad_cookies_personalized");"no"===p("uses_ad_cookies")&&(e=!1),B(e),V(!0)}),[g,x,p("uses_ad_cookies_personalized")]),(0,r.useEffect)((()=>{N()}),[window.location.hash,g,x]),(0,r.useEffect)((()=>{W&&N()}),[D]),(0,r.useEffect)((()=>{W&&D!==q&&N()}),[D,q,k]),(0,r.useEffect)((()=>{W&&D!==q&&N()}),[k]),(0,r.useEffect)((()=>{N()}),[p("a_b_testing_buttons")]),(0,r.useEffect)((()=>{x&&(s("consent_type",I),d("consent_type",I))}),[I]),(0,r.useEffect)((()=>{y(e)}),[p("consent_type")]),(0,r.useEffect)((()=>{""!==I&&s("consent_type",I)}),[I]),(0,r.useEffect)((()=>{J(),F(C+1)}),[f]),(0,r.useEffect)((()=>{w>0&&(G(),F(C+1))}),[w,I,x,D]),(0,r.useEffect)((()=>{G()}),[n]),(0,r.useEffect)((()=>{w>0&&H&&Q()}),[C,w,D,H]);const N=async()=>{await E(),await m(e),s("consent_type",I),F(C+1)},G=()=>{if(!x)return;let e=X();for(const t of e)if(k.hasOwnProperty(t.id)){let e=k[t.id];(!e||0===e.length||e.hasOwnProperty("text")&&0===e.text.length)&&(e=t.default),p(t.id)!==e&&s(t.id,e)}M(!0),s("manage_consent",k.revoke)},J=()=>{let e=X();for(const t of e)k.hasOwnProperty(t.id)&&k[t.id]!==t.value&&(k[t.id]=t.value)},K=async()=>{clearTimeout(O);let e=X();if(j){const t=setTimeout((async()=>{await v(e)}),500);T(t)}else await v(e),R(!0)},Q=async()=>{await K(),"optin"===I&&Y()&&await K(),1==p("soft_cookiewall")&&(z("cmplz-soft-cookiewall"),setTimeout((function(){z("")}),4e3))};(0,r.useEffect)((()=>{if(!D)return;const e=t.current;if(t.current&&"optin"===I&&e){let t=u("tcf_purposes"),n=(0,o.filterArray)(t.options,t.value);const r=(0,o.getPurposes)("marketing",!1),c=(0,o.getPurposes)("statistics",!1),l=(0,o.filterArray)(n,r),s=(0,o.filterArray)(n,c);let a=u("tcf_features"),i=(0,o.filterArray)(a.options,a.value),p=u("tcf_specialFeatures"),d=(0,o.filterArray)(p.options,p.value),f=u("tcf_specialPurposes"),m=(0,o.filterArray)(f.options,f.value);const y=e.querySelector(".cmplz-tcf .cmplz-marketing .cmplz-description"),g=e.querySelector(".cmplz-tcf .cmplz-statistics .cmplz-description"),z=e.querySelector(".cmplz-tcf .cmplz-features .cmplz-description"),_=e.querySelector(".cmplz-tcf .cmplz-specialfeatures .cmplz-title"),S=e.querySelector(".cmplz-tcf .cmplz-specialpurposes .cmplz-title");let h=e.querySelector(".cmplz-tcf .cmplz-features"),v=e.querySelector(".cmplz-tcf .cmplz-specialpurposes"),b=e.querySelector(".cmplz-tcf .cmplz-specialfeatures"),k=e.querySelector(".cmplz-tcf .cmplz-statistics");0===i.length&&h&&(h.style.display="none"),0===m.length&&v&&(v.style.display="none"),0===d.length&&b&&(b.style.display="none"),0===s.length&&k&&(k.style.display="none"),y&&(y.innerHTML=(0,o.concatenateString)(l)),g&&(g.innerHTML=(0,o.concatenateString)(s)),z&&(z.innerHTML=(0,o.concatenateString)(i)),_&&(_.innerHTML=(0,o.concatenateString)(d)),S&&(S.innerHTML=(0,o.concatenateString)(m))}}),[D,C,x,I,S,n]);const U=(e,t,n)=>{if(-1===e.indexOf(t))return e;let r=new RegExp(t,"g");return e.replace(r,n)},X=()=>n.filter((e=>"banner"===e.data_target)),Y=()=>{if("bottom"===p("position"))return!1;if(D)return!1;if(!0===p("disable_width_correction"))return!1;if(!document.querySelector(".cmplz-categories"))return;document.querySelector(".cmplz-categories").style.display="block";let e=document.querySelector(".cmplz-categories").offsetWidth;document.querySelector(".cmplz-categories").style.display="none";let t=document.querySelector(".cmplz-message").offsetWidth,n=document.querySelector(".cmplz-cookiebanner").offsetWidth,r=1.3*n,c=0,l=0,a=!1,o=window.getComputedStyle(document.querySelector(".cmplz-cookiebanner"),null).getPropertyValue("padding-left"),i=window.getComputedStyle(document.querySelector(".cmplz-cookiebanner"),null).getPropertyValue("padding-left");if(-1!==o.indexOf("px")&&-1!==i.indexOf("px")&&(a=parseInt(o.replace("px",""))+parseInt(i.replace("px",""))),e>0&&a&&n-a>e){let t=n-42-e;c=parseInt(n)+parseInt(t)}let u=0;if(u=document.querySelectorAll(".cmplz-buttons .cmplz-btn").offsetWidth,u>t){let e=u-42-t;l=parseInt(u)+parseInt(e)}let d=0;return d=l>c?l:c,d>n&&d<r&&(d%2!=0&&d++,s("banner_width",d),!0)},Z=e=>{let t={use_logo:"logo",category_all:"category_marketing",category_stats:"category_statistics",category_prefs:"category_preferences",accept_informational:"accept_optout",accept:"accept_optin",view_preferences:"manage_options",save_preferences:"save_settings"};return t.hasOwnProperty(e)?t[e]:e};let $=1==p("hide_preview")||1==p("disable_cookiebanner");if(!x||!h||$||!H)return(0,r.createElement)(r.Fragment,null);let ee=P,te=A,ne=X();ee=U(ee,"{consent_type}",I),ee=U(ee,"{id}",k.ID),ee=U(ee,"{vendor_count}","optin"===I?643:""),te=U(te,"{id}",k.ID);for(const e of ne){if("title"===e.id)continue;let t=Z(e.id);if(k.hasOwnProperty(e.id)){let n=k[e.id];ee="text_checkbox"===e.type&&n&&n.hasOwnProperty("text")?U(ee,"{"+t+"}",n.text):"banner_logo"===e.type?U(ee,"{"+t+"}",k.logo_options[n]?k.logo_options[n]:""):U(ee,"{"+t+"}",n)}"revoke"===e.id&&(te=U(te,"{manage_consent}",k.revoke))}return(()=>{let e=document.querySelector("#cmplz-cookiebanner-container");e&&e.querySelectorAll(".cmplz-links a:not(.cmplz-external), .cmplz-buttons a:not(.cmplz-external)").forEach((e=>{e.classList.add("cmplz-hidden");for(let n in b)b.hasOwnProperty(n)&&e.classList.contains(n)&&(e.setAttribute("href",b[n].url+e.getAttribute("data-relative_url")),"{title}"===e.innerText&&(e.innerText=(t=b[n].title,(new DOMParser).parseFromString(t,"text/html").documentElement.textContent)),e.classList.remove("cmplz-hidden"));var t})),(e=>{let t=document.querySelector(".cmplz-manage-consent"),n=document.querySelector("#cmplz-cookiebanner-container .cmplz-cookiebanner");t&&(t.style.display="none"),document.addEventListener("click",(e=>{e.target.closest(".cmplz-manage-consent")&&(n&&n.style.removeProperty("display"),t&&(t.style.display="none")),(e.target.closest(".cmplz-close")||e.target.closest(".cmplz-accept")||e.target.closest(".cmplz-deny"))&&(n&&(n.style.display="none"),t&&(t.style.display="block")),n&&e.target.closest(".cmplz-view-preferences")&&(n.classList.add("cmplz-categories-visible"),n.querySelector(".cmplz-categories").style.display="block",n.querySelector(".cmplz-categories").classList.add("cmplz-fade-in"),n.querySelector(".cmplz-view-preferences").style.display="none",n.querySelector(".cmplz-save-preferences").style.display="block"),n&&e.target.closest(".cmplz-save-preferences")&&(n.classList.remove("cmplz-categories-visible"),n.querySelector(".cmplz-categories").style.display="none",n.querySelector(".cmplz-categories").classList.remove("cmplz-fade-in"),n.querySelector(".cmplz-view-preferences").style.display="block",n.querySelector(".cmplz-save-preferences").style.display="none")}))})()})(),(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",{id:"cmplz-preview-banner-container",ref:t},(0,r.createElement)("div",{id:"cmplz-cookiebanner-container",className:_,dangerouslySetInnerHTML:{__html:a().sanitize(ee)}})," ",(0,r.createElement)("div",{id:"cmplz-manage-consent","data-nosnippet":"true",dangerouslySetInnerHTML:{__html:a().sanitize(te)}})))}},75972:function(e,t,n){n.r(t),n.d(t,{concatenateString:function(){return l},filterArray:function(){return c},getPurposes:function(){return r}});const r=(e,t)=>"functional"===e||"preferences"===e?[]:"marketing"===e?t?[1,2,3,4,5,6,7,8,9,10]:[1,2,3,4,5,6,10]:"statistics"===e?[1,7,8,9]:void 0,c=(e,t)=>{e||(e={}),Array.isArray(t)||(t=Object.keys(e));const n=t.map((e=>parseInt(e)));return Object.keys(e).filter((e=>n.includes(parseInt(e)))).map((t=>e[t]))},l=e=>{let t="";const n=e.length-1;for(var r in e)e.hasOwnProperty(r)&&(t+=e[r],t+=r<n?", ":".");return t}}}]);