//banner

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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.install = install;
	
	var _components = __webpack_require__(3);
	
	var components = _interopRequireWildcard(_components);
	
	var _semver = __webpack_require__(2);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// import Vue from 'vue'
	function install(Vue) {
	  var htmlRegex = /^html:/i;
	  Vue.config.isReservedTag = function (tag) {
	    return htmlRegex.test(tag);
	  };
	  Vue.config.parsePlatformTagName = function (tag) {
	    return tag.replace(htmlRegex, '');
	  };
	
	  for (var name in components) {
	    Vue.component(name, components[name]);
	  }
	
	  /* istanbul ignore next */
	  if (true) {
	    console.log('[Vue Renderer] Registered components: ' + ('[' + Object.keys(components).join(', ') + '].'));
	  }
	}
	
	/* eslint-disable no-undef */
	if (typeof Vue === 'undefined') {
	  console.error('[Vue Renderer] `Vue` is not defined!');
	} else {
	  /* istanbul ignore next */
	  if (("development") === 'development' && _semver2.default.lt(Vue.version, '2.1.5')) {
	    console.warn('[Vue Renderer] The version of Vue should be ' + ('greater than 2.1.5, current is ' + Vue.version + '.'));
	  }
	
	  Vue.use({ install: install });
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {exports = module.exports = SemVer;
	
	// The debug function is excluded entirely from the minified version.
	/* nomin */ var debug;
	/* nomin */ if (typeof process === 'object' &&
	    /* nomin */ ({"NODE_ENV":"development"}) &&
	    /* nomin */ ({"NODE_ENV":"development"}).NODE_DEBUG &&
	    /* nomin */ /\bsemver\b/i.test(({"NODE_ENV":"development"}).NODE_DEBUG))
	  /* nomin */ debug = function() {
	    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
	    /* nomin */ args.unshift('SEMVER');
	    /* nomin */ console.log.apply(console, args);
	    /* nomin */ };
	/* nomin */ else
	  /* nomin */ debug = function() {};
	
	// Note: this is the semver.org version of the spec that it implements
	// Not necessarily the package version of this code.
	exports.SEMVER_SPEC_VERSION = '2.0.0';
	
	var MAX_LENGTH = 256;
	var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
	
	// The actual regexps go on exports.re
	var re = exports.re = [];
	var src = exports.src = [];
	var R = 0;
	
	// The following Regular Expressions can be used for tokenizing,
	// validating, and parsing SemVer version strings.
	
	// ## Numeric Identifier
	// A single `0`, or a non-zero digit followed by zero or more digits.
	
	var NUMERICIDENTIFIER = R++;
	src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
	var NUMERICIDENTIFIERLOOSE = R++;
	src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';
	
	
	// ## Non-numeric Identifier
	// Zero or more digits, followed by a letter or hyphen, and then zero or
	// more letters, digits, or hyphens.
	
	var NONNUMERICIDENTIFIER = R++;
	src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
	
	
	// ## Main Version
	// Three dot-separated numeric identifiers.
	
	var MAINVERSION = R++;
	src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
	                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
	                   '(' + src[NUMERICIDENTIFIER] + ')';
	
	var MAINVERSIONLOOSE = R++;
	src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
	                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
	                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';
	
	// ## Pre-release Version Identifier
	// A numeric identifier, or a non-numeric identifier.
	
	var PRERELEASEIDENTIFIER = R++;
	src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
	                            '|' + src[NONNUMERICIDENTIFIER] + ')';
	
	var PRERELEASEIDENTIFIERLOOSE = R++;
	src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
	                                 '|' + src[NONNUMERICIDENTIFIER] + ')';
	
	
	// ## Pre-release Version
	// Hyphen, followed by one or more dot-separated pre-release version
	// identifiers.
	
	var PRERELEASE = R++;
	src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
	                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';
	
	var PRERELEASELOOSE = R++;
	src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
	                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';
	
	// ## Build Metadata Identifier
	// Any combination of digits, letters, or hyphens.
	
	var BUILDIDENTIFIER = R++;
	src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';
	
	// ## Build Metadata
	// Plus sign, followed by one or more period-separated build metadata
	// identifiers.
	
	var BUILD = R++;
	src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
	             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';
	
	
	// ## Full Version String
	// A main version, followed optionally by a pre-release version and
	// build metadata.
	
	// Note that the only major, minor, patch, and pre-release sections of
	// the version string are capturing groups.  The build metadata is not a
	// capturing group, because it should not ever be used in version
	// comparison.
	
	var FULL = R++;
	var FULLPLAIN = 'v?' + src[MAINVERSION] +
	                src[PRERELEASE] + '?' +
	                src[BUILD] + '?';
	
	src[FULL] = '^' + FULLPLAIN + '$';
	
	// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
	// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
	// common in the npm registry.
	var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
	                 src[PRERELEASELOOSE] + '?' +
	                 src[BUILD] + '?';
	
	var LOOSE = R++;
	src[LOOSE] = '^' + LOOSEPLAIN + '$';
	
	var GTLT = R++;
	src[GTLT] = '((?:<|>)?=?)';
	
	// Something like "2.*" or "1.2.x".
	// Note that "x.x" is a valid xRange identifer, meaning "any version"
	// Only the first item is strictly required.
	var XRANGEIDENTIFIERLOOSE = R++;
	src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
	var XRANGEIDENTIFIER = R++;
	src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';
	
	var XRANGEPLAIN = R++;
	src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
	                   '(?:' + src[PRERELEASE] + ')?' +
	                   src[BUILD] + '?' +
	                   ')?)?';
	
	var XRANGEPLAINLOOSE = R++;
	src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
	                        '(?:' + src[PRERELEASELOOSE] + ')?' +
	                        src[BUILD] + '?' +
	                        ')?)?';
	
	var XRANGE = R++;
	src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
	var XRANGELOOSE = R++;
	src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';
	
	// Tilde ranges.
	// Meaning is "reasonably at or greater than"
	var LONETILDE = R++;
	src[LONETILDE] = '(?:~>?)';
	
	var TILDETRIM = R++;
	src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
	re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
	var tildeTrimReplace = '$1~';
	
	var TILDE = R++;
	src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
	var TILDELOOSE = R++;
	src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';
	
	// Caret ranges.
	// Meaning is "at least and backwards compatible with"
	var LONECARET = R++;
	src[LONECARET] = '(?:\\^)';
	
	var CARETTRIM = R++;
	src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
	re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
	var caretTrimReplace = '$1^';
	
	var CARET = R++;
	src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
	var CARETLOOSE = R++;
	src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';
	
	// A simple gt/lt/eq thing, or just "" to indicate "any version"
	var COMPARATORLOOSE = R++;
	src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
	var COMPARATOR = R++;
	src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';
	
	
	// An expression to strip any whitespace between the gtlt and the thing
	// it modifies, so that `> 1.2.3` ==> `>1.2.3`
	var COMPARATORTRIM = R++;
	src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
	                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';
	
	// this one has to use the /g flag
	re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
	var comparatorTrimReplace = '$1$2$3';
	
	
	// Something like `1.2.3 - 1.2.4`
	// Note that these all use the loose form, because they'll be
	// checked against either the strict or loose comparator form
	// later.
	var HYPHENRANGE = R++;
	src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
	                   '\\s+-\\s+' +
	                   '(' + src[XRANGEPLAIN] + ')' +
	                   '\\s*$';
	
	var HYPHENRANGELOOSE = R++;
	src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
	                        '\\s+-\\s+' +
	                        '(' + src[XRANGEPLAINLOOSE] + ')' +
	                        '\\s*$';
	
	// Star ranges basically just allow anything at all.
	var STAR = R++;
	src[STAR] = '(<|>)?=?\\s*\\*';
	
	// Compile to actual regexp objects.
	// All are flag-free, unless they were created above with a flag.
	for (var i = 0; i < R; i++) {
	  debug(i, src[i]);
	  if (!re[i])
	    re[i] = new RegExp(src[i]);
	}
	
	exports.parse = parse;
	function parse(version, loose) {
	  if (version instanceof SemVer)
	    return version;
	
	  if (typeof version !== 'string')
	    return null;
	
	  if (version.length > MAX_LENGTH)
	    return null;
	
	  var r = loose ? re[LOOSE] : re[FULL];
	  if (!r.test(version))
	    return null;
	
	  try {
	    return new SemVer(version, loose);
	  } catch (er) {
	    return null;
	  }
	}
	
	exports.valid = valid;
	function valid(version, loose) {
	  var v = parse(version, loose);
	  return v ? v.version : null;
	}
	
	
	exports.clean = clean;
	function clean(version, loose) {
	  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
	  return s ? s.version : null;
	}
	
	exports.SemVer = SemVer;
	
	function SemVer(version, loose) {
	  if (version instanceof SemVer) {
	    if (version.loose === loose)
	      return version;
	    else
	      version = version.version;
	  } else if (typeof version !== 'string') {
	    throw new TypeError('Invalid Version: ' + version);
	  }
	
	  if (version.length > MAX_LENGTH)
	    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')
	
	  if (!(this instanceof SemVer))
	    return new SemVer(version, loose);
	
	  debug('SemVer', version, loose);
	  this.loose = loose;
	  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);
	
	  if (!m)
	    throw new TypeError('Invalid Version: ' + version);
	
	  this.raw = version;
	
	  // these are actually numbers
	  this.major = +m[1];
	  this.minor = +m[2];
	  this.patch = +m[3];
	
	  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
	    throw new TypeError('Invalid major version')
	
	  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
	    throw new TypeError('Invalid minor version')
	
	  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
	    throw new TypeError('Invalid patch version')
	
	  // numberify any prerelease numeric ids
	  if (!m[4])
	    this.prerelease = [];
	  else
	    this.prerelease = m[4].split('.').map(function(id) {
	      if (/^[0-9]+$/.test(id)) {
	        var num = +id;
	        if (num >= 0 && num < MAX_SAFE_INTEGER)
	          return num;
	      }
	      return id;
	    });
	
	  this.build = m[5] ? m[5].split('.') : [];
	  this.format();
	}
	
	SemVer.prototype.format = function() {
	  this.version = this.major + '.' + this.minor + '.' + this.patch;
	  if (this.prerelease.length)
	    this.version += '-' + this.prerelease.join('.');
	  return this.version;
	};
	
	SemVer.prototype.toString = function() {
	  return this.version;
	};
	
	SemVer.prototype.compare = function(other) {
	  debug('SemVer.compare', this.version, this.loose, other);
	  if (!(other instanceof SemVer))
	    other = new SemVer(other, this.loose);
	
	  return this.compareMain(other) || this.comparePre(other);
	};
	
	SemVer.prototype.compareMain = function(other) {
	  if (!(other instanceof SemVer))
	    other = new SemVer(other, this.loose);
	
	  return compareIdentifiers(this.major, other.major) ||
	         compareIdentifiers(this.minor, other.minor) ||
	         compareIdentifiers(this.patch, other.patch);
	};
	
	SemVer.prototype.comparePre = function(other) {
	  if (!(other instanceof SemVer))
	    other = new SemVer(other, this.loose);
	
	  // NOT having a prerelease is > having one
	  if (this.prerelease.length && !other.prerelease.length)
	    return -1;
	  else if (!this.prerelease.length && other.prerelease.length)
	    return 1;
	  else if (!this.prerelease.length && !other.prerelease.length)
	    return 0;
	
	  var i = 0;
	  do {
	    var a = this.prerelease[i];
	    var b = other.prerelease[i];
	    debug('prerelease compare', i, a, b);
	    if (a === undefined && b === undefined)
	      return 0;
	    else if (b === undefined)
	      return 1;
	    else if (a === undefined)
	      return -1;
	    else if (a === b)
	      continue;
	    else
	      return compareIdentifiers(a, b);
	  } while (++i);
	};
	
	// preminor will bump the version up to the next minor release, and immediately
	// down to pre-release. premajor and prepatch work the same way.
	SemVer.prototype.inc = function(release, identifier) {
	  switch (release) {
	    case 'premajor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor = 0;
	      this.major++;
	      this.inc('pre', identifier);
	      break;
	    case 'preminor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor++;
	      this.inc('pre', identifier);
	      break;
	    case 'prepatch':
	      // If this is already a prerelease, it will bump to the next version
	      // drop any prereleases that might already exist, since they are not
	      // relevant at this point.
	      this.prerelease.length = 0;
	      this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	    // If the input is a non-prerelease version, this acts the same as
	    // prepatch.
	    case 'prerelease':
	      if (this.prerelease.length === 0)
	        this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	
	    case 'major':
	      // If this is a pre-major version, bump up to the same major version.
	      // Otherwise increment major.
	      // 1.0.0-5 bumps to 1.0.0
	      // 1.1.0 bumps to 2.0.0
	      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
	        this.major++;
	      this.minor = 0;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'minor':
	      // If this is a pre-minor version, bump up to the same minor version.
	      // Otherwise increment minor.
	      // 1.2.0-5 bumps to 1.2.0
	      // 1.2.1 bumps to 1.3.0
	      if (this.patch !== 0 || this.prerelease.length === 0)
	        this.minor++;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'patch':
	      // If this is not a pre-release version, it will increment the patch.
	      // If it is a pre-release it will bump up to the same patch version.
	      // 1.2.0-5 patches to 1.2.0
	      // 1.2.0 patches to 1.2.1
	      if (this.prerelease.length === 0)
	        this.patch++;
	      this.prerelease = [];
	      break;
	    // This probably shouldn't be used publicly.
	    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
	    case 'pre':
	      if (this.prerelease.length === 0)
	        this.prerelease = [0];
	      else {
	        var i = this.prerelease.length;
	        while (--i >= 0) {
	          if (typeof this.prerelease[i] === 'number') {
	            this.prerelease[i]++;
	            i = -2;
	          }
	        }
	        if (i === -1) // didn't increment anything
	          this.prerelease.push(0);
	      }
	      if (identifier) {
	        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
	        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
	        if (this.prerelease[0] === identifier) {
	          if (isNaN(this.prerelease[1]))
	            this.prerelease = [identifier, 0];
	        } else
	          this.prerelease = [identifier, 0];
	      }
	      break;
	
	    default:
	      throw new Error('invalid increment argument: ' + release);
	  }
	  this.format();
	  this.raw = this.version;
	  return this;
	};
	
	exports.inc = inc;
	function inc(version, release, loose, identifier) {
	  if (typeof(loose) === 'string') {
	    identifier = loose;
	    loose = undefined;
	  }
	
	  try {
	    return new SemVer(version, loose).inc(release, identifier).version;
	  } catch (er) {
	    return null;
	  }
	}
	
	exports.diff = diff;
	function diff(version1, version2) {
	  if (eq(version1, version2)) {
	    return null;
	  } else {
	    var v1 = parse(version1);
	    var v2 = parse(version2);
	    if (v1.prerelease.length || v2.prerelease.length) {
	      for (var key in v1) {
	        if (key === 'major' || key === 'minor' || key === 'patch') {
	          if (v1[key] !== v2[key]) {
	            return 'pre'+key;
	          }
	        }
	      }
	      return 'prerelease';
	    }
	    for (var key in v1) {
	      if (key === 'major' || key === 'minor' || key === 'patch') {
	        if (v1[key] !== v2[key]) {
	          return key;
	        }
	      }
	    }
	  }
	}
	
	exports.compareIdentifiers = compareIdentifiers;
	
	var numeric = /^[0-9]+$/;
	function compareIdentifiers(a, b) {
	  var anum = numeric.test(a);
	  var bnum = numeric.test(b);
	
	  if (anum && bnum) {
	    a = +a;
	    b = +b;
	  }
	
	  return (anum && !bnum) ? -1 :
	         (bnum && !anum) ? 1 :
	         a < b ? -1 :
	         a > b ? 1 :
	         0;
	}
	
	exports.rcompareIdentifiers = rcompareIdentifiers;
	function rcompareIdentifiers(a, b) {
	  return compareIdentifiers(b, a);
	}
	
	exports.major = major;
	function major(a, loose) {
	  return new SemVer(a, loose).major;
	}
	
	exports.minor = minor;
	function minor(a, loose) {
	  return new SemVer(a, loose).minor;
	}
	
	exports.patch = patch;
	function patch(a, loose) {
	  return new SemVer(a, loose).patch;
	}
	
	exports.compare = compare;
	function compare(a, b, loose) {
	  return new SemVer(a, loose).compare(b);
	}
	
	exports.compareLoose = compareLoose;
	function compareLoose(a, b) {
	  return compare(a, b, true);
	}
	
	exports.rcompare = rcompare;
	function rcompare(a, b, loose) {
	  return compare(b, a, loose);
	}
	
	exports.sort = sort;
	function sort(list, loose) {
	  return list.sort(function(a, b) {
	    return exports.compare(a, b, loose);
	  });
	}
	
	exports.rsort = rsort;
	function rsort(list, loose) {
	  return list.sort(function(a, b) {
	    return exports.rcompare(a, b, loose);
	  });
	}
	
	exports.gt = gt;
	function gt(a, b, loose) {
	  return compare(a, b, loose) > 0;
	}
	
	exports.lt = lt;
	function lt(a, b, loose) {
	  return compare(a, b, loose) < 0;
	}
	
	exports.eq = eq;
	function eq(a, b, loose) {
	  return compare(a, b, loose) === 0;
	}
	
	exports.neq = neq;
	function neq(a, b, loose) {
	  return compare(a, b, loose) !== 0;
	}
	
	exports.gte = gte;
	function gte(a, b, loose) {
	  return compare(a, b, loose) >= 0;
	}
	
	exports.lte = lte;
	function lte(a, b, loose) {
	  return compare(a, b, loose) <= 0;
	}
	
	exports.cmp = cmp;
	function cmp(a, op, b, loose) {
	  var ret;
	  switch (op) {
	    case '===':
	      if (typeof a === 'object') a = a.version;
	      if (typeof b === 'object') b = b.version;
	      ret = a === b;
	      break;
	    case '!==':
	      if (typeof a === 'object') a = a.version;
	      if (typeof b === 'object') b = b.version;
	      ret = a !== b;
	      break;
	    case '': case '=': case '==': ret = eq(a, b, loose); break;
	    case '!=': ret = neq(a, b, loose); break;
	    case '>': ret = gt(a, b, loose); break;
	    case '>=': ret = gte(a, b, loose); break;
	    case '<': ret = lt(a, b, loose); break;
	    case '<=': ret = lte(a, b, loose); break;
	    default: throw new TypeError('Invalid operator: ' + op);
	  }
	  return ret;
	}
	
	exports.Comparator = Comparator;
	function Comparator(comp, loose) {
	  if (comp instanceof Comparator) {
	    if (comp.loose === loose)
	      return comp;
	    else
	      comp = comp.value;
	  }
	
	  if (!(this instanceof Comparator))
	    return new Comparator(comp, loose);
	
	  debug('comparator', comp, loose);
	  this.loose = loose;
	  this.parse(comp);
	
	  if (this.semver === ANY)
	    this.value = '';
	  else
	    this.value = this.operator + this.semver.version;
	
	  debug('comp', this);
	}
	
	var ANY = {};
	Comparator.prototype.parse = function(comp) {
	  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var m = comp.match(r);
	
	  if (!m)
	    throw new TypeError('Invalid comparator: ' + comp);
	
	  this.operator = m[1];
	  if (this.operator === '=')
	    this.operator = '';
	
	  // if it literally is just '>' or '' then allow anything.
	  if (!m[2])
	    this.semver = ANY;
	  else
	    this.semver = new SemVer(m[2], this.loose);
	};
	
	Comparator.prototype.toString = function() {
	  return this.value;
	};
	
	Comparator.prototype.test = function(version) {
	  debug('Comparator.test', version, this.loose);
	
	  if (this.semver === ANY)
	    return true;
	
	  if (typeof version === 'string')
	    version = new SemVer(version, this.loose);
	
	  return cmp(version, this.operator, this.semver, this.loose);
	};
	
	
	exports.Range = Range;
	function Range(range, loose) {
	  if ((range instanceof Range) && range.loose === loose)
	    return range;
	
	  if (!(this instanceof Range))
	    return new Range(range, loose);
	
	  this.loose = loose;
	
	  // First, split based on boolean or ||
	  this.raw = range;
	  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
	    return this.parseRange(range.trim());
	  }, this).filter(function(c) {
	    // throw out any that are not relevant for whatever reason
	    return c.length;
	  });
	
	  if (!this.set.length) {
	    throw new TypeError('Invalid SemVer Range: ' + range);
	  }
	
	  this.format();
	}
	
	Range.prototype.format = function() {
	  this.range = this.set.map(function(comps) {
	    return comps.join(' ').trim();
	  }).join('||').trim();
	  return this.range;
	};
	
	Range.prototype.toString = function() {
	  return this.range;
	};
	
	Range.prototype.parseRange = function(range) {
	  var loose = this.loose;
	  range = range.trim();
	  debug('range', range, loose);
	  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
	  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
	  range = range.replace(hr, hyphenReplace);
	  debug('hyphen replace', range);
	  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
	  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
	  debug('comparator trim', range, re[COMPARATORTRIM]);
	
	  // `~ 1.2.3` => `~1.2.3`
	  range = range.replace(re[TILDETRIM], tildeTrimReplace);
	
	  // `^ 1.2.3` => `^1.2.3`
	  range = range.replace(re[CARETTRIM], caretTrimReplace);
	
	  // normalize spaces
	  range = range.split(/\s+/).join(' ');
	
	  // At this point, the range is completely trimmed and
	  // ready to be split into comparators.
	
	  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var set = range.split(' ').map(function(comp) {
	    return parseComparator(comp, loose);
	  }).join(' ').split(/\s+/);
	  if (this.loose) {
	    // in loose mode, throw out any that are not valid comparators
	    set = set.filter(function(comp) {
	      return !!comp.match(compRe);
	    });
	  }
	  set = set.map(function(comp) {
	    return new Comparator(comp, loose);
	  });
	
	  return set;
	};
	
	// Mostly just for testing and legacy API reasons
	exports.toComparators = toComparators;
	function toComparators(range, loose) {
	  return new Range(range, loose).set.map(function(comp) {
	    return comp.map(function(c) {
	      return c.value;
	    }).join(' ').trim().split(' ');
	  });
	}
	
	// comprised of xranges, tildes, stars, and gtlt's at this point.
	// already replaced the hyphen ranges
	// turn into a set of JUST comparators.
	function parseComparator(comp, loose) {
	  debug('comp', comp);
	  comp = replaceCarets(comp, loose);
	  debug('caret', comp);
	  comp = replaceTildes(comp, loose);
	  debug('tildes', comp);
	  comp = replaceXRanges(comp, loose);
	  debug('xrange', comp);
	  comp = replaceStars(comp, loose);
	  debug('stars', comp);
	  return comp;
	}
	
	function isX(id) {
	  return !id || id.toLowerCase() === 'x' || id === '*';
	}
	
	// ~, ~> --> * (any, kinda silly)
	// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
	// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
	// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
	// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
	// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
	function replaceTildes(comp, loose) {
	  return comp.trim().split(/\s+/).map(function(comp) {
	    return replaceTilde(comp, loose);
	  }).join(' ');
	}
	
	function replaceTilde(comp, loose) {
	  var r = loose ? re[TILDELOOSE] : re[TILDE];
	  return comp.replace(r, function(_, M, m, p, pr) {
	    debug('tilde', comp, _, M, m, p, pr);
	    var ret;
	
	    if (isX(M))
	      ret = '';
	    else if (isX(m))
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    else if (isX(p))
	      // ~1.2 == >=1.2.0 <1.3.0
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	    else if (pr) {
	      debug('replaceTilde pr', pr);
	      if (pr.charAt(0) !== '-')
	        pr = '-' + pr;
	      ret = '>=' + M + '.' + m + '.' + p + pr +
	            ' <' + M + '.' + (+m + 1) + '.0';
	    } else
	      // ~1.2.3 == >=1.2.3 <1.3.0
	      ret = '>=' + M + '.' + m + '.' + p +
	            ' <' + M + '.' + (+m + 1) + '.0';
	
	    debug('tilde return', ret);
	    return ret;
	  });
	}
	
	// ^ --> * (any, kinda silly)
	// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
	// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
	// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
	// ^1.2.3 --> >=1.2.3 <2.0.0
	// ^1.2.0 --> >=1.2.0 <2.0.0
	function replaceCarets(comp, loose) {
	  return comp.trim().split(/\s+/).map(function(comp) {
	    return replaceCaret(comp, loose);
	  }).join(' ');
	}
	
	function replaceCaret(comp, loose) {
	  debug('caret', comp, loose);
	  var r = loose ? re[CARETLOOSE] : re[CARET];
	  return comp.replace(r, function(_, M, m, p, pr) {
	    debug('caret', comp, _, M, m, p, pr);
	    var ret;
	
	    if (isX(M))
	      ret = '';
	    else if (isX(m))
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    else if (isX(p)) {
	      if (M === '0')
	        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	      else
	        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
	    } else if (pr) {
	      debug('replaceCaret pr', pr);
	      if (pr.charAt(0) !== '-')
	        pr = '-' + pr;
	      if (M === '0') {
	        if (m === '0')
	          ret = '>=' + M + '.' + m + '.' + p + pr +
	                ' <' + M + '.' + m + '.' + (+p + 1);
	        else
	          ret = '>=' + M + '.' + m + '.' + p + pr +
	                ' <' + M + '.' + (+m + 1) + '.0';
	      } else
	        ret = '>=' + M + '.' + m + '.' + p + pr +
	              ' <' + (+M + 1) + '.0.0';
	    } else {
	      debug('no pr');
	      if (M === '0') {
	        if (m === '0')
	          ret = '>=' + M + '.' + m + '.' + p +
	                ' <' + M + '.' + m + '.' + (+p + 1);
	        else
	          ret = '>=' + M + '.' + m + '.' + p +
	                ' <' + M + '.' + (+m + 1) + '.0';
	      } else
	        ret = '>=' + M + '.' + m + '.' + p +
	              ' <' + (+M + 1) + '.0.0';
	    }
	
	    debug('caret return', ret);
	    return ret;
	  });
	}
	
	function replaceXRanges(comp, loose) {
	  debug('replaceXRanges', comp, loose);
	  return comp.split(/\s+/).map(function(comp) {
	    return replaceXRange(comp, loose);
	  }).join(' ');
	}
	
	function replaceXRange(comp, loose) {
	  comp = comp.trim();
	  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
	  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
	    debug('xRange', comp, ret, gtlt, M, m, p, pr);
	    var xM = isX(M);
	    var xm = xM || isX(m);
	    var xp = xm || isX(p);
	    var anyX = xp;
	
	    if (gtlt === '=' && anyX)
	      gtlt = '';
	
	    if (xM) {
	      if (gtlt === '>' || gtlt === '<') {
	        // nothing is allowed
	        ret = '<0.0.0';
	      } else {
	        // nothing is forbidden
	        ret = '*';
	      }
	    } else if (gtlt && anyX) {
	      // replace X with 0
	      if (xm)
	        m = 0;
	      if (xp)
	        p = 0;
	
	      if (gtlt === '>') {
	        // >1 => >=2.0.0
	        // >1.2 => >=1.3.0
	        // >1.2.3 => >= 1.2.4
	        gtlt = '>=';
	        if (xm) {
	          M = +M + 1;
	          m = 0;
	          p = 0;
	        } else if (xp) {
	          m = +m + 1;
	          p = 0;
	        }
	      } else if (gtlt === '<=') {
	        // <=0.7.x is actually <0.8.0, since any 0.7.x should
	        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
	        gtlt = '<';
	        if (xm)
	          M = +M + 1;
	        else
	          m = +m + 1;
	      }
	
	      ret = gtlt + M + '.' + m + '.' + p;
	    } else if (xm) {
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    } else if (xp) {
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	    }
	
	    debug('xRange return', ret);
	
	    return ret;
	  });
	}
	
	// Because * is AND-ed with everything else in the comparator,
	// and '' means "any version", just remove the *s entirely.
	function replaceStars(comp, loose) {
	  debug('replaceStars', comp, loose);
	  // Looseness is ignored here.  star is always as loose as it gets!
	  return comp.trim().replace(re[STAR], '');
	}
	
	// This function is passed to string.replace(re[HYPHENRANGE])
	// M, m, patch, prerelease, build
	// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
	// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
	// 1.2 - 3.4 => >=1.2.0 <3.5.0
	function hyphenReplace($0,
	                       from, fM, fm, fp, fpr, fb,
	                       to, tM, tm, tp, tpr, tb) {
	
	  if (isX(fM))
	    from = '';
	  else if (isX(fm))
	    from = '>=' + fM + '.0.0';
	  else if (isX(fp))
	    from = '>=' + fM + '.' + fm + '.0';
	  else
	    from = '>=' + from;
	
	  if (isX(tM))
	    to = '';
	  else if (isX(tm))
	    to = '<' + (+tM + 1) + '.0.0';
	  else if (isX(tp))
	    to = '<' + tM + '.' + (+tm + 1) + '.0';
	  else if (tpr)
	    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
	  else
	    to = '<=' + to;
	
	  return (from + ' ' + to).trim();
	}
	
	
	// if ANY of the sets match ALL of its comparators, then pass
	Range.prototype.test = function(version) {
	  if (!version)
	    return false;
	
	  if (typeof version === 'string')
	    version = new SemVer(version, this.loose);
	
	  for (var i = 0; i < this.set.length; i++) {
	    if (testSet(this.set[i], version))
	      return true;
	  }
	  return false;
	};
	
	function testSet(set, version) {
	  for (var i = 0; i < set.length; i++) {
	    if (!set[i].test(version))
	      return false;
	  }
	
	  if (version.prerelease.length) {
	    // Find the set of versions that are allowed to have prereleases
	    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
	    // That should allow `1.2.3-pr.2` to pass.
	    // However, `1.2.4-alpha.notready` should NOT be allowed,
	    // even though it's within the range set by the comparators.
	    for (var i = 0; i < set.length; i++) {
	      debug(set[i].semver);
	      if (set[i].semver === ANY)
	        continue;
	
	      if (set[i].semver.prerelease.length > 0) {
	        var allowed = set[i].semver;
	        if (allowed.major === version.major &&
	            allowed.minor === version.minor &&
	            allowed.patch === version.patch)
	          return true;
	      }
	    }
	
	    // Version has a -pre, but it's not one of the ones we like.
	    return false;
	  }
	
	  return true;
	}
	
	exports.satisfies = satisfies;
	function satisfies(version, range, loose) {
	  try {
	    range = new Range(range, loose);
	  } catch (er) {
	    return false;
	  }
	  return range.test(version);
	}
	
	exports.maxSatisfying = maxSatisfying;
	function maxSatisfying(versions, range, loose) {
	  return versions.filter(function(version) {
	    return satisfies(version, range, loose);
	  }).sort(function(a, b) {
	    return rcompare(a, b, loose);
	  })[0] || null;
	}
	
	exports.minSatisfying = minSatisfying;
	function minSatisfying(versions, range, loose) {
	  return versions.filter(function(version) {
	    return satisfies(version, range, loose);
	  }).sort(function(a, b) {
	    return compare(a, b, loose);
	  })[0] || null;
	}
	
	exports.validRange = validRange;
	function validRange(range, loose) {
	  try {
	    // Return '*' instead of '' so that truthiness works.
	    // This will throw if it's invalid anyway
	    return new Range(range, loose).range || '*';
	  } catch (er) {
	    return null;
	  }
	}
	
	// Determine if version is less than all the versions possible in the range
	exports.ltr = ltr;
	function ltr(version, range, loose) {
	  return outside(version, range, '<', loose);
	}
	
	// Determine if version is greater than all the versions possible in the range.
	exports.gtr = gtr;
	function gtr(version, range, loose) {
	  return outside(version, range, '>', loose);
	}
	
	exports.outside = outside;
	function outside(version, range, hilo, loose) {
	  version = new SemVer(version, loose);
	  range = new Range(range, loose);
	
	  var gtfn, ltefn, ltfn, comp, ecomp;
	  switch (hilo) {
	    case '>':
	      gtfn = gt;
	      ltefn = lte;
	      ltfn = lt;
	      comp = '>';
	      ecomp = '>=';
	      break;
	    case '<':
	      gtfn = lt;
	      ltefn = gte;
	      ltfn = gt;
	      comp = '<';
	      ecomp = '<=';
	      break;
	    default:
	      throw new TypeError('Must provide a hilo val of "<" or ">"');
	  }
	
	  // If it satisifes the range it is not outside
	  if (satisfies(version, range, loose)) {
	    return false;
	  }
	
	  // From now on, variable terms are as if we're in "gtr" mode.
	  // but note that everything is flipped for the "ltr" function.
	
	  for (var i = 0; i < range.set.length; ++i) {
	    var comparators = range.set[i];
	
	    var high = null;
	    var low = null;
	
	    comparators.forEach(function(comparator) {
	      if (comparator.semver === ANY) {
	        comparator = new Comparator('>=0.0.0')
	      }
	      high = high || comparator;
	      low = low || comparator;
	      if (gtfn(comparator.semver, high.semver, loose)) {
	        high = comparator;
	      } else if (ltfn(comparator.semver, low.semver, loose)) {
	        low = comparator;
	      }
	    });
	
	    // If the edge version comparator has a operator then our version
	    // isn't outside it
	    if (high.operator === comp || high.operator === ecomp) {
	      return false;
	    }
	
	    // If the lowest version comparator has an operator and our version
	    // is less than it then it isn't higher than the range
	    if ((!low.operator || low.operator === comp) &&
	        ltefn(version, low.semver)) {
	      return false;
	    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	exports.prerelease = prerelease;
	function prerelease(version, loose) {
	  var parsed = parse(version, loose);
	  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.web = exports.text = exports.scroller = exports.list = exports.image = exports.cell = exports.switch = undefined;
	
	var _switch2 = __webpack_require__(6);
	
	var _switch3 = _interopRequireDefault(_switch2);
	
	var _cell = __webpack_require__(18);
	
	var _cell2 = _interopRequireDefault(_cell);
	
	var _image = __webpack_require__(13);
	
	var _image2 = _interopRequireDefault(_image);
	
	var _list = __webpack_require__(14);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _scroller = __webpack_require__(5);
	
	var _scroller2 = _interopRequireDefault(_scroller);
	
	var _text = __webpack_require__(7);
	
	var _text2 = _interopRequireDefault(_text);
	
	var _web = __webpack_require__(8);
	
	var _web2 = _interopRequireDefault(_web);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.switch = _switch3.default;
	exports.cell = _cell2.default;
	exports.image = _image2.default;
	exports.list = _list2.default;
	exports.scroller = _scroller2.default;
	exports.text = _text2.default;
	exports.web = _web2.default;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configure = configure;
	exports.validateStyles = validateStyles;
	exports.validateProps = validateProps;
	
	var _style = __webpack_require__(12);
	
	var styleValidator = _interopRequireWildcard(_style);
	
	var _prop = __webpack_require__(11);
	
	var propValidator = _interopRequireWildcard(_prop);
	
	var _utils = __webpack_require__(9);
	
	var _check = __webpack_require__(10);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var onfail = function nope() {};
	var showConsole = true;
	
	function warn() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var message = args.join(' ');
	  showConsole && console.log(message);
	  onfail(message);
	  return message;
	}
	
	/**
	 * Configure the validator.
	 * @param {Object} configs
	 */
	function configure() {
	  var configs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  showConsole = !configs.silent;
	  if (typeof configs.onfail === 'function') {
	    onfail = configs.onfail;
	  }
	}
	
	/**
	 * Validate the styles of the component.
	 * @param {String} type
	 * @param {Object} styles
	 */
	function validateStyles(type) {
	  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  var isValid = true;
	  for (var key in styles) {
	    if (!(0, _check.isSupportedStyle)(type, (0, _utils.hyphenate)(key))) {
	      isValid = false;
	      warn('[Style Validator] <' + type + '> is not support to use the "' + key + '" style.');
	    } else {
	      var validator = styleValidator[(0, _utils.camelize)(key)] || styleValidator.common;
	      if (!validator(styles[key], (0, _utils.hyphenate)(key))) {
	        isValid = false;
	        warn('[Style Validator] The style "' + key + '" is not support the "' + styles[key] + '" value.');
	      }
	    }
	  }
	  return isValid;
	}
	
	/**
	 * Validate the properties of the component.
	 * @param {String} type
	 * @param {Object} props
	 */
	function validateProps(type) {
	  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  var isValid = true;
	  for (var key in props) {
	    var validator = propValidator[(0, _utils.camelize)(key)];
	    if (validator && !validator(props[key])) {
	      isValid = false;
	      warn('[Property Validator] The property "' + key + '" is not support the "' + props[key] + '" value.');
	    }
	  }
	  return isValid;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _validator = __webpack_require__(4);
	
	var _utils = __webpack_require__(9);
	
	var _rect = __webpack_require__(17);
	
	var _rect2 = _interopRequireDefault(_rect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_rect2.default],
	  props: {
	    loadmoreoffset: {
	      type: [String, Number],
	      default: 0
	    }
	  },
	
	  methods: {
	    handleScroll: function handleScroll(event) {
	      if (this.reachBottom()) {
	        this.$emit('loadmore', event);
	      }
	    }
	  },
	
	  render: function render(createElement) {
	    /* istanbul ignore next */
	    if (true) {
	      (0, _validator.validateStyles)('scroller', this.$vnode.data && this.$vnode.data.staticStyle);
	    }
	
	    return createElement('main', {
	      ref: 'wrapper',
	      attrs: { 'weex-type': 'scroller' },
	      staticClass: 'weex-scroller weex-scroller-wrapper',
	      on: {
	        scroll: (0, _utils.debounce)((0, _utils.bind)(this.handleScroll, this), 100)
	      }
	    }, [createElement('mark', { ref: 'topMark', staticClass: 'weex-scroller-top-mark' }), createElement('div', {
	      ref: 'inner',
	      staticClass: 'weex-scroller-inner'
	    }, this.$slots.default), createElement('mark', { ref: 'bottomMark', staticClass: 'weex-scroller-bottom-mark' })]);
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _validator = __webpack_require__(4);
	
	exports.default = {
	  props: {
	    checked: {
	      type: [Boolean, String],
	      default: false
	    },
	    disabled: {
	      type: [Boolean, String],
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      isChecked: this.checked !== 'false' && this.checked !== false,
	      isDisabled: this.disabled !== 'false' && this.disabled !== false
	    };
	  },
	
	  computed: {
	    wrapperClass: function wrapperClass() {
	      var classArray = ['weex-switch'];
	      this.isChecked && classArray.push('weex-switch-checked');
	      this.isDisabled && classArray.push('weex-switch-disabled');
	      return classArray.join(' ');
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      // TODO: handle the events
	      if (!this.isDisabled) {
	        this.isChecked = !this.isChecked;
	        this.$emit('change', { value: this.isChecked });
	      }
	    }
	  },
	
	  render: function render(createElement) {
	    /* istanbul ignore next */
	    if (true) {
	      (0, _validator.validateStyles)('switch', this.$vnode.data && this.$vnode.data.staticStyle);
	    }
	
	    return createElement('span', {
	      attrs: { 'weex-type': 'switch' },
	      staticClass: this.wrapperClass,
	      on: { click: this.toggle }
	    }, [createElement('small', { staticClass: 'weex-switch-inner' })]);
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _validator = __webpack_require__(4);
	
	/**
	 * Get text styles
	 */
	function getTextStyle() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var lines = parseInt(props.lines) || 0;
	  if (lines > 0) {
	    return {
	      overflow: 'hidden',
	      textOverflow: 'ellipsis',
	      webkitLineClamp: lines
	    };
	  }
	}
	
	exports.default = {
	  props: {
	    lines: [Number, String],
	    value: [String]
	  },
	
	  render: function render(createElement) {
	    /* istanbul ignore next */
	    if (true) {
	      (0, _validator.validateStyles)('text', this.$vnode.data && this.$vnode.data.staticStyle);
	    }
	
	    return createElement('p', {
	      attrs: { 'weex-type': 'text' },
	      staticClass: 'weex-text',
	      staticStyle: getTextStyle(this)
	    }, this.$slots.default || [this.value]);
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _validator = __webpack_require__(4);
	
	exports.default = {
	  props: {
	    src: String
	  },
	  render: function render(createElement) {
	    /* istanbul ignore next */
	    if (true) {
	      (0, _validator.validateStyles)('web', this.$vnode.data && this.$vnode.data.staticStyle);
	    }
	
	    return createElement('iframe', {
	      attrs: {
	        'weex-type': 'web',
	        src: this.src
	      },
	      staticClass: 'weex-web'
	    });
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cached = cached;
	exports.extend = extend;
	exports.bind = bind;
	exports.debounce = debounce;
	exports.throttle = throttle;
	/**
	 * Create a cached version of a pure function.
	 */
	function cached(fn) {
	  var cache = Object.create(null);
	  return function cachedFn(str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str));
	  };
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = exports.camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) {
	    return c.toUpperCase();
	  });
	});
	
	/**
	 * Capitalize a string.
	 */
	var capitalize = exports.capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	});
	
	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /([^-])([A-Z])/g;
	var hyphenate = exports.hyphenate = cached(function (str) {
	  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
	});
	
	/**
	 * Mix properties into target object.
	 */
	function extend(to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to;
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	function debounce(func, wait) {
	  var timerId = void 0;
	  function later() {
	    timerId = null;
	    func.apply(null);
	  }
	  return function () {
	    clearTimeout(timerId);
	    timerId = setTimeout(later, wait);
	  };
	}
	
	function throttle(func, wait) {
	  var last = 0;
	  return function () {
	    var time = new Date().getTime();
	    if (time - last > wait) {
	      func.apply(null);
	    }
	    last = time;
	  };
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.flatten = flatten;
	exports.checkSupported = checkSupported;
	exports.isSupportedStyle = isSupportedStyle;
	exports.isSupportedProp = isSupportedProp;
	var supportedProperties = {
	  '@common': ['id', 'ref', 'style', 'class', 'append']
	};
	
	var supportedStyles = {
	  '@box-model': ['width', 'height', 'position', 'padding-top', 'padding-bottom', 'padding-left', 'padding-right', 'margin-top', 'margin-bottom', 'margin-left', 'margin-right'],
	  '@border': ['border-style', 'border-width', 'border-color', 'border-radius', 'border-top-style', 'border-right-style', 'border-bottom-style', 'border-left-style', 'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width', 'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius'],
	  '@flexbox': ['display', 'flex', 'flex-direction', 'justify-content', 'align-items', 'flex-wrap'],
	  '@font': ['font-size', 'font-weight', 'font-style', 'font-family'],
	  '@colors': ['color', 'background-color', 'opacity'],
	  text: ['@box-model', '@border', '@flexbox', '@font', '@colors', 'text-align', 'text-decoration', 'text-overflow']
	};
	
	/**
	 * Flatten a multiple dimension array.
	 */
	function flatten(array) {
	  return array.reduce(function (dist, item) {
	    return dist.concat(Array.isArray(item) ? flatten(item) : item);
	  }, []);
	}
	
	/**
	 * Check if the value is in the list.
	 * @param {String} type
	 * @param {String} value
	 * @param {Object} dict
	 */
	function checkSupported(type, value) {
	  var dict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	  if (type && value && dict[type]) {
	    return flatten(dict[type].map(function (k) {
	      return dict[k] || k;
	    })).indexOf(value) !== -1;
	  }
	  return true;
	}
	
	/**
	 * Check if the style is supported for the component.
	 * @param {String} type
	 * @param {String} style
	 */
	function isSupportedStyle(type, style) {
	  return checkSupported(type, style, supportedStyles);
	}
	
	/**
	 * Check if the property is supported for the component.
	 * @param {String} type
	 * @param {String} property
	 */
	function isSupportedProp(type, prop) {
	  return checkSupported(type, prop, supportedProperties);
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isString = isString;
	function isString(value) {
	  return Object.prototype.toString.call(value) === '[object String]';
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isCSSColor = isCSSColor;
	exports.isCSSLength = isCSSLength;
	exports.position = position;
	exports.opacity = opacity;
	exports.display = display;
	exports.flexDirection = flexDirection;
	exports.justifyContent = justifyContent;
	exports.alignItems = alignItems;
	exports.flex = flex;
	exports.fontStyle = fontStyle;
	exports.fontWeight = fontWeight;
	exports.textDecoration = textDecoration;
	exports.textAlign = textAlign;
	exports.overflow = overflow;
	exports.textOverflow = textOverflow;
	exports.common = common;
	
	/**
	 * Validate the CSS color value.
	 */
	function isCSSColor(value) {
	  return (/^[a-z]+$/i.test(value) // match color name
	    || /^#([a-f0-9]{3}){1,2}$/i.test(value) // match #ABCDEF
	    || /^rgb\s*\((\s*[0-9.]+\s*,){2}\s*[0-9.]+\s*\)/i.test(value) // match rgb(0,0,0)
	    || /^rgba\s*\((\s*[0-9.]+\s*,){3}\s*[0-9.]+\s*\)/i.test(value)
	  ); // match rgba(0,0,0,0)
	}
	
	function isCSSLength(value) {
	  return (/^[+-]?[0-9]+.?([0-9]+)?(px|%)?$/.test(String(value))
	  );
	}
	
	function position(value) {
	  return ['absolute', 'relative', 'fixed', 'sticky'].indexOf(value) !== -1;
	}
	
	function opacity(value) {
	  var count = parseFloat(value);
	  return count >= 0 && count <= 1;
	}
	
	function display(value) {
	  return ['block', 'flex'].indexOf(value) !== -1;
	}
	
	function flexDirection(value) {
	  return ['row', 'column'].indexOf(value) !== -1;
	}
	
	function justifyContent(value) {
	  return ['flex-start', 'flex-end', 'center', 'space-between'].indexOf(value) !== -1;
	}
	
	function alignItems(value) {
	  return ['stretch', 'flex-start', 'flex-end', 'center'].indexOf(value) !== -1;
	}
	
	function flex(value) {
	  return (/^\d{1,3}$/.test(String(value))
	  );
	}
	
	function fontStyle(value) {
	  return ['normal', 'italic', 'oblique'].indexOf(value) !== -1;
	}
	
	function fontWeight(value) {
	  return ['normal', 'bold', 'light', 'bolder', 'lighter'].indexOf(value) !== -1;
	}
	
	function textDecoration(value) {
	  return ['none', 'underline', 'line-through'].indexOf(value) !== -1;
	}
	
	function textAlign(value) {
	  return ['left', 'center', 'right'].indexOf(value) !== -1;
	}
	
	function overflow(value) {
	  return ['visible', 'hidden'].indexOf(value) !== -1;
	}
	
	function textOverflow(value) {
	  return ['clip', 'ellipsis'].indexOf(value) !== -1;
	}
	
	/**
	 * Common style validator.
	 * @param {any} value
	 * @param {String} key
	 */
	function common(value, key) {
	  if (/^[\w\-]*color$/.test(String(key))) {
	    return isCSSColor(value);
	  }
	
	  if (/^(width|height)$/.test(String(key))) {
	    return isCSSLength(value);
	  }
	
	  // checkout border-radius
	  if (/^border-((top|right|bottom|left)-){0,2}(width|radius)$/.test(String(key))) {
	    return isCSSLength(value);
	  }
	
	  // check border-style
	  if (/border-((top|right|bottom|left)-)?style/.test(String(key))) {
	    return ['solid', 'dashed', 'dotted'].indexOf(value) !== -1;
	  }
	
	  if (/^((margin|padding)-)?(top|right|bottom|left)/.test(String(key))) {
	    return isCSSLength(value);
	  }
	
	  switch (String(key)) {
	    case 'font-size':
	      return isCSSLength(value);
	  }
	
	  return true;
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _validator = __webpack_require__(4);
	
	exports.default = {
	  props: {
	    src: String,
	    resize: {
	      validator: function validator(value) {
	        /* istanbul ignore next */
	        return ['cover', 'contain', 'stretch'].indexOf(value) !== -1;
	      }
	    }
	  },
	
	  render: function render(createElement) {
	    /* istanbul ignore next */
	    if (true) {
	      (0, _validator.validateStyles)('image', this.$vnode.data && this.$vnode.data.staticStyle);
	    }
	
	    /* istanbul ignore next */
	    if (!this.src && ("development") === 'development') {
	      console.warn('[Vue Renderer] The <image> component must have the "src" attribute.');
	    }
	
	    var cssText = 'background-image:url("' + this.src + '");';
	
	    // compatibility: http://caniuse.com/#search=background-size
	    if (this.resize) {
	      cssText += this.resize === 'stretch' ? 'background-size: 100% 100%;' : 'background-size: ' + this.resize + ';';
	    }
	
	    return createElement('figure', {
	      attrs: { 'weex-type': 'image' },
	      staticClass: 'weex-image',
	      style: cssText
	    });
	  }
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _validator = __webpack_require__(4);
	
	var _utils = __webpack_require__(9);
	
	var _rect = __webpack_require__(17);
	
	var _rect2 = _interopRequireDefault(_rect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_rect2.default],
	  props: {
	    loadmoreoffset: {
	      type: [String, Number],
	      default: 0
	    }
	  },
	
	  methods: {
	    handleScroll: function handleScroll(event) {
	      if (this.reachBottom()) {
	        this.$emit('loadmore');
	      }
	    }
	  },
	
	  render: function render(createElement) {
	    /* istanbul ignore next */
	    if (true) {
	      (0, _validator.validateStyles)('list', this.$vnode.data && this.$vnode.data.staticStyle);
	    }
	
	    return createElement('div', {
	      ref: 'wrapper',
	      attrs: { 'weex-type': 'list' },
	      staticClass: 'weex-list weex-list-wrapper',
	      on: {
	        scroll: (0, _utils.debounce)((0, _utils.bind)(this.handleScroll, this), 100)
	      }
	    }, [createElement('mark', { ref: 'topMark', staticClass: 'weex-list-top-mark' }), createElement('ul', {
	      ref: 'inner',
	      staticClass: 'weex-list-inner'
	    }, this.$slots.default), createElement('mark', { ref: 'bottomMark', staticClass: 'weex-list-bottom-mark' })]);
	  }
	};

/***/ },
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  methods: {
	    reachBottom: function reachBottom() {
	      var wrapper = this.$refs.wrapper;
	      var inner = this.$refs.inner;
	      var offset = Number(this.loadmoreoffset) || 0;
	
	      if (wrapper && inner) {
	        var innerHeight = inner.getBoundingClientRect().height;
	        var wrapperHeight = wrapper.getBoundingClientRect().height;
	        return wrapper.scrollTop >= innerHeight - wrapperHeight - offset;
	      }
	      return false;
	    }
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _validator = __webpack_require__(4);
	
	exports.default = {
	  render: function render(createElement) {
	    /* istanbul ignore next */
	    if (true) {
	      (0, _validator.validateStyles)('cell', this.$vnode.data && this.$vnode.data.staticStyle);
	    }
	
	    return createElement('li', {
	      attrs: { 'weex-type': 'cell' },
	      staticClass: 'weex-cell'
	    }, this.$slots.default);
	  }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmZkMGM1MzRiYmVjZTA2NWU4NTUiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvcmVuZGVyL3Z1ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL3Byb2Nlc3MvMC4xMS45L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+Ly5ucG1pbnN0YWxsL3NlbXZlci81LjMuMC9zZW12ZXIvc2VtdmVyLmpzIiwid2VicGFjazovLy8uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9yZW5kZXIvdnVlL3ZhbGlkYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3N3aXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvd2ViLmpzIiwid2VicGFjazovLy8uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvcmVuZGVyL3Z1ZS92YWxpZGF0b3IvY2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvcmVuZGVyL3Z1ZS92YWxpZGF0b3IvcHJvcC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9yZW5kZXIvdnVlL3ZhbGlkYXRvci9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvcmVuZGVyL3Z1ZS9taXhpbnMvcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvY2VsbC5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsIiwiY29tcG9uZW50cyIsIlZ1ZSIsImh0bWxSZWdleCIsImNvbmZpZyIsImlzUmVzZXJ2ZWRUYWciLCJ0ZXN0IiwidGFnIiwicGFyc2VQbGF0Zm9ybVRhZ05hbWUiLCJyZXBsYWNlIiwibmFtZSIsImNvbXBvbmVudCIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwiam9pbiIsImVycm9yIiwibHQiLCJ2ZXJzaW9uIiwid2FybiIsInVzZSIsInN3aXRjaCIsImNlbGwiLCJpbWFnZSIsImxpc3QiLCJzY3JvbGxlciIsInRleHQiLCJ3ZWIiLCJjb25maWd1cmUiLCJ2YWxpZGF0ZVN0eWxlcyIsInZhbGlkYXRlUHJvcHMiLCJzdHlsZVZhbGlkYXRvciIsInByb3BWYWxpZGF0b3IiLCJvbmZhaWwiLCJub3BlIiwic2hvd0NvbnNvbGUiLCJhcmdzIiwibWVzc2FnZSIsImNvbmZpZ3MiLCJzaWxlbnQiLCJ0eXBlIiwic3R5bGVzIiwiaXNWYWxpZCIsImtleSIsInZhbGlkYXRvciIsImNvbW1vbiIsInByb3BzIiwibWl4aW5zIiwibG9hZG1vcmVvZmZzZXQiLCJTdHJpbmciLCJOdW1iZXIiLCJkZWZhdWx0IiwibWV0aG9kcyIsImhhbmRsZVNjcm9sbCIsImV2ZW50IiwicmVhY2hCb3R0b20iLCIkZW1pdCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCIkdm5vZGUiLCJkYXRhIiwic3RhdGljU3R5bGUiLCJyZWYiLCJhdHRycyIsInN0YXRpY0NsYXNzIiwib24iLCJzY3JvbGwiLCIkc2xvdHMiLCJjaGVja2VkIiwiQm9vbGVhbiIsImRpc2FibGVkIiwiaXNDaGVja2VkIiwiaXNEaXNhYmxlZCIsImNvbXB1dGVkIiwid3JhcHBlckNsYXNzIiwiY2xhc3NBcnJheSIsInB1c2giLCJ0b2dnbGUiLCJ2YWx1ZSIsImNsaWNrIiwiZ2V0VGV4dFN0eWxlIiwibGluZXMiLCJwYXJzZUludCIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2Via2l0TGluZUNsYW1wIiwic3JjIiwiY2FjaGVkIiwiZXh0ZW5kIiwiYmluZCIsImRlYm91bmNlIiwidGhyb3R0bGUiLCJmbiIsImNhY2hlIiwiY3JlYXRlIiwiY2FjaGVkRm4iLCJzdHIiLCJoaXQiLCJjYW1lbGl6ZVJFIiwiY2FtZWxpemUiLCJfIiwiYyIsInRvVXBwZXJDYXNlIiwiY2FwaXRhbGl6ZSIsImNoYXJBdCIsInNsaWNlIiwiaHlwaGVuYXRlUkUiLCJoeXBoZW5hdGUiLCJ0b0xvd2VyQ2FzZSIsInRvIiwiX2Zyb20iLCJjdHgiLCJhIiwibCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFwcGx5IiwiY2FsbCIsImZ1bmMiLCJ3YWl0IiwidGltZXJJZCIsImxhdGVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImxhc3QiLCJ0aW1lIiwiRGF0ZSIsImdldFRpbWUiLCJmbGF0dGVuIiwiY2hlY2tTdXBwb3J0ZWQiLCJpc1N1cHBvcnRlZFN0eWxlIiwiaXNTdXBwb3J0ZWRQcm9wIiwic3VwcG9ydGVkUHJvcGVydGllcyIsInN1cHBvcnRlZFN0eWxlcyIsImFycmF5IiwicmVkdWNlIiwiZGlzdCIsIml0ZW0iLCJjb25jYXQiLCJBcnJheSIsImlzQXJyYXkiLCJkaWN0IiwibWFwIiwiayIsImluZGV4T2YiLCJzdHlsZSIsInByb3AiLCJpc1N0cmluZyIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiaXNDU1NDb2xvciIsImlzQ1NTTGVuZ3RoIiwicG9zaXRpb24iLCJvcGFjaXR5IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmbGV4IiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCIsInRleHREZWNvcmF0aW9uIiwidGV4dEFsaWduIiwiY291bnQiLCJwYXJzZUZsb2F0IiwicmVzaXplIiwiY3NzVGV4dCIsIndyYXBwZXIiLCIkcmVmcyIsImlubmVyIiwib2Zmc2V0IiwiaW5uZXJIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJ3cmFwcGVySGVpZ2h0Iiwic2Nyb2xsVG9wIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7U0NsQ2dCQSxPLEdBQUFBLE87O0FBSGhCOztLQUFZQyxVOztBQUNaOzs7Ozs7OztBQUZBO0FBSU8sVUFBU0QsT0FBVCxDQUFrQkUsR0FBbEIsRUFBdUI7QUFDNUIsT0FBTUMsWUFBWSxTQUFsQjtBQUNBRCxPQUFJRSxNQUFKLENBQVdDLGFBQVgsR0FBMkI7QUFBQSxZQUFPRixVQUFVRyxJQUFWLENBQWVDLEdBQWYsQ0FBUDtBQUFBLElBQTNCO0FBQ0FMLE9BQUlFLE1BQUosQ0FBV0ksb0JBQVgsR0FBa0M7QUFBQSxZQUFPRCxJQUFJRSxPQUFKLENBQVlOLFNBQVosRUFBdUIsRUFBdkIsQ0FBUDtBQUFBLElBQWxDOztBQUVBLFFBQUssSUFBTU8sSUFBWCxJQUFtQlQsVUFBbkIsRUFBK0I7QUFDN0JDLFNBQUlTLFNBQUosQ0FBY0QsSUFBZCxFQUFvQlQsV0FBV1MsSUFBWCxDQUFwQjtBQUNEOztBQUVEO0FBQ0EsT0FBSSxJQUFKLEVBQTRDO0FBQzFDRSxhQUFRQyxHQUFSLENBQVksa0RBQ0pDLE9BQU9DLElBQVAsQ0FBWWQsVUFBWixFQUF3QmUsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FESSxRQUFaO0FBRUQ7QUFDRjs7QUFFRDtBQUNBLEtBQUksT0FBT2QsR0FBUCxLQUFlLFdBQW5CLEVBQWdDO0FBQzlCVSxXQUFRSyxLQUFSLENBQWMsc0NBQWQ7QUFDRCxFQUZELE1BR0s7QUFDSDtBQUNBLE9BQUksb0JBQXlCLGFBQXpCLElBQ0MsaUJBQU9DLEVBQVAsQ0FBVWhCLElBQUlpQixPQUFkLEVBQXVCLE9BQXZCLENBREwsRUFDc0M7QUFDcENQLGFBQVFRLElBQVIsQ0FBYSxzRkFDdUJsQixJQUFJaUIsT0FEM0IsT0FBYjtBQUVEOztBQUVEakIsT0FBSW1CLEdBQUosQ0FBUSxFQUFFckIsZ0JBQUYsRUFBUjtBQUNELEU7Ozs7OztBQ2pDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7O0FDbkx0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBd0Q7QUFDeEQsdUNBQXNDO0FBQ3RDLHFDQUFvQztBQUNwQyx1Q0FBc0M7QUFDdEMscUNBQW9DO0FBQ3BDLHVDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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MUMsc0NBQWUsTUFBZixFQUF1QixLQUFLQyxNQUFMLENBQVlDLElBQVosSUFBb0IsS0FBS0QsTUFBTCxDQUFZQyxJQUFaLENBQWlCQyxXQUE1RDtBQUNEOztBQUVELFlBQU9ILGNBQWMsSUFBZCxFQUFvQjtBQUN6QkssY0FBTyxFQUFFLGFBQWEsTUFBZixFQURrQjtBQUV6QkMsb0JBQWE7QUFGWSxNQUFwQixFQUdKLEtBQUtHLE1BQUwsQ0FBWWhCLE9BSFIsQ0FBUDtBQUlEO0FBWFksRSIsImZpbGUiOiJ2dWUtcmVuZGVyZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmZmQwYzUzNGJiZWNlMDY1ZTg1NSIsIi8vIGltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0ICogYXMgY29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXG5pbXBvcnQgc2VtdmVyIGZyb20gJ3NlbXZlcidcblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbGwgKFZ1ZSkge1xuICBjb25zdCBodG1sUmVnZXggPSAvXmh0bWw6L2lcbiAgVnVlLmNvbmZpZy5pc1Jlc2VydmVkVGFnID0gdGFnID0+IGh0bWxSZWdleC50ZXN0KHRhZylcbiAgVnVlLmNvbmZpZy5wYXJzZVBsYXRmb3JtVGFnTmFtZSA9IHRhZyA9PiB0YWcucmVwbGFjZShodG1sUmVnZXgsICcnKVxuXG4gIGZvciAoY29uc3QgbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgVnVlLmNvbXBvbmVudChuYW1lLCBjb21wb25lbnRzW25hbWVdKVxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgY29uc29sZS5sb2coYFtWdWUgUmVuZGVyZXJdIFJlZ2lzdGVyZWQgY29tcG9uZW50czogYFxuICAgICAgKyBgWyR7T2JqZWN0LmtleXMoY29tcG9uZW50cykuam9pbignLCAnKX1dLmApXG4gIH1cbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmlmICh0eXBlb2YgVnVlID09PSAndW5kZWZpbmVkJykge1xuICBjb25zb2xlLmVycm9yKCdbVnVlIFJlbmRlcmVyXSBgVnVlYCBpcyBub3QgZGVmaW5lZCEnKVxufVxuZWxzZSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xuICAgICYmIHNlbXZlci5sdChWdWUudmVyc2lvbiwgJzIuMS41JykpIHtcbiAgICBjb25zb2xlLndhcm4oYFtWdWUgUmVuZGVyZXJdIFRoZSB2ZXJzaW9uIG9mIFZ1ZSBzaG91bGQgYmUgYCArXG4gICAgICBgZ3JlYXRlciB0aGFuIDIuMS41LCBjdXJyZW50IGlzICR7VnVlLnZlcnNpb259LmApXG4gIH1cblxuICBWdWUudXNlKHsgaW5zdGFsbCB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvcmVuZGVyL3Z1ZS9pbmRleC5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLm5wbWluc3RhbGwvcHJvY2Vzcy8wLjExLjkvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFNlbVZlcjtcblxuLy8gVGhlIGRlYnVnIGZ1bmN0aW9uIGlzIGV4Y2x1ZGVkIGVudGlyZWx5IGZyb20gdGhlIG1pbmlmaWVkIHZlcnNpb24uXG4vKiBub21pbiAqLyB2YXIgZGVidWc7XG4vKiBub21pbiAqLyBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmXG4gICAgLyogbm9taW4gKi8gcHJvY2Vzcy5lbnYgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudi5OT0RFX0RFQlVHICYmXG4gICAgLyogbm9taW4gKi8gL1xcYnNlbXZlclxcYi9pLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRykpXG4gIC8qIG5vbWluICovIGRlYnVnID0gZnVuY3Rpb24oKSB7XG4gICAgLyogbm9taW4gKi8gdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIC8qIG5vbWluICovIGFyZ3MudW5zaGlmdCgnU0VNVkVSJyk7XG4gICAgLyogbm9taW4gKi8gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgLyogbm9taW4gKi8gfTtcbi8qIG5vbWluICovIGVsc2VcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHt9O1xuXG4vLyBOb3RlOiB0aGlzIGlzIHRoZSBzZW12ZXIub3JnIHZlcnNpb24gb2YgdGhlIHNwZWMgdGhhdCBpdCBpbXBsZW1lbnRzXG4vLyBOb3QgbmVjZXNzYXJpbHkgdGhlIHBhY2thZ2UgdmVyc2lvbiBvZiB0aGlzIGNvZGUuXG5leHBvcnRzLlNFTVZFUl9TUEVDX1ZFUlNJT04gPSAnMi4wLjAnO1xuXG52YXIgTUFYX0xFTkdUSCA9IDI1NjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgOTAwNzE5OTI1NDc0MDk5MTtcblxuLy8gVGhlIGFjdHVhbCByZWdleHBzIGdvIG9uIGV4cG9ydHMucmVcbnZhciByZSA9IGV4cG9ydHMucmUgPSBbXTtcbnZhciBzcmMgPSBleHBvcnRzLnNyYyA9IFtdO1xudmFyIFIgPSAwO1xuXG4vLyBUaGUgZm9sbG93aW5nIFJlZ3VsYXIgRXhwcmVzc2lvbnMgY2FuIGJlIHVzZWQgZm9yIHRva2VuaXppbmcsXG4vLyB2YWxpZGF0aW5nLCBhbmQgcGFyc2luZyBTZW1WZXIgdmVyc2lvbiBzdHJpbmdzLlxuXG4vLyAjIyBOdW1lcmljIElkZW50aWZpZXJcbi8vIEEgc2luZ2xlIGAwYCwgb3IgYSBub24temVybyBkaWdpdCBmb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgZGlnaXRzLlxuXG52YXIgTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJdID0gJzB8WzEtOV1cXFxcZConO1xudmFyIE5VTUVSSUNJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gPSAnWzAtOV0rJztcblxuXG4vLyAjIyBOb24tbnVtZXJpYyBJZGVudGlmaWVyXG4vLyBaZXJvIG9yIG1vcmUgZGlnaXRzLCBmb2xsb3dlZCBieSBhIGxldHRlciBvciBoeXBoZW4sIGFuZCB0aGVuIHplcm8gb3Jcbi8vIG1vcmUgbGV0dGVycywgZGlnaXRzLCBvciBoeXBoZW5zLlxuXG52YXIgTk9OTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdID0gJ1xcXFxkKlthLXpBLVotXVthLXpBLVowLTktXSonO1xuXG5cbi8vICMjIE1haW4gVmVyc2lvblxuLy8gVGhyZWUgZG90LXNlcGFyYXRlZCBudW1lcmljIGlkZW50aWZpZXJzLlxuXG52YXIgTUFJTlZFUlNJT04gPSBSKys7XG5zcmNbTUFJTlZFUlNJT05dID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBNQUlOVkVSU0lPTkxPT1NFID0gUisrO1xuc3JjW01BSU5WRVJTSU9OTE9PU0VdID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJyknO1xuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uIElkZW50aWZpZXJcbi8vIEEgbnVtZXJpYyBpZGVudGlmaWVyLCBvciBhIG5vbi1udW1lcmljIGlkZW50aWZpZXIuXG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUiA9IFIrKztcbnNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd8JyArIHNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdID0gJyg/OicgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uXG4vLyBIeXBoZW4sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGRvdC1zZXBhcmF0ZWQgcHJlLXJlbGVhc2UgdmVyc2lvblxuLy8gaWRlbnRpZmllcnMuXG5cbnZhciBQUkVSRUxFQVNFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VdID0gJyg/Oi0oJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gKyAnKSopKSc7XG5cbnZhciBQUkVSRUxFQVNFTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUxPT1NFXSA9ICcoPzotPygnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSArICcpKikpJztcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGEgSWRlbnRpZmllclxuLy8gQW55IGNvbWJpbmF0aW9uIG9mIGRpZ2l0cywgbGV0dGVycywgb3IgaHlwaGVucy5cblxudmFyIEJVSUxESURFTlRJRklFUiA9IFIrKztcbnNyY1tCVUlMRElERU5USUZJRVJdID0gJ1swLTlBLVphLXotXSsnO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YVxuLy8gUGx1cyBzaWduLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBwZXJpb2Qtc2VwYXJhdGVkIGJ1aWxkIG1ldGFkYXRhXG4vLyBpZGVudGlmaWVycy5cblxudmFyIEJVSUxEID0gUisrO1xuc3JjW0JVSUxEXSA9ICcoPzpcXFxcKygnICsgc3JjW0JVSUxESURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbQlVJTERJREVOVElGSUVSXSArICcpKikpJztcblxuXG4vLyAjIyBGdWxsIFZlcnNpb24gU3RyaW5nXG4vLyBBIG1haW4gdmVyc2lvbiwgZm9sbG93ZWQgb3B0aW9uYWxseSBieSBhIHByZS1yZWxlYXNlIHZlcnNpb24gYW5kXG4vLyBidWlsZCBtZXRhZGF0YS5cblxuLy8gTm90ZSB0aGF0IHRoZSBvbmx5IG1ham9yLCBtaW5vciwgcGF0Y2gsIGFuZCBwcmUtcmVsZWFzZSBzZWN0aW9ucyBvZlxuLy8gdGhlIHZlcnNpb24gc3RyaW5nIGFyZSBjYXB0dXJpbmcgZ3JvdXBzLiAgVGhlIGJ1aWxkIG1ldGFkYXRhIGlzIG5vdCBhXG4vLyBjYXB0dXJpbmcgZ3JvdXAsIGJlY2F1c2UgaXQgc2hvdWxkIG5vdCBldmVyIGJlIHVzZWQgaW4gdmVyc2lvblxuLy8gY29tcGFyaXNvbi5cblxudmFyIEZVTEwgPSBSKys7XG52YXIgRlVMTFBMQUlOID0gJ3Y/JyArIHNyY1tNQUlOVkVSU0lPTl0gK1xuICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFXSArICc/JyArXG4gICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/Jztcblxuc3JjW0ZVTExdID0gJ14nICsgRlVMTFBMQUlOICsgJyQnO1xuXG4vLyBsaWtlIGZ1bGwsIGJ1dCBhbGxvd3MgdjEuMi4zIGFuZCA9MS4yLjMsIHdoaWNoIHBlb3BsZSBkbyBzb21ldGltZXMuXG4vLyBhbHNvLCAxLjAuMGFscGhhMSAocHJlcmVsZWFzZSB3aXRob3V0IHRoZSBoeXBoZW4pIHdoaWNoIGlzIHByZXR0eVxuLy8gY29tbW9uIGluIHRoZSBucG0gcmVnaXN0cnkuXG52YXIgTE9PU0VQTEFJTiA9ICdbdj1cXFxcc10qJyArIHNyY1tNQUlOVkVSU0lPTkxPT1NFXSArXG4gICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JztcblxudmFyIExPT1NFID0gUisrO1xuc3JjW0xPT1NFXSA9ICdeJyArIExPT1NFUExBSU4gKyAnJCc7XG5cbnZhciBHVExUID0gUisrO1xuc3JjW0dUTFRdID0gJygoPzo8fD4pPz0/KSc7XG5cbi8vIFNvbWV0aGluZyBsaWtlIFwiMi4qXCIgb3IgXCIxLjIueFwiLlxuLy8gTm90ZSB0aGF0IFwieC54XCIgaXMgYSB2YWxpZCB4UmFuZ2UgaWRlbnRpZmVyLCBtZWFuaW5nIFwiYW55IHZlcnNpb25cIlxuLy8gT25seSB0aGUgZmlyc3QgaXRlbSBpcyBzdHJpY3RseSByZXF1aXJlZC5cbnZhciBYUkFOR0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSA9IHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICd8eHxYfFxcXFwqJztcbnZhciBYUkFOR0VJREVOVElGSUVSID0gUisrO1xuc3JjW1hSQU5HRUlERU5USUZJRVJdID0gc3JjW05VTUVSSUNJREVOVElGSUVSXSArICd8eHxYfFxcXFwqJztcblxudmFyIFhSQU5HRVBMQUlOID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOXSA9ICdbdj1cXFxcc10qKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OicgKyBzcmNbUFJFUkVMRUFTRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAnKT8pPyc7XG5cbnZhciBYUkFOR0VQTEFJTkxPT1NFID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOTE9PU0VdID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJyk/JyArXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRSA9IFIrKztcbnNyY1tYUkFOR0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFhSQU5HRUxPT1NFID0gUisrO1xuc3JjW1hSQU5HRUxPT1NFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyonICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBUaWxkZSByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwicmVhc29uYWJseSBhdCBvciBncmVhdGVyIHRoYW5cIlxudmFyIExPTkVUSUxERSA9IFIrKztcbnNyY1tMT05FVElMREVdID0gJyg/On4+PyknO1xuXG52YXIgVElMREVUUklNID0gUisrO1xuc3JjW1RJTERFVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVUSUxERV0gKyAnXFxcXHMrJztcbnJlW1RJTERFVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tUSUxERVRSSU1dLCAnZycpO1xudmFyIHRpbGRlVHJpbVJlcGxhY2UgPSAnJDF+JztcblxudmFyIFRJTERFID0gUisrO1xuc3JjW1RJTERFXSA9ICdeJyArIHNyY1tMT05FVElMREVdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBUSUxERUxPT1NFID0gUisrO1xuc3JjW1RJTERFTE9PU0VdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIENhcmV0IHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJhdCBsZWFzdCBhbmQgYmFja3dhcmRzIGNvbXBhdGlibGUgd2l0aFwiXG52YXIgTE9ORUNBUkVUID0gUisrO1xuc3JjW0xPTkVDQVJFVF0gPSAnKD86XFxcXF4pJztcblxudmFyIENBUkVUVFJJTSA9IFIrKztcbnNyY1tDQVJFVFRSSU1dID0gJyhcXFxccyopJyArIHNyY1tMT05FQ0FSRVRdICsgJ1xcXFxzKyc7XG5yZVtDQVJFVFRSSU1dID0gbmV3IFJlZ0V4cChzcmNbQ0FSRVRUUklNXSwgJ2cnKTtcbnZhciBjYXJldFRyaW1SZXBsYWNlID0gJyQxXic7XG5cbnZhciBDQVJFVCA9IFIrKztcbnNyY1tDQVJFVF0gPSAnXicgKyBzcmNbTE9ORUNBUkVUXSArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgQ0FSRVRMT09TRSA9IFIrKztcbnNyY1tDQVJFVExPT1NFXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBBIHNpbXBsZSBndC9sdC9lcSB0aGluZywgb3IganVzdCBcIlwiIHRvIGluZGljYXRlIFwiYW55IHZlcnNpb25cIlxudmFyIENPTVBBUkFUT1JMT09TRSA9IFIrKztcbnNyY1tDT01QQVJBVE9STE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgTE9PU0VQTEFJTiArICcpJHxeJCc7XG52YXIgQ09NUEFSQVRPUiA9IFIrKztcbnNyY1tDT01QQVJBVE9SXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyooJyArIEZVTExQTEFJTiArICcpJHxeJCc7XG5cblxuLy8gQW4gZXhwcmVzc2lvbiB0byBzdHJpcCBhbnkgd2hpdGVzcGFjZSBiZXR3ZWVuIHRoZSBndGx0IGFuZCB0aGUgdGhpbmdcbi8vIGl0IG1vZGlmaWVzLCBzbyB0aGF0IGA+IDEuMi4zYCA9PT4gYD4xLjIuM2BcbnZhciBDT01QQVJBVE9SVFJJTSA9IFIrKztcbnNyY1tDT01QQVJBVE9SVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0dUTFRdICtcbiAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJ3wnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJztcblxuLy8gdGhpcyBvbmUgaGFzIHRvIHVzZSB0aGUgL2cgZmxhZ1xucmVbQ09NUEFSQVRPUlRSSU1dID0gbmV3IFJlZ0V4cChzcmNbQ09NUEFSQVRPUlRSSU1dLCAnZycpO1xudmFyIGNvbXBhcmF0b3JUcmltUmVwbGFjZSA9ICckMSQyJDMnO1xuXG5cbi8vIFNvbWV0aGluZyBsaWtlIGAxLjIuMyAtIDEuMi40YFxuLy8gTm90ZSB0aGF0IHRoZXNlIGFsbCB1c2UgdGhlIGxvb3NlIGZvcm0sIGJlY2F1c2UgdGhleSdsbCBiZVxuLy8gY2hlY2tlZCBhZ2FpbnN0IGVpdGhlciB0aGUgc3RyaWN0IG9yIGxvb3NlIGNvbXBhcmF0b3IgZm9ybVxuLy8gbGF0ZXIuXG52YXIgSFlQSEVOUkFOR0UgPSBSKys7XG5zcmNbSFlQSEVOUkFOR0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICdcXFxccystXFxcXHMrJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKiQnO1xuXG52YXIgSFlQSEVOUkFOR0VMT09TRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRUxPT1NFXSA9ICdeXFxcXHMqKCcgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbi8vIFN0YXIgcmFuZ2VzIGJhc2ljYWxseSBqdXN0IGFsbG93IGFueXRoaW5nIGF0IGFsbC5cbnZhciBTVEFSID0gUisrO1xuc3JjW1NUQVJdID0gJyg8fD4pPz0/XFxcXHMqXFxcXConO1xuXG4vLyBDb21waWxlIHRvIGFjdHVhbCByZWdleHAgb2JqZWN0cy5cbi8vIEFsbCBhcmUgZmxhZy1mcmVlLCB1bmxlc3MgdGhleSB3ZXJlIGNyZWF0ZWQgYWJvdmUgd2l0aCBhIGZsYWcuXG5mb3IgKHZhciBpID0gMDsgaSA8IFI7IGkrKykge1xuICBkZWJ1ZyhpLCBzcmNbaV0pO1xuICBpZiAoIXJlW2ldKVxuICAgIHJlW2ldID0gbmV3IFJlZ0V4cChzcmNbaV0pO1xufVxuXG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5mdW5jdGlvbiBwYXJzZSh2ZXJzaW9uLCBsb29zZSkge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcilcbiAgICByZXR1cm4gdmVyc2lvbjtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKVxuICAgIHJldHVybiBudWxsO1xuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdmFyIHIgPSBsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdO1xuICBpZiAoIXIudGVzdCh2ZXJzaW9uKSlcbiAgICByZXR1cm4gbnVsbDtcblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnRzLnZhbGlkID0gdmFsaWQ7XG5mdW5jdGlvbiB2YWxpZCh2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgdiA9IHBhcnNlKHZlcnNpb24sIGxvb3NlKTtcbiAgcmV0dXJuIHYgPyB2LnZlcnNpb24gOiBudWxsO1xufVxuXG5cbmV4cG9ydHMuY2xlYW4gPSBjbGVhbjtcbmZ1bmN0aW9uIGNsZWFuKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciBzID0gcGFyc2UodmVyc2lvbi50cmltKCkucmVwbGFjZSgvXls9dl0rLywgJycpLCBsb29zZSk7XG4gIHJldHVybiBzID8gcy52ZXJzaW9uIDogbnVsbDtcbn1cblxuZXhwb3J0cy5TZW1WZXIgPSBTZW1WZXI7XG5cbmZ1bmN0aW9uIFNlbVZlcih2ZXJzaW9uLCBsb29zZSkge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgIGlmICh2ZXJzaW9uLmxvb3NlID09PSBsb29zZSlcbiAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgIGVsc2VcbiAgICAgIHZlcnNpb24gPSB2ZXJzaW9uLnZlcnNpb247XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG4gIH1cblxuICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZlcnNpb24gaXMgbG9uZ2VyIHRoYW4gJyArIE1BWF9MRU5HVEggKyAnIGNoYXJhY3RlcnMnKVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcblxuICBkZWJ1ZygnU2VtVmVyJywgdmVyc2lvbiwgbG9vc2UpO1xuICB0aGlzLmxvb3NlID0gbG9vc2U7XG4gIHZhciBtID0gdmVyc2lvbi50cmltKCkubWF0Y2gobG9vc2UgPyByZVtMT09TRV0gOiByZVtGVUxMXSk7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgVmVyc2lvbjogJyArIHZlcnNpb24pO1xuXG4gIHRoaXMucmF3ID0gdmVyc2lvbjtcblxuICAvLyB0aGVzZSBhcmUgYWN0dWFsbHkgbnVtYmVyc1xuICB0aGlzLm1ham9yID0gK21bMV07XG4gIHRoaXMubWlub3IgPSArbVsyXTtcbiAgdGhpcy5wYXRjaCA9ICttWzNdO1xuXG4gIGlmICh0aGlzLm1ham9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1ham9yIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1ham9yIHZlcnNpb24nKVxuXG4gIGlmICh0aGlzLm1pbm9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1pbm9yIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1pbm9yIHZlcnNpb24nKVxuXG4gIGlmICh0aGlzLnBhdGNoID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLnBhdGNoIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHBhdGNoIHZlcnNpb24nKVxuXG4gIC8vIG51bWJlcmlmeSBhbnkgcHJlcmVsZWFzZSBudW1lcmljIGlkc1xuICBpZiAoIW1bNF0pXG4gICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gIGVsc2VcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBtWzRdLnNwbGl0KCcuJykubWFwKGZ1bmN0aW9uKGlkKSB7XG4gICAgICBpZiAoL15bMC05XSskLy50ZXN0KGlkKSkge1xuICAgICAgICB2YXIgbnVtID0gK2lkO1xuICAgICAgICBpZiAobnVtID49IDAgJiYgbnVtIDwgTUFYX1NBRkVfSU5URUdFUilcbiAgICAgICAgICByZXR1cm4gbnVtO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlkO1xuICAgIH0pO1xuXG4gIHRoaXMuYnVpbGQgPSBtWzVdID8gbVs1XS5zcGxpdCgnLicpIDogW107XG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblNlbVZlci5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudmVyc2lvbiA9IHRoaXMubWFqb3IgKyAnLicgKyB0aGlzLm1pbm9yICsgJy4nICsgdGhpcy5wYXRjaDtcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgdGhpcy52ZXJzaW9uICs9ICctJyArIHRoaXMucHJlcmVsZWFzZS5qb2luKCcuJyk7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBkZWJ1ZygnU2VtVmVyLmNvbXBhcmUnLCB0aGlzLnZlcnNpb24sIHRoaXMubG9vc2UsIG90aGVyKTtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIHRoaXMuY29tcGFyZU1haW4ob3RoZXIpIHx8IHRoaXMuY29tcGFyZVByZShvdGhlcik7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVNYWluID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1ham9yLCBvdGhlci5tYWpvcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1pbm9yLCBvdGhlci5taW5vcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLnBhdGNoLCBvdGhlci5wYXRjaCk7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVQcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICAvLyBOT1QgaGF2aW5nIGEgcHJlcmVsZWFzZSBpcyA+IGhhdmluZyBvbmVcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAtMTtcbiAgZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIDE7XG4gIGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gMDtcblxuICB2YXIgaSA9IDA7XG4gIGRvIHtcbiAgICB2YXIgYSA9IHRoaXMucHJlcmVsZWFzZVtpXTtcbiAgICB2YXIgYiA9IG90aGVyLnByZXJlbGVhc2VbaV07XG4gICAgZGVidWcoJ3ByZXJlbGVhc2UgY29tcGFyZScsIGksIGEsIGIpO1xuICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDA7XG4gICAgZWxzZSBpZiAoYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIC0xO1xuICAgIGVsc2UgaWYgKGEgPT09IGIpXG4gICAgICBjb250aW51ZTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpO1xuICB9IHdoaWxlICgrK2kpO1xufTtcblxuLy8gcHJlbWlub3Igd2lsbCBidW1wIHRoZSB2ZXJzaW9uIHVwIHRvIHRoZSBuZXh0IG1pbm9yIHJlbGVhc2UsIGFuZCBpbW1lZGlhdGVseVxuLy8gZG93biB0byBwcmUtcmVsZWFzZS4gcHJlbWFqb3IgYW5kIHByZXBhdGNoIHdvcmsgdGhlIHNhbWUgd2F5LlxuU2VtVmVyLnByb3RvdHlwZS5pbmMgPSBmdW5jdGlvbihyZWxlYXNlLCBpZGVudGlmaWVyKSB7XG4gIHN3aXRjaCAocmVsZWFzZSkge1xuICAgIGNhc2UgJ3ByZW1ham9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yID0gMDtcbiAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZW1pbm9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIGFscmVhZHkgYSBwcmVyZWxlYXNlLCBpdCB3aWxsIGJ1bXAgdG8gdGhlIG5leHQgdmVyc2lvblxuICAgICAgLy8gZHJvcCBhbnkgcHJlcmVsZWFzZXMgdGhhdCBtaWdodCBhbHJlYWR5IGV4aXN0LCBzaW5jZSB0aGV5IGFyZSBub3RcbiAgICAgIC8vIHJlbGV2YW50IGF0IHRoaXMgcG9pbnQuXG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgLy8gSWYgdGhlIGlucHV0IGlzIGEgbm9uLXByZXJlbGVhc2UgdmVyc2lvbiwgdGhpcyBhY3RzIHRoZSBzYW1lIGFzXG4gICAgLy8gcHJlcGF0Y2guXG4gICAgY2FzZSAncHJlcmVsZWFzZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcik7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ21ham9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWFqb3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtYWpvciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtYWpvci5cbiAgICAgIC8vIDEuMC4wLTUgYnVtcHMgdG8gMS4wLjBcbiAgICAgIC8vIDEuMS4wIGJ1bXBzIHRvIDIuMC4wXG4gICAgICBpZiAodGhpcy5taW5vciAhPT0gMCB8fCB0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMubWlub3IgPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21pbm9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWlub3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtaW5vciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtaW5vci5cbiAgICAgIC8vIDEuMi4wLTUgYnVtcHMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4xIGJ1bXBzIHRvIDEuMy4wXG4gICAgICBpZiAodGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGF0Y2gnOlxuICAgICAgLy8gSWYgdGhpcyBpcyBub3QgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uLCBpdCB3aWxsIGluY3JlbWVudCB0aGUgcGF0Y2guXG4gICAgICAvLyBJZiBpdCBpcyBhIHByZS1yZWxlYXNlIGl0IHdpbGwgYnVtcCB1cCB0byB0aGUgc2FtZSBwYXRjaCB2ZXJzaW9uLlxuICAgICAgLy8gMS4yLjAtNSBwYXRjaGVzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMCBwYXRjaGVzIHRvIDEuMi4xXG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5wYXRjaCsrO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICAvLyBUaGlzIHByb2JhYmx5IHNob3VsZG4ndCBiZSB1c2VkIHB1YmxpY2x5LlxuICAgIC8vIDEuMC4wIFwicHJlXCIgd291bGQgYmVjb21lIDEuMC4wLTAgd2hpY2ggaXMgdGhlIHdyb25nIGRpcmVjdGlvbi5cbiAgICBjYXNlICdwcmUnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFswXTtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgaSA9IHRoaXMucHJlcmVsZWFzZS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVyZWxlYXNlW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlW2ldKys7XG4gICAgICAgICAgICBpID0gLTI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpID09PSAtMSkgLy8gZGlkbid0IGluY3JlbWVudCBhbnl0aGluZ1xuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZS5wdXNoKDApO1xuICAgICAgfVxuICAgICAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICAgICAgLy8gMS4yLjAtYmV0YS4xIGJ1bXBzIHRvIDEuMi4wLWJldGEuMixcbiAgICAgICAgLy8gMS4yLjAtYmV0YS5mb29ibHogb3IgMS4yLjAtYmV0YSBidW1wcyB0byAxLjIuMC1iZXRhLjBcbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZVswXSA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgIGlmIChpc05hTih0aGlzLnByZXJlbGVhc2VbMV0pKVxuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF07XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW5jcmVtZW50IGFyZ3VtZW50OiAnICsgcmVsZWFzZSk7XG4gIH1cbiAgdGhpcy5mb3JtYXQoKTtcbiAgdGhpcy5yYXcgPSB0aGlzLnZlcnNpb247XG4gIHJldHVybiB0aGlzO1xufTtcblxuZXhwb3J0cy5pbmMgPSBpbmM7XG5mdW5jdGlvbiBpbmModmVyc2lvbiwgcmVsZWFzZSwgbG9vc2UsIGlkZW50aWZpZXIpIHtcbiAgaWYgKHR5cGVvZihsb29zZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgaWRlbnRpZmllciA9IGxvb3NlO1xuICAgIGxvb3NlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSkuaW5jKHJlbGVhc2UsIGlkZW50aWZpZXIpLnZlcnNpb247XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy5kaWZmID0gZGlmZjtcbmZ1bmN0aW9uIGRpZmYodmVyc2lvbjEsIHZlcnNpb24yKSB7XG4gIGlmIChlcSh2ZXJzaW9uMSwgdmVyc2lvbjIpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHYxID0gcGFyc2UodmVyc2lvbjEpO1xuICAgIHZhciB2MiA9IHBhcnNlKHZlcnNpb24yKTtcbiAgICBpZiAodjEucHJlcmVsZWFzZS5sZW5ndGggfHwgdjIucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuICdwcmUnK2tleTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAncHJlcmVsZWFzZSc7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLmNvbXBhcmVJZGVudGlmaWVycyA9IGNvbXBhcmVJZGVudGlmaWVycztcblxudmFyIG51bWVyaWMgPSAvXlswLTldKyQvO1xuZnVuY3Rpb24gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpIHtcbiAgdmFyIGFudW0gPSBudW1lcmljLnRlc3QoYSk7XG4gIHZhciBibnVtID0gbnVtZXJpYy50ZXN0KGIpO1xuXG4gIGlmIChhbnVtICYmIGJudW0pIHtcbiAgICBhID0gK2E7XG4gICAgYiA9ICtiO1xuICB9XG5cbiAgcmV0dXJuIChhbnVtICYmICFibnVtKSA/IC0xIDpcbiAgICAgICAgIChibnVtICYmICFhbnVtKSA/IDEgOlxuICAgICAgICAgYSA8IGIgPyAtMSA6XG4gICAgICAgICBhID4gYiA/IDEgOlxuICAgICAgICAgMDtcbn1cblxuZXhwb3J0cy5yY29tcGFyZUlkZW50aWZpZXJzID0gcmNvbXBhcmVJZGVudGlmaWVycztcbmZ1bmN0aW9uIHJjb21wYXJlSWRlbnRpZmllcnMoYSwgYikge1xuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGIsIGEpO1xufVxuXG5leHBvcnRzLm1ham9yID0gbWFqb3I7XG5mdW5jdGlvbiBtYWpvcihhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWFqb3I7XG59XG5cbmV4cG9ydHMubWlub3IgPSBtaW5vcjtcbmZ1bmN0aW9uIG1pbm9yKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5taW5vcjtcbn1cblxuZXhwb3J0cy5wYXRjaCA9IHBhdGNoO1xuZnVuY3Rpb24gcGF0Y2goYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLnBhdGNoO1xufVxuXG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlO1xuZnVuY3Rpb24gY29tcGFyZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkuY29tcGFyZShiKTtcbn1cblxuZXhwb3J0cy5jb21wYXJlTG9vc2UgPSBjb21wYXJlTG9vc2U7XG5mdW5jdGlvbiBjb21wYXJlTG9vc2UoYSwgYikge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCB0cnVlKTtcbn1cblxuZXhwb3J0cy5yY29tcGFyZSA9IHJjb21wYXJlO1xuZnVuY3Rpb24gcmNvbXBhcmUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYiwgYSwgbG9vc2UpO1xufVxuXG5leHBvcnRzLnNvcnQgPSBzb3J0O1xuZnVuY3Rpb24gc29ydChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5jb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMucnNvcnQgPSByc29ydDtcbmZ1bmN0aW9uIHJzb3J0KGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLnJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMuZ3QgPSBndDtcbmZ1bmN0aW9uIGd0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+IDA7XG59XG5cbmV4cG9ydHMubHQgPSBsdDtcbmZ1bmN0aW9uIGx0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8IDA7XG59XG5cbmV4cG9ydHMuZXEgPSBlcTtcbmZ1bmN0aW9uIGVxKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA9PT0gMDtcbn1cblxuZXhwb3J0cy5uZXEgPSBuZXE7XG5mdW5jdGlvbiBuZXEoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpICE9PSAwO1xufVxuXG5leHBvcnRzLmd0ZSA9IGd0ZTtcbmZ1bmN0aW9uIGd0ZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPj0gMDtcbn1cblxuZXhwb3J0cy5sdGUgPSBsdGU7XG5mdW5jdGlvbiBsdGUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDw9IDA7XG59XG5cbmV4cG9ydHMuY21wID0gY21wO1xuZnVuY3Rpb24gY21wKGEsIG9wLCBiLCBsb29zZSkge1xuICB2YXIgcmV0O1xuICBzd2l0Y2ggKG9wKSB7XG4gICAgY2FzZSAnPT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIGEgPSBhLnZlcnNpb247XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSBiID0gYi52ZXJzaW9uO1xuICAgICAgcmV0ID0gYSA9PT0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyE9PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSBhID0gYS52ZXJzaW9uO1xuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JykgYiA9IGIudmVyc2lvbjtcbiAgICAgIHJldCA9IGEgIT09IGI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcnOiBjYXNlICc9JzogY2FzZSAnPT0nOiByZXQgPSBlcShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJyE9JzogcmV0ID0gbmVxKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPic6IHJldCA9IGd0KGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPj0nOiByZXQgPSBndGUoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8JzogcmV0ID0gbHQoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8PSc6IHJldCA9IGx0ZShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgb3BlcmF0b3I6ICcgKyBvcCk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0cy5Db21wYXJhdG9yID0gQ29tcGFyYXRvcjtcbmZ1bmN0aW9uIENvbXBhcmF0b3IoY29tcCwgbG9vc2UpIHtcbiAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgaWYgKGNvbXAubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIGNvbXA7XG4gICAgZWxzZVxuICAgICAgY29tcCA9IGNvbXAudmFsdWU7XG4gIH1cblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29tcGFyYXRvcikpXG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcblxuICBkZWJ1ZygnY29tcGFyYXRvcicsIGNvbXAsIGxvb3NlKTtcbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuICB0aGlzLnBhcnNlKGNvbXApO1xuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKVxuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgZWxzZVxuICAgIHRoaXMudmFsdWUgPSB0aGlzLm9wZXJhdG9yICsgdGhpcy5zZW12ZXIudmVyc2lvbjtcblxuICBkZWJ1ZygnY29tcCcsIHRoaXMpO1xufVxuXG52YXIgQU5ZID0ge307XG5Db21wYXJhdG9yLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKGNvbXApIHtcbiAgdmFyIHIgPSB0aGlzLmxvb3NlID8gcmVbQ09NUEFSQVRPUkxPT1NFXSA6IHJlW0NPTVBBUkFUT1JdO1xuICB2YXIgbSA9IGNvbXAubWF0Y2gocik7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY29tcGFyYXRvcjogJyArIGNvbXApO1xuXG4gIHRoaXMub3BlcmF0b3IgPSBtWzFdO1xuICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJz0nKVxuICAgIHRoaXMub3BlcmF0b3IgPSAnJztcblxuICAvLyBpZiBpdCBsaXRlcmFsbHkgaXMganVzdCAnPicgb3IgJycgdGhlbiBhbGxvdyBhbnl0aGluZy5cbiAgaWYgKCFtWzJdKVxuICAgIHRoaXMuc2VtdmVyID0gQU5ZO1xuICBlbHNlXG4gICAgdGhpcy5zZW12ZXIgPSBuZXcgU2VtVmVyKG1bMl0sIHRoaXMubG9vc2UpO1xufTtcblxuQ29tcGFyYXRvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24odmVyc2lvbikge1xuICBkZWJ1ZygnQ29tcGFyYXRvci50ZXN0JywgdmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpXG4gICAgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY21wKHZlcnNpb24sIHRoaXMub3BlcmF0b3IsIHRoaXMuc2VtdmVyLCB0aGlzLmxvb3NlKTtcbn07XG5cblxuZXhwb3J0cy5SYW5nZSA9IFJhbmdlO1xuZnVuY3Rpb24gUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIGlmICgocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkgJiYgcmFuZ2UubG9vc2UgPT09IGxvb3NlKVxuICAgIHJldHVybiByYW5nZTtcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmFuZ2UpKVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB0aGlzLmxvb3NlID0gbG9vc2U7XG5cbiAgLy8gRmlyc3QsIHNwbGl0IGJhc2VkIG9uIGJvb2xlYW4gb3IgfHxcbiAgdGhpcy5yYXcgPSByYW5nZTtcbiAgdGhpcy5zZXQgPSByYW5nZS5zcGxpdCgvXFxzKlxcfFxcfFxccyovKS5tYXAoZnVuY3Rpb24ocmFuZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVJhbmdlKHJhbmdlLnRyaW0oKSk7XG4gIH0sIHRoaXMpLmZpbHRlcihmdW5jdGlvbihjKSB7XG4gICAgLy8gdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgcmVsZXZhbnQgZm9yIHdoYXRldmVyIHJlYXNvblxuICAgIHJldHVybiBjLmxlbmd0aDtcbiAgfSk7XG5cbiAgaWYgKCF0aGlzLnNldC5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFNlbVZlciBSYW5nZTogJyArIHJhbmdlKTtcbiAgfVxuXG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblJhbmdlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yYW5nZSA9IHRoaXMuc2V0Lm1hcChmdW5jdGlvbihjb21wcykge1xuICAgIHJldHVybiBjb21wcy5qb2luKCcgJykudHJpbSgpO1xuICB9KS5qb2luKCd8fCcpLnRyaW0oKTtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUucGFyc2VSYW5nZSA9IGZ1bmN0aW9uKHJhbmdlKSB7XG4gIHZhciBsb29zZSA9IHRoaXMubG9vc2U7XG4gIHJhbmdlID0gcmFuZ2UudHJpbSgpO1xuICBkZWJ1ZygncmFuZ2UnLCByYW5nZSwgbG9vc2UpO1xuICAvLyBgMS4yLjMgLSAxLjIuNGAgPT4gYD49MS4yLjMgPD0xLjIuNGBcbiAgdmFyIGhyID0gbG9vc2UgPyByZVtIWVBIRU5SQU5HRUxPT1NFXSA6IHJlW0hZUEhFTlJBTkdFXTtcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKGhyLCBoeXBoZW5SZXBsYWNlKTtcbiAgZGVidWcoJ2h5cGhlbiByZXBsYWNlJywgcmFuZ2UpO1xuICAvLyBgPiAxLjIuMyA8IDEuMi41YCA9PiBgPjEuMi4zIDwxLjIuNWBcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NPTVBBUkFUT1JUUklNXSwgY29tcGFyYXRvclRyaW1SZXBsYWNlKTtcbiAgZGVidWcoJ2NvbXBhcmF0b3IgdHJpbScsIHJhbmdlLCByZVtDT01QQVJBVE9SVFJJTV0pO1xuXG4gIC8vIGB+IDEuMi4zYCA9PiBgfjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbVElMREVUUklNXSwgdGlsZGVUcmltUmVwbGFjZSk7XG5cbiAgLy8gYF4gMS4yLjNgID0+IGBeMS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtDQVJFVFRSSU1dLCBjYXJldFRyaW1SZXBsYWNlKTtcblxuICAvLyBub3JtYWxpemUgc3BhY2VzXG4gIHJhbmdlID0gcmFuZ2Uuc3BsaXQoL1xccysvKS5qb2luKCcgJyk7XG5cbiAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgdHJpbW1lZCBhbmRcbiAgLy8gcmVhZHkgdG8gYmUgc3BsaXQgaW50byBjb21wYXJhdG9ycy5cblxuICB2YXIgY29tcFJlID0gbG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl07XG4gIHZhciBzZXQgPSByYW5nZS5zcGxpdCgnICcpLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKS5zcGxpdCgvXFxzKy8pO1xuICBpZiAodGhpcy5sb29zZSkge1xuICAgIC8vIGluIGxvb3NlIG1vZGUsIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHZhbGlkIGNvbXBhcmF0b3JzXG4gICAgc2V0ID0gc2V0LmZpbHRlcihmdW5jdGlvbihjb21wKSB7XG4gICAgICByZXR1cm4gISFjb21wLm1hdGNoKGNvbXBSZSk7XG4gICAgfSk7XG4gIH1cbiAgc2V0ID0gc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNldDtcbn07XG5cbi8vIE1vc3RseSBqdXN0IGZvciB0ZXN0aW5nIGFuZCBsZWdhY3kgQVBJIHJlYXNvbnNcbmV4cG9ydHMudG9Db21wYXJhdG9ycyA9IHRvQ29tcGFyYXRvcnM7XG5mdW5jdGlvbiB0b0NvbXBhcmF0b3JzKHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSkuc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIGNvbXAubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgIHJldHVybiBjLnZhbHVlO1xuICAgIH0pLmpvaW4oJyAnKS50cmltKCkuc3BsaXQoJyAnKTtcbiAgfSk7XG59XG5cbi8vIGNvbXByaXNlZCBvZiB4cmFuZ2VzLCB0aWxkZXMsIHN0YXJzLCBhbmQgZ3RsdCdzIGF0IHRoaXMgcG9pbnQuXG4vLyBhbHJlYWR5IHJlcGxhY2VkIHRoZSBoeXBoZW4gcmFuZ2VzXG4vLyB0dXJuIGludG8gYSBzZXQgb2YgSlVTVCBjb21wYXJhdG9ycy5cbmZ1bmN0aW9uIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSkge1xuICBkZWJ1ZygnY29tcCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZUNhcmV0cyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVRpbGRlcyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCd0aWxkZXMnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VYUmFuZ2VzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3hyYW5nZScsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVN0YXJzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3N0YXJzJywgY29tcCk7XG4gIHJldHVybiBjb21wO1xufVxuXG5mdW5jdGlvbiBpc1goaWQpIHtcbiAgcmV0dXJuICFpZCB8fCBpZC50b0xvd2VyQ2FzZSgpID09PSAneCcgfHwgaWQgPT09ICcqJztcbn1cblxuLy8gfiwgfj4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyB+MiwgfjIueCwgfjIueC54LCB+PjIsIH4+Mi54IH4+Mi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyB+Mi4wLCB+Mi4wLngsIH4+Mi4wLCB+PjIuMC54IC0tPiA+PTIuMC4wIDwyLjEuMFxuLy8gfjEuMiwgfjEuMi54LCB+PjEuMiwgfj4xLjIueCAtLT4gPj0xLjIuMCA8MS4zLjBcbi8vIH4xLjIuMywgfj4xLjIuMyAtLT4gPj0xLjIuMyA8MS4zLjBcbi8vIH4xLjIuMCwgfj4xLjIuMCAtLT4gPj0xLjIuMCA8MS4zLjBcbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZXMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVRpbGRlKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVGlsZGUoY29tcCwgbG9vc2UpIHtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW1RJTERFTE9PU0VdIDogcmVbVElMREVdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3RpbGRlJywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSlcbiAgICAgIC8vIH4xLjIgPT0gPj0xLjIuMCA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlVGlsZGUgcHInLCBwcik7XG4gICAgICBpZiAocHIuY2hhckF0KDApICE9PSAnLScpXG4gICAgICAgIHByID0gJy0nICsgcHI7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfSBlbHNlXG4gICAgICAvLyB+MS4yLjMgPT0gPj0xLjIuMyA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG5cbiAgICBkZWJ1ZygndGlsZGUgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuLy8gXiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIF4yLCBeMi54LCBeMi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMi4wLCBeMi4wLnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMS4yLCBeMS4yLnggLS0+ID49MS4yLjAgPDIuMC4wXG4vLyBeMS4yLjMgLS0+ID49MS4yLjMgPDIuMC4wXG4vLyBeMS4yLjAgLS0+ID49MS4yLjAgPDIuMC4wXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXRzKGNvbXAsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VDYXJldChjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0KGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXAsIGxvb3NlKTtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW0NBUkVUTE9PU0VdIDogcmVbQ0FSRVRdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ2NhcmV0JywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSkge1xuICAgICAgaWYgKE0gPT09ICcwJylcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VDYXJldCBwcicsIHByKTtcbiAgICAgIGlmIChwci5jaGFyQXQoMCkgIT09ICctJylcbiAgICAgICAgcHIgPSAnLScgKyBwcjtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJylcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAnIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdubyBwcicpO1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9XG5cbiAgICBkZWJ1ZygnY2FyZXQgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZXMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VYUmFuZ2VzJywgY29tcCwgbG9vc2UpO1xuICByZXR1cm4gY29tcC5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpIHtcbiAgY29tcCA9IGNvbXAudHJpbSgpO1xuICB2YXIgciA9IGxvb3NlID8gcmVbWFJBTkdFTE9PU0VdIDogcmVbWFJBTkdFXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihyZXQsIGd0bHQsIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3hSYW5nZScsIGNvbXAsIHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpO1xuICAgIHZhciB4TSA9IGlzWChNKTtcbiAgICB2YXIgeG0gPSB4TSB8fCBpc1gobSk7XG4gICAgdmFyIHhwID0geG0gfHwgaXNYKHApO1xuICAgIHZhciBhbnlYID0geHA7XG5cbiAgICBpZiAoZ3RsdCA9PT0gJz0nICYmIGFueVgpXG4gICAgICBndGx0ID0gJyc7XG5cbiAgICBpZiAoeE0pIHtcbiAgICAgIGlmIChndGx0ID09PSAnPicgfHwgZ3RsdCA9PT0gJzwnKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgYWxsb3dlZFxuICAgICAgICByZXQgPSAnPDAuMC4wJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgZm9yYmlkZGVuXG4gICAgICAgIHJldCA9ICcqJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGd0bHQgJiYgYW55WCkge1xuICAgICAgLy8gcmVwbGFjZSBYIHdpdGggMFxuICAgICAgaWYgKHhtKVxuICAgICAgICBtID0gMDtcbiAgICAgIGlmICh4cClcbiAgICAgICAgcCA9IDA7XG5cbiAgICAgIGlmIChndGx0ID09PSAnPicpIHtcbiAgICAgICAgLy8gPjEgPT4gPj0yLjAuMFxuICAgICAgICAvLyA+MS4yID0+ID49MS4zLjBcbiAgICAgICAgLy8gPjEuMi4zID0+ID49IDEuMi40XG4gICAgICAgIGd0bHQgPSAnPj0nO1xuICAgICAgICBpZiAoeG0pIHtcbiAgICAgICAgICBNID0gK00gKyAxO1xuICAgICAgICAgIG0gPSAwO1xuICAgICAgICAgIHAgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICAgICAgbSA9ICttICsgMTtcbiAgICAgICAgICBwID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChndGx0ID09PSAnPD0nKSB7XG4gICAgICAgIC8vIDw9MC43LnggaXMgYWN0dWFsbHkgPDAuOC4wLCBzaW5jZSBhbnkgMC43Lnggc2hvdWxkXG4gICAgICAgIC8vIHBhc3MuICBTaW1pbGFybHksIDw9Ny54IGlzIGFjdHVhbGx5IDw4LjAuMCwgZXRjLlxuICAgICAgICBndGx0ID0gJzwnO1xuICAgICAgICBpZiAoeG0pXG4gICAgICAgICAgTSA9ICtNICsgMTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG0gPSArbSArIDE7XG4gICAgICB9XG5cbiAgICAgIHJldCA9IGd0bHQgKyBNICsgJy4nICsgbSArICcuJyArIHA7XG4gICAgfSBlbHNlIGlmICh4bSkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfVxuXG4gICAgZGVidWcoJ3hSYW5nZSByZXR1cm4nLCByZXQpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbi8vIEJlY2F1c2UgKiBpcyBBTkQtZWQgd2l0aCBldmVyeXRoaW5nIGVsc2UgaW4gdGhlIGNvbXBhcmF0b3IsXG4vLyBhbmQgJycgbWVhbnMgXCJhbnkgdmVyc2lvblwiLCBqdXN0IHJlbW92ZSB0aGUgKnMgZW50aXJlbHkuXG5mdW5jdGlvbiByZXBsYWNlU3RhcnMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VTdGFycycsIGNvbXAsIGxvb3NlKTtcbiAgLy8gTG9vc2VuZXNzIGlzIGlnbm9yZWQgaGVyZS4gIHN0YXIgaXMgYWx3YXlzIGFzIGxvb3NlIGFzIGl0IGdldHMhXG4gIHJldHVybiBjb21wLnRyaW0oKS5yZXBsYWNlKHJlW1NUQVJdLCAnJyk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgcGFzc2VkIHRvIHN0cmluZy5yZXBsYWNlKHJlW0hZUEhFTlJBTkdFXSlcbi8vIE0sIG0sIHBhdGNoLCBwcmVyZWxlYXNlLCBidWlsZFxuLy8gMS4yIC0gMy40LjUgPT4gPj0xLjIuMCA8PTMuNC41XG4vLyAxLjIuMyAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMCBBbnkgMy40Lnggd2lsbCBkb1xuLy8gMS4yIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wXG5mdW5jdGlvbiBoeXBoZW5SZXBsYWNlKCQwLFxuICAgICAgICAgICAgICAgICAgICAgICBmcm9tLCBmTSwgZm0sIGZwLCBmcHIsIGZiLFxuICAgICAgICAgICAgICAgICAgICAgICB0bywgdE0sIHRtLCB0cCwgdHByLCB0Yikge1xuXG4gIGlmIChpc1goZk0pKVxuICAgIGZyb20gPSAnJztcbiAgZWxzZSBpZiAoaXNYKGZtKSlcbiAgICBmcm9tID0gJz49JyArIGZNICsgJy4wLjAnO1xuICBlbHNlIGlmIChpc1goZnApKVxuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLicgKyBmbSArICcuMCc7XG4gIGVsc2VcbiAgICBmcm9tID0gJz49JyArIGZyb207XG5cbiAgaWYgKGlzWCh0TSkpXG4gICAgdG8gPSAnJztcbiAgZWxzZSBpZiAoaXNYKHRtKSlcbiAgICB0byA9ICc8JyArICgrdE0gKyAxKSArICcuMC4wJztcbiAgZWxzZSBpZiAoaXNYKHRwKSlcbiAgICB0byA9ICc8JyArIHRNICsgJy4nICsgKCt0bSArIDEpICsgJy4wJztcbiAgZWxzZSBpZiAodHByKVxuICAgIHRvID0gJzw9JyArIHRNICsgJy4nICsgdG0gKyAnLicgKyB0cCArICctJyArIHRwcjtcbiAgZWxzZVxuICAgIHRvID0gJzw9JyArIHRvO1xuXG4gIHJldHVybiAoZnJvbSArICcgJyArIHRvKS50cmltKCk7XG59XG5cblxuLy8gaWYgQU5ZIG9mIHRoZSBzZXRzIG1hdGNoIEFMTCBvZiBpdHMgY29tcGFyYXRvcnMsIHRoZW4gcGFzc1xuUmFuZ2UucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gIGlmICghdmVyc2lvbilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRlc3RTZXQodGhpcy5zZXRbaV0sIHZlcnNpb24pKVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZnVuY3Rpb24gdGVzdFNldChzZXQsIHZlcnNpb24pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXNldFtpXS50ZXN0KHZlcnNpb24pKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHZlcnNpb24ucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAvLyBGaW5kIHRoZSBzZXQgb2YgdmVyc2lvbnMgdGhhdCBhcmUgYWxsb3dlZCB0byBoYXZlIHByZXJlbGVhc2VzXG4gICAgLy8gRm9yIGV4YW1wbGUsIF4xLjIuMy1wci4xIGRlc3VnYXJzIHRvID49MS4yLjMtcHIuMSA8Mi4wLjBcbiAgICAvLyBUaGF0IHNob3VsZCBhbGxvdyBgMS4yLjMtcHIuMmAgdG8gcGFzcy5cbiAgICAvLyBIb3dldmVyLCBgMS4yLjQtYWxwaGEubm90cmVhZHlgIHNob3VsZCBOT1QgYmUgYWxsb3dlZCxcbiAgICAvLyBldmVuIHRob3VnaCBpdCdzIHdpdGhpbiB0aGUgcmFuZ2Ugc2V0IGJ5IHRoZSBjb21wYXJhdG9ycy5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoc2V0W2ldLnNlbXZlcik7XG4gICAgICBpZiAoc2V0W2ldLnNlbXZlciA9PT0gQU5ZKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgaWYgKHNldFtpXS5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBhbGxvd2VkID0gc2V0W2ldLnNlbXZlcjtcbiAgICAgICAgaWYgKGFsbG93ZWQubWFqb3IgPT09IHZlcnNpb24ubWFqb3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQubWlub3IgPT09IHZlcnNpb24ubWlub3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQucGF0Y2ggPT09IHZlcnNpb24ucGF0Y2gpXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVmVyc2lvbiBoYXMgYSAtcHJlLCBidXQgaXQncyBub3Qgb25lIG9mIHRoZSBvbmVzIHdlIGxpa2UuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMuc2F0aXNmaWVzID0gc2F0aXNmaWVzO1xuZnVuY3Rpb24gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICB0cnkge1xuICAgIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiByYW5nZS50ZXN0KHZlcnNpb24pO1xufVxuXG5leHBvcnRzLm1heFNhdGlzZnlpbmcgPSBtYXhTYXRpc2Z5aW5nO1xuZnVuY3Rpb24gbWF4U2F0aXNmeWluZyh2ZXJzaW9ucywgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiB2ZXJzaW9ucy5maWx0ZXIoZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKTtcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIHJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSlbMF0gfHwgbnVsbDtcbn1cblxuZXhwb3J0cy5taW5TYXRpc2Z5aW5nID0gbWluU2F0aXNmeWluZztcbmZ1bmN0aW9uIG1pblNhdGlzZnlpbmcodmVyc2lvbnMsIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gdmVyc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSlbMF0gfHwgbnVsbDtcbn1cblxuZXhwb3J0cy52YWxpZFJhbmdlID0gdmFsaWRSYW5nZTtcbmZ1bmN0aW9uIHZhbGlkUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIHRyeSB7XG4gICAgLy8gUmV0dXJuICcqJyBpbnN0ZWFkIG9mICcnIHNvIHRoYXQgdHJ1dGhpbmVzcyB3b3Jrcy5cbiAgICAvLyBUaGlzIHdpbGwgdGhyb3cgaWYgaXQncyBpbnZhbGlkIGFueXdheVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKS5yYW5nZSB8fCAnKic7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgbGVzcyB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlXG5leHBvcnRzLmx0ciA9IGx0cjtcbmZ1bmN0aW9uIGx0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc8JywgbG9vc2UpO1xufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2UuXG5leHBvcnRzLmd0ciA9IGd0cjtcbmZ1bmN0aW9uIGd0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc+JywgbG9vc2UpO1xufVxuXG5leHBvcnRzLm91dHNpZGUgPSBvdXRzaWRlO1xuZnVuY3Rpb24gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgaGlsbywgbG9vc2UpIHtcbiAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuXG4gIHZhciBndGZuLCBsdGVmbiwgbHRmbiwgY29tcCwgZWNvbXA7XG4gIHN3aXRjaCAoaGlsbykge1xuICAgIGNhc2UgJz4nOlxuICAgICAgZ3RmbiA9IGd0O1xuICAgICAgbHRlZm4gPSBsdGU7XG4gICAgICBsdGZuID0gbHQ7XG4gICAgICBjb21wID0gJz4nO1xuICAgICAgZWNvbXAgPSAnPj0nO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnPCc6XG4gICAgICBndGZuID0gbHQ7XG4gICAgICBsdGVmbiA9IGd0ZTtcbiAgICAgIGx0Zm4gPSBndDtcbiAgICAgIGNvbXAgPSAnPCc7XG4gICAgICBlY29tcCA9ICc8PSc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBwcm92aWRlIGEgaGlsbyB2YWwgb2YgXCI8XCIgb3IgXCI+XCInKTtcbiAgfVxuXG4gIC8vIElmIGl0IHNhdGlzaWZlcyB0aGUgcmFuZ2UgaXQgaXMgbm90IG91dHNpZGVcbiAgaWYgKHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRnJvbSBub3cgb24sIHZhcmlhYmxlIHRlcm1zIGFyZSBhcyBpZiB3ZSdyZSBpbiBcImd0clwiIG1vZGUuXG4gIC8vIGJ1dCBub3RlIHRoYXQgZXZlcnl0aGluZyBpcyBmbGlwcGVkIGZvciB0aGUgXCJsdHJcIiBmdW5jdGlvbi5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJhbmdlLnNldC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBjb21wYXJhdG9ycyA9IHJhbmdlLnNldFtpXTtcblxuICAgIHZhciBoaWdoID0gbnVsbDtcbiAgICB2YXIgbG93ID0gbnVsbDtcblxuICAgIGNvbXBhcmF0b3JzLmZvckVhY2goZnVuY3Rpb24oY29tcGFyYXRvcikge1xuICAgICAgaWYgKGNvbXBhcmF0b3Iuc2VtdmVyID09PSBBTlkpIHtcbiAgICAgICAgY29tcGFyYXRvciA9IG5ldyBDb21wYXJhdG9yKCc+PTAuMC4wJylcbiAgICAgIH1cbiAgICAgIGhpZ2ggPSBoaWdoIHx8IGNvbXBhcmF0b3I7XG4gICAgICBsb3cgPSBsb3cgfHwgY29tcGFyYXRvcjtcbiAgICAgIGlmIChndGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBoaWdoLnNlbXZlciwgbG9vc2UpKSB7XG4gICAgICAgIGhpZ2ggPSBjb21wYXJhdG9yO1xuICAgICAgfSBlbHNlIGlmIChsdGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBsb3cuc2VtdmVyLCBsb29zZSkpIHtcbiAgICAgICAgbG93ID0gY29tcGFyYXRvcjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIElmIHRoZSBlZGdlIHZlcnNpb24gY29tcGFyYXRvciBoYXMgYSBvcGVyYXRvciB0aGVuIG91ciB2ZXJzaW9uXG4gICAgLy8gaXNuJ3Qgb3V0c2lkZSBpdFxuICAgIGlmIChoaWdoLm9wZXJhdG9yID09PSBjb21wIHx8IGhpZ2gub3BlcmF0b3IgPT09IGVjb21wKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGxvd2VzdCB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGFuIG9wZXJhdG9yIGFuZCBvdXIgdmVyc2lvblxuICAgIC8vIGlzIGxlc3MgdGhhbiBpdCB0aGVuIGl0IGlzbid0IGhpZ2hlciB0aGFuIHRoZSByYW5nZVxuICAgIGlmICgoIWxvdy5vcGVyYXRvciB8fCBsb3cub3BlcmF0b3IgPT09IGNvbXApICYmXG4gICAgICAgIGx0ZWZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChsb3cub3BlcmF0b3IgPT09IGVjb21wICYmIGx0Zm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMucHJlcmVsZWFzZSA9IHByZXJlbGVhc2U7XG5mdW5jdGlvbiBwcmVyZWxlYXNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciBwYXJzZWQgPSBwYXJzZSh2ZXJzaW9uLCBsb29zZSk7XG4gIHJldHVybiAocGFyc2VkICYmIHBhcnNlZC5wcmVyZWxlYXNlLmxlbmd0aCkgPyBwYXJzZWQucHJlcmVsZWFzZSA6IG51bGw7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLm5wbWluc3RhbGwvc2VtdmVyLzUuMy4wL3NlbXZlci9zZW12ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9zd2l0Y2ggZnJvbSAnLi9zd2l0Y2gnXG5leHBvcnQgeyBfc3dpdGNoIGFzIHN3aXRjaCB9XG5cbmltcG9ydCBjZWxsIGZyb20gJy4vY2VsbCdcbmltcG9ydCBpbWFnZSBmcm9tICcuL2ltYWdlJ1xuaW1wb3J0IGxpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IHNjcm9sbGVyIGZyb20gJy4vc2Nyb2xsZXInXG5pbXBvcnQgdGV4dCBmcm9tICcuL3RleHQnXG5pbXBvcnQgd2ViIGZyb20gJy4vd2ViJ1xuXG5leHBvcnQge1xuICBjZWxsLFxuICBpbWFnZSxcbiAgbGlzdCxcbiAgc2Nyb2xsZXIsXG4gIHRleHQsXG4gIHdlYlxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL2luZGV4LmpzIiwiaW1wb3J0ICogYXMgc3R5bGVWYWxpZGF0b3IgZnJvbSAnLi9zdHlsZSdcbmltcG9ydCAqIGFzIHByb3BWYWxpZGF0b3IgZnJvbSAnLi9wcm9wJ1xuaW1wb3J0IHsgaHlwaGVuYXRlLCBjYW1lbGl6ZSB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNTdXBwb3J0ZWRTdHlsZSB9IGZyb20gJy4vY2hlY2snXG5cbmxldCBvbmZhaWwgPSBmdW5jdGlvbiBub3BlICgpIHt9XG5sZXQgc2hvd0NvbnNvbGUgPSB0cnVlXG5cbmZ1bmN0aW9uIHdhcm4gKC4uLmFyZ3MpIHtcbiAgY29uc3QgbWVzc2FnZSA9IGFyZ3Muam9pbignICcpXG4gIHNob3dDb25zb2xlICYmIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gIG9uZmFpbChtZXNzYWdlKVxuICByZXR1cm4gbWVzc2FnZVxufVxuXG4vKipcbiAqIENvbmZpZ3VyZSB0aGUgdmFsaWRhdG9yLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZSAoY29uZmlncyA9IHt9KSB7XG4gIHNob3dDb25zb2xlID0gIWNvbmZpZ3Muc2lsZW50XG4gIGlmICh0eXBlb2YgY29uZmlncy5vbmZhaWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvbmZhaWwgPSBjb25maWdzLm9uZmFpbFxuICB9XG59XG5cbi8qKlxuICogVmFsaWRhdGUgdGhlIHN0eWxlcyBvZiB0aGUgY29tcG9uZW50LlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlU3R5bGVzICh0eXBlLCBzdHlsZXMgPSB7fSkge1xuICBsZXQgaXNWYWxpZCA9IHRydWVcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgaWYgKCFpc1N1cHBvcnRlZFN0eWxlKHR5cGUsIGh5cGhlbmF0ZShrZXkpKSkge1xuICAgICAgaXNWYWxpZCA9IGZhbHNlXG4gICAgICB3YXJuKGBbU3R5bGUgVmFsaWRhdG9yXSA8JHt0eXBlfT4gaXMgbm90IHN1cHBvcnQgdG8gdXNlIHRoZSBcIiR7a2V5fVwiIHN0eWxlLmApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3QgdmFsaWRhdG9yID0gc3R5bGVWYWxpZGF0b3JbY2FtZWxpemUoa2V5KV0gfHwgc3R5bGVWYWxpZGF0b3IuY29tbW9uXG4gICAgICBpZiAoIXZhbGlkYXRvcihzdHlsZXNba2V5XSwgaHlwaGVuYXRlKGtleSkpKSB7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgICB3YXJuKGBbU3R5bGUgVmFsaWRhdG9yXSBUaGUgc3R5bGUgXCIke2tleX1cIiBpcyBub3Qgc3VwcG9ydCB0aGUgXCIke3N0eWxlc1trZXldfVwiIHZhbHVlLmApXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBpc1ZhbGlkXG59XG5cbi8qKlxuICogVmFsaWRhdGUgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUHJvcHMgKHR5cGUsIHByb3BzID0ge30pIHtcbiAgbGV0IGlzVmFsaWQgPSB0cnVlXG4gIGZvciAoY29uc3Qga2V5IGluIHByb3BzKSB7XG4gICAgY29uc3QgdmFsaWRhdG9yID0gcHJvcFZhbGlkYXRvcltjYW1lbGl6ZShrZXkpXVxuICAgIGlmICh2YWxpZGF0b3IgJiYgIXZhbGlkYXRvcihwcm9wc1trZXldKSkge1xuICAgICAgaXNWYWxpZCA9IGZhbHNlXG4gICAgICB3YXJuKGBbUHJvcGVydHkgVmFsaWRhdG9yXSBUaGUgcHJvcGVydHkgXCIke2tleX1cIiBpcyBub3Qgc3VwcG9ydCB0aGUgXCIke3Byb3BzW2tleV19XCIgdmFsdWUuYClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlzVmFsaWRcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L3JlbmRlci92dWUvdmFsaWRhdG9yL2luZGV4LmpzIiwiaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi92YWxpZGF0b3InXG5pbXBvcnQgeyBkZWJvdW5jZSwgYmluZCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHJlY3RNaXhpbiBmcm9tICcuLi9taXhpbnMvcmVjdCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtyZWN0TWl4aW5dLFxuICBwcm9wczoge1xuICAgIGxvYWRtb3Jlb2Zmc2V0OiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlU2Nyb2xsIChldmVudCkge1xuICAgICAgaWYgKHRoaXMucmVhY2hCb3R0b20oKSkge1xuICAgICAgICB0aGlzLiRlbWl0KCdsb2FkbW9yZScsIGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdmFsaWRhdGVTdHlsZXMoJ3Njcm9sbGVyJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdtYWluJywge1xuICAgICAgcmVmOiAnd3JhcHBlcicsXG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ3Njcm9sbGVyJyB9LFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXNjcm9sbGVyIHdlZXgtc2Nyb2xsZXItd3JhcHBlcicsXG4gICAgICBvbjoge1xuICAgICAgICBzY3JvbGw6IGRlYm91bmNlKGJpbmQodGhpcy5oYW5kbGVTY3JvbGwsIHRoaXMpLCAxMDApXG4gICAgICB9XG4gICAgfSwgW1xuICAgICAgY3JlYXRlRWxlbWVudCgnbWFyaycsIHsgcmVmOiAndG9wTWFyaycsIHN0YXRpY0NsYXNzOiAnd2VleC1zY3JvbGxlci10b3AtbWFyaycgfSksXG4gICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHJlZjogJ2lubmVyJyxcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXNjcm9sbGVyLWlubmVyJ1xuICAgICAgfSwgdGhpcy4kc2xvdHMuZGVmYXVsdCksXG4gICAgICBjcmVhdGVFbGVtZW50KCdtYXJrJywgeyByZWY6ICdib3R0b21NYXJrJywgc3RhdGljQ2xhc3M6ICd3ZWV4LXNjcm9sbGVyLWJvdHRvbS1tYXJrJyB9KVxuICAgIF0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zY3JvbGxlci5qcyIsImltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgY2hlY2tlZDoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0NoZWNrZWQ6ICh0aGlzLmNoZWNrZWQgIT09ICdmYWxzZScgJiYgdGhpcy5jaGVja2VkICE9PSBmYWxzZSksXG4gICAgICBpc0Rpc2FibGVkOiAodGhpcy5kaXNhYmxlZCAhPT0gJ2ZhbHNlJyAmJiB0aGlzLmRpc2FibGVkICE9PSBmYWxzZSlcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgd3JhcHBlckNsYXNzICgpIHtcbiAgICAgIGNvbnN0IGNsYXNzQXJyYXkgPSBbJ3dlZXgtc3dpdGNoJ11cbiAgICAgIHRoaXMuaXNDaGVja2VkICYmIGNsYXNzQXJyYXkucHVzaCgnd2VleC1zd2l0Y2gtY2hlY2tlZCcpXG4gICAgICB0aGlzLmlzRGlzYWJsZWQgJiYgY2xhc3NBcnJheS5wdXNoKCd3ZWV4LXN3aXRjaC1kaXNhYmxlZCcpXG4gICAgICByZXR1cm4gY2xhc3NBcnJheS5qb2luKCcgJylcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGUgKCkge1xuICAgICAgLy8gVE9ETzogaGFuZGxlIHRoZSBldmVudHNcbiAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gIXRoaXMuaXNDaGVja2VkXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHsgdmFsdWU6IHRoaXMuaXNDaGVja2VkIH0pXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICB2YWxpZGF0ZVN0eWxlcygnc3dpdGNoJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdzcGFuJywge1xuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdzd2l0Y2gnIH0sXG4gICAgICBzdGF0aWNDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MsXG4gICAgICBvbjogeyBjbGljazogdGhpcy50b2dnbGUgfVxuICAgIH0sIFtjcmVhdGVFbGVtZW50KCdzbWFsbCcsIHsgc3RhdGljQ2xhc3M6ICd3ZWV4LXN3aXRjaC1pbm5lcicgfSldKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc3dpdGNoLmpzIiwiaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi92YWxpZGF0b3InXG5cbi8qKlxuICogR2V0IHRleHQgc3R5bGVzXG4gKi9cbmZ1bmN0aW9uIGdldFRleHRTdHlsZSAocHJvcHMgPSB7fSkge1xuICBjb25zdCBsaW5lcyA9IHBhcnNlSW50KHByb3BzLmxpbmVzKSB8fCAwXG4gIGlmIChsaW5lcyA+IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgd2Via2l0TGluZUNsYW1wOiBsaW5lc1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgbGluZXM6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgdmFsdWU6IFtTdHJpbmddXG4gIH0sXG5cbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHZhbGlkYXRlU3R5bGVzKCd0ZXh0JywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdwJywge1xuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICd0ZXh0JyB9LFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXRleHQnLFxuICAgICAgc3RhdGljU3R5bGU6IGdldFRleHRTdHlsZSh0aGlzKVxuICAgIH0sIHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW3RoaXMudmFsdWVdKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvdGV4dC5qcyIsImltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgc3JjOiBTdHJpbmdcbiAgfSxcbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHZhbGlkYXRlU3R5bGVzKCd3ZWInLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgICd3ZWV4LXR5cGUnOiAnd2ViJyxcbiAgICAgICAgc3JjOiB0aGlzLnNyY1xuICAgICAgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC13ZWInXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3dlYi5qcyIsIi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVkIChmbikge1xuICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuIChzdHIpIHtcbiAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdXG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXG4gIH1cbn1cblxuLyoqXG4gKiBDYW1lbGl6ZSBhIGh5cGhlbi1kZWxtaXRlZCBzdHJpbmcuXG4gKi9cbmNvbnN0IGNhbWVsaXplUkUgPSAvLShcXHcpL2dcbmV4cG9ydCBjb25zdCBjYW1lbGl6ZSA9IGNhY2hlZChzdHIgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgKF8sIGMpID0+IGMudG9VcHBlckNhc2UoKSlcbn0pXG5cbi8qKlxuICogQ2FwaXRhbGl6ZSBhIHN0cmluZy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNhcGl0YWxpemUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxufSlcblxuLyoqXG4gKiBIeXBoZW5hdGUgYSBjYW1lbENhc2Ugc3RyaW5nLlxuICovXG5jb25zdCBoeXBoZW5hdGVSRSA9IC8oW14tXSkoW0EtWl0pL2dcbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgIC50b0xvd2VyQ2FzZSgpXG59KVxuXG4vKipcbiAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZCAodG8sIF9mcm9tKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIF9mcm9tKSB7XG4gICAgdG9ba2V5XSA9IF9mcm9tW2tleV1cbiAgfVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBTaW1wbGUgYmluZCwgZmFzdGVyIHRoYW4gbmF0aXZlXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHhcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZCAoZm4sIGN0eCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICBjb25zdCBsID0gYXJndW1lbnRzLmxlbmd0aFxuICAgIHJldHVybiBsXG4gICAgICA/IGwgPiAxXG4gICAgICAgID8gZm4uYXBwbHkoY3R4LCBhcmd1bWVudHMpXG4gICAgICAgIDogZm4uY2FsbChjdHgsIGEpXG4gICAgICA6IGZuLmNhbGwoY3R4KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZSAoZnVuYywgd2FpdCkge1xuICBsZXQgdGltZXJJZFxuICBmdW5jdGlvbiBsYXRlciAoKSB7XG4gICAgdGltZXJJZCA9IG51bGxcbiAgICBmdW5jLmFwcGx5KG51bGwpXG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZXJJZClcbiAgICB0aW1lcklkID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGUgKGZ1bmMsIHdhaXQpIHtcbiAgbGV0IGxhc3QgPSAwXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgaWYgKHRpbWUgLSBsYXN0ID4gd2FpdCkge1xuICAgICAgZnVuYy5hcHBseShudWxsKVxuICAgIH1cbiAgICBsYXN0ID0gdGltZVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9odG1sNS9yZW5kZXIvdnVlL3V0aWxzLmpzIiwiY29uc3Qgc3VwcG9ydGVkUHJvcGVydGllcyA9IHtcbiAgJ0Bjb21tb24nOiBbXG4gICAgJ2lkJywgJ3JlZicsICdzdHlsZScsICdjbGFzcycsICdhcHBlbmQnXG4gIF1cbn1cblxuY29uc3Qgc3VwcG9ydGVkU3R5bGVzID0ge1xuICAnQGJveC1tb2RlbCc6IFtcbiAgICAnd2lkdGgnLCAnaGVpZ2h0JywgJ3Bvc2l0aW9uJyxcbiAgICAncGFkZGluZy10b3AnLCAncGFkZGluZy1ib3R0b20nLCAncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLFxuICAgICdtYXJnaW4tdG9wJywgJ21hcmdpbi1ib3R0b20nLCAnbWFyZ2luLWxlZnQnLCAnbWFyZ2luLXJpZ2h0J1xuICBdLFxuICAnQGJvcmRlcic6IFtcbiAgICAnYm9yZGVyLXN0eWxlJywgJ2JvcmRlci13aWR0aCcsICdib3JkZXItY29sb3InLCAnYm9yZGVyLXJhZGl1cycsXG4gICAgJ2JvcmRlci10b3Atc3R5bGUnLCAnYm9yZGVyLXJpZ2h0LXN0eWxlJywgJ2JvcmRlci1ib3R0b20tc3R5bGUnLCAnYm9yZGVyLWxlZnQtc3R5bGUnLFxuICAgICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1yaWdodC13aWR0aCcsICdib3JkZXItYm90dG9tLXdpZHRoJywgJ2JvcmRlci1sZWZ0LXdpZHRoJyxcbiAgICAnYm9yZGVyLXRvcC1jb2xvcicsICdib3JkZXItcmlnaHQtY29sb3InLCAnYm9yZGVyLWJvdHRvbS1jb2xvcicsICdib3JkZXItbGVmdC1jb2xvcicsXG4gICAgJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnLCAnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnLCAnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycsICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cydcbiAgXSxcbiAgJ0BmbGV4Ym94JzogW1xuICAgICdkaXNwbGF5JywgJ2ZsZXgnLCAnZmxleC1kaXJlY3Rpb24nLCAnanVzdGlmeS1jb250ZW50JywgJ2FsaWduLWl0ZW1zJywgJ2ZsZXgtd3JhcCdcbiAgXSxcbiAgJ0Bmb250JzogW1xuICAgICdmb250LXNpemUnLCAnZm9udC13ZWlnaHQnLCAnZm9udC1zdHlsZScsICdmb250LWZhbWlseSdcbiAgXSxcbiAgJ0Bjb2xvcnMnOiBbXG4gICAgJ2NvbG9yJywgJ2JhY2tncm91bmQtY29sb3InLCAnb3BhY2l0eSdcbiAgXSxcbiAgdGV4dDogW1xuICAgICdAYm94LW1vZGVsJywgJ0Bib3JkZXInLCAnQGZsZXhib3gnLCAnQGZvbnQnLCAnQGNvbG9ycycsXG4gICAgJ3RleHQtYWxpZ24nLCAndGV4dC1kZWNvcmF0aW9uJywgJ3RleHQtb3ZlcmZsb3cnXG4gIF1cbn1cblxuLyoqXG4gKiBGbGF0dGVuIGEgbXVsdGlwbGUgZGltZW5zaW9uIGFycmF5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbiAoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoZGlzdCwgaXRlbSkgPT4ge1xuICAgIHJldHVybiBkaXN0LmNvbmNhdChBcnJheS5pc0FycmF5KGl0ZW0pID8gZmxhdHRlbihpdGVtKSA6IGl0ZW0pXG4gIH0sIFtdKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSB2YWx1ZSBpcyBpbiB0aGUgbGlzdC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkaWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1N1cHBvcnRlZCAodHlwZSwgdmFsdWUsIGRpY3QgPSB7fSkge1xuICBpZiAodHlwZSAmJiB2YWx1ZSAmJiBkaWN0W3R5cGVdKSB7XG4gICAgcmV0dXJuIGZsYXR0ZW4oZGljdFt0eXBlXS5tYXAoayA9PiBkaWN0W2tdIHx8IGspKS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBzdHlsZSBpcyBzdXBwb3J0ZWQgZm9yIHRoZSBjb21wb25lbnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHN0eWxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N1cHBvcnRlZFN0eWxlICh0eXBlLCBzdHlsZSkge1xuICByZXR1cm4gY2hlY2tTdXBwb3J0ZWQodHlwZSwgc3R5bGUsIHN1cHBvcnRlZFN0eWxlcylcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkIGZvciB0aGUgY29tcG9uZW50LlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdXBwb3J0ZWRQcm9wICh0eXBlLCBwcm9wKSB7XG4gIHJldHVybiBjaGVja1N1cHBvcnRlZCh0eXBlLCBwcm9wLCBzdXBwb3J0ZWRQcm9wZXJ0aWVzKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvcmVuZGVyL3Z1ZS92YWxpZGF0b3IvY2hlY2suanMiLCJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyAodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFN0cmluZ10nXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9odG1sNS9yZW5kZXIvdnVlL3ZhbGlkYXRvci9wcm9wLmpzIiwiXG4vKipcbiAqIFZhbGlkYXRlIHRoZSBDU1MgY29sb3IgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0NTU0NvbG9yICh2YWx1ZSkge1xuICByZXR1cm4gL15bYS16XSskL2kudGVzdCh2YWx1ZSkgLy8gbWF0Y2ggY29sb3IgbmFtZVxuICAgIHx8IC9eIyhbYS1mMC05XXszfSl7MSwyfSQvaS50ZXN0KHZhbHVlKSAvLyBtYXRjaCAjQUJDREVGXG4gICAgfHwgL15yZ2JcXHMqXFwoKFxccypbMC05Ll0rXFxzKiwpezJ9XFxzKlswLTkuXStcXHMqXFwpL2kudGVzdCh2YWx1ZSkgLy8gbWF0Y2ggcmdiKDAsMCwwKVxuICAgIHx8IC9ecmdiYVxccypcXCgoXFxzKlswLTkuXStcXHMqLCl7M31cXHMqWzAtOS5dK1xccypcXCkvaS50ZXN0KHZhbHVlKSAvLyBtYXRjaCByZ2JhKDAsMCwwLDApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NTU0xlbmd0aCAodmFsdWUpIHtcbiAgcmV0dXJuIC9eWystXT9bMC05XSsuPyhbMC05XSspPyhweHwlKT8kLy50ZXN0KFN0cmluZyh2YWx1ZSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIFsnYWJzb2x1dGUnLCAncmVsYXRpdmUnLCAnZml4ZWQnLCAnc3RpY2t5J10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGFjaXR5ICh2YWx1ZSkge1xuICBjb25zdCBjb3VudCA9IHBhcnNlRmxvYXQodmFsdWUpXG4gIHJldHVybiBjb3VudCA+PSAwICYmIGNvdW50IDw9IDFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXkgKHZhbHVlKSB7XG4gIHJldHVybiBbJ2Jsb2NrJywgJ2ZsZXgnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsZXhEaXJlY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBbJ3JvdycsICdjb2x1bW4nXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1c3RpZnlDb250ZW50ICh2YWx1ZSkge1xuICByZXR1cm4gWydmbGV4LXN0YXJ0JywgJ2ZsZXgtZW5kJywgJ2NlbnRlcicsICdzcGFjZS1iZXR3ZWVuJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGlnbkl0ZW1zICh2YWx1ZSkge1xuICByZXR1cm4gWydzdHJldGNoJywgJ2ZsZXgtc3RhcnQnLCAnZmxleC1lbmQnLCAnY2VudGVyJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGV4ICh2YWx1ZSkge1xuICByZXR1cm4gL15cXGR7MSwzfSQvLnRlc3QoU3RyaW5nKHZhbHVlKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvbnRTdHlsZSAodmFsdWUpIHtcbiAgcmV0dXJuIFsnbm9ybWFsJywgJ2l0YWxpYycsICdvYmxpcXVlJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb250V2VpZ2h0ICh2YWx1ZSkge1xuICByZXR1cm4gWydub3JtYWwnLCAnYm9sZCcsICdsaWdodCcsICdib2xkZXInLCAnbGlnaHRlciddLmluZGV4T2YodmFsdWUpICE9PSAtMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGV4dERlY29yYXRpb24gKHZhbHVlKSB7XG4gIHJldHVybiBbJ25vbmUnLCAndW5kZXJsaW5lJywgJ2xpbmUtdGhyb3VnaCddLmluZGV4T2YodmFsdWUpICE9PSAtMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGV4dEFsaWduICh2YWx1ZSkge1xuICByZXR1cm4gWydsZWZ0JywgJ2NlbnRlcicsICdyaWdodCddLmluZGV4T2YodmFsdWUpICE9PSAtMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb3ZlcmZsb3cgKHZhbHVlKSB7XG4gIHJldHVybiBbJ3Zpc2libGUnLCAnaGlkZGVuJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0T3ZlcmZsb3cgKHZhbHVlKSB7XG4gIHJldHVybiBbJ2NsaXAnLCAnZWxsaXBzaXMnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbn1cblxuLyoqXG4gKiBDb21tb24gc3R5bGUgdmFsaWRhdG9yLlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21tb24gKHZhbHVlLCBrZXkpIHtcbiAgaWYgKC9eW1xcd1xcLV0qY29sb3IkLy50ZXN0KFN0cmluZyhrZXkpKSkge1xuICAgIHJldHVybiBpc0NTU0NvbG9yKHZhbHVlKVxuICB9XG5cbiAgaWYgKC9eKHdpZHRofGhlaWdodCkkLy50ZXN0KFN0cmluZyhrZXkpKSkge1xuICAgIHJldHVybiBpc0NTU0xlbmd0aCh2YWx1ZSlcbiAgfVxuXG4gIC8vIGNoZWNrb3V0IGJvcmRlci1yYWRpdXNcbiAgaWYgKC9eYm9yZGVyLSgodG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KS0pezAsMn0od2lkdGh8cmFkaXVzKSQvLnRlc3QoU3RyaW5nKGtleSkpKSB7XG4gICAgcmV0dXJuIGlzQ1NTTGVuZ3RoKHZhbHVlKVxuICB9XG5cbiAgLy8gY2hlY2sgYm9yZGVyLXN0eWxlXG4gIGlmICgvYm9yZGVyLSgodG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KS0pP3N0eWxlLy50ZXN0KFN0cmluZyhrZXkpKSkge1xuICAgIHJldHVybiBbJ3NvbGlkJywgJ2Rhc2hlZCcsICdkb3R0ZWQnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbiAgfVxuXG4gIGlmICgvXigobWFyZ2lufHBhZGRpbmcpLSk/KHRvcHxyaWdodHxib3R0b218bGVmdCkvLnRlc3QoU3RyaW5nKGtleSkpKSB7XG4gICAgcmV0dXJuIGlzQ1NTTGVuZ3RoKHZhbHVlKVxuICB9XG5cbiAgc3dpdGNoIChTdHJpbmcoa2V5KSkge1xuICAgIGNhc2UgJ2ZvbnQtc2l6ZSc6IHJldHVybiBpc0NTU0xlbmd0aCh2YWx1ZSlcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9odG1sNS9yZW5kZXIvdnVlL3ZhbGlkYXRvci9zdHlsZS5qcyIsImltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgc3JjOiBTdHJpbmcsXG4gICAgcmVzaXplOiB7XG4gICAgICB2YWxpZGF0b3IgKHZhbHVlKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHJldHVybiBbJ2NvdmVyJywgJ2NvbnRhaW4nLCAnc3RyZXRjaCddLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdmFsaWRhdGVTdHlsZXMoJ2ltYWdlJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKCF0aGlzLnNyYyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgY29uc29sZS53YXJuKGBbVnVlIFJlbmRlcmVyXSBUaGUgPGltYWdlPiBjb21wb25lbnQgbXVzdCBoYXZlIHRoZSBcInNyY1wiIGF0dHJpYnV0ZS5gKVxuICAgIH1cblxuICAgIGxldCBjc3NUZXh0ID0gYGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiJHt0aGlzLnNyY31cIik7YFxuXG4gICAgLy8gY29tcGF0aWJpbGl0eTogaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9YmFja2dyb3VuZC1zaXplXG4gICAgaWYgKHRoaXMucmVzaXplKSB7XG4gICAgICBjc3NUZXh0ICs9ICh0aGlzLnJlc2l6ZSA9PT0gJ3N0cmV0Y2gnKVxuICAgICAgPyBgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7YFxuICAgICAgOiBgYmFja2dyb3VuZC1zaXplOiAke3RoaXMucmVzaXplfTtgXG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2ZpZ3VyZScsIHtcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAnaW1hZ2UnIH0sXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtaW1hZ2UnLFxuICAgICAgc3R5bGU6IGNzc1RleHRcbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJpbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uL3ZhbGlkYXRvcidcbmltcG9ydCB7IGRlYm91bmNlLCBiaW5kIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgcmVjdE1peGluIGZyb20gJy4uL21peGlucy9yZWN0J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW3JlY3RNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgbG9hZG1vcmVvZmZzZXQ6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVTY3JvbGwgKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5yZWFjaEJvdHRvbSgpKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2xvYWRtb3JlJylcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHZhbGlkYXRlU3R5bGVzKCdsaXN0JywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICByZWY6ICd3cmFwcGVyJyxcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAnbGlzdCcgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1saXN0IHdlZXgtbGlzdC13cmFwcGVyJyxcbiAgICAgIG9uOiB7XG4gICAgICAgIHNjcm9sbDogZGVib3VuY2UoYmluZCh0aGlzLmhhbmRsZVNjcm9sbCwgdGhpcyksIDEwMClcbiAgICAgIH1cbiAgICB9LCBbXG4gICAgICBjcmVhdGVFbGVtZW50KCdtYXJrJywgeyByZWY6ICd0b3BNYXJrJywgc3RhdGljQ2xhc3M6ICd3ZWV4LWxpc3QtdG9wLW1hcmsnIH0pLFxuICAgICAgY3JlYXRlRWxlbWVudCgndWwnLCB7XG4gICAgICAgIHJlZjogJ2lubmVyJyxcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LWxpc3QtaW5uZXInXG4gICAgICB9LCB0aGlzLiRzbG90cy5kZWZhdWx0KSxcbiAgICAgIGNyZWF0ZUVsZW1lbnQoJ21hcmsnLCB7IHJlZjogJ2JvdHRvbU1hcmsnLCBzdGF0aWNDbGFzczogJ3dlZXgtbGlzdC1ib3R0b20tbWFyaycgfSlcbiAgICBdKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvbGlzdC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbWV0aG9kczoge1xuICAgIHJlYWNoQm90dG9tICgpIHtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLiRyZWZzLndyYXBwZXJcbiAgICAgIGNvbnN0IGlubmVyID0gdGhpcy4kcmVmcy5pbm5lclxuICAgICAgY29uc3Qgb2Zmc2V0ID0gTnVtYmVyKHRoaXMubG9hZG1vcmVvZmZzZXQpIHx8IDBcblxuICAgICAgaWYgKHdyYXBwZXIgJiYgaW5uZXIpIHtcbiAgICAgICAgY29uc3QgaW5uZXJIZWlnaHQgPSBpbm5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgICAgICAgY29uc3Qgd3JhcHBlckhlaWdodCA9IHdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gICAgICAgIHJldHVybiB3cmFwcGVyLnNjcm9sbFRvcCA+PSBpbm5lckhlaWdodCAtIHdyYXBwZXJIZWlnaHQgLSBvZmZzZXRcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaHRtbDUvcmVuZGVyL3Z1ZS9taXhpbnMvcmVjdC5qcyIsImltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICB2YWxpZGF0ZVN0eWxlcygnY2VsbCcsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbGknLCB7XG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2NlbGwnIH0sXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtY2VsbCdcbiAgICB9LCB0aGlzLiRzbG90cy5kZWZhdWx0KVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvY2VsbC5qcyJdLCJzb3VyY2VSb290IjoiIn0=