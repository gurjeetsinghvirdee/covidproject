

const Countries =()=> {
    return fetch("https://api.covid19api.com/summary", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
        .then((res) => {
            return res.json();
        })
        .catch(err => {
            console.log(err);
        });
}

export default Countries