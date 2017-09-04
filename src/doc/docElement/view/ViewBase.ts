/**
 * Created by kexun on 17/9/2.
 */
import { Element } from '../Element';
import {Category} from "../../constants/Category";
import {ViewType} from "../../constants/Type";
import * as _ from 'lodash';

export class ViewBase extends Element {

    constructor(obj: {type: ViewType, name: string}) {

        let data = _.assign(obj, {
            category: Category.Views
        });
        super(data);
    }
}
