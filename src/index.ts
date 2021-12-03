
import App from './app';
import * as dotenv from "dotenv";
import router from './routes/routes';
dotenv.config();


const PORT: number = process.env.PORT ? 
      parseInt(process.env.PORT as string, 10) 
      : 3000;

let dbConnection;


const app = new App(
  PORT,
  [router]
);
 
app.listen();