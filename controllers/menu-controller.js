const request = require('request');
const cheerio = require('cheerio');

function getMenu(req, res, diningHall) {
    const menu = [];

    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const hour = date.getHours();

    const periodId = () => {
        if (hour >= 16) {
            return 3664;
        } else if (hour >= 10) {
            return 3663;
        } else {
            return 3662;
        }
    }

    const service = 'https://georgiatech.campusdish.com/LocationsAndMenus';
    const query = '?mode=Daily&date=' + month + '%2F' + day + '%2F'+ year + '&periodId=' + periodId();
    const url = service + '/' + diningHall + 'DiningHall' + query;

    var convertBool = (str) => {
        if (str === 'True') {
            return true;
        } else {
            return false;
        }  
    };

    request(url, (error, response, html) => {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
    
            $('.menu__item').each((i, el) => {
                const rawCalorie = $(el).find('.item__calories').text();

                const rawRestrictions = ['containseggs', 'containsfish', 'containsmilk', 'containspeanuts', 'containsshellfish', 'containssoy', 'containstreenuts', 'containswheat', 'isglutenfree', 'ishalal', 'iskosher', 'islocallygrown', 'isorganic', 'isvegan', 'isvegetarian'];
                const restrictions = ['eggs', 'fish', 'milk', 'peanuts', 'shellfish', 'soy', 'treenuts', 'wheat', 'gluten', 'halal', 'kosher', 'locallygrown', 'organic', 'vegan', 'vegetarian'];

                for (let i = restrictions.length - 1; i >= 0; i--) {
                    if( i > 8 && convertBool($(el).attr(rawRestrictions[i]))) {
                        restrictions.splice(i, 1);
                    } else if( i <= 8 && !convertBool($(el).attr(rawRestrictions[i]))) {
                        restrictions.splice(i, 1);
                    }
                }
                
                const item = {
                    name: $(el).find('.viewItem').text(),
                    calorie: parseInt(rawCalorie.replace(/\D/g,'')),
                    restrictions: restrictions,
                }
    
                if (rawCalorie != "") {
                    menu.push(item);
                }
            });
    
            res.json(menu);
        }
    });
}

module.exports = getMenu;