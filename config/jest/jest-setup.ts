import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';
import 'regenerator-runtime/runtime';

Object.assign(global, { TextDecoder, TextEncoder });