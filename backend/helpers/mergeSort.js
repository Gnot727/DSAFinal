// const merge = (arr, left, mid, right, dataCategory) => {
//     const n1 = mid - left + 1;
//     const n2 = right - mid;

//     const newLeft = new Array(n1);
//     const newRight = new Array(n2);

//     for (let i = 0; i < n1; i++)
//         newLeft[i] = arr[left + i];
//     for (let j = 0; j < n2; j++)
//         newRight[j] = arr[mid + 1 + j];

//     let i = 0, j = 0;
//     let k = left;

//     while (i < n1 && j < n2) {
//         if (newLeft[i][dataCategory] <= newRight[j][dataCategory]) {
//             arr[k] = newLeft[i];
//             i++;
//         } else {
//             arr[k] = newRight[j];
//             j++;
//         }
//         k++;
//     }

//     while (i < n1) {
//         arr[k] = newLeft[i];
//         i++;
//         k++;
//     }

//     while (j < n2) {
//         arr[k] = newRight[j];
//         j++;
//         k++;
//     }
// }

// const mergeSort = (arr, left, right, dataCategory) => {
//     if (left >= right) {
//         return;
//     }
//     const mid = left + Math.floor((right - left) / 2);
//     mergeSort(arr, left, mid);
//     mergeSort(arr, mid + 1, right);
//     merge(arr, left, mid, right);
// }

const merge = (arr, left, mid, right, dataCategory) => {
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

    while (i < n1 && j < n2) {
        if (newLeft[i][dataCategory] <= newRight[j][dataCategory]) {
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

const mergeSort = (arr, left, right, dataCategory) => {
    if (left < right) {
        const mid = left + Math.floor((right - left) / 2);

        mergeSort(arr, left, mid, dataCategory);
        mergeSort(arr, mid + 1, right, dataCategory);

        merge(arr, left, mid, right, dataCategory);
    }
    return arr;
};

export default mergeSort;