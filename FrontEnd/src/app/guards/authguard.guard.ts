import { CanActivateFn } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';


export const authguardGuard: CanActivateFn = (route, state) => {
  // const authService = inject();
  const cookie = inject(CookieService);
  const router = inject(Router);
 
  
  const mytoken =cookie.get('token');
  if(mytoken)
  { 
    console.log("I am From Auth Guard");
    return true;
  }
  else
  {
    
    router.navigate(['/login']);
    return false;

  }
};
