import Vue from "../utils/vue";
import { getOptionsByKeyEqual } from "../utils/get-options";

const sizeOptions = {
  sm: "btn-group-sm",
  lg: "btn-group-lg"
};
export var NlyButtonGroupMixins = Vue.extend({
  name: "NlyButtonGroupMixins",
  props: {
    vertical: {
      type: Boolean
    },
    size: {
      type: String
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    customVertical: function() {
      return this.vertical ? "btn-group-vertical" : "btn-group";
    },
    customSize: function() {
      return getOptionsByKeyEqual(sizeOptions, this.size);
    },
    customTag: function() {
      return this.tag;
    }
  }
});