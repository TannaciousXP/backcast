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
    let x = new videoList({collection: this.collection}).render();
    this.$el.html(x);
    return this;
  },

  template: templateURL('src/templates/app.html')

});

/*

*/