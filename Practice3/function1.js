// Using the function* Declaration in JavaScript
    // Declaring a generator function
    // here use yeild which hold previous data not return 

    function* generator(i) {
      yield i;
      yield i + 25;
      yield i + 50;
    }
    
    // Initialize the generator
    const generate = generator(25);
    
    // Console out the object returned
    // by the next() method
    let nextValObj = generate.next();
    
    // Console out the value of the object
    console.log(nextValObj.value);
    
    // Console out next iterations
    // of the generator
    console.log(generate.next().value);
    console.log(generate.next().value);
    
    // This value would be undefined as
    // the last defined one is i + 50
    console.log(generate.next().value);



    // example number 2

      function* powerup(n) {
      for (let num = n; ; num *= n) {
    
        // Yield out the current number
        yield num;
      }
    }
    for (let power of powerup(5)) {
    
      // Break if the number is
      // more than 1024
      if (power > 1024)
        break;
    
      console.log("Yielded:", power)
    }



