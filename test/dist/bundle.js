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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1yZXNvbHZlL2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2dsb2JhbC9kb2N1bWVudC5qcyIsIi9Vc2Vycy9rcmV5bm9sZHMvUmVwb3MvYnJpZ2h0Y292ZS1tdWx0aS1wbGF5bGlzdC9zcmMvanMvY29tcG9uZW50SURzLmpzIiwiL1VzZXJzL2tyZXlub2xkcy9SZXBvcy9icmlnaHRjb3ZlLW11bHRpLXBsYXlsaXN0L3NyYy9qcy9wbGF5bGlzdENvbnRhaW5lci5qcyIsIi9Vc2Vycy9rcmV5bm9sZHMvUmVwb3MvYnJpZ2h0Y292ZS1tdWx0aS1wbGF5bGlzdC9zcmMvcGx1Z2luLmpzIiwiL1VzZXJzL2tyZXlub2xkcy9SZXBvcy9icmlnaHRjb3ZlLW11bHRpLXBsYXlsaXN0L3Rlc3QvcGx1Z2luLnRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2ZPLElBQUksR0FBRyxHQUFHO0FBQ2IsZUFBVyxFQUFFLGFBQWE7QUFDMUIsV0FBTyxFQUFFLFdBQVc7QUFDcEIsWUFBUSxFQUFFLFlBQVk7O0FBRXRCLGFBQVMsRUFBRSxXQUFXO0FBQ3RCLFNBQUssRUFBRSxPQUFPO0FBQ2QsYUFBUyxFQUFFLFdBQVc7QUFDdEIsT0FBRyxFQUFFLGFBQWE7QUFDbEIsZ0JBQVksRUFBRSxjQUFjO0FBQzVCLG1CQUFlLEVBQUUsaUJBQWlCO0FBQ2xDLDJCQUF1QixFQUFFLHlCQUF5QjtBQUNsRCx1QkFBbUIsRUFBRSxxQkFBcUI7QUFDMUMseUJBQXFCLEVBQUUsdUJBQXVCO0FBQzlDLDZCQUF5QixF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QUF5QixFQUFFOztBQUV0QyxZQUFVLEVBQUEsc0JBQUc7Ozs7OztBQU1YLFFBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQU0sYUFBYSxFQUFFLENBQUM7O0FBRW5DLFFBQUksQ0FBQyxPQUFPLEdBQUcsNEJBQVMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3hELFFBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQVMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLFFBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxRQUFJLENBQUMsTUFBTSxHQUFHLDBCQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUNuQzs7QUFFRCxXQUFTLEVBQUEscUJBQUc7QUFDVixRQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFFBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7R0FDdEI7Q0FDRixDQUFDLENBQUM7O0FBRUgsbUJBQU0sSUFBSSxDQUFDLGdDQUFnQyxFQUFFLFVBQVMsTUFBTSxFQUFFO0FBQzVELFFBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRWpCLFFBQU0sQ0FBQyxXQUFXLENBQ2hCLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYywwQkFFL0IsK0NBQStDLENBQ2hELENBQUM7O0FBRUYsTUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7O0FBRzdCLE1BQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVuQixRQUFNLENBQUMsRUFBRSxDQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLEVBQzNDLHVDQUF1QyxDQUN4QyxDQUFDO0NBQ0gsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiIsInZhciB0b3BMZXZlbCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDpcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9XG52YXIgbWluRG9jID0gcmVxdWlyZSgnbWluLWRvY3VtZW50Jyk7XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudDtcbn0gZWxzZSB7XG4gICAgdmFyIGRvY2N5ID0gdG9wTGV2ZWxbJ19fR0xPQkFMX0RPQ1VNRU5UX0NBQ0hFQDQnXTtcblxuICAgIGlmICghZG9jY3kpIHtcbiAgICAgICAgZG9jY3kgPSB0b3BMZXZlbFsnX19HTE9CQUxfRE9DVU1FTlRfQ0FDSEVANCddID0gbWluRG9jO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gZG9jY3k7XG59XG4iLCJleHBvcnQgbGV0IElEcyA9IHtcbiAgICBteUJsYWNrYmlyZDogJ215QmxhY2tiaXJkJyxcbiAgICBmaWx0ZXJzOiAnYmJGaWx0ZXJzJyxcbiAgICBjb250cm9sczogJ2JiQ29udHJvbHMnLFxuICAgIC8vc2l6ZTogJ2JiU2l6ZScsXG4gICAgc2VuZEVtYWlsOiAnc2VuZEVtYWlsJyxcbiAgICBtb2RhbDogJ21vZGFsJyxcbiAgICBidXR0b25CYXI6ICdidXR0b25CYXInLFxuICAgIGxvZzogJ215QmxhY2tiaXJkJyxcbiAgICBidG5Ub2dnbGVMb2c6ICdidG5Ub2dnbGVMb2cnLFxuICAgIGJ0blRvZ2dsZVNsaWRlcjogJ2J0blRvZ2dsZVNsaWRlcicsXG4gICAgYnRuVG9nZ2xlUGxheWVyU2V0dGluZ3M6ICdidG5Ub2dnbGVQbGF5ZXJTZXR0aW5ncycsXG4gICAgYnRuVG9nZ2xlQWRTZXR0aW5nczogJ2J0blRvZ2dsZUFkU2V0dGluZ3MnLFxuICAgIGJ0blRvZ2dsZVBsYXliYWNrSW5mbzogJ2J0blRvZ2dsZVBsYXliYWNrSW5mbycsXG4gICAgYnRuVG9nZ2xlRGVidWdnZXJTZXR0aW5nczogJ2J0blRvZ2dsZURlYnVnZ2VyU2V0dGluZ3MnLFxuICAgIGNsYXNzZXNMaXN0OiAnY2xhc3Nlc0xpc3QnLFxuICAgIHBsYXllclNldHRpbmdzOiAncGxheWVyU2V0dGluZ3MnLFxuICAgIHBsYXliYWNrSW5mbzogJ3BsYXliYWNrSW5mbycsXG4gICAgZGVidWdnZXJTZXR0aW5nczogJ2RlYnVnZ2VyU2V0dGluZ3MnLFxuICAgIGJ0blRvZ2dsZUNsYXNzTGlzdDogJ2J0blRvZ2dsZUNsYXNzTGlzdCcsXG4gICAgLy9iaWdQbGF5QnV0dG9uU3R5bGVzOiAnYmlnUGxheUJ1dHRvblN0eWxlcycsXG4gICAgLy9wb3N0ZXJTdHlsZXM6ICdwb3N0ZXJTdHlsZXMnLFxuICAgIGxvZ1RhYmxlOiAnbG9nVGFibGUnLFxuICAgIGxvZ0xpc3Q6ICdsb2dMaXN0JyxcbiAgICBsb2dKU09OOiAnbG9nSlNPTicsXG4gICAgbWVkaWFTZXR0aW5nczogJ21lZGlhU2V0dGluZ3MnLFxuICAgIGFkU2V0dGluZ3M6ICdhZFNldHRpbmdzJ1xufTtcbiIsIi8qKlxuICogQGZpbGUgcGxheWxpc3RDb250YWluZXIuanNcbiAqL1xuIGltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHtQbGF5ZXJ8T2JqZWN0fSBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKiBAY2xhc3MgUGxheWxpc3RDb250YWluZXJcbiAqL1xuY2xhc3MgUGxheWxpc3RDb250YWluZXIgZXh0ZW5kcyB2aWRlb2pzLkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cbiAgICBzdXBlcihwbGF5ZXIsb3B0aW9ucyk7XG5cbiAgICAvL3RoaXMuY29udGVudCh0aGlzLm9wdGlvbnNfLmNvbnRlbnQpO1xuXG4gICAgdGhpcy5lbF8gPSB2aWRlb2pzLmNyZWF0ZUVsKFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIFwiaWRcIiA6IHRoaXMub3B0aW9uc18uaWRcbiAgICAgIH1cblxuICAgICk7XG5cbiAgICB0aGlzLmhlYWRlckVsXyA9IHZpZGVvanMuY3JlYXRlRWwoJ2RpdicsXG4gICAgICB7XCJjbGFzc05hbWVcIjogJ2hlYWRlcid9XG4gICAgKTtcbiAgICB0aGlzLmhlYWRlckVsXy5pbm5lckhUTUw9JzxoMj4nICsgdGhpcy5vcHRpb25zXy5uYW1lICsgJzwvaDI+JztcbiAgICB0aGlzLmVsXy5hcHBlbmRDaGlsZCh0aGlzLmhlYWRlckVsXyk7XG5cbiAgICB0aGlzLmNvbnRlbnRFbF8gPSB2aWRlb2pzLmNyZWF0ZUVsKCdkaXYnLCB7XCJjbGFzc05hbWVcIjogJ21haW4nfSk7XG4gICAgdGhpcy5jb250ZW50RWxfLmlubmVySFRNTCA9IHRoaXMub3B0aW9uc18uY29udGVudDtcbiAgICB0aGlzLmVsXy5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnRFbF8pO1xuXG4gICAgdGhpcy5mb290ZXJFbF8gPSB2aWRlb2pzLmNyZWF0ZUVsKCdkaXYnLCB7XCJjbGFzc05hbWVcIiA6ICdmb290ZXInfSk7XG4gICAgdGhpcy5lbF8uYXBwZW5kQ2hpbGQodGhpcy5mb290ZXJFbF8pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29udGVudCh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmNvbnRlbnRFbF8uaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRFbF8uaW5uZXJIVE1MO1xuICB9XG5cblxufVxuXG52aWRlb2pzLkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnUGxheWxpc3RDb250YWluZXInLCBQbGF5bGlzdENvbnRhaW5lcik7XG5leHBvcnQgZGVmYXVsdCBQbGF5bGlzdENvbnRhaW5lcjtcbiIsImltcG9ydCBQbGF5bGlzdENvbnRhaW5lciBmcm9tICcuL2pzL3BsYXlsaXN0Q29udGFpbmVyLmpzJztcbmltcG9ydCB7XG4gICAgSURzXG59IGZyb20gJy4vanMvY29tcG9uZW50SURzLmpzJztcblxuLy8gRGVmYXVsdCBvcHRpb25zIGZvciB0aGUgcGx1Z2luLlxuY29uc3QgZGVmYXVsdHMgPSB7fTtcblxuLy8gbXkgZGVidWdnZXIgbGV0c1xubGV0IF9vcHRpb25zLFxuICAgIHBsYXllcixcbiAgICBhZFNldHRpbmdzLFxuICAgIGxhc3RFdmVudCA9IFwiXCIsXG4gICAgY3VycmVudEV2ZW50ID0gXCJcIixcbiAgICBNb2RhbCxcbiAgICBwbGF5bGlzdE1vZGFsLFxuICAgIGNoaWxkLFxuICAgIHBsYXlsaXN0VGl0bGUsXG4gICAgZGF0YSxcbiAgICBpZCxcbiAgICBjaGlsZFN0cmluZyxcbiAgICBhbGxQbGF5ZXJFdmVudHNKU09OLFxuICAgIGFsbFBsYXllckV2ZW50cyA9IFtdLFxuICAgIGN1cnJlbnREdXJhdGlvbixcbiAgICBjdXJyZW50U291cmNlLFxuICAgIGN1cnJlbnRNZWRpYSxcbiAgICBsb2dUeXBlcyA9IHtcbiAgICAgICAgYXJyYXk6ICdhcnJheScsXG4gICAgICAgIHRhYmxlOiAndGFibGUnLFxuICAgICAgICBsaXN0OiAnbGlzdCcsXG4gICAgICAgIGpzb246ICdqc29uJ1xuICAgIH07XG5cbi8vIEFycmF5IG9mIGV2ZW50cyBJIGNhbWUgdXAgd2l0aCBieSB3YXRjaGluZyBkZWJ1Z2dlciB3aW5kb3cgYW5kIHVzaW5nIGRvY3VtZW50YXRpb25cbmxldCBwbGF5ZXJFdmVudHMgPSBbXG4gICAgJ3JlYWR5JywgLy8gdmlkb2pzX2NvbXBvbmVudFxuICAgICdkdXJhdGlvbmNoYW5nZScsIC8vIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZiwgdmlkZW9qc19jb250cmliX2hsc1xuICAgICdlbmRlZCcsIC8vIHZpZGVvanNfY29udHJpYl9hZHMsIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZiwgdmlkZW9qc19xb3NcbiAgICAnZXJyb3InLCAvLyB2aWRlb2pzX3BsYXllclxuICAgICdmaXJzdHBsYXknLCAvLyB2aWRlb2pzX3BsYXllclxuICAgICdmdWxsc2NyZWVuY2hhbmdlJywgLy8gdmlkZW9qc19xb3MsIHZpZGVvanNfcGxheWVyXG4gICAgJ2xvYWRlZGFsbGRhdGEnLFxuICAgICdsb2FkZWRkYXRhJywgLy8gdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ2xvYWRlZG1ldGFkYXRhJywgLy8gdmlkZW9qc19xb3MsIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX2NvbnRyaWJfaGxzLCB2aWRlb2pzX3N3ZlxuICAgICdsb2Fkc3RhcnQnLCAvLyB2aWRlb2pzX3FvcywgdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ3BhdXNlJywgLy8gdmlkZW9qc19xb3MsIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICdwbGF5JywgLy8gdmlkZW9qc19xb3MsIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICdwbGF5ZXJfbG9hZCcsIC8vIHZpZGVvanNfYmNfYW5hbHl0aWNzXG4gICAgJ2NvbnRlbnR1cGRhdGUnLCAvLyB2aWRlb2pzX2NvbnRyaWJfYWRzXG4gICAgJ3NlZWtpbmcnLCAvLyB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAnc2Vla2VkJywgLy8gdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ3Byb2dyZXNzJywgLy8gdmlkZW9qc19jb250cmliX2hscywgdmlkZW9qc19wbGF5ZXIgKHZpZGVvanNfc3dmPylcbiAgICAnY2F0YWxvZ19yZXF1ZXN0JywgLy8gdmlkZW9qc19jYXRhbG9nXG4gICAgJ2NhdGFsb2dfcmVzcG9uc2UnLCAvLyB2aWRlb2pzX2NhdGFsb2dcbiAgICAncGxheWluZycsIC8vIHZpZGVvanNfcW9zLCB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAnd2FpdGluZycsIC8vIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICd2aWRlb192aWV3JywgLy8gdmlkZW9qc19iY19hbmFseXRpY3NcbiAgICAndmlkZW9faW1wcmVzc2lvbicsIC8vIHZpZGVvanNfYmNfYW5hbHl0aWNzXG4gICAgJ3ZpZGVvX2VuZ2FnZW1lbnQnLCAvLyB2aWRlb2pzX2JjX2FuYWx5dGljc1xuICAgICdwbGF5X3JlcXVlc3QnLCAvLyB2aWRlb2pzX2JjX2FuYWx5dGljc1xuICAgICdjYW5wbGF5JywgLy8gdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ2NhbnBsYXl0aHJvdWdoJywgLy8gdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ3RpbWV1cGRhdGUnXG5dO1xuXG5sZXQgZ2V0UGxheWVyRXZlbnRzID0gKCkgPT4ge1xuICAgIGFsbFBsYXllckV2ZW50c0pTT04gPSB2aWRlb2pzLmdldERhdGEocGxheWVyLmVsXykuaGFuZGxlcnM7XG5cblxuICAgIGZvciAocHJvcCBpbiBhbGxQbGF5ZXJFdmVudHNKU09OKSB7XG4gICAgICAgIGFsbFBsYXllckV2ZW50cy5wdXNoKHByb3ApO1xuICAgIH1cblxuICAgIGFsbFBsYXllckV2ZW50cy5zb3J0KCk7XG5cbiAgICBmb3IgKGkgPSAxOyBpIDwgYWxsUGxheWVyRXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFBsYXllckV2ZW50c1tpXSk7XG4gICAgfVxufTtcblxubGV0IGxpc3RlbkZvclBsYXllckV2ZW50cyA9IChwbGF5ZXIpID0+IHtcblxuICAgIHBsYXllci5vbmUoJ2R1cmF0aW9uY2hhbmdlJywgZnVuY3Rpb24oZSkge30pO1xuXG4gICAgbGV0IHBsYXlDb3VudGVyID0gMDtcbiAgICBsZXQgbXNnU3RyLCBjdXJyZW50VGltZSwgcHJldmlvdXNUaW1lLCBsZXZlbFN0ciA9ICdkZWJ1Zyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJFdmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGxheWVyLm9uKHBsYXllckV2ZW50c1tpXSwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpcnN0cGxheSc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BsYXknOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsb2FkZWRtZXRhZGF0YSc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BhdXNlJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncHJvZ3Jlc3MnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjb250ZW50dXBkYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2Vla2luZyc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NhbnBsYXl0aHJvdWdoJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAndGltZXVwZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NlZWtlZCc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NhdGFsb2dfcmVzcG9uc2UnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdkdXJhdGlvbmNoYW5nZSc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIG1zZ1N0ciA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbFN0ciA9ICdkZWJ1Zyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbnZhciBwbGF5bGlzdE1vZGFsQnV0dG9uID0gdmlkZW9qcy5leHRlbmQodmlkZW9qcy5CdXR0b24sIHtcbiAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24ocGxheWVyLCBvcHRpb25zKSB7XG5cbiAgICAgICAgdmlkZW9qcy5CdXR0b24uY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cbiAgICAgICAgcGxheWVyLm9uKCdsb2Fkc3RhcnQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKF9vcHRpb25zKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBCaW5kIGNsaWNrIGV2ZW50IGZvciBkZXNrdG9wIGJyb3dzZXJzXG4gICAgICAgIHRoaXMub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7fSk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUVsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHZpZGVvanMuQnV0dG9uLnByb3RvdHlwZS5jcmVhdGVFbC5jYWxsKHRoaXMsICdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICd2anMtcGxheWxpc3QtYnV0dG9uIHZqcy1tZW51LWJ1dHRvbiB2anMtbWVudS1idXR0b24tcG9wdXAgdmpzLWNvbnRyb2wgdmpzLWJ1dHRvbicsXG4gICAgICAgICAgICBpbm5lckhUTUw6ICc8ZGl2IGNsYXNzPVwidmpzLW1lbnUgcGxheWxpc3RNb2RhbCB2anMtaWNvbnMtY2hhcHRlcnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+PHVsIGNsYXNzPVwidmpzLXBsYXlsaXN0LW1lbnUgdmpzLW1lbnUtY29udGVudFwicm9sZT1cIm1lbnVcIj48L3VsPjwvZGl2PjxzcGFuIGNsYXNzPVwidmpzLWNvbnRyb2wtdGV4dFwiPlBsYXlsaXN0PC9zcGFuPjwvZGl2PidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgJ2FyaWEtbGl2ZSc6ICdwb2xpdGUnLFxuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gZmluZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIHZhciBmb3VuZEVsZW1lbnQgPSBudWxsLFxuICAgICAgICBmb3VuZDtcblxuICAgIGZ1bmN0aW9uIHJlY3Vyc2UoZWxlbWVudCwgY2xhc3NOYW1lLCBmb3VuZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggJiYgIWZvdW5kOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBlbCA9IGVsZW1lbnQuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgIHZhciBjbGFzc2VzID0gZWwuY2xhc3NOYW1lICE9IHVuZGVmaW5lZCA/IGVsLmNsYXNzTmFtZS5zcGxpdChcIiBcIikgOiBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBqbCA9IGNsYXNzZXMubGVuZ3RoOyBqIDwgamw7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChjbGFzc2VzW2pdID09IGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kRWxlbWVudCA9IGVsZW1lbnQuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZvdW5kKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgcmVjdXJzZShlbGVtZW50LmNoaWxkTm9kZXNbaV0sIGNsYXNzTmFtZSwgZm91bmQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlY3Vyc2UoZWxlbWVudCwgY2xhc3NOYW1lLCBmYWxzZSk7XG4gICAgcmV0dXJuIGZvdW5kRWxlbWVudDtcbn1cblxuXG5sZXQgYnVpbGRDb250YWluZXIgPSAocGxheWVyKSA9PiB7XG4gICAgdmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudChcInBsYXlsaXN0TW9kYWxCdXR0b25cIiwgcGxheWxpc3RNb2RhbEJ1dHRvbik7XG5cbiAgICB2YXIgYnV0dG9uSW5kZXggPSBwbGF5ZXIuY29udHJvbEJhci5jaGlsZHJlbigpLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICAgIHJldHVybiBjLm5hbWUoKTtcbiAgICB9KS5pbmRleE9mKCdGdWxsc2NyZWVuVG9nZ2xlJykgLSAxO1xuICAgIHBsYXllci5jb250cm9sQmFyLnBsYXlsaXN0QnV0dG9uID0gcGxheWVyLmNvbnRyb2xCYXIuYWRkQ2hpbGQoJ3BsYXlsaXN0TW9kYWxCdXR0b24nLCBudWxsLCBidXR0b25JbmRleCk7XG4gICAgcGxheWVyLmNvbnRyb2xCYXIucGxheWxpc3RCdXR0b24uZWwoKS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG5cbiAgICBwbGF5bGlzdE1vZGFsID0gZmluZENsYXNzKHBsYXllci5jb250cm9sQmFyLnBsYXlsaXN0QnV0dG9uLmVsXywgXCJ2anMtcGxheWxpc3QtbWVudVwiKTtcbiAgICBjb25zb2xlLmxvZyhwbGF5bGlzdE1vZGFsKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9vcHRpb25zLnBsYXlsaXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwbGF5ZXIuY2F0YWxvZy5nZXRQbGF5bGlzdChfb3B0aW9ucy5wbGF5bGlzdHNbaV0uaWQsIGZ1bmN0aW9uKGVycm9yLCBwbGF5bGlzdCkge1xuICAgICAgICAgICAgcGxheWVyLmNhdGFsb2cubG9hZChwbGF5bGlzdCk7XG4gICAgICAgICAgICBkYXRhID0gcGxheWVyLmNhdGFsb2cuZGF0YTtcbiAgICAgICAgICAgIGNoaWxkU3RyaW5nID0gXCI8bGkgY2xhc3M9J3Zqcy1wbGF5bGlzdC10aXRsZSB2anMtbWVudS1pdGVtJyBpZD0nXCIgKyBkYXRhLmlkICsgXCInPlwiICsgZGF0YS5uYW1lICsgXCI8L2xpPjx1bD48L3VsPlwiO1xuICAgICAgICAgICAgcGxheWxpc3RNb2RhbC5pbm5lckhUTUwgKz0gY2hpbGRTdHJpbmc7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBsYXlsaXN0TW9kYWwuY2hpbGROb2Rlcy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgcGxheWxpc3RNb2RhbC5jaGlsZE5vZGVzW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5jYXRhbG9nLmdldFBsYXlsaXN0KGV2dC5jdXJyZW50VGFyZ2V0LmlkLCBmdW5jdGlvbihlcnJvciwgcGxheWxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5jYXRhbG9nLmxvYWQocGxheWxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciB6PTA7IHo8IHBsYXlsaXN0Lmxlbmd0aDt6Kyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkU3RyaW5nID0gXCI8bGkgY2xhc3M9J3Zqcy12aWRlby10aXRsZSB2anMtbWVudS1pdGVtJyBpZD0nXCIgKyBwbGF5bGlzdFt6XS5pZCArIFwiJz5cIiArIHBsYXlsaXN0W3pdLm5hbWUgKyBcIjwvbGk+XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnRhcmdldC5pbm5lckhUTUwgKz0gY2hpbGRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn07XG5cblxubGV0IHNldE9wdGlvbnMgPSAob3B0KSA9PiB7XG4gICAgX29wdGlvbnMgPSBvcHQ7XG4gICAgaWYgKF9vcHRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX29wdGlvbnMucGxheWxpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfb3B0aW9ucy5wbGF5bGlzdHNbaV0uaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5cbi8qKlxuICogRnVuY3Rpb24gdG8gaW52b2tlIHdoZW4gdGhlIHBsYXllciBpcyByZWFkeS5cbiAqXG4gKiBUaGlzIGlzIGEgZ3JlYXQgcGxhY2UgZm9yIHlvdXIgcGx1Z2luIHRvIGluaXRpYWxpemUgaXRzZWxmLiBXaGVuIHRoaXNcbiAqIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlIHBsYXllciB3aWxsIGhhdmUgaXRzIERPTSBhbmQgY2hpbGQgY29tcG9uZW50c1xuICogaW4gcGxhY2UuXG4gKlxuICogQGZ1bmN0aW9uIG9uUGxheWVyUmVhZHlcbiAqIEBwYXJhbSAgICB7UGxheWVyfSBwbGF5ZXJcbiAqIEBwYXJhbSAgICB7T2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqL1xuY29uc3Qgb25QbGF5ZXJSZWFkeSA9IChiY3BsYXllciwgb3B0aW9ucykgPT4ge1xuXG4gICAgY29uc29sZS5sb2coJ0JyaWdodGNvdmUgUGxheWVyIG11bHRpUGxheWxpc3QgbG9hZGVkJyk7XG5cbiAgICAvL2V2ZW50cyA9IGJjcGxheWVyLmRlYnVnZ2VyV2luZG93LmdldEV2ZW50cztcblxuICAgIC8vYmNwbGF5ZXIuYWRkQ2xhc3MoJ3Zqcy1wbGF5ZXItZGVidWdnZXInKTtcblxuICAgIGxldCBmb250YXdlc29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBmb250YXdlc29tZS5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgZm9udGF3ZXNvbWUuaHJlZiA9IFwiLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4wLjMvY3NzL2ZvbnQtYXdlc29tZS5jc3NcIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvbnRhd2Vzb21lKTtcblxuICAgIHNldE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICBidWlsZENvbnRhaW5lcihiY3BsYXllcik7XG5cbiAgICBsaXN0ZW5Gb3JQbGF5ZXJFdmVudHMoYmNwbGF5ZXIpO1xufTtcbi8qKlxuICogQSBCcmlnaHRjb3ZlIHZpZGVvLmpzIHBsdWdpbi5cbiAqXG4gKiBJbiB0aGUgcGx1Z2luIGZ1bmN0aW9uLCB0aGUgdmFsdWUgb2YgYHRoaXNgIGlzIGEgdmlkZW8uanMgYFBsYXllcmBcbiAqIGluc3RhbmNlLiBZb3UgY2Fubm90IHJlbHkgb24gdGhlIHBsYXllciBiZWluZyBpbiBhIFwicmVhZHlcIiBzdGF0ZSBoZXJlLFxuICogZGVwZW5kaW5nIG9uIGhvdyB0aGUgcGx1Z2luIGlzIGludm9rZWQuIFRoaXMgbWF5IG9yIG1heSBub3QgYmUgaW1wb3J0YW50XG4gKiB0byB5b3U7IGlmIG5vdCwgcmVtb3ZlIHRoZSB3YWl0IGZvciBcInJlYWR5XCIhXG4gKlxuICogQGZ1bmN0aW9uIHBsYXllckRlYnVnZ2VyXG4gKiBAcGFyYW0gICAge09iamVjdH0gW29wdGlvbnM9e31dXG4gKiAgICAgICAgICAgQW4gb2JqZWN0IG9mIG9wdGlvbnMgbGVmdCB0byB0aGUgcGx1Z2luIGF1dGhvciB0byBkZWZpbmUuXG4gKi9cbmNvbnN0IG11bHRpUGxheWxpc3QgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdGhpcy5yZWFkeSgoKSA9PiB7XG5cbiAgICAgICAgX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBvblBsYXllclJlYWR5KHRoaXMsIHZpZGVvanMubWVyZ2VPcHRpb25zKGRlZmF1bHRzLCBfb3B0aW9ucykpO1xuICAgIH0pO1xufTtcblxuLy8gUmVnaXN0ZXIgdGhlIHBsdWdpbiB3aXRoIHZpZGVvLmpzLlxudmlkZW9qcy5wbHVnaW4oJ211bHRpUGxheWxpc3QnLCBtdWx0aVBsYXlsaXN0KTtcblxuLy8gSW5jbHVkZSB0aGUgdmVyc2lvbiBudW1iZXIuXG5tdWx0aVBsYXlsaXN0LlZFUlNJT04gPSAnX19WRVJTSU9OX18nO1xuXG5leHBvcnQgZGVmYXVsdCBtdWx0aVBsYXlsaXN0O1xuIiwiaW1wb3J0IGRvY3VtZW50IGZyb20gJ2dsb2JhbC9kb2N1bWVudCc7XG5cbmltcG9ydCBRVW5pdCBmcm9tICdxdW5pdCc7XG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xuaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4uL3NyYy9wbHVnaW4nO1xuXG5jb25zdCBQbGF5ZXIgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnUGxheWVyJyk7XG5cblFVbml0LnRlc3QoJ3RoZSBlbnZpcm9ubWVudCBpcyBzYW5lJywgZnVuY3Rpb24oYXNzZXJ0KSB7XG4gIGFzc2VydC5zdHJpY3RFcXVhbCh0eXBlb2YgQXJyYXkuaXNBcnJheSwgJ2Z1bmN0aW9uJywgJ2VzNSBleGlzdHMnKTtcbiAgYXNzZXJ0LnN0cmljdEVxdWFsKHR5cGVvZiBzaW5vbiwgJ29iamVjdCcsICdzaW5vbiBleGlzdHMnKTtcbiAgYXNzZXJ0LnN0cmljdEVxdWFsKHR5cGVvZiB2aWRlb2pzLCAnZnVuY3Rpb24nLCAndmlkZW9qcyBleGlzdHMnKTtcbiAgYXNzZXJ0LnN0cmljdEVxdWFsKHR5cGVvZiBwbHVnaW4sICdmdW5jdGlvbicsICdwbHVnaW4gaXMgYSBmdW5jdGlvbicpO1xufSk7XG5cblFVbml0Lm1vZHVsZSgndmlkZW9qcy1wbGF5ZXItZGVidWdnZXInLCB7XG5cbiAgYmVmb3JlRWFjaCgpIHtcblxuICAgIC8vIE1vY2sgdGhlIGVudmlyb25tZW50J3MgdGltZXJzIGJlY2F1c2UgY2VydGFpbiB0aGluZ3MgLSBwYXJ0aWN1bGFybHlcbiAgICAvLyBwbGF5ZXIgcmVhZGluZXNzIC0gYXJlIGFzeW5jaHJvbm91cyBpbiB2aWRlby5qcyA1LiBUaGlzIE1VU1QgY29tZVxuICAgIC8vIGJlZm9yZSBhbnkgcGxheWVyIGlzIGNyZWF0ZWQ7IG90aGVyd2lzZSwgdGltZXJzIGNvdWxkIGdldCBjcmVhdGVkXG4gICAgLy8gd2l0aCB0aGUgYWN0dWFsIHRpbWVyIG1ldGhvZHMhXG4gICAgdGhpcy5jbG9jayA9IHNpbm9uLnVzZUZha2VUaW1lcnMoKTtcblxuICAgIHRoaXMuZml4dHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdW5pdC1maXh0dXJlJyk7XG4gICAgdGhpcy52aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgdGhpcy5maXh0dXJlLmFwcGVuZENoaWxkKHRoaXMudmlkZW8pO1xuICAgIHRoaXMucGxheWVyID0gdmlkZW9qcyh0aGlzLnZpZGVvKTtcbiAgfSxcblxuICBhZnRlckVhY2goKSB7XG4gICAgdGhpcy5wbGF5ZXIuZGlzcG9zZSgpO1xuICAgIHRoaXMuY2xvY2sucmVzdG9yZSgpO1xuICB9XG59KTtcblxuUVVuaXQudGVzdCgncmVnaXN0ZXJzIGl0c2VsZiB3aXRoIHZpZGVvLmpzJywgZnVuY3Rpb24oYXNzZXJ0KSB7XG4gIGFzc2VydC5leHBlY3QoMik7XG5cbiAgYXNzZXJ0LnN0cmljdEVxdWFsKFxuICAgIFBsYXllci5wcm90b3R5cGUucGxheWVyRGVidWdnZXIsXG4gICAgcGx1Z2luLFxuICAgICd2aWRlb2pzLXBsYXllci1kZWJ1Z2dlciBwbHVnaW4gd2FzIHJlZ2lzdGVyZWQnXG4gICk7XG5cbiAgdGhpcy5wbGF5ZXIucGxheWVyRGVidWdnZXIoKTtcblxuICAvLyBUaWNrIHRoZSBjbG9jayBmb3J3YXJkIGVub3VnaCB0byB0cmlnZ2VyIHRoZSBwbGF5ZXIgdG8gYmUgXCJyZWFkeVwiLlxuICB0aGlzLmNsb2NrLnRpY2soMSk7XG5cbiAgYXNzZXJ0Lm9rKFxuICAgIHRoaXMucGxheWVyLmhhc0NsYXNzKCd2anMtcGxheWVyLWRlYnVnZ2VyJyksXG4gICAgJ3RoZSBwbHVnaW4gYWRkcyBhIGNsYXNzIHRvIHRoZSBwbGF5ZXInXG4gICk7XG59KTtcbiJdfQ==
