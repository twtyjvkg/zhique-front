import qs from 'query-string';

export function generateUrlWithGetParam(url: string, params: object) {
    let newUrl = url;
    if (params && Object.keys(params).length >= 1) {
        const newParams = params;
        if (Object.keys(newParams).length >= 1) {
            newUrl += `${url.indexOf('?') >= 0 ? '&' : '?'}${qs.stringify(newParams)}`;
        }
    }
    return newUrl;
}
