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
                    config.projects[key].architect.build.options.styles.unshift("node_modules/ionicons/dist/css/ionicons.min.css");
                    config.projects[key].architect.build.options.styles.unshift("node_modules/bulma/css/bulma.min.css");
                    config.projects[key].architect.build.options.styles.unshift("node_modules/bulma-extensions/dist/bulma-extensions.min.css");
                    config.projects[key].architect.build.options.scripts.unshift("node_modules/ionicons/dist/ionicons.js");
                    config.projects[key].architect.build.options.scripts.unshift("node_modules/bulma-extensions/bulma-accordion/dist/bulma-accordion.min.js");
                    config.projects[key].architect.build.options.scripts.unshift("node_modules/bulma-extensions/bulma-calendar/dist/js/bulma-calendar.min.js");
                    config.projects[key].architect.build.options.scripts.unshift("node_modules/bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js");
                    config.projects[key].architect.build.options.scripts.unshift("node_modules/bulma-extensions/bulma-tagsinput/dist/bulma-tagsinput.min.js");
                    config.projects[key].architect.build.options.scripts.unshift("node_modules/bulma-extensions/bulma-quickview/dist/bulma-quickview.min.js");
                    break;
                }
            }
            fs.writeFileSync(angularJsonPath, JSON.stringify(config, undefined, 2));
            console.log("Natrium Lib configuration is completed .");
        }
    });
}


changeAngularJsonConfig();