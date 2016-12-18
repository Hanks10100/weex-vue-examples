(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.VueRenderer = global.VueRenderer || {})));
}(this, (function (exports) { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
  return returnValue;
}
function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var semver = createCommonjsModule(function (module, exports) {
exports = module.exports = SemVer;

// The debug function is excluded entirely from the minified version.
/* nomin */ var debug;
/* nomin */ if (typeof process === 'object' &&
    /* nomin */ process.env &&
    /* nomin */ false &&
    /* nomin */ /\bsemver\b/i.test(false))
  /* nomin */ { debug = function() {
    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
    /* nomin */ args.unshift('SEMVER');
    /* nomin */ console.log.apply(console, args);
    /* nomin */ }; }
/* nomin */ else
  /* nomin */ { debug = function() {}; }

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
    { re[i] = new RegExp(src[i]); }
}

exports.parse = parse;
function parse(version, loose) {
  if (version instanceof SemVer)
    { return version; }

  if (typeof version !== 'string')
    { return null; }

  if (version.length > MAX_LENGTH)
    { return null; }

  var r = loose ? re[LOOSE] : re[FULL];
  if (!r.test(version))
    { return null; }

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
      { return version; }
    else
      { version = version.version; }
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH)
    { throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters') }

  if (!(this instanceof SemVer))
    { return new SemVer(version, loose); }

  debug('SemVer', version, loose);
  this.loose = loose;
  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

  if (!m)
    { throw new TypeError('Invalid Version: ' + version); }

  this.raw = version;

  // these are actually numbers
  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
    { throw new TypeError('Invalid major version') }

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
    { throw new TypeError('Invalid minor version') }

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
    { throw new TypeError('Invalid patch version') }

  // numberify any prerelease numeric ids
  if (!m[4])
    { this.prerelease = []; }
  else
    { this.prerelease = m[4].split('.').map(function(id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id;
        if (num >= 0 && num < MAX_SAFE_INTEGER)
          { return num; }
      }
      return id;
    }); }

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function() {
  this.version = this.major + '.' + this.minor + '.' + this.patch;
  if (this.prerelease.length)
    { this.version += '-' + this.prerelease.join('.'); }
  return this.version;
};

SemVer.prototype.toString = function() {
  return this.version;
};

SemVer.prototype.compare = function(other) {
  debug('SemVer.compare', this.version, this.loose, other);
  if (!(other instanceof SemVer))
    { other = new SemVer(other, this.loose); }

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function(other) {
  if (!(other instanceof SemVer))
    { other = new SemVer(other, this.loose); }

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function(other) {
  var this$1 = this;

  if (!(other instanceof SemVer))
    { other = new SemVer(other, this.loose); }

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length)
    { return -1; }
  else if (!this.prerelease.length && other.prerelease.length)
    { return 1; }
  else if (!this.prerelease.length && !other.prerelease.length)
    { return 0; }

  var i = 0;
  do {
    var a = this$1.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);
    if (a === undefined && b === undefined)
      { return 0; }
    else if (b === undefined)
      { return 1; }
    else if (a === undefined)
      { return -1; }
    else if (a === b)
      { continue; }
    else
      { return compareIdentifiers(a, b); }
  } while (++i);
};

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function(release, identifier) {
  var this$1 = this;

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
        { this.inc('patch', identifier); }
      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
        { this.major++; }
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
        { this.minor++; }
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0)
        { this.patch++; }
      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0)
        { this.prerelease = [0]; }
      else {
        var i = this.prerelease.length;
        while (--i >= 0) {
          if (typeof this$1.prerelease[i] === 'number') {
            this$1.prerelease[i]++;
            i = -2;
          }
        }
        if (i === -1) // didn't increment anything
          { this.prerelease.push(0); }
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1]))
            { this.prerelease = [identifier, 0]; }
        } else
          { this.prerelease = [identifier, 0]; }
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
      if (typeof a === 'object') { a = a.version; }
      if (typeof b === 'object') { b = b.version; }
      ret = a === b;
      break;
    case '!==':
      if (typeof a === 'object') { a = a.version; }
      if (typeof b === 'object') { b = b.version; }
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
      { return comp; }
    else
      { comp = comp.value; }
  }

  if (!(this instanceof Comparator))
    { return new Comparator(comp, loose); }

  debug('comparator', comp, loose);
  this.loose = loose;
  this.parse(comp);

  if (this.semver === ANY)
    { this.value = ''; }
  else
    { this.value = this.operator + this.semver.version; }

  debug('comp', this);
}

var ANY = {};
Comparator.prototype.parse = function(comp) {
  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);

  if (!m)
    { throw new TypeError('Invalid comparator: ' + comp); }

  this.operator = m[1];
  if (this.operator === '=')
    { this.operator = ''; }

  // if it literally is just '>' or '' then allow anything.
  if (!m[2])
    { this.semver = ANY; }
  else
    { this.semver = new SemVer(m[2], this.loose); }
};

Comparator.prototype.toString = function() {
  return this.value;
};

Comparator.prototype.test = function(version) {
  debug('Comparator.test', version, this.loose);

  if (this.semver === ANY)
    { return true; }

  if (typeof version === 'string')
    { version = new SemVer(version, this.loose); }

  return cmp(version, this.operator, this.semver, this.loose);
};


exports.Range = Range;
function Range(range, loose) {
  if ((range instanceof Range) && range.loose === loose)
    { return range; }

  if (!(this instanceof Range))
    { return new Range(range, loose); }

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
      { ret = ''; }
    else if (isX(m))
      { ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'; }
    else if (isX(p))
      // ~1.2 == >=1.2.0 <1.3.0
      { ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'; }
    else if (pr) {
      debug('replaceTilde pr', pr);
      if (pr.charAt(0) !== '-')
        { pr = '-' + pr; }
      ret = '>=' + M + '.' + m + '.' + p + pr +
            ' <' + M + '.' + (+m + 1) + '.0';
    } else
      // ~1.2.3 == >=1.2.3 <1.3.0
      { ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0'; }

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
      { ret = ''; }
    else if (isX(m))
      { ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'; }
    else if (isX(p)) {
      if (M === '0')
        { ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'; }
      else
        { ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0'; }
    } else if (pr) {
      debug('replaceCaret pr', pr);
      if (pr.charAt(0) !== '-')
        { pr = '-' + pr; }
      if (M === '0') {
        if (m === '0')
          { ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + m + '.' + (+p + 1); }
        else
          { ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + (+m + 1) + '.0'; }
      } else
        { ret = '>=' + M + '.' + m + '.' + p + pr +
              ' <' + (+M + 1) + '.0.0'; }
    } else {
      debug('no pr');
      if (M === '0') {
        if (m === '0')
          { ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1); }
        else
          { ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0'; }
      } else
        { ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0'; }
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
      { gtlt = ''; }

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
        { m = 0; }
      if (xp)
        { p = 0; }

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
          { M = +M + 1; }
        else
          { m = +m + 1; }
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
    { from = ''; }
  else if (isX(fm))
    { from = '>=' + fM + '.0.0'; }
  else if (isX(fp))
    { from = '>=' + fM + '.' + fm + '.0'; }
  else
    { from = '>=' + from; }

  if (isX(tM))
    { to = ''; }
  else if (isX(tm))
    { to = '<' + (+tM + 1) + '.0.0'; }
  else if (isX(tp))
    { to = '<' + tM + '.' + (+tm + 1) + '.0'; }
  else if (tpr)
    { to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr; }
  else
    { to = '<=' + to; }

  return (from + ' ' + to).trim();
}


// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function(version) {
  var this$1 = this;

  if (!version)
    { return false; }

  if (typeof version === 'string')
    { version = new SemVer(version, this.loose); }

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this$1.set[i], version))
      { return true; }
  }
  return false;
};

function testSet(set, version) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version))
      { return false; }
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
        { continue; }

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch)
          { return true; }
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
        comparator = new Comparator('>=0.0.0');
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
});

__$styleInject("* {\n  color: initial;\n  cursor: initial;\n  direction: initial;\n  font: initial;\n  font-family: initial;\n  font-size: initial;\n  font-style: initial;\n  font-variant: initial;\n  font-weight: initial;\n  line-height: initial;\n  text-align: initial;\n  text-indent: initial;\n  visibility: initial;\n  white-space: initial;\n  word-spacing: initial;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  -webkit-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\nhtml {\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent;\n}\n\na,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n}\n\np, ol, ul, dl {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\nfigure {\n  margin: 0;\n}\n\ntextarea {\n  resize: none;\n}\n",undefined);

__$styleInject("a, .weex-a {\n  display: block;\n  text-decoration: none;\n}\n\ndiv, .weex-div, .weex-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  box-align: stretch;\n  -webkit-align-content: flex-start;\n      -ms-flex-line-pack: start;\n          align-content: flex-start;\n}\n\nfigure, img, .weex-image, .weex-img {\n  display: block;\n  background-repeat: no-repeat;\n}\n\n.weex-list,\n.weex-list-wrapper {\n  position: relative;\n  background-color: #888888;\n  overflow: scroll;\n}\n\n.weex-list-inner {\n  background-color: #FFFFFF;\n}\n\n.weex-list-top-mark {\n  width: 100%;\n  height: 0;\n  visibility: hidden;\n}\n\n.weex-list-bottom-mark {\n  width: 100%;\n  height: 0;\n  visibility: hidden;\n}\n\n.weex-refresh,\n.weex-loading {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  position: absolute;\n  visibility: hidden;\n  z-index: 100;\n}\n\n.weex-refresh {\n  top: 0;\n}\n\n.weex-loading {\n  bottom: 0;\n  bottom: -212px;\n}\n\n.weex-scroller-wrapper {\n  overflow: scroll;\n}\n\n.weex-scroller-top-mark {\n  width: 100%;\n  height: 0;\n  visibility: hidden;\n}\n\n.weex-scroller-bottom-mark {\n  width: 100%;\n  height: 0;\n  visibility: hidden;\n}\n\n.weex-slider-wrapper {\n  overflow: hidden;\n  position: relative;\n}\n\n.weex-slider-inner {\n  position: absolute;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.weex-slider-cell {\n  display: block;\n  float: left;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  overflow: hidden;\n}\n\n.weex-indicator {\n  position: absolute;\n  right: 30px;\n  bottom: 10px;\n  margin: 0;\n  padding: 10px 20px;\n}\n\n.weex-indicator-item {\n  display: inline-block;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  background-color: #BBBBBB;\n}\n.weex-indicator-item + .weex-indicator-item {\n  margin-left: 10px;\n}\n\n.weex-indicator-item-active {\n  background-color: blue;\n}\n\n.weex-refresh-indicator,\n.weex-loading-indicator {\n  width: 1.013333rem;\n  /* 76px */\n  height: 1.013333rem;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: visible;\n  background: none;\n}\n.weex-refresh-indicator:before,\n.weex-loading-indicator:before {\n  display: block;\n  content: '';\n  font-size: 0.16rem;\n  /* 12px */\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: weex-spinner 1.1s infinite ease;\n          animation: weex-spinner 1.1s infinite ease;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n}\n\n@-webkit-keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}\n@keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}\n.weex-switch {\n  border: 1px solid #dfdfdf;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: content-box;\n  background-clip: content-box;\n  color: #64bd63;\n  width: 100px;\n  height: 60px;\n  background-color: white;\n  border-color: #dfdfdf;\n  box-shadow: #dfdfdf 0px 0px 0px 0px inset;\n  border-radius: 60px;\n  -webkit-transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n          transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n}\n\n.weex-switch-checked {\n  background-color: #64bd63;\n  border-color: #64bd63;\n  box-shadow: #64bd63 0px 0px 0px 40px inset;\n}\n\n.weex-switch-disabled {\n  background-color: #EEEEEE;\n}\n\n.weex-switch-inner {\n  width: 60px;\n  height: 60px;\n  background: #fff;\n  border-radius: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: background-color 0.4s, left 0.2s;\n          transition: background-color 0.4s, left 0.2s;\n}\n\n.weex-switch-checked > .weex-switch-inner {\n  left: 40px;\n}\n\np, .weex-text {\n  white-space: pre-wrap;\n  font-size: 32px;\n  word-wrap: break-word;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: visible;\n}\n\ntextarea, .weex-textarea {\n  font-size: 32px;\n}\n\n.weex-web {\n  width: 100%;\n  height: 100%;\n  border: none;\n  box-sizing: border-box;\n}\n",undefined);

/* eslint-disable */

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from

/* istanbul ignore if */
if (!Array.from) {
  Array.from = (function() {
    var toStr = Object.prototype.toString;
    var isCallable = function(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number'){ __g = global; } // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number'){ __e = core; } // eslint-disable-line no-undef
});

var _isObject = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var isObject = _isObject;
var _anObject = function(it){
  if(!isObject(it)){ throw TypeError(it + ' is not an object!'); }
  return it;
};

var _fails = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

var isObject$1 = _isObject;
var document$1 = _global.document;
var is = isObject$1(document$1) && isObject$1(document$1.createElement);
var _domCreate = function(it){
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function(){
  return Object.defineProperty(_domCreate('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject$2 = _isObject;
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function(it, S){
  if(!isObject$2(it)){ return it; }
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  if(typeof (fn = it.valueOf) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  if(!S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  throw TypeError("Can't convert object to primitive value");
};

var anObject       = _anObject;
var IE8_DOM_DEFINE = _ie8DomDefine;
var toPrimitive    = _toPrimitive;
var dP$1             = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE){ try {
    return dP$1(O, P, Attributes);
  } catch(e){ /* empty */ } }
  if('get' in Attributes || 'set' in Attributes){ throw TypeError('Accessors not supported!'); }
  if('value' in Attributes){ O[P] = Attributes.value; }
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

var dP         = _objectDp;
var createDesc = _propertyDesc;
var _hide = _descriptors ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function(it, key){
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
var global    = _global
  , hide      = _hide
  , has       = _has
  , SRC       = _uid('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

_core.inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction){ has(val, 'name') || hide(val, 'name', key); }
  if(O[key] === val){ return; }
  if(isFunction){ has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key))); }
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key]){ O[key] = val; }
      else { hide(O, key, val); }
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});

var _aFunction = function(it){
  if(typeof it != 'function'){ throw TypeError(it + ' is not a function!'); }
  return it;
};

// optional / simple context binding
var aFunction = _aFunction;
var _ctx = function(fn, that, length){
  aFunction(fn);
  if(that === undefined){ return fn; }
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

var global$1    = _global;
var core      = _core;
var hide      = _hide;
var redefine  = _redefine;
var ctx       = _ctx;
var PROTOTYPE = 'prototype';

var $export$1 = function(type, name, source){
  var IS_FORCED = type & $export$1.F
    , IS_GLOBAL = type & $export$1.G
    , IS_STATIC = type & $export$1.S
    , IS_PROTO  = type & $export$1.P
    , IS_BIND   = type & $export$1.B
    , target    = IS_GLOBAL ? global$1 : IS_STATIC ? global$1[name] || (global$1[name] = {}) : (global$1[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL){ source = name; }
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global$1) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target){ redefine(target, key, out, type & $export$1.U); }
    // export
    if(exports[key] != out){ hide(exports, key, exp); }
    if(IS_PROTO && expProto[key] != out){ expProto[key] = out; }
  }
};
global$1.core = core;
// type bitmap
$export$1.F = 1;   // forced
$export$1.G = 2;   // global
$export$1.S = 4;   // static
$export$1.P = 8;   // proto
$export$1.B = 16;  // bind
$export$1.W = 32;  // wrap
$export$1.U = 64;  // safe
$export$1.R = 128; // real proto method for `library` 
var _export = $export$1;

var toString$1 = {}.toString;

var _cof = function(it){
  return toString$1.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _cof;
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function(it){
  if(it == undefined){ throw TypeError("Can't call method on  " + it); }
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject$1 = _iobject;
var defined = _defined;
var _toIobject = function(it){
  return IObject$1(defined(it));
};

// 7.1.4 ToInteger
var ceil  = Math.ceil;
var floor = Math.floor;
var _toInteger = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength
var toInteger = _toInteger;
var min       = Math.min;
var _toLength = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var toInteger$1 = _toInteger;
var max       = Math.max;
var min$1       = Math.min;
var _toIndex = function(index, length){
  index = toInteger$1(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes
var toIObject$1 = _toIobject;
var toLength  = _toLength;
var toIndex   = _toIndex;
var _arrayIncludes = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject$1($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el){ while(length > index){
      value = O[index++];
      if(value != value){ return true; }
    // Array#toIndex ignores holes, Array#includes - not
    } } else { for(;length > index; index++){ if(IS_INCLUDES || index in O){
      if(O[index] === el){ return IS_INCLUDES || index || 0; }
    } } } return !IS_INCLUDES && -1;
  };
};

var global$2 = _global;
var SHARED = '__core-js_shared__';
var store  = global$2[SHARED] || (global$2[SHARED] = {});
var _shared = function(key){
  return store[key] || (store[key] = {});
};

var shared = _shared('keys');
var uid    = _uid;
var _sharedKey = function(key){
  return shared[key] || (shared[key] = uid(key));
};

var has          = _has;
var toIObject    = _toIobject;
var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO     = _sharedKey('IE_PROTO');

var _objectKeysInternal = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O){ if(key != IE_PROTO){ has(O, key) && result.push(key); } }
  // Don't enum bug & hidden keys
  while(names.length > i){ if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  } }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = _objectKeysInternal;
var enumBugKeys = _enumBugKeys;

var _objectKeys = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

var f$1 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$1
};

var f$2 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$2
};

// 7.1.13 ToObject(argument)
var defined$1 = _defined;
var _toObject = function(it){
  return Object(defined$1(it));
};

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = _objectKeys;
var gOPS     = _objectGops;
var pIE      = _objectPie;
var toObject = _toObject;
var IObject  = _iobject;
var $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){
  var arguments$1 = arguments;
 // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments$1[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j){ if(isEnum.call(S, key = keys[j++])){ T[key] = S[key]; } }
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)
var $export = _export;

$export($export.S + $export.F, 'Object', {assign: _objectAssign});

/* eslint-disable */

// https://gist.github.com/WebReflection/5593554

/* istanbul ignore if */
if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = (function(Object, magic) {
    var set;
    function setPrototypeOf(O, proto) {
      set.call(O, proto);
      return O;
    }
    try {
      // this works already in Firefox and Safari
      set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
      set.call({}, null);
    } catch (e) {
      if (
        // IE < 11 cannot be shimmed
        Object.prototype !== {}[magic] ||
        // neither can any browser that actually
        // implemented __proto__ correctly
        // (all but old V8 will return here)
        {__proto__: null}.__proto__ === void 0
        // this case means null objects cannot be passed
        // through setPrototypeOf in a reliable way
        // which means here a **Sham** is needed instead
      ) {
        return;
      }
      // nodejs 0.8 and 0.10 are (buggy and..) fine here
      // probably Chrome or some old Mobile stock browser
      set = function(proto) {
        this[magic] = proto;
      };
      // please note that this will **not** work
      // in those browsers that do not inherit
      // __proto__ by mistake from Object.prototype
      // in these cases we should probably throw an error
      // or at least be informed about the issue
      setPrototypeOf.polyfill = setPrototypeOf(
        setPrototypeOf({}, null),
        Object.prototype
      ) instanceof Object;
      // setPrototypeOf.polyfill === true means it works as meant
      // setPrototypeOf.polyfill === false means it's not 100% reliable
      // setPrototypeOf.polyfill === undefined
      // or
      // setPrototypeOf.polyfill ==  null means it's not a polyfill
      // which means it works as expected
      // we can even delete Object.prototype.__proto__;
    }
    return setPrototypeOf;
  }(Object, '__proto__'));
}

var _wks = createCommonjsModule(function (module) {
var store      = _shared('wks')
  , uid        = _uid
  , Symbol     = _global.Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
});

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof$1 = _cof;
var TAG = _wks('toStringTag');
var ARG = cof$1(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

var _classof = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof$1(O)
    // ES3 arguments fallback
    : (B = cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

// 19.1.3.6 Object.prototype.toString()
var classof = _classof;
var test    = {};
test[_wks('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  _redefine(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}

var toInteger$2 = _toInteger;
var defined$2   = _defined;
// true  -> String#at
// false -> String#codePointAt
var _stringAt = function(TO_STRING){
  return function(that, pos){
    var s = String(defined$2(that))
      , i = toInteger$2(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l){ return TO_STRING ? '' : undefined; }
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = false;

var _iterators = {};

var dP$2       = _objectDp;
var anObject$2 = _anObject;
var getKeys$1  = _objectKeys;

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties){
  anObject$2(O);
  var keys   = getKeys$1(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i){ dP$2.f(O, P = keys[i++], Properties[P]); }
  return O;
};

var _html = _global.document && document.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject$1    = _anObject;
var dPs         = _objectDps;
var enumBugKeys$1 = _enumBugKeys;
var IE_PROTO$1    = _sharedKey('IE_PROTO');
var Empty       = function(){ /* empty */ };
var PROTOTYPE$1   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe')
    , i      = enumBugKeys$1.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--){ delete createDict[PROTOTYPE$1][enumBugKeys$1[i]]; }
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE$1] = anObject$1(O);
    result = new Empty;
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else { result = createDict(); }
  return Properties === undefined ? result : dPs(result, Properties);
};

var def = _objectDp.f;
var has$2 = _has;
var TAG$1 = _wks('toStringTag');

var _setToStringTag = function(it, tag, stat){
  if(it && !has$2(it = stat ? it : it.prototype, TAG$1)){ def(it, TAG$1, {configurable: true, value: tag}); }
};

var create$1         = _objectCreate;
var descriptor     = _propertyDesc;
var setToStringTag$1 = _setToStringTag;
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function(){ return this; });

var _iterCreate = function(Constructor, NAME, next){
  Constructor.prototype = create$1(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag$1(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has$3         = _has;
var toObject$1    = _toObject;
var IE_PROTO$2    = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function(O){
  O = toObject$1(O);
  if(has$3(O, IE_PROTO$2)){ return O[IE_PROTO$2]; }
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var LIBRARY        = _library;
var $export$2        = _export;
var redefine$1       = _redefine;
var hide$1           = _hide;
var has$1            = _has;
var Iterators      = _iterators;
var $iterCreate    = _iterCreate;
var setToStringTag = _setToStringTag;
var getPrototypeOf = _objectGpo;
var ITERATOR       = _wks('iterator');
var BUGGY          = !([].keys && 'next' in [].keys());
var FF_ITERATOR    = '@@iterator';
var KEYS           = 'keys';
var VALUES         = 'values';

var returnThis = function(){ return this; };

var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto){ return proto[kind]; }
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has$1(IteratorPrototype, ITERATOR)){ hide$1(IteratorPrototype, ITERATOR, returnThis); }
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide$1(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED){ for(key in methods){
      if(!(key in proto)){ redefine$1(proto, key, methods[key]); }
    } } else { $export$2($export$2.P + $export$2.F * (BUGGY || VALUES_BUG), NAME, methods); }
  }
  return methods;
};

var $at  = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length){ return {value: undefined, done: true}; }
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined){ _hide(ArrayProto, UNSCOPABLES, {}); }
var _addToUnscopables = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};

var _iterStep = function(done, value){
  return {value: value, done: !!done};
};

var addToUnscopables = _addToUnscopables;
var step             = _iterStep;
var Iterators$2        = _iterators;
var toIObject$2        = _toIobject;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function(iterated, kind){
  this._t = toIObject$2(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  ){ return step(0, index); }
  if(kind == 'values'){ return step(0, O[index]); }
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators$2.Arguments = Iterators$2.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var $iterators    = es6_array_iterator;
var redefine$2      = _redefine;
var global$3        = _global;
var hide$2          = _hide;
var Iterators$1     = _iterators;
var wks           = _wks;
var ITERATOR$1      = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues   = Iterators$1.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global$3[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR$1]){ hide$2(proto, ITERATOR$1, ArrayValues); }
    if(!proto[TO_STRING_TAG]){ hide$2(proto, TO_STRING_TAG, NAME); }
    Iterators$1[NAME] = ArrayValues;
    for(key in $iterators){ if(!proto[key]){ redefine$2(proto, key, $iterators[key], true); } }
  }
}

var _anInstance = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

// call something on iterator step with safe closing on error
var anObject$3 = _anObject;
var _iterCall = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject$3(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined){ anObject$3(ret.call(iterator)); }
    throw e;
  }
};

// check on default Array iterator
var Iterators$3  = _iterators;
var ITERATOR$2   = _wks('iterator');
var ArrayProto$1 = Array.prototype;

var _isArrayIter = function(it){
  return it !== undefined && (Iterators$3.Array === it || ArrayProto$1[ITERATOR$2] === it);
};

var classof$2   = _classof;
var ITERATOR$3  = _wks('iterator');
var Iterators$4 = _iterators;
var core_getIteratorMethod = _core.getIteratorMethod = function(it){
  if(it != undefined){ return it[ITERATOR$3]
    || it['@@iterator']
    || Iterators$4[classof$2(it)]; }
};

var _forOf = createCommonjsModule(function (module) {
var ctx         = _ctx
  , call        = _iterCall
  , isArrayIter = _isArrayIter
  , anObject    = _anObject
  , toLength    = _toLength
  , getIterFn   = core_getIteratorMethod
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function'){ throw TypeError(iterable + ' is not iterable!'); }
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn)){ for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN){ return result; }
  } } else { for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN){ return result; }
  } }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject$4  = _anObject;
var aFunction$2 = _aFunction;
var SPECIES   = _wks('species');
var _speciesConstructor = function(O, D){
  var C = anObject$4(O).constructor, S;
  return C === undefined || (S = anObject$4(C)[SPECIES]) == undefined ? D : aFunction$2(S);
};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

var ctx$2                = _ctx;
var invoke             = _invoke;
var html               = _html;
var cel                = _domCreate;
var global$5             = _global;
var process$2            = global$5.process;
var setTask            = global$5.setImmediate;
var clearTask          = global$5.clearImmediate;
var MessageChannel     = global$5.MessageChannel;
var counter            = 0;
var queue              = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var arguments$1 = arguments;

    var args = [], i = 1;
    while(arguments.length > i){ args.push(arguments$1[i++]); }
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(_cof(process$2) == 'process'){
    defer = function(id){
      process$2.nextTick(ctx$2(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx$2(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global$5.addEventListener && typeof postMessage == 'function' && !global$5.importScripts){
    defer = function(id){
      global$5.postMessage(id + '', '*');
    };
    global$5.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx$2(run, id, 1), 0);
    };
  }
}
var _task = {
  set:   setTask,
  clear: clearTask
};

var global$6    = _global;
var macrotask = _task.set;
var Observer  = global$6.MutationObserver || global$6.WebKitMutationObserver;
var process$3   = global$6.process;
var Promise$1   = global$6.Promise;
var isNode$1    = _cof(process$3) == 'process';

var _microtask = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode$1 && (parent = process$3.domain)){ parent.exit(); }
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head){ notify(); }
        else { last = undefined; }
        throw e;
      }
    } last = undefined;
    if(parent){ parent.enter(); }
  };

  // Node.js
  if(isNode$1){
    notify = function(){
      process$3.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise$1 && Promise$1.resolve){
    var promise = Promise$1.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global$6, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last){ last.next = task; }
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

var redefine$3 = _redefine;
var _redefineAll = function(target, src, safe){
  for(var key in src){ redefine$3(target, key, src[key], safe); }
  return target;
};

var global$7      = _global;
var dP$3          = _objectDp;
var DESCRIPTORS = _descriptors;
var SPECIES$1     = _wks('species');

var _setSpecies = function(KEY){
  var C = global$7[KEY];
  if(DESCRIPTORS && C && !C[SPECIES$1]){ dP$3.f(C, SPECIES$1, {
    configurable: true,
    get: function(){ return this; }
  }); }
};

var ITERATOR$4     = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$4]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

var _iterDetect = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING){ return false; }
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR$4]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR$4] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

var LIBRARY$1            = _library;
var global$4             = _global;
var ctx$1                = _ctx;
var classof$1            = _classof;
var $export$3            = _export;
var isObject$3           = _isObject;
var aFunction$1          = _aFunction;
var anInstance         = _anInstance;
var forOf              = _forOf;
var speciesConstructor = _speciesConstructor;
var task               = _task.set;
var microtask          = _microtask();
var PROMISE            = 'Promise';
var TypeError$1          = global$4.TypeError;
var process$1            = global$4.process;
var $Promise           = global$4[PROMISE];
var process$1            = global$4.process;
var isNode             = classof$1(process$1) == 'process';
var empty              = function(){ /* empty */ };
var Internal;
var GenericPromiseCapability;
var Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[_wks('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject$3(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined){ throw TypeError$1('Bad Promise constructor'); }
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction$1(resolve);
  this.reject  = aFunction$1(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n){ return; }
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2){ onHandleUnhandled(promise); }
            promise._h = 1;
          }
          if(handler === true){ result = value; }
          else {
            if(domain){ domain.enter(); }
            result = handler(value);
            if(domain){ domain.exit(); }
          }
          if(result === reaction.promise){
            reject(TypeError$1('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else { resolve(result); }
        } else { reject(value); }
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i){ run(chain[i++]); } // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h){ onUnhandled(promise); }
  });
};
var onUnhandled = function(promise){
  task.call(global$4, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process$1.emit('unhandledRejection', value, promise);
        } else if(handler = global$4.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global$4.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt){ throw abrupt.error; }
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1){ return false; }
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise)){ return false; }
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global$4, function(){
    var handler;
    if(isNode){
      process$1.emit('rejectionHandled', promise);
    } else if(handler = global$4.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a){ promise._a = promise._c.slice(); }
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value){ throw TypeError$1("Promise can't be resolved itself"); }
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx$1($resolve, wrapper, 1), ctx$1($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction$1(executor);
    Internal.call(this);
    try {
      executor(ctx$1($resolve, this, 1), ctx$1($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process$1.domain : undefined;
      this._c.push(reaction);
      if(this._a){ this._a.push(reaction); }
      if(this._s){ notify(this, false); }
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx$1($resolve, promise, 1);
    this.reject  = ctx$1($reject, promise, 1);
  };
}

$export$3($export$3.G + $export$3.W + $export$3.F * !USE_NATIVE, {Promise: $Promise});
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
$export$3($export$3.S + $export$3.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * (LIBRARY$1 || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this)){ return x; }
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * !(USE_NATIVE && _iterDetect(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled){ return; }
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  }
});

// TODO: parse UA
var ua = navigator.userAgent;

window.WXEnvironment = {
  platform: 'Web',
  userAgent: ua,
  appName: navigator.appName,
  appVersion: navigator.appVersion, // maybe too long
  weexVersion: '',
  osName: '',
  osVersion: '',
  deviceWidth: window.innerWidth,
  deviceHeight: window.innerHeight
};

/**
 * Validate the CSS color value.
 */
function isCSSColor (value) {
  return /^[a-z]+$/i.test(value) // match color name
    || /^#([a-f0-9]{3}){1,2}$/i.test(value) // match #ABCDEF
    || /^rgb\s*\((\s*[0-9.]+\s*,){2}\s*[0-9.]+\s*\)/i.test(value) // match rgb(0,0,0)
    || /^rgba\s*\((\s*[0-9.]+\s*,){3}\s*[0-9.]+\s*\)/i.test(value) // match rgba(0,0,0,0)
}

function isCSSLength (value) {
  return /^[+-]?[0-9]+.?([0-9]+)?(px|%)?$/.test(String(value))
}

function position (value) {
  return ['absolute', 'relative', 'fixed', 'sticky'].indexOf(value) !== -1
}

function opacity (value) {
  var count = parseFloat(value);
  return count >= 0 && count <= 1
}

function display (value) {
  return ['block', 'flex'].indexOf(value) !== -1
}

function flexDirection (value) {
  return ['row', 'column'].indexOf(value) !== -1
}

function justifyContent (value) {
  return ['flex-start', 'flex-end', 'center', 'space-between'].indexOf(value) !== -1
}

function alignItems (value) {
  return ['stretch', 'flex-start', 'flex-end', 'center'].indexOf(value) !== -1
}

function flex (value) {
  return /^\d{1,3}$/.test(String(value))
}

function fontStyle (value) {
  return ['normal', 'italic', 'oblique'].indexOf(value) !== -1
}

function fontWeight (value) {
  return ['normal', 'bold', 'light', 'bolder', 'lighter'].indexOf(value) !== -1
}

function textDecoration (value) {
  return ['none', 'underline', 'line-through'].indexOf(value) !== -1
}

function textAlign (value) {
  return ['left', 'center', 'right'].indexOf(value) !== -1
}

function overflow (value) {
  return ['visible', 'hidden'].indexOf(value) !== -1
}

function textOverflow (value) {
  return ['clip', 'ellipsis'].indexOf(value) !== -1
}

/**
 * Common style validator.
 * @param {any} value
 * @param {String} key
 */
function common (value, key) {
  if (/^[\w-]*color$/.test(String(key))) {
    return isCSSColor(value)
  }

  if (/^(width|height)$/.test(String(key))) {
    return isCSSLength(value)
  }

  // checkout border-radius
  if (/^border-((top|right|bottom|left)-){0,2}(width|radius)$/.test(String(key))) {
    return isCSSLength(value)
  }

  // check border-style
  if (/border-((top|right|bottom|left)-)?style/.test(String(key))) {
    return ['solid', 'dashed', 'dotted'].indexOf(value) !== -1
  }

  if (/^((margin|padding)-)?(top|right|bottom|left)/.test(String(key))) {
    return isCSSLength(value)
  }

  switch (String(key)) {
    case 'font-size': return isCSSLength(value)
  }

  return true
}


var styleValidator = Object.freeze({
	isCSSColor: isCSSColor,
	isCSSLength: isCSSLength,
	position: position,
	opacity: opacity,
	display: display,
	flexDirection: flexDirection,
	justifyContent: justifyContent,
	alignItems: alignItems,
	flex: flex,
	fontStyle: fontStyle,
	fontWeight: fontWeight,
	textDecoration: textDecoration,
	textAlign: textAlign,
	overflow: overflow,
	textOverflow: textOverflow,
	common: common
});

