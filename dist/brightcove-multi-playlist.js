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
                        /*player.catalog.getPlaylist(evt.currentTarget.id, function(error, playlist) {
                            player.catalog.load(playlist);
                            player.playlist.currentItem(0);
                            player.play();
                        });*/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva3JleW5vbGRzL1JlcG9zL2JyaWdodGNvdmUtbXVsdGktcGxheWxpc3Qvc3JjL2pzL2NvbXBvbmVudElEcy5qcyIsIi9Vc2Vycy9rcmV5bm9sZHMvUmVwb3MvYnJpZ2h0Y292ZS1tdWx0aS1wbGF5bGlzdC9zcmMvanMvcGxheWxpc3RDb250YWluZXIuanMiLCIvVXNlcnMva3JleW5vbGRzL1JlcG9zL2JyaWdodGNvdmUtbXVsdGktcGxheWxpc3Qvc3JjL3BsdWdpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQU8sSUFBSSxHQUFHLEdBQUc7QUFDYixlQUFXLEVBQUUsYUFBYTtBQUMxQixXQUFPLEVBQUUsV0FBVztBQUNwQixZQUFRLEVBQUUsWUFBWTs7QUFFdEIsYUFBUyxFQUFFLFdBQVc7QUFDdEIsU0FBSyxFQUFFLE9BQU87QUFDZCxhQUFTLEVBQUUsV0FBVztBQUN0QixPQUFHLEVBQUUsYUFBYTtBQUNsQixnQkFBWSxFQUFFLGNBQWM7QUFDNUIsbUJBQWUsRUFBRSxpQkFBaUI7QUFDbEMsMkJBQXVCLEVBQUUseUJBQXlCO0FBQ2xELHVCQUFtQixFQUFFLHFCQUFxQjtBQUMxQyx5QkFBcUIsRUFBRSx1QkFBdUI7QUFDOUMsNkJBQXlCLEVBQUUsMkJBQTJCO0FBQ3RELGVBQVcsRUFBRSxhQUFhO0FBQzFCLGtCQUFjLEVBQUUsZ0JBQWdCO0FBQ2hDLGdCQUFZLEVBQUUsY0FBYztBQUM1QixvQkFBZ0IsRUFBRSxrQkFBa0I7QUFDcEMsc0JBQWtCLEVBQUUsb0JBQW9COzs7QUFHeEMsWUFBUSxFQUFFLFVBQVU7QUFDcEIsV0FBTyxFQUFFLFNBQVM7QUFDbEIsV0FBTyxFQUFFLFNBQVM7QUFDbEIsaUJBQWEsRUFBRSxlQUFlO0FBQzlCLGNBQVUsRUFBRSxZQUFZO0NBQzNCLENBQUM7Ozs7Ozs7Ozs7Ozs7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QUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUNqRSxDQUFDLENBQUM7Q0FDTixDQUFDOzs7QUFHRixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQzs7O0FBRy9DLGFBQWEsQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDOztxQkFFdkIsYUFBYSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgbGV0IElEcyA9IHtcbiAgICBteUJsYWNrYmlyZDogJ215QmxhY2tiaXJkJyxcbiAgICBmaWx0ZXJzOiAnYmJGaWx0ZXJzJyxcbiAgICBjb250cm9sczogJ2JiQ29udHJvbHMnLFxuICAgIC8vc2l6ZTogJ2JiU2l6ZScsXG4gICAgc2VuZEVtYWlsOiAnc2VuZEVtYWlsJyxcbiAgICBtb2RhbDogJ21vZGFsJyxcbiAgICBidXR0b25CYXI6ICdidXR0b25CYXInLFxuICAgIGxvZzogJ215QmxhY2tiaXJkJyxcbiAgICBidG5Ub2dnbGVMb2c6ICdidG5Ub2dnbGVMb2cnLFxuICAgIGJ0blRvZ2dsZVNsaWRlcjogJ2J0blRvZ2dsZVNsaWRlcicsXG4gICAgYnRuVG9nZ2xlUGxheWVyU2V0dGluZ3M6ICdidG5Ub2dnbGVQbGF5ZXJTZXR0aW5ncycsXG4gICAgYnRuVG9nZ2xlQWRTZXR0aW5nczogJ2J0blRvZ2dsZUFkU2V0dGluZ3MnLFxuICAgIGJ0blRvZ2dsZVBsYXliYWNrSW5mbzogJ2J0blRvZ2dsZVBsYXliYWNrSW5mbycsXG4gICAgYnRuVG9nZ2xlRGVidWdnZXJTZXR0aW5nczogJ2J0blRvZ2dsZURlYnVnZ2VyU2V0dGluZ3MnLFxuICAgIGNsYXNzZXNMaXN0OiAnY2xhc3Nlc0xpc3QnLFxuICAgIHBsYXllclNldHRpbmdzOiAncGxheWVyU2V0dGluZ3MnLFxuICAgIHBsYXliYWNrSW5mbzogJ3BsYXliYWNrSW5mbycsXG4gICAgZGVidWdnZXJTZXR0aW5nczogJ2RlYnVnZ2VyU2V0dGluZ3MnLFxuICAgIGJ0blRvZ2dsZUNsYXNzTGlzdDogJ2J0blRvZ2dsZUNsYXNzTGlzdCcsXG4gICAgLy9iaWdQbGF5QnV0dG9uU3R5bGVzOiAnYmlnUGxheUJ1dHRvblN0eWxlcycsXG4gICAgLy9wb3N0ZXJTdHlsZXM6ICdwb3N0ZXJTdHlsZXMnLFxuICAgIGxvZ1RhYmxlOiAnbG9nVGFibGUnLFxuICAgIGxvZ0xpc3Q6ICdsb2dMaXN0JyxcbiAgICBsb2dKU09OOiAnbG9nSlNPTicsXG4gICAgbWVkaWFTZXR0aW5nczogJ21lZGlhU2V0dGluZ3MnLFxuICAgIGFkU2V0dGluZ3M6ICdhZFNldHRpbmdzJ1xufTtcbiIsIi8qKlxuICogQGZpbGUgcGxheWxpc3RDb250YWluZXIuanNcbiAqL1xuIGltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHtQbGF5ZXJ8T2JqZWN0fSBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKiBAY2xhc3MgUGxheWxpc3RDb250YWluZXJcbiAqL1xuY2xhc3MgUGxheWxpc3RDb250YWluZXIgZXh0ZW5kcyB2aWRlb2pzLkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cbiAgICBzdXBlcihwbGF5ZXIsb3B0aW9ucyk7XG5cbiAgICAvL3RoaXMuY29udGVudCh0aGlzLm9wdGlvbnNfLmNvbnRlbnQpO1xuXG4gICAgdGhpcy5lbF8gPSB2aWRlb2pzLmNyZWF0ZUVsKFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIFwiaWRcIiA6IHRoaXMub3B0aW9uc18uaWRcbiAgICAgIH1cblxuICAgICk7XG5cbiAgICB0aGlzLmhlYWRlckVsXyA9IHZpZGVvanMuY3JlYXRlRWwoJ2RpdicsXG4gICAgICB7XCJjbGFzc05hbWVcIjogJ2hlYWRlcid9XG4gICAgKTtcbiAgICB0aGlzLmhlYWRlckVsXy5pbm5lckhUTUw9JzxoMj4nICsgdGhpcy5vcHRpb25zXy5uYW1lICsgJzwvaDI+JztcbiAgICB0aGlzLmVsXy5hcHBlbmRDaGlsZCh0aGlzLmhlYWRlckVsXyk7XG5cbiAgICB0aGlzLmNvbnRlbnRFbF8gPSB2aWRlb2pzLmNyZWF0ZUVsKCdkaXYnLCB7XCJjbGFzc05hbWVcIjogJ21haW4nfSk7XG4gICAgdGhpcy5jb250ZW50RWxfLmlubmVySFRNTCA9IHRoaXMub3B0aW9uc18uY29udGVudDtcbiAgICB0aGlzLmVsXy5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnRFbF8pO1xuXG4gICAgdGhpcy5mb290ZXJFbF8gPSB2aWRlb2pzLmNyZWF0ZUVsKCdkaXYnLCB7XCJjbGFzc05hbWVcIiA6ICdmb290ZXInfSk7XG4gICAgdGhpcy5lbF8uYXBwZW5kQ2hpbGQodGhpcy5mb290ZXJFbF8pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29udGVudCh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmNvbnRlbnRFbF8uaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRFbF8uaW5uZXJIVE1MO1xuICB9XG5cblxufVxuXG52aWRlb2pzLkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUGxheWxpc3RDb250YWluZXInLCBQbGF5bGlzdENvbnRhaW5lcik7XG5leHBvcnQgZGVmYXVsdCBQbGF5bGlzdENvbnRhaW5lcjtcbiIsImltcG9ydCBQbGF5bGlzdENvbnRhaW5lciBmcm9tICcuL2pzL3BsYXlsaXN0Q29udGFpbmVyLmpzJztcbmltcG9ydCB7XG4gICAgSURzXG59IGZyb20gJy4vanMvY29tcG9uZW50SURzLmpzJztcblxuLy8gRGVmYXVsdCBvcHRpb25zIGZvciB0aGUgcGx1Z2luLlxuY29uc3QgZGVmYXVsdHMgPSB7fTtcblxuLy8gbXkgZGVidWdnZXIgbGV0c1xubGV0IF9vcHRpb25zLFxuICAgIHBsYXllcixcbiAgICBhZFNldHRpbmdzLFxuICAgIGxhc3RFdmVudCA9IFwiXCIsXG4gICAgY3VycmVudEV2ZW50ID0gXCJcIixcbiAgICBNb2RhbCxcbiAgICBwbGF5bGlzdE1vZGFsLFxuICAgIGNoaWxkLFxuICAgIHBsYXlsaXN0VGl0bGUsXG4gICAgZGF0YSxcbiAgICBpZCxcbiAgICBjaGlsZFN0cmluZztcblxuXG52YXIgcGxheWxpc3RNb2RhbEJ1dHRvbiA9IHZpZGVvanMuZXh0ZW5kKHZpZGVvanMuQnV0dG9uLCB7XG4gICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uKHBsYXllciwgb3B0aW9ucykge1xuXG4gICAgICAgIHZpZGVvanMuQnV0dG9uLmNhbGwodGhpcywgcGxheWVyLCBvcHRpb25zKTtcblxuXG4gICAgICAgIHBsYXllci5vbignbG9hZHN0YXJ0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfb3B0aW9ucyk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQmluZCBjbGljayBldmVudCBmb3IgZGVza3RvcCBicm93c2Vyc1xuICAgICAgICB0aGlzLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge30pO1xuICAgIH0sXG5cbiAgICBjcmVhdGVFbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB2aWRlb2pzLkJ1dHRvbi5wcm90b3R5cGUuY3JlYXRlRWwuY2FsbCh0aGlzLCAnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAndmpzLXBsYXlsaXN0LWJ1dHRvbiB2anMtbWVudS1idXR0b24gdmpzLW1lbnUtYnV0dG9uLXBvcHVwIHZqcy1jb250cm9sIHZqcy1idXR0b24nLFxuICAgICAgICAgICAgaW5uZXJIVE1MOiAnPGRpdiBjbGFzcz1cInZqcy1tZW51IHBsYXlsaXN0TW9kYWwgdmpzLWljb25zLWNoYXB0ZXJzXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPjx1bCBpZD1cInZqcy1wbGF5bGlzdC1tZW51XCIgY2xhc3M9XCJ2anMtcGxheWxpc3QtbWVudSB2anMtbWVudS1jb250ZW50XCJyb2xlPVwibWVudVwiPjwvdWw+PC9kaXY+PHNwYW4gY2xhc3M9XCJ2anMtY29udHJvbC10ZXh0XCI+UGxheWxpc3Q8L3NwYW4+PC9kaXY+J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICAnYXJpYS1saXZlJzogJ3BvbGl0ZScsXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBmaW5kQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgdmFyIGZvdW5kRWxlbWVudCA9IG51bGwsXG4gICAgICAgIGZvdW5kO1xuXG4gICAgZnVuY3Rpb24gcmVjdXJzZShlbGVtZW50LCBjbGFzc05hbWUsIGZvdW5kKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCAmJiAhZm91bmQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIGVsID0gZWxlbWVudC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUgIT0gdW5kZWZpbmVkID8gZWwuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKSA6IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpsID0gY2xhc3Nlcy5sZW5ndGg7IGogPCBqbDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsYXNzZXNbal0gPT0gY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRFbGVtZW50ID0gZWxlbWVudC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZm91bmQpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICByZWN1cnNlKGVsZW1lbnQuY2hpbGROb2Rlc1tpXSwgY2xhc3NOYW1lLCBmb3VuZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVjdXJzZShlbGVtZW50LCBjbGFzc05hbWUsIGZhbHNlKTtcbiAgICByZXR1cm4gZm91bmRFbGVtZW50O1xufVxuXG5cbmxldCBidWlsZENvbnRhaW5lciA9IChwbGF5ZXIpID0+IHtcbiAgICB2aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KFwicGxheWxpc3RNb2RhbEJ1dHRvblwiLCBwbGF5bGlzdE1vZGFsQnV0dG9uKTtcblxuICAgIHZhciBidXR0b25JbmRleCA9IHBsYXllci5jb250cm9sQmFyLmNoaWxkcmVuKCkubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgcmV0dXJuIGMubmFtZSgpO1xuICAgIH0pLmluZGV4T2YoJ0Z1bGxzY3JlZW5Ub2dnbGUnKSAtIDE7XG4gICAgcGxheWVyLmNvbnRyb2xCYXIucGxheWxpc3RCdXR0b24gPSBwbGF5ZXIuY29udHJvbEJhci5hZGRDaGlsZCgncGxheWxpc3RNb2RhbEJ1dHRvbicsIG51bGwsIGJ1dHRvbkluZGV4KTtcbiAgICBwbGF5ZXIuY29udHJvbEJhci5wbGF5bGlzdEJ1dHRvbi5lbCgpLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcblxuICAgIHBsYXlsaXN0TW9kYWwgPSBmaW5kQ2xhc3MocGxheWVyLmNvbnRyb2xCYXIucGxheWxpc3RCdXR0b24uZWxfLCBcInZqcy1wbGF5bGlzdC1tZW51XCIpO1xuICAgIGNvbnNvbGUubG9nKHBsYXlsaXN0TW9kYWwpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX29wdGlvbnMucGxheWxpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBsYXllci5jYXRhbG9nLmdldFBsYXlsaXN0KF9vcHRpb25zLnBsYXlsaXN0c1tpXS5pZCwgZnVuY3Rpb24oZXJyb3IsIHBsYXlsaXN0KSB7XG4gICAgICAgICAgICBkYXRhID0gcGxheWVyLmNhdGFsb2cuZGF0YTtcbiAgICAgICAgICAgIGNoaWxkU3RyaW5nID0gXCI8bGkgY2xhc3M9J3Zqcy1wbGF5bGlzdC10aXRsZScgaWQ9J1wiICsgZGF0YS5pZCArIFwiJz5cIiArIGRhdGEubmFtZSArIFwiPC9saT48dWwgc3R5bGU9J2Rpc3BsYXk6bm9uZTsnPlwiO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwbGF5bGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNoaWxkU3RyaW5nICs9IFwiPGRpdiBjbGFzcz0ndmpzLXZpZGVvLXRpdGxlIHZqcy1tZW51LWl0ZW0nIHBsYXlsaXN0SWQ9J1wiICsgZGF0YS5pZCArIFwiJ2lkPSdcIiArIHBsYXlsaXN0W2pdLmlkICsgXCInPlwiICsgcGxheWxpc3Rbal0ubmFtZSArXCI8aW1nIGNsYXNzPSd2anMtdGh1bWJuYWlsJyBzdHlsZT0ncG9pbnRlci1ldmVudHM6bm9uZTsnc3JjPVwiK3BsYXlsaXN0W2pdLnRodW1ibmFpbCArXCI+PC9pbWc+PC9kaXY+XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGlsZFN0cmluZyArPSBcIjwvdWw+XCI7XG4gICAgICAgICAgICBwbGF5bGlzdE1vZGFsLmlubmVySFRNTCArPSBjaGlsZFN0cmluZztcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgcGxheWxpc3RNb2RhbC5jaGlsZE5vZGVzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBwbGF5bGlzdE1vZGFsLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXlsaXN0TW9kYWwuY2hpbGROb2Rlc1t4XS5jbGFzc05hbWUgPT09ICd2anMtcGxheWxpc3QtdGl0bGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlsaXN0TW9kYWwuY2hpbGROb2Rlc1t4XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLypwbGF5ZXIuY2F0YWxvZy5nZXRQbGF5bGlzdChldnQuY3VycmVudFRhcmdldC5pZCwgZnVuY3Rpb24oZXJyb3IsIHBsYXlsaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmNhdGFsb2cubG9hZChwbGF5bGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBsYXlsaXN0LmN1cnJlbnRJdGVtKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsqL1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXZ0LnRhcmdldC5uZXh0U2libGluZy5zdHlsZS5kaXNwbGF5PT09XCJub25lXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnRhcmdldC5uZXh0U2libGluZy5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBldnQudGFyZ2V0Lm5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXlsaXN0TW9kYWwuY2hpbGROb2Rlc1t4XS50YWdOYW1lID09PSAnVUwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gcGxheWxpc3RNb2RhbC5jaGlsZE5vZGVzW3hdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHRlbXAuY2hpbGROb2Rlcy5sZW5ndGg7IHorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcC5jaGlsZE5vZGVzW3pdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmNhdGFsb2cuZ2V0UGxheWxpc3QoZXZ0LmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlcy5wbGF5bGlzdElkLnZhbHVlLCBmdW5jdGlvbihlcnJvciwgcGxheWxpc3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuY2F0YWxvZy5sb2FkKHBsYXlsaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBrID0wOyBrIDwgcGxheWxpc3QubGVuZ3RoOyBrKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXZ0LnRhcmdldC5pZCA9PT0gcGxheWxpc3Rba10uaWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5wbGF5bGlzdC5jdXJyZW50SXRlbShrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xufTtcblxuXG5sZXQgc2V0T3B0aW9ucyA9IChvcHQpID0+IHtcbiAgICBfb3B0aW9ucyA9IG9wdDtcbiAgICBpZiAoX29wdGlvbnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfb3B0aW9ucy5wbGF5bGlzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKF9vcHRpb25zLnBsYXlsaXN0c1tpXS5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cblxuLyoqXG4gKiBGdW5jdGlvbiB0byBpbnZva2Ugd2hlbiB0aGUgcGxheWVyIGlzIHJlYWR5LlxuICpcbiAqIFRoaXMgaXMgYSBncmVhdCBwbGFjZSBmb3IgeW91ciBwbHVnaW4gdG8gaW5pdGlhbGl6ZSBpdHNlbGYuIFdoZW4gdGhpc1xuICogZnVuY3Rpb24gaXMgY2FsbGVkLCB0aGUgcGxheWVyIHdpbGwgaGF2ZSBpdHMgRE9NIGFuZCBjaGlsZCBjb21wb25lbnRzXG4gKiBpbiBwbGFjZS5cbiAqXG4gKiBAZnVuY3Rpb24gb25QbGF5ZXJSZWFkeVxuICogQHBhcmFtICAgIHtQbGF5ZXJ9IHBsYXllclxuICogQHBhcmFtICAgIHtPYmplY3R9IFtvcHRpb25zPXt9XVxuICovXG5jb25zdCBvblBsYXllclJlYWR5ID0gKGJjcGxheWVyLCBvcHRpb25zKSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZygnQnJpZ2h0Y292ZSBQbGF5ZXIgbXVsdGlQbGF5bGlzdCBsb2FkZWQnKTtcblxuICAgIC8vZXZlbnRzID0gYmNwbGF5ZXIuZGVidWdnZXJXaW5kb3cuZ2V0RXZlbnRzO1xuXG4gICAgLy9iY3BsYXllci5hZGRDbGFzcygndmpzLXBsYXllci1kZWJ1Z2dlcicpO1xuXG4gICAgbGV0IGZvbnRhd2Vzb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGZvbnRhd2Vzb21lLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBmb250YXdlc29tZS5ocmVmID0gXCIvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjAuMy9jc3MvZm9udC1hd2Vzb21lLmNzc1wiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9udGF3ZXNvbWUpO1xuXG4gICAgc2V0T3B0aW9ucyhvcHRpb25zKTtcblxuICAgIGJ1aWxkQ29udGFpbmVyKGJjcGxheWVyKTtcblxufTtcbi8qKlxuICogQSBCcmlnaHRjb3ZlIHZpZGVvLmpzIHBsdWdpbi5cbiAqXG4gKiBJbiB0aGUgcGx1Z2luIGZ1bmN0aW9uLCB0aGUgdmFsdWUgb2YgYHRoaXNgIGlzIGEgdmlkZW8uanMgYFBsYXllcmBcbiAqIGluc3RhbmNlLiBZb3UgY2Fubm90IHJlbHkgb24gdGhlIHBsYXllciBiZWluZyBpbiBhIFwicmVhZHlcIiBzdGF0ZSBoZXJlLFxuICogZGVwZW5kaW5nIG9uIGhvdyB0aGUgcGx1Z2luIGlzIGludm9rZWQuIFRoaXMgbWF5IG9yIG1heSBub3QgYmUgaW1wb3J0YW50XG4gKiB0byB5b3U7IGlmIG5vdCwgcmVtb3ZlIHRoZSB3YWl0IGZvciBcInJlYWR5XCIhXG4gKlxuICogQGZ1bmN0aW9uIHBsYXllckRlYnVnZ2VyXG4gKiBAcGFyYW0gICAge09iamVjdH0gW29wdGlvbnM9e31dXG4gKiAgICAgICAgICAgQW4gb2JqZWN0IG9mIG9wdGlvbnMgbGVmdCB0byB0aGUgcGx1Z2luIGF1dGhvciB0byBkZWZpbmUuXG4gKi9cbmNvbnN0IG11bHRpUGxheWxpc3QgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdGhpcy5yZWFkeSgoKSA9PiB7XG5cbiAgICAgICAgX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBvblBsYXllclJlYWR5KHRoaXMsIHZpZGVvanMubWVyZ2VPcHRpb25zKGRlZmF1bHRzLCBfb3B0aW9ucykpO1xuICAgIH0pO1xufTtcblxuLy8gUmVnaXN0ZXIgdGhlIHBsdWdpbiB3aXRoIHZpZGVvLmpzLlxudmlkZW9qcy5wbHVnaW4oJ211bHRpUGxheWxpc3QnLCBtdWx0aVBsYXlsaXN0KTtcblxuLy8gSW5jbHVkZSB0aGUgdmVyc2lvbiBudW1iZXIuXG5tdWx0aVBsYXlsaXN0LlZFUlNJT04gPSAnX19WRVJTSU9OX18nO1xuXG5leHBvcnQgZGVmYXVsdCBtdWx0aVBsYXlsaXN0O1xuIl19
