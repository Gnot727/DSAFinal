import firebase from '../middleware/firebase.js';
import CovidCase from '../models/covidCaseModel.js';
import mergeSort from '../helpers/mergeSort.js';
import quickSort from '../helpers/quickSort.js';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where
} from 'firebase/firestore';

const db = getFirestore(firebase);

export const getCasesByRequest = async (req, res, next) => {
    const results = [];
    const country = req.body.country;
    let province;
    if (req.body.province) {
        province = req.body.province;
    }
    const dataCategory = req.body.dataCategory;
    const sortMethod = req.body.sortMethod;
    const ascending = req.body.ascending;

    try {
        const covidCaseRef = collection(db, 'covid_19_data');

        let q;
        if (province) {
            q = query(
                covidCaseRef,
                where('Country', '==', country),
                where('Province', '==', province),
                )
        } else {
            q = query(covidCaseRef, where('Country', '==', country));
        }

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const covidCase = new CovidCase(
                doc.data().Confirmed,
                doc.data().Country,
                doc.data().Province,
                doc.data().Deaths,
                doc.data().LastUpdate,
                doc.data().ObservationDate,
                doc.data().Recovered,
                doc.data().SNo
            );
            results.push(covidCase);
        });
    } catch (error) {
        res.status(400).send(error.message);
        return;
    }

    if (sortMethod === 'Merge Sort') {
        const dataObj = performMergeSort(results, dataCategory, ascending);
        res.status(200).send(dataObj);
    } else if (sortMethod === 'Quick Sort') {
        const dataObj = performQuickSort(results, dataCategory, ascending)
        res.status(200).send(dataObj);
    }
}

const performMergeSort = (results, dataCategory, ascending) => {
    const initialMemory = process.memoryUsage().heapUsed;
    const metrics = { comparisons: 0, merges: 0}
    
    const start = performance.now();
    const sortedArray = mergeSort(results, 0, results.length - 1, dataCategory, metrics, ascending);
    const end = performance.now();
    const time = (end - start).toFixed(2);

    const finalMemory = process.memoryUsage().heapUsed;
    const memoryUsage = Math.round(Math.abs((finalMemory - initialMemory) / 1024 / 1024) * 100) / 100;

    const dataObj = {
        time: time,
        sorted: sortedArray,
        memoryUsage: memoryUsage,
        comparisons: metrics.comparisons,
        merges: metrics.merges
    }

    return dataObj;
}

const performQuickSort = (results, dataCategory, ascending) => {
    const initialMemory = process.memoryUsage().heapUsed;
    const start = performance.now();

    const metrics = { comparisons: 0, swaps: 0, partitions: 0 };
    const sortedArray = quickSort(results, 0, results.length - 1, dataCategory, metrics, ascending);

    const end = performance.now();
    const time = (end - start).toFixed(2);
    const finalMemory = process.memoryUsage().heapUsed;
    const memoryUsage = Math.round(Math.abs((finalMemory - initialMemory) / 1024 / 1024) * 100) / 100;

    const dataObj = {
        time: time,
        sorted: sortedArray,
        memoryUsage: memoryUsage,
        comparisons: metrics.comparisons,
        swaps: metrics.swaps,
        partitions: metrics.partitions
    }

    return dataObj;
}