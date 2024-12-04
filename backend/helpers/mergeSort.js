const merge = (arr, left, mid, right, dataCategory, metrics, ascending) => {
    const n1 = mid - left + 1;
    const n2 = right - mid;
    
    const newLeft = new Array(n1);
    const newRight = new Array(n2);

    for (let i = 0; i < n1; i++) {
        newLeft[i] = arr[left + i];
    }
    for (let j = 0; j < n2; j++) {
        newRight[j] = arr[mid + 1 + j];
    }

    let i = 0, j = 0;
    let k = left;

    metrics.merges++;

    while (i < n1 && j < n2) {
        metrics.comparisons++;
        const comparison = ascending
            ? newLeft[i][dataCategory] <= newRight[j][dataCategory]
            : newLeft[i][dataCategory] > newRight[j][dataCategory];

        if (comparison) {
            arr[k] = newLeft[i];
            i++;
        } else {
            arr[k] = newRight[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = newLeft[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = newRight[j];
        j++;
        k++;
    }
};

const mergeSort = (arr, left, right, dataCategory, metrics, ascending) => {
    if (left < right) {
        const mid = left + Math.floor((right - left) / 2);

        mergeSort(arr, left, mid, dataCategory, metrics, ascending);
        mergeSort(arr, mid + 1, right, dataCategory, metrics, ascending);

        merge(arr, left, mid, right, dataCategory, metrics, ascending);
    }
    return arr;
};

export default mergeSort;