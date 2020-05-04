const fs = require("fs");
const path = require("path");

function handleMessage(message, product) {
    let [prop, response] = _findContext(message);

    if (response && product[prop]) {
        if (Array.isArray(product[prop])) {
            product[prop].forEach((feature) => {
                response += "\n" + feature;
            });
        } else {
            response += product[prop];
        }

        return [prop, response];
    }

    return ['', 'Aguarde um instante, o vendedor já irá te atender'];
}

function findTagComment(message) {
    let [prop, response] = _findContext(message);
    return prop;
}

function findTags() {
    let data = fs.readFileSync(path.join(__dirname, "schema.json"));
    let schema = JSON.parse(data).tasks;
    let tags = [];
    schema.forEach((s) => {
        tags.push(s.identifier);
    });
    return tags;
}

function _findContext(message) {
    let data = fs.readFileSync(path.join(__dirname, "schema.json"));
    let schema = JSON.parse(data).tasks;
    let words = message.split(" ");
    let prop = "";
    let response = "";
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

    return [prop, response];
}

module.exports = {
    _findContext,
    handleMessage,
    findTagComment,
    findTags,
};
