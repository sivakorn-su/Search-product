import { useState, useEffect } from 'react'
import GridItem from './GridItem';
import './CSS/Item.css'
import Grids from './Grid';
import { style } from '@mui/system';
import styled from '@emotion/styled';
function AppBody(props) {
    const [products, setProduct] = useState([])
    const { search } = props
    async function getPost() {
        fetch(`https://dummyjson.com/products/search?q=${search}`)
            .then((response) => response.json())
            .then((actualData) => {
                // console.log(typeof(actualData.products))
                setProduct(actualData.products);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    const Warning = styled.div`
     list-style-type: none;
    background-color: white;
    box-shadow: 0 1px 3px rgb(0,0,0,0.12);
    margin: 10px;
    justify-content:baseline;
    max-width: 290px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 20px;
    padding: 5px 15px;
    border-radius:30px ;
    `;

    useEffect(() => {
        getPost(search);
        
    }, [search])
    return (
        <div className='item_list'>
             { Object.keys(products).length === 0  ?(
                <Warning>
                    <h3>Warning: There is no product you are looking for.</h3>
                </Warning>
            ) : (
                <Grids>
                    {products.map((element) => {
                        return <GridItem {...element} key={element.id} />;
                    })}
                </Grids>
            )} 

        </div>


    )

}

export default AppBody