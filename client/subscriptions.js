Meteor.subscribe("messages",{
	onReady: function() {
		autoScrolling = true;
		scrollToBottom(250);
		console.log("updated")
	}
});

