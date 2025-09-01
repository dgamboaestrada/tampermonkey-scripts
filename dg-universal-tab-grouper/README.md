# Universal Tab Grouper

A generic Chrome extension for grouping tabs using Tampermonkey userscripts from any website.

## Installation

1. Open `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select this `dg-universal-tab-grouper` folder

## Usage in Userscripts

To use this extension from any userscript, send a message using:

```javascript
window.postMessage({
    type: 'DG_CREATE_TAB_GROUP',
    groupName: 'My Group',
    color: 'grey' // optional, defaults to 'grey'
}, '*');
```

### Check Availability

To check if the extension is installed:

```javascript
// Check availability
window.postMessage({ type: 'DG_CHECK_TAB_GROUPER' }, '*');

// Listen for response
window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'DG_TAB_GROUPER_AVAILABLE') {
        // Extension available
    }
});
```

### Available Colors
- `grey`, `blue`, `red`, `yellow`, `green`, `pink`, `purple`, `cyan`, `orange`

### Example Userscript

```javascript
// ==UserScript==
// @name         My Tab Grouper
// @match        https://example.com/*
// @grant        none
// ==/UserScript==

function createGroup() {
    const groupName = document.title; // or any logic
    
    window.postMessage({
        type: 'DG_CREATE_TAB_GROUP',
        groupName: groupName,
        color: 'green'
    }, '*');
}

// Add button or call automatically
```

## Features

- **Universal**: Works on any website
- **Smart**: If the group already exists, adds the tab to the existing group
- **Customizable**: Allows specifying group name and color
- **Compatible**: Works with any Tampermonkey userscript

## Included Example

The userscript `group-jira-tab-by-ticket-id.user.js` shows how to use the extension to group Jira tabs by ticket ID.
