// ==UserScript==
// @name         group-jira-tab-by-ticket-id
// @namespace    https://danielgamboa.mx/
// @version      0.1
// @description  Groups Chrome tabs with Jira ticket ID name
// @author       Daniel Gamboa Estrada
// @match        https://*.atlassian.net/browse/*
// @match        https://*.atlassian.net/jira/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=atlassian.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

        let lastTicket = null;

    function getTicketId() {
        var link = document.querySelector('a[data-testid="issue.views.issue-base.foundation.breadcrumbs.current-issue.item"]');
        if (!link) return null;
        var span = link.querySelector('span');
        if (!span) return null;
        var text = span.textContent ? span.textContent.trim() : '';
        return text || null;
    }

    function createTicketGroup() {
        var id = getTicketId();
        if (!id) return;

        // Send message to create group (if extension is installed)
        window.postMessage({
            type: 'DG_CREATE_TAB_GROUP',
            groupName: id,
            color: 'grey'
        }, '*');
    }

    function addGroupButton() {
        var groupButtonId = document.getElementById("group-tabs-button");
        var issueLink = document.querySelector('a[data-testid="issue.views.issue-base.foundation.breadcrumbs.current-issue.item"]');

        if (groupButtonId == null && issueLink != null) {
            var ticketID = getTicketId();
            if (!ticketID) return;

            var element = document.querySelector('#jira-issue-header');
            if (!element) return;

            var div = document.createElement('div');
            var a = document.createElement('a');
            a.id = 'group-tabs-button';
            a.href = 'javascript:void(0);';
            a.textContent = '[Create Tab Group]';
            a.onclick = createTicketGroup;
            div.appendChild(a);
            element.prepend(div);
        }
    }

    // Periodic detection (for Jira SPA and route changes)
    setInterval(addGroupButton, 1500);
})();