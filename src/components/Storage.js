export function persistState(state) {
    localStorage.setItem("savedItems", JSON.stringify(state));
}

export function loadState() {
    const savedItems = localStorage.getItem("savedItems");
    if (savedItems) {
        return JSON.parse(savedItems)
    } else {
        return [];
    }
}