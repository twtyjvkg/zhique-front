import dva from 'dva';
import ZhiQue from './ZhiQue';

const app = dva({
    history: require('history').createBrowserHistory(),
});

// @ts-ignore
app.router(ZhiQue)

app.start('#root');
