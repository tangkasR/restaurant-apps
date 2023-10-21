let counter = 1;
setInterval(() => {
  document.getElementById(`radio${counter}`).checked = true;
  // eslint-disable-next-line no-plusplus
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 4000);