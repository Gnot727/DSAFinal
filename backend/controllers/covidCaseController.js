import firebase from '../middleware/firebase.js';
import CovidCase from '../models/covidCaseModel.js';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  startAfter,
  limit
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

        /* REVISIT THIS

        q = query(q, select("Country", "Province", dataCategory));

        */

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            const covidCase = new CovidCase(
                doc.data().Confirmed,
                doc.data().Country,
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

    // Sorting
    if (sortMethod === 'merge') {
        const [sortedArray, time] = mergeSort(results, dataCategory, ascending);
    } else if (sortMethod === 'quick') {
        const [sortedArray, time] = quickSort(results, dataCategory, ascending);
    }


    res.status(200).send(results);
}
