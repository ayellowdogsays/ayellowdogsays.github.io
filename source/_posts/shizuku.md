---
abbrlink: 3019
categories: []
date: '2025-02-13T09:27:38.824946+08:00'
tags: []
title: 给你的stellar主题修改TWIKOO评论区
updated: '2025-02-13T14:19:19.082+08:00'
---
# 开头

twikoo自带的评论样式众所周知有点不好看，令人一言难尽啊...所以我们要做

- [X]  改css样试
- [ ]  自建评论区(NOOOOOOOO!)

# 中间上手

代码修改自HEO Stellar主题适配[语佬](weekdaycare.cn)提供的代码，在`theme/stellar/source/css/_plugins/comments`中找到twikoo,复制这个代码替换原内容

```css
.OwO .OwO-body
  min-width: 31.25rem
  color: var(--text)
.twikoo svg
  color: var(--text-p1)

.twikoo 
  .tk-comments > .tk-submit
    overflow: visible !important
  .tk-comments
    .OwO .OwO-body
      border-color: var(--block-border) !important
      border-radius: $border-card !important
      overflow: hidden
      background-color: var(--block) !important
      cursor: auto
      transform: translateZ(0)
      animation: .3s ease .1s 1 normal both running donate_effcet
      .OwO-bar
        color: var(--text)
      .OwO-items-show
        margin: 12px 8px
    button.el-button.tk-cancel.el-button--default.el-button--small
      background: var(--block)
      border-radius: $border-card
      border: 1px solid var(--block-border)
      color: var(--text-p1)
      &:hover
        background: var(--card)
        color: var(--text-p2)
    a.tk-submit-action-icon.__markdown
      display: none
    &>div.tk-submit>div.tk-row.actions>a
      display: none
    .el-button.tk-preview
      display: none
    .el-button--primary.is-disabled, .el-button--primary.is-disabled:active, .el-button--primary.is-disabled:focus, .el-button--primary.is-disabled:hover
      background-color: var(--block)
      color: var(--text-meta)
      border: 1px solid var(--block-border)
    .el-button--primary
      border: 1px solid var(--block-border)
      color: var(--text)
      border-radius: $border-card
      trans1 all
      width: 6.25rem
      position: absolute
      top: -40px
      right: 0
      margin-left: 0.5rem!important
      height: 32px
    .el-loading-spinner .path
      stroke: $color-theme
    .tk-input 
      .el-textarea__inner
        min-height: 130px !important
        border: 1px solid var(--block-border)
        border-radius: $border-card
        display: block
        resize: vertical
        padding: 16px 16px 40px 16px
        line-height: 1.5
        box-sizing: border-box
        width: 100%
        font-size: inherit
        color: var(--text-p1)
        background: var(--block)
        trans1 background
        &:focus
          background: var(--card)

    .el-input__inner
      background: var(--block)!important
      border: 1px solid var(--block-border)
      border-radius: 0 $border-card $border-card 0
      border-left-width: 0 !important
      color: var(--text-p1)!important
      padding-left: 8px
      &:hover, &:focus
        border: 1px solid var(--block-border)
    .el-input-group__append, .el-input-group__prepend
      background-color: var(--card)
      background-clip: border-box
      color: var(--text-p1)
      border: 1px solid var(--block-border)
      border-right: none
      border-radius: $border-card 0 0 $border-card
    .el-input--small .el-input__inner
      padding: 8px
      padding-left: 16px
  
    .tk-meta-input
      position: relative
      margin-top: 8px
      width: calc(100% - 6.875rem)
      .el-input .el-input-group__prepend
        user-select: none

    .tk-action-link
      color: var(--text-p2)
      background: var(--block)
      border-radius: $border-card
      padding: 2px 10px 2px 14px
      &:hover
        background: var(--card)
        trans1 background
      &:first-child
        display: none
    .tk-row 
      .tk-avatar
        display: none
      .tk-col
        flex-direction: column-reverse
      &.actions
        margin-bottom: 0
        margin-left: 0
        margin-top: 0
        justify-content: space-around
    .el-button
      background-color: var(--card)
      border: 1px solid var(--block-border)
    .tk-tag-green, .tk-tag-red
      background-color: var(--theme-link-opa)
      border: none
      border-radius: 4px
      color: var(--text-p2)
    .tk-action-icon
      color: var(--theme-link-opa)
      cursor pointer
    .tk-icon.__comments
      color: var(--theme-link-opa)
    .tk-actions
      a
      cursor pointer
    .tk-nick
      line-height: 40px
      color: var(--text-p1)
    .tk-extras
      margin-top: .5rem
      padding-bottom: .5rem
    .tk-expand
      width: auto
      trans1 background
      border-radius: $border-card
      letter-spacing: 5px
      margin-top: .5em
      background: var(--block)
      &:hover
        background-color: var(--card)

    .tk-content 
      p
        margin: 0
  .tk-comment .tk-submit .tk-avatar, .tk-replies .tk-avatar
    height: 2.5rem !important
    width: 2.5rem !important
  .tk-comment
    pre
      background: var(--block)
      padding: 1em
      overflow: auto
      border-radius: $border-card
  
  +maxWidth768()
    .tk-comments-container .tk-comment
      padding: 1rem
      background: var(--card)
    .tk-replies .tk-comment
      border: none

  .tk-avatar .tk-avatar-img
      height: 2.5rem !important

  .code-toolbar .toolbar .toolbar-item
    >a, >button, >span
      font-family: $ff-codeblock  
    >button
      border: none !important
      background: var(--card)

.tk-replies
  max-height: 10rem !important
  &.tk-replies-expand
    max-height: none !important
  .tk-comment
    border-radius: $border-card
    padding: 1rem 0px 0px
    margin-top: 0
    trans1 all
  .tk-content span:first-child:not(.token)
    font-size: .75rem
    color: var(--text-p2)

.twikoo .tk-extra
  background: var(--block)
  padding: 4px 8px
  border-radius: $border-card
  margin-right: 4px
  color: var(--text-p3)
  margin-top: 6px
  font-size: 0.8rem

.twikoo .tk-time
  color: var(--text-p3)

.twikoo .tk-extra-text 
  font-size: .75rem

.twikoo .tk-content 
  margin-top: 0

.tk-content span a:not([data-fancybox="gallery"])
  color: var(--text-p1)
  padding: 0 0.2em
  text-decoration: none
.tk-content span a:not([data-fancybox="gallery"]):hover
  color: $color-theme
.tk-main .tk-content span > a 
  border-bottom: none

.post-comment .comment-head 
  font-size: 0.8em !important
  margin-bottom: 0.5rem

.body-wrap.page .el-input__inner 
  background: var(--card)
  color: var(--text-p1)

.body-wrap.page .tk-admin-config .el-input__inner
  color: currentColor

.tk-comments-container > .tk-comment 
  margin-top: 0 !important
  margin-bottom: 1rem !important
  trans1 all
  border-radius: $border-card
  padding: 0
  padding-top: 1rem
  border: none

.page .tk-comments-container > .tk-comment
  background: var(--card)
  padding: 1rem
  padding-bottom: 1rem

.tk-content
  margin-top: 0.5rem
  overflow: auto
  max-height: 500px
  .tk-owo-emotion
    display: inline
    margin: 0 0.25em
    max-height: 24px
    width: unset

.tk-comments .tk-row-actions-start 
  position: absolute
  top: -84px
  left: 17px

@media screen and (max-width: 768px) 
  .OwO .OwO-body 
    min-width: 260px
  
  .tk-comments .tk-row-actions-start 
    top: -164px
  
  .twikoo .tk-comments .tk-submit .el-button--primary 
    height: 112px
    top: -120px
  
  .twikoo .el-textarea__inner 
    background: var(--block)!important
    overflow: hidden
    resize: none!important

  .tk-comments button.el-button.tk-preview.el-button--default.el-button--small 
    display: none
  
  .tk-comments .tk-main .tk-submit .tk-row.actions 
    justify-content: center
  
  .tk-comments .tk-row-actions-start 
    position: absolute
  
```

# 最后

你会高兴的发现twikoo变成了另外一种很舒服的样式！

- 笔记 .OwO是一个语法，不是表情包
