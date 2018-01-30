// Driver code:
// bag to store various start and end ip addresses
// using diabled to disabled some inputs as some are really huge
var ipRanges = [
    { start: "10.0.0.255", end: "10.0.1.2"},
    { start: "10.0.0.255", end: "10.0.0.255"},
    { start: "10.0.0.255", end: "10.0.1.0"},
    
    { start: "10.0.255.255", end: "10.1.255.2", disabled: false},
    { start: "10.0.255.255", end: "10.1.255.255", disabled: true}
  ];
  
  for (var i = 0; i < ipRanges.length; i++) {
    if (ipRanges[i].disabled) continue;
    var start = ipRanges[i].start;
    var end = ipRanges[i].end;
    console.log(`----${start} - ${end}-----`);
    generateIps(start, end);
  }
  
  function isIp1BiggerOrEqual(ip1, ip2) {
    var i = 0;
    var isSegEqual = true;
    while (i < 4) {
      var x = parseInt(ip1[i]);
  
      var y = parseInt(ip2[i]);
  
      if (x > y) {
        return true;
      } else if ( x < y) {
        return false;
      }
      isSegEqual = isSegEqual && (x === y);
      i++;
    }
  
    if (isSegEqual) {
      return true;
    }
    return false;
  }
  
  function generateIps(lower, upper) {
    "// noprotect";
    "use strict";
    var results = [];
    var currentSegs = lower.split(".");
    var upperSegs = upper.split(".");
  
    if (!isIp1BiggerOrEqual(currentSegs, upperSegs)) {
      results.push(currentSegs.join("."));
    }
  
    while (true) {
      var currentSeg = 3;
  
      while (currentSeg >= 0) {
        // check for each seg being lower than 255
        var currentSegValue = parseInt(currentSegs[currentSeg], 10);
        currentSegValue += 1;
  
        if (currentSegValue > 255) {
          currentSegValue = 0;
          currentSegs[currentSeg] = currentSegValue;
          currentSeg -= 1;
        } else {
          currentSegs[currentSeg] = currentSegValue;
          break;
        }
      }
  
  
      if (currentSeg < 0) {
        break;
      }
  
      currentSegs[currentSeg] = currentSegValue;
      // check against upper
      if (isIp1BiggerOrEqual(currentSegs, upperSegs)) {
        break;
      }
  
      results.push(currentSegs.join("."));
    }
  
    console.log(results);
  }