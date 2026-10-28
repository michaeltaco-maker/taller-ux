document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-nota');
  const input = document.getElementById('texto-nota');
  const lista = document.getElementById('lista-notas');
  const notificacion = document.getElementById('notificacion');
  const errorNota = document.getElementById('error-nota');
  function mostrarNotificacion(msj) {
    notificacion.textContent = msj;
    setTimeout(() => {
      notificacion.textContent = '';
    }, 3000);
  }
  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      errorNota.textContent = '';
    }
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const texto = input.value.trim();
    if (!texto) {
      errorNota.textContent = 'No puedes agregar una nota vacía.';
      input.focus();
      return;
    }
    errorNota.textContent = '';
    const li = document.createElement('li');
    const spanTexto = document.createElement('span');
    spanTexto.textContent = texto;
    const btnEliminar = document.createElement('button');
    btnEliminar.className = 'btn-eliminar';
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.setAttribute('aria-label', `Eliminar nota: ${texto}`);
    btnEliminar.addEventListener('click', () => {
      if (confirm(`¿Estás seguro de que deseas eliminar la nota "${texto}"?`)) {
        li.remove();
        mostrarNotificacion('Nota eliminada correctamente.');
      }
    });
    li.appendChild(spanTexto);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
    input.value = '';
    input.focus();
    mostrarNotificacion('¡Nota agregada con éxito!');
  });
});