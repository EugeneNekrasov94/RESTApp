$('document').ready(function () {
    $('.table .editBtn').click(function(event) {
        event.preventDefault();

        var href= $(this).attr('href');

        $.get(href,function (user,status){
            $('#idEdit').val(user.id);

            $('#fnEdit').val(user.name);
            $('#lnEdit').val(user.surname);
            $('#ageEdit').val(user.age);
            $('#emailEdit').val(user.email);
            $('#passwordEdit').val(user.passwordEdit);
            $('#roleEdit').val(user.roles);
        });

        $('#editModal').modal();

    });


});