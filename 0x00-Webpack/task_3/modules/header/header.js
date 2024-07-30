import $ from 'jquery';
import './header.css';

$(document).ready(function() {
    $('header').append('<img src="../../assets/holberton-logo.jpg" alt="Holberton Logo">');
    $('header').append('<h1>Holberton Dashboard</h1>');
    console.log('Init header');
  });