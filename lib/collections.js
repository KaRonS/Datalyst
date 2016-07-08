Scrapes = new Mongo.Collection("scrapes");
Scrapes.allow({ 
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});
