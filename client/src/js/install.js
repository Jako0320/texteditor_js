const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// Event Listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
 window.deferredPrompt = event;

 butInstall.classList.toggle('hidden', false);
});

// Event Listener for click event on butInstall element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  promptEvent.prompt();
  
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

// Event listener for appinstalled event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
