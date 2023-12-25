const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(boolean) {
    this.isBackwards = boolean;
  }
  encrypt(text, key) {
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    }

    let result = "";
    let j = 0;
    text = text.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < text.length; i++) {
      let aCharCode = "A".charCodeAt(0);
      let zCharCode = "Z".charCodeAt(0);

      if (text.charCodeAt(i) >= aCharCode && text.charCodeAt(i) <= zCharCode) {
        let textCharCode = text.charCodeAt(i) - aCharCode;
        let keyCharCode = key.charCodeAt(j % key.length) - aCharCode;

        result += String.fromCharCode(
          aCharCode + ((textCharCode + keyCharCode) % 26)
        );
        j++;
      } else {
        result += text[i];
      }
    }

    return this.isBackwards === false
      ? result.split("").reverse().join("")
      : result;
  }
  decrypt(text, key) {
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    }

    let result = "";
    let j = 0;
    text = text.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < text.length; i++) {
      let aCharCode = "A".charCodeAt(0);
      let zCharCode = "Z".charCodeAt(0);

      if (text.charCodeAt(i) >= aCharCode && text.charCodeAt(i) <= zCharCode) {
        let textCharCode = text.charCodeAt(i) - aCharCode;
        let keyCharCode = key.charCodeAt(j % key.length) - aCharCode;

        result += String.fromCharCode(
          aCharCode + ((textCharCode - keyCharCode + 26) % 26)
        );
        j++;
      } else {
        result += text[i];
      }
    }

    return this.isBackwards === false
      ? result.split("").reverse().join("")
      : result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
