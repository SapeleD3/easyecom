let response;
let val;

const input = document.getElementById('excelFile');
input.addEventListener(
  'change',
  () => {
    const names = [];
    for (var i = 0; i < input.files.length; ++i) {
      var name = input.files.item(i).name;
      names.push(name);
    }
    val = input.files;
    document.getElementById('inputText').innerHTML = names.join(', ');
  },
  false,
);

document.getElementById('createSheet').addEventListener('click', genSheet);
async function genSheet() {
  try {
    const form = new FormData();
    for (let i = 0; i < input.files.length; ++i) {
      form.append('doc', input.files[i]);
    }
    response = await axios.post('http://localhost:7000/pay', form);

    document.getElementById('warningAlert').className = 'alert alert-success';
    document.getElementById('warningAlert').innerHTML = 'successful';
  } catch (err) {
    document.getElementById('warningAlert').className = 'alert alert-danger';
    document.getElementById('warningAlert').innerHTML =
      err.response.data.message;
  }
}

function download_csv() {
  const a = document.createElement('a');
  a.href = 'data:text/csv;charset=utf-8,' + encodeURI(response.data);
  a.target = '_blank';
  a.download = 'newFile.csv';
  a.click();
}
