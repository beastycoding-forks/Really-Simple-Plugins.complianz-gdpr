"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[2870,5972],{72870:function(e,t,n){n.r(t);var r=n(69307),c=n(56293),l=n(5830),s=n(75972),a=n(82485);t.default=()=>{const{selectedSubMenuItem:e}=(0,a.default)(),t=(0,r.useRef)(null),{fields:n,updateField:o,getFieldValue:i,getField:p,setChangedField:u,changedFields:d,fetchFieldsData:f,updateFieldsData:m,fieldsLoaded:y}=(0,c.default)(),{setBannerContainerClass:g,bannerContainerClass:z,cssLoading:_,cssLoaded:S,generatePreviewCss:h,pageLinks:b,selectedBanner:v,selectedBannerId:k,tcfActiveServerside:w,fetchBannerData:q,setBannerDataLoaded:E,bannerDataLoaded:L,bannerHtml:x,manageConsentHtml:P,consentType:A}=(0,l.default)(),[I,O]=(0,r.useState)(null),[T,C]=(0,r.useState)(0),[F,H]=(0,r.useState)(!1),[M,D]=(0,r.useState)(!1),[B,W]=(0,r.useState)(!1),[V,j]=(0,r.useState)(!1);(0,r.useEffect)((()=>{if(!y||!L)return;let e="tcf"===i("uses_ad_cookies_personalized")||"yes"===i("uses_ad_cookies_personalized");"no"===i("uses_ad_cookies")&&(e=!1),D(e),W(!0)}),[y,L,i("uses_ad_cookies_personalized")]),(0,r.useEffect)((()=>{R()}),[window.location.hash,y,L]),(0,r.useEffect)((()=>{B&&R()}),[M]),(0,r.useEffect)((()=>{B&&M!==w&&R()}),[M,w,v]),(0,r.useEffect)((()=>{B&&M!==w&&R()}),[v]),(0,r.useEffect)((()=>{R()}),[i("a_b_testing_buttons")]),(0,r.useEffect)((()=>{L&&(console.log("consenttype "+A),o("consent_type",A),u("consent_type",A))}),[A]),(0,r.useEffect)((()=>{m(e)}),[i("consent_type")]),(0,r.useEffect)((()=>{""!==A&&o("consent_type",A)}),[A]),(0,r.useEffect)((()=>{G(),C(T+1)}),[d]),(0,r.useEffect)((()=>{k>0&&(N(),C(T+1))}),[k,A,L,M]),(0,r.useEffect)((()=>{N()}),[n]),(0,r.useEffect)((()=>{k>0&&F&&K()}),[T,k,M,F]);const R=async()=>{await q(),await f(e),o("consent_type",A),C(T+1)},N=()=>{if(!L)return;let e=U();for(const t of e)if(v.hasOwnProperty(t.id)){let e=v[t.id];(0===e.length||e.hasOwnProperty("text")&&0===e.text.length)&&(e=t.default),o(t.id,e)}H(!0),o("manage_consent",v.revoke)},G=()=>{let e=U();for(const t of e)v.hasOwnProperty(t.id)&&(v[t.id]=t.value)},J=async()=>{clearTimeout(I);let e=U();if(V){const t=setTimeout((async()=>{await h(e)}),500);O(t)}else await h(e),j(!0)},K=async()=>{await J(),"optin"===A&&X()&&await J(),1==i("soft_cookiewall")&&(g("cmplz-soft-cookiewall"),setTimeout((function(){g("")}),4e3))};(0,r.useEffect)((()=>{if(!M)return;const e=t.current;if(t.current&&"optin"===A&&e){let t=p("tcf_purposes"),n=(0,s.filterArray)(t.options,t.value);const r=(0,s.getPurposes)("marketing",!1),c=(0,s.getPurposes)("statistics",!1),l=(0,s.filterArray)(n,r),a=(0,s.filterArray)(n,c);let o=p("tcf_features"),i=(0,s.filterArray)(o.options,o.value),u=p("tcf_specialFeatures"),d=(0,s.filterArray)(u.options,u.value),f=p("tcf_specialPurposes"),m=(0,s.filterArray)(f.options,f.value);const y=e.querySelector(".cmplz-tcf .cmplz-marketing .cmplz-description"),g=e.querySelector(".cmplz-tcf .cmplz-statistics .cmplz-description"),z=e.querySelector(".cmplz-tcf .cmplz-features .cmplz-description"),_=e.querySelector(".cmplz-tcf .cmplz-specialfeatures .cmplz-title"),S=e.querySelector(".cmplz-tcf .cmplz-specialpurposes .cmplz-title");let h=e.querySelector(".cmplz-tcf .cmplz-features"),b=e.querySelector(".cmplz-tcf .cmplz-specialpurposes"),v=e.querySelector(".cmplz-tcf .cmplz-specialfeatures"),k=e.querySelector(".cmplz-tcf .cmplz-statistics");0===i.length&&h&&(h.style.display="none"),0===m.length&&b&&(b.style.display="none"),0===d.length&&v&&(v.style.display="none"),0===a.length&&k&&(k.style.display="none"),y&&(y.innerHTML=(0,s.concatenateString)(l)),g&&(g.innerHTML=(0,s.concatenateString)(a)),z&&(z.innerHTML=(0,s.concatenateString)(i)),_&&(_.innerHTML=(0,s.concatenateString)(d)),S&&(S.innerHTML=(0,s.concatenateString)(m))}}),[M,T,L,A,_,n]);const Q=(e,t,n)=>{let r=new RegExp(t,"g");return e.replace(r,n)},U=()=>n.filter((e=>"banner"===e.data_target)),X=()=>{if("bottom"===i("position"))return!1;if(M)return!1;if(!0===i("disable_width_correction"))return!1;if(!document.querySelector(".cmplz-categories"))return;document.querySelector(".cmplz-categories").style.display="block";let e=document.querySelector(".cmplz-categories").offsetWidth;document.querySelector(".cmplz-categories").style.display="none";let t=document.querySelector(".cmplz-message").offsetWidth,n=document.querySelector(".cmplz-cookiebanner").offsetWidth,r=1.3*n,c=0,l=0,s=!1,a=window.getComputedStyle(document.querySelector(".cmplz-cookiebanner"),null).getPropertyValue("padding-left"),p=window.getComputedStyle(document.querySelector(".cmplz-cookiebanner"),null).getPropertyValue("padding-left");if(-1!==a.indexOf("px")&&-1!==p.indexOf("px")&&(s=parseInt(a.replace("px",""))+parseInt(p.replace("px",""))),e>0&&s&&n-s>e){let t=n-42-e;c=parseInt(n)+parseInt(t)}let u=0;if(u=document.querySelectorAll(".cmplz-buttons .cmplz-btn").offsetWidth,u>t){let e=u-42-t;l=parseInt(u)+parseInt(e)}let d=0;return d=l>c?l:c,d>n&&d<r&&(d%2!=0&&d++,o("banner_width",d),!0)},Y=e=>{let t={use_logo:"logo",category_all:"category_marketing",category_stats:"category_statistics",category_prefs:"category_preferences",accept_informational:"accept_optout",accept:"accept_optin",view_preferences:"manage_options",save_preferences:"save_settings"};return t.hasOwnProperty(e)?t[e]:e};let Z=1==i("hide_preview")||1==i("disable_cookiebanner");if(!L||!S||Z||!F)return(0,r.createElement)(r.Fragment,null);let $=x,ee=P,te=U();$=Q($,"{consent_type}",A),$=Q($,"{id}",v.ID),$=Q($,"{vendor_count}","optin"===A?643:""),ee=Q(ee,"{id}",v.ID);for(const e of te){if("title"===e.id)continue;let t=Y(e.id);if(v.hasOwnProperty(e.id)){let n=v[e.id];$="text_checkbox"===e.type&&n&&n.hasOwnProperty("text")?Q($,"{"+t+"}",n.text):"banner_logo"===e.type?Q($,"{"+t+"}",v.logo_options[n]?v.logo_options[n]:""):Q($,"{"+t+"}",n)}"revoke"===e.id&&(ee=Q(ee,"{manage_consent}",v.revoke))}return(()=>{let e=document.querySelector("#cmplz-cookiebanner-container");e&&e.querySelectorAll(".cmplz-links a:not(.cmplz-external), .cmplz-buttons a:not(.cmplz-external)").forEach((e=>{e.classList.add("cmplz-hidden");for(let n in b)b.hasOwnProperty(n)&&e.classList.contains(n)&&(e.setAttribute("href",b[n].url+e.getAttribute("data-relative_url")),"{title}"===e.innerText&&(e.innerText=(t=b[n].title,(new DOMParser).parseFromString(t,"text/html").documentElement.textContent)),e.classList.remove("cmplz-hidden"));var t})),(e=>{let t=document.querySelector(".cmplz-manage-consent"),n=document.querySelector("#cmplz-cookiebanner-container .cmplz-cookiebanner");t&&(t.style.display="none"),document.addEventListener("click",(e=>{e.target.closest(".cmplz-manage-consent")&&(n&&n.style.removeProperty("display"),t&&(t.style.display="none")),(e.target.closest(".cmplz-close")||e.target.closest(".cmplz-accept")||e.target.closest(".cmplz-deny"))&&(n&&(n.style.display="none"),t&&(t.style.display="block")),n&&e.target.closest(".cmplz-view-preferences")&&(n.classList.add("cmplz-categories-visible"),n.querySelector(".cmplz-categories").style.display="block",n.querySelector(".cmplz-categories").classList.add("cmplz-fade-in"),n.querySelector(".cmplz-view-preferences").style.display="none",n.querySelector(".cmplz-save-preferences").style.display="block"),n&&e.target.closest(".cmplz-save-preferences")&&(n.classList.remove("cmplz-categories-visible"),n.querySelector(".cmplz-categories").style.display="none",n.querySelector(".cmplz-categories").classList.remove("cmplz-fade-in"),n.querySelector(".cmplz-view-preferences").style.display="block",n.querySelector(".cmplz-save-preferences").style.display="none")}))})()})(),(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",{id:"cmplz-preview-banner-container",ref:t},(0,r.createElement)("div",{id:"cmplz-cookiebanner-container",className:z,dangerouslySetInnerHTML:{__html:$}}),(0,r.createElement)("div",{id:"cmplz-manage-consent","data-nosnippet":"true",dangerouslySetInnerHTML:{__html:ee}})))}},75972:function(e,t,n){n.r(t),n.d(t,{concatenateString:function(){return l},filterArray:function(){return c},getPurposes:function(){return r}});const r=(e,t)=>"functional"===e||"preferences"===e?[]:"marketing"===e?t?[1,2,3,4,5,6,7,8,9,10]:[1,2,3,4,5,6,10]:"statistics"===e?[1,7,8,9]:void 0,c=(e,t)=>{e||(e={}),Array.isArray(t)||(t=Object.keys(e));const n=t.map((e=>parseInt(e)));return Object.keys(e).filter((e=>n.includes(parseInt(e)))).map((t=>e[t]))},l=e=>{let t="";const n=e.length-1;for(var r in e)e.hasOwnProperty(r)&&(t+=e[r],t+=r<n?", ":".");return t}}}]);