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
                        player.playlist.currentItem(0);
                        player.play();
                        /*for(var z=0; z< playlist.length;z++){
                            childString = "<li class='vjs-video-title vjs-menu-item' id='" + playlist[z].id + "'>" + playlist[z].name + "</li>";
                            evt.target.innerHTML += childString;
                        }*/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva3JleW5vbGRzL1JlcG9zL2JyaWdodGNvdmUtbXVsdGktcGxheWxpc3Qvc3JjL2pzL2NvbXBvbmVudElEcy5qcyIsIi9Vc2Vycy9rcmV5bm9sZHMvUmVwb3MvYnJpZ2h0Y292ZS1tdWx0aS1wbGF5bGlzdC9zcmMvanMvcGxheWxpc3RDb250YWluZXIuanMiLCIvVXNlcnMva3JleW5vbGRzL1JlcG9zL2JyaWdodGNvdmUtbXVsdGktcGxheWxpc3Qvc3JjL3BsdWdpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQU8sSUFBSSxHQUFHLEdBQUc7QUFDYixlQUFXLEVBQUUsYUFBYTtBQUMxQixXQUFPLEVBQUUsV0FBVztBQUNwQixZQUFRLEVBQUUsWUFBWTs7QUFFdEIsYUFBUyxFQUFFLFdBQVc7QUFDdEIsU0FBSyxFQUFFLE9BQU87QUFDZCxhQUFTLEVBQUUsV0FBVztBQUN0QixPQUFHLEVBQUUsYUFBYTtBQUNsQixnQkFBWSxFQUFFLGNBQWM7QUFDNUIsbUJBQWUsRUFBRSxpQkFBaUI7QUFDbEMsMkJBQXVCLEVBQUUseUJBQXlCO0FBQ2xELHVCQUFtQixFQUFFLHFCQUFxQjtBQUMxQyx5QkFBcUIsRUFBRSx1QkFBdUI7QUFDOUMsNkJBQXlCLEVBQUUsMkJBQTJCO0FBQ3RELGVBQVcsRUFBRSxhQUFhO0FBQzFCLGtCQUFjLEVBQUUsZ0JBQWdCO0FBQ2hDLGdCQUFZLEVBQUUsY0FBYztBQUM1QixvQkFBZ0IsRUFBRSxrQkFBa0I7QUFDcEMsc0JBQWtCLEVBQUUsb0JBQW9COzs7QUFHeEMsWUFBUSxFQUFFLFVBQVU7QUFDcEIsV0FBTyxFQUFFLFNBQVM7QUFDbEIsV0FBTyxFQUFFLFNBQVM7QUFDbEIsaUJBQWEsRUFBRSxlQUFlO0FBQzlCLGNBQVUsRUFBRSxZQUFZO0NBQzNCLENBQUM7Ozs7Ozs7Ozs7Ozs7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dGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGxldCBJRHMgPSB7XG4gICAgbXlCbGFja2JpcmQ6ICdteUJsYWNrYmlyZCcsXG4gICAgZmlsdGVyczogJ2JiRmlsdGVycycsXG4gICAgY29udHJvbHM6ICdiYkNvbnRyb2xzJyxcbiAgICAvL3NpemU6ICdiYlNpemUnLFxuICAgIHNlbmRFbWFpbDogJ3NlbmRFbWFpbCcsXG4gICAgbW9kYWw6ICdtb2RhbCcsXG4gICAgYnV0dG9uQmFyOiAnYnV0dG9uQmFyJyxcbiAgICBsb2c6ICdteUJsYWNrYmlyZCcsXG4gICAgYnRuVG9nZ2xlTG9nOiAnYnRuVG9nZ2xlTG9nJyxcbiAgICBidG5Ub2dnbGVTbGlkZXI6ICdidG5Ub2dnbGVTbGlkZXInLFxuICAgIGJ0blRvZ2dsZVBsYXllclNldHRpbmdzOiAnYnRuVG9nZ2xlUGxheWVyU2V0dGluZ3MnLFxuICAgIGJ0blRvZ2dsZUFkU2V0dGluZ3M6ICdidG5Ub2dnbGVBZFNldHRpbmdzJyxcbiAgICBidG5Ub2dnbGVQbGF5YmFja0luZm86ICdidG5Ub2dnbGVQbGF5YmFja0luZm8nLFxuICAgIGJ0blRvZ2dsZURlYnVnZ2VyU2V0dGluZ3M6ICdidG5Ub2dnbGVEZWJ1Z2dlclNldHRpbmdzJyxcbiAgICBjbGFzc2VzTGlzdDogJ2NsYXNzZXNMaXN0JyxcbiAgICBwbGF5ZXJTZXR0aW5nczogJ3BsYXllclNldHRpbmdzJyxcbiAgICBwbGF5YmFja0luZm86ICdwbGF5YmFja0luZm8nLFxuICAgIGRlYnVnZ2VyU2V0dGluZ3M6ICdkZWJ1Z2dlclNldHRpbmdzJyxcbiAgICBidG5Ub2dnbGVDbGFzc0xpc3Q6ICdidG5Ub2dnbGVDbGFzc0xpc3QnLFxuICAgIC8vYmlnUGxheUJ1dHRvblN0eWxlczogJ2JpZ1BsYXlCdXR0b25TdHlsZXMnLFxuICAgIC8vcG9zdGVyU3R5bGVzOiAncG9zdGVyU3R5bGVzJyxcbiAgICBsb2dUYWJsZTogJ2xvZ1RhYmxlJyxcbiAgICBsb2dMaXN0OiAnbG9nTGlzdCcsXG4gICAgbG9nSlNPTjogJ2xvZ0pTT04nLFxuICAgIG1lZGlhU2V0dGluZ3M6ICdtZWRpYVNldHRpbmdzJyxcbiAgICBhZFNldHRpbmdzOiAnYWRTZXR0aW5ncydcbn07XG4iLCIvKipcbiAqIEBmaWxlIHBsYXlsaXN0Q29udGFpbmVyLmpzXG4gKi9cbiBpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7UGxheWVyfE9iamVjdH0gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICogQGNsYXNzIFBsYXlsaXN0Q29udGFpbmVyXG4gKi9cbmNsYXNzIFBsYXlsaXN0Q29udGFpbmVyIGV4dGVuZHMgdmlkZW9qcy5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXG4gICAgc3VwZXIocGxheWVyLG9wdGlvbnMpO1xuXG4gICAgLy90aGlzLmNvbnRlbnQodGhpcy5vcHRpb25zXy5jb250ZW50KTtcblxuICAgIHRoaXMuZWxfID0gdmlkZW9qcy5jcmVhdGVFbChcImRpdlwiLFxuICAgICAge1xuICAgICAgICBcImlkXCIgOiB0aGlzLm9wdGlvbnNfLmlkXG4gICAgICB9XG5cbiAgICApO1xuXG4gICAgdGhpcy5oZWFkZXJFbF8gPSB2aWRlb2pzLmNyZWF0ZUVsKCdkaXYnLFxuICAgICAge1wiY2xhc3NOYW1lXCI6ICdoZWFkZXInfVxuICAgICk7XG4gICAgdGhpcy5oZWFkZXJFbF8uaW5uZXJIVE1MPSc8aDI+JyArIHRoaXMub3B0aW9uc18ubmFtZSArICc8L2gyPic7XG4gICAgdGhpcy5lbF8uYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXJFbF8pO1xuXG4gICAgdGhpcy5jb250ZW50RWxfID0gdmlkZW9qcy5jcmVhdGVFbCgnZGl2Jywge1wiY2xhc3NOYW1lXCI6ICdtYWluJ30pO1xuICAgIHRoaXMuY29udGVudEVsXy5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnNfLmNvbnRlbnQ7XG4gICAgdGhpcy5lbF8uYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50RWxfKTtcblxuICAgIHRoaXMuZm9vdGVyRWxfID0gdmlkZW9qcy5jcmVhdGVFbCgnZGl2Jywge1wiY2xhc3NOYW1lXCIgOiAnZm9vdGVyJ30pO1xuICAgIHRoaXMuZWxfLmFwcGVuZENoaWxkKHRoaXMuZm9vdGVyRWxfKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbnRlbnQodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5jb250ZW50RWxfLmlubmVySFRNTCA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250ZW50RWxfLmlubmVySFRNTDtcbiAgfVxuXG5cbn1cblxudmlkZW9qcy5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1BsYXlsaXN0Q29udGFpbmVyJywgUGxheWxpc3RDb250YWluZXIpO1xuZXhwb3J0IGRlZmF1bHQgUGxheWxpc3RDb250YWluZXI7XG4iLCJpbXBvcnQgUGxheWxpc3RDb250YWluZXIgZnJvbSAnLi9qcy9wbGF5bGlzdENvbnRhaW5lci5qcyc7XG5pbXBvcnQge1xuICAgIElEc1xufSBmcm9tICcuL2pzL2NvbXBvbmVudElEcy5qcyc7XG5cbi8vIERlZmF1bHQgb3B0aW9ucyBmb3IgdGhlIHBsdWdpbi5cbmNvbnN0IGRlZmF1bHRzID0ge307XG5cbi8vIG15IGRlYnVnZ2VyIGxldHNcbmxldCBfb3B0aW9ucyxcbiAgICBwbGF5ZXIsXG4gICAgYWRTZXR0aW5ncyxcbiAgICBsYXN0RXZlbnQgPSBcIlwiLFxuICAgIGN1cnJlbnRFdmVudCA9IFwiXCIsXG4gICAgTW9kYWwsXG4gICAgcGxheWxpc3RNb2RhbCxcbiAgICBjaGlsZCxcbiAgICBwbGF5bGlzdFRpdGxlLFxuICAgIGRhdGEsXG4gICAgaWQsXG4gICAgY2hpbGRTdHJpbmcsXG4gICAgYWxsUGxheWVyRXZlbnRzSlNPTixcbiAgICBhbGxQbGF5ZXJFdmVudHMgPSBbXSxcbiAgICBjdXJyZW50RHVyYXRpb24sXG4gICAgY3VycmVudFNvdXJjZSxcbiAgICBjdXJyZW50TWVkaWEsXG4gICAgbG9nVHlwZXMgPSB7XG4gICAgICAgIGFycmF5OiAnYXJyYXknLFxuICAgICAgICB0YWJsZTogJ3RhYmxlJyxcbiAgICAgICAgbGlzdDogJ2xpc3QnLFxuICAgICAgICBqc29uOiAnanNvbidcbiAgICB9O1xuXG4vLyBBcnJheSBvZiBldmVudHMgSSBjYW1lIHVwIHdpdGggYnkgd2F0Y2hpbmcgZGVidWdnZXIgd2luZG93IGFuZCB1c2luZyBkb2N1bWVudGF0aW9uXG5sZXQgcGxheWVyRXZlbnRzID0gW1xuICAgICdyZWFkeScsIC8vIHZpZG9qc19jb21wb25lbnRcbiAgICAnZHVyYXRpb25jaGFuZ2UnLCAvLyB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2YsIHZpZGVvanNfY29udHJpYl9obHNcbiAgICAnZW5kZWQnLCAvLyB2aWRlb2pzX2NvbnRyaWJfYWRzLCB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2YsIHZpZGVvanNfcW9zXG4gICAgJ2Vycm9yJywgLy8gdmlkZW9qc19wbGF5ZXJcbiAgICAnZmlyc3RwbGF5JywgLy8gdmlkZW9qc19wbGF5ZXJcbiAgICAnZnVsbHNjcmVlbmNoYW5nZScsIC8vIHZpZGVvanNfcW9zLCB2aWRlb2pzX3BsYXllclxuICAgICdsb2FkZWRhbGxkYXRhJyxcbiAgICAnbG9hZGVkZGF0YScsIC8vIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICdsb2FkZWRtZXRhZGF0YScsIC8vIHZpZGVvanNfcW9zLCB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19jb250cmliX2hscywgdmlkZW9qc19zd2ZcbiAgICAnbG9hZHN0YXJ0JywgLy8gdmlkZW9qc19xb3MsIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICdwYXVzZScsIC8vIHZpZGVvanNfcW9zLCB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAncGxheScsIC8vIHZpZGVvanNfcW9zLCB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAncGxheWVyX2xvYWQnLCAvLyB2aWRlb2pzX2JjX2FuYWx5dGljc1xuICAgICdjb250ZW50dXBkYXRlJywgLy8gdmlkZW9qc19jb250cmliX2Fkc1xuICAgICdzZWVraW5nJywgLy8gdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ3NlZWtlZCcsIC8vIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICdwcm9ncmVzcycsIC8vIHZpZGVvanNfY29udHJpYl9obHMsIHZpZGVvanNfcGxheWVyICh2aWRlb2pzX3N3Zj8pXG4gICAgJ2NhdGFsb2dfcmVxdWVzdCcsIC8vIHZpZGVvanNfY2F0YWxvZ1xuICAgICdjYXRhbG9nX3Jlc3BvbnNlJywgLy8gdmlkZW9qc19jYXRhbG9nXG4gICAgJ3BsYXlpbmcnLCAvLyB2aWRlb2pzX3FvcywgdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ3dhaXRpbmcnLCAvLyB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAndmlkZW9fdmlldycsIC8vIHZpZGVvanNfYmNfYW5hbHl0aWNzXG4gICAgJ3ZpZGVvX2ltcHJlc3Npb24nLCAvLyB2aWRlb2pzX2JjX2FuYWx5dGljc1xuICAgICd2aWRlb19lbmdhZ2VtZW50JywgLy8gdmlkZW9qc19iY19hbmFseXRpY3NcbiAgICAncGxheV9yZXF1ZXN0JywgLy8gdmlkZW9qc19iY19hbmFseXRpY3NcbiAgICAnY2FucGxheScsIC8vIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICdjYW5wbGF5dGhyb3VnaCcsIC8vIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICd0aW1ldXBkYXRlJ1xuXTtcblxubGV0IGdldFBsYXllckV2ZW50cyA9ICgpID0+IHtcbiAgICBhbGxQbGF5ZXJFdmVudHNKU09OID0gdmlkZW9qcy5nZXREYXRhKHBsYXllci5lbF8pLmhhbmRsZXJzO1xuXG5cbiAgICBmb3IgKHByb3AgaW4gYWxsUGxheWVyRXZlbnRzSlNPTikge1xuICAgICAgICBhbGxQbGF5ZXJFdmVudHMucHVzaChwcm9wKTtcbiAgICB9XG5cbiAgICBhbGxQbGF5ZXJFdmVudHMuc29ydCgpO1xuXG4gICAgZm9yIChpID0gMTsgaSA8IGFsbFBsYXllckV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxQbGF5ZXJFdmVudHNbaV0pO1xuICAgIH1cbn07XG5cbmxldCBsaXN0ZW5Gb3JQbGF5ZXJFdmVudHMgPSAocGxheWVyKSA9PiB7XG5cbiAgICBwbGF5ZXIub25lKCdkdXJhdGlvbmNoYW5nZScsIGZ1bmN0aW9uKGUpIHt9KTtcblxuICAgIGxldCBwbGF5Q291bnRlciA9IDA7XG4gICAgbGV0IG1zZ1N0ciwgY3VycmVudFRpbWUsIHByZXZpb3VzVGltZSwgbGV2ZWxTdHIgPSAnZGVidWcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyRXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBsYXllci5vbihwbGF5ZXJFdmVudHNbaV0sIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdmaXJzdHBsYXknOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdwbGF5JzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbG9hZGVkbWV0YWRhdGEnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdwYXVzZSc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3Byb2dyZXNzJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY29udGVudHVwZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NlZWtpbmcnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjYW5wbGF5dGhyb3VnaCc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWV1cGRhdGUnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzZWVrZWQnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjYXRhbG9nX3Jlc3BvbnNlJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZHVyYXRpb25jaGFuZ2UnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBtc2dTdHIgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxTdHIgPSAnZGVidWcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG52YXIgcGxheWxpc3RNb2RhbEJ1dHRvbiA9IHZpZGVvanMuZXh0ZW5kKHZpZGVvanMuQnV0dG9uLCB7XG4gICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uKHBsYXllciwgb3B0aW9ucykge1xuXG4gICAgICAgIHZpZGVvanMuQnV0dG9uLmNhbGwodGhpcywgcGxheWVyLCBvcHRpb25zKTtcblxuXG4gICAgICAgIHBsYXllci5vbignbG9hZHN0YXJ0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfb3B0aW9ucyk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQmluZCBjbGljayBldmVudCBmb3IgZGVza3RvcCBicm93c2Vyc1xuICAgICAgICB0aGlzLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge30pO1xuICAgIH0sXG5cbiAgICBjcmVhdGVFbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB2aWRlb2pzLkJ1dHRvbi5wcm90b3R5cGUuY3JlYXRlRWwuY2FsbCh0aGlzLCAnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAndmpzLXBsYXlsaXN0LWJ1dHRvbiB2anMtbWVudS1idXR0b24gdmpzLW1lbnUtYnV0dG9uLXBvcHVwIHZqcy1jb250cm9sIHZqcy1idXR0b24nLFxuICAgICAgICAgICAgaW5uZXJIVE1MOiAnPGRpdiBjbGFzcz1cInZqcy1tZW51IHBsYXlsaXN0TW9kYWwgdmpzLWljb25zLWNoYXB0ZXJzXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPjx1bCBjbGFzcz1cInZqcy1wbGF5bGlzdC1tZW51IHZqcy1tZW51LWNvbnRlbnRcInJvbGU9XCJtZW51XCI+PC91bD48L2Rpdj48c3BhbiBjbGFzcz1cInZqcy1jb250cm9sLXRleHRcIj5QbGF5bGlzdDwvc3Bhbj48L2Rpdj4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICdhcmlhLWxpdmUnOiAncG9saXRlJyxcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIGZpbmRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICB2YXIgZm91bmRFbGVtZW50ID0gbnVsbCxcbiAgICAgICAgZm91bmQ7XG5cbiAgICBmdW5jdGlvbiByZWN1cnNlKGVsZW1lbnQsIGNsYXNzTmFtZSwgZm91bmQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoICYmICFmb3VuZDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSBlbGVtZW50LmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IGVsLmNsYXNzTmFtZSAhPSB1bmRlZmluZWQgPyBlbC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpIDogW107XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMCwgamwgPSBjbGFzc2VzLmxlbmd0aDsgaiA8IGpsOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3Nlc1tqXSA9PSBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3VuZEVsZW1lbnQgPSBlbGVtZW50LmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmb3VuZClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIHJlY3Vyc2UoZWxlbWVudC5jaGlsZE5vZGVzW2ldLCBjbGFzc05hbWUsIGZvdW5kKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWN1cnNlKGVsZW1lbnQsIGNsYXNzTmFtZSwgZmFsc2UpO1xuICAgIHJldHVybiBmb3VuZEVsZW1lbnQ7XG59XG5cblxubGV0IGJ1aWxkQ29udGFpbmVyID0gKHBsYXllcikgPT4ge1xuICAgIHZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoXCJwbGF5bGlzdE1vZGFsQnV0dG9uXCIsIHBsYXlsaXN0TW9kYWxCdXR0b24pO1xuXG4gICAgdmFyIGJ1dHRvbkluZGV4ID0gcGxheWVyLmNvbnRyb2xCYXIuY2hpbGRyZW4oKS5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgICByZXR1cm4gYy5uYW1lKCk7XG4gICAgfSkuaW5kZXhPZignRnVsbHNjcmVlblRvZ2dsZScpIC0gMTtcbiAgICBwbGF5ZXIuY29udHJvbEJhci5wbGF5bGlzdEJ1dHRvbiA9IHBsYXllci5jb250cm9sQmFyLmFkZENoaWxkKCdwbGF5bGlzdE1vZGFsQnV0dG9uJywgbnVsbCwgYnV0dG9uSW5kZXgpO1xuICAgIHBsYXllci5jb250cm9sQmFyLnBsYXlsaXN0QnV0dG9uLmVsKCkuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuXG4gICAgcGxheWxpc3RNb2RhbCA9IGZpbmRDbGFzcyhwbGF5ZXIuY29udHJvbEJhci5wbGF5bGlzdEJ1dHRvbi5lbF8sIFwidmpzLXBsYXlsaXN0LW1lbnVcIik7XG4gICAgY29uc29sZS5sb2cocGxheWxpc3RNb2RhbCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfb3B0aW9ucy5wbGF5bGlzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGxheWVyLmNhdGFsb2cuZ2V0UGxheWxpc3QoX29wdGlvbnMucGxheWxpc3RzW2ldLmlkLCBmdW5jdGlvbihlcnJvciwgcGxheWxpc3QpIHtcbiAgICAgICAgICAgIHBsYXllci5jYXRhbG9nLmxvYWQocGxheWxpc3QpO1xuICAgICAgICAgICAgZGF0YSA9IHBsYXllci5jYXRhbG9nLmRhdGE7XG4gICAgICAgICAgICBjaGlsZFN0cmluZyA9IFwiPGxpIGNsYXNzPSd2anMtcGxheWxpc3QtdGl0bGUgdmpzLW1lbnUtaXRlbScgaWQ9J1wiICsgZGF0YS5pZCArIFwiJz5cIiArIGRhdGEubmFtZSArIFwiPC9saT48dWw+PC91bD5cIjtcbiAgICAgICAgICAgIHBsYXlsaXN0TW9kYWwuaW5uZXJIVE1MICs9IGNoaWxkU3RyaW5nO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwbGF5bGlzdE1vZGFsLmNoaWxkTm9kZXMubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgICAgIHBsYXlsaXN0TW9kYWwuY2hpbGROb2Rlc1tqXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuY2F0YWxvZy5nZXRQbGF5bGlzdChldnQuY3VycmVudFRhcmdldC5pZCwgZnVuY3Rpb24oZXJyb3IsIHBsYXlsaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuY2F0YWxvZy5sb2FkKHBsYXlsaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5wbGF5bGlzdC5jdXJyZW50SXRlbSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKmZvcih2YXIgej0wOyB6PCBwbGF5bGlzdC5sZW5ndGg7eisrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFN0cmluZyA9IFwiPGxpIGNsYXNzPSd2anMtdmlkZW8tdGl0bGUgdmpzLW1lbnUtaXRlbScgaWQ9J1wiICsgcGxheWxpc3Rbel0uaWQgKyBcIic+XCIgKyBwbGF5bGlzdFt6XS5uYW1lICsgXCI8L2xpPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2dC50YXJnZXQuaW5uZXJIVE1MICs9IGNoaWxkU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn07XG5cblxubGV0IHNldE9wdGlvbnMgPSAob3B0KSA9PiB7XG4gICAgX29wdGlvbnMgPSBvcHQ7XG4gICAgaWYgKF9vcHRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX29wdGlvbnMucGxheWxpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfb3B0aW9ucy5wbGF5bGlzdHNbaV0uaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5cbi8qKlxuICogRnVuY3Rpb24gdG8gaW52b2tlIHdoZW4gdGhlIHBsYXllciBpcyByZWFkeS5cbiAqXG4gKiBUaGlzIGlzIGEgZ3JlYXQgcGxhY2UgZm9yIHlvdXIgcGx1Z2luIHRvIGluaXRpYWxpemUgaXRzZWxmLiBXaGVuIHRoaXNcbiAqIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlIHBsYXllciB3aWxsIGhhdmUgaXRzIERPTSBhbmQgY2hpbGQgY29tcG9uZW50c1xuICogaW4gcGxhY2UuXG4gKlxuICogQGZ1bmN0aW9uIG9uUGxheWVyUmVhZHlcbiAqIEBwYXJhbSAgICB7UGxheWVyfSBwbGF5ZXJcbiAqIEBwYXJhbSAgICB7T2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqL1xuY29uc3Qgb25QbGF5ZXJSZWFkeSA9IChiY3BsYXllciwgb3B0aW9ucykgPT4ge1xuXG4gICAgY29uc29sZS5sb2coJ0JyaWdodGNvdmUgUGxheWVyIG11bHRpUGxheWxpc3QgbG9hZGVkJyk7XG5cbiAgICAvL2V2ZW50cyA9IGJjcGxheWVyLmRlYnVnZ2VyV2luZG93LmdldEV2ZW50cztcblxuICAgIC8vYmNwbGF5ZXIuYWRkQ2xhc3MoJ3Zqcy1wbGF5ZXItZGVidWdnZXInKTtcblxuICAgIGxldCBmb250YXdlc29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBmb250YXdlc29tZS5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgZm9udGF3ZXNvbWUuaHJlZiA9IFwiLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4wLjMvY3NzL2ZvbnQtYXdlc29tZS5jc3NcIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvbnRhd2Vzb21lKTtcblxuICAgIHNldE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICBidWlsZENvbnRhaW5lcihiY3BsYXllcik7XG5cbiAgICBsaXN0ZW5Gb3JQbGF5ZXJFdmVudHMoYmNwbGF5ZXIpO1xufTtcbi8qKlxuICogQSBCcmlnaHRjb3ZlIHZpZGVvLmpzIHBsdWdpbi5cbiAqXG4gKiBJbiB0aGUgcGx1Z2luIGZ1bmN0aW9uLCB0aGUgdmFsdWUgb2YgYHRoaXNgIGlzIGEgdmlkZW8uanMgYFBsYXllcmBcbiAqIGluc3RhbmNlLiBZb3UgY2Fubm90IHJlbHkgb24gdGhlIHBsYXllciBiZWluZyBpbiBhIFwicmVhZHlcIiBzdGF0ZSBoZXJlLFxuICogZGVwZW5kaW5nIG9uIGhvdyB0aGUgcGx1Z2luIGlzIGludm9rZWQuIFRoaXMgbWF5IG9yIG1heSBub3QgYmUgaW1wb3J0YW50XG4gKiB0byB5b3U7IGlmIG5vdCwgcmVtb3ZlIHRoZSB3YWl0IGZvciBcInJlYWR5XCIhXG4gKlxuICogQGZ1bmN0aW9uIHBsYXllckRlYnVnZ2VyXG4gKiBAcGFyYW0gICAge09iamVjdH0gW29wdGlvbnM9e31dXG4gKiAgICAgICAgICAgQW4gb2JqZWN0IG9mIG9wdGlvbnMgbGVmdCB0byB0aGUgcGx1Z2luIGF1dGhvciB0byBkZWZpbmUuXG4gKi9cbmNvbnN0IG11bHRpUGxheWxpc3QgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdGhpcy5yZWFkeSgoKSA9PiB7XG5cbiAgICAgICAgX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBvblBsYXllclJlYWR5KHRoaXMsIHZpZGVvanMubWVyZ2VPcHRpb25zKGRlZmF1bHRzLCBfb3B0aW9ucykpO1xuICAgIH0pO1xufTtcblxuLy8gUmVnaXN0ZXIgdGhlIHBsdWdpbiB3aXRoIHZpZGVvLmpzLlxudmlkZW9qcy5wbHVnaW4oJ211bHRpUGxheWxpc3QnLCBtdWx0aVBsYXlsaXN0KTtcblxuLy8gSW5jbHVkZSB0aGUgdmVyc2lvbiBudW1iZXIuXG5tdWx0aVBsYXlsaXN0LlZFUlNJT04gPSAnX19WRVJTSU9OX18nO1xuXG5leHBvcnQgZGVmYXVsdCBtdWx0aVBsYXlsaXN0O1xuIl19
