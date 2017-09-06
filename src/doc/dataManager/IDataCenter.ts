import { IProjectInfoArgs, IProjectPositionArgs, IProjectLocationArgs } from '../docElement/projectInfo/IProject';

export interface IDataCenter {
    projectInfo: IProjectInfoArgs;
    projectPosition: IProjectPositionArgs;
    projectLocation: IProjectLocationArgs;
}