var Videos = Backbone.Collection.extend({

  model: Video,
  
  search: function(query) {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      key: window.YOUTUBE_API_KEY,
      data: {
        part: 'snippet',
        q: query,
        maxResults: 5,
        type: 'video', 
        videoEmbeddable: 'true'
      },
      //only fetch embeddables
      dataType: 'application/json', 
      success: function(data) {
        //we're going to need to limit the data to the first 5 of the
        //videos
        let newVideos = Videos(data.items);
        new AppView({collection: newVideos});
      },
      error: function(data) {
        console.error(data);
      }
    });
  }
});
