const txtData = document.querySelector("#textData");
const jsonData = document.querySelector("#jsonData");
const externalData = document.querySelector("#API-data");



//EventListener function
loadEventListners();

//Load All EventListeners
function loadEventListners(){
    txtData.addEventListener('click', fetchTxtData);
    jsonData.addEventListener('click', fetchJsonData)
    externalData.addEventListener("click", fetchExternalData);
}



//Get txt Data Function
function fetchTxtData(e){
    const output = document.querySelector('#output')
    //use the Fetch API 
    fetch('data.txt')
    //use a promise to collect the data
    .then(res =>{
        return res.text();
    })
    //use a promise to display the data to the browser
    .then(data =>{
        output.innerHTML = data;
    })
    .catch(error =>{
        output.innerHTML = error;
    })

    e.preventDefault();
}

//Fetch JsonData Function
function fetchJsonData(e){
    const output = document.querySelector('#output');
    fetch('data.json')
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        let display = "";
        data.forEach(item =>{
            display += `
            <li>${item.id}</li>
            <li>${item.name}</li>
            <li>${item.title}</li>
            `

            output.innerHTML = display;
        });
    });

    e.preventDefault();
}

//Fetxh external data Function
function fetchExternalData(e){
    const output = document.querySelector("#output");
    //fetching data from the github users api
    fetch("https://api.github.com/users")
    .then(res =>{
        return res.json()
    })
        .then(data => {
            let display = "";
            data.forEach(user => {
            display += `
            <li>${user.login}</li>
            `;
           output.innerHTML = display;
            });
        });

    e.preventDefault();
}
