<template>
    <div v-if="teamStyle === 1 || teamStyle === 2" :class="`rn-team ${checkTeamStyle}`">
        <div data-aos="fade-up" data-aos-delay="60">
            <div class="inner">
                <figure class="thumbnail">
                    <img :src="require(`@/assets/images/team/${teamMember.image}.jpg`)" :alt="teamMember.name"/>
                </figure>
                <figcaption class="content">
                    <h2 class="title">{{ teamMember.name }}</h2>
                    <h6 class="subtitle theme-gradient">{{ teamMember.designation }}</h6>
                    <span class="team-form">
                        <img :src="require(`@/assets/images/team/location.svg`)" alt="Corporate Vue Template" />
                        <span class="location">{{ teamMember.location }}</span>
                    </span>
                    <p class="description">{{ teamMember.description }}</p>

                    <ul class="social-icon social-default icon-naked mt--20" >
                        <li v-for="(social, index) in teamMember.socialNetwork" :key="index">
                            <a :href="social.url"><Icon :name="social.icon"/></a>
                        </li>
                    </ul>
                </figcaption>
            </div>
        </div>
    </div>

    <div v-else-if="teamStyle === 3" :class="`rn-team ${checkTeamStyle}`">
        <div data-aos="fade-up" data-aos-delay="60">
            <div class="inner">
                <figure class="thumbnail">
                    <img :src="require(`@/assets/images/team/${teamMember.image}.jpg`)" :alt="teamMember.name"/>
                </figure>
                <figcaption class="content">
                    <h2 class="title">{{ teamMember.name }}</h2>
                    <h6 class="subtitle theme-gradient">{{ teamMember.designation }}</h6>
                </figcaption>
            </div>
        </div>
    </div>

    <div v-else-if="teamStyle === 4" :class="`rn-team ${checkTeamStyle}`">
        <div data-aos="fade-up" data-aos-delay="60">
            <div class="inner">
                <figure class="thumbnail">
                    <img :src="require(`@/assets/images/team/${teamMember.image}.jpg`)" :alt="teamMember.name"/>
                </figure>
                <figcaption class="content">
                    <div class="team-info">
                        <h2 class="title">{{ teamMember.name }}</h2>
                        <h6 class="subtitle theme-gradient">{{ teamMember.designation }}</h6>
                        <div class="team-form">
                            <span class="location">{{ teamMember.location }}</span>
                        </div>
                    </div>
                </figcaption>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from "../../icon/Icon";
    export default {
        name: 'Team',
        components: {Icon},
        props: {
            teamStyle: {
                type: Number,
                default: 1
            },
            teamMember: {}
        },
        computed: {
            checkTeamStyle() {
                if (this.teamStyle === 1) return 'team-style-default';
                else if (this.teamStyle === 2) return 'team-style-default style-two';
                else if (this.teamStyle === 3) return 'team-style-two';
                else if (this.teamStyle === 4) return 'team-style-three';
                else return '';
            }
        }
    }
</script>