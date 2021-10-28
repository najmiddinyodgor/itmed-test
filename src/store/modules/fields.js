export default {
    state: () => ({
        countries: [
            {id: "RU", name: "Россия"},
            {id: "DE", name: "Германия"},
            {id: "EE", name: "Эстония"},
        ],
    }),
    getters: {
        countries: (state) => state.countries
    }
}