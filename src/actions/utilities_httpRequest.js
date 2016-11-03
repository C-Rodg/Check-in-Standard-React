import axios from 'axios';
axios.defaults.headers.common['Cache-Control'] = 'no-cache, no-store, must-revalidate';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const CC_URL = 'http://crodgers.corp.validar.com/checkin-react/Services/Methods.asmx/';

export { axios };

