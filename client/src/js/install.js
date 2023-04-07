const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// this is the event that fires when the browser detects that the PWA is installable
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt fired', event);
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.removeAttribute('hidden');
});

// this is the event that fires when the user clicks the install button
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    if (result.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt', result);
    } else {
        console.log('User dismissed the A2HS prompt', result);
    }
    window.deferredPrompt = null;
    butInstall.setAttribute('hidden', true);
});

// this will fire when the PWA is installed
window.addEventListener('appinstalled', (event) => {
    console.log('a2hs installed');
    window.deferredPrompt = null;
});
