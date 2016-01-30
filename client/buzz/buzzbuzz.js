Meteor.startup(function(){
	loadFilePicker('AgbGlQUT7CqMh4xLTCZQZz');
});

Template.room.helpers({
	msg: function(){
		return Msg.find();
	}
});