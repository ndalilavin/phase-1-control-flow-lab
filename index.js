function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) {
    return 'This one is on me!'
  } else if (feet > 2000 && feet < 2500) {
    return 'I will gladly take your thirty bucks.'
  }else {
    return 'No can do.'
  }
}

function ternaryCheckCity(){
  // Write your code here!
}

function switchOnCharmFromTip(){
  // Write your code here!
}

function ternaryCheckCity (city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

ternaryCheckCity(NYC);
ternaryCheckCity(Pittsburgh);

function switchOnCharmFromTip(tip) {
  switch (tip){
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default: 
    return "Bye.";
  }
}
