let bookList=[
    {name:"Aook3",status:true,price:"15"},
    {name:"Book2",status:true,price:"15"},
    {name:"Cook1",status:true,price:"15"}
]

function compare( a, b ) {
    if ( a.name > b.name ){
      return -1;
    }
    if ( a.name < b.name ){
      return 1;
    }
    return 0;
  }

function unordererdListRender() {
    bookList.map((bookRender)=>{
        document.getElementById("normalList").innerHTML+=`<li>${bookRender.name}-${bookRender.price}-${bookRender.status}</li>`
    })
}
unordererdListRender()

function render(){
    bookList.sort( compare ).map((bookRender)=>{
        document.getElementById("print").innerHTML+=`<li>${bookRender.name}-${bookRender.price}-${bookRender.status}</li>`
    })
    
}