// Fetches and injects an HTML component
function loadComponent(url, placeholderId) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                // Log a more helpful error to the console
                console.error(`Failed to load component: ${url}. Status: ${response.status}`);
                throw new Error(`Failed to load component: ${url}`);
            }
            return response.text();
        })
        .then(data => {
            const placeholder = document.getElementById(placeholderId);
            if (placeholder) {
                placeholder.innerHTML = data;
            } else {
                console.warn(`Placeholder not found: ${placeholderId}`);
            }
        })
        .catch(error => {
            console.error(error);
        });
}


// Load all common layout elements
async function loadLayout() {
    // We use Promise.all to run fetches in parallel
    // This is much faster than loading them one by one.
    await Promise.all([
        loadComponent("/classroom/template/loader.html", "loader-placeholder"),
        loadComponent("/classroom/template/navbar.html", "navbar-placeholder")
    ]);
}

// Function to load page-specific components
async function loadPageComponents() {
    // Find the header placeholder
    const headerPlaceholder = document.getElementById("header-placeholder");

    // Check if the placeholder exists
    if (headerPlaceholder) {
        // Get the specific header file name from the 'data-header-file' attribute
        const headerFile = headerPlaceholder.getAttribute("data-header-file");

        // If the attribute exists, load that file
        if (headerFile) {
            // Construct the full path
            const headerPath = `/classroom/template/${headerFile}`;
            await loadComponent(headerPath, "header-placeholder");
        } else {
            console.warn("No 'data-header-file' attribute found on 'header-placeholder'.");
        }
    }
    
    // You could add more page-specific parts here using the same pattern
    // e.g., for a dynamic footer
}

// --- CORE LOADER LOGIC ---

/**
 * Waits until an element is available in the DOM, then executes a callback.
 * This is a robust way to ensure the #loader element exists.
 * @param {string} selector - The CSS selector for the element (e.g., '#loader').
 * @param {function} callback - The function to run once the element is found.
 */
function waitForElement(selector, callback) {
    const checkElement = () => {
        const element = document.querySelector(selector);
        if (element) {
            callback(element);
        } else {
            // If not found, check again in 50 milliseconds
            setTimeout(checkElement, 50);
        }
    };
    // Start the check
    checkElement();
}

/** Hides the loader by adding the CSS class 'loader-hidden'. */
function hideLoader() {
    // Use the robust checker to ensure #loader is in the DOM
    waitForElement('#loader', (loader) => {
        // We add the class to make it fade out (assuming you have 'loader-hidden' CSS)
        loader.classList.add('loader-hidden'); 
    });
}


// --- Execution ---

// 1. Setup the 10-second GUARANTEE (Safety Timeout)
// If the page hasn't finished loading in 10 seconds, this will hide the loader.
const timeoutId = setTimeout(hideLoader, 10000); 

// 2. Hide loader as soon as possible (on page load event)
// 'load' fires after ALL resources (images, scripts, components) are loaded.
window.addEventListener('load', () => {
    // If the 'load' event fires, we hide the loader immediately...
    hideLoader(); 
    // ...and we STOP the 10-second timer from running.
    clearTimeout(timeoutId); 
});


// --- Run the functions ---

// 1. Load the main layout (loader, navbar) immediately
loadLayout();

// 2. Load page-specific parts (header, footer, etc.)
// We run this after the main layout to ensure placeholders are ready
loadPageComponents();