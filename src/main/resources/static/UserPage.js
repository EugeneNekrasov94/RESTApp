async function loadUserPage() {
    fetch("http://localhost:8080/rest/user")
        .then(r => r.json())
        .then(data => {
            $('#navEmail').append(data.email);
            let role = data.rolesInfo;
            $('#navRole').append(role);

            let user = `$(
            <tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.surname}</td>
                <td>${data.age}</td>
                <td>${data.email}</td>
                <td>${data.rolesInfo}</td>)`;
            $('#userPanelBody').append(user);
        })

        .catch((error) => {
            alert(error);
        })
}

$(async function () {
    await loadUserPage();
});
