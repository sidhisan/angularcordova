var fs = require('fs')
var source = fs.createReadStream('gradle.properties');
var dest = fs.createWriteStream('platforms/android/gradle.properties');

source.pipe(dest);
source.on('end', function() { console.log('Successfully gradle.properties moved!') });
source.on('error', function(err) {  console.log('error in move!') });
