export interface Rate {
    base_code: string,
    conversion_rates: RateItem,
    documentation: string,
    result: string,
    terms_of_use: string,
    time_last_update_unix: number,
    time_last_update_utc: string,
    time_next_update_unix: number,
    time_next_update_utc: string,
}

export interface RateItem {
    EUR: number,
    RUB: number,
    USD: number
}