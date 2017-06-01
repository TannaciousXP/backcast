var VideoPlayerView = Backbone.View.extend({

  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(this.model.attributes));
    /*
    somehow we need to get a url -- is it contained inside exVidData?
    do we have to use one of the props in exVidData?
     let videoID = this.model.attributes.id.videoId;
    this.$el.find('.embed-responsive-item').attr('src', "https://www.youtube.com/embed/".concat);
    
    take the this.model.attributes.id.videoid, and concat it to the base
    url https://www.youtube.com/embed/
    */
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
