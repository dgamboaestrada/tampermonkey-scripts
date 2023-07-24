// ==UserScript==
// @name         copy-jira-ticket-id
// @namespace    https://danielgamboa.mx/
// @version      0.1
// @description  Copy Jira Id task
// @author       Daniel Gamboa Estrada
// @match        https://*.atlassian.net/browse/*
// @match        https://*.atlassian.net/jira/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=atlassian.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    setInterval(addCopyTextID, 5000);
})();

function addCopyTextID() {
    var copyTextId = document.getElementById("copy-text-id");
    var issueLink = document.querySelector('a[data-testid="issue.views.issue-base.foundation.breadcrumbs.current-issue.item"]');

    if (copyTextId == null && issueLink != null) {
        var ticketID = document.querySelector('a[data-testid="issue.views.issue-base.foundation.breadcrumbs.current-issue.item"] span').textContent;
        var element = document.querySelector('.css-1src8bx.er2v6i55');
        var div = document.createElement('div');
        var a = document.createElement('a');
        a.id = 'copy-text-id';
        a.href = 'javascript:navigator.clipboard.writeText("'+ ticketID +'");';
        a.textContent = 'Copy Ticket ID';
        div.appendChild(a);
        element.appendChild(div);
    }
}
