export default {
    getUser(id) {
        return fetch("http://localhost:3000/users/" + id)
            .then(function(response) {
                return response.json();
            })
            .catch(function(err) {
                console.log('failed', err);
            })
    }
}