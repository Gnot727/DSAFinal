# COVID-19 Visualizer: A comparison of quick sort and merge sort algorithms
## Problem
The problem we are trying to solve is to compare the efficiency of different sorting algorithms on large data sets.

## Motivation
Sorted data can be very useful for data analysis. As datasets get larger, getting data into a sorted order can be a challenging/time consuming task. The goal of this project is to analyze which sorting algorithms are fast and efficient when dealing with larger data sets.

## Data
The public data set we will be using is the Novel Corona Virus 2019 Dataset that contains data on confirmed cases, recovered cases, and death count for different states, provinces, and countries around the world. The different columns in our dataset include a serial number, observation date, province/state, country/region, Last update time, confirmed, deaths, recovered. Serial number, confirmed, deaths, recovered are all numbers. Observation date and and last update time are date strings. The rest of the data are strings.
Link: https://www.kaggle.com/datasets/sudalairajkumar/novel-corona-virus-2019-dataset

## Deployment
### Backend
To deploy this projects backend, follow these steps from the root directory.
```
# ~/DSAFinal
cd backend
npm i
```
After installing the necessary dependencies, you must add your firebase config to a .env file. The following dictates this setup, starting from the root project directory.
```
# ~/DSAFinal
cd backend
touch .env
```
Inside of .env paste the following lines:
```
API_KEY = AIzaSyCOIBBvO3SLAyo0MMqz5aRpnYhTfqSHonU
AUTH_DOMAIN = dsafinal-f280b.firebaseapp.com
PROJECT_ID = dsafinal-f280b
STORAGE_BUCKET = dsafinal-f280b.firebasestorage.app
MESSAGING_SENDER_ID = 418799201938
APP_ID = 1:418799201938:web:a0274e4da313345c2f004b
MEASUREMENT_ID = G-SWL3THSSX9
PORT = 8080
```
After the following steps are completed, start the backend
```
# ~/DSAFinal/backend
npm start
```
### Frontend
To deploy this projects frontend
```
# ~/DSAFinal
cd frontend
npm i
npm run start
```
Open http://localhost:3000/ and access the application.

## Authors
- @jackplo
- @Gnot727
- @domsthatguy