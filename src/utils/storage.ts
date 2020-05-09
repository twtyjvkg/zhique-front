export function setSession(key: string, value: any) {
    const formatValue = JSON.stringify(value);
    window.sessionStorage.setItem(key, formatValue);
    return true;
}

export function getSession(key: string) {
    const value = sessionStorage.getItem(key);
    if (value) {
        return JSON.parse(value);
    }
    return false;
}
