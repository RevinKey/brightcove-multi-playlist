(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.brightcoveMultiPlaylist = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var IDs = {
    myBlackbird: 'myBlackbird',
    filters: 'bbFilters',
    controls: 'bbControls',
    //size: 'bbSize',
    sendEmail: 'sendEmail',
    modal: 'modal',
    buttonBar: 'buttonBar',
    log: 'myBlackbird',
    btnToggleLog: 'btnToggleLog',
    btnToggleSlider: 'btnToggleSlider',
    btnTogglePlayerSettings: 'btnTogglePlayerSettings',
    btnToggleAdSettings: 'btnToggleAdSettings',
    btnTogglePlaybackInfo: 'btnTogglePlaybackInfo',
    btnToggleDebuggerSettings: 'btnToggleDebuggerSettings',
    classesList: 'classesList',
    playerSettings: 'playerSettings',
    playbackInfo: 'playbackInfo',
    debuggerSettings: 'debuggerSettings',
    btnToggleClassList: 'btnToggleClassList',
    //bigPlayButtonStyles: 'bigPlayButtonStyles',
    //posterStyles: 'posterStyles',
    logTable: 'logTable',
    logList: 'logList',
    logJSON: 'logJSON',
    mediaSettings: 'mediaSettings',
    adSettings: 'adSettings'
};
exports.IDs = IDs;

},{}],2:[function(require,module,exports){
(function (global){
/**
 * @file playlistContainer.js
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

/**
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Component
 * @class PlaylistContainer
 */

var PlaylistContainer = (function (_videojs$Component) {
  _inherits(PlaylistContainer, _videojs$Component);

  function PlaylistContainer(player, options) {
    _classCallCheck(this, PlaylistContainer);

    _get(Object.getPrototypeOf(PlaylistContainer.prototype), "constructor", this).call(this, player, options);

    //this.content(this.options_.content);

    this.el_ = _videoJs2["default"].createEl("div", {
      "id": this.options_.id
    });

    this.headerEl_ = _videoJs2["default"].createEl('div', { "className": 'header' });
    this.headerEl_.innerHTML = '<h2>' + this.options_.name + '</h2>';
    this.el_.appendChild(this.headerEl_);

    this.contentEl_ = _videoJs2["default"].createEl('div', { "className": 'main' });
    this.contentEl_.innerHTML = this.options_.content;
    this.el_.appendChild(this.contentEl_);

    this.footerEl_ = _videoJs2["default"].createEl('div', { "className": 'footer' });
    this.el_.appendChild(this.footerEl_);
    return this;
  }

  _createClass(PlaylistContainer, [{
    key: "content",
    value: function content(value) {
      if (typeof value !== 'undefined') {
        this.contentEl_.innerHTML = value;
      }
      return this.contentEl_.innerHTML;
    }
  }]);

  return PlaylistContainer;
})(_videoJs2["default"].Component);

_videoJs2["default"].Component.registerComponent('PlaylistContainer', PlaylistContainer);
exports["default"] = PlaylistContainer;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jsPlaylistContainerJs = require('./js/playlistContainer.js');

var _jsPlaylistContainerJs2 = _interopRequireDefault(_jsPlaylistContainerJs);

var _jsComponentIDsJs = require('./js/componentIDs.js');

// Default options for the plugin.
var defaults = {};

// my debugger lets
var _options = undefined,
    player = undefined,
    adSettings = undefined,
    lastEvent = "",
    currentEvent = "",
    Modal = undefined,
    playlistModal = undefined,
    child = undefined,
    playlistTitle = undefined,
    data = undefined,
    id = undefined,
    childString = undefined;

var playlistModalButton = videojs.extend(videojs.Button, {
    constructor: function constructor(player, options) {

        videojs.Button.call(this, player, options);

        player.on('loadstart', function () {
            console.log(_options);
        });

        // Bind click event for desktop browsers
        this.on('click', function () {});
    },

    createEl: function createEl() {
        return videojs.Button.prototype.createEl.call(this, 'div', {
            className: 'vjs-playlist-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button',
            innerHTML: '<div class="vjs-menu playlistModal vjs-icons-chapters" role="presentation"><ul id="vjs-playlist-menu" class="vjs-playlist-menu vjs-menu-content"role="menu"></ul></div><span class="vjs-control-text">Playlist</span></div>'
        }, {
            'aria-live': 'polite'
        });
    }
});

function findClass(element, className) {
    var foundElement = null,
        found;

    function recurse(element, className, found) {
        for (var i = 0; i < element.childNodes.length && !found; i++) {
            var el = element.childNodes[i];
            var classes = el.className != undefined ? el.className.split(" ") : [];
            for (var j = 0, jl = classes.length; j < jl; j++) {
                if (classes[j] == className) {
                    found = true;
                    foundElement = element.childNodes[i];
                    break;
                }
            }
            if (found) break;
            recurse(element.childNodes[i], className, found);
        }
    }
    recurse(element, className, false);
    return foundElement;
}

var buildContainer = function buildContainer(player) {
    videojs.registerComponent("playlistModalButton", playlistModalButton);

    var buttonIndex = player.controlBar.children().map(function (c) {
        return c.name();
    }).indexOf('FullscreenToggle') - 1;
    player.controlBar.playlistButton = player.controlBar.addChild('playlistModalButton', null, buttonIndex);
    player.controlBar.playlistButton.el().setAttribute('tabindex', 0);

    playlistModal = findClass(player.controlBar.playlistButton.el_, "vjs-playlist-menu");
    console.log(playlistModal);
    for (var i = 0; i < _options.playlists.length; i++) {
        if (i == 0) {
            player.catalog.getPlaylist(_options.playlists[i].id, function (error, playlist) {
                player.catalog.load(playlist);
                player.playlist.currentItem(0);
                player.play();
            });
        }
        player.catalog.getPlaylist(_options.playlists[i].id, function (error, playlist) {
            data = player.catalog.data;
            childString = "<li class='vjs-playlist-title' id='" + data.id + "'>" + data.name + "</li><ul style='display:none;'>";
            for (var j = 0; j < playlist.length; j++) {
                childString += "<div class='vjs-video-title vjs-menu-item' playlistId='" + data.id + "'id='" + playlist[j].id + "'>" + playlist[j].name + "<img class='vjs-thumbnail' style='pointer-events:none;'src=" + playlist[j].thumbnail + "></img></div>";
            }
            childString += "</ul>";
            playlistModal.innerHTML += childString;
            for (var x = 0; x < playlistModal.childNodes.length; x++) {
                var temp = playlistModal.childNodes;
                if (playlistModal.childNodes[x].className === 'vjs-playlist-title') {
                    playlistModal.childNodes[x].addEventListener('click', function (evt) {

                        evt.stopPropagation();
                        if (evt.target.nextSibling.style.display === "none") {
                            evt.target.nextSibling.style.display = "block";
                        } else {
                            evt.target.nextSibling.style.display = "none";
                        }
                    });
                } else if (playlistModal.childNodes[x].tagName === 'UL') {
                    var temp = playlistModal.childNodes[x];
                    for (var z = 0; z < temp.childNodes.length; z++) {
                        temp.childNodes[z].addEventListener('click', function (evt) {
                            player.catalog.getPlaylist(evt.currentTarget.attributes.playlistId.value, function (error, playlist) {
                                player.catalog.load(playlist);
                                for (var k = 0; k < playlist.length; k++) {
                                    if (evt.target.id === playlist[k].id) {
                                        player.playlist.currentItem(k);
                                        player.play();
                                    }
                                }
                            });
                        });
                    }
                }
            };
        });
    };
};

var setOptions = function setOptions(opt) {
    _options = opt;
    if (_options) {
        for (var i = 0; i < _options.playlists.length; i++) {
            console.log(_options.playlists[i].id);
        }
    }
};

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 * @param    {Object} [options={}]
 */
var onPlayerReady = function onPlayerReady(bcplayer, options) {

    console.log('Brightcove Player multiPlaylist loaded');

    //events = bcplayer.debuggerWindow.getEvents;

    //bcplayer.addClass('vjs-player-debugger');

    var fontawesome = document.createElement('link');
    fontawesome.rel = 'stylesheet';
    fontawesome.href = "//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css";
    document.body.appendChild(fontawesome);

    setOptions(options);

    buildContainer(bcplayer);
};
/**
 * A Brightcove video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function playerDebugger
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
var multiPlaylist = function multiPlaylist(options) {
    var _this = this;

    this.ready(function () {

        _options = options;
        onPlayerReady(_this, videojs.mergeOptions(defaults, _options));
    });
};

// Register the plugin with video.js.
videojs.plugin('multiPlaylist', multiPlaylist);

// Include the version number.
multiPlaylist.VERSION = '0.0.1';

exports['default'] = multiPlaylist;
module.exports = exports['default'];

},{"./js/componentIDs.js":1,"./js/playlistContainer.js":2}]},{},[3])(3)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva3JleW5vbGRzL1JlcG9zL2JyaWdodGNvdmUtbXVsdGktcGxheWxpc3Qvc3JjL2pzL2NvbXBvbmVudElEcy5qcyIsIi9Vc2Vycy9rcmV5bm9sZHMvUmVwb3MvYnJpZ2h0Y292ZS1tdWx0aS1wbGF5bGlzdC9zcmMvanMvcGxheWxpc3RDb250YWluZXIuanMiLCIvVXNlcnMva3JleW5vbGRzL1JlcG9zL2JyaWdodGNvdmUtbXVsdGktcGxheWxpc3Qvc3JjL3BsdWdpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQU8sSUFBSSxHQUFHLEdBQUc7QUFDYixlQUFXLEVBQUUsYUFBYTtBQUMxQixXQUFPLEVBQUUsV0FBVztBQUNwQixZQUFRLEVBQUUsWUFBWTs7QUFFdEIsYUFBUyxFQUFFLFdBQVc7QUFDdEIsU0FBSyxFQUFFLE9BQU87QUFDZCxhQUFTLEVBQUUsV0FBVztBQUN0QixPQUFHLEVBQUUsYUFBYTtBQUNsQixnQkFBWSxFQUFFLGNBQWM7QUFDNUIsbUJBQWUsRUFBRSxpQkFBaUI7QUFDbEMsMkJBQXVCLEVBQUUseUJBQXlCO0FBQ2xELHVCQUFtQixFQUFFLHFCQUFxQjtBQUMxQyx5QkFBcUIsRUFBRSx1QkFBdUI7QUFDOUMsNkJBQXlCLEVBQUUsMkJBQTJCO0FBQ3RELGVBQVcsRUFBRSxhQUFhO0FBQzFCLGtCQUFjLEVBQUUsZ0JBQWdCO0FBQ2hDLGdCQUFZLEVBQUUsY0FBYztBQUM1QixvQkFBZ0IsRUFBRSxrQkFBa0I7QUFDcEMsc0JBQWtCLEVBQUUsb0JBQW9COzs7QUFHeEMsWUFBUSxFQUFFLFVBQVU7QUFDcEIsV0FBTyxFQUFFLFNBQVM7QUFDbEIsV0FBTyxFQUFFLFNBQVM7QUFDbEIsaUJBQWEsRUFBRSxlQUFlO0FBQzlCLGNBQVUsRUFBRSxZQUFZO0NBQzNCLENBQUM7Ozs7Ozs7Ozs7Ozs7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QUFJLEdBQUcsbUVBQW1FLENBQUM7QUFDdkYsWUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBRXZDLGNBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFcEIsa0JBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztDQUU1QixDQUFDOzs7Ozs7Ozs7Ozs7O0FBYUYsSUFBTSxhQUFhLEdBQUcsU0FBaEIsYUFBYSxDQUFZLE9BQU8sRUFBRTs7O0FBQ3BDLFFBQUksQ0FBQyxLQUFLLENBQUMsWUFBTTs7QUFFYixnQkFBUSxHQUFHLE9BQU8sQ0FBQztBQUNuQixxQkFBYSxRQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDakUsQ0FBQyxDQUFDO0NBQ04sQ0FBQzs7O0FBR0YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7OztBQUcvQyxhQUFhLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQzs7cUJBRXZCLGFBQWEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGxldCBJRHMgPSB7XG4gICAgbXlCbGFja2JpcmQ6ICdteUJsYWNrYmlyZCcsXG4gICAgZmlsdGVyczogJ2JiRmlsdGVycycsXG4gICAgY29udHJvbHM6ICdiYkNvbnRyb2xzJyxcbiAgICAvL3NpemU6ICdiYlNpemUnLFxuICAgIHNlbmRFbWFpbDogJ3NlbmRFbWFpbCcsXG4gICAgbW9kYWw6ICdtb2RhbCcsXG4gICAgYnV0dG9uQmFyOiAnYnV0dG9uQmFyJyxcbiAgICBsb2c6ICdteUJsYWNrYmlyZCcsXG4gICAgYnRuVG9nZ2xlTG9nOiAnYnRuVG9nZ2xlTG9nJyxcbiAgICBidG5Ub2dnbGVTbGlkZXI6ICdidG5Ub2dnbGVTbGlkZXInLFxuICAgIGJ0blRvZ2dsZVBsYXllclNldHRpbmdzOiAnYnRuVG9nZ2xlUGxheWVyU2V0dGluZ3MnLFxuICAgIGJ0blRvZ2dsZUFkU2V0dGluZ3M6ICdidG5Ub2dnbGVBZFNldHRpbmdzJyxcbiAgICBidG5Ub2dnbGVQbGF5YmFja0luZm86ICdidG5Ub2dnbGVQbGF5YmFja0luZm8nLFxuICAgIGJ0blRvZ2dsZURlYnVnZ2VyU2V0dGluZ3M6ICdidG5Ub2dnbGVEZWJ1Z2dlclNldHRpbmdzJyxcbiAgICBjbGFzc2VzTGlzdDogJ2NsYXNzZXNMaXN0JyxcbiAgICBwbGF5ZXJTZXR0aW5nczogJ3BsYXllclNldHRpbmdzJyxcbiAgICBwbGF5YmFja0luZm86ICdwbGF5YmFja0luZm8nLFxuICAgIGRlYnVnZ2VyU2V0dGluZ3M6ICdkZWJ1Z2dlclNldHRpbmdzJyxcbiAgICBidG5Ub2dnbGVDbGFzc0xpc3Q6ICdidG5Ub2dnbGVDbGFzc0xpc3QnLFxuICAgIC8vYmlnUGxheUJ1dHRvblN0eWxlczogJ2JpZ1BsYXlCdXR0b25TdHlsZXMnLFxuICAgIC8vcG9zdGVyU3R5bGVzOiAncG9zdGVyU3R5bGVzJyxcbiAgICBsb2dUYWJsZTogJ2xvZ1RhYmxlJyxcbiAgICBsb2dMaXN0OiAnbG9nTGlzdCcsXG4gICAgbG9nSlNPTjogJ2xvZ0pTT04nLFxuICAgIG1lZGlhU2V0dGluZ3M6ICdtZWRpYVNldHRpbmdzJyxcbiAgICBhZFNldHRpbmdzOiAnYWRTZXR0aW5ncydcbn07XG4iLCIvKipcbiAqIEBmaWxlIHBsYXlsaXN0Q29udGFpbmVyLmpzXG4gKi9cbiBpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7UGxheWVyfE9iamVjdH0gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICogQGNsYXNzIFBsYXlsaXN0Q29udGFpbmVyXG4gKi9cbmNsYXNzIFBsYXlsaXN0Q29udGFpbmVyIGV4dGVuZHMgdmlkZW9qcy5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXG4gICAgc3VwZXIocGxheWVyLG9wdGlvbnMpO1xuXG4gICAgLy90aGlzLmNvbnRlbnQodGhpcy5vcHRpb25zXy5jb250ZW50KTtcblxuICAgIHRoaXMuZWxfID0gdmlkZW9qcy5jcmVhdGVFbChcImRpdlwiLFxuICAgICAge1xuICAgICAgICBcImlkXCIgOiB0aGlzLm9wdGlvbnNfLmlkXG4gICAgICB9XG5cbiAgICApO1xuXG4gICAgdGhpcy5oZWFkZXJFbF8gPSB2aWRlb2pzLmNyZWF0ZUVsKCdkaXYnLFxuICAgICAge1wiY2xhc3NOYW1lXCI6ICdoZWFkZXInfVxuICAgICk7XG4gICAgdGhpcy5oZWFkZXJFbF8uaW5uZXJIVE1MPSc8aDI+JyArIHRoaXMub3B0aW9uc18ubmFtZSArICc8L2gyPic7XG4gICAgdGhpcy5lbF8uYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXJFbF8pO1xuXG4gICAgdGhpcy5jb250ZW50RWxfID0gdmlkZW9qcy5jcmVhdGVFbCgnZGl2Jywge1wiY2xhc3NOYW1lXCI6ICdtYWluJ30pO1xuICAgIHRoaXMuY29udGVudEVsXy5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnNfLmNvbnRlbnQ7XG4gICAgdGhpcy5lbF8uYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50RWxfKTtcblxuICAgIHRoaXMuZm9vdGVyRWxfID0gdmlkZW9qcy5jcmVhdGVFbCgnZGl2Jywge1wiY2xhc3NOYW1lXCIgOiAnZm9vdGVyJ30pO1xuICAgIHRoaXMuZWxfLmFwcGVuZENoaWxkKHRoaXMuZm9vdGVyRWxfKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbnRlbnQodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5jb250ZW50RWxfLmlubmVySFRNTCA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250ZW50RWxfLmlubmVySFRNTDtcbiAgfVxuXG5cbn1cblxudmlkZW9qcy5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1BsYXlsaXN0Q29udGFpbmVyJywgUGxheWxpc3RDb250YWluZXIpO1xuZXhwb3J0IGRlZmF1bHQgUGxheWxpc3RDb250YWluZXI7XG4iLCJpbXBvcnQgUGxheWxpc3RDb250YWluZXIgZnJvbSAnLi9qcy9wbGF5bGlzdENvbnRhaW5lci5qcyc7XG5pbXBvcnQge1xuICAgIElEc1xufSBmcm9tICcuL2pzL2NvbXBvbmVudElEcy5qcyc7XG5cbi8vIERlZmF1bHQgb3B0aW9ucyBmb3IgdGhlIHBsdWdpbi5cbmNvbnN0IGRlZmF1bHRzID0ge307XG5cbi8vIG15IGRlYnVnZ2VyIGxldHNcbmxldCBfb3B0aW9ucyxcbiAgICBwbGF5ZXIsXG4gICAgYWRTZXR0aW5ncyxcbiAgICBsYXN0RXZlbnQgPSBcIlwiLFxuICAgIGN1cnJlbnRFdmVudCA9IFwiXCIsXG4gICAgTW9kYWwsXG4gICAgcGxheWxpc3RNb2RhbCxcbiAgICBjaGlsZCxcbiAgICBwbGF5bGlzdFRpdGxlLFxuICAgIGRhdGEsXG4gICAgaWQsXG4gICAgY2hpbGRTdHJpbmc7XG5cblxudmFyIHBsYXlsaXN0TW9kYWxCdXR0b24gPSB2aWRlb2pzLmV4dGVuZCh2aWRlb2pzLkJ1dHRvbiwge1xuICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbihwbGF5ZXIsIG9wdGlvbnMpIHtcblxuICAgICAgICB2aWRlb2pzLkJ1dHRvbi5jYWxsKHRoaXMsIHBsYXllciwgb3B0aW9ucyk7XG5cblxuICAgICAgICBwbGF5ZXIub24oJ2xvYWRzdGFydCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coX29wdGlvbnMpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEJpbmQgY2xpY2sgZXZlbnQgZm9yIGRlc2t0b3AgYnJvd3NlcnNcbiAgICAgICAgdGhpcy5vbignY2xpY2snLCBmdW5jdGlvbigpIHt9KTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdmlkZW9qcy5CdXR0b24ucHJvdG90eXBlLmNyZWF0ZUVsLmNhbGwodGhpcywgJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1wbGF5bGlzdC1idXR0b24gdmpzLW1lbnUtYnV0dG9uIHZqcy1tZW51LWJ1dHRvbi1wb3B1cCB2anMtY29udHJvbCB2anMtYnV0dG9uJyxcbiAgICAgICAgICAgIGlubmVySFRNTDogJzxkaXYgY2xhc3M9XCJ2anMtbWVudSBwbGF5bGlzdE1vZGFsIHZqcy1pY29ucy1jaGFwdGVyc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48dWwgaWQ9XCJ2anMtcGxheWxpc3QtbWVudVwiIGNsYXNzPVwidmpzLXBsYXlsaXN0LW1lbnUgdmpzLW1lbnUtY29udGVudFwicm9sZT1cIm1lbnVcIj48L3VsPjwvZGl2PjxzcGFuIGNsYXNzPVwidmpzLWNvbnRyb2wtdGV4dFwiPlBsYXlsaXN0PC9zcGFuPjwvZGl2PidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgJ2FyaWEtbGl2ZSc6ICdwb2xpdGUnLFxuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gZmluZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIHZhciBmb3VuZEVsZW1lbnQgPSBudWxsLFxuICAgICAgICBmb3VuZDtcblxuICAgIGZ1bmN0aW9uIHJlY3Vyc2UoZWxlbWVudCwgY2xhc3NOYW1lLCBmb3VuZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggJiYgIWZvdW5kOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBlbCA9IGVsZW1lbnQuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgIHZhciBjbGFzc2VzID0gZWwuY2xhc3NOYW1lICE9IHVuZGVmaW5lZCA/IGVsLmNsYXNzTmFtZS5zcGxpdChcIiBcIikgOiBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBqbCA9IGNsYXNzZXMubGVuZ3RoOyBqIDwgamw7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChjbGFzc2VzW2pdID09IGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kRWxlbWVudCA9IGVsZW1lbnQuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZvdW5kKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgcmVjdXJzZShlbGVtZW50LmNoaWxkTm9kZXNbaV0sIGNsYXNzTmFtZSwgZm91bmQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlY3Vyc2UoZWxlbWVudCwgY2xhc3NOYW1lLCBmYWxzZSk7XG4gICAgcmV0dXJuIGZvdW5kRWxlbWVudDtcbn1cblxuXG5sZXQgYnVpbGRDb250YWluZXIgPSAocGxheWVyKSA9PiB7XG4gICAgdmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudChcInBsYXlsaXN0TW9kYWxCdXR0b25cIiwgcGxheWxpc3RNb2RhbEJ1dHRvbik7XG5cbiAgICB2YXIgYnV0dG9uSW5kZXggPSBwbGF5ZXIuY29udHJvbEJhci5jaGlsZHJlbigpLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICAgIHJldHVybiBjLm5hbWUoKTtcbiAgICB9KS5pbmRleE9mKCdGdWxsc2NyZWVuVG9nZ2xlJykgLSAxO1xuICAgIHBsYXllci5jb250cm9sQmFyLnBsYXlsaXN0QnV0dG9uID0gcGxheWVyLmNvbnRyb2xCYXIuYWRkQ2hpbGQoJ3BsYXlsaXN0TW9kYWxCdXR0b24nLCBudWxsLCBidXR0b25JbmRleCk7XG4gICAgcGxheWVyLmNvbnRyb2xCYXIucGxheWxpc3RCdXR0b24uZWwoKS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG5cbiAgICBwbGF5bGlzdE1vZGFsID0gZmluZENsYXNzKHBsYXllci5jb250cm9sQmFyLnBsYXlsaXN0QnV0dG9uLmVsXywgXCJ2anMtcGxheWxpc3QtbWVudVwiKTtcbiAgICBjb25zb2xlLmxvZyhwbGF5bGlzdE1vZGFsKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9vcHRpb25zLnBsYXlsaXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihpPT0wKXtcbiAgICAgICAgICAgIHBsYXllci5jYXRhbG9nLmdldFBsYXlsaXN0KF9vcHRpb25zLnBsYXlsaXN0c1tpXS5pZCwgZnVuY3Rpb24oZXJyb3IsIHBsYXlsaXN0KSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLmNhdGFsb2cubG9hZChwbGF5bGlzdCk7XG4gICAgICAgICAgICAgICAgcGxheWVyLnBsYXlsaXN0LmN1cnJlbnRJdGVtKDApO1xuICAgICAgICAgICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXIuY2F0YWxvZy5nZXRQbGF5bGlzdChfb3B0aW9ucy5wbGF5bGlzdHNbaV0uaWQsIGZ1bmN0aW9uKGVycm9yLCBwbGF5bGlzdCkge1xuICAgICAgICAgICAgZGF0YSA9IHBsYXllci5jYXRhbG9nLmRhdGE7XG4gICAgICAgICAgICBjaGlsZFN0cmluZyA9IFwiPGxpIGNsYXNzPSd2anMtcGxheWxpc3QtdGl0bGUnIGlkPSdcIiArIGRhdGEuaWQgKyBcIic+XCIgKyBkYXRhLm5hbWUgKyBcIjwvbGk+PHVsIHN0eWxlPSdkaXNwbGF5Om5vbmU7Jz5cIjtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGxheWxpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjaGlsZFN0cmluZyArPSBcIjxkaXYgY2xhc3M9J3Zqcy12aWRlby10aXRsZSB2anMtbWVudS1pdGVtJyBwbGF5bGlzdElkPSdcIiArIGRhdGEuaWQgKyBcIidpZD0nXCIgKyBwbGF5bGlzdFtqXS5pZCArIFwiJz5cIiArIHBsYXlsaXN0W2pdLm5hbWUgKyBcIjxpbWcgY2xhc3M9J3Zqcy10aHVtYm5haWwnIHN0eWxlPSdwb2ludGVyLWV2ZW50czpub25lOydzcmM9XCIgKyBwbGF5bGlzdFtqXS50aHVtYm5haWwgKyBcIj48L2ltZz48L2Rpdj5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoaWxkU3RyaW5nICs9IFwiPC91bD5cIjtcbiAgICAgICAgICAgIHBsYXlsaXN0TW9kYWwuaW5uZXJIVE1MICs9IGNoaWxkU3RyaW5nO1xuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBwbGF5bGlzdE1vZGFsLmNoaWxkTm9kZXMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IHBsYXlsaXN0TW9kYWwuY2hpbGROb2RlcztcbiAgICAgICAgICAgICAgICBpZiAocGxheWxpc3RNb2RhbC5jaGlsZE5vZGVzW3hdLmNsYXNzTmFtZSA9PT0gJ3Zqcy1wbGF5bGlzdC10aXRsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWxpc3RNb2RhbC5jaGlsZE5vZGVzW3hdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldnQudGFyZ2V0Lm5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnRhcmdldC5uZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQudGFyZ2V0Lm5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXlsaXN0TW9kYWwuY2hpbGROb2Rlc1t4XS50YWdOYW1lID09PSAnVUwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gcGxheWxpc3RNb2RhbC5jaGlsZE5vZGVzW3hdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHRlbXAuY2hpbGROb2Rlcy5sZW5ndGg7IHorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcC5jaGlsZE5vZGVzW3pdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmNhdGFsb2cuZ2V0UGxheWxpc3QoZXZ0LmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlcy5wbGF5bGlzdElkLnZhbHVlLCBmdW5jdGlvbihlcnJvciwgcGxheWxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmNhdGFsb2cubG9hZChwbGF5bGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgcGxheWxpc3QubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldnQudGFyZ2V0LmlkID09PSBwbGF5bGlzdFtrXS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5wbGF5bGlzdC5jdXJyZW50SXRlbShrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xufTtcblxuXG5sZXQgc2V0T3B0aW9ucyA9IChvcHQpID0+IHtcbiAgICBfb3B0aW9ucyA9IG9wdDtcbiAgICBpZiAoX29wdGlvbnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfb3B0aW9ucy5wbGF5bGlzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKF9vcHRpb25zLnBsYXlsaXN0c1tpXS5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cblxuLyoqXG4gKiBGdW5jdGlvbiB0byBpbnZva2Ugd2hlbiB0aGUgcGxheWVyIGlzIHJlYWR5LlxuICpcbiAqIFRoaXMgaXMgYSBncmVhdCBwbGFjZSBmb3IgeW91ciBwbHVnaW4gdG8gaW5pdGlhbGl6ZSBpdHNlbGYuIFdoZW4gdGhpc1xuICogZnVuY3Rpb24gaXMgY2FsbGVkLCB0aGUgcGxheWVyIHdpbGwgaGF2ZSBpdHMgRE9NIGFuZCBjaGlsZCBjb21wb25lbnRzXG4gKiBpbiBwbGFjZS5cbiAqXG4gKiBAZnVuY3Rpb24gb25QbGF5ZXJSZWFkeVxuICogQHBhcmFtICAgIHtQbGF5ZXJ9IHBsYXllclxuICogQHBhcmFtICAgIHtPYmplY3R9IFtvcHRpb25zPXt9XVxuICovXG5jb25zdCBvblBsYXllclJlYWR5ID0gKGJjcGxheWVyLCBvcHRpb25zKSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZygnQnJpZ2h0Y292ZSBQbGF5ZXIgbXVsdGlQbGF5bGlzdCBsb2FkZWQnKTtcblxuICAgIC8vZXZlbnRzID0gYmNwbGF5ZXIuZGVidWdnZXJXaW5kb3cuZ2V0RXZlbnRzO1xuXG4gICAgLy9iY3BsYXllci5hZGRDbGFzcygndmpzLXBsYXllci1kZWJ1Z2dlcicpO1xuXG4gICAgbGV0IGZvbnRhd2Vzb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGZvbnRhd2Vzb21lLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBmb250YXdlc29tZS5ocmVmID0gXCIvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjAuMy9jc3MvZm9udC1hd2Vzb21lLmNzc1wiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9udGF3ZXNvbWUpO1xuXG4gICAgc2V0T3B0aW9ucyhvcHRpb25zKTtcblxuICAgIGJ1aWxkQ29udGFpbmVyKGJjcGxheWVyKTtcblxufTtcbi8qKlxuICogQSBCcmlnaHRjb3ZlIHZpZGVvLmpzIHBsdWdpbi5cbiAqXG4gKiBJbiB0aGUgcGx1Z2luIGZ1bmN0aW9uLCB0aGUgdmFsdWUgb2YgYHRoaXNgIGlzIGEgdmlkZW8uanMgYFBsYXllcmBcbiAqIGluc3RhbmNlLiBZb3UgY2Fubm90IHJlbHkgb24gdGhlIHBsYXllciBiZWluZyBpbiBhIFwicmVhZHlcIiBzdGF0ZSBoZXJlLFxuICogZGVwZW5kaW5nIG9uIGhvdyB0aGUgcGx1Z2luIGlzIGludm9rZWQuIFRoaXMgbWF5IG9yIG1heSBub3QgYmUgaW1wb3J0YW50XG4gKiB0byB5b3U7IGlmIG5vdCwgcmVtb3ZlIHRoZSB3YWl0IGZvciBcInJlYWR5XCIhXG4gKlxuICogQGZ1bmN0aW9uIHBsYXllckRlYnVnZ2VyXG4gKiBAcGFyYW0gICAge09iamVjdH0gW29wdGlvbnM9e31dXG4gKiAgICAgICAgICAgQW4gb2JqZWN0IG9mIG9wdGlvbnMgbGVmdCB0byB0aGUgcGx1Z2luIGF1dGhvciB0byBkZWZpbmUuXG4gKi9cbmNvbnN0IG11bHRpUGxheWxpc3QgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdGhpcy5yZWFkeSgoKSA9PiB7XG5cbiAgICAgICAgX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBvblBsYXllclJlYWR5KHRoaXMsIHZpZGVvanMubWVyZ2VPcHRpb25zKGRlZmF1bHRzLCBfb3B0aW9ucykpO1xuICAgIH0pO1xufTtcblxuLy8gUmVnaXN0ZXIgdGhlIHBsdWdpbiB3aXRoIHZpZGVvLmpzLlxudmlkZW9qcy5wbHVnaW4oJ211bHRpUGxheWxpc3QnLCBtdWx0aVBsYXlsaXN0KTtcblxuLy8gSW5jbHVkZSB0aGUgdmVyc2lvbiBudW1iZXIuXG5tdWx0aVBsYXlsaXN0LlZFUlNJT04gPSAnX19WRVJTSU9OX18nO1xuXG5leHBvcnQgZGVmYXVsdCBtdWx0aVBsYXlsaXN0O1xuIl19
