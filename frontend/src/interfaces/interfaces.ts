export interface CarsInterface {

    name_car: string
    model: string,
    year: number,
    price: number,
    Carimgs: Carimgs[]
}

export interface cars {
    cars: carsQuery[]
}

export interface carsQuery {
    count: number,
    rows: CarsInterface[],
    totalPages: number,
    totalItems: number,
    currentpage: string
}

export interface Carimgs {
    key: string,
    url: string
}
export interface CardsInterface{
    card_number: number,
    card_code: number,

}

export interface UsersInterface {
    name: string,
    email: string, 
    nascimento: Date,
    admin: boolean,
    cards: CardsInterface[]
}