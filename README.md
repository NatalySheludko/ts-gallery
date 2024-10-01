## Image Search Application
This project is an Image Search Application built using React+Vite and TypeScript. It allows users to search for images by keywords and view them in a dynamic gallery with pagination support. The app uses the Unsplash API to fetch images and display them in various resolutions.
Adaptive design for desktop (1440px).

## Features
**Search Functionality**:
Users can search for images using the search bar. Upon form submission, the application sends a request to the Unsplash API and displays the results.
The search bar includes validation to ensure that users input a search term before submitting the form. An error message is displayed if the field is empty, using the React Hot Toast notification library.

**Image Gallery**:
Images fetched from the API are displayed in a grid layout. Each image is rendered as an individual card, showing a preview of the image.
The gallery is rendered only when images are available. If there are no results, it remains hidden.

**Image Cards**:
Each image card shows the preview of an image, and additional information like the image's alt description is displayed for better accessibility.

**Loader Component**:
While images are being fetched, a loading spinner is displayed beneath the image gallery. The loader remains visible as new images are fetched but doesn't replace the gallery.

**Error Handling**:
If an error occurs while fetching data from the Unsplash API, an error message is displayed to the user instead of the image gallery.

**Pagination with Load More Button**:
Users can load more images by clicking the "Load More" button, which fetches the next page of search results from the API. The new images are appended to the existing gallery.
The "Load More" button only appears if there are images to display and more images are available.

**Image Modal**:
Users can click on an image to open a React Modal that displays the image in a larger format. The modal is fully accessible and can be closed by clicking outside the modal or pressing the ESC key.
The modal also displays additional information, such as the image's author and description.

## Libraries Used
- React: A JavaScript library for building user interfaces.
- Vite: A fast build tool for modern web projects.
- Unsplash API: An API used to fetch images.
- Axios: A promise-based HTTP client for making API requests.
- React Hot Toast: A notification library for user feedback.
- React Modal: A library used to create accessible modal windows.
- React Loader Spinner: A spinner used as a loading indicator.
- CSS Modules: For scoped and modular CSS styling.


