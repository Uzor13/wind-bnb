import './App.css';
import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import StaysData from "./components/StaysData";
import Footer from "./components/Footer";


function App() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [guests, setGuests] = useState();

    const getData = () => {
        fetch('stays.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        ).then((res) => {
            console.log(res);
            return res.json();
        }).then((data) => {
            setData(data);
            setLoading(false)
        })
            .catch((err) => {
                console.error(err.message)
            })
    }
    useEffect(() => {
        getData()
    }, []);


    const filterOnChange = (e) => {
        setInputValue(e.target.value);
    }
    const filteredData = data.filter((data) => {
        return data.city.toLowerCase().includes(inputValue.toLowerCase());
    });

    return (
        <div className="App">
            <Header filteredData={filteredData} inputValue={inputValue} filterOnChange={filterOnChange} />
            <Title/>
            <StaysData data={filteredData} loading={loading}/>
            <Footer/>
        </div>
    );
}

export default App;
