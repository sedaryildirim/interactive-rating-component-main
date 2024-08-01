document.addEventListener('DOMContentLoaded', () => {
    const ratingForm = document.getElementById('rating-form');
    const ratingStart = document.getElementById('rating-start');
    const thankYouStart = document.getElementById('thank-you-start');
    const selectedRatingSpan = document.getElementById('selected-rating');
    const submitButton = document.querySelector('button[type="submit"]');
    let selectedRating = 0;

    const ratingButtons = document.querySelectorAll('input[name="rating"]');
    ratingButtons.forEach(button => {
        button.addEventListener('change', (e) => {
            selectedRating = e.target.value;
            submitButton.classList.add('pulse');
            setTimeout(() => submitButton.classList.remove('pulse'), 500);
        });
    });

    ratingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (selectedRating > 0) {
            selectedRatingSpan.textContent = selectedRating;

            ratingStart.classList.add('fade-out');
            setTimeout(() => {
                ratingStart.classList.add('hidden');
                thankYouStart.classList.remove('hidden');
                thankYouStart.classList.add('fade-in');
            }, 300);
        } else {
            alert('Please select a rating before submitting.');
        }
    });
});