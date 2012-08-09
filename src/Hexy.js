/**
 * Hexy.js v0.1.0
 * By Steven Sojka
 *
 * Allows manipulation of RGB values and hex values.
 * 
 */
(function(exports) {

  'use strict';

  /////////////////////
  // Private Methods //
  /////////////////////

  // Check to see if object is an array
  var _isArray = function(a) {
    return Object.prototype.toString.apply(a) === '[object Array]';
  };

  var _toInt = function(a) {
    return parseInt(a, 16);
  };

  var _toHexidecimal = function(a) {
    var b = a.toString(16);
    return b.length === 1 ? "0" + b : b;
  };

  var _sliceHex = function(hex) {
    if (typeof hex !== "string") return;
    hex = hex.replace("#", "");
    return hex.match(/.{2}/g);
  };

  var _isRGB = function(string) {
    return string.match(/\,/g) !== null;
  };

  var _sliceRGB = function(rgb) {
    if (typeof rgb !== "string") return;
    return rgb.match(/\d+/g);
  };

  var _outputObject = function(value, type) {
    var out;
    if (_isArray(value)) {
      out = {
        R : value[0],
        G : value[1],
        B : value[2]
      }
    } 
    return out;
  };

  var _outputArray = function(value) {
    if (_isArray(value)) { 
      return value;
    }
  };

  var _outputString = function(value, type) {
    if (type === "HEX") {
      return "#" + value.join("");
    } else if (type === "RGB") {
      return "(" + value.join(",") + ")";
    }
  };

  var _toRGB = function(hex) {
    var array = _sliceHex(hex);
    if (array.length !== 3) {
      throw new Error("When converting from hex to RGB, a six digit hexidecimal is required");
    }
    for (var i = array.length - 1; i >= 0; i--) {
      array[i] = _toInt(array[i]);
    };
    return array;
  };

  var _toHex = function(rgb) {
    var array = _sliceRGB(rgb);
    if (array.length !== 3) {
      throw new Error("When converting from RGB to hex, a decimal for Red, Green, and Blue are required.");
    }
     for (var i = array.length - 1; i >= 0; i--) {
      array[i] = _toHexidecimal(parseInt(array[i]));
    };
    return array;
  };

  var _output = "string";
  /**
   * @namespace
   * @type {Object}
   */
  var Hexy = {
    /**
     * Sets the ouput mode
     * @memberOf Hexy
     * @param {String} output Set to "string", "object", or "array"
     */
    setOutput : function(output) {
      _output = output;
    },
    /**
     * Gets the output mode
     * @return {String} Output mode
     */
    getOutput : function() {
      return _output;
    },
    /**
     * Gets a random hex number within the RGB color scale
     * @param  {Integer} [start] Starting range
     * @param  {Integer} [end]   Ending range
     * @return {Array|String|Object}  Returns the hex in whatever the output format is set to
     */
    getRandomHex : function[type](start, end) {
      var hex = [], i = 3, color;
      start = start || 0;
      end   = end || 255;
      while(i--) {
        color = Math.floor((Math.random() * end) + start).toString(16);
        color = (color.length === 1) ? "0" + color : color;
        hex.push(color);
      }
      return this.format(hex, "HEX");
    },
    /**
     * Gets a random RGB color
     * @param  {Integer} start Starting rangeq
     * @param  {Integer} end   Ending range
     * @return {Array|String|Object} Returns in whatever the output format is set to
     */
    getRandomRGB : function(start, end) {
      return this.toRGB(this.getRandomHex(start, end));
    },
    /**
     * Converts a hex string or an array of hex strings to RGB values
     * @param  {String|Array} hex Hex string or array of hex strings
     * @return {String|Array|Object} RGB values in output format
     */
    toRGB : function(hex) {
      var data;
      if (_isArray(hex)) {
        data = [];
        for (var i = hex.length - 1; i >= 0; i--) {
          data.push(this.format(_toRGB(hex[i]), "RGB")); 
        }
      } else {
        data = this.format(_toRGB(hex), "RGB");
      }
      return data;
    },
    /**
     * Converts a hex value to an integer
     * @param {String} hex Hex value
     * @return {Integer} Converted hex value
     */
    toInt : _toInt,
    /**
     * Slices a hex string into hex values
     * @param {String} hex Hex string
     * @return {Array} Returns an array of hex values
     */
    sliceHex : _sliceHex,
    /**
     * Slices an RGB string into seperate values
     * @param {String} rgb RGB String
     * @return {Array} Array of values
     */
    sliceRGB : _sliceRGB,
    /**
     * Converts an RGB string or an array of RGB strings in hex values
     * @param  {String|Array} rgb RGB string or array of RGB strings
     * @return {String|Array|Object} Returns hex values in output format
     */
    toHex : function(rgb) {
       var data;
      if (_isArray(rgb)) {
        data = [];
        for (var i = rgb.length - 1; i >= 0; i--) {
          data.push(this.format(_toHex(rgb[i]), "HEX")); 
        }
      } else {
        data = this.format(_toHex(rgb), "HEX");
      }
      return data;
    },
    /**
     * Formats an array of values into output format
     * @param  {Array} value Array of values
     * @param  {String} type  Type of value "HEX" or "RGB"
     * @return {String|Array|Object} Returns values in output format
     */
    format : function(value, type) {
      var method = this.getOutput();
      if (method === "object") {
        return _outputObject(value);
      } else if (method === "array") {
        return _outputArray(value);
      } else {
        return _outputString(value, type);
      }
    }
  };

  exports.Hexy = Hexy; //Export

}(this));