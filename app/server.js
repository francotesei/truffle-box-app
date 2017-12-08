import { default as express} from 'express';
import { default as bodyParser} from 'body-parser';
import { default as Web3} from 'web3';
import {default as morgan} from 'morgan'

import {default as routes} from './routes/index';

const http_port = 8080;

var initHttpServer = () => {
    var server = express();
    server.use(bodyParser.json());
    server.use(morgan('combined'));
    server.use('/assets', express.static('assets'));
    routes(server);
    server.listen(http_port, () => console.log('Listening http on port: ' + http_port));
  }

initHttpServer();
