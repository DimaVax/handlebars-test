// const template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");
import makeTemplateList from "../templates/dishes-list.hbs";
import {products} from "./dishes";

makeTemplateList(products)
const layout  = makeTemplateDishes({products});

const bodyEl = document.querySelector('body');
bodyEl.innerHTML = layout;