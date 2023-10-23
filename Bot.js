require("chromedriver");
let seleniumDriver = require("selenium-webdriver");
let seleniumBuilder = new seleniumDriver.Builder();
let browserTab = seleniumBuilder.forBrowser("chrome").build(); 
const prompt = require("prompt-sync")();
let url =  'https://us.supreme.com/collections/all'
let keyword = ''
let size = ''
let color = ''
let category = ['Jackets', 'Shirts', 'Tops/Sweaters', 'Sweatshirts', 'Pants', 'Shorts', 'T-Shirts', 'Hats', 'Bags', 'Accessories', 'Shoes', 'Skate']

function chooseCat(){
    let urlLocal = url
    let cat= prompt('Choose Category 0-11: ')
    switch (cat){
        case '1':
            urlLocal = "https://www.supremenewyork.com/shop/all/jackets"
            break;
        case '2':
            urlLocal = "https://www.supremenewyork.com/shop/all/shirts"
            break;
        case '3':
            urlLocal = "https://www.supremenewyork.com/shop/all/tops_sweaters"
            break;
        case '4':
            urlLocal = "https://www.supremenewyork.com/shop/all/sweatshirts"
            break;
        case '5':
            urlLocal = "https://www.supremenewyork.com/shop/all/pants"
            break;
        case '6':
            urlLocal = "https://www.supremenewyork.com/shop/all/shorts"
            break;
        case '7':
            urlLocal = "https://www.supremenewyork.com/shop/all/t-shirts"
            break;
        case '8':
            urlLocal = "https://www.supremenewyork.com/shop/all/hats"
            break;
        case '9':
            urlLocal = "https://www.supremenewyork.com/shop/all/bags"
            break;
        case '10':
            urlLocal = "https://www.supremenewyork.com/shop/all/accessories"
            break;
        case '11':
            urlLocal = "https://www.supremenewyork.com/shop/all/shoes"
            break;
        case '12':
            urlLocal = "https://www.supremenewyork.com/shop/all/skate"
            break;
        default:
            urlLocal = "https://www.supremenewyork.com/shop/all"
            break;
    }
    let browserWindow = browserTab.get(urlLocal); 

}
chooseCat()

console.log('Bot is running...')


