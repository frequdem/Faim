import { IProjectInfoArgs, IProjectPositionArgs, IProjectLocationArgs } from '../docElement/project/IProject';

export interface IDataCenter {
    projectInfo: IProjectInfoArgs;
    projectPosition: IProjectPositionArgs;
    projectLocation: IProjectLocationArgs;
}