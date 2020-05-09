import { isArray } from 'lodash';

export function filterNullValueObject(obj: object) {
    const result = {};
    if (obj && Object.keys(obj).length >= 1) {
        Object.keys(obj).forEach(key => {
            if (key && obj[key] !== undefined && obj[key] !== '' && obj[key] !== null) {
                // 如果查询的条件不为空
                if (isArray(obj[key]) && obj[key].length === 0) {
                    return;
                }
                result[key] = obj[key];
            }
        });
    }
    return result; // 返回查询条件
}
