    fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil")
    .then(function(resp){return resp.json()})
    .then(function(data){
        console.log(data)
        let cases = data.data.cases;
        let confirmed = data.data.confirmed;
        let deaths = data.data.deaths;
        let recovered = data.data.recovered;

        /* document.getElementById("update").innerHTML = update; */
        document.getElementById("cases").innerText = cases;
        document.getElementById("deaths").innerHTML = deaths;
        document.getElementById("confirmed").innerHTML = confirmed;
        document.getElementById("recovered").innerHTML = recovered;

     

    })
    .catch(err => console.error(err));

