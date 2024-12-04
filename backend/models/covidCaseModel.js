class CovidCase {
    constructor(confirmed, countryRegion, province, deaths, lastUpdate, observationDate, recovered, sNo) {
        this.confirmed = confirmed;
        this.countryRegion = countryRegion;
        this.province = province;
        this.deaths = deaths;
        this.lastUpdate = lastUpdate;
        this.observationDate = observationDate;
        this.recovered = recovered;
        this.sNo = sNo;
    }
};

export default CovidCase;

