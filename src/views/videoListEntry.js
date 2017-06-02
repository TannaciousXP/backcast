var VideoListEntryView = Backbone.View.extend({
  
  events: {
    'click .video-list-entry-title': 'handleClick'
  },
  
  handleClick: function() {
    console.log('in click');
    this.model.select();
  },

  render: function() {    
    this.$el.html(this.template(this.model.attributes));
    let imgUrl = this.model.attributes.snippet.thumbnails.default.url;
    this.$el.find('.media-object').attr('src', imgUrl);
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
