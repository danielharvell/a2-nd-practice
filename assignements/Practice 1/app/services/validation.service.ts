import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

    constructor() { }    

    public validateName(newName: string, currentName: string){        
        if (newName && newName != currentName) {
            return true;
        } else {
            return false;
        }
    }
}