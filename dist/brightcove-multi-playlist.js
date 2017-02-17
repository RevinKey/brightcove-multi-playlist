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
    childString = undefined,
    allPlayerEventsJSON = undefined,
    allPlayerEvents = [],
    currentDuration = undefined,
    currentSource = undefined,
    currentMedia = undefined,
    logTypes = {
    array: 'array',
    table: 'table',
    list: 'list',
    json: 'json'
};

// Array of events I came up with by watching debugger window and using documentation
var playerEvents = ['ready', // vidojs_component
'durationchange', // videojs_player, videojs_swf, videojs_contrib_hls
'ended', // videojs_contrib_ads, videojs_player, videojs_swf, videojs_qos
'error', // videojs_player
'firstplay', // videojs_player
'fullscreenchange', // videojs_qos, videojs_player
'loadedalldata', 'loadeddata', // videojs_player, videojs_swf
'loadedmetadata', // videojs_qos, videojs_player, videojs_contrib_hls, videojs_swf
'loadstart', // videojs_qos, videojs_player, videojs_swf
'pause', // videojs_qos, videojs_player, videojs_swf
'play', // videojs_qos, videojs_player, videojs_swf
'player_load', // videojs_bc_analytics
'contentupdate', // videojs_contrib_ads
'seeking', // videojs_player, videojs_swf
'seeked', // videojs_player, videojs_swf
'progress', // videojs_contrib_hls, videojs_player (videojs_swf?)
'catalog_request', // videojs_catalog
'catalog_response', // videojs_catalog
'playing', // videojs_qos, videojs_player, videojs_swf
'waiting', // videojs_player, videojs_swf
'video_view', // videojs_bc_analytics
'video_impression', // videojs_bc_analytics
'video_engagement', // videojs_bc_analytics
'play_request', // videojs_bc_analytics
'canplay', // videojs_player, videojs_swf
'canplaythrough', // videojs_player, videojs_swf
'timeupdate'];

var getPlayerEvents = function getPlayerEvents() {
    allPlayerEventsJSON = videojs.getData(player.el_).handlers;

    for (prop in allPlayerEventsJSON) {
        allPlayerEvents.push(prop);
    }

    allPlayerEvents.sort();

    for (i = 1; i < allPlayerEvents.length; i++) {
        console.log(allPlayerEvents[i]);
    }
};

