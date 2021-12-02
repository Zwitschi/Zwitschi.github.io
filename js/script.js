/**
 * Codebase for zwitschi.github.io
 * 
 * @author: Georg Sinn <zwitschi82 at gmail dot com>
 * 
 * @license: GNU GPLv3
 * 
 * @version: 0.1.0
 * 
 */

/**
 * @name: script
 * 
 * @description: main script
 */
function init() {
    // init  
    get_site_copy_year()  
}

function get_site_copy_year() {
    var container_site_copy_year = $('#site-copy-year')
    alert("Old Year: "+container_site_copy_year)
    container_site_copy_year.text(new Date().getFullYear())
}

body.onload(init())