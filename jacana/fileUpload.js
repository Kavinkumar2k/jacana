// module.exports={
//     'jacana':function(browser){
//         browser.url("http://demo.lcp.neartekpod.io/")
//         .maximizeWindow()
//         .pause(3000)

//         .click('body > header > nav > ul:nth-child(3) > li > a > button')
//         .pause(3000)
//         .setValue('#username', 'test@test.com')
//         .setValue('#password', 'Qwerty@123')
//         .pause(1000)
//         .click('body > div > main > section > div > div > div > form > div.cc199ae96 > button')
//         .pause(2000)
         

//     }
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const xlsx = require('xlsx');
const path = require('path');

function readExcel(filePath, sheetName) {
  const workbook = xlsx.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(worksheet);
  return data;
}

module.exports = {
  'jacana': function(browser) {
    // Path to your Excel file and the sheet name
    const filePath = 'C:/Users/User/Desktop/jacana.xlsx';
    const sheetName = 'input';

    // Read data from Excel
    const data = readExcel(filePath, sheetName);
    console.log('Excel Data:', data); // Log the data read from Excel


    // Assuming the Excel file has columns named 'username' and 'password' and 'imagepath'
    const username = data[0].username;
    const password = data[0].password;
    const imagePath = data[0].imagePath;
    console.log(username , password)

    browser.url("http://demo.lcp.neartekpod.io/")
      .maximizeWindow()
      .pause(3000)
      .click('body > header > nav > ul:nth-child(3) > li > a > button')
      .pause(3000)
      .setValue('#username', username)
      .setValue('#password', password)
      .pause(1000)
      .click('body > div > main > section > div > div > div > form > div.cc199ae96 > button')
      .pause(2000)
      .click('body > header > nav > ul:nth-child(2) > li:nth-child(2) > a')
      .pause(5000)
      const image = path.resolve(__dirname, imagePath); // Update this with the correct file path
      browser.setValue('#upload', image)
      .pause(5000)
  }
};


