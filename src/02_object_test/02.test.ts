import {CityType} from "./02_02";
import exp from "constants";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThan, getHousesOnTheStreet} from "../04_filter/04";
import {createMessages, getStreetsTitlesOfGovernmentsBuildings, getStreetsTitlesOfHouses} from "../05_map/05";

let city: CityType;


beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1, buildAt: 2012, repaired: false, address: {
                    number: 100, street: {title: "White street"}
                }
            },
            {
                id: 2, buildAt: 2002, repaired: false, address: {
                    number: 100, street: {title: "Happy street"}
                }
            },
            {
                id: 3, buildAt: 2020, repaired: false, address: {
                    number: 101, street: {title: "White street"}
                }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                address: { street: { title: "Central Str"}, number: 12},
                budget: 200000, staffCount: 200
            },
            {
                type: "FIRE-STATION",
                address: { street: { title: "South Str"}, number: 12},
                budget: 500000, staffCount: 1000
            }
        ],
        citizensNumber: 1000000
    }
})
//01 создать тип CityType
//02 заполнить объект city, чтобы тесты ниже прошли
test("test city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White street");

    expect(city.houses[1].buildAt).toBe(2002);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe("Happy street");

    expect(city.houses[2].buildAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe("White street");
})

// 01. дополнить HouseType id
// 02. создать в том же файле еще одну функцию, чтобы тесты прошли
test("Houses should be destroyed", () => {
    demolishHousesOnTheStreet(city, "Happy street")

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

// test("List of streets titles of houses", () => {
//     let happyHouses = getHousesOnTheStreet(city.houses, "Happy street")
//     let whiteHouses = getHousesOnTheStreet(city.houses, "White street")
// })

test("buildings with correct staff count", () => {
    let buildings = getBuildingsWithStaffCountGreaterThan(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe("FIRE_STATION")
})

// создать функцию чтобы тесты ниже прошли
test("list of streets titles of governments buildings", () => {
    let streets = getStreetsTitlesOfGovernmentsBuildings(
        city.governmentBuildings);

    expect(streets.length).toBe(2)
    expect(streets[0]).toBe("Central Str")
    expect(streets[1]).toBe("South Str")

})

test("list of streets titles", () => {
    let streets = getStreetsTitlesOfHouses(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe("White street")
    expect(streets[1]).toBe("Happy street")
    expect(streets[2]).toBe("Happy street")
})

test("create greeting messages for streets", () => {
    let messages = createMessages(city.houses);

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello guys from White street")
    expect(messages[1]).toBe("Hello guys from Happy street")
    expect(messages[2]).toBe("Hello guys from Happy street")
})