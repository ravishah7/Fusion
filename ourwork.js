// Data for each category, including images, h3, and p text
const items = [
    { 
        name: "Websites",
        images: ["./files/website/1.png", "./files/website/2.png", "./files/website/3.png"],
        titles: ["DuWaale", "NSE Institute", "Qayush"],
        descriptions: [
            "DuWaale is a Student Community of Delhi University Students for DU Students.",
            "NSE Institute is a free platform providing resources for entrance exams.",
            "Portfolio Website of one of our Developers."
        ]
    },
    { 
        name: "Branding",
        images: ["./files/brand/1.png", "./files/brand/2.png", "./files/brand/3.png"],
        titles: ["The Book House", "Eco Market", "Fresh Food"],
        descriptions: [
            "A library which provides various facilities for students.",
            "Eco Market provides organic vegetables and fruits for customers.",
            "Fresh Food is a restaurant offering tasty and delicious food."
        ]
    },
    { 
        name: "Graphics",
        images: ["./files/graphic/1.png", "./files/graphic/2.png", "./files/graphic/3.png"],
        titles: ["Duwaale", "UI UX Design", "Graphic Design"],
        descriptions: [
            "DuWaale is a Student Community of Delhi University Students for DU Students.",
            "Design is not just what it looks like and feels like, it's how it works.",
            "Good design is about being functional, not just visually appealing."
        ]
    }
];

let index = 0;

function cycleItems() {
    const displayItem = document.getElementById("displayItem");
    const cards = document.querySelectorAll(".card");

    // Update the displayed category text
    displayItem.textContent = items[index].name;

    // Update each card's image, title, and description based on the current category
    items[index].images.forEach((imageSrc, i) => {
        if (cards[i]) {
            cards[i].querySelector("img").src = imageSrc;
            cards[i].querySelector("h3").textContent = items[index].titles[i];
            cards[i].querySelector("p").textContent = items[index].descriptions[i];
        }
    });

    // Move to the next item in the list, cycling back to the start
    index = (index + 1) % items.length;
}

// Call cycleItems every 3 seconds to update content
setInterval(cycleItems, 5000);
