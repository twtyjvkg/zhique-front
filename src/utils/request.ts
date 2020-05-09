import fetch from 'dva/fetch';
import { routerRedux } from 'dva/router';
import { generateUrlWithGetParam } from './url';
import { filterNullValueObject } from './common';
import { getAccessToken, removeAccessToken } from './token';
import { getSession, setSession } from './storage';

const API_HOST = '';

const headers = {
    Pragma: 'no-cache',
    'Cache-Control': 'no-cache',
};

interface OptionsInit extends RequestInit {
    query?: object;
    responseType?: 'blob' | 'text';
}

interface NormalError extends Error {
    response: Response;
}

function checkStatus(response: Response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const errorText = response.statusText;
    const error: NormalError = new Error(errorText) as NormalError;
    error.name = `${response.status}`;
    error.response = response;
    throw error;
}

async function catchNormalError(e: NormalError) {
    if (e.name === '501') {
        try {
            const errorData = await e.response.json();
            window.dvaApp._store.dispatch({
                type: 'error/updateState',
                payload: {
                    normal501: errorData,
                },
            });
            window.dvaApp.dispatch(
                routerRedux.push({
                    pathname: '/exception/501',
                })
            );
        } catch (_) {
            throw e;
        }
    } else {
        throw e;
    }
}

export default function request(url: string, options: OptionsInit) {
    const defaultOptions = {
        credentials: 'include',
        headers,
    };
    let newUrl = !url.startsWith('/api') && !url.startsWith('http') ? `${API_HOST}${url}` : url;
    const newOptions = { ...defaultOptions, ...options };
    if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(newOptions.method || 'GET')) {
        if (!(newOptions.body instanceof FormData)) {
            newOptions.headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                ...newOptions.headers,
            };
            newOptions.body = JSON.stringify(newOptions.body);
        } else {
            newOptions.headers = {
                Accept: 'application/json',
                ...newOptions.headers,
            };
        }
    }
    if (newOptions.query) {
        let filterNullQuery = newOptions.query;
        if (newOptions.method === 'GET') {
            filterNullQuery = filterNullValueObject(newOptions.query);
        }
        newUrl = generateUrlWithGetParam(newUrl, filterNullQuery);
    }
    const accessToken = getAccessToken();
    if (accessToken) {
        newOptions.headers = {
            ...newOptions.headers,
            Authorization: `bearer ${accessToken}`,
        };
    }
    let fetchChain = fetch.default(newUrl, newOptions as RequestInit)
        .then(checkStatus)
        .then((response: Response) => {
            if (response.status === 204) {
                return {};
            }
            if (newOptions.responseType === 'blob') {
                return response.blob();
            }
            return newOptions.responseType === 'text' ? response.text() : response.json();
        });
    fetchChain = fetchChain.catch(catchNormalError).catch(e => {
        const status = e.name;
        if (!getSession('isErrorFlag')) {
            setSession('isErrorFlag', false);
        }
        if (status === '401') {
            removeAccessToken();
            return;
        }
    }) as Promise<{}>;
    return fetchChain;
}
