$(function ()
{
    'use strict';
    window.WebSocket = window.WebSocket || window.MozWebSocket;
    var connection = new WebSocket('ws://127.0.0.1:8000');
});