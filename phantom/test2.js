var page = require('webpage').create();
page.viewportSize = {width:768,height:1024}
page.open('http://airbnb.com',save);

function save(status){
    console.log(status)
    page.render('test2.png')
    phantom.exit()
}