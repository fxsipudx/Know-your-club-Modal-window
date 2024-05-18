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


function closeModal(){
      modal.style.display = 'none';
}

modalClose.addEventListener('click',closeModal);

for(let i=0;i<thumbnails.length;i++){
    thumbnails[i].addEventListener('click',openModal)
}

window.addEventListener('click',function(event){
    if(event.target === modal){
        closeModal();
    }
});

window.addEventListener('keydown',function(event){
    if(event.key === 'Escape'){
        closeModal();
    }
})

