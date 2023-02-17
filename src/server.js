const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const data = {
    "api": "0.13",
    "api_compatibility": ["14"],
    "space": "dezentrale",
    "logo": "https://wiki.dezentrale.space/images/3/35/LogoDezentrale-fixed.svg",
    "url": "https://dezentrale.space",
    "location": {
        "address": "Dreilindenstraße 19 (Hinterhaus), 04177 Leipzig, Germany",
        "lon": 12.338298261,
        "lat": 51.336438416
    },
    "contact": {
        "email": "vorstand@dezentrale.space",
        "matrix": "https://matrix.to/#/#projekte:chat.dezentrale.space",
        "ml": "discuss@dezentrale.space",
        "mastodon": "@dezentrale@chaos.social"
    },
    "issue_report_channels": ["email", "matrix"],
    "projects":{
      "freifunk-leipzig": "https://freifunk-leipzig.de/",
      "hardwareforfuture": "https://hardwareforfuture.de/",
       "techniksprechstunde": "https://techniksprechstunde.de/"
    },
};

app.get('/', (req, res) => {
    res.json(data);
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
