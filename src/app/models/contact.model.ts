export class Contact {

    constructor(
        public name: string = '',
        public email: string = '',
        public phone: string = '',
        public _id?: string,) {
    }

    setId?(id: string = 'r101') {
        // Implement your own set Id
        this._id = id
    }
}

export interface ContactFilter {
    term: string
}

export interface User {
    name: string
    coins: number
    moves: Array<object>
}

export interface BitcoinData {
    x: number
    y: number
}

export interface DataSet {
    categories: Array<String>
    data: Array<Number>
}

export interface FullDataSet {
    categories: Array<String>
    data: Array<Number>
    id: string
}



