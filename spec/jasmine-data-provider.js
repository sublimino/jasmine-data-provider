// Data provider code
function using(name, values, func) {
  for (var i = 0, count = values.length; i < count; i++) {
    if (Object.prototype.toString.call(values[i]) !== '[object Array]') {
      values[i] = [values[i]];
    }
    func.apply(this, values[i]);
    valuesJson = JSON.stringify(values[i]);
    if (!(typeof process !== "undefined" && process.ENV && process.ENV.TERM)) {
      var maxDescriptionLength = 35;
      if (valuesJson.length > maxDescriptionLength) {
        valuesJson = valuesJson.substr(0, maxDescriptionLength) + '...';
      }
    }
    jasmine.currentEnv_.currentSpec.description += ' (with "' + name + '" using ' + valuesJson + ')';
  }
}
