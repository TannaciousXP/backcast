var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    // var videos = new Videos(exampleVideoData);
    // this.collection = videos;
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    new VideoListView({el: '.list', collection: this.collection}).render();
    new SearchView({el: '.search'}).render();
    this.player = new VideoPlayerView({el: '.player', model: this.collection.models[0], collection: this.collection});
    return this;
  },
 
  template: templateURL('src/templates/app.html')

});