function isString (value) {
  return Object.prototype.toString.call(value) === '[object String]'
}


var propValidator = Object.freeze({
	isString: isString
});

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  }
}

/**
 * Camelize a hyphen-delmited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c.toUpperCase(); })
});

/**
 * Capitalize a string.
 */


/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */
function bind (fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
}

function debounce (func, wait) {
  var timerId;
  function later () {
    timerId = null;
    func.apply(null);
  }
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(later, wait);
  }
}

function throttle (func, wait) {
  var last = 0;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var context = this;
    var time = new Date().getTime();
    if (time - last > wait) {
      func.apply(context, args);
      last = time;
    }
  }
}

var supportedStyles = {
  '@box-model': [
    'width', 'height', 'position',
    'padding-top', 'padding-bottom', 'padding-left', 'padding-right',
    'margin-top', 'margin-bottom', 'margin-left', 'margin-right'
  ],
  '@border': [
    'border-style', 'border-width', 'border-color', 'border-radius',
    'border-top-style', 'border-right-style', 'border-bottom-style', 'border-left-style',
    'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width',
    'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color',
    'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius'
  ],
  '@flexbox': [
    'display', 'flex', 'flex-direction', 'justify-content', 'align-items', 'flex-wrap'
  ],
  '@font': [
    'font-size', 'font-weight', 'font-style', 'font-family'
  ],
  '@colors': [
    'color', 'background-color', 'opacity'
  ],
  text: [
    '@box-model', '@border', '@flexbox', '@font', '@colors',
    'text-align', 'text-decoration', 'text-overflow'
  ]
};

/**
 * Flatten a multiple dimension array.
 */
function flatten (array) {
  return array.reduce(function (dist, item) {
    return dist.concat(Array.isArray(item) ? flatten(item) : item)
  }, [])
}

/**
 * Check if the value is in the list.
 * @param {String} type
 * @param {String} value
 * @param {Object} dict
 */
function checkSupported (type, value, dict) {
  if ( dict === void 0 ) dict = {};

  if (type && value && dict[type]) {
    return flatten(dict[type].map(function (k) { return dict[k] || k; })).indexOf(value) !== -1
  }
  return true
}

/**
 * Check if the style is supported for the component.
 * @param {String} type
 * @param {String} style
 */
function isSupportedStyle (type, style) {
  return checkSupported(type, style, supportedStyles)
}

/**
 * Check if the property is supported for the component.
 * @param {String} type
 * @param {String} property
 */

var onfail = function nope () {};
var showConsole = true;

function warn () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var message = args.join(' ');
  showConsole && console.log(message);
  onfail(message);
  return message
}

/**
 * Configure the validator.
 * @param {Object} configs
 */


/**
 * Validate the styles of the component.
 * @param {String} type
 * @param {Object} styles
 */


/**
 * Validate the properties of the component.
 * @param {String} type
 * @param {Object} props
 */

var _switch = {
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
  data: function data () {
    return {
      isChecked: (this.checked !== 'false' && this.checked !== false),
      isDisabled: (this.disabled !== 'false' && this.disabled !== false)
    }
  },
  computed: {
    wrapperClass: function wrapperClass () {
      var classArray = ['weex-switch'];
      this.isChecked && classArray.push('weex-switch-checked');
      this.isDisabled && classArray.push('weex-switch-disabled');
      return classArray.join(' ')
    }
  },
  methods: {
    toggle: function toggle () {
      // TODO: handle the events
      if (!this.isDisabled) {
        this.isChecked = !this.isChecked;
        this.$emit('change', { value: this.isChecked });
      }
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    return createElement('span', {
      attrs: { 'weex-type': 'switch' },
      staticClass: this.wrapperClass,
      on: { click: this.toggle }
    }, [createElement('small', { staticClass: 'weex-switch-inner' })])
  }
};

var image = {
  props: {
    src: String,
    resize: {
      validator: function validator (value) {
        /* istanbul ignore next */
        return ['cover', 'contain', 'stretch'].indexOf(value) !== -1
      }
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    if (!this.src && "production" === 'development') {
      console.warn("[Vue Renderer] The <image> component must have the \"src\" attribute.");
    }

    var cssText = "background-image:url(\"" + (this.src) + "\");";

    // compatibility: http://caniuse.com/#search=background-size
    cssText += (this.resize && this.resize !== 'stretch')
      ? ("background-size: " + (this.resize) + ";")
      : "background-size: 100% 100%;";

    return createElement('figure', {
      attrs: { 'weex-type': 'image' },
      staticClass: 'weex-image',
      style: cssText
    })
  }
};

var indicator = {
  name: 'loading-indicator',
  render: function render (createElement) {
    return createElement('mark', {
      attrs: { 'weex-type': 'loading-indicator' },
      staticClass: 'weex-loading-indicator'
    })
  }
};

var refresh = {
  name: 'refresh',
  data: function data () {
    return {
      height: 0
    }
  },
  methods: {
    show: function show () {
      this.$emit('refresh', 'abc');
      // console.log('will emit refresh')
      this.height = '120px';
      this.visibility = 'visible';
    },
    reset: function reset () {
      this.height = 0;
      this.visibility = 'hidden';
      this.$emit('refreshfinish');
    }
  },
  render: function render (createElement) {
    return createElement('aside', {
      attrs: { 'weex-type': 'refresh' },
      style: { height: this.height, visibility: this.visibility },
      staticClass: 'weex-refresh'
    }, [createElement(indicator)])
  }
};

var loading = {
  name: 'loading',
  data: function data () {
    return {
      height: 0
    }
  },
  methods: {
    show: function show () {
      this.$emit('loading');
      console.log('will emit loading');
      this.height = '120px';
      this.visibility = 'visible';
      console.log(this, this.height);
    },
    reset: function reset () {
      this.height = 0;
      this.visibility = 'hidden';
      this.$emit('loadingfinish');
    }
  },
  render: function render (createElement) {
    return createElement('aside', {
      ref: 'indicator',
      attrs: { 'weex-type': 'loading' },
      style: { height: this.height, visibility: this.visibility },
      staticClass: 'weex-loading'
    }, [createElement(indicator)])
  }
};

var rectMixin = {
  methods: {
    reachTop: function reachTop () {
      var wrapper = this.$refs.wrapper;
      return (!!wrapper) && (wrapper.scrollTop <= 0)
    },
    reachBottom: function reachBottom () {
      var wrapper = this.$refs.wrapper;
      var inner = this.$refs.inner;
      var offset = Number(this.loadmoreoffset) || 0;

      if (wrapper && inner) {
        var innerHeight = inner.getBoundingClientRect().height;
        var wrapperHeight = wrapper.getBoundingClientRect().height;
        return wrapper.scrollTop >= innerHeight - wrapperHeight - offset
      }
      return false
    }
  }
};

var eventMixin = {
  methods: {
    /**
     * Create Event.
     * @param {DOMString} type
     * @param {Object} props
     */
    createEvent: function createEvent (type, props) {
      var event = new Event(type, { bubbles: false });
      event.preventDefault();
      event.stopPropagation();

      extend(event, props);

      Object.defineProperty(event, 'target', {
        enumerable: true,
        value: this || null
      });

      return event
    },

    /**
     * Create Custom Event.
     * @param {DOMString} type
     * @param {Object} props
     */
    createCustomEvent: function createCustomEvent (type, props) {
      // compatibility: http://caniuse.com/#search=customevent
      // const event = new CustomEvent(type)
      var event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, false, true, {});
      event.preventDefault();
      event.stopPropagation();

      extend(event, props);

      Object.defineProperty(event, 'target', {
        enumerable: true,
        value: this || null
      });

      return event
    },

    /**
     * Check and emit longpress event.
     * @param {Object} event
     */
    handleLongPress: function handleLongPress (event) {
      // TODO: check the condition
      this.$emit('longpress', this.createCustomEvent('longpress'));
    },

    /**
     * Check and emit appear event.
     * @param {Object} event
     */
    handleAppear: function handleAppear (event) {
      // TODO: check the condition
      this.$emit('appear', this.createCustomEvent('appear'));
    },

    /**
     * Check and emit disappear event.
     * @param {Object} event
     */
    handDisappear: function handDisappear (event) {
      // TODO: check the condition
      this.$emit('disappear', this.createCustomEvent('disappear'));
    }
  }
};

var listMixin = {
  methods: {
    moveTo: function moveTo (offsetY, done) {
      if ( offsetY === void 0 ) offsetY = 0;

      var inner = this.$refs.inner;
      if (inner) {
        inner.style.willChange = "transform";
        inner.style.transition = "transform .2s ease-in-out";
        inner.style.transform = "translate3d(0, " + offsetY + ", 0)";
        setTimeout(function () {
          inner.style.transition = '';
          inner.style.willChange = '';
          done && done();
        }, 200);
      }
    },

    done: function done () {
      this.moveTo(0);
      this._refresh && this._refresh.reset();
      this._loading && this._loading.reset();
    },

    showRefresh: function showRefresh () {
      // console.log('show refresh')
      this.moveTo('120px');
      if (this._refresh && this._refresh.child) {
        // console.log(this._refresh)
        this._refresh.child.show();
        // this._refresh.child.$emit('refresh', this.createCustomEvent('refresh'))
      }
    },

    showLoading: function showLoading () {
      // console.log('show loading')
      this.moveTo('-120px');
      if (this._loading && this._loading.child) {
        // this._loading.height = '120px'
        this._loading.child.show();
        // this.$emit('loading', this.createCustomEvent('loading'))
      }
    },

    handleTouchStart: function handleTouchStart (event) {
      // TODO: only the list is at top & bottom will trigger the touch event
      event.preventDefault();
      event.stopPropagation();
      // console.log('touch start', event)
      // console.log('reachTop:', this.reachTop())
      // console.log('reachBottom:', this.reachBottom())
      var touch = event.changedTouches[0];
      // console.log('touch start', event.target, event.target.pageY)
      // console.log('touches', touch)
      this._touchParams = {
        reachTop: this.reachTop(),
        reachBottom: this.reachBottom(),
        startTouchEvent: touch,
        startX: touch.pageX,
        startY: touch.pageY,
        timeStamp: event.timeStamp
      };
    },

    handleTouchMove: function handleTouchMove (event) {
      event.preventDefault();
      event.stopPropagation();
      // console.log('touch move')
      if (this._touchParams) {
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var startY = ref.startY;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        if (inner && (reachTop || reachBottom)) {
          var touch = event.changedTouches[0];
          var offsetY = touch.pageY - startY;
          // console.log('offsetY', offsetY, 'startY', startY, 'pageY', touch.pageY)
          this._touchParams.offsetY = offsetY;
          if (offsetY) {
            inner.style.transform = "translate3d(0, " + offsetY + "px, 0)";
          }
        }
      }
    },

    handleTouchEnd: function handleTouchEnd (event) {
      event.preventDefault();
      event.stopPropagation();
      // console.log('touch end')
      if (this._touchParams) {
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var offsetY = ref.offsetY;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        // console.log('offsetY:', offsetY)
        if (inner && (reachTop || reachBottom)) {
          // this.moveTo(0)
          if (offsetY > 120) {
            this.showRefresh();
          }
          else if (offsetY < -120) {
            this.showLoading();
          }
          else {
            this.moveTo(0);
          }
        }
      }
      delete this._touchParams;
    }
  }
};

var index = {
  mixins: [rectMixin, eventMixin, listMixin],
  props: {
    loadmoreoffset: {
      type: [String, Number],
      default: 0
    }
  },

  methods: {
    handleScroll: function handleScroll (event) {
      if (this.reachBottom()) {
        this.$emit('loadmore', this.createCustomEvent('loadmore'));
      }
    },
    createLoading: function createLoading () {
      //
    },
    createRefresh: function createRefresh () {
      //
    },
    createChildren: function createChildren (createElement) {
      var this$1 = this;

      var slots = this.$slots.default || [];
      var cells = slots.filter(function (vnode) {
        // console.log(vnode.tag)
        if (!vnode.tag || !vnode.componentOptions) { return false }
        var tagName = vnode.componentOptions.tag;
        if (tagName === 'loading') {
          this$1._loading = createElement(loading, {
            on: {
              loading: function () { return this$1.$emit('loading', this$1.createCustomEvent('loading')); }
            }
          });
          return false
        }
        if (tagName === 'refresh') {
          this$1._refresh = createElement(refresh, {
            on: {
              refresh: function () { return this$1.$emit('refresh', this$1.createCustomEvent('refresh')); }
            }
          });
          return false
        }
        return true
      });
      return [
        this._refresh,
        createElement('div', {
          ref: 'inner',
          staticClass: 'weex-list-inner'
        }, cells),
        this._loading
      ]
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    return createElement('main', {
      ref: 'wrapper',
      attrs: { 'weex-type': 'list' },
      staticClass: 'weex-list weex-list-wrapper',
      on: {
        scroll: debounce(bind(this.handleScroll, this), 100),
        touchstart: this.handleTouchStart,
        touchmove: throttle(bind(this.handleTouchMove, this), 25),
        touchend: this.handleTouchEnd
      }
    }, this.createChildren(createElement))
  }
};

var cell = {
  render: function render (createElement) {
    /* istanbul ignore next */
    return createElement('section', {
      attrs: { 'weex-type': 'cell' },
      staticClass: 'weex-cell'
    }, this.$slots.default)
  }
};

var scroller = {
  mixins: [rectMixin],
  props: {
    scrollDirection: {
      type: [String],
      default: 'vertical',
      validator: function validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) !== -1
      }
    },
    loadmoreoffset: {
      type: [String, Number],
      default: 0
    }
  },

  methods: {
    handleScroll: function handleScroll (event) {
      if (this.reachBottom()) {
        this.$emit('loadmore', event);
      }
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    return createElement('main', {
      ref: 'wrapper',
      attrs: { 'weex-type': 'scroller' },
      staticClass: 'weex-scroller weex-scroller-wrapper',
      on: {
        scroll: debounce(bind(this.handleScroll, this), 100)
      }
    }, [
      createElement('mark', { ref: 'topMark', staticClass: 'weex-scroller-top-mark' }),
      createElement('div', {
        ref: 'inner',
        staticClass: 'weex-scroller-inner'
      }, this.$slots.default),
      createElement('mark', { ref: 'bottomMark', staticClass: 'weex-scroller-bottom-mark' })
    ])
  }
};

var indicator$1 = {
  name: 'indicator',
  props: {
    count: [Number, String],
    active: [Number, String]
  },
  render: function render (createElement) {
    var this$1 = this;

    var children = [];
    for (var i = 0; i < Number(this.count); ++i) {
      var classNames = ['weex-indicator-item'];
      if (i === Number(this$1.active)) {
        classNames.push('weex-indicator-item-active');
      }
      children.push(createElement('menuitem', {
        staticClass: classNames.join(' ')
      }));
    }
    return createElement('menu', {
      attrs: { 'weex-type': 'indicator' },
      staticClass: 'weex-indicator'
    }, children)
  }
};

var slideMixin = {
  methods: {
    slideTo: function slideTo (index) {
      // let newIndex = (index | 0) // % this.frameCount
      var newIndex = (index | 0) % this.frameCount; // scroll to left
      newIndex = Math.max(newIndex, 0);
      newIndex = Math.min(newIndex, this.frameCount - 1);

      var offset = -newIndex * this.wrapperWidth;
      var inner = this.$refs.inner;

      if (inner) {
        // TODO: will-change | set styles together
        inner.style.transition = "transform .2s ease-in-out";
        inner.style.transform = "translate3d(" + offset + "px, 0, 0)";
        setTimeout(function () {
          inner.style.transition = '';
        }, 200);
      }
      if (newIndex !== this.currentIndex) {
        this.currentIndex = newIndex;
        this.$emit('change', this.createEvent('change', {
          index: this.currentIndex
        }));
      }
    },

    next: function next () {
      this.slideTo(this.currentIndex + 1);
    },

    prev: function prev () {
      this.slideTo(this.currentIndex - 1);
    },

    handleTouchStart: function handleTouchStart (event) {
      event.preventDefault();
      event.stopPropagation();
      // console.log('touch start', event)
      var touch = event.changedTouches[0];
      // console.log('touch start', event.target, event.target.pageY)
      // console.log('touches', touch)
      this._touchParams = {
        originalTransform: this.$refs.inner.style.transform,
        startTouchEvent: touch,
        startX: touch.pageX,
        startY: touch.pageY,
        timeStamp: event.timeStamp
      };
    },

    handleTouchMove: function handleTouchMove (event) {
      event.preventDefault();
      event.stopPropagation();
      // console.log('touch move')
      if (this._touchParams) {
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var startX = ref.startX;
        var touch = event.changedTouches[0];
        var offsetX = touch.pageX - startX;
        // console.log('offsetX', offsetX, 'startX', startX, 'pageX', touch.pageX)
        this._touchParams.offsetX = offsetX;

        if (inner && offsetX) {
          // console.log('transform', `${offsetX - this.currentIndex * this.wrapperWidth}`)
          inner.style.transform = "translate3d(" + (offsetX - this.currentIndex * this.wrapperWidth) + "px, 0, 0)";
        }
      }
    },

    handleTouchEnd: function handleTouchEnd (event) {
      event.preventDefault();
      event.stopPropagation();
      // console.log('touch end')
      var inner = this.$refs.inner;
      if (this._touchParams) {
        var ref = this._touchParams;
        var offsetX = ref.offsetX;
        // console.log('touch pageX:', touch.pageX, ', offsetX:', offsetX)
        if (inner) {
          var reset = Math.abs(offsetX / this.wrapperWidth) < 0.2;
          var direction = offsetX > 0 ? 1 : -1;
          var newIndex = reset ? this.currentIndex : (this.currentIndex - direction);

          // console.log('reset:', reset, ', newIndex:', newIndex)
          this.slideTo(newIndex);
        }
      }
      delete this._touchParams;
    }
  }
};

var index$1 = {
  mixins: [eventMixin, slideMixin],
  // components: { indicator },
  props: {
    'auto-play': {
      type: [String, Boolean],
      default: false
    },
    interval: {
      type: [String, Number],
      default: 3000
    }
  },

  data: function data () {
    return {
      currentIndex: 0,
      frameCount: 0
    }
  },

  methods: {
    computeWrapperSize: function computeWrapperSize () {
      var wrapper = this.$refs.wrapper;
      if (wrapper) {
        var rect = wrapper.getBoundingClientRect();
        this.wrapperWidth = rect.width;
        this.wrapperHeight = rect.height;
      }
    },

    updateLayout: function updateLayout () {
      this.computeWrapperSize();
      var inner = this.$refs.inner;
      if (inner) {
        inner.style.width = this.wrapperWidth * this.frameCount + 'px';
      }
    },

    formatChildren: function formatChildren (createElement) {
      var this$1 = this;

      var children = this.$slots.default || [];
      return children.filter(function (vnode) {
        // console.log(vnode)
        if (!vnode.tag) { return false }
        if (vnode.componentOptions && vnode.componentOptions.tag === 'indicator') {
          // console.log(vnode)
          // console.trace()
          this$1._indicator = createElement(indicator$1, {
            staticClass: vnode.data.staticClass,
            staticStyle: vnode.data.staticStyle,
            attrs: {
              count: this$1.frameCount,
              active: this$1.currentIndex
            }
          });
          return false
        }
        return true
      }).map(function (vnode) {
        return createElement('li', {
          staticClass: 'weex-slider-cell'
        }, [vnode])
      })
    }
  },

  created: function created () {
    var this$1 = this;

    this._indicator = null;
    this.$nextTick(function () {
      this$1.updateLayout();
    });
  },

  mounted: function mounted () {
    if (this.autoPlay) {
      var interval = Number(this.interval);
      this._lastSlideTime = Date.now();

      var autoPlayFn = bind(function () {
        clearTimeout(this._autoPlayTimer);
        var now = Date.now();
        var nextTick = interval - now + this._lastSlideTime;
        nextTick = nextTick > 100 ? nextTick : interval;

        this.next();
        this._lastSlideTime = now;
        this._autoPlayTimer = setTimeout(autoPlayFn, nextTick);
      }, this);

      this._autoPlayTimer = setTimeout(autoPlayFn, interval);
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    var innerElements = this.formatChildren(createElement);
    this.frameCount = innerElements.length;

    return createElement(
      'nav',
      {
        ref: 'wrapper',
        attrs: { 'weex-type': 'slider' },
        staticClass: 'weex-slider weex-slider-wrapper',
        on: {
          touchstart: this.handleTouchStart,
          touchmove: throttle(bind(this.handleTouchMove, this), 25),
          touchend: this.handleTouchEnd
        }
      },
      [
        createElement('ul', {
          ref: 'inner',
          staticClass: 'weex-slider-inner'
        }, innerElements),
        this._indicator
      ]
    )
  }
};

var warning = {
  render: function render () {
    // TODO: add tag nesting validation
    return null
  }
};

/**
 * Get text styles
 */
function getTextStyle (props) {
  if ( props === void 0 ) props = {};

  var lines = parseInt(props.lines) || 0;
  if (lines > 0) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      webkitLineClamp: lines
    }
  }
}

var text = {
  props: {
    lines: [Number, String],
    value: [String]
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    return createElement('p', {
      attrs: { 'weex-type': 'text' },
      staticClass: 'weex-text',
      staticStyle: getTextStyle(this)
    }, this.$slots.default || [this.value])
  }
};

var web = {
  props: {
    src: String
  },
  render: function render (createElement) {
    /* istanbul ignore next */
    return createElement('iframe', {
      attrs: {
        'weex-type': 'web',
        src: this.src
      },
      staticClass: 'weex-web'
    })
  }
};



var components$1 = Object.freeze({
	switch: _switch,
	image: image,
	list: index,
	cell: cell,
	scroller: scroller,
	slider: index$1,
	indicator: warning,
	refresh: warning,
	loading: warning,
	text: text,
	web: web
});

var DEFAULT_VIEWPORT_WIDTH = 750;

function setViewport (configs) {
  if ( configs === void 0 ) configs = {};

  var doc = window.document;

  if (doc) {
    var screenWidth = window.screen.width;
    var scale = screenWidth / DEFAULT_VIEWPORT_WIDTH;

    var contents = [
      ("width=" + DEFAULT_VIEWPORT_WIDTH),
      ("initial-scale=" + scale),
      ("maximum-scale=" + scale),
      ("minimum-scale=" + scale),
      "user-scalable=no"
    ];

    var meta = doc.querySelector('meta[name="viewport"]');
    if (!meta) {
      meta = doc.createElement('meta');
      meta.setAttribute('name', 'viewport');
      document.querySelector('head').appendChild(meta);
    }

    meta.setAttribute('content', contents.join(','));
  }
}

// import Vue from 'vue'
function install (Vue) {
  var htmlRegex = /^html:/i;
  Vue.config.isReservedTag = function (tag) { return htmlRegex.test(tag); };
  Vue.config.parsePlatformTagName = function (tag) { return tag.replace(htmlRegex, ''); };

  for (var name in components$1) {
    Vue.component(name, components$1[name]);
  }

  /* istanbul ignore next */
  
}

/* eslint-disable no-undef */
if (typeof Vue === 'undefined') {
  console.error('[Vue Renderer] `Vue` is not defined!');
}
else {
  /* istanbul ignore next */
  if ("production" === 'development'
    && semver.lt(Vue.version, '2.1.5')) {
    console.warn("[Vue Renderer] The version of Vue should be " +
      "greater than 2.1.5, current is " + (Vue.version) + ".");
  }

  setViewport();

  Vue.use({ install: install });
}

