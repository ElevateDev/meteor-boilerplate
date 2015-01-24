Router.configure({
  loadingTemplate: 'loading',
  layout: 'layout'
});

Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});
