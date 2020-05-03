const fs = require("fs");
const path = require("path");

function handleMessage(message, product) {
  let data = fs.readFileSync(path.join(__dirname, "schema.json"));
  let schema = JSON.parse(data).tasks;
  let response = "";
  let prop = "";

  let words = message.split(" ");
  schema.forEach((s) => {
    words.forEach((word) => {
      if (word.length > 1) {
        s.fields.forEach((field) => {
          let re = new RegExp(`${field}`, "gi");
          if (word.match(re)) {
            prop = s.identifier;
            response = s.actions.say;
          }
        });
      }
    });
  });

  if (response && product[prop]) {
    if (Array.isArray(product[prop])) {
      product[prop].forEach((feature) => {
        response += "\n" + feature;
      });
    } else {
      response += product[prop];
    }

    return response;
  }

  return;
}

module.exports = {
  handleMessage,
};
