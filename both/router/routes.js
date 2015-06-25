Router.route('/', {
  name: 'home'
});

Router.route('/admin', {
  name: 'dataReal',
  controller: 'dataRealController'
});


Router.plugin('ensureSignedIn', {
  only: ['dataReal']
});

Router.route('/podcast', {
  name: 'podcast',
  layoutTemplate: 'appLayout',
  template: 'home',
  yieldTemplates: {
    'podcast': {to: 'hContent'}
  }
});

Router.route('/stream', {
  name: 'stream',
  layoutTemplate: 'appLayout',
  template: 'home',
  yieldTemplates: {
    'stream': {to: 'hContent'}
  }
});