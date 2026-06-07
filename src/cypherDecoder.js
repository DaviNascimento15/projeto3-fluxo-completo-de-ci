function decoder(message, skip = 1) {
  let decoderMessage = ""
  let utfValue

  for (let i = 0; i < message.length; i++) {
    utfValue = message.charCodeAt(i)
    if (utfValue >= 65 && utfValue <= 90) {
      utfValue = ((utfValue - 65 - skip + 26) % 26) + 65
      decoderMessage = decoderMessage.concat(String.fromCharCode(utfValue))
    }
    else if (utfValue >= 97 && utfValue <= 122) {
      utfValue = ((utfValue - 97 - skip + 26) % 26) + 97
      decoderMessage = decoderMessage.concat(String.fromCharCode(utfValue))
    }
    else {
      decoderMessage = decoderMessage.concat(message[i])
    }
  }
  return decoderMessage
}

module.exports = decoder