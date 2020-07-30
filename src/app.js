import express from 'express';
import path from 'path';

const PORT = 3000;
// 포트는 3000번을 사용해
const app = express();

app.set("view engine", "pug");
// 야 app아, 너 pug 써!

app.use(express.static(path.join(__dirname, "/assets")));
// 야 app아, 너가 사용할 css나 js파일은 "/assets"에 있어!

app.get("/", (req, res) => {
    res.render("sadari");
});


app.get("/" , (req, res) => {
    res.render("index");
});
//자. 설정이 끝났어, 이제 시작해.
app.listen(PORT, () => {
    console.log(`${PORT} SERVER START`);
});