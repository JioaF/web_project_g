// get form
let form = document.querySelector('.form');

// get input
let email = document.querySelector('#email')
let comis = document.querySelector('#comis')
let art = document.querySelector('#art')
let tbody = document.querySelector('#tbody')

// data handle
let data = {
    "email": "",
    "comis": "",
    "art": ""
}

let order_data = []

let key = 'ORDER_DATA'

localStorage.setItem(key, JSON.stringify(order_data))

// updateTable()

// onsubmit handle
form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (email.value === '' || comis.value === '' || art.value === '') {
        return alert('Input can\'t be empty ')
    }
    data['email'] = email.value
    data['comis'] = comis.value
    data['art'] = art.value
    order_data.push(data)
    
    // create localstorage
    localStorage.setItem(key, JSON.stringify(order_data))
    updateTable()
})

function updateTable() {
    let data = JSON.parse(localStorage.getItem(key))
    let frag = ''
    for (let i = 0; i < data.length; i++) {
        frag +=`<tr>
                    <td>#</td>
                    <td>${data[i]['email']}</td>
                    <td>${data[i]['comis']}</td>
                    <td>${data[i]['art']}</td>
                    <td>TBA</td>
                </tr>`
    }
    tbody.innerHTML = frag
    frag = ''
}

