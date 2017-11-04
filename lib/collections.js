import { ReactiveVar } from 'meteor/reactive-var';
Messages = new Meteor.Collection("messages");

var autoScrolling = false;
thereAreUnreadMessages = new ReactiveVar(false);
scrollToBottom = function scrollToBottom (duration) {
  var messageWindow = $(".messages");
  var scrollHeight = messageWindow.prop("scrollHeight");
  messageWindow.stop().animate({scrollTop: scrollHeight}, duration || 0);
};