# leaflet.magicMarker
Adding magical animation effect to a marker while loading.
<div style="text-align:center" align="center">
  <img src="https://sylvenas.github.io/leaflet.magicMarker/Demo.gif" />
</div>    

## supported browsers    
Internet Explorer 11       
Google Chrome     
Safari    
Firefox        

## Demo online   
A demo is available on the Github Pages webpage for leaflet.magicMarker [Check out demo!](https://sylvenas.github.io/leaflet.magicMarker/)    

## Usage     
1.Include the JavaScript file and css files located in ```\dist``` directory.   
```html
<link href="./lib/magic.min.css" rel="stylesheet">
<link href="./dist/leaflet.magicMarker.css" rel="stylesheet">

<script src="./dist/leaflet.migrationLayer.js"></script>
```     
2.Create a new magic marker
```js
var magicMarker = new L.marker.magic([51.55, -0.09], {
    iconUrl: './img/magicIcon.png',
    magic: 'vanishIn'
})  
```     
## Options 

| Option          | Description              | Default Value  | Required    |
| --------------- | ------------------------ | -------------- | ----------- | 
| iconUrl         | The URL to the icon image| null           |  no        |
| magic           | Animation type           | null           |  yes        |   

Other options inherited from leaflet [Icon](http://leafletjs.com/reference-1.0.2.html#icon)

## Leaflet Version     
Requires Leaflet 1.0.2 or newer   

## Thanks   
leaflet.magicMarker is base on [magic animations](https://github.com/miniMAC/magic).

## License   
MIT.    

