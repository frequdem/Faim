import { IProjectInfoArgs } from './IProject';
import { ProjectBase } from './ProjectBase'

export default class ProjectInfo extends ProjectBase {
    fields: string[] = [
        'address',
        'author',
        'buildingName',
        'clientName',
        'issueDate',
        'name',
        'number',
        'organizationDescription',
        'organizationName',
        'status'
    ];

    address: string;
    author: string;
    buildingName: string;
    clientName: string;
    issueDate: Date;
    name: string;
    number: number;
    organizationDescription: string;
    organizationName: string;
    status: string;


    constructor (args?: IProjectInfoArgs) {

        super(args);
    }






}

