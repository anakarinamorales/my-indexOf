export default function customIndexOf(entry, searchedElement) {
    if (Array.isArray(entry)) {
        return entry.findIndex((element) => element === searchedElement);
    }

    if(entry.includes(searchedElement)) {
        const searchedElementString = searchedElement.toString();
        for (const [index] of [...entry].entries()) {
            if(entry.substring(index, index + searchedElementString.length) === searchedElementString) {
                return index;
            }
        }
    }

    return -1;
}

Array.prototype.customIndexOf = function(searchedElement) {
    return this.findIndex((element) => element === searchedElement);
}

String.prototype.customIndexOf = function(searchedElement) {
    if(entry.includes(searchedElement)) {
        const searchedElementString = searchedElement.toString();
        for (const [index] of [...entry].entries()) {
            if(entry.substring(index, index + searchedElementString.length) === searchedElementString) {
                return index;
            }
        }
    }
}