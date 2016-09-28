var page = require('webpage').create()
page.onLoadFinished = ready
var step = 'open'
page.open('http://appspeed.us/login')

function ready(status){
    if(step == 'open'){
        page.render('test4a.png')
        step = 'fill'
        page.evaluate( function (){
            document.querySelector('[name=email]').value='user1234@gmail.com'
            document.querySelector('[type=password]').value='user1234'
            document.querySelector('[type=submit]').click()
        })
    }else if(step == 'fill'){
        page.render('test4b.png')
        step = 'logout'
        page.evaluate( function (){
            document.querySelector('[href="/logout"]').click()
        })
    }else if (step == 'logout'){
        page.render('test4c.png')
        step = 'open_profile'
        page.open('http://appspeed.us/profile')
    }else if(step == 'open_profile'){
        page.render('test4d.png')
        if(page.url == 'http://appspeed.us/login'){
            console.log('Test Case:4 PASSED')
        }else{
            console.log('Test Case:4 FAILED')
        }
        phantom.exit()
    }

}