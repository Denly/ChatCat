if(0 == Msg.find().count()){
	Msg.insert({
		sender: 'BirdEgg',
		text: 'Hi everyone',
		filepickerId: "skywtYkRhuNbJLJe3cAz",
		submitted: Date()
	});
	Msg.insert({
		sender: 'BirdEgg',
		text: 'yo',
		filepickerId: "skywtYkRhuNbJLJe3cAz",
		submitted: Date()
	})
	Msg.insert({
		sender: 'BirdEgg',
		text: 'ha',
		filepickerId: "skywtYkRhuNbJLJe3cAz",
		submitted: Date()
	})

}



if(Places.find().count()<3){
Places.insert({
  "loc": {
    "type" : "Point",
    "coordinates" : [ 
        -84.465176, 
        39.227033
    ]
  }
});

}

 //var xx = 

//console.log(xx.fetch());
