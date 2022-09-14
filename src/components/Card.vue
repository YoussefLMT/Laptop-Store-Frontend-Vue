<template>
<div id="root">
    <div class="container mt-4">
        <div class="c-dashboardInfo">
            <div class="wrap">
                <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title"><i :class="icon"></i>{{ title }}</h4><span class="hind-font caption-12 c-dashboardInfo__count">{{ count }}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['title', 'count', 'icon'],
}
</script>

<style scoped>
.c-dashboardInfo {
    margin-bottom: 15px;
}

.c-dashboardInfo .wrap {
    background: #ffffff;
    box-shadow: 2px 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    text-align: center;
    position: relative;
    overflow: hidden;
    padding: 10px 10px 5px;
    height: 100%;
}

.c-dashboardInfo__title,
.c-dashboardInfo__subInfo {
    color: #6c6c6c;
    font-size: 2em;
}

.c-dashboardInfo span {
    display: block;
}

.c-dashboardInfo__count {
    font-weight: 600;
    font-size: 2.5em;
    line-height: 64px;
    color: #323c43;
}

.c-dashboardInfo .wrap:after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    content: "";
}

.c-dashboardInfo .wrap:after {
    background: linear-gradient(81.67deg, #0084f4 0%, #1a4da2 100%);
}

.c-dashboardInfo__title svg {
    color: #d7d7d7;
    margin-left: 5px;
}

.MuiSvgIcon-root-19 {
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    flex-shrink: 0;
}

i {
    font-size: 50px;
    color: black;
    margin-right: 20px;
}
</style>
