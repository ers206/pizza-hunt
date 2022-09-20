const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/Pizza-hunt',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );
// below was in mod 18======= above was from end of mod 18 to connect mogodb and heroku

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pizza-hunt', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
