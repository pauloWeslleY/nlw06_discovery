export default function Modal() {

   const cancelButton = document.querySelector('.button.cancel');
   const modalWrapper = document.querySelector('.modal__wrapper');

   cancelButton.addEventListener('click', close);

   function open() {
      //! funcionalidade de atribuir a classe active para o modal
      modalWrapper.classList.add("active");
   }
   function close() {
      //! funcionalidade de remover a classe active da modal
      modalWrapper.classList.remove("active");
   }

   return {
      open,
      close
   }
}