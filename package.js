Package.describe({
  summary: 'Sluggable behavior for Meteor\'s Verin Model package'
});

Package.on_use(function (api) {
  api.use([
    'verin-model'
  ], ['client', 'server']);
  
  api.add_files([
    'lib/urlify.js',
    'lib/sluggable.js'
  ], ['client', 'server']);
});