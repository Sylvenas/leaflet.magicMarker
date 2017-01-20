(function (window) {
    var setOptions = function (obj, options) {
        for (var i in options) {
            obj[i] = options[i];
        }
        return obj;
    };
    L.Icon.Magic = function (options) {
        var opts = {
            html: "<div class='magicIcon'><img class='magictime " + options.magic + "' id='migic' src='" + options.iconUrl + "'/></div>",
            className: 'magicDiv',
        };
        var magicIconOpts = setOptions(opts, options);
        var magicIcon = L.divIcon(magicIconOpts);
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