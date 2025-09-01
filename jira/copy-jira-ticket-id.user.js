// ==UserScript==
// @name         copy-jira-ticket-id
// @namespace    https://danielgamboa.mx/
// @version      0.2
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
        var element = document.querySelector('#jira-issue-header');
        
        // Get or create shared container
        var container = document.getElementById('dg-jira-buttons');
        if (!container) {
            container = document.createElement('div');
            container.id = 'dg-jira-buttons';
            container.style.display = 'flex';
            container.style.gap = '10px';
            element.prepend(container);
        }
        
        var a = document.createElement('a');
        a.id = 'copy-text-id';
        a.href = 'javascript:navigator.clipboard.writeText("'+ ticketID +'");';
        a.textContent = '[Copy Ticket ID]';
        container.appendChild(a);
    }
}
