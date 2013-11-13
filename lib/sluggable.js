var events = {
  preSave: function () {
    var self = this,
        behavior = self._definition.behaviors.sluggable,
        options = behaviors.sluggable.options;
    if (!_.has(self, options.sluggableFieldName)) {
      throw new Meteor.Error(422, 'Object does not have `' + options.sluggableFieldName + '` field');
    }
    self.slug = URLify(self[options.sluggableFieldName]);
  },

  postRemove: function () {
    delete this.slug;
  }
};

Behavior('sluggable', {
  options: {
    sluggableFieldName: 'name',
    slugFieldName: 'slug'
  },

  events: events
});
