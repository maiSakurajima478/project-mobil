export default function generatePassword(passwordLength, includeUppercase, includeNumbers, includeSymbols) {
    let validChars = 'abcdefghijklmnopqrstuvwxyz';
  
    if (includeUppercase) validChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) validChars += '0123456789';
    if (includeSymbols) validChars += '!@#$%^&*()_+-={}[]|\\:;"<>,.?/~';
  
    let generatedPassword = '';
  
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }
  
    return generatedPassword;
}