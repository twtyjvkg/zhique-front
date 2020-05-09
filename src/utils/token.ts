import Cookies, { CookieGetOptions } from 'universal-cookie';

const cookies = new Cookies();

export const ACCESS_TOKEN = 'access_token';

export function getAccessToken() {
    return cookies.get(ACCESS_TOKEN, {
        path: '/',
    } as CookieGetOptions);
}

export function extractAccessTokenFromHash(hash: any): string | null {
    if (hash) {
        const ai = hash.indexOf(ACCESS_TOKEN);
        if (ai !== -1) {
            const accessTokenReg = /#?access_token=[0-9a-zA-Z-]*/g;
            hash.match(accessTokenReg);
            const centerReg = hash.match(accessTokenReg)[0];
            return centerReg.split('=')[1];
        }
    }
    return null;
}

export function setAccessToken(token: string) {
    cookies.set(ACCESS_TOKEN, token, {
        path: '/',
    });
}

export function removeAccessToken() {
    cookies.remove(ACCESS_TOKEN, {
        path: '/',
    });
}
