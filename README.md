Hexy.js
=======

Converts HEX colors to RGB values and vice versa in various output formats.

How To
======

Hexy can take 3 different types of input: Array of values, String, or Object.

Simple add Hexy.js to your page as such:

```html
<script type="text/javascript" src="Hexy.js"></script>
```

Example
=======

```javascript
// Convert from HEX string to RGB
Hexy.toRGB("#FFFF00") // "(255,255,0)"

// Convert from RGB string to HEX
Hexy.toHex("(255,255,0)") // "#FFFF00"

// Convert values as an array
Hexy.toHex([255, 255, 0]) // "#FFFF00"

// Convert values as an object
Hexy.toHex({
  R : 255,
  G : 255,
  B : 0
}) // "#FFFF00"
```
Multiples
---------

You can convert an array of multiple values by checking the multiple flag to true.

```javascript
// Convert multiple hex values
Hexy.toRGB(["#00FFFF", "#FFFF00", "#00FF00"], true) // ["(0, 255, 255)", "(255, 255, 0)", "(0, 255, 0)"]

Hexy.toHex(["(0, 255, 255)", "(255, 255, 0)", "(0, 255, 0)"], true) // ["#00FFFF", "#FFFF00", "#00FF00"]
```
Outputs
-------

You can set the output of Hexy by passing the setOutput() method "object", "array", or "string".

```javascript
// Set output method
Hexy.setOutput("string");
Hexy.toRGB("#FFFF00") // "(255,255,0)"

Hexy.setOutput("array");
Hexy.toRGB("#FFFF00") // [255,255,0]

Hexy.setOutput("object");
Hexy.toRGB("#FFFF00") // {R : 255, G : 255, B : 0}

// Output can also be set by passing in the type as a third parameter
Hexy.toRGB("#FFFF00", false, "array") // [255,255,0]
```
Other Methods
-------------

Other methods included with Hexy.

```javascript
// Get random hex value in between a range (RGB values)
Hexy.getRandomHex(100, 255) // "#efda69"

// Get random RGB values in between a range (defaults to 0 and 255)
Hexy.getRandomRGB() // "(119,42,100)"

// Get current output mode
Hexy.getOutput() // "string"

// Slices a hex value into an array
Hexy.sliceHex("#FF00FF") // ["FF", "00", "FF"]

// Slices an RGB value into an array
Hexy.sliceRGB("(255, 0, 132)") // ["255", "0", "132"]

// Converts a HEX value to an integer
Hexy.toInt("FF") // 255

// Transfers all Hexy methods to the context object (window if in browser)
Hexy.transfer();
```

License
=======

Licensed under the MIT licenses