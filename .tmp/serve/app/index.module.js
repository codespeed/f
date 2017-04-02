/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(1);
	
	var _index2 = __webpack_require__(2);
	
	var _index3 = __webpack_require__(3);
	
	var _main = __webpack_require__(4);
	
	var _auth = __webpack_require__(5);
	
	var _page = __webpack_require__(6);
	
	var _event = __webpack_require__(7);
	
	var _profile = __webpack_require__(8);
	
	var _profileUploader = __webpack_require__(9);
	
	var _apply = __webpack_require__(10);
	
	var _navbar = __webpack_require__(11);
	
	var _compareToDirective = __webpack_require__(12);
	
	var _githubContributor = __webpack_require__(13);
	
	var _webDevTec = __webpack_require__(14);
	
	var _navbar2 = __webpack_require__(15);
	
	var _malarkey = __webpack_require__(16);
	
	/* global malarkey:false, moment:false */
	
	angular.module('project1', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'toastr', 'satellizer', 'ngFileUpload']).constant('API_URL', "http://localhost:5000/").constant('malarkey', malarkey).constant('moment', moment).config(_index.config).config(_index2.routerConfig).run(_index3.runBlock).service('githubContributor', _githubContributor.GithubContributorService).service('webDevTec', _webDevTec.WebDevTecService).controller('MainController', _main.MainController).controller('AuthController', _auth.AuthController).controller('PageController', _page.PageController).controller('EventController', _event.EventController).controller('ProfileController', _profile.ProfileController).controller('ApplyController', _apply.ApplyController).controller('NavbarController', _navbar.NavbarController).controller('ProfileUploaderController', _profileUploader.ProfileUploaderController).directive('acmeNavbar', _navbar2.NavbarDirective).directive('acmeMalarkey', _malarkey.MalarkeyDirective).directive('compareTo', _compareToDirective.CompareToDirective).filter('renderHTMLCorrectly', ["$sce", function ($sce) {
	  return function (stringToParse) {
	    return $sce.trustAsHtml(stringToParse);
	  };
	}]);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	config.$inject = ["$logProvider", "toastrConfig", "$authProvider", "API_URL"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.config = config;
	function config($logProvider, toastrConfig, $authProvider, API_URL) {
	  'ngInject';
	  // Enable log
	
	  $logProvider.debugEnabled(true);
	
	  // Set options third-party lib
	  toastrConfig.allowHtml = true;
	  toastrConfig.timeOut = 3000;
	  toastrConfig.positionClass = 'toast-top-right';
	  toastrConfig.preventDuplicates = true;
	  toastrConfig.progressBar = true;
	
	  $authProvider.loginUrl = API_URL + 'auth/login';
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.routerConfig = routerConfig;
	function routerConfig($stateProvider, $urlRouterProvider) {
		'ngInject';
	
		$stateProvider.state('home', {
			url: '/',
			templateUrl: 'app/main/main.html',
			controller: 'MainController',
			controllerAs: 'main'
		}).state('login', {
			url: '/login',
			templateUrl: 'app/auth/auth.html',
			controller: 'AuthController',
			controllerAs: 'auth'
		}).state('registration', {
			url: '/registration',
			templateUrl: 'app/pages/registration.html',
			controller: 'PageController',
			controllerAs: 'page'
		}).state('registration-confirmation', {
			url: '/registration-confirmation',
			templateUrl: 'app/pages/registration-success.html',
			controller: 'PageController',
			controllerAs: 'page'
		}).state('registration-process', {
			url: '/registration-process',
			templateUrl: 'app/pages/registration-process.html',
			controller: 'PageController',
			controllerAs: 'page'
		}).state('about', {
			url: '/about',
			templateUrl: 'app/pages/aboutus.html',
			controller: 'PageController',
			controllerAs: 'about'
		}).state('profile', {
			url: '/profile',
			templateUrl: 'app/profile/profile.html',
			controller: 'ProfileController',
			controllerAs: 'profile'
		}).state('profile-picture', {
			url: '/profile-picture',
			templateUrl: 'app/profile/profile-picture-edit.html',
			controller: 'ProfileController',
			controllerAs: 'profileUploader'
		}).state('apply', {
			url: '/apply',
			templateUrl: 'app/apply/apply.html',
			controller: 'ApplyController',
			controllerAs: 'apply'
		}).state('apply-submitted', {
			url: '/apply-submitted',
			templateUrl: 'app/apply/apply-submitted.html',
			controller: 'ApplyController',
			controllerAs: 'apply'
		}).state('apply-resend', {
			url: '/apply-resend',
			templateUrl: 'app/apply/apply-resend.html',
			controller: 'ApplyController',
			controllerAs: 'apply'
		}).state('apply-updated', {
			url: '/apply-updated',
			templateUrl: 'app/apply/apply-updated.html',
			controller: 'ApplyController',
			controllerAs: 'apply'
		}).state('events', {
			url: '/events',
			templateUrl: 'app/pages/events.html',
			controller: 'EventController',
			controllerAs: 'event'
		}).state('event-selected', {
			url: '/events/:slug',
			templateUrl: 'app/pages/events-selected.html',
			controller: 'EventController',
			controllerAs: 'event'
		});
	
		/*$urlRouterProvider
	         .when("/events/:slug", {
	            templateUrl: 'app/pages/events-selected.html',
	            controller: "EventController",
	            controllerAs: 'event'
	        });*/
	
		$urlRouterProvider.otherwise('/');
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	runBlock.$inject = ["$log"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.runBlock = runBlock;
	function runBlock($log) {
	  'ngInject';
	
	  $log.debug('runBlock end');
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainController = exports.MainController = function () {
		MainController.$inject = ["$http"];
		function MainController($http) {
			'ngInject';
	
			_classCallCheck(this, MainController);
	
			this.$http = $http;
		}
	
		_createClass(MainController, [{
			key: 'postMessage',
			value: function postMessage() {
				this.$http.post('http://ec2-54-186-5-126.us-west-2.compute.amazonaws.com:5000/api/message', { msg: this.message ? this.message : "" });
			}
		}, {
			key: 'getMessages',
			value: function getMessages() {
				var vm = this;
				this.$http.get('http://ec2-54-186-5-126.us-west-2.compute.amazonaws.com:5000/api/message').then(function (result) {
					vm.messages = result.data;
				});
			}
		}]);
	
		return MainController;
	}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AuthController = exports.AuthController = function () {
		AuthController.$inject = ["$auth", "$location"];
		function AuthController($auth, $location) {
			'ngInject';
	
			_classCallCheck(this, AuthController);
	
			this.$auth = $auth;
			this.$location = $location;
			this.invalidAccount = false;
		}
	
		_createClass(AuthController, [{
			key: 'login',
			value: function login() {
				if (this.email == '') {
					alert("Enter email address");
					return;
				}
				if (this.password == '') {
					alert("Enter password");
					return;
				}
	
				var vm = this;
				$(".txt-email, .txt-password").val("");
				this.$auth.login(this.login.user).then(function (token) {
					vm.$auth.setToken(token);
					vm.redirectHomepage();
				}).catch(function (response) {
	
					vm.invalidAccount = true;
					//console.log(response);
				});
			}
		}, {
			key: 'resetAccountValidation',
			value: function resetAccountValidation() {
				this.invalidAccount = false;
			}
		}, {
			key: 'redirectHomepage',
			value: function redirectHomepage() {
				this.$location.path('/');
			}
		}]);
	
		return AuthController;
	}();

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PageController = exports.PageController = function () {
		PageController.$inject = ["$http", "$location", "$log"];
		function PageController($http, $location, $log) {
			'ngInject';
	
			_classCallCheck(this, PageController);
	
			this.$http = $http;
			this.location = location;
			this.$log = $log;
	
			this.fieldset = false;
	
			var verification_code_here = this.getParameterByName('confirmation-code', $location.absUrl());
	
			if (verification_code_here) {
				this.verify_account(verification_code_here);
			} else {
				this.testGenerator();
			}
	
			this.getEstablishment();
		}
	
		_createClass(PageController, [{
			key: 'getParameterByName',
			value: function getParameterByName(name, url) {
				name = name.replace(/[\[\]]/g, "\\$&");
				var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
				    results = regex.exec(url);
				if (!results) return null;
				if (!results[2]) return '';
				return decodeURIComponent(results[2].replace(/\+/g, " "));
			}
		}, {
			key: 'postMessage',
			value: function postMessage() {
				this.$http.post('http://ec2-54-186-5-126.us-west-2.compute.amazonaws.com:5000/api/message', { msg: this.message ? this.message : "" });
			}
		}, {
			key: 'getMessages',
			value: function getMessages() {
				var vm = this;
				this.$http.get('http://ec2-54-186-5-126.us-west-2.compute.amazonaws.com:5000/api/establishments').then(function (result) {
					vm.messages = result.data;
				});
			}
		}, {
			key: 'getEstablishment',
			value: function getEstablishment() {
				var vm = this;
				this.$http.get('http://ec2-54-186-5-126.us-west-2.compute.amazonaws.com:5000/api/establishments').then(function (result) {
					vm.messages = result.data;
				});
			}
		}, {
			key: 'properValue',
			value: function properValue(value) {
				return typeof value != 'undefined' ? value : '';
			}
		}, {
			key: 'testGenerator',
			value: function testGenerator() {
				/*this.username = "test";
	   this.password = "test";
	   this.password_confirm = "test";
	   		this.firstname = "test";
	   this.lastname = "test";
	   this.email = "testuser@127.0.0.1";
	   this.nickname = "test";
	   this.gender = "male";
	   this.birthday = "test";
	   this.status = "single";
	   this.nationality = "test";
	   this.contact = "1234";
	   this.address = "test";
	   this.note = "test";
	   		this.ioe_name = "test";
	   this.ioe_relation = "test";
	   this.ioe_address = "test";
	   this.ioe_contact = "1234";
	   this.ioe_establishment = "test";*/
	
				this.username = "na";
				this.password = "";
				this.password_confirm = "";
	
				this.firstname = "";
				this.lastname = "";
				this.email = "";
				this.nickname = "";
				this.gender = "male";
				//this.birthday = "";
				this.status = "single";
				this.nationality = "";
				this.contact = "";
				this.address = "";
				this.note = "";
				this.month = "0";
				this.day = "0";
				this.year = "0";
	
				this.ioe_name = "";
				this.ioe_relation = "";
				this.ioe_address = "";
				this.ioe_contact = "";
				this.ioe_establishment = "n/a";
			}
		}, {
			key: 'submit',
			value: function submit() {
				var data = {
					username: this.properValue(this.username),
					password: this.properValue(this.password),
					password_confirm: this.properValue(this.password_confirm),
	
					firstname: this.properValue(this.firstname),
					lastname: this.properValue(this.lastname),
					email: this.properValue(this.email),
					nickname: this.properValue(this.nickname),
					gender: this.properValue(this.gender),
					//birthday : this.properValue( this.birthday ),
					birthday: this.month + "-" + this.day + "-" + this.year,
					status: this.properValue(this.status),
					nationality: this.properValue(this.nationality),
					contact: this.properValue(this.contact),
					address: this.properValue(this.address),
					note: this.properValue(this.note),
	
					ioe_name: this.properValue(this.ioe_name),
					ioe_relation: this.properValue(this.ioe_relation),
					ioe_address: this.properValue(this.ioe_address),
					ioe_contact: this.properValue(this.ioe_contact),
					ioe_establishment: this.properValue(this.ioe_establishment),
					type: "Online",
					date_expired_text: "",
					date_expired_number: "",
					d: ""
				};
	
				var validation = this.validateData(data);
	
				if (!validation['valid']) {
					alert(validation['message']);
				} else {
					this.postSubmitApplication(data);
				}
			}
		}, {
			key: 'validateData',
			value: function validateData(data) {
				var valid = true;
				var message = "Validated!";
	
				if (this.username == "") {
					message = "Username is empty!";
				}
				if (this.password == "") {
					message = "Password is empty!";
				}
				if (this.password_confirm == "") {
					message = "Re-type Passowrd";
				}
				if (this.firstname == "") {
					message = "Firstname is empty!";
				}
				if (this.lastname == "") {
					message = "Lastname is empty!";
				}
				if (this.email == "") {
					message = "Middle Name is empty!";
				}
				if (!this.isValidEmailAddress(this.email)) {
					message = "Invalid Email Address";
				}
				if (this.nickname == "") {
					message = "Nick-name is empty!";
				}
				if (this.gender == "") {
					message = "Gender is empty!";
				}
				//if (this.birthday == "") { message = "Birthday is empty!" }
				if (this.status == "") {
					message = "Status is empty!";
				}
				if (this.nationality == "") {
					message = "Nationality is empty!";
				}
				if (this.contact == "") {
					message = "Contact is empty!";
				}
				if (this.address == "") {
					message = "Address is empty!";
				}
				if (this.ioe_name == "") {
					message = "IOE field is empty!";
				}
				if (this.ioe_relation == "") {
					message = "IOE field is empty!";
				}
				if (this.ioe_address == "") {
					message = "IOE field is empty!";
				}
				if (this.ioe_contact == "") {
					message = "IOE field is empty!";
				}
				if (this.ioe_establishment == "") {
					message = "IOE field is empty!";
				}
	
				valid = message != "Validated!" ? false : valid;
				return { valid: valid, message: message };
			}
		}, {
			key: 'postSubmitApplication',
			value: function postSubmitApplication(data) {
				var location = this.location;
				var vm = this;
				this.$http.post('http://ec2-54-186-5-126.us-west-2.compute.amazonaws.com:5000/auth/register', data).success(function () {
					location.href = location.origin + "/#/registration-process";
				}).error(function (err) {
					alert(err['message']);
				});
			}
		}, {
			key: 'verify_account',
			value: function verify_account(code) {
				this.$http.post('http://ec2-54-186-5-126.us-west-2.compute.amazonaws.com:5000/auth/registration-confirmation', { code: code });
			}
		}, {
			key: 'validFields',
			value: function validFields() {
				var data = {
					username: this.properValue(this.username),
					password: this.properValue(this.password),
					password_confirm: this.properValue(this.password_confirm),
					firstname: this.properValue(this.firstname),
					lastname: this.properValue(this.lastname),
					email: this.properValue(this.email),
					nickname: this.properValue(this.nickname),
					gender: this.properValue(this.gender),
					//birthday : this.properValue( this.birthday ),
					status: this.properValue(this.status),
					nationality: this.properValue(this.nationality),
					contact: this.properValue(this.contact),
					address: this.properValue(this.address),
					note: this.properValue(this.note),
					ioe_name: this.properValue(this.ioe_name),
					ioe_relation: this.properValue(this.ioe_relation),
					ioe_address: this.properValue(this.ioe_address),
					ioe_contact: this.properValue(this.ioe_contact),
					ioe_establishment: this.properValue(this.ioe_establishment),
					type: "Online",
					date_expired_text: "",
					date_expired_number: "",
					d: ""
				};
	
				return this.validateData(data)['valid'] ? false : true;
			}
		}, {
			key: 'isValidEmailAddress',
			value: function isValidEmailAddress(emailAddress) {
				var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
				return pattern.test(emailAddress);
			}
		}]);
	
		return PageController;
	}();

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EventController = exports.EventController = function () {
		EventController.$inject = ["$http", "$location", "$log", "$stateParams", "$state", "$sce"];
		function EventController($http, $location, $log, $stateParams, $state, $sce) {
			'ngInject';
	
			_classCallCheck(this, EventController);
	
			this.$http = $http;
			this.location = location;
			this.$log = $log;
			this.events = this.getEvents();
	
			var url_slug = this.location.hash;
			if (url_slug.split("/").length == 3) {
				this.evnt = this.getEvent($state.params.slug);
	
				//console.log(this.evnt);
			}
		}
	
		_createClass(EventController, [{
			key: 'getEvents',
			value: function getEvents() {
				var vm = this;
				this.$http.get('http://ec2-54-186-5-126.us-west-2.compute.amazonaws.com:5000/events').then(function (result) {
					vm.events = result.data;
				});
			}
		}, {
			key: 'getEvent',
			value: function getEvent(slug) {
				var vm = this;
				this.$http.get('http://ec2-54-186-5-126.us-west-2.compute.amazonaws.com:5000/events/' + slug).then(function (result) {
					vm.evnt = result.data;
				});
			}
		}]);
	
		return EventController;
	}();

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ProfileController = exports.ProfileController = function () {
		ProfileController.$inject = ["$http", "$auth"];
		function ProfileController($http, $auth) {
			'ngInject';
	
			_classCallCheck(this, ProfileController);
	
			this.$http = $http;
			this.$auth = $auth;
	
			this.getprofile();
		}
	
		_createClass(ProfileController, [{
			key: 'getprofile',
			value: function getprofile() {
				var vm = this;
				var token = this.$auth.getToken();
				this.$http.post('http://ec2-54-186-5-126.us-west-2.compute.amazonaws.com:5000/api/profile', { token: token }).then(function (result) {
					var data = result.data;
	
					vm.displayProfle(data);
				});
			}
		}, {
			key: 'updateProfile',
			value: function updateProfile() {
				var data = {
					firstname: this.properValue(this.firstname),
					lastname: this.properValue(this.lastname),
					email: this.properValue(this.email),
					nickname: this.properValue(this.nickname),
					gender: this.properValue(this.gender),
					birthday: this.properValue(this.birthday),
					status: this.properValue(this.status),
					nationality: this.properValue(this.nationality),
					contact: this.properValue(this.contact),
					address: this.properValue(this.address),
					note: this.properValue(this.note),
	
					ioe_name: this.properValue(this.ioe_name),
					ioe_relation: this.properValue(this.ioe_relation),
					ioe_address: this.properValue(this.ioe_address),
					ioe_contact: this.properValue(this.ioe_contact),
					ioe_establishment: this.properValue(this.ioe_establishment)
				};
	
				var validation = this.validateData(data);
	
				if (!validation['valid']) {
					alert(validation['message']);
				}
	
				this.updateSubmitApplication(data);
			}
		}, {
			key: 'properValue',
			value: function properValue(value) {
				return typeof value != 'undefined' ? value : '';
			}
		}, {
			key: 'validateData',
			value: function validateData(data) {
				var valid = true;
				var message = "Validated!";
	
				if (data['username'] == "") {
					message = "Empty Username!";
				}
				if (data['firstname'] == "") {
					message = "Empty Firstname!";
				}
				if (data['lastname'] == "") {
					message = "Empty Lastname!";
				}
				if (data['email'] == "") {
					message = "Empty Email Address!";
				}
				if (data['gender'] == "") {
					message = "Empty Email Address!";
				}
				if (data['birthday'] == "") {
					message = "Empty Birthday!";
				}
				if (data['status'] == "") {
					message = "Empty Status!";
				}
				if (data['nationality'] == "") {
					message = "No Nationality";
				}
				if (data['contact'] == "") {
					message = "No Nationality";
				}
	
				valid = message != "Validated!" ? false : valid;
				return { valid: valid, message: message };
			}
		}, {
			key: 'updateSubmitApplication',
			value: function updateSubmitApplication(data) {
				var token = this.$auth.getToken();
				this.$http.post('http://ec2-54-186-5-126.us-west-2.compute.amazonaws.com:5000/api/profile-update', { data: data, token: token }).success(function (result) {
					alert(result.message);
				}).error(function () {
					alert("Unable to Proceed. ");
				});
			}
		}, {
			key: 'displayProfle',
			value: function displayProfle(data) {
				this.firstname = data.firstname;
				this.lastname = data.lastname;
				this.email = data.email;
				this.nickname = data.nickname;
				this.gender = data.gender;
				this.birthday = data.birthday;
				this.status = data.status;
				this.nationality = data.nationality;
				this.contact = data.contact;
				this.address = data.address;
				this.note = data.note;
	
				this.ioe_name = data.ioe_name;
				this.ioe_relation = data.ioe_relation;
				this.ioe_address = data.ioe_address;
				this.ioe_contact = data.ioe_contact;
				this.ioe_establishment = data.ioe_establishment;
			}
		}]);
	
		return ProfileController;
	}();

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ProfileUploaderController = exports.ProfileUploaderController = function () {
		ProfileUploaderController.$inject = ["Upload", "$log", "$scope", "$timeout", "$auth", "$http"];
		function ProfileUploaderController(Upload, $log, $scope, $timeout, $auth, $http) {
			'ngInject';
	
			_classCallCheck(this, ProfileUploaderController);
	
			var vm = this;
	
			this.$log = $log;
			this.$auth = $auth;
			this.$http = $http;
	
			this.getToken = this.$auth.getToken();
			this.username = this.getToken;
	
			this.uploadPic = function (file) {
				file.upload = Upload.upload({
					url: API_URL + '/api/profile-picture-upload',
					data: { username: vm.username, file: file }
				}).then(function (response) {
					$timeout(function () {
						file.result = response.data;
					});
				}, function (response) {
					if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
				}, function (evt) {
					/*Math.min is to fix IE which reports 200% sometimes*/
					file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
				});
			};
	
			this.$http.post(API_URL + '/api/profile-picture', { token: this.getToken }).then(function (result) {
				vm.profilePicture = "http://ec2-54-186-5-126.us-west-2.compute.amazonaws.com:5000/api/profile-picture-img?src=" + result.data.profile_picture;
			});
		}
	
		_createClass(ProfileUploaderController, [{
			key: 'getprofilePicture',
			value: function getprofilePicture() {}
		}]);
	
		return ProfileUploaderController;
	}();

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ApplyController = exports.ApplyController = function () {
		ApplyController.$inject = ["$http", "$auth", "$location"];
		function ApplyController($http, $auth, $location) {
			'ngInject';
	
			_classCallCheck(this, ApplyController);
	
			this.$http = $http;
			this.$auth = $auth;
			this.$location = $location;
			this.location = location;
	
			this.Step1 = 0;
			this.ApplicationStatus = "no";
			//this.hc_job_category = "Non-Food";
			this.getprofile();
		}
	
		_createClass(ApplyController, [{
			key: 'getStep',
			value: function getStep(stem_counter) {
				return stem_counter == this.Step1;
			}
		}, {
			key: 'next',
			value: function next() {
				return this.Step1++;
			}
		}, {
			key: 'prev',
			value: function prev() {
				return this.Step1--;
			}
		}, {
			key: 'getprofile',
			value: function getprofile() {
				var vm = this;
				var token = this.$auth.getToken();
				vm.$http.post('http://ec2-54-186-5-126.us-west-2.compute.amazonaws.com:5000/api/health-card-data', { token: token }).then(function (result) {
					var data = result.data;
					if (!data) {
						vm.$http.post('http://ec2-54-186-5-126.us-west-2.compute.amazonaws.com:5000/api/profile', { token: token }).then(function (result) {
							var data = result.data;
							vm.displayProfle(data);
						});
					} else {
						vm.displayProfle(data);
					}
				});
			}
		}, {
			key: 'displayProfle',
			value: function displayProfle(data) {
				this.hc_lastname = data.hc_lastname ? data.hc_lastname : data.lastname;
				this.hc_firstname = data.hc_firstname ? data.hc_firstname : data.firstname;
				this.hc_middlename = data.hc_middlename ? data.hc_middlename : "";
				//this.hc_age = data.hc_age ? data.hc_age : "";
				this.hc_sex = data.hc_sex ? data.hc_sex : data.gender;
				this.hc_civilstatus = data.hc_civilstatus ? data.hc_civilstatus : data.status;
				this.hc_nationality = data.hc_nationality ? data.hc_nationality : data.nationality;
				this.hc_cedula = data.hc_cedula ? data.hc_cedula : "";
				this.hc_cedula_date_issued = data.hc_cedula_date_issued ? data.hc_cedula_date_issued : "";
				this.hc_OR_fee_number = data.hc_OR_fee_number ? data.hc_OR_fee_number : "";
				this.hc_OR_fee_number_date_issued = data.hc_OR_fee_number_date_issued ? data.hc_OR_fee_number_date_issued : "";
				this.hc_icoe_name = data.hc_icoe_name ? data.hc_icoe_name : data.ioe_name;
				this.hc_icoe_relation = data.hc_icoe_relation ? data.hc_icoe_relation : data.ioe_relation;
				this.hc_icoe_address = data.hc_icoe_address ? data.hc_icoe_address : data.ioe_address;
				this.hc_icoe_contact_number = data.hc_icoe_contact_number ? data.hc_icoe_contact_number : data.ioe_contact;
				this.ApplicationStatus = data.request_status ? data.request_status : "no";
	
				this.hc_business_employment = data.hc_business_employment ? data.hc_business_employment : "";
				this.hc_job_category = data.hc_job_category ? data.hc_job_category : "";
				this.hc_position = data.hc_position ? data.hc_position : "";
				this.hc_ethnic_group = data.hc_ethnic_group ? data.hc_ethnic_group : "";
				this.verification_code = data.verification_code ? data.verification_code : "";
			}
		}, {
			key: 'applicationStatus',
			value: function applicationStatus(status) {
				return this.ApplicationStatus == status;
			}
		}, {
			key: 'submit',
			value: function submit() {
				if (this.hc_contact == "") {
					alert("Contact Number is required*");
					return;
				}
	
				var token = this.$auth.getToken();
	
				var data = {
					hc_lastname: this.properValue(this.hc_lastname),
					hc_firstname: this.properValue(this.hc_firstname),
					hc_middlename: this.properValue(this.hc_middlename),
					//hc_age : this.properValue( this.hc_age ),
					hc_sex: this.properValue(this.hc_sex),
					hc_civilstatus: this.properValue(this.hc_civilstatus),
					hc_nationality: this.properValue(this.hc_nationality),
					hc_cedula: this.properValue(this.hc_cedula),
					hc_cedula_date_issued: this.properValue(this.hc_cedula_date_issued),
					hc_OR_fee_number: this.properValue(this.hc_OR_fee_number),
					hc_OR_fee_number_date_issued: this.properValue(this.hc_OR_fee_number_date_issued),
					hc_icoe_name: this.properValue(this.hc_icoe_name),
					hc_icoe_relation: this.properValue(this.hc_icoe_relation),
					hc_icoe_address: this.properValue(this.hc_icoe_address),
					hc_icoe_contact_number: this.properValue(this.hc_icoe_contact_number),
	
					hc_business_employment: this.properValue(this.hc_business_employment),
					hc_job_category: this.properValue(this.hc_job_category),
					hc_position: this.properValue(this.hc_position),
					hc_ethnic_group: this.properValue(this.hc_ethnic_group),
					d: "",
					m: "",
					y: "",
					hid: ""
				};
	
				var validation = this.validateData(data);
	
				if (!validation['valid']) {
					// alert("Invalid");
					// alert(validation['message']);
				} else {
						// alert("Unable to Proceed. Encountered");
					}
	
				this.postSubmitApplication(data, this.hc_contact, token);
			}
		}, {
			key: 'update',
			value: function update() {
				if (this.hc_contact == "") {
					alert("Contact Number is required*");
					return;
				}
	
				var token = this.$auth.getToken();
	
				var data = {
					hc_lastname: this.properValue(this.hc_lastname),
					hc_firstname: this.properValue(this.hc_firstname),
					hc_middlename: this.properValue(this.hc_middlename),
					//hc_age : this.properValue( this.hc_age ),
					hc_sex: this.properValue(this.hc_sex),
					hc_civilstatus: this.properValue(this.hc_civilstatus),
					hc_nationality: this.properValue(this.hc_nationality),
					hc_cedula: this.properValue(this.hc_cedula),
					hc_cedula_date_issued: this.properValue(this.hc_cedula_date_issued),
					hc_OR_fee_number: this.properValue(this.hc_OR_fee_number),
					hc_OR_fee_number_date_issued: this.properValue(this.hc_OR_fee_number_date_issued),
					hc_icoe_name: this.properValue(this.hc_icoe_name),
					hc_icoe_relation: this.properValue(this.hc_icoe_relation),
					hc_icoe_address: this.properValue(this.hc_icoe_address),
					hc_icoe_contact_number: this.properValue(this.hc_icoe_contact_number),
					hc_business_employment: this.properValue(this.hc_business_employment),
					hc_job_category: this.properValue(this.hc_job_category),
					hc_position: this.properValue(this.hc_position),
					hc_ethnic_group: this.properValue(this.hc_ethnic_group)
				};
	
				var validation = this.validateData(data);
	
				if (!validation['valid']) {
					alert(validation['message']);
				} else {
					this.postUpdateApplication(data, this.hc_contact, token);
				}
			}
		}, {
			key: 'properValue',
			value: function properValue(value) {
				return typeof value != 'undefined' ? value : '';
			}
		}, {
			key: 'validateData',
			value: function validateData(data) {
				var valid = true;
				var message = "Validated!";
	
				if (data['hc_lastname'] == "") {
					message = "Empty Firstname!";
				}
				if (data['hc_lastname'] == "") {
					message = "Empty Lastname!";
				}
				if (data['hc_middlename'] == "") {
					message = "Empty Middle!";
				}
				if (data['gender'] == "") {
					message = "Select Gender!";
				}
				if (data['status'] == "") {
					message = "Empty Status!";
				}
				if (data['nationality'] == "") {
					message = "No Nationality";
				}
	
				if (data['hc_lastname'] == "") {
					message = "Lastname is empty!";
				}
				if (data['hc_firstname'] == "") {
					message = "Firstname is empty!";
				}
				if (data['hc_middlename'] == "") {
					message = "Middle Name is empty!";
				}
				//if (data['hc_age'] == "") { message = "Age is empty!"; }
				if (data['hc_sex'] == "") {
					message = "Sex is empty!";
				}
				if (data['hc_civilstatus'] == "") {
					message = "Civil Status is empty!";
				}
				if (data['hc_nationality'] == "") {
					message = "Nationality is empty!";
				}
				if (data['hc_cedula'] == "") {
					message = "Cedula is empty!";
				}
				if (data['hc_cedula_date_issued'] == "") {
					message = "Cedula Issued Date is empty!";
				}
				if (data['hc_OR_fee_number'] == "") {
					message = "OR Number is empty!";
				}
				if (data['hc_OR_fee_number_date_issued'] == "") {
					message = "OR Number Date Issued is empty!";
				}
				if (data['hc_icoe_name'] == "") {
					message = "ICOE Field is empty!";
				}
				if (data['hc_icoe_relation'] == "") {
					message = "ICOE Field is empty!";
				}
				if (data['hc_icoe_address'] == "") {
					message = "ICOE Field is empty!";
				}
				if (data['hc_icoe_contact_number'] == "") {
					message = "ICOE Field is empty!";
				}
				if (data['hc_business_employment'] == "") {
					message = "Business Employment is empty!";
				}
				if (data['hc_job_category'] == "") {
					message = "Job Category is empty!";
				}
				if (data['hc_position'] == "") {
					message = "Position is empty!";
				}
				if (data['hc_ethnic_group'] == "") {
					message = "Ethnic Group is empty!";
				}
	
				valid = message != "Validated!" ? false : valid;
				return { valid: valid, message: message };
			}
		}, {
			key: 'validFields',
			value: function validFields() {
				var data = {
					hc_lastname: this.properValue(this.hc_lastname),
					hc_firstname: this.properValue(this.hc_firstname),
					hc_middlename: this.properValue(this.hc_middlename),
					//hc_age : this.properValue( this.hc_age ),
					hc_sex: this.properValue(this.hc_sex),
					hc_civilstatus: this.properValue(this.hc_civilstatus),
					hc_nationality: this.properValue(this.hc_nationality),
					hc_cedula: this.properValue(this.hc_cedula),
					hc_cedula_date_issued: this.properValue(this.hc_cedula_date_issued),
					hc_OR_fee_number: this.properValue(this.hc_OR_fee_number),
					hc_OR_fee_number_date_issued: this.properValue(this.hc_OR_fee_number_date_issued),
					hc_icoe_name: this.properValue(this.hc_icoe_name),
					hc_icoe_relation: this.properValue(this.hc_icoe_relation),
					hc_icoe_address: this.properValue(this.hc_icoe_address),
					hc_icoe_contact_number: this.properValue(this.hc_icoe_contact_number),
					hc_business_employment: this.properValue(this.hc_business_employment),
					hc_job_category: this.properValue(this.hc_job_category),
					hc_position: this.properValue(this.hc_position),
					hc_ethnic_group: this.properValue(this.hc_ethnic_group),
					d: "",
					m: "",
					y: "",
					hid: ""
				};
	
				return this.validateData(data)['valid'];
			}
		}, {
			key: 'postSubmitApplication',
			value: function postSubmitApplication(data, contact, token) {
				var location = this.location;
				this.$http.post('http://ec2-54-186-5-126.us-west-2.compute.amazonaws.com:5000/api/health-card-application', { data: data, contact: contact, token: token }).success(function () {
					location.href = location.origin + "/#/apply-submitted";
				}).error(function (err) {
					alert("Unable to Proceed. " + err);
				});
			}
		}, {
			key: 'postUpdateApplication',
			value: function postUpdateApplication(data, contact, token) {
				var location = this.location;
				this.$http.post('http://ec2-54-186-5-126.us-west-2.compute.amazonaws.com:5000/api/health-card-application-update', { data: data, contact: contact, token: token }).success(function () {
					location.href = location.origin + "/#/apply-updated";
				}).error(function (err) {
					alert("Unable to Proceed. " + err);
				});
			}
		}, {
			key: 'resendCode',
			value: function resendCode() {
				var cno = this.cno;
				var verification_code = this.verification_code;
				//var location = this.location;
	
	
				if (cno == "") {
					alert("Please enter Phone Number");
				} else {
					if (cno.length == 10) {
						var location = this.location;
						$('#resend-code').modal("hide");
						location.href = location.origin + "/#/apply-resend";
						this.$http.post('http://ec2-54-186-5-126.us-west-2.compute.amazonaws.com:5000/api/health-card-resend', { cno: cno, verification_code: verification_code }).success(function () {}).error(function (err) {
							alert("Unable to Proceed. " + err);
						});
					} else {
						alert("Invalid Phone Number");
					}
				}
			}
		}]);
	
		return ApplyController;
	}();

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NavbarController = exports.NavbarController = function () {
		NavbarController.$inject = ["$auth", "$location"];
		function NavbarController($auth, $location) {
			'ngInject';
	
			_classCallCheck(this, NavbarController);
	
			this.$auth = $auth;
			this.isAuthenticated = $auth.isAuthenticated;
			this.$location = $location;
		}
	
		_createClass(NavbarController, [{
			key: 'logout',
			value: function logout() {
				this.$auth.logout();
				this.$location.path('/login');
				window.location.reload();
			}
		}]);
	
		return NavbarController;
	}();

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	CompareToDirective.$inject = ["$parse"];
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.CompareToDirective = CompareToDirective;
	function CompareToDirective($parse) {
		'ngInject';
	
		return {
			require: 'ngModel',
			link: function link(scope, elm, attrs, ngModel) {
				var mainModel = $parse(attrs.compareTo);
				var secondModel = $parse(attrs.ngModel);
	
				scope.$watch(attrs.ngModel, function (newValue) {
					ngModel.$setValidity(attrs.name, newValue === mainModel(scope));
				});
				scope.$watch(attrs.compareTo, function (newValue) {
					ngModel.$setValidity(attrs.name, newValue === secondModel(scope));
				});
			}
		};
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GithubContributorService = exports.GithubContributorService = function () {
	  GithubContributorService.$inject = ["$log", "$http"];
	  function GithubContributorService($log, $http) {
	    'ngInject';
	
	    _classCallCheck(this, GithubContributorService);
	
	    this.$log = $log;
	    this.$http = $http;
	    this.apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
	  }
	
	  _createClass(GithubContributorService, [{
	    key: 'getContributors',
	    value: function getContributors() {
	      var _this = this;
	
	      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
	
	      return this.$http.get(this.apiHost + '/contributors?per_page=' + limit).then(function (response) {
	        return response.data;
	      }).catch(function (error) {
	        _this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
	      });
	    }
	  }]);
	
	  return GithubContributorService;
	}();

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WebDevTecService = exports.WebDevTecService = function () {
	  function WebDevTecService() {
	    'ngInject';
	
	    _classCallCheck(this, WebDevTecService);
	
	    this.data = [{
	      'title': 'AngularJS',
	      'url': 'https://angularjs.org/',
	      'description': 'HTML enhanced for web apps!',
	      'logo': 'angular.png'
	    }, {
	      'title': 'BrowserSync',
	      'url': 'http://browsersync.io/',
	      'description': 'Time-saving synchronised browser testing.',
	      'logo': 'browsersync.png'
	    }, {
	      'title': 'GulpJS',
	      'url': 'http://gulpjs.com/',
	      'description': 'The streaming build system.',
	      'logo': 'gulp.png'
	    }, {
	      'title': 'Jasmine',
	      'url': 'http://jasmine.github.io/',
	      'description': 'Behavior-Driven JavaScript.',
	      'logo': 'jasmine.png'
	    }, {
	      'title': 'Karma',
	      'url': 'http://karma-runner.github.io/',
	      'description': 'Spectacular Test Runner for JavaScript.',
	      'logo': 'karma.png'
	    }, {
	      'title': 'Protractor',
	      'url': 'https://github.com/angular/protractor',
	      'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
	      'logo': 'protractor.png'
	    }, {
	      'title': 'Bootstrap',
	      'url': 'http://getbootstrap.com/',
	      'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
	      'logo': 'bootstrap.png'
	    }, {
	      'title': 'Angular UI Bootstrap',
	      'url': 'http://angular-ui.github.io/bootstrap/',
	      'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
	      'logo': 'ui-bootstrap.png'
	    }, {
	      'title': 'Sass (Node)',
	      'url': 'https://github.com/sass/node-sass',
	      'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
	      'logo': 'node-sass.png'
	    }, {
	      'title': 'ES6 (Babel formerly 6to5)',
	      'url': 'https://babeljs.io/',
	      'description': 'Turns ES6+ code into vanilla ES5, so you can use next generation features today.',
	      'logo': 'babel.png'
	    }];
	  }
	
	  _createClass(WebDevTecService, [{
	    key: 'getTec',
	    value: function getTec() {
	      return this.data;
	    }
	  }]);
	
	  return WebDevTecService;
	}();

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NavbarDirective = NavbarDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function NavbarDirective() {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/navbar/navbar.html',
	    scope: {
	      creationDate: '='
	    },
	    controller: NavbarController,
	    controllerAs: 'vm',
	    bindToController: true
	  };
	
	  return directive;
	}
	
	var NavbarController = function NavbarController(moment) {
	  'ngInject';
	
	  // "this.creationDate" is available by directive option "bindToController: true"
	
	  _classCallCheck(this, NavbarController);
	
	  this.relativeDate = moment(this.creationDate).fromNow();
	};
	NavbarController.$inject = ["moment"];

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	MalarkeyDirective.$inject = ["malarkey"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.MalarkeyDirective = MalarkeyDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function MalarkeyDirective(malarkey) {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    scope: {
	      extraValues: '='
	    },
	    template: '&nbsp;',
	    link: linkFunc,
	    controller: MalarkeyController,
	    controllerAs: 'vm'
	  };
	
	  return directive;
	
	  function linkFunc(scope, el, attr, vm) {
	    var watcher = void 0;
	    var typist = malarkey(el[0], {
	      typeSpeed: 40,
	      deleteSpeed: 40,
	      pauseDelay: 800,
	      loop: true,
	      postfix: ' '
	    });
	
	    el.addClass('acme-malarkey');
	
	    angular.forEach(scope.extraValues, function (value) {
	      typist.type(value).pause().delete();
	    });
	
	    watcher = scope.$watch('vm.contributors', function () {
	      angular.forEach(vm.contributors, function (contributor) {
	        typist.type(contributor.login).pause().delete();
	      });
	    });
	
	    scope.$on('$destroy', function () {
	      watcher();
	    });
	  }
	}
	
	var MalarkeyController = function () {
	  MalarkeyController.$inject = ["$log", "githubContributor"];
	  function MalarkeyController($log, githubContributor) {
	    'ngInject';
	
	    _classCallCheck(this, MalarkeyController);
	
	    this.$log = $log;
	    this.contributors = [];
	
	    this.activate(githubContributor);
	  }
	
	  _createClass(MalarkeyController, [{
	    key: 'activate',
	    value: function activate(githubContributor) {
	      var _this = this;
	
	      return this.getContributors(githubContributor).then(function () {
	        _this.$log.info('Activated Contributors View');
	      });
	    }
	  }, {
	    key: 'getContributors',
	    value: function getContributors(githubContributor) {
	      var _this2 = this;
	
	      return githubContributor.getContributors(10).then(function (data) {
	        _this2.contributors = data;
	
	        return _this2.contributors;
	      });
	    }
	  }]);
	
	  return MalarkeyController;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjQwMDRkZjgzNzkzYzExYzM5YTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanM/YWE0MSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcz85ZDUxIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcz9mNTEyIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzP2Y5ZDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzPzMxYTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hdXRoL2F1dGguY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2F1dGgvYXV0aC5jb250cm9sbGVyLmpzP2Y4NGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9wYWdlLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9wYWdlLmNvbnRyb2xsZXIuanM/YzQ5MSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2V2ZW50LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9ldmVudC5jb250cm9sbGVyLmpzP2UxNmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb250cm9sbGVyLmpzPzY3YTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUtdXBsb2FkZXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS11cGxvYWRlci5jb250cm9sbGVyLmpzP2Q3ZGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHBseS9hcHBseS5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwbHkvYXBwbHkuY29udHJvbGxlci5qcz81YzZiIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29udHJvbGxlci5qcz9lMTQxIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGlyZWN0aXZlcy9jb21wYXJlVG8uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGlyZWN0aXZlcy9jb21wYXJlVG8uZGlyZWN0aXZlLmpzPzZiOTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanM/NGM5OCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanM/ZTA1ZCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzP2MyMDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzPzY0MWUiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnN0YW50IiwibWFsYXJrZXkiLCJtb21lbnQiLCJjb25maWciLCJydW4iLCJzZXJ2aWNlIiwiY29udHJvbGxlciIsImRpcmVjdGl2ZSIsImZpbHRlciIsIiRzY2UiLCJzdHJpbmdUb1BhcnNlIiwidHJ1c3RBc0h0bWwiLCIkbG9nUHJvdmlkZXIiLCJ0b2FzdHJDb25maWciLCIkYXV0aFByb3ZpZGVyIiwiQVBJX1VSTCIsImRlYnVnRW5hYmxlZCIsImFsbG93SHRtbCIsInRpbWVPdXQiLCJwb3NpdGlvbkNsYXNzIiwicHJldmVudER1cGxpY2F0ZXMiLCJwcm9ncmVzc0JhciIsImxvZ2luVXJsIiwicm91dGVyQ29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlckFzIiwib3RoZXJ3aXNlIiwicnVuQmxvY2siLCIkbG9nIiwiZGVidWciLCIkaHR0cCIsInBvc3QiLCJtc2ciLCJtZXNzYWdlIiwidm0iLCJnZXQiLCJ0aGVuIiwicmVzdWx0IiwibWVzc2FnZXMiLCJkYXRhIiwiJGF1dGgiLCIkbG9jYXRpb24iLCJpbnZhbGlkQWNjb3VudCIsImVtYWlsIiwiYWxlcnQiLCJwYXNzd29yZCIsIiQiLCJ2YWwiLCJsb2dpbiIsInVzZXIiLCJ0b2tlbiIsInNldFRva2VuIiwicmVkaXJlY3RIb21lcGFnZSIsImNhdGNoIiwicmVzcG9uc2UiLCJwYXRoIiwibG9jYXRpb24iLCJmaWVsZHNldCIsInZlcmlmaWNhdGlvbl9jb2RlX2hlcmUiLCJnZXRQYXJhbWV0ZXJCeU5hbWUiLCJhYnNVcmwiLCJ2ZXJpZnlfYWNjb3VudCIsInRlc3RHZW5lcmF0b3IiLCJnZXRFc3RhYmxpc2htZW50IiwibmFtZSIsInJlcGxhY2UiLCJyZWdleCIsIlJlZ0V4cCIsInJlc3VsdHMiLCJleGVjIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwidmFsdWUiLCJ1c2VybmFtZSIsInBhc3N3b3JkX2NvbmZpcm0iLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsIm5pY2tuYW1lIiwiZ2VuZGVyIiwic3RhdHVzIiwibmF0aW9uYWxpdHkiLCJjb250YWN0IiwiYWRkcmVzcyIsIm5vdGUiLCJtb250aCIsImRheSIsInllYXIiLCJpb2VfbmFtZSIsImlvZV9yZWxhdGlvbiIsImlvZV9hZGRyZXNzIiwiaW9lX2NvbnRhY3QiLCJpb2VfZXN0YWJsaXNobWVudCIsInByb3BlclZhbHVlIiwiYmlydGhkYXkiLCJ0eXBlIiwiZGF0ZV9leHBpcmVkX3RleHQiLCJkYXRlX2V4cGlyZWRfbnVtYmVyIiwiZCIsInZhbGlkYXRpb24iLCJ2YWxpZGF0ZURhdGEiLCJwb3N0U3VibWl0QXBwbGljYXRpb24iLCJ2YWxpZCIsImlzVmFsaWRFbWFpbEFkZHJlc3MiLCJzdWNjZXNzIiwiaHJlZiIsIm9yaWdpbiIsImVycm9yIiwiZXJyIiwiY29kZSIsImVtYWlsQWRkcmVzcyIsInBhdHRlcm4iLCJ0ZXN0IiwiJHN0YXRlUGFyYW1zIiwiJHN0YXRlIiwiZXZlbnRzIiwiZ2V0RXZlbnRzIiwidXJsX3NsdWciLCJoYXNoIiwic3BsaXQiLCJsZW5ndGgiLCJldm50IiwiZ2V0RXZlbnQiLCJwYXJhbXMiLCJzbHVnIiwiZ2V0cHJvZmlsZSIsImdldFRva2VuIiwiZGlzcGxheVByb2ZsZSIsInVwZGF0ZVN1Ym1pdEFwcGxpY2F0aW9uIiwiVXBsb2FkIiwiJHNjb3BlIiwiJHRpbWVvdXQiLCJ1cGxvYWRQaWMiLCJmaWxlIiwidXBsb2FkIiwiZXJyb3JNc2ciLCJldnQiLCJwcm9ncmVzcyIsIk1hdGgiLCJtaW4iLCJwYXJzZUludCIsImxvYWRlZCIsInRvdGFsIiwicHJvZmlsZVBpY3R1cmUiLCJwcm9maWxlX3BpY3R1cmUiLCJTdGVwMSIsIkFwcGxpY2F0aW9uU3RhdHVzIiwic3RlbV9jb3VudGVyIiwiaGNfbGFzdG5hbWUiLCJoY19maXJzdG5hbWUiLCJoY19taWRkbGVuYW1lIiwiaGNfc2V4IiwiaGNfY2l2aWxzdGF0dXMiLCJoY19uYXRpb25hbGl0eSIsImhjX2NlZHVsYSIsImhjX2NlZHVsYV9kYXRlX2lzc3VlZCIsImhjX09SX2ZlZV9udW1iZXIiLCJoY19PUl9mZWVfbnVtYmVyX2RhdGVfaXNzdWVkIiwiaGNfaWNvZV9uYW1lIiwiaGNfaWNvZV9yZWxhdGlvbiIsImhjX2ljb2VfYWRkcmVzcyIsImhjX2ljb2VfY29udGFjdF9udW1iZXIiLCJyZXF1ZXN0X3N0YXR1cyIsImhjX2J1c2luZXNzX2VtcGxveW1lbnQiLCJoY19qb2JfY2F0ZWdvcnkiLCJoY19wb3NpdGlvbiIsImhjX2V0aG5pY19ncm91cCIsInZlcmlmaWNhdGlvbl9jb2RlIiwiaGNfY29udGFjdCIsIm0iLCJ5IiwiaGlkIiwicG9zdFVwZGF0ZUFwcGxpY2F0aW9uIiwiY25vIiwibW9kYWwiLCJpc0F1dGhlbnRpY2F0ZWQiLCJsb2dvdXQiLCJ3aW5kb3ciLCJyZWxvYWQiLCJDb21wYXJlVG9EaXJlY3RpdmUiLCIkcGFyc2UiLCJyZXF1aXJlIiwibGluayIsInNjb3BlIiwiZWxtIiwiYXR0cnMiLCJuZ01vZGVsIiwibWFpbk1vZGVsIiwiY29tcGFyZVRvIiwic2Vjb25kTW9kZWwiLCIkd2F0Y2giLCJuZXdWYWx1ZSIsIiRzZXRWYWxpZGl0eSIsImFwaUhvc3QiLCJsaW1pdCIsInRvSnNvbiIsIldlYkRldlRlY1NlcnZpY2UiLCJOYXZiYXJEaXJlY3RpdmUiLCJyZXN0cmljdCIsImNyZWF0aW9uRGF0ZSIsIk5hdmJhckNvbnRyb2xsZXIiLCJiaW5kVG9Db250cm9sbGVyIiwicmVsYXRpdmVEYXRlIiwiZnJvbU5vdyIsIk1hbGFya2V5RGlyZWN0aXZlIiwiZXh0cmFWYWx1ZXMiLCJ0ZW1wbGF0ZSIsImxpbmtGdW5jIiwiTWFsYXJrZXlDb250cm9sbGVyIiwiZWwiLCJhdHRyIiwid2F0Y2hlciIsInR5cGlzdCIsInR5cGVTcGVlZCIsImRlbGV0ZVNwZWVkIiwicGF1c2VEZWxheSIsImxvb3AiLCJwb3N0Zml4IiwiYWRkQ2xhc3MiLCJmb3JFYWNoIiwicGF1c2UiLCJkZWxldGUiLCJjb250cmlidXRvcnMiLCJjb250cmlidXRvciIsIiRvbiIsImdpdGh1YkNvbnRyaWJ1dG9yIiwiYWN0aXZhdGUiLCJnZXRDb250cmlidXRvcnMiLCJpbmZvIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUNFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBQSxTQUFRQyxPQUFPLFlBQVksQ0FBQyxhQUFhLGFBQWEsV0FBVyxjQUFjLGNBQWMsVUFBVSxhQUFhLGdCQUFnQixVQUFVLGNBQWMsaUJBQ3pKQyxTQUFTLFdBQVcsMEJBQ3BCQSxTQUFTLFlBQVlDLFVBQ3JCRCxTQUFTLFVBQVVFLFFBQ25CQyxPQUpILGVBS0dBLE9BTEgsc0JBTUdDLElBTkgsa0JBT0dDLFFBQVEscUJBUFgsNkNBUUdBLFFBQVEsYUFSWCw2QkFTR0MsV0FBVyxrQkFUZCxzQkFVR0EsV0FBVyxrQkFWZCxzQkFXR0EsV0FBVyxrQkFYZCxzQkFZR0EsV0FBVyxtQkFaZCx3QkFhR0EsV0FBVyxxQkFiZCw0QkFjR0EsV0FBVyxtQkFkZCx3QkFlR0EsV0FBVyxvQkFmZCwwQkFnQkdBLFdBQVcsNkJBaEJkLDRDQWlCR0MsVUFBVSxjQWpC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QjtPQUFBOztPQUNqQyxPQUFPQSxrQkFBa0JFLGdCQUFnQixJQUFJN0wsS0FBSyxVQUFDRyxNQUFTO1NBQzFELE9BQUtxTCxlQUFlckw7O1NBRXBCLE9BQU8sT0FBS3FMOzs7OztHRHlCaEIsT0FBTyIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiNDAwNGRmODM3OTNjMTFjMzlhNyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoJy4vaW5kZXguY29uZmlnJyk7XG5cbnZhciBfaW5kZXgyID0gcmVxdWlyZSgnLi9pbmRleC5yb3V0ZScpO1xuXG52YXIgX2luZGV4MyA9IHJlcXVpcmUoJy4vaW5kZXgucnVuJyk7XG5cbnZhciBfbWFpbiA9IHJlcXVpcmUoJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInKTtcblxudmFyIF9hdXRoID0gcmVxdWlyZSgnLi9hdXRoL2F1dGguY29udHJvbGxlcicpO1xuXG52YXIgX3BhZ2UgPSByZXF1aXJlKCcuL3BhZ2VzL3BhZ2UuY29udHJvbGxlcicpO1xuXG52YXIgX2V2ZW50ID0gcmVxdWlyZSgnLi9wYWdlcy9ldmVudC5jb250cm9sbGVyJyk7XG5cbnZhciBfcHJvZmlsZSA9IHJlcXVpcmUoJy4vcHJvZmlsZS9wcm9maWxlLmNvbnRyb2xsZXInKTtcblxudmFyIF9wcm9maWxlVXBsb2FkZXIgPSByZXF1aXJlKCcuL3Byb2ZpbGUvcHJvZmlsZS11cGxvYWRlci5jb250cm9sbGVyJyk7XG5cbnZhciBfYXBwbHkgPSByZXF1aXJlKCcuL2FwcGx5L2FwcGx5LmNvbnRyb2xsZXInKTtcblxudmFyIF9uYXZiYXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb250cm9sbGVyJyk7XG5cbnZhciBfY29tcGFyZVRvRGlyZWN0aXZlID0gcmVxdWlyZSgnLi9kaXJlY3RpdmVzL2NvbXBhcmVUby5kaXJlY3RpdmUuanMnKTtcblxudmFyIF9naXRodWJDb250cmlidXRvciA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UnKTtcblxudmFyIF93ZWJEZXZUZWMgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UnKTtcblxudmFyIF9uYXZiYXIyID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUnKTtcblxudmFyIF9tYWxhcmtleSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZScpO1xuXG4vKiBnbG9iYWwgbWFsYXJrZXk6ZmFsc2UsIG1vbWVudDpmYWxzZSAqL1xuXG5hbmd1bGFyLm1vZHVsZSgncHJvamVjdDEnLCBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLCAnbmdBcmlhJywgJ3VpLnJvdXRlcicsICd1aS5ib290c3RyYXAnLCAndG9hc3RyJywgJ3NhdGVsbGl6ZXInLCAnbmdGaWxlVXBsb2FkJ10pLmNvbnN0YW50KCdBUElfVVJMJywgXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvXCIpLmNvbnN0YW50KCdtYWxhcmtleScsIG1hbGFya2V5KS5jb25zdGFudCgnbW9tZW50JywgbW9tZW50KS5jb25maWcoX2luZGV4LmNvbmZpZykuY29uZmlnKF9pbmRleDIucm91dGVyQ29uZmlnKS5ydW4oX2luZGV4My5ydW5CbG9jaykuc2VydmljZSgnZ2l0aHViQ29udHJpYnV0b3InLCBfZ2l0aHViQ29udHJpYnV0b3IuR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKS5zZXJ2aWNlKCd3ZWJEZXZUZWMnLCBfd2ViRGV2VGVjLldlYkRldlRlY1NlcnZpY2UpLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgX21haW4uTWFpbkNvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ0F1dGhDb250cm9sbGVyJywgX2F1dGguQXV0aENvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ1BhZ2VDb250cm9sbGVyJywgX3BhZ2UuUGFnZUNvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ0V2ZW50Q29udHJvbGxlcicsIF9ldmVudC5FdmVudENvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ1Byb2ZpbGVDb250cm9sbGVyJywgX3Byb2ZpbGUuUHJvZmlsZUNvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ0FwcGx5Q29udHJvbGxlcicsIF9hcHBseS5BcHBseUNvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ05hdmJhckNvbnRyb2xsZXInLCBfbmF2YmFyLk5hdmJhckNvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ1Byb2ZpbGVVcGxvYWRlckNvbnRyb2xsZXInLCBfcHJvZmlsZVVwbG9hZGVyLlByb2ZpbGVVcGxvYWRlckNvbnRyb2xsZXIpLmRpcmVjdGl2ZSgnYWNtZU5hdmJhcicsIF9uYXZiYXIyLk5hdmJhckRpcmVjdGl2ZSkuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBfbWFsYXJrZXkuTWFsYXJrZXlEaXJlY3RpdmUpLmRpcmVjdGl2ZSgnY29tcGFyZVRvJywgX2NvbXBhcmVUb0RpcmVjdGl2ZS5Db21wYXJlVG9EaXJlY3RpdmUpLmZpbHRlcigncmVuZGVySFRNTENvcnJlY3RseScsIGZ1bmN0aW9uICgkc2NlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nVG9QYXJzZSkge1xuICAgIHJldHVybiAkc2NlLnRydXN0QXNIdG1sKHN0cmluZ1RvUGFyc2UpO1xuICB9O1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCIvKiBnbG9iYWwgbWFsYXJrZXk6ZmFsc2UsIG1vbWVudDpmYWxzZSAqL1xuXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2luZGV4LmNvbmZpZyc7XG5pbXBvcnQgeyByb3V0ZXJDb25maWcgfSBmcm9tICcuL2luZGV4LnJvdXRlJztcbmltcG9ydCB7IHJ1bkJsb2NrIH0gZnJvbSAnLi9pbmRleC5ydW4nO1xuaW1wb3J0IHsgTWFpbkNvbnRyb2xsZXIgfSBmcm9tICcuL21haW4vbWFpbi5jb250cm9sbGVyJztcbmltcG9ydCB7IEF1dGhDb250cm9sbGVyIH0gZnJvbSAnLi9hdXRoL2F1dGguY29udHJvbGxlcic7XG5pbXBvcnQgeyBQYWdlQ29udHJvbGxlciB9IGZyb20gJy4vcGFnZXMvcGFnZS5jb250cm9sbGVyJztcbmltcG9ydCB7IEV2ZW50Q29udHJvbGxlciB9IGZyb20gJy4vcGFnZXMvZXZlbnQuY29udHJvbGxlcic7XG5pbXBvcnQgeyBQcm9maWxlQ29udHJvbGxlciB9IGZyb20gJy4vcHJvZmlsZS9wcm9maWxlLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgUHJvZmlsZVVwbG9hZGVyQ29udHJvbGxlciB9IGZyb20gJy4vcHJvZmlsZS9wcm9maWxlLXVwbG9hZGVyLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQXBwbHlDb250cm9sbGVyIH0gZnJvbSAnLi9hcHBseS9hcHBseS5jb250cm9sbGVyJztcbmltcG9ydCB7IE5hdmJhckNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb250cm9sbGVyJztcbmltcG9ydCB7IENvbXBhcmVUb0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jb21wYXJlVG8uZGlyZWN0aXZlLmpzJztcbmltcG9ydCB7IEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2ViRGV2VGVjU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZSc7XG5pbXBvcnQgeyBOYXZiYXJEaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNYWxhcmtleURpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZSc7XG5cbmFuZ3VsYXIubW9kdWxlKCdwcm9qZWN0MScsIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAnbmdNZXNzYWdlcycsICduZ0FyaWEnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICd0b2FzdHInLCAnc2F0ZWxsaXplcicsICduZ0ZpbGVVcGxvYWQnXSlcbiAgLmNvbnN0YW50KCdBUElfVVJMJywgXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvXCIpXG4gIC5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSlcbiAgLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpXG4gIC5jb25maWcoY29uZmlnKVxuICAuY29uZmlnKHJvdXRlckNvbmZpZylcbiAgLnJ1bihydW5CbG9jaylcbiAgLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKVxuICAuc2VydmljZSgnd2ViRGV2VGVjJywgV2ViRGV2VGVjU2VydmljZSlcbiAgLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdBdXRoQ29udHJvbGxlcicsIEF1dGhDb250cm9sbGVyKVxuICAuY29udHJvbGxlcignUGFnZUNvbnRyb2xsZXInLCBQYWdlQ29udHJvbGxlcilcbiAgLmNvbnRyb2xsZXIoJ0V2ZW50Q29udHJvbGxlcicsIEV2ZW50Q29udHJvbGxlcilcbiAgLmNvbnRyb2xsZXIoJ1Byb2ZpbGVDb250cm9sbGVyJywgUHJvZmlsZUNvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdBcHBseUNvbnRyb2xsZXInLCBBcHBseUNvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdOYXZiYXJDb250cm9sbGVyJywgTmF2YmFyQ29udHJvbGxlcilcbiAgLmNvbnRyb2xsZXIoJ1Byb2ZpbGVVcGxvYWRlckNvbnRyb2xsZXInLCBQcm9maWxlVXBsb2FkZXJDb250cm9sbGVyKVxuICAuZGlyZWN0aXZlKCdhY21lTmF2YmFyJywgTmF2YmFyRGlyZWN0aXZlKVxuICAuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBNYWxhcmtleURpcmVjdGl2ZSlcbiAgLmRpcmVjdGl2ZSgnY29tcGFyZVRvJywgQ29tcGFyZVRvRGlyZWN0aXZlKVxuICAuZmlsdGVyKCdyZW5kZXJIVE1MQ29ycmVjdGx5JywgZnVuY3Rpb24oJHNjZSl7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0cmluZ1RvUGFyc2UpXG4gICAge1xuICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc0h0bWwoc3RyaW5nVG9QYXJzZSk7XG4gICAgfVxuICB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgubW9kdWxlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jb25maWcgPSBjb25maWc7XG5mdW5jdGlvbiBjb25maWcoJGxvZ1Byb3ZpZGVyLCB0b2FzdHJDb25maWcsICRhdXRoUHJvdmlkZXIsIEFQSV9VUkwpIHtcbiAgJ25nSW5qZWN0JztcbiAgLy8gRW5hYmxlIGxvZ1xuXG4gICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG5cbiAgLy8gU2V0IG9wdGlvbnMgdGhpcmQtcGFydHkgbGliXG4gIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlO1xuICB0b2FzdHJDb25maWcudGltZU91dCA9IDMwMDA7XG4gIHRvYXN0ckNvbmZpZy5wb3NpdGlvbkNsYXNzID0gJ3RvYXN0LXRvcC1yaWdodCc7XG4gIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy5wcm9ncmVzc0JhciA9IHRydWU7XG5cbiAgJGF1dGhQcm92aWRlci5sb2dpblVybCA9IEFQSV9VUkwgKyAnYXV0aC9sb2dpbic7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJleHBvcnQgZnVuY3Rpb24gY29uZmlnICgkbG9nUHJvdmlkZXIsIHRvYXN0ckNvbmZpZywgJGF1dGhQcm92aWRlciwgQVBJX1VSTCkge1xuICAnbmdJbmplY3QnO1xuICAvLyBFbmFibGUgbG9nXG4gICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG5cbiAgLy8gU2V0IG9wdGlvbnMgdGhpcmQtcGFydHkgbGliXG4gIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlO1xuICB0b2FzdHJDb25maWcudGltZU91dCA9IDMwMDA7XG4gIHRvYXN0ckNvbmZpZy5wb3NpdGlvbkNsYXNzID0gJ3RvYXN0LXRvcC1yaWdodCc7XG4gIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy5wcm9ncmVzc0JhciA9IHRydWU7XG5cbiAgJGF1dGhQcm92aWRlci5sb2dpblVybCA9IEFQSV9VUkwgKyAnYXV0aC9sb2dpbic7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucm91dGVyQ29uZmlnID0gcm91dGVyQ29uZmlnO1xuZnVuY3Rpb24gcm91dGVyQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcblx0J25nSW5qZWN0JztcblxuXHQkc3RhdGVQcm92aWRlci5zdGF0ZSgnaG9tZScsIHtcblx0XHR1cmw6ICcvJyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL21haW4uaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogJ01haW5Db250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdtYWluJ1xuXHR9KS5zdGF0ZSgnbG9naW4nLCB7XG5cdFx0dXJsOiAnL2xvZ2luJyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9hdXRoL2F1dGguaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogJ0F1dGhDb250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdhdXRoJ1xuXHR9KS5zdGF0ZSgncmVnaXN0cmF0aW9uJywge1xuXHRcdHVybDogJy9yZWdpc3RyYXRpb24nLFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL3BhZ2VzL3JlZ2lzdHJhdGlvbi5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnUGFnZUNvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ3BhZ2UnXG5cdH0pLnN0YXRlKCdyZWdpc3RyYXRpb24tY29uZmlybWF0aW9uJywge1xuXHRcdHVybDogJy9yZWdpc3RyYXRpb24tY29uZmlybWF0aW9uJyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9wYWdlcy9yZWdpc3RyYXRpb24tc3VjY2Vzcy5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnUGFnZUNvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ3BhZ2UnXG5cdH0pLnN0YXRlKCdyZWdpc3RyYXRpb24tcHJvY2VzcycsIHtcblx0XHR1cmw6ICcvcmVnaXN0cmF0aW9uLXByb2Nlc3MnLFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL3BhZ2VzL3JlZ2lzdHJhdGlvbi1wcm9jZXNzLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdQYWdlQ29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAncGFnZSdcblx0fSkuc3RhdGUoJ2Fib3V0Jywge1xuXHRcdHVybDogJy9hYm91dCcsXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvcGFnZXMvYWJvdXR1cy5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnUGFnZUNvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ2Fib3V0J1xuXHR9KS5zdGF0ZSgncHJvZmlsZScsIHtcblx0XHR1cmw6ICcvcHJvZmlsZScsXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvcHJvZmlsZS9wcm9maWxlLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdQcm9maWxlQ29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAncHJvZmlsZSdcblx0fSkuc3RhdGUoJ3Byb2ZpbGUtcGljdHVyZScsIHtcblx0XHR1cmw6ICcvcHJvZmlsZS1waWN0dXJlJyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9wcm9maWxlL3Byb2ZpbGUtcGljdHVyZS1lZGl0Lmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdQcm9maWxlQ29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAncHJvZmlsZVVwbG9hZGVyJ1xuXHR9KS5zdGF0ZSgnYXBwbHknLCB7XG5cdFx0dXJsOiAnL2FwcGx5Jyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9hcHBseS9hcHBseS5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnQXBwbHlDb250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdhcHBseSdcblx0fSkuc3RhdGUoJ2FwcGx5LXN1Ym1pdHRlZCcsIHtcblx0XHR1cmw6ICcvYXBwbHktc3VibWl0dGVkJyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9hcHBseS9hcHBseS1zdWJtaXR0ZWQuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogJ0FwcGx5Q29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAnYXBwbHknXG5cdH0pLnN0YXRlKCdhcHBseS1yZXNlbmQnLCB7XG5cdFx0dXJsOiAnL2FwcGx5LXJlc2VuZCcsXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvYXBwbHkvYXBwbHktcmVzZW5kLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdBcHBseUNvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ2FwcGx5J1xuXHR9KS5zdGF0ZSgnYXBwbHktdXBkYXRlZCcsIHtcblx0XHR1cmw6ICcvYXBwbHktdXBkYXRlZCcsXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvYXBwbHkvYXBwbHktdXBkYXRlZC5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnQXBwbHlDb250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdhcHBseSdcblx0fSkuc3RhdGUoJ2V2ZW50cycsIHtcblx0XHR1cmw6ICcvZXZlbnRzJyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9wYWdlcy9ldmVudHMuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogJ0V2ZW50Q29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAnZXZlbnQnXG5cdH0pLnN0YXRlKCdldmVudC1zZWxlY3RlZCcsIHtcblx0XHR1cmw6ICcvZXZlbnRzLzpzbHVnJyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9wYWdlcy9ldmVudHMtc2VsZWN0ZWQuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogJ0V2ZW50Q29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAnZXZlbnQnXG5cdH0pO1xuXG5cdC8qJHVybFJvdXRlclByb3ZpZGVyXG4gICAgICAgICAud2hlbihcIi9ldmVudHMvOnNsdWdcIiwge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcGFnZXMvZXZlbnRzLXNlbGVjdGVkLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogXCJFdmVudENvbnRyb2xsZXJcIixcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ2V2ZW50J1xuICAgICAgICB9KTsqL1xuXG5cdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJvdXRlckNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuXHQnbmdJbmplY3QnO1xuXHQkc3RhdGVQcm92aWRlclxuXHQuc3RhdGUoJ2hvbWUnLCB7XG5cdFx0dXJsOiAnLycsXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9tYWluLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdNYWluQ29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAnbWFpbidcblx0fSlcblx0LnN0YXRlKCdsb2dpbicsIHtcblx0XHR1cmw6ICcvbG9naW4nLFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL2F1dGgvYXV0aC5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnQXV0aENvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ2F1dGgnXG5cdH0pXG5cdC5zdGF0ZSgncmVnaXN0cmF0aW9uJywge1xuXHRcdHVybDogJy9yZWdpc3RyYXRpb24nLFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL3BhZ2VzL3JlZ2lzdHJhdGlvbi5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnUGFnZUNvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ3BhZ2UnXG5cdH0pXG5cdC5zdGF0ZSgncmVnaXN0cmF0aW9uLWNvbmZpcm1hdGlvbicsIHtcblx0XHR1cmw6ICcvcmVnaXN0cmF0aW9uLWNvbmZpcm1hdGlvbicsXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvcGFnZXMvcmVnaXN0cmF0aW9uLXN1Y2Nlc3MuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogJ1BhZ2VDb250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdwYWdlJ1xuXHR9KVxuXHQuc3RhdGUoJ3JlZ2lzdHJhdGlvbi1wcm9jZXNzJywge1xuXHRcdHVybDogJy9yZWdpc3RyYXRpb24tcHJvY2VzcycsXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvcGFnZXMvcmVnaXN0cmF0aW9uLXByb2Nlc3MuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogJ1BhZ2VDb250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdwYWdlJ1xuXHR9KVxuXHQuc3RhdGUoJ2Fib3V0Jywge1xuXHRcdHVybDogJy9hYm91dCcsXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvcGFnZXMvYWJvdXR1cy5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnUGFnZUNvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ2Fib3V0J1xuXHR9KVxuXHQuc3RhdGUoJ3Byb2ZpbGUnLCB7XG5cdFx0dXJsOiAnL3Byb2ZpbGUnLFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL3Byb2ZpbGUvcHJvZmlsZS5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnUHJvZmlsZUNvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ3Byb2ZpbGUnXG5cdH0pXG5cdC5zdGF0ZSgncHJvZmlsZS1waWN0dXJlJywge1xuXHRcdHVybDogJy9wcm9maWxlLXBpY3R1cmUnLFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL3Byb2ZpbGUvcHJvZmlsZS1waWN0dXJlLWVkaXQuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogJ1Byb2ZpbGVDb250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdwcm9maWxlVXBsb2FkZXInXG5cdH0pXG5cdC5zdGF0ZSgnYXBwbHknLCB7XG5cdFx0dXJsOiAnL2FwcGx5Jyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9hcHBseS9hcHBseS5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnQXBwbHlDb250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdhcHBseSdcblx0fSlcblx0LnN0YXRlKCdhcHBseS1zdWJtaXR0ZWQnLCB7XG5cdFx0dXJsOiAnL2FwcGx5LXN1Ym1pdHRlZCcsXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvYXBwbHkvYXBwbHktc3VibWl0dGVkLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdBcHBseUNvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ2FwcGx5J1xuXHR9KVxuXHQuc3RhdGUoJ2FwcGx5LXJlc2VuZCcsIHtcblx0XHR1cmw6ICcvYXBwbHktcmVzZW5kJyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9hcHBseS9hcHBseS1yZXNlbmQuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogJ0FwcGx5Q29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAnYXBwbHknXG5cdH0pXG5cdC5zdGF0ZSgnYXBwbHktdXBkYXRlZCcsIHtcblx0XHR1cmw6ICcvYXBwbHktdXBkYXRlZCcsXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvYXBwbHkvYXBwbHktdXBkYXRlZC5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnQXBwbHlDb250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdhcHBseSdcblx0fSlcblx0LnN0YXRlKCdldmVudHMnLCB7XG5cdFx0dXJsOiAnL2V2ZW50cycsXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvcGFnZXMvZXZlbnRzLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdFdmVudENvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ2V2ZW50J1xuXHR9KVxuXHQuc3RhdGUoJ2V2ZW50LXNlbGVjdGVkJywge1xuXHRcdHVybDogJy9ldmVudHMvOnNsdWcnLFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL3BhZ2VzL2V2ZW50cy1zZWxlY3RlZC5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnRXZlbnRDb250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdldmVudCdcblx0fSk7XG5cblx0LyokdXJsUm91dGVyUHJvdmlkZXJcbiAgICAgICAgIC53aGVuKFwiL2V2ZW50cy86c2x1Z1wiLCB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9wYWdlcy9ldmVudHMtc2VsZWN0ZWQuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBcIkV2ZW50Q29udHJvbGxlclwiLFxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAnZXZlbnQnXG4gICAgICAgIH0pOyovXG5cblx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucnVuQmxvY2sgPSBydW5CbG9jaztcbmZ1bmN0aW9uIHJ1bkJsb2NrKCRsb2cpIHtcbiAgJ25nSW5qZWN0JztcblxuICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQnKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsImV4cG9ydCBmdW5jdGlvbiBydW5CbG9jayAoJGxvZykge1xuICAnbmdJbmplY3QnO1xuICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQnKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTWFpbkNvbnRyb2xsZXIgPSBleHBvcnRzLk1haW5Db250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBNYWluQ29udHJvbGxlcigkaHR0cCkge1xuXHRcdCduZ0luamVjdCc7XG5cblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFpbkNvbnRyb2xsZXIpO1xuXG5cdFx0dGhpcy4kaHR0cCA9ICRodHRwO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKE1haW5Db250cm9sbGVyLCBbe1xuXHRcdGtleTogJ3Bvc3RNZXNzYWdlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcG9zdE1lc3NhZ2UoKSB7XG5cdFx0XHR0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9lYzItNTQtMTg2LTUtMTI2LnVzLXdlc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206NTAwMC9hcGkvbWVzc2FnZScsIHsgbXNnOiB0aGlzLm1lc3NhZ2UgPyB0aGlzLm1lc3NhZ2UgOiBcIlwiIH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2dldE1lc3NhZ2VzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0TWVzc2FnZXMoKSB7XG5cdFx0XHR2YXIgdm0gPSB0aGlzO1xuXHRcdFx0dGhpcy4kaHR0cC5nZXQoJ2h0dHA6Ly9lYzItNTQtMTg2LTUtMTI2LnVzLXdlc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206NTAwMC9hcGkvbWVzc2FnZScpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdFx0XHR2bS5tZXNzYWdlcyA9IHJlc3VsdC5kYXRhO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIE1haW5Db250cm9sbGVyO1xufSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgTWFpbkNvbnRyb2xsZXIge1xuXHRjb25zdHJ1Y3RvciAoJGh0dHApIHtcblx0XHQnbmdJbmplY3QnO1xuXHRcdHRoaXMuJGh0dHAgPSAkaHR0cDtcblx0fVxuXHRwb3N0TWVzc2FnZSgpe1xuXHRcdHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2VjMi01NC0xODYtNS0xMjYudXMtd2VzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo1MDAwL2FwaS9tZXNzYWdlJyx7bXNnOiB0aGlzLm1lc3NhZ2UgPyB0aGlzLm1lc3NhZ2UgOiBcIlwifSk7XG5cdH1cblx0Z2V0TWVzc2FnZXMoKXtcblx0XHR2YXIgdm0gPSB0aGlzO1xuXHRcdHRoaXMuJGh0dHAuZ2V0KCdodHRwOi8vZWMyLTU0LTE4Ni01LTEyNi51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjUwMDAvYXBpL21lc3NhZ2UnKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG5cdFx0XHR2bS5tZXNzYWdlcyA9IHJlc3VsdC5kYXRhO1xuXHRcdH0pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQXV0aENvbnRyb2xsZXIgPSBleHBvcnRzLkF1dGhDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBBdXRoQ29udHJvbGxlcigkYXV0aCwgJGxvY2F0aW9uKSB7XG5cdFx0J25nSW5qZWN0JztcblxuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdXRoQ29udHJvbGxlcik7XG5cblx0XHR0aGlzLiRhdXRoID0gJGF1dGg7XG5cdFx0dGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XG5cdFx0dGhpcy5pbnZhbGlkQWNjb3VudCA9IGZhbHNlO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEF1dGhDb250cm9sbGVyLCBbe1xuXHRcdGtleTogJ2xvZ2luJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gbG9naW4oKSB7XG5cdFx0XHRpZiAodGhpcy5lbWFpbCA9PSAnJykge1xuXHRcdFx0XHRhbGVydChcIkVudGVyIGVtYWlsIGFkZHJlc3NcIik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnBhc3N3b3JkID09ICcnKSB7XG5cdFx0XHRcdGFsZXJ0KFwiRW50ZXIgcGFzc3dvcmRcIik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHZtID0gdGhpcztcblx0XHRcdCQoXCIudHh0LWVtYWlsLCAudHh0LXBhc3N3b3JkXCIpLnZhbChcIlwiKTtcblx0XHRcdHRoaXMuJGF1dGgubG9naW4odGhpcy5sb2dpbi51c2VyKS50aGVuKGZ1bmN0aW9uICh0b2tlbikge1xuXHRcdFx0XHR2bS4kYXV0aC5zZXRUb2tlbih0b2tlbik7XG5cdFx0XHRcdHZtLnJlZGlyZWN0SG9tZXBhZ2UoKTtcblx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG5cdFx0XHRcdHZtLmludmFsaWRBY2NvdW50ID0gdHJ1ZTtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZXNldEFjY291bnRWYWxpZGF0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVzZXRBY2NvdW50VmFsaWRhdGlvbigpIHtcblx0XHRcdHRoaXMuaW52YWxpZEFjY291bnQgPSBmYWxzZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZWRpcmVjdEhvbWVwYWdlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVkaXJlY3RIb21lcGFnZSgpIHtcblx0XHRcdHRoaXMuJGxvY2F0aW9uLnBhdGgoJy8nKTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gQXV0aENvbnRyb2xsZXI7XG59KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hdXRoL2F1dGguY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBBdXRoQ29udHJvbGxlcntcclxuXHRjb25zdHJ1Y3RvciAoJGF1dGgsICRsb2NhdGlvbikge1xyXG5cdFx0J25nSW5qZWN0JztcclxuXHRcdHRoaXMuJGF1dGggPSAkYXV0aDtcclxuXHRcdHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG5cdFx0dGhpcy5pbnZhbGlkQWNjb3VudCA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0bG9naW4oKXtcclxuXHRcdGlmICh0aGlzLmVtYWlsID09ICcnKSB7XHJcblx0XHRcdGFsZXJ0KFwiRW50ZXIgZW1haWwgYWRkcmVzc1wiKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMucGFzc3dvcmQgPT0gJycpIHtcclxuXHRcdFx0YWxlcnQoXCJFbnRlciBwYXNzd29yZFwiKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciB2bSA9IHRoaXM7XHJcblx0XHQkKFwiLnR4dC1lbWFpbCwgLnR4dC1wYXNzd29yZFwiKS52YWwoXCJcIik7XHJcblx0XHR0aGlzLiRhdXRoLmxvZ2luKHRoaXMubG9naW4udXNlcikudGhlbihmdW5jdGlvbih0b2tlbil7XHJcblx0XHRcdHZtLiRhdXRoLnNldFRva2VuKHRva2VuKTtcclxuXHRcdFx0dm0ucmVkaXJlY3RIb21lcGFnZSgpO1xyXG5cdFx0XHJcblx0XHR9KS5jYXRjaChmdW5jdGlvbihyZXNwb25zZSl7XHJcblxyXG5cdFx0XHR2bS5pbnZhbGlkQWNjb3VudCA9IHRydWU7XHJcblx0XHRcdC8vY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cdFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHJlc2V0QWNjb3VudFZhbGlkYXRpb24oKXtcclxuXHRcdHRoaXMuaW52YWxpZEFjY291bnQgPSBmYWxzZTtcclxuXHR9XHJcblx0cmVkaXJlY3RIb21lcGFnZSgpIHtcclxuXHRcdHRoaXMuJGxvY2F0aW9uLnBhdGgoJy8nKTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2F1dGgvYXV0aC5jb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUGFnZUNvbnRyb2xsZXIgPSBleHBvcnRzLlBhZ2VDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBQYWdlQ29udHJvbGxlcigkaHR0cCwgJGxvY2F0aW9uLCAkbG9nKSB7XG5cdFx0J25nSW5qZWN0JztcblxuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYWdlQ29udHJvbGxlcik7XG5cblx0XHR0aGlzLiRodHRwID0gJGh0dHA7XG5cdFx0dGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXHRcdHRoaXMuJGxvZyA9ICRsb2c7XG5cblx0XHR0aGlzLmZpZWxkc2V0ID0gZmFsc2U7XG5cblx0XHR2YXIgdmVyaWZpY2F0aW9uX2NvZGVfaGVyZSA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCdjb25maXJtYXRpb24tY29kZScsICRsb2NhdGlvbi5hYnNVcmwoKSk7XG5cblx0XHRpZiAodmVyaWZpY2F0aW9uX2NvZGVfaGVyZSkge1xuXHRcdFx0dGhpcy52ZXJpZnlfYWNjb3VudCh2ZXJpZmljYXRpb25fY29kZV9oZXJlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy50ZXN0R2VuZXJhdG9yKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5nZXRFc3RhYmxpc2htZW50KCk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoUGFnZUNvbnRyb2xsZXIsIFt7XG5cdFx0a2V5OiAnZ2V0UGFyYW1ldGVyQnlOYW1lJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUsIHVybCkge1xuXHRcdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcXFxcJCZcIik7XG5cdFx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgbmFtZSArIFwiKD0oW14mI10qKXwmfCN8JClcIiksXG5cdFx0XHQgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcblx0XHRcdGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XG5cdFx0XHRpZiAoIXJlc3VsdHNbMl0pIHJldHVybiAnJztcblx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdwb3N0TWVzc2FnZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHBvc3RNZXNzYWdlKCkge1xuXHRcdFx0dGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vZWMyLTU0LTE4Ni01LTEyNi51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjUwMDAvYXBpL21lc3NhZ2UnLCB7IG1zZzogdGhpcy5tZXNzYWdlID8gdGhpcy5tZXNzYWdlIDogXCJcIiB9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRNZXNzYWdlcycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldE1lc3NhZ2VzKCkge1xuXHRcdFx0dmFyIHZtID0gdGhpcztcblx0XHRcdHRoaXMuJGh0dHAuZ2V0KCdodHRwOi8vZWMyLTU0LTE4Ni01LTEyNi51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjUwMDAvYXBpL2VzdGFibGlzaG1lbnRzJykudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHRcdHZtLm1lc3NhZ2VzID0gcmVzdWx0LmRhdGE7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRFc3RhYmxpc2htZW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0RXN0YWJsaXNobWVudCgpIHtcblx0XHRcdHZhciB2bSA9IHRoaXM7XG5cdFx0XHR0aGlzLiRodHRwLmdldCgnaHR0cDovL2VjMi01NC0xODYtNS0xMjYudXMtd2VzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo1MDAwL2FwaS9lc3RhYmxpc2htZW50cycpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdFx0XHR2bS5tZXNzYWdlcyA9IHJlc3VsdC5kYXRhO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncHJvcGVyVmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBwcm9wZXJWYWx1ZSh2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSAhPSAndW5kZWZpbmVkJyA/IHZhbHVlIDogJyc7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAndGVzdEdlbmVyYXRvcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHRlc3RHZW5lcmF0b3IoKSB7XG5cdFx0XHQvKnRoaXMudXNlcm5hbWUgPSBcInRlc3RcIjtcclxuICAgdGhpcy5wYXNzd29yZCA9IFwidGVzdFwiO1xyXG4gICB0aGlzLnBhc3N3b3JkX2NvbmZpcm0gPSBcInRlc3RcIjtcclxuICAgXHRcdHRoaXMuZmlyc3RuYW1lID0gXCJ0ZXN0XCI7XHJcbiAgIHRoaXMubGFzdG5hbWUgPSBcInRlc3RcIjtcclxuICAgdGhpcy5lbWFpbCA9IFwidGVzdHVzZXJAMTI3LjAuMC4xXCI7XHJcbiAgIHRoaXMubmlja25hbWUgPSBcInRlc3RcIjtcclxuICAgdGhpcy5nZW5kZXIgPSBcIm1hbGVcIjtcclxuICAgdGhpcy5iaXJ0aGRheSA9IFwidGVzdFwiO1xyXG4gICB0aGlzLnN0YXR1cyA9IFwic2luZ2xlXCI7XHJcbiAgIHRoaXMubmF0aW9uYWxpdHkgPSBcInRlc3RcIjtcclxuICAgdGhpcy5jb250YWN0ID0gXCIxMjM0XCI7XHJcbiAgIHRoaXMuYWRkcmVzcyA9IFwidGVzdFwiO1xyXG4gICB0aGlzLm5vdGUgPSBcInRlc3RcIjtcclxuICAgXHRcdHRoaXMuaW9lX25hbWUgPSBcInRlc3RcIjtcclxuICAgdGhpcy5pb2VfcmVsYXRpb24gPSBcInRlc3RcIjtcclxuICAgdGhpcy5pb2VfYWRkcmVzcyA9IFwidGVzdFwiO1xyXG4gICB0aGlzLmlvZV9jb250YWN0ID0gXCIxMjM0XCI7XHJcbiAgIHRoaXMuaW9lX2VzdGFibGlzaG1lbnQgPSBcInRlc3RcIjsqL1xuXG5cdFx0XHR0aGlzLnVzZXJuYW1lID0gXCJuYVwiO1xuXHRcdFx0dGhpcy5wYXNzd29yZCA9IFwiXCI7XG5cdFx0XHR0aGlzLnBhc3N3b3JkX2NvbmZpcm0gPSBcIlwiO1xuXG5cdFx0XHR0aGlzLmZpcnN0bmFtZSA9IFwiXCI7XG5cdFx0XHR0aGlzLmxhc3RuYW1lID0gXCJcIjtcblx0XHRcdHRoaXMuZW1haWwgPSBcIlwiO1xuXHRcdFx0dGhpcy5uaWNrbmFtZSA9IFwiXCI7XG5cdFx0XHR0aGlzLmdlbmRlciA9IFwibWFsZVwiO1xuXHRcdFx0Ly90aGlzLmJpcnRoZGF5ID0gXCJcIjtcblx0XHRcdHRoaXMuc3RhdHVzID0gXCJzaW5nbGVcIjtcblx0XHRcdHRoaXMubmF0aW9uYWxpdHkgPSBcIlwiO1xuXHRcdFx0dGhpcy5jb250YWN0ID0gXCJcIjtcblx0XHRcdHRoaXMuYWRkcmVzcyA9IFwiXCI7XG5cdFx0XHR0aGlzLm5vdGUgPSBcIlwiO1xuXHRcdFx0dGhpcy5tb250aCA9IFwiMFwiO1xuXHRcdFx0dGhpcy5kYXkgPSBcIjBcIjtcblx0XHRcdHRoaXMueWVhciA9IFwiMFwiO1xuXG5cdFx0XHR0aGlzLmlvZV9uYW1lID0gXCJcIjtcblx0XHRcdHRoaXMuaW9lX3JlbGF0aW9uID0gXCJcIjtcblx0XHRcdHRoaXMuaW9lX2FkZHJlc3MgPSBcIlwiO1xuXHRcdFx0dGhpcy5pb2VfY29udGFjdCA9IFwiXCI7XG5cdFx0XHR0aGlzLmlvZV9lc3RhYmxpc2htZW50ID0gXCJuL2FcIjtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdzdWJtaXQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzdWJtaXQoKSB7XG5cdFx0XHR2YXIgZGF0YSA9IHtcblx0XHRcdFx0dXNlcm5hbWU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy51c2VybmFtZSksXG5cdFx0XHRcdHBhc3N3b3JkOiB0aGlzLnByb3BlclZhbHVlKHRoaXMucGFzc3dvcmQpLFxuXHRcdFx0XHRwYXNzd29yZF9jb25maXJtOiB0aGlzLnByb3BlclZhbHVlKHRoaXMucGFzc3dvcmRfY29uZmlybSksXG5cblx0XHRcdFx0Zmlyc3RuYW1lOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuZmlyc3RuYW1lKSxcblx0XHRcdFx0bGFzdG5hbWU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5sYXN0bmFtZSksXG5cdFx0XHRcdGVtYWlsOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuZW1haWwpLFxuXHRcdFx0XHRuaWNrbmFtZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLm5pY2tuYW1lKSxcblx0XHRcdFx0Z2VuZGVyOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuZ2VuZGVyKSxcblx0XHRcdFx0Ly9iaXJ0aGRheSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuYmlydGhkYXkgKSxcblx0XHRcdFx0YmlydGhkYXk6IHRoaXMubW9udGggKyBcIi1cIiArIHRoaXMuZGF5ICsgXCItXCIgKyB0aGlzLnllYXIsXG5cdFx0XHRcdHN0YXR1czogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLnN0YXR1cyksXG5cdFx0XHRcdG5hdGlvbmFsaXR5OiB0aGlzLnByb3BlclZhbHVlKHRoaXMubmF0aW9uYWxpdHkpLFxuXHRcdFx0XHRjb250YWN0OiB0aGlzLnByb3BlclZhbHVlKHRoaXMuY29udGFjdCksXG5cdFx0XHRcdGFkZHJlc3M6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5hZGRyZXNzKSxcblx0XHRcdFx0bm90ZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLm5vdGUpLFxuXG5cdFx0XHRcdGlvZV9uYW1lOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaW9lX25hbWUpLFxuXHRcdFx0XHRpb2VfcmVsYXRpb246IHRoaXMucHJvcGVyVmFsdWUodGhpcy5pb2VfcmVsYXRpb24pLFxuXHRcdFx0XHRpb2VfYWRkcmVzczogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmlvZV9hZGRyZXNzKSxcblx0XHRcdFx0aW9lX2NvbnRhY3Q6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5pb2VfY29udGFjdCksXG5cdFx0XHRcdGlvZV9lc3RhYmxpc2htZW50OiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaW9lX2VzdGFibGlzaG1lbnQpLFxuXHRcdFx0XHR0eXBlOiBcIk9ubGluZVwiLFxuXHRcdFx0XHRkYXRlX2V4cGlyZWRfdGV4dDogXCJcIixcblx0XHRcdFx0ZGF0ZV9leHBpcmVkX251bWJlcjogXCJcIixcblx0XHRcdFx0ZDogXCJcIlxuXHRcdFx0fTtcblxuXHRcdFx0dmFyIHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRlRGF0YShkYXRhKTtcblxuXHRcdFx0aWYgKCF2YWxpZGF0aW9uWyd2YWxpZCddKSB7XG5cdFx0XHRcdGFsZXJ0KHZhbGlkYXRpb25bJ21lc3NhZ2UnXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnBvc3RTdWJtaXRBcHBsaWNhdGlvbihkYXRhKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICd2YWxpZGF0ZURhdGEnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZURhdGEoZGF0YSkge1xuXHRcdFx0dmFyIHZhbGlkID0gdHJ1ZTtcblx0XHRcdHZhciBtZXNzYWdlID0gXCJWYWxpZGF0ZWQhXCI7XG5cblx0XHRcdGlmICh0aGlzLnVzZXJuYW1lID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiVXNlcm5hbWUgaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wYXNzd29yZCA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIlBhc3N3b3JkIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMucGFzc3dvcmRfY29uZmlybSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIlJlLXR5cGUgUGFzc293cmRcIjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmZpcnN0bmFtZSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIkZpcnN0bmFtZSBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmxhc3RuYW1lID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiTGFzdG5hbWUgaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5lbWFpbCA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIk1pZGRsZSBOYW1lIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCF0aGlzLmlzVmFsaWRFbWFpbEFkZHJlc3ModGhpcy5lbWFpbCkpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiSW52YWxpZCBFbWFpbCBBZGRyZXNzXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5uaWNrbmFtZSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIk5pY2stbmFtZSBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmdlbmRlciA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIkdlbmRlciBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdC8vaWYgKHRoaXMuYmlydGhkYXkgPT0gXCJcIikgeyBtZXNzYWdlID0gXCJCaXJ0aGRheSBpcyBlbXB0eSFcIiB9XG5cdFx0XHRpZiAodGhpcy5zdGF0dXMgPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJTdGF0dXMgaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5uYXRpb25hbGl0eSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIk5hdGlvbmFsaXR5IGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuY29udGFjdCA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIkNvbnRhY3QgaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5hZGRyZXNzID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiQWRkcmVzcyBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmlvZV9uYW1lID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiSU9FIGZpZWxkIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuaW9lX3JlbGF0aW9uID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiSU9FIGZpZWxkIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuaW9lX2FkZHJlc3MgPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJJT0UgZmllbGQgaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5pb2VfY29udGFjdCA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIklPRSBmaWVsZCBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmlvZV9lc3RhYmxpc2htZW50ID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiSU9FIGZpZWxkIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXG5cdFx0XHR2YWxpZCA9IG1lc3NhZ2UgIT0gXCJWYWxpZGF0ZWQhXCIgPyBmYWxzZSA6IHZhbGlkO1xuXHRcdFx0cmV0dXJuIHsgdmFsaWQ6IHZhbGlkLCBtZXNzYWdlOiBtZXNzYWdlIH07XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncG9zdFN1Ym1pdEFwcGxpY2F0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcG9zdFN1Ym1pdEFwcGxpY2F0aW9uKGRhdGEpIHtcblx0XHRcdHZhciBsb2NhdGlvbiA9IHRoaXMubG9jYXRpb247XG5cdFx0XHR2YXIgdm0gPSB0aGlzO1xuXHRcdFx0dGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vZWMyLTU0LTE4Ni01LTEyNi51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjUwMDAvYXV0aC9yZWdpc3RlcicsIGRhdGEpLnN1Y2Nlc3MoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24ub3JpZ2luICsgXCIvIy9yZWdpc3RyYXRpb24tcHJvY2Vzc1wiO1xuXHRcdFx0fSkuZXJyb3IoZnVuY3Rpb24gKGVycikge1xuXHRcdFx0XHRhbGVydChlcnJbJ21lc3NhZ2UnXSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICd2ZXJpZnlfYWNjb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZlcmlmeV9hY2NvdW50KGNvZGUpIHtcblx0XHRcdHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2VjMi01NC0xODYtNS0xMjYudXMtd2VzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo1MDAwL2F1dGgvcmVnaXN0cmF0aW9uLWNvbmZpcm1hdGlvbicsIHsgY29kZTogY29kZSB9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICd2YWxpZEZpZWxkcycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkRmllbGRzKCkge1xuXHRcdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcdHVzZXJuYW1lOiB0aGlzLnByb3BlclZhbHVlKHRoaXMudXNlcm5hbWUpLFxuXHRcdFx0XHRwYXNzd29yZDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLnBhc3N3b3JkKSxcblx0XHRcdFx0cGFzc3dvcmRfY29uZmlybTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLnBhc3N3b3JkX2NvbmZpcm0pLFxuXHRcdFx0XHRmaXJzdG5hbWU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5maXJzdG5hbWUpLFxuXHRcdFx0XHRsYXN0bmFtZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmxhc3RuYW1lKSxcblx0XHRcdFx0ZW1haWw6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5lbWFpbCksXG5cdFx0XHRcdG5pY2tuYW1lOiB0aGlzLnByb3BlclZhbHVlKHRoaXMubmlja25hbWUpLFxuXHRcdFx0XHRnZW5kZXI6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5nZW5kZXIpLFxuXHRcdFx0XHQvL2JpcnRoZGF5IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5iaXJ0aGRheSApLFxuXHRcdFx0XHRzdGF0dXM6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5zdGF0dXMpLFxuXHRcdFx0XHRuYXRpb25hbGl0eTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLm5hdGlvbmFsaXR5KSxcblx0XHRcdFx0Y29udGFjdDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmNvbnRhY3QpLFxuXHRcdFx0XHRhZGRyZXNzOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuYWRkcmVzcyksXG5cdFx0XHRcdG5vdGU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5ub3RlKSxcblx0XHRcdFx0aW9lX25hbWU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5pb2VfbmFtZSksXG5cdFx0XHRcdGlvZV9yZWxhdGlvbjogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmlvZV9yZWxhdGlvbiksXG5cdFx0XHRcdGlvZV9hZGRyZXNzOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaW9lX2FkZHJlc3MpLFxuXHRcdFx0XHRpb2VfY29udGFjdDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmlvZV9jb250YWN0KSxcblx0XHRcdFx0aW9lX2VzdGFibGlzaG1lbnQ6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5pb2VfZXN0YWJsaXNobWVudCksXG5cdFx0XHRcdHR5cGU6IFwiT25saW5lXCIsXG5cdFx0XHRcdGRhdGVfZXhwaXJlZF90ZXh0OiBcIlwiLFxuXHRcdFx0XHRkYXRlX2V4cGlyZWRfbnVtYmVyOiBcIlwiLFxuXHRcdFx0XHRkOiBcIlwiXG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gdGhpcy52YWxpZGF0ZURhdGEoZGF0YSlbJ3ZhbGlkJ10gPyBmYWxzZSA6IHRydWU7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaXNWYWxpZEVtYWlsQWRkcmVzcycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGlzVmFsaWRFbWFpbEFkZHJlc3MoZW1haWxBZGRyZXNzKSB7XG5cdFx0XHR2YXIgcGF0dGVybiA9IC9eKFthLXpcXGQhIyQlJicqK1xcLVxcLz0/Xl9ge3x9flxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0rKFxcLlthLXpcXGQhIyQlJicqK1xcLVxcLz0/Xl9ge3x9flxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0rKSp8XCIoKChbIFxcdF0qXFxyXFxuKT9bIFxcdF0rKT8oW1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4N2ZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2VcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGQtXFx4N2ZcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkqKChbIFxcdF0qXFxyXFxuKT9bIFxcdF0rKT9cIilAKChbYS16XFxkXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXXxbYS16XFxkXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXVthLXpcXGRcXC0uX35cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKlthLXpcXGRcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKVxcLikrKFthLXpcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdfFthLXpcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdW2EtelxcZFxcLS5fflxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0qW2EtelxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pXFwuPyQvaTtcblx0XHRcdHJldHVybiBwYXR0ZXJuLnRlc3QoZW1haWxBZGRyZXNzKTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gUGFnZUNvbnRyb2xsZXI7XG59KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wYWdlcy9wYWdlLmNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgUGFnZUNvbnRyb2xsZXIge1xyXG5cdGNvbnN0cnVjdG9yICgkaHR0cCwgJGxvY2F0aW9uLCAkbG9nKSB7XHJcblx0XHQnbmdJbmplY3QnO1xyXG5cdFx0dGhpcy4kaHR0cCA9ICRodHRwO1xyXG5cdFx0dGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG5cdFx0dGhpcy4kbG9nID0gJGxvZztcclxuXHJcblx0XHR0aGlzLmZpZWxkc2V0ID0gZmFsc2U7XHJcblxyXG5cdFx0dmFyIHZlcmlmaWNhdGlvbl9jb2RlX2hlcmUgPSB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZSgnY29uZmlybWF0aW9uLWNvZGUnLCAkbG9jYXRpb24uYWJzVXJsKCkpO1xyXG5cclxuXHRcdGlmICh2ZXJpZmljYXRpb25fY29kZV9oZXJlKSB7XHJcblx0XHRcdHRoaXMudmVyaWZ5X2FjY291bnQodmVyaWZpY2F0aW9uX2NvZGVfaGVyZSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy50ZXN0R2VuZXJhdG9yKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5nZXRFc3RhYmxpc2htZW50KCk7XHJcblx0fVxyXG5cdGdldFBhcmFtZXRlckJ5TmFtZShuYW1lLCB1cmwpIHtcclxuXHRcdG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csIFwiXFxcXCQmXCIpO1xyXG5cdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIls/Jl1cIiArIG5hbWUgKyBcIig9KFteJiNdKil8JnwjfCQpXCIpLFxyXG5cdFx0cmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcclxuXHRcdGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XHJcblx0XHRpZiAoIXJlc3VsdHNbMl0pIHJldHVybiAnJztcclxuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKTtcclxuXHR9XHJcblx0cG9zdE1lc3NhZ2UoKXtcclxuXHRcdHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2VjMi01NC0xODYtNS0xMjYudXMtd2VzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo1MDAwL2FwaS9tZXNzYWdlJyx7bXNnOiB0aGlzLm1lc3NhZ2UgPyB0aGlzLm1lc3NhZ2UgOiBcIlwifSk7XHJcblx0fVxyXG5cdGdldE1lc3NhZ2VzKCl7XHJcblx0XHR2YXIgdm0gPSB0aGlzO1xyXG5cdFx0dGhpcy4kaHR0cC5nZXQoJ2h0dHA6Ly9lYzItNTQtMTg2LTUtMTI2LnVzLXdlc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206NTAwMC9hcGkvZXN0YWJsaXNobWVudHMnKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcblx0XHRcdHZtLm1lc3NhZ2VzID0gcmVzdWx0LmRhdGE7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2V0RXN0YWJsaXNobWVudCgpe1xyXG5cdFx0dmFyIHZtID0gdGhpcztcclxuXHRcdHRoaXMuJGh0dHAuZ2V0KCdodHRwOi8vZWMyLTU0LTE4Ni01LTEyNi51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjUwMDAvYXBpL2VzdGFibGlzaG1lbnRzJykudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG5cdFx0XHR2bS5tZXNzYWdlcyA9IHJlc3VsdC5kYXRhO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHByb3BlclZhbHVlKCB2YWx1ZSApe1xyXG5cdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSAhPSAndW5kZWZpbmVkJyA/IHZhbHVlIDogJyc7XHJcblx0fVxyXG5cdHRlc3RHZW5lcmF0b3IoKXtcclxuXHRcdC8qdGhpcy51c2VybmFtZSA9IFwidGVzdFwiO1xyXG5cdFx0dGhpcy5wYXNzd29yZCA9IFwidGVzdFwiO1xyXG5cdFx0dGhpcy5wYXNzd29yZF9jb25maXJtID0gXCJ0ZXN0XCI7XHJcblxyXG5cdFx0dGhpcy5maXJzdG5hbWUgPSBcInRlc3RcIjtcclxuXHRcdHRoaXMubGFzdG5hbWUgPSBcInRlc3RcIjtcclxuXHRcdHRoaXMuZW1haWwgPSBcInRlc3R1c2VyQDEyNy4wLjAuMVwiO1xyXG5cdFx0dGhpcy5uaWNrbmFtZSA9IFwidGVzdFwiO1xyXG5cdFx0dGhpcy5nZW5kZXIgPSBcIm1hbGVcIjtcclxuXHRcdHRoaXMuYmlydGhkYXkgPSBcInRlc3RcIjtcclxuXHRcdHRoaXMuc3RhdHVzID0gXCJzaW5nbGVcIjtcclxuXHRcdHRoaXMubmF0aW9uYWxpdHkgPSBcInRlc3RcIjtcclxuXHRcdHRoaXMuY29udGFjdCA9IFwiMTIzNFwiO1xyXG5cdFx0dGhpcy5hZGRyZXNzID0gXCJ0ZXN0XCI7XHJcblx0XHR0aGlzLm5vdGUgPSBcInRlc3RcIjtcclxuXHJcblx0XHR0aGlzLmlvZV9uYW1lID0gXCJ0ZXN0XCI7XHJcblx0XHR0aGlzLmlvZV9yZWxhdGlvbiA9IFwidGVzdFwiO1xyXG5cdFx0dGhpcy5pb2VfYWRkcmVzcyA9IFwidGVzdFwiO1xyXG5cdFx0dGhpcy5pb2VfY29udGFjdCA9IFwiMTIzNFwiO1xyXG5cdFx0dGhpcy5pb2VfZXN0YWJsaXNobWVudCA9IFwidGVzdFwiOyovXHJcblxyXG5cdFx0dGhpcy51c2VybmFtZSA9IFwibmFcIjtcclxuXHRcdHRoaXMucGFzc3dvcmQgPSBcIlwiO1xyXG5cdFx0dGhpcy5wYXNzd29yZF9jb25maXJtID0gXCJcIjtcclxuXHJcblx0XHR0aGlzLmZpcnN0bmFtZSA9IFwiXCI7XHJcblx0XHR0aGlzLmxhc3RuYW1lID0gXCJcIjtcclxuXHRcdHRoaXMuZW1haWwgPSBcIlwiO1xyXG5cdFx0dGhpcy5uaWNrbmFtZSA9IFwiXCI7XHJcblx0XHR0aGlzLmdlbmRlciA9IFwibWFsZVwiO1xyXG5cdFx0Ly90aGlzLmJpcnRoZGF5ID0gXCJcIjtcclxuXHRcdHRoaXMuc3RhdHVzID0gXCJzaW5nbGVcIjtcclxuXHRcdHRoaXMubmF0aW9uYWxpdHkgPSBcIlwiO1xyXG5cdFx0dGhpcy5jb250YWN0ID0gXCJcIjtcclxuXHRcdHRoaXMuYWRkcmVzcyA9IFwiXCI7XHJcblx0XHR0aGlzLm5vdGUgPSBcIlwiO1xyXG5cdFx0dGhpcy5tb250aCA9XCIwXCI7XHJcblx0XHR0aGlzLmRheSA9XCIwXCI7XHJcblx0XHR0aGlzLnllYXIgPVwiMFwiO1xyXG5cclxuXHRcdHRoaXMuaW9lX25hbWUgPSBcIlwiO1xyXG5cdFx0dGhpcy5pb2VfcmVsYXRpb24gPSBcIlwiO1xyXG5cdFx0dGhpcy5pb2VfYWRkcmVzcyA9IFwiXCI7XHJcblx0XHR0aGlzLmlvZV9jb250YWN0ID0gXCJcIjtcclxuXHRcdHRoaXMuaW9lX2VzdGFibGlzaG1lbnQgPSBcIm4vYVwiO1xyXG5cclxuXHR9XHJcblx0c3VibWl0KCl7XHJcblx0XHR2YXIgZGF0YSA9IHtcclxuXHRcdFx0dXNlcm5hbWUgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLnVzZXJuYW1lICksXHJcblx0XHRcdHBhc3N3b3JkIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5wYXNzd29yZCApLFxyXG5cdFx0XHRwYXNzd29yZF9jb25maXJtIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5wYXNzd29yZF9jb25maXJtICksXHJcblxyXG5cdFx0XHRmaXJzdG5hbWUgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmZpcnN0bmFtZSApLFxyXG5cdFx0XHRsYXN0bmFtZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMubGFzdG5hbWUgKSxcclxuXHRcdFx0ZW1haWwgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmVtYWlsICksXHJcblx0XHRcdG5pY2tuYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5uaWNrbmFtZSApLFxyXG5cdFx0XHRnZW5kZXIgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmdlbmRlciApLFxyXG5cdFx0XHQvL2JpcnRoZGF5IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5iaXJ0aGRheSApLFxyXG5cdFx0XHRiaXJ0aGRheSA6IHRoaXMubW9udGgrXCItXCIrdGhpcy5kYXkrXCItXCIrdGhpcy55ZWFyLFxyXG5cdFx0XHRzdGF0dXMgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLnN0YXR1cyApLFxyXG5cdFx0XHRuYXRpb25hbGl0eSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMubmF0aW9uYWxpdHkgKSxcclxuXHRcdFx0Y29udGFjdCA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuY29udGFjdCApLFxyXG5cdFx0XHRhZGRyZXNzIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5hZGRyZXNzICksXHJcblx0XHRcdG5vdGUgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLm5vdGUgKSxcclxuXHJcblx0XHRcdGlvZV9uYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5pb2VfbmFtZSApLFxyXG5cdFx0XHRpb2VfcmVsYXRpb24gOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmlvZV9yZWxhdGlvbiApLFxyXG5cdFx0XHRpb2VfYWRkcmVzcyA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaW9lX2FkZHJlc3MgKSxcclxuXHRcdFx0aW9lX2NvbnRhY3QgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmlvZV9jb250YWN0ICksXHJcblx0XHRcdGlvZV9lc3RhYmxpc2htZW50IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5pb2VfZXN0YWJsaXNobWVudCApLFxyXG5cdFx0XHR0eXBlOlwiT25saW5lXCIsXHJcblx0XHRcdGRhdGVfZXhwaXJlZF90ZXh0OiBcIlwiLFxyXG4gICAgICAgICAgICBkYXRlX2V4cGlyZWRfbnVtYmVyOlwiXCIsXHJcbiAgICAgICAgICAgIGQ6XCJcIixcclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRlRGF0YShkYXRhKTtcclxuXHJcblx0XHRpZiAoIXZhbGlkYXRpb25bJ3ZhbGlkJ10pIHtcclxuXHRcdFx0YWxlcnQodmFsaWRhdGlvblsnbWVzc2FnZSddKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLnBvc3RTdWJtaXRBcHBsaWNhdGlvbihkYXRhKTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cdHZhbGlkYXRlRGF0YSggZGF0YSApe1xyXG5cdFx0dmFyIHZhbGlkID0gdHJ1ZTtcclxuXHRcdHZhciBtZXNzYWdlID0gXCJWYWxpZGF0ZWQhXCI7XHJcblxyXG5cdFx0aWYgKHRoaXMudXNlcm5hbWUgPT0gXCJcIikgeyBtZXNzYWdlID0gXCJVc2VybmFtZSBpcyBlbXB0eSFcIiB9XHJcblx0XHRpZiAodGhpcy5wYXNzd29yZCA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIlBhc3N3b3JkIGlzIGVtcHR5IVwiIH1cclxuXHRcdGlmICh0aGlzLnBhc3N3b3JkX2NvbmZpcm0gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJSZS10eXBlIFBhc3Nvd3JkXCIgfVxyXG5cdFx0aWYgKHRoaXMuZmlyc3RuYW1lID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiRmlyc3RuYW1lIGlzIGVtcHR5IVwiIH1cclxuXHRcdGlmICh0aGlzLmxhc3RuYW1lID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiTGFzdG5hbWUgaXMgZW1wdHkhXCIgfVxyXG5cdFx0aWYgKHRoaXMuZW1haWwgPT0gXCJcIikgeyBtZXNzYWdlID0gXCJNaWRkbGUgTmFtZSBpcyBlbXB0eSFcIiB9XHJcblx0XHRpZiAoIXRoaXMuaXNWYWxpZEVtYWlsQWRkcmVzcyh0aGlzLmVtYWlsKSkgeyBtZXNzYWdlID0gXCJJbnZhbGlkIEVtYWlsIEFkZHJlc3NcIiB9XHJcblx0XHRpZiAodGhpcy5uaWNrbmFtZSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIk5pY2stbmFtZSBpcyBlbXB0eSFcIiB9XHJcblx0XHRpZiAodGhpcy5nZW5kZXIgPT0gXCJcIikgeyBtZXNzYWdlID0gXCJHZW5kZXIgaXMgZW1wdHkhXCIgfVxyXG5cdFx0Ly9pZiAodGhpcy5iaXJ0aGRheSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIkJpcnRoZGF5IGlzIGVtcHR5IVwiIH1cclxuXHRcdGlmICh0aGlzLnN0YXR1cyA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIlN0YXR1cyBpcyBlbXB0eSFcIiB9XHJcblx0XHRpZiAodGhpcy5uYXRpb25hbGl0eSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIk5hdGlvbmFsaXR5IGlzIGVtcHR5IVwiIH1cclxuXHRcdGlmICh0aGlzLmNvbnRhY3QgPT0gXCJcIikgeyBtZXNzYWdlID0gXCJDb250YWN0IGlzIGVtcHR5IVwiIH1cclxuXHRcdGlmICh0aGlzLmFkZHJlc3MgPT0gXCJcIikgeyBtZXNzYWdlID0gXCJBZGRyZXNzIGlzIGVtcHR5IVwiIH1cclxuXHRcdGlmICh0aGlzLmlvZV9uYW1lID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiSU9FIGZpZWxkIGlzIGVtcHR5IVwiIH1cclxuXHRcdGlmICh0aGlzLmlvZV9yZWxhdGlvbiA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIklPRSBmaWVsZCBpcyBlbXB0eSFcIiB9XHJcblx0XHRpZiAodGhpcy5pb2VfYWRkcmVzcyA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIklPRSBmaWVsZCBpcyBlbXB0eSFcIiB9XHJcblx0XHRpZiAodGhpcy5pb2VfY29udGFjdCA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIklPRSBmaWVsZCBpcyBlbXB0eSFcIiB9XHJcblx0XHRpZiAodGhpcy5pb2VfZXN0YWJsaXNobWVudCA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIklPRSBmaWVsZCBpcyBlbXB0eSFcIiB9XHJcblxyXG5cdFx0dmFsaWQgPSBtZXNzYWdlICE9IFwiVmFsaWRhdGVkIVwiID8gZmFsc2UgOiB2YWxpZDtcclxuXHRcdHJldHVybiB7dmFsaWQ6dmFsaWQsbWVzc2FnZTptZXNzYWdlfTtcclxuXHR9XHJcblx0cG9zdFN1Ym1pdEFwcGxpY2F0aW9uKGRhdGEpe1xyXG5cdFx0dmFyIGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbjtcclxuXHRcdHZhciB2bSA9IHRoaXM7XHJcblx0XHR0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9lYzItNTQtMTg2LTUtMTI2LnVzLXdlc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206NTAwMC9hdXRoL3JlZ2lzdGVyJywgZGF0YSkuc3VjY2VzcyhmdW5jdGlvbigpe1xyXG5cdFx0XHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24ub3JpZ2luICsgXCIvIy9yZWdpc3RyYXRpb24tcHJvY2Vzc1wiXHJcblx0XHR9KS5lcnJvcihmdW5jdGlvbihlcnIpe1xyXG5cdFx0XHRhbGVydCggZXJyWydtZXNzYWdlJ10gKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHR2ZXJpZnlfYWNjb3VudCggY29kZSApe1xyXG5cdFx0dGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vZWMyLTU0LTE4Ni01LTEyNi51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjUwMDAvYXV0aC9yZWdpc3RyYXRpb24tY29uZmlybWF0aW9uJyx7Y29kZTogY29kZX0pO1xyXG5cdH1cclxuXHR2YWxpZEZpZWxkcygpe1xyXG5cdFx0dmFyIGRhdGEgPSB7XHJcblx0XHRcdHVzZXJuYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy51c2VybmFtZSApLFxyXG5cdFx0XHRwYXNzd29yZCA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMucGFzc3dvcmQgKSxcclxuXHRcdFx0cGFzc3dvcmRfY29uZmlybSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMucGFzc3dvcmRfY29uZmlybSApLFxyXG5cdFx0XHRmaXJzdG5hbWUgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmZpcnN0bmFtZSApLFxyXG5cdFx0XHRsYXN0bmFtZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMubGFzdG5hbWUgKSxcclxuXHRcdFx0ZW1haWwgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmVtYWlsICksXHJcblx0XHRcdG5pY2tuYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5uaWNrbmFtZSApLFxyXG5cdFx0XHRnZW5kZXIgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmdlbmRlciApLFxyXG5cdFx0XHQvL2JpcnRoZGF5IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5iaXJ0aGRheSApLFxyXG5cdFx0XHRzdGF0dXMgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLnN0YXR1cyApLFxyXG5cdFx0XHRuYXRpb25hbGl0eSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMubmF0aW9uYWxpdHkgKSxcclxuXHRcdFx0Y29udGFjdCA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuY29udGFjdCApLFxyXG5cdFx0XHRhZGRyZXNzIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5hZGRyZXNzICksXHJcblx0XHRcdG5vdGUgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLm5vdGUgKSxcclxuXHRcdFx0aW9lX25hbWUgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmlvZV9uYW1lICksXHJcblx0XHRcdGlvZV9yZWxhdGlvbiA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaW9lX3JlbGF0aW9uICksXHJcblx0XHRcdGlvZV9hZGRyZXNzIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5pb2VfYWRkcmVzcyApLFxyXG5cdFx0XHRpb2VfY29udGFjdCA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaW9lX2NvbnRhY3QgKSxcclxuXHRcdFx0aW9lX2VzdGFibGlzaG1lbnQgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmlvZV9lc3RhYmxpc2htZW50ICksXHJcblx0XHRcdHR5cGU6XCJPbmxpbmVcIixcclxuXHRcdFx0ZGF0ZV9leHBpcmVkX3RleHQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGRhdGVfZXhwaXJlZF9udW1iZXI6XCJcIixcclxuICAgICAgICAgICAgZDpcIlwiLFxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gKHRoaXMudmFsaWRhdGVEYXRhKGRhdGEpWyd2YWxpZCddKT9mYWxzZTp0cnVlO1xyXG5cdH1cclxuXHRpc1ZhbGlkRW1haWxBZGRyZXNzKGVtYWlsQWRkcmVzcyl7XHJcblx0XHQgICB2YXIgcGF0dGVybiA9IC9eKFthLXpcXGQhIyQlJicqK1xcLVxcLz0/Xl9ge3x9flxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0rKFxcLlthLXpcXGQhIyQlJicqK1xcLVxcLz0/Xl9ge3x9flxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0rKSp8XCIoKChbIFxcdF0qXFxyXFxuKT9bIFxcdF0rKT8oW1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4N2ZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2VcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGQtXFx4N2ZcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkqKChbIFxcdF0qXFxyXFxuKT9bIFxcdF0rKT9cIilAKChbYS16XFxkXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXXxbYS16XFxkXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXVthLXpcXGRcXC0uX35cXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKlthLXpcXGRcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKVxcLikrKFthLXpcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdfFthLXpcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdW2EtelxcZFxcLS5fflxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0qW2EtelxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pXFwuPyQvaTtcclxuICAgICAgICAgICAgICByZXR1cm4gcGF0dGVybi50ZXN0KGVtYWlsQWRkcmVzcyk7XHJcblx0fVxyXG5cdCBcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BhZ2VzL3BhZ2UuY29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEV2ZW50Q29udHJvbGxlciA9IGV4cG9ydHMuRXZlbnRDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBFdmVudENvbnRyb2xsZXIoJGh0dHAsICRsb2NhdGlvbiwgJGxvZywgJHN0YXRlUGFyYW1zLCAkc3RhdGUsICRzY2UpIHtcblx0XHQnbmdJbmplY3QnO1xuXG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50Q29udHJvbGxlcik7XG5cblx0XHR0aGlzLiRodHRwID0gJGh0dHA7XG5cdFx0dGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXHRcdHRoaXMuJGxvZyA9ICRsb2c7XG5cdFx0dGhpcy5ldmVudHMgPSB0aGlzLmdldEV2ZW50cygpO1xuXG5cdFx0dmFyIHVybF9zbHVnID0gdGhpcy5sb2NhdGlvbi5oYXNoO1xuXHRcdGlmICh1cmxfc2x1Zy5zcGxpdChcIi9cIikubGVuZ3RoID09IDMpIHtcblx0XHRcdHRoaXMuZXZudCA9IHRoaXMuZ2V0RXZlbnQoJHN0YXRlLnBhcmFtcy5zbHVnKTtcblxuXHRcdFx0Ly9jb25zb2xlLmxvZyh0aGlzLmV2bnQpO1xuXHRcdH1cblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhFdmVudENvbnRyb2xsZXIsIFt7XG5cdFx0a2V5OiAnZ2V0RXZlbnRzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0RXZlbnRzKCkge1xuXHRcdFx0dmFyIHZtID0gdGhpcztcblx0XHRcdHRoaXMuJGh0dHAuZ2V0KCdodHRwOi8vZWMyLTU0LTE4Ni01LTEyNi51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjUwMDAvZXZlbnRzJykudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHRcdHZtLmV2ZW50cyA9IHJlc3VsdC5kYXRhO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZ2V0RXZlbnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRFdmVudChzbHVnKSB7XG5cdFx0XHR2YXIgdm0gPSB0aGlzO1xuXHRcdFx0dGhpcy4kaHR0cC5nZXQoJ2h0dHA6Ly9lYzItNTQtMTg2LTUtMTI2LnVzLXdlc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206NTAwMC9ldmVudHMvJyArIHNsdWcpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdFx0XHR2bS5ldm50ID0gcmVzdWx0LmRhdGE7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gRXZlbnRDb250cm9sbGVyO1xufSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGFnZXMvZXZlbnQuY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBFdmVudENvbnRyb2xsZXIge1xyXG5cdGNvbnN0cnVjdG9yICgkaHR0cCwgJGxvY2F0aW9uLCAkbG9nLCAkc3RhdGVQYXJhbXMsICRzdGF0ZSwkc2NlKSB7XHJcblx0XHQnbmdJbmplY3QnO1xyXG5cdFx0dGhpcy4kaHR0cCA9ICRodHRwO1xyXG5cdFx0dGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG5cdFx0dGhpcy4kbG9nID0gJGxvZztcclxuXHRcdHRoaXMuZXZlbnRzPSB0aGlzLmdldEV2ZW50cygpO1xyXG5cclxuXHRcdHZhciB1cmxfc2x1ZyA9IHRoaXMubG9jYXRpb24uaGFzaDtcclxuXHRcdGlmKHVybF9zbHVnLnNwbGl0KFwiL1wiKS5sZW5ndGggPT0gMyl7XHJcblx0XHRcdHRoaXMuZXZudD0gdGhpcy5nZXRFdmVudCgkc3RhdGUucGFyYW1zLnNsdWcpO1xyXG5cclxuXHRcdFx0Ly9jb25zb2xlLmxvZyh0aGlzLmV2bnQpO1xyXG5cdFx0XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cclxuXHR9XHJcblx0XHJcblx0Z2V0RXZlbnRzKCl7XHJcblx0XHR2YXIgdm0gPSB0aGlzO1xyXG5cdFx0dGhpcy4kaHR0cC5nZXQoJ2h0dHA6Ly9lYzItNTQtMTg2LTUtMTI2LnVzLXdlc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206NTAwMC9ldmVudHMnKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcblx0XHRcdHZtLmV2ZW50cyA9IHJlc3VsdC5kYXRhO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXRFdmVudChzbHVnKXtcclxuXHRcdHZhciB2bSA9IHRoaXM7XHJcblx0XHR0aGlzLiRodHRwLmdldCgnaHR0cDovL2VjMi01NC0xODYtNS0xMjYudXMtd2VzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo1MDAwL2V2ZW50cy8nK3NsdWcpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuXHRcdFx0dm0uZXZudCA9IHJlc3VsdC5kYXRhO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BhZ2VzL2V2ZW50LmNvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBQcm9maWxlQ29udHJvbGxlciA9IGV4cG9ydHMuUHJvZmlsZUNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIFByb2ZpbGVDb250cm9sbGVyKCRodHRwLCAkYXV0aCkge1xuXHRcdCduZ0luamVjdCc7XG5cblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvZmlsZUNvbnRyb2xsZXIpO1xuXG5cdFx0dGhpcy4kaHR0cCA9ICRodHRwO1xuXHRcdHRoaXMuJGF1dGggPSAkYXV0aDtcblxuXHRcdHRoaXMuZ2V0cHJvZmlsZSgpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFByb2ZpbGVDb250cm9sbGVyLCBbe1xuXHRcdGtleTogJ2dldHByb2ZpbGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRwcm9maWxlKCkge1xuXHRcdFx0dmFyIHZtID0gdGhpcztcblx0XHRcdHZhciB0b2tlbiA9IHRoaXMuJGF1dGguZ2V0VG9rZW4oKTtcblx0XHRcdHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2VjMi01NC0xODYtNS0xMjYudXMtd2VzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo1MDAwL2FwaS9wcm9maWxlJywgeyB0b2tlbjogdG9rZW4gfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHRcdHZhciBkYXRhID0gcmVzdWx0LmRhdGE7XG5cblx0XHRcdFx0dm0uZGlzcGxheVByb2ZsZShkYXRhKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3VwZGF0ZVByb2ZpbGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVQcm9maWxlKCkge1xuXHRcdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcdGZpcnN0bmFtZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmZpcnN0bmFtZSksXG5cdFx0XHRcdGxhc3RuYW1lOiB0aGlzLnByb3BlclZhbHVlKHRoaXMubGFzdG5hbWUpLFxuXHRcdFx0XHRlbWFpbDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmVtYWlsKSxcblx0XHRcdFx0bmlja25hbWU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5uaWNrbmFtZSksXG5cdFx0XHRcdGdlbmRlcjogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmdlbmRlciksXG5cdFx0XHRcdGJpcnRoZGF5OiB0aGlzLnByb3BlclZhbHVlKHRoaXMuYmlydGhkYXkpLFxuXHRcdFx0XHRzdGF0dXM6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5zdGF0dXMpLFxuXHRcdFx0XHRuYXRpb25hbGl0eTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLm5hdGlvbmFsaXR5KSxcblx0XHRcdFx0Y29udGFjdDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmNvbnRhY3QpLFxuXHRcdFx0XHRhZGRyZXNzOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuYWRkcmVzcyksXG5cdFx0XHRcdG5vdGU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5ub3RlKSxcblxuXHRcdFx0XHRpb2VfbmFtZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmlvZV9uYW1lKSxcblx0XHRcdFx0aW9lX3JlbGF0aW9uOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaW9lX3JlbGF0aW9uKSxcblx0XHRcdFx0aW9lX2FkZHJlc3M6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5pb2VfYWRkcmVzcyksXG5cdFx0XHRcdGlvZV9jb250YWN0OiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaW9lX2NvbnRhY3QpLFxuXHRcdFx0XHRpb2VfZXN0YWJsaXNobWVudDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmlvZV9lc3RhYmxpc2htZW50KVxuXHRcdFx0fTtcblxuXHRcdFx0dmFyIHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRlRGF0YShkYXRhKTtcblxuXHRcdFx0aWYgKCF2YWxpZGF0aW9uWyd2YWxpZCddKSB7XG5cdFx0XHRcdGFsZXJ0KHZhbGlkYXRpb25bJ21lc3NhZ2UnXSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMudXBkYXRlU3VibWl0QXBwbGljYXRpb24oZGF0YSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncHJvcGVyVmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBwcm9wZXJWYWx1ZSh2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSAhPSAndW5kZWZpbmVkJyA/IHZhbHVlIDogJyc7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAndmFsaWRhdGVEYXRhJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGVEYXRhKGRhdGEpIHtcblx0XHRcdHZhciB2YWxpZCA9IHRydWU7XG5cdFx0XHR2YXIgbWVzc2FnZSA9IFwiVmFsaWRhdGVkIVwiO1xuXG5cdFx0XHRpZiAoZGF0YVsndXNlcm5hbWUnXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIkVtcHR5IFVzZXJuYW1lIVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ2ZpcnN0bmFtZSddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiRW1wdHkgRmlyc3RuYW1lIVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ2xhc3RuYW1lJ10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJFbXB0eSBMYXN0bmFtZSFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWydlbWFpbCddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiRW1wdHkgRW1haWwgQWRkcmVzcyFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWydnZW5kZXInXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIkVtcHR5IEVtYWlsIEFkZHJlc3MhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YVsnYmlydGhkYXknXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIkVtcHR5IEJpcnRoZGF5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ3N0YXR1cyddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiRW1wdHkgU3RhdHVzIVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ25hdGlvbmFsaXR5J10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJObyBOYXRpb25hbGl0eVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ2NvbnRhY3QnXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIk5vIE5hdGlvbmFsaXR5XCI7XG5cdFx0XHR9XG5cblx0XHRcdHZhbGlkID0gbWVzc2FnZSAhPSBcIlZhbGlkYXRlZCFcIiA/IGZhbHNlIDogdmFsaWQ7XG5cdFx0XHRyZXR1cm4geyB2YWxpZDogdmFsaWQsIG1lc3NhZ2U6IG1lc3NhZ2UgfTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICd1cGRhdGVTdWJtaXRBcHBsaWNhdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVN1Ym1pdEFwcGxpY2F0aW9uKGRhdGEpIHtcblx0XHRcdHZhciB0b2tlbiA9IHRoaXMuJGF1dGguZ2V0VG9rZW4oKTtcblx0XHRcdHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2VjMi01NC0xODYtNS0xMjYudXMtd2VzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo1MDAwL2FwaS9wcm9maWxlLXVwZGF0ZScsIHsgZGF0YTogZGF0YSwgdG9rZW46IHRva2VuIH0pLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdFx0XHRhbGVydChyZXN1bHQubWVzc2FnZSk7XG5cdFx0XHR9KS5lcnJvcihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGFsZXJ0KFwiVW5hYmxlIHRvIFByb2NlZWQuIFwiKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2Rpc3BsYXlQcm9mbGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBkaXNwbGF5UHJvZmxlKGRhdGEpIHtcblx0XHRcdHRoaXMuZmlyc3RuYW1lID0gZGF0YS5maXJzdG5hbWU7XG5cdFx0XHR0aGlzLmxhc3RuYW1lID0gZGF0YS5sYXN0bmFtZTtcblx0XHRcdHRoaXMuZW1haWwgPSBkYXRhLmVtYWlsO1xuXHRcdFx0dGhpcy5uaWNrbmFtZSA9IGRhdGEubmlja25hbWU7XG5cdFx0XHR0aGlzLmdlbmRlciA9IGRhdGEuZ2VuZGVyO1xuXHRcdFx0dGhpcy5iaXJ0aGRheSA9IGRhdGEuYmlydGhkYXk7XG5cdFx0XHR0aGlzLnN0YXR1cyA9IGRhdGEuc3RhdHVzO1xuXHRcdFx0dGhpcy5uYXRpb25hbGl0eSA9IGRhdGEubmF0aW9uYWxpdHk7XG5cdFx0XHR0aGlzLmNvbnRhY3QgPSBkYXRhLmNvbnRhY3Q7XG5cdFx0XHR0aGlzLmFkZHJlc3MgPSBkYXRhLmFkZHJlc3M7XG5cdFx0XHR0aGlzLm5vdGUgPSBkYXRhLm5vdGU7XG5cblx0XHRcdHRoaXMuaW9lX25hbWUgPSBkYXRhLmlvZV9uYW1lO1xuXHRcdFx0dGhpcy5pb2VfcmVsYXRpb24gPSBkYXRhLmlvZV9yZWxhdGlvbjtcblx0XHRcdHRoaXMuaW9lX2FkZHJlc3MgPSBkYXRhLmlvZV9hZGRyZXNzO1xuXHRcdFx0dGhpcy5pb2VfY29udGFjdCA9IGRhdGEuaW9lX2NvbnRhY3Q7XG5cdFx0XHR0aGlzLmlvZV9lc3RhYmxpc2htZW50ID0gZGF0YS5pb2VfZXN0YWJsaXNobWVudDtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gUHJvZmlsZUNvbnRyb2xsZXI7XG59KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBQcm9maWxlQ29udHJvbGxlciB7XHJcblx0Y29uc3RydWN0b3IgKCRodHRwLCAkYXV0aCkge1xyXG5cdFx0J25nSW5qZWN0JztcclxuXHRcdHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuXHRcdHRoaXMuJGF1dGggPSAkYXV0aDtcclxuXHJcblx0XHR0aGlzLmdldHByb2ZpbGUoKTtcclxuXHR9XHJcblx0Z2V0cHJvZmlsZSgpe1xyXG5cdFx0dmFyIHZtID0gdGhpcztcclxuXHRcdHZhciB0b2tlbiA9IHRoaXMuJGF1dGguZ2V0VG9rZW4oKTtcclxuXHRcdHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2VjMi01NC0xODYtNS0xMjYudXMtd2VzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo1MDAwL2FwaS9wcm9maWxlJyx7dG9rZW46IHRva2VufSkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG5cdFx0XHR2YXIgZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG5cclxuXHRcdFx0dm0uZGlzcGxheVByb2ZsZShkYXRhKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHVwZGF0ZVByb2ZpbGUoKXtcclxuXHRcdHZhciBkYXRhID0ge1xyXG5cdFx0XHRmaXJzdG5hbWUgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmZpcnN0bmFtZSApLFxyXG5cdFx0XHRsYXN0bmFtZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMubGFzdG5hbWUgKSxcclxuXHRcdFx0ZW1haWwgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmVtYWlsICksXHJcblx0XHRcdG5pY2tuYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5uaWNrbmFtZSApLFxyXG5cdFx0XHRnZW5kZXIgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmdlbmRlciApLFxyXG5cdFx0XHRiaXJ0aGRheSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuYmlydGhkYXkgKSxcclxuXHRcdFx0c3RhdHVzIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5zdGF0dXMgKSxcclxuXHRcdFx0bmF0aW9uYWxpdHkgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLm5hdGlvbmFsaXR5ICksXHJcblx0XHRcdGNvbnRhY3QgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmNvbnRhY3QgKSxcclxuXHRcdFx0YWRkcmVzcyA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuYWRkcmVzcyApLFxyXG5cdFx0XHRub3RlIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5ub3RlICksXHJcblxyXG5cdFx0XHRpb2VfbmFtZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaW9lX25hbWUgKSxcclxuXHRcdFx0aW9lX3JlbGF0aW9uIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5pb2VfcmVsYXRpb24gKSxcclxuXHRcdFx0aW9lX2FkZHJlc3MgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmlvZV9hZGRyZXNzICksXHJcblx0XHRcdGlvZV9jb250YWN0IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5pb2VfY29udGFjdCApLFxyXG5cdFx0XHRpb2VfZXN0YWJsaXNobWVudCA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaW9lX2VzdGFibGlzaG1lbnQgKVxyXG5cdFx0fTtcclxuXHJcblx0XHR2YXIgdmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGVEYXRhKGRhdGEpO1xyXG5cclxuXHRcdGlmICghdmFsaWRhdGlvblsndmFsaWQnXSkge1xyXG5cdFx0XHRhbGVydCh2YWxpZGF0aW9uWydtZXNzYWdlJ10pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudXBkYXRlU3VibWl0QXBwbGljYXRpb24oZGF0YSk7XHJcblx0fVxyXG5cdHByb3BlclZhbHVlKCB2YWx1ZSApe1xyXG5cdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSAhPSAndW5kZWZpbmVkJyA/IHZhbHVlIDogJyc7XHJcblx0fVxyXG5cdHZhbGlkYXRlRGF0YSggZGF0YSApe1xyXG5cdFx0dmFyIHZhbGlkID0gdHJ1ZTtcclxuXHRcdHZhciBtZXNzYWdlID0gXCJWYWxpZGF0ZWQhXCI7XHJcblxyXG5cdFx0aWYgKGRhdGFbJ3VzZXJuYW1lJ10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJFbXB0eSBVc2VybmFtZSFcIjsgfVxyXG5cdFx0aWYgKGRhdGFbJ2ZpcnN0bmFtZSddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiRW1wdHkgRmlyc3RuYW1lIVwiOyB9XHJcblx0XHRpZiAoZGF0YVsnbGFzdG5hbWUnXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIkVtcHR5IExhc3RuYW1lIVwiOyB9XHJcblx0XHRpZiAoZGF0YVsnZW1haWwnXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIkVtcHR5IEVtYWlsIEFkZHJlc3MhXCI7IH1cclxuXHRcdGlmIChkYXRhWydnZW5kZXInXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIkVtcHR5IEVtYWlsIEFkZHJlc3MhXCI7IH1cclxuXHRcdGlmIChkYXRhWydiaXJ0aGRheSddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiRW1wdHkgQmlydGhkYXkhXCI7IH1cclxuXHRcdGlmIChkYXRhWydzdGF0dXMnXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIkVtcHR5IFN0YXR1cyFcIjsgfVxyXG5cdFx0aWYgKGRhdGFbJ25hdGlvbmFsaXR5J10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJObyBOYXRpb25hbGl0eVwiOyB9XHJcblx0XHRpZiAoZGF0YVsnY29udGFjdCddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiTm8gTmF0aW9uYWxpdHlcIjsgfVxyXG5cclxuXHRcdHZhbGlkID0gbWVzc2FnZSAhPSBcIlZhbGlkYXRlZCFcIiA/IGZhbHNlIDogdmFsaWQ7XHJcblx0XHRyZXR1cm4ge3ZhbGlkOnZhbGlkLG1lc3NhZ2U6bWVzc2FnZX07XHJcblx0fVxyXG5cdHVwZGF0ZVN1Ym1pdEFwcGxpY2F0aW9uKGRhdGEpe1xyXG5cdFx0dmFyIHRva2VuID0gdGhpcy4kYXV0aC5nZXRUb2tlbigpO1xyXG5cdFx0dGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vZWMyLTU0LTE4Ni01LTEyNi51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjUwMDAvYXBpL3Byb2ZpbGUtdXBkYXRlJywge2RhdGE6ZGF0YSwgdG9rZW46dG9rZW59KS5zdWNjZXNzKGZ1bmN0aW9uKHJlc3VsdCl7XHJcblx0XHRcdGFsZXJ0KHJlc3VsdC5tZXNzYWdlKVxyXG5cdFx0fSkuZXJyb3IoZnVuY3Rpb24oKXtcclxuXHRcdFx0YWxlcnQoXCJVbmFibGUgdG8gUHJvY2VlZC4gXCIpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGRpc3BsYXlQcm9mbGUoZGF0YSl7XHJcblx0XHR0aGlzLmZpcnN0bmFtZSA9IGRhdGEuZmlyc3RuYW1lO1xyXG5cdFx0dGhpcy5sYXN0bmFtZSA9IGRhdGEubGFzdG5hbWU7XHJcblx0XHR0aGlzLmVtYWlsID0gZGF0YS5lbWFpbDtcclxuXHRcdHRoaXMubmlja25hbWUgPSBkYXRhLm5pY2tuYW1lO1xyXG5cdFx0dGhpcy5nZW5kZXIgPSBkYXRhLmdlbmRlcjtcclxuXHRcdHRoaXMuYmlydGhkYXkgPSBkYXRhLmJpcnRoZGF5O1xyXG5cdFx0dGhpcy5zdGF0dXMgPSBkYXRhLnN0YXR1cztcclxuXHRcdHRoaXMubmF0aW9uYWxpdHkgPSBkYXRhLm5hdGlvbmFsaXR5O1xyXG5cdFx0dGhpcy5jb250YWN0ID0gZGF0YS5jb250YWN0O1xyXG5cdFx0dGhpcy5hZGRyZXNzID0gZGF0YS5hZGRyZXNzO1xyXG5cdFx0dGhpcy5ub3RlID0gZGF0YS5ub3RlO1xyXG5cclxuXHRcdHRoaXMuaW9lX25hbWUgPSBkYXRhLmlvZV9uYW1lO1xyXG5cdFx0dGhpcy5pb2VfcmVsYXRpb24gPSBkYXRhLmlvZV9yZWxhdGlvbjtcclxuXHRcdHRoaXMuaW9lX2FkZHJlc3MgPSBkYXRhLmlvZV9hZGRyZXNzO1xyXG5cdFx0dGhpcy5pb2VfY29udGFjdCA9IGRhdGEuaW9lX2NvbnRhY3Q7XHJcblx0XHR0aGlzLmlvZV9lc3RhYmxpc2htZW50ID0gZGF0YS5pb2VfZXN0YWJsaXNobWVudDtcclxuXHRcdFxyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUHJvZmlsZVVwbG9hZGVyQ29udHJvbGxlciA9IGV4cG9ydHMuUHJvZmlsZVVwbG9hZGVyQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gUHJvZmlsZVVwbG9hZGVyQ29udHJvbGxlcihVcGxvYWQsICRsb2csICRzY29wZSwgJHRpbWVvdXQsICRhdXRoLCAkaHR0cCkge1xuXHRcdCduZ0luamVjdCc7XG5cblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvZmlsZVVwbG9hZGVyQ29udHJvbGxlcik7XG5cblx0XHR2YXIgdm0gPSB0aGlzO1xuXG5cdFx0dGhpcy4kbG9nID0gJGxvZztcblx0XHR0aGlzLiRhdXRoID0gJGF1dGg7XG5cdFx0dGhpcy4kaHR0cCA9ICRodHRwO1xuXG5cdFx0dGhpcy5nZXRUb2tlbiA9IHRoaXMuJGF1dGguZ2V0VG9rZW4oKTtcblx0XHR0aGlzLnVzZXJuYW1lID0gdGhpcy5nZXRUb2tlbjtcblxuXHRcdHRoaXMudXBsb2FkUGljID0gZnVuY3Rpb24gKGZpbGUpIHtcblx0XHRcdGZpbGUudXBsb2FkID0gVXBsb2FkLnVwbG9hZCh7XG5cdFx0XHRcdHVybDogQVBJX1VSTCArICcvYXBpL3Byb2ZpbGUtcGljdHVyZS11cGxvYWQnLFxuXHRcdFx0XHRkYXRhOiB7IHVzZXJuYW1lOiB2bS51c2VybmFtZSwgZmlsZTogZmlsZSB9XG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHQkdGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0ZmlsZS5yZXN1bHQgPSByZXNwb25zZS5kYXRhO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID4gMCkgJHNjb3BlLmVycm9yTXNnID0gcmVzcG9uc2Uuc3RhdHVzICsgJzogJyArIHJlc3BvbnNlLmRhdGE7XG5cdFx0XHR9LCBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHRcdC8qTWF0aC5taW4gaXMgdG8gZml4IElFIHdoaWNoIHJlcG9ydHMgMjAwJSBzb21ldGltZXMqL1xuXHRcdFx0XHRmaWxlLnByb2dyZXNzID0gTWF0aC5taW4oMTAwLCBwYXJzZUludCgxMDAuMCAqIGV2dC5sb2FkZWQgLyBldnQudG90YWwpKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHR0aGlzLiRodHRwLnBvc3QoQVBJX1VSTCArICcvYXBpL3Byb2ZpbGUtcGljdHVyZScsIHsgdG9rZW46IHRoaXMuZ2V0VG9rZW4gfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHR2bS5wcm9maWxlUGljdHVyZSA9IFwiaHR0cDovL2VjMi01NC0xODYtNS0xMjYudXMtd2VzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo1MDAwL2FwaS9wcm9maWxlLXBpY3R1cmUtaW1nP3NyYz1cIiArIHJlc3VsdC5kYXRhLnByb2ZpbGVfcGljdHVyZTtcblx0XHR9KTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhQcm9maWxlVXBsb2FkZXJDb250cm9sbGVyLCBbe1xuXHRcdGtleTogJ2dldHByb2ZpbGVQaWN0dXJlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0cHJvZmlsZVBpY3R1cmUoKSB7fVxuXHR9XSk7XG5cblx0cmV0dXJuIFByb2ZpbGVVcGxvYWRlckNvbnRyb2xsZXI7XG59KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUtdXBsb2FkZXIuY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBQcm9maWxlVXBsb2FkZXJDb250cm9sbGVyIHtcclxuXHRjb25zdHJ1Y3RvciAoVXBsb2FkLCAkbG9nLCAkc2NvcGUsICR0aW1lb3V0LCAkYXV0aCwgJGh0dHApIHtcclxuXHRcdCduZ0luamVjdCc7XHJcblxyXG5cdFx0dmFyIHZtID0gdGhpcztcclxuXHJcblx0XHR0aGlzLiRsb2cgPSAkbG9nO1xyXG5cdFx0dGhpcy4kYXV0aCA9ICRhdXRoO1xyXG5cdFx0dGhpcy4kaHR0cCA9ICRodHRwO1xyXG5cclxuXHRcdHRoaXMuZ2V0VG9rZW4gPSB0aGlzLiRhdXRoLmdldFRva2VuKCk7XHJcblx0XHR0aGlzLnVzZXJuYW1lID0gdGhpcy5nZXRUb2tlbjtcclxuXHJcblx0XHR0aGlzLnVwbG9hZFBpYyA9IGZ1bmN0aW9uKGZpbGUpIHtcclxuXHRcdFx0ZmlsZS51cGxvYWQgPSBVcGxvYWQudXBsb2FkKHtcclxuXHRcdFx0XHR1cmw6IEFQSV9VUkwrJy9hcGkvcHJvZmlsZS1waWN0dXJlLXVwbG9hZCcsXHJcblx0XHRcdFx0ZGF0YToge3VzZXJuYW1lOiB2bS51c2VybmFtZSwgZmlsZTogZmlsZX1cclxuXHRcdFx0fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHRcdFx0XHQkdGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRmaWxlLnJlc3VsdCA9IHJlc3BvbnNlLmRhdGE7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cdFx0XHRcdGlmIChyZXNwb25zZS5zdGF0dXMgPiAwKVxyXG5cdFx0XHRcdFx0JHNjb3BlLmVycm9yTXNnID0gcmVzcG9uc2Uuc3RhdHVzICsgJzogJyArIHJlc3BvbnNlLmRhdGE7XHJcblx0XHRcdH0sIGZ1bmN0aW9uIChldnQpIHtcclxuXHRcdFx0XHQvKk1hdGgubWluIGlzIHRvIGZpeCBJRSB3aGljaCByZXBvcnRzIDIwMCUgc29tZXRpbWVzKi8gXHJcblx0XHRcdFx0ZmlsZS5wcm9ncmVzcyA9IE1hdGgubWluKDEwMCwgcGFyc2VJbnQoMTAwLjAgKiBldnQubG9hZGVkIC8gZXZ0LnRvdGFsKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuJGh0dHAucG9zdChBUElfVVJMKycvYXBpL3Byb2ZpbGUtcGljdHVyZScse3Rva2VuOnRoaXMuZ2V0VG9rZW59KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcblx0XHRcdHZtLnByb2ZpbGVQaWN0dXJlID0gXCJodHRwOi8vZWMyLTU0LTE4Ni01LTEyNi51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjUwMDAvYXBpL3Byb2ZpbGUtcGljdHVyZS1pbWc/c3JjPVwiICsgcmVzdWx0LmRhdGEucHJvZmlsZV9waWN0dXJlO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdldHByb2ZpbGVQaWN0dXJlKCl7XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLXVwbG9hZGVyLmNvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBBcHBseUNvbnRyb2xsZXIgPSBleHBvcnRzLkFwcGx5Q29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gQXBwbHlDb250cm9sbGVyKCRodHRwLCAkYXV0aCwgJGxvY2F0aW9uKSB7XG5cdFx0J25nSW5qZWN0JztcblxuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBcHBseUNvbnRyb2xsZXIpO1xuXG5cdFx0dGhpcy4kaHR0cCA9ICRodHRwO1xuXHRcdHRoaXMuJGF1dGggPSAkYXV0aDtcblx0XHR0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcblx0XHR0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cblx0XHR0aGlzLlN0ZXAxID0gMDtcblx0XHR0aGlzLkFwcGxpY2F0aW9uU3RhdHVzID0gXCJub1wiO1xuXHRcdC8vdGhpcy5oY19qb2JfY2F0ZWdvcnkgPSBcIk5vbi1Gb29kXCI7XG5cdFx0dGhpcy5nZXRwcm9maWxlKCk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoQXBwbHlDb250cm9sbGVyLCBbe1xuXHRcdGtleTogJ2dldFN0ZXAnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRTdGVwKHN0ZW1fY291bnRlcikge1xuXHRcdFx0cmV0dXJuIHN0ZW1fY291bnRlciA9PSB0aGlzLlN0ZXAxO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ25leHQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBuZXh0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuU3RlcDErKztcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdwcmV2Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcHJldigpIHtcblx0XHRcdHJldHVybiB0aGlzLlN0ZXAxLS07XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZ2V0cHJvZmlsZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldHByb2ZpbGUoKSB7XG5cdFx0XHR2YXIgdm0gPSB0aGlzO1xuXHRcdFx0dmFyIHRva2VuID0gdGhpcy4kYXV0aC5nZXRUb2tlbigpO1xuXHRcdFx0dm0uJGh0dHAucG9zdCgnaHR0cDovL2VjMi01NC0xODYtNS0xMjYudXMtd2VzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo1MDAwL2FwaS9oZWFsdGgtY2FyZC1kYXRhJywgeyB0b2tlbjogdG9rZW4gfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHRcdHZhciBkYXRhID0gcmVzdWx0LmRhdGE7XG5cdFx0XHRcdGlmICghZGF0YSkge1xuXHRcdFx0XHRcdHZtLiRodHRwLnBvc3QoJ2h0dHA6Ly9lYzItNTQtMTg2LTUtMTI2LnVzLXdlc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206NTAwMC9hcGkvcHJvZmlsZScsIHsgdG9rZW46IHRva2VuIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0dmFyIGRhdGEgPSByZXN1bHQuZGF0YTtcblx0XHRcdFx0XHRcdHZtLmRpc3BsYXlQcm9mbGUoZGF0YSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dm0uZGlzcGxheVByb2ZsZShkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZGlzcGxheVByb2ZsZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGRpc3BsYXlQcm9mbGUoZGF0YSkge1xuXHRcdFx0dGhpcy5oY19sYXN0bmFtZSA9IGRhdGEuaGNfbGFzdG5hbWUgPyBkYXRhLmhjX2xhc3RuYW1lIDogZGF0YS5sYXN0bmFtZTtcblx0XHRcdHRoaXMuaGNfZmlyc3RuYW1lID0gZGF0YS5oY19maXJzdG5hbWUgPyBkYXRhLmhjX2ZpcnN0bmFtZSA6IGRhdGEuZmlyc3RuYW1lO1xuXHRcdFx0dGhpcy5oY19taWRkbGVuYW1lID0gZGF0YS5oY19taWRkbGVuYW1lID8gZGF0YS5oY19taWRkbGVuYW1lIDogXCJcIjtcblx0XHRcdC8vdGhpcy5oY19hZ2UgPSBkYXRhLmhjX2FnZSA/IGRhdGEuaGNfYWdlIDogXCJcIjtcblx0XHRcdHRoaXMuaGNfc2V4ID0gZGF0YS5oY19zZXggPyBkYXRhLmhjX3NleCA6IGRhdGEuZ2VuZGVyO1xuXHRcdFx0dGhpcy5oY19jaXZpbHN0YXR1cyA9IGRhdGEuaGNfY2l2aWxzdGF0dXMgPyBkYXRhLmhjX2Npdmlsc3RhdHVzIDogZGF0YS5zdGF0dXM7XG5cdFx0XHR0aGlzLmhjX25hdGlvbmFsaXR5ID0gZGF0YS5oY19uYXRpb25hbGl0eSA/IGRhdGEuaGNfbmF0aW9uYWxpdHkgOiBkYXRhLm5hdGlvbmFsaXR5O1xuXHRcdFx0dGhpcy5oY19jZWR1bGEgPSBkYXRhLmhjX2NlZHVsYSA/IGRhdGEuaGNfY2VkdWxhIDogXCJcIjtcblx0XHRcdHRoaXMuaGNfY2VkdWxhX2RhdGVfaXNzdWVkID0gZGF0YS5oY19jZWR1bGFfZGF0ZV9pc3N1ZWQgPyBkYXRhLmhjX2NlZHVsYV9kYXRlX2lzc3VlZCA6IFwiXCI7XG5cdFx0XHR0aGlzLmhjX09SX2ZlZV9udW1iZXIgPSBkYXRhLmhjX09SX2ZlZV9udW1iZXIgPyBkYXRhLmhjX09SX2ZlZV9udW1iZXIgOiBcIlwiO1xuXHRcdFx0dGhpcy5oY19PUl9mZWVfbnVtYmVyX2RhdGVfaXNzdWVkID0gZGF0YS5oY19PUl9mZWVfbnVtYmVyX2RhdGVfaXNzdWVkID8gZGF0YS5oY19PUl9mZWVfbnVtYmVyX2RhdGVfaXNzdWVkIDogXCJcIjtcblx0XHRcdHRoaXMuaGNfaWNvZV9uYW1lID0gZGF0YS5oY19pY29lX25hbWUgPyBkYXRhLmhjX2ljb2VfbmFtZSA6IGRhdGEuaW9lX25hbWU7XG5cdFx0XHR0aGlzLmhjX2ljb2VfcmVsYXRpb24gPSBkYXRhLmhjX2ljb2VfcmVsYXRpb24gPyBkYXRhLmhjX2ljb2VfcmVsYXRpb24gOiBkYXRhLmlvZV9yZWxhdGlvbjtcblx0XHRcdHRoaXMuaGNfaWNvZV9hZGRyZXNzID0gZGF0YS5oY19pY29lX2FkZHJlc3MgPyBkYXRhLmhjX2ljb2VfYWRkcmVzcyA6IGRhdGEuaW9lX2FkZHJlc3M7XG5cdFx0XHR0aGlzLmhjX2ljb2VfY29udGFjdF9udW1iZXIgPSBkYXRhLmhjX2ljb2VfY29udGFjdF9udW1iZXIgPyBkYXRhLmhjX2ljb2VfY29udGFjdF9udW1iZXIgOiBkYXRhLmlvZV9jb250YWN0O1xuXHRcdFx0dGhpcy5BcHBsaWNhdGlvblN0YXR1cyA9IGRhdGEucmVxdWVzdF9zdGF0dXMgPyBkYXRhLnJlcXVlc3Rfc3RhdHVzIDogXCJub1wiO1xuXG5cdFx0XHR0aGlzLmhjX2J1c2luZXNzX2VtcGxveW1lbnQgPSBkYXRhLmhjX2J1c2luZXNzX2VtcGxveW1lbnQgPyBkYXRhLmhjX2J1c2luZXNzX2VtcGxveW1lbnQgOiBcIlwiO1xuXHRcdFx0dGhpcy5oY19qb2JfY2F0ZWdvcnkgPSBkYXRhLmhjX2pvYl9jYXRlZ29yeSA/IGRhdGEuaGNfam9iX2NhdGVnb3J5IDogXCJcIjtcblx0XHRcdHRoaXMuaGNfcG9zaXRpb24gPSBkYXRhLmhjX3Bvc2l0aW9uID8gZGF0YS5oY19wb3NpdGlvbiA6IFwiXCI7XG5cdFx0XHR0aGlzLmhjX2V0aG5pY19ncm91cCA9IGRhdGEuaGNfZXRobmljX2dyb3VwID8gZGF0YS5oY19ldGhuaWNfZ3JvdXAgOiBcIlwiO1xuXHRcdFx0dGhpcy52ZXJpZmljYXRpb25fY29kZSA9IGRhdGEudmVyaWZpY2F0aW9uX2NvZGUgPyBkYXRhLnZlcmlmaWNhdGlvbl9jb2RlIDogXCJcIjtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdhcHBsaWNhdGlvblN0YXR1cycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGFwcGxpY2F0aW9uU3RhdHVzKHN0YXR1cykge1xuXHRcdFx0cmV0dXJuIHRoaXMuQXBwbGljYXRpb25TdGF0dXMgPT0gc3RhdHVzO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3N1Ym1pdCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHN1Ym1pdCgpIHtcblx0XHRcdGlmICh0aGlzLmhjX2NvbnRhY3QgPT0gXCJcIikge1xuXHRcdFx0XHRhbGVydChcIkNvbnRhY3QgTnVtYmVyIGlzIHJlcXVpcmVkKlwiKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgdG9rZW4gPSB0aGlzLiRhdXRoLmdldFRva2VuKCk7XG5cblx0XHRcdHZhciBkYXRhID0ge1xuXHRcdFx0XHRoY19sYXN0bmFtZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2xhc3RuYW1lKSxcblx0XHRcdFx0aGNfZmlyc3RuYW1lOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfZmlyc3RuYW1lKSxcblx0XHRcdFx0aGNfbWlkZGxlbmFtZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX21pZGRsZW5hbWUpLFxuXHRcdFx0XHQvL2hjX2FnZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfYWdlICksXG5cdFx0XHRcdGhjX3NleDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX3NleCksXG5cdFx0XHRcdGhjX2Npdmlsc3RhdHVzOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfY2l2aWxzdGF0dXMpLFxuXHRcdFx0XHRoY19uYXRpb25hbGl0eTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX25hdGlvbmFsaXR5KSxcblx0XHRcdFx0aGNfY2VkdWxhOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfY2VkdWxhKSxcblx0XHRcdFx0aGNfY2VkdWxhX2RhdGVfaXNzdWVkOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfY2VkdWxhX2RhdGVfaXNzdWVkKSxcblx0XHRcdFx0aGNfT1JfZmVlX251bWJlcjogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX09SX2ZlZV9udW1iZXIpLFxuXHRcdFx0XHRoY19PUl9mZWVfbnVtYmVyX2RhdGVfaXNzdWVkOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfT1JfZmVlX251bWJlcl9kYXRlX2lzc3VlZCksXG5cdFx0XHRcdGhjX2ljb2VfbmFtZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2ljb2VfbmFtZSksXG5cdFx0XHRcdGhjX2ljb2VfcmVsYXRpb246IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19pY29lX3JlbGF0aW9uKSxcblx0XHRcdFx0aGNfaWNvZV9hZGRyZXNzOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfaWNvZV9hZGRyZXNzKSxcblx0XHRcdFx0aGNfaWNvZV9jb250YWN0X251bWJlcjogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2ljb2VfY29udGFjdF9udW1iZXIpLFxuXG5cdFx0XHRcdGhjX2J1c2luZXNzX2VtcGxveW1lbnQ6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19idXNpbmVzc19lbXBsb3ltZW50KSxcblx0XHRcdFx0aGNfam9iX2NhdGVnb3J5OiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfam9iX2NhdGVnb3J5KSxcblx0XHRcdFx0aGNfcG9zaXRpb246IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19wb3NpdGlvbiksXG5cdFx0XHRcdGhjX2V0aG5pY19ncm91cDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2V0aG5pY19ncm91cCksXG5cdFx0XHRcdGQ6IFwiXCIsXG5cdFx0XHRcdG06IFwiXCIsXG5cdFx0XHRcdHk6IFwiXCIsXG5cdFx0XHRcdGhpZDogXCJcIlxuXHRcdFx0fTtcblxuXHRcdFx0dmFyIHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRlRGF0YShkYXRhKTtcblxuXHRcdFx0aWYgKCF2YWxpZGF0aW9uWyd2YWxpZCddKSB7XG5cdFx0XHRcdC8vIGFsZXJ0KFwiSW52YWxpZFwiKTtcblx0XHRcdFx0Ly8gYWxlcnQodmFsaWRhdGlvblsnbWVzc2FnZSddKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gYWxlcnQoXCJVbmFibGUgdG8gUHJvY2VlZC4gRW5jb3VudGVyZWRcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0dGhpcy5wb3N0U3VibWl0QXBwbGljYXRpb24oZGF0YSwgdGhpcy5oY19jb250YWN0LCB0b2tlbik7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAndXBkYXRlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuXHRcdFx0aWYgKHRoaXMuaGNfY29udGFjdCA9PSBcIlwiKSB7XG5cdFx0XHRcdGFsZXJ0KFwiQ29udGFjdCBOdW1iZXIgaXMgcmVxdWlyZWQqXCIpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciB0b2tlbiA9IHRoaXMuJGF1dGguZ2V0VG9rZW4oKTtcblxuXHRcdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcdGhjX2xhc3RuYW1lOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfbGFzdG5hbWUpLFxuXHRcdFx0XHRoY19maXJzdG5hbWU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19maXJzdG5hbWUpLFxuXHRcdFx0XHRoY19taWRkbGVuYW1lOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfbWlkZGxlbmFtZSksXG5cdFx0XHRcdC8vaGNfYWdlIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19hZ2UgKSxcblx0XHRcdFx0aGNfc2V4OiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfc2V4KSxcblx0XHRcdFx0aGNfY2l2aWxzdGF0dXM6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19jaXZpbHN0YXR1cyksXG5cdFx0XHRcdGhjX25hdGlvbmFsaXR5OiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfbmF0aW9uYWxpdHkpLFxuXHRcdFx0XHRoY19jZWR1bGE6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19jZWR1bGEpLFxuXHRcdFx0XHRoY19jZWR1bGFfZGF0ZV9pc3N1ZWQ6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19jZWR1bGFfZGF0ZV9pc3N1ZWQpLFxuXHRcdFx0XHRoY19PUl9mZWVfbnVtYmVyOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfT1JfZmVlX251bWJlciksXG5cdFx0XHRcdGhjX09SX2ZlZV9udW1iZXJfZGF0ZV9pc3N1ZWQ6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19PUl9mZWVfbnVtYmVyX2RhdGVfaXNzdWVkKSxcblx0XHRcdFx0aGNfaWNvZV9uYW1lOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfaWNvZV9uYW1lKSxcblx0XHRcdFx0aGNfaWNvZV9yZWxhdGlvbjogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2ljb2VfcmVsYXRpb24pLFxuXHRcdFx0XHRoY19pY29lX2FkZHJlc3M6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19pY29lX2FkZHJlc3MpLFxuXHRcdFx0XHRoY19pY29lX2NvbnRhY3RfbnVtYmVyOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfaWNvZV9jb250YWN0X251bWJlciksXG5cdFx0XHRcdGhjX2J1c2luZXNzX2VtcGxveW1lbnQ6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19idXNpbmVzc19lbXBsb3ltZW50KSxcblx0XHRcdFx0aGNfam9iX2NhdGVnb3J5OiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfam9iX2NhdGVnb3J5KSxcblx0XHRcdFx0aGNfcG9zaXRpb246IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19wb3NpdGlvbiksXG5cdFx0XHRcdGhjX2V0aG5pY19ncm91cDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2V0aG5pY19ncm91cClcblx0XHRcdH07XG5cblx0XHRcdHZhciB2YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0ZURhdGEoZGF0YSk7XG5cblx0XHRcdGlmICghdmFsaWRhdGlvblsndmFsaWQnXSkge1xuXHRcdFx0XHRhbGVydCh2YWxpZGF0aW9uWydtZXNzYWdlJ10pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5wb3N0VXBkYXRlQXBwbGljYXRpb24oZGF0YSwgdGhpcy5oY19jb250YWN0LCB0b2tlbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncHJvcGVyVmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBwcm9wZXJWYWx1ZSh2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSAhPSAndW5kZWZpbmVkJyA/IHZhbHVlIDogJyc7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAndmFsaWRhdGVEYXRhJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGVEYXRhKGRhdGEpIHtcblx0XHRcdHZhciB2YWxpZCA9IHRydWU7XG5cdFx0XHR2YXIgbWVzc2FnZSA9IFwiVmFsaWRhdGVkIVwiO1xuXG5cdFx0XHRpZiAoZGF0YVsnaGNfbGFzdG5hbWUnXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIkVtcHR5IEZpcnN0bmFtZSFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWydoY19sYXN0bmFtZSddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiRW1wdHkgTGFzdG5hbWUhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YVsnaGNfbWlkZGxlbmFtZSddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiRW1wdHkgTWlkZGxlIVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ2dlbmRlciddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiU2VsZWN0IEdlbmRlciFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWydzdGF0dXMnXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIkVtcHR5IFN0YXR1cyFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWyduYXRpb25hbGl0eSddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiTm8gTmF0aW9uYWxpdHlcIjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGRhdGFbJ2hjX2xhc3RuYW1lJ10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJMYXN0bmFtZSBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWydoY19maXJzdG5hbWUnXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIkZpcnN0bmFtZSBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWydoY19taWRkbGVuYW1lJ10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJNaWRkbGUgTmFtZSBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdC8vaWYgKGRhdGFbJ2hjX2FnZSddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiQWdlIGlzIGVtcHR5IVwiOyB9XG5cdFx0XHRpZiAoZGF0YVsnaGNfc2V4J10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJTZXggaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YVsnaGNfY2l2aWxzdGF0dXMnXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIkNpdmlsIFN0YXR1cyBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWydoY19uYXRpb25hbGl0eSddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiTmF0aW9uYWxpdHkgaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YVsnaGNfY2VkdWxhJ10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJDZWR1bGEgaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YVsnaGNfY2VkdWxhX2RhdGVfaXNzdWVkJ10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJDZWR1bGEgSXNzdWVkIERhdGUgaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YVsnaGNfT1JfZmVlX251bWJlciddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiT1IgTnVtYmVyIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ2hjX09SX2ZlZV9udW1iZXJfZGF0ZV9pc3N1ZWQnXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIk9SIE51bWJlciBEYXRlIElzc3VlZCBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWydoY19pY29lX25hbWUnXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIklDT0UgRmllbGQgaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YVsnaGNfaWNvZV9yZWxhdGlvbiddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiSUNPRSBGaWVsZCBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWydoY19pY29lX2FkZHJlc3MnXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIklDT0UgRmllbGQgaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YVsnaGNfaWNvZV9jb250YWN0X251bWJlciddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiSUNPRSBGaWVsZCBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWydoY19idXNpbmVzc19lbXBsb3ltZW50J10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJCdXNpbmVzcyBFbXBsb3ltZW50IGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ2hjX2pvYl9jYXRlZ29yeSddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiSm9iIENhdGVnb3J5IGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ2hjX3Bvc2l0aW9uJ10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJQb3NpdGlvbiBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWydoY19ldGhuaWNfZ3JvdXAnXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIkV0aG5pYyBHcm91cCBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblxuXHRcdFx0dmFsaWQgPSBtZXNzYWdlICE9IFwiVmFsaWRhdGVkIVwiID8gZmFsc2UgOiB2YWxpZDtcblx0XHRcdHJldHVybiB7IHZhbGlkOiB2YWxpZCwgbWVzc2FnZTogbWVzc2FnZSB9O1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3ZhbGlkRmllbGRzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWRGaWVsZHMoKSB7XG5cdFx0XHR2YXIgZGF0YSA9IHtcblx0XHRcdFx0aGNfbGFzdG5hbWU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19sYXN0bmFtZSksXG5cdFx0XHRcdGhjX2ZpcnN0bmFtZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2ZpcnN0bmFtZSksXG5cdFx0XHRcdGhjX21pZGRsZW5hbWU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19taWRkbGVuYW1lKSxcblx0XHRcdFx0Ly9oY19hZ2UgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2FnZSApLFxuXHRcdFx0XHRoY19zZXg6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19zZXgpLFxuXHRcdFx0XHRoY19jaXZpbHN0YXR1czogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2Npdmlsc3RhdHVzKSxcblx0XHRcdFx0aGNfbmF0aW9uYWxpdHk6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19uYXRpb25hbGl0eSksXG5cdFx0XHRcdGhjX2NlZHVsYTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2NlZHVsYSksXG5cdFx0XHRcdGhjX2NlZHVsYV9kYXRlX2lzc3VlZDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2NlZHVsYV9kYXRlX2lzc3VlZCksXG5cdFx0XHRcdGhjX09SX2ZlZV9udW1iZXI6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19PUl9mZWVfbnVtYmVyKSxcblx0XHRcdFx0aGNfT1JfZmVlX251bWJlcl9kYXRlX2lzc3VlZDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX09SX2ZlZV9udW1iZXJfZGF0ZV9pc3N1ZWQpLFxuXHRcdFx0XHRoY19pY29lX25hbWU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19pY29lX25hbWUpLFxuXHRcdFx0XHRoY19pY29lX3JlbGF0aW9uOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfaWNvZV9yZWxhdGlvbiksXG5cdFx0XHRcdGhjX2ljb2VfYWRkcmVzczogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2ljb2VfYWRkcmVzcyksXG5cdFx0XHRcdGhjX2ljb2VfY29udGFjdF9udW1iZXI6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19pY29lX2NvbnRhY3RfbnVtYmVyKSxcblx0XHRcdFx0aGNfYnVzaW5lc3NfZW1wbG95bWVudDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2J1c2luZXNzX2VtcGxveW1lbnQpLFxuXHRcdFx0XHRoY19qb2JfY2F0ZWdvcnk6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19qb2JfY2F0ZWdvcnkpLFxuXHRcdFx0XHRoY19wb3NpdGlvbjogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX3Bvc2l0aW9uKSxcblx0XHRcdFx0aGNfZXRobmljX2dyb3VwOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfZXRobmljX2dyb3VwKSxcblx0XHRcdFx0ZDogXCJcIixcblx0XHRcdFx0bTogXCJcIixcblx0XHRcdFx0eTogXCJcIixcblx0XHRcdFx0aGlkOiBcIlwiXG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gdGhpcy52YWxpZGF0ZURhdGEoZGF0YSlbJ3ZhbGlkJ107XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncG9zdFN1Ym1pdEFwcGxpY2F0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcG9zdFN1Ym1pdEFwcGxpY2F0aW9uKGRhdGEsIGNvbnRhY3QsIHRva2VuKSB7XG5cdFx0XHR2YXIgbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uO1xuXHRcdFx0dGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vZWMyLTU0LTE4Ni01LTEyNi51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjUwMDAvYXBpL2hlYWx0aC1jYXJkLWFwcGxpY2F0aW9uJywgeyBkYXRhOiBkYXRhLCBjb250YWN0OiBjb250YWN0LCB0b2tlbjogdG9rZW4gfSkuc3VjY2VzcyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW4gKyBcIi8jL2FwcGx5LXN1Ym1pdHRlZFwiO1xuXHRcdFx0fSkuZXJyb3IoZnVuY3Rpb24gKGVycikge1xuXHRcdFx0XHRhbGVydChcIlVuYWJsZSB0byBQcm9jZWVkLiBcIiArIGVycik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdwb3N0VXBkYXRlQXBwbGljYXRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBwb3N0VXBkYXRlQXBwbGljYXRpb24oZGF0YSwgY29udGFjdCwgdG9rZW4pIHtcblx0XHRcdHZhciBsb2NhdGlvbiA9IHRoaXMubG9jYXRpb247XG5cdFx0XHR0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9lYzItNTQtMTg2LTUtMTI2LnVzLXdlc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206NTAwMC9hcGkvaGVhbHRoLWNhcmQtYXBwbGljYXRpb24tdXBkYXRlJywgeyBkYXRhOiBkYXRhLCBjb250YWN0OiBjb250YWN0LCB0b2tlbjogdG9rZW4gfSkuc3VjY2VzcyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW4gKyBcIi8jL2FwcGx5LXVwZGF0ZWRcIjtcblx0XHRcdH0pLmVycm9yKGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdFx0YWxlcnQoXCJVbmFibGUgdG8gUHJvY2VlZC4gXCIgKyBlcnIpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVzZW5kQ29kZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlc2VuZENvZGUoKSB7XG5cdFx0XHR2YXIgY25vID0gdGhpcy5jbm87XG5cdFx0XHR2YXIgdmVyaWZpY2F0aW9uX2NvZGUgPSB0aGlzLnZlcmlmaWNhdGlvbl9jb2RlO1xuXHRcdFx0Ly92YXIgbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uO1xuXG5cblx0XHRcdGlmIChjbm8gPT0gXCJcIikge1xuXHRcdFx0XHRhbGVydChcIlBsZWFzZSBlbnRlciBQaG9uZSBOdW1iZXJcIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoY25vLmxlbmd0aCA9PSAxMCkge1xuXHRcdFx0XHRcdHZhciBsb2NhdGlvbiA9IHRoaXMubG9jYXRpb247XG5cdFx0XHRcdFx0JCgnI3Jlc2VuZC1jb2RlJykubW9kYWwoXCJoaWRlXCIpO1xuXHRcdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW4gKyBcIi8jL2FwcGx5LXJlc2VuZFwiO1xuXHRcdFx0XHRcdHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2VjMi01NC0xODYtNS0xMjYudXMtd2VzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo1MDAwL2FwaS9oZWFsdGgtY2FyZC1yZXNlbmQnLCB7IGNubzogY25vLCB2ZXJpZmljYXRpb25fY29kZTogdmVyaWZpY2F0aW9uX2NvZGUgfSkuc3VjY2VzcyhmdW5jdGlvbiAoKSB7fSkuZXJyb3IoZnVuY3Rpb24gKGVycikge1xuXHRcdFx0XHRcdFx0YWxlcnQoXCJVbmFibGUgdG8gUHJvY2VlZC4gXCIgKyBlcnIpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFsZXJ0KFwiSW52YWxpZCBQaG9uZSBOdW1iZXJcIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gQXBwbHlDb250cm9sbGVyO1xufSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwbHkvYXBwbHkuY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBBcHBseUNvbnRyb2xsZXIge1xyXG5cdGNvbnN0cnVjdG9yICgkaHR0cCwgJGF1dGgsICRsb2NhdGlvbikge1xyXG5cdFx0J25nSW5qZWN0JztcclxuXHRcdHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuXHRcdHRoaXMuJGF1dGggPSAkYXV0aDtcclxuXHRcdHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG5cdFx0dGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG5cclxuXHRcdHRoaXMuU3RlcDEgPSAwO1xyXG5cdFx0dGhpcy5BcHBsaWNhdGlvblN0YXR1cyA9IFwibm9cIjtcclxuXHRcdC8vdGhpcy5oY19qb2JfY2F0ZWdvcnkgPSBcIk5vbi1Gb29kXCI7XHJcblx0XHR0aGlzLmdldHByb2ZpbGUoKTtcclxuXHR9XHJcblx0Z2V0U3RlcChzdGVtX2NvdW50ZXIpe1xyXG5cdFx0cmV0dXJuIHN0ZW1fY291bnRlciA9PSB0aGlzLlN0ZXAxO1xyXG5cdH1cclxuXHRuZXh0KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5TdGVwMSsrO1xyXG5cdH1cclxuXHRwcmV2KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5TdGVwMS0tO1xyXG5cdH1cclxuXHRnZXRwcm9maWxlKCl7XHJcblx0XHR2YXIgdm0gPSB0aGlzO1xyXG5cdFx0dmFyIHRva2VuID0gdGhpcy4kYXV0aC5nZXRUb2tlbigpO1xyXG5cdFx0dm0uJGh0dHAucG9zdCgnaHR0cDovL2VjMi01NC0xODYtNS0xMjYudXMtd2VzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo1MDAwL2FwaS9oZWFsdGgtY2FyZC1kYXRhJyx7dG9rZW46IHRva2VufSkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG5cdFx0XHR2YXIgZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG5cdFx0XHRpZiAoIWRhdGEpIHtcclxuXHRcdFx0XHR2bS4kaHR0cC5wb3N0KCdodHRwOi8vZWMyLTU0LTE4Ni01LTEyNi51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjUwMDAvYXBpL3Byb2ZpbGUnLHt0b2tlbjogdG9rZW59KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcblx0XHRcdFx0XHR2YXIgZGF0YSA9IHJlc3VsdC5kYXRhO1xyXG5cdFx0XHRcdFx0dm0uZGlzcGxheVByb2ZsZShkYXRhKVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR2bS5kaXNwbGF5UHJvZmxlKGRhdGEpXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHRkaXNwbGF5UHJvZmxlKGRhdGEpe1xyXG5cdFx0dGhpcy5oY19sYXN0bmFtZSA9IGRhdGEuaGNfbGFzdG5hbWUgPyBkYXRhLmhjX2xhc3RuYW1lIDogZGF0YS5sYXN0bmFtZTtcclxuXHRcdHRoaXMuaGNfZmlyc3RuYW1lID0gZGF0YS5oY19maXJzdG5hbWUgPyBkYXRhLmhjX2ZpcnN0bmFtZSA6IGRhdGEuZmlyc3RuYW1lO1xyXG5cdFx0dGhpcy5oY19taWRkbGVuYW1lID0gZGF0YS5oY19taWRkbGVuYW1lID8gZGF0YS5oY19taWRkbGVuYW1lIDogXCJcIjtcclxuXHRcdC8vdGhpcy5oY19hZ2UgPSBkYXRhLmhjX2FnZSA/IGRhdGEuaGNfYWdlIDogXCJcIjtcclxuXHRcdHRoaXMuaGNfc2V4ID0gZGF0YS5oY19zZXggPyBkYXRhLmhjX3NleCA6IGRhdGEuZ2VuZGVyO1xyXG5cdFx0dGhpcy5oY19jaXZpbHN0YXR1cyA9IGRhdGEuaGNfY2l2aWxzdGF0dXMgPyBkYXRhLmhjX2Npdmlsc3RhdHVzIDogZGF0YS5zdGF0dXM7XHJcblx0XHR0aGlzLmhjX25hdGlvbmFsaXR5ID0gZGF0YS5oY19uYXRpb25hbGl0eSA/IGRhdGEuaGNfbmF0aW9uYWxpdHkgOiBkYXRhLm5hdGlvbmFsaXR5O1xyXG5cdFx0dGhpcy5oY19jZWR1bGEgPSBkYXRhLmhjX2NlZHVsYSA/IGRhdGEuaGNfY2VkdWxhIDogXCJcIjtcclxuXHRcdHRoaXMuaGNfY2VkdWxhX2RhdGVfaXNzdWVkID0gZGF0YS5oY19jZWR1bGFfZGF0ZV9pc3N1ZWQgPyBkYXRhLmhjX2NlZHVsYV9kYXRlX2lzc3VlZCA6IFwiXCI7XHJcblx0XHR0aGlzLmhjX09SX2ZlZV9udW1iZXIgPSBkYXRhLmhjX09SX2ZlZV9udW1iZXIgPyBkYXRhLmhjX09SX2ZlZV9udW1iZXIgOiBcIlwiO1xyXG5cdFx0dGhpcy5oY19PUl9mZWVfbnVtYmVyX2RhdGVfaXNzdWVkID0gZGF0YS5oY19PUl9mZWVfbnVtYmVyX2RhdGVfaXNzdWVkID8gZGF0YS5oY19PUl9mZWVfbnVtYmVyX2RhdGVfaXNzdWVkIDogXCJcIjtcclxuXHRcdHRoaXMuaGNfaWNvZV9uYW1lID0gZGF0YS5oY19pY29lX25hbWUgPyBkYXRhLmhjX2ljb2VfbmFtZSA6IGRhdGEuaW9lX25hbWU7XHJcblx0XHR0aGlzLmhjX2ljb2VfcmVsYXRpb24gPSBkYXRhLmhjX2ljb2VfcmVsYXRpb24gPyBkYXRhLmhjX2ljb2VfcmVsYXRpb24gOiBkYXRhLmlvZV9yZWxhdGlvbjtcclxuXHRcdHRoaXMuaGNfaWNvZV9hZGRyZXNzID0gZGF0YS5oY19pY29lX2FkZHJlc3MgPyBkYXRhLmhjX2ljb2VfYWRkcmVzcyA6IGRhdGEuaW9lX2FkZHJlc3M7XHJcblx0XHR0aGlzLmhjX2ljb2VfY29udGFjdF9udW1iZXIgPSBkYXRhLmhjX2ljb2VfY29udGFjdF9udW1iZXIgPyBkYXRhLmhjX2ljb2VfY29udGFjdF9udW1iZXIgOiBkYXRhLmlvZV9jb250YWN0O1xyXG5cdFx0dGhpcy5BcHBsaWNhdGlvblN0YXR1cyA9IGRhdGEucmVxdWVzdF9zdGF0dXMgPyBkYXRhLnJlcXVlc3Rfc3RhdHVzIDogXCJub1wiO1xyXG5cclxuXHRcdHRoaXMuaGNfYnVzaW5lc3NfZW1wbG95bWVudCA9IGRhdGEuaGNfYnVzaW5lc3NfZW1wbG95bWVudCA/IGRhdGEuaGNfYnVzaW5lc3NfZW1wbG95bWVudCA6IFwiXCI7XHJcblx0XHR0aGlzLmhjX2pvYl9jYXRlZ29yeSA9IGRhdGEuaGNfam9iX2NhdGVnb3J5ID8gZGF0YS5oY19qb2JfY2F0ZWdvcnkgOiBcIlwiO1xyXG5cdFx0dGhpcy5oY19wb3NpdGlvbiA9IGRhdGEuaGNfcG9zaXRpb24gPyBkYXRhLmhjX3Bvc2l0aW9uIDogXCJcIjtcclxuXHRcdHRoaXMuaGNfZXRobmljX2dyb3VwID0gZGF0YS5oY19ldGhuaWNfZ3JvdXAgPyBkYXRhLmhjX2V0aG5pY19ncm91cCA6IFwiXCI7XHJcblx0XHR0aGlzLnZlcmlmaWNhdGlvbl9jb2RlID0gZGF0YS52ZXJpZmljYXRpb25fY29kZSA/IGRhdGEudmVyaWZpY2F0aW9uX2NvZGUgOiBcIlwiO1xyXG5cdH1cclxuXHRhcHBsaWNhdGlvblN0YXR1cyhzdGF0dXMpe1xyXG5cdFx0cmV0dXJuIHRoaXMuQXBwbGljYXRpb25TdGF0dXMgPT0gc3RhdHVzO1xyXG5cdH1cclxuXHJcblxyXG5cdHN1Ym1pdCgpe1xyXG5cdFx0aWYgKHRoaXMuaGNfY29udGFjdCA9PSBcIlwiKSB7XHJcblx0XHRcdGFsZXJ0KFwiQ29udGFjdCBOdW1iZXIgaXMgcmVxdWlyZWQqXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHRva2VuID0gdGhpcy4kYXV0aC5nZXRUb2tlbigpO1xyXG5cclxuXHRcdHZhciBkYXRhID0ge1xyXG5cdFx0XHRoY19sYXN0bmFtZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfbGFzdG5hbWUgKSxcclxuXHRcdFx0aGNfZmlyc3RuYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19maXJzdG5hbWUgKSxcclxuXHRcdFx0aGNfbWlkZGxlbmFtZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfbWlkZGxlbmFtZSApLFxyXG5cdFx0XHQvL2hjX2FnZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfYWdlICksXHJcblx0XHRcdGhjX3NleCA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfc2V4ICksXHJcblx0XHRcdGhjX2Npdmlsc3RhdHVzIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19jaXZpbHN0YXR1cyApLFxyXG5cdFx0XHRoY19uYXRpb25hbGl0eSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfbmF0aW9uYWxpdHkgKSxcclxuXHRcdFx0aGNfY2VkdWxhIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19jZWR1bGEgKSxcclxuXHRcdFx0aGNfY2VkdWxhX2RhdGVfaXNzdWVkIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19jZWR1bGFfZGF0ZV9pc3N1ZWQgKSxcclxuXHRcdFx0aGNfT1JfZmVlX251bWJlciA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfT1JfZmVlX251bWJlciApLFxyXG5cdFx0XHRoY19PUl9mZWVfbnVtYmVyX2RhdGVfaXNzdWVkIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19PUl9mZWVfbnVtYmVyX2RhdGVfaXNzdWVkICksXHJcblx0XHRcdGhjX2ljb2VfbmFtZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfaWNvZV9uYW1lICksXHJcblx0XHRcdGhjX2ljb2VfcmVsYXRpb24gOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2ljb2VfcmVsYXRpb24gKSxcclxuXHRcdFx0aGNfaWNvZV9hZGRyZXNzIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19pY29lX2FkZHJlc3MgKSxcclxuXHRcdFx0aGNfaWNvZV9jb250YWN0X251bWJlciA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfaWNvZV9jb250YWN0X251bWJlciApLFxyXG5cclxuXHRcdFx0aGNfYnVzaW5lc3NfZW1wbG95bWVudCA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfYnVzaW5lc3NfZW1wbG95bWVudCApLFxyXG5cdFx0XHRoY19qb2JfY2F0ZWdvcnkgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2pvYl9jYXRlZ29yeSApLFxyXG5cdFx0XHRoY19wb3NpdGlvbiA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfcG9zaXRpb24gKSxcclxuXHRcdFx0aGNfZXRobmljX2dyb3VwIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19ldGhuaWNfZ3JvdXAgKSxcclxuXHRcdFx0ZCA6IFwiXCIsXHJcblx0XHRcdG0gOiBcIlwiLFxyXG5cdFx0XHR5IDogXCJcIixcclxuXHRcdFx0aGlkIDogXCJcIlxyXG5cdFx0fTtcclxuXHJcblx0XHR2YXIgdmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGVEYXRhKGRhdGEpO1xyXG5cclxuXHRcdGlmICghdmFsaWRhdGlvblsndmFsaWQnXSkge1xyXG5cdFx0XHQvLyBhbGVydChcIkludmFsaWRcIik7XHJcblx0XHRcdC8vIGFsZXJ0KHZhbGlkYXRpb25bJ21lc3NhZ2UnXSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Ly8gYWxlcnQoXCJVbmFibGUgdG8gUHJvY2VlZC4gRW5jb3VudGVyZWRcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wb3N0U3VibWl0QXBwbGljYXRpb24oZGF0YSwgdGhpcy5oY19jb250YWN0LCB0b2tlbik7XHJcblx0fVxyXG5cdHVwZGF0ZSgpe1xyXG5cdFx0aWYgKHRoaXMuaGNfY29udGFjdCA9PSBcIlwiKSB7XHJcblx0XHRcdGFsZXJ0KFwiQ29udGFjdCBOdW1iZXIgaXMgcmVxdWlyZWQqXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHRva2VuID0gdGhpcy4kYXV0aC5nZXRUb2tlbigpO1xyXG5cclxuXHRcdHZhciBkYXRhID0ge1xyXG5cdFx0XHRoY19sYXN0bmFtZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfbGFzdG5hbWUgKSxcclxuXHRcdFx0aGNfZmlyc3RuYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19maXJzdG5hbWUgKSxcclxuXHRcdFx0aGNfbWlkZGxlbmFtZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfbWlkZGxlbmFtZSApLFxyXG5cdFx0XHQvL2hjX2FnZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfYWdlICksXHJcblx0XHRcdGhjX3NleCA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfc2V4ICksXHJcblx0XHRcdGhjX2Npdmlsc3RhdHVzIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19jaXZpbHN0YXR1cyApLFxyXG5cdFx0XHRoY19uYXRpb25hbGl0eSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfbmF0aW9uYWxpdHkgKSxcclxuXHRcdFx0aGNfY2VkdWxhIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19jZWR1bGEgKSxcclxuXHRcdFx0aGNfY2VkdWxhX2RhdGVfaXNzdWVkIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19jZWR1bGFfZGF0ZV9pc3N1ZWQgKSxcclxuXHRcdFx0aGNfT1JfZmVlX251bWJlciA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfT1JfZmVlX251bWJlciApLFxyXG5cdFx0XHRoY19PUl9mZWVfbnVtYmVyX2RhdGVfaXNzdWVkIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19PUl9mZWVfbnVtYmVyX2RhdGVfaXNzdWVkICksXHJcblx0XHRcdGhjX2ljb2VfbmFtZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfaWNvZV9uYW1lICksXHJcblx0XHRcdGhjX2ljb2VfcmVsYXRpb24gOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2ljb2VfcmVsYXRpb24gKSxcclxuXHRcdFx0aGNfaWNvZV9hZGRyZXNzIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19pY29lX2FkZHJlc3MgKSxcclxuXHRcdFx0aGNfaWNvZV9jb250YWN0X251bWJlciA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfaWNvZV9jb250YWN0X251bWJlciApLFxyXG5cdFx0XHRoY19idXNpbmVzc19lbXBsb3ltZW50IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19idXNpbmVzc19lbXBsb3ltZW50ICksXHJcblx0XHRcdGhjX2pvYl9jYXRlZ29yeSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfam9iX2NhdGVnb3J5ICksXHJcblx0XHRcdGhjX3Bvc2l0aW9uIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19wb3NpdGlvbiApLFxyXG5cdFx0XHRoY19ldGhuaWNfZ3JvdXAgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2V0aG5pY19ncm91cCApXHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciB2YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0ZURhdGEoZGF0YSk7XHJcblxyXG5cdFx0aWYgKCF2YWxpZGF0aW9uWyd2YWxpZCddKSB7XHJcblx0XHRcdGFsZXJ0KCB2YWxpZGF0aW9uWydtZXNzYWdlJ10gKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLnBvc3RVcGRhdGVBcHBsaWNhdGlvbihkYXRhLCB0aGlzLmhjX2NvbnRhY3QsIHRva2VuKTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cdHByb3BlclZhbHVlKCB2YWx1ZSApe1xyXG5cdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSAhPSAndW5kZWZpbmVkJyA/IHZhbHVlIDogJyc7XHJcblx0fVxyXG5cdHZhbGlkYXRlRGF0YSggZGF0YSApe1xyXG5cdFx0dmFyIHZhbGlkID0gdHJ1ZTtcclxuXHRcdHZhciBtZXNzYWdlID0gXCJWYWxpZGF0ZWQhXCI7XHJcblxyXG5cdFx0aWYgKGRhdGFbJ2hjX2xhc3RuYW1lJ10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJFbXB0eSBGaXJzdG5hbWUhXCI7IH1cclxuXHRcdGlmIChkYXRhWydoY19sYXN0bmFtZSddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiRW1wdHkgTGFzdG5hbWUhXCI7IH1cclxuXHRcdGlmIChkYXRhWydoY19taWRkbGVuYW1lJ10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJFbXB0eSBNaWRkbGUhXCI7IH1cclxuXHRcdGlmIChkYXRhWydnZW5kZXInXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIlNlbGVjdCBHZW5kZXIhXCI7IH1cclxuXHRcdGlmIChkYXRhWydzdGF0dXMnXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIkVtcHR5IFN0YXR1cyFcIjsgfVxyXG5cdFx0aWYgKGRhdGFbJ25hdGlvbmFsaXR5J10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJObyBOYXRpb25hbGl0eVwiOyB9XHJcblxyXG5cdFx0aWYgKGRhdGFbJ2hjX2xhc3RuYW1lJ10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJMYXN0bmFtZSBpcyBlbXB0eSFcIjsgfVxyXG5cdFx0aWYgKGRhdGFbJ2hjX2ZpcnN0bmFtZSddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiRmlyc3RuYW1lIGlzIGVtcHR5IVwiOyB9XHJcblx0XHRpZiAoZGF0YVsnaGNfbWlkZGxlbmFtZSddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiTWlkZGxlIE5hbWUgaXMgZW1wdHkhXCI7IH1cclxuXHRcdC8vaWYgKGRhdGFbJ2hjX2FnZSddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiQWdlIGlzIGVtcHR5IVwiOyB9XHJcblx0XHRpZiAoZGF0YVsnaGNfc2V4J10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJTZXggaXMgZW1wdHkhXCI7IH1cclxuXHRcdGlmIChkYXRhWydoY19jaXZpbHN0YXR1cyddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiQ2l2aWwgU3RhdHVzIGlzIGVtcHR5IVwiOyB9XHJcblx0XHRpZiAoZGF0YVsnaGNfbmF0aW9uYWxpdHknXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIk5hdGlvbmFsaXR5IGlzIGVtcHR5IVwiOyB9XHJcblx0XHRpZiAoZGF0YVsnaGNfY2VkdWxhJ10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJDZWR1bGEgaXMgZW1wdHkhXCI7IH1cclxuXHRcdGlmIChkYXRhWydoY19jZWR1bGFfZGF0ZV9pc3N1ZWQnXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIkNlZHVsYSBJc3N1ZWQgRGF0ZSBpcyBlbXB0eSFcIjsgfVxyXG5cdFx0aWYgKGRhdGFbJ2hjX09SX2ZlZV9udW1iZXInXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIk9SIE51bWJlciBpcyBlbXB0eSFcIjsgfVxyXG5cdFx0aWYgKGRhdGFbJ2hjX09SX2ZlZV9udW1iZXJfZGF0ZV9pc3N1ZWQnXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIk9SIE51bWJlciBEYXRlIElzc3VlZCBpcyBlbXB0eSFcIjsgfVxyXG5cdFx0aWYgKGRhdGFbJ2hjX2ljb2VfbmFtZSddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiSUNPRSBGaWVsZCBpcyBlbXB0eSFcIjsgfVxyXG5cdFx0aWYgKGRhdGFbJ2hjX2ljb2VfcmVsYXRpb24nXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIklDT0UgRmllbGQgaXMgZW1wdHkhXCI7IH1cclxuXHRcdGlmIChkYXRhWydoY19pY29lX2FkZHJlc3MnXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIklDT0UgRmllbGQgaXMgZW1wdHkhXCI7IH1cclxuXHRcdGlmIChkYXRhWydoY19pY29lX2NvbnRhY3RfbnVtYmVyJ10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJJQ09FIEZpZWxkIGlzIGVtcHR5IVwiOyB9XHJcblx0XHRpZiAoZGF0YVsnaGNfYnVzaW5lc3NfZW1wbG95bWVudCddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiQnVzaW5lc3MgRW1wbG95bWVudCBpcyBlbXB0eSFcIjsgfVxyXG5cdFx0aWYgKGRhdGFbJ2hjX2pvYl9jYXRlZ29yeSddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiSm9iIENhdGVnb3J5IGlzIGVtcHR5IVwiOyB9XHJcblx0XHRpZiAoZGF0YVsnaGNfcG9zaXRpb24nXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIlBvc2l0aW9uIGlzIGVtcHR5IVwiOyB9XHJcblx0XHRpZiAoZGF0YVsnaGNfZXRobmljX2dyb3VwJ10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJFdGhuaWMgR3JvdXAgaXMgZW1wdHkhXCI7IH1cclxuXHJcblxyXG5cdCAgICB2YWxpZCA9IG1lc3NhZ2UgIT0gXCJWYWxpZGF0ZWQhXCIgPyBmYWxzZSA6IHZhbGlkO1xyXG5cdFx0cmV0dXJuIHt2YWxpZDp2YWxpZCxtZXNzYWdlOm1lc3NhZ2V9O1xyXG5cdH1cclxuXHR2YWxpZEZpZWxkcygpe1xyXG5cdFx0dmFyIGRhdGEgPSB7XHJcblx0XHRcdGhjX2xhc3RuYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19sYXN0bmFtZSApLFxyXG5cdFx0XHRoY19maXJzdG5hbWUgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2ZpcnN0bmFtZSApLFxyXG5cdFx0XHRoY19taWRkbGVuYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19taWRkbGVuYW1lICksXHJcblx0XHRcdC8vaGNfYWdlIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19hZ2UgKSxcclxuXHRcdFx0aGNfc2V4IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19zZXggKSxcclxuXHRcdFx0aGNfY2l2aWxzdGF0dXMgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2Npdmlsc3RhdHVzICksXHJcblx0XHRcdGhjX25hdGlvbmFsaXR5IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19uYXRpb25hbGl0eSApLFxyXG5cdFx0XHRoY19jZWR1bGEgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2NlZHVsYSApLFxyXG5cdFx0XHRoY19jZWR1bGFfZGF0ZV9pc3N1ZWQgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2NlZHVsYV9kYXRlX2lzc3VlZCApLFxyXG5cdFx0XHRoY19PUl9mZWVfbnVtYmVyIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19PUl9mZWVfbnVtYmVyICksXHJcblx0XHRcdGhjX09SX2ZlZV9udW1iZXJfZGF0ZV9pc3N1ZWQgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX09SX2ZlZV9udW1iZXJfZGF0ZV9pc3N1ZWQgKSxcclxuXHRcdFx0aGNfaWNvZV9uYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19pY29lX25hbWUgKSxcclxuXHRcdFx0aGNfaWNvZV9yZWxhdGlvbiA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfaWNvZV9yZWxhdGlvbiApLFxyXG5cdFx0XHRoY19pY29lX2FkZHJlc3MgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2ljb2VfYWRkcmVzcyApLFxyXG5cdFx0XHRoY19pY29lX2NvbnRhY3RfbnVtYmVyIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19pY29lX2NvbnRhY3RfbnVtYmVyICksXHJcblx0XHRcdGhjX2J1c2luZXNzX2VtcGxveW1lbnQgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2J1c2luZXNzX2VtcGxveW1lbnQgKSxcclxuXHRcdFx0aGNfam9iX2NhdGVnb3J5IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19qb2JfY2F0ZWdvcnkgKSxcclxuXHRcdFx0aGNfcG9zaXRpb24gOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX3Bvc2l0aW9uICksXHJcblx0XHRcdGhjX2V0aG5pY19ncm91cCA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfZXRobmljX2dyb3VwICksIFxyXG5cdFx0XHRkIDogXCJcIixcclxuXHRcdFx0bSA6IFwiXCIsXHJcblx0XHRcdHkgOiBcIlwiLFxyXG5cdFx0XHRoaWQgOiBcIlwiXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnZhbGlkYXRlRGF0YShkYXRhKVsndmFsaWQnXTtcclxuXHR9XHJcblx0cG9zdFN1Ym1pdEFwcGxpY2F0aW9uKGRhdGEsIGNvbnRhY3QsIHRva2VuKXtcclxuXHRcdHZhciBsb2NhdGlvbiA9IHRoaXMubG9jYXRpb247XHJcblx0XHR0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9lYzItNTQtMTg2LTUtMTI2LnVzLXdlc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206NTAwMC9hcGkvaGVhbHRoLWNhcmQtYXBwbGljYXRpb24nLCB7ZGF0YTpkYXRhLCBjb250YWN0OmNvbnRhY3QsIHRva2VuOnRva2VufSkuc3VjY2VzcyhmdW5jdGlvbigpe1xyXG5cdFx0XHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24ub3JpZ2luICsgXCIvIy9hcHBseS1zdWJtaXR0ZWRcIlxyXG5cdFx0fSkuZXJyb3IoZnVuY3Rpb24oZXJyKXtcclxuXHRcdFx0YWxlcnQoXCJVbmFibGUgdG8gUHJvY2VlZC4gXCIgKyBlcnIpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHBvc3RVcGRhdGVBcHBsaWNhdGlvbihkYXRhLCBjb250YWN0LCB0b2tlbil7XHJcblx0XHR2YXIgbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uO1xyXG5cdFx0dGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vZWMyLTU0LTE4Ni01LTEyNi51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjUwMDAvYXBpL2hlYWx0aC1jYXJkLWFwcGxpY2F0aW9uLXVwZGF0ZScsIHtkYXRhOmRhdGEsIGNvbnRhY3Q6Y29udGFjdCwgdG9rZW46dG9rZW59KS5zdWNjZXNzKGZ1bmN0aW9uKCl7XHJcblx0XHRcdGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW4gKyBcIi8jL2FwcGx5LXVwZGF0ZWRcIlxyXG5cdFx0fSkuZXJyb3IoZnVuY3Rpb24oZXJyKXtcclxuXHRcdFx0YWxlcnQoXCJVbmFibGUgdG8gUHJvY2VlZC4gXCIgKyBlcnIpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXNlbmRDb2RlKCl7XHJcblx0XHR2YXIgY25vID0gdGhpcy5jbm87XHJcblx0XHR2YXIgdmVyaWZpY2F0aW9uX2NvZGUgPSB0aGlzLnZlcmlmaWNhdGlvbl9jb2RlO1xyXG5cdFx0Ly92YXIgbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uO1xyXG5cdFx0XHJcblx0XHRcclxuXHRcdGlmKGNubyA9PSBcIlwiKXtcclxuXHRcdFx0YWxlcnQoXCJQbGVhc2UgZW50ZXIgUGhvbmUgTnVtYmVyXCIpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdCBpZihjbm8ubGVuZ3RoICA9PSAxMCl7XHJcblx0XHRcdCBcdHZhciBsb2NhdGlvbiA9IHRoaXMubG9jYXRpb247XHJcblx0XHRcdCBcdCQoJyNyZXNlbmQtY29kZScpLm1vZGFsKFwiaGlkZVwiKTtcclxuXHRcdFx0IFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLm9yaWdpbiArIFwiLyMvYXBwbHktcmVzZW5kXCI7XHJcblx0XHRcdCBcdHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2VjMi01NC0xODYtNS0xMjYudXMtd2VzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo1MDAwL2FwaS9oZWFsdGgtY2FyZC1yZXNlbmQnLCB7Y25vOmNubywgdmVyaWZpY2F0aW9uX2NvZGU6dmVyaWZpY2F0aW9uX2NvZGV9KS5zdWNjZXNzKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9KS5lcnJvcihmdW5jdGlvbihlcnIpe1xyXG5cdFx0XHRcdFx0YWxlcnQoXCJVbmFibGUgdG8gUHJvY2VlZC4gXCIgKyBlcnIpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0YWxlcnQoXCJJbnZhbGlkIFBob25lIE51bWJlclwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcGx5L2FwcGx5LmNvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBOYXZiYXJDb250cm9sbGVyID0gZXhwb3J0cy5OYXZiYXJDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBOYXZiYXJDb250cm9sbGVyKCRhdXRoLCAkbG9jYXRpb24pIHtcblx0XHQnbmdJbmplY3QnO1xuXG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5hdmJhckNvbnRyb2xsZXIpO1xuXG5cdFx0dGhpcy4kYXV0aCA9ICRhdXRoO1xuXHRcdHRoaXMuaXNBdXRoZW50aWNhdGVkID0gJGF1dGguaXNBdXRoZW50aWNhdGVkO1xuXHRcdHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKE5hdmJhckNvbnRyb2xsZXIsIFt7XG5cdFx0a2V5OiAnbG9nb3V0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gbG9nb3V0KCkge1xuXHRcdFx0dGhpcy4kYXV0aC5sb2dvdXQoKTtcblx0XHRcdHRoaXMuJGxvY2F0aW9uLnBhdGgoJy9sb2dpbicpO1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBOYXZiYXJDb250cm9sbGVyO1xufSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgTmF2YmFyQ29udHJvbGxlcntcclxuXHRjb25zdHJ1Y3RvcigkYXV0aCwgJGxvY2F0aW9uKXtcclxuXHRcdCduZ0luamVjdCc7XHJcblx0XHRcclxuXHRcdHRoaXMuJGF1dGggPSAkYXV0aDtcclxuXHRcdHRoaXMuaXNBdXRoZW50aWNhdGVkID0gJGF1dGguaXNBdXRoZW50aWNhdGVkO1xyXG5cdFx0dGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XHJcblx0fVxyXG5cdGxvZ291dCgpe1xyXG5cdFx0dGhpcy4kYXV0aC5sb2dvdXQoKTtcclxuXHRcdHRoaXMuJGxvY2F0aW9uLnBhdGgoJy9sb2dpbicpO1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkNvbXBhcmVUb0RpcmVjdGl2ZSA9IENvbXBhcmVUb0RpcmVjdGl2ZTtcbmZ1bmN0aW9uIENvbXBhcmVUb0RpcmVjdGl2ZSgkcGFyc2UpIHtcblx0J25nSW5qZWN0JztcblxuXHRyZXR1cm4ge1xuXHRcdHJlcXVpcmU6ICduZ01vZGVsJyxcblx0XHRsaW5rOiBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbG0sIGF0dHJzLCBuZ01vZGVsKSB7XG5cdFx0XHR2YXIgbWFpbk1vZGVsID0gJHBhcnNlKGF0dHJzLmNvbXBhcmVUbyk7XG5cdFx0XHR2YXIgc2Vjb25kTW9kZWwgPSAkcGFyc2UoYXR0cnMubmdNb2RlbCk7XG5cblx0XHRcdHNjb3BlLiR3YXRjaChhdHRycy5uZ01vZGVsLCBmdW5jdGlvbiAobmV3VmFsdWUpIHtcblx0XHRcdFx0bmdNb2RlbC4kc2V0VmFsaWRpdHkoYXR0cnMubmFtZSwgbmV3VmFsdWUgPT09IG1haW5Nb2RlbChzY29wZSkpO1xuXHRcdFx0fSk7XG5cdFx0XHRzY29wZS4kd2F0Y2goYXR0cnMuY29tcGFyZVRvLCBmdW5jdGlvbiAobmV3VmFsdWUpIHtcblx0XHRcdFx0bmdNb2RlbC4kc2V0VmFsaWRpdHkoYXR0cnMubmFtZSwgbmV3VmFsdWUgPT09IHNlY29uZE1vZGVsKHNjb3BlKSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9kaXJlY3RpdmVzL2NvbXBhcmVUby5kaXJlY3RpdmUuanMiLCJleHBvcnQgZnVuY3Rpb24gQ29tcGFyZVRvRGlyZWN0aXZlKCRwYXJzZSl7XHJcblx0J25nSW5qZWN0J1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXF1aXJlIDogJ25nTW9kZWwnLFxyXG5cdFx0bGluayA6IGZ1bmN0aW9uKHNjb3BlLCBlbG0sIGF0dHJzLCBuZ01vZGVsKXtcclxuXHRcdFx0dmFyIG1haW5Nb2RlbCA9ICRwYXJzZShhdHRycy5jb21wYXJlVG8pO1xyXG5cdFx0XHR2YXIgc2Vjb25kTW9kZWwgPSAkcGFyc2UoYXR0cnMubmdNb2RlbCk7XHJcblxyXG5cdFx0XHRzY29wZS4kd2F0Y2goYXR0cnMubmdNb2RlbCwgZnVuY3Rpb24obmV3VmFsdWUpe1xyXG5cdFx0XHRcdG5nTW9kZWwuJHNldFZhbGlkaXR5KGF0dHJzLm5hbWUsIG5ld1ZhbHVlID09PSBtYWluTW9kZWwoc2NvcGUpKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHNjb3BlLiR3YXRjaChhdHRycy5jb21wYXJlVG8sIGZ1bmN0aW9uKG5ld1ZhbHVlKXtcclxuXHRcdFx0XHRuZ01vZGVsLiRzZXRWYWxpZGl0eShhdHRycy5uYW1lLCBuZXdWYWx1ZSA9PT0gc2Vjb25kTW9kZWwoc2NvcGUpKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9kaXJlY3RpdmVzL2NvbXBhcmVUby5kaXJlY3RpdmUuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBHaXRodWJDb250cmlidXRvclNlcnZpY2UgPSBleHBvcnRzLkdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKCRsb2csICRodHRwKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHaXRodWJDb250cmlidXRvclNlcnZpY2UpO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5hcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcic7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlLCBbe1xuICAgIGtleTogJ2dldENvbnRyaWJ1dG9ycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbnRyaWJ1dG9ycygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBsaW1pdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMzA7XG5cbiAgICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIF90aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nICsgYW5ndWxhci50b0pzb24oZXJyb3IuZGF0YSwgdHJ1ZSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZTtcbn0oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsImV4cG9ydCBjbGFzcyBHaXRodWJDb250cmlidXRvclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5hcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcic7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMobGltaXQ9MzApIHtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5hcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9JyArIGxpbWl0KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJyArIGFuZ3VsYXIudG9Kc29uKGVycm9yLmRhdGEsIHRydWUpKTtcbiAgICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFdlYkRldlRlY1NlcnZpY2UgPSBleHBvcnRzLldlYkRldlRlY1NlcnZpY2UgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFdlYkRldlRlY1NlcnZpY2UoKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXZWJEZXZUZWNTZXJ2aWNlKTtcblxuICAgIHRoaXMuZGF0YSA9IFt7XG4gICAgICAndGl0bGUnOiAnQW5ndWxhckpTJyxcbiAgICAgICd1cmwnOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnSFRNTCBlbmhhbmNlZCBmb3Igd2ViIGFwcHMhJyxcbiAgICAgICdsb2dvJzogJ2FuZ3VsYXIucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9icm93c2Vyc3luYy5pby8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RpbWUtc2F2aW5nIHN5bmNocm9uaXNlZCBicm93c2VyIHRlc3RpbmcuJyxcbiAgICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnR3VscEpTJyxcbiAgICAgICd1cmwnOiAnaHR0cDovL2d1bHBqcy5jb20vJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxuICAgICAgJ2xvZ28nOiAnZ3VscC5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0phc21pbmUnLFxuICAgICAgJ3VybCc6ICdodHRwOi8vamFzbWluZS5naXRodWIuaW8vJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdCZWhhdmlvci1Ecml2ZW4gSmF2YVNjcmlwdC4nLFxuICAgICAgJ2xvZ28nOiAnamFzbWluZS5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0thcm1hJyxcbiAgICAgICd1cmwnOiAnaHR0cDovL2thcm1hLXJ1bm5lci5naXRodWIuaW8vJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdTcGVjdGFjdWxhciBUZXN0IFJ1bm5lciBmb3IgSmF2YVNjcmlwdC4nLFxuICAgICAgJ2xvZ28nOiAna2FybWEucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdQcm90cmFjdG9yJyxcbiAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvcHJvdHJhY3RvcicsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcbiAgICAgICdsb2dvJzogJ3Byb3RyYWN0b3IucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdCb290c3RyYXAnLFxuICAgICAgJ3VybCc6ICdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBpcyB0aGUgbW9zdCBwb3B1bGFyIEhUTUwsIENTUywgYW5kIEpTIGZyYW1ld29yayBmb3IgZGV2ZWxvcGluZyByZXNwb25zaXZlLCBtb2JpbGUgZmlyc3QgcHJvamVjdHMgb24gdGhlIHdlYi4nLFxuICAgICAgJ2xvZ28nOiAnYm9vdHN0cmFwLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnQW5ndWxhciBVSSBCb290c3RyYXAnLFxuICAgICAgJ3VybCc6ICdodHRwOi8vYW5ndWxhci11aS5naXRodWIuaW8vYm9vdHN0cmFwLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGNvbXBvbmVudHMgd3JpdHRlbiBpbiBwdXJlIEFuZ3VsYXJKUyBieSB0aGUgQW5ndWxhclVJIFRlYW0uJyxcbiAgICAgICdsb2dvJzogJ3VpLWJvb3RzdHJhcC5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ1Nhc3MgKE5vZGUpJyxcbiAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL3Nhc3Mvbm9kZS1zYXNzJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdOb2RlLmpzIGJpbmRpbmcgdG8gbGlic2FzcywgdGhlIEMgdmVyc2lvbiBvZiB0aGUgcG9wdWxhciBzdHlsZXNoZWV0IHByZXByb2Nlc3NvciwgU2Fzcy4nLFxuICAgICAgJ2xvZ28nOiAnbm9kZS1zYXNzLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnRVM2IChCYWJlbCBmb3JtZXJseSA2dG81KScsXG4gICAgICAndXJsJzogJ2h0dHBzOi8vYmFiZWxqcy5pby8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1R1cm5zIEVTNisgY29kZSBpbnRvIHZhbmlsbGEgRVM1LCBzbyB5b3UgY2FuIHVzZSBuZXh0IGdlbmVyYXRpb24gZmVhdHVyZXMgdG9kYXkuJyxcbiAgICAgICdsb2dvJzogJ2JhYmVsLnBuZydcbiAgICB9XTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhXZWJEZXZUZWNTZXJ2aWNlLCBbe1xuICAgIGtleTogJ2dldFRlYycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRlYygpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFdlYkRldlRlY1NlcnZpY2U7XG59KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsImV4cG9ydCBjbGFzcyBXZWJEZXZUZWNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSFRNTCBlbmhhbmNlZCBmb3Igd2ViIGFwcHMhJyxcbiAgICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQnJvd3NlclN5bmMnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9icm93c2Vyc3luYy5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxuICAgICAgICAnbG9nbyc6ICdicm93c2Vyc3luYy5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnR3VscEpTJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlIHN0cmVhbWluZyBidWlsZCBzeXN0ZW0uJyxcbiAgICAgICAgJ2xvZ28nOiAnZ3VscC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnSmFzbWluZScsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2phc21pbmUuZ2l0aHViLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdCZWhhdmlvci1Ecml2ZW4gSmF2YVNjcmlwdC4nLFxuICAgICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdLYXJtYScsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2thcm1hLXJ1bm5lci5naXRodWIuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXG4gICAgICAgICdsb2dvJzogJ2thcm1hLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdQcm90cmFjdG9yJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VuZCB0byBlbmQgdGVzdCBmcmFtZXdvcmsgZm9yIEFuZ3VsYXJKUyBhcHBsaWNhdGlvbnMgYnVpbHQgb24gdG9wIG9mIFdlYkRyaXZlckpTLicsXG4gICAgICAgICdsb2dvJzogJ3Byb3RyYWN0b3IucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0Jvb3RzdHJhcCcsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2dldGJvb3RzdHJhcC5jb20vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBpcyB0aGUgbW9zdCBwb3B1bGFyIEhUTUwsIENTUywgYW5kIEpTIGZyYW1ld29yayBmb3IgZGV2ZWxvcGluZyByZXNwb25zaXZlLCBtb2JpbGUgZmlyc3QgcHJvamVjdHMgb24gdGhlIHdlYi4nLFxuICAgICAgICAnbG9nbyc6ICdib290c3RyYXAucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXIgVUkgQm9vdHN0cmFwJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vYW5ndWxhci11aS5naXRodWIuaW8vYm9vdHN0cmFwLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgY29tcG9uZW50cyB3cml0dGVuIGluIHB1cmUgQW5ndWxhckpTIGJ5IHRoZSBBbmd1bGFyVUkgVGVhbS4nLFxuICAgICAgICAnbG9nbyc6ICd1aS1ib290c3RyYXAucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ1Nhc3MgKE5vZGUpJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9ub2RlLXNhc3MnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnTm9kZS5qcyBiaW5kaW5nIHRvIGxpYnNhc3MsIHRoZSBDIHZlcnNpb24gb2YgdGhlIHBvcHVsYXIgc3R5bGVzaGVldCBwcmVwcm9jZXNzb3IsIFNhc3MuJyxcbiAgICAgICAgJ2xvZ28nOiAnbm9kZS1zYXNzLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdFUzYgKEJhYmVsIGZvcm1lcmx5IDZ0bzUpJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2JhYmVsanMuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1R1cm5zIEVTNisgY29kZSBpbnRvIHZhbmlsbGEgRVM1LCBzbyB5b3UgY2FuIHVzZSBuZXh0IGdlbmVyYXRpb24gZmVhdHVyZXMgdG9kYXkuJyxcbiAgICAgICAgJ2xvZ28nOiAnYmFiZWwucG5nJ1xuICAgICAgfVxuICAgIF07XG4gIH1cblxuICBnZXRUZWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTmF2YmFyRGlyZWN0aXZlID0gTmF2YmFyRGlyZWN0aXZlO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBOYXZiYXJEaXJlY3RpdmUoKSB7XG4gICduZ0luamVjdCc7XG5cbiAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sJyxcbiAgICBzY29wZToge1xuICAgICAgY3JlYXRpb25EYXRlOiAnPSdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xufVxuXG52YXIgTmF2YmFyQ29udHJvbGxlciA9IGZ1bmN0aW9uIE5hdmJhckNvbnRyb2xsZXIobW9tZW50KSB7XG4gICduZ0luamVjdCc7XG5cbiAgLy8gXCJ0aGlzLmNyZWF0aW9uRGF0ZVwiIGlzIGF2YWlsYWJsZSBieSBkaXJlY3RpdmUgb3B0aW9uIFwiYmluZFRvQ29udHJvbGxlcjogdHJ1ZVwiXG5cbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5hdmJhckNvbnRyb2xsZXIpO1xuXG4gIHRoaXMucmVsYXRpdmVEYXRlID0gbW9tZW50KHRoaXMuY3JlYXRpb25EYXRlKS5mcm9tTm93KCk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBOYXZiYXJEaXJlY3RpdmUoKSB7XG4gICduZ0luamVjdCc7XG5cbiAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sJyxcbiAgICBzY29wZToge1xuICAgICAgICBjcmVhdGlvbkRhdGU6ICc9J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG59XG5cbmNsYXNzIE5hdmJhckNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9tZW50KSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIC8vIFwidGhpcy5jcmVhdGlvbkRhdGVcIiBpcyBhdmFpbGFibGUgYnkgZGlyZWN0aXZlIG9wdGlvbiBcImJpbmRUb0NvbnRyb2xsZXI6IHRydWVcIlxuICAgIHRoaXMucmVsYXRpdmVEYXRlID0gbW9tZW50KHRoaXMuY3JlYXRpb25EYXRlKS5mcm9tTm93KCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZXhwb3J0cy5NYWxhcmtleURpcmVjdGl2ZSA9IE1hbGFya2V5RGlyZWN0aXZlO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBNYWxhcmtleURpcmVjdGl2ZShtYWxhcmtleSkge1xuICAnbmdJbmplY3QnO1xuXG4gIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xuICAgIH0sXG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgIGxpbms6IGxpbmtGdW5jLFxuICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gIGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgdm0pIHtcbiAgICB2YXIgd2F0Y2hlciA9IHZvaWQgMDtcbiAgICB2YXIgdHlwaXN0ID0gbWFsYXJrZXkoZWxbMF0sIHtcbiAgICAgIHR5cGVTcGVlZDogNDAsXG4gICAgICBkZWxldGVTcGVlZDogNDAsXG4gICAgICBwYXVzZURlbGF5OiA4MDAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgcG9zdGZpeDogJyAnXG4gICAgfSk7XG5cbiAgICBlbC5hZGRDbGFzcygnYWNtZS1tYWxhcmtleScpO1xuXG4gICAgYW5ndWxhci5mb3JFYWNoKHNjb3BlLmV4dHJhVmFsdWVzLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgIH0pO1xuXG4gICAgd2F0Y2hlciA9IHNjb3BlLiR3YXRjaCgndm0uY29udHJpYnV0b3JzJywgZnVuY3Rpb24gKCkge1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHZtLmNvbnRyaWJ1dG9ycywgZnVuY3Rpb24gKGNvbnRyaWJ1dG9yKSB7XG4gICAgICAgIHR5cGlzdC50eXBlKGNvbnRyaWJ1dG9yLmxvZ2luKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgd2F0Y2hlcigpO1xuICAgIH0pO1xuICB9XG59XG5cbnZhciBNYWxhcmtleUNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1hbGFya2V5Q29udHJvbGxlcigkbG9nLCBnaXRodWJDb250cmlidXRvcikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFsYXJrZXlDb250cm9sbGVyKTtcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy5jb250cmlidXRvcnMgPSBbXTtcblxuICAgIHRoaXMuYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hbGFya2V5Q29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdhY3RpdmF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdGhpcy5nZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy4kbG9nLmluZm8oJ0FjdGl2YXRlZCBDb250cmlidXRvcnMgVmlldycpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q29udHJpYnV0b3JzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgcmV0dXJuIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBfdGhpczIuY29udHJpYnV0b3JzID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gX3RoaXMyLmNvbnRyaWJ1dG9ycztcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYWxhcmtleUNvbnRyb2xsZXI7XG59KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBNYWxhcmtleURpcmVjdGl2ZShtYWxhcmtleSkge1xuICAnbmdJbmplY3QnO1xuXG4gIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgICBleHRyYVZhbHVlczogJz0nXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgbGluazogbGlua0Z1bmMsXG4gICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCB2bSkge1xuICAgIGxldCB3YXRjaGVyO1xuICAgIGxldCB0eXBpc3QgPSBtYWxhcmtleShlbFswXSwge1xuICAgICAgdHlwZVNwZWVkOiA0MCxcbiAgICAgIGRlbGV0ZVNwZWVkOiA0MCxcbiAgICAgIHBhdXNlRGVsYXk6IDgwMCxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBwb3N0Zml4OiAnICdcbiAgICB9KTtcblxuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XG5cbiAgICBhbmd1bGFyLmZvckVhY2goc2NvcGUuZXh0cmFWYWx1ZXMsICh2YWx1ZSkgPT4ge1xuICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgfSk7XG5cbiAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCAoKSA9PiB7XG4gICAgICBhbmd1bGFyLmZvckVhY2godm0uY29udHJpYnV0b3JzLCAoY29udHJpYnV0b3IpID0+IHtcbiAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCAoKSA9PiB7XG4gICAgICB3YXRjaGVyKCk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5jbGFzcyBNYWxhcmtleUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xuXG4gICAgdGhpcy5hY3RpdmF0ZShnaXRodWJDb250cmlidXRvcik7XG4gIH1cblxuICBhY3RpdmF0ZShnaXRodWJDb250cmlidXRvcikge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLiRsb2cuaW5mbygnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3Jyk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICByZXR1cm4gZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IGRhdGE7XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbnRyaWJ1dG9ycztcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=