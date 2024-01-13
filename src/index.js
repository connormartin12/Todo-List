import { clearPage, loadHomePage, updateTaskList, updateTaskCategories } from './page-load';

const contentDiv = document.querySelector('#content');
clearPage(contentDiv);
loadHomePage(contentDiv);
updateTaskCategories('All Tasks');
updateTaskList();
