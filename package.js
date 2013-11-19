Package.describe({
  summary: 'Sluggable Behaviour (ZeitgeistModel) for Meteor'
});

Package.on_use(function (api) {
  api.use([
    'zeitgeist-model'
  ], ['client', 'server']);
  
  api.add_files([
    'lib/urlify.js',
    'lib/sluggable.js'
  ], ['client', 'server']);
});