// Select all the img elements
const images = document.querySelectorAll("img");

let previouslyClickedImage = null; // To keep track of the previously clicked image

// Add a click event listener to each img element
images.forEach((img) => {
  img.addEventListener("click", () => {
    if (previouslyClickedImage) {
      // Remove the class from the previously clicked image
      previouslyClickedImage.classList.remove("active-container");
    }

    // Add a class to the clicked image
    img.classList.add("active-container");

    // Update the previouslyClickedImage to the current image
    previouslyClickedImage = img;
  });
});
