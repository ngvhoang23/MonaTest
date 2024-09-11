export function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
        const context = this;

        // Clear the previous timeout if a new call comes in
        clearTimeout(timeoutId);

        // Set a new timeout
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}
