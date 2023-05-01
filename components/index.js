import SearchForm from './SearchForm/index.vue'
import TablePage from './TablePage/index.vue'
import Collapse from './Collapse/index.vue'
import CollapseItem from './Collapse/CollapseItem.vue'
import TableColumn from './TablePage/TableColumn.vue'
import ButtonGroup from './ButtonGroup/index.vue'
import MeDropdown from './ButtonGroup/MeDropdown.vue'
import MeDropdownMenu from './ButtonGroup/MeDropdownMenu.vue'
import MeButton from './ButtonGroup/MeButton.vue'
import FormItem from './FormItem.vue'
import DialogForm from './Dialog/DialogForm.vue'
import SliderRight from './SliderRight.vue'
import UploadImage from './UploadImage'
import { version } from '/package.json';

const components = {
    SearchForm,
    TablePage,
    Collapse,
    CollapseItem,
    TableColumn,
    ButtonGroup,
    MeDropdown,
    MeDropdownMenu,
    MeButton,
    FormItem,
    DialogForm,
    SliderRight,
    UploadImage
};

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  })
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  version,
  install,
  ...components
};

export default API;
