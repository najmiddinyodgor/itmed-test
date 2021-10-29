import Vue from "vue";

export default {
    namespaced: true,
    name: 'visaForm',
    state: () => ({
        form: {
            country: '',
            type: '',
            entry: '',
            departure: '',
            try: '',
            timespent: '',
            firstname: '',
            lastname: '',
            birthdate: '',
            citizenship: '',
        },
        price: 0
    }),
    getters: {
        form: (state) => state.form,
        price: (state) => state.price,
    },
    mutations: {
        SET_FORM(state, form) {
            Object.keys(form).forEach(field => {
                Vue.set(state, field, form[field])
            })
        },
    },
    actions: {
        saveForm({commit}, form) {
            commit('SET_FORM', form)
        }
    }
}