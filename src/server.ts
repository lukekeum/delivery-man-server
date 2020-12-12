import './env';
import app from './app';
import connectionOptions from './database';
import { createConnection } from 'typeorm';

const { PORT = String(5000) } = process.env;

createConnection(connectionOptions);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
