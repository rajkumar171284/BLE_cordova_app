(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 8127:
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;
(function () {
  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;
  /** Used as the semantic version number. */

  var VERSION = '4.17.21';
  /** Used as the size to enable large array optimizations. */

  var LARGE_ARRAY_SIZE = 200;
  /** Error message constants. */

  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function',
      INVALID_TEMPL_VAR_ERROR_TEXT = 'Invalid `variable` option passed into `_.template`';
  /** Used to stand-in for `undefined` hash values. */

  var HASH_UNDEFINED = '__lodash_hash_undefined__';
  /** Used as the maximum memoize cache size. */

  var MAX_MEMOIZE_SIZE = 500;
  /** Used as the internal argument placeholder. */

  var PLACEHOLDER = '__lodash_placeholder__';
  /** Used to compose bitmasks for cloning. */

  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;
  /** Used to compose bitmasks for value comparisons. */

  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;
  /** Used to compose bitmasks for function metadata. */

  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;
  /** Used as default options for `_.truncate`. */

  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';
  /** Used to detect hot functions by number of calls within a span of milliseconds. */

  var HOT_COUNT = 800,
      HOT_SPAN = 16;
  /** Used to indicate the type of lazy iteratees. */

  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;
  /** Used as references for various `Number` constants. */

  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;
  /** Used as references for the maximum length and index of an array. */

  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
  /** Used to associate wrap methods with their bit flags. */

  var wrapFlags = [['ary', WRAP_ARY_FLAG], ['bind', WRAP_BIND_FLAG], ['bindKey', WRAP_BIND_KEY_FLAG], ['curry', WRAP_CURRY_FLAG], ['curryRight', WRAP_CURRY_RIGHT_FLAG], ['flip', WRAP_FLIP_FLAG], ['partial', WRAP_PARTIAL_FLAG], ['partialRight', WRAP_PARTIAL_RIGHT_FLAG], ['rearg', WRAP_REARG_FLAG]];
  /** `Object#toString` result references. */

  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';
  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';
  /** Used to match empty string literals in compiled template source. */

  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
  /** Used to match HTML entities and HTML characters. */

  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
  /** Used to match template delimiters. */

  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;
  /** Used to match property names within property paths. */

  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */

  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);
  /** Used to match leading whitespace. */

  var reTrimStart = /^\s+/;
  /** Used to match a single whitespace character. */

  var reWhitespace = /\s/;
  /** Used to match wrap detail comments. */

  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;
  /** Used to match words composed of alphanumeric characters. */

  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
  /**
   * Used to validate the `validate` option in `_.template` variable.
   *
   * Forbids characters which could potentially change the meaning of the function argument definition:
   * - "()," (modification of function parameters)
   * - "=" (default value)
   * - "[]{}" (destructuring of function parameters)
   * - "/" (beginning of a comment)
   * - whitespace
   */

  var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
  /** Used to match backslashes in property paths. */

  var reEscapeChar = /\\(\\)?/g;
  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */

  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
  /** Used to match `RegExp` flags from their coerced string values. */

  var reFlags = /\w*$/;
  /** Used to detect bad signed hexadecimal string values. */

  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  /** Used to detect binary string values. */

  var reIsBinary = /^0b[01]+$/i;
  /** Used to detect host constructors (Safari). */

  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  /** Used to detect octal string values. */

  var reIsOctal = /^0o[0-7]+$/i;
  /** Used to detect unsigned integer values. */

  var reIsUint = /^(?:0|[1-9]\d*)$/;
  /** Used to match Latin Unicode letters (excluding mathematical operators). */

  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
  /** Used to ensure capturing order of template delimiters. */

  var reNoMatch = /($^)/;
  /** Used to match unescaped characters in compiled string literals. */

  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
  /** Used to compose unicode character classes. */

  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
  /** Used to compose unicode capture groups. */

  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';
  /** Used to compose unicode regexes. */

  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
  /** Used to match apostrophes. */

  var reApos = RegExp(rsApos, 'g');
  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */

  var reComboMark = RegExp(rsCombo, 'g');
  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */

  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
  /** Used to match complex or compound words. */

  var reUnicodeWord = RegExp([rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')', rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower, rsUpper + '+' + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join('|'), 'g');
  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */

  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
  /** Used to detect strings that need a more robust regexp to match words. */

  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
  /** Used to assign default `context` object properties. */

  var contextProps = ['Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array', 'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object', 'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap', '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'];
  /** Used to make template sourceURLs easier to identify. */

  var templateCounter = -1;
  /** Used to identify `toStringTag` values of typed arrays. */

  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  /** Used to identify `toStringTag` values supported by `_.clone`. */

  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  /** Used to map Latin Unicode letters to basic Latin letters. */

  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',
    '\xc1': 'A',
    '\xc2': 'A',
    '\xc3': 'A',
    '\xc4': 'A',
    '\xc5': 'A',
    '\xe0': 'a',
    '\xe1': 'a',
    '\xe2': 'a',
    '\xe3': 'a',
    '\xe4': 'a',
    '\xe5': 'a',
    '\xc7': 'C',
    '\xe7': 'c',
    '\xd0': 'D',
    '\xf0': 'd',
    '\xc8': 'E',
    '\xc9': 'E',
    '\xca': 'E',
    '\xcb': 'E',
    '\xe8': 'e',
    '\xe9': 'e',
    '\xea': 'e',
    '\xeb': 'e',
    '\xcc': 'I',
    '\xcd': 'I',
    '\xce': 'I',
    '\xcf': 'I',
    '\xec': 'i',
    '\xed': 'i',
    '\xee': 'i',
    '\xef': 'i',
    '\xd1': 'N',
    '\xf1': 'n',
    '\xd2': 'O',
    '\xd3': 'O',
    '\xd4': 'O',
    '\xd5': 'O',
    '\xd6': 'O',
    '\xd8': 'O',
    '\xf2': 'o',
    '\xf3': 'o',
    '\xf4': 'o',
    '\xf5': 'o',
    '\xf6': 'o',
    '\xf8': 'o',
    '\xd9': 'U',
    '\xda': 'U',
    '\xdb': 'U',
    '\xdc': 'U',
    '\xf9': 'u',
    '\xfa': 'u',
    '\xfb': 'u',
    '\xfc': 'u',
    '\xdd': 'Y',
    '\xfd': 'y',
    '\xff': 'y',
    '\xc6': 'Ae',
    '\xe6': 'ae',
    '\xde': 'Th',
    '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',
    '\u0102': 'A',
    '\u0104': 'A',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u0105': 'a',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010a': 'C',
    '\u010c': 'C',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010b': 'c',
    '\u010d': 'c',
    '\u010e': 'D',
    '\u0110': 'D',
    '\u010f': 'd',
    '\u0111': 'd',
    '\u0112': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u0118': 'E',
    '\u011a': 'E',
    '\u0113': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u0119': 'e',
    '\u011b': 'e',
    '\u011c': 'G',
    '\u011e': 'G',
    '\u0120': 'G',
    '\u0122': 'G',
    '\u011d': 'g',
    '\u011f': 'g',
    '\u0121': 'g',
    '\u0123': 'g',
    '\u0124': 'H',
    '\u0126': 'H',
    '\u0125': 'h',
    '\u0127': 'h',
    '\u0128': 'I',
    '\u012a': 'I',
    '\u012c': 'I',
    '\u012e': 'I',
    '\u0130': 'I',
    '\u0129': 'i',
    '\u012b': 'i',
    '\u012d': 'i',
    '\u012f': 'i',
    '\u0131': 'i',
    '\u0134': 'J',
    '\u0135': 'j',
    '\u0136': 'K',
    '\u0137': 'k',
    '\u0138': 'k',
    '\u0139': 'L',
    '\u013b': 'L',
    '\u013d': 'L',
    '\u013f': 'L',
    '\u0141': 'L',
    '\u013a': 'l',
    '\u013c': 'l',
    '\u013e': 'l',
    '\u0140': 'l',
    '\u0142': 'l',
    '\u0143': 'N',
    '\u0145': 'N',
    '\u0147': 'N',
    '\u014a': 'N',
    '\u0144': 'n',
    '\u0146': 'n',
    '\u0148': 'n',
    '\u014b': 'n',
    '\u014c': 'O',
    '\u014e': 'O',
    '\u0150': 'O',
    '\u014d': 'o',
    '\u014f': 'o',
    '\u0151': 'o',
    '\u0154': 'R',
    '\u0156': 'R',
    '\u0158': 'R',
    '\u0155': 'r',
    '\u0157': 'r',
    '\u0159': 'r',
    '\u015a': 'S',
    '\u015c': 'S',
    '\u015e': 'S',
    '\u0160': 'S',
    '\u015b': 's',
    '\u015d': 's',
    '\u015f': 's',
    '\u0161': 's',
    '\u0162': 'T',
    '\u0164': 'T',
    '\u0166': 'T',
    '\u0163': 't',
    '\u0165': 't',
    '\u0167': 't',
    '\u0168': 'U',
    '\u016a': 'U',
    '\u016c': 'U',
    '\u016e': 'U',
    '\u0170': 'U',
    '\u0172': 'U',
    '\u0169': 'u',
    '\u016b': 'u',
    '\u016d': 'u',
    '\u016f': 'u',
    '\u0171': 'u',
    '\u0173': 'u',
    '\u0174': 'W',
    '\u0175': 'w',
    '\u0176': 'Y',
    '\u0177': 'y',
    '\u0178': 'Y',
    '\u0179': 'Z',
    '\u017b': 'Z',
    '\u017d': 'Z',
    '\u017a': 'z',
    '\u017c': 'z',
    '\u017e': 'z',
    '\u0132': 'IJ',
    '\u0133': 'ij',
    '\u0152': 'Oe',
    '\u0153': 'oe',
    '\u0149': "'n",
    '\u017f': 's'
  };
  /** Used to map characters to HTML entities. */

  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  /** Used to map HTML entities to characters. */

  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };
  /** Used to escape characters for inclusion in compiled string literals. */

  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };
  /** Built-in method references without a dependency on `root`. */

  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;
  /** Detect free variable `global` from Node.js. */

  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
  /** Detect free variable `self`. */

  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
  /** Used as a reference to the global object. */

  var root = freeGlobal || freeSelf || Function('return this')();
  /** Detect free variable `exports`. */

  var freeExports =  true && exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Detect free variable `process` from Node.js. */

  var freeProcess = moduleExports && freeGlobal.process;
  /** Used to access faster Node.js helpers. */

  var nodeUtil = function () {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      } // Legacy `process.binding('util')` for Node.js < 10.


      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }();
  /* Node.js helper references. */


  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  /*--------------------------------------------------------------------------*/

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */

  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);

      case 1:
        return func.call(thisArg, args[0]);

      case 2:
        return func.call(thisArg, args[0], args[1]);

      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }

    return func.apply(thisArg, args);
  }
  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */


  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }

    return accumulator;
  }
  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */


  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }

    return array;
  }
  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */


  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }

    return array;
  }
  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */


  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }

    return true;
  }
  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */


  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];

      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }

    return result;
  }
  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */


  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }
  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */


  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }

    return false;
  }
  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */


  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }

    return result;
  }
  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */


  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }

    return array;
  }
  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */


  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }

    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }

    return accumulator;
  }
  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */


  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[--length];
    }

    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }

    return accumulator;
  }
  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */


  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }

    return false;
  }
  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */


  var asciiSize = baseProperty('length');
  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */

  function asciiToArray(string) {
    return string.split('');
  }
  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */


  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }
  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */


  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function (value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }
  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */


  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }

    return -1;
  }
  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */


  function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
  }
  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */


  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }

    return -1;
  }
  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */


  function baseIsNaN(value) {
    return value !== value;
  }
  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */


  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? baseSum(array, iteratee) / length : NAN;
  }
  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */


  function baseProperty(key) {
    return function (object) {
      return object == null ? undefined : object[key];
    };
  }
  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */


  function basePropertyOf(object) {
    return function (key) {
      return object == null ? undefined : object[key];
    };
  }
  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */


  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function (value, index, collection) {
      accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }
  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */


  function baseSortBy(array, comparer) {
    var length = array.length;
    array.sort(comparer);

    while (length--) {
      array[length] = array[length].value;
    }

    return array;
  }
  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */


  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);

      if (current !== undefined) {
        result = result === undefined ? current : result + current;
      }
    }

    return result;
  }
  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */


  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }

    return result;
  }
  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */


  function baseToPairs(object, props) {
    return arrayMap(props, function (key) {
      return [key, object[key]];
    });
  }
  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */


  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
  }
  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */


  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }
  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */


  function baseValues(object, props) {
    return arrayMap(props, function (key) {
      return object[key];
    });
  }
  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */


  function cacheHas(cache, key) {
    return cache.has(key);
  }
  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */


  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}

    return index;
  }
  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */


  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}

    return index;
  }
  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */


  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }

    return result;
  }
  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */


  var deburrLetter = basePropertyOf(deburredLetters);
  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */

  var escapeHtmlChar = basePropertyOf(htmlEscapes);
  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */

  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }
  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */


  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }
  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */


  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }
  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */


  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }
  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */


  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }

    return result;
  }
  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */


  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);
    map.forEach(function (value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */


  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }
  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */


  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];

      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }

    return result;
  }
  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */


  function setToArray(set) {
    var index = -1,
        result = Array(set.size);
    set.forEach(function (value) {
      result[++index] = value;
    });
    return result;
  }
  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */


  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);
    set.forEach(function (value) {
      result[++index] = [value, value];
    });
    return result;
  }
  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */


  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }

    return -1;
  }
  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */


  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;

    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }

    return index;
  }
  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */


  function stringSize(string) {
    return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
  }
  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */


  function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }
  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */


  function trimmedEndIndex(string) {
    var index = string.length;

    while (index-- && reWhitespace.test(string.charAt(index))) {}

    return index;
  }
  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */


  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */

  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;

    while (reUnicode.test(string)) {
      ++result;
    }

    return result;
  }
  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */


  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }
  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */


  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }
  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */


  var runInContext = function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
    /** Built-in constructor references. */

    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;
    /** Used for built-in method references. */

    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;
    /** Used to detect overreaching core-js shims. */

    var coreJsData = context['__core-js_shared__'];
    /** Used to resolve the decompiled source of functions. */

    var funcToString = funcProto.toString;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /** Used to generate unique IDs. */

    var idCounter = 0;
    /** Used to detect methods masquerading as native. */

    var maskSrcKey = function () {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? 'Symbol(src)_1.' + uid : '';
    }();
    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */


    var nativeObjectToString = objectProto.toString;
    /** Used to infer the `Object` constructor. */

    var objectCtorString = funcToString.call(Object);
    /** Used to restore the original `_` reference in `_.noConflict`. */

    var oldDash = root._;
    /** Used to detect if a method is native. */

    var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    /** Built-in value references. */

    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = function () {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }();
    /** Mocked built-ins. */


    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
    /* Built-in method references for those with the same name as other `lodash` methods. */

    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;
    /* Built-in method references that are verified to be native. */

    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');
    /** Used to store function metadata. */

    var metaMap = WeakMap && new WeakMap();
    /** Used to lookup unminified function names. */

    var realNames = {};
    /** Used to detect maps, sets, and weakmaps. */

    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);
    /** Used to convert symbols to primitives and strings. */

    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;
    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */

    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }

        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }

      return new LodashWrapper(value);
    }
    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */


    var baseCreate = function () {
      function object() {}

      return function (proto) {
        if (!isObject(proto)) {
          return {};
        }

        if (objectCreate) {
          return objectCreate(proto);
        }

        object.prototype = proto;
        var result = new object();
        object.prototype = undefined;
        return result;
      };
    }();
    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */


    function baseLodash() {// No operation performed.
    }
    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */


    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }
    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */


    lodash.templateSettings = {
      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {
        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    }; // Ensure wrappers are instances of `baseLodash`.

    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;
    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;
    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */

    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }
    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */


    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }
    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */


    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }

      return result;
    }
    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */


    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : start - 1,
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || !isRight && arrLength == length && takeCount == length) {
        return baseWrapperValue(array, this.__actions__);
      }

      var result = [];

      outer: while (length-- && resIndex < takeCount) {
        index += dir;
        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }

        result[resIndex++] = value;
      }

      return result;
    } // Ensure `LazyWrapper` is an instance of `baseLodash`.


    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;
    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */

    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */


    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */


    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */


    function hashGet(key) {
      var data = this.__data__;

      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }

      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }
    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */


    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
    }
    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */


    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
      return this;
    } // Add methods to `Hash`.


    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */

    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */


    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */


    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }

      var lastIndex = data.length - 1;

      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }

      --this.size;
      return true;
    }
    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */


    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);
      return index < 0 ? undefined : data[index][1];
    }
    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */


    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */


    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }

      return this;
    } // Add methods to `ListCache`.


    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */

    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */


    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash(),
        'map': new (Map || ListCache)(),
        'string': new Hash()
      };
    }
    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */


    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */


    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */


    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */


    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    } // Add methods to `MapCache`.


    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */

    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();

      while (++index < length) {
        this.add(values[index]);
      }
    }
    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */


    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);

      return this;
    }
    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */


    function setCacheHas(value) {
      return this.__data__.has(value);
    } // Add methods to `SetCache`.


    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */

    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */


    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */


    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);
      this.size = data.size;
      return result;
    }
    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */


    function stackGet(key) {
      return this.__data__.get(key);
    }
    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */


    function stackHas(key) {
      return this.__data__.has(key);
    }
    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */


    function stackSet(key, value) {
      var data = this.__data__;

      if (data instanceof ListCache) {
        var pairs = data.__data__;

        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }

        data = this.__data__ = new MapCache(pairs);
      }

      data.set(key, value);
      this.size = data.size;
      return this;
    } // Add methods to `Stack`.


    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */

    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
        key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }

      return result;
    }
    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */


    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }
    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */


    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }
    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */


    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }
    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */


    function assignMergeValue(object, key, value) {
      if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */


    function assignValue(object, key, value) {
      var objValue = object[key];

      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */


    function assocIndexOf(array, key) {
      var length = array.length;

      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }

      return -1;
    }
    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */


    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function (value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }
    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */


    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */


    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }
    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */


    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }
    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */


    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }

      return result;
    }
    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */


    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }

        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }

      return number;
    }
    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */


    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }

      if (result !== undefined) {
        return result;
      }

      if (!isObject(value)) {
        return value;
      }

      var isArr = isArray(value);

      if (isArr) {
        result = initCloneArray(value);

        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }

        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          result = isFlat || isFunc ? {} : initCloneObject(value);

          if (!isDeep) {
            return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }

          result = initCloneByTag(value, tag, isDeep);
        }
      } // Check for circular references and return its corresponding clone.


      stack || (stack = new Stack());
      var stacked = stack.get(value);

      if (stacked) {
        return stacked;
      }

      stack.set(value, result);

      if (isSet(value)) {
        value.forEach(function (subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function (subValue, key) {
          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
      }

      var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function (subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        } // Recursively populate clone (susceptible to call stack limits).


        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }
    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */


    function baseConforms(source) {
      var props = keys(source);
      return function (object) {
        return baseConformsTo(object, source, props);
      };
    }
    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */


    function baseConformsTo(object, source, props) {
      var length = props.length;

      if (object == null) {
        return !length;
      }

      object = Object(object);

      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if (value === undefined && !(key in object) || !predicate(value)) {
          return false;
        }
      }

      return true;
    }
    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */


    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      return setTimeout(function () {
        func.apply(undefined, args);
      }, wait);
    }
    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */


    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }

      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }

      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      } else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }

      outer: while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);
        value = comparator || value !== 0 ? value : 0;

        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;

          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }

          result.push(value);
        } else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }

      return result;
    }
    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */


    var baseEach = createBaseEach(baseForOwn);
    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */

    var baseEachRight = createBaseEach(baseForOwnRight, true);
    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */

    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function (value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }
    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */


    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) {
          var computed = current,
              result = value;
        }
      }

      return result;
    }
    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */


    function baseFill(array, value, start, end) {
      var length = array.length;
      start = toInteger(start);

      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }

      end = end === undefined || end > length ? length : toInteger(end);

      if (end < 0) {
        end += length;
      }

      end = start > end ? 0 : toLength(end);

      while (start < end) {
        array[start++] = value;
      }

      return array;
    }
    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */


    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function (value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }
    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */


    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];

        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }

      return result;
    }
    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */


    var baseFor = createBaseFor();
    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */

    var baseForRight = createBaseFor(true);
    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */

    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }
    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */


    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }
    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */


    function baseFunctions(object, props) {
      return arrayFilter(props, function (key) {
        return isFunction(object[key]);
      });
    }
    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */


    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }

      return index && index == length ? object : undefined;
    }
    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */


    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */


    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }

      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */


    function baseGt(value, other) {
      return value > other;
    }
    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */


    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }
    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */


    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */


    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }
    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */


    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];

        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }

        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined;
      }

      array = arrays[0];
      var index = -1,
          seen = caches[0];

      outer: while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;
        value = comparator || value !== 0 ? value : 0;

        if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
          othIndex = othLength;

          while (--othIndex) {
            var cache = caches[othIndex];

            if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) {
              continue outer;
            }
          }

          if (seen) {
            seen.push(computed);
          }

          result.push(value);
        }
      }

      return result;
    }
    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */


    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function (value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }
    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */


    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }
    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */


    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */


    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }
    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */


    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }
    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */


    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }

      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }

      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */


    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }

        objIsArr = true;
        objIsObj = false;
      }

      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }

      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }

      if (!isSameTag) {
        return false;
      }

      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */


    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }
    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */


    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }

      object = Object(object);

      while (index--) {
        var data = matchData[index];

        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }

      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();

          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }

          if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }

      return true;
    }
    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */


    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }

      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */


    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }
    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */


    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }
    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */


    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */


    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }

      if (value == null) {
        return identity;
      }

      if (typeof value == 'object') {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }

      return property(value);
    }
    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */


    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }

      var result = [];

      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }

      return result;
    }
    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */


    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }

      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }

      return result;
    }
    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */


    function baseLt(value, other) {
      return value < other;
    }
    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */


    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];
      baseEach(collection, function (value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }
    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */


    function baseMatches(source) {
      var matchData = getMatchData(source);

      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }

      return function (object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */


    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }

      return function (object) {
        var objValue = get(object, path);
        return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */


    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }

      baseFor(source, function (srcValue, key) {
        stack || (stack = new Stack());

        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }

          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }
    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */


    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }

      var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;

        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;

          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }

      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }

      assignMergeValue(object, key, newValue);
    }
    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */


    function baseNth(array, n) {
      var length = array.length;

      if (!length) {
        return;
      }

      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }
    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */


    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function (iteratee) {
          if (isArray(iteratee)) {
            return function (value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            };
          }

          return iteratee;
        });
      } else {
        iteratees = [identity];
      }

      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
      var result = baseMap(collection, function (value, key, collection) {
        var criteria = arrayMap(iteratees, function (iteratee) {
          return iteratee(value);
        });
        return {
          'criteria': criteria,
          'index': ++index,
          'value': value
        };
      });
      return baseSortBy(result, function (object, other) {
        return compareMultiple(object, other, orders);
      });
    }
    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */


    function basePick(object, paths) {
      return basePickBy(object, paths, function (value, path) {
        return hasIn(object, path);
      });
    }
    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */


    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }

      return result;
    }
    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */


    function basePropertyDeep(path) {
      return function (object) {
        return baseGet(object, path);
      };
    }
    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */


    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }

      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }

      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }

          splice.call(array, fromIndex, 1);
        }
      }

      return array;
    }
    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */


    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];

        if (length == lastIndex || index !== previous) {
          var previous = index;

          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }

      return array;
    }
    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */


    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }
    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */


    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }

      return result;
    }
    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */


    function baseRepeat(string, n) {
      var result = '';

      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      } // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.


      do {
        if (n % 2) {
          result += string;
        }

        n = nativeFloor(n / 2);

        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }
    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */


    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }
    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */


    function baseSample(collection) {
      return arraySample(values(collection));
    }
    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */


    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }
    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */


    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }

      path = castPath(path, object);
      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
          return object;
        }

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;

          if (newValue === undefined) {
            newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
          }
        }

        assignValue(nested, key, newValue);
        nested = nested[key];
      }

      return object;
    }
    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */


    var baseSetData = !metaMap ? identity : function (func, data) {
      metaMap.set(func, data);
      return func;
    };
    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */

    var baseSetToString = !defineProperty ? identity : function (func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };
    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */

    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }
    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */


    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }

      end = end > length ? length : end;

      if (end < 0) {
        end += length;
      }

      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);

      while (++index < length) {
        result[index] = array[index + start];
      }

      return result;
    }
    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */


    function baseSome(collection, predicate) {
      var result;
      baseEach(collection, function (value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }
    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */


    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = low + high >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }

        return high;
      }

      return baseSortedIndexBy(array, value, identity, retHighest);
    }
    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */


    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      var low = 0,
          high = array == null ? 0 : array.length;

      if (high === 0) {
        return 0;
      }

      value = iteratee(value);
      var valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? computed <= value : computed < value;
        }

        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }

      return nativeMin(high, MAX_ARRAY_INDEX);
    }
    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */


    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }

      return result;
    }
    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */


    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }

      if (isSymbol(value)) {
        return NAN;
      }

      return +value;
    }
    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */


    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }

      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }

      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }

      var result = value + '';
      return result == '0' && 1 / value == -INFINITY ? '-0' : result;
    }
    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */


    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);

        if (set) {
          return setToArray(set);
        }

        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }

      outer: while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;
        value = comparator || value !== 0 ? value : 0;

        if (isCommon && computed === computed) {
          var seenIndex = seen.length;

          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }

          if (iteratee) {
            seen.push(computed);
          }

          result.push(value);
        } else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }

          result.push(value);
        }
      }

      return result;
    }
    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */


    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }
    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */


    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }
    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */


    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}

      return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
    }
    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */


    function baseWrapperValue(value, actions) {
      var result = value;

      if (result instanceof LazyWrapper) {
        result = result.value();
      }

      return arrayReduce(actions, function (result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }
    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */


    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;

      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }

      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }

      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }
    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */


    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }

      return result;
    }
    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */


    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }
    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */


    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }
    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */


    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }

      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */


    var castRest = baseRest;
    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */

    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return !start && end >= length ? array : baseSlice(array, start, end);
    }
    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */


    var clearTimeout = ctxClearTimeout || function (id) {
      return root.clearTimeout(id);
    };
    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */


    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }

      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */


    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }
    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */


    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */


    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */


    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */


    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */


    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);
        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
          return 1;
        }

        if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
          return -1;
        }
      }

      return 0;
    }
    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */


    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);

        if (result) {
          if (index >= ordersLength) {
            return result;
          }

          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      } // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.


      return object.index - other.index;
    }
    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */


    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }

      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }

      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }

      return result;
    }
    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */


    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }

      var offset = argsIndex;

      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }

      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }

      return result;
    }
    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */


    function copyArray(source, array) {
      var index = -1,
          length = source.length;
      array || (array = Array(length));

      while (++index < length) {
        array[index] = source[index];
      }

      return array;
    }
    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */


    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }

        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }

      return object;
    }
    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */


    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */


    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }
    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */


    function createAggregator(setter, initializer) {
      return function (collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};
        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }
    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */


    function createAssigner(assigner) {
      return baseRest(function (object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;
        customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }

        object = Object(object);

        while (++index < length) {
          var source = sources[index];

          if (source) {
            assigner(object, source, index, customizer);
          }
        }

        return object;
      });
    }
    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */


    function createBaseEach(eachFunc, fromRight) {
      return function (collection, iteratee) {
        if (collection == null) {
          return collection;
        }

        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }

        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while (fromRight ? index-- : ++index < length) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }

        return collection;
      };
    }
    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */


    function createBaseFor(fromRight) {
      return function (object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];

          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }

        return object;
      };
    }
    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */


    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }

      return wrapper;
    }
    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */


    function createCaseFirst(methodName) {
      return function (string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);
        return chr[methodName]() + trailing;
      };
    }
    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */


    function createCompounder(callback) {
      return function (string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }
    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */


    function createCtor(Ctor) {
      return function () {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;

        switch (args.length) {
          case 0:
            return new Ctor();

          case 1:
            return new Ctor(args[0]);

          case 2:
            return new Ctor(args[0], args[1]);

          case 3:
            return new Ctor(args[0], args[1], args[2]);

          case 4:
            return new Ctor(args[0], args[1], args[2], args[3]);

          case 5:
            return new Ctor(args[0], args[1], args[2], args[3], args[4]);

          case 6:
            return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);

          case 7:
            return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }

        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args); // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.

        return isObject(result) ? result : thisBinding;
      };
    }
    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */


    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }

        var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
        length -= holders.length;

        if (length < arity) {
          return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
        }

        var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
        return apply(fn, this, args);
      }

      return wrapper;
    }
    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */


    function createFind(findIndexFunc) {
      return function (collection, predicate, fromIndex) {
        var iterable = Object(collection);

        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);

          predicate = function (key) {
            return iteratee(iterable[key], key, iterable);
          };
        }

        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }
    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */


    function createFlow(fromRight) {
      return flatRest(function (funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }

        while (index--) {
          var func = funcs[index];

          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }

          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }

        index = wrapper ? index : length;

        while (++index < length) {
          func = funcs[index];
          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
          }
        }

        return function () {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }

          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }

          return result;
        };
      });
    }
    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */


    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }

        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }

        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }

        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }

        length -= holdersCount;

        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
        }

        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;
        length = args.length;

        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }

        if (isAry && ary < length) {
          args.length = ary;
        }

        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }

        return fn.apply(thisBinding, args);
      }

      return wrapper;
    }
    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */


    function createInverter(setter, toIteratee) {
      return function (object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }
    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */


    function createMathOperation(operator, defaultValue) {
      return function (value, other) {
        var result;

        if (value === undefined && other === undefined) {
          return defaultValue;
        }

        if (value !== undefined) {
          result = value;
        }

        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }

          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }

          result = operator(value, other);
        }

        return result;
      };
    }
    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */


    function createOver(arrayFunc) {
      return flatRest(function (iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function (args) {
          var thisArg = this;
          return arrayFunc(iteratees, function (iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }
    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */


    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);
      var charsLength = chars.length;

      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }

      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join('') : result.slice(0, length);
    }
    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */


    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = this && this !== root && this instanceof wrapper ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }

        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }

        return apply(fn, isBind ? thisArg : this, args);
      }

      return wrapper;
    }
    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */


    function createRange(fromRight) {
      return function (start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        } // Ensure the sign of `-0` is preserved.


        start = toFinite(start);

        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }

        step = step === undefined ? start < end ? 1 : -1 : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }
    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */


    function createRelationalOperation(operator) {
      return function (value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }

        return operator(value, other);
      };
    }
    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */


    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;
      bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }

      var newData = [func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity];
      var result = wrapFunc.apply(undefined, newData);

      if (isLaziable(func)) {
        setData(result, newData);
      }

      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }
    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */


    function createRound(methodName) {
      var func = Math[methodName];
      return function (number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);

        if (precision && nativeIsFinite(number)) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));
          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }

        return func(number);
      };
    }
    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */


    var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function (values) {
      return new Set(values);
    };
    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */

    function createToPairs(keysFunc) {
      return function (object) {
        var tag = getTag(object);

        if (tag == mapTag) {
          return mapToArray(object);
        }

        if (tag == setTag) {
          return setToPairs(object);
        }

        return baseToPairs(object, keysFunc(object));
      };
    }
    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */


    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;

      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      var length = partials ? partials.length : 0;

      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }

      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;
        partials = holders = undefined;
      }

      var data = isBindKey ? undefined : getData(func);
      var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

      if (data) {
        mergeData(newData, data);
      }

      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }

      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }

      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }
    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */


    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
        return srcValue;
      }

      return objValue;
    }
    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */


    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }

      return objValue;
    }
    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */


    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }
    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */


    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      } // Check that cyclic values are equal.


      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);

      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }

      var index = -1,
          result = true,
          seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
      stack.set(array, other);
      stack.set(other, array); // Ignore non-index properties.

      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }

        if (compared !== undefined) {
          if (compared) {
            continue;
          }

          result = false;
          break;
        } // Recursively compare arrays (susceptible to call stack limits).


        if (seen) {
          if (!arraySome(other, function (othValue, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }

      stack['delete'](array);
      stack['delete'](other);
      return result;
    }
    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */


    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }

          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }

          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == other + '';

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          } // Assume cyclic values are equal.


          var stacked = stack.get(object);

          if (stacked) {
            return stacked == other;
          }

          bitmask |= COMPARE_UNORDERED_FLAG; // Recursively compare objects (susceptible to call stack limits).

          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }

      }

      return false;
    }
    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */


    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }

      var index = objLength;

      while (index--) {
        var key = objProps[index];

        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      } // Check that cyclic values are equal.


      var objStacked = stack.get(object);
      var othStacked = stack.get(other);

      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }

      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;

      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        } // Recursively compare objects (susceptible to call stack limits).


        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }

        skipCtor || (skipCtor = key == 'constructor');
      }

      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

        if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }

      stack['delete'](object);
      stack['delete'](other);
      return result;
    }
    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */


    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }
    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */


    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */


    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */


    var getData = !metaMap ? noop : function (func) {
      return metaMap.get(func);
    };
    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */

    function getFuncName(func) {
      var result = func.name + '',
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;

        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }

      return result;
    }
    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */


    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }
    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */


    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }
    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */


    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
    }
    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */


    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }

      return result;
    }
    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */


    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }
    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */


    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);

      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }

      return result;
    }
    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */


    var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
      if (object == null) {
        return [];
      }

      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function (symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */

    var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
      var result = [];

      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }

      return result;
    };
    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */

    var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function (value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;

            case mapCtorString:
              return mapTag;

            case promiseCtorString:
              return promiseTag;

            case setCtorString:
              return setTag;

            case weakMapCtorString:
              return weakMapTag;
          }
        }

        return result;
      };
    }
    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */


    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':
            start += size;
            break;

          case 'dropRight':
            end -= size;
            break;

          case 'take':
            end = nativeMin(end, start + size);
            break;

          case 'takeRight':
            start = nativeMax(start, end - size);
            break;
        }
      }

      return {
        'start': start,
        'end': end
      };
    }
    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */


    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }
    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */


    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);
      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);

        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }

        object = object[key];
      }

      if (result || ++index != length) {
        return result;
      }

      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }
    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */


    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length); // Add properties assigned by `RegExp#exec`.

      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }

      return result;
    }
    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */


    function initCloneObject(object) {
      return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */


    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;

      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return new Ctor();

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return new Ctor();

        case symbolTag:
          return cloneSymbol(object);
      }
    }
    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */


    function insertWrapDetails(source, details) {
      var length = details.length;

      if (!length) {
        return source;
      }

      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }
    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */


    function isFlattenable(value) {
      return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */


    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }
    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */


    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }

      var type = typeof index;

      if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
        return eq(object[index], value);
      }

      return false;
    }
    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */


    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }

      var type = typeof value;

      if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
        return true;
      }

      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */


    function isKeyable(value) {
      var type = typeof value;
      return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
    }
    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */


    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }

      if (func === other) {
        return true;
      }

      var data = getData(other);
      return !!data && func === data[0];
    }
    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */


    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */


    var isMaskable = coreJsData ? isFunction : stubFalse;
    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */

    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
      return value === proto;
    }
    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */


    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }
    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */


    function matchesStrictComparable(key, srcValue) {
      return function (object) {
        if (object == null) {
          return false;
        }

        return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
      };
    }
    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */


    function memoizeCapped(func) {
      var result = memoize(func, function (key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }

        return key;
      });
      var cache = result.cache;
      return result;
    }
    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */


    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
      var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG; // Exit early if metadata can't be merged.

      if (!(isCommon || isCombo)) {
        return data;
      } // Use source `thisArg` if available.


      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2]; // Set when currying a bound function.

        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      } // Compose partial arguments.


      var value = source[3];

      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      } // Compose partial right arguments.


      value = source[5];

      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      } // Use source `argPos` if available.


      value = source[7];

      if (value) {
        data[7] = value;
      } // Use source `ary` if it's smaller.


      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      } // Use source `arity` if one is not provided.


      if (data[9] == null) {
        data[9] = source[9];
      } // Use source `func` and merge bitmasks.


      data[0] = source[0];
      data[1] = newBitmask;
      return data;
    }
    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */


    function nativeKeysIn(object) {
      var result = [];

      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }

      return result;
    }
    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */


    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */


    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? func.length - 1 : start, 0);
      return function () {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }

        index = -1;
        var otherArgs = Array(start + 1);

        while (++index < start) {
          otherArgs[index] = args[index];
        }

        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }
    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */


    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }
    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */


    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }

      return array;
    }
    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */


    function safeGet(object, key) {
      if (key === 'constructor' && typeof object[key] === 'function') {
        return;
      }

      if (key == '__proto__') {
        return;
      }

      return object[key];
    }
    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */


    var setData = shortOut(baseSetData);
    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */

    var setTimeout = ctxSetTimeout || function (func, wait) {
      return root.setTimeout(func, wait);
    };
    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */


    var setToString = shortOut(baseSetToString);
    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */

    function setWrapToString(wrapper, reference, bitmask) {
      var source = reference + '';
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }
    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */


    function shortOut(func) {
      var count = 0,
          lastCalled = 0;
      return function () {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;

        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }

        return func.apply(undefined, arguments);
      };
    }
    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */


    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;
      size = size === undefined ? length : size;

      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];
        array[rand] = array[index];
        array[index] = value;
      }

      array.length = size;
      return array;
    }
    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */


    var stringToPath = memoizeCapped(function (string) {
      var result = [];

      if (string.charCodeAt(0) === 46
      /* . */
      ) {
        result.push('');
      }

      string.replace(rePropName, function (match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
      });
      return result;
    });
    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */

    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }

      var result = value + '';
      return result == '0' && 1 / value == -INFINITY ? '-0' : result;
    }
    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */


    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}

        try {
          return func + '';
        } catch (e) {}
      }

      return '';
    }
    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */


    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function (pair) {
        var value = '_.' + pair[0];

        if (bitmask & pair[1] && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }
    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */


    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }

      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__ = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }
    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */


    function chunk(array, size, guard) {
      if (guard ? isIterateeCall(array, size, guard) : size === undefined) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }

      var length = array == null ? 0 : array.length;

      if (!length || size < 1) {
        return [];
      }

      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, index += size);
      }

      return result;
    }
    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */


    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];

        if (value) {
          result[resIndex++] = value;
        }
      }

      return result;
    }
    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */


    function concat() {
      var length = arguments.length;

      if (!length) {
        return [];
      }

      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }

      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }
    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */


    var difference = baseRest(function (array, values) {
      return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
    });
    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */

    var differenceBy = baseRest(function (array, values) {
      var iteratee = last(values);

      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }

      return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2)) : [];
    });
    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */

    var differenceWith = baseRest(function (array, values) {
      var comparator = last(values);

      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }

      return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator) : [];
    });
    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */

    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;

      if (!length) {
        return [];
      }

      n = guard || n === undefined ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }
    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */


    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;

      if (!length) {
        return [];
      }

      n = guard || n === undefined ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }
    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */


    function dropRightWhile(array, predicate) {
      return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
    }
    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */


    function dropWhile(array, predicate) {
      return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
    }
    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */


    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;

      if (!length) {
        return [];
      }

      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }

      return baseFill(array, value, start, end);
    }
    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */


    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;

      if (!length) {
        return -1;
      }

      var index = fromIndex == null ? 0 : toInteger(fromIndex);

      if (index < 0) {
        index = nativeMax(length + index, 0);
      }

      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }
    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */


    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;

      if (!length) {
        return -1;
      }

      var index = length - 1;

      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }

      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }
    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */


    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }
    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */


    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }
    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */


    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;

      if (!length) {
        return [];
      }

      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }
    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */


    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }

      return result;
    }
    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */


    function head(array) {
      return array && array.length ? array[0] : undefined;
    }
    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */


    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;

      if (!length) {
        return -1;
      }

      var index = fromIndex == null ? 0 : toInteger(fromIndex);

      if (index < 0) {
        index = nativeMax(length + index, 0);
      }

      return baseIndexOf(array, value, index);
    }
    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */


    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }
    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */


    var intersection = baseRest(function (arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
    });
    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */

    var intersectionBy = baseRest(function (arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }

      return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee, 2)) : [];
    });
    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */

    var intersectionWith = baseRest(function (arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);
      comparator = typeof comparator == 'function' ? comparator : undefined;

      if (comparator) {
        mapped.pop();
      }

      return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined, comparator) : [];
    });
    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */

    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }
    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */


    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }
    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */


    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;

      if (!length) {
        return -1;
      }

      var index = length;

      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }

      return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
    }
    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */


    function nth(array, n) {
      return array && array.length ? baseNth(array, toInteger(n)) : undefined;
    }
    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */


    var pull = baseRest(pullAll);
    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */

    function pullAll(array, values) {
      return array && array.length && values && values.length ? basePullAll(array, values) : array;
    }
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */


    function pullAllBy(array, values, iteratee) {
      return array && array.length && values && values.length ? basePullAll(array, values, getIteratee(iteratee, 2)) : array;
    }
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */


    function pullAllWith(array, values, comparator) {
      return array && array.length && values && values.length ? basePullAll(array, values, undefined, comparator) : array;
    }
    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */


    var pullAt = flatRest(function (array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);
      basePullAt(array, arrayMap(indexes, function (index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));
      return result;
    });
    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */

    function remove(array, predicate) {
      var result = [];

      if (!(array && array.length)) {
        return result;
      }

      var index = -1,
          indexes = [],
          length = array.length;
      predicate = getIteratee(predicate, 3);

      while (++index < length) {
        var value = array[index];

        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }

      basePullAt(array, indexes);
      return result;
    }
    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */


    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }
    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */


    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;

      if (!length) {
        return [];
      }

      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      } else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }

      return baseSlice(array, start, end);
    }
    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */


    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }
    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */


    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }
    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */


    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;

      if (length) {
        var index = baseSortedIndex(array, value);

        if (index < length && eq(array[index], value)) {
          return index;
        }
      }

      return -1;
    }
    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */


    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }
    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */


    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }
    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */


    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;

      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;

        if (eq(array[index], value)) {
          return index;
        }
      }

      return -1;
    }
    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */


    function sortedUniq(array) {
      return array && array.length ? baseSortedUniq(array) : [];
    }
    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */


    function sortedUniqBy(array, iteratee) {
      return array && array.length ? baseSortedUniq(array, getIteratee(iteratee, 2)) : [];
    }
    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */


    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }
    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */


    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }

      n = guard || n === undefined ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }
    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */


    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;

      if (!length) {
        return [];
      }

      n = guard || n === undefined ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }
    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */


    function takeRightWhile(array, predicate) {
      return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
    }
    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */


    function takeWhile(array, predicate) {
      return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
    }
    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */


    var union = baseRest(function (arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });
    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */

    var unionBy = baseRest(function (arrays) {
      var iteratee = last(arrays);

      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }

      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });
    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */

    var unionWith = baseRest(function (arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });
    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */

    function uniq(array) {
      return array && array.length ? baseUniq(array) : [];
    }
    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */


    function uniqBy(array, iteratee) {
      return array && array.length ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }
    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */


    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return array && array.length ? baseUniq(array, undefined, comparator) : [];
    }
    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */


    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }

      var length = 0;
      array = arrayFilter(array, function (group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function (index) {
        return arrayMap(array, baseProperty(index));
      });
    }
    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */


    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }

      var result = unzip(array);

      if (iteratee == null) {
        return result;
      }

      return arrayMap(result, function (group) {
        return apply(iteratee, undefined, group);
      });
    }
    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */


    var without = baseRest(function (array, values) {
      return isArrayLikeObject(array) ? baseDifference(array, values) : [];
    });
    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */

    var xor = baseRest(function (arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });
    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */

    var xorBy = baseRest(function (arrays) {
      var iteratee = last(arrays);

      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }

      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });
    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */

    var xorWith = baseRest(function (arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });
    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */

    var zip = baseRest(unzip);
    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */

    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }
    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */


    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }
    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */


    var zipWith = baseRest(function (arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;
      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });
    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */

    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }
    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */


    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }
    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */


    function thru(value, interceptor) {
      return interceptor(value);
    }
    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */


    var wrapperAt = flatRest(function (paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function (object) {
        return baseAt(object, paths);
      };

      if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }

      value = value.slice(start, +start + (length ? 1 : 0));

      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });

      return new LodashWrapper(value, this.__chain__).thru(function (array) {
        if (length && !array.length) {
          array.push(undefined);
        }

        return array;
      });
    });
    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */

    function wrapperChain() {
      return chain(this);
    }
    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */


    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }
    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */


    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }

      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];
      return {
        'done': done,
        'value': value
      };
    }
    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */


    function wrapperToIterator() {
      return this;
    }
    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */


    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;

        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }

        var previous = clone;
        parent = parent.__wrapped__;
      }

      previous.__wrapped__ = value;
      return result;
    }
    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */


    function wrapperReverse() {
      var value = this.__wrapped__;

      if (value instanceof LazyWrapper) {
        var wrapped = value;

        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }

        wrapped = wrapped.reverse();

        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });

        return new LodashWrapper(wrapped, this.__chain__);
      }

      return this.thru(reverse);
    }
    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */


    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }
    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */


    var countBy = createAggregator(function (result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });
    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */

    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;

      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }

      return func(collection, getIteratee(predicate, 3));
    }
    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */


    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }
    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */


    var find = createFind(findIndex);
    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */

    var findLast = createFind(findLastIndex);
    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */

    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }
    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */


    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }
    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */


    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }
    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */


    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }
    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */


    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }
    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */


    var groupBy = createAggregator(function (result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });
    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */

    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
      var length = collection.length;

      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }

      return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
    }
    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */


    var invokeMap = baseRest(function (collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];
      baseEach(collection, function (value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });
    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */

    var keyBy = createAggregator(function (result, value, key) {
      baseAssignValue(result, key, value);
    });
    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */

    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }
    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */


    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }

      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }

      orders = guard ? undefined : orders;

      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }

      return baseOrderBy(collection, iteratees, orders);
    }
    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */


    var partition = createAggregator(function (result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function () {
      return [[], []];
    });
    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */

    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;
      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }
    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */


    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;
      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }
    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */


    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }
    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */


    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }
    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */


    function sampleSize(collection, n, guard) {
      if (guard ? isIterateeCall(collection, n, guard) : n === undefined) {
        n = 1;
      } else {
        n = toInteger(n);
      }

      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }
    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */


    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }
    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */


    function size(collection) {
      if (collection == null) {
        return 0;
      }

      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }

      var tag = getTag(collection);

      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }

      return baseKeys(collection).length;
    }
    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */


    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;

      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }

      return func(collection, getIteratee(predicate, 3));
    }
    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 30 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
     */


    var sortBy = baseRest(function (collection, iteratees) {
      if (collection == null) {
        return [];
      }

      var length = iteratees.length;

      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }

      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });
    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */

    var now = ctxNow || function () {
      return root.Date.now();
    };
    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */


    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      n = toInteger(n);
      return function () {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }
    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */


    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = func && n == null ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }
    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */


    function before(n, func) {
      var result;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      n = toInteger(n);
      return function () {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }

        if (n <= 1) {
          func = undefined;
        }

        return result;
      };
    }
    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */


    var bind = baseRest(function (func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;

      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }

      return createWrap(func, bitmask, thisArg, partials, holders);
    });
    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */

    var bindKey = baseRest(function (object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;

      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }

      return createWrap(key, bitmask, object, partials, holders);
    });
    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */

    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }
    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */


    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }
    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */


    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      wait = toNumber(wait) || 0;

      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time; // Start the timer for the trailing edge.

        timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.

        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }

      function timerExpired() {
        var time = now();

        if (shouldInvoke(time)) {
          return trailingEdge(time);
        } // Restart the timer.


        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.

        if (trailing && lastArgs) {
          return invokeFunc(time);
        }

        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }

        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }

          if (maxing) {
            // Handle invocations in a tight loop.
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }

        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }

        return result;
      }

      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */


    var defer = baseRest(function (func, args) {
      return baseDelay(func, 1, args);
    });
    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */

    var delay = baseRest(function (func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });
    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */

    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }
    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */


    function memoize(func, resolver) {
      if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      var memoized = function () {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }

        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };

      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    } // Expose `MapCache`.


    memoize.Cache = MapCache;
    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */

    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      return function () {
        var args = arguments;

        switch (args.length) {
          case 0:
            return !predicate.call(this);

          case 1:
            return !predicate.call(this, args[0]);

          case 2:
            return !predicate.call(this, args[0], args[1]);

          case 3:
            return !predicate.call(this, args[0], args[1], args[2]);
        }

        return !predicate.apply(this, args);
      };
    }
    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */


    function once(func) {
      return before(2, func);
    }
    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */


    var overArgs = castRest(function (func, transforms) {
      transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
      var funcsLength = transforms.length;
      return baseRest(function (args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }

        return apply(func, this, args);
      });
    });
    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */

    var partial = baseRest(function (func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });
    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */

    var partialRight = baseRest(function (func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });
    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */

    var rearg = flatRest(function (func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });
    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */

    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }
    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */


    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function (args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }

        return apply(func, this, otherArgs);
      });
    }
    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */


    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }
    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */


    function unary(func) {
      return ary(func, 1);
    }
    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */


    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }
    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */


    function castArray() {
      if (!arguments.length) {
        return [];
      }

      var value = arguments[0];
      return isArray(value) ? value : [value];
    }
    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */


    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }
    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */


    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }
    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */


    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }
    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */


    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }
    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */


    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }
    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */


    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */


    var gt = createRelationalOperation(baseGt);
    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */

    var gte = createRelationalOperation(function (value, other) {
      return value >= other;
    });
    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */

    var isArguments = baseIsArguments(function () {
      return arguments;
    }()) ? baseIsArguments : function (value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
    };
    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */

    var isArray = Array.isArray;
    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */

    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */

    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */


    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */


    function isBoolean(value) {
      return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
    }
    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */


    var isBuffer = nativeIsBuffer || stubFalse;
    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */

    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */

    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }
    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */


    function isEmpty(value) {
      if (value == null) {
        return true;
      }

      if (isArrayLike(value) && (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }

      var tag = getTag(value);

      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }

      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }

      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }

      return true;
    }
    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */


    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }
    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */


    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }
    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */


    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }

      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag || typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value);
    }
    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */


    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }
    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */


    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      } // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.


      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */


    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }
    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */


    function isLength(value) {
      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */


    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }
    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */


    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }
    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */


    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */

    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }
    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */


    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }
    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */


    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }
    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */


    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }

      return baseIsNative(value);
    }
    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */


    function isNull(value) {
      return value === null;
    }
    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */


    function isNil(value) {
      return value == null;
    }
    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */


    function isNumber(value) {
      return typeof value == 'number' || isObjectLike(value) && baseGetTag(value) == numberTag;
    }
    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */


    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }

      var proto = getPrototype(value);

      if (proto === null) {
        return true;
      }

      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */


    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */

    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }
    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */


    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */

    function isString(value) {
      return typeof value == 'string' || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
    }
    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */


    function isSymbol(value) {
      return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */


    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */

    function isUndefined(value) {
      return value === undefined;
    }
    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */


    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }
    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */


    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }
    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */


    var lt = createRelationalOperation(baseLt);
    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */

    var lte = createRelationalOperation(function (value, other) {
      return value <= other;
    });
    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */

    function toArray(value) {
      if (!value) {
        return [];
      }

      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }

      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }

      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
      return func(value);
    }
    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */


    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }

      value = toNumber(value);

      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }

      return value === value ? value : 0;
    }
    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */


    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */


    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }
    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */


    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }

      if (isSymbol(value)) {
        return NAN;
      }

      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
      }

      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }

      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */


    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }
    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */


    function toSafeInteger(value) {
      return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
    }
    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */


    function toString(value) {
      return value == null ? '' : baseToString(value);
    }
    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */


    var assign = createAssigner(function (object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }

      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });
    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */

    var assignIn = createAssigner(function (object, source) {
      copyObject(source, keysIn(source), object);
    });
    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */

    var assignInWith = createAssigner(function (object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });
    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */

    var assignWith = createAssigner(function (object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });
    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */

    var at = flatRest(baseAt);
    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */

    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }
    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */


    var defaults = baseRest(function (object, sources) {
      object = Object(object);
      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }

      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;

        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];

          if (value === undefined || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            object[key] = source[key];
          }
        }
      }

      return object;
    });
    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */

    var defaultsDeep = baseRest(function (args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });
    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */

    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }
    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */


    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }
    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */


    function forIn(object, iteratee) {
      return object == null ? object : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }
    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */


    function forInRight(object, iteratee) {
      return object == null ? object : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }
    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */


    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }
    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */


    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }
    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */


    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }
    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */


    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }
    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */


    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }
    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */


    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }
    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */


    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }
    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */


    var invert = createInverter(function (result, value, key) {
      if (value != null && typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      result[value] = key;
    }, constant(identity));
    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */

    var invertBy = createInverter(function (result, value, key) {
      if (value != null && typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);
    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */

    var invoke = baseRest(baseInvoke);
    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */

    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */


    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */


    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);
      baseForOwn(object, function (value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }
    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */


    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);
      baseForOwn(object, function (value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }
    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */


    var merge = createAssigner(function (object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });
    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */

    var mergeWith = createAssigner(function (object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });
    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */

    var omit = flatRest(function (object, paths) {
      var result = {};

      if (object == null) {
        return result;
      }

      var isDeep = false;
      paths = arrayMap(paths, function (path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);

      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }

      var length = paths.length;

      while (length--) {
        baseUnset(result, paths[length]);
      }

      return result;
    });
    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */

    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }
    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */


    var pick = flatRest(function (object, paths) {
      return object == null ? {} : basePick(object, paths);
    });
    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */

    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }

      var props = arrayMap(getAllKeysIn(object), function (prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function (value, path) {
        return predicate(value, path[0]);
      });
    }
    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */


    function result(object, path, defaultValue) {
      path = castPath(path, object);
      var index = -1,
          length = path.length; // Ensure the loop is entered when path is empty.

      if (!length) {
        length = 1;
        object = undefined;
      }

      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];

        if (value === undefined) {
          index = length;
          value = defaultValue;
        }

        object = isFunction(value) ? value.call(object) : value;
      }

      return object;
    }
    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */


    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }
    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */


    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }
    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */


    var toPairs = createToPairs(keys);
    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */

    var toPairsIn = createToPairs(keysIn);
    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */

    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);
      iteratee = getIteratee(iteratee, 4);

      if (accumulator == null) {
        var Ctor = object && object.constructor;

        if (isArrLike) {
          accumulator = isArr ? new Ctor() : [];
        } else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        } else {
          accumulator = {};
        }
      }

      (isArrLike ? arrayEach : baseForOwn)(object, function (value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }
    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */


    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }
    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */


    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }
    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */


    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }
    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */


    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }
    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */


    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }
    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */


    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }

      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }

      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }

      return baseClamp(toNumber(number), lower, upper);
    }
    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */


    function inRange(number, start, end) {
      start = toFinite(start);

      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }

      number = toNumber(number);
      return baseInRange(number, start, end);
    }
    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */


    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }

      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        } else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }

      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      } else {
        lower = toFinite(lower);

        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }

      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }

      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1))), upper);
      }

      return baseRandom(lower, upper);
    }
    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */


    var camelCase = createCompounder(function (result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });
    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */

    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }
    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */


    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }
    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */


    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);
      var length = string.length;
      position = position === undefined ? length : baseClamp(toInteger(position), 0, length);
      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }
    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */


    function escape(string) {
      string = toString(string);
      return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
    }
    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */


    function escapeRegExp(string) {
      string = toString(string);
      return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, '\\$&') : string;
    }
    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */


    var kebabCase = createCompounder(function (result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });
    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */

    var lowerCase = createCompounder(function (result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });
    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */

    var lowerFirst = createCaseFirst('toLowerCase');
    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */

    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);
      var strLength = length ? stringSize(string) : 0;

      if (!length || strLength >= length) {
        return string;
      }

      var mid = (length - strLength) / 2;
      return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
    }
    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */


    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);
      var strLength = length ? stringSize(string) : 0;
      return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
    }
    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */


    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);
      var strLength = length ? stringSize(string) : 0;
      return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
    }
    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */


    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }

      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }
    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */


    function repeat(string, n, guard) {
      if (guard ? isIterateeCall(string, n, guard) : n === undefined) {
        n = 1;
      } else {
        n = toInteger(n);
      }

      return baseRepeat(toString(string), n);
    }
    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */


    function replace() {
      var args = arguments,
          string = toString(args[0]);
      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }
    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */


    var snakeCase = createCompounder(function (result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });
    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */

    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }

      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;

      if (!limit) {
        return [];
      }

      string = toString(string);

      if (string && (typeof separator == 'string' || separator != null && !isRegExp(separator))) {
        separator = baseToString(separator);

        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }

      return string.split(separator, limit);
    }
    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */


    var startCase = createCompounder(function (result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });
    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */

    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }
    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */


    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }

      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);
      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);
      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '"; // Compile the regexp to match each delimiter.

      var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g'); // Use a sourceURL for easier debugging.
      // The sourceURL gets injected into the source that's eval-ed, so be careful
      // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
      // and escape the comment, thus injecting code that gets evaled.

      var sourceURL = '//# sourceURL=' + (hasOwnProperty.call(options, 'sourceURL') ? (options.sourceURL + '').replace(/\s/g, ' ') : 'lodash.templateSources[' + ++templateCounter + ']') + '\n';
      string.replace(reDelimiters, function (match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue); // Escape characters that can't be included in string literals.

        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar); // Replace delimiters with snippets.

        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }

        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }

        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }

        index = offset + match.length; // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.

        return match;
      });
      source += "';\n"; // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.

      var variable = hasOwnProperty.call(options, 'variable') && options.variable;

      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      } // Throw an error if a forbidden character was found in `variable`, to prevent
      // potential command injection attacks.
      else if (reForbiddenIdentifierChars.test(variable)) {
        throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
      } // Cleanup code by stripping empty strings.


      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;'); // Frame code as the function body.

      source = 'function(' + (variable || 'obj') + ') {\n' + (variable ? '' : 'obj || (obj = {});\n') + "var __t, __p = ''" + (isEscaping ? ', __e = _.escape' : '') + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
      var result = attempt(function () {
        return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
      }); // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.

      result.source = source;

      if (isError(result)) {
        throw result;
      }

      return result;
    }
    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */


    function toLower(value) {
      return toString(value).toLowerCase();
    }
    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */


    function toUpper(value) {
      return toString(value).toUpperCase();
    }
    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */


    function trim(string, chars, guard) {
      string = toString(string);

      if (string && (guard || chars === undefined)) {
        return baseTrim(string);
      }

      if (!string || !(chars = baseToString(chars))) {
        return string;
      }

      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;
      return castSlice(strSymbols, start, end).join('');
    }
    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */


    function trimEnd(string, chars, guard) {
      string = toString(string);

      if (string && (guard || chars === undefined)) {
        return string.slice(0, trimmedEndIndex(string) + 1);
      }

      if (!string || !(chars = baseToString(chars))) {
        return string;
      }

      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
      return castSlice(strSymbols, 0, end).join('');
    }
    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */


    function trimStart(string, chars, guard) {
      string = toString(string);

      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }

      if (!string || !(chars = baseToString(chars))) {
        return string;
      }

      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));
      return castSlice(strSymbols, start).join('');
    }
    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */


    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }

      string = toString(string);
      var strLength = string.length;

      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }

      if (length >= strLength) {
        return string;
      }

      var end = length - stringSize(omission);

      if (end < 1) {
        return omission;
      }

      var result = strSymbols ? castSlice(strSymbols, 0, end).join('') : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }

      if (strSymbols) {
        end += result.length - end;
      }

      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }

          separator.lastIndex = 0;

          while (match = separator.exec(substring)) {
            var newEnd = match.index;
          }

          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);

        if (index > -1) {
          result = result.slice(0, index);
        }
      }

      return result + omission;
    }
    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */


    function unescape(string) {
      string = toString(string);
      return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
    }
    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */


    var upperCase = createCompounder(function (result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });
    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */

    var upperFirst = createCaseFirst('toUpperCase');
    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */

    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }

      return string.match(pattern) || [];
    }
    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */


    var attempt = baseRest(function (func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });
    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */

    var bindAll = flatRest(function (object, methodNames) {
      arrayEach(methodNames, function (key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });
    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */

    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();
      pairs = !length ? [] : arrayMap(pairs, function (pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }

        return [toIteratee(pair[0]), pair[1]];
      });
      return baseRest(function (args) {
        var index = -1;

        while (++index < length) {
          var pair = pairs[index];

          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }
    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */


    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }
    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */


    function constant(value) {
      return function () {
        return value;
      };
    }
    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */


    function defaultTo(value, defaultValue) {
      return value == null || value !== value ? defaultValue : value;
    }
    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */


    var flow = createFlow();
    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */

    var flowRight = createFlow(true);
    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */

    function identity(value) {
      return value;
    }
    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */


    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }
    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */


    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }
    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */


    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }
    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */


    var method = baseRest(function (path, args) {
      return function (object) {
        return baseInvoke(object, path, args);
      };
    });
    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */

    var methodOf = baseRest(function (object, args) {
      return function (path) {
        return baseInvoke(object, path, args);
      };
    });
    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */

    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }

      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);
      arrayEach(methodNames, function (methodName) {
        var func = source[methodName];
        object[methodName] = func;

        if (isFunc) {
          object.prototype[methodName] = function () {
            var chainAll = this.__chain__;

            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);
              actions.push({
                'func': func,
                'args': arguments,
                'thisArg': object
              });
              result.__chain__ = chainAll;
              return result;
            }

            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });
      return object;
    }
    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */


    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }

      return this;
    }
    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */


    function noop() {// No operation performed.
    }
    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */


    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function (args) {
        return baseNth(args, n);
      });
    }
    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */


    var over = createOver(arrayMap);
    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */

    var overEvery = createOver(arrayEvery);
    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     *
     * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
     * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
     */

    var overSome = createOver(arraySome);
    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */

    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */


    function propertyOf(object) {
      return function (path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }
    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */


    var range = createRange();
    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */

    var rangeRight = createRange(true);
    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */

    function stubArray() {
      return [];
    }
    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */


    function stubFalse() {
      return false;
    }
    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */


    function stubObject() {
      return {};
    }
    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */


    function stubString() {
      return '';
    }
    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */


    function stubTrue() {
      return true;
    }
    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */


    function times(n, iteratee) {
      n = toInteger(n);

      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }

      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);
      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;
      var result = baseTimes(length, iteratee);

      while (++index < n) {
        iteratee(index);
      }

      return result;
    }
    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */


    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }

      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }
    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */


    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }
    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */


    var add = createMathOperation(function (augend, addend) {
      return augend + addend;
    }, 0);
    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */

    var ceil = createRound('ceil');
    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */

    var divide = createMathOperation(function (dividend, divisor) {
      return dividend / divisor;
    }, 1);
    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */

    var floor = createRound('floor');
    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */

    function max(array) {
      return array && array.length ? baseExtremum(array, identity, baseGt) : undefined;
    }
    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */


    function maxBy(array, iteratee) {
      return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseGt) : undefined;
    }
    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */


    function mean(array) {
      return baseMean(array, identity);
    }
    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */


    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }
    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */


    function min(array) {
      return array && array.length ? baseExtremum(array, identity, baseLt) : undefined;
    }
    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */


    function minBy(array, iteratee) {
      return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseLt) : undefined;
    }
    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */


    var multiply = createMathOperation(function (multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);
    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */

    var round = createRound('round');
    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */

    var subtract = createMathOperation(function (minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);
    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */

    function sum(array) {
      return array && array.length ? baseSum(array, identity) : 0;
    }
    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */


    function sumBy(array, iteratee) {
      return array && array.length ? baseSum(array, getIteratee(iteratee, 2)) : 0;
    }
    /*------------------------------------------------------------------------*/
    // Add methods that return wrapped values in chain sequences.


    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith; // Add aliases.

    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith; // Add methods to `lodash.prototype`.

    mixin(lodash, lodash);
    /*------------------------------------------------------------------------*/
    // Add methods that return unwrapped values in chain sequences.

    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst; // Add aliases.

    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;
    mixin(lodash, function () {
      var source = {};
      baseForOwn(lodash, function (func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }(), {
      'chain': false
    });
    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */

    lodash.VERSION = VERSION; // Assign default placeholders.

    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function (methodName) {
      lodash[methodName].placeholder = lodash;
    }); // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.

    arrayEach(['drop', 'take'], function (methodName, index) {
      LazyWrapper.prototype[methodName] = function (n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
        var result = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }

        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function (n) {
        return this.reverse()[methodName](n).reverse();
      };
    }); // Add `LazyWrapper` methods that accept an `iteratee` value.

    arrayEach(['filter', 'map', 'takeWhile'], function (methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function (iteratee) {
        var result = this.clone();

        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });

        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    }); // Add `LazyWrapper` methods for `_.head` and `_.last`.

    arrayEach(['head', 'last'], function (methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function () {
        return this[takeName](1).value()[0];
      };
    }); // Add `LazyWrapper` methods for `_.initial` and `_.tail`.

    arrayEach(['initial', 'tail'], function (methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function () {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function () {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function (predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function (predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function (path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }

      return this.map(function (value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function (predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function (start, end) {
      start = toInteger(start);
      var result = this;

      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }

      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }

      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }

      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function (predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function () {
      return this.take(MAX_ARRAY_LENGTH);
    }; // Add `LazyWrapper` methods to `lodash.prototype`.


    baseForOwn(LazyWrapper.prototype, function (func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? 'take' + (methodName == 'last' ? 'Right' : '') : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }

      lodash.prototype[methodName] = function () {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function (value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return isTaker && chainAll ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }

        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);

          result.__actions__.push({
            'func': thru,
            'args': [interceptor],
            'thisArg': undefined
          });

          return new LodashWrapper(result, chainAll);
        }

        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }

        result = this.thru(interceptor);
        return isUnwrapped ? isTaker ? result.value()[0] : result.value() : result;
      };
    }); // Add `Array` methods to `lodash.prototype`.

    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function (methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function () {
        var args = arguments;

        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }

        return this[chainName](function (value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    }); // Map minified method names to their real names.

    baseForOwn(LazyWrapper.prototype, function (func, methodName) {
      var lodashFunc = lodash[methodName];

      if (lodashFunc) {
        var key = lodashFunc.name + '';

        if (!hasOwnProperty.call(realNames, key)) {
          realNames[key] = [];
        }

        realNames[key].push({
          'name': methodName,
          'func': lodashFunc
        });
      }
    });
    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }]; // Add methods to `LazyWrapper`.

    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue; // Add chain sequence methods to the `lodash` wrapper.

    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue; // Add lazy aliases.

    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }

    return lodash;
  };
  /*--------------------------------------------------------------------------*/
  // Export lodash.


  var _ = runInContext(); // Some AMD build optimizers, like r.js, check for condition patterns like:


  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _; // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.

    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return _;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } // Check for `exports` after `define` in case a build optimizer adds it.
  else {}
}).call(this);

