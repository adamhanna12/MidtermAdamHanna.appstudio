btnSubmit.onclick=function(){
  let income = inptIncome.value
if (income < 30000) {
  lblTaxBracket.value = `With your income of ${income}, you are in the 8% tax bracket.`
  } else if (income >= 30000 && income < 99000) {
  lblTaxBracket.value = `With your income of ${income}, you are in the 15% tax bracket.`
  } else if (income >= 99000) {
 lblTaxBracket.value = `With your income of ${income}, you are in the 25% tax bracket.`
  }
}


btnGoAgain.onclick=function(){
  inptIncome = ``
 btnSubmit = ``
}
