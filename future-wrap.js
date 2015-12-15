getSecretData = function(key, callback){
  fs.readFile('./secret.txt', 'utf8', function(err, res){
    if(err) throw new Error(err.message);
    else callback && callback( null, aes.decrypt(res. key) );
  })
};

var getSecretDataSynchronously = Future.wrap(getSecretData);

(function(){
  var result = getSecretDataSynchronously('my-secret-key').wait();
  console.log(result);
}.future())();
