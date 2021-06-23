export class Client{
    constructor(
        public name ?: string,
        public id ?: number,
        public img ?:string,
        public password ?:string,
        public updateddate?:Date,
        public isactive?:number,
        public email?:string,
        public repass?:string,
        public mobile?:number,
        public role?:number,
     ) {
    }
}