const url = 'http://localhost:8080/rest/admin'
const table = document.querySelector('table')
let result = ''

const modalEdit = new bootstrap.Modal(document.getElementById('editModal'))
const modalDelete = new bootstrap.Modal(document.getElementById('deleteModal'))
const formArticulo = document.querySelector('form')
const id = document.getElementById('idEdit')
const idDelete = document.getElementById('idDelete')
const name = document.getElementById('fnEdit')
const nameDelete = document.getElementById('fnDelete')
const surname = document.getElementById('lnEdit')
const surnameDelete = document.getElementById('lnDelete')
const age = document.getElementById('ageEdit')
const ageDelete = document.getElementById('ageDelete')
const email = document.getElementById('emailEdit')
const emailDelete = document.getElementById('emailDelete')
const roles = document.getElementById('roleEdit')
const rolesDelete = document.getElementById('roleDelete')
const form = document.forms["userDelete"];
const editForm = document.forms["editUserForm"]

const show = (id) => {
    id.forEach(user => {
        result += `<tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.surname}</td>
                            <td>${user.age}</td>
                            <td>${user.email}</td>
                            <td>${user.rolesInfo}</td>
                            <td class="text-center text-white"><a class="btnEditar btn btn-primary">Edit</a></td>
                            <td class="text-center text-white"><a class="btnBorrar btn btn-danger">Delete</a></td>
                       </tr>
                    `
    })
    table.innerHTML = result

}


async function createTable() {
    fetch(url)
        .then(response => response.json())
        .then(data => show(data))
        .catch(error => console.log(error))
}

$(async function () {
    await createTable();
});

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    })
}

on(document, 'click', '.btnBorrar', e => {
    const fila = e.target.parentNode.parentNode
    const idForm = fila.children[0].innerHTML
    const nameForm = fila.children[1].innerHTML
    const surnameForm = fila.children[2].innerHTML
    const ageForm = fila.children[3].innerHTML
    const emailForm = fila.children[4].innerHTML
    const roleForm = fila.children[5].innerHTML
    idDelete.value = idForm
    nameDelete.value = nameForm
    surnameDelete.value = surnameForm
    ageDelete.value = ageForm
    emailDelete.value = emailForm
    rolesDelete.value = roleForm
    modalDelete.show()
})

on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode
    const idForm = fila.children[0].innerHTML
    const nameForm = fila.children[1].innerHTML
    const surnameForm = fila.children[2].innerHTML
    const ageForm = fila.children[3].innerHTML
    const emailForm = fila.children[4].innerHTML
    const roleForm = fila.children[5].innerHTML
    id.value = idForm
    name.value = nameForm
    surname.value = surnameForm
    age.value = ageForm
    email.value = emailForm
    roles.value = roleForm
    modalEdit.show()
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(url + "/" + idDelete.value, {
        method: 'DELETE'
    })
        .then(() => location.reload())
    modalDelete.hide()
})

editForm.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: editForm.idEdit.value,
            name: editForm.fnEdit.value,
            surname: editForm.lnEdit.value,
            age: editForm.ageEdit.value,
            email: editForm.emailEdit.value,
            password: editForm.passwordEdit.value,
            roles: editForm.roleEdit.value == 1 ? [
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
    })
        .then(() => {
            editForm.reset();
        })
        .then(response => location.reload())

    modalEdit.hide()
})