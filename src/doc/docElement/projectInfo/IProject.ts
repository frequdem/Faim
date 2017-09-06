export interface IProjectDataArgs {
    address?: string;
    author?: string;
    buildingName?: string;
    clientName?: string;
    issueDate?: Date;
    name?: string;
    number?: number;
    organizationDescription?: string;
    organizationName?: string;
    status?: string;
}

export interface IProjectPositionArgs {
    angle?: number;
    eastWest?: number;
    elevation?: number;
    northSouth?: number;
}

export interface IProjectLocationArgs {
    elevation?: number;
    latitude?: number;
    longtitude?: number;
    placeName?: string;
    timeZone?: number;
}
