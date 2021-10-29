export default {
    data() {
        return {
            requiredFields: [],
            errors: []
        }
    },
    methods: {
        validate(form) {
            return this.validateFields(form, this.requiredFields)
        },
        validateFields(form, fields) {
            this.errors = []
            fields.forEach(field => {
                if (!form[field]) {
                    this.errors.push(field)
                }
            })
            return !this.errors.length
        }
    }
}