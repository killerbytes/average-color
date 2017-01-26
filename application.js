
function ColorUtils(){

  //Split string to array, accepts color:string returns array[]
  convertToArray = function(color){
    let arr = [];
    color = color.substr(1).match(/.{2}/g);
    color.forEach(i=>{
      arr.push(parseInt(i, 16));
    })
    return arr;
  }

  //Computes average of 2 arrays, accepts 2 arrays returns array[]
  computeAverage = function(arr1, arr2){
    return arr1.map(function(i, index){
      return Math.floor((i + arr2[index]) / 2);
    })  
  }

  //Convert to Hex: accepts arr:array returns array<string>
  toHex = function(arr){
    return arr.map(i=>{
      return ("0"+ i.toString(16)).slice(-2);
    })
  }

  //Takes 2 hex value args, color1:array, color2:array returns string
  getAverage = function(color1, color2){
    let average = computeAverage(convertToArray(color1), convertToArray(color2))
    return `#${toHex(average).join('')}`;
  }
  return {
    getAverage: getAverage
  }
}


function onSubmit(){
  let color1 = document.getElementById('color1').value;
  let color2 = document.getElementById('color2').value;
  
  let colorUtils = new ColorUtils(); //initialize APP

  let result = colorUtils.getAverage(color1,color2);

  document.getElementById('result').value = result; //print result
}

//Bind events on page load
window.onload = function(){
  var el = document.getElementById('btnSubmit');
  el.addEventListener('click', onSubmit, false);
}