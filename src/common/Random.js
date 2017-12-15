export function shuffle(array) {
    const copy = array;
    for (i = 0; i < array.length; i++) {
        const randomIndex = random(0, copy.length);
        const temp = copy[i];
        copy[i] = copy[randomIndex];
        copy[randomIndex] = temp;
    }
    return copy;
}

export function random(begin, end) {
    const min = Math.ceil(begin);
    const max = Math.floor(end);
    return Math.floor(Math.random() * (max - min)) + min;
}
