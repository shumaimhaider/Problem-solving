// Q-2037. Minimum Number of Moves to Seat Everyone
// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/  

var minMovesToSeat = function (seats, students) {
    /* sorting ascending */
    seats.sort((a, b) => a - b)
    students.sort((a, b) => a - b)

    let count = 0;
    for (let i = 0; i < seats.length; i++) {
        count += Math.abs(seats[i] - students[i])  // Math.abs converts neagtive to positive
    }
    return count;
};