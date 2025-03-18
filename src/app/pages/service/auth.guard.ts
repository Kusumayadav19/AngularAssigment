import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const loggedUser = localStorage.getItem('userLogin');
  if(loggedUser != null){
    return true;
  }else{
    router.navigateByUrl('login');
    return false;
  }
};
