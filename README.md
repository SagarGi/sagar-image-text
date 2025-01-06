<p align="center">
	<img src="src/assets/sit.svg" width="80">
</p>
<h1 align=center>Sagar Image Text</h1>
<p align=center>Make your Text on Image Easier</p>
<p align="center">
<a href="https://www.npmjs.com/package/sagar-image-text">
<img src="https://img.shields.io/npm/v/sagar-image-text"/> 
<img src="https://img.shields.io/npm/dm/sagar-image-text"/>
</a> 
<a href="https://vuejs.org/">
<img src="https://img.shields.io/badge/vue-3-brightgreen.svg"/>
</a>
</p>

##  1. Library usage example

https://sagargi.github.io/sagar-image-text

## 2. Installation

SagarImageText is available on NPM. You can install it using the following command:

```
npm install sagar-text-image
```
After installing the package, you import and directly use it on you vue code as:

```javascript
import { ImageText, ImageTextCoordinate } from "sagar-image-text";
import 'sagar-image-text/style.css'
```

## 3. Getting Started
Here is the minimal example:

This is the example of component `ImageText` which is very basic.
```javascript
<template>
  <div class="wrapper">
      <ImageText
          image-src="<path-to-image>"
          text="Your text here"
          text-position="bottom-left"
      />
  </div>
</template>
```

Also, here is an example of component `ImageTextCoordinate` which is more flexible than `ImageText`

```javascript
<template>
  <div class="wrapper">
      <ImageTextCoordinate
          image-src="<path-to-image>"
          text="Your text here"
          image_x_coordinate="50"
          image_y_coordinate="50"
      />
  </div>
</template>
```

## 4. Props
Component `ImageText` has the following props:

| Prop        | Type          | Default              | Description                                                                                                        |
|-------------|---------------|----------------------|--------------------------------------------------------------------------------------------------------------------|
| `imageSrc` | `String`      | `required`           | Path to the source of the image.                                                                                   |
| `imageWidth` | `String`      | `100%`               | Width of the image.                                                                                                |
| `imageHeight` | `String`     | `auto`               | Height of the image.                                                                                               |
| `text` | `String`       | `your text here`     | Text you want to display.                                                                                          |
| `textColor` | `String`      | `white`              | Color of the text on image.                                                                                        |
| `textSize` | `String`     | `10px`               | Font size of the text on image.                                                                                    |
| `textPosition` | `String`       | `center`             | Position to keep the text. (top-left, top-right, top-center, bottom-left, bottom-right, bottom-center and center ) |
| `textBackgroundColor` | `String`      | `rgba(0, 0, 0, 0.5)` | Background of the text                                                                                             |
| `imageBorderRadius` | `String`      | `0px`                | Set the border radius of the image.                                                                                |
| `textFontStyle` | `String`      | `Arial, Helvetica, sans-serif;`              | Set the font style for the text on image.                                                                          |
| `textFontFamily` | `String`      | `normal`              | Set the font for the text on image.                                                                                |



Component `ImageTextCoordinate` has same props as above but with extra props as:


| Prop        | Type          | Default  | Description                                                                           |
|-------------|---------------|----------|---------------------------------------------------------------------------------------|
| `image_x_coordinate` | `Number`      | `50`     | x-positon to place the text on image.                                                 |
| `image_y_coordinate` | `Number`      | `50`     | y-positon to place the text on image.                                                 |
| `textAlign` | `String`     | `center` | Also allows to align the position of the text on an overlay (left, right and center). |
| `textBackgroundWidth` | `Number`     | `number` | Width of the text background.                                                         |








