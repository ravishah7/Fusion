// Reviews data
const reviews = [
  {
      name: "Mohan Kumar",
      work: "Restaurant Owner",
      comment: "I was initially skeptical about hiring a digital marketing agency, but Fusionlancer completely changed my mind. Their team was incredibly knowledgeable and proactive.",
  },
  {
      name: "Rohit Mehta",
      work: "NSE Institute",
      comment: "While I appreciate the effort Fusionlancer put into our campaign, I felt that the results could have been better. The initial strategy seemed sound, but we didn’t see the same level of ROI as we had hoped.",
  },
  {
      name: "Shreya Agrawal",
      work: "DuWaale",
      comment: "From the very beginning, Fusionlancer has been a fantastic partner. Their team is always available to answer questions and provide support.",
  },
  {
      name: "Mohan Kumar",
      work: "Transport Business",
      comment: "Our experience with Fusionlancer was mixed. While they were able to improve our website’s visibility, we didn’t see the same level of engagement as we had anticipated.",
  },
];

let currentReview = 0;
const reviewContainer = document.getElementById("reviews");
const dotContainer = document.getElementById("dotContainer");

// Function to create dots based on reviews length
function createDots() {
  reviews.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.setAttribute("data-index", index);
      dot.addEventListener("click", () => showReview(index));
      dotContainer.appendChild(dot);
  });
}

// Function to update review content with sliding animation
function updateReview(index) {
  const review = reviews[index];
  const name = reviewContainer.querySelector(".name");
  const work = reviewContainer.querySelector(".work");
  const comment = reviewContainer.querySelector(".comment");

  // Add slide-out class for exit animation
  reviewContainer.classList.add("slide-out");
  
  setTimeout(() => {
      // Update the content
      name.textContent = review.name;
      work.textContent = review.work;
      comment.innerHTML = review.comment;

      // Reset and apply slide-in for enter animation
      reviewContainer.classList.remove("slide-out");
      reviewContainer.classList.add("slide-in");

      setTimeout(() => {
          reviewContainer.classList.remove("slide-in");
      }, 300); // Remove slide-in after animation completes
  }, 300); // Duration matches CSS animation time for smooth transition

  // Update active dot
  document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("active"));
  document.querySelector(`.dot[data-index="${index}"]`).classList.add("active");
}

// Functions for next and previous review
function nextReview() {
  currentReview = (currentReview + 1) % reviews.length;
  updateReview(currentReview);
}

function prevReview() {
  currentReview = (currentReview - 1 + reviews.length) % reviews.length;
  updateReview(currentReview);
}

document.getElementById("next").addEventListener("click", nextReview);
document.getElementById("prev").addEventListener("click", prevReview);

setInterval(nextReview, 2000); // Automatically change reviews every 2 seconds

// Initialize dots and the first review
createDots();
updateReview(currentReview);
