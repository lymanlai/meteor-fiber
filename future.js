var Future = Npm.require('fibers/future');

getSecretData = function(key) {
  var future = new Future;

  fs.readFile('./secret.txt', 'utf8', function(err, res){
    if(err) console.log(err);
    else future.return( aes.decrypt(res. key) );
  });

  return future;
};

(function(){
  var result = getSecretData('my-secret-key').wait();
  
  console.log(result);
}.future())();
