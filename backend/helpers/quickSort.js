function partition(arr, low, high, dataCategory)
{
    let pivot = arr[high];

    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j][dataCategory] < pivot[dataCategory]) {
            i++;
            swap(arr, i, j);
        }
    }

    swap(arr, i + 1, high);
    return i + 1;
}

function swap(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSort(arr, low, high, dataCategory)
{
    if (low < high) {
        let pi = partition(arr, low, high, dataCategory);

        quickSort(arr, low, pi - 1, dataCategory);
        quickSort(arr, pi + 1, high, dataCategory);
    }
    return arr;
}

export default quickSort;