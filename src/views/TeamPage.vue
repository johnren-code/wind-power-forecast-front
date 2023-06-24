<template>
    <Layout>
        <!-- Start Elements Area -->
        <div class="rwt-team-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Experts"
                            title="Our Expert Team"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <div class="row row--15">
                    <div class="col-lg-4 col-md-6 col-12 mt--30"
                         v-for="(teamMember, index) in teamData"
                         :key="index">
                        <Team :team-member="teamMember"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-team-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Experts"
                            title="Team Style Two"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <div class="row row--15">
                    <div class="col-lg-4 col-md-6 col-12 mt--30"
                         v-for="(teamMember, index) in teamData"
                         :key="index">
                        <Team :team-member="teamMember" :team-style="2"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator />

        <!-- Start Elements Area -->
        <div class="rwt-team-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb--15">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Experts"
                            title="Team Style Three"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <div class="row row--15">
                    <div class="col-lg-3 col-md-6 col-12 mt--30"
                         v-for="(teamMember, index) in teamData3"
                         :key="index">
                        <Team :team-member="teamMember" :team-style="3"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator />

        <!-- Start Elements Area -->
        <div class="rwt-team-area rn-section-gap">
            <div class="wrapper plr--65 plr_sm--15">
                <div class="row mb--20">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Experts"
                            title="Team Style Four"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <div class="row row--15">
                    <div class="col-lg-6 col-xl-3 col-md-6 col-12 mt--30"
                         v-for="(teamMember, index) in teamData4"
                         :key="index">
                        <Team :team-member="teamMember" :team-style="4"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Elements Area -->
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
    import Team from '../components/elements/team/Team'
    import Separator from '../components/elements/separator/Separator'

    export default {
        name: 'TeamPage',
        components: {Separator, Team, SectionTitle, Layout, Breadcrumb},
        data() {
            return {
                teamData: [
                    {
                        image: 'team-01',
                        name: 'Sr Janen Sara',
                        designation: 'Sr Product Designer',
                        location: 'CO Miego, AD, USA',
                        description: 'Yes, I am a product designer. I have a passion for product design.',
                        socialNetwork: [
                            {
                                icon: 'facebook',
                                url: '#'
                            },
                            {
                                icon: 'twitter',
                                url: '#'
                            },
                            {
                                icon: 'instagram',
                                url: '#'
                            },
                        ]
                    },
                    {
                        image: 'team-02',
                        name: 'Afsana Nila',
                        designation: 'App Developer',
                        location: 'Bangladesh',
                        description: 'Yes, I am a product designer. I have a passion for product design.',
                        socialNetwork: [
                            {
                                icon: 'facebook',
                                url: '#'
                            },
                            {
                                icon: 'twitter',
                                url: '#'
                            },
                            {
                                icon: 'instagram',
                                url: '#'
                            },
                        ]
                    },
                    {
                        image: 'team-03',
                        name: 'Afanan Sifa',
                        designation: 'Accounts Manager',
                        location: 'Poland',
                        description: 'Yes, I am a product designer. I have a passion for product design.',
                        socialNetwork: [
                            {
                                icon: 'facebook',
                                url: '#'
                            },
                            {
                                icon: 'twitter',
                                url: '#'
                            },
                            {
                                icon: 'instagram',
                                url: '#'
                            },
                        ]
                    },
                ],
                teamData3: [
                    {
                        image: 'team-04',
                        name: 'Sr Janen Sara',
                        designation: 'Sr Product Designer',
                    },
                    {
                        image: 'team-05',
                        name: 'Afsana Nila',
                        designation: 'App Developer',
                    },
                    {
                        image: 'team-06',
                        name: 'Afanan Sifa',
                        designation: 'Accounts Manager',
                    },
                    {
                        image: 'team-07',
                        name: 'Afanan Sifa',
                        designation: 'Accounts Manager',
                    },
                ],
                teamData4: [
                    {
                        image: 'team-dark-01',
                        name: 'Sr Janen Sara',
                        designation: 'Sr Product Designer',
                        location: 'CO Miego, AD, USA',
                        description: 'Yes, I am a product designer. I have a passion for product design.'
                    },
                    {
                        image: 'team-dark-02',
                        name: 'Corporate Jane',
                        designation: 'Manager',
                        location: 'Bangladesh',
                        description: 'Yes, I am a product designer. I have a passion for product design.'
                    },
                    {
                        image: 'team-dark-03',
                        name: 'Jara Saraif',
                        designation: 'Software Developer',
                        location: 'Poland',
                        description: 'Yes, I am a product designer. I have a passion for product design.'
                    },
                    {
                        image: 'team-dark-04',
                        name: 'Afanan Sifa',
                        designation: 'Accounts Manager',
                        location: 'Poland',
                        description: 'Yes, I am a product designer. I have a passion for product design.'
                    },
                ]
            }
        }
    }
</script>