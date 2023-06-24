<template>
    <Layout>
        <!-- Start Tab Style One -->
        <div class="rwt-tab-area rn-section-gap">
            <div class="container">
                <div class="row mb--40">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="You can Change Easily"
                            title="Tab Style One"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Tab :tab-data="tabData"/>
            </div>
        </div>
        <!-- End Tab Style One -->

        <Separator/>

        <!-- Start Tab Style Two -->
        <div class="rwt-tab-area rn-section-gap">
            <div class="container">
                <div class="row mb--40">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="You can Change Easily"
                            title="Tab Style Two"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Tab :tab-data="tabData2" :tab-style="2"/>
            </div>
        </div>
        <!-- End Tab Style Two -->

        <Separator/>

        <!-- Start Tab Style Three -->
        <div class="rwt-tab-area rn-section-gap">
            <div class="container">
                <div class="row mb--40">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="You can Change Easily"
                            title="Tab Style Three"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Tab :tab-data="tabData3" :tab-style="3"/>
            </div>
        </div>
        <!-- End Tab Style Three -->
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import Separator from '../components/elements/separator/Separator'
    import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
    import Tab from '../components/elements/tab/Tab'

    export default {
        name: 'TabPage',
        components: {Tab, SectionTitle, Separator, Layout, Breadcrumb},
        data() {
            return {
                tabData: {
                    tabImage: 'tabs-01.jpg',
                    tabContent: [
                        {
                            id: 1,
                            menu: 'strategy',
                            content: `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>`,
                        },
                        {
                            id: 2,
                            menu: 'reporting',
                            content: `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>`,
                        },
                        {
                            id: 3,
                            menu: 'development',
                            content: `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>`,
                        }
                    ]
                },
                tabData2: {
                    tabImage: 'tabs-02.jpg',
                    tabContent: [
                        {
                            id: 1,
                            menu: 'home',
                            content: `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>`,
                        },
                        {
                            id: 2,
                            menu: 'about',
                            content: `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>`,
                        },
                        {
                            id: 3,
                            menu: 'contact',
                            content: `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>`,
                        }
                    ]
                },
                tabData3: [
                    {
                        id: 'strategy-menu',
                        text: 'Strategy',
                        dataList: [
                            {
                                image: 'service-01.jpg',
                                title: 'Awarded Design',
                                description: 'There are many variations variats  of passages of Lorem Ipsum available.'
                            },
                            {
                                image: 'service-02.jpg',
                                title: 'Design & Creative',
                                description: 'Passages there are many variatin Lorem Ipsum available have suffered.'
                            }
                        ],
                    },
                    {
                        id: 'development-menu',
                        text: 'Development',
                        dataList: [
                            {
                                image: 'service-03.jpg',
                                title: 'App Development',
                                description: 'There are many variations variats  of passages of Lorem Ipsum available.'
                            },
                            {
                                image: 'service-04.jpg',
                                title: 'Business Design',
                                description: 'Passages there are many variatin Lorem Ipsum available have suffered.'
                            }
                        ],
                    },
                    {
                        id: 'reporting-menu',
                        text: 'Reporting',
                        dataList: [
                            {
                                image: 'service-03.jpg',
                                title: 'App Development',
                                description: 'There are many variations variats  of passages of Lorem Ipsum available.'
                            },
                            {
                                image: 'service-04.jpg',
                                title: 'Business Design',
                                description: 'Passages there are many variatin Lorem Ipsum available have suffered.'
                            },
                            {
                                image: 'service-04.jpg',
                                title: 'Business Design',
                                description: 'Passages there are many variatin Lorem Ipsum available have suffered.'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>