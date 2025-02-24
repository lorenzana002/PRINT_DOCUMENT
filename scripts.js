document.addEventListener('DOMContentLoaded', () => {
    const documentos = [
        { nombre: 'CV ACTUALIZADO', archivo: 'Documentos/CV_00.pdf' },
      { nombre: '1', archivo: 'CFE Nov-Enero.pdf' },
        { nombre: '2', archivo: 'Sat1.pdf' },
        { nombre: '3', archivo: 'Sat2.pdf' },
      /*   { nombre: '4', archivo: 'IMG_20250223_0004.pdf' },   
        { nombre: '5', archivo: 'IMG_20250223_0005.pdf' },
        { nombre: '6', archivo: 'IMG_20250223_0006.pdf' },
        { nombre: '7', archivo: 'IMG_20250223_0008.pdf' },
        { nombre: '8', archivo: 'IMG_20250223_0009.pdf' },
        { nombre: '9', archivo: 'IMG_20250223_0010.pdf' },
        { nombre: '10', archivo: 'IMG_20250223_0011.pdf' },
        { nombre: '11', archivo: 'IMG_20250223_0012.pdf' },
        { nombre: '12', archivo: 'IMG_20250223_0013_NEW.pdf' }, */
        { nombre: 'EN MANTENIMIENTO 🚧', archivo: 'referencia_7800820.pdf' },
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
