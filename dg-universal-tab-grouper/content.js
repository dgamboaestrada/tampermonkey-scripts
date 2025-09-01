// Listen for messages from userscripts for DG Tab Grouper
window.addEventListener('message', (event) => {
    if (event.source !== window) return;
    const data = event.data;

    // Process tab group creation with DG Tab Grouper
    if (!data || data.type !== 'DG_CREATE_TAB_GROUP') return;

    chrome.runtime.sendMessage({
        type: 'DG_CREATE_TAB_GROUP',
        groupName: data.groupName || 'Unnamed Group',
        color: data.color || 'grey'
    });
});
