getSecretData = function(key, callback) {
  fs.readFile('./secret.txt', 'utf8', function(err, res){
    if(err) throw new Error(err.message);
    else callback && callback( null, aes.decrypt(res, key) );
  })
};

var getSecretDataSynchronously = Meteor.wrapAsync(getSecretData);
var result = getSecretDataSynchronously(key);
return result;
