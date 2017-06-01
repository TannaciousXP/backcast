var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    console.log(video);
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
  }

});
