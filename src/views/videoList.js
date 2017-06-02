var VideoListView = Backbone.View.extend({
  
  intialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    console.log('calling render');
    this.$el.children().detach();
    this.$el.html('<ul class="video-list"></ul>');
    this.collection.forEach(this.renderVideo, this);
    return this; 
  },
  
  renderVideo: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$el.find('.video-list').append(videoListEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
