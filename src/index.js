module.exports = function check(str, bracketsConfig) {
  
  let counter = 1; 
  let brackets = []; 

  for (let i=0; i < bracketsConfig.length; i++) {
    brackets[i] = bracketsConfig[i][0] + bracketsConfig[i][1]; 
  } 

  while (counter && str.length) { 
    counter = 0; 
    for (let i=0; i < brackets.length; i++) { 
      if ( str.indexOf(brackets[i]) != -1 ) {
        str = str.substring(0, str.indexOf( brackets[i] )) + str.substring(str.indexOf( brackets[i] ) + 2);
	    counter = 1; 
      }; 
    } 
  } 

  if (str.length) return false; 
  else return true;

}
