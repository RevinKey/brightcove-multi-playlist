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
            innerHTML: '<div class="vjs-menu playlistModal vjs-icons-chapters" role="presentation"><ul class="vjs-playlist-menu vjs-menu-content"role="menu"></ul></div><span class="vjs-control-text">Playlist</span></div>'
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
            childString = "<li class='vjs-playlist-title vjs-menu-item' id='" + data.id + "'>" + data.name + "</li><ul></ul>";
            playlistModal.innerHTML += childString;
            for (var j = 0; j < playlistModal.childNodes.length; j++) {

                playlistModal.childNodes[j].addEventListener('click', function (evt) {
                    player.catalog.getPlaylist(evt.currentTarget.id, function (error, playlist) {
                        player.catalog.load(playlist);
                        for (var z = 0; z < playlist.length; z++) {
                            childString = "<li class='vjs-video-title vjs-menu-item' id='" + playlist[z].id + "'>" + playlist[z].name + "</li>";
                            evt.target.innerHTML += childString;
                        }
                    });
                });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva3JleW5vbGRzL1JlcG9zL2JyaWdodGNvdmUtbXVsdGktcGxheWxpc3Qvc3JjL2pzL2NvbXBvbmVudElEcy5qcyIsIi9Vc2Vycy9rcmV5bm9sZHMvUmVwb3MvYnJpZ2h0Y292ZS1tdWx0aS1wbGF5bGlzdC9zcmMvanMvcGxheWxpc3RDb250YWluZXIuanMiLCIvVXNlcnMva3JleW5vbGRzL1JlcG9zL2JyaWdodGNvdmUtbXVsdGktcGxheWxpc3Qvc3JjL3BsdWdpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQU8sSUFBSSxHQUFHLEdBQUc7QUFDYixlQUFXLEVBQUUsYUFBYTtBQUMxQixXQUFPLEVBQUUsV0FBVztBQUNwQixZQUFRLEVBQUUsWUFBWTs7QUFFdEIsYUFBUyxFQUFFLFdBQVc7QUFDdEIsU0FBSyxFQUFFLE9BQU87QUFDZCxhQUFTLEVBQUUsV0FBVztBQUN0QixPQUFHLEVBQUUsYUFBYTtBQUNsQixnQkFBWSxFQUFFLGNBQWM7QUFDNUIsbUJBQWUsRUFBRSxpQkFBaUI7QUFDbEMsMkJBQXVCLEVBQUUseUJBQXlCO0FBQ2xELHVCQUFtQixFQUFFLHFCQUFxQjtBQUMxQyx5QkFBcUIsRUFBRSx1QkFBdUI7QUFDOUMsNkJBQXlCLEVBQUUsMkJBQTJCO0FBQ3RELGVBQVcsRUFBRSxhQUFhO0FBQzFCLGtCQUFjLEVBQUUsZ0JBQWdCO0FBQ2hDLGdCQUFZLEVBQUUsY0FBYztBQUM1QixvQkFBZ0IsRUFBRSxrQkFBa0I7QUFDcEMsc0JBQWtCLEVBQUUsb0JBQW9COzs7QUFHeEMsWUFBUSxFQUFFLFVBQVU7QUFDcEIsV0FBTyxFQUFFLFNBQVM7QUFDbEIsV0FBTyxFQUFFLFNBQVM7QUFDbEIsaUJBQWEsRUFBRSxlQUFlO0FBQzlCLGNBQVUsRUFBRSxZQUFZO0NBQzNCLENBQUM7Ozs7Ozs7Ozs7Ozs7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RSxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQ2pFLENBQUMsQ0FBQztDQUNOLENBQUM7OztBQUdGLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDOzs7QUFHL0MsYUFBYSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7O3FCQUV2QixhQUFhIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBsZXQgSURzID0ge1xuICAgIG15QmxhY2tiaXJkOiAnbXlCbGFja2JpcmQnLFxuICAgIGZpbHRlcnM6ICdiYkZpbHRlcnMnLFxuICAgIGNvbnRyb2xzOiAnYmJDb250cm9scycsXG4gICAgLy9zaXplOiAnYmJTaXplJyxcbiAgICBzZW5kRW1haWw6ICdzZW5kRW1haWwnLFxuICAgIG1vZGFsOiAnbW9kYWwnLFxuICAgIGJ1dHRvbkJhcjogJ2J1dHRvbkJhcicsXG4gICAgbG9nOiAnbXlCbGFja2JpcmQnLFxuICAgIGJ0blRvZ2dsZUxvZzogJ2J0blRvZ2dsZUxvZycsXG4gICAgYnRuVG9nZ2xlU2xpZGVyOiAnYnRuVG9nZ2xlU2xpZGVyJyxcbiAgICBidG5Ub2dnbGVQbGF5ZXJTZXR0aW5nczogJ2J0blRvZ2dsZVBsYXllclNldHRpbmdzJyxcbiAgICBidG5Ub2dnbGVBZFNldHRpbmdzOiAnYnRuVG9nZ2xlQWRTZXR0aW5ncycsXG4gICAgYnRuVG9nZ2xlUGxheWJhY2tJbmZvOiAnYnRuVG9nZ2xlUGxheWJhY2tJbmZvJyxcbiAgICBidG5Ub2dnbGVEZWJ1Z2dlclNldHRpbmdzOiAnYnRuVG9nZ2xlRGVidWdnZXJTZXR0aW5ncycsXG4gICAgY2xhc3Nlc0xpc3Q6ICdjbGFzc2VzTGlzdCcsXG4gICAgcGxheWVyU2V0dGluZ3M6ICdwbGF5ZXJTZXR0aW5ncycsXG4gICAgcGxheWJhY2tJbmZvOiAncGxheWJhY2tJbmZvJyxcbiAgICBkZWJ1Z2dlclNldHRpbmdzOiAnZGVidWdnZXJTZXR0aW5ncycsXG4gICAgYnRuVG9nZ2xlQ2xhc3NMaXN0OiAnYnRuVG9nZ2xlQ2xhc3NMaXN0JyxcbiAgICAvL2JpZ1BsYXlCdXR0b25TdHlsZXM6ICdiaWdQbGF5QnV0dG9uU3R5bGVzJyxcbiAgICAvL3Bvc3RlclN0eWxlczogJ3Bvc3RlclN0eWxlcycsXG4gICAgbG9nVGFibGU6ICdsb2dUYWJsZScsXG4gICAgbG9nTGlzdDogJ2xvZ0xpc3QnLFxuICAgIGxvZ0pTT046ICdsb2dKU09OJyxcbiAgICBtZWRpYVNldHRpbmdzOiAnbWVkaWFTZXR0aW5ncycsXG4gICAgYWRTZXR0aW5nczogJ2FkU2V0dGluZ3MnXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBwbGF5bGlzdENvbnRhaW5lci5qc1xuICovXG4gaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1BsYXllcnxPYmplY3R9IHBsYXllclxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqIEBjbGFzcyBQbGF5bGlzdENvbnRhaW5lclxuICovXG5jbGFzcyBQbGF5bGlzdENvbnRhaW5lciBleHRlbmRzIHZpZGVvanMuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblxuICAgIHN1cGVyKHBsYXllcixvcHRpb25zKTtcblxuICAgIC8vdGhpcy5jb250ZW50KHRoaXMub3B0aW9uc18uY29udGVudCk7XG5cbiAgICB0aGlzLmVsXyA9IHZpZGVvanMuY3JlYXRlRWwoXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiIDogdGhpcy5vcHRpb25zXy5pZFxuICAgICAgfVxuXG4gICAgKTtcblxuICAgIHRoaXMuaGVhZGVyRWxfID0gdmlkZW9qcy5jcmVhdGVFbCgnZGl2JyxcbiAgICAgIHtcImNsYXNzTmFtZVwiOiAnaGVhZGVyJ31cbiAgICApO1xuICAgIHRoaXMuaGVhZGVyRWxfLmlubmVySFRNTD0nPGgyPicgKyB0aGlzLm9wdGlvbnNfLm5hbWUgKyAnPC9oMj4nO1xuICAgIHRoaXMuZWxfLmFwcGVuZENoaWxkKHRoaXMuaGVhZGVyRWxfKTtcblxuICAgIHRoaXMuY29udGVudEVsXyA9IHZpZGVvanMuY3JlYXRlRWwoJ2RpdicsIHtcImNsYXNzTmFtZVwiOiAnbWFpbid9KTtcbiAgICB0aGlzLmNvbnRlbnRFbF8uaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zXy5jb250ZW50O1xuICAgIHRoaXMuZWxfLmFwcGVuZENoaWxkKHRoaXMuY29udGVudEVsXyk7XG5cbiAgICB0aGlzLmZvb3RlckVsXyA9IHZpZGVvanMuY3JlYXRlRWwoJ2RpdicsIHtcImNsYXNzTmFtZVwiIDogJ2Zvb3Rlcid9KTtcbiAgICB0aGlzLmVsXy5hcHBlbmRDaGlsZCh0aGlzLmZvb3RlckVsXyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb250ZW50KHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuY29udGVudEVsXy5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udGVudEVsXy5pbm5lckhUTUw7XG4gIH1cblxuXG59XG5cbnZpZGVvanMuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdQbGF5bGlzdENvbnRhaW5lcicsIFBsYXlsaXN0Q29udGFpbmVyKTtcbmV4cG9ydCBkZWZhdWx0IFBsYXlsaXN0Q29udGFpbmVyO1xuIiwiaW1wb3J0IFBsYXlsaXN0Q29udGFpbmVyIGZyb20gJy4vanMvcGxheWxpc3RDb250YWluZXIuanMnO1xuaW1wb3J0IHtcbiAgICBJRHNcbn0gZnJvbSAnLi9qcy9jb21wb25lbnRJRHMuanMnO1xuXG4vLyBEZWZhdWx0IG9wdGlvbnMgZm9yIHRoZSBwbHVnaW4uXG5jb25zdCBkZWZhdWx0cyA9IHt9O1xuXG4vLyBteSBkZWJ1Z2dlciBsZXRzXG5sZXQgX29wdGlvbnMsXG4gICAgcGxheWVyLFxuICAgIGFkU2V0dGluZ3MsXG4gICAgbGFzdEV2ZW50ID0gXCJcIixcbiAgICBjdXJyZW50RXZlbnQgPSBcIlwiLFxuICAgIE1vZGFsLFxuICAgIHBsYXlsaXN0TW9kYWwsXG4gICAgY2hpbGQsXG4gICAgcGxheWxpc3RUaXRsZSxcbiAgICBkYXRhLFxuICAgIGlkLFxuICAgIGNoaWxkU3RyaW5nLFxuICAgIGFsbFBsYXllckV2ZW50c0pTT04sXG4gICAgYWxsUGxheWVyRXZlbnRzID0gW10sXG4gICAgY3VycmVudER1cmF0aW9uLFxuICAgIGN1cnJlbnRTb3VyY2UsXG4gICAgY3VycmVudE1lZGlhLFxuICAgIGxvZ1R5cGVzID0ge1xuICAgICAgICBhcnJheTogJ2FycmF5JyxcbiAgICAgICAgdGFibGU6ICd0YWJsZScsXG4gICAgICAgIGxpc3Q6ICdsaXN0JyxcbiAgICAgICAganNvbjogJ2pzb24nXG4gICAgfTtcblxuLy8gQXJyYXkgb2YgZXZlbnRzIEkgY2FtZSB1cCB3aXRoIGJ5IHdhdGNoaW5nIGRlYnVnZ2VyIHdpbmRvdyBhbmQgdXNpbmcgZG9jdW1lbnRhdGlvblxubGV0IHBsYXllckV2ZW50cyA9IFtcbiAgICAncmVhZHknLCAvLyB2aWRvanNfY29tcG9uZW50XG4gICAgJ2R1cmF0aW9uY2hhbmdlJywgLy8gdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmLCB2aWRlb2pzX2NvbnRyaWJfaGxzXG4gICAgJ2VuZGVkJywgLy8gdmlkZW9qc19jb250cmliX2FkcywgdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmLCB2aWRlb2pzX3Fvc1xuICAgICdlcnJvcicsIC8vIHZpZGVvanNfcGxheWVyXG4gICAgJ2ZpcnN0cGxheScsIC8vIHZpZGVvanNfcGxheWVyXG4gICAgJ2Z1bGxzY3JlZW5jaGFuZ2UnLCAvLyB2aWRlb2pzX3FvcywgdmlkZW9qc19wbGF5ZXJcbiAgICAnbG9hZGVkYWxsZGF0YScsXG4gICAgJ2xvYWRlZGRhdGEnLCAvLyB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAnbG9hZGVkbWV0YWRhdGEnLCAvLyB2aWRlb2pzX3FvcywgdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfY29udHJpYl9obHMsIHZpZGVvanNfc3dmXG4gICAgJ2xvYWRzdGFydCcsIC8vIHZpZGVvanNfcW9zLCB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAncGF1c2UnLCAvLyB2aWRlb2pzX3FvcywgdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ3BsYXknLCAvLyB2aWRlb2pzX3FvcywgdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ3BsYXllcl9sb2FkJywgLy8gdmlkZW9qc19iY19hbmFseXRpY3NcbiAgICAnY29udGVudHVwZGF0ZScsIC8vIHZpZGVvanNfY29udHJpYl9hZHNcbiAgICAnc2Vla2luZycsIC8vIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICdzZWVrZWQnLCAvLyB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAncHJvZ3Jlc3MnLCAvLyB2aWRlb2pzX2NvbnRyaWJfaGxzLCB2aWRlb2pzX3BsYXllciAodmlkZW9qc19zd2Y/KVxuICAgICdjYXRhbG9nX3JlcXVlc3QnLCAvLyB2aWRlb2pzX2NhdGFsb2dcbiAgICAnY2F0YWxvZ19yZXNwb25zZScsIC8vIHZpZGVvanNfY2F0YWxvZ1xuICAgICdwbGF5aW5nJywgLy8gdmlkZW9qc19xb3MsIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICd3YWl0aW5nJywgLy8gdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ3ZpZGVvX3ZpZXcnLCAvLyB2aWRlb2pzX2JjX2FuYWx5dGljc1xuICAgICd2aWRlb19pbXByZXNzaW9uJywgLy8gdmlkZW9qc19iY19hbmFseXRpY3NcbiAgICAndmlkZW9fZW5nYWdlbWVudCcsIC8vIHZpZGVvanNfYmNfYW5hbHl0aWNzXG4gICAgJ3BsYXlfcmVxdWVzdCcsIC8vIHZpZGVvanNfYmNfYW5hbHl0aWNzXG4gICAgJ2NhbnBsYXknLCAvLyB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAnY2FucGxheXRocm91Z2gnLCAvLyB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAndGltZXVwZGF0ZSdcbl07XG5cbmxldCBnZXRQbGF5ZXJFdmVudHMgPSAoKSA9PiB7XG4gICAgYWxsUGxheWVyRXZlbnRzSlNPTiA9IHZpZGVvanMuZ2V0RGF0YShwbGF5ZXIuZWxfKS5oYW5kbGVycztcblxuXG4gICAgZm9yIChwcm9wIGluIGFsbFBsYXllckV2ZW50c0pTT04pIHtcbiAgICAgICAgYWxsUGxheWVyRXZlbnRzLnB1c2gocHJvcCk7XG4gICAgfVxuXG4gICAgYWxsUGxheWVyRXZlbnRzLnNvcnQoKTtcblxuICAgIGZvciAoaSA9IDE7IGkgPCBhbGxQbGF5ZXJFdmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc29sZS5sb2coYWxsUGxheWVyRXZlbnRzW2ldKTtcbiAgICB9XG59O1xuXG5sZXQgbGlzdGVuRm9yUGxheWVyRXZlbnRzID0gKHBsYXllcikgPT4ge1xuXG4gICAgcGxheWVyLm9uZSgnZHVyYXRpb25jaGFuZ2UnLCBmdW5jdGlvbihlKSB7fSk7XG5cbiAgICBsZXQgcGxheUNvdW50ZXIgPSAwO1xuICAgIGxldCBtc2dTdHIsIGN1cnJlbnRUaW1lLCBwcmV2aW91c1RpbWUsIGxldmVsU3RyID0gJ2RlYnVnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwbGF5ZXIub24ocGxheWVyRXZlbnRzW2ldLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZmlyc3RwbGF5JzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncGxheSc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xvYWRlZG1ldGFkYXRhJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncGF1c2UnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdwcm9ncmVzcyc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbnRlbnR1cGRhdGUnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzZWVraW5nJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2FucGxheXRocm91Z2gnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd0aW1ldXBkYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2Vla2VkJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2F0YWxvZ19yZXNwb25zZSc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2R1cmF0aW9uY2hhbmdlJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgbXNnU3RyID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsU3RyID0gJ2RlYnVnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxudmFyIHBsYXlsaXN0TW9kYWxCdXR0b24gPSB2aWRlb2pzLmV4dGVuZCh2aWRlb2pzLkJ1dHRvbiwge1xuICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbihwbGF5ZXIsIG9wdGlvbnMpIHtcblxuICAgICAgICB2aWRlb2pzLkJ1dHRvbi5jYWxsKHRoaXMsIHBsYXllciwgb3B0aW9ucyk7XG5cblxuICAgICAgICBwbGF5ZXIub24oJ2xvYWRzdGFydCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coX29wdGlvbnMpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEJpbmQgY2xpY2sgZXZlbnQgZm9yIGRlc2t0b3AgYnJvd3NlcnNcbiAgICAgICAgdGhpcy5vbignY2xpY2snLCBmdW5jdGlvbigpIHt9KTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdmlkZW9qcy5CdXR0b24ucHJvdG90eXBlLmNyZWF0ZUVsLmNhbGwodGhpcywgJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1wbGF5bGlzdC1idXR0b24gdmpzLW1lbnUtYnV0dG9uIHZqcy1tZW51LWJ1dHRvbi1wb3B1cCB2anMtY29udHJvbCB2anMtYnV0dG9uJyxcbiAgICAgICAgICAgIGlubmVySFRNTDogJzxkaXYgY2xhc3M9XCJ2anMtbWVudSBwbGF5bGlzdE1vZGFsIHZqcy1pY29ucy1jaGFwdGVyc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48dWwgY2xhc3M9XCJ2anMtcGxheWxpc3QtbWVudSB2anMtbWVudS1jb250ZW50XCJyb2xlPVwibWVudVwiPjwvdWw+PC9kaXY+PHNwYW4gY2xhc3M9XCJ2anMtY29udHJvbC10ZXh0XCI+UGxheWxpc3Q8L3NwYW4+PC9kaXY+J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICAnYXJpYS1saXZlJzogJ3BvbGl0ZScsXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBmaW5kQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgdmFyIGZvdW5kRWxlbWVudCA9IG51bGwsXG4gICAgICAgIGZvdW5kO1xuXG4gICAgZnVuY3Rpb24gcmVjdXJzZShlbGVtZW50LCBjbGFzc05hbWUsIGZvdW5kKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCAmJiAhZm91bmQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIGVsID0gZWxlbWVudC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUgIT0gdW5kZWZpbmVkID8gZWwuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKSA6IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpsID0gY2xhc3Nlcy5sZW5ndGg7IGogPCBqbDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsYXNzZXNbal0gPT0gY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRFbGVtZW50ID0gZWxlbWVudC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZm91bmQpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICByZWN1cnNlKGVsZW1lbnQuY2hpbGROb2Rlc1tpXSwgY2xhc3NOYW1lLCBmb3VuZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVjdXJzZShlbGVtZW50LCBjbGFzc05hbWUsIGZhbHNlKTtcbiAgICByZXR1cm4gZm91bmRFbGVtZW50O1xufVxuXG5cbmxldCBidWlsZENvbnRhaW5lciA9IChwbGF5ZXIpID0+IHtcbiAgICB2aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KFwicGxheWxpc3RNb2RhbEJ1dHRvblwiLCBwbGF5bGlzdE1vZGFsQnV0dG9uKTtcblxuICAgIHZhciBidXR0b25JbmRleCA9IHBsYXllci5jb250cm9sQmFyLmNoaWxkcmVuKCkubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgcmV0dXJuIGMubmFtZSgpO1xuICAgIH0pLmluZGV4T2YoJ0Z1bGxzY3JlZW5Ub2dnbGUnKSAtIDE7XG4gICAgcGxheWVyLmNvbnRyb2xCYXIucGxheWxpc3RCdXR0b24gPSBwbGF5ZXIuY29udHJvbEJhci5hZGRDaGlsZCgncGxheWxpc3RNb2RhbEJ1dHRvbicsIG51bGwsIGJ1dHRvbkluZGV4KTtcbiAgICBwbGF5ZXIuY29udHJvbEJhci5wbGF5bGlzdEJ1dHRvbi5lbCgpLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcblxuICAgIHBsYXlsaXN0TW9kYWwgPSBmaW5kQ2xhc3MocGxheWVyLmNvbnRyb2xCYXIucGxheWxpc3RCdXR0b24uZWxfLCBcInZqcy1wbGF5bGlzdC1tZW51XCIpO1xuICAgIGNvbnNvbGUubG9nKHBsYXlsaXN0TW9kYWwpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX29wdGlvbnMucGxheWxpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBsYXllci5jYXRhbG9nLmdldFBsYXlsaXN0KF9vcHRpb25zLnBsYXlsaXN0c1tpXS5pZCwgZnVuY3Rpb24oZXJyb3IsIHBsYXlsaXN0KSB7XG4gICAgICAgICAgICBwbGF5ZXIuY2F0YWxvZy5sb2FkKHBsYXlsaXN0KTtcbiAgICAgICAgICAgIGRhdGEgPSBwbGF5ZXIuY2F0YWxvZy5kYXRhO1xuICAgICAgICAgICAgY2hpbGRTdHJpbmcgPSBcIjxsaSBjbGFzcz0ndmpzLXBsYXlsaXN0LXRpdGxlIHZqcy1tZW51LWl0ZW0nIGlkPSdcIiArIGRhdGEuaWQgKyBcIic+XCIgKyBkYXRhLm5hbWUgKyBcIjwvbGk+PHVsPjwvdWw+XCI7XG4gICAgICAgICAgICBwbGF5bGlzdE1vZGFsLmlubmVySFRNTCArPSBjaGlsZFN0cmluZztcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGxheWxpc3RNb2RhbC5jaGlsZE5vZGVzLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICBwbGF5bGlzdE1vZGFsLmNoaWxkTm9kZXNbal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmNhdGFsb2cuZ2V0UGxheWxpc3QoZXZ0LmN1cnJlbnRUYXJnZXQuaWQsIGZ1bmN0aW9uKGVycm9yLCBwbGF5bGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmNhdGFsb2cubG9hZChwbGF5bGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IodmFyIHo9MDsgejwgcGxheWxpc3QubGVuZ3RoO3orKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRTdHJpbmcgPSBcIjxsaSBjbGFzcz0ndmpzLXZpZGVvLXRpdGxlIHZqcy1tZW51LWl0ZW0nIGlkPSdcIiArIHBsYXlsaXN0W3pdLmlkICsgXCInPlwiICsgcGxheWxpc3Rbel0ubmFtZSArIFwiPC9saT5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQudGFyZ2V0LmlubmVySFRNTCArPSBjaGlsZFN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xufTtcblxuXG5sZXQgc2V0T3B0aW9ucyA9IChvcHQpID0+IHtcbiAgICBfb3B0aW9ucyA9IG9wdDtcbiAgICBpZiAoX29wdGlvbnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfb3B0aW9ucy5wbGF5bGlzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKF9vcHRpb25zLnBsYXlsaXN0c1tpXS5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cblxuLyoqXG4gKiBGdW5jdGlvbiB0byBpbnZva2Ugd2hlbiB0aGUgcGxheWVyIGlzIHJlYWR5LlxuICpcbiAqIFRoaXMgaXMgYSBncmVhdCBwbGFjZSBmb3IgeW91ciBwbHVnaW4gdG8gaW5pdGlhbGl6ZSBpdHNlbGYuIFdoZW4gdGhpc1xuICogZnVuY3Rpb24gaXMgY2FsbGVkLCB0aGUgcGxheWVyIHdpbGwgaGF2ZSBpdHMgRE9NIGFuZCBjaGlsZCBjb21wb25lbnRzXG4gKiBpbiBwbGFjZS5cbiAqXG4gKiBAZnVuY3Rpb24gb25QbGF5ZXJSZWFkeVxuICogQHBhcmFtICAgIHtQbGF5ZXJ9IHBsYXllclxuICogQHBhcmFtICAgIHtPYmplY3R9IFtvcHRpb25zPXt9XVxuICovXG5jb25zdCBvblBsYXllclJlYWR5ID0gKGJjcGxheWVyLCBvcHRpb25zKSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZygnQnJpZ2h0Y292ZSBQbGF5ZXIgbXVsdGlQbGF5bGlzdCBsb2FkZWQnKTtcblxuICAgIC8vZXZlbnRzID0gYmNwbGF5ZXIuZGVidWdnZXJXaW5kb3cuZ2V0RXZlbnRzO1xuXG4gICAgLy9iY3BsYXllci5hZGRDbGFzcygndmpzLXBsYXllci1kZWJ1Z2dlcicpO1xuXG4gICAgbGV0IGZvbnRhd2Vzb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGZvbnRhd2Vzb21lLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBmb250YXdlc29tZS5ocmVmID0gXCIvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjAuMy9jc3MvZm9udC1hd2Vzb21lLmNzc1wiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9udGF3ZXNvbWUpO1xuXG4gICAgc2V0T3B0aW9ucyhvcHRpb25zKTtcblxuICAgIGJ1aWxkQ29udGFpbmVyKGJjcGxheWVyKTtcblxuICAgIGxpc3RlbkZvclBsYXllckV2ZW50cyhiY3BsYXllcik7XG59O1xuLyoqXG4gKiBBIEJyaWdodGNvdmUgdmlkZW8uanMgcGx1Z2luLlxuICpcbiAqIEluIHRoZSBwbHVnaW4gZnVuY3Rpb24sIHRoZSB2YWx1ZSBvZiBgdGhpc2AgaXMgYSB2aWRlby5qcyBgUGxheWVyYFxuICogaW5zdGFuY2UuIFlvdSBjYW5ub3QgcmVseSBvbiB0aGUgcGxheWVyIGJlaW5nIGluIGEgXCJyZWFkeVwiIHN0YXRlIGhlcmUsXG4gKiBkZXBlbmRpbmcgb24gaG93IHRoZSBwbHVnaW4gaXMgaW52b2tlZC4gVGhpcyBtYXkgb3IgbWF5IG5vdCBiZSBpbXBvcnRhbnRcbiAqIHRvIHlvdTsgaWYgbm90LCByZW1vdmUgdGhlIHdhaXQgZm9yIFwicmVhZHlcIiFcbiAqXG4gKiBAZnVuY3Rpb24gcGxheWVyRGVidWdnZXJcbiAqIEBwYXJhbSAgICB7T2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqICAgICAgICAgICBBbiBvYmplY3Qgb2Ygb3B0aW9ucyBsZWZ0IHRvIHRoZSBwbHVnaW4gYXV0aG9yIHRvIGRlZmluZS5cbiAqL1xuY29uc3QgbXVsdGlQbGF5bGlzdCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB0aGlzLnJlYWR5KCgpID0+IHtcblxuICAgICAgICBfb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIG9uUGxheWVyUmVhZHkodGhpcywgdmlkZW9qcy5tZXJnZU9wdGlvbnMoZGVmYXVsdHMsIF9vcHRpb25zKSk7XG4gICAgfSk7XG59O1xuXG4vLyBSZWdpc3RlciB0aGUgcGx1Z2luIHdpdGggdmlkZW8uanMuXG52aWRlb2pzLnBsdWdpbignbXVsdGlQbGF5bGlzdCcsIG11bHRpUGxheWxpc3QpO1xuXG4vLyBJbmNsdWRlIHRoZSB2ZXJzaW9uIG51bWJlci5cbm11bHRpUGxheWxpc3QuVkVSU0lPTiA9ICdfX1ZFUlNJT05fXyc7XG5cbmV4cG9ydCBkZWZhdWx0IG11bHRpUGxheWxpc3Q7XG4iXX0=
