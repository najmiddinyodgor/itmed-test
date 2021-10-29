export default {
    props: {
        step: {
            type: Number,
            required: true
        },
        hasNextStep: {
            type: Boolean,
            required: false,
            default: false
        },
        hasPrevStep: {
            type: Boolean,
            required: false,
            default: false
        },
        isLastStep: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    emits: [
        'nextStep',
        'prevStep',
        'finished'
    ],
    data() {
        return {
            buttonClasses: {
                left: 'step__btn--left',
                right: 'step__btn--right'
            }
        }
    },
    computed: {
        buttons() {
            return [
                {
                    label: 'Вернуться',
                    icon: 'ri-arrow-left-s-line',
                    class: this.buttonClasses.left,
                    show: this.hasPrevStep,
                    clickHandler: () => {
                        this.$emit('prevStep')
                    },
                },
                {
                    label: 'Продолжить ',
                    icon: 'ri-arrow-right-s-line',
                    class: this.buttonClasses.right,
                    show: this.hasNextStep,
                    clickHandler: () => {
                        this.$emit('nextStep')
                    },
                },
                {
                    label: 'Готово',
                    icon: 'ri-arrow-right-s-line',
                    class: this.buttonClasses.right,
                    show: this.isLastStep,
                    clickHandler: () => {
                        this.$emit('finished')
                    },
                },
            ]
        }
    },
}