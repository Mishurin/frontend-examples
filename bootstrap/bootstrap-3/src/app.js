// JavaScript
import 'bootstrap-sass';
// import 'bootstrap';
// CSS
// import 'bootstrap/dist/css/bootstrap.css';
// import './bootstrap.less';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './style.scss';

const $modal = $('#myModal');
const $invokeBtn = $('#invokeBtn');
$invokeBtn.on('click', () => {
    $modal.modal('show');
});