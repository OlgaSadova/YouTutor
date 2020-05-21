import React from 'react'


function showAlert() {
    document.addEventListener('DOMContentLoaded', () => {
        (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
          $notification = $delete.parentNode;
      
          $delete.addEventListener('click', () => {
            $notification.parentNode.removeChild($notification);
          });
        });
      });

    return (

        <div class="notification is-danger is-light">
  <button class="delete"></button>
  Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
  consectetur adipiscing elit
</div>
        
        


    )
}

export default showAlert
