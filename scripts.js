// FUNÇÃO PARA DAR LIKE NO POST
function toggleLike(element) {
  const unlikedImage = "./images/postagens/unliked.svg";
  const likedImage = "./images/postagens/liked.svg";
  if (element.src.includes("unliked.svg")) {
    element.src = likedImage;
  } else {
    element.src = unlikedImage;
  }
}
