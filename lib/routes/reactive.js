/*
 * Put trigger's that cause routing to a certain route here.
 * Be careful to avoid 2 routes constantly trying to route to each other.
 */

if( Meteor.isClient ){
  Router.onBeforeAction(function(){
    /*
     * Detect if we need to get terms approval or stripe information.
     */
    if( Meteor.userId() ){
      // detect some condition and handle routing
    }

    if( this.next ){ this.next(); }
  });

}
