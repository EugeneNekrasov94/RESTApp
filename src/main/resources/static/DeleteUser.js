/*
jQuery(async function() {
    getDefaultModal();
})

const userFetchService = {
    head: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Referer': null
    },
    // bodyAdd : async function(user) {return {'method': 'POST', 'headers': this.head, 'body': user}},
/!*
    findAllUsers: async () => await fetch('api/users'),
    findOneUser: async (id) => await fetch(`api/users/${id}`),
    addNewUser: async (user) => await fetch('api/users', {method: 'POST', headers: userFetchService.head, body: JSON.stringify(user)}),
    updateUser: async (user, id) => await fetch(`api/users/${id}`, {method: 'PUT', headers: userFetchService.head, body: JSON.stringify(user)}),
*!/
    deleteUser: async (id) => await fetch(`http://localhost:8080/rest/admin/${id}`, {method: 'DELETE', headers: userFetchService.head}).then( ()=> location.reload())
}

async function getDefaultModal() {
    jQuery('#deleteModal').modal({
        keyboard: true,
        backdrop: "static",
        show: false

    }).on("show.bs.modal", (event) => {
        let thisModal = $(event.target);
        let userId = thisModal.attr('data-id');
        console.log(userId)
        let action = thisModal.attr('data-action');
        switch (action) {
            case 'delete' :
                deleteUser(thisModal, userId);
                break;
        }
    }).on("hidden.bs.modal", (e) => {
        let thisModal = jQuery(e.target);
        thisModal.find('.modal-title').html('');
        thisModal.find('.modal-body').html('');
        thisModal.find('.modal-footer').html('');
    })
}

async function deleteUser(modal, id) {
    await userFetchService.deleteUser(id);
    await createTable();
    modal.find('.modal-title').html('');
    modal.find('.modal-body').html('');
    let closeButton = `<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`;
    modal.find('.modal-footer').html(closeButton);
}



const url = 'http://localhost:8080/rest/admin/'
let result = ''

const on = (element, event, selector, handler) => {
    //console.log(element)
    //console.log(event)
    //console.log(selector)
    //console.log(handler)
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document,'click','.buttonDelete', e => {
    const file = e.target.parentNode
    const id = file.firstElementChild.innerHTML
    alertify.confirm("This is a confirm dialog.",
        function (){
        fetch(url+id, {
            method:'DELETE'
        })
            .then(res => res.json())
            .then(()=>location.reload())
        })
})*/
