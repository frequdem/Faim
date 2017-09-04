import { IDataCenter } from '../docData/IDataCenter';

export default class Loader {
    constructor() {

    }

    load(url: string, succeedHandler, failHandler?) {
        $.ajax({
            success: (r: IDataCenter) => {
                r = {
                    projectInfo: {
                        address: '上海市浦东新区张江集电港',
                        author: 'xxxx',
                        buildingName: '集电港八号楼',
                        clientName: '爱福窝',
                        issueDate: new Date('2017/08/31'),
                        name: '爱福窝室内改造',
                        organizationName: '上海市品茗设计',
                    },

                    projectPosition: {
                        elevation: 11
                    },

                    projectLocation: {}
                };
                succeedHandler(r);
            }
        })
    }
}