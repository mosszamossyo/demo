var page = require('webpage').create();
page.onLoadFinished = ready
var step = 'open'
page.open('http://appspeed.us/login')

function ready(status){
    console.log(page.url)
    if(step == 'open'){
        step ='fill'
        page.evaluate( function (){
        document.querySelector('[name=email]').value = 'user1234@gmail.com'
        document.querySelector('[name=password]').value = 'user1234'
        document.querySelector('[type=submit]').click()
        }   )
    }else if(step == 'fill'){
        /*
        page.render('test3x.png')
        phantom.exit()
        */

        if(page.url.indexOf('Invalid')){
            console.log('Test Vase : 3  PASSED')
            page.render('test3Succes.png')
        }else{
            console.log('Test Case:3    FAILED')
            page.render('test3Succes.png')
        }
        phantom.exit()
    }
}