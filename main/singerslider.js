 const slider = document.getElementById('slider');
        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');

        let currentIndex = 0;

        function showSlide(index) {
            const slides = document.querySelectorAll('.slide');
            if (index < 0) {
                currentIndex = slides.length - 1;
            } else if (index >= slides.length) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        prevBtn.addEventListener('click', () => {
            showSlide(currentIndex - 1);
        });

        nextBtn.addEventListener('click', () => {
            showSlide(currentIndex + 1);
        });

        setInterval(() => {
            showSlide(currentIndex + 1);
        }, 10000);