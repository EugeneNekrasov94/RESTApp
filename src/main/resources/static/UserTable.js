async function createUserTable() {
    let table = $('#userTable');
    table.empty();
    fetch("http://localhost:8080/rest/user")
        .then(data => data.json())
        .then(user => {
                let users = `$(
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.surname}</td>
                    <td>${user.age}</td>
                    <td>${user.email}</td>
                    <td>${user.rolesInfo}</td>
                </tr>)`
                table.append(users)
            })

        .catch((error) => {
            alert(error);
        })
}

$(async function(){
    await createUserTable();
});