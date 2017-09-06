/**
 * Created by kexun on 17/9/2.
 */
import {Category} from "../../constants/Category";
import {ViewType} from "../../constants/Type";
import { ViewBase } from './ViewBase';
import * as _ from 'lodash';

export class View3D extends ViewBase {
    constructor(name?:string) {
        let data = {
            type: ViewType.ThreeD,
            name: name || '3D'
        };
        super(data);
    }
}