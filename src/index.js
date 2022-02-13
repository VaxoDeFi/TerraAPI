import app from './config/server';
// import tasks from './config/cron';
const port = 4000;



// require("dotenv").config();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use(helmet());
// app.use(morgan("combined"));

// server.use(require('./routes'));


// console.log(mongo.getDatabase());
// coins.insertCoin()

// cron.schedule("1 * * * * *", async () => {
//   console.log("running a task every minute");
//   const list = await getListCoins();
//   console.log(list);
// });
app.listen(port, () => {
  console.log(`API Pond at http://localhost:${port}`);
});
