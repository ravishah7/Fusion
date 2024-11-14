const form = document.getElementById('contactForm');
        form.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent default form submission

            const formData = new FormData(form);
            const formObj = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('http://localhost:3000/send-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formObj)
                });

                if (response.ok) {
                    showCustomAlert(); // Show custom alert on success
                    form.reset();      // Optionally reset the form
                } else {
                    alert("There was an issue submitting the form. Please try again.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred. Please try again.");
            }
        });

        function showCustomAlert() {
            document.getElementById('overlay').style.display = 'block';
            document.getElementById('customAlert').style.display = 'block';
        }

        function closeAlert() {
            document.getElementById('overlay').style.display = 'none';
            document.getElementById('customAlert').style.display = 'none';
        }