/***/ }),

/***/ 9839:
/*!*******************************************!*\
  !*** ./src/app/directive-if.directive.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectiveIfDirective": () => (/* binding */ DirectiveIfDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);


let DirectiveIfDirective = class DirectiveIfDirective {
    constructor(templateRef, container) {
        this.templateRef = templateRef;
        this.container = container;
        this.show = false;
    }
    set appDirectiveIf(show) {
        this.show ? this.container.createEmbeddedView(this.templateRef) : this.container.clear();
    }
};
DirectiveIfDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }
];
DirectiveIfDirective.propDecorators = {
    appDirectiveIf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
DirectiveIfDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[appDirectiveIf]'
    })
], DirectiveIfDirective);



/***/ }),

/***/ 9554:
/*!***************************************!*\
  !*** ./src/app/dragdrop.directive.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragdropDirective": () => (/* binding */ DragdropDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);


let DragdropDirective = class DragdropDirective {
    constructor(el) {
        this.el = el;
        this.xOffset = 0;
        this.yOffset = 0;
    }
    onDragEnd($event) {
        // this.dragOver.emit(false);
        $event.preventDefault();
        return false;
    }
    onDragOver($event) {
        $event.preventDefault();
        return false;
    }
    onDragEnter() {
        console.log('dragenter');
        // this.dragOver.emit(true);
    }
    onDragLeave() {
        // this.dragOver.emit(false);
    }
    // @HostListener('click') onclick(e: Event) {
    //   console.log('button');
    // }
    onMouseDown(event) {
        console.log('mousedown');
        // we make sure only draggables on the document elements are selected
        // if (event.target.getAttribute('draggable')) {
        console.log('mousedown');
        this.currentX = event.clientX;
        this.currentY = event.clientY;
        this.selectedElement = event.target;
        // ##### add this code.
        event.preventDefault(); // choose one
        // ##### or add this code.
        return false; // choose one
        // }
    }
    // someHandler(event): {
    //   let elements = document.elementsFromPoint(event.clientX, event.clientY);
    //   let target = elements.find(e => e.matches('#obscuring-div'));
    //   target.dispatchEvent(new DragEvent('drop', {
    //     // anything you need to pass; works without that in the simplest case
    //   }));
    // }
    dragStart(e) {
        if (e.type === "touchstart") {
            console.log(e.type);
            this.initialX = e.touches[0].clientX - this.xOffset;
            this.initialY = e.touches[0].clientY - this.yOffset;
        }
        else {
            this.initialX = e.clientX - this.xOffset;
            this.initialY = e.clientY - this.yOffset;
        }
        if (e.target === this.el.nativeElement) {
            this.canDrag = true;
        }
    }
    dragEnd(e) {
        this.initialX = this.currentX;
        this.initialY = this.currentY;
        this.canDrag = false;
    }
    drag(e) {
        if (this.canDrag) {
            e.preventDefault();
            if (e.type === "touchmove") {
                this.currentX = e.touches[0].clientX - this.initialX;
                this.currentY = e.touches[0].clientY - this.initialY;
            }
            else {
                this.currentX = e.clientX - this.initialX;
                this.currentY = e.clientY - this.initialY;
            }
            this.xOffset = this.currentX;
            this.yOffset = this.currentY;
            console.log('this.currentX', this.currentX, this.currentY);
            this.el.nativeElement.style.transform = `translate3d(${this.currentX}px, ${this.currentY}px, 0)`;
        }
    }
};
DragdropDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
DragdropDirective.propDecorators = {
    onDragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['dragend', ['$event'],] }],
    onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['dragover', ['$event'],] }],
    onDragEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['dragenter', ['$event'],] }],
    onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['dragleave', ['$event'],] }],
    onMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mousedown', ['$event'],] }],
    dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['touchstart', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mousedown', ['$event'],] }],
    dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['touchend', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mouseup', ['$event'],] }],
    drag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['touchmove', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mousemove', ['$event'],] }]
};
DragdropDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[appDragdrop]'
    })
], DragdropDirective);



