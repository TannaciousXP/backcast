var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
  },


  // render: function() {
  //   this.$el.html(this.template());
  //   this.$el.html();
  //   return this;
  // },
  
  render: function() {
    this.$el.html(this.template());
    console.log(this.$el.find('.list'));
    this.$el.find('.list').html();
    new VideoListView({el: '.list', collection: this.collection}).render();
    // new VideoListView({collection: this.collection}).render();

    return this;
  },
  
  // either console append to $el('.list')
  
  // or you pass a reference to the particular el you want the next layer
  // to append to 

  template: templateURL('src/templates/app.html')

});

/*

*/