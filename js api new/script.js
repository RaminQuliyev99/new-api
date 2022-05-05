

let tbl = document.getElementsByTagName("table");
let show = document.getElementsByTagName(".table")
let tr = " ";

let f = fetch("https://jsonplaceholder.typicode.com/posts");
f.then(response => {
    response.json().then(data => {
        data.forEach(element => {
            console.log(element.id,element.userId,element.title,element.body);

           for (key in element) { tbl += tr+=`<tr>`;
                '<td> ${key.id} </td>';
                '<td> ${key.userId}</td>';
                '<td> ${key.title}</td>';
                '<td> ${key.body}</td>';       
            tbl += tr+=`</tr>`;    
        };
           show=innerHTML.tbl
        });
    })
   

})

// tbl += `<tr>`;
// for (let j = 0; j<element.leght; j++) {
//     tr += `<td > ${elemnet.id} </td>`;
//     `<td> ${element.name}</td>`;
//     `<td> ${element.username}</td>`;

// };

// tbl += `</tr>`;