/***/ }),

/***/ 2883:
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_raj_iot_ionicProjects_BLE_cordova_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./layout.component.html */ 1863);
/* harmony import */ var _layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.component.scss */ 2668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main */ 5044);
/* harmony import */ var _awesome_cordova_plugins_ble_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/ble/ngx */ 4280);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 7189);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _pages_iot_lab_layout_iot_lab_layout_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/iot-lab-layout/iot-lab-layout.page */ 8618);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ 8127);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ 6755);
/* harmony import */ var _awesome_cordova_plugins_device_motion_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/device-motion/ngx */ 7521);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api.service */ 238);





// import { element } from 'protractor';



const valModel = new _main__WEBPACK_IMPORTED_MODULE_2__.Main();






// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';



let LayoutComponent = class LayoutComponent {
    constructor(renderer, api, deviceMotion, toastController, actionSheetController, modalController, geolocation, platform, ble, zone) {
        // this.api.getBLEList().subscribe(res => {
        //   if (res) {
        //     this.dataParams.data = res;
        //     console.log(this.dataParams.data)
        //     this.deviceList = this.dataParams.data;
        //     this.show=true;
        this.renderer = renderer;
        this.api = api;
        this.deviceMotion = deviceMotion;
        this.toastController = toastController;
        this.actionSheetController = actionSheetController;
        this.modalController = modalController;
        this.geolocation = geolocation;
        this.platform = platform;
        this.ble = ble;
        this.zone = zone;
        this.state = "closed";
        this.hide = false;
        this.size = 'none';
        this.sizeImg1 = 'none';
        this.sizeImg2 = 'none';
        this.sizeImg3 = 'none';
        this.transForm = 'init';
        this.dataParams = new _main__WEBPACK_IMPORTED_MODULE_2__.dataparams();
        this.deviceList = [];
        this.imgData = [];
        this.locationList = [];
        this.currPosition = {
            lat: '', lng: '', datetime: '', error: '', header: '', text: '', loc: '', distance: '', rssi: '',
            x: '', y: '', z: '', currx: '', curry: '', currz: ''
        };
        this.slideOpts = {
            zoom: {
                minRatio: 10,
                maxRatio: 12,
                toggle: true,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed',
                effect: 'flip',
            }
        };
        this.show = false;
        this.svgElement = document.getElementById('layout');
        this.bounceName = 'bounceUp';
        this.imgWidth = '500';
        this.imgX = '110';
        this.imgY = '-180';
        this.currState = false;
        this.multipleState = 'state1';
        this.bounceImg1 = false;
        this.bounceImg3 = false;
        this.bounceImg4 = false;
        this.bounceImg2 = false;
        this.topPosToStartShowing = 100;
        //   }
        // })
        this.deviceList = valModel.staticList;
    }
    ngAfterViewInit() {
    }
    changeState() {
        if (this.currPosition.loc == 'IoT-Team') {
            this.transForm = 'position1';
            this.size = 'none';
            this.sizeImg2 = 'none';
            this.sizeImg3 = 'none';
            this.sizeImg1 = 'large';
            // console.log('1', this.size, this.sizeImg1)
            // bounce starts
            // setInterval(() => (this.bounceImg1 = !this.bounceImg1),1000);
            if (this.bounceImgInt1) {
                clearInterval(this.bounceImgInt1);
            }
            this.bounceImg3 = false;
            this.bounceImg4 = false;
            this.bounceImg2 = false;
            this.bounceImgInt1 = setInterval(() => (this.bounceImg1 = !this.bounceImg1), 1000);
            // 
            if (this.bounceImgInt2) {
                clearInterval(this.bounceImgInt2);
            }
            if (this.bounceImgInt3) {
                clearInterval(this.bounceImgInt3);
            }
            if (this.bounceImgInt4) {
                clearInterval(this.bounceImgInt4);
            }
        }
        else if (this.currPosition.loc == 'IoT-Lab') {
            this.transForm = 'position2';
            this.size = 'large';
            this.sizeImg1 = 'none';
            this.sizeImg2 = 'none';
            this.sizeImg3 = 'none';
            // setInterval(() => (this.bounceImg2 = !this.bounceImg2),1000);
            if (this.bounceImgInt2) {
                clearInterval(this.bounceImgInt2);
            }
            this.bounceImgInt2 = setInterval(() => (this.bounceImg2 = !this.bounceImg2), 1000);
            this.bounceImg3 = false;
            this.bounceImg4 = false;
            this.bounceImg1 = false;
            if (this.bounceImgInt1) {
                clearInterval(this.bounceImgInt1);
            }
            if (this.bounceImgInt3) {
                clearInterval(this.bounceImgInt3);
            }
            if (this.bounceImgInt4) {
                clearInterval(this.bounceImgInt4);
            }
        }
        else if (this.currPosition.loc == 'Network-Team') {
            this.transForm = 'position3';
            this.size = 'none';
            this.sizeImg1 = 'none';
            this.sizeImg2 = 'large';
            this.sizeImg3 = 'none';
            // console.log('2', this.size, this.sizeImg1)
            // setInterval(() => (this.bounceImg3 = !this.bounceImg3),1000);
            if (this.bounceImgInt3) {
                clearInterval(this.bounceImgInt3);
            }
            this.bounceImgInt3 = setInterval(() => (this.bounceImg3 = !this.bounceImg3), 1000);
            this.bounceImg1 = false;
            this.bounceImg4 = false;
            this.bounceImg2 = false;
            if (this.bounceImgInt1) {
                clearInterval(this.bounceImgInt1);
            }
            if (this.bounceImgInt2) {
                clearInterval(this.bounceImgInt2);
            }
            if (this.bounceImgInt4) {
                clearInterval(this.bounceImgInt4);
            }
        }
        else if (this.currPosition.loc == 'ISL-Entrance') {
            this.transForm = 'position4';
            this.size = 'none';
            this.sizeImg1 = 'none';
            this.sizeImg2 = 'none';
            this.sizeImg3 = 'large';
            // setInterval(() => (this.bounceImg4 = !this.bounceImg4),1000);
            if (this.bounceImgInt4) {
                clearInterval(this.bounceImgInt4);
            }
            this.bounceImgInt4 = setInterval(() => (this.bounceImg4 = !this.bounceImg4), 1000);
            this.bounceImg3 = false;
            this.bounceImg1 = false;
            this.bounceImg2 = false;
            if (this.bounceImgInt1) {
                clearInterval(this.bounceImgInt1);
            }
            if (this.bounceImgInt2) {
                clearInterval(this.bounceImgInt2);
            }
            if (this.bounceImgInt3) {
                clearInterval(this.bounceImgInt3);
            }
        }
        else {
            this.size = 'none';
            this.sizeImg1 = 'none';
            this.sizeImg2 = 'none';
            this.sizeImg3 = 'none';
            this.transForm = 'init';
            this.bounceImg1 = false;
            this.bounceImg3 = false;
            this.bounceImg4 = false;
            this.bounceImg2 = false;
            if (this.bounceImgInt1) {
                clearInterval(this.bounceImgInt1);
            }
            if (this.bounceImgInt2) {
                clearInterval(this.bounceImgInt2);
            }
            if (this.bounceImgInt3) {
                clearInterval(this.bounceImgInt3);
            }
            if (this.bounceImgInt4) {
                clearInterval(this.bounceImgInt4);
            }
        }
    }
    ngOnInit() {
        // this.bounceImgInt1 = setInterval(() => (this.bounceImg1 = !this.bounceImg1), 1000);
        // if(this.bounceImgInt1){
        //  clearInterval(this.bounceImgInt1)
        // }
        // this.bounceImgInt1=setInterval(() => (this.bounceImg1 = !this.bounceImg1),1000);
        this.pageLoad();
        // this.locationList = valModel.locationList.map(a => {
        //   a.x = a.x * 50;
        //   a.y = a.y * 150;
        //   return a
        // })
        // this.presentModal()
        // this.slides.zoom
        // Watch device acceleration
        // this.subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
        //   // console.log(acceleration);
        //   this.currPosition.x = acceleration.x;
        //   this.currPosition.y = acceleration.y;
        //   this.currPosition.z = acceleration.z;
        // });
    }
    loadPage() {
        this.pageLoad();
    }
    findNearestBLE() {
        let near = lodash__WEBPACK_IMPORTED_MODULE_6__.orderBy(this.deviceList, 'Distance', 'asc');
        this.presentToastWithOptions(near[0]);
        // console.log(near)
    }
    ngDoCheck() {
        // console.log('check')    
    }
    // 
    formatImgData() {
        // const List = valModel.staticList; //testing
        const List = this.deviceList;
        this.imgData = List.map((res, i) => {
            let newlist = new _main__WEBPACK_IMPORTED_MODULE_2__.bleDOMClass();
            newlist.rssi = res.rssi;
            newlist.id = res.id;
            newlist.name = res.name ? res.name : '';
            newlist.getDistance(res.rssi);
            newlist.top = res.top;
            newlist.left = res.left;
            return newlist;
        });
        // console.log(this.imgData)
    }
    pageLoad() {
        this.platform.ready().then(() => {
            this.watchLoc = this.geolocation.watchPosition({ enableHighAccuracy: true, timeout: 10000 });
            this.watch = this.watchLoc.subscribe((data) => {
                // console.log(data)
                if (data && data.coords) {
                    this.currPosition.lat = data.coords.latitude;
                    this.currPosition.lng = data.coords.longitude;
                    this.currPosition.datetime = data.timestamp;
                    this.scan();
                }
            });
            // 
        });
    }
    scan() {
        this.imgData = []; // clear list
        this.scanSubs = this.ble.scan([], 300).subscribe(res => {
            this.updatedata(res);
        });
    }
    updatedata(res) {
        this.zone.run(() => {
            let result = this.filterList(res);
            // console.log('result', result);      
            this.imgData.push(result);
            if (this.imgData.length > 0 && this.deviceList.length > 0) {
                for (let a of this.deviceList) {
                    let index = this.imgData.findIndex(ele => {
                        return ele.id == a.id;
                    });
                    if (index != -1) {
                        // id matches               
                        const data = this.imgData[index];
                        // make active
                        a.active = data.active;
                        a.rssi = data.rssi;
                        a.Distance = data.Distance;
                        a.N = data.N;
                        if (data.N == 4) {
                            a.strengthColor = '#00ff00'; //green
                        }
                        else if (data.N == 3) {
                            a.strengthColor = '#ffa500'; //orange
                        }
                        else if (data.N == 2) {
                            a.strengthColor = '#ff0000';
                        }
                        a.deviceColor = a.strengthColor;
                        a.circleColor = data.circleColor;
                    }
                }
                this.findNearestBLE();
            }
        });
        // console.log('this.imgData', this.imgData)
    }
    filterList(x) {
        // console.log('x', x)
        let newDevice = new _main__WEBPACK_IMPORTED_MODULE_2__.bleDOMClass();
        newDevice.getDistance(x.rssi);
        newDevice.rssi = x.rssi;
        newDevice.id = x.id;
        newDevice.name = x.name ? x.name : '';
        newDevice.getDistance(x.rssi);
        newDevice.isBLEMatched = false;
        newDevice.active = 'Active';
        // console.log(newDevice.circleColor)
        return newDevice;
    }
    // myRadius;
    myRadius() {
        // console.log('ds')
    }
    getBLE(record, type) {
        // console.log('ds',type)
        if (this.deviceList.length == 0) {
            return;
        }
        let arr = this.deviceList.filter((x) => {
            return x.SNo === record;
        });
        if (arr.length) {
            // console.log('ds',type)
            let meters;
            if (arr[0].Distance) {
                meters = arr[0].Distance;
            }
            return type == 'mac' ? arr[0].id : type == 'Dist' && arr[0].Distance ? `RSSI :${arr[0].rssi} @ ${meters} meters` : type == 'color' ? arr[0].deviceColor : type == 'status' ? arr[0].active.toUpperCase() : '';
        }
        else {
            return '';
        }
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_iot_lab_layout_iot_lab_layout_page__WEBPACK_IMPORTED_MODULE_5__.IotLabLayoutPage,
                cssClass: 'product-zoom-modal',
                // componentProps: {
                //       imgurl : img_url
                // },
                // presentingElement: await this.modalCtrl.getTop()
            });
            return yield modal.present();
        });
    }
    presentToastWithOptions(res) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // console.log(res)
            this.currPosition.loc = '';
            this.currPosition.rssi = '';
            let str;
            let colr;
            let hdr;
            let newIcon;
            if (res.Distance && res.rssi) {
                this.currPosition.id = res.id;
                this.currPosition.rssi = `${res.rssi}`;
                str = `MAC:${res.id} ,RSSI ${res.rssi} at a distance of ${res.Distance} meters`;
                colr = 'success';
                hdr = 'Nearby BLE is,';
                newIcon = 'bluetooth-outline';
                this.currPosition.loc = res.loc;
                this.currPosition.distance = res.Distance;
                this.currPosition.circleColor = res.circleColor;
                this.sendNotification();
                const item = new _main__WEBPACK_IMPORTED_MODULE_2__.bleDOMClass();
                const state = item.getNearByLocated(this.currPosition.distance);
                if (state) {
                    this.currState = state;
                    this.isLocated(this.currPosition, this.currPosition.loc);
                }
                else {
                    // if out of range
                    this.currState = state;
                    this.size = 'none';
                    this.sizeImg1 = 'none';
                    this.sizeImg2 = 'none';
                    this.sizeImg3 = 'none';
                    this.transForm = 'init';
                }
                console.log(this.currState);
            }
            else {
                this.currPosition.circleColor = '';
                this.currPosition.loc = '';
                this.currPosition.rssi = '';
                this.currPosition.id = '';
                str = ``;
                colr = 'warning';
                hdr = 'No Active Device';
                newIcon = 'alert-circle-outline';
                this.sendNotification();
            }
            this.currPosition.color = colr;
            this.currPosition.text = str;
            this.currPosition.icon = newIcon;
            this.currPosition.header = hdr;
            console.log('this.currPosition', this.currPosition);
        });
    }
    sendNotification() {
        // Schedule a single notification
        // this.localNotifications.schedule({
        //   id: 1,
        //   text: 'BLE-Notifications',
        //   // sound: isAndroid ? 'file://sound.mp3' : 'file://beep.caf',
        //   data: { mydata: this.currPosition.text }
        // });
    }
    createNewBLE(e) {
    }
    ngOnDestroy() {
        this.kill();
    }
    ionViewWillLeave() {
        this.kill();
    }
    kill() {
        this.watchLoc.unsubscribe();
        this.watch.unsubscribe();
        this.scanSubs.unsubscribe();
        this.subscription.unsubscribe();
    }
    isLocated(ble, loc) {
        // console.log('isLocated', ble.loc, loc)    
        // var circle = document.getElementById(loc);
        this.changeState();
        // console.log('state', circle)
        // var interval = 30;
        // var angle = 20;
        // var angle_increment = 6;
        // circle.setAttribute("stroke-dasharray", angle + ", 20000");
    }
    checkScroll() {
        // window의 scroll top
        // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        console.log('[scroll]', scrollPosition);
        if (scrollPosition >= this.topPosToStartShowing) {
            this.isShow = true;
        }
        else {
            this.isShow = false;
        }
    }
    jonu(x) {
        // // console.log(x)
        // const circle = document.getElementById('IoT-Team');
        // var myTimer = document.getElementById('myTimer');
        // var interval = 30;
        // var angle = 20;
        // var angle_increment = 6;
        // // this.isLocated(this.deviceList[0], this.deviceList[0].loc)
        // // circle.setAttribute("stroke", 'blue');
        // circle.setAttribute("stroke-dasharray", angle + ", 20000");
        // circle.scrollTop += 140;
    }
    zoomImage() {
    }
};
LayoutComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Renderer2 },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_8__.ApiService },
    { type: _awesome_cordova_plugins_device_motion_ngx__WEBPACK_IMPORTED_MODULE_7__.DeviceMotion },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _awesome_cordova_plugins_ble_ngx__WEBPACK_IMPORTED_MODULE_3__.BLE },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone }
];
LayoutComponent.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSlides,] }]
};
LayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-layout',
        template: _D_raj_iot_ionicProjects_BLE_cordova_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_awesome_cordova_plugins_ble_ngx__WEBPACK_IMPORTED_MODULE_3__.BLE, _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation, _awesome_cordova_plugins_device_motion_ngx__WEBPACK_IMPORTED_MODULE_7__.DeviceMotion],
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('transition', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('init', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
                    transform: 'translate3d(-24px, 197px, 0px) scale(1.8)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('position1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
                // transform: 'translate3d(-24px, 1000px, 0px) scale(5)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('position2', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
                    transform: 'translate3d(-304px, 600px, 0px) scale(5)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('position3', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
                    transform: 'translate3d(24px, 600px, 0px) scale(5)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('position4', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
                    transform: 'translate3d(-354px, -100px, 0px) scale(5)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('init=>position1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('400ms ease-in-out')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('init=>position2', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('400ms ease-in-out')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('init=>position3', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('400ms ease-in-out')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('init=>position4', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('400ms ease-in-out')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('position1=>init', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('400ms ease-in-out')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('position2=>init', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('400ms ease-in-out')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('position3=>init', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('400ms ease-in-out')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('position4=>init', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('400ms ease-in-out')),
            ]),
            // bounce img1 starts
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('bounce', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('* => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)(1000, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.keyframes)([
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({ transform: 'scale(.6)', offset: 0 }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
                            transform: 'scale(1.5)',
                            offset: 0.33,
                        }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({ transform: 'scale(.6)', offset: 1.0 }),
                    ])),
                ]),
            ]),
        ],
        styles: [_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LayoutComponent);



