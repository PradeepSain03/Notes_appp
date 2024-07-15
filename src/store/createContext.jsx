import { createContext, useState } from "react";

export const CreateContext = createContext({
    Arr: [],
    adData: () => { },
    setinput: '',
    input: '',
    product: '',
    search: () => { },
    setSortinput: '',
    sortInput: '',
    sort: () => { },
    edit: () => { },
    fav: () => { },
    editHeading: '',
    editDescripton: '',
    editDate: '',
    editData: '',
    edit1: () => { }
});

export function CreteContext1({ children }) {
    const [data, setAddData] = useState({
        items: [],
    });

    // add Data to items

    function addData(heading, description, date) {
        console.log("hello")
        setAddData((prev) => {
            let obj = {
                heading, description, date, setFav: false
            }
            const newItem = [...prev.items, obj]
            return { ...prev, items: newItem };
        });
        console.log(data)

    }
    // search function

    const [input, setInput] = useState('');
    const [products, setProducts] = useState([]);
    function handleSearchClick() {

        const filterBySearch = data.items.filter((item) => {
            if (item.heading
                .includes(input)) { return item; }
        })
        setProducts(filterBySearch);

    }

    // sort function
    const [sortInput, setSortInput] = useState('');


    function sort(e) {
        setSortInput(e.target.value)
        console.log(sortInput)
        if (sortInput === 'ascending') {
            console.log(true)
            const arr = data.items.sort((a, b) => {
                let x = a.heading.toLowerCase();
                let y = b.heading.toLowerCase();


                if (x > y) { return -1; }
                if (x < y) { return 1; }
                return 0;
            })
            setAddData(prev => { return { ...prev, items: arr } })


        }
        else if (sortInput === 'descending') {
            console.log(false)
            const arr = data.items.sort((a, b) => {
                let x = a.heading.toLowerCase();
                let y = b.heading.toLowerCase();

                if (x > y) { return 1; }
                if (x < y) { return -1; }
                return 0;
            })
            setAddData(prev => { return { ...prev, items: arr } })
            console.log(data.items)
        }
    }

    const [EditHead, setEditHead] = useState('')

    const [Editdes, setEditDes] = useState('')

    const [EditDate, setEditDate] = useState('')
    const [editdata, setEditData] = useState([])
    function edit1(id1) {
        const temmp1 = data.items.filter((item, i) => {
            if (i == id1) {
                return item;
            }
        })
        setEditData(temmp1)
    }
    console.log(editdata)
    function edit(heading, description, date, id) {

        // setAddData((prev) => {
        //     let obj = {
        //         heading, description, date, id
        //     }


        //     const temmp = prev.items.filter((item, i) => {
        //         return i !== id
        //     })

        //     const newItem = [...temmp, obj]
        //     return { ...prev, items: newItem };
        // });

        setAddData((prev)=>{
            const update=prev.items.map((item,i)=>{
                if(i==id){
                    return {
                        heading,description,date,id
                    }
                }
                return item;
            })
            return{...prev,items:update}
        })
    }

    function fav(id) {

        setAddData((prev) => {
            let arr = prev.items.filter((item, i) => {
                return i == id

            });
            let arr2 = prev.items.filter((item, i) => {
                return i != id

            });

            for (let i of arr) {
                console.log(i);
                if (i.setFav === false) {
                    i.setFav = true;
                }
                else {
                    i.setFav = false;
                }

            }
            prev.items = [...arr2, ...arr]
            console.log(prev.items)
            return { items: prev.items }
        });
    }



    const ctxValue = {
        Arr: data.items,
        adData: addData,
        setinput: setInput,
        input: input,
        product: products,
        search: handleSearchClick,
        setSortinput: setSortInput,
        sortInput: sortInput,
        sort: sort,
        edit: edit,
        fav: fav,
        editHeading: EditHead,
        editDescripton: Editdes,
        editDate: EditDate,
        editData: editdata,
        edit1: edit1

    };

    return <CreateContext.Provider value={ctxValue}>
        {children}
    </CreateContext.Provider>
}