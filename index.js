const express = require('express');
const app = express();
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cros = require('cors');


dotenv.config();
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

console.log('DATABASE... URL['+process.env.DB_CONNECT+']')
mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log('DATABASE... CONNECTED'))
    .catch(err => console.error('DATABASE... COULD NOT CONNECTED', err))

app.use(cros());
app.use(express.json());
app.use('/api/user', authRoute);
app.use('/api/post', postRoute);


app.listen(process.env.SERVER_PORT, () => console.log('SERVER RUNNING... PORT ['+process.env.SERVER_PORT+']'));