export class ProjectBase {
    protected fields: Array<any> = [];

    constructor(args) {
         this.update(args);
    }

    getSingleData(k: string) {
        return this[ k ];
    }

    getAllData() {
        let result = {};
        this.fields.forEach((ele: string) => {
            result[ ele ] = this[ ele ];
        });
        return result;
    }


    update(data): void {
        if (!data) {
            return;
        }
        this.fields.forEach((ele: string) => {
            if (data[ ele ]) {
                this[ ele ] = data[ ele ];
            }
        })
    }
}
