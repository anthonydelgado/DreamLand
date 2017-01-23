const Provider = require('../models').Provider;

Provider.sync({ force: true })
	.then( () => {
		Provider.bulkCreate([{
		  providerId:"ahJzfnNlYXJjaGJlcnRoYS1ocmRyFAsSB1Byb2dyYW0YgICA1raBhAoM"
			}, {
		  providerId:"ahJzfnNlYXJjaGJlcnRoYS1ocmRyFAsSB1Byb2dyYW0YgICA5u2N2gkM"
			}, {
		  providerId:"ahJzfnNlYXJjaGJlcnRoYS1ocmRyFAsSB1Byb2dyYW0YgICg5tHvgwoM"
			}, {
		  providerId:"ahJzfnNlYXJjaGJlcnRoYS1ocmRyFAsSB1Byb2dyYW0YgICApveSowsM"
			}, {
		  providerId:"ahJzfnNlYXJjaGJlcnRoYS1ocmRyFAsSB1Byb2dyYW0YgICAi9bSywkM"
			}, {
		  providerId:"ahJzfnNlYXJjaGJlcnRoYS1ocmRyFAsSB1Byb2dyYW0YgICAxtiIsgoM"
			}, {
		  providerId:"ahJzfnNlYXJjaGJlcnRoYS1ocmRyFAsSB1Byb2dyYW0YgICAlsXg-wkM"
			}, {
		  providerId:"ahJzfnNlYXJjaGJlcnRoYS1ocmRyFAsSB1Byb2dyYW0YgICg5tHvgwoM"
			}, {
		  providerId:"ahJzfnNlYXJjaGJlcnRoYS1ocmRyFAsSB1Byb2dyYW0YgICAuLnomAkM"
			}, {
		  providerId:"ahJzfnNlYXJjaGJlcnRoYS1ocmRyFAsSB1Byb2dyYW0YgICApveSowsM"
		  }
		])
	})
	.catch( (err) => {
		console.log(err);
	});