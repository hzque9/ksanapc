﻿define(['../cli-js/rpc'],
function(host) {
	var makeinf=function(name) {
		return (
			function(opts,callback) {
				host.exec(callback,0,"yase",name,opts);
			});
	}
	
	var exports={};
	
	exports.initialize=makeinf("initialize");
	exports.phraseSearch=makeinf("phraseSearch");
	exports.getText=makeinf("getText");
	exports.getTextByTag=makeinf("getTextByTag");
	exports.closestTag=makeinf("closestTag");
	exports.getTagAttr=makeinf("getTagAttr");
	exports.getTagInRange=makeinf("getTagInRange");
	exports.buildToc=makeinf("buildToc");
	
	exports.fillText=makeinf("fillText");
	exports.getRange=makeinf("getRange");
	exports.findTag=makeinf("findTag");
	exports.getRaw=makeinf("getRaw");
	exports.getBlob=makeinf("getBlob");
	exports.customfunc=makeinf("customfunc");
	exports.getTagInRange=makeinf("getTagInRange");
	exports.exist=makeinf("exist");
	

//	exports.getpage=makeinf("getpage");
//	exports.fuzzysearch=makeinf("fuzzysearch");
	//exports.version='0.0.20'; //this is a quick hack
	host.exec(function(err,data){
		exports.version=data;
	},0,"yase","version",{});

	return exports;
});