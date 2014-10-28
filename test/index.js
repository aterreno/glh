var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();

var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var server = require("../index.js");

describe('index', function () {
    it('should returns hello world', function (done) {

    	var options = {
	        method: "GET",
	        url: "/hello"
	    };

	    server.inject(options, function(response){ 
	    	expect(response.statusCode).to.equal(200);	    	
	    	expect(response.result).to.equal('hello world');	    	
	    });
        
        done();
    });
});