(self.webpackChunkcashwarden_web_ng=self.webpackChunkcashwarden_web_ng||[]).push([[431],{5022:(R,D,i)=>{"use strict";i.r(D),i.d(D,{RecordModule:()=>xt});var N=i(5861),t=i(4650),F=i(8746),A=i(4327),u=i(9094),v=i(6895);let m=(()=>{class e{constructor(n,o){this.el=n,this._http=o,this.isFileSaverSupported=!0,this.httpMethod="get",this.success=new t.vpe,this.error=new t.vpe;let a=!1;try{a=!!new Blob}catch{}this.isFileSaverSupported=a,a||n.nativeElement.classList.add("down-file__not-support")}getDisposition(n){return(n||"").split(";").filter(a=>a.includes("=")).map(a=>{const c=a.split("="),h="UTF-8''";let C=c[1];return C.startsWith(h)&&(C=C.substring(h.length)),{[c[0].trim()]:C}}).reduce((a,c)=>c,{})}setDisabled(n){const o=this.el.nativeElement;o.disabled=n,o.classList[n?"add":"remove"]("down-file__disabled")}_click(n){var o=this;return(0,N.Z)(function*(){if(!o.isFileSaverSupported||"function"==typeof o.pre&&!(yield o.pre(n)))return n.stopPropagation(),void n.preventDefault();o.setDisabled(!0),o._http.request(o.httpMethod,o.httpUrl,{params:o.httpData||{},responseType:"blob",observe:"response",body:o.httpBody}).pipe((0,F.x)(()=>o.setDisabled(!1))).subscribe({next:a=>{if(200!==a.status||a.body.size<=0)return void o.error.emit(a);const c=o.getDisposition(a.headers.get("content-disposition"));let h=o.fileName;"function"==typeof h&&(h=h(a)),h=h||c["filename*"]||c.filename||a.headers.get("filename")||a.headers.get("x-filename"),(0,A.saveAs)(a.body,decodeURI(h)),o.success.emit(a)},error:a=>o.error.emit(a)})})()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.SBq),t.Y36(u.lP))},e.\u0275dir=t.lG2({type:e,selectors:[["","down-file",""]],hostBindings:function(n,o){1&n&&t.NdJ("click",function(c){return o._click(c)})},inputs:{httpData:["http-data","httpData"],httpBody:["http-body","httpBody"],httpMethod:["http-method","httpMethod"],httpUrl:["http-url","httpUrl"],fileName:["file-name","fileName"],pre:"pre"},outputs:{success:"success",error:"error"},exportAs:["downFile"]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[v.ez,u.pG]}),e})();var r=i(5609),l=i(8418),f=i(48),p=i(655),d=i(4968),T=i(3085),b=i(9300),S=i(2539),z=i(2536),y=i(3303),g=i(3187),O=i(445),_=i(4903),E=i(1102),I=i(6287);const B=["*"],G=["collapseHeader"];function V(e,s){if(1&e&&(t.ynx(0),t._UZ(1,"span",7),t.BQk()),2&e){const n=s.$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("nzType",n||"right")("nzRotate",o.nzActive?90:0)}}function W(e,s){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,V,2,2,"ng-container",3),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",n.nzExpandedIcon)}}function X(e,s){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Oqu(n.nzHeader)}}function K(e,s){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const n=t.oxw(2);t.xp6(1),t.Oqu(n.nzExtra)}}function tt(e,s){if(1&e&&(t.TgZ(0,"div",8),t.YNc(1,K,2,1,"ng-container",3),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",n.nzExtra)}}const U="collapse";let P=(()=>{class e{constructor(n,o,a,c){this.nzConfigService=n,this.cdr=o,this.directionality=a,this.destroy$=c,this._nzModuleName=U,this.nzAccordion=!1,this.nzBordered=!0,this.nzGhost=!1,this.nzExpandIconPosition="left",this.dir="ltr",this.listOfNzCollapsePanelComponent=[],this.nzConfigService.getConfigChangeEventForComponent(U).pipe((0,T.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){this.directionality.change?.pipe((0,T.R)(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.dir=this.directionality.value}addPanel(n){this.listOfNzCollapsePanelComponent.push(n)}removePanel(n){this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(n),1)}click(n){this.nzAccordion&&!n.nzActive&&this.listOfNzCollapsePanelComponent.filter(o=>o!==n).forEach(o=>{o.nzActive&&(o.nzActive=!1,o.nzActiveChange.emit(o.nzActive),o.markForCheck())}),n.nzActive=!n.nzActive,n.nzActiveChange.emit(n.nzActive)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(z.jY),t.Y36(t.sBO),t.Y36(O.Is,8),t.Y36(y.kn))},e.\u0275cmp=t.Xpm({type:e,selectors:[["nz-collapse"]],hostAttrs:[1,"ant-collapse"],hostVars:10,hostBindings:function(n,o){2&n&&t.ekj("ant-collapse-icon-position-left","left"===o.nzExpandIconPosition)("ant-collapse-icon-position-right","right"===o.nzExpandIconPosition)("ant-collapse-ghost",o.nzGhost)("ant-collapse-borderless",!o.nzBordered)("ant-collapse-rtl","rtl"===o.dir)},inputs:{nzAccordion:"nzAccordion",nzBordered:"nzBordered",nzGhost:"nzGhost",nzExpandIconPosition:"nzExpandIconPosition"},exportAs:["nzCollapse"],features:[t._Bn([y.kn])],ngContentSelectors:B,decls:1,vars:0,template:function(n,o){1&n&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),(0,p.gn)([(0,z.oS)(),(0,g.yF)()],e.prototype,"nzAccordion",void 0),(0,p.gn)([(0,z.oS)(),(0,g.yF)()],e.prototype,"nzBordered",void 0),(0,p.gn)([(0,z.oS)(),(0,g.yF)()],e.prototype,"nzGhost",void 0),e})();const Y="collapsePanel";let nt=(()=>{class e{constructor(n,o,a,c,h,C){this.nzConfigService=n,this.ngZone=o,this.cdr=a,this.destroy$=c,this.nzCollapseComponent=h,this.noAnimation=C,this._nzModuleName=Y,this.nzActive=!1,this.nzDisabled=!1,this.nzShowArrow=!0,this.nzActiveChange=new t.vpe,this.nzConfigService.getConfigChangeEventForComponent(Y).pipe((0,T.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}markForCheck(){this.cdr.markForCheck()}ngOnInit(){this.nzCollapseComponent.addPanel(this),this.ngZone.runOutsideAngular(()=>(0,d.R)(this.collapseHeader.nativeElement,"click").pipe((0,b.h)(()=>!this.nzDisabled),(0,T.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>{this.nzCollapseComponent.click(this),this.cdr.markForCheck()})}))}ngOnDestroy(){this.nzCollapseComponent.removePanel(this)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(z.jY),t.Y36(t.R0b),t.Y36(t.sBO),t.Y36(y.kn),t.Y36(P,1),t.Y36(_.P,8))},e.\u0275cmp=t.Xpm({type:e,selectors:[["nz-collapse-panel"]],viewQuery:function(n,o){if(1&n&&t.Gf(G,7),2&n){let a;t.iGM(a=t.CRH())&&(o.collapseHeader=a.first)}},hostAttrs:[1,"ant-collapse-item"],hostVars:6,hostBindings:function(n,o){2&n&&t.ekj("ant-collapse-no-arrow",!o.nzShowArrow)("ant-collapse-item-active",o.nzActive)("ant-collapse-item-disabled",o.nzDisabled)},inputs:{nzActive:"nzActive",nzDisabled:"nzDisabled",nzShowArrow:"nzShowArrow",nzExtra:"nzExtra",nzHeader:"nzHeader",nzExpandedIcon:"nzExpandedIcon"},outputs:{nzActiveChange:"nzActiveChange"},exportAs:["nzCollapsePanel"],features:[t._Bn([y.kn])],ngContentSelectors:B,decls:8,vars:8,consts:[["role","button",1,"ant-collapse-header"],["collapseHeader",""],[4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-collapse-extra",4,"ngIf"],[1,"ant-collapse-content"],[1,"ant-collapse-content-box"],["nz-icon","",1,"ant-collapse-arrow",3,"nzType","nzRotate"],[1,"ant-collapse-extra"]],template:function(n,o){1&n&&(t.F$t(),t.TgZ(0,"div",0,1),t.YNc(2,W,2,1,"div",2),t.YNc(3,X,2,1,"ng-container",3),t.YNc(4,tt,2,1,"div",4),t.qZA(),t.TgZ(5,"div",5)(6,"div",6),t.Hsn(7),t.qZA()()),2&n&&(t.uIk("aria-expanded",o.nzActive),t.xp6(2),t.Q6J("ngIf",o.nzShowArrow),t.xp6(1),t.Q6J("nzStringTemplateOutlet",o.nzHeader),t.xp6(1),t.Q6J("ngIf",o.nzExtra),t.xp6(1),t.ekj("ant-collapse-content-active",o.nzActive),t.Q6J("@.disabled",null==o.noAnimation?null:o.noAnimation.nzNoAnimation)("@collapseMotion",o.nzActive?"expanded":"hidden"))},dependencies:[v.O5,E.Ls,I.f],encapsulation:2,data:{animation:[S.J_]},changeDetection:0}),(0,p.gn)([(0,g.yF)()],e.prototype,"nzActive",void 0),(0,p.gn)([(0,g.yF)()],e.prototype,"nzDisabled",void 0),(0,p.gn)([(0,z.oS)(),(0,g.yF)()],e.prototype,"nzShowArrow",void 0),e})(),et=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[O.vT,v.ez,E.PV,I.T,_.g]}),e})();var ot=i(834),it=i(6152),at=i(8521),rt=i(1243),st=i(6672),pt=i(8800),j=i(9155),L=i(8074),lt=i(8041),ct=i(5156),J=i(9651),dt=i(9559),w=i(6616),H=i(7044),Z=i(6675);function ht(e,s){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA()()),2&e){const n=s.$implicit;t.xp6(2),t.Oqu(n.column_name),t.xp6(2),t.Oqu(n.description),t.xp6(2),t.Oqu(n.required)}}i(9553);let Q=(()=>{class e{constructor(n,o,a,c,h){this.modal=n,this.msgSrv=o,this.http=a,this.cache=c,this.i18n=h,this.url="/api/transactions/import",this.dataSet=[{column_name:this.i18n.fanyi("app.import.date"),description:this.i18n.fanyi("app.import.date.help"),required:"Y"},{column_name:this.i18n.fanyi("app.import.ledger"),description:this.i18n.fanyi("app.import.ledger.help"),required:"N"},{column_name:this.i18n.fanyi("app.import.category"),description:this.i18n.fanyi("app.import.category.help"),required:"Y"},{column_name:this.i18n.fanyi("app.import.type"),description:this.i18n.fanyi("app.import.type.help"),required:"Y"},{column_name:this.i18n.fanyi("app.import.amount"),description:this.i18n.fanyi("app.import.amount.help"),required:"Y"},{column_name:this.i18n.fanyi("app.import.currency"),description:this.i18n.fanyi("app.import.currency.help"),required:"N"},{column_name:this.i18n.fanyi("app.import.tags"),description:this.i18n.fanyi("app.import.tags.help"),required:"N"},{column_name:this.i18n.fanyi("app.import.description"),description:this.i18n.fanyi("app.import.description.help"),required:"N"},{column_name:this.i18n.fanyi("app.import.remark"),description:this.i18n.fanyi("app.import.remark.help"),required:"N"},{column_name:this.i18n.fanyi("app.import.account_id"),description:this.i18n.fanyi("app.import.account_id.help"),required:"N"},{column_name:this.i18n.fanyi("app.import.to_account_id"),description:this.i18n.fanyi("app.import.to_account_id.help"),required:this.i18n.fanyi("app.import.to_account_id.required")}],this.online_template_url=lt.f.importTemplateUrl}handleChange({file:n}){const a=n.status;if("done"===a)if(n.response.code)this.msgSrv.error(`${n.name}: ${n.response.message}`);else if(0===n.response.fail)this.msgSrv.success(`${n.name}`);else{const c=n.response.fail_list[0];this.msgSrv.error(`${n.name}: [${c.data.toString()}] ${c.reason}`)}else"error"===a&&this.msgSrv.error(`${n.name} file upload failed.`)}close(){this.modal.destroy()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(ct.Lf),t.Y36(J.dD),t.Y36(u.lP),t.Y36(dt.Q),t.Y36(u.Oi))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-record-import"]],decls:38,vars:33,consts:[[1,"modal-header"],[1,"modal-title"],["target","_blank","nz-button","",3,"href"],["down-file","","http-url","./assets/import-template.csv","file-name","CashWarden Import Template.csv"],[3,"nzHeader","nzActive"],["nzSize","small",3,"nzData","nzShowPagination"],["basicTable",""],[4,"ngFor","ngForOf"],["nzType","drag","nzAccept",".csv",3,"nzAction","nzChange"],[1,"ant-upload-drag-icon"],["nz-icon","","nzType","inbox"],[1,"ant-upload-text"],[1,"ant-upload-hint"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2),t.ALo(3,"i18n"),t.qZA()(),t.TgZ(4,"p")(5,"a",2),t._uU(6),t.ALo(7,"i18n"),t.qZA(),t.TgZ(8,"a",3),t._uU(9),t.ALo(10,"i18n"),t.qZA()(),t.TgZ(11,"nz-collapse")(12,"nz-collapse-panel",4),t.ALo(13,"i18n"),t.TgZ(14,"nz-table",5,6)(16,"thead")(17,"tr")(18,"th"),t._uU(19),t.ALo(20,"i18n"),t.qZA(),t.TgZ(21,"th"),t._uU(22),t.ALo(23,"i18n"),t.qZA(),t.TgZ(24,"th"),t._uU(25),t.ALo(26,"i18n"),t.qZA()()(),t.TgZ(27,"tbody"),t.YNc(28,ht,7,3,"tr",7),t.qZA()()()(),t.TgZ(29,"nz-upload",8),t.NdJ("nzChange",function(c){return o.handleChange(c)}),t.TgZ(30,"p",9),t._UZ(31,"i",10),t.qZA(),t.TgZ(32,"p",11),t._uU(33),t.ALo(34,"i18n"),t.qZA(),t.TgZ(35,"p",12),t._uU(36),t.ALo(37,"i18n"),t.qZA()()),2&n){const a=t.MAs(15);t.xp6(2),t.hij(" ",t.lcZ(3,15,"app.import.title")," "),t.xp6(3),t.Q6J("href",o.online_template_url,t.LSH),t.xp6(1),t.hij(" ",t.lcZ(7,17,"app.import.download.online.template")," "),t.xp6(3),t.hij(" ",t.lcZ(10,19,"app.import.download.template")," "),t.xp6(3),t.Q6J("nzHeader",t.lcZ(13,21,"app.import.template.title"))("nzActive",!1),t.xp6(2),t.Q6J("nzData",o.dataSet)("nzShowPagination",!1),t.xp6(5),t.hij(" ",t.lcZ(20,23,"app.import.template.field")," "),t.xp6(3),t.hij(" ",t.lcZ(23,25,"app.import.template.description")," "),t.xp6(3),t.hij(" ",t.lcZ(26,27,"app.import.template.required")," "),t.xp6(3),t.Q6J("ngForOf",a.data),t.xp6(1),t.Q6J("nzAction",o.url),t.xp6(4),t.hij(" ",t.lcZ(34,29,"app.import.upload.text")," "),t.xp6(3),t.hij(" ",t.lcZ(37,31,"app.import.upload.hint")," ")}},dependencies:[v.sg,w.ix,H.w,Z.N8,Z.Uo,Z._C,Z.Om,Z.p0,Z.$Z,E.Ls,nt,P,j.FY,m,u.Ck],encapsulation:2}),e})();var $=i(3567),mt=i(9903),ut=i(7579),ft=i(1811),gt=i(1971),vt=i(7570),zt=i(3402),yt=i(5788);let q=(()=>{class e{constructor(n,o,a,c,h,C){this.http=n,this.msg=o,this.modal=a,this.cdr=c,this.xlsx=h,this.i18n=C,this.resetSubjectValue=new ut.x,this.url="/api/records",this.q={page:1,page_size:20,expand:"transaction,account,category,ledger",keywords:"",exclude_from_stats:""},this.loading=!0,this.list=[],this.types=[],this.base=(0,$.p$)(this.q),this.statuses=[{value:!0,label:this.i18n.fanyi("app.status.active")},{value:!1,label:this.i18n.fanyi("app.status.inactive")}]}form(n={}){this.modal.create(L.y,{record:n.transaction},{size:"md"}).subscribe(()=>{this.q.page=1,this.resetSubjectValue.next(this.q),this.cdr.detectChanges()})}import(){this.modal.create(Q,{},{size:"lg"}).subscribe(()=>{this.q.page=1,this.resetSubjectValue.next(this.q),this.cdr.detectChanges()})}export(){const n=[[this.i18n.fanyi("app.import.date"),this.i18n.fanyi("app.import.ledger"),this.i18n.fanyi("app.import.category"),this.i18n.fanyi("app.import.type"),this.i18n.fanyi("app.import.amount"),this.i18n.fanyi("app.import.currency_code"),this.i18n.fanyi("app.import.tags"),this.i18n.fanyi("app.import.description"),this.i18n.fanyi("app.import.remark"),this.i18n.fanyi("app.import.account_id"),this.i18n.fanyi("app.import.to_account_id")]];this.http.get(`${this.url}/export`,this.q).subscribe(o=>{const a=n.concat(o),c=mt.lI.format(new Date,"yyyyMMddHH");this.xlsx.export({sheets:[{data:a,name:"sheet name"}],opts:{bookType:"csv"},filename:`CashWarden_Export_${c}.csv`})})}reloadData(n){n&&(this.q.page=1,this.q=n,this.resetSubjectValue.next(this.q))}reset(){this.q=(0,$.p$)(this.base)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.lP),t.Y36(J.dD),t.Y36(u.Te),t.Y36(t.sBO),t.Y36(r.be),t.Y36(u.Oi))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-record-index"]],decls:23,vars:17,consts:[[1,"pt-md"],[3,"nzBordered"],[3,"q","searched","rested"],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","plus"],[1,"mx-sm"],["nz-button","",3,"click"],["nz-icon","","nzType","upload"],["nz-button","",3,"nz-tooltip","click"],["nz-icon","","nzType","download"],[3,"q","resetSubject"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"nz-card",1)(2,"record-search",2),t.NdJ("searched",function(c){return o.reloadData(c)})("rested",function(c){return o.reloadData(c)}),t.qZA(),t.TgZ(3,"button",3),t.NdJ("click",function(){return o.form()}),t._UZ(4,"i",4),t.TgZ(5,"span"),t._uU(6),t.ALo(7,"i18n"),t.qZA()(),t.TgZ(8,"span",5)(9,"nz-button-group")(10,"button",6),t.NdJ("click",function(){return o.import()}),t._UZ(11,"i",7),t.TgZ(12,"span"),t._uU(13),t.ALo(14,"i18n"),t.qZA()(),t.TgZ(15,"button",8),t.NdJ("click",function(){return o.export()}),t.ALo(16,"i18n"),t._UZ(17,"i",9),t.TgZ(18,"span"),t._uU(19),t.ALo(20,"i18n"),t.qZA()()()(),t.TgZ(21,"div",0),t._UZ(22,"record-table",10),t.qZA()()()),2&n&&(t.xp6(1),t.Q6J("nzBordered",!1),t.xp6(1),t.Q6J("q",o.q),t.xp6(1),t.Q6J("nzType","primary"),t.xp6(3),t.Oqu(t.lcZ(7,9,"app.form.create")),t.xp6(7),t.Oqu(t.lcZ(14,11,"app.form.import")),t.xp6(2),t.Q6J("nz-tooltip",t.lcZ(16,13,"app.form.export.help")),t.xp6(4),t.Oqu(t.lcZ(20,15,"app.form.export")),t.xp6(3),t.Q6J("q",o.q)("resetSubject",o.resetSubjectValue))},dependencies:[w.ix,w.fY,H.w,ft.dQ,gt.bd,vt.SY,E.Ls,zt.M,yt.C,u.Ck],encapsulation:2,changeDetection:0}),e})();var k=i(9132);const Ct=[{path:"index",component:q}];let At=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[k.Bz.forChild(Ct),k.Bz]}),e})(),xt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.m8,At,f.mS,st.X,pt.ZJ,it.Ph,at.aF,rt.m,ot.Hb,r.jy,et,j.cS,x]}),e})()},4327:function(R,D){var t;void 0!==(t=function(){"use strict";function A(r,l,f){var p=new XMLHttpRequest;p.open("GET",r),p.responseType="blob",p.onload=function(){x(p.response,l,f)},p.onerror=function(){console.error("could not download file")},p.send()}function u(r){var l=new XMLHttpRequest;l.open("HEAD",r,!1);try{l.send()}catch{}return 200<=l.status&&299>=l.status}function v(r){try{r.dispatchEvent(new MouseEvent("click"))}catch{var l=document.createEvent("MouseEvents");l.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),r.dispatchEvent(l)}}var m="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,M=m.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),x=m.saveAs||("object"!=typeof window||window!==m?function(){}:"download"in HTMLAnchorElement.prototype&&!M?function(r,l,f){var p=m.URL||m.webkitURL,d=document.createElement("a");d.download=l=l||r.name||"download",d.rel="noopener","string"==typeof r?(d.href=r,d.origin===location.origin?v(d):u(d.href)?A(r,l,f):v(d,d.target="_blank")):(d.href=p.createObjectURL(r),setTimeout(function(){p.revokeObjectURL(d.href)},4e4),setTimeout(function(){v(d)},0))}:"msSaveOrOpenBlob"in navigator?function(r,l,f){if(l=l||r.name||"download","string"!=typeof r)navigator.msSaveOrOpenBlob(function F(r,l){return typeof l>"u"?l={autoBom:!1}:"object"!=typeof l&&(console.warn("Deprecated: Expected third argument to be a object"),l={autoBom:!l}),l.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type)?new Blob(["\ufeff",r],{type:r.type}):r}(r,f),l);else if(u(r))A(r,l,f);else{var p=document.createElement("a");p.href=r,p.target="_blank",setTimeout(function(){v(p)})}}:function(r,l,f,p){if((p=p||open("","_blank"))&&(p.document.title=p.document.body.innerText="downloading..."),"string"==typeof r)return A(r,l,f);var d="application/octet-stream"===r.type,T=/constructor/i.test(m.HTMLElement)||m.safari,b=/CriOS\/[\d]+/.test(navigator.userAgent);if((b||d&&T||M)&&typeof FileReader<"u"){var S=new FileReader;S.onloadend=function(){var g=S.result;g=b?g:g.replace(/^data:[^;]*;/,"data:attachment/file;"),p?p.location.href=g:location=g,p=null},S.readAsDataURL(r)}else{var z=m.URL||m.webkitURL,y=z.createObjectURL(r);p?p.location=y:location.href=y,p=null,setTimeout(function(){z.revokeObjectURL(y)},4e4)}});m.saveAs=x.saveAs=x,R.exports=x}.apply(D,[]))&&(R.exports=t)}}]);