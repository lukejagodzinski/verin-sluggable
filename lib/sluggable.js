var events = {
  preSave: function () {
    var options = this._definition.behaviour('sluggable').options();
    if (!options.field) {
      throw new Meteor.Error(422, 'Field to slugify has not been specified');
    }
    if (!_.has(this, options.field)) {
      throw new Meteor.Error(422, 'Field `' + options.field + '` does not exist in the saving object');
    }
    this.slug = URLify(this[options.field]);
  },

  postRemove: function () {
    delete this.slug;
  }
};

Behaviour('sluggable', function () {
  this.options({
    field: null
  });

  this.events(events);
});
