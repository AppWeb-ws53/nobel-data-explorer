import {Affiliation} from "./affiliation.entity.js";

export class Prize {
    constructor(year = '',
                category = '',
                share = '',
                motivation = '',
                affiliations = null) {
        this.year = year;
        this.category = category;
        this.share = share;
        this.motivation = motivation;
        this.affiliations = affiliations.map(affiliation => new Affiliation(
            affiliation.name,
            affiliation.city,
            affiliation.country
        ));
    }
}