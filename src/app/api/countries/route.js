import { callCountryApi } from "@/src/lib/country-api";

const parseCountry = (countries) => {
    return countries.map((c) => {
        return {
            name : c.name.common,
            flag : c.flags.svg
        }
    })
}

export const GET = async () => {
    const response = await callCountryApi();
    return Response.json(parseCountry(response));
}