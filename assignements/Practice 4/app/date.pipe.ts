import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: "ndDate"})
export class ndDate implements PipeTransform{
    transform(APIDate:string): Date{
        return new Date(parseInt(APIDate.match(/\d+/)[0], 10)); 
    }
}