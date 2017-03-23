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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1yZXNvbHZlL2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2dsb2JhbC9kb2N1bWVudC5qcyIsIi9Vc2Vycy9rcmV5bm9sZHMvUmVwb3MvYnJpZ2h0Y292ZS1tdWx0aS1wbGF5bGlzdC9zcmMvanMvY29tcG9uZW50SURzLmpzIiwiL1VzZXJzL2tyZXlub2xkcy9SZXBvcy9icmlnaHRjb3ZlLW11bHRpLXBsYXlsaXN0L3NyYy9qcy9wbGF5bGlzdENvbnRhaW5lci5qcyIsIi9Vc2Vycy9rcmV5bm9sZHMvUmVwb3MvYnJpZ2h0Y292ZS1tdWx0aS1wbGF5bGlzdC9zcmMvcGx1Z2luLmpzIiwiL1VzZXJzL2tyZXlub2xkcy9SZXBvcy9icmlnaHRjb3ZlLW11bHRpLXBsYXlsaXN0L3Rlc3QvcGx1Z2luLnRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2ZPLElBQUksR0FBRyxHQUFHO0FBQ2IsZUFBVyxFQUFFLGFBQWE7QUFDMUIsV0FBTyxFQUFFLFdBQVc7QUFDcEIsWUFBUSxFQUFFLFlBQVk7O0FBRXRCLGFBQVMsRUFBRSxXQUFXO0FBQ3RCLFNBQUssRUFBRSxPQUFPO0FBQ2QsYUFBUyxFQUFFLFdBQVc7QUFDdEIsT0FBRyxFQUFFLGFBQWE7QUFDbEIsZ0JBQVksRUFBRSxjQUFjO0FBQzVCLG1CQUFlLEVBQUUsaUJBQWlCO0FBQ2xDLDJCQUF1QixFQUFFLHlCQUF5QjtBQUNsRCx1QkFBbUIsRUFBRSxxQkFBcUI7QUFDMUMseUJBQXFCLEVBQUUsdUJBQXVCO0FBQzlDLDZCQUF5QixF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bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIiLCJ2YXIgdG9wTGV2ZWwgPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fVxudmFyIG1pbkRvYyA9IHJlcXVpcmUoJ21pbi1kb2N1bWVudCcpO1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQ7XG59IGVsc2Uge1xuICAgIHZhciBkb2NjeSA9IHRvcExldmVsWydfX0dMT0JBTF9ET0NVTUVOVF9DQUNIRUA0J107XG5cbiAgICBpZiAoIWRvY2N5KSB7XG4gICAgICAgIGRvY2N5ID0gdG9wTGV2ZWxbJ19fR0xPQkFMX0RPQ1VNRU5UX0NBQ0hFQDQnXSA9IG1pbkRvYztcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRvY2N5O1xufVxuIiwiZXhwb3J0IGxldCBJRHMgPSB7XG4gICAgbXlCbGFja2JpcmQ6ICdteUJsYWNrYmlyZCcsXG4gICAgZmlsdGVyczogJ2JiRmlsdGVycycsXG4gICAgY29udHJvbHM6ICdiYkNvbnRyb2xzJyxcbiAgICAvL3NpemU6ICdiYlNpemUnLFxuICAgIHNlbmRFbWFpbDogJ3NlbmRFbWFpbCcsXG4gICAgbW9kYWw6ICdtb2RhbCcsXG4gICAgYnV0dG9uQmFyOiAnYnV0dG9uQmFyJyxcbiAgICBsb2c6ICdteUJsYWNrYmlyZCcsXG4gICAgYnRuVG9nZ2xlTG9nOiAnYnRuVG9nZ2xlTG9nJyxcbiAgICBidG5Ub2dnbGVTbGlkZXI6ICdidG5Ub2dnbGVTbGlkZXInLFxuICAgIGJ0blRvZ2dsZVBsYXllclNldHRpbmdzOiAnYnRuVG9nZ2xlUGxheWVyU2V0dGluZ3MnLFxuICAgIGJ0blRvZ2dsZUFkU2V0dGluZ3M6ICdidG5Ub2dnbGVBZFNldHRpbmdzJyxcbiAgICBidG5Ub2dnbGVQbGF5YmFja0luZm86ICdidG5Ub2dnbGVQbGF5YmFja0luZm8nLFxuICAgIGJ0blRvZ2dsZURlYnVnZ2VyU2V0dGluZ3M6ICdidG5Ub2dnbGVEZWJ1Z2dlclNldHRpbmdzJyxcbiAgICBjbGFzc2VzTGlzdDogJ2NsYXNzZXNMaXN0JyxcbiAgICBwbGF5ZXJTZXR0aW5nczogJ3BsYXllclNldHRpbmdzJyxcbiAgICBwbGF5YmFja0luZm86ICdwbGF5YmFja0luZm8nLFxuICAgIGRlYnVnZ2VyU2V0dGluZ3M6ICdkZWJ1Z2dlclNldHRpbmdzJyxcbiAgICBidG5Ub2dnbGVDbGFzc0xpc3Q6ICdidG5Ub2dnbGVDbGFzc0xpc3QnLFxuICAgIC8vYmlnUGxheUJ1dHRvblN0eWxlczogJ2JpZ1BsYXlCdXR0b25TdHlsZXMnLFxuICAgIC8vcG9zdGVyU3R5bGVzOiAncG9zdGVyU3R5bGVzJyxcbiAgICBsb2dUYWJsZTogJ2xvZ1RhYmxlJyxcbiAgICBsb2dMaXN0OiAnbG9nTGlzdCcsXG4gICAgbG9nSlNPTjogJ2xvZ0pTT04nLFxuICAgIG1lZGlhU2V0dGluZ3M6ICdtZWRpYVNldHRpbmdzJyxcbiAgICBhZFNldHRpbmdzOiAnYWRTZXR0aW5ncydcbn07XG4iLCIvKipcbiAqIEBmaWxlIHBsYXlsaXN0Q29udGFpbmVyLmpzXG4gKi9cbiBpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7UGxheWVyfE9iamVjdH0gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICogQGNsYXNzIFBsYXlsaXN0Q29udGFpbmVyXG4gKi9cbmNsYXNzIFBsYXlsaXN0Q29udGFpbmVyIGV4dGVuZHMgdmlkZW9qcy5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXG4gICAgc3VwZXIocGxheWVyLG9wdGlvbnMpO1xuXG4gICAgLy90aGlzLmNvbnRlbnQodGhpcy5vcHRpb25zXy5jb250ZW50KTtcblxuICAgIHRoaXMuZWxfID0gdmlkZW9qcy5jcmVhdGVFbChcImRpdlwiLFxuICAgICAge1xuICAgICAgICBcImlkXCIgOiB0aGlzLm9wdGlvbnNfLmlkXG4gICAgICB9XG5cbiAgICApO1xuXG4gICAgdGhpcy5oZWFkZXJFbF8gPSB2aWRlb2pzLmNyZWF0ZUVsKCdkaXYnLFxuICAgICAge1wiY2xhc3NOYW1lXCI6ICdoZWFkZXInfVxuICAgICk7XG4gICAgdGhpcy5oZWFkZXJFbF8uaW5uZXJIVE1MPSc8aDI+JyArIHRoaXMub3B0aW9uc18ubmFtZSArICc8L2gyPic7XG4gICAgdGhpcy5lbF8uYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXJFbF8pO1xuXG4gICAgdGhpcy5jb250ZW50RWxfID0gdmlkZW9qcy5jcmVhdGVFbCgnZGl2Jywge1wiY2xhc3NOYW1lXCI6ICdtYWluJ30pO1xuICAgIHRoaXMuY29udGVudEVsXy5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnNfLmNvbnRlbnQ7XG4gICAgdGhpcy5lbF8uYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50RWxfKTtcblxuICAgIHRoaXMuZm9vdGVyRWxfID0gdmlkZW9qcy5jcmVhdGVFbCgnZGl2Jywge1wiY2xhc3NOYW1lXCIgOiAnZm9vdGVyJ30pO1xuICAgIHRoaXMuZWxfLmFwcGVuZENoaWxkKHRoaXMuZm9vdGVyRWxfKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbnRlbnQodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5jb250ZW50RWxfLmlubmVySFRNTCA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250ZW50RWxfLmlubmVySFRNTDtcbiAgfVxuXG5cbn1cblxudmlkZW9qcy5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1BsYXlsaXN0Q29udGFpbmVyJywgUGxheWxpc3RDb250YWluZXIpO1xuZXhwb3J0IGRlZmF1bHQgUGxheWxpc3RDb250YWluZXI7XG4iLCJpbXBvcnQgUGxheWxpc3RDb250YWluZXIgZnJvbSAnLi9qcy9wbGF5bGlzdENvbnRhaW5lci5qcyc7XG5pbXBvcnQge1xuICAgIElEc1xufSBmcm9tICcuL2pzL2NvbXBvbmVudElEcy5qcyc7XG5cbi8vIERlZmF1bHQgb3B0aW9ucyBmb3IgdGhlIHBsdWdpbi5cbmNvbnN0IGRlZmF1bHRzID0ge307XG5cbi8vIG15IGRlYnVnZ2VyIGxldHNcbmxldCBfb3B0aW9ucyxcbiAgICBwbGF5ZXIsXG4gICAgYWRTZXR0aW5ncyxcbiAgICBsYXN0RXZlbnQgPSBcIlwiLFxuICAgIGN1cnJlbnRFdmVudCA9IFwiXCIsXG4gICAgTW9kYWwsXG4gICAgcGxheWxpc3RNb2RhbCxcbiAgICBjaGlsZCxcbiAgICBwbGF5bGlzdFRpdGxlLFxuICAgIGRhdGEsXG4gICAgaWQsXG4gICAgY2hpbGRTdHJpbmc7XG5cblxudmFyIHBsYXlsaXN0TW9kYWxCdXR0b24gPSB2aWRlb2pzLmV4dGVuZCh2aWRlb2pzLkJ1dHRvbiwge1xuICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbihwbGF5ZXIsIG9wdGlvbnMpIHtcblxuICAgICAgICB2aWRlb2pzLkJ1dHRvbi5jYWxsKHRoaXMsIHBsYXllciwgb3B0aW9ucyk7XG5cblxuICAgICAgICBwbGF5ZXIub24oJ2xvYWRzdGFydCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coX29wdGlvbnMpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEJpbmQgY2xpY2sgZXZlbnQgZm9yIGRlc2t0b3AgYnJvd3NlcnNcbiAgICAgICAgdGhpcy5vbignY2xpY2snLCBmdW5jdGlvbigpIHt9KTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdmlkZW9qcy5CdXR0b24ucHJvdG90eXBlLmNyZWF0ZUVsLmNhbGwodGhpcywgJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Zqcy1wbGF5bGlzdC1idXR0b24gdmpzLW1lbnUtYnV0dG9uIHZqcy1tZW51LWJ1dHRvbi1wb3B1cCB2anMtY29udHJvbCB2anMtYnV0dG9uJyxcbiAgICAgICAgICAgIGlubmVySFRNTDogJzxkaXYgY2xhc3M9XCJ2anMtbWVudSBwbGF5bGlzdE1vZGFsIHZqcy1pY29ucy1jaGFwdGVyc1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48dWwgaWQ9XCJ2anMtcGxheWxpc3QtbWVudVwiIGNsYXNzPVwidmpzLXBsYXlsaXN0LW1lbnUgdmpzLW1lbnUtY29udGVudFwicm9sZT1cIm1lbnVcIj48L3VsPjwvZGl2PjxzcGFuIGNsYXNzPVwidmpzLWNvbnRyb2wtdGV4dFwiPlBsYXlsaXN0PC9zcGFuPjwvZGl2PidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgJ2FyaWEtbGl2ZSc6ICdwb2xpdGUnLFxuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gZmluZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIHZhciBmb3VuZEVsZW1lbnQgPSBudWxsLFxuICAgICAgICBmb3VuZDtcblxuICAgIGZ1bmN0aW9uIHJlY3Vyc2UoZWxlbWVudCwgY2xhc3NOYW1lLCBmb3VuZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggJiYgIWZvdW5kOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBlbCA9IGVsZW1lbnQuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgIHZhciBjbGFzc2VzID0gZWwuY2xhc3NOYW1lICE9IHVuZGVmaW5lZCA/IGVsLmNsYXNzTmFtZS5zcGxpdChcIiBcIikgOiBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBqbCA9IGNsYXNzZXMubGVuZ3RoOyBqIDwgamw7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChjbGFzc2VzW2pdID09IGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kRWxlbWVudCA9IGVsZW1lbnQuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZvdW5kKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgcmVjdXJzZShlbGVtZW50LmNoaWxkTm9kZXNbaV0sIGNsYXNzTmFtZSwgZm91bmQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlY3Vyc2UoZWxlbWVudCwgY2xhc3NOYW1lLCBmYWxzZSk7XG4gICAgcmV0dXJuIGZvdW5kRWxlbWVudDtcbn1cblxuXG5sZXQgYnVpbGRDb250YWluZXIgPSAocGxheWVyKSA9PiB7XG4gICAgdmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudChcInBsYXlsaXN0TW9kYWxCdXR0b25cIiwgcGxheWxpc3RNb2RhbEJ1dHRvbik7XG5cbiAgICB2YXIgYnV0dG9uSW5kZXggPSBwbGF5ZXIuY29udHJvbEJhci5jaGlsZHJlbigpLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICAgIHJldHVybiBjLm5hbWUoKTtcbiAgICB9KS5pbmRleE9mKCdGdWxsc2NyZWVuVG9nZ2xlJykgLSAxO1xuICAgIHBsYXllci5jb250cm9sQmFyLnBsYXlsaXN0QnV0dG9uID0gcGxheWVyLmNvbnRyb2xCYXIuYWRkQ2hpbGQoJ3BsYXlsaXN0TW9kYWxCdXR0b24nLCBudWxsLCBidXR0b25JbmRleCk7XG4gICAgcGxheWVyLmNvbnRyb2xCYXIucGxheWxpc3RCdXR0b24uZWwoKS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG5cbiAgICBwbGF5bGlzdE1vZGFsID0gZmluZENsYXNzKHBsYXllci5jb250cm9sQmFyLnBsYXlsaXN0QnV0dG9uLmVsXywgXCJ2anMtcGxheWxpc3QtbWVudVwiKTtcbiAgICBjb25zb2xlLmxvZyhwbGF5bGlzdE1vZGFsKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9vcHRpb25zLnBsYXlsaXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwbGF5ZXIuY2F0YWxvZy5nZXRQbGF5bGlzdChfb3B0aW9ucy5wbGF5bGlzdHNbaV0uaWQsIGZ1bmN0aW9uKGVycm9yLCBwbGF5bGlzdCkge1xuICAgICAgICAgICAgZGF0YSA9IHBsYXllci5jYXRhbG9nLmRhdGE7XG4gICAgICAgICAgICBjaGlsZFN0cmluZyA9IFwiPGxpIGNsYXNzPSd2anMtcGxheWxpc3QtdGl0bGUnIGlkPSdcIiArIGRhdGEuaWQgKyBcIic+XCIgKyBkYXRhLm5hbWUgKyBcIjwvbGk+PHVsIHN0eWxlPSdkaXNwbGF5Om5vbmU7Jz5cIjtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGxheWxpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjaGlsZFN0cmluZyArPSBcIjxkaXYgY2xhc3M9J3Zqcy12aWRlby10aXRsZSB2anMtbWVudS1pdGVtJyBwbGF5bGlzdElkPSdcIiArIGRhdGEuaWQgKyBcIidpZD0nXCIgKyBwbGF5bGlzdFtqXS5pZCArIFwiJz5cIiArIHBsYXlsaXN0W2pdLm5hbWUgK1wiPGltZyBjbGFzcz0ndmpzLXRodW1ibmFpbCcgc3R5bGU9J3BvaW50ZXItZXZlbnRzOm5vbmU7J3NyYz1cIitwbGF5bGlzdFtqXS50aHVtYm5haWwgK1wiPjwvaW1nPjwvZGl2PlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hpbGRTdHJpbmcgKz0gXCI8L3VsPlwiO1xuICAgICAgICAgICAgcGxheWxpc3RNb2RhbC5pbm5lckhUTUwgKz0gY2hpbGRTdHJpbmc7XG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHBsYXlsaXN0TW9kYWwuY2hpbGROb2Rlcy5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gcGxheWxpc3RNb2RhbC5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICAgIGlmIChwbGF5bGlzdE1vZGFsLmNoaWxkTm9kZXNbeF0uY2xhc3NOYW1lID09PSAndmpzLXBsYXlsaXN0LXRpdGxlJykge1xuICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdE1vZGFsLmNoaWxkTm9kZXNbeF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qcGxheWVyLmNhdGFsb2cuZ2V0UGxheWxpc3QoZXZ0LmN1cnJlbnRUYXJnZXQuaWQsIGZ1bmN0aW9uKGVycm9yLCBwbGF5bGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5jYXRhbG9nLmxvYWQocGxheWxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5wbGF5bGlzdC5jdXJyZW50SXRlbSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7Ki9cbiAgICAgICAgICAgICAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGV2dC50YXJnZXQubmV4dFNpYmxpbmcuc3R5bGUuZGlzcGxheT09PVwibm9uZVwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2dC50YXJnZXQubmV4dFNpYmxpbmcuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnRhcmdldC5uZXh0U2libGluZy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5bGlzdE1vZGFsLmNoaWxkTm9kZXNbeF0udGFnTmFtZSA9PT0gJ1VMJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IHBsYXlsaXN0TW9kYWwuY2hpbGROb2Rlc1t4XTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCB0ZW1wLmNoaWxkTm9kZXMubGVuZ3RoOyB6KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAuY2hpbGROb2Rlc1t6XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5jYXRhbG9nLmdldFBsYXlsaXN0KGV2dC5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXMucGxheWxpc3RJZC52YWx1ZSwgZnVuY3Rpb24oZXJyb3IsIHBsYXlsaXN0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmNhdGFsb2cubG9hZChwbGF5bGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcih2YXIgayA9MDsgayA8IHBsYXlsaXN0Lmxlbmd0aDsgaysrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGV2dC50YXJnZXQuaWQgPT09IHBsYXlsaXN0W2tdLmlkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheWxpc3QuY3VycmVudEl0ZW0oayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn07XG5cblxubGV0IHNldE9wdGlvbnMgPSAob3B0KSA9PiB7XG4gICAgX29wdGlvbnMgPSBvcHQ7XG4gICAgaWYgKF9vcHRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX29wdGlvbnMucGxheWxpc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfb3B0aW9ucy5wbGF5bGlzdHNbaV0uaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5cbi8qKlxuICogRnVuY3Rpb24gdG8gaW52b2tlIHdoZW4gdGhlIHBsYXllciBpcyByZWFkeS5cbiAqXG4gKiBUaGlzIGlzIGEgZ3JlYXQgcGxhY2UgZm9yIHlvdXIgcGx1Z2luIHRvIGluaXRpYWxpemUgaXRzZWxmLiBXaGVuIHRoaXNcbiAqIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlIHBsYXllciB3aWxsIGhhdmUgaXRzIERPTSBhbmQgY2hpbGQgY29tcG9uZW50c1xuICogaW4gcGxhY2UuXG4gKlxuICogQGZ1bmN0aW9uIG9uUGxheWVyUmVhZHlcbiAqIEBwYXJhbSAgICB7UGxheWVyfSBwbGF5ZXJcbiAqIEBwYXJhbSAgICB7T2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqL1xuY29uc3Qgb25QbGF5ZXJSZWFkeSA9IChiY3BsYXllciwgb3B0aW9ucykgPT4ge1xuXG4gICAgY29uc29sZS5sb2coJ0JyaWdodGNvdmUgUGxheWVyIG11bHRpUGxheWxpc3QgbG9hZGVkJyk7XG5cbiAgICAvL2V2ZW50cyA9IGJjcGxheWVyLmRlYnVnZ2VyV2luZG93LmdldEV2ZW50cztcblxuICAgIC8vYmNwbGF5ZXIuYWRkQ2xhc3MoJ3Zqcy1wbGF5ZXItZGVidWdnZXInKTtcblxuICAgIGxldCBmb250YXdlc29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBmb250YXdlc29tZS5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgZm9udGF3ZXNvbWUuaHJlZiA9IFwiLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4wLjMvY3NzL2ZvbnQtYXdlc29tZS5jc3NcIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvbnRhd2Vzb21lKTtcblxuICAgIHNldE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICBidWlsZENvbnRhaW5lcihiY3BsYXllcik7XG5cbn07XG4vKipcbiAqIEEgQnJpZ2h0Y292ZSB2aWRlby5qcyBwbHVnaW4uXG4gKlxuICogSW4gdGhlIHBsdWdpbiBmdW5jdGlvbiwgdGhlIHZhbHVlIG9mIGB0aGlzYCBpcyBhIHZpZGVvLmpzIGBQbGF5ZXJgXG4gKiBpbnN0YW5jZS4gWW91IGNhbm5vdCByZWx5IG9uIHRoZSBwbGF5ZXIgYmVpbmcgaW4gYSBcInJlYWR5XCIgc3RhdGUgaGVyZSxcbiAqIGRlcGVuZGluZyBvbiBob3cgdGhlIHBsdWdpbiBpcyBpbnZva2VkLiBUaGlzIG1heSBvciBtYXkgbm90IGJlIGltcG9ydGFudFxuICogdG8geW91OyBpZiBub3QsIHJlbW92ZSB0aGUgd2FpdCBmb3IgXCJyZWFkeVwiIVxuICpcbiAqIEBmdW5jdGlvbiBwbGF5ZXJEZWJ1Z2dlclxuICogQHBhcmFtICAgIHtPYmplY3R9IFtvcHRpb25zPXt9XVxuICogICAgICAgICAgIEFuIG9iamVjdCBvZiBvcHRpb25zIGxlZnQgdG8gdGhlIHBsdWdpbiBhdXRob3IgdG8gZGVmaW5lLlxuICovXG5jb25zdCBtdWx0aVBsYXlsaXN0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHRoaXMucmVhZHkoKCkgPT4ge1xuXG4gICAgICAgIF9vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgb25QbGF5ZXJSZWFkeSh0aGlzLCB2aWRlb2pzLm1lcmdlT3B0aW9ucyhkZWZhdWx0cywgX29wdGlvbnMpKTtcbiAgICB9KTtcbn07XG5cbi8vIFJlZ2lzdGVyIHRoZSBwbHVnaW4gd2l0aCB2aWRlby5qcy5cbnZpZGVvanMucGx1Z2luKCdtdWx0aVBsYXlsaXN0JywgbXVsdGlQbGF5bGlzdCk7XG5cbi8vIEluY2x1ZGUgdGhlIHZlcnNpb24gbnVtYmVyLlxubXVsdGlQbGF5bGlzdC5WRVJTSU9OID0gJ19fVkVSU0lPTl9fJztcblxuZXhwb3J0IGRlZmF1bHQgbXVsdGlQbGF5bGlzdDtcbiIsImltcG9ydCBkb2N1bWVudCBmcm9tICdnbG9iYWwvZG9jdW1lbnQnO1xuXG5pbXBvcnQgUVVuaXQgZnJvbSAncXVuaXQnO1xuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcbmltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuaW1wb3J0IHBsdWdpbiBmcm9tICcuLi9zcmMvcGx1Z2luJztcblxuY29uc3QgUGxheWVyID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ1BsYXllcicpO1xuXG5RVW5pdC50ZXN0KCd0aGUgZW52aXJvbm1lbnQgaXMgc2FuZScsIGZ1bmN0aW9uKGFzc2VydCkge1xuICBhc3NlcnQuc3RyaWN0RXF1YWwodHlwZW9mIEFycmF5LmlzQXJyYXksICdmdW5jdGlvbicsICdlczUgZXhpc3RzJyk7XG4gIGFzc2VydC5zdHJpY3RFcXVhbCh0eXBlb2Ygc2lub24sICdvYmplY3QnLCAnc2lub24gZXhpc3RzJyk7XG4gIGFzc2VydC5zdHJpY3RFcXVhbCh0eXBlb2YgdmlkZW9qcywgJ2Z1bmN0aW9uJywgJ3ZpZGVvanMgZXhpc3RzJyk7XG4gIGFzc2VydC5zdHJpY3RFcXVhbCh0eXBlb2YgcGx1Z2luLCAnZnVuY3Rpb24nLCAncGx1Z2luIGlzIGEgZnVuY3Rpb24nKTtcbn0pO1xuXG5RVW5pdC5tb2R1bGUoJ3ZpZGVvanMtcGxheWVyLWRlYnVnZ2VyJywge1xuXG4gIGJlZm9yZUVhY2goKSB7XG5cbiAgICAvLyBNb2NrIHRoZSBlbnZpcm9ubWVudCdzIHRpbWVycyBiZWNhdXNlIGNlcnRhaW4gdGhpbmdzIC0gcGFydGljdWxhcmx5XG4gICAgLy8gcGxheWVyIHJlYWRpbmVzcyAtIGFyZSBhc3luY2hyb25vdXMgaW4gdmlkZW8uanMgNS4gVGhpcyBNVVNUIGNvbWVcbiAgICAvLyBiZWZvcmUgYW55IHBsYXllciBpcyBjcmVhdGVkOyBvdGhlcndpc2UsIHRpbWVycyBjb3VsZCBnZXQgY3JlYXRlZFxuICAgIC8vIHdpdGggdGhlIGFjdHVhbCB0aW1lciBtZXRob2RzIVxuICAgIHRoaXMuY2xvY2sgPSBzaW5vbi51c2VGYWtlVGltZXJzKCk7XG5cbiAgICB0aGlzLmZpeHR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVuaXQtZml4dHVyZScpO1xuICAgIHRoaXMudmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgIHRoaXMuZml4dHVyZS5hcHBlbmRDaGlsZCh0aGlzLnZpZGVvKTtcbiAgICB0aGlzLnBsYXllciA9IHZpZGVvanModGhpcy52aWRlbyk7XG4gIH0sXG5cbiAgYWZ0ZXJFYWNoKCkge1xuICAgIHRoaXMucGxheWVyLmRpc3Bvc2UoKTtcbiAgICB0aGlzLmNsb2NrLnJlc3RvcmUoKTtcbiAgfVxufSk7XG5cblFVbml0LnRlc3QoJ3JlZ2lzdGVycyBpdHNlbGYgd2l0aCB2aWRlby5qcycsIGZ1bmN0aW9uKGFzc2VydCkge1xuICBhc3NlcnQuZXhwZWN0KDIpO1xuXG4gIGFzc2VydC5zdHJpY3RFcXVhbChcbiAgICBQbGF5ZXIucHJvdG90eXBlLnBsYXllckRlYnVnZ2VyLFxuICAgIHBsdWdpbixcbiAgICAndmlkZW9qcy1wbGF5ZXItZGVidWdnZXIgcGx1Z2luIHdhcyByZWdpc3RlcmVkJ1xuICApO1xuXG4gIHRoaXMucGxheWVyLnBsYXllckRlYnVnZ2VyKCk7XG5cbiAgLy8gVGljayB0aGUgY2xvY2sgZm9yd2FyZCBlbm91Z2ggdG8gdHJpZ2dlciB0aGUgcGxheWVyIHRvIGJlIFwicmVhZHlcIi5cbiAgdGhpcy5jbG9jay50aWNrKDEpO1xuXG4gIGFzc2VydC5vayhcbiAgICB0aGlzLnBsYXllci5oYXNDbGFzcygndmpzLXBsYXllci1kZWJ1Z2dlcicpLFxuICAgICd0aGUgcGx1Z2luIGFkZHMgYSBjbGFzcyB0byB0aGUgcGxheWVyJ1xuICApO1xufSk7XG4iXX0=
