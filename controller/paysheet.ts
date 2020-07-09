import {log} from '../util/logs';
import {PAYSHEET, logMessage, SHEET1, NEWFILE, TEXT_CSV} from '../constants';
import * as xlsx from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

const {ERROR_MESSAGE} = logMessage;

export const genPaysheet = async (req, res) => {
  try {
    const doc = req.files;
    if (doc.length <= 1 || doc.length > 2) {
      return res.status(400).json({message: ERROR_MESSAGE});
    }
    const filePath1 = doc[0].path;
    const filePath2 = doc[1].path;
    const wb = xlsx.readFile(filePath1);
    const wb2 = xlsx.readFile(filePath2);
    const ws = wb.Sheets[SHEET1];
    const ws2 = wb2.Sheets[SHEET1];
    let data1 = xlsx.utils.sheet_to_json(ws);
    let data2 = xlsx.utils.sheet_to_json(ws2);
    const sortedSheet = [...data1, ...data2].sort((a: any, b: any) => {
      const nameA = a.OrderNum.toUpperCase(); // ignore upper and lowercase
      const nameB = b.OrderNum.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    fs.unlinkSync(filePath1);
    fs.unlinkSync(filePath2);
    const newWb = xlsx.utils.book_new();
    const newWs = xlsx.utils.json_to_sheet(sortedSheet);
    xlsx.utils.book_append_sheet(newWb, newWs, SHEET1);
    await xlsx.writeFile(newWb, NEWFILE);
    const filePath = path.join(process.cwd(), NEWFILE);
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
      'Content-Type': TEXT_CSV,
      'Content-Length': stat.size,
    });

    var readStream = fs.createReadStream(filePath);
    // We replaced all the event handlers with a simple call to readStream.pipe()
    readStream.pipe(res);
  } catch (err) {
    log(err);
  }
};

export const getPaysheet = (req, res) => {
  return res.render(PAYSHEET);
};
