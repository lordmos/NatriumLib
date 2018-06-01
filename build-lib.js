const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

function buildLib() {
    const ng = spawn('ng', ['build', '--prod', 'natrium-lib']);
    ng.stdout.on('data', (data) => {
        console.log(data.toString());
    });

    ng.stderr.on('data', (data) => {
        console.log(data.toString());
    });

    ng.on('exit', (code) => {
        console.log(`Child exited with code ${code}`);
        changePackageJsonConfig();
    });
}

function changePackageJsonConfig() {
    const distPath = path.join(__dirname, "dist", "natrium-lib");
    const distPackageJsonPath = path.join(distPath, "package.json");
    const srcFile = path.join(__dirname, 'projects', 'natrium-lib', 'post-install.js');
    const destFile = path.join(distPath, 'post-install.js');

    fs.copyFileSync(srcFile, destFile);

    fs.readFile(distPackageJsonPath, "utf8", (err, file) => {
        if (err) {
            console.log("Natrium Lib : " + err.message);
            console.error("Natrium Lib : package.json file is not exist , are your sure this is an angular project ?");
        } else {
            const config = JSON.parse(file.toString());
            config["scripts"] = {
                "install": "node post-install.js"
            };
            config["dependencies"]["ionicons"] = "^4.1.2";
            config["dependencies"]["bulma"] = "^0.7.1";
            config["dependencies"]["bulma-extensions"] = "^1.0.32";
            fs.writeFileSync(distPackageJsonPath, JSON.stringify(config, undefined, 2));
            console.log("Natrium Lib configuration is completed .");
        }
    });
}


buildLib();