import path from 'path';
import express from 'express';
import homeRoutes  from './routes/home';
import assignmentRoutes  from './routes/assignments';
// import assignmentAPIRoutes  from './routes/assignments-api';

const app = express();


// Settings for web pages
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));


app.use("/", homeRoutes);
app.use("/assignments", assignmentRoutes);
// app.use("/assignments-api", assignmentAPIRoutes);



// This is a catch-all for any other URL...
// app.use((req,res) => {
//     res.status(404).render('error/not-found');
//   });


const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));
