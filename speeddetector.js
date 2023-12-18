function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const pointsPerKmOver = 5;
    const maxPointsBeforeSuspension = 12;

    // Check if the speed is less than or equal to the speed limit
    if (speed <= speedLimit) {
        console.log("Ok");
        return;
    }

    // Calculate demerit points
    const demeritPoints = Math.floor((speed - speedLimit) / pointsPerKmOver);

    // Output the result
    console.log(`Points: ${demeritPoints}`);

    // Check if the driver's license should be suspended
    if (demeritPoints > maxPointsBeforeSuspension) {
        console.log("License suspended");
    }
}

// Example: Call the function with a speed of 80
calculateDemeritPoints(80);
