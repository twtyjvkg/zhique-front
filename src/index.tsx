import dva from 'dva';
import App from './App';

const app = dva({
    history: require('history').createBrowserHistory(),
});

// @ts-ignore
app.router(App)

app.start('#root');
