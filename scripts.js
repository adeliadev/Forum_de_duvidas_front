// FUNÇÃO PARA DAR LIKE NO POST
// function toggleLike(element) {
//   const unlikedImage = "./images/postagens/unliked.svg";
//   const likedImage = "./images/postagens/liked.svg";
//   if (element.src.includes("unliked.svg")) {
//     element.src = likedImage;
//   } else {
//     element.src = unlikedImage;
//   }
// }

function toggleLike(likeIcon) {
  if (!isUserLoggedIn()) {
    const loginModal = document.getElementById('loginModal');
    loginModal.style.display = 'flex';
  } else {
    // Se o usuário estiver logado, altera o estado de curtida
    if (likeIcon.src.includes('unliked.svg')) {
      likeIcon.src = '../images/postagens/liked.svg'; // Substitua com a imagem de curtida
    } else {
      likeIcon.src = '../images/postagens/unliked.svg'; // Substitua com a imagem de não curtida
    }
  }
}