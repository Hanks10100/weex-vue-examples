# Vue Test Report

## Vue Features

### DSL

+ [ ] `<template>` 、`<style>` 、`<script>`
+ [ ] ES6 Syntax
+ [ ] preprocessor & postcss
+ [ ] `<slot>`
+ [ ] `<transition>`
+ [ ] `<transition-group>`
+ [ ] `<component is="xxx">`
+ [ ] `<keep-alive>`

### Global API

+ [ ] `Vue.extend`
+ [ ] `Vue.nextTick`
+ [ ] `Vue.set`
+ [ ] `Vue.delete`
+ [ ] `Vue.directive`
+ [ ] `Vue.filter`
+ [ ] `Vue.component`
+ [ ] `Vue.use`
+ [ ] `Vue.mixin`
+ [ ] `Vue.compile`

### Lifecycle

+ [ ] `beforeCreate`
+ [ ] `created`
+ [ ] `beforeMount`
+ [ ] `mounted`
+ [ ] `beforeUpdate`
+ [ ] `updated`
+ [ ] `activated`
+ [ ] `deactivated`
+ [ ] `beforeDestroy`
+ [ ] `destroyed`

### Misc

+ [ ] delimiters
+ [ ] functional component
+ [ ] named component

### Properties

+ [ ] `vm.$data`
+ [ ] `vm.$el`
+ [ ] `vm.$options`
+ [ ] `vm.$parent`
+ [ ] `vm.$root`
+ [ ] `vm.$children`
+ [ ] `vm.$slots`
+ [ ] `vm.$scopedSlots`
+ [ ] `vm.$refs`

### Directives

+ [ ] `v-text`
+ [ ] `v-html` (not supported)
+ [ ] `v-show` (not supported)
+ [ ] `v-if`
+ [ ] `v-else`
+ [ ] `v-else-if`
+ [ ] `v-for`
+ [ ] `v-on` & `@`
+ [ ] `v-bind` & `:`
+ [ ] `v-modal`
+ [ ] `v-pre`
+ [ ] `v-cloak` (not supported)
+ [ ] `v-once`

## Styles

+ [ ] box-mode
+ [ ] flexbox
+ [ ] position
+ [ ] paint

## Components

+ [ ] `<div>`
  + [ ] common events
+ [ ] `<text>`
  + [ ] common events
  + [ ] value
  + [ ] lines
+ [ ] `<image>`
  + [ ] common events
  + [ ] src
  + [ ] resize
    + [ ] stretch
    + [ ] cover
    + [ ] contain
+ [ ] `<input>`
  + [ ] type
    + [ ] text
    + [ ] password
    + [ ] url
    + [ ] email
    + [ ] tel
  + [ ] value
  + [ ] placeholder
  + [ ] disabled
  + [ ] autofocus
  + [ ] maxlength
  + [ ] placeholder-color
  + [ ] events
    + [ ] common events
    + [ ] input
    + [ ] change
    + [ ] focus
    + [ ] blur
+ [ ] `<textarea>`
  + [ ] value
  + [ ] placeholder
  + [ ] disabled
  + [ ] autofocus
  + [ ] rows
  + [ ] events
    + [ ] common events
    + [ ] input
    + [ ] change
    + [ ] focus
    + [ ] blur
+ [ ] `<switch>`
  + [ ] common events
  + [ ] checked
  + [ ] disabled
+ [ ] `<slider>`
  + [ ] auto-play
  + [ ] interval
  + [ ] events
    + [ ] common events
    + [ ] change
+ [ ] `<indicator>`
  + [ ] item-color
  + [ ] item-selected-color
  + [ ] item-size
+ [ ] `<list>`
  + [ ] loadmoreoffset
  + [ ] events
    + [ ] common events
    + [ ] loadmore
  + [ ] `<header>`
  + [ ] `<cell>`
+ [ ] `<scroller>`
  + [ ] show-scrollbar
  + [ ] scroll-direction
  + [ ] loadmoreoffset
  + [ ] loadmoreretry
  + [ ] events
    + [ ] common events
    + [ ] loadmore
+ [ ] `<refresh>`
  + [ ] display
  + [ ] events
    + [ ] refresh
    + [ ] pullingdown
  + [ ] children
    + [ ] `<text>`
    + [ ] `<image>`
    + [ ] `<loading-indicator>`
+ [ ] `<loading>`
  + [ ] display
  + [ ] events
    + [ ] loading
  + [ ] children
    + [ ] `<text>`
    + [ ] `<image>`
    + [ ] `<loading-indicator>`
+ [ ] `<video>`
  + [ ] common events
+ [ ] `<a>`
  + [ ] common events
+ [ ] `<web>`
  + [ ] common events

## Modules

+ [ ] dom
  + [ ] scrollToElement
    + [ ] node
    + [ ] offset
  + [ ] getComponentRect
    + [ ] ref
    + [ ] callback
+ [ ] stream
  + [ ] fetch
    + [ ] options
    + [ ] callback
    + [ ] progressCallback
+ [ ] modal
  + [ ] toast
    + [ ] message
    + [ ] duration
  + [ ] alert
    + [ ] message
    + [ ] okTitle
    + [ ] callback
  + [ ] comfirm
    + [ ] message
    + [ ] okTitle
    + [ ] cancelTitle
    + [ ] callback
  + [ ] prompt
    + [ ] message
    + [ ] okTitle
    + [ ] cancelTitle
    + [ ] callback
      + [ ] result
      + [ ] data
+ [ ] animation
  + [ ] transition
    + [ ] el
    + [ ] options
      + [ ] duration
      + [ ] delay
      + [ ] timingFunction
    + [ ] callback
+ [ ] webview
  + [ ] goBack
  + [ ] goForward
  + [ ] reload
+ [ ] navigator
  + [ ] push
    + [ ] url
    + [ ] animated
    + [ ] callback
  + [ ] pop
    + [ ] animated
    + [ ] callback
+ [ ] storage
  + [ ] setItem
  + [ ] getItem
  + [ ] removeItem
  + [ ] length
  + [ ] getAllKeys
+ [ ] clipboard
  + [ ] getString
    + [ ] callback
  + [ ] setString
+ [ ] picker
  + [ ] pick
    + [ ] index
    + [ ] items
    + [ ] callback
  + [ ] pickDate
    + [ ] value
    + [ ] max
    + [ ] min
    + [ ] callback
  + [ ] pickTime
    + [ ] value
    + [ ] callback
+ [ ] globalEvent
  + [ ] addEventListener
  + [ ] removeEventListener
