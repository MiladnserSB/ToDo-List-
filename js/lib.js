export const parseTableAhmad = (id) => {
  const table = document.getElementById(id);
  const headers = table.querySelectorAll("thead tr th");
  const headersArray = Array.from(headers).map((elem) => {
    return elem.innerHTML;
  });

  const dataRows = table.querySelectorAll("tbody tr");
  const dataRowsArray = Array.from(dataRows).map((row) => {
    const data = row.querySelectorAll("td");
    const person = {};
    Array.from(data).map((td, i) => {
      person[headersArray[i]] = td.innerHTML;
    });
    return person;
  });
  return dataRowsArray;
};

export const renderTableLana = (id, data) => {
  const table = document.getElementById(id);
  table.innerHTML = "";
  //create table header
  const header = document.createElement("thead");
  const tr = document.createElement("tr");
  Object.keys(data[0]).map((key) => {
    const th1 = document.createElement("th");
    th1.setAttribute("scope", "col");
    th1.innerHTML = key;
    tr.append(th1);
  });
  if (id == "taskTable") {
    const th2 = document.createElement("th");
    th2.setAttribute("scope", "col");
    th2.innerHTML = "Actions";
    tr.append(th2);
  }
  header.append(tr);
  table.append(header);
  //create table body
  const body = document.createElement("tbody");
  body.classList.add("table-group-divider");
  data.map((trObj) => {
    const trs = document.createElement("tr");
    Object.values(trObj).map((d) => {
      const td = document.createElement("td");
      td.innerHTML = d;
      trs.append(td);
    });
    if (id == "taskTable") {
      const td = document.createElement("td");
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("btn", "btn-danger");
      deleteBtn.innerHTML = "Delete";
      const updateBtn = document.createElement("button");
      updateBtn.classList.add("btn", "btn-primary", "me-1"); 
      updateBtn.innerHTML = "Update";
      const statusBtn = document.createElement("button");
      statusBtn.classList.add("btn", "btn-success", "me-1"); 
      statusBtn.innerHTML = "Status";
      td.append(statusBtn);
      td.append(updateBtn);
      td.append(deleteBtn);
      trs.append(td);
    }
    body.append(trs);
  });
  table.append(body);

//   const inputFilterJamal = document.createElement("input");
//   inputFilterJamal.addEventListener("input", (e) => {
//     let seachText = e.target.value.trim();
//     const trs = Array.from(table.querySelectorAll("tbody tr"));
//     trs.map((tr) => {
//       if (!tr.textContent.includes(seachText)) {
//         tr.style.display = "none";
//       } else {
//         tr.style.display = "";
//       }
//     });
//   });
//   table.before(inputFilterJamal);
};
