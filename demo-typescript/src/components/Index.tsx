import { ChangeEvent, useState, useEffect } from "react";
import Header from "./Header"
import Product from "./Product";


const Index = () => {
    const [name, setName] = useState<string>('Sneaker');
    const onChangeName = (event: ChangeEvent<{value: unknown}>) => {
        setName(event.target.value as string);
    }
    const [time, setTime] = useState<Date>(() => new Date(Date.now()));
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date(Date.now())),1000)
        return () => {
            clearInterval(timer)
        }
    }, [])
    
    return(
        <div>
            <div className="container">
            <div>
                <Header name={name} />
                <form>
                    <select value={name} onChange={onChangeName}>
                        <option value="Sneaker">Sneaker</option>
                        <option value="Shirt">Shirt</option>
                        <option value="Jean">Jean</option>
                    </select>
                </form>
            </div>
            <div>
                Time: {time.toUTCString()}
            </div>
            
        </div>
        <div>
        <Product />
        </div>
        </div>
        
    )
}
export default Index;

