const fs = require("fs");
const path = require("path");
let files = [];

const getFilesRecursively = (directory) => {
  const filesInDirectory = fs.readdirSync(directory);
  for (const file of filesInDirectory) {
    const absolute = path.join(directory, file);
    if (fs.statSync(absolute).isDirectory()) {
      getFilesRecursively(absolute);
    } else {
      files.push(absolute);
    }
  }
};

getFilesRecursively(".tmp");

const act = files.filter((a) => {
  return a.includes("actual");
});

const dif = files.filter((a) => {
  return a.includes("diff");
});

act.length = dif.length;

let actimg = "";
let difimg = "";

act.forEach((element) => {
  actimg += `<div><img src="../${element.replace(/\\/g, "/")}" /></div>`;
});
dif.forEach((element) => {
  difimg += `<div><img src="../${element.replace(/\\/g, "/")}" /></div>`;
});

if (!fs.existsSync("visuals")) {
  fs.mkdirSync("visuals");
}

let htmlContent = `<html>
<style>
@import "compass/css3";

@import url('https://fonts.googleapis.com/css?family=Open+Sans');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: 14px/1 'Open Sans', sans-serif;
  color: #555;
  background: #e5e5e5;
}

.gallery {
  min-width: 960px;
  margin: 0 auto;
  padding: 5px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}

.gallery > div {
  position: relative;
  float: left;
  padding: 5px;
}
.gallery > .col > div {
    padding: 5px;
  }
.gallery > .col > div > img {
  width: 100%;
 }

.gallery > .col > div:hover {
  z-index: 1;
}

.gallery > .col  > div:hover > img {
  /*transform: scale(2.8,2.8);
  transition: .3s transform;*/
}

.cf:before, .cf:after {
  display: table;
  content: "";
  line-height: 0;
}

.cf:after {
  clear: both;
}

h1 {
  margin: 40px 0;
  font-size: 24px;
  text-align: center;
}
h2 {
    margin: 10px 0;
    font-size: 20px;
    text-align: center;
  }
.col{
    display:flex;
    flex-direction:column;
    width:50%;
    align-items:center;
}
</style>

<body>
<h1>Visual Regression Results</h1>

<div class="gallery cf">
<div class="col">
<h2>Original Image</h2>
${actimg}

</div>
<div class="col">
<h2>Differences Image</h2>

${difimg}
</div>
</div>

</body>

</html>`;

fs.writeFile("visuals/report.html", htmlContent, (error) => {
  console.log(error);
});
