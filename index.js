const BASE_URL = "https://api.tvmaze.com/"

window.addEventListener('DOMContentLoad', () =>{
    getShows()
})

function getShows(){
    const ul = document.getElementById('shows')

    fetch(BASE_URL + `/show-list/`)
    .then(res => res.json())
    .then(data => {
        data.forEach(show => {
            ul.innerHTML += `<li>${show.name}</li>`
            // += keep adding over each one, over and over. (adding a bunch)
        })
    })
}


