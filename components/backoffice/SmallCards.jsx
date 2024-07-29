import React from 'react'
import { CheckCheck, ShoppingCart, RefreshCcw, Loader2} from 'lucide-react'
import SmallCard from './SmallCard'

export default function SmallCards() {
    const orderStatus = [
        {
            title: "Total Order",
            number: 500,
            iconBg: "bg-green-600",
            icon: ShoppingCart
        },
        {
            title: "Orders Pending",
            number: 200,
            iconBg: "bg-orange-600",
            icon: Loader2
        },
        {
            title: "Order Processing",
            number: 300,
            iconBg: "bg-green-600",
            icon: RefreshCcw
        },
        {
            title: "Orders Delivered",
            number: 400,
            iconBg: "bg-purple-600",
            icon: CheckCheck
        }
    ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
        {
            orderStatus.map((data,i)=>{
                return(
                    <SmallCard data={data} key={i}/>
                )
            })
        }
     
    </div>
  )
}
