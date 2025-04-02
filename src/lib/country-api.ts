import type { IApiCountry, ICountry } from "./types"

const parseCountry = (country:IApiCountry): ICountry => ({
        name: country.name.common,
        flag: country.flags.svg
    })

export const listCountries = async (): Promise<ICountry[]> => {
    const countries = await fetch(`https://restcountries.com/v3.1/all?fields=name,flags`).then(res => res.json()) as IApiCountry[]
    return countries.map(parseCountry)
}