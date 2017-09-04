/**
 * Created by kexun on 17/9/2.
 */
import {ViewType} from "../../constants/Type";
import { ViewBase } from './ViewBase';

export class ViewPlane extends ViewBase {
    constructor(name?:string) {
        let data = {
            type: ViewType.FloorPlan,
            name: name || '平面图'
        };

        super(data);
    }
}