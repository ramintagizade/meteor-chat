Meteor.publish("messages",function(){
	console.log("published messages");
	return Messages.find();
});
