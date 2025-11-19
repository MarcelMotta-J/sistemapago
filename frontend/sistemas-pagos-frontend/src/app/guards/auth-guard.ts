import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Auth } from '../services/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard{

  constructor(private authService:Auth, private router:Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if (this.authService.isAuthenticated) {
      return true;
    }else{
      this.router.navigateByUrl('/login');
      alert('mensagem do guard'); // 3h3min15seg
      return false;
    }
  
  } 

}
