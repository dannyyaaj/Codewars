var Ghost = function() {
  const colors = ['white', 'yellow', 'purple', 'red'];
  let rand = Math.round(Math.random() * 4);
  this.color = colors[rand];
};
