import dotenv from 'dotenv';

if(process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000

import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public"))); //! static folder declaration

app.use(express.json())

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'src/views'));

// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ limit: "10mB", extended: false })); //! for FORMS USAGE

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
});