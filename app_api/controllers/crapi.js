const cr = require('cr.js');
let client = new cr.Client();

module.exports.clanchest = function(req, res) {

  //Download the necessary data using cr.js client

  var clanId = req.params.id
  console.log("Processing with clanId : " + clanId)
  client.getClan(clanId).then(function(data){
  	console.log("Data" + JSON.stringify(data))
  	var name = data.name;
  	var result = data.clanChest.crowns;
  	var percent = data.clanChest.percent;
  	res.status(200).json({"name":name,"result":Number(result),"percent":percent});

  }).catch(function(error){
  	res.status(500).send("Probleme de récupéation des données")
  });
  	
 }

module.exports.membersClanChestCrowns = function(req, res) {

  //Download the necessary data using cr.js client

  var clanId = req.params.id
  console.log("Processing with clanId : " + clanId)
  client.getClan(clanId).then(function(data){
  	console.log("Data" + JSON.stringify(data))
  	var name=data.name;
  	var members=data.members;
  	var members = members.map(function(member){
  		return {"name":member.name, "clanChestCrowns":Number(member.clanChestCrowns), "roleName": member.roleName}
  	})
  	members.sort(function(a,b){
  		return a.clanChestCrowns - b.clanChestCrowns
  	})

  	res.status(200).json({"name":name,"members":members});

  }).catch(function(error){
  	res.status(500).send("Probleme de récupéation des données")
  });
  	
 }