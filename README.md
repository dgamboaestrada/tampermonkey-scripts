# Tampermonkey Scripts Collection

A collection of productivity-focused Tampermonkey userscripts and a universal Chrome extension for enhanced web browsing workflow.

## 🚀 Quick Start

1. **Install the Chrome Extension** (recommended):
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `dg-universal-tab-grouper/` folder

2. **Install Userscripts**:
   - Install [Tampermonkey](https://www.tampermonkey.net/)
   - Import scripts from the `jira/` folder

## 📁 Project Structure

```
tampermonkey-scripts/
├── dg-universal-tab-grouper/     # Universal Chrome extension
│   ├── manifest.json             # Extension configuration
│   ├── background.js             # Tab grouping logic
│   ├── content.js               # Message handling
│   └── README.md                # Extension documentation
├── jira/                        # Jira-specific userscripts
│   ├── copy-jira-ticket-id.user.js      # Copy ticket ID to clipboard
│   └── group-jira-tab-by-ticket-id.user.js  # Group tabs by ticket ID
└── example.html                 # Jira DOM structure reference
```

## 🔧 Components

### 🌐 Universal Tab Grouper Extension

A generic Chrome extension that enables any userscript to create and manage tab groups.

**Features:**
- **Universal compatibility**: Works with any website
- **Smart grouping**: Adds tabs to existing groups or creates new ones
- **Customizable colors**: 9 available colors (grey, blue, red, yellow, green, pink, purple, cyan, orange)
- **Conflict-free**: Uses DG-prefixed messaging system

**API Usage:**
```javascript
// Create a tab group
window.postMessage({
    type: 'DG_CREATE_TAB_GROUP',
    groupName: 'My Project',
    color: 'blue'  // optional, defaults to 'grey'
}, '*');
```

### 📋 Jira Userscripts

#### Copy Jira Ticket ID (`copy-jira-ticket-id.user.js`)
- **Purpose**: One-click copying of Jira ticket IDs
- **Features**: Automatic ticket detection, clipboard integration
- **UI**: Adds `[Copy Ticket ID]` button to ticket pages

#### Group Jira Tabs (`group-jira-tab-by-ticket-id.user.js`)
- **Purpose**: Automatically groups browser tabs by Jira ticket ID
- **Features**: Smart tab organization, visual grouping
- **UI**: Adds `[Create Tab Group]` button to ticket pages
- **Requires**: Universal Tab Grouper extension

## 🎯 Use Cases

### For Jira Users
- **Ticket Management**: Quickly copy ticket IDs for references
- **Tab Organization**: Group related tabs by ticket for better focus
- **Workflow Enhancement**: Streamlined navigation between tickets

### For Developers
- **Universal Extension**: Integrate tab grouping into any custom userscript
- **API Integration**: Use the messaging system for custom workflows
- **Cross-site Compatibility**: Works on any website with proper userscripts

## 🛠️ Installation Guide

### Prerequisites
- Chrome browser (or Chromium-based)
- [Tampermonkey extension](https://www.tampermonkey.net/)

### Step-by-Step Installation

1. **Clone or Download** this repository
   ```bash
   git clone [repository-url]
   cd tampermonkey-scripts
   ```

2. **Install Chrome Extension**:
   - Open `chrome://extensions/`
   - Toggle "Developer mode" ON
   - Click "Load unpacked"
   - Select the `dg-universal-tab-grouper/` folder
   - Verify "Universal Tab Grouper" appears in your extensions

3. **Install Jira Userscripts**:
   - Open Tampermonkey dashboard
   - Click "Create a new script"
   - Copy and paste content from `jira/copy-jira-ticket-id.user.js`
   - Save and enable the script
   - Repeat for `jira/group-jira-tab-by-ticket-id.user.js`

4. **Verify Installation**:
   - Navigate to any Jira ticket (e.g., `yourcompany.atlassian.net/browse/TICKET-123`)
   - Look for buttons: `[Copy Ticket ID] [Create Tab Group]`

## 📝 Usage Examples

### Basic Jira Workflow
1. Open a Jira ticket
2. Click `[Copy Ticket ID]` to copy the ticket number
3. Click `[Create Tab Group]` to group the current tab
4. Open related tickets/documents - they'll be added to the same group

### Custom Userscript Integration
```javascript
// ==UserScript==
// @name         My Custom Grouper
// @match        https://example.com/*
// @grant        none
// ==/UserScript==

function groupByProject() {
    const projectName = document.querySelector('.project-title').textContent;

    window.postMessage({
        type: 'DG_CREATE_TAB_GROUP',
        groupName: `Project: ${projectName}`,
        color: 'green'
    }, '*');
}

// Add a button to trigger grouping
const button = document.createElement('button');
button.textContent = 'Group This Tab';
button.onclick = groupByProject;
document.body.appendChild(button);
```

## 🎨 UI Features

### Visual Layout
- **Inline buttons**: Both Jira buttons appear side-by-side
- **Consistent spacing**: 10px gap between elements using CSS flexbox
- **Shared container**: Uses `dg-jira-buttons` ID for proper layout

### Tab Group Colors
- **Grey** (default): Neutral, professional appearance
- **Blue**: Information or documentation tabs
- **Green**: Completed or approved items
- **Red**: Urgent or error-related tabs
- **Yellow**: Review or pending items
- And 4 more colors for categorization

## 🔧 Configuration

### Extension Settings
- No configuration required - works out of the box
- Permissions: `tabs`, `tabGroups`, `https://*/*`, `http://*/*`

### Userscript Customization
```javascript
// Change default color in group-jira-tab-by-ticket-id.user.js
window.postMessage({
    type: 'DG_CREATE_TAB_GROUP',
    groupName: id,
    color: 'blue'  // Change this to your preferred color
}, '*');
```

## 🤝 Contributing

### Development Setup
1. Clone the repository
2. Make changes to userscripts or extension files
3. Test with local Chrome extension and Tampermonkey
4. Submit pull request with detailed description

### Adding New Userscripts
1. Create new `.user.js` file in appropriate folder
2. Use DG-prefixed messaging for tab grouping integration
3. Follow existing code style and documentation standards
4. Update this README with new functionality

## 📊 Browser Compatibility

| Browser | Extension Support | Userscript Support |
|---------|-------------------|-------------------|
| Chrome | ✅ Full support | ✅ Via Tampermonkey |
| Edge | ✅ Full support | ✅ Via Tampermonkey |
| Firefox | ❌ Not compatible | ✅ Via Tampermonkey |
| Safari | ❌ Not compatible | ⚠️ Limited support |

## 🐛 Troubleshooting

### Extension Not Working
- Verify extension is enabled in `chrome://extensions/`
- Check for permission prompts
- Reload the page after installation

### Userscripts Not Appearing
- Confirm Tampermonkey is installed and enabled
- Check script matches current website URL
- Verify scripts are enabled in Tampermonkey dashboard

### Buttons Not Grouped Properly
- Ensure both userscripts are installed and running
- Check browser console for JavaScript errors
- Verify Jira page structure hasn't changed

## 📚 References

- [Tampermonkey Documentation](https://www.tampermonkey.net/documentation.php)
- [Chrome Extension Development](https://developer.chrome.com/docs/extensions/)
- [Chrome Tab Groups API](https://developer.chrome.com/docs/extensions/reference/tabGroups/)

## 📄 License

This project is open source. Feel free to use, modify, and distribute according to your needs.

## 👨‍💻 Author

**Daniel Gamboa Estrada**
- Website: [danielgamboa.mx](https://danielgamboa.mx/)
- Namespace: `https://danielgamboa.mx/`

---

*Built with ❤️ for productivity and better web workflows*