var VideoPlayerView = Backbone.View.extend({

  // listen to a select
  initialize: function() {
    console.log('the collection within video player view', this.collection);
    this.listenTo(this.collection, 'select', this.selectVideo);
    this.render();
  },
  
  selectVideo: function(video) {
    console.log('before reassignment', this.model);
    this.model = video;
    console.log('after reassignment', this.model);
    this.render();
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
  
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
