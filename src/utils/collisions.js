
function doDepositsOverlap(newDeposit, deposits) {
    for (var i = 0; i < deposits.length; i++) {
        var existingDeposit = deposits[i];
        var distance = Math.sqrt(Math.pow(newDeposit.x - existingDeposit.x, 2) + Math.pow(newDeposit.y - existingDeposit.y, 2));

        // If the distance between the centers of the two circles is less than the sum of their radii, they are overlapping
        if (distance < newDeposit.amount / 3 + existingDeposit.amount / 3) {
            return true;
        }
    }
    return false;
}