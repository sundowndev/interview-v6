import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import errorHandler from 'errorhandler';
import express from 'express';
import flash from 'express-flash';
import lusca from 'lusca';
import morgan from 'morgan';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

// Internal
import config from './config';
import api_response_error from './response/api_error_response';
import api_response from './response/api_response';
import logger from './utils/logger';

// Routes
import routes from './routes';

// Create Express server
const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Express configuration
app.use(cors(corsOptions));
app.set('port', config.server.port);
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));

app.use(morgan('[:method] :url :status - :response-time ms'));

/**
 * Registering routes
 */
app.use('/api', routes);

/**
 * Response
 */
app.use(api_response);
app.use(api_response_error);

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

async function main() {
  try {
    await createConnection({
      type: 'mongodb',
      host: config.db.host,
      port: config.db.port,
      username: config.db.username,
      password: config.db.password,
      database: config.db.database,
      entities: [__dirname + '/entity/*.js'],
      synchronize: true,
      logging: false,
      useNewUrlParser: true,
      validateOptions: { useUnifiedTopology: true },
    });
    // .then(c => c.dropDatabase());

    // ---------- SERVER ----------
    app.listen(app.get('port'), () => {
      logger.info(
        'App is running at http://localhost:%d in %s mode',
        app.get('port'),
        app.get('env'),
      );

      logger.warn('Press CTRL-C to stop\n');
    });

    return;
  } catch (error) {
    return logger.error(error);
  }
}

process.on('SIGINT', () => {
  process.exit(-1);
});

main();

export default app;
