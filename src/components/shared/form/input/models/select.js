import input from "./input";

export default {
    props: {
        options: {
            type: Array,
            required: true,
            validator: (options) => {
                return options.every(option => {
                    return JSON.stringify(Object.keys(option)) === JSON.stringify(['value', 'label'])
                })
            }
        },
        filterable: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    mixins: [input],
    data() {
        return {
            showOptions: false,
        }
    },
}