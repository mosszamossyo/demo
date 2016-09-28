var page = require('webpage').create();
page.onLoadFinished = ready
var step = 'open'
page.open('https://github.com')

function ready(status){
    console.log(page.url)
    if(step == 'open'){
        page.render('openGithub.png');
        step = 'fill'
        step.evaluate(function (){
            document.getElementById('user[login]').value ='mosszamossyo1'
            document.getElementById('user[email]').value = 'wisadmoss00@gmail.com'
            document.getElementById('user[password]').value = 'Morse123'
            document.querySelector('[type=submit]').click()
        })
    }else if(step == 'fill'){
        page.render('insertfill.png')
        if(page.url == 'https://github.com/koin/plan'){
            console.log('Test case:5 Passed')
        }else{
            console.log('Test case:5 Failed'+page.url)
        }
    }
    phantom.exit()
}// run phantom ตามด้วยชื่อ file.js