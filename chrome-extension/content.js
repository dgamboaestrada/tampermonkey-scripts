// Escucha mensajes de userscripts para DG Tab Grouper
window.addEventListener('message', (event) => {
    if (event.source !== window) return;
    const data = event.data;

    // Procesar creación de grupo con DG Tab Grouper
    if (!data || data.type !== 'DG_CREATE_TAB_GROUP') return;

    chrome.runtime.sendMessage({
        type: 'DG_CREATE_TAB_GROUP',
        groupName: data.groupName || 'Unnamed Group',
        color: data.color || 'grey'
    });
});
