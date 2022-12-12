$(async function () {
    await newUser();
});

async function newUser() {
    const formAddNewUser = document.forms["addUser"];

    formAddNewUser.addEventListener('submit', function (event) {
        event.preventDefault();
        fetch("http://localhost:8080/rest/admin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formAddNewUser.fnAdd.value,
                surname: formAddNewUser.lnAdd.value,
                age: formAddNewUser.ageAdd.value,
                email: formAddNewUser.emailAdd.value,
                password: formAddNewUser.passwordAdd.value,
                roles: formAddNewUser.rolesAdd.value == 1 ? [
                    {
                        "id": 1,
                        "value": "ROLE_ADMIN",
                        "users": null,
                        "authority": "ROLE_ADMIN"
                    }
                ] : [
                    {
                        "id": 2,
                        "value": "ROLE_USER",
                        "users": null,
                        "authority": "ROLE_USER"
                    }
                ]
            })
        }).then(() => {
            formAddNewUser.reset();
            $('#nav-table-tab').click();
        })
            .then( response => location.reload() )
            .catch((error) => {
                alert(error);
            })
    })

}
