var DATA = require("./data.json");

function get(countryCode, language) {
  if (DATA.countryNames[language][countryCode] != null) {
    return DATA.countryNames[language][countryCode];
  }

  var key = DATA.country[countryCode];
  return DATA.countryNames[language][key];
}

module.exports = get;
