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
    id = undefined,
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
        return videojs.Button.prototype.createEl.call(this, 'button', {
            className: 'vjs-playlist-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button',
            innerHTML: '<div class="vjs-menu playlistModal vjs-icons-chapters" role="presentation"><ul class="vjs-playlist-menu"role="menu"></ul></div><span class="vjs-control-text">Playlist</span></div>'
        }, {
            'aria-live': 'polite'
        });
    }
});
var buildContainer = function buildContainer(player) {
    videojs.registerComponent("playlistModalButton", playlistModalButton);

    var buttonIndex = player.controlBar.children().map(function (c) {
        return c.name();
    }).indexOf('FullscreenToggle') - 1;
    player.controlBar.testButton = player.controlBar.addChild('playlistModalButton', null, buttonIndex);
    player.controlBar.testButton.el().setAttribute('tabindex', 0);
    for (var j = 0; j < player.controlBar.testButton.el_.childNodes.length; j++) {
        if (player.controlBar.testButton.el_.childNodes[j].className === "vjs-menu playlistModal vjs-icons-chapters") {
            for (var i = 0; i < _options.playlists.length; i++) {

                var playlist1 = player.controlBar.testButton.el_.childNodes[j];
                playlist1 = playlist1.childNodes[0];
                player.catalog.getPlaylist(_options.playlists[i].id, function (error, playlist) {
                    player.catalog.load(playlist);
                    playlist1.innerHTML += "<li class='vjs-playlist-title vjs-menu-item' id='" + player.catalog.data.id + "'>" + player.catalog.data.name + "</li>";
                    for (var z = 0; z < playlist1.childNodes.length; z++) {
                        playlist1.childNodes[z].addEventListener('click', function (evt) {
                            player.catalog.getPlaylist(evt.currentTarget.id, function (error, playlist) {
                                player.pause();
                                player.catalog.load(playlist);
                                player.playlist.currentItem(0);
                                player.play();
                            });
                        });
                    };
                });
            }
        } else {
            console.log("false");
        }
    }
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
},{"../src/plugin":5,"global/document":2}]},{},[6]);
