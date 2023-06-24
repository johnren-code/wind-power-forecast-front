<template>
    <div :class="`rn-accordion-style ${accordionStyleClass} accordion`">
        <div class="accordion" :id="id">
            <div class="accordion-item card" v-for="(content, index) in accordionContent">
                <h2 class="accordion-header card-header" :id="`heading${content.id}`">
                    <button class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            :data-bs-target="`#collapse${content.id}`"
                            :aria-expanded="index === activeCollapse ? 'true' : 'false'"
                            :aria-controls="`collapse${content.id}`"
                            @click="activeCollapse = index">
                        {{ content.title }}
                        <i class="collapse-icon"/>
                    </button>
                </h2>
                <div :id="`collapse${content.id}`"
                     class="accordion-collapse collapse"
                     :class="{'show': index === 0}"
                     :aria-labelledby="`heading${content.id}`"
                     :data-bs-parent="`#${id}`">
                    <div class="accordion-body card-body">
                        {{ content.description }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Accordion',
        props: {
            id: {
                type: String,
                default: 'accordionExample'
            },
            accordionStyleClass: {
                type: String
            },
            accordionContent: {
                type: Array,
                default: function () {
                    return [
                        {
                            id: 'One',
                            title: 'What is Doob ? How does it work?',
                            description: 'You can run doob easily. First You\'ll need to have node and npm on your machine. So Please open your command prompt then check your node -v and npm -v Version. Goes To Your your command prompt: then First: npm install At Last: npm run start. By the following way you can be run your project easily.'
                        },
                        {
                            id: 'Two',
                            title: 'How can I get the customer support?',
                            description: 'After purchasing the product need you any support you can be share with us with sending mail to rainbowit10@gmail.com.'
                        },
                        {
                            id: 'Three',
                            title: 'Can I get update regularly and For how long do I get updates?',
                            description: 'Yes, We will get update the Trydo. And you can get it any time. Next time we will comes with more feature. You can be get update for unlimited times. Our dedicated team works for update.'
                        },
                        {
                            id: 'Four',
                            title: 'How can I run doob html template?',
                            description: 'You can run doob easily. First You\'ll need to have node and npm on your machine. So Please open your command prompt then check your node -v and npm -v Version. Goes To Your your command prompt: then First: npm install At Last: npm run start. By the following way you can be run your project easily.'
                        },
                    ]
                }
            }
        },
        data() {
            return {
                activeCollapse: 0
            }
        }
    }
</script>