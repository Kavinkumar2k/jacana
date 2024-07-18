const xlsx = require('xlsx');
 
function readExcel(filePath, sheetName) {
  const workbook = xlsx.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(worksheet);
  return data;
}
 
module.exports = {
  'jacanaLogin': function(browser) {
    // Path to your Excel file and the sheet name
    const filePath = 'C:/Users/User/Desktop/jacana.xlsx'; // Replace with your actual file path
    const sheetName = 'login'; // Replace with your actual sheet name
 
    // Read data from Excel
    const credentials = readExcel(filePath, sheetName);
    console.log('Excel Data:', credentials); // Log the data read from Excel
 
    // Check if data is read correctly
    if (credentials.length === 0) {
      console.error('No data found in the Excel file.');
      browser.end();
      return;
    }
 
    // Iterate over each set of credentials
    credentials.forEach((credential, index) => {
      const username = credential.username;
      const password = credential.password;
 
      console.log(`Testing credentials set ${index + 1}:`, { username, password });
 
    //   if (!username || !password) {
    //     console.error(`Username or password not found for set ${index + 1} in the Excel file.`);
    //     return;
    //   }
 
      browser
        .url("http://demo.lcp.neartekpod.io/")
        .maximizeWindow()
        .pause(3000)
        .click('body > header > nav > ul:nth-child(3) > li > a > button')
        .pause(3000)
        .setValue('#username', username)
        .pause(1000)
        .setValue('#password', password)
        .pause(5000)
        .click('body > div > main > section > div > div > div > form > div.cc199ae96 > button')
        .pause(2000)
    });
  }
};
 