document.addEventListener('DOMContentLoaded', () => {
    const documentos = [
        { nombre: 'CV ACTUALIZADO', archivo: 'Documentos/CV_00.pdf' },
        { nombre: 'EN MANTENIMIENTO 🚧', archivo: 'documentos/documento2.pdf' },
        { nombre: 'NO DISPONIBLE ☠💀', archivo: 'https://drive.google.com/file/d/1H6AjeSdG7AjsYxjyiSELrPfnJ4BPWhsq/view?usp=sharing' },
    ];

    const documentList = document.getElementById('document-list');
    const documentFrame = document.getElementById('document-frame');

    documentos.forEach(doc => {
        const li = document.createElement('li');
        li.textContent = doc.nombre;
        li.addEventListener('click', () => {
            documentFrame.src = doc.archivo;
        });
        documentList.appendChild(li);
    });
});
