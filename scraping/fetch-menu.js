const request = require("request");
const cheerio = require("cheerio");
const fs = require('fs');

function fetchAllMenu() {
    fetchMenu(3662)
        .then((val) => {
            let data = JSON.stringify(val);

            fs.writeFile("scraping/breakfast.json", data, (err) => {
                if (err) throw err;
                console.log("breakfast fetched");
            });
        })
        .catch((err) => {
            console.log(err);
        });

    fetchMenu(3663)
        .then((val) => {
            let data = JSON.stringify(val);

            fs.writeFile("scraping/lunch.json", data, (err) => {
                if (err) throw err;
                console.log("lunch fetched");
            });
        })
        .catch((err) => {
            console.log(err);
        });

    fetchMenu(3664)
        .then((val) => {
            let data = JSON.stringify(val);

            fs.writeFile("scraping/dinner.json", data, (err) => {
                if (err) throw err;
                console.log("dinner fetched");
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

var convertBool = (str) => {
    if (str === "True") {
        return true;
    } else {
        return false;
    }  
};

function fetchMenu(periodId) {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    const service = "https://georgiatech.campusdish.com/LocationsAndMenus";
    const query = "?mode=Weekly&date=" + month + "%2F" + day + "%2F"+ year + "&periodId=" + periodId;
    const url = service + "/" + "NorthAve" + "DiningHall" + query;

    return new Promise(function(resolve, reject){
        request(url, (error, response, html) => {
            const menu = [];

            if (!error && response.statusCode == 200) {
                const $ = cheerio.load(html);
        
                $(".menu__day").each((j, day) => {
                    const dailyMenu = [];

                    $(day).find(".menu__item").each((i, el) => {
                        const rawCalorie = $(el).find(".item__calories").text();

                        const rawRestrictions = ["containseggs", "containsfish", "containsmilk", "containspeanuts", "containsshellfish", "containssoy", "containstreenuts", "containswheat", "isglutenfree", "ishalal", "iskosher", "islocallygrown", "isorganic", "isvegan", "isvegetarian"];
                        const restrictions = ["eggs", "fish", "milk", "peanuts", "shellfish", "soy", "treenuts", "wheat", "gluten", "halal", "kosher", "locallygrown", "organic", "vegan", "vegetarian"];

                        for (let i = restrictions.length - 1; i >= 0; i--) {
                            if( i > 8 && convertBool($(el).attr(rawRestrictions[i]))) {
                                restrictions.splice(i, 1);
                            } else if( i <= 8 && !convertBool($(el).attr(rawRestrictions[i]))) {
                                restrictions.splice(i, 1);
                            }
                        }
                        
                        const item = {
                            name: $(el).find(".viewItem").text(),
                            calorie: parseInt(rawCalorie.replace(/\D/g,"")),
                            restrictions: restrictions,
                        }
            
                        if (rawCalorie != "") {
                            dailyMenu.push(item);
                        }
                    });

                    menu.push(dailyMenu);
                    // console.log(dailyMenu);
                    // console.log(",");
                });

                resolve(menu);
            }

            reject(error);
        });
    });
}

module.exports = fetchAllMenu;

// fetchAllMenu();

// const fetchMenu = (periodId, meal) => {
//     const date = new Date();
//     const month = date.getMonth() + 1;
//     const day = date.getDate();
//     const year = date.getFullYear();
//     const hour = date.getHours();

//     const service = "https://georgiatech.campusdish.com/LocationsAndMenus";
//     const query = "?mode=Weekly&date=" + month + "%2F" + day + "%2F"+ year + "&periodId=" + periodId;
//     const url = service + "/" + "NorthAve" + "DiningHall" + query;

//     request(url, (error, response, html) => {
//         const menu = [];

//         if (!error && response.statusCode == 200) {
//             const $ = cheerio.load(html);
    
//             $(".menu__day").each((j, day) => {
//                 const dailyMenu = [];

//                 $(day).find(".menu__item").each((i, el) => {
//                     const rawCalorie = $(el).find(".item__calories").text();

//                     const rawRestrictions = ["containseggs", "containsfish", "containsmilk", "containspeanuts", "containsshellfish", "containssoy", "containstreenuts", "containswheat", "isglutenfree", "ishalal", "iskosher", "islocallygrown", "isorganic", "isvegan", "isvegetarian"];
//                     const restrictions = ["eggs", "fish", "milk", "peanuts", "shellfish", "soy", "treenuts", "wheat", "gluten", "halal", "kosher", "locallygrown", "organic", "vegan", "vegetarian"];

//                     for (let i = restrictions.length - 1; i >= 0; i--) {
//                         if( i > 8 && convertBool($(el).attr(rawRestrictions[i]))) {
//                             restrictions.splice(i, 1);
//                         } else if( i <= 8 && !convertBool($(el).attr(rawRestrictions[i]))) {
//                             restrictions.splice(i, 1);
//                         }
//                     }
                    
//                     const item = {
//                         name: $(el).find(".viewItem").text(),
//                         calorie: parseInt(rawCalorie.replace(/\D/g,"")),
//                         restrictions: restrictions,
//                     }
        
//                     if (rawCalorie != "") {
//                         dailyMenu.push(item);
//                     }
//                 });

//                 menu.push(dailyMenu);
//                 // console.log(dailyMenu);
//                 // console.log(",");
//             });

//             let data = JSON.stringify(menu);

//             fs.writeFile("scraping/breakfast.json", data, (err) => {
//                 if (err) throw err;
//                 console.log("breakfast fetched");
//             });
//         }
//     });
// }

// module.exports = fetchMenu;