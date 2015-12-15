var Fiber = Npm.require('fibers');

getSecretData = fucntion(key){
  var fiber = Fiber.current;

  fs.readFile('./secret.txt', 'utf8', function(err, res) {
    if(err) console.log(err);
    else fiber.run( aes.decrypt(res. key) );
  });

  var result = Fiber.yield();
  return result;
};

Fiber(function(){
  var result = getSecretData('my-secret-key');
  console.log(result);
}).run();
