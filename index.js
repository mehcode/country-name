var DATA = require("./data.json");

function get(countryCode, language) {
  if (DATA.countryNames[countryCode] != null) {
    return DATA.countryNames[countryCode];
  }

  var key = DATA.country[countryCode];
  return DATA.countryNames[language][key];
}

module.exports = get;
