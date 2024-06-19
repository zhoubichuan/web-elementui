<template>
  <el-tooltip
    :key="index"
    :style="show ? '' : 'cursor:pointer'"
    :class="rowClass"
    :disabled="show"
    :content="content"
    :placement="placement"
    :effect="effect"
    :popper-class="'define-tooltip ' + popperClass"
    @mousemove.native.self="showTips"
    @touchstart.native.self="showTips"
    @touchend.native.self="closeTips"
  >
    <span v-html="data"></span>
  </el-tooltip>
</template>
<script>
export default {
  name: "WebTooltip",
  data() {
    return {
      index: 0,
      show: true,
    };
  },
  props: {
    popperClass: {
      type: String,
      default: "",
    },
    placement: {
      type: String,
      default: "bottom-start",
    },
    effect: {
      type: String,
      default: "dark",
    },
    data: {
      type: String,
      default: "",
    },
    line: {
      type: Number,
      default: 1,
    },
    preWord: {
      type: String,
      default: "",
    },
    row: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 1000,
    },
  },
  computed: {
    content() {
      if (this.preWord) {
        return this.data.replace(this.preWord, "").replace(/<[^>]+>/g, "");
      }
      return this.data.replace(/<[^>]+>/g, "");
    },
    rowClass() {
      return ["single-row", "two-row", "three-row"][this.line - 1];
    },
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeyDown);
  },
  destroyed() {
    window.removeEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    closeTips(e) {
      let timer = setTimeout(() => {
        this.index += 1;
        clearTimeout(timer);
      }, 800);
      this.$on("hook:destroyed", () => {
        clearTimeout(timer);
        timer = null;
      });
    },
    handleKeyDown(event) {
      if (event.keyCode === 9) {
        event.preventDefault();
      }
    },
    showTips(e) {
      if (this.line === 1) {
        const { clientWidth, clientHeight, scrollWidth, scrollHeight } =
          e.target;
        if (this.row) {
          this.show = scrollWidth <= clientWidth;
        } else {
          this.show = scrollHeight <= clientHeight;
        }
      } else {
        const { lineHeight } = window.getComputedStyle(e.target);
        const { scrollHeight } = e.target;
        if (scrollHeight > lineHeight.slice(0, -2) * (this.line + 0.5)) {
          this.show = false;
        } else {
          this.show = true;
        }
      }
    },
  },
};
</script>
<style lang="scss">
@mixin singleOverFlow($space) {
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  white-space: $space;
}
@mixin moreOverFlow($row) {
  @include singleOverFlow(nowrap);
  -webkit-line-clamp: $row;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
@mixin fontAll($size: 24px, $weight: 700, $color: inherit) {
  font-size: $size;
  font-weight: $weight;
  color: $color;
}
.el-icon-loading {
  position: absolute;
  left: 5px;
}
.three-row {
  @include moreOverFlow(3);
  @include fontAll($size: 24px, $weight: 700, $color: inherit);
  line-height: 32px;
}
.two-row {
  @include moreOverFlow(2);
  @include fontAll($size: 24px, $weight: 700, $color: inherit);
  line-height: 32px;
}
.single-row {
  @include singleOverFlow(nowrap);
  width: 100%;
  display: inline-block;
  vertical-align: middle;
  line-height: 32px;
}
.define-tooltip {
  padding: 16px;
  max-width: 516px;
  line-height: 32px;
  font-size: 24px;
  line-break: anywhere;
  &.el-tooltip__popper {
    &.is-dark {
      background: rgba(51, 51, 51, 0.7);
      border-radius: 4px;
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
      font-family: PingFang Regular;
      color: #ffffff;
      .popper_arrow {
        border-bottom-color: transparent;
        opacity: 0.7;
        right: -6px !important;
        left: unset !important;
      }
    }
    &[x-placement^="left"] {
      &.is-dark {
        background: rgba(51, 51, 51, 0.7);
        border-radius: 4px;
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
        font-family: PingFang Regular;
        color: #ffffff;
        .popper_arrow {
          border-bottom-color: transparent;
          opacity: 0.7;
          right: -6px !important;
          left: unset !important;
        }
      }
    }
    &[x-placement^="bottom-start"] {
      &.is-dark {
        background: rgba(51, 51, 51, 0.7);
        border-radius: 4px;
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
        font-family: PingFang Regular;
        color: #ffffff;
        .popper_arrow {
          border-bottom-color: rgba(51, 51, 51, 0.7);
          opacity: 0.7;
          left: 16px !important;
        }
      }
    }
    &.is-light {
      background: #ffffff;
      border-radius: 4px;
      box-shadow: 0 3px 12px rgba(250, 250, 250, 0.15);
      font-family: PingFang Regular;
      color: rgba(51, 51, 51, 0.7);
      .popper_arrow {
        border-bottom-color: #e6ebf5;
        opacity: 1;
      }
    }
  }
}
</style>