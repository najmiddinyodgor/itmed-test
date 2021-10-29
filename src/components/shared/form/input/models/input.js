export default {
    props: {
        value: {
            required: true
        },
        label: {
            type: String,
            required: true
        },
        placeHolder: {
            type: String,
            required: false,
            default: ''
        },
        hasError: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    emits: ['input'],
    computed: {
        mutableValue: {
            get() {
                return this.value
            },
            set(value) {
                this.emitValue(value)
            }
        }
    },
    methods: {
        emitValue(value) {
            this.$emit('input', value)
        }
    }
}