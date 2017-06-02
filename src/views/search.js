var SearchView = Backbone.View.extend({
  events: {
    'click .btn': 'handleSearchButtonClick'
  },
  
  handleSearchButtonClick: function () {
    /*
    get the text located in the input with class name = "form-control"
    take that text, bundle it up somehow, send to youtube api in an ajax get request
    in the success function of the ajax request
      create a new collection based off the received data
      instantiate a new appview instance, passing in the new collection
    */
    let query = $('.form-control').val();
    Videos.prototype.search(query);
    /*
    Questions for how to talk to yt api:
    what format is it expecting the data to be in?
    What format does yt send back data? -- hopefully
    json, but we may need to parse it further 
    what's the url gonna be?
    how do we attach the api key to all of our requests?
      somehow we need to specify a header (use lowercase for key name)
    */
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});

// 

