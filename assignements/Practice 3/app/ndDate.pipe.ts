import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ndDate'
})

export class ndDatePipe implements PipeTransform {
    transform(value: string, args: string[]): Date {
        var tDate1 = new Date(parseInt(value.replace("/Date(", "").replace(")/", "")));
        

        return tDate1
    }
}