/***/ }),

/***/ 9561:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 4787);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4250:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 4787);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 456);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 9561);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/layout.component */ 2883);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 1382);
/* harmony import */ var _zoom_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../zoom.directive */ 1230);
/* harmony import */ var _dragdrop_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dragdrop.directive */ 9554);
/* harmony import */ var _directive_if_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directive-if.directive */ 9839);
/* harmony import */ var _tab2_dynamic_layout_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tab2/dynamic-layout/dynamic-layout.component */ 8966);














let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page, _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent, _zoom_directive__WEBPACK_IMPORTED_MODULE_5__.ZoomDirective,
            _dragdrop_directive__WEBPACK_IMPORTED_MODULE_6__.DragdropDirective, _directive_if_directive__WEBPACK_IMPORTED_MODULE_7__.DirectiveIfDirective, _tab2_dynamic_layout_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_8__.DynamicLayoutComponent]
    })
], Tab2PageModule);



/***/ }),

/***/ 4787:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_raj_iot_ionicProjects_BLE_cordova_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab2.page.html */ 2040);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Tab2Page = class Tab2Page {
    constructor() { }
};
Tab2Page.ctorParameters = () => [];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab2',
        template: _D_raj_iot_ionicProjects_BLE_cordova_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 1230:
/*!***********************************!*\
  !*** ./src/app/zoom.directive.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZoomDirective": () => (/* binding */ ZoomDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);


