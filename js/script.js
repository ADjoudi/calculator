const btns = document.querySelectorAll('.insideBtn');
btns.forEach((btn)=>{
    btn.addEventListener('mousedown', (e)=>{
        btn.classList.toggle('click');
    });
    btn.addEventListener('mouseover', (e)=>{
        e.target.style.cursor = 'pointer';
    });
    btn.addEventListener('mouseup', (e)=>{
        setTimeout(() => {
            btn.classList.toggle('click');
        }, 100);
    });
});

