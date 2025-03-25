export const callCountryApi = async () => {
    return fetch(`https://restcountries.com/v3.1/all?fields=name,flags`).then(res => res.json());
}