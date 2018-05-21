function compareListItems(a, b) {

    let comparison = 0;
    if (b.completed && !a.completed) {
        comparison = -1;
    } else if (a.completed && !b.completed) {
        comparison = 1;
    }
    return comparison;
}

export {compareListItems};
