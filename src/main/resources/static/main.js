$('document').ready(function () {
    $('.table .btn').on('click', function(event) {
        event.preventDefault();

        var href= $(this).attr('href');

        $.get(href,function (user,status){
            $('#idEdit').val(user.id);

            $('#lnEdit').val(user.surname);
            $('#fnEdit').val(user.name);
            $('#ageEdit').val(user.age);
            $('#emailEdit').val(user.email);
            $('#passwordEdit').val(user.password);
            $('#roleEdit').val(user.roles);
        });

        $('#editModal').modal();

    });
});