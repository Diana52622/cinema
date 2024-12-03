document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat');
    const selectedSeatsInput = document.getElementById('selectedSeats');
    const priceInfo = document.getElementById('priceInfo');

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            if (!seat.classList.contains('taken')) {
                seat.classList.toggle('selected');
                updateSelectedSeats();
            }
        });
    });

    function updateSelectedSeats() {
        const selectedSeats = [...document.querySelectorAll('.seat.selected')]
            .map(seat => seat.dataset.seat)
            .join(', ');

        const totalPrice = [...document.querySelectorAll('.seat.selected')]
            .reduce((total, seat) => total + parseInt(seat.dataset.price), 0);

        selectedSeatsInput.value = selectedSeats;
        priceInfo.textContent = `Выбрано мест: ${selectedSeats.length > 0 ? selectedSeats : '0'}, Общая сумма: ${totalPrice} р`;
    }
});
const movieSelect = document.getElementById('movie');
        const showtimeSelect = document.getElementById('showtime');

        movieSelect.addEventListener('change', function() {
            // Очистить предыдущие варианты времени
            showtimeSelect.innerHTML = '<option value="">-- Выберите сеанс --</option>';

            // Получить доступные сеансы для выбранного фильма
            const selectedOption = movieSelect.options[movieSelect.selectedIndex];
            const showtimes = JSON.parse(selectedOption.getAttribute('data-showtimes'));

            // Заполнить выпадающий список времён
            showtimes.forEach(function(time) {
                const option = document.createElement('option');
                option.value = time;
                option.textContent = time;
                showtimeSelect.appendChild(option);
            });
        });