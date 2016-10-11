/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var express = __webpack_require__(14);
	var path = __webpack_require__(15);
	var compression = __webpack_require__(16);

	var app = express();
	app.use(compression());

	// serve our static stuff like index.css
	app.use(express.static(path.join(__dirname, 'public')));

	// send all requests to index.html so browserHistory in React Router works
	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    // in here we can make some decisions all at once
	    if (err) {
	      // there was an error somewhere during route matching
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      // we haven't talked about `onEnter` hooks on routes, but before a
	      // route is entered, it can redirect. Here we handle on the server.
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      // if we got props then we matched a route and can render
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      // no errors, no redirect, we just didn't match anything
	      res.status(404).send('Not Found');
	    }
	  });
	});

	function renderPage(appHtml) {
	  return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>My First React Router App</title>\n    <link rel=stylesheet href=/index.css>\n    <div id=app>' + appHtml + '</div>\n    <script src="/bundle.js"></script>\n   ';
	}

	var PORT = process.env.PORT || 8080;
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactRouter = __webpack_require__(3);

	var _App = __webpack_require__(5);

	var _App2 = _interopRequireDefault(_App);

	var _Clinics = __webpack_require__(10);

	var _Clinics2 = _interopRequireDefault(_Clinics);

	var _Home = __webpack_require__(7);

	var _Home2 = _interopRequireDefault(_Home);

	var _Patients = __webpack_require__(12);

	var _Patients2 = _interopRequireDefault(_Patients);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = React.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  React.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	  React.createElement(_reactRouter.Route, { path: '/clinics', component: _Clinics2.default }),
	  React.createElement(_reactRouter.Route, { path: '/clinics/:clinicId', component: _Patients2.default })
	);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Footer = __webpack_require__(6);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _Home = __webpack_require__(7);

	var _Home2 = _interopRequireDefault(_Home);

	var _NavBar = __webpack_require__(8);

	var _NavBar2 = _interopRequireDefault(_NavBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'App',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_NavBar2.default, null),
	      this.props.children || _react2.default.createElement(_Home2.default, null),
	      _react2.default.createElement(_Footer2.default, null)
	    );
	  }
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "Footer",
	  render: function render() {
	    return _react2.default.createElement(
	      "footer",
	      { className: "container" },
	      _react2.default.createElement(
	        "div",
	        { className: "row" },
	        _react2.default.createElement(
	          "div",
	          { className: "col-lg-12" },
	          _react2.default.createElement(
	            "p",
	            null,
	            "Copyright \xA9 Linked Ladies 2016"
	          )
	        )
	      )
	    );
	  }
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "Home",
	  render: function render() {
	    return _react2.default.createElement("div", { id: "home" });
	  }
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(9);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'NavBar',
	  render: function render() {
	    return _react2.default.createElement(
	      'nav',
	      { className: 'navbar navbar-default navbar-fixed-top', role: 'navigation' },
	      _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'navbar-header' },
	            _react2.default.createElement(
	              'button',
	              { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar', 'aria-expanded': 'false', 'aria-controls': 'navbar' },
	              _react2.default.createElement(
	                'span',
	                { className: 'sr-only' },
	                'Toggle navigation'
	              ),
	              _react2.default.createElement('span', { className: 'icon-bar' }),
	              _react2.default.createElement('span', { className: 'icon-bar' }),
	              _react2.default.createElement('span', { className: 'icon-bar' })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { id: 'navbar', className: 'collapse navbar-collapse' },
	            _react2.default.createElement(
	              'ul',
	              { className: 'nav navbar-nav' },
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  _NavLink2.default,
	                  { to: '/', onlyActiveOnIndex: true },
	                  'Home'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  _NavLink2.default,
	                  { to: '/clinics' },
	                  'Clinics'
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'NavLink',
	  render: function render() {
	    return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
	  }
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Clinic = __webpack_require__(11);

	var _Clinic2 = _interopRequireDefault(_Clinic);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Clinics = _react2.default.createClass({
	  displayName: 'Clinics',

	  getInitialState: function getInitialState() {
	    return {
	      data: []
	    };
	  },

	  loadClinics: function loadClinics() {
	    $.ajax({
	      url: 'http://localhost:8000/clinics',
	      dataType: 'json',
	      success: function (data) {
	        this.setState({ data: data });
	        $('#clinics').fadeTo('fast', 1);
	      }.bind(this),
	      error: function (xhr, status, err) {
	        console.error('#GET Error', status, err.toString());
	      }.bind(this)
	    });
	  },

	  componentDidMount: function componentDidMount() {
	    this.loadClinics();
	  },

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { id: 'clinics', className: 'container' },
	      _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        this.state.data.map(function (clinic) {
	          return _react2.default.createElement(_Clinic2.default, { key: clinic.id, clinic: clinic });
	        })
	      )
	    );
	  }
	});

	module.exports = Clinics;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(9);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _Patients = __webpack_require__(12);

	var _Patients2 = _interopRequireDefault(_Patients);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Clinic',

	  getInitialState: function getInitialState() {
	    return {
	      clinic: this.props.clinic
	    };
	  },

	  render: function render() {
	    var clinic = this.state.clinic;
	    return _react2.default.createElement(
	      'div',
	      { className: 'col-xs-3' },
	      _react2.default.createElement(
	        _NavLink2.default,
	        { to: '/clinics/' + clinic.id, className: 'clinic' },
	        _react2.default.createElement('i', { className: 'fa fa-trash-o', 'aria-hidden': 'true' }),
	        _react2.default.createElement(
	          'h3',
	          null,
	          clinic.name
	        ),
	        _react2.default.createElement(
	          'h4',
	          null,
	          clinic.description
	        )
	      )
	    );
	  }
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Patient = __webpack_require__(13);

	var _Patient2 = _interopRequireDefault(_Patient);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Patients',

	  getInitialState: function getInitialState() {
	    return {
	      data: []
	    };
	  },

	  loadPatients: function loadPatients() {
	    $.ajax({
	      url: 'http://localhost:8000/clinics/' + this.props.params.clinicId,
	      dataType: 'json',
	      success: function (data) {
	        this.setState({ data: data });
	        $('#patients').fadeTo('fast', 1);
	      }.bind(this),
	      error: function (xhr, status, err) {
	        console.error('#GET Error', status, err.toString());
	      }.bind(this)
	    });
	  },

	  componentDidMount: function componentDidMount() {
	    this.loadPatients();
	  },

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { id: 'patients', className: 'container' },
	      _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        this.state.data.map(function (patient) {
	          return _react2.default.createElement(_Patient2.default, { key: patient.id, patient: patient });
	        })
	      )
	    );
	  }
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "Patient",

	  getInitialState: function getInitialState() {
	    return {
	      patient: this.props.patient
	    };
	  },

	  render: function render() {
	    var patient = this.state.patient;
	    return _react2.default.createElement(
	      "div",
	      { className: "col-xs-3" },
	      _react2.default.createElement(
	        "div",
	        { className: "patient" },
	        _react2.default.createElement("i", { className: "fa fa-trash-o", "aria-hidden": "true" }),
	        _react2.default.createElement(
	          "h3",
	          null,
	          patient.firstName
	        ),
	        _react2.default.createElement(
	          "h4",
	          null,
	          patient.lastName
	        )
	      )
	    );
	  }
	});

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ }
/******/ ]);