let ZoomDirective = class ZoomDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.numberOfClicks = 0;
        this.isToggled = false;
    }
    highlight(color) {
        // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
    }
    onclick(e) {
        console.log('button', this.numberOfClicks++);
        this.isToggled = !this.isToggled;
        if (this.isToggled) {
            this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate3d(-24px, 197px, 30px) scale(2.8)');
        }
        else {
            this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate3d(-24px, 197px, 0px) scale(1)');
        }
    }
};
ZoomDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
ZoomDirective.propDecorators = {
    onclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['click',] }]
};
ZoomDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[appZoom]'
    })
], ZoomDirective);



/***/ }),

/***/ 1863:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layout/layout.component.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content color=\"light\" [fullscreen]=\"true\">\n\n\n  <!-- <div [style.top.px]=\"locationList[0].x\" [style.left.px]=\"locationList[0].y\" class=\"myble\">\n    BLE\n  </div> -->\n\n  <div class=\"zoom-box\">\n    <!-- <div  appZoom id=\"layout\" class=\"div1 layout\">\n      <img  appDragdrop width=\"500\"  height=\"250\" src=\"assets/activeBLE.png\" />\n\n      <div *ngFor=\"let a of deviceList\" class=\"square\">\n        {{a.id}}\n        <img  appDragdrop width=\"500\"  height=\"250\" src=\"assets/activeBLE.png\" />\n\n      </div>\n    \n      <span class=\"span1\">Lab</span>\n    </div> -->\n\n    <!-- <ion-slides pager=\"true\" [options]=\"slideOpts\" zoom>\n      <ion-slide> -->\n        <div #slides class=\"swiper-zoom-container\">\n\n          \n          <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\"\n            xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"869px\" height=\"1817px\"\n            viewBox=\"0 0 869 1817\" enable-background=\"new 0 0 869 1817\" xml:space=\"preserve\">\n\n            <!-- <defs>\n            </defs> -->\n            <!-- <rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"transparent\"></rect> -->\n            <g transform=\"matrix(1 0 0 1 540 540)\" id=\"6a829e09-0edf-437c-9773-ef386073861e\">\n              <!-- <rect\n                style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\"\n                vector-effect=\"non-scaling-stroke\" x=\"-540\" y=\"-540\" rx=\"0\" ry=\"0\" width=\"1080\" height=\"1080\" /> -->\n            </g>\n            <g transform=\"matrix(1 0 0 1 540 540)\" id=\"c0e1dcf4-d501-4f66-a170-52852f87e0e2\">\n            </g>\n            <g transform=\"matrix(0.59 0 0 0.59 471.69 576.11)\" id=\"add872d2-2dbd-4cb2-b7cc-540b74c249a9\">\n              <image\n                style=\"stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;\"\n                vector-effect=\"non-scaling-stroke\"\n                xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA2UAAAcZCAYAAAB02bj6AAAAAXNSR0IArs4c6QAAIABJREFUeF7snQmYVcWZ/j8buoFulmZfG2w2wbZBIiQg4uAQTFRUiEtEwmRMYgzJZHWJMRpn1ExMjMmMSWT+YwwZd42YuESDhISIGFBZFRdkX2SHZoemaf7PW+Rc7719lzp16mz3vvU8Pgi31t9X5956z1f11SknTpw4IUwkQAIkQAIkQAIkQAIkQAIkQAKhEDiFoiwU7myUBEiABEiABEiABEiABEiABBQBijJOBBIgARIgARIgARIgARIgARIIkQBFWYjw2TQJkAAJkAAJkAAJkAAJkAAJUJRxDpAACZAACZAACZAACZAACZBAiAQoykKEz6ZJgARIgARIgARIgARIgARIgKKMc4AESIAESIAESIAESIAESIAEQiRAURYifDZNAiRAAiRAAiRAAiRAAiRAAhRlnAMkQAIkQAIkQAIkQAIkQAIkECIBirIQ4bNpEiABEiABEiABEiABEiABEqAo4xwgARIgARIgARIgARIgARIggRAJUJSFCJ9NkwAJkAAJkAAJkAAJkAAJkABFGecACZAACZAACZAACZAACZAACYRIgKIsRPhsmgRIgARIgARIgARIgARIgAQoyjgHSIAESIAESIAESIAESIAESCBEAhRlIcJn0yRAAiRAAiRAAiRAAiRAAiRAUcY5QAIkQAIkQAIkQAIkQAIkQAIhEqAoCxE+myYBEiABEiABEiABEiABEiABijLOARIgARIgARIgARIgARIgARIIkQBFWYjw2TQJkAAJkAAJkAAJkAAJkAAJUJRxDpAACZAACZAACZAACZAACZBAiAQoykKEz6ZJgARIgARIgARIgARIgARIgKKMc4AESIAESIAESIAESIAESIAEQiRAURYifDZNAiRAAiRAAiRAAiRAAiRAAhRlnAMkQAIkQAIkQAIkQAIkQAIkECIBirIQ4bNpEiABEiABEiABEiABEiABEqAo4xwgARIgARIgARIgARIgARIggRAJUJSFCJ9NkwAJkAAJkAAJkAAJkAAJkABFGecACZAACZAACZAACZAACZAACYRIgKIsRPhsmgRIgARIgARIgARIgARIgAQoyjgHSIAESIAESIAESIAESIAESCBEAhRlIcJn0yRAAiRAAiRAAiRAAiRAAiRA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\"\n                x=\"-434.5\" y=\"-908.5\" width=\"869\" height=\"1817\"></image>\n            </g>\n            <g transform=\"matrix(0.21 0 0 0.19 309.34 125.48)\" style=\"\" id=\"830663b2-1c81-4298-a967-b4c99b79a897\">\n\n              <circle cx=\"100\" cy=\"100\" r=\"57\" id=\"IoT-Team\" fill=\"none\" stroke=\"#e40000\" stroke-width=\"40\"\n                stroke-dasharray=\"0,20000\" transform=\"rotate(-90,100,100)\" />\n\n              <image width=\"500\"  [@bounce]=\"bounceImg1\" *ngIf=\"getBLE(1,'status')=='ACTIVE'\" height=\"250\" href=\"assets/activeBLE.png\" />\n              <image width=\"500\" *ngIf=\"getBLE(1,'status')!='ACTIVE'\" height=\"250\" href=\"assets/inactiveBLE.png\" />\n\n              <text class=\"mainsvg\" xml:space=\"preserve\" font-family=\"Roboto\" font-size=\"35\" font-style=\"normal\"\n                font-weight=\"600\"\n                style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: blue; fill-rule: nonzero; opacity: 1; white-space: pre;\">\n                <tspan x=\"-115.37\" y=\"-25.13\">{{getBLE(1,'status')}}</tspan>\n                <tspan x=\"-115.37\" y=\"25.13\">MAC :{{getBLE(1,'mac')}}</tspan>\n                <tspan x=\"-115.37\" y=\"66.13\">{{getBLE(1,'Dist')}}</tspan>\n              </text>\n            </g>\n\n\n            <g transform=\"matrix(0.21 0 0 0.19 619.34 487.48)\" style=\"\" id=\"830663b2-1c81-4298-a967-b4c99b79a897\">\n\n\n              <circle cx=\"100\" cy=\"100\" r=\"57\" id=\"IoT-Lab\" fill=\"none\" stroke=\"#e40000\" stroke-width=\"40\"\n                stroke-dasharray=\"0,20000\" transform=\"rotate(-90,100,100)\" />\n              <image [@bounce]=\"bounceImg2\" *ngIf=\"getBLE(2,'status')=='ACTIVE'\" width=\"500\"  height=\"250\" href=\"assets/activeBLE.png\" />\n              <image width=\"500\" *ngIf=\"getBLE(2,'status')!='ACTIVE'\" height=\"250\" href=\"assets/inactiveBLE.png\" />\n\n              <text class=\"mainsvg\" xml:space=\"preserve\" font-family=\"Roboto\" font-size=\"35\" font-style=\"normal\"\n                font-weight=\"600\"\n                style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: blue; fill-rule: nonzero; opacity: 1; white-space: pre;\">\n                <tspan x=\"-115.37\" y=\"-25.13\">{{getBLE(2,'status')}}</tspan>\n                <tspan x=\"-115.37\" y=\"25.13\">MAC :{{getBLE(2,'mac')}}</tspan>\n                <tspan x=\"-115.37\" y=\"66.13\">{{getBLE(2,'Dist')}}</tspan>\n              </text>\n            </g>\n\n            <!-- 3rd BLE starts -->\n\n            <g transform=\"matrix(0.21 0 0 0.19 359.34 480.48)\" style=\"\" id=\"830663b2-1c81-4298-a967-b4c99b79a897\">\n\n              <circle cx=\"100\" cy=\"100\" r=\"57\" id=\"Network-Team\" fill=\"none\" stroke=\"#e40000\" stroke-width=\"40\"\n                stroke-dasharray=\"0,20000\" transform=\"rotate(-90,100,100)\" />\n              <image width=\"500\" [@bounce]=\"bounceImg3\" *ngIf=\"getBLE(3,'status')=='ACTIVE'\" height=\"250\" href=\"assets/activeBLE.png\" />\n              <image width=\"500\" *ngIf=\"getBLE(3,'status')!='ACTIVE'\" height=\"250\" href=\"assets/inactiveBLE.png\" />\n\n              <text class=\"mainsvg\" xml:space=\"preserve\" font-family=\"Roboto\" font-size=\"35\" font-style=\"normal\"\n                font-weight=\"600\"\n                style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: blue; fill-rule: nonzero; opacity: 1; white-space: pre;\">\n                <tspan x=\"-115.37\" y=\"-25.13\">{{getBLE(3,'status')}}</tspan>\n                <tspan x=\"-115.37\" y=\"25.13\">MAC :{{getBLE(3,'mac')}}</tspan>\n                <tspan x=\"-115.37\" y=\"66.13\">{{getBLE(3,'Dist')}}</tspan>\n\n              </text>\n            </g>\n\n            <!-- 4th BLE starts -->\n            <g transform=\"matrix(0.21 0 0 0.19 685.34 880.48)\" style=\"\" id=\"gble4\">\n              <circle cx=\"100\" cy=\"100\" r=\"57\" id=\"ISL-Entrance\" fill=\"none\" stroke=\"#e40000\" stroke-width=\"40\"\n                stroke-dasharray=\"0,20000\" transform=\"rotate(-90,100,100)\" />\n              <image width=\"500\" [@bounce]=\"bounceImg4\" *ngIf=\"getBLE(4,'status')=='ACTIVE'\" height=\"250\" href=\"assets/activeBLE.png\" />\n              <image width=\"500\" *ngIf=\"getBLE(4,'status')!='ACTIVE'\" height=\"250\" href=\"assets/inactiveBLE.png\" />\n\n              <text id=\"myTimer\" text-anchor=\"middle\" x=\"100\" y=\"110\" style=\"font-size: 36px;\"></text>\n\n              <text class=\"mainsvg\" xml:space=\"preserve\" font-family=\"Roboto\" font-size=\"35\" font-style=\"normal\"\n                font-weight=\"600\"\n                style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: blue; fill-rule: nonzero; opacity: 1; white-space: pre;\">\n                <tspan x=\"-115.37\" y=\"-25.13\">{{getBLE(4,'status')}}</tspan>\n                <tspan x=\"-115.37\" y=\"25.13\">MAC :{{getBLE(4,'mac')}}</tspan>\n                <tspan x=\"-115.37\" y=\"66.13\">{{getBLE(4,'Dist')}}</tspan>\n              </text>\n            </g>\n\n          </svg>\n\n        </div>\n\n  </div>\n\n\n\n  <div *ngIf=\"deviceList.length>0 && currPosition.lat\" class=\"position\">\n    <ion-card class=\"bottom-cnt\">\n      <ion-grid>\n        <ion-row class=\"ion-justify-content-start\">\n          <ion-col class=\"ion-no-padding\">\n            <ion-card-subtitle class=\"ion-no-padding\">{{currPosition.header}}</ion-card-subtitle>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"currPosition.rssi\" class=\"ion-justify-content-start\">\n          <ion-col class=\"ion-no-padding\" size=\"2\">\n            <div style=\"height: 100%;display: flex;flex-direction: row;align-items: center;justify-content: center;\">\n              <ion-icon [color]=\"currPosition.color\" size=\"large\" name=\"bluetooth-outline\"></ion-icon>\n\n            </div>\n          </ion-col>\n\n          <ion-col class=\"ion-no-padding\" size=\"10\">\n            <ion-card-subtitle class=\"ion-no-padding\">\n              {{currPosition.text}}\n            </ion-card-subtitle>\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n          <ion-col class=\"ion-no-padding\" size=\"12\">\n            <ion-card-content class=\"ion-no-padding\" color=\"dark\" *ngIf=\"currPosition.rssi && currState\">\n              <ion-card-subtitle>\n                <ion-badge color=\"success\">\n\n                  Curr. Location : {{currPosition.loc}}\n                </ion-badge>\n              </ion-card-subtitle>\n            </ion-card-content>\n          </ion-col>\n\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card>\n\n  </div>\n\n  <!-- <div *ngIf=\"currPosition.lat\" class=\"loc-position\">\n    <ion-col class=\"ion-no-padding\" size=\"12\">\n      <div class=\"flexcss\">\n        <div>\n          <ion-badge>\n            X : {{currPosition.x?currPosition.x:'86876667676'}}\n          </ion-badge>\n        </div>\n        <div>\n          <ion-badge>\n\n            Y : {{currPosition.y?currPosition.y:'.4336656323'}}\n          </ion-badge>\n        </div>\n        <div>\n          <ion-badge>\n            Z : {{currPosition.z?currPosition.z:'09978675446'}}\n          </ion-badge>\n        </div>\n      </div>\n    </ion-col>\n  </div> -->\n\n</ion-content>");

