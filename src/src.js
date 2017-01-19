(function (window) {
    L.Icon.Magic = function (options) {
        var html = "<div class='magicIcon'><img class='magictime " + options.magic + "' id='migic' src='" + options.iconUrl + "'/></div>";
        var magicIcon = L.divIcon({
            html: html,
            className: 'magicDiv',
            popupAnchor: options.popupAnchor
        });
        return magicIcon;
    };

    L.icon.magic = function (options) {
        return new L.Icon.Magic(options);
    };

    L.Marker.Magic = L.Marker.extend({
        initialize: function (latlng, options) {
            options.icon = L.icon.magic(options);
            L.Marker.prototype.initialize.call(this, latlng, options);
        }
    });

    L.marker.magic = function (latlng, options) {
        return new L.Marker.Magic(latlng, options);
    };

})(window);