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
				this.$http.post('http://localhost:5000/api/message', { msg: this.message ? this.message : "" });
			}
		}, {
			key: 'getMessages',
			value: function getMessages() {
				var vm = this;
				this.$http.get('http://localhost:5000/api/establishments').then(function (result) {
					vm.messages = result.data;
				});
			}
		}, {
			key: 'getEstablishment',
			value: function getEstablishment() {
				var vm = this;
				this.$http.get('http://localhost:5000/api/establishments').then(function (result) {
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
				this.$http.post('http://localhost:5000/auth/register', data).success(function () {
					location.href = location.origin + "/#/registration-process";
				}).error(function (err) {
					alert(err['message']);
				});
			}
		}, {
			key: 'verify_account',
			value: function verify_account(code) {
				this.$http.post('http://localhost:5000/auth/registration-confirmation', { code: code });
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
				vm.$http.post('http://localhost:5000/api/health-card-data', { token: token }).then(function (result) {
					var data = result.data;
					if (!data) {
						vm.$http.post('http://localhost:5000/api/profile', { token: token }).then(function (result) {
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
				this.d = data.d ? data.d : "na";
				this.m = data.m ? data.m : "na";
				this.y = data.y ? data.y : "na";
				this.hid = data.hid ? data.hid : "na";
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
				this.$http.post('http://localhost:5000/api/health-card-application', { data: data, contact: contact, token: token }).success(function () {
					location.href = location.origin + "/#/apply-submitted";
				}).error(function (err) {
					alert("Unable to Proceed. " + err);
				});
			}
		}, {
			key: 'postUpdateApplication',
			value: function postUpdateApplication(data, contact, token) {
				var location = this.location;
				this.$http.post('http://localhost:5000/api/health-card-application-update', { data: data, contact: contact, token: token }).success(function () {
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
						this.$http.post('http://localhost:5000/api/health-card-resend', { cno: cno, verification_code: verification_code }).success(function () {}).error(function (err) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWZlODQ3Y2E4NTg1OWY5MTcxYTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanM/YWE0MSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcz85ZDUxIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcz9mNTEyIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzP2Y5ZDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzPzMxYTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hdXRoL2F1dGguY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2F1dGgvYXV0aC5jb250cm9sbGVyLmpzP2Y4NGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9wYWdlLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9wYWdlLmNvbnRyb2xsZXIuanM/YzQ5MSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2V2ZW50LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9ldmVudC5jb250cm9sbGVyLmpzP2UxNmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb250cm9sbGVyLmpzPzY3YTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUtdXBsb2FkZXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS11cGxvYWRlci5jb250cm9sbGVyLmpzP2Q3ZGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHBseS9hcHBseS5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwbHkvYXBwbHkuY29udHJvbGxlci5qcz81YzZiIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29udHJvbGxlci5qcz9lMTQxIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGlyZWN0aXZlcy9jb21wYXJlVG8uZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGlyZWN0aXZlcy9jb21wYXJlVG8uZGlyZWN0aXZlLmpzPzZiOTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanM/NGM5OCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanM/ZTA1ZCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzP2MyMDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzPzY0MWUiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnN0YW50IiwibWFsYXJrZXkiLCJtb21lbnQiLCJjb25maWciLCJydW4iLCJzZXJ2aWNlIiwiY29udHJvbGxlciIsImRpcmVjdGl2ZSIsImZpbHRlciIsIiRzY2UiLCJzdHJpbmdUb1BhcnNlIiwidHJ1c3RBc0h0bWwiLCIkbG9nUHJvdmlkZXIiLCJ0b2FzdHJDb25maWciLCIkYXV0aFByb3ZpZGVyIiwiQVBJX1VSTCIsImRlYnVnRW5hYmxlZCIsImFsbG93SHRtbCIsInRpbWVPdXQiLCJwb3NpdGlvbkNsYXNzIiwicHJldmVudER1cGxpY2F0ZXMiLCJwcm9ncmVzc0JhciIsImxvZ2luVXJsIiwicm91dGVyQ29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlckFzIiwib3RoZXJ3aXNlIiwicnVuQmxvY2siLCIkbG9nIiwiZGVidWciLCIkaHR0cCIsInBvc3QiLCJtc2ciLCJtZXNzYWdlIiwidm0iLCJnZXQiLCJ0aGVuIiwicmVzdWx0IiwibWVzc2FnZXMiLCJkYXRhIiwiJGF1dGgiLCIkbG9jYXRpb24iLCJpbnZhbGlkQWNjb3VudCIsImVtYWlsIiwiYWxlcnQiLCJwYXNzd29yZCIsIiQiLCJ2YWwiLCJsb2dpbiIsInVzZXIiLCJ0b2tlbiIsInNldFRva2VuIiwicmVkaXJlY3RIb21lcGFnZSIsImNhdGNoIiwicmVzcG9uc2UiLCJwYXRoIiwibG9jYXRpb24iLCJmaWVsZHNldCIsInZlcmlmaWNhdGlvbl9jb2RlX2hlcmUiLCJnZXRQYXJhbWV0ZXJCeU5hbWUiLCJhYnNVcmwiLCJ2ZXJpZnlfYWNjb3VudCIsInRlc3RHZW5lcmF0b3IiLCJnZXRFc3RhYmxpc2htZW50IiwibmFtZSIsInJlcGxhY2UiLCJyZWdleCIsIlJlZ0V4cCIsInJlc3VsdHMiLCJleGVjIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwidmFsdWUiLCJ1c2VybmFtZSIsInBhc3N3b3JkX2NvbmZpcm0iLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsIm5pY2tuYW1lIiwiZ2VuZGVyIiwic3RhdHVzIiwibmF0aW9uYWxpdHkiLCJjb250YWN0IiwiYWRkcmVzcyIsIm5vdGUiLCJtb250aCIsImRheSIsInllYXIiLCJpb2VfbmFtZSIsImlvZV9yZWxhdGlvbiIsImlvZV9hZGRyZXNzIiwiaW9lX2NvbnRhY3QiLCJpb2VfZXN0YWJsaXNobWVudCIsInByb3BlclZhbHVlIiwiYmlydGhkYXkiLCJ0eXBlIiwiZGF0ZV9leHBpcmVkX3RleHQiLCJkYXRlX2V4cGlyZWRfbnVtYmVyIiwiZCIsInZhbGlkYXRpb24iLCJ2YWxpZGF0ZURhdGEiLCJwb3N0U3VibWl0QXBwbGljYXRpb24iLCJ2YWxpZCIsImlzVmFsaWRFbWFpbEFkZHJlc3MiLCJzdWNjZXNzIiwiaHJlZiIsIm9yaWdpbiIsImVycm9yIiwiZXJyIiwiY29kZSIsImVtYWlsQWRkcmVzcyIsInBhdHRlcm4iLCJ0ZXN0IiwiJHN0YXRlUGFyYW1zIiwiJHN0YXRlIiwiZXZlbnRzIiwiZ2V0RXZlbnRzIiwidXJsX3NsdWciLCJoYXNoIiwic3BsaXQiLCJsZW5ndGgiLCJldm50IiwiZ2V0RXZlbnQiLCJwYXJhbXMiLCJzbHVnIiwiZ2V0cHJvZmlsZSIsImdldFRva2VuIiwiZGlzcGxheVByb2ZsZSIsInVwZGF0ZVN1Ym1pdEFwcGxpY2F0aW9uIiwiVXBsb2FkIiwiJHNjb3BlIiwiJHRpbWVvdXQiLCJ1cGxvYWRQaWMiLCJmaWxlIiwidXBsb2FkIiwiZXJyb3JNc2ciLCJldnQiLCJwcm9ncmVzcyIsIk1hdGgiLCJtaW4iLCJwYXJzZUludCIsImxvYWRlZCIsInRvdGFsIiwicHJvZmlsZVBpY3R1cmUiLCJwcm9maWxlX3BpY3R1cmUiLCJTdGVwMSIsIkFwcGxpY2F0aW9uU3RhdHVzIiwic3RlbV9jb3VudGVyIiwiaGNfbGFzdG5hbWUiLCJoY19maXJzdG5hbWUiLCJoY19taWRkbGVuYW1lIiwiaGNfc2V4IiwiaGNfY2l2aWxzdGF0dXMiLCJoY19uYXRpb25hbGl0eSIsImhjX2NlZHVsYSIsImhjX2NlZHVsYV9kYXRlX2lzc3VlZCIsImhjX09SX2ZlZV9udW1iZXIiLCJoY19PUl9mZWVfbnVtYmVyX2RhdGVfaXNzdWVkIiwiaGNfaWNvZV9uYW1lIiwiaGNfaWNvZV9yZWxhdGlvbiIsImhjX2ljb2VfYWRkcmVzcyIsImhjX2ljb2VfY29udGFjdF9udW1iZXIiLCJyZXF1ZXN0X3N0YXR1cyIsImhjX2J1c2luZXNzX2VtcGxveW1lbnQiLCJoY19qb2JfY2F0ZWdvcnkiLCJoY19wb3NpdGlvbiIsImhjX2V0aG5pY19ncm91cCIsInZlcmlmaWNhdGlvbl9jb2RlIiwibSIsInkiLCJoaWQiLCJoY19jb250YWN0IiwicG9zdFVwZGF0ZUFwcGxpY2F0aW9uIiwiY25vIiwibW9kYWwiLCJpc0F1dGhlbnRpY2F0ZWQiLCJsb2dvdXQiLCJ3aW5kb3ciLCJyZWxvYWQiLCJDb21wYXJlVG9EaXJlY3RpdmUiLCIkcGFyc2UiLCJyZXF1aXJlIiwibGluayIsInNjb3BlIiwiZWxtIiwiYXR0cnMiLCJuZ01vZGVsIiwibWFpbk1vZGVsIiwiY29tcGFyZVRvIiwic2Vjb25kTW9kZWwiLCIkd2F0Y2giLCJuZXdWYWx1ZSIsIiRzZXRWYWxpZGl0eSIsImFwaUhvc3QiLCJsaW1pdCIsInRvSnNvbiIsIldlYkRldlRlY1NlcnZpY2UiLCJOYXZiYXJEaXJlY3RpdmUiLCJyZXN0cmljdCIsImNyZWF0aW9uRGF0ZSIsIk5hdmJhckNvbnRyb2xsZXIiLCJiaW5kVG9Db250cm9sbGVyIiwicmVsYXRpdmVEYXRlIiwiZnJvbU5vdyIsIk1hbGFya2V5RGlyZWN0aXZlIiwiZXh0cmFWYWx1ZXMiLCJ0ZW1wbGF0ZSIsImxpbmtGdW5jIiwiTWFsYXJrZXlDb250cm9sbGVyIiwiZWwiLCJhdHRyIiwid2F0Y2hlciIsInR5cGlzdCIsInR5cGVTcGVlZCIsImRlbGV0ZVNwZWVkIiwicGF1c2VEZWxheSIsImxvb3AiLCJwb3N0Zml4IiwiYWRkQ2xhc3MiLCJmb3JFYWNoIiwicGF1c2UiLCJkZWxldGUiLCJjb250cmlidXRvcnMiLCJjb250cmlidXRvciIsIiRvbiIsImdpdGh1YkNvbnRyaWJ1dG9yIiwiYWN0aXZhdGUiLCJnZXRDb250cmlidXRvcnMiLCJpbmZvIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUNFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBQSxTQUFRQyxPQUFPLFlBQVksQ0FBQyxhQUFhLGFBQWEsV0FBVyxjQUFjLGNBQWMsVUFBVSxhQUFhLGdCQUFnQixVQUFVLGNBQWMsaUJBQ3pKQyxTQUFTLFdBQVcsMEJBQ3BCQSxTQUFTLFlBQVlDLFVBQ3JCRCxTQUFTLFVBQVVFLFFBQ25CQyxPQUpILGVBS0dBLE9BTEgsc0JBTUdDLElBTkgsa0JBT0dDLFFBQVEscUJBUFgsNkNBUUdBLFFBQVEsYUFSWCw2QkFTR0MsV0FBVyxrQkFUZCxzQkFVR0EsV0FBVyxrQkFWZCxzQkFXR0EsV0FBVyxrQkFYZCxzQkFZR0EsV0FBVyxtQkFaZCx3QkFhR0EsV0FBVyxxQkFiZCw0QkFjR0EsV0FBVyxtQkFkZCx3QkFlR0EsV0FBVyxvQkFmZCwwQkFnQkdBLFdBQVcsNkJBaEJkLDRDQWlCR0MsVUFBVSxjQWpCYiwwQkFrQkdBLFVBQVUsZ0JBbEJiLDZCQW1CR0EsVUFBVSxhQW5CYix3Q0FvQkdDLE9BQU8sZ0NBQXVCLFVBQVNDLE1BQUs7R0FDM0MsT0FBTyxVQUFTQyxlQUNoQjtLQUNFLE9BQU9ELEtBQUtFLFlBQVlEOzs7Ozs7OztBQzFDOUI7OztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7QUFFVCxTQ0xnQlA7QUFBVCxVQUFTQSxPQUFRUyxjQUFjQyxjQUFjQyxlQUFlQyxTQUFTO0dBQzFFOzs7R0FFQUgsYUFBYUksYUFBYTs7O0dBRzFCSCxhQUFhSSxZQUFZO0dBQ3pCSixhQUFhSyxVQUFVO0dBQ3ZCTCxhQUFhTSxnQkFBZ0I7R0FDN0JOLGFBQWFPLG9CQUFvQjtHQUNqQ1AsYUFBYVEsY0FBYzs7R0FFM0JQLGNBQWNRLFdBQVdQLFVBQVU7Ozs7Ozs7QUNackM7OztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7RUFDNUMsT0FBTzs7QUFFUixTQ0xnQlE7QUFBVCxVQUFTQSxhQUFjQyxnQkFBZ0JDLG9CQUFvQjtFQUNqRTs7RUFDQUQsZUFDQ0UsTUFBTSxRQUFRO0dBQ2RDLEtBQUs7R0FDTEMsYUFBYTtHQUNidEIsWUFBWTtHQUNadUIsY0FBYztLQUVkSCxNQUFNLFNBQVM7R0FDZkMsS0FBSztHQUNMQyxhQUFhO0dBQ2J0QixZQUFZO0dBQ1p1QixjQUFjO0tBRWRILE1BQU0sZ0JBQWdCO0dBQ3RCQyxLQUFLO0dBQ0xDLGFBQWE7R0FDYnRCLFlBQVk7R0FDWnVCLGNBQWM7S0FFZEgsTUFBTSw2QkFBNkI7R0FDbkNDLEtBQUs7R0FDTEMsYUFBYTtHQUNidEIsWUFBWTtHQUNadUIsY0FBYztLQUVkSCxNQUFNLHdCQUF3QjtHQUM5QkMsS0FBSztHQUNMQyxhQUFhO0dBQ2J0QixZQUFZO0dBQ1p1QixjQUFjO0tBRWRILE1BQU0sU0FBUztHQUNmQyxLQUFLO0dBQ0xDLGFBQWE7R0FDYnRCLFlBQVk7R0FDWnVCLGNBQWM7S0FFZEgsTUFBTSxXQUFXO0dBQ2pCQyxLQUFLO0dBQ0xDLGFBQWE7R0FDYnRCLFlBQVk7R0FDWnVCLGNBQWM7S0FFZEgsTUFBTSxtQkFBbUI7R0FDekJDLEtBQUs7R0FDTEMsYUFBYTtHQUNidEIsWUFBWTtHQUNadUIsY0FBYztLQUVkSCxNQUFNLFNBQVM7R0FDZkMsS0FBSztHQUNMQyxhQUFhO0dBQ2J0QixZQUFZO0dBQ1p1QixjQUFjO0tBRWRILE1BQU0sbUJBQW1CO0dBQ3pCQyxLQUFLO0dBQ0xDLGFBQWE7R0FDYnRCLFlBQVk7R0FDWnVCLGNBQWM7S0FFZEgsTUFBTSxnQkFBZ0I7R0FDdEJDLEtBQUs7R0FDTEMsYUFBYTtHQUNidEIsWUFBWTtHQUNadUIsY0FBYztLQUVkSCxNQUFNLGlCQUFpQjtHQUN2QkMsS0FBSztHQUNMQyxhQUFhO0dBQ2J0QixZQUFZO0dBQ1p1QixjQUFjO0tBRWRILE1BQU0sVUFBVTtHQUNoQkMsS0FBSztHQUNMQyxhQUFhO0dBQ2J0QixZQUFZO0dBQ1p1QixjQUFjO0tBRWRILE1BQU0sa0JBQWtCO0dBQ3hCQyxLQUFLO0dBQ0xDLGFBQWE7R0FDYnRCLFlBQVk7R0FDWnVCLGNBQWM7Ozs7Ozs7Ozs7RUFVZkosbUJBQW1CSyxVQUFVOzs7Ozs7O0FDL0Y5Qjs7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOztBQUVULFNDTGdCQztBQUFULFVBQVNBLFNBQVVDLE1BQU07R0FDOUI7O0dBQ0FBLEtBQUtDLE1BQU07Ozs7Ozs7QUNGYjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0VBQzVDLE9BQU87OztBQUdSLEtBQUksZUFBZSxZQUFZLEVBQUUsU0FBUyxpQkFBaUIsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUUsSUFBSSxhQUFhLE1BQU0sSUFBSSxXQUFXLGFBQWEsV0FBVyxjQUFjLE9BQU8sV0FBVyxlQUFlLE1BQU0sSUFBSSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sT0FBTyxlQUFlLFFBQVEsV0FBVyxLQUFLLGlCQUFpQixPQUFPLFVBQVUsYUFBYSxZQUFZLGFBQWEsRUFBRSxJQUFJLFlBQVksaUJBQWlCLFlBQVksV0FBVyxhQUFhLElBQUksYUFBYSxpQkFBaUIsYUFBYSxjQUFjLE9BQU87O0FBRWhpQixVQUFTLGdCQUFnQixVQUFVLGFBQWEsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLGNBQWMsRUFBRSxNQUFNLElBQUksVUFBVTs7O3FDQUV0RDtFQ1R6RCx3QkFBYUMsT0FBTztHQUNuQjs7R0FEbUI7O0dBRW5CLEtBQUtBLFFBQVFBOzs7RURnQmQsYUFBYSxnQkFBZ0IsQ0FBQztHQUM3QixLQUFLO0dBQ0wsT0FBTyxTQUFTLGNDaEJKO0lBQ1osS0FBS0EsTUFBTUMsS0FBSyw0RUFBMkUsRUFBQ0MsS0FBSyxLQUFLQyxVQUFVLEtBQUtBLFVBQVU7O0tEa0I3SDtHQUNGLEtBQUs7R0FDTCxPQUFPLFNBQVMsY0NsQko7SUFDWixJQUFJQyxLQUFLO0lBQ1QsS0FBS0osTUFBTUssSUFBSSw0RUFBNEVDLEtBQUssVUFBU0MsUUFBTztLQUMvR0gsR0FBR0ksV0FBV0QsT0FBT0U7Ozs7O0VEdUJ2QixPQUFPOzs7Ozs7O0FFbENSOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7RUFDNUMsT0FBTzs7O0FBR1IsS0FBSSxlQUFlLFlBQVksRUFBRSxTQUFTLGlCQUFpQixRQUFRLE9BQU8sRUFBRSxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUssRUFBRSxJQUFJLGFBQWEsTUFBTSxJQUFJLFdBQVcsYUFBYSxXQUFXLGNBQWMsT0FBTyxXQUFXLGVBQWUsTUFBTSxJQUFJLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxPQUFPLGVBQWUsUUFBUSxXQUFXLEtBQUssaUJBQWlCLE9BQU8sVUFBVSxhQUFhLFlBQVksYUFBYSxFQUFFLElBQUksWUFBWSxpQkFBaUIsWUFBWSxXQUFXLGFBQWEsSUFBSSxhQUFhLGlCQUFpQixhQUFhLGNBQWMsT0FBTzs7QUFFaGlCLFVBQVMsZ0JBQWdCLFVBQVUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxVQUFVOzs7a0RBRXREO0VDVHpELHdCQUFhQyxPQUFPQyxXQUFXO0dBQzlCOztHQUQ4Qjs7R0FFOUIsS0FBS0QsUUFBUUE7R0FDYixLQUFLQyxZQUFZQTtHQUNqQixLQUFLQyxpQkFBaUI7OztFRGdCdkIsYUFBYSxnQkFBZ0IsQ0FBQztHQUM3QixLQUFLO0dBQ0wsT0FBTyxTQUFTLFFDZlY7SUFDTixJQUFJLEtBQUtDLFNBQVMsSUFBSTtLQUNyQkMsTUFBTTtLQUNOOztJQUVELElBQUksS0FBS0MsWUFBWSxJQUFJO0tBQ3hCRCxNQUFNO0tBQ047OztJQUdELElBQUlWLEtBQUs7SUFDVFksRUFBRSw2QkFBNkJDLElBQUk7SUFDbkMsS0FBS1AsTUFBTVEsTUFBTSxLQUFLQSxNQUFNQyxNQUFNYixLQUFLLFVBQVNjLE9BQU07S0FDckRoQixHQUFHTSxNQUFNVyxTQUFTRDtLQUNsQmhCLEdBQUdrQjtPQUVEQyxNQUFNLFVBQVNDLFVBQVM7O0tBRTFCcEIsR0FBR1EsaUJBQWlCOzs7O0tEa0JuQjtHQUNGLEtBQUs7R0FDTCxPQUFPLFNBQVMseUJDZk87SUFDdkIsS0FBS0EsaUJBQWlCOztLRGlCcEI7R0FDRixLQUFLO0dBQ0wsT0FBTyxTQUFTLG1CQ2pCRTtJQUNsQixLQUFLRCxVQUFVYyxLQUFLOzs7O0VEcUJyQixPQUFPOzs7Ozs7O0FFeERSOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7RUFDNUMsT0FBTzs7O0FBR1IsS0FBSSxlQUFlLFlBQVksRUFBRSxTQUFTLGlCQUFpQixRQUFRLE9BQU8sRUFBRSxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUssRUFBRSxJQUFJLGFBQWEsTUFBTSxJQUFJLFdBQVcsYUFBYSxXQUFXLGNBQWMsT0FBTyxXQUFXLGVBQWUsTUFBTSxJQUFJLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxPQUFPLGVBQWUsUUFBUSxXQUFXLEtBQUssaUJBQWlCLE9BQU8sVUFBVSxhQUFhLFlBQVksYUFBYSxFQUFFLElBQUksWUFBWSxpQkFBaUIsWUFBWSxXQUFXLGFBQWEsSUFBSSxhQUFhLGlCQUFpQixhQUFhLGNBQWMsT0FBTzs7QUFFaGlCLFVBQVMsZ0JBQWdCLFVBQVUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxVQUFVOzs7MERBRXREO0VDVHpELHdCQUFhekIsT0FBT1csV0FBV2IsTUFBTTtHQUNwQzs7R0FEb0M7O0dBRXBDLEtBQUtFLFFBQVFBO0dBQ2IsS0FBSzBCLFdBQVdBO0dBQ2hCLEtBQUs1QixPQUFPQTs7R0FFWixLQUFLNkIsV0FBVzs7R0FFaEIsSUFBSUMseUJBQXlCLEtBQUtDLG1CQUFtQixxQkFBcUJsQixVQUFVbUI7O0dBRXBGLElBQUlGLHdCQUF3QjtJQUMzQixLQUFLRyxlQUFlSDtVQUNoQjtJQUNKLEtBQUtJOzs7R0FHTixLQUFLQzs7O0VEZ0JOLGFBQWEsZ0JBQWdCLENBQUM7R0FDN0IsS0FBSztHQUNMLE9BQU8sU0FBUyxtQkNoQkVDLE1BQU16QyxLQUFLO0lBQzdCeUMsT0FBT0EsS0FBS0MsUUFBUSxXQUFXO0lBQy9CLElBQUlDLFFBQVEsSUFBSUMsT0FBTyxTQUFTSCxPQUFPO1FBQ3ZDSSxVQUFVRixNQUFNRyxLQUFLOUM7SUFDckIsSUFBSSxDQUFDNkMsU0FBUyxPQUFPO0lBQ3JCLElBQUksQ0FBQ0EsUUFBUSxJQUFJLE9BQU87SUFDeEIsT0FBT0UsbUJBQW1CRixRQUFRLEdBQUdILFFBQVEsT0FBTzs7S0RrQmxEO0dBQ0YsS0FBSztHQUNMLE9BQU8sU0FBUyxjQ2xCSjtJQUNaLEtBQUtuQyxNQUFNQyxLQUFLLHFDQUFvQyxFQUFDQyxLQUFLLEtBQUtDLFVBQVUsS0FBS0EsVUFBVTs7S0RvQnRGO0dBQ0YsS0FBSztHQUNMLE9BQU8sU0FBUyxjQ3BCSjtJQUNaLElBQUlDLEtBQUs7SUFDVCxLQUFLSixNQUFNSyxJQUFJLDRDQUE0Q0MsS0FBSyxVQUFTQyxRQUFPO0tBQy9FSCxHQUFHSSxXQUFXRCxPQUFPRTs7O0tEdUJwQjtHQUNGLEtBQUs7R0FDTCxPQUFPLFNBQVMsbUJDdEJDO0lBQ2pCLElBQUlMLEtBQUs7SUFDVCxLQUFLSixNQUFNSyxJQUFJLDRDQUE0Q0MsS0FBSyxVQUFTQyxRQUFPO0tBQy9FSCxHQUFHSSxXQUFXRCxPQUFPRTs7O0tEeUJwQjtHQUNGLEtBQUs7R0FDTCxPQUFPLFNBQVMsWUN4QkpnQyxPQUFPO0lBQ25CLE9BQU8sT0FBT0EsU0FBUyxjQUFjQSxRQUFROztLRDBCM0M7R0FDRixLQUFLO0dBQ0wsT0FBTyxTQUFTLGdCQzFCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJkLEtBQUtDLFdBQVc7SUFDaEIsS0FBSzNCLFdBQVc7SUFDaEIsS0FBSzRCLG1CQUFtQjs7SUFFeEIsS0FBS0MsWUFBWTtJQUNqQixLQUFLQyxXQUFXO0lBQ2hCLEtBQUtoQyxRQUFRO0lBQ2IsS0FBS2lDLFdBQVc7SUFDaEIsS0FBS0MsU0FBUzs7SUFFZCxLQUFLQyxTQUFTO0lBQ2QsS0FBS0MsY0FBYztJQUNuQixLQUFLQyxVQUFVO0lBQ2YsS0FBS0MsVUFBVTtJQUNmLEtBQUtDLE9BQU87SUFDWixLQUFLQyxRQUFPO0lBQ1osS0FBS0MsTUFBSztJQUNWLEtBQUtDLE9BQU07O0lBRVgsS0FBS0MsV0FBVztJQUNoQixLQUFLQyxlQUFlO0lBQ3BCLEtBQUtDLGNBQWM7SUFDbkIsS0FBS0MsY0FBYztJQUNuQixLQUFLQyxvQkFBb0I7O0tEMEJ2QjtHQUNGLEtBQUs7R0FDTCxPQUFPLFNBQVMsU0N6QlQ7SUFDUCxJQUFJbkQsT0FBTztLQUNWaUMsVUFBVyxLQUFLbUIsWUFBYSxLQUFLbkI7S0FDbEMzQixVQUFXLEtBQUs4QyxZQUFhLEtBQUs5QztLQUNsQzRCLGtCQUFtQixLQUFLa0IsWUFBYSxLQUFLbEI7O0tBRTFDQyxXQUFZLEtBQUtpQixZQUFhLEtBQUtqQjtLQUNuQ0MsVUFBVyxLQUFLZ0IsWUFBYSxLQUFLaEI7S0FDbENoQyxPQUFRLEtBQUtnRCxZQUFhLEtBQUtoRDtLQUMvQmlDLFVBQVcsS0FBS2UsWUFBYSxLQUFLZjtLQUNsQ0MsUUFBUyxLQUFLYyxZQUFhLEtBQUtkOztLQUVoQ2UsVUFBVyxLQUFLVCxRQUFNLE1BQUksS0FBS0MsTUFBSSxNQUFJLEtBQUtDO0tBQzVDUCxRQUFTLEtBQUthLFlBQWEsS0FBS2I7S0FDaENDLGFBQWMsS0FBS1ksWUFBYSxLQUFLWjtLQUNyQ0MsU0FBVSxLQUFLVyxZQUFhLEtBQUtYO0tBQ2pDQyxTQUFVLEtBQUtVLFlBQWEsS0FBS1Y7S0FDakNDLE1BQU8sS0FBS1MsWUFBYSxLQUFLVDs7S0FFOUJJLFVBQVcsS0FBS0ssWUFBYSxLQUFLTDtLQUNsQ0MsY0FBZSxLQUFLSSxZQUFhLEtBQUtKO0tBQ3RDQyxhQUFjLEtBQUtHLFlBQWEsS0FBS0g7S0FDckNDLGFBQWMsS0FBS0UsWUFBYSxLQUFLRjtLQUNyQ0MsbUJBQW9CLEtBQUtDLFlBQWEsS0FBS0Q7S0FDM0NHLE1BQUs7S0FDTEMsbUJBQW1CO0tBQ1ZDLHFCQUFvQjtLQUNwQkMsR0FBRTs7O0lBR1osSUFBSUMsYUFBYSxLQUFLQyxhQUFhM0Q7O0lBRW5DLElBQUksQ0FBQzBELFdBQVcsVUFBVTtLQUN6QnJELE1BQU1xRCxXQUFXO1dBQ2I7S0FDSixLQUFLRSxzQkFBc0I1RDs7O0tENEIxQjtHQUNGLEtBQUs7R0FDTCxPQUFPLFNBQVMsYUMxQkhBLE1BQU07SUFDbkIsSUFBSTZELFFBQVE7SUFDWixJQUFJbkUsVUFBVTs7SUFFZCxJQUFJLEtBQUt1QyxZQUFZLElBQUk7S0FBRXZDLFVBQVU7O0lBQ3JDLElBQUksS0FBS1ksWUFBWSxJQUFJO0tBQUVaLFVBQVU7O0lBQ3JDLElBQUksS0FBS3dDLG9CQUFvQixJQUFJO0tBQUV4QyxVQUFVOztJQUM3QyxJQUFJLEtBQUt5QyxhQUFhLElBQUk7S0FBRXpDLFVBQVU7O0lBQ3RDLElBQUksS0FBSzBDLFlBQVksSUFBSTtLQUFFMUMsVUFBVTs7SUFDckMsSUFBSSxLQUFLVSxTQUFTLElBQUk7S0FBRVYsVUFBVTs7SUFDbEMsSUFBSSxDQUFDLEtBQUtvRSxvQkFBb0IsS0FBSzFELFFBQVE7S0FBRVYsVUFBVTs7SUFDdkQsSUFBSSxLQUFLMkMsWUFBWSxJQUFJO0tBQUUzQyxVQUFVOztJQUNyQyxJQUFJLEtBQUs0QyxVQUFVLElBQUk7S0FBRTVDLFVBQVU7OztJQUVuQyxJQUFJLEtBQUs2QyxVQUFVLElBQUk7S0FBRTdDLFVBQVU7O0lBQ25DLElBQUksS0FBSzhDLGVBQWUsSUFBSTtLQUFFOUMsVUFBVTs7SUFDeEMsSUFBSSxLQUFLK0MsV0FBVyxJQUFJO0tBQUUvQyxVQUFVOztJQUNwQyxJQUFJLEtBQUtnRCxXQUFXLElBQUk7S0FBRWhELFVBQVU7O0lBQ3BDLElBQUksS0FBS3FELFlBQVksSUFBSTtLQUFFckQsVUFBVTs7SUFDckMsSUFBSSxLQUFLc0QsZ0JBQWdCLElBQUk7S0FBRXRELFVBQVU7O0lBQ3pDLElBQUksS0FBS3VELGVBQWUsSUFBSTtLQUFFdkQsVUFBVTs7SUFDeEMsSUFBSSxLQUFLd0QsZUFBZSxJQUFJO0tBQUV4RCxVQUFVOztJQUN4QyxJQUFJLEtBQUt5RCxxQkFBcUIsSUFBSTtLQUFFekQsVUFBVTs7O0lBRTlDbUUsUUFBUW5FLFdBQVcsZUFBZSxRQUFRbUU7SUFDMUMsT0FBTyxFQUFDQSxPQUFNQSxPQUFNbkUsU0FBUUE7O0tEZ0UxQjtHQUNGLEtBQUs7R0FDTCxPQUFPLFNBQVMsc0JDaEVLTSxNQUFLO0lBQzFCLElBQUlpQixXQUFXLEtBQUtBO0lBQ3BCLElBQUl0QixLQUFLO0lBQ1QsS0FBS0osTUFBTUMsS0FBSyx1Q0FBdUNRLE1BQU0rRCxRQUFRLFlBQVU7S0FDOUU5QyxTQUFTK0MsT0FBTy9DLFNBQVNnRCxTQUFTO09BQ2hDQyxNQUFNLFVBQVNDLEtBQUk7S0FDckI5RCxNQUFPOEQsSUFBSTs7O0tEbUVWO0dBQ0YsS0FBSztHQUNMLE9BQU8sU0FBUyxlQ2xFREMsTUFBTTtJQUNyQixLQUFLN0UsTUFBTUMsS0FBSyx3REFBdUQsRUFBQzRFLE1BQU1BOztLRG9FNUU7R0FDRixLQUFLO0dBQ0wsT0FBTyxTQUFTLGNDcEVKO0lBQ1osSUFBSXBFLE9BQU87S0FDVmlDLFVBQVcsS0FBS21CLFlBQWEsS0FBS25CO0tBQ2xDM0IsVUFBVyxLQUFLOEMsWUFBYSxLQUFLOUM7S0FDbEM0QixrQkFBbUIsS0FBS2tCLFlBQWEsS0FBS2xCO0tBQzFDQyxXQUFZLEtBQUtpQixZQUFhLEtBQUtqQjtLQUNuQ0MsVUFBVyxLQUFLZ0IsWUFBYSxLQUFLaEI7S0FDbENoQyxPQUFRLEtBQUtnRCxZQUFhLEtBQUtoRDtLQUMvQmlDLFVBQVcsS0FBS2UsWUFBYSxLQUFLZjtLQUNsQ0MsUUFBUyxLQUFLYyxZQUFhLEtBQUtkOztLQUVoQ0MsUUFBUyxLQUFLYSxZQUFhLEtBQUtiO0tBQ2hDQyxhQUFjLEtBQUtZLFlBQWEsS0FBS1o7S0FDckNDLFNBQVUsS0FBS1csWUFBYSxLQUFLWDtLQUNqQ0MsU0FBVSxLQUFLVSxZQUFhLEtBQUtWO0tBQ2pDQyxNQUFPLEtBQUtTLFlBQWEsS0FBS1Q7S0FDOUJJLFVBQVcsS0FBS0ssWUFBYSxLQUFLTDtLQUNsQ0MsY0FBZSxLQUFLSSxZQUFhLEtBQUtKO0tBQ3RDQyxhQUFjLEtBQUtHLFlBQWEsS0FBS0g7S0FDckNDLGFBQWMsS0FBS0UsWUFBYSxLQUFLRjtLQUNyQ0MsbUJBQW9CLEtBQUtDLFlBQWEsS0FBS0Q7S0FDM0NHLE1BQUs7S0FDTEMsbUJBQW1CO0tBQ1ZDLHFCQUFvQjtLQUNwQkMsR0FBRTs7O0lBR1osT0FBUSxLQUFLRSxhQUFhM0QsTUFBTSxXQUFVLFFBQU07O0tEc0U5QztHQUNGLEtBQUs7R0FDTCxPQUFPLFNBQVMsb0JDdEVHcUUsY0FBYTtJQUM3QixJQUFJQyxVQUFVO0lBQ0wsT0FBT0EsUUFBUUMsS0FBS0Y7Ozs7RUQwRWpDLE9BQU87Ozs7Ozs7QUVyUlI7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztFQUM1QyxPQUFPOzs7QUFHUixLQUFJLGVBQWUsWUFBWSxFQUFFLFNBQVMsaUJBQWlCLFFBQVEsT0FBTyxFQUFFLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSyxFQUFFLElBQUksYUFBYSxNQUFNLElBQUksV0FBVyxhQUFhLFdBQVcsY0FBYyxPQUFPLFdBQVcsZUFBZSxNQUFNLElBQUksV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE9BQU8sZUFBZSxRQUFRLFdBQVcsS0FBSyxpQkFBaUIsT0FBTyxVQUFVLGFBQWEsWUFBWSxhQUFhLEVBQUUsSUFBSSxZQUFZLGlCQUFpQixZQUFZLFdBQVcsYUFBYSxJQUFJLGFBQWEsaUJBQWlCLGFBQWEsY0FBYyxPQUFPOztBQUVoaUIsVUFBUyxnQkFBZ0IsVUFBVSxhQUFhLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixjQUFjLEVBQUUsTUFBTSxJQUFJLFVBQVU7Ozs2RkFFcEQ7RUNUM0QseUJBQWE5RSxPQUFPVyxXQUFXYixNQUFNbUYsY0FBY0MsUUFBTzNHLE1BQU07R0FDL0Q7O0dBRCtEOztHQUUvRCxLQUFLeUIsUUFBUUE7R0FDYixLQUFLMEIsV0FBV0E7R0FDaEIsS0FBSzVCLE9BQU9BO0dBQ1osS0FBS3FGLFNBQVEsS0FBS0M7O0dBRWxCLElBQUlDLFdBQVcsS0FBSzNELFNBQVM0RDtHQUM3QixJQUFHRCxTQUFTRSxNQUFNLEtBQUtDLFVBQVUsR0FBRTtJQUNsQyxLQUFLQyxPQUFNLEtBQUtDLFNBQVNSLE9BQU9TLE9BQU9DOzs7Ozs7RURtQnpDLGFBQWEsaUJBQWlCLENBQUM7R0FDOUIsS0FBSztHQUNMLE9BQU8sU0FBUyxZQ1BOO0lBQ1YsSUFBSXhGLEtBQUs7SUFDVCxLQUFLSixNQUFNSyxJQUFJLHVFQUF1RUMsS0FBSyxVQUFTQyxRQUFPO0tBQzFHSCxHQUFHK0UsU0FBUzVFLE9BQU9FOzs7S0RVbEI7R0FDRixLQUFLO0dBQ0wsT0FBTyxTQUFTLFNDUlJtRixNQUFLO0lBQ2IsSUFBSXhGLEtBQUs7SUFDVCxLQUFLSixNQUFNSyxJQUFJLHlFQUF1RXVGLE1BQU10RixLQUFLLFVBQVNDLFFBQU87S0FDaEhILEdBQUdxRixPQUFPbEYsT0FBT0U7Ozs7O0VEYW5CLE9BQU87Ozs7Ozs7QUUvQ1I7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztFQUM1QyxPQUFPOzs7QUFHUixLQUFJLGVBQWUsWUFBWSxFQUFFLFNBQVMsaUJBQWlCLFFBQVEsT0FBTyxFQUFFLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSyxFQUFFLElBQUksYUFBYSxNQUFNLElBQUksV0FBVyxhQUFhLFdBQVcsY0FBYyxPQUFPLFdBQVcsZUFBZSxNQUFNLElBQUksV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE9BQU8sZUFBZSxRQUFRLFdBQVcsS0FBSyxpQkFBaUIsT0FBTyxVQUFVLGFBQWEsWUFBWSxhQUFhLEVBQUUsSUFBSSxZQUFZLGlCQUFpQixZQUFZLFdBQVcsYUFBYSxJQUFJLGFBQWEsaUJBQWlCLGFBQWEsY0FBYyxPQUFPOztBQUVoaUIsVUFBUyxnQkFBZ0IsVUFBVSxhQUFhLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixjQUFjLEVBQUUsTUFBTSxJQUFJLFVBQVU7OztpREFFaEQ7RUNUL0QsMkJBQWFULE9BQU9VLE9BQU87R0FDMUI7O0dBRDBCOztHQUUxQixLQUFLVixRQUFRQTtHQUNiLEtBQUtVLFFBQVFBOztHQUViLEtBQUttRjs7O0VEZ0JOLGFBQWEsbUJBQW1CLENBQUM7R0FDaEMsS0FBSztHQUNMLE9BQU8sU0FBUyxhQ2hCTDtJQUNYLElBQUl6RixLQUFLO0lBQ1QsSUFBSWdCLFFBQVEsS0FBS1YsTUFBTW9GO0lBQ3ZCLEtBQUs5RixNQUFNQyxLQUFLLDRFQUEyRSxFQUFDbUIsT0FBT0EsU0FBUWQsS0FBSyxVQUFTQyxRQUFPO0tBQy9ILElBQUlFLE9BQU9GLE9BQU9FOztLQUVsQkwsR0FBRzJGLGNBQWN0Rjs7O0tEbUJoQjtHQUNGLEtBQUs7R0FDTCxPQUFPLFNBQVMsZ0JDbEJGO0lBQ2QsSUFBSUEsT0FBTztLQUNWbUMsV0FBWSxLQUFLaUIsWUFBYSxLQUFLakI7S0FDbkNDLFVBQVcsS0FBS2dCLFlBQWEsS0FBS2hCO0tBQ2xDaEMsT0FBUSxLQUFLZ0QsWUFBYSxLQUFLaEQ7S0FDL0JpQyxVQUFXLEtBQUtlLFlBQWEsS0FBS2Y7S0FDbENDLFFBQVMsS0FBS2MsWUFBYSxLQUFLZDtLQUNoQ2UsVUFBVyxLQUFLRCxZQUFhLEtBQUtDO0tBQ2xDZCxRQUFTLEtBQUthLFlBQWEsS0FBS2I7S0FDaENDLGFBQWMsS0FBS1ksWUFBYSxLQUFLWjtLQUNyQ0MsU0FBVSxLQUFLVyxZQUFhLEtBQUtYO0tBQ2pDQyxTQUFVLEtBQUtVLFlBQWEsS0FBS1Y7S0FDakNDLE1BQU8sS0FBS1MsWUFBYSxLQUFLVDs7S0FFOUJJLFVBQVcsS0FBS0ssWUFBYSxLQUFLTDtLQUNsQ0MsY0FBZSxLQUFLSSxZQUFhLEtBQUtKO0tBQ3RDQyxhQUFjLEtBQUtHLFlBQWEsS0FBS0g7S0FDckNDLGFBQWMsS0FBS0UsWUFBYSxLQUFLRjtLQUNyQ0MsbUJBQW9CLEtBQUtDLFlBQWEsS0FBS0Q7OztJQUc1QyxJQUFJTyxhQUFhLEtBQUtDLGFBQWEzRDs7SUFFbkMsSUFBSSxDQUFDMEQsV0FBVyxVQUFVO0tBQ3pCckQsTUFBTXFELFdBQVc7OztJQUdsQixLQUFLNkIsd0JBQXdCdkY7O0tEb0IzQjtHQUNGLEtBQUs7R0FDTCxPQUFPLFNBQVMsWUNwQkpnQyxPQUFPO0lBQ25CLE9BQU8sT0FBT0EsU0FBUyxjQUFjQSxRQUFROztLRHNCM0M7R0FDRixLQUFLO0dBQ0wsT0FBTyxTQUFTLGFDdEJIaEMsTUFBTTtJQUNuQixJQUFJNkQsUUFBUTtJQUNaLElBQUluRSxVQUFVOztJQUVkLElBQUlNLEtBQUssZUFBZSxJQUFJO0tBQUVOLFVBQVU7O0lBQ3hDLElBQUlNLEtBQUssZ0JBQWdCLElBQUk7S0FBRU4sVUFBVTs7SUFDekMsSUFBSU0sS0FBSyxlQUFlLElBQUk7S0FBRU4sVUFBVTs7SUFDeEMsSUFBSU0sS0FBSyxZQUFZLElBQUk7S0FBRU4sVUFBVTs7SUFDckMsSUFBSU0sS0FBSyxhQUFhLElBQUk7S0FBRU4sVUFBVTs7SUFDdEMsSUFBSU0sS0FBSyxlQUFlLElBQUk7S0FBRU4sVUFBVTs7SUFDeEMsSUFBSU0sS0FBSyxhQUFhLElBQUk7S0FBRU4sVUFBVTs7SUFDdEMsSUFBSU0sS0FBSyxrQkFBa0IsSUFBSTtLQUFFTixVQUFVOztJQUMzQyxJQUFJTSxLQUFLLGNBQWMsSUFBSTtLQUFFTixVQUFVOzs7SUFFdkNtRSxRQUFRbkUsV0FBVyxlQUFlLFFBQVFtRTtJQUMxQyxPQUFPLEVBQUNBLE9BQU1BLE9BQU1uRSxTQUFRQTs7S0QwQzFCO0dBQ0YsS0FBSztHQUNMLE9BQU8sU0FBUyx3QkMxQ09NLE1BQUs7SUFDNUIsSUFBSVcsUUFBUSxLQUFLVixNQUFNb0Y7SUFDdkIsS0FBSzlGLE1BQU1DLEtBQUssbUZBQW1GLEVBQUNRLE1BQUtBLE1BQU1XLE9BQU1BLFNBQVFvRCxRQUFRLFVBQVNqRSxRQUFPO0tBQ3BKTyxNQUFNUCxPQUFPSjtPQUNYd0UsTUFBTSxZQUFVO0tBQ2xCN0QsTUFBTTs7O0tENkNMO0dBQ0YsS0FBSztHQUNMLE9BQU8sU0FBUyxjQzVDSEwsTUFBSztJQUNsQixLQUFLbUMsWUFBWW5DLEtBQUttQztJQUN0QixLQUFLQyxXQUFXcEMsS0FBS29DO0lBQ3JCLEtBQUtoQyxRQUFRSixLQUFLSTtJQUNsQixLQUFLaUMsV0FBV3JDLEtBQUtxQztJQUNyQixLQUFLQyxTQUFTdEMsS0FBS3NDO0lBQ25CLEtBQUtlLFdBQVdyRCxLQUFLcUQ7SUFDckIsS0FBS2QsU0FBU3ZDLEtBQUt1QztJQUNuQixLQUFLQyxjQUFjeEMsS0FBS3dDO0lBQ3hCLEtBQUtDLFVBQVV6QyxLQUFLeUM7SUFDcEIsS0FBS0MsVUFBVTFDLEtBQUswQztJQUNwQixLQUFLQyxPQUFPM0MsS0FBSzJDOztJQUVqQixLQUFLSSxXQUFXL0MsS0FBSytDO0lBQ3JCLEtBQUtDLGVBQWVoRCxLQUFLZ0Q7SUFDekIsS0FBS0MsY0FBY2pELEtBQUtpRDtJQUN4QixLQUFLQyxjQUFjbEQsS0FBS2tEO0lBQ3hCLEtBQUtDLG9CQUFvQm5ELEtBQUttRDs7OztFRGdEL0IsT0FBTzs7Ozs7OztBRTNJUjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0VBQzVDLE9BQU87OztBQUdSLEtBQUksZUFBZSxZQUFZLEVBQUUsU0FBUyxpQkFBaUIsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUUsSUFBSSxhQUFhLE1BQU0sSUFBSSxXQUFXLGFBQWEsV0FBVyxjQUFjLE9BQU8sV0FBVyxlQUFlLE1BQU0sSUFBSSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sT0FBTyxlQUFlLFFBQVEsV0FBVyxLQUFLLGlCQUFpQixPQUFPLFVBQVUsYUFBYSxZQUFZLGFBQWEsRUFBRSxJQUFJLFlBQVksaUJBQWlCLFlBQVksV0FBVyxhQUFhLElBQUksYUFBYSxpQkFBaUIsYUFBYSxjQUFjLE9BQU87O0FBRWhpQixVQUFTLGdCQUFnQixVQUFVLGFBQWEsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLGNBQWMsRUFBRSxNQUFNLElBQUksVUFBVTs7O2lHQUVoQztFQ1QvRSxtQ0FBYXFDLFFBQVFuRyxNQUFNb0csUUFBUUMsVUFBVXpGLE9BQU9WLE9BQU87R0FDMUQ7O0dBRDBEOztHQUcxRCxJQUFJSSxLQUFLOztHQUVULEtBQUtOLE9BQU9BO0dBQ1osS0FBS1ksUUFBUUE7R0FDYixLQUFLVixRQUFRQTs7R0FFYixLQUFLOEYsV0FBVyxLQUFLcEYsTUFBTW9GO0dBQzNCLEtBQUtwRCxXQUFXLEtBQUtvRDs7R0FFckIsS0FBS00sWUFBWSxVQUFTQyxNQUFNO0lBQy9CQSxLQUFLQyxTQUFTTCxPQUFPSyxPQUFPO0tBQzNCN0csS0FBS1osVUFBUTtLQUNiNEIsTUFBTSxFQUFDaUMsVUFBVXRDLEdBQUdzQyxVQUFVMkQsTUFBTUE7T0FDbEMvRixLQUFLLFVBQVVrQixVQUFVO0tBQzNCMkUsU0FBUyxZQUFZO01BQ3BCRSxLQUFLOUYsU0FBU2lCLFNBQVNmOztPQUV0QixVQUFVZSxVQUFVO0tBQ3RCLElBQUlBLFNBQVN3QixTQUFTLEdBQ3JCa0QsT0FBT0ssV0FBVy9FLFNBQVN3QixTQUFTLE9BQU94QixTQUFTZjtPQUNuRCxVQUFVK0YsS0FBSzs7S0FFakJILEtBQUtJLFdBQVdDLEtBQUtDLElBQUksS0FBS0MsU0FBUyxRQUFRSixJQUFJSyxTQUFTTCxJQUFJTTs7OztHQUlsRSxLQUFLOUcsTUFBTUMsS0FBS3BCLFVBQVEsd0JBQXVCLEVBQUN1QyxPQUFNLEtBQUswRSxZQUFXeEYsS0FBSyxVQUFTQyxRQUFPO0lBQzFGSCxHQUFHMkcsaUJBQWlCLDhGQUE4RnhHLE9BQU9FLEtBQUt1Rzs7OztFRGVoSSxhQUFhLDJCQUEyQixDQUFDO0dBQ3hDLEtBQUs7R0FDTCxPQUFPLFNBQVMsb0JDZEU7OztFRGlCbkIsT0FBTzs7Ozs7OztBRW5EUjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0VBQzVDLE9BQU87OztBQUdSLEtBQUksZUFBZSxZQUFZLEVBQUUsU0FBUyxpQkFBaUIsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUUsSUFBSSxhQUFhLE1BQU0sSUFBSSxXQUFXLGFBQWEsV0FBVyxjQUFjLE9BQU8sV0FBVyxlQUFlLE1BQU0sSUFBSSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sT0FBTyxlQUFlLFFBQVEsV0FBVyxLQUFLLGlCQUFpQixPQUFPLFVBQVUsYUFBYSxZQUFZLGFBQWEsRUFBRSxJQUFJLFlBQVksaUJBQWlCLFlBQVksV0FBVyxhQUFhLElBQUksYUFBYSxpQkFBaUIsYUFBYSxjQUFjLE9BQU87O0FBRWhpQixVQUFTLGdCQUFnQixVQUFVLGFBQWEsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLGNBQWMsRUFBRSxNQUFNLElBQUksVUFBVTs7OzREQUVwRDtFQ1QzRCx5QkFBYWhILE9BQU9VLE9BQU9DLFdBQVc7R0FDckM7O0dBRHFDOztHQUVyQyxLQUFLWCxRQUFRQTtHQUNiLEtBQUtVLFFBQVFBO0dBQ2IsS0FBS0MsWUFBWUE7R0FDakIsS0FBS2UsV0FBV0E7O0dBRWhCLEtBQUt1RixRQUFRO0dBQ2IsS0FBS0Msb0JBQW9COztHQUV6QixLQUFLckI7OztFRGdCTixhQUFhLGlCQUFpQixDQUFDO0dBQzlCLEtBQUs7R0FDTCxPQUFPLFNBQVMsUUNoQlRzQixjQUFhO0lBQ3BCLE9BQU9BLGdCQUFnQixLQUFLRjs7S0RrQjFCO0dBQ0YsS0FBSztHQUNMLE9BQU8sU0FBUyxPQ2xCWDtJQUNMLE9BQU8sS0FBS0E7O0tEb0JWO0dBQ0YsS0FBSztHQUNMLE9BQU8sU0FBUyxPQ3BCWDtJQUNMLE9BQU8sS0FBS0E7O0tEc0JWO0dBQ0YsS0FBSztHQUNMLE9BQU8sU0FBUyxhQ3RCTDtJQUNYLElBQUk3RyxLQUFLO0lBQ1QsSUFBSWdCLFFBQVEsS0FBS1YsTUFBTW9GO0lBQ3ZCMUYsR0FBR0osTUFBTUMsS0FBSyw4Q0FBNkMsRUFBQ21CLE9BQU9BLFNBQVFkLEtBQUssVUFBU0MsUUFBTztLQUMvRixJQUFJRSxPQUFPRixPQUFPRTtLQUNsQixJQUFJLENBQUNBLE1BQU07TUFDVkwsR0FBR0osTUFBTUMsS0FBSyxxQ0FBb0MsRUFBQ21CLE9BQU9BLFNBQVFkLEtBQUssVUFBU0MsUUFBTztPQUN0RixJQUFJRSxPQUFPRixPQUFPRTtPQUNsQkwsR0FBRzJGLGNBQWN0Rjs7WUFFZDtNQUNKTCxHQUFHMkYsY0FBY3RGOzs7O0tEMEJqQjtHQUNGLEtBQUs7R0FDTCxPQUFPLFNBQVMsY0N4QkhBLE1BQUs7SUFDbEIsS0FBSzJHLGNBQWMzRyxLQUFLMkcsY0FBYzNHLEtBQUsyRyxjQUFjM0csS0FBS29DO0lBQzlELEtBQUt3RSxlQUFlNUcsS0FBSzRHLGVBQWU1RyxLQUFLNEcsZUFBZTVHLEtBQUttQztJQUNqRSxLQUFLMEUsZ0JBQWdCN0csS0FBSzZHLGdCQUFnQjdHLEtBQUs2RyxnQkFBZ0I7O0lBRS9ELEtBQUtDLFNBQVM5RyxLQUFLOEcsU0FBUzlHLEtBQUs4RyxTQUFTOUcsS0FBS3NDO0lBQy9DLEtBQUt5RSxpQkFBaUIvRyxLQUFLK0csaUJBQWlCL0csS0FBSytHLGlCQUFpQi9HLEtBQUt1QztJQUN2RSxLQUFLeUUsaUJBQWlCaEgsS0FBS2dILGlCQUFpQmhILEtBQUtnSCxpQkFBaUJoSCxLQUFLd0M7SUFDdkUsS0FBS3lFLFlBQVlqSCxLQUFLaUgsWUFBWWpILEtBQUtpSCxZQUFZO0lBQ25ELEtBQUtDLHdCQUF3QmxILEtBQUtrSCx3QkFBd0JsSCxLQUFLa0gsd0JBQXdCO0lBQ3ZGLEtBQUtDLG1CQUFtQm5ILEtBQUttSCxtQkFBbUJuSCxLQUFLbUgsbUJBQW1CO0lBQ3hFLEtBQUtDLCtCQUErQnBILEtBQUtvSCwrQkFBK0JwSCxLQUFLb0gsK0JBQStCO0lBQzVHLEtBQUtDLGVBQWVySCxLQUFLcUgsZUFBZXJILEtBQUtxSCxlQUFlckgsS0FBSytDO0lBQ2pFLEtBQUt1RSxtQkFBbUJ0SCxLQUFLc0gsbUJBQW1CdEgsS0FBS3NILG1CQUFtQnRILEtBQUtnRDtJQUM3RSxLQUFLdUUsa0JBQWtCdkgsS0FBS3VILGtCQUFrQnZILEtBQUt1SCxrQkFBa0J2SCxLQUFLaUQ7SUFDMUUsS0FBS3VFLHlCQUF5QnhILEtBQUt3SCx5QkFBeUJ4SCxLQUFLd0gseUJBQXlCeEgsS0FBS2tEO0lBQy9GLEtBQUt1RCxvQkFBb0J6RyxLQUFLeUgsaUJBQWlCekgsS0FBS3lILGlCQUFpQjs7SUFFckUsS0FBS0MseUJBQXlCMUgsS0FBSzBILHlCQUF5QjFILEtBQUswSCx5QkFBeUI7SUFDMUYsS0FBS0Msa0JBQWtCM0gsS0FBSzJILGtCQUFrQjNILEtBQUsySCxrQkFBa0I7SUFDckUsS0FBS0MsY0FBYzVILEtBQUs0SCxjQUFjNUgsS0FBSzRILGNBQWM7SUFDekQsS0FBS0Msa0JBQWtCN0gsS0FBSzZILGtCQUFrQjdILEtBQUs2SCxrQkFBa0I7SUFDckUsS0FBS0Msb0JBQW9COUgsS0FBSzhILG9CQUFvQjlILEtBQUs4SCxvQkFBb0I7SUFDM0UsS0FBS3JFLElBQUl6RCxLQUFLeUQsSUFBSXpELEtBQUt5RCxJQUFJO0lBQzNCLEtBQUtzRSxJQUFJL0gsS0FBSytILElBQUkvSCxLQUFLK0gsSUFBSTtJQUMzQixLQUFLQyxJQUFJaEksS0FBS2dJLElBQUloSSxLQUFLZ0ksSUFBSTtJQUMzQixLQUFLQyxNQUFNakksS0FBS2lJLE1BQU1qSSxLQUFLaUksTUFBTTs7S0QwQi9CO0dBQ0YsS0FBSztHQUNMLE9BQU8sU0FBUyxrQkMxQkMxRixRQUFPO0lBQ3hCLE9BQU8sS0FBS2tFLHFCQUFxQmxFOztLRDRCL0I7R0FDRixLQUFLO0dBQ0wsT0FBTyxTQUFTLFNDMUJUO0lBQ1AsSUFBSSxLQUFLMkYsY0FBYyxJQUFJO0tBQzFCN0gsTUFBTTtLQUNOOzs7SUFHRCxJQUFJTSxRQUFRLEtBQUtWLE1BQU1vRjs7SUFFdkIsSUFBSXJGLE9BQU87S0FDVjJHLGFBQWMsS0FBS3ZELFlBQWEsS0FBS3VEO0tBQ3JDQyxjQUFlLEtBQUt4RCxZQUFhLEtBQUt3RDtLQUN0Q0MsZUFBZ0IsS0FBS3pELFlBQWEsS0FBS3lEOztLQUV2Q0MsUUFBUyxLQUFLMUQsWUFBYSxLQUFLMEQ7S0FDaENDLGdCQUFpQixLQUFLM0QsWUFBYSxLQUFLMkQ7S0FDeENDLGdCQUFpQixLQUFLNUQsWUFBYSxLQUFLNEQ7S0FDeENDLFdBQVksS0FBSzdELFlBQWEsS0FBSzZEO0tBQ25DQyx1QkFBd0IsS0FBSzlELFlBQWEsS0FBSzhEO0tBQy9DQyxrQkFBbUIsS0FBSy9ELFlBQWEsS0FBSytEO0tBQzFDQyw4QkFBK0IsS0FBS2hFLFlBQWEsS0FBS2dFO0tBQ3REQyxjQUFlLEtBQUtqRSxZQUFhLEtBQUtpRTtLQUN0Q0Msa0JBQW1CLEtBQUtsRSxZQUFhLEtBQUtrRTtLQUMxQ0MsaUJBQWtCLEtBQUtuRSxZQUFhLEtBQUttRTtLQUN6Q0Msd0JBQXlCLEtBQUtwRSxZQUFhLEtBQUtvRTs7S0FFaERFLHdCQUF5QixLQUFLdEUsWUFBYSxLQUFLc0U7S0FDaERDLGlCQUFrQixLQUFLdkUsWUFBYSxLQUFLdUU7S0FDekNDLGFBQWMsS0FBS3hFLFlBQWEsS0FBS3dFO0tBQ3JDQyxpQkFBa0IsS0FBS3pFLFlBQWEsS0FBS3lFO0tBQ3pDcEUsR0FBSTtLQUNKc0UsR0FBSTtLQUNKQyxHQUFJO0tBQ0pDLEtBQU07OztJQUdQLElBQUl2RSxhQUFhLEtBQUtDLGFBQWEzRDs7SUFFbkMsSUFBSSxDQUFDMEQsV0FBVyxVQUFVOzs7V0FHckI7Ozs7SUFJTCxLQUFLRSxzQkFBc0I1RCxNQUFNLEtBQUtrSSxZQUFZdkg7O0tENEJoRDtHQUNGLEtBQUs7R0FDTCxPQUFPLFNBQVMsU0M1QlQ7SUFDUCxJQUFJLEtBQUt1SCxjQUFjLElBQUk7S0FDMUI3SCxNQUFNO0tBQ047OztJQUdELElBQUlNLFFBQVEsS0FBS1YsTUFBTW9GOztJQUV2QixJQUFJckYsT0FBTztLQUNWMkcsYUFBYyxLQUFLdkQsWUFBYSxLQUFLdUQ7S0FDckNDLGNBQWUsS0FBS3hELFlBQWEsS0FBS3dEO0tBQ3RDQyxlQUFnQixLQUFLekQsWUFBYSxLQUFLeUQ7O0tBRXZDQyxRQUFTLEtBQUsxRCxZQUFhLEtBQUswRDtLQUNoQ0MsZ0JBQWlCLEtBQUszRCxZQUFhLEtBQUsyRDtLQUN4Q0MsZ0JBQWlCLEtBQUs1RCxZQUFhLEtBQUs0RDtLQUN4Q0MsV0FBWSxLQUFLN0QsWUFBYSxLQUFLNkQ7S0FDbkNDLHVCQUF3QixLQUFLOUQsWUFBYSxLQUFLOEQ7S0FDL0NDLGtCQUFtQixLQUFLL0QsWUFBYSxLQUFLK0Q7S0FDMUNDLDhCQUErQixLQUFLaEUsWUFBYSxLQUFLZ0U7S0FDdERDLGNBQWUsS0FBS2pFLFlBQWEsS0FBS2lFO0tBQ3RDQyxrQkFBbUIsS0FBS2xFLFlBQWEsS0FBS2tFO0tBQzFDQyxpQkFBa0IsS0FBS25FLFlBQWEsS0FBS21FO0tBQ3pDQyx3QkFBeUIsS0FBS3BFLFlBQWEsS0FBS29FO0tBQ2hERSx3QkFBeUIsS0FBS3RFLFlBQWEsS0FBS3NFO0tBQ2hEQyxpQkFBa0IsS0FBS3ZFLFlBQWEsS0FBS3VFO0tBQ3pDQyxhQUFjLEtBQUt4RSxZQUFhLEtBQUt3RTtLQUNyQ0MsaUJBQWtCLEtBQUt6RSxZQUFhLEtBQUt5RTs7O0lBRzFDLElBQUluRSxhQUFhLEtBQUtDLGFBQWEzRDs7SUFFbkMsSUFBSSxDQUFDMEQsV0FBVyxVQUFVO0tBQ3pCckQsTUFBT3FELFdBQVc7V0FDZDtLQUNKLEtBQUt5RSxzQkFBc0JuSSxNQUFNLEtBQUtrSSxZQUFZdkg7OztLRCtCakQ7R0FDRixLQUFLO0dBQ0wsT0FBTyxTQUFTLFlDN0JKcUIsT0FBTztJQUNuQixPQUFPLE9BQU9BLFNBQVMsY0FBY0EsUUFBUTs7S0QrQjNDO0dBQ0YsS0FBSztHQUNMLE9BQU8sU0FBUyxhQy9CSGhDLE1BQU07SUFDbkIsSUFBSTZELFFBQVE7SUFDWixJQUFJbkUsVUFBVTs7SUFFZCxJQUFJTSxLQUFLLGtCQUFrQixJQUFJO0tBQUVOLFVBQVU7O0lBQzNDLElBQUlNLEtBQUssa0JBQWtCLElBQUk7S0FBRU4sVUFBVTs7SUFDM0MsSUFBSU0sS0FBSyxvQkFBb0IsSUFBSTtLQUFFTixVQUFVOztJQUM3QyxJQUFJTSxLQUFLLGFBQWEsSUFBSTtLQUFFTixVQUFVOztJQUN0QyxJQUFJTSxLQUFLLGFBQWEsSUFBSTtLQUFFTixVQUFVOztJQUN0QyxJQUFJTSxLQUFLLGtCQUFrQixJQUFJO0tBQUVOLFVBQVU7OztJQUUzQyxJQUFJTSxLQUFLLGtCQUFrQixJQUFJO0tBQUVOLFVBQVU7O0lBQzNDLElBQUlNLEtBQUssbUJBQW1CLElBQUk7S0FBRU4sVUFBVTs7SUFDNUMsSUFBSU0sS0FBSyxvQkFBb0IsSUFBSTtLQUFFTixVQUFVOzs7SUFFN0MsSUFBSU0sS0FBSyxhQUFhLElBQUk7S0FBRU4sVUFBVTs7SUFDdEMsSUFBSU0sS0FBSyxxQkFBcUIsSUFBSTtLQUFFTixVQUFVOztJQUM5QyxJQUFJTSxLQUFLLHFCQUFxQixJQUFJO0tBQUVOLFVBQVU7O0lBQzlDLElBQUlNLEtBQUssZ0JBQWdCLElBQUk7S0FBRU4sVUFBVTs7SUFDekMsSUFBSU0sS0FBSyw0QkFBNEIsSUFBSTtLQUFFTixVQUFVOztJQUNyRCxJQUFJTSxLQUFLLHVCQUF1QixJQUFJO0tBQUVOLFVBQVU7O0lBQ2hELElBQUlNLEtBQUssbUNBQW1DLElBQUk7S0FBRU4sVUFBVTs7SUFDNUQsSUFBSU0sS0FBSyxtQkFBbUIsSUFBSTtLQUFFTixVQUFVOztJQUM1QyxJQUFJTSxLQUFLLHVCQUF1QixJQUFJO0tBQUVOLFVBQVU7O0lBQ2hELElBQUlNLEtBQUssc0JBQXNCLElBQUk7S0FBRU4sVUFBVTs7SUFDL0MsSUFBSU0sS0FBSyw2QkFBNkIsSUFBSTtLQUFFTixVQUFVOztJQUN0RCxJQUFJTSxLQUFLLDZCQUE2QixJQUFJO0tBQUVOLFVBQVU7O0lBQ3RELElBQUlNLEtBQUssc0JBQXNCLElBQUk7S0FBRU4sVUFBVTs7SUFDL0MsSUFBSU0sS0FBSyxrQkFBa0IsSUFBSTtLQUFFTixVQUFVOztJQUMzQyxJQUFJTSxLQUFLLHNCQUFzQixJQUFJO0tBQUVOLFVBQVU7OztJQUc1Q21FLFFBQVFuRSxXQUFXLGVBQWUsUUFBUW1FO0lBQzdDLE9BQU8sRUFBQ0EsT0FBTUEsT0FBTW5FLFNBQVFBOztLRGdGMUI7R0FDRixLQUFLO0dBQ0wsT0FBTyxTQUFTLGNDaEZKO0lBQ1osSUFBSU0sT0FBTztLQUNWMkcsYUFBYyxLQUFLdkQsWUFBYSxLQUFLdUQ7S0FDckNDLGNBQWUsS0FBS3hELFlBQWEsS0FBS3dEO0tBQ3RDQyxlQUFnQixLQUFLekQsWUFBYSxLQUFLeUQ7O0tBRXZDQyxRQUFTLEtBQUsxRCxZQUFhLEtBQUswRDtLQUNoQ0MsZ0JBQWlCLEtBQUszRCxZQUFhLEtBQUsyRDtLQUN4Q0MsZ0JBQWlCLEtBQUs1RCxZQUFhLEtBQUs0RDtLQUN4Q0MsV0FBWSxLQUFLN0QsWUFBYSxLQUFLNkQ7S0FDbkNDLHVCQUF3QixLQUFLOUQsWUFBYSxLQUFLOEQ7S0FDL0NDLGtCQUFtQixLQUFLL0QsWUFBYSxLQUFLK0Q7S0FDMUNDLDhCQUErQixLQUFLaEUsWUFBYSxLQUFLZ0U7S0FDdERDLGNBQWUsS0FBS2pFLFlBQWEsS0FBS2lFO0tBQ3RDQyxrQkFBbUIsS0FBS2xFLFlBQWEsS0FBS2tFO0tBQzFDQyxpQkFBa0IsS0FBS25FLFlBQWEsS0FBS21FO0tBQ3pDQyx3QkFBeUIsS0FBS3BFLFlBQWEsS0FBS29FO0tBQ2hERSx3QkFBeUIsS0FBS3RFLFlBQWEsS0FBS3NFO0tBQ2hEQyxpQkFBa0IsS0FBS3ZFLFlBQWEsS0FBS3VFO0tBQ3pDQyxhQUFjLEtBQUt4RSxZQUFhLEtBQUt3RTtLQUNyQ0MsaUJBQWtCLEtBQUt6RSxZQUFhLEtBQUt5RTtLQUN6Q3BFLEdBQUk7S0FDSnNFLEdBQUk7S0FDSkMsR0FBSTtLQUNKQyxLQUFNOzs7SUFHUCxPQUFPLEtBQUt0RSxhQUFhM0QsTUFBTTs7S0RrRjdCO0dBQ0YsS0FBSztHQUNMLE9BQU8sU0FBUyxzQkNsRktBLE1BQU15QyxTQUFTOUIsT0FBTTtJQUMxQyxJQUFJTSxXQUFXLEtBQUtBO0lBQ3BCLEtBQUsxQixNQUFNQyxLQUFLLHFEQUFxRCxFQUFDUSxNQUFLQSxNQUFNeUMsU0FBUUEsU0FBUzlCLE9BQU1BLFNBQVFvRCxRQUFRLFlBQVU7S0FDakk5QyxTQUFTK0MsT0FBTy9DLFNBQVNnRCxTQUFTO09BQ2hDQyxNQUFNLFVBQVNDLEtBQUk7S0FDckI5RCxNQUFNLHdCQUF3QjhEOzs7S0RxRjdCO0dBQ0YsS0FBSztHQUNMLE9BQU8sU0FBUyxzQkNwRktuRSxNQUFNeUMsU0FBUzlCLE9BQU07SUFDMUMsSUFBSU0sV0FBVyxLQUFLQTtJQUNwQixLQUFLMUIsTUFBTUMsS0FBSyw0REFBNEQsRUFBQ1EsTUFBS0EsTUFBTXlDLFNBQVFBLFNBQVM5QixPQUFNQSxTQUFRb0QsUUFBUSxZQUFVO0tBQ3hJOUMsU0FBUytDLE9BQU8vQyxTQUFTZ0QsU0FBUztPQUNoQ0MsTUFBTSxVQUFTQyxLQUFJO0tBQ3JCOUQsTUFBTSx3QkFBd0I4RDs7O0tEdUY3QjtHQUNGLEtBQUs7R0FDTCxPQUFPLFNBQVMsYUNyRkw7SUFDWCxJQUFJaUUsTUFBTSxLQUFLQTtJQUNmLElBQUlOLG9CQUFvQixLQUFLQTs7OztJQUk3QixJQUFHTSxPQUFPLElBQUc7S0FDWi9ILE1BQU07V0FDRjtLQUNILElBQUcrSCxJQUFJckQsVUFBVyxJQUFHO01BQ3BCLElBQUk5RCxXQUFXLEtBQUtBO01BQ3BCVixFQUFFLGdCQUFnQjhILE1BQU07TUFDeEJwSCxTQUFTK0MsT0FBTy9DLFNBQVNnRCxTQUFTO01BQ2xDLEtBQUsxRSxNQUFNQyxLQUFLLGdEQUFnRCxFQUFDNEksS0FBSUEsS0FBS04sbUJBQWtCQSxxQkFBb0IvRCxRQUFRLFlBQVUsSUFFaElHLE1BQU0sVUFBU0MsS0FBSTtPQUNyQjlELE1BQU0sd0JBQXdCOEQ7O1lBRzNCO01BQ0o5RCxNQUFNOzs7Ozs7RUR3RlQsT0FBTzs7Ozs7OztBRTNWUjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0VBQzVDLE9BQU87OztBQUdSLEtBQUksZUFBZSxZQUFZLEVBQUUsU0FBUyxpQkFBaUIsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUUsSUFBSSxhQUFhLE1BQU0sSUFBSSxXQUFXLGFBQWEsV0FBVyxjQUFjLE9BQU8sV0FBVyxlQUFlLE1BQU0sSUFBSSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sT0FBTyxlQUFlLFFBQVEsV0FBVyxLQUFLLGlCQUFpQixPQUFPLFVBQVUsYUFBYSxZQUFZLGFBQWEsRUFBRSxJQUFJLFlBQVksaUJBQWlCLFlBQVksV0FBVyxhQUFhLElBQUksYUFBYSxpQkFBaUIsYUFBYSxjQUFjLE9BQU87O0FBRWhpQixVQUFTLGdCQUFnQixVQUFVLGFBQWEsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLGNBQWMsRUFBRSxNQUFNLElBQUksVUFBVTs7O29EQUVsRDtFQ1Q3RCwwQkFBWUosT0FBT0MsV0FBVTtHQUM1Qjs7R0FENEI7O0dBRzVCLEtBQUtELFFBQVFBO0dBQ2IsS0FBS3FJLGtCQUFrQnJJLE1BQU1xSTtHQUM3QixLQUFLcEksWUFBWUE7OztFRGVsQixhQUFhLGtCQUFrQixDQUFDO0dBQy9CLEtBQUs7R0FDTCxPQUFPLFNBQVMsU0NmVDtJQUNQLEtBQUtELE1BQU1zSTtJQUNYLEtBQUtySSxVQUFVYyxLQUFLO0lBQ3BCd0gsT0FBT3ZILFNBQVN3SDs7OztFRG1CakIsT0FBTzs7Ozs7OztBRTlCUjs7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztFQUM1QyxPQUFPOztBQUVSLFNDTGdCQztBQUFULFVBQVNBLG1CQUFtQkMsUUFBTztFQUN6Qzs7RUFDQSxPQUFPO0dBQ05DLFNBQVU7R0FDVkMsTUFBTyxjQUFTQyxPQUFPQyxLQUFLQyxPQUFPQyxTQUFRO0lBQzFDLElBQUlDLFlBQVlQLE9BQU9LLE1BQU1HO0lBQzdCLElBQUlDLGNBQWNULE9BQU9LLE1BQU1DOztJQUUvQkgsTUFBTU8sT0FBT0wsTUFBTUMsU0FBUyxVQUFTSyxVQUFTO0tBQzdDTCxRQUFRTSxhQUFhUCxNQUFNdkgsTUFBTTZILGFBQWFKLFVBQVVKOztJQUV6REEsTUFBTU8sT0FBT0wsTUFBTUcsV0FBVyxVQUFTRyxVQUFTO0tBQy9DTCxRQUFRTSxhQUFhUCxNQUFNdkgsTUFBTTZILGFBQWFGLFlBQVlOOzs7Ozs7Ozs7O0FDWjlEOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsS0FBSSxlQUFlLFlBQVksRUFBRSxTQUFTLGlCQUFpQixRQUFRLE9BQU8sRUFBRSxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUssRUFBRSxJQUFJLGFBQWEsTUFBTSxJQUFJLFdBQVcsYUFBYSxXQUFXLGNBQWMsT0FBTyxXQUFXLGVBQWUsTUFBTSxJQUFJLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxPQUFPLGVBQWUsUUFBUSxXQUFXLEtBQUssaUJBQWlCLE9BQU8sVUFBVSxhQUFhLFlBQVksYUFBYSxFQUFFLElBQUksWUFBWSxpQkFBaUIsWUFBWSxXQUFXLGFBQWEsSUFBSSxhQUFhLGlCQUFpQixhQUFhLGNBQWMsT0FBTzs7QUFFaGlCLFVBQVMsZ0JBQWdCLFVBQVUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxVQUFVOzs7d0RBRWxDO0dDVDVFLGtDQUFhekosTUFBTUUsT0FBTztLQUN4Qjs7S0FEd0I7O0tBR3hCLEtBQUtGLE9BQU9BO0tBQ1osS0FBS0UsUUFBUUE7S0FDYixLQUFLaUssVUFBVTs7O0dEZWpCLGFBQWEsMEJBQTBCLENBQUM7S0FDdEMsS0FBSztLQUNMLE9BQU8sU0FBUyxrQkNkUTtPQUFBOztPQUFBLElBQVZDLFFBQVUsb0VBQUo7O09BQ3BCLE9BQU8sS0FBS2xLLE1BQU1LLElBQUksS0FBSzRKLFVBQVUsNEJBQTRCQyxPQUM5RDVKLEtBQUssVUFBQ2tCLFVBQWE7U0FDbEIsT0FBT0EsU0FBU2Y7VUFFakJjLE1BQU0sVUFBQ29ELE9BQVU7U0FDaEIsTUFBSzdFLEtBQUs2RSxNQUFNLHNDQUFzQy9HLFFBQVF1TSxPQUFPeEYsTUFBTWxFLE1BQU07Ozs7O0dEcUJ2RixPQUFPOzs7Ozs7O0FFcENUOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsS0FBSSxlQUFlLFlBQVksRUFBRSxTQUFTLGlCQUFpQixRQUFRLE9BQU8sRUFBRSxLQUFLLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUssRUFBRSxJQUFJLGFBQWEsTUFBTSxJQUFJLFdBQVcsYUFBYSxXQUFXLGNBQWMsT0FBTyxXQUFXLGVBQWUsTUFBTSxJQUFJLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxPQUFPLGVBQWUsUUFBUSxXQUFXLEtBQUssaUJBQWlCLE9BQU8sVUFBVSxhQUFhLFlBQVksYUFBYSxFQUFFLElBQUksWUFBWSxpQkFBaUIsWUFBWSxXQUFXLGFBQWEsSUFBSSxhQUFhLGlCQUFpQixhQUFhLGNBQWMsT0FBTzs7QUFFaGlCLFVBQVMsZ0JBQWdCLFVBQVUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxVQUFVOztBQUVoSCxLQ1ZhMkosbUJEVVUsUUNWVkEsbUJEVXFDLFlBQVk7R0NUNUQsNEJBQWU7S0FDYjs7S0FEYTs7S0FHYixLQUFLM0osT0FBTyxDQUNWO09BQ0UsU0FBUztPQUNULE9BQU87T0FDUCxlQUFlO09BQ2YsUUFBUTtRQUVWO09BQ0UsU0FBUztPQUNULE9BQU87T0FDUCxlQUFlO09BQ2YsUUFBUTtRQUVWO09BQ0UsU0FBUztPQUNULE9BQU87T0FDUCxlQUFlO09BQ2YsUUFBUTtRQUVWO09BQ0UsU0FBUztPQUNULE9BQU87T0FDUCxlQUFlO09BQ2YsUUFBUTtRQUVWO09BQ0UsU0FBUztPQUNULE9BQU87T0FDUCxlQUFlO09BQ2YsUUFBUTtRQUVWO09BQ0UsU0FBUztPQUNULE9BQU87T0FDUCxlQUFlO09BQ2YsUUFBUTtRQUVWO09BQ0UsU0FBUztPQUNULE9BQU87T0FDUCxlQUFlO09BQ2YsUUFBUTtRQUVWO09BQ0UsU0FBUztPQUNULE9BQU87T0FDUCxlQUFlO09BQ2YsUUFBUTtRQUVWO09BQ0UsU0FBUztPQUNULE9BQU87T0FDUCxlQUFlO09BQ2YsUUFBUTtRQUVWO09BQ0UsU0FBUztPQUNULE9BQU87T0FDUCxlQUFlO09BQ2YsUUFBUTs7OztHRE1kLGFBQWEsa0JBQWtCLENBQUM7S0FDOUIsS0FBSztLQUNMLE9BQU8sU0FBUyxTQ0hUO09BQ1AsT0FBTyxLQUFLQTs7OztHRE9kLE9BQU87Ozs7Ozs7QUU1RVQ7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOztBQUVULFNDTGdCNEo7O0FET2hCLFVBQVMsZ0JBQWdCLFVBQVUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxVQUFVOztBQ1B6RyxVQUFTQSxrQkFBa0I7R0FDaEM7O0dBRUEsSUFBSWhNLFlBQVk7S0FDZGlNLFVBQVU7S0FDVjVLLGFBQWE7S0FDYjZKLE9BQU87T0FDSGdCLGNBQWM7O0tBRWxCbk0sWUFBWW9NO0tBQ1o3SyxjQUFjO0tBQ2Q4SyxrQkFBa0I7OztHQUdwQixPQUFPcE07OztBRFlULEtDVE1tTSxtQkFDSiwwQkFBYXhNLFFBQVE7R0FDbkI7Ozs7R0FEbUI7O0dBSW5CLEtBQUswTSxlQUFlMU0sT0FBTyxLQUFLdU0sY0FBY0k7Ozs7Ozs7O0FDdEJsRDs7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOzs7QUFHVCxLQUFJLGVBQWUsWUFBWSxFQUFFLFNBQVMsaUJBQWlCLFFBQVEsT0FBTyxFQUFFLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSyxFQUFFLElBQUksYUFBYSxNQUFNLElBQUksV0FBVyxhQUFhLFdBQVcsY0FBYyxPQUFPLFdBQVcsZUFBZSxNQUFNLElBQUksV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE9BQU8sZUFBZSxRQUFRLFdBQVcsS0FBSyxpQkFBaUIsT0FBTyxVQUFVLGFBQWEsWUFBWSxhQUFhLEVBQUUsSUFBSSxZQUFZLGlCQUFpQixZQUFZLFdBQVcsYUFBYSxJQUFJLGFBQWEsaUJBQWlCLGFBQWEsY0FBYyxPQUFPOztBQUVoaUIsU0NSZ0JDOztBRFVoQixVQUFTLGdCQUFnQixVQUFVLGFBQWEsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLGNBQWMsRUFBRSxNQUFNLElBQUksVUFBVTs7QUNWekcsVUFBU0Esa0JBQWtCN00sVUFBVTtHQUMxQzs7R0FFQSxJQUFJTSxZQUFZO0tBQ2RpTSxVQUFVO0tBQ1ZmLE9BQU87T0FDSHNCLGFBQWE7O0tBRWpCQyxVQUFVO0tBQ1Z4QixNQUFNeUI7S0FDTjNNLFlBQVk0TTtLQUNackwsY0FBYzs7O0dBR2hCLE9BQU90Qjs7R0FFUCxTQUFTME0sU0FBU3hCLE9BQU8wQixJQUFJQyxNQUFNOUssSUFBSTtLQUNyQyxJQUFJK0s7S0FDSixJQUFJQyxTQUFTck4sU0FBU2tOLEdBQUcsSUFBSTtPQUMzQkksV0FBVztPQUNYQyxhQUFhO09BQ2JDLFlBQVk7T0FDWkMsTUFBTTtPQUNOQyxTQUFTOzs7S0FHWFIsR0FBR1MsU0FBUzs7S0FFWjlOLFFBQVErTixRQUFRcEMsTUFBTXNCLGFBQWEsVUFBQ3BJLE9BQVU7T0FDNUMySSxPQUFPckgsS0FBS3RCLE9BQU9tSixRQUFRQzs7O0tBRzdCVixVQUFVNUIsTUFBTU8sT0FBTyxtQkFBbUIsWUFBTTtPQUM5Q2xNLFFBQVErTixRQUFRdkwsR0FBRzBMLGNBQWMsVUFBQ0MsYUFBZ0I7U0FDaERYLE9BQU9ySCxLQUFLZ0ksWUFBWTdLLE9BQU8wSyxRQUFRQzs7OztLQUkzQ3RDLE1BQU15QyxJQUFJLFlBQVksWUFBTTtPQUMxQmI7Ozs7Ozs4RERpQitCO0dDVm5DLDRCQUFhckwsTUFBTW1NLG1CQUFtQjtLQUNwQzs7S0FEb0M7O0tBR3BDLEtBQUtuTSxPQUFPQTtLQUNaLEtBQUtnTSxlQUFlOztLQUVwQixLQUFLSSxTQUFTRDs7O0dEZ0JoQixhQUFhLG9CQUFvQixDQUFDO0tBQ2hDLEtBQUs7S0FDTCxPQUFPLFNBQVMsU0NmVEEsbUJBQW1CO09BQUE7O09BQzFCLE9BQU8sS0FBS0UsZ0JBQWdCRixtQkFBbUIzTCxLQUFLLFlBQU07U0FDeEQsTUFBS1IsS0FBS3NNLEtBQUs7OztNRG9CaEI7S0FDRCxLQUFLO0tBQ0wsT0FBTyxTQUFTLGdCQ2xCRkgsbUJBQW1CO09BQUE7O09BQ2pDLE9BQU9BLGtCQUFrQkUsZ0JBQWdCLElBQUk3TCxLQUFLLFVBQUNHLE1BQVM7U0FDMUQsT0FBS3FMLGVBQWVyTDs7U0FFcEIsT0FBTyxPQUFLcUw7Ozs7O0dEeUJoQixPQUFPIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVmZTg0N2NhODU4NTlmOTE3MWE1IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2luZGV4ID0gcmVxdWlyZSgnLi9pbmRleC5jb25maWcnKTtcblxudmFyIF9pbmRleDIgPSByZXF1aXJlKCcuL2luZGV4LnJvdXRlJyk7XG5cbnZhciBfaW5kZXgzID0gcmVxdWlyZSgnLi9pbmRleC5ydW4nKTtcblxudmFyIF9tYWluID0gcmVxdWlyZSgnLi9tYWluL21haW4uY29udHJvbGxlcicpO1xuXG52YXIgX2F1dGggPSByZXF1aXJlKCcuL2F1dGgvYXV0aC5jb250cm9sbGVyJyk7XG5cbnZhciBfcGFnZSA9IHJlcXVpcmUoJy4vcGFnZXMvcGFnZS5jb250cm9sbGVyJyk7XG5cbnZhciBfZXZlbnQgPSByZXF1aXJlKCcuL3BhZ2VzL2V2ZW50LmNvbnRyb2xsZXInKTtcblxudmFyIF9wcm9maWxlID0gcmVxdWlyZSgnLi9wcm9maWxlL3Byb2ZpbGUuY29udHJvbGxlcicpO1xuXG52YXIgX3Byb2ZpbGVVcGxvYWRlciA9IHJlcXVpcmUoJy4vcHJvZmlsZS9wcm9maWxlLXVwbG9hZGVyLmNvbnRyb2xsZXInKTtcblxudmFyIF9hcHBseSA9IHJlcXVpcmUoJy4vYXBwbHkvYXBwbHkuY29udHJvbGxlcicpO1xuXG52YXIgX25hdmJhciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbnRyb2xsZXInKTtcblxudmFyIF9jb21wYXJlVG9EaXJlY3RpdmUgPSByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvY29tcGFyZVRvLmRpcmVjdGl2ZS5qcycpO1xuXG52YXIgX2dpdGh1YkNvbnRyaWJ1dG9yID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZScpO1xuXG52YXIgX3dlYkRldlRlYyA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZScpO1xuXG52YXIgX25hdmJhcjIgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZScpO1xuXG52YXIgX21hbGFya2V5ID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlJyk7XG5cbi8qIGdsb2JhbCBtYWxhcmtleTpmYWxzZSwgbW9tZW50OmZhbHNlICovXG5cbmFuZ3VsYXIubW9kdWxlKCdwcm9qZWN0MScsIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAnbmdNZXNzYWdlcycsICduZ0FyaWEnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICd0b2FzdHInLCAnc2F0ZWxsaXplcicsICduZ0ZpbGVVcGxvYWQnXSkuY29uc3RhbnQoJ0FQSV9VUkwnLCBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9cIikuY29uc3RhbnQoJ21hbGFya2V5JywgbWFsYXJrZXkpLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpLmNvbmZpZyhfaW5kZXguY29uZmlnKS5jb25maWcoX2luZGV4Mi5yb3V0ZXJDb25maWcpLnJ1bihfaW5kZXgzLnJ1bkJsb2NrKS5zZXJ2aWNlKCdnaXRodWJDb250cmlidXRvcicsIF9naXRodWJDb250cmlidXRvci5HaXRodWJDb250cmlidXRvclNlcnZpY2UpLnNlcnZpY2UoJ3dlYkRldlRlYycsIF93ZWJEZXZUZWMuV2ViRGV2VGVjU2VydmljZSkuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBfbWFpbi5NYWluQ29udHJvbGxlcikuY29udHJvbGxlcignQXV0aENvbnRyb2xsZXInLCBfYXV0aC5BdXRoQ29udHJvbGxlcikuY29udHJvbGxlcignUGFnZUNvbnRyb2xsZXInLCBfcGFnZS5QYWdlQ29udHJvbGxlcikuY29udHJvbGxlcignRXZlbnRDb250cm9sbGVyJywgX2V2ZW50LkV2ZW50Q29udHJvbGxlcikuY29udHJvbGxlcignUHJvZmlsZUNvbnRyb2xsZXInLCBfcHJvZmlsZS5Qcm9maWxlQ29udHJvbGxlcikuY29udHJvbGxlcignQXBwbHlDb250cm9sbGVyJywgX2FwcGx5LkFwcGx5Q29udHJvbGxlcikuY29udHJvbGxlcignTmF2YmFyQ29udHJvbGxlcicsIF9uYXZiYXIuTmF2YmFyQ29udHJvbGxlcikuY29udHJvbGxlcignUHJvZmlsZVVwbG9hZGVyQ29udHJvbGxlcicsIF9wcm9maWxlVXBsb2FkZXIuUHJvZmlsZVVwbG9hZGVyQ29udHJvbGxlcikuZGlyZWN0aXZlKCdhY21lTmF2YmFyJywgX25hdmJhcjIuTmF2YmFyRGlyZWN0aXZlKS5kaXJlY3RpdmUoJ2FjbWVNYWxhcmtleScsIF9tYWxhcmtleS5NYWxhcmtleURpcmVjdGl2ZSkuZGlyZWN0aXZlKCdjb21wYXJlVG8nLCBfY29tcGFyZVRvRGlyZWN0aXZlLkNvbXBhcmVUb0RpcmVjdGl2ZSkuZmlsdGVyKCdyZW5kZXJIVE1MQ29ycmVjdGx5JywgZnVuY3Rpb24gKCRzY2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmdUb1BhcnNlKSB7XG4gICAgcmV0dXJuICRzY2UudHJ1c3RBc0h0bWwoc3RyaW5nVG9QYXJzZSk7XG4gIH07XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qcyIsIi8qIGdsb2JhbCBtYWxhcmtleTpmYWxzZSwgbW9tZW50OmZhbHNlICovXG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vaW5kZXguY29uZmlnJztcbmltcG9ydCB7IHJvdXRlckNvbmZpZyB9IGZyb20gJy4vaW5kZXgucm91dGUnO1xuaW1wb3J0IHsgcnVuQmxvY2sgfSBmcm9tICcuL2luZGV4LnJ1bic7XG5pbXBvcnQgeyBNYWluQ29udHJvbGxlciB9IGZyb20gJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQXV0aENvbnRyb2xsZXIgfSBmcm9tICcuL2F1dGgvYXV0aC5jb250cm9sbGVyJztcbmltcG9ydCB7IFBhZ2VDb250cm9sbGVyIH0gZnJvbSAnLi9wYWdlcy9wYWdlLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgRXZlbnRDb250cm9sbGVyIH0gZnJvbSAnLi9wYWdlcy9ldmVudC5jb250cm9sbGVyJztcbmltcG9ydCB7IFByb2ZpbGVDb250cm9sbGVyIH0gZnJvbSAnLi9wcm9maWxlL3Byb2ZpbGUuY29udHJvbGxlcic7XG5pbXBvcnQgeyBQcm9maWxlVXBsb2FkZXJDb250cm9sbGVyIH0gZnJvbSAnLi9wcm9maWxlL3Byb2ZpbGUtdXBsb2FkZXIuY29udHJvbGxlcic7XG5pbXBvcnQgeyBBcHBseUNvbnRyb2xsZXIgfSBmcm9tICcuL2FwcGx5L2FwcGx5LmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgTmF2YmFyQ29udHJvbGxlciB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQ29tcGFyZVRvRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbXBhcmVUby5kaXJlY3RpdmUuanMnO1xuaW1wb3J0IHsgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBXZWJEZXZUZWNTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlJztcbmltcG9ydCB7IE5hdmJhckRpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1hbGFya2V5RGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlJztcblxuYW5ndWxhci5tb2R1bGUoJ3Byb2plY3QxJywgWyduZ0FuaW1hdGUnLCAnbmdDb29raWVzJywgJ25nVG91Y2gnLCAnbmdTYW5pdGl6ZScsICduZ01lc3NhZ2VzJywgJ25nQXJpYScsICd1aS5yb3V0ZXInLCAndWkuYm9vdHN0cmFwJywgJ3RvYXN0cicsICdzYXRlbGxpemVyJywgJ25nRmlsZVVwbG9hZCddKVxuICAuY29uc3RhbnQoJ0FQSV9VUkwnLCBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9cIilcbiAgLmNvbnN0YW50KCdtYWxhcmtleScsIG1hbGFya2V5KVxuICAuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudClcbiAgLmNvbmZpZyhjb25maWcpXG4gIC5jb25maWcocm91dGVyQ29uZmlnKVxuICAucnVuKHJ1bkJsb2NrKVxuICAuc2VydmljZSgnZ2l0aHViQ29udHJpYnV0b3InLCBHaXRodWJDb250cmlidXRvclNlcnZpY2UpXG4gIC5zZXJ2aWNlKCd3ZWJEZXZUZWMnLCBXZWJEZXZUZWNTZXJ2aWNlKVxuICAuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBNYWluQ29udHJvbGxlcilcbiAgLmNvbnRyb2xsZXIoJ0F1dGhDb250cm9sbGVyJywgQXV0aENvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdQYWdlQ29udHJvbGxlcicsIFBhZ2VDb250cm9sbGVyKVxuICAuY29udHJvbGxlcignRXZlbnRDb250cm9sbGVyJywgRXZlbnRDb250cm9sbGVyKVxuICAuY29udHJvbGxlcignUHJvZmlsZUNvbnRyb2xsZXInLCBQcm9maWxlQ29udHJvbGxlcilcbiAgLmNvbnRyb2xsZXIoJ0FwcGx5Q29udHJvbGxlcicsIEFwcGx5Q29udHJvbGxlcilcbiAgLmNvbnRyb2xsZXIoJ05hdmJhckNvbnRyb2xsZXInLCBOYXZiYXJDb250cm9sbGVyKVxuICAuY29udHJvbGxlcignUHJvZmlsZVVwbG9hZGVyQ29udHJvbGxlcicsIFByb2ZpbGVVcGxvYWRlckNvbnRyb2xsZXIpXG4gIC5kaXJlY3RpdmUoJ2FjbWVOYXZiYXInLCBOYXZiYXJEaXJlY3RpdmUpXG4gIC5kaXJlY3RpdmUoJ2FjbWVNYWxhcmtleScsIE1hbGFya2V5RGlyZWN0aXZlKVxuICAuZGlyZWN0aXZlKCdjb21wYXJlVG8nLCBDb21wYXJlVG9EaXJlY3RpdmUpXG4gIC5maWx0ZXIoJ3JlbmRlckhUTUxDb3JyZWN0bHknLCBmdW5jdGlvbigkc2NlKXtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nVG9QYXJzZSlcbiAgICB7XG4gICAgICByZXR1cm4gJHNjZS50cnVzdEFzSHRtbChzdHJpbmdUb1BhcnNlKTtcbiAgICB9XG4gIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNvbmZpZyA9IGNvbmZpZztcbmZ1bmN0aW9uIGNvbmZpZygkbG9nUHJvdmlkZXIsIHRvYXN0ckNvbmZpZywgJGF1dGhQcm92aWRlciwgQVBJX1VSTCkge1xuICAnbmdJbmplY3QnO1xuICAvLyBFbmFibGUgbG9nXG5cbiAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcblxuICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiAgdG9hc3RyQ29uZmlnLmFsbG93SHRtbCA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gMzAwMDtcbiAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcbiAgdG9hc3RyQ29uZmlnLnByZXZlbnREdXBsaWNhdGVzID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcblxuICAkYXV0aFByb3ZpZGVyLmxvZ2luVXJsID0gQVBJX1VSTCArICdhdXRoL2xvZ2luJztcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsImV4cG9ydCBmdW5jdGlvbiBjb25maWcgKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnLCAkYXV0aFByb3ZpZGVyLCBBUElfVVJMKSB7XG4gICduZ0luamVjdCc7XG4gIC8vIEVuYWJsZSBsb2dcbiAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcblxuICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiAgdG9hc3RyQ29uZmlnLmFsbG93SHRtbCA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gMzAwMDtcbiAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcbiAgdG9hc3RyQ29uZmlnLnByZXZlbnREdXBsaWNhdGVzID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcblxuICAkYXV0aFByb3ZpZGVyLmxvZ2luVXJsID0gQVBJX1VSTCArICdhdXRoL2xvZ2luJztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXguY29uZmlnLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yb3V0ZXJDb25maWcgPSByb3V0ZXJDb25maWc7XG5mdW5jdGlvbiByb3V0ZXJDb25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuXHQnbmdJbmplY3QnO1xuXG5cdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdob21lJywge1xuXHRcdHVybDogJy8nLFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbWFpbi5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ21haW4nXG5cdH0pLnN0YXRlKCdsb2dpbicsIHtcblx0XHR1cmw6ICcvbG9naW4nLFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL2F1dGgvYXV0aC5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnQXV0aENvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ2F1dGgnXG5cdH0pLnN0YXRlKCdyZWdpc3RyYXRpb24nLCB7XG5cdFx0dXJsOiAnL3JlZ2lzdHJhdGlvbicsXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvcGFnZXMvcmVnaXN0cmF0aW9uLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdQYWdlQ29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAncGFnZSdcblx0fSkuc3RhdGUoJ3JlZ2lzdHJhdGlvbi1jb25maXJtYXRpb24nLCB7XG5cdFx0dXJsOiAnL3JlZ2lzdHJhdGlvbi1jb25maXJtYXRpb24nLFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL3BhZ2VzL3JlZ2lzdHJhdGlvbi1zdWNjZXNzLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdQYWdlQ29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAncGFnZSdcblx0fSkuc3RhdGUoJ3JlZ2lzdHJhdGlvbi1wcm9jZXNzJywge1xuXHRcdHVybDogJy9yZWdpc3RyYXRpb24tcHJvY2VzcycsXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvcGFnZXMvcmVnaXN0cmF0aW9uLXByb2Nlc3MuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogJ1BhZ2VDb250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdwYWdlJ1xuXHR9KS5zdGF0ZSgnYWJvdXQnLCB7XG5cdFx0dXJsOiAnL2Fib3V0Jyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9wYWdlcy9hYm91dHVzLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdQYWdlQ29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAnYWJvdXQnXG5cdH0pLnN0YXRlKCdwcm9maWxlJywge1xuXHRcdHVybDogJy9wcm9maWxlJyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9wcm9maWxlL3Byb2ZpbGUuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogJ1Byb2ZpbGVDb250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdwcm9maWxlJ1xuXHR9KS5zdGF0ZSgncHJvZmlsZS1waWN0dXJlJywge1xuXHRcdHVybDogJy9wcm9maWxlLXBpY3R1cmUnLFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL3Byb2ZpbGUvcHJvZmlsZS1waWN0dXJlLWVkaXQuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogJ1Byb2ZpbGVDb250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdwcm9maWxlVXBsb2FkZXInXG5cdH0pLnN0YXRlKCdhcHBseScsIHtcblx0XHR1cmw6ICcvYXBwbHknLFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL2FwcGx5L2FwcGx5Lmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdBcHBseUNvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ2FwcGx5J1xuXHR9KS5zdGF0ZSgnYXBwbHktc3VibWl0dGVkJywge1xuXHRcdHVybDogJy9hcHBseS1zdWJtaXR0ZWQnLFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL2FwcGx5L2FwcGx5LXN1Ym1pdHRlZC5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnQXBwbHlDb250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdhcHBseSdcblx0fSkuc3RhdGUoJ2FwcGx5LXJlc2VuZCcsIHtcblx0XHR1cmw6ICcvYXBwbHktcmVzZW5kJyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9hcHBseS9hcHBseS1yZXNlbmQuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogJ0FwcGx5Q29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAnYXBwbHknXG5cdH0pLnN0YXRlKCdhcHBseS11cGRhdGVkJywge1xuXHRcdHVybDogJy9hcHBseS11cGRhdGVkJyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9hcHBseS9hcHBseS11cGRhdGVkLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdBcHBseUNvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ2FwcGx5J1xuXHR9KS5zdGF0ZSgnZXZlbnRzJywge1xuXHRcdHVybDogJy9ldmVudHMnLFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL3BhZ2VzL2V2ZW50cy5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnRXZlbnRDb250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdldmVudCdcblx0fSkuc3RhdGUoJ2V2ZW50LXNlbGVjdGVkJywge1xuXHRcdHVybDogJy9ldmVudHMvOnNsdWcnLFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL3BhZ2VzL2V2ZW50cy1zZWxlY3RlZC5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnRXZlbnRDb250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdldmVudCdcblx0fSk7XG5cblx0LyokdXJsUm91dGVyUHJvdmlkZXJcbiAgICAgICAgIC53aGVuKFwiL2V2ZW50cy86c2x1Z1wiLCB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9wYWdlcy9ldmVudHMtc2VsZWN0ZWQuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBcIkV2ZW50Q29udHJvbGxlclwiLFxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAnZXZlbnQnXG4gICAgICAgIH0pOyovXG5cblx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJleHBvcnQgZnVuY3Rpb24gcm91dGVyQ29uZmlnICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG5cdCduZ0luamVjdCc7XG5cdCRzdGF0ZVByb3ZpZGVyXG5cdC5zdGF0ZSgnaG9tZScsIHtcblx0XHR1cmw6ICcvJyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL21haW4uaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogJ01haW5Db250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdtYWluJ1xuXHR9KVxuXHQuc3RhdGUoJ2xvZ2luJywge1xuXHRcdHVybDogJy9sb2dpbicsXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvYXV0aC9hdXRoLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdBdXRoQ29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAnYXV0aCdcblx0fSlcblx0LnN0YXRlKCdyZWdpc3RyYXRpb24nLCB7XG5cdFx0dXJsOiAnL3JlZ2lzdHJhdGlvbicsXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvcGFnZXMvcmVnaXN0cmF0aW9uLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdQYWdlQ29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAncGFnZSdcblx0fSlcblx0LnN0YXRlKCdyZWdpc3RyYXRpb24tY29uZmlybWF0aW9uJywge1xuXHRcdHVybDogJy9yZWdpc3RyYXRpb24tY29uZmlybWF0aW9uJyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9wYWdlcy9yZWdpc3RyYXRpb24tc3VjY2Vzcy5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnUGFnZUNvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ3BhZ2UnXG5cdH0pXG5cdC5zdGF0ZSgncmVnaXN0cmF0aW9uLXByb2Nlc3MnLCB7XG5cdFx0dXJsOiAnL3JlZ2lzdHJhdGlvbi1wcm9jZXNzJyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9wYWdlcy9yZWdpc3RyYXRpb24tcHJvY2Vzcy5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnUGFnZUNvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ3BhZ2UnXG5cdH0pXG5cdC5zdGF0ZSgnYWJvdXQnLCB7XG5cdFx0dXJsOiAnL2Fib3V0Jyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9wYWdlcy9hYm91dHVzLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdQYWdlQ29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAnYWJvdXQnXG5cdH0pXG5cdC5zdGF0ZSgncHJvZmlsZScsIHtcblx0XHR1cmw6ICcvcHJvZmlsZScsXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvcHJvZmlsZS9wcm9maWxlLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdQcm9maWxlQ29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAncHJvZmlsZSdcblx0fSlcblx0LnN0YXRlKCdwcm9maWxlLXBpY3R1cmUnLCB7XG5cdFx0dXJsOiAnL3Byb2ZpbGUtcGljdHVyZScsXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvcHJvZmlsZS9wcm9maWxlLXBpY3R1cmUtZWRpdC5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnUHJvZmlsZUNvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ3Byb2ZpbGVVcGxvYWRlcidcblx0fSlcblx0LnN0YXRlKCdhcHBseScsIHtcblx0XHR1cmw6ICcvYXBwbHknLFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL2FwcGx5L2FwcGx5Lmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdBcHBseUNvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ2FwcGx5J1xuXHR9KVxuXHQuc3RhdGUoJ2FwcGx5LXN1Ym1pdHRlZCcsIHtcblx0XHR1cmw6ICcvYXBwbHktc3VibWl0dGVkJyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9hcHBseS9hcHBseS1zdWJtaXR0ZWQuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogJ0FwcGx5Q29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAnYXBwbHknXG5cdH0pXG5cdC5zdGF0ZSgnYXBwbHktcmVzZW5kJywge1xuXHRcdHVybDogJy9hcHBseS1yZXNlbmQnLFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL2FwcGx5L2FwcGx5LXJlc2VuZC5odG1sJyxcblx0XHRjb250cm9sbGVyOiAnQXBwbHlDb250cm9sbGVyJyxcblx0XHRjb250cm9sbGVyQXM6ICdhcHBseSdcblx0fSlcblx0LnN0YXRlKCdhcHBseS11cGRhdGVkJywge1xuXHRcdHVybDogJy9hcHBseS11cGRhdGVkJyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9hcHBseS9hcHBseS11cGRhdGVkLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdBcHBseUNvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ2FwcGx5J1xuXHR9KVxuXHQuc3RhdGUoJ2V2ZW50cycsIHtcblx0XHR1cmw6ICcvZXZlbnRzJyxcblx0XHR0ZW1wbGF0ZVVybDogJ2FwcC9wYWdlcy9ldmVudHMuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogJ0V2ZW50Q29udHJvbGxlcicsXG5cdFx0Y29udHJvbGxlckFzOiAnZXZlbnQnXG5cdH0pXG5cdC5zdGF0ZSgnZXZlbnQtc2VsZWN0ZWQnLCB7XG5cdFx0dXJsOiAnL2V2ZW50cy86c2x1ZycsXG5cdFx0dGVtcGxhdGVVcmw6ICdhcHAvcGFnZXMvZXZlbnRzLXNlbGVjdGVkLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6ICdFdmVudENvbnRyb2xsZXInLFxuXHRcdGNvbnRyb2xsZXJBczogJ2V2ZW50J1xuXHR9KTtcblxuXHQvKiR1cmxSb3V0ZXJQcm92aWRlclxuICAgICAgICAgLndoZW4oXCIvZXZlbnRzLzpzbHVnXCIsIHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3BhZ2VzL2V2ZW50cy1zZWxlY3RlZC5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IFwiRXZlbnRDb250cm9sbGVyXCIsXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICdldmVudCdcbiAgICAgICAgfSk7Ki9cblxuXHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ydW5CbG9jayA9IHJ1bkJsb2NrO1xuZnVuY3Rpb24gcnVuQmxvY2soJGxvZykge1xuICAnbmdJbmplY3QnO1xuXG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrICgkbG9nKSB7XG4gICduZ0luamVjdCc7XG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5ydW4uanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBNYWluQ29udHJvbGxlciA9IGV4cG9ydHMuTWFpbkNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIE1haW5Db250cm9sbGVyKCRodHRwKSB7XG5cdFx0J25nSW5qZWN0JztcblxuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYWluQ29udHJvbGxlcik7XG5cblx0XHR0aGlzLiRodHRwID0gJGh0dHA7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoTWFpbkNvbnRyb2xsZXIsIFt7XG5cdFx0a2V5OiAncG9zdE1lc3NhZ2UnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBwb3N0TWVzc2FnZSgpIHtcblx0XHRcdHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2VjMi01NC0xODYtNS0xMjYudXMtd2VzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo1MDAwL2FwaS9tZXNzYWdlJywgeyBtc2c6IHRoaXMubWVzc2FnZSA/IHRoaXMubWVzc2FnZSA6IFwiXCIgfSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZ2V0TWVzc2FnZXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRNZXNzYWdlcygpIHtcblx0XHRcdHZhciB2bSA9IHRoaXM7XG5cdFx0XHR0aGlzLiRodHRwLmdldCgnaHR0cDovL2VjMi01NC0xODYtNS0xMjYudXMtd2VzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo1MDAwL2FwaS9tZXNzYWdlJykudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHRcdHZtLm1lc3NhZ2VzID0gcmVzdWx0LmRhdGE7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gTWFpbkNvbnRyb2xsZXI7XG59KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBNYWluQ29udHJvbGxlciB7XG5cdGNvbnN0cnVjdG9yICgkaHR0cCkge1xuXHRcdCduZ0luamVjdCc7XG5cdFx0dGhpcy4kaHR0cCA9ICRodHRwO1xuXHR9XG5cdHBvc3RNZXNzYWdlKCl7XG5cdFx0dGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vZWMyLTU0LTE4Ni01LTEyNi51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjUwMDAvYXBpL21lc3NhZ2UnLHttc2c6IHRoaXMubWVzc2FnZSA/IHRoaXMubWVzc2FnZSA6IFwiXCJ9KTtcblx0fVxuXHRnZXRNZXNzYWdlcygpe1xuXHRcdHZhciB2bSA9IHRoaXM7XG5cdFx0dGhpcy4kaHR0cC5nZXQoJ2h0dHA6Ly9lYzItNTQtMTg2LTUtMTI2LnVzLXdlc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206NTAwMC9hcGkvbWVzc2FnZScpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcblx0XHRcdHZtLm1lc3NhZ2VzID0gcmVzdWx0LmRhdGE7XG5cdFx0fSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBBdXRoQ29udHJvbGxlciA9IGV4cG9ydHMuQXV0aENvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIEF1dGhDb250cm9sbGVyKCRhdXRoLCAkbG9jYXRpb24pIHtcblx0XHQnbmdJbmplY3QnO1xuXG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1dGhDb250cm9sbGVyKTtcblxuXHRcdHRoaXMuJGF1dGggPSAkYXV0aDtcblx0XHR0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcblx0XHR0aGlzLmludmFsaWRBY2NvdW50ID0gZmFsc2U7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoQXV0aENvbnRyb2xsZXIsIFt7XG5cdFx0a2V5OiAnbG9naW4nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBsb2dpbigpIHtcblx0XHRcdGlmICh0aGlzLmVtYWlsID09ICcnKSB7XG5cdFx0XHRcdGFsZXJ0KFwiRW50ZXIgZW1haWwgYWRkcmVzc1wiKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMucGFzc3dvcmQgPT0gJycpIHtcblx0XHRcdFx0YWxlcnQoXCJFbnRlciBwYXNzd29yZFwiKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgdm0gPSB0aGlzO1xuXHRcdFx0JChcIi50eHQtZW1haWwsIC50eHQtcGFzc3dvcmRcIikudmFsKFwiXCIpO1xuXHRcdFx0dGhpcy4kYXV0aC5sb2dpbih0aGlzLmxvZ2luLnVzZXIpLnRoZW4oZnVuY3Rpb24gKHRva2VuKSB7XG5cdFx0XHRcdHZtLiRhdXRoLnNldFRva2VuKHRva2VuKTtcblx0XHRcdFx0dm0ucmVkaXJlY3RIb21lcGFnZSgpO1xuXHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cblx0XHRcdFx0dm0uaW52YWxpZEFjY291bnQgPSB0cnVlO1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3Jlc2V0QWNjb3VudFZhbGlkYXRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZXNldEFjY291bnRWYWxpZGF0aW9uKCkge1xuXHRcdFx0dGhpcy5pbnZhbGlkQWNjb3VudCA9IGZhbHNlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlZGlyZWN0SG9tZXBhZ2UnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZWRpcmVjdEhvbWVwYWdlKCkge1xuXHRcdFx0dGhpcy4kbG9jYXRpb24ucGF0aCgnLycpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBBdXRoQ29udHJvbGxlcjtcbn0oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2F1dGgvYXV0aC5jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIEF1dGhDb250cm9sbGVye1xyXG5cdGNvbnN0cnVjdG9yICgkYXV0aCwgJGxvY2F0aW9uKSB7XHJcblx0XHQnbmdJbmplY3QnO1xyXG5cdFx0dGhpcy4kYXV0aCA9ICRhdXRoO1xyXG5cdFx0dGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XHJcblx0XHR0aGlzLmludmFsaWRBY2NvdW50ID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRsb2dpbigpe1xyXG5cdFx0aWYgKHRoaXMuZW1haWwgPT0gJycpIHtcclxuXHRcdFx0YWxlcnQoXCJFbnRlciBlbWFpbCBhZGRyZXNzXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5wYXNzd29yZCA9PSAnJykge1xyXG5cdFx0XHRhbGVydChcIkVudGVyIHBhc3N3b3JkXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHZtID0gdGhpcztcclxuXHRcdCQoXCIudHh0LWVtYWlsLCAudHh0LXBhc3N3b3JkXCIpLnZhbChcIlwiKTtcclxuXHRcdHRoaXMuJGF1dGgubG9naW4odGhpcy5sb2dpbi51c2VyKS50aGVuKGZ1bmN0aW9uKHRva2VuKXtcclxuXHRcdFx0dm0uJGF1dGguc2V0VG9rZW4odG9rZW4pO1xyXG5cdFx0XHR2bS5yZWRpcmVjdEhvbWVwYWdlKCk7XHJcblx0XHRcclxuXHRcdH0pLmNhdGNoKGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuXHJcblx0XHRcdHZtLmludmFsaWRBY2NvdW50ID0gdHJ1ZTtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblx0XHJcblx0XHR9KTtcclxuXHR9XHJcblx0cmVzZXRBY2NvdW50VmFsaWRhdGlvbigpe1xyXG5cdFx0dGhpcy5pbnZhbGlkQWNjb3VudCA9IGZhbHNlO1xyXG5cdH1cclxuXHRyZWRpcmVjdEhvbWVwYWdlKCkge1xyXG5cdFx0dGhpcy4kbG9jYXRpb24ucGF0aCgnLycpO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXV0aC9hdXRoLmNvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBQYWdlQ29udHJvbGxlciA9IGV4cG9ydHMuUGFnZUNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIFBhZ2VDb250cm9sbGVyKCRodHRwLCAkbG9jYXRpb24sICRsb2cpIHtcblx0XHQnbmdJbmplY3QnO1xuXG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhZ2VDb250cm9sbGVyKTtcblxuXHRcdHRoaXMuJGh0dHAgPSAkaHR0cDtcblx0XHR0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cdFx0dGhpcy4kbG9nID0gJGxvZztcblxuXHRcdHRoaXMuZmllbGRzZXQgPSBmYWxzZTtcblxuXHRcdHZhciB2ZXJpZmljYXRpb25fY29kZV9oZXJlID0gdGhpcy5nZXRQYXJhbWV0ZXJCeU5hbWUoJ2NvbmZpcm1hdGlvbi1jb2RlJywgJGxvY2F0aW9uLmFic1VybCgpKTtcblxuXHRcdGlmICh2ZXJpZmljYXRpb25fY29kZV9oZXJlKSB7XG5cdFx0XHR0aGlzLnZlcmlmeV9hY2NvdW50KHZlcmlmaWNhdGlvbl9jb2RlX2hlcmUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnRlc3RHZW5lcmF0b3IoKTtcblx0XHR9XG5cblx0XHR0aGlzLmdldEVzdGFibGlzaG1lbnQoKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhQYWdlQ29udHJvbGxlciwgW3tcblx0XHRrZXk6ICdnZXRQYXJhbWV0ZXJCeU5hbWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSwgdXJsKSB7XG5cdFx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlxcXFwkJlwiKTtcblx0XHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbPyZdXCIgKyBuYW1lICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKSxcblx0XHRcdCAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xuXHRcdFx0aWYgKCFyZXN1bHRzKSByZXR1cm4gbnVsbDtcblx0XHRcdGlmICghcmVzdWx0c1syXSkgcmV0dXJuICcnO1xuXHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3Bvc3RNZXNzYWdlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcG9zdE1lc3NhZ2UoKSB7XG5cdFx0XHR0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvbWVzc2FnZScsIHsgbXNnOiB0aGlzLm1lc3NhZ2UgPyB0aGlzLm1lc3NhZ2UgOiBcIlwiIH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2dldE1lc3NhZ2VzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0TWVzc2FnZXMoKSB7XG5cdFx0XHR2YXIgdm0gPSB0aGlzO1xuXHRcdFx0dGhpcy4kaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvZXN0YWJsaXNobWVudHMnKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRcdFx0dm0ubWVzc2FnZXMgPSByZXN1bHQuZGF0YTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2dldEVzdGFibGlzaG1lbnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRFc3RhYmxpc2htZW50KCkge1xuXHRcdFx0dmFyIHZtID0gdGhpcztcblx0XHRcdHRoaXMuJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2VzdGFibGlzaG1lbnRzJykudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHRcdHZtLm1lc3NhZ2VzID0gcmVzdWx0LmRhdGE7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdwcm9wZXJWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHByb3BlclZhbHVlKHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHZhbHVlICE9ICd1bmRlZmluZWQnID8gdmFsdWUgOiAnJztcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICd0ZXN0R2VuZXJhdG9yJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdGVzdEdlbmVyYXRvcigpIHtcblx0XHRcdC8qdGhpcy51c2VybmFtZSA9IFwidGVzdFwiO1xyXG4gICB0aGlzLnBhc3N3b3JkID0gXCJ0ZXN0XCI7XHJcbiAgIHRoaXMucGFzc3dvcmRfY29uZmlybSA9IFwidGVzdFwiO1xyXG4gICBcdFx0dGhpcy5maXJzdG5hbWUgPSBcInRlc3RcIjtcclxuICAgdGhpcy5sYXN0bmFtZSA9IFwidGVzdFwiO1xyXG4gICB0aGlzLmVtYWlsID0gXCJ0ZXN0dXNlckAxMjcuMC4wLjFcIjtcclxuICAgdGhpcy5uaWNrbmFtZSA9IFwidGVzdFwiO1xyXG4gICB0aGlzLmdlbmRlciA9IFwibWFsZVwiO1xyXG4gICB0aGlzLmJpcnRoZGF5ID0gXCJ0ZXN0XCI7XHJcbiAgIHRoaXMuc3RhdHVzID0gXCJzaW5nbGVcIjtcclxuICAgdGhpcy5uYXRpb25hbGl0eSA9IFwidGVzdFwiO1xyXG4gICB0aGlzLmNvbnRhY3QgPSBcIjEyMzRcIjtcclxuICAgdGhpcy5hZGRyZXNzID0gXCJ0ZXN0XCI7XHJcbiAgIHRoaXMubm90ZSA9IFwidGVzdFwiO1xyXG4gICBcdFx0dGhpcy5pb2VfbmFtZSA9IFwidGVzdFwiO1xyXG4gICB0aGlzLmlvZV9yZWxhdGlvbiA9IFwidGVzdFwiO1xyXG4gICB0aGlzLmlvZV9hZGRyZXNzID0gXCJ0ZXN0XCI7XHJcbiAgIHRoaXMuaW9lX2NvbnRhY3QgPSBcIjEyMzRcIjtcclxuICAgdGhpcy5pb2VfZXN0YWJsaXNobWVudCA9IFwidGVzdFwiOyovXG5cblx0XHRcdHRoaXMudXNlcm5hbWUgPSBcIm5hXCI7XG5cdFx0XHR0aGlzLnBhc3N3b3JkID0gXCJcIjtcblx0XHRcdHRoaXMucGFzc3dvcmRfY29uZmlybSA9IFwiXCI7XG5cblx0XHRcdHRoaXMuZmlyc3RuYW1lID0gXCJcIjtcblx0XHRcdHRoaXMubGFzdG5hbWUgPSBcIlwiO1xuXHRcdFx0dGhpcy5lbWFpbCA9IFwiXCI7XG5cdFx0XHR0aGlzLm5pY2tuYW1lID0gXCJcIjtcblx0XHRcdHRoaXMuZ2VuZGVyID0gXCJtYWxlXCI7XG5cdFx0XHQvL3RoaXMuYmlydGhkYXkgPSBcIlwiO1xuXHRcdFx0dGhpcy5zdGF0dXMgPSBcInNpbmdsZVwiO1xuXHRcdFx0dGhpcy5uYXRpb25hbGl0eSA9IFwiXCI7XG5cdFx0XHR0aGlzLmNvbnRhY3QgPSBcIlwiO1xuXHRcdFx0dGhpcy5hZGRyZXNzID0gXCJcIjtcblx0XHRcdHRoaXMubm90ZSA9IFwiXCI7XG5cdFx0XHR0aGlzLm1vbnRoID0gXCIwXCI7XG5cdFx0XHR0aGlzLmRheSA9IFwiMFwiO1xuXHRcdFx0dGhpcy55ZWFyID0gXCIwXCI7XG5cblx0XHRcdHRoaXMuaW9lX25hbWUgPSBcIlwiO1xuXHRcdFx0dGhpcy5pb2VfcmVsYXRpb24gPSBcIlwiO1xuXHRcdFx0dGhpcy5pb2VfYWRkcmVzcyA9IFwiXCI7XG5cdFx0XHR0aGlzLmlvZV9jb250YWN0ID0gXCJcIjtcblx0XHRcdHRoaXMuaW9lX2VzdGFibGlzaG1lbnQgPSBcIm4vYVwiO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3N1Ym1pdCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHN1Ym1pdCgpIHtcblx0XHRcdHZhciBkYXRhID0ge1xuXHRcdFx0XHR1c2VybmFtZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLnVzZXJuYW1lKSxcblx0XHRcdFx0cGFzc3dvcmQ6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5wYXNzd29yZCksXG5cdFx0XHRcdHBhc3N3b3JkX2NvbmZpcm06IHRoaXMucHJvcGVyVmFsdWUodGhpcy5wYXNzd29yZF9jb25maXJtKSxcblxuXHRcdFx0XHRmaXJzdG5hbWU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5maXJzdG5hbWUpLFxuXHRcdFx0XHRsYXN0bmFtZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmxhc3RuYW1lKSxcblx0XHRcdFx0ZW1haWw6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5lbWFpbCksXG5cdFx0XHRcdG5pY2tuYW1lOiB0aGlzLnByb3BlclZhbHVlKHRoaXMubmlja25hbWUpLFxuXHRcdFx0XHRnZW5kZXI6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5nZW5kZXIpLFxuXHRcdFx0XHQvL2JpcnRoZGF5IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5iaXJ0aGRheSApLFxuXHRcdFx0XHRiaXJ0aGRheTogdGhpcy5tb250aCArIFwiLVwiICsgdGhpcy5kYXkgKyBcIi1cIiArIHRoaXMueWVhcixcblx0XHRcdFx0c3RhdHVzOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuc3RhdHVzKSxcblx0XHRcdFx0bmF0aW9uYWxpdHk6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5uYXRpb25hbGl0eSksXG5cdFx0XHRcdGNvbnRhY3Q6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5jb250YWN0KSxcblx0XHRcdFx0YWRkcmVzczogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmFkZHJlc3MpLFxuXHRcdFx0XHRub3RlOiB0aGlzLnByb3BlclZhbHVlKHRoaXMubm90ZSksXG5cblx0XHRcdFx0aW9lX25hbWU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5pb2VfbmFtZSksXG5cdFx0XHRcdGlvZV9yZWxhdGlvbjogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmlvZV9yZWxhdGlvbiksXG5cdFx0XHRcdGlvZV9hZGRyZXNzOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaW9lX2FkZHJlc3MpLFxuXHRcdFx0XHRpb2VfY29udGFjdDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmlvZV9jb250YWN0KSxcblx0XHRcdFx0aW9lX2VzdGFibGlzaG1lbnQ6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5pb2VfZXN0YWJsaXNobWVudCksXG5cdFx0XHRcdHR5cGU6IFwiT25saW5lXCIsXG5cdFx0XHRcdGRhdGVfZXhwaXJlZF90ZXh0OiBcIlwiLFxuXHRcdFx0XHRkYXRlX2V4cGlyZWRfbnVtYmVyOiBcIlwiLFxuXHRcdFx0XHRkOiBcIlwiXG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgdmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGVEYXRhKGRhdGEpO1xuXG5cdFx0XHRpZiAoIXZhbGlkYXRpb25bJ3ZhbGlkJ10pIHtcblx0XHRcdFx0YWxlcnQodmFsaWRhdGlvblsnbWVzc2FnZSddKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucG9zdFN1Ym1pdEFwcGxpY2F0aW9uKGRhdGEpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3ZhbGlkYXRlRGF0YScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlRGF0YShkYXRhKSB7XG5cdFx0XHR2YXIgdmFsaWQgPSB0cnVlO1xuXHRcdFx0dmFyIG1lc3NhZ2UgPSBcIlZhbGlkYXRlZCFcIjtcblxuXHRcdFx0aWYgKHRoaXMudXNlcm5hbWUgPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJVc2VybmFtZSBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnBhc3N3b3JkID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiUGFzc3dvcmQgaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wYXNzd29yZF9jb25maXJtID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiUmUtdHlwZSBQYXNzb3dyZFwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZmlyc3RuYW1lID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiRmlyc3RuYW1lIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMubGFzdG5hbWUgPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJMYXN0bmFtZSBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmVtYWlsID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiTWlkZGxlIE5hbWUgaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRoaXMuaXNWYWxpZEVtYWlsQWRkcmVzcyh0aGlzLmVtYWlsKSkge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJJbnZhbGlkIEVtYWlsIEFkZHJlc3NcIjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLm5pY2tuYW1lID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiTmljay1uYW1lIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZ2VuZGVyID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiR2VuZGVyIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0Ly9pZiAodGhpcy5iaXJ0aGRheSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIkJpcnRoZGF5IGlzIGVtcHR5IVwiIH1cblx0XHRcdGlmICh0aGlzLnN0YXR1cyA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIlN0YXR1cyBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLm5hdGlvbmFsaXR5ID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiTmF0aW9uYWxpdHkgaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5jb250YWN0ID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiQ29udGFjdCBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmFkZHJlc3MgPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJBZGRyZXNzIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuaW9lX25hbWUgPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJJT0UgZmllbGQgaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5pb2VfcmVsYXRpb24gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJJT0UgZmllbGQgaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5pb2VfYWRkcmVzcyA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIklPRSBmaWVsZCBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmlvZV9jb250YWN0ID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiSU9FIGZpZWxkIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuaW9lX2VzdGFibGlzaG1lbnQgPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJJT0UgZmllbGQgaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cblx0XHRcdHZhbGlkID0gbWVzc2FnZSAhPSBcIlZhbGlkYXRlZCFcIiA/IGZhbHNlIDogdmFsaWQ7XG5cdFx0XHRyZXR1cm4geyB2YWxpZDogdmFsaWQsIG1lc3NhZ2U6IG1lc3NhZ2UgfTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdwb3N0U3VibWl0QXBwbGljYXRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBwb3N0U3VibWl0QXBwbGljYXRpb24oZGF0YSkge1xuXHRcdFx0dmFyIGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbjtcblx0XHRcdHZhciB2bSA9IHRoaXM7XG5cdFx0XHR0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hdXRoL3JlZ2lzdGVyJywgZGF0YSkuc3VjY2VzcyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW4gKyBcIi8jL3JlZ2lzdHJhdGlvbi1wcm9jZXNzXCI7XG5cdFx0XHR9KS5lcnJvcihmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRcdGFsZXJ0KGVyclsnbWVzc2FnZSddKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3ZlcmlmeV9hY2NvdW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmVyaWZ5X2FjY291bnQoY29kZSkge1xuXHRcdFx0dGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXV0aC9yZWdpc3RyYXRpb24tY29uZmlybWF0aW9uJywgeyBjb2RlOiBjb2RlIH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3ZhbGlkRmllbGRzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdmFsaWRGaWVsZHMoKSB7XG5cdFx0XHR2YXIgZGF0YSA9IHtcblx0XHRcdFx0dXNlcm5hbWU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy51c2VybmFtZSksXG5cdFx0XHRcdHBhc3N3b3JkOiB0aGlzLnByb3BlclZhbHVlKHRoaXMucGFzc3dvcmQpLFxuXHRcdFx0XHRwYXNzd29yZF9jb25maXJtOiB0aGlzLnByb3BlclZhbHVlKHRoaXMucGFzc3dvcmRfY29uZmlybSksXG5cdFx0XHRcdGZpcnN0bmFtZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmZpcnN0bmFtZSksXG5cdFx0XHRcdGxhc3RuYW1lOiB0aGlzLnByb3BlclZhbHVlKHRoaXMubGFzdG5hbWUpLFxuXHRcdFx0XHRlbWFpbDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmVtYWlsKSxcblx0XHRcdFx0bmlja25hbWU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5uaWNrbmFtZSksXG5cdFx0XHRcdGdlbmRlcjogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmdlbmRlciksXG5cdFx0XHRcdC8vYmlydGhkYXkgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmJpcnRoZGF5ICksXG5cdFx0XHRcdHN0YXR1czogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLnN0YXR1cyksXG5cdFx0XHRcdG5hdGlvbmFsaXR5OiB0aGlzLnByb3BlclZhbHVlKHRoaXMubmF0aW9uYWxpdHkpLFxuXHRcdFx0XHRjb250YWN0OiB0aGlzLnByb3BlclZhbHVlKHRoaXMuY29udGFjdCksXG5cdFx0XHRcdGFkZHJlc3M6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5hZGRyZXNzKSxcblx0XHRcdFx0bm90ZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLm5vdGUpLFxuXHRcdFx0XHRpb2VfbmFtZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmlvZV9uYW1lKSxcblx0XHRcdFx0aW9lX3JlbGF0aW9uOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaW9lX3JlbGF0aW9uKSxcblx0XHRcdFx0aW9lX2FkZHJlc3M6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5pb2VfYWRkcmVzcyksXG5cdFx0XHRcdGlvZV9jb250YWN0OiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaW9lX2NvbnRhY3QpLFxuXHRcdFx0XHRpb2VfZXN0YWJsaXNobWVudDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmlvZV9lc3RhYmxpc2htZW50KSxcblx0XHRcdFx0dHlwZTogXCJPbmxpbmVcIixcblx0XHRcdFx0ZGF0ZV9leHBpcmVkX3RleHQ6IFwiXCIsXG5cdFx0XHRcdGRhdGVfZXhwaXJlZF9udW1iZXI6IFwiXCIsXG5cdFx0XHRcdGQ6IFwiXCJcblx0XHRcdH07XG5cblx0XHRcdHJldHVybiB0aGlzLnZhbGlkYXRlRGF0YShkYXRhKVsndmFsaWQnXSA/IGZhbHNlIDogdHJ1ZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdpc1ZhbGlkRW1haWxBZGRyZXNzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaXNWYWxpZEVtYWlsQWRkcmVzcyhlbWFpbEFkZHJlc3MpIHtcblx0XHRcdHZhciBwYXR0ZXJuID0gL14oW2EtelxcZCEjJCUmJyorXFwtXFwvPT9eX2B7fH1+XFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSsoXFwuW2EtelxcZCEjJCUmJyorXFwtXFwvPT9eX2B7fH1+XFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSspKnxcIigoKFsgXFx0XSpcXHJcXG4pP1sgXFx0XSspPyhbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHg3ZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3ZVxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3ZlxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSooKFsgXFx0XSpcXHJcXG4pP1sgXFx0XSspP1wiKUAoKFthLXpcXGRcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdfFthLXpcXGRcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdW2EtelxcZFxcLS5fflxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0qW2EtelxcZFxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pXFwuKSsoW2EtelxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl18W2EtelxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl1bYS16XFxkXFwtLl9+XFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSpbYS16XFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSlcXC4/JC9pO1xuXHRcdFx0cmV0dXJuIHBhdHRlcm4udGVzdChlbWFpbEFkZHJlc3MpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBQYWdlQ29udHJvbGxlcjtcbn0oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BhZ2VzL3BhZ2UuY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBQYWdlQ29udHJvbGxlciB7XHJcblx0Y29uc3RydWN0b3IgKCRodHRwLCAkbG9jYXRpb24sICRsb2cpIHtcclxuXHRcdCduZ0luamVjdCc7XHJcblx0XHR0aGlzLiRodHRwID0gJGh0dHA7XHJcblx0XHR0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XHJcblx0XHR0aGlzLiRsb2cgPSAkbG9nO1xyXG5cclxuXHRcdHRoaXMuZmllbGRzZXQgPSBmYWxzZTtcclxuXHJcblx0XHR2YXIgdmVyaWZpY2F0aW9uX2NvZGVfaGVyZSA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCdjb25maXJtYXRpb24tY29kZScsICRsb2NhdGlvbi5hYnNVcmwoKSk7XHJcblxyXG5cdFx0aWYgKHZlcmlmaWNhdGlvbl9jb2RlX2hlcmUpIHtcclxuXHRcdFx0dGhpcy52ZXJpZnlfYWNjb3VudCh2ZXJpZmljYXRpb25fY29kZV9oZXJlKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLnRlc3RHZW5lcmF0b3IoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmdldEVzdGFibGlzaG1lbnQoKTtcclxuXHR9XHJcblx0Z2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUsIHVybCkge1xyXG5cdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcXFxcJCZcIik7XHJcblx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgbmFtZSArIFwiKD0oW14mI10qKXwmfCN8JClcIiksXHJcblx0XHRyZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xyXG5cdFx0aWYgKCFyZXN1bHRzKSByZXR1cm4gbnVsbDtcclxuXHRcdGlmICghcmVzdWx0c1syXSkgcmV0dXJuICcnO1xyXG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpO1xyXG5cdH1cclxuXHRwb3N0TWVzc2FnZSgpe1xyXG5cdFx0dGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL21lc3NhZ2UnLHttc2c6IHRoaXMubWVzc2FnZSA/IHRoaXMubWVzc2FnZSA6IFwiXCJ9KTtcclxuXHR9XHJcblx0Z2V0TWVzc2FnZXMoKXtcclxuXHRcdHZhciB2bSA9IHRoaXM7XHJcblx0XHR0aGlzLiRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9lc3RhYmxpc2htZW50cycpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuXHRcdFx0dm0ubWVzc2FnZXMgPSByZXN1bHQuZGF0YTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRnZXRFc3RhYmxpc2htZW50KCl7XHJcblx0XHR2YXIgdm0gPSB0aGlzO1xyXG5cdFx0dGhpcy4kaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvZXN0YWJsaXNobWVudHMnKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcblx0XHRcdHZtLm1lc3NhZ2VzID0gcmVzdWx0LmRhdGE7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0cHJvcGVyVmFsdWUoIHZhbHVlICl7XHJcblx0XHRyZXR1cm4gdHlwZW9mIHZhbHVlICE9ICd1bmRlZmluZWQnID8gdmFsdWUgOiAnJztcclxuXHR9XHJcblx0dGVzdEdlbmVyYXRvcigpe1xyXG5cdFx0Lyp0aGlzLnVzZXJuYW1lID0gXCJ0ZXN0XCI7XHJcblx0XHR0aGlzLnBhc3N3b3JkID0gXCJ0ZXN0XCI7XHJcblx0XHR0aGlzLnBhc3N3b3JkX2NvbmZpcm0gPSBcInRlc3RcIjtcclxuXHJcblx0XHR0aGlzLmZpcnN0bmFtZSA9IFwidGVzdFwiO1xyXG5cdFx0dGhpcy5sYXN0bmFtZSA9IFwidGVzdFwiO1xyXG5cdFx0dGhpcy5lbWFpbCA9IFwidGVzdHVzZXJAMTI3LjAuMC4xXCI7XHJcblx0XHR0aGlzLm5pY2tuYW1lID0gXCJ0ZXN0XCI7XHJcblx0XHR0aGlzLmdlbmRlciA9IFwibWFsZVwiO1xyXG5cdFx0dGhpcy5iaXJ0aGRheSA9IFwidGVzdFwiO1xyXG5cdFx0dGhpcy5zdGF0dXMgPSBcInNpbmdsZVwiO1xyXG5cdFx0dGhpcy5uYXRpb25hbGl0eSA9IFwidGVzdFwiO1xyXG5cdFx0dGhpcy5jb250YWN0ID0gXCIxMjM0XCI7XHJcblx0XHR0aGlzLmFkZHJlc3MgPSBcInRlc3RcIjtcclxuXHRcdHRoaXMubm90ZSA9IFwidGVzdFwiO1xyXG5cclxuXHRcdHRoaXMuaW9lX25hbWUgPSBcInRlc3RcIjtcclxuXHRcdHRoaXMuaW9lX3JlbGF0aW9uID0gXCJ0ZXN0XCI7XHJcblx0XHR0aGlzLmlvZV9hZGRyZXNzID0gXCJ0ZXN0XCI7XHJcblx0XHR0aGlzLmlvZV9jb250YWN0ID0gXCIxMjM0XCI7XHJcblx0XHR0aGlzLmlvZV9lc3RhYmxpc2htZW50ID0gXCJ0ZXN0XCI7Ki9cclxuXHJcblx0XHR0aGlzLnVzZXJuYW1lID0gXCJuYVwiO1xyXG5cdFx0dGhpcy5wYXNzd29yZCA9IFwiXCI7XHJcblx0XHR0aGlzLnBhc3N3b3JkX2NvbmZpcm0gPSBcIlwiO1xyXG5cclxuXHRcdHRoaXMuZmlyc3RuYW1lID0gXCJcIjtcclxuXHRcdHRoaXMubGFzdG5hbWUgPSBcIlwiO1xyXG5cdFx0dGhpcy5lbWFpbCA9IFwiXCI7XHJcblx0XHR0aGlzLm5pY2tuYW1lID0gXCJcIjtcclxuXHRcdHRoaXMuZ2VuZGVyID0gXCJtYWxlXCI7XHJcblx0XHQvL3RoaXMuYmlydGhkYXkgPSBcIlwiO1xyXG5cdFx0dGhpcy5zdGF0dXMgPSBcInNpbmdsZVwiO1xyXG5cdFx0dGhpcy5uYXRpb25hbGl0eSA9IFwiXCI7XHJcblx0XHR0aGlzLmNvbnRhY3QgPSBcIlwiO1xyXG5cdFx0dGhpcy5hZGRyZXNzID0gXCJcIjtcclxuXHRcdHRoaXMubm90ZSA9IFwiXCI7XHJcblx0XHR0aGlzLm1vbnRoID1cIjBcIjtcclxuXHRcdHRoaXMuZGF5ID1cIjBcIjtcclxuXHRcdHRoaXMueWVhciA9XCIwXCI7XHJcblxyXG5cdFx0dGhpcy5pb2VfbmFtZSA9IFwiXCI7XHJcblx0XHR0aGlzLmlvZV9yZWxhdGlvbiA9IFwiXCI7XHJcblx0XHR0aGlzLmlvZV9hZGRyZXNzID0gXCJcIjtcclxuXHRcdHRoaXMuaW9lX2NvbnRhY3QgPSBcIlwiO1xyXG5cdFx0dGhpcy5pb2VfZXN0YWJsaXNobWVudCA9IFwibi9hXCI7XHJcblxyXG5cdH1cclxuXHRzdWJtaXQoKXtcclxuXHRcdHZhciBkYXRhID0ge1xyXG5cdFx0XHR1c2VybmFtZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMudXNlcm5hbWUgKSxcclxuXHRcdFx0cGFzc3dvcmQgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLnBhc3N3b3JkICksXHJcblx0XHRcdHBhc3N3b3JkX2NvbmZpcm0gOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLnBhc3N3b3JkX2NvbmZpcm0gKSxcclxuXHJcblx0XHRcdGZpcnN0bmFtZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuZmlyc3RuYW1lICksXHJcblx0XHRcdGxhc3RuYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5sYXN0bmFtZSApLFxyXG5cdFx0XHRlbWFpbCA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuZW1haWwgKSxcclxuXHRcdFx0bmlja25hbWUgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLm5pY2tuYW1lICksXHJcblx0XHRcdGdlbmRlciA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuZ2VuZGVyICksXHJcblx0XHRcdC8vYmlydGhkYXkgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmJpcnRoZGF5ICksXHJcblx0XHRcdGJpcnRoZGF5IDogdGhpcy5tb250aCtcIi1cIit0aGlzLmRheStcIi1cIit0aGlzLnllYXIsXHJcblx0XHRcdHN0YXR1cyA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuc3RhdHVzICksXHJcblx0XHRcdG5hdGlvbmFsaXR5IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5uYXRpb25hbGl0eSApLFxyXG5cdFx0XHRjb250YWN0IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5jb250YWN0ICksXHJcblx0XHRcdGFkZHJlc3MgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmFkZHJlc3MgKSxcclxuXHRcdFx0bm90ZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMubm90ZSApLFxyXG5cclxuXHRcdFx0aW9lX25hbWUgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmlvZV9uYW1lICksXHJcblx0XHRcdGlvZV9yZWxhdGlvbiA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaW9lX3JlbGF0aW9uICksXHJcblx0XHRcdGlvZV9hZGRyZXNzIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5pb2VfYWRkcmVzcyApLFxyXG5cdFx0XHRpb2VfY29udGFjdCA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaW9lX2NvbnRhY3QgKSxcclxuXHRcdFx0aW9lX2VzdGFibGlzaG1lbnQgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmlvZV9lc3RhYmxpc2htZW50ICksXHJcblx0XHRcdHR5cGU6XCJPbmxpbmVcIixcclxuXHRcdFx0ZGF0ZV9leHBpcmVkX3RleHQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGRhdGVfZXhwaXJlZF9udW1iZXI6XCJcIixcclxuICAgICAgICAgICAgZDpcIlwiLFxyXG5cdFx0fTtcclxuXHJcblx0XHR2YXIgdmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGVEYXRhKGRhdGEpO1xyXG5cclxuXHRcdGlmICghdmFsaWRhdGlvblsndmFsaWQnXSkge1xyXG5cdFx0XHRhbGVydCh2YWxpZGF0aW9uWydtZXNzYWdlJ10pO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMucG9zdFN1Ym1pdEFwcGxpY2F0aW9uKGRhdGEpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblx0dmFsaWRhdGVEYXRhKCBkYXRhICl7XHJcblx0XHR2YXIgdmFsaWQgPSB0cnVlO1xyXG5cdFx0dmFyIG1lc3NhZ2UgPSBcIlZhbGlkYXRlZCFcIjtcclxuXHJcblx0XHRpZiAodGhpcy51c2VybmFtZSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIlVzZXJuYW1lIGlzIGVtcHR5IVwiIH1cclxuXHRcdGlmICh0aGlzLnBhc3N3b3JkID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiUGFzc3dvcmQgaXMgZW1wdHkhXCIgfVxyXG5cdFx0aWYgKHRoaXMucGFzc3dvcmRfY29uZmlybSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIlJlLXR5cGUgUGFzc293cmRcIiB9XHJcblx0XHRpZiAodGhpcy5maXJzdG5hbWUgPT0gXCJcIikgeyBtZXNzYWdlID0gXCJGaXJzdG5hbWUgaXMgZW1wdHkhXCIgfVxyXG5cdFx0aWYgKHRoaXMubGFzdG5hbWUgPT0gXCJcIikgeyBtZXNzYWdlID0gXCJMYXN0bmFtZSBpcyBlbXB0eSFcIiB9XHJcblx0XHRpZiAodGhpcy5lbWFpbCA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIk1pZGRsZSBOYW1lIGlzIGVtcHR5IVwiIH1cclxuXHRcdGlmICghdGhpcy5pc1ZhbGlkRW1haWxBZGRyZXNzKHRoaXMuZW1haWwpKSB7IG1lc3NhZ2UgPSBcIkludmFsaWQgRW1haWwgQWRkcmVzc1wiIH1cclxuXHRcdGlmICh0aGlzLm5pY2tuYW1lID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiTmljay1uYW1lIGlzIGVtcHR5IVwiIH1cclxuXHRcdGlmICh0aGlzLmdlbmRlciA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIkdlbmRlciBpcyBlbXB0eSFcIiB9XHJcblx0XHQvL2lmICh0aGlzLmJpcnRoZGF5ID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiQmlydGhkYXkgaXMgZW1wdHkhXCIgfVxyXG5cdFx0aWYgKHRoaXMuc3RhdHVzID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiU3RhdHVzIGlzIGVtcHR5IVwiIH1cclxuXHRcdGlmICh0aGlzLm5hdGlvbmFsaXR5ID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiTmF0aW9uYWxpdHkgaXMgZW1wdHkhXCIgfVxyXG5cdFx0aWYgKHRoaXMuY29udGFjdCA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIkNvbnRhY3QgaXMgZW1wdHkhXCIgfVxyXG5cdFx0aWYgKHRoaXMuYWRkcmVzcyA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIkFkZHJlc3MgaXMgZW1wdHkhXCIgfVxyXG5cdFx0aWYgKHRoaXMuaW9lX25hbWUgPT0gXCJcIikgeyBtZXNzYWdlID0gXCJJT0UgZmllbGQgaXMgZW1wdHkhXCIgfVxyXG5cdFx0aWYgKHRoaXMuaW9lX3JlbGF0aW9uID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiSU9FIGZpZWxkIGlzIGVtcHR5IVwiIH1cclxuXHRcdGlmICh0aGlzLmlvZV9hZGRyZXNzID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiSU9FIGZpZWxkIGlzIGVtcHR5IVwiIH1cclxuXHRcdGlmICh0aGlzLmlvZV9jb250YWN0ID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiSU9FIGZpZWxkIGlzIGVtcHR5IVwiIH1cclxuXHRcdGlmICh0aGlzLmlvZV9lc3RhYmxpc2htZW50ID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiSU9FIGZpZWxkIGlzIGVtcHR5IVwiIH1cclxuXHJcblx0XHR2YWxpZCA9IG1lc3NhZ2UgIT0gXCJWYWxpZGF0ZWQhXCIgPyBmYWxzZSA6IHZhbGlkO1xyXG5cdFx0cmV0dXJuIHt2YWxpZDp2YWxpZCxtZXNzYWdlOm1lc3NhZ2V9O1xyXG5cdH1cclxuXHRwb3N0U3VibWl0QXBwbGljYXRpb24oZGF0YSl7XHJcblx0XHR2YXIgbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uO1xyXG5cdFx0dmFyIHZtID0gdGhpcztcclxuXHRcdHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2F1dGgvcmVnaXN0ZXInLCBkYXRhKS5zdWNjZXNzKGZ1bmN0aW9uKCl7XHJcblx0XHRcdGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW4gKyBcIi8jL3JlZ2lzdHJhdGlvbi1wcm9jZXNzXCJcclxuXHRcdH0pLmVycm9yKGZ1bmN0aW9uKGVycil7XHJcblx0XHRcdGFsZXJ0KCBlcnJbJ21lc3NhZ2UnXSApO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHZlcmlmeV9hY2NvdW50KCBjb2RlICl7XHJcblx0XHR0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hdXRoL3JlZ2lzdHJhdGlvbi1jb25maXJtYXRpb24nLHtjb2RlOiBjb2RlfSk7XHJcblx0fVxyXG5cdHZhbGlkRmllbGRzKCl7XHJcblx0XHR2YXIgZGF0YSA9IHtcclxuXHRcdFx0dXNlcm5hbWUgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLnVzZXJuYW1lICksXHJcblx0XHRcdHBhc3N3b3JkIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5wYXNzd29yZCApLFxyXG5cdFx0XHRwYXNzd29yZF9jb25maXJtIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5wYXNzd29yZF9jb25maXJtICksXHJcblx0XHRcdGZpcnN0bmFtZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuZmlyc3RuYW1lICksXHJcblx0XHRcdGxhc3RuYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5sYXN0bmFtZSApLFxyXG5cdFx0XHRlbWFpbCA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuZW1haWwgKSxcclxuXHRcdFx0bmlja25hbWUgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLm5pY2tuYW1lICksXHJcblx0XHRcdGdlbmRlciA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuZ2VuZGVyICksXHJcblx0XHRcdC8vYmlydGhkYXkgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmJpcnRoZGF5ICksXHJcblx0XHRcdHN0YXR1cyA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuc3RhdHVzICksXHJcblx0XHRcdG5hdGlvbmFsaXR5IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5uYXRpb25hbGl0eSApLFxyXG5cdFx0XHRjb250YWN0IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5jb250YWN0ICksXHJcblx0XHRcdGFkZHJlc3MgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmFkZHJlc3MgKSxcclxuXHRcdFx0bm90ZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMubm90ZSApLFxyXG5cdFx0XHRpb2VfbmFtZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaW9lX25hbWUgKSxcclxuXHRcdFx0aW9lX3JlbGF0aW9uIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5pb2VfcmVsYXRpb24gKSxcclxuXHRcdFx0aW9lX2FkZHJlc3MgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmlvZV9hZGRyZXNzICksXHJcblx0XHRcdGlvZV9jb250YWN0IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5pb2VfY29udGFjdCApLFxyXG5cdFx0XHRpb2VfZXN0YWJsaXNobWVudCA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaW9lX2VzdGFibGlzaG1lbnQgKSxcclxuXHRcdFx0dHlwZTpcIk9ubGluZVwiLFxyXG5cdFx0XHRkYXRlX2V4cGlyZWRfdGV4dDogXCJcIixcclxuICAgICAgICAgICAgZGF0ZV9leHBpcmVkX251bWJlcjpcIlwiLFxyXG4gICAgICAgICAgICBkOlwiXCIsXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiAodGhpcy52YWxpZGF0ZURhdGEoZGF0YSlbJ3ZhbGlkJ10pP2ZhbHNlOnRydWU7XHJcblx0fVxyXG5cdGlzVmFsaWRFbWFpbEFkZHJlc3MoZW1haWxBZGRyZXNzKXtcclxuXHRcdCAgIHZhciBwYXR0ZXJuID0gL14oW2EtelxcZCEjJCUmJyorXFwtXFwvPT9eX2B7fH1+XFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSsoXFwuW2EtelxcZCEjJCUmJyorXFwtXFwvPT9eX2B7fH1+XFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSspKnxcIigoKFsgXFx0XSpcXHJcXG4pP1sgXFx0XSspPyhbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHg3ZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3ZVxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3ZlxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSooKFsgXFx0XSpcXHJcXG4pP1sgXFx0XSspP1wiKUAoKFthLXpcXGRcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdfFthLXpcXGRcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdW2EtelxcZFxcLS5fflxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0qW2EtelxcZFxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pXFwuKSsoW2EtelxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl18W2EtelxcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl1bYS16XFxkXFwtLl9+XFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSpbYS16XFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSlcXC4/JC9pO1xyXG4gICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZW1haWxBZGRyZXNzKTtcclxuXHR9XHJcblx0IFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGFnZXMvcGFnZS5jb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRXZlbnRDb250cm9sbGVyID0gZXhwb3J0cy5FdmVudENvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIEV2ZW50Q29udHJvbGxlcigkaHR0cCwgJGxvY2F0aW9uLCAkbG9nLCAkc3RhdGVQYXJhbXMsICRzdGF0ZSwgJHNjZSkge1xuXHRcdCduZ0luamVjdCc7XG5cblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRDb250cm9sbGVyKTtcblxuXHRcdHRoaXMuJGh0dHAgPSAkaHR0cDtcblx0XHR0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cdFx0dGhpcy4kbG9nID0gJGxvZztcblx0XHR0aGlzLmV2ZW50cyA9IHRoaXMuZ2V0RXZlbnRzKCk7XG5cblx0XHR2YXIgdXJsX3NsdWcgPSB0aGlzLmxvY2F0aW9uLmhhc2g7XG5cdFx0aWYgKHVybF9zbHVnLnNwbGl0KFwiL1wiKS5sZW5ndGggPT0gMykge1xuXHRcdFx0dGhpcy5ldm50ID0gdGhpcy5nZXRFdmVudCgkc3RhdGUucGFyYW1zLnNsdWcpO1xuXG5cdFx0XHQvL2NvbnNvbGUubG9nKHRoaXMuZXZudCk7XG5cdFx0fVxuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEV2ZW50Q29udHJvbGxlciwgW3tcblx0XHRrZXk6ICdnZXRFdmVudHMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRFdmVudHMoKSB7XG5cdFx0XHR2YXIgdm0gPSB0aGlzO1xuXHRcdFx0dGhpcy4kaHR0cC5nZXQoJ2h0dHA6Ly9lYzItNTQtMTg2LTUtMTI2LnVzLXdlc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206NTAwMC9ldmVudHMnKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRcdFx0dm0uZXZlbnRzID0gcmVzdWx0LmRhdGE7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRFdmVudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldEV2ZW50KHNsdWcpIHtcblx0XHRcdHZhciB2bSA9IHRoaXM7XG5cdFx0XHR0aGlzLiRodHRwLmdldCgnaHR0cDovL2VjMi01NC0xODYtNS0xMjYudXMtd2VzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo1MDAwL2V2ZW50cy8nICsgc2x1ZykudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHRcdHZtLmV2bnQgPSByZXN1bHQuZGF0YTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBFdmVudENvbnRyb2xsZXI7XG59KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wYWdlcy9ldmVudC5jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIEV2ZW50Q29udHJvbGxlciB7XHJcblx0Y29uc3RydWN0b3IgKCRodHRwLCAkbG9jYXRpb24sICRsb2csICRzdGF0ZVBhcmFtcywgJHN0YXRlLCRzY2UpIHtcclxuXHRcdCduZ0luamVjdCc7XHJcblx0XHR0aGlzLiRodHRwID0gJGh0dHA7XHJcblx0XHR0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XHJcblx0XHR0aGlzLiRsb2cgPSAkbG9nO1xyXG5cdFx0dGhpcy5ldmVudHM9IHRoaXMuZ2V0RXZlbnRzKCk7XHJcblxyXG5cdFx0dmFyIHVybF9zbHVnID0gdGhpcy5sb2NhdGlvbi5oYXNoO1xyXG5cdFx0aWYodXJsX3NsdWcuc3BsaXQoXCIvXCIpLmxlbmd0aCA9PSAzKXtcclxuXHRcdFx0dGhpcy5ldm50PSB0aGlzLmdldEV2ZW50KCRzdGF0ZS5wYXJhbXMuc2x1Zyk7XHJcblxyXG5cdFx0XHQvL2NvbnNvbGUubG9nKHRoaXMuZXZudCk7XHJcblx0XHRcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblxyXG5cdH1cclxuXHRcclxuXHRnZXRFdmVudHMoKXtcclxuXHRcdHZhciB2bSA9IHRoaXM7XHJcblx0XHR0aGlzLiRodHRwLmdldCgnaHR0cDovL2VjMi01NC0xODYtNS0xMjYudXMtd2VzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo1MDAwL2V2ZW50cycpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuXHRcdFx0dm0uZXZlbnRzID0gcmVzdWx0LmRhdGE7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldEV2ZW50KHNsdWcpe1xyXG5cdFx0dmFyIHZtID0gdGhpcztcclxuXHRcdHRoaXMuJGh0dHAuZ2V0KCdodHRwOi8vZWMyLTU0LTE4Ni01LTEyNi51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjUwMDAvZXZlbnRzLycrc2x1ZykudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG5cdFx0XHR2bS5ldm50ID0gcmVzdWx0LmRhdGE7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGFnZXMvZXZlbnQuY29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFByb2ZpbGVDb250cm9sbGVyID0gZXhwb3J0cy5Qcm9maWxlQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gUHJvZmlsZUNvbnRyb2xsZXIoJGh0dHAsICRhdXRoKSB7XG5cdFx0J25nSW5qZWN0JztcblxuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm9maWxlQ29udHJvbGxlcik7XG5cblx0XHR0aGlzLiRodHRwID0gJGh0dHA7XG5cdFx0dGhpcy4kYXV0aCA9ICRhdXRoO1xuXG5cdFx0dGhpcy5nZXRwcm9maWxlKCk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoUHJvZmlsZUNvbnRyb2xsZXIsIFt7XG5cdFx0a2V5OiAnZ2V0cHJvZmlsZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldHByb2ZpbGUoKSB7XG5cdFx0XHR2YXIgdm0gPSB0aGlzO1xuXHRcdFx0dmFyIHRva2VuID0gdGhpcy4kYXV0aC5nZXRUb2tlbigpO1xuXHRcdFx0dGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vZWMyLTU0LTE4Ni01LTEyNi51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjUwMDAvYXBpL3Byb2ZpbGUnLCB7IHRva2VuOiB0b2tlbiB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRcdFx0dmFyIGRhdGEgPSByZXN1bHQuZGF0YTtcblxuXHRcdFx0XHR2bS5kaXNwbGF5UHJvZmxlKGRhdGEpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAndXBkYXRlUHJvZmlsZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVByb2ZpbGUoKSB7XG5cdFx0XHR2YXIgZGF0YSA9IHtcblx0XHRcdFx0Zmlyc3RuYW1lOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuZmlyc3RuYW1lKSxcblx0XHRcdFx0bGFzdG5hbWU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5sYXN0bmFtZSksXG5cdFx0XHRcdGVtYWlsOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuZW1haWwpLFxuXHRcdFx0XHRuaWNrbmFtZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLm5pY2tuYW1lKSxcblx0XHRcdFx0Z2VuZGVyOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuZ2VuZGVyKSxcblx0XHRcdFx0YmlydGhkYXk6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5iaXJ0aGRheSksXG5cdFx0XHRcdHN0YXR1czogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLnN0YXR1cyksXG5cdFx0XHRcdG5hdGlvbmFsaXR5OiB0aGlzLnByb3BlclZhbHVlKHRoaXMubmF0aW9uYWxpdHkpLFxuXHRcdFx0XHRjb250YWN0OiB0aGlzLnByb3BlclZhbHVlKHRoaXMuY29udGFjdCksXG5cdFx0XHRcdGFkZHJlc3M6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5hZGRyZXNzKSxcblx0XHRcdFx0bm90ZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLm5vdGUpLFxuXG5cdFx0XHRcdGlvZV9uYW1lOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaW9lX25hbWUpLFxuXHRcdFx0XHRpb2VfcmVsYXRpb246IHRoaXMucHJvcGVyVmFsdWUodGhpcy5pb2VfcmVsYXRpb24pLFxuXHRcdFx0XHRpb2VfYWRkcmVzczogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmlvZV9hZGRyZXNzKSxcblx0XHRcdFx0aW9lX2NvbnRhY3Q6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5pb2VfY29udGFjdCksXG5cdFx0XHRcdGlvZV9lc3RhYmxpc2htZW50OiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaW9lX2VzdGFibGlzaG1lbnQpXG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgdmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGVEYXRhKGRhdGEpO1xuXG5cdFx0XHRpZiAoIXZhbGlkYXRpb25bJ3ZhbGlkJ10pIHtcblx0XHRcdFx0YWxlcnQodmFsaWRhdGlvblsnbWVzc2FnZSddKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy51cGRhdGVTdWJtaXRBcHBsaWNhdGlvbihkYXRhKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdwcm9wZXJWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHByb3BlclZhbHVlKHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHZhbHVlICE9ICd1bmRlZmluZWQnID8gdmFsdWUgOiAnJztcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICd2YWxpZGF0ZURhdGEnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZURhdGEoZGF0YSkge1xuXHRcdFx0dmFyIHZhbGlkID0gdHJ1ZTtcblx0XHRcdHZhciBtZXNzYWdlID0gXCJWYWxpZGF0ZWQhXCI7XG5cblx0XHRcdGlmIChkYXRhWyd1c2VybmFtZSddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiRW1wdHkgVXNlcm5hbWUhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YVsnZmlyc3RuYW1lJ10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJFbXB0eSBGaXJzdG5hbWUhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YVsnbGFzdG5hbWUnXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIkVtcHR5IExhc3RuYW1lIVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ2VtYWlsJ10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJFbXB0eSBFbWFpbCBBZGRyZXNzIVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ2dlbmRlciddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiRW1wdHkgRW1haWwgQWRkcmVzcyFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWydiaXJ0aGRheSddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiRW1wdHkgQmlydGhkYXkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YVsnc3RhdHVzJ10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJFbXB0eSBTdGF0dXMhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YVsnbmF0aW9uYWxpdHknXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIk5vIE5hdGlvbmFsaXR5XCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YVsnY29udGFjdCddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiTm8gTmF0aW9uYWxpdHlcIjtcblx0XHRcdH1cblxuXHRcdFx0dmFsaWQgPSBtZXNzYWdlICE9IFwiVmFsaWRhdGVkIVwiID8gZmFsc2UgOiB2YWxpZDtcblx0XHRcdHJldHVybiB7IHZhbGlkOiB2YWxpZCwgbWVzc2FnZTogbWVzc2FnZSB9O1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3VwZGF0ZVN1Ym1pdEFwcGxpY2F0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gdXBkYXRlU3VibWl0QXBwbGljYXRpb24oZGF0YSkge1xuXHRcdFx0dmFyIHRva2VuID0gdGhpcy4kYXV0aC5nZXRUb2tlbigpO1xuXHRcdFx0dGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vZWMyLTU0LTE4Ni01LTEyNi51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjUwMDAvYXBpL3Byb2ZpbGUtdXBkYXRlJywgeyBkYXRhOiBkYXRhLCB0b2tlbjogdG9rZW4gfSkuc3VjY2VzcyhmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHRcdGFsZXJ0KHJlc3VsdC5tZXNzYWdlKTtcblx0XHRcdH0pLmVycm9yKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0YWxlcnQoXCJVbmFibGUgdG8gUHJvY2VlZC4gXCIpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZGlzcGxheVByb2ZsZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGRpc3BsYXlQcm9mbGUoZGF0YSkge1xuXHRcdFx0dGhpcy5maXJzdG5hbWUgPSBkYXRhLmZpcnN0bmFtZTtcblx0XHRcdHRoaXMubGFzdG5hbWUgPSBkYXRhLmxhc3RuYW1lO1xuXHRcdFx0dGhpcy5lbWFpbCA9IGRhdGEuZW1haWw7XG5cdFx0XHR0aGlzLm5pY2tuYW1lID0gZGF0YS5uaWNrbmFtZTtcblx0XHRcdHRoaXMuZ2VuZGVyID0gZGF0YS5nZW5kZXI7XG5cdFx0XHR0aGlzLmJpcnRoZGF5ID0gZGF0YS5iaXJ0aGRheTtcblx0XHRcdHRoaXMuc3RhdHVzID0gZGF0YS5zdGF0dXM7XG5cdFx0XHR0aGlzLm5hdGlvbmFsaXR5ID0gZGF0YS5uYXRpb25hbGl0eTtcblx0XHRcdHRoaXMuY29udGFjdCA9IGRhdGEuY29udGFjdDtcblx0XHRcdHRoaXMuYWRkcmVzcyA9IGRhdGEuYWRkcmVzcztcblx0XHRcdHRoaXMubm90ZSA9IGRhdGEubm90ZTtcblxuXHRcdFx0dGhpcy5pb2VfbmFtZSA9IGRhdGEuaW9lX25hbWU7XG5cdFx0XHR0aGlzLmlvZV9yZWxhdGlvbiA9IGRhdGEuaW9lX3JlbGF0aW9uO1xuXHRcdFx0dGhpcy5pb2VfYWRkcmVzcyA9IGRhdGEuaW9lX2FkZHJlc3M7XG5cdFx0XHR0aGlzLmlvZV9jb250YWN0ID0gZGF0YS5pb2VfY29udGFjdDtcblx0XHRcdHRoaXMuaW9lX2VzdGFibGlzaG1lbnQgPSBkYXRhLmlvZV9lc3RhYmxpc2htZW50O1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBQcm9maWxlQ29udHJvbGxlcjtcbn0oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIFByb2ZpbGVDb250cm9sbGVyIHtcclxuXHRjb25zdHJ1Y3RvciAoJGh0dHAsICRhdXRoKSB7XHJcblx0XHQnbmdJbmplY3QnO1xyXG5cdFx0dGhpcy4kaHR0cCA9ICRodHRwO1xyXG5cdFx0dGhpcy4kYXV0aCA9ICRhdXRoO1xyXG5cclxuXHRcdHRoaXMuZ2V0cHJvZmlsZSgpO1xyXG5cdH1cclxuXHRnZXRwcm9maWxlKCl7XHJcblx0XHR2YXIgdm0gPSB0aGlzO1xyXG5cdFx0dmFyIHRva2VuID0gdGhpcy4kYXV0aC5nZXRUb2tlbigpO1xyXG5cdFx0dGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vZWMyLTU0LTE4Ni01LTEyNi51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjUwMDAvYXBpL3Byb2ZpbGUnLHt0b2tlbjogdG9rZW59KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcblx0XHRcdHZhciBkYXRhID0gcmVzdWx0LmRhdGE7XHJcblxyXG5cdFx0XHR2bS5kaXNwbGF5UHJvZmxlKGRhdGEpXHJcblx0XHR9KTtcclxuXHR9XHJcblx0dXBkYXRlUHJvZmlsZSgpe1xyXG5cdFx0dmFyIGRhdGEgPSB7XHJcblx0XHRcdGZpcnN0bmFtZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuZmlyc3RuYW1lICksXHJcblx0XHRcdGxhc3RuYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5sYXN0bmFtZSApLFxyXG5cdFx0XHRlbWFpbCA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuZW1haWwgKSxcclxuXHRcdFx0bmlja25hbWUgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLm5pY2tuYW1lICksXHJcblx0XHRcdGdlbmRlciA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuZ2VuZGVyICksXHJcblx0XHRcdGJpcnRoZGF5IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5iaXJ0aGRheSApLFxyXG5cdFx0XHRzdGF0dXMgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLnN0YXR1cyApLFxyXG5cdFx0XHRuYXRpb25hbGl0eSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMubmF0aW9uYWxpdHkgKSxcclxuXHRcdFx0Y29udGFjdCA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuY29udGFjdCApLFxyXG5cdFx0XHRhZGRyZXNzIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5hZGRyZXNzICksXHJcblx0XHRcdG5vdGUgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLm5vdGUgKSxcclxuXHJcblx0XHRcdGlvZV9uYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5pb2VfbmFtZSApLFxyXG5cdFx0XHRpb2VfcmVsYXRpb24gOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmlvZV9yZWxhdGlvbiApLFxyXG5cdFx0XHRpb2VfYWRkcmVzcyA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaW9lX2FkZHJlc3MgKSxcclxuXHRcdFx0aW9lX2NvbnRhY3QgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmlvZV9jb250YWN0ICksXHJcblx0XHRcdGlvZV9lc3RhYmxpc2htZW50IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5pb2VfZXN0YWJsaXNobWVudCApXHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciB2YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0ZURhdGEoZGF0YSk7XHJcblxyXG5cdFx0aWYgKCF2YWxpZGF0aW9uWyd2YWxpZCddKSB7XHJcblx0XHRcdGFsZXJ0KHZhbGlkYXRpb25bJ21lc3NhZ2UnXSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy51cGRhdGVTdWJtaXRBcHBsaWNhdGlvbihkYXRhKTtcclxuXHR9XHJcblx0cHJvcGVyVmFsdWUoIHZhbHVlICl7XHJcblx0XHRyZXR1cm4gdHlwZW9mIHZhbHVlICE9ICd1bmRlZmluZWQnID8gdmFsdWUgOiAnJztcclxuXHR9XHJcblx0dmFsaWRhdGVEYXRhKCBkYXRhICl7XHJcblx0XHR2YXIgdmFsaWQgPSB0cnVlO1xyXG5cdFx0dmFyIG1lc3NhZ2UgPSBcIlZhbGlkYXRlZCFcIjtcclxuXHJcblx0XHRpZiAoZGF0YVsndXNlcm5hbWUnXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIkVtcHR5IFVzZXJuYW1lIVwiOyB9XHJcblx0XHRpZiAoZGF0YVsnZmlyc3RuYW1lJ10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJFbXB0eSBGaXJzdG5hbWUhXCI7IH1cclxuXHRcdGlmIChkYXRhWydsYXN0bmFtZSddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiRW1wdHkgTGFzdG5hbWUhXCI7IH1cclxuXHRcdGlmIChkYXRhWydlbWFpbCddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiRW1wdHkgRW1haWwgQWRkcmVzcyFcIjsgfVxyXG5cdFx0aWYgKGRhdGFbJ2dlbmRlciddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiRW1wdHkgRW1haWwgQWRkcmVzcyFcIjsgfVxyXG5cdFx0aWYgKGRhdGFbJ2JpcnRoZGF5J10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJFbXB0eSBCaXJ0aGRheSFcIjsgfVxyXG5cdFx0aWYgKGRhdGFbJ3N0YXR1cyddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiRW1wdHkgU3RhdHVzIVwiOyB9XHJcblx0XHRpZiAoZGF0YVsnbmF0aW9uYWxpdHknXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIk5vIE5hdGlvbmFsaXR5XCI7IH1cclxuXHRcdGlmIChkYXRhWydjb250YWN0J10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJObyBOYXRpb25hbGl0eVwiOyB9XHJcblxyXG5cdFx0dmFsaWQgPSBtZXNzYWdlICE9IFwiVmFsaWRhdGVkIVwiID8gZmFsc2UgOiB2YWxpZDtcclxuXHRcdHJldHVybiB7dmFsaWQ6dmFsaWQsbWVzc2FnZTptZXNzYWdlfTtcclxuXHR9XHJcblx0dXBkYXRlU3VibWl0QXBwbGljYXRpb24oZGF0YSl7XHJcblx0XHR2YXIgdG9rZW4gPSB0aGlzLiRhdXRoLmdldFRva2VuKCk7XHJcblx0XHR0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9lYzItNTQtMTg2LTUtMTI2LnVzLXdlc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206NTAwMC9hcGkvcHJvZmlsZS11cGRhdGUnLCB7ZGF0YTpkYXRhLCB0b2tlbjp0b2tlbn0pLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzdWx0KXtcclxuXHRcdFx0YWxlcnQocmVzdWx0Lm1lc3NhZ2UpXHJcblx0XHR9KS5lcnJvcihmdW5jdGlvbigpe1xyXG5cdFx0XHRhbGVydChcIlVuYWJsZSB0byBQcm9jZWVkLiBcIik7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0ZGlzcGxheVByb2ZsZShkYXRhKXtcclxuXHRcdHRoaXMuZmlyc3RuYW1lID0gZGF0YS5maXJzdG5hbWU7XHJcblx0XHR0aGlzLmxhc3RuYW1lID0gZGF0YS5sYXN0bmFtZTtcclxuXHRcdHRoaXMuZW1haWwgPSBkYXRhLmVtYWlsO1xyXG5cdFx0dGhpcy5uaWNrbmFtZSA9IGRhdGEubmlja25hbWU7XHJcblx0XHR0aGlzLmdlbmRlciA9IGRhdGEuZ2VuZGVyO1xyXG5cdFx0dGhpcy5iaXJ0aGRheSA9IGRhdGEuYmlydGhkYXk7XHJcblx0XHR0aGlzLnN0YXR1cyA9IGRhdGEuc3RhdHVzO1xyXG5cdFx0dGhpcy5uYXRpb25hbGl0eSA9IGRhdGEubmF0aW9uYWxpdHk7XHJcblx0XHR0aGlzLmNvbnRhY3QgPSBkYXRhLmNvbnRhY3Q7XHJcblx0XHR0aGlzLmFkZHJlc3MgPSBkYXRhLmFkZHJlc3M7XHJcblx0XHR0aGlzLm5vdGUgPSBkYXRhLm5vdGU7XHJcblxyXG5cdFx0dGhpcy5pb2VfbmFtZSA9IGRhdGEuaW9lX25hbWU7XHJcblx0XHR0aGlzLmlvZV9yZWxhdGlvbiA9IGRhdGEuaW9lX3JlbGF0aW9uO1xyXG5cdFx0dGhpcy5pb2VfYWRkcmVzcyA9IGRhdGEuaW9lX2FkZHJlc3M7XHJcblx0XHR0aGlzLmlvZV9jb250YWN0ID0gZGF0YS5pb2VfY29udGFjdDtcclxuXHRcdHRoaXMuaW9lX2VzdGFibGlzaG1lbnQgPSBkYXRhLmlvZV9lc3RhYmxpc2htZW50O1xyXG5cdFx0XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBQcm9maWxlVXBsb2FkZXJDb250cm9sbGVyID0gZXhwb3J0cy5Qcm9maWxlVXBsb2FkZXJDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBQcm9maWxlVXBsb2FkZXJDb250cm9sbGVyKFVwbG9hZCwgJGxvZywgJHNjb3BlLCAkdGltZW91dCwgJGF1dGgsICRodHRwKSB7XG5cdFx0J25nSW5qZWN0JztcblxuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm9maWxlVXBsb2FkZXJDb250cm9sbGVyKTtcblxuXHRcdHZhciB2bSA9IHRoaXM7XG5cblx0XHR0aGlzLiRsb2cgPSAkbG9nO1xuXHRcdHRoaXMuJGF1dGggPSAkYXV0aDtcblx0XHR0aGlzLiRodHRwID0gJGh0dHA7XG5cblx0XHR0aGlzLmdldFRva2VuID0gdGhpcy4kYXV0aC5nZXRUb2tlbigpO1xuXHRcdHRoaXMudXNlcm5hbWUgPSB0aGlzLmdldFRva2VuO1xuXG5cdFx0dGhpcy51cGxvYWRQaWMgPSBmdW5jdGlvbiAoZmlsZSkge1xuXHRcdFx0ZmlsZS51cGxvYWQgPSBVcGxvYWQudXBsb2FkKHtcblx0XHRcdFx0dXJsOiBBUElfVVJMICsgJy9hcGkvcHJvZmlsZS1waWN0dXJlLXVwbG9hZCcsXG5cdFx0XHRcdGRhdGE6IHsgdXNlcm5hbWU6IHZtLnVzZXJuYW1lLCBmaWxlOiBmaWxlIH1cblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdCR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRmaWxlLnJlc3VsdCA9IHJlc3BvbnNlLmRhdGE7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5zdGF0dXMgPiAwKSAkc2NvcGUuZXJyb3JNc2cgPSByZXNwb25zZS5zdGF0dXMgKyAnOiAnICsgcmVzcG9uc2UuZGF0YTtcblx0XHRcdH0sIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdFx0LypNYXRoLm1pbiBpcyB0byBmaXggSUUgd2hpY2ggcmVwb3J0cyAyMDAlIHNvbWV0aW1lcyovXG5cdFx0XHRcdGZpbGUucHJvZ3Jlc3MgPSBNYXRoLm1pbigxMDAsIHBhcnNlSW50KDEwMC4wICogZXZ0LmxvYWRlZCAvIGV2dC50b3RhbCkpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHRoaXMuJGh0dHAucG9zdChBUElfVVJMICsgJy9hcGkvcHJvZmlsZS1waWN0dXJlJywgeyB0b2tlbjogdGhpcy5nZXRUb2tlbiB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRcdHZtLnByb2ZpbGVQaWN0dXJlID0gXCJodHRwOi8vZWMyLTU0LTE4Ni01LTEyNi51cy13ZXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjUwMDAvYXBpL3Byb2ZpbGUtcGljdHVyZS1pbWc/c3JjPVwiICsgcmVzdWx0LmRhdGEucHJvZmlsZV9waWN0dXJlO1xuXHRcdH0pO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFByb2ZpbGVVcGxvYWRlckNvbnRyb2xsZXIsIFt7XG5cdFx0a2V5OiAnZ2V0cHJvZmlsZVBpY3R1cmUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRwcm9maWxlUGljdHVyZSgpIHt9XG5cdH1dKTtcblxuXHRyZXR1cm4gUHJvZmlsZVVwbG9hZGVyQ29udHJvbGxlcjtcbn0oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS11cGxvYWRlci5jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIFByb2ZpbGVVcGxvYWRlckNvbnRyb2xsZXIge1xyXG5cdGNvbnN0cnVjdG9yIChVcGxvYWQsICRsb2csICRzY29wZSwgJHRpbWVvdXQsICRhdXRoLCAkaHR0cCkge1xyXG5cdFx0J25nSW5qZWN0JztcclxuXHJcblx0XHR2YXIgdm0gPSB0aGlzO1xyXG5cclxuXHRcdHRoaXMuJGxvZyA9ICRsb2c7XHJcblx0XHR0aGlzLiRhdXRoID0gJGF1dGg7XHJcblx0XHR0aGlzLiRodHRwID0gJGh0dHA7XHJcblxyXG5cdFx0dGhpcy5nZXRUb2tlbiA9IHRoaXMuJGF1dGguZ2V0VG9rZW4oKTtcclxuXHRcdHRoaXMudXNlcm5hbWUgPSB0aGlzLmdldFRva2VuO1xyXG5cclxuXHRcdHRoaXMudXBsb2FkUGljID0gZnVuY3Rpb24oZmlsZSkge1xyXG5cdFx0XHRmaWxlLnVwbG9hZCA9IFVwbG9hZC51cGxvYWQoe1xyXG5cdFx0XHRcdHVybDogQVBJX1VSTCsnL2FwaS9wcm9maWxlLXBpY3R1cmUtdXBsb2FkJyxcclxuXHRcdFx0XHRkYXRhOiB7dXNlcm5hbWU6IHZtLnVzZXJuYW1lLCBmaWxlOiBmaWxlfVxyXG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cdFx0XHRcdCR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdGZpbGUucmVzdWx0ID0gcmVzcG9uc2UuZGF0YTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA+IDApXHJcblx0XHRcdFx0XHQkc2NvcGUuZXJyb3JNc2cgPSByZXNwb25zZS5zdGF0dXMgKyAnOiAnICsgcmVzcG9uc2UuZGF0YTtcclxuXHRcdFx0fSwgZnVuY3Rpb24gKGV2dCkge1xyXG5cdFx0XHRcdC8qTWF0aC5taW4gaXMgdG8gZml4IElFIHdoaWNoIHJlcG9ydHMgMjAwJSBzb21ldGltZXMqLyBcclxuXHRcdFx0XHRmaWxlLnByb2dyZXNzID0gTWF0aC5taW4oMTAwLCBwYXJzZUludCgxMDAuMCAqIGV2dC5sb2FkZWQgLyBldnQudG90YWwpKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy4kaHR0cC5wb3N0KEFQSV9VUkwrJy9hcGkvcHJvZmlsZS1waWN0dXJlJyx7dG9rZW46dGhpcy5nZXRUb2tlbn0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuXHRcdFx0dm0ucHJvZmlsZVBpY3R1cmUgPSBcImh0dHA6Ly9lYzItNTQtMTg2LTUtMTI2LnVzLXdlc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206NTAwMC9hcGkvcHJvZmlsZS1waWN0dXJlLWltZz9zcmM9XCIgKyByZXN1bHQuZGF0YS5wcm9maWxlX3BpY3R1cmU7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2V0cHJvZmlsZVBpY3R1cmUoKXtcclxuXHR9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUtdXBsb2FkZXIuY29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEFwcGx5Q29udHJvbGxlciA9IGV4cG9ydHMuQXBwbHlDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBBcHBseUNvbnRyb2xsZXIoJGh0dHAsICRhdXRoLCAkbG9jYXRpb24pIHtcblx0XHQnbmdJbmplY3QnO1xuXG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFwcGx5Q29udHJvbGxlcik7XG5cblx0XHR0aGlzLiRodHRwID0gJGh0dHA7XG5cdFx0dGhpcy4kYXV0aCA9ICRhdXRoO1xuXHRcdHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuXHRcdHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuXHRcdHRoaXMuU3RlcDEgPSAwO1xuXHRcdHRoaXMuQXBwbGljYXRpb25TdGF0dXMgPSBcIm5vXCI7XG5cdFx0Ly90aGlzLmhjX2pvYl9jYXRlZ29yeSA9IFwiTm9uLUZvb2RcIjtcblx0XHR0aGlzLmdldHByb2ZpbGUoKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhBcHBseUNvbnRyb2xsZXIsIFt7XG5cdFx0a2V5OiAnZ2V0U3RlcCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldFN0ZXAoc3RlbV9jb3VudGVyKSB7XG5cdFx0XHRyZXR1cm4gc3RlbV9jb3VudGVyID09IHRoaXMuU3RlcDE7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnbmV4dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG5leHQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5TdGVwMSsrO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3ByZXYnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBwcmV2KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuU3RlcDEtLTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRwcm9maWxlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0cHJvZmlsZSgpIHtcblx0XHRcdHZhciB2bSA9IHRoaXM7XG5cdFx0XHR2YXIgdG9rZW4gPSB0aGlzLiRhdXRoLmdldFRva2VuKCk7XG5cdFx0XHR2bS4kaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2hlYWx0aC1jYXJkLWRhdGEnLCB7IHRva2VuOiB0b2tlbiB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRcdFx0dmFyIGRhdGEgPSByZXN1bHQuZGF0YTtcblx0XHRcdFx0aWYgKCFkYXRhKSB7XG5cdFx0XHRcdFx0dm0uJGh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9wcm9maWxlJywgeyB0b2tlbjogdG9rZW4gfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHR2YXIgZGF0YSA9IHJlc3VsdC5kYXRhO1xuXHRcdFx0XHRcdFx0dm0uZGlzcGxheVByb2ZsZShkYXRhKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2bS5kaXNwbGF5UHJvZmxlKGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdkaXNwbGF5UHJvZmxlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZGlzcGxheVByb2ZsZShkYXRhKSB7XG5cdFx0XHR0aGlzLmhjX2xhc3RuYW1lID0gZGF0YS5oY19sYXN0bmFtZSA/IGRhdGEuaGNfbGFzdG5hbWUgOiBkYXRhLmxhc3RuYW1lO1xuXHRcdFx0dGhpcy5oY19maXJzdG5hbWUgPSBkYXRhLmhjX2ZpcnN0bmFtZSA/IGRhdGEuaGNfZmlyc3RuYW1lIDogZGF0YS5maXJzdG5hbWU7XG5cdFx0XHR0aGlzLmhjX21pZGRsZW5hbWUgPSBkYXRhLmhjX21pZGRsZW5hbWUgPyBkYXRhLmhjX21pZGRsZW5hbWUgOiBcIlwiO1xuXHRcdFx0Ly90aGlzLmhjX2FnZSA9IGRhdGEuaGNfYWdlID8gZGF0YS5oY19hZ2UgOiBcIlwiO1xuXHRcdFx0dGhpcy5oY19zZXggPSBkYXRhLmhjX3NleCA/IGRhdGEuaGNfc2V4IDogZGF0YS5nZW5kZXI7XG5cdFx0XHR0aGlzLmhjX2Npdmlsc3RhdHVzID0gZGF0YS5oY19jaXZpbHN0YXR1cyA/IGRhdGEuaGNfY2l2aWxzdGF0dXMgOiBkYXRhLnN0YXR1cztcblx0XHRcdHRoaXMuaGNfbmF0aW9uYWxpdHkgPSBkYXRhLmhjX25hdGlvbmFsaXR5ID8gZGF0YS5oY19uYXRpb25hbGl0eSA6IGRhdGEubmF0aW9uYWxpdHk7XG5cdFx0XHR0aGlzLmhjX2NlZHVsYSA9IGRhdGEuaGNfY2VkdWxhID8gZGF0YS5oY19jZWR1bGEgOiBcIlwiO1xuXHRcdFx0dGhpcy5oY19jZWR1bGFfZGF0ZV9pc3N1ZWQgPSBkYXRhLmhjX2NlZHVsYV9kYXRlX2lzc3VlZCA/IGRhdGEuaGNfY2VkdWxhX2RhdGVfaXNzdWVkIDogXCJcIjtcblx0XHRcdHRoaXMuaGNfT1JfZmVlX251bWJlciA9IGRhdGEuaGNfT1JfZmVlX251bWJlciA/IGRhdGEuaGNfT1JfZmVlX251bWJlciA6IFwiXCI7XG5cdFx0XHR0aGlzLmhjX09SX2ZlZV9udW1iZXJfZGF0ZV9pc3N1ZWQgPSBkYXRhLmhjX09SX2ZlZV9udW1iZXJfZGF0ZV9pc3N1ZWQgPyBkYXRhLmhjX09SX2ZlZV9udW1iZXJfZGF0ZV9pc3N1ZWQgOiBcIlwiO1xuXHRcdFx0dGhpcy5oY19pY29lX25hbWUgPSBkYXRhLmhjX2ljb2VfbmFtZSA/IGRhdGEuaGNfaWNvZV9uYW1lIDogZGF0YS5pb2VfbmFtZTtcblx0XHRcdHRoaXMuaGNfaWNvZV9yZWxhdGlvbiA9IGRhdGEuaGNfaWNvZV9yZWxhdGlvbiA/IGRhdGEuaGNfaWNvZV9yZWxhdGlvbiA6IGRhdGEuaW9lX3JlbGF0aW9uO1xuXHRcdFx0dGhpcy5oY19pY29lX2FkZHJlc3MgPSBkYXRhLmhjX2ljb2VfYWRkcmVzcyA/IGRhdGEuaGNfaWNvZV9hZGRyZXNzIDogZGF0YS5pb2VfYWRkcmVzcztcblx0XHRcdHRoaXMuaGNfaWNvZV9jb250YWN0X251bWJlciA9IGRhdGEuaGNfaWNvZV9jb250YWN0X251bWJlciA/IGRhdGEuaGNfaWNvZV9jb250YWN0X251bWJlciA6IGRhdGEuaW9lX2NvbnRhY3Q7XG5cdFx0XHR0aGlzLkFwcGxpY2F0aW9uU3RhdHVzID0gZGF0YS5yZXF1ZXN0X3N0YXR1cyA/IGRhdGEucmVxdWVzdF9zdGF0dXMgOiBcIm5vXCI7XG5cblx0XHRcdHRoaXMuaGNfYnVzaW5lc3NfZW1wbG95bWVudCA9IGRhdGEuaGNfYnVzaW5lc3NfZW1wbG95bWVudCA/IGRhdGEuaGNfYnVzaW5lc3NfZW1wbG95bWVudCA6IFwiXCI7XG5cdFx0XHR0aGlzLmhjX2pvYl9jYXRlZ29yeSA9IGRhdGEuaGNfam9iX2NhdGVnb3J5ID8gZGF0YS5oY19qb2JfY2F0ZWdvcnkgOiBcIlwiO1xuXHRcdFx0dGhpcy5oY19wb3NpdGlvbiA9IGRhdGEuaGNfcG9zaXRpb24gPyBkYXRhLmhjX3Bvc2l0aW9uIDogXCJcIjtcblx0XHRcdHRoaXMuaGNfZXRobmljX2dyb3VwID0gZGF0YS5oY19ldGhuaWNfZ3JvdXAgPyBkYXRhLmhjX2V0aG5pY19ncm91cCA6IFwiXCI7XG5cdFx0XHR0aGlzLnZlcmlmaWNhdGlvbl9jb2RlID0gZGF0YS52ZXJpZmljYXRpb25fY29kZSA/IGRhdGEudmVyaWZpY2F0aW9uX2NvZGUgOiBcIlwiO1xuXHRcdFx0dGhpcy5kID0gZGF0YS5kID8gZGF0YS5kIDogXCJuYVwiO1xuXHRcdFx0dGhpcy5tID0gZGF0YS5tID8gZGF0YS5tIDogXCJuYVwiO1xuXHRcdFx0dGhpcy55ID0gZGF0YS55ID8gZGF0YS55IDogXCJuYVwiO1xuXHRcdFx0dGhpcy5oaWQgPSBkYXRhLmhpZCA/IGRhdGEuaGlkIDogXCJuYVwiO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2FwcGxpY2F0aW9uU3RhdHVzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gYXBwbGljYXRpb25TdGF0dXMoc3RhdHVzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5BcHBsaWNhdGlvblN0YXR1cyA9PSBzdGF0dXM7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnc3VibWl0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gc3VibWl0KCkge1xuXHRcdFx0aWYgKHRoaXMuaGNfY29udGFjdCA9PSBcIlwiKSB7XG5cdFx0XHRcdGFsZXJ0KFwiQ29udGFjdCBOdW1iZXIgaXMgcmVxdWlyZWQqXCIpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciB0b2tlbiA9IHRoaXMuJGF1dGguZ2V0VG9rZW4oKTtcblxuXHRcdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcdGhjX2xhc3RuYW1lOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfbGFzdG5hbWUpLFxuXHRcdFx0XHRoY19maXJzdG5hbWU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19maXJzdG5hbWUpLFxuXHRcdFx0XHRoY19taWRkbGVuYW1lOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfbWlkZGxlbmFtZSksXG5cdFx0XHRcdC8vaGNfYWdlIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19hZ2UgKSxcblx0XHRcdFx0aGNfc2V4OiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfc2V4KSxcblx0XHRcdFx0aGNfY2l2aWxzdGF0dXM6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19jaXZpbHN0YXR1cyksXG5cdFx0XHRcdGhjX25hdGlvbmFsaXR5OiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfbmF0aW9uYWxpdHkpLFxuXHRcdFx0XHRoY19jZWR1bGE6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19jZWR1bGEpLFxuXHRcdFx0XHRoY19jZWR1bGFfZGF0ZV9pc3N1ZWQ6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19jZWR1bGFfZGF0ZV9pc3N1ZWQpLFxuXHRcdFx0XHRoY19PUl9mZWVfbnVtYmVyOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfT1JfZmVlX251bWJlciksXG5cdFx0XHRcdGhjX09SX2ZlZV9udW1iZXJfZGF0ZV9pc3N1ZWQ6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19PUl9mZWVfbnVtYmVyX2RhdGVfaXNzdWVkKSxcblx0XHRcdFx0aGNfaWNvZV9uYW1lOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfaWNvZV9uYW1lKSxcblx0XHRcdFx0aGNfaWNvZV9yZWxhdGlvbjogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2ljb2VfcmVsYXRpb24pLFxuXHRcdFx0XHRoY19pY29lX2FkZHJlc3M6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19pY29lX2FkZHJlc3MpLFxuXHRcdFx0XHRoY19pY29lX2NvbnRhY3RfbnVtYmVyOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfaWNvZV9jb250YWN0X251bWJlciksXG5cblx0XHRcdFx0aGNfYnVzaW5lc3NfZW1wbG95bWVudDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2J1c2luZXNzX2VtcGxveW1lbnQpLFxuXHRcdFx0XHRoY19qb2JfY2F0ZWdvcnk6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19qb2JfY2F0ZWdvcnkpLFxuXHRcdFx0XHRoY19wb3NpdGlvbjogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX3Bvc2l0aW9uKSxcblx0XHRcdFx0aGNfZXRobmljX2dyb3VwOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfZXRobmljX2dyb3VwKSxcblx0XHRcdFx0ZDogXCJcIixcblx0XHRcdFx0bTogXCJcIixcblx0XHRcdFx0eTogXCJcIixcblx0XHRcdFx0aGlkOiBcIlwiXG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgdmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGVEYXRhKGRhdGEpO1xuXG5cdFx0XHRpZiAoIXZhbGlkYXRpb25bJ3ZhbGlkJ10pIHtcblx0XHRcdFx0Ly8gYWxlcnQoXCJJbnZhbGlkXCIpO1xuXHRcdFx0XHQvLyBhbGVydCh2YWxpZGF0aW9uWydtZXNzYWdlJ10pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBhbGVydChcIlVuYWJsZSB0byBQcm9jZWVkLiBFbmNvdW50ZXJlZFwiKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR0aGlzLnBvc3RTdWJtaXRBcHBsaWNhdGlvbihkYXRhLCB0aGlzLmhjX2NvbnRhY3QsIHRva2VuKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICd1cGRhdGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG5cdFx0XHRpZiAodGhpcy5oY19jb250YWN0ID09IFwiXCIpIHtcblx0XHRcdFx0YWxlcnQoXCJDb250YWN0IE51bWJlciBpcyByZXF1aXJlZCpcIik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHRva2VuID0gdGhpcy4kYXV0aC5nZXRUb2tlbigpO1xuXG5cdFx0XHR2YXIgZGF0YSA9IHtcblx0XHRcdFx0aGNfbGFzdG5hbWU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19sYXN0bmFtZSksXG5cdFx0XHRcdGhjX2ZpcnN0bmFtZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2ZpcnN0bmFtZSksXG5cdFx0XHRcdGhjX21pZGRsZW5hbWU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19taWRkbGVuYW1lKSxcblx0XHRcdFx0Ly9oY19hZ2UgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2FnZSApLFxuXHRcdFx0XHRoY19zZXg6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19zZXgpLFxuXHRcdFx0XHRoY19jaXZpbHN0YXR1czogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2Npdmlsc3RhdHVzKSxcblx0XHRcdFx0aGNfbmF0aW9uYWxpdHk6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19uYXRpb25hbGl0eSksXG5cdFx0XHRcdGhjX2NlZHVsYTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2NlZHVsYSksXG5cdFx0XHRcdGhjX2NlZHVsYV9kYXRlX2lzc3VlZDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2NlZHVsYV9kYXRlX2lzc3VlZCksXG5cdFx0XHRcdGhjX09SX2ZlZV9udW1iZXI6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19PUl9mZWVfbnVtYmVyKSxcblx0XHRcdFx0aGNfT1JfZmVlX251bWJlcl9kYXRlX2lzc3VlZDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX09SX2ZlZV9udW1iZXJfZGF0ZV9pc3N1ZWQpLFxuXHRcdFx0XHRoY19pY29lX25hbWU6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19pY29lX25hbWUpLFxuXHRcdFx0XHRoY19pY29lX3JlbGF0aW9uOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfaWNvZV9yZWxhdGlvbiksXG5cdFx0XHRcdGhjX2ljb2VfYWRkcmVzczogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2ljb2VfYWRkcmVzcyksXG5cdFx0XHRcdGhjX2ljb2VfY29udGFjdF9udW1iZXI6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19pY29lX2NvbnRhY3RfbnVtYmVyKSxcblx0XHRcdFx0aGNfYnVzaW5lc3NfZW1wbG95bWVudDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2J1c2luZXNzX2VtcGxveW1lbnQpLFxuXHRcdFx0XHRoY19qb2JfY2F0ZWdvcnk6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19qb2JfY2F0ZWdvcnkpLFxuXHRcdFx0XHRoY19wb3NpdGlvbjogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX3Bvc2l0aW9uKSxcblx0XHRcdFx0aGNfZXRobmljX2dyb3VwOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfZXRobmljX2dyb3VwKVxuXHRcdFx0fTtcblxuXHRcdFx0dmFyIHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRlRGF0YShkYXRhKTtcblxuXHRcdFx0aWYgKCF2YWxpZGF0aW9uWyd2YWxpZCddKSB7XG5cdFx0XHRcdGFsZXJ0KHZhbGlkYXRpb25bJ21lc3NhZ2UnXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnBvc3RVcGRhdGVBcHBsaWNhdGlvbihkYXRhLCB0aGlzLmhjX2NvbnRhY3QsIHRva2VuKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdwcm9wZXJWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHByb3BlclZhbHVlKHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHZhbHVlICE9ICd1bmRlZmluZWQnID8gdmFsdWUgOiAnJztcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICd2YWxpZGF0ZURhdGEnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZURhdGEoZGF0YSkge1xuXHRcdFx0dmFyIHZhbGlkID0gdHJ1ZTtcblx0XHRcdHZhciBtZXNzYWdlID0gXCJWYWxpZGF0ZWQhXCI7XG5cblx0XHRcdGlmIChkYXRhWydoY19sYXN0bmFtZSddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiRW1wdHkgRmlyc3RuYW1lIVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ2hjX2xhc3RuYW1lJ10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJFbXB0eSBMYXN0bmFtZSFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWydoY19taWRkbGVuYW1lJ10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJFbXB0eSBNaWRkbGUhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YVsnZ2VuZGVyJ10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJTZWxlY3QgR2VuZGVyIVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ3N0YXR1cyddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiRW1wdHkgU3RhdHVzIVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ25hdGlvbmFsaXR5J10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJObyBOYXRpb25hbGl0eVwiO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZGF0YVsnaGNfbGFzdG5hbWUnXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIkxhc3RuYW1lIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ2hjX2ZpcnN0bmFtZSddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiRmlyc3RuYW1lIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ2hjX21pZGRsZW5hbWUnXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIk1pZGRsZSBOYW1lIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0Ly9pZiAoZGF0YVsnaGNfYWdlJ10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJBZ2UgaXMgZW1wdHkhXCI7IH1cblx0XHRcdGlmIChkYXRhWydoY19zZXgnXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIlNleCBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWydoY19jaXZpbHN0YXR1cyddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiQ2l2aWwgU3RhdHVzIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ2hjX25hdGlvbmFsaXR5J10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJOYXRpb25hbGl0eSBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWydoY19jZWR1bGEnXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIkNlZHVsYSBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWydoY19jZWR1bGFfZGF0ZV9pc3N1ZWQnXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIkNlZHVsYSBJc3N1ZWQgRGF0ZSBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWydoY19PUl9mZWVfbnVtYmVyJ10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJPUiBOdW1iZXIgaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YVsnaGNfT1JfZmVlX251bWJlcl9kYXRlX2lzc3VlZCddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiT1IgTnVtYmVyIERhdGUgSXNzdWVkIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ2hjX2ljb2VfbmFtZSddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiSUNPRSBGaWVsZCBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWydoY19pY29lX3JlbGF0aW9uJ10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJJQ09FIEZpZWxkIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ2hjX2ljb2VfYWRkcmVzcyddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiSUNPRSBGaWVsZCBpcyBlbXB0eSFcIjtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhWydoY19pY29lX2NvbnRhY3RfbnVtYmVyJ10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJJQ09FIEZpZWxkIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ2hjX2J1c2luZXNzX2VtcGxveW1lbnQnXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIkJ1c2luZXNzIEVtcGxveW1lbnQgaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YVsnaGNfam9iX2NhdGVnb3J5J10gPT0gXCJcIikge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJKb2IgQ2F0ZWdvcnkgaXMgZW1wdHkhXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YVsnaGNfcG9zaXRpb24nXSA9PSBcIlwiKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBcIlBvc2l0aW9uIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFbJ2hjX2V0aG5pY19ncm91cCddID09IFwiXCIpIHtcblx0XHRcdFx0bWVzc2FnZSA9IFwiRXRobmljIEdyb3VwIGlzIGVtcHR5IVwiO1xuXHRcdFx0fVxuXG5cdFx0XHR2YWxpZCA9IG1lc3NhZ2UgIT0gXCJWYWxpZGF0ZWQhXCIgPyBmYWxzZSA6IHZhbGlkO1xuXHRcdFx0cmV0dXJuIHsgdmFsaWQ6IHZhbGlkLCBtZXNzYWdlOiBtZXNzYWdlIH07XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAndmFsaWRGaWVsZHMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB2YWxpZEZpZWxkcygpIHtcblx0XHRcdHZhciBkYXRhID0ge1xuXHRcdFx0XHRoY19sYXN0bmFtZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2xhc3RuYW1lKSxcblx0XHRcdFx0aGNfZmlyc3RuYW1lOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfZmlyc3RuYW1lKSxcblx0XHRcdFx0aGNfbWlkZGxlbmFtZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX21pZGRsZW5hbWUpLFxuXHRcdFx0XHQvL2hjX2FnZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfYWdlICksXG5cdFx0XHRcdGhjX3NleDogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX3NleCksXG5cdFx0XHRcdGhjX2Npdmlsc3RhdHVzOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfY2l2aWxzdGF0dXMpLFxuXHRcdFx0XHRoY19uYXRpb25hbGl0eTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX25hdGlvbmFsaXR5KSxcblx0XHRcdFx0aGNfY2VkdWxhOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfY2VkdWxhKSxcblx0XHRcdFx0aGNfY2VkdWxhX2RhdGVfaXNzdWVkOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfY2VkdWxhX2RhdGVfaXNzdWVkKSxcblx0XHRcdFx0aGNfT1JfZmVlX251bWJlcjogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX09SX2ZlZV9udW1iZXIpLFxuXHRcdFx0XHRoY19PUl9mZWVfbnVtYmVyX2RhdGVfaXNzdWVkOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfT1JfZmVlX251bWJlcl9kYXRlX2lzc3VlZCksXG5cdFx0XHRcdGhjX2ljb2VfbmFtZTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2ljb2VfbmFtZSksXG5cdFx0XHRcdGhjX2ljb2VfcmVsYXRpb246IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19pY29lX3JlbGF0aW9uKSxcblx0XHRcdFx0aGNfaWNvZV9hZGRyZXNzOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfaWNvZV9hZGRyZXNzKSxcblx0XHRcdFx0aGNfaWNvZV9jb250YWN0X251bWJlcjogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2ljb2VfY29udGFjdF9udW1iZXIpLFxuXHRcdFx0XHRoY19idXNpbmVzc19lbXBsb3ltZW50OiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfYnVzaW5lc3NfZW1wbG95bWVudCksXG5cdFx0XHRcdGhjX2pvYl9jYXRlZ29yeTogdGhpcy5wcm9wZXJWYWx1ZSh0aGlzLmhjX2pvYl9jYXRlZ29yeSksXG5cdFx0XHRcdGhjX3Bvc2l0aW9uOiB0aGlzLnByb3BlclZhbHVlKHRoaXMuaGNfcG9zaXRpb24pLFxuXHRcdFx0XHRoY19ldGhuaWNfZ3JvdXA6IHRoaXMucHJvcGVyVmFsdWUodGhpcy5oY19ldGhuaWNfZ3JvdXApLFxuXHRcdFx0XHRkOiBcIlwiLFxuXHRcdFx0XHRtOiBcIlwiLFxuXHRcdFx0XHR5OiBcIlwiLFxuXHRcdFx0XHRoaWQ6IFwiXCJcblx0XHRcdH07XG5cblx0XHRcdHJldHVybiB0aGlzLnZhbGlkYXRlRGF0YShkYXRhKVsndmFsaWQnXTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdwb3N0U3VibWl0QXBwbGljYXRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBwb3N0U3VibWl0QXBwbGljYXRpb24oZGF0YSwgY29udGFjdCwgdG9rZW4pIHtcblx0XHRcdHZhciBsb2NhdGlvbiA9IHRoaXMubG9jYXRpb247XG5cdFx0XHR0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvaGVhbHRoLWNhcmQtYXBwbGljYXRpb24nLCB7IGRhdGE6IGRhdGEsIGNvbnRhY3Q6IGNvbnRhY3QsIHRva2VuOiB0b2tlbiB9KS5zdWNjZXNzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLm9yaWdpbiArIFwiLyMvYXBwbHktc3VibWl0dGVkXCI7XG5cdFx0XHR9KS5lcnJvcihmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRcdGFsZXJ0KFwiVW5hYmxlIHRvIFByb2NlZWQuIFwiICsgZXJyKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3Bvc3RVcGRhdGVBcHBsaWNhdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHBvc3RVcGRhdGVBcHBsaWNhdGlvbihkYXRhLCBjb250YWN0LCB0b2tlbikge1xuXHRcdFx0dmFyIGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbjtcblx0XHRcdHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9oZWFsdGgtY2FyZC1hcHBsaWNhdGlvbi11cGRhdGUnLCB7IGRhdGE6IGRhdGEsIGNvbnRhY3Q6IGNvbnRhY3QsIHRva2VuOiB0b2tlbiB9KS5zdWNjZXNzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLm9yaWdpbiArIFwiLyMvYXBwbHktdXBkYXRlZFwiO1xuXHRcdFx0fSkuZXJyb3IoZnVuY3Rpb24gKGVycikge1xuXHRcdFx0XHRhbGVydChcIlVuYWJsZSB0byBQcm9jZWVkLiBcIiArIGVycik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZXNlbmRDb2RlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVzZW5kQ29kZSgpIHtcblx0XHRcdHZhciBjbm8gPSB0aGlzLmNubztcblx0XHRcdHZhciB2ZXJpZmljYXRpb25fY29kZSA9IHRoaXMudmVyaWZpY2F0aW9uX2NvZGU7XG5cdFx0XHQvL3ZhciBsb2NhdGlvbiA9IHRoaXMubG9jYXRpb247XG5cblxuXHRcdFx0aWYgKGNubyA9PSBcIlwiKSB7XG5cdFx0XHRcdGFsZXJ0KFwiUGxlYXNlIGVudGVyIFBob25lIE51bWJlclwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChjbm8ubGVuZ3RoID09IDEwKSB7XG5cdFx0XHRcdFx0dmFyIGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbjtcblx0XHRcdFx0XHQkKCcjcmVzZW5kLWNvZGUnKS5tb2RhbChcImhpZGVcIik7XG5cdFx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLm9yaWdpbiArIFwiLyMvYXBwbHktcmVzZW5kXCI7XG5cdFx0XHRcdFx0dGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2hlYWx0aC1jYXJkLXJlc2VuZCcsIHsgY25vOiBjbm8sIHZlcmlmaWNhdGlvbl9jb2RlOiB2ZXJpZmljYXRpb25fY29kZSB9KS5zdWNjZXNzKGZ1bmN0aW9uICgpIHt9KS5lcnJvcihmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRcdFx0XHRhbGVydChcIlVuYWJsZSB0byBQcm9jZWVkLiBcIiArIGVycik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWxlcnQoXCJJbnZhbGlkIFBob25lIE51bWJlclwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBBcHBseUNvbnRyb2xsZXI7XG59KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHBseS9hcHBseS5jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIEFwcGx5Q29udHJvbGxlciB7XHJcblx0Y29uc3RydWN0b3IgKCRodHRwLCAkYXV0aCwgJGxvY2F0aW9uKSB7XHJcblx0XHQnbmdJbmplY3QnO1xyXG5cdFx0dGhpcy4kaHR0cCA9ICRodHRwO1xyXG5cdFx0dGhpcy4kYXV0aCA9ICRhdXRoO1xyXG5cdFx0dGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XHJcblx0XHR0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XHJcblxyXG5cdFx0dGhpcy5TdGVwMSA9IDA7XHJcblx0XHR0aGlzLkFwcGxpY2F0aW9uU3RhdHVzID0gXCJub1wiO1xyXG5cdFx0Ly90aGlzLmhjX2pvYl9jYXRlZ29yeSA9IFwiTm9uLUZvb2RcIjtcclxuXHRcdHRoaXMuZ2V0cHJvZmlsZSgpO1xyXG5cdH1cclxuXHRnZXRTdGVwKHN0ZW1fY291bnRlcil7XHJcblx0XHRyZXR1cm4gc3RlbV9jb3VudGVyID09IHRoaXMuU3RlcDE7XHJcblx0fVxyXG5cdG5leHQoKXtcclxuXHRcdHJldHVybiB0aGlzLlN0ZXAxKys7XHJcblx0fVxyXG5cdHByZXYoKXtcclxuXHRcdHJldHVybiB0aGlzLlN0ZXAxLS07XHJcblx0fVxyXG5cdGdldHByb2ZpbGUoKXtcclxuXHRcdHZhciB2bSA9IHRoaXM7XHJcblx0XHR2YXIgdG9rZW4gPSB0aGlzLiRhdXRoLmdldFRva2VuKCk7XHJcblx0XHR2bS4kaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2hlYWx0aC1jYXJkLWRhdGEnLHt0b2tlbjogdG9rZW59KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcblx0XHRcdHZhciBkYXRhID0gcmVzdWx0LmRhdGE7XHJcblx0XHRcdGlmICghZGF0YSkge1xyXG5cdFx0XHRcdHZtLiRodHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvcHJvZmlsZScse3Rva2VuOiB0b2tlbn0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuXHRcdFx0XHRcdHZhciBkYXRhID0gcmVzdWx0LmRhdGE7XHJcblx0XHRcdFx0XHR2bS5kaXNwbGF5UHJvZmxlKGRhdGEpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHZtLmRpc3BsYXlQcm9mbGUoZGF0YSlcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGRpc3BsYXlQcm9mbGUoZGF0YSl7XHJcblx0XHR0aGlzLmhjX2xhc3RuYW1lID0gZGF0YS5oY19sYXN0bmFtZSA/IGRhdGEuaGNfbGFzdG5hbWUgOiBkYXRhLmxhc3RuYW1lO1xyXG5cdFx0dGhpcy5oY19maXJzdG5hbWUgPSBkYXRhLmhjX2ZpcnN0bmFtZSA/IGRhdGEuaGNfZmlyc3RuYW1lIDogZGF0YS5maXJzdG5hbWU7XHJcblx0XHR0aGlzLmhjX21pZGRsZW5hbWUgPSBkYXRhLmhjX21pZGRsZW5hbWUgPyBkYXRhLmhjX21pZGRsZW5hbWUgOiBcIlwiO1xyXG5cdFx0Ly90aGlzLmhjX2FnZSA9IGRhdGEuaGNfYWdlID8gZGF0YS5oY19hZ2UgOiBcIlwiO1xyXG5cdFx0dGhpcy5oY19zZXggPSBkYXRhLmhjX3NleCA/IGRhdGEuaGNfc2V4IDogZGF0YS5nZW5kZXI7XHJcblx0XHR0aGlzLmhjX2Npdmlsc3RhdHVzID0gZGF0YS5oY19jaXZpbHN0YXR1cyA/IGRhdGEuaGNfY2l2aWxzdGF0dXMgOiBkYXRhLnN0YXR1cztcclxuXHRcdHRoaXMuaGNfbmF0aW9uYWxpdHkgPSBkYXRhLmhjX25hdGlvbmFsaXR5ID8gZGF0YS5oY19uYXRpb25hbGl0eSA6IGRhdGEubmF0aW9uYWxpdHk7XHJcblx0XHR0aGlzLmhjX2NlZHVsYSA9IGRhdGEuaGNfY2VkdWxhID8gZGF0YS5oY19jZWR1bGEgOiBcIlwiO1xyXG5cdFx0dGhpcy5oY19jZWR1bGFfZGF0ZV9pc3N1ZWQgPSBkYXRhLmhjX2NlZHVsYV9kYXRlX2lzc3VlZCA/IGRhdGEuaGNfY2VkdWxhX2RhdGVfaXNzdWVkIDogXCJcIjtcclxuXHRcdHRoaXMuaGNfT1JfZmVlX251bWJlciA9IGRhdGEuaGNfT1JfZmVlX251bWJlciA/IGRhdGEuaGNfT1JfZmVlX251bWJlciA6IFwiXCI7XHJcblx0XHR0aGlzLmhjX09SX2ZlZV9udW1iZXJfZGF0ZV9pc3N1ZWQgPSBkYXRhLmhjX09SX2ZlZV9udW1iZXJfZGF0ZV9pc3N1ZWQgPyBkYXRhLmhjX09SX2ZlZV9udW1iZXJfZGF0ZV9pc3N1ZWQgOiBcIlwiO1xyXG5cdFx0dGhpcy5oY19pY29lX25hbWUgPSBkYXRhLmhjX2ljb2VfbmFtZSA/IGRhdGEuaGNfaWNvZV9uYW1lIDogZGF0YS5pb2VfbmFtZTtcclxuXHRcdHRoaXMuaGNfaWNvZV9yZWxhdGlvbiA9IGRhdGEuaGNfaWNvZV9yZWxhdGlvbiA/IGRhdGEuaGNfaWNvZV9yZWxhdGlvbiA6IGRhdGEuaW9lX3JlbGF0aW9uO1xyXG5cdFx0dGhpcy5oY19pY29lX2FkZHJlc3MgPSBkYXRhLmhjX2ljb2VfYWRkcmVzcyA/IGRhdGEuaGNfaWNvZV9hZGRyZXNzIDogZGF0YS5pb2VfYWRkcmVzcztcclxuXHRcdHRoaXMuaGNfaWNvZV9jb250YWN0X251bWJlciA9IGRhdGEuaGNfaWNvZV9jb250YWN0X251bWJlciA/IGRhdGEuaGNfaWNvZV9jb250YWN0X251bWJlciA6IGRhdGEuaW9lX2NvbnRhY3Q7XHJcblx0XHR0aGlzLkFwcGxpY2F0aW9uU3RhdHVzID0gZGF0YS5yZXF1ZXN0X3N0YXR1cyA/IGRhdGEucmVxdWVzdF9zdGF0dXMgOiBcIm5vXCI7XHJcblxyXG5cdFx0dGhpcy5oY19idXNpbmVzc19lbXBsb3ltZW50ID0gZGF0YS5oY19idXNpbmVzc19lbXBsb3ltZW50ID8gZGF0YS5oY19idXNpbmVzc19lbXBsb3ltZW50IDogXCJcIjtcclxuXHRcdHRoaXMuaGNfam9iX2NhdGVnb3J5ID0gZGF0YS5oY19qb2JfY2F0ZWdvcnkgPyBkYXRhLmhjX2pvYl9jYXRlZ29yeSA6IFwiXCI7XHJcblx0XHR0aGlzLmhjX3Bvc2l0aW9uID0gZGF0YS5oY19wb3NpdGlvbiA/IGRhdGEuaGNfcG9zaXRpb24gOiBcIlwiO1xyXG5cdFx0dGhpcy5oY19ldGhuaWNfZ3JvdXAgPSBkYXRhLmhjX2V0aG5pY19ncm91cCA/IGRhdGEuaGNfZXRobmljX2dyb3VwIDogXCJcIjtcclxuXHRcdHRoaXMudmVyaWZpY2F0aW9uX2NvZGUgPSBkYXRhLnZlcmlmaWNhdGlvbl9jb2RlID8gZGF0YS52ZXJpZmljYXRpb25fY29kZSA6IFwiXCI7XHJcblx0XHR0aGlzLmQgPSBkYXRhLmQgPyBkYXRhLmQgOiBcIm5hXCI7XHJcblx0XHR0aGlzLm0gPSBkYXRhLm0gPyBkYXRhLm0gOiBcIm5hXCI7XHJcblx0XHR0aGlzLnkgPSBkYXRhLnkgPyBkYXRhLnkgOiBcIm5hXCI7XHJcblx0XHR0aGlzLmhpZCA9IGRhdGEuaGlkID8gZGF0YS5oaWQgOiBcIm5hXCI7XHJcblx0fVxyXG5cdGFwcGxpY2F0aW9uU3RhdHVzKHN0YXR1cyl7XHJcblx0XHRyZXR1cm4gdGhpcy5BcHBsaWNhdGlvblN0YXR1cyA9PSBzdGF0dXM7XHJcblx0fVxyXG5cclxuXHJcblx0c3VibWl0KCl7XHJcblx0XHRpZiAodGhpcy5oY19jb250YWN0ID09IFwiXCIpIHtcclxuXHRcdFx0YWxlcnQoXCJDb250YWN0IE51bWJlciBpcyByZXF1aXJlZCpcIik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgdG9rZW4gPSB0aGlzLiRhdXRoLmdldFRva2VuKCk7XHJcblxyXG5cdFx0dmFyIGRhdGEgPSB7XHJcblx0XHRcdGhjX2xhc3RuYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19sYXN0bmFtZSApLFxyXG5cdFx0XHRoY19maXJzdG5hbWUgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2ZpcnN0bmFtZSApLFxyXG5cdFx0XHRoY19taWRkbGVuYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19taWRkbGVuYW1lICksXHJcblx0XHRcdC8vaGNfYWdlIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19hZ2UgKSxcclxuXHRcdFx0aGNfc2V4IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19zZXggKSxcclxuXHRcdFx0aGNfY2l2aWxzdGF0dXMgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2Npdmlsc3RhdHVzICksXHJcblx0XHRcdGhjX25hdGlvbmFsaXR5IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19uYXRpb25hbGl0eSApLFxyXG5cdFx0XHRoY19jZWR1bGEgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2NlZHVsYSApLFxyXG5cdFx0XHRoY19jZWR1bGFfZGF0ZV9pc3N1ZWQgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2NlZHVsYV9kYXRlX2lzc3VlZCApLFxyXG5cdFx0XHRoY19PUl9mZWVfbnVtYmVyIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19PUl9mZWVfbnVtYmVyICksXHJcblx0XHRcdGhjX09SX2ZlZV9udW1iZXJfZGF0ZV9pc3N1ZWQgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX09SX2ZlZV9udW1iZXJfZGF0ZV9pc3N1ZWQgKSxcclxuXHRcdFx0aGNfaWNvZV9uYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19pY29lX25hbWUgKSxcclxuXHRcdFx0aGNfaWNvZV9yZWxhdGlvbiA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfaWNvZV9yZWxhdGlvbiApLFxyXG5cdFx0XHRoY19pY29lX2FkZHJlc3MgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2ljb2VfYWRkcmVzcyApLFxyXG5cdFx0XHRoY19pY29lX2NvbnRhY3RfbnVtYmVyIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19pY29lX2NvbnRhY3RfbnVtYmVyICksXHJcblxyXG5cdFx0XHRoY19idXNpbmVzc19lbXBsb3ltZW50IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19idXNpbmVzc19lbXBsb3ltZW50ICksXHJcblx0XHRcdGhjX2pvYl9jYXRlZ29yeSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfam9iX2NhdGVnb3J5ICksXHJcblx0XHRcdGhjX3Bvc2l0aW9uIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19wb3NpdGlvbiApLFxyXG5cdFx0XHRoY19ldGhuaWNfZ3JvdXAgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2V0aG5pY19ncm91cCApLFxyXG5cdFx0XHRkIDogXCJcIixcclxuXHRcdFx0bSA6IFwiXCIsXHJcblx0XHRcdHkgOiBcIlwiLFxyXG5cdFx0XHRoaWQgOiBcIlwiLFxyXG5cdFx0fTtcclxuXHJcblx0XHR2YXIgdmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGVEYXRhKGRhdGEpO1xyXG5cclxuXHRcdGlmICghdmFsaWRhdGlvblsndmFsaWQnXSkge1xyXG5cdFx0XHQvLyBhbGVydChcIkludmFsaWRcIik7XHJcblx0XHRcdC8vIGFsZXJ0KHZhbGlkYXRpb25bJ21lc3NhZ2UnXSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Ly8gYWxlcnQoXCJVbmFibGUgdG8gUHJvY2VlZC4gRW5jb3VudGVyZWRcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wb3N0U3VibWl0QXBwbGljYXRpb24oZGF0YSwgdGhpcy5oY19jb250YWN0LCB0b2tlbik7XHJcblx0fVxyXG5cdHVwZGF0ZSgpe1xyXG5cdFx0aWYgKHRoaXMuaGNfY29udGFjdCA9PSBcIlwiKSB7XHJcblx0XHRcdGFsZXJ0KFwiQ29udGFjdCBOdW1iZXIgaXMgcmVxdWlyZWQqXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHRva2VuID0gdGhpcy4kYXV0aC5nZXRUb2tlbigpO1xyXG5cclxuXHRcdHZhciBkYXRhID0ge1xyXG5cdFx0XHRoY19sYXN0bmFtZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfbGFzdG5hbWUgKSxcclxuXHRcdFx0aGNfZmlyc3RuYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19maXJzdG5hbWUgKSxcclxuXHRcdFx0aGNfbWlkZGxlbmFtZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfbWlkZGxlbmFtZSApLFxyXG5cdFx0XHQvL2hjX2FnZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfYWdlICksXHJcblx0XHRcdGhjX3NleCA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfc2V4ICksXHJcblx0XHRcdGhjX2Npdmlsc3RhdHVzIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19jaXZpbHN0YXR1cyApLFxyXG5cdFx0XHRoY19uYXRpb25hbGl0eSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfbmF0aW9uYWxpdHkgKSxcclxuXHRcdFx0aGNfY2VkdWxhIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19jZWR1bGEgKSxcclxuXHRcdFx0aGNfY2VkdWxhX2RhdGVfaXNzdWVkIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19jZWR1bGFfZGF0ZV9pc3N1ZWQgKSxcclxuXHRcdFx0aGNfT1JfZmVlX251bWJlciA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfT1JfZmVlX251bWJlciApLFxyXG5cdFx0XHRoY19PUl9mZWVfbnVtYmVyX2RhdGVfaXNzdWVkIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19PUl9mZWVfbnVtYmVyX2RhdGVfaXNzdWVkICksXHJcblx0XHRcdGhjX2ljb2VfbmFtZSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfaWNvZV9uYW1lICksXHJcblx0XHRcdGhjX2ljb2VfcmVsYXRpb24gOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2ljb2VfcmVsYXRpb24gKSxcclxuXHRcdFx0aGNfaWNvZV9hZGRyZXNzIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19pY29lX2FkZHJlc3MgKSxcclxuXHRcdFx0aGNfaWNvZV9jb250YWN0X251bWJlciA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfaWNvZV9jb250YWN0X251bWJlciApLFxyXG5cdFx0XHRoY19idXNpbmVzc19lbXBsb3ltZW50IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19idXNpbmVzc19lbXBsb3ltZW50ICksXHJcblx0XHRcdGhjX2pvYl9jYXRlZ29yeSA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfam9iX2NhdGVnb3J5ICksXHJcblx0XHRcdGhjX3Bvc2l0aW9uIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19wb3NpdGlvbiApLFxyXG5cdFx0XHRoY19ldGhuaWNfZ3JvdXAgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2V0aG5pY19ncm91cCApXHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciB2YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0ZURhdGEoZGF0YSk7XHJcblxyXG5cdFx0aWYgKCF2YWxpZGF0aW9uWyd2YWxpZCddKSB7XHJcblx0XHRcdGFsZXJ0KCB2YWxpZGF0aW9uWydtZXNzYWdlJ10gKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLnBvc3RVcGRhdGVBcHBsaWNhdGlvbihkYXRhLCB0aGlzLmhjX2NvbnRhY3QsIHRva2VuKTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cdHByb3BlclZhbHVlKCB2YWx1ZSApe1xyXG5cdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSAhPSAndW5kZWZpbmVkJyA/IHZhbHVlIDogJyc7XHJcblx0fVxyXG5cdHZhbGlkYXRlRGF0YSggZGF0YSApe1xyXG5cdFx0dmFyIHZhbGlkID0gdHJ1ZTtcclxuXHRcdHZhciBtZXNzYWdlID0gXCJWYWxpZGF0ZWQhXCI7XHJcblxyXG5cdFx0aWYgKGRhdGFbJ2hjX2xhc3RuYW1lJ10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJFbXB0eSBGaXJzdG5hbWUhXCI7IH1cclxuXHRcdGlmIChkYXRhWydoY19sYXN0bmFtZSddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiRW1wdHkgTGFzdG5hbWUhXCI7IH1cclxuXHRcdGlmIChkYXRhWydoY19taWRkbGVuYW1lJ10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJFbXB0eSBNaWRkbGUhXCI7IH1cclxuXHRcdGlmIChkYXRhWydnZW5kZXInXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIlNlbGVjdCBHZW5kZXIhXCI7IH1cclxuXHRcdGlmIChkYXRhWydzdGF0dXMnXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIkVtcHR5IFN0YXR1cyFcIjsgfVxyXG5cdFx0aWYgKGRhdGFbJ25hdGlvbmFsaXR5J10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJObyBOYXRpb25hbGl0eVwiOyB9XHJcblxyXG5cdFx0aWYgKGRhdGFbJ2hjX2xhc3RuYW1lJ10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJMYXN0bmFtZSBpcyBlbXB0eSFcIjsgfVxyXG5cdFx0aWYgKGRhdGFbJ2hjX2ZpcnN0bmFtZSddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiRmlyc3RuYW1lIGlzIGVtcHR5IVwiOyB9XHJcblx0XHRpZiAoZGF0YVsnaGNfbWlkZGxlbmFtZSddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiTWlkZGxlIE5hbWUgaXMgZW1wdHkhXCI7IH1cclxuXHRcdC8vaWYgKGRhdGFbJ2hjX2FnZSddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiQWdlIGlzIGVtcHR5IVwiOyB9XHJcblx0XHRpZiAoZGF0YVsnaGNfc2V4J10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJTZXggaXMgZW1wdHkhXCI7IH1cclxuXHRcdGlmIChkYXRhWydoY19jaXZpbHN0YXR1cyddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiQ2l2aWwgU3RhdHVzIGlzIGVtcHR5IVwiOyB9XHJcblx0XHRpZiAoZGF0YVsnaGNfbmF0aW9uYWxpdHknXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIk5hdGlvbmFsaXR5IGlzIGVtcHR5IVwiOyB9XHJcblx0XHRpZiAoZGF0YVsnaGNfY2VkdWxhJ10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJDZWR1bGEgaXMgZW1wdHkhXCI7IH1cclxuXHRcdGlmIChkYXRhWydoY19jZWR1bGFfZGF0ZV9pc3N1ZWQnXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIkNlZHVsYSBJc3N1ZWQgRGF0ZSBpcyBlbXB0eSFcIjsgfVxyXG5cdFx0aWYgKGRhdGFbJ2hjX09SX2ZlZV9udW1iZXInXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIk9SIE51bWJlciBpcyBlbXB0eSFcIjsgfVxyXG5cdFx0aWYgKGRhdGFbJ2hjX09SX2ZlZV9udW1iZXJfZGF0ZV9pc3N1ZWQnXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIk9SIE51bWJlciBEYXRlIElzc3VlZCBpcyBlbXB0eSFcIjsgfVxyXG5cdFx0aWYgKGRhdGFbJ2hjX2ljb2VfbmFtZSddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiSUNPRSBGaWVsZCBpcyBlbXB0eSFcIjsgfVxyXG5cdFx0aWYgKGRhdGFbJ2hjX2ljb2VfcmVsYXRpb24nXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIklDT0UgRmllbGQgaXMgZW1wdHkhXCI7IH1cclxuXHRcdGlmIChkYXRhWydoY19pY29lX2FkZHJlc3MnXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIklDT0UgRmllbGQgaXMgZW1wdHkhXCI7IH1cclxuXHRcdGlmIChkYXRhWydoY19pY29lX2NvbnRhY3RfbnVtYmVyJ10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJJQ09FIEZpZWxkIGlzIGVtcHR5IVwiOyB9XHJcblx0XHRpZiAoZGF0YVsnaGNfYnVzaW5lc3NfZW1wbG95bWVudCddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiQnVzaW5lc3MgRW1wbG95bWVudCBpcyBlbXB0eSFcIjsgfVxyXG5cdFx0aWYgKGRhdGFbJ2hjX2pvYl9jYXRlZ29yeSddID09IFwiXCIpIHsgbWVzc2FnZSA9IFwiSm9iIENhdGVnb3J5IGlzIGVtcHR5IVwiOyB9XHJcblx0XHRpZiAoZGF0YVsnaGNfcG9zaXRpb24nXSA9PSBcIlwiKSB7IG1lc3NhZ2UgPSBcIlBvc2l0aW9uIGlzIGVtcHR5IVwiOyB9XHJcblx0XHRpZiAoZGF0YVsnaGNfZXRobmljX2dyb3VwJ10gPT0gXCJcIikgeyBtZXNzYWdlID0gXCJFdGhuaWMgR3JvdXAgaXMgZW1wdHkhXCI7IH1cclxuXHJcblxyXG5cdCAgICB2YWxpZCA9IG1lc3NhZ2UgIT0gXCJWYWxpZGF0ZWQhXCIgPyBmYWxzZSA6IHZhbGlkO1xyXG5cdFx0cmV0dXJuIHt2YWxpZDp2YWxpZCxtZXNzYWdlOm1lc3NhZ2V9O1xyXG5cdH1cclxuXHR2YWxpZEZpZWxkcygpe1xyXG5cdFx0dmFyIGRhdGEgPSB7XHJcblx0XHRcdGhjX2xhc3RuYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19sYXN0bmFtZSApLFxyXG5cdFx0XHRoY19maXJzdG5hbWUgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2ZpcnN0bmFtZSApLFxyXG5cdFx0XHRoY19taWRkbGVuYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19taWRkbGVuYW1lICksXHJcblx0XHRcdC8vaGNfYWdlIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19hZ2UgKSxcclxuXHRcdFx0aGNfc2V4IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19zZXggKSxcclxuXHRcdFx0aGNfY2l2aWxzdGF0dXMgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2Npdmlsc3RhdHVzICksXHJcblx0XHRcdGhjX25hdGlvbmFsaXR5IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19uYXRpb25hbGl0eSApLFxyXG5cdFx0XHRoY19jZWR1bGEgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2NlZHVsYSApLFxyXG5cdFx0XHRoY19jZWR1bGFfZGF0ZV9pc3N1ZWQgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2NlZHVsYV9kYXRlX2lzc3VlZCApLFxyXG5cdFx0XHRoY19PUl9mZWVfbnVtYmVyIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19PUl9mZWVfbnVtYmVyICksXHJcblx0XHRcdGhjX09SX2ZlZV9udW1iZXJfZGF0ZV9pc3N1ZWQgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX09SX2ZlZV9udW1iZXJfZGF0ZV9pc3N1ZWQgKSxcclxuXHRcdFx0aGNfaWNvZV9uYW1lIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19pY29lX25hbWUgKSxcclxuXHRcdFx0aGNfaWNvZV9yZWxhdGlvbiA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfaWNvZV9yZWxhdGlvbiApLFxyXG5cdFx0XHRoY19pY29lX2FkZHJlc3MgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2ljb2VfYWRkcmVzcyApLFxyXG5cdFx0XHRoY19pY29lX2NvbnRhY3RfbnVtYmVyIDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19pY29lX2NvbnRhY3RfbnVtYmVyICksXHJcblx0XHRcdGhjX2J1c2luZXNzX2VtcGxveW1lbnQgOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX2J1c2luZXNzX2VtcGxveW1lbnQgKSxcclxuXHRcdFx0aGNfam9iX2NhdGVnb3J5IDogdGhpcy5wcm9wZXJWYWx1ZSggdGhpcy5oY19qb2JfY2F0ZWdvcnkgKSxcclxuXHRcdFx0aGNfcG9zaXRpb24gOiB0aGlzLnByb3BlclZhbHVlKCB0aGlzLmhjX3Bvc2l0aW9uICksXHJcblx0XHRcdGhjX2V0aG5pY19ncm91cCA6IHRoaXMucHJvcGVyVmFsdWUoIHRoaXMuaGNfZXRobmljX2dyb3VwICksIFxyXG5cdFx0XHRkIDogXCJcIiwgXHJcblx0XHRcdG0gOiBcIlwiLCBcclxuXHRcdFx0eSA6IFwiXCIsIFxyXG5cdFx0XHRoaWQgOiBcIlwiLCBcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudmFsaWRhdGVEYXRhKGRhdGEpWyd2YWxpZCddO1xyXG5cdH1cclxuXHRwb3N0U3VibWl0QXBwbGljYXRpb24oZGF0YSwgY29udGFjdCwgdG9rZW4pe1xyXG5cdFx0dmFyIGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbjtcclxuXHRcdHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9oZWFsdGgtY2FyZC1hcHBsaWNhdGlvbicsIHtkYXRhOmRhdGEsIGNvbnRhY3Q6Y29udGFjdCwgdG9rZW46dG9rZW59KS5zdWNjZXNzKGZ1bmN0aW9uKCl7XHJcblx0XHRcdGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5vcmlnaW4gKyBcIi8jL2FwcGx5LXN1Ym1pdHRlZFwiXHJcblx0XHR9KS5lcnJvcihmdW5jdGlvbihlcnIpe1xyXG5cdFx0XHRhbGVydChcIlVuYWJsZSB0byBQcm9jZWVkLiBcIiArIGVycik7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0cG9zdFVwZGF0ZUFwcGxpY2F0aW9uKGRhdGEsIGNvbnRhY3QsIHRva2VuKXtcclxuXHRcdHZhciBsb2NhdGlvbiA9IHRoaXMubG9jYXRpb247XHJcblx0XHR0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvaGVhbHRoLWNhcmQtYXBwbGljYXRpb24tdXBkYXRlJywge2RhdGE6ZGF0YSwgY29udGFjdDpjb250YWN0LCB0b2tlbjp0b2tlbn0pLnN1Y2Nlc3MoZnVuY3Rpb24oKXtcclxuXHRcdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLm9yaWdpbiArIFwiLyMvYXBwbHktdXBkYXRlZFwiXHJcblx0XHR9KS5lcnJvcihmdW5jdGlvbihlcnIpe1xyXG5cdFx0XHRhbGVydChcIlVuYWJsZSB0byBQcm9jZWVkLiBcIiArIGVycik7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlc2VuZENvZGUoKXtcclxuXHRcdHZhciBjbm8gPSB0aGlzLmNubztcclxuXHRcdHZhciB2ZXJpZmljYXRpb25fY29kZSA9IHRoaXMudmVyaWZpY2F0aW9uX2NvZGU7XHJcblx0XHQvL3ZhciBsb2NhdGlvbiA9IHRoaXMubG9jYXRpb247XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0aWYoY25vID09IFwiXCIpe1xyXG5cdFx0XHRhbGVydChcIlBsZWFzZSBlbnRlciBQaG9uZSBOdW1iZXJcIik7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0IGlmKGNuby5sZW5ndGggID09IDEwKXtcclxuXHRcdFx0IFx0dmFyIGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbjtcclxuXHRcdFx0IFx0JCgnI3Jlc2VuZC1jb2RlJykubW9kYWwoXCJoaWRlXCIpO1xyXG5cdFx0XHQgXHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24ub3JpZ2luICsgXCIvIy9hcHBseS1yZXNlbmRcIjtcclxuXHRcdFx0IFx0dGhpcy4kaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2hlYWx0aC1jYXJkLXJlc2VuZCcsIHtjbm86Y25vLCB2ZXJpZmljYXRpb25fY29kZTp2ZXJpZmljYXRpb25fY29kZX0pLnN1Y2Nlc3MoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0pLmVycm9yKGZ1bmN0aW9uKGVycil7XHJcblx0XHRcdFx0XHRhbGVydChcIlVuYWJsZSB0byBQcm9jZWVkLiBcIiArIGVycik7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRhbGVydChcIkludmFsaWQgUGhvbmUgTnVtYmVyXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwbHkvYXBwbHkuY29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE5hdmJhckNvbnRyb2xsZXIgPSBleHBvcnRzLk5hdmJhckNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIE5hdmJhckNvbnRyb2xsZXIoJGF1dGgsICRsb2NhdGlvbikge1xuXHRcdCduZ0luamVjdCc7XG5cblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgTmF2YmFyQ29udHJvbGxlcik7XG5cblx0XHR0aGlzLiRhdXRoID0gJGF1dGg7XG5cdFx0dGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSAkYXV0aC5pc0F1dGhlbnRpY2F0ZWQ7XG5cdFx0dGhpcy4kbG9jYXRpb24gPSAkbG9jYXRpb247XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoTmF2YmFyQ29udHJvbGxlciwgW3tcblx0XHRrZXk6ICdsb2dvdXQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBsb2dvdXQoKSB7XG5cdFx0XHR0aGlzLiRhdXRoLmxvZ291dCgpO1xuXHRcdFx0dGhpcy4kbG9jYXRpb24ucGF0aCgnL2xvZ2luJyk7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIE5hdmJhckNvbnRyb2xsZXI7XG59KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBOYXZiYXJDb250cm9sbGVye1xyXG5cdGNvbnN0cnVjdG9yKCRhdXRoLCAkbG9jYXRpb24pe1xyXG5cdFx0J25nSW5qZWN0JztcclxuXHRcdFxyXG5cdFx0dGhpcy4kYXV0aCA9ICRhdXRoO1xyXG5cdFx0dGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSAkYXV0aC5pc0F1dGhlbnRpY2F0ZWQ7XHJcblx0XHR0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcclxuXHR9XHJcblx0bG9nb3V0KCl7XHJcblx0XHR0aGlzLiRhdXRoLmxvZ291dCgpO1xyXG5cdFx0dGhpcy4kbG9jYXRpb24ucGF0aCgnL2xvZ2luJyk7XHJcblx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQ29tcGFyZVRvRGlyZWN0aXZlID0gQ29tcGFyZVRvRGlyZWN0aXZlO1xuZnVuY3Rpb24gQ29tcGFyZVRvRGlyZWN0aXZlKCRwYXJzZSkge1xuXHQnbmdJbmplY3QnO1xuXG5cdHJldHVybiB7XG5cdFx0cmVxdWlyZTogJ25nTW9kZWwnLFxuXHRcdGxpbms6IGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsbSwgYXR0cnMsIG5nTW9kZWwpIHtcblx0XHRcdHZhciBtYWluTW9kZWwgPSAkcGFyc2UoYXR0cnMuY29tcGFyZVRvKTtcblx0XHRcdHZhciBzZWNvbmRNb2RlbCA9ICRwYXJzZShhdHRycy5uZ01vZGVsKTtcblxuXHRcdFx0c2NvcGUuJHdhdGNoKGF0dHJzLm5nTW9kZWwsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuXHRcdFx0XHRuZ01vZGVsLiRzZXRWYWxpZGl0eShhdHRycy5uYW1lLCBuZXdWYWx1ZSA9PT0gbWFpbk1vZGVsKHNjb3BlKSk7XG5cdFx0XHR9KTtcblx0XHRcdHNjb3BlLiR3YXRjaChhdHRycy5jb21wYXJlVG8sIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuXHRcdFx0XHRuZ01vZGVsLiRzZXRWYWxpZGl0eShhdHRycy5uYW1lLCBuZXdWYWx1ZSA9PT0gc2Vjb25kTW9kZWwoc2NvcGUpKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2RpcmVjdGl2ZXMvY29tcGFyZVRvLmRpcmVjdGl2ZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBDb21wYXJlVG9EaXJlY3RpdmUoJHBhcnNlKXtcclxuXHQnbmdJbmplY3QnXHJcblx0cmV0dXJuIHtcclxuXHRcdHJlcXVpcmUgOiAnbmdNb2RlbCcsXHJcblx0XHRsaW5rIDogZnVuY3Rpb24oc2NvcGUsIGVsbSwgYXR0cnMsIG5nTW9kZWwpe1xyXG5cdFx0XHR2YXIgbWFpbk1vZGVsID0gJHBhcnNlKGF0dHJzLmNvbXBhcmVUbyk7XHJcblx0XHRcdHZhciBzZWNvbmRNb2RlbCA9ICRwYXJzZShhdHRycy5uZ01vZGVsKTtcclxuXHJcblx0XHRcdHNjb3BlLiR3YXRjaChhdHRycy5uZ01vZGVsLCBmdW5jdGlvbihuZXdWYWx1ZSl7XHJcblx0XHRcdFx0bmdNb2RlbC4kc2V0VmFsaWRpdHkoYXR0cnMubmFtZSwgbmV3VmFsdWUgPT09IG1haW5Nb2RlbChzY29wZSkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2NvcGUuJHdhdGNoKGF0dHJzLmNvbXBhcmVUbywgZnVuY3Rpb24obmV3VmFsdWUpe1xyXG5cdFx0XHRcdG5nTW9kZWwuJHNldFZhbGlkaXR5KGF0dHJzLm5hbWUsIG5ld1ZhbHVlID09PSBzZWNvbmRNb2RlbChzY29wZSkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2RpcmVjdGl2ZXMvY29tcGFyZVRvLmRpcmVjdGl2ZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSA9IGV4cG9ydHMuR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHaXRodWJDb250cmlidXRvclNlcnZpY2UoJGxvZywgJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSk7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLmFwaUhvc3QgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHaXRodWJDb250cmlidXRvclNlcnZpY2UsIFt7XG4gICAga2V5OiAnZ2V0Q29udHJpYnV0b3JzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29udHJpYnV0b3JzKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGxpbWl0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAzMDtcblxuICAgICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuYXBpSG9zdCArICcvY29udHJpYnV0b3JzP3Blcl9wYWdlPScgKyBsaW1pdCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgX3RoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicgKyBhbmd1bGFyLnRvSnNvbihlcnJvci5kYXRhLCB0cnVlKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlO1xufSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzIiwiZXhwb3J0IGNsYXNzIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yICgkbG9nLCAkaHR0cCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLmFwaUhvc3QgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJztcbiAgfVxuXG4gIGdldENvbnRyaWJ1dG9ycyhsaW1pdD0zMCkge1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nICsgYW5ndWxhci50b0pzb24oZXJyb3IuZGF0YSwgdHJ1ZSkpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgV2ViRGV2VGVjU2VydmljZSA9IGV4cG9ydHMuV2ViRGV2VGVjU2VydmljZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gV2ViRGV2VGVjU2VydmljZSgpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdlYkRldlRlY1NlcnZpY2UpO1xuXG4gICAgdGhpcy5kYXRhID0gW3tcbiAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxuICAgICAgJ3VybCc6ICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxuICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0Jyb3dzZXJTeW5jJyxcbiAgICAgICd1cmwnOiAnaHR0cDovL2Jyb3dzZXJzeW5jLmlvLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxuICAgICAgJ2xvZ28nOiAnYnJvd3NlcnN5bmMucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdHdWxwSlMnLFxuICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZSBzdHJlYW1pbmcgYnVpbGQgc3lzdGVtLicsXG4gICAgICAnbG9nbyc6ICdndWxwLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnSmFzbWluZScsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9qYXNtaW5lLmdpdGh1Yi5pby8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXG4gICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnS2FybWEnLFxuICAgICAgJ3VybCc6ICdodHRwOi8va2FybWEtcnVubmVyLmdpdGh1Yi5pby8nLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXG4gICAgICAnbG9nbyc6ICdrYXJtYS5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxuICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdFbmQgdG8gZW5kIHRlc3QgZnJhbWV3b3JrIGZvciBBbmd1bGFySlMgYXBwbGljYXRpb25zIGJ1aWx0IG9uIHRvcCBvZiBXZWJEcml2ZXJKUy4nLFxuICAgICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXG4gICAgfSwge1xuICAgICAgJ3RpdGxlJzogJ0Jvb3RzdHJhcCcsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXG4gICAgICAnbG9nbyc6ICdib290c3RyYXAucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdBbmd1bGFyIFVJIEJvb3RzdHJhcCcsXG4gICAgICAndXJsJzogJ2h0dHA6Ly9hbmd1bGFyLXVpLmdpdGh1Yi5pby9ib290c3RyYXAvJyxcbiAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgY29tcG9uZW50cyB3cml0dGVuIGluIHB1cmUgQW5ndWxhckpTIGJ5IHRoZSBBbmd1bGFyVUkgVGVhbS4nLFxuICAgICAgJ2xvZ28nOiAndWktYm9vdHN0cmFwLnBuZydcbiAgICB9LCB7XG4gICAgICAndGl0bGUnOiAnU2FzcyAoTm9kZSknLFxuICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9ub2RlLXNhc3MnLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogJ05vZGUuanMgYmluZGluZyB0byBsaWJzYXNzLCB0aGUgQyB2ZXJzaW9uIG9mIHRoZSBwb3B1bGFyIHN0eWxlc2hlZXQgcHJlcHJvY2Vzc29yLCBTYXNzLicsXG4gICAgICAnbG9nbyc6ICdub2RlLXNhc3MucG5nJ1xuICAgIH0sIHtcbiAgICAgICd0aXRsZSc6ICdFUzYgKEJhYmVsIGZvcm1lcmx5IDZ0bzUpJyxcbiAgICAgICd1cmwnOiAnaHR0cHM6Ly9iYWJlbGpzLmlvLycsXG4gICAgICAnZGVzY3JpcHRpb24nOiAnVHVybnMgRVM2KyBjb2RlIGludG8gdmFuaWxsYSBFUzUsIHNvIHlvdSBjYW4gdXNlIG5leHQgZ2VuZXJhdGlvbiBmZWF0dXJlcyB0b2RheS4nLFxuICAgICAgJ2xvZ28nOiAnYmFiZWwucG5nJ1xuICAgIH1dO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFdlYkRldlRlY1NlcnZpY2UsIFt7XG4gICAga2V5OiAnZ2V0VGVjJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGVjKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gV2ViRGV2VGVjU2VydmljZTtcbn0oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzIiwiZXhwb3J0IGNsYXNzIFdlYkRldlRlY1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXJKUycsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxuICAgICAgICAnbG9nbyc6ICdhbmd1bGFyLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2Jyb3dzZXJzeW5jLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLicsXG4gICAgICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdHdWxwSlMnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9ndWxwanMuY29tLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxuICAgICAgICAnbG9nbyc6ICdndWxwLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdKYXNtaW5lJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vamFzbWluZS5naXRodWIuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXG4gICAgICAgICdsb2dvJzogJ2phc21pbmUucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0thcm1hJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8va2FybWEtcnVubmVyLmdpdGh1Yi5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnU3BlY3RhY3VsYXIgVGVzdCBSdW5uZXIgZm9yIEphdmFTY3JpcHQuJyxcbiAgICAgICAgJ2xvZ28nOiAna2FybWEucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3Byb3RyYWN0b3InLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcbiAgICAgICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQm9vdHN0cmFwJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXG4gICAgICAgICdsb2dvJzogJ2Jvb3RzdHJhcC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQW5ndWxhciBVSSBCb290c3RyYXAnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9hbmd1bGFyLXVpLmdpdGh1Yi5pby9ib290c3RyYXAvJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBjb21wb25lbnRzIHdyaXR0ZW4gaW4gcHVyZSBBbmd1bGFySlMgYnkgdGhlIEFuZ3VsYXJVSSBUZWFtLicsXG4gICAgICAgICdsb2dvJzogJ3VpLWJvb3RzdHJhcC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnU2FzcyAoTm9kZSknLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL25vZGUtc2FzcycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdOb2RlLmpzIGJpbmRpbmcgdG8gbGlic2FzcywgdGhlIEMgdmVyc2lvbiBvZiB0aGUgcG9wdWxhciBzdHlsZXNoZWV0IHByZXByb2Nlc3NvciwgU2Fzcy4nLFxuICAgICAgICAnbG9nbyc6ICdub2RlLXNhc3MucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0VTNiAoQmFiZWwgZm9ybWVybHkgNnRvNSknLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYmFiZWxqcy5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVHVybnMgRVM2KyBjb2RlIGludG8gdmFuaWxsYSBFUzUsIHNvIHlvdSBjYW4gdXNlIG5leHQgZ2VuZXJhdGlvbiBmZWF0dXJlcyB0b2RheS4nLFxuICAgICAgICAnbG9nbyc6ICdiYWJlbC5wbmcnXG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG4gIGdldFRlYygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5OYXZiYXJEaXJlY3RpdmUgPSBOYXZiYXJEaXJlY3RpdmU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIE5hdmJhckRpcmVjdGl2ZSgpIHtcbiAgJ25nSW5qZWN0JztcblxuICB2YXIgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnLFxuICAgIHNjb3BlOiB7XG4gICAgICBjcmVhdGlvbkRhdGU6ICc9J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG59XG5cbnZhciBOYXZiYXJDb250cm9sbGVyID0gZnVuY3Rpb24gTmF2YmFyQ29udHJvbGxlcihtb21lbnQpIHtcbiAgJ25nSW5qZWN0JztcblxuICAvLyBcInRoaXMuY3JlYXRpb25EYXRlXCIgaXMgYXZhaWxhYmxlIGJ5IGRpcmVjdGl2ZSBvcHRpb24gXCJiaW5kVG9Db250cm9sbGVyOiB0cnVlXCJcblxuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTmF2YmFyQ29udHJvbGxlcik7XG5cbiAgdGhpcy5yZWxhdGl2ZURhdGUgPSBtb21lbnQodGhpcy5jcmVhdGlvbkRhdGUpLmZyb21Ob3coKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIE5hdmJhckRpcmVjdGl2ZSgpIHtcbiAgJ25nSW5qZWN0JztcblxuICBsZXQgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnLFxuICAgIHNjb3BlOiB7XG4gICAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBOYXZiYXJDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcbn1cblxuY2xhc3MgTmF2YmFyQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb21lbnQpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgLy8gXCJ0aGlzLmNyZWF0aW9uRGF0ZVwiIGlzIGF2YWlsYWJsZSBieSBkaXJlY3RpdmUgb3B0aW9uIFwiYmluZFRvQ29udHJvbGxlcjogdHJ1ZVwiXG4gICAgdGhpcy5yZWxhdGl2ZURhdGUgPSBtb21lbnQodGhpcy5jcmVhdGlvbkRhdGUpLmZyb21Ob3coKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLk1hbGFya2V5RGlyZWN0aXZlID0gTWFsYXJrZXlEaXJlY3RpdmU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIE1hbGFya2V5RGlyZWN0aXZlKG1hbGFya2V5KSB7XG4gICduZ0luamVjdCc7XG5cbiAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICBleHRyYVZhbHVlczogJz0nXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgbGluazogbGlua0Z1bmMsXG4gICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCB2bSkge1xuICAgIHZhciB3YXRjaGVyID0gdm9pZCAwO1xuICAgIHZhciB0eXBpc3QgPSBtYWxhcmtleShlbFswXSwge1xuICAgICAgdHlwZVNwZWVkOiA0MCxcbiAgICAgIGRlbGV0ZVNwZWVkOiA0MCxcbiAgICAgIHBhdXNlRGVsYXk6IDgwMCxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBwb3N0Zml4OiAnICdcbiAgICB9KTtcblxuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XG5cbiAgICBhbmd1bGFyLmZvckVhY2goc2NvcGUuZXh0cmFWYWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgfSk7XG5cbiAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhbmd1bGFyLmZvckVhY2godm0uY29udHJpYnV0b3JzLCBmdW5jdGlvbiAoY29udHJpYnV0b3IpIHtcbiAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXRjaGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cblxudmFyIE1hbGFya2V5Q29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWFsYXJrZXlDb250cm9sbGVyKCRsb2csIGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYWxhcmtleUNvbnRyb2xsZXIpO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xuXG4gICAgdGhpcy5hY3RpdmF0ZShnaXRodWJDb250cmlidXRvcik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFsYXJrZXlDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ2FjdGl2YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLiRsb2cuaW5mbygnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3Jyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDb250cmlidXRvcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIF90aGlzMi5jb250cmlidXRvcnMgPSBkYXRhO1xuXG4gICAgICAgIHJldHVybiBfdGhpczIuY29udHJpYnV0b3JzO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hbGFya2V5Q29udHJvbGxlcjtcbn0oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIE1hbGFya2V5RGlyZWN0aXZlKG1hbGFya2V5KSB7XG4gICduZ0luamVjdCc7XG5cbiAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICAgIGV4dHJhVmFsdWVzOiAnPSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiAnJm5ic3A7JyxcbiAgICBsaW5rOiBsaW5rRnVuYyxcbiAgICBjb250cm9sbGVyOiBNYWxhcmtleUNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICBmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIHZtKSB7XG4gICAgbGV0IHdhdGNoZXI7XG4gICAgbGV0IHR5cGlzdCA9IG1hbGFya2V5KGVsWzBdLCB7XG4gICAgICB0eXBlU3BlZWQ6IDQwLFxuICAgICAgZGVsZXRlU3BlZWQ6IDQwLFxuICAgICAgcGF1c2VEZWxheTogODAwLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIHBvc3RmaXg6ICcgJ1xuICAgIH0pO1xuXG4gICAgZWwuYWRkQ2xhc3MoJ2FjbWUtbWFsYXJrZXknKTtcblxuICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS5leHRyYVZhbHVlcywgKHZhbHVlKSA9PiB7XG4gICAgICB0eXBpc3QudHlwZSh2YWx1ZSkucGF1c2UoKS5kZWxldGUoKTtcbiAgICB9KTtcblxuICAgIHdhdGNoZXIgPSBzY29wZS4kd2F0Y2goJ3ZtLmNvbnRyaWJ1dG9ycycsICgpID0+IHtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2bS5jb250cmlidXRvcnMsIChjb250cmlidXRvcikgPT4ge1xuICAgICAgICB0eXBpc3QudHlwZShjb250cmlidXRvci5sb2dpbikucGF1c2UoKS5kZWxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2NvcGUuJG9uKCckZGVzdHJveScsICgpID0+IHtcbiAgICAgIHdhdGNoZXIoKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbmNsYXNzIE1hbGFya2V5Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgkbG9nLCBnaXRodWJDb250cmlidXRvcikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuY29udHJpYnV0b3JzID0gW107XG5cbiAgICB0aGlzLmFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKTtcbiAgfVxuXG4gIGFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuJGxvZy5pbmZvKCdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikge1xuICAgIHJldHVybiBnaXRodWJDb250cmlidXRvci5nZXRDb250cmlidXRvcnMoMTApLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuY29udHJpYnV0b3JzID0gZGF0YTtcblxuICAgICAgcmV0dXJuIHRoaXMuY29udHJpYnV0b3JzO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==