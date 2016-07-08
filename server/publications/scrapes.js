Meteor.publish('scrapes', function () {
  const selector = {};
  const options = {
    limit: 10
  };

  return Scrapes.find(selector, options);
});
