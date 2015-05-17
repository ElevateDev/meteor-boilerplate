/*
 * Subscriptions that should go here are only the subscriptions that influence routing.
 * All other subscriptions should be handled at the template level.
 */
var permenantSubs = new SubsManager({cacheLimit: 9999, expireIn: 9999});

Router.waitOn(function(){
  if( !Meteor.user() ){ 
    return [];
  }
  return;
});

/*
 * If the subscriptions need reset (for instance if they change organization )
 * permenantSubs.reset();
 */

AccountsTemplates.configure({
  onLogoutHook: function(){
    permenantSubs.clear();
  }
});
