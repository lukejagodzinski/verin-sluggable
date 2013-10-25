Package.describe({
  summary: 'Viewable Behaviour (ZeitgeistModel) for Meteor'
});

Package.on_use(function (api) {
  api.use([
    'urlify',
    'zeitgeist-model'
  ], ['client', 'server']);
  
  api.add_files('lib/client/helpers.js', 'client');
  api.add_files('lib/viewable.js', ['client', 'server']);
});