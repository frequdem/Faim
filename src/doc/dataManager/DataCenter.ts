import { IDataCenter } from "./IDataCenter";
import { Element } from "../docElement/Element";

import ProjectInfo from "../docElement/projectInfo/ProjectData";
import ProjectPosition from "../docElement/projectInfo/ProjectPosition";
import ProjectLocation from "../docElement/projectInfo/ProjectLocation";
import { ViewBase } from '../docElement/view/ViewBase';

export default class DataCenter {

    private allTypes: string[] = ['projectInfo', 'projectPosition', 'projectLocation'];

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

    static totalElements() {
        return Element.count;
    }


}
