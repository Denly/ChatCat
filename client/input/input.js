Template.input.helpers({
	filepickerId: function () {
		var obj = Session.get('newsImg');
		if (obj) {
			return obj.filepickerId;
		}else{
			return 'skywtYkRhuNbJLJe3cAz';
		}
	}
});

Template.input.events({

	'click .uploadImg': function(){
		console.log('ccc');
		filepicker.pickAndStore(
		{
			mimetypes: ['image/gif','image/jpeg','image/png'],
			multiple: false
		},{
			access:"public"
		},
		function(InkBlobs){
			var InkBlob = _.first(InkBlobs);
			var filepickerId = _.last(InkBlob.url.split("/"));
			console.log(JSON.stringify(InkBlob));

			Session.set('newsImg', {
				filepickerId: filepickerId,
				inkBlob:InkBlob
			});        

		},
		function(FPError){
			if(FPError && FPError.code !== 101)
				alert(FPError.toString());
		}
		);
	},
	'click .submit': function(){  
		var text = $('.msgtext').val();
		var img = Session.get('newsImg');
		img = img ? img.filepickerId : "skywtYkRhuNbJLJe3cAz";
		if (text) {
			/*
			var obj = Session.get('newsImg');
			_.extend(obj, {
				sender: 'eggegg',//$('name').val(),
				text: text,
				submitted: new Date()
			})*/
			var obj = {
				sender: $('.name').val(),//$('name').val(),
				text: text,
				filepickerId: img,
				submitted: new Date()
			};
			
			Msg.insert(obj,function(e,r){ console.log(e);console.log(r); });

		}
	}
});