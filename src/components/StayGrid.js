import React from 'react';
import {v4 as uuidv4} from "uuid";
import styled from "styled-components";


const Img = styled.img`
  height: 255px;
  width: 100%;
  margin-bottom: .7rem;
`
const Title = styled.h2`
  font-weight: 600;
  color: #333333;
`


const StayGrid = ({city, photo, title, type, rating, beds, superHost}) => {
    return (

        <div>
            <div key={uuidv4()}>
                <Img src={photo} className='rounded-lg' alt={title}/>
                <div className='flex justify-between'>
                    {superHost ?
                        <span
                            className='w-24 h-6 text-center border border-gray-700 rounded-lg p-1 uppercase text-xs'>
                                    super host
                                </span>
                        : null}
                    <p className='text-sm text-gray-500 ml-1'>{type}</p>
                    {beds ?
                        <p className='text-sm text-gray-500'>
                            {beds} beds</p> : null}
                    <span className='text-sm text-gray-500'>
                                         {/*<FontAwesomeIcon*/}
                                         {/*    icon="star"*/}
                                         {/*    style={{'color': '#EB5757'}}*/}
                                         {/*    size='2x'*/}
                                         {/*/>*/}
                        {rating}
                                    </span>

                </div>
                <Title className='pt-4'>{title}</Title>
            </div>

        </div>
    );
};

export default StayGrid;
