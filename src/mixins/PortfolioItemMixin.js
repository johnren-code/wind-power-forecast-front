export default {
    data() {
        return {
           portfolioItems:  [
               {
                   id: 1,
                   portfolioImage: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                   image: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                   title: 'App Development',
                   subtitle: 'Branded client',
                   date: '30 May 2022',
                   client: 'Rainbow Themes',
                   category: 'development',
                   awards: ['2020 Design beautiful apps Finale Awards'],
                   excerpt: 'Design beautiful apps.',
                   body: `<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
                   btn: {
                       buttonText: 'View Projects',
                       link: '/'
                   },
                   largeImage: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                   subContent: {
                       title: 'Digital Marketing.',
                       subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
                   },
                   subContent2: {
                       title: 'App Development.',
                       subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
                   },
                   subContent3: {
                       title: 'Solution.',
                       subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
                   },
                   gallery: {
                       imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                       imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                       imageThree: require(`@/assets/images/portfolio/portfolio-03.jpg`)
                   }
               },
               {
                   id: 2,
                   portfolioImage: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                   image: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                   title: 'Business Development',
                   subtitle: 'Awesome portfolio',
                   date: '01 March 2022',
                   client: 'Rainbow Themes',
                   category: 'design',
                   awards: ['2020 Design beautiful apps Finale Awards'],
                   excerpt: 'Design beautiful apps.',
                   body: `<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
                   btn: {
                       buttonText: 'View Projects',
                       link: '/'
                   },
                   largeImage: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                   subContent: {
                       title: 'Digital Marketing.',
                       subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
                   },
                   subContent2: {
                       title: 'App Development.',
                       subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
                   },
                   subContent3: {
                       title: 'Solution.',
                       subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
                   },
                   gallery: {
                       imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                       imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                       imageThree: require(`@/assets/images/portfolio/portfolio-03.jpg`)
                   }
               },
               {
                   id: 3,
                   portfolioImage: require(`@/assets/images/portfolio/portfolio-03.jpg`),
                   image: require(`@/assets/images/portfolio/portfolio-03.jpg`),
                   title: 'Photoshop Design',
                   subtitle: 'Awesome portfolio',
                   date: '01 March 2022',
                   client: 'Rainbow Themes',
                   category: 'art',
                   awards: ['2020 Design beautiful apps Finale Awards'],
                   excerpt: 'Design beautiful apps.',
                   body: `<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
                   btn: {
                       buttonText: 'View Projects',
                       link: '/'
                   },
                   largeImage: require(`@/assets/images/portfolio/portfolio-03.jpg`),
                   subContent: {
                       title: 'Digital Marketing.',
                       subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
                   },
                   subContent2: {
                       title: 'App Development.',
                       subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
                   },
                   subContent3: {
                       title: 'Solution.',
                       subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
                   },
                   gallery: {
                       imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                       imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                       imageThree: require(`@/assets/images/portfolio/portfolio-03.jpg`)
                   }
               },
               {
                   id: 4,
                   portfolioImage: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                   image: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                   title: 'Native Application',
                   subtitle: 'Awesome portfolio',
                   date: '01 March 2022',
                   client: 'Rainbow Themes',
                   category: 'development',
                   awards: ['2020 Design beautiful apps Finale Awards'],
                   excerpt: 'Design beautiful apps.',
                   body: `<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
                   btn: {
                       buttonText: 'View Projects',
                       link: '/'
                   },
                   largeImage: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                   subContent: {
                       title: 'Digital Marketing.',
                       subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
                   },
                   subContent2: {
                       title: 'App Development.',
                       subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
                   },
                   subContent3: {
                       title: 'Solution.',
                       subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
                   },
                   gallery: {
                       imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                       imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                       imageThree: require(`@/assets/images/portfolio/portfolio-04.jpg`)
                   }
               },
               {
                   id: 5,
                   portfolioImage: require(`@/assets/images/portfolio/portfolio-05.jpg`),
                   image: require(`@/assets/images/portfolio/portfolio-05.jpg`),
                   title: 'Vue.js Development',
                   subtitle: 'Awesome portfolio',
                   date: '01 March 2022',
                   client: 'Rainbow Themes',
                   category: 'design',
                   awards: ['2020 Design beautiful apps Finale Awards'],
                   excerpt: 'Design beautiful apps.',
                   body: `<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
                   btn: {
                       buttonText: 'View Projects',
                       link: '/'
                   },
                   largeImage: require(`@/assets/images/portfolio/portfolio-05.jpg`),
                   subContent: {
                       title: 'Digital Marketing.',
                       subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
                   },
                   subContent2: {
                       title: 'App Development.',
                       subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
                   },
                   subContent3: {
                       title: 'Solution.',
                       subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
                   },
                   gallery: {
                       imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                       imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                       imageThree: require(`@/assets/images/portfolio/portfolio-03.jpg`)
                   }
               },
               {
                   id: 6,
                   portfolioImage: require(`@/assets/images/portfolio/portfolio-06.jpg`),
                   image: require(`@/assets/images/portfolio/portfolio-06.jpg`),
                   title: 'App Installment',
                   subtitle: 'Awesome portfolio',
                   date: '01 March 2022',
                   client: 'Rainbow Themes',
                   category: 'design',
                   awards: ['2020 Design beautiful apps Finale Awards'],
                   excerpt: 'Design beautiful apps.',
                   body: `<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
                   btn: {
                       buttonText: 'View Projects',
                       link: '/'
                   },
                   largeImage: require(`@/assets/images/portfolio/portfolio-06.jpg`),
                   subContent: {
                       title: 'Digital Marketing.',
                       subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
                   },
                   subContent2: {
                       title: 'App Development.',
                       subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
                   },
                   subContent3: {
                       title: 'Solution.',
                       subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
                   },
                   gallery: {
                       imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                       imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                       imageThree: require(`@/assets/images/portfolio/portfolio-06.jpg`)
                   }
               }
           ]
        }
    }
}