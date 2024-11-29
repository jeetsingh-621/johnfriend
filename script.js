let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];

  function PrintDeveloperbyMap() {
    arr.map((item,index)=>{
        if(item.profession =='developer'){
            console.log(item);
        };
    });
  };

  function PrintDeveloperbyForEach() {
    arr.forEach((item,index)=>{
        if(item.profession ==='developer'){
        console.log(item);
        };
    });
  };

  function addData() {
    const newEmployee = { id: 4, name: "Susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(arr);
  };

  function removeAdmin() {
    arr = arr.filter(item => item.profession !== "admin");
    console.log(arr);
  };

  function concatenateArray() {
const newitem = [
    { id: 5, name: "Emily", age: "22", profession: "manager" },
    { id: 6, name: "Mark", age: "21", profession: "developer" },
    { id: 7, name: "jitu", age: "24", profession: "developer" }

  ];

  arr = arr.concat(newitem);
  console.log(arr);
};



  PrintDeveloperbyMap();
  PrintDeveloperbyForEach();
  addData();
  removeAdmin();
  concatenateArray();