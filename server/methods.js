Meteor.methods({
	"insertMessage" : (message) =>  {
		if(!Meteor.userId()){
			throw new Meteor.Error("Not authorized");
		}
		let now = Date.now();
		let username = Meteor.user().username;
		return Messages.insert({message:message,time:now,username:username});
	}
});