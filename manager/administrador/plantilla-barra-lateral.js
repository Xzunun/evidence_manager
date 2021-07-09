$(document).ready(() => {
    $('#vistas').load('dashboard.php');
    $('#boton_dashboard').click(() => {
        $('#vistas').load('dashboard.php');
        return false;
    });
    $('#boton_nuevo').click(() => {
        $('#vistas').load('nuevo.php');
        return false;
    });
    $('#boton_carga_academica').click(() => {
        $('#vistas').load('carga-academica.php');
        return false;
    });
    $('#boton_ciclo_escolar').click(() => {
        $('#vistas').load('agregar-ciclo-escolar.php');
        return false;
    });
    $('#boton_evidencias').click(() => {
        $('#vistas').load('evidencias.php');
        return false;
    });
    $('#boton_recuperar').click(() => {
        $('#vistas').load('recuperar.php');
        return false;
    });
    $('#boton_configuracion').click(() => {
        $('#vistas').load('configuracion.php');
        return false;
    });
    $('#boton_salir').click(() => {
        Swal.fire({
            customClass: {
                title: 'titulo',
                confirmButton: 'boton_ok',
                cancelButton: 'boton_cancelar'
            },
            icon: 'warning',
            title: '¿Estás seguro?',
            html: '<span class="text-white">Cerrarás sesión.</span>',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            background: 'rgb(52, 58, 64)',
            backdrop: 'rgb(52, 58, 64)'
        }).then((result) => {
            if (result.isConfirmed) {
               window.location.href = '../../control/administrador/cerrar-sesion.php';
            }
        });
        return false;
    });
});