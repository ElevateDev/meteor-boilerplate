Router.configure({
  loadingTemplate: 'loading',
  layoutTemplate: 'layout'
});

Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});

Meteor.startup(function(){
  Router.plugin('ensureSignedIn', {
      except: ["atSignIn", "atSignUp", "atForgotPwd", "atResetPwd", "atChangePwd", "atVerifyEmail",'home']
  });
});

Router.route('/', {
  name: "home"
});
