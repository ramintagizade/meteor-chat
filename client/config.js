import {Accounts} from 'meteor/accounts-base'
/*account config*/
Accounts.ui.config({
   passwordSignupFields: "USERNAME_ONLY"
});