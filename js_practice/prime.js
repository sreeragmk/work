var num=21
//check num is prime or not
//1......................24
  //2...................23
var top=0;
  for(i=2;i<num;i++){    //
      if(num %i==0){
         top=1;
         break;
      }
      
  }
  if(top==0){
      console.log("Its a prime");
  }
  else{
      console.log("Its not a prime");
  }