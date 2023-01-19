function hello(name) {
    console.log(name)
  }
  hello('mohammed');
  
  function madlib (name, subject) {
    return name +  " 's favorite subject in school is " + subject
  }
  
  console.log(madlib("Mo", "Chemistry"));

  function tipAmount(bill, service) {
    if (service == 'good') {
      console.log(bill*0.2)
    } else if  (service == 'fair') {
      console.log(bill*0.15)
    } else if  (service == 'bad') {
      console.log(bill*0.1)
    } else {
      console.log('wrong entry')
    }
  }
  
  tipAmount(500, 'fair');

  function  totalAmount(bill, service){
    if(service == "good") {
      console.log(bill + (bill*0.20))
    } else if (service == "fair") {
      console.log(bill + (bill*0.15))
    } else if (service == "bad") {
      console.log(bill + (bill*0.1))
    }
  }
  
  totalAmount(600, 'bad')


  function splitAmount(bill,level,people){
    if (level == "good"){
      console.log((bill+bill*0.20)/people);
    }
      else if (level == "fair"){
      console.log((bill+bill*0.15)/people);
    }
      else if (level == "bad"){
      console.log((bill+bill*0.1)/people);
    }
  }
  
  splitAmount(400,'good',10)