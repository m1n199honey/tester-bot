const path = require("path");
const fs = require("fs");

const codePath = path.join(__dirname, "codeDatabase");
for (const file of fs.readdirSync(codePath).filter((f) => f.endsWith(".js"))) {
    const code = require(path.join(codePath, file));
      console.log(code);
}
