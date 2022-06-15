import {Middleware} from '@reduxjs/toolkit';
// import {loggerMiddleware as logger} from './logger';
import logger from 'redux-logger';

const middles: Middleware[] = [
  process.env.NODE_ENV !== 'production' && logger,
].filter((middleware): middleware is Middleware => Boolean(middleware));

export default middles;
