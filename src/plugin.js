import PlaylistContainer from './js/playlistContainer.js';
import {
    IDs
} from './js/componentIDs.js';

// Default options for the plugin.
const defaults = {};

// my debugger lets
let _options,
    player,
    adSettings,
    lastEvent = "",
    currentEvent = "",
    Modal,
    id,
    allPlayerEventsJSON,
    allPlayerEvents = [],
    currentDuration,
    currentSource,
    currentMedia,
    logTypes = {
        array: 'array',
        table: 'table',
        list: 'list',
        json: 'json'
    };
// Array of events I came up with by watching debugger window and using documentation
let playerEvents = [
    'ready', // vidojs_component
    'durationchange', // videojs_player, videojs_swf, videojs_contrib_hls
    'ended', // videojs_contrib_ads, videojs_player, videojs_swf, videojs_qos
    'error', // videojs_player
    'firstplay', // videojs_player
    'fullscreenchange', // videojs_qos, videojs_player
    'loadedalldata',
    'loadeddata', // videojs_player, videojs_swf
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
    'timeupdate'
];

let getPlayerEvents = () => {
    allPlayerEventsJSON = videojs.getData(player.el_).handlers;


    for (prop in allPlayerEventsJSON) {
        allPlayerEvents.push(prop);
    }

    allPlayerEvents.sort();

    for (i = 1; i < allPlayerEvents.length; i++) {
        console.log(allPlayerEvents[i]);
    }
};

let listenForPlayerEvents = (player) => {

    player.one('durationchange', function(e) {});

    let playCounter = 0;
    let msgStr, currentTime, previousTime, levelStr = 'debug';
    for (let i = 0; i < playerEvents.length; i++) {
        player.on(playerEvents[i], function(e) {
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
    constructor: function(player, options) {

        videojs.Button.call(this, player, options);


        player.on('loadstart', function() {
            console.log(_options);

        });

        // Bind click event for desktop browsers
        this.on('click', function() {});
    },

    createEl: function() {
        return videojs.Button.prototype.createEl.call(this, 'button', {
            className: 'vjs-playlist-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button',
            innerHTML: '<div class="vjs-menu playlistModal vjs-icons-chapters" role="presentation"><ul class="vjs-playlist-menu"role="menu"></ul></div><span class="vjs-control-text">Playlist</span></div>'
        }, {
            'aria-live': 'polite',
        });
    }
});
let buildContainer = (player) => {
    videojs.registerComponent("playlistModalButton", playlistModalButton);

    var buttonIndex = player.controlBar.children().map(function(c) {
        return c.name();
    }).indexOf('FullscreenToggle') - 1;
    player.controlBar.testButton = player.controlBar.addChild('playlistModalButton', null, buttonIndex);
    player.controlBar.testButton.el().setAttribute('tabindex', 0);
    for (var j = 0; j < player.controlBar.testButton.el_.childNodes.length; j++) {
        if (player.controlBar.testButton.el_.childNodes[j].className === "vjs-menu playlistModal vjs-icons-chapters") {
            for (var i = 0; i < _options.playlists.length; i++) {

                var playlist1 = player.controlBar.testButton.el_.childNodes[j];
                playlist1 = playlist1.childNodes[0];
                player.catalog.getPlaylist(_options.playlists[i].id, function(error, playlist) {
                    player.catalog.load(playlist);
                    playlist1.innerHTML += "<li class='vjs-playlist-title vjs-menu-item' id='"+player.catalog.data.id +"'>" + player.catalog.data.name + "</li>";
                    for(var z=0;z < playlist1.childNodes.length; z++){
                    playlist1.childNodes[z].addEventListener('click', function(evt){
                        player.catalog.getPlaylist(evt.currentTarget.id, function(error, playlist){
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


let setOptions = (opt) => {
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
const onPlayerReady = (bcplayer, options) => {

    console.log('Brightcove Player multiPlaylist loaded');

    //events = bcplayer.debuggerWindow.getEvents;

    //bcplayer.addClass('vjs-player-debugger');

    let fontawesome = document.createElement('link');
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
const multiPlaylist = function(options) {
    this.ready(() => {

        _options = options;
        onPlayerReady(this, videojs.mergeOptions(defaults, _options));
    });
};

// Register the plugin with video.js.
videojs.plugin('multiPlaylist', multiPlaylist);

// Include the version number.
multiPlaylist.VERSION = '__VERSION__';

export default multiPlaylist;
