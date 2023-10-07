(function() {
  'use strict';

  // Function to add the UI toggle button
  function addUIButton() {
    var headerTag = document.getElementsByTagName('header')[0];
    if (headerTag) {
      var button = document.createElement('button');
      button.innerHTML = 'Toggle UI';
      button.style.marginRight = '10px';
      button.style.background = '#1890ff';
      button.style.color = '#fff';
      button.style.height = '40px';
      button.style.borderRadius = '10px';
      button.style.width = '100px';
      button.style.textAlign = 'center';
      button.style.verticalAlign = 'middle';
      button.style.outline = 'none';
      button.style.lineHeight = '40px';

      // Add event listener to the button
      button.addEventListener('click', toggleUI);

      headerTag.appendChild(button);
    }
  }

  // Function to toggle the UI version
  function toggleUI() {
    var iframe = document.getElementsByTagName('iframe')[0];
    if (iframe) {
      // Get the current URL of the iframe
      var currentUrl = iframe.src;

      // Toggle between the old and new UI versions
      var newUrl = currentUrl.includes('uiVersion=v1') ? currentUrl.replace('uiVersion=v1', 'uiVersion=v2') : currentUrl.replace('uiVersion=v2', 'uiVersion=v1');

      // Load the new URL in the iframe
      iframe.src = newUrl;
    }
  }

  // Function to handle the shortcut key
  function handleShortcut(event) {
    // Check if Ctrl key and Spacebar are pressed
    if (event.ctrlKey && event.code === 'Space') {
      event.preventDefault(); // Prevent any default browser behavior
      toggleUI(); // Execute the toggleUI function
    }
  }

  // Add event listener to handle the shortcut key
  document.addEventListener('keydown', handleShortcut);

  // Delay execution by 3 seconds using setTimeout
  setTimeout(addUIButton, 9000);
})();
