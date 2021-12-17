const regexList = [
  /^\d{3}-\d{3}-\d{4}$/,
  /^1 \d{3}-\d{3}-\d{4}$/,
  /^1 \(\d{3}\) \d{3}-\d{4}$/,
  /^\d{10}$/,
  /^\(\d{3}\)\d{3}-\d{4}$/,
  /^1\(\d{3}\)\d{3}-\d{4}$/,
  /^1 \d{3} \d{3} \d{4}$/
  ]

function telephoneCheck(str) {
  
  return regexList.some((check) => check.test(str))


}
telephoneCheck("555-555-5555");