function palindrome(str) {
  let regex = /[a-z0-9]/ig
  let string = str.match(regex)

  let original = string.join("").toLowerCase()
  let reverseString = string.reverse().join("").toLowerCase()

  if (original == reverseString) {
    return true
  } else {
    return false
  }
}

palindrome("eye");