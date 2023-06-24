<template>
    <router-link
        v-if="isLink && !variantButtonClass && !readMoreButton"
        :to="url"
        :class="[
            'btn-default',
            size ? `btn-${size}` : '',
            outlined ? 'btn-border' : '',
            icon ? 'btn-icon' : ''
        ]">
        {{ title }}
        <Icon v-if="icon" :name="icon" size="20" class="icon"/>
    </router-link>
    <button
        v-else-if="!isLink && !variantButtonClass && !readMoreButton"
        type="button"
        :class="[
            'btn-default',
            size ? `btn-${size}` : '',
            outlined ? 'btn-border' : '',
            icon ? 'btn-icon' : ''
        ]"
        @click.prevent="$emit('btnClick')">
        {{ title }}
        <Icon v-if="icon" :name="icon" size="20" class="icon"/>
    </button>
    <router-link
        v-else-if="isLink && variantButtonClass && !readMoreButton"
        :to="url"
        :class="[
            'btn-default',
            size ? `btn-${size}` : '',
            outlined ? 'btn-border' : '',
            icon ? 'btn-icon' : '',
            variantButtonClass ? variantButtonClass : ''
        ]">
        <slot/>
    </router-link>
    <button
        v-else-if="!isLink && variantButtonClass && !readMoreButton"
        type="button"
        :class="[
            'btn-default',
            size ? `btn-${size}` : '',
            outlined ? 'btn-border' : '',
            icon ? 'btn-icon' : '',
            variantButtonClass ? variantButtonClass : ''
        ]"
        @click.prevent="$emit('btnClick')">
        <slot/>
    </button>
    <router-link
        v-else-if="readMoreButton"
        :to="url"
        :class="[
            'btn-read-more',
            size ? `btn-${size}` : '',
            outlined ? 'btn-border' : '',
            icon ? 'btn-icon' : '',
            variantButtonClass ? variantButtonClass : ''
        ]">
        <slot/>
    </router-link>
</template>

<script>
    import Icon from '../../icon/Icon';

    export default {
        name: 'Button',
        components: {Icon},
        props: {
            title: {
                type: String,
            },
            size: {
                type: String,
                default: null
            },
            outlined: {
                type: Boolean,
                default: false
            },
            icon: {
                type: String,
                default: null
            },
            url: {
                type: String,
                default: '#'
            },
            isLink: {
                type: Boolean,
                default: true
            },
            variantButtonClass: {
                type: String,
                default: null
            },
            readMoreButton: {
                type: Boolean,
                default: false
            }
        }
    }
</script>