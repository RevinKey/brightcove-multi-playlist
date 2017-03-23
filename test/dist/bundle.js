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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1yZXNvbHZlL2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2dsb2JhbC9kb2N1bWVudC5qcyIsIi9Vc2Vycy9rcmV5bm9sZHMvUmVwb3MvYnJpZ2h0Y292ZS1tdWx0aS1wbGF5bGlzdC9zcmMvanMvY29tcG9uZW50SURzLmpzIiwiL1VzZXJzL2tyZXlub2xkcy9SZXBvcy9icmlnaHRjb3ZlLW11bHRpLXBsYXlsaXN0L3NyYy9qcy9wbGF5bGlzdENvbnRhaW5lci5qcyIsIi9Vc2Vycy9rcmV5bm9sZHMvUmVwb3MvYnJpZ2h0Y292ZS1tdWx0aS1wbGF5bGlzdC9zcmMvcGx1Z2luLmpzIiwiL1VzZXJzL2tyZXlub2xkcy9SZXBvcy9icmlnaHRjb3ZlLW11bHRpLXBsYXlsaXN0L3Rlc3QvcGx1Z2luLnRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2ZPLElBQUksR0FBRyxHQUFHO0FBQ2IsZUFBVyxFQUFFLGFBQWE7QUFDMUIsV0FBTyxFQUFFLFdBQVc7QUFDcEIsWUFBUSxFQUFFLFlBQVk7O0FBRXRCLGFBQVMsRUFBRSxXQUFXO0FBQ3RCLFNBQUssRUFBRSxPQUFPO0FBQ2QsYUFBUyxFQUFFLFdBQVc7QUFDdEIsT0FBRyxFQUFFLGFBQWE7QUFDbEIsZ0JBQVksRUFBRSxjQUFjO0FBQzVCLG1CQUFlLEVBQUUsaUJBQWlCO0FBQ2xDLDJCQUF1QixFQUFFLHlCQUF5QjtBQUNsRCx1QkFBbUIsRUFBRSxxQkFBcUI7QUFDMUMseUJBQXFCLEVBQUUsdUJBQXVCO0FBQzlDLDZCQUF5QixF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LDBCQUUvQiwrQ0FBK0MsQ0FDaEQsQ0FBQzs7QUFFRixNQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDOzs7QUFHN0IsTUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRW5CLFFBQU0sQ0FBQyxFQUFFLENBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsRUFDM0MsdUNBQXVDLENBQ3hDLENBQUM7Q0FDSCxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIiwidmFyIHRvcExldmVsID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOlxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge31cbnZhciBtaW5Eb2MgPSByZXF1aXJlKCdtaW4tZG9jdW1lbnQnKTtcblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50O1xufSBlbHNlIHtcbiAgICB2YXIgZG9jY3kgPSB0b3BMZXZlbFsnX19HTE9CQUxfRE9DVU1FTlRfQ0FDSEVANCddO1xuXG4gICAgaWYgKCFkb2NjeSkge1xuICAgICAgICBkb2NjeSA9IHRvcExldmVsWydfX0dMT0JBTF9ET0NVTUVOVF9DQUNIRUA0J10gPSBtaW5Eb2M7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkb2NjeTtcbn1cbiIsImV4cG9ydCBsZXQgSURzID0ge1xuICAgIG15QmxhY2tiaXJkOiAnbXlCbGFja2JpcmQnLFxuICAgIGZpbHRlcnM6ICdiYkZpbHRlcnMnLFxuICAgIGNvbnRyb2xzOiAnYmJDb250cm9scycsXG4gICAgLy9zaXplOiAnYmJTaXplJyxcbiAgICBzZW5kRW1haWw6ICdzZW5kRW1haWwnLFxuICAgIG1vZGFsOiAnbW9kYWwnLFxuICAgIGJ1dHRvbkJhcjogJ2J1dHRvbkJhcicsXG4gICAgbG9nOiAnbXlCbGFja2JpcmQnLFxuICAgIGJ0blRvZ2dsZUxvZzogJ2J0blRvZ2dsZUxvZycsXG4gICAgYnRuVG9nZ2xlU2xpZGVyOiAnYnRuVG9nZ2xlU2xpZGVyJyxcbiAgICBidG5Ub2dnbGVQbGF5ZXJTZXR0aW5nczogJ2J0blRvZ2dsZVBsYXllclNldHRpbmdzJyxcbiAgICBidG5Ub2dnbGVBZFNldHRpbmdzOiAnYnRuVG9nZ2xlQWRTZXR0aW5ncycsXG4gICAgYnRuVG9nZ2xlUGxheWJhY2tJbmZvOiAnYnRuVG9nZ2xlUGxheWJhY2tJbmZvJyxcbiAgICBidG5Ub2dnbGVEZWJ1Z2dlclNldHRpbmdzOiAnYnRuVG9nZ2xlRGVidWdnZXJTZXR0aW5ncycsXG4gICAgY2xhc3Nlc0xpc3Q6ICdjbGFzc2VzTGlzdCcsXG4gICAgcGxheWVyU2V0dGluZ3M6ICdwbGF5ZXJTZXR0aW5ncycsXG4gICAgcGxheWJhY2tJbmZvOiAncGxheWJhY2tJbmZvJyxcbiAgICBkZWJ1Z2dlclNldHRpbmdzOiAnZGVidWdnZXJTZXR0aW5ncycsXG4gICAgYnRuVG9nZ2xlQ2xhc3NMaXN0OiAnYnRuVG9nZ2xlQ2xhc3NMaXN0JyxcbiAgICAvL2JpZ1BsYXlCdXR0b25TdHlsZXM6ICdiaWdQbGF5QnV0dG9uU3R5bGVzJyxcbiAgICAvL3Bvc3RlclN0eWxlczogJ3Bvc3RlclN0eWxlcycsXG4gICAgbG9nVGFibGU6ICdsb2dUYWJsZScsXG4gICAgbG9nTGlzdDogJ2xvZ0xpc3QnLFxuICAgIGxvZ0pTT046ICdsb2dKU09OJyxcbiAgICBtZWRpYVNldHRpbmdzOiAnbWVkaWFTZXR0aW5ncycsXG4gICAgYWRTZXR0aW5nczogJ2FkU2V0dGluZ3MnXG59O1xuIiwiLyoqXG4gKiBAZmlsZSBwbGF5bGlzdENvbnRhaW5lci5qc1xuICovXG4gaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1BsYXllcnxPYmplY3R9IHBsYXllclxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqIEBjbGFzcyBQbGF5bGlzdENvbnRhaW5lclxuICovXG5jbGFzcyBQbGF5bGlzdENvbnRhaW5lciBleHRlbmRzIHZpZGVvanMuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblxuICAgIHN1cGVyKHBsYXllcixvcHRpb25zKTtcblxuICAgIC8vdGhpcy5jb250ZW50KHRoaXMub3B0aW9uc18uY29udGVudCk7XG5cbiAgICB0aGlzLmVsXyA9IHZpZGVvanMuY3JlYXRlRWwoXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiIDogdGhpcy5vcHRpb25zXy5pZFxuICAgICAgfVxuXG4gICAgKTtcblxuICAgIHRoaXMuaGVhZGVyRWxfID0gdmlkZW9qcy5jcmVhdGVFbCgnZGl2JyxcbiAgICAgIHtcImNsYXNzTmFtZVwiOiAnaGVhZGVyJ31cbiAgICApO1xuICAgIHRoaXMuaGVhZGVyRWxfLmlubmVySFRNTD0nPGgyPicgKyB0aGlzLm9wdGlvbnNfLm5hbWUgKyAnPC9oMj4nO1xuICAgIHRoaXMuZWxfLmFwcGVuZENoaWxkKHRoaXMuaGVhZGVyRWxfKTtcblxuICAgIHRoaXMuY29udGVudEVsXyA9IHZpZGVvanMuY3JlYXRlRWwoJ2RpdicsIHtcImNsYXNzTmFtZVwiOiAnbWFpbid9KTtcbiAgICB0aGlzLmNvbnRlbnRFbF8uaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zXy5jb250ZW50O1xuICAgIHRoaXMuZWxfLmFwcGVuZENoaWxkKHRoaXMuY29udGVudEVsXyk7XG5cbiAgICB0aGlzLmZvb3RlckVsXyA9IHZpZGVvanMuY3JlYXRlRWwoJ2RpdicsIHtcImNsYXNzTmFtZVwiIDogJ2Zvb3Rlcid9KTtcbiAgICB0aGlzLmVsXy5hcHBlbmRDaGlsZCh0aGlzLmZvb3RlckVsXyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb250ZW50KHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuY29udGVudEVsXy5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udGVudEVsXy5pbm5lckhUTUw7XG4gIH1cblxuXG59XG5cbnZpZGVvanMuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdQbGF5bGlzdENvbnRhaW5lcicsIFBsYXlsaXN0Q29udGFpbmVyKTtcbmV4cG9ydCBkZWZhdWx0IFBsYXlsaXN0Q29udGFpbmVyO1xuIiwiaW1wb3J0IFBsYXlsaXN0Q29udGFpbmVyIGZyb20gJy4vanMvcGxheWxpc3RDb250YWluZXIuanMnO1xuaW1wb3J0IHtcbiAgICBJRHNcbn0gZnJvbSAnLi9qcy9jb21wb25lbnRJRHMuanMnO1xuXG4vLyBEZWZhdWx0IG9wdGlvbnMgZm9yIHRoZSBwbHVnaW4uXG5jb25zdCBkZWZhdWx0cyA9IHt9O1xuXG4vLyBteSBkZWJ1Z2dlciBsZXRzXG5sZXQgX29wdGlvbnMsXG4gICAgcGxheWVyLFxuICAgIGFkU2V0dGluZ3MsXG4gICAgbGFzdEV2ZW50ID0gXCJcIixcbiAgICBjdXJyZW50RXZlbnQgPSBcIlwiLFxuICAgIE1vZGFsLFxuICAgIHBsYXlsaXN0TW9kYWwsXG4gICAgY2hpbGQsXG4gICAgcGxheWxpc3RUaXRsZSxcbiAgICBkYXRhLFxuICAgIGlkLFxuICAgIGNoaWxkU3RyaW5nO1xuXG5cbnZhciBwbGF5bGlzdE1vZGFsQnV0dG9uID0gdmlkZW9qcy5leHRlbmQodmlkZW9qcy5CdXR0b24sIHtcbiAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24ocGxheWVyLCBvcHRpb25zKSB7XG5cbiAgICAgICAgdmlkZW9qcy5CdXR0b24uY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cbiAgICAgICAgcGxheWVyLm9uKCdsb2Fkc3RhcnQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKF9vcHRpb25zKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBCaW5kIGNsaWNrIGV2ZW50IGZvciBkZXNrdG9wIGJyb3dzZXJzXG4gICAgICAgIHRoaXMub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7fSk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUVsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHZpZGVvanMuQnV0dG9uLnByb3RvdHlwZS5jcmVhdGVFbC5jYWxsKHRoaXMsICdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICd2anMtcGxheWxpc3QtYnV0dG9uIHZqcy1tZW51LWJ1dHRvbiB2anMtbWVudS1idXR0b24tcG9wdXAgdmpzLWNvbnRyb2wgdmpzLWJ1dHRvbicsXG4gICAgICAgICAgICBpbm5lckhUTUw6ICc8ZGl2IGNsYXNzPVwidmpzLW1lbnUgcGxheWxpc3RNb2RhbCB2anMtaWNvbnMtY2hhcHRlcnNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+PHVsIGlkPVwidmpzLXBsYXlsaXN0LW1lbnVcIiBjbGFzcz1cInZqcy1wbGF5bGlzdC1tZW51IHZqcy1tZW51LWNvbnRlbnRcInJvbGU9XCJtZW51XCI+PC91bD48L2Rpdj48c3BhbiBjbGFzcz1cInZqcy1jb250cm9sLXRleHRcIj5QbGF5bGlzdDwvc3Bhbj48L2Rpdj4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICdhcmlhLWxpdmUnOiAncG9saXRlJyxcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIGZpbmRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICB2YXIgZm91bmRFbGVtZW50ID0gbnVsbCxcbiAgICAgICAgZm91bmQ7XG5cbiAgICBmdW5jdGlvbiByZWN1cnNlKGVsZW1lbnQsIGNsYXNzTmFtZSwgZm91bmQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoICYmICFmb3VuZDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSBlbGVtZW50LmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IGVsLmNsYXNzTmFtZSAhPSB1bmRlZmluZWQgPyBlbC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpIDogW107XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMCwgamwgPSBjbGFzc2VzLmxlbmd0aDsgaiA8IGpsOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3Nlc1tqXSA9PSBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3VuZEVsZW1lbnQgPSBlbGVtZW50LmNoaWxkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmb3VuZClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIHJlY3Vyc2UoZWxlbWVudC5jaGlsZE5vZGVzW2ldLCBjbGFzc05hbWUsIGZvdW5kKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWN1cnNlKGVsZW1lbnQsIGNsYXNzTmFtZSwgZmFsc2UpO1xuICAgIHJldHVybiBmb3VuZEVsZW1lbnQ7XG59XG5cblxubGV0IGJ1aWxkQ29udGFpbmVyID0gKHBsYXllcikgPT4ge1xuICAgIHZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoXCJwbGF5bGlzdE1vZGFsQnV0dG9uXCIsIHBsYXlsaXN0TW9kYWxCdXR0b24pO1xuXG4gICAgdmFyIGJ1dHRvbkluZGV4ID0gcGxheWVyLmNvbnRyb2xCYXIuY2hpbGRyZW4oKS5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgICByZXR1cm4gYy5uYW1lKCk7XG4gICAgfSkuaW5kZXhPZignRnVsbHNjcmVlblRvZ2dsZScpIC0gMTtcbiAgICBwbGF5ZXIuY29udHJvbEJhci5wbGF5bGlzdEJ1dHRvbiA9IHBsYXllci5jb250cm9sQmFyLmFkZENoaWxkKCdwbGF5bGlzdE1vZGFsQnV0dG9uJywgbnVsbCwgYnV0dG9uSW5kZXgpO1xuICAgIHBsYXllci5jb250cm9sQmFyLnBsYXlsaXN0QnV0dG9uLmVsKCkuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuXG4gICAgcGxheWxpc3RNb2RhbCA9IGZpbmRDbGFzcyhwbGF5ZXIuY29udHJvbEJhci5wbGF5bGlzdEJ1dHRvbi5lbF8sIFwidmpzLXBsYXlsaXN0LW1lbnVcIik7XG4gICAgY29uc29sZS5sb2cocGxheWxpc3RNb2RhbCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfb3B0aW9ucy5wbGF5bGlzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoaT09MCl7XG4gICAgICAgICAgICBwbGF5ZXIuY2F0YWxvZy5nZXRQbGF5bGlzdChfb3B0aW9ucy5wbGF5bGlzdHNbaV0uaWQsIGZ1bmN0aW9uKGVycm9yLCBwbGF5bGlzdCkge1xuICAgICAgICAgICAgICAgIHBsYXllci5jYXRhbG9nLmxvYWQocGxheWxpc3QpO1xuICAgICAgICAgICAgICAgIHBsYXllci5wbGF5bGlzdC5jdXJyZW50SXRlbSgwKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyLmNhdGFsb2cuZ2V0UGxheWxpc3QoX29wdGlvbnMucGxheWxpc3RzW2ldLmlkLCBmdW5jdGlvbihlcnJvciwgcGxheWxpc3QpIHtcbiAgICAgICAgICAgIGRhdGEgPSBwbGF5ZXIuY2F0YWxvZy5kYXRhO1xuICAgICAgICAgICAgY2hpbGRTdHJpbmcgPSBcIjxsaSBjbGFzcz0ndmpzLXBsYXlsaXN0LXRpdGxlJyBpZD0nXCIgKyBkYXRhLmlkICsgXCInPlwiICsgZGF0YS5uYW1lICsgXCI8L2xpPjx1bCBzdHlsZT0nZGlzcGxheTpub25lOyc+XCI7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBsYXlsaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRTdHJpbmcgKz0gXCI8ZGl2IGNsYXNzPSd2anMtdmlkZW8tdGl0bGUgdmpzLW1lbnUtaXRlbScgcGxheWxpc3RJZD0nXCIgKyBkYXRhLmlkICsgXCInaWQ9J1wiICsgcGxheWxpc3Rbal0uaWQgKyBcIic+XCIgKyBwbGF5bGlzdFtqXS5uYW1lICsgXCI8aW1nIGNsYXNzPSd2anMtdGh1bWJuYWlsJyBzdHlsZT0ncG9pbnRlci1ldmVudHM6bm9uZTsnc3JjPVwiICsgcGxheWxpc3Rbal0udGh1bWJuYWlsICsgXCI+PC9pbWc+PC9kaXY+XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGlsZFN0cmluZyArPSBcIjwvdWw+XCI7XG4gICAgICAgICAgICBwbGF5bGlzdE1vZGFsLmlubmVySFRNTCArPSBjaGlsZFN0cmluZztcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgcGxheWxpc3RNb2RhbC5jaGlsZE5vZGVzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBwbGF5bGlzdE1vZGFsLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXlsaXN0TW9kYWwuY2hpbGROb2Rlc1t4XS5jbGFzc05hbWUgPT09ICd2anMtcGxheWxpc3QtdGl0bGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlsaXN0TW9kYWwuY2hpbGROb2Rlc1t4XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0LnRhcmdldC5uZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2dC50YXJnZXQubmV4dFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnRhcmdldC5uZXh0U2libGluZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5bGlzdE1vZGFsLmNoaWxkTm9kZXNbeF0udGFnTmFtZSA9PT0gJ1VMJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IHBsYXlsaXN0TW9kYWwuY2hpbGROb2Rlc1t4XTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCB0ZW1wLmNoaWxkTm9kZXMubGVuZ3RoOyB6KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAuY2hpbGROb2Rlc1t6XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5jYXRhbG9nLmdldFBsYXlsaXN0KGV2dC5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXMucGxheWxpc3RJZC52YWx1ZSwgZnVuY3Rpb24oZXJyb3IsIHBsYXlsaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5jYXRhbG9nLmxvYWQocGxheWxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHBsYXlsaXN0Lmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0LnRhcmdldC5pZCA9PT0gcGxheWxpc3Rba10uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheWxpc3QuY3VycmVudEl0ZW0oayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn07XG5cblxubGV0IHNldE9wdGlvbnMgPSAob3B0KSA9PiB7XG4gICAgX29wdGlvbnMgPSBvcHQ7XG4gICAgaWYgKF9vcHRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX29wdGlvbnMucGxheWxpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfb3B0aW9ucy5wbGF5bGlzdHNbaV0uaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5cbi8qKlxuICogRnVuY3Rpb24gdG8gaW52b2tlIHdoZW4gdGhlIHBsYXllciBpcyByZWFkeS5cbiAqXG4gKiBUaGlzIGlzIGEgZ3JlYXQgcGxhY2UgZm9yIHlvdXIgcGx1Z2luIHRvIGluaXRpYWxpemUgaXRzZWxmLiBXaGVuIHRoaXNcbiAqIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlIHBsYXllciB3aWxsIGhhdmUgaXRzIERPTSBhbmQgY2hpbGQgY29tcG9uZW50c1xuICogaW4gcGxhY2UuXG4gKlxuICogQGZ1bmN0aW9uIG9uUGxheWVyUmVhZHlcbiAqIEBwYXJhbSAgICB7UGxheWVyfSBwbGF5ZXJcbiAqIEBwYXJhbSAgICB7T2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqL1xuY29uc3Qgb25QbGF5ZXJSZWFkeSA9IChiY3BsYXllciwgb3B0aW9ucykgPT4ge1xuXG4gICAgY29uc29sZS5sb2coJ0JyaWdodGNvdmUgUGxheWVyIG11bHRpUGxheWxpc3QgbG9hZGVkJyk7XG5cbiAgICAvL2V2ZW50cyA9IGJjcGxheWVyLmRlYnVnZ2VyV2luZG93LmdldEV2ZW50cztcblxuICAgIC8vYmNwbGF5ZXIuYWRkQ2xhc3MoJ3Zqcy1wbGF5ZXItZGVidWdnZXInKTtcblxuICAgIGxldCBmb250YXdlc29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBmb250YXdlc29tZS5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgZm9udGF3ZXNvbWUuaHJlZiA9IFwiLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4wLjMvY3NzL2ZvbnQtYXdlc29tZS5jc3NcIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvbnRhd2Vzb21lKTtcblxuICAgIHNldE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICBidWlsZENvbnRhaW5lcihiY3BsYXllcik7XG5cbn07XG4vKipcbiAqIEEgQnJpZ2h0Y292ZSB2aWRlby5qcyBwbHVnaW4uXG4gKlxuICogSW4gdGhlIHBsdWdpbiBmdW5jdGlvbiwgdGhlIHZhbHVlIG9mIGB0aGlzYCBpcyBhIHZpZGVvLmpzIGBQbGF5ZXJgXG4gKiBpbnN0YW5jZS4gWW91IGNhbm5vdCByZWx5IG9uIHRoZSBwbGF5ZXIgYmVpbmcgaW4gYSBcInJlYWR5XCIgc3RhdGUgaGVyZSxcbiAqIGRlcGVuZGluZyBvbiBob3cgdGhlIHBsdWdpbiBpcyBpbnZva2VkLiBUaGlzIG1heSBvciBtYXkgbm90IGJlIGltcG9ydGFudFxuICogdG8geW91OyBpZiBub3QsIHJlbW92ZSB0aGUgd2FpdCBmb3IgXCJyZWFkeVwiIVxuICpcbiAqIEBmdW5jdGlvbiBwbGF5ZXJEZWJ1Z2dlclxuICogQHBhcmFtICAgIHtPYmplY3R9IFtvcHRpb25zPXt9XVxuICogICAgICAgICAgIEFuIG9iamVjdCBvZiBvcHRpb25zIGxlZnQgdG8gdGhlIHBsdWdpbiBhdXRob3IgdG8gZGVmaW5lLlxuICovXG5jb25zdCBtdWx0aVBsYXlsaXN0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHRoaXMucmVhZHkoKCkgPT4ge1xuXG4gICAgICAgIF9vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgb25QbGF5ZXJSZWFkeSh0aGlzLCB2aWRlb2pzLm1lcmdlT3B0aW9ucyhkZWZhdWx0cywgX29wdGlvbnMpKTtcbiAgICB9KTtcbn07XG5cbi8vIFJlZ2lzdGVyIHRoZSBwbHVnaW4gd2l0aCB2aWRlby5qcy5cbnZpZGVvanMucGx1Z2luKCdtdWx0aVBsYXlsaXN0JywgbXVsdGlQbGF5bGlzdCk7XG5cbi8vIEluY2x1ZGUgdGhlIHZlcnNpb24gbnVtYmVyLlxubXVsdGlQbGF5bGlzdC5WRVJTSU9OID0gJ19fVkVSU0lPTl9fJztcblxuZXhwb3J0IGRlZmF1bHQgbXVsdGlQbGF5bGlzdDtcbiIsImltcG9ydCBkb2N1bWVudCBmcm9tICdnbG9iYWwvZG9jdW1lbnQnO1xuXG5pbXBvcnQgUVVuaXQgZnJvbSAncXVuaXQnO1xuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcbmltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuaW1wb3J0IHBsdWdpbiBmcm9tICcuLi9zcmMvcGx1Z2luJztcblxuY29uc3QgUGxheWVyID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ1BsYXllcicpO1xuXG5RVW5pdC50ZXN0KCd0aGUgZW52aXJvbm1lbnQgaXMgc2FuZScsIGZ1bmN0aW9uKGFzc2VydCkge1xuICBhc3NlcnQuc3RyaWN0RXF1YWwodHlwZW9mIEFycmF5LmlzQXJyYXksICdmdW5jdGlvbicsICdlczUgZXhpc3RzJyk7XG4gIGFzc2VydC5zdHJpY3RFcXVhbCh0eXBlb2Ygc2lub24sICdvYmplY3QnLCAnc2lub24gZXhpc3RzJyk7XG4gIGFzc2VydC5zdHJpY3RFcXVhbCh0eXBlb2YgdmlkZW9qcywgJ2Z1bmN0aW9uJywgJ3ZpZGVvanMgZXhpc3RzJyk7XG4gIGFzc2VydC5zdHJpY3RFcXVhbCh0eXBlb2YgcGx1Z2luLCAnZnVuY3Rpb24nLCAncGx1Z2luIGlzIGEgZnVuY3Rpb24nKTtcbn0pO1xuXG5RVW5pdC5tb2R1bGUoJ3ZpZGVvanMtcGxheWVyLWRlYnVnZ2VyJywge1xuXG4gIGJlZm9yZUVhY2goKSB7XG5cbiAgICAvLyBNb2NrIHRoZSBlbnZpcm9ubWVudCdzIHRpbWVycyBiZWNhdXNlIGNlcnRhaW4gdGhpbmdzIC0gcGFydGljdWxhcmx5XG4gICAgLy8gcGxheWVyIHJlYWRpbmVzcyAtIGFyZSBhc3luY2hyb25vdXMgaW4gdmlkZW8uanMgNS4gVGhpcyBNVVNUIGNvbWVcbiAgICAvLyBiZWZvcmUgYW55IHBsYXllciBpcyBjcmVhdGVkOyBvdGhlcndpc2UsIHRpbWVycyBjb3VsZCBnZXQgY3JlYXRlZFxuICAgIC8vIHdpdGggdGhlIGFjdHVhbCB0aW1lciBtZXRob2RzIVxuICAgIHRoaXMuY2xvY2sgPSBzaW5vbi51c2VGYWtlVGltZXJzKCk7XG5cbiAgICB0aGlzLmZpeHR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVuaXQtZml4dHVyZScpO1xuICAgIHRoaXMudmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIHRoaXMuZml4dHVyZS5hcHBlbmRDaGlsZCh0aGlzLnZpZGVvKTtcbiAgICB0aGlzLnBsYXllciA9IHZpZGVvanModGhpcy52aWRlbyk7XG4gIH0sXG5cbiAgYWZ0ZXJFYWNoKCkge1xuICAgIHRoaXMucGxheWVyLmRpc3Bvc2UoKTtcbiAgICB0aGlzLmNsb2NrLnJlc3RvcmUoKTtcbiAgfVxufSk7XG5cblFVbml0LnRlc3QoJ3JlZ2lzdGVycyBpdHNlbGYgd2l0aCB2aWRlby5qcycsIGZ1bmN0aW9uKGFzc2VydCkge1xuICBhc3NlcnQuZXhwZWN0KDIpO1xuXG4gIGFzc2VydC5zdHJpY3RFcXVhbChcbiAgICBQbGF5ZXIucHJvdG90eXBlLnBsYXllckRlYnVnZ2VyLFxuICAgIHBsdWdpbixcbiAgICAndmlkZW9qcy1wbGF5ZXItZGVidWdnZXIgcGx1Z2luIHdhcyByZWdpc3RlcmVkJ1xuICApO1xuXG4gIHRoaXMucGxheWVyLnBsYXllckRlYnVnZ2VyKCk7XG5cbiAgLy8gVGljayB0aGUgY2xvY2sgZm9yd2FyZCBlbm91Z2ggdG8gdHJpZ2dlciB0aGUgcGxheWVyIHRvIGJlIFwicmVhZHlcIi5cbiAgdGhpcy5jbG9jay50aWNrKDEpO1xuXG4gIGFzc2VydC5vayhcbiAgICB0aGlzLnBsYXllci5oYXNDbGFzcygndmpzLXBsYXllci1kZWJ1Z2dlcicpLFxuICAgICd0aGUgcGx1Z2luIGFkZHMgYSBjbGFzcyB0byB0aGUgcGxheWVyJ1xuICApO1xufSk7XG4iXX0=
