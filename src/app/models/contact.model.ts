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
    moves: Array<Move>
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

export interface Move{
    toId: string | undefined
    to: string
    at: number,
    amount: number
}



