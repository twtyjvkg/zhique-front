import { DvaInstance } from 'dva';

declare global {
    interface Window {
        dvaApp: DvaInstance;
    }
}
