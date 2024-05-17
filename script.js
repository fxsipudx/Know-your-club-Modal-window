const modal = document.getElementById('clubModal');
const thumbnails = document.querySelectorAll('.thumbnail');
const modalClose = document.querySelector('.modal-close')

function openModal(event){
        const thumbnail = event.currentTarget;
        const name = thumbnail.getAttribute('data-name');
        const info = thumbnail.getAttribute('data-info');
        modal.querySelector('.modal-header').textContent = name;
        modal.querySelector('.modal-body').textContent = info;
        modal.style.display = 'block';
}
modalClose.addEventListener('click',closeModal);
function closeModal(){
      modal.style.display = 'none';
}

for(let i=0;i<thumbnails.length;i++){
    thumbnails[i].addEventListener('click',openModal)
}