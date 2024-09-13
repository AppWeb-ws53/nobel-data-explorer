import {Prize} from "./prize.entity.js";

export class Laureate {
    constructor(id = '',
                firstname = '',
                surname = '',
                born = '',
                died = '',
                bornCountry = '',
                bornCountryCode = '',
                bornCity = '',
                diedCountry = '',
                diedCountryCode = '',
                diedCity = '',
                gender = '',
                prizes = null
                ){
        this.id = id;
        this.firstname = firstname;
        this.surname = surname;
        this.born = born;
        this.died = died;
        this.bornCountry = bornCountry;
        this.bornCountryCode = bornCountryCode;
        this.bornCity = bornCity;
        this.diedCountry = diedCountry;
        this.diedCountryCode = diedCountryCode;
        this.diedCity = diedCity;
        this.gender = gender;
        this.prizes = prizes.map(prize => new Prize(
            prize.year,
            prize.category,
            prize.share,
            prize.motivation,
            prize.affiliations));
    }
}

