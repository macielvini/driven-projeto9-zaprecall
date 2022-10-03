const COLORS = (name) => {
  const colors = {
    background: "#fb6b6b", //pale red
    cardBackground: "#ffffd4", //lightyellow
    forgot: "#ff3030", //accent red
    almostForgot: "#ff922e", //orange
    zap: "#2fbe34", //green
    default: "#333333",
  };

  return colors[name];
};

export default COLORS;