exports.install = install;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvc2VtdmVyL3NlbXZlci5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9odG1sNS9zaGFyZWQvYXJyYXlGcm9tLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvaHRtbDUvc2hhcmVkL29iamVjdFNldFByb3RvdHlwZU9mLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ludm9rZS5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9odG1sNS9yZW5kZXIvdnVlL2Vudi5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9odG1sNS9yZW5kZXIvdnVlL3ZhbGlkYXRvci9zdHlsZS5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9odG1sNS9yZW5kZXIvdnVlL3ZhbGlkYXRvci9wcm9wLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L2h0bWw1L3JlbmRlci92dWUvdXRpbHMuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvaHRtbDUvcmVuZGVyL3Z1ZS92YWxpZGF0b3IvY2hlY2suanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvaHRtbDUvcmVuZGVyL3Z1ZS92YWxpZGF0b3IvaW5kZXguanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3N3aXRjaC5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvaW1hZ2UuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL2xpc3QvbG9hZGluZy1pbmRpY2F0b3IuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL2xpc3QvcmVmcmVzaC5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvbGlzdC9sb2FkaW5nLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L2h0bWw1L3JlbmRlci92dWUvbWl4aW5zL3JlY3QuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvaHRtbDUvcmVuZGVyL3Z1ZS9taXhpbnMvZXZlbnQuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL2xpc3QvbGlzdE1peGluLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9saXN0L2luZGV4LmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9saXN0L2NlbGwuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3Njcm9sbGVyLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zbGlkZXIvaW5kaWNhdG9yLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVNaXhpbi5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2xpZGVyL2luZGV4LmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy93YXJuaW5nLmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy90ZXh0LmpzIiwiLi4vLi4vLi4vZm9yay93ZWV4L2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy93ZWIuanMiLCIuLi8uLi8uLi9mb3JrL3dlZXgvaHRtbDUvcmVuZGVyL3Z1ZS92aWV3cG9ydC5qcyIsIi4uLy4uLy4uL2Zvcmsvd2VleC9odG1sNS9yZW5kZXIvdnVlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFNlbVZlcjtcblxuLy8gVGhlIGRlYnVnIGZ1bmN0aW9uIGlzIGV4Y2x1ZGVkIGVudGlyZWx5IGZyb20gdGhlIG1pbmlmaWVkIHZlcnNpb24uXG4vKiBub21pbiAqLyB2YXIgZGVidWc7XG4vKiBub21pbiAqLyBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmXG4gICAgLyogbm9taW4gKi8gcHJvY2Vzcy5lbnYgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudi5OT0RFX0RFQlVHICYmXG4gICAgLyogbm9taW4gKi8gL1xcYnNlbXZlclxcYi9pLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRykpXG4gIC8qIG5vbWluICovIGRlYnVnID0gZnVuY3Rpb24oKSB7XG4gICAgLyogbm9taW4gKi8gdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIC8qIG5vbWluICovIGFyZ3MudW5zaGlmdCgnU0VNVkVSJyk7XG4gICAgLyogbm9taW4gKi8gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgLyogbm9taW4gKi8gfTtcbi8qIG5vbWluICovIGVsc2VcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHt9O1xuXG4vLyBOb3RlOiB0aGlzIGlzIHRoZSBzZW12ZXIub3JnIHZlcnNpb24gb2YgdGhlIHNwZWMgdGhhdCBpdCBpbXBsZW1lbnRzXG4vLyBOb3QgbmVjZXNzYXJpbHkgdGhlIHBhY2thZ2UgdmVyc2lvbiBvZiB0aGlzIGNvZGUuXG5leHBvcnRzLlNFTVZFUl9TUEVDX1ZFUlNJT04gPSAnMi4wLjAnO1xuXG52YXIgTUFYX0xFTkdUSCA9IDI1NjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgOTAwNzE5OTI1NDc0MDk5MTtcblxuLy8gVGhlIGFjdHVhbCByZWdleHBzIGdvIG9uIGV4cG9ydHMucmVcbnZhciByZSA9IGV4cG9ydHMucmUgPSBbXTtcbnZhciBzcmMgPSBleHBvcnRzLnNyYyA9IFtdO1xudmFyIFIgPSAwO1xuXG4vLyBUaGUgZm9sbG93aW5nIFJlZ3VsYXIgRXhwcmVzc2lvbnMgY2FuIGJlIHVzZWQgZm9yIHRva2VuaXppbmcsXG4vLyB2YWxpZGF0aW5nLCBhbmQgcGFyc2luZyBTZW1WZXIgdmVyc2lvbiBzdHJpbmdzLlxuXG4vLyAjIyBOdW1lcmljIElkZW50aWZpZXJcbi8vIEEgc2luZ2xlIGAwYCwgb3IgYSBub24temVybyBkaWdpdCBmb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgZGlnaXRzLlxuXG52YXIgTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJdID0gJzB8WzEtOV1cXFxcZConO1xudmFyIE5VTUVSSUNJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gPSAnWzAtOV0rJztcblxuXG4vLyAjIyBOb24tbnVtZXJpYyBJZGVudGlmaWVyXG4vLyBaZXJvIG9yIG1vcmUgZGlnaXRzLCBmb2xsb3dlZCBieSBhIGxldHRlciBvciBoeXBoZW4sIGFuZCB0aGVuIHplcm8gb3Jcbi8vIG1vcmUgbGV0dGVycywgZGlnaXRzLCBvciBoeXBoZW5zLlxuXG52YXIgTk9OTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdID0gJ1xcXFxkKlthLXpBLVotXVthLXpBLVowLTktXSonO1xuXG5cbi8vICMjIE1haW4gVmVyc2lvblxuLy8gVGhyZWUgZG90LXNlcGFyYXRlZCBudW1lcmljIGlkZW50aWZpZXJzLlxuXG52YXIgTUFJTlZFUlNJT04gPSBSKys7XG5zcmNbTUFJTlZFUlNJT05dID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBNQUlOVkVSU0lPTkxPT1NFID0gUisrO1xuc3JjW01BSU5WRVJTSU9OTE9PU0VdID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJyknO1xuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uIElkZW50aWZpZXJcbi8vIEEgbnVtZXJpYyBpZGVudGlmaWVyLCBvciBhIG5vbi1udW1lcmljIGlkZW50aWZpZXIuXG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUiA9IFIrKztcbnNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd8JyArIHNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdID0gJyg/OicgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uXG4vLyBIeXBoZW4sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGRvdC1zZXBhcmF0ZWQgcHJlLXJlbGVhc2UgdmVyc2lvblxuLy8gaWRlbnRpZmllcnMuXG5cbnZhciBQUkVSRUxFQVNFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VdID0gJyg/Oi0oJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gKyAnKSopKSc7XG5cbnZhciBQUkVSRUxFQVNFTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUxPT1NFXSA9ICcoPzotPygnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSArICcpKikpJztcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGEgSWRlbnRpZmllclxuLy8gQW55IGNvbWJpbmF0aW9uIG9mIGRpZ2l0cywgbGV0dGVycywgb3IgaHlwaGVucy5cblxudmFyIEJVSUxESURFTlRJRklFUiA9IFIrKztcbnNyY1tCVUlMRElERU5USUZJRVJdID0gJ1swLTlBLVphLXotXSsnO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YVxuLy8gUGx1cyBzaWduLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBwZXJpb2Qtc2VwYXJhdGVkIGJ1aWxkIG1ldGFkYXRhXG4vLyBpZGVudGlmaWVycy5cblxudmFyIEJVSUxEID0gUisrO1xuc3JjW0JVSUxEXSA9ICcoPzpcXFxcKygnICsgc3JjW0JVSUxESURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbQlVJTERJREVOVElGSUVSXSArICcpKikpJztcblxuXG4vLyAjIyBGdWxsIFZlcnNpb24gU3RyaW5nXG4vLyBBIG1haW4gdmVyc2lvbiwgZm9sbG93ZWQgb3B0aW9uYWxseSBieSBhIHByZS1yZWxlYXNlIHZlcnNpb24gYW5kXG4vLyBidWlsZCBtZXRhZGF0YS5cblxuLy8gTm90ZSB0aGF0IHRoZSBvbmx5IG1ham9yLCBtaW5vciwgcGF0Y2gsIGFuZCBwcmUtcmVsZWFzZSBzZWN0aW9ucyBvZlxuLy8gdGhlIHZlcnNpb24gc3RyaW5nIGFyZSBjYXB0dXJpbmcgZ3JvdXBzLiAgVGhlIGJ1aWxkIG1ldGFkYXRhIGlzIG5vdCBhXG4vLyBjYXB0dXJpbmcgZ3JvdXAsIGJlY2F1c2UgaXQgc2hvdWxkIG5vdCBldmVyIGJlIHVzZWQgaW4gdmVyc2lvblxuLy8gY29tcGFyaXNvbi5cblxudmFyIEZVTEwgPSBSKys7XG52YXIgRlVMTFBMQUlOID0gJ3Y/JyArIHNyY1tNQUlOVkVSU0lPTl0gK1xuICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFXSArICc/JyArXG4gICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/Jztcblxuc3JjW0ZVTExdID0gJ14nICsgRlVMTFBMQUlOICsgJyQnO1xuXG4vLyBsaWtlIGZ1bGwsIGJ1dCBhbGxvd3MgdjEuMi4zIGFuZCA9MS4yLjMsIHdoaWNoIHBlb3BsZSBkbyBzb21ldGltZXMuXG4vLyBhbHNvLCAxLjAuMGFscGhhMSAocHJlcmVsZWFzZSB3aXRob3V0IHRoZSBoeXBoZW4pIHdoaWNoIGlzIHByZXR0eVxuLy8gY29tbW9uIGluIHRoZSBucG0gcmVnaXN0cnkuXG52YXIgTE9PU0VQTEFJTiA9ICdbdj1cXFxcc10qJyArIHNyY1tNQUlOVkVSU0lPTkxPT1NFXSArXG4gICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JztcblxudmFyIExPT1NFID0gUisrO1xuc3JjW0xPT1NFXSA9ICdeJyArIExPT1NFUExBSU4gKyAnJCc7XG5cbnZhciBHVExUID0gUisrO1xuc3JjW0dUTFRdID0gJygoPzo8fD4pPz0/KSc7XG5cbi8vIFNvbWV0aGluZyBsaWtlIFwiMi4qXCIgb3IgXCIxLjIueFwiLlxuLy8gTm90ZSB0aGF0IFwieC54XCIgaXMgYSB2YWxpZCB4UmFuZ2UgaWRlbnRpZmVyLCBtZWFuaW5nIFwiYW55IHZlcnNpb25cIlxuLy8gT25seSB0aGUgZmlyc3QgaXRlbSBpcyBzdHJpY3RseSByZXF1aXJlZC5cbnZhciBYUkFOR0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSA9IHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICd8eHxYfFxcXFwqJztcbnZhciBYUkFOR0VJREVOVElGSUVSID0gUisrO1xuc3JjW1hSQU5HRUlERU5USUZJRVJdID0gc3JjW05VTUVSSUNJREVOVElGSUVSXSArICd8eHxYfFxcXFwqJztcblxudmFyIFhSQU5HRVBMQUlOID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOXSA9ICdbdj1cXFxcc10qKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OicgKyBzcmNbUFJFUkVMRUFTRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAnKT8pPyc7XG5cbnZhciBYUkFOR0VQTEFJTkxPT1NFID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOTE9PU0VdID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJyk/JyArXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRSA9IFIrKztcbnNyY1tYUkFOR0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFhSQU5HRUxPT1NFID0gUisrO1xuc3JjW1hSQU5HRUxPT1NFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyonICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBUaWxkZSByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwicmVhc29uYWJseSBhdCBvciBncmVhdGVyIHRoYW5cIlxudmFyIExPTkVUSUxERSA9IFIrKztcbnNyY1tMT05FVElMREVdID0gJyg/On4+PyknO1xuXG52YXIgVElMREVUUklNID0gUisrO1xuc3JjW1RJTERFVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVUSUxERV0gKyAnXFxcXHMrJztcbnJlW1RJTERFVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tUSUxERVRSSU1dLCAnZycpO1xudmFyIHRpbGRlVHJpbVJlcGxhY2UgPSAnJDF+JztcblxudmFyIFRJTERFID0gUisrO1xuc3JjW1RJTERFXSA9ICdeJyArIHNyY1tMT05FVElMREVdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBUSUxERUxPT1NFID0gUisrO1xuc3JjW1RJTERFTE9PU0VdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIENhcmV0IHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJhdCBsZWFzdCBhbmQgYmFja3dhcmRzIGNvbXBhdGlibGUgd2l0aFwiXG52YXIgTE9ORUNBUkVUID0gUisrO1xuc3JjW0xPTkVDQVJFVF0gPSAnKD86XFxcXF4pJztcblxudmFyIENBUkVUVFJJTSA9IFIrKztcbnNyY1tDQVJFVFRSSU1dID0gJyhcXFxccyopJyArIHNyY1tMT05FQ0FSRVRdICsgJ1xcXFxzKyc7XG5yZVtDQVJFVFRSSU1dID0gbmV3IFJlZ0V4cChzcmNbQ0FSRVRUUklNXSwgJ2cnKTtcbnZhciBjYXJldFRyaW1SZXBsYWNlID0gJyQxXic7XG5cbnZhciBDQVJFVCA9IFIrKztcbnNyY1tDQVJFVF0gPSAnXicgKyBzcmNbTE9ORUNBUkVUXSArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgQ0FSRVRMT09TRSA9IFIrKztcbnNyY1tDQVJFVExPT1NFXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBBIHNpbXBsZSBndC9sdC9lcSB0aGluZywgb3IganVzdCBcIlwiIHRvIGluZGljYXRlIFwiYW55IHZlcnNpb25cIlxudmFyIENPTVBBUkFUT1JMT09TRSA9IFIrKztcbnNyY1tDT01QQVJBVE9STE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgTE9PU0VQTEFJTiArICcpJHxeJCc7XG52YXIgQ09NUEFSQVRPUiA9IFIrKztcbnNyY1tDT01QQVJBVE9SXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyooJyArIEZVTExQTEFJTiArICcpJHxeJCc7XG5cblxuLy8gQW4gZXhwcmVzc2lvbiB0byBzdHJpcCBhbnkgd2hpdGVzcGFjZSBiZXR3ZWVuIHRoZSBndGx0IGFuZCB0aGUgdGhpbmdcbi8vIGl0IG1vZGlmaWVzLCBzbyB0aGF0IGA+IDEuMi4zYCA9PT4gYD4xLjIuM2BcbnZhciBDT01QQVJBVE9SVFJJTSA9IFIrKztcbnNyY1tDT01QQVJBVE9SVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0dUTFRdICtcbiAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJ3wnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJztcblxuLy8gdGhpcyBvbmUgaGFzIHRvIHVzZSB0aGUgL2cgZmxhZ1xucmVbQ09NUEFSQVRPUlRSSU1dID0gbmV3IFJlZ0V4cChzcmNbQ09NUEFSQVRPUlRSSU1dLCAnZycpO1xudmFyIGNvbXBhcmF0b3JUcmltUmVwbGFjZSA9ICckMSQyJDMnO1xuXG5cbi8vIFNvbWV0aGluZyBsaWtlIGAxLjIuMyAtIDEuMi40YFxuLy8gTm90ZSB0aGF0IHRoZXNlIGFsbCB1c2UgdGhlIGxvb3NlIGZvcm0sIGJlY2F1c2UgdGhleSdsbCBiZVxuLy8gY2hlY2tlZCBhZ2FpbnN0IGVpdGhlciB0aGUgc3RyaWN0IG9yIGxvb3NlIGNvbXBhcmF0b3IgZm9ybVxuLy8gbGF0ZXIuXG52YXIgSFlQSEVOUkFOR0UgPSBSKys7XG5zcmNbSFlQSEVOUkFOR0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICdcXFxccystXFxcXHMrJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKiQnO1xuXG52YXIgSFlQSEVOUkFOR0VMT09TRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRUxPT1NFXSA9ICdeXFxcXHMqKCcgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbi8vIFN0YXIgcmFuZ2VzIGJhc2ljYWxseSBqdXN0IGFsbG93IGFueXRoaW5nIGF0IGFsbC5cbnZhciBTVEFSID0gUisrO1xuc3JjW1NUQVJdID0gJyg8fD4pPz0/XFxcXHMqXFxcXConO1xuXG4vLyBDb21waWxlIHRvIGFjdHVhbCByZWdleHAgb2JqZWN0cy5cbi8vIEFsbCBhcmUgZmxhZy1mcmVlLCB1bmxlc3MgdGhleSB3ZXJlIGNyZWF0ZWQgYWJvdmUgd2l0aCBhIGZsYWcuXG5mb3IgKHZhciBpID0gMDsgaSA8IFI7IGkrKykge1xuICBkZWJ1ZyhpLCBzcmNbaV0pO1xuICBpZiAoIXJlW2ldKVxuICAgIHJlW2ldID0gbmV3IFJlZ0V4cChzcmNbaV0pO1xufVxuXG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5mdW5jdGlvbiBwYXJzZSh2ZXJzaW9uLCBsb29zZSkge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcilcbiAgICByZXR1cm4gdmVyc2lvbjtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKVxuICAgIHJldHVybiBudWxsO1xuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdmFyIHIgPSBsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdO1xuICBpZiAoIXIudGVzdCh2ZXJzaW9uKSlcbiAgICByZXR1cm4gbnVsbDtcblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnRzLnZhbGlkID0gdmFsaWQ7XG5mdW5jdGlvbiB2YWxpZCh2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgdiA9IHBhcnNlKHZlcnNpb24sIGxvb3NlKTtcbiAgcmV0dXJuIHYgPyB2LnZlcnNpb24gOiBudWxsO1xufVxuXG5cbmV4cG9ydHMuY2xlYW4gPSBjbGVhbjtcbmZ1bmN0aW9uIGNsZWFuKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciBzID0gcGFyc2UodmVyc2lvbi50cmltKCkucmVwbGFjZSgvXls9dl0rLywgJycpLCBsb29zZSk7XG4gIHJldHVybiBzID8gcy52ZXJzaW9uIDogbnVsbDtcbn1cblxuZXhwb3J0cy5TZW1WZXIgPSBTZW1WZXI7XG5cbmZ1bmN0aW9uIFNlbVZlcih2ZXJzaW9uLCBsb29zZSkge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgIGlmICh2ZXJzaW9uLmxvb3NlID09PSBsb29zZSlcbiAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgIGVsc2VcbiAgICAgIHZlcnNpb24gPSB2ZXJzaW9uLnZlcnNpb247XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG4gIH1cblxuICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZlcnNpb24gaXMgbG9uZ2VyIHRoYW4gJyArIE1BWF9MRU5HVEggKyAnIGNoYXJhY3RlcnMnKVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcblxuICBkZWJ1ZygnU2VtVmVyJywgdmVyc2lvbiwgbG9vc2UpO1xuICB0aGlzLmxvb3NlID0gbG9vc2U7XG4gIHZhciBtID0gdmVyc2lvbi50cmltKCkubWF0Y2gobG9vc2UgPyByZVtMT09TRV0gOiByZVtGVUxMXSk7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgVmVyc2lvbjogJyArIHZlcnNpb24pO1xuXG4gIHRoaXMucmF3ID0gdmVyc2lvbjtcblxuICAvLyB0aGVzZSBhcmUgYWN0dWFsbHkgbnVtYmVyc1xuICB0aGlzLm1ham9yID0gK21bMV07XG4gIHRoaXMubWlub3IgPSArbVsyXTtcbiAgdGhpcy5wYXRjaCA9ICttWzNdO1xuXG4gIGlmICh0aGlzLm1ham9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1ham9yIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1ham9yIHZlcnNpb24nKVxuXG4gIGlmICh0aGlzLm1pbm9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1pbm9yIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1pbm9yIHZlcnNpb24nKVxuXG4gIGlmICh0aGlzLnBhdGNoID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLnBhdGNoIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHBhdGNoIHZlcnNpb24nKVxuXG4gIC8vIG51bWJlcmlmeSBhbnkgcHJlcmVsZWFzZSBudW1lcmljIGlkc1xuICBpZiAoIW1bNF0pXG4gICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gIGVsc2VcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBtWzRdLnNwbGl0KCcuJykubWFwKGZ1bmN0aW9uKGlkKSB7XG4gICAgICBpZiAoL15bMC05XSskLy50ZXN0KGlkKSkge1xuICAgICAgICB2YXIgbnVtID0gK2lkO1xuICAgICAgICBpZiAobnVtID49IDAgJiYgbnVtIDwgTUFYX1NBRkVfSU5URUdFUilcbiAgICAgICAgICByZXR1cm4gbnVtO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlkO1xuICAgIH0pO1xuXG4gIHRoaXMuYnVpbGQgPSBtWzVdID8gbVs1XS5zcGxpdCgnLicpIDogW107XG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblNlbVZlci5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudmVyc2lvbiA9IHRoaXMubWFqb3IgKyAnLicgKyB0aGlzLm1pbm9yICsgJy4nICsgdGhpcy5wYXRjaDtcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgdGhpcy52ZXJzaW9uICs9ICctJyArIHRoaXMucHJlcmVsZWFzZS5qb2luKCcuJyk7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBkZWJ1ZygnU2VtVmVyLmNvbXBhcmUnLCB0aGlzLnZlcnNpb24sIHRoaXMubG9vc2UsIG90aGVyKTtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIHRoaXMuY29tcGFyZU1haW4ob3RoZXIpIHx8IHRoaXMuY29tcGFyZVByZShvdGhlcik7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVNYWluID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1ham9yLCBvdGhlci5tYWpvcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1pbm9yLCBvdGhlci5taW5vcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLnBhdGNoLCBvdGhlci5wYXRjaCk7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVQcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICAvLyBOT1QgaGF2aW5nIGEgcHJlcmVsZWFzZSBpcyA+IGhhdmluZyBvbmVcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAtMTtcbiAgZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIDE7XG4gIGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gMDtcblxuICB2YXIgaSA9IDA7XG4gIGRvIHtcbiAgICB2YXIgYSA9IHRoaXMucHJlcmVsZWFzZVtpXTtcbiAgICB2YXIgYiA9IG90aGVyLnByZXJlbGVhc2VbaV07XG4gICAgZGVidWcoJ3ByZXJlbGVhc2UgY29tcGFyZScsIGksIGEsIGIpO1xuICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDA7XG4gICAgZWxzZSBpZiAoYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIC0xO1xuICAgIGVsc2UgaWYgKGEgPT09IGIpXG4gICAgICBjb250aW51ZTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpO1xuICB9IHdoaWxlICgrK2kpO1xufTtcblxuLy8gcHJlbWlub3Igd2lsbCBidW1wIHRoZSB2ZXJzaW9uIHVwIHRvIHRoZSBuZXh0IG1pbm9yIHJlbGVhc2UsIGFuZCBpbW1lZGlhdGVseVxuLy8gZG93biB0byBwcmUtcmVsZWFzZS4gcHJlbWFqb3IgYW5kIHByZXBhdGNoIHdvcmsgdGhlIHNhbWUgd2F5LlxuU2VtVmVyLnByb3RvdHlwZS5pbmMgPSBmdW5jdGlvbihyZWxlYXNlLCBpZGVudGlmaWVyKSB7XG4gIHN3aXRjaCAocmVsZWFzZSkge1xuICAgIGNhc2UgJ3ByZW1ham9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yID0gMDtcbiAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZW1pbm9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIGFscmVhZHkgYSBwcmVyZWxlYXNlLCBpdCB3aWxsIGJ1bXAgdG8gdGhlIG5leHQgdmVyc2lvblxuICAgICAgLy8gZHJvcCBhbnkgcHJlcmVsZWFzZXMgdGhhdCBtaWdodCBhbHJlYWR5IGV4aXN0LCBzaW5jZSB0aGV5IGFyZSBub3RcbiAgICAgIC8vIHJlbGV2YW50IGF0IHRoaXMgcG9pbnQuXG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgLy8gSWYgdGhlIGlucHV0IGlzIGEgbm9uLXByZXJlbGVhc2UgdmVyc2lvbiwgdGhpcyBhY3RzIHRoZSBzYW1lIGFzXG4gICAgLy8gcHJlcGF0Y2guXG4gICAgY2FzZSAncHJlcmVsZWFzZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcik7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ21ham9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWFqb3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtYWpvciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtYWpvci5cbiAgICAgIC8vIDEuMC4wLTUgYnVtcHMgdG8gMS4wLjBcbiAgICAgIC8vIDEuMS4wIGJ1bXBzIHRvIDIuMC4wXG4gICAgICBpZiAodGhpcy5taW5vciAhPT0gMCB8fCB0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMubWlub3IgPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21pbm9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWlub3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtaW5vciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtaW5vci5cbiAgICAgIC8vIDEuMi4wLTUgYnVtcHMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4xIGJ1bXBzIHRvIDEuMy4wXG4gICAgICBpZiAodGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGF0Y2gnOlxuICAgICAgLy8gSWYgdGhpcyBpcyBub3QgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uLCBpdCB3aWxsIGluY3JlbWVudCB0aGUgcGF0Y2guXG4gICAgICAvLyBJZiBpdCBpcyBhIHByZS1yZWxlYXNlIGl0IHdpbGwgYnVtcCB1cCB0byB0aGUgc2FtZSBwYXRjaCB2ZXJzaW9uLlxuICAgICAgLy8gMS4yLjAtNSBwYXRjaGVzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMCBwYXRjaGVzIHRvIDEuMi4xXG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5wYXRjaCsrO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICAvLyBUaGlzIHByb2JhYmx5IHNob3VsZG4ndCBiZSB1c2VkIHB1YmxpY2x5LlxuICAgIC8vIDEuMC4wIFwicHJlXCIgd291bGQgYmVjb21lIDEuMC4wLTAgd2hpY2ggaXMgdGhlIHdyb25nIGRpcmVjdGlvbi5cbiAgICBjYXNlICdwcmUnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFswXTtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgaSA9IHRoaXMucHJlcmVsZWFzZS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVyZWxlYXNlW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlW2ldKys7XG4gICAgICAgICAgICBpID0gLTI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpID09PSAtMSkgLy8gZGlkbid0IGluY3JlbWVudCBhbnl0aGluZ1xuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZS5wdXNoKDApO1xuICAgICAgfVxuICAgICAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICAgICAgLy8gMS4yLjAtYmV0YS4xIGJ1bXBzIHRvIDEuMi4wLWJldGEuMixcbiAgICAgICAgLy8gMS4yLjAtYmV0YS5mb29ibHogb3IgMS4yLjAtYmV0YSBidW1wcyB0byAxLjIuMC1iZXRhLjBcbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZVswXSA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgIGlmIChpc05hTih0aGlzLnByZXJlbGVhc2VbMV0pKVxuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF07XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW5jcmVtZW50IGFyZ3VtZW50OiAnICsgcmVsZWFzZSk7XG4gIH1cbiAgdGhpcy5mb3JtYXQoKTtcbiAgdGhpcy5yYXcgPSB0aGlzLnZlcnNpb247XG4gIHJldHVybiB0aGlzO1xufTtcblxuZXhwb3J0cy5pbmMgPSBpbmM7XG5mdW5jdGlvbiBpbmModmVyc2lvbiwgcmVsZWFzZSwgbG9vc2UsIGlkZW50aWZpZXIpIHtcbiAgaWYgKHR5cGVvZihsb29zZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgaWRlbnRpZmllciA9IGxvb3NlO1xuICAgIGxvb3NlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSkuaW5jKHJlbGVhc2UsIGlkZW50aWZpZXIpLnZlcnNpb247XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy5kaWZmID0gZGlmZjtcbmZ1bmN0aW9uIGRpZmYodmVyc2lvbjEsIHZlcnNpb24yKSB7XG4gIGlmIChlcSh2ZXJzaW9uMSwgdmVyc2lvbjIpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHYxID0gcGFyc2UodmVyc2lvbjEpO1xuICAgIHZhciB2MiA9IHBhcnNlKHZlcnNpb24yKTtcbiAgICBpZiAodjEucHJlcmVsZWFzZS5sZW5ndGggfHwgdjIucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuICdwcmUnK2tleTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAncHJlcmVsZWFzZSc7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLmNvbXBhcmVJZGVudGlmaWVycyA9IGNvbXBhcmVJZGVudGlmaWVycztcblxudmFyIG51bWVyaWMgPSAvXlswLTldKyQvO1xuZnVuY3Rpb24gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpIHtcbiAgdmFyIGFudW0gPSBudW1lcmljLnRlc3QoYSk7XG4gIHZhciBibnVtID0gbnVtZXJpYy50ZXN0KGIpO1xuXG4gIGlmIChhbnVtICYmIGJudW0pIHtcbiAgICBhID0gK2E7XG4gICAgYiA9ICtiO1xuICB9XG5cbiAgcmV0dXJuIChhbnVtICYmICFibnVtKSA/IC0xIDpcbiAgICAgICAgIChibnVtICYmICFhbnVtKSA/IDEgOlxuICAgICAgICAgYSA8IGIgPyAtMSA6XG4gICAgICAgICBhID4gYiA/IDEgOlxuICAgICAgICAgMDtcbn1cblxuZXhwb3J0cy5yY29tcGFyZUlkZW50aWZpZXJzID0gcmNvbXBhcmVJZGVudGlmaWVycztcbmZ1bmN0aW9uIHJjb21wYXJlSWRlbnRpZmllcnMoYSwgYikge1xuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGIsIGEpO1xufVxuXG5leHBvcnRzLm1ham9yID0gbWFqb3I7XG5mdW5jdGlvbiBtYWpvcihhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWFqb3I7XG59XG5cbmV4cG9ydHMubWlub3IgPSBtaW5vcjtcbmZ1bmN0aW9uIG1pbm9yKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5taW5vcjtcbn1cblxuZXhwb3J0cy5wYXRjaCA9IHBhdGNoO1xuZnVuY3Rpb24gcGF0Y2goYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLnBhdGNoO1xufVxuXG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlO1xuZnVuY3Rpb24gY29tcGFyZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkuY29tcGFyZShiKTtcbn1cblxuZXhwb3J0cy5jb21wYXJlTG9vc2UgPSBjb21wYXJlTG9vc2U7XG5mdW5jdGlvbiBjb21wYXJlTG9vc2UoYSwgYikge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCB0cnVlKTtcbn1cblxuZXhwb3J0cy5yY29tcGFyZSA9IHJjb21wYXJlO1xuZnVuY3Rpb24gcmNvbXBhcmUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYiwgYSwgbG9vc2UpO1xufVxuXG5leHBvcnRzLnNvcnQgPSBzb3J0O1xuZnVuY3Rpb24gc29ydChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5jb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMucnNvcnQgPSByc29ydDtcbmZ1bmN0aW9uIHJzb3J0KGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLnJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMuZ3QgPSBndDtcbmZ1bmN0aW9uIGd0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+IDA7XG59XG5cbmV4cG9ydHMubHQgPSBsdDtcbmZ1bmN0aW9uIGx0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8IDA7XG59XG5cbmV4cG9ydHMuZXEgPSBlcTtcbmZ1bmN0aW9uIGVxKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA9PT0gMDtcbn1cblxuZXhwb3J0cy5uZXEgPSBuZXE7XG5mdW5jdGlvbiBuZXEoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpICE9PSAwO1xufVxuXG5leHBvcnRzLmd0ZSA9IGd0ZTtcbmZ1bmN0aW9uIGd0ZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPj0gMDtcbn1cblxuZXhwb3J0cy5sdGUgPSBsdGU7XG5mdW5jdGlvbiBsdGUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDw9IDA7XG59XG5cbmV4cG9ydHMuY21wID0gY21wO1xuZnVuY3Rpb24gY21wKGEsIG9wLCBiLCBsb29zZSkge1xuICB2YXIgcmV0O1xuICBzd2l0Y2ggKG9wKSB7XG4gICAgY2FzZSAnPT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIGEgPSBhLnZlcnNpb247XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSBiID0gYi52ZXJzaW9uO1xuICAgICAgcmV0ID0gYSA9PT0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyE9PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSBhID0gYS52ZXJzaW9uO1xuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JykgYiA9IGIudmVyc2lvbjtcbiAgICAgIHJldCA9IGEgIT09IGI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcnOiBjYXNlICc9JzogY2FzZSAnPT0nOiByZXQgPSBlcShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJyE9JzogcmV0ID0gbmVxKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPic6IHJldCA9IGd0KGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPj0nOiByZXQgPSBndGUoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8JzogcmV0ID0gbHQoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8PSc6IHJldCA9IGx0ZShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgb3BlcmF0b3I6ICcgKyBvcCk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0cy5Db21wYXJhdG9yID0gQ29tcGFyYXRvcjtcbmZ1bmN0aW9uIENvbXBhcmF0b3IoY29tcCwgbG9vc2UpIHtcbiAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgaWYgKGNvbXAubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIGNvbXA7XG4gICAgZWxzZVxuICAgICAgY29tcCA9IGNvbXAudmFsdWU7XG4gIH1cblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29tcGFyYXRvcikpXG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcblxuICBkZWJ1ZygnY29tcGFyYXRvcicsIGNvbXAsIGxvb3NlKTtcbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuICB0aGlzLnBhcnNlKGNvbXApO1xuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKVxuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgZWxzZVxuICAgIHRoaXMudmFsdWUgPSB0aGlzLm9wZXJhdG9yICsgdGhpcy5zZW12ZXIudmVyc2lvbjtcblxuICBkZWJ1ZygnY29tcCcsIHRoaXMpO1xufVxuXG52YXIgQU5ZID0ge307XG5Db21wYXJhdG9yLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKGNvbXApIHtcbiAgdmFyIHIgPSB0aGlzLmxvb3NlID8gcmVbQ09NUEFSQVRPUkxPT1NFXSA6IHJlW0NPTVBBUkFUT1JdO1xuICB2YXIgbSA9IGNvbXAubWF0Y2gocik7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY29tcGFyYXRvcjogJyArIGNvbXApO1xuXG4gIHRoaXMub3BlcmF0b3IgPSBtWzFdO1xuICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJz0nKVxuICAgIHRoaXMub3BlcmF0b3IgPSAnJztcblxuICAvLyBpZiBpdCBsaXRlcmFsbHkgaXMganVzdCAnPicgb3IgJycgdGhlbiBhbGxvdyBhbnl0aGluZy5cbiAgaWYgKCFtWzJdKVxuICAgIHRoaXMuc2VtdmVyID0gQU5ZO1xuICBlbHNlXG4gICAgdGhpcy5zZW12ZXIgPSBuZXcgU2VtVmVyKG1bMl0sIHRoaXMubG9vc2UpO1xufTtcblxuQ29tcGFyYXRvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24odmVyc2lvbikge1xuICBkZWJ1ZygnQ29tcGFyYXRvci50ZXN0JywgdmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpXG4gICAgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY21wKHZlcnNpb24sIHRoaXMub3BlcmF0b3IsIHRoaXMuc2VtdmVyLCB0aGlzLmxvb3NlKTtcbn07XG5cblxuZXhwb3J0cy5SYW5nZSA9IFJhbmdlO1xuZnVuY3Rpb24gUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIGlmICgocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkgJiYgcmFuZ2UubG9vc2UgPT09IGxvb3NlKVxuICAgIHJldHVybiByYW5nZTtcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmFuZ2UpKVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB0aGlzLmxvb3NlID0gbG9vc2U7XG5cbiAgLy8gRmlyc3QsIHNwbGl0IGJhc2VkIG9uIGJvb2xlYW4gb3IgfHxcbiAgdGhpcy5yYXcgPSByYW5nZTtcbiAgdGhpcy5zZXQgPSByYW5nZS5zcGxpdCgvXFxzKlxcfFxcfFxccyovKS5tYXAoZnVuY3Rpb24ocmFuZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVJhbmdlKHJhbmdlLnRyaW0oKSk7XG4gIH0sIHRoaXMpLmZpbHRlcihmdW5jdGlvbihjKSB7XG4gICAgLy8gdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgcmVsZXZhbnQgZm9yIHdoYXRldmVyIHJlYXNvblxuICAgIHJldHVybiBjLmxlbmd0aDtcbiAgfSk7XG5cbiAgaWYgKCF0aGlzLnNldC5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFNlbVZlciBSYW5nZTogJyArIHJhbmdlKTtcbiAgfVxuXG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblJhbmdlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yYW5nZSA9IHRoaXMuc2V0Lm1hcChmdW5jdGlvbihjb21wcykge1xuICAgIHJldHVybiBjb21wcy5qb2luKCcgJykudHJpbSgpO1xuICB9KS5qb2luKCd8fCcpLnRyaW0oKTtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUucGFyc2VSYW5nZSA9IGZ1bmN0aW9uKHJhbmdlKSB7XG4gIHZhciBsb29zZSA9IHRoaXMubG9vc2U7XG4gIHJhbmdlID0gcmFuZ2UudHJpbSgpO1xuICBkZWJ1ZygncmFuZ2UnLCByYW5nZSwgbG9vc2UpO1xuICAvLyBgMS4yLjMgLSAxLjIuNGAgPT4gYD49MS4yLjMgPD0xLjIuNGBcbiAgdmFyIGhyID0gbG9vc2UgPyByZVtIWVBIRU5SQU5HRUxPT1NFXSA6IHJlW0hZUEhFTlJBTkdFXTtcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKGhyLCBoeXBoZW5SZXBsYWNlKTtcbiAgZGVidWcoJ2h5cGhlbiByZXBsYWNlJywgcmFuZ2UpO1xuICAvLyBgPiAxLjIuMyA8IDEuMi41YCA9PiBgPjEuMi4zIDwxLjIuNWBcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NPTVBBUkFUT1JUUklNXSwgY29tcGFyYXRvclRyaW1SZXBsYWNlKTtcbiAgZGVidWcoJ2NvbXBhcmF0b3IgdHJpbScsIHJhbmdlLCByZVtDT01QQVJBVE9SVFJJTV0pO1xuXG4gIC8vIGB+IDEuMi4zYCA9PiBgfjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbVElMREVUUklNXSwgdGlsZGVUcmltUmVwbGFjZSk7XG5cbiAgLy8gYF4gMS4yLjNgID0+IGBeMS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtDQVJFVFRSSU1dLCBjYXJldFRyaW1SZXBsYWNlKTtcblxuICAvLyBub3JtYWxpemUgc3BhY2VzXG4gIHJhbmdlID0gcmFuZ2Uuc3BsaXQoL1xccysvKS5qb2luKCcgJyk7XG5cbiAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgdHJpbW1lZCBhbmRcbiAgLy8gcmVhZHkgdG8gYmUgc3BsaXQgaW50byBjb21wYXJhdG9ycy5cblxuICB2YXIgY29tcFJlID0gbG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl07XG4gIHZhciBzZXQgPSByYW5nZS5zcGxpdCgnICcpLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKS5zcGxpdCgvXFxzKy8pO1xuICBpZiAodGhpcy5sb29zZSkge1xuICAgIC8vIGluIGxvb3NlIG1vZGUsIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHZhbGlkIGNvbXBhcmF0b3JzXG4gICAgc2V0ID0gc2V0LmZpbHRlcihmdW5jdGlvbihjb21wKSB7XG4gICAgICByZXR1cm4gISFjb21wLm1hdGNoKGNvbXBSZSk7XG4gICAgfSk7XG4gIH1cbiAgc2V0ID0gc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNldDtcbn07XG5cbi8vIE1vc3RseSBqdXN0IGZvciB0ZXN0aW5nIGFuZCBsZWdhY3kgQVBJIHJlYXNvbnNcbmV4cG9ydHMudG9Db21wYXJhdG9ycyA9IHRvQ29tcGFyYXRvcnM7XG5mdW5jdGlvbiB0b0NvbXBhcmF0b3JzKHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSkuc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIGNvbXAubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgIHJldHVybiBjLnZhbHVlO1xuICAgIH0pLmpvaW4oJyAnKS50cmltKCkuc3BsaXQoJyAnKTtcbiAgfSk7XG59XG5cbi8vIGNvbXByaXNlZCBvZiB4cmFuZ2VzLCB0aWxkZXMsIHN0YXJzLCBhbmQgZ3RsdCdzIGF0IHRoaXMgcG9pbnQuXG4vLyBhbHJlYWR5IHJlcGxhY2VkIHRoZSBoeXBoZW4gcmFuZ2VzXG4vLyB0dXJuIGludG8gYSBzZXQgb2YgSlVTVCBjb21wYXJhdG9ycy5cbmZ1bmN0aW9uIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSkge1xuICBkZWJ1ZygnY29tcCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZUNhcmV0cyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVRpbGRlcyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCd0aWxkZXMnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VYUmFuZ2VzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3hyYW5nZScsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVN0YXJzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3N0YXJzJywgY29tcCk7XG4gIHJldHVybiBjb21wO1xufVxuXG5mdW5jdGlvbiBpc1goaWQpIHtcbiAgcmV0dXJuICFpZCB8fCBpZC50b0xvd2VyQ2FzZSgpID09PSAneCcgfHwgaWQgPT09ICcqJztcbn1cblxuLy8gfiwgfj4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyB+MiwgfjIueCwgfjIueC54LCB+PjIsIH4+Mi54IH4+Mi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyB+Mi4wLCB+Mi4wLngsIH4+Mi4wLCB+PjIuMC54IC0tPiA+PTIuMC4wIDwyLjEuMFxuLy8gfjEuMiwgfjEuMi54LCB+PjEuMiwgfj4xLjIueCAtLT4gPj0xLjIuMCA8MS4zLjBcbi8vIH4xLjIuMywgfj4xLjIuMyAtLT4gPj0xLjIuMyA8MS4zLjBcbi8vIH4xLjIuMCwgfj4xLjIuMCAtLT4gPj0xLjIuMCA8MS4zLjBcbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZXMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVRpbGRlKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVGlsZGUoY29tcCwgbG9vc2UpIHtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW1RJTERFTE9PU0VdIDogcmVbVElMREVdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3RpbGRlJywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSlcbiAgICAgIC8vIH4xLjIgPT0gPj0xLjIuMCA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlVGlsZGUgcHInLCBwcik7XG4gICAgICBpZiAocHIuY2hhckF0KDApICE9PSAnLScpXG4gICAgICAgIHByID0gJy0nICsgcHI7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfSBlbHNlXG4gICAgICAvLyB+MS4yLjMgPT0gPj0xLjIuMyA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG5cbiAgICBkZWJ1ZygndGlsZGUgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuLy8gXiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIF4yLCBeMi54LCBeMi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMi4wLCBeMi4wLnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMS4yLCBeMS4yLnggLS0+ID49MS4yLjAgPDIuMC4wXG4vLyBeMS4yLjMgLS0+ID49MS4yLjMgPDIuMC4wXG4vLyBeMS4yLjAgLS0+ID49MS4yLjAgPDIuMC4wXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXRzKGNvbXAsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VDYXJldChjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0KGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXAsIGxvb3NlKTtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW0NBUkVUTE9PU0VdIDogcmVbQ0FSRVRdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ2NhcmV0JywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSkge1xuICAgICAgaWYgKE0gPT09ICcwJylcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VDYXJldCBwcicsIHByKTtcbiAgICAgIGlmIChwci5jaGFyQXQoMCkgIT09ICctJylcbiAgICAgICAgcHIgPSAnLScgKyBwcjtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJylcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAnIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdubyBwcicpO1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9XG5cbiAgICBkZWJ1ZygnY2FyZXQgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZXMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VYUmFuZ2VzJywgY29tcCwgbG9vc2UpO1xuICByZXR1cm4gY29tcC5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpIHtcbiAgY29tcCA9IGNvbXAudHJpbSgpO1xuICB2YXIgciA9IGxvb3NlID8gcmVbWFJBTkdFTE9PU0VdIDogcmVbWFJBTkdFXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihyZXQsIGd0bHQsIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3hSYW5nZScsIGNvbXAsIHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpO1xuICAgIHZhciB4TSA9IGlzWChNKTtcbiAgICB2YXIgeG0gPSB4TSB8fCBpc1gobSk7XG4gICAgdmFyIHhwID0geG0gfHwgaXNYKHApO1xuICAgIHZhciBhbnlYID0geHA7XG5cbiAgICBpZiAoZ3RsdCA9PT0gJz0nICYmIGFueVgpXG4gICAgICBndGx0ID0gJyc7XG5cbiAgICBpZiAoeE0pIHtcbiAgICAgIGlmIChndGx0ID09PSAnPicgfHwgZ3RsdCA9PT0gJzwnKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgYWxsb3dlZFxuICAgICAgICByZXQgPSAnPDAuMC4wJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgZm9yYmlkZGVuXG4gICAgICAgIHJldCA9ICcqJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGd0bHQgJiYgYW55WCkge1xuICAgICAgLy8gcmVwbGFjZSBYIHdpdGggMFxuICAgICAgaWYgKHhtKVxuICAgICAgICBtID0gMDtcbiAgICAgIGlmICh4cClcbiAgICAgICAgcCA9IDA7XG5cbiAgICAgIGlmIChndGx0ID09PSAnPicpIHtcbiAgICAgICAgLy8gPjEgPT4gPj0yLjAuMFxuICAgICAgICAvLyA+MS4yID0+ID49MS4zLjBcbiAgICAgICAgLy8gPjEuMi4zID0+ID49IDEuMi40XG4gICAgICAgIGd0bHQgPSAnPj0nO1xuICAgICAgICBpZiAoeG0pIHtcbiAgICAgICAgICBNID0gK00gKyAxO1xuICAgICAgICAgIG0gPSAwO1xuICAgICAgICAgIHAgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICAgICAgbSA9ICttICsgMTtcbiAgICAgICAgICBwID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChndGx0ID09PSAnPD0nKSB7XG4gICAgICAgIC8vIDw9MC43LnggaXMgYWN0dWFsbHkgPDAuOC4wLCBzaW5jZSBhbnkgMC43Lnggc2hvdWxkXG4gICAgICAgIC8vIHBhc3MuICBTaW1pbGFybHksIDw9Ny54IGlzIGFjdHVhbGx5IDw4LjAuMCwgZXRjLlxuICAgICAgICBndGx0ID0gJzwnO1xuICAgICAgICBpZiAoeG0pXG4gICAgICAgICAgTSA9ICtNICsgMTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG0gPSArbSArIDE7XG4gICAgICB9XG5cbiAgICAgIHJldCA9IGd0bHQgKyBNICsgJy4nICsgbSArICcuJyArIHA7XG4gICAgfSBlbHNlIGlmICh4bSkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfVxuXG4gICAgZGVidWcoJ3hSYW5nZSByZXR1cm4nLCByZXQpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbi8vIEJlY2F1c2UgKiBpcyBBTkQtZWQgd2l0aCBldmVyeXRoaW5nIGVsc2UgaW4gdGhlIGNvbXBhcmF0b3IsXG4vLyBhbmQgJycgbWVhbnMgXCJhbnkgdmVyc2lvblwiLCBqdXN0IHJlbW92ZSB0aGUgKnMgZW50aXJlbHkuXG5mdW5jdGlvbiByZXBsYWNlU3RhcnMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VTdGFycycsIGNvbXAsIGxvb3NlKTtcbiAgLy8gTG9vc2VuZXNzIGlzIGlnbm9yZWQgaGVyZS4gIHN0YXIgaXMgYWx3YXlzIGFzIGxvb3NlIGFzIGl0IGdldHMhXG4gIHJldHVybiBjb21wLnRyaW0oKS5yZXBsYWNlKHJlW1NUQVJdLCAnJyk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgcGFzc2VkIHRvIHN0cmluZy5yZXBsYWNlKHJlW0hZUEhFTlJBTkdFXSlcbi8vIE0sIG0sIHBhdGNoLCBwcmVyZWxlYXNlLCBidWlsZFxuLy8gMS4yIC0gMy40LjUgPT4gPj0xLjIuMCA8PTMuNC41XG4vLyAxLjIuMyAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMCBBbnkgMy40Lnggd2lsbCBkb1xuLy8gMS4yIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wXG5mdW5jdGlvbiBoeXBoZW5SZXBsYWNlKCQwLFxuICAgICAgICAgICAgICAgICAgICAgICBmcm9tLCBmTSwgZm0sIGZwLCBmcHIsIGZiLFxuICAgICAgICAgICAgICAgICAgICAgICB0bywgdE0sIHRtLCB0cCwgdHByLCB0Yikge1xuXG4gIGlmIChpc1goZk0pKVxuICAgIGZyb20gPSAnJztcbiAgZWxzZSBpZiAoaXNYKGZtKSlcbiAgICBmcm9tID0gJz49JyArIGZNICsgJy4wLjAnO1xuICBlbHNlIGlmIChpc1goZnApKVxuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLicgKyBmbSArICcuMCc7XG4gIGVsc2VcbiAgICBmcm9tID0gJz49JyArIGZyb207XG5cbiAgaWYgKGlzWCh0TSkpXG4gICAgdG8gPSAnJztcbiAgZWxzZSBpZiAoaXNYKHRtKSlcbiAgICB0byA9ICc8JyArICgrdE0gKyAxKSArICcuMC4wJztcbiAgZWxzZSBpZiAoaXNYKHRwKSlcbiAgICB0byA9ICc8JyArIHRNICsgJy4nICsgKCt0bSArIDEpICsgJy4wJztcbiAgZWxzZSBpZiAodHByKVxuICAgIHRvID0gJzw9JyArIHRNICsgJy4nICsgdG0gKyAnLicgKyB0cCArICctJyArIHRwcjtcbiAgZWxzZVxuICAgIHRvID0gJzw9JyArIHRvO1xuXG4gIHJldHVybiAoZnJvbSArICcgJyArIHRvKS50cmltKCk7XG59XG5cblxuLy8gaWYgQU5ZIG9mIHRoZSBzZXRzIG1hdGNoIEFMTCBvZiBpdHMgY29tcGFyYXRvcnMsIHRoZW4gcGFzc1xuUmFuZ2UucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gIGlmICghdmVyc2lvbilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRlc3RTZXQodGhpcy5zZXRbaV0sIHZlcnNpb24pKVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZnVuY3Rpb24gdGVzdFNldChzZXQsIHZlcnNpb24pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXNldFtpXS50ZXN0KHZlcnNpb24pKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHZlcnNpb24ucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAvLyBGaW5kIHRoZSBzZXQgb2YgdmVyc2lvbnMgdGhhdCBhcmUgYWxsb3dlZCB0byBoYXZlIHByZXJlbGVhc2VzXG4gICAgLy8gRm9yIGV4YW1wbGUsIF4xLjIuMy1wci4xIGRlc3VnYXJzIHRvID49MS4yLjMtcHIuMSA8Mi4wLjBcbiAgICAvLyBUaGF0IHNob3VsZCBhbGxvdyBgMS4yLjMtcHIuMmAgdG8gcGFzcy5cbiAgICAvLyBIb3dldmVyLCBgMS4yLjQtYWxwaGEubm90cmVhZHlgIHNob3VsZCBOT1QgYmUgYWxsb3dlZCxcbiAgICAvLyBldmVuIHRob3VnaCBpdCdzIHdpdGhpbiB0aGUgcmFuZ2Ugc2V0IGJ5IHRoZSBjb21wYXJhdG9ycy5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoc2V0W2ldLnNlbXZlcik7XG4gICAgICBpZiAoc2V0W2ldLnNlbXZlciA9PT0gQU5ZKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgaWYgKHNldFtpXS5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBhbGxvd2VkID0gc2V0W2ldLnNlbXZlcjtcbiAgICAgICAgaWYgKGFsbG93ZWQubWFqb3IgPT09IHZlcnNpb24ubWFqb3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQubWlub3IgPT09IHZlcnNpb24ubWlub3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQucGF0Y2ggPT09IHZlcnNpb24ucGF0Y2gpXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVmVyc2lvbiBoYXMgYSAtcHJlLCBidXQgaXQncyBub3Qgb25lIG9mIHRoZSBvbmVzIHdlIGxpa2UuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMuc2F0aXNmaWVzID0gc2F0aXNmaWVzO1xuZnVuY3Rpb24gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICB0cnkge1xuICAgIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiByYW5nZS50ZXN0KHZlcnNpb24pO1xufVxuXG5leHBvcnRzLm1heFNhdGlzZnlpbmcgPSBtYXhTYXRpc2Z5aW5nO1xuZnVuY3Rpb24gbWF4U2F0aXNmeWluZyh2ZXJzaW9ucywgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiB2ZXJzaW9ucy5maWx0ZXIoZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKTtcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIHJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSlbMF0gfHwgbnVsbDtcbn1cblxuZXhwb3J0cy5taW5TYXRpc2Z5aW5nID0gbWluU2F0aXNmeWluZztcbmZ1bmN0aW9uIG1pblNhdGlzZnlpbmcodmVyc2lvbnMsIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gdmVyc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSlbMF0gfHwgbnVsbDtcbn1cblxuZXhwb3J0cy52YWxpZFJhbmdlID0gdmFsaWRSYW5nZTtcbmZ1bmN0aW9uIHZhbGlkUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIHRyeSB7XG4gICAgLy8gUmV0dXJuICcqJyBpbnN0ZWFkIG9mICcnIHNvIHRoYXQgdHJ1dGhpbmVzcyB3b3Jrcy5cbiAgICAvLyBUaGlzIHdpbGwgdGhyb3cgaWYgaXQncyBpbnZhbGlkIGFueXdheVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKS5yYW5nZSB8fCAnKic7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgbGVzcyB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlXG5leHBvcnRzLmx0ciA9IGx0cjtcbmZ1bmN0aW9uIGx0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc8JywgbG9vc2UpO1xufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2UuXG5leHBvcnRzLmd0ciA9IGd0cjtcbmZ1bmN0aW9uIGd0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc+JywgbG9vc2UpO1xufVxuXG5leHBvcnRzLm91dHNpZGUgPSBvdXRzaWRlO1xuZnVuY3Rpb24gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgaGlsbywgbG9vc2UpIHtcbiAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuXG4gIHZhciBndGZuLCBsdGVmbiwgbHRmbiwgY29tcCwgZWNvbXA7XG4gIHN3aXRjaCAoaGlsbykge1xuICAgIGNhc2UgJz4nOlxuICAgICAgZ3RmbiA9IGd0O1xuICAgICAgbHRlZm4gPSBsdGU7XG4gICAgICBsdGZuID0gbHQ7XG4gICAgICBjb21wID0gJz4nO1xuICAgICAgZWNvbXAgPSAnPj0nO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnPCc6XG4gICAgICBndGZuID0gbHQ7XG4gICAgICBsdGVmbiA9IGd0ZTtcbiAgICAgIGx0Zm4gPSBndDtcbiAgICAgIGNvbXAgPSAnPCc7XG4gICAgICBlY29tcCA9ICc8PSc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBwcm92aWRlIGEgaGlsbyB2YWwgb2YgXCI8XCIgb3IgXCI+XCInKTtcbiAgfVxuXG4gIC8vIElmIGl0IHNhdGlzaWZlcyB0aGUgcmFuZ2UgaXQgaXMgbm90IG91dHNpZGVcbiAgaWYgKHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRnJvbSBub3cgb24sIHZhcmlhYmxlIHRlcm1zIGFyZSBhcyBpZiB3ZSdyZSBpbiBcImd0clwiIG1vZGUuXG4gIC8vIGJ1dCBub3RlIHRoYXQgZXZlcnl0aGluZyBpcyBmbGlwcGVkIGZvciB0aGUgXCJsdHJcIiBmdW5jdGlvbi5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJhbmdlLnNldC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBjb21wYXJhdG9ycyA9IHJhbmdlLnNldFtpXTtcblxuICAgIHZhciBoaWdoID0gbnVsbDtcbiAgICB2YXIgbG93ID0gbnVsbDtcblxuICAgIGNvbXBhcmF0b3JzLmZvckVhY2goZnVuY3Rpb24oY29tcGFyYXRvcikge1xuICAgICAgaWYgKGNvbXBhcmF0b3Iuc2VtdmVyID09PSBBTlkpIHtcbiAgICAgICAgY29tcGFyYXRvciA9IG5ldyBDb21wYXJhdG9yKCc+PTAuMC4wJylcbiAgICAgIH1cbiAgICAgIGhpZ2ggPSBoaWdoIHx8IGNvbXBhcmF0b3I7XG4gICAgICBsb3cgPSBsb3cgfHwgY29tcGFyYXRvcjtcbiAgICAgIGlmIChndGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBoaWdoLnNlbXZlciwgbG9vc2UpKSB7XG4gICAgICAgIGhpZ2ggPSBjb21wYXJhdG9yO1xuICAgICAgfSBlbHNlIGlmIChsdGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBsb3cuc2VtdmVyLCBsb29zZSkpIHtcbiAgICAgICAgbG93ID0gY29tcGFyYXRvcjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIElmIHRoZSBlZGdlIHZlcnNpb24gY29tcGFyYXRvciBoYXMgYSBvcGVyYXRvciB0aGVuIG91ciB2ZXJzaW9uXG4gICAgLy8gaXNuJ3Qgb3V0c2lkZSBpdFxuICAgIGlmIChoaWdoLm9wZXJhdG9yID09PSBjb21wIHx8IGhpZ2gub3BlcmF0b3IgPT09IGVjb21wKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGxvd2VzdCB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGFuIG9wZXJhdG9yIGFuZCBvdXIgdmVyc2lvblxuICAgIC8vIGlzIGxlc3MgdGhhbiBpdCB0aGVuIGl0IGlzbid0IGhpZ2hlciB0aGFuIHRoZSByYW5nZVxuICAgIGlmICgoIWxvdy5vcGVyYXRvciB8fCBsb3cub3BlcmF0b3IgPT09IGNvbXApICYmXG4gICAgICAgIGx0ZWZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChsb3cub3BlcmF0b3IgPT09IGVjb21wICYmIGx0Zm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMucHJlcmVsZWFzZSA9IHByZXJlbGVhc2U7XG5mdW5jdGlvbiBwcmVyZWxlYXNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciBwYXJzZWQgPSBwYXJzZSh2ZXJzaW9uLCBsb29zZSk7XG4gIHJldHVybiAocGFyc2VkICYmIHBhcnNlZC5wcmVyZWxlYXNlLmxlbmd0aCkgPyBwYXJzZWQucHJlcmVsZWFzZSA6IG51bGw7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vLyBQcm9kdWN0aW9uIHN0ZXBzIG9mIEVDTUEtMjYyLCBFZGl0aW9uIDYsIDIyLjEuMi4xXG4vLyBSZWZlcmVuY2U6IGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1hcnJheS5mcm9tXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKCFBcnJheS5mcm9tKSB7XG4gIEFycmF5LmZyb20gPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgICB2YXIgaXNDYWxsYWJsZSA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nIHx8IHRvU3RyLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICAgIH07XG4gICAgdmFyIHRvSW50ZWdlciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgbnVtYmVyID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgaWYgKG51bWJlciA9PT0gMCB8fCAhaXNGaW5pdGUobnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChudW1iZXIgPiAwID8gMSA6IC0xKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSk7XG4gICAgfTtcbiAgICB2YXIgbWF4U2FmZUludGVnZXIgPSBNYXRoLnBvdygyLCA1MykgLSAxO1xuICAgIHZhciB0b0xlbmd0aCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgbGVuID0gdG9JbnRlZ2VyKHZhbHVlKTtcbiAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChsZW4sIDApLCBtYXhTYWZlSW50ZWdlcik7XG4gICAgfTtcblxuICAgIC8vIFRoZSBsZW5ndGggcHJvcGVydHkgb2YgdGhlIGZyb20gbWV0aG9kIGlzIDEuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcEZuLCB0aGlzQXJnICovKSB7XG4gICAgICAvLyAxLiBMZXQgQyBiZSB0aGUgdGhpcyB2YWx1ZS5cbiAgICAgIHZhciBDID0gdGhpcztcblxuICAgICAgLy8gMi4gTGV0IGl0ZW1zIGJlIFRvT2JqZWN0KGFycmF5TGlrZSkuXG4gICAgICB2YXIgaXRlbXMgPSBPYmplY3QoYXJyYXlMaWtlKTtcblxuICAgICAgLy8gMy4gUmV0dXJuSWZBYnJ1cHQoaXRlbXMpLlxuICAgICAgaWYgKGFycmF5TGlrZSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LmZyb20gcmVxdWlyZXMgYW4gYXJyYXktbGlrZSBvYmplY3QgLSBub3QgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gNC4gSWYgbWFwZm4gaXMgdW5kZWZpbmVkLCB0aGVuIGxldCBtYXBwaW5nIGJlIGZhbHNlLlxuICAgICAgdmFyIG1hcEZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB2b2lkIHVuZGVmaW5lZDtcbiAgICAgIHZhciBUO1xuICAgICAgaWYgKHR5cGVvZiBtYXBGbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gNS4gZWxzZVxuICAgICAgICAvLyA1LiBhIElmIElzQ2FsbGFibGUobWFwZm4pIGlzIGZhbHNlLCB0aHJvdyBhIFR5cGVFcnJvciBleGNlcHRpb24uXG4gICAgICAgIGlmICghaXNDYWxsYWJsZShtYXBGbikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5mcm9tOiB3aGVuIHByb3ZpZGVkLCB0aGUgc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gNS4gYi4gSWYgdGhpc0FyZyB3YXMgc3VwcGxpZWQsIGxldCBUIGJlIHRoaXNBcmc7IGVsc2UgbGV0IFQgYmUgdW5kZWZpbmVkLlxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICBUID0gYXJndW1lbnRzWzJdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIDEwLiBMZXQgbGVuVmFsdWUgYmUgR2V0KGl0ZW1zLCBcImxlbmd0aFwiKS5cbiAgICAgIC8vIDExLiBMZXQgbGVuIGJlIFRvTGVuZ3RoKGxlblZhbHVlKS5cbiAgICAgIHZhciBsZW4gPSB0b0xlbmd0aChpdGVtcy5sZW5ndGgpO1xuXG4gICAgICAvLyAxMy4gSWYgSXNDb25zdHJ1Y3RvcihDKSBpcyB0cnVlLCB0aGVuXG4gICAgICAvLyAxMy4gYS4gTGV0IEEgYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0NvbnN0cnVjdF1dIGludGVybmFsIG1ldGhvZCBvZiBDIHdpdGggYW4gYXJndW1lbnQgbGlzdCBjb250YWluaW5nIHRoZSBzaW5nbGUgaXRlbSBsZW4uXG4gICAgICAvLyAxNC4gYS4gRWxzZSwgTGV0IEEgYmUgQXJyYXlDcmVhdGUobGVuKS5cbiAgICAgIHZhciBBID0gaXNDYWxsYWJsZShDKSA/IE9iamVjdChuZXcgQyhsZW4pKSA6IG5ldyBBcnJheShsZW4pO1xuXG4gICAgICAvLyAxNi4gTGV0IGsgYmUgMC5cbiAgICAgIHZhciBrID0gMDtcbiAgICAgIC8vIDE3LiBSZXBlYXQsIHdoaWxlIGsgPCBsZW7igKYgKGFsc28gc3RlcHMgYSAtIGgpXG4gICAgICB2YXIga1ZhbHVlO1xuICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAga1ZhbHVlID0gaXRlbXNba107XG4gICAgICAgIGlmIChtYXBGbikge1xuICAgICAgICAgIEFba10gPSB0eXBlb2YgVCA9PT0gJ3VuZGVmaW5lZCcgPyBtYXBGbihrVmFsdWUsIGspIDogbWFwRm4uY2FsbChULCBrVmFsdWUsIGspO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEFba10gPSBrVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgayArPSAxO1xuICAgICAgfVxuICAgICAgLy8gMTguIExldCBwdXRTdGF0dXMgYmUgUHV0KEEsIFwibGVuZ3RoXCIsIGxlbiwgdHJ1ZSkuXG4gICAgICBBLmxlbmd0aCA9IGxlbjtcbiAgICAgIC8vIDIwLiBSZXR1cm4gQS5cbiAgICAgIHJldHVybiBBO1xuICAgIH07XG4gIH0oKSk7XG59XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTsiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07IiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBTUkMgICAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJylcbiAgLCBUT19TVFJJTkcgPSAndG9TdHJpbmcnXG4gICwgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXVxuICAsIFRQTCAgICAgICA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBrZXksIHZhbCwgc2FmZSl7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYoT1trZXldID09PSB2YWwpcmV0dXJuO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZihPID09PSBnbG9iYWwpe1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBpZighc2FmZSl7XG4gICAgICBkZWxldGUgT1trZXldO1xuICAgICAgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKE9ba2V5XSlPW2tleV0gPSB2YWw7XG4gICAgICBlbHNlIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH1cbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZSAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSlcbiAgICAsIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZih0YXJnZXQpcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYoZXhwb3J0c1trZXldICE9IG91dCloaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZihJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dClleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTsiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59OyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59OyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTsiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTsiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzOyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlOyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pOyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1dlYlJlZmxlY3Rpb24vNTU5MzU1NFxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICghT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZiA9IChmdW5jdGlvbihPYmplY3QsIG1hZ2ljKSB7XG4gICAgdmFyIHNldDtcbiAgICBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgc2V0LmNhbGwoTywgcHJvdG8pO1xuICAgICAgcmV0dXJuIE87XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyB0aGlzIHdvcmtzIGFscmVhZHkgaW4gRmlyZWZveCBhbmQgU2FmYXJpXG4gICAgICBzZXQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5wcm90b3R5cGUsIG1hZ2ljKS5zZXQ7XG4gICAgICBzZXQuY2FsbCh7fSwgbnVsbCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKFxuICAgICAgICAvLyBJRSA8IDExIGNhbm5vdCBiZSBzaGltbWVkXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUgIT09IHt9W21hZ2ljXSB8fFxuICAgICAgICAvLyBuZWl0aGVyIGNhbiBhbnkgYnJvd3NlciB0aGF0IGFjdHVhbGx5XG4gICAgICAgIC8vIGltcGxlbWVudGVkIF9fcHJvdG9fXyBjb3JyZWN0bHlcbiAgICAgICAgLy8gKGFsbCBidXQgb2xkIFY4IHdpbGwgcmV0dXJuIGhlcmUpXG4gICAgICAgIHtfX3Byb3RvX186IG51bGx9Ll9fcHJvdG9fXyA9PT0gdm9pZCAwXG4gICAgICAgIC8vIHRoaXMgY2FzZSBtZWFucyBudWxsIG9iamVjdHMgY2Fubm90IGJlIHBhc3NlZFxuICAgICAgICAvLyB0aHJvdWdoIHNldFByb3RvdHlwZU9mIGluIGEgcmVsaWFibGUgd2F5XG4gICAgICAgIC8vIHdoaWNoIG1lYW5zIGhlcmUgYSAqKlNoYW0qKiBpcyBuZWVkZWQgaW5zdGVhZFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIG5vZGVqcyAwLjggYW5kIDAuMTAgYXJlIChidWdneSBhbmQuLikgZmluZSBoZXJlXG4gICAgICAvLyBwcm9iYWJseSBDaHJvbWUgb3Igc29tZSBvbGQgTW9iaWxlIHN0b2NrIGJyb3dzZXJcbiAgICAgIHNldCA9IGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgICAgIHRoaXNbbWFnaWNdID0gcHJvdG87XG4gICAgICB9O1xuICAgICAgLy8gcGxlYXNlIG5vdGUgdGhhdCB0aGlzIHdpbGwgKipub3QqKiB3b3JrXG4gICAgICAvLyBpbiB0aG9zZSBicm93c2VycyB0aGF0IGRvIG5vdCBpbmhlcml0XG4gICAgICAvLyBfX3Byb3RvX18gYnkgbWlzdGFrZSBmcm9tIE9iamVjdC5wcm90b3R5cGVcbiAgICAgIC8vIGluIHRoZXNlIGNhc2VzIHdlIHNob3VsZCBwcm9iYWJseSB0aHJvdyBhbiBlcnJvclxuICAgICAgLy8gb3IgYXQgbGVhc3QgYmUgaW5mb3JtZWQgYWJvdXQgdGhlIGlzc3VlXG4gICAgICBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9IHNldFByb3RvdHlwZU9mKFxuICAgICAgICBzZXRQcm90b3R5cGVPZih7fSwgbnVsbCksXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGVcbiAgICAgICkgaW5zdGFuY2VvZiBPYmplY3Q7XG4gICAgICAvLyBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9PT0gdHJ1ZSBtZWFucyBpdCB3b3JrcyBhcyBtZWFudFxuICAgICAgLy8gc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPT09IGZhbHNlIG1lYW5zIGl0J3Mgbm90IDEwMCUgcmVsaWFibGVcbiAgICAgIC8vIHNldFByb3RvdHlwZU9mLnBvbHlmaWxsID09PSB1bmRlZmluZWRcbiAgICAgIC8vIG9yXG4gICAgICAvLyBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9PSAgbnVsbCBtZWFucyBpdCdzIG5vdCBhIHBvbHlmaWxsXG4gICAgICAvLyB3aGljaCBtZWFucyBpdCB3b3JrcyBhcyBleHBlY3RlZFxuICAgICAgLy8gd2UgY2FuIGV2ZW4gZGVsZXRlIE9iamVjdC5wcm90b3R5cGUuX19wcm90b19fO1xuICAgIH1cbiAgICByZXR1cm4gc2V0UHJvdG90eXBlT2Y7XG4gIH0oT2JqZWN0LCAnX19wcm90b19fJykpO1xufVxuIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgdGVzdCAgICA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZih0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKXtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7IiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJylcbiAgLCBBcnJheVByb3RvICA9IEFycmF5LnByb3RvdHlwZTtcbmlmKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZClyZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCJ2YXIgJGl0ZXJhdG9ycyAgICA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJylcbiAgLCByZWRlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB3a3MgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCBJVEVSQVRPUiAgICAgID0gd2tzKCdpdGVyYXRvcicpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKVxuICAsIEFycmF5VmFsdWVzICAgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZVxuICAgICwga2V5O1xuICBpZihwcm90byl7XG4gICAgaWYoIXByb3RvW0lURVJBVE9SXSloaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmKCFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBmb3Ioa2V5IGluICRpdGVyYXRvcnMpaWYoIXByb3RvW2tleV0pcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07IiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07IiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTsiLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjsiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59OyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTsiLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2h0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07IiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBzYWZlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59OyIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7IiwiaW1wb3J0ICcuL3N0eWxlcy9yZXNldC5jc3MnXG5pbXBvcnQgJy4vc3R5bGVzL2NvbXBvbmVudHMuY3NzJ1xuXG5pbXBvcnQgJy4uLy4uL3NoYXJlZC9hcnJheUZyb20nXG5pbXBvcnQgJy4uLy4uL3NoYXJlZC9vYmplY3RBc3NpZ24nXG5pbXBvcnQgJy4uLy4uL3NoYXJlZC9vYmplY3RTZXRQcm90b3R5cGVPZidcblxuaW1wb3J0ICdjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnXG5pbXBvcnQgJ2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJ1xuaW1wb3J0ICdjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZSdcbmltcG9ydCAnY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlJ1xuXG4vLyBUT0RPOiBwYXJzZSBVQVxuY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50XG5cbndpbmRvdy5XWEVudmlyb25tZW50ID0ge1xuICBwbGF0Zm9ybTogJ1dlYicsXG4gIHVzZXJBZ2VudDogdWEsXG4gIGFwcE5hbWU6IG5hdmlnYXRvci5hcHBOYW1lLFxuICBhcHBWZXJzaW9uOiBuYXZpZ2F0b3IuYXBwVmVyc2lvbiwgLy8gbWF5YmUgdG9vIGxvbmdcbiAgd2VleFZlcnNpb246ICcnLFxuICBvc05hbWU6ICcnLFxuICBvc1ZlcnNpb246ICcnLFxuICBkZXZpY2VXaWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gIGRldmljZUhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG59XG4iLCJcbi8qKlxuICogVmFsaWRhdGUgdGhlIENTUyBjb2xvciB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQ1NTQ29sb3IgKHZhbHVlKSB7XG4gIHJldHVybiAvXlthLXpdKyQvaS50ZXN0KHZhbHVlKSAvLyBtYXRjaCBjb2xvciBuYW1lXG4gICAgfHwgL14jKFthLWYwLTldezN9KXsxLDJ9JC9pLnRlc3QodmFsdWUpIC8vIG1hdGNoICNBQkNERUZcbiAgICB8fCAvXnJnYlxccypcXCgoXFxzKlswLTkuXStcXHMqLCl7Mn1cXHMqWzAtOS5dK1xccypcXCkvaS50ZXN0KHZhbHVlKSAvLyBtYXRjaCByZ2IoMCwwLDApXG4gICAgfHwgL15yZ2JhXFxzKlxcKChcXHMqWzAtOS5dK1xccyosKXszfVxccypbMC05Ll0rXFxzKlxcKS9pLnRlc3QodmFsdWUpIC8vIG1hdGNoIHJnYmEoMCwwLDAsMClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ1NTTGVuZ3RoICh2YWx1ZSkge1xuICByZXR1cm4gL15bKy1dP1swLTldKy4/KFswLTldKyk/KHB4fCUpPyQvLnRlc3QoU3RyaW5nKHZhbHVlKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gWydhYnNvbHV0ZScsICdyZWxhdGl2ZScsICdmaXhlZCcsICdzdGlja3knXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wYWNpdHkgKHZhbHVlKSB7XG4gIGNvbnN0IGNvdW50ID0gcGFyc2VGbG9hdCh2YWx1ZSlcbiAgcmV0dXJuIGNvdW50ID49IDAgJiYgY291bnQgPD0gMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheSAodmFsdWUpIHtcbiAgcmV0dXJuIFsnYmxvY2snLCAnZmxleCddLmluZGV4T2YodmFsdWUpICE9PSAtMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxleERpcmVjdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIFsncm93JywgJ2NvbHVtbiddLmluZGV4T2YodmFsdWUpICE9PSAtMVxufVxuXG5leHBvcnQgZnVuY3Rpb24ganVzdGlmeUNvbnRlbnQgKHZhbHVlKSB7XG4gIHJldHVybiBbJ2ZsZXgtc3RhcnQnLCAnZmxleC1lbmQnLCAnY2VudGVyJywgJ3NwYWNlLWJldHdlZW4nXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsaWduSXRlbXMgKHZhbHVlKSB7XG4gIHJldHVybiBbJ3N0cmV0Y2gnLCAnZmxleC1zdGFydCcsICdmbGV4LWVuZCcsICdjZW50ZXInXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsZXggKHZhbHVlKSB7XG4gIHJldHVybiAvXlxcZHsxLDN9JC8udGVzdChTdHJpbmcodmFsdWUpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9udFN0eWxlICh2YWx1ZSkge1xuICByZXR1cm4gWydub3JtYWwnLCAnaXRhbGljJywgJ29ibGlxdWUnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvbnRXZWlnaHQgKHZhbHVlKSB7XG4gIHJldHVybiBbJ25vcm1hbCcsICdib2xkJywgJ2xpZ2h0JywgJ2JvbGRlcicsICdsaWdodGVyJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0RGVjb3JhdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIFsnbm9uZScsICd1bmRlcmxpbmUnLCAnbGluZS10aHJvdWdoJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0QWxpZ24gKHZhbHVlKSB7XG4gIHJldHVybiBbJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVyZmxvdyAodmFsdWUpIHtcbiAgcmV0dXJuIFsndmlzaWJsZScsICdoaWRkZW4nXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRleHRPdmVyZmxvdyAodmFsdWUpIHtcbiAgcmV0dXJuIFsnY2xpcCcsICdlbGxpcHNpcyddLmluZGV4T2YodmFsdWUpICE9PSAtMVxufVxuXG4vKipcbiAqIENvbW1vbiBzdHlsZSB2YWxpZGF0b3IuXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1vbiAodmFsdWUsIGtleSkge1xuICBpZiAoL15bXFx3LV0qY29sb3IkLy50ZXN0KFN0cmluZyhrZXkpKSkge1xuICAgIHJldHVybiBpc0NTU0NvbG9yKHZhbHVlKVxuICB9XG5cbiAgaWYgKC9eKHdpZHRofGhlaWdodCkkLy50ZXN0KFN0cmluZyhrZXkpKSkge1xuICAgIHJldHVybiBpc0NTU0xlbmd0aCh2YWx1ZSlcbiAgfVxuXG4gIC8vIGNoZWNrb3V0IGJvcmRlci1yYWRpdXNcbiAgaWYgKC9eYm9yZGVyLSgodG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KS0pezAsMn0od2lkdGh8cmFkaXVzKSQvLnRlc3QoU3RyaW5nKGtleSkpKSB7XG4gICAgcmV0dXJuIGlzQ1NTTGVuZ3RoKHZhbHVlKVxuICB9XG5cbiAgLy8gY2hlY2sgYm9yZGVyLXN0eWxlXG4gIGlmICgvYm9yZGVyLSgodG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KS0pP3N0eWxlLy50ZXN0KFN0cmluZyhrZXkpKSkge1xuICAgIHJldHVybiBbJ3NvbGlkJywgJ2Rhc2hlZCcsICdkb3R0ZWQnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbiAgfVxuXG4gIGlmICgvXigobWFyZ2lufHBhZGRpbmcpLSk/KHRvcHxyaWdodHxib3R0b218bGVmdCkvLnRlc3QoU3RyaW5nKGtleSkpKSB7XG4gICAgcmV0dXJuIGlzQ1NTTGVuZ3RoKHZhbHVlKVxuICB9XG5cbiAgc3dpdGNoIChTdHJpbmcoa2V5KSkge1xuICAgIGNhc2UgJ2ZvbnQtc2l6ZSc6IHJldHVybiBpc0NTU0xlbmd0aCh2YWx1ZSlcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG4iLCJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyAodmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFN0cmluZ10nXG59XG4iLCIvKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XG4gICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXVxuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxuICB9XG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsbWl0ZWQgc3RyaW5nLlxuICovXG5jb25zdCBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nXG5leHBvcnQgY29uc3QgY2FtZWxpemUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIChfLCBjKSA9PiBjLnRvVXBwZXJDYXNlKCkpXG59KVxuXG4vKipcbiAqIENhcGl0YWxpemUgYSBzdHJpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbn0pXG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xuY29uc3QgaHlwaGVuYXRlUkUgPSAvKFteLV0pKFtBLVpdKS9nXG5leHBvcnQgY29uc3QgaHlwaGVuYXRlID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHJcbiAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAudG9Mb3dlckNhc2UoKVxufSlcblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQgKHRvLCBfZnJvbSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiBfZnJvbSkge1xuICAgIHRvW2tleV0gPSBfZnJvbVtrZXldXG4gIH1cbiAgcmV0dXJuIHRvXG59XG5cbi8qKlxuICogU2ltcGxlIGJpbmQsIGZhc3RlciB0aGFuIG5hdGl2ZVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge09iamVjdH0gY3R4XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmQgKGZuLCBjdHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgY29uc3QgbCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICByZXR1cm4gbFxuICAgICAgPyBsID4gMVxuICAgICAgICA/IGZuLmFwcGx5KGN0eCwgYXJndW1lbnRzKVxuICAgICAgICA6IGZuLmNhbGwoY3R4LCBhKVxuICAgICAgOiBmbi5jYWxsKGN0eClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UgKGZ1bmMsIHdhaXQpIHtcbiAgbGV0IHRpbWVySWRcbiAgZnVuY3Rpb24gbGF0ZXIgKCkge1xuICAgIHRpbWVySWQgPSBudWxsXG4gICAgZnVuYy5hcHBseShudWxsKVxuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlIChmdW5jLCB3YWl0KSB7XG4gIGxldCBsYXN0ID0gMFxuICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgIGlmICh0aW1lIC0gbGFzdCA+IHdhaXQpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICAgIGxhc3QgPSB0aW1lXG4gICAgfVxuICB9XG59XG4iLCJjb25zdCBzdXBwb3J0ZWRQcm9wZXJ0aWVzID0ge1xuICAnQGNvbW1vbic6IFtcbiAgICAnaWQnLCAncmVmJywgJ3N0eWxlJywgJ2NsYXNzJywgJ2FwcGVuZCdcbiAgXVxufVxuXG5jb25zdCBzdXBwb3J0ZWRTdHlsZXMgPSB7XG4gICdAYm94LW1vZGVsJzogW1xuICAgICd3aWR0aCcsICdoZWlnaHQnLCAncG9zaXRpb24nLFxuICAgICdwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdwYWRkaW5nLWxlZnQnLCAncGFkZGluZy1yaWdodCcsXG4gICAgJ21hcmdpbi10b3AnLCAnbWFyZ2luLWJvdHRvbScsICdtYXJnaW4tbGVmdCcsICdtYXJnaW4tcmlnaHQnXG4gIF0sXG4gICdAYm9yZGVyJzogW1xuICAgICdib3JkZXItc3R5bGUnLCAnYm9yZGVyLXdpZHRoJywgJ2JvcmRlci1jb2xvcicsICdib3JkZXItcmFkaXVzJyxcbiAgICAnYm9yZGVyLXRvcC1zdHlsZScsICdib3JkZXItcmlnaHQtc3R5bGUnLCAnYm9yZGVyLWJvdHRvbS1zdHlsZScsICdib3JkZXItbGVmdC1zdHlsZScsXG4gICAgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLFxuICAgICdib3JkZXItdG9wLWNvbG9yJywgJ2JvcmRlci1yaWdodC1jb2xvcicsICdib3JkZXItYm90dG9tLWNvbG9yJywgJ2JvcmRlci1sZWZ0LWNvbG9yJyxcbiAgICAnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cycsICdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cycsICdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJywgJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJ1xuICBdLFxuICAnQGZsZXhib3gnOiBbXG4gICAgJ2Rpc3BsYXknLCAnZmxleCcsICdmbGV4LWRpcmVjdGlvbicsICdqdXN0aWZ5LWNvbnRlbnQnLCAnYWxpZ24taXRlbXMnLCAnZmxleC13cmFwJ1xuICBdLFxuICAnQGZvbnQnOiBbXG4gICAgJ2ZvbnQtc2l6ZScsICdmb250LXdlaWdodCcsICdmb250LXN0eWxlJywgJ2ZvbnQtZmFtaWx5J1xuICBdLFxuICAnQGNvbG9ycyc6IFtcbiAgICAnY29sb3InLCAnYmFja2dyb3VuZC1jb2xvcicsICdvcGFjaXR5J1xuICBdLFxuICB0ZXh0OiBbXG4gICAgJ0Bib3gtbW9kZWwnLCAnQGJvcmRlcicsICdAZmxleGJveCcsICdAZm9udCcsICdAY29sb3JzJyxcbiAgICAndGV4dC1hbGlnbicsICd0ZXh0LWRlY29yYXRpb24nLCAndGV4dC1vdmVyZmxvdydcbiAgXVxufVxuXG4vKipcbiAqIEZsYXR0ZW4gYSBtdWx0aXBsZSBkaW1lbnNpb24gYXJyYXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuIChhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKChkaXN0LCBpdGVtKSA9PiB7XG4gICAgcmV0dXJuIGRpc3QuY29uY2F0KEFycmF5LmlzQXJyYXkoaXRlbSkgPyBmbGF0dGVuKGl0ZW0pIDogaXRlbSlcbiAgfSwgW10pXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIHZhbHVlIGlzIGluIHRoZSBsaXN0LlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtPYmplY3R9IGRpY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU3VwcG9ydGVkICh0eXBlLCB2YWx1ZSwgZGljdCA9IHt9KSB7XG4gIGlmICh0eXBlICYmIHZhbHVlICYmIGRpY3RbdHlwZV0pIHtcbiAgICByZXR1cm4gZmxhdHRlbihkaWN0W3R5cGVdLm1hcChrID0+IGRpY3Rba10gfHwgaykpLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIHN0eWxlIGlzIHN1cHBvcnRlZCBmb3IgdGhlIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gc3R5bGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3VwcG9ydGVkU3R5bGUgKHR5cGUsIHN0eWxlKSB7XG4gIHJldHVybiBjaGVja1N1cHBvcnRlZCh0eXBlLCBzdHlsZSwgc3VwcG9ydGVkU3R5bGVzKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQgZm9yIHRoZSBjb21wb25lbnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N1cHBvcnRlZFByb3AgKHR5cGUsIHByb3ApIHtcbiAgcmV0dXJuIGNoZWNrU3VwcG9ydGVkKHR5cGUsIHByb3AsIHN1cHBvcnRlZFByb3BlcnRpZXMpXG59XG4iLCJpbXBvcnQgKiBhcyBzdHlsZVZhbGlkYXRvciBmcm9tICcuL3N0eWxlJ1xuaW1wb3J0ICogYXMgcHJvcFZhbGlkYXRvciBmcm9tICcuL3Byb3AnXG5pbXBvcnQgeyBoeXBoZW5hdGUsIGNhbWVsaXplIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc1N1cHBvcnRlZFN0eWxlIH0gZnJvbSAnLi9jaGVjaydcblxubGV0IG9uZmFpbCA9IGZ1bmN0aW9uIG5vcGUgKCkge31cbmxldCBzaG93Q29uc29sZSA9IHRydWVcblxuZnVuY3Rpb24gd2FybiAoLi4uYXJncykge1xuICBjb25zdCBtZXNzYWdlID0gYXJncy5qb2luKCcgJylcbiAgc2hvd0NvbnNvbGUgJiYgY29uc29sZS5sb2cobWVzc2FnZSlcbiAgb25mYWlsKG1lc3NhZ2UpXG4gIHJldHVybiBtZXNzYWdlXG59XG5cbi8qKlxuICogQ29uZmlndXJlIHRoZSB2YWxpZGF0b3IuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlIChjb25maWdzID0ge30pIHtcbiAgc2hvd0NvbnNvbGUgPSAhY29uZmlncy5zaWxlbnRcbiAgaWYgKHR5cGVvZiBjb25maWdzLm9uZmFpbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9uZmFpbCA9IGNvbmZpZ3Mub25mYWlsXG4gIH1cbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSB0aGUgc3R5bGVzIG9mIHRoZSBjb21wb25lbnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHN0eWxlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTdHlsZXMgKHR5cGUsIHN0eWxlcyA9IHt9KSB7XG4gIGxldCBpc1ZhbGlkID0gdHJ1ZVxuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICBpZiAoIWlzU3VwcG9ydGVkU3R5bGUodHlwZSwgaHlwaGVuYXRlKGtleSkpKSB7XG4gICAgICBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIHdhcm4oYFtTdHlsZSBWYWxpZGF0b3JdIDwke3R5cGV9PiBpcyBub3Qgc3VwcG9ydCB0byB1c2UgdGhlIFwiJHtrZXl9XCIgc3R5bGUuYClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCB2YWxpZGF0b3IgPSBzdHlsZVZhbGlkYXRvcltjYW1lbGl6ZShrZXkpXSB8fCBzdHlsZVZhbGlkYXRvci5jb21tb25cbiAgICAgIGlmICghdmFsaWRhdG9yKHN0eWxlc1trZXldLCBoeXBoZW5hdGUoa2V5KSkpIHtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgIHdhcm4oYFtTdHlsZSBWYWxpZGF0b3JdIFRoZSBzdHlsZSBcIiR7a2V5fVwiIGlzIG5vdCBzdXBwb3J0IHRoZSBcIiR7c3R5bGVzW2tleV19XCIgdmFsdWUuYClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlzVmFsaWRcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSB0aGUgcHJvcGVydGllcyBvZiB0aGUgY29tcG9uZW50LlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVQcm9wcyAodHlwZSwgcHJvcHMgPSB7fSkge1xuICBsZXQgaXNWYWxpZCA9IHRydWVcbiAgZm9yIChjb25zdCBrZXkgaW4gcHJvcHMpIHtcbiAgICBjb25zdCB2YWxpZGF0b3IgPSBwcm9wVmFsaWRhdG9yW2NhbWVsaXplKGtleSldXG4gICAgaWYgKHZhbGlkYXRvciAmJiAhdmFsaWRhdG9yKHByb3BzW2tleV0pKSB7XG4gICAgICBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIHdhcm4oYFtQcm9wZXJ0eSBWYWxpZGF0b3JdIFRoZSBwcm9wZXJ0eSBcIiR7a2V5fVwiIGlzIG5vdCBzdXBwb3J0IHRoZSBcIiR7cHJvcHNba2V5XX1cIiB2YWx1ZS5gKVxuICAgIH1cbiAgfVxuICByZXR1cm4gaXNWYWxpZFxufVxuIiwiaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi92YWxpZGF0b3InXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBjaGVja2VkOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQ2hlY2tlZDogKHRoaXMuY2hlY2tlZCAhPT0gJ2ZhbHNlJyAmJiB0aGlzLmNoZWNrZWQgIT09IGZhbHNlKSxcbiAgICAgIGlzRGlzYWJsZWQ6ICh0aGlzLmRpc2FibGVkICE9PSAnZmFsc2UnICYmIHRoaXMuZGlzYWJsZWQgIT09IGZhbHNlKVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB3cmFwcGVyQ2xhc3MgKCkge1xuICAgICAgY29uc3QgY2xhc3NBcnJheSA9IFsnd2VleC1zd2l0Y2gnXVxuICAgICAgdGhpcy5pc0NoZWNrZWQgJiYgY2xhc3NBcnJheS5wdXNoKCd3ZWV4LXN3aXRjaC1jaGVja2VkJylcbiAgICAgIHRoaXMuaXNEaXNhYmxlZCAmJiBjbGFzc0FycmF5LnB1c2goJ3dlZXgtc3dpdGNoLWRpc2FibGVkJylcbiAgICAgIHJldHVybiBjbGFzc0FycmF5LmpvaW4oJyAnKVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZSAoKSB7XG4gICAgICAvLyBUT0RPOiBoYW5kbGUgdGhlIGV2ZW50c1xuICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSAhdGhpcy5pc0NoZWNrZWRcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgeyB2YWx1ZTogdGhpcy5pc0NoZWNrZWQgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHZhbGlkYXRlU3R5bGVzKCdzd2l0Y2gnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ3N3aXRjaCcgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyxcbiAgICAgIG9uOiB7IGNsaWNrOiB0aGlzLnRvZ2dsZSB9XG4gICAgfSwgW2NyZWF0ZUVsZW1lbnQoJ3NtYWxsJywgeyBzdGF0aWNDbGFzczogJ3dlZXgtc3dpdGNoLWlubmVyJyB9KV0pXG4gIH1cbn1cbiIsImltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgc3JjOiBTdHJpbmcsXG4gICAgcmVzaXplOiB7XG4gICAgICB2YWxpZGF0b3IgKHZhbHVlKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHJldHVybiBbJ2NvdmVyJywgJ2NvbnRhaW4nLCAnc3RyZXRjaCddLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdmFsaWRhdGVTdHlsZXMoJ2ltYWdlJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKCF0aGlzLnNyYyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgY29uc29sZS53YXJuKGBbVnVlIFJlbmRlcmVyXSBUaGUgPGltYWdlPiBjb21wb25lbnQgbXVzdCBoYXZlIHRoZSBcInNyY1wiIGF0dHJpYnV0ZS5gKVxuICAgIH1cblxuICAgIGxldCBjc3NUZXh0ID0gYGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiJHt0aGlzLnNyY31cIik7YFxuXG4gICAgLy8gY29tcGF0aWJpbGl0eTogaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9YmFja2dyb3VuZC1zaXplXG4gICAgY3NzVGV4dCArPSAodGhpcy5yZXNpemUgJiYgdGhpcy5yZXNpemUgIT09ICdzdHJldGNoJylcbiAgICAgID8gYGJhY2tncm91bmQtc2l6ZTogJHt0aGlzLnJlc2l6ZX07YFxuICAgICAgOiBgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7YFxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2ZpZ3VyZScsIHtcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAnaW1hZ2UnIH0sXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtaW1hZ2UnLFxuICAgICAgc3R5bGU6IGNzc1RleHRcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdsb2FkaW5nLWluZGljYXRvcicsXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdtYXJrJywge1xuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdsb2FkaW5nLWluZGljYXRvcicgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1sb2FkaW5nLWluZGljYXRvcidcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgaW5kaWNhdG9yIGZyb20gJy4vbG9hZGluZy1pbmRpY2F0b3InXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3JlZnJlc2gnLFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiAwXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2hvdyAoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdyZWZyZXNoJywgJ2FiYycpXG4gICAgICAvLyBjb25zb2xlLmxvZygnd2lsbCBlbWl0IHJlZnJlc2gnKVxuICAgICAgdGhpcy5oZWlnaHQgPSAnMTIwcHgnXG4gICAgICB0aGlzLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICB9LFxuICAgIHJlc2V0ICgpIHtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gMFxuICAgICAgdGhpcy52aXNpYmlsaXR5ID0gJ2hpZGRlbidcbiAgICAgIHRoaXMuJGVtaXQoJ3JlZnJlc2hmaW5pc2gnKVxuICAgIH1cbiAgfSxcbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2FzaWRlJywge1xuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdyZWZyZXNoJyB9LFxuICAgICAgc3R5bGU6IHsgaGVpZ2h0OiB0aGlzLmhlaWdodCwgdmlzaWJpbGl0eTogdGhpcy52aXNpYmlsaXR5IH0sXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtcmVmcmVzaCdcbiAgICB9LCBbY3JlYXRlRWxlbWVudChpbmRpY2F0b3IpXSlcbiAgfVxufVxuIiwiaW1wb3J0IGluZGljYXRvciBmcm9tICcuL2xvYWRpbmctaW5kaWNhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdsb2FkaW5nJyxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogMFxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNob3cgKCkge1xuICAgICAgdGhpcy4kZW1pdCgnbG9hZGluZycpXG4gICAgICBjb25zb2xlLmxvZygnd2lsbCBlbWl0IGxvYWRpbmcnKVxuICAgICAgdGhpcy5oZWlnaHQgPSAnMTIwcHgnXG4gICAgICB0aGlzLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMsIHRoaXMuaGVpZ2h0KVxuICAgIH0sXG4gICAgcmVzZXQgKCkge1xuICAgICAgdGhpcy5oZWlnaHQgPSAwXG4gICAgICB0aGlzLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgICAgdGhpcy4kZW1pdCgnbG9hZGluZ2ZpbmlzaCcpXG4gICAgfVxuICB9LFxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYXNpZGUnLCB7XG4gICAgICByZWY6ICdpbmRpY2F0b3InLFxuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdsb2FkaW5nJyB9LFxuICAgICAgc3R5bGU6IHsgaGVpZ2h0OiB0aGlzLmhlaWdodCwgdmlzaWJpbGl0eTogdGhpcy52aXNpYmlsaXR5IH0sXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtbG9hZGluZydcbiAgICB9LCBbY3JlYXRlRWxlbWVudChpbmRpY2F0b3IpXSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBtZXRob2RzOiB7XG4gICAgcmVhY2hUb3AgKCkge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuJHJlZnMud3JhcHBlclxuICAgICAgcmV0dXJuICghIXdyYXBwZXIpICYmICh3cmFwcGVyLnNjcm9sbFRvcCA8PSAwKVxuICAgIH0sXG4gICAgcmVhY2hCb3R0b20gKCkge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuJHJlZnMud3JhcHBlclxuICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLiRyZWZzLmlubmVyXG4gICAgICBjb25zdCBvZmZzZXQgPSBOdW1iZXIodGhpcy5sb2FkbW9yZW9mZnNldCkgfHwgMFxuXG4gICAgICBpZiAod3JhcHBlciAmJiBpbm5lcikge1xuICAgICAgICBjb25zdCBpbm5lckhlaWdodCA9IGlubmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgICAgICBjb25zdCB3cmFwcGVySGVpZ2h0ID0gd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgICAgICAgcmV0dXJuIHdyYXBwZXIuc2Nyb2xsVG9wID49IGlubmVySGVpZ2h0IC0gd3JhcHBlckhlaWdodCAtIG9mZnNldFxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIEV2ZW50LlxuICAgICAqIEBwYXJhbSB7RE9NU3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAgICovXG4gICAgY3JlYXRlRXZlbnQgKHR5cGUsIHByb3BzKSB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCh0eXBlLCB7IGJ1YmJsZXM6IGZhbHNlIH0pXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICBleHRlbmQoZXZlbnQsIHByb3BzKVxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICd0YXJnZXQnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiB0aGlzIHx8IG51bGxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBldmVudFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgQ3VzdG9tIEV2ZW50LlxuICAgICAqIEBwYXJhbSB7RE9NU3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAgICovXG4gICAgY3JlYXRlQ3VzdG9tRXZlbnQgKHR5cGUsIHByb3BzKSB7XG4gICAgICAvLyBjb21wYXRpYmlsaXR5OiBodHRwOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1jdXN0b21ldmVudFxuICAgICAgLy8gY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSlcbiAgICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICAgIGV2ZW50LmluaXRDdXN0b21FdmVudCh0eXBlLCBmYWxzZSwgdHJ1ZSwge30pXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICBleHRlbmQoZXZlbnQsIHByb3BzKVxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICd0YXJnZXQnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiB0aGlzIHx8IG51bGxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBldmVudFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbmQgZW1pdCBsb25ncHJlc3MgZXZlbnQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgaGFuZGxlTG9uZ1ByZXNzIChldmVudCkge1xuICAgICAgLy8gVE9ETzogY2hlY2sgdGhlIGNvbmRpdGlvblxuICAgICAgdGhpcy4kZW1pdCgnbG9uZ3ByZXNzJywgdGhpcy5jcmVhdGVDdXN0b21FdmVudCgnbG9uZ3ByZXNzJykpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGFuZCBlbWl0IGFwcGVhciBldmVudC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBoYW5kbGVBcHBlYXIgKGV2ZW50KSB7XG4gICAgICAvLyBUT0RPOiBjaGVjayB0aGUgY29uZGl0aW9uXG4gICAgICB0aGlzLiRlbWl0KCdhcHBlYXInLCB0aGlzLmNyZWF0ZUN1c3RvbUV2ZW50KCdhcHBlYXInKSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgYW5kIGVtaXQgZGlzYXBwZWFyIGV2ZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIGhhbmREaXNhcHBlYXIgKGV2ZW50KSB7XG4gICAgICAvLyBUT0RPOiBjaGVjayB0aGUgY29uZGl0aW9uXG4gICAgICB0aGlzLiRlbWl0KCdkaXNhcHBlYXInLCB0aGlzLmNyZWF0ZUN1c3RvbUV2ZW50KCdkaXNhcHBlYXInKSlcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbWV0aG9kczoge1xuICAgIG1vdmVUbyAob2Zmc2V0WSA9IDAsIGRvbmUpIHtcbiAgICAgIGNvbnN0IGlubmVyID0gdGhpcy4kcmVmcy5pbm5lclxuICAgICAgaWYgKGlubmVyKSB7XG4gICAgICAgIGlubmVyLnN0eWxlLndpbGxDaGFuZ2UgPSBgdHJhbnNmb3JtYFxuICAgICAgICBpbm5lci5zdHlsZS50cmFuc2l0aW9uID0gYHRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXRgXG4gICAgICAgIGlubmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCAke29mZnNldFl9LCAwKWBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaW5uZXIuc3R5bGUudHJhbnNpdGlvbiA9ICcnXG4gICAgICAgICAgaW5uZXIuc3R5bGUud2lsbENoYW5nZSA9ICcnXG4gICAgICAgICAgZG9uZSAmJiBkb25lKClcbiAgICAgICAgfSwgMjAwKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBkb25lICgpIHtcbiAgICAgIHRoaXMubW92ZVRvKDApXG4gICAgICB0aGlzLl9yZWZyZXNoICYmIHRoaXMuX3JlZnJlc2gucmVzZXQoKVxuICAgICAgdGhpcy5fbG9hZGluZyAmJiB0aGlzLl9sb2FkaW5nLnJlc2V0KClcbiAgICB9LFxuXG4gICAgc2hvd1JlZnJlc2ggKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3Nob3cgcmVmcmVzaCcpXG4gICAgICB0aGlzLm1vdmVUbygnMTIwcHgnKVxuICAgICAgaWYgKHRoaXMuX3JlZnJlc2ggJiYgdGhpcy5fcmVmcmVzaC5jaGlsZCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9yZWZyZXNoKVxuICAgICAgICB0aGlzLl9yZWZyZXNoLmNoaWxkLnNob3coKVxuICAgICAgICAvLyB0aGlzLl9yZWZyZXNoLmNoaWxkLiRlbWl0KCdyZWZyZXNoJywgdGhpcy5jcmVhdGVDdXN0b21FdmVudCgncmVmcmVzaCcpKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzaG93TG9hZGluZyAoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2hvdyBsb2FkaW5nJylcbiAgICAgIHRoaXMubW92ZVRvKCctMTIwcHgnKVxuICAgICAgaWYgKHRoaXMuX2xvYWRpbmcgJiYgdGhpcy5fbG9hZGluZy5jaGlsZCkge1xuICAgICAgICAvLyB0aGlzLl9sb2FkaW5nLmhlaWdodCA9ICcxMjBweCdcbiAgICAgICAgdGhpcy5fbG9hZGluZy5jaGlsZC5zaG93KClcbiAgICAgICAgLy8gdGhpcy4kZW1pdCgnbG9hZGluZycsIHRoaXMuY3JlYXRlQ3VzdG9tRXZlbnQoJ2xvYWRpbmcnKSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlVG91Y2hTdGFydCAoZXZlbnQpIHtcbiAgICAgIC8vIFRPRE86IG9ubHkgdGhlIGxpc3QgaXMgYXQgdG9wICYgYm90dG9tIHdpbGwgdHJpZ2dlciB0aGUgdG91Y2ggZXZlbnRcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAvLyBjb25zb2xlLmxvZygndG91Y2ggc3RhcnQnLCBldmVudClcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyZWFjaFRvcDonLCB0aGlzLnJlYWNoVG9wKCkpXG4gICAgICAvLyBjb25zb2xlLmxvZygncmVhY2hCb3R0b206JywgdGhpcy5yZWFjaEJvdHRvbSgpKVxuICAgICAgY29uc3QgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXVxuICAgICAgLy8gY29uc29sZS5sb2coJ3RvdWNoIHN0YXJ0JywgZXZlbnQudGFyZ2V0LCBldmVudC50YXJnZXQucGFnZVkpXG4gICAgICAvLyBjb25zb2xlLmxvZygndG91Y2hlcycsIHRvdWNoKVxuICAgICAgdGhpcy5fdG91Y2hQYXJhbXMgPSB7XG4gICAgICAgIHJlYWNoVG9wOiB0aGlzLnJlYWNoVG9wKCksXG4gICAgICAgIHJlYWNoQm90dG9tOiB0aGlzLnJlYWNoQm90dG9tKCksXG4gICAgICAgIHN0YXJ0VG91Y2hFdmVudDogdG91Y2gsXG4gICAgICAgIHN0YXJ0WDogdG91Y2gucGFnZVgsXG4gICAgICAgIHN0YXJ0WTogdG91Y2gucGFnZVksXG4gICAgICAgIHRpbWVTdGFtcDogZXZlbnQudGltZVN0YW1wXG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZVRvdWNoTW92ZSAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAvLyBjb25zb2xlLmxvZygndG91Y2ggbW92ZScpXG4gICAgICBpZiAodGhpcy5fdG91Y2hQYXJhbXMpIHtcbiAgICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLiRyZWZzLmlubmVyXG4gICAgICAgIGNvbnN0IHsgc3RhcnRZLCByZWFjaFRvcCwgcmVhY2hCb3R0b20gfSA9IHRoaXMuX3RvdWNoUGFyYW1zXG4gICAgICAgIGlmIChpbm5lciAmJiAocmVhY2hUb3AgfHwgcmVhY2hCb3R0b20pKSB7XG4gICAgICAgICAgY29uc3QgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXVxuICAgICAgICAgIGNvbnN0IG9mZnNldFkgPSB0b3VjaC5wYWdlWSAtIHN0YXJ0WVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvZmZzZXRZJywgb2Zmc2V0WSwgJ3N0YXJ0WScsIHN0YXJ0WSwgJ3BhZ2VZJywgdG91Y2gucGFnZVkpXG4gICAgICAgICAgdGhpcy5fdG91Y2hQYXJhbXMub2Zmc2V0WSA9IG9mZnNldFlcbiAgICAgICAgICBpZiAob2Zmc2V0WSkge1xuICAgICAgICAgICAgaW5uZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsICR7b2Zmc2V0WX1weCwgMClgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZVRvdWNoRW5kIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0b3VjaCBlbmQnKVxuICAgICAgaWYgKHRoaXMuX3RvdWNoUGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IGlubmVyID0gdGhpcy4kcmVmcy5pbm5lclxuICAgICAgICBjb25zdCB7IG9mZnNldFksIHJlYWNoVG9wLCByZWFjaEJvdHRvbSB9ID0gdGhpcy5fdG91Y2hQYXJhbXNcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29mZnNldFk6Jywgb2Zmc2V0WSlcbiAgICAgICAgaWYgKGlubmVyICYmIChyZWFjaFRvcCB8fCByZWFjaEJvdHRvbSkpIHtcbiAgICAgICAgICAvLyB0aGlzLm1vdmVUbygwKVxuICAgICAgICAgIGlmIChvZmZzZXRZID4gMTIwKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dSZWZyZXNoKClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAob2Zmc2V0WSA8IC0xMjApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVRvKDApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkZWxldGUgdGhpcy5fdG91Y2hQYXJhbXNcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yJ1xuaW1wb3J0IHsgZGVib3VuY2UsIHRocm90dGxlLCBiaW5kIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgcmVmcmVzaCBmcm9tICcuL3JlZnJlc2gnXG5pbXBvcnQgbG9hZGluZyBmcm9tICcuL2xvYWRpbmcnXG5pbXBvcnQgcmVjdE1peGluIGZyb20gJy4uLy4uL21peGlucy9yZWN0J1xuaW1wb3J0IGV2ZW50TWl4aW4gZnJvbSAnLi4vLi4vbWl4aW5zL2V2ZW50J1xuaW1wb3J0IGxpc3RNaXhpbiBmcm9tICcuL2xpc3RNaXhpbidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtyZWN0TWl4aW4sIGV2ZW50TWl4aW4sIGxpc3RNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgbG9hZG1vcmVvZmZzZXQ6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVTY3JvbGwgKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5yZWFjaEJvdHRvbSgpKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2xvYWRtb3JlJywgdGhpcy5jcmVhdGVDdXN0b21FdmVudCgnbG9hZG1vcmUnKSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZUxvYWRpbmcgKCkge1xuICAgICAgLy9cbiAgICB9LFxuICAgIGNyZWF0ZVJlZnJlc2ggKCkge1xuICAgICAgLy9cbiAgICB9LFxuICAgIGNyZWF0ZUNoaWxkcmVuIChjcmVhdGVFbGVtZW50KSB7XG4gICAgICBjb25zdCBzbG90cyA9IHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW11cbiAgICAgIGNvbnN0IGNlbGxzID0gc2xvdHMuZmlsdGVyKHZub2RlID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codm5vZGUudGFnKVxuICAgICAgICBpZiAoIXZub2RlLnRhZyB8fCAhdm5vZGUuY29tcG9uZW50T3B0aW9ucykgcmV0dXJuIGZhbHNlXG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zLnRhZ1xuICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgICAgdGhpcy5fbG9hZGluZyA9IGNyZWF0ZUVsZW1lbnQobG9hZGluZywge1xuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgbG9hZGluZzogKCkgPT4gdGhpcy4kZW1pdCgnbG9hZGluZycsIHRoaXMuY3JlYXRlQ3VzdG9tRXZlbnQoJ2xvYWRpbmcnKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0YWdOYW1lID09PSAncmVmcmVzaCcpIHtcbiAgICAgICAgICB0aGlzLl9yZWZyZXNoID0gY3JlYXRlRWxlbWVudChyZWZyZXNoLCB7XG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICByZWZyZXNoOiAoKSA9PiB0aGlzLiRlbWl0KCdyZWZyZXNoJywgdGhpcy5jcmVhdGVDdXN0b21FdmVudCgncmVmcmVzaCcpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG4gICAgICByZXR1cm4gW1xuICAgICAgICB0aGlzLl9yZWZyZXNoLFxuICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgcmVmOiAnaW5uZXInLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1saXN0LWlubmVyJ1xuICAgICAgICB9LCBjZWxscyksXG4gICAgICAgIHRoaXMuX2xvYWRpbmdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHZhbGlkYXRlU3R5bGVzKCdsaXN0JywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdtYWluJywge1xuICAgICAgcmVmOiAnd3JhcHBlcicsXG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2xpc3QnIH0sXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtbGlzdCB3ZWV4LWxpc3Qtd3JhcHBlcicsXG4gICAgICBvbjoge1xuICAgICAgICBzY3JvbGw6IGRlYm91bmNlKGJpbmQodGhpcy5oYW5kbGVTY3JvbGwsIHRoaXMpLCAxMDApLFxuICAgICAgICB0b3VjaHN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgIHRvdWNobW92ZTogdGhyb3R0bGUoYmluZCh0aGlzLmhhbmRsZVRvdWNoTW92ZSwgdGhpcyksIDI1KSxcbiAgICAgICAgdG91Y2hlbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmRcbiAgICAgIH1cbiAgICB9LCB0aGlzLmNyZWF0ZUNoaWxkcmVuKGNyZWF0ZUVsZW1lbnQpKVxuICB9XG59XG4iLCJpbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdmFsaWRhdGVTdHlsZXMoJ2NlbGwnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCB7XG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2NlbGwnIH0sXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtY2VsbCdcbiAgICB9LCB0aGlzLiRzbG90cy5kZWZhdWx0KVxuICB9XG59XG4iLCJpbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uL3ZhbGlkYXRvcidcbmltcG9ydCB7IGRlYm91bmNlLCBiaW5kIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgcmVjdE1peGluIGZyb20gJy4uL21peGlucy9yZWN0J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW3JlY3RNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgc2Nyb2xsRGlyZWN0aW9uOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6ICd2ZXJ0aWNhbCcsXG4gICAgICB2YWxpZGF0b3IgKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBbJ2hvcml6b250YWwnLCAndmVydGljYWwnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbiAgICAgIH1cbiAgICB9LFxuICAgIGxvYWRtb3Jlb2Zmc2V0OiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlU2Nyb2xsIChldmVudCkge1xuICAgICAgaWYgKHRoaXMucmVhY2hCb3R0b20oKSkge1xuICAgICAgICB0aGlzLiRlbWl0KCdsb2FkbW9yZScsIGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdmFsaWRhdGVTdHlsZXMoJ3Njcm9sbGVyJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdtYWluJywge1xuICAgICAgcmVmOiAnd3JhcHBlcicsXG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ3Njcm9sbGVyJyB9LFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXNjcm9sbGVyIHdlZXgtc2Nyb2xsZXItd3JhcHBlcicsXG4gICAgICBvbjoge1xuICAgICAgICBzY3JvbGw6IGRlYm91bmNlKGJpbmQodGhpcy5oYW5kbGVTY3JvbGwsIHRoaXMpLCAxMDApXG4gICAgICB9XG4gICAgfSwgW1xuICAgICAgY3JlYXRlRWxlbWVudCgnbWFyaycsIHsgcmVmOiAndG9wTWFyaycsIHN0YXRpY0NsYXNzOiAnd2VleC1zY3JvbGxlci10b3AtbWFyaycgfSksXG4gICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHJlZjogJ2lubmVyJyxcbiAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXNjcm9sbGVyLWlubmVyJ1xuICAgICAgfSwgdGhpcy4kc2xvdHMuZGVmYXVsdCksXG4gICAgICBjcmVhdGVFbGVtZW50KCdtYXJrJywgeyByZWY6ICdib3R0b21NYXJrJywgc3RhdGljQ2xhc3M6ICd3ZWV4LXNjcm9sbGVyLWJvdHRvbS1tYXJrJyB9KVxuICAgIF0pXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2luZGljYXRvcicsXG4gIHByb3BzOiB7XG4gICAgY291bnQ6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgYWN0aXZlOiBbTnVtYmVyLCBTdHJpbmddXG4gIH0sXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE51bWJlcih0aGlzLmNvdW50KTsgKytpKSB7XG4gICAgICBjb25zdCBjbGFzc05hbWVzID0gWyd3ZWV4LWluZGljYXRvci1pdGVtJ11cbiAgICAgIGlmIChpID09PSBOdW1iZXIodGhpcy5hY3RpdmUpKSB7XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaCgnd2VleC1pbmRpY2F0b3ItaXRlbS1hY3RpdmUnKVxuICAgICAgfVxuICAgICAgY2hpbGRyZW4ucHVzaChjcmVhdGVFbGVtZW50KCdtZW51aXRlbScsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IGNsYXNzTmFtZXMuam9pbignICcpXG4gICAgICB9KSlcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ21lbnUnLCB7XG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2luZGljYXRvcicgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1pbmRpY2F0b3InXG4gICAgfSwgY2hpbGRyZW4pXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbWV0aG9kczoge1xuICAgIHNsaWRlVG8gKGluZGV4KSB7XG4gICAgICAvLyBsZXQgbmV3SW5kZXggPSAoaW5kZXggfCAwKSAvLyAlIHRoaXMuZnJhbWVDb3VudFxuICAgICAgbGV0IG5ld0luZGV4ID0gKGluZGV4IHwgMCkgJSB0aGlzLmZyYW1lQ291bnQgLy8gc2Nyb2xsIHRvIGxlZnRcbiAgICAgIG5ld0luZGV4ID0gTWF0aC5tYXgobmV3SW5kZXgsIDApXG4gICAgICBuZXdJbmRleCA9IE1hdGgubWluKG5ld0luZGV4LCB0aGlzLmZyYW1lQ291bnQgLSAxKVxuXG4gICAgICBjb25zdCBvZmZzZXQgPSAtbmV3SW5kZXggKiB0aGlzLndyYXBwZXJXaWR0aFxuICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLiRyZWZzLmlubmVyXG5cbiAgICAgIGlmIChpbm5lcikge1xuICAgICAgICAvLyBUT0RPOiB3aWxsLWNoYW5nZSB8IHNldCBzdHlsZXMgdG9nZXRoZXJcbiAgICAgICAgaW5uZXIuc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0YFxuICAgICAgICBpbm5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtvZmZzZXR9cHgsIDAsIDApYFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpbm5lci5zdHlsZS50cmFuc2l0aW9uID0gJydcbiAgICAgICAgfSwgMjAwKVxuICAgICAgfVxuICAgICAgaWYgKG5ld0luZGV4ICE9PSB0aGlzLmN1cnJlbnRJbmRleCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IG5ld0luZGV4XG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMuY3JlYXRlRXZlbnQoJ2NoYW5nZScsIHtcbiAgICAgICAgICBpbmRleDogdGhpcy5jdXJyZW50SW5kZXhcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgfSxcblxuICAgIG5leHQgKCkge1xuICAgICAgdGhpcy5zbGlkZVRvKHRoaXMuY3VycmVudEluZGV4ICsgMSlcbiAgICB9LFxuXG4gICAgcHJldiAoKSB7XG4gICAgICB0aGlzLnNsaWRlVG8odGhpcy5jdXJyZW50SW5kZXggLSAxKVxuICAgIH0sXG5cbiAgICBoYW5kbGVUb3VjaFN0YXJ0IChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0b3VjaCBzdGFydCcsIGV2ZW50KVxuICAgICAgY29uc3QgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXVxuICAgICAgLy8gY29uc29sZS5sb2coJ3RvdWNoIHN0YXJ0JywgZXZlbnQudGFyZ2V0LCBldmVudC50YXJnZXQucGFnZVkpXG4gICAgICAvLyBjb25zb2xlLmxvZygndG91Y2hlcycsIHRvdWNoKVxuICAgICAgdGhpcy5fdG91Y2hQYXJhbXMgPSB7XG4gICAgICAgIG9yaWdpbmFsVHJhbnNmb3JtOiB0aGlzLiRyZWZzLmlubmVyLnN0eWxlLnRyYW5zZm9ybSxcbiAgICAgICAgc3RhcnRUb3VjaEV2ZW50OiB0b3VjaCxcbiAgICAgICAgc3RhcnRYOiB0b3VjaC5wYWdlWCxcbiAgICAgICAgc3RhcnRZOiB0b3VjaC5wYWdlWSxcbiAgICAgICAgdGltZVN0YW1wOiBldmVudC50aW1lU3RhbXBcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlVG91Y2hNb3ZlIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0b3VjaCBtb3ZlJylcbiAgICAgIGlmICh0aGlzLl90b3VjaFBhcmFtcykge1xuICAgICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgICAgY29uc3QgeyBzdGFydFggfSA9IHRoaXMuX3RvdWNoUGFyYW1zXG4gICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF1cbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IHRvdWNoLnBhZ2VYIC0gc3RhcnRYXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvZmZzZXRYJywgb2Zmc2V0WCwgJ3N0YXJ0WCcsIHN0YXJ0WCwgJ3BhZ2VYJywgdG91Y2gucGFnZVgpXG4gICAgICAgIHRoaXMuX3RvdWNoUGFyYW1zLm9mZnNldFggPSBvZmZzZXRYXG5cbiAgICAgICAgaWYgKGlubmVyICYmIG9mZnNldFgpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygndHJhbnNmb3JtJywgYCR7b2Zmc2V0WCAtIHRoaXMuY3VycmVudEluZGV4ICogdGhpcy53cmFwcGVyV2lkdGh9YClcbiAgICAgICAgICBpbm5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtvZmZzZXRYIC0gdGhpcy5jdXJyZW50SW5kZXggKiB0aGlzLndyYXBwZXJXaWR0aH1weCwgMCwgMClgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlVG91Y2hFbmQgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3RvdWNoIGVuZCcpXG4gICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgIGlmICh0aGlzLl90b3VjaFBhcmFtcykge1xuICAgICAgICBjb25zdCB7IG9mZnNldFggfSA9IHRoaXMuX3RvdWNoUGFyYW1zXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0b3VjaCBwYWdlWDonLCB0b3VjaC5wYWdlWCwgJywgb2Zmc2V0WDonLCBvZmZzZXRYKVxuICAgICAgICBpZiAoaW5uZXIpIHtcbiAgICAgICAgICBjb25zdCByZXNldCA9IE1hdGguYWJzKG9mZnNldFggLyB0aGlzLndyYXBwZXJXaWR0aCkgPCAwLjJcbiAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBvZmZzZXRYID4gMCA/IDEgOiAtMVxuICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gcmVzZXQgPyB0aGlzLmN1cnJlbnRJbmRleCA6ICh0aGlzLmN1cnJlbnRJbmRleCAtIGRpcmVjdGlvbilcblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNldDonLCByZXNldCwgJywgbmV3SW5kZXg6JywgbmV3SW5kZXgpXG4gICAgICAgICAgdGhpcy5zbGlkZVRvKG5ld0luZGV4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkZWxldGUgdGhpcy5fdG91Y2hQYXJhbXNcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yJ1xuaW1wb3J0IHsgdGhyb3R0bGUsIGJpbmQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBpbmRpY2F0b3IgZnJvbSAnLi9pbmRpY2F0b3InXG5pbXBvcnQgZXZlbnRNaXhpbiBmcm9tICcuLi8uLi9taXhpbnMvZXZlbnQnXG5pbXBvcnQgc2xpZGVNaXhpbiBmcm9tICcuL3NsaWRlTWl4aW4nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbZXZlbnRNaXhpbiwgc2xpZGVNaXhpbl0sXG4gIC8vIGNvbXBvbmVudHM6IHsgaW5kaWNhdG9yIH0sXG4gIHByb3BzOiB7XG4gICAgJ2F1dG8tcGxheSc6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGludGVydmFsOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgZGVmYXVsdDogMzAwMFxuICAgIH1cbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudEluZGV4OiAwLFxuICAgICAgZnJhbWVDb3VudDogMFxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY29tcHV0ZVdyYXBwZXJTaXplICgpIHtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLiRyZWZzLndyYXBwZXJcbiAgICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB3cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIHRoaXMud3JhcHBlcldpZHRoID0gcmVjdC53aWR0aFxuICAgICAgICB0aGlzLndyYXBwZXJIZWlnaHQgPSByZWN0LmhlaWdodFxuICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVMYXlvdXQgKCkge1xuICAgICAgdGhpcy5jb21wdXRlV3JhcHBlclNpemUoKVxuICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLiRyZWZzLmlubmVyXG4gICAgICBpZiAoaW5uZXIpIHtcbiAgICAgICAgaW5uZXIuc3R5bGUud2lkdGggPSB0aGlzLndyYXBwZXJXaWR0aCAqIHRoaXMuZnJhbWVDb3VudCArICdweCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZm9ybWF0Q2hpbGRyZW4gKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy4kc2xvdHMuZGVmYXVsdCB8fCBbXVxuICAgICAgcmV0dXJuIGNoaWxkcmVuLmZpbHRlcih2bm9kZSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZub2RlKVxuICAgICAgICBpZiAoIXZub2RlLnRhZykgcmV0dXJuIGZhbHNlXG4gICAgICAgIGlmICh2bm9kZS5jb21wb25lbnRPcHRpb25zICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnMudGFnID09PSAnaW5kaWNhdG9yJykge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZub2RlKVxuICAgICAgICAgIC8vIGNvbnNvbGUudHJhY2UoKVxuICAgICAgICAgIHRoaXMuX2luZGljYXRvciA9IGNyZWF0ZUVsZW1lbnQoaW5kaWNhdG9yLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogdm5vZGUuZGF0YS5zdGF0aWNDbGFzcyxcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB2bm9kZS5kYXRhLnN0YXRpY1N0eWxlLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgY291bnQ6IHRoaXMuZnJhbWVDb3VudCxcbiAgICAgICAgICAgICAgYWN0aXZlOiB0aGlzLmN1cnJlbnRJbmRleFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pLm1hcCh2bm9kZSA9PiB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogJ3dlZXgtc2xpZGVyLWNlbGwnXG4gICAgICAgIH0sIFt2bm9kZV0pXG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLl9pbmRpY2F0b3IgPSBudWxsXG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVMYXlvdXQoKVxuICAgIH0pXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgaWYgKHRoaXMuYXV0b1BsYXkpIHtcbiAgICAgIGNvbnN0IGludGVydmFsID0gTnVtYmVyKHRoaXMuaW50ZXJ2YWwpXG4gICAgICB0aGlzLl9sYXN0U2xpZGVUaW1lID0gRGF0ZS5ub3coKVxuXG4gICAgICBjb25zdCBhdXRvUGxheUZuID0gYmluZChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9hdXRvUGxheVRpbWVyKVxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgICAgIGxldCBuZXh0VGljayA9IGludGVydmFsIC0gbm93ICsgdGhpcy5fbGFzdFNsaWRlVGltZVxuICAgICAgICBuZXh0VGljayA9IG5leHRUaWNrID4gMTAwID8gbmV4dFRpY2sgOiBpbnRlcnZhbFxuXG4gICAgICAgIHRoaXMubmV4dCgpXG4gICAgICAgIHRoaXMuX2xhc3RTbGlkZVRpbWUgPSBub3dcbiAgICAgICAgdGhpcy5fYXV0b1BsYXlUaW1lciA9IHNldFRpbWVvdXQoYXV0b1BsYXlGbiwgbmV4dFRpY2spXG4gICAgICB9LCB0aGlzKVxuXG4gICAgICB0aGlzLl9hdXRvUGxheVRpbWVyID0gc2V0VGltZW91dChhdXRvUGxheUZuLCBpbnRlcnZhbClcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHZhbGlkYXRlU3R5bGVzKCdzbGlkZXInLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgfVxuXG4gICAgY29uc3QgaW5uZXJFbGVtZW50cyA9IHRoaXMuZm9ybWF0Q2hpbGRyZW4oY3JlYXRlRWxlbWVudClcbiAgICB0aGlzLmZyYW1lQ291bnQgPSBpbm5lckVsZW1lbnRzLmxlbmd0aFxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbmF2JyxcbiAgICAgIHtcbiAgICAgICAgcmVmOiAnd3JhcHBlcicsXG4gICAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAnc2xpZGVyJyB9LFxuICAgICAgICBzdGF0aWNDbGFzczogJ3dlZXgtc2xpZGVyIHdlZXgtc2xpZGVyLXdyYXBwZXInLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHRvdWNoc3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcbiAgICAgICAgICB0b3VjaG1vdmU6IHRocm90dGxlKGJpbmQodGhpcy5oYW5kbGVUb3VjaE1vdmUsIHRoaXMpLCAyNSksXG4gICAgICAgICAgdG91Y2hlbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgY3JlYXRlRWxlbWVudCgndWwnLCB7XG4gICAgICAgICAgcmVmOiAnaW5uZXInLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1zbGlkZXItaW5uZXInXG4gICAgICAgIH0sIGlubmVyRWxlbWVudHMpLFxuICAgICAgICB0aGlzLl9pbmRpY2F0b3JcbiAgICAgIF1cbiAgICApXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcmVuZGVyICgpIHtcbiAgICAvLyBUT0RPOiBhZGQgdGFnIG5lc3RpbmcgdmFsaWRhdGlvblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgY29uc3QgdGFnID0gdGhpcy4kb3B0aW9ucy5fY29tcG9uZW50VGFnXG4gICAgICBjb25zdCBwYXJlbnRUYWcgPSB0aGlzLiRwYXJlbnQuJG9wdGlvbnMuX2NvbXBvbmVudFRhZ1xuICAgICAgY29uc29sZS53YXJuKGBbVnVlIFJlbmRlcmVyXSBUaGUgPCR7dGFnfT4gY2FuJ3QgYmUgdGhlIGNoaWxkIG9mIDwke3BhcmVudFRhZ30+LmApXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsImltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuXG4vKipcbiAqIEdldCB0ZXh0IHN0eWxlc1xuICovXG5mdW5jdGlvbiBnZXRUZXh0U3R5bGUgKHByb3BzID0ge30pIHtcbiAgY29uc3QgbGluZXMgPSBwYXJzZUludChwcm9wcy5saW5lcykgfHwgMFxuICBpZiAobGluZXMgPiAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIHdlYmtpdExpbmVDbGFtcDogbGluZXNcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGxpbmVzOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgIHZhbHVlOiBbU3RyaW5nXVxuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICB2YWxpZGF0ZVN0eWxlcygndGV4dCcsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgncCcsIHtcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAndGV4dCcgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC10ZXh0JyxcbiAgICAgIHN0YXRpY1N0eWxlOiBnZXRUZXh0U3R5bGUodGhpcylcbiAgICB9LCB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFt0aGlzLnZhbHVlXSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi92YWxpZGF0b3InXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBzcmM6IFN0cmluZ1xuICB9LFxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdmFsaWRhdGVTdHlsZXMoJ3dlYicsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaWZyYW1lJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgJ3dlZXgtdHlwZSc6ICd3ZWInLFxuICAgICAgICBzcmM6IHRoaXMuc3JjXG4gICAgICB9LFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXdlYidcbiAgICB9KVxuICB9XG59XG4iLCJjb25zdCBERUZBVUxUX1ZJRVdQT1JUX1dJRFRIID0gNzUwXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRWaWV3cG9ydCAoY29uZmlncyA9IHt9KSB7XG4gIGNvbnN0IGRvYyA9IHdpbmRvdy5kb2N1bWVudFxuXG4gIGlmIChkb2MpIHtcbiAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5zY3JlZW4ud2lkdGhcbiAgICBjb25zdCBzY2FsZSA9IHNjcmVlbldpZHRoIC8gREVGQVVMVF9WSUVXUE9SVF9XSURUSFxuXG4gICAgY29uc3QgY29udGVudHMgPSBbXG4gICAgICBgd2lkdGg9JHtERUZBVUxUX1ZJRVdQT1JUX1dJRFRIfWAsXG4gICAgICBgaW5pdGlhbC1zY2FsZT0ke3NjYWxlfWAsXG4gICAgICBgbWF4aW11bS1zY2FsZT0ke3NjYWxlfWAsXG4gICAgICBgbWluaW11bS1zY2FsZT0ke3NjYWxlfWAsXG4gICAgICBgdXNlci1zY2FsYWJsZT1ub2BcbiAgICBdXG5cbiAgICBsZXQgbWV0YSA9IGRvYy5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ2aWV3cG9ydFwiXScpXG4gICAgaWYgKCFtZXRhKSB7XG4gICAgICBtZXRhID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICAgICAgbWV0YS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndmlld3BvcnQnKVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpLmFwcGVuZENoaWxkKG1ldGEpXG4gICAgfVxuXG4gICAgbWV0YS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCBjb250ZW50cy5qb2luKCcsJykpXG4gIH1cbn1cbiIsIi8vIGltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IHNlbXZlciBmcm9tICdzZW12ZXInXG5pbXBvcnQgJy4vZW52J1xuaW1wb3J0ICogYXMgY29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBzZXRWaWV3cG9ydCB9IGZyb20gJy4vdmlld3BvcnQnXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YWxsIChWdWUpIHtcbiAgY29uc3QgaHRtbFJlZ2V4ID0gL15odG1sOi9pXG4gIFZ1ZS5jb25maWcuaXNSZXNlcnZlZFRhZyA9IHRhZyA9PiBodG1sUmVnZXgudGVzdCh0YWcpXG4gIFZ1ZS5jb25maWcucGFyc2VQbGF0Zm9ybVRhZ05hbWUgPSB0YWcgPT4gdGFnLnJlcGxhY2UoaHRtbFJlZ2V4LCAnJylcblxuICBmb3IgKGNvbnN0IG5hbWUgaW4gY29tcG9uZW50cykge1xuICAgIFZ1ZS5jb21wb25lbnQobmFtZSwgY29tcG9uZW50c1tuYW1lXSlcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGNvbnNvbGUubG9nKGBbVnVlIFJlbmRlcmVyXSBSZWdpc3RlcmVkIGNvbXBvbmVudHM6IGBcbiAgICAgICsgYFske09iamVjdC5rZXlzKGNvbXBvbmVudHMpLmpvaW4oJywgJyl9XS5gKVxuICB9XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5pZiAodHlwZW9mIFZ1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29uc29sZS5lcnJvcignW1Z1ZSBSZW5kZXJlcl0gYFZ1ZWAgaXMgbm90IGRlZmluZWQhJylcbn1cbmVsc2Uge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcbiAgICAmJiBzZW12ZXIubHQoVnVlLnZlcnNpb24sICcyLjEuNScpKSB7XG4gICAgY29uc29sZS53YXJuKGBbVnVlIFJlbmRlcmVyXSBUaGUgdmVyc2lvbiBvZiBWdWUgc2hvdWxkIGJlIGAgK1xuICAgICAgYGdyZWF0ZXIgdGhhbiAyLjEuNSwgY3VycmVudCBpcyAke1Z1ZS52ZXJzaW9ufS5gKVxuICB9XG5cbiAgc2V0Vmlld3BvcnQoKVxuXG4gIFZ1ZS51c2UoeyBpbnN0YWxsIH0pXG59XG4iXSwibmFtZXMiOlsidGhpcyIsInJlcXVpcmUkJDAiLCJpc09iamVjdCIsInJlcXVpcmUkJDEiLCJkb2N1bWVudCIsInJlcXVpcmUkJDIiLCJyZXF1aXJlJCQzIiwiZFAiLCJyZXF1aXJlJCQ0IiwiZ2xvYmFsIiwiJGV4cG9ydCIsInRvU3RyaW5nIiwiSU9iamVjdCIsInRvSW50ZWdlciIsIm1pbiIsInRvSU9iamVjdCIsImRlZmluZWQiLCJyZXF1aXJlJCQ1IiwiYXJndW1lbnRzIiwiY29mIiwiYW5PYmplY3QiLCJnZXRLZXlzIiwiZW51bUJ1Z0tleXMiLCJJRV9QUk9UTyIsIlBST1RPVFlQRSIsImhhcyIsIlRBRyIsImNyZWF0ZSIsInNldFRvU3RyaW5nVGFnIiwidG9PYmplY3QiLCJyZXF1aXJlJCQ5IiwicmVxdWlyZSQkOCIsInJlZGVmaW5lIiwicmVxdWlyZSQkNyIsImhpZGUiLCJyZXF1aXJlJCQ2IiwiSXRlcmF0b3JzIiwiSVRFUkFUT1IiLCJBcnJheVByb3RvIiwiY2xhc3NvZiIsImFGdW5jdGlvbiIsImN0eCIsInByb2Nlc3MiLCJQcm9taXNlIiwiaXNOb2RlIiwiU1BFQ0lFUyIsIkxJQlJBUlkiLCJyZXF1aXJlJCQxNyIsInJlcXVpcmUkJDE2IiwicmVxdWlyZSQkMTUiLCJyZXF1aXJlJCQxNCIsInJlcXVpcmUkJDEzIiwicmVxdWlyZSQkMTIiLCJyZXF1aXJlJCQxMSIsInJlcXVpcmUkJDEwIiwiVHlwZUVycm9yIiwiY29uc3QiLCJsZXQiLCJpbmRpY2F0b3IiLCJjb21wb25lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEdBQUcsY0FBYyxHQUFHLE1BQU0sQ0FBQzs7O1lBR3RCLElBQUksS0FBSyxDQUFDO1lBQ1YsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRO2dCQUMzQixPQUFPLENBQUMsR0FBRztnQkFDWCxLQUFzQjtnQkFDdEIsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFzQixDQUFDO2NBQzVDLEVBQUEsS0FBSyxHQUFHLFdBQVc7Z0JBQ2pCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDaEMsQ0FBQyxFQUFBOztjQUVKLEVBQUEsS0FBSyxHQUFHLFdBQVcsRUFBRSxDQUFDLEVBQUE7Ozs7QUFJcEMsMkJBQTJCLEdBQUcsT0FBTyxDQUFDOztBQUV0QyxJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFDckIsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLElBQUksZ0JBQWdCLENBQUM7OztBQUduRSxJQUFJLEVBQUUsR0FBRyxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLElBQUksR0FBRyxHQUFHLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7OztBQVFWLElBQUksaUJBQWlCLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDNUIsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsYUFBYSxDQUFDO0FBQ3ZDLElBQUksc0JBQXNCLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDakMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsUUFBUSxDQUFDOzs7Ozs7O0FBT3ZDLElBQUksb0JBQW9CLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDL0IsR0FBRyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsNEJBQTRCLENBQUM7Ozs7OztBQU16RCxJQUFJLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUN0QixHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLE1BQU07bUJBQ3JDLEdBQUcsR0FBRyxHQUFHLENBQUMsaUJBQWlCLENBQUMsR0FBRyxNQUFNO21CQUNyQyxHQUFHLEdBQUcsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsR0FBRyxDQUFDOztBQUV0RCxJQUFJLGdCQUFnQixHQUFHLENBQUMsRUFBRSxDQUFDO0FBQzNCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsc0JBQXNCLENBQUMsR0FBRyxNQUFNO3dCQUMxQyxHQUFHLEdBQUcsR0FBRyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsTUFBTTt3QkFDMUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLEdBQUcsQ0FBQzs7Ozs7QUFLaEUsSUFBSSxvQkFBb0IsR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUMvQixHQUFHLENBQUMsb0JBQW9CLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLGlCQUFpQixDQUFDOzRCQUM5QixHQUFHLEdBQUcsR0FBRyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsR0FBRyxDQUFDOztBQUVsRSxJQUFJLHlCQUF5QixHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ3BDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsc0JBQXNCLENBQUM7aUNBQ25DLEdBQUcsR0FBRyxHQUFHLENBQUMsb0JBQW9CLENBQUMsR0FBRyxHQUFHLENBQUM7Ozs7Ozs7QUFPdkUsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDckIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUMsb0JBQW9CLENBQUM7a0JBQ25DLFFBQVEsR0FBRyxHQUFHLENBQUMsb0JBQW9CLENBQUMsR0FBRyxNQUFNLENBQUM7O0FBRWhFLElBQUksZUFBZSxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQzFCLEdBQUcsQ0FBQyxlQUFlLENBQUMsR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDLHlCQUF5QixDQUFDO3VCQUN6QyxRQUFRLEdBQUcsR0FBRyxDQUFDLHlCQUF5QixDQUFDLEdBQUcsTUFBTSxDQUFDOzs7OztBQUsxRSxJQUFJLGVBQWUsR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUMxQixHQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsZUFBZSxDQUFDOzs7Ozs7QUFNdkMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDaEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDO2FBQ2hDLFFBQVEsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7QUFZdEQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDZixJQUFJLFNBQVMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztnQkFDdkIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUc7Z0JBQ3JCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7O0FBRWpDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQzs7Ozs7QUFLbEMsSUFBSSxVQUFVLEdBQUcsVUFBVSxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDbEMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEdBQUc7aUJBQzFCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7O0FBRWxDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ2hCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsVUFBVSxHQUFHLEdBQUcsQ0FBQzs7QUFFcEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsY0FBYyxDQUFDOzs7OztBQUszQixJQUFJLHFCQUFxQixHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ2hDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLFVBQVUsQ0FBQztBQUN0RSxJQUFJLGdCQUFnQixHQUFHLENBQUMsRUFBRSxDQUFDO0FBQzNCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLFVBQVUsQ0FBQzs7QUFFNUQsSUFBSSxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDdEIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxHQUFHO21CQUN6QyxTQUFTLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsR0FBRzttQkFDdkMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEdBQUc7bUJBQ3ZDLEtBQUssR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSTttQkFDOUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUc7bUJBQ2hCLE1BQU0sQ0FBQzs7QUFFMUIsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUMzQixHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDLHFCQUFxQixDQUFDLEdBQUcsR0FBRzt3QkFDOUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEdBQUc7d0JBQzVDLFNBQVMsR0FBRyxHQUFHLENBQUMscUJBQXFCLENBQUMsR0FBRyxHQUFHO3dCQUM1QyxLQUFLLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUk7d0JBQ25DLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHO3dCQUNoQixNQUFNLENBQUM7O0FBRS9CLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ2pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ2hFLElBQUksV0FBVyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ3RCLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxHQUFHLENBQUM7Ozs7QUFJMUUsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDcEIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQzs7QUFFM0IsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDcEIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQ3BELEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDaEQsSUFBSSxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7O0FBRTdCLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ2hCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDM0QsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDckIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsR0FBRyxDQUFDOzs7O0FBSXJFLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ3BCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUM7O0FBRTNCLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ3BCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUNwRCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2hELElBQUksZ0JBQWdCLEdBQUcsS0FBSyxDQUFDOztBQUU3QixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUNoQixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzNELElBQUksVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ3JCLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEdBQUcsQ0FBQzs7O0FBR3JFLElBQUksZUFBZSxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQzFCLEdBQUcsQ0FBQyxlQUFlLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sR0FBRyxVQUFVLEdBQUcsT0FBTyxDQUFDO0FBQ3hFLElBQUksVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ3JCLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sR0FBRyxTQUFTLEdBQUcsT0FBTyxDQUFDOzs7OztBQUtsRSxJQUFJLGNBQWMsR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUN6QixHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7c0JBQ3BCLE9BQU8sR0FBRyxVQUFVLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLENBQUM7OztBQUcxRSxFQUFFLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzFELElBQUkscUJBQXFCLEdBQUcsUUFBUSxDQUFDOzs7Ozs7O0FBT3JDLElBQUksV0FBVyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ3RCLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUc7bUJBQ2pDLFdBQVc7bUJBQ1gsR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHO21CQUM1QixPQUFPLENBQUM7O0FBRTNCLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDM0IsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEdBQUc7d0JBQ3RDLFdBQVc7d0JBQ1gsR0FBRyxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEdBQUc7d0JBQ2pDLE9BQU8sQ0FBQzs7O0FBR2hDLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLGlCQUFpQixDQUFDOzs7O0FBSTlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7RUFDMUIsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLEVBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUE7Q0FDOUI7O0FBRUQsYUFBYSxHQUFHLEtBQUssQ0FBQztBQUN0QixTQUFTLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFO0VBQzdCLElBQUksT0FBTyxZQUFZLE1BQU07SUFDM0IsRUFBQSxPQUFPLE9BQU8sQ0FBQyxFQUFBOztFQUVqQixJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVE7SUFDN0IsRUFBQSxPQUFPLElBQUksQ0FBQyxFQUFBOztFQUVkLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxVQUFVO0lBQzdCLEVBQUEsT0FBTyxJQUFJLENBQUMsRUFBQTs7RUFFZCxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNyQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDbEIsRUFBQSxPQUFPLElBQUksQ0FBQyxFQUFBOztFQUVkLElBQUk7SUFDRixPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztHQUNuQyxDQUFDLE9BQU8sRUFBRSxFQUFFO0lBQ1gsT0FBTyxJQUFJLENBQUM7R0FDYjtDQUNGOztBQUVELGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDdEIsU0FBUyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtFQUM3QixJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0NBQzdCOzs7QUFHRCxhQUFhLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLFNBQVMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7RUFDN0IsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0NBQzdCOztBQUVELGNBQWMsR0FBRyxNQUFNLENBQUM7O0FBRXhCLFNBQVMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7RUFDOUIsSUFBSSxPQUFPLFlBQVksTUFBTSxFQUFFO0lBQzdCLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxLQUFLO01BQ3pCLEVBQUEsT0FBTyxPQUFPLENBQUMsRUFBQTs7TUFFZixFQUFBLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUE7R0FDN0IsTUFBTSxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtJQUN0QyxNQUFNLElBQUksU0FBUyxDQUFDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxDQUFDO0dBQ3BEOztFQUVELElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxVQUFVO0lBQzdCLEVBQUEsTUFBTSxJQUFJLFNBQVMsQ0FBQyx5QkFBeUIsR0FBRyxVQUFVLEdBQUcsYUFBYSxDQUFDLEVBQUE7O0VBRTdFLElBQUksRUFBRSxJQUFJLFlBQVksTUFBTSxDQUFDO0lBQzNCLEVBQUEsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBQTs7RUFFcEMsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7RUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7RUFDbkIsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztFQUUzRCxJQUFJLENBQUMsQ0FBQztJQUNKLEVBQUEsTUFBTSxJQUFJLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLENBQUMsQ0FBQyxFQUFBOztFQUVyRCxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQzs7O0VBR25CLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztFQUVuQixJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO0lBQ2pELEVBQUEsTUFBTSxJQUFJLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFBOztFQUU5QyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO0lBQ2pELEVBQUEsTUFBTSxJQUFJLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFBOztFQUU5QyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO0lBQ2pELEVBQUEsTUFBTSxJQUFJLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFBOzs7RUFHOUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxFQUFBLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUE7O0lBRXJCLEVBQUEsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBRTtNQUNqRCxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDZCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLGdCQUFnQjtVQUNwQyxFQUFBLE9BQU8sR0FBRyxDQUFDLEVBQUE7T0FDZDtNQUNELE9BQU8sRUFBRSxDQUFDO0tBQ1gsQ0FBQyxDQUFDLEVBQUE7O0VBRUwsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7RUFDekMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0NBQ2Y7O0FBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsV0FBVztFQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7RUFDaEUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU07SUFDeEIsRUFBQSxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFBO0VBQ2xELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztDQUNyQixDQUFDOztBQUVGLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFdBQVc7RUFDckMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0NBQ3JCLENBQUM7O0FBRUYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsU0FBUyxLQUFLLEVBQUU7RUFDekMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztFQUN6RCxJQUFJLEVBQUUsS0FBSyxZQUFZLE1BQU0sQ0FBQztJQUM1QixFQUFBLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUE7O0VBRXhDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0NBQzFELENBQUM7O0FBRUYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxLQUFLLEVBQUU7RUFDN0MsSUFBSSxFQUFFLEtBQUssWUFBWSxNQUFNLENBQUM7SUFDNUIsRUFBQSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFBOztFQUV4QyxPQUFPLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUMzQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDM0Msa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDcEQsQ0FBQzs7QUFFRixNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxTQUFTLEtBQUssRUFBRTs7O0VBQzVDLElBQUksRUFBRSxLQUFLLFlBQVksTUFBTSxDQUFDO0lBQzVCLEVBQUEsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQTs7O0VBR3hDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU07SUFDcEQsRUFBQSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUE7T0FDUCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNO0lBQ3pELEVBQUEsT0FBTyxDQUFDLENBQUMsRUFBQTtPQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTTtJQUMxRCxFQUFBLE9BQU8sQ0FBQyxDQUFDLEVBQUE7O0VBRVgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ1YsR0FBRztJQUNELElBQUksQ0FBQyxHQUFHQSxNQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsS0FBSyxDQUFDLG9CQUFvQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsSUFBSSxDQUFDLEtBQUssU0FBUyxJQUFJLENBQUMsS0FBSyxTQUFTO01BQ3BDLEVBQUEsT0FBTyxDQUFDLENBQUMsRUFBQTtTQUNOLElBQUksQ0FBQyxLQUFLLFNBQVM7TUFDdEIsRUFBQSxPQUFPLENBQUMsQ0FBQyxFQUFBO1NBQ04sSUFBSSxDQUFDLEtBQUssU0FBUztNQUN0QixFQUFBLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQTtTQUNQLElBQUksQ0FBQyxLQUFLLENBQUM7TUFDZCxFQUFBLFNBQVMsRUFBQTs7TUFFVCxFQUFBLE9BQU8sa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUE7R0FDbkMsUUFBUSxFQUFFLENBQUMsRUFBRTtDQUNmLENBQUM7Ozs7QUFJRixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxTQUFTLE9BQU8sRUFBRSxVQUFVLEVBQUU7OztFQUNuRCxRQUFRLE9BQU87SUFDYixLQUFLLFVBQVU7TUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7TUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7TUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztNQUNmLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztNQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO01BQzVCLE1BQU07SUFDUixLQUFLLFVBQVU7TUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7TUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7TUFDZixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7TUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztNQUM1QixNQUFNO0lBQ1IsS0FBSyxVQUFVOzs7O01BSWIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO01BQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO01BQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO01BQzVCLE1BQU07OztJQUdSLEtBQUssWUFBWTtNQUNmLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUM5QixFQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUE7TUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7TUFDNUIsTUFBTTs7SUFFUixLQUFLLE9BQU87Ozs7O01BS1YsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQ3RFLEVBQUEsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUE7TUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztNQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO01BQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7TUFDckIsTUFBTTtJQUNSLEtBQUssT0FBTzs7Ozs7TUFLVixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUM7UUFDbEQsRUFBQSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBQTtNQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO01BQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7TUFDckIsTUFBTTtJQUNSLEtBQUssT0FBTzs7Ozs7TUFLVixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUM7UUFDOUIsRUFBQSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBQTtNQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO01BQ3JCLE1BQU07OztJQUdSLEtBQUssS0FBSztNQUNSLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUM5QixFQUFBLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBO1dBQ25CO1FBQ0gsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDL0IsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7VUFDZixJQUFJLE9BQU9BLE1BQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQzFDQSxNQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDckIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQ1I7U0FDRjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztVQUNWLEVBQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQTtPQUMzQjtNQUNELElBQUksVUFBVSxFQUFFOzs7UUFHZCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxFQUFFO1VBQ3JDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsRUFBQSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUE7U0FDckM7VUFDQyxFQUFBLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQTtPQUNyQztNQUNELE1BQU07O0lBRVI7TUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixHQUFHLE9BQU8sQ0FBQyxDQUFDO0dBQzdEO0VBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0VBQ2QsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0VBQ3hCLE9BQU8sSUFBSSxDQUFDO0NBQ2IsQ0FBQzs7QUFFRixXQUFXLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQVMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtFQUNoRCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssUUFBUSxFQUFFO0lBQzlCLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDbkIsS0FBSyxHQUFHLFNBQVMsQ0FBQztHQUNuQjs7RUFFRCxJQUFJO0lBQ0YsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUM7R0FDcEUsQ0FBQyxPQUFPLEVBQUUsRUFBRTtJQUNYLE9BQU8sSUFBSSxDQUFDO0dBQ2I7Q0FDRjs7QUFFRCxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLFNBQVMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7RUFDaEMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUFFO0lBQzFCLE9BQU8sSUFBSSxDQUFDO0dBQ2IsTUFBTTtJQUNMLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekIsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtNQUNoRCxLQUFLLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRTtRQUNsQixJQUFJLEdBQUcsS0FBSyxPQUFPLElBQUksR0FBRyxLQUFLLE9BQU8sSUFBSSxHQUFHLEtBQUssT0FBTyxFQUFFO1VBQ3pELElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUM7V0FDbEI7U0FDRjtPQUNGO01BQ0QsT0FBTyxZQUFZLENBQUM7S0FDckI7SUFDRCxLQUFLLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRTtNQUNsQixJQUFJLEdBQUcsS0FBSyxPQUFPLElBQUksR0FBRyxLQUFLLE9BQU8sSUFBSSxHQUFHLEtBQUssT0FBTyxFQUFFO1FBQ3pELElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRTtVQUN2QixPQUFPLEdBQUcsQ0FBQztTQUNaO09BQ0Y7S0FDRjtHQUNGO0NBQ0Y7O0FBRUQsMEJBQTBCLEdBQUcsa0JBQWtCLENBQUM7O0FBRWhELElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQztBQUN6QixTQUFTLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7RUFDaEMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUMzQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOztFQUUzQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7SUFDaEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0dBQ1I7O0VBRUQsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7U0FDcEIsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQztTQUNuQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNWLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztTQUNULENBQUMsQ0FBQztDQUNWOztBQUVELDJCQUEyQixHQUFHLG1CQUFtQixDQUFDO0FBQ2xELFNBQVMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtFQUNqQyxPQUFPLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUNqQzs7QUFFRCxhQUFhLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLFNBQVMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUU7RUFDdkIsT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO0NBQ25DOztBQUVELGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDdEIsU0FBUyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRTtFQUN2QixPQUFPLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7Q0FDbkM7O0FBRUQsYUFBYSxHQUFHLEtBQUssQ0FBQztBQUN0QixTQUFTLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFO0VBQ3ZCLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztDQUNuQzs7QUFFRCxlQUFlLEdBQUcsT0FBTyxDQUFDO0FBQzFCLFNBQVMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFO0VBQzVCLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN4Qzs7QUFFRCxvQkFBb0IsR0FBRyxZQUFZLENBQUM7QUFDcEMsU0FBUyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtFQUMxQixPQUFPLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQzVCOztBQUVELGdCQUFnQixHQUFHLFFBQVEsQ0FBQztBQUM1QixTQUFTLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRTtFQUM3QixPQUFPLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQzdCOztBQUVELFlBQVksR0FBRyxJQUFJLENBQUM7QUFDcEIsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtFQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQzlCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQ3JDLENBQUMsQ0FBQztDQUNKOztBQUVELGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDdEIsU0FBUyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtFQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQzlCLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQ3RDLENBQUMsQ0FBQztDQUNKOztBQUVELFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDaEIsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUU7RUFDdkIsT0FBTyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDakM7O0FBRUQsVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUNoQixTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRTtFQUN2QixPQUFPLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNqQzs7QUFFRCxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFO0VBQ3ZCLE9BQU8sT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0NBQ25DOztBQUVELFdBQVcsR0FBRyxHQUFHLENBQUM7QUFDbEIsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUU7RUFDeEIsT0FBTyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDbkM7O0FBRUQsV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUNsQixTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRTtFQUN4QixPQUFPLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUNsQzs7QUFFRCxXQUFXLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFO0VBQ3hCLE9BQU8sT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQ2xDOztBQUVELFdBQVcsR0FBRyxHQUFHLENBQUM7QUFDbEIsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFO0VBQzVCLElBQUksR0FBRyxDQUFDO0VBQ1IsUUFBUSxFQUFFO0lBQ1IsS0FBSyxLQUFLO01BQ1IsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUUsRUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFBO01BQ3pDLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFLEVBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQTtNQUN6QyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztNQUNkLE1BQU07SUFDUixLQUFLLEtBQUs7TUFDUixJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRSxFQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUE7TUFDekMsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUUsRUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFBO01BQ3pDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO01BQ2QsTUFBTTtJQUNSLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNO0lBQzNELEtBQUssSUFBSSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU07SUFDekMsS0FBSyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTTtJQUN2QyxLQUFLLElBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNO0lBQ3pDLEtBQUssR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU07SUFDdkMsS0FBSyxJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTTtJQUN6QyxTQUFTLE1BQU0sSUFBSSxTQUFTLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxDQUFDLENBQUM7R0FDekQ7RUFDRCxPQUFPLEdBQUcsQ0FBQztDQUNaOztBQUVELGtCQUFrQixHQUFHLFVBQVUsQ0FBQztBQUNoQyxTQUFTLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0VBQy9CLElBQUksSUFBSSxZQUFZLFVBQVUsRUFBRTtJQUM5QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSztNQUN0QixFQUFBLE9BQU8sSUFBSSxDQUFDLEVBQUE7O01BRVosRUFBQSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFBO0dBQ3JCOztFQUVELElBQUksRUFBRSxJQUFJLFlBQVksVUFBVSxDQUFDO0lBQy9CLEVBQUEsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBQTs7RUFFckMsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7RUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7RUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs7RUFFakIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEdBQUc7SUFDckIsRUFBQSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFBOztJQUVoQixFQUFBLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFBOztFQUVuRCxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQ3JCOztBQUVELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFNBQVMsSUFBSSxFQUFFO0VBQzFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztFQUMxRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztFQUV0QixJQUFJLENBQUMsQ0FBQztJQUNKLEVBQUEsTUFBTSxJQUFJLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFBOztFQUVyRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssR0FBRztJQUN2QixFQUFBLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUE7OztFQUdyQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNQLEVBQUEsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsRUFBQTs7SUFFbEIsRUFBQSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQTtDQUM5QyxDQUFDOztBQUVGLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFdBQVc7RUFDekMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0NBQ25CLENBQUM7O0FBRUYsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxPQUFPLEVBQUU7RUFDNUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O0VBRTlDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxHQUFHO0lBQ3JCLEVBQUEsT0FBTyxJQUFJLENBQUMsRUFBQTs7RUFFZCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVE7SUFDN0IsRUFBQSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFBOztFQUU1QyxPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUM3RCxDQUFDOzs7QUFHRixhQUFhLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7RUFDM0IsSUFBSSxDQUFDLEtBQUssWUFBWSxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssS0FBSyxLQUFLO0lBQ25ELEVBQUEsT0FBTyxLQUFLLENBQUMsRUFBQTs7RUFFZixJQUFJLEVBQUUsSUFBSSxZQUFZLEtBQUssQ0FBQztJQUMxQixFQUFBLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUE7O0VBRWpDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOzs7RUFHbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7RUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEtBQUssRUFBRTtJQUN2RCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7R0FDdEMsRUFBRSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7O0lBRTFCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztHQUNqQixDQUFDLENBQUM7O0VBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO0lBQ3BCLE1BQU0sSUFBSSxTQUFTLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLENBQUM7R0FDdkQ7O0VBRUQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0NBQ2Y7O0FBRUQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsV0FBVztFQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsS0FBSyxFQUFFO0lBQ3hDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztHQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0VBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztDQUNuQixDQUFDOztBQUVGLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFdBQVc7RUFDcEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0NBQ25CLENBQUM7O0FBRUYsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxLQUFLLEVBQUU7RUFDM0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztFQUN2QixLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0VBQ3JCLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDOztFQUU3QixJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0VBQ3hELEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztFQUN6QyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7O0VBRS9CLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0VBQ2pFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7OztFQUdwRCxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7O0VBR3ZELEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDOzs7RUFHdkQsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7OztFQUtyQyxJQUFJLE1BQU0sR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztFQUMxRCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksRUFBRTtJQUM1QyxPQUFPLGVBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDMUIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFOztJQUVkLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxFQUFFO01BQzlCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDN0IsQ0FBQyxDQUFDO0dBQ0o7RUFDRCxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksRUFBRTtJQUMzQixPQUFPLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztHQUNwQyxDQUFDLENBQUM7O0VBRUgsT0FBTyxHQUFHLENBQUM7Q0FDWixDQUFDOzs7QUFHRixxQkFBcUIsR0FBRyxhQUFhLENBQUM7QUFDdEMsU0FBUyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtFQUNuQyxPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxFQUFFO0lBQ3BELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRTtNQUMxQixPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDaEMsQ0FBQyxDQUFDO0NBQ0o7Ozs7O0FBS0QsU0FBUyxlQUFlLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtFQUNwQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ3BCLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBQ2xDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDckIsSUFBSSxHQUFHLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7RUFDbEMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztFQUN0QixJQUFJLEdBQUcsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztFQUNuQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ3RCLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBQ2pDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDckIsT0FBTyxJQUFJLENBQUM7Q0FDYjs7QUFFRCxTQUFTLEdBQUcsQ0FBQyxFQUFFLEVBQUU7RUFDZixPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxHQUFHLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQztDQUN0RDs7Ozs7Ozs7QUFRRCxTQUFTLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0VBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLEVBQUU7SUFDakQsT0FBTyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQ2xDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDZDs7QUFFRCxTQUFTLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0VBQ2pDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQzNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO0lBQzlDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyQyxJQUFJLEdBQUcsQ0FBQzs7SUFFUixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFDUixFQUFBLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBQTtTQUNOLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztNQUNiLEVBQUEsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFBO1NBQzNDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzs7TUFFYixFQUFBLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUE7U0FDM0QsSUFBSSxFQUFFLEVBQUU7TUFDWCxLQUFLLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDN0IsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUc7UUFDdEIsRUFBQSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFBO01BQ2hCLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ2pDLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztLQUN4Qzs7TUFFQyxFQUFBLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDNUIsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUE7O0lBRXpDLEtBQUssQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0IsT0FBTyxHQUFHLENBQUM7R0FDWixDQUFDLENBQUM7Q0FDSjs7Ozs7Ozs7QUFRRCxTQUFTLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0VBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLEVBQUU7SUFDakQsT0FBTyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQ2xDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDZDs7QUFFRCxTQUFTLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0VBQ2pDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBQzVCLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQzNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO0lBQzlDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyQyxJQUFJLEdBQUcsQ0FBQzs7SUFFUixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFDUixFQUFBLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBQTtTQUNOLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztNQUNiLEVBQUEsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFBO1NBQzNDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ2YsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLEVBQUEsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBQTs7UUFFOUQsRUFBQSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBQTtLQUN6RCxNQUFNLElBQUksRUFBRSxFQUFFO01BQ2IsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQzdCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHO1FBQ3RCLEVBQUEsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBQTtNQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHO1VBQ1gsRUFBQSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDakMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFBOztVQUUxQyxFQUFBLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBQTtPQUMxQztRQUNDLEVBQUEsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Y0FDakMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFBO0tBQ2xDLE1BQU07TUFDTCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7TUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHO1VBQ1gsRUFBQSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUM1QixJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUE7O1VBRTFDLEVBQUEsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDNUIsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUE7T0FDMUM7UUFDQyxFQUFBLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Y0FDNUIsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFBO0tBQ2xDOztJQUVELEtBQUssQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0IsT0FBTyxHQUFHLENBQUM7R0FDWixDQUFDLENBQUM7Q0FDSjs7QUFFRCxTQUFTLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0VBQ25DLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7RUFDckMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksRUFBRTtJQUMxQyxPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDbkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNkOztBQUVELFNBQVMsYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7RUFDbEMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztFQUNuQixJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUM3QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFNBQVMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7SUFDdEQsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5QyxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQzs7SUFFZCxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksSUFBSTtNQUN0QixFQUFBLElBQUksR0FBRyxFQUFFLENBQUMsRUFBQTs7SUFFWixJQUFJLEVBQUUsRUFBRTtNQUNOLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFOztRQUVoQyxHQUFHLEdBQUcsUUFBUSxDQUFDO09BQ2hCLE1BQU07O1FBRUwsR0FBRyxHQUFHLEdBQUcsQ0FBQztPQUNYO0tBQ0YsTUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7O01BRXZCLElBQUksRUFBRTtRQUNKLEVBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFBO01BQ1IsSUFBSSxFQUFFO1FBQ0osRUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUE7O01BRVIsSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFOzs7O1FBSWhCLElBQUksR0FBRyxJQUFJLENBQUM7UUFDWixJQUFJLEVBQUUsRUFBRTtVQUNOLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7VUFDWCxDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNQLE1BQU0sSUFBSSxFQUFFLEVBQUU7VUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNQO09BQ0YsTUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7OztRQUd4QixJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1gsSUFBSSxFQUFFO1VBQ0osRUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUE7O1VBRVgsRUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUE7T0FDZDs7TUFFRCxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDcEMsTUFBTSxJQUFJLEVBQUUsRUFBRTtNQUNiLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLFFBQVEsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7S0FDL0MsTUFBTSxJQUFJLEVBQUUsRUFBRTtNQUNiLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQy9EOztJQUVELEtBQUssQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7O0lBRTVCLE9BQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0o7Ozs7QUFJRCxTQUFTLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0VBQ2pDLEtBQUssQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDOztFQUVuQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQzFDOzs7Ozs7O0FBT0QsU0FBUyxhQUFhLENBQUMsRUFBRTt1QkFDRixJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUU7dUJBQ3pCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFOztFQUU5QyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDVCxFQUFBLElBQUksR0FBRyxFQUFFLENBQUMsRUFBQTtPQUNQLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUNkLEVBQUEsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUE7T0FDdkIsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO0lBQ2QsRUFBQSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFBOztJQUVuQyxFQUFBLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUE7O0VBRXJCLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUNULEVBQUEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFBO09BQ0wsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO0lBQ2QsRUFBQSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFBO09BQzNCLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUNkLEVBQUEsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFBO09BQ3BDLElBQUksR0FBRztJQUNWLEVBQUEsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBQTs7SUFFakQsRUFBQSxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFBOztFQUVqQixPQUFPLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUM7Q0FDakM7Ozs7QUFJRCxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLE9BQU8sRUFBRTs7O0VBQ3ZDLElBQUksQ0FBQyxPQUFPO0lBQ1YsRUFBQSxPQUFPLEtBQUssQ0FBQyxFQUFBOztFQUVmLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUTtJQUM3QixFQUFBLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUE7O0VBRTVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUN4QyxJQUFJLE9BQU8sQ0FBQ0EsTUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUM7TUFDL0IsRUFBQSxPQUFPLElBQUksQ0FBQyxFQUFBO0dBQ2Y7RUFDRCxPQUFPLEtBQUssQ0FBQztDQUNkLENBQUM7O0FBRUYsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRTtFQUM3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7TUFDdkIsRUFBQSxPQUFPLEtBQUssQ0FBQyxFQUFBO0dBQ2hCOztFQUVELElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7Ozs7OztJQU03QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtNQUNuQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO01BQ3JCLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxHQUFHO1FBQ3ZCLEVBQUEsU0FBUyxFQUFBOztNQUVYLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN2QyxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsS0FBSztZQUMvQixPQUFPLENBQUMsS0FBSyxLQUFLLE9BQU8sQ0FBQyxLQUFLO1lBQy9CLE9BQU8sQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLEtBQUs7VUFDakMsRUFBQSxPQUFPLElBQUksQ0FBQyxFQUFBO09BQ2Y7S0FDRjs7O0lBR0QsT0FBTyxLQUFLLENBQUM7R0FDZDs7RUFFRCxPQUFPLElBQUksQ0FBQztDQUNiOztBQUVELGlCQUFpQixHQUFHLFNBQVMsQ0FBQztBQUM5QixTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtFQUN4QyxJQUFJO0lBQ0YsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztHQUNqQyxDQUFDLE9BQU8sRUFBRSxFQUFFO0lBQ1gsT0FBTyxLQUFLLENBQUM7R0FDZDtFQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztDQUM1Qjs7QUFFRCxxQkFBcUIsR0FBRyxhQUFhLENBQUM7QUFDdEMsU0FBUyxhQUFhLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7RUFDN0MsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsT0FBTyxFQUFFO0lBQ3ZDLE9BQU8sU0FBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDckIsT0FBTyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztHQUM5QixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0NBQ2Y7O0FBRUQscUJBQXFCLEdBQUcsYUFBYSxDQUFDO0FBQ3RDLFNBQVMsYUFBYSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0VBQzdDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLE9BQU8sRUFBRTtJQUN2QyxPQUFPLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ3JCLE9BQU8sT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDN0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztDQUNmOztBQUVELGtCQUFrQixHQUFHLFVBQVUsQ0FBQztBQUNoQyxTQUFTLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO0VBQ2hDLElBQUk7OztJQUdGLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUM7R0FDN0MsQ0FBQyxPQUFPLEVBQUUsRUFBRTtJQUNYLE9BQU8sSUFBSSxDQUFDO0dBQ2I7Q0FDRjs7O0FBR0QsV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUNsQixTQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtFQUNsQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztDQUM1Qzs7O0FBR0QsV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUNsQixTQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtFQUNsQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztDQUM1Qzs7QUFFRCxlQUFlLEdBQUcsT0FBTyxDQUFDO0FBQzFCLFNBQVMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtFQUM1QyxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBQ3JDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7O0VBRWhDLElBQUksSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQztFQUNuQyxRQUFRLElBQUk7SUFDVixLQUFLLEdBQUc7TUFDTixJQUFJLEdBQUcsRUFBRSxDQUFDO01BQ1YsS0FBSyxHQUFHLEdBQUcsQ0FBQztNQUNaLElBQUksR0FBRyxFQUFFLENBQUM7TUFDVixJQUFJLEdBQUcsR0FBRyxDQUFDO01BQ1gsS0FBSyxHQUFHLElBQUksQ0FBQztNQUNiLE1BQU07SUFDUixLQUFLLEdBQUc7TUFDTixJQUFJLEdBQUcsRUFBRSxDQUFDO01BQ1YsS0FBSyxHQUFHLEdBQUcsQ0FBQztNQUNaLElBQUksR0FBRyxFQUFFLENBQUM7TUFDVixJQUFJLEdBQUcsR0FBRyxDQUFDO01BQ1gsS0FBSyxHQUFHLElBQUksQ0FBQztNQUNiLE1BQU07SUFDUjtNQUNFLE1BQU0sSUFBSSxTQUFTLENBQUMsdUNBQXVDLENBQUMsQ0FBQztHQUNoRTs7O0VBR0QsSUFBSSxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtJQUNwQyxPQUFPLEtBQUssQ0FBQztHQUNkOzs7OztFQUtELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtJQUN6QyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUUvQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7SUFDaEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDOztJQUVmLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxVQUFVLEVBQUU7TUFDdkMsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtRQUM3QixVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7T0FDdkM7TUFDRCxJQUFJLEdBQUcsSUFBSSxJQUFJLFVBQVUsQ0FBQztNQUMxQixHQUFHLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQztNQUN4QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDL0MsSUFBSSxHQUFHLFVBQVUsQ0FBQztPQUNuQixNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtRQUNyRCxHQUFHLEdBQUcsVUFBVSxDQUFDO09BQ2xCO0tBQ0YsQ0FBQyxDQUFDOzs7O0lBSUgsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBRTtNQUNyRCxPQUFPLEtBQUssQ0FBQztLQUNkOzs7O0lBSUQsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsUUFBUSxLQUFLLElBQUk7UUFDdkMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7TUFDOUIsT0FBTyxLQUFLLENBQUM7S0FDZCxNQUFNLElBQUksR0FBRyxDQUFDLFFBQVEsS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7TUFDOUQsT0FBTyxLQUFLLENBQUM7S0FDZDtHQUNGO0VBQ0QsT0FBTyxJQUFJLENBQUM7Q0FDYjs7QUFFRCxrQkFBa0IsR0FBRyxVQUFVLENBQUM7QUFDaEMsU0FBUyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtFQUNsQyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBQ25DLE9BQU8sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Q0FDeEU7Ozs7Ozs7QUNsckNEOzs7Ozs7QUFNQSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtFQUNmLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxXQUFXO0lBQ3ZCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO0lBQ3RDLElBQUksVUFBVSxHQUFHLFNBQVMsRUFBRSxFQUFFO01BQzVCLE9BQU8sT0FBTyxFQUFFLEtBQUssVUFBVSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssbUJBQW1CLENBQUM7S0FDM0UsQ0FBQztJQUNGLElBQUksU0FBUyxHQUFHLFNBQVMsS0FBSyxFQUFFO01BQzlCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztNQUMzQixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNqQixPQUFPLENBQUMsQ0FBQztPQUNWO01BQ0QsSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3JDLE9BQU8sTUFBTSxDQUFDO09BQ2Y7TUFDRCxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUM3RCxDQUFDO0lBQ0YsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLElBQUksUUFBUSxHQUFHLFNBQVMsS0FBSyxFQUFFO01BQzdCLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztNQUMzQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7S0FDbkQsQ0FBQzs7O0lBR0YsT0FBTyxTQUFTLElBQUksQ0FBQyxTQUFTLHVCQUF1Qjs7TUFFbkQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDOzs7TUFHYixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7OztNQUc5QixJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7UUFDckIsTUFBTSxJQUFJLFNBQVMsQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO09BQ3pGOzs7TUFHRCxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUM7TUFDakUsSUFBSSxDQUFDLENBQUM7TUFDTixJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTs7O1FBR2hDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7VUFDdEIsTUFBTSxJQUFJLFNBQVMsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO1NBQzFGOzs7UUFHRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3hCLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7T0FDRjs7OztNQUlELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7O01BS2pDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7O01BRzVELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7TUFFVixJQUFJLE1BQU0sQ0FBQztNQUNYLE9BQU8sQ0FBQyxHQUFHLEdBQUcsRUFBRTtRQUNkLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxLQUFLLEVBQUU7VUFDVCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQy9FLE1BQU07VUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ2Y7UUFDRCxDQUFDLElBQUksQ0FBQyxDQUFDO09BQ1I7O01BRUQsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7O01BRWYsT0FBTyxDQUFDLENBQUM7S0FDVixDQUFDO0dBQ0gsRUFBRSxDQUFDLENBQUM7Q0FDTjs7OztBQ3BGRCxJQUFJLE1BQU0sR0FBRyxjQUFjLEdBQUcsT0FBTyxNQUFNLElBQUksV0FBVyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSTtJQUM3RSxNQUFNLEdBQUcsT0FBTyxJQUFJLElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztBQUNoRyxHQUFHLE9BQU8sR0FBRyxJQUFJLFFBQVEsQ0FBQyxFQUFBLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBQTs7OztBQ0h2QyxJQUFJLElBQUksR0FBRyxjQUFjLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0MsR0FBRyxPQUFPLEdBQUcsSUFBSSxRQUFRLENBQUMsRUFBQSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUE7OztBQ0RyQyxhQUFjLEdBQUcsU0FBUyxFQUFFLENBQUM7RUFDM0IsT0FBTyxPQUFPLEVBQUUsS0FBSyxRQUFRLEdBQUcsRUFBRSxLQUFLLElBQUksR0FBRyxPQUFPLEVBQUUsS0FBSyxVQUFVLENBQUM7Q0FDeEU7O0FDRkQsSUFBSSxRQUFRLEdBQUdDLFNBQXVCLENBQUM7QUFDdkMsYUFBYyxHQUFHLFNBQVMsRUFBRSxDQUFDO0VBQzNCLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQSxNQUFNLFNBQVMsQ0FBQyxFQUFFLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxFQUFBO0VBQzVELE9BQU8sRUFBRSxDQUFDO0NBQ1g7O0FDSkQsVUFBYyxHQUFHLFNBQVMsSUFBSSxDQUFDO0VBQzdCLElBQUk7SUFDRixPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztHQUNqQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ1IsT0FBTyxJQUFJLENBQUM7R0FDYjtDQUNGOzs7QUNMRCxnQkFBYyxHQUFHLENBQUNBLE1BQW1CLENBQUMsVUFBVTtFQUM5QyxPQUFPLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQzlFLENBQUM7O0FDSEYsSUFBSUMsVUFBUSxHQUFHQyxTQUF1QjtJQUNsQ0MsVUFBUSxHQUFHSCxPQUFvQixDQUFDLFFBQVE7SUFFeEMsRUFBRSxHQUFHQyxVQUFRLENBQUNFLFVBQVEsQ0FBQyxJQUFJRixVQUFRLENBQUNFLFVBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNoRSxjQUFjLEdBQUcsU0FBUyxFQUFFLENBQUM7RUFDM0IsT0FBTyxFQUFFLEdBQUdBLFVBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0NBQzdDOztBQ05ELGlCQUFjLEdBQUcsQ0FBQ0MsWUFBeUIsSUFBSSxDQUFDRixNQUFtQixDQUFDLFVBQVU7RUFDNUUsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDRixVQUF3QixDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQzNHLENBQUM7OztBQ0RGLElBQUlDLFVBQVEsR0FBR0QsU0FBdUIsQ0FBQzs7O0FBR3ZDLGdCQUFjLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBQzlCLEdBQUcsQ0FBQ0MsVUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUEsT0FBTyxFQUFFLENBQUMsRUFBQTtFQUMzQixJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUM7RUFDWixHQUFHLENBQUMsSUFBSSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxJQUFJLENBQUNBLFVBQVEsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUEsT0FBTyxHQUFHLENBQUMsRUFBQTtFQUMzRixHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxVQUFVLElBQUksQ0FBQ0EsVUFBUSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQSxPQUFPLEdBQUcsQ0FBQyxFQUFBO0VBQ3JGLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsSUFBSSxDQUFDQSxVQUFRLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFBLE9BQU8sR0FBRyxDQUFDLEVBQUE7RUFDNUYsTUFBTSxTQUFTLENBQUMseUNBQXlDLENBQUMsQ0FBQztDQUM1RDs7QUNYRCxJQUFJLFFBQVEsU0FBU0ksU0FBdUI7SUFDeEMsY0FBYyxHQUFHRCxhQUE0QjtJQUM3QyxXQUFXLE1BQU1GLFlBQTBCO0lBQzNDSSxJQUFFLGVBQWUsTUFBTSxDQUFDLGNBQWMsQ0FBQzs7QUFFM0MsUUFBWU4sWUFBeUIsR0FBRyxNQUFNLENBQUMsY0FBYyxHQUFHLFNBQVMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDO0VBQ3ZHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNaLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ3pCLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztFQUNyQixHQUFHLGNBQWMsQ0FBQyxFQUFBLElBQUk7SUFDcEIsT0FBT00sSUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7R0FDN0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLEVBQUE7RUFDekIsR0FBRyxLQUFLLElBQUksVUFBVSxJQUFJLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBQSxNQUFNLFNBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEVBQUE7RUFDMUYsR0FBRyxPQUFPLElBQUksVUFBVSxDQUFDLEVBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBQTtFQUNqRCxPQUFPLENBQUMsQ0FBQztDQUNWOzs7Ozs7QUNmRCxpQkFBYyxHQUFHLFNBQVMsTUFBTSxFQUFFLEtBQUssQ0FBQztFQUN0QyxPQUFPO0lBQ0wsVUFBVSxJQUFJLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMzQixZQUFZLEVBQUUsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLFFBQVEsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDM0IsS0FBSyxTQUFTLEtBQUs7R0FDcEIsQ0FBQztDQUNIOztBQ1BELElBQUksRUFBRSxXQUFXRixTQUF1QjtJQUNwQyxVQUFVLEdBQUdGLGFBQTJCLENBQUM7QUFDN0MsU0FBYyxHQUFHRixZQUF5QixHQUFHLFNBQVMsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7RUFDdkUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0NBQ2hELEdBQUcsU0FBUyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQztFQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0VBQ3BCLE9BQU8sTUFBTSxDQUFDO0NBQ2Y7O0FDUEQsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQztBQUN2QyxRQUFjLEdBQUcsU0FBUyxFQUFFLEVBQUUsR0FBRyxDQUFDO0VBQ2hDLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDckM7O0FDSEQsSUFBSSxFQUFFLEdBQUcsQ0FBQztJQUNOLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDdkIsUUFBYyxHQUFHLFNBQVMsR0FBRyxDQUFDO0VBQzVCLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssU0FBUyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQ3ZGOzs7QUNKRCxJQUFJLE1BQU0sTUFBTU8sT0FBb0I7SUFDaEMsSUFBSSxRQUFRRixLQUFrQjtJQUM5QixHQUFHLFNBQVNELElBQWlCO0lBQzdCLEdBQUcsU0FBU0YsSUFBaUIsQ0FBQyxLQUFLLENBQUM7SUFDcEMsU0FBUyxHQUFHLFVBQVU7SUFDdEIsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDL0IsR0FBRyxTQUFTLENBQUMsRUFBRSxHQUFHLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRWxERixLQUFrQixDQUFDLGFBQWEsR0FBRyxTQUFTLEVBQUUsQ0FBQztFQUM3QyxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDM0IsQ0FBQzs7QUFFRixDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztFQUMzQyxJQUFJLFVBQVUsR0FBRyxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUM7RUFDMUMsR0FBRyxVQUFVLENBQUMsRUFBQSxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUE7RUFDekQsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUEsT0FBTyxFQUFBO0VBQ3pCLEdBQUcsVUFBVSxDQUFDLEVBQUEsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQTtFQUM1RixHQUFHLENBQUMsS0FBSyxNQUFNLENBQUM7SUFDZCxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0dBQ2QsTUFBTTtJQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUM7TUFDUCxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUNkLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ25CLE1BQU07TUFDTCxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBQTtXQUNsQixFQUFBLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUE7S0FDeEI7R0FDRjs7Q0FFRixFQUFFLFFBQVEsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsUUFBUSxFQUFFO0VBQ25ELE9BQU8sT0FBTyxJQUFJLElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQ3ZFLENBQUM7OztBQy9CRixjQUFjLEdBQUcsU0FBUyxFQUFFLENBQUM7RUFDM0IsR0FBRyxPQUFPLEVBQUUsSUFBSSxVQUFVLENBQUMsRUFBQSxNQUFNLFNBQVMsQ0FBQyxFQUFFLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxFQUFBO0VBQ3ZFLE9BQU8sRUFBRSxDQUFDO0NBQ1g7OztBQ0ZELElBQUksU0FBUyxHQUFHQSxVQUF3QixDQUFDO0FBQ3pDLFFBQWMsR0FBRyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDO0VBQ3pDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNkLEdBQUcsSUFBSSxLQUFLLFNBQVMsQ0FBQyxFQUFBLE9BQU8sRUFBRSxDQUFDLEVBQUE7RUFDaEMsT0FBTyxNQUFNO0lBQ1gsS0FBSyxDQUFDLEVBQUUsT0FBTyxTQUFTLENBQUMsQ0FBQztNQUN4QixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3pCLENBQUM7SUFDRixLQUFLLENBQUMsRUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUMzQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUM1QixDQUFDO0lBQ0YsS0FBSyxDQUFDLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQzlCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMvQixDQUFDO0dBQ0g7RUFDRCxPQUFPLHVCQUF1QjtJQUM1QixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0dBQ2xDLENBQUM7Q0FDSDs7QUNuQkQsSUFBSVEsUUFBTSxNQUFNRCxPQUFvQjtJQUNoQyxJQUFJLFFBQVFGLEtBQWtCO0lBQzlCLElBQUksUUFBUUQsS0FBa0I7SUFDOUIsUUFBUSxJQUFJRixTQUFzQjtJQUNsQyxHQUFHLFNBQVNGLElBQWlCO0lBQzdCLFNBQVMsR0FBRyxXQUFXLENBQUM7O0FBRTVCLElBQUlTLFNBQU8sR0FBRyxTQUFTLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDO0VBQ3hDLElBQUksU0FBUyxHQUFHLElBQUksR0FBR0EsU0FBTyxDQUFDLENBQUM7TUFDNUIsU0FBUyxHQUFHLElBQUksR0FBR0EsU0FBTyxDQUFDLENBQUM7TUFDNUIsU0FBUyxHQUFHLElBQUksR0FBR0EsU0FBTyxDQUFDLENBQUM7TUFDNUIsUUFBUSxJQUFJLElBQUksR0FBR0EsU0FBTyxDQUFDLENBQUM7TUFDNUIsT0FBTyxLQUFLLElBQUksR0FBR0EsU0FBTyxDQUFDLENBQUM7TUFDNUIsTUFBTSxNQUFNLFNBQVMsR0FBR0QsUUFBTSxHQUFHLFNBQVMsR0FBR0EsUUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLQSxRQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQ0EsUUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxTQUFTLENBQUM7TUFDbEgsT0FBTyxLQUFLLFNBQVMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7TUFDOUQsUUFBUSxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO01BQzNELEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztFQUN2QixHQUFHLFNBQVMsQ0FBQyxFQUFBLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBQTtFQUMzQixJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUM7O0lBRWhCLEdBQUcsR0FBRyxDQUFDLFNBQVMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsQ0FBQzs7SUFFeEQsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sR0FBRyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7O0lBRW5DLEdBQUcsR0FBRyxPQUFPLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUVBLFFBQU0sQ0FBQyxHQUFHLFFBQVEsSUFBSSxPQUFPLEdBQUcsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDOztJQUUvRyxHQUFHLE1BQU0sQ0FBQyxFQUFBLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEdBQUdDLFNBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBOztJQUV2RCxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBQSxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFBO0lBQy9DLEdBQUcsUUFBUSxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBQSxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUE7R0FDekQ7Q0FDRixDQUFDO0FBQ0ZELFFBQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVuQkMsU0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZEEsU0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZEEsU0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZEEsU0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZEEsU0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDZkEsU0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDZkEsU0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDZkEsU0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDaEIsV0FBYyxHQUFHQSxTQUFPOztBQzFDeEIsSUFBSUMsVUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0FBRTNCLFFBQWMsR0FBRyxTQUFTLEVBQUUsQ0FBQztFQUMzQixPQUFPQSxVQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN2Qzs7O0FDSEQsSUFBSSxHQUFHLEdBQUdWLElBQWlCLENBQUM7QUFDNUIsWUFBYyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsU0FBUyxFQUFFLENBQUM7RUFDMUUsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ3hEOztBQ0pEO0FBQ0EsWUFBYyxHQUFHLFNBQVMsRUFBRSxDQUFDO0VBQzNCLEdBQUcsRUFBRSxJQUFJLFNBQVMsQ0FBQyxFQUFBLE1BQU0sU0FBUyxDQUFDLHdCQUF3QixHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUE7RUFDbEUsT0FBTyxFQUFFLENBQUM7Q0FDWDs7O0FDSEQsSUFBSVcsU0FBTyxHQUFHVCxRQUFxQjtJQUMvQixPQUFPLEdBQUdGLFFBQXFCLENBQUM7QUFDcEMsY0FBYyxHQUFHLFNBQVMsRUFBRSxDQUFDO0VBQzNCLE9BQU9XLFNBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUM3Qjs7QUNMRDtBQUNBLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJO0lBQ2pCLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3ZCLGNBQWMsR0FBRyxTQUFTLEVBQUUsQ0FBQztFQUMzQixPQUFPLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDMUQ7OztBQ0pELElBQUksU0FBUyxHQUFHWCxVQUF3QjtJQUNwQyxHQUFHLFNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUN6QixhQUFjLEdBQUcsU0FBUyxFQUFFLENBQUM7RUFDM0IsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDMUQ7O0FDTEQsSUFBSVksV0FBUyxHQUFHWixVQUF3QjtJQUNwQyxHQUFHLFNBQVMsSUFBSSxDQUFDLEdBQUc7SUFDcEJhLEtBQUcsU0FBUyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ3pCLFlBQWMsR0FBRyxTQUFTLEtBQUssRUFBRSxNQUFNLENBQUM7RUFDdEMsS0FBSyxHQUFHRCxXQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDekIsT0FBTyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQyxHQUFHQyxLQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ2hFOzs7O0FDSkQsSUFBSUMsV0FBUyxHQUFHVixVQUF3QjtJQUNwQyxRQUFRLElBQUlGLFNBQXVCO0lBQ25DLE9BQU8sS0FBS0YsUUFBc0IsQ0FBQztBQUN2QyxrQkFBYyxHQUFHLFNBQVMsV0FBVyxDQUFDO0VBQ3BDLE9BQU8sU0FBUyxLQUFLLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQztJQUNuQyxJQUFJLENBQUMsUUFBUWMsV0FBUyxDQUFDLEtBQUssQ0FBQztRQUN6QixNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDM0IsS0FBSyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO1FBQ25DLEtBQUssQ0FBQzs7SUFFVixHQUFHLFdBQVcsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUEsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDO01BQzlDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztNQUNuQixHQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsRUFBQSxPQUFPLElBQUksQ0FBQyxFQUFBOztLQUUvQixFQUFBLE1BQU0sRUFBQSxLQUFLLE1BQU0sR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQSxHQUFHLFdBQVcsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO01BQy9ELEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFBLE9BQU8sV0FBVyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBQTtLQUNyRCxJQUFBLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQztHQUM3QixDQUFDO0NBQ0g7O0FDcEJELElBQUlOLFFBQU0sR0FBR1IsT0FBb0I7SUFDN0IsTUFBTSxHQUFHLG9CQUFvQjtJQUM3QixLQUFLLElBQUlRLFFBQU0sQ0FBQyxNQUFNLENBQUMsS0FBS0EsUUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3JELFdBQWMsR0FBRyxTQUFTLEdBQUcsQ0FBQztFQUM1QixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Q0FDeEM7O0FDTEQsSUFBSSxNQUFNLEdBQUdOLE9BQW9CLENBQUMsTUFBTSxDQUFDO0lBQ3JDLEdBQUcsTUFBTUYsSUFBaUIsQ0FBQztBQUMvQixjQUFjLEdBQUcsU0FBUyxHQUFHLENBQUM7RUFDNUIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQ2hEOztBQ0pELElBQUksR0FBRyxZQUFZSyxJQUFpQjtJQUNoQyxTQUFTLE1BQU1ELFVBQXdCO0lBQ3ZDLFlBQVksR0FBR0YsY0FBNEIsQ0FBQyxLQUFLLENBQUM7SUFDbEQsUUFBUSxPQUFPRixVQUF3QixDQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUV4RCx1QkFBYyxHQUFHLFNBQVMsTUFBTSxFQUFFLEtBQUssQ0FBQztFQUN0QyxJQUFJLENBQUMsUUFBUSxTQUFTLENBQUMsTUFBTSxDQUFDO01BQzFCLENBQUMsUUFBUSxDQUFDO01BQ1YsTUFBTSxHQUFHLEVBQUU7TUFDWCxHQUFHLENBQUM7RUFDUixJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBQSxHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsRUFBQSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBQTs7RUFFaEUsTUFBTSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFBLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUNoRCxFQUFBO0VBQ0QsT0FBTyxNQUFNLENBQUM7Q0FDZjs7QUNoQkQ7QUFDQSxnQkFBYyxHQUFHO0VBQ2YsK0ZBQStGO0VBQy9GLEtBQUssQ0FBQyxHQUFHLENBQUM7OztBQ0ZaLElBQUksS0FBSyxTQUFTRSxtQkFBa0M7SUFDaEQsV0FBVyxHQUFHRixZQUEyQixDQUFDOztBQUU5QyxlQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDOUMsT0FBTyxLQUFLLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0NBQzlCOztBQ05ELFVBQVksTUFBTSxDQUFDLHFCQUFxQjs7Ozs7O0FDQXhDLFVBQVksRUFBRSxDQUFDLG9CQUFvQjs7Ozs7OztBQ0NuQyxJQUFJZSxTQUFPLEdBQUdmLFFBQXFCLENBQUM7QUFDcEMsYUFBYyxHQUFHLFNBQVMsRUFBRSxDQUFDO0VBQzNCLE9BQU8sTUFBTSxDQUFDZSxTQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUM1Qjs7O0FDRkQsSUFBSSxPQUFPLElBQUlDLFdBQXlCO0lBQ3BDLElBQUksT0FBT1QsV0FBeUI7SUFDcEMsR0FBRyxRQUFRRixVQUF3QjtJQUNuQyxRQUFRLEdBQUdELFNBQXVCO0lBQ2xDLE9BQU8sSUFBSUYsUUFBcUI7SUFDaEMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUM7OztBQUc3QixpQkFBYyxHQUFHLENBQUMsT0FBTyxJQUFJRixNQUFtQixDQUFDLFVBQVU7RUFDekQsSUFBSSxDQUFDLEdBQUcsRUFBRTtNQUNOLENBQUMsR0FBRyxFQUFFO01BQ04sQ0FBQyxHQUFHLE1BQU0sRUFBRTtNQUNaLENBQUMsR0FBRyxzQkFBc0IsQ0FBQztFQUMvQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzlDLE9BQU8sT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUM1RSxDQUFDLEdBQUcsU0FBUyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQzs7O0VBQ2xDLElBQUksQ0FBQyxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7TUFDeEIsSUFBSSxJQUFJLFNBQVMsQ0FBQyxNQUFNO01BQ3hCLEtBQUssR0FBRyxDQUFDO01BQ1QsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDO01BQ25CLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQ3ZCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNqQixJQUFJLENBQUMsUUFBUSxPQUFPLENBQUNpQixXQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNwQyxJQUFJLEtBQUssVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNuRSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDcEIsQ0FBQyxRQUFRLENBQUM7UUFDVixHQUFHLENBQUM7SUFDUixNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBQSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFBO0dBQ3JFLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDWixHQUFHLE9BQU87OztBQy9CWCxJQUFJLE9BQU8sR0FBR2YsT0FBb0IsQ0FBQzs7QUFFbkMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUVGLGFBQTJCLENBQUMsQ0FBQzs7QUNIL0U7Ozs7O0FBS0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7RUFDMUIsTUFBTSxDQUFDLGNBQWMsR0FBRyxDQUFDLFNBQVMsTUFBTSxFQUFFLEtBQUssRUFBRTtJQUMvQyxJQUFJLEdBQUcsQ0FBQztJQUNSLFNBQVMsY0FBYyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUU7TUFDaEMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7TUFDbkIsT0FBTyxDQUFDLENBQUM7S0FDVjtJQUNELElBQUk7O01BRUYsR0FBRyxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztNQUNuRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNwQixDQUFDLE9BQU8sQ0FBQyxFQUFFO01BQ1Y7O1FBRUUsTUFBTSxDQUFDLFNBQVMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDOzs7O1FBSTlCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUM7Ozs7UUFJdEM7UUFDQSxPQUFPO09BQ1I7OztNQUdELEdBQUcsR0FBRyxTQUFTLEtBQUssRUFBRTtRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO09BQ3JCLENBQUM7Ozs7OztNQU1GLGNBQWMsQ0FBQyxRQUFRLEdBQUcsY0FBYztRQUN0QyxjQUFjLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztRQUN4QixNQUFNLENBQUMsU0FBUztPQUNqQixZQUFZLE1BQU0sQ0FBQzs7Ozs7Ozs7S0FRckI7SUFDRCxPQUFPLGNBQWMsQ0FBQztHQUN2QixDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0NBQ3pCOzs7QUN0REQsSUFBSSxLQUFLLFFBQVFJLE9BQW9CLENBQUMsS0FBSyxDQUFDO0lBQ3hDLEdBQUcsVUFBVUYsSUFBaUI7SUFDOUIsTUFBTSxPQUFPRixPQUFvQixDQUFDLE1BQU07SUFDeEMsVUFBVSxHQUFHLE9BQU8sTUFBTSxJQUFJLFVBQVUsQ0FBQzs7QUFFN0MsSUFBSSxRQUFRLEdBQUcsY0FBYyxHQUFHLFNBQVMsSUFBSSxDQUFDO0VBQzVDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDaEMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLEdBQUcsR0FBRyxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0NBQ2hGLENBQUM7O0FBRUYsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLOzs7O0FDVHRCLElBQUlrQixLQUFHLEdBQUdoQixJQUFpQjtJQUN2QixHQUFHLEdBQUdGLElBQWlCLENBQUMsYUFBYSxDQUFDO0lBRXRDLEdBQUcsR0FBR2tCLEtBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUM7OztBQUdoRSxJQUFJLE1BQU0sR0FBRyxTQUFTLEVBQUUsRUFBRSxHQUFHLENBQUM7RUFDNUIsSUFBSTtJQUNGLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ2hCLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZTtDQUMxQixDQUFDOztBQUVGLFlBQWMsR0FBRyxTQUFTLEVBQUUsQ0FBQztFQUMzQixJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1osT0FBTyxFQUFFLEtBQUssU0FBUyxHQUFHLFdBQVcsR0FBRyxFQUFFLEtBQUssSUFBSSxHQUFHLE1BQU07O01BRXhELFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxHQUFHLENBQUM7O01BRXhELEdBQUcsR0FBR0EsS0FBRyxDQUFDLENBQUMsQ0FBQzs7TUFFWixDQUFDLENBQUMsR0FBR0EsS0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksVUFBVSxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7Q0FDakY7OztBQ3BCRCxJQUFJLE9BQU8sR0FBR2QsUUFBcUI7SUFDL0IsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNqQixJQUFJLENBQUNGLElBQWlCLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDN0MsR0FBRyxJQUFJLEdBQUcsRUFBRSxJQUFJLFlBQVksQ0FBQztFQUMzQkYsU0FBc0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLFFBQVEsRUFBRTtJQUN0RSxPQUFPLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0dBQ3pDLEVBQUUsSUFBSSxDQUFDLENBQUM7OztBQ1JYLElBQUlZLFdBQVMsR0FBR1YsVUFBd0I7SUFDcENhLFNBQU8sS0FBS2YsUUFBcUIsQ0FBQzs7O0FBR3RDLGFBQWMsR0FBRyxTQUFTLFNBQVMsQ0FBQztFQUNsQyxPQUFPLFNBQVMsSUFBSSxFQUFFLEdBQUcsQ0FBQztJQUN4QixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUNlLFNBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLEdBQUdILFdBQVMsQ0FBQyxHQUFHLENBQUM7UUFDbEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNO1FBQ1osQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUEsT0FBTyxTQUFTLEdBQUcsRUFBRSxHQUFHLFNBQVMsQ0FBQyxFQUFBO0lBQ3JELENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLEdBQUcsTUFBTTtRQUM5RixTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzNCLFNBQVMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDO0dBQ2pGLENBQUM7Q0FDSDs7QUNoQkQsWUFBYyxHQUFHLEtBQUs7O0FDQXRCLGNBQWMsR0FBRyxFQUFFOztBQ0FuQixJQUFJTixJQUFFLFNBQVNELFNBQXVCO0lBQ2xDYyxVQUFRLEdBQUdmLFNBQXVCO0lBQ2xDZ0IsU0FBTyxJQUFJbEIsV0FBeUIsQ0FBQzs7QUFFekMsY0FBYyxHQUFHRixZQUF5QixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLGdCQUFnQixDQUFDLENBQUMsRUFBRSxVQUFVLENBQUM7RUFDN0dtQixVQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDWixJQUFJLElBQUksS0FBS0MsU0FBTyxDQUFDLFVBQVUsQ0FBQztNQUM1QixNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU07TUFDcEIsQ0FBQyxHQUFHLENBQUM7TUFDTCxDQUFDLENBQUM7RUFDTixNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBQWQsSUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUE7RUFDdkQsT0FBTyxDQUFDLENBQUM7Q0FDVjs7QUNaRCxTQUFjLEdBQUdOLE9BQW9CLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxlQUFlOzs7QUNDMUUsSUFBSW1CLFVBQVEsTUFBTUgsU0FBdUI7SUFDckMsR0FBRyxXQUFXVCxVQUF3QjtJQUN0Q2MsYUFBVyxHQUFHaEIsWUFBMkI7SUFDekNpQixVQUFRLE1BQU1sQixVQUF3QixDQUFDLFVBQVUsQ0FBQztJQUNsRCxLQUFLLFNBQVMsVUFBVSxlQUFlO0lBQ3ZDbUIsV0FBUyxLQUFLLFdBQVcsQ0FBQzs7O0FBRzlCLElBQUksVUFBVSxHQUFHLFVBQVU7O0VBRXpCLElBQUksTUFBTSxHQUFHckIsVUFBd0IsQ0FBQyxRQUFRLENBQUM7TUFDM0MsQ0FBQyxRQUFRbUIsYUFBVyxDQUFDLE1BQU07TUFDM0IsRUFBRSxPQUFPLEdBQUc7TUFDWixFQUFFLE9BQU8sR0FBRztNQUNaLGNBQWMsQ0FBQztFQUNuQixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7RUFDOUJyQixLQUFrQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUN2QyxNQUFNLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQzs7O0VBRzNCLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUMvQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7RUFDdEIsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsUUFBUSxHQUFHLEVBQUUsR0FBRyxtQkFBbUIsR0FBRyxFQUFFLEdBQUcsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0VBQ3JGLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztFQUN2QixVQUFVLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQztFQUM5QixNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUEsT0FBTyxVQUFVLENBQUN1QixXQUFTLENBQUMsQ0FBQ0YsYUFBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQTtFQUN2RCxPQUFPLFVBQVUsRUFBRSxDQUFDO0NBQ3JCLENBQUM7O0FBRUYsaUJBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsTUFBTSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUM7RUFDOUQsSUFBSSxNQUFNLENBQUM7RUFDWCxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUM7SUFDWixLQUFLLENBQUNFLFdBQVMsQ0FBQyxHQUFHSixVQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDO0lBQ25CLEtBQUssQ0FBQ0ksV0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDOztJQUV4QixNQUFNLENBQUNELFVBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUN0QixNQUFNLEVBQUEsTUFBTSxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUE7RUFDN0IsT0FBTyxVQUFVLEtBQUssU0FBUyxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0NBQ3BFLENBQUM7O0FDeENGLElBQUksR0FBRyxHQUFHbEIsU0FBdUIsQ0FBQyxDQUFDO0lBQy9Cb0IsS0FBRyxHQUFHdEIsSUFBaUI7SUFDdkJ1QixLQUFHLEdBQUd6QixJQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDOztBQUUzQyxtQkFBYyxHQUFHLFNBQVMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7RUFDdEMsR0FBRyxFQUFFLElBQUksQ0FBQ3dCLEtBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFQyxLQUFHLENBQUMsQ0FBQyxFQUFBLEdBQUcsQ0FBQyxFQUFFLEVBQUVBLEtBQUcsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQTtDQUNsRzs7QUNMRCxJQUFJQyxRQUFNLFdBQVduQixhQUEyQjtJQUM1QyxVQUFVLE9BQU9GLGFBQTJCO0lBQzVDc0IsZ0JBQWMsR0FBR3ZCLGVBQStCO0lBQ2hELGlCQUFpQixHQUFHLEVBQUUsQ0FBQzs7O0FBRzNCRixLQUFrQixDQUFDLGlCQUFpQixFQUFFRixJQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzs7QUFFakcsZUFBYyxHQUFHLFNBQVMsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7RUFDaEQsV0FBVyxDQUFDLFNBQVMsR0FBRzBCLFFBQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUMvRUMsZ0JBQWMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxHQUFHLFdBQVcsQ0FBQyxDQUFDO0NBQ2pEOzs7QUNYRCxJQUFJSCxLQUFHLFdBQVdwQixJQUFpQjtJQUMvQndCLFVBQVEsTUFBTTFCLFNBQXVCO0lBQ3JDb0IsVUFBUSxNQUFNdEIsVUFBd0IsQ0FBQyxVQUFVLENBQUM7SUFDbEQsV0FBVyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7O0FBRW5DLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxJQUFJLFNBQVMsQ0FBQyxDQUFDO0VBQ25ELENBQUMsR0FBRzRCLFVBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNoQixHQUFHSixLQUFHLENBQUMsQ0FBQyxFQUFFRixVQUFRLENBQUMsQ0FBQyxFQUFBLE9BQU8sQ0FBQyxDQUFDQSxVQUFRLENBQUMsQ0FBQyxFQUFBO0VBQ3ZDLEdBQUcsT0FBTyxDQUFDLENBQUMsV0FBVyxJQUFJLFVBQVUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUNsRSxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO0dBQ2hDLENBQUMsT0FBTyxDQUFDLFlBQVksTUFBTSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUM7Q0FDbkQ7O0FDWEQsSUFBSSxPQUFPLFVBQVVPLFFBQXFCO0lBQ3RDcEIsU0FBTyxVQUFVcUIsT0FBb0I7SUFDckNDLFVBQVEsU0FBU0MsU0FBc0I7SUFDdkNDLE1BQUksYUFBYUMsS0FBa0I7SUFDbkNWLEtBQUcsY0FBY1IsSUFBaUI7SUFDbEMsU0FBUyxRQUFRVCxVQUF1QjtJQUN4QyxXQUFXLE1BQU1GLFdBQXlCO0lBQzFDLGNBQWMsR0FBR0QsZUFBK0I7SUFDaEQsY0FBYyxHQUFHRixVQUF3QjtJQUN6QyxRQUFRLFNBQVNGLElBQWlCLENBQUMsVUFBVSxDQUFDO0lBQzlDLEtBQUssWUFBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksTUFBTSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsRCxXQUFXLE1BQU0sWUFBWTtJQUM3QixJQUFJLGFBQWEsTUFBTTtJQUN2QixNQUFNLFdBQVcsUUFBUSxDQUFDOztBQUU5QixJQUFJLFVBQVUsR0FBRyxVQUFVLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDOztBQUU1QyxlQUFjLEdBQUcsU0FBUyxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7RUFDL0UsV0FBVyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDckMsSUFBSSxTQUFTLEdBQUcsU0FBUyxJQUFJLENBQUM7SUFDNUIsR0FBRyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUEsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQTtJQUM5QyxPQUFPLElBQUk7TUFDVCxLQUFLLElBQUksRUFBRSxPQUFPLFNBQVMsSUFBSSxFQUFFLEVBQUUsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO01BQ3pFLEtBQUssTUFBTSxFQUFFLE9BQU8sU0FBUyxNQUFNLEVBQUUsRUFBRSxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7S0FDOUUsQ0FBQyxPQUFPLFNBQVMsT0FBTyxFQUFFLEVBQUUsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO0dBQ3BFLENBQUM7RUFDRixJQUFJLEdBQUcsVUFBVSxJQUFJLEdBQUcsV0FBVztNQUMvQixVQUFVLEdBQUcsT0FBTyxJQUFJLE1BQU07TUFDOUIsVUFBVSxHQUFHLEtBQUs7TUFDbEIsS0FBSyxRQUFRLElBQUksQ0FBQyxTQUFTO01BQzNCLE9BQU8sTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDO01BQy9FLFFBQVEsS0FBSyxPQUFPLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQztNQUMxQyxRQUFRLEtBQUssT0FBTyxHQUFHLENBQUMsVUFBVSxHQUFHLFFBQVEsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsU0FBUztNQUNoRixVQUFVLEdBQUcsSUFBSSxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLE9BQU8sR0FBRyxPQUFPO01BQ2pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsaUJBQWlCLENBQUM7O0VBRXBDLEdBQUcsVUFBVSxDQUFDO0lBQ1osaUJBQWlCLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELEdBQUcsaUJBQWlCLEtBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQzs7TUFFeEMsY0FBYyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzs7TUFFN0MsR0FBRyxDQUFDLE9BQU8sSUFBSSxDQUFDd0IsS0FBRyxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUFTLE1BQUksQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBQTtLQUNoRztHQUNGOztFQUVELEdBQUcsVUFBVSxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQztJQUNsRCxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLFFBQVEsR0FBRyxTQUFTLE1BQU0sRUFBRSxFQUFFLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7R0FDNUQ7O0VBRUQsR0FBRyxDQUFDLENBQUMsT0FBTyxJQUFJLE1BQU0sTUFBTSxLQUFLLElBQUksVUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbkVBLE1BQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0dBQ2pDOztFQUVELFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUM7RUFDM0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsQ0FBQztFQUM3QixHQUFHLE9BQU8sQ0FBQztJQUNULE9BQU8sR0FBRztNQUNSLE1BQU0sR0FBRyxVQUFVLEdBQUcsUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7TUFDbEQsSUFBSSxLQUFLLE1BQU0sT0FBTyxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztNQUNoRCxPQUFPLEVBQUUsUUFBUTtLQUNsQixDQUFDO0lBQ0YsR0FBRyxNQUFNLENBQUMsRUFBQSxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUM7TUFDM0IsR0FBRyxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFBRixVQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFBO0tBQ3ZELEVBQUEsTUFBTSxFQUFBdEIsU0FBTyxDQUFDQSxTQUFPLENBQUMsQ0FBQyxHQUFHQSxTQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBQTtHQUM5RTtFQUNELE9BQU8sT0FBTyxDQUFDO0NBQ2hCOztBQ3BFRCxJQUFJLEdBQUcsSUFBSVAsU0FBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7O0FBR3pDRixXQUF5QixDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxRQUFRLENBQUM7RUFDNUQsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7RUFDM0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7O0NBRWIsRUFBRSxVQUFVO0VBQ1gsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7TUFDZixLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUU7TUFDZixLQUFLLENBQUM7RUFDVixHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUEsT0FBTyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUE7RUFDM0QsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7RUFDdEIsSUFBSSxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDO0VBQ3hCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztDQUNwQyxDQUFDOzs7QUNmRixJQUFJLFdBQVcsR0FBR0UsSUFBaUIsQ0FBQyxhQUFhLENBQUM7SUFDOUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUM7QUFDbEMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksU0FBUyxDQUFDLEVBQUFGLEtBQWtCLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFBO0FBQ3hGLHFCQUFjLEdBQUcsU0FBUyxHQUFHLENBQUM7RUFDNUIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztDQUNyQzs7QUNORCxhQUFjLEdBQUcsU0FBUyxJQUFJLEVBQUUsS0FBSyxDQUFDO0VBQ3BDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDckM7O0FDREQsSUFBSSxnQkFBZ0IsR0FBR08saUJBQWdDO0lBQ25ELElBQUksZUFBZUYsU0FBdUI7SUFDMUM4QixXQUFTLFVBQVUvQixVQUF1QjtJQUMxQ1UsV0FBUyxVQUFVWixVQUF3QixDQUFDOzs7Ozs7QUFNaEQsc0JBQWMsR0FBR0YsV0FBeUIsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsUUFBUSxFQUFFLElBQUksQ0FBQztFQUNqRixJQUFJLENBQUMsRUFBRSxHQUFHYyxXQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7RUFDOUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7RUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQzs7Q0FFaEIsRUFBRSxVQUFVO0VBQ1gsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7TUFDZixJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7TUFDZixLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ3RCLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDekIsSUFBSSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUM7SUFDcEIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDaEI7RUFDRCxHQUFHLElBQUksSUFBSSxNQUFNLEdBQUcsRUFBQSxPQUFPLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBQTtFQUMxQyxHQUFHLElBQUksSUFBSSxRQUFRLENBQUMsRUFBQSxPQUFPLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQTtFQUM3QyxPQUFPLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNuQyxFQUFFLFFBQVEsQ0FBQyxDQUFDOzs7QUFHYnFCLFdBQVMsQ0FBQyxTQUFTLEdBQUdBLFdBQVMsQ0FBQyxLQUFLLENBQUM7O0FBRXRDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pCLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzNCLGdCQUFnQixDQUFDLFNBQVMsQ0FBQzs7QUNqQzNCLElBQUksVUFBVSxNQUFNbkIsa0JBQStCO0lBQy9DZSxVQUFRLFFBQVF4QixTQUFzQjtJQUN0Q0MsUUFBTSxVQUFVSCxPQUFvQjtJQUNwQzRCLE1BQUksWUFBWTdCLEtBQWtCO0lBQ2xDK0IsV0FBUyxPQUFPakMsVUFBdUI7SUFDdkMsR0FBRyxhQUFhRixJQUFpQjtJQUNqQ29DLFVBQVEsUUFBUSxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQy9CLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ2xDLFdBQVcsS0FBS0QsV0FBUyxDQUFDLEtBQUssQ0FBQzs7QUFFcEMsSUFBSSxJQUFJLFdBQVcsR0FBRyxDQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUNsSCxJQUFJLElBQUksU0FBUyxXQUFXLENBQUMsQ0FBQyxDQUFDO01BQzNCLFVBQVUsR0FBRzNCLFFBQU0sQ0FBQyxJQUFJLENBQUM7TUFDekIsS0FBSyxRQUFRLFVBQVUsSUFBSSxVQUFVLENBQUMsU0FBUztNQUMvQyxHQUFHLENBQUM7RUFDUixHQUFHLEtBQUssQ0FBQztJQUNQLEdBQUcsQ0FBQyxLQUFLLENBQUM0QixVQUFRLENBQUMsQ0FBQyxFQUFBSCxNQUFJLENBQUMsS0FBSyxFQUFFRyxVQUFRLEVBQUUsV0FBVyxDQUFDLENBQUMsRUFBQTtJQUN2RCxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUFILE1BQUksQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUE7SUFDMURFLFdBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUM7SUFDOUIsSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFBSixVQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBQTtHQUNsRjs7O0FDcEJILGVBQWMsR0FBRyxTQUFTLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQztFQUM5RCxHQUFHLEVBQUUsRUFBRSxZQUFZLFdBQVcsQ0FBQyxLQUFLLGNBQWMsS0FBSyxTQUFTLElBQUksY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3hGLE1BQU0sU0FBUyxDQUFDLElBQUksR0FBRyx5QkFBeUIsQ0FBQyxDQUFDO0dBQ25ELENBQUMsT0FBTyxFQUFFLENBQUM7Q0FDYjs7O0FDSEQsSUFBSVosVUFBUSxHQUFHbkIsU0FBdUIsQ0FBQztBQUN2QyxhQUFjLEdBQUcsU0FBUyxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUM7RUFDckQsSUFBSTtJQUNGLE9BQU8sT0FBTyxHQUFHLEVBQUUsQ0FBQ21CLFVBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7O0dBRS9ELENBQUMsTUFBTSxDQUFDLENBQUM7SUFDUixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0IsR0FBRyxHQUFHLEtBQUssU0FBUyxDQUFDLEVBQUFBLFVBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQTtJQUNsRCxNQUFNLENBQUMsQ0FBQztHQUNUO0NBQ0Y7OztBQ1ZELElBQUlnQixXQUFTLElBQUlqQyxVQUF1QjtJQUNwQ2tDLFVBQVEsS0FBS3BDLElBQWlCLENBQUMsVUFBVSxDQUFDO0lBQzFDcUMsWUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7O0FBRWpDLGdCQUFjLEdBQUcsU0FBUyxFQUFFLENBQUM7RUFDM0IsT0FBTyxFQUFFLEtBQUssU0FBUyxLQUFLRixXQUFTLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSUUsWUFBVSxDQUFDRCxVQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztDQUNwRjs7QUNQRCxJQUFJRSxTQUFPLEtBQUtqQyxRQUFxQjtJQUNqQytCLFVBQVEsSUFBSWhDLElBQWlCLENBQUMsVUFBVSxDQUFDO0lBQ3pDK0IsV0FBUyxHQUFHakMsVUFBdUIsQ0FBQztBQUN4QywwQkFBYyxHQUFHRixLQUFrQixDQUFDLGlCQUFpQixHQUFHLFNBQVMsRUFBRSxDQUFDO0VBQ2xFLEdBQUcsRUFBRSxJQUFJLFNBQVMsQ0FBQyxFQUFBLE9BQU8sRUFBRSxDQUFDb0MsVUFBUSxDQUFDO09BQ2pDLEVBQUUsQ0FBQyxZQUFZLENBQUM7T0FDaEJELFdBQVMsQ0FBQ0csU0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQTtDQUM3Qjs7O0FDUEQsSUFBSSxHQUFHLFdBQVd0QixJQUFpQjtJQUMvQixJQUFJLFVBQVVULFNBQXVCO0lBQ3JDLFdBQVcsR0FBR0YsWUFBMkI7SUFDekMsUUFBUSxNQUFNRCxTQUF1QjtJQUNyQyxRQUFRLE1BQU1GLFNBQXVCO0lBQ3JDLFNBQVMsS0FBS0Ysc0JBQXFDO0lBQ25ELEtBQUssU0FBUyxFQUFFO0lBQ2hCLE1BQU0sUUFBUSxFQUFFLENBQUM7QUFDckIsSUFBSSxPQUFPLEdBQUcsY0FBYyxHQUFHLFNBQVMsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQztFQUM1RSxJQUFJLE1BQU0sR0FBRyxRQUFRLEdBQUcsVUFBVSxFQUFFLE9BQU8sUUFBUSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO01BQ3hFLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUN2QyxLQUFLLElBQUksQ0FBQztNQUNWLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQztFQUNuQyxHQUFHLE9BQU8sTUFBTSxJQUFJLFVBQVUsQ0FBQyxFQUFBLE1BQU0sU0FBUyxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUE7O0VBRS9FLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUEsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ3JGLE1BQU0sR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLEdBQUcsTUFBTSxLQUFLLEtBQUssSUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLEVBQUEsT0FBTyxNQUFNLENBQUMsRUFBQTtHQUN4RCxFQUFBLE1BQU0sRUFBQSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksR0FBRztJQUM1RSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoRCxHQUFHLE1BQU0sS0FBSyxLQUFLLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxFQUFBLE9BQU8sTUFBTSxDQUFDLEVBQUE7R0FDeEQsRUFBQTtDQUNGLENBQUM7QUFDRixPQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztBQUN2QixPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU07Ozs7QUN2QnZCLElBQUltQixVQUFRLElBQUlmLFNBQXVCO0lBQ25DbUMsV0FBUyxHQUFHckMsVUFBd0I7SUFDcEMsT0FBTyxLQUFLRixJQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzdDLHVCQUFjLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzdCLElBQUksQ0FBQyxHQUFHbUIsVUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7RUFDbkMsT0FBTyxDQUFDLEtBQUssU0FBUyxJQUFJLENBQUMsQ0FBQyxHQUFHQSxVQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssU0FBUyxHQUFHLENBQUMsR0FBR29CLFdBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN0Rjs7QUNQRDtBQUNBLFdBQWMsR0FBRyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0VBQ3ZDLElBQUksRUFBRSxHQUFHLElBQUksS0FBSyxTQUFTLENBQUM7RUFDNUIsT0FBTyxJQUFJLENBQUMsTUFBTTtJQUNoQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUU7d0JBQ0osRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNYLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM3QixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdELEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0dBQ3ZFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFB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
