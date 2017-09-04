/**
 * Created by kexun on 17/9/2.
 */
import { ElementId } from './ElementId';
import { Document } from '../Document';
import * as constants from '../constants';

export class Element {
    static count: number = 0;

    readonly elementId: ElementId;
    readonly name: string;
    readonly category: constants.Category;
    readonly type: constants.Category;

    readonly document: Document;



    constructor(obj?:{name: string, category: constants.Category, type: constants.Category, currDocument: Document}) {
        Element.count++;
        this.elementId = new ElementId(Element.count);
        this.name = obj.name;
        this.category = obj.category;
        this.type = obj.type;
        this.document = obj.currDocument;
    }


}