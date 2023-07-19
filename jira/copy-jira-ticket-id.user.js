// ==UserScript==
// @name         copy-jira-ticket-id
// @namespace    https://danielgamboa.mx/
// @version      0.1
// @description  Copy Jira Id task
// @author       Daniel Gamboa Estrada
// @match        https://*.atlassian.net/browse/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=atlassian.net
// @require      https://code.jquery.com/jquery-3.7.0.slim.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const ticketID = jQuery('a[data-testid="issue.views.issue-base.foundation.breadcrumbs.current-issue.item"]').find('span').text();
    jQuery(".css-1src8bx.er2v6i55").append("<div><a href=\"javascript:navigator.clipboard.writeText('" + ticketID + "');\">Copy Ticket ID</a></div>");
})();
