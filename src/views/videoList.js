var VideoListView = Backbone.View.extend({
  

  render: function() {
    this.$el.children().detach();
    //this.$el.html(this.template());
    this.$el.html('<ul class="video-list"></ul>');
    this.collection.forEach(this.renderVideo, this);
    return this; //why return?
  },
  
  renderVideo: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$el.find('.video-list').append(videoListEntryView.render());
  },
  
  /*
  add another function to render each individual video list entry
  inside that function -- you create a new instance of a videolistentryview
  and then call its render function
  */

  template: templateURL('src/templates/videoList.html')

});



/*
Video list needs to re-render when the videos collection is updated, so add a refer to the
videolist view and add some.on('change') listener;

In the og project, did we only instanitate the appview>?


If so, how did the movies view get a reference to the collection of movies?


This parallels the need for videolist to have a reference to the videos collection


App View

  render: function() {
    new MoviesView({
      el: this.$('#movies'),
      collection: this.collection
    }).render();
  }
  
  
=> Movies View

var MoviesView = Backbone.View.extend({

  initialize: function() {
    // your code here
    this.collection.on('sort', this.render, this);
  },

  render: function() {
    this.$el.empty();
    this.collection.forEach(this.renderMovie, this);
  },

  renderMovie: function(movie) {
    var movieView = new MovieView({model: movie});
    this.$el.append(movieView.render());
  }
  
=> MovieView

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }

});

*/