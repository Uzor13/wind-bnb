import React from 'react';
import {v4 as uuidv4} from 'uuid';
import StayGrid from "./StayGrid";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: 1fr;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const StaysData = ({data, loading}) => {
    return (
        <>
            {loading ? <Loader
                    type="Audio"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000}
                /> :
                <Grid className='gap-6 px-9 py-4'>
                    {data.map((info) => {

                        return (

                            <StayGrid
                                key={uuidv4()}
                                city={info.city}
                                superHost={info.superHost}
                                title={info.title}
                                rating={info.rating}
                                type={info.type}
                                beds={info.beds}
                                photo={info.photo}
                            />

                        )
                    })}
                </Grid>
            }
        </>
    )
};

export default StaysData;