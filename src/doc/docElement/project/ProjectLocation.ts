import { IProjectLocationArgs } from './IProject'
import { ProjectBase } from './ProjectBase';

export default class ProjectLocation extends ProjectBase {
    fields: string[] = [
        'elevation',
        'latitude',
        'longtitude',
        'placeName',
        'timeZone'
    ];

    angle: number;
    eastWest: number;
    elevation: number;
    northSouth: number;

    constructor(args?: IProjectLocationArgs) {
        super(args);
    }

}