const request = require('request');
const cheerio = require('cheerio');

// const url = 'https://georgiatech.campusdish.com/LocationsAndMenus/NorthAveDiningHall?locationId=13651&storeIds=&mode=Weekly&date=1%2F25%2F2021&periodId=3663';
const url = 'https://georgiatech.campusdish.com/LocationsAndMenus/NorthAveDiningHall?locationId=13651&storeIds=&mode=Daily&date=1%2F25%2F2021&periodId=3662'

var menu = [];

function convertBool(str) {
    if (str == 'True') {
        return true;
    } else {
        return false;
    }  
}

request(url, (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        $('.menu__item').each((i, el) => {
            let rawCalorie = $(el).find('.item__calories').text();
            
            let item = {
                name: $(el).find('.viewItem').text(),
                calorie: parseInt(rawCalorie.replace(/\D/g,'')),
                eggs: convertBool($(el).attr('containseggs')),
                fish: convertBool($(el).attr('containsfish')),
                milk: convertBool($(el).attr('containsmilk')),
                peanuts: convertBool($(el).attr('containspeanuts')),
                shellfish: convertBool($(el).attr('containsshellfish')),
                soy: convertBool($(el).attr('containssoy')),
                treenuts: convertBool($(el).attr('containstreenuts')),
                wheat: convertBool($(el).attr('containswheat')),
                gluten: convertBool($(el).attr('isglutenfree')),
                halal: convertBool($(el).attr('ishalal')),
                kosher: convertBool($(el).attr('iskosher')),
                locallygrown: convertBool($(el).attr('islocallygrown')),
                organic: convertBool($(el).attr('isorganic')),
                vegan: convertBool($(el).attr('isvegan')),
                vegetarian: convertBool($(el).attr('isvegetarian')),
            }

            if (rawCalorie != "") {
                menu.push(item);
            }
        });

        console.log(menu);
    }
});