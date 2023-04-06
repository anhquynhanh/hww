function phuongtrinh(a, b, c) {
    let discriminant = b ** 2 - 4 * a * c;

    if (discriminant < 0) {
        return "No real solutions";
    } else if (discriminant === 0) {
        let x = -b / (2 * a);
        return x;
    } else {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [x1, x2];
    }
}

console.log(phuongtrinh(1, -3, 2));
console.log(phuongtrinh(1, 2, 1));
console.log(phuongtrinh(2, 3, 4));