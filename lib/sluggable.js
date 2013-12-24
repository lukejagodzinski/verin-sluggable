var hooks = {
  beforeSave: function () {
    var self = this,
        behavior = self.constructor.schema.behaviors.sluggable,
        options = behavior.options;

    if (! options.canUpdate && self._id) {
      return;
    }

    // Check if fields are present in an object.
    _.each(options.fields, function (field) {
      if (! _.has(self, field)) {
        throw new Meteor.Error(422, 'Object does not have "' + field + '" field');
      }
    });

    // Get all needed field's values.
    var values = [];
    _.each(options.fields, function (field) {
      values.push(self[field]);
    });
    
    // Create slug.
    self.slug = URLify(values.join(' '));
  }
};

Behavior.create('sluggable', {
  constructor: function () {
    var self = this;

    self.options.fields = _.isArray(self.options.fields) ? self.options.fields : [self.options.fields];
  },

  options: {
    fields: ['name'],
    canUpdate: true
  },

  fields: {
    slug: null
  },

  hooks: hooks
});
