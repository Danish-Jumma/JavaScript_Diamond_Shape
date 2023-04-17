// ************* first part of d diamond *********//
let row = prompt('Enter Any Number Here')
  for (var i = 0; i <= row; i++) {
    for(var k = i; k <= row - 1; k++){
        document.write('&nbsp');
    }
    for (var j = 0; j <= i; j++) {
      document.write('*');
    }
    document.write('<br/>')
  }
  // ******** second part of diamond***********//
  for (var i = row -1 ; i >= 0; i--) {
    for(var k = i+1; k <= row; k++){
        document.write('&nbsp');
    }
    for (var j = 0; j <= i; j++) {
      document.write('*');
    }
    document.write('<br/>')
  }