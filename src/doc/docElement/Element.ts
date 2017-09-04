/**
 * Created by kexun on 17/9/2.
 */
import { ElementId } from './ElementId';
import {Category} from '../constants/Category';

export class Element {
    static count: number = 0;

    readonly elementId: ElementId;
    readonly name: string;
    readonly category: Category;
    readonly type;


    constructor(obj?:{name: string, category: Category, type: any}) {
        Element.count++;
        this.elementId = new ElementId(Element.count);
        this.name = obj.name;
        this.category = obj.category;
        this.type = obj.type;
    }


}