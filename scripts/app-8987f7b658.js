/******/!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}// webpackBootstrap
/******/
var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var o=n(1),i=n(2),r=n(3),a=n(4),c=n(6),s=n(7),l=n(8),u=n(5),d=n(9),p=n(10),h=n(11),m=n(12),v=n(13),$=n(14),g=n(15),f=n(16),y=n(17),_=n(18),S=n(19),b=n(20),w=n(21),C=n(22);angular.module("monarchApp",["ngMaterial","ngAnimate","ngCookies","ngSanitize","ngMessages","ngAria","ngResource","angularMoment","ui.router","toastr","LocalStorageModule","ui.ace","firebase"]).constant("moment",moment).constant("keen_project_id","57e6bb3f8db53dfda8a70c6a").constant("keen_read_key","CD887804EA83FC44352DBF6A88DABB0E096C7BDBE3087C684B55CDE7A444856771AD9C60E9A0DC7BE22B6EF9A4C23EAE95D540775DE2C43250AE9F98B5E3B64D43B74A249AFF999F668E5557D257C709725C609A5623E0EA6C3E2055F515A0E7").constant("keen_write_key","AFAF1531EC4B1A99E879B8EB86DD3A53D8724A6FE1FAB0A06E8133EBF66CF957475FB96CB64880EEA8C8E203C4A1273BECF44AE5CDD2189789C6F62509E922D7530AAA74577E6FFA5F26542B49869FF46513DF9B24FD85F57584E8CC50EA36B2").config(o.config).config(i.routerConfig).run(r.runBlock).service("EthereumService",s.EthereumService).service("SecurityService",c.SecurityService).service("MonarchService",u.MonarchService).service("UserService",d.UserService).service("IpfsService",l.IpfsService).controller("FeedController",a.FeedController).controller("LoginController",p.LoginController).controller("LogoutController",h.LogoutController).controller("RegisterController",m.RegisterController).controller("InstallDependenciesController",v.InstallDependenciesController).controller("HistoryController",$.HistoryController).controller("ContentViewV0Controller",y.ContentViewV0Controller).directive("ecContentViewV0",_.ecContentViewV0).controller("TextInputV0Controller",S.TextInputV0Controller).directive("ecTextInputV0",b.ecTextInputV0).controller("BooleanInputV0Controller",w.BooleanInputV0Controller).directive("ecBooleanInputV0",C.ecBooleanInputV0).directive("appNavbar",g.appNavbar).directive("monarchApp",f.monarchApp)},function(t,e){function n(t,e,n,o,i,r){t.debugEnabled(!0),o.allowHtml=!0,o.timeOut=3e3,o.positionClass="toast-top-right",o.preventDuplicates=!0,o.progressBar=!0,i.setPrefix("monarch"),n.theme("monarchAppTheme").primaryPalette("blue",{"default":"700","hue-1":"800","hue-2":"600","hue-3":"A400"}).accentPalette("green",{"default":"400"}).warnPalette("orange").backgroundPalette("grey",{"default":"200","hue-1":"100","hue-2":"200","hue-3":"800"}),n.theme("dark-grey").primaryPalette("blue").accentPalette("light-blue").warnPalette("orange").backgroundPalette("grey").dark(),n.setDefaultTheme("monarchAppTheme")}n.$inject=["$logProvider","$httpProvider","$mdThemingProvider","toastrConfig","localStorageServiceProvider","$mdIconProvider"],e.config=n},function(t,e){function n(t,e){t.state("feed",{url:"/feed",templateUrl:"app/feed/feed.html",controller:"FeedController",controllerAs:"feedCtrl"}).state("login",{url:"/login",templateUrl:"app/user/login/login.html",controller:"LoginController",controllerAs:"loginController"}).state("logout",{url:"/logout",templateUrl:"app/user/logout/logout.html",controller:"LogoutController",controllerAs:"logoutController"}).state("register",{url:"/register",templateUrl:"app/user/register/monarch/register.html",controller:"RegisterController",controllerAs:"registerCtrl"}).state("install",{url:"/install",templateUrl:"app/dependencies/install/install.html",controller:"InstallDependenciesController",controllerAs:"installDependenciesCtrl"}).state("history",{url:"/history",templateUrl:"app/history/history.html",controller:"HistoryController",controllerAs:"historyCtrl"}),e.otherwise("/feed")}n.$inject=["$stateProvider","$urlRouterProvider"],e.routerConfig=n},function(t,e){function n(t,e,n,o,i,r,a,c,s,l){var u=window;o.App={},o.App.Version="0.0.0",o.App.EthereumService=a,o.App.IpfsService=c,o.App.MonarchService=s,o.App.firebaseConfig={apiKey:"AIzaSyDIXrTv0TD9zdaCy5n_QXm6_VMaS-1B3sQ",authDomain:"transmute-industries.firebaseapp.com",databaseURL:"https://transmute-industries.firebaseio.com",storageBucket:"transmute-industries.appspot.com",messagingSenderId:"1068223304219"},o.App.firebase=u.firebase.initializeApp(o.App.firebaseConfig),o.App.Version="0.0.0",o.App.UserService=l;var u=window;o.$watch(function(){return o.App.isMetaMaskInstalled&&o.App.isIPFSInstalled},function(t){o.App.isInstallationComplete=t}),o.$on("$stateChangeStart",function(t,a,c){o.App.isInstallationComplete||(n.debug("meta mask is disabled... "),e(function(){var t=r.simple();t.content("You must install some dependencies."),t.position("top right"),r.show(t),i.go("install")},1e3)),a.redirectTo&&(t.preventDefault(),i.go(a.redirectTo,c,{location:"replace"}))})}n.$inject=["$location","$timeout","$log","$rootScope","$state","$mdToast","EthereumService","IpfsService","MonarchService","UserService"],e.runBlock=n},function(t,e,n){var o=n(5),i=function(){function t(t,e,n,i,r,a,c,s,l,u,d){var p=this;this.$scope=t,this.$mdSidenav=e,this.$http=n,this.$log=i,this.$rootScope=r,this.$timeout=a,this.$interval=c,this.$sce=s,this.$mdDialog=l,this.toastr=u,this.$firebaseObject=d,this.init=function(t){p.$rootScope.App.firebase.database().ref("/accounts/"+t.uid).once("value").then(function(e){var n=e.val();if(p.account=n,n){if(p.$log.debug("syncActivityInstances once..."),n.activity_instances){var o=p.$rootScope.App.firebase.database().ref("/accounts/"+t.uid+"/activity_instances"),i=p.$firebaseObject(o);i.$bindTo(p.$scope,"feedCtrl.activity_instances");var r=window,a=new r.QRious({element:document.getElementById("ethereum_account_qr_code"),value:p.account.ethereum_accounts[0]});p.$log.debug("qr ",a)}else p.$rootScope.App.MonarchService.schedule(n),p.$timeout(function(){p.init(t)},1e3);p.init_complete=!0}else p.$rootScope.App.firebase.database().ref("accounts/"+t.uid).set({uid:t.uid,ethereum_accounts:p.$rootScope.App.EthereumService.accounts,name:"Janet Perkins",image:"/assets/img/avatar.jpeg",activity_suite:p.$rootScope.App.MonarchService.ActivitySuite,activity_instances:[]}),p.$timeout(function(){p.init(t)},1e3)})},this.ct=o.ComponentTypes,this.activity_instances=null,this.init_complete=!1,this.$scope.$watch(function(){return p.$rootScope.App.UserService.user},function(t){t&&!p.init_complete&&p.init(t)})}return t.$inject=["$scope","$mdSidenav","$http","$log","$rootScope","$timeout","$interval","$sce","$mdDialog","toastr","$firebaseObject"],t}();e.FeedController=i},function(t,e){!function(t){t[t.Incomplete=0]="Incomplete",t[t.Complete=1]="Complete"}(e.ActivityInstanceStatus||(e.ActivityInstanceStatus={}));var n=e.ActivityInstanceStatus;!function(t){t[t.text_input_v0=0]="text_input_v0",t[t.boolean_input_v0=1]="boolean_input_v0",t[t.content_view_v0=2]="content_view_v0"}(e.ComponentTypes||(e.ComponentTypes={}));var o=e.ComponentTypes,i=function(){function t(t,e,i,r,a,c,s,l,u,d){var p=this;this.$timeout=t,this.$log=e,this.$http=i,this.$window=r,this.$q=a,this.$rootScope=c,this.keen_project_id=s,this.keen_write_key=l,this.keen_read_key=u,this.$firebaseObject=d,this.waitForKeen=function(){p.$rootScope.$watch(function(){return Keen?Keen:void 0},function(t){t&&p.initKeen()})},this.initKeen=function(){KeenAsync.ready(function(){var t=window;p.keen_async_client=t.keen_client})},this.isSpecInInstances=function(t,e){var n=!1;return e.forEach(function(e){t.schema_config.uid===e.activity_spec.schema_config.uid&&(n=!0)}),n},this.schedule=function(t){t.activity_suite.activity_specs.forEach(function(e){var o=p.$rootScope.App.firebase.database().ref("accounts/"+t.uid),i=o.child("activity_instances").push().key,r=angular.copy({instance_uid:i,account_uid:t.uid,activity_spec:angular.copy(e),capture:{value:null,created:new Date},status:n.Incomplete}),a={};a["/activity_instances/"+i]=r,o.update(a)})},this.captureInstance=function(t){p.$log.debug("capturing instance: ",t);var e=p.$rootScope.App.UserService.user,n=p.$rootScope.App.firebase.database().ref("accounts/"+e.uid),o=n.child("activity_instance_captures").push().key,i={};i["/activity_instance_captures/"+o]=t,n.update(i),p.$rootScope.App.MonarchService.keen_async_client.recordEvent("activity_instance_captures",t),n.child("activity_instances/"+t.instance_uid).remove()};var h="0/120 * * * *";this.ActivitySuite={activity_specs:[{cron_expression:h,expiration_criteria:"NEVER",render_config:{label:"Name",priority:2,md_theme:"dark-grey",icon:"feedback",component:o.text_input_v0},schema_config:{uid:"0",title:"What is your full name?",name:"user_name",type:"string"}},{cron_expression:h,expiration_criteria:"NEVER",render_config:{label:"Date",priority:2,md_theme:"dark-grey",icon:"feedback",component:o.text_input_v0},schema_config:{uid:"0",title:"What is your date of birth?",name:"birthDate",type:"string"}},{cron_expression:h,expiration_criteria:"NEVER",render_config:{label:"Country",priority:2,md_theme:"dark-grey",icon:"feedback",component:o.text_input_v0},schema_config:{uid:"0",title:"What is your country of origin?",name:"originCountry",type:"string"}},{cron_expression:h,expiration_criteria:"NEVER",render_config:{label:"Have Ids?",priority:2,md_theme:"dark-grey",icon:"feedback",component:o.boolean_input_v0},schema_config:{uid:"0",title:"Do you have any identifying documents?",name:"isInPossesionOfExistingIds",type:"string"}},{cron_expression:h,expiration_criteria:"NEVER",render_config:{label:"Are you in need of medical assistance?",priority:1,md_theme:"dark-grey",icon:"healing",component:o.boolean_input_v0},schema_config:{uid:"1",title:"Are you in need of medical assistance?",name:"isInNeedOfMedicalAssistance",type:"boolean"}}]},this.waitForKeen()}return t.$inject=["$timeout","$log","$http","$window","$q","$rootScope","keen_project_id","keen_write_key","keen_read_key","$firebaseObject"],t}();e.MonarchService=i},function(t,e){var n=function(){function t(t,e,n,o,i,r,a,c,s){var l=this;this.$timeout=t,this.$log=e,this.$http=n,this.$window=o,this.$q=i,this.$mdToast=r,this.$state=a,this.$rootScope=c,this.localStorageService=s,this.init=function(){l.$log.debug("SecurityService.init()",sjcl)},this.saveAccountSecret=function(t){l.localStorageService.set("AccountSecret",t)},this.getAccountSecret=function(){return l.localStorageService.get("AccountSecret")},this.encryptObject=function(t,e){var n=JSON.stringify(e),o=sjcl.encrypt(t,n),i=JSON.parse(o);return i},this.decryptObject=function(t,e){var n=sjcl.decrypt(t,JSON.stringify(e));return JSON.parse(n)}}return t.$inject=["$timeout","$log","$http","$window","$q","$mdToast","$state","$rootScope","localStorageService"],t}();e.SecurityService=n},function(t,e){var n=function(){function t(t,e,n,o,i,r,a,c){this.$timeout=t,this.$log=e,this.$http=n,this.$window=o,this.$q=i,this.$mdToast=r,this.$state=a,this.$rootScope=c,this.w=window,this.web3=this.w.web3,this.w.web3&&(this.accounts=this.w.web3.eth.accounts)}return t.$inject=["$timeout","$log","$http","$window","$q","$mdToast","$state","$rootScope"],t}();e.EthereumService=n},function(t,e){var n=function(){function t(t,e,n,o,i,r,a,c){var s=this;this.$timeout=t,this.$log=e,this.$http=n,this.$window=o,this.$q=i,this.$mdToast=r,this.$state=a,this.$rootScope=c;var l=window,u="127.0.0.1",d="5001";this.ipfs=l.IpfsApi(u,d),this.ipfs.id().then(function(t){s.$log.debug("my id is: ",t),s.$rootScope.App.isIPFSInstalled=!0})["catch"](function(t){console.log("Fail: ",t),s.$rootScope.App.isIPFSInstalled=!1})}return t.$inject=["$timeout","$log","$http","$window","$q","$mdToast","$state","$rootScope"],t}();e.IpfsService=n},function(t,e){var n=function(){function t(t,e,n,o,i,r,a){var c=this;this.$log=t,this.$http=e,this.$window=n,this.$q=o,this.$mdToast=i,this.$state=r,this.$rootScope=a,this.toastLogin=function(){var t=c.$mdToast.simple();t.content("Hello "+c.user.uid),t.position("top right"),c.$mdToast.show(t)},this.loadSessionUser=function(){var t=c.$q.defer();return c.$rootScope.App.firebase.auth().onAuthStateChanged(function(e){e?(c.user=e,c.toastLogin(),t.resolve(c.user)):(c.user=null,t.reject("User is logged out"))}),t.promise},this.loginWithGithub=function(){var t=c.$q.defer(),e=window;new e.firebase.auth.GithubAuthProvider;return c.$rootScope.App.firebase.auth().signInAnonymously()["catch"](function(t){c.$log.error("loginWithGithub failed: ",t)}),t.promise},this.logout=function(){var t=c.$q.defer();return c.$rootScope.App.firebase.auth().signOut().then(function(){t.resolve(!0)},function(e){t.reject(e)}),t.promise}}return t.$inject=["$log","$http","$window","$q","$mdToast","$state","$rootScope"],t}();e.UserService=n},function(t,e){var n=function(){function t(t,e,n,o,i,r,a,c,s){var l=this;this.$scope=t,this.$mdSidenav=e,this.$http=n,this.$log=o,this.$rootScope=i,this.$timeout=r,this.$state=a,this.toastr=c,this.UserService=s,this.loginWithGithub=function(){l.$log.log("LoginController.loginWithGithub"),l.UserService.loginWithGithub().then(function(){l.$state.go("feed")})},o.log("LoginController...",s)}return t.$inject=["$scope","$mdSidenav","$http","$log","$rootScope","$timeout","$state","toastr","UserService"],t}();e.LoginController=n},function(t,e){var n=function(){function t(t,e,n,o,i,r,a,c,s){var l=this;this.$scope=t,this.$mdSidenav=e,this.$http=n,this.$log=o,this.$rootScope=i,this.$timeout=r,this.$state=a,this.toastr=c,this.UserService=s,this.logoutUser=function(){l.$log.log("LogoutController.logoutUser"),l.UserService.logout().then(function(){l.$state.go("feed")})},o.log("LogoutController...",s),this.logoutUser()}return t.$inject=["$scope","$mdSidenav","$http","$log","$rootScope","$timeout","$state","toastr","UserService"],t}();e.LogoutController=n},function(t,e){var n=function(){function t(t,e,n,o,i,r,a,c,s){var l=this;this.$scope=t,this.$mdSidenav=e,this.$http=n,this.$log=o,this.$rootScope=i,this.$timeout=r,this.$state=a,this.toastr=c,this.UserService=s,this.registerUser=function(){l.$log.debug("Register the user...")},o.log("RegisterController...")}return t.$inject=["$scope","$mdSidenav","$http","$log","$rootScope","$timeout","$state","toastr","UserService"],t}();e.RegisterController=n},function(t,e){var n=function(){function t(t,e,n,o,i,r,a,c,s){var l=this;this.$scope=t,this.$mdSidenav=e,this.$http=n,this.$log=o,this.$rootScope=i,this.$timeout=r,this.$state=a,this.toastr=c,this.UserService=s,this.watchDependencies=function(){l.$scope.$watch(function(){return l.$rootScope.App.isMetaMaskInstalled&&l.$rootScope.App.isIPFSInstalled},function(t){l.isInstallationComplete=t})},this.aceLoaded=function(t){t.setReadOnly(!0);var e=t.getSession(),n=t.renderer;e.setUndoManager(new ace.UndoManager),n.setShowGutter(!1)},o.log("InstallDependenciesController..."),this.watchDependencies()}return t.$inject=["$scope","$mdSidenav","$http","$log","$rootScope","$timeout","$state","toastr","UserService"],t}();e.InstallDependenciesController=n},function(t,e){var n=function(){function t(t,e,n,o,i,r,a,c,s,l,u){var d=this;this.$scope=t,this.$mdSidenav=e,this.$http=n,this.$log=o,this.$rootScope=i,this.$timeout=r,this.$state=a,this.toastr=c,this.UserService=s,this.keen_project_id=l,this.keen_read_key=u,this.loadHistory=function(){},this.countUserInstances=function(){var t=new Keen({projectId:d.keen_project_id,readKey:d.keen_read_key}),e=(new Keen.Dataviz).el("#chart_1").colors(["#6ab975"]).height(180).type("metric").prepare();t.query("count",{event_collection:"user_instances",timeframe:"this_14_days",timezone:"UTC"}).then(function(t){e.data(t).render()})["catch"](function(t){e.message(t.message)})},this.renderPageViews=function(){var t=new Keen({projectId:d.keen_project_id,readKey:d.keen_read_key}),e=(new Keen.Dataviz).el("#chart_2").colors(["#6ab975"]).height(180).type("area").prepare();t.query("count",{event_collection:"pageviews",interval:"daily",timeframe:"this_14_days"}).then(function(t){e.data(t).render()})["catch"](function(t){e.message(t.message)})},o.log("HistoryController..."),this.renderPageViews(),this.countUserInstances()}return t.$inject=["$scope","$mdSidenav","$http","$log","$rootScope","$timeout","$state","toastr","UserService","keen_project_id","keen_read_key"],t}();e.HistoryController=n},function(t,e){function n(){return{restrict:"E",scope:{},templateUrl:"app/navbar/navbar.html",controller:o,controllerAs:"navbarCtrl",bindToController:!0}}e.appNavbar=n;var o=function(){function t(t,e,n,o,i){this.$window=t,this.$scope=e,this.$log=n,this.$rootScope=o,this.$mdSidenav=i}return t.$inject=["$window","$scope","$log","$rootScope","$mdSidenav"],t}();e.NavbarController=o},function(t,e){function n(){return{restrict:"A",controller:o,controllerAs:"monarchAppCtrl"}}e.monarchApp=n;var o=function(){function t(t,e,n,o,i,r,a){var c=this;this.$state=t,this.$window=e,this.$scope=n,this.$log=o,this.$timeout=i,this.$rootScope=r,this.$mdSidenav=a,this.bodyClass=t.current.name,this.$rootScope.App.UserService.loadSessionUser(),r.$watch(function(){return t.current.name},function(t){t&&(c.bodyClass=t)})}return t.$inject=["$state","$window","$scope","$log","$timeout","$rootScope","$mdSidenav"],t}();e.MonarchAppController=o},function(t,e){var n=function(){function t(t,e,n,o,i,r){var a=this;this.$window=t,this.$scope=e,this.$log=n,this.$rootScope=o,this.$mdSidenav=i,this.$sce=r,this.submit=function(t){a.instance.capture.value=t,a.$rootScope.App.MonarchService.captureInstance(a.instance)},this.video_url=r.trustAsResourceUrl(this.instance.activity_spec.schema_config.video_url)}return t.$inject=["$window","$scope","$log","$rootScope","$mdSidenav","$sce"],t}();e.ContentViewV0Controller=n},function(t,e,n){function o(){return{restrict:"E",scope:{instance:"="},templateUrl:"app/feed/capture/content_view_v0/content_view_v0.partial.html",controller:i.ContentViewV0Controller,controllerAs:"vm",bindToController:!0}}var i=n(17);e.ecContentViewV0=o},function(t,e){var n=function(){function t(t,e,n,o,i,r){var a=this;this.$window=t,this.$scope=e,this.$log=n,this.$rootScope=o,this.$mdSidenav=i,this.$sce=r,this.submit=function(){a.$rootScope.App.MonarchService.captureInstance(a.instance)}}return t.$inject=["$window","$scope","$log","$rootScope","$mdSidenav","$sce"],t}();e.TextInputV0Controller=n},function(t,e,n){function o(){return{restrict:"E",scope:{instance:"="},templateUrl:"app/feed/capture/text_input_v0/text_input_v0.partial.html",controller:i.TextInputV0Controller,controllerAs:"vm",bindToController:!0}}var i=n(19);e.ecTextInputV0=o},function(t,e){var n=function(){function t(t,e,n,o,i,r){var a=this;this.$window=t,this.$scope=e,this.$log=n,this.$rootScope=o,this.$mdSidenav=i,this.$sce=r,this.submit=function(t){a.$log.debug("what instance!!!!",a.instance),a.instance.capture.value=t,a.$rootScope.App.MonarchService.captureInstance(a.instance)}}return t.$inject=["$window","$scope","$log","$rootScope","$mdSidenav","$sce"],t}();e.BooleanInputV0Controller=n},function(t,e,n){function o(){return{restrict:"E",scope:{instance:"="},templateUrl:"app/feed/capture/boolean_input_v0/boolean_input_v0.partial.html",controller:i.BooleanInputV0Controller,controllerAs:"vm",bindToController:!0}}var i=n(21);e.ecBooleanInputV0=o}]),angular.module("monarchApp").run(["$templateCache",function(t){t.put("app/feed/feed.html",'<md-content layout-fill="" layout="column"><app-navbar></app-navbar><canvas id="ethereum_account_qr_code" style="padding-top: 32px;"></canvas><h3 style="text-align: center;">{{feedCtrl.account.name}}</h3><div layout-padding=""><div ng-repeat="instance in feedCtrl.activity_instances"><ec-content-view-v0 ng-if="instance.activity_spec.render_config.component === feedCtrl.ct.content_view_v0" instance="instance"></ec-content-view-v0><ec-text-input-v0 ng-if="instance.activity_spec.render_config.component === feedCtrl.ct.text_input_v0" instance="instance"></ec-text-input-v0><ec-boolean-input-v0 ng-if="instance.activity_spec.render_config.component === feedCtrl.ct.boolean_input_v0" instance="instance"></ec-boolean-input-v0></div></div></md-content>'),t.put("app/history/history.html",'<app-navbar layout="column"></app-navbar><md-content layout="column" layout-fill=""><div layout-margin=""><h3>History</h3></div><md-card class="ec-capture-card" md-theme="monarchAppTheme" md-theme-watch=""><md-card-title><md-card-title-text><span class="md-headline">Title</span></md-card-title-text></md-card-title><md-card-content>some content here...</md-card-content><md-card-actions layout="row" layout-align="end center"><span flex="" layout-padding="">Hello world</span><md-button ng-click="vm.submit(0)" class="">No</md-button><md-button ng-click="vm.submit(1)" class="">Yes</md-button></md-card-actions></md-card><md-card id="chart_1" md-theme="" md-theme-watch=""></md-card><md-card id="chart_2" md-theme="" md-theme-watch=""></md-card></md-content>'),t.put("app/navbar/navbar.html",'<md-toolbar class="app-navbar" layout="row" layout-align="center center" layout-padding=""><a class="brand-link" ui-sref="feed" flex="">Monarch</a> <a class="md-button" ui-sref="history">History</a> <a class="md-button" href="https://github.com/transmute-industries/monarch">Source</a> <a class="md-button" href="http://monarch.transmute.industries">Live</a> <a ng-show="navbarCtrl.$rootScope.App.UserService.user" class="md-button" ui-sref="logout">Logout</a> <a ng-hide="navbarCtrl.$rootScope.App.UserService.user" class="md-button" ui-sref="login">Login</a></md-toolbar>'),t.put("app/dependencies/install/install.html",'<app-navbar layout="column"></app-navbar><md-content layout="column" layout-fill=""><div layout-margin=""><h3 ng-hide="installDependenciesCtrl.isInstallationComplete">Install Dependencies</h3><h3 ng-show="installDependenciesCtrl.isInstallationComplete">Installation Complete</h3></div><md-card ng-hide="installDependenciesCtrl.$rootScope.App.isMetaMaskInstalled" md-theme="monarchAppTheme" md-theme-watch=""><md-card-title><md-card-title-text><span class="md-headline">MetaMask</span></md-card-title-text></md-card-title><md-card-content><h4>Brings Ethereum to your chrome browser.</h4></md-card-content><md-card-actions layout="row" layout-align="end center"><span flex="" layout-padding=""></span><md-button href="https://metamask.io/" class="md-primary md-raised">Install</md-button></md-card-actions></md-card><md-card ng-hide="installDependenciesCtrl.$rootScope.App.isIPFSInstalled" md-theme="monarchAppTheme" md-theme-watch=""><md-card-title><md-card-title-text><span class="md-headline">IPFS</span></md-card-title-text></md-card-title><md-card-content><h4>A peer-to-peer hypermedia protocol to make the web faster, safer, and more open.</h4><div layout-fill="" id="editor" ui-ace="{ useWrapMode : true, showGutter: false, theme:\'twilight\', mode: \'markdown\', firstLineNumber: 5, onLoad: installDependenciesCtrl.aceLoaded, onChange: installDependenciesCtrl.aceChanged }"># Install from https://ipfs.io/ # Configure ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\\"http://localhost:3000\\"]" ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\\"http://monarch.transmute.industries\\"]" # Run ipfs daemon</div></md-card-content><md-card-actions layout="row" layout-align="end center"><span flex="" layout-padding=""></span><md-button href="https://ipfs.io/" class="md-primary md-raised">Install</md-button></md-card-actions></md-card></md-content>'),t.put("app/user/login/login.html",'<app-navbar layout="column"></app-navbar><md-content layout="column" layout-fill=""><div class="login-content" layout="column" flex="" id="login-content" role="main"><md-input-container layout-align="center center"><div layout-margin=""><md-button class="md-primary md-raised md-hue-3" ng-click="loginController.loginWithGithub()">Login</md-button><md-button class="" ui-sref="register">Register</md-button></div></md-input-container></div></md-content>'),t.put("app/user/logout/logout.html","Goodby..."),t.put("app/feed/capture/boolean_input_v0/boolean_input_v0.partial.html",'<md-card class="ec-capture-card" md-theme="{{ vm.instance.activity_spec.render_config.md_theme }}" md-theme-watch=""><md-card-actions layout="row" layout-align="end center"><span flex="" layout-padding="">{{vm.instance.activity_spec.schema_config.title}}</span><md-button ng-click="vm.submit(0)" class="">No</md-button><md-button ng-click="vm.submit(1)" class="">Yes</md-button></md-card-actions></md-card>'),t.put("app/feed/capture/content_view_v0/content_view_v0.partial.html",'<md-card class="ec-capture-card" md-theme="{{ vm.instance.activity_spec.render_config.md_theme }}" md-theme-watch=""><iframe style="min-height: 480px" class="youtube-player" type="text/html" layout-fill="" ng-src="{{vm.video_url}}" frameborder="0" allowfullscreen=""></iframe><md-card-actions layout="row" layout-align="end center"><span flex="" layout-padding="">How likely are you to recommend this video?</span><md-button ng-click="vm.submit(rating)" ng-repeat="rating in [1, 2, 3]" class="">{{rating}}</md-button></md-card-actions></md-card>'),t.put("app/feed/capture/text_input_v0/text_input_v0.partial.html",'<md-card class="ec-capture-card" md-theme="{{ vm.instance.activity_spec.render_config.md_theme }}" md-theme-watch=""><md-card-title><md-card-title-text><span class="md-headline">{{vm.instance.activity_spec.schema_config.title}}</span></md-card-title-text></md-card-title><md-card-content><md-input-container layout-fill=""><label>{{vm.instance.activity_spec.render_config.label}}</label> <input ng-model="vm.instance.capture.value" type="text" flex=""></md-input-container></md-card-content><md-card-actions layout="row" layout-align="end center"><md-button ng-click="vm.submit()" class="">Submit</md-button></md-card-actions></md-card>'),t.put("app/user/register/monarch/register.html",'<app-navbar layout="column"></app-navbar><md-content layout="column" layout-fill=""><div class="login-content" layout="column" flex="" id="login-content" role="main"><md-input-container layout-align="center center"><div layout="row" layout-sm="column" layout-margin=""><md-button class="md-primary md-raised md-hue-3" flex="33" flex-sm="100" ng-click="registerCtrl.registerUser()">Register</md-button></div></md-input-container></div></md-content>')}]);
//# sourceMappingURL=../maps/scripts/app-8987f7b658.js.map