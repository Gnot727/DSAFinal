function partition(arr, low, high, dataCategory, metrics, ascending)
{
    let pivot = arr[high];

    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        metrics.comparisons++;
        const comparison = ascending
            ? arr[j][dataCategory] < pivot[dataCategory]
            : arr[j][dataCategory] > pivot[dataCategory];
        
        if (comparison) {
            i++;
            swap(arr, i, j);
            metrics.swaps++;
        }
    }

    swap(arr, i + 1, high);
    metrics.swaps++;
    return i + 1;
}

function swap(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSort(arr, low, high, dataCategory, metrics, ascending)
{
    if (low < high) {
        metrics.partitions++;
        let pi = partition(arr, low, high, dataCategory, metrics, ascending);

        quickSort(arr, low, pi - 1, dataCategory, metrics, ascending);
        quickSort(arr, pi + 1, high, dataCategory, metrics, ascending);
    }
    return arr;
}

export default quickSort;