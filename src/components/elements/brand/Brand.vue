<template>
    <ul :class="[
            `brand-list`,
            {'brand-style-1': brandStyle === 1},
            {'brand-style-2': brandStyle === 2},
            {'brand-style-2': brandStyle === 3},
            {'brand-style-2 variation-2': brandStyle === 4},
        ]">
        <li v-for="(brand, index) in brandList" :key="index">
            <a href="#"><img :src="brand.image" alt="Brand Image"/></a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'Brand',
        props: {
            brandList: {},
            brandStyle: {
                type: Number,
                default: 1
            }
        }
    }
</script>