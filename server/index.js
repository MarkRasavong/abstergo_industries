const express = require('express');
const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});