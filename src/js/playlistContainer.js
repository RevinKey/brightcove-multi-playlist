/**
 * @file playlistContainer.js
 */
 import videojs from 'video.js';

/**
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends Component
 * @class PlaylistContainer
 */
class PlaylistContainer extends videojs.Component {

  constructor(player, options) {

    super(player,options);

    //this.content(this.options_.content);

    this.el_ = videojs.createEl("div",
      {
        "id" : this.options_.id
      }

    );

    this.headerEl_ = videojs.createEl('div',
      {"className": 'header'}
    );
    this.headerEl_.innerHTML='<h2>' + this.options_.name + '</h2>';
    this.el_.appendChild(this.headerEl_);

    this.contentEl_ = videojs.createEl('div', {"className": 'main'});
    this.contentEl_.innerHTML = this.options_.content;
    this.el_.appendChild(this.contentEl_);

    this.footerEl_ = videojs.createEl('div', {"className" : 'footer'});
    this.el_.appendChild(this.footerEl_);
    return this;
  }

  content(value) {
    if (typeof value !== 'undefined') {
      this.contentEl_.innerHTML = value;
    }
    return this.contentEl_.innerHTML;
  }


}

videojs.Component.registerComponent('PlaylistContainer', PlaylistContainer);
export default PlaylistContainer;
