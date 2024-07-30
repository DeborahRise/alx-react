import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$(document).ready(function() {
  $('body').append('<button>Click me</button>');
  $('body').append('<p>0</p>');

  $('button').on('click', _.debounce(function() {
    let count = parseInt($('p').text());
    $('p').text(count + 1);
  }, 300));
});