var listenForPlayerEvents = function listenForPlayerEvents(player) {

    player.one('durationchange', function (e) {});

    var playCounter = 0;
    var msgStr = undefined,
        currentTime = undefined,
        previousTime = undefined,
        levelStr = 'debug';
    for (var _i = 0; _i < playerEvents.length; _i++) {
        player.on(playerEvents[_i], function (e) {
            switch (e.type) {
                case 'error':
                    break;
                case 'firstplay':
                    break;
                case 'play':
                    break;
                case 'loadedmetadata':
                    break;
                case 'pause':
                    break;
                case 'progress':
                    break;
                case 'contentupdate':
                    break;
                case 'seeking':
                    break;
                case 'canplaythrough':
                    break;
                case 'timeupdate':
                    break;
                case 'seeked':
                    break;
                case 'catalog_response':
                    break;
                case 'durationchange':
                    break;
                default:
                    msgStr = '';
                    levelStr = 'debug';
            }
        });
    }
};

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
            player.catalog.load(playlist);
            data = player.catalog.data;
            childString = "<li class='vjs-playlist-title vjs-menu-item' id='" + data.id + "'>" + data.name + "</li><ul>";
            for (var j = 0; j < playlist.length; j++) {
                childString += "<div class='vjs-video-title vjs-menu-item' playlistId='" + data.id + "'id='" + playlist[j].id + "'>" + playlist[j].name + "</div>";
            }
            childString += "</ul>";
            playlistModal.innerHTML += childString;
            for (var x = 0; x < playlistModal.childNodes.length; x++) {
                var temp = playlistModal.childNodes;
                if (playlistModal.childNodes[x].className === 'vjs-playlist-title vjs-menu-item') {
                    playlistModal.childNodes[x].addEventListener('click', function (evt) {
                        player.catalog.getPlaylist(evt.currentTarget.id, function (error, playlist) {
                            player.catalog.load(playlist);
                            player.playlist.currentItem(0);
                            player.play();
                        });
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

    listenForPlayerEvents(bcplayer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva3JleW5vbGRzL1JlcG9zL2JyaWdodGNvdmUtbXVsdGktcGxheWxpc3Qvc3JjL2pzL2NvbXBvbmVudElEcy5qcyIsIi9Vc2Vycy9rcmV5bm9sZHMvUmVwb3MvYnJpZ2h0Y292ZS1tdWx0aS1wbGF5bGlzdC9zcmMvanMvcGxheWxpc3RDb250YWluZXIuanMiLCIvVXNlcnMva3JleW5vbGRzL1JlcG9zL2JyaWdodGNvdmUtbXVsdGktcGxheWxpc3Qvc3JjL3BsdWdpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQU8sSUFBSSxHQUFHLEdBQUc7QUFDYixlQUFXLEVBQUUsYUFBYTtBQUMxQixXQUFPLEVBQUUsV0FBVztBQUNwQixZQUFRLEVBQUUsWUFBWTs7QUFFdEIsYUFBUyxFQUFFLFdBQVc7QUFDdEIsU0FBSyxFQUFFLE9BQU87QUFDZCxhQUFTLEVBQUUsV0FBVztBQUN0QixPQUFHLEVBQUUsYUFBYTtBQUNsQixnQkFBWSxFQUFFLGNBQWM7QUFDNUIsbUJBQWUsRUFBRSxpQkFBaUI7QUFDbEMsMkJBQXVCLEVBQUUseUJBQXlCO0FBQ2xELHVCQUFtQixFQUFFLHFCQUFxQjtBQUMxQyx5QkFBcUIsRUFBRSx1QkFBdUI7QUFDOUMsNkJBQXlCLEVBQUUsMkJBQTJCO0FBQ3RELGVBQVcsRUFBRSxhQUFhO0FBQzFCLGtCQUFjLEVBQUUsZ0JBQWdCO0FBQ2hDLGdCQUFZLEVBQUUsY0FBYztBQUM1QixvQkFBZ0IsRUFBRSxrQkFBa0I7QUFDcEMsc0JBQWtCLEVBQUUsb0JBQW9COzs7QUFHeEMsWUFBUSxFQUFFLFVBQVU7QUFDcEIsV0FBTyxFQUFFLFNBQVM7QUFDbEIsV0FBTyxFQUFFLFNBQVM7QUFDbEIsaUJBQWEsRUFBRSxlQUFlO0FBQzlCLGNBQVUsRUFBRSxZQUFZO0NBQzNCLENBQUM7Ozs7Ozs7Ozs7Ozs7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QUFRLEdBQUcsT0FBTyxDQUFDO0FBQ25CLHFCQUFhLFFBQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUNqRSxDQUFDLENBQUM7Q0FDTixDQUFDOzs7QUFHRixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQzs7O0FBRy9DLGFBQWEsQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDOztxQkFFdkIsYUFBYSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgbGV0IElEcyA9IHtcbiAgICBteUJsYWNrYmlyZDogJ215QmxhY2tiaXJkJyxcbiAgICBmaWx0ZXJzOiAnYmJGaWx0ZXJzJyxcbiAgICBjb250cm9sczogJ2JiQ29udHJvbHMnLFxuICAgIC8vc2l6ZTogJ2JiU2l6ZScsXG4gICAgc2VuZEVtYWlsOiAnc2VuZEVtYWlsJyxcbiAgICBtb2RhbDogJ21vZGFsJyxcbiAgICBidXR0b25CYXI6ICdidXR0b25CYXInLFxuICAgIGxvZzogJ215QmxhY2tiaXJkJyxcbiAgICBidG5Ub2dnbGVMb2c6ICdidG5Ub2dnbGVMb2cnLFxuICAgIGJ0blRvZ2dsZVNsaWRlcjogJ2J0blRvZ2dsZVNsaWRlcicsXG4gICAgYnRuVG9nZ2xlUGxheWVyU2V0dGluZ3M6ICdidG5Ub2dnbGVQbGF5ZXJTZXR0aW5ncycsXG4gICAgYnRuVG9nZ2xlQWRTZXR0aW5nczogJ2J0blRvZ2dsZUFkU2V0dGluZ3MnLFxuICAgIGJ0blRvZ2dsZVBsYXliYWNrSW5mbzogJ2J0blRvZ2dsZVBsYXliYWNrSW5mbycsXG4gICAgYnRuVG9nZ2xlRGVidWdnZXJTZXR0aW5nczogJ2J0blRvZ2dsZURlYnVnZ2VyU2V0dGluZ3MnLFxuICAgIGNsYXNzZXNMaXN0OiAnY2xhc3Nlc0xpc3QnLFxuICAgIHBsYXllclNldHRpbmdzOiAncGxheWVyU2V0dGluZ3MnLFxuICAgIHBsYXliYWNrSW5mbzogJ3BsYXliYWNrSW5mbycsXG4gICAgZGVidWdnZXJTZXR0aW5nczogJ2RlYnVnZ2VyU2V0dGluZ3MnLFxuICAgIGJ0blRvZ2dsZUNsYXNzTGlzdDogJ2J0blRvZ2dsZUNsYXNzTGlzdCcsXG4gICAgLy9iaWdQbGF5QnV0dG9uU3R5bGVzOiAnYmlnUGxheUJ1dHRvblN0eWxlcycsXG4gICAgLy9wb3N0ZXJTdHlsZXM6ICdwb3N0ZXJTdHlsZXMnLFxuICAgIGxvZ1RhYmxlOiAnbG9nVGFibGUnLFxuICAgIGxvZ0xpc3Q6ICdsb2dMaXN0JyxcbiAgICBsb2dKU09OOiAnbG9nSlNPTicsXG4gICAgbWVkaWFTZXR0aW5nczogJ21lZGlhU2V0dGluZ3MnLFxuICAgIGFkU2V0dGluZ3M6ICdhZFNldHRpbmdzJ1xufTtcbiIsIi8qKlxuICogQGZpbGUgcGxheWxpc3RDb250YWluZXIuanNcbiAqL1xuIGltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHtQbGF5ZXJ8T2JqZWN0fSBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKiBAY2xhc3MgUGxheWxpc3RDb250YWluZXJcbiAqL1xuY2xhc3MgUGxheWxpc3RDb250YWluZXIgZXh0ZW5kcyB2aWRlb2pzLkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cbiAgICBzdXBlcihwbGF5ZXIsb3B0aW9ucyk7XG5cbiAgICAvL3RoaXMuY29udGVudCh0aGlzLm9wdGlvbnNfLmNvbnRlbnQpO1xuXG4gICAgdGhpcy5lbF8gPSB2aWRlb2pzLmNyZWF0ZUVsKFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIFwiaWRcIiA6IHRoaXMub3B0aW9uc18uaWRcbiAgICAgIH1cblxuICAgICk7XG5cbiAgICB0aGlzLmhlYWRlckVsXyA9IHZpZGVvanMuY3JlYXRlRWwoJ2RpdicsXG4gICAgICB7XCJjbGFzc05hbWVcIjogJ2hlYWRlcid9XG4gICAgKTtcbiAgICB0aGlzLmhlYWRlckVsXy5pbm5lckhUTUw9JzxoMj4nICsgdGhpcy5vcHRpb25zXy5uYW1lICsgJzwvaDI+JztcbiAgICB0aGlzLmVsXy5hcHBlbmRDaGlsZCh0aGlzLmhlYWRlckVsXyk7XG5cbiAgICB0aGlzLmNvbnRlbnRFbF8gPSB2aWRlb2pzLmNyZWF0ZUVsKCdkaXYnLCB7XCJjbGFzc05hbWVcIjogJ21haW4nfSk7XG4gICAgdGhpcy5jb250ZW50RWxfLmlubmVySFRNTCA9IHRoaXMub3B0aW9uc18uY29udGVudDtcbiAgICB0aGlzLmVsXy5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnRFbF8pO1xuXG4gICAgdGhpcy5mb290ZXJFbF8gPSB2aWRlb2pzLmNyZWF0ZUVsKCdkaXYnLCB7XCJjbGFzc05hbWVcIiA6ICdmb290ZXInfSk7XG4gICAgdGhpcy5lbF8uYXBwZW5kQ2hpbGQodGhpcy5mb290ZXJFbF8pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29udGVudCh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmNvbnRlbnRFbF8uaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRFbF8uaW5uZXJIVE1MO1xuICB9XG5cblxufVxuXG52aWRlb2pzLkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUGxheWxpc3RDb250YWluZXInLCBQbGF5bGlzdENvbnRhaW5lcik7XG5leHBvcnQgZGVmYXVsdCBQbGF5bGlzdENvbnRhaW5lcjtcbiIsImltcG9ydCBQbGF5bGlzdENvbnRhaW5lciBmcm9tICcuL2pzL3BsYXlsaXN0Q29udGFpbmVyLmpzJztcbmltcG9ydCB7XG4gICAgSURzXG59IGZyb20gJy4vanMvY29tcG9uZW50SURzLmpzJztcblxuLy8gRGVmYXVsdCBvcHRpb25zIGZvciB0aGUgcGx1Z2luLlxuY29uc3QgZGVmYXVsdHMgPSB7fTtcblxuLy8gbXkgZGVidWdnZXIgbGV0c1xubGV0IF9vcHRpb25zLFxuICAgIHBsYXllcixcbiAgICBhZFNldHRpbmdzLFxuICAgIGxhc3RFdmVudCA9IFwiXCIsXG4gICAgY3VycmVudEV2ZW50ID0gXCJcIixcbiAgICBNb2RhbCxcbiAgICBwbGF5bGlzdE1vZGFsLFxuICAgIGNoaWxkLFxuICAgIHBsYXlsaXN0VGl0bGUsXG4gICAgZGF0YSxcbiAgICBpZCxcbiAgICBjaGlsZFN0cmluZyxcbiAgICBhbGxQbGF5ZXJFdmVudHNKU09OLFxuICAgIGFsbFBsYXllckV2ZW50cyA9IFtdLFxuICAgIGN1cnJlbnREdXJhdGlvbixcbiAgICBjdXJyZW50U291cmNlLFxuICAgIGN1cnJlbnRNZWRpYSxcbiAgICBsb2dUeXBlcyA9IHtcbiAgICAgICAgYXJyYXk6ICdhcnJheScsXG4gICAgICAgIHRhYmxlOiAndGFibGUnLFxuICAgICAgICBsaXN0OiAnbGlzdCcsXG4gICAgICAgIGpzb246ICdqc29uJ1xuICAgIH07XG5cbi8vIEFycmF5IG9mIGV2ZW50cyBJIGNhbWUgdXAgd2l0aCBieSB3YXRjaGluZyBkZWJ1Z2dlciB3aW5kb3cgYW5kIHVzaW5nIGRvY3VtZW50YXRpb25cbmxldCBwbGF5ZXJFdmVudHMgPSBbXG4gICAgJ3JlYWR5JywgLy8gdmlkb2pzX2NvbXBvbmVudFxuICAgICdkdXJhdGlvbmNoYW5nZScsIC8vIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZiwgdmlkZW9qc19jb250cmliX2hsc1xuICAgICdlbmRlZCcsIC8vIHZpZGVvanNfY29udHJpYl9hZHMsIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZiwgdmlkZW9qc19xb3NcbiAgICAnZXJyb3InLCAvLyB2aWRlb2pzX3BsYXllclxuICAgICdmaXJzdHBsYXknLCAvLyB2aWRlb2pzX3BsYXllclxuICAgICdmdWxsc2NyZWVuY2hhbmdlJywgLy8gdmlkZW9qc19xb3MsIHZpZGVvanNfcGxheWVyXG4gICAgJ2xvYWRlZGFsbGRhdGEnLFxuICAgICdsb2FkZWRkYXRhJywgLy8gdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ2xvYWRlZG1ldGFkYXRhJywgLy8gdmlkZW9qc19xb3MsIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX2NvbnRyaWJfaGxzLCB2aWRlb2pzX3N3ZlxuICAgICdsb2Fkc3RhcnQnLCAvLyB2aWRlb2pzX3FvcywgdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ3BhdXNlJywgLy8gdmlkZW9qc19xb3MsIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICdwbGF5JywgLy8gdmlkZW9qc19xb3MsIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICdwbGF5ZXJfbG9hZCcsIC8vIHZpZGVvanNfYmNfYW5hbHl0aWNzXG4gICAgJ2NvbnRlbnR1cGRhdGUnLCAvLyB2aWRlb2pzX2NvbnRyaWJfYWRzXG4gICAgJ3NlZWtpbmcnLCAvLyB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAnc2Vla2VkJywgLy8gdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ3Byb2dyZXNzJywgLy8gdmlkZW9qc19jb250cmliX2hscywgdmlkZW9qc19wbGF5ZXIgKHZpZGVvanNfc3dmPylcbiAgICAnY2F0YWxvZ19yZXF1ZXN0JywgLy8gdmlkZW9qc19jYXRhbG9nXG4gICAgJ2NhdGFsb2dfcmVzcG9uc2UnLCAvLyB2aWRlb2pzX2NhdGFsb2dcbiAgICAncGxheWluZycsIC8vIHZpZGVvanNfcW9zLCB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAnd2FpdGluZycsIC8vIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICd2aWRlb192aWV3JywgLy8gdmlkZW9qc19iY19hbmFseXRpY3NcbiAgICAndmlkZW9faW1wcmVzc2lvbicsIC8vIHZpZGVvanNfYmNfYW5hbHl0aWNzXG4gICAgJ3ZpZGVvX2VuZ2FnZW1lbnQnLCAvLyB2aWRlb2pzX2JjX2FuYWx5dGljc1xuICAgICdwbGF5X3JlcXVlc3QnLCAvLyB2aWRlb2pzX2JjX2FuYWx5dGljc1xuICAgICdjYW5wbGF5JywgLy8gdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ2NhbnBsYXl0aHJvdWdoJywgLy8gdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ3RpbWV1cGRhdGUnXG5dO1xuXG5sZXQgZ2V0UGxheWVyRXZlbnRzID0gKCkgPT4ge1xuICAgIGFsbFBsYXllckV2ZW50c0pTT04gPSB2aWRlb2pzLmdldERhdGEocGxheWVyLmVsXykuaGFuZGxlcnM7XG5cblxuICAgIGZvciAocHJvcCBpbiBhbGxQbGF5ZXJFdmVudHNKU09OKSB7XG4gICAgICAgIGFsbFBsYXllckV2ZW50cy5wdXNoKHByb3ApO1xuICAgIH1cblxuICAgIGFsbFBsYXllckV2ZW50cy5zb3J0KCk7XG5cbiAgICBmb3IgKGkgPSAxOyBpIDwgYWxsUGxheWVyRXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFBsYXllckV2ZW50c1tpXSk7XG4gICAgfVxufTtcblxubGV0IGxpc3RlbkZvclBsYXllckV2ZW50cyA9IChwbGF5ZXIpID0+IHtcblxuICAgIHBsYXllci5vbmUoJ2R1cmF0aW9uY2hhbmdlJywgZnVuY3Rpb24oZSkge30pO1xuXG4gICAgbGV0IHBsYXlDb3VudGVyID0gMDtcbiAgICBsZXQgbXNnU3RyLCBjdXJyZW50VGltZSwgcHJldmlvdXNUaW1lLCBsZXZlbFN0ciA9ICdkZWJ1Zyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJFdmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGxheWVyLm9uKHBsYXllckV2ZW50c1tpXSwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpcnN0cGxheSc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BsYXknOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsb2FkZWRtZXRhZGF0YSc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BhdXNlJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncHJvZ3Jlc3MnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjb250ZW50dXBkYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2Vla2luZyc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NhbnBsYXl0aHJvdWdoJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAndGltZXVwZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NlZWtlZCc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NhdGFsb2dfcmVzcG9uc2UnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdkdXJhdGlvbmNoYW5nZSc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIG1zZ1N0ciA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbFN0ciA9ICdkZWJ1Zyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbnZhciBwbGF5bGlzdE1vZGFsQnV0dG9uID0gdmlkZW9qcy5leHRlbmQodmlkZW9qcy5CdXR0b24sIHtcbiAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24ocGxheWVyLCBvcHRpb25zKSB7XG5cbiAgICAgICAgdmlkZW9qcy5CdXR0b24uY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cbiAgICAgICAgcGxheWVyLm9uKCdsb2Fkc3RhcnQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKF9vcHRpb25zKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBCaW5kIGNsaWNrIGV2ZW50IGZvciBkZXNrdG9wIGJyb3dzZXJzXG4gICAgICAgIHRoaXMub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7fSk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUVsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHZpZGVvanMuQnV0dG9uLnByb3RvdHlwZS5jcmVhdGVFbC5jYWxsKHRoaXMsICdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICd2anMtcGxheWxpc3QtYnV0dG9uIHZqcy1tZW51LWJ1dHRvbiB2anMtbWVudS1idXR0b24tcG9wdXAgdmpzLWNvbnRyb2wgdmpzLWJ1dHRvbicsXG4gICAgICAgICAgICBpbm5lckhUTUw6ICc8ZGl2IGNsYXNzPVwidmpzLW1lbnUgcGxheWxpc3RNb2RhbCB2anMtaWNvbnMtY2hhcHRlcnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+PHVsIGlkPVwidmpzLXBsYXlsaXN0LW1lbnVcIiBjbGFzcz1cInZqcy1wbGF5bGlzdC1tZW51IHZqcy1tZW51LWNvbnRlbnRcInJvbGU9XCJtZW51XCI+PC91bD48L2Rpdj48c3BhbiBjbGFzcz1cInZqcy1jb250cm9sLXRleHRcIj5QbGF5bGlzdDwvc3Bhbj48L2Rpdj4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICdhcmlhLWxpdmUnOiAncG9saXRlJyxcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIGZpbmRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICB2YXIgZm91bmRFbGVtZW50ID0gbnVsbCxcbiAgICAgICAgZm91bmQ7XG5cbiAgICBmdW5jdGlvbiByZWN1cnNlKGVsZW1lbnQsIGNsYXNzTmFtZSwgZm91bmQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoICYmICFmb3VuZDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSBlbGVtZW50LmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IGVsLmNsYXNzTmFtZSAhPSB1bmRlZmluZWQgPyBlbC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpIDogW107XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMCwgamwgPSBjbGFzc2VzLmxlbmd0aDsgaiA8IGpsOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3Nlc1tqXSA9PSBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3VuZEVsZW1lbnQgPSBlbGVtZW50LmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmb3VuZClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIHJlY3Vyc2UoZWxlbWVudC5jaGlsZE5vZGVzW2ldLCBjbGFzc05hbWUsIGZvdW5kKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWN1cnNlKGVsZW1lbnQsIGNsYXNzTmFtZSwgZmFsc2UpO1xuICAgIHJldHVybiBmb3VuZEVsZW1lbnQ7XG59XG5cblxubGV0IGJ1aWxkQ29udGFpbmVyID0gKHBsYXllcikgPT4ge1xuICAgIHZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoXCJwbGF5bGlzdE1vZGFsQnV0dG9uXCIsIHBsYXlsaXN0TW9kYWxCdXR0b24pO1xuXG4gICAgdmFyIGJ1dHRvbkluZGV4ID0gcGxheWVyLmNvbnRyb2xCYXIuY2hpbGRyZW4oKS5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgICByZXR1cm4gYy5uYW1lKCk7XG4gICAgfSkuaW5kZXhPZignRnVsbHNjcmVlblRvZ2dsZScpIC0gMTtcbiAgICBwbGF5ZXIuY29udHJvbEJhci5wbGF5bGlzdEJ1dHRvbiA9IHBsYXllci5jb250cm9sQmFyLmFkZENoaWxkKCdwbGF5bGlzdE1vZGFsQnV0dG9uJywgbnVsbCwgYnV0dG9uSW5kZXgpO1xuICAgIHBsYXllci5jb250cm9sQmFyLnBsYXlsaXN0QnV0dG9uLmVsKCkuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuXG4gICAgcGxheWxpc3RNb2RhbCA9IGZpbmRDbGFzcyhwbGF5ZXIuY29udHJvbEJhci5wbGF5bGlzdEJ1dHRvbi5lbF8sIFwidmpzLXBsYXlsaXN0LW1lbnVcIik7XG4gICAgY29uc29sZS5sb2cocGxheWxpc3RNb2RhbCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfb3B0aW9ucy5wbGF5bGlzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGxheWVyLmNhdGFsb2cuZ2V0UGxheWxpc3QoX29wdGlvbnMucGxheWxpc3RzW2ldLmlkLCBmdW5jdGlvbihlcnJvciwgcGxheWxpc3QpIHtcbiAgICAgICAgICAgIHBsYXllci5jYXRhbG9nLmxvYWQocGxheWxpc3QpO1xuICAgICAgICAgICAgZGF0YSA9IHBsYXllci5jYXRhbG9nLmRhdGE7XG4gICAgICAgICAgICBjaGlsZFN0cmluZyA9IFwiPGxpIGNsYXNzPSd2anMtcGxheWxpc3QtdGl0bGUgdmpzLW1lbnUtaXRlbScgaWQ9J1wiICsgZGF0YS5pZCArIFwiJz5cIiArIGRhdGEubmFtZSArIFwiPC9saT48dWw+XCI7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBsYXlsaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRTdHJpbmcgKz0gXCI8ZGl2IGNsYXNzPSd2anMtdmlkZW8tdGl0bGUgdmpzLW1lbnUtaXRlbScgcGxheWxpc3RJZD0nXCIgKyBkYXRhLmlkICsgXCInaWQ9J1wiICsgcGxheWxpc3Rbal0uaWQgKyBcIic+XCIgKyBwbGF5bGlzdFtqXS5uYW1lICsgXCI8L2Rpdj5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoaWxkU3RyaW5nICs9IFwiPC91bD5cIjtcbiAgICAgICAgICAgIHBsYXlsaXN0TW9kYWwuaW5uZXJIVE1MICs9IGNoaWxkU3RyaW5nO1xuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBwbGF5bGlzdE1vZGFsLmNoaWxkTm9kZXMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IHBsYXlsaXN0TW9kYWwuY2hpbGROb2RlcztcbiAgICAgICAgICAgICAgICBpZiAocGxheWxpc3RNb2RhbC5jaGlsZE5vZGVzW3hdLmNsYXNzTmFtZSA9PT0gJ3Zqcy1wbGF5bGlzdC10aXRsZSB2anMtbWVudS1pdGVtJykge1xuICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdE1vZGFsLmNoaWxkTm9kZXNbeF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5jYXRhbG9nLmdldFBsYXlsaXN0KGV2dC5jdXJyZW50VGFyZ2V0LmlkLCBmdW5jdGlvbihlcnJvciwgcGxheWxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuY2F0YWxvZy5sb2FkKHBsYXlsaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheWxpc3QuY3VycmVudEl0ZW0oMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXlsaXN0TW9kYWwuY2hpbGROb2Rlc1t4XS50YWdOYW1lID09PSAnVUwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gcGxheWxpc3RNb2RhbC5jaGlsZE5vZGVzW3hdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHRlbXAuY2hpbGROb2Rlcy5sZW5ndGg7IHorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcC5jaGlsZE5vZGVzW3pdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmNhdGFsb2cuZ2V0UGxheWxpc3QoZXZ0LmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlcy5wbGF5bGlzdElkLnZhbHVlLCBmdW5jdGlvbihlcnJvciwgcGxheWxpc3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuY2F0YWxvZy5sb2FkKHBsYXlsaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBrID0wOyBrIDwgcGxheWxpc3QubGVuZ3RoOyBrKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXZ0LnRhcmdldC5pZCA9PT0gcGxheWxpc3Rba10uaWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5wbGF5bGlzdC5jdXJyZW50SXRlbShrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xufTtcblxuXG5sZXQgc2V0T3B0aW9ucyA9IChvcHQpID0+IHtcbiAgICBfb3B0aW9ucyA9IG9wdDtcbiAgICBpZiAoX29wdGlvbnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfb3B0aW9ucy5wbGF5bGlzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKF9vcHRpb25zLnBsYXlsaXN0c1tpXS5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cblxuLyoqXG4gKiBGdW5jdGlvbiB0byBpbnZva2Ugd2hlbiB0aGUgcGxheWVyIGlzIHJlYWR5LlxuICpcbiAqIFRoaXMgaXMgYSBncmVhdCBwbGFjZSBmb3IgeW91ciBwbHVnaW4gdG8gaW5pdGlhbGl6ZSBpdHNlbGYuIFdoZW4gdGhpc1xuICogZnVuY3Rpb24gaXMgY2FsbGVkLCB0aGUgcGxheWVyIHdpbGwgaGF2ZSBpdHMgRE9NIGFuZCBjaGlsZCBjb21wb25lbnRzXG4gKiBpbiBwbGFjZS5cbiAqXG4gKiBAZnVuY3Rpb24gb25QbGF5ZXJSZWFkeVxuICogQHBhcmFtICAgIHtQbGF5ZXJ9IHBsYXllclxuICogQHBhcmFtICAgIHtPYmplY3R9IFtvcHRpb25zPXt9XVxuICovXG5jb25zdCBvblBsYXllclJlYWR5ID0gKGJjcGxheWVyLCBvcHRpb25zKSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZygnQnJpZ2h0Y292ZSBQbGF5ZXIgbXVsdGlQbGF5bGlzdCBsb2FkZWQnKTtcblxuICAgIC8vZXZlbnRzID0gYmNwbGF5ZXIuZGVidWdnZXJXaW5kb3cuZ2V0RXZlbnRzO1xuXG4gICAgLy9iY3BsYXllci5hZGRDbGFzcygndmpzLXBsYXllci1kZWJ1Z2dlcicpO1xuXG4gICAgbGV0IGZvbnRhd2Vzb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGZvbnRhd2Vzb21lLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBmb250YXdlc29tZS5ocmVmID0gXCIvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjAuMy9jc3MvZm9udC1hd2Vzb21lLmNzc1wiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9udGF3ZXNvbWUpO1xuXG4gICAgc2V0T3B0aW9ucyhvcHRpb25zKTtcblxuICAgIGJ1aWxkQ29udGFpbmVyKGJjcGxheWVyKTtcblxuICAgIGxpc3RlbkZvclBsYXllckV2ZW50cyhiY3BsYXllcik7XG59O1xuLyoqXG4gKiBBIEJyaWdodGNvdmUgdmlkZW8uanMgcGx1Z2luLlxuICpcbiAqIEluIHRoZSBwbHVnaW4gZnVuY3Rpb24sIHRoZSB2YWx1ZSBvZiBgdGhpc2AgaXMgYSB2aWRlby5qcyBgUGxheWVyYFxuICogaW5zdGFuY2UuIFlvdSBjYW5ub3QgcmVseSBvbiB0aGUgcGxheWVyIGJlaW5nIGluIGEgXCJyZWFkeVwiIHN0YXRlIGhlcmUsXG4gKiBkZXBlbmRpbmcgb24gaG93IHRoZSBwbHVnaW4gaXMgaW52b2tlZC4gVGhpcyBtYXkgb3IgbWF5IG5vdCBiZSBpbXBvcnRhbnRcbiAqIHRvIHlvdTsgaWYgbm90LCByZW1vdmUgdGhlIHdhaXQgZm9yIFwicmVhZHlcIiFcbiAqXG4gKiBAZnVuY3Rpb24gcGxheWVyRGVidWdnZXJcbiAqIEBwYXJhbSAgICB7T2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqICAgICAgICAgICBBbiBvYmplY3Qgb2Ygb3B0aW9ucyBsZWZ0IHRvIHRoZSBwbHVnaW4gYXV0aG9yIHRvIGRlZmluZS5cbiAqL1xuY29uc3QgbXVsdGlQbGF5bGlzdCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB0aGlzLnJlYWR5KCgpID0+IHtcblxuICAgICAgICBfb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIG9uUGxheWVyUmVhZHkodGhpcywgdmlkZW9qcy5tZXJnZU9wdGlvbnMoZGVmYXVsdHMsIF9vcHRpb25zKSk7XG4gICAgfSk7XG59O1xuXG4vLyBSZWdpc3RlciB0aGUgcGx1Z2luIHdpdGggdmlkZW8uanMuXG52aWRlb2pzLnBsdWdpbignbXVsdGlQbGF5bGlzdCcsIG11bHRpUGxheWxpc3QpO1xuXG4vLyBJbmNsdWRlIHRoZSB2ZXJzaW9uIG51bWJlci5cbm11bHRpUGxheWxpc3QuVkVSU0lPTiA9ICdfX1ZFUlNJT05fXyc7XG5cbmV4cG9ydCBkZWZhdWx0IG11bHRpUGxheWxpc3Q7XG4iXX0=
