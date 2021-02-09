const form = document.querySelector('form');

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

form.addEventListener('submit', postData);

// ------------------------------------------
//  POST DATA
// ------------------------------------------

function postData(e) {
    e.preventDefault()
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    fetch('https://mikedaniel.co/json_test.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                comment: comment
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))


}