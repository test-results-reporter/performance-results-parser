const path = require('path');
const { totalist } = require('totalist/sync');
const globrex = require('globrex');

/**
 * @param {string} file_path 
 */
function getMatchingFilePaths(file_path) {
  if (file_path.includes('*')) {
    const file_paths = [];
    const result = globrex(file_path);
    const dir_name = path.dirname(file_path.substring(0, file_path.indexOf('*') + 1));
    totalist(dir_name, (name) => {
      const current_file_path = `${dir_name}/${name}`;
      if (result.regex.test(current_file_path)) {
        file_paths.push(current_file_path);
      }
    });
    return file_paths;
  }
  return [file_path];
}

module.exports = {
  getMatchingFilePaths
}