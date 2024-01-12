import { clearPage, loadHomePage, updateHomePage } from './page-load';
import { Task, allTasks } from './task';

const contentDiv = document.querySelector('#content');
clearPage(contentDiv);
loadHomePage(contentDiv);
updateHomePage(contentDiv);
