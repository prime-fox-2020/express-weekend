const express = require('express');
const port = 3000;
const app = express();


app.set('view engine', 'ejs');

const indexRouter = require('./routes/index-router.js')
app.use(indexRouter)


const teachersRouter = require('./routes/teachers-router.js')
app.use(teachersRouter)


const studentsRouter = require('./routes/students-router.js')
app.use(studentsRouter)


const subjectsRouter = require('./routes/subjects-router.js')
app.use(subjectsRouter)

app.listen(port, () => {
    console.log(`App listening on port ${port}`);  
})
