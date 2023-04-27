const { google } = require('googleapis');
const keys = require('../config/keys.json');

const client = new google.auth.JWT(
  keys.client_email,
  null,
  keys.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
);

const getRows = async () => {
  try {
    await client.authorize();
    const gsapi = google.sheets({ version: 'v4', auth: client });
    const opt = {
      spreadsheetId: keys.spreadsheet_id,
      range: 'A1:Z100',
    };
    const { data } = await gsapi.spreadsheets.values.get(opt);
    return data.values.slice(1);
  } catch (err) {
    console.error('Error fetching rows from Google Sheets: ', err);
    return null;
  }
};

module.exports = { getRows };
