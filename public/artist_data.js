let container = document.querySelector('.container')

let data = {
    'yui': [
        'yui/Akutagawa.png',
        'yui/Atsushi.png',
        'yui/Chuuya.png',
        'yui/Dazai.png',
        'yui/Fyodor.png',
        'yui/Nikolai.png',
    ],
    
}

let page_name = window.location.href.replace('.html', '').split('/')
page_name = page_name[page_name.length - 1]
    
for (let d in data) {
    if (d == page_name) {
        let arr = data[d]
        for (let i = 0; i < arr.length; i++){
            let div = document.createElement('div')
            div.innerHTML = '<span>SAMPLE</span>'
            div.style.backgroundImage = `url(../public/images/${arr[i]})`
            container.append(div)
        }
    }
}
