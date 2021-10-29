export default {
    props: {
        relative: {
            type: String,
            required: true,
        }
    },
    computed: {
        related() {
            return this.relations.filter(relation => relation.relative === this.relative)
        }
    }
}