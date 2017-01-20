# leaflet.magicMarker
当marker在加载的时候，添加像魔法一般的入场动画.
<div style="text-align:center" align="center">
  <img src="https://react-map.github.io/leaflet.magicMarker/Demo.gif" />
</div>    
##supported browsers    
Internet Explorer 11       
Google Chrome     
Safari    
Firefox        

##Demo online   
A demo is available on the Github Pages webpage for leaflet.magicMarker [Check out demo!](https://react-map.github.io/leaflet.magicMarker/)    

##Usage     
1.Include the JavaScript files located in ```\dist``` directory.   
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
##API(options)   
| option          | Description              | Default Value    | Required       |
| --------------- | ------------------------ | -----------------| -------------- | 
| iconUrl         | The URL to the icon image| null             |  yes           |
| magic           | animation type           | null             |  yes           | 

## Leaflet Version     
Requires Leaflet 1.0.2 or newer   

##Thanks   
leaflet.magicMarker is base on [magic animations](https://github.com/miniMAC/magic).
## License   
MIT.    

