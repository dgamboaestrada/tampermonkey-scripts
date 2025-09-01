chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.type !== 'DG_CREATE_TAB_GROUP' || !sender.tab) return;

    const tabId = sender.tab.id;
    const groupName = message.groupName;
    const groupColor = message.color || 'grey';

    // Check if a group with this name already exists
    chrome.tabGroups.query({}, (groups) => {
        const existingGroup = groups.find(group => group.title === groupName);

        if (existingGroup) {
            // Add to existing group
            chrome.tabs.group({
                groupId: existingGroup.id,
                tabIds: tabId
            });
        } else {
            // Create new group
            chrome.tabs.group({ tabIds: tabId }, (groupId) => {
                if (chrome.runtime.lastError || groupId === undefined) return;
                chrome.tabGroups.update(groupId, {
                    title: groupName,
                    color: groupColor
                });
            });
        }
    });
});
