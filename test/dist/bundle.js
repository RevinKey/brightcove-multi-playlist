(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"min-document":1}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{"./js/componentIDs.js":3,"./js/playlistContainer.js":4}],6:[function(require,module,exports){
(function (global){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _globalDocument = require('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

var _qunit = (typeof window !== "undefined" ? window['QUnit'] : typeof global !== "undefined" ? global['QUnit'] : null);

var _qunit2 = _interopRequireDefault(_qunit);

var _sinon = (typeof window !== "undefined" ? window['sinon'] : typeof global !== "undefined" ? global['sinon'] : null);

var _sinon2 = _interopRequireDefault(_sinon);

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var _srcPlugin = require('../src/plugin');

var _srcPlugin2 = _interopRequireDefault(_srcPlugin);

var Player = _videoJs2['default'].getComponent('Player');

_qunit2['default'].test('the environment is sane', function (assert) {
  assert.strictEqual(typeof Array.isArray, 'function', 'es5 exists');
  assert.strictEqual(typeof _sinon2['default'], 'object', 'sinon exists');
  assert.strictEqual(typeof _videoJs2['default'], 'function', 'videojs exists');
  assert.strictEqual(typeof _srcPlugin2['default'], 'function', 'plugin is a function');
});

_qunit2['default'].module('videojs-player-debugger', {

  beforeEach: function beforeEach() {

    // Mock the environment's timers because certain things - particularly
    // player readiness - are asynchronous in video.js 5. This MUST come
    // before any player is created; otherwise, timers could get created
    // with the actual timer methods!
    this.clock = _sinon2['default'].useFakeTimers();

    this.fixture = _globalDocument2['default'].getElementById('qunit-fixture');
    this.video = _globalDocument2['default'].createElement('video');
    this.fixture.appendChild(this.video);
    this.player = (0, _videoJs2['default'])(this.video);
  },

  afterEach: function afterEach() {
    this.player.dispose();
    this.clock.restore();
  }
});

_qunit2['default'].test('registers itself with video.js', function (assert) {
  assert.expect(2);

  assert.strictEqual(Player.prototype.playerDebugger, _srcPlugin2['default'], 'videojs-player-debugger plugin was registered');

  this.player.playerDebugger();

  // Tick the clock forward enough to trigger the player to be "ready".
  this.clock.tick(1);

  assert.ok(this.player.hasClass('vjs-player-debugger'), 'the plugin adds a class to the player');
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../src/plugin":5,"global/document":2}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1yZXNvbHZlL2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2dsb2JhbC9kb2N1bWVudC5qcyIsIi9Vc2Vycy9rcmV5bm9sZHMvUmVwb3MvYnJpZ2h0Y292ZS1tdWx0aS1wbGF5bGlzdC9zcmMvanMvY29tcG9uZW50SURzLmpzIiwiL1VzZXJzL2tyZXlub2xkcy9SZXBvcy9icmlnaHRjb3ZlLW11bHRpLXBsYXlsaXN0L3NyYy9qcy9wbGF5bGlzdENvbnRhaW5lci5qcyIsIi9Vc2Vycy9rcmV5bm9sZHMvUmVwb3MvYnJpZ2h0Y292ZS1tdWx0aS1wbGF5bGlzdC9zcmMvcGx1Z2luLmpzIiwiL1VzZXJzL2tyZXlub2xkcy9SZXBvcy9icmlnaHRjb3ZlLW11bHRpLXBsYXlsaXN0L3Rlc3QvcGx1Z2luLnRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2ZPLElBQUksR0FBRyxHQUFHO0FBQ2IsZUFBVyxFQUFFLGFBQWE7QUFDMUIsV0FBTyxFQUFFLFdBQVc7QUFDcEIsWUFBUSxFQUFFLFlBQVk7O0FBRXRCLGFBQVMsRUFBRSxXQUFXO0FBQ3RCLFNBQUssRUFBRSxPQUFPO0FBQ2QsYUFBUyxFQUFFLFdBQVc7QUFDdEIsT0FBRyxFQUFFLGFBQWE7QUFDbEIsZ0JBQVksRUFBRSxjQUFjO0FBQzVCLG1CQUFlLEVBQUUsaUJBQWlCO0FBQ2xDLDJCQUF1QixFQUFFLHlCQUF5QjtBQUNsRCx1QkFBbUIsRUFBRSxxQkFBcUI7QUFDMUMseUJBQXFCLEVBQUUsdUJBQXVCO0FBQzlDLDZCQUF5QixF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anMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIiLCJ2YXIgdG9wTGV2ZWwgPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fVxudmFyIG1pbkRvYyA9IHJlcXVpcmUoJ21pbi1kb2N1bWVudCcpO1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQ7XG59IGVsc2Uge1xuICAgIHZhciBkb2NjeSA9IHRvcExldmVsWydfX0dMT0JBTF9ET0NVTUVOVF9DQUNIRUA0J107XG5cbiAgICBpZiAoIWRvY2N5KSB7XG4gICAgICAgIGRvY2N5ID0gdG9wTGV2ZWxbJ19fR0xPQkFMX0RPQ1VNRU5UX0NBQ0hFQDQnXSA9IG1pbkRvYztcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRvY2N5O1xufVxuIiwiZXhwb3J0IGxldCBJRHMgPSB7XG4gICAgbXlCbGFja2JpcmQ6ICdteUJsYWNrYmlyZCcsXG4gICAgZmlsdGVyczogJ2JiRmlsdGVycycsXG4gICAgY29udHJvbHM6ICdiYkNvbnRyb2xzJyxcbiAgICAvL3NpemU6ICdiYlNpemUnLFxuICAgIHNlbmRFbWFpbDogJ3NlbmRFbWFpbCcsXG4gICAgbW9kYWw6ICdtb2RhbCcsXG4gICAgYnV0dG9uQmFyOiAnYnV0dG9uQmFyJyxcbiAgICBsb2c6ICdteUJsYWNrYmlyZCcsXG4gICAgYnRuVG9nZ2xlTG9nOiAnYnRuVG9nZ2xlTG9nJyxcbiAgICBidG5Ub2dnbGVTbGlkZXI6ICdidG5Ub2dnbGVTbGlkZXInLFxuICAgIGJ0blRvZ2dsZVBsYXllclNldHRpbmdzOiAnYnRuVG9nZ2xlUGxheWVyU2V0dGluZ3MnLFxuICAgIGJ0blRvZ2dsZUFkU2V0dGluZ3M6ICdidG5Ub2dnbGVBZFNldHRpbmdzJyxcbiAgICBidG5Ub2dnbGVQbGF5YmFja0luZm86ICdidG5Ub2dnbGVQbGF5YmFja0luZm8nLFxuICAgIGJ0blRvZ2dsZURlYnVnZ2VyU2V0dGluZ3M6ICdidG5Ub2dnbGVEZWJ1Z2dlclNldHRpbmdzJyxcbiAgICBjbGFzc2VzTGlzdDogJ2NsYXNzZXNMaXN0JyxcbiAgICBwbGF5ZXJTZXR0aW5nczogJ3BsYXllclNldHRpbmdzJyxcbiAgICBwbGF5YmFja0luZm86ICdwbGF5YmFja0luZm8nLFxuICAgIGRlYnVnZ2VyU2V0dGluZ3M6ICdkZWJ1Z2dlclNldHRpbmdzJyxcbiAgICBidG5Ub2dnbGVDbGFzc0xpc3Q6ICdidG5Ub2dnbGVDbGFzc0xpc3QnLFxuICAgIC8vYmlnUGxheUJ1dHRvblN0eWxlczogJ2JpZ1BsYXlCdXR0b25TdHlsZXMnLFxuICAgIC8vcG9zdGVyU3R5bGVzOiAncG9zdGVyU3R5bGVzJyxcbiAgICBsb2dUYWJsZTogJ2xvZ1RhYmxlJyxcbiAgICBsb2dMaXN0OiAnbG9nTGlzdCcsXG4gICAgbG9nSlNPTjogJ2xvZ0pTT04nLFxuICAgIG1lZGlhU2V0dGluZ3M6ICdtZWRpYVNldHRpbmdzJyxcbiAgICBhZFNldHRpbmdzOiAnYWRTZXR0aW5ncydcbn07XG4iLCIvKipcbiAqIEBmaWxlIHBsYXlsaXN0Q29udGFpbmVyLmpzXG4gKi9cbiBpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7UGxheWVyfE9iamVjdH0gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICogQGNsYXNzIFBsYXlsaXN0Q29udGFpbmVyXG4gKi9cbmNsYXNzIFBsYXlsaXN0Q29udGFpbmVyIGV4dGVuZHMgdmlkZW9qcy5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXG4gICAgc3VwZXIocGxheWVyLG9wdGlvbnMpO1xuXG4gICAgLy90aGlzLmNvbnRlbnQodGhpcy5vcHRpb25zXy5jb250ZW50KTtcblxuICAgIHRoaXMuZWxfID0gdmlkZW9qcy5jcmVhdGVFbChcImRpdlwiLFxuICAgICAge1xuICAgICAgICBcImlkXCIgOiB0aGlzLm9wdGlvbnNfLmlkXG4gICAgICB9XG5cbiAgICApO1xuXG4gICAgdGhpcy5oZWFkZXJFbF8gPSB2aWRlb2pzLmNyZWF0ZUVsKCdkaXYnLFxuICAgICAge1wiY2xhc3NOYW1lXCI6ICdoZWFkZXInfVxuICAgICk7XG4gICAgdGhpcy5oZWFkZXJFbF8uaW5uZXJIVE1MPSc8aDI+JyArIHRoaXMub3B0aW9uc18ubmFtZSArICc8L2gyPic7XG4gICAgdGhpcy5lbF8uYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXJFbF8pO1xuXG4gICAgdGhpcy5jb250ZW50RWxfID0gdmlkZW9qcy5jcmVhdGVFbCgnZGl2Jywge1wiY2xhc3NOYW1lXCI6ICdtYWluJ30pO1xuICAgIHRoaXMuY29udGVudEVsXy5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnNfLmNvbnRlbnQ7XG4gICAgdGhpcy5lbF8uYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50RWxfKTtcblxuICAgIHRoaXMuZm9vdGVyRWxfID0gdmlkZW9qcy5jcmVhdGVFbCgnZGl2Jywge1wiY2xhc3NOYW1lXCIgOiAnZm9vdGVyJ30pO1xuICAgIHRoaXMuZWxfLmFwcGVuZENoaWxkKHRoaXMuZm9vdGVyRWxfKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbnRlbnQodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5jb250ZW50RWxfLmlubmVySFRNTCA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250ZW50RWxfLmlubmVySFRNTDtcbiAgfVxuXG5cbn1cblxudmlkZW9qcy5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1BsYXlsaXN0Q29udGFpbmVyJywgUGxheWxpc3RDb250YWluZXIpO1xuZXhwb3J0IGRlZmF1bHQgUGxheWxpc3RDb250YWluZXI7XG4iLCJpbXBvcnQgUGxheWxpc3RDb250YWluZXIgZnJvbSAnLi9qcy9wbGF5bGlzdENvbnRhaW5lci5qcyc7XG5pbXBvcnQge1xuICAgIElEc1xufSBmcm9tICcuL2pzL2NvbXBvbmVudElEcy5qcyc7XG5cbi8vIERlZmF1bHQgb3B0aW9ucyBmb3IgdGhlIHBsdWdpbi5cbmNvbnN0IGRlZmF1bHRzID0ge307XG5cbi8vIG15IGRlYnVnZ2VyIGxldHNcbmxldCBfb3B0aW9ucyxcbiAgICBwbGF5ZXIsXG4gICAgYWRTZXR0aW5ncyxcbiAgICBsYXN0RXZlbnQgPSBcIlwiLFxuICAgIGN1cnJlbnRFdmVudCA9IFwiXCIsXG4gICAgTW9kYWwsXG4gICAgcGxheWxpc3RNb2RhbCxcbiAgICBjaGlsZCxcbiAgICBwbGF5bGlzdFRpdGxlLFxuICAgIGRhdGEsXG4gICAgaWQsXG4gICAgY2hpbGRTdHJpbmcsXG4gICAgYWxsUGxheWVyRXZlbnRzSlNPTixcbiAgICBhbGxQbGF5ZXJFdmVudHMgPSBbXSxcbiAgICBjdXJyZW50RHVyYXRpb24sXG4gICAgY3VycmVudFNvdXJjZSxcbiAgICBjdXJyZW50TWVkaWEsXG4gICAgbG9nVHlwZXMgPSB7XG4gICAgICAgIGFycmF5OiAnYXJyYXknLFxuICAgICAgICB0YWJsZTogJ3RhYmxlJyxcbiAgICAgICAgbGlzdDogJ2xpc3QnLFxuICAgICAgICBqc29uOiAnanNvbidcbiAgICB9O1xuXG4vLyBBcnJheSBvZiBldmVudHMgSSBjYW1lIHVwIHdpdGggYnkgd2F0Y2hpbmcgZGVidWdnZXIgd2luZG93IGFuZCB1c2luZyBkb2N1bWVudGF0aW9uXG5sZXQgcGxheWVyRXZlbnRzID0gW1xuICAgICdyZWFkeScsIC8vIHZpZG9qc19jb21wb25lbnRcbiAgICAnZHVyYXRpb25jaGFuZ2UnLCAvLyB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2YsIHZpZGVvanNfY29udHJpYl9obHNcbiAgICAnZW5kZWQnLCAvLyB2aWRlb2pzX2NvbnRyaWJfYWRzLCB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2YsIHZpZGVvanNfcW9zXG4gICAgJ2Vycm9yJywgLy8gdmlkZW9qc19wbGF5ZXJcbiAgICAnZmlyc3RwbGF5JywgLy8gdmlkZW9qc19wbGF5ZXJcbiAgICAnZnVsbHNjcmVlbmNoYW5nZScsIC8vIHZpZGVvanNfcW9zLCB2aWRlb2pzX3BsYXllclxuICAgICdsb2FkZWRhbGxkYXRhJyxcbiAgICAnbG9hZGVkZGF0YScsIC8vIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICdsb2FkZWRtZXRhZGF0YScsIC8vIHZpZGVvanNfcW9zLCB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19jb250cmliX2hscywgdmlkZW9qc19zd2ZcbiAgICAnbG9hZHN0YXJ0JywgLy8gdmlkZW9qc19xb3MsIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICdwYXVzZScsIC8vIHZpZGVvanNfcW9zLCB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAncGxheScsIC8vIHZpZGVvanNfcW9zLCB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAncGxheWVyX2xvYWQnLCAvLyB2aWRlb2pzX2JjX2FuYWx5dGljc1xuICAgICdjb250ZW50dXBkYXRlJywgLy8gdmlkZW9qc19jb250cmliX2Fkc1xuICAgICdzZWVraW5nJywgLy8gdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ3NlZWtlZCcsIC8vIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICdwcm9ncmVzcycsIC8vIHZpZGVvanNfY29udHJpYl9obHMsIHZpZGVvanNfcGxheWVyICh2aWRlb2pzX3N3Zj8pXG4gICAgJ2NhdGFsb2dfcmVxdWVzdCcsIC8vIHZpZGVvanNfY2F0YWxvZ1xuICAgICdjYXRhbG9nX3Jlc3BvbnNlJywgLy8gdmlkZW9qc19jYXRhbG9nXG4gICAgJ3BsYXlpbmcnLCAvLyB2aWRlb2pzX3FvcywgdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ3dhaXRpbmcnLCAvLyB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAndmlkZW9fdmlldycsIC8vIHZpZGVvanNfYmNfYW5hbHl0aWNzXG4gICAgJ3ZpZGVvX2ltcHJlc3Npb24nLCAvLyB2aWRlb2pzX2JjX2FuYWx5dGljc1xuICAgICd2aWRlb19lbmdhZ2VtZW50JywgLy8gdmlkZW9qc19iY19hbmFseXRpY3NcbiAgICAncGxheV9yZXF1ZXN0JywgLy8gdmlkZW9qc19iY19hbmFseXRpY3NcbiAgICAnY2FucGxheScsIC8vIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICdjYW5wbGF5dGhyb3VnaCcsIC8vIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICd0aW1ldXBkYXRlJ1xuXTtcblxubGV0IGdldFBsYXllckV2ZW50cyA9ICgpID0+IHtcbiAgICBhbGxQbGF5ZXJFdmVudHNKU09OID0gdmlkZW9qcy5nZXREYXRhKHBsYXllci5lbF8pLmhhbmRsZXJzO1xuXG5cbiAgICBmb3IgKHByb3AgaW4gYWxsUGxheWVyRXZlbnRzSlNPTikge1xuICAgICAgICBhbGxQbGF5ZXJFdmVudHMucHVzaChwcm9wKTtcbiAgICB9XG5cbiAgICBhbGxQbGF5ZXJFdmVudHMuc29ydCgpO1xuXG4gICAgZm9yIChpID0gMTsgaSA8IGFsbFBsYXllckV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxQbGF5ZXJFdmVudHNbaV0pO1xuICAgIH1cbn07XG5cbmxldCBsaXN0ZW5Gb3JQbGF5ZXJFdmVudHMgPSAocGxheWVyKSA9PiB7XG5cbiAgICBwbGF5ZXIub25lKCdkdXJhdGlvbmNoYW5nZScsIGZ1bmN0aW9uKGUpIHt9KTtcblxuICAgIGxldCBwbGF5Q291bnRlciA9IDA7XG4gICAgbGV0IG1zZ1N0ciwgY3VycmVudFRpbWUsIHByZXZpb3VzVGltZSwgbGV2ZWxTdHIgPSAnZGVidWcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyRXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBsYXllci5vbihwbGF5ZXJFdmVudHNbaV0sIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdmaXJzdHBsYXknOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdwbGF5JzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbG9hZGVkbWV0YWRhdGEnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdwYXVzZSc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3Byb2dyZXNzJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY29udGVudHVwZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NlZWtpbmcnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjYW5wbGF5dGhyb3VnaCc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWV1cGRhdGUnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzZWVrZWQnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjYXRhbG9nX3Jlc3BvbnNlJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZHVyYXRpb25jaGFuZ2UnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBtc2dTdHIgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxTdHIgPSAnZGVidWcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG52YXIgcGxheWxpc3RNb2RhbEJ1dHRvbiA9IHZpZGVvanMuZXh0ZW5kKHZpZGVvanMuQnV0dG9uLCB7XG4gICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uKHBsYXllciwgb3B0aW9ucykge1xuXG4gICAgICAgIHZpZGVvanMuQnV0dG9uLmNhbGwodGhpcywgcGxheWVyLCBvcHRpb25zKTtcblxuXG4gICAgICAgIHBsYXllci5vbignbG9hZHN0YXJ0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfb3B0aW9ucyk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQmluZCBjbGljayBldmVudCBmb3IgZGVza3RvcCBicm93c2Vyc1xuICAgICAgICB0aGlzLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge30pO1xuICAgIH0sXG5cbiAgICBjcmVhdGVFbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB2aWRlb2pzLkJ1dHRvbi5wcm90b3R5cGUuY3JlYXRlRWwuY2FsbCh0aGlzLCAnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAndmpzLXBsYXlsaXN0LWJ1dHRvbiB2anMtbWVudS1idXR0b24gdmpzLW1lbnUtYnV0dG9uLXBvcHVwIHZqcy1jb250cm9sIHZqcy1idXR0b24nLFxuICAgICAgICAgICAgaW5uZXJIVE1MOiAnPGRpdiBjbGFzcz1cInZqcy1tZW51IHBsYXlsaXN0TW9kYWwgdmpzLWljb25zLWNoYXB0ZXJzXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPjx1bCBpZD1cInZqcy1wbGF5bGlzdC1tZW51XCIgY2xhc3M9XCJ2anMtcGxheWxpc3QtbWVudSB2anMtbWVudS1jb250ZW50XCJyb2xlPVwibWVudVwiPjwvdWw+PC9kaXY+PHNwYW4gY2xhc3M9XCJ2anMtY29udHJvbC10ZXh0XCI+UGxheWxpc3Q8L3NwYW4+PC9kaXY+J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICAnYXJpYS1saXZlJzogJ3BvbGl0ZScsXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBmaW5kQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgdmFyIGZvdW5kRWxlbWVudCA9IG51bGwsXG4gICAgICAgIGZvdW5kO1xuXG4gICAgZnVuY3Rpb24gcmVjdXJzZShlbGVtZW50LCBjbGFzc05hbWUsIGZvdW5kKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCAmJiAhZm91bmQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIGVsID0gZWxlbWVudC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUgIT0gdW5kZWZpbmVkID8gZWwuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKSA6IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpsID0gY2xhc3Nlcy5sZW5ndGg7IGogPCBqbDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsYXNzZXNbal0gPT0gY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRFbGVtZW50ID0gZWxlbWVudC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZm91bmQpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICByZWN1cnNlKGVsZW1lbnQuY2hpbGROb2Rlc1tpXSwgY2xhc3NOYW1lLCBmb3VuZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVjdXJzZShlbGVtZW50LCBjbGFzc05hbWUsIGZhbHNlKTtcbiAgICByZXR1cm4gZm91bmRFbGVtZW50O1xufVxuXG5cbmxldCBidWlsZENvbnRhaW5lciA9IChwbGF5ZXIpID0+IHtcbiAgICB2aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KFwicGxheWxpc3RNb2RhbEJ1dHRvblwiLCBwbGF5bGlzdE1vZGFsQnV0dG9uKTtcblxuICAgIHZhciBidXR0b25JbmRleCA9IHBsYXllci5jb250cm9sQmFyLmNoaWxkcmVuKCkubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgcmV0dXJuIGMubmFtZSgpO1xuICAgIH0pLmluZGV4T2YoJ0Z1bGxzY3JlZW5Ub2dnbGUnKSAtIDE7XG4gICAgcGxheWVyLmNvbnRyb2xCYXIucGxheWxpc3RCdXR0b24gPSBwbGF5ZXIuY29udHJvbEJhci5hZGRDaGlsZCgncGxheWxpc3RNb2RhbEJ1dHRvbicsIG51bGwsIGJ1dHRvbkluZGV4KTtcbiAgICBwbGF5ZXIuY29udHJvbEJhci5wbGF5bGlzdEJ1dHRvbi5lbCgpLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcblxuICAgIHBsYXlsaXN0TW9kYWwgPSBmaW5kQ2xhc3MocGxheWVyLmNvbnRyb2xCYXIucGxheWxpc3RCdXR0b24uZWxfLCBcInZqcy1wbGF5bGlzdC1tZW51XCIpO1xuICAgIGNvbnNvbGUubG9nKHBsYXlsaXN0TW9kYWwpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX29wdGlvbnMucGxheWxpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBsYXllci5jYXRhbG9nLmdldFBsYXlsaXN0KF9vcHRpb25zLnBsYXlsaXN0c1tpXS5pZCwgZnVuY3Rpb24oZXJyb3IsIHBsYXlsaXN0KSB7XG4gICAgICAgICAgICBwbGF5ZXIuY2F0YWxvZy5sb2FkKHBsYXlsaXN0KTtcbiAgICAgICAgICAgIGRhdGEgPSBwbGF5ZXIuY2F0YWxvZy5kYXRhO1xuICAgICAgICAgICAgY2hpbGRTdHJpbmcgPSBcIjxsaSBjbGFzcz0ndmpzLXBsYXlsaXN0LXRpdGxlIHZqcy1tZW51LWl0ZW0nIGlkPSdcIiArIGRhdGEuaWQgKyBcIic+XCIgKyBkYXRhLm5hbWUgKyBcIjwvbGk+PHVsPlwiO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwbGF5bGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNoaWxkU3RyaW5nICs9IFwiPGRpdiBjbGFzcz0ndmpzLXZpZGVvLXRpdGxlIHZqcy1tZW51LWl0ZW0nIHBsYXlsaXN0SWQ9J1wiICsgZGF0YS5pZCArIFwiJ2lkPSdcIiArIHBsYXlsaXN0W2pdLmlkICsgXCInPlwiICsgcGxheWxpc3Rbal0ubmFtZSArIFwiPC9kaXY+XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGlsZFN0cmluZyArPSBcIjwvdWw+XCI7XG4gICAgICAgICAgICBwbGF5bGlzdE1vZGFsLmlubmVySFRNTCArPSBjaGlsZFN0cmluZztcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgcGxheWxpc3RNb2RhbC5jaGlsZE5vZGVzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBwbGF5bGlzdE1vZGFsLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXlsaXN0TW9kYWwuY2hpbGROb2Rlc1t4XS5jbGFzc05hbWUgPT09ICd2anMtcGxheWxpc3QtdGl0bGUgdmpzLW1lbnUtaXRlbScpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWxpc3RNb2RhbC5jaGlsZE5vZGVzW3hdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuY2F0YWxvZy5nZXRQbGF5bGlzdChldnQuY3VycmVudFRhcmdldC5pZCwgZnVuY3Rpb24oZXJyb3IsIHBsYXlsaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmNhdGFsb2cubG9hZChwbGF5bGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBsYXlsaXN0LmN1cnJlbnRJdGVtKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5bGlzdE1vZGFsLmNoaWxkTm9kZXNbeF0udGFnTmFtZSA9PT0gJ1VMJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IHBsYXlsaXN0TW9kYWwuY2hpbGROb2Rlc1t4XTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCB0ZW1wLmNoaWxkTm9kZXMubGVuZ3RoOyB6KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAuY2hpbGROb2Rlc1t6XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5jYXRhbG9nLmdldFBsYXlsaXN0KGV2dC5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXMucGxheWxpc3RJZC52YWx1ZSwgZnVuY3Rpb24oZXJyb3IsIHBsYXlsaXN0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmNhdGFsb2cubG9hZChwbGF5bGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcih2YXIgayA9MDsgayA8IHBsYXlsaXN0Lmxlbmd0aDsgaysrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGV2dC50YXJnZXQuaWQgPT09IHBsYXlsaXN0W2tdLmlkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheWxpc3QuY3VycmVudEl0ZW0oayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn07XG5cblxubGV0IHNldE9wdGlvbnMgPSAob3B0KSA9PiB7XG4gICAgX29wdGlvbnMgPSBvcHQ7XG4gICAgaWYgKF9vcHRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX29wdGlvbnMucGxheWxpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfb3B0aW9ucy5wbGF5bGlzdHNbaV0uaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5cbi8qKlxuICogRnVuY3Rpb24gdG8gaW52b2tlIHdoZW4gdGhlIHBsYXllciBpcyByZWFkeS5cbiAqXG4gKiBUaGlzIGlzIGEgZ3JlYXQgcGxhY2UgZm9yIHlvdXIgcGx1Z2luIHRvIGluaXRpYWxpemUgaXRzZWxmLiBXaGVuIHRoaXNcbiAqIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlIHBsYXllciB3aWxsIGhhdmUgaXRzIERPTSBhbmQgY2hpbGQgY29tcG9uZW50c1xuICogaW4gcGxhY2UuXG4gKlxuICogQGZ1bmN0aW9uIG9uUGxheWVyUmVhZHlcbiAqIEBwYXJhbSAgICB7UGxheWVyfSBwbGF5ZXJcbiAqIEBwYXJhbSAgICB7T2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqL1xuY29uc3Qgb25QbGF5ZXJSZWFkeSA9IChiY3BsYXllciwgb3B0aW9ucykgPT4ge1xuXG4gICAgY29uc29sZS5sb2coJ0JyaWdodGNvdmUgUGxheWVyIG11bHRpUGxheWxpc3QgbG9hZGVkJyk7XG5cbiAgICAvL2V2ZW50cyA9IGJjcGxheWVyLmRlYnVnZ2VyV2luZG93LmdldEV2ZW50cztcblxuICAgIC8vYmNwbGF5ZXIuYWRkQ2xhc3MoJ3Zqcy1wbGF5ZXItZGVidWdnZXInKTtcblxuICAgIGxldCBmb250YXdlc29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBmb250YXdlc29tZS5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgZm9udGF3ZXNvbWUuaHJlZiA9IFwiLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4wLjMvY3NzL2ZvbnQtYXdlc29tZS5jc3NcIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvbnRhd2Vzb21lKTtcblxuICAgIHNldE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICBidWlsZENvbnRhaW5lcihiY3BsYXllcik7XG5cbiAgICBsaXN0ZW5Gb3JQbGF5ZXJFdmVudHMoYmNwbGF5ZXIpO1xufTtcbi8qKlxuICogQSBCcmlnaHRjb3ZlIHZpZGVvLmpzIHBsdWdpbi5cbiAqXG4gKiBJbiB0aGUgcGx1Z2luIGZ1bmN0aW9uLCB0aGUgdmFsdWUgb2YgYHRoaXNgIGlzIGEgdmlkZW8uanMgYFBsYXllcmBcbiAqIGluc3RhbmNlLiBZb3UgY2Fubm90IHJlbHkgb24gdGhlIHBsYXllciBiZWluZyBpbiBhIFwicmVhZHlcIiBzdGF0ZSBoZXJlLFxuICogZGVwZW5kaW5nIG9uIGhvdyB0aGUgcGx1Z2luIGlzIGludm9rZWQuIFRoaXMgbWF5IG9yIG1heSBub3QgYmUgaW1wb3J0YW50XG4gKiB0byB5b3U7IGlmIG5vdCwgcmVtb3ZlIHRoZSB3YWl0IGZvciBcInJlYWR5XCIhXG4gKlxuICogQGZ1bmN0aW9uIHBsYXllckRlYnVnZ2VyXG4gKiBAcGFyYW0gICAge09iamVjdH0gW29wdGlvbnM9e31dXG4gKiAgICAgICAgICAgQW4gb2JqZWN0IG9mIG9wdGlvbnMgbGVmdCB0byB0aGUgcGx1Z2luIGF1dGhvciB0byBkZWZpbmUuXG4gKi9cbmNvbnN0IG11bHRpUGxheWxpc3QgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdGhpcy5yZWFkeSgoKSA9PiB7XG5cbiAgICAgICAgX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBvblBsYXllclJlYWR5KHRoaXMsIHZpZGVvanMubWVyZ2VPcHRpb25zKGRlZmF1bHRzLCBfb3B0aW9ucykpO1xuICAgIH0pO1xufTtcblxuLy8gUmVnaXN0ZXIgdGhlIHBsdWdpbiB3aXRoIHZpZGVvLmpzLlxudmlkZW9qcy5wbHVnaW4oJ211bHRpUGxheWxpc3QnLCBtdWx0aVBsYXlsaXN0KTtcblxuLy8gSW5jbHVkZSB0aGUgdmVyc2lvbiBudW1iZXIuXG5tdWx0aVBsYXlsaXN0LlZFUlNJT04gPSAnX19WRVJTSU9OX18nO1xuXG5leHBvcnQgZGVmYXVsdCBtdWx0aVBsYXlsaXN0O1xuIiwiaW1wb3J0IGRvY3VtZW50IGZyb20gJ2dsb2JhbC9kb2N1bWVudCc7XG5cbmltcG9ydCBRVW5pdCBmcm9tICdxdW5pdCc7XG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xuaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4uL3NyYy9wbHVnaW4nO1xuXG5jb25zdCBQbGF5ZXIgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnUGxheWVyJyk7XG5cblFVbml0LnRlc3QoJ3RoZSBlbnZpcm9ubWVudCBpcyBzYW5lJywgZnVuY3Rpb24oYXNzZXJ0KSB7XG4gIGFzc2VydC5zdHJpY3RFcXVhbCh0eXBlb2YgQXJyYXkuaXNBcnJheSwgJ2Z1bmN0aW9uJywgJ2VzNSBleGlzdHMnKTtcbiAgYXNzZXJ0LnN0cmljdEVxdWFsKHR5cGVvZiBzaW5vbiwgJ29iamVjdCcsICdzaW5vbiBleGlzdHMnKTtcbiAgYXNzZXJ0LnN0cmljdEVxdWFsKHR5cGVvZiB2aWRlb2pzLCAnZnVuY3Rpb24nLCAndmlkZW9qcyBleGlzdHMnKTtcbiAgYXNzZXJ0LnN0cmljdEVxdWFsKHR5cGVvZiBwbHVnaW4sICdmdW5jdGlvbicsICdwbHVnaW4gaXMgYSBmdW5jdGlvbicpO1xufSk7XG5cblFVbml0Lm1vZHVsZSgndmlkZW9qcy1wbGF5ZXItZGVidWdnZXInLCB7XG5cbiAgYmVmb3JlRWFjaCgpIHtcblxuICAgIC8vIE1vY2sgdGhlIGVudmlyb25tZW50J3MgdGltZXJzIGJlY2F1c2UgY2VydGFpbiB0aGluZ3MgLSBwYXJ0aWN1bGFybHlcbiAgICAvLyBwbGF5ZXIgcmVhZGluZXNzIC0gYXJlIGFzeW5jaHJvbm91cyBpbiB2aWRlby5qcyA1LiBUaGlzIE1VU1QgY29tZVxuICAgIC8vIGJlZm9yZSBhbnkgcGxheWVyIGlzIGNyZWF0ZWQ7IG90aGVyd2lzZSwgdGltZXJzIGNvdWxkIGdldCBjcmVhdGVkXG4gICAgLy8gd2l0aCB0aGUgYWN0dWFsIHRpbWVyIG1ldGhvZHMhXG4gICAgdGhpcy5jbG9jayA9IHNpbm9uLnVzZUZha2VUaW1lcnMoKTtcblxuICAgIHRoaXMuZml4dHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdW5pdC1maXh0dXJlJyk7XG4gICAgdGhpcy52aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgdGhpcy5maXh0dXJlLmFwcGVuZENoaWxkKHRoaXMudmlkZW8pO1xuICAgIHRoaXMucGxheWVyID0gdmlkZW9qcyh0aGlzLnZpZGVvKTtcbiAgfSxcblxuICBhZnRlckVhY2goKSB7XG4gICAgdGhpcy5wbGF5ZXIuZGlzcG9zZSgpO1xuICAgIHRoaXMuY2xvY2sucmVzdG9yZSgpO1xuICB9XG59KTtcblxuUVVuaXQudGVzdCgncmVnaXN0ZXJzIGl0c2VsZiB3aXRoIHZpZGVvLmpzJywgZnVuY3Rpb24oYXNzZXJ0KSB7XG4gIGFzc2VydC5leHBlY3QoMik7XG5cbiAgYXNzZXJ0LnN0cmljdEVxdWFsKFxuICAgIFBsYXllci5wcm90b3R5cGUucGxheWVyRGVidWdnZXIsXG4gICAgcGx1Z2luLFxuICAgICd2aWRlb2pzLXBsYXllci1kZWJ1Z2dlciBwbHVnaW4gd2FzIHJlZ2lzdGVyZWQnXG4gICk7XG5cbiAgdGhpcy5wbGF5ZXIucGxheWVyRGVidWdnZXIoKTtcblxuICAvLyBUaWNrIHRoZSBjbG9jayBmb3J3YXJkIGVub3VnaCB0byB0cmlnZ2VyIHRoZSBwbGF5ZXIgdG8gYmUgXCJyZWFkeVwiLlxuICB0aGlzLmNsb2NrLnRpY2soMSk7XG5cbiAgYXNzZXJ0Lm9rKFxuICAgIHRoaXMucGxheWVyLmhhc0NsYXNzKCd2anMtcGxheWVyLWRlYnVnZ2VyJyksXG4gICAgJ3RoZSBwbHVnaW4gYWRkcyBhIGNsYXNzIHRvIHRoZSBwbGF5ZXInXG4gICk7XG59KTtcbiJdfQ==
