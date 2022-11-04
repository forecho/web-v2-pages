"use strict";(self.webpackChunkcashwarden_web_ng=self.webpackChunkcashwarden_web_ng||[]).push([[462],{462:(P,p,o)=>{o.r(p),o.d(p,{CurrencyModule:()=>H});var A=o(8418),m=o(9132),a=o(9094),n=o(4650),M=o(5156),h=o(9651),g=o(6895),d=o(433),f=o(1098),F=o(6704),y=o(6616),_=o(7044),C=o(1811),z=o(5635),v=o(8231),J=o(409);function O(e,i){1&e&&(n.TgZ(0,"div",13),n._uU(1),n.ALo(2,"i18n"),n.qZA()),2&e&&(n.xp6(1),n.hij(" ",n.lcZ(2,1,"app.currency.update"),""))}function Q(e,i){1&e&&(n.TgZ(0,"div",13),n._uU(1),n.ALo(2,"i18n"),n.qZA()),2&e&&(n.xp6(1),n.Oqu(n.lcZ(2,1,"app.currency.create")))}function Y(e,i){if(1&e&&n._UZ(0,"nz-option",14),2&e){const t=i.$implicit;n.Q6J("nzLabel",t.label)("nzValue",t.value)}}function I(e,i){1&e&&n._UZ(0,"nz-spin",15)}function S(e,i){if(1&e&&n._uU(0),2&e){const t=n.oxw(2);n.hij("1",t.form.currency_code_from,"=")}}function L(e,i){if(1&e){const t=n.EpF();n.TgZ(0,"se",16),n.ALo(1,"i18n"),n.ALo(2,"i18n"),n.TgZ(3,"nz-input-group",17)(4,"input",18),n.NdJ("ngModelChange",function(s){n.CHM(t);const c=n.oxw();return n.KtG(c.form.rate=s)}),n.qZA()(),n.YNc(5,S,1,1,"ng-template",null,19,n.W1O),n.qZA()}if(2&e){const t=n.MAs(6),r=n.oxw();n.Q6J("label",n.lcZ(1,5,"app.currency.rate"))("optionalHelp",n.lcZ(2,7,"app.currency.rate.help")),n.xp6(3),n.Q6J("nzAddOnBefore",t)("nzAddOnAfter",r.form.currency_code_to),n.xp6(1),n.Q6J("ngModel",r.form.rate)}}o(9553);let Z=(()=>{class e{constructor(t,r,s,c,l){this.modal=t,this.msgSrv=r,this.http=s,this.cdr=c,this.i18n=l,this.api="/api/currencies",this.record={},this.form={currency_code_from:"",currency_code_to:"",rate:0},this.currencies=[],this.base_currency_code="",this.loading=!1}ngOnInit(){this.record.id&&(this.form=this.record,this.currencies.push(this.record.currency_code_from)),this.form.currency_code_to=this.base_currency_code}save(t){this.http.request(this.record.id?"put":"post",`${this.api}${this.record.id?`/${this.record.id}`:""}`,{body:t}).subscribe(c=>{c.code||(this.msgSrv.success(this.i18n.fanyi("app.form.save-success")),this.modal.close(c))})}changeCurrency(t){this.loading=!0,this.http.get(`${this.api}/rate/${t}/${this.form.currency_code_to}`).subscribe(r=>{this.form.rate=r.rate,this.loading=!1,this.cdr.detectChanges()})}close(){this.modal.destroy()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(M.Lf),n.Y36(h.dD),n.Y36(a.lP),n.Y36(n.sBO),n.Y36(a.Oi))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-currency-form"]],decls:21,vars:20,consts:[[1,"modal-header"],["class","modal-title",4,"ngIf"],["nz-form","","se-container","1.0","labelWidth","150",3,"ngSubmit"],["f","ngForm"],[3,"label"],["type","text","nz-input","","name","currency_code_to","disabled","",3,"ngModel","ngModelChange"],["name","currency_code_from","required","","nzShowSearch","",3,"ngModel","ngModelChange"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzSimple","","style","padding-top: 1rem",4,"ngIf"],[3,"label","optionalHelp",4,"ngIf"],["col","1"],["nz-button","","type","button",3,"click"],["nz-button","","nzType","primary",3,"disabled"],[1,"modal-title"],[3,"nzLabel","nzValue"],["nzSimple","",2,"padding-top","1rem"],[3,"label","optionalHelp"],[3,"nzAddOnBefore","nzAddOnAfter"],["type","number","nz-input","","name","rate","required","",3,"ngModel","ngModelChange"],["addOnBefore",""]],template:function(t,r){if(1&t&&(n.TgZ(0,"div",0),n.YNc(1,O,3,3,"div",1),n.YNc(2,Q,3,3,"div",1),n.qZA(),n.TgZ(3,"form",2,3),n.NdJ("ngSubmit",function(){return r.save(r.form)}),n.TgZ(5,"se",4),n.ALo(6,"i18n"),n.TgZ(7,"input",5),n.NdJ("ngModelChange",function(c){return r.form.currency_code_to=c}),n.qZA()(),n.TgZ(8,"se",4),n.ALo(9,"i18n"),n.TgZ(10,"nz-select",6),n.NdJ("ngModelChange",function(c){return r.form.currency_code_from=c})("ngModelChange",function(c){return r.changeCurrency(c)}),n.YNc(11,Y,1,2,"nz-option",7),n.qZA(),n.YNc(12,I,1,0,"nz-spin",8),n.qZA(),n.YNc(13,L,7,9,"se",9),n.TgZ(14,"se",10)(15,"button",11),n.NdJ("click",function(){return r.close()}),n._uU(16),n.ALo(17,"i18n"),n.qZA(),n.TgZ(18,"button",12),n._uU(19),n.ALo(20,"i18n"),n.qZA()()()),2&t){const s=n.MAs(4);n.xp6(1),n.Q6J("ngIf",r.record.id),n.xp6(1),n.Q6J("ngIf",!r.record.id),n.xp6(3),n.Q6J("label",n.lcZ(6,12,"app.currency.base_currency")),n.xp6(2),n.Q6J("ngModel",r.form.currency_code_to),n.xp6(1),n.Q6J("label",n.lcZ(9,14,"app.currency.currency")),n.xp6(2),n.Q6J("ngModel",r.form.currency_code_from),n.xp6(1),n.Q6J("ngForOf",r.currencies),n.xp6(1),n.Q6J("ngIf",r.loading),n.xp6(1),n.Q6J("ngIf",r.form.currency_code_from&&!r.loading),n.xp6(3),n.Oqu(n.lcZ(17,16,"app.form.close")),n.xp6(2),n.Q6J("disabled",s.invalid),n.xp6(1),n.Oqu(n.lcZ(20,18,"app.form.save"))}},dependencies:[g.sg,g.O5,d._Y,d.Fj,d.wV,d.JJ,d.JL,d.Q7,d.On,d.F,f.nV,f.d_,F.Lr,y.ix,_.w,C.dQ,z.Zp,z.gB,v.Ip,v.Vq,J.W,a.Ck],encapsulation:2}),e})();var N=o(9559),T=o(1427),x=o(3679),B=o(1971);function $(e,i){if(1&e&&n._uU(0),2&e){const t=i.$implicit;n.lnq(" 1 ",t.currency_code_from," = ",t.rate," ",t.currency_code_to," ")}}const U=function(){return{xs:6,sm:16,md:24,lg:32}};const V=[{path:"index",component:(()=>{class e{constructor(t,r,s,c,l,D,G){this.http=t,this.modal=r,this.cache=s,this.msg=c,this.cdr=l,this.settingsService=D,this.i18n=G,this.api="/api/currencies",this.loading=!0,this.list=[],this.q={page:1,page_size:100,name:""},this.columns=[{title:this.i18n.fanyi("app.currency.currency"),index:"currency_code_from"},{title:this.i18n.fanyi("app.currency.rate"),index:"rate"},{title:this.i18n.fanyi("app.currency.description"),render:"custom"},{title:this.i18n.fanyi("app.currency.updated_at"),type:"date",index:"updated_at"},{title:"",buttons:[{icon:"edit",click:u=>this.form(u)},{icon:"delete",type:"del",pop:{title:this.i18n.fanyi("app.delete.confirm"),okType:"danger"},click:u=>this.delete(u)}]}],this.base_currency_code="",this.currencies=[]}ngOnInit(){this.index(),this.base_currency_code=this.settingsService.user.currency,this.currencies=this.settingsService.app.currencies.filter(t=>t.value!==this.base_currency_code)}index(){this.loading=!0,this.http.get(this.api,this.q).subscribe(t=>{this.list=t.items,this.loading=!1})}form(t={}){const r=this.list.map(c=>c.currency_code_from),s=this.currencies.filter(c=>!r.includes(c.value));this.modal.create(Z,{record:t,currencies:s,base_currency_code:this.base_currency_code},{size:"md"}).subscribe(c=>{t.id?this.index():(this.list.splice(0,0,c),this.list=[...this.list])})}delete(t){this.http.delete(`${this.api}/${t.id}`).subscribe(r=>{r.code||this.msg.success(this.i18n.fanyi("app.delete.success")),this.index()})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(a.lP),n.Y36(a.Te),n.Y36(N.Q),n.Y36(h.dD),n.Y36(n.sBO),n.Y36(a.gb),n.Y36(a.Oi))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-currency-index"]],decls:11,vars:7,consts:[[1,"pt-lg"],["nz-row","",3,"nzGutter"],["nz-col",""],["nz-button","","nzType","primary",3,"click"],[3,"data","columns"],["st",""],["st-row","custom"]],template:function(t,r){1&t&&(n.TgZ(0,"div",0)(1,"nz-card")(2,"div",1)(3,"div",2)(4,"button",3),n.NdJ("click",function(){return r.form()}),n._uU(5),n.ALo(6,"i18n"),n.qZA()()()()(),n.TgZ(7,"nz-card")(8,"st",4,5),n.YNc(10,$,1,3,"ng-template",6),n.qZA()()),2&t&&(n.xp6(2),n.Q6J("nzGutter",n.DdM(6,U)),n.xp6(3),n.Oqu(n.lcZ(6,4,"app.form.create")),n.xp6(3),n.Q6J("data",r.list)("columns",r.columns))},dependencies:[T.A5,T.wZ,x.t3,x.SK,y.ix,_.w,C.dQ,B.bd,a.Ck],encapsulation:2}),e})()}];let j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[m.Bz.forChild(V),m.Bz]}),e})(),H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[A.m8,j]}),e})()}}]);