/***/ }),

/***/ 2040:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab2/tab2.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>\n      Installed Devices \n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content color=\"dark\" [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"small\">Installed Devices</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-layout ></app-layout>\n  <!-- <app-dynamic-layout></app-dynamic-layout> -->\n</ion-content>\n");

/***/ }),

/***/ 2668:
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  position: relative;\n}\n\n.swiper-zoom-container {\n  width: 100%;\n  transition: 0.5s all;\n}\n\n.myble {\n  position: absolute;\n  z-index: 3;\n  background: #ddd;\n}\n\n.swiper-wrapper {\n  background-color: #fff !important;\n}\n\nsvg {\n  width: 100%;\n  height: 100%;\n}\n\n#Layer_1 {\n  transform: translate3d(-48px, 207px, 0px) scale(1.7);\n}\n\n.layout {\n  position: relative;\n  height: 100%;\n  background-image: url(\"/assets/office-layout.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  transition: 0.5s all;\n}\n\n.ion-chip {\n  position: relative;\n  background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);\n  padding: 5px;\n  border-radius: 3px;\n}\n\n.ion-chip .chip-tooltip {\n  position: absolute;\n  z-index: 6;\n  top: -25px;\n  width: 100%;\n}\n\n.inner-chip {\n  display: flex;\n  flex-direction: column;\n}\n\n.inner-chip ion-card-subtitle {\n  color: #fff;\n}\n\n.position {\n  width: 100%;\n  position: absolute;\n  z-index: 32;\n  bottom: 55px;\n  background: rgba(0, 0, 0, 0.4);\n  padding: 0px;\n  transition: 0.5s all;\n}\n\n.bottom-cnt {\n  background: #5260ff;\n  color: #fff;\n}\n\n.bottom-cnt ion-card-subtitle {\n  color: #fff;\n  font-size: 0.7em;\n}\n\n.loc-position {\n  left: 0px;\n  background: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  z-index: 32;\n  top: 0px;\n  padding: 2px 5px;\n  width: 100%;\n  transition: 0.5s all;\n}\n\nion-slides {\n  width: 100%;\n}\n\n.swiper-slide img {\n  width: 100%;\n  max-width: 100%;\n}\n\n.square {\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n  height: 50px;\n  background-color: royalblue;\n}\n\n.square img {\n  width: 25px;\n  height: 25px;\n}\n\n.zoom-box {\n  position: fixed;\n  height: 100%;\n  top: 0px;\n  display: flex;\n  width: 100%;\n  background-color: #fff;\n  transition: 0.5s all;\n}\n\n.card-img {\n  position: relative;\n}\n\n.device {\n  position: absolute;\n  z-index: 6;\n}\n\nion-card-subtitle ion-badge {\n  color: #000;\n  font-size: 0.7em;\n}\n\n#IoT-TeamImg {\n  position: relative;\n}\n\n.flexcss {\n  display: flex;\n  flex-direction: column;\n}\n\n.flexcss ion-badge {\n  color: #bae22b;\n  --ion-background-color: transparent;\n  background-color: transparent;\n  letter-spacing: 3px;\n}\n\n#hel {\n  position: relative;\n}\n\n#hel::after, #IoT-TeamImg::after {\n  position: absolute;\n  width: 120px;\n  height: 40px;\n  background: red;\n}\n\n.animatCicle {\n  position: absolute;\n  width: 120px;\n  height: 40px;\n  background: red;\n}\n\n.div1 {\n  position: relative;\n}\n\n.span1 {\n  position: absolute;\n  z-index: 3;\n  width: min-100px;\n  background: red;\n}\n\n.div1 span:first-child {\n  background: blue !important;\n  left: 40%;\n}\n\n.div1 span:nth-child(2) {\n  right: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxpQ0FBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFLSjs7QUFEQTtFQUNJLG9EQUFBO0FBSUo7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrREFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUVKOztBQUlJO0VBQ0ksa0JBQUE7RUFDQSw0REFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURSOztBQUdRO0VBQ0ksa0JBQUE7RUFBbUIsVUFBQTtFQUFXLFVBQUE7RUFBVSxXQUFBO0FBRXBEOztBQUVJO0VBQ0ksYUFBQTtFQUFjLHNCQUFBO0FBRXRCOztBQURRO0VBQ0ksV0FBQTtBQUdaOztBQUFBO0VBQ0ksV0FBQTtFQUFhLGtCQUFBO0VBQW1CLFdBQUE7RUFBWSxZQUFBO0VBQWEsOEJBQUE7RUFBMkIsWUFBQTtFQUNwRixvQkFBQTtBQVFKOztBQU5BO0VBQ0ksbUJBQUE7RUFBb0IsV0FBQTtBQVV4Qjs7QUFUSTtFQUNJLFdBQUE7RUFBVyxnQkFBQTtBQVluQjs7QUFUQTtFQUNJLFNBQUE7RUFBVSw4QkFBQTtFQUNWLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUFpQixXQUFBO0VBQ2pCLG9CQUFBO0FBY0o7O0FBWkE7RUFDSSxXQUFBO0FBZUo7O0FBYkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQWdCSjs7QUFiQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUFnQko7O0FBZkc7RUFBSSxXQUFBO0VBQ0EsWUFBQTtBQWtCUDs7QUFkQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQWlCSjs7QUFmQTtFQUNJLGtCQUFBO0FBa0JKOztBQWhCQTtFQUNJLGtCQUFBO0VBQW1CLFVBQUE7QUFvQnZCOztBQWZJO0VBQ0ksV0FBQTtFQUFXLGdCQUFBO0FBbUJuQjs7QUFoQkE7RUFDSSxrQkFBQTtBQW1CSjs7QUFmQTtFQUNJLGFBQUE7RUFBYyxzQkFBQTtBQW1CbEI7O0FBbEJJO0VBQ0ksY0FBQTtFQUFrQixtQ0FBQTtFQUNsQiw2QkFBQTtFQUFrQyxtQkFBQTtBQXNCMUM7O0FBbkJBO0VBQ0ksa0JBQUE7QUFzQko7O0FBcEJBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUF1Qko7O0FBckJBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUF3Qko7O0FBckJBO0VBQ0ksa0JBQUE7QUF3Qko7O0FBdEJJO0VBQ0Esa0JBQUE7RUFBa0IsVUFBQTtFQUNsQixnQkFBQTtFQUNBLGVBQUE7QUEwQko7O0FBdkJJO0VBQ0EsMkJBQUE7RUFFQSxTQUFBO0FBeUJKOztBQXZCSTtFQUNJLFNBQUE7QUEwQlIiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnN3aXBlci16b29tLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogLjUwcyBhbGw7XHJcbn1cclxuLm15Ymxle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbn1cclxuLnN3aXBlci13cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcbn1cclxuc3Zne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBcclxufVxyXG5cclxuI0xheWVyXzF7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00OHB4LCAyMDdweCwgMHB4KSBzY2FsZSgxLjcpO1xyXG59XHJcbi56b29tQkxFMXtcclxuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI0cHgsIDE5N3B4LCAwcHgpIHNjYWxlKDIuOCk7XHJcbn1cclxuLmxheW91dHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvb2ZmaWNlLWxheW91dC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHRyYW5zaXRpb246IC41cyBhbGw7XHJcbn1cclxuI2xheW91dHtcclxuXHJcbn1cclxuXHJcbiAgICAuaW9uLWNoaXB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzRiNmNiNyAwJSwgIzE4Mjg0OCAxMDAlKTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIC5jaGlwLXRvb2x0aXB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTt6LWluZGV4OiA2O3RvcDotMjVweDt3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ICAgICBcclxuICAgIH1cclxuICAgIC5pbm5lci1jaGlwe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBpb24tY2FyZC1zdWJ0aXRsZXtcclxuICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbi5wb3NpdGlvbntcclxuICAgIHdpZHRoOiAxMDAlOyBwb3NpdGlvbjogYWJzb2x1dGU7ei1pbmRleDogMzI7Ym90dG9tOiA1NXB4O2JhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjQpO3BhZGRpbmc6IDBweDtcclxuICAgIHRyYW5zaXRpb246IC41cyBhbGw7XHJcbn1cclxuLmJvdHRvbS1jbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTI2MGZmO2NvbG9yOiNmZmY7XHJcbiAgICBpb24tY2FyZC1zdWJ0aXRsZXtcclxuICAgICAgICBjb2xvcjojZmZmO2ZvbnQtc2l6ZTouN2VtO1xyXG4gICAgfVxyXG59XHJcbi5sb2MtcG9zaXRpb257XHJcbiAgICBsZWZ0OiAwcHg7YmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAzMjtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZzogMnB4IDVweDt3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IC41cyBhbGw7XHJcbn1cclxuaW9uLXNsaWRlcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uc3dpcGVyLXNsaWRlIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIC8vIGJvcmRlcjoxcHggc29saWQgcmVkXHJcbn1cclxuLnNxdWFyZSB7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xyXG4gICBpbWd7d2lkdGg6IDI1cHg7XHJcbiAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgIH1cclxuICB9XHJcbiAgXHJcbi56b29tLWJveCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7ICAgXHJcbiAgICB0b3A6IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXMgYWxsO1xyXG59XHJcbi5jYXJkLWltZ3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZGV2aWNle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO3otaW5kZXg6IDY7XHJcbiAgICAvLyAgd2lkdGg6IDEzNXB4O1xyXG5cclxufVxyXG5pb24tY2FyZC1zdWJ0aXRsZXtcclxuICAgIGlvbi1iYWRnZXtcclxuICAgICAgICBjb2xvcjojMDAwO2ZvbnQtc2l6ZTogLjdlbTtcclxuICAgIH1cclxufVxyXG4jSW9ULVRlYW1JbWd7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4uZmxleGNzc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGlvbi1iYWRnZXtcclxuICAgICAgICBjb2xvcjojYmFlMjJiOyAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgIH1cclxufVxyXG4jaGVse1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiNoZWw6OmFmdGVyLCNJb1QtVGVhbUltZzo6YWZ0ZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7IFxyXG59XHJcbi5hbmltYXRDaWNsZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxufVxyXG5cclxuLmRpdjF7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZVxyXG4gICAgfVxyXG4gICAgLnNwYW4xe1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDozO1xyXG4gICAgd2lkdGg6bWluLTEwMHB4O1xyXG4gICAgYmFja2dyb3VuZDpyZWQ7XHJcbiAgICBcclxuICAgIH1cclxuICAgIC5kaXYxIHNwYW46Zmlyc3QtY2hpbGR7XHJcbiAgICBiYWNrZ3JvdW5kOmJsdWUgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgbGVmdDo0MCVcclxuICAgIH1cclxuICAgIC5kaXYxIHNwYW46bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgIHJpZ2h0OjMlXHJcbiAgICAgICAgfVxyXG4gICAgICAgICJdfQ== */";

/***/ }),

/***/ 282:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map