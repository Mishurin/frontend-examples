// JS
import * as $ from 'jquery';
// CSS
import './styles.css';
import 'font-awesome/css/font-awesome.min.css';
// Data
import xmlData from './configs/data.xml';
import jsonData from './configs/data.json';

const $container = $('.container').eq(0);
$container.html('<h1>Hello World</h1>');
console.log(xmlData);
console.log(jsonData);


