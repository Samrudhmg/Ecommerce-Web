import { ReactElement, useState } from "react";
import TableHOC from "../Components/admin/TableHOC"
import { Column } from "react-table";
import { Link } from "react-router-dom";

 

type DataType={
    _id:string;
    amount:number;
    quantity:number;
    discount:number;
    status:ReactElement;
    action:ReactElement;
}

const column : Column<DataType>[]=[{
    Header:"Id",
    accessor:"_id",
},
{
    Header:"Amount",
    accessor:"amount",
}, 
{
    Header:"Quantity",
    accessor:"quantity",
},  
{
    Header:"Discount",
    accessor:"discount",
},
{
    Header:"Status",
    accessor:"status",
},
{
    Header:"Action",
    accessor:"action",
}

]

const Orders = () => {

    const[rows]=useState<DataType[]>([
        {
            _id:"thisisfirst",
            amount:46733,
            quantity:23,
            discount:3445,
            status:<span className="red">Processing</span>,
            action:<Link to={'/order/thisisfirst'}>View</Link>
        },
    ])

    const Table = TableHOC<DataType>(
        column,
        rows,
        "dashboard-product-box",
        "Orders",
        rows.length > 6
        )();
  return (
    <div className='container'>
        <h1>My Orders</h1>
        {
            Table
        }

    </div>
  )
}

export default Orders