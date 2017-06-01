var VideoListEntryView = Backbone.View.extend({


  render: function() {
    console.log(this.model);
    //console.log('inside VideoListEntryViews render function');
    this.$el.html(this.template(this.model.attributes));
    let imgUrl = this.model.attributes.snippet.thumbnails.default.url;
    this.$el.find('.media-object').attr('src', imgUrl);
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
