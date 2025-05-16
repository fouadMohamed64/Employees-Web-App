import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const authGuard: CanActivateFn = (route, state) => {
  
  let router = inject(Router)
  let isLogedIn = localStorage.getItem('isLogedIn');
  if (isLogedIn)
    return true;
  else {
    router.navigateByUrl('login');
    Swal.fire({
      position: "top",
      icon: "warning",
      title: "You Must Login First",
      showConfirmButton: false,
      timer: 1500
    });
    return false; 
  }
  
};
