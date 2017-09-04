/**
 * Created by kexun on 17/9/4.
 */

import { Element } from '../Element';
import { ElementId } from '../ElementId';
import { Location } from './common/location/Location';

export class ModelBase extends Element {
    readonly level: ElementId;

    location: Location;

    materials: Array<string>;
    geometry: Array<string>;

    parameters: Array<string>;
    designOption: number;
    createdPhase: Array<number>;
    demolishedPhase: Array<number>;

    pinned: boolean;

    isVisiable: boolean;
    groupId: ElementId;
}
