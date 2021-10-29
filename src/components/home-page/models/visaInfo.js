import {mapGetters} from "vuex";
import arrayHelpers from "../../../utils/helpers/arrayHelpers";

export default {
    mixins: [arrayHelpers],
    computed: {
        ...mapGetters('visaForm', [
            'form'
        ]),
        ...mapGetters('fields', [
            'countries',
            'types',
            'tries',
            'timespent',
        ]),
        country() {
            return this.findById(this.countries, this.form.country)
        },
        visaType() {
            return this.findById(this.types, this.form.type)
        },
        tryCount() {
            return this.findById(this.tries, this.form.try)
        },
        days() {
            return this.findById(this.timespent, this.form.timespent)
        },
        price() {
            if (this.form) {
                return (
                    this.getPrice(this.visaType)
                    + this.getPrice(this.tryCount)
                    + this.getPrice(this.days)
                )
            }
            return 0
        },
    },
    methods: {
        getPrice(item) {
            return item ? Number(item.price.replace(/,/g, '.')) : 0
        }
    }
}