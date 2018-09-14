import { Injectable } from '@angular/core';

@Injectable()
export class SessionUpdateService {
    setSessionUser(data) {
        localStorage.setItem('user', data.user);
    }

    updateAppTocken(awtToken: string) {
        localStorage.setItem('x-auth-token', awtToken);
        console.log('x-auth after login :' + localStorage.getItem('x-auth-token'));
    }
}