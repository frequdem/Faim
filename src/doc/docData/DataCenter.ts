import { IDataCenter } from "./IDataCenter";
import { Element } from "../docElement/Element";

import ProjectInfo from "../docElement/project/ProjectInfo";
import ProjectPosition from "../docElement/project/ProjectPosition";
import ProjectLocation from "../docElement/project/ProjectLocation";
import { ViewBase } from '../docElement/view/ViewBase';

export default class DataCenter {

    private allTypes: string[] = ['projectInfo', 'projectPosition', 'projectLocation'];

    elementCount: number = Element.count;

    projectInfo: ProjectInfo;
    projectPosition: ProjectPosition;
    projectLocation: ProjectLocation;

    views: ViewBase[] = [];

    constructor () {
        this.projectInfo = new ProjectInfo();
        this.projectPosition = new ProjectPosition();
        this.projectLocation = new ProjectLocation();
    }

    update (data: IDataCenter): void {

        this.allTypes.forEach ((ele) => {
            this[ele].update(data[ele]);
        })
    }

}
