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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1yZXNvbHZlL2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2dsb2JhbC9kb2N1bWVudC5qcyIsIi9Vc2Vycy9rcmV5bm9sZHMvUmVwb3MvYnJpZ2h0Y292ZS1tdWx0aS1wbGF5bGlzdC9zcmMvanMvY29tcG9uZW50SURzLmpzIiwiL1VzZXJzL2tyZXlub2xkcy9SZXBvcy9icmlnaHRjb3ZlLW11bHRpLXBsYXlsaXN0L3NyYy9qcy9wbGF5bGlzdENvbnRhaW5lci5qcyIsIi9Vc2Vycy9rcmV5bm9sZHMvUmVwb3MvYnJpZ2h0Y292ZS1tdWx0aS1wbGF5bGlzdC9zcmMvcGx1Z2luLmpzIiwiL1VzZXJzL2tyZXlub2xkcy9SZXBvcy9icmlnaHRjb3ZlLW11bHRpLXBsYXlsaXN0L3Rlc3QvcGx1Z2luLnRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2ZPLElBQUksR0FBRyxHQUFHO0FBQ2IsZUFBVyxFQUFFLGFBQWE7QUFDMUIsV0FBTyxFQUFFLFdBQVc7QUFDcEIsWUFBUSxFQUFFLFlBQVk7O0FBRXRCLGFBQVMsRUFBRSxXQUFXO0FBQ3RCLFNBQUssRUFBRSxPQUFPO0FBQ2QsYUFBUyxFQUFFLFdBQVc7QUFDdEIsT0FBRyxFQUFFLGFBQWE7QUFDbEIsZ0JBQVksRUFBRSxjQUFjO0FBQzVCLG1CQUFlLEVBQUUsaUJBQWlCO0FBQ2xDLDJCQUF1QixFQUFFLHlCQUF5QjtBQUNsRCx1QkFBbUIsRUFBRSxxQkFBcUI7QUFDMUMseUJBQXFCLEVBQUUsdUJBQXVCO0FBQzlDLDZCQUF5QixFQUFFLDJCQUEyQjtBQUN0RCxlQUFXLEVBQUUsYUFBYTtBQUMxQixrQkFBYyxFQUFFLGdCQUFnQjtBQUNoQyxnQkFBWSxFQUFFLGNBQWM7QUFDNUIsb0JBQWdCLEVBQUUsa0JBQWtCO0FBQ3BDLHNCQUFrQixFQUFFLG9CQUFvQjs7O0FBR3hDLFlBQVEsRUFBRSxVQUFVO0FBQ3BCLFdBQU8sRUFBRSxTQUFTO0FBQ2xCLFdBQU8sRUFBRSxTQUFTO0FBQ2xCLGlCQUFhLEVBQUUsZUFBZTtBQUM5QixjQUFVLEVBQUUsWUFBWTtDQUMzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJDeEJtQixVQUFVOzs7Ozs7Ozs7Ozs7SUFTekIsaUJBQWlCO1lBQWpCLGlCQUFpQjs7QUFFVixXQUZQLGlCQUFpQixDQUVULE1BQU0sRUFBRSxPQUFPLEVBQUU7MEJBRnpCLGlCQUFpQjs7QUFJbkIsK0JBSkUsaUJBQWlCLDZDQUliLE1BQU0sRUFBQyxPQUFPLEVBQUU7Ozs7QUFJdEIsUUFBSSxDQUFDLEdBQUcsR0FBRyxxQkFBUSxRQUFRLENBQUMsS0FBSyxFQUMvQjtBQUNFLFVBQUksRUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7S0FDeEIsQ0FFRixDQUFDOztBQUVGLFFBQUksQ0FBQyxTQUFTLEdBQUcscUJBQVEsUUFBUSxDQUFDLEtBQUssRUFDckMsRUFBQyxXQUFXLEVBQUUsUUFBUSxFQUFDLENBQ3hCLENBQUM7QUFDRixRQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQy9ELFFBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7QUFFckMsUUFBSSxDQUFDLFVBQVUsR0FBRyxxQkFBUSxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUMsV0FBVyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7QUFDakUsUUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7QUFDbEQsUUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUV0QyxRQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFRLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBQyxXQUFXLEVBQUcsUUFBUSxFQUFDLENBQUMsQ0FBQztBQUNuRSxRQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDckMsV0FBTyxJQUFJLENBQUM7R0FDYjs7ZUE1QkcsaUJBQWlCOztXQThCZCxpQkFBQyxLQUFLLEVBQUU7QUFDYixVQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTtBQUNoQyxZQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7T0FDbkM7QUFDRCxhQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0tBQ2xDOzs7U0FuQ0csaUJBQWlCO0dBQVMscUJBQVEsU0FBUzs7QUF3Q2pELHFCQUFRLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO3FCQUM3RCxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7O3FDQ3JERiwyQkFBMkI7Ozs7Z0NBR2xELHNCQUFzQjs7O0FBRzdCLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQzs7O0FBR3BCLElBQUksUUFBUSxZQUFBO0lBQ1IsTUFBTSxZQUFBO0lBQ04sVUFBVSxZQUFBO0lBQ1YsU0FBUyxHQUFHLEVBQUU7SUFDZCxZQUFZLEdBQUcsRUFBRTtJQUNqQixLQUFLLFlBQUE7SUFDTCxhQUFhLFlBQUE7SUFDYixLQUFLLFlBQUE7SUFDTCxhQUFhLFlBQUE7SUFDYixJQUFJLFlBQUE7SUFDSixFQUFFLFlBQUE7SUFDRixXQUFXLFlBQUE7SUFDWCxtQkFBbUIsWUFBQTtJQUNuQixlQUFlLEdBQUcsRUFBRTtJQUNwQixlQUFlLFlBQUE7SUFDZixhQUFhLFlBQUE7SUFDYixZQUFZLFlBQUE7SUFDWixRQUFRLEdBQUc7QUFDUCxTQUFLLEVBQUUsT0FBTztBQUNkLFNBQUssRUFBRSxPQUFPO0FBQ2QsUUFBSSxFQUFFLE1BQU07QUFDWixRQUFJLEVBQUUsTUFBTTtDQUNmLENBQUM7OztBQUdOLElBQUksWUFBWSxHQUFHLENBQ2YsT0FBTztBQUNQLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1AsT0FBTztBQUNQLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEIsZUFBZSxFQUNmLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsV0FBVztBQUNYLE9BQU87QUFDUCxNQUFNO0FBQ04sYUFBYTtBQUNiLGVBQWU7QUFDZixTQUFTO0FBQ1QsUUFBUTtBQUNSLFVBQVU7QUFDVixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCxTQUFTO0FBQ1QsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsY0FBYztBQUNkLFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWSxDQUNmLENBQUM7O0FBRUYsSUFBSSxlQUFlLEdBQUcsU0FBbEIsZUFBZSxHQUFTO0FBQ3hCLHVCQUFtQixHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQzs7QUFHM0QsU0FBSyxJQUFJLElBQUksbUJBQW1CLEVBQUU7QUFDOUIsdUJBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7O0FBRUQsbUJBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7QUFFdkIsU0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3pDLGVBQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkM7Q0FDSixDQUFDOztBQUVGLElBQUkscUJBQXFCLEdBQUcsU0FBeEIscUJBQXFCLENBQUksTUFBTSxFQUFLOztBQUVwQyxVQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFVBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUU3QyxRQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFDcEIsUUFBSSxNQUFNLFlBQUE7UUFBRSxXQUFXLFlBQUE7UUFBRSxZQUFZLFlBQUE7UUFBRSxRQUFRLEdBQUcsT0FBTyxDQUFDO0FBQzFELFNBQUssSUFBSSxFQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUMsRUFBRSxFQUFFO0FBQzFDLGNBQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUMsQ0FBQyxFQUFFLFVBQVMsQ0FBQyxFQUFFO0FBQ25DLG9CQUFRLENBQUMsQ0FBQyxJQUFJO0FBQ1YscUJBQUssT0FBTztBQUNSLDBCQUFNO0FBQUEsQUFDVixxQkFBSyxXQUFXO0FBQ1osMEJBQU07QUFBQSxBQUNWLHFCQUFLLE1BQU07QUFDUCwwQkFBTTtBQUFBLEFBQ1YscUJBQUssZ0JBQWdCO0FBQ2pCLDBCQUFNO0FBQUEsQUFDVixxQkFBSyxPQUFPO0FBQ1IsMEJBQU07QUFBQSxBQUNWLHFCQUFLLFVBQVU7QUFDWCwwQkFBTTtBQUFBLEFBQ1YscUJBQUssZUFBZTtBQUNoQiwwQkFBTTtBQUFBLEFBQ1YscUJBQUssU0FBUztBQUNWLDBCQUFNO0FBQUEsQUFDVixxQkFBSyxnQkFBZ0I7QUFDakIsMEJBQU07QUFBQSxBQUNWLHFCQUFLLFlBQVk7QUFDYiwwQkFBTTtBQUFBLEFBQ1YscUJBQUssUUFBUTtBQUNULDBCQUFNO0FBQUEsQUFDVixxQkFBSyxrQkFBa0I7QUFDbkIsMEJBQU07QUFBQSxBQUNWLHFCQUFLLGdCQUFnQjtBQUNqQiwwQkFBTTtBQUFBLEFBQ1Y7QUFDSSwwQkFBTSxHQUFHLEVBQUUsQ0FBQztBQUNaLDRCQUFRLEdBQUcsT0FBTyxDQUFDO0FBQUEsYUFDMUI7U0FDSixDQUFDLENBQUM7S0FDTjtDQUNKLENBQUM7O0FBRUYsSUFBSSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDckQsZUFBVyxFQUFFLHFCQUFTLE1BQU0sRUFBRSxPQUFPLEVBQUU7O0FBRW5DLGVBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7O0FBRzNDLGNBQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVc7QUFDOUIsbUJBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FFekIsQ0FBQyxDQUFDOzs7QUFHSCxZQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFXLEVBQUUsQ0FBQyxDQUFDO0tBQ25DOztBQUVELFlBQVEsRUFBRSxvQkFBVztBQUNqQixlQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUN2RCxxQkFBUyxFQUFFLGtGQUFrRjtBQUM3RixxQkFBUyxFQUFFLHNNQUFzTTtTQUNwTixFQUFFO0FBQ0MsdUJBQVcsRUFBRSxRQUFRO1NBQ3hCLENBQUMsQ0FBQztLQUNOO0NBQ0osQ0FBQyxDQUFDOztBQUVILFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUU7QUFDbkMsUUFBSSxZQUFZLEdBQUcsSUFBSTtRQUNuQixLQUFLLENBQUM7O0FBRVYsYUFBUyxPQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUU7QUFDeEMsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzFELGdCQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9CLGdCQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsU0FBUyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDdkUsaUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDOUMsb0JBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsRUFBRTtBQUN6Qix5QkFBSyxHQUFHLElBQUksQ0FBQztBQUNiLGdDQUFZLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQywwQkFBTTtpQkFDVDthQUNKO0FBQ0QsZ0JBQUksS0FBSyxFQUNMLE1BQU07QUFDVixtQkFBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3BEO0tBQ0o7QUFDRCxXQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNuQyxXQUFPLFlBQVksQ0FBQztDQUN2Qjs7QUFHRCxJQUFJLGNBQWMsR0FBRyxTQUFqQixjQUFjLENBQUksTUFBTSxFQUFLO0FBQzdCLFdBQU8sQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDOztBQUV0RSxRQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFTLENBQUMsRUFBRTtBQUMzRCxlQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNuQixDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLFVBQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztBQUN4RyxVQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDOztBQUVsRSxpQkFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztBQUNyRixXQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNCLFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxjQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxVQUFTLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDM0Usa0JBQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlCLGdCQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7QUFDM0IsdUJBQVcsR0FBRyxtREFBbUQsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDO0FBQ2xILHlCQUFhLENBQUMsU0FBUyxJQUFJLFdBQVcsQ0FBQztBQUN2QyxpQkFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztBQUV0RCw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBUyxHQUFHLEVBQUU7QUFDaEUsMEJBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLFVBQVMsS0FBSyxFQUFFLFFBQVEsRUFBRTtBQUN2RSw4QkFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUIsOEJBQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9CLDhCQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7O3FCQUtqQixDQUFDLENBQUM7aUJBQ04sQ0FBQyxDQUFDO2FBQ04sQ0FBQztTQUNMLENBQUMsQ0FBQztLQUNOLENBQUM7Q0FDTCxDQUFDOztBQUdGLElBQUksVUFBVSxHQUFHLFNBQWIsVUFBVSxDQUFJLEdBQUcsRUFBSztBQUN0QixZQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ2YsUUFBSSxRQUFRLEVBQUU7QUFDVixhQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDaEQsbUJBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6QztLQUNKO0NBRUosQ0FBQzs7Ozs7Ozs7Ozs7OztBQWNGLElBQU0sYUFBYSxHQUFHLFNBQWhCLGFBQWEsQ0FBSSxRQUFRLEVBQUUsT0FBTyxFQUFLOztBQUV6QyxXQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7Ozs7OztBQU10RCxRQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pELGVBQVcsQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDO0FBQy9CLGVBQVcsQ0FBQyxJQUFJLEdBQUcsbUVBQW1FLENBQUM7QUFDdkYsWUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBRXZDLGNBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFcEIsa0JBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFekIseUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7Q0FDbkMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFGLElBQU0sYUFBYSxHQUFHLFNBQWhCLGFBQWEsQ0FBWSxPQUFPLEVBQUU7OztBQUNwQyxRQUFJLENBQUMsS0FBSyxDQUFDLFlBQU07O0FBRWIsZ0JBQVEsR0FBRyxPQUFPLENBQUM7QUFDbkIscUJBQWEsUUFBTyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQ2pFLENBQUMsQ0FBQztDQUNOLENBQUM7OztBQUdGLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDOzs7QUFHL0MsYUFBYSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7O3FCQUV2QixhQUFhOzs7Ozs7Ozs7OEJDcFJQLGlCQUFpQjs7OztxQkFFcEIsT0FBTzs7OztxQkFDUCxPQUFPOzs7O3VCQUNMLFVBQVU7Ozs7eUJBRVgsZUFBZTs7OztBQUVsQyxJQUFNLE1BQU0sR0FBRyxxQkFBUSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRTlDLG1CQUFNLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxVQUFTLE1BQU0sRUFBRTtBQUNyRCxRQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDbkUsUUFBTSxDQUFDLFdBQVcsQ0FBQyx5QkFBWSxFQUFFLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUMzRCxRQUFNLENBQUMsV0FBVyxDQUFDLDJCQUFjLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDakUsUUFBTSxDQUFDLFdBQVcsQ0FBQyw2QkFBYSxFQUFFLFVBQVUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0NBQ3ZFLENBQUMsQ0FBQzs7QUFFSCxtQkFBTSxNQUFNLENBQUMseUJBQXlCLEVBQUU7O0FBRXRDLFlBQVUsRUFBQSxzQkFBRzs7Ozs7O0FBTVgsUUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBTSxhQUFhLEVBQUUsQ0FBQzs7QUFFbkMsUUFBSSxDQUFDLE9BQU8sR0FBRyw0QkFBUyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDeEQsUUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBUyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0MsUUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3JDLFFBQUksQ0FBQyxNQUFNLEdBQUcsMEJBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0dBQ25DOztBQUVELFdBQVMsRUFBQSxxQkFBRztBQUNWLFFBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdEIsUUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztHQUN0QjtDQUNGLENBQUMsQ0FBQzs7QUFFSCxtQkFBTSxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsVUFBUyxNQUFNLEVBQUU7QUFDNUQsUUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFakIsUUFBTSxDQUFDLFdBQVcsQ0FDaEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLDBCQUUvQiwrQ0FBK0MsQ0FDaEQsQ0FBQzs7QUFFRixNQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDOzs7QUFHN0IsTUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRW5CLFFBQU0sQ0FBQyxFQUFFLENBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsRUFDM0MsdUNBQXVDLENBQ3hDLENBQUM7Q0FDSCxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIiwidmFyIHRvcExldmVsID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOlxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge31cbnZhciBtaW5Eb2MgPSByZXF1aXJlKCdtaW4tZG9jdW1lbnQnKTtcblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50O1xufSBlbHNlIHtcbiAgICB2YXIgZG9jY3kgPSB0b3BMZXZlbFsnX19HTE9CQUxfRE9DVU1FTlRfQ0FDSEVANCddO1xuXG4gICAgaWYgKCFkb2NjeSkge1xuICAgICAgICBkb2NjeSA9IHRvcExldmVsWydfX0dMT0JBTF9ET0NVTUVOVF9DQUNIRUA0J10gPSBtaW5Eb2M7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkb2NjeTtcbn1cbiIsImV4cG9ydCBsZXQgSURzID0ge1xuICAgIG15QmxhY2tiaXJkOiAnbXlCbGFja2JpcmQnLFxuICAgIGZpbHRlcnM6ICdiYkZpbHRlcnMnLFxuICAgIGNvbnRyb2xzOiAnYmJDb250cm9scycsXG4gICAgLy9zaXplOiAnYmJTaXplJyxcbiAgICBzZW5kRW1haWw6ICdzZW5kRW1haWwnLFxuICAgIG1vZGFsOiAnbW9kYWwnLFxuICAgIGJ1dHRvbkJhcjogJ2J1dHRvbkJhcicsXG4gICAgbG9nOiAnbXlCbGFja2JpcmQnLFxuICAgIGJ0blRvZ2dsZUxvZzogJ2J0blRvZ2dsZUxvZycsXG4gICAgYnRuVG9nZ2xlU2xpZGVyOiAnYnRuVG9nZ2xlU2xpZGVyJyxcbiAgICBidG5Ub2dnbGVQbGF5ZXJTZXR0aW5nczogJ2J0blRvZ2dsZVBsYXllclNldHRpbmdzJyxcbiAgICBidG5Ub2dnbGVBZFNldHRpbmdzOiAnYnRuVG9nZ2xlQWRTZXR0aW5ncycsXG4gICAgYnRuVG9nZ2xlUGxheWJhY2tJbmZvOiAnYnRuVG9nZ2xlUGxheWJhY2tJbmZvJyxcbiAgICBidG5Ub2dnbGVEZWJ1Z2dlclNldHRpbmdzOiAnYnRuVG9nZ2xlRGVidWdnZXJTZXR0aW5ncycsXG4gICAgY2xhc3Nlc0xpc3Q6ICdjbGFzc2VzTGlzdCcsXG4gICAgcGxheWVyU2V0dGluZ3M6ICdwbGF5ZXJTZXR0aW5ncycsXG4gICAgcGxheWJhY2tJbmZvOiAncGxheWJhY2tJbmZvJyxcbiAgICBkZWJ1Z2dlclNldHRpbmdzOiAnZGVidWdnZXJTZXR0aW5ncycsXG4gICAgYnRuVG9nZ2xlQ2xhc3NMaXN0OiAnYnRuVG9nZ2xlQ2xhc3NMaXN0JyxcbiAgICAvL2JpZ1BsYXlCdXR0b25TdHlsZXM6ICdiaWdQbGF5QnV0dG9uU3R5bGVzJyxcbiAgICAvL3Bvc3RlclN0eWxlczogJ3Bvc3RlclN0eWxlcycsXG4gICAgbG9nVGFibGU6ICdsb2dUYWJsZScsXG4gICAgbG9nTGlzdDogJ2xvZ0xpc3QnLFxuICAgIGxvZ0pTT046ICdsb2dKU09OJyxcbiAgICBtZWRpYVNldHRpbmdzOiAnbWVkaWFTZXR0aW5ncycsXG4gICAgYWRTZXR0aW5nczogJ2FkU2V0dGluZ3MnXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBwbGF5bGlzdENvbnRhaW5lci5qc1xuICovXG4gaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1BsYXllcnxPYmplY3R9IHBsYXllclxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqIEBjbGFzcyBQbGF5bGlzdENvbnRhaW5lclxuICovXG5jbGFzcyBQbGF5bGlzdENvbnRhaW5lciBleHRlbmRzIHZpZGVvanMuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblxuICAgIHN1cGVyKHBsYXllcixvcHRpb25zKTtcblxuICAgIC8vdGhpcy5jb250ZW50KHRoaXMub3B0aW9uc18uY29udGVudCk7XG5cbiAgICB0aGlzLmVsXyA9IHZpZGVvanMuY3JlYXRlRWwoXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiIDogdGhpcy5vcHRpb25zXy5pZFxuICAgICAgfVxuXG4gICAgKTtcblxuICAgIHRoaXMuaGVhZGVyRWxfID0gdmlkZW9qcy5jcmVhdGVFbCgnZGl2JyxcbiAgICAgIHtcImNsYXNzTmFtZVwiOiAnaGVhZGVyJ31cbiAgICApO1xuICAgIHRoaXMuaGVhZGVyRWxfLmlubmVySFRNTD0nPGgyPicgKyB0aGlzLm9wdGlvbnNfLm5hbWUgKyAnPC9oMj4nO1xuICAgIHRoaXMuZWxfLmFwcGVuZENoaWxkKHRoaXMuaGVhZGVyRWxfKTtcblxuICAgIHRoaXMuY29udGVudEVsXyA9IHZpZGVvanMuY3JlYXRlRWwoJ2RpdicsIHtcImNsYXNzTmFtZVwiOiAnbWFpbid9KTtcbiAgICB0aGlzLmNvbnRlbnRFbF8uaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zXy5jb250ZW50O1xuICAgIHRoaXMuZWxfLmFwcGVuZENoaWxkKHRoaXMuY29udGVudEVsXyk7XG5cbiAgICB0aGlzLmZvb3RlckVsXyA9IHZpZGVvanMuY3JlYXRlRWwoJ2RpdicsIHtcImNsYXNzTmFtZVwiIDogJ2Zvb3Rlcid9KTtcbiAgICB0aGlzLmVsXy5hcHBlbmRDaGlsZCh0aGlzLmZvb3RlckVsXyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb250ZW50KHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuY29udGVudEVsXy5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udGVudEVsXy5pbm5lckhUTUw7XG4gIH1cblxuXG59XG5cbnZpZGVvanMuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdQbGF5bGlzdENvbnRhaW5lcicsIFBsYXlsaXN0Q29udGFpbmVyKTtcbmV4cG9ydCBkZWZhdWx0IFBsYXlsaXN0Q29udGFpbmVyO1xuIiwiaW1wb3J0IFBsYXlsaXN0Q29udGFpbmVyIGZyb20gJy4vanMvcGxheWxpc3RDb250YWluZXIuanMnO1xuaW1wb3J0IHtcbiAgICBJRHNcbn0gZnJvbSAnLi9qcy9jb21wb25lbnRJRHMuanMnO1xuXG4vLyBEZWZhdWx0IG9wdGlvbnMgZm9yIHRoZSBwbHVnaW4uXG5jb25zdCBkZWZhdWx0cyA9IHt9O1xuXG4vLyBteSBkZWJ1Z2dlciBsZXRzXG5sZXQgX29wdGlvbnMsXG4gICAgcGxheWVyLFxuICAgIGFkU2V0dGluZ3MsXG4gICAgbGFzdEV2ZW50ID0gXCJcIixcbiAgICBjdXJyZW50RXZlbnQgPSBcIlwiLFxuICAgIE1vZGFsLFxuICAgIHBsYXlsaXN0TW9kYWwsXG4gICAgY2hpbGQsXG4gICAgcGxheWxpc3RUaXRsZSxcbiAgICBkYXRhLFxuICAgIGlkLFxuICAgIGNoaWxkU3RyaW5nLFxuICAgIGFsbFBsYXllckV2ZW50c0pTT04sXG4gICAgYWxsUGxheWVyRXZlbnRzID0gW10sXG4gICAgY3VycmVudER1cmF0aW9uLFxuICAgIGN1cnJlbnRTb3VyY2UsXG4gICAgY3VycmVudE1lZGlhLFxuICAgIGxvZ1R5cGVzID0ge1xuICAgICAgICBhcnJheTogJ2FycmF5JyxcbiAgICAgICAgdGFibGU6ICd0YWJsZScsXG4gICAgICAgIGxpc3Q6ICdsaXN0JyxcbiAgICAgICAganNvbjogJ2pzb24nXG4gICAgfTtcblxuLy8gQXJyYXkgb2YgZXZlbnRzIEkgY2FtZSB1cCB3aXRoIGJ5IHdhdGNoaW5nIGRlYnVnZ2VyIHdpbmRvdyBhbmQgdXNpbmcgZG9jdW1lbnRhdGlvblxubGV0IHBsYXllckV2ZW50cyA9IFtcbiAgICAncmVhZHknLCAvLyB2aWRvanNfY29tcG9uZW50XG4gICAgJ2R1cmF0aW9uY2hhbmdlJywgLy8gdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmLCB2aWRlb2pzX2NvbnRyaWJfaGxzXG4gICAgJ2VuZGVkJywgLy8gdmlkZW9qc19jb250cmliX2FkcywgdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmLCB2aWRlb2pzX3Fvc1xuICAgICdlcnJvcicsIC8vIHZpZGVvanNfcGxheWVyXG4gICAgJ2ZpcnN0cGxheScsIC8vIHZpZGVvanNfcGxheWVyXG4gICAgJ2Z1bGxzY3JlZW5jaGFuZ2UnLCAvLyB2aWRlb2pzX3FvcywgdmlkZW9qc19wbGF5ZXJcbiAgICAnbG9hZGVkYWxsZGF0YScsXG4gICAgJ2xvYWRlZGRhdGEnLCAvLyB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAnbG9hZGVkbWV0YWRhdGEnLCAvLyB2aWRlb2pzX3FvcywgdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfY29udHJpYl9obHMsIHZpZGVvanNfc3dmXG4gICAgJ2xvYWRzdGFydCcsIC8vIHZpZGVvanNfcW9zLCB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAncGF1c2UnLCAvLyB2aWRlb2pzX3FvcywgdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ3BsYXknLCAvLyB2aWRlb2pzX3FvcywgdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ3BsYXllcl9sb2FkJywgLy8gdmlkZW9qc19iY19hbmFseXRpY3NcbiAgICAnY29udGVudHVwZGF0ZScsIC8vIHZpZGVvanNfY29udHJpYl9hZHNcbiAgICAnc2Vla2luZycsIC8vIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICdzZWVrZWQnLCAvLyB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAncHJvZ3Jlc3MnLCAvLyB2aWRlb2pzX2NvbnRyaWJfaGxzLCB2aWRlb2pzX3BsYXllciAodmlkZW9qc19zd2Y/KVxuICAgICdjYXRhbG9nX3JlcXVlc3QnLCAvLyB2aWRlb2pzX2NhdGFsb2dcbiAgICAnY2F0YWxvZ19yZXNwb25zZScsIC8vIHZpZGVvanNfY2F0YWxvZ1xuICAgICdwbGF5aW5nJywgLy8gdmlkZW9qc19xb3MsIHZpZGVvanNfcGxheWVyLCB2aWRlb2pzX3N3ZlxuICAgICd3YWl0aW5nJywgLy8gdmlkZW9qc19wbGF5ZXIsIHZpZGVvanNfc3dmXG4gICAgJ3ZpZGVvX3ZpZXcnLCAvLyB2aWRlb2pzX2JjX2FuYWx5dGljc1xuICAgICd2aWRlb19pbXByZXNzaW9uJywgLy8gdmlkZW9qc19iY19hbmFseXRpY3NcbiAgICAndmlkZW9fZW5nYWdlbWVudCcsIC8vIHZpZGVvanNfYmNfYW5hbHl0aWNzXG4gICAgJ3BsYXlfcmVxdWVzdCcsIC8vIHZpZGVvanNfYmNfYW5hbHl0aWNzXG4gICAgJ2NhbnBsYXknLCAvLyB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAnY2FucGxheXRocm91Z2gnLCAvLyB2aWRlb2pzX3BsYXllciwgdmlkZW9qc19zd2ZcbiAgICAndGltZXVwZGF0ZSdcbl07XG5cbmxldCBnZXRQbGF5ZXJFdmVudHMgPSAoKSA9PiB7XG4gICAgYWxsUGxheWVyRXZlbnRzSlNPTiA9IHZpZGVvanMuZ2V0RGF0YShwbGF5ZXIuZWxfKS5oYW5kbGVycztcblxuXG4gICAgZm9yIChwcm9wIGluIGFsbFBsYXllckV2ZW50c0pTT04pIHtcbiAgICAgICAgYWxsUGxheWVyRXZlbnRzLnB1c2gocHJvcCk7XG4gICAgfVxuXG4gICAgYWxsUGxheWVyRXZlbnRzLnNvcnQoKTtcblxuICAgIGZvciAoaSA9IDE7IGkgPCBhbGxQbGF5ZXJFdmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc29sZS5sb2coYWxsUGxheWVyRXZlbnRzW2ldKTtcbiAgICB9XG59O1xuXG5sZXQgbGlzdGVuRm9yUGxheWVyRXZlbnRzID0gKHBsYXllcikgPT4ge1xuXG4gICAgcGxheWVyLm9uZSgnZHVyYXRpb25jaGFuZ2UnLCBmdW5jdGlvbihlKSB7fSk7XG5cbiAgICBsZXQgcGxheUNvdW50ZXIgPSAwO1xuICAgIGxldCBtc2dTdHIsIGN1cnJlbnRUaW1lLCBwcmV2aW91c1RpbWUsIGxldmVsU3RyID0gJ2RlYnVnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwbGF5ZXIub24ocGxheWVyRXZlbnRzW2ldLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZmlyc3RwbGF5JzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncGxheSc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xvYWRlZG1ldGFkYXRhJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncGF1c2UnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdwcm9ncmVzcyc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbnRlbnR1cGRhdGUnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzZWVraW5nJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2FucGxheXRocm91Z2gnOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd0aW1ldXBkYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2Vla2VkJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2F0YWxvZ19yZXNwb25zZSc6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2R1cmF0aW9uY2hhbmdlJzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgbXNnU3RyID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsU3RyID0gJ2RlYnVnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxudmFyIHBsYXlsaXN0TW9kYWxCdXR0b24gPSB2aWRlb2pzLmV4dGVuZCh2aWRlb2pzLkJ1dHRvbiwge1xuICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbihwbGF5ZXIsIG9wdGlvbnMpIHtcblxuICAgICAgICB2aWRlb2pzLkJ1dHRvbi5jYWxsKHRoaXMsIHBsYXllciwgb3B0aW9ucyk7XG5cblxuICAgICAgICBwbGF5ZXIub24oJ2xvYWRzdGFydCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coX29wdGlvbnMpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEJpbmQgY2xpY2sgZXZlbnQgZm9yIGRlc2t0b3AgYnJvd3NlcnNcbiAgICAgICAgdGhpcy5vbignY2xpY2snLCBmdW5jdGlvbigpIHt9KTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdmlkZW9qcy5CdXR0b24ucHJvdG90eXBlLmNyZWF0ZUVsLmNhbGwodGhpcywgJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1wbGF5bGlzdC1idXR0b24gdmpzLW1lbnUtYnV0dG9uIHZqcy1tZW51LWJ1dHRvbi1wb3B1cCB2anMtY29udHJvbCB2anMtYnV0dG9uJyxcbiAgICAgICAgICAgIGlubmVySFRNTDogJzxkaXYgY2xhc3M9XCJ2anMtbWVudSBwbGF5bGlzdE1vZGFsIHZqcy1pY29ucy1jaGFwdGVyc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48dWwgY2xhc3M9XCJ2anMtcGxheWxpc3QtbWVudSB2anMtbWVudS1jb250ZW50XCJyb2xlPVwibWVudVwiPjwvdWw+PC9kaXY+PHNwYW4gY2xhc3M9XCJ2anMtY29udHJvbC10ZXh0XCI+UGxheWxpc3Q8L3NwYW4+PC9kaXY+J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICAnYXJpYS1saXZlJzogJ3BvbGl0ZScsXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBmaW5kQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgdmFyIGZvdW5kRWxlbWVudCA9IG51bGwsXG4gICAgICAgIGZvdW5kO1xuXG4gICAgZnVuY3Rpb24gcmVjdXJzZShlbGVtZW50LCBjbGFzc05hbWUsIGZvdW5kKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCAmJiAhZm91bmQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIGVsID0gZWxlbWVudC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUgIT0gdW5kZWZpbmVkID8gZWwuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKSA6IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpsID0gY2xhc3Nlcy5sZW5ndGg7IGogPCBqbDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsYXNzZXNbal0gPT0gY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRFbGVtZW50ID0gZWxlbWVudC5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZm91bmQpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICByZWN1cnNlKGVsZW1lbnQuY2hpbGROb2Rlc1tpXSwgY2xhc3NOYW1lLCBmb3VuZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVjdXJzZShlbGVtZW50LCBjbGFzc05hbWUsIGZhbHNlKTtcbiAgICByZXR1cm4gZm91bmRFbGVtZW50O1xufVxuXG5cbmxldCBidWlsZENvbnRhaW5lciA9IChwbGF5ZXIpID0+IHtcbiAgICB2aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KFwicGxheWxpc3RNb2RhbEJ1dHRvblwiLCBwbGF5bGlzdE1vZGFsQnV0dG9uKTtcblxuICAgIHZhciBidXR0b25JbmRleCA9IHBsYXllci5jb250cm9sQmFyLmNoaWxkcmVuKCkubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgcmV0dXJuIGMubmFtZSgpO1xuICAgIH0pLmluZGV4T2YoJ0Z1bGxzY3JlZW5Ub2dnbGUnKSAtIDE7XG4gICAgcGxheWVyLmNvbnRyb2xCYXIucGxheWxpc3RCdXR0b24gPSBwbGF5ZXIuY29udHJvbEJhci5hZGRDaGlsZCgncGxheWxpc3RNb2RhbEJ1dHRvbicsIG51bGwsIGJ1dHRvbkluZGV4KTtcbiAgICBwbGF5ZXIuY29udHJvbEJhci5wbGF5bGlzdEJ1dHRvbi5lbCgpLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcblxuICAgIHBsYXlsaXN0TW9kYWwgPSBmaW5kQ2xhc3MocGxheWVyLmNvbnRyb2xCYXIucGxheWxpc3RCdXR0b24uZWxfLCBcInZqcy1wbGF5bGlzdC1tZW51XCIpO1xuICAgIGNvbnNvbGUubG9nKHBsYXlsaXN0TW9kYWwpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX29wdGlvbnMucGxheWxpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBsYXllci5jYXRhbG9nLmdldFBsYXlsaXN0KF9vcHRpb25zLnBsYXlsaXN0c1tpXS5pZCwgZnVuY3Rpb24oZXJyb3IsIHBsYXlsaXN0KSB7XG4gICAgICAgICAgICBwbGF5ZXIuY2F0YWxvZy5sb2FkKHBsYXlsaXN0KTtcbiAgICAgICAgICAgIGRhdGEgPSBwbGF5ZXIuY2F0YWxvZy5kYXRhO1xuICAgICAgICAgICAgY2hpbGRTdHJpbmcgPSBcIjxsaSBjbGFzcz0ndmpzLXBsYXlsaXN0LXRpdGxlIHZqcy1tZW51LWl0ZW0nIGlkPSdcIiArIGRhdGEuaWQgKyBcIic+XCIgKyBkYXRhLm5hbWUgKyBcIjwvbGk+PHVsPjwvdWw+XCI7XG4gICAgICAgICAgICBwbGF5bGlzdE1vZGFsLmlubmVySFRNTCArPSBjaGlsZFN0cmluZztcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGxheWxpc3RNb2RhbC5jaGlsZE5vZGVzLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICBwbGF5bGlzdE1vZGFsLmNoaWxkTm9kZXNbal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmNhdGFsb2cuZ2V0UGxheWxpc3QoZXZ0LmN1cnJlbnRUYXJnZXQuaWQsIGZ1bmN0aW9uKGVycm9yLCBwbGF5bGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmNhdGFsb2cubG9hZChwbGF5bGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheWxpc3QuY3VycmVudEl0ZW0oMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLypmb3IodmFyIHo9MDsgejwgcGxheWxpc3QubGVuZ3RoO3orKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRTdHJpbmcgPSBcIjxsaSBjbGFzcz0ndmpzLXZpZGVvLXRpdGxlIHZqcy1tZW51LWl0ZW0nIGlkPSdcIiArIHBsYXlsaXN0W3pdLmlkICsgXCInPlwiICsgcGxheWxpc3Rbel0ubmFtZSArIFwiPC9saT5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQudGFyZ2V0LmlubmVySFRNTCArPSBjaGlsZFN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG59O1xuXG5cbmxldCBzZXRPcHRpb25zID0gKG9wdCkgPT4ge1xuICAgIF9vcHRpb25zID0gb3B0O1xuICAgIGlmIChfb3B0aW9ucykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9vcHRpb25zLnBsYXlsaXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coX29wdGlvbnMucGxheWxpc3RzW2ldLmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxufTtcblxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGludm9rZSB3aGVuIHRoZSBwbGF5ZXIgaXMgcmVhZHkuXG4gKlxuICogVGhpcyBpcyBhIGdyZWF0IHBsYWNlIGZvciB5b3VyIHBsdWdpbiB0byBpbml0aWFsaXplIGl0c2VsZi4gV2hlbiB0aGlzXG4gKiBmdW5jdGlvbiBpcyBjYWxsZWQsIHRoZSBwbGF5ZXIgd2lsbCBoYXZlIGl0cyBET00gYW5kIGNoaWxkIGNvbXBvbmVudHNcbiAqIGluIHBsYWNlLlxuICpcbiAqIEBmdW5jdGlvbiBvblBsYXllclJlYWR5XG4gKiBAcGFyYW0gICAge1BsYXllcn0gcGxheWVyXG4gKiBAcGFyYW0gICAge09iamVjdH0gW29wdGlvbnM9e31dXG4gKi9cbmNvbnN0IG9uUGxheWVyUmVhZHkgPSAoYmNwbGF5ZXIsIG9wdGlvbnMpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKCdCcmlnaHRjb3ZlIFBsYXllciBtdWx0aVBsYXlsaXN0IGxvYWRlZCcpO1xuXG4gICAgLy9ldmVudHMgPSBiY3BsYXllci5kZWJ1Z2dlcldpbmRvdy5nZXRFdmVudHM7XG5cbiAgICAvL2JjcGxheWVyLmFkZENsYXNzKCd2anMtcGxheWVyLWRlYnVnZ2VyJyk7XG5cbiAgICBsZXQgZm9udGF3ZXNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgZm9udGF3ZXNvbWUucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGZvbnRhd2Vzb21lLmhyZWYgPSBcIi8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuMC4zL2Nzcy9mb250LWF3ZXNvbWUuY3NzXCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb250YXdlc29tZSk7XG5cbiAgICBzZXRPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgYnVpbGRDb250YWluZXIoYmNwbGF5ZXIpO1xuXG4gICAgbGlzdGVuRm9yUGxheWVyRXZlbnRzKGJjcGxheWVyKTtcbn07XG4vKipcbiAqIEEgQnJpZ2h0Y292ZSB2aWRlby5qcyBwbHVnaW4uXG4gKlxuICogSW4gdGhlIHBsdWdpbiBmdW5jdGlvbiwgdGhlIHZhbHVlIG9mIGB0aGlzYCBpcyBhIHZpZGVvLmpzIGBQbGF5ZXJgXG4gKiBpbnN0YW5jZS4gWW91IGNhbm5vdCByZWx5IG9uIHRoZSBwbGF5ZXIgYmVpbmcgaW4gYSBcInJlYWR5XCIgc3RhdGUgaGVyZSxcbiAqIGRlcGVuZGluZyBvbiBob3cgdGhlIHBsdWdpbiBpcyBpbnZva2VkLiBUaGlzIG1heSBvciBtYXkgbm90IGJlIGltcG9ydGFudFxuICogdG8geW91OyBpZiBub3QsIHJlbW92ZSB0aGUgd2FpdCBmb3IgXCJyZWFkeVwiIVxuICpcbiAqIEBmdW5jdGlvbiBwbGF5ZXJEZWJ1Z2dlclxuICogQHBhcmFtICAgIHtPYmplY3R9IFtvcHRpb25zPXt9XVxuICogICAgICAgICAgIEFuIG9iamVjdCBvZiBvcHRpb25zIGxlZnQgdG8gdGhlIHBsdWdpbiBhdXRob3IgdG8gZGVmaW5lLlxuICovXG5jb25zdCBtdWx0aVBsYXlsaXN0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHRoaXMucmVhZHkoKCkgPT4ge1xuXG4gICAgICAgIF9vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgb25QbGF5ZXJSZWFkeSh0aGlzLCB2aWRlb2pzLm1lcmdlT3B0aW9ucyhkZWZhdWx0cywgX29wdGlvbnMpKTtcbiAgICB9KTtcbn07XG5cbi8vIFJlZ2lzdGVyIHRoZSBwbHVnaW4gd2l0aCB2aWRlby5qcy5cbnZpZGVvanMucGx1Z2luKCdtdWx0aVBsYXlsaXN0JywgbXVsdGlQbGF5bGlzdCk7XG5cbi8vIEluY2x1ZGUgdGhlIHZlcnNpb24gbnVtYmVyLlxubXVsdGlQbGF5bGlzdC5WRVJTSU9OID0gJ19fVkVSU0lPTl9fJztcblxuZXhwb3J0IGRlZmF1bHQgbXVsdGlQbGF5bGlzdDtcbiIsImltcG9ydCBkb2N1bWVudCBmcm9tICdnbG9iYWwvZG9jdW1lbnQnO1xuXG5pbXBvcnQgUVVuaXQgZnJvbSAncXVuaXQnO1xuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcbmltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuaW1wb3J0IHBsdWdpbiBmcm9tICcuLi9zcmMvcGx1Z2luJztcblxuY29uc3QgUGxheWVyID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ1BsYXllcicpO1xuXG5RVW5pdC50ZXN0KCd0aGUgZW52aXJvbm1lbnQgaXMgc2FuZScsIGZ1bmN0aW9uKGFzc2VydCkge1xuICBhc3NlcnQuc3RyaWN0RXF1YWwodHlwZW9mIEFycmF5LmlzQXJyYXksICdmdW5jdGlvbicsICdlczUgZXhpc3RzJyk7XG4gIGFzc2VydC5zdHJpY3RFcXVhbCh0eXBlb2Ygc2lub24sICdvYmplY3QnLCAnc2lub24gZXhpc3RzJyk7XG4gIGFzc2VydC5zdHJpY3RFcXVhbCh0eXBlb2YgdmlkZW9qcywgJ2Z1bmN0aW9uJywgJ3ZpZGVvanMgZXhpc3RzJyk7XG4gIGFzc2VydC5zdHJpY3RFcXVhbCh0eXBlb2YgcGx1Z2luLCAnZnVuY3Rpb24nLCAncGx1Z2luIGlzIGEgZnVuY3Rpb24nKTtcbn0pO1xuXG5RVW5pdC5tb2R1bGUoJ3ZpZGVvanMtcGxheWVyLWRlYnVnZ2VyJywge1xuXG4gIGJlZm9yZUVhY2goKSB7XG5cbiAgICAvLyBNb2NrIHRoZSBlbnZpcm9ubWVudCdzIHRpbWVycyBiZWNhdXNlIGNlcnRhaW4gdGhpbmdzIC0gcGFydGljdWxhcmx5XG4gICAgLy8gcGxheWVyIHJlYWRpbmVzcyAtIGFyZSBhc3luY2hyb25vdXMgaW4gdmlkZW8uanMgNS4gVGhpcyBNVVNUIGNvbWVcbiAgICAvLyBiZWZvcmUgYW55IHBsYXllciBpcyBjcmVhdGVkOyBvdGhlcndpc2UsIHRpbWVycyBjb3VsZCBnZXQgY3JlYXRlZFxuICAgIC8vIHdpdGggdGhlIGFjdHVhbCB0aW1lciBtZXRob2RzIVxuICAgIHRoaXMuY2xvY2sgPSBzaW5vbi51c2VGYWtlVGltZXJzKCk7XG5cbiAgICB0aGlzLmZpeHR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVuaXQtZml4dHVyZScpO1xuICAgIHRoaXMudmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIHRoaXMuZml4dHVyZS5hcHBlbmRDaGlsZCh0aGlzLnZpZGVvKTtcbiAgICB0aGlzLnBsYXllciA9IHZpZGVvanModGhpcy52aWRlbyk7XG4gIH0sXG5cbiAgYWZ0ZXJFYWNoKCkge1xuICAgIHRoaXMucGxheWVyLmRpc3Bvc2UoKTtcbiAgICB0aGlzLmNsb2NrLnJlc3RvcmUoKTtcbiAgfVxufSk7XG5cblFVbml0LnRlc3QoJ3JlZ2lzdGVycyBpdHNlbGYgd2l0aCB2aWRlby5qcycsIGZ1bmN0aW9uKGFzc2VydCkge1xuICBhc3NlcnQuZXhwZWN0KDIpO1xuXG4gIGFzc2VydC5zdHJpY3RFcXVhbChcbiAgICBQbGF5ZXIucHJvdG90eXBlLnBsYXllckRlYnVnZ2VyLFxuICAgIHBsdWdpbixcbiAgICAndmlkZW9qcy1wbGF5ZXItZGVidWdnZXIgcGx1Z2luIHdhcyByZWdpc3RlcmVkJ1xuICApO1xuXG4gIHRoaXMucGxheWVyLnBsYXllckRlYnVnZ2VyKCk7XG5cbiAgLy8gVGljayB0aGUgY2xvY2sgZm9yd2FyZCBlbm91Z2ggdG8gdHJpZ2dlciB0aGUgcGxheWVyIHRvIGJlIFwicmVhZHlcIi5cbiAgdGhpcy5jbG9jay50aWNrKDEpO1xuXG4gIGFzc2VydC5vayhcbiAgICB0aGlzLnBsYXllci5oYXNDbGFzcygndmpzLXBsYXllci1kZWJ1Z2dlcicpLFxuICAgICd0aGUgcGx1Z2luIGFkZHMgYSBjbGFzcyB0byB0aGUgcGxheWVyJ1xuICApO1xufSk7XG4iXX0=
