const oldTime = Date.now();

function go() {
  let start = setInterval(() => {
    const currentTime = Date.now();
    const diff = currentTime - oldTime;

    const sec = Math.floor(diff / 1000);
    console.log(sec);

    if (sec == 5) clearInterval(start);
  }, 1000);
}

go();
