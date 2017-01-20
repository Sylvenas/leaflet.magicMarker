!function(i){var c=function(i,c){for(var n in c)i[n]=c[n]
return i}
L.Icon.Magic=function(i){var n={html:"<div class='magicIcon'><img class='magictime "+i.magic+"' id='migic' src='"+i.iconUrl+"'/></div>",className:"magicDiv"},a=c(n,i),r=L.divIcon(a)
return r},L.icon.magic=function(i){return new L.Icon.Magic(i)},L.Marker.Magic=L.Marker.extend({initialize:function(i,c){c.icon=L.icon.magic(c),L.Marker.prototype.initialize.call(this,i,c)}}),L.marker.magic=function(i,c){return new L.Marker.Magic(i,c)}}(window)
