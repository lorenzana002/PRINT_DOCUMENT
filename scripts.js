document.addEventListener('DOMContentLoaded', () => {
    const documentos = [
        { nombre: 'CV ACTUALIZADO', archivo: 'Documentos/Azael_Lorenzana_Perez.pdf' },
        { nombre: 'EN MANTENIMIENTO 🚧', archivo: 'documentos/documento2.pdf' },
        { nombre: 'NO DISPONIBLE ☠💀', archivo: 'documentos/documento3.pdf' },
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
