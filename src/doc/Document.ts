import DataCenter from './docData/DataCenter';
import Loader from './docUtil/Loader';
import { View3D } from './docElement/view/View3D';

import { IProjectInfoArgs, IProjectPositionArgs, IProjectLocationArgs } from "./docElement/project/IProject";


class Document {

    dataCenter = new DataCenter();
    utils = {
        loader: new Loader()
    };

    constructor() {

    }


    //获取当前已创建过的 Element 总数
    static totalElements() {
        return DataCenter.totalElements;
    }


    loadData() {
        this.utils.loader.load( '', (data) => {
                this.dataCenter.update(data);
        });
    }


    getAllProjectInfo(): IProjectInfoArgs {
        return this.dataCenter.projectInfo.getAllData();
    }


    getProjectInfo(k: string) {
        return this.dataCenter.projectInfo.getSingleData(k);
    }


    getAllProjectPosition(): IProjectPositionArgs {
        return this.dataCenter.projectPosition.getAllData();
    }


    getProjectPosition(k: string) {
        return this.dataCenter.projectPosition.getSingleData(k);
    }


    getAllProjectLocation(): IProjectLocationArgs {
        return this.dataCenter.projectPosition.getAllData();
    }


    getProjectLocation(k: string) {
        return this.dataCenter.projectLocation.getSingleData(k);
    }


    createView(type: string) {
        switch (type) {
            case '3D':
                this.dataCenter.views.push(new View3D());
                break;

            default:
                console.warn(`there is such a view type: ${type}`);

        }
    }
}

export { Document };