Meteor.startup(function() {
  Accounts.ui.config({
    passwordSignupFields: 'EMAIL_ONLY'
  });

  AccountsEntry.config({
    homeRoute: '/sign-in',
    dashboardRoute: '/votes',
    profileRoute: '/profile',
    language: 'en',
    showSignupCode: false,
    logo: '/images/logo.png',
    extraSignUpFields: [{                     
      field: "name",                                  
      name: "",
      required: true
    }]
  });

  Accounts.onLogin(function() {
    Router.go(AccountsEntry.settings.dashboardRoute);
  });
});
