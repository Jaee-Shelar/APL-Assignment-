// Import the 'fs' module
const fs = require('fs');

// Directory to read (you can change this to any folder path)
const directoryPath = './';

// Read the contents of the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  console.log('📁 Files and folders in the directory:\n');

  // Loop through and print each file/folder name
  files.forEach((file) => {
    console.log(file);
  });
});
