var methods = {
  slugify: URLify
};

Behaviour('sluggable', function () {
  this.fields({
    slug: null
  });

  this.required({
    slug: 'The `slug` attribute is required'
  });

  this.methods(methods);

  this.events({
    preSave: function () {
    }
  });
});
