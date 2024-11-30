class CovidCase {
    constructor(confirmed, countryRegion, deaths, lastUpdate, observationDate, recovered, sNo) {
        this.confirmed = confirmed;
        this.countryRegion = countryRegion;
        this.deaths = deaths;
        this.lastUpdate = lastUpdate;
        this.observationDate = observationDate;
        this.recovered = recovered;
        this.sNo = sNo;
    }
};

export default CovidCase;

