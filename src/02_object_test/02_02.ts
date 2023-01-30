export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}
export type HousesType = {
    id?: number,
    buildAt: number
    repaired: boolean
    address: AddressType
}
export type AddressType = {
    number: number
    street: StreetType
}

export type StreetType = {
    title: string
}

export type GovernmentBuildingType = {
    type: string,
    address: AddressType
    budget: number,
    staffCount: number
}