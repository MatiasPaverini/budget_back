import express from 'express';
 
class App {
  public app: express.Application;
  public port: number;
 
  constructor(
    port: number,
    routes: Array<express.Router>) {
    this.app = express();
    this.port = port;
    this.routes(routes);
 
  }

  public addMiddleware(middleware: any) {
    this.app.use(middleware);
  }

  private middlewares(mware: any[]) {
    mware.forEach((middleware) => {
      this.app.use(middleware);
    });
  }

  private routes(routes: Array<express.Router>) {
    routes.forEach((route) => {
      this.app.use(route);
    });
  }

  ///TODO: Add database connection
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;