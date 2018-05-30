const path = require('path');
const fs = require('fs');

function changeAngularJsonConfig() {
    const rootPath = path.join(__dirname, "..", "..");
    const angularJsonPath = path.join(rootPath, "angular.json");
    fs.readFile(angularJsonPath, "utf8", (err, file) => {
        if (err) {
            console.log("Natrium Lib : " + err.message);
            console.error("Natrium Lib : angular.json file is not exist , are your sure this is an angular@6.x project ?");
        } else {
            const config = JSON.parse(file.toString());
            for (let key in config.projects) {
                if (config.projects[key].root === "") {
                    config.projects[key].architect.build.options.styles.unshift("node_modules/ionicons/dist/css/ionicons.min.css")
                    config.projects[key].architect.build.options.styles.unshift("node_modules/bulma/css/bulma.min.css")
                }
            }
            fs.writeFileSync(angularJsonPath, JSON.stringify(config, undefined, 2));
            console.log("Natrium Lib configuration is completed .");
        }
    });
}


changeAngularJsonConfig();