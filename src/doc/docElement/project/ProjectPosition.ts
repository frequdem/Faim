import { IProjectPositionArgs } from './IProject'
import { ProjectBase } from './ProjectBase';

export default class ProjectPosition extends ProjectBase {
    fields: string[] = [
        'angle',
        'eastWest',
        'elevation',
        'northSouth'
    ];

    elevation?: number;
    latitude?: number;
    longtitude?: number;
    placeName?: string;
    timeZone?: number;

    constructor(args?: IProjectPositionArgs) {
        super(args);
    }

}
