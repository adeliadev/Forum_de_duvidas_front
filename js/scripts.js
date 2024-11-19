// FUNÇÃO PARA DAR LIKE NO POST
// FUNÇÃO PARA ADICIONAR IMAGEM NO AVATAR
function previewImage(event) {
  const avatar = document.getElementById('avatar');
  const file = event.target.files[0];

  if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
          avatar.src = e.target.result;
      };
      reader.readAsDataURL(file);
  }
}
