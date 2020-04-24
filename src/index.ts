import dva from 'dva';
import ZhiQue from './ZhiQue';

const app = dva({
    history: require('history').createBrowserHistory(),
});

window.dvaApp = app;

// @ts-ignore
app.router(ZhiQue)

app.start('#root');
