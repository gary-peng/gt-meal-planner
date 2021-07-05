const fs = require("fs");

function getMenu(req, res, meal) {
    fs.readFile("scraping/" + meal + ".json", (err, data) => {
        if (err) throw err;

        const menu = null;
        try {
            menu = JSON.parse(data);
        } catch (e) {
            console.log(e);

            fs.readFile("scraping/sample/" + meal + ".json", (err, data) => {
                if (err) throw err;
        
                let menu = JSON.parse(data);
                res.json(menu);
            });

            return;
        }

        if (menu[0] == null) {
            fs.readFile("scraping/sample/" + meal + ".json", (err, data) => {
                if (err) throw err;
        
                let menu = JSON.parse(data);
                res.json(menu);
            });

            return;
        }

        res.json(menu);
    });
}

module.exports = getMenu;