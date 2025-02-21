// class BookingService {
//     getBookings() {
//         const bookings = localStorage.getItem('bookings');
//         return bookings ? JSON.parse(bookings) : [];
//     }

//     addBooking(booking) {
//         const bookings = this.getBookings();
//         bookings.push(booking);
//         localStorage.setItem('bookings', JSON.stringify(bookings));
//     }
// }

// export default new BookingService();








class BookingService {
    getBookings() {
        const bookings = localStorage.getItem('bookings');
        return bookings ? JSON.parse(bookings) : [];
    }

    addBooking(booking) {
        const bookings = this.getBookings();
        bookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(bookings));
    }
}

export default new BookingService();
