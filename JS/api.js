const APIURL = 'https://jsonplaceholder.typicode.com/posts/';
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const getInfo =  async (id) => {
    try {
        const { data } = await axios(APIURL + id)
        createCard(data);
    } catch (err) {
        if(err.response.status === 404){
            creatErrorCard('No information with this Id');
        }
    }
}

const createCard = async (info) => {
    const cardHTML = `<div class="card">
    <div class=id-info">
        <h4>Post #${info.id}</h4>
        <h2>${info.title}</h2>
        <p>${info.body}</p>
    </div>
</div>`
main.innerHTML = cardHTML;
}

const creatErrorCard = (msg) => {
    const cardHTML = `
    <div class="card">
        <h1>${msg}</h1>
    </div>`;
    main.innerHTML = cardHTML;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = search.value;
    if(id) {
        getInfo(id);
        search.value = '';
    }
})