'use strict';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Template.message.onRendered(function(){
	if(autoScrolling ){
		scrollToBottom(250);
	}
	else { 
		if(Meteor.user() && this.data.username!==Meteor.user().username){
			thereAreUnreadMessages.set(true);
		}
	}

});
Template.messages.events({
	"keyup input": (e) => {
		if(e.which == "13"  && e.target.value!=""){
			Meteor.call("insertMessage",e.target.value);
			e.target.value = "";
			scrollToBottom(250); 
		}
	},
	"scroll .messages": (e) => {
		var close = 70;
		var messageWin = $(".messages");
		var scrollH = messageWin.prop("scrollHeight");
		var scroolB = messageWin.prop("scrollTop") + messageWin.height();
		var checkAtBottom = scroolB > (scrollH-close);
		autoScrolling = checkAtBottom ? false : true;
		if(checkAtBottom){
			thereAreUnreadMessages.set(false);
		}
	},
});
Template.messages.helpers({
	recentMessages : () => {
		return Messages.find({},{sort:{time:1}});
	}
});
Template.body.helpers({
	thereAreUnreadMessages: function () {
      return thereAreUnreadMessages.get();
    }
});
Template.body.events({
	"click .more-messages" : () => {
		scrollToBottom(400);
		thereAreUnreadMessages.set(false);
	}
})