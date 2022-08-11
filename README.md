# MDRipple

MDRipple lets you add the Material Design ripple effect to any component you
want in a very simple way!

## Installation

You need jQuery>1.7 in order to use this module.

To import the MDRipple module in your web page, you just need to import its
JavaScript script and its CSS stylesheet that you can find inside of the `dist/`
folder of this project. Import the jQuery script before importing the MDRipple
script.

```HTML
<link ref="stylesheet" href="md-ripple.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
<script src="md-ripple.min.js"></script>
```

## Usage

Simply add the `with-ripple` class to any HTML element you want, and it will
show the ripple effect when you click on it!

```HTML
<div class="with-ripple"></div>
```

You can use this class on any element you want.

```HTML
<span class="with-ripple"></span>
<button type="button" class="with-ripple">Click me</button>
<a class="with-ripple">Click me</a>
```

You can also define the color of the ripple (which, by default, is
`rgba(127, 127, 127, 0.3)`), by setting the `data-ripple-color` attribute with
any valid CSS color.

There is also a special `random` color, which randomizes the ripple color at
every click!

```HTML
<button type="button" class="with-ripple" data-ripple-color="rgba(255, 0, 0, 0.3)">Look at my red ripple</button>
<button type="button" class="with-ripple" data-ripple-color="rgba(0, 255, 0, 0.3)">Look at my green ripple</button>
<button type="button" class="with-ripple" data-ripple-color="rgba(0, 0, 255, 0.3)">Look at my blue ripple</button>
<button type="button" class="with-ripple" data-ripple-color="random">Look at my randomized ripple</button>
```

## CSS limitations

The `with-ripple` class has the following CSS properties:

```CSS
.with-ripple {
  position: relative;
  overflow: hidden;
}
```

If you override any of these properties, the ripple effect may not work as
desired!

## Author

Dany Thach - <d.thach4@gmail.com>

## License

MDRipple is licensed under the [MIT License](License).