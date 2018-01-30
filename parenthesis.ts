// 'abc' -> 'abc' 'acb' 'bac' 'bca' 'cab' 'cba'

function printAnagrams(inputString, currString, visited) {
  
    if (inputString.length === currString.length) {
      console.log(currString);
    }
  
  
    for (var i = 0; i < inputString.length; i++) {
        if (visited[i]) {
          continue;
        }

        visited[i] = true;
        printAnagrams(inputString, currString + inputString[i], visited);
        visited[i] = false;

    }
}



// dirver function 
printAnagrams("abc", "", []);

// '())' -> '()'
// '(()' -> '()'
// ')()
// ['(', '()'
// '((' => ""
// '))'

function getParanthesis(inputString) {
  var s = []; // stack
  
  if (!inputString) return;
  
  for (var i = 0, l = inputString.length; i < l ; i++) {
    if (inputString[i] === "(") {
      s.push("(");
    }
    
    if (inputString[i] === ")") {
      // keep popping until you have an opening "("
      var groups = [")"]; 
      while(true) {
        if (s.length === 0) break;
        var poppedChar = s.pop();
        if (poppedChar === ")") {
          // what to do?
        } else if (poppedChar === "(") {
          groups.push("(");
          break;
        } else {
          groups.push(poppedChar);
        }
      }

      groups = groups.reverse().join("");
      s.push(groups);
    }
  }
  
  var result = "";
  if (s.length) {
    result = s.pop();
    if (result === "(") {
      result = "";
    }
  }
  return result;
}