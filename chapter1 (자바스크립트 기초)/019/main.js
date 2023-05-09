for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}

// // // // // // // // // // // // //

function myFunction(myBool) {
  for (let i = 0; i < 10; i++) {
    if (myBool == true) {
      console.log(i);
    }
    if (myBool == false) {
      console.log("False");
    }
  }
}

myFunction(false);
