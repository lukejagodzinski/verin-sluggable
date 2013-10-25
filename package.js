Package.describe({
  summary: 'Sluggable Behaviour (ZeitgeistModel) for Meteor'
});

Package.on_use(function (api) {
  api.use([
    'urlify',
    'zeitgeist-model'
  ], ['client', 'server']);
  
  api.add_files('lib/sluggable.js', ['client', 'server']);
});