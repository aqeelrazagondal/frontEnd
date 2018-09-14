var dialog = document.querySelector('dialog');
var showDialogButton = document.querySelector('#show-dialog');
var $;

if (!dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
}


showDialogButton.addEventListener('click', function () {
    dialog.showModal();
});


dialog.querySelector('.close').addEventListener('click', function () {
    dialog.close();
});





// var showModalButton = document.querySelector('.modal');
// var modaldialog = document.querySelector('#showmodal');
// if (!modaldialog.showModal) {
//     dialogPolyfill.registerDialog(modaldialog);
// }

// showModalButton.addEventListener('click', function () {
//     modaldialog.showModal();
// });


// modaldialog.querySelector('#closmodal').addEventListener('click', function () {
//     modaldialog.close();
// });


// $(document).ready(function () {
//     $('#btn-lock').click(function () {
//         $('#btn-delete').removeClass('lock-button').addClass('unlock-button');
//         $('#button-icon').html('lock_open');
//     });
// });


// $('#more-content').click(function (e) {
//     e.stopPropagation();
//     $('#paragraph').css({
//         'height': 'auto'
//     });
// });

// $(document).click(function () {
//     $('#paragraph').css({
//         'height': '56px'
//     });
// });

// $(document).ready(function () {
//     $('#button-lock').click(function () {
//         $('#button-endsession').removeClass('lock-button').addClass('unlock-button');
//         $('#btn-icon').html('lock_open');
//     });
// });


