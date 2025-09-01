# Universal Tab Grouper

Una extensión genérica de Chrome para agrupar pestañas usando userscripts de Tampermonkey en cualquier sitio web.

## Instalación

1. Abre `chrome://extensions/`
2. Activa "Modo de desarrollador" (Developer mode)
3. Haz clic en "Cargar extensión sin empaquetar" (Load unpacked)
4. Selecciona esta carpeta `chrome-extension`

## Uso en Userscripts

Para usar esta extensión desde cualquier userscript, envía un mensaje usando:

```javascript
window.postMessage({
    type: 'DG_CREATE_TAB_GROUP',
    groupName: 'Mi Grupo',
    color: 'blue' // opcional, por defecto 'blue'
}, '*');
```

### Verificar disponibilidad

Para verificar si la extensión está instalada:

```javascript
// Verificar disponibilidad
window.postMessage({ type: 'DG_CHECK_TAB_GROUPER' }, '*');

// Escuchar respuesta
window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'DG_TAB_GROUPER_AVAILABLE') {
        // Extensión disponible
    }
});
```

### Colores disponibles
- `grey`, `blue`, `red`, `yellow`, `green`, `pink`, `purple`, `cyan`, `orange`

### Ejemplo de userscript

```javascript
// ==UserScript==
// @name         Mi Agrupador
// @match        https://ejemplo.com/*
// @grant        none
// ==/UserScript==

function crearGrupo() {
    const nombreGrupo = document.title; // o cualquier lógica
    
    window.postMessage({
        type: 'DG_CREATE_TAB_GROUP',
        groupName: nombreGrupo,
        color: 'green'
    }, '*');
}

// Agregar botón o llamar automáticamente
```

## Características

- **Universal**: Funciona en cualquier sitio web
- **Inteligente**: Si el grupo ya existe, agrega la pestaña al grupo existente
- **Personalizable**: Permite especificar nombre y color del grupo
- **Compatible**: Funciona con cualquier userscript de Tampermonkey

## Ejemplo incluido

El userscript `group-jira-tab-by-ticket-id.user.js` muestra cómo usar la extensión para agrupar pestañas de Jira por ID de ticket.
