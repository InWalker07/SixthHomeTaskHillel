spec:{
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (i === 5 && j === 5) {
            break spec;
          }
          console.log(i, j);
        }